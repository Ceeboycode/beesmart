import { d as defineComponent, o as openBlock, k as createBlock, g as withCtx, b as createVNode, e as unref, f as createBaseVNode, n as normalizeClass, i as createTextVNode, t as toDisplayString, l as createCommentVNode, Z as renderSlot, _ as _sfc_main$6 } from "./app-U-Wu707C.js";
import { _ as _sfc_main$1, a as _sfc_main$2, b as _sfc_main$3, c as _sfc_main$4, d as _sfc_main$7 } from "./DialogTitle.vue_vue_type_script_setup_true_lang-DNuLu2i_.js";
import { _ as _sfc_main$5 } from "./DialogFooter.vue_vue_type_script_setup_true_lang-DLXOiuZd.js";
import { T as TriangleAlert } from "./triangle-alert-CeaKFo9s.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "ConfirmDialog",
  props: {
    open: { type: Boolean },
    title: {},
    description: {},
    confirmLabel: {},
    cancelLabel: {},
    variant: {},
    processing: { type: Boolean }
  },
  emits: ["update:open", "confirm"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(_sfc_main$7), {
        open: props.open,
        "onUpdate:open": _cache[2] || (_cache[2] = ($event) => emit("update:open", $event))
      }, {
        default: withCtx(() => [
          createVNode(unref(_sfc_main$1), {
            "show-close-button": false,
            class: "sm:max-w-md"
          }, {
            default: withCtx(() => [
              createVNode(unref(_sfc_main$2), null, {
                default: withCtx(() => [
                  createBaseVNode("div", {
                    class: normalizeClass(["mx-auto mb-2 flex size-12 items-center justify-center rounded-full", props.variant === "destructive" ? "bg-destructive/10" : "bg-muted"])
                  }, [
                    createVNode(unref(TriangleAlert), {
                      class: normalizeClass(["size-6", props.variant === "destructive" ? "text-destructive" : "text-muted-foreground"])
                    }, null, 8, ["class"])
                  ], 2),
                  createVNode(unref(_sfc_main$3), { class: "text-center text-xl" }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(props.title), 1)
                    ]),
                    _: 1
                  }),
                  props.description ? (openBlock(), createBlock(unref(_sfc_main$4), {
                    key: 0,
                    class: "text-center"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(props.description), 1)
                    ]),
                    _: 1
                  })) : createCommentVNode("", true)
                ]),
                _: 1
              }),
              renderSlot(_ctx.$slots, "default"),
              createVNode(unref(_sfc_main$5), { class: "flex-col-reverse gap-2 sm:flex-row" }, {
                default: withCtx(() => [
                  createVNode(unref(_sfc_main$6), {
                    variant: "outline",
                    class: "flex-1",
                    disabled: props.processing,
                    onClick: _cache[0] || (_cache[0] = ($event) => emit("update:open", false))
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(props.cancelLabel ?? "Cancel"), 1)
                    ]),
                    _: 1
                  }, 8, ["disabled"]),
                  createVNode(unref(_sfc_main$6), {
                    class: "flex-1",
                    variant: props.variant === "destructive" ? "destructive" : "default",
                    disabled: props.processing,
                    onClick: _cache[1] || (_cache[1] = ($event) => emit("confirm"))
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(props.processing ? "Please wait…" : props.confirmLabel ?? "Confirm"), 1)
                    ]),
                    _: 1
                  }, 8, ["variant", "disabled"])
                ]),
                _: 1
              })
            ]),
            _: 3
          })
        ]),
        _: 3
      }, 8, ["open"]);
    };
  }
});
export {
  _sfc_main as _
};
