import { C as createCommentVNode, D as createVNode, E as createTextVNode, O as defineComponent, S as createBlock, Tt as toDisplayString, U as openBlock, b as computed, bt as unref, nt as withCtx, w as createElementBlock, x as createBaseVNode } from "./wayfinder-BXUQpGRW.js";
import { t as TriangleAlert } from "./triangle-alert-CDzfvRL1.js";
import { E as createLucideIcon, S as Button_default, T as BookOpen } from "./app-DSvgGTY4.js";
import { n as AlertDescription_default, r as Alert_default, t as AlertTitle_default } from "./alert-CebEwSvN.js";
import { u as Badge_default } from "./quizzes-BeiZx3-W.js";
import { a as Dialog_default, i as DialogContent_default, n as DialogHeader_default, r as DialogDescription_default, t as DialogTitle_default } from "./DialogTitle-DHUh_OBy.js";
import { t as DialogFooter_default } from "./DialogFooter-D46N6ahy.js";
//#region node_modules/lucide-vue-next/dist/esm/icons/send.js
/**
* @license lucide-vue-next v0.468.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var Send = createLucideIcon("SendIcon", [["path", {
	d: "M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",
	key: "1ffxy3"
}], ["path", {
	d: "m21.854 2.147-10.94 10.939",
	key: "12cjpa"
}]]);
//#endregion
//#region node_modules/lucide-vue-next/dist/esm/icons/square-check-big.js
/**
* @license lucide-vue-next v0.468.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var SquareCheckBig = createLucideIcon("SquareCheckBigIcon", [["path", {
	d: "M21 10.5V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h12.5",
	key: "1uzm8b"
}], ["path", {
	d: "m9 11 3 3L22 4",
	key: "1pflzl"
}]]);
//#endregion
//#region resources/js/components/QuizStartDialog.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1 = { class: "mx-auto mb-2 flex size-12 items-center justify-center rounded-full bg-amber-100 dark:bg-amber-900/30" };
var _hoisted_2 = { key: 0 };
var _hoisted_3 = { class: "font-semibold text-foreground" };
var _hoisted_4 = { class: "mt-1 grid gap-1.5 text-sm" };
var _hoisted_5 = { class: "flex items-start gap-2" };
var _hoisted_6 = { class: "flex items-start gap-2" };
var _hoisted_7 = { class: "flex items-start gap-2" };
var _hoisted_8 = { class: "flex justify-center gap-2" };
//#endregion
//#region resources/js/components/QuizStartDialog.vue
var QuizStartDialog_default = /* @__PURE__ */ defineComponent({
	__name: "QuizStartDialog",
	props: {
		open: { type: Boolean },
		processing: { type: Boolean },
		quiz: {}
	},
	emits: ["update:open", "confirm"],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const emit = __emit;
		const questionCount = computed(() => {
			if (props.quiz?.questions_count !== void 0) return props.quiz.questions_count;
			if (props.quiz?.questions) return props.quiz.questions.length;
			return null;
		});
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
								createBaseVNode("div", _hoisted_1, [createVNode(unref(BookOpen), { class: "size-6 text-amber-600 dark:text-amber-400" })]),
								createVNode(unref(DialogTitle_default), { class: "text-center text-xl" }, {
									default: withCtx(() => [createTextVNode(toDisplayString(props.quiz?.title ? `Ready for "${props.quiz.title}"?` : "Before you begin…"), 1)]),
									_: 1
								}),
								createVNode(unref(DialogDescription_default), { class: "text-center" }, {
									default: withCtx(() => [questionCount.value !== null ? (openBlock(), createElementBlock("span", _hoisted_2, [
										_cache[3] || (_cache[3] = createTextVNode(" This quiz has ", -1)),
										createBaseVNode("span", _hoisted_3, toDisplayString(questionCount.value) + " question" + toDisplayString(questionCount.value === 1 ? "" : "s"), 1),
										_cache[4] || (_cache[4] = createTextVNode(". ", -1))
									])) : createCommentVNode("", true), _cache[5] || (_cache[5] = createTextVNode(" Read the reminders below before starting. ", -1))]),
									_: 1
								})
							]),
							_: 1
						}),
						createVNode(unref(Alert_default), { variant: "warning" }, {
							default: withCtx(() => [
								createVNode(unref(TriangleAlert), { class: "size-4" }),
								createVNode(unref(AlertTitle_default), null, {
									default: withCtx(() => [..._cache[6] || (_cache[6] = [createTextVNode("Rules & reminders", -1)])]),
									_: 1
								}),
								createVNode(unref(AlertDescription_default), null, {
									default: withCtx(() => [createBaseVNode("ul", _hoisted_4, [
										createBaseVNode("li", _hoisted_5, [createVNode(unref(SquareCheckBig), { class: "mt-0.5 size-4 shrink-0 text-amber-600 dark:text-amber-400" }), _cache[7] || (_cache[7] = createTextVNode(" You can navigate freely between questions before submitting. ", -1))]),
										createBaseVNode("li", _hoisted_6, [
											createVNode(unref(SquareCheckBig), { class: "mt-0.5 size-4 shrink-0 text-amber-600 dark:text-amber-400" }),
											_cache[8] || (_cache[8] = createTextVNode(" Multiple-choice questions may have ", -1)),
											_cache[9] || (_cache[9] = createBaseVNode("span", { class: "font-medium" }, "more than one correct answer", -1)),
											_cache[10] || (_cache[10] = createTextVNode(" — select all that apply. ", -1))
										]),
										createBaseVNode("li", _hoisted_7, [
											createVNode(unref(Send), { class: "mt-0.5 size-4 shrink-0 text-amber-600 dark:text-amber-400" }),
											_cache[11] || (_cache[11] = createTextVNode(" Once you click ", -1)),
											_cache[12] || (_cache[12] = createBaseVNode("span", { class: "font-medium" }, "Submit quiz", -1)),
											_cache[13] || (_cache[13] = createTextVNode(", your answers are final and cannot be changed. ", -1))
										])
									])]),
									_: 1
								})
							]),
							_: 1
						}),
						createBaseVNode("div", _hoisted_8, [createVNode(unref(Badge_default), { variant: "honey" }, {
							default: withCtx(() => [..._cache[14] || (_cache[14] = [createTextVNode("Good luck! 🐝", -1)])]),
							_: 1
						})]),
						createVNode(unref(DialogFooter_default), { class: "flex-col-reverse gap-2 sm:flex-row" }, {
							default: withCtx(() => [createVNode(unref(Button_default), {
								variant: "outline",
								class: "flex-1",
								disabled: props.processing,
								onClick: _cache[0] || (_cache[0] = ($event) => emit("update:open", false))
							}, {
								default: withCtx(() => [..._cache[15] || (_cache[15] = [createTextVNode(" Cancel ", -1)])]),
								_: 1
							}, 8, ["disabled"]), createVNode(unref(Button_default), {
								class: "flex-1",
								disabled: props.processing,
								onClick: _cache[1] || (_cache[1] = ($event) => emit("confirm"))
							}, {
								default: withCtx(() => [createTextVNode(toDisplayString(props.processing ? "Starting…" : "Start quiz"), 1)]),
								_: 1
							}, 8, ["disabled"])]),
							_: 1
						})
					]),
					_: 1
				})]),
				_: 1
			}, 8, ["open"]);
		};
	}
});
//#endregion
export { QuizStartDialog_default as t };
