<?php

namespace App\Http\Controllers;

use App\Models\Answer;
use App\Models\Question;
use App\Models\QuizAttempt;
use Illuminate\Http\Request;
use Illuminate\Support\Collection;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;
use Inertia\Response;

class ProgressController extends Controller
{
    public function __invoke(Request $request): Response
    {
        $user = $request->user();

        $attempts = QuizAttempt::query()
            ->where('user_id', $user->id)
            ->whereIn('status', [QuizAttempt::STATUS_SUBMITTED, QuizAttempt::STATUS_GRADED])
            ->with(['quiz:id,title,category_id', 'quiz.category:id,name'])
            ->orderBy('quiz_id')
            ->orderBy('attempt_number')
            ->get();

        $totalAttempts = $attempts->count();
        $quizIds = $attempts->pluck('quiz_id')->unique()->filter()->values();

        $maxScores = $quizIds->isNotEmpty()
            ? Question::whereIn('quiz_id', $quizIds)
                ->groupBy('quiz_id')
                ->select('quiz_id', DB::raw('SUM(points) as max_score'))
                ->pluck('max_score', 'quiz_id')
                ->map(fn ($v) => (int) $v)
            : collect();

        $attemptPcts = $attempts->map(function ($attempt) use ($maxScores) {
            $max = $maxScores->get($attempt->quiz_id, 0);

            return $max > 0 ? (int) round(($attempt->total_score / $max) * 100) : 0;
        });

        $avgPct = $totalAttempts > 0 ? (int) round($attemptPcts->average()) : 0;
        $bestPct = $totalAttempts > 0 ? (int) $attemptPcts->max() : 0;
        $quizzesTaken = $quizIds->count();

        $quizHistory = $attempts->groupBy('quiz_id')->map(function (Collection $quizAttempts) use ($maxScores) {
            $quiz = $quizAttempts->first()->quiz;

            if (! $quiz) {
                return null;
            }

            $maxScore = $maxScores->get($quiz->id, 0);

            $attemptData = $quizAttempts->map(function ($attempt) use ($maxScore) {
                $pct = $maxScore > 0 ? (int) round(($attempt->total_score / $maxScore) * 100) : 0;

                return [
                    'id' => $attempt->id,
                    'number' => $attempt->attempt_number,
                    'score' => $attempt->total_score,
                    'max_score' => $maxScore,
                    'pct' => $pct,
                    'submitted_at' => $attempt->submitted_at?->toISOString(),
                ];
            })->values()->all();

            $pcts = collect($attemptData)->pluck('pct');
            $trend = 'stable';

            if ($pcts->count() > 1) {
                $diff = (int) $pcts->last() - (int) $pcts->first();
                if ($diff >= 10) {
                    $trend = 'improving';
                } elseif ($diff <= -10) {
                    $trend = 'declining';
                }
            }

            return [
                'quiz' => ['id' => $quiz->id, 'title' => $quiz->title],
                'attempts_count' => $quizAttempts->count(),
                'best_pct' => (int) $pcts->max(),
                'avg_pct' => (int) round($pcts->average()),
                'latest_pct' => (int) $pcts->last(),
                'trend' => $trend,
                'history' => $attemptData,
            ];
        })->filter()->values()->all();

        $typeRows = Answer::query()
            ->join('quiz_attempts', 'answers.quiz_attempt_id', '=', 'quiz_attempts.id')
            ->join('questions', 'answers.question_id', '=', 'questions.id')
            ->where('quiz_attempts.user_id', $user->id)
            ->whereIn('quiz_attempts.status', [QuizAttempt::STATUS_SUBMITTED, QuizAttempt::STATUS_GRADED])
            ->where(function ($q) {
                // Exclude skipped answers (no text and no selected choices)
                $q->whereNotNull('answers.answer')
                    ->orWhere(function ($inner) {
                        $inner->whereNotNull('answers.answer_json')
                            ->where('answers.answer_json', '!=', '[]');
                    });
            })
            ->select(
                'questions.type',
                DB::raw('COUNT(answers.id) as total'),
                DB::raw('SUM(CASE WHEN answers.score > 0 THEN 1 ELSE 0 END) as correct')
            )
            ->groupBy('questions.type')
            ->get();

        $typeStats = $typeRows->mapWithKeys(function ($row) {
            $pct = $row->total > 0 ? (int) round(($row->correct / $row->total) * 100) : 0;

            return [
                $row->type => [
                    'total' => (int) $row->total,
                    'correct' => (int) $row->correct,
                    'pct' => $pct,
                ],
            ];
        });

        $categoryStats = $this->buildCategoryStats($attempts, $maxScores);

        $suggestions = $this->generateSuggestions($typeStats, collect($quizHistory), $avgPct, $totalAttempts);

        return Inertia::render('Progress', [
            'stats' => [
                'total_attempts' => $totalAttempts,
                'quizzes_taken' => $quizzesTaken,
                'avg_pct' => $avgPct,
                'best_pct' => $bestPct,
            ],
            'typeStats' => $typeStats,
            'categoryStats' => $categoryStats,
            'quizHistory' => $quizHistory,
            'suggestions' => $suggestions,
        ]);
    }

    /**
     * @param  Collection<int, QuizAttempt>  $attempts
     * @param  Collection<int, int>  $maxScores
     * @return array<int, array<string, mixed>>
     */
    private function buildCategoryStats(Collection $attempts, Collection $maxScores): array
    {
        return $attempts
            ->groupBy(fn ($a) => $a->quiz?->category_id ?? 0)
            ->map(function (Collection $group) use ($maxScores) {
                $firstAttempt = $group->first();
                $quiz = $firstAttempt->quiz;
                $category = $quiz?->category;

                $pcts = $group->map(function ($attempt) use ($maxScores) {
                    $max = $maxScores->get($attempt->quiz_id, 0);

                    return $max > 0 ? (int) round(($attempt->total_score / $max) * 100) : 0;
                });

                $quizIds = $group->pluck('quiz_id')->unique()->count();

                return [
                    'category' => $category ? ['id' => $category->id, 'name' => $category->name] : null,
                    'quiz_count' => $quizIds,
                    'attempt_count' => $group->count(),
                    'avg_pct' => $pcts->isNotEmpty() ? (int) round($pcts->average()) : 0,
                    'best_pct' => $pcts->isNotEmpty() ? (int) $pcts->max() : 0,
                ];
            })
            ->values()
            ->all();
    }

    /**
     * @param  Collection<string, array{total: int, correct: int, pct: int}>  $typeStats
     * @param  Collection<int, array<string, mixed>>  $quizHistory
     * @return array<int, array<string, string>>
     */
    private function generateSuggestions(
        Collection $typeStats,
        Collection $quizHistory,
        int $avgPct,
        int $totalAttempts
    ): array {
        if ($totalAttempts === 0) {
            return [[
                'type' => 'info',
                'title' => 'Nothing to analyse yet',
                'message' => 'Complete a quiz to start seeing personalised insights about your strengths and areas to improve.',
                'icon' => 'info',
            ]];
        }

        $suggestions = [];

        foreach ($typeStats as $type => $stats) {
            if ($stats['pct'] >= 80 && $stats['total'] >= 3) {
                $label = $this->typeLabel($type);
                $suggestions[] = [
                    'type' => 'strength',
                    'title' => "Strong at {$label}",
                    'message' => "You've scored {$stats['pct']}% correct on {$label} questions ({$stats['correct']}/{$stats['total']}). Keep it up!",
                    'icon' => 'trophy',
                ];
            }
        }

        foreach ($typeStats as $type => $stats) {
            if ($stats['pct'] < 50 && $stats['total'] >= 3) {
                $label = $this->typeLabel($type);
                $tip = $this->typeTip($type);
                $suggestions[] = [
                    'type' => 'weakness',
                    'title' => "Work on {$label}",
                    'message' => "You're scoring {$stats['pct']}% on {$label} questions ({$stats['correct']}/{$stats['total']}). {$tip}",
                    'icon' => 'target',
                ];
            }
        }

        $improving = $quizHistory->filter(fn ($q) => ($q['trend'] ?? '') === 'improving')->count();
        $declining = $quizHistory->filter(fn ($q) => ($q['trend'] ?? '') === 'declining')->count();

        if ($improving > 0 && $improving >= $declining) {
            $noun = $improving > 1 ? 'quizzes' : 'quiz';
            $suggestions[] = [
                'type' => 'strength',
                'title' => 'Scores are trending up',
                'message' => "You're improving across {$improving} {$noun}. Consistent practice is clearly working — keep the momentum!",
                'icon' => 'trending-up',
            ];
        } elseif ($declining > $improving) {
            $noun = $declining > 1 ? 'quizzes' : 'quiz';
            $suggestions[] = [
                'type' => 'warning',
                'title' => 'Scores are slipping',
                'message' => "Scores have declined across {$declining} {$noun}. Review the explanations in your results to reinforce the material before retaking.",
                'icon' => 'trending-down',
            ];
        }

        if ($avgPct > 0 && $avgPct < 60) {
            $suggestions[] = [
                'type' => 'tip',
                'title' => 'Review before attempting',
                'message' => "Your overall average is {$avgPct}%. Spending time on study material before each attempt is likely to make a noticeable difference.",
                'icon' => 'book-open',
            ];
        } elseif ($avgPct >= 85) {
            $suggestions[] = [
                'type' => 'strength',
                'title' => 'Outstanding overall',
                'message' => "An average of {$avgPct}% is excellent! You're demonstrating a strong command of the material across all quizzes.",
                'icon' => 'star',
            ];
        }

        if (empty($suggestions)) {
            $suggestions[] = [
                'type' => 'tip',
                'title' => 'Solid performance',
                'message' => 'Your results are consistent. Keep taking quizzes to generate more detailed insights and unlock specific improvement tips.',
                'icon' => 'check-circle',
            ];
        }

        return $suggestions;
    }

    private function typeLabel(string $type): string
    {
        return match ($type) {
            'multiple_choice' => 'Multiple Choice',
            'true_false' => 'True / False',
            'short_answer' => 'Short Answer',
            default => ucfirst(str_replace('_', ' ', $type)),
        };
    }

    private function typeTip(string $type): string
    {
        return match ($type) {
            'multiple_choice' => 'Try eliminating obviously wrong choices first, then re-read the question carefully before committing.',
            'true_false' => 'Watch for absolute keywords like "always", "never", or "all" — these frequently indicate a false statement.',
            'short_answer' => 'After each attempt, check the accepted answers in your results to learn the exact phrasing that is expected.',
            default => 'Review the explanations shown in your results to better understand the reasoning behind each correct answer.',
        };
    }
}
