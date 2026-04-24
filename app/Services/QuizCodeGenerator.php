<?php

namespace App\Services;

use App\Models\Quiz;

class QuizCodeGenerator
{
    private const DIGITS = '23456789';

    private const MAX_ATTEMPTS = 20;

    /**
     * Generate a unique 6-digit quiz code. Ambiguous digits
     * (0, 1) are excluded to keep codes easy to share verbally.
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
        $digits = '';
        for ($i = 0; $i < 6; $i++) {
            $digits .= self::DIGITS[random_int(0, strlen(self::DIGITS) - 1)];
        }

        return $digits;
    }
}
