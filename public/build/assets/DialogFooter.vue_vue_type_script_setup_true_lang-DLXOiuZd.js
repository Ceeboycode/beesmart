import { d as defineComponent, o as openBlock, a as createElementBlock, n as normalizeClass, e as unref, av as cn, Z as renderSlot } from "./app-U-Wu707C.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "DialogFooter",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        "data-slot": "dialog-footer",
        class: normalizeClass(unref(cn)("flex flex-col-reverse gap-2 sm:flex-row sm:justify-end", props.class))
      }, [
        renderSlot(_ctx.$slots, "default")
      ], 2);
    };
  }
});
export {
  _sfc_main as _
};
