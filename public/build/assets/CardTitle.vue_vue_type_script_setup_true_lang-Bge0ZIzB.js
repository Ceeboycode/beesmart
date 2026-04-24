import { d as defineComponent, o as openBlock, a as createElementBlock, n as normalizeClass, e as unref, ar as cn, S as renderSlot } from "./app-Cfclc8Ry.js";
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
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
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
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
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "CardHeader",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        "data-slot": "card-header",
        class: normalizeClass(unref(cn)("@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6", props.class))
      }, [
        renderSlot(_ctx.$slots, "default")
      ], 2);
    };
  }
});
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "CardTitle",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("h3", {
        "data-slot": "card-title",
        class: normalizeClass(unref(cn)("leading-none font-semibold", props.class))
      }, [
        renderSlot(_ctx.$slots, "default")
      ], 2);
    };
  }
});
export {
  _sfc_main$1 as _,
  _sfc_main as a,
  _sfc_main$2 as b,
  _sfc_main$3 as c
};
