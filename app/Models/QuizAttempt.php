<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class QuizAttempt extends Model
{
    use HasFactory;

    public const STATUS_IN_PROGRESS = 'in_progress';

    public const STATUS_SUBMITTED = 'submitted';

    public const STATUS_GRADED = 'graded';

    protected $fillable = [
        'quiz_id',
        'user_id',
        'attempt_number',
        'total_score',
        'ai_feedback',
        'status',
        'question_order',
        'choice_orders',
        'tab_violations',
        'started_at',
        'submitted_at',
    ];

    protected function casts(): array
    {
        return [
            'attempt_number' => 'integer',
            'total_score' => 'integer',
            'tab_violations' => 'integer',
            'question_order' => 'array',
            'choice_orders' => 'array',
            'started_at' => 'datetime',
            'submitted_at' => 'datetime',
        ];
    }

    public function quiz(): BelongsTo
    {
        return $this->belongsTo(Quiz::class);
    }

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    public function answers(): HasMany
    {
        return $this->hasMany(Answer::class);
    }
}
