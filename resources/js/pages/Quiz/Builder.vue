<script setup lang="ts">
import { Link, router, useForm } from '@inertiajs/vue3';
import { CheckCircle2, GripVertical, Plus, Trash2 } from 'lucide-vue-next';
import { computed, ref, watch } from 'vue';
import ConfirmDialog from '@/components/ConfirmDialog.vue';
import InputError from '@/components/InputError.vue';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
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
        status: 'active' | 'inactive';
        questions?: Array<{
            id: number;
            question_text: string;
            type: QuestionType;
            points: number;
            explanation: string | null;
            correct_answer: string[] | null;
            case_sensitive: boolean;
            choices?: Array<{ id: number; choice_text: string; is_correct: boolean }>;
        }>;
    };
    submitUrl: string;
    submitMethod: 'post' | 'put';
    submitLabel: string;
    regenerateUrl?: string;
}>();

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

const initialQuestions: QuestionInput[] = (props.quiz?.questions ?? []).map((q) => ({
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
}));

const form = useForm<QuizFormData>({
    title: props.quiz?.title ?? '',
    description: props.quiz?.description ?? '',
    status: props.quiz?.status ?? 'active',
    quiz_code: props.quiz?.quiz_code ?? '',
    max_attempts: props.quiz?.max_attempts ?? null,
    question_count: props.quiz?.question_count ?? 15,
    questions: initialQuestions.length > 0 ? initialQuestions : Array.from({ length: 15 }, () => newQuestion()),
});

const toast = useToast();

// Confirm dialogs
const saveDialogOpen = ref(false);
const removeQuestionDialog = ref<{ open: boolean; index: number | null }>({ open: false, index: null });
const regenerateDialogOpen = ref(false);

watch(
    () => props.quiz?.quiz_code,
    (newCode) => {
        if (newCode) {
            form.quiz_code = newCode;
        }
    },
);

const totalPoints = computed(() => form.questions.reduce((sum, q) => sum + (Number(q.points) || 0), 0));
const hasCorrectAnswers = computed(() =>
    form.questions.every((q) => {
        if (q.type === 'short_answer') {
            return q.correct_answer.some((a) => a.trim().length > 0);
        }
        return q.choices.some((c) => c.is_correct);
    }),
);
const questionsFilledIn = computed(() => form.questions.filter((q) => q.question_text.trim() !== '').length);

const toggleCorrect = (question: QuestionInput, choiceIndex: number): void => {
    if (question.type === 'true_false') {
        const alreadyCorrect = question.choices[choiceIndex].is_correct;
        question.choices.forEach((c) => { c.is_correct = false; });
        question.choices[choiceIndex].is_correct = !alreadyCorrect;
        return;
    }
    const willBeCorrect = !question.choices[choiceIndex].is_correct;
    if (willBeCorrect) {
        const correctCount = question.choices.filter((c) => c.is_correct).length;
        if (correctCount >= question.choices.length - 1) {
            return;
        }
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

const requestSave = (): void => {
    saveDialogOpen.value = true;
};

const submit = (): void => {
    const method = props.submitMethod;
    const url = props.submitUrl;

    form.transform((data) => ({
        ...data,
        quiz_code: data.quiz_code?.trim() ? data.quiz_code.trim().toUpperCase() : undefined,
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
                        ? q.correct_answer.map((v) => v.trim()).filter((v) => v.length > 0)
                        : undefined,
                case_sensitive: q.type === 'short_answer' ? q.case_sensitive : undefined,
                choices:
                    q.type === 'short_answer'
                        ? []
                        : q.choices
                              .filter((c) => c.choice_text.trim() !== '')
                              .map((c) => ({ choice_text: c.choice_text, is_correct: c.is_correct })),
            })),
    }));

    saveDialogOpen.value = false;

    const options = {
        preserveScroll: true,
        onSuccess: () => toast.success(props.submitLabel === 'Create quiz' ? 'Quiz created!' : 'Changes saved.'),
        onError: () => toast.error('Please fix the errors and try again.'),
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
    <form class="flex flex-col gap-6" @submit.prevent="requestSave">
        <Card>
            <CardHeader>
                <CardTitle>Quiz details</CardTitle>
                <CardDescription>Give your quiz a clear title so learners know what they're taking.</CardDescription>
            </CardHeader>
            <CardContent class="grid gap-5">
                <div class="grid gap-2">
                    <Label for="title">Title</Label>
                    <Input id="title" v-model="form.title" placeholder="e.g. Introduction to Photosynthesis" />
                    <InputError :message="form.errors.title" />
                </div>

                <div class="grid gap-2">
                    <Label for="description">Description</Label>
                    <textarea
                        id="description"
                        v-model="form.description"
                        rows="3"
                        class="border-input bg-background placeholder:text-muted-foreground focus-visible:ring-ring/50 min-h-20 w-full rounded-md border px-3 py-2 text-sm shadow-xs outline-none focus-visible:ring-[3px]"
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
                                <SelectItem value="active">Active (joinable by code)</SelectItem>
                                <SelectItem value="inactive">Inactive (draft)</SelectItem>
                            </SelectContent>
                        </Select>
                        <p class="text-xs text-muted-foreground">
                            Only active quizzes can be joined using the share code.
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
                            Share this code so others can join the quiz. Regenerating breaks existing links.
                        </p>
                    </div>
                    <div v-else class="grid gap-2">
                        <Label>Share code</Label>
                        <div class="flex h-10 items-center rounded-md border border-dashed bg-muted/30 px-3 text-sm text-muted-foreground">
                            Auto-generated on save (e.g. ABC234)
                        </div>
                    </div>
                </div>

                <div class="grid gap-2">
                    <Label>Number of questions</Label>
                    <div class="flex flex-wrap items-center gap-2">
                        <Select
                            :model-value="[5,10,15,20,25,30,40,50,60].includes(form.question_count ?? 0) ? String(form.question_count) : ''"
                            @update:model-value="(v: string) => handleQuestionCountChange(Number(v))"
                        >
                            <SelectTrigger class="w-36">
                                <SelectValue placeholder="Quick pick…" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="5">5 questions</SelectItem>
                                <SelectItem value="10">10 questions</SelectItem>
                                <SelectItem value="15">15 questions</SelectItem>
                                <SelectItem value="20">20 questions</SelectItem>
                                <SelectItem value="25">25 questions</SelectItem>
                                <SelectItem value="30">30 questions</SelectItem>
                                <SelectItem value="40">40 questions</SelectItem>
                                <SelectItem value="50">50 questions</SelectItem>
                                <SelectItem value="60">60 questions</SelectItem>
                            </SelectContent>
                        </Select>
                        <span class="text-xs text-muted-foreground">or type</span>
                        <Input
                            v-model.number="form.question_count"
                            type="number"
                            min="1"
                            max="60"
                            class="w-20"
                            @update:model-value="(v: any) => handleQuestionCountChange(Number(v))"
                        />
                        <span class="text-xs text-muted-foreground">max 60</span>
                    </div>
                    <p class="text-xs text-muted-foreground">
                        {{ questionsFilledIn }}/{{ form.question_count }} questions filled in · empty slots are placeholders you can fill later.
                    </p>
                    <InputError :message="form.errors.question_count" />
                </div>

                <div class="grid gap-2">
                    <div class="flex items-center justify-between gap-2">
                        <Label>Attempt limit</Label>
                        <Button
                            type="button"
                            :variant="form.max_attempts !== null ? 'default' : 'outline'"
                            size="sm"
                            class="h-7 gap-1.5 text-xs"
                            @click="form.max_attempts = form.max_attempts !== null ? null : 3"
                        >
                            <span
                                class="size-1.5 rounded-full"
                                :class="form.max_attempts !== null ? 'bg-primary-foreground' : 'bg-muted-foreground/50'"
                            />
                            {{ form.max_attempts !== null ? 'Limited' : 'Unlimited' }}
                        </Button>
                    </div>
                    <div v-if="form.max_attempts !== null" class="flex items-center gap-2">
                        <Input
                            v-model.number="form.max_attempts"
                            type="number"
                            min="1"
                            max="100"
                            class="w-24"
                        />
                        <span class="text-sm text-muted-foreground">attempts per user</span>
                    </div>
                    <p class="text-xs text-muted-foreground">
                        {{ form.max_attempts !== null
                            ? `Users can take this quiz up to ${form.max_attempts} time${form.max_attempts === 1 ? '' : 's'}.`
                            : 'Users can take this quiz unlimited times.' }}
                    </p>
                    <InputError :message="form.errors.max_attempts" />
                </div>
            </CardContent>
        </Card>

        <Card>
            <CardHeader class="flex flex-row items-start justify-between gap-4">
                <div>
                    <CardTitle>Questions</CardTitle>
                    <CardDescription>
                        {{ form.questions.length }} question{{ form.questions.length === 1 ? '' : 's' }} ·
                        {{ totalPoints }} point{{ totalPoints === 1 ? '' : 's' }} total
                    </CardDescription>
                </div>
                <Badge v-if="!hasCorrectAnswers" variant="destructive">Mark correct answers</Badge>
                <Badge v-else variant="success">Ready</Badge>
            </CardHeader>

            <CardContent class="flex flex-col gap-4">
                <div
                    v-for="(question, qIndex) in form.questions"
                    :key="qIndex"
                    class="rounded-xl border bg-card p-4 shadow-sm"
                >
                    <div class="mb-3 flex items-center justify-between gap-3">
                        <div class="flex items-center gap-2 text-sm font-medium text-muted-foreground">
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
                            <Label :for="`question-${qIndex}`">Question text</Label>
                            <textarea
                                :id="`question-${qIndex}`"
                                v-model="question.question_text"
                                rows="2"
                                class="border-input bg-background focus-visible:ring-ring/50 min-h-16 w-full rounded-md border px-3 py-2 text-sm shadow-xs outline-none focus-visible:ring-[3px]"
                                placeholder="What would you like to ask?"
                            />
                            <InputError :message="questionError(qIndex, 'question_text')" />
                        </div>

                        <div class="grid gap-4 md:grid-cols-[1fr_120px]">
                            <div class="grid gap-2">
                                <Label>Type</Label>
                                <Select
                                    :model-value="question.type"
                                    @update:model-value="(v: any) => handleTypeChange(question, v)"
                                >
                                    <SelectTrigger>
                                        <SelectValue />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="multiple_choice">Multiple choice</SelectItem>
                                        <SelectItem value="true_false">True / False</SelectItem>
                                        <SelectItem value="short_answer">Short answer</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                            <div class="grid gap-2">
                                <Label :for="`points-${qIndex}`">Points</Label>
                                <Input
                                    :id="`points-${qIndex}`"
                                    v-model.number="question.points"
                                    type="number"
                                    min="1"
                                    max="100"
                                />
                            </div>
                        </div>

                        <div v-if="question.type !== 'short_answer'" class="grid gap-2">
                            <Label>
                                Choices —
                                {{ question.type === 'true_false' ? 'select the correct one' : 'tick correct answers (at least one must be wrong)' }}
                            </Label>
                            <div class="grid gap-2">
                                <div
                                    v-for="(choice, cIndex) in question.choices"
                                    :key="cIndex"
                                    class="flex items-center gap-2 rounded-md border bg-background p-2"
                                    :class="choice.is_correct ? 'border-emerald-300 ring-2 ring-emerald-200 dark:border-emerald-700 dark:ring-emerald-900/40' : ''"
                                >
                                    <button
                                        type="button"
                                        class="flex size-8 shrink-0 items-center justify-center rounded-full border transition"
                                        :class="choice.is_correct ? 'border-emerald-500 bg-emerald-500 text-white' : 'border-muted text-muted-foreground hover:border-emerald-400'"
                                        :aria-label="choice.is_correct ? 'Correct answer' : 'Mark as correct'"
                                        @click="toggleCorrect(question, cIndex)"
                                    >
                                        <CheckCircle2 v-if="choice.is_correct" class="size-4" />
                                        <span v-else class="text-xs font-semibold">{{ String.fromCharCode(65 + cIndex) }}</span>
                                    </button>
                                    <Input
                                        v-model="choice.choice_text"
                                        :placeholder="`Option ${String.fromCharCode(65 + cIndex)}`"
                                        :readonly="question.type === 'true_false'"
                                        class="flex-1"
                                    />
                                    <Button
                                        v-if="question.type === 'multiple_choice' && question.choices.length > 2"
                                        type="button"
                                        variant="ghost"
                                        size="icon"
                                        class="text-muted-foreground"
                                        @click="removeChoice(question, cIndex)"
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
                            <div class="flex items-center justify-between gap-2">
                                <Label>Accepted answers</Label>
                                <Button
                                    type="button"
                                    :variant="question.case_sensitive ? 'default' : 'outline'"
                                    size="sm"
                                    class="h-7 gap-1.5 text-xs"
                                    @click="question.case_sensitive = !question.case_sensitive"
                                >
                                    <span
                                        class="size-1.5 rounded-full"
                                        :class="question.case_sensitive ? 'bg-primary-foreground' : 'bg-muted-foreground/50'"
                                    />
                                    {{ question.case_sensitive ? 'Case-sensitive' : 'Case-insensitive' }}
                                </Button>
                            </div>
                            <p class="text-xs text-muted-foreground">
                                {{ question.case_sensitive ? 'Exact case match required.' : 'Case-insensitive — any capitalisation accepted.' }}
                                Add every wording you want to accept.
                            </p>
                            <div class="grid gap-2">
                                <div
                                    v-for="(answer, aIndex) in question.correct_answer"
                                    :key="aIndex"
                                    class="flex items-center gap-2"
                                >
                                    <Input
                                        v-model="question.correct_answer[aIndex]"
                                        placeholder="e.g. glucose"
                                    />
                                    <Button
                                        type="button"
                                        variant="ghost"
                                        size="icon"
                                        class="text-muted-foreground"
                                        @click="removeAcceptedAnswer(question, aIndex)"
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
                            <Label :for="`explanation-${qIndex}`">Explanation (optional)</Label>
                            <Input
                                :id="`explanation-${qIndex}`"
                                v-model="question.explanation"
                                placeholder="Shown in results to help learners understand."
                            />
                        </div>
                    </div>
                </div>

                <Button type="button" variant="outline" @click="addQuestion">
                    <Plus class="size-4" />
                    Add question
                </Button>
            </CardContent>

            <CardFooter class="justify-between">
                <Button variant="ghost" as-child>
                    <Link :href="quizzesIndex()">Cancel</Link>
                </Button>
                <Button type="submit" :disabled="form.processing">
                    {{ props.submitLabel }}
                </Button>
            </CardFooter>
        </Card>
    </form>

    <ConfirmDialog
        v-model:open="saveDialogOpen"
        :title="props.submitLabel === 'Create quiz' ? 'Create quiz?' : 'Save changes?'"
        :description="props.submitLabel === 'Create quiz'
            ? 'Your quiz will be created and ready to share once saved.'
            : 'Your changes will be saved and applied immediately.'"
        :confirm-label="props.submitLabel"
        :processing="form.processing"
        @confirm="submit"
    />

    <ConfirmDialog
        v-model:open="removeQuestionDialog.open"
        title="Remove question?"
        description="This question and its choices will be removed from the quiz."
        confirm-label="Remove"
        variant="destructive"
        @confirm="confirmRemoveQuestion"
    />

    <ConfirmDialog
        v-model:open="regenerateDialogOpen"
        title="Regenerate share code?"
        description="The current code will stop working immediately. Anyone with the old code won't be able to join using it."
        confirm-label="Regenerate"
        variant="destructive"
        @confirm="() => {
            regenerateDialogOpen = false;
            router.post(props.regenerateUrl!, {}, {
                preserveScroll: true,
                onSuccess: () => toast.success('Share code regenerated.'),
                onError: () => toast.error('Failed to regenerate code.'),
            });
        }"
    />
</template>
