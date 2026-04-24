<?php

use App\Models\Quiz;
use App\Models\User;
use App\Services\QuizCodeGenerator;

test('generated code is 6 chars with 3 letters followed by 3 digits', function () {
    $code = app(QuizCodeGenerator::class)->generate();

    expect($code)->toHaveLength(6)
        ->and(preg_match('/^[A-HJ-NP-Z]{3}[2-9]{3}$/', $code))->toBe(1);
});

test('generator avoids collisions with existing quiz codes', function () {
    $user = User::factory()->create();

    Quiz::factory()->for($user, 'creator')->create(['quiz_code' => 'ABC234']);

    $code = app(QuizCodeGenerator::class)->generate();

    expect($code)->not->toBe('ABC234');
});
