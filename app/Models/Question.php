<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Question extends Model
{
    use HasFactory;

    public const TYPE_MULTIPLE_CHOICE = 'multiple_choice';
    public const TYPE_TRUE_FALSE = 'true_false';
    public const TYPE_SHORT_ANSWER = 'short_answer';

    protected $fillable = [
        'quiz_id',
        'question_text',
        'type',
        'correct_answer',
        'case_sensitive',
        'explanation',
        'points',
        'order',
    ];

    protected function casts(): array
    {
        return [
            'correct_answer' => 'array',
            'case_sensitive' => 'boolean',
            'points' => 'integer',
            'order' => 'integer',
        ];
    }

    public function quiz(): BelongsTo
    {
        return $this->belongsTo(Quiz::class);
    }

    public function choices(): HasMany
    {
        return $this->hasMany(Choice::class);
    }

    public function answers(): HasMany
    {
        return $this->hasMany(Answer::class);
    }

    public function usesChoiceCorrectness(): bool
    {
        return in_array($this->type, [self::TYPE_MULTIPLE_CHOICE, self::TYPE_TRUE_FALSE], true);
    }
}
