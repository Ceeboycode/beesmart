<script setup lang="ts">
import { Head, Link } from '@inertiajs/vue3';
import { CheckCircle2, RotateCcw, XCircle } from 'lucide-vue-next';
import { computed } from 'vue';
import ScoreDonut from '@/components/ScoreDonut.vue';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { attempts as quizzesAttempts, index as quizzesIndex } from '@/routes/quizzes';

type QuestionType = 'multiple_choice' | 'true_false' | 'short_answer';

type ResultQuestion = {
    id: number;
    question_text: string;
    type: QuestionType;
    points: number;
    explanation: string | null;
    correct_answer: string[] | null;
    choices?: Array<{ id: number; choice_text: string; is_correct: boolean }>;
};

const props = defineProps<{
    attempt: {
        id: number;
        total_score: number;
        status: string;
        quiz: {
            id: number;
            title: string;
            quiz_code: string;
            created_by: number;
            questions: ResultQuestion[];
        };
        answers: Array<{
            question_id: number;
            answer: string | null;
            answer_json: number[] | null;
            score: number;
        }>;
    };
    maxScore: number;
}>();

defineOptions({
    layout: {
        breadcrumbs: [
            { title: 'Quizzes', href: quizzesIndex() },
            { title: 'Results', href: '#' },
        ],
    },
});

const answerByQuestion = computed(() => {
    const map: Record<number, (typeof props.attempt.answers)[number]> = {};
    for (const answer of props.attempt.answers) {
        map[answer.question_id] = answer;
    }
    return map;
});

const wasSelected = (questionId: number, choiceId: number): boolean =>
    Boolean(answerByQuestion.value[questionId]?.answer_json?.includes(choiceId));

const userAnswered = (questionId: number): boolean => {
    const answer = answerByQuestion.value[questionId];
    if (!answer) return false;
    return Boolean(answer.answer?.trim()) || (answer.answer_json?.length ?? 0) > 0;
};

const isCorrect = (question: ResultQuestion): boolean => {
    const answer = answerByQuestion.value[question.id];
    return Boolean(answer) && answer.score === question.points && question.points > 0;
};

const correctCount = computed(() => props.attempt.quiz.questions.filter(isCorrect).length);
const incorrectCount = computed(() =>
    props.attempt.quiz.questions.filter((q) => userAnswered(q.id) && !isCorrect(q)).length,
);
const skippedCount = computed(() =>
    props.attempt.quiz.questions.filter((q) => !userAnswered(q.id)).length,
);

const grade = computed(() => {
    const pct = props.maxScore === 0 ? 0 : Math.round((props.attempt.total_score / props.maxScore) * 100);
    if (pct >= 90) return { label: 'Excellent!', variant: 'success' as const };
    if (pct >= 75) return { label: 'Great job!', variant: 'success' as const };
    if (pct >= 60) return { label: 'Good effort', variant: 'secondary' as const };
    return { label: 'Keep practising', variant: 'destructive' as const };
});
</script>

<template>
    <Head :title="`Results: ${props.attempt.quiz.title}`" />

    <div class="mx-auto flex w-full max-w-3xl flex-col gap-6 p-6">
        <!-- Score summary card -->
        <Card class="overflow-hidden border-primary/20">
            <CardHeader class="bg-gradient-to-br from-primary/5 to-transparent pb-4 text-center">
                <p class="text-sm font-medium text-muted-foreground">{{ props.attempt.quiz.title }}</p>
                <Badge :variant="grade.variant" class="mx-auto mt-1 w-fit text-sm">
                    {{ grade.label }}
                </Badge>
            </CardHeader>
            <CardContent class="flex flex-col items-center gap-6 pt-6">
                <ScoreDonut
                    :score="props.attempt.total_score"
                    :max-score="props.maxScore"
                    :correct="correctCount"
                    :incorrect="incorrectCount"
                    :skipped="skippedCount"
                    :total="props.attempt.quiz.questions.length"
                />

                <div class="flex flex-wrap justify-center gap-3">
                    <Button variant="outline" as-child>
                        <Link :href="quizzesIndex()">Back to quizzes</Link>
                    </Button>
                    <Button variant="outline" as-child>
                        <Link :href="quizzesAttempts(props.attempt.quiz.id).url">
                            <RotateCcw class="size-4" />
                            All attempts
                        </Link>
                    </Button>
                </div>
            </CardContent>
        </Card>

        <!-- Question review -->
        <Card>
            <CardHeader>
                <CardTitle class="text-base">Question review</CardTitle>
            </CardHeader>
            <CardContent class="flex flex-col gap-3">
                <div
                    v-for="(question, index) in props.attempt.quiz.questions"
                    :key="question.id"
                    class="rounded-xl border bg-card p-4 shadow-sm"
                    :class="isCorrect(question) ? 'border-emerald-200 dark:border-emerald-900' : !userAnswered(question.id) ? '' : 'border-rose-200 dark:border-rose-900'"
                >
                    <div class="mb-3 flex flex-wrap items-center gap-2">
                        <Badge variant="outline">Q{{ index + 1 }}</Badge>
                        <Badge :variant="isCorrect(question) ? 'success' : !userAnswered(question.id) ? 'secondary' : 'destructive'">
                            {{ isCorrect(question) ? 'Correct' : !userAnswered(question.id) ? 'Skipped' : 'Incorrect' }}
                        </Badge>
                        <Badge variant="honey">
                            {{ answerByQuestion[question.id]?.score ?? 0 }} / {{ question.points }} pt{{ question.points === 1 ? '' : 's' }}
                        </Badge>
                    </div>

                    <p class="mb-3 text-sm font-medium leading-relaxed">{{ question.question_text }}</p>

                    <div v-if="question.type !== 'short_answer' && question.choices?.length" class="grid gap-1.5">
                        <div
                            v-for="choice in question.choices"
                            :key="choice.id"
                            class="flex items-start gap-2 rounded-md border bg-background px-3 py-2 text-sm"
                            :class="[
                                choice.is_correct ? 'border-emerald-300 bg-emerald-50 dark:bg-emerald-900/20' : '',
                                wasSelected(question.id, choice.id) && !choice.is_correct ? 'border-rose-300 bg-rose-50 dark:bg-rose-900/20' : '',
                            ]"
                        >
                            <CheckCircle2 v-if="choice.is_correct" class="mt-0.5 size-4 shrink-0 text-emerald-500" />
                            <XCircle v-else-if="wasSelected(question.id, choice.id)" class="mt-0.5 size-4 shrink-0 text-rose-500" />
                            <span v-else class="mt-0.5 size-4 shrink-0 rounded-full border" />
                            <span class="flex-1">
                                {{ choice.choice_text }}
                                <span v-if="wasSelected(question.id, choice.id) && !choice.is_correct" class="text-xs text-muted-foreground"> — your answer</span>
                                <span v-if="wasSelected(question.id, choice.id) && choice.is_correct" class="text-xs text-emerald-600"> — your answer ✓</span>
                            </span>
                        </div>
                    </div>

                    <div v-else-if="question.type === 'short_answer'" class="grid gap-1.5 text-sm">
                        <div class="rounded-md border bg-background px-3 py-2">
                            <span class="text-xs font-medium uppercase text-muted-foreground">Your answer</span>
                            <p class="mt-0.5">{{ answerByQuestion[question.id]?.answer || '—' }}</p>
                        </div>
                        <div class="rounded-md border border-emerald-300 bg-emerald-50 px-3 py-2 dark:bg-emerald-900/20">
                            <span class="text-xs font-medium uppercase text-muted-foreground">Accepted</span>
                            <p class="mt-0.5">{{ (question.correct_answer ?? []).join(' · ') || '—' }}</p>
                        </div>
                    </div>

                    <p v-if="question.explanation" class="mt-3 rounded-md bg-muted/50 px-3 py-2 text-xs text-muted-foreground">
                        <span class="font-semibold">Why:</span> {{ question.explanation }}
                    </p>
                </div>
            </CardContent>
        </Card>
    </div>
</template>
