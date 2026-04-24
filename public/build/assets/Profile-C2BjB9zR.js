import { d as defineComponent, aR as injectDialogRootContext, a9 as useForwardExpose, aj as useId, aa as onMounted, o as openBlock, k as createBlock, g as withCtx, S as renderSlot, U as mergeProps, e as unref, ad as Primitive, aS as DialogClose_default, K as queryParams, aT as useTemplateRef, a as createElementBlock, b as createVNode, v as _sfc_main$4, f as createBaseVNode, _ as _sfc_main$6, i as createTextVNode, aE as form_default, h as head_default, x as link_default, l as createCommentVNode, F as Fragment, aU as edit$1, m as computed, J as usePage } from "./app-Cfclc8Ry.js";
import { _ as _sfc_main$d } from "./InputError.vue_vue_type_script_setup_true_lang-BJsMr1lk.js";
import { _ as _sfc_main$c } from "./PasswordInput.vue_vue_type_script_setup_true_lang-C6eUx09o.js";
import { d as _sfc_main$5, _ as _sfc_main$7, a as _sfc_main$8, b as _sfc_main$9, c as _sfc_main$a } from "./DialogTitle.vue_vue_type_script_setup_true_lang-BaQhwGMt.js";
import { _ as _sfc_main$e } from "./DialogFooter.vue_vue_type_script_setup_true_lang-CQ3oylvq.js";
import { _ as _sfc_main$b } from "./Label.vue_vue_type_script_setup_true_lang-DqOQM1Tn.js";
import { _ as _sfc_main$f } from "./Input.vue_vue_type_script_setup_true_lang-CcGYVFRF.js";
import { s as send } from "./index-Jb_-L3nd.js";
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
const _hoisted_2 = { class: "grid gap-2" };
const _hoisted_3 = { class: "grid gap-2" };
const _hoisted_4 = { key: 0 };
const _hoisted_5 = { class: "-mt-4 text-sm text-muted-foreground" };
const _hoisted_6 = {
  key: 0,
  class: "mt-2 text-sm font-medium text-green-600"
};
const _hoisted_7 = { class: "flex items-center gap-4" };
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
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(Fragment, null, [
        createVNode(unref(head_default), { title: "Profile settings" }),
        _cache[5] || (_cache[5] = createBaseVNode("h1", { class: "sr-only" }, "Profile settings", -1)),
        createBaseVNode("div", _hoisted_1, [
          createVNode(_sfc_main$4, {
            variant: "small",
            title: "Profile information",
            description: "Update your name and email address"
          }),
          createVNode(unref(form_default), {
            action: unref(update).url(),
            method: "patch",
            class: "space-y-6"
          }, {
            default: withCtx(({ errors, processing }) => [
              createBaseVNode("div", _hoisted_2, [
                createVNode(unref(_sfc_main$b), { for: "name" }, {
                  default: withCtx(() => [..._cache[0] || (_cache[0] = [
                    createTextVNode("Name", -1)
                  ])]),
                  _: 1
                }),
                createVNode(unref(_sfc_main$f), {
                  id: "name",
                  class: "mt-1 block w-full",
                  name: "name",
                  "default-value": user.value.name,
                  required: "",
                  autocomplete: "name",
                  placeholder: "Full name"
                }, null, 8, ["default-value"]),
                createVNode(_sfc_main$d, {
                  class: "mt-2",
                  message: errors.name
                }, null, 8, ["message"])
              ]),
              createBaseVNode("div", _hoisted_3, [
                createVNode(unref(_sfc_main$b), { for: "email" }, {
                  default: withCtx(() => [..._cache[1] || (_cache[1] = [
                    createTextVNode("Email address", -1)
                  ])]),
                  _: 1
                }),
                createVNode(unref(_sfc_main$f), {
                  id: "email",
                  type: "email",
                  class: "mt-1 block w-full",
                  name: "email",
                  "default-value": user.value.email,
                  required: "",
                  autocomplete: "username",
                  placeholder: "Email address"
                }, null, 8, ["default-value"]),
                createVNode(_sfc_main$d, {
                  class: "mt-2",
                  message: errors.email
                }, null, 8, ["message"])
              ]),
              __props.mustVerifyEmail && !user.value.email_verified_at ? (openBlock(), createElementBlock("div", _hoisted_4, [
                createBaseVNode("p", _hoisted_5, [
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
                __props.status === "verification-link-sent" ? (openBlock(), createElementBlock("div", _hoisted_6, " A new verification link has been sent to your email address. ")) : createCommentVNode("", true)
              ])) : createCommentVNode("", true),
              createBaseVNode("div", _hoisted_7, [
                createVNode(unref(_sfc_main$6), {
                  disabled: processing,
                  "data-test": "update-profile-button"
                }, {
                  default: withCtx(() => [..._cache[4] || (_cache[4] = [
                    createTextVNode("Save", -1)
                  ])]),
                  _: 1
                }, 8, ["disabled"])
              ])
            ]),
            _: 1
          }, 8, ["action"])
        ]),
        createVNode(_sfc_main$1)
      ], 64);
    };
  }
});
export {
  _sfc_main as default
};
