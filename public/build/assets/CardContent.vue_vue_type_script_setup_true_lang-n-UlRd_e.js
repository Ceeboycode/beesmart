import { d as defineComponent, o as openBlock, a as createElementBlock, n as normalizeClass, e as unref, av as cn, Z as renderSlot } from "./app-FZe8oXsS.js";
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "Card",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        "data-slot": "card",
        class: normalizeClass(
          unref(cn)(
            "bg-card text-card-foreground flex flex-col gap-6 rounded-2xl border py-6 shadow-sm transition-shadow hover:shadow-md",
            props.class
          )
        )
      }, [
        renderSlot(_ctx.$slots, "default")
      ], 2);
    };
  }
});
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "CardContent",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        "data-slot": "card-content",
        class: normalizeClass(unref(cn)("px-6", props.class))
      }, [
        renderSlot(_ctx.$slots, "default")
      ], 2);
    };
  }
});
export {
  _sfc_main as _,
  _sfc_main$1 as a
};
