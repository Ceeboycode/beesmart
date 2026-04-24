<script setup lang="ts">
import { Link } from '@inertiajs/vue3';
import { Loading } from '@/components/ui/loading';
import { Toaster } from '@/components/ui/sonner';
import { useLoading } from '@/composables/useLoading';
import { home } from '@/routes';

const { isLoading, loadingLabel } = useLoading();

defineProps<{
    title?: string;
    description?: string;
}>();
</script>

<template>
    <div class="relative flex min-h-svh flex-col items-center justify-center bg-amber-50 p-6 md:p-10 dark:bg-gray-950">
        <!-- Honeycomb background pattern -->
        <div class="pointer-events-none absolute inset-0 overflow-hidden opacity-5 dark:opacity-10" aria-hidden="true">
            <svg class="h-full w-full" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <pattern id="hc-auth" x="0" y="0" width="56" height="100" patternUnits="userSpaceOnUse">
                        <polygon points="28,2 54,16 54,44 28,58 2,44 2,16" fill="none" stroke="#F59E0B" stroke-width="1.5" />
                        <polygon points="28,52 54,66 54,94 28,108 2,94 2,66" fill="none" stroke="#F59E0B" stroke-width="1.5" />
                        <polygon points="56,27 82,41 82,69 56,83 30,69 30,41" fill="none" stroke="#F59E0B" stroke-width="1.5" />
                    </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#hc-auth)" />
            </svg>
        </div>

        <!-- Card -->
        <div class="relative w-full max-w-sm">
            <div class="flex flex-col gap-8 rounded-2xl border border-amber-200 bg-white p-8 shadow-xl dark:border-amber-800/30 dark:bg-gray-900">
                <!-- Logo -->
                <div class="flex flex-col items-center gap-3">
                    <Link :href="home()" class="flex flex-col items-center gap-2">
                        <div class="flex h-16 w-16 items-center justify-center rounded-2xl bg-amber-500 shadow-md">
                            <svg class="h-10 w-10" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <!-- Bee body -->
                                <ellipse cx="32" cy="38" rx="12" ry="15" fill="white" opacity="0.95" />
                                <!-- Stripes -->
                                <rect x="20" y="33" width="24" height="4" rx="2" fill="#92400E" opacity="0.45" />
                                <rect x="20" y="41" width="24" height="4" rx="2" fill="#92400E" opacity="0.45" />
                                <!-- Head -->
                                <circle cx="32" cy="21" r="8" fill="white" opacity="0.95" />
                                <!-- Eyes -->
                                <circle cx="29" cy="19" r="1.8" fill="#92400E" />
                                <circle cx="35" cy="19" r="1.8" fill="#92400E" />
                                <!-- Antennae -->
                                <line x1="29" y1="13" x2="24" y2="8" stroke="white" stroke-width="1.8" stroke-linecap="round" opacity="0.9" />
                                <circle cx="23" cy="7" r="1.8" fill="white" opacity="0.9" />
                                <line x1="35" y1="13" x2="40" y2="8" stroke="white" stroke-width="1.8" stroke-linecap="round" opacity="0.9" />
                                <circle cx="41" cy="7" r="1.8" fill="white" opacity="0.9" />
                                <!-- Wings -->
                                <ellipse cx="17" cy="30" rx="9" ry="5" fill="white" opacity="0.6" transform="rotate(-20 17 30)" />
                                <ellipse cx="47" cy="30" rx="9" ry="5" fill="white" opacity="0.6" transform="rotate(20 47 30)" />
                                <!-- Stinger -->
                                <path d="M32 53 L30 59 L32 56.5 L34 59 Z" fill="white" opacity="0.7" />
                            </svg>
                        </div>
                        <span class="text-lg font-bold tracking-tight text-amber-600 dark:text-amber-400">BeeSmart</span>
                    </Link>

                    <div class="space-y-1 text-center">
                        <h1 class="text-xl font-semibold text-gray-900 dark:text-white" v-if="title">
                            {{ title }}
                        </h1>
                        <p class="text-sm text-gray-500 dark:text-gray-400" v-if="description">
                            {{ description }}
                        </p>
                    </div>
                </div>

                <slot />
            </div>

            <!-- Decorative bottom accent -->
            <div class="mt-6 text-center text-xs text-gray-400 dark:text-gray-600">
                Quiz smarter. Learn faster. Buzz ahead. 🐝
            </div>
        </div>

        <Toaster />
        <Loading v-if="isLoading" overlay :label="loadingLabel" />
    </div>
</template>
