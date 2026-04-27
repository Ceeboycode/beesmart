import { c as createLucideIcon, d as defineComponent, o as openBlock, k as createBlock, e as unref, n as normalizeClass, av as cn } from "./app-FZe8oXsS.js";
/**
 * @license lucide-vue-next v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const LoaderCircle = createLucideIcon("LoaderCircleIcon", [
  ["path", { d: "M21 12a9 9 0 1 1-6.219-8.56", key: "13zald" }]
]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Spinner",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(LoaderCircle), {
        role: "status",
        "aria-label": "Loading",
        class: normalizeClass(unref(cn)("size-4 animate-spin", props.class))
      }, null, 8, ["class"]);
    };
  }
});
export {
  _sfc_main as _
};
