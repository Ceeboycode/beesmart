<script setup lang="ts">
import { Link, router, useForm } from '@inertiajs/vue3';
import {
    AlertTriangle,
    CheckCircle2,
    ChevronLeft,
    ChevronRight,
    Eye,
    GripVertical,
    MonitorX,
    Plus,
    Shuffle,
    Trash2,
} from 'lucide-vue-next';
import { computed, ref, watch } from 'vue';
import ConfirmDialog from '@/components/ConfirmDialog.vue';
import InputError from '@/components/InputError.vue';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';
import { useToast } from '@/composables/useToast';
import { index as quizzesIndex } from '@/routes/quizzes';

type QuestionType = 'multiple_choice' | 'true_false' | 'short_answer';

type ChoiceInput = {
    id?: number;
    choice_text: string;
    is_correct: boolean;
};

type QuestionInput = {
    id?: number;
    question_text: string;
    type: QuestionType;
    points: number;
    explanation: string;
    correct_answer: string[];
    case_sensitive: boolean;
    choices: ChoiceInput[];
};

type QuizFormData = {
    title: string;
    description: string;
    status: 'active' | 'inactive';
    quiz_code: string;
    max_attempts: number | null;
    question_count: number | null;
    shuffle_questions: boolean;
    shuffle_choices: boolean;
    tab_monitoring_enabled: boolean;
    tab_violation_action: 'warn' | 'auto_submit';
    tab_violation_limit: number;
    questions: QuestionInput[];
};

const props = defineProps<{
    quiz?: {
        id: number;
        title: string;
        description: string | null;
        quiz_code: string;
        max_attempts: number | null;
        question_count: number | null;
        shuffle_questions: boolean;
        shuffle_choices: boolean;
        tab_monitoring_enabled: boolean;
        tab_violation_action: 'warn' | 'auto_submit';
        tab_violation_limit: number;
        status: 'active' | 'inactive';
        questions?: Array<{
            id: number;
            question_text: string;
            type: QuestionType;
            points: number;
            explanation: string | null;
            correct_answer: string[] | null;
            case_sensitive: boolean;
            choices?: Array<{
                id: number;
                choice_text: string;
                is_correct: boolean;
            }>;
        }>;
    };
    submitUrl: string;
    submitMethod: 'post' | 'put';
    submitLabel: string;
    regenerateUrl?: string;
}>();

const DEFAULT_QUESTION_COUNT = 5;

const emptyMultiChoice = (): ChoiceInput[] => [
    { choice_text: '', is_correct: false },
    { choice_text: '', is_correct: false },
    { choice_text: '', is_correct: false },
    { choice_text: '', is_correct: false },
];

const trueFalseChoices = (): ChoiceInput[] => [
    { choice_text: 'True', is_correct: false },
    { choice_text: 'False', is_correct: false },
];

const newQuestion = (): QuestionInput => ({
    question_text: '',
    type: 'multiple_choice',
    points: 1,
    explanation: '',
    correct_answer: [],
    case_sensitive: false,
    choices: emptyMultiChoice(),
});

const initialQuestions: QuestionInput[] = (props.quiz?.questions ?? []).map(
    (q) => ({
        id: q.id,
        question_text: q.question_text,
        type: q.type,
        points: q.points,
        explanation: q.explanation ?? '',
        correct_answer: q.correct_answer ?? [],
        case_sensitive: q.case_sensitive ?? false,
        choices: (q.choices ?? []).map((c) => ({
            id: c.id,
            choice_text: c.choice_text,
            is_correct: c.is_correct,
        })),
    }),
);

const form = useForm<QuizFormData>({
    title: props.quiz?.title ?? '',
    description: props.quiz?.description ?? '',
    status: props.quiz?.status ?? 'active',
    quiz_code: props.quiz?.quiz_code ?? '',
    max_attempts: props.quiz?.max_attempts ?? null,
    question_count: props.quiz?.question_count ?? DEFAULT_QUESTION_COUNT,
    shuffle_questions: props.quiz?.shuffle_questions ?? false,
    shuffle_choices: props.quiz?.shuffle_choices ?? false,
    tab_monitoring_enabled: props.quiz?.tab_monitoring_enabled ?? false,
    tab_violation_action: props.quiz?.tab_violation_action ?? 'warn',
    tab_violation_limit: props.quiz?.tab_violation_limit ?? 3,
    questions:
        initialQuestions.length > 0
            ? initialQuestions
            : Array.from({ length: DEFAULT_QUESTION_COUNT }, () =>
                  newQuestion(),
              ),
});

const toast = useToast();

// Wizard
const currentStep = ref(1);
const TOTAL_STEPS = 3;
// Edit mode unlocks all steps immediately; create mode unlocks as the user advances
const highestStep = ref(props.quiz ? TOTAL_STEPS : 1);

const steps = [
    { number: 1, label: 'Setup', description: 'Basic quiz info' },
    { number: 2, label: 'Questions', description: 'Build questions' },
    { number: 3, label: 'Review', description: 'Check & submit' },
];

// Dialog states
const saveDialogOpen = ref(false);
const removeQuestionDialog = ref<{ open: boolean; index: number | null }>({
    open: false,
    index: null,
});
const regenerateDialogOpen = ref(false);

const step1Valid = computed(() => form.title.trim().length > 0);

watch(
    () => props.quiz?.quiz_code,
    (newCode) => {
        if (newCode) {
            form.quiz_code = newCode;
        }
    },
);

const totalPoints = computed(() =>
    form.questions.reduce((sum, q) => sum + (Number(q.points) || 0), 0),
);

const hasCorrectAnswers = computed(() =>
    form.questions.every((q) => {
        if (q.type === 'short_answer') {
            return q.correct_answer.some((a) => a.trim().length > 0);
        }
        return q.choices.some((c) => c.is_correct);
    }),
);

const questionsFilledIn = computed(
    () => form.questions.filter((q) => q.question_text.trim() !== '').length,
);

// Question operations
const toggleCorrect = (question: QuestionInput, choiceIndex: number): void => {
    if (question.type === 'true_false') {
        const alreadyCorrect = question.choices[choiceIndex].is_correct;
        question.choices.forEach((c) => {
            c.is_correct = false;
        });
        question.choices[choiceIndex].is_correct = !alreadyCorrect;
        return;
    }
    const willBeCorrect = !question.choices[choiceIndex].is_correct;
    if (willBeCorrect) {
        const correctCount = question.choices.filter(
            (c) => c.is_correct,
        ).length;
        if (correctCount >= question.choices.length - 1) return;
    }
    question.choices[choiceIndex].is_correct = willBeCorrect;
};

const addQuestion = (): void => {
    form.questions.push(newQuestion());
};

const removeQuestion = (index: number): void => {
    removeQuestionDialog.value = { open: true, index };
};

const confirmRemoveQuestion = (): void => {
    const index = removeQuestionDialog.value.index;
    if (index === null) return;
    form.questions.splice(index, 1);
    if (form.questions.length === 0) {
        form.questions.push(newQuestion());
    }
    removeQuestionDialog.value = { open: false, index: null };
};

const handleTypeChange = (question: QuestionInput, value: string): void => {
    question.type = value as QuestionType;
    if (question.type === 'true_false') {
        question.choices = trueFalseChoices();
        question.correct_answer = [];
    } else if (question.type === 'multiple_choice') {
        question.choices = emptyMultiChoice();
        question.correct_answer = [];
    } else {
        question.choices = [];
        if (question.correct_answer.length === 0) {
            question.correct_answer = [''];
        }
    }
};

const addChoice = (question: QuestionInput): void => {
    question.choices.push({ choice_text: '', is_correct: false });
};

const removeChoice = (question: QuestionInput, index: number): void => {
    question.choices.splice(index, 1);
};

const addAcceptedAnswer = (question: QuestionInput): void => {
    question.correct_answer.push('');
};

const removeAcceptedAnswer = (question: QuestionInput, index: number): void => {
    question.correct_answer.splice(index, 1);
    if (question.correct_answer.length === 0) {
        question.correct_answer.push('');
    }
};

const handleQuestionCountChange = (newCount: number | null): void => {
    const count = Math.max(1, Math.min(60, Number(newCount) || 1));
    const currentCount = form.questions.length;

    if (count > currentCount) {
        for (let i = 0; i < count - currentCount; i++) {
            form.questions.push(newQuestion());
        }
    } else if (count < currentCount) {
        form.questions.splice(count, currentCount - count);
    }

    form.question_count = count;
};

const nextStep = (): void => {
    if (currentStep.value < TOTAL_STEPS) {
        currentStep.value++;
        if (currentStep.value > highestStep.value) {
            highestStep.value = currentStep.value;
        }
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
};

const prevStep = (): void => {
    if (currentStep.value > 1) {
        currentStep.value--;
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
};

const goToStep = (step: number): void => {
    if (step > highestStep.value) return;
    currentStep.value = step;
    window.scrollTo({ top: 0, behavior: 'smooth' });
};

const requestSave = (): void => {
    saveDialogOpen.value = true;
};

const submit = (): void => {
    const method = props.submitMethod;
    const url = props.submitUrl;

    form.transform((data) => ({
        ...data,
        quiz_code: data.quiz_code?.trim() ? data.quiz_code.trim() : undefined,
        max_attempts: data.max_attempts ?? null,
        question_count: data.question_count ?? null,
        questions: data.questions
            .filter((q) => q.question_text.trim() !== '')
            .map((q) => ({
                id: q.id,
                question_text: q.question_text,
                type: q.type,
                points: q.points,
                explanation: q.explanation || null,
                correct_answer:
                    q.type === 'short_answer'
                        ? q.correct_answer
                              .map((v) => v.trim())
                              .filter((v) => v.length > 0)
                        : undefined,
                case_sensitive:
                    q.type === 'short_answer' ? q.case_sensitive : undefined,
                choices:
                    q.type === 'short_answer'
                        ? []
                        : q.choices
                              .filter((c) => c.choice_text.trim() !== '')
                              .map((c) => ({
                                  choice_text: c.choice_text,
                                  is_correct: c.is_correct,
                              })),
            })),
    }));

    saveDialogOpen.value = false;

    const options = {
        preserveScroll: true,
        onSuccess: () => {
            toast.success(
                props.submitLabel === 'Create quiz'
                    ? 'Quiz created!'
                    : 'Changes saved.',
            );
        },
        onError: (errors: Record<string, string>) => {
            toast.error('Please fix the errors and try again.');
            const hasStep1Errors = Object.keys(errors).some((k) =>
                [
                    'title',
                    'description',
                    'status',
                    'max_attempts',
                    'question_count',
                    'shuffle_questions',
                    'shuffle_choices',
                    'tab_monitoring_enabled',
                    'tab_violation_action',
                    'tab_violation_limit',
                ].includes(k),
            );
            if (hasStep1Errors) {
                currentStep.value = 1;
            } else if (
                Object.keys(errors).some((k) => k.startsWith('questions.'))
            ) {
                currentStep.value = 2;
            }
        },
    };

    if (method === 'put') {
        form.put(url, options);
    } else {
        form.post(url, options);
    }
};

const questionError = (index: number, field: string): string | undefined => {
    const key = `questions.${index}.${field}` as keyof typeof form.errors;
    return form.errors[key] as string | undefined;
};
</script>

<template>
    <div class="flex flex-col gap-6">
        <!-- Wizard step indicator -->
        <div class="flex items-center">
            <template v-for="(step, i) in steps" :key="step.number">
                <button
                    type="button"
                    class="group flex flex-1 flex-col items-center gap-1.5 rounded-lg px-2 py-3 transition-colors"
                    :class="
                        step.number <= highestStep
                            ? 'cursor-pointer hover:bg-muted/50'
                            : 'opacity-40'
                    "
                    :disabled="step.number > highestStep"
                    @click="goToStep(step.number)"
                >
                    <div
                        class="flex size-9 items-center justify-center rounded-full border-2 text-sm font-bold transition-all"
                        :class="{
                            'border-primary bg-primary text-primary-foreground shadow-md':
                                currentStep === step.number,
                            'border-primary/50 bg-primary/10 text-primary':
                                currentStep > step.number &&
                                step.number <= highestStep,
                            'border-muted-foreground/25 bg-muted/30 text-muted-foreground':
                                currentStep < step.number,
                        }"
                    >
                        <CheckCircle2
                            v-if="currentStep > step.number"
                            class="size-4"
                        />
                        <span v-else>{{ step.number }}</span>
                    </div>
                    <div class="text-center">
                        <p
                            class="text-xs font-semibold"
                            :class="
                                currentStep === step.number
                                    ? 'text-foreground'
                                    : 'text-muted-foreground'
                            "
                        >
                            {{ step.label }}
                        </p>
                    </div>
                </button>
                <div
                    v-if="i < steps.length - 1"
                    class="h-0.5 w-8 flex-none transition-colors md:flex-1"
                    :class="highestStep > i + 1 ? 'bg-primary/40' : 'bg-border'"
                />
            </template>
        </div>

        <!-- Step 1: Setup -->
        <template v-if="currentStep === 1">
            <Card>
                <CardHeader>
                    <CardTitle>Quiz details</CardTitle>
                    <CardDescription
                        >Give your quiz a clear title so learners know what
                        they're taking.</CardDescription
                    >
                </CardHeader>
                <CardContent class="grid gap-5">
                    <div class="grid gap-2">
                        <Label for="title">
                            Title <span class="text-destructive">*</span>
                        </Label>
                        <Input
                            id="title"
                            v-model="form.title"
                            placeholder="e.g. Introduction to Photosynthesis"
                        />
                        <InputError :message="form.errors.title" />
                    </div>

                    <div class="grid gap-2">
                        <Label for="description">Description</Label>
                        <textarea
                            id="description"
                            v-model="form.description"
                            rows="3"
                            class="min-h-20 w-full rounded-md border border-input bg-background px-3 py-2 text-sm shadow-xs outline-none placeholder:text-muted-foreground focus-visible:ring-[3px] focus-visible:ring-ring/50"
                            placeholder="Optional description shown to learners before they start."
                        />
                        <InputError :message="form.errors.description" />
                    </div>

                    <div class="grid gap-5 md:grid-cols-2">
                        <div class="grid gap-2">
                            <Label>Status</Label>
                            <Select v-model="form.status">
                                <SelectTrigger>
                                    <SelectValue placeholder="Select status" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="active"
                                        >Active (joinable by code)</SelectItem
                                    >
                                    <SelectItem value="inactive"
                                        >Inactive (draft)</SelectItem
                                    >
                                </SelectContent>
                            </Select>
                            <p class="text-xs text-muted-foreground">
                                Only active quizzes can be joined using the
                                share code.
                            </p>
                            <InputError :message="form.errors.status" />
                        </div>

                        <div v-if="props.quiz" class="grid gap-2">
                            <Label>Share code</Label>
                            <div class="flex items-center gap-2">
                                <div
                                    class="flex h-10 flex-1 items-center justify-center rounded-md border bg-muted font-mono text-lg font-semibold tracking-widest"
                                >
                                    {{ form.quiz_code || props.quiz.quiz_code }}
                                </div>
                                <Button
                                    v-if="props.regenerateUrl"
                                    type="button"
                                    variant="outline"
                                    @click="regenerateDialogOpen = true"
                                >
                                    Regenerate
                                </Button>
                            </div>
                            <p class="text-xs text-muted-foreground">
                                Share this code so others can join. Regenerating
                                breaks existing links.
                            </p>
                        </div>
                        <div v-else class="grid gap-2">
                            <Label>Share code</Label>
                            <div
                                class="flex h-10 items-center rounded-md border border-dashed bg-muted/30 px-3 text-sm text-muted-foreground"
                            >
                                Auto-generated on save (e.g. 482913)
                            </div>
                        </div>
                    </div>

                    <div class="grid gap-2">
                        <Label>Number of questions</Label>
                        <div class="flex flex-wrap items-center gap-2">
                            <Select
                                :model-value="
                                    [
                                        5, 10, 15, 20, 25, 30, 40, 50, 60,
                                    ].includes(form.question_count ?? 0)
                                        ? String(form.question_count)
                                        : ''
                                "
                                @update:model-value="
                                    (v: string) =>
                                        handleQuestionCountChange(Number(v))
                                "
                            >
                                <SelectTrigger class="w-36">
                                    <SelectValue placeholder="Quick pick…" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="5"
                                        >5 questions</SelectItem
                                    >
                                    <SelectItem value="10"
                                        >10 questions</SelectItem
                                    >
                                    <SelectItem value="15"
                                        >15 questions</SelectItem
                                    >
                                    <SelectItem value="20"
                                        >20 questions</SelectItem
                                    >
                                    <SelectItem value="25"
                                        >25 questions</SelectItem
                                    >
                                    <SelectItem value="30"
                                        >30 questions</SelectItem
                                    >
                                    <SelectItem value="40"
                                        >40 questions</SelectItem
                                    >
                                    <SelectItem value="50"
                                        >50 questions</SelectItem
                                    >
                                    <SelectItem value="60"
                                        >60 questions</SelectItem
                                    >
                                </SelectContent>
                            </Select>
                            <span class="text-xs text-muted-foreground"
                                >or type</span
                            >
                            <Input
                                v-model.number="form.question_count"
                                type="number"
                                min="1"
                                max="60"
                                class="w-20"
                                @update:model-value="
                                    (v: any) =>
                                        handleQuestionCountChange(Number(v))
                                "
                            />
                            <span class="text-xs text-muted-foreground"
                                >max 60</span
                            >
                        </div>
                        <p class="text-xs text-muted-foreground">
                            Empty slots are placeholders you can fill on the
                            next step.
                        </p>
                        <InputError :message="form.errors.question_count" />
                    </div>

                    <div class="grid gap-2">
                        <div class="flex items-center justify-between gap-2">
                            <Label>Attempt limit</Label>
                            <Button
                                type="button"
                                :variant="
                                    form.max_attempts !== null
                                        ? 'default'
                                        : 'outline'
                                "
                                size="sm"
                                class="h-7 gap-1.5 text-xs"
                                @click="
                                    form.max_attempts =
                                        form.max_attempts !== null ? null : 3
                                "
                            >
                                <span
                                    class="size-1.5 rounded-full"
                                    :class="
                                        form.max_attempts !== null
                                            ? 'bg-primary-foreground'
                                            : 'bg-muted-foreground/50'
                                    "
                                />
                                {{
                                    form.max_attempts !== null
                                        ? 'Limited'
                                        : 'Unlimited'
                                }}
                            </Button>
                        </div>
                        <div
                            v-if="form.max_attempts !== null"
                            class="flex items-center gap-2"
                        >
                            <Input
                                v-model.number="form.max_attempts"
                                type="number"
                                min="1"
                                max="100"
                                class="w-24"
                            />
                            <span class="text-sm text-muted-foreground"
                                >attempts per user</span
                            >
                        </div>
                        <p class="text-xs text-muted-foreground">
                            {{
                                form.max_attempts !== null
                                    ? `Users can take this quiz up to ${form.max_attempts} time${form.max_attempts === 1 ? '' : 's'}.`
                                    : 'Users can take this quiz unlimited times.'
                            }}
                        </p>
                        <InputError :message="form.errors.max_attempts" />
                    </div>
                </CardContent>
            </Card>

            <!-- Quiz behaviour -->
            <Card>
                <CardHeader>
                    <CardTitle>Quiz behaviour</CardTitle>
                    <CardDescription>Control how questions are presented and how the quiz session is monitored.</CardDescription>
                </CardHeader>
                <CardContent class="grid gap-6">
                    <!-- Shuffle questions -->
                    <div class="grid gap-2">
                        <div class="flex items-center justify-between gap-2">
                            <div class="flex items-center gap-2">
                                <Shuffle class="size-4 text-muted-foreground" />
                                <Label>Shuffle question order</Label>
                            </div>
                            <Button
                                type="button"
                                :variant="form.shuffle_questions ? 'default' : 'outline'"
                                size="sm"
                                class="h-7 gap-1.5 text-xs"
                                @click="form.shuffle_questions = !form.shuffle_questions"
                            >
                                <span class="size-1.5 rounded-full" :class="form.shuffle_questions ? 'bg-primary-foreground' : 'bg-muted-foreground/50'" />
                                {{ form.shuffle_questions ? 'Enabled' : 'Disabled' }}
                            </Button>
                        </div>
                        <p class="text-xs text-muted-foreground">Each taker sees questions in a different random order.</p>
                    </div>

                    <!-- Shuffle choices -->
                    <div class="grid gap-2">
                        <div class="flex items-center justify-between gap-2">
                            <div class="flex items-center gap-2">
                                <Shuffle class="size-4 text-muted-foreground" />
                                <Label>Shuffle answer choices</Label>
                            </div>
                            <Button
                                type="button"
                                :variant="form.shuffle_choices ? 'default' : 'outline'"
                                size="sm"
                                class="h-7 gap-1.5 text-xs"
                                @click="form.shuffle_choices = !form.shuffle_choices"
                            >
                                <span class="size-1.5 rounded-full" :class="form.shuffle_choices ? 'bg-primary-foreground' : 'bg-muted-foreground/50'" />
                                {{ form.shuffle_choices ? 'Enabled' : 'Disabled' }}
                            </Button>
                        </div>
                        <p class="text-xs text-muted-foreground">Answer choices for multiple-choice and true/false questions are randomised per attempt.</p>
                    </div>

                    <div class="h-px bg-border" />

                    <!-- Tab monitoring -->
                    <div class="grid gap-3">
                        <div class="flex items-center justify-between gap-2">
                            <div class="flex items-center gap-2">
                                <Eye class="size-4 text-muted-foreground" />
                                <Label>Tab / window monitoring</Label>
                            </div>
                            <Button
                                type="button"
                                :variant="form.tab_monitoring_enabled ? 'default' : 'outline'"
                                size="sm"
                                class="h-7 gap-1.5 text-xs"
                                @click="form.tab_monitoring_enabled = !form.tab_monitoring_enabled"
                            >
                                <span class="size-1.5 rounded-full" :class="form.tab_monitoring_enabled ? 'bg-primary-foreground' : 'bg-muted-foreground/50'" />
                                {{ form.tab_monitoring_enabled ? 'Enabled' : 'Disabled' }}
                            </Button>
                        </div>
                        <p class="text-xs text-muted-foreground">Detects when a taker switches tabs or leaves the browser window during the quiz.</p>

                        <template v-if="form.tab_monitoring_enabled">
                            <div class="ml-6 grid gap-4 rounded-lg border bg-muted/30 p-4">
                                <div class="grid gap-2">
                                    <Label>On violation</Label>
                                    <div class="flex gap-2">
                                        <Button
                                            type="button"
                                            :variant="form.tab_violation_action === 'warn' ? 'default' : 'outline'"
                                            size="sm"
                                            @click="form.tab_violation_action = 'warn'"
                                        >
                                            Warn the user
                                        </Button>
                                        <Button
                                            type="button"
                                            :variant="form.tab_violation_action === 'auto_submit' ? 'default' : 'outline'"
                                            size="sm"
                                            @click="form.tab_violation_action = 'auto_submit'"
                                        >
                                            <MonitorX class="size-4" />
                                            Auto-submit
                                        </Button>
                                    </div>
                                    <p class="text-xs text-muted-foreground">
                                        <template v-if="form.tab_violation_action === 'warn'">
                                            Show a warning on each tab switch. No automatic action.
                                        </template>
                                        <template v-else>
                                            Automatically submit the quiz after the set number of violations.
                                        </template>
                                    </p>
                                </div>

                                <div v-if="form.tab_violation_action === 'auto_submit'" class="grid gap-2">
                                    <Label>Violations before auto-submit</Label>
                                    <div class="flex items-center gap-2">
                                        <Input
                                            v-model.number="form.tab_violation_limit"
                                            type="number"
                                            min="1"
                                            max="10"
                                            class="w-20"
                                        />
                                        <span class="text-sm text-muted-foreground">tab switches</span>
                                    </div>
                                    <InputError :message="form.errors.tab_violation_limit" />
                                </div>
                            </div>
                        </template>
                    </div>
                </CardContent>
            </Card>

            <div class="flex items-center justify-between">
                <Button variant="outline" as-child>
                    <Link :href="quizzesIndex()">Cancel</Link>
                </Button>
                <Button :disabled="!step1Valid" @click="nextStep">
                    Next: Questions
                    <ChevronRight class="size-4" />
                </Button>
            </div>
        </template>

        <!-- Step 2: Questions -->
        <template v-else-if="currentStep === 2">
            <Card>
                <CardHeader
                    class="flex flex-row items-start justify-between gap-4"
                >
                    <div>
                        <CardTitle>Questions</CardTitle>
                        <CardDescription>
                            {{ questionsFilledIn }}/{{
                                form.questions.length
                            }}
                            filled in · {{ totalPoints }} point{{
                                totalPoints === 1 ? '' : 's'
                            }}
                            total
                        </CardDescription>
                    </div>
                    <Badge v-if="!hasCorrectAnswers" variant="destructive"
                        >Mark correct answers</Badge
                    >
                    <Badge v-else variant="success">Ready</Badge>
                </CardHeader>

                <CardContent class="flex flex-col gap-4">
                    <div
                        v-for="(question, qIndex) in form.questions"
                        :key="qIndex"
                        class="rounded-xl border bg-card p-4 shadow-sm"
                    >
                        <div
                            class="mb-3 flex items-center justify-between gap-3"
                        >
                            <div
                                class="flex items-center gap-2 text-sm font-medium text-muted-foreground"
                            >
                                <GripVertical class="size-4" />
                                Question {{ qIndex + 1 }}
                            </div>
                            <Button
                                type="button"
                                variant="ghost"
                                size="sm"
                                class="text-destructive hover:text-destructive"
                                @click="removeQuestion(qIndex)"
                            >
                                <Trash2 class="size-4" />
                                Remove
                            </Button>
                        </div>

                        <div class="grid gap-4">
                            <div class="grid gap-2">
                                <Label :for="`question-${qIndex}`"
                                    >Question text</Label
                                >
                                <textarea
                                    :id="`question-${qIndex}`"
                                    v-model="question.question_text"
                                    rows="2"
                                    class="min-h-16 w-full rounded-md border border-input bg-background px-3 py-2 text-sm shadow-xs outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50"
                                    placeholder="What would you like to ask?"
                                />
                                <InputError
                                    :message="
                                        questionError(qIndex, 'question_text')
                                    "
                                />
                            </div>

                            <div class="grid gap-4 md:grid-cols-[1fr_120px]">
                                <div class="grid gap-2">
                                    <Label>Type</Label>
                                    <Select
                                        :model-value="question.type"
                                        @update:model-value="
                                            (v: any) =>
                                                handleTypeChange(question, v)
                                        "
                                    >
                                        <SelectTrigger>
                                            <SelectValue />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="multiple_choice"
                                                >Multiple choice</SelectItem
                                            >
                                            <SelectItem value="true_false"
                                                >True / False</SelectItem
                                            >
                                            <SelectItem value="short_answer"
                                                >Short answer</SelectItem
                                            >
                                        </SelectContent>
                                    </Select>
                                </div>
                                <div class="grid gap-2">
                                    <Label :for="`points-${qIndex}`"
                                        >Points</Label
                                    >
                                    <Input
                                        :id="`points-${qIndex}`"
                                        v-model.number="question.points"
                                        type="number"
                                        min="1"
                                        max="100"
                                    />
                                </div>
                            </div>

                            <div
                                v-if="question.type !== 'short_answer'"
                                class="grid gap-2"
                            >
                                <Label>
                                    Choices —
                                    {{
                                        question.type === 'true_false'
                                            ? 'select the correct one'
                                            : 'tick correct answers (at least one must be wrong)'
                                    }}
                                </Label>
                                <div class="grid gap-2">
                                    <div
                                        v-for="(
                                            choice, cIndex
                                        ) in question.choices"
                                        :key="cIndex"
                                        class="flex items-center gap-2 rounded-md border bg-background p-2"
                                        :class="
                                            choice.is_correct
                                                ? 'border-emerald-300 ring-2 ring-emerald-200 dark:border-emerald-700 dark:ring-emerald-900/40'
                                                : ''
                                        "
                                    >
                                        <button
                                            type="button"
                                            class="flex size-8 shrink-0 items-center justify-center rounded-full border transition"
                                            :class="
                                                choice.is_correct
                                                    ? 'border-emerald-500 bg-emerald-500 text-white'
                                                    : 'border-muted text-muted-foreground hover:border-emerald-400'
                                            "
                                            :aria-label="
                                                choice.is_correct
                                                    ? 'Correct answer'
                                                    : 'Mark as correct'
                                            "
                                            @click="
                                                toggleCorrect(question, cIndex)
                                            "
                                        >
                                            <CheckCircle2
                                                v-if="choice.is_correct"
                                                class="size-4"
                                            />
                                            <span
                                                v-else
                                                class="text-xs font-semibold"
                                                >{{
                                                    String.fromCharCode(
                                                        65 + cIndex,
                                                    )
                                                }}</span
                                            >
                                        </button>
                                        <Input
                                            v-model="choice.choice_text"
                                            :placeholder="`Option ${String.fromCharCode(65 + cIndex)}`"
                                            :readonly="
                                                question.type === 'true_false'
                                            "
                                            class="flex-1"
                                        />
                                        <Button
                                            v-if="
                                                question.type ===
                                                    'multiple_choice' &&
                                                question.choices.length > 2
                                            "
                                            type="button"
                                            variant="ghost"
                                            size="icon"
                                            class="text-muted-foreground"
                                            @click="
                                                removeChoice(question, cIndex)
                                            "
                                        >
                                            <Trash2 class="size-4" />
                                        </Button>
                                    </div>
                                </div>
                                <Button
                                    v-if="question.type === 'multiple_choice'"
                                    type="button"
                                    variant="outline"
                                    size="sm"
                                    class="w-fit"
                                    @click="addChoice(question)"
                                >
                                    <Plus class="size-4" />
                                    Add choice
                                </Button>
                            </div>

                            <div v-else class="grid gap-2">
                                <div
                                    class="flex items-center justify-between gap-2"
                                >
                                    <Label>Accepted answers</Label>
                                    <Button
                                        type="button"
                                        :variant="
                                            question.case_sensitive
                                                ? 'default'
                                                : 'outline'
                                        "
                                        size="sm"
                                        class="h-7 gap-1.5 text-xs"
                                        @click="
                                            question.case_sensitive =
                                                !question.case_sensitive
                                        "
                                    >
                                        <span
                                            class="size-1.5 rounded-full"
                                            :class="
                                                question.case_sensitive
                                                    ? 'bg-primary-foreground'
                                                    : 'bg-muted-foreground/50'
                                            "
                                        />
                                        {{
                                            question.case_sensitive
                                                ? 'Case-sensitive'
                                                : 'Case-insensitive'
                                        }}
                                    </Button>
                                </div>
                                <p class="text-xs text-muted-foreground">
                                    {{
                                        question.case_sensitive
                                            ? 'Exact case match required.'
                                            : 'Case-insensitive — any capitalisation accepted.'
                                    }}
                                    Add every wording you want to accept.
                                </p>
                                <div class="grid gap-2">
                                    <div
                                        v-for="(
                                            answer, aIndex
                                        ) in question.correct_answer"
                                        :key="aIndex"
                                        class="flex items-center gap-2"
                                    >
                                        <Input
                                            v-model="
                                                question.correct_answer[aIndex]
                                            "
                                            placeholder="e.g. glucose"
                                        />
                                        <Button
                                            type="button"
                                            variant="ghost"
                                            size="icon"
                                            class="text-muted-foreground"
                                            @click="
                                                removeAcceptedAnswer(
                                                    question,
                                                    aIndex,
                                                )
                                            "
                                        >
                                            <Trash2 class="size-4" />
                                        </Button>
                                    </div>
                                </div>
                                <Button
                                    type="button"
                                    variant="outline"
                                    size="sm"
                                    class="w-fit"
                                    @click="addAcceptedAnswer(question)"
                                >
                                    <Plus class="size-4" />
                                    Add accepted answer
                                </Button>
                            </div>

                            <div class="grid gap-2">
                                <Label :for="`explanation-${qIndex}`"
                                    >Explanation (optional)</Label
                                >
                                <Input
                                    :id="`explanation-${qIndex}`"
                                    v-model="question.explanation"
                                    placeholder="Shown in results to help learners understand."
                                />
                            </div>
                        </div>
                    </div>

                    <Button
                        type="button"
                        variant="outline"
                        @click="addQuestion"
                    >
                        <Plus class="size-4" />
                        Add question
                    </Button>
                </CardContent>
            </Card>

            <div class="flex items-center justify-between">
                <Button variant="outline" @click="prevStep">
                    <ChevronLeft class="size-4" />
                    Back
                </Button>
                <Button @click="nextStep">
                    Review
                    <ChevronRight class="size-4" />
                </Button>
            </div>
        </template>

        <!-- Step 3: Review -->
        <template v-else>
            <Card>
                <CardHeader>
                    <CardTitle>Review your quiz</CardTitle>
                    <CardDescription>
                        Check everything looks right before
                        {{
                            props.submitLabel === 'Create quiz'
                                ? 'creating'
                                : 'saving'
                        }}
                        your quiz.
                    </CardDescription>
                </CardHeader>
                <CardContent class="grid gap-6">
                    <!-- Quiz info -->
                    <div class="grid gap-4 md:grid-cols-2">
                        <div class="space-y-1">
                            <p
                                class="text-xs font-semibold tracking-wide text-muted-foreground uppercase"
                            >
                                Title
                            </p>
                            <p class="font-semibold">{{ form.title || '—' }}</p>
                        </div>
                        <div class="space-y-1">
                            <p
                                class="text-xs font-semibold tracking-wide text-muted-foreground uppercase"
                            >
                                Status
                            </p>
                            <Badge
                                :variant="
                                    form.status === 'active'
                                        ? 'success'
                                        : 'secondary'
                                "
                            >
                                {{
                                    form.status === 'active'
                                        ? 'Active'
                                        : 'Inactive (draft)'
                                }}
                            </Badge>
                        </div>
                        <div
                            v-if="form.description"
                            class="space-y-1 md:col-span-2"
                        >
                            <p
                                class="text-xs font-semibold tracking-wide text-muted-foreground uppercase"
                            >
                                Description
                            </p>
                            <p class="text-sm text-muted-foreground">
                                {{ form.description }}
                            </p>
                        </div>
                    </div>

                    <div class="h-px bg-border" />

                    <!-- Behaviour summary -->
                    <div class="flex flex-wrap gap-2">
                        <div class="flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs" :class="form.shuffle_questions ? 'border-primary/30 bg-primary/5 text-primary' : 'text-muted-foreground'">
                            <Shuffle class="size-3" />
                            Shuffle questions: {{ form.shuffle_questions ? 'On' : 'Off' }}
                        </div>
                        <div class="flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs" :class="form.shuffle_choices ? 'border-primary/30 bg-primary/5 text-primary' : 'text-muted-foreground'">
                            <Shuffle class="size-3" />
                            Shuffle choices: {{ form.shuffle_choices ? 'On' : 'Off' }}
                        </div>
                        <div class="flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs" :class="form.tab_monitoring_enabled ? 'border-amber-400/50 bg-amber-50 text-amber-700 dark:bg-amber-900/20 dark:text-amber-400' : 'text-muted-foreground'">
                            <Eye class="size-3" />
                            Tab monitoring:
                            <template v-if="form.tab_monitoring_enabled">
                                {{ form.tab_violation_action === 'auto_submit' ? `Auto-submit after ${form.tab_violation_limit}` : 'Warn' }}
                            </template>
                            <template v-else>Off</template>
                        </div>
                    </div>

                    <div class="h-px bg-border" />

                    <!-- Stats grid -->
                    <div class="grid grid-cols-2 gap-3 md:grid-cols-4">
                        <div
                            class="rounded-lg border bg-muted/30 p-3 text-center"
                        >
                            <p class="text-2xl font-bold">
                                {{ form.questions.length }}
                            </p>
                            <p class="mt-0.5 text-xs text-muted-foreground">
                                Total slots
                            </p>
                        </div>
                        <div
                            class="rounded-lg border bg-muted/30 p-3 text-center"
                        >
                            <p class="text-2xl font-bold">
                                {{ questionsFilledIn }}
                            </p>
                            <p class="mt-0.5 text-xs text-muted-foreground">
                                Filled in
                            </p>
                        </div>
                        <div
                            class="rounded-lg border bg-muted/30 p-3 text-center"
                        >
                            <p class="text-2xl font-bold">{{ totalPoints }}</p>
                            <p class="mt-0.5 text-xs text-muted-foreground">
                                Total points
                            </p>
                        </div>
                        <div
                            class="rounded-lg border bg-muted/30 p-3 text-center"
                        >
                            <p class="text-2xl font-bold">
                                {{ form.max_attempts ?? '∞' }}
                            </p>
                            <p class="mt-0.5 text-xs text-muted-foreground">
                                Max attempts
                            </p>
                        </div>
                    </div>

                    <!-- Warnings -->
                    <div
                        v-if="!hasCorrectAnswers || questionsFilledIn === 0"
                        class="rounded-lg border border-amber-200 bg-amber-50 p-4 dark:border-amber-800 dark:bg-amber-900/20"
                    >
                        <div class="flex items-start gap-3">
                            <AlertTriangle
                                class="mt-0.5 size-4 shrink-0 text-amber-600 dark:text-amber-400"
                            />
                            <div class="space-y-1">
                                <p
                                    class="text-sm font-medium text-amber-800 dark:text-amber-300"
                                >
                                    Attention needed
                                </p>
                                <ul
                                    class="list-inside list-disc space-y-0.5 text-sm text-amber-700 dark:text-amber-400"
                                >
                                    <li v-if="questionsFilledIn === 0">
                                        No questions have been filled in yet.
                                    </li>
                                    <li v-else-if="!hasCorrectAnswers">
                                        Some questions are missing correct
                                        answers.
                                    </li>
                                </ul>
                                <p
                                    class="text-xs text-amber-600 dark:text-amber-500"
                                >
                                    You can still save — empty slots and
                                    unflagged answers will be excluded.
                                </p>
                            </div>
                        </div>
                    </div>

                    <!-- All good -->
                    <div
                        v-else
                        class="rounded-lg border border-emerald-200 bg-emerald-50 p-4 dark:border-emerald-800 dark:bg-emerald-900/20"
                    >
                        <div class="flex items-center gap-3">
                            <CheckCircle2
                                class="size-4 shrink-0 text-emerald-600 dark:text-emerald-400"
                            />
                            <p
                                class="text-sm font-medium text-emerald-800 dark:text-emerald-300"
                            >
                                All {{ questionsFilledIn }} question{{
                                    questionsFilledIn === 1 ? '' : 's'
                                }}
                                are ready.
                            </p>
                        </div>
                    </div>
                </CardContent>
            </Card>

            <div class="flex items-center justify-between">
                <Button variant="outline" @click="prevStep">
                    <ChevronLeft class="size-4" />
                    Back to questions
                </Button>
                <Button :disabled="form.processing" @click="requestSave">
                    {{ props.submitLabel }}
                </Button>
            </div>
        </template>

        <!-- Save confirmation -->
        <ConfirmDialog
            v-model:open="saveDialogOpen"
            :title="
                props.submitLabel === 'Create quiz'
                    ? 'Create quiz?'
                    : 'Save changes?'
            "
            :description="
                props.submitLabel === 'Create quiz'
                    ? 'Your quiz will be created and ready to share once saved.'
                    : 'Your changes will be saved and applied immediately.'
            "
            :confirm-label="props.submitLabel"
            :processing="form.processing"
            @confirm="submit"
        />

        <!-- Remove question confirmation -->
        <ConfirmDialog
            v-model:open="removeQuestionDialog.open"
            title="Remove question?"
            description="This question and its choices will be removed from the quiz."
            confirm-label="Remove"
            variant="destructive"
            @confirm="confirmRemoveQuestion"
        />

        <!-- Regenerate share code confirmation -->
        <ConfirmDialog
            v-if="props.regenerateUrl"
            v-model:open="regenerateDialogOpen"
            title="Regenerate share code?"
            description="The current code will stop working immediately. Anyone with the old code won't be able to join using it."
            confirm-label="Regenerate"
            variant="destructive"
            @confirm="
                () => {
                    regenerateDialogOpen = false;
                    router.post(
                        props.regenerateUrl!,
                        {},
                        {
                            preserveScroll: true,
                            onSuccess: () =>
                                toast.success('Share code regenerated.'),
                            onError: () =>
                                toast.error('Failed to regenerate code.'),
                        },
                    );
                }
            "
        />
    </div>
</template>
