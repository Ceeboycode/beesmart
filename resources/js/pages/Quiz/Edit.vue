<script setup lang="ts">
import { Head } from '@inertiajs/vue3';
import Heading from '@/components/Heading.vue';
import Builder from '@/pages/Quiz/Builder.vue';
import { regenerateCode as quizzesRegenerateCode } from '@/actions/App/Http/Controllers/QuizController';
import { index as quizzesIndex, update as quizzesUpdate } from '@/routes/quizzes';

type QuestionType = 'multiple_choice' | 'true_false' | 'short_answer';

const props = defineProps<{
    quiz: {
        id: number;
        title: string;
        description: string | null;
        quiz_code: string;
        max_attempts: number | null;
        question_count: number | null;
        status: 'active' | 'inactive';
        source: 'manual' | 'ai';
        source_file: string | null;
        questions: Array<{
            id: number;
            question_text: string;
            type: QuestionType;
            points: number;
            explanation: string | null;
            correct_answer: string[] | null;
            case_sensitive: boolean;
            choices: Array<{ id: number; choice_text: string; is_correct: boolean }>;
        }>;
    };
}>();

defineOptions({
    layout: {
        breadcrumbs: [
            { title: 'Quizzes', href: quizzesIndex() },
            { title: 'Edit', href: '#' },
        ],
    },
});
</script>

<template>
    <Head :title="`Edit ${props.quiz.title}`" />

    <div class="mx-auto flex w-full max-w-4xl flex-col gap-6 p-6">
        <Heading title="Edit quiz" description="Update your quiz step-by-step. Changes are saved as a new version." />

        <Builder
            :quiz="props.quiz"
            :submit-url="quizzesUpdate.url(props.quiz.id)"
            submit-method="put"
            submit-label="Save changes"
            :regenerate-url="quizzesRegenerateCode.url({ quiz: props.quiz.id })"
        />
    </div>
</template>
