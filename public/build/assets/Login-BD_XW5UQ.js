import { T as isNullish, d as defineComponent, w as watch, o as openBlock, k as createBlock, U as mergeProps, X as VisuallyHidden_default, aF as usePrimitiveElement, m as computed, a as createElementBlock, l as createCommentVNode, F as Fragment, r as renderList, aG as injectRovingFocusGroupContext, aj as useId, Q as useCollection, aa as onMounted, am as onUnmounted, g as withCtx, b as createVNode, e as unref, ad as Primitive, S as renderSlot, aH as getFocusIntent, aI as wrapArray, ab as nextTick, aJ as focusFirst, W as createContext, a9 as useForwardExpose, P as useVModel, aK as withKeys, j as withModifiers, a6 as resolveDynamicComponent, ah as Presence_default, aq as reactiveOmit, ae as useForwardPropsEmits, af as normalizeProps, ag as guardReactiveProps, ar as cn, K as queryParams, h as head_default, t as toDisplayString, f as createBaseVNode, i as createTextVNode, _ as _sfc_main$7, aB as register, aE as form_default, aL as useLoading } from "./app-Cfclc8Ry.js";
import { _ as _sfc_main$4 } from "./InputError.vue_vue_type_script_setup_true_lang-BJsMr1lk.js";
import { _ as _sfc_main$6 } from "./PasswordInput.vue_vue_type_script_setup_true_lang-C6eUx09o.js";
import { _ as _sfc_main$5 } from "./TextLink.vue_vue_type_script_setup_true_lang-D4ERWR9N.js";
import { i as isEqual, u as useFormControl } from "./useFormControl-QvtoOD-I.js";
import { C as Check } from "./check-DSjgo47P.js";
import { _ as _sfc_main$3 } from "./Input.vue_vue_type_script_setup_true_lang-CcGYVFRF.js";
import { _ as _sfc_main$2 } from "./Label.vue_vue_type_script_setup_true_lang-DqOQM1Tn.js";
import { r as request } from "./index-Ovpv_1Oj.js";
import "./index-CZFM2vd1.js";
function isValueEqualOrExist(base, current) {
  if (isNullish(base)) return false;
  if (Array.isArray(base)) return base.some((val) => isEqual(val, current));
  else return isEqual(base, current);
}
var VisuallyHiddenInputBubble_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
  inheritAttrs: false,
  __name: "VisuallyHiddenInputBubble",
  props: {
    name: {
      type: String,
      required: true
    },
    value: {
      type: null,
      required: true
    },
    checked: {
      type: Boolean,
      required: false,
      default: void 0
    },
    required: {
      type: Boolean,
      required: false
    },
    disabled: {
      type: Boolean,
      required: false
    },
    feature: {
      type: String,
      required: false,
      default: "fully-hidden"
    }
  },
  setup(__props) {
    const props = __props;
    const { primitiveElement, currentElement } = usePrimitiveElement();
    const valueState = computed(() => props.checked ?? props.value);
    watch(valueState, (cur, prev) => {
      if (!currentElement.value) return;
      const input = currentElement.value;
      const inputProto = window.HTMLInputElement.prototype;
      const descriptor = Object.getOwnPropertyDescriptor(inputProto, "value");
      const setValue = descriptor.set;
      if (setValue && cur !== prev) {
        const inputEvent = new Event("input", { bubbles: true });
        const changeEvent = new Event("change", { bubbles: true });
        setValue.call(input, cur);
        input.dispatchEvent(inputEvent);
        input.dispatchEvent(changeEvent);
      }
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(VisuallyHidden_default, mergeProps({
        ref_key: "primitiveElement",
        ref: primitiveElement
      }, {
        ...props,
        ..._ctx.$attrs
      }, { as: "input" }), null, 16);
    };
  }
});
var VisuallyHiddenInputBubble_default = VisuallyHiddenInputBubble_vue_vue_type_script_setup_true_lang_default;
var VisuallyHiddenInput_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
  inheritAttrs: false,
  __name: "VisuallyHiddenInput",
  props: {
    name: {
      type: String,
      required: true
    },
    value: {
      type: null,
      required: true
    },
    checked: {
      type: Boolean,
      required: false,
      default: void 0
    },
    required: {
      type: Boolean,
      required: false
    },
    disabled: {
      type: Boolean,
      required: false
    },
    feature: {
      type: String,
      required: false,
      default: "fully-hidden"
    }
  },
  setup(__props) {
    const props = __props;
    const isFormArrayEmptyAndRequired = computed(() => typeof props.value === "object" && Array.isArray(props.value) && props.value.length === 0 && props.required);
    const parsedValue = computed(() => {
      if (typeof props.value === "string" || typeof props.value === "number" || typeof props.value === "boolean" || props.value === null || props.value === void 0) return [{
        name: props.name,
        value: props.value
      }];
      else if (typeof props.value === "object" && Array.isArray(props.value)) return props.value.flatMap((obj, index) => {
        if (typeof obj === "object") return Object.entries(obj).map(([key, value]) => ({
          name: `${props.name}[${index}][${key}]`,
          value
        }));
        else return {
          name: `${props.name}[${index}]`,
          value: obj
        };
      });
      else if (props.value !== null && typeof props.value === "object" && !Array.isArray(props.value)) return Object.entries(props.value).map(([key, value]) => ({
        name: `${props.name}[${key}]`,
        value
      }));
      return [];
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(Fragment, null, [createCommentVNode(" We render single input if it's required "), isFormArrayEmptyAndRequired.value ? (openBlock(), createBlock(VisuallyHiddenInputBubble_default, mergeProps({ key: _ctx.name }, {
        ...props,
        ..._ctx.$attrs
      }, {
        name: _ctx.name,
        value: _ctx.value
      }), null, 16, ["name", "value"])) : (openBlock(true), createElementBlock(Fragment, { key: 1 }, renderList(parsedValue.value, (parsed) => {
        return openBlock(), createBlock(VisuallyHiddenInputBubble_default, mergeProps({ key: parsed.name }, { ref_for: true }, {
          ...props,
          ..._ctx.$attrs
        }, {
          name: parsed.name,
          value: parsed.value
        }), null, 16, ["name", "value"]);
      }), 128))], 2112);
    };
  }
});
var VisuallyHiddenInput_default = VisuallyHiddenInput_vue_vue_type_script_setup_true_lang_default;
var RovingFocusItem_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
  __name: "RovingFocusItem",
  props: {
    tabStopId: {
      type: String,
      required: false
    },
    focusable: {
      type: Boolean,
      required: false,
      default: true
    },
    active: {
      type: Boolean,
      required: false
    },
    allowShiftKey: {
      type: Boolean,
      required: false
    },
    asChild: {
      type: Boolean,
      required: false
    },
    as: {
      type: null,
      required: false,
      default: "span"
    }
  },
  setup(__props) {
    const props = __props;
    const context = injectRovingFocusGroupContext();
    const randomId = useId();
    const id = computed(() => props.tabStopId || randomId);
    const isCurrentTabStop = computed(() => context.currentTabStopId.value === id.value);
    const { getItems, CollectionItem } = useCollection();
    onMounted(() => {
      if (props.focusable) context.onFocusableItemAdd();
    });
    onUnmounted(() => {
      if (props.focusable) context.onFocusableItemRemove();
    });
    function handleKeydown(event) {
      if (event.key === "Tab" && event.shiftKey) {
        context.onItemShiftTab();
        return;
      }
      if (event.target !== event.currentTarget) return;
      const focusIntent = getFocusIntent(event, context.orientation.value, context.dir.value);
      if (focusIntent !== void 0) {
        if (event.metaKey || event.ctrlKey || event.altKey || (props.allowShiftKey ? false : event.shiftKey)) return;
        event.preventDefault();
        let candidateNodes = [...getItems().map((i) => i.ref).filter((i) => i.dataset.disabled !== "")];
        if (focusIntent === "last") candidateNodes.reverse();
        else if (focusIntent === "prev" || focusIntent === "next") {
          if (focusIntent === "prev") candidateNodes.reverse();
          const currentIndex = candidateNodes.indexOf(event.currentTarget);
          candidateNodes = context.loop.value ? wrapArray(candidateNodes, currentIndex + 1) : candidateNodes.slice(currentIndex + 1);
        }
        nextTick(() => focusFirst(candidateNodes));
      }
    }
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(CollectionItem), null, {
        default: withCtx(() => [createVNode(unref(Primitive), {
          tabindex: isCurrentTabStop.value ? 0 : -1,
          "data-orientation": unref(context).orientation.value,
          "data-active": _ctx.active ? "" : void 0,
          "data-disabled": !_ctx.focusable ? "" : void 0,
          as: _ctx.as,
          "as-child": _ctx.asChild,
          onMousedown: _cache[0] || (_cache[0] = (event) => {
            if (!_ctx.focusable) event.preventDefault();
            else unref(context).onItemFocus(id.value);
          }),
          onFocus: _cache[1] || (_cache[1] = ($event) => unref(context).onItemFocus(id.value)),
          onKeydown: handleKeydown
        }, {
          default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
          _: 3
        }, 8, [
          "tabindex",
          "data-orientation",
          "data-active",
          "data-disabled",
          "as",
          "as-child"
        ])]),
        _: 3
      });
    };
  }
});
var RovingFocusItem_default = RovingFocusItem_vue_vue_type_script_setup_true_lang_default;
const [injectCheckboxGroupRootContext] = /* @__PURE__ */ createContext("CheckboxGroupRoot");
function isIndeterminate(checked) {
  return checked === "indeterminate";
}
function getState(checked) {
  return isIndeterminate(checked) ? "indeterminate" : checked ? "checked" : "unchecked";
}
const [injectCheckboxRootContext, provideCheckboxRootContext] = /* @__PURE__ */ createContext("CheckboxRoot");
var CheckboxRoot_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
  inheritAttrs: false,
  __name: "CheckboxRoot",
  props: {
    defaultValue: {
      type: null,
      required: false
    },
    modelValue: {
      type: null,
      required: false,
      default: void 0
    },
    disabled: {
      type: Boolean,
      required: false
    },
    value: {
      type: null,
      required: false,
      default: "on"
    },
    id: {
      type: String,
      required: false
    },
    trueValue: {
      type: null,
      required: false,
      default: () => true
    },
    falseValue: {
      type: null,
      required: false,
      default: () => false
    },
    asChild: {
      type: Boolean,
      required: false
    },
    as: {
      type: null,
      required: false,
      default: "button"
    },
    name: {
      type: String,
      required: false
    },
    required: {
      type: Boolean,
      required: false
    }
  },
  emits: ["update:modelValue"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const { forwardRef, currentElement } = useForwardExpose();
    const checkboxGroupContext = injectCheckboxGroupRootContext(null);
    const modelValue = useVModel(props, "modelValue", emits, {
      defaultValue: props.defaultValue ?? props.falseValue,
      passive: props.modelValue === void 0
    });
    const disabled = computed(() => (checkboxGroupContext == null ? void 0 : checkboxGroupContext.disabled.value) || props.disabled);
    const isChecked = computed(() => isEqual(modelValue.value, props.trueValue));
    const checkboxState = computed(() => {
      if (!isNullish(checkboxGroupContext == null ? void 0 : checkboxGroupContext.modelValue.value)) return isValueEqualOrExist(checkboxGroupContext.modelValue.value, props.value);
      else {
        if (modelValue.value === "indeterminate") return "indeterminate";
        return isChecked.value;
      }
    });
    function handleClick() {
      if (!isNullish(checkboxGroupContext == null ? void 0 : checkboxGroupContext.modelValue.value)) {
        const modelValueArray = [...checkboxGroupContext.modelValue.value || []];
        if (isValueEqualOrExist(modelValueArray, props.value)) {
          const index = modelValueArray.findIndex((i) => isEqual(i, props.value));
          modelValueArray.splice(index, 1);
        } else modelValueArray.push(props.value);
        checkboxGroupContext.modelValue.value = modelValueArray;
      } else if (modelValue.value === "indeterminate") modelValue.value = props.trueValue;
      else modelValue.value = isChecked.value ? props.falseValue : props.trueValue;
    }
    const isFormControl = useFormControl(currentElement);
    const ariaLabel = computed(() => {
      var _a;
      return props.id && currentElement.value ? (_a = document.querySelector(`[for="${props.id}"]`)) == null ? void 0 : _a.innerText : void 0;
    });
    provideCheckboxRootContext({
      disabled,
      state: checkboxState
    });
    return (_ctx, _cache) => {
      var _a, _b;
      return openBlock(), createBlock(resolveDynamicComponent(((_a = unref(checkboxGroupContext)) == null ? void 0 : _a.rovingFocus.value) ? unref(RovingFocusItem_default) : unref(Primitive)), mergeProps(_ctx.$attrs, {
        id: _ctx.id,
        ref: unref(forwardRef),
        role: "checkbox",
        "as-child": _ctx.asChild,
        as: _ctx.as,
        type: _ctx.as === "button" ? "button" : void 0,
        "aria-checked": unref(isIndeterminate)(checkboxState.value) ? "mixed" : checkboxState.value,
        "aria-required": _ctx.required,
        "aria-label": _ctx.$attrs["aria-label"] || ariaLabel.value,
        "data-state": unref(getState)(checkboxState.value),
        "data-disabled": disabled.value ? "" : void 0,
        disabled: disabled.value,
        focusable: ((_b = unref(checkboxGroupContext)) == null ? void 0 : _b.rovingFocus.value) ? !disabled.value : void 0,
        onKeydown: withKeys(withModifiers(() => {
        }, ["prevent"]), ["enter"]),
        onClick: handleClick
      }), {
        default: withCtx(() => [renderSlot(_ctx.$slots, "default", {
          modelValue: unref(modelValue),
          state: checkboxState.value
        }), unref(isFormControl) && _ctx.name && !unref(checkboxGroupContext) ? (openBlock(), createBlock(unref(VisuallyHiddenInput_default), {
          key: 0,
          type: "checkbox",
          checked: !!checkboxState.value,
          name: _ctx.name,
          value: _ctx.value,
          disabled: disabled.value,
          required: _ctx.required
        }, null, 8, [
          "checked",
          "name",
          "value",
          "disabled",
          "required"
        ])) : createCommentVNode("v-if", true)]),
        _: 3
      }, 16, [
        "id",
        "as-child",
        "as",
        "type",
        "aria-checked",
        "aria-required",
        "aria-label",
        "data-state",
        "data-disabled",
        "disabled",
        "focusable",
        "onKeydown"
      ]);
    };
  }
});
var CheckboxRoot_default = CheckboxRoot_vue_vue_type_script_setup_true_lang_default;
var CheckboxIndicator_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
  __name: "CheckboxIndicator",
  props: {
    forceMount: {
      type: Boolean,
      required: false
    },
    asChild: {
      type: Boolean,
      required: false
    },
    as: {
      type: null,
      required: false,
      default: "span"
    }
  },
  setup(__props) {
    const { forwardRef } = useForwardExpose();
    const rootContext = injectCheckboxRootContext();
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(Presence_default), { present: _ctx.forceMount || unref(isIndeterminate)(unref(rootContext).state.value) || unref(rootContext).state.value === true }, {
        default: withCtx(() => [createVNode(unref(Primitive), mergeProps({
          ref: unref(forwardRef),
          "data-state": unref(getState)(unref(rootContext).state.value),
          "data-disabled": unref(rootContext).disabled.value ? "" : void 0,
          style: { pointerEvents: "none" },
          "as-child": _ctx.asChild,
          as: _ctx.as
        }, _ctx.$attrs), {
          default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
          _: 3
        }, 16, [
          "data-state",
          "data-disabled",
          "as-child",
          "as"
        ])]),
        _: 3
      }, 8, ["present"]);
    };
  }
});
var CheckboxIndicator_default = CheckboxIndicator_vue_vue_type_script_setup_true_lang_default;
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "Checkbox",
  props: {
    defaultValue: {},
    modelValue: {},
    disabled: { type: Boolean },
    value: {},
    id: {},
    trueValue: {},
    falseValue: {},
    asChild: { type: Boolean },
    as: {},
    name: {},
    required: { type: Boolean },
    class: { type: [Boolean, null, String, Object, Array] }
  },
  emits: ["update:modelValue"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const delegatedProps = reactiveOmit(props, "class");
    const forwarded = useForwardPropsEmits(delegatedProps, emits);
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(CheckboxRoot_default), mergeProps({ "data-slot": "checkbox" }, unref(forwarded), {
        class: unref(cn)(
          "peer border-input data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground data-[state=checked]:border-primary focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive size-4 shrink-0 rounded-[4px] border shadow-xs transition-shadow outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",
          props.class
        )
      }), {
        default: withCtx((slotProps) => [
          createVNode(unref(CheckboxIndicator_default), {
            "data-slot": "checkbox-indicator",
            class: "grid place-content-center text-current transition-none"
          }, {
            default: withCtx(() => [
              renderSlot(_ctx.$slots, "default", normalizeProps(guardReactiveProps(slotProps)), () => [
                createVNode(unref(Check), { class: "size-3.5" })
              ])
            ]),
            _: 2
          }, 1024)
        ]),
        _: 3
      }, 16, ["class"]);
    };
  }
});
const store = (options) => ({
  url: store.url(options),
  method: "post"
});
store.definition = {
  methods: ["post"],
  url: "/login"
};
store.url = (options) => {
  return store.definition.url + queryParams(options);
};
store.post = (options) => ({
  url: store.url(options),
  method: "post"
});
const storeForm = (options) => ({
  action: store.url(options),
  method: "post"
});
storeForm.post = (options) => ({
  action: store.url(options),
  method: "post"
});
store.form = storeForm;
({
  store: Object.assign(store, store)
});
const _hoisted_1 = {
  key: 0,
  class: "mb-4 text-center text-sm font-medium text-green-600"
};
const _hoisted_2 = { class: "grid gap-6" };
const _hoisted_3 = { class: "grid gap-2" };
const _hoisted_4 = { class: "grid gap-2" };
const _hoisted_5 = { class: "flex items-center justify-between" };
const _hoisted_6 = { class: "flex items-center justify-between" };
const _hoisted_7 = {
  key: 0,
  class: "text-center text-sm text-muted-foreground"
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...{
    layout: {
      title: "Log in to your account",
      description: "Enter your email and password below to log in"
    }
  },
  __name: "Login",
  props: {
    status: {},
    canResetPassword: { type: Boolean },
    canRegister: { type: Boolean }
  },
  setup(__props) {
    const { show, hide } = useLoading();
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(Fragment, null, [
        createVNode(unref(head_default), { title: "Log in" }),
        __props.status ? (openBlock(), createElementBlock("div", _hoisted_1, toDisplayString(__props.status), 1)) : createCommentVNode("", true),
        createVNode(unref(form_default), {
          action: unref(store).url(),
          method: "post",
          "reset-on-success": ["password"],
          onStart: _cache[0] || (_cache[0] = ($event) => unref(show)("Logging you in...")),
          onFinish: _cache[1] || (_cache[1] = ($event) => unref(hide)()),
          class: "flex flex-col gap-6"
        }, {
          default: withCtx(({ errors, processing }) => [
            createBaseVNode("div", _hoisted_2, [
              createBaseVNode("div", _hoisted_3, [
                createVNode(unref(_sfc_main$2), { for: "email" }, {
                  default: withCtx(() => [..._cache[2] || (_cache[2] = [
                    createTextVNode("Email address", -1)
                  ])]),
                  _: 1
                }),
                createVNode(unref(_sfc_main$3), {
                  id: "email",
                  type: "email",
                  name: "email",
                  required: "",
                  autofocus: "",
                  tabindex: 1,
                  autocomplete: "email",
                  placeholder: "email@example.com"
                }),
                createVNode(_sfc_main$4, {
                  message: errors.email
                }, null, 8, ["message"])
              ]),
              createBaseVNode("div", _hoisted_4, [
                createBaseVNode("div", _hoisted_5, [
                  createVNode(unref(_sfc_main$2), { for: "password" }, {
                    default: withCtx(() => [..._cache[3] || (_cache[3] = [
                      createTextVNode("Password", -1)
                    ])]),
                    _: 1
                  }),
                  __props.canResetPassword ? (openBlock(), createBlock(_sfc_main$5, {
                    key: 0,
                    href: unref(request)(),
                    class: "text-sm",
                    tabindex: 5
                  }, {
                    default: withCtx(() => [..._cache[4] || (_cache[4] = [
                      createTextVNode(" Forgot password? ", -1)
                    ])]),
                    _: 1
                  }, 8, ["href"])) : createCommentVNode("", true)
                ]),
                createVNode(_sfc_main$6, {
                  id: "password",
                  name: "password",
                  required: "",
                  tabindex: 2,
                  autocomplete: "current-password",
                  placeholder: "Password"
                }),
                createVNode(_sfc_main$4, {
                  message: errors.password
                }, null, 8, ["message"])
              ]),
              createBaseVNode("div", _hoisted_6, [
                createVNode(unref(_sfc_main$2), {
                  for: "remember",
                  class: "flex items-center space-x-3"
                }, {
                  default: withCtx(() => [
                    createVNode(unref(_sfc_main$1), {
                      id: "remember",
                      name: "remember",
                      tabindex: 3
                    }),
                    _cache[5] || (_cache[5] = createBaseVNode("span", null, "Remember me", -1))
                  ]),
                  _: 1
                })
              ]),
              createVNode(unref(_sfc_main$7), {
                type: "submit",
                class: "mt-4 w-full",
                tabindex: 4,
                disabled: processing,
                "data-test": "login-button"
              }, {
                default: withCtx(() => [..._cache[6] || (_cache[6] = [
                  createTextVNode(" Log in ", -1)
                ])]),
                _: 1
              }, 8, ["disabled"])
            ]),
            __props.canRegister ? (openBlock(), createElementBlock("div", _hoisted_7, [
              _cache[8] || (_cache[8] = createTextVNode(" Don't have an account? ", -1)),
              createVNode(_sfc_main$5, {
                href: unref(register)(),
                tabindex: 5
              }, {
                default: withCtx(() => [..._cache[7] || (_cache[7] = [
                  createTextVNode("Sign up", -1)
                ])]),
                _: 1
              }, 8, ["href"])
            ])) : createCommentVNode("", true)
          ]),
          _: 1
        }, 8, ["action"])
      ], 64);
    };
  }
});
export {
  _sfc_main as default
};
