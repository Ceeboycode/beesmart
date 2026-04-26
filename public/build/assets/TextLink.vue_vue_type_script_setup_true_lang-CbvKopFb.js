import { d as defineComponent, o as openBlock, k as createBlock, g as withCtx, Z as renderSlot, e as unref, x as link_default } from "./app-U-Wu707C.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "TextLink",
  props: {
    href: {},
    tabindex: {},
    method: {},
    as: {}
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(link_default), {
        href: __props.href,
        tabindex: __props.tabindex,
        method: __props.method,
        as: __props.as,
        class: "text-foreground underline decoration-neutral-300 underline-offset-4 transition-colors duration-300 ease-out hover:decoration-current! dark:decoration-neutral-500"
      }, {
        default: withCtx(() => [
          renderSlot(_ctx.$slots, "default")
        ]),
        _: 3
      }, 8, ["href", "tabindex", "method", "as"]);
    };
  }
});
export {
  _sfc_main as _
};
