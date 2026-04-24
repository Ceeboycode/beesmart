<?php

use App\Models\Answer;
use App\Models\Question;
use App\Models\Quiz;
use App\Models\QuizAttempt;
use App\Models\User;
use Illuminate\Database\QueryException;
use Illuminate\Foundation\Testing\RefreshDatabase;

uses(RefreshDatabase::class);

test('an attempt can only have one answer per question', function () {
    $user = User::factory()->create();

    $quiz = Quiz::create([
        'title' => 'Sample Quiz',
        'quiz_code' => 'QZ0001',
        'status' => Quiz::STATUS_ACTIVE,
        'source' => Quiz::SOURCE_MANUAL,
    ]);

    $question = Question::create([
        'quiz_id' => $quiz->id,
        'question_text' => '2 + 2 = ?',
        'type' => Question::TYPE_SHORT_ANSWER,
        'correct_answer' => ['4'],
        'points' => 1,
        'order' => 1,
    ]);

    $attempt = QuizAttempt::create([
        'quiz_id' => $quiz->id,
        'user_id' => $user->id,
        'attempt_number' => 1,
    ]);

    Answer::create([
        'quiz_attempt_id' => $attempt->id,
        'question_id' => $question->id,
        'answer' => '4',
        'score' => 1,
    ]);

    expect(fn () => Answer::create([
        'quiz_attempt_id' => $attempt->id,
        'question_id' => $question->id,
        'answer' => '4',
        'score' => 1,
    ]))->toThrow(QueryException::class);
});

test('a user cannot create duplicate attempt numbers on the same quiz', function () {
    $user = User::factory()->create();

    $quiz = Quiz::create([
        'title' => 'Math Quiz',
        'quiz_code' => 'QZ0002',
        'status' => Quiz::STATUS_ACTIVE,
        'source' => Quiz::SOURCE_MANUAL,
    ]);

    QuizAttempt::create([
        'quiz_id' => $quiz->id,
        'user_id' => $user->id,
        'attempt_number' => 1,
    ]);

    expect(fn () => QuizAttempt::create([
        'quiz_id' => $quiz->id,
        'user_id' => $user->id,
        'attempt_number' => 1,
    ]))->toThrow(QueryException::class);
});

test('quiz attempt status defaults and answer json is cast to array', function () {
    $user = User::factory()->create();

    $quiz = Quiz::create([
        'title' => 'Science Quiz',
        'quiz_code' => 'QZ0003',
        'status' => Quiz::STATUS_ACTIVE,
        'source' => Quiz::SOURCE_MANUAL,
    ]);

    $question = Question::create([
        'quiz_id' => $quiz->id,
        'question_text' => 'Select all planets',
        'type' => Question::TYPE_MULTIPLE_CHOICE,
        'correct_answer' => null,
        'points' => 2,
        'order' => 1,
    ]);

    $attempt = QuizAttempt::create([
        'quiz_id' => $quiz->id,
        'user_id' => $user->id,
        'attempt_number' => 1,
    ]);

    $answer = Answer::create([
        'quiz_attempt_id' => $attempt->id,
        'question_id' => $question->id,
        'answer' => 'Earth, Mars',
        'answer_json' => ['Earth', 'Mars'],
        'score' => 2,
    ])->refresh();

    expect($attempt->refresh()->status)->toBe(QuizAttempt::STATUS_IN_PROGRESS)
        ->and($answer->answer_json)->toBeArray()
        ->and($answer->answer_json)->toBe(['Earth', 'Mars']);
});

test('quiz stores and resolves its creator', function () {
    $creator = User::factory()->create();

    $quiz = Quiz::create([
        'title' => 'History Quiz',
        'quiz_code' => 'QZ0004',
        'status' => Quiz::STATUS_ACTIVE,
        'source' => Quiz::SOURCE_MANUAL,
        'created_by' => $creator->id,
    ])->refresh();

    expect($quiz->creator)->not()->toBeNull()
        ->and($quiz->creator->is($creator))->toBeTrue()
        ->and($creator->createdQuizzes()->whereKey($quiz->id)->exists())->toBeTrue();
});
