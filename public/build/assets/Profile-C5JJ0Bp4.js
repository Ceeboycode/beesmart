import { d as defineComponent, aV as injectDialogRootContext, af as useForwardExpose, ao as useId, B as onMounted, o as openBlock, k as createBlock, g as withCtx, Z as renderSlot, a0 as mergeProps, e as unref, ai as Primitive, aW as DialogClose_default, Q as queryParams, aX as useTemplateRef, a as createElementBlock, b as createVNode, v as _sfc_main$4, f as createBaseVNode, _ as _sfc_main$6, i as createTextVNode, aI as form_default, h as head_default, aY as _sfc_main$f, t as toDisplayString, aZ as _sfc_main$g, x as link_default, l as createCommentVNode, T as Transition, F as Fragment, a_ as edit$1, m as computed, O as usePage } from "./app-U-Wu707C.js";
import { _ as _sfc_main$d } from "./InputError.vue_vue_type_script_setup_true_lang-DT4TW3sY.js";
import { _ as _sfc_main$c } from "./PasswordInput.vue_vue_type_script_setup_true_lang-BKr0OoVc.js";
import { d as _sfc_main$5, _ as _sfc_main$7, a as _sfc_main$8, b as _sfc_main$9, c as _sfc_main$a } from "./DialogTitle.vue_vue_type_script_setup_true_lang-DNuLu2i_.js";
import { _ as _sfc_main$e } from "./DialogFooter.vue_vue_type_script_setup_true_lang-DLXOiuZd.js";
import { _ as _sfc_main$b } from "./Label.vue_vue_type_script_setup_true_lang-BhU3nPQR.js";
import { _ as _sfc_main$h, a as _sfc_main$j } from "./CardContent.vue_vue_type_script_setup_true_lang-T4Xk2G9g.js";
import { _ as _sfc_main$i } from "./Input.vue_vue_type_script_setup_true_lang-qAY1AdtK.js";
import { s as send } from "./index-BH1DSiIX.js";
import { C as CircleCheck } from "./circle-check-DuM6zutW.js";
import "./eye-CDJpc4P-.js";
var DialogTrigger_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
  __name: "DialogTrigger",
  props: {
    asChild: {
      type: Boolean,
      required: false
    },
    as: {
      type: null,
      required: false,
      default: "button"
    }
  },
  setup(__props) {
    const props = __props;
    const rootContext = injectDialogRootContext();
    const { forwardRef, currentElement } = useForwardExpose();
    rootContext.contentId || (rootContext.contentId = useId(void 0, "reka-dialog-content"));
    onMounted(() => {
      rootContext.triggerElement.value = currentElement.value;
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(Primitive), mergeProps(props, {
        ref: unref(forwardRef),
        type: _ctx.as === "button" ? "button" : void 0,
        "aria-haspopup": "dialog",
        "aria-expanded": unref(rootContext).open.value || false,
        "aria-controls": unref(rootContext).open.value ? unref(rootContext).contentId : void 0,
        "data-state": unref(rootContext).open.value ? "open" : "closed",
        onClick: unref(rootContext).onOpenToggle
      }), {
        default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
        _: 3
      }, 16, [
        "type",
        "aria-expanded",
        "aria-controls",
        "data-state",
        "onClick"
      ]);
    };
  }
});
var DialogTrigger_default = DialogTrigger_vue_vue_type_script_setup_true_lang_default;
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "DialogClose",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(DialogClose_default), mergeProps({ "data-slot": "dialog-close" }, props), {
        default: withCtx(() => [
          renderSlot(_ctx.$slots, "default")
        ]),
        _: 3
      }, 16);
    };
  }
});
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "DialogTrigger",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(DialogTrigger_default), mergeProps({ "data-slot": "dialog-trigger" }, props), {
        default: withCtx(() => [
          renderSlot(_ctx.$slots, "default")
        ]),
        _: 3
      }, 16);
    };
  }
});
const edit = (options) => ({
  url: edit.url(options),
  method: "get"
});
edit.definition = {
  methods: ["get", "head"],
  url: "/settings/profile"
};
edit.url = (options) => {
  return edit.definition.url + queryParams(options);
};
edit.get = (options) => ({
  url: edit.url(options),
  method: "get"
});
edit.head = (options) => ({
  url: edit.url(options),
  method: "head"
});
const editForm = (options) => ({
  action: edit.url(options),
  method: "get"
});
editForm.get = (options) => ({
  action: edit.url(options),
  method: "get"
});
editForm.head = (options) => ({
  action: edit.url({
    [(options == null ? void 0 : options.mergeQuery) ? "mergeQuery" : "query"]: {
      _method: "HEAD",
      ...(options == null ? void 0 : options.query) ?? (options == null ? void 0 : options.mergeQuery) ?? {}
    }
  }),
  method: "get"
});
edit.form = editForm;
const update = (options) => ({
  url: update.url(options),
  method: "patch"
});
update.definition = {
  methods: ["patch"],
  url: "/settings/profile"
};
update.url = (options) => {
  return update.definition.url + queryParams(options);
};
update.patch = (options) => ({
  url: update.url(options),
  method: "patch"
});
const updateForm = (options) => ({
  action: update.url({
    [(options == null ? void 0 : options.mergeQuery) ? "mergeQuery" : "query"]: {
      _method: "PATCH",
      ...(options == null ? void 0 : options.query) ?? (options == null ? void 0 : options.mergeQuery) ?? {}
    }
  }),
  method: "post"
});
updateForm.patch = (options) => ({
  action: update.url({
    [(options == null ? void 0 : options.mergeQuery) ? "mergeQuery" : "query"]: {
      _method: "PATCH",
      ...(options == null ? void 0 : options.query) ?? (options == null ? void 0 : options.mergeQuery) ?? {}
    }
  }),
  method: "post"
});
update.form = updateForm;
const destroy = (options) => ({
  url: destroy.url(options),
  method: "delete"
});
destroy.definition = {
  methods: ["delete"],
  url: "/settings/profile"
};
destroy.url = (options) => {
  return destroy.definition.url + queryParams(options);
};
destroy.delete = (options) => ({
  url: destroy.url(options),
  method: "delete"
});
const destroyForm = (options) => ({
  action: destroy.url({
    [(options == null ? void 0 : options.mergeQuery) ? "mergeQuery" : "query"]: {
      _method: "DELETE",
      ...(options == null ? void 0 : options.query) ?? (options == null ? void 0 : options.mergeQuery) ?? {}
    }
  }),
  method: "post"
});
destroyForm.delete = (options) => ({
  action: destroy.url({
    [(options == null ? void 0 : options.mergeQuery) ? "mergeQuery" : "query"]: {
      _method: "DELETE",
      ...(options == null ? void 0 : options.query) ?? (options == null ? void 0 : options.mergeQuery) ?? {}
    }
  }),
  method: "post"
});
destroy.form = destroyForm;
const _hoisted_1$1 = { class: "space-y-6" };
const _hoisted_2$1 = { class: "space-y-4 rounded-lg border border-red-100 bg-red-50 p-4 dark:border-red-200/10 dark:bg-red-700/10" };
const _hoisted_3$1 = { class: "grid gap-2" };
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "DeleteUser",
  setup(__props) {
    const passwordInput = useTemplateRef("passwordInput");
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$1, [
        createVNode(_sfc_main$4, {
          variant: "small",
          title: "Delete account",
          description: "Delete your account and all of its resources"
        }),
        createBaseVNode("div", _hoisted_2$1, [
          _cache[7] || (_cache[7] = createBaseVNode("div", { class: "relative space-y-0.5 text-red-600 dark:text-red-100" }, [
            createBaseVNode("p", { class: "font-medium" }, "Warning"),
            createBaseVNode("p", { class: "text-sm" }, " Please proceed with caution, this cannot be undone. ")
          ], -1)),
          createVNode(unref(_sfc_main$5), null, {
            default: withCtx(() => [
              createVNode(unref(_sfc_main$2), { "as-child": "" }, {
                default: withCtx(() => [
                  createVNode(unref(_sfc_main$6), {
                    variant: "destructive",
                    "data-test": "delete-user-button"
                  }, {
                    default: withCtx(() => [..._cache[1] || (_cache[1] = [
                      createTextVNode("Delete account", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(unref(_sfc_main$7), null, {
                default: withCtx(() => [
                  createVNode(unref(form_default), {
                    action: unref(destroy).url(),
                    method: "delete",
                    "reset-on-success": "",
                    onError: _cache[0] || (_cache[0] = () => {
                      var _a;
                      return (_a = passwordInput.value) == null ? void 0 : _a.focus();
                    }),
                    options: {
                      preserveScroll: true
                    },
                    class: "space-y-6"
                  }, {
                    default: withCtx(({ errors, processing, reset, clearErrors }) => [
                      createVNode(unref(_sfc_main$8), { class: "space-y-3" }, {
                        default: withCtx(() => [
                          createVNode(unref(_sfc_main$9), null, {
                            default: withCtx(() => [..._cache[2] || (_cache[2] = [
                              createTextVNode("Are you sure you want to delete your account?", -1)
                            ])]),
                            _: 1
                          }),
                          createVNode(unref(_sfc_main$a), null, {
                            default: withCtx(() => [..._cache[3] || (_cache[3] = [
                              createTextVNode(" Once your account is deleted, all of its resources and data will also be permanently deleted. Please enter your password to confirm you would like to permanently delete your account. ", -1)
                            ])]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      createBaseVNode("div", _hoisted_3$1, [
                        createVNode(unref(_sfc_main$b), {
                          for: "password",
                          class: "sr-only"
                        }, {
                          default: withCtx(() => [..._cache[4] || (_cache[4] = [
                            createTextVNode("Password", -1)
                          ])]),
                          _: 1
                        }),
                        createVNode(_sfc_main$c, {
                          id: "password",
                          name: "password",
                          ref_key: "passwordInput",
                          ref: passwordInput,
                          placeholder: "Password"
                        }, null, 512),
                        createVNode(_sfc_main$d, {
                          message: errors.password
                        }, null, 8, ["message"])
                      ]),
                      createVNode(unref(_sfc_main$e), { class: "gap-2" }, {
                        default: withCtx(() => [
                          createVNode(unref(_sfc_main$3), { "as-child": "" }, {
                            default: withCtx(() => [
                              createVNode(unref(_sfc_main$6), {
                                variant: "secondary",
                                onClick: () => {
                                  clearErrors();
                                  reset();
                                }
                              }, {
                                default: withCtx(() => [..._cache[5] || (_cache[5] = [
                                  createTextVNode(" Cancel ", -1)
                                ])]),
                                _: 1
                              }, 8, ["onClick"])
                            ]),
                            _: 2
                          }, 1024),
                          createVNode(unref(_sfc_main$6), {
                            type: "submit",
                            variant: "destructive",
                            disabled: processing,
                            "data-test": "confirm-delete-user-button"
                          }, {
                            default: withCtx(() => [..._cache[6] || (_cache[6] = [
                              createTextVNode(" Delete account ", -1)
                            ])]),
                            _: 1
                          }, 8, ["disabled"])
                        ]),
                        _: 2
                      }, 1024)
                    ]),
                    _: 1
                  }, 8, ["action"])
                ]),
                _: 1
              })
            ]),
            _: 1
          })
        ])
      ]);
    };
  }
});
const _hoisted_1 = { class: "flex flex-col space-y-6" };
const _hoisted_2 = { class: "flex items-center gap-4 rounded-xl border bg-muted/30 p-4" };
const _hoisted_3 = { class: "min-w-0" };
const _hoisted_4 = { class: "truncate font-medium leading-tight" };
const _hoisted_5 = { class: "truncate text-sm text-muted-foreground" };
const _hoisted_6 = { class: "grid gap-2" };
const _hoisted_7 = { class: "grid gap-2" };
const _hoisted_8 = {
  key: 0,
  class: "space-y-2"
};
const _hoisted_9 = { class: "text-sm text-muted-foreground" };
const _hoisted_10 = {
  key: 0,
  class: "text-sm font-medium text-green-600"
};
const _hoisted_11 = { class: "flex items-center gap-3 pt-1" };
const _hoisted_12 = {
  key: 0,
  class: "flex items-center gap-1.5 text-sm text-green-600 dark:text-green-400"
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...{
    layout: {
      breadcrumbs: [
        {
          title: "Profile settings",
          href: edit$1()
        }
      ]
    }
  },
  __name: "Profile",
  props: {
    mustVerifyEmail: { type: Boolean },
    status: {}
  },
  setup(__props) {
    const page = usePage();
    const user = computed(() => page.props.auth.user);
    const initials = computed(() => {
      var _a, _b;
      const parts = ((_a = user.value.name) == null ? void 0 : _a.trim().split(/\s+/)) ?? [];
      if (parts.length >= 2) return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
      return (((_b = parts[0]) == null ? void 0 : _b[0]) ?? "?").toUpperCase();
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(Fragment, null, [
        createVNode(unref(head_default), { title: "Profile settings" }),
        _cache[6] || (_cache[6] = createBaseVNode("h1", { class: "sr-only" }, "Profile settings", -1)),
        createBaseVNode("div", _hoisted_1, [
          createVNode(_sfc_main$4, {
            variant: "small",
            title: "Profile information",
            description: "Update your name and email address"
          }),
          createBaseVNode("div", _hoisted_2, [
            createVNode(unref(_sfc_main$g), { class: "size-14" }, {
              default: withCtx(() => [
                createVNode(unref(_sfc_main$f), { class: "text-lg font-semibold" }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(initials.value), 1)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }),
            createBaseVNode("div", _hoisted_3, [
              createBaseVNode("p", _hoisted_4, toDisplayString(user.value.name), 1),
              createBaseVNode("p", _hoisted_5, toDisplayString(user.value.email), 1)
            ])
          ]),
          createVNode(unref(_sfc_main$j), null, {
            default: withCtx(() => [
              createVNode(unref(_sfc_main$h), { class: "pt-6" }, {
                default: withCtx(() => [
                  createVNode(unref(form_default), {
                    action: unref(update).url(),
                    method: "patch",
                    class: "space-y-5"
                  }, {
                    default: withCtx(({ errors, processing, recentlySuccessful }) => [
                      createBaseVNode("div", _hoisted_6, [
                        createVNode(unref(_sfc_main$b), { for: "name" }, {
                          default: withCtx(() => [..._cache[0] || (_cache[0] = [
                            createTextVNode("Name", -1)
                          ])]),
                          _: 1
                        }),
                        createVNode(unref(_sfc_main$i), {
                          id: "name",
                          name: "name",
                          "default-value": user.value.name,
                          required: "",
                          autocomplete: "name",
                          placeholder: "Full name"
                        }, null, 8, ["default-value"]),
                        createVNode(_sfc_main$d, {
                          message: errors.name
                        }, null, 8, ["message"])
                      ]),
                      createBaseVNode("div", _hoisted_7, [
                        createVNode(unref(_sfc_main$b), { for: "email" }, {
                          default: withCtx(() => [..._cache[1] || (_cache[1] = [
                            createTextVNode("Email address", -1)
                          ])]),
                          _: 1
                        }),
                        createVNode(unref(_sfc_main$i), {
                          id: "email",
                          type: "email",
                          name: "email",
                          "default-value": user.value.email,
                          required: "",
                          autocomplete: "username",
                          placeholder: "Email address"
                        }, null, 8, ["default-value"]),
                        createVNode(_sfc_main$d, {
                          message: errors.email
                        }, null, 8, ["message"])
                      ]),
                      __props.mustVerifyEmail && !user.value.email_verified_at ? (openBlock(), createElementBlock("div", _hoisted_8, [
                        createBaseVNode("p", _hoisted_9, [
                          _cache[3] || (_cache[3] = createTextVNode(" Your email address is unverified. ", -1)),
                          createVNode(unref(link_default), {
                            href: unref(send)(),
                            as: "button",
                            class: "text-foreground underline decoration-neutral-300 underline-offset-4 transition-colors duration-300 ease-out hover:decoration-current! dark:decoration-neutral-500"
                          }, {
                            default: withCtx(() => [..._cache[2] || (_cache[2] = [
                              createTextVNode(" Click here to resend the verification email. ", -1)
                            ])]),
                            _: 1
                          }, 8, ["href"])
                        ]),
                        __props.status === "verification-link-sent" ? (openBlock(), createElementBlock("p", _hoisted_10, " A new verification link has been sent to your email address. ")) : createCommentVNode("", true)
                      ])) : createCommentVNode("", true),
                      createBaseVNode("div", _hoisted_11, [
                        createVNode(unref(_sfc_main$6), {
                          disabled: processing,
                          "data-test": "update-profile-button"
                        }, {
                          default: withCtx(() => [..._cache[4] || (_cache[4] = [
                            createTextVNode(" Save changes ", -1)
                          ])]),
                          _: 1
                        }, 8, ["disabled"]),
                        createVNode(Transition, {
                          "enter-from-class": "opacity-0 translate-y-0.5",
                          "enter-active-class": "transition duration-200 ease-out",
                          "leave-active-class": "transition duration-150 ease-in",
                          "leave-to-class": "opacity-0"
                        }, {
                          default: withCtx(() => [
                            recentlySuccessful ? (openBlock(), createElementBlock("span", _hoisted_12, [
                              createVNode(unref(CircleCheck), { class: "size-4" }),
                              _cache[5] || (_cache[5] = createTextVNode(" Saved ", -1))
                            ])) : createCommentVNode("", true)
                          ]),
                          _: 2
                        }, 1024)
                      ])
                    ]),
                    _: 1
                  }, 8, ["action"])
                ]),
                _: 1
              })
            ]),
            _: 1
          })
        ]),
        createVNode(_sfc_main$1)
      ], 64);
    };
  }
});
export {
  _sfc_main as default
};
