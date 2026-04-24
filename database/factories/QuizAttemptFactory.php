<?php

namespace Database\Factories;

use App\Models\Quiz;
use App\Models\QuizAttempt;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends Factory<QuizAttempt>
 */
class QuizAttemptFactory extends Factory
{
    /**
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'quiz_id' => Quiz::factory(),
            'user_id' => User::factory(),
            'attempt_number' => 1,
            'total_score' => 0,
            'ai_feedback' => null,
            'status' => QuizAttempt::STATUS_IN_PROGRESS,
            'started_at' => now(),
            'submitted_at' => null,
        ];
    }

    public function submitted(): static
    {
        return $this->state(fn () => [
            'status' => QuizAttempt::STATUS_SUBMITTED,
            'submitted_at' => now(),
        ]);
    }
}
