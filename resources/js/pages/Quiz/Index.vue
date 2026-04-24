<script setup lang="ts">
import { Head, Link, router } from '@inertiajs/vue3';
import { ClipboardList, Copy, EllipsisVertical, Play, Plus, PowerOff, PowerIcon, Trash2 } from 'lucide-vue-next';
import { ref } from 'vue';
import ConfirmDialog from '@/components/ConfirmDialog.vue';
import Heading from '@/components/Heading.vue';
import QuizStartDialog from '@/components/QuizStartDialog.vue';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { join as attemptsJoin, start as attemptsStart } from '@/actions/App/Http/Controllers/QuizAttemptController';
import { useToast } from '@/composables/useToast';
import {
    attempts as quizzesAttempts,
    create as quizzesCreate,
    destroy as quizzesDestroy,
    edit as quizzesEdit,
    index as quizzesIndex,
    show as quizzesShow,
    toggleStatus as quizzesToggleStatus,
} from '@/routes/quizzes';

type QuizItem = {
    id: number;
    title: string;
    description: string | null;
    quiz_code: string;
    status: 'active' | 'inactive';
    source: string;
    max_attempts: number | null;
    questions_count: number;
    attempts_count: number;
    created_at: string;
    creator?: { id: number; name: string } | null;
};

type JoinedQuizItem = {
    id: number;
    title: string;
    description: string | null;
    quiz_code: string;
    status: 'active' | 'inactive';
    max_attempts: number | null;
    questions_count: number;
    my_attempts_count: number;
    created_at: string;
    creator?: { id: number; name: string } | null;
};

const props = defineProps<{ quizzes: QuizItem[]; joinedQuizzes: JoinedQuizItem[] }>();

defineOptions({
    layout: {
        breadcrumbs: [{ title: 'Quizzes', href: quizzesIndex() }],
    },
});

const toast = useToast();
const copiedId = ref<number | null>(null);

// Start quiz dialog — accepts both owned and joined quizzes
const startDialogOpen = ref(false);
const startingQuiz = ref<QuizItem | JoinedQuizItem | null>(null);
const startingInProgress = ref(false);

// Delete dialog
const deleteDialogOpen = ref(false);
const deletingQuiz = ref<QuizItem | null>(null);
const deleteInProgress = ref(false);

// Toggle status dialog
const toggleDialogOpen = ref(false);
const togglingQuiz = ref<QuizItem | null>(null);
const toggleInProgress = ref(false);

const toDateLabel = (value: string): string => new Date(value).toLocaleDateString();

const copyCode = async (quiz: QuizItem): Promise<void> => {
    try {
        await navigator.clipboard.writeText(quiz.quiz_code);
        copiedId.value = quiz.id;
        setTimeout(() => {
            if (copiedId.value === quiz.id) {
                copiedId.value = null;
            }
        }, 1500);
    } catch {
        /* noop */
    }
};

const openToggleDialog = (quiz: QuizItem): void => {
    togglingQuiz.value = quiz;
    toggleDialogOpen.value = true;
};

const confirmToggle = (): void => {
    if (!togglingQuiz.value) return;
    const quiz = togglingQuiz.value;
    const nextStatus = quiz.status === 'active' ? 'inactive' : 'active';
    toggleInProgress.value = true;
    router.patch(
        quizzesToggleStatus.url(quiz.id),
        {},
        {
            preserveScroll: true,
            onSuccess: () => {
                toast.success(`"${quiz.title}" is now ${nextStatus}.`);
                toggleDialogOpen.value = false;
            },
            onError: () => toast.error('Failed to update quiz status.'),
            onFinish: () => {
                toggleInProgress.value = false;
                togglingQuiz.value = null;
            },
        },
    );
};

const openStartDialog = (quiz: QuizItem): void => {
    startingQuiz.value = quiz;
    startDialogOpen.value = true;
};

const confirmStart = (): void => {
    if (!startingQuiz.value) return;
    startingInProgress.value = true;
    router.post(
        attemptsStart.url({ quiz: startingQuiz.value.id }),
        {},
        { onFinish: () => { startingInProgress.value = false; } },
    );
};

const openDeleteDialog = (quiz: QuizItem): void => {
    deletingQuiz.value = quiz;
    deleteDialogOpen.value = true;
};

const confirmDelete = (): void => {
    if (!deletingQuiz.value) return;
    const quiz = deletingQuiz.value;
    deleteInProgress.value = true;
    router.delete(quizzesDestroy.url(quiz.id), {
        preserveScroll: true,
        onSuccess: () => {
            toast.success(`"${quiz.title}" deleted.`);
            deleteDialogOpen.value = false;
        },
        onError: () => toast.error('Failed to delete quiz.'),
        onFinish: () => {
            deleteInProgress.value = false;
            deletingQuiz.value = null;
        },
    });
};
</script>

<template>
    <Head title="Quizzes" />

    <div class="flex flex-col gap-6 p-6">
        <div class="flex flex-wrap items-start justify-between gap-4">
            <Heading title="Quiz library" description="Browse, review, and manage all your quizzes." />
            <div class="flex gap-2">
                <Button variant="outline" as-child>
                    <Link :href="attemptsJoin().url">Join by code</Link>
                </Button>
                <Button as-child>
                    <Link :href="quizzesCreate()">
                        <Plus class="size-4" />
                        Create quiz
                    </Link>
                </Button>
            </div>
        </div>

        <div
            v-if="props.quizzes.length === 0"
            class="rounded-2xl border border-dashed p-10 text-center"
        >
            <h3 class="text-base font-semibold">No quizzes yet</h3>
            <p class="mt-1 text-sm text-muted-foreground">
                Create your first quiz and share the auto-generated code with your learners.
            </p>
            <div class="mt-4">
                <Button as-child>
                    <Link :href="quizzesCreate()">Create your first quiz</Link>
                </Button>
            </div>
        </div>

        <div v-else class="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
            <Card v-for="quiz in props.quizzes" :key="quiz.id" class="flex h-full flex-col">
                <CardHeader>
                    <div class="flex items-start justify-between gap-2">
                        <div class="flex flex-wrap items-center gap-2">
                            <Badge :variant="quiz.status === 'active' ? 'success' : 'secondary'">
                                {{ quiz.status }}
                            </Badge>
                            <Badge variant="honey">{{ quiz.source }}</Badge>
                            <Badge variant="outline">{{ quiz.questions_count }} Q</Badge>
                            <Badge variant="outline" class="gap-1">
                                <ClipboardList class="size-3" />
                                {{ quiz.attempts_count }}
                            </Badge>
                        </div>

                        <DropdownMenu>
                            <DropdownMenuTrigger as-child>
                                <Button variant="ghost" size="icon" class="size-7 shrink-0 text-muted-foreground">
                                    <EllipsisVertical class="size-4" />
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end" class="w-48">
                                <DropdownMenuItem as-child>
                                    <Link :href="quizzesAttempts(quiz.id).url">
                                        <ClipboardList class="size-4" />
                                        View attempts
                                        <span v-if="quiz.attempts_count > 0" class="ml-auto text-xs text-muted-foreground">
                                            {{ quiz.attempts_count }}
                                        </span>
                                    </Link>
                                </DropdownMenuItem>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem @click="openToggleDialog(quiz)">
                                    <PowerIcon v-if="quiz.status === 'inactive'" class="size-4" />
                                    <PowerOff v-else class="size-4" />
                                    {{ quiz.status === 'active' ? 'Deactivate' : 'Activate' }}
                                </DropdownMenuItem>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem
                                    class="text-destructive focus:text-destructive"
                                    @click="openDeleteDialog(quiz)"
                                >
                                    <Trash2 class="size-4" />
                                    Delete
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>
                    <CardTitle class="mt-2 text-lg">
                        <Link :href="quizzesShow(quiz.id)" class="hover:underline">
                            {{ quiz.title }}
                        </Link>
                    </CardTitle>
                </CardHeader>

                <CardContent class="flex-1 space-y-3">
                    <p class="line-clamp-2 text-sm text-muted-foreground">
                        {{ quiz.description || 'No description provided.' }}
                    </p>

                    <button
                        type="button"
                        class="group flex w-full items-center justify-between rounded-md border bg-muted/30 px-3 py-2 text-left transition hover:bg-muted"
                        @click="copyCode(quiz)"
                    >
                        <span class="font-mono text-sm font-semibold tracking-[0.25em]">{{ quiz.quiz_code }}</span>
                        <span class="flex items-center gap-1 text-xs text-muted-foreground group-hover:text-foreground">
                            <Copy class="size-3" />
                            {{ copiedId === quiz.id ? 'Copied' : 'Copy' }}
                        </span>
                    </button>

                    <div class="grid gap-0.5 text-xs text-muted-foreground">
                        <p>Created {{ toDateLabel(quiz.created_at) }} · {{ quiz.creator?.name ?? 'Unknown' }}</p>
                    </div>
                </CardContent>

                <CardFooter class="flex-wrap gap-2">
                    <Button
                        v-if="quiz.status === 'active' && quiz.questions_count > 0"
                        size="sm"
                        @click="openStartDialog(quiz)"
                    >
                        <Play class="size-4" />
                        Take
                    </Button>
                    <Button size="sm" variant="secondary" as-child>
                        <Link :href="quizzesEdit(quiz.id)">Edit</Link>
                    </Button>
                </CardFooter>
            </Card>
        </div>

        <!-- Joined quizzes section -->
        <template v-if="props.joinedQuizzes.length > 0">
            <div class="flex items-center gap-3 pt-2">
                <h2 class="text-base font-semibold">Joined quizzes</h2>
                <div class="h-px flex-1 bg-border" />
                <span class="text-xs text-muted-foreground">Quizzes you've participated in</span>
            </div>

            <div class="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
                <Card v-for="quiz in props.joinedQuizzes" :key="quiz.id" class="flex h-full flex-col">
                    <CardHeader>
                        <div class="flex items-start justify-between gap-2">
                            <div class="flex flex-wrap items-center gap-2">
                                <Badge :variant="quiz.status === 'active' ? 'success' : 'secondary'">
                                    {{ quiz.status }}
                                </Badge>
                                <Badge variant="outline">{{ quiz.questions_count }} Q</Badge>
                                <Badge variant="outline" class="gap-1">
                                    <ClipboardList class="size-3" />
                                    {{ quiz.my_attempts_count }}{{ quiz.max_attempts ? ` / ${quiz.max_attempts}` : '' }}
                                </Badge>
                            </div>
                        </div>
                        <CardTitle class="mt-2 text-lg">{{ quiz.title }}</CardTitle>
                    </CardHeader>

                    <CardContent class="flex-1 space-y-3">
                        <p class="line-clamp-2 text-sm text-muted-foreground">
                            {{ quiz.description || 'No description provided.' }}
                        </p>
                        <div class="flex items-center justify-between rounded-md border bg-muted/30 px-3 py-2">
                            <span class="font-mono text-sm font-semibold tracking-[0.25em]">{{ quiz.quiz_code }}</span>
                            <span class="text-xs text-muted-foreground">
                                by {{ quiz.creator?.name ?? 'Unknown' }}
                            </span>
                        </div>
                        <div v-if="quiz.max_attempts" class="flex items-center gap-2">
                            <div class="h-1.5 flex-1 overflow-hidden rounded-full bg-muted">
                                <div
                                    class="h-full rounded-full bg-primary transition-all"
                                    :style="{ width: `${Math.min(100, (quiz.my_attempts_count / quiz.max_attempts) * 100)}%` }"
                                />
                            </div>
                            <span class="shrink-0 text-xs text-muted-foreground">
                                {{ quiz.my_attempts_count }}/{{ quiz.max_attempts }} used
                            </span>
                        </div>
                    </CardContent>

                    <CardFooter class="flex-wrap gap-2">
                        <Button
                            v-if="quiz.status === 'active' && quiz.questions_count > 0 && (!quiz.max_attempts || quiz.my_attempts_count < quiz.max_attempts)"
                            size="sm"
                            @click="openStartDialog(quiz)"
                        >
                            <Play class="size-4" />
                            Take again
                        </Button>
                        <Button size="sm" variant="outline" as-child>
                            <Link :href="quizzesAttempts(quiz.id).url">
                                <ClipboardList class="size-3.5" />
                                My attempts
                            </Link>
                        </Button>
                    </CardFooter>
                </Card>
            </div>
        </template>
    </div>

    <QuizStartDialog
        v-model:open="startDialogOpen"
        :quiz="startingQuiz ?? undefined"
        :processing="startingInProgress"
        @confirm="confirmStart"
    />

    <ConfirmDialog
        v-model:open="toggleDialogOpen"
        :title="togglingQuiz?.status === 'active' ? 'Deactivate quiz?' : 'Activate quiz?'"
        :description="togglingQuiz?.status === 'active'
            ? `'${togglingQuiz?.title}' will no longer be joinable by code.`
            : `'${togglingQuiz?.title}' will become joinable by code.`"
        :confirm-label="togglingQuiz?.status === 'active' ? 'Deactivate' : 'Activate'"
        :processing="toggleInProgress"
        @confirm="confirmToggle"
    />

    <ConfirmDialog
        v-model:open="deleteDialogOpen"
        title="Delete quiz?"
        :description="`'${deletingQuiz?.title}' and all its questions and attempts will be permanently deleted. This cannot be undone.`"
        confirm-label="Delete"
        variant="destructive"
        :processing="deleteInProgress"
        @confirm="confirmDelete"
    />
</template>
