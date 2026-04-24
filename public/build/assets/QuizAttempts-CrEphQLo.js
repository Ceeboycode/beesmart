import { c as createLucideIcon, d as defineComponent, o as openBlock, a as createElementBlock, b as createVNode, e as unref, h as head_default, f as createBaseVNode, v as _sfc_main$1, g as withCtx, i as createTextVNode, t as toDisplayString, x as link_default, _ as _sfc_main$3, F as Fragment, n as normalizeClass, l as createCommentVNode, k as createBlock, r as renderList, y as normalizeStyle, m as computed } from "./app-Cfclc8Ry.js";
import { _ as _sfc_main$2, i as index } from "./index-CVHLUG6O.js";
import { _ as _sfc_main$4, b as _sfc_main$6, c as _sfc_main$7, a as _sfc_main$8 } from "./CardTitle.vue_vue_type_script_setup_true_lang-Bge0ZIzB.js";
import { _ as _sfc_main$5 } from "./CardDescription.vue_vue_type_script_setup_true_lang-B_SOdC6_.js";
import { r as results } from "./index-y5rLb3Ab.js";
import { C as CircleCheck } from "./circle-check-BQpHXS-I.js";
/**
 * @license lucide-vue-next v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Clock = createLucideIcon("ClockIcon", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["polyline", { points: "12 6 12 12 16 14", key: "68esgv" }]
]);
/**
 * @license lucide-vue-next v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ExternalLink = createLucideIcon("ExternalLinkIcon", [
  ["path", { d: "M15 3h6v6", key: "1q9fwt" }],
  ["path", { d: "M10 14 21 3", key: "gplh6r" }],
  ["path", { d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6", key: "a6xqqp" }]
]);
/**
 * @license lucide-vue-next v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Lock = createLucideIcon("LockIcon", [
  ["rect", { width: "18", height: "11", x: "3", y: "11", rx: "2", ry: "2", key: "1w4ew1" }],
  ["path", { d: "M7 11V7a5 5 0 0 1 10 0v4", key: "fwvmzm" }]
]);
const _hoisted_1 = { class: "mx-auto flex w-full max-w-4xl flex-col gap-6 p-6" };
const _hoisted_2 = { class: "flex flex-wrap items-start justify-between gap-4" };
const _hoisted_3 = { class: "flex items-center gap-2" };
const _hoisted_4 = { class: "grid grid-cols-2 gap-4 sm:grid-cols-4" };
const _hoisted_5 = { key: 0 };
const _hoisted_6 = { key: 1 };
const _hoisted_7 = { class: "text-sm font-medium" };
const _hoisted_8 = {
  key: 0,
  class: "text-xs text-muted-foreground"
};
const _hoisted_9 = { class: "text-xs text-muted-foreground" };
const _hoisted_10 = { class: "min-w-0" };
const _hoisted_11 = { class: "truncate text-sm font-medium" };
const _hoisted_12 = {
  key: 0,
  class: "text-xs text-muted-foreground"
};
const _hoisted_13 = { class: "text-xs text-muted-foreground" };
const _hoisted_14 = { class: "flex items-center gap-4" };
const _hoisted_15 = { class: "hidden flex-col items-end gap-1 sm:flex" };
const _hoisted_16 = { class: "text-xs text-muted-foreground" };
const _hoisted_17 = { class: "h-1.5 w-24 overflow-hidden rounded-full bg-muted" };
const _hoisted_18 = {
  key: 2,
  class: "rounded-xl border border-dashed p-10 text-center text-sm text-muted-foreground"
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "QuizAttempts",
  props: {
    quiz: {},
    attempts: {},
    isOwner: { type: Boolean },
    maxScore: {}
  },
  setup(__props) {
    const props = __props;
    const submitted = computed(() => props.attempts.filter((a) => a.status !== "in_progress"));
    const inProgress = computed(() => props.attempts.filter((a) => a.status === "in_progress"));
    const mySubmittedCount = computed(
      () => props.isOwner ? 0 : submitted.value.length
    );
    const attemptsRemaining = computed(() => {
      if (!props.quiz.max_attempts || props.isOwner) return null;
      return Math.max(0, props.quiz.max_attempts - mySubmittedCount.value);
    });
    const toDateLabel = (iso) => {
      if (!iso) return "—";
      return new Date(iso).toLocaleString();
    };
    const scorePercent = (score) => {
      if (score === null || props.maxScore === 0) return 0;
      return Math.round(score / props.maxScore * 100);
    };
    const scoreVariant = (score) => {
      const pct = scorePercent(score);
      if (pct >= 75) return "success";
      if (pct >= 50) return "secondary";
      return "destructive";
    };
    const bestScore = computed(() => {
      const scores = submitted.value.map((a) => a.total_score ?? 0);
      return scores.length ? Math.max(...scores) : null;
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(Fragment, null, [
        createVNode(unref(head_default), {
          title: `Attempts — ${props.quiz.title}`
        }, null, 8, ["title"]),
        createBaseVNode("div", _hoisted_1, [
          createBaseVNode("div", _hoisted_2, [
            createVNode(_sfc_main$1, {
              title: props.isOwner ? "All attempts" : "My attempts",
              description: props.isOwner ? `Everyone who has attempted "${props.quiz.title}".` : `Your attempts on "${props.quiz.title}".`
            }, null, 8, ["title", "description"]),
            createBaseVNode("div", _hoisted_3, [
              createVNode(unref(_sfc_main$2), {
                variant: "outline",
                class: "font-mono tracking-widest"
              }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(props.quiz.quiz_code), 1)
                ]),
                _: 1
              }),
              createVNode(unref(_sfc_main$3), {
                variant: "outline",
                size: "sm",
                "as-child": ""
              }, {
                default: withCtx(() => [
                  createVNode(unref(link_default), {
                    href: unref(index)()
                  }, {
                    default: withCtx(() => [..._cache[0] || (_cache[0] = [
                      createTextVNode("Back to quizzes", -1)
                    ])]),
                    _: 1
                  }, 8, ["href"])
                ]),
                _: 1
              })
            ])
          ]),
          createBaseVNode("div", _hoisted_4, [
            createVNode(unref(_sfc_main$7), { class: "text-center" }, {
              default: withCtx(() => [
                createVNode(unref(_sfc_main$4), { class: "pb-1 pt-4" }, {
                  default: withCtx(() => [
                    createVNode(unref(_sfc_main$5), { class: "text-xs" }, {
                      default: withCtx(() => [..._cache[1] || (_cache[1] = [
                        createTextVNode("Total attempts", -1)
                      ])]),
                      _: 1
                    })
                  ]),
                  _: 1
                }),
                createVNode(unref(_sfc_main$6), { class: "pb-4 text-3xl font-bold" }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(props.attempts.length), 1)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }),
            createVNode(unref(_sfc_main$7), { class: "text-center" }, {
              default: withCtx(() => [
                createVNode(unref(_sfc_main$4), { class: "pb-1 pt-4" }, {
                  default: withCtx(() => [
                    createVNode(unref(_sfc_main$5), { class: "text-xs" }, {
                      default: withCtx(() => [..._cache[2] || (_cache[2] = [
                        createTextVNode("Submitted", -1)
                      ])]),
                      _: 1
                    })
                  ]),
                  _: 1
                }),
                createVNode(unref(_sfc_main$6), { class: "pb-4 text-3xl font-bold" }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(submitted.value.length), 1)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }),
            createVNode(unref(_sfc_main$7), { class: "text-center" }, {
              default: withCtx(() => [
                createVNode(unref(_sfc_main$4), { class: "pb-1 pt-4" }, {
                  default: withCtx(() => [
                    createVNode(unref(_sfc_main$5), { class: "text-xs" }, {
                      default: withCtx(() => [..._cache[3] || (_cache[3] = [
                        createTextVNode("Max score", -1)
                      ])]),
                      _: 1
                    })
                  ]),
                  _: 1
                }),
                createVNode(unref(_sfc_main$6), { class: "pb-4 text-3xl font-bold" }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(props.maxScore), 1)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }),
            createVNode(unref(_sfc_main$7), { class: "text-center" }, {
              default: withCtx(() => [
                createVNode(unref(_sfc_main$4), { class: "pb-1 pt-4" }, {
                  default: withCtx(() => [
                    createVNode(unref(_sfc_main$5), { class: "text-xs" }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(props.isOwner ? "Avg score" : "Best score"), 1)
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }),
                createVNode(unref(_sfc_main$6), { class: "pb-4 text-3xl font-bold" }, {
                  default: withCtx(() => [
                    props.isOwner && submitted.value.length ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
                      createTextVNode(toDisplayString(Math.round(submitted.value.reduce((s, a) => s + (a.total_score ?? 0), 0) / submitted.value.length)), 1)
                    ], 64)) : !props.isOwner && bestScore.value !== null ? (openBlock(), createElementBlock(Fragment, { key: 1 }, [
                      createTextVNode(toDisplayString(bestScore.value), 1)
                    ], 64)) : (openBlock(), createElementBlock(Fragment, { key: 2 }, [
                      createTextVNode("—")
                    ], 64))
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })
          ]),
          props.quiz.max_attempts && !props.isOwner ? (openBlock(), createElementBlock("div", {
            key: 0,
            class: normalizeClass(["flex items-center gap-3 rounded-lg border px-4 py-3 text-sm", attemptsRemaining.value === 0 ? "border-destructive/30 bg-destructive/5 text-destructive" : "border-amber-300/50 bg-amber-50/50 text-amber-700 dark:bg-amber-900/10 dark:text-amber-400"])
          }, [
            createVNode(unref(Lock), { class: "size-4 shrink-0" }),
            attemptsRemaining.value === 0 ? (openBlock(), createElementBlock("span", _hoisted_5, [
              _cache[4] || (_cache[4] = createTextVNode(" You've used all ", -1)),
              createBaseVNode("strong", null, toDisplayString(props.quiz.max_attempts), 1),
              createTextVNode(" allowed attempt" + toDisplayString(props.quiz.max_attempts === 1 ? "" : "s") + ". ", 1)
            ])) : (openBlock(), createElementBlock("span", _hoisted_6, [
              _cache[5] || (_cache[5] = createTextVNode(" You have ", -1)),
              createBaseVNode("strong", null, toDisplayString(attemptsRemaining.value), 1),
              createTextVNode(" of " + toDisplayString(props.quiz.max_attempts) + " attempt" + toDisplayString(props.quiz.max_attempts === 1 ? "" : "s") + " remaining. ", 1)
            ]))
          ], 2)) : createCommentVNode("", true),
          inProgress.value.length > 0 ? (openBlock(), createBlock(unref(_sfc_main$7), { key: 1 }, {
            default: withCtx(() => [
              createVNode(unref(_sfc_main$4), null, {
                default: withCtx(() => [
                  createVNode(unref(_sfc_main$8), { class: "flex items-center gap-2 text-sm font-semibold" }, {
                    default: withCtx(() => [
                      createVNode(unref(Clock), { class: "size-4 text-amber-500" }),
                      createTextVNode(" In progress (" + toDisplayString(inProgress.value.length) + ") ", 1)
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(unref(_sfc_main$6), { class: "flex flex-col divide-y" }, {
                default: withCtx(() => [
                  (openBlock(true), createElementBlock(Fragment, null, renderList(inProgress.value, (attempt) => {
                    return openBlock(), createElementBlock("div", {
                      key: attempt.id,
                      class: "flex flex-wrap items-center justify-between gap-3 py-3 first:pt-0 last:pb-0"
                    }, [
                      createBaseVNode("div", null, [
                        createBaseVNode("p", _hoisted_7, toDisplayString(attempt.user ? attempt.user.name : `Attempt #${attempt.attempt_number}`), 1),
                        attempt.user ? (openBlock(), createElementBlock("p", _hoisted_8, " Attempt #" + toDisplayString(attempt.attempt_number), 1)) : createCommentVNode("", true),
                        createBaseVNode("p", _hoisted_9, "Started " + toDisplayString(toDateLabel(attempt.started_at)), 1)
                      ]),
                      createVNode(unref(_sfc_main$2), { variant: "secondary" }, {
                        default: withCtx(() => [..._cache[6] || (_cache[6] = [
                          createTextVNode("In progress", -1)
                        ])]),
                        _: 1
                      })
                    ]);
                  }), 128))
                ]),
                _: 1
              })
            ]),
            _: 1
          })) : createCommentVNode("", true),
          createVNode(unref(_sfc_main$7), null, {
            default: withCtx(() => [
              createVNode(unref(_sfc_main$4), null, {
                default: withCtx(() => [
                  createVNode(unref(_sfc_main$8), { class: "flex items-center gap-2 text-sm font-semibold" }, {
                    default: withCtx(() => [
                      createVNode(unref(CircleCheck), { class: "size-4 text-emerald-500" }),
                      createTextVNode(" Submitted (" + toDisplayString(submitted.value.length) + ") ", 1)
                    ]),
                    _: 1
                  }),
                  submitted.value.length === 0 ? (openBlock(), createBlock(unref(_sfc_main$5), { key: 0 }, {
                    default: withCtx(() => [..._cache[7] || (_cache[7] = [
                      createTextVNode("No submitted attempts yet.", -1)
                    ])]),
                    _: 1
                  })) : createCommentVNode("", true)
                ]),
                _: 1
              }),
              submitted.value.length > 0 ? (openBlock(), createBlock(unref(_sfc_main$6), {
                key: 0,
                class: "flex flex-col divide-y p-0"
              }, {
                default: withCtx(() => [
                  (openBlock(true), createElementBlock(Fragment, null, renderList(submitted.value, (attempt) => {
                    return openBlock(), createElementBlock("div", {
                      key: attempt.id,
                      class: "flex flex-wrap items-center justify-between gap-4 px-6 py-4"
                    }, [
                      createBaseVNode("div", _hoisted_10, [
                        createBaseVNode("p", _hoisted_11, toDisplayString(attempt.user ? attempt.user.name : `Attempt #${attempt.attempt_number}`), 1),
                        attempt.user ? (openBlock(), createElementBlock("p", _hoisted_12, " Attempt #" + toDisplayString(attempt.attempt_number), 1)) : createCommentVNode("", true),
                        createBaseVNode("p", _hoisted_13, toDisplayString(toDateLabel(attempt.submitted_at)), 1)
                      ]),
                      createBaseVNode("div", _hoisted_14, [
                        createBaseVNode("div", _hoisted_15, [
                          createBaseVNode("span", _hoisted_16, toDisplayString(attempt.total_score ?? 0) + " / " + toDisplayString(props.maxScore), 1),
                          createBaseVNode("div", _hoisted_17, [
                            createBaseVNode("div", {
                              class: normalizeClass(["h-full rounded-full transition-all", scoreVariant(attempt.total_score) === "success" ? "bg-emerald-500" : scoreVariant(attempt.total_score) === "secondary" ? "bg-amber-400" : "bg-rose-500"]),
                              style: normalizeStyle({ width: `${scorePercent(attempt.total_score)}%` })
                            }, null, 6)
                          ])
                        ]),
                        createVNode(unref(_sfc_main$2), {
                          variant: scoreVariant(attempt.total_score),
                          class: "shrink-0"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(scorePercent(attempt.total_score)) + "% ", 1)
                          ]),
                          _: 2
                        }, 1032, ["variant"]),
                        createVNode(unref(_sfc_main$3), {
                          size: "sm",
                          variant: "outline",
                          "as-child": ""
                        }, {
                          default: withCtx(() => [
                            createVNode(unref(link_default), {
                              href: unref(results)(attempt.id).url
                            }, {
                              default: withCtx(() => [
                                createVNode(unref(ExternalLink), { class: "size-3.5" }),
                                _cache[8] || (_cache[8] = createTextVNode(" Results ", -1))
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
                _: 1
              })) : createCommentVNode("", true)
            ]),
            _: 1
          }),
          props.attempts.length === 0 ? (openBlock(), createElementBlock("div", _hoisted_18, " No attempts have been made on this quiz yet. ")) : createCommentVNode("", true)
        ])
      ], 64);
    };
  }
});
export {
  _sfc_main as default
};
