<script setup lang="ts">
import { router } from '@inertiajs/vue3';
import { Check, Folder, Pencil, Plus, Trash2, X } from 'lucide-vue-next';
import { ref } from 'vue';
import { Button } from '@/components/ui/button';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { destroy as categoriesDestroy, store as categoriesStore, update as categoriesUpdate } from '@/routes/categories';

export type CategoryItem = {
    id: number;
    name: string;
    icon: string | null;
    description: string | null;
    quiz_count: number;
};

const PRESET_EMOJIS = [
    '📚', '📖', '📝', '✏️', '📐', '📏', '🔬', '🔭',
    '🧪', '🧬', '🧮', '⚗️', '💻', '🖥️', '📱', '🎯',
    '🏆', '⭐', '💡', '🔍', '📊', '📈', '🗺️', '🎓',
    '🎨', '🎭', '🎵', '🎼', '🎮', '⚽', '🏃', '🌍',
    '🌊', '🌿', '🌺', '🏔️', '🏛️', '⚡', '🔥', '💧',
    '🌈', '🦁', '🐬', '🦋', '🌟', '✨', '💫', '🔐',
] as const;

const props = defineProps<{
    open: boolean;
    categories: CategoryItem[];
}>();

const emit = defineEmits<{ 'update:open': [value: boolean] }>();

// ── create form ────────────────────────────────────────────────────────────────
const newName = ref('');
const newIcon = ref('');
const creating = ref(false);
const showNewPicker = ref(false);

function create() {
    if (!newName.value.trim()) return;
    creating.value = true;
    showNewPicker.value = false;
    router.post(
        categoriesStore().url,
        { name: newName.value.trim(), icon: newIcon.value || null },
        {
            preserveScroll: true,
            onSuccess: () => {
                newName.value = '';
                newIcon.value = '';
            },
            onFinish: () => {
                creating.value = false;
            },
        },
    );
}

// ── edit form ──────────────────────────────────────────────────────────────────
const editingId = ref<number | null>(null);
const editingName = ref('');
const editingIcon = ref('');
const showEditPicker = ref(false);

function startEdit(category: CategoryItem) {
    editingId.value = category.id;
    editingName.value = category.name;
    editingIcon.value = category.icon ?? '';
    showEditPicker.value = false;
}

function cancelEdit() {
    editingId.value = null;
    editingName.value = '';
    editingIcon.value = '';
    showEditPicker.value = false;
}

function saveEdit(category: CategoryItem) {
    if (!editingName.value.trim()) return;
    showEditPicker.value = false;
    router.put(
        categoriesUpdate.url(category.id),
        { name: editingName.value.trim(), icon: editingIcon.value || null },
        {
            preserveScroll: true,
            onSuccess: () => {
                editingId.value = null;
            },
        },
    );
}

function remove(category: CategoryItem) {
    router.delete(categoriesDestroy.url(category.id), { preserveScroll: true });
}
</script>

<template>
    <Dialog :open="props.open" @update:open="emit('update:open', $event)">
        <DialogContent class="sm:max-w-md">
            <DialogHeader>
                <DialogTitle>Manage folders</DialogTitle>
                <DialogDescription>Create, rename, or delete folders. Click the icon to pick an emoji.</DialogDescription>
            </DialogHeader>

            <!-- Create new folder -->
            <div class="space-y-2">
                <div class="flex gap-2">
                    <!-- Emoji trigger -->
                    <button
                        type="button"
                        class="flex size-9 shrink-0 items-center justify-center rounded-lg border text-xl transition-colors hover:bg-muted"
                        :title="showNewPicker ? 'Close picker' : 'Choose emoji'"
                        @click="showNewPicker = !showNewPicker"
                    >
                        {{ newIcon || '📁' }}
                    </button>
                    <Input
                        v-model="newName"
                        placeholder="New folder name"
                        @keydown.enter="create"
                    />
                    <Button :disabled="!newName.trim() || creating" size="icon" @click="create">
                        <Plus class="size-4" />
                    </Button>
                </div>

                <!-- Emoji picker for new folder -->
                <div v-if="showNewPicker" class="rounded-lg border bg-muted/30 p-2">
                    <p class="mb-2 text-xs font-medium text-muted-foreground">Choose an emoji</p>
                    <div class="grid grid-cols-8 gap-1">
                        <button
                            v-for="emoji in PRESET_EMOJIS"
                            :key="emoji"
                            type="button"
                            class="flex size-8 items-center justify-center rounded text-lg transition-colors hover:bg-background"
                            :class="emoji === newIcon ? 'bg-primary/10 ring-1 ring-primary' : ''"
                            @click="newIcon = emoji; showNewPicker = false"
                        >
                            {{ emoji }}
                        </button>
                        <button
                            type="button"
                            class="flex size-8 items-center justify-center rounded text-xs text-muted-foreground transition-colors hover:bg-background hover:text-foreground"
                            title="No emoji"
                            @click="newIcon = ''; showNewPicker = false"
                        >
                            ✕
                        </button>
                    </div>
                </div>
            </div>

            <!-- Category list -->
            <div class="mt-1 max-h-72 space-y-1 overflow-y-auto pr-1">
                <p v-if="props.categories.length === 0" class="py-4 text-center text-sm text-muted-foreground">
                    No folders yet. Create one above.
                </p>

                <div
                    v-for="category in props.categories"
                    :key="category.id"
                    class="rounded-md border"
                >
                    <!-- Editing state -->
                    <template v-if="editingId === category.id">
                        <div class="flex items-center gap-2 px-3 py-2">
                            <!-- Emoji trigger -->
                            <button
                                type="button"
                                class="flex size-8 shrink-0 items-center justify-center rounded text-xl transition-colors hover:bg-muted"
                                @click="showEditPicker = !showEditPicker"
                            >
                                {{ editingIcon || '📁' }}
                            </button>
                            <Input
                                v-model="editingName"
                                class="h-7 flex-1 text-sm"
                                @keydown.enter="saveEdit(category)"
                                @keydown.escape="cancelEdit"
                            />
                            <Button size="icon" class="size-7 shrink-0" variant="ghost" @click="saveEdit(category)">
                                <Check class="size-3.5" />
                            </Button>
                            <Button size="icon" class="size-7 shrink-0" variant="ghost" @click="cancelEdit">
                                <X class="size-3.5" />
                            </Button>
                        </div>

                        <!-- Emoji picker for edit -->
                        <div v-if="showEditPicker" class="border-t px-3 pb-2 pt-2">
                            <p class="mb-2 text-xs font-medium text-muted-foreground">Choose an emoji</p>
                            <div class="grid grid-cols-8 gap-1">
                                <button
                                    v-for="emoji in PRESET_EMOJIS"
                                    :key="emoji"
                                    type="button"
                                    class="flex size-8 items-center justify-center rounded text-lg transition-colors hover:bg-muted"
                                    :class="emoji === editingIcon ? 'bg-primary/10 ring-1 ring-primary' : ''"
                                    @click="editingIcon = emoji; showEditPicker = false"
                                >
                                    {{ emoji }}
                                </button>
                                <button
                                    type="button"
                                    class="flex size-8 items-center justify-center rounded text-xs text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                                    title="No emoji"
                                    @click="editingIcon = ''; showEditPicker = false"
                                >
                                    ✕
                                </button>
                            </div>
                        </div>
                    </template>

                    <!-- Display state -->
                    <template v-else>
                        <div class="flex items-center gap-2 px-3 py-2">
                            <span class="flex size-7 shrink-0 items-center justify-center text-lg">
                                {{ category.icon || '' }}
                                <Folder v-if="!category.icon" class="size-4 text-amber-400" />
                            </span>
                            <div class="min-w-0 flex-1">
                                <span class="block truncate text-sm font-medium">{{ category.name }}</span>
                                <span class="text-xs text-muted-foreground">
                                    {{ category.quiz_count }} quiz{{ category.quiz_count !== 1 ? 'zes' : '' }}
                                </span>
                            </div>
                            <Button size="icon" class="size-7 shrink-0" variant="ghost" @click="startEdit(category)">
                                <Pencil class="size-3.5" />
                            </Button>
                            <Button
                                size="icon"
                                class="size-7 shrink-0 text-destructive hover:text-destructive"
                                variant="ghost"
                                @click="remove(category)"
                            >
                                <Trash2 class="size-3.5" />
                            </Button>
                        </div>
                    </template>
                </div>
            </div>
        </DialogContent>
    </Dialog>
</template>
