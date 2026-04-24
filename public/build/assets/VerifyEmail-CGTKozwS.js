import { d as defineComponent, o as openBlock, a as createElementBlock, b as createVNode, e as unref, h as head_default, l as createCommentVNode, g as withCtx, _ as _sfc_main$1, k as createBlock, i as createTextVNode, aO as logout, aE as form_default, F as Fragment } from "./app-Cfclc8Ry.js";
import { _ as _sfc_main$3 } from "./TextLink.vue_vue_type_script_setup_true_lang-D4ERWR9N.js";
import { _ as _sfc_main$2 } from "./Spinner.vue_vue_type_script_setup_true_lang-COZRrafs.js";
import { s as send } from "./index-Jb_-L3nd.js";
const _hoisted_1 = {
  key: 0,
  class: "mb-4 text-center text-sm font-medium text-green-600"
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...{
    layout: {
      title: "Verify email",
      description: "Please verify your email address by clicking on the link we just emailed to you."
    }
  },
  __name: "VerifyEmail",
  props: {
    status: {}
  },
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
          default: withCtx(({ processing }) => [
            createVNode(unref(_sfc_main$1), {
              disabled: processing,
              variant: "secondary"
            }, {
              default: withCtx(() => [
                processing ? (openBlock(), createBlock(unref(_sfc_main$2), { key: 0 })) : createCommentVNode("", true),
                _cache[0] || (_cache[0] = createTextVNode(" Resend verification email ", -1))
              ]),
              _: 2
            }, 1032, ["disabled"]),
            createVNode(_sfc_main$3, {
              href: unref(logout)(),
              as: "button",
              class: "mx-auto block text-sm"
            }, {
              default: withCtx(() => [..._cache[1] || (_cache[1] = [
                createTextVNode(" Log out ", -1)
              ])]),
              _: 1
            }, 8, ["href"])
          ]),
          _: 1
        }, 8, ["action"])
      ], 64);
    };
  }
});
export {
  _sfc_main as default
};
