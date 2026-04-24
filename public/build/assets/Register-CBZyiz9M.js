import { D as createVNode, E as createTextVNode, O as defineComponent, U as openBlock, _ as Fragment, a as head_default, bt as unref, i as form_default, n as queryParams, nt as withCtx, w as createElementBlock, x as createBaseVNode } from "./wayfinder-BXUQpGRW.js";
import { t as Label_default } from "./Label-7plLdAFO.js";
import { t as PasswordInput_default } from "./PasswordInput-BUScYeet.js";
import { t as Input_default } from "./Input-DlX67NC6.js";
import { S as Button_default, i as useLoading, p as login } from "./app-DSvgGTY4.js";
import { t as InputError_default } from "./InputError-Bml3M7fg.js";
import { t as TextLink_default } from "./TextLink-DZpTTDxA.js";
//#region resources/js/routes/register/index.ts
/**
* @see \Laravel\Fortify\Http\Controllers\RegisteredUserController::store
* @see vendor/laravel/fortify/src/Http/Controllers/RegisteredUserController.php:53
* @route '/register'
*/
var store = (options) => ({
	url: store.url(options),
	method: "post"
});
store.definition = {
	methods: ["post"],
	url: "/register"
};
/**
* @see \Laravel\Fortify\Http\Controllers\RegisteredUserController::store
* @see vendor/laravel/fortify/src/Http/Controllers/RegisteredUserController.php:53
* @route '/register'
*/
store.url = (options) => {
	return store.definition.url + queryParams(options);
};
/**
* @see \Laravel\Fortify\Http\Controllers\RegisteredUserController::store
* @see vendor/laravel/fortify/src/Http/Controllers/RegisteredUserController.php:53
* @route '/register'
*/
store.post = (options) => ({
	url: store.url(options),
	method: "post"
});
/**
* @see \Laravel\Fortify\Http\Controllers\RegisteredUserController::store
* @see vendor/laravel/fortify/src/Http/Controllers/RegisteredUserController.php:53
* @route '/register'
*/
var storeForm = (options) => ({
	action: store.url(options),
	method: "post"
});
/**
* @see \Laravel\Fortify\Http\Controllers\RegisteredUserController::store
* @see vendor/laravel/fortify/src/Http/Controllers/RegisteredUserController.php:53
* @route '/register'
*/
storeForm.post = (options) => ({
	action: store.url(options),
	method: "post"
});
store.form = storeForm;
Object.assign(store, store);
//#endregion
//#region resources/js/pages/auth/Register.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1 = { class: "grid gap-6" };
var _hoisted_2 = { class: "grid gap-2" };
var _hoisted_3 = { class: "grid gap-2" };
var _hoisted_4 = { class: "grid gap-2" };
var _hoisted_5 = { class: "grid gap-2" };
var _hoisted_6 = { class: "text-center text-sm text-muted-foreground" };
//#endregion
//#region resources/js/pages/auth/Register.vue
var Register_default = /* @__PURE__ */ defineComponent({
	layout: {
		title: "Create an account",
		description: "Enter your details below to create your account"
	},
	__name: "Register",
	setup(__props) {
		const { show, hide } = useLoading();
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock(Fragment, null, [createVNode(unref(head_default), { title: "Register" }), createVNode(unref(form_default), {
				action: unref(store).url(),
				method: "post",
				"reset-on-success": ["password", "password_confirmation"],
				onStart: _cache[0] || (_cache[0] = ($event) => unref(show)("Creating your account...")),
				onFinish: _cache[1] || (_cache[1] = ($event) => unref(hide)()),
				class: "flex flex-col gap-6"
			}, {
				default: withCtx(({ errors, processing }) => [createBaseVNode("div", _hoisted_1, [
					createBaseVNode("div", _hoisted_2, [
						createVNode(unref(Label_default), { for: "name" }, {
							default: withCtx(() => [..._cache[2] || (_cache[2] = [createTextVNode("Name", -1)])]),
							_: 1
						}),
						createVNode(unref(Input_default), {
							id: "name",
							type: "text",
							required: "",
							autofocus: "",
							tabindex: 1,
							autocomplete: "name",
							name: "name",
							placeholder: "Full name"
						}),
						createVNode(InputError_default, { message: errors.name }, null, 8, ["message"])
					]),
					createBaseVNode("div", _hoisted_3, [
						createVNode(unref(Label_default), { for: "email" }, {
							default: withCtx(() => [..._cache[3] || (_cache[3] = [createTextVNode("Email address", -1)])]),
							_: 1
						}),
						createVNode(unref(Input_default), {
							id: "email",
							type: "email",
							required: "",
							tabindex: 2,
							autocomplete: "email",
							name: "email",
							placeholder: "email@example.com"
						}),
						createVNode(InputError_default, { message: errors.email }, null, 8, ["message"])
					]),
					createBaseVNode("div", _hoisted_4, [
						createVNode(unref(Label_default), { for: "password" }, {
							default: withCtx(() => [..._cache[4] || (_cache[4] = [createTextVNode("Password", -1)])]),
							_: 1
						}),
						createVNode(PasswordInput_default, {
							id: "password",
							required: "",
							tabindex: 3,
							autocomplete: "new-password",
							name: "password",
							placeholder: "Password"
						}),
						createVNode(InputError_default, { message: errors.password }, null, 8, ["message"])
					]),
					createBaseVNode("div", _hoisted_5, [
						createVNode(unref(Label_default), { for: "password_confirmation" }, {
							default: withCtx(() => [..._cache[5] || (_cache[5] = [createTextVNode("Confirm password", -1)])]),
							_: 1
						}),
						createVNode(PasswordInput_default, {
							id: "password_confirmation",
							required: "",
							tabindex: 4,
							autocomplete: "new-password",
							name: "password_confirmation",
							placeholder: "Confirm password"
						}),
						createVNode(InputError_default, { message: errors.password_confirmation }, null, 8, ["message"])
					]),
					createVNode(unref(Button_default), {
						type: "submit",
						class: "mt-2 w-full",
						tabindex: "5",
						disabled: processing,
						"data-test": "register-user-button"
					}, {
						default: withCtx(() => [..._cache[6] || (_cache[6] = [createTextVNode(" Create account ", -1)])]),
						_: 1
					}, 8, ["disabled"])
				]), createBaseVNode("div", _hoisted_6, [_cache[8] || (_cache[8] = createTextVNode(" Already have an account? ", -1)), createVNode(TextLink_default, {
					href: unref(login)(),
					class: "underline underline-offset-4",
					tabindex: 6
				}, {
					default: withCtx(() => [..._cache[7] || (_cache[7] = [createTextVNode("Log in", -1)])]),
					_: 1
				}, 8, ["href"])])]),
				_: 1
			}, 8, ["action"])], 64);
		};
	}
});
//#endregion
export { Register_default as default };
