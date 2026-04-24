<script setup lang="ts">
import { Head, Link, router } from '@inertiajs/vue3';
import { CheckCircle2, Copy, Play, Share2 } from 'lucide-vue-next';
import { ref } from 'vue';
import Heading from '@/components/Heading.vue';
import QuizStartDialog from '@/components/QuizStartDialog.vue';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { start as attemptsStart } from '@/actions/App/Http/Controllers/QuizAttemptController';
import { edit as quizzesEdit, index as quizzesIndex } from '@/routes/quizzes';

type QuestionType = 'multiple_choice' | 'true_false' | 'short_answer';

const props = defineProps<{
    quiz: {
        id: number;
        title: string;
        description: string | null;
        quiz_code: string;
        status: 'active' | 'inactive';
        source: string;
        creator?: { id: number; name: string } | null;
        questions: Array<{
            id: number;
            question_text: string;
            type: QuestionType;
            points: number;
            explanation: string | null;
            correct_answer: string[] | null;
            choices?: Array<{ id: number; choice_text: string; is_correct: boolean }>;
        }>;
    };
}>();

defineOptions({
    layout: {
        breadcrumbs: [
            { title: 'Quizzes', href: quizzesIndex() },
            { title: 'Details', href: '#' },
        ],
    },
});

const copied = ref(false);
const startDialogOpen = ref(false);
const startingInProgress = ref(false);

const copyCode = async (): Promise<void> => {
    try {
        await navigator.clipboard.writeText(props.quiz.quiz_code);
        copied.value = true;
        setTimeout(() => (copied.value = false), 1500);
    } catch {
        /* noop */
    }
};

const typeLabel = (type: QuestionType): string =>
    ({
        multiple_choice: 'Multiple choice',
        true_false: 'True / False',
        short_answer: 'Short answer',
    })[type];

const confirmStart = (): void => {
    startingInProgress.value = true;
    router.post(
        attemptsStart.url({ quiz: props.quiz.id }),
        {},
        { onFinish: () => { startingInProgress.value = false; } },
    );
};

const totalPoints = props.quiz.questions.reduce((s, q) => s + q.points, 0);
</script>

<template>
    <Head :title="props.quiz.title" />

    <div class="mx-auto flex w-full max-w-4xl flex-col gap-6 p-6">
        <div class="flex flex-wrap items-start justify-between gap-4">
            <Heading :title="props.quiz.title" :description="props.quiz.description ?? 'No description provided.'" />
            <div class="flex flex-wrap gap-2">
                <Button variant="outline" as-child>
                    <Link :href="quizzesEdit(props.quiz.id)">Edit</Link>
                </Button>
                <Button v-if="props.quiz.status === 'active'" @click="startDialogOpen = true">
                    <Play class="size-4" />
                    Take quiz
                </Button>
            </div>
        </div>

        <Card class="border-primary/30 bg-gradient-to-br from-primary/5 to-transparent">
            <CardHeader>
                <div class="flex items-center gap-2 text-sm font-medium text-muted-foreground">
                    <Share2 class="size-4" />
                    Share this quiz
                </div>
                <CardTitle>Join code</CardTitle>
                <CardDescription>
                    Anyone signed in can go to /join and enter this code to take the quiz.
                </CardDescription>
            </CardHeader>
            <CardContent class="flex flex-wrap items-center gap-4">
                <div
                    class="flex h-16 items-center rounded-xl border-2 border-dashed border-primary/40 bg-background px-6 font-mono text-3xl font-bold tracking-[0.3em] text-primary"
                >
                    {{ props.quiz.quiz_code }}
                </div>
                <Button variant="outline" @click="copyCode">
                    <CheckCircle2 v-if="copied" class="size-4 text-emerald-500" />
                    <Copy v-else class="size-4" />
                    {{ copied ? 'Copied' : 'Copy code' }}
                </Button>
                <Badge :variant="props.quiz.status === 'active' ? 'success' : 'secondary'">
                    {{ props.quiz.status }}
                </Badge>
            </CardContent>
        </Card>

        <Card>
            <CardHeader>
                <CardTitle>Questions</CardTitle>
                <CardDescription>
                    {{ props.quiz.questions.length }} question{{ props.quiz.questions.length === 1 ? '' : 's' }} ·
                    {{ totalPoints }} point{{ totalPoints === 1 ? '' : 's' }} total
                </CardDescription>
            </CardHeader>
            <CardContent class="flex flex-col gap-4">
                <div
                    v-if="props.quiz.questions.length === 0"
                    class="rounded-lg border border-dashed p-6 text-center text-sm text-muted-foreground"
                >
                    No questions yet. Add some in the editor.
                </div>

                <div
                    v-for="(question, index) in props.quiz.questions"
                    :key="question.id"
                    class="rounded-xl border bg-card p-4 shadow-sm"
                >
                    <div class="mb-3 flex items-start justify-between gap-3">
                        <div class="flex items-center gap-2">
                            <Badge variant="outline">Q{{ index + 1 }}</Badge>
                            <Badge variant="secondary">{{ typeLabel(question.type) }}</Badge>
                            <Badge variant="honey">{{ question.points }} pt{{ question.points === 1 ? '' : 's' }}</Badge>
                        </div>
                    </div>
                    <p class="mb-3 text-base font-medium">{{ question.question_text }}</p>

                    <div v-if="question.type !== 'short_answer' && question.choices?.length" class="grid gap-2">
                        <div
                            v-for="choice in question.choices"
                            :key="choice.id"
                            class="flex items-center gap-2 rounded-md border bg-background p-2 text-sm"
                            :class="choice.is_correct ? 'border-emerald-300 bg-emerald-50 dark:bg-emerald-900/20' : ''"
                        >
                            <CheckCircle2 v-if="choice.is_correct" class="size-4 text-emerald-500" />
                            <span v-else class="size-4 rounded-full border" />
                            <span>{{ choice.choice_text }}</span>
                        </div>
                    </div>

                    <div v-else-if="question.type === 'short_answer'" class="grid gap-1 text-sm">
                        <span class="text-muted-foreground">Accepted answers:</span>
                        <div class="flex flex-wrap gap-1.5">
                            <Badge
                                v-for="answer in question.correct_answer ?? []"
                                :key="answer"
                                variant="honey"
                            >
                                {{ answer }}
                            </Badge>
                        </div>
                    </div>

                    <p v-if="question.explanation" class="mt-3 rounded-md bg-muted/50 p-2 text-xs text-muted-foreground">
                        <span class="font-semibold">Why:</span> {{ question.explanation }}
                    </p>
                </div>
            </CardContent>
        </Card>
    </div>

    <QuizStartDialog
        v-model:open="startDialogOpen"
        :quiz="props.quiz"
        :processing="startingInProgress"
        @confirm="confirmStart"
    />
</template>
