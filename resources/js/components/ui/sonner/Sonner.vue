<script setup lang="ts">
import { useAppearance } from '@/composables/useAppearance';
import { Toaster as SonnerPrimitive } from 'vue-sonner';
import 'vue-sonner/style.css';

const { appearance } = useAppearance();
</script>

<template>
    <SonnerPrimitive
        :theme="appearance"
        class="toaster group"
        position="top-right"
        :rich-colors="true"
        :close-button="true"
        :duration="4000"
        :style="{
            '--normal-bg':     'var(--card)',
            '--normal-text':   'var(--card-foreground)',
            '--normal-border': 'var(--border)',
            '--success-bg':    'hsl(141 79% 96%)',
            '--success-text':  'hsl(141 64% 25%)',
            '--success-border':'hsl(141 60% 80%)',
            '--error-bg':      'hsl(0 86% 97%)',
            '--error-text':    'hsl(0 72% 35%)',
            '--error-border':  'hsl(0 72% 82%)',
            '--warning-bg':    'hsl(48 96% 94%)',
            '--warning-text':  'hsl(38 80% 28%)',
            '--warning-border':'hsl(42 80% 75%)',
            '--info-bg':       'hsl(210 96% 95%)',
            '--info-text':     'hsl(210 80% 30%)',
            '--info-border':   'hsl(210 80% 78%)',
            '--border-radius': '1rem',
            '--font-family':   'var(--font-sans)',
        }"
        :toast-options="{
            class: 'beesmart-toast',
        }"
    />
</template>

<style>
/* BeeSmart Sonner overrides */
.beesmart-toast {
    font-family: var(--font-sans) !important;
    font-size: 0.875rem !important;
    font-weight: 500 !important;
    box-shadow: 0 4px 20px -2px rgba(0,0,0,0.08), 0 0 0 1px rgba(0,0,0,0.04) !important;
}

[data-sonner-toaster] [data-close-button] {
    border-radius: 999px !important;
}

/* Default (normal) toast gets a subtle amber left accent */
[data-sonner-toast][data-type='default'] {
    border-left: 3px solid hsl(38 95% 48%) !important;
}
</style>
