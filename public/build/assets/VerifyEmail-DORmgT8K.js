import { C as createCommentVNode, D as createVNode, E as createTextVNode, O as defineComponent, S as createBlock, U as openBlock, _ as Fragment, a as head_default, bt as unref, i as form_default, nt as withCtx, w as createElementBlock } from "./wayfinder-BXUQpGRW.js";
import { t as Spinner_default } from "./Spinner-BK65VBUt.js";
import { S as Button_default, m as logout } from "./app-DSvgGTY4.js";
import { t as TextLink_default } from "./TextLink-DZpTTDxA.js";
import { t as send } from "./verification-9wNxMeBL.js";
//#region resources/js/pages/auth/VerifyEmail.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1 = {
	key: 0,
	class: "mb-4 text-center text-sm font-medium text-green-600"
};
//#endregion
//#region resources/js/pages/auth/VerifyEmail.vue
var VerifyEmail_default = /* @__PURE__ */ defineComponent({
	layout: {
		title: "Verify email",
		description: "Please verify your email address by clicking on the link we just emailed to you."
	},
	__name: "VerifyEmail",
	props: { status: {} },
	setup(__props) {
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock(Fragment, null, [
				createVNode(unref(head_default), { title: "Email verification" }),
				__props.status === "verification-link-sent" ? (openBlock(), createElementBlock("div", _hoisted_1, " A new verification link has been sent to the email address you provided during registration. ")) : createCommentVNode("", true),
				createVNode(unref(form_default), {
					action: unref(send).url(),
					method: "post",
					class: "space-y-6 text-center"
				}, {
					default: withCtx(({ processing }) => [createVNode(unref(Button_default), {
						disabled: processing,
						variant: "secondary"
					}, {
						default: withCtx(() => [processing ? (openBlock(), createBlock(unref(Spinner_default), { key: 0 })) : createCommentVNode("", true), _cache[0] || (_cache[0] = createTextVNode(" Resend verification email ", -1))]),
						_: 2
					}, 1032, ["disabled"]), createVNode(TextLink_default, {
						href: unref(logout)(),
						as: "button",
						class: "mx-auto block text-sm"
					}, {
						default: withCtx(() => [..._cache[1] || (_cache[1] = [createTextVNode(" Log out ", -1)])]),
						_: 1
					}, 8, ["href"])]),
					_: 1
				}, 8, ["action"])
			], 64);
		};
	}
});
//#endregion
export { VerifyEmail_default as default };
