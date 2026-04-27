import { d as defineComponent, o as openBlock, a as createElementBlock, b as createVNode, e as unref, h as head_default, f as createBaseVNode, v as _sfc_main$1, S as regenerateCode, F as Fragment } from "./app-FZe8oXsS.js";
import { _ as _sfc_main$2 } from "./Builder.vue_vue_type_script_setup_true_lang-pHZOT_VC.js";
import { u as update, i as index } from "./index-k5qqUSJu.js";
import "./ConfirmDialog.vue_vue_type_script_setup_true_lang-BrqZv0cw.js";
import "./DialogTitle.vue_vue_type_script_setup_true_lang-BnppUMeH.js";
import "./DialogFooter.vue_vue_type_script_setup_true_lang-LUn7Xu4s.js";
import "./triangle-alert-RlSOkNJU.js";
import "./InputError.vue_vue_type_script_setup_true_lang-Bvs6ypzk.js";
import "./CardContent.vue_vue_type_script_setup_true_lang-n-UlRd_e.js";
import "./CardDescription.vue_vue_type_script_setup_true_lang-CjOwPNj5.js";
import "./CardTitle.vue_vue_type_script_setup_true_lang-C3Ddipjo.js";
import "./Input.vue_vue_type_script_setup_true_lang-CWD3gtEB.js";
import "./Label.vue_vue_type_script_setup_true_lang-C5pjpvK2.js";
import "./useFormControl-B1a0qB1x.js";
import "./chevron-up-D3TikgX7.js";
import "./check-DO8yqo7u.js";
import "./useToast-DpKI1fLy.js";
import "./eye-CMie7mkq.js";
import "./monitor-x-Byb3IWih.js";
import "./circle-check-8Uu5e0LX.js";
import "./plus-BqyduFti.js";
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
    categories: {},
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
            categories: props.categories,
            quiz: props.quiz,
            "submit-url": unref(update).url(props.quiz.id),
            "submit-method": "put",
            "submit-label": "Save changes",
            "regenerate-url": unref(regenerateCode).url({ quiz: props.quiz.id })
          }, null, 8, ["categories", "quiz", "submit-url", "regenerate-url"])
        ])
      ], 64);
    };
  }
});
export {
  _sfc_main as default
};
