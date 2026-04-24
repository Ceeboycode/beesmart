<script setup lang="ts">
import { Head, Link } from '@inertiajs/vue3';
import { CheckCircle2, Clock, ExternalLink, Lock } from 'lucide-vue-next';
import { computed } from 'vue';
import Heading from '@/components/Heading.vue';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { results as attemptsResults } from '@/routes/attempts';
import { index as quizzesIndex } from '@/routes/quizzes';

type AttemptItem = {
    id: number;
    attempt_number: number;
    status: 'in_progress' | 'submitted' | 'graded';
    total_score: number | null;
    started_at: string | null;
    submitted_at: string | null;
    user: { id: number; name: string } | null;
};

const props = defineProps<{
    quiz: { id: number; title: string; quiz_code: string; max_attempts: number | null };
    attempts: AttemptItem[];
    isOwner: boolean;
    maxScore: number;
}>();

const submitted = computed(() => props.attempts.filter((a) => a.status !== 'in_progress'));
const inProgress = computed(() => props.attempts.filter((a) => a.status === 'in_progress'));

const mySubmittedCount = computed(() =>
    props.isOwner ? 0 : submitted.value.length,
);

const attemptsRemaining = computed(() => {
    if (!props.quiz.max_attempts || props.isOwner) return null;
    return Math.max(0, props.quiz.max_attempts - mySubmittedCount.value);
});

const toDateLabel = (iso: string | null): string => {
    if (!iso) return '—';
    return new Date(iso).toLocaleString();
};

const scorePercent = (score: number | null): number => {
    if (score === null || props.maxScore === 0) return 0;
    return Math.round((score / props.maxScore) * 100);
};

const scoreVariant = (score: number | null): 'success' | 'destructive' | 'secondary' => {
    const pct = scorePercent(score);
    if (pct >= 75) return 'success';
    if (pct >= 50) return 'secondary';
    return 'destructive';
};

const bestScore = computed(() => {
    const scores = submitted.value.map((a) => a.total_score ?? 0);
    return scores.length ? Math.max(...scores) : null;
});
</script>

<template>
    <Head :title="`Attempts — ${props.quiz.title}`" />

    <div class="mx-auto flex w-full max-w-4xl flex-col gap-6 p-6">
        <div class="flex flex-wrap items-start justify-between gap-4">
            <Heading
                :title="props.isOwner ? 'All attempts' : 'My attempts'"
                :description="props.isOwner
                    ? `Everyone who has attempted &quot;${props.quiz.title}&quot;.`
                    : `Your attempts on &quot;${props.quiz.title}&quot;.`"
            />
            <div class="flex items-center gap-2">
                <Badge variant="outline" class="font-mono tracking-widest">{{ props.quiz.quiz_code }}</Badge>
                <Button variant="outline" size="sm" as-child>
                    <Link :href="quizzesIndex()">Back to quizzes</Link>
                </Button>
            </div>
        </div>

        <!-- Summary stats -->
        <div class="grid grid-cols-2 gap-4 sm:grid-cols-4">
            <Card class="text-center">
                <CardHeader class="pb-1 pt-4">
                    <CardDescription class="text-xs">Total attempts</CardDescription>
                </CardHeader>
                <CardContent class="pb-4 text-3xl font-bold">{{ props.attempts.length }}</CardContent>
            </Card>
            <Card class="text-center">
                <CardHeader class="pb-1 pt-4">
                    <CardDescription class="text-xs">Submitted</CardDescription>
                </CardHeader>
                <CardContent class="pb-4 text-3xl font-bold">{{ submitted.length }}</CardContent>
            </Card>
            <Card class="text-center">
                <CardHeader class="pb-1 pt-4">
                    <CardDescription class="text-xs">Max score</CardDescription>
                </CardHeader>
                <CardContent class="pb-4 text-3xl font-bold">{{ props.maxScore }}</CardContent>
            </Card>
            <Card class="text-center">
                <CardHeader class="pb-1 pt-4">
                    <CardDescription class="text-xs">{{ props.isOwner ? 'Avg score' : 'Best score' }}</CardDescription>
                </CardHeader>
                <CardContent class="pb-4 text-3xl font-bold">
                    <template v-if="props.isOwner && submitted.length">
                        {{ Math.round(submitted.reduce((s, a) => s + (a.total_score ?? 0), 0) / submitted.length) }}
                    </template>
                    <template v-else-if="!props.isOwner && bestScore !== null">
                        {{ bestScore }}
                    </template>
                    <template v-else>—</template>
                </CardContent>
            </Card>
        </div>

        <!-- Attempt limit notice (non-owners only) -->
        <div
            v-if="props.quiz.max_attempts && !props.isOwner"
            class="flex items-center gap-3 rounded-lg border px-4 py-3 text-sm"
            :class="attemptsRemaining === 0
                ? 'border-destructive/30 bg-destructive/5 text-destructive'
                : 'border-amber-300/50 bg-amber-50/50 text-amber-700 dark:bg-amber-900/10 dark:text-amber-400'"
        >
            <Lock class="size-4 shrink-0" />
            <span v-if="attemptsRemaining === 0">
                You've used all <strong>{{ props.quiz.max_attempts }}</strong> allowed attempt{{ props.quiz.max_attempts === 1 ? '' : 's' }}.
            </span>
            <span v-else>
                You have <strong>{{ attemptsRemaining }}</strong> of {{ props.quiz.max_attempts }} attempt{{ props.quiz.max_attempts === 1 ? '' : 's' }} remaining.
            </span>
        </div>

        <!-- In-progress -->
        <Card v-if="inProgress.length > 0">
            <CardHeader>
                <CardTitle class="flex items-center gap-2 text-sm font-semibold">
                    <Clock class="size-4 text-amber-500" />
                    In progress ({{ inProgress.length }})
                </CardTitle>
            </CardHeader>
            <CardContent class="flex flex-col divide-y">
                <div
                    v-for="attempt in inProgress"
                    :key="attempt.id"
                    class="flex flex-wrap items-center justify-between gap-3 py-3 first:pt-0 last:pb-0"
                >
                    <div>
                        <p class="text-sm font-medium">
                            {{ attempt.user ? attempt.user.name : `Attempt #${attempt.attempt_number}` }}
                        </p>
                        <p v-if="attempt.user" class="text-xs text-muted-foreground">
                            Attempt #{{ attempt.attempt_number }}
                        </p>
                        <p class="text-xs text-muted-foreground">Started {{ toDateLabel(attempt.started_at) }}</p>
                    </div>
                    <Badge variant="secondary">In progress</Badge>
                </div>
            </CardContent>
        </Card>

        <!-- Submitted -->
        <Card>
            <CardHeader>
                <CardTitle class="flex items-center gap-2 text-sm font-semibold">
                    <CheckCircle2 class="size-4 text-emerald-500" />
                    Submitted ({{ submitted.length }})
                </CardTitle>
                <CardDescription v-if="submitted.length === 0">No submitted attempts yet.</CardDescription>
            </CardHeader>
            <CardContent v-if="submitted.length > 0" class="flex flex-col divide-y p-0">
                <div
                    v-for="attempt in submitted"
                    :key="attempt.id"
                    class="flex flex-wrap items-center justify-between gap-4 px-6 py-4"
                >
                    <div class="min-w-0">
                        <p class="truncate text-sm font-medium">
                            {{ attempt.user ? attempt.user.name : `Attempt #${attempt.attempt_number}` }}
                        </p>
                        <p v-if="attempt.user" class="text-xs text-muted-foreground">
                            Attempt #{{ attempt.attempt_number }}
                        </p>
                        <p class="text-xs text-muted-foreground">{{ toDateLabel(attempt.submitted_at) }}</p>
                    </div>

                    <div class="flex items-center gap-4">
                        <!-- Score bar -->
                        <div class="hidden flex-col items-end gap-1 sm:flex">
                            <span class="text-xs text-muted-foreground">
                                {{ attempt.total_score ?? 0 }} / {{ props.maxScore }}
                            </span>
                            <div class="h-1.5 w-24 overflow-hidden rounded-full bg-muted">
                                <div
                                    class="h-full rounded-full transition-all"
                                    :class="scoreVariant(attempt.total_score) === 'success'
                                        ? 'bg-emerald-500'
                                        : scoreVariant(attempt.total_score) === 'secondary'
                                            ? 'bg-amber-400'
                                            : 'bg-rose-500'"
                                    :style="{ width: `${scorePercent(attempt.total_score)}%` }"
                                />
                            </div>
                        </div>

                        <Badge :variant="scoreVariant(attempt.total_score)" class="shrink-0">
                            {{ scorePercent(attempt.total_score) }}%
                        </Badge>

                        <Button size="sm" variant="outline" as-child>
                            <Link :href="attemptsResults(attempt.id).url">
                                <ExternalLink class="size-3.5" />
                                Results
                            </Link>
                        </Button>
                    </div>
                </div>
            </CardContent>
        </Card>

        <div
            v-if="props.attempts.length === 0"
            class="rounded-xl border border-dashed p-10 text-center text-sm text-muted-foreground"
        >
            No attempts have been made on this quiz yet.
        </div>
    </div>
</template>
