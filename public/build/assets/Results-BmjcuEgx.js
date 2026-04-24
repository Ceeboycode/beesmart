import { C as createCommentVNode, D as createVNode, E as createTextVNode, G as renderList, O as defineComponent, S as createBlock, St as normalizeClass, Tt as toDisplayString, U as openBlock, _ as Fragment, a as head_default, b as computed, bt as unref, nt as withCtx, o as link_default, w as createElementBlock, wt as normalizeStyle, x as createBaseVNode } from "./wayfinder-BXUQpGRW.js";
import { t as CircleCheck } from "./circle-check-DcKo_p8T.js";
import { E as createLucideIcon, S as Button_default, x as _plugin_vue_export_helper_default } from "./app-DSvgGTY4.js";
import { a as index, t as attempts, u as Badge_default } from "./quizzes-BeiZx3-W.js";
import { i as Card_default, n as CardHeader_default, r as CardContent_default, t as CardTitle_default } from "./CardTitle-By1pZAMj.js";
//#region node_modules/lucide-vue-next/dist/esm/icons/circle-x.js
/**
* @license lucide-vue-next v0.468.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var CircleX = createLucideIcon("CircleXIcon", [
	["circle", {
		cx: "12",
		cy: "12",
		r: "10",
		key: "1mglay"
	}],
	["path", {
		d: "m15 9-6 6",
		key: "1uzhvr"
	}],
	["path", {
		d: "m9 9 6 6",
		key: "z0biqf"
	}]
]);
//#endregion
//#region node_modules/lucide-vue-next/dist/esm/icons/rotate-ccw.js
/**
* @license lucide-vue-next v0.468.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var RotateCcw = createLucideIcon("RotateCcwIcon", [["path", {
	d: "M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",
	key: "1357e3"
}], ["path", {
	d: "M3 3v5h5",
	key: "1xhq8a"
}]]);
//#endregion
//#region resources/js/components/ScoreDonut.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1$1 = { class: "flex select-none flex-col items-center gap-6" };
var _hoisted_2$1 = {
	class: "w-full",
	style: { "max-width": "440px" }
};
var _hoisted_3$1 = ["viewBox"];
var _hoisted_4$1 = ["points", "fill"];
var _hoisted_5$1 = ["points", "fill"];
var _hoisted_6$1 = ["points"];
var _hoisted_7$1 = { class: "text-center" };
var _hoisted_8$1 = { class: "mt-2 text-sm text-muted-foreground" };
var _hoisted_9$1 = { class: "flex flex-wrap justify-center gap-5 text-sm" };
var _hoisted_10$1 = { class: "flex items-center gap-2" };
var _hoisted_11$1 = { class: "flex items-center gap-2" };
var _hoisted_12$1 = { class: "flex items-center gap-2" };
var R = 18;
var GAP = 2.5;
//#endregion
//#region resources/js/components/ScoreDonut.vue
var ScoreDonut_default = /* @__PURE__ */ _plugin_vue_export_helper_default(/* @__PURE__ */ defineComponent({
	__name: "ScoreDonut",
	props: {
		score: {},
		maxScore: {},
		correct: {},
		incorrect: {},
		skipped: {},
		total: {}
	},
	setup(__props) {
		const props = __props;
		const percentage = computed(() => props.maxScore === 0 ? 0 : Math.round(props.score / props.maxScore * 100));
		const gradeColor = computed(() => {
			const p = percentage.value;
			if (p >= 75) return "#d97706";
			if (p >= 50) return "#d97706";
			return "#dc2626";
		});
		const gradeLabel = computed(() => {
			const p = percentage.value;
			if (p >= 90) return "Excellent!";
			if (p >= 75) return "Great job!";
			if (p >= 60) return "Good effort";
			return "Keep going!";
		});
		const COL_W = R * Math.sqrt(3);
		const ROW_H = R * 1.5;
		const PAD = R + 8;
		const numCols = computed(() => {
			if (props.total === 0) return 1;
			if (props.total <= 4) return props.total;
			if (props.total <= 8) return 4;
			if (props.total <= 12) return 5;
			if (props.total <= 18) return 6;
			return 7;
		});
		const numRows = computed(() => Math.max(1, Math.ceil(props.total / numCols.value)));
		const hexPts = (cx, cy, r) => Array.from({ length: 6 }, (_, i) => {
			const a = Math.PI / 3 * i - Math.PI / 6;
			return `${(cx + r * Math.cos(a)).toFixed(2)},${(cy + r * Math.sin(a)).toFixed(2)}`;
		}).join(" ");
		const cells = computed(() => {
			const out = [];
			let i = 0;
			for (let row = 0; row < numRows.value && i < props.total; row++) for (let col = 0; col < numCols.value && i < props.total; col++) {
				const x = PAD + col * COL_W + (row % 2 === 1 ? COL_W / 2 : 0);
				const y = PAD + row * ROW_H;
				const type = i < props.correct ? "correct" : i < props.correct + props.incorrect ? "incorrect" : "skipped";
				out.push({
					x,
					y,
					type,
					idx: i,
					outer: hexPts(x, y, R),
					fill: hexPts(x, y, R - GAP),
					shine: hexPts(x, y - R * .17, (R - GAP) * .42)
				});
				i++;
			}
			return out;
		});
		const vbW = computed(() => PAD * 2 + numCols.value * COL_W + (numRows.value > 1 ? COL_W / 2 : 0));
		const vbH = computed(() => PAD * 2 + (numRows.value - 1) * ROW_H + R * 2);
		const CELL_FILL = {
			correct: "#fbbf24",
			incorrect: "#e11d48",
			skipped: "#475569"
		};
		const CELL_SHADOW = {
			correct: "#92400e",
			incorrect: "#881337",
			skipped: "#1e293b"
		};
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", _hoisted_1$1, [
				createBaseVNode("div", _hoisted_2$1, [(openBlock(), createElementBlock("svg", {
					viewBox: `0 0 ${vbW.value} ${vbH.value}`,
					class: "w-full",
					style: { "overflow": "visible" },
					"aria-hidden": "true"
				}, [(openBlock(true), createElementBlock(Fragment, null, renderList(cells.value, (cell) => {
					return openBlock(), createElementBlock("g", { key: cell.idx }, [
						createBaseVNode("polygon", {
							points: cell.outer,
							fill: CELL_SHADOW[cell.type],
							opacity: "0.6"
						}, null, 8, _hoisted_4$1),
						createBaseVNode("polygon", {
							points: cell.fill,
							class: normalizeClass(["hx", `hx-${cell.type}`]),
							style: normalizeStyle({ animationDelay: cell.type === "correct" ? `${cell.idx * 55}ms, ${cell.idx * 55 + 450}ms` : `${cell.idx * 55}ms` }),
							fill: CELL_FILL[cell.type]
						}, null, 14, _hoisted_5$1),
						createBaseVNode("polygon", {
							points: cell.shine,
							fill: "rgba(255,255,255,0.28)"
						}, null, 8, _hoisted_6$1)
					]);
				}), 128))], 8, _hoisted_3$1))]),
				createBaseVNode("div", _hoisted_7$1, [createBaseVNode("p", {
					class: "text-5xl font-extrabold leading-none tracking-tight",
					style: normalizeStyle({ color: gradeColor.value })
				}, toDisplayString(percentage.value) + "% ", 5), createBaseVNode("p", _hoisted_8$1, toDisplayString(__props.score) + " / " + toDisplayString(__props.maxScore) + " points \xA0·\xA0 " + toDisplayString(gradeLabel.value), 1)]),
				createBaseVNode("div", _hoisted_9$1, [
					createBaseVNode("span", _hoisted_10$1, [
						_cache[0] || (_cache[0] = createBaseVNode("span", {
							class: "inline-block size-3.5 rounded-[3px]",
							style: { "background": "#fbbf24" }
						}, null, -1)),
						_cache[1] || (_cache[1] = createBaseVNode("span", { class: "text-muted-foreground" }, "Correct", -1)),
						createBaseVNode("strong", null, toDisplayString(__props.correct), 1)
					]),
					createBaseVNode("span", _hoisted_11$1, [
						_cache[2] || (_cache[2] = createBaseVNode("span", {
							class: "inline-block size-3.5 rounded-[3px]",
							style: { "background": "#e11d48" }
						}, null, -1)),
						_cache[3] || (_cache[3] = createBaseVNode("span", { class: "text-muted-foreground" }, "Incorrect", -1)),
						createBaseVNode("strong", null, toDisplayString(__props.incorrect), 1)
					]),
					createBaseVNode("span", _hoisted_12$1, [
						_cache[4] || (_cache[4] = createBaseVNode("span", {
							class: "inline-block size-3.5 rounded-[3px]",
							style: { "background": "#475569" }
						}, null, -1)),
						_cache[5] || (_cache[5] = createBaseVNode("span", { class: "text-muted-foreground" }, "Skipped", -1)),
						createBaseVNode("strong", null, toDisplayString(__props.skipped), 1)
					])
				])
			]);
		};
	}
}), [["__scopeId", "data-v-b21a2af0"]]);
//#endregion
//#region resources/js/pages/Attempt/Results.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1 = { class: "mx-auto flex w-full max-w-3xl flex-col gap-6 p-6" };
var _hoisted_2 = { class: "text-sm font-medium text-muted-foreground" };
var _hoisted_3 = { class: "flex flex-wrap justify-center gap-3" };
var _hoisted_4 = { class: "mb-3 flex flex-wrap items-center gap-2" };
var _hoisted_5 = { class: "mb-3 text-sm font-medium leading-relaxed" };
var _hoisted_6 = {
	key: 0,
	class: "grid gap-1.5"
};
var _hoisted_7 = {
	key: 2,
	class: "mt-0.5 size-4 shrink-0 rounded-full border"
};
var _hoisted_8 = { class: "flex-1" };
var _hoisted_9 = {
	key: 0,
	class: "text-xs text-muted-foreground"
};
var _hoisted_10 = {
	key: 1,
	class: "text-xs text-emerald-600"
};
var _hoisted_11 = {
	key: 1,
	class: "grid gap-1.5 text-sm"
};
var _hoisted_12 = { class: "rounded-md border bg-background px-3 py-2" };
var _hoisted_13 = { class: "mt-0.5" };
var _hoisted_14 = { class: "rounded-md border border-emerald-300 bg-emerald-50 px-3 py-2 dark:bg-emerald-900/20" };
var _hoisted_15 = { class: "mt-0.5" };
var _hoisted_16 = {
	key: 2,
	class: "mt-3 rounded-md bg-muted/50 px-3 py-2 text-xs text-muted-foreground"
};
//#endregion
//#region resources/js/pages/Attempt/Results.vue
var Results_default = /* @__PURE__ */ defineComponent({
	layout: { breadcrumbs: [{
		title: "Quizzes",
		href: index()
	}, {
		title: "Results",
		href: "#"
	}] },
	__name: "Results",
	props: {
		attempt: {},
		maxScore: {}
	},
	setup(__props) {
		const props = __props;
		const answerByQuestion = computed(() => {
			const map = {};
			for (const answer of props.attempt.answers) map[answer.question_id] = answer;
			return map;
		});
		const wasSelected = (questionId, choiceId) => Boolean(answerByQuestion.value[questionId]?.answer_json?.includes(choiceId));
		const userAnswered = (questionId) => {
			const answer = answerByQuestion.value[questionId];
			if (!answer) return false;
			return Boolean(answer.answer?.trim()) || (answer.answer_json?.length ?? 0) > 0;
		};
		const isCorrect = (question) => {
			const answer = answerByQuestion.value[question.id];
			return Boolean(answer) && answer.score === question.points && question.points > 0;
		};
		const correctCount = computed(() => props.attempt.quiz.questions.filter(isCorrect).length);
		const incorrectCount = computed(() => props.attempt.quiz.questions.filter((q) => userAnswered(q.id) && !isCorrect(q)).length);
		const skippedCount = computed(() => props.attempt.quiz.questions.filter((q) => !userAnswered(q.id)).length);
		const grade = computed(() => {
			const pct = props.maxScore === 0 ? 0 : Math.round(props.attempt.total_score / props.maxScore * 100);
			if (pct >= 90) return {
				label: "Excellent!",
				variant: "success"
			};
			if (pct >= 75) return {
				label: "Great job!",
				variant: "success"
			};
			if (pct >= 60) return {
				label: "Good effort",
				variant: "secondary"
			};
			return {
				label: "Keep practising",
				variant: "destructive"
			};
		});
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock(Fragment, null, [createVNode(unref(head_default), { title: `Results: ${props.attempt.quiz.title}` }, null, 8, ["title"]), createBaseVNode("div", _hoisted_1, [createVNode(unref(Card_default), { class: "overflow-hidden border-primary/20" }, {
				default: withCtx(() => [createVNode(unref(CardHeader_default), { class: "bg-gradient-to-br from-primary/5 to-transparent pb-4 text-center" }, {
					default: withCtx(() => [createBaseVNode("p", _hoisted_2, toDisplayString(props.attempt.quiz.title), 1), createVNode(unref(Badge_default), {
						variant: grade.value.variant,
						class: "mx-auto mt-1 w-fit text-sm"
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(grade.value.label), 1)]),
						_: 1
					}, 8, ["variant"])]),
					_: 1
				}), createVNode(unref(CardContent_default), { class: "flex flex-col items-center gap-6 pt-6" }, {
					default: withCtx(() => [createVNode(ScoreDonut_default, {
						score: props.attempt.total_score,
						"max-score": props.maxScore,
						correct: correctCount.value,
						incorrect: incorrectCount.value,
						skipped: skippedCount.value,
						total: props.attempt.quiz.questions.length
					}, null, 8, [
						"score",
						"max-score",
						"correct",
						"incorrect",
						"skipped",
						"total"
					]), createBaseVNode("div", _hoisted_3, [createVNode(unref(Button_default), {
						variant: "outline",
						"as-child": ""
					}, {
						default: withCtx(() => [createVNode(unref(link_default), { href: unref(index)() }, {
							default: withCtx(() => [..._cache[0] || (_cache[0] = [createTextVNode("Back to quizzes", -1)])]),
							_: 1
						}, 8, ["href"])]),
						_: 1
					}), createVNode(unref(Button_default), {
						variant: "outline",
						"as-child": ""
					}, {
						default: withCtx(() => [createVNode(unref(link_default), { href: unref(attempts)(props.attempt.quiz.id).url }, {
							default: withCtx(() => [createVNode(unref(RotateCcw), { class: "size-4" }), _cache[1] || (_cache[1] = createTextVNode(" All attempts ", -1))]),
							_: 1
						}, 8, ["href"])]),
						_: 1
					})])]),
					_: 1
				})]),
				_: 1
			}), createVNode(unref(Card_default), null, {
				default: withCtx(() => [createVNode(unref(CardHeader_default), null, {
					default: withCtx(() => [createVNode(unref(CardTitle_default), { class: "text-base" }, {
						default: withCtx(() => [..._cache[2] || (_cache[2] = [createTextVNode("Question review", -1)])]),
						_: 1
					})]),
					_: 1
				}), createVNode(unref(CardContent_default), { class: "flex flex-col gap-3" }, {
					default: withCtx(() => [(openBlock(true), createElementBlock(Fragment, null, renderList(props.attempt.quiz.questions, (question, index) => {
						return openBlock(), createElementBlock("div", {
							key: question.id,
							class: normalizeClass(["rounded-xl border bg-card p-4 shadow-sm", isCorrect(question) ? "border-emerald-200 dark:border-emerald-900" : !userAnswered(question.id) ? "" : "border-rose-200 dark:border-rose-900"])
						}, [
							createBaseVNode("div", _hoisted_4, [
								createVNode(unref(Badge_default), { variant: "outline" }, {
									default: withCtx(() => [createTextVNode("Q" + toDisplayString(index + 1), 1)]),
									_: 2
								}, 1024),
								createVNode(unref(Badge_default), { variant: isCorrect(question) ? "success" : !userAnswered(question.id) ? "secondary" : "destructive" }, {
									default: withCtx(() => [createTextVNode(toDisplayString(isCorrect(question) ? "Correct" : !userAnswered(question.id) ? "Skipped" : "Incorrect"), 1)]),
									_: 2
								}, 1032, ["variant"]),
								createVNode(unref(Badge_default), { variant: "honey" }, {
									default: withCtx(() => [createTextVNode(toDisplayString(answerByQuestion.value[question.id]?.score ?? 0) + " / " + toDisplayString(question.points) + " pt" + toDisplayString(question.points === 1 ? "" : "s"), 1)]),
									_: 2
								}, 1024)
							]),
							createBaseVNode("p", _hoisted_5, toDisplayString(question.question_text), 1),
							question.type !== "short_answer" && question.choices?.length ? (openBlock(), createElementBlock("div", _hoisted_6, [(openBlock(true), createElementBlock(Fragment, null, renderList(question.choices, (choice) => {
								return openBlock(), createElementBlock("div", {
									key: choice.id,
									class: normalizeClass(["flex items-start gap-2 rounded-md border bg-background px-3 py-2 text-sm", [choice.is_correct ? "border-emerald-300 bg-emerald-50 dark:bg-emerald-900/20" : "", wasSelected(question.id, choice.id) && !choice.is_correct ? "border-rose-300 bg-rose-50 dark:bg-rose-900/20" : ""]])
								}, [choice.is_correct ? (openBlock(), createBlock(unref(CircleCheck), {
									key: 0,
									class: "mt-0.5 size-4 shrink-0 text-emerald-500"
								})) : wasSelected(question.id, choice.id) ? (openBlock(), createBlock(unref(CircleX), {
									key: 1,
									class: "mt-0.5 size-4 shrink-0 text-rose-500"
								})) : (openBlock(), createElementBlock("span", _hoisted_7)), createBaseVNode("span", _hoisted_8, [
									createTextVNode(toDisplayString(choice.choice_text) + " ", 1),
									wasSelected(question.id, choice.id) && !choice.is_correct ? (openBlock(), createElementBlock("span", _hoisted_9, " — your answer")) : createCommentVNode("", true),
									wasSelected(question.id, choice.id) && choice.is_correct ? (openBlock(), createElementBlock("span", _hoisted_10, " — your answer ✓")) : createCommentVNode("", true)
								])], 2);
							}), 128))])) : question.type === "short_answer" ? (openBlock(), createElementBlock("div", _hoisted_11, [createBaseVNode("div", _hoisted_12, [_cache[3] || (_cache[3] = createBaseVNode("span", { class: "text-xs font-medium uppercase text-muted-foreground" }, "Your answer", -1)), createBaseVNode("p", _hoisted_13, toDisplayString(answerByQuestion.value[question.id]?.answer || "—"), 1)]), createBaseVNode("div", _hoisted_14, [_cache[4] || (_cache[4] = createBaseVNode("span", { class: "text-xs font-medium uppercase text-muted-foreground" }, "Accepted", -1)), createBaseVNode("p", _hoisted_15, toDisplayString((question.correct_answer ?? []).join(" · ") || "—"), 1)])])) : createCommentVNode("", true),
							question.explanation ? (openBlock(), createElementBlock("p", _hoisted_16, [_cache[5] || (_cache[5] = createBaseVNode("span", { class: "font-semibold" }, "Why:", -1)), createTextVNode(" " + toDisplayString(question.explanation), 1)])) : createCommentVNode("", true)
						], 2);
					}), 128))]),
					_: 1
				})]),
				_: 1
			})])], 64);
		};
	}
});
//#endregion
export { Results_default as default };
