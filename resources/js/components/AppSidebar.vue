<script setup lang="ts">
import { Link } from '@inertiajs/vue3';
import { BookOpen, FolderGit2, LayoutGrid, TicketCheck, TrendingUp } from 'lucide-vue-next';
import AppLogo from '@/components/AppLogo.vue';
import NavFooter from '@/components/NavFooter.vue';
import NavMain from '@/components/NavMain.vue';
import NavUser from '@/components/NavUser.vue';
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from '@/components/ui/sidebar';
import { dashboard, progress } from '@/routes';
import {
    index as quizzesIndex,
} from '@/actions/App/Http/Controllers/QuizController';
import { join as attemptsJoin } from '@/actions/App/Http/Controllers/QuizAttemptController';
import type { NavItem } from '@/types';

const mainNavItems: NavItem[] = [
    {
        title: 'Dashboard',
        href: dashboard(),
        icon: LayoutGrid,
    },
    {
        title: 'Quizzes',
        href: quizzesIndex(),
        icon: BookOpen,
    },
    {
        title: 'Join quiz',
        href: attemptsJoin(),
        icon: TicketCheck,
    },
    {
        title: 'My Progress',
        href: progress(),
        icon: TrendingUp,
    },
];

const footerNavItems: NavItem[] = [

];
</script>

<template>
    <Sidebar collapsible="icon" variant="inset">
        <SidebarHeader>
            <SidebarMenu>
                <SidebarMenuItem>
                    <SidebarMenuButton size="lg" as-child>
                        <Link :href="dashboard()">
                            <AppLogo />
                        </Link>
                    </SidebarMenuButton>
                </SidebarMenuItem>
            </SidebarMenu>
        </SidebarHeader>

        <SidebarContent>
            <NavMain :items="mainNavItems" />
        </SidebarContent>

        <SidebarFooter>
            <NavFooter :items="footerNavItems" />
            <div class="px-3 pb-1 group-data-[collapsible=icon]:hidden">
                <p class="text-xs text-muted-foreground/60">
                    Developed by
                    <span class="font-medium text-muted-foreground">Cedric Heyrosa</span>
                </p>
            </div>
            <NavUser />
        </SidebarFooter>
    </Sidebar>
    <slot />
</template>
