<script setup lang="ts">
import { Head } from '@inertiajs/vue3';
import Heading from '@/components/Heading.vue';
import Builder from '@/pages/Quiz/Builder.vue';
import { index as quizzesIndex, store as quizzesStore } from '@/routes/quizzes';

defineOptions({
    layout: {
        breadcrumbs: [
            { title: 'Quizzes', href: quizzesIndex() },
            { title: 'Create', href: '#' },
        ],
    },
});
</script>

<template>
    <Head title="Create Quiz" />

    <div class="mx-auto flex w-full max-w-4xl flex-col gap-6 p-6">
        <Heading
            title="Create a new quiz"
            description="Build your quiz step-by-step. A 6-character share code is generated automatically."
        />

        <Builder
            :submit-url="quizzesStore().url"
            submit-method="post"
            submit-label="Create quiz"
        />
    </div>
</template>
