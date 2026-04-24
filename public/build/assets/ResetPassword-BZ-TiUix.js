import { C as createCommentVNode, D as createVNode, E as createTextVNode, O as defineComponent, S as createBlock, U as openBlock, _ as Fragment, a as head_default, bt as unref, ft as ref, i as form_default, nt as withCtx, w as createElementBlock, x as createBaseVNode } from "./wayfinder-BXUQpGRW.js";
import { t as Label_default } from "./Label-7plLdAFO.js";
import { t as PasswordInput_default } from "./PasswordInput-BUScYeet.js";
import { t as Spinner_default } from "./Spinner-BK65VBUt.js";
import { t as Input_default } from "./Input-DlX67NC6.js";
import { S as Button_default } from "./app-DSvgGTY4.js";
import { t as InputError_default } from "./InputError-Bml3M7fg.js";
import { r as update } from "./password-BbwQQMC6.js";
//#region resources/js/pages/auth/ResetPassword.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1 = { class: "grid gap-6" };
var _hoisted_2 = { class: "grid gap-2" };
var _hoisted_3 = { class: "grid gap-2" };
var _hoisted_4 = { class: "grid gap-2" };
//#endregion
//#region resources/js/pages/auth/ResetPassword.vue
var ResetPassword_default = /* @__PURE__ */ defineComponent({
	layout: {
		title: "Reset password",
		description: "Please enter your new password below"
	},
	__name: "ResetPassword",
	props: {
		token: {},
		email: {}
	},
	setup(__props) {
		const inputEmail = ref(__props.email);
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock(Fragment, null, [createVNode(unref(head_default), { title: "Reset password" }), createVNode(unref(form_default), {
				action: unref(update).url(),
				method: "post",
				transform: (data) => ({
					...data,
					token: __props.token,
					email: __props.email
				}),
				"reset-on-success": ["password", "password_confirmation"]
			}, {
				default: withCtx(({ errors, processing }) => [createBaseVNode("div", _hoisted_1, [
					createBaseVNode("div", _hoisted_2, [
						createVNode(unref(Label_default), { for: "email" }, {
							default: withCtx(() => [..._cache[1] || (_cache[1] = [createTextVNode("Email", -1)])]),
							_: 1
						}),
						createVNode(unref(Input_default), {
							id: "email",
							type: "email",
							name: "email",
							autocomplete: "email",
							modelValue: inputEmail.value,
							"onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => inputEmail.value = $event),
							class: "mt-1 block w-full",
							readonly: ""
						}, null, 8, ["modelValue"]),
						createVNode(InputError_default, {
							message: errors.email,
							class: "mt-2"
						}, null, 8, ["message"])
					]),
					createBaseVNode("div", _hoisted_3, [
						createVNode(unref(Label_default), { for: "password" }, {
							default: withCtx(() => [..._cache[2] || (_cache[2] = [createTextVNode("Password", -1)])]),
							_: 1
						}),
						createVNode(PasswordInput_default, {
							id: "password",
							name: "password",
							autocomplete: "new-password",
							class: "mt-1 block w-full",
							autofocus: "",
							placeholder: "Password"
						}),
						createVNode(InputError_default, { message: errors.password }, null, 8, ["message"])
					]),
					createBaseVNode("div", _hoisted_4, [
						createVNode(unref(Label_default), { for: "password_confirmation" }, {
							default: withCtx(() => [..._cache[3] || (_cache[3] = [createTextVNode(" Confirm password ", -1)])]),
							_: 1
						}),
						createVNode(PasswordInput_default, {
							id: "password_confirmation",
							name: "password_confirmation",
							autocomplete: "new-password",
							class: "mt-1 block w-full",
							placeholder: "Confirm password"
						}),
						createVNode(InputError_default, { message: errors.password_confirmation }, null, 8, ["message"])
					]),
					createVNode(unref(Button_default), {
						type: "submit",
						class: "mt-4 w-full",
						disabled: processing,
						"data-test": "reset-password-button"
					}, {
						default: withCtx(() => [processing ? (openBlock(), createBlock(unref(Spinner_default), { key: 0 })) : createCommentVNode("", true), _cache[4] || (_cache[4] = createTextVNode(" Reset password ", -1))]),
						_: 2
					}, 1032, ["disabled"])
				])]),
				_: 1
			}, 8, ["action", "transform"])], 64);
		};
	}
});
//#endregion
export { ResetPassword_default as default };
