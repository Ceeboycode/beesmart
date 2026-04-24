import { K as renderSlot, O as defineComponent, St as normalizeClass, U as openBlock, bt as unref, w as createElementBlock } from "./wayfinder-BXUQpGRW.js";
import { E as createLucideIcon, xt as cn } from "./app-DSvgGTY4.js";
//#region node_modules/lucide-vue-next/dist/esm/icons/clipboard-list.js
/**
* @license lucide-vue-next v0.468.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var ClipboardList = createLucideIcon("ClipboardListIcon", [
	["rect", {
		width: "8",
		height: "4",
		x: "8",
		y: "2",
		rx: "1",
		ry: "1",
		key: "tgr4d6"
	}],
	["path", {
		d: "M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2",
		key: "116196"
	}],
	["path", {
		d: "M12 11h4",
		key: "1jrz19"
	}],
	["path", {
		d: "M12 16h4",
		key: "n85exb"
	}],
	["path", {
		d: "M8 11h.01",
		key: "1dfujw"
	}],
	["path", {
		d: "M8 16h.01",
		key: "18s6g9"
	}]
]);
//#endregion
//#region resources/js/components/ui/card/CardFooter.vue
var CardFooter_default = /* @__PURE__ */ defineComponent({
	__name: "CardFooter",
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
				"data-slot": "card-footer",
				class: normalizeClass(unref(cn)("flex items-center px-6 [.border-t]:pt-6", props.class))
			}, [renderSlot(_ctx.$slots, "default")], 2);
		};
	}
});
//#endregion
export { ClipboardList as n, CardFooter_default as t };
