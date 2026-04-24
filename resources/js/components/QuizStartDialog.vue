<script setup lang="ts">
import { computed } from 'vue';
import { BookOpen, CheckSquare, Send, TriangleAlert } from 'lucide-vue-next';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from '@/components/ui/dialog';

const props = defineProps<{
    open: boolean;
    processing?: boolean;
    quiz?: {
        title?: string;
        questions_count?: number;
        questions?: Array<unknown>;
    };
}>();

const emit = defineEmits<{
    'update:open': [value: boolean];
    confirm: [];
}>();

const questionCount = computed(() => {
    if (props.quiz?.questions_count !== undefined)
        return props.quiz.questions_count;
    if (props.quiz?.questions) return props.quiz.questions.length;
    return null;
});
</script>

<template>
    <Dialog :open="props.open" @update:open="emit('update:open', $event)">
        <DialogContent :show-close-button="false" class="sm:max-w-md">
            <DialogHeader>
                <div
                    class="mx-auto mb-2 flex size-12 items-center justify-center rounded-full bg-amber-100 dark:bg-amber-900/30"
                >
                    <BookOpen
                        class="size-6 text-amber-600 dark:text-amber-400"
                    />
                </div>
                <DialogTitle class="text-center text-xl">
                    {{
                        props.quiz?.title
                            ? `Ready for "${props.quiz.title}"?`
                            : 'Before you begin…'
                    }}
                </DialogTitle>
                <DialogDescription class="text-center">
                    <span v-if="questionCount !== null">
                        This quiz has
                        <span class="font-semibold text-foreground"
                            >{{ questionCount }} question{{
                                questionCount === 1 ? '' : 's'
                            }}</span
                        >.
                    </span>
                    Read the reminders below before starting.
                </DialogDescription>
            </DialogHeader>

            <Alert variant="warning">
                <TriangleAlert class="size-4" />
                <AlertTitle>Rules &amp; reminders</AlertTitle>
                <AlertDescription>
                    <ul class="mt-1 grid gap-1.5 text-sm">
                        <li class="flex items-start gap-2">
                            <CheckSquare
                                class="mt-0.5 size-4 shrink-0 text-amber-600 dark:text-amber-400"
                            />
                            You can navigate freely between questions before
                            submitting.
                        </li>
                        <li class="flex items-start gap-2">
                            <CheckSquare
                                class="mt-0.5 size-4 shrink-0 text-amber-600 dark:text-amber-400"
                            />
                            Multiple-choice questions may have
                            <span class="font-medium"
                                >more than one correct answer</span
                            >
                            — select all that apply.
                        </li>
                        <li class="flex items-start gap-2">
                            <Send
                                class="mt-0.5 size-4 shrink-0 text-amber-600 dark:text-amber-400"
                            />
                            Once you click
                            <span class="font-medium">Submit quiz</span>, your
                            answers are final and cannot be changed.
                        </li>
                    </ul>
                </AlertDescription>
            </Alert>

            <div class="flex justify-center gap-2">
                <Badge variant="honey">Good luck! 🐝</Badge>
            </div>

            <DialogFooter class="flex-col-reverse gap-2 sm:flex-row">
                <Button
                    variant="outline"
                    class="flex-1"
                    :disabled="props.processing"
                    @click="emit('update:open', false)"
                >
                    Cancel
                </Button>
                <Button
                    class="flex-1"
                    :disabled="props.processing"
                    @click="emit('confirm')"
                >
                    {{ props.processing ? 'Starting…' : 'Start quiz' }}
                </Button>
            </DialogFooter>
        </DialogContent>
    </Dialog>
</template>
