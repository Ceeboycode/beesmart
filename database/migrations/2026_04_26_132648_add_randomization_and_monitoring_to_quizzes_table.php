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
            $table->boolean('shuffle_questions')->default(false)->after('question_count');
            $table->boolean('shuffle_choices')->default(false)->after('shuffle_questions');
            $table->boolean('tab_monitoring_enabled')->default(false)->after('shuffle_choices');
            $table->string('tab_violation_action')->default('warn')->after('tab_monitoring_enabled');
            $table->unsignedTinyInteger('tab_violation_limit')->default(3)->after('tab_violation_action');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('quizzes', function (Blueprint $table) {
            $table->dropColumn([
                'shuffle_questions',
                'shuffle_choices',
                'tab_monitoring_enabled',
                'tab_violation_action',
                'tab_violation_limit',
            ]);
        });
    }
};
