import { C as createCommentVNode, D as createVNode, E as createTextVNode, O as defineComponent, S as createBlock, Tt as toDisplayString, U as openBlock, _ as Fragment, a as head_default, bt as unref, i as form_default, nt as withCtx, w as createElementBlock, x as createBaseVNode } from "./wayfinder-BXUQpGRW.js";
import { t as Label_default } from "./Label-7plLdAFO.js";
import { t as Spinner_default } from "./Spinner-BK65VBUt.js";
import { t as Input_default } from "./Input-DlX67NC6.js";
import { S as Button_default, p as login } from "./app-DSvgGTY4.js";
import { t as InputError_default } from "./InputError-Bml3M7fg.js";
import { t as TextLink_default } from "./TextLink-DZpTTDxA.js";
import { t as email } from "./password-BbwQQMC6.js";
//#region resources/js/pages/auth/ForgotPassword.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1 = {
	key: 0,
	class: "mb-4 text-center text-sm font-medium text-green-600"
};
var _hoisted_2 = { class: "space-y-6" };
var _hoisted_3 = { class: "grid gap-2" };
var _hoisted_4 = { class: "my-6 flex items-center justify-start" };
var _hoisted_5 = { class: "space-x-1 text-center text-sm text-muted-foreground" };
//#endregion
//#region resources/js/pages/auth/ForgotPassword.vue
var ForgotPassword_default = /* @__PURE__ */ defineComponent({
	layout: {
		title: "Forgot password",
		description: "Enter your email to receive a password reset link"
	},
	__name: "ForgotPassword",
	props: { status: {} },
	setup(__props) {
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock(Fragment, null, [
				createVNode(unref(head_default), { title: "Forgot password" }),
				__props.status ? (openBlock(), createElementBlock("div", _hoisted_1, toDisplayString(__props.status), 1)) : createCommentVNode("", true),
				createBaseVNode("div", _hoisted_2, [createVNode(unref(form_default), {
					action: unref(email).url(),
					method: "post"
				}, {
					default: withCtx(({ errors, processing }) => [createBaseVNode("div", _hoisted_3, [
						createVNode(unref(Label_default), { for: "email" }, {
							default: withCtx(() => [..._cache[0] || (_cache[0] = [createTextVNode("Email address", -1)])]),
							_: 1
						}),
						createVNode(unref(Input_default), {
							id: "email",
							type: "email",
							name: "email",
							autocomplete: "off",
							autofocus: "",
							placeholder: "email@example.com"
						}),
						createVNode(InputError_default, { message: errors.email }, null, 8, ["message"])
					]), createBaseVNode("div", _hoisted_4, [createVNode(unref(Button_default), {
						class: "w-full",
						disabled: processing,
						"data-test": "email-password-reset-link-button"
					}, {
						default: withCtx(() => [processing ? (openBlock(), createBlock(unref(Spinner_default), { key: 0 })) : createCommentVNode("", true), _cache[1] || (_cache[1] = createTextVNode(" Email password reset link ", -1))]),
						_: 2
					}, 1032, ["disabled"])])]),
					_: 1
				}, 8, ["action"]), createBaseVNode("div", _hoisted_5, [_cache[3] || (_cache[3] = createBaseVNode("span", null, "Or, return to", -1)), createVNode(TextLink_default, { href: unref(login)() }, {
					default: withCtx(() => [..._cache[2] || (_cache[2] = [createTextVNode("log in", -1)])]),
					_: 1
				}, 8, ["href"])])])
			], 64);
		};
	}
});
//#endregion
export { ForgotPassword_default as default };
