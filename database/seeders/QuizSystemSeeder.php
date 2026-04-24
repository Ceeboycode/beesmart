<?php

namespace Database\Seeders;

use App\Models\Choice;
use App\Models\Question;
use App\Models\Quiz;
use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class QuizSystemSeeder extends Seeder
{
    public function run(): void
    {
        // =========================
        // USER
        // =========================
        $user = User::firstOrCreate(
            ['email' => 'cedric.heyrosa.1@gmail.com'],
            [
                'name' => 'Cedric Heyrosa',
                'password' => Hash::make('123123123'),
            ]
        );

        // =========================
        // QUIZZES
        // =========================
        $pharmaQuiz = Quiz::firstOrCreate(
            ['quiz_code' => '482913'],
            [
                'title' => 'Pharmacist Quiz',
                'description' => 'Pharmacy fundamentals',
                'max_attempts' => 3,
                'question_count' => 20,
                'status' => Quiz::STATUS_ACTIVE,
                'source' => Quiz::SOURCE_MANUAL,
                'created_by' => $user->id,
            ]
        );

        $itQuiz = Quiz::firstOrCreate(
            ['quiz_code' => '739284'],
            [
                'title' => 'IT Quiz',
                'description' => 'Basic IT concepts',
                'max_attempts' => 3,
                'question_count' => 10,
                'status' => Quiz::STATUS_ACTIVE,
                'source' => Quiz::SOURCE_MANUAL,
                'created_by' => $user->id,
            ]
        );

        $grade8Quiz = Quiz::firstOrCreate(
            ['quiz_code' => '615927'],
            [
                'title' => 'Grade 8 Quiz',
                'description' => 'General knowledge for Grade 8',
                'max_attempts' => 3,
                'question_count' => 10,
                'status' => Quiz::STATUS_ACTIVE,
                'source' => Quiz::SOURCE_MANUAL,
                'created_by' => $user->id,
            ]
        );

        // =========================
        // MCQ HELPER
        // =========================
        $createMCQ = function ($quiz, $text, $choices, $correctIndex, $order) {
            $question = Question::firstOrCreate(
                [
                    'quiz_id' => $quiz->id,
                    'question_text' => $text,
                ],
                [
                    'type' => Question::TYPE_MULTIPLE_CHOICE,
                    'points' => 5,
                    'order' => $order,
                ]
            );

            foreach ($choices as $i => $choice) {
                Choice::firstOrCreate(
                    [
                        'question_id' => $question->id,
                        'choice_text' => $choice,
                    ],
                    [
                        'is_correct' => $i === $correctIndex,
                    ]
                );
            }
        };

        // =========================
        // PHARMACIST EASY (1–10)
        // =========================
        $pharmaEasy = [
            ['What is the role of a pharmacist?', ['Cook food', 'Dispense medicine', 'Drive ambulance', 'Perform surgery'], 1],
            ['Medicine is used to?', ['Harm patients', 'Treat diseases', 'Cause illness', 'None'], 1],
            ['Tablet is a form of?', ['Food', 'Medicine', 'Drink', 'Vitamin only'], 1],
            ['Prescription is given by?', ['Teacher', 'Doctor', 'Driver', 'Engineer'], 1],
            ['Paracetamol is used for?', ['Pain relief', 'Sleep only', 'Hair growth', 'Vision'], 0],
            ['Antibiotics treat?', ['Bacterial infections', 'Cars', 'Plants', 'Computers'], 0],
            ['Pharmacy deals with?', ['Drugs', 'Books', 'Clothes', 'Food'], 0],
            ['Capsule is a?', ['Medicine form', 'Game', 'Food', 'Tool'], 0],
            ['Pharmacist works in?', ['Pharmacy', 'School', 'Garage', 'Office'], 0],
            ['Vitamins help for?', ['Health support', 'Painting', 'Driving', 'Cooking'], 0],
        ];

        foreach ($pharmaEasy as $i => $q) {
            $createMCQ($pharmaQuiz, $q[0], $q[1], $q[2], $i + 1);
        }

        // =========================
        // IT QUIZ (10)
        // =========================
        $itQuestions = [
            ['What does CPU stand for?', ['Central Processing Unit', 'Computer Personal Unit', 'Central Power Unit', 'Core Utility Processor'], 0],
            ['HTML is used for?', ['Styling', 'Database', 'Web Structure', 'Networking'], 2],
            ['PHP is a?', ['Language', 'Database', 'OS', 'Browser'], 0],
            ['What is RAM?', ['Storage', 'Memory', 'Processor', 'Software'], 1],
            ['CSS is used for?', ['Logic', 'Styling', 'Database', 'Server'], 1],
            ['What is an IP address?', ['Identifier', 'File', 'Tool', 'Code'], 0],
            ['What is SQL?', ['Query Language', 'OS', 'Editor', 'App'], 0],
            ['What is a loop?', ['Condition', 'Iteration', 'Variable', 'Class'], 1],
            ['Git is used for?', ['Version Control', 'Browser', 'OS', 'Editor'], 0],
            ['HTTP stands for?', ['HyperText Transfer Protocol', 'HighText Program', 'Host Tool', 'None'], 0],
        ];

        foreach ($itQuestions as $i => $q) {
            $createMCQ($itQuiz, $q[0], $q[1], $q[2], $i + 1);
        }

        // =========================
        // GRADE 8 (10)
        // =========================
        $grade8Questions = [
            ['5 + 5 = ?', ['8', '9', '10', '11'], 2],
            ['Capital of Philippines?', ['Cebu', 'Manila', 'Davao', 'Baguio'], 1],
            ['Water formula?', ['CO2', 'H2O', 'O2', 'NaCl'], 1],
            ['Sun is a?', ['Planet', 'Star', 'Moon', 'Comet'], 1],
            ['Earth has how many continents?', ['5', '6', '7', '8'], 2],
            ['Largest ocean?', ['Atlantic', 'Indian', 'Pacific', 'Arctic'], 2],
            ['12 x 2 = ?', ['20', '22', '24', '26'], 2],
            ['Plants make food via?', ['Respiration', 'Photosynthesis', 'Digestion', 'Fermentation'], 1],
            ['Opposite of hot?', ['Warm', 'Cold', 'Cool', 'Boiling'], 1],
            ['How many days in a week?', ['5', '6', '7', '8'], 2],
        ];

        foreach ($grade8Questions as $i => $q) {
            $createMCQ($grade8Quiz, $q[0], $q[1], $q[2], $i + 1);
        }
    }
}
