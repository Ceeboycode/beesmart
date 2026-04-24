<?php

namespace Database\Factories;

use App\Models\Question;
use App\Models\Quiz;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends Factory<Question>
 */
class QuestionFactory extends Factory
{
    /**
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'quiz_id' => Quiz::factory(),
            'question_text' => fake()->sentence().'?',
            'type' => Question::TYPE_MULTIPLE_CHOICE,
            'correct_answer' => null,
            'explanation' => null,
            'points' => 1,
            'order' => 0,
        ];
    }

    public function multipleChoice(): static
    {
        return $this->state(fn () => [
            'type' => Question::TYPE_MULTIPLE_CHOICE,
            'correct_answer' => null,
        ]);
    }

    public function trueFalse(): static
    {
        return $this->state(fn () => [
            'type' => Question::TYPE_TRUE_FALSE,
            'correct_answer' => null,
        ]);
    }

    public function shortAnswer(string $expected = 'sample'): static
    {
        return $this->state(fn () => [
            'type' => Question::TYPE_SHORT_ANSWER,
            'correct_answer' => [$expected],
        ]);
    }
}
