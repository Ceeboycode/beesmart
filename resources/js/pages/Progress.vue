<script setup lang="ts">
import { Head, Link } from '@inertiajs/vue3';
import {
    BookOpen,
    CheckCircle2,
    ChevronDown,
    ChevronUp,
    ExternalLink,
    FolderOpen,
    Info,
    Minus,
    Star,
    Target,
    Trophy,
    TrendingDown,
    TrendingUp,
} from 'lucide-vue-next';
import { computed, ref } from 'vue';
import DonutChart from '@/components/DonutChart.vue';
import type { DonutSegment } from '@/components/DonutChart.vue';
import Heading from '@/components/Heading.vue';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { progress as progressRoute } from '@/routes';
import { results as attemptResults } from '@/routes/attempts';

type TypeStat = { total: number; correct: number; pct: number };
type CategoryStat = {
    category: { id: number; name: string } | null;
    quiz_count: number;
    attempt_count: number;
    avg_pct: number;
    best_pct: number;
};
type AttemptHistoryItem = {
    id: number;
    number: number;
    score: number;
    max_score: number;
    pct: number;
    submitted_at: string | null;
};
type QuizHistoryItem = {
    quiz: { id: number; title: string };
    attempts_count: number;
    best_pct: number;
    avg_pct: number;
    latest_pct: number;
    trend: 'improving' | 'declining' | 'stable';
    history: AttemptHistoryItem[];
};
type Suggestion = {
    type: 'strength' | 'weakness' | 'warning' | 'tip' | 'info';
    title: string;
    message: string;
    icon: string;
};

const props = defineProps<{
    stats: { total_attempts: number; quizzes_taken: number; avg_pct: number; best_pct: number };
    typeStats: Record<string, TypeStat>;
    categoryStats: CategoryStat[];
    quizHistory: QuizHistoryItem[];
    suggestions: Suggestion[];
}>();

defineOptions({
    layout: {
        breadcrumbs: [{ title: 'My Progress', href: progressRoute() }],
    },
});

const expandedQuiz = ref<number | null>(null);

const toggleQuiz = (quizId: number) => {
    expandedQuiz.value = expandedQuiz.value === quizId ? null : quizId;
};

const scoreBadgeClass = (pct: number): string => {
    if (pct >= 75) return 'bg-emerald-50 text-emerald-700 border-emerald-200 dark:bg-emerald-900/20 dark:text-emerald-400 dark:border-emerald-800';
    if (pct >= 50) return 'bg-amber-50 text-amber-700 border-amber-200 dark:bg-amber-900/20 dark:text-amber-400 dark:border-amber-800';
    return 'bg-rose-50 text-rose-700 border-rose-200 dark:bg-rose-900/20 dark:text-rose-400 dark:border-rose-800';
};

const barClass = (pct: number): string => {
    if (pct >= 75) return 'bg-emerald-500';
    if (pct >= 50) return 'bg-amber-500';
    return 'bg-rose-500';
};

const typeLabel = (type: string): string => {
    const map: Record<string, string> = {
        multiple_choice: 'Multiple Choice',
        true_false: 'True / False',
        short_answer: 'Short Answer',
    };
    return map[type] ?? type;
};

const suggestionStyle = (type: Suggestion['type']) => {
    const map = {
        strength: {
            card: 'border-emerald-200 bg-emerald-50/50 dark:border-emerald-800 dark:bg-emerald-900/10',
            icon: 'bg-emerald-100 text-emerald-600 dark:bg-emerald-900/30 dark:text-emerald-400',
            title: 'text-emerald-800 dark:text-emerald-300',
        },
        weakness: {
            card: 'border-amber-200 bg-amber-50/50 dark:border-amber-800 dark:bg-amber-900/10',
            icon: 'bg-amber-100 text-amber-600 dark:bg-amber-900/30 dark:text-amber-400',
            title: 'text-amber-800 dark:text-amber-300',
        },
        warning: {
            card: 'border-rose-200 bg-rose-50/50 dark:border-rose-800 dark:bg-rose-900/10',
            icon: 'bg-rose-100 text-rose-600 dark:bg-rose-900/30 dark:text-rose-400',
            title: 'text-rose-800 dark:text-rose-300',
        },
        tip: {
            card: 'border-blue-200 bg-blue-50/50 dark:border-blue-800 dark:bg-blue-900/10',
            icon: 'bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400',
            title: 'text-blue-800 dark:text-blue-300',
        },
        info: {
            card: 'border-muted bg-muted/30',
            icon: 'bg-muted text-muted-foreground',
            title: 'text-foreground',
        },
    };
    return map[type] ?? map.info;
};

const suggestionIcon = (icon: string) => {
    const map: Record<string, unknown> = {
        trophy: Trophy,
        target: Target,
        'trending-up': TrendingUp,
        'trending-down': TrendingDown,
        'book-open': BookOpen,
        star: Star,
        'check-circle': CheckCircle2,
        info: Info,
    };
    return map[icon] ?? Info;
};

const toDateShort = (iso: string | null): string =>
    iso ? new Date(iso).toLocaleDateString(undefined, { month: 'short', day: 'numeric' }) : '—';

const TYPE_COLORS: Record<string, string> = {
    multiple_choice: '#3b82f6',
    true_false: '#8b5cf6',
    short_answer: '#f59e0b',
};

const typeChartSegments = computed<DonutSegment[]>(() =>
    Object.entries(props.typeStats).map(([type, stat]) => ({
        label: typeLabel(type),
        value: stat.total,
        color: TYPE_COLORS[type] ?? '#94a3b8',
    })),
);
</script>

<template>
    <Head title="My Progress" />

    <div class="flex flex-col gap-6 p-6">
        <Heading
            title="My Progress"
            description="Track your performance across quizzes and discover how to improve."
        />

        <!-- Summary stats -->
        <div class="grid grid-cols-2 gap-4 lg:grid-cols-4">
            <Card>
                <CardContent class="pt-6">
                    <p class="text-sm text-muted-foreground">Quizzes taken</p>
                    <p class="mt-1 text-3xl font-bold">{{ stats.quizzes_taken }}</p>
                    <p class="mt-2 text-xs text-muted-foreground">unique quizzes</p>
                </CardContent>
            </Card>
            <Card>
                <CardContent class="pt-6">
                    <p class="text-sm text-muted-foreground">Total attempts</p>
                    <p class="mt-1 text-3xl font-bold">{{ stats.total_attempts }}</p>
                    <p class="mt-2 text-xs text-muted-foreground">submitted</p>
                </CardContent>
            </Card>
            <Card>
                <CardContent class="pt-6">
                    <p class="text-sm text-muted-foreground">Average score</p>
                    <p class="mt-1 text-3xl font-bold" :class="stats.avg_pct >= 75 ? 'text-emerald-600' : stats.avg_pct >= 50 ? 'text-amber-600' : stats.total_attempts > 0 ? 'text-rose-600' : ''">
                        {{ stats.total_attempts > 0 ? `${stats.avg_pct}%` : '—' }}
                    </p>
                    <p class="mt-2 text-xs text-muted-foreground">across all attempts</p>
                </CardContent>
            </Card>
            <Card>
                <CardContent class="pt-6">
                    <p class="text-sm text-muted-foreground">Best score</p>
                    <p class="mt-1 text-3xl font-bold text-emerald-600">
                        {{ stats.total_attempts > 0 ? `${stats.best_pct}%` : '—' }}
                    </p>
                    <p class="mt-2 text-xs text-muted-foreground">personal best</p>
                </CardContent>
            </Card>
        </div>

        <!-- Question type + suggestions -->
        <div class="grid gap-6 lg:grid-cols-2">
            <!-- Performance by question type -->
            <Card>
                <CardHeader>
                    <CardTitle class="text-base">Performance by question type</CardTitle>
                </CardHeader>
                <CardContent class="flex flex-col gap-5">
                    <div
                        v-if="Object.keys(typeStats).length === 0"
                        class="flex flex-col items-center gap-2 py-6 text-center text-sm text-muted-foreground"
                    >
                        <BookOpen class="size-8 opacity-30" />
                        Complete some quizzes to see your accuracy breakdown.
                    </div>

                    <div v-else class="flex justify-center">
                        <DonutChart
                            :segments="typeChartSegments"
                            center-label="Questions"
                            :center-sublabel="`${Object.values(typeStats).reduce((s, t) => s + t.total, 0)} total`"
                            :size="160"
                        />
                    </div>

                    <div
                        v-for="(stat, type) in typeStats"
                        :key="type"
                        class="space-y-1.5"
                    >
                        <div class="flex items-center justify-between text-sm">
                            <span class="font-medium">{{ typeLabel(String(type)) }}</span>
                            <span class="flex items-center gap-2 text-xs text-muted-foreground">
                                <span>{{ stat.correct }}/{{ stat.total }} correct</span>
                                <span
                                    class="rounded-full border px-2 py-0.5 text-xs font-semibold"
                                    :class="scoreBadgeClass(stat.pct)"
                                >
                                    {{ stat.pct }}%
                                </span>
                            </span>
                        </div>
                        <div class="h-2.5 overflow-hidden rounded-full bg-muted">
                            <div
                                class="h-full rounded-full transition-all duration-500"
                                :class="barClass(stat.pct)"
                                :style="{ width: `${stat.pct}%` }"
                            />
                        </div>
                    </div>
                </CardContent>
            </Card>

            <!-- Suggestions -->
            <div class="flex flex-col gap-3">
                <h2 class="text-sm font-semibold text-muted-foreground uppercase tracking-wide px-0.5">Insights & suggestions</h2>
                <div
                    v-for="(suggestion, i) in suggestions"
                    :key="i"
                    class="flex items-start gap-3 rounded-xl border p-4"
                    :class="suggestionStyle(suggestion.type).card"
                >
                    <div
                        class="flex size-8 shrink-0 items-center justify-center rounded-lg"
                        :class="suggestionStyle(suggestion.type).icon"
                    >
                        <component :is="suggestionIcon(suggestion.icon)" class="size-4" />
                    </div>
                    <div class="min-w-0">
                        <p class="text-sm font-semibold" :class="suggestionStyle(suggestion.type).title">
                            {{ suggestion.title }}
                        </p>
                        <p class="mt-0.5 text-xs leading-relaxed text-muted-foreground">
                            {{ suggestion.message }}
                        </p>
                    </div>
                </div>
            </div>
        </div>

        <!-- Progress by subject -->
        <Card v-if="categoryStats.length > 0">
            <CardHeader>
                <CardTitle class="text-base">Progress by subject</CardTitle>
            </CardHeader>
            <CardContent class="flex flex-col gap-3">
                <div
                    v-for="stat in categoryStats"
                    :key="stat.category?.id ?? 0"
                    class="flex items-center gap-4 rounded-lg border bg-muted/20 px-4 py-3"
                >
                    <div class="flex size-9 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                        <FolderOpen class="size-4" />
                    </div>
                    <div class="min-w-0 flex-1">
                        <p class="truncate text-sm font-medium">{{ stat.category?.name ?? 'Uncategorised' }}</p>
                        <p class="text-xs text-muted-foreground">
                            {{ stat.quiz_count }} quiz{{ stat.quiz_count === 1 ? '' : 'zes' }} · {{ stat.attempt_count }} attempt{{ stat.attempt_count === 1 ? '' : 's' }}
                        </p>
                    </div>
                    <div class="shrink-0 text-right">
                        <div class="flex items-center gap-3">
                            <div class="hidden flex-col items-end sm:flex">
                                <span class="text-xs text-muted-foreground">Avg</span>
                                <span class="text-sm font-semibold" :class="stat.avg_pct >= 75 ? 'text-emerald-600' : stat.avg_pct >= 50 ? 'text-amber-600' : 'text-rose-600'">
                                    {{ stat.avg_pct }}%
                                </span>
                            </div>
                            <div class="flex flex-col items-end">
                                <span class="text-xs text-muted-foreground">Best</span>
                                <span class="text-sm font-semibold text-emerald-600">{{ stat.best_pct }}%</span>
                            </div>
                        </div>
                    </div>
                    <div class="hidden w-24 sm:block">
                        <div class="h-2 overflow-hidden rounded-full bg-muted">
                            <div
                                class="h-full rounded-full transition-all"
                                :class="barClass(stat.avg_pct)"
                                :style="{ width: `${stat.avg_pct}%` }"
                            />
                        </div>
                    </div>
                </div>
            </CardContent>
        </Card>

        <!-- Quiz history -->
        <Card>
            <CardHeader>
                <CardTitle class="text-base">Quiz history</CardTitle>
            </CardHeader>
            <CardContent class="px-0 pb-0">
                <div
                    v-if="quizHistory.length === 0"
                    class="flex flex-col items-center gap-2 px-6 py-10 text-center text-sm text-muted-foreground"
                >
                    <BookOpen class="size-8 opacity-30" />
                    No completed quiz attempts yet.
                </div>

                <div v-else class="divide-y">
                    <div
                        v-for="item in quizHistory"
                        :key="item.quiz.id"
                        class="overflow-hidden"
                    >
                        <!-- Quiz row -->
                        <button
                            type="button"
                            class="flex w-full items-center gap-4 px-6 py-4 text-left transition-colors hover:bg-muted/40"
                            @click="toggleQuiz(item.quiz.id)"
                        >
                            <!-- Trend icon -->
                            <div class="shrink-0">
                                <TrendingUp v-if="item.trend === 'improving'" class="size-4 text-emerald-500" />
                                <TrendingDown v-else-if="item.trend === 'declining'" class="size-4 text-rose-500" />
                                <Minus v-else class="size-4 text-muted-foreground" />
                            </div>

                            <!-- Title + meta -->
                            <div class="min-w-0 flex-1">
                                <p class="truncate text-sm font-medium">{{ item.quiz.title }}</p>
                                <p class="mt-0.5 text-xs text-muted-foreground">
                                    {{ item.attempts_count }} attempt{{ item.attempts_count === 1 ? '' : 's' }}
                                </p>
                            </div>

                            <!-- Score pills -->
                            <div class="hidden shrink-0 items-center gap-2 sm:flex">
                                <span class="text-xs text-muted-foreground">Avg</span>
                                <span class="rounded-full border px-2 py-0.5 text-xs font-semibold" :class="scoreBadgeClass(item.avg_pct)">
                                    {{ item.avg_pct }}%
                                </span>
                                <span class="text-xs text-muted-foreground">Best</span>
                                <span class="rounded-full border px-2 py-0.5 text-xs font-semibold" :class="scoreBadgeClass(item.best_pct)">
                                    {{ item.best_pct }}%
                                </span>
                            </div>

                            <ChevronUp v-if="expandedQuiz === item.quiz.id" class="size-4 shrink-0 text-muted-foreground" />
                            <ChevronDown v-else class="size-4 shrink-0 text-muted-foreground" />
                        </button>

                        <!-- Expanded attempt list -->
                        <div v-if="expandedQuiz === item.quiz.id" class="border-t bg-muted/20 px-6 py-4">
                            <div class="mb-3 grid grid-cols-4 gap-2 text-xs font-medium uppercase tracking-wide text-muted-foreground">
                                <span>Attempt</span>
                                <span class="text-right">Score</span>
                                <span class="text-right">Date</span>
                                <span class="text-right">Results</span>
                            </div>
                            <div class="flex flex-col gap-2">
                                <div
                                    v-for="attempt in item.history"
                                    :key="attempt.id"
                                    class="grid grid-cols-4 items-center gap-2 text-sm"
                                >
                                    <span class="text-muted-foreground"># {{ attempt.number }}</span>

                                    <div class="flex items-center justify-end gap-2">
                                        <div class="h-1.5 w-16 overflow-hidden rounded-full bg-muted">
                                            <div
                                                class="h-full rounded-full"
                                                :class="barClass(attempt.pct)"
                                                :style="{ width: `${attempt.pct}%` }"
                                            />
                                        </div>
                                        <span class="w-9 text-right text-xs font-semibold" :class="attempt.pct >= 75 ? 'text-emerald-600' : attempt.pct >= 50 ? 'text-amber-600' : 'text-rose-600'">
                                            {{ attempt.pct }}%
                                        </span>
                                    </div>

                                    <span class="text-right text-xs text-muted-foreground">
                                        {{ toDateShort(attempt.submitted_at) }}
                                    </span>

                                    <div class="flex justify-end">
                                        <Button variant="ghost" size="sm" class="h-6 gap-1 px-2 text-xs" as-child>
                                            <Link :href="attemptResults({ attempt: attempt.id })">
                                                <ExternalLink class="size-3" />
                                                View
                                            </Link>
                                        </Button>
                                    </div>
                                </div>
                            </div>

                            <!-- Mini score trend bar -->
                            <div v-if="item.history.length > 1" class="mt-4">
                                <p class="mb-2 text-xs text-muted-foreground">Score trend</p>
                                <div class="flex items-end gap-1" style="height: 40px">
                                    <div
                                        v-for="attempt in item.history"
                                        :key="attempt.id"
                                        class="flex-1 rounded-t-sm transition-all"
                                        :class="barClass(attempt.pct)"
                                        :style="{ height: `${Math.max(attempt.pct, 4)}%` }"
                                        :title="`#${attempt.number}: ${attempt.pct}%`"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </CardContent>
        </Card>
    </div>
</template>
