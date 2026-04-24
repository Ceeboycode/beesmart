import { t as Builder_default } from "./Builder-Bkqei79p.js";
import { D as createVNode, O as defineComponent, U as openBlock, _ as Fragment, a as head_default, bt as unref, w as createElementBlock, x as createBaseVNode } from "./wayfinder-BXUQpGRW.js";
import { r as Heading_default, u as regenerateCode } from "./app-DSvgGTY4.js";
import { a as index, l as update } from "./quizzes-BeiZx3-W.js";
//#region resources/js/pages/Quiz/Edit.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1 = { class: "mx-auto flex w-full max-w-4xl flex-col gap-6 p-6" };
//#endregion
//#region resources/js/pages/Quiz/Edit.vue
var Edit_default = /* @__PURE__ */ defineComponent({
	layout: { breadcrumbs: [{
		title: "Quizzes",
		href: index()
	}, {
		title: "Edit",
		href: "#"
	}] },
	__name: "Edit",
	props: { quiz: {} },
	setup(__props) {
		const props = __props;
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock(Fragment, null, [createVNode(unref(head_default), { title: `Edit ${props.quiz.title}` }, null, 8, ["title"]), createBaseVNode("div", _hoisted_1, [createVNode(Heading_default, {
				title: "Edit quiz",
				description: "Update your quiz step-by-step. Changes are saved as a new version."
			}), createVNode(Builder_default, {
				quiz: props.quiz,
				"submit-url": unref(update).url(props.quiz.id),
				"submit-method": "put",
				"submit-label": "Save changes",
				"regenerate-url": unref(regenerateCode).url({ quiz: props.quiz.id })
			}, null, 8, [
				"quiz",
				"submit-url",
				"regenerate-url"
			])])], 64);
		};
	}
});
//#endregion
export { Edit_default as default };
