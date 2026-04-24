import { d as defineComponent, o as openBlock, a as createElementBlock, b as createVNode, e as unref, h as head_default, f as createBaseVNode, v as _sfc_main$1, F as Fragment } from "./app-Cfclc8Ry.js";
import { _ as _sfc_main$2 } from "./Builder.vue_vue_type_script_setup_true_lang-D2pD8fM7.js";
import { b as store, i as index } from "./index-CVHLUG6O.js";
import "./ConfirmDialog.vue_vue_type_script_setup_true_lang-C8L4l6AP.js";
import "./DialogTitle.vue_vue_type_script_setup_true_lang-BaQhwGMt.js";
import "./DialogFooter.vue_vue_type_script_setup_true_lang-CQ3oylvq.js";
import "./triangle-alert-547kexM4.js";
import "./InputError.vue_vue_type_script_setup_true_lang-BJsMr1lk.js";
import "./CardTitle.vue_vue_type_script_setup_true_lang-Bge0ZIzB.js";
import "./CardDescription.vue_vue_type_script_setup_true_lang-B_SOdC6_.js";
import "./Input.vue_vue_type_script_setup_true_lang-CcGYVFRF.js";
import "./Label.vue_vue_type_script_setup_true_lang-DqOQM1Tn.js";
import "./useFormControl-QvtoOD-I.js";
import "./check-DSjgo47P.js";
import "./useToast-Bj2yuSOz.js";
import "./circle-check-BQpHXS-I.js";
import "./plus-Bl6J8PZh.js";
import "./chevron-left-DWWESumj.js";
const _hoisted_1 = { class: "mx-auto flex w-full max-w-4xl flex-col gap-6 p-6" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...{
    layout: {
      breadcrumbs: [
        { title: "Quizzes", href: index() },
        { title: "Create", href: "#" }
      ]
    }
  },
  __name: "Create",
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(Fragment, null, [
        createVNode(unref(head_default), { title: "Create Quiz" }),
        createBaseVNode("div", _hoisted_1, [
          createVNode(_sfc_main$1, {
            title: "Create a new quiz",
            description: "Build your quiz step-by-step. A 6-character share code is generated automatically."
          }),
          createVNode(_sfc_main$2, {
            "submit-url": unref(store)().url,
            "submit-method": "post",
            "submit-label": "Create quiz"
          }, null, 8, ["submit-url"])
        ])
      ], 64);
    };
  }
});
export {
  _sfc_main as default
};
