<?php

use App\Models\Choice;
use App\Models\Question;
use App\Models\Quiz;
use App\Models\QuizAttempt;
use App\Models\User;

function buildScoringQuiz(User $owner): Quiz
{
    $quiz = Quiz::factory()->for($owner, 'creator')->create([
        'status' => Quiz::STATUS_ACTIVE,
        'quiz_code' => 'XYZ234',
    ]);

    $mc = Question::factory()->multipleChoice()->for($quiz)->create([
        'points' => 2,
        'question_text' => 'Capital of France?',
        'order' => 0,
    ]);
    Choice::factory()->for($mc, 'question')->create(['choice_text' => 'London']);
    $paris = Choice::factory()->for($mc, 'question')->correct()->create(['choice_text' => 'Paris']);

    $short = Question::factory()->shortAnswer('glucose')->for($quiz)->create([
        'points' => 1,
        'question_text' => 'Sugar from photosynthesis?',
        'order' => 1,
    ]);

    $quiz->setRelation('parisChoiceId', $paris->id);
    $quiz->setRelation('questionsMc', $mc);
    $quiz->setRelation('questionsShort', $short);

    return $quiz;
}

test('join by code creates attempt and redirects to taking page', function () {
    $owner = User::factory()->create();
    $learner = User::factory()->create();

    $quiz = Quiz::factory()->for($owner, 'creator')->create([
        'status' => Quiz::STATUS_ACTIVE,
        'quiz_code' => 'JOI234',
    ]);

    $this->actingAs($learner)
        ->post(route('attempts.resolve'), ['quiz_code' => 'joi234'])
        ->assertRedirect();

    $attempt = QuizAttempt::query()
        ->where('quiz_id', $quiz->id)
        ->where('user_id', $learner->id)
        ->firstOrFail();

    expect($attempt->status)->toBe(QuizAttempt::STATUS_IN_PROGRESS);
});

test('join by code fails for inactive quiz', function () {
    $owner = User::factory()->create();
    $learner = User::factory()->create();

    Quiz::factory()->for($owner, 'creator')->create([
        'status' => Quiz::STATUS_INACTIVE,
        'quiz_code' => 'INA234',
    ]);

    $this->actingAs($learner)
        ->from(route('attempts.join'))
        ->post(route('attempts.resolve'), ['quiz_code' => 'INA234'])
        ->assertRedirect(route('attempts.join'))
        ->assertSessionHasErrors('quiz_code');
});

test('submit scores multiple choice and short answer correctly', function () {
    $owner = User::factory()->create();
    $learner = User::factory()->create();

    $quiz = buildScoringQuiz($owner);
    $parisId = $quiz->getRelation('parisChoiceId');
    $mc = $quiz->getRelation('questionsMc');
    $short = $quiz->getRelation('questionsShort');

    $this->actingAs($learner)
        ->post(route('attempts.start', $quiz))
        ->assertRedirect();

    $attempt = QuizAttempt::query()->where('user_id', $learner->id)->where('quiz_id', $quiz->id)->firstOrFail();

    $this->actingAs($learner)
        ->post(route('attempts.submit', $attempt), [
            'answers' => [
                ['question_id' => $mc->id, 'choice_ids' => [$parisId]],
                ['question_id' => $short->id, 'text' => 'Glucose'],
            ],
        ])
        ->assertRedirect(route('attempts.results', $attempt));

    expect($attempt->refresh())
        ->total_score->toBe(3)
        ->status->toBe(QuizAttempt::STATUS_SUBMITTED);
});

test('wrong answers receive zero score', function () {
    $owner = User::factory()->create();
    $learner = User::factory()->create();

    $quiz = buildScoringQuiz($owner);
    $mc = $quiz->getRelation('questionsMc');
    $short = $quiz->getRelation('questionsShort');

    $this->actingAs($learner)->post(route('attempts.start', $quiz));
    $attempt = QuizAttempt::query()->where('user_id', $learner->id)->firstOrFail();

    $this->actingAs($learner)
        ->post(route('attempts.submit', $attempt), [
            'answers' => [
                ['question_id' => $mc->id, 'choice_ids' => []],
                ['question_id' => $short->id, 'text' => 'sucrose'],
            ],
        ]);

    expect($attempt->refresh()->total_score)->toBe(0);
});

test('cannot submit another users attempt', function () {
    $owner = User::factory()->create();
    $learner = User::factory()->create();
    $intruder = User::factory()->create();

    $quiz = buildScoringQuiz($owner);

    $this->actingAs($learner)->post(route('attempts.start', $quiz));
    $attempt = QuizAttempt::query()->where('user_id', $learner->id)->firstOrFail();

    $this->actingAs($intruder)
        ->post(route('attempts.submit', $attempt), ['answers' => []])
        ->assertForbidden();
});
