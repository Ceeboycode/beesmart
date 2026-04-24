<script setup lang="ts">
import { Head, useForm } from '@inertiajs/vue3';
import { Ticket, TriangleAlert } from 'lucide-vue-next';
import { computed, ref, watch } from 'vue';
import InputError from '@/components/InputError.vue';
import QuizStartDialog from '@/components/QuizStartDialog.vue';
import { Button } from '@/components/ui/button';
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from '@/components/ui/dialog';
import {
    InputOTP,
    InputOTPGroup,
    InputOTPSlot,
} from '@/components/ui/input-otp';
import {
    resolveCode as attemptsResolve,
    start as attemptsStart,
} from '@/actions/App/Http/Controllers/QuizAttemptController';
import { index as quizzesIndex } from '@/routes/quizzes';

const props = defineProps<{
    quiz?: {
        id: number;
        title?: string;
        questions_count?: number;
    } | null;
    validatedCode?: string | null;
}>();

const form = useForm({ quiz_code: '' });

defineOptions({
    layout: {
        breadcrumbs: [
            { title: 'Quizzes', href: quizzesIndex() },
            { title: 'Join', href: '#' },
        ],
    },
});

const isComplete = computed(() => form.quiz_code.length === 6);
const dialogOpen = ref(false);
const invalidDialogOpen = ref(false);
const shouldOpenDialog = ref(false);
const lastValidatedCode = ref<string | null>(null);

const sanitizeQuizCode = (value: string): string =>
    value.replace(/\D/g, '').slice(0, 6);

watch(
    () => form.quiz_code,
    (value) => {
        const sanitized = sanitizeQuizCode(value);
        if (sanitized !== value) {
            form.quiz_code = sanitized;
        }
        if (sanitized.length !== 6) {
            dialogOpen.value = false;
            invalidDialogOpen.value = false;
            shouldOpenDialog.value = false;
        }
    },
);

watch(
    () => props.quiz,
    (quiz) => {
        if (quiz && shouldOpenDialog.value) {
            dialogOpen.value = true;
            shouldOpenDialog.value = false;
        }
    },
);

watch(
    () => props.validatedCode,
    (code) => {
        if (code && code !== lastValidatedCode.value) {
            lastValidatedCode.value = code;
            dialogOpen.value = true;
        }
    },
    { immediate: true },
);

const requestStart = (): void => {
    if (
        !isComplete.value ||
        form.processing ||
        dialogOpen.value ||
        invalidDialogOpen.value
    )
        return;
    if (props.quiz && lastValidatedCode.value === form.quiz_code) {
        dialogOpen.value = true;
        return;
    }
    form.clearErrors('quiz_code');
    invalidDialogOpen.value = false;
    shouldOpenDialog.value = true;

    form.post(attemptsResolve.url(), {
        preserveState: true,
        preserveScroll: true,
        onError: (errors) => {
            shouldOpenDialog.value = false;
            if (errors.quiz_code) {
                form.reset('quiz_code');
                invalidDialogOpen.value = true;
            }
        },
    });
};

const confirmStart = (): void => {
    if (!props.quiz) return;
    dialogOpen.value = false;
    form.post(attemptsStart.url({ quiz: props.quiz.id }));
};
</script>

<template>
    <Head title="Join a quiz" />

    <div class="flex min-h-[calc(100vh-4rem)] items-center justify-center p-6">
        <Card class="w-full max-w-md border-primary/20 shadow-lg">
            <CardHeader class="items-center text-center">
                <div
                    class="mb-2 flex size-14 items-center justify-center rounded-full bg-primary/10"
                >
                    <Ticket class="size-7 text-primary" />
                </div>
                <CardTitle class="text-2xl">Join a quiz</CardTitle>
                <CardDescription>
                    Enter the 6-digit code from the quiz creator.
                </CardDescription>
            </CardHeader>

            <CardContent>
                <form
                    class="flex flex-col items-center gap-6"
                    @submit.prevent="requestStart"
                >
                    <InputOTP
                        v-model="form.quiz_code"
                        :maxlength="6"
                        inputmode="numeric"
                        class="gap-1.5"
                        :class="form.errors.quiz_code ? 'aria-invalid' : ''"
                    >
                        <InputOTPGroup>
                            <InputOTPSlot
                                v-for="i in 6"
                                :key="`d-${i}`"
                                :index="i - 1"
                                class="size-12 text-lg font-semibold"
                            />
                        </InputOTPGroup>
                    </InputOTP>

                    <InputError
                        v-if="!invalidDialogOpen"
                        :message="form.errors.quiz_code"
                        class="text-center"
                    />

                    <Button
                        type="submit"
                        class="w-full"
                        size="lg"
                        :disabled="!isComplete || form.processing"
                    >
                        {{ form.processing ? 'Joining…' : 'Join quiz' }}
                    </Button>

                    <p class="text-center text-xs text-muted-foreground">
                        Quiz codes are 6 digits (e.g. 482913).
                    </p>
                </form>
            </CardContent>
        </Card>
    </div>

    <QuizStartDialog
        v-model:open="dialogOpen"
        :quiz="props.quiz ?? undefined"
        :processing="form.processing"
        @confirm="confirmStart"
    />

    <Dialog :open="invalidDialogOpen" @update:open="invalidDialogOpen = $event">
        <DialogContent class="sm:max-w-md">
            <DialogHeader>
                <div
                    class="mx-auto mb-2 flex size-12 items-center justify-center rounded-full bg-amber-100 dark:bg-amber-900/30"
                >
                    <TriangleAlert
                        class="size-6 text-amber-600 dark:text-amber-400"
                    />
                </div>
                <DialogTitle class="text-center text-xl"
                    >Invalid quiz code</DialogTitle
                >
                <DialogDescription class="text-center">
                    {{
                        form.errors.quiz_code ||
                        'That code does not match an active quiz.'
                    }}
                </DialogDescription>
            </DialogHeader>
            <DialogFooter class="sm:justify-center">
                <Button
                    class="w-full sm:w-auto"
                    @click="invalidDialogOpen = false"
                >
                    OK
                </Button>
            </DialogFooter>
        </DialogContent>
    </Dialog>
</template>
