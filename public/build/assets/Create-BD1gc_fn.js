import { t as Builder_default } from "./Builder-Bkqei79p.js";
import { D as createVNode, O as defineComponent, U as openBlock, _ as Fragment, a as head_default, bt as unref, w as createElementBlock, x as createBaseVNode } from "./wayfinder-BXUQpGRW.js";
import { r as Heading_default } from "./app-DSvgGTY4.js";
import { a as index, s as store } from "./quizzes-BeiZx3-W.js";
//#region resources/js/pages/Quiz/Create.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1 = { class: "mx-auto flex w-full max-w-4xl flex-col gap-6 p-6" };
//#endregion
//#region resources/js/pages/Quiz/Create.vue
var Create_default = /* @__PURE__ */ defineComponent({
	layout: { breadcrumbs: [{
		title: "Quizzes",
		href: index()
	}, {
		title: "Create",
		href: "#"
	}] },
	__name: "Create",
	setup(__props) {
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock(Fragment, null, [createVNode(unref(head_default), { title: "Create Quiz" }), createBaseVNode("div", _hoisted_1, [createVNode(Heading_default, {
				title: "Create a new quiz",
				description: "Build your quiz step-by-step. A 6-character share code is generated automatically."
			}), createVNode(Builder_default, {
				"submit-url": unref(store)().url,
				"submit-method": "post",
				"submit-label": "Create quiz"
			}, null, 8, ["submit-url"])])], 64);
		};
	}
});
//#endregion
export { Create_default as default };
