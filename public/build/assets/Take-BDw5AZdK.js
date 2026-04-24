import { c as createLucideIcon, d as defineComponent, A as reactive, o as openBlock, a as createElementBlock, b as createVNode, e as unref, h as head_default, f as createBaseVNode, t as toDisplayString, l as createCommentVNode, g as withCtx, i as createTextVNode, y as normalizeStyle, F as Fragment, r as renderList, k as createBlock, n as normalizeClass, B as withDirectives, C as vModelText, _ as _sfc_main$6, D as ChevronRight, p as ref, m as computed, E as router, G as submit } from "./app-Cfclc8Ry.js";
import { _ as _sfc_main$7 } from "./ConfirmDialog.vue_vue_type_script_setup_true_lang-C8L4l6AP.js";
import { _ as _sfc_main$1, i as index } from "./index-CVHLUG6O.js";
import { _ as _sfc_main$2, a as _sfc_main$3, b as _sfc_main$4, c as _sfc_main$5 } from "./CardTitle.vue_vue_type_script_setup_true_lang-Bge0ZIzB.js";
import { C as ChevronLeft } from "./chevron-left-DWWESumj.js";
import "./DialogTitle.vue_vue_type_script_setup_true_lang-BaQhwGMt.js";
import "./DialogFooter.vue_vue_type_script_setup_true_lang-CQ3oylvq.js";
import "./triangle-alert-547kexM4.js";
/**
 * @license lucide-vue-next v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Flag = createLucideIcon("FlagIcon", [
  ["path", { d: "M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z", key: "i9b6wo" }],
  ["line", { x1: "4", x2: "4", y1: "22", y2: "15", key: "1cm3nv" }]
]);
const _hoisted_1 = { class: "mx-auto flex w-full max-w-3xl flex-col gap-6 p-6" };
const _hoisted_2 = { class: "flex flex-col gap-2" };
const _hoisted_3 = { class: "flex items-center justify-between" };
const _hoisted_4 = { class: "text-xl font-semibold" };
const _hoisted_5 = {
  key: 0,
  class: "text-sm text-muted-foreground"
};
const _hoisted_6 = { class: "h-2 rounded-full bg-muted" };
const _hoisted_7 = { class: "flex flex-wrap gap-1.5" };
const _hoisted_8 = ["onClick"];
const _hoisted_9 = { class: "flex flex-wrap items-center gap-2" };
const _hoisted_10 = {
  key: 1,
  class: "text-xs text-muted-foreground"
};
const _hoisted_11 = {
  key: 0,
  class: "grid gap-2"
};
const _hoisted_12 = ["disabled", "onClick"];
const _hoisted_13 = { class: "flex-1 text-sm" };
const _hoisted_14 = {
  key: 1,
  class: "grid gap-2"
};
const _hoisted_15 = { class: "flex items-center justify-between gap-2" };
const _hoisted_16 = { class: "flex gap-2" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...{
    layout: {
      breadcrumbs: [
        { title: "Quizzes", href: index() },
        { title: "Taking", href: "#" }
      ]
    }
  },
  __name: "Take",
  props: {
    attempt: {}
  },
  setup(__props) {
    const props = __props;
    const questions = props.attempt.quiz.questions;
    const currentIndex = ref(0);
    const submitting = ref(false);
    const submitDialogOpen = ref(false);
    const answers = reactive(
      Object.fromEntries(questions.map((q) => [q.id, { choice_ids: [], text: "" }]))
    );
    const current = computed(() => questions[currentIndex.value]);
    const progress = computed(() => questions.length === 0 ? 0 : (currentIndex.value + 1) / questions.length * 100);
    const isLast = computed(() => questions.length === 0 || currentIndex.value === questions.length - 1);
    const answeredCount = computed(
      () => questions.filter((q) => {
        const a = answers[q.id];
        if (q.type === "short_answer") {
          return a.text.trim().length > 0;
        }
        return a.choice_ids.length > 0;
      }).length
    );
    const isSingleSelect = (question) => question.type === "true_false" || question.correct_count === 1;
    const selectionLabel = (question) => {
      if (!question || question.type !== "multiple_choice") return null;
      if (question.correct_count === 1) return "Select one answer";
      return `Select up to ${question.correct_count}`;
    };
    const selectionProgress = (question) => {
      if (!question || question.type !== "multiple_choice" || question.correct_count <= 1) return null;
      const selected = answers[question.id].choice_ids.length;
      return `${selected} of ${question.correct_count} selected`;
    };
    const isAtLimit = (question) => {
      if (isSingleSelect(question)) return false;
      return answers[question.id].choice_ids.length >= question.correct_count;
    };
    const toggleChoice = (question, choiceId) => {
      const state = answers[question.id];
      const index2 = state.choice_ids.indexOf(choiceId);
      const selected = index2 >= 0;
      if (isSingleSelect(question)) {
        state.choice_ids = selected ? [] : [choiceId];
        return;
      }
      if (selected) {
        state.choice_ids.splice(index2, 1);
      } else if (!isAtLimit(question)) {
        state.choice_ids.push(choiceId);
      }
    };
    const isSelected = (question, choiceId) => answers[question.id].choice_ids.includes(choiceId);
    const isDisabled = (question, choiceId) => !isSingleSelect(question) && !isSelected(question, choiceId) && isAtLimit(question);
    const next = () => {
      if (currentIndex.value < questions.length - 1) {
        currentIndex.value += 1;
      }
    };
    const prev = () => {
      if (currentIndex.value > 0) {
        currentIndex.value -= 1;
      }
    };
    const goTo = (index2) => {
      currentIndex.value = index2;
    };
    const submit$1 = () => {
      if (submitting.value) {
        return;
      }
      submitDialogOpen.value = false;
      submitting.value = true;
      router.post(
        submit.url({ attempt: props.attempt.id }),
        {
          answers: questions.map((q) => ({
            question_id: q.id,
            choice_ids: answers[q.id].choice_ids,
            text: answers[q.id].text
          }))
        },
        {
          onFinish: () => {
            submitting.value = false;
          }
        }
      );
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(Fragment, null, [
        createVNode(unref(head_default), {
          title: `Taking: ${props.attempt.quiz.title}`
        }, null, 8, ["title"]),
        createBaseVNode("div", _hoisted_1, [
          createBaseVNode("div", _hoisted_2, [
            createBaseVNode("div", _hoisted_3, [
              createBaseVNode("div", null, [
                createBaseVNode("h1", _hoisted_4, toDisplayString(props.attempt.quiz.title), 1),
                props.attempt.quiz.description ? (openBlock(), createElementBlock("p", _hoisted_5, toDisplayString(props.attempt.quiz.description), 1)) : createCommentVNode("", true)
              ]),
              createVNode(unref(_sfc_main$1), { variant: "outline" }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(answeredCount.value) + "/" + toDisplayString(unref(questions).length) + " answered ", 1)
                ]),
                _: 1
              })
            ]),
            createBaseVNode("div", _hoisted_6, [
              createBaseVNode("div", {
                class: "h-full rounded-full bg-primary transition-all",
                style: normalizeStyle({ width: `${progress.value}%` })
              }, null, 4)
            ])
          ]),
          createBaseVNode("div", _hoisted_7, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(unref(questions), (q, index2) => {
              return openBlock(), createElementBlock("button", {
                key: q.id,
                type: "button",
                class: normalizeClass(["flex size-8 items-center justify-center rounded-full border text-xs font-medium transition", [
                  index2 === currentIndex.value ? "border-primary bg-primary text-primary-foreground" : "",
                  index2 !== currentIndex.value && (answers[q.id].choice_ids.length > 0 || answers[q.id].text.trim().length > 0) ? "border-emerald-500 bg-emerald-50 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300" : "",
                  index2 !== currentIndex.value && !(answers[q.id].choice_ids.length > 0 || answers[q.id].text.trim().length > 0) ? "border-muted bg-background text-muted-foreground" : ""
                ]]),
                onClick: ($event) => goTo(index2)
              }, toDisplayString(index2 + 1), 11, _hoisted_8);
            }), 128))
          ]),
          current.value ? (openBlock(), createBlock(unref(_sfc_main$5), { key: 0 }, {
            default: withCtx(() => [
              createVNode(unref(_sfc_main$2), null, {
                default: withCtx(() => [
                  createBaseVNode("div", _hoisted_9, [
                    createVNode(unref(_sfc_main$1), { variant: "outline" }, {
                      default: withCtx(() => [
                        createTextVNode("Question " + toDisplayString(currentIndex.value + 1) + " of " + toDisplayString(unref(questions).length), 1)
                      ]),
                      _: 1
                    }),
                    createVNode(unref(_sfc_main$1), { variant: "honey" }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(current.value.points) + " pt" + toDisplayString(current.value.points === 1 ? "" : "s"), 1)
                      ]),
                      _: 1
                    }),
                    selectionLabel(current.value) ? (openBlock(), createBlock(unref(_sfc_main$1), {
                      key: 0,
                      variant: "secondary"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(selectionLabel(current.value)), 1)
                      ]),
                      _: 1
                    })) : createCommentVNode("", true),
                    selectionProgress(current.value) ? (openBlock(), createElementBlock("span", _hoisted_10, toDisplayString(selectionProgress(current.value)), 1)) : createCommentVNode("", true)
                  ]),
                  createVNode(unref(_sfc_main$3), { class: "text-lg leading-relaxed" }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(current.value.question_text), 1)
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(unref(_sfc_main$4), null, {
                default: withCtx(() => [
                  current.value.type !== "short_answer" ? (openBlock(), createElementBlock("div", _hoisted_11, [
                    (openBlock(true), createElementBlock(Fragment, null, renderList(current.value.choices, (choice) => {
                      return openBlock(), createElementBlock("button", {
                        key: choice.id,
                        type: "button",
                        class: normalizeClass(["flex items-start gap-3 rounded-lg border p-4 text-left transition", [
                          isSelected(current.value, choice.id) ? "border-primary bg-primary/5 ring-2 ring-primary/40" : isDisabled(current.value, choice.id) ? "cursor-not-allowed border-muted opacity-50" : "hover:border-primary/60 hover:bg-muted/40"
                        ]]),
                        disabled: isDisabled(current.value, choice.id),
                        onClick: ($event) => toggleChoice(current.value, choice.id)
                      }, [
                        createBaseVNode("span", {
                          class: normalizeClass(["mt-0.5 flex size-6 shrink-0 items-center justify-center border text-xs font-semibold transition", [
                            isSingleSelect(current.value) ? "rounded-full" : "rounded-md",
                            isSelected(current.value, choice.id) ? "border-primary bg-primary text-primary-foreground" : "text-muted-foreground"
                          ]])
                        }, toDisplayString(isSelected(current.value, choice.id) ? "✓" : ""), 3),
                        createBaseVNode("span", _hoisted_13, toDisplayString(choice.choice_text), 1)
                      ], 10, _hoisted_12);
                    }), 128))
                  ])) : (openBlock(), createElementBlock("div", _hoisted_14, [
                    withDirectives(createBaseVNode("textarea", {
                      "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => answers[current.value.id].text = $event),
                      rows: "4",
                      class: "border-input bg-background focus-visible:ring-ring/50 w-full rounded-md border px-3 py-2 text-sm shadow-xs outline-none focus-visible:ring-[3px]",
                      placeholder: "Type your answer..."
                    }, null, 512), [
                      [vModelText, answers[current.value.id].text]
                    ])
                  ]))
                ]),
                _: 1
              })
            ]),
            _: 1
          })) : (openBlock(), createBlock(unref(_sfc_main$5), { key: 1 }, {
            default: withCtx(() => [
              createVNode(unref(_sfc_main$4), { class: "py-10 text-center text-sm text-muted-foreground" }, {
                default: withCtx(() => [..._cache[3] || (_cache[3] = [
                  createTextVNode(" This quiz has no questions. ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })),
          createBaseVNode("div", _hoisted_15, [
            createVNode(unref(_sfc_main$6), {
              variant: "outline",
              disabled: currentIndex.value === 0,
              onClick: prev
            }, {
              default: withCtx(() => [
                createVNode(unref(ChevronLeft), { class: "size-4" }),
                _cache[4] || (_cache[4] = createTextVNode(" Previous ", -1))
              ]),
              _: 1
            }, 8, ["disabled"]),
            createBaseVNode("div", _hoisted_16, [
              !isLast.value ? (openBlock(), createBlock(unref(_sfc_main$6), {
                key: 0,
                onClick: next
              }, {
                default: withCtx(() => [
                  _cache[5] || (_cache[5] = createTextVNode(" Next ", -1)),
                  createVNode(unref(ChevronRight), { class: "size-4" })
                ]),
                _: 1
              })) : (openBlock(), createBlock(unref(_sfc_main$6), {
                key: 1,
                disabled: submitting.value,
                onClick: _cache[1] || (_cache[1] = ($event) => submitDialogOpen.value = true)
              }, {
                default: withCtx(() => [
                  createVNode(unref(Flag), { class: "size-4" }),
                  _cache[6] || (_cache[6] = createTextVNode(" Submit quiz ", -1))
                ]),
                _: 1
              }, 8, ["disabled"]))
            ])
          ])
        ]),
        createVNode(_sfc_main$7, {
          open: submitDialogOpen.value,
          "onUpdate:open": _cache[2] || (_cache[2] = ($event) => submitDialogOpen.value = $event),
          title: "Submit quiz?",
          description: `You've answered ${answeredCount.value} of ${unref(questions).length} question${unref(questions).length === 1 ? "" : "s"}. Once submitted, your answers cannot be changed.`,
          "confirm-label": "Submit quiz",
          processing: submitting.value,
          onConfirm: submit$1
        }, null, 8, ["open", "description", "processing"])
      ], 64);
    };
  }
});
export {
  _sfc_main as default
};
