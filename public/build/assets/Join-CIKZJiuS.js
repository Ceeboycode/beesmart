import { $ as watch, C as createCommentVNode, D as createVNode, E as createTextVNode, G as renderList, O as defineComponent, S as createBlock, St as normalizeClass, Tt as toDisplayString, U as openBlock, _ as Fragment, a as head_default, b as computed, bt as unref, c as useForm, ft as ref, h as withModifiers, nt as withCtx, w as createElementBlock, x as createBaseVNode } from "./wayfinder-BXUQpGRW.js";
import { t as QuizStartDialog_default } from "./QuizStartDialog-By9lT3a-.js";
import { t as TriangleAlert } from "./triangle-alert-CDzfvRL1.js";
import { E as createLucideIcon, S as Button_default, c as start, s as resolveCode } from "./app-DSvgGTY4.js";
import { t as InputError_default } from "./InputError-Bml3M7fg.js";
import { a as index } from "./quizzes-BeiZx3-W.js";
import { a as Dialog_default, i as DialogContent_default, n as DialogHeader_default, r as DialogDescription_default, t as DialogTitle_default } from "./DialogTitle-DHUh_OBy.js";
import { t as DialogFooter_default } from "./DialogFooter-D46N6ahy.js";
import { i as Card_default, n as CardHeader_default, r as CardContent_default, t as CardTitle_default } from "./CardTitle-By1pZAMj.js";
import { t as CardDescription_default } from "./CardDescription-GPZiYSdY.js";
import { n as InputOTPGroup_default, r as InputOTP_default, t as InputOTPSlot_default } from "./InputOTPSlot-LZNfmv5L.js";
//#region node_modules/lucide-vue-next/dist/esm/icons/ticket.js
/**
* @license lucide-vue-next v0.468.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var Ticket = createLucideIcon("TicketIcon", [
	["path", {
		d: "M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z",
		key: "qn84l0"
	}],
	["path", {
		d: "M13 5v2",
		key: "dyzc3o"
	}],
	["path", {
		d: "M13 17v2",
		key: "1ont0d"
	}],
	["path", {
		d: "M13 11v2",
		key: "1wjjxi"
	}]
]);
//#endregion
//#region resources/js/pages/Attempt/Join.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1 = { class: "flex min-h-[calc(100vh-4rem)] items-center justify-center p-6" };
var _hoisted_2 = { class: "mb-2 flex size-14 items-center justify-center rounded-full bg-primary/10" };
var _hoisted_3 = { class: "mx-auto mb-2 flex size-12 items-center justify-center rounded-full bg-amber-100 dark:bg-amber-900/30" };
//#endregion
//#region resources/js/pages/Attempt/Join.vue
var Join_default = /* @__PURE__ */ defineComponent({
	layout: { breadcrumbs: [{
		title: "Quizzes",
		href: index()
	}, {
		title: "Join",
		href: "#"
	}] },
	__name: "Join",
	props: {
		quiz: {},
		validatedCode: {}
	},
	setup(__props) {
		const props = __props;
		const form = useForm({ quiz_code: "" });
		const isComplete = computed(() => form.quiz_code.length === 6);
		const dialogOpen = ref(false);
		const invalidDialogOpen = ref(false);
		const shouldOpenDialog = ref(false);
		const lastValidatedCode = ref(null);
		const sanitizeQuizCode = (value) => value.replace(/\D/g, "").slice(0, 6);
		watch(() => form.quiz_code, (value) => {
			const sanitized = sanitizeQuizCode(value);
			if (sanitized !== value) form.quiz_code = sanitized;
			if (sanitized.length !== 6) {
				dialogOpen.value = false;
				invalidDialogOpen.value = false;
				shouldOpenDialog.value = false;
			}
		});
		watch(() => props.quiz, (quiz) => {
			if (quiz && shouldOpenDialog.value) {
				dialogOpen.value = true;
				shouldOpenDialog.value = false;
			}
		});
		watch(() => props.validatedCode, (code) => {
			if (code && code !== lastValidatedCode.value) {
				lastValidatedCode.value = code;
				dialogOpen.value = true;
			}
		}, { immediate: true });
		const requestStart = () => {
			if (!isComplete.value || form.processing || dialogOpen.value || invalidDialogOpen.value) return;
			if (props.quiz && lastValidatedCode.value === form.quiz_code) {
				dialogOpen.value = true;
				return;
			}
			form.clearErrors("quiz_code");
			invalidDialogOpen.value = false;
			shouldOpenDialog.value = true;
			form.post(resolveCode.url(), {
				preserveState: true,
				preserveScroll: true,
				onError: (errors) => {
					shouldOpenDialog.value = false;
					if (errors.quiz_code) {
						form.reset("quiz_code");
						invalidDialogOpen.value = true;
					}
				}
			});
		};
		const confirmStart = () => {
			if (!props.quiz) return;
			dialogOpen.value = false;
			form.post(start.url({ quiz: props.quiz.id }));
		};
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock(Fragment, null, [
				createVNode(unref(head_default), { title: "Join a quiz" }),
				createBaseVNode("div", _hoisted_1, [createVNode(unref(Card_default), { class: "w-full max-w-md border-primary/20 shadow-lg" }, {
					default: withCtx(() => [createVNode(unref(CardHeader_default), { class: "items-center text-center" }, {
						default: withCtx(() => [
							createBaseVNode("div", _hoisted_2, [createVNode(unref(Ticket), { class: "size-7 text-primary" })]),
							createVNode(unref(CardTitle_default), { class: "text-2xl" }, {
								default: withCtx(() => [..._cache[4] || (_cache[4] = [createTextVNode("Join a quiz", -1)])]),
								_: 1
							}),
							createVNode(unref(CardDescription_default), null, {
								default: withCtx(() => [..._cache[5] || (_cache[5] = [createTextVNode(" Enter the 6-digit code from the quiz creator. ", -1)])]),
								_: 1
							})
						]),
						_: 1
					}), createVNode(unref(CardContent_default), null, {
						default: withCtx(() => [createBaseVNode("form", {
							class: "flex flex-col items-center gap-6",
							onSubmit: withModifiers(requestStart, ["prevent"])
						}, [
							createVNode(unref(InputOTP_default), {
								modelValue: unref(form).quiz_code,
								"onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => unref(form).quiz_code = $event),
								maxlength: 6,
								inputmode: "numeric",
								class: normalizeClass(["gap-1.5", unref(form).errors.quiz_code ? "aria-invalid" : ""])
							}, {
								default: withCtx(() => [createVNode(unref(InputOTPGroup_default), null, {
									default: withCtx(() => [(openBlock(), createElementBlock(Fragment, null, renderList(6, (i) => {
										return createVNode(unref(InputOTPSlot_default), {
											key: `d-${i}`,
											index: i - 1,
											class: "size-12 text-lg font-semibold"
										}, null, 8, ["index"]);
									}), 64))]),
									_: 1
								})]),
								_: 1
							}, 8, ["modelValue", "class"]),
							!invalidDialogOpen.value ? (openBlock(), createBlock(InputError_default, {
								key: 0,
								message: unref(form).errors.quiz_code,
								class: "text-center"
							}, null, 8, ["message"])) : createCommentVNode("", true),
							createVNode(unref(Button_default), {
								type: "submit",
								class: "w-full",
								size: "lg",
								disabled: !isComplete.value || unref(form).processing
							}, {
								default: withCtx(() => [createTextVNode(toDisplayString(unref(form).processing ? "Joining…" : "Join quiz"), 1)]),
								_: 1
							}, 8, ["disabled"]),
							_cache[6] || (_cache[6] = createBaseVNode("p", { class: "text-center text-xs text-muted-foreground" }, " Quiz codes are 6 digits (e.g. 482913). ", -1))
						], 32)]),
						_: 1
					})]),
					_: 1
				})]),
				createVNode(QuizStartDialog_default, {
					open: dialogOpen.value,
					"onUpdate:open": _cache[1] || (_cache[1] = ($event) => dialogOpen.value = $event),
					quiz: props.quiz ?? void 0,
					processing: unref(form).processing,
					onConfirm: confirmStart
				}, null, 8, [
					"open",
					"quiz",
					"processing"
				]),
				createVNode(unref(Dialog_default), {
					open: invalidDialogOpen.value,
					"onUpdate:open": _cache[3] || (_cache[3] = ($event) => invalidDialogOpen.value = $event)
				}, {
					default: withCtx(() => [createVNode(unref(DialogContent_default), { class: "sm:max-w-md" }, {
						default: withCtx(() => [createVNode(unref(DialogHeader_default), null, {
							default: withCtx(() => [
								createBaseVNode("div", _hoisted_3, [createVNode(unref(TriangleAlert), { class: "size-6 text-amber-600 dark:text-amber-400" })]),
								createVNode(unref(DialogTitle_default), { class: "text-center text-xl" }, {
									default: withCtx(() => [..._cache[7] || (_cache[7] = [createTextVNode("Invalid quiz code", -1)])]),
									_: 1
								}),
								createVNode(unref(DialogDescription_default), { class: "text-center" }, {
									default: withCtx(() => [createTextVNode(toDisplayString(unref(form).errors.quiz_code || "That code does not match an active quiz."), 1)]),
									_: 1
								})
							]),
							_: 1
						}), createVNode(unref(DialogFooter_default), { class: "sm:justify-center" }, {
							default: withCtx(() => [createVNode(unref(Button_default), {
								class: "w-full sm:w-auto",
								onClick: _cache[2] || (_cache[2] = ($event) => invalidDialogOpen.value = false)
							}, {
								default: withCtx(() => [..._cache[8] || (_cache[8] = [createTextVNode(" OK ", -1)])]),
								_: 1
							})]),
							_: 1
						})]),
						_: 1
					})]),
					_: 1
				}, 8, ["open"])
			], 64);
		};
	}
});
//#endregion
export { Join_default as default };
