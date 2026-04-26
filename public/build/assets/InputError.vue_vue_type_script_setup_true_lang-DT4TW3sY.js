import { d as defineComponent, D as withDirectives, aG as vShow, o as openBlock, a as createElementBlock, f as createBaseVNode, t as toDisplayString } from "./app-U-Wu707C.js";
const _hoisted_1 = { class: "text-sm text-red-600 dark:text-red-500" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "InputError",
  props: {
    message: {}
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return withDirectives((openBlock(), createElementBlock("div", null, [
        createBaseVNode("p", _hoisted_1, toDisplayString(__props.message), 1)
      ], 512)), [
        [vShow, __props.message]
      ]);
    };
  }
});
export {
  _sfc_main as _
};
