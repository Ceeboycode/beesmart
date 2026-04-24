import { _ as _sfc_main$1 } from "./Input.vue_vue_type_script_setup_true_lang-CcGYVFRF.js";
import { c as createLucideIcon, d as defineComponent, aT as useTemplateRef, o as openBlock, a as createElementBlock, b as createVNode, e as unref, U as mergeProps, ar as cn, f as createBaseVNode, n as normalizeClass, k as createBlock, p as ref } from "./app-Cfclc8Ry.js";
/**
 * @license lucide-vue-next v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const EyeOff = createLucideIcon("EyeOffIcon", [
  [
    "path",
    {
      d: "M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49",
      key: "ct8e1f"
    }
  ],
  ["path", { d: "M14.084 14.158a3 3 0 0 1-4.242-4.242", key: "151rxh" }],
  [
    "path",
    {
      d: "M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143",
      key: "13bj9a"
    }
  ],
  ["path", { d: "m2 2 20 20", key: "1ooewy" }]
]);
/**
 * @license lucide-vue-next v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Eye = createLucideIcon("EyeIcon", [
  [
    "path",
    {
      d: "M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",
      key: "1nclc0"
    }
  ],
  ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }]
]);
const _hoisted_1 = { class: "relative" };
const _hoisted_2 = ["aria-label"];
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...{ inheritAttrs: false },
  __name: "PasswordInput",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(__props, { expose: __expose }) {
    const props = __props;
    const showPassword = ref(false);
    const inputRef = useTemplateRef("inputRef");
    __expose({
      $el: inputRef,
      focus: () => {
        var _a, _b;
        return (_b = (_a = inputRef.value) == null ? void 0 : _a.$el) == null ? void 0 : _b.focus();
      }
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createVNode(unref(_sfc_main$1), mergeProps({
          ref_key: "inputRef",
          ref: inputRef,
          type: showPassword.value ? "text" : "password",
          class: unref(cn)("pr-10", props.class)
        }, _ctx.$attrs), null, 16, ["type", "class"]),
        createBaseVNode("button", {
          type: "button",
          onClick: _cache[0] || (_cache[0] = ($event) => showPassword.value = !showPassword.value),
          class: normalizeClass(
            unref(cn)(
              "absolute inset-y-0 right-0 flex items-center rounded-r-md px-3 text-muted-foreground hover:text-foreground focus-visible:ring-[3px] focus-visible:ring-ring focus-visible:outline-none"
            )
          ),
          "aria-label": showPassword.value ? "Hide password" : "Show password",
          tabindex: -1
        }, [
          showPassword.value ? (openBlock(), createBlock(unref(EyeOff), {
            key: 0,
            class: "size-4"
          })) : (openBlock(), createBlock(unref(Eye), {
            key: 1,
            class: "size-4"
          }))
        ], 10, _hoisted_2)
      ]);
    };
  }
});
export {
  EyeOff as E,
  _sfc_main as _,
  Eye as a
};
