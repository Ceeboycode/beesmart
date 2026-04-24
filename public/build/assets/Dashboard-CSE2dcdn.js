import { C as createCommentVNode, D as createVNode, E as createTextVNode, G as renderList, O as defineComponent, S as createBlock, Tt as toDisplayString, U as openBlock, _ as Fragment, a as head_default, bt as unref, nt as withCtx, o as link_default, u as usePage, w as createElementBlock, x as createBaseVNode } from "./wayfinder-BXUQpGRW.js";
import { n as ClipboardList, t as CardFooter_default } from "./CardFooter-mzcaPnFm.js";
import { t as Plus } from "./plus-DhVwGKfs.js";
import { E as createLucideIcon, S as Button_default, T as BookOpen, f as dashboard, r as Heading_default, w as ChevronRight } from "./app-DSvgGTY4.js";
import { a as index, i as edit, n as create, o as show, u as Badge_default } from "./quizzes-BeiZx3-W.js";
import { i as Card_default, n as CardHeader_default, r as CardContent_default, t as CardTitle_default } from "./CardTitle-By1pZAMj.js";
import { t as join } from "./attempts-qxJSMs8x.js";
//#region node_modules/lucide-vue-next/dist/esm/icons/log-in.js
/**
* @license lucide-vue-next v0.468.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var LogIn = createLucideIcon("LogInIcon", [
	["path", {
		d: "M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4",
		key: "u53s6r"
	}],
	["polyline", {
		points: "10 17 15 12 10 7",
		key: "1ail0h"
	}],
	["line", {
		x1: "15",
		x2: "3",
		y1: "12",
		y2: "12",
		key: "v6grx8"
	}]
]);
//#endregion
//#region node_modules/lucide-vue-next/dist/esm/icons/zap.js
/**
* @license lucide-vue-next v0.468.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var Zap = createLucideIcon("ZapIcon", [["path", {
	d: "M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",
	key: "1xq2db"
}]]);
//#endregion
//#region resources/js/pages/Dashboard.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1 = { class: "flex flex-col gap-6 p-6" };
var _hoisted_2 = { class: "flex flex-wrap items-start justify-between gap-4" };
var _hoisted_3 = { class: "flex gap-2" };
var _hoisted_4 = { class: "grid grid-cols-2 gap-4 lg:grid-cols-4" };
var _hoisted_5 = { class: "flex items-start justify-between gap-2" };
var _hoisted_6 = { class: "mt-1 text-3xl font-bold" };
var _hoisted_7 = { class: "flex size-10 items-center justify-center rounded-lg bg-primary/10" };
var _hoisted_8 = { class: "mt-3 text-xs text-muted-foreground" };
var _hoisted_9 = { class: "flex items-start justify-between gap-2" };
var _hoisted_10 = { class: "mt-1 text-3xl font-bold" };
var _hoisted_11 = { class: "flex size-10 items-center justify-center rounded-lg bg-emerald-100 dark:bg-emerald-900/30" };
var _hoisted_12 = { class: "flex items-start justify-between gap-2" };
var _hoisted_13 = { class: "mt-1 text-3xl font-bold" };
var _hoisted_14 = { class: "flex size-10 items-center justify-center rounded-lg bg-amber-100 dark:bg-amber-900/30" };
var _hoisted_15 = { class: "flex items-start justify-between gap-2" };
var _hoisted_16 = { class: "mt-1 text-3xl font-bold" };
var _hoisted_17 = { class: "flex size-10 items-center justify-center rounded-lg bg-blue-100 dark:bg-blue-900/30" };
var _hoisted_18 = { class: "grid gap-6 lg:grid-cols-2" };
var _hoisted_19 = {
	key: 0,
	class: "flex flex-col items-center justify-center gap-3 px-6 py-10 text-center"
};
var _hoisted_20 = { class: "flex size-12 items-center justify-center rounded-full bg-muted" };
var _hoisted_21 = {
	key: 1,
	class: "divide-y"
};
var _hoisted_22 = { class: "min-w-0 flex-1" };
var _hoisted_23 = { class: "mt-1 flex flex-wrap items-center gap-1.5" };
var _hoisted_24 = { class: "text-xs text-muted-foreground" };
var _hoisted_25 = {
	key: 0,
	class: "flex flex-col items-center justify-center gap-3 px-6 py-10 text-center"
};
var _hoisted_26 = { class: "flex size-12 items-center justify-center rounded-full bg-muted" };
var _hoisted_27 = {
	key: 1,
	class: "divide-y"
};
var _hoisted_28 = { class: "min-w-0 flex-1" };
var _hoisted_29 = { class: "truncate text-sm font-medium" };
var _hoisted_30 = { class: "mt-1 flex flex-wrap items-center gap-1.5" };
var _hoisted_31 = { class: "text-xs text-muted-foreground" };
var _hoisted_32 = { class: "shrink-0 text-right" };
var _hoisted_33 = { class: "text-sm font-semibold" };
var _hoisted_34 = { class: "text-xs text-muted-foreground" };
//#endregion
//#region resources/js/pages/Dashboard.vue
var Dashboard_default = /* @__PURE__ */ defineComponent({
	layout: { breadcrumbs: [{
		title: "Dashboard",
		href: dashboard()
	}] },
	__name: "Dashboard",
	props: {
		stats: {},
		recentQuizzes: {},
		recentAttempts: {}
	},
	setup(__props) {
		const props = __props;
		const userName = usePage().props.auth.user.name;
		const toDateLabel = (value) => value ? new Date(value).toLocaleDateString(void 0, {
			month: "short",
			day: "numeric",
			year: "numeric"
		}) : "—";
		const attemptStatusLabel = (status) => {
			if (status === "in_progress") return "In progress";
			if (status === "graded") return "Graded";
			return "Submitted";
		};
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock(Fragment, null, [createVNode(unref(head_default), { title: "Dashboard" }), createBaseVNode("div", _hoisted_1, [
				createBaseVNode("div", _hoisted_2, [createVNode(Heading_default, {
					title: `Welcome back, ${unref(userName).split(" ")[0]}!`,
					description: "Here's an overview of your quizzes and activity."
				}, null, 8, ["title"]), createBaseVNode("div", _hoisted_3, [createVNode(unref(Button_default), {
					variant: "outline",
					"as-child": ""
				}, {
					default: withCtx(() => [createVNode(unref(link_default), { href: unref(join)().url }, {
						default: withCtx(() => [createVNode(unref(LogIn), { class: "size-4" }), _cache[0] || (_cache[0] = createTextVNode(" Join by code ", -1))]),
						_: 1
					}, 8, ["href"])]),
					_: 1
				}), createVNode(unref(Button_default), { "as-child": "" }, {
					default: withCtx(() => [createVNode(unref(link_default), { href: unref(create)() }, {
						default: withCtx(() => [createVNode(unref(Plus), { class: "size-4" }), _cache[1] || (_cache[1] = createTextVNode(" Create quiz ", -1))]),
						_: 1
					}, 8, ["href"])]),
					_: 1
				})])]),
				createBaseVNode("div", _hoisted_4, [
					createVNode(unref(Card_default), null, {
						default: withCtx(() => [createVNode(unref(CardContent_default), { class: "pt-6" }, {
							default: withCtx(() => [createBaseVNode("div", _hoisted_5, [createBaseVNode("div", null, [_cache[2] || (_cache[2] = createBaseVNode("p", { class: "text-sm text-muted-foreground" }, "Total quizzes", -1)), createBaseVNode("p", _hoisted_6, toDisplayString(props.stats.total_quizzes), 1)]), createBaseVNode("div", _hoisted_7, [createVNode(unref(BookOpen), { class: "size-5 text-primary" })])]), createBaseVNode("p", _hoisted_8, toDisplayString(props.stats.active_quizzes) + " active ", 1)]),
							_: 1
						})]),
						_: 1
					}),
					createVNode(unref(Card_default), null, {
						default: withCtx(() => [createVNode(unref(CardContent_default), { class: "pt-6" }, {
							default: withCtx(() => [createBaseVNode("div", _hoisted_9, [createBaseVNode("div", null, [_cache[3] || (_cache[3] = createBaseVNode("p", { class: "text-sm text-muted-foreground" }, "Active quizzes", -1)), createBaseVNode("p", _hoisted_10, toDisplayString(props.stats.active_quizzes), 1)]), createBaseVNode("div", _hoisted_11, [createVNode(unref(Zap), { class: "size-5 text-emerald-600 dark:text-emerald-400" })])]), _cache[4] || (_cache[4] = createBaseVNode("p", { class: "mt-3 text-xs text-muted-foreground" }, "Joinable by share code", -1))]),
							_: 1
						})]),
						_: 1
					}),
					createVNode(unref(Card_default), null, {
						default: withCtx(() => [createVNode(unref(CardContent_default), { class: "pt-6" }, {
							default: withCtx(() => [createBaseVNode("div", _hoisted_12, [createBaseVNode("div", null, [_cache[5] || (_cache[5] = createBaseVNode("p", { class: "text-sm text-muted-foreground" }, "Attempts received", -1)), createBaseVNode("p", _hoisted_13, toDisplayString(props.stats.total_attempts), 1)]), createBaseVNode("div", _hoisted_14, [createVNode(unref(ClipboardList), { class: "size-5 text-amber-600 dark:text-amber-400" })])]), _cache[6] || (_cache[6] = createBaseVNode("p", { class: "mt-3 text-xs text-muted-foreground" }, "On your quizzes", -1))]),
							_: 1
						})]),
						_: 1
					}),
					createVNode(unref(Card_default), null, {
						default: withCtx(() => [createVNode(unref(CardContent_default), { class: "pt-6" }, {
							default: withCtx(() => [createBaseVNode("div", _hoisted_15, [createBaseVNode("div", null, [_cache[7] || (_cache[7] = createBaseVNode("p", { class: "text-sm text-muted-foreground" }, "My attempts", -1)), createBaseVNode("p", _hoisted_16, toDisplayString(props.stats.my_attempts), 1)]), createBaseVNode("div", _hoisted_17, [createVNode(unref(BookOpen), { class: "size-5 text-blue-600 dark:text-blue-400" })])]), _cache[8] || (_cache[8] = createBaseVNode("p", { class: "mt-3 text-xs text-muted-foreground" }, "Quizzes you've taken", -1))]),
							_: 1
						})]),
						_: 1
					})
				]),
				createBaseVNode("div", _hoisted_18, [createVNode(unref(Card_default), { class: "flex flex-col" }, {
					default: withCtx(() => [
						createVNode(unref(CardHeader_default), { class: "flex flex-row items-center justify-between gap-2 pb-3" }, {
							default: withCtx(() => [createVNode(unref(CardTitle_default), { class: "text-base" }, {
								default: withCtx(() => [..._cache[9] || (_cache[9] = [createTextVNode("My recent quizzes", -1)])]),
								_: 1
							}), createVNode(unref(Button_default), {
								variant: "ghost",
								size: "sm",
								class: "gap-1 text-xs",
								"as-child": ""
							}, {
								default: withCtx(() => [createVNode(unref(link_default), { href: unref(index)() }, {
									default: withCtx(() => [_cache[10] || (_cache[10] = createTextVNode(" View all ", -1)), createVNode(unref(ChevronRight), { class: "size-3.5" })]),
									_: 1
								}, 8, ["href"])]),
								_: 1
							})]),
							_: 1
						}),
						createVNode(unref(CardContent_default), { class: "flex-1 px-0" }, {
							default: withCtx(() => [props.recentQuizzes.length === 0 ? (openBlock(), createElementBlock("div", _hoisted_19, [
								createBaseVNode("div", _hoisted_20, [createVNode(unref(BookOpen), { class: "size-5 text-muted-foreground" })]),
								_cache[12] || (_cache[12] = createBaseVNode("div", null, [createBaseVNode("p", { class: "text-sm font-medium" }, "No quizzes yet"), createBaseVNode("p", { class: "mt-0.5 text-xs text-muted-foreground" }, "Create your first quiz to get started.")], -1)),
								createVNode(unref(Button_default), {
									size: "sm",
									"as-child": ""
								}, {
									default: withCtx(() => [createVNode(unref(link_default), { href: unref(create)() }, {
										default: withCtx(() => [createVNode(unref(Plus), { class: "size-4" }), _cache[11] || (_cache[11] = createTextVNode(" Create quiz ", -1))]),
										_: 1
									}, 8, ["href"])]),
									_: 1
								})
							])) : (openBlock(), createElementBlock("ul", _hoisted_21, [(openBlock(true), createElementBlock(Fragment, null, renderList(props.recentQuizzes, (quiz) => {
								return openBlock(), createElementBlock("li", {
									key: quiz.id,
									class: "flex items-center gap-3 px-6 py-3 transition-colors hover:bg-muted/40"
								}, [createBaseVNode("div", _hoisted_22, [createVNode(unref(link_default), {
									href: unref(show)(quiz.id),
									class: "block truncate text-sm font-medium hover:underline"
								}, {
									default: withCtx(() => [createTextVNode(toDisplayString(quiz.title), 1)]),
									_: 2
								}, 1032, ["href"]), createBaseVNode("div", _hoisted_23, [
									createVNode(unref(Badge_default), {
										variant: quiz.status === "active" ? "success" : "secondary",
										class: "text-xs"
									}, {
										default: withCtx(() => [createTextVNode(toDisplayString(quiz.status), 1)]),
										_: 2
									}, 1032, ["variant"]),
									createVNode(unref(Badge_default), {
										variant: "outline",
										class: "text-xs"
									}, {
										default: withCtx(() => [createTextVNode(toDisplayString(quiz.questions_count) + " Q ", 1)]),
										_: 2
									}, 1024),
									createBaseVNode("span", _hoisted_24, toDisplayString(quiz.attempts_count) + " attempt" + toDisplayString(quiz.attempts_count === 1 ? "" : "s"), 1)
								])]), createVNode(unref(Button_default), {
									variant: "ghost",
									size: "sm",
									class: "shrink-0 text-xs",
									"as-child": ""
								}, {
									default: withCtx(() => [createVNode(unref(link_default), { href: unref(edit)(quiz.id) }, {
										default: withCtx(() => [..._cache[13] || (_cache[13] = [createTextVNode("Edit", -1)])]),
										_: 1
									}, 8, ["href"])]),
									_: 2
								}, 1024)]);
							}), 128))]))]),
							_: 1
						}),
						props.recentQuizzes.length > 0 ? (openBlock(), createBlock(unref(CardFooter_default), {
							key: 0,
							class: "border-t pt-3"
						}, {
							default: withCtx(() => [createVNode(unref(Button_default), {
								variant: "outline",
								size: "sm",
								class: "w-full",
								"as-child": ""
							}, {
								default: withCtx(() => [createVNode(unref(link_default), { href: unref(create)() }, {
									default: withCtx(() => [createVNode(unref(Plus), { class: "size-4" }), _cache[14] || (_cache[14] = createTextVNode(" Create new quiz ", -1))]),
									_: 1
								}, 8, ["href"])]),
								_: 1
							})]),
							_: 1
						})) : createCommentVNode("", true)
					]),
					_: 1
				}), createVNode(unref(Card_default), { class: "flex flex-col" }, {
					default: withCtx(() => [
						createVNode(unref(CardHeader_default), { class: "flex flex-row items-center justify-between gap-2 pb-3" }, {
							default: withCtx(() => [createVNode(unref(CardTitle_default), { class: "text-base" }, {
								default: withCtx(() => [..._cache[15] || (_cache[15] = [createTextVNode("My recent attempts", -1)])]),
								_: 1
							}), createVNode(unref(Button_default), {
								variant: "ghost",
								size: "sm",
								class: "gap-1 text-xs",
								"as-child": ""
							}, {
								default: withCtx(() => [createVNode(unref(link_default), { href: unref(index)() }, {
									default: withCtx(() => [_cache[16] || (_cache[16] = createTextVNode(" View all ", -1)), createVNode(unref(ChevronRight), { class: "size-3.5" })]),
									_: 1
								}, 8, ["href"])]),
								_: 1
							})]),
							_: 1
						}),
						createVNode(unref(CardContent_default), { class: "flex-1 px-0" }, {
							default: withCtx(() => [props.recentAttempts.length === 0 ? (openBlock(), createElementBlock("div", _hoisted_25, [
								createBaseVNode("div", _hoisted_26, [createVNode(unref(ClipboardList), { class: "size-5 text-muted-foreground" })]),
								_cache[18] || (_cache[18] = createBaseVNode("div", null, [createBaseVNode("p", { class: "text-sm font-medium" }, "No attempts yet"), createBaseVNode("p", { class: "mt-0.5 text-xs text-muted-foreground" }, " Join a quiz with a share code to get started. ")], -1)),
								createVNode(unref(Button_default), {
									size: "sm",
									variant: "outline",
									"as-child": ""
								}, {
									default: withCtx(() => [createVNode(unref(link_default), { href: unref(join)().url }, {
										default: withCtx(() => [createVNode(unref(LogIn), { class: "size-4" }), _cache[17] || (_cache[17] = createTextVNode(" Join by code ", -1))]),
										_: 1
									}, 8, ["href"])]),
									_: 1
								})
							])) : (openBlock(), createElementBlock("ul", _hoisted_27, [(openBlock(true), createElementBlock(Fragment, null, renderList(props.recentAttempts, (attempt) => {
								return openBlock(), createElementBlock("li", {
									key: attempt.id,
									class: "flex items-center gap-3 px-6 py-3 transition-colors hover:bg-muted/40"
								}, [createBaseVNode("div", _hoisted_28, [createBaseVNode("p", _hoisted_29, toDisplayString(attempt.quiz?.title ?? "Unknown quiz"), 1), createBaseVNode("div", _hoisted_30, [createVNode(unref(Badge_default), {
									variant: attempt.status === "graded" ? "success" : attempt.status === "in_progress" ? "secondary" : "outline",
									class: "text-xs"
								}, {
									default: withCtx(() => [createTextVNode(toDisplayString(attemptStatusLabel(attempt.status)), 1)]),
									_: 2
								}, 1032, ["variant"]), createBaseVNode("span", _hoisted_31, toDisplayString(toDateLabel(attempt.submitted_at ?? attempt.created_at)), 1)])]), createBaseVNode("div", _hoisted_32, [createBaseVNode("p", _hoisted_33, toDisplayString(attempt.total_score) + " pt" + toDisplayString(attempt.total_score === 1 ? "" : "s"), 1), createBaseVNode("p", _hoisted_34, "#" + toDisplayString(attempt.attempt_number), 1)])]);
							}), 128))]))]),
							_: 1
						}),
						props.recentAttempts.length > 0 ? (openBlock(), createBlock(unref(CardFooter_default), {
							key: 0,
							class: "border-t pt-3"
						}, {
							default: withCtx(() => [createVNode(unref(Button_default), {
								variant: "outline",
								size: "sm",
								class: "w-full",
								"as-child": ""
							}, {
								default: withCtx(() => [createVNode(unref(link_default), { href: unref(join)().url }, {
									default: withCtx(() => [createVNode(unref(LogIn), { class: "size-4" }), _cache[19] || (_cache[19] = createTextVNode(" Join a quiz ", -1))]),
									_: 1
								}, 8, ["href"])]),
								_: 1
							})]),
							_: 1
						})) : createCommentVNode("", true)
					]),
					_: 1
				})])
			])], 64);
		};
	}
});
//#endregion
export { Dashboard_default as default };
