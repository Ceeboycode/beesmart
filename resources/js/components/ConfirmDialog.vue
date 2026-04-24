<script setup lang="ts">
import { TriangleAlert } from 'lucide-vue-next';
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
    title: string;
    description?: string;
    confirmLabel?: string;
    cancelLabel?: string;
    variant?: 'default' | 'destructive';
    processing?: boolean;
}>();

const emit = defineEmits<{
    'update:open': [value: boolean];
    confirm: [];
}>();
</script>

<template>
    <Dialog :open="props.open" @update:open="emit('update:open', $event)">
        <DialogContent :show-close-button="false" class="sm:max-w-md">
            <DialogHeader>
                <div
                    class="mx-auto mb-2 flex size-12 items-center justify-center rounded-full"
                    :class="props.variant === 'destructive' ? 'bg-destructive/10' : 'bg-muted'"
                >
                    <TriangleAlert
                        class="size-6"
                        :class="props.variant === 'destructive' ? 'text-destructive' : 'text-muted-foreground'"
                    />
                </div>
                <DialogTitle class="text-center text-xl">{{ props.title }}</DialogTitle>
                <DialogDescription v-if="props.description" class="text-center">
                    {{ props.description }}
                </DialogDescription>
            </DialogHeader>

            <slot />

            <DialogFooter class="flex-col-reverse gap-2 sm:flex-row">
                <Button
                    variant="outline"
                    class="flex-1"
                    :disabled="props.processing"
                    @click="emit('update:open', false)"
                >
                    {{ props.cancelLabel ?? 'Cancel' }}
                </Button>
                <Button
                    class="flex-1"
                    :variant="props.variant === 'destructive' ? 'destructive' : 'default'"
                    :disabled="props.processing"
                    @click="emit('confirm')"
                >
                    {{ props.processing ? 'Please wait…' : (props.confirmLabel ?? 'Confirm') }}
                </Button>
            </DialogFooter>
        </DialogContent>
    </Dialog>
</template>
