<?php

use App\Models\Question;
use App\Models\Quiz;
use App\Models\User;

test('store creates quiz with nested questions and choices', function () {
    $user = User::factory()->create();

    $this->actingAs($user)
        ->post(route('quizzes.store'), [
            'title' => 'Biology Midterm',
            'description' => 'Intro bio concepts',
            'status' => 'active',
            'questions' => [
                [
                    'question_text' => 'Which organelle does photosynthesis?',
                    'type' => Question::TYPE_MULTIPLE_CHOICE,
                    'points' => 2,
                    'choices' => [
                        ['choice_text' => 'Mitochondria', 'is_correct' => false],
                        ['choice_text' => 'Chloroplast', 'is_correct' => true],
                        ['choice_text' => 'Ribosome', 'is_correct' => false],
                    ],
                ],
                [
                    'question_text' => 'Name the sugar produced.',
                    'type' => Question::TYPE_SHORT_ANSWER,
                    'points' => 1,
                    'correct_answer' => ['glucose'],
                ],
            ],
        ])
        ->assertRedirect(route('quizzes.index'));

    $quiz = Quiz::query()->with('questions.choices')->first();

    expect($quiz)->not->toBeNull()
        ->and($quiz->quiz_code)->toMatch('/^[A-HJ-NP-Z]{3}[2-9]{3}$/')
        ->and($quiz->questions)->toHaveCount(2)
        ->and($quiz->questions[0]->choices)->toHaveCount(3)
        ->and($quiz->questions[1]->type)->toBe(Question::TYPE_SHORT_ANSWER)
        ->and($quiz->questions[1]->correct_answer)->toBe(['glucose']);
});

test('regenerate code endpoint assigns a new unique code', function () {
    $user = User::factory()->create();
    $quiz = Quiz::factory()->for($user, 'creator')->create(['quiz_code' => 'ABC234']);

    $this->actingAs($user)
        ->post(route('quizzes.regenerate-code', $quiz))
        ->assertRedirect();

    expect($quiz->refresh()->quiz_code)
        ->not->toBe('ABC234')
        ->toMatch('/^[A-HJ-NP-Z]{3}[2-9]{3}$/');
});

test('non-creator cannot regenerate quiz code', function () {
    $owner = User::factory()->create();
    $other = User::factory()->create();
    $quiz = Quiz::factory()->for($owner, 'creator')->create();

    $this->actingAs($other)
        ->post(route('quizzes.regenerate-code', $quiz))
        ->assertForbidden();
});
