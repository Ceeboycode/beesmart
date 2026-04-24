import { K as renderSlot, O as defineComponent, St as normalizeClass, U as openBlock, bt as unref, w as createElementBlock } from "./wayfinder-BXUQpGRW.js";
import { xt as cn } from "./app-DSvgGTY4.js";
//#endregion
//#region resources/js/components/ui/card/CardDescription.vue
var CardDescription_default = /* @__PURE__ */ defineComponent({
	__name: "CardDescription",
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
			return openBlock(), createElementBlock("p", {
				"data-slot": "card-description",
				class: normalizeClass(unref(cn)("text-muted-foreground text-sm", props.class))
			}, [renderSlot(_ctx.$slots, "default")], 2);
		};
	}
});
//#endregion
export { CardDescription_default as t };
