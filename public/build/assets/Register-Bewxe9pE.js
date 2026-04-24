import { K as queryParams, d as defineComponent, o as openBlock, a as createElementBlock, b as createVNode, e as unref, h as head_default, g as withCtx, f as createBaseVNode, i as createTextVNode, _ as _sfc_main$5, aA as login, aE as form_default, F as Fragment, aL as useLoading } from "./app-Cfclc8Ry.js";
import { _ as _sfc_main$3 } from "./InputError.vue_vue_type_script_setup_true_lang-BJsMr1lk.js";
import { _ as _sfc_main$4 } from "./PasswordInput.vue_vue_type_script_setup_true_lang-C6eUx09o.js";
import { _ as _sfc_main$6 } from "./TextLink.vue_vue_type_script_setup_true_lang-D4ERWR9N.js";
import { _ as _sfc_main$2 } from "./Input.vue_vue_type_script_setup_true_lang-CcGYVFRF.js";
import { _ as _sfc_main$1 } from "./Label.vue_vue_type_script_setup_true_lang-DqOQM1Tn.js";
const store = (options) => ({
  url: store.url(options),
  method: "post"
});
store.definition = {
  methods: ["post"],
  url: "/register"
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
const _hoisted_1 = { class: "grid gap-6" };
const _hoisted_2 = { class: "grid gap-2" };
const _hoisted_3 = { class: "grid gap-2" };
const _hoisted_4 = { class: "grid gap-2" };
const _hoisted_5 = { class: "grid gap-2" };
const _hoisted_6 = { class: "text-center text-sm text-muted-foreground" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...{
    layout: {
      title: "Create an account",
      description: "Enter your details below to create your account"
    }
  },
  __name: "Register",
  setup(__props) {
    const { show, hide } = useLoading();
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(Fragment, null, [
        createVNode(unref(head_default), { title: "Register" }),
        createVNode(unref(form_default), {
          action: unref(store).url(),
          method: "post",
          "reset-on-success": ["password", "password_confirmation"],
          onStart: _cache[0] || (_cache[0] = ($event) => unref(show)("Creating your account...")),
          onFinish: _cache[1] || (_cache[1] = ($event) => unref(hide)()),
          class: "flex flex-col gap-6"
        }, {
          default: withCtx(({ errors, processing }) => [
            createBaseVNode("div", _hoisted_1, [
              createBaseVNode("div", _hoisted_2, [
                createVNode(unref(_sfc_main$1), { for: "name" }, {
                  default: withCtx(() => [..._cache[2] || (_cache[2] = [
                    createTextVNode("Name", -1)
                  ])]),
                  _: 1
                }),
                createVNode(unref(_sfc_main$2), {
                  id: "name",
                  type: "text",
                  required: "",
                  autofocus: "",
                  tabindex: 1,
                  autocomplete: "name",
                  name: "name",
                  placeholder: "Full name"
                }),
                createVNode(_sfc_main$3, {
                  message: errors.name
                }, null, 8, ["message"])
              ]),
              createBaseVNode("div", _hoisted_3, [
                createVNode(unref(_sfc_main$1), { for: "email" }, {
                  default: withCtx(() => [..._cache[3] || (_cache[3] = [
                    createTextVNode("Email address", -1)
                  ])]),
                  _: 1
                }),
                createVNode(unref(_sfc_main$2), {
                  id: "email",
                  type: "email",
                  required: "",
                  tabindex: 2,
                  autocomplete: "email",
                  name: "email",
                  placeholder: "email@example.com"
                }),
                createVNode(_sfc_main$3, {
                  message: errors.email
                }, null, 8, ["message"])
              ]),
              createBaseVNode("div", _hoisted_4, [
                createVNode(unref(_sfc_main$1), { for: "password" }, {
                  default: withCtx(() => [..._cache[4] || (_cache[4] = [
                    createTextVNode("Password", -1)
                  ])]),
                  _: 1
                }),
                createVNode(_sfc_main$4, {
                  id: "password",
                  required: "",
                  tabindex: 3,
                  autocomplete: "new-password",
                  name: "password",
                  placeholder: "Password"
                }),
                createVNode(_sfc_main$3, {
                  message: errors.password
                }, null, 8, ["message"])
              ]),
              createBaseVNode("div", _hoisted_5, [
                createVNode(unref(_sfc_main$1), { for: "password_confirmation" }, {
                  default: withCtx(() => [..._cache[5] || (_cache[5] = [
                    createTextVNode("Confirm password", -1)
                  ])]),
                  _: 1
                }),
                createVNode(_sfc_main$4, {
                  id: "password_confirmation",
                  required: "",
                  tabindex: 4,
                  autocomplete: "new-password",
                  name: "password_confirmation",
                  placeholder: "Confirm password"
                }),
                createVNode(_sfc_main$3, {
                  message: errors.password_confirmation
                }, null, 8, ["message"])
              ]),
              createVNode(unref(_sfc_main$5), {
                type: "submit",
                class: "mt-2 w-full",
                tabindex: "5",
                disabled: processing,
                "data-test": "register-user-button"
              }, {
                default: withCtx(() => [..._cache[6] || (_cache[6] = [
                  createTextVNode(" Create account ", -1)
                ])]),
                _: 1
              }, 8, ["disabled"])
            ]),
            createBaseVNode("div", _hoisted_6, [
              _cache[8] || (_cache[8] = createTextVNode(" Already have an account? ", -1)),
              createVNode(_sfc_main$6, {
                href: unref(login)(),
                class: "underline underline-offset-4",
                tabindex: 6
              }, {
                default: withCtx(() => [..._cache[7] || (_cache[7] = [
                  createTextVNode("Log in", -1)
                ])]),
                _: 1
              }, 8, ["href"])
            ])
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
