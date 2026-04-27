<script setup lang="ts">
import { Head, Link, router } from '@inertiajs/vue3';
import { Check, ClipboardList, Copy, EllipsisVertical, Folder, FolderOpen, FolderPlus, GripVertical, LayoutGrid, Play, Plus, PowerOff, PowerIcon, Settings2, Trash2 } from 'lucide-vue-next';
import { computed, ref, watch } from 'vue';
import ConfirmDialog from '@/components/ConfirmDialog.vue';
import Heading from '@/components/Heading.vue';
import ManageCategoriesDialog, { type CategoryItem } from '@/components/ManageCategoriesDialog.vue';
import QuizStartDialog from '@/components/QuizStartDialog.vue';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from '@/components/ui/dialog';
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
    assignCategory as quizzesAssignCategory,
    create as quizzesCreate,
    destroy as quizzesDestroy,
    edit as quizzesEdit,
    index as quizzesIndex,
    show as quizzesShow,
    toggleStatus as quizzesToggleStatus,
} from '@/routes/quizzes';
import { reorder as categoriesReorder } from '@/routes/categories';

type QuizItem = {
    id: number;
    title: string;
    description: string | null;
    quiz_code: string;
    status: 'active' | 'inactive';
    source: string;
    max_attempts: number | null;
    shuffle_questions: boolean;
    shuffle_choices: boolean;
    tab_monitoring_enabled: boolean;
    tab_violation_action: 'warn' | 'auto_submit';
    tab_violation_limit: number;
    questions_count: number;
    attempts_count: number;
    created_at: string;
    category_id: number | null;
    sort_order: number | null;
    category?: { id: number; name: string } | null;
    creator?: { id: number; name: string } | null;
};

type JoinedQuizItem = {
    id: number;
    title: string;
    description: string | null;
    quiz_code: string;
    status: 'active' | 'inactive';
    max_attempts: number | null;
    shuffle_questions: boolean;
    shuffle_choices: boolean;
    tab_monitoring_enabled: boolean;
    tab_violation_action: 'warn' | 'auto_submit';
    tab_violation_limit: number;
    questions_count: number;
    my_attempts_count: number;
    created_at: string;
    category_id: number | null;
    category?: { id: number; name: string } | null;
    creator?: { id: number; name: string } | null;
};

const props = defineProps<{
    quizzes: QuizItem[];
    joinedQuizzes: JoinedQuizItem[];
    categories: CategoryItem[];
}>();

defineOptions({
    layout: {
        breadcrumbs: [{ title: 'Quizzes', href: quizzesIndex() }],
    },
});

const toast = useToast();
const copiedId = ref<number | null>(null);

// Category filter: null=all, 0=uncategorized, positive=category id
const activeFilter = ref<number | null>(null);

const localOrder = ref<QuizItem[]>([...props.quizzes]);
watch(
    () => props.quizzes,
    (quizzes) => { localOrder.value = [...quizzes]; },
);

const filteredQuizzes = computed(() => {
    if (activeFilter.value === null) return localOrder.value;
    if (activeFilter.value === 0) return localOrder.value.filter((q) => !q.category_id);
    return localOrder.value.filter((q) => q.category_id === activeFilter.value);
});

const filteredJoinedQuizzes = computed(() => {
    if (activeFilter.value === null) return props.joinedQuizzes;
    if (activeFilter.value === 0) return props.joinedQuizzes.filter((q) => !q.category_id);
    return props.joinedQuizzes.filter((q) => q.category_id === activeFilter.value);
});

const uncategorizedCount = computed(
    () => localOrder.value.filter((q) => !q.category_id).length + props.joinedQuizzes.filter((q) => !q.category_id).length,
);

const activeFolderLabel = computed(() => {
    if (activeFilter.value === null) return null;
    if (activeFilter.value === 0) return 'Uncategorized';
    return props.categories.find((c) => c.id === activeFilter.value)?.name ?? null;
});

const activeFolderIcon = computed(() => {
    if (activeFilter.value === null || activeFilter.value === 0) return null;
    return props.categories.find((c) => c.id === activeFilter.value)?.icon ?? null;
});

const hasAnyQuizzes = computed(() => props.quizzes.length > 0 || props.joinedQuizzes.length > 0);

const manageCategoriesOpen = ref(false);

const startDialogOpen = ref(false);
const startingQuiz = ref<QuizItem | JoinedQuizItem | null>(null);
const startingInProgress = ref(false);

const deleteDialogOpen = ref(false);
const deletingQuiz = ref<QuizItem | null>(null);
const deleteInProgress = ref(false);

const toggleDialogOpen = ref(false);
const togglingQuiz = ref<QuizItem | null>(null);
const toggleInProgress = ref(false);

// ── move-to-folder (mobile-friendly category assignment) ───────────────────────
const moveDialogOpen = ref(false);
const movingQuiz = ref<QuizItem | null>(null);

const openMoveDialog = (quiz: QuizItem): void => {
    movingQuiz.value = quiz;
    moveDialogOpen.value = true;
};

const moveToCategory = (categoryId: number | null): void => {
    if (!movingQuiz.value) return;
    const quiz = movingQuiz.value;
    moveDialogOpen.value = false;
    movingQuiz.value = null;

    const cat = categoryId ? props.categories.find((c) => c.id === categoryId) ?? null : null;
    localOrder.value = localOrder.value.map((q) =>
        q.id !== quiz.id ? q : { ...q, category_id: categoryId, category: cat ? { id: cat.id, name: cat.name } : null, sort_order: null },
    );

    router.patch(
        quizzesAssignCategory.url(quiz.id),
        { category_id: categoryId },
        { preserveScroll: true },
    );
};

// ── drag-and-drop ──────────────────────────────────────────────────────────────

const draggedQuizId = ref<number | null>(null);
// null=nothing hovered, 0=uncategorized, positive=category id
const dragOverChipKey = ref<number | null>(null);
const dragOverQuizId = ref<number | null>(null);

function onDragStart(event: DragEvent, quiz: QuizItem) {
    draggedQuizId.value = quiz.id;
    event.dataTransfer!.effectAllowed = 'move';
}

function onDragEnd() {
    draggedQuizId.value = null;
    dragOverChipKey.value = null;
    dragOverQuizId.value = null;
}

function onChipDragOver(event: DragEvent, key: number) {
    if (draggedQuizId.value === null) return;
    event.preventDefault();
    dragOverChipKey.value = key;
}

function onChipDragLeave() {
    dragOverChipKey.value = null;
}

function onChipDrop(event: DragEvent, categoryId: number | null) {
    event.preventDefault();
    const quizId = draggedQuizId.value;
    draggedQuizId.value = null;
    dragOverChipKey.value = null;
    if (quizId === null) return;

    const cat = categoryId ? props.categories.find((c) => c.id === categoryId) ?? null : null;
    localOrder.value = localOrder.value.map((q) =>
        q.id !== quizId ? q : { ...q, category_id: categoryId, category: cat ? { id: cat.id, name: cat.name } : null, sort_order: null },
    );

    router.patch(
        quizzesAssignCategory.url(quizId),
        { category_id: categoryId },
        { preserveScroll: true },
    );
}

function onQuizDragOver(event: DragEvent, targetQuiz: QuizItem) {
    if (draggedQuizId.value === null || draggedQuizId.value === targetQuiz.id) return;
    const dragged = localOrder.value.find((q) => q.id === draggedQuizId.value);
    if (!dragged || dragged.category_id !== targetQuiz.category_id) return;
    event.preventDefault();
    dragOverQuizId.value = targetQuiz.id;
}

function onQuizDragLeave(targetQuiz: QuizItem) {
    if (dragOverQuizId.value === targetQuiz.id) dragOverQuizId.value = null;
}

function onQuizDrop(event: DragEvent, targetQuiz: QuizItem) {
    const draggedId = draggedQuizId.value;
    dragOverQuizId.value = null;
    if (draggedId === null) return;

    const dragged = localOrder.value.find((q) => q.id === draggedId);
    if (!dragged || dragged.category_id !== targetQuiz.category_id) return;

    event.preventDefault();
    event.stopPropagation();

    const next = [...localOrder.value];
    const fromIdx = next.findIndex((q) => q.id === draggedId);
    const toIdx = next.findIndex((q) => q.id === targetQuiz.id);
    next.splice(fromIdx, 1);
    next.splice(toIdx, 0, dragged);
    localOrder.value = next;

    const categoryId = dragged.category_id;
    if (categoryId) {
        const quizIds = next.filter((q) => q.category_id === categoryId).map((q) => q.id);
        router.post(categoriesReorder.url(categoryId), { quiz_ids: quizIds }, { preserveScroll: true });
    }
}

// ── other actions ──────────────────────────────────────────────────────────────

const toDateLabel = (value: string): string => new Date(value).toLocaleDateString();

const copyCode = async (quiz: QuizItem): Promise<void> => {
    try {
        await navigator.clipboard.writeText(quiz.quiz_code);
        copiedId.value = quiz.id;
        setTimeout(() => {
            if (copiedId.value === quiz.id) copiedId.value = null;
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

const openStartDialog = (quiz: QuizItem | JoinedQuizItem): void => {
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

    <div class="flex flex-col gap-6 p-4 sm:p-6">

        <!-- Page header -->
        <div class="flex flex-wrap items-start justify-between gap-3">
            <Heading title="Quiz library" description="Browse, review, and manage all your quizzes." />
            <div class="flex gap-2">
                <Button variant="outline" size="sm" as-child>
                    <Link :href="attemptsJoin().url">Join by code</Link>
                </Button>
                <Button size="sm" as-child>
                    <Link :href="quizzesCreate()">
                        <Plus class="size-4" />
                        <span class="hidden sm:inline">Create quiz</span>
                        <span class="sm:hidden">Create</span>
                    </Link>
                </Button>
            </div>
        </div>

        <!-- ── Folders section ─────────────────────────────────────────────── -->
        <div v-if="hasAnyQuizzes" class="space-y-3">

            <!-- Section header -->
            <div class="flex items-center justify-between">
                <div>
                    <h2 class="text-sm font-semibold">Folders</h2>
                    <p class="mt-0.5 text-xs text-muted-foreground">
                        <template v-if="props.categories.length > 0">
                            <span class="hidden sm:inline">Click a folder to filter · Drag quiz cards onto a folder to assign</span>
                            <span class="sm:hidden">Tap a folder to filter quizzes</span>
                        </template>
                        <template v-else>
                            Group your quizzes by subject — create a folder to get started
                        </template>
                    </p>
                </div>
                <Button
                    variant="ghost"
                    size="sm"
                    class="gap-1.5 text-muted-foreground hover:text-foreground"
                    @click="manageCategoriesOpen = true"
                >
                    <Settings2 class="size-3.5" />
                    <span class="hidden sm:inline">Manage</span>
                </Button>
            </div>

            <!--
                Responsive folder grid.
                auto-fill with 110px minimum → 2 cols on 375px phones,
                3+ on tablets, 5+ on desktop — no breakpoint clutter.
            -->
            <div class="grid gap-3" style="grid-template-columns: repeat(auto-fill, minmax(110px, 1fr))">

                <!-- All quizzes (filter only, not a drop zone) -->
                <button
                    type="button"
                    class="flex cursor-pointer flex-col items-center gap-2 rounded-xl border-2 px-2 py-3 text-center transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring sm:px-3 sm:py-4"
                    :class="activeFilter === null
                        ? 'border-primary bg-primary/5 shadow-sm'
                        : 'border-border bg-card hover:border-primary/50 hover:bg-muted/40'"
                    @click="activeFilter = null"
                >
                    <LayoutGrid
                        class="size-8 transition-colors sm:size-9"
                        :class="activeFilter === null ? 'text-primary' : 'text-muted-foreground'"
                    />
                    <div class="w-full">
                        <p class="truncate text-xs font-semibold sm:text-sm">All</p>
                        <p class="text-xs text-muted-foreground">{{ props.quizzes.length + props.joinedQuizzes.length }}</p>
                    </div>
                </button>

                <!-- Named category folders (each is a drop zone) -->
                <button
                    v-for="category in props.categories"
                    :key="category.id"
                    type="button"
                    class="group relative flex cursor-pointer flex-col items-center gap-2 rounded-xl border-2 px-2 py-3 text-center transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring sm:px-3 sm:py-4"
                    :class="[
                        dragOverChipKey === category.id
                            ? 'scale-[1.04] border-amber-400 bg-amber-50 shadow-xl dark:bg-amber-950/40'
                            : activeFilter === category.id
                                ? 'border-amber-400 bg-amber-50/70 shadow-sm dark:bg-amber-950/20'
                                : draggedQuizId !== null
                                    ? 'border-dashed border-amber-300 bg-card hover:border-amber-400 hover:bg-amber-50/50 dark:hover:bg-amber-950/20'
                                    : 'border-border bg-card hover:border-amber-300 hover:bg-amber-50/40 dark:bg-card dark:hover:bg-amber-950/10',
                    ]"
                    @dragover.prevent="onChipDragOver($event, category.id)"
                    @dragleave="onChipDragLeave"
                    @drop.prevent="onChipDrop($event, category.id)"
                    @click="activeFilter = category.id"
                >
                    <!-- Drop-target overlay -->
                    <div
                        v-if="dragOverChipKey === category.id"
                        class="absolute inset-0 flex flex-col items-center justify-center gap-1 rounded-[10px]"
                    >
                        <FolderOpen class="size-8 animate-bounce text-amber-500 sm:size-9" />
                        <span class="text-xs font-bold text-amber-700 dark:text-amber-300">Drop here</span>
                    </div>

                    <template v-else>
                        <!-- Emoji icon when set, otherwise lucide Folder -->
                        <span v-if="category.icon" class="text-2xl leading-none sm:text-3xl">{{ category.icon }}</span>
                        <template v-else>
                            <FolderOpen v-if="activeFilter === category.id" class="size-8 text-amber-500 sm:size-9" />
                            <Folder v-else class="size-8 text-amber-400 transition-transform group-hover:scale-110 group-hover:text-amber-500 sm:size-9" />
                        </template>
                        <div class="w-full">
                            <p class="truncate text-xs font-semibold sm:text-sm">{{ category.name }}</p>
                            <p class="text-xs text-muted-foreground">
                                {{ category.quiz_count }}
                            </p>
                        </div>
                    </template>

                    <!-- Dashed ring hint while any quiz is dragging -->
                    <div
                        v-if="draggedQuizId !== null && dragOverChipKey !== category.id"
                        class="pointer-events-none absolute inset-0 rounded-[10px] ring-2 ring-amber-300/50"
                    />
                </button>

                <!-- Uncategorized folder (drop zone to remove category) -->
                <button
                    type="button"
                    class="group relative flex cursor-pointer flex-col items-center gap-2 rounded-xl border-2 px-2 py-3 text-center transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring sm:px-3 sm:py-4"
                    :class="[
                        dragOverChipKey === 0
                            ? 'scale-[1.04] border-slate-400 bg-slate-50 shadow-xl dark:bg-slate-800/50'
                            : activeFilter === 0
                                ? 'border-slate-400 bg-slate-50/70 shadow-sm dark:bg-slate-800/20'
                                : draggedQuizId !== null
                                    ? 'border-dashed border-slate-300 bg-card hover:border-slate-400 hover:bg-slate-50/50'
                                    : 'border-border bg-card hover:border-slate-300 hover:bg-slate-50/40 dark:bg-card',
                    ]"
                    @dragover.prevent="onChipDragOver($event, 0)"
                    @dragleave="onChipDragLeave"
                    @drop.prevent="onChipDrop($event, null)"
                    @click="activeFilter = 0"
                >
                    <div
                        v-if="dragOverChipKey === 0"
                        class="absolute inset-0 flex flex-col items-center justify-center gap-1 rounded-[10px]"
                    >
                        <FolderOpen class="size-8 animate-bounce text-slate-500 sm:size-9" />
                        <span class="text-xs font-bold text-slate-600 dark:text-slate-300">Unassign</span>
                    </div>

                    <template v-else>
                        <FolderOpen v-if="activeFilter === 0" class="size-8 text-slate-500 sm:size-9" />
                        <Folder v-else class="size-8 text-slate-400 transition-transform group-hover:scale-110 group-hover:text-slate-500 sm:size-9" />
                        <div class="w-full">
                            <p class="truncate text-xs font-medium text-muted-foreground sm:text-sm">Unfiled</p>
                            <p class="text-xs text-muted-foreground">{{ uncategorizedCount }}</p>
                        </div>
                    </template>

                    <div
                        v-if="draggedQuizId !== null && dragOverChipKey !== 0"
                        class="pointer-events-none absolute inset-0 rounded-[10px] ring-2 ring-slate-300/50"
                    />
                </button>

                <!-- New folder card -->
                <button
                    type="button"
                    class="group flex cursor-pointer flex-col items-center gap-2 rounded-xl border-2 border-dashed px-2 py-3 text-center transition-all hover:border-primary/60 hover:bg-primary/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring sm:px-3 sm:py-4"
                    @click="manageCategoriesOpen = true"
                >
                    <FolderPlus class="size-8 text-muted-foreground/40 transition-all group-hover:scale-110 group-hover:text-primary sm:size-9" />
                    <p class="text-xs font-medium text-muted-foreground group-hover:text-primary sm:text-sm">New</p>
                </button>
            </div>

            <!-- Drag & drop hint (desktop only, shown while dragging) -->
            <div
                v-if="draggedQuizId !== null"
                class="hidden items-center gap-2.5 rounded-lg border border-amber-200 bg-amber-50 px-4 py-2.5 text-sm text-amber-800 dark:border-amber-800/50 dark:bg-amber-950/40 dark:text-amber-300 sm:flex"
            >
                <FolderOpen class="size-4 shrink-0" />
                <span>
                    <span class="font-semibold">Drop onto a folder</span> to assign it, or onto another quiz in the same folder to reorder.
                </span>
            </div>
        </div>

        <!-- Active folder breadcrumb -->
        <div v-if="activeFilter !== null" class="flex flex-wrap items-center gap-2 text-sm">
            <button
                type="button"
                class="text-muted-foreground underline-offset-2 hover:text-foreground hover:underline"
                @click="activeFilter = null"
            >
                All quizzes
            </button>
            <span class="text-muted-foreground">/</span>
            <span class="flex items-center gap-1.5 font-semibold">
                <span v-if="activeFolderIcon" class="text-base leading-none">{{ activeFolderIcon }}</span>
                <FolderOpen v-else class="size-4 text-amber-500" />
                {{ activeFolderLabel }}
                <Badge variant="secondary" class="ml-0.5 px-1.5 py-0 text-xs font-normal">
                    {{ filteredQuizzes.length + filteredJoinedQuizzes.length }}
                </Badge>
            </span>
        </div>

        <!-- No quizzes at all — empty state -->
        <div
            v-if="!hasAnyQuizzes"
            class="rounded-2xl border border-dashed p-10 text-center"
        >
            <h3 class="text-base font-semibold">No quizzes yet</h3>
            <p class="mt-1 text-sm text-muted-foreground">
                Create your first quiz and share the auto-generated code with your learners.
            </p>
            <div class="mt-4 flex flex-wrap justify-center gap-2">
                <Button as-child>
                    <Link :href="quizzesCreate()">
                        <Plus class="size-4" />
                        Create quiz
                    </Link>
                </Button>
                <Button variant="outline" as-child>
                    <Link :href="attemptsJoin().url">Join by code</Link>
                </Button>
            </div>
        </div>

        <!-- ── Your quizzes grid ────────────────────────────────────────────── -->
        <template v-if="props.quizzes.length > 0 && filteredQuizzes.length > 0">
            <!-- Section label only when there's something to distinguish -->
            <div
                v-if="activeFilter !== null || props.joinedQuizzes.length > 0"
                class="flex items-center gap-3"
            >
                <h2 class="text-sm font-semibold text-muted-foreground">Your quizzes</h2>
                <div class="h-px flex-1 bg-border" />
                <span class="text-xs text-muted-foreground">{{ filteredQuizzes.length }}</span>
            </div>

            <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
                <Card
                    v-for="quiz in filteredQuizzes"
                    :key="quiz.id"
                    class="flex h-full flex-col transition-shadow"
                    :class="[
                        draggedQuizId !== null ? 'cursor-grabbing' : '',
                        dragOverQuizId === quiz.id ? 'ring-2 ring-primary ring-offset-1' : '',
                    ]"
                    draggable="true"
                    @dragstart="onDragStart($event, quiz)"
                    @dragend="onDragEnd"
                    @dragover="onQuizDragOver($event, quiz)"
                    @dragleave="onQuizDragLeave(quiz)"
                    @drop="onQuizDrop($event, quiz)"
                >
                    <CardHeader class="pb-2">
                        <div class="flex items-start justify-between gap-2">
                            <div class="flex flex-wrap items-center gap-1.5">
                                <Badge :variant="quiz.status === 'active' ? 'success' : 'secondary'" class="text-xs">
                                    {{ quiz.status }}
                                </Badge>
                                <Badge variant="honey" class="text-xs">{{ quiz.source }}</Badge>
                                <Badge v-if="quiz.category" variant="outline" class="gap-1 text-xs">
                                    <span v-if="props.categories.find(c => c.id === quiz.category_id)?.icon" class="leading-none">
                                        {{ props.categories.find(c => c.id === quiz.category_id)?.icon }}
                                    </span>
                                    <Folder v-else class="size-3 text-amber-500" />
                                    {{ quiz.category.name }}
                                </Badge>
                                <Badge variant="outline" class="text-xs">{{ quiz.questions_count }} Q</Badge>
                                <Badge variant="outline" class="gap-1 text-xs">
                                    <ClipboardList class="size-3" />
                                    {{ quiz.attempts_count }}
                                </Badge>
                            </div>

                            <div class="flex shrink-0 items-center gap-1">
                                <GripVertical
                                    class="hidden size-4 cursor-grab text-muted-foreground/50 sm:block"
                                    title="Drag to reorder within the same folder"
                                />
                                <DropdownMenu>
                                    <DropdownMenuTrigger as-child>
                                        <Button variant="ghost" size="icon" class="size-7 text-muted-foreground">
                                            <EllipsisVertical class="size-4" />
                                        </Button>
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent align="end" class="w-52">
                                        <DropdownMenuItem as-child>
                                            <Link :href="quizzesAttempts(quiz.id).url">
                                                <ClipboardList class="size-4" />
                                                View attempts
                                                <span v-if="quiz.attempts_count > 0" class="ml-auto text-xs text-muted-foreground">
                                                    {{ quiz.attempts_count }}
                                                </span>
                                            </Link>
                                        </DropdownMenuItem>
                                        <DropdownMenuItem @click="openMoveDialog(quiz)">
                                            <FolderOpen class="size-4" />
                                            Move to folder
                                            <span v-if="quiz.category" class="ml-auto max-w-[80px] truncate text-xs text-muted-foreground">
                                                {{ quiz.category.name }}
                                            </span>
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
                        </div>
                        <CardTitle class="mt-2 text-base sm:text-lg">
                            <Link :href="quizzesShow(quiz.id)" class="hover:underline">
                                {{ quiz.title }}
                            </Link>
                        </CardTitle>
                    </CardHeader>

                    <CardContent class="flex-1 space-y-3 pt-0">
                        <p class="line-clamp-2 text-sm text-muted-foreground">
                            {{ quiz.description || 'No description provided.' }}
                        </p>

                        <button
                            type="button"
                            class="group flex w-full items-center justify-between rounded-md border bg-muted/30 px-3 py-2 text-left transition hover:bg-muted"
                            @click="copyCode(quiz)"
                        >
                            <span class="font-mono text-sm font-semibold tracking-[0.2em]">{{ quiz.quiz_code }}</span>
                            <span class="flex items-center gap-1 text-xs text-muted-foreground group-hover:text-foreground">
                                <Copy class="size-3" />
                                {{ copiedId === quiz.id ? 'Copied' : 'Copy' }}
                            </span>
                        </button>

                        <p class="text-xs text-muted-foreground">
                            Created {{ toDateLabel(quiz.created_at) }} · {{ quiz.creator?.name ?? 'Unknown' }}
                        </p>
                    </CardContent>

                    <CardFooter class="flex-wrap gap-2 pt-2">
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
        </template>

        <!-- ── Joined quizzes section ──────────────────────────────────────── -->
        <template v-if="filteredJoinedQuizzes.length > 0">
            <div class="flex items-center gap-3 pt-2">
                <h2 class="text-sm font-semibold text-muted-foreground">
                    {{ activeFilter !== null ? 'Joined quizzes in this folder' : 'Joined quizzes' }}
                </h2>
                <div class="h-px flex-1 bg-border" />
                <span class="text-xs text-muted-foreground">{{ filteredJoinedQuizzes.length }}</span>
            </div>

            <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
                <Card v-for="quiz in filteredJoinedQuizzes" :key="quiz.id" class="flex h-full flex-col">
                    <CardHeader class="pb-2">
                        <div class="flex flex-wrap items-center gap-1.5">
                            <Badge :variant="quiz.status === 'active' ? 'success' : 'secondary'" class="text-xs">
                                {{ quiz.status }}
                            </Badge>
                            <Badge v-if="quiz.category" variant="outline" class="gap-1 text-xs">
                                <span v-if="quiz.category_id && props.categories.find(c => c.id === quiz.category_id)?.icon" class="leading-none">
                                    {{ props.categories.find(c => c.id === quiz.category_id)?.icon }}
                                </span>
                                <Folder v-else class="size-3 text-amber-500" />
                                {{ quiz.category.name }}
                            </Badge>
                            <Badge variant="outline" class="text-xs">{{ quiz.questions_count }} Q</Badge>
                            <Badge variant="outline" class="gap-1 text-xs">
                                <ClipboardList class="size-3" />
                                {{ quiz.my_attempts_count }}{{ quiz.max_attempts ? ` / ${quiz.max_attempts}` : '' }}
                            </Badge>
                        </div>
                        <CardTitle class="mt-2 text-base sm:text-lg">{{ quiz.title }}</CardTitle>
                    </CardHeader>

                    <CardContent class="flex-1 space-y-3 pt-0">
                        <p class="line-clamp-2 text-sm text-muted-foreground">
                            {{ quiz.description || 'No description provided.' }}
                        </p>
                        <div class="flex items-center justify-between rounded-md border bg-muted/30 px-3 py-2">
                            <span class="font-mono text-sm font-semibold tracking-[0.2em]">{{ quiz.quiz_code }}</span>
                            <span class="text-xs text-muted-foreground">by {{ quiz.creator?.name ?? 'Unknown' }}</span>
                        </div>
                        <div v-if="quiz.max_attempts" class="flex items-center gap-2">
                            <div class="h-1.5 flex-1 overflow-hidden rounded-full bg-muted">
                                <div
                                    class="h-full rounded-full bg-primary transition-all"
                                    :style="{ width: `${Math.min(100, (quiz.my_attempts_count / quiz.max_attempts) * 100)}%` }"
                                />
                            </div>
                            <span class="shrink-0 text-xs text-muted-foreground">
                                {{ quiz.my_attempts_count }}/{{ quiz.max_attempts }}
                            </span>
                        </div>
                    </CardContent>

                    <CardFooter class="flex-wrap gap-2 pt-2">
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

        <!-- Folder filter is active but nothing in either grid -->
        <div
            v-if="activeFilter !== null && filteredQuizzes.length === 0 && filteredJoinedQuizzes.length === 0"
            class="rounded-2xl border border-dashed p-10 text-center"
        >
            <FolderOpen class="mx-auto size-12 text-muted-foreground/25" />
            <p class="mt-3 text-sm font-medium">This folder is empty</p>
            <p class="mt-1 text-xs text-muted-foreground">
                <span class="hidden sm:inline">Drag a quiz onto this folder, or </span>
                <button type="button" class="underline underline-offset-2 hover:text-foreground" @click="activeFilter = null">view all quizzes</button>.
            </p>
        </div>
    </div>

    <ManageCategoriesDialog
        v-model:open="manageCategoriesOpen"
        :categories="props.categories"
    />

    <!-- Move to folder dialog (mobile-friendly category assignment) -->
    <Dialog v-model:open="moveDialogOpen">
        <DialogContent class="sm:max-w-xs">
            <DialogHeader>
                <DialogTitle>Move to folder</DialogTitle>
                <DialogDescription>
                    Choose a folder for <span class="font-medium text-foreground">{{ movingQuiz?.title }}</span>.
                </DialogDescription>
            </DialogHeader>

            <div class="space-y-1">
                <!-- No folders yet -->
                <p v-if="props.categories.length === 0" class="py-3 text-center text-sm text-muted-foreground">
                    No folders yet.
                    <button type="button" class="underline underline-offset-2 hover:text-foreground" @click="moveDialogOpen = false; manageCategoriesOpen = true">
                        Create one
                    </button>
                </p>

                <!-- Category options -->
                <button
                    v-for="category in props.categories"
                    :key="category.id"
                    type="button"
                    class="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-left text-sm transition-colors hover:bg-muted"
                    :class="movingQuiz?.category_id === category.id ? 'bg-muted' : ''"
                    @click="moveToCategory(category.id)"
                >
                    <span v-if="category.icon" class="w-5 text-center text-lg leading-none">{{ category.icon }}</span>
                    <Folder v-else class="size-5 shrink-0 text-amber-400" />
                    <span class="flex-1 font-medium">{{ category.name }}</span>
                    <Check v-if="movingQuiz?.category_id === category.id" class="size-4 text-primary" />
                </button>

                <!-- Divider -->
                <div v-if="props.categories.length > 0" class="my-1 h-px bg-border" />

                <!-- Uncategorized / remove -->
                <button
                    type="button"
                    class="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-left text-sm transition-colors hover:bg-muted"
                    :class="!movingQuiz?.category_id ? 'bg-muted' : ''"
                    @click="moveToCategory(null)"
                >
                    <Folder class="size-5 shrink-0 text-slate-400" />
                    <span class="flex-1 text-muted-foreground">No folder</span>
                    <Check v-if="!movingQuiz?.category_id" class="size-4 text-primary" />
                </button>
            </div>
        </DialogContent>
    </Dialog>

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
