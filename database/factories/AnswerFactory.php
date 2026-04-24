<?php

namespace Database\Factories;

use App\Models\Answer;
use App\Models\Question;
use App\Models\QuizAttempt;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends Factory<Answer>
 */
class AnswerFactory extends Factory
{
    /**
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'quiz_attempt_id' => QuizAttempt::factory(),
            'question_id' => Question::factory(),
            'answer' => null,
            'answer_json' => null,
            'score' => 0,
        ];
    }
}
