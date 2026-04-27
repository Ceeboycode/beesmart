<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Quiz extends Model
{
    use HasFactory;

    public const STATUS_ACTIVE = 'active';

    public const STATUS_INACTIVE = 'inactive';

    public const SOURCE_MANUAL = 'manual';

    public const SOURCE_AI = 'ai';

    protected $fillable = [
        'title',
        'description',
        'category_id',
        'sort_order',
        'quiz_code',
        'max_attempts',
        'question_count',
        'shuffle_questions',
        'shuffle_choices',
        'tab_monitoring_enabled',
        'tab_violation_action',
        'tab_violation_limit',
        'status',
        'source',
        'source_file',
        'created_by',
    ];

    protected function casts(): array
    {
        return [
            'sort_order' => 'integer',
            'max_attempts' => 'integer',
            'question_count' => 'integer',
            'shuffle_questions' => 'boolean',
            'shuffle_choices' => 'boolean',
            'tab_monitoring_enabled' => 'boolean',
            'tab_violation_limit' => 'integer',
        ];
    }

    public function questions(): HasMany
    {
        return $this->hasMany(Question::class);
    }

    public function attempts(): HasMany
    {
        return $this->hasMany(QuizAttempt::class);
    }

    public function category(): BelongsTo
    {
        return $this->belongsTo(Category::class);
    }

    public function creator(): BelongsTo
    {
        return $this->belongsTo(User::class, 'created_by');
    }
}
