import { d as defineComponent, ae as useForwardPropsEmits, o as openBlock, k as createBlock, e as unref, b6 as DialogRoot_default, U as mergeProps, g as withCtx, S as renderSlot, af as normalizeProps, ag as guardReactiveProps, aq as reactiveOmit, b7 as DialogOverlay_default, ar as cn, b8 as DialogPortal_default, b as createVNode, b9 as DialogContent_default, aS as DialogClose_default, ba as X, f as createBaseVNode, l as createCommentVNode, Y as useForwardProps, bb as DialogDescription_default, a as createElementBlock, n as normalizeClass, bc as DialogTitle_default } from "./app-Cfclc8Ry.js";
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "Dialog",
  props: {
    open: { type: Boolean },
    defaultOpen: { type: Boolean },
    modal: { type: Boolean }
  },
  emits: ["update:open"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const forwarded = useForwardPropsEmits(props, emits);
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(DialogRoot_default), mergeProps({ "data-slot": "dialog" }, unref(forwarded)), {
        default: withCtx((slotProps) => [
          renderSlot(_ctx.$slots, "default", normalizeProps(guardReactiveProps(slotProps)))
        ]),
        _: 3
      }, 16);
    };
  }
});
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "DialogOverlay",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(__props) {
    const props = __props;
    const delegatedProps = reactiveOmit(props, "class");
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(DialogOverlay_default), mergeProps({ "data-slot": "dialog-overlay" }, unref(delegatedProps), {
        class: unref(cn)("data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/80", props.class)
      }), {
        default: withCtx(() => [
          renderSlot(_ctx.$slots, "default")
        ]),
        _: 3
      }, 16, ["class"]);
    };
  }
});
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  ...{
    inheritAttrs: false
  },
  __name: "DialogContent",
  props: {
    forceMount: { type: Boolean },
    disableOutsidePointerEvents: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] },
    showCloseButton: { type: Boolean, default: true }
  },
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "openAutoFocus", "closeAutoFocus"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const delegatedProps = reactiveOmit(props, "class");
    const forwarded = useForwardPropsEmits(delegatedProps, emits);
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(DialogPortal_default), null, {
        default: withCtx(() => [
          createVNode(_sfc_main$4),
          createVNode(unref(DialogContent_default), mergeProps({ "data-slot": "dialog-content" }, { ..._ctx.$attrs, ...unref(forwarded) }, {
            class: unref(cn)(
              "bg-background data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border p-6 shadow-lg duration-200 sm:max-w-lg",
              props.class
            )
          }), {
            default: withCtx(() => [
              renderSlot(_ctx.$slots, "default"),
              __props.showCloseButton ? (openBlock(), createBlock(unref(DialogClose_default), {
                key: 0,
                "data-slot": "dialog-close",
                class: "ring-offset-background focus:ring-ring data-[state=open]:bg-accent data-[state=open]:text-muted-foreground absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4"
              }, {
                default: withCtx(() => [
                  createVNode(unref(X)),
                  _cache[0] || (_cache[0] = createBaseVNode("span", { class: "sr-only" }, "Close", -1))
                ]),
                _: 1
              })) : createCommentVNode("", true)
            ]),
            _: 3
          }, 16, ["class"])
        ]),
        _: 3
      });
    };
  }
});
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "DialogDescription",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(__props) {
    const props = __props;
    const delegatedProps = reactiveOmit(props, "class");
    const forwardedProps = useForwardProps(delegatedProps);
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(DialogDescription_default), mergeProps({ "data-slot": "dialog-description" }, unref(forwardedProps), {
        class: unref(cn)("text-muted-foreground text-sm", props.class)
      }), {
        default: withCtx(() => [
          renderSlot(_ctx.$slots, "default")
        ]),
        _: 3
      }, 16, ["class"]);
    };
  }
});
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "DialogHeader",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        "data-slot": "dialog-header",
        class: normalizeClass(unref(cn)("flex flex-col gap-2 text-center sm:text-left", props.class))
      }, [
        renderSlot(_ctx.$slots, "default")
      ], 2);
    };
  }
});
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "DialogTitle",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(__props) {
    const props = __props;
    const delegatedProps = reactiveOmit(props, "class");
    const forwardedProps = useForwardProps(delegatedProps);
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(DialogTitle_default), mergeProps({ "data-slot": "dialog-title" }, unref(forwardedProps), {
        class: unref(cn)("text-lg leading-none font-semibold", props.class)
      }), {
        default: withCtx(() => [
          renderSlot(_ctx.$slots, "default")
        ]),
        _: 3
      }, 16, ["class"]);
    };
  }
});
export {
  _sfc_main$3 as _,
  _sfc_main$1 as a,
  _sfc_main as b,
  _sfc_main$2 as c,
  _sfc_main$5 as d
};
