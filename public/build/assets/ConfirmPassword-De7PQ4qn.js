import { d as defineComponent, o as openBlock, a as createElementBlock, b as createVNode, e as unref, h as head_default, g as withCtx, f as createBaseVNode, i as createTextVNode, _ as _sfc_main$4, k as createBlock, l as createCommentVNode, aL as form_default, F as Fragment } from "./app-FZe8oXsS.js";
import { _ as _sfc_main$3 } from "./InputError.vue_vue_type_script_setup_true_lang-Bvs6ypzk.js";
import { _ as _sfc_main$2 } from "./PasswordInput.vue_vue_type_script_setup_true_lang-CT6GLlSi.js";
import { _ as _sfc_main$1 } from "./Label.vue_vue_type_script_setup_true_lang-C5pjpvK2.js";
import { _ as _sfc_main$5 } from "./Spinner.vue_vue_type_script_setup_true_lang-DQEO3KIf.js";
import { s as store } from "./index-Cu9EvCaP.js";
import "./Input.vue_vue_type_script_setup_true_lang-CWD3gtEB.js";
import "./eye-CMie7mkq.js";
const _hoisted_1 = { class: "space-y-6" };
const _hoisted_2 = { class: "grid gap-2" };
const _hoisted_3 = { class: "flex items-center" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...{
    layout: {
      title: "Confirm your password",
      description: "This is a secure area of the application. Please confirm your password before continuing."
    }
  },
  __name: "ConfirmPassword",
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(Fragment, null, [
        createVNode(unref(head_default), { title: "Confirm password" }),
        createVNode(unref(form_default), {
          action: unref(store).url(),
          method: "post",
          "reset-on-success": ""
        }, {
          default: withCtx(({ errors, processing }) => [
            createBaseVNode("div", _hoisted_1, [
              createBaseVNode("div", _hoisted_2, [
                createVNode(unref(_sfc_main$1), { htmlFor: "password" }, {
                  default: withCtx(() => [..._cache[0] || (_cache[0] = [
                    createTextVNode("Password", -1)
                  ])]),
                  _: 1
                }),
                createVNode(_sfc_main$2, {
                  id: "password",
                  name: "password",
                  class: "mt-1 block w-full",
                  required: "",
                  autocomplete: "current-password",
                  autofocus: ""
                }),
                createVNode(_sfc_main$3, {
                  message: errors.password
                }, null, 8, ["message"])
              ]),
              createBaseVNode("div", _hoisted_3, [
                createVNode(unref(_sfc_main$4), {
                  class: "w-full",
                  disabled: processing,
                  "data-test": "confirm-password-button"
                }, {
                  default: withCtx(() => [
                    processing ? (openBlock(), createBlock(unref(_sfc_main$5), { key: 0 })) : createCommentVNode("", true),
                    _cache[1] || (_cache[1] = createTextVNode(" Confirm password ", -1))
                  ]),
                  _: 2
                }, 1032, ["disabled"])
              ])
            ])
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
