<?php

use App\Models\Question;
use App\Models\Quiz;
use App\Models\User;

test('store creates quiz with question_count field', function () {
    $user = User::factory()->create();

    $this->actingAs($user)
        ->post(route('quizzes.store'), [
            'title' => 'Sample Quiz',
            'description' => 'A quiz with 5 questions',
            'status' => 'active',
            'question_count' => 5,
            'questions' => [
                [
                    'question_text' => 'First question',
                    'type' => Question::TYPE_MULTIPLE_CHOICE,
                    'points' => 1,
                    'choices' => [
                        ['choice_text' => 'Option A', 'is_correct' => true],
                        ['choice_text' => 'Option B', 'is_correct' => false],
                    ],
                ],
            ],
        ])
        ->assertRedirect(route('quizzes.index'));

    $quiz = Quiz::query()->first();

    expect($quiz)
        ->not->toBeNull()
        ->question_count->toBe(5);
});

test('update changes question_count field', function () {
    $user = User::factory()->create();
    $quiz = Quiz::factory()
        ->for($user, 'creator')
        ->has(Question::factory(3))
        ->create(['question_count' => 3]);

    $this->actingAs($user)
        ->put(route('quizzes.update', $quiz), [
            'title' => 'Updated Quiz',
            'description' => 'Now with 10 questions',
            'status' => 'active',
            'question_count' => 10,
        ])
        ->assertRedirect(route('quizzes.index'));

    expect($quiz->refresh()->question_count)->toBe(10);
});

test('question_count validation rejects values below 1', function () {
    $user = User::factory()->create();

    $this->actingAs($user)
        ->post(route('quizzes.store'), [
            'title' => 'Invalid Quiz',
            'question_count' => 0,
            'questions' => [],
        ])
        ->assertSessionHasErrors('question_count');
});

test('question_count validation rejects values above 60', function () {
    $user = User::factory()->create();

    $this->actingAs($user)
        ->post(route('quizzes.store'), [
            'title' => 'Invalid Quiz',
            'question_count' => 61,
            'questions' => [],
        ])
        ->assertSessionHasErrors('question_count');
});

test('question_count can be null for unlimited questions', function () {
    $user = User::factory()->create();

    $this->actingAs($user)
        ->post(route('quizzes.store'), [
            'title' => 'Unlimited Quiz',
            'question_count' => null,
            'questions' => [
                [
                    'question_text' => 'Question 1',
                    'type' => Question::TYPE_SHORT_ANSWER,
                    'correct_answer' => ['answer'],
                ],
            ],
        ])
        ->assertRedirect(route('quizzes.index'));

    $quiz = Quiz::query()->first();

    expect($quiz->question_count)->toBeNull();
});
