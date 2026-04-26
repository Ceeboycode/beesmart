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
        Schema::table('quiz_attempts', function (Blueprint $table) {
            $table->json('question_order')->nullable()->after('status');
            $table->json('choice_orders')->nullable()->after('question_order');
            $table->unsignedSmallInteger('tab_violations')->default(0)->after('choice_orders');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('quiz_attempts', function (Blueprint $table) {
            $table->dropColumn(['question_order', 'choice_orders', 'tab_violations']);
        });
    }
};
