import { c as createLucideIcon, Q as queryParams, d as defineComponent, o as openBlock, k as createBlock, e as unref, g as withCtx, b as createVNode, i as createTextVNode, t as toDisplayString, f as createBaseVNode, a as createElementBlock, F as Fragment, r as renderList, m as computed, a$ as useHttp, p as ref, aX as useTemplateRef, B as onMounted, _ as _sfc_main$b, P as resolveDynamicComponent, aI as form_default, l as createCommentVNode, n as normalizeClass, ag as nextTick, aT as useAppearance, b0 as useModel, b1 as useClipboard, w as watch, y as normalizeStyle, b2 as mergeModels, C as onUnmounted, h as head_default, v as _sfc_main$n, T as Transition, b3 as edit$1 } from "./app-U-Wu707C.js";
import { _ as _sfc_main$l } from "./InputError.vue_vue_type_script_setup_true_lang-DT4TW3sY.js";
import { E as EyeOff, _ as _sfc_main$p } from "./PasswordInput.vue_vue_type_script_setup_true_lang-BKr0OoVc.js";
import { _ as _sfc_main$4, a as _sfc_main$5, b as _sfc_main$6 } from "./index-BPhKCCpx.js";
import { _ as _sfc_main$a, a as _sfc_main$c } from "./CardContent.vue_vue_type_script_setup_true_lang-T4Xk2G9g.js";
import { _ as _sfc_main$9 } from "./CardDescription.vue_vue_type_script_setup_true_lang-m_mruJqV.js";
import { _ as _sfc_main$7, a as _sfc_main$8 } from "./CardTitle.vue_vue_type_script_setup_true_lang-DjK7ckh3.js";
import { l as login$1 } from "./index-Bs_N2Lf0.js";
import { E as Eye } from "./eye-CDJpc4P-.js";
import { _ as _sfc_main$d, a as _sfc_main$e, b as _sfc_main$f, c as _sfc_main$g, d as _sfc_main$m } from "./DialogTitle.vue_vue_type_script_setup_true_lang-DNuLu2i_.js";
import { _ as _sfc_main$i, a as _sfc_main$j, b as _sfc_main$k } from "./InputOTPSlot.vue_vue_type_script_setup_true_lang-BD7jSnh7.js";
import { _ as _sfc_main$h } from "./Spinner.vue_vue_type_script_setup_true_lang-38ooJsAU.js";
import { C as Check } from "./check-B04R2KHz.js";
import { C as Copy } from "./copy-BgWKhHFZ.js";
import { _ as _sfc_main$o } from "./Label.vue_vue_type_script_setup_true_lang-BhU3nPQR.js";
import { C as CircleCheck } from "./circle-check-DuM6zutW.js";
import "./Input.vue_vue_type_script_setup_true_lang-qAY1AdtK.js";
/**
 * @license lucide-vue-next v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const CircleAlert = createLucideIcon("CircleAlertIcon", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["line", { x1: "12", x2: "12", y1: "8", y2: "12", key: "1pkeuh" }],
  ["line", { x1: "12", x2: "12.01", y1: "16", y2: "16", key: "4dfq90" }]
]);
/**
 * @license lucide-vue-next v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const LockKeyhole = createLucideIcon("LockKeyholeIcon", [
  ["circle", { cx: "12", cy: "16", r: "1", key: "1au0dj" }],
  ["rect", { x: "3", y: "10", width: "18", height: "12", rx: "2", key: "6s8ecr" }],
  ["path", { d: "M7 10V7a5 5 0 0 1 10 0v3", key: "1pqi11" }]
]);
/**
 * @license lucide-vue-next v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const RefreshCw = createLucideIcon("RefreshCwIcon", [
  ["path", { d: "M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8", key: "v9h5vc" }],
  ["path", { d: "M21 3v5h-5", key: "1q7to0" }],
  ["path", { d: "M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16", key: "3uifl3" }],
  ["path", { d: "M8 16H3v5", key: "1cv678" }]
]);
/**
 * @license lucide-vue-next v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ScanLine = createLucideIcon("ScanLineIcon", [
  ["path", { d: "M3 7V5a2 2 0 0 1 2-2h2", key: "aa7l1z" }],
  ["path", { d: "M17 3h2a2 2 0 0 1 2 2v2", key: "4qcy5o" }],
  ["path", { d: "M21 17v2a2 2 0 0 1-2 2h-2", key: "6vwrx8" }],
  ["path", { d: "M7 21H5a2 2 0 0 1-2-2v-2", key: "ioqczr" }],
  ["path", { d: "M7 12h10", key: "b7w52i" }]
]);
/**
 * @license lucide-vue-next v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ShieldCheck = createLucideIcon("ShieldCheckIcon", [
  [
    "path",
    {
      d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
      key: "oel41y"
    }
  ],
  ["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }]
]);
const edit = (options) => ({
  url: edit.url(options),
  method: "get"
});
edit.definition = {
  methods: ["get", "head"],
  url: "/settings/security"
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
  method: "put"
});
update.definition = {
  methods: ["put"],
  url: "/settings/password"
};
update.url = (options) => {
  return update.definition.url + queryParams(options);
};
update.put = (options) => ({
  url: update.url(options),
  method: "put"
});
const updateForm = (options) => ({
  action: update.url({
    [(options == null ? void 0 : options.mergeQuery) ? "mergeQuery" : "query"]: {
      _method: "PUT",
      ...(options == null ? void 0 : options.query) ?? (options == null ? void 0 : options.mergeQuery) ?? {}
    }
  }),
  method: "post"
});
updateForm.put = (options) => ({
  action: update.url({
    [(options == null ? void 0 : options.mergeQuery) ? "mergeQuery" : "query"]: {
      _method: "PUT",
      ...(options == null ? void 0 : options.query) ?? (options == null ? void 0 : options.mergeQuery) ?? {}
    }
  }),
  method: "post"
});
update.form = updateForm;
const _hoisted_1$3 = { class: "list-inside list-disc text-sm" };
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "AlertError",
  props: {
    errors: {},
    title: { default: "Something went wrong." }
  },
  setup(__props) {
    const props = __props;
    const uniqueErrors = computed(() => Array.from(new Set(props.errors)));
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(_sfc_main$4), { variant: "destructive" }, {
        default: withCtx(() => [
          createVNode(unref(CircleAlert), { class: "size-4" }),
          createVNode(unref(_sfc_main$5), null, {
            default: withCtx(() => [
              createTextVNode(toDisplayString(__props.title), 1)
            ]),
            _: 1
          }),
          createVNode(unref(_sfc_main$6), null, {
            default: withCtx(() => [
              createBaseVNode("ul", _hoisted_1$3, [
                (openBlock(true), createElementBlock(Fragment, null, renderList(uniqueErrors.value, (error, index) => {
                  return openBlock(), createElementBlock("li", { key: index }, toDisplayString(error), 1);
                }), 128))
              ])
            ]),
            _: 1
          })
        ]),
        _: 1
      });
    };
  }
});
const login = (options) => ({
  url: login.url(options),
  method: "get"
});
login.definition = {
  methods: ["get", "head"],
  url: "/two-factor-challenge"
};
login.url = (options) => {
  return login.definition.url + queryParams(options);
};
login.get = (options) => ({
  url: login.url(options),
  method: "get"
});
login.head = (options) => ({
  url: login.url(options),
  method: "head"
});
const loginForm = (options) => ({
  action: login.url(options),
  method: "get"
});
loginForm.get = (options) => ({
  action: login.url(options),
  method: "get"
});
loginForm.head = (options) => ({
  action: login.url({
    [(options == null ? void 0 : options.mergeQuery) ? "mergeQuery" : "query"]: {
      _method: "HEAD",
      ...(options == null ? void 0 : options.query) ?? (options == null ? void 0 : options.mergeQuery) ?? {}
    }
  }),
  method: "get"
});
login.form = loginForm;
const enable = (options) => ({
  url: enable.url(options),
  method: "post"
});
enable.definition = {
  methods: ["post"],
  url: "/user/two-factor-authentication"
};
enable.url = (options) => {
  return enable.definition.url + queryParams(options);
};
enable.post = (options) => ({
  url: enable.url(options),
  method: "post"
});
const enableForm = (options) => ({
  action: enable.url(options),
  method: "post"
});
enableForm.post = (options) => ({
  action: enable.url(options),
  method: "post"
});
enable.form = enableForm;
const confirm = (options) => ({
  url: confirm.url(options),
  method: "post"
});
confirm.definition = {
  methods: ["post"],
  url: "/user/confirmed-two-factor-authentication"
};
confirm.url = (options) => {
  return confirm.definition.url + queryParams(options);
};
confirm.post = (options) => ({
  url: confirm.url(options),
  method: "post"
});
const confirmForm = (options) => ({
  action: confirm.url(options),
  method: "post"
});
confirmForm.post = (options) => ({
  action: confirm.url(options),
  method: "post"
});
confirm.form = confirmForm;
const disable = (options) => ({
  url: disable.url(options),
  method: "delete"
});
disable.definition = {
  methods: ["delete"],
  url: "/user/two-factor-authentication"
};
disable.url = (options) => {
  return disable.definition.url + queryParams(options);
};
disable.delete = (options) => ({
  url: disable.url(options),
  method: "delete"
});
const disableForm = (options) => ({
  action: disable.url({
    [(options == null ? void 0 : options.mergeQuery) ? "mergeQuery" : "query"]: {
      _method: "DELETE",
      ...(options == null ? void 0 : options.query) ?? (options == null ? void 0 : options.mergeQuery) ?? {}
    }
  }),
  method: "post"
});
disableForm.delete = (options) => ({
  action: disable.url({
    [(options == null ? void 0 : options.mergeQuery) ? "mergeQuery" : "query"]: {
      _method: "DELETE",
      ...(options == null ? void 0 : options.query) ?? (options == null ? void 0 : options.mergeQuery) ?? {}
    }
  }),
  method: "post"
});
disable.form = disableForm;
const qrCode = (options) => ({
  url: qrCode.url(options),
  method: "get"
});
qrCode.definition = {
  methods: ["get", "head"],
  url: "/user/two-factor-qr-code"
};
qrCode.url = (options) => {
  return qrCode.definition.url + queryParams(options);
};
qrCode.get = (options) => ({
  url: qrCode.url(options),
  method: "get"
});
qrCode.head = (options) => ({
  url: qrCode.url(options),
  method: "head"
});
const qrCodeForm = (options) => ({
  action: qrCode.url(options),
  method: "get"
});
qrCodeForm.get = (options) => ({
  action: qrCode.url(options),
  method: "get"
});
qrCodeForm.head = (options) => ({
  action: qrCode.url({
    [(options == null ? void 0 : options.mergeQuery) ? "mergeQuery" : "query"]: {
      _method: "HEAD",
      ...(options == null ? void 0 : options.query) ?? (options == null ? void 0 : options.mergeQuery) ?? {}
    }
  }),
  method: "get"
});
qrCode.form = qrCodeForm;
const secretKey = (options) => ({
  url: secretKey.url(options),
  method: "get"
});
secretKey.definition = {
  methods: ["get", "head"],
  url: "/user/two-factor-secret-key"
};
secretKey.url = (options) => {
  return secretKey.definition.url + queryParams(options);
};
secretKey.get = (options) => ({
  url: secretKey.url(options),
  method: "get"
});
secretKey.head = (options) => ({
  url: secretKey.url(options),
  method: "head"
});
const secretKeyForm = (options) => ({
  action: secretKey.url(options),
  method: "get"
});
secretKeyForm.get = (options) => ({
  action: secretKey.url(options),
  method: "get"
});
secretKeyForm.head = (options) => ({
  action: secretKey.url({
    [(options == null ? void 0 : options.mergeQuery) ? "mergeQuery" : "query"]: {
      _method: "HEAD",
      ...(options == null ? void 0 : options.query) ?? (options == null ? void 0 : options.mergeQuery) ?? {}
    }
  }),
  method: "get"
});
secretKey.form = secretKeyForm;
const recoveryCodes = (options) => ({
  url: recoveryCodes.url(options),
  method: "get"
});
recoveryCodes.definition = {
  methods: ["get", "head"],
  url: "/user/two-factor-recovery-codes"
};
recoveryCodes.url = (options) => {
  return recoveryCodes.definition.url + queryParams(options);
};
recoveryCodes.get = (options) => ({
  url: recoveryCodes.url(options),
  method: "get"
});
recoveryCodes.head = (options) => ({
  url: recoveryCodes.url(options),
  method: "head"
});
const recoveryCodesForm = (options) => ({
  action: recoveryCodes.url(options),
  method: "get"
});
recoveryCodesForm.get = (options) => ({
  action: recoveryCodes.url(options),
  method: "get"
});
recoveryCodesForm.head = (options) => ({
  action: recoveryCodes.url({
    [(options == null ? void 0 : options.mergeQuery) ? "mergeQuery" : "query"]: {
      _method: "HEAD",
      ...(options == null ? void 0 : options.query) ?? (options == null ? void 0 : options.mergeQuery) ?? {}
    }
  }),
  method: "get"
});
recoveryCodes.form = recoveryCodesForm;
const regenerateRecoveryCodes = (options) => ({
  url: regenerateRecoveryCodes.url(options),
  method: "post"
});
regenerateRecoveryCodes.definition = {
  methods: ["post"],
  url: "/user/two-factor-recovery-codes"
};
regenerateRecoveryCodes.url = (options) => {
  return regenerateRecoveryCodes.definition.url + queryParams(options);
};
regenerateRecoveryCodes.post = (options) => ({
  url: regenerateRecoveryCodes.url(options),
  method: "post"
});
const regenerateRecoveryCodesForm = (options) => ({
  action: regenerateRecoveryCodes.url(options),
  method: "post"
});
regenerateRecoveryCodesForm.post = (options) => ({
  action: regenerateRecoveryCodes.url(options),
  method: "post"
});
regenerateRecoveryCodes.form = regenerateRecoveryCodesForm;
({
  login: Object.assign(login, login$1),
  enable: Object.assign(enable, enable),
  confirm: Object.assign(confirm, confirm),
  disable: Object.assign(disable, disable),
  qrCode: Object.assign(qrCode, qrCode),
  secretKey: Object.assign(secretKey, secretKey),
  recoveryCodes: Object.assign(recoveryCodes, recoveryCodes),
  regenerateRecoveryCodes: Object.assign(regenerateRecoveryCodes, regenerateRecoveryCodes)
});
const errors = ref([]);
const manualSetupKey = ref(null);
const qrCodeSvg = ref(null);
const recoveryCodesList = ref([]);
const hasSetupData = computed(
  () => qrCodeSvg.value !== null && manualSetupKey.value !== null
);
const useTwoFactorAuth = () => {
  const http = useHttp();
  const fetchQrCode = async () => {
    try {
      const { svg } = await http.submit(qrCode());
      qrCodeSvg.value = svg;
    } catch {
      errors.value.push("Failed to fetch QR code");
      qrCodeSvg.value = null;
    }
  };
  const fetchSetupKey = async () => {
    try {
      const { secretKey: key } = await http.submit(secretKey());
      manualSetupKey.value = key;
    } catch {
      errors.value.push("Failed to fetch a setup key");
      manualSetupKey.value = null;
    }
  };
  const clearSetupData = () => {
    manualSetupKey.value = null;
    qrCodeSvg.value = null;
    clearErrors();
  };
  const clearErrors = () => {
    errors.value = [];
  };
  const clearTwoFactorAuthData = () => {
    clearSetupData();
    clearErrors();
    recoveryCodesList.value = [];
  };
  const fetchRecoveryCodes = async () => {
    try {
      clearErrors();
      recoveryCodesList.value = await http.submit(
        recoveryCodes()
      );
    } catch {
      errors.value.push("Failed to fetch recovery codes");
      recoveryCodesList.value = [];
    }
  };
  const fetchSetupData = async () => {
    try {
      clearErrors();
      await Promise.all([fetchQrCode(), fetchSetupKey()]);
    } catch {
      qrCodeSvg.value = null;
      manualSetupKey.value = null;
    }
  };
  return {
    qrCodeSvg,
    manualSetupKey,
    recoveryCodesList,
    errors,
    hasSetupData,
    clearSetupData,
    clearErrors,
    clearTwoFactorAuthData,
    fetchQrCode,
    fetchSetupKey,
    fetchSetupData,
    fetchRecoveryCodes
  };
};
const _hoisted_1$2 = { class: "flex flex-col gap-3 select-none sm:flex-row sm:items-center sm:justify-between" };
const _hoisted_2$2 = {
  key: 0,
  class: "mt-6"
};
const _hoisted_3$2 = {
  key: 1,
  class: "mt-3 space-y-3"
};
const _hoisted_4$2 = {
  key: 0,
  class: "space-y-2"
};
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "TwoFactorRecoveryCodes",
  setup(__props) {
    const { recoveryCodesList: recoveryCodesList2, fetchRecoveryCodes, errors: errors2 } = useTwoFactorAuth();
    const isRecoveryCodesVisible = ref(false);
    const recoveryCodeSectionRef = useTemplateRef("recoveryCodeSectionRef");
    const toggleRecoveryCodesVisibility = async () => {
      var _a;
      if (!isRecoveryCodesVisible.value && !recoveryCodesList2.value.length) {
        await fetchRecoveryCodes();
      }
      isRecoveryCodesVisible.value = !isRecoveryCodesVisible.value;
      if (isRecoveryCodesVisible.value) {
        await nextTick();
        (_a = recoveryCodeSectionRef.value) == null ? void 0 : _a.scrollIntoView({ behavior: "smooth" });
      }
    };
    onMounted(async () => {
      if (!recoveryCodesList2.value.length) {
        await fetchRecoveryCodes();
      }
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(_sfc_main$c), { class: "w-full" }, {
        default: withCtx(() => [
          createVNode(unref(_sfc_main$7), null, {
            default: withCtx(() => [
              createVNode(unref(_sfc_main$8), { class: "flex gap-3" }, {
                default: withCtx(() => [
                  createVNode(unref(LockKeyhole), { class: "size-4" }),
                  _cache[0] || (_cache[0] = createTextVNode("2FA recovery codes ", -1))
                ]),
                _: 1
              }),
              createVNode(unref(_sfc_main$9), null, {
                default: withCtx(() => [..._cache[1] || (_cache[1] = [
                  createTextVNode(" Recovery codes let you regain access if you lose your 2FA device. Store them in a secure password manager. ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          }),
          createVNode(unref(_sfc_main$a), null, {
            default: withCtx(() => {
              var _a;
              return [
                createBaseVNode("div", _hoisted_1$2, [
                  createVNode(unref(_sfc_main$b), {
                    onClick: toggleRecoveryCodesVisibility,
                    class: "w-fit"
                  }, {
                    default: withCtx(() => [
                      (openBlock(), createBlock(resolveDynamicComponent(isRecoveryCodesVisible.value ? unref(EyeOff) : unref(Eye)), { class: "size-4" })),
                      createTextVNode(" " + toDisplayString(isRecoveryCodesVisible.value ? "Hide" : "View") + " recovery codes ", 1)
                    ]),
                    _: 1
                  }),
                  isRecoveryCodesVisible.value && unref(recoveryCodesList2).length ? (openBlock(), createBlock(unref(form_default), {
                    key: 0,
                    action: unref(regenerateRecoveryCodes).url(),
                    method: "post",
                    options: { preserveScroll: true },
                    onSuccess: unref(fetchRecoveryCodes)
                  }, {
                    default: withCtx(({ processing }) => [
                      createVNode(unref(_sfc_main$b), {
                        variant: "secondary",
                        type: "submit",
                        disabled: processing
                      }, {
                        default: withCtx(() => [
                          createVNode(unref(RefreshCw)),
                          _cache[2] || (_cache[2] = createTextVNode(" Regenerate codes ", -1))
                        ]),
                        _: 1
                      }, 8, ["disabled"])
                    ]),
                    _: 1
                  }, 8, ["action", "onSuccess"])) : createCommentVNode("", true)
                ]),
                createBaseVNode("div", {
                  class: normalizeClass([
                    "relative overflow-hidden transition-all duration-300",
                    isRecoveryCodesVisible.value ? "h-auto opacity-100" : "h-0 opacity-0"
                  ])
                }, [
                  ((_a = unref(errors2)) == null ? void 0 : _a.length) ? (openBlock(), createElementBlock("div", _hoisted_2$2, [
                    createVNode(_sfc_main$3, { errors: unref(errors2) }, null, 8, ["errors"])
                  ])) : (openBlock(), createElementBlock("div", _hoisted_3$2, [
                    createBaseVNode("div", {
                      ref_key: "recoveryCodeSectionRef",
                      ref: recoveryCodeSectionRef,
                      class: "grid gap-1 rounded-lg bg-muted p-4 font-mono text-sm"
                    }, [
                      !unref(recoveryCodesList2).length ? (openBlock(), createElementBlock("div", _hoisted_4$2, [
                        (openBlock(), createElementBlock(Fragment, null, renderList(8, (n) => {
                          return createBaseVNode("div", {
                            key: n,
                            class: "h-4 animate-pulse rounded bg-muted-foreground/20"
                          });
                        }), 64))
                      ])) : (openBlock(true), createElementBlock(Fragment, { key: 1 }, renderList(unref(recoveryCodesList2), (code, index) => {
                        return openBlock(), createElementBlock("div", { key: index }, toDisplayString(code), 1);
                      }), 128))
                    ], 512),
                    _cache[3] || (_cache[3] = createBaseVNode("p", { class: "text-xs text-muted-foreground select-none" }, [
                      createTextVNode(" Each recovery code can be used once to access your account and will be removed after use. If you need more, click "),
                      createBaseVNode("span", { class: "font-bold" }, "Regenerate codes"),
                      createTextVNode(" above. ")
                    ], -1))
                  ]))
                ], 2)
              ];
            }),
            _: 1
          })
        ]),
        _: 1
      });
    };
  }
});
const _hoisted_1$1 = { class: "mb-3 w-auto rounded-full border border-border bg-card p-0.5 shadow-sm" };
const _hoisted_2$1 = { class: "relative overflow-hidden rounded-full border border-border bg-muted p-2.5" };
const _hoisted_3$1 = { class: "absolute inset-0 grid grid-cols-5 opacity-50" };
const _hoisted_4$1 = { class: "absolute inset-0 grid grid-rows-5 opacity-50" };
const _hoisted_5$1 = { class: "relative flex w-auto flex-col items-center justify-center space-y-5" };
const _hoisted_6$1 = { class: "relative mx-auto flex max-w-md items-center overflow-hidden" };
const _hoisted_7$1 = { class: "relative mx-auto aspect-square w-64 overflow-hidden rounded-lg border border-border" };
const _hoisted_8$1 = {
  key: 0,
  class: "absolute inset-0 z-10 flex aspect-square h-auto w-full animate-pulse items-center justify-center bg-background"
};
const _hoisted_9$1 = {
  key: 1,
  class: "relative z-10 overflow-hidden border p-5"
};
const _hoisted_10$1 = ["innerHTML"];
const _hoisted_11 = { class: "flex w-full items-center space-x-5" };
const _hoisted_12 = { class: "flex w-full items-center justify-center space-x-2" };
const _hoisted_13 = { class: "flex w-full items-stretch overflow-hidden rounded-xl border border-border" };
const _hoisted_14 = {
  key: 0,
  class: "flex h-full w-full items-center justify-center bg-muted p-3"
};
const _hoisted_15 = ["value"];
const _hoisted_16 = ["value"];
const _hoisted_17 = { class: "flex w-full flex-col items-center justify-center space-y-3 py-2" };
const _hoisted_18 = { class: "flex w-full items-center space-x-5" };
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "TwoFactorSetupModal",
  props: /* @__PURE__ */ mergeModels({
    requiresConfirmation: { type: Boolean },
    twoFactorEnabled: { type: Boolean }
  }, {
    "isOpen": { type: Boolean },
    "isOpenModifiers": {}
  }),
  emits: ["update:isOpen"],
  setup(__props) {
    const { resolvedAppearance } = useAppearance();
    const props = __props;
    const isOpen = useModel(__props, "isOpen");
    const { copy, copied } = useClipboard();
    const { qrCodeSvg: qrCodeSvg2, manualSetupKey: manualSetupKey2, clearSetupData, fetchSetupData, errors: errors2 } = useTwoFactorAuth();
    const showVerificationStep = ref(false);
    const code = ref("");
    const pinInputContainerRef = useTemplateRef("pinInputContainerRef");
    const modalConfig = computed(() => {
      if (props.twoFactorEnabled) {
        return {
          title: "Two-factor authentication enabled",
          description: "Two-factor authentication is now enabled. Scan the QR code or enter the setup key in your authenticator app.",
          buttonText: "Close"
        };
      }
      if (showVerificationStep.value) {
        return {
          title: "Verify authentication code",
          description: "Enter the 6-digit code from your authenticator app",
          buttonText: "Continue"
        };
      }
      return {
        title: "Enable two-factor authentication",
        description: "To finish enabling two-factor authentication, scan the QR code or enter the setup key in your authenticator app",
        buttonText: "Continue"
      };
    });
    const handleModalNextStep = () => {
      if (props.requiresConfirmation) {
        showVerificationStep.value = true;
        nextTick(() => {
          var _a, _b;
          (_b = (_a = pinInputContainerRef.value) == null ? void 0 : _a.querySelector("input")) == null ? void 0 : _b.focus();
        });
        return;
      }
      clearSetupData();
      isOpen.value = false;
    };
    const resetModalState = () => {
      if (props.twoFactorEnabled) {
        clearSetupData();
      }
      showVerificationStep.value = false;
      code.value = "";
    };
    watch(
      () => isOpen.value,
      async (isOpen2) => {
        if (!isOpen2) {
          resetModalState();
          return;
        }
        if (!qrCodeSvg2.value) {
          await fetchSetupData();
        }
      }
    );
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(_sfc_main$m), {
        open: isOpen.value,
        "onUpdate:open": _cache[5] || (_cache[5] = ($event) => isOpen.value = $event)
      }, {
        default: withCtx(() => [
          createVNode(unref(_sfc_main$d), { class: "sm:max-w-md" }, {
            default: withCtx(() => {
              var _a;
              return [
                createVNode(unref(_sfc_main$e), { class: "flex items-center justify-center" }, {
                  default: withCtx(() => [
                    createBaseVNode("div", _hoisted_1$1, [
                      createBaseVNode("div", _hoisted_2$1, [
                        createBaseVNode("div", _hoisted_3$1, [
                          (openBlock(), createElementBlock(Fragment, null, renderList(5, (i) => {
                            return createBaseVNode("div", {
                              key: `col-${i}`,
                              class: "border-r border-border last:border-r-0"
                            });
                          }), 64))
                        ]),
                        createBaseVNode("div", _hoisted_4$1, [
                          (openBlock(), createElementBlock(Fragment, null, renderList(5, (i) => {
                            return createBaseVNode("div", {
                              key: `row-${i}`,
                              class: "border-b border-border last:border-b-0"
                            });
                          }), 64))
                        ]),
                        createVNode(unref(ScanLine), { class: "relative z-20 size-6 text-foreground" })
                      ])
                    ]),
                    createVNode(unref(_sfc_main$f), null, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(modalConfig.value.title), 1)
                      ]),
                      _: 1
                    }),
                    createVNode(unref(_sfc_main$g), { class: "text-center" }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(modalConfig.value.description), 1)
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }),
                createBaseVNode("div", _hoisted_5$1, [
                  !showVerificationStep.value ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
                    ((_a = unref(errors2)) == null ? void 0 : _a.length) ? (openBlock(), createBlock(_sfc_main$3, {
                      key: 0,
                      errors: unref(errors2)
                    }, null, 8, ["errors"])) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
                      createBaseVNode("div", _hoisted_6$1, [
                        createBaseVNode("div", _hoisted_7$1, [
                          !unref(qrCodeSvg2) ? (openBlock(), createElementBlock("div", _hoisted_8$1, [
                            createVNode(unref(_sfc_main$h), { class: "size-6" })
                          ])) : (openBlock(), createElementBlock("div", _hoisted_9$1, [
                            createBaseVNode("div", {
                              innerHTML: unref(qrCodeSvg2),
                              class: "flex aspect-square size-full items-center justify-center",
                              style: normalizeStyle({
                                filter: unref(resolvedAppearance) === "dark" ? "invert(1) brightness(1.5)" : void 0
                              })
                            }, null, 12, _hoisted_10$1)
                          ]))
                        ])
                      ]),
                      createBaseVNode("div", _hoisted_11, [
                        createVNode(unref(_sfc_main$b), {
                          class: "w-full",
                          onClick: handleModalNextStep
                        }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(modalConfig.value.buttonText), 1)
                          ]),
                          _: 1
                        })
                      ]),
                      _cache[6] || (_cache[6] = createBaseVNode("div", { class: "relative flex w-full items-center justify-center" }, [
                        createBaseVNode("div", { class: "absolute inset-0 top-1/2 h-px w-full bg-border" }),
                        createBaseVNode("span", { class: "relative bg-card px-2 py-1" }, "or, enter the code manually")
                      ], -1)),
                      createBaseVNode("div", _hoisted_12, [
                        createBaseVNode("div", _hoisted_13, [
                          !unref(manualSetupKey2) ? (openBlock(), createElementBlock("div", _hoisted_14, [
                            createVNode(unref(_sfc_main$h))
                          ])) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
                            createBaseVNode("input", {
                              type: "text",
                              readonly: "",
                              value: unref(manualSetupKey2),
                              class: "h-full w-full bg-background p-3 text-foreground"
                            }, null, 8, _hoisted_15),
                            createBaseVNode("button", {
                              onClick: _cache[0] || (_cache[0] = ($event) => unref(copy)(unref(manualSetupKey2) || "")),
                              class: "relative block h-auto border-l border-border px-3 hover:bg-muted"
                            }, [
                              unref(copied) ? (openBlock(), createBlock(unref(Check), {
                                key: 0,
                                class: "w-4 text-green-500"
                              })) : (openBlock(), createBlock(unref(Copy), {
                                key: 1,
                                class: "w-4"
                              }))
                            ])
                          ], 64))
                        ])
                      ])
                    ], 64))
                  ], 64)) : (openBlock(), createBlock(unref(form_default), {
                    key: 1,
                    action: unref(confirm).url(),
                    method: "post",
                    "error-bag": "confirmTwoFactorAuthentication",
                    "reset-on-error": "",
                    onFinish: _cache[3] || (_cache[3] = ($event) => code.value = ""),
                    onSuccess: _cache[4] || (_cache[4] = ($event) => isOpen.value = false)
                  }, {
                    default: withCtx(({ errors: errors22, processing }) => [
                      createBaseVNode("input", {
                        type: "hidden",
                        name: "code",
                        value: code.value
                      }, null, 8, _hoisted_16),
                      createBaseVNode("div", {
                        ref_key: "pinInputContainerRef",
                        ref: pinInputContainerRef,
                        class: "relative w-full space-y-3"
                      }, [
                        createBaseVNode("div", _hoisted_17, [
                          createVNode(unref(_sfc_main$i), {
                            id: "otp",
                            modelValue: code.value,
                            "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => code.value = $event),
                            maxlength: 6,
                            disabled: processing
                          }, {
                            default: withCtx(() => [
                              createVNode(unref(_sfc_main$j), null, {
                                default: withCtx(() => [
                                  (openBlock(), createElementBlock(Fragment, null, renderList(6, (index) => {
                                    return createVNode(unref(_sfc_main$k), {
                                      key: index,
                                      index: index - 1
                                    }, null, 8, ["index"]);
                                  }), 64))
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }, 8, ["modelValue", "disabled"]),
                          createVNode(_sfc_main$l, {
                            message: errors22 == null ? void 0 : errors22.code
                          }, null, 8, ["message"])
                        ]),
                        createBaseVNode("div", _hoisted_18, [
                          createVNode(unref(_sfc_main$b), {
                            type: "button",
                            variant: "outline",
                            class: "w-auto flex-1",
                            onClick: _cache[2] || (_cache[2] = ($event) => showVerificationStep.value = false),
                            disabled: processing
                          }, {
                            default: withCtx(() => [..._cache[7] || (_cache[7] = [
                              createTextVNode(" Back ", -1)
                            ])]),
                            _: 1
                          }, 8, ["disabled"]),
                          createVNode(unref(_sfc_main$b), {
                            type: "submit",
                            class: "w-auto flex-1",
                            disabled: processing || code.value.length < 6
                          }, {
                            default: withCtx(() => [..._cache[8] || (_cache[8] = [
                              createTextVNode(" Confirm ", -1)
                            ])]),
                            _: 1
                          }, 8, ["disabled"])
                        ])
                      ], 512)
                    ]),
                    _: 1
                  }, 8, ["action"]))
                ])
              ];
            }),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["open"]);
    };
  }
});
const _hoisted_1 = { class: "space-y-6" };
const _hoisted_2 = { class: "grid gap-2" };
const _hoisted_3 = { class: "grid gap-2" };
const _hoisted_4 = { class: "grid gap-2" };
const _hoisted_5 = { class: "flex items-center gap-3 pt-1" };
const _hoisted_6 = {
  key: 0,
  class: "flex items-center gap-1.5 text-sm text-green-600 dark:text-green-400"
};
const _hoisted_7 = {
  key: 0,
  class: "space-y-6"
};
const _hoisted_8 = {
  key: 0,
  class: "flex flex-col items-start gap-4"
};
const _hoisted_9 = {
  key: 1,
  class: "flex flex-col items-start gap-4"
};
const _hoisted_10 = { class: "flex items-center gap-2 rounded-lg bg-green-50 px-3 py-2 text-sm font-medium text-green-700 dark:bg-green-900/20 dark:text-green-400" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...{
    layout: {
      breadcrumbs: [
        {
          title: "Security settings",
          href: edit$1()
        }
      ]
    }
  },
  __name: "Security",
  props: {
    canManageTwoFactor: { type: Boolean, default: false },
    requiresConfirmation: { type: Boolean, default: false },
    twoFactorEnabled: { type: Boolean, default: false }
  },
  setup(__props) {
    const { hasSetupData: hasSetupData2, clearTwoFactorAuthData } = useTwoFactorAuth();
    const showSetupModal = ref(false);
    onUnmounted(() => clearTwoFactorAuthData());
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(Fragment, null, [
        createVNode(unref(head_default), { title: "Security settings" }),
        _cache[14] || (_cache[14] = createBaseVNode("h1", { class: "sr-only" }, "Security settings", -1)),
        createBaseVNode("div", _hoisted_1, [
          createVNode(_sfc_main$n, {
            variant: "small",
            title: "Update password",
            description: "Ensure your account is using a long, random password to stay secure"
          }),
          createVNode(unref(_sfc_main$c), null, {
            default: withCtx(() => [
              createVNode(unref(_sfc_main$a), { class: "pt-6" }, {
                default: withCtx(() => [
                  createVNode(unref(form_default), {
                    action: unref(update).url(),
                    method: "patch",
                    options: { preserveScroll: true },
                    "reset-on-success": "",
                    "reset-on-error": ["password", "password_confirmation", "current_password"],
                    class: "space-y-5"
                  }, {
                    default: withCtx(({ errors: errors2, processing, recentlySuccessful }) => [
                      createBaseVNode("div", _hoisted_2, [
                        createVNode(unref(_sfc_main$o), { for: "current_password" }, {
                          default: withCtx(() => [..._cache[3] || (_cache[3] = [
                            createTextVNode("Current password", -1)
                          ])]),
                          _: 1
                        }),
                        createVNode(_sfc_main$p, {
                          id: "current_password",
                          name: "current_password",
                          autocomplete: "current-password",
                          placeholder: "Current password"
                        }),
                        createVNode(_sfc_main$l, {
                          message: errors2.current_password
                        }, null, 8, ["message"])
                      ]),
                      createBaseVNode("div", _hoisted_3, [
                        createVNode(unref(_sfc_main$o), { for: "password" }, {
                          default: withCtx(() => [..._cache[4] || (_cache[4] = [
                            createTextVNode("New password", -1)
                          ])]),
                          _: 1
                        }),
                        createVNode(_sfc_main$p, {
                          id: "password",
                          name: "password",
                          autocomplete: "new-password",
                          placeholder: "New password"
                        }),
                        createVNode(_sfc_main$l, {
                          message: errors2.password
                        }, null, 8, ["message"])
                      ]),
                      createBaseVNode("div", _hoisted_4, [
                        createVNode(unref(_sfc_main$o), { for: "password_confirmation" }, {
                          default: withCtx(() => [..._cache[5] || (_cache[5] = [
                            createTextVNode("Confirm password", -1)
                          ])]),
                          _: 1
                        }),
                        createVNode(_sfc_main$p, {
                          id: "password_confirmation",
                          name: "password_confirmation",
                          autocomplete: "new-password",
                          placeholder: "Confirm password"
                        }),
                        createVNode(_sfc_main$l, {
                          message: errors2.password_confirmation
                        }, null, 8, ["message"])
                      ]),
                      createBaseVNode("div", _hoisted_5, [
                        createVNode(unref(_sfc_main$b), {
                          disabled: processing,
                          "data-test": "update-password-button"
                        }, {
                          default: withCtx(() => [..._cache[6] || (_cache[6] = [
                            createTextVNode(" Update password ", -1)
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
                            recentlySuccessful ? (openBlock(), createElementBlock("span", _hoisted_6, [
                              createVNode(unref(CircleCheck), { class: "size-4" }),
                              _cache[7] || (_cache[7] = createTextVNode(" Password updated ", -1))
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
        __props.canManageTwoFactor ? (openBlock(), createElementBlock("div", _hoisted_7, [
          createVNode(_sfc_main$n, {
            variant: "small",
            title: "Two-factor authentication",
            description: "Add an extra layer of security to your account"
          }),
          createVNode(unref(_sfc_main$c), null, {
            default: withCtx(() => [
              createVNode(unref(_sfc_main$a), { class: "pt-6" }, {
                default: withCtx(() => [
                  !__props.twoFactorEnabled ? (openBlock(), createElementBlock("div", _hoisted_8, [
                    _cache[10] || (_cache[10] = createBaseVNode("p", { class: "text-sm text-muted-foreground" }, " When you enable two-factor authentication, you will be prompted for a secure pin during login. This pin can be retrieved from a TOTP-supported application on your phone. ", -1)),
                    unref(hasSetupData2) ? (openBlock(), createBlock(unref(_sfc_main$b), {
                      key: 0,
                      onClick: _cache[0] || (_cache[0] = ($event) => showSetupModal.value = true)
                    }, {
                      default: withCtx(() => [
                        createVNode(unref(ShieldCheck), { class: "size-4" }),
                        _cache[8] || (_cache[8] = createTextVNode(" Continue setup ", -1))
                      ]),
                      _: 1
                    })) : (openBlock(), createBlock(unref(form_default), {
                      key: 1,
                      action: unref(enable).url(),
                      method: "post",
                      onSuccess: _cache[1] || (_cache[1] = ($event) => showSetupModal.value = true)
                    }, {
                      default: withCtx(({ processing }) => [
                        createVNode(unref(_sfc_main$b), {
                          type: "submit",
                          disabled: processing
                        }, {
                          default: withCtx(() => [..._cache[9] || (_cache[9] = [
                            createTextVNode(" Enable 2FA ", -1)
                          ])]),
                          _: 1
                        }, 8, ["disabled"])
                      ]),
                      _: 1
                    }, 8, ["action"]))
                  ])) : (openBlock(), createElementBlock("div", _hoisted_9, [
                    createBaseVNode("div", _hoisted_10, [
                      createVNode(unref(CircleCheck), { class: "size-4 shrink-0" }),
                      _cache[11] || (_cache[11] = createTextVNode(" Two-factor authentication is enabled ", -1))
                    ]),
                    _cache[13] || (_cache[13] = createBaseVNode("p", { class: "text-sm text-muted-foreground" }, " You will be prompted for a secure, random pin during login, which you can retrieve from the TOTP-supported application on your phone. ", -1)),
                    createVNode(unref(form_default), {
                      action: unref(disable).url(),
                      method: "post"
                    }, {
                      default: withCtx(({ processing }) => [
                        createVNode(unref(_sfc_main$b), {
                          variant: "destructive",
                          type: "submit",
                          disabled: processing
                        }, {
                          default: withCtx(() => [..._cache[12] || (_cache[12] = [
                            createTextVNode(" Disable 2FA ", -1)
                          ])]),
                          _: 1
                        }, 8, ["disabled"])
                      ]),
                      _: 1
                    }, 8, ["action"]),
                    createVNode(_sfc_main$2)
                  ]))
                ]),
                _: 1
              })
            ]),
            _: 1
          }),
          createVNode(_sfc_main$1, {
            isOpen: showSetupModal.value,
            "onUpdate:isOpen": _cache[2] || (_cache[2] = ($event) => showSetupModal.value = $event),
            requiresConfirmation: __props.requiresConfirmation,
            twoFactorEnabled: __props.twoFactorEnabled
          }, null, 8, ["isOpen", "requiresConfirmation", "twoFactorEnabled"])
        ])) : createCommentVNode("", true)
      ], 64);
    };
  }
});
export {
  _sfc_main as default
};
