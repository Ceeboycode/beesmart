<?php

namespace App\Http\Controllers;

use App\Models\Quiz;
use App\Models\QuizAttempt;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class DashboardController extends Controller
{
    public function __invoke(Request $request): Response
    {
        $user = $request->user();
        $ownedQuizIds = $user->createdQuizzes()->select('id');

        return Inertia::render('Dashboard', [
            'stats' => [
                'total_quizzes' => $user->createdQuizzes()->count(),
                'active_quizzes' => $user->createdQuizzes()->where('status', Quiz::STATUS_ACTIVE)->count(),
                'total_attempts' => QuizAttempt::whereIn('quiz_id', $ownedQuizIds)->count(),
                'my_attempts' => $user->quizAttempts()->count(),
            ],
            'recentQuizzes' => $user->createdQuizzes()
                ->withCount('attempts')
                ->withCount('questions')
                ->latest()
                ->take(5)
                ->get(['id', 'title', 'status', 'source', 'quiz_code', 'created_at']),
            'recentAttempts' => $user->quizAttempts()
                ->with('quiz:id,title,quiz_code')
                ->latest()
                ->take(5)
                ->get(['id', 'quiz_id', 'total_score', 'status', 'submitted_at', 'attempt_number', 'created_at']),
        ]);
    }
}
