import { C as createCommentVNode, D as createVNode, E as createTextVNode, K as renderSlot, O as defineComponent, S as createBlock, St as normalizeClass, Tt as toDisplayString, U as openBlock, bt as unref, nt as withCtx, x as createBaseVNode } from "./wayfinder-BXUQpGRW.js";
import { t as TriangleAlert } from "./triangle-alert-CDzfvRL1.js";
import { S as Button_default } from "./app-DSvgGTY4.js";
import { a as Dialog_default, i as DialogContent_default, n as DialogHeader_default, r as DialogDescription_default, t as DialogTitle_default } from "./DialogTitle-DHUh_OBy.js";
import { t as DialogFooter_default } from "./DialogFooter-D46N6ahy.js";
//#endregion
//#region resources/js/components/ConfirmDialog.vue
var ConfirmDialog_default = /* @__PURE__ */ defineComponent({
	__name: "ConfirmDialog",
	props: {
		open: { type: Boolean },
		title: {},
		description: {},
		confirmLabel: {},
		cancelLabel: {},
		variant: {},
		processing: { type: Boolean }
	},
	emits: ["update:open", "confirm"],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const emit = __emit;
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(Dialog_default), {
				open: props.open,
				"onUpdate:open": _cache[2] || (_cache[2] = ($event) => emit("update:open", $event))
			}, {
				default: withCtx(() => [createVNode(unref(DialogContent_default), {
					"show-close-button": false,
					class: "sm:max-w-md"
				}, {
					default: withCtx(() => [
						createVNode(unref(DialogHeader_default), null, {
							default: withCtx(() => [
								createBaseVNode("div", { class: normalizeClass(["mx-auto mb-2 flex size-12 items-center justify-center rounded-full", props.variant === "destructive" ? "bg-destructive/10" : "bg-muted"]) }, [createVNode(unref(TriangleAlert), { class: normalizeClass(["size-6", props.variant === "destructive" ? "text-destructive" : "text-muted-foreground"]) }, null, 8, ["class"])], 2),
								createVNode(unref(DialogTitle_default), { class: "text-center text-xl" }, {
									default: withCtx(() => [createTextVNode(toDisplayString(props.title), 1)]),
									_: 1
								}),
								props.description ? (openBlock(), createBlock(unref(DialogDescription_default), {
									key: 0,
									class: "text-center"
								}, {
									default: withCtx(() => [createTextVNode(toDisplayString(props.description), 1)]),
									_: 1
								})) : createCommentVNode("", true)
							]),
							_: 1
						}),
						renderSlot(_ctx.$slots, "default"),
						createVNode(unref(DialogFooter_default), { class: "flex-col-reverse gap-2 sm:flex-row" }, {
							default: withCtx(() => [createVNode(unref(Button_default), {
								variant: "outline",
								class: "flex-1",
								disabled: props.processing,
								onClick: _cache[0] || (_cache[0] = ($event) => emit("update:open", false))
							}, {
								default: withCtx(() => [createTextVNode(toDisplayString(props.cancelLabel ?? "Cancel"), 1)]),
								_: 1
							}, 8, ["disabled"]), createVNode(unref(Button_default), {
								class: "flex-1",
								variant: props.variant === "destructive" ? "destructive" : "default",
								disabled: props.processing,
								onClick: _cache[1] || (_cache[1] = ($event) => emit("confirm"))
							}, {
								default: withCtx(() => [createTextVNode(toDisplayString(props.processing ? "Please wait…" : props.confirmLabel ?? "Confirm"), 1)]),
								_: 1
							}, 8, ["variant", "disabled"])]),
							_: 1
						})
					]),
					_: 3
				})]),
				_: 3
			}, 8, ["open"]);
		};
	}
});
//#endregion
export { ConfirmDialog_default as t };
