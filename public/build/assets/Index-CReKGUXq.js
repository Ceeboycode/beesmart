import { c as createLucideIcon, d as defineComponent, o as openBlock, a as createElementBlock, b as createVNode, e as unref, h as head_default, f as createBaseVNode, v as _sfc_main$1, g as withCtx, x as link_default, aw as join, i as createTextVNode, _ as _sfc_main$2, F as Fragment, r as renderList, l as createCommentVNode, p as ref, H as router, s as start, k as createBlock, t as toDisplayString, ax as _sfc_main$7, ay as _sfc_main$8, az as _sfc_main$9, aA as _sfc_main$a, aB as _sfc_main$b, y as normalizeStyle } from "./app-U-Wu707C.js";
import { _ as _sfc_main$4 } from "./ConfirmDialog.vue_vue_type_script_setup_true_lang-DqKgXRjN.js";
import { _ as _sfc_main$3 } from "./QuizStartDialog.vue_vue_type_script_setup_true_lang-BTfLKU-w.js";
import { c as create, i as index, t as toggleStatus, d as destroy, _ as _sfc_main$6, a as attempts, s as show, e as edit } from "./index-2dJNrEoj.js";
import { _ as _sfc_main$d, a as _sfc_main$f } from "./CardContent.vue_vue_type_script_setup_true_lang-T4Xk2G9g.js";
import { C as ClipboardList, _ as _sfc_main$e } from "./CardFooter.vue_vue_type_script_setup_true_lang-CCe1Aje6.js";
import { _ as _sfc_main$5, a as _sfc_main$c } from "./CardTitle.vue_vue_type_script_setup_true_lang-DjK7ckh3.js";
import { u as useToast, T as Trash2 } from "./useToast-BkhX-iHM.js";
import { P as Plus } from "./plus-2A4mbTCz.js";
import { C as Copy } from "./copy-BgWKhHFZ.js";
import { P as Play } from "./play-C0K7t5Qk.js";
import "./DialogTitle.vue_vue_type_script_setup_true_lang-DNuLu2i_.js";
import "./DialogFooter.vue_vue_type_script_setup_true_lang-DLXOiuZd.js";
import "./triangle-alert-CeaKFo9s.js";
import "./index-BPhKCCpx.js";
/**
 * @license lucide-vue-next v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const EllipsisVertical = createLucideIcon("EllipsisVerticalIcon", [
  ["circle", { cx: "12", cy: "12", r: "1", key: "41hilf" }],
  ["circle", { cx: "12", cy: "5", r: "1", key: "gxeob9" }],
  ["circle", { cx: "12", cy: "19", r: "1", key: "lyex9k" }]
]);
/**
 * @license lucide-vue-next v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const PowerOff = createLucideIcon("PowerOffIcon", [
  ["path", { d: "M18.36 6.64A9 9 0 0 1 20.77 15", key: "dxknvb" }],
  ["path", { d: "M6.16 6.16a9 9 0 1 0 12.68 12.68", key: "1x7qb5" }],
  ["path", { d: "M12 2v4", key: "3427ic" }],
  ["path", { d: "m2 2 20 20", key: "1ooewy" }]
]);
/**
 * @license lucide-vue-next v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Power = createLucideIcon("PowerIcon", [
  ["path", { d: "M12 2v10", key: "mnfbl" }],
  ["path", { d: "M18.4 6.6a9 9 0 1 1-12.77.04", key: "obofu9" }]
]);
const _hoisted_1 = { class: "flex flex-col gap-6 p-6" };
const _hoisted_2 = { class: "flex flex-wrap items-start justify-between gap-4" };
const _hoisted_3 = { class: "flex gap-2" };
const _hoisted_4 = {
  key: 0,
  class: "rounded-2xl border border-dashed p-10 text-center"
};
const _hoisted_5 = { class: "mt-4" };
const _hoisted_6 = {
  key: 1,
  class: "grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3"
};
const _hoisted_7 = { class: "flex items-start justify-between gap-2" };
const _hoisted_8 = { class: "flex flex-wrap items-center gap-2" };
const _hoisted_9 = {
  key: 0,
  class: "ml-auto text-xs text-muted-foreground"
};
const _hoisted_10 = { class: "line-clamp-2 text-sm text-muted-foreground" };
const _hoisted_11 = ["onClick"];
const _hoisted_12 = { class: "font-mono text-sm font-semibold tracking-[0.25em]" };
const _hoisted_13 = { class: "flex items-center gap-1 text-xs text-muted-foreground group-hover:text-foreground" };
const _hoisted_14 = { class: "grid gap-0.5 text-xs text-muted-foreground" };
const _hoisted_15 = { class: "grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3" };
const _hoisted_16 = { class: "flex items-start justify-between gap-2" };
const _hoisted_17 = { class: "flex flex-wrap items-center gap-2" };
const _hoisted_18 = { class: "line-clamp-2 text-sm text-muted-foreground" };
const _hoisted_19 = { class: "flex items-center justify-between rounded-md border bg-muted/30 px-3 py-2" };
const _hoisted_20 = { class: "font-mono text-sm font-semibold tracking-[0.25em]" };
const _hoisted_21 = { class: "text-xs text-muted-foreground" };
const _hoisted_22 = {
  key: 0,
  class: "flex items-center gap-2"
};
const _hoisted_23 = { class: "h-1.5 flex-1 overflow-hidden rounded-full bg-muted" };
const _hoisted_24 = { class: "shrink-0 text-xs text-muted-foreground" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...{
    layout: {
      breadcrumbs: [{ title: "Quizzes", href: index() }]
    }
  },
  __name: "Index",
  props: {
    quizzes: {},
    joinedQuizzes: {}
  },
  setup(__props) {
    const props = __props;
    const toast = useToast();
    const copiedId = ref(null);
    const startDialogOpen = ref(false);
    const startingQuiz = ref(null);
    const startingInProgress = ref(false);
    const deleteDialogOpen = ref(false);
    const deletingQuiz = ref(null);
    const deleteInProgress = ref(false);
    const toggleDialogOpen = ref(false);
    const togglingQuiz = ref(null);
    const toggleInProgress = ref(false);
    const toDateLabel = (value) => new Date(value).toLocaleDateString();
    const copyCode = async (quiz) => {
      try {
        await navigator.clipboard.writeText(quiz.quiz_code);
        copiedId.value = quiz.id;
        setTimeout(() => {
          if (copiedId.value === quiz.id) {
            copiedId.value = null;
          }
        }, 1500);
      } catch {
      }
    };
    const openToggleDialog = (quiz) => {
      togglingQuiz.value = quiz;
      toggleDialogOpen.value = true;
    };
    const confirmToggle = () => {
      if (!togglingQuiz.value) return;
      const quiz = togglingQuiz.value;
      const nextStatus = quiz.status === "active" ? "inactive" : "active";
      toggleInProgress.value = true;
      router.patch(
        toggleStatus.url(quiz.id),
        {},
        {
          preserveScroll: true,
          onSuccess: () => {
            toast.success(`"${quiz.title}" is now ${nextStatus}.`);
            toggleDialogOpen.value = false;
          },
          onError: () => toast.error("Failed to update quiz status."),
          onFinish: () => {
            toggleInProgress.value = false;
            togglingQuiz.value = null;
          }
        }
      );
    };
    const openStartDialog = (quiz) => {
      startingQuiz.value = quiz;
      startDialogOpen.value = true;
    };
    const confirmStart = () => {
      if (!startingQuiz.value) return;
      startingInProgress.value = true;
      router.post(
        start.url({ quiz: startingQuiz.value.id }),
        {},
        { onFinish: () => {
          startingInProgress.value = false;
        } }
      );
    };
    const openDeleteDialog = (quiz) => {
      deletingQuiz.value = quiz;
      deleteDialogOpen.value = true;
    };
    const confirmDelete = () => {
      if (!deletingQuiz.value) return;
      const quiz = deletingQuiz.value;
      deleteInProgress.value = true;
      router.delete(destroy.url(quiz.id), {
        preserveScroll: true,
        onSuccess: () => {
          toast.success(`"${quiz.title}" deleted.`);
          deleteDialogOpen.value = false;
        },
        onError: () => toast.error("Failed to delete quiz."),
        onFinish: () => {
          deleteInProgress.value = false;
          deletingQuiz.value = null;
        }
      });
    };
    return (_ctx, _cache) => {
      var _a, _b, _c, _d, _e, _f;
      return openBlock(), createElementBlock(Fragment, null, [
        createVNode(unref(head_default), { title: "Quizzes" }),
        createBaseVNode("div", _hoisted_1, [
          createBaseVNode("div", _hoisted_2, [
            createVNode(_sfc_main$1, {
              title: "Quiz library",
              description: "Browse, review, and manage all your quizzes."
            }),
            createBaseVNode("div", _hoisted_3, [
              createVNode(unref(_sfc_main$2), {
                variant: "outline",
                "as-child": ""
              }, {
                default: withCtx(() => [
                  createVNode(unref(link_default), {
                    href: unref(join)().url
                  }, {
                    default: withCtx(() => [..._cache[3] || (_cache[3] = [
                      createTextVNode("Join by code", -1)
                    ])]),
                    _: 1
                  }, 8, ["href"])
                ]),
                _: 1
              }),
              createVNode(unref(_sfc_main$2), { "as-child": "" }, {
                default: withCtx(() => [
                  createVNode(unref(link_default), {
                    href: unref(create)()
                  }, {
                    default: withCtx(() => [
                      createVNode(unref(Plus), { class: "size-4" }),
                      _cache[4] || (_cache[4] = createTextVNode(" Create quiz ", -1))
                    ]),
                    _: 1
                  }, 8, ["href"])
                ]),
                _: 1
              })
            ])
          ]),
          props.quizzes.length === 0 ? (openBlock(), createElementBlock("div", _hoisted_4, [
            _cache[6] || (_cache[6] = createBaseVNode("h3", { class: "text-base font-semibold" }, "No quizzes yet", -1)),
            _cache[7] || (_cache[7] = createBaseVNode("p", { class: "mt-1 text-sm text-muted-foreground" }, " Create your first quiz and share the auto-generated code with your learners. ", -1)),
            createBaseVNode("div", _hoisted_5, [
              createVNode(unref(_sfc_main$2), { "as-child": "" }, {
                default: withCtx(() => [
                  createVNode(unref(link_default), {
                    href: unref(create)()
                  }, {
                    default: withCtx(() => [..._cache[5] || (_cache[5] = [
                      createTextVNode("Create your first quiz", -1)
                    ])]),
                    _: 1
                  }, 8, ["href"])
                ]),
                _: 1
              })
            ])
          ])) : (openBlock(), createElementBlock("div", _hoisted_6, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(props.quizzes, (quiz) => {
              return openBlock(), createBlock(unref(_sfc_main$f), {
                key: quiz.id,
                class: "flex h-full flex-col"
              }, {
                default: withCtx(() => [
                  createVNode(unref(_sfc_main$5), null, {
                    default: withCtx(() => [
                      createBaseVNode("div", _hoisted_7, [
                        createBaseVNode("div", _hoisted_8, [
                          createVNode(unref(_sfc_main$6), {
                            variant: quiz.status === "active" ? "success" : "secondary"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(quiz.status), 1)
                            ]),
                            _: 2
                          }, 1032, ["variant"]),
                          createVNode(unref(_sfc_main$6), { variant: "honey" }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(quiz.source), 1)
                            ]),
                            _: 2
                          }, 1024),
                          createVNode(unref(_sfc_main$6), { variant: "outline" }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(quiz.questions_count) + " Q", 1)
                            ]),
                            _: 2
                          }, 1024),
                          createVNode(unref(_sfc_main$6), {
                            variant: "outline",
                            class: "gap-1"
                          }, {
                            default: withCtx(() => [
                              createVNode(unref(ClipboardList), { class: "size-3" }),
                              createTextVNode(" " + toDisplayString(quiz.attempts_count), 1)
                            ]),
                            _: 2
                          }, 1024)
                        ]),
                        createVNode(unref(_sfc_main$7), null, {
                          default: withCtx(() => [
                            createVNode(unref(_sfc_main$8), { "as-child": "" }, {
                              default: withCtx(() => [
                                createVNode(unref(_sfc_main$2), {
                                  variant: "ghost",
                                  size: "icon",
                                  class: "size-7 shrink-0 text-muted-foreground"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(unref(EllipsisVertical), { class: "size-4" })
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }),
                            createVNode(unref(_sfc_main$9), {
                              align: "end",
                              class: "w-48"
                            }, {
                              default: withCtx(() => [
                                createVNode(unref(_sfc_main$a), { "as-child": "" }, {
                                  default: withCtx(() => [
                                    createVNode(unref(link_default), {
                                      href: unref(attempts)(quiz.id).url
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(unref(ClipboardList), { class: "size-4" }),
                                        _cache[8] || (_cache[8] = createTextVNode(" View attempts ", -1)),
                                        quiz.attempts_count > 0 ? (openBlock(), createElementBlock("span", _hoisted_9, toDisplayString(quiz.attempts_count), 1)) : createCommentVNode("", true)
                                      ]),
                                      _: 2
                                    }, 1032, ["href"])
                                  ]),
                                  _: 2
                                }, 1024),
                                createVNode(unref(_sfc_main$b)),
                                createVNode(unref(_sfc_main$a), {
                                  onClick: ($event) => openToggleDialog(quiz)
                                }, {
                                  default: withCtx(() => [
                                    quiz.status === "inactive" ? (openBlock(), createBlock(unref(Power), {
                                      key: 0,
                                      class: "size-4"
                                    })) : (openBlock(), createBlock(unref(PowerOff), {
                                      key: 1,
                                      class: "size-4"
                                    })),
                                    createTextVNode(" " + toDisplayString(quiz.status === "active" ? "Deactivate" : "Activate"), 1)
                                  ]),
                                  _: 2
                                }, 1032, ["onClick"]),
                                createVNode(unref(_sfc_main$b)),
                                createVNode(unref(_sfc_main$a), {
                                  class: "text-destructive focus:text-destructive",
                                  onClick: ($event) => openDeleteDialog(quiz)
                                }, {
                                  default: withCtx(() => [
                                    createVNode(unref(Trash2), { class: "size-4" }),
                                    _cache[9] || (_cache[9] = createTextVNode(" Delete ", -1))
                                  ]),
                                  _: 1
                                }, 8, ["onClick"])
                              ]),
                              _: 2
                            }, 1024)
                          ]),
                          _: 2
                        }, 1024)
                      ]),
                      createVNode(unref(_sfc_main$c), { class: "mt-2 text-lg" }, {
                        default: withCtx(() => [
                          createVNode(unref(link_default), {
                            href: unref(show)(quiz.id),
                            class: "hover:underline"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(quiz.title), 1)
                            ]),
                            _: 2
                          }, 1032, ["href"])
                        ]),
                        _: 2
                      }, 1024)
                    ]),
                    _: 2
                  }, 1024),
                  createVNode(unref(_sfc_main$d), { class: "flex-1 space-y-3" }, {
                    default: withCtx(() => {
                      var _a2;
                      return [
                        createBaseVNode("p", _hoisted_10, toDisplayString(quiz.description || "No description provided."), 1),
                        createBaseVNode("button", {
                          type: "button",
                          class: "group flex w-full items-center justify-between rounded-md border bg-muted/30 px-3 py-2 text-left transition hover:bg-muted",
                          onClick: ($event) => copyCode(quiz)
                        }, [
                          createBaseVNode("span", _hoisted_12, toDisplayString(quiz.quiz_code), 1),
                          createBaseVNode("span", _hoisted_13, [
                            createVNode(unref(Copy), { class: "size-3" }),
                            createTextVNode(" " + toDisplayString(copiedId.value === quiz.id ? "Copied" : "Copy"), 1)
                          ])
                        ], 8, _hoisted_11),
                        createBaseVNode("div", _hoisted_14, [
                          createBaseVNode("p", null, "Created " + toDisplayString(toDateLabel(quiz.created_at)) + " · " + toDisplayString(((_a2 = quiz.creator) == null ? void 0 : _a2.name) ?? "Unknown"), 1)
                        ])
                      ];
                    }),
                    _: 2
                  }, 1024),
                  createVNode(unref(_sfc_main$e), { class: "flex-wrap gap-2" }, {
                    default: withCtx(() => [
                      quiz.status === "active" && quiz.questions_count > 0 ? (openBlock(), createBlock(unref(_sfc_main$2), {
                        key: 0,
                        size: "sm",
                        onClick: ($event) => openStartDialog(quiz)
                      }, {
                        default: withCtx(() => [
                          createVNode(unref(Play), { class: "size-4" }),
                          _cache[10] || (_cache[10] = createTextVNode(" Take ", -1))
                        ]),
                        _: 1
                      }, 8, ["onClick"])) : createCommentVNode("", true),
                      createVNode(unref(_sfc_main$2), {
                        size: "sm",
                        variant: "secondary",
                        "as-child": ""
                      }, {
                        default: withCtx(() => [
                          createVNode(unref(link_default), {
                            href: unref(edit)(quiz.id)
                          }, {
                            default: withCtx(() => [..._cache[11] || (_cache[11] = [
                              createTextVNode("Edit", -1)
                            ])]),
                            _: 1
                          }, 8, ["href"])
                        ]),
                        _: 2
                      }, 1024)
                    ]),
                    _: 2
                  }, 1024)
                ]),
                _: 2
              }, 1024);
            }), 128))
          ])),
          props.joinedQuizzes.length > 0 ? (openBlock(), createElementBlock(Fragment, { key: 2 }, [
            _cache[14] || (_cache[14] = createBaseVNode("div", { class: "flex items-center gap-3 pt-2" }, [
              createBaseVNode("h2", { class: "text-base font-semibold" }, "Joined quizzes"),
              createBaseVNode("div", { class: "h-px flex-1 bg-border" }),
              createBaseVNode("span", { class: "text-xs text-muted-foreground" }, "Quizzes you've participated in")
            ], -1)),
            createBaseVNode("div", _hoisted_15, [
              (openBlock(true), createElementBlock(Fragment, null, renderList(props.joinedQuizzes, (quiz) => {
                return openBlock(), createBlock(unref(_sfc_main$f), {
                  key: quiz.id,
                  class: "flex h-full flex-col"
                }, {
                  default: withCtx(() => [
                    createVNode(unref(_sfc_main$5), null, {
                      default: withCtx(() => [
                        createBaseVNode("div", _hoisted_16, [
                          createBaseVNode("div", _hoisted_17, [
                            createVNode(unref(_sfc_main$6), {
                              variant: quiz.status === "active" ? "success" : "secondary"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(quiz.status), 1)
                              ]),
                              _: 2
                            }, 1032, ["variant"]),
                            createVNode(unref(_sfc_main$6), { variant: "outline" }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(quiz.questions_count) + " Q", 1)
                              ]),
                              _: 2
                            }, 1024),
                            createVNode(unref(_sfc_main$6), {
                              variant: "outline",
                              class: "gap-1"
                            }, {
                              default: withCtx(() => [
                                createVNode(unref(ClipboardList), { class: "size-3" }),
                                createTextVNode(" " + toDisplayString(quiz.my_attempts_count) + toDisplayString(quiz.max_attempts ? ` / ${quiz.max_attempts}` : ""), 1)
                              ]),
                              _: 2
                            }, 1024)
                          ])
                        ]),
                        createVNode(unref(_sfc_main$c), { class: "mt-2 text-lg" }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(quiz.title), 1)
                          ]),
                          _: 2
                        }, 1024)
                      ]),
                      _: 2
                    }, 1024),
                    createVNode(unref(_sfc_main$d), { class: "flex-1 space-y-3" }, {
                      default: withCtx(() => {
                        var _a2;
                        return [
                          createBaseVNode("p", _hoisted_18, toDisplayString(quiz.description || "No description provided."), 1),
                          createBaseVNode("div", _hoisted_19, [
                            createBaseVNode("span", _hoisted_20, toDisplayString(quiz.quiz_code), 1),
                            createBaseVNode("span", _hoisted_21, " by " + toDisplayString(((_a2 = quiz.creator) == null ? void 0 : _a2.name) ?? "Unknown"), 1)
                          ]),
                          quiz.max_attempts ? (openBlock(), createElementBlock("div", _hoisted_22, [
                            createBaseVNode("div", _hoisted_23, [
                              createBaseVNode("div", {
                                class: "h-full rounded-full bg-primary transition-all",
                                style: normalizeStyle({ width: `${Math.min(100, quiz.my_attempts_count / quiz.max_attempts * 100)}%` })
                              }, null, 4)
                            ]),
                            createBaseVNode("span", _hoisted_24, toDisplayString(quiz.my_attempts_count) + "/" + toDisplayString(quiz.max_attempts) + " used ", 1)
                          ])) : createCommentVNode("", true)
                        ];
                      }),
                      _: 2
                    }, 1024),
                    createVNode(unref(_sfc_main$e), { class: "flex-wrap gap-2" }, {
                      default: withCtx(() => [
                        quiz.status === "active" && quiz.questions_count > 0 && (!quiz.max_attempts || quiz.my_attempts_count < quiz.max_attempts) ? (openBlock(), createBlock(unref(_sfc_main$2), {
                          key: 0,
                          size: "sm",
                          onClick: ($event) => openStartDialog(quiz)
                        }, {
                          default: withCtx(() => [
                            createVNode(unref(Play), { class: "size-4" }),
                            _cache[12] || (_cache[12] = createTextVNode(" Take again ", -1))
                          ]),
                          _: 1
                        }, 8, ["onClick"])) : createCommentVNode("", true),
                        createVNode(unref(_sfc_main$2), {
                          size: "sm",
                          variant: "outline",
                          "as-child": ""
                        }, {
                          default: withCtx(() => [
                            createVNode(unref(link_default), {
                              href: unref(attempts)(quiz.id).url
                            }, {
                              default: withCtx(() => [
                                createVNode(unref(ClipboardList), { class: "size-3.5" }),
                                _cache[13] || (_cache[13] = createTextVNode(" My attempts ", -1))
                              ]),
                              _: 1
                            }, 8, ["href"])
                          ]),
                          _: 2
                        }, 1024)
                      ]),
                      _: 2
                    }, 1024)
                  ]),
                  _: 2
                }, 1024);
              }), 128))
            ])
          ], 64)) : createCommentVNode("", true)
        ]),
        createVNode(_sfc_main$3, {
          open: startDialogOpen.value,
          "onUpdate:open": _cache[0] || (_cache[0] = ($event) => startDialogOpen.value = $event),
          quiz: startingQuiz.value ?? void 0,
          processing: startingInProgress.value,
          onConfirm: confirmStart
        }, null, 8, ["open", "quiz", "processing"]),
        createVNode(_sfc_main$4, {
          open: toggleDialogOpen.value,
          "onUpdate:open": _cache[1] || (_cache[1] = ($event) => toggleDialogOpen.value = $event),
          title: ((_a = togglingQuiz.value) == null ? void 0 : _a.status) === "active" ? "Deactivate quiz?" : "Activate quiz?",
          description: ((_b = togglingQuiz.value) == null ? void 0 : _b.status) === "active" ? `'${(_c = togglingQuiz.value) == null ? void 0 : _c.title}' will no longer be joinable by code.` : `'${(_d = togglingQuiz.value) == null ? void 0 : _d.title}' will become joinable by code.`,
          "confirm-label": ((_e = togglingQuiz.value) == null ? void 0 : _e.status) === "active" ? "Deactivate" : "Activate",
          processing: toggleInProgress.value,
          onConfirm: confirmToggle
        }, null, 8, ["open", "title", "description", "confirm-label", "processing"]),
        createVNode(_sfc_main$4, {
          open: deleteDialogOpen.value,
          "onUpdate:open": _cache[2] || (_cache[2] = ($event) => deleteDialogOpen.value = $event),
          title: "Delete quiz?",
          description: `'${(_f = deletingQuiz.value) == null ? void 0 : _f.title}' and all its questions and attempts will be permanently deleted. This cannot be undone.`,
          "confirm-label": "Delete",
          variant: "destructive",
          processing: deleteInProgress.value,
          onConfirm: confirmDelete
        }, null, 8, ["open", "description", "processing"])
      ], 64);
    };
  }
});
export {
  _sfc_main as default
};
