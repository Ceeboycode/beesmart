<?php

namespace App\Http\Requests;

use App\Models\Question;
use App\Models\Quiz;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class UpdateQuizRequest extends FormRequest
{
    public function authorize(): bool
    {
        $quiz = $this->route('quiz');

        if (! $quiz instanceof Quiz) {
            return false;
        }

        return $this->user() !== null
            && ($quiz->created_by === null || $quiz->created_by === $this->user()->id);
    }

    /**
     * @return array<string, mixed>
     */
    public function rules(): array
    {
        $quiz = $this->route('quiz');
        $quizId = $quiz instanceof Quiz ? $quiz->id : null;

        return [
            'title' => ['required', 'string', 'max:255'],
            'description' => ['nullable', 'string', 'max:2000'],
            'status' => ['nullable', Rule::in([Quiz::STATUS_ACTIVE, Quiz::STATUS_INACTIVE])],
            'source' => ['nullable', Rule::in([Quiz::SOURCE_MANUAL, Quiz::SOURCE_AI])],
            'source_file' => ['nullable', 'string', 'max:255'],
            'quiz_code' => [
                'nullable',
                'digits:6',
                Rule::unique('quizzes', 'quiz_code')->ignore($quizId),
            ],
            'max_attempts' => ['nullable', 'integer', 'min:1', 'max:100'],
            'question_count' => ['nullable', 'integer', 'min:1', 'max:60'],
            'shuffle_questions' => ['nullable', 'boolean'],
            'shuffle_choices' => ['nullable', 'boolean'],
            'tab_monitoring_enabled' => ['nullable', 'boolean'],
            'tab_violation_action' => ['nullable', Rule::in(['warn', 'auto_submit'])],
            'tab_violation_limit' => ['nullable', 'integer', 'min:1', 'max:10'],

            'questions' => ['nullable', 'array'],
            'questions.*.id' => ['nullable', 'integer', Rule::exists('questions', 'id')->where('quiz_id', $quizId)],
            'questions.*.question_text' => ['required_with:questions', 'string', 'max:2000'],
            'questions.*.type' => [
                'required_with:questions',
                Rule::in([
                    Question::TYPE_MULTIPLE_CHOICE,
                    Question::TYPE_TRUE_FALSE,
                    Question::TYPE_SHORT_ANSWER,
                ]),
            ],
            'questions.*.points' => ['nullable', 'integer', 'min:1', 'max:100'],
            'questions.*.explanation' => ['nullable', 'string', 'max:2000'],
            'questions.*.correct_answer' => ['nullable', 'array'],
            'questions.*.correct_answer.*' => ['string', 'max:255'],
            'questions.*.case_sensitive' => ['nullable', 'boolean'],

            'questions.*.choices' => ['nullable', 'array'],
            'questions.*.choices.*.choice_text' => ['required_with:questions.*.choices', 'string', 'max:500'],
            'questions.*.choices.*.is_correct' => ['nullable', 'boolean'],
        ];
    }
}
