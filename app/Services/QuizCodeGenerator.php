<?php

namespace App\Services;

use App\Models\Quiz;

class QuizCodeGenerator
{
    private const LETTERS = 'ABCDEFGHJKLMNPQRSTUVWXYZ';

    private const DIGITS = '23456789';

    private const MAX_ATTEMPTS = 20;

    /**
     * Generate a unique 6-character quiz code in the format LLLDDD
     * (3 letters followed by 3 digits). Ambiguous characters
     * (I, O, 0, 1) are excluded to keep codes easy to share verbally.
     */
    public function generate(): string
    {
        for ($i = 0; $i < self::MAX_ATTEMPTS; $i++) {
            $code = $this->randomCode();

            if (! Quiz::query()->where('quiz_code', $code)->exists()) {
                return $code;
            }
        }

        throw new \RuntimeException('Unable to generate a unique quiz code after '.self::MAX_ATTEMPTS.' attempts.');
    }

    private function randomCode(): string
    {
        $letters = '';
        for ($i = 0; $i < 3; $i++) {
            $letters .= self::LETTERS[random_int(0, strlen(self::LETTERS) - 1)];
        }

        $digits = '';
        for ($i = 0; $i < 3; $i++) {
            $digits .= self::DIGITS[random_int(0, strlen(self::DIGITS) - 1)];
        }

        return $letters.$digits;
    }
}
