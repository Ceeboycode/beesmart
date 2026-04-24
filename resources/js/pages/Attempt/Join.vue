<script setup lang="ts">
import { Head, useForm } from '@inertiajs/vue3';
import { Ticket } from 'lucide-vue-next';
import { computed, ref } from 'vue';
import InputError from '@/components/InputError.vue';
import QuizStartDialog from '@/components/QuizStartDialog.vue';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { InputOTP, InputOTPGroup, InputOTPSlot } from '@/components/ui/input-otp';
import { resolveCode as attemptsResolve } from '@/actions/App/Http/Controllers/QuizAttemptController';
import { index as quizzesIndex } from '@/routes/quizzes';

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

const requestStart = (): void => {
    if (!isComplete.value || form.processing) return;
    dialogOpen.value = true;
};

const confirmStart = (): void => {
    dialogOpen.value = false;
    form.transform((data) => ({ ...data, quiz_code: data.quiz_code.toUpperCase() }));
    form.post(attemptsResolve.url());
};
</script>

<template>
    <Head title="Join a quiz" />

    <div class="flex min-h-[calc(100vh-4rem)] items-center justify-center p-6">
        <Card class="w-full max-w-md border-primary/20 shadow-lg">
            <CardHeader class="items-center text-center">
                <div class="mb-2 flex size-14 items-center justify-center rounded-full bg-primary/10">
                    <Ticket class="size-7 text-primary" />
                </div>
                <CardTitle class="text-2xl">Join a quiz</CardTitle>
                <CardDescription>
                    Enter the 6-character code from the quiz creator.
                </CardDescription>
            </CardHeader>

            <CardContent>
                <form class="flex flex-col items-center gap-6" @submit.prevent="requestStart">
                    <InputOTP
                        v-model="form.quiz_code"
                        :maxlength="6"
                        :pattern="undefined"
                        class="gap-1.5"
                        :class="form.errors.quiz_code ? 'aria-invalid' : ''"
                        @complete="requestStart"
                    >
                        <InputOTPGroup>
                            <InputOTPSlot
                                v-for="i in 3"
                                :key="`l-${i}`"
                                :index="i - 1"
                                class="size-12 text-lg font-semibold uppercase"
                            />
                        </InputOTPGroup>
                        <span class="text-lg font-semibold text-muted-foreground">—</span>
                        <InputOTPGroup>
                            <InputOTPSlot
                                v-for="i in 3"
                                :key="`d-${i}`"
                                :index="i + 2"
                                class="size-12 text-lg font-semibold"
                            />
                        </InputOTPGroup>
                    </InputOTP>

                    <InputError :message="form.errors.quiz_code" class="text-center" />

                    <Button
                        type="submit"
                        class="w-full"
                        size="lg"
                        :disabled="!isComplete || form.processing"
                    >
                        {{ form.processing ? 'Joining…' : 'Join quiz' }}
                    </Button>

                    <p class="text-center text-xs text-muted-foreground">
                        Quiz codes are 3 letters followed by 3 numbers (e.g. ABC234).
                    </p>
                </form>
            </CardContent>
        </Card>
    </div>

    <QuizStartDialog
        v-model:open="dialogOpen"
        :processing="form.processing"
        @confirm="confirmStart"
    />
</template>
