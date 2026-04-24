import { c as createLucideIcon, d as defineComponent, aP as useAppearance, o as openBlock, a as createElementBlock, F as Fragment, r as renderList, f as createBaseVNode, k as createBlock, a6 as resolveDynamicComponent, t as toDisplayString, n as normalizeClass, e as unref, b as createVNode, h as head_default, v as _sfc_main$2, aQ as edit } from "./app-Cfclc8Ry.js";
/**
 * @license lucide-vue-next v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Monitor = createLucideIcon("MonitorIcon", [
  ["rect", { width: "20", height: "14", x: "2", y: "3", rx: "2", key: "48i651" }],
  ["line", { x1: "8", x2: "16", y1: "21", y2: "21", key: "1svkeh" }],
  ["line", { x1: "12", x2: "12", y1: "17", y2: "21", key: "vw1qmm" }]
]);
/**
 * @license lucide-vue-next v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Moon = createLucideIcon("MoonIcon", [
  ["path", { d: "M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z", key: "a7tn18" }]
]);
/**
 * @license lucide-vue-next v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Sun = createLucideIcon("SunIcon", [
  ["circle", { cx: "12", cy: "12", r: "4", key: "4exip2" }],
  ["path", { d: "M12 2v2", key: "tus03m" }],
  ["path", { d: "M12 20v2", key: "1lh1kg" }],
  ["path", { d: "m4.93 4.93 1.41 1.41", key: "149t6j" }],
  ["path", { d: "m17.66 17.66 1.41 1.41", key: "ptbguv" }],
  ["path", { d: "M2 12h2", key: "1t8f8n" }],
  ["path", { d: "M20 12h2", key: "1q8mjw" }],
  ["path", { d: "m6.34 17.66-1.41 1.41", key: "1m8zz5" }],
  ["path", { d: "m19.07 4.93-1.41 1.41", key: "1shlcs" }]
]);
const _hoisted_1$1 = { class: "inline-flex gap-1 rounded-lg bg-neutral-100 p-1 dark:bg-neutral-800" };
const _hoisted_2 = ["onClick"];
const _hoisted_3 = { class: "ml-1.5 text-sm" };
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "AppearanceTabs",
  setup(__props) {
    const { appearance, updateAppearance } = useAppearance();
    const tabs = [
      { value: "light", Icon: Sun, label: "Light" },
      { value: "dark", Icon: Moon, label: "Dark" },
      { value: "system", Icon: Monitor, label: "System" }
    ];
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$1, [
        (openBlock(), createElementBlock(Fragment, null, renderList(tabs, ({ value, Icon, label }) => {
          return createBaseVNode("button", {
            key: value,
            onClick: ($event) => unref(updateAppearance)(value),
            class: normalizeClass([
              "flex items-center rounded-md px-3.5 py-1.5 transition-colors",
              unref(appearance) === value ? "bg-white shadow-xs dark:bg-neutral-700 dark:text-neutral-100" : "text-neutral-500 hover:bg-neutral-200/60 hover:text-black dark:text-neutral-400 dark:hover:bg-neutral-700/60"
            ])
          }, [
            (openBlock(), createBlock(resolveDynamicComponent(Icon), { class: "-ml-1 h-4 w-4" })),
            createBaseVNode("span", _hoisted_3, toDisplayString(label), 1)
          ], 10, _hoisted_2);
        }), 64))
      ]);
    };
  }
});
const _hoisted_1 = { class: "space-y-6" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...{
    layout: {
      breadcrumbs: [
        {
          title: "Appearance settings",
          href: edit()
        }
      ]
    }
  },
  __name: "Appearance",
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(Fragment, null, [
        createVNode(unref(head_default), { title: "Appearance settings" }),
        _cache[0] || (_cache[0] = createBaseVNode("h1", { class: "sr-only" }, "Appearance settings", -1)),
        createBaseVNode("div", _hoisted_1, [
          createVNode(_sfc_main$2, {
            variant: "small",
            title: "Appearance settings",
            description: "Update your account's appearance settings"
          }),
          createVNode(_sfc_main$1)
        ])
      ], 64);
    };
  }
});
export {
  _sfc_main as default
};
