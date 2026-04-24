import { d as defineComponent, o as openBlock, a as createElementBlock, b as createVNode, e as unref, h as head_default, t as toDisplayString, l as createCommentVNode, f as createBaseVNode, g as withCtx, i as createTextVNode, _ as _sfc_main$4, k as createBlock, aE as form_default, aA as login, F as Fragment } from "./app-Cfclc8Ry.js";
import { _ as _sfc_main$3 } from "./InputError.vue_vue_type_script_setup_true_lang-BJsMr1lk.js";
import { _ as _sfc_main$6 } from "./TextLink.vue_vue_type_script_setup_true_lang-D4ERWR9N.js";
import { _ as _sfc_main$2 } from "./Input.vue_vue_type_script_setup_true_lang-CcGYVFRF.js";
import { _ as _sfc_main$1 } from "./Label.vue_vue_type_script_setup_true_lang-DqOQM1Tn.js";
import { _ as _sfc_main$5 } from "./Spinner.vue_vue_type_script_setup_true_lang-COZRrafs.js";
import { e as email } from "./index-Ovpv_1Oj.js";
import "./index-CZFM2vd1.js";
const _hoisted_1 = {
  key: 0,
  class: "mb-4 text-center text-sm font-medium text-green-600"
};
const _hoisted_2 = { class: "space-y-6" };
const _hoisted_3 = { class: "grid gap-2" };
const _hoisted_4 = { class: "my-6 flex items-center justify-start" };
const _hoisted_5 = { class: "space-x-1 text-center text-sm text-muted-foreground" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...{
    layout: {
      title: "Forgot password",
      description: "Enter your email to receive a password reset link"
    }
  },
  __name: "ForgotPassword",
  props: {
    status: {}
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(Fragment, null, [
        createVNode(unref(head_default), { title: "Forgot password" }),
        __props.status ? (openBlock(), createElementBlock("div", _hoisted_1, toDisplayString(__props.status), 1)) : createCommentVNode("", true),
        createBaseVNode("div", _hoisted_2, [
          createVNode(unref(form_default), {
            action: unref(email).url(),
            method: "post"
          }, {
            default: withCtx(({ errors, processing }) => [
              createBaseVNode("div", _hoisted_3, [
                createVNode(unref(_sfc_main$1), { for: "email" }, {
                  default: withCtx(() => [..._cache[0] || (_cache[0] = [
                    createTextVNode("Email address", -1)
                  ])]),
                  _: 1
                }),
                createVNode(unref(_sfc_main$2), {
                  id: "email",
                  type: "email",
                  name: "email",
                  autocomplete: "off",
                  autofocus: "",
                  placeholder: "email@example.com"
                }),
                createVNode(_sfc_main$3, {
                  message: errors.email
                }, null, 8, ["message"])
              ]),
              createBaseVNode("div", _hoisted_4, [
                createVNode(unref(_sfc_main$4), {
                  class: "w-full",
                  disabled: processing,
                  "data-test": "email-password-reset-link-button"
                }, {
                  default: withCtx(() => [
                    processing ? (openBlock(), createBlock(unref(_sfc_main$5), { key: 0 })) : createCommentVNode("", true),
                    _cache[1] || (_cache[1] = createTextVNode(" Email password reset link ", -1))
                  ]),
                  _: 2
                }, 1032, ["disabled"])
              ])
            ]),
            _: 1
          }, 8, ["action"]),
          createBaseVNode("div", _hoisted_5, [
            _cache[3] || (_cache[3] = createBaseVNode("span", null, "Or, return to", -1)),
            createVNode(_sfc_main$6, {
              href: unref(login)()
            }, {
              default: withCtx(() => [..._cache[2] || (_cache[2] = [
                createTextVNode("log in", -1)
              ])]),
              _: 1
            }, 8, ["href"])
          ])
        ])
      ], 64);
    };
  }
});
export {
  _sfc_main as default
};
