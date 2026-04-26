<script setup lang="ts">
import { Form, Head } from '@inertiajs/vue3';
import { CheckCircle2, ShieldCheck } from 'lucide-vue-next';
import { onUnmounted, ref } from 'vue';
import { update } from '@/actions/App/Http/Controllers/Settings/SecurityController';
import Heading from '@/components/Heading.vue';
import InputError from '@/components/InputError.vue';
import PasswordInput from '@/components/PasswordInput.vue';
import TwoFactorRecoveryCodes from '@/components/TwoFactorRecoveryCodes.vue';
import TwoFactorSetupModal from '@/components/TwoFactorSetupModal.vue';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { useTwoFactorAuth } from '@/composables/useTwoFactorAuth';
import { edit } from '@/routes/security';
import { disable, enable } from '@/routes/two-factor';

type Props = {
    canManageTwoFactor?: boolean;
    requiresConfirmation?: boolean;
    twoFactorEnabled?: boolean;
};

withDefaults(defineProps<Props>(), {
    canManageTwoFactor: false,
    requiresConfirmation: false,
    twoFactorEnabled: false,
});

defineOptions({
    layout: {
        breadcrumbs: [
            {
                title: 'Security settings',
                href: edit(),
            },
        ],
    },
});

const { hasSetupData, clearTwoFactorAuthData } = useTwoFactorAuth();
const showSetupModal = ref<boolean>(false);

onUnmounted(() => clearTwoFactorAuthData());
</script>

<template>
    <Head title="Security settings" />

    <h1 class="sr-only">Security settings</h1>

    <div class="space-y-6">
        <Heading
            variant="small"
            title="Update password"
            description="Ensure your account is using a long, random password to stay secure"
        />

        <Card>
            <CardContent class="pt-6">
                <Form
                    :action="update.url()"
                    method="patch"
                    :options="{ preserveScroll: true }"
                    reset-on-success
                    :reset-on-error="['password', 'password_confirmation', 'current_password']"
                    class="space-y-5"
                    v-slot="{ errors, processing, recentlySuccessful }"
                >
                    <div class="grid gap-2">
                        <Label for="current_password">Current password</Label>
                        <PasswordInput
                            id="current_password"
                            name="current_password"
                            autocomplete="current-password"
                            placeholder="Current password"
                        />
                        <InputError :message="errors.current_password" />
                    </div>

                    <div class="grid gap-2">
                        <Label for="password">New password</Label>
                        <PasswordInput
                            id="password"
                            name="password"
                            autocomplete="new-password"
                            placeholder="New password"
                        />
                        <InputError :message="errors.password" />
                    </div>

                    <div class="grid gap-2">
                        <Label for="password_confirmation">Confirm password</Label>
                        <PasswordInput
                            id="password_confirmation"
                            name="password_confirmation"
                            autocomplete="new-password"
                            placeholder="Confirm password"
                        />
                        <InputError :message="errors.password_confirmation" />
                    </div>

                    <div class="flex items-center gap-3 pt-1">
                        <Button :disabled="processing" data-test="update-password-button">
                            Update password
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
                                Password updated
                            </span>
                        </Transition>
                    </div>
                </Form>
            </CardContent>
        </Card>
    </div>

    <div v-if="canManageTwoFactor" class="space-y-6">
        <Heading
            variant="small"
            title="Two-factor authentication"
            description="Add an extra layer of security to your account"
        />

        <Card>
            <CardContent class="pt-6">
                <div
                    v-if="!twoFactorEnabled"
                    class="flex flex-col items-start gap-4"
                >
                    <p class="text-sm text-muted-foreground">
                        When you enable two-factor authentication, you will be prompted
                        for a secure pin during login. This pin can be retrieved from a
                        TOTP-supported application on your phone.
                    </p>
                    <Button v-if="hasSetupData" @click="showSetupModal = true">
                        <ShieldCheck class="size-4" />
                        Continue setup
                    </Button>
                    <Form
                        v-else
                        :action="enable.url()"
                        method="post"
                        @success="showSetupModal = true"
                        #default="{ processing }"
                    >
                        <Button type="submit" :disabled="processing">
                            Enable 2FA
                        </Button>
                    </Form>
                </div>

                <div v-else class="flex flex-col items-start gap-4">
                    <div class="flex items-center gap-2 rounded-lg bg-green-50 px-3 py-2 text-sm font-medium text-green-700 dark:bg-green-900/20 dark:text-green-400">
                        <CheckCircle2 class="size-4 shrink-0" />
                        Two-factor authentication is enabled
                    </div>
                    <p class="text-sm text-muted-foreground">
                        You will be prompted for a secure, random pin during login,
                        which you can retrieve from the TOTP-supported application on
                        your phone.
                    </p>
                    <Form :action="disable.url()" method="post" #default="{ processing }">
                        <Button variant="destructive" type="submit" :disabled="processing">
                            Disable 2FA
                        </Button>
                    </Form>
                    <TwoFactorRecoveryCodes />
                </div>
            </CardContent>
        </Card>

        <TwoFactorSetupModal
            v-model:isOpen="showSetupModal"
            :requiresConfirmation="requiresConfirmation"
            :twoFactorEnabled="twoFactorEnabled"
        />
    </div>
</template>
