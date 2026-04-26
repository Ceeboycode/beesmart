<script setup lang="ts">
import { Link } from '@inertiajs/vue3';
import { Palette, Shield, User } from 'lucide-vue-next';
import Heading from '@/components/Heading.vue';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { useCurrentUrl } from '@/composables/useCurrentUrl';
import { toUrl } from '@/lib/utils';
import { edit as editAppearance } from '@/routes/appearance';
import { edit as editProfile } from '@/routes/profile';
import { edit as editSecurity } from '@/routes/security';

const sidebarNavItems = [
    { title: 'Profile', href: editProfile(), icon: User },
    { title: 'Security', href: editSecurity(), icon: Shield },
    { title: 'Appearance', href: editAppearance(), icon: Palette },
];

const { isCurrentOrParentUrl } = useCurrentUrl();
</script>

<template>
    <div class="px-4 py-6">
        <Heading
            title="Settings"
            description="Manage your profile and account settings"
        />

        <div class="flex flex-col lg:flex-row lg:space-x-12">
            <aside class="w-full max-w-xl lg:w-52">
                <nav class="flex flex-col gap-1" aria-label="Settings">
                    <Button
                        v-for="item in sidebarNavItems"
                        :key="toUrl(item.href)"
                        variant="ghost"
                        :class="[
                            'w-full justify-start gap-2.5',
                            isCurrentOrParentUrl(item.href)
                                ? 'bg-primary/10 text-primary font-medium hover:bg-primary/15'
                                : 'text-muted-foreground hover:text-foreground',
                        ]"
                        as-child
                    >
                        <Link :href="item.href">
                            <component
                                :is="item.icon"
                                class="size-4 shrink-0"
                            />
                            {{ item.title }}
                        </Link>
                    </Button>
                </nav>
            </aside>

            <Separator class="my-6 lg:hidden" />

            <div class="flex-1 md:max-w-2xl">
                <section class="max-w-xl space-y-10">
                    <slot />
                </section>
            </div>
        </div>
    </div>
</template>
