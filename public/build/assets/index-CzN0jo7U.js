import { d as defineComponent, o as openBlock, a as createElementBlock, n as normalizeClass, e as unref, ar as cn, S as renderSlot, az as cva } from "./app-Cfclc8Ry.js";
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "Alert",
  props: {
    class: { type: [Boolean, null, String, Object, Array] },
    variant: {}
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        "data-slot": "alert",
        class: normalizeClass(unref(cn)(unref(alertVariants)({ variant: __props.variant }), props.class)),
        role: "alert"
      }, [
        renderSlot(_ctx.$slots, "default")
      ], 2);
    };
  }
});
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "AlertDescription",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        "data-slot": "alert-description",
        class: normalizeClass(unref(cn)("text-muted-foreground col-start-2 grid justify-items-start gap-1 text-sm [&_p]:leading-relaxed", props.class))
      }, [
        renderSlot(_ctx.$slots, "default")
      ], 2);
    };
  }
});
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "AlertTitle",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        "data-slot": "alert-title",
        class: normalizeClass(unref(cn)("col-start-2 line-clamp-1 min-h-4 font-medium tracking-tight", props.class))
      }, [
        renderSlot(_ctx.$slots, "default")
      ], 2);
    };
  }
});
const alertVariants = cva(
  "relative w-full rounded-2xl border px-4 py-3 text-sm grid has-[>svg]:grid-cols-[calc(var(--spacing)*4)_1fr] grid-cols-[0_1fr] has-[>svg]:gap-x-3 gap-y-0.5 items-start [&>svg]:size-4 [&>svg]:translate-y-0.5 [&>svg]:text-current",
  {
    variants: {
      variant: {
        default: "bg-card text-card-foreground border-border",
        destructive: "bg-red-50 text-red-800 border-red-200 [&>svg]:text-red-600 dark:bg-red-950/30 dark:text-red-300 dark:border-red-900/50",
        honey: "bg-amber-50 text-amber-900 border-amber-200 [&>svg]:text-amber-600 dark:bg-amber-950/30 dark:text-amber-300 dark:border-amber-800/50",
        success: "bg-emerald-50 text-emerald-900 border-emerald-200 [&>svg]:text-emerald-600 dark:bg-emerald-950/30 dark:text-emerald-300 dark:border-emerald-900/50",
        warning: "bg-yellow-50 text-yellow-900 border-yellow-200 [&>svg]:text-yellow-600 dark:bg-yellow-950/30 dark:text-yellow-300 dark:border-yellow-900/50",
        info: "bg-blue-50 text-blue-900 border-blue-200 [&>svg]:text-blue-600 dark:bg-blue-950/30 dark:text-blue-300 dark:border-blue-900/50"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
);
export {
  _sfc_main$2 as _,
  _sfc_main as a,
  _sfc_main$1 as b
};
