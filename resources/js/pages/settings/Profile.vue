<script setup lang="ts">
import { Form, Head, Link, usePage } from '@inertiajs/vue3';
import { CheckCircle2 } from 'lucide-vue-next';
import { computed } from 'vue';
import { update } from '@/actions/App/Http/Controllers/Settings/ProfileController';
import DeleteUser from '@/components/DeleteUser.vue';
import Heading from '@/components/Heading.vue';
import InputError from '@/components/InputError.vue';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { edit } from '@/routes/profile';
import { send } from '@/routes/verification';

type Props = {
    mustVerifyEmail: boolean;
    status?: string;
};

defineProps<Props>();

defineOptions({
    layout: {
        breadcrumbs: [
            {
                title: 'Profile settings',
                href: edit(),
            },
        ],
    },
});

const page = usePage();
const user = computed(() => page.props.auth.user);
const initials = computed(() => {
    const parts = user.value.name?.trim().split(/\s+/) ?? [];
    if (parts.length >= 2) return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
    return (parts[0]?.[0] ?? '?').toUpperCase();
});
</script>

<template>
    <Head title="Profile settings" />

    <h1 class="sr-only">Profile settings</h1>

    <div class="flex flex-col space-y-6">
        <Heading
            variant="small"
            title="Profile information"
            description="Update your name and email address"
        />

        <div class="flex items-center gap-4 rounded-xl border bg-muted/30 p-4">
            <Avatar class="size-14">
                <AvatarFallback class="text-lg font-semibold">
                    {{ initials }}
                </AvatarFallback>
            </Avatar>
            <div class="min-w-0">
                <p class="truncate font-medium leading-tight">{{ user.name }}</p>
                <p class="truncate text-sm text-muted-foreground">{{ user.email }}</p>
            </div>
        </div>

        <Card>
            <CardContent class="pt-6">
                <Form
                    :action="update.url()"
                    method="patch"
                    class="space-y-5"
                    v-slot="{ errors, processing, recentlySuccessful }"
                >
                    <div class="grid gap-2">
                        <Label for="name">Name</Label>
                        <Input
                            id="name"
                            name="name"
                            :default-value="user.name"
                            required
                            autocomplete="name"
                            placeholder="Full name"
                        />
                        <InputError :message="errors.name" />
                    </div>

                    <div class="grid gap-2">
                        <Label for="email">Email address</Label>
                        <Input
                            id="email"
                            type="email"
                            name="email"
                            :default-value="user.email"
                            required
                            autocomplete="username"
                            placeholder="Email address"
                        />
                        <InputError :message="errors.email" />
                    </div>

                    <div v-if="mustVerifyEmail && !user.email_verified_at" class="space-y-2">
                        <p class="text-sm text-muted-foreground">
                            Your email address is unverified.
                            <Link
                                :href="send()"
                                as="button"
                                class="text-foreground underline decoration-neutral-300 underline-offset-4 transition-colors duration-300 ease-out hover:decoration-current! dark:decoration-neutral-500"
                            >
                                Click here to resend the verification email.
                            </Link>
                        </p>
                        <p
                            v-if="status === 'verification-link-sent'"
                            class="text-sm font-medium text-green-600"
                        >
                            A new verification link has been sent to your email address.
                        </p>
                    </div>

                    <div class="flex items-center gap-3 pt-1">
                        <Button :disabled="processing" data-test="update-profile-button">
                            Save changes
                        </Button>
                        <Transition
                            enter-from-class="opacity-0 translate-y-0.5"
                            enter-active-class="transition duration-200 ease-out"
                            leave-active-class="transition duration-150 ease-in"
                            leave-to-class="opacity-0"
                        >
                            <span
                                v-if="recentlySuccessful"
                                class="flex items-center gap-1.5 text-sm text-green-600 dark:text-green-400"
                            >
                                <CheckCircle2 class="size-4" />
                                Saved
                            </span>
                        </Transition>
                    </div>
                </Form>
            </CardContent>
        </Card>
    </div>

    <DeleteUser />
</template>
