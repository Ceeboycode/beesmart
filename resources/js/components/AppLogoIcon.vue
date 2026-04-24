<script setup lang="ts">
import type { HTMLAttributes } from 'vue';

defineOptions({
    inheritAttrs: false,
});

type Props = {
    className?: HTMLAttributes['class'];
};

defineProps<Props>();
</script>

<template>
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 64 64"
        :class="className"
        v-bind="$attrs"
        fill="none"
    >
        <!-- Body -->
        <ellipse cx="32" cy="38" rx="13" ry="16" fill="currentColor" />
        <!-- Stripes -->
        <rect x="19" y="33" width="26" height="4.5" rx="2.25" fill="white" opacity="0.35" />
        <rect x="19" y="41" width="26" height="4.5" rx="2.25" fill="white" opacity="0.35" />
        <!-- Head -->
        <circle cx="32" cy="20" r="9" fill="currentColor" />
        <!-- Eyes -->
        <circle cx="28.5" cy="18" r="2" fill="white" opacity="0.9" />
        <circle cx="35.5" cy="18" r="2" fill="white" opacity="0.9" />
        <!-- Antennae -->
        <line x1="29" y1="12" x2="23" y2="6" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
        <circle cx="22" cy="5" r="2.2" fill="currentColor" />
        <line x1="35" y1="12" x2="41" y2="6" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
        <circle cx="42" cy="5" r="2.2" fill="currentColor" />
        <!-- Wings -->
        <ellipse cx="16" cy="29" rx="10" ry="5.5" fill="white" opacity="0.55" transform="rotate(-22 16 29)" />
        <ellipse cx="48" cy="29" rx="10" ry="5.5" fill="white" opacity="0.55" transform="rotate(22 48 29)" />
        <ellipse cx="14" cy="37" rx="7" ry="4" fill="white" opacity="0.35" transform="rotate(-15 14 37)" />
        <ellipse cx="50" cy="37" rx="7" ry="4" fill="white" opacity="0.35" transform="rotate(15 50 37)" />
        <!-- Stinger -->
        <path d="M32 54 L29.5 61 L32 58 L34.5 61 Z" fill="currentColor" opacity="0.8" />
    </svg>
</template>
