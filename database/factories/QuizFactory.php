<?php

namespace Database\Factories;

use App\Models\Quiz;
use App\Models\User;
use App\Services\QuizCodeGenerator;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends Factory<Quiz>
 */
class QuizFactory extends Factory
{
    /**
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'title' => fake()->sentence(4),
            'description' => fake()->paragraph(),
            'quiz_code' => app(QuizCodeGenerator::class)->generate(),
            'status' => Quiz::STATUS_ACTIVE,
            'source' => Quiz::SOURCE_MANUAL,
            'source_file' => null,
            'created_by' => User::factory(),
        ];
    }

    public function inactive(): static
    {
        return $this->state(fn () => ['status' => Quiz::STATUS_INACTIVE]);
    }

    public function fromAi(): static
    {
        return $this->state(fn () => [
            'source' => Quiz::SOURCE_AI,
            'source_file' => 'sample.pdf',
        ]);
    }
}
