import { O as defineComponent, Tt as toDisplayString, U as openBlock, p as vShow, rt as withDirectives, w as createElementBlock, x as createBaseVNode } from "./wayfinder-BXUQpGRW.js";
//#region resources/js/components/InputError.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1 = { class: "text-sm text-red-600 dark:text-red-500" };
//#endregion
//#region resources/js/components/InputError.vue
var InputError_default = /* @__PURE__ */ defineComponent({
	__name: "InputError",
	props: { message: {} },
	setup(__props) {
		return (_ctx, _cache) => {
			return withDirectives((openBlock(), createElementBlock("div", null, [createBaseVNode("p", _hoisted_1, toDisplayString(__props.message), 1)], 512)), [[vShow, __props.message]]);
		};
	}
});
//#endregion
export { InputError_default as t };
