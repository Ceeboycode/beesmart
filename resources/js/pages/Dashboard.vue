<script setup lang="ts">
import { Head, Link, usePage } from '@inertiajs/vue3';
import {
    BookOpen,
    ChevronRight,
    ClipboardList,
    LogIn,
    Plus,
    Zap,
} from 'lucide-vue-next';
import Heading from '@/components/Heading.vue';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { join as attemptsJoin } from '@/routes/attempts';
import { dashboard } from '@/routes';
import {
    create as quizzesCreate,
    edit as quizzesEdit,
    index as quizzesIndex,
    show as quizzesShow,
} from '@/routes/quizzes';

type RecentQuiz = {
    id: number;
    title: string;
    status: 'active' | 'inactive';
    source: string;
    quiz_code: string;
    created_at: string;
    attempts_count: number;
    questions_count: number;
};

type RecentAttempt = {
    id: number;
    quiz_id: number;
    total_score: number;
    status: 'in_progress' | 'submitted' | 'graded';
    submitted_at: string | null;
    attempt_number: number;
    created_at: string;
    quiz: { id: number; title: string; quiz_code: string } | null;
};

const props = defineProps<{
    stats: {
        total_quizzes: number;
        active_quizzes: number;
        total_attempts: number;
        my_attempts: number;
    };
    recentQuizzes: RecentQuiz[];
    recentAttempts: RecentAttempt[];
}>();

defineOptions({
    layout: {
        breadcrumbs: [{ title: 'Dashboard', href: dashboard() }],
    },
});

const page = usePage<{ auth: { user: { name: string } } }>();
const userName = page.props.auth.user.name;

const toDateLabel = (value: string | null): string =>
    value
        ? new Date(value).toLocaleDateString(undefined, { month: 'short', day: 'numeric', year: 'numeric' })
        : '—';

const attemptStatusLabel = (status: RecentAttempt['status']): string => {
    if (status === 'in_progress') return 'In progress';
    if (status === 'graded') return 'Graded';
    return 'Submitted';
};
</script>

<template>
    <Head title="Dashboard" />

    <div class="flex flex-col gap-6 p-6">
        <!-- Header -->
        <div class="flex flex-wrap items-start justify-between gap-4">
            <Heading
                :title="`Welcome back, ${userName.split(' ')[0]}!`"
                description="Here's an overview of your quizzes and activity."
            />
            <div class="flex gap-2">
                <Button variant="outline" as-child>
                    <Link :href="attemptsJoin().url">
                        <LogIn class="size-4" />
                        Join by code
                    </Link>
                </Button>
                <Button as-child>
                    <Link :href="quizzesCreate()">
                        <Plus class="size-4" />
                        Create quiz
                    </Link>
                </Button>
            </div>
        </div>

        <!-- Stats -->
        <div class="grid grid-cols-2 gap-4 lg:grid-cols-4">
            <Card>
                <CardContent class="pt-6">
                    <div class="flex items-start justify-between gap-2">
                        <div>
                            <p class="text-sm text-muted-foreground">Total quizzes</p>
                            <p class="mt-1 text-3xl font-bold">{{ props.stats.total_quizzes }}</p>
                        </div>
                        <div class="flex size-10 items-center justify-center rounded-lg bg-primary/10">
                            <BookOpen class="size-5 text-primary" />
                        </div>
                    </div>
                    <p class="mt-3 text-xs text-muted-foreground">
                        {{ props.stats.active_quizzes }} active
                    </p>
                </CardContent>
            </Card>

            <Card>
                <CardContent class="pt-6">
                    <div class="flex items-start justify-between gap-2">
                        <div>
                            <p class="text-sm text-muted-foreground">Active quizzes</p>
                            <p class="mt-1 text-3xl font-bold">{{ props.stats.active_quizzes }}</p>
                        </div>
                        <div class="flex size-10 items-center justify-center rounded-lg bg-emerald-100 dark:bg-emerald-900/30">
                            <Zap class="size-5 text-emerald-600 dark:text-emerald-400" />
                        </div>
                    </div>
                    <p class="mt-3 text-xs text-muted-foreground">Joinable by share code</p>
                </CardContent>
            </Card>

            <Card>
                <CardContent class="pt-6">
                    <div class="flex items-start justify-between gap-2">
                        <div>
                            <p class="text-sm text-muted-foreground">Attempts received</p>
                            <p class="mt-1 text-3xl font-bold">{{ props.stats.total_attempts }}</p>
                        </div>
                        <div class="flex size-10 items-center justify-center rounded-lg bg-amber-100 dark:bg-amber-900/30">
                            <ClipboardList class="size-5 text-amber-600 dark:text-amber-400" />
                        </div>
                    </div>
                    <p class="mt-3 text-xs text-muted-foreground">On your quizzes</p>
                </CardContent>
            </Card>

            <Card>
                <CardContent class="pt-6">
                    <div class="flex items-start justify-between gap-2">
                        <div>
                            <p class="text-sm text-muted-foreground">My attempts</p>
                            <p class="mt-1 text-3xl font-bold">{{ props.stats.my_attempts }}</p>
                        </div>
                        <div class="flex size-10 items-center justify-center rounded-lg bg-blue-100 dark:bg-blue-900/30">
                            <BookOpen class="size-5 text-blue-600 dark:text-blue-400" />
                        </div>
                    </div>
                    <p class="mt-3 text-xs text-muted-foreground">Quizzes you've taken</p>
                </CardContent>
            </Card>
        </div>

        <!-- Two-column section -->
        <div class="grid gap-6 lg:grid-cols-2">
            <!-- Recent quizzes I created -->
            <Card class="flex flex-col">
                <CardHeader class="flex flex-row items-center justify-between gap-2 pb-3">
                    <CardTitle class="text-base">My recent quizzes</CardTitle>
                    <Button variant="ghost" size="sm" class="gap-1 text-xs" as-child>
                        <Link :href="quizzesIndex()">
                            View all
                            <ChevronRight class="size-3.5" />
                        </Link>
                    </Button>
                </CardHeader>

                <CardContent class="flex-1 px-0">
                    <div
                        v-if="props.recentQuizzes.length === 0"
                        class="flex flex-col items-center justify-center gap-3 px-6 py-10 text-center"
                    >
                        <div class="flex size-12 items-center justify-center rounded-full bg-muted">
                            <BookOpen class="size-5 text-muted-foreground" />
                        </div>
                        <div>
                            <p class="text-sm font-medium">No quizzes yet</p>
                            <p class="mt-0.5 text-xs text-muted-foreground">Create your first quiz to get started.</p>
                        </div>
                        <Button size="sm" as-child>
                            <Link :href="quizzesCreate()">
                                <Plus class="size-4" />
                                Create quiz
                            </Link>
                        </Button>
                    </div>

                    <ul v-else class="divide-y">
                        <li
                            v-for="quiz in props.recentQuizzes"
                            :key="quiz.id"
                            class="flex items-center gap-3 px-6 py-3 transition-colors hover:bg-muted/40"
                        >
                            <div class="min-w-0 flex-1">
                                <Link
                                    :href="quizzesShow(quiz.id)"
                                    class="block truncate text-sm font-medium hover:underline"
                                >
                                    {{ quiz.title }}
                                </Link>
                                <div class="mt-1 flex flex-wrap items-center gap-1.5">
                                    <Badge
                                        :variant="quiz.status === 'active' ? 'success' : 'secondary'"
                                        class="text-xs"
                                    >
                                        {{ quiz.status }}
                                    </Badge>
                                    <Badge variant="outline" class="text-xs">
                                        {{ quiz.questions_count }} Q
                                    </Badge>
                                    <span class="text-xs text-muted-foreground">
                                        {{ quiz.attempts_count }}
                                        attempt{{ quiz.attempts_count === 1 ? '' : 's' }}
                                    </span>
                                </div>
                            </div>
                            <Button variant="ghost" size="sm" class="shrink-0 text-xs" as-child>
                                <Link :href="quizzesEdit(quiz.id)">Edit</Link>
                            </Button>
                        </li>
                    </ul>
                </CardContent>

                <CardFooter v-if="props.recentQuizzes.length > 0" class="border-t pt-3">
                    <Button variant="outline" size="sm" class="w-full" as-child>
                        <Link :href="quizzesCreate()">
                            <Plus class="size-4" />
                            Create new quiz
                        </Link>
                    </Button>
                </CardFooter>
            </Card>

            <!-- My recent attempts -->
            <Card class="flex flex-col">
                <CardHeader class="flex flex-row items-center justify-between gap-2 pb-3">
                    <CardTitle class="text-base">My recent attempts</CardTitle>
                    <Button variant="ghost" size="sm" class="gap-1 text-xs" as-child>
                        <Link :href="quizzesIndex()">
                            View all
                            <ChevronRight class="size-3.5" />
                        </Link>
                    </Button>
                </CardHeader>

                <CardContent class="flex-1 px-0">
                    <div
                        v-if="props.recentAttempts.length === 0"
                        class="flex flex-col items-center justify-center gap-3 px-6 py-10 text-center"
                    >
                        <div class="flex size-12 items-center justify-center rounded-full bg-muted">
                            <ClipboardList class="size-5 text-muted-foreground" />
                        </div>
                        <div>
                            <p class="text-sm font-medium">No attempts yet</p>
                            <p class="mt-0.5 text-xs text-muted-foreground">
                                Join a quiz with a share code to get started.
                            </p>
                        </div>
                        <Button size="sm" variant="outline" as-child>
                            <Link :href="attemptsJoin().url">
                                <LogIn class="size-4" />
                                Join by code
                            </Link>
                        </Button>
                    </div>

                    <ul v-else class="divide-y">
                        <li
                            v-for="attempt in props.recentAttempts"
                            :key="attempt.id"
                            class="flex items-center gap-3 px-6 py-3 transition-colors hover:bg-muted/40"
                        >
                            <div class="min-w-0 flex-1">
                                <p class="truncate text-sm font-medium">
                                    {{ attempt.quiz?.title ?? 'Unknown quiz' }}
                                </p>
                                <div class="mt-1 flex flex-wrap items-center gap-1.5">
                                    <Badge
                                        :variant="
                                            attempt.status === 'graded'
                                                ? 'success'
                                                : attempt.status === 'in_progress'
                                                  ? 'secondary'
                                                  : 'outline'
                                        "
                                        class="text-xs"
                                    >
                                        {{ attemptStatusLabel(attempt.status) }}
                                    </Badge>
                                    <span class="text-xs text-muted-foreground">
                                        {{ toDateLabel(attempt.submitted_at ?? attempt.created_at) }}
                                    </span>
                                </div>
                            </div>
                            <div class="shrink-0 text-right">
                                <p class="text-sm font-semibold">
                                    {{ attempt.total_score }} pt{{ attempt.total_score === 1 ? '' : 's' }}
                                </p>
                                <p class="text-xs text-muted-foreground">#{{ attempt.attempt_number }}</p>
                            </div>
                        </li>
                    </ul>
                </CardContent>

                <CardFooter v-if="props.recentAttempts.length > 0" class="border-t pt-3">
                    <Button variant="outline" size="sm" class="w-full" as-child>
                        <Link :href="attemptsJoin().url">
                            <LogIn class="size-4" />
                            Join a quiz
                        </Link>
                    </Button>
                </CardFooter>
            </Card>
        </div>
    </div>
</template>
