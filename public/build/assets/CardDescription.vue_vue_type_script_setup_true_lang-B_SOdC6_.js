import { d as defineComponent, o as openBlock, a as createElementBlock, n as normalizeClass, e as unref, ar as cn, S as renderSlot } from "./app-Cfclc8Ry.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "CardDescription",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("p", {
        "data-slot": "card-description",
        class: normalizeClass(unref(cn)("text-muted-foreground text-sm", props.class))
      }, [
        renderSlot(_ctx.$slots, "default")
      ], 2);
    };
  }
});
export {
  _sfc_main as _
};
