import { c as createLucideIcon, d as defineComponent, o as openBlock, a as createElementBlock, l as createCommentVNode, F as Fragment, r as renderList, f as createBaseVNode, t as toDisplayString, m as computed, y as normalizeStyle, z as _export_sfc, b as createVNode, e as unref, h as head_default, v as _sfc_main$2, g as withCtx, n as normalizeClass, i as createTextVNode, K as BookOpen, k as createBlock, M as TrendingUp, _ as _sfc_main$7, x as link_default, L as progress, p as ref, P as resolveDynamicComponent } from "./app-FZe8oXsS.js";
import { _ as _sfc_main$3, a as _sfc_main$4 } from "./CardContent.vue_vue_type_script_setup_true_lang-n-UlRd_e.js";
import { _ as _sfc_main$5, a as _sfc_main$6 } from "./CardTitle.vue_vue_type_script_setup_true_lang-C3Ddipjo.js";
import { r as results } from "./index-fReWOOQQ.js";
import { F as FolderOpen } from "./folder-open-DewPg2uP.js";
import { C as ChevronUp, a as ChevronDown } from "./chevron-up-D3TikgX7.js";
import { E as ExternalLink } from "./external-link-BRNPS76G.js";
import { C as CircleCheck } from "./circle-check-8Uu5e0LX.js";
/**
 * @license lucide-vue-next v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Info = createLucideIcon("InfoIcon", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M12 16v-4", key: "1dtifu" }],
  ["path", { d: "M12 8h.01", key: "e9boi3" }]
]);
/**
 * @license lucide-vue-next v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Minus = createLucideIcon("MinusIcon", [["path", { d: "M5 12h14", key: "1ays0h" }]]);
/**
 * @license lucide-vue-next v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Star = createLucideIcon("StarIcon", [
  [
    "path",
    {
      d: "M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",
      key: "r04s7s"
    }
  ]
]);
/**
 * @license lucide-vue-next v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Target = createLucideIcon("TargetIcon", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["circle", { cx: "12", cy: "12", r: "6", key: "1vlfrh" }],
  ["circle", { cx: "12", cy: "12", r: "2", key: "1c9p78" }]
]);
/**
 * @license lucide-vue-next v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const TrendingDown = createLucideIcon("TrendingDownIcon", [
  ["polyline", { points: "22 17 13.5 8.5 8.5 13.5 2 7", key: "1r2t7k" }],
  ["polyline", { points: "16 17 22 17 22 11", key: "11uiuu" }]
]);
/**
 * @license lucide-vue-next v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Trophy = createLucideIcon("TrophyIcon", [
  ["path", { d: "M6 9H4.5a2.5 2.5 0 0 1 0-5H6", key: "17hqa7" }],
  ["path", { d: "M18 9h1.5a2.5 2.5 0 0 0 0-5H18", key: "lmptdp" }],
  ["path", { d: "M4 22h16", key: "57wxv0" }],
  ["path", { d: "M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22", key: "1nw9bq" }],
  ["path", { d: "M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22", key: "1np0yb" }],
  ["path", { d: "M18 2H6v7a6 6 0 0 0 12 0V2Z", key: "u46fv3" }]
]);
const _hoisted_1$1 = { class: "flex flex-col items-center gap-4" };
const _hoisted_2$1 = ["width", "height", "viewBox", "aria-label"];
const _hoisted_3$1 = ["r", "stroke-width"];
const _hoisted_4$1 = ["d", "fill"];
const _hoisted_5$1 = ["y"];
const _hoisted_6$1 = ["y"];
const _hoisted_7$1 = { class: "flex flex-wrap justify-center gap-x-4 gap-y-1.5" };
const _hoisted_8$1 = { class: "text-muted-foreground" };
const _hoisted_9$1 = { class: "font-semibold tabular-nums" };
const CX = 60;
const CY = 60;
const R_OUTER = 50;
const R_INNER = 32;
const VIEWBOX = 120;
const GAP_DEG = 1.5;
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "DonutChart",
  props: {
    segments: {},
    centerLabel: {},
    centerSublabel: {},
    size: { default: 180 }
  },
  setup(__props) {
    const props = __props;
    const total = computed(() => props.segments.reduce((s, seg) => s + seg.value, 0));
    const paths = computed(() => {
      if (total.value === 0) return [];
      const gap = GAP_DEG * Math.PI / 180;
      let startAngle = -Math.PI / 2;
      return props.segments.filter((s) => s.value > 0).map((seg) => {
        const rawAngle = seg.value / total.value * 2 * Math.PI;
        const angle = Math.max(rawAngle - gap, 1e-3);
        const endAngle = startAngle + angle;
        const x1 = CX + R_OUTER * Math.cos(startAngle);
        const y1 = CY + R_OUTER * Math.sin(startAngle);
        const x2 = CX + R_OUTER * Math.cos(endAngle);
        const y2 = CY + R_OUTER * Math.sin(endAngle);
        const ix1 = CX + R_INNER * Math.cos(startAngle);
        const iy1 = CY + R_INNER * Math.sin(startAngle);
        const ix2 = CX + R_INNER * Math.cos(endAngle);
        const iy2 = CY + R_INNER * Math.sin(endAngle);
        const large = angle > Math.PI ? 1 : 0;
        const path = [
          `M ${x1.toFixed(2)} ${y1.toFixed(2)}`,
          `A ${R_OUTER} ${R_OUTER} 0 ${large} 1 ${x2.toFixed(2)} ${y2.toFixed(2)}`,
          `L ${ix2.toFixed(2)} ${iy2.toFixed(2)}`,
          `A ${R_INNER} ${R_INNER} 0 ${large} 0 ${ix1.toFixed(2)} ${iy1.toFixed(2)}`,
          "Z"
        ].join(" ");
        startAngle += rawAngle;
        return { path, color: seg.color, label: seg.label, value: seg.value };
      });
    });
    const emptyRing = computed(() => total.value === 0);
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$1, [
        (openBlock(), createElementBlock("svg", {
          width: __props.size,
          height: __props.size,
          viewBox: `0 0 ${VIEWBOX} ${VIEWBOX}`,
          class: "overflow-visible",
          role: "img",
          "aria-label": __props.centerLabel
        }, [
          emptyRing.value ? (openBlock(), createElementBlock("circle", {
            key: 0,
            cx: CX,
            cy: CY,
            r: (R_OUTER + R_INNER) / 2,
            "stroke-width": R_OUTER - R_INNER,
            stroke: "currentColor",
            fill: "none",
            class: "text-muted/40"
          }, null, 8, _hoisted_3$1)) : createCommentVNode("", true),
          (openBlock(true), createElementBlock(Fragment, null, renderList(paths.value, (seg, i) => {
            return openBlock(), createElementBlock("path", {
              key: i,
              d: seg.path,
              fill: seg.color,
              class: "transition-opacity hover:opacity-80",
              style: normalizeStyle([{ "animation": "donut-pop 0.5s cubic-bezier(0.34,1.56,0.64,1) both" }, { animationDelay: `${i * 80}ms` }])
            }, null, 12, _hoisted_4$1);
          }), 128)),
          __props.centerLabel ? (openBlock(), createElementBlock(Fragment, { key: 1 }, [
            createBaseVNode("text", {
              x: CX,
              y: __props.centerSublabel ? CY - 4 : CY + 5,
              "text-anchor": "middle",
              "dominant-baseline": "middle",
              "font-size": "14",
              "font-weight": "700",
              fill: "currentColor",
              class: "text-foreground"
            }, toDisplayString(__props.centerLabel), 9, _hoisted_5$1),
            __props.centerSublabel ? (openBlock(), createElementBlock("text", {
              key: 0,
              x: CX,
              y: CY + 11,
              "text-anchor": "middle",
              "dominant-baseline": "middle",
              "font-size": "7",
              fill: "currentColor",
              class: "text-muted-foreground",
              opacity: "0.7"
            }, toDisplayString(__props.centerSublabel), 9, _hoisted_6$1)) : createCommentVNode("", true)
          ], 64)) : createCommentVNode("", true)
        ], 8, _hoisted_2$1)),
        createBaseVNode("div", _hoisted_7$1, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(__props.segments.filter((s) => s.value > 0), (seg) => {
            return openBlock(), createElementBlock("div", {
              key: seg.label,
              class: "flex items-center gap-1.5 text-xs"
            }, [
              createBaseVNode("span", {
                class: "size-2.5 shrink-0 rounded-sm",
                style: normalizeStyle({ background: seg.color })
              }, null, 4),
              createBaseVNode("span", _hoisted_8$1, toDisplayString(seg.label), 1),
              createBaseVNode("span", _hoisted_9$1, toDisplayString(seg.value), 1)
            ]);
          }), 128))
        ])
      ]);
    };
  }
});
const DonutChart = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-b08a78a5"]]);
const _hoisted_1 = { class: "flex flex-col gap-6 p-6" };
const _hoisted_2 = { class: "grid grid-cols-2 gap-4 lg:grid-cols-4" };
const _hoisted_3 = { class: "mt-1 text-3xl font-bold" };
const _hoisted_4 = { class: "mt-1 text-3xl font-bold" };
const _hoisted_5 = { class: "mt-1 text-3xl font-bold text-emerald-600" };
const _hoisted_6 = { class: "grid gap-6 lg:grid-cols-2" };
const _hoisted_7 = {
  key: 0,
  class: "flex flex-col items-center gap-2 py-6 text-center text-sm text-muted-foreground"
};
const _hoisted_8 = {
  key: 1,
  class: "flex justify-center"
};
const _hoisted_9 = { class: "flex items-center justify-between text-sm" };
const _hoisted_10 = { class: "font-medium" };
const _hoisted_11 = { class: "flex items-center gap-2 text-xs text-muted-foreground" };
const _hoisted_12 = { class: "h-2.5 overflow-hidden rounded-full bg-muted" };
const _hoisted_13 = { class: "flex flex-col gap-3" };
const _hoisted_14 = { class: "min-w-0" };
const _hoisted_15 = { class: "mt-0.5 text-xs leading-relaxed text-muted-foreground" };
const _hoisted_16 = { class: "flex size-9 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary" };
const _hoisted_17 = { class: "min-w-0 flex-1" };
const _hoisted_18 = { class: "truncate text-sm font-medium" };
const _hoisted_19 = { class: "text-xs text-muted-foreground" };
const _hoisted_20 = { class: "shrink-0 text-right" };
const _hoisted_21 = { class: "flex items-center gap-3" };
const _hoisted_22 = { class: "hidden flex-col items-end sm:flex" };
const _hoisted_23 = { class: "flex flex-col items-end" };
const _hoisted_24 = { class: "text-sm font-semibold text-emerald-600" };
const _hoisted_25 = { class: "hidden w-24 sm:block" };
const _hoisted_26 = { class: "h-2 overflow-hidden rounded-full bg-muted" };
const _hoisted_27 = {
  key: 0,
  class: "flex flex-col items-center gap-2 px-6 py-10 text-center text-sm text-muted-foreground"
};
const _hoisted_28 = {
  key: 1,
  class: "divide-y"
};
const _hoisted_29 = ["onClick"];
const _hoisted_30 = { class: "shrink-0" };
const _hoisted_31 = { class: "min-w-0 flex-1" };
const _hoisted_32 = { class: "truncate text-sm font-medium" };
const _hoisted_33 = { class: "mt-0.5 text-xs text-muted-foreground" };
const _hoisted_34 = { class: "hidden shrink-0 items-center gap-2 sm:flex" };
const _hoisted_35 = {
  key: 0,
  class: "border-t bg-muted/20 px-6 py-4"
};
const _hoisted_36 = { class: "flex flex-col gap-2" };
const _hoisted_37 = { class: "text-muted-foreground" };
const _hoisted_38 = { class: "flex items-center justify-end gap-2" };
const _hoisted_39 = { class: "h-1.5 w-16 overflow-hidden rounded-full bg-muted" };
const _hoisted_40 = { class: "text-right text-xs text-muted-foreground" };
const _hoisted_41 = { class: "flex justify-end" };
const _hoisted_42 = {
  key: 0,
  class: "mt-4"
};
const _hoisted_43 = {
  class: "flex items-end gap-1",
  style: { "height": "40px" }
};
const _hoisted_44 = ["title"];
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...{
    layout: {
      breadcrumbs: [{ title: "My Progress", href: progress() }]
    }
  },
  __name: "Progress",
  props: {
    stats: {},
    typeStats: {},
    categoryStats: {},
    quizHistory: {},
    suggestions: {}
  },
  setup(__props) {
    const props = __props;
    const expandedQuiz = ref(null);
    const toggleQuiz = (quizId) => {
      expandedQuiz.value = expandedQuiz.value === quizId ? null : quizId;
    };
    const scoreBadgeClass = (pct) => {
      if (pct >= 75) return "bg-emerald-50 text-emerald-700 border-emerald-200 dark:bg-emerald-900/20 dark:text-emerald-400 dark:border-emerald-800";
      if (pct >= 50) return "bg-amber-50 text-amber-700 border-amber-200 dark:bg-amber-900/20 dark:text-amber-400 dark:border-amber-800";
      return "bg-rose-50 text-rose-700 border-rose-200 dark:bg-rose-900/20 dark:text-rose-400 dark:border-rose-800";
    };
    const barClass = (pct) => {
      if (pct >= 75) return "bg-emerald-500";
      if (pct >= 50) return "bg-amber-500";
      return "bg-rose-500";
    };
    const typeLabel = (type) => {
      const map = {
        multiple_choice: "Multiple Choice",
        true_false: "True / False",
        short_answer: "Short Answer"
      };
      return map[type] ?? type;
    };
    const suggestionStyle = (type) => {
      const map = {
        strength: {
          card: "border-emerald-200 bg-emerald-50/50 dark:border-emerald-800 dark:bg-emerald-900/10",
          icon: "bg-emerald-100 text-emerald-600 dark:bg-emerald-900/30 dark:text-emerald-400",
          title: "text-emerald-800 dark:text-emerald-300"
        },
        weakness: {
          card: "border-amber-200 bg-amber-50/50 dark:border-amber-800 dark:bg-amber-900/10",
          icon: "bg-amber-100 text-amber-600 dark:bg-amber-900/30 dark:text-amber-400",
          title: "text-amber-800 dark:text-amber-300"
        },
        warning: {
          card: "border-rose-200 bg-rose-50/50 dark:border-rose-800 dark:bg-rose-900/10",
          icon: "bg-rose-100 text-rose-600 dark:bg-rose-900/30 dark:text-rose-400",
          title: "text-rose-800 dark:text-rose-300"
        },
        tip: {
          card: "border-blue-200 bg-blue-50/50 dark:border-blue-800 dark:bg-blue-900/10",
          icon: "bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400",
          title: "text-blue-800 dark:text-blue-300"
        },
        info: {
          card: "border-muted bg-muted/30",
          icon: "bg-muted text-muted-foreground",
          title: "text-foreground"
        }
      };
      return map[type] ?? map.info;
    };
    const suggestionIcon = (icon) => {
      const map = {
        trophy: Trophy,
        target: Target,
        "trending-up": TrendingUp,
        "trending-down": TrendingDown,
        "book-open": BookOpen,
        star: Star,
        "check-circle": CircleCheck,
        info: Info
      };
      return map[icon] ?? Info;
    };
    const toDateShort = (iso) => iso ? new Date(iso).toLocaleDateString(void 0, { month: "short", day: "numeric" }) : "—";
    const TYPE_COLORS = {
      multiple_choice: "#3b82f6",
      true_false: "#8b5cf6",
      short_answer: "#f59e0b"
    };
    const typeChartSegments = computed(
      () => Object.entries(props.typeStats).map(([type, stat]) => ({
        label: typeLabel(type),
        value: stat.total,
        color: TYPE_COLORS[type] ?? "#94a3b8"
      }))
    );
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(Fragment, null, [
        createVNode(unref(head_default), { title: "My Progress" }),
        createBaseVNode("div", _hoisted_1, [
          createVNode(_sfc_main$2, {
            title: "My Progress",
            description: "Track your performance across quizzes and discover how to improve."
          }),
          createBaseVNode("div", _hoisted_2, [
            createVNode(unref(_sfc_main$4), null, {
              default: withCtx(() => [
                createVNode(unref(_sfc_main$3), { class: "pt-6" }, {
                  default: withCtx(() => [
                    _cache[0] || (_cache[0] = createBaseVNode("p", { class: "text-sm text-muted-foreground" }, "Quizzes taken", -1)),
                    createBaseVNode("p", _hoisted_3, toDisplayString(__props.stats.quizzes_taken), 1),
                    _cache[1] || (_cache[1] = createBaseVNode("p", { class: "mt-2 text-xs text-muted-foreground" }, "unique quizzes", -1))
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }),
            createVNode(unref(_sfc_main$4), null, {
              default: withCtx(() => [
                createVNode(unref(_sfc_main$3), { class: "pt-6" }, {
                  default: withCtx(() => [
                    _cache[2] || (_cache[2] = createBaseVNode("p", { class: "text-sm text-muted-foreground" }, "Total attempts", -1)),
                    createBaseVNode("p", _hoisted_4, toDisplayString(__props.stats.total_attempts), 1),
                    _cache[3] || (_cache[3] = createBaseVNode("p", { class: "mt-2 text-xs text-muted-foreground" }, "submitted", -1))
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }),
            createVNode(unref(_sfc_main$4), null, {
              default: withCtx(() => [
                createVNode(unref(_sfc_main$3), { class: "pt-6" }, {
                  default: withCtx(() => [
                    _cache[4] || (_cache[4] = createBaseVNode("p", { class: "text-sm text-muted-foreground" }, "Average score", -1)),
                    createBaseVNode("p", {
                      class: normalizeClass(["mt-1 text-3xl font-bold", __props.stats.avg_pct >= 75 ? "text-emerald-600" : __props.stats.avg_pct >= 50 ? "text-amber-600" : __props.stats.total_attempts > 0 ? "text-rose-600" : ""])
                    }, toDisplayString(__props.stats.total_attempts > 0 ? `${__props.stats.avg_pct}%` : "—"), 3),
                    _cache[5] || (_cache[5] = createBaseVNode("p", { class: "mt-2 text-xs text-muted-foreground" }, "across all attempts", -1))
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }),
            createVNode(unref(_sfc_main$4), null, {
              default: withCtx(() => [
                createVNode(unref(_sfc_main$3), { class: "pt-6" }, {
                  default: withCtx(() => [
                    _cache[6] || (_cache[6] = createBaseVNode("p", { class: "text-sm text-muted-foreground" }, "Best score", -1)),
                    createBaseVNode("p", _hoisted_5, toDisplayString(__props.stats.total_attempts > 0 ? `${__props.stats.best_pct}%` : "—"), 1),
                    _cache[7] || (_cache[7] = createBaseVNode("p", { class: "mt-2 text-xs text-muted-foreground" }, "personal best", -1))
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })
          ]),
          createBaseVNode("div", _hoisted_6, [
            createVNode(unref(_sfc_main$4), null, {
              default: withCtx(() => [
                createVNode(unref(_sfc_main$5), null, {
                  default: withCtx(() => [
                    createVNode(unref(_sfc_main$6), { class: "text-base" }, {
                      default: withCtx(() => [..._cache[8] || (_cache[8] = [
                        createTextVNode("Performance by question type", -1)
                      ])]),
                      _: 1
                    })
                  ]),
                  _: 1
                }),
                createVNode(unref(_sfc_main$3), { class: "flex flex-col gap-5" }, {
                  default: withCtx(() => [
                    Object.keys(__props.typeStats).length === 0 ? (openBlock(), createElementBlock("div", _hoisted_7, [
                      createVNode(unref(BookOpen), { class: "size-8 opacity-30" }),
                      _cache[9] || (_cache[9] = createTextVNode(" Complete some quizzes to see your accuracy breakdown. ", -1))
                    ])) : (openBlock(), createElementBlock("div", _hoisted_8, [
                      createVNode(DonutChart, {
                        segments: typeChartSegments.value,
                        "center-label": "Questions",
                        "center-sublabel": `${Object.values(__props.typeStats).reduce((s, t) => s + t.total, 0)} total`,
                        size: 160
                      }, null, 8, ["segments", "center-sublabel"])
                    ])),
                    (openBlock(true), createElementBlock(Fragment, null, renderList(__props.typeStats, (stat, type) => {
                      return openBlock(), createElementBlock("div", {
                        key: type,
                        class: "space-y-1.5"
                      }, [
                        createBaseVNode("div", _hoisted_9, [
                          createBaseVNode("span", _hoisted_10, toDisplayString(typeLabel(String(type))), 1),
                          createBaseVNode("span", _hoisted_11, [
                            createBaseVNode("span", null, toDisplayString(stat.correct) + "/" + toDisplayString(stat.total) + " correct", 1),
                            createBaseVNode("span", {
                              class: normalizeClass(["rounded-full border px-2 py-0.5 text-xs font-semibold", scoreBadgeClass(stat.pct)])
                            }, toDisplayString(stat.pct) + "% ", 3)
                          ])
                        ]),
                        createBaseVNode("div", _hoisted_12, [
                          createBaseVNode("div", {
                            class: normalizeClass(["h-full rounded-full transition-all duration-500", barClass(stat.pct)]),
                            style: normalizeStyle({ width: `${stat.pct}%` })
                          }, null, 6)
                        ])
                      ]);
                    }), 128))
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }),
            createBaseVNode("div", _hoisted_13, [
              _cache[10] || (_cache[10] = createBaseVNode("h2", { class: "text-sm font-semibold text-muted-foreground uppercase tracking-wide px-0.5" }, "Insights & suggestions", -1)),
              (openBlock(true), createElementBlock(Fragment, null, renderList(__props.suggestions, (suggestion, i) => {
                return openBlock(), createElementBlock("div", {
                  key: i,
                  class: normalizeClass(["flex items-start gap-3 rounded-xl border p-4", suggestionStyle(suggestion.type).card])
                }, [
                  createBaseVNode("div", {
                    class: normalizeClass(["flex size-8 shrink-0 items-center justify-center rounded-lg", suggestionStyle(suggestion.type).icon])
                  }, [
                    (openBlock(), createBlock(resolveDynamicComponent(suggestionIcon(suggestion.icon)), { class: "size-4" }))
                  ], 2),
                  createBaseVNode("div", _hoisted_14, [
                    createBaseVNode("p", {
                      class: normalizeClass(["text-sm font-semibold", suggestionStyle(suggestion.type).title])
                    }, toDisplayString(suggestion.title), 3),
                    createBaseVNode("p", _hoisted_15, toDisplayString(suggestion.message), 1)
                  ])
                ], 2);
              }), 128))
            ])
          ]),
          __props.categoryStats.length > 0 ? (openBlock(), createBlock(unref(_sfc_main$4), { key: 0 }, {
            default: withCtx(() => [
              createVNode(unref(_sfc_main$5), null, {
                default: withCtx(() => [
                  createVNode(unref(_sfc_main$6), { class: "text-base" }, {
                    default: withCtx(() => [..._cache[11] || (_cache[11] = [
                      createTextVNode("Progress by subject", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(unref(_sfc_main$3), { class: "flex flex-col gap-3" }, {
                default: withCtx(() => [
                  (openBlock(true), createElementBlock(Fragment, null, renderList(__props.categoryStats, (stat) => {
                    var _a, _b;
                    return openBlock(), createElementBlock("div", {
                      key: ((_a = stat.category) == null ? void 0 : _a.id) ?? 0,
                      class: "flex items-center gap-4 rounded-lg border bg-muted/20 px-4 py-3"
                    }, [
                      createBaseVNode("div", _hoisted_16, [
                        createVNode(unref(FolderOpen), { class: "size-4" })
                      ]),
                      createBaseVNode("div", _hoisted_17, [
                        createBaseVNode("p", _hoisted_18, toDisplayString(((_b = stat.category) == null ? void 0 : _b.name) ?? "Uncategorised"), 1),
                        createBaseVNode("p", _hoisted_19, toDisplayString(stat.quiz_count) + " quiz" + toDisplayString(stat.quiz_count === 1 ? "" : "zes") + " · " + toDisplayString(stat.attempt_count) + " attempt" + toDisplayString(stat.attempt_count === 1 ? "" : "s"), 1)
                      ]),
                      createBaseVNode("div", _hoisted_20, [
                        createBaseVNode("div", _hoisted_21, [
                          createBaseVNode("div", _hoisted_22, [
                            _cache[12] || (_cache[12] = createBaseVNode("span", { class: "text-xs text-muted-foreground" }, "Avg", -1)),
                            createBaseVNode("span", {
                              class: normalizeClass(["text-sm font-semibold", stat.avg_pct >= 75 ? "text-emerald-600" : stat.avg_pct >= 50 ? "text-amber-600" : "text-rose-600"])
                            }, toDisplayString(stat.avg_pct) + "% ", 3)
                          ]),
                          createBaseVNode("div", _hoisted_23, [
                            _cache[13] || (_cache[13] = createBaseVNode("span", { class: "text-xs text-muted-foreground" }, "Best", -1)),
                            createBaseVNode("span", _hoisted_24, toDisplayString(stat.best_pct) + "%", 1)
                          ])
                        ])
                      ]),
                      createBaseVNode("div", _hoisted_25, [
                        createBaseVNode("div", _hoisted_26, [
                          createBaseVNode("div", {
                            class: normalizeClass(["h-full rounded-full transition-all", barClass(stat.avg_pct)]),
                            style: normalizeStyle({ width: `${stat.avg_pct}%` })
                          }, null, 6)
                        ])
                      ])
                    ]);
                  }), 128))
                ]),
                _: 1
              })
            ]),
            _: 1
          })) : createCommentVNode("", true),
          createVNode(unref(_sfc_main$4), null, {
            default: withCtx(() => [
              createVNode(unref(_sfc_main$5), null, {
                default: withCtx(() => [
                  createVNode(unref(_sfc_main$6), { class: "text-base" }, {
                    default: withCtx(() => [..._cache[14] || (_cache[14] = [
                      createTextVNode("Quiz history", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(unref(_sfc_main$3), { class: "px-0 pb-0" }, {
                default: withCtx(() => [
                  __props.quizHistory.length === 0 ? (openBlock(), createElementBlock("div", _hoisted_27, [
                    createVNode(unref(BookOpen), { class: "size-8 opacity-30" }),
                    _cache[15] || (_cache[15] = createTextVNode(" No completed quiz attempts yet. ", -1))
                  ])) : (openBlock(), createElementBlock("div", _hoisted_28, [
                    (openBlock(true), createElementBlock(Fragment, null, renderList(__props.quizHistory, (item) => {
                      return openBlock(), createElementBlock("div", {
                        key: item.quiz.id,
                        class: "overflow-hidden"
                      }, [
                        createBaseVNode("button", {
                          type: "button",
                          class: "flex w-full items-center gap-4 px-6 py-4 text-left transition-colors hover:bg-muted/40",
                          onClick: ($event) => toggleQuiz(item.quiz.id)
                        }, [
                          createBaseVNode("div", _hoisted_30, [
                            item.trend === "improving" ? (openBlock(), createBlock(unref(TrendingUp), {
                              key: 0,
                              class: "size-4 text-emerald-500"
                            })) : item.trend === "declining" ? (openBlock(), createBlock(unref(TrendingDown), {
                              key: 1,
                              class: "size-4 text-rose-500"
                            })) : (openBlock(), createBlock(unref(Minus), {
                              key: 2,
                              class: "size-4 text-muted-foreground"
                            }))
                          ]),
                          createBaseVNode("div", _hoisted_31, [
                            createBaseVNode("p", _hoisted_32, toDisplayString(item.quiz.title), 1),
                            createBaseVNode("p", _hoisted_33, toDisplayString(item.attempts_count) + " attempt" + toDisplayString(item.attempts_count === 1 ? "" : "s"), 1)
                          ]),
                          createBaseVNode("div", _hoisted_34, [
                            _cache[16] || (_cache[16] = createBaseVNode("span", { class: "text-xs text-muted-foreground" }, "Avg", -1)),
                            createBaseVNode("span", {
                              class: normalizeClass(["rounded-full border px-2 py-0.5 text-xs font-semibold", scoreBadgeClass(item.avg_pct)])
                            }, toDisplayString(item.avg_pct) + "% ", 3),
                            _cache[17] || (_cache[17] = createBaseVNode("span", { class: "text-xs text-muted-foreground" }, "Best", -1)),
                            createBaseVNode("span", {
                              class: normalizeClass(["rounded-full border px-2 py-0.5 text-xs font-semibold", scoreBadgeClass(item.best_pct)])
                            }, toDisplayString(item.best_pct) + "% ", 3)
                          ]),
                          expandedQuiz.value === item.quiz.id ? (openBlock(), createBlock(unref(ChevronUp), {
                            key: 0,
                            class: "size-4 shrink-0 text-muted-foreground"
                          })) : (openBlock(), createBlock(unref(ChevronDown), {
                            key: 1,
                            class: "size-4 shrink-0 text-muted-foreground"
                          }))
                        ], 8, _hoisted_29),
                        expandedQuiz.value === item.quiz.id ? (openBlock(), createElementBlock("div", _hoisted_35, [
                          _cache[20] || (_cache[20] = createBaseVNode("div", { class: "mb-3 grid grid-cols-4 gap-2 text-xs font-medium uppercase tracking-wide text-muted-foreground" }, [
                            createBaseVNode("span", null, "Attempt"),
                            createBaseVNode("span", { class: "text-right" }, "Score"),
                            createBaseVNode("span", { class: "text-right" }, "Date"),
                            createBaseVNode("span", { class: "text-right" }, "Results")
                          ], -1)),
                          createBaseVNode("div", _hoisted_36, [
                            (openBlock(true), createElementBlock(Fragment, null, renderList(item.history, (attempt) => {
                              return openBlock(), createElementBlock("div", {
                                key: attempt.id,
                                class: "grid grid-cols-4 items-center gap-2 text-sm"
                              }, [
                                createBaseVNode("span", _hoisted_37, "# " + toDisplayString(attempt.number), 1),
                                createBaseVNode("div", _hoisted_38, [
                                  createBaseVNode("div", _hoisted_39, [
                                    createBaseVNode("div", {
                                      class: normalizeClass(["h-full rounded-full", barClass(attempt.pct)]),
                                      style: normalizeStyle({ width: `${attempt.pct}%` })
                                    }, null, 6)
                                  ]),
                                  createBaseVNode("span", {
                                    class: normalizeClass(["w-9 text-right text-xs font-semibold", attempt.pct >= 75 ? "text-emerald-600" : attempt.pct >= 50 ? "text-amber-600" : "text-rose-600"])
                                  }, toDisplayString(attempt.pct) + "% ", 3)
                                ]),
                                createBaseVNode("span", _hoisted_40, toDisplayString(toDateShort(attempt.submitted_at)), 1),
                                createBaseVNode("div", _hoisted_41, [
                                  createVNode(unref(_sfc_main$7), {
                                    variant: "ghost",
                                    size: "sm",
                                    class: "h-6 gap-1 px-2 text-xs",
                                    "as-child": ""
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(unref(link_default), {
                                        href: unref(results)({ attempt: attempt.id })
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(unref(ExternalLink), { class: "size-3" }),
                                          _cache[18] || (_cache[18] = createTextVNode(" View ", -1))
                                        ]),
                                        _: 1
                                      }, 8, ["href"])
                                    ]),
                                    _: 2
                                  }, 1024)
                                ])
                              ]);
                            }), 128))
                          ]),
                          item.history.length > 1 ? (openBlock(), createElementBlock("div", _hoisted_42, [
                            _cache[19] || (_cache[19] = createBaseVNode("p", { class: "mb-2 text-xs text-muted-foreground" }, "Score trend", -1)),
                            createBaseVNode("div", _hoisted_43, [
                              (openBlock(true), createElementBlock(Fragment, null, renderList(item.history, (attempt) => {
                                return openBlock(), createElementBlock("div", {
                                  key: attempt.id,
                                  class: normalizeClass(["flex-1 rounded-t-sm transition-all", barClass(attempt.pct)]),
                                  style: normalizeStyle({ height: `${Math.max(attempt.pct, 4)}%` }),
                                  title: `#${attempt.number}: ${attempt.pct}%`
                                }, null, 14, _hoisted_44);
                              }), 128))
                            ])
                          ])) : createCommentVNode("", true)
                        ])) : createCommentVNode("", true)
                      ]);
                    }), 128))
                  ]))
                ]),
                _: 1
              })
            ]),
            _: 1
          })
        ])
      ], 64);
    };
  }
});
export {
  _sfc_main as default
};
