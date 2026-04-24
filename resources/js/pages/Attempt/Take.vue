<script setup lang="ts">
import { Head, router } from '@inertiajs/vue3';
import { ChevronLeft, ChevronRight, Flag } from 'lucide-vue-next';
import { computed, reactive, ref } from 'vue';
import ConfirmDialog from '@/components/ConfirmDialog.vue';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { submit as attemptsSubmit } from '@/actions/App/Http/Controllers/QuizAttemptController';
import { index as quizzesIndex } from '@/routes/quizzes';

type QuestionType = 'multiple_choice' | 'true_false' | 'short_answer';

type TakeQuestion = {
    id: number;
    question_text: string;
    type: QuestionType;
    points: number;
    correct_count: number;
    choices: Array<{ id: number; choice_text: string }>;
};

type AnswerState = { choice_ids: number[]; text: string };

const props = defineProps<{
    attempt: {
        id: number;
        quiz: {
            id: number;
            title: string;
            description: string | null;
            quiz_code: string;
            questions: TakeQuestion[];
        };
    };
}>();

defineOptions({
    layout: {
        breadcrumbs: [
            { title: 'Quizzes', href: quizzesIndex() },
            { title: 'Taking', href: '#' },
        ],
    },
});

const questions = props.attempt.quiz.questions;
const currentIndex = ref(0);
const submitting = ref(false);
const submitDialogOpen = ref(false);

const answers = reactive<Record<number, AnswerState>>(
    Object.fromEntries(questions.map((q) => [q.id, { choice_ids: [], text: '' }])),
);

const current = computed(() => questions[currentIndex.value]);
const progress = computed(() => (questions.length === 0 ? 0 : ((currentIndex.value + 1) / questions.length) * 100));
const isLast = computed(() => questions.length === 0 || currentIndex.value === questions.length - 1);

const answeredCount = computed(() =>
    questions.filter((q) => {
        const a = answers[q.id];
        if (q.type === 'short_answer') {
            return a.text.trim().length > 0;
        }
        return a.choice_ids.length > 0;
    }).length,
);

const isSingleSelect = (question: TakeQuestion): boolean =>
    question.type === 'true_false' || question.correct_count === 1;

const selectionLabel = (question: TakeQuestion | undefined): string | null => {
    if (!question || question.type !== 'multiple_choice') return null;
    if (question.correct_count === 1) return 'Select one answer';
    return `Select up to ${question.correct_count}`;
};

const selectionProgress = (question: TakeQuestion | undefined): string | null => {
    if (!question || question.type !== 'multiple_choice' || question.correct_count <= 1) return null;
    const selected = answers[question.id].choice_ids.length;
    return `${selected} of ${question.correct_count} selected`;
};

const isAtLimit = (question: TakeQuestion): boolean => {
    if (isSingleSelect(question)) return false;
    return answers[question.id].choice_ids.length >= question.correct_count;
};

const toggleChoice = (question: TakeQuestion, choiceId: number): void => {
    const state = answers[question.id];
    const index = state.choice_ids.indexOf(choiceId);
    const selected = index >= 0;

    if (isSingleSelect(question)) {
        state.choice_ids = selected ? [] : [choiceId];
        return;
    }

    if (selected) {
        state.choice_ids.splice(index, 1);
    } else if (!isAtLimit(question)) {
        state.choice_ids.push(choiceId);
    }
};

const isSelected = (question: TakeQuestion, choiceId: number): boolean =>
    answers[question.id].choice_ids.includes(choiceId);

const isDisabled = (question: TakeQuestion, choiceId: number): boolean =>
    !isSingleSelect(question) && !isSelected(question, choiceId) && isAtLimit(question);

const next = (): void => {
    if (currentIndex.value < questions.length - 1) {
        currentIndex.value += 1;
    }
};

const prev = (): void => {
    if (currentIndex.value > 0) {
        currentIndex.value -= 1;
    }
};

const goTo = (index: number): void => {
    currentIndex.value = index;
};

const submit = (): void => {
    if (submitting.value) {
        return;
    }
    submitDialogOpen.value = false;
    submitting.value = true;
    router.post(
        attemptsSubmit.url({ attempt: props.attempt.id }),
        {
            answers: questions.map((q) => ({
                question_id: q.id,
                choice_ids: answers[q.id].choice_ids,
                text: answers[q.id].text,
            })),
        } as unknown as Record<string, unknown>,
        {
            onFinish: () => {
                submitting.value = false;
            },
        },
    );
};
</script>

<template>
    <Head :title="`Taking: ${props.attempt.quiz.title}`" />

    <div class="mx-auto flex w-full max-w-3xl flex-col gap-6 p-6">
        <div class="flex flex-col gap-2">
            <div class="flex items-center justify-between">
                <div>
                    <h1 class="text-xl font-semibold">{{ props.attempt.quiz.title }}</h1>
                    <p v-if="props.attempt.quiz.description" class="text-sm text-muted-foreground">
                        {{ props.attempt.quiz.description }}
                    </p>
                </div>
                <Badge variant="outline">
                    {{ answeredCount }}/{{ questions.length }} answered
                </Badge>
            </div>
            <div class="h-2 rounded-full bg-muted">
                <div class="h-full rounded-full bg-primary transition-all" :style="{ width: `${progress}%` }" />
            </div>
        </div>

        <div class="flex flex-wrap gap-1.5">
            <button
                v-for="(q, index) in questions"
                :key="q.id"
                type="button"
                class="flex size-8 items-center justify-center rounded-full border text-xs font-medium transition"
                :class="[
                    index === currentIndex ? 'border-primary bg-primary text-primary-foreground' : '',
                    index !== currentIndex && (answers[q.id].choice_ids.length > 0 || answers[q.id].text.trim().length > 0)
                        ? 'border-emerald-500 bg-emerald-50 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300'
                        : '',
                    index !== currentIndex && !(answers[q.id].choice_ids.length > 0 || answers[q.id].text.trim().length > 0)
                        ? 'border-muted bg-background text-muted-foreground'
                        : '',
                ]"
                @click="goTo(index)"
            >
                {{ index + 1 }}
            </button>
        </div>

        <Card v-if="current">
            <CardHeader>
                <div class="flex flex-wrap items-center gap-2">
                    <Badge variant="outline">Question {{ currentIndex + 1 }} of {{ questions.length }}</Badge>
                    <Badge variant="honey">
                        {{ current.points }} pt{{ current.points === 1 ? '' : 's' }}
                    </Badge>
                    <Badge v-if="selectionLabel(current)" variant="secondary">
                        {{ selectionLabel(current) }}
                    </Badge>
                    <span v-if="selectionProgress(current)" class="text-xs text-muted-foreground">
                        {{ selectionProgress(current) }}
                    </span>
                </div>
                <CardTitle class="text-lg leading-relaxed">
                    {{ current.question_text }}
                </CardTitle>
            </CardHeader>

            <CardContent>
                <div v-if="current.type !== 'short_answer'" class="grid gap-2">
                    <button
                        v-for="choice in current.choices"
                        :key="choice.id"
                        type="button"
                        class="flex items-start gap-3 rounded-lg border p-4 text-left transition"
                        :class="[
                            isSelected(current, choice.id)
                                ? 'border-primary bg-primary/5 ring-2 ring-primary/40'
                                : isDisabled(current, choice.id)
                                    ? 'cursor-not-allowed border-muted opacity-50'
                                    : 'hover:border-primary/60 hover:bg-muted/40',
                        ]"
                        :disabled="isDisabled(current, choice.id)"
                        @click="toggleChoice(current, choice.id)"
                    >
                        <span
                            class="mt-0.5 flex size-6 shrink-0 items-center justify-center border text-xs font-semibold transition"
                            :class="[
                                isSingleSelect(current) ? 'rounded-full' : 'rounded-md',
                                isSelected(current, choice.id)
                                    ? 'border-primary bg-primary text-primary-foreground'
                                    : 'text-muted-foreground',
                            ]"
                        >
                            {{ isSelected(current, choice.id) ? '✓' : '' }}
                        </span>
                        <span class="flex-1 text-sm">{{ choice.choice_text }}</span>
                    </button>
                </div>

                <div v-else class="grid gap-2">
                    <textarea
                        v-model="answers[current.id].text"
                        rows="4"
                        class="border-input bg-background focus-visible:ring-ring/50 w-full rounded-md border px-3 py-2 text-sm shadow-xs outline-none focus-visible:ring-[3px]"
                        placeholder="Type your answer..."
                    />
                </div>
            </CardContent>
        </Card>

        <Card v-else>
            <CardContent class="py-10 text-center text-sm text-muted-foreground">
                This quiz has no questions.
            </CardContent>
        </Card>

        <div class="flex items-center justify-between gap-2">
            <Button variant="outline" :disabled="currentIndex === 0" @click="prev">
                <ChevronLeft class="size-4" />
                Previous
            </Button>
            <div class="flex gap-2">
                <Button v-if="!isLast" @click="next">
                    Next
                    <ChevronRight class="size-4" />
                </Button>
                <Button v-else :disabled="submitting" @click="submitDialogOpen = true">
                    <Flag class="size-4" />
                    Submit quiz
                </Button>
            </div>
        </div>
    </div>

    <ConfirmDialog
        v-model:open="submitDialogOpen"
        title="Submit quiz?"
        :description="`You've answered ${answeredCount} of ${questions.length} question${questions.length === 1 ? '' : 's'}. Once submitted, your answers cannot be changed.`"
        confirm-label="Submit quiz"
        :processing="submitting"
        @confirm="submit"
    />
</template>
