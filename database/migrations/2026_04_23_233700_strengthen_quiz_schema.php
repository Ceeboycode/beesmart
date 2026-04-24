<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::table('quizzes', function (Blueprint $table) {
            $table->index('status', 'quizzes_status_index');
            $table->index('source', 'quizzes_source_index');
        });

        Schema::table('questions', function (Blueprint $table) {
            $table->index(['quiz_id', 'order'], 'questions_quiz_order_index');
        });

        Schema::table('quiz_attempts', function (Blueprint $table) {
            $table->string('status')->default('in_progress');
            $table->timestamp('started_at')->nullable();
            $table->timestamp('submitted_at')->nullable();

            $table->unique(['user_id', 'quiz_id', 'attempt_number'], 'quiz_attempts_user_quiz_attempt_unique');
            $table->index(['quiz_id', 'user_id'], 'quiz_attempts_quiz_user_index');
        });

        Schema::table('answers', function (Blueprint $table) {
            $table->json('answer_json')->nullable();
            $table->unique(['quiz_attempt_id', 'question_id'], 'answers_attempt_question_unique');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('answers', function (Blueprint $table) {
            $table->dropUnique('answers_attempt_question_unique');
            $table->dropColumn('answer_json');
        });

        Schema::table('quiz_attempts', function (Blueprint $table) {
            $table->dropIndex('quiz_attempts_quiz_user_index');
            $table->dropUnique('quiz_attempts_user_quiz_attempt_unique');

            $table->dropColumn(['status', 'started_at', 'submitted_at']);
        });

        Schema::table('questions', function (Blueprint $table) {
            $table->dropIndex('questions_quiz_order_index');
        });

        Schema::table('quizzes', function (Blueprint $table) {
            $table->dropIndex('quizzes_status_index');
            $table->dropIndex('quizzes_source_index');
        });
    }
};
