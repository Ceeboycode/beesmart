<script setup lang="ts">
import AppContent from '@/components/AppContent.vue';
import AppHeader from '@/components/AppHeader.vue';
import AppShell from '@/components/AppShell.vue';
import { Loading } from '@/components/ui/loading';
import { Toaster } from '@/components/ui/sonner';
import { useLoading } from '@/composables/useLoading';
import type { BreadcrumbItem } from '@/types';

type Props = {
    breadcrumbs?: BreadcrumbItem[];
};

withDefaults(defineProps<Props>(), {
    breadcrumbs: () => [],
});

const { isLoading, loadingLabel } = useLoading();
</script>

<template>
    <AppShell variant="header">
        <AppHeader :breadcrumbs="breadcrumbs" />
        <AppContent variant="header">
            <slot />
        </AppContent>
        <Toaster />
        <Loading v-if="isLoading" overlay :label="loadingLabel" />
    </AppShell>
</template>
