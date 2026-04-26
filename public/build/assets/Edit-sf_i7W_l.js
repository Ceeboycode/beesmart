import { d as defineComponent, o as openBlock, a as createElementBlock, b as createVNode, e as unref, h as head_default, f as createBaseVNode, v as _sfc_main$1, S as regenerateCode, F as Fragment } from "./app-U-Wu707C.js";
import { _ as _sfc_main$2 } from "./Builder.vue_vue_type_script_setup_true_lang-DU1YEuv8.js";
import { u as update, i as index } from "./index-2dJNrEoj.js";
import "./ConfirmDialog.vue_vue_type_script_setup_true_lang-DqKgXRjN.js";
import "./DialogTitle.vue_vue_type_script_setup_true_lang-DNuLu2i_.js";
import "./DialogFooter.vue_vue_type_script_setup_true_lang-DLXOiuZd.js";
import "./triangle-alert-CeaKFo9s.js";
import "./InputError.vue_vue_type_script_setup_true_lang-DT4TW3sY.js";
import "./CardContent.vue_vue_type_script_setup_true_lang-T4Xk2G9g.js";
import "./CardDescription.vue_vue_type_script_setup_true_lang-m_mruJqV.js";
import "./CardTitle.vue_vue_type_script_setup_true_lang-DjK7ckh3.js";
import "./Input.vue_vue_type_script_setup_true_lang-qAY1AdtK.js";
import "./Label.vue_vue_type_script_setup_true_lang-BhU3nPQR.js";
import "./useFormControl-BIfMbEES.js";
import "./chevron-up-CptlasEZ.js";
import "./check-B04R2KHz.js";
import "./useToast-BkhX-iHM.js";
import "./eye-CDJpc4P-.js";
import "./monitor-x-Cisb6MMH.js";
import "./circle-check-DuM6zutW.js";
import "./plus-2A4mbTCz.js";
const _hoisted_1 = { class: "mx-auto flex w-full max-w-4xl flex-col gap-6 p-6" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...{
    layout: {
      breadcrumbs: [
        { title: "Quizzes", href: index() },
        { title: "Edit", href: "#" }
      ]
    }
  },
  __name: "Edit",
  props: {
    quiz: {}
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(Fragment, null, [
        createVNode(unref(head_default), {
          title: `Edit ${props.quiz.title}`
        }, null, 8, ["title"]),
        createBaseVNode("div", _hoisted_1, [
          createVNode(_sfc_main$1, {
            title: "Edit quiz",
            description: "Update your quiz step-by-step. Changes are saved as a new version."
          }),
          createVNode(_sfc_main$2, {
            quiz: props.quiz,
            "submit-url": unref(update).url(props.quiz.id),
            "submit-method": "put",
            "submit-label": "Save changes",
            "regenerate-url": unref(regenerateCode).url({ quiz: props.quiz.id })
          }, null, 8, ["quiz", "submit-url", "regenerate-url"])
        ])
      ], 64);
    };
  }
});
export {
  _sfc_main as default
};
