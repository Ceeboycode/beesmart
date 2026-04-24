<script setup lang="ts">
import { Head } from '@inertiajs/vue3';
import { dashboard } from '@/routes';
import { Alert, AlertTitle, AlertDescription } from '@/components/ui/alert';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Loading } from '@/components/ui/loading';
import { useLoading } from '@/composables/useLoading';
import { useToast } from '@/composables/useToast';

defineOptions({
    layout: {
        breadcrumbs: [{ title: 'Dashboard', href: dashboard() }],
    },
});

const toast = useToast();
const { show, hide, run } = useLoading();

async function handleSave() {
    await run(
        () => new Promise<void>((resolve) => setTimeout(resolve, 2500)),
        'Saving your work...',
    );
    toast.success('Saved successfully!');
}

function triggerPromise() {
    const fakeRequest = new Promise<void>((resolve) => setTimeout(resolve, 2500));
    toast.promise(fakeRequest, {
        loading: 'Buzzing to the server...',
        success: 'Done! The hive responded.',
        error: 'Oops, something went wrong.',
    });
}
</script>

<template>
    <Head title="Dashboard" />

    <div class="flex flex-col gap-8 p-6">

        <!-- ── Toast Tests ── -->
        <section>
            <h2 class="mb-1 text-lg font-bold text-amber-700 dark:text-amber-400">Toast Notifications</h2>
            <p class="mb-4 text-sm text-muted-foreground">Import <code class="rounded bg-muted px-1">useToast</code> then call any method.</p>
            <div class="flex flex-wrap gap-3">
                <Button @click="toast.honey('Welcome to BeeSmart! 🐝')">Default</Button>
                <Button variant="outline" @click="toast.success('Quiz saved successfully!')">Success</Button>
                <Button variant="outline" @click="toast.error('Could not save your quiz.')">Error</Button>
                <Button variant="outline" @click="toast.warning('Time is running out!')">Warning</Button>
                <Button variant="outline" @click="toast.info('A new quiz is available.')">Info</Button>
                <Button variant="secondary" @click="triggerPromise">Promise Toast</Button>
            </div>
        </section>

        <!-- ── Loading Tests ── -->
        <section>
            <h2 class="mb-1 text-lg font-bold text-amber-700 dark:text-amber-400">Loading Spinner</h2>
            <p class="mb-4 text-sm text-muted-foreground">Use <code class="rounded bg-muted px-1">useLoading</code> for any async action, or bind directly to <code class="rounded bg-muted px-1">processing</code> inside a Form.</p>
            <div class="flex flex-wrap items-end gap-8">
                <div class="flex flex-col items-center gap-2">
                    <Loading size="sm" />
                    <span class="text-xs text-muted-foreground">sm</span>
                </div>
                <div class="flex flex-col items-center gap-2">
                    <Loading size="md" label="Loading..." />
                    <span class="text-xs text-muted-foreground">md + label</span>
                </div>
                <div class="flex flex-col items-center gap-2">
                    <Loading size="lg" />
                    <span class="text-xs text-muted-foreground">lg</span>
                </div>
                <Button variant="outline" class="self-center" @click="handleSave">
                    Trigger Overlay (2.5s)
                </Button>
            </div>
        </section>

        <!-- ── Alert Tests ── -->
        <section>
            <h2 class="mb-1 text-lg font-bold text-amber-700 dark:text-amber-400">Alert Variants</h2>
            <p class="mb-4 text-sm text-muted-foreground">Use <code class="rounded bg-muted px-1">variant</code> prop: honey · success · warning · info · destructive</p>
            <div class="flex flex-col gap-3 max-w-xl">
                <Alert variant="honey">
                    <AlertTitle>Honey alert</AlertTitle>
                    <AlertDescription>Default BeeSmart amber style.</AlertDescription>
                </Alert>
                <Alert variant="success">
                    <AlertTitle>Success</AlertTitle>
                    <AlertDescription>Quiz submitted successfully.</AlertDescription>
                </Alert>
                <Alert variant="warning">
                    <AlertTitle>Warning</AlertTitle>
                    <AlertDescription>Only 2 attempts remaining.</AlertDescription>
                </Alert>
                <Alert variant="info">
                    <AlertTitle>Info</AlertTitle>
                    <AlertDescription>A new quiz set has been published.</AlertDescription>
                </Alert>
                <Alert variant="destructive">
                    <AlertTitle>Error</AlertTitle>
                    <AlertDescription>Failed to load quiz data.</AlertDescription>
                </Alert>
            </div>
        </section>

        <!-- ── Badge Tests ── -->
        <section>
            <h2 class="mb-1 text-lg font-bold text-amber-700 dark:text-amber-400">Badge Variants</h2>
            <div class="flex flex-wrap gap-3">
                <Badge>Primary</Badge>
                <Badge variant="honey">Honey</Badge>
                <Badge variant="success">Success</Badge>
                <Badge variant="secondary">Secondary</Badge>
                <Badge variant="outline">Outline</Badge>
                <Badge variant="destructive">Destructive</Badge>
            </div>
        </section>

    </div>
</template>
