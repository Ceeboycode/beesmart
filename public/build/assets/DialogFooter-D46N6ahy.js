import { K as renderSlot, O as defineComponent, St as normalizeClass, U as openBlock, bt as unref, w as createElementBlock } from "./wayfinder-BXUQpGRW.js";
import { xt as cn } from "./app-DSvgGTY4.js";
//#endregion
//#region resources/js/components/ui/dialog/DialogFooter.vue
var DialogFooter_default = /* @__PURE__ */ defineComponent({
	__name: "DialogFooter",
	props: { class: { type: [
		Boolean,
		null,
		String,
		Object,
		Array
	] } },
	setup(__props) {
		const props = __props;
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", {
				"data-slot": "dialog-footer",
				class: normalizeClass(unref(cn)("flex flex-col-reverse gap-2 sm:flex-row sm:justify-end", props.class))
			}, [renderSlot(_ctx.$slots, "default")], 2);
		};
	}
});
//#endregion
export { DialogFooter_default as t };
