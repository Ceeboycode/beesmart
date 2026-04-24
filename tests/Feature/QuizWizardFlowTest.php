<?php

use App\Models\Quiz;
use App\Models\User;

test('authenticated users can view the quiz create wizard', function () {
    $user = User::factory()->create();

    $this->actingAs($user)
        ->get(route('quizzes.create'))
        ->assertOk();
});

test('quiz wizard store creates a quiz and assigns creator', function () {
    $user = User::factory()->create();

    $this->actingAs($user)
        ->post(route('quizzes.store'), [
            'title' => 'Biology Midterm',
            'description' => 'Core biology concepts',
            'status' => 'active',
            'source' => 'manual',
        ])
        ->assertRedirect(route('quizzes.index'));

    $quiz = Quiz::query()->first();

    expect($quiz)->not->toBeNull()
        ->and($quiz->title)->toBe('Biology Midterm')
        ->and($quiz->created_by)->toBe($user->id)
        ->and(strlen($quiz->quiz_code))->toBe(6);
});

test('quiz wizard update modifies quiz details', function () {
    $user = User::factory()->create();

    $quiz = Quiz::create([
        'title' => 'Old Title',
        'description' => 'Old description',
        'quiz_code' => 'WIZ001',
        'status' => Quiz::STATUS_INACTIVE,
        'source' => Quiz::SOURCE_MANUAL,
        'created_by' => $user->id,
    ]);

    $this->actingAs($user)
        ->put(route('quizzes.update', $quiz), [
            'title' => 'New Title',
            'description' => 'Updated description',
            'quiz_code' => 'WIZ002',
            'status' => 'active',
            'source' => 'ai',
            'source_file' => 'biology.pdf',
        ])
        ->assertRedirect(route('quizzes.index'));

    expect($quiz->refresh()->title)->toBe('New Title')
        ->and($quiz->status)->toBe(Quiz::STATUS_ACTIVE)
        ->and($quiz->source)->toBe(Quiz::SOURCE_AI)
        ->and($quiz->source_file)->toBe('biology.pdf')
        ->and($quiz->quiz_code)->toBe('WIZ002');
});
