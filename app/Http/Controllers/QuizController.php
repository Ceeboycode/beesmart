<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreQuizRequest;
use App\Http\Requests\UpdateQuizRequest;
use App\Models\Category;
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
            ->with(['creator:id,name', 'category:id,name'])
            ->withCount(['questions', 'attempts'])
            ->orderByRaw('sort_order IS NULL, sort_order, created_at DESC')
            ->get();

        $joinedQuizzes = Quiz::query()
            ->whereHas('attempts', fn ($q) => $q->where('user_id', $user->id))
            ->where(fn ($q) => $q->whereNull('created_by')->orWhere('created_by', '!=', $user->id))
            ->with(['creator:id,name', 'category:id,name'])
            ->withCount([
                'questions',
                'attempts as my_attempts_count' => fn ($q) => $q->where('user_id', $user->id),
            ])
            ->latest()
            ->get();

        $categories = Category::where('created_by', $user->id)
            ->withCount('quizzes')
            ->orderBy('name')
            ->get(['id', 'name', 'icon', 'description'])
            ->map(fn ($c) => [
                'id' => $c->id,
                'name' => $c->name,
                'icon' => $c->icon,
                'description' => $c->description,
                'quiz_count' => $c->quizzes_count,
            ]);

        return Inertia::render('Quiz/Index', [
            'quizzes' => $quizzes,
            'joinedQuizzes' => $joinedQuizzes,
            'categories' => $categories,
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
            $categoryId = $this->resolveCategory($data['category_name'] ?? null, $request->user()->id);

            $quiz = Quiz::create([
                'title' => $data['title'],
                'description' => $data['description'] ?? null,
                'category_id' => $categoryId,
                'status' => $data['status'] ?? Quiz::STATUS_INACTIVE,
                'source' => $data['source'] ?? Quiz::SOURCE_MANUAL,
                'source_file' => $data['source_file'] ?? null,
                'quiz_code' => ! empty($data['quiz_code'])
                    ? trim($data['quiz_code'])
                    : $this->codeGenerator->generate(),
                'max_attempts' => $data['max_attempts'] ?? null,
                'question_count' => $data['question_count'] ?? null,
                'shuffle_questions' => $data['shuffle_questions'] ?? false,
                'shuffle_choices' => $data['shuffle_choices'] ?? false,
                'tab_monitoring_enabled' => $data['tab_monitoring_enabled'] ?? false,
                'tab_violation_action' => $data['tab_violation_action'] ?? 'warn',
                'tab_violation_limit' => $data['tab_violation_limit'] ?? 3,
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

        DB::transaction(function () use ($quiz, $data, $request) {
            $categoryId = array_key_exists('category_name', $data)
                ? $this->resolveCategory($data['category_name'] ?? null, $request->user()->id)
                : $quiz->category_id;

            $quiz->update([
                'title' => $data['title'],
                'description' => $data['description'] ?? null,
                'category_id' => $categoryId,
                'status' => $data['status'] ?? $quiz->status,
                'source' => $data['source'] ?? $quiz->source,
                'source_file' => $data['source_file'] ?? null,
                'quiz_code' => ! empty($data['quiz_code'])
                    ? trim($data['quiz_code'])
                    : $quiz->quiz_code,
                'max_attempts' => array_key_exists('max_attempts', $data) ? $data['max_attempts'] : $quiz->max_attempts,
                'question_count' => array_key_exists('question_count', $data) ? $data['question_count'] : $quiz->question_count,
                'shuffle_questions' => $data['shuffle_questions'] ?? $quiz->shuffle_questions,
                'shuffle_choices' => $data['shuffle_choices'] ?? $quiz->shuffle_choices,
                'tab_monitoring_enabled' => $data['tab_monitoring_enabled'] ?? $quiz->tab_monitoring_enabled,
                'tab_violation_action' => $data['tab_violation_action'] ?? $quiz->tab_violation_action,
                'tab_violation_limit' => $data['tab_violation_limit'] ?? $quiz->tab_violation_limit,
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

    public function assignCategory(Request $request, Quiz $quiz): RedirectResponse
    {
        abort_unless($quiz->created_by === $request->user()->id, 403);

        $data = $request->validate([
            'category_id' => ['nullable', 'integer', 'exists:categories,id'],
        ]);

        $quiz->update([
            'category_id' => $data['category_id'] ?? null,
            'sort_order' => null,
        ]);

        return back();
    }

    private function resolveCategory(?string $name, int $userId): ?int
    {
        if ($name === null || trim($name) === '') {
            return null;
        }

        $category = Category::firstOrCreate(
            ['name' => trim($name), 'created_by' => $userId],
            ['description' => null]
        );

        return $category->id;
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
