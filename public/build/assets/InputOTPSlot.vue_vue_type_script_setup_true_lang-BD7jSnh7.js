import { d as defineComponent, b0 as useModel, b4 as usePrevious, b5 as defaultWindow, B as onMounted, b6 as useEventListener, b7 as defaultDocument, C as onUnmounted, w as watch, aa as watchEffect, a4 as useForwardProps, au as reactiveOmit, o as openBlock, a as createElementBlock, k as createBlock, e as unref, l as createCommentVNode, f as createBaseVNode, Z as renderSlot, a0 as mergeProps, n as normalizeClass, y as normalizeStyle, F as Fragment, b2 as mergeModels, m as computed, b8 as shallowRef, b9 as inject, ba as h, p as ref, bb as provide, aj as useForwardPropsEmits, av as cn, g as withCtx, ak as normalizeProps, al as guardReactiveProps, i as createTextVNode, t as toDisplayString } from "./app-U-Wu707C.js";
const NOSCRIPT_CSS_FALLBACK = `
[data-input-otp] {
  --nojs-bg: white !important;
  --nojs-fg: black !important;

  background-color: var(--nojs-bg) !important;
  color: var(--nojs-fg) !important;
  caret-color: var(--nojs-fg) !important;
  letter-spacing: .25em !important;
  text-align: center !important;
  border: 1px solid var(--nojs-fg) !important;
  border-radius: 4px !important;
  width: 100% !important;
}
@media (prefers-color-scheme: dark) {
  [data-input-otp] {
    --nojs-bg: black !important;
    --nojs-fg: white !important;
  }
}`;
const NoSciptCssFallback = defineComponent({
  props: { fallback: {
    type: String,
    required: true
  } },
  setup(props) {
    return () => h("noscript", { innerHTML: `<style>${props.fallback}</style>` });
  }
});
const PublicVueOTPContextKey = Symbol("vue-otp-context");
function syncTimeouts(cb) {
  return [
    setTimeout(cb, 0),
    setTimeout(cb, 10),
    setTimeout(cb, 50)
  ];
}
const PWM_BADGE_MARGIN_RIGHT = 18;
const PWM_BADGE_SPACE_WIDTH_PX = 40;
const PWM_BADGE_SPACE_WIDTH = `${PWM_BADGE_SPACE_WIDTH_PX}px`;
const PASSWORD_MANAGERS_SELECTORS = [
  "[data-lastpass-icon-root]",
  "com-1password-button",
  "[data-dashlanecreated]",
  '[style$="2147483647 !important;"]'
].join(",");
function usePasswordManagerBadge({ containerRef, inputRef, pushPasswordManagerStrategy, isFocused }) {
  const pwmMetadata = ref({
    done: false,
    refocused: false
  });
  const hasPWMBadge = ref(false);
  const hasPWMBadgeSpace = ref(false);
  const done = ref(false);
  const willPushPWMBadge = computed(() => {
    if (pushPasswordManagerStrategy === "none") return false;
    return (pushPasswordManagerStrategy === "increase-width" || pushPasswordManagerStrategy === "experimental-no-flickering") && hasPWMBadge.value && hasPWMBadgeSpace.value;
  });
  const trackPWMBadge = () => {
    const container = containerRef.value;
    const input = inputRef.value;
    if (!container || !input || done.value || pushPasswordManagerStrategy === "none") return;
    const elementToCompare = container;
    const rightCornerX = elementToCompare.getBoundingClientRect().left + elementToCompare.offsetWidth;
    const centereredY = elementToCompare.getBoundingClientRect().top + elementToCompare.offsetHeight / 2;
    const x = rightCornerX - PWM_BADGE_MARGIN_RIGHT;
    const y = centereredY;
    if (document.querySelectorAll(PASSWORD_MANAGERS_SELECTORS).length === 0) {
      if (document.elementFromPoint(x, y) === container) return;
    }
    hasPWMBadge.value = true;
    done.value = true;
    if (!pwmMetadata.value.refocused && document.activeElement === input) {
      const sel = [input.selectionStart, input.selectionEnd];
      input.blur();
      input.focus();
      input.setSelectionRange(sel[0], sel[1]);
      pwmMetadata.value.refocused = true;
    }
  };
  const checkHasSpace = () => {
    const container = containerRef.value;
    if (!container || pushPasswordManagerStrategy === "none") return;
    hasPWMBadgeSpace.value = window.innerWidth - container.getBoundingClientRect().right >= PWM_BADGE_SPACE_WIDTH_PX;
  };
  let spaceInterval;
  onMounted(() => {
    checkHasSpace();
    spaceInterval = setInterval(checkHasSpace, 1e3);
  });
  onUnmounted(() => {
    clearInterval(spaceInterval);
  });
  watch([isFocused, inputRef], (newValues, _, onInvalidate) => {
    const [newIsFocused, newInputRef] = newValues;
    const _isFocused = newIsFocused || document.activeElement === newInputRef;
    if (pushPasswordManagerStrategy === "none" || !_isFocused) return;
    const t1 = setTimeout(trackPWMBadge, 0);
    const t2 = setTimeout(trackPWMBadge, 2e3);
    const t3 = setTimeout(trackPWMBadge, 5e3);
    const t4 = setTimeout(() => {
      done.value = true;
    }, 6e3);
    onInvalidate(() => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
    });
  });
  return {
    hasPWMBadge,
    willPushPWMBadge,
    PWM_BADGE_SPACE_WIDTH
  };
}
const _hoisted_1$1 = { style: {
  "position": "absolute",
  "inset": "0",
  "pointer-events": "none"
} };
const _hoisted_2$1 = [
  "value",
  "data-input-otp-placeholder-shown",
  "data-input-otp-mss",
  "data-input-otp-mse",
  "aria-placeholder",
  "pattern"
];
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  name: "OTPInput",
  inheritAttrs: false,
  __name: "OTPInput",
  props: /* @__PURE__ */ mergeModels({
    maxlength: {},
    textAlign: { default: "left" },
    inputmode: { default: "numeric" },
    containerClass: {},
    pushPasswordManagerStrategy: { default: "increase-width" },
    noScriptCssFallback: { default: NOSCRIPT_CSS_FALLBACK },
    defaultValue: { default: "" },
    pasteTransformer: {},
    accept: {},
    alt: {},
    autocomplete: { default: "one-time-code" },
    autofocus: { type: Boolean },
    capture: { type: [Boolean, String] },
    checked: { type: [
      Boolean,
      Array,
      Set
    ] },
    crossorigin: {},
    disabled: { type: Boolean },
    enterKeyHint: {},
    form: {},
    formaction: {},
    formenctype: {},
    formmethod: {},
    formnovalidate: { type: Boolean },
    formtarget: {},
    height: {},
    indeterminate: { type: Boolean },
    list: {},
    max: {},
    min: {},
    minlength: {},
    multiple: { type: Boolean },
    name: {},
    pattern: {},
    placeholder: {},
    readonly: { type: Boolean },
    required: { type: Boolean },
    size: {},
    src: {},
    step: {},
    type: {},
    value: {},
    width: {}
  }, {
    "modelValue": { default(props) {
      return props.defaultValue;
    } },
    "modelModifiers": {}
  }),
  emits: /* @__PURE__ */ mergeModels([
    "complete",
    "change",
    "select",
    "input",
    "focus",
    "blur",
    "mouseover",
    "mouseleave",
    "paste"
  ], ["update:modelValue"]),
  setup(__props, { expose: __expose, emit: __emit }) {
    var _a, _b, _c, _d, _e, _f;
    const props = __props;
    const emit = __emit;
    const [internalValue] = useModel(__props, "modelValue");
    const previousValue = usePrevious(internalValue);
    const regexp = computed(() => props.pattern ? typeof props.pattern === "string" ? new RegExp(props.pattern) : props.pattern : null);
    const isHoveringInput = shallowRef(false);
    const isFocused = shallowRef(false);
    const mirrorSelectionStart = shallowRef(null);
    const mirrorSelectionEnd = shallowRef(null);
    const inputRef = shallowRef(null);
    const containerRef = shallowRef(null);
    const isIOS = (_c = (_b = (_a = defaultWindow) == null ? void 0 : _a.CSS) == null ? void 0 : _b.supports) == null ? void 0 : _c.call(_b, "-webkit-touch-callout", "none");
    let inputMetadataRef = { prev: [
      (_d = inputRef.value) == null ? void 0 : _d.selectionStart,
      (_e = inputRef.value) == null ? void 0 : _e.selectionEnd,
      (_f = inputRef.value) == null ? void 0 : _f.selectionDirection
    ] };
    function safeInsertRule(sheet, rule) {
      try {
        sheet.insertRule(rule);
      } catch {
        console.error("input-otp could not insert CSS rule:", rule);
      }
    }
    onMounted(() => {
      var _a2, _b2, _c2, _d2;
      const input = inputRef.value;
      const container = containerRef.value;
      if (!input || !container) return;
      inputMetadataRef.prev = [
        input.selectionStart,
        input.selectionEnd,
        input.selectionDirection ?? "none"
      ];
      const removeSelectionchangeListener = useEventListener(defaultDocument, "selectionchange", onDocumentSelectionChange, { capture: true });
      function onDocumentSelectionChange() {
        var _a3;
        if (!input) return;
        if (((_a3 = defaultDocument) == null ? void 0 : _a3.activeElement) !== input) {
          mirrorSelectionStart.value = null;
          mirrorSelectionEnd.value = null;
          return;
        }
        const _s = input.selectionStart;
        const _e2 = input.selectionEnd;
        const _dir = input.selectionDirection;
        const _ml = input.maxLength;
        const _val = input.value;
        const _prev = inputMetadataRef.prev;
        let start = -1;
        let end = -1;
        let direction = void 0;
        if (_val.length !== 0 && _s !== null && _e2 !== null) {
          const isSingleCaret = _s === _e2;
          const isInsertMode = _s === _val.length && _val.length < _ml;
          if (isSingleCaret && !isInsertMode) {
            const c = _s;
            if (c === 0) {
              start = 0;
              end = 1;
              direction = "forward";
            } else if (c === _ml) {
              start = c - 1;
              end = c;
              direction = "backward";
            } else if (_ml > 1 && _val.length > 1) {
              let offset = 0;
              if (_prev[0] !== null && _prev[1] !== null) {
                direction = c < _prev[1] ? "backward" : "forward";
                const wasPreviouslyInserting = _prev[0] === _prev[1] && _prev[0] < _ml;
                if (direction === "backward" && !wasPreviouslyInserting) offset = -1;
              }
              start = offset + c;
              end = offset + c + 1;
            }
          }
          if (start !== -1 && end !== -1 && start !== end) input.setSelectionRange(start, end, direction);
        }
        const s = start !== -1 ? start : _s;
        const e = end !== -1 ? end : _e2;
        const dir = direction ?? _dir;
        mirrorSelectionStart.value = s;
        mirrorSelectionEnd.value = e;
        inputMetadataRef.prev = [
          s,
          e,
          dir
        ];
      }
      onDocumentSelectionChange();
      if (((_a2 = defaultDocument) == null ? void 0 : _a2.activeElement) === input) isFocused.value = true;
      if (!((_b2 = defaultDocument) == null ? void 0 : _b2.getElementById("input-otp-style"))) {
        const styleEl = (_c2 = defaultDocument) == null ? void 0 : _c2.createElement("style");
        styleEl.id = "input-otp-style";
        (_d2 = defaultDocument) == null ? void 0 : _d2.head.appendChild(styleEl);
        if (styleEl.sheet) {
          const autofillStyles = "background: transparent !important; color: transparent !important; border-color: transparent !important; opacity: 0 !important; box-shadow: none !important; -webkit-box-shadow: none !important; -webkit-text-fill-color: transparent !important;";
          safeInsertRule(styleEl.sheet, "[data-input-otp]::selection { background: transparent !important; color: transparent !important; }");
          safeInsertRule(styleEl.sheet, `[data-input-otp]:autofill { ${autofillStyles} }`);
          safeInsertRule(styleEl.sheet, `[data-input-otp]:-webkit-autofill { ${autofillStyles} }`);
          safeInsertRule(styleEl.sheet, `@supports (-webkit-touch-callout: none) { [data-input-otp] { letter-spacing: -.6em !important; font-weight: 100 !important; font-stretch: ultra-condensed; font-optical-sizing: none !important; left: -1px !important; right: 1px !important; } }`);
          safeInsertRule(styleEl.sheet, `[data-input-otp] + * { pointer-events: all !important; }`);
        }
      }
      const updateRootHeight = () => {
        if (container) container.style.setProperty("--root-height", `${input.clientHeight}px`);
      };
      updateRootHeight();
      const resizeObserver = new ResizeObserver(updateRootHeight);
      resizeObserver.observe(input);
      onUnmounted(() => {
        removeSelectionchangeListener();
        resizeObserver.disconnect();
      });
    });
    watch([internalValue], () => {
      syncTimeouts(() => {
        var _a2, _b2, _c2, _d2;
        if (!inputRef.value) return;
        (_a2 = inputRef.value) == null ? void 0 : _a2.dispatchEvent(new Event("input"));
        const s = (_b2 = inputRef.value) == null ? void 0 : _b2.selectionStart;
        const e = (_c2 = inputRef.value) == null ? void 0 : _c2.selectionEnd;
        const dir = (_d2 = inputRef.value) == null ? void 0 : _d2.selectionDirection;
        if (s !== null && e !== null) {
          mirrorSelectionStart.value = s ?? null;
          mirrorSelectionEnd.value = e ?? null;
          inputMetadataRef.prev = [
            s,
            e,
            dir
          ];
        }
      });
    }, { immediate: true });
    watchEffect(() => {
      if (previousValue.value === void 0) return;
      if (internalValue.value !== previousValue.value && previousValue.value.length < props.maxlength && internalValue.value.length === props.maxlength) emit("complete", internalValue.value);
    });
    const pwmb = usePasswordManagerBadge({
      containerRef,
      inputRef,
      pushPasswordManagerStrategy: props.pushPasswordManagerStrategy,
      isFocused
    });
    function _beforeInputListener(e) {
      if (e.inputType === "insertText" && e.data !== null) {
        const target = e.currentTarget;
        const start = target.selectionStart ?? 0;
        const end = target.selectionEnd ?? 0;
        const currentValue = target.value;
        const newValue = (start !== end ? currentValue.slice(0, start) + e.data + currentValue.slice(end) : currentValue.slice(0, start) + e.data + currentValue.slice(start)).slice(0, props.maxlength);
        if (newValue.length > 0 && regexp.value && !regexp.value.test(newValue)) e.preventDefault();
      }
    }
    function _inputListener(e) {
      var _a2;
      const newValue = e.currentTarget.value.slice(0, props.maxlength);
      if (newValue.length > 0 && regexp.value && !regexp.value.test(newValue)) {
        e.preventDefault();
        return;
      }
      if (typeof previousValue.value === "string" && newValue.length < previousValue.value.length) (_a2 = defaultDocument) == null ? void 0 : _a2.dispatchEvent(new Event("selectionchange"));
      internalValue.value = newValue;
      emit("input", newValue);
    }
    function _focusListener() {
      const input = inputRef.value;
      if (input) {
        const start = Math.min(input.value.length, props.maxlength - 1);
        const end = input.value.length;
        input.setSelectionRange(start, end);
        mirrorSelectionStart.value = start;
        mirrorSelectionEnd.value = end;
      }
      isFocused.value = true;
    }
    function _pasteListener(e) {
      var _a2, _b2, _c2;
      const input = inputRef.value;
      if (!input) return;
      if (!props.pasteTransformer && (!isIOS || !e.clipboardData || !input)) return;
      const _content = (_a2 = e == null ? void 0 : e.clipboardData) == null ? void 0 : _a2.getData("text/plain");
      const content = (props == null ? void 0 : props.pasteTransformer) ? props.pasteTransformer(_content) : _content;
      e.preventDefault();
      const start = (_b2 = inputRef.value) == null ? void 0 : _b2.selectionStart;
      const end = (_c2 = inputRef.value) == null ? void 0 : _c2.selectionEnd;
      const newValue = (start !== end ? internalValue.value.slice(0, start) + content + internalValue.value.slice(end) : internalValue.value.slice(0, start) + content + internalValue.value.slice(start)).slice(0, props.maxlength);
      if (newValue.length > 0 && regexp.value && !regexp.value.test(newValue)) return;
      internalValue.value = newValue;
      emit("input", newValue);
      const _start = Math.min(newValue.length, props.maxlength - 1);
      const _end = newValue.length;
      input == null ? void 0 : input.setSelectionRange(_start, _end);
      mirrorSelectionStart.value = _start;
      mirrorSelectionEnd.value = _end;
    }
    const inputProps = useForwardProps(reactiveOmit(props, "containerClass", "value", "pattern", "defaultValue", "pushPasswordManagerStrategy", "noScriptCssFallback", "modelValue"));
    const rootStyle = computed(() => ({
      position: "relative",
      cursor: props.disabled ? "default" : "text",
      userSelect: "none",
      WebkitUserSelect: "none",
      pointerEvents: "none"
    }));
    const inputStyle = computed(() => ({
      position: "absolute",
      inset: 0,
      width: pwmb.willPushPWMBadge.value ? `calc(100% + ${pwmb.PWM_BADGE_SPACE_WIDTH})` : "100%",
      clipPath: pwmb.willPushPWMBadge.value ? `inset(0 ${pwmb.PWM_BADGE_SPACE_WIDTH} 0 0)` : void 0,
      height: "100%",
      display: "flex",
      textAlign: props.textAlign,
      opacity: "1",
      color: "transparent",
      pointerEvents: "all",
      background: "transparent",
      caretColor: "transparent",
      border: "0 solid transparent",
      outline: "0 solid transparent",
      boxShadow: "none",
      lineHeight: "1",
      letterSpacing: "-.5em",
      fontSize: "var(--root-height)",
      fontFamily: "monospace",
      fontVariantNumeric: "tabular-nums"
    }));
    const contextValue = computed(() => {
      return {
        slots: Array.from({ length: Number(props.maxlength) }).map((_, slotIdx) => {
          var _a2;
          const isActive = isFocused.value && mirrorSelectionStart.value !== null && mirrorSelectionEnd.value !== null && (mirrorSelectionStart.value === mirrorSelectionEnd.value && slotIdx === mirrorSelectionStart.value || slotIdx >= mirrorSelectionStart.value && slotIdx < mirrorSelectionEnd.value);
          const char = internalValue.value[slotIdx] !== void 0 ? internalValue.value[slotIdx] : null;
          return {
            char,
            placeholderChar: char ?? ((_a2 = props == null ? void 0 : props.placeholder) == null ? void 0 : _a2[slotIdx]) ?? null,
            isActive,
            hasFakeCaret: isActive && char === null
          };
        }),
        isFocused: isFocused.value,
        isHovering: !props.disabled && isHoveringInput.value
      };
    });
    provide(PublicVueOTPContextKey, contextValue);
    __expose(Object.defineProperty({}, "$el", {
      enumerable: true,
      configurable: true,
      get: () => inputRef
    }));
    return (_ctx, _cache) => {
      var _a2;
      return openBlock(), createElementBlock(Fragment, null, [__props.noScriptCssFallback !== null ? (openBlock(), createBlock(unref(NoSciptCssFallback), {
        key: 0,
        fallback: __props.noScriptCssFallback
      }, null, 8, ["fallback"])) : createCommentVNode("v-if", true), createBaseVNode("div", {
        ref_key: "containerRef",
        ref: containerRef,
        "data-input-otp-container": "",
        style: normalizeStyle(rootStyle.value),
        class: normalizeClass(__props.containerClass)
      }, [renderSlot(_ctx.$slots, "default", {
        slots: contextValue.value.slots,
        isFocused: isFocused.value,
        isHovering: !__props.disabled && isHoveringInput.value
      }), createBaseVNode("div", _hoisted_1$1, [createBaseVNode("input", mergeProps({
        ref_key: "inputRef",
        ref: inputRef,
        value: unref(internalValue),
        "data-input-otp": "",
        "data-input-otp-placeholder-shown": unref(internalValue).length === 0 || void 0,
        "data-input-otp-mss": mirrorSelectionStart.value,
        "data-input-otp-mse": mirrorSelectionEnd.value,
        "aria-placeholder": __props.placeholder,
        style: inputStyle.value,
        pattern: (_a2 = regexp.value) == null ? void 0 : _a2.source
      }, {
        ..._ctx.$attrs,
        ...unref(inputProps)
      }, {
        onBeforeinput: _beforeInputListener,
        onMouseover: _cache[0] || (_cache[0] = (e) => {
          isHoveringInput.value = true;
          emit("mouseover", e);
        }),
        onMouseleave: _cache[1] || (_cache[1] = (e) => {
          isHoveringInput.value = false;
          emit("mouseleave", e);
        }),
        onPaste: _cache[2] || (_cache[2] = (e) => {
          _pasteListener(e);
          emit("paste", e);
        }),
        onInput: _inputListener,
        onFocus: _cache[3] || (_cache[3] = (e) => {
          _focusListener();
          emit("focus", e);
        }),
        onBlur: _cache[4] || (_cache[4] = (e) => {
          isFocused.value = false;
          emit("blur", e);
        })
      }), null, 16, _hoisted_2$1)])], 6)], 64);
    };
  }
});
var OTPInput_default = _sfc_main$3;
function useVueOTPContext() {
  return inject(PublicVueOTPContextKey);
}
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "InputOTP",
  props: {
    maxlength: {},
    textAlign: {},
    inputmode: {},
    containerClass: {},
    pushPasswordManagerStrategy: {},
    noScriptCssFallback: {},
    defaultValue: {},
    pasteTransformer: { type: Function },
    accept: {},
    alt: {},
    autocomplete: {},
    autofocus: { type: Boolean },
    capture: { type: [Boolean, String] },
    checked: { type: [Boolean, Array, Set] },
    crossorigin: {},
    disabled: { type: Boolean },
    enterKeyHint: {},
    form: {},
    formaction: {},
    formenctype: {},
    formmethod: {},
    formnovalidate: { type: Boolean },
    formtarget: {},
    height: {},
    indeterminate: { type: Boolean },
    list: {},
    max: {},
    min: {},
    minlength: {},
    multiple: { type: Boolean },
    name: {},
    pattern: {},
    placeholder: {},
    readonly: { type: Boolean },
    required: { type: Boolean },
    size: {},
    src: {},
    step: {},
    type: {},
    value: {},
    width: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  emits: ["complete", "change", "select", "input", "focus", "blur", "mouseover", "mouseleave", "paste"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const delegatedProps = reactiveOmit(props, "class");
    const forwarded = useForwardPropsEmits(delegatedProps, emits);
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(OTPInput_default), mergeProps(unref(forwarded), {
        "container-class": unref(cn)("flex items-center gap-2 has-disabled:opacity-50", props.class),
        "data-slot": "input-otp",
        class: "disabled:cursor-not-allowed"
      }), {
        default: withCtx((slotProps) => [
          renderSlot(_ctx.$slots, "default", normalizeProps(guardReactiveProps(slotProps)))
        ]),
        _: 3
      }, 16, ["container-class"]);
    };
  }
});
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "InputOTPGroup",
  props: {
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(__props) {
    const props = __props;
    const delegatedProps = reactiveOmit(props, "class");
    const forwarded = useForwardProps(delegatedProps);
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", mergeProps({ "data-slot": "input-otp-group" }, unref(forwarded), {
        class: unref(cn)("flex items-center", props.class)
      }), [
        renderSlot(_ctx.$slots, "default")
      ], 16);
    };
  }
});
const _hoisted_1 = ["data-active"];
const _hoisted_2 = {
  key: 0,
  class: "pointer-events-none absolute inset-0 flex items-center justify-center"
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "InputOTPSlot",
  props: {
    index: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(__props) {
    const props = __props;
    const delegatedProps = reactiveOmit(props, "class");
    const forwarded = useForwardProps(delegatedProps);
    const context = useVueOTPContext();
    const slot = computed(() => context == null ? void 0 : context.value.slots[props.index]);
    return (_ctx, _cache) => {
      var _a, _b, _c;
      return openBlock(), createElementBlock("div", mergeProps(unref(forwarded), {
        "data-slot": "input-otp-slot",
        "data-active": (_a = slot.value) == null ? void 0 : _a.isActive,
        class: unref(cn)("data-[active=true]:border-ring data-[active=true]:ring-ring/50 data-[active=true]:aria-invalid:ring-destructive/20 dark:data-[active=true]:aria-invalid:ring-destructive/40 aria-invalid:border-destructive data-[active=true]:aria-invalid:border-destructive dark:bg-input/30 border-input relative flex h-9 w-9 items-center justify-center border-y border-r text-sm shadow-xs transition-all outline-none first:rounded-l-md first:border-l last:rounded-r-md data-[active=true]:z-10 data-[active=true]:ring-[3px]", props.class)
      }), [
        createTextVNode(toDisplayString((_b = slot.value) == null ? void 0 : _b.char) + " ", 1),
        ((_c = slot.value) == null ? void 0 : _c.hasFakeCaret) ? (openBlock(), createElementBlock("div", _hoisted_2, [..._cache[0] || (_cache[0] = [
          createBaseVNode("div", { class: "animate-caret-blink bg-foreground h-4 w-px duration-1000" }, null, -1)
        ])])) : createCommentVNode("", true)
      ], 16, _hoisted_1);
    };
  }
});
export {
  _sfc_main$2 as _,
  _sfc_main$1 as a,
  _sfc_main as b
};
