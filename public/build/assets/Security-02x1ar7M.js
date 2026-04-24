import { $ as watch, B as onMounted, C as createCommentVNode, D as createVNode, E as createTextVNode, G as renderList, I as mergeModels, O as defineComponent, Q as useTemplateRef, R as nextTick, S as createBlock, St as normalizeClass, Tt as toDisplayString, U as openBlock, V as onUnmounted, Z as useModel, _ as Fragment, a as head_default, b as computed, bt as unref, ft as ref, i as form_default, l as useHttp, n as queryParams, nt as withCtx, q as resolveDynamicComponent, w as createElementBlock, wt as normalizeStyle, x as createBaseVNode } from "./wayfinder-BXUQpGRW.js";
import { t as Label_default } from "./Label-7plLdAFO.js";
import { t as Check } from "./check-Cc9rW7x5.js";
import { t as Copy } from "./copy-0ILIcUjU.js";
import { n as Eye, r as EyeOff, t as PasswordInput_default } from "./PasswordInput-BUScYeet.js";
import { t as Spinner_default } from "./Spinner-BK65VBUt.js";
import { Ct as useAppearance, E as createLucideIcon, S as Button_default, k as useClipboard, r as Heading_default, t as edit$1 } from "./app-DSvgGTY4.js";
import { t as InputError_default } from "./InputError-Bml3M7fg.js";
import { n as AlertDescription_default, r as Alert_default, t as AlertTitle_default } from "./alert-CebEwSvN.js";
import { a as Dialog_default, i as DialogContent_default, n as DialogHeader_default, r as DialogDescription_default, t as DialogTitle_default } from "./DialogTitle-DHUh_OBy.js";
import { i as Card_default, n as CardHeader_default, r as CardContent_default, t as CardTitle_default } from "./CardTitle-By1pZAMj.js";
import { t as CardDescription_default } from "./CardDescription-GPZiYSdY.js";
import { n as InputOTPGroup_default, r as InputOTP_default, t as InputOTPSlot_default } from "./InputOTPSlot-LZNfmv5L.js";
import { t as login$1 } from "./login-DOzy_RkE.js";
//#region node_modules/lucide-vue-next/dist/esm/icons/circle-alert.js
/**
* @license lucide-vue-next v0.468.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var CircleAlert = createLucideIcon("CircleAlertIcon", [
	["circle", {
		cx: "12",
		cy: "12",
		r: "10",
		key: "1mglay"
	}],
	["line", {
		x1: "12",
		x2: "12",
		y1: "8",
		y2: "12",
		key: "1pkeuh"
	}],
	["line", {
		x1: "12",
		x2: "12.01",
		y1: "16",
		y2: "16",
		key: "4dfq90"
	}]
]);
//#endregion
//#region node_modules/lucide-vue-next/dist/esm/icons/lock-keyhole.js
/**
* @license lucide-vue-next v0.468.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var LockKeyhole = createLucideIcon("LockKeyholeIcon", [
	["circle", {
		cx: "12",
		cy: "16",
		r: "1",
		key: "1au0dj"
	}],
	["rect", {
		x: "3",
		y: "10",
		width: "18",
		height: "12",
		rx: "2",
		key: "6s8ecr"
	}],
	["path", {
		d: "M7 10V7a5 5 0 0 1 10 0v3",
		key: "1pqi11"
	}]
]);
//#endregion
//#region node_modules/lucide-vue-next/dist/esm/icons/refresh-cw.js
/**
* @license lucide-vue-next v0.468.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var RefreshCw = createLucideIcon("RefreshCwIcon", [
	["path", {
		d: "M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",
		key: "v9h5vc"
	}],
	["path", {
		d: "M21 3v5h-5",
		key: "1q7to0"
	}],
	["path", {
		d: "M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",
		key: "3uifl3"
	}],
	["path", {
		d: "M8 16H3v5",
		key: "1cv678"
	}]
]);
//#endregion
//#region node_modules/lucide-vue-next/dist/esm/icons/scan-line.js
/**
* @license lucide-vue-next v0.468.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var ScanLine = createLucideIcon("ScanLineIcon", [
	["path", {
		d: "M3 7V5a2 2 0 0 1 2-2h2",
		key: "aa7l1z"
	}],
	["path", {
		d: "M17 3h2a2 2 0 0 1 2 2v2",
		key: "4qcy5o"
	}],
	["path", {
		d: "M21 17v2a2 2 0 0 1-2 2h-2",
		key: "6vwrx8"
	}],
	["path", {
		d: "M7 21H5a2 2 0 0 1-2-2v-2",
		key: "ioqczr"
	}],
	["path", {
		d: "M7 12h10",
		key: "b7w52i"
	}]
]);
//#endregion
//#region node_modules/lucide-vue-next/dist/esm/icons/shield-check.js
/**
* @license lucide-vue-next v0.468.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var ShieldCheck = createLucideIcon("ShieldCheckIcon", [["path", {
	d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
	key: "oel41y"
}], ["path", {
	d: "m9 12 2 2 4-4",
	key: "dzmm74"
}]]);
//#endregion
//#region resources/js/actions/App/Http/Controllers/Settings/SecurityController.ts
/**
* @see \App\Http\Controllers\Settings\SecurityController::edit
* @see app/Http/Controllers/Settings/SecurityController.php:31
* @route '/settings/security'
*/
var edit = (options) => ({
	url: edit.url(options),
	method: "get"
});
edit.definition = {
	methods: ["get", "head"],
	url: "/settings/security"
};
/**
* @see \App\Http\Controllers\Settings\SecurityController::edit
* @see app/Http/Controllers/Settings/SecurityController.php:31
* @route '/settings/security'
*/
edit.url = (options) => {
	return edit.definition.url + queryParams(options);
};
/**
* @see \App\Http\Controllers\Settings\SecurityController::edit
* @see app/Http/Controllers/Settings/SecurityController.php:31
* @route '/settings/security'
*/
edit.get = (options) => ({
	url: edit.url(options),
	method: "get"
});
/**
* @see \App\Http\Controllers\Settings\SecurityController::edit
* @see app/Http/Controllers/Settings/SecurityController.php:31
* @route '/settings/security'
*/
edit.head = (options) => ({
	url: edit.url(options),
	method: "head"
});
/**
* @see \App\Http\Controllers\Settings\SecurityController::edit
* @see app/Http/Controllers/Settings/SecurityController.php:31
* @route '/settings/security'
*/
var editForm = (options) => ({
	action: edit.url(options),
	method: "get"
});
/**
* @see \App\Http\Controllers\Settings\SecurityController::edit
* @see app/Http/Controllers/Settings/SecurityController.php:31
* @route '/settings/security'
*/
editForm.get = (options) => ({
	action: edit.url(options),
	method: "get"
});
/**
* @see \App\Http\Controllers\Settings\SecurityController::edit
* @see app/Http/Controllers/Settings/SecurityController.php:31
* @route '/settings/security'
*/
editForm.head = (options) => ({
	action: edit.url({ [options?.mergeQuery ? "mergeQuery" : "query"]: {
		_method: "HEAD",
		...options?.query ?? options?.mergeQuery ?? {}
	} }),
	method: "get"
});
edit.form = editForm;
/**
* @see \App\Http\Controllers\Settings\SecurityController::update
* @see app/Http/Controllers/Settings/SecurityController.php:50
* @route '/settings/password'
*/
var update = (options) => ({
	url: update.url(options),
	method: "put"
});
update.definition = {
	methods: ["put"],
	url: "/settings/password"
};
/**
* @see \App\Http\Controllers\Settings\SecurityController::update
* @see app/Http/Controllers/Settings/SecurityController.php:50
* @route '/settings/password'
*/
update.url = (options) => {
	return update.definition.url + queryParams(options);
};
/**
* @see \App\Http\Controllers\Settings\SecurityController::update
* @see app/Http/Controllers/Settings/SecurityController.php:50
* @route '/settings/password'
*/
update.put = (options) => ({
	url: update.url(options),
	method: "put"
});
/**
* @see \App\Http\Controllers\Settings\SecurityController::update
* @see app/Http/Controllers/Settings/SecurityController.php:50
* @route '/settings/password'
*/
var updateForm = (options) => ({
	action: update.url({ [options?.mergeQuery ? "mergeQuery" : "query"]: {
		_method: "PUT",
		...options?.query ?? options?.mergeQuery ?? {}
	} }),
	method: "post"
});
/**
* @see \App\Http\Controllers\Settings\SecurityController::update
* @see app/Http/Controllers/Settings/SecurityController.php:50
* @route '/settings/password'
*/
updateForm.put = (options) => ({
	action: update.url({ [options?.mergeQuery ? "mergeQuery" : "query"]: {
		_method: "PUT",
		...options?.query ?? options?.mergeQuery ?? {}
	} }),
	method: "post"
});
update.form = updateForm;
//#endregion
//#region resources/js/components/AlertError.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1$3 = { class: "list-inside list-disc text-sm" };
//#endregion
//#region resources/js/components/AlertError.vue
var AlertError_default = /* @__PURE__ */ defineComponent({
	__name: "AlertError",
	props: {
		errors: {},
		title: { default: "Something went wrong." }
	},
	setup(__props) {
		const props = __props;
		const uniqueErrors = computed(() => Array.from(new Set(props.errors)));
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(Alert_default), { variant: "destructive" }, {
				default: withCtx(() => [
					createVNode(unref(CircleAlert), { class: "size-4" }),
					createVNode(unref(AlertTitle_default), null, {
						default: withCtx(() => [createTextVNode(toDisplayString(__props.title), 1)]),
						_: 1
					}),
					createVNode(unref(AlertDescription_default), null, {
						default: withCtx(() => [createBaseVNode("ul", _hoisted_1$3, [(openBlock(true), createElementBlock(Fragment, null, renderList(uniqueErrors.value, (error, index) => {
							return openBlock(), createElementBlock("li", { key: index }, toDisplayString(error), 1);
						}), 128))])]),
						_: 1
					})
				]),
				_: 1
			});
		};
	}
});
//#endregion
//#region resources/js/routes/two-factor/index.ts
/**
* @see \Laravel\Fortify\Http\Controllers\TwoFactorAuthenticatedSessionController::login
* @see vendor/laravel/fortify/src/Http/Controllers/TwoFactorAuthenticatedSessionController.php:41
* @route '/two-factor-challenge'
*/
var login = (options) => ({
	url: login.url(options),
	method: "get"
});
login.definition = {
	methods: ["get", "head"],
	url: "/two-factor-challenge"
};
/**
* @see \Laravel\Fortify\Http\Controllers\TwoFactorAuthenticatedSessionController::login
* @see vendor/laravel/fortify/src/Http/Controllers/TwoFactorAuthenticatedSessionController.php:41
* @route '/two-factor-challenge'
*/
login.url = (options) => {
	return login.definition.url + queryParams(options);
};
/**
* @see \Laravel\Fortify\Http\Controllers\TwoFactorAuthenticatedSessionController::login
* @see vendor/laravel/fortify/src/Http/Controllers/TwoFactorAuthenticatedSessionController.php:41
* @route '/two-factor-challenge'
*/
login.get = (options) => ({
	url: login.url(options),
	method: "get"
});
/**
* @see \Laravel\Fortify\Http\Controllers\TwoFactorAuthenticatedSessionController::login
* @see vendor/laravel/fortify/src/Http/Controllers/TwoFactorAuthenticatedSessionController.php:41
* @route '/two-factor-challenge'
*/
login.head = (options) => ({
	url: login.url(options),
	method: "head"
});
/**
* @see \Laravel\Fortify\Http\Controllers\TwoFactorAuthenticatedSessionController::login
* @see vendor/laravel/fortify/src/Http/Controllers/TwoFactorAuthenticatedSessionController.php:41
* @route '/two-factor-challenge'
*/
var loginForm = (options) => ({
	action: login.url(options),
	method: "get"
});
/**
* @see \Laravel\Fortify\Http\Controllers\TwoFactorAuthenticatedSessionController::login
* @see vendor/laravel/fortify/src/Http/Controllers/TwoFactorAuthenticatedSessionController.php:41
* @route '/two-factor-challenge'
*/
loginForm.get = (options) => ({
	action: login.url(options),
	method: "get"
});
/**
* @see \Laravel\Fortify\Http\Controllers\TwoFactorAuthenticatedSessionController::login
* @see vendor/laravel/fortify/src/Http/Controllers/TwoFactorAuthenticatedSessionController.php:41
* @route '/two-factor-challenge'
*/
loginForm.head = (options) => ({
	action: login.url({ [options?.mergeQuery ? "mergeQuery" : "query"]: {
		_method: "HEAD",
		...options?.query ?? options?.mergeQuery ?? {}
	} }),
	method: "get"
});
login.form = loginForm;
/**
* @see \Laravel\Fortify\Http\Controllers\TwoFactorAuthenticationController::enable
* @see vendor/laravel/fortify/src/Http/Controllers/TwoFactorAuthenticationController.php:21
* @route '/user/two-factor-authentication'
*/
var enable = (options) => ({
	url: enable.url(options),
	method: "post"
});
enable.definition = {
	methods: ["post"],
	url: "/user/two-factor-authentication"
};
/**
* @see \Laravel\Fortify\Http\Controllers\TwoFactorAuthenticationController::enable
* @see vendor/laravel/fortify/src/Http/Controllers/TwoFactorAuthenticationController.php:21
* @route '/user/two-factor-authentication'
*/
enable.url = (options) => {
	return enable.definition.url + queryParams(options);
};
/**
* @see \Laravel\Fortify\Http\Controllers\TwoFactorAuthenticationController::enable
* @see vendor/laravel/fortify/src/Http/Controllers/TwoFactorAuthenticationController.php:21
* @route '/user/two-factor-authentication'
*/
enable.post = (options) => ({
	url: enable.url(options),
	method: "post"
});
/**
* @see \Laravel\Fortify\Http\Controllers\TwoFactorAuthenticationController::enable
* @see vendor/laravel/fortify/src/Http/Controllers/TwoFactorAuthenticationController.php:21
* @route '/user/two-factor-authentication'
*/
var enableForm = (options) => ({
	action: enable.url(options),
	method: "post"
});
/**
* @see \Laravel\Fortify\Http\Controllers\TwoFactorAuthenticationController::enable
* @see vendor/laravel/fortify/src/Http/Controllers/TwoFactorAuthenticationController.php:21
* @route '/user/two-factor-authentication'
*/
enableForm.post = (options) => ({
	action: enable.url(options),
	method: "post"
});
enable.form = enableForm;
/**
* @see \Laravel\Fortify\Http\Controllers\ConfirmedTwoFactorAuthenticationController::confirm
* @see vendor/laravel/fortify/src/Http/Controllers/ConfirmedTwoFactorAuthenticationController.php:19
* @route '/user/confirmed-two-factor-authentication'
*/
var confirm = (options) => ({
	url: confirm.url(options),
	method: "post"
});
confirm.definition = {
	methods: ["post"],
	url: "/user/confirmed-two-factor-authentication"
};
/**
* @see \Laravel\Fortify\Http\Controllers\ConfirmedTwoFactorAuthenticationController::confirm
* @see vendor/laravel/fortify/src/Http/Controllers/ConfirmedTwoFactorAuthenticationController.php:19
* @route '/user/confirmed-two-factor-authentication'
*/
confirm.url = (options) => {
	return confirm.definition.url + queryParams(options);
};
/**
* @see \Laravel\Fortify\Http\Controllers\ConfirmedTwoFactorAuthenticationController::confirm
* @see vendor/laravel/fortify/src/Http/Controllers/ConfirmedTwoFactorAuthenticationController.php:19
* @route '/user/confirmed-two-factor-authentication'
*/
confirm.post = (options) => ({
	url: confirm.url(options),
	method: "post"
});
/**
* @see \Laravel\Fortify\Http\Controllers\ConfirmedTwoFactorAuthenticationController::confirm
* @see vendor/laravel/fortify/src/Http/Controllers/ConfirmedTwoFactorAuthenticationController.php:19
* @route '/user/confirmed-two-factor-authentication'
*/
var confirmForm = (options) => ({
	action: confirm.url(options),
	method: "post"
});
/**
* @see \Laravel\Fortify\Http\Controllers\ConfirmedTwoFactorAuthenticationController::confirm
* @see vendor/laravel/fortify/src/Http/Controllers/ConfirmedTwoFactorAuthenticationController.php:19
* @route '/user/confirmed-two-factor-authentication'
*/
confirmForm.post = (options) => ({
	action: confirm.url(options),
	method: "post"
});
confirm.form = confirmForm;
/**
* @see \Laravel\Fortify\Http\Controllers\TwoFactorAuthenticationController::disable
* @see vendor/laravel/fortify/src/Http/Controllers/TwoFactorAuthenticationController.php:35
* @route '/user/two-factor-authentication'
*/
var disable = (options) => ({
	url: disable.url(options),
	method: "delete"
});
disable.definition = {
	methods: ["delete"],
	url: "/user/two-factor-authentication"
};
/**
* @see \Laravel\Fortify\Http\Controllers\TwoFactorAuthenticationController::disable
* @see vendor/laravel/fortify/src/Http/Controllers/TwoFactorAuthenticationController.php:35
* @route '/user/two-factor-authentication'
*/
disable.url = (options) => {
	return disable.definition.url + queryParams(options);
};
/**
* @see \Laravel\Fortify\Http\Controllers\TwoFactorAuthenticationController::disable
* @see vendor/laravel/fortify/src/Http/Controllers/TwoFactorAuthenticationController.php:35
* @route '/user/two-factor-authentication'
*/
disable.delete = (options) => ({
	url: disable.url(options),
	method: "delete"
});
/**
* @see \Laravel\Fortify\Http\Controllers\TwoFactorAuthenticationController::disable
* @see vendor/laravel/fortify/src/Http/Controllers/TwoFactorAuthenticationController.php:35
* @route '/user/two-factor-authentication'
*/
var disableForm = (options) => ({
	action: disable.url({ [options?.mergeQuery ? "mergeQuery" : "query"]: {
		_method: "DELETE",
		...options?.query ?? options?.mergeQuery ?? {}
	} }),
	method: "post"
});
/**
* @see \Laravel\Fortify\Http\Controllers\TwoFactorAuthenticationController::disable
* @see vendor/laravel/fortify/src/Http/Controllers/TwoFactorAuthenticationController.php:35
* @route '/user/two-factor-authentication'
*/
disableForm.delete = (options) => ({
	action: disable.url({ [options?.mergeQuery ? "mergeQuery" : "query"]: {
		_method: "DELETE",
		...options?.query ?? options?.mergeQuery ?? {}
	} }),
	method: "post"
});
disable.form = disableForm;
/**
* @see \Laravel\Fortify\Http\Controllers\TwoFactorQrCodeController::qrCode
* @see vendor/laravel/fortify/src/Http/Controllers/TwoFactorQrCodeController.php:16
* @route '/user/two-factor-qr-code'
*/
var qrCode = (options) => ({
	url: qrCode.url(options),
	method: "get"
});
qrCode.definition = {
	methods: ["get", "head"],
	url: "/user/two-factor-qr-code"
};
/**
* @see \Laravel\Fortify\Http\Controllers\TwoFactorQrCodeController::qrCode
* @see vendor/laravel/fortify/src/Http/Controllers/TwoFactorQrCodeController.php:16
* @route '/user/two-factor-qr-code'
*/
qrCode.url = (options) => {
	return qrCode.definition.url + queryParams(options);
};
/**
* @see \Laravel\Fortify\Http\Controllers\TwoFactorQrCodeController::qrCode
* @see vendor/laravel/fortify/src/Http/Controllers/TwoFactorQrCodeController.php:16
* @route '/user/two-factor-qr-code'
*/
qrCode.get = (options) => ({
	url: qrCode.url(options),
	method: "get"
});
/**
* @see \Laravel\Fortify\Http\Controllers\TwoFactorQrCodeController::qrCode
* @see vendor/laravel/fortify/src/Http/Controllers/TwoFactorQrCodeController.php:16
* @route '/user/two-factor-qr-code'
*/
qrCode.head = (options) => ({
	url: qrCode.url(options),
	method: "head"
});
/**
* @see \Laravel\Fortify\Http\Controllers\TwoFactorQrCodeController::qrCode
* @see vendor/laravel/fortify/src/Http/Controllers/TwoFactorQrCodeController.php:16
* @route '/user/two-factor-qr-code'
*/
var qrCodeForm = (options) => ({
	action: qrCode.url(options),
	method: "get"
});
/**
* @see \Laravel\Fortify\Http\Controllers\TwoFactorQrCodeController::qrCode
* @see vendor/laravel/fortify/src/Http/Controllers/TwoFactorQrCodeController.php:16
* @route '/user/two-factor-qr-code'
*/
qrCodeForm.get = (options) => ({
	action: qrCode.url(options),
	method: "get"
});
/**
* @see \Laravel\Fortify\Http\Controllers\TwoFactorQrCodeController::qrCode
* @see vendor/laravel/fortify/src/Http/Controllers/TwoFactorQrCodeController.php:16
* @route '/user/two-factor-qr-code'
*/
qrCodeForm.head = (options) => ({
	action: qrCode.url({ [options?.mergeQuery ? "mergeQuery" : "query"]: {
		_method: "HEAD",
		...options?.query ?? options?.mergeQuery ?? {}
	} }),
	method: "get"
});
qrCode.form = qrCodeForm;
/**
* @see \Laravel\Fortify\Http\Controllers\TwoFactorSecretKeyController::secretKey
* @see vendor/laravel/fortify/src/Http/Controllers/TwoFactorSecretKeyController.php:17
* @route '/user/two-factor-secret-key'
*/
var secretKey = (options) => ({
	url: secretKey.url(options),
	method: "get"
});
secretKey.definition = {
	methods: ["get", "head"],
	url: "/user/two-factor-secret-key"
};
/**
* @see \Laravel\Fortify\Http\Controllers\TwoFactorSecretKeyController::secretKey
* @see vendor/laravel/fortify/src/Http/Controllers/TwoFactorSecretKeyController.php:17
* @route '/user/two-factor-secret-key'
*/
secretKey.url = (options) => {
	return secretKey.definition.url + queryParams(options);
};
/**
* @see \Laravel\Fortify\Http\Controllers\TwoFactorSecretKeyController::secretKey
* @see vendor/laravel/fortify/src/Http/Controllers/TwoFactorSecretKeyController.php:17
* @route '/user/two-factor-secret-key'
*/
secretKey.get = (options) => ({
	url: secretKey.url(options),
	method: "get"
});
/**
* @see \Laravel\Fortify\Http\Controllers\TwoFactorSecretKeyController::secretKey
* @see vendor/laravel/fortify/src/Http/Controllers/TwoFactorSecretKeyController.php:17
* @route '/user/two-factor-secret-key'
*/
secretKey.head = (options) => ({
	url: secretKey.url(options),
	method: "head"
});
/**
* @see \Laravel\Fortify\Http\Controllers\TwoFactorSecretKeyController::secretKey
* @see vendor/laravel/fortify/src/Http/Controllers/TwoFactorSecretKeyController.php:17
* @route '/user/two-factor-secret-key'
*/
var secretKeyForm = (options) => ({
	action: secretKey.url(options),
	method: "get"
});
/**
* @see \Laravel\Fortify\Http\Controllers\TwoFactorSecretKeyController::secretKey
* @see vendor/laravel/fortify/src/Http/Controllers/TwoFactorSecretKeyController.php:17
* @route '/user/two-factor-secret-key'
*/
secretKeyForm.get = (options) => ({
	action: secretKey.url(options),
	method: "get"
});
/**
* @see \Laravel\Fortify\Http\Controllers\TwoFactorSecretKeyController::secretKey
* @see vendor/laravel/fortify/src/Http/Controllers/TwoFactorSecretKeyController.php:17
* @route '/user/two-factor-secret-key'
*/
secretKeyForm.head = (options) => ({
	action: secretKey.url({ [options?.mergeQuery ? "mergeQuery" : "query"]: {
		_method: "HEAD",
		...options?.query ?? options?.mergeQuery ?? {}
	} }),
	method: "get"
});
secretKey.form = secretKeyForm;
/**
* @see \Laravel\Fortify\Http\Controllers\RecoveryCodeController::recoveryCodes
* @see vendor/laravel/fortify/src/Http/Controllers/RecoveryCodeController.php:19
* @route '/user/two-factor-recovery-codes'
*/
var recoveryCodes = (options) => ({
	url: recoveryCodes.url(options),
	method: "get"
});
recoveryCodes.definition = {
	methods: ["get", "head"],
	url: "/user/two-factor-recovery-codes"
};
/**
* @see \Laravel\Fortify\Http\Controllers\RecoveryCodeController::recoveryCodes
* @see vendor/laravel/fortify/src/Http/Controllers/RecoveryCodeController.php:19
* @route '/user/two-factor-recovery-codes'
*/
recoveryCodes.url = (options) => {
	return recoveryCodes.definition.url + queryParams(options);
};
/**
* @see \Laravel\Fortify\Http\Controllers\RecoveryCodeController::recoveryCodes
* @see vendor/laravel/fortify/src/Http/Controllers/RecoveryCodeController.php:19
* @route '/user/two-factor-recovery-codes'
*/
recoveryCodes.get = (options) => ({
	url: recoveryCodes.url(options),
	method: "get"
});
/**
* @see \Laravel\Fortify\Http\Controllers\RecoveryCodeController::recoveryCodes
* @see vendor/laravel/fortify/src/Http/Controllers/RecoveryCodeController.php:19
* @route '/user/two-factor-recovery-codes'
*/
recoveryCodes.head = (options) => ({
	url: recoveryCodes.url(options),
	method: "head"
});
/**
* @see \Laravel\Fortify\Http\Controllers\RecoveryCodeController::recoveryCodes
* @see vendor/laravel/fortify/src/Http/Controllers/RecoveryCodeController.php:19
* @route '/user/two-factor-recovery-codes'
*/
var recoveryCodesForm = (options) => ({
	action: recoveryCodes.url(options),
	method: "get"
});
/**
* @see \Laravel\Fortify\Http\Controllers\RecoveryCodeController::recoveryCodes
* @see vendor/laravel/fortify/src/Http/Controllers/RecoveryCodeController.php:19
* @route '/user/two-factor-recovery-codes'
*/
recoveryCodesForm.get = (options) => ({
	action: recoveryCodes.url(options),
	method: "get"
});
/**
* @see \Laravel\Fortify\Http\Controllers\RecoveryCodeController::recoveryCodes
* @see vendor/laravel/fortify/src/Http/Controllers/RecoveryCodeController.php:19
* @route '/user/two-factor-recovery-codes'
*/
recoveryCodesForm.head = (options) => ({
	action: recoveryCodes.url({ [options?.mergeQuery ? "mergeQuery" : "query"]: {
		_method: "HEAD",
		...options?.query ?? options?.mergeQuery ?? {}
	} }),
	method: "get"
});
recoveryCodes.form = recoveryCodesForm;
/**
* @see \Laravel\Fortify\Http\Controllers\RecoveryCodeController::regenerateRecoveryCodes
* @see vendor/laravel/fortify/src/Http/Controllers/RecoveryCodeController.php:38
* @route '/user/two-factor-recovery-codes'
*/
var regenerateRecoveryCodes = (options) => ({
	url: regenerateRecoveryCodes.url(options),
	method: "post"
});
regenerateRecoveryCodes.definition = {
	methods: ["post"],
	url: "/user/two-factor-recovery-codes"
};
/**
* @see \Laravel\Fortify\Http\Controllers\RecoveryCodeController::regenerateRecoveryCodes
* @see vendor/laravel/fortify/src/Http/Controllers/RecoveryCodeController.php:38
* @route '/user/two-factor-recovery-codes'
*/
regenerateRecoveryCodes.url = (options) => {
	return regenerateRecoveryCodes.definition.url + queryParams(options);
};
/**
* @see \Laravel\Fortify\Http\Controllers\RecoveryCodeController::regenerateRecoveryCodes
* @see vendor/laravel/fortify/src/Http/Controllers/RecoveryCodeController.php:38
* @route '/user/two-factor-recovery-codes'
*/
regenerateRecoveryCodes.post = (options) => ({
	url: regenerateRecoveryCodes.url(options),
	method: "post"
});
/**
* @see \Laravel\Fortify\Http\Controllers\RecoveryCodeController::regenerateRecoveryCodes
* @see vendor/laravel/fortify/src/Http/Controllers/RecoveryCodeController.php:38
* @route '/user/two-factor-recovery-codes'
*/
var regenerateRecoveryCodesForm = (options) => ({
	action: regenerateRecoveryCodes.url(options),
	method: "post"
});
/**
* @see \Laravel\Fortify\Http\Controllers\RecoveryCodeController::regenerateRecoveryCodes
* @see vendor/laravel/fortify/src/Http/Controllers/RecoveryCodeController.php:38
* @route '/user/two-factor-recovery-codes'
*/
regenerateRecoveryCodesForm.post = (options) => ({
	action: regenerateRecoveryCodes.url(options),
	method: "post"
});
regenerateRecoveryCodes.form = regenerateRecoveryCodesForm;
Object.assign(login, login$1), Object.assign(enable, enable), Object.assign(confirm, confirm), Object.assign(disable, disable), Object.assign(qrCode, qrCode), Object.assign(secretKey, secretKey), Object.assign(recoveryCodes, recoveryCodes), Object.assign(regenerateRecoveryCodes, regenerateRecoveryCodes);
//#endregion
//#region resources/js/composables/useTwoFactorAuth.ts
var errors = ref([]);
var manualSetupKey = ref(null);
var qrCodeSvg = ref(null);
var recoveryCodesList = ref([]);
var hasSetupData = computed(() => qrCodeSvg.value !== null && manualSetupKey.value !== null);
var useTwoFactorAuth = () => {
	const http = useHttp();
	const fetchQrCode = async () => {
		try {
			const { svg } = await http.submit(qrCode());
			qrCodeSvg.value = svg;
		} catch {
			errors.value.push("Failed to fetch QR code");
			qrCodeSvg.value = null;
		}
	};
	const fetchSetupKey = async () => {
		try {
			const { secretKey: key } = await http.submit(secretKey());
			manualSetupKey.value = key;
		} catch {
			errors.value.push("Failed to fetch a setup key");
			manualSetupKey.value = null;
		}
	};
	const clearSetupData = () => {
		manualSetupKey.value = null;
		qrCodeSvg.value = null;
		clearErrors();
	};
	const clearErrors = () => {
		errors.value = [];
	};
	const clearTwoFactorAuthData = () => {
		clearSetupData();
		clearErrors();
		recoveryCodesList.value = [];
	};
	const fetchRecoveryCodes = async () => {
		try {
			clearErrors();
			recoveryCodesList.value = await http.submit(recoveryCodes());
		} catch {
			errors.value.push("Failed to fetch recovery codes");
			recoveryCodesList.value = [];
		}
	};
	const fetchSetupData = async () => {
		try {
			clearErrors();
			await Promise.all([fetchQrCode(), fetchSetupKey()]);
		} catch {
			qrCodeSvg.value = null;
			manualSetupKey.value = null;
		}
	};
	return {
		qrCodeSvg,
		manualSetupKey,
		recoveryCodesList,
		errors,
		hasSetupData,
		clearSetupData,
		clearErrors,
		clearTwoFactorAuthData,
		fetchQrCode,
		fetchSetupKey,
		fetchSetupData,
		fetchRecoveryCodes
	};
};
//#endregion
//#region resources/js/components/TwoFactorRecoveryCodes.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1$2 = { class: "flex flex-col gap-3 select-none sm:flex-row sm:items-center sm:justify-between" };
var _hoisted_2$2 = {
	key: 0,
	class: "mt-6"
};
var _hoisted_3$2 = {
	key: 1,
	class: "mt-3 space-y-3"
};
var _hoisted_4$2 = {
	key: 0,
	class: "space-y-2"
};
//#endregion
//#region resources/js/components/TwoFactorRecoveryCodes.vue
var TwoFactorRecoveryCodes_default = /* @__PURE__ */ defineComponent({
	__name: "TwoFactorRecoveryCodes",
	setup(__props) {
		const { recoveryCodesList, fetchRecoveryCodes, errors } = useTwoFactorAuth();
		const isRecoveryCodesVisible = ref(false);
		const recoveryCodeSectionRef = useTemplateRef("recoveryCodeSectionRef");
		const toggleRecoveryCodesVisibility = async () => {
			if (!isRecoveryCodesVisible.value && !recoveryCodesList.value.length) await fetchRecoveryCodes();
			isRecoveryCodesVisible.value = !isRecoveryCodesVisible.value;
			if (isRecoveryCodesVisible.value) {
				await nextTick();
				recoveryCodeSectionRef.value?.scrollIntoView({ behavior: "smooth" });
			}
		};
		onMounted(async () => {
			if (!recoveryCodesList.value.length) await fetchRecoveryCodes();
		});
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(Card_default), { class: "w-full" }, {
				default: withCtx(() => [createVNode(unref(CardHeader_default), null, {
					default: withCtx(() => [createVNode(unref(CardTitle_default), { class: "flex gap-3" }, {
						default: withCtx(() => [createVNode(unref(LockKeyhole), { class: "size-4" }), _cache[0] || (_cache[0] = createTextVNode("2FA recovery codes ", -1))]),
						_: 1
					}), createVNode(unref(CardDescription_default), null, {
						default: withCtx(() => [..._cache[1] || (_cache[1] = [createTextVNode(" Recovery codes let you regain access if you lose your 2FA device. Store them in a secure password manager. ", -1)])]),
						_: 1
					})]),
					_: 1
				}), createVNode(unref(CardContent_default), null, {
					default: withCtx(() => [createBaseVNode("div", _hoisted_1$2, [createVNode(unref(Button_default), {
						onClick: toggleRecoveryCodesVisibility,
						class: "w-fit"
					}, {
						default: withCtx(() => [(openBlock(), createBlock(resolveDynamicComponent(isRecoveryCodesVisible.value ? unref(EyeOff) : unref(Eye)), { class: "size-4" })), createTextVNode(" " + toDisplayString(isRecoveryCodesVisible.value ? "Hide" : "View") + " recovery codes ", 1)]),
						_: 1
					}), isRecoveryCodesVisible.value && unref(recoveryCodesList).length ? (openBlock(), createBlock(unref(form_default), {
						key: 0,
						action: unref(regenerateRecoveryCodes).url(),
						method: "post",
						options: { preserveScroll: true },
						onSuccess: unref(fetchRecoveryCodes)
					}, {
						default: withCtx(({ processing }) => [createVNode(unref(Button_default), {
							variant: "secondary",
							type: "submit",
							disabled: processing
						}, {
							default: withCtx(() => [createVNode(unref(RefreshCw)), _cache[2] || (_cache[2] = createTextVNode(" Regenerate codes ", -1))]),
							_: 1
						}, 8, ["disabled"])]),
						_: 1
					}, 8, ["action", "onSuccess"])) : createCommentVNode("", true)]), createBaseVNode("div", { class: normalizeClass(["relative overflow-hidden transition-all duration-300", isRecoveryCodesVisible.value ? "h-auto opacity-100" : "h-0 opacity-0"]) }, [unref(errors)?.length ? (openBlock(), createElementBlock("div", _hoisted_2$2, [createVNode(AlertError_default, { errors: unref(errors) }, null, 8, ["errors"])])) : (openBlock(), createElementBlock("div", _hoisted_3$2, [createBaseVNode("div", {
						ref_key: "recoveryCodeSectionRef",
						ref: recoveryCodeSectionRef,
						class: "grid gap-1 rounded-lg bg-muted p-4 font-mono text-sm"
					}, [!unref(recoveryCodesList).length ? (openBlock(), createElementBlock("div", _hoisted_4$2, [(openBlock(), createElementBlock(Fragment, null, renderList(8, (n) => {
						return createBaseVNode("div", {
							key: n,
							class: "h-4 animate-pulse rounded bg-muted-foreground/20"
						});
					}), 64))])) : (openBlock(true), createElementBlock(Fragment, { key: 1 }, renderList(unref(recoveryCodesList), (code, index) => {
						return openBlock(), createElementBlock("div", { key: index }, toDisplayString(code), 1);
					}), 128))], 512), _cache[3] || (_cache[3] = createBaseVNode("p", { class: "text-xs text-muted-foreground select-none" }, [
						createTextVNode(" Each recovery code can be used once to access your account and will be removed after use. If you need more, click "),
						createBaseVNode("span", { class: "font-bold" }, "Regenerate codes"),
						createTextVNode(" above. ")
					], -1))]))], 2)]),
					_: 1
				})]),
				_: 1
			});
		};
	}
});
//#endregion
//#region resources/js/components/TwoFactorSetupModal.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1$1 = { class: "mb-3 w-auto rounded-full border border-border bg-card p-0.5 shadow-sm" };
var _hoisted_2$1 = { class: "relative overflow-hidden rounded-full border border-border bg-muted p-2.5" };
var _hoisted_3$1 = { class: "absolute inset-0 grid grid-cols-5 opacity-50" };
var _hoisted_4$1 = { class: "absolute inset-0 grid grid-rows-5 opacity-50" };
var _hoisted_5$1 = { class: "relative flex w-auto flex-col items-center justify-center space-y-5" };
var _hoisted_6$1 = { class: "relative mx-auto flex max-w-md items-center overflow-hidden" };
var _hoisted_7$1 = { class: "relative mx-auto aspect-square w-64 overflow-hidden rounded-lg border border-border" };
var _hoisted_8$1 = {
	key: 0,
	class: "absolute inset-0 z-10 flex aspect-square h-auto w-full animate-pulse items-center justify-center bg-background"
};
var _hoisted_9$1 = {
	key: 1,
	class: "relative z-10 overflow-hidden border p-5"
};
var _hoisted_10 = ["innerHTML"];
var _hoisted_11 = { class: "flex w-full items-center space-x-5" };
var _hoisted_12 = { class: "flex w-full items-center justify-center space-x-2" };
var _hoisted_13 = { class: "flex w-full items-stretch overflow-hidden rounded-xl border border-border" };
var _hoisted_14 = {
	key: 0,
	class: "flex h-full w-full items-center justify-center bg-muted p-3"
};
var _hoisted_15 = ["value"];
var _hoisted_16 = ["value"];
var _hoisted_17 = { class: "flex w-full flex-col items-center justify-center space-y-3 py-2" };
var _hoisted_18 = { class: "flex w-full items-center space-x-5" };
//#endregion
//#region resources/js/components/TwoFactorSetupModal.vue
var TwoFactorSetupModal_default = /* @__PURE__ */ defineComponent({
	__name: "TwoFactorSetupModal",
	props: /* @__PURE__ */ mergeModels({
		requiresConfirmation: { type: Boolean },
		twoFactorEnabled: { type: Boolean }
	}, {
		"isOpen": { type: Boolean },
		"isOpenModifiers": {}
	}),
	emits: ["update:isOpen"],
	setup(__props) {
		const { resolvedAppearance } = useAppearance();
		const props = __props;
		const isOpen = useModel(__props, "isOpen");
		const { copy, copied } = useClipboard();
		const { qrCodeSvg, manualSetupKey, clearSetupData, fetchSetupData, errors } = useTwoFactorAuth();
		const showVerificationStep = ref(false);
		const code = ref("");
		const pinInputContainerRef = useTemplateRef("pinInputContainerRef");
		const modalConfig = computed(() => {
			if (props.twoFactorEnabled) return {
				title: "Two-factor authentication enabled",
				description: "Two-factor authentication is now enabled. Scan the QR code or enter the setup key in your authenticator app.",
				buttonText: "Close"
			};
			if (showVerificationStep.value) return {
				title: "Verify authentication code",
				description: "Enter the 6-digit code from your authenticator app",
				buttonText: "Continue"
			};
			return {
				title: "Enable two-factor authentication",
				description: "To finish enabling two-factor authentication, scan the QR code or enter the setup key in your authenticator app",
				buttonText: "Continue"
			};
		});
		const handleModalNextStep = () => {
			if (props.requiresConfirmation) {
				showVerificationStep.value = true;
				nextTick(() => {
					pinInputContainerRef.value?.querySelector("input")?.focus();
				});
				return;
			}
			clearSetupData();
			isOpen.value = false;
		};
		const resetModalState = () => {
			if (props.twoFactorEnabled) clearSetupData();
			showVerificationStep.value = false;
			code.value = "";
		};
		watch(() => isOpen.value, async (isOpen) => {
			if (!isOpen) {
				resetModalState();
				return;
			}
			if (!qrCodeSvg.value) await fetchSetupData();
		});
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(Dialog_default), {
				open: isOpen.value,
				"onUpdate:open": _cache[5] || (_cache[5] = ($event) => isOpen.value = $event)
			}, {
				default: withCtx(() => [createVNode(unref(DialogContent_default), { class: "sm:max-w-md" }, {
					default: withCtx(() => [createVNode(unref(DialogHeader_default), { class: "flex items-center justify-center" }, {
						default: withCtx(() => [
							createBaseVNode("div", _hoisted_1$1, [createBaseVNode("div", _hoisted_2$1, [
								createBaseVNode("div", _hoisted_3$1, [(openBlock(), createElementBlock(Fragment, null, renderList(5, (i) => {
									return createBaseVNode("div", {
										key: `col-${i}`,
										class: "border-r border-border last:border-r-0"
									});
								}), 64))]),
								createBaseVNode("div", _hoisted_4$1, [(openBlock(), createElementBlock(Fragment, null, renderList(5, (i) => {
									return createBaseVNode("div", {
										key: `row-${i}`,
										class: "border-b border-border last:border-b-0"
									});
								}), 64))]),
								createVNode(unref(ScanLine), { class: "relative z-20 size-6 text-foreground" })
							])]),
							createVNode(unref(DialogTitle_default), null, {
								default: withCtx(() => [createTextVNode(toDisplayString(modalConfig.value.title), 1)]),
								_: 1
							}),
							createVNode(unref(DialogDescription_default), { class: "text-center" }, {
								default: withCtx(() => [createTextVNode(toDisplayString(modalConfig.value.description), 1)]),
								_: 1
							})
						]),
						_: 1
					}), createBaseVNode("div", _hoisted_5$1, [!showVerificationStep.value ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [unref(errors)?.length ? (openBlock(), createBlock(AlertError_default, {
						key: 0,
						errors: unref(errors)
					}, null, 8, ["errors"])) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
						createBaseVNode("div", _hoisted_6$1, [createBaseVNode("div", _hoisted_7$1, [!unref(qrCodeSvg) ? (openBlock(), createElementBlock("div", _hoisted_8$1, [createVNode(unref(Spinner_default), { class: "size-6" })])) : (openBlock(), createElementBlock("div", _hoisted_9$1, [createBaseVNode("div", {
							innerHTML: unref(qrCodeSvg),
							class: "flex aspect-square size-full items-center justify-center",
							style: normalizeStyle({ filter: unref(resolvedAppearance) === "dark" ? "invert(1) brightness(1.5)" : void 0 })
						}, null, 12, _hoisted_10)]))])]),
						createBaseVNode("div", _hoisted_11, [createVNode(unref(Button_default), {
							class: "w-full",
							onClick: handleModalNextStep
						}, {
							default: withCtx(() => [createTextVNode(toDisplayString(modalConfig.value.buttonText), 1)]),
							_: 1
						})]),
						_cache[6] || (_cache[6] = createBaseVNode("div", { class: "relative flex w-full items-center justify-center" }, [createBaseVNode("div", { class: "absolute inset-0 top-1/2 h-px w-full bg-border" }), createBaseVNode("span", { class: "relative bg-card px-2 py-1" }, "or, enter the code manually")], -1)),
						createBaseVNode("div", _hoisted_12, [createBaseVNode("div", _hoisted_13, [!unref(manualSetupKey) ? (openBlock(), createElementBlock("div", _hoisted_14, [createVNode(unref(Spinner_default))])) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [createBaseVNode("input", {
							type: "text",
							readonly: "",
							value: unref(manualSetupKey),
							class: "h-full w-full bg-background p-3 text-foreground"
						}, null, 8, _hoisted_15), createBaseVNode("button", {
							onClick: _cache[0] || (_cache[0] = ($event) => unref(copy)(unref(manualSetupKey) || "")),
							class: "relative block h-auto border-l border-border px-3 hover:bg-muted"
						}, [unref(copied) ? (openBlock(), createBlock(unref(Check), {
							key: 0,
							class: "w-4 text-green-500"
						})) : (openBlock(), createBlock(unref(Copy), {
							key: 1,
							class: "w-4"
						}))])], 64))])])
					], 64))], 64)) : (openBlock(), createBlock(unref(form_default), {
						key: 1,
						action: unref(confirm).url(),
						method: "post",
						"error-bag": "confirmTwoFactorAuthentication",
						"reset-on-error": "",
						onFinish: _cache[3] || (_cache[3] = ($event) => code.value = ""),
						onSuccess: _cache[4] || (_cache[4] = ($event) => isOpen.value = false)
					}, {
						default: withCtx(({ errors, processing }) => [createBaseVNode("input", {
							type: "hidden",
							name: "code",
							value: code.value
						}, null, 8, _hoisted_16), createBaseVNode("div", {
							ref_key: "pinInputContainerRef",
							ref: pinInputContainerRef,
							class: "relative w-full space-y-3"
						}, [createBaseVNode("div", _hoisted_17, [createVNode(unref(InputOTP_default), {
							id: "otp",
							modelValue: code.value,
							"onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => code.value = $event),
							maxlength: 6,
							disabled: processing
						}, {
							default: withCtx(() => [createVNode(unref(InputOTPGroup_default), null, {
								default: withCtx(() => [(openBlock(), createElementBlock(Fragment, null, renderList(6, (index) => {
									return createVNode(unref(InputOTPSlot_default), {
										key: index,
										index: index - 1
									}, null, 8, ["index"]);
								}), 64))]),
								_: 1
							})]),
							_: 1
						}, 8, ["modelValue", "disabled"]), createVNode(InputError_default, { message: errors?.code }, null, 8, ["message"])]), createBaseVNode("div", _hoisted_18, [createVNode(unref(Button_default), {
							type: "button",
							variant: "outline",
							class: "w-auto flex-1",
							onClick: _cache[2] || (_cache[2] = ($event) => showVerificationStep.value = false),
							disabled: processing
						}, {
							default: withCtx(() => [..._cache[7] || (_cache[7] = [createTextVNode(" Back ", -1)])]),
							_: 1
						}, 8, ["disabled"]), createVNode(unref(Button_default), {
							type: "submit",
							class: "w-auto flex-1",
							disabled: processing || code.value.length < 6
						}, {
							default: withCtx(() => [..._cache[8] || (_cache[8] = [createTextVNode(" Confirm ", -1)])]),
							_: 1
						}, 8, ["disabled"])])], 512)]),
						_: 1
					}, 8, ["action"]))])]),
					_: 1
				})]),
				_: 1
			}, 8, ["open"]);
		};
	}
});
//#endregion
//#region resources/js/pages/settings/Security.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1 = { class: "space-y-6" };
var _hoisted_2 = { class: "grid gap-2" };
var _hoisted_3 = { class: "grid gap-2" };
var _hoisted_4 = { class: "grid gap-2" };
var _hoisted_5 = { class: "flex items-center gap-4" };
var _hoisted_6 = {
	key: 0,
	class: "space-y-6"
};
var _hoisted_7 = {
	key: 0,
	class: "flex flex-col items-start justify-start space-y-4"
};
var _hoisted_8 = {
	key: 1,
	class: "flex flex-col items-start justify-start space-y-4"
};
var _hoisted_9 = { class: "relative inline" };
//#endregion
//#region resources/js/pages/settings/Security.vue
var Security_default = /* @__PURE__ */ defineComponent({
	layout: { breadcrumbs: [{
		title: "Security settings",
		href: edit$1()
	}] },
	__name: "Security",
	props: {
		canManageTwoFactor: {
			type: Boolean,
			default: false
		},
		requiresConfirmation: {
			type: Boolean,
			default: false
		},
		twoFactorEnabled: {
			type: Boolean,
			default: false
		}
	},
	setup(__props) {
		const { hasSetupData, clearTwoFactorAuthData } = useTwoFactorAuth();
		const showSetupModal = ref(false);
		onUnmounted(() => clearTwoFactorAuthData());
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock(Fragment, null, [
				createVNode(unref(head_default), { title: "Security settings" }),
				_cache[12] || (_cache[12] = createBaseVNode("h1", { class: "sr-only" }, "Security settings", -1)),
				createBaseVNode("div", _hoisted_1, [createVNode(Heading_default, {
					variant: "small",
					title: "Update password",
					description: "Ensure your account is using a long, random password to stay secure"
				}), createVNode(unref(form_default), {
					action: unref(update).url(),
					method: "patch",
					options: { preserveScroll: true },
					"reset-on-success": "",
					"reset-on-error": [
						"password",
						"password_confirmation",
						"current_password"
					],
					class: "space-y-6"
				}, {
					default: withCtx(({ errors, processing }) => [
						createBaseVNode("div", _hoisted_2, [
							createVNode(unref(Label_default), { for: "current_password" }, {
								default: withCtx(() => [..._cache[3] || (_cache[3] = [createTextVNode("Current password", -1)])]),
								_: 1
							}),
							createVNode(PasswordInput_default, {
								id: "current_password",
								name: "current_password",
								class: "mt-1 block w-full",
								autocomplete: "current-password",
								placeholder: "Current password"
							}),
							createVNode(InputError_default, { message: errors.current_password }, null, 8, ["message"])
						]),
						createBaseVNode("div", _hoisted_3, [
							createVNode(unref(Label_default), { for: "password" }, {
								default: withCtx(() => [..._cache[4] || (_cache[4] = [createTextVNode("New password", -1)])]),
								_: 1
							}),
							createVNode(PasswordInput_default, {
								id: "password",
								name: "password",
								class: "mt-1 block w-full",
								autocomplete: "new-password",
								placeholder: "New password"
							}),
							createVNode(InputError_default, { message: errors.password }, null, 8, ["message"])
						]),
						createBaseVNode("div", _hoisted_4, [
							createVNode(unref(Label_default), { for: "password_confirmation" }, {
								default: withCtx(() => [..._cache[5] || (_cache[5] = [createTextVNode("Confirm password", -1)])]),
								_: 1
							}),
							createVNode(PasswordInput_default, {
								id: "password_confirmation",
								name: "password_confirmation",
								class: "mt-1 block w-full",
								autocomplete: "new-password",
								placeholder: "Confirm password"
							}),
							createVNode(InputError_default, { message: errors.password_confirmation }, null, 8, ["message"])
						]),
						createBaseVNode("div", _hoisted_5, [createVNode(unref(Button_default), {
							disabled: processing,
							"data-test": "update-password-button"
						}, {
							default: withCtx(() => [..._cache[6] || (_cache[6] = [createTextVNode(" Save password ", -1)])]),
							_: 1
						}, 8, ["disabled"])])
					]),
					_: 1
				}, 8, ["action"])]),
				__props.canManageTwoFactor ? (openBlock(), createElementBlock("div", _hoisted_6, [
					createVNode(Heading_default, {
						variant: "small",
						title: "Two-factor authentication",
						description: "Manage your two-factor authentication settings"
					}),
					!__props.twoFactorEnabled ? (openBlock(), createElementBlock("div", _hoisted_7, [_cache[9] || (_cache[9] = createBaseVNode("p", { class: "text-sm text-muted-foreground" }, " When you enable two-factor authentication, you will be prompted for a secure pin during login. This pin can be retrieved from a TOTP-supported application on your phone. ", -1)), createBaseVNode("div", null, [unref(hasSetupData) ? (openBlock(), createBlock(unref(Button_default), {
						key: 0,
						onClick: _cache[0] || (_cache[0] = ($event) => showSetupModal.value = true)
					}, {
						default: withCtx(() => [createVNode(unref(ShieldCheck)), _cache[7] || (_cache[7] = createTextVNode("Continue setup ", -1))]),
						_: 1
					})) : (openBlock(), createBlock(unref(form_default), {
						key: 1,
						action: unref(enable).url(),
						method: "post",
						onSuccess: _cache[1] || (_cache[1] = ($event) => showSetupModal.value = true)
					}, {
						default: withCtx(({ processing }) => [createVNode(unref(Button_default), {
							type: "submit",
							disabled: processing
						}, {
							default: withCtx(() => [..._cache[8] || (_cache[8] = [createTextVNode(" Enable 2FA ", -1)])]),
							_: 1
						}, 8, ["disabled"])]),
						_: 1
					}, 8, ["action"]))])])) : (openBlock(), createElementBlock("div", _hoisted_8, [
						_cache[11] || (_cache[11] = createBaseVNode("p", { class: "text-sm text-muted-foreground" }, " You will be prompted for a secure, random pin during login, which you can retrieve from the TOTP-supported application on your phone. ", -1)),
						createBaseVNode("div", _hoisted_9, [createVNode(unref(form_default), {
							action: unref(disable).url(),
							method: "post"
						}, {
							default: withCtx(({ processing }) => [createVNode(unref(Button_default), {
								variant: "destructive",
								type: "submit",
								disabled: processing
							}, {
								default: withCtx(() => [..._cache[10] || (_cache[10] = [createTextVNode(" Disable 2FA ", -1)])]),
								_: 1
							}, 8, ["disabled"])]),
							_: 1
						}, 8, ["action"])]),
						createVNode(TwoFactorRecoveryCodes_default)
					])),
					createVNode(TwoFactorSetupModal_default, {
						isOpen: showSetupModal.value,
						"onUpdate:isOpen": _cache[2] || (_cache[2] = ($event) => showSetupModal.value = $event),
						requiresConfirmation: __props.requiresConfirmation,
						twoFactorEnabled: __props.twoFactorEnabled
					}, null, 8, [
						"isOpen",
						"requiresConfirmation",
						"twoFactorEnabled"
					])
				])) : createCommentVNode("", true)
			], 64);
		};
	}
});
//#endregion
export { Security_default as default };
