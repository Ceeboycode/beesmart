import { U as injectConfigProviderContext, p as ref, m as computed, d as defineComponent, V as toRefs, W as useVModel, X as useCollection, Y as useDirection, o as openBlock, k as createBlock, g as withCtx, Z as renderSlot, e as unref, $ as isNullish, a as createElementBlock, l as createCommentVNode, F as Fragment, r as renderList, a0 as mergeProps, a1 as PopperRoot_default, a2 as createContext, w as watch, f as createBaseVNode, a3 as VisuallyHidden_default, a4 as useForwardProps, a5 as PopperContent_default, a6 as useFocusGuards, a7 as useBodyScrollLock, a8 as useHideOthers, a9 as useTypeahead, aa as watchEffect, b as createVNode, ab as FocusScope_default, j as withModifiers, ac as DismissableLayer_default, P as resolveDynamicComponent, ad as unrefElement, ae as focusFirst, af as useForwardExpose, B as onMounted, ag as nextTick, ah as useResizeObserver, ai as Primitive, y as normalizeStyle, aj as useForwardPropsEmits, ak as normalizeProps, al as guardReactiveProps, am as Presence_default, an as Teleport, i as createTextVNode, ao as useId, ap as handleAndDispatchCustomEvent, aq as getActiveElement, C as onUnmounted, ar as Teleport_default, as as onBeforeUnmount, at as PopperAnchor_default, t as toDisplayString, c as createLucideIcon, au as reactiveOmit, av as cn, n as normalizeClass, u as useForm, D as withDirectives, E as vModelText, _ as _sfc_main$g, x as link_default, G as ChevronRight, H as router } from "./app-U-Wu707C.js";
import { _ as _sfc_main$i } from "./ConfirmDialog.vue_vue_type_script_setup_true_lang-DqKgXRjN.js";
import { _ as _sfc_main$f } from "./InputError.vue_vue_type_script_setup_true_lang-DT4TW3sY.js";
import { i as index, _ as _sfc_main$h } from "./index-2dJNrEoj.js";
import { a as _sfc_main$8, _ as _sfc_main$c } from "./CardContent.vue_vue_type_script_setup_true_lang-T4Xk2G9g.js";
import { _ as _sfc_main$b } from "./CardDescription.vue_vue_type_script_setup_true_lang-m_mruJqV.js";
import { _ as _sfc_main$9, a as _sfc_main$a } from "./CardTitle.vue_vue_type_script_setup_true_lang-DjK7ckh3.js";
import { _ as _sfc_main$e } from "./Input.vue_vue_type_script_setup_true_lang-qAY1AdtK.js";
import { _ as _sfc_main$d } from "./Label.vue_vue_type_script_setup_true_lang-BhU3nPQR.js";
import { i as isEqual, u as useFormControl } from "./useFormControl-BIfMbEES.js";
import { a as ChevronDown, C as ChevronUp } from "./chevron-up-CptlasEZ.js";
import { C as Check } from "./check-B04R2KHz.js";
import { T as Trash2, u as useToast } from "./useToast-BkhX-iHM.js";
import { E as Eye } from "./eye-CDJpc4P-.js";
import { M as MonitorX, C as ChevronLeft } from "./monitor-x-Cisb6MMH.js";
import { C as CircleCheck } from "./circle-check-DuM6zutW.js";
import { P as Plus } from "./plus-2A4mbTCz.js";
import { T as TriangleAlert } from "./triangle-alert-CeaKFo9s.js";
function clamp(value, min = Number.NEGATIVE_INFINITY, max = Number.POSITIVE_INFINITY) {
  return Math.min(max, Math.max(min, value));
}
function useNonce(nonce) {
  const context = injectConfigProviderContext({ nonce: ref() });
  return computed(() => {
    var _a;
    return (nonce == null ? void 0 : nonce.value) || ((_a = context.nonce) == null ? void 0 : _a.value);
  });
}
const OPEN_KEYS = [
  " ",
  "Enter",
  "ArrowUp",
  "ArrowDown"
];
const SELECTION_KEYS = [" ", "Enter"];
const CONTENT_MARGIN = 10;
function valueComparator(value, currentValue, comparator) {
  if (value === void 0) return false;
  else if (Array.isArray(value)) return value.some((val) => compare(val, currentValue, comparator));
  else return compare(value, currentValue, comparator);
}
function compare(value, currentValue, comparator) {
  if (value === void 0 || currentValue === void 0) return false;
  if (typeof value === "string") return value === currentValue;
  if (typeof comparator === "function") return comparator(value, currentValue);
  if (typeof comparator === "string") return (value == null ? void 0 : value[comparator]) === (currentValue == null ? void 0 : currentValue[comparator]);
  return isEqual(value, currentValue);
}
function shouldShowPlaceholder(value) {
  return value === void 0 || value === null || value === "" || Array.isArray(value) && value.length === 0;
}
const _hoisted_1$3 = {
  key: 0,
  value: ""
};
const [injectSelectRootContext, provideSelectRootContext] = /* @__PURE__ */ createContext("SelectRoot");
var SelectRoot_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
  inheritAttrs: false,
  __name: "SelectRoot",
  props: {
    open: {
      type: Boolean,
      required: false,
      default: void 0
    },
    defaultOpen: {
      type: Boolean,
      required: false
    },
    defaultValue: {
      type: null,
      required: false
    },
    modelValue: {
      type: null,
      required: false,
      default: void 0
    },
    by: {
      type: [String, Function],
      required: false
    },
    dir: {
      type: String,
      required: false
    },
    multiple: {
      type: Boolean,
      required: false
    },
    autocomplete: {
      type: String,
      required: false
    },
    disabled: {
      type: Boolean,
      required: false
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
  emits: ["update:modelValue", "update:open"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const { required, disabled, multiple, dir: propDir } = toRefs(props);
    const modelValue = useVModel(props, "modelValue", emits, {
      defaultValue: props.defaultValue ?? (multiple.value ? [] : void 0),
      passive: props.modelValue === void 0,
      deep: true
    });
    const open = useVModel(props, "open", emits, {
      defaultValue: props.defaultOpen,
      passive: props.open === void 0
    });
    const triggerElement = ref();
    const valueElement = ref();
    const triggerPointerDownPosRef = ref({
      x: 0,
      y: 0
    });
    const isEmptyModelValue = computed(() => {
      var _a;
      if (multiple.value && Array.isArray(modelValue.value)) return ((_a = modelValue.value) == null ? void 0 : _a.length) === 0;
      else return isNullish(modelValue.value);
    });
    useCollection({ isProvider: true });
    const dir = useDirection(propDir);
    const isFormControl = useFormControl(triggerElement);
    const optionsSet = ref(/* @__PURE__ */ new Set());
    const nativeSelectKey = computed(() => {
      return Array.from(optionsSet.value).map((option) => option.value).join(";");
    });
    function handleValueChange(value) {
      if (multiple.value) {
        const array = Array.isArray(modelValue.value) ? [...modelValue.value] : [];
        const index2 = array.findIndex((i) => compare(i, value, props.by));
        index2 === -1 ? array.push(value) : array.splice(index2, 1);
        modelValue.value = [...array];
      } else modelValue.value = value;
    }
    function getOption(value) {
      return Array.from(optionsSet.value).find((option) => valueComparator(value, option.value, props.by));
    }
    provideSelectRootContext({
      triggerElement,
      onTriggerChange: (node) => {
        triggerElement.value = node;
      },
      valueElement,
      onValueElementChange: (node) => {
        valueElement.value = node;
      },
      contentId: "",
      modelValue,
      onValueChange: handleValueChange,
      by: props.by,
      open,
      multiple,
      required,
      onOpenChange: (value) => {
        open.value = value;
      },
      dir,
      triggerPointerDownPosRef,
      disabled,
      isEmptyModelValue,
      optionsSet,
      onOptionAdd: (option) => {
        const existingOption = getOption(option.value);
        if (existingOption) optionsSet.value.delete(existingOption);
        optionsSet.value.add(option);
      },
      onOptionRemove: (option) => {
        const existingOption = getOption(option.value);
        if (existingOption) optionsSet.value.delete(existingOption);
      }
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(PopperRoot_default), null, {
        default: withCtx(() => [renderSlot(_ctx.$slots, "default", {
          modelValue: unref(modelValue),
          open: unref(open)
        }), unref(isFormControl) && _ctx.name ? (openBlock(), createBlock(BubbleSelect_default, {
          key: nativeSelectKey.value,
          "aria-hidden": "true",
          tabindex: "-1",
          multiple: unref(multiple),
          required: unref(required),
          name: _ctx.name,
          autocomplete: _ctx.autocomplete,
          disabled: unref(disabled),
          value: unref(modelValue)
        }, {
          default: withCtx(() => [unref(isNullish)(unref(modelValue)) ? (openBlock(), createElementBlock("option", _hoisted_1$3)) : createCommentVNode("v-if", true), (openBlock(true), createElementBlock(Fragment, null, renderList(Array.from(optionsSet.value), (option) => {
            return openBlock(), createElementBlock("option", mergeProps({ key: option.value ?? "" }, { ref_for: true }, option), null, 16);
          }), 128))]),
          _: 1
        }, 8, [
          "multiple",
          "required",
          "name",
          "autocomplete",
          "disabled",
          "value"
        ])) : createCommentVNode("v-if", true)]),
        _: 3
      });
    };
  }
});
var SelectRoot_default = SelectRoot_vue_vue_type_script_setup_true_lang_default;
var BubbleSelect_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
  __name: "BubbleSelect",
  props: {
    autocomplete: {
      type: String,
      required: false
    },
    autofocus: {
      type: Boolean,
      required: false
    },
    disabled: {
      type: Boolean,
      required: false
    },
    form: {
      type: String,
      required: false
    },
    multiple: {
      type: Boolean,
      required: false
    },
    name: {
      type: String,
      required: false
    },
    required: {
      type: Boolean,
      required: false
    },
    size: {
      type: Number,
      required: false
    },
    value: {
      type: null,
      required: false
    }
  },
  setup(__props) {
    const props = __props;
    const selectElement = ref();
    const rootContext = injectSelectRootContext();
    watch(() => props.value, (cur, prev) => {
      const selectProto = window.HTMLSelectElement.prototype;
      const descriptor = Object.getOwnPropertyDescriptor(selectProto, "value");
      const setValue = descriptor.set;
      if (cur !== prev && setValue && selectElement.value) {
        const event = new Event("change", { bubbles: true });
        setValue.call(selectElement.value, cur);
        selectElement.value.dispatchEvent(event);
      }
    });
    function handleInput(event) {
      rootContext.onValueChange(event.target.value);
    }
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(VisuallyHidden_default), { "as-child": "" }, {
        default: withCtx(() => [createBaseVNode("select", mergeProps({
          ref_key: "selectElement",
          ref: selectElement
        }, props, { onInput: handleInput }), [renderSlot(_ctx.$slots, "default")], 16)]),
        _: 3
      });
    };
  }
});
var BubbleSelect_default = BubbleSelect_vue_vue_type_script_setup_true_lang_default;
var SelectPopperPosition_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
  __name: "SelectPopperPosition",
  props: {
    side: {
      type: null,
      required: false
    },
    sideOffset: {
      type: Number,
      required: false
    },
    sideFlip: {
      type: Boolean,
      required: false
    },
    align: {
      type: null,
      required: false,
      default: "start"
    },
    alignOffset: {
      type: Number,
      required: false
    },
    alignFlip: {
      type: Boolean,
      required: false
    },
    avoidCollisions: {
      type: Boolean,
      required: false
    },
    collisionBoundary: {
      type: null,
      required: false
    },
    collisionPadding: {
      type: [Number, Object],
      required: false,
      default: CONTENT_MARGIN
    },
    arrowPadding: {
      type: Number,
      required: false
    },
    hideShiftedArrow: {
      type: Boolean,
      required: false
    },
    sticky: {
      type: String,
      required: false
    },
    hideWhenDetached: {
      type: Boolean,
      required: false
    },
    positionStrategy: {
      type: String,
      required: false
    },
    updatePositionStrategy: {
      type: String,
      required: false
    },
    disableUpdateOnLayoutShift: {
      type: Boolean,
      required: false
    },
    prioritizePosition: {
      type: Boolean,
      required: false
    },
    reference: {
      type: null,
      required: false
    },
    asChild: {
      type: Boolean,
      required: false
    },
    as: {
      type: null,
      required: false
    }
  },
  setup(__props) {
    const props = __props;
    const forwarded = useForwardProps(props);
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(PopperContent_default), mergeProps(unref(forwarded), { style: {
        "boxSizing": "border-box",
        "--reka-select-content-transform-origin": "var(--reka-popper-transform-origin)",
        "--reka-select-content-available-width": "var(--reka-popper-available-width)",
        "--reka-select-content-available-height": "var(--reka-popper-available-height)",
        "--reka-select-trigger-width": "var(--reka-popper-anchor-width)",
        "--reka-select-trigger-height": "var(--reka-popper-anchor-height)"
      } }), {
        default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
        _: 3
      }, 16);
    };
  }
});
var SelectPopperPosition_default = SelectPopperPosition_vue_vue_type_script_setup_true_lang_default;
const SelectContentDefaultContextValue = {
  onViewportChange: () => {
  },
  itemTextRefCallback: () => {
  },
  itemRefCallback: () => {
  }
};
const [injectSelectContentContext, provideSelectContentContext] = /* @__PURE__ */ createContext("SelectContent");
var SelectContentImpl_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
  __name: "SelectContentImpl",
  props: {
    position: {
      type: String,
      required: false,
      default: "item-aligned"
    },
    bodyLock: {
      type: Boolean,
      required: false,
      default: true
    },
    side: {
      type: null,
      required: false
    },
    sideOffset: {
      type: Number,
      required: false
    },
    sideFlip: {
      type: Boolean,
      required: false
    },
    align: {
      type: null,
      required: false,
      default: "start"
    },
    alignOffset: {
      type: Number,
      required: false
    },
    alignFlip: {
      type: Boolean,
      required: false
    },
    avoidCollisions: {
      type: Boolean,
      required: false
    },
    collisionBoundary: {
      type: null,
      required: false
    },
    collisionPadding: {
      type: [Number, Object],
      required: false
    },
    arrowPadding: {
      type: Number,
      required: false
    },
    hideShiftedArrow: {
      type: Boolean,
      required: false
    },
    sticky: {
      type: String,
      required: false
    },
    hideWhenDetached: {
      type: Boolean,
      required: false
    },
    positionStrategy: {
      type: String,
      required: false
    },
    updatePositionStrategy: {
      type: String,
      required: false
    },
    disableUpdateOnLayoutShift: {
      type: Boolean,
      required: false
    },
    prioritizePosition: {
      type: Boolean,
      required: false
    },
    reference: {
      type: null,
      required: false
    },
    asChild: {
      type: Boolean,
      required: false
    },
    as: {
      type: null,
      required: false
    },
    disableOutsidePointerEvents: {
      type: Boolean,
      required: false,
      default: true
    }
  },
  emits: [
    "closeAutoFocus",
    "escapeKeyDown",
    "pointerDownOutside"
  ],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const rootContext = injectSelectRootContext();
    useFocusGuards();
    useBodyScrollLock(props.bodyLock);
    const { CollectionSlot, getItems } = useCollection();
    const content = ref();
    useHideOthers(content);
    const { search, handleTypeaheadSearch } = useTypeahead();
    const viewport = ref();
    const selectedItem = ref();
    const selectedItemText = ref();
    const isPositioned = ref(false);
    const firstValidItemFoundRef = ref(false);
    const firstSelectedItemInArrayFoundRef = ref(false);
    function focusSelectedItem() {
      if (selectedItem.value && content.value) focusFirst([selectedItem.value, content.value]);
    }
    watch(isPositioned, () => {
      focusSelectedItem();
    });
    const { onOpenChange, triggerPointerDownPosRef } = rootContext;
    watchEffect((cleanupFn) => {
      if (!content.value) return;
      let pointerMoveDelta = {
        x: 0,
        y: 0
      };
      const handlePointerMove = (event) => {
        var _a, _b;
        pointerMoveDelta = {
          x: Math.abs(Math.round(event.pageX) - (((_a = triggerPointerDownPosRef.value) == null ? void 0 : _a.x) ?? 0)),
          y: Math.abs(Math.round(event.pageY) - (((_b = triggerPointerDownPosRef.value) == null ? void 0 : _b.y) ?? 0))
        };
      };
      const handlePointerUp = (event) => {
        var _a;
        if (event.pointerType === "touch") return;
        if (pointerMoveDelta.x <= 10 && pointerMoveDelta.y <= 10) event.preventDefault();
        else if (!((_a = content.value) == null ? void 0 : _a.contains(event.target))) onOpenChange(false);
        document.removeEventListener("pointermove", handlePointerMove);
        triggerPointerDownPosRef.value = null;
      };
      if (triggerPointerDownPosRef.value !== null) {
        document.addEventListener("pointermove", handlePointerMove);
        document.addEventListener("pointerup", handlePointerUp, {
          capture: true,
          once: true
        });
      }
      cleanupFn(() => {
        document.removeEventListener("pointermove", handlePointerMove);
        document.removeEventListener("pointerup", handlePointerUp, { capture: true });
      });
    });
    function handleKeyDown(event) {
      const isModifierKey = event.ctrlKey || event.altKey || event.metaKey;
      if (event.key === "Tab") event.preventDefault();
      if (!isModifierKey && event.key.length === 1) handleTypeaheadSearch(event.key, getItems());
      if ([
        "ArrowUp",
        "ArrowDown",
        "Home",
        "End"
      ].includes(event.key)) {
        const collectionItems = getItems().map((i) => i.ref);
        let candidateNodes = [...collectionItems];
        if (["ArrowUp", "End"].includes(event.key)) candidateNodes = candidateNodes.slice().reverse();
        if (["ArrowUp", "ArrowDown"].includes(event.key)) {
          const currentElement = event.target;
          const currentIndex = candidateNodes.indexOf(currentElement);
          candidateNodes = candidateNodes.slice(currentIndex + 1);
        }
        setTimeout(() => focusFirst(candidateNodes));
        event.preventDefault();
      }
    }
    const pickedProps = computed(() => {
      if (props.position === "popper") return props;
      else return {};
    });
    const forwardedProps = useForwardProps(pickedProps.value);
    provideSelectContentContext({
      content,
      viewport,
      onViewportChange: (node) => {
        viewport.value = node;
      },
      itemRefCallback: (node, value, disabled) => {
        const isFirstValidItem = !firstValidItemFoundRef.value && !disabled;
        const isSelectedItem = valueComparator(rootContext.modelValue.value, value, rootContext.by);
        if (rootContext.multiple.value) {
          if (firstSelectedItemInArrayFoundRef.value) return;
          if (isSelectedItem || isFirstValidItem) {
            selectedItem.value = node;
            if (isSelectedItem) firstSelectedItemInArrayFoundRef.value = true;
          }
        } else if (isSelectedItem || isFirstValidItem) selectedItem.value = node;
        if (isFirstValidItem) firstValidItemFoundRef.value = true;
      },
      selectedItem,
      selectedItemText,
      onItemLeave: () => {
        var _a;
        (_a = content.value) == null ? void 0 : _a.focus();
      },
      itemTextRefCallback: (node, value, disabled) => {
        const isFirstValidItem = !firstValidItemFoundRef.value && !disabled;
        const isSelectedItem = valueComparator(rootContext.modelValue.value, value, rootContext.by);
        if (isSelectedItem || isFirstValidItem) selectedItemText.value = node;
      },
      focusSelectedItem,
      position: props.position,
      isPositioned,
      searchRef: search
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(CollectionSlot), null, {
        default: withCtx(() => [createVNode(unref(FocusScope_default), {
          "as-child": "",
          onMountAutoFocus: _cache[6] || (_cache[6] = withModifiers(() => {
          }, ["prevent"])),
          onUnmountAutoFocus: _cache[7] || (_cache[7] = (event) => {
            var _a;
            emits("closeAutoFocus", event);
            if (event.defaultPrevented) return;
            (_a = unref(rootContext).triggerElement.value) == null ? void 0 : _a.focus({ preventScroll: true });
            event.preventDefault();
          })
        }, {
          default: withCtx(() => [createVNode(unref(DismissableLayer_default), {
            "as-child": "",
            "disable-outside-pointer-events": _ctx.disableOutsidePointerEvents,
            onFocusOutside: _cache[2] || (_cache[2] = withModifiers(() => {
            }, ["prevent"])),
            onDismiss: _cache[3] || (_cache[3] = ($event) => unref(rootContext).onOpenChange(false)),
            onEscapeKeyDown: _cache[4] || (_cache[4] = ($event) => emits("escapeKeyDown", $event)),
            onPointerDownOutside: _cache[5] || (_cache[5] = ($event) => emits("pointerDownOutside", $event))
          }, {
            default: withCtx(() => [(openBlock(), createBlock(resolveDynamicComponent(_ctx.position === "popper" ? SelectPopperPosition_default : SelectItemAlignedPosition_default), mergeProps({
              ..._ctx.$attrs,
              ...unref(forwardedProps)
            }, {
              id: unref(rootContext).contentId,
              ref: (vnode) => {
                if (!vnode) return void 0;
                const el = unref(unrefElement)(vnode);
                if (el == null ? void 0 : el.hasAttribute("data-reka-popper-content-wrapper")) content.value = el.firstElementChild;
                else content.value = el;
                return void 0;
              },
              role: "listbox",
              "data-state": unref(rootContext).open.value ? "open" : "closed",
              dir: unref(rootContext).dir.value,
              style: {
                display: "flex",
                flexDirection: "column",
                outline: "none"
              },
              onContextmenu: _cache[0] || (_cache[0] = withModifiers(() => {
              }, ["prevent"])),
              onPlaced: _cache[1] || (_cache[1] = ($event) => isPositioned.value = true),
              onKeydown: handleKeyDown
            }), {
              default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
              _: 3
            }, 16, [
              "id",
              "data-state",
              "dir",
              "onKeydown"
            ]))]),
            _: 3
          }, 8, ["disable-outside-pointer-events"])]),
          _: 3
        })]),
        _: 3
      });
    };
  }
});
var SelectContentImpl_default = SelectContentImpl_vue_vue_type_script_setup_true_lang_default;
const [injectSelectItemAlignedPositionContext, provideSelectItemAlignedPositionContext] = /* @__PURE__ */ createContext("SelectItemAlignedPosition");
var SelectItemAlignedPosition_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
  inheritAttrs: false,
  __name: "SelectItemAlignedPosition",
  props: {
    asChild: {
      type: Boolean,
      required: false
    },
    as: {
      type: null,
      required: false
    }
  },
  emits: ["placed"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const { getItems } = useCollection();
    const rootContext = injectSelectRootContext();
    const contentContext = injectSelectContentContext();
    const shouldExpandOnScrollRef = ref(false);
    const shouldRepositionRef = ref(true);
    const contentWrapperElement = ref();
    const { forwardRef, currentElement: contentElement } = useForwardExpose();
    const { viewport, selectedItem, selectedItemText, focusSelectedItem } = contentContext;
    function position() {
      if (rootContext.triggerElement.value && rootContext.valueElement.value && contentWrapperElement.value && contentElement.value && (viewport == null ? void 0 : viewport.value) && (selectedItem == null ? void 0 : selectedItem.value) && (selectedItemText == null ? void 0 : selectedItemText.value)) {
        const triggerRect = rootContext.triggerElement.value.getBoundingClientRect();
        const contentRect = contentElement.value.getBoundingClientRect();
        const valueNodeRect = rootContext.valueElement.value.getBoundingClientRect();
        const itemTextRect = selectedItemText.value.getBoundingClientRect();
        if (rootContext.dir.value !== "rtl") {
          const itemTextOffset = itemTextRect.left - contentRect.left;
          const left = valueNodeRect.left - itemTextOffset;
          const leftDelta = triggerRect.left - left;
          const minContentWidth = triggerRect.width + leftDelta;
          const contentWidth = Math.max(minContentWidth, contentRect.width);
          const rightEdge = window.innerWidth - CONTENT_MARGIN;
          const clampedLeft = clamp(left, CONTENT_MARGIN, Math.max(CONTENT_MARGIN, rightEdge - contentWidth));
          contentWrapperElement.value.style.minWidth = `${minContentWidth}px`;
          contentWrapperElement.value.style.left = `${clampedLeft}px`;
        } else {
          const itemTextOffset = contentRect.right - itemTextRect.right;
          const right = window.innerWidth - valueNodeRect.right - itemTextOffset;
          const rightDelta = window.innerWidth - triggerRect.right - right;
          const minContentWidth = triggerRect.width + rightDelta;
          const contentWidth = Math.max(minContentWidth, contentRect.width);
          const leftEdge = window.innerWidth - CONTENT_MARGIN;
          const clampedRight = clamp(right, CONTENT_MARGIN, Math.max(CONTENT_MARGIN, leftEdge - contentWidth));
          contentWrapperElement.value.style.minWidth = `${minContentWidth}px`;
          contentWrapperElement.value.style.right = `${clampedRight}px`;
        }
        const items = getItems().map((i) => i.ref);
        const availableHeight = window.innerHeight - CONTENT_MARGIN * 2;
        const itemsHeight = viewport.value.scrollHeight;
        const contentStyles = window.getComputedStyle(contentElement.value);
        const contentBorderTopWidth = Number.parseInt(contentStyles.borderTopWidth, 10);
        const contentPaddingTop = Number.parseInt(contentStyles.paddingTop, 10);
        const contentBorderBottomWidth = Number.parseInt(contentStyles.borderBottomWidth, 10);
        const contentPaddingBottom = Number.parseInt(contentStyles.paddingBottom, 10);
        const fullContentHeight = contentBorderTopWidth + contentPaddingTop + itemsHeight + contentPaddingBottom + contentBorderBottomWidth;
        const minContentHeight = Math.min(selectedItem.value.offsetHeight * 5, fullContentHeight);
        const viewportStyles = window.getComputedStyle(viewport.value);
        const viewportPaddingTop = Number.parseInt(viewportStyles.paddingTop, 10);
        const viewportPaddingBottom = Number.parseInt(viewportStyles.paddingBottom, 10);
        const topEdgeToTriggerMiddle = triggerRect.top + triggerRect.height / 2 - CONTENT_MARGIN;
        const triggerMiddleToBottomEdge = availableHeight - topEdgeToTriggerMiddle;
        const selectedItemHalfHeight = selectedItem.value.offsetHeight / 2;
        const itemOffsetMiddle = selectedItem.value.offsetTop + selectedItemHalfHeight;
        const contentTopToItemMiddle = contentBorderTopWidth + contentPaddingTop + itemOffsetMiddle;
        const itemMiddleToContentBottom = fullContentHeight - contentTopToItemMiddle;
        const willAlignWithoutTopOverflow = contentTopToItemMiddle <= topEdgeToTriggerMiddle;
        if (willAlignWithoutTopOverflow) {
          const isLastItem = selectedItem.value === items.at(-1);
          contentWrapperElement.value.style.bottom = `0px`;
          const viewportOffsetBottom = contentElement.value.clientHeight - viewport.value.offsetTop - viewport.value.offsetHeight;
          const clampedTriggerMiddleToBottomEdge = Math.max(triggerMiddleToBottomEdge, selectedItemHalfHeight + (isLastItem ? viewportPaddingBottom : 0) + viewportOffsetBottom + contentBorderBottomWidth);
          const height = contentTopToItemMiddle + clampedTriggerMiddleToBottomEdge;
          contentWrapperElement.value.style.height = `${height}px`;
        } else {
          const isFirstItem = selectedItem.value === items[0];
          contentWrapperElement.value.style.top = `0px`;
          const clampedTopEdgeToTriggerMiddle = Math.max(topEdgeToTriggerMiddle, contentBorderTopWidth + viewport.value.offsetTop + (isFirstItem ? viewportPaddingTop : 0) + selectedItemHalfHeight);
          const height = clampedTopEdgeToTriggerMiddle + itemMiddleToContentBottom;
          contentWrapperElement.value.style.height = `${height}px`;
          viewport.value.scrollTop = contentTopToItemMiddle - topEdgeToTriggerMiddle + viewport.value.offsetTop;
        }
        contentWrapperElement.value.style.margin = `${CONTENT_MARGIN}px 0`;
        contentWrapperElement.value.style.minHeight = `${minContentHeight}px`;
        contentWrapperElement.value.style.maxHeight = `${availableHeight}px`;
        emits("placed");
        requestAnimationFrame(() => shouldExpandOnScrollRef.value = true);
      }
    }
    const contentZIndex = ref("");
    onMounted(async () => {
      await nextTick();
      position();
      if (contentElement.value) contentZIndex.value = window.getComputedStyle(contentElement.value).zIndex;
    });
    function handleScrollButtonChange(node) {
      if (node && shouldRepositionRef.value === true) {
        position();
        focusSelectedItem == null ? void 0 : focusSelectedItem();
        shouldRepositionRef.value = false;
      }
    }
    useResizeObserver(rootContext.triggerElement, () => {
      position();
    });
    provideSelectItemAlignedPositionContext({
      contentWrapper: contentWrapperElement,
      shouldExpandOnScrollRef,
      onScrollButtonChange: handleScrollButtonChange
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        ref_key: "contentWrapperElement",
        ref: contentWrapperElement,
        style: normalizeStyle({
          display: "flex",
          flexDirection: "column",
          position: "fixed",
          zIndex: contentZIndex.value
        })
      }, [createVNode(unref(Primitive), mergeProps({
        ref: unref(forwardRef),
        style: {
          boxSizing: "border-box",
          maxHeight: "100%"
        }
      }, {
        ..._ctx.$attrs,
        ...props
      }), {
        default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
        _: 3
      }, 16)], 4);
    };
  }
});
var SelectItemAlignedPosition_default = SelectItemAlignedPosition_vue_vue_type_script_setup_true_lang_default;
var SelectProvider_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
  inheritAttrs: false,
  __name: "SelectProvider",
  props: { context: {
    type: Object,
    required: true
  } },
  setup(__props) {
    const props = __props;
    provideSelectRootContext(props.context);
    provideSelectContentContext(SelectContentDefaultContextValue);
    return (_ctx, _cache) => {
      return renderSlot(_ctx.$slots, "default");
    };
  }
});
var SelectProvider_default = SelectProvider_vue_vue_type_script_setup_true_lang_default;
const _hoisted_1$2 = { key: 1 };
var SelectContent_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
  inheritAttrs: false,
  __name: "SelectContent",
  props: {
    forceMount: {
      type: Boolean,
      required: false
    },
    position: {
      type: String,
      required: false
    },
    bodyLock: {
      type: Boolean,
      required: false
    },
    side: {
      type: null,
      required: false
    },
    sideOffset: {
      type: Number,
      required: false
    },
    sideFlip: {
      type: Boolean,
      required: false
    },
    align: {
      type: null,
      required: false
    },
    alignOffset: {
      type: Number,
      required: false
    },
    alignFlip: {
      type: Boolean,
      required: false
    },
    avoidCollisions: {
      type: Boolean,
      required: false
    },
    collisionBoundary: {
      type: null,
      required: false
    },
    collisionPadding: {
      type: [Number, Object],
      required: false
    },
    arrowPadding: {
      type: Number,
      required: false
    },
    hideShiftedArrow: {
      type: Boolean,
      required: false
    },
    sticky: {
      type: String,
      required: false
    },
    hideWhenDetached: {
      type: Boolean,
      required: false
    },
    positionStrategy: {
      type: String,
      required: false
    },
    updatePositionStrategy: {
      type: String,
      required: false
    },
    disableUpdateOnLayoutShift: {
      type: Boolean,
      required: false
    },
    prioritizePosition: {
      type: Boolean,
      required: false
    },
    reference: {
      type: null,
      required: false
    },
    asChild: {
      type: Boolean,
      required: false
    },
    as: {
      type: null,
      required: false
    },
    disableOutsidePointerEvents: {
      type: Boolean,
      required: false
    }
  },
  emits: [
    "closeAutoFocus",
    "escapeKeyDown",
    "pointerDownOutside"
  ],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const forwarded = useForwardPropsEmits(props, emits);
    const rootContext = injectSelectRootContext();
    const fragment = ref();
    onMounted(() => {
      fragment.value = new DocumentFragment();
    });
    const presenceRef = ref();
    const present = computed(() => props.forceMount || rootContext.open.value);
    const renderPresence = ref(present.value);
    watch(present, () => {
      setTimeout(() => renderPresence.value = present.value);
    });
    return (_ctx, _cache) => {
      var _a;
      return present.value || renderPresence.value || ((_a = presenceRef.value) == null ? void 0 : _a.present) ? (openBlock(), createBlock(unref(Presence_default), {
        key: 0,
        ref_key: "presenceRef",
        ref: presenceRef,
        present: present.value
      }, {
        default: withCtx(() => [createVNode(SelectContentImpl_default, normalizeProps(guardReactiveProps({
          ...unref(forwarded),
          ..._ctx.$attrs
        })), {
          default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
          _: 3
        }, 16)]),
        _: 3
      }, 8, ["present"])) : fragment.value ? (openBlock(), createElementBlock("div", _hoisted_1$2, [(openBlock(), createBlock(Teleport, { to: fragment.value }, [createVNode(SelectProvider_default, { context: unref(rootContext) }, {
        default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
        _: 3
      }, 8, ["context"])], 8, ["to"]))])) : createCommentVNode("v-if", true);
    };
  }
});
var SelectContent_default = SelectContent_vue_vue_type_script_setup_true_lang_default;
var SelectIcon_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
  __name: "SelectIcon",
  props: {
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
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(Primitive), {
        "aria-hidden": "true",
        as: _ctx.as,
        "as-child": _ctx.asChild
      }, {
        default: withCtx(() => [renderSlot(_ctx.$slots, "default", {}, () => [_cache[0] || (_cache[0] = createTextVNode("▼"))])]),
        _: 3
      }, 8, ["as", "as-child"]);
    };
  }
});
var SelectIcon_default = SelectIcon_vue_vue_type_script_setup_true_lang_default;
const [injectSelectItemContext, provideSelectItemContext] = /* @__PURE__ */ createContext("SelectItem");
var SelectItem_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
  __name: "SelectItem",
  props: {
    value: {
      type: null,
      required: true
    },
    disabled: {
      type: Boolean,
      required: false
    },
    textValue: {
      type: String,
      required: false
    },
    asChild: {
      type: Boolean,
      required: false
    },
    as: {
      type: null,
      required: false
    }
  },
  emits: ["select"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const { disabled } = toRefs(props);
    const rootContext = injectSelectRootContext();
    const contentContext = injectSelectContentContext();
    const { forwardRef, currentElement } = useForwardExpose();
    const { CollectionItem } = useCollection();
    const isSelected = computed(() => {
      var _a;
      return valueComparator((_a = rootContext.modelValue) == null ? void 0 : _a.value, props.value, rootContext.by);
    });
    const isFocused = ref(false);
    const textValue = ref(props.textValue ?? "");
    const textId = useId(void 0, "reka-select-item-text");
    const SELECT_SELECT = "select.select";
    async function handleSelectCustomEvent(ev) {
      if (ev.defaultPrevented) return;
      const eventDetail = {
        originalEvent: ev,
        value: props.value
      };
      handleAndDispatchCustomEvent(SELECT_SELECT, handleSelect, eventDetail);
    }
    async function handleSelect(ev) {
      await nextTick();
      emits("select", ev);
      if (ev.defaultPrevented) return;
      if (!disabled.value) {
        rootContext.onValueChange(props.value);
        if (!rootContext.multiple.value) rootContext.onOpenChange(false);
      }
    }
    async function handlePointerMove(event) {
      var _a, _b;
      await nextTick();
      if (event.defaultPrevented) return;
      if (disabled.value) (_a = contentContext.onItemLeave) == null ? void 0 : _a.call(contentContext);
      else (_b = event.currentTarget) == null ? void 0 : _b.focus({ preventScroll: true });
    }
    async function handlePointerLeave(event) {
      var _a;
      await nextTick();
      if (event.defaultPrevented) return;
      if (event.currentTarget === getActiveElement()) (_a = contentContext.onItemLeave) == null ? void 0 : _a.call(contentContext);
    }
    async function handleKeyDown(event) {
      var _a;
      await nextTick();
      if (event.defaultPrevented) return;
      const isTypingAhead = ((_a = contentContext.searchRef) == null ? void 0 : _a.value) !== "";
      if (isTypingAhead && event.key === " ") return;
      if (SELECTION_KEYS.includes(event.key)) handleSelectCustomEvent(event);
      if (event.key === " ") event.preventDefault();
    }
    if (props.value === "") throw new Error("A <SelectItem /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder.");
    onMounted(() => {
      if (!currentElement.value) return;
      contentContext.itemRefCallback(currentElement.value, props.value, props.disabled);
    });
    provideSelectItemContext({
      value: props.value,
      disabled,
      textId,
      isSelected,
      onItemTextChange: (node) => {
        textValue.value = ((textValue.value || (node == null ? void 0 : node.textContent)) ?? "").trim();
      }
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(CollectionItem), { value: { textValue: textValue.value } }, {
        default: withCtx(() => [createVNode(unref(Primitive), {
          ref: unref(forwardRef),
          role: "option",
          "aria-labelledby": unref(textId),
          "data-highlighted": isFocused.value ? "" : void 0,
          "aria-selected": isSelected.value,
          "data-state": isSelected.value ? "checked" : "unchecked",
          "aria-disabled": unref(disabled) || void 0,
          "data-disabled": unref(disabled) ? "" : void 0,
          tabindex: unref(disabled) ? void 0 : -1,
          as: _ctx.as,
          "as-child": _ctx.asChild,
          onFocus: _cache[0] || (_cache[0] = ($event) => isFocused.value = true),
          onBlur: _cache[1] || (_cache[1] = ($event) => isFocused.value = false),
          onPointerup: handleSelectCustomEvent,
          onPointerdown: _cache[2] || (_cache[2] = (event) => {
            event.currentTarget.focus({ preventScroll: true });
          }),
          onTouchend: _cache[3] || (_cache[3] = withModifiers(() => {
          }, ["prevent", "stop"])),
          onPointermove: handlePointerMove,
          onPointerleave: handlePointerLeave,
          onKeydown: handleKeyDown
        }, {
          default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
          _: 3
        }, 8, [
          "aria-labelledby",
          "data-highlighted",
          "aria-selected",
          "data-state",
          "aria-disabled",
          "data-disabled",
          "tabindex",
          "as",
          "as-child"
        ])]),
        _: 3
      }, 8, ["value"]);
    };
  }
});
var SelectItem_default = SelectItem_vue_vue_type_script_setup_true_lang_default;
var SelectItemIndicator_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
  __name: "SelectItemIndicator",
  props: {
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
    const itemContext = injectSelectItemContext();
    return (_ctx, _cache) => {
      return unref(itemContext).isSelected.value ? (openBlock(), createBlock(unref(Primitive), mergeProps({
        key: 0,
        "aria-hidden": "true"
      }, props), {
        default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
        _: 3
      }, 16)) : createCommentVNode("v-if", true);
    };
  }
});
var SelectItemIndicator_default = SelectItemIndicator_vue_vue_type_script_setup_true_lang_default;
var SelectItemText_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
  inheritAttrs: false,
  __name: "SelectItemText",
  props: {
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
    const rootContext = injectSelectRootContext();
    const contentContext = injectSelectContentContext();
    const itemContext = injectSelectItemContext();
    const { forwardRef, currentElement: itemTextElement } = useForwardExpose();
    const optionProps = computed(() => {
      var _a, _b;
      return {
        value: itemContext.value,
        disabled: itemContext.disabled.value,
        textContent: ((_a = itemTextElement.value) == null ? void 0 : _a.textContent) ?? ((_b = itemContext.value) == null ? void 0 : _b.toString()) ?? ""
      };
    });
    onMounted(() => {
      if (!itemTextElement.value) return;
      itemContext.onItemTextChange(itemTextElement.value);
      contentContext.itemTextRefCallback(itemTextElement.value, itemContext.value, itemContext.disabled.value);
      rootContext.onOptionAdd(optionProps.value);
    });
    onUnmounted(() => {
      rootContext.onOptionRemove(optionProps.value);
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(Primitive), mergeProps({
        id: unref(itemContext).textId,
        ref: unref(forwardRef)
      }, {
        ...props,
        ..._ctx.$attrs
      }), {
        default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
        _: 3
      }, 16, ["id"]);
    };
  }
});
var SelectItemText_default = SelectItemText_vue_vue_type_script_setup_true_lang_default;
var SelectPortal_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
  __name: "SelectPortal",
  props: {
    to: {
      type: null,
      required: false
    },
    disabled: {
      type: Boolean,
      required: false
    },
    defer: {
      type: Boolean,
      required: false
    },
    forceMount: {
      type: Boolean,
      required: false
    }
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(Teleport_default), normalizeProps(guardReactiveProps(props)), {
        default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
        _: 3
      }, 16);
    };
  }
});
var SelectPortal_default = SelectPortal_vue_vue_type_script_setup_true_lang_default;
var SelectScrollButtonImpl_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
  __name: "SelectScrollButtonImpl",
  emits: ["autoScroll"],
  setup(__props, { emit: __emit }) {
    const emits = __emit;
    const { getItems } = useCollection();
    const contentContext = injectSelectContentContext();
    const autoScrollTimerRef = ref(null);
    function clearAutoScrollTimer() {
      if (autoScrollTimerRef.value !== null) {
        window.clearInterval(autoScrollTimerRef.value);
        autoScrollTimerRef.value = null;
      }
    }
    watchEffect(() => {
      const activeItem = getItems().map((i) => i.ref).find((item) => item === getActiveElement());
      activeItem == null ? void 0 : activeItem.scrollIntoView({ block: "nearest" });
    });
    function handlePointerDown() {
      if (autoScrollTimerRef.value === null) autoScrollTimerRef.value = window.setInterval(() => {
        emits("autoScroll");
      }, 50);
    }
    function handlePointerMove() {
      var _a;
      (_a = contentContext.onItemLeave) == null ? void 0 : _a.call(contentContext);
      if (autoScrollTimerRef.value === null) autoScrollTimerRef.value = window.setInterval(() => {
        emits("autoScroll");
      }, 50);
    }
    onBeforeUnmount(() => clearAutoScrollTimer());
    return (_ctx, _cache) => {
      var _a;
      return openBlock(), createBlock(unref(Primitive), mergeProps({
        "aria-hidden": "true",
        style: { flexShrink: 0 }
      }, (_a = _ctx.$parent) == null ? void 0 : _a.$props, {
        onPointerdown: handlePointerDown,
        onPointermove: handlePointerMove,
        onPointerleave: _cache[0] || (_cache[0] = () => {
          clearAutoScrollTimer();
        })
      }), {
        default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
        _: 3
      }, 16);
    };
  }
});
var SelectScrollButtonImpl_default = SelectScrollButtonImpl_vue_vue_type_script_setup_true_lang_default;
var SelectScrollDownButton_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
  __name: "SelectScrollDownButton",
  props: {
    asChild: {
      type: Boolean,
      required: false
    },
    as: {
      type: null,
      required: false
    }
  },
  setup(__props) {
    const contentContext = injectSelectContentContext();
    const alignedPositionContext = contentContext.position === "item-aligned" ? injectSelectItemAlignedPositionContext() : void 0;
    const { forwardRef, currentElement } = useForwardExpose();
    const canScrollDown = ref(false);
    watchEffect((cleanupFn) => {
      var _a, _b;
      if (((_a = contentContext.viewport) == null ? void 0 : _a.value) && ((_b = contentContext.isPositioned) == null ? void 0 : _b.value)) {
        let handleScroll = function() {
          const maxScroll = viewport.scrollHeight - viewport.clientHeight;
          canScrollDown.value = Math.ceil(viewport.scrollTop) < maxScroll;
        };
        const viewport = contentContext.viewport.value;
        handleScroll();
        viewport.addEventListener("scroll", handleScroll);
        cleanupFn(() => viewport.removeEventListener("scroll", handleScroll));
      }
    });
    watch(currentElement, () => {
      if (currentElement.value) alignedPositionContext == null ? void 0 : alignedPositionContext.onScrollButtonChange(currentElement.value);
    });
    return (_ctx, _cache) => {
      return canScrollDown.value ? (openBlock(), createBlock(SelectScrollButtonImpl_default, {
        key: 0,
        ref: unref(forwardRef),
        onAutoScroll: _cache[0] || (_cache[0] = () => {
          const { viewport, selectedItem } = unref(contentContext);
          if ((viewport == null ? void 0 : viewport.value) && (selectedItem == null ? void 0 : selectedItem.value)) viewport.value.scrollTop = viewport.value.scrollTop + selectedItem.value.offsetHeight;
        })
      }, {
        default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
        _: 3
      }, 512)) : createCommentVNode("v-if", true);
    };
  }
});
var SelectScrollDownButton_default = SelectScrollDownButton_vue_vue_type_script_setup_true_lang_default;
var SelectScrollUpButton_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
  __name: "SelectScrollUpButton",
  props: {
    asChild: {
      type: Boolean,
      required: false
    },
    as: {
      type: null,
      required: false
    }
  },
  setup(__props) {
    const contentContext = injectSelectContentContext();
    const alignedPositionContext = contentContext.position === "item-aligned" ? injectSelectItemAlignedPositionContext() : void 0;
    const { forwardRef, currentElement } = useForwardExpose();
    const canScrollUp = ref(false);
    watchEffect((cleanupFn) => {
      var _a, _b;
      if (((_a = contentContext.viewport) == null ? void 0 : _a.value) && ((_b = contentContext.isPositioned) == null ? void 0 : _b.value)) {
        let handleScroll = function() {
          canScrollUp.value = viewport.scrollTop > 0;
        };
        const viewport = contentContext.viewport.value;
        handleScroll();
        viewport.addEventListener("scroll", handleScroll);
        cleanupFn(() => viewport.removeEventListener("scroll", handleScroll));
      }
    });
    watch(currentElement, () => {
      if (currentElement.value) alignedPositionContext == null ? void 0 : alignedPositionContext.onScrollButtonChange(currentElement.value);
    });
    return (_ctx, _cache) => {
      return canScrollUp.value ? (openBlock(), createBlock(SelectScrollButtonImpl_default, {
        key: 0,
        ref: unref(forwardRef),
        onAutoScroll: _cache[0] || (_cache[0] = () => {
          const { viewport, selectedItem } = unref(contentContext);
          if ((viewport == null ? void 0 : viewport.value) && (selectedItem == null ? void 0 : selectedItem.value)) viewport.value.scrollTop = viewport.value.scrollTop - selectedItem.value.offsetHeight;
        })
      }, {
        default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
        _: 3
      }, 512)) : createCommentVNode("v-if", true);
    };
  }
});
var SelectScrollUpButton_default = SelectScrollUpButton_vue_vue_type_script_setup_true_lang_default;
var SelectTrigger_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
  __name: "SelectTrigger",
  props: {
    disabled: {
      type: Boolean,
      required: false
    },
    reference: {
      type: null,
      required: false
    },
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
    const rootContext = injectSelectRootContext();
    const { forwardRef, currentElement: triggerElement } = useForwardExpose();
    const isDisabled = computed(() => {
      var _a;
      return ((_a = rootContext.disabled) == null ? void 0 : _a.value) || props.disabled;
    });
    rootContext.contentId || (rootContext.contentId = useId(void 0, "reka-select-content"));
    onMounted(() => {
      rootContext.onTriggerChange(triggerElement.value);
    });
    const { getItems } = useCollection();
    const { search, handleTypeaheadSearch, resetTypeahead } = useTypeahead();
    function handleOpen() {
      if (!isDisabled.value) {
        rootContext.onOpenChange(true);
        resetTypeahead();
      }
    }
    function handlePointerOpen(event) {
      handleOpen();
      rootContext.triggerPointerDownPosRef.value = {
        x: Math.round(event.pageX),
        y: Math.round(event.pageY)
      };
    }
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(PopperAnchor_default), {
        "as-child": "",
        reference: _ctx.reference
      }, {
        default: withCtx(() => {
          var _a, _b, _c, _d;
          return [createVNode(unref(Primitive), {
            ref: unref(forwardRef),
            role: "combobox",
            type: _ctx.as === "button" ? "button" : void 0,
            "aria-controls": unref(rootContext).contentId,
            "aria-expanded": unref(rootContext).open.value || false,
            "aria-required": (_a = unref(rootContext).required) == null ? void 0 : _a.value,
            "aria-autocomplete": "none",
            disabled: isDisabled.value,
            dir: (_b = unref(rootContext)) == null ? void 0 : _b.dir.value,
            "data-state": ((_c = unref(rootContext)) == null ? void 0 : _c.open.value) ? "open" : "closed",
            "data-disabled": isDisabled.value ? "" : void 0,
            "data-placeholder": unref(shouldShowPlaceholder)((_d = unref(rootContext).modelValue) == null ? void 0 : _d.value) ? "" : void 0,
            "as-child": _ctx.asChild,
            as: _ctx.as,
            onClick: _cache[0] || (_cache[0] = (event) => {
              var _a2;
              (_a2 = event == null ? void 0 : event.currentTarget) == null ? void 0 : _a2.focus();
            }),
            onPointerdown: _cache[1] || (_cache[1] = (event) => {
              if (event.pointerType === "touch") return event.preventDefault();
              const target = event.target;
              if (target.hasPointerCapture(event.pointerId)) target.releasePointerCapture(event.pointerId);
              if (event.button === 0 && event.ctrlKey === false) {
                handlePointerOpen(event);
                event.preventDefault();
              }
            }),
            onPointerup: _cache[2] || (_cache[2] = withModifiers((event) => {
              if (event.pointerType === "touch") handlePointerOpen(event);
            }, ["prevent"])),
            onKeydown: _cache[3] || (_cache[3] = (event) => {
              const isTypingAhead = unref(search) !== "";
              const isModifierKey = event.ctrlKey || event.altKey || event.metaKey;
              if (!isModifierKey && event.key.length === 1) {
                if (isTypingAhead && event.key === " ") return;
              }
              unref(handleTypeaheadSearch)(event.key, unref(getItems)());
              if (unref(OPEN_KEYS).includes(event.key)) {
                handleOpen();
                event.preventDefault();
              }
            })
          }, {
            default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
            _: 3
          }, 8, [
            "type",
            "aria-controls",
            "aria-expanded",
            "aria-required",
            "disabled",
            "dir",
            "data-state",
            "data-disabled",
            "data-placeholder",
            "as-child",
            "as"
          ])];
        }),
        _: 3
      }, 8, ["reference"]);
    };
  }
});
var SelectTrigger_default = SelectTrigger_vue_vue_type_script_setup_true_lang_default;
var SelectValue_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
  __name: "SelectValue",
  props: {
    placeholder: {
      type: String,
      required: false,
      default: ""
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
    const { forwardRef, currentElement } = useForwardExpose();
    const rootContext = injectSelectRootContext();
    onMounted(() => {
      rootContext.valueElement = currentElement;
    });
    const selectedLabel = computed(() => {
      var _a;
      let list = [];
      const options = Array.from(rootContext.optionsSet.value);
      const getOption = (value) => options.find((option) => valueComparator(value, option.value, rootContext.by));
      if (Array.isArray(rootContext.modelValue.value)) list = rootContext.modelValue.value.map((value) => {
        var _a2;
        return ((_a2 = getOption(value)) == null ? void 0 : _a2.textContent) ?? "";
      });
      else list = [((_a = getOption(rootContext.modelValue.value)) == null ? void 0 : _a.textContent) ?? ""];
      return list.filter(Boolean);
    });
    const slotText = computed(() => {
      return selectedLabel.value.length ? selectedLabel.value.join(", ") : props.placeholder;
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(Primitive), {
        ref: unref(forwardRef),
        as: _ctx.as,
        "as-child": _ctx.asChild,
        style: { pointerEvents: "none" },
        "data-placeholder": selectedLabel.value.length ? void 0 : props.placeholder
      }, {
        default: withCtx(() => [renderSlot(_ctx.$slots, "default", {
          selectedLabel: selectedLabel.value,
          modelValue: unref(rootContext).modelValue.value
        }, () => [createTextVNode(toDisplayString(slotText.value), 1)])]),
        _: 3
      }, 8, [
        "as",
        "as-child",
        "data-placeholder"
      ]);
    };
  }
});
var SelectValue_default = SelectValue_vue_vue_type_script_setup_true_lang_default;
var SelectViewport_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
  __name: "SelectViewport",
  props: {
    nonce: {
      type: String,
      required: false
    },
    asChild: {
      type: Boolean,
      required: false
    },
    as: {
      type: null,
      required: false
    }
  },
  setup(__props) {
    const props = __props;
    const { nonce: propNonce } = toRefs(props);
    const nonce = useNonce(propNonce);
    const contentContext = injectSelectContentContext();
    const alignedPositionContext = contentContext.position === "item-aligned" ? injectSelectItemAlignedPositionContext() : void 0;
    const { forwardRef, currentElement } = useForwardExpose();
    onMounted(() => {
      contentContext == null ? void 0 : contentContext.onViewportChange(currentElement.value);
    });
    const prevScrollTopRef = ref(0);
    function handleScroll(event) {
      const viewport = event.currentTarget;
      const { shouldExpandOnScrollRef, contentWrapper } = alignedPositionContext ?? {};
      if ((shouldExpandOnScrollRef == null ? void 0 : shouldExpandOnScrollRef.value) && (contentWrapper == null ? void 0 : contentWrapper.value)) {
        const scrolledBy = Math.abs(prevScrollTopRef.value - viewport.scrollTop);
        if (scrolledBy > 0) {
          const availableHeight = window.innerHeight - CONTENT_MARGIN * 2;
          const cssMinHeight = Number.parseFloat(contentWrapper.value.style.minHeight);
          const cssHeight = Number.parseFloat(contentWrapper.value.style.height);
          const prevHeight = Math.max(cssMinHeight, cssHeight);
          if (prevHeight < availableHeight) {
            const nextHeight = prevHeight + scrolledBy;
            const clampedNextHeight = Math.min(availableHeight, nextHeight);
            const heightDiff = nextHeight - clampedNextHeight;
            contentWrapper.value.style.height = `${clampedNextHeight}px`;
            if (contentWrapper.value.style.bottom === "0px") {
              viewport.scrollTop = heightDiff > 0 ? heightDiff : 0;
              contentWrapper.value.style.justifyContent = "flex-end";
            }
          }
        }
      }
      prevScrollTopRef.value = viewport.scrollTop;
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(Fragment, null, [createVNode(unref(Primitive), mergeProps({
        ref: unref(forwardRef),
        "data-reka-select-viewport": "",
        role: "presentation"
      }, {
        ..._ctx.$attrs,
        ...props
      }, {
        style: {
          position: "relative",
          flex: 1,
          overflow: "hidden auto"
        },
        onScroll: handleScroll
      }), {
        default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
        _: 3
      }, 16), createVNode(unref(Primitive), {
        as: "style",
        nonce: unref(nonce)
      }, {
        default: withCtx(() => _cache[0] || (_cache[0] = [createTextVNode(" /* Hide scrollbars cross-browser and enable momentum scroll for touch devices */ [data-reka-select-viewport] { scrollbar-width:none; -ms-overflow-style: none; -webkit-overflow-scrolling: touch; } [data-reka-select-viewport]::-webkit-scrollbar { display: none; } ")])),
        _: 1,
        __: [0]
      }, 8, ["nonce"])], 64);
    };
  }
});
var SelectViewport_default = SelectViewport_vue_vue_type_script_setup_true_lang_default;
/**
 * @license lucide-vue-next v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const GripVertical = createLucideIcon("GripVerticalIcon", [
  ["circle", { cx: "9", cy: "12", r: "1", key: "1vctgf" }],
  ["circle", { cx: "9", cy: "5", r: "1", key: "hp0tcf" }],
  ["circle", { cx: "9", cy: "19", r: "1", key: "fkjjf6" }],
  ["circle", { cx: "15", cy: "12", r: "1", key: "1tmaij" }],
  ["circle", { cx: "15", cy: "5", r: "1", key: "19l28e" }],
  ["circle", { cx: "15", cy: "19", r: "1", key: "f4zoj3" }]
]);
/**
 * @license lucide-vue-next v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Shuffle = createLucideIcon("ShuffleIcon", [
  ["path", { d: "m18 14 4 4-4 4", key: "10pe0f" }],
  ["path", { d: "m18 2 4 4-4 4", key: "pucp1d" }],
  ["path", { d: "M2 18h1.973a4 4 0 0 0 3.3-1.7l5.454-8.6a4 4 0 0 1 3.3-1.7H22", key: "1ailkh" }],
  ["path", { d: "M2 6h1.972a4 4 0 0 1 3.6 2.2", key: "km57vx" }],
  ["path", { d: "M22 18h-6.041a4 4 0 0 1-3.3-1.8l-.359-.45", key: "os18l9" }]
]);
const _sfc_main$7 = /* @__PURE__ */ defineComponent({
  __name: "Select",
  props: {
    open: { type: Boolean },
    defaultOpen: { type: Boolean },
    defaultValue: {},
    modelValue: {},
    by: { type: [String, Function] },
    dir: {},
    multiple: { type: Boolean },
    autocomplete: {},
    disabled: { type: Boolean },
    name: {},
    required: { type: Boolean }
  },
  emits: ["update:modelValue", "update:open"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const forwarded = useForwardPropsEmits(props, emits);
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(SelectRoot_default), mergeProps({ "data-slot": "select" }, unref(forwarded)), {
        default: withCtx((slotProps) => [
          renderSlot(_ctx.$slots, "default", normalizeProps(guardReactiveProps(slotProps)))
        ]),
        _: 3
      }, 16);
    };
  }
});
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  ...{
    inheritAttrs: false
  },
  __name: "SelectContent",
  props: {
    forceMount: { type: Boolean },
    position: { default: "popper" },
    bodyLock: { type: Boolean },
    side: {},
    sideOffset: {},
    sideFlip: { type: Boolean },
    align: {},
    alignOffset: {},
    alignFlip: { type: Boolean },
    avoidCollisions: { type: Boolean },
    collisionBoundary: {},
    collisionPadding: {},
    arrowPadding: {},
    hideShiftedArrow: { type: Boolean },
    sticky: {},
    hideWhenDetached: { type: Boolean },
    positionStrategy: {},
    updatePositionStrategy: {},
    disableUpdateOnLayoutShift: { type: Boolean },
    prioritizePosition: { type: Boolean },
    reference: {},
    asChild: { type: Boolean },
    as: {},
    disableOutsidePointerEvents: { type: Boolean },
    class: { type: [Boolean, null, String, Object, Array] }
  },
  emits: ["closeAutoFocus", "escapeKeyDown", "pointerDownOutside"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const delegatedProps = reactiveOmit(props, "class");
    const forwarded = useForwardPropsEmits(delegatedProps, emits);
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(SelectPortal_default), null, {
        default: withCtx(() => [
          createVNode(unref(SelectContent_default), mergeProps({ "data-slot": "select-content" }, { ..._ctx.$attrs, ...unref(forwarded) }, {
            class: unref(cn)(
              "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 relative z-50 max-h-(--reka-select-content-available-height) min-w-[8rem] overflow-x-hidden overflow-y-auto rounded-md border shadow-md",
              __props.position === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
              props.class
            )
          }), {
            default: withCtx(() => [
              createVNode(unref(_sfc_main$3)),
              createVNode(unref(SelectViewport_default), {
                class: normalizeClass(unref(cn)("p-1", __props.position === "popper" && "h-[var(--reka-select-trigger-height)] w-full min-w-[var(--reka-select-trigger-width)] scroll-my-1"))
              }, {
                default: withCtx(() => [
                  renderSlot(_ctx.$slots, "default")
                ]),
                _: 3
              }, 8, ["class"]),
              createVNode(unref(_sfc_main$4))
            ]),
            _: 3
          }, 16, ["class"])
        ]),
        _: 3
      });
    };
  }
});
const _hoisted_1$1 = { class: "absolute right-2 flex size-3.5 items-center justify-center" };
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "SelectItem",
  props: {
    value: {},
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(__props) {
    const props = __props;
    const delegatedProps = reactiveOmit(props, "class");
    const forwardedProps = useForwardProps(delegatedProps);
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(SelectItem_default), mergeProps({ "data-slot": "select-item" }, unref(forwardedProps), {
        class: unref(cn)(
          "focus:bg-accent focus:text-accent-foreground [&_svg:not([class*='text-'])]:text-muted-foreground relative flex w-full cursor-default items-center gap-2 rounded-sm py-1.5 pr-8 pl-2 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 *:[span]:last:flex *:[span]:last:items-center *:[span]:last:gap-2",
          props.class
        )
      }), {
        default: withCtx(() => [
          createBaseVNode("span", _hoisted_1$1, [
            createVNode(unref(SelectItemIndicator_default), null, {
              default: withCtx(() => [
                renderSlot(_ctx.$slots, "indicator-icon", {}, () => [
                  createVNode(unref(Check), { class: "size-4" })
                ])
              ]),
              _: 3
            })
          ]),
          createVNode(unref(SelectItemText_default), null, {
            default: withCtx(() => [
              renderSlot(_ctx.$slots, "default")
            ]),
            _: 3
          })
        ]),
        _: 3
      }, 16, ["class"]);
    };
  }
});
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "SelectScrollDownButton",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(__props) {
    const props = __props;
    const delegatedProps = reactiveOmit(props, "class");
    const forwardedProps = useForwardProps(delegatedProps);
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(SelectScrollDownButton_default), mergeProps({ "data-slot": "select-scroll-down-button" }, unref(forwardedProps), {
        class: unref(cn)("flex cursor-default items-center justify-center py-1", props.class)
      }), {
        default: withCtx(() => [
          renderSlot(_ctx.$slots, "default", {}, () => [
            createVNode(unref(ChevronDown), { class: "size-4" })
          ])
        ]),
        _: 3
      }, 16, ["class"]);
    };
  }
});
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "SelectScrollUpButton",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(__props) {
    const props = __props;
    const delegatedProps = reactiveOmit(props, "class");
    const forwardedProps = useForwardProps(delegatedProps);
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(SelectScrollUpButton_default), mergeProps({ "data-slot": "select-scroll-up-button" }, unref(forwardedProps), {
        class: unref(cn)("flex cursor-default items-center justify-center py-1", props.class)
      }), {
        default: withCtx(() => [
          renderSlot(_ctx.$slots, "default", {}, () => [
            createVNode(unref(ChevronUp), { class: "size-4" })
          ])
        ]),
        _: 3
      }, 16, ["class"]);
    };
  }
});
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "SelectTrigger",
  props: {
    disabled: { type: Boolean },
    reference: {},
    asChild: { type: Boolean },
    as: {},
    class: { type: [Boolean, null, String, Object, Array] },
    size: { default: "default" }
  },
  setup(__props) {
    const props = __props;
    const delegatedProps = reactiveOmit(props, "class", "size");
    const forwardedProps = useForwardProps(delegatedProps);
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(SelectTrigger_default), mergeProps({
        "data-slot": "select-trigger",
        "data-size": __props.size
      }, unref(forwardedProps), {
        class: unref(cn)(
          "border-input data-[placeholder]:text-muted-foreground [&_svg:not([class*='text-'])]:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 dark:hover:bg-input/50 flex w-fit items-center justify-between gap-2 rounded-md border bg-transparent px-3 py-2 text-sm whitespace-nowrap shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 data-[size=default]:h-9 data-[size=sm]:h-8 *:data-[slot=select-value]:line-clamp-1 *:data-[slot=select-value]:flex *:data-[slot=select-value]:items-center *:data-[slot=select-value]:gap-2 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
          props.class
        )
      }), {
        default: withCtx(() => [
          renderSlot(_ctx.$slots, "default"),
          createVNode(unref(SelectIcon_default), { "as-child": "" }, {
            default: withCtx(() => [
              createVNode(unref(ChevronDown), { class: "size-4 opacity-50" })
            ]),
            _: 1
          })
        ]),
        _: 3
      }, 16, ["data-size", "class"]);
    };
  }
});
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "SelectValue",
  props: {
    placeholder: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(SelectValue_default), mergeProps({ "data-slot": "select-value" }, props), {
        default: withCtx(() => [
          renderSlot(_ctx.$slots, "default")
        ]),
        _: 3
      }, 16);
    };
  }
});
const _hoisted_1 = { class: "flex flex-col gap-6" };
const _hoisted_2 = { class: "flex items-center" };
const _hoisted_3 = ["disabled", "onClick"];
const _hoisted_4 = { key: 1 };
const _hoisted_5 = { class: "text-center" };
const _hoisted_6 = { class: "grid gap-2" };
const _hoisted_7 = { class: "grid gap-2" };
const _hoisted_8 = { class: "grid gap-5 md:grid-cols-2" };
const _hoisted_9 = { class: "grid gap-2" };
const _hoisted_10 = {
  key: 0,
  class: "grid gap-2"
};
const _hoisted_11 = { class: "flex items-center gap-2" };
const _hoisted_12 = { class: "flex h-10 flex-1 items-center justify-center rounded-md border bg-muted font-mono text-lg font-semibold tracking-widest" };
const _hoisted_13 = {
  key: 1,
  class: "grid gap-2"
};
const _hoisted_14 = { class: "grid gap-2" };
const _hoisted_15 = { class: "flex flex-wrap items-center gap-2" };
const _hoisted_16 = { class: "grid gap-2" };
const _hoisted_17 = { class: "flex items-center justify-between gap-2" };
const _hoisted_18 = {
  key: 0,
  class: "flex items-center gap-2"
};
const _hoisted_19 = { class: "text-xs text-muted-foreground" };
const _hoisted_20 = { class: "grid gap-2" };
const _hoisted_21 = { class: "flex items-center justify-between gap-2" };
const _hoisted_22 = { class: "flex items-center gap-2" };
const _hoisted_23 = { class: "grid gap-2" };
const _hoisted_24 = { class: "flex items-center justify-between gap-2" };
const _hoisted_25 = { class: "flex items-center gap-2" };
const _hoisted_26 = { class: "grid gap-3" };
const _hoisted_27 = { class: "flex items-center justify-between gap-2" };
const _hoisted_28 = { class: "flex items-center gap-2" };
const _hoisted_29 = {
  key: 0,
  class: "ml-6 grid gap-4 rounded-lg border bg-muted/30 p-4"
};
const _hoisted_30 = { class: "grid gap-2" };
const _hoisted_31 = { class: "flex gap-2" };
const _hoisted_32 = { class: "text-xs text-muted-foreground" };
const _hoisted_33 = {
  key: 0,
  class: "grid gap-2"
};
const _hoisted_34 = { class: "flex items-center gap-2" };
const _hoisted_35 = { class: "flex items-center justify-between" };
const _hoisted_36 = { class: "mb-3 flex items-center justify-between gap-3" };
const _hoisted_37 = { class: "flex items-center gap-2 text-sm font-medium text-muted-foreground" };
const _hoisted_38 = { class: "grid gap-4" };
const _hoisted_39 = { class: "grid gap-2" };
const _hoisted_40 = ["id", "onUpdate:modelValue"];
const _hoisted_41 = { class: "grid gap-4 md:grid-cols-[1fr_120px]" };
const _hoisted_42 = { class: "grid gap-2" };
const _hoisted_43 = { class: "grid gap-2" };
const _hoisted_44 = {
  key: 0,
  class: "grid gap-2"
};
const _hoisted_45 = { class: "grid gap-2" };
const _hoisted_46 = ["aria-label", "onClick"];
const _hoisted_47 = {
  key: 1,
  class: "text-xs font-semibold"
};
const _hoisted_48 = {
  key: 1,
  class: "grid gap-2"
};
const _hoisted_49 = { class: "flex items-center justify-between gap-2" };
const _hoisted_50 = { class: "text-xs text-muted-foreground" };
const _hoisted_51 = { class: "grid gap-2" };
const _hoisted_52 = { class: "grid gap-2" };
const _hoisted_53 = { class: "flex items-center justify-between" };
const _hoisted_54 = { class: "grid gap-4 md:grid-cols-2" };
const _hoisted_55 = { class: "space-y-1" };
const _hoisted_56 = { class: "font-semibold" };
const _hoisted_57 = { class: "space-y-1" };
const _hoisted_58 = {
  key: 0,
  class: "space-y-1 md:col-span-2"
};
const _hoisted_59 = { class: "text-sm text-muted-foreground" };
const _hoisted_60 = { class: "flex flex-wrap gap-2" };
const _hoisted_61 = { class: "grid grid-cols-2 gap-3 md:grid-cols-4" };
const _hoisted_62 = { class: "rounded-lg border bg-muted/30 p-3 text-center" };
const _hoisted_63 = { class: "text-2xl font-bold" };
const _hoisted_64 = { class: "rounded-lg border bg-muted/30 p-3 text-center" };
const _hoisted_65 = { class: "text-2xl font-bold" };
const _hoisted_66 = { class: "rounded-lg border bg-muted/30 p-3 text-center" };
const _hoisted_67 = { class: "text-2xl font-bold" };
const _hoisted_68 = { class: "rounded-lg border bg-muted/30 p-3 text-center" };
const _hoisted_69 = { class: "text-2xl font-bold" };
const _hoisted_70 = {
  key: 0,
  class: "rounded-lg border border-amber-200 bg-amber-50 p-4 dark:border-amber-800 dark:bg-amber-900/20"
};
const _hoisted_71 = { class: "flex items-start gap-3" };
const _hoisted_72 = { class: "space-y-1" };
const _hoisted_73 = { class: "list-inside list-disc space-y-0.5 text-sm text-amber-700 dark:text-amber-400" };
const _hoisted_74 = { key: 0 };
const _hoisted_75 = { key: 1 };
const _hoisted_76 = {
  key: 1,
  class: "rounded-lg border border-emerald-200 bg-emerald-50 p-4 dark:border-emerald-800 dark:bg-emerald-900/20"
};
const _hoisted_77 = { class: "flex items-center gap-3" };
const _hoisted_78 = { class: "text-sm font-medium text-emerald-800 dark:text-emerald-300" };
const _hoisted_79 = { class: "flex items-center justify-between" };
const DEFAULT_QUESTION_COUNT = 5;
const TOTAL_STEPS = 3;
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Builder",
  props: {
    quiz: {},
    submitUrl: {},
    submitMethod: {},
    submitLabel: {},
    regenerateUrl: {}
  },
  setup(__props) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l;
    const props = __props;
    const emptyMultiChoice = () => [
      { choice_text: "", is_correct: false },
      { choice_text: "", is_correct: false },
      { choice_text: "", is_correct: false },
      { choice_text: "", is_correct: false }
    ];
    const trueFalseChoices = () => [
      { choice_text: "True", is_correct: false },
      { choice_text: "False", is_correct: false }
    ];
    const newQuestion = () => ({
      question_text: "",
      type: "multiple_choice",
      points: 1,
      explanation: "",
      correct_answer: [],
      case_sensitive: false,
      choices: emptyMultiChoice()
    });
    const initialQuestions = (((_a = props.quiz) == null ? void 0 : _a.questions) ?? []).map(
      (q) => ({
        id: q.id,
        question_text: q.question_text,
        type: q.type,
        points: q.points,
        explanation: q.explanation ?? "",
        correct_answer: q.correct_answer ?? [],
        case_sensitive: q.case_sensitive ?? false,
        choices: (q.choices ?? []).map((c) => ({
          id: c.id,
          choice_text: c.choice_text,
          is_correct: c.is_correct
        }))
      })
    );
    const form = useForm({
      title: ((_b = props.quiz) == null ? void 0 : _b.title) ?? "",
      description: ((_c = props.quiz) == null ? void 0 : _c.description) ?? "",
      status: ((_d = props.quiz) == null ? void 0 : _d.status) ?? "active",
      quiz_code: ((_e = props.quiz) == null ? void 0 : _e.quiz_code) ?? "",
      max_attempts: ((_f = props.quiz) == null ? void 0 : _f.max_attempts) ?? null,
      question_count: ((_g = props.quiz) == null ? void 0 : _g.question_count) ?? DEFAULT_QUESTION_COUNT,
      shuffle_questions: ((_h = props.quiz) == null ? void 0 : _h.shuffle_questions) ?? false,
      shuffle_choices: ((_i = props.quiz) == null ? void 0 : _i.shuffle_choices) ?? false,
      tab_monitoring_enabled: ((_j = props.quiz) == null ? void 0 : _j.tab_monitoring_enabled) ?? false,
      tab_violation_action: ((_k = props.quiz) == null ? void 0 : _k.tab_violation_action) ?? "warn",
      tab_violation_limit: ((_l = props.quiz) == null ? void 0 : _l.tab_violation_limit) ?? 3,
      questions: initialQuestions.length > 0 ? initialQuestions : Array.from(
        { length: DEFAULT_QUESTION_COUNT },
        () => newQuestion()
      )
    });
    const toast = useToast();
    const currentStep = ref(1);
    const highestStep = ref(props.quiz ? TOTAL_STEPS : 1);
    const steps = [
      { number: 1, label: "Setup", description: "Basic quiz info" },
      { number: 2, label: "Questions", description: "Build questions" },
      { number: 3, label: "Review", description: "Check & submit" }
    ];
    const saveDialogOpen = ref(false);
    const removeQuestionDialog = ref({
      open: false,
      index: null
    });
    const regenerateDialogOpen = ref(false);
    const step1Valid = computed(() => form.title.trim().length > 0);
    watch(
      () => {
        var _a2;
        return (_a2 = props.quiz) == null ? void 0 : _a2.quiz_code;
      },
      (newCode) => {
        if (newCode) {
          form.quiz_code = newCode;
        }
      }
    );
    const totalPoints = computed(
      () => form.questions.reduce((sum, q) => sum + (Number(q.points) || 0), 0)
    );
    const hasCorrectAnswers = computed(
      () => form.questions.every((q) => {
        if (q.type === "short_answer") {
          return q.correct_answer.some((a) => a.trim().length > 0);
        }
        return q.choices.some((c) => c.is_correct);
      })
    );
    const questionsFilledIn = computed(
      () => form.questions.filter((q) => q.question_text.trim() !== "").length
    );
    const toggleCorrect = (question, choiceIndex) => {
      if (question.type === "true_false") {
        const alreadyCorrect = question.choices[choiceIndex].is_correct;
        question.choices.forEach((c) => {
          c.is_correct = false;
        });
        question.choices[choiceIndex].is_correct = !alreadyCorrect;
        return;
      }
      const willBeCorrect = !question.choices[choiceIndex].is_correct;
      if (willBeCorrect) {
        const correctCount = question.choices.filter(
          (c) => c.is_correct
        ).length;
        if (correctCount >= question.choices.length - 1) return;
      }
      question.choices[choiceIndex].is_correct = willBeCorrect;
    };
    const addQuestion = () => {
      form.questions.push(newQuestion());
    };
    const removeQuestion = (index2) => {
      removeQuestionDialog.value = { open: true, index: index2 };
    };
    const confirmRemoveQuestion = () => {
      const index2 = removeQuestionDialog.value.index;
      if (index2 === null) return;
      form.questions.splice(index2, 1);
      if (form.questions.length === 0) {
        form.questions.push(newQuestion());
      }
      removeQuestionDialog.value = { open: false, index: null };
    };
    const handleTypeChange = (question, value) => {
      question.type = value;
      if (question.type === "true_false") {
        question.choices = trueFalseChoices();
        question.correct_answer = [];
      } else if (question.type === "multiple_choice") {
        question.choices = emptyMultiChoice();
        question.correct_answer = [];
      } else {
        question.choices = [];
        if (question.correct_answer.length === 0) {
          question.correct_answer = [""];
        }
      }
    };
    const addChoice = (question) => {
      question.choices.push({ choice_text: "", is_correct: false });
    };
    const removeChoice = (question, index2) => {
      question.choices.splice(index2, 1);
    };
    const addAcceptedAnswer = (question) => {
      question.correct_answer.push("");
    };
    const removeAcceptedAnswer = (question, index2) => {
      question.correct_answer.splice(index2, 1);
      if (question.correct_answer.length === 0) {
        question.correct_answer.push("");
      }
    };
    const handleQuestionCountChange = (newCount) => {
      const count = Math.max(1, Math.min(60, Number(newCount) || 1));
      const currentCount = form.questions.length;
      if (count > currentCount) {
        for (let i = 0; i < count - currentCount; i++) {
          form.questions.push(newQuestion());
        }
      } else if (count < currentCount) {
        form.questions.splice(count, currentCount - count);
      }
      form.question_count = count;
    };
    const nextStep = () => {
      if (currentStep.value < TOTAL_STEPS) {
        currentStep.value++;
        if (currentStep.value > highestStep.value) {
          highestStep.value = currentStep.value;
        }
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    };
    const prevStep = () => {
      if (currentStep.value > 1) {
        currentStep.value--;
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    };
    const goToStep = (step) => {
      if (step > highestStep.value) return;
      currentStep.value = step;
      window.scrollTo({ top: 0, behavior: "smooth" });
    };
    const requestSave = () => {
      saveDialogOpen.value = true;
    };
    const submit = () => {
      const method = props.submitMethod;
      const url = props.submitUrl;
      form.transform((data) => {
        var _a2;
        return {
          ...data,
          quiz_code: ((_a2 = data.quiz_code) == null ? void 0 : _a2.trim()) ? data.quiz_code.trim() : void 0,
          max_attempts: data.max_attempts ?? null,
          question_count: data.question_count ?? null,
          questions: data.questions.filter((q) => q.question_text.trim() !== "").map((q) => ({
            id: q.id,
            question_text: q.question_text,
            type: q.type,
            points: q.points,
            explanation: q.explanation || null,
            correct_answer: q.type === "short_answer" ? q.correct_answer.map((v) => v.trim()).filter((v) => v.length > 0) : void 0,
            case_sensitive: q.type === "short_answer" ? q.case_sensitive : void 0,
            choices: q.type === "short_answer" ? [] : q.choices.filter((c) => c.choice_text.trim() !== "").map((c) => ({
              choice_text: c.choice_text,
              is_correct: c.is_correct
            }))
          }))
        };
      });
      saveDialogOpen.value = false;
      const options = {
        preserveScroll: true,
        onSuccess: () => {
          toast.success(
            props.submitLabel === "Create quiz" ? "Quiz created!" : "Changes saved."
          );
        },
        onError: (errors) => {
          toast.error("Please fix the errors and try again.");
          const hasStep1Errors = Object.keys(errors).some(
            (k) => [
              "title",
              "description",
              "status",
              "max_attempts",
              "question_count",
              "shuffle_questions",
              "shuffle_choices",
              "tab_monitoring_enabled",
              "tab_violation_action",
              "tab_violation_limit"
            ].includes(k)
          );
          if (hasStep1Errors) {
            currentStep.value = 1;
          } else if (Object.keys(errors).some((k) => k.startsWith("questions."))) {
            currentStep.value = 2;
          }
        }
      };
      if (method === "put") {
        form.put(url, options);
      } else {
        form.post(url, options);
      }
    };
    const questionError = (index2, field) => {
      const key = `questions.${index2}.${field}`;
      return form.errors[key];
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createBaseVNode("div", _hoisted_2, [
          (openBlock(), createElementBlock(Fragment, null, renderList(steps, (step, i) => {
            return openBlock(), createElementBlock(Fragment, {
              key: step.number
            }, [
              createBaseVNode("button", {
                type: "button",
                class: normalizeClass([
                  "group flex flex-1 flex-col items-center gap-1.5 rounded-lg px-2 py-3 transition-colors",
                  step.number <= highestStep.value ? "cursor-pointer hover:bg-muted/50" : "opacity-40"
                ]),
                disabled: step.number > highestStep.value,
                onClick: ($event) => goToStep(step.number)
              }, [
                createBaseVNode("div", {
                  class: normalizeClass(["flex size-9 items-center justify-center rounded-full border-2 text-sm font-bold transition-all", {
                    "border-primary bg-primary text-primary-foreground shadow-md": currentStep.value === step.number,
                    "border-primary/50 bg-primary/10 text-primary": currentStep.value > step.number && step.number <= highestStep.value,
                    "border-muted-foreground/25 bg-muted/30 text-muted-foreground": currentStep.value < step.number
                  }])
                }, [
                  currentStep.value > step.number ? (openBlock(), createBlock(unref(CircleCheck), {
                    key: 0,
                    class: "size-4"
                  })) : (openBlock(), createElementBlock("span", _hoisted_4, toDisplayString(step.number), 1))
                ], 2),
                createBaseVNode("div", _hoisted_5, [
                  createBaseVNode("p", {
                    class: normalizeClass([
                      "text-xs font-semibold",
                      currentStep.value === step.number ? "text-foreground" : "text-muted-foreground"
                    ])
                  }, toDisplayString(step.label), 3)
                ])
              ], 10, _hoisted_3),
              i < steps.length - 1 ? (openBlock(), createElementBlock("div", {
                key: 0,
                class: normalizeClass(["h-0.5 w-8 flex-none transition-colors md:flex-1", highestStep.value > i + 1 ? "bg-primary/40" : "bg-border"])
              }, null, 2)) : createCommentVNode("", true)
            ], 64);
          }), 64))
        ]),
        currentStep.value === 1 ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
          createVNode(unref(_sfc_main$8), null, {
            default: withCtx(() => [
              createVNode(unref(_sfc_main$9), null, {
                default: withCtx(() => [
                  createVNode(unref(_sfc_main$a), null, {
                    default: withCtx(() => [..._cache[19] || (_cache[19] = [
                      createTextVNode("Quiz details", -1)
                    ])]),
                    _: 1
                  }),
                  createVNode(unref(_sfc_main$b), null, {
                    default: withCtx(() => [..._cache[20] || (_cache[20] = [
                      createTextVNode("Give your quiz a clear title so learners know what they're taking.", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(unref(_sfc_main$c), { class: "grid gap-5" }, {
                default: withCtx(() => [
                  createBaseVNode("div", _hoisted_6, [
                    createVNode(unref(_sfc_main$d), { for: "title" }, {
                      default: withCtx(() => [..._cache[21] || (_cache[21] = [
                        createTextVNode(" Title ", -1),
                        createBaseVNode("span", { class: "text-destructive" }, "*", -1)
                      ])]),
                      _: 1
                    }),
                    createVNode(unref(_sfc_main$e), {
                      id: "title",
                      modelValue: unref(form).title,
                      "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => unref(form).title = $event),
                      placeholder: "e.g. Introduction to Photosynthesis"
                    }, null, 8, ["modelValue"]),
                    createVNode(_sfc_main$f, {
                      message: unref(form).errors.title
                    }, null, 8, ["message"])
                  ]),
                  createBaseVNode("div", _hoisted_7, [
                    createVNode(unref(_sfc_main$d), { for: "description" }, {
                      default: withCtx(() => [..._cache[22] || (_cache[22] = [
                        createTextVNode("Description", -1)
                      ])]),
                      _: 1
                    }),
                    withDirectives(createBaseVNode("textarea", {
                      id: "description",
                      "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => unref(form).description = $event),
                      rows: "3",
                      class: "min-h-20 w-full rounded-md border border-input bg-background px-3 py-2 text-sm shadow-xs outline-none placeholder:text-muted-foreground focus-visible:ring-[3px] focus-visible:ring-ring/50",
                      placeholder: "Optional description shown to learners before they start."
                    }, null, 512), [
                      [vModelText, unref(form).description]
                    ]),
                    createVNode(_sfc_main$f, {
                      message: unref(form).errors.description
                    }, null, 8, ["message"])
                  ]),
                  createBaseVNode("div", _hoisted_8, [
                    createBaseVNode("div", _hoisted_9, [
                      createVNode(unref(_sfc_main$d), null, {
                        default: withCtx(() => [..._cache[23] || (_cache[23] = [
                          createTextVNode("Status", -1)
                        ])]),
                        _: 1
                      }),
                      createVNode(unref(_sfc_main$7), {
                        modelValue: unref(form).status,
                        "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => unref(form).status = $event)
                      }, {
                        default: withCtx(() => [
                          createVNode(unref(_sfc_main$2), null, {
                            default: withCtx(() => [
                              createVNode(unref(_sfc_main$1), { placeholder: "Select status" })
                            ]),
                            _: 1
                          }),
                          createVNode(unref(_sfc_main$6), null, {
                            default: withCtx(() => [
                              createVNode(unref(_sfc_main$5), { value: "active" }, {
                                default: withCtx(() => [..._cache[24] || (_cache[24] = [
                                  createTextVNode("Active (joinable by code)", -1)
                                ])]),
                                _: 1
                              }),
                              createVNode(unref(_sfc_main$5), { value: "inactive" }, {
                                default: withCtx(() => [..._cache[25] || (_cache[25] = [
                                  createTextVNode("Inactive (draft)", -1)
                                ])]),
                                _: 1
                              })
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }, 8, ["modelValue"]),
                      _cache[26] || (_cache[26] = createBaseVNode("p", { class: "text-xs text-muted-foreground" }, " Only active quizzes can be joined using the share code. ", -1)),
                      createVNode(_sfc_main$f, {
                        message: unref(form).errors.status
                      }, null, 8, ["message"])
                    ]),
                    props.quiz ? (openBlock(), createElementBlock("div", _hoisted_10, [
                      createVNode(unref(_sfc_main$d), null, {
                        default: withCtx(() => [..._cache[27] || (_cache[27] = [
                          createTextVNode("Share code", -1)
                        ])]),
                        _: 1
                      }),
                      createBaseVNode("div", _hoisted_11, [
                        createBaseVNode("div", _hoisted_12, toDisplayString(unref(form).quiz_code || props.quiz.quiz_code), 1),
                        props.regenerateUrl ? (openBlock(), createBlock(unref(_sfc_main$g), {
                          key: 0,
                          type: "button",
                          variant: "outline",
                          onClick: _cache[3] || (_cache[3] = ($event) => regenerateDialogOpen.value = true)
                        }, {
                          default: withCtx(() => [..._cache[28] || (_cache[28] = [
                            createTextVNode(" Regenerate ", -1)
                          ])]),
                          _: 1
                        })) : createCommentVNode("", true)
                      ]),
                      _cache[29] || (_cache[29] = createBaseVNode("p", { class: "text-xs text-muted-foreground" }, " Share this code so others can join. Regenerating breaks existing links. ", -1))
                    ])) : (openBlock(), createElementBlock("div", _hoisted_13, [
                      createVNode(unref(_sfc_main$d), null, {
                        default: withCtx(() => [..._cache[30] || (_cache[30] = [
                          createTextVNode("Share code", -1)
                        ])]),
                        _: 1
                      }),
                      _cache[31] || (_cache[31] = createBaseVNode("div", { class: "flex h-10 items-center rounded-md border border-dashed bg-muted/30 px-3 text-sm text-muted-foreground" }, " Auto-generated on save (e.g. 482913) ", -1))
                    ]))
                  ]),
                  createBaseVNode("div", _hoisted_14, [
                    createVNode(unref(_sfc_main$d), null, {
                      default: withCtx(() => [..._cache[32] || (_cache[32] = [
                        createTextVNode("Number of questions", -1)
                      ])]),
                      _: 1
                    }),
                    createBaseVNode("div", _hoisted_15, [
                      createVNode(unref(_sfc_main$7), {
                        "model-value": [
                          5,
                          10,
                          15,
                          20,
                          25,
                          30,
                          40,
                          50,
                          60
                        ].includes(unref(form).question_count ?? 0) ? String(unref(form).question_count) : "",
                        "onUpdate:modelValue": _cache[4] || (_cache[4] = (v) => handleQuestionCountChange(Number(v)))
                      }, {
                        default: withCtx(() => [
                          createVNode(unref(_sfc_main$2), { class: "w-36" }, {
                            default: withCtx(() => [
                              createVNode(unref(_sfc_main$1), { placeholder: "Quick pick…" })
                            ]),
                            _: 1
                          }),
                          createVNode(unref(_sfc_main$6), null, {
                            default: withCtx(() => [
                              createVNode(unref(_sfc_main$5), { value: "5" }, {
                                default: withCtx(() => [..._cache[33] || (_cache[33] = [
                                  createTextVNode("5 questions", -1)
                                ])]),
                                _: 1
                              }),
                              createVNode(unref(_sfc_main$5), { value: "10" }, {
                                default: withCtx(() => [..._cache[34] || (_cache[34] = [
                                  createTextVNode("10 questions", -1)
                                ])]),
                                _: 1
                              }),
                              createVNode(unref(_sfc_main$5), { value: "15" }, {
                                default: withCtx(() => [..._cache[35] || (_cache[35] = [
                                  createTextVNode("15 questions", -1)
                                ])]),
                                _: 1
                              }),
                              createVNode(unref(_sfc_main$5), { value: "20" }, {
                                default: withCtx(() => [..._cache[36] || (_cache[36] = [
                                  createTextVNode("20 questions", -1)
                                ])]),
                                _: 1
                              }),
                              createVNode(unref(_sfc_main$5), { value: "25" }, {
                                default: withCtx(() => [..._cache[37] || (_cache[37] = [
                                  createTextVNode("25 questions", -1)
                                ])]),
                                _: 1
                              }),
                              createVNode(unref(_sfc_main$5), { value: "30" }, {
                                default: withCtx(() => [..._cache[38] || (_cache[38] = [
                                  createTextVNode("30 questions", -1)
                                ])]),
                                _: 1
                              }),
                              createVNode(unref(_sfc_main$5), { value: "40" }, {
                                default: withCtx(() => [..._cache[39] || (_cache[39] = [
                                  createTextVNode("40 questions", -1)
                                ])]),
                                _: 1
                              }),
                              createVNode(unref(_sfc_main$5), { value: "50" }, {
                                default: withCtx(() => [..._cache[40] || (_cache[40] = [
                                  createTextVNode("50 questions", -1)
                                ])]),
                                _: 1
                              }),
                              createVNode(unref(_sfc_main$5), { value: "60" }, {
                                default: withCtx(() => [..._cache[41] || (_cache[41] = [
                                  createTextVNode("60 questions", -1)
                                ])]),
                                _: 1
                              })
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }, 8, ["model-value"]),
                      _cache[42] || (_cache[42] = createBaseVNode("span", { class: "text-xs text-muted-foreground" }, "or type", -1)),
                      createVNode(unref(_sfc_main$e), {
                        modelValue: unref(form).question_count,
                        "onUpdate:modelValue": [
                          _cache[5] || (_cache[5] = ($event) => unref(form).question_count = $event),
                          _cache[6] || (_cache[6] = (v) => handleQuestionCountChange(Number(v)))
                        ],
                        modelModifiers: { number: true },
                        type: "number",
                        min: "1",
                        max: "60",
                        class: "w-20"
                      }, null, 8, ["modelValue"]),
                      _cache[43] || (_cache[43] = createBaseVNode("span", { class: "text-xs text-muted-foreground" }, "max 60", -1))
                    ]),
                    _cache[44] || (_cache[44] = createBaseVNode("p", { class: "text-xs text-muted-foreground" }, " Empty slots are placeholders you can fill on the next step. ", -1)),
                    createVNode(_sfc_main$f, {
                      message: unref(form).errors.question_count
                    }, null, 8, ["message"])
                  ]),
                  createBaseVNode("div", _hoisted_16, [
                    createBaseVNode("div", _hoisted_17, [
                      createVNode(unref(_sfc_main$d), null, {
                        default: withCtx(() => [..._cache[45] || (_cache[45] = [
                          createTextVNode("Attempt limit", -1)
                        ])]),
                        _: 1
                      }),
                      createVNode(unref(_sfc_main$g), {
                        type: "button",
                        variant: unref(form).max_attempts !== null ? "default" : "outline",
                        size: "sm",
                        class: "h-7 gap-1.5 text-xs",
                        onClick: _cache[7] || (_cache[7] = ($event) => unref(form).max_attempts = unref(form).max_attempts !== null ? null : 3)
                      }, {
                        default: withCtx(() => [
                          createBaseVNode("span", {
                            class: normalizeClass([
                              "size-1.5 rounded-full",
                              unref(form).max_attempts !== null ? "bg-primary-foreground" : "bg-muted-foreground/50"
                            ])
                          }, null, 2),
                          createTextVNode(" " + toDisplayString(unref(form).max_attempts !== null ? "Limited" : "Unlimited"), 1)
                        ]),
                        _: 1
                      }, 8, ["variant"])
                    ]),
                    unref(form).max_attempts !== null ? (openBlock(), createElementBlock("div", _hoisted_18, [
                      createVNode(unref(_sfc_main$e), {
                        modelValue: unref(form).max_attempts,
                        "onUpdate:modelValue": _cache[8] || (_cache[8] = ($event) => unref(form).max_attempts = $event),
                        modelModifiers: { number: true },
                        type: "number",
                        min: "1",
                        max: "100",
                        class: "w-24"
                      }, null, 8, ["modelValue"]),
                      _cache[46] || (_cache[46] = createBaseVNode("span", { class: "text-sm text-muted-foreground" }, "attempts per user", -1))
                    ])) : createCommentVNode("", true),
                    createBaseVNode("p", _hoisted_19, toDisplayString(unref(form).max_attempts !== null ? `Users can take this quiz up to ${unref(form).max_attempts} time${unref(form).max_attempts === 1 ? "" : "s"}.` : "Users can take this quiz unlimited times."), 1),
                    createVNode(_sfc_main$f, {
                      message: unref(form).errors.max_attempts
                    }, null, 8, ["message"])
                  ])
                ]),
                _: 1
              })
            ]),
            _: 1
          }),
          createVNode(unref(_sfc_main$8), null, {
            default: withCtx(() => [
              createVNode(unref(_sfc_main$9), null, {
                default: withCtx(() => [
                  createVNode(unref(_sfc_main$a), null, {
                    default: withCtx(() => [..._cache[47] || (_cache[47] = [
                      createTextVNode("Quiz behaviour", -1)
                    ])]),
                    _: 1
                  }),
                  createVNode(unref(_sfc_main$b), null, {
                    default: withCtx(() => [..._cache[48] || (_cache[48] = [
                      createTextVNode("Control how questions are presented and how the quiz session is monitored.", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(unref(_sfc_main$c), { class: "grid gap-6" }, {
                default: withCtx(() => [
                  createBaseVNode("div", _hoisted_20, [
                    createBaseVNode("div", _hoisted_21, [
                      createBaseVNode("div", _hoisted_22, [
                        createVNode(unref(Shuffle), { class: "size-4 text-muted-foreground" }),
                        createVNode(unref(_sfc_main$d), null, {
                          default: withCtx(() => [..._cache[49] || (_cache[49] = [
                            createTextVNode("Shuffle question order", -1)
                          ])]),
                          _: 1
                        })
                      ]),
                      createVNode(unref(_sfc_main$g), {
                        type: "button",
                        variant: unref(form).shuffle_questions ? "default" : "outline",
                        size: "sm",
                        class: "h-7 gap-1.5 text-xs",
                        onClick: _cache[9] || (_cache[9] = ($event) => unref(form).shuffle_questions = !unref(form).shuffle_questions)
                      }, {
                        default: withCtx(() => [
                          createBaseVNode("span", {
                            class: normalizeClass(["size-1.5 rounded-full", unref(form).shuffle_questions ? "bg-primary-foreground" : "bg-muted-foreground/50"])
                          }, null, 2),
                          createTextVNode(" " + toDisplayString(unref(form).shuffle_questions ? "Enabled" : "Disabled"), 1)
                        ]),
                        _: 1
                      }, 8, ["variant"])
                    ]),
                    _cache[50] || (_cache[50] = createBaseVNode("p", { class: "text-xs text-muted-foreground" }, "Each taker sees questions in a different random order.", -1))
                  ]),
                  createBaseVNode("div", _hoisted_23, [
                    createBaseVNode("div", _hoisted_24, [
                      createBaseVNode("div", _hoisted_25, [
                        createVNode(unref(Shuffle), { class: "size-4 text-muted-foreground" }),
                        createVNode(unref(_sfc_main$d), null, {
                          default: withCtx(() => [..._cache[51] || (_cache[51] = [
                            createTextVNode("Shuffle answer choices", -1)
                          ])]),
                          _: 1
                        })
                      ]),
                      createVNode(unref(_sfc_main$g), {
                        type: "button",
                        variant: unref(form).shuffle_choices ? "default" : "outline",
                        size: "sm",
                        class: "h-7 gap-1.5 text-xs",
                        onClick: _cache[10] || (_cache[10] = ($event) => unref(form).shuffle_choices = !unref(form).shuffle_choices)
                      }, {
                        default: withCtx(() => [
                          createBaseVNode("span", {
                            class: normalizeClass(["size-1.5 rounded-full", unref(form).shuffle_choices ? "bg-primary-foreground" : "bg-muted-foreground/50"])
                          }, null, 2),
                          createTextVNode(" " + toDisplayString(unref(form).shuffle_choices ? "Enabled" : "Disabled"), 1)
                        ]),
                        _: 1
                      }, 8, ["variant"])
                    ]),
                    _cache[52] || (_cache[52] = createBaseVNode("p", { class: "text-xs text-muted-foreground" }, "Answer choices for multiple-choice and true/false questions are randomised per attempt.", -1))
                  ]),
                  _cache[60] || (_cache[60] = createBaseVNode("div", { class: "h-px bg-border" }, null, -1)),
                  createBaseVNode("div", _hoisted_26, [
                    createBaseVNode("div", _hoisted_27, [
                      createBaseVNode("div", _hoisted_28, [
                        createVNode(unref(Eye), { class: "size-4 text-muted-foreground" }),
                        createVNode(unref(_sfc_main$d), null, {
                          default: withCtx(() => [..._cache[53] || (_cache[53] = [
                            createTextVNode("Tab / window monitoring", -1)
                          ])]),
                          _: 1
                        })
                      ]),
                      createVNode(unref(_sfc_main$g), {
                        type: "button",
                        variant: unref(form).tab_monitoring_enabled ? "default" : "outline",
                        size: "sm",
                        class: "h-7 gap-1.5 text-xs",
                        onClick: _cache[11] || (_cache[11] = ($event) => unref(form).tab_monitoring_enabled = !unref(form).tab_monitoring_enabled)
                      }, {
                        default: withCtx(() => [
                          createBaseVNode("span", {
                            class: normalizeClass(["size-1.5 rounded-full", unref(form).tab_monitoring_enabled ? "bg-primary-foreground" : "bg-muted-foreground/50"])
                          }, null, 2),
                          createTextVNode(" " + toDisplayString(unref(form).tab_monitoring_enabled ? "Enabled" : "Disabled"), 1)
                        ]),
                        _: 1
                      }, 8, ["variant"])
                    ]),
                    _cache[59] || (_cache[59] = createBaseVNode("p", { class: "text-xs text-muted-foreground" }, "Detects when a taker switches tabs or leaves the browser window during the quiz.", -1)),
                    unref(form).tab_monitoring_enabled ? (openBlock(), createElementBlock("div", _hoisted_29, [
                      createBaseVNode("div", _hoisted_30, [
                        createVNode(unref(_sfc_main$d), null, {
                          default: withCtx(() => [..._cache[54] || (_cache[54] = [
                            createTextVNode("On violation", -1)
                          ])]),
                          _: 1
                        }),
                        createBaseVNode("div", _hoisted_31, [
                          createVNode(unref(_sfc_main$g), {
                            type: "button",
                            variant: unref(form).tab_violation_action === "warn" ? "default" : "outline",
                            size: "sm",
                            onClick: _cache[12] || (_cache[12] = ($event) => unref(form).tab_violation_action = "warn")
                          }, {
                            default: withCtx(() => [..._cache[55] || (_cache[55] = [
                              createTextVNode(" Warn the user ", -1)
                            ])]),
                            _: 1
                          }, 8, ["variant"]),
                          createVNode(unref(_sfc_main$g), {
                            type: "button",
                            variant: unref(form).tab_violation_action === "auto_submit" ? "default" : "outline",
                            size: "sm",
                            onClick: _cache[13] || (_cache[13] = ($event) => unref(form).tab_violation_action = "auto_submit")
                          }, {
                            default: withCtx(() => [
                              createVNode(unref(MonitorX), { class: "size-4" }),
                              _cache[56] || (_cache[56] = createTextVNode(" Auto-submit ", -1))
                            ]),
                            _: 1
                          }, 8, ["variant"])
                        ]),
                        createBaseVNode("p", _hoisted_32, [
                          unref(form).tab_violation_action === "warn" ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
                            createTextVNode(" Show a warning on each tab switch. No automatic action. ")
                          ], 64)) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
                            createTextVNode(" Automatically submit the quiz after the set number of violations. ")
                          ], 64))
                        ])
                      ]),
                      unref(form).tab_violation_action === "auto_submit" ? (openBlock(), createElementBlock("div", _hoisted_33, [
                        createVNode(unref(_sfc_main$d), null, {
                          default: withCtx(() => [..._cache[57] || (_cache[57] = [
                            createTextVNode("Violations before auto-submit", -1)
                          ])]),
                          _: 1
                        }),
                        createBaseVNode("div", _hoisted_34, [
                          createVNode(unref(_sfc_main$e), {
                            modelValue: unref(form).tab_violation_limit,
                            "onUpdate:modelValue": _cache[14] || (_cache[14] = ($event) => unref(form).tab_violation_limit = $event),
                            modelModifiers: { number: true },
                            type: "number",
                            min: "1",
                            max: "10",
                            class: "w-20"
                          }, null, 8, ["modelValue"]),
                          _cache[58] || (_cache[58] = createBaseVNode("span", { class: "text-sm text-muted-foreground" }, "tab switches", -1))
                        ]),
                        createVNode(_sfc_main$f, {
                          message: unref(form).errors.tab_violation_limit
                        }, null, 8, ["message"])
                      ])) : createCommentVNode("", true)
                    ])) : createCommentVNode("", true)
                  ])
                ]),
                _: 1
              })
            ]),
            _: 1
          }),
          createBaseVNode("div", _hoisted_35, [
            createVNode(unref(_sfc_main$g), {
              variant: "outline",
              "as-child": ""
            }, {
              default: withCtx(() => [
                createVNode(unref(link_default), {
                  href: unref(index)()
                }, {
                  default: withCtx(() => [..._cache[61] || (_cache[61] = [
                    createTextVNode("Cancel", -1)
                  ])]),
                  _: 1
                }, 8, ["href"])
              ]),
              _: 1
            }),
            createVNode(unref(_sfc_main$g), {
              disabled: !step1Valid.value,
              onClick: nextStep
            }, {
              default: withCtx(() => [
                _cache[62] || (_cache[62] = createTextVNode(" Next: Questions ", -1)),
                createVNode(unref(ChevronRight), { class: "size-4" })
              ]),
              _: 1
            }, 8, ["disabled"])
          ])
        ], 64)) : currentStep.value === 2 ? (openBlock(), createElementBlock(Fragment, { key: 1 }, [
          createVNode(unref(_sfc_main$8), null, {
            default: withCtx(() => [
              createVNode(unref(_sfc_main$9), { class: "flex flex-row items-start justify-between gap-4" }, {
                default: withCtx(() => [
                  createBaseVNode("div", null, [
                    createVNode(unref(_sfc_main$a), null, {
                      default: withCtx(() => [..._cache[63] || (_cache[63] = [
                        createTextVNode("Questions", -1)
                      ])]),
                      _: 1
                    }),
                    createVNode(unref(_sfc_main$b), null, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(questionsFilledIn.value) + "/" + toDisplayString(unref(form).questions.length) + " filled in · " + toDisplayString(totalPoints.value) + " point" + toDisplayString(totalPoints.value === 1 ? "" : "s") + " total ", 1)
                      ]),
                      _: 1
                    })
                  ]),
                  !hasCorrectAnswers.value ? (openBlock(), createBlock(unref(_sfc_main$h), {
                    key: 0,
                    variant: "destructive"
                  }, {
                    default: withCtx(() => [..._cache[64] || (_cache[64] = [
                      createTextVNode("Mark correct answers", -1)
                    ])]),
                    _: 1
                  })) : (openBlock(), createBlock(unref(_sfc_main$h), {
                    key: 1,
                    variant: "success"
                  }, {
                    default: withCtx(() => [..._cache[65] || (_cache[65] = [
                      createTextVNode("Ready", -1)
                    ])]),
                    _: 1
                  }))
                ]),
                _: 1
              }),
              createVNode(unref(_sfc_main$c), { class: "flex flex-col gap-4" }, {
                default: withCtx(() => [
                  (openBlock(true), createElementBlock(Fragment, null, renderList(unref(form).questions, (question, qIndex) => {
                    return openBlock(), createElementBlock("div", {
                      key: qIndex,
                      class: "rounded-xl border bg-card p-4 shadow-sm"
                    }, [
                      createBaseVNode("div", _hoisted_36, [
                        createBaseVNode("div", _hoisted_37, [
                          createVNode(unref(GripVertical), { class: "size-4" }),
                          createTextVNode(" Question " + toDisplayString(qIndex + 1), 1)
                        ]),
                        createVNode(unref(_sfc_main$g), {
                          type: "button",
                          variant: "ghost",
                          size: "sm",
                          class: "text-destructive hover:text-destructive",
                          onClick: ($event) => removeQuestion(qIndex)
                        }, {
                          default: withCtx(() => [
                            createVNode(unref(Trash2), { class: "size-4" }),
                            _cache[66] || (_cache[66] = createTextVNode(" Remove ", -1))
                          ]),
                          _: 1
                        }, 8, ["onClick"])
                      ]),
                      createBaseVNode("div", _hoisted_38, [
                        createBaseVNode("div", _hoisted_39, [
                          createVNode(unref(_sfc_main$d), {
                            for: `question-${qIndex}`
                          }, {
                            default: withCtx(() => [..._cache[67] || (_cache[67] = [
                              createTextVNode("Question text", -1)
                            ])]),
                            _: 1
                          }, 8, ["for"]),
                          withDirectives(createBaseVNode("textarea", {
                            id: `question-${qIndex}`,
                            "onUpdate:modelValue": ($event) => question.question_text = $event,
                            rows: "2",
                            class: "min-h-16 w-full rounded-md border border-input bg-background px-3 py-2 text-sm shadow-xs outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50",
                            placeholder: "What would you like to ask?"
                          }, null, 8, _hoisted_40), [
                            [vModelText, question.question_text]
                          ]),
                          createVNode(_sfc_main$f, {
                            message: questionError(qIndex, "question_text")
                          }, null, 8, ["message"])
                        ]),
                        createBaseVNode("div", _hoisted_41, [
                          createBaseVNode("div", _hoisted_42, [
                            createVNode(unref(_sfc_main$d), null, {
                              default: withCtx(() => [..._cache[68] || (_cache[68] = [
                                createTextVNode("Type", -1)
                              ])]),
                              _: 1
                            }),
                            createVNode(unref(_sfc_main$7), {
                              "model-value": question.type,
                              "onUpdate:modelValue": (v) => handleTypeChange(question, v)
                            }, {
                              default: withCtx(() => [
                                createVNode(unref(_sfc_main$2), null, {
                                  default: withCtx(() => [
                                    createVNode(unref(_sfc_main$1))
                                  ]),
                                  _: 1
                                }),
                                createVNode(unref(_sfc_main$6), null, {
                                  default: withCtx(() => [
                                    createVNode(unref(_sfc_main$5), { value: "multiple_choice" }, {
                                      default: withCtx(() => [..._cache[69] || (_cache[69] = [
                                        createTextVNode("Multiple choice", -1)
                                      ])]),
                                      _: 1
                                    }),
                                    createVNode(unref(_sfc_main$5), { value: "true_false" }, {
                                      default: withCtx(() => [..._cache[70] || (_cache[70] = [
                                        createTextVNode("True / False", -1)
                                      ])]),
                                      _: 1
                                    }),
                                    createVNode(unref(_sfc_main$5), { value: "short_answer" }, {
                                      default: withCtx(() => [..._cache[71] || (_cache[71] = [
                                        createTextVNode("Short answer", -1)
                                      ])]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }, 8, ["model-value", "onUpdate:modelValue"])
                          ]),
                          createBaseVNode("div", _hoisted_43, [
                            createVNode(unref(_sfc_main$d), {
                              for: `points-${qIndex}`
                            }, {
                              default: withCtx(() => [..._cache[72] || (_cache[72] = [
                                createTextVNode("Points", -1)
                              ])]),
                              _: 1
                            }, 8, ["for"]),
                            createVNode(unref(_sfc_main$e), {
                              id: `points-${qIndex}`,
                              modelValue: question.points,
                              "onUpdate:modelValue": ($event) => question.points = $event,
                              modelModifiers: { number: true },
                              type: "number",
                              min: "1",
                              max: "100"
                            }, null, 8, ["id", "modelValue", "onUpdate:modelValue"])
                          ])
                        ]),
                        question.type !== "short_answer" ? (openBlock(), createElementBlock("div", _hoisted_44, [
                          createVNode(unref(_sfc_main$d), null, {
                            default: withCtx(() => [
                              createTextVNode(" Choices — " + toDisplayString(question.type === "true_false" ? "select the correct one" : "tick correct answers (at least one must be wrong)"), 1)
                            ]),
                            _: 2
                          }, 1024),
                          createBaseVNode("div", _hoisted_45, [
                            (openBlock(true), createElementBlock(Fragment, null, renderList(question.choices, (choice, cIndex) => {
                              return openBlock(), createElementBlock("div", {
                                key: cIndex,
                                class: normalizeClass([
                                  "flex items-center gap-2 rounded-md border bg-background p-2",
                                  choice.is_correct ? "border-emerald-300 ring-2 ring-emerald-200 dark:border-emerald-700 dark:ring-emerald-900/40" : ""
                                ])
                              }, [
                                createBaseVNode("button", {
                                  type: "button",
                                  class: normalizeClass([
                                    "flex size-8 shrink-0 items-center justify-center rounded-full border transition",
                                    choice.is_correct ? "border-emerald-500 bg-emerald-500 text-white" : "border-muted text-muted-foreground hover:border-emerald-400"
                                  ]),
                                  "aria-label": choice.is_correct ? "Correct answer" : "Mark as correct",
                                  onClick: ($event) => toggleCorrect(question, cIndex)
                                }, [
                                  choice.is_correct ? (openBlock(), createBlock(unref(CircleCheck), {
                                    key: 0,
                                    class: "size-4"
                                  })) : (openBlock(), createElementBlock("span", _hoisted_47, toDisplayString(String.fromCharCode(
                                    65 + cIndex
                                  )), 1))
                                ], 10, _hoisted_46),
                                createVNode(unref(_sfc_main$e), {
                                  modelValue: choice.choice_text,
                                  "onUpdate:modelValue": ($event) => choice.choice_text = $event,
                                  placeholder: `Option ${String.fromCharCode(65 + cIndex)}`,
                                  readonly: question.type === "true_false",
                                  class: "flex-1"
                                }, null, 8, ["modelValue", "onUpdate:modelValue", "placeholder", "readonly"]),
                                question.type === "multiple_choice" && question.choices.length > 2 ? (openBlock(), createBlock(unref(_sfc_main$g), {
                                  key: 0,
                                  type: "button",
                                  variant: "ghost",
                                  size: "icon",
                                  class: "text-muted-foreground",
                                  onClick: ($event) => removeChoice(question, cIndex)
                                }, {
                                  default: withCtx(() => [
                                    createVNode(unref(Trash2), { class: "size-4" })
                                  ]),
                                  _: 1
                                }, 8, ["onClick"])) : createCommentVNode("", true)
                              ], 2);
                            }), 128))
                          ]),
                          question.type === "multiple_choice" ? (openBlock(), createBlock(unref(_sfc_main$g), {
                            key: 0,
                            type: "button",
                            variant: "outline",
                            size: "sm",
                            class: "w-fit",
                            onClick: ($event) => addChoice(question)
                          }, {
                            default: withCtx(() => [
                              createVNode(unref(Plus), { class: "size-4" }),
                              _cache[73] || (_cache[73] = createTextVNode(" Add choice ", -1))
                            ]),
                            _: 1
                          }, 8, ["onClick"])) : createCommentVNode("", true)
                        ])) : (openBlock(), createElementBlock("div", _hoisted_48, [
                          createBaseVNode("div", _hoisted_49, [
                            createVNode(unref(_sfc_main$d), null, {
                              default: withCtx(() => [..._cache[74] || (_cache[74] = [
                                createTextVNode("Accepted answers", -1)
                              ])]),
                              _: 1
                            }),
                            createVNode(unref(_sfc_main$g), {
                              type: "button",
                              variant: question.case_sensitive ? "default" : "outline",
                              size: "sm",
                              class: "h-7 gap-1.5 text-xs",
                              onClick: ($event) => question.case_sensitive = !question.case_sensitive
                            }, {
                              default: withCtx(() => [
                                createBaseVNode("span", {
                                  class: normalizeClass([
                                    "size-1.5 rounded-full",
                                    question.case_sensitive ? "bg-primary-foreground" : "bg-muted-foreground/50"
                                  ])
                                }, null, 2),
                                createTextVNode(" " + toDisplayString(question.case_sensitive ? "Case-sensitive" : "Case-insensitive"), 1)
                              ]),
                              _: 2
                            }, 1032, ["variant", "onClick"])
                          ]),
                          createBaseVNode("p", _hoisted_50, toDisplayString(question.case_sensitive ? "Exact case match required." : "Case-insensitive — any capitalisation accepted.") + " Add every wording you want to accept. ", 1),
                          createBaseVNode("div", _hoisted_51, [
                            (openBlock(true), createElementBlock(Fragment, null, renderList(question.correct_answer, (answer, aIndex) => {
                              return openBlock(), createElementBlock("div", {
                                key: aIndex,
                                class: "flex items-center gap-2"
                              }, [
                                createVNode(unref(_sfc_main$e), {
                                  modelValue: question.correct_answer[aIndex],
                                  "onUpdate:modelValue": ($event) => question.correct_answer[aIndex] = $event,
                                  placeholder: "e.g. glucose"
                                }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                createVNode(unref(_sfc_main$g), {
                                  type: "button",
                                  variant: "ghost",
                                  size: "icon",
                                  class: "text-muted-foreground",
                                  onClick: ($event) => removeAcceptedAnswer(
                                    question,
                                    aIndex
                                  )
                                }, {
                                  default: withCtx(() => [
                                    createVNode(unref(Trash2), { class: "size-4" })
                                  ]),
                                  _: 1
                                }, 8, ["onClick"])
                              ]);
                            }), 128))
                          ]),
                          createVNode(unref(_sfc_main$g), {
                            type: "button",
                            variant: "outline",
                            size: "sm",
                            class: "w-fit",
                            onClick: ($event) => addAcceptedAnswer(question)
                          }, {
                            default: withCtx(() => [
                              createVNode(unref(Plus), { class: "size-4" }),
                              _cache[75] || (_cache[75] = createTextVNode(" Add accepted answer ", -1))
                            ]),
                            _: 1
                          }, 8, ["onClick"])
                        ])),
                        createBaseVNode("div", _hoisted_52, [
                          createVNode(unref(_sfc_main$d), {
                            for: `explanation-${qIndex}`
                          }, {
                            default: withCtx(() => [..._cache[76] || (_cache[76] = [
                              createTextVNode("Explanation (optional)", -1)
                            ])]),
                            _: 1
                          }, 8, ["for"]),
                          createVNode(unref(_sfc_main$e), {
                            id: `explanation-${qIndex}`,
                            modelValue: question.explanation,
                            "onUpdate:modelValue": ($event) => question.explanation = $event,
                            placeholder: "Shown in results to help learners understand."
                          }, null, 8, ["id", "modelValue", "onUpdate:modelValue"])
                        ])
                      ])
                    ]);
                  }), 128)),
                  createVNode(unref(_sfc_main$g), {
                    type: "button",
                    variant: "outline",
                    onClick: addQuestion
                  }, {
                    default: withCtx(() => [
                      createVNode(unref(Plus), { class: "size-4" }),
                      _cache[77] || (_cache[77] = createTextVNode(" Add question ", -1))
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ]),
            _: 1
          }),
          createBaseVNode("div", _hoisted_53, [
            createVNode(unref(_sfc_main$g), {
              variant: "outline",
              onClick: prevStep
            }, {
              default: withCtx(() => [
                createVNode(unref(ChevronLeft), { class: "size-4" }),
                _cache[78] || (_cache[78] = createTextVNode(" Back ", -1))
              ]),
              _: 1
            }),
            createVNode(unref(_sfc_main$g), { onClick: nextStep }, {
              default: withCtx(() => [
                _cache[79] || (_cache[79] = createTextVNode(" Review ", -1)),
                createVNode(unref(ChevronRight), { class: "size-4" })
              ]),
              _: 1
            })
          ])
        ], 64)) : (openBlock(), createElementBlock(Fragment, { key: 2 }, [
          createVNode(unref(_sfc_main$8), null, {
            default: withCtx(() => [
              createVNode(unref(_sfc_main$9), null, {
                default: withCtx(() => [
                  createVNode(unref(_sfc_main$a), null, {
                    default: withCtx(() => [..._cache[80] || (_cache[80] = [
                      createTextVNode("Review your quiz", -1)
                    ])]),
                    _: 1
                  }),
                  createVNode(unref(_sfc_main$b), null, {
                    default: withCtx(() => [
                      createTextVNode(" Check everything looks right before " + toDisplayString(props.submitLabel === "Create quiz" ? "creating" : "saving") + " your quiz. ", 1)
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(unref(_sfc_main$c), { class: "grid gap-6" }, {
                default: withCtx(() => [
                  createBaseVNode("div", _hoisted_54, [
                    createBaseVNode("div", _hoisted_55, [
                      _cache[81] || (_cache[81] = createBaseVNode("p", { class: "text-xs font-semibold tracking-wide text-muted-foreground uppercase" }, " Title ", -1)),
                      createBaseVNode("p", _hoisted_56, toDisplayString(unref(form).title || "—"), 1)
                    ]),
                    createBaseVNode("div", _hoisted_57, [
                      _cache[82] || (_cache[82] = createBaseVNode("p", { class: "text-xs font-semibold tracking-wide text-muted-foreground uppercase" }, " Status ", -1)),
                      createVNode(unref(_sfc_main$h), {
                        variant: unref(form).status === "active" ? "success" : "secondary"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(unref(form).status === "active" ? "Active" : "Inactive (draft)"), 1)
                        ]),
                        _: 1
                      }, 8, ["variant"])
                    ]),
                    unref(form).description ? (openBlock(), createElementBlock("div", _hoisted_58, [
                      _cache[83] || (_cache[83] = createBaseVNode("p", { class: "text-xs font-semibold tracking-wide text-muted-foreground uppercase" }, " Description ", -1)),
                      createBaseVNode("p", _hoisted_59, toDisplayString(unref(form).description), 1)
                    ])) : createCommentVNode("", true)
                  ]),
                  _cache[91] || (_cache[91] = createBaseVNode("div", { class: "h-px bg-border" }, null, -1)),
                  createBaseVNode("div", _hoisted_60, [
                    createBaseVNode("div", {
                      class: normalizeClass(["flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs", unref(form).shuffle_questions ? "border-primary/30 bg-primary/5 text-primary" : "text-muted-foreground"])
                    }, [
                      createVNode(unref(Shuffle), { class: "size-3" }),
                      createTextVNode(" Shuffle questions: " + toDisplayString(unref(form).shuffle_questions ? "On" : "Off"), 1)
                    ], 2),
                    createBaseVNode("div", {
                      class: normalizeClass(["flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs", unref(form).shuffle_choices ? "border-primary/30 bg-primary/5 text-primary" : "text-muted-foreground"])
                    }, [
                      createVNode(unref(Shuffle), { class: "size-3" }),
                      createTextVNode(" Shuffle choices: " + toDisplayString(unref(form).shuffle_choices ? "On" : "Off"), 1)
                    ], 2),
                    createBaseVNode("div", {
                      class: normalizeClass(["flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs", unref(form).tab_monitoring_enabled ? "border-amber-400/50 bg-amber-50 text-amber-700 dark:bg-amber-900/20 dark:text-amber-400" : "text-muted-foreground"])
                    }, [
                      createVNode(unref(Eye), { class: "size-3" }),
                      _cache[84] || (_cache[84] = createTextVNode(" Tab monitoring: ", -1)),
                      unref(form).tab_monitoring_enabled ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
                        createTextVNode(toDisplayString(unref(form).tab_violation_action === "auto_submit" ? `Auto-submit after ${unref(form).tab_violation_limit}` : "Warn"), 1)
                      ], 64)) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
                        createTextVNode("Off")
                      ], 64))
                    ], 2)
                  ]),
                  _cache[92] || (_cache[92] = createBaseVNode("div", { class: "h-px bg-border" }, null, -1)),
                  createBaseVNode("div", _hoisted_61, [
                    createBaseVNode("div", _hoisted_62, [
                      createBaseVNode("p", _hoisted_63, toDisplayString(unref(form).questions.length), 1),
                      _cache[85] || (_cache[85] = createBaseVNode("p", { class: "mt-0.5 text-xs text-muted-foreground" }, " Total slots ", -1))
                    ]),
                    createBaseVNode("div", _hoisted_64, [
                      createBaseVNode("p", _hoisted_65, toDisplayString(questionsFilledIn.value), 1),
                      _cache[86] || (_cache[86] = createBaseVNode("p", { class: "mt-0.5 text-xs text-muted-foreground" }, " Filled in ", -1))
                    ]),
                    createBaseVNode("div", _hoisted_66, [
                      createBaseVNode("p", _hoisted_67, toDisplayString(totalPoints.value), 1),
                      _cache[87] || (_cache[87] = createBaseVNode("p", { class: "mt-0.5 text-xs text-muted-foreground" }, " Total points ", -1))
                    ]),
                    createBaseVNode("div", _hoisted_68, [
                      createBaseVNode("p", _hoisted_69, toDisplayString(unref(form).max_attempts ?? "∞"), 1),
                      _cache[88] || (_cache[88] = createBaseVNode("p", { class: "mt-0.5 text-xs text-muted-foreground" }, " Max attempts ", -1))
                    ])
                  ]),
                  !hasCorrectAnswers.value || questionsFilledIn.value === 0 ? (openBlock(), createElementBlock("div", _hoisted_70, [
                    createBaseVNode("div", _hoisted_71, [
                      createVNode(unref(TriangleAlert), { class: "mt-0.5 size-4 shrink-0 text-amber-600 dark:text-amber-400" }),
                      createBaseVNode("div", _hoisted_72, [
                        _cache[89] || (_cache[89] = createBaseVNode("p", { class: "text-sm font-medium text-amber-800 dark:text-amber-300" }, " Attention needed ", -1)),
                        createBaseVNode("ul", _hoisted_73, [
                          questionsFilledIn.value === 0 ? (openBlock(), createElementBlock("li", _hoisted_74, " No questions have been filled in yet. ")) : !hasCorrectAnswers.value ? (openBlock(), createElementBlock("li", _hoisted_75, " Some questions are missing correct answers. ")) : createCommentVNode("", true)
                        ]),
                        _cache[90] || (_cache[90] = createBaseVNode("p", { class: "text-xs text-amber-600 dark:text-amber-500" }, " You can still save — empty slots and unflagged answers will be excluded. ", -1))
                      ])
                    ])
                  ])) : (openBlock(), createElementBlock("div", _hoisted_76, [
                    createBaseVNode("div", _hoisted_77, [
                      createVNode(unref(CircleCheck), { class: "size-4 shrink-0 text-emerald-600 dark:text-emerald-400" }),
                      createBaseVNode("p", _hoisted_78, " All " + toDisplayString(questionsFilledIn.value) + " question" + toDisplayString(questionsFilledIn.value === 1 ? "" : "s") + " are ready. ", 1)
                    ])
                  ]))
                ]),
                _: 1
              })
            ]),
            _: 1
          }),
          createBaseVNode("div", _hoisted_79, [
            createVNode(unref(_sfc_main$g), {
              variant: "outline",
              onClick: prevStep
            }, {
              default: withCtx(() => [
                createVNode(unref(ChevronLeft), { class: "size-4" }),
                _cache[93] || (_cache[93] = createTextVNode(" Back to questions ", -1))
              ]),
              _: 1
            }),
            createVNode(unref(_sfc_main$g), {
              disabled: unref(form).processing,
              onClick: requestSave
            }, {
              default: withCtx(() => [
                createTextVNode(toDisplayString(props.submitLabel), 1)
              ]),
              _: 1
            }, 8, ["disabled"])
          ])
        ], 64)),
        createVNode(_sfc_main$i, {
          open: saveDialogOpen.value,
          "onUpdate:open": _cache[15] || (_cache[15] = ($event) => saveDialogOpen.value = $event),
          title: props.submitLabel === "Create quiz" ? "Create quiz?" : "Save changes?",
          description: props.submitLabel === "Create quiz" ? "Your quiz will be created and ready to share once saved." : "Your changes will be saved and applied immediately.",
          "confirm-label": props.submitLabel,
          processing: unref(form).processing,
          onConfirm: submit
        }, null, 8, ["open", "title", "description", "confirm-label", "processing"]),
        createVNode(_sfc_main$i, {
          open: removeQuestionDialog.value.open,
          "onUpdate:open": _cache[16] || (_cache[16] = ($event) => removeQuestionDialog.value.open = $event),
          title: "Remove question?",
          description: "This question and its choices will be removed from the quiz.",
          "confirm-label": "Remove",
          variant: "destructive",
          onConfirm: confirmRemoveQuestion
        }, null, 8, ["open"]),
        props.regenerateUrl ? (openBlock(), createBlock(_sfc_main$i, {
          key: 3,
          open: regenerateDialogOpen.value,
          "onUpdate:open": _cache[17] || (_cache[17] = ($event) => regenerateDialogOpen.value = $event),
          title: "Regenerate share code?",
          description: "The current code will stop working immediately. Anyone with the old code won't be able to join using it.",
          "confirm-label": "Regenerate",
          variant: "destructive",
          onConfirm: _cache[18] || (_cache[18] = () => {
            regenerateDialogOpen.value = false;
            unref(router).post(
              props.regenerateUrl,
              {},
              {
                preserveScroll: true,
                onSuccess: () => unref(toast).success("Share code regenerated."),
                onError: () => unref(toast).error("Failed to regenerate code.")
              }
            );
          })
        }, null, 8, ["open"])) : createCommentVNode("", true)
      ]);
    };
  }
});
export {
  _sfc_main as _
};
