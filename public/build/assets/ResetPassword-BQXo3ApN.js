import { d as defineComponent, p as ref, o as openBlock, a as createElementBlock, b as createVNode, e as unref, h as head_default, g as withCtx, f as createBaseVNode, i as createTextVNode, _ as _sfc_main$5, k as createBlock, l as createCommentVNode, aI as form_default, F as Fragment } from "./app-U-Wu707C.js";
import { _ as _sfc_main$3 } from "./InputError.vue_vue_type_script_setup_true_lang-DT4TW3sY.js";
import { _ as _sfc_main$4 } from "./PasswordInput.vue_vue_type_script_setup_true_lang-BKr0OoVc.js";
import { _ as _sfc_main$2 } from "./Input.vue_vue_type_script_setup_true_lang-qAY1AdtK.js";
import { _ as _sfc_main$1 } from "./Label.vue_vue_type_script_setup_true_lang-BhU3nPQR.js";
import { _ as _sfc_main$6 } from "./Spinner.vue_vue_type_script_setup_true_lang-38ooJsAU.js";
import { u as update } from "./index-BBni1YP8.js";
import "./eye-CDJpc4P-.js";
import "./index-ChTWkfRW.js";
const _hoisted_1 = { class: "grid gap-6" };
const _hoisted_2 = { class: "grid gap-2" };
const _hoisted_3 = { class: "grid gap-2" };
const _hoisted_4 = { class: "grid gap-2" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...{
    layout: {
      title: "Reset password",
      description: "Please enter your new password below"
    }
  },
  __name: "ResetPassword",
  props: {
    token: {},
    email: {}
  },
  setup(__props) {
    const props = __props;
    const inputEmail = ref(props.email);
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(Fragment, null, [
        createVNode(unref(head_default), { title: "Reset password" }),
        createVNode(unref(form_default), {
          action: unref(update).url(),
          method: "post",
          transform: (data) => ({ ...data, token: __props.token, email: __props.email }),
          "reset-on-success": ["password", "password_confirmation"]
        }, {
          default: withCtx(({ errors, processing }) => [
            createBaseVNode("div", _hoisted_1, [
              createBaseVNode("div", _hoisted_2, [
                createVNode(unref(_sfc_main$1), { for: "email" }, {
                  default: withCtx(() => [..._cache[1] || (_cache[1] = [
                    createTextVNode("Email", -1)
                  ])]),
                  _: 1
                }),
                createVNode(unref(_sfc_main$2), {
                  id: "email",
                  type: "email",
                  name: "email",
                  autocomplete: "email",
                  modelValue: inputEmail.value,
                  "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => inputEmail.value = $event),
                  class: "mt-1 block w-full",
                  readonly: ""
                }, null, 8, ["modelValue"]),
                createVNode(_sfc_main$3, {
                  message: errors.email,
                  class: "mt-2"
                }, null, 8, ["message"])
              ]),
              createBaseVNode("div", _hoisted_3, [
                createVNode(unref(_sfc_main$1), { for: "password" }, {
                  default: withCtx(() => [..._cache[2] || (_cache[2] = [
                    createTextVNode("Password", -1)
                  ])]),
                  _: 1
                }),
                createVNode(_sfc_main$4, {
                  id: "password",
                  name: "password",
                  autocomplete: "new-password",
                  class: "mt-1 block w-full",
                  autofocus: "",
                  placeholder: "Password"
                }),
                createVNode(_sfc_main$3, {
                  message: errors.password
                }, null, 8, ["message"])
              ]),
              createBaseVNode("div", _hoisted_4, [
                createVNode(unref(_sfc_main$1), { for: "password_confirmation" }, {
                  default: withCtx(() => [..._cache[3] || (_cache[3] = [
                    createTextVNode(" Confirm password ", -1)
                  ])]),
                  _: 1
                }),
                createVNode(_sfc_main$4, {
                  id: "password_confirmation",
                  name: "password_confirmation",
                  autocomplete: "new-password",
                  class: "mt-1 block w-full",
                  placeholder: "Confirm password"
                }),
                createVNode(_sfc_main$3, {
                  message: errors.password_confirmation
                }, null, 8, ["message"])
              ]),
              createVNode(unref(_sfc_main$5), {
                type: "submit",
                class: "mt-4 w-full",
                disabled: processing,
                "data-test": "reset-password-button"
              }, {
                default: withCtx(() => [
                  processing ? (openBlock(), createBlock(unref(_sfc_main$6), { key: 0 })) : createCommentVNode("", true),
                  _cache[4] || (_cache[4] = createTextVNode(" Reset password ", -1))
                ]),
                _: 2
              }, 1032, ["disabled"])
            ])
          ]),
          _: 1
        }, 8, ["action", "transform"])
      ], 64);
    };
  }
});
export {
  _sfc_main as default
};
