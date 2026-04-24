<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreQuizRequest;
use App\Http\Requests\UpdateQuizRequest;
use App\Models\Choice;
use App\Models\Question;
use App\Models\Quiz;
use App\Services\QuizCodeGenerator;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;
use Inertia\Response;

class QuizController extends Controller
{
    public function __construct(private readonly QuizCodeGenerator $codeGenerator) {}

    public function index(Request $request): Response
    {
        $user = $request->user();

        $quizzes = Quiz::query()
            ->where('created_by', $user->id)
            ->with('creator:id,name')
            ->withCount(['questions', 'attempts'])
            ->latest()
            ->get();

        $joinedQuizzes = Quiz::query()
            ->whereHas('attempts', fn ($q) => $q->where('user_id', $user->id))
            ->where(fn ($q) => $q->whereNull('created_by')->orWhere('created_by', '!=', $user->id))
            ->with('creator:id,name')
            ->withCount([
                'questions',
                'attempts as my_attempts_count' => fn ($q) => $q->where('user_id', $user->id),
            ])
            ->latest()
            ->get();

        return Inertia::render('Quiz/Index', [
            'quizzes' => $quizzes,
            'joinedQuizzes' => $joinedQuizzes,
        ]);
    }

    public function create(): Response
    {
        return Inertia::render('Quiz/Create');
    }

    public function store(StoreQuizRequest $request): RedirectResponse
    {
        $data = $request->validated();

        $quiz = DB::transaction(function () use ($data, $request): Quiz {
            $quiz = Quiz::create([
                'title' => $data['title'],
                'description' => $data['description'] ?? null,
                'status' => $data['status'] ?? Quiz::STATUS_INACTIVE,
                'source' => $data['source'] ?? Quiz::SOURCE_MANUAL,
                'source_file' => $data['source_file'] ?? null,
                'quiz_code' => ! empty($data['quiz_code'])
                    ? strtoupper($data['quiz_code'])
                    : $this->codeGenerator->generate(),
                'max_attempts' => $data['max_attempts'] ?? null,
                'question_count' => $data['question_count'] ?? null,
                'created_by' => $request->user()->id,
            ]);

            $this->syncQuestions($quiz, $data['questions'] ?? []);

            return $quiz;
        });

        return redirect()
            ->route('quizzes.index')
            ->with('success', "Quiz created. Share code: {$quiz->quiz_code}");
    }

    public function show(Request $request, Quiz $quiz): Response
    {
        $this->authorizeOwnership($request, $quiz);

        $quiz->load([
            'creator:id,name',
            'questions' => fn ($q) => $q->orderBy('order')->orderBy('id'),
            'questions.choices',
        ]);

        return Inertia::render('Quiz/Show', [
            'quiz' => $quiz,
        ]);
    }

    public function edit(Request $request, Quiz $quiz): Response
    {
        $this->authorizeOwnership($request, $quiz);

        $quiz->load([
            'questions' => fn ($q) => $q->orderBy('order')->orderBy('id'),
            'questions.choices',
        ]);

        return Inertia::render('Quiz/Edit', [
            'quiz' => $quiz,
        ]);
    }

    private function authorizeOwnership(Request $request, Quiz $quiz): void
    {
        abort_unless(
            $quiz->created_by === null || $quiz->created_by === $request->user()->id,
            403
        );
    }

    public function update(UpdateQuizRequest $request, Quiz $quiz): RedirectResponse
    {
        $data = $request->validated();

        DB::transaction(function () use ($quiz, $data) {
            $quiz->update([
                'title' => $data['title'],
                'description' => $data['description'] ?? null,
                'status' => $data['status'] ?? $quiz->status,
                'source' => $data['source'] ?? $quiz->source,
                'source_file' => $data['source_file'] ?? null,
                'quiz_code' => ! empty($data['quiz_code'])
                    ? strtoupper($data['quiz_code'])
                    : $quiz->quiz_code,
                'max_attempts' => array_key_exists('max_attempts', $data) ? $data['max_attempts'] : $quiz->max_attempts,
                'question_count' => array_key_exists('question_count', $data) ? $data['question_count'] : $quiz->question_count,
            ]);

            if (array_key_exists('questions', $data)) {
                $this->syncQuestions($quiz, $data['questions'] ?? [], replace: true);
            }
        });

        return redirect()
            ->route('quizzes.index')
            ->with('success', 'Quiz updated.');
    }

    public function destroy(Request $request, Quiz $quiz): RedirectResponse
    {
        abort_unless(
            $quiz->created_by === null || $quiz->created_by === $request->user()->id,
            403
        );

        $quiz->delete();

        return redirect()
            ->route('quizzes.index')
            ->with('success', 'Quiz deleted.');
    }

    public function toggleStatus(Request $request, Quiz $quiz): RedirectResponse
    {
        abort_unless(
            $quiz->created_by === null || $quiz->created_by === $request->user()->id,
            403
        );

        $newStatus = $quiz->status === Quiz::STATUS_ACTIVE
            ? Quiz::STATUS_INACTIVE
            : Quiz::STATUS_ACTIVE;

        $quiz->update(['status' => $newStatus]);

        return back()->with('success', "Quiz is now {$newStatus}.");
    }

    public function regenerateCode(Request $request, Quiz $quiz): RedirectResponse
    {
        abort_unless(
            $quiz->created_by === null || $quiz->created_by === $request->user()->id,
            403
        );

        $quiz->update(['quiz_code' => $this->codeGenerator->generate()]);

        return back()->with('success', "New code: {$quiz->quiz_code}");
    }

    /**
     * @param  array<int, array<string, mixed>>  $questionsData
     */
    private function syncQuestions(Quiz $quiz, array $questionsData, bool $replace = false): void
    {
        if ($replace) {
            $quiz->questions()->delete();
        }

        foreach (array_values($questionsData) as $index => $questionData) {
            $question = Question::create([
                'quiz_id' => $quiz->id,
                'question_text' => $questionData['question_text'],
                'type' => $questionData['type'],
                'points' => $questionData['points'] ?? 1,
                'order' => $index,
                'explanation' => $questionData['explanation'] ?? null,
                'correct_answer' => $questionData['type'] === Question::TYPE_SHORT_ANSWER
                    ? ($questionData['correct_answer'] ?? null)
                    : null,
                'case_sensitive' => $questionData['type'] === Question::TYPE_SHORT_ANSWER
                    ? (bool) ($questionData['case_sensitive'] ?? false)
                    : false,
            ]);

            $choices = $questionData['choices'] ?? [];

            if ($question->usesChoiceCorrectness() && ! empty($choices)) {
                foreach ($choices as $choiceData) {
                    Choice::create([
                        'question_id' => $question->id,
                        'choice_text' => $choiceData['choice_text'],
                        'is_correct' => (bool) ($choiceData['is_correct'] ?? false),
                    ]);
                }
            }
        }
    }
}
