import { c as createLucideIcon, d as defineComponent, o as openBlock, a as createElementBlock, b as createVNode, e as unref, h as head_default, f as createBaseVNode, v as _sfc_main$1, g as withCtx, x as link_default, i as createTextVNode, _ as _sfc_main$2, k as createBlock, l as createCommentVNode, t as toDisplayString, F as Fragment, r as renderList, n as normalizeClass, p as ref, E as router, s as start } from "./app-Cfclc8Ry.js";
import { _ as _sfc_main$9 } from "./QuizStartDialog.vue_vue_type_script_setup_true_lang-DK2SBqGP.js";
import { e as edit, _ as _sfc_main$7, i as index } from "./index-CVHLUG6O.js";
import { _ as _sfc_main$3, a as _sfc_main$4, b as _sfc_main$6, c as _sfc_main$8 } from "./CardTitle.vue_vue_type_script_setup_true_lang-Bge0ZIzB.js";
import { _ as _sfc_main$5 } from "./CardDescription.vue_vue_type_script_setup_true_lang-B_SOdC6_.js";
import { P as Play } from "./play-CidTwS3d.js";
import { C as CircleCheck } from "./circle-check-BQpHXS-I.js";
import { C as Copy } from "./copy-BkWK1HpP.js";
import "./index-CzN0jo7U.js";
import "./DialogTitle.vue_vue_type_script_setup_true_lang-BaQhwGMt.js";
import "./DialogFooter.vue_vue_type_script_setup_true_lang-CQ3oylvq.js";
import "./triangle-alert-547kexM4.js";
/**
 * @license lucide-vue-next v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Share2 = createLucideIcon("Share2Icon", [
  ["circle", { cx: "18", cy: "5", r: "3", key: "gq8acd" }],
  ["circle", { cx: "6", cy: "12", r: "3", key: "w7nqdw" }],
  ["circle", { cx: "18", cy: "19", r: "3", key: "1xt0gg" }],
  ["line", { x1: "8.59", x2: "15.42", y1: "13.51", y2: "17.49", key: "47mynk" }],
  ["line", { x1: "15.41", x2: "8.59", y1: "6.51", y2: "10.49", key: "1n3mei" }]
]);
const _hoisted_1 = { class: "mx-auto flex w-full max-w-4xl flex-col gap-6 p-6" };
const _hoisted_2 = { class: "flex flex-wrap items-start justify-between gap-4" };
const _hoisted_3 = { class: "flex flex-wrap gap-2" };
const _hoisted_4 = { class: "flex items-center gap-2 text-sm font-medium text-muted-foreground" };
const _hoisted_5 = { class: "flex h-16 items-center rounded-xl border-2 border-dashed border-primary/40 bg-background px-6 font-mono text-3xl font-bold tracking-[0.3em] text-primary" };
const _hoisted_6 = {
  key: 0,
  class: "rounded-lg border border-dashed p-6 text-center text-sm text-muted-foreground"
};
const _hoisted_7 = { class: "mb-3 flex items-start justify-between gap-3" };
const _hoisted_8 = { class: "flex items-center gap-2" };
const _hoisted_9 = { class: "mb-3 text-base font-medium" };
const _hoisted_10 = {
  key: 0,
  class: "grid gap-2"
};
const _hoisted_11 = {
  key: 1,
  class: "size-4 rounded-full border"
};
const _hoisted_12 = {
  key: 1,
  class: "grid gap-1 text-sm"
};
const _hoisted_13 = { class: "flex flex-wrap gap-1.5" };
const _hoisted_14 = {
  key: 2,
  class: "mt-3 rounded-md bg-muted/50 p-2 text-xs text-muted-foreground"
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...{
    layout: {
      breadcrumbs: [
        { title: "Quizzes", href: index() },
        { title: "Details", href: "#" }
      ]
    }
  },
  __name: "Show",
  props: {
    quiz: {}
  },
  setup(__props) {
    const props = __props;
    const copied = ref(false);
    const startDialogOpen = ref(false);
    const startingInProgress = ref(false);
    const copyCode = async () => {
      try {
        await navigator.clipboard.writeText(props.quiz.quiz_code);
        copied.value = true;
        setTimeout(() => copied.value = false, 1500);
      } catch {
      }
    };
    const typeLabel = (type) => ({
      multiple_choice: "Multiple choice",
      true_false: "True / False",
      short_answer: "Short answer"
    })[type];
    const confirmStart = () => {
      startingInProgress.value = true;
      router.post(
        start.url({ quiz: props.quiz.id }),
        {},
        { onFinish: () => {
          startingInProgress.value = false;
        } }
      );
    };
    const totalPoints = props.quiz.questions.reduce((s, q) => s + q.points, 0);
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(Fragment, null, [
        createVNode(unref(head_default), {
          title: props.quiz.title
        }, null, 8, ["title"]),
        createBaseVNode("div", _hoisted_1, [
          createBaseVNode("div", _hoisted_2, [
            createVNode(_sfc_main$1, {
              title: props.quiz.title,
              description: props.quiz.description ?? "No description provided."
            }, null, 8, ["title", "description"]),
            createBaseVNode("div", _hoisted_3, [
              createVNode(unref(_sfc_main$2), {
                variant: "outline",
                "as-child": ""
              }, {
                default: withCtx(() => [
                  createVNode(unref(link_default), {
                    href: unref(edit)(props.quiz.id)
                  }, {
                    default: withCtx(() => [..._cache[2] || (_cache[2] = [
                      createTextVNode("Edit", -1)
                    ])]),
                    _: 1
                  }, 8, ["href"])
                ]),
                _: 1
              }),
              props.quiz.status === "active" ? (openBlock(), createBlock(unref(_sfc_main$2), {
                key: 0,
                onClick: _cache[0] || (_cache[0] = ($event) => startDialogOpen.value = true)
              }, {
                default: withCtx(() => [
                  createVNode(unref(Play), { class: "size-4" }),
                  _cache[3] || (_cache[3] = createTextVNode(" Take quiz ", -1))
                ]),
                _: 1
              })) : createCommentVNode("", true)
            ])
          ]),
          createVNode(unref(_sfc_main$8), { class: "border-primary/30 bg-gradient-to-br from-primary/5 to-transparent" }, {
            default: withCtx(() => [
              createVNode(unref(_sfc_main$3), null, {
                default: withCtx(() => [
                  createBaseVNode("div", _hoisted_4, [
                    createVNode(unref(Share2), { class: "size-4" }),
                    _cache[4] || (_cache[4] = createTextVNode(" Share this quiz ", -1))
                  ]),
                  createVNode(unref(_sfc_main$4), null, {
                    default: withCtx(() => [..._cache[5] || (_cache[5] = [
                      createTextVNode("Join code", -1)
                    ])]),
                    _: 1
                  }),
                  createVNode(unref(_sfc_main$5), null, {
                    default: withCtx(() => [..._cache[6] || (_cache[6] = [
                      createTextVNode(" Anyone signed in can go to /join and enter this code to take the quiz. ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(unref(_sfc_main$6), { class: "flex flex-wrap items-center gap-4" }, {
                default: withCtx(() => [
                  createBaseVNode("div", _hoisted_5, toDisplayString(props.quiz.quiz_code), 1),
                  createVNode(unref(_sfc_main$2), {
                    variant: "outline",
                    onClick: copyCode
                  }, {
                    default: withCtx(() => [
                      copied.value ? (openBlock(), createBlock(unref(CircleCheck), {
                        key: 0,
                        class: "size-4 text-emerald-500"
                      })) : (openBlock(), createBlock(unref(Copy), {
                        key: 1,
                        class: "size-4"
                      })),
                      createTextVNode(" " + toDisplayString(copied.value ? "Copied" : "Copy code"), 1)
                    ]),
                    _: 1
                  }),
                  createVNode(unref(_sfc_main$7), {
                    variant: props.quiz.status === "active" ? "success" : "secondary"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(props.quiz.status), 1)
                    ]),
                    _: 1
                  }, 8, ["variant"])
                ]),
                _: 1
              })
            ]),
            _: 1
          }),
          createVNode(unref(_sfc_main$8), null, {
            default: withCtx(() => [
              createVNode(unref(_sfc_main$3), null, {
                default: withCtx(() => [
                  createVNode(unref(_sfc_main$4), null, {
                    default: withCtx(() => [..._cache[7] || (_cache[7] = [
                      createTextVNode("Questions", -1)
                    ])]),
                    _: 1
                  }),
                  createVNode(unref(_sfc_main$5), null, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(props.quiz.questions.length) + " question" + toDisplayString(props.quiz.questions.length === 1 ? "" : "s") + " · " + toDisplayString(unref(totalPoints)) + " point" + toDisplayString(unref(totalPoints) === 1 ? "" : "s") + " total ", 1)
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(unref(_sfc_main$6), { class: "flex flex-col gap-4" }, {
                default: withCtx(() => [
                  props.quiz.questions.length === 0 ? (openBlock(), createElementBlock("div", _hoisted_6, " No questions yet. Add some in the editor. ")) : createCommentVNode("", true),
                  (openBlock(true), createElementBlock(Fragment, null, renderList(props.quiz.questions, (question, index2) => {
                    var _a;
                    return openBlock(), createElementBlock("div", {
                      key: question.id,
                      class: "rounded-xl border bg-card p-4 shadow-sm"
                    }, [
                      createBaseVNode("div", _hoisted_7, [
                        createBaseVNode("div", _hoisted_8, [
                          createVNode(unref(_sfc_main$7), { variant: "outline" }, {
                            default: withCtx(() => [
                              createTextVNode("Q" + toDisplayString(index2 + 1), 1)
                            ]),
                            _: 2
                          }, 1024),
                          createVNode(unref(_sfc_main$7), { variant: "secondary" }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(typeLabel(question.type)), 1)
                            ]),
                            _: 2
                          }, 1024),
                          createVNode(unref(_sfc_main$7), { variant: "honey" }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(question.points) + " pt" + toDisplayString(question.points === 1 ? "" : "s"), 1)
                            ]),
                            _: 2
                          }, 1024)
                        ])
                      ]),
                      createBaseVNode("p", _hoisted_9, toDisplayString(question.question_text), 1),
                      question.type !== "short_answer" && ((_a = question.choices) == null ? void 0 : _a.length) ? (openBlock(), createElementBlock("div", _hoisted_10, [
                        (openBlock(true), createElementBlock(Fragment, null, renderList(question.choices, (choice) => {
                          return openBlock(), createElementBlock("div", {
                            key: choice.id,
                            class: normalizeClass(["flex items-center gap-2 rounded-md border bg-background p-2 text-sm", choice.is_correct ? "border-emerald-300 bg-emerald-50 dark:bg-emerald-900/20" : ""])
                          }, [
                            choice.is_correct ? (openBlock(), createBlock(unref(CircleCheck), {
                              key: 0,
                              class: "size-4 text-emerald-500"
                            })) : (openBlock(), createElementBlock("span", _hoisted_11)),
                            createBaseVNode("span", null, toDisplayString(choice.choice_text), 1)
                          ], 2);
                        }), 128))
                      ])) : question.type === "short_answer" ? (openBlock(), createElementBlock("div", _hoisted_12, [
                        _cache[8] || (_cache[8] = createBaseVNode("span", { class: "text-muted-foreground" }, "Accepted answers:", -1)),
                        createBaseVNode("div", _hoisted_13, [
                          (openBlock(true), createElementBlock(Fragment, null, renderList(question.correct_answer ?? [], (answer) => {
                            return openBlock(), createBlock(unref(_sfc_main$7), {
                              key: answer,
                              variant: "honey"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(answer), 1)
                              ]),
                              _: 2
                            }, 1024);
                          }), 128))
                        ])
                      ])) : createCommentVNode("", true),
                      question.explanation ? (openBlock(), createElementBlock("p", _hoisted_14, [
                        _cache[9] || (_cache[9] = createBaseVNode("span", { class: "font-semibold" }, "Why:", -1)),
                        createTextVNode(" " + toDisplayString(question.explanation), 1)
                      ])) : createCommentVNode("", true)
                    ]);
                  }), 128))
                ]),
                _: 1
              })
            ]),
            _: 1
          })
        ]),
        createVNode(_sfc_main$9, {
          open: startDialogOpen.value,
          "onUpdate:open": _cache[1] || (_cache[1] = ($event) => startDialogOpen.value = $event),
          quiz: props.quiz,
          processing: startingInProgress.value,
          onConfirm: confirmStart
        }, null, 8, ["open", "quiz", "processing"])
      ], 64);
    };
  }
});
export {
  _sfc_main as default
};
