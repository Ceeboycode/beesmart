import { C as createCommentVNode, D as createVNode, E as createTextVNode, O as defineComponent, S as createBlock, U as openBlock, _ as Fragment, a as head_default, bt as unref, i as form_default, nt as withCtx, w as createElementBlock, x as createBaseVNode } from "./wayfinder-BXUQpGRW.js";
import { t as Label_default } from "./Label-7plLdAFO.js";
import { t as PasswordInput_default } from "./PasswordInput-BUScYeet.js";
import { t as Spinner_default } from "./Spinner-BK65VBUt.js";
import { S as Button_default } from "./app-DSvgGTY4.js";
import { t as InputError_default } from "./InputError-Bml3M7fg.js";
import { n as store } from "./confirm-BxnFS0_-.js";
//#region resources/js/pages/auth/ConfirmPassword.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1 = { class: "space-y-6" };
var _hoisted_2 = { class: "grid gap-2" };
var _hoisted_3 = { class: "flex items-center" };
//#endregion
//#region resources/js/pages/auth/ConfirmPassword.vue
var ConfirmPassword_default = /* @__PURE__ */ defineComponent({
	layout: {
		title: "Confirm your password",
		description: "This is a secure area of the application. Please confirm your password before continuing."
	},
	__name: "ConfirmPassword",
	setup(__props) {
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock(Fragment, null, [createVNode(unref(head_default), { title: "Confirm password" }), createVNode(unref(form_default), {
				action: unref(store).url(),
				method: "post",
				"reset-on-success": ""
			}, {
				default: withCtx(({ errors, processing }) => [createBaseVNode("div", _hoisted_1, [createBaseVNode("div", _hoisted_2, [
					createVNode(unref(Label_default), { htmlFor: "password" }, {
						default: withCtx(() => [..._cache[0] || (_cache[0] = [createTextVNode("Password", -1)])]),
						_: 1
					}),
					createVNode(PasswordInput_default, {
						id: "password",
						name: "password",
						class: "mt-1 block w-full",
						required: "",
						autocomplete: "current-password",
						autofocus: ""
					}),
					createVNode(InputError_default, { message: errors.password }, null, 8, ["message"])
				]), createBaseVNode("div", _hoisted_3, [createVNode(unref(Button_default), {
					class: "w-full",
					disabled: processing,
					"data-test": "confirm-password-button"
				}, {
					default: withCtx(() => [processing ? (openBlock(), createBlock(unref(Spinner_default), { key: 0 })) : createCommentVNode("", true), _cache[1] || (_cache[1] = createTextVNode(" Confirm password ", -1))]),
					_: 2
				}, 1032, ["disabled"])])])]),
				_: 1
			}, 8, ["action"])], 64);
		};
	}
});
//#endregion
export { ConfirmPassword_default as default };
