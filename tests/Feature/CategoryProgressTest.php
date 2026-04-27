<?php

use App\Models\Answer;
use App\Models\Category;
use App\Models\Choice;
use App\Models\Question;
use App\Models\Quiz;
use App\Models\QuizAttempt;
use App\Models\User;
use Inertia\Testing\AssertableInertia as Assert;

// ── helpers ────────────────────────────────────────────────────────────────────

function buildCategoryMcQuiz(User $owner, ?Category $category = null): array
{
    $quiz = Quiz::factory()->for($owner, 'creator')->create([
        'status' => Quiz::STATUS_ACTIVE,
        'category_id' => $category?->id,
    ]);
    $question = Question::factory()->multipleChoice()->for($quiz)->create(['points' => 1]);
    $correct = Choice::factory()->for($question, 'question')->correct()->create(['choice_text' => 'Right']);
    Choice::factory()->for($question, 'question')->create(['choice_text' => 'Wrong']);

    return [$quiz, $question, $correct];
}

function buildSubmittedAttempt(User $user, Quiz $quiz, int $score = 0): QuizAttempt
{
    return QuizAttempt::create([
        'quiz_id' => $quiz->id,
        'user_id' => $user->id,
        'attempt_number' => 1,
        'status' => QuizAttempt::STATUS_SUBMITTED,
        'total_score' => $score,
        'started_at' => now(),
        'submitted_at' => now(),
    ]);
}

// ── category assignment ────────────────────────────────────────────────────────

test('creating a quiz does not assign a category (assigned separately via assignCategory)', function () {
    $user = User::factory()->create();

    $this->actingAs($user)
        ->post(route('quizzes.store'), [
            'title' => 'Biology Quiz',
            'status' => 'inactive',
        ])
        ->assertRedirect(route('quizzes.index'));

    $quiz = Quiz::where('title', 'Biology Quiz')->first();
    expect($quiz?->category_id)->toBeNull();
});

test('category can be assigned to a quiz via assignCategory endpoint', function () {
    $user = User::factory()->create();
    $category = Category::create(['name' => 'Science', 'created_by' => $user->id]);
    $quiz = Quiz::factory()->create(['created_by' => $user->id, 'category_id' => null]);

    $this->actingAs($user)
        ->patch(route('quizzes.assign-category', $quiz), ['category_id' => $category->id])
        ->assertRedirect();

    expect($quiz->fresh()?->category_id)->toBe($category->id);
});

test('creating a quiz with no category name leaves category_id null', function () {
    $user = User::factory()->create();

    $this->actingAs($user)
        ->post(route('quizzes.store'), [
            'title' => 'Uncategorised Quiz',
            'status' => 'inactive',
        ])
        ->assertRedirect();

    expect(Quiz::where('title', 'Uncategorised Quiz')->first()?->category_id)->toBeNull();
});

// ── progress page - skipped answers ───────────────────────────────────────────

test('progress typeStats excludes skipped mc answers from the total count', function () {
    $user = User::factory()->create();
    [$quiz, $question] = buildCategoryMcQuiz(User::factory()->create());

    $attempt = buildSubmittedAttempt($user, $quiz, 0);

    // Skipped answer: answer=null, answer_json=[], score=0
    Answer::create([
        'quiz_attempt_id' => $attempt->id,
        'question_id' => $question->id,
        'answer' => null,
        'answer_json' => [],
        'score' => 0,
    ]);

    $this->actingAs($user)
        ->get(route('progress'))
        ->assertOk()
        ->assertInertia(fn (Assert $page) => $page
            ->where('typeStats', fn ($stats) => ! isset($stats['multiple_choice']))
        );
});

test('progress typeStats counts genuinely wrong mc answers', function () {
    $user = User::factory()->create();
    [$quiz, $question] = buildCategoryMcQuiz(User::factory()->create());
    $wrong = $question->choices->firstWhere('is_correct', false);

    $attempt = buildSubmittedAttempt($user, $quiz, 0);

    // Wrong answer: answer_json has a choice (not skipped), score=0
    Answer::create([
        'quiz_attempt_id' => $attempt->id,
        'question_id' => $question->id,
        'answer' => null,
        'answer_json' => [$wrong->id],
        'score' => 0,
    ]);

    $this->actingAs($user)
        ->get(route('progress'))
        ->assertOk()
        ->assertInertia(fn (Assert $page) => $page
            ->where('typeStats.multiple_choice.total', 1)
            ->where('typeStats.multiple_choice.correct', 0)
        );
});

// ── results page - is_answered ─────────────────────────────────────────────────

test('results page marks answered mc question as is_answered=true', function () {
    $user = User::factory()->create();
    [$quiz, $question, $correct] = buildCategoryMcQuiz(User::factory()->create());

    $attempt = buildSubmittedAttempt($user, $quiz, 1);

    Answer::create([
        'quiz_attempt_id' => $attempt->id,
        'question_id' => $question->id,
        'answer' => null,
        'answer_json' => [$correct->id],
        'score' => 1,
    ]);

    $this->actingAs($user)
        ->get(route('attempts.results', $attempt))
        ->assertOk()
        ->assertInertia(fn (Assert $page) => $page
            ->where('attempt.answers', fn ($answers) => collect($answers)
                ->firstWhere('question_id', $question->id)['is_answered'] === true
            )
        );
});

test('results page marks skipped mc question as is_answered=false', function () {
    $user = User::factory()->create();
    [$quiz, $question] = buildCategoryMcQuiz(User::factory()->create());

    $attempt = buildSubmittedAttempt($user, $quiz, 0);

    Answer::create([
        'quiz_attempt_id' => $attempt->id,
        'question_id' => $question->id,
        'answer' => null,
        'answer_json' => [],
        'score' => 0,
    ]);

    $this->actingAs($user)
        ->get(route('attempts.results', $attempt))
        ->assertOk()
        ->assertInertia(fn (Assert $page) => $page
            ->where('attempt.answers', fn ($answers) => collect($answers)
                ->firstWhere('question_id', $question->id)['is_answered'] === false
            )
        );
});

// ── progress page - category stats ────────────────────────────────────────────

test('progress categoryStats groups attempts by subject', function () {
    $user = User::factory()->create();
    $owner = User::factory()->create();
    $category = Category::create(['name' => 'History', 'created_by' => $owner->id]);
    [$quiz, $question, $correct] = buildCategoryMcQuiz($owner, $category);

    $attempt = buildSubmittedAttempt($user, $quiz, 1);

    Answer::create([
        'quiz_attempt_id' => $attempt->id,
        'question_id' => $question->id,
        'answer' => null,
        'answer_json' => [$correct->id],
        'score' => 1,
    ]);

    $this->actingAs($user)
        ->get(route('progress'))
        ->assertOk()
        ->assertInertia(fn (Assert $page) => $page
            ->where('categoryStats', fn ($stats) => collect($stats)
                ->contains(fn ($s) => ($s['category']['name'] ?? null) === 'History'
                    && $s['attempt_count'] === 1
                    && $s['best_pct'] === 100
                )
            )
        );
});
