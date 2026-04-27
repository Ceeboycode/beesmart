<?php

namespace App\Http\Controllers;

use App\Models\Answer;
use App\Models\Question;
use App\Models\Quiz;
use App\Models\QuizAttempt;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;
use Inertia\Response;

class QuizAttemptController extends Controller
{
    public function indexForQuiz(Request $request, Quiz $quiz): Response
    {
        $user = $request->user();
        $isOwner = $quiz->created_by === $user->id;

        if (! $isOwner) {
            $hasAttempts = QuizAttempt::where('quiz_id', $quiz->id)
                ->where('user_id', $user->id)
                ->exists();
            abort_unless($hasAttempts, 403);
        }

        $attempts = QuizAttempt::query()
            ->where('quiz_id', $quiz->id)
            ->when(! $isOwner, fn ($q) => $q->where('user_id', $user->id))
            ->with('user:id,name')
            ->orderByDesc('created_at')
            ->get()
            ->map(fn ($attempt) => [
                'id' => $attempt->id,
                'attempt_number' => $attempt->attempt_number,
                'status' => $attempt->status,
                'total_score' => $attempt->total_score,
                'started_at' => $attempt->started_at?->toISOString(),
                'submitted_at' => $attempt->submitted_at?->toISOString(),
                'user' => $isOwner ? ['id' => $attempt->user->id, 'name' => $attempt->user->name] : null,
            ]);

        $maxScore = $quiz->questions()->sum('points');

        return Inertia::render('Attempt/QuizAttempts', [
            'quiz' => [
                'id' => $quiz->id,
                'title' => $quiz->title,
                'quiz_code' => $quiz->quiz_code,
                'max_attempts' => $quiz->max_attempts,
            ],
            'attempts' => $attempts,
            'isOwner' => $isOwner,
            'maxScore' => $maxScore,
        ])->with('breadcrumbs', [
            ['title' => 'Quizzes', 'href' => route('quizzes.index')],
            ['title' => $quiz->title, 'href' => route('quizzes.show', $quiz)],
            ['title' => 'Attempts', 'href' => '#'],
        ]);
    }

    public function join(): Response
    {
        return Inertia::render('Attempt/Join', [
            'quiz' => null,
            'validatedCode' => null,
        ]);
    }

    public function resolveCode(Request $request): Response|RedirectResponse
    {
        $data = $request->validate([
            'quiz_code' => ['required', 'digits:6'],
        ]);

        $code = $data['quiz_code'];

        $quiz = Quiz::query()
            ->where('quiz_code', $code)
            ->where('status', Quiz::STATUS_ACTIVE)
            ->first();

        if (! $quiz) {
            return back()
                ->withInput()
                ->withErrors(['quiz_code' => 'No active quiz found for that code.']);
        }

        return Inertia::render('Attempt/Join', [
            'quiz' => [
                'id' => $quiz->id,
                'title' => $quiz->title,
                'description' => $quiz->description,
                'questions_count' => $quiz->questions()->count(),
                'max_attempts' => $quiz->max_attempts,
                'shuffle_questions' => $quiz->shuffle_questions,
                'shuffle_choices' => $quiz->shuffle_choices,
                'tab_monitoring_enabled' => $quiz->tab_monitoring_enabled,
                'tab_violation_action' => $quiz->tab_violation_action,
                'tab_violation_limit' => $quiz->tab_violation_limit,
            ],
            'validatedCode' => $code,
        ]);
    }

    public function start(Request $request, Quiz $quiz): RedirectResponse
    {
        abort_unless($quiz->status === Quiz::STATUS_ACTIVE, 404);

        $user = $request->user();

        $inProgress = QuizAttempt::query()
            ->where('quiz_id', $quiz->id)
            ->where('user_id', $user->id)
            ->where('status', QuizAttempt::STATUS_IN_PROGRESS)
            ->first();

        if ($inProgress) {
            return redirect()->route('attempts.show', $inProgress);
        }

        if ($quiz->max_attempts !== null) {
            $completedCount = QuizAttempt::where('quiz_id', $quiz->id)
                ->where('user_id', $user->id)
                ->where('status', '!=', QuizAttempt::STATUS_IN_PROGRESS)
                ->count();

            if ($completedCount >= $quiz->max_attempts) {
                return redirect()
                    ->route('quizzes.attempts', $quiz)
                    ->with('error', 'You have reached the maximum number of attempts for this quiz.');
            }
        }

        $nextNumber = QuizAttempt::query()
            ->where('quiz_id', $quiz->id)
            ->where('user_id', $user->id)
            ->max('attempt_number');

        $questionOrder = null;
        $choiceOrders = null;

        if ($quiz->shuffle_questions || $quiz->shuffle_choices) {
            $questions = $quiz->questions()->with('choices')->orderBy('order')->orderBy('id')->get();

            if ($quiz->shuffle_questions) {
                $ids = $questions->pluck('id')->toArray();
                shuffle($ids);
                $questionOrder = $ids;
            }

            if ($quiz->shuffle_choices) {
                $choiceOrders = [];
                foreach ($questions as $question) {
                    if ($question->type !== 'short_answer') {
                        $ids = $question->choices->pluck('id')->toArray();
                        shuffle($ids);
                        $choiceOrders[(string) $question->id] = $ids;
                    }
                }
            }
        }

        $attempt = QuizAttempt::create([
            'quiz_id' => $quiz->id,
            'user_id' => $user->id,
            'attempt_number' => ($nextNumber ?? 0) + 1,
            'status' => QuizAttempt::STATUS_IN_PROGRESS,
            'question_order' => $questionOrder,
            'choice_orders' => $choiceOrders,
            'started_at' => now(),
        ]);

        return redirect()->route('attempts.show', $attempt);
    }

    public function show(Request $request, QuizAttempt $attempt)
    {
        abort_unless($attempt->user_id === $request->user()->id, 403);

        if ($attempt->status !== QuizAttempt::STATUS_IN_PROGRESS) {
            return redirect()->route('attempts.results', $attempt);
        }

        $attempt->load([
            'quiz:id,title,description,quiz_code,tab_monitoring_enabled,tab_violation_action,tab_violation_limit',
            'quiz.questions' => fn ($q) => $q->orderBy('order')->orderBy('id'),
            'quiz.questions.choices',
        ]);

        $questionOrder = $attempt->question_order;
        $choiceOrders = $attempt->choice_orders ?? [];

        $questions = $attempt->quiz->questions;

        if ($questionOrder) {
            $orderMap = array_flip($questionOrder);
            $questions = $questions->sortBy(fn ($q) => $orderMap[$q->id] ?? PHP_INT_MAX)->values();
        }

        $questions = $questions->map(function ($question) use ($choiceOrders) {
            $correctCount = $question->type !== 'short_answer'
                ? $question->choices->where('is_correct', true)->count()
                : 0;

            $choices = $question->choices;
            $questionChoiceOrder = $choiceOrders[(string) $question->id] ?? null;

            if ($questionChoiceOrder) {
                $choiceOrderMap = array_flip($questionChoiceOrder);
                $choices = $choices->sortBy(fn ($c) => $choiceOrderMap[$c->id] ?? PHP_INT_MAX)->values();
            }

            return [
                'id' => $question->id,
                'question_text' => $question->question_text,
                'type' => $question->type,
                'points' => $question->points,
                'correct_count' => $correctCount,
                'choices' => $choices->map(fn ($c) => [
                    'id' => $c->id,
                    'choice_text' => $c->choice_text,
                ])->values(),
            ];
        });

        return Inertia::render('Attempt/Take', [
            'attempt' => [
                'id' => $attempt->id,
                'tab_violations' => $attempt->tab_violations,
                'quiz' => [
                    'id' => $attempt->quiz->id,
                    'title' => $attempt->quiz->title,
                    'description' => $attempt->quiz->description,
                    'quiz_code' => $attempt->quiz->quiz_code,
                    'tab_monitoring_enabled' => $attempt->quiz->tab_monitoring_enabled,
                    'tab_violation_action' => $attempt->quiz->tab_violation_action,
                    'tab_violation_limit' => $attempt->quiz->tab_violation_limit,
                    'questions' => $questions,
                ],
            ],
        ]);
    }

    public function recordViolation(Request $request, QuizAttempt $attempt): JsonResponse
    {
        abort_unless($attempt->user_id === $request->user()->id, 403);
        abort_unless($attempt->status === QuizAttempt::STATUS_IN_PROGRESS, 409);

        $attempt->increment('tab_violations');
        $attempt->refresh();

        $quiz = $attempt->quiz;
        $shouldAutoSubmit = $quiz->tab_violation_action === 'auto_submit'
            && $attempt->tab_violations >= $quiz->tab_violation_limit;

        return response()->json([
            'violations' => $attempt->tab_violations,
            'limit' => $quiz->tab_violation_limit,
            'action' => $quiz->tab_violation_action,
            'should_auto_submit' => $shouldAutoSubmit,
        ]);
    }

    public function submit(Request $request, QuizAttempt $attempt): RedirectResponse
    {
        abort_unless($attempt->user_id === $request->user()->id, 403);
        abort_unless($attempt->status === QuizAttempt::STATUS_IN_PROGRESS, 409);

        $data = $request->validate([
            'answers' => ['required', 'array'],
            'answers.*.question_id' => ['required', 'integer'],
            'answers.*.choice_ids' => ['nullable', 'array'],
            'answers.*.choice_ids.*' => ['integer'],
            'answers.*.text' => ['nullable', 'string', 'max:2000'],
        ]);

        DB::transaction(function () use ($attempt, $data) {
            $attempt->load(['quiz.questions.choices']);

            $questions = $attempt->quiz->questions->keyBy('id');
            $total = 0;

            foreach ($data['answers'] as $submission) {
                $question = $questions->get($submission['question_id']);
                if (! $question) {
                    continue;
                }

                [$score, $answerText, $answerJson] = $this->gradeAnswer($question, $submission);
                $total += $score;

                Answer::updateOrCreate(
                    [
                        'quiz_attempt_id' => $attempt->id,
                        'question_id' => $question->id,
                    ],
                    [
                        'answer' => $answerText,
                        'answer_json' => $answerJson,
                        'score' => $score,
                    ]
                );
            }

            $attempt->update([
                'total_score' => $total,
                'status' => QuizAttempt::STATUS_SUBMITTED,
                'submitted_at' => now(),
            ]);
        });

        return redirect()->route('attempts.results', $attempt);
    }

    public function results(Request $request, QuizAttempt $attempt): Response
    {
        $attempt->load([
            'quiz:id,title,quiz_code,created_by',
            'quiz.questions' => fn ($q) => $q->orderBy('order')->orderBy('id'),
            'quiz.questions.choices',
            'answers',
        ]);

        abort_unless(
            $attempt->user_id === $request->user()->id
                || $attempt->quiz->created_by === $request->user()->id,
            403
        );

        $maxScore = $attempt->quiz->questions->sum('points');

        $answers = $attempt->answers->map(fn (Answer $answer) => [
            'question_id' => $answer->question_id,
            'answer' => $answer->answer,
            'answer_json' => $answer->answer_json,
            'score' => $answer->score,
            'is_answered' => $answer->answer !== null || ! empty($answer->answer_json),
        ])->values()->all();

        return Inertia::render('Attempt/Results', [
            'attempt' => array_merge($attempt->toArray(), ['answers' => $answers]),
            'maxScore' => $maxScore,
        ]);
    }

    /**
     * @param  array<string, mixed>  $submission
     * @return array{0: int, 1: ?string, 2: ?array<int, mixed>}
     */
    private function gradeAnswer(Question $question, array $submission): array
    {
        if ($question->type === Question::TYPE_SHORT_ANSWER) {
            $text = trim((string) ($submission['text'] ?? ''));

            if ($question->case_sensitive) {
                $expected = collect($question->correct_answer ?? [])
                    ->map(fn ($v) => trim((string) $v))
                    ->filter()
                    ->all();
                $isCorrect = $text !== '' && in_array($text, $expected, true);
            } else {
                $expected = collect($question->correct_answer ?? [])
                    ->map(fn ($v) => strtolower(trim((string) $v)))
                    ->filter()
                    ->all();
                $isCorrect = $text !== '' && in_array(strtolower($text), $expected, true);
            }

            return [$isCorrect ? $question->points : 0, $text !== '' ? $text : null, null];
        }

        $selected = array_values(array_unique(array_map('intval', $submission['choice_ids'] ?? [])));
        $correct = $question->choices->where('is_correct', true)->pluck('id')->map(fn ($v) => (int) $v)->sort()->values()->all();
        sort($selected);

        $isCorrect = ! empty($correct) && $selected === $correct;

        return [$isCorrect ? $question->points : 0, null, $selected];
    }
}
