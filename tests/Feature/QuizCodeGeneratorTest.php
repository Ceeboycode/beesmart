<?php

use App\Models\Quiz;
use App\Models\User;
use App\Services\QuizCodeGenerator;

test('generated code is 6 digits', function () {
    $code = app(QuizCodeGenerator::class)->generate();

    expect($code)->toHaveLength(6)
        ->and(preg_match('/^[2-9]{6}$/', $code))->toBe(1);
});

test('generator avoids collisions with existing quiz codes', function () {
    $user = User::factory()->create();

    Quiz::factory()->for($user, 'creator')->create(['quiz_code' => '234567']);

    $code = app(QuizCodeGenerator::class)->generate();

    expect($code)->not->toBe('234567');
});
