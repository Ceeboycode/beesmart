import { d as defineComponent, a3 as watchEffect, aN as setLayoutProps, o as openBlock, a as createElementBlock, b as createVNode, e as unref, h as head_default, f as createBaseVNode, k as createBlock, g as withCtx, F as Fragment, r as renderList, _ as _sfc_main$5, i as createTextVNode, t as toDisplayString, aE as form_default, m as computed, p as ref } from "./app-Cfclc8Ry.js";
import { _ as _sfc_main$4 } from "./InputError.vue_vue_type_script_setup_true_lang-BJsMr1lk.js";
import { _ as _sfc_main$6 } from "./Input.vue_vue_type_script_setup_true_lang-CcGYVFRF.js";
import { _ as _sfc_main$1, a as _sfc_main$2, b as _sfc_main$3 } from "./InputOTPSlot.vue_vue_type_script_setup_true_lang-CIMfoDHF.js";
import { s as store } from "./index-CPkCH_p0.js";
const _hoisted_1 = { class: "space-y-6" };
const _hoisted_2 = ["value"];
const _hoisted_3 = { class: "flex flex-col items-center justify-center space-y-3 text-center" };
const _hoisted_4 = { class: "flex w-full items-center justify-center" };
const _hoisted_5 = { class: "text-center text-sm text-muted-foreground" };
const _hoisted_6 = ["onClick"];
const _hoisted_7 = { class: "text-center text-sm text-muted-foreground" };
const _hoisted_8 = ["onClick"];
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "TwoFactorChallenge",
  setup(__props) {
    const authConfigContent = computed(() => {
      if (showRecoveryInput.value) {
        return {
          title: "Recovery code",
          description: "Please confirm access to your account by entering one of your emergency recovery codes.",
          buttonText: "login using an authentication code"
        };
      }
      return {
        title: "Authentication code",
        description: "Enter the authentication code provided by your authenticator application.",
        buttonText: "login using a recovery code"
      };
    });
    watchEffect(() => {
      setLayoutProps({
        title: authConfigContent.value.title,
        description: authConfigContent.value.description
      });
    });
    const showRecoveryInput = ref(false);
    const toggleRecoveryMode = (clearErrors) => {
      showRecoveryInput.value = !showRecoveryInput.value;
      clearErrors();
      code.value = "";
    };
    const code = ref("");
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(Fragment, null, [
        createVNode(unref(head_default), { title: "Two-factor authentication" }),
        createBaseVNode("div", _hoisted_1, [
          !showRecoveryInput.value ? (openBlock(), createBlock(unref(form_default), {
            key: 0,
            action: unref(store).url(),
            method: "post",
            class: "space-y-4",
            "reset-on-error": "",
            onError: _cache[1] || (_cache[1] = ($event) => code.value = "")
          }, {
            default: withCtx(({ errors, processing, clearErrors }) => [
              createBaseVNode("input", {
                type: "hidden",
                name: "code",
                value: code.value
              }, null, 8, _hoisted_2),
              createBaseVNode("div", _hoisted_3, [
                createBaseVNode("div", _hoisted_4, [
                  createVNode(unref(_sfc_main$1), {
                    id: "otp",
                    modelValue: code.value,
                    "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => code.value = $event),
                    maxlength: 6,
                    disabled: processing,
                    autofocus: ""
                  }, {
                    default: withCtx(() => [
                      createVNode(unref(_sfc_main$2), null, {
                        default: withCtx(() => [
                          (openBlock(), createElementBlock(Fragment, null, renderList(6, (index) => {
                            return createVNode(unref(_sfc_main$3), {
                              key: index,
                              index: index - 1
                            }, null, 8, ["index"]);
                          }), 64))
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }, 8, ["modelValue", "disabled"])
                ]),
                createVNode(_sfc_main$4, {
                  message: errors.code
                }, null, 8, ["message"])
              ]),
              createVNode(unref(_sfc_main$5), {
                type: "submit",
                class: "w-full",
                disabled: processing
              }, {
                default: withCtx(() => [..._cache[2] || (_cache[2] = [
                  createTextVNode("Continue", -1)
                ])]),
                _: 1
              }, 8, ["disabled"]),
              createBaseVNode("div", _hoisted_5, [
                _cache[3] || (_cache[3] = createBaseVNode("span", null, "or you can ", -1)),
                createBaseVNode("button", {
                  type: "button",
                  class: "text-foreground underline decoration-neutral-300 underline-offset-4 transition-colors duration-300 ease-out hover:decoration-current! dark:decoration-neutral-500",
                  onClick: () => toggleRecoveryMode(clearErrors)
                }, toDisplayString(authConfigContent.value.buttonText), 9, _hoisted_6)
              ])
            ]),
            _: 1
          }, 8, ["action"])) : (openBlock(), createBlock(unref(form_default), {
            key: 1,
            action: unref(store).url(),
            method: "post",
            class: "space-y-4",
            "reset-on-error": ""
          }, {
            default: withCtx(({ errors, processing, clearErrors }) => [
              createVNode(unref(_sfc_main$6), {
                name: "recovery_code",
                type: "text",
                placeholder: "Enter recovery code",
                autofocus: showRecoveryInput.value,
                required: ""
              }, null, 8, ["autofocus"]),
              createVNode(_sfc_main$4, {
                message: errors.recovery_code
              }, null, 8, ["message"]),
              createVNode(unref(_sfc_main$5), {
                type: "submit",
                class: "w-full",
                disabled: processing
              }, {
                default: withCtx(() => [..._cache[4] || (_cache[4] = [
                  createTextVNode("Continue", -1)
                ])]),
                _: 1
              }, 8, ["disabled"]),
              createBaseVNode("div", _hoisted_7, [
                _cache[5] || (_cache[5] = createBaseVNode("span", null, "or you can ", -1)),
                createBaseVNode("button", {
                  type: "button",
                  class: "text-foreground underline decoration-neutral-300 underline-offset-4 transition-colors duration-300 ease-out hover:decoration-current! dark:decoration-neutral-500",
                  onClick: () => toggleRecoveryMode(clearErrors)
                }, toDisplayString(authConfigContent.value.buttonText), 9, _hoisted_8)
              ])
            ]),
            _: 1
          }, 8, ["action"]))
        ])
      ], 64);
    };
  }
});
export {
  _sfc_main as default
};
