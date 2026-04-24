<?php

use App\Http\Controllers\DashboardController;
use App\Http\Controllers\QuizAttemptController;
use App\Http\Controllers\QuizController;
use Illuminate\Support\Facades\Route;
use Laravel\Fortify\Features;

Route::inertia('/', 'Welcome', [
    'canRegister' => Features::enabled(Features::registration()),
])->name('home');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', DashboardController::class)->name('dashboard');

    Route::resource('quizzes', QuizController::class);
    Route::post('quizzes/{quiz}/regenerate-code', [QuizController::class, 'regenerateCode'])
        ->name('quizzes.regenerate-code');
    Route::patch('quizzes/{quiz}/toggle-status', [QuizController::class, 'toggleStatus'])
        ->name('quizzes.toggle-status');

    Route::get('quizzes/{quiz}/attempts', [QuizAttemptController::class, 'indexForQuiz'])->name('quizzes.attempts');

    Route::get('join', [QuizAttemptController::class, 'join'])->name('attempts.join');
    Route::post('join', [QuizAttemptController::class, 'resolveCode'])->name('attempts.resolve');
    Route::post('quizzes/{quiz}/attempts', [QuizAttemptController::class, 'start'])->name('attempts.start');
    Route::get('attempts/{attempt}', [QuizAttemptController::class, 'show'])->name('attempts.show');
    Route::post('attempts/{attempt}/submit', [QuizAttemptController::class, 'submit'])->name('attempts.submit');
    Route::get('attempts/{attempt}/results', [QuizAttemptController::class, 'results'])->name('attempts.results');
});

require __DIR__.'/settings.php';
