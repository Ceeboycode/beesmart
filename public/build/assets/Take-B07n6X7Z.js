import { c as createLucideIcon, d as defineComponent, p as ref, A as reactive, B as onMounted, C as onUnmounted, o as openBlock, a as createElementBlock, b as createVNode, e as unref, h as head_default, f as createBaseVNode, i as createTextVNode, t as toDisplayString, k as createBlock, g as withCtx, l as createCommentVNode, F as Fragment, T as Transition, y as normalizeStyle, r as renderList, n as normalizeClass, D as withDirectives, E as vModelText, _ as _sfc_main$6, G as ChevronRight, m as computed, H as router, I as submit, J as recordViolation } from "./app-U-Wu707C.js";
import { _ as _sfc_main$7 } from "./ConfirmDialog.vue_vue_type_script_setup_true_lang-DqKgXRjN.js";
import { _ as _sfc_main$1, i as index } from "./index-2dJNrEoj.js";
import { _ as _sfc_main$4, a as _sfc_main$5 } from "./CardContent.vue_vue_type_script_setup_true_lang-T4Xk2G9g.js";
import { _ as _sfc_main$2, a as _sfc_main$3 } from "./CardTitle.vue_vue_type_script_setup_true_lang-DjK7ckh3.js";
import { M as MonitorX, C as ChevronLeft } from "./monitor-x-Cisb6MMH.js";
import { T as TriangleAlert } from "./triangle-alert-CeaKFo9s.js";
import "./DialogTitle.vue_vue_type_script_setup_true_lang-DNuLu2i_.js";
import "./DialogFooter.vue_vue_type_script_setup_true_lang-DLXOiuZd.js";
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
const _hoisted_2 = {
  key: 0,
  class: "flex items-center justify-between gap-3 rounded-lg border border-amber-200 bg-amber-50 px-4 py-2.5 text-sm dark:border-amber-800 dark:bg-amber-900/20"
};
const _hoisted_3 = { class: "flex items-center gap-2 text-amber-700 dark:text-amber-400" };
const _hoisted_4 = { key: 0 };
const _hoisted_5 = { key: 1 };
const _hoisted_6 = {
  key: 0,
  class: "flex items-start gap-3 rounded-lg border border-red-200 bg-red-50 p-4 text-sm dark:border-red-800/50 dark:bg-red-900/20"
};
const _hoisted_7 = { class: "text-red-700 dark:text-red-300" };
const _hoisted_8 = { class: "text-xs mt-0.5" };
const _hoisted_9 = { class: "flex flex-col gap-2" };
const _hoisted_10 = { class: "flex items-center justify-between" };
const _hoisted_11 = { class: "text-xl font-semibold" };
const _hoisted_12 = {
  key: 0,
  class: "text-sm text-muted-foreground"
};
const _hoisted_13 = { class: "h-2 rounded-full bg-muted" };
const _hoisted_14 = { class: "flex flex-wrap gap-1.5" };
const _hoisted_15 = ["onClick"];
const _hoisted_16 = { class: "flex flex-wrap items-center gap-2" };
const _hoisted_17 = {
  key: 1,
  class: "text-xs text-muted-foreground"
};
const _hoisted_18 = {
  key: 0,
  class: "grid gap-2"
};
const _hoisted_19 = ["disabled", "onClick"];
const _hoisted_20 = { class: "flex-1 text-sm" };
const _hoisted_21 = {
  key: 1,
  class: "grid gap-2"
};
const _hoisted_22 = { class: "flex items-center justify-between gap-2" };
const _hoisted_23 = { class: "flex gap-2" };
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
    const tabViolations = ref(props.attempt.tab_violations);
    const showViolationAlert = ref(false);
    const violationAlertTimer = ref(null);
    const recordingViolation = ref(false);
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
    const buildAnswersPayload = () => questions.map((q) => ({
      question_id: q.id,
      choice_ids: answers[q.id].choice_ids,
      text: answers[q.id].text
    }));
    const submit$1 = () => {
      if (submitting.value) return;
      submitDialogOpen.value = false;
      submitting.value = true;
      window.removeEventListener("beforeunload", onBeforeUnload);
      router.post(
        submit.url({ attempt: props.attempt.id }),
        { answers: buildAnswersPayload() },
        { onFinish: () => {
          submitting.value = false;
        } }
      );
    };
    const getCsrfToken = () => {
      const match = document.cookie.match(/XSRF-TOKEN=([^;]+)/);
      return match ? decodeURIComponent(match[1]) : "";
    };
    let lastViolationTime = 0;
    const handleTabViolation = async () => {
      if (!props.attempt.quiz.tab_monitoring_enabled) return;
      if (submitting.value || recordingViolation.value) return;
      const now = Date.now();
      if (now - lastViolationTime < 1500) return;
      lastViolationTime = now;
      recordingViolation.value = true;
      try {
        const res = await fetch(recordViolation.url({ attempt: props.attempt.id }), {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
            "X-XSRF-TOKEN": getCsrfToken()
          }
        });
        if (!res.ok) return;
        const data = await res.json();
        tabViolations.value = data.violations;
        if (data.should_auto_submit) {
          submit$1();
        } else {
          showViolationAlert.value = true;
          if (violationAlertTimer.value) clearTimeout(violationAlertTimer.value);
          violationAlertTimer.value = setTimeout(() => {
            showViolationAlert.value = false;
          }, 6e3);
        }
      } finally {
        recordingViolation.value = false;
      }
    };
    const onVisibilityChange = () => {
      if (document.hidden) handleTabViolation();
    };
    const onWindowBlur = () => {
      if (!document.hidden) handleTabViolation();
    };
    const onBeforeUnload = (e) => {
      if (submitting.value) return;
      e.preventDefault();
    };
    onMounted(() => {
      if (props.attempt.quiz.tab_monitoring_enabled) {
        document.addEventListener("visibilitychange", onVisibilityChange);
        window.addEventListener("blur", onWindowBlur);
      }
      window.addEventListener("beforeunload", onBeforeUnload);
    });
    onUnmounted(() => {
      document.removeEventListener("visibilitychange", onVisibilityChange);
      window.removeEventListener("blur", onWindowBlur);
      window.removeEventListener("beforeunload", onBeforeUnload);
      if (violationAlertTimer.value) clearTimeout(violationAlertTimer.value);
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(Fragment, null, [
        createVNode(unref(head_default), {
          title: `Taking: ${props.attempt.quiz.title}`
        }, null, 8, ["title"]),
        createBaseVNode("div", _hoisted_1, [
          props.attempt.quiz.tab_monitoring_enabled ? (openBlock(), createElementBlock("div", _hoisted_2, [
            createBaseVNode("div", _hoisted_3, [
              createVNode(unref(MonitorX), { class: "size-4 shrink-0" }),
              createBaseVNode("span", null, [
                _cache[3] || (_cache[3] = createTextVNode(" Tab switching is monitored. ", -1)),
                props.attempt.quiz.tab_violation_action === "auto_submit" ? (openBlock(), createElementBlock("span", _hoisted_4, " The quiz auto-submits after " + toDisplayString(props.attempt.quiz.tab_violation_limit) + " violation" + toDisplayString(props.attempt.quiz.tab_violation_limit === 1 ? "" : "s") + ". ", 1)) : (openBlock(), createElementBlock("span", _hoisted_5, "Each switch will be flagged."))
              ])
            ]),
            tabViolations.value > 0 || props.attempt.quiz.tab_violation_action === "auto_submit" ? (openBlock(), createBlock(unref(_sfc_main$1), {
              key: 0,
              variant: tabViolations.value > 0 ? "destructive" : "outline",
              class: "shrink-0"
            }, {
              default: withCtx(() => [
                createTextVNode(toDisplayString(tabViolations.value) + toDisplayString(props.attempt.quiz.tab_violation_action === "auto_submit" ? `/${props.attempt.quiz.tab_violation_limit}` : "") + " violation" + toDisplayString(tabViolations.value === 1 ? "" : "s"), 1)
              ]),
              _: 1
            }, 8, ["variant"])) : createCommentVNode("", true)
          ])) : createCommentVNode("", true),
          createVNode(Transition, {
            "enter-from-class": "opacity-0 -translate-y-2",
            "enter-active-class": "transition duration-200 ease-out",
            "leave-active-class": "transition duration-200 ease-in",
            "leave-to-class": "opacity-0 -translate-y-2"
          }, {
            default: withCtx(() => [
              showViolationAlert.value ? (openBlock(), createElementBlock("div", _hoisted_6, [
                createVNode(unref(TriangleAlert), { class: "mt-0.5 size-4 shrink-0 text-red-600 dark:text-red-400" }),
                createBaseVNode("div", _hoisted_7, [
                  _cache[4] || (_cache[4] = createBaseVNode("p", { class: "font-medium" }, "Tab switch detected", -1)),
                  createBaseVNode("p", _hoisted_8, [
                    createTextVNode(" Violation " + toDisplayString(tabViolations.value) + " recorded. Please stay on this page for the duration of the quiz. ", 1),
                    props.attempt.quiz.tab_violation_action === "auto_submit" ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
                      createTextVNode(toDisplayString(props.attempt.quiz.tab_violation_limit - tabViolations.value) + " more will auto-submit your answers. ", 1)
                    ], 64)) : createCommentVNode("", true)
                  ])
                ])
              ])) : createCommentVNode("", true)
            ]),
            _: 1
          }),
          createBaseVNode("div", _hoisted_9, [
            createBaseVNode("div", _hoisted_10, [
              createBaseVNode("div", null, [
                createBaseVNode("h1", _hoisted_11, toDisplayString(props.attempt.quiz.title), 1),
                props.attempt.quiz.description ? (openBlock(), createElementBlock("p", _hoisted_12, toDisplayString(props.attempt.quiz.description), 1)) : createCommentVNode("", true)
              ]),
              createVNode(unref(_sfc_main$1), { variant: "outline" }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(answeredCount.value) + "/" + toDisplayString(unref(questions).length) + " answered ", 1)
                ]),
                _: 1
              })
            ]),
            createBaseVNode("div", _hoisted_13, [
              createBaseVNode("div", {
                class: "h-full rounded-full bg-primary transition-all",
                style: normalizeStyle({ width: `${progress.value}%` })
              }, null, 4)
            ])
          ]),
          createBaseVNode("div", _hoisted_14, [
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
              }, toDisplayString(index2 + 1), 11, _hoisted_15);
            }), 128))
          ]),
          current.value ? (openBlock(), createBlock(unref(_sfc_main$5), { key: 1 }, {
            default: withCtx(() => [
              createVNode(unref(_sfc_main$2), null, {
                default: withCtx(() => [
                  createBaseVNode("div", _hoisted_16, [
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
                    selectionProgress(current.value) ? (openBlock(), createElementBlock("span", _hoisted_17, toDisplayString(selectionProgress(current.value)), 1)) : createCommentVNode("", true)
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
                  current.value.type !== "short_answer" ? (openBlock(), createElementBlock("div", _hoisted_18, [
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
                        createBaseVNode("span", _hoisted_20, toDisplayString(choice.choice_text), 1)
                      ], 10, _hoisted_19);
                    }), 128))
                  ])) : (openBlock(), createElementBlock("div", _hoisted_21, [
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
          })) : (openBlock(), createBlock(unref(_sfc_main$5), { key: 2 }, {
            default: withCtx(() => [
              createVNode(unref(_sfc_main$4), { class: "py-10 text-center text-sm text-muted-foreground" }, {
                default: withCtx(() => [..._cache[5] || (_cache[5] = [
                  createTextVNode(" This quiz has no questions. ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })),
          createBaseVNode("div", _hoisted_22, [
            createVNode(unref(_sfc_main$6), {
              variant: "outline",
              disabled: currentIndex.value === 0,
              onClick: prev
            }, {
              default: withCtx(() => [
                createVNode(unref(ChevronLeft), { class: "size-4" }),
                _cache[6] || (_cache[6] = createTextVNode(" Previous ", -1))
              ]),
              _: 1
            }, 8, ["disabled"]),
            createBaseVNode("div", _hoisted_23, [
              !isLast.value ? (openBlock(), createBlock(unref(_sfc_main$6), {
                key: 0,
                onClick: next
              }, {
                default: withCtx(() => [
                  _cache[7] || (_cache[7] = createTextVNode(" Next ", -1)),
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
                  _cache[8] || (_cache[8] = createTextVNode(" Submit quiz ", -1))
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
