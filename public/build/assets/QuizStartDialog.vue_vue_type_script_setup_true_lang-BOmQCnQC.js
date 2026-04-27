import { _ as _sfc_main$5, a as _sfc_main$6, b as _sfc_main$7 } from "./index-CyJYVQs2.js";
import { _ as _sfc_main$8 } from "./index-k5qqUSJu.js";
import { c as createLucideIcon, d as defineComponent, o as openBlock, k as createBlock, g as withCtx, b as createVNode, e as unref, f as createBaseVNode, K as BookOpen, i as createTextVNode, t as toDisplayString, a as createElementBlock, l as createCommentVNode, _ as _sfc_main$a, m as computed } from "./app-FZe8oXsS.js";
import { _ as _sfc_main$1, a as _sfc_main$2, b as _sfc_main$3, c as _sfc_main$4, d as _sfc_main$b } from "./DialogTitle.vue_vue_type_script_setup_true_lang-BnppUMeH.js";
import { _ as _sfc_main$9 } from "./DialogFooter.vue_vue_type_script_setup_true_lang-LUn7Xu4s.js";
import { T as TriangleAlert } from "./triangle-alert-RlSOkNJU.js";
/**
 * @license lucide-vue-next v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Send = createLucideIcon("SendIcon", [
  [
    "path",
    {
      d: "M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",
      key: "1ffxy3"
    }
  ],
  ["path", { d: "m21.854 2.147-10.94 10.939", key: "12cjpa" }]
]);
/**
 * @license lucide-vue-next v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const SquareCheckBig = createLucideIcon("SquareCheckBigIcon", [
  ["path", { d: "M21 10.5V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h12.5", key: "1uzm8b" }],
  ["path", { d: "m9 11 3 3L22 4", key: "1pflzl" }]
]);
const _hoisted_1 = { class: "mx-auto mb-2 flex size-12 items-center justify-center rounded-full bg-amber-100 dark:bg-amber-900/30" };
const _hoisted_2 = { key: 0 };
const _hoisted_3 = { class: "font-semibold text-foreground" };
const _hoisted_4 = { class: "mt-1 grid gap-1.5 text-sm" };
const _hoisted_5 = { class: "flex items-start gap-2" };
const _hoisted_6 = { class: "flex items-start gap-2" };
const _hoisted_7 = { class: "flex items-start gap-2" };
const _hoisted_8 = { class: "flex justify-center gap-2" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "QuizStartDialog",
  props: {
    open: { type: Boolean },
    processing: { type: Boolean },
    quiz: {}
  },
  emits: ["update:open", "confirm"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const questionCount = computed(() => {
      var _a, _b;
      if (((_a = props.quiz) == null ? void 0 : _a.questions_count) !== void 0)
        return props.quiz.questions_count;
      if ((_b = props.quiz) == null ? void 0 : _b.questions) return props.quiz.questions.length;
      return null;
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(_sfc_main$b), {
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
                  createBaseVNode("div", _hoisted_1, [
                    createVNode(unref(BookOpen), { class: "size-6 text-amber-600 dark:text-amber-400" })
                  ]),
                  createVNode(unref(_sfc_main$3), { class: "text-center text-xl" }, {
                    default: withCtx(() => {
                      var _a;
                      return [
                        createTextVNode(toDisplayString(((_a = props.quiz) == null ? void 0 : _a.title) ? `Ready for "${props.quiz.title}"?` : "Before you begin…"), 1)
                      ];
                    }),
                    _: 1
                  }),
                  createVNode(unref(_sfc_main$4), { class: "text-center" }, {
                    default: withCtx(() => [
                      questionCount.value !== null ? (openBlock(), createElementBlock("span", _hoisted_2, [
                        _cache[3] || (_cache[3] = createTextVNode(" This quiz has ", -1)),
                        createBaseVNode("span", _hoisted_3, toDisplayString(questionCount.value) + " question" + toDisplayString(questionCount.value === 1 ? "" : "s"), 1),
                        _cache[4] || (_cache[4] = createTextVNode(". ", -1))
                      ])) : createCommentVNode("", true),
                      _cache[5] || (_cache[5] = createTextVNode(" Read the reminders below before starting. ", -1))
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(unref(_sfc_main$5), { variant: "warning" }, {
                default: withCtx(() => [
                  createVNode(unref(TriangleAlert), { class: "size-4" }),
                  createVNode(unref(_sfc_main$6), null, {
                    default: withCtx(() => [..._cache[6] || (_cache[6] = [
                      createTextVNode("Rules & reminders", -1)
                    ])]),
                    _: 1
                  }),
                  createVNode(unref(_sfc_main$7), null, {
                    default: withCtx(() => [
                      createBaseVNode("ul", _hoisted_4, [
                        createBaseVNode("li", _hoisted_5, [
                          createVNode(unref(SquareCheckBig), { class: "mt-0.5 size-4 shrink-0 text-amber-600 dark:text-amber-400" }),
                          _cache[7] || (_cache[7] = createTextVNode(" You can navigate freely between questions before submitting. ", -1))
                        ]),
                        createBaseVNode("li", _hoisted_6, [
                          createVNode(unref(SquareCheckBig), { class: "mt-0.5 size-4 shrink-0 text-amber-600 dark:text-amber-400" }),
                          _cache[8] || (_cache[8] = createTextVNode(" Multiple-choice questions may have ", -1)),
                          _cache[9] || (_cache[9] = createBaseVNode("span", { class: "font-medium" }, "more than one correct answer", -1)),
                          _cache[10] || (_cache[10] = createTextVNode(" — select all that apply. ", -1))
                        ]),
                        createBaseVNode("li", _hoisted_7, [
                          createVNode(unref(Send), { class: "mt-0.5 size-4 shrink-0 text-amber-600 dark:text-amber-400" }),
                          _cache[11] || (_cache[11] = createTextVNode(" Once you click ", -1)),
                          _cache[12] || (_cache[12] = createBaseVNode("span", { class: "font-medium" }, "Submit quiz", -1)),
                          _cache[13] || (_cache[13] = createTextVNode(", your answers are final and cannot be changed. ", -1))
                        ])
                      ])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createBaseVNode("div", _hoisted_8, [
                createVNode(unref(_sfc_main$8), { variant: "honey" }, {
                  default: withCtx(() => [..._cache[14] || (_cache[14] = [
                    createTextVNode("Good luck! 🐝", -1)
                  ])]),
                  _: 1
                })
              ]),
              createVNode(unref(_sfc_main$9), { class: "flex-col-reverse gap-2 sm:flex-row" }, {
                default: withCtx(() => [
                  createVNode(unref(_sfc_main$a), {
                    variant: "outline",
                    class: "flex-1",
                    disabled: props.processing,
                    onClick: _cache[0] || (_cache[0] = ($event) => emit("update:open", false))
                  }, {
                    default: withCtx(() => [..._cache[15] || (_cache[15] = [
                      createTextVNode(" Cancel ", -1)
                    ])]),
                    _: 1
                  }, 8, ["disabled"]),
                  createVNode(unref(_sfc_main$a), {
                    class: "flex-1",
                    disabled: props.processing,
                    onClick: _cache[1] || (_cache[1] = ($event) => emit("confirm"))
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(props.processing ? "Starting…" : "Start quiz"), 1)
                    ]),
                    _: 1
                  }, 8, ["disabled"])
                ]),
                _: 1
              })
            ]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["open"]);
    };
  }
});
export {
  _sfc_main as _
};
