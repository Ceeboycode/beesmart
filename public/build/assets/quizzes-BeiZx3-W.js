import { K as renderSlot, L as mergeProps, O as defineComponent, S as createBlock, U as openBlock, bt as unref, n as queryParams, nt as withCtx, t as applyUrlDefaults } from "./wayfinder-BXUQpGRW.js";
import { N as reactiveOmit, St as cva, nt as Primitive, xt as cn } from "./app-DSvgGTY4.js";
//#endregion
//#region resources/js/components/ui/badge/Badge.vue
var Badge_default = /* @__PURE__ */ defineComponent({
	__name: "Badge",
	props: {
		asChild: { type: Boolean },
		as: {},
		variant: {},
		class: { type: [
			Boolean,
			null,
			String,
			Object,
			Array
		] }
	},
	setup(__props) {
		const props = __props;
		const delegatedProps = reactiveOmit(props, "class");
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(Primitive), mergeProps({
				"data-slot": "badge",
				class: unref(cn)(unref(badgeVariants)({ variant: __props.variant }), props.class)
			}, unref(delegatedProps)), {
				default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
				_: 3
			}, 16, ["class"]);
		};
	}
});
//#endregion
//#region resources/js/components/ui/badge/index.ts
var badgeVariants = cva("inline-flex items-center justify-center rounded-full border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden", {
	variants: { variant: {
		default: "border-transparent bg-primary text-primary-foreground [a&]:hover:bg-primary/90",
		secondary: "border-transparent bg-secondary text-secondary-foreground [a&]:hover:bg-secondary/90",
		destructive: "border-transparent bg-destructive text-white [a&]:hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
		outline: "text-foreground [a&]:hover:bg-accent [a&]:hover:text-accent-foreground",
		honey: "border-amber-300 bg-amber-100 text-amber-800 dark:border-amber-700 dark:bg-amber-900/30 dark:text-amber-300 [a&]:hover:bg-amber-200",
		success: "border-transparent bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-300 [a&]:hover:bg-emerald-200"
	} },
	defaultVariants: { variant: "default" }
});
//#endregion
//#region resources/js/routes/quizzes/index.ts
/**
* @see \App\Http\Controllers\QuizController::index
* @see app/Http/Controllers/QuizController.php:21
* @route '/quizzes'
*/
var index = (options) => ({
	url: index.url(options),
	method: "get"
});
index.definition = {
	methods: ["get", "head"],
	url: "/quizzes"
};
/**
* @see \App\Http\Controllers\QuizController::index
* @see app/Http/Controllers/QuizController.php:21
* @route '/quizzes'
*/
index.url = (options) => {
	return index.definition.url + queryParams(options);
};
/**
* @see \App\Http\Controllers\QuizController::index
* @see app/Http/Controllers/QuizController.php:21
* @route '/quizzes'
*/
index.get = (options) => ({
	url: index.url(options),
	method: "get"
});
/**
* @see \App\Http\Controllers\QuizController::index
* @see app/Http/Controllers/QuizController.php:21
* @route '/quizzes'
*/
index.head = (options) => ({
	url: index.url(options),
	method: "head"
});
/**
* @see \App\Http\Controllers\QuizController::index
* @see app/Http/Controllers/QuizController.php:21
* @route '/quizzes'
*/
var indexForm = (options) => ({
	action: index.url(options),
	method: "get"
});
/**
* @see \App\Http\Controllers\QuizController::index
* @see app/Http/Controllers/QuizController.php:21
* @route '/quizzes'
*/
indexForm.get = (options) => ({
	action: index.url(options),
	method: "get"
});
/**
* @see \App\Http\Controllers\QuizController::index
* @see app/Http/Controllers/QuizController.php:21
* @route '/quizzes'
*/
indexForm.head = (options) => ({
	action: index.url({ [options?.mergeQuery ? "mergeQuery" : "query"]: {
		_method: "HEAD",
		...options?.query ?? options?.mergeQuery ?? {}
	} }),
	method: "get"
});
index.form = indexForm;
/**
* @see \App\Http\Controllers\QuizController::create
* @see app/Http/Controllers/QuizController.php:49
* @route '/quizzes/create'
*/
var create = (options) => ({
	url: create.url(options),
	method: "get"
});
create.definition = {
	methods: ["get", "head"],
	url: "/quizzes/create"
};
/**
* @see \App\Http\Controllers\QuizController::create
* @see app/Http/Controllers/QuizController.php:49
* @route '/quizzes/create'
*/
create.url = (options) => {
	return create.definition.url + queryParams(options);
};
/**
* @see \App\Http\Controllers\QuizController::create
* @see app/Http/Controllers/QuizController.php:49
* @route '/quizzes/create'
*/
create.get = (options) => ({
	url: create.url(options),
	method: "get"
});
/**
* @see \App\Http\Controllers\QuizController::create
* @see app/Http/Controllers/QuizController.php:49
* @route '/quizzes/create'
*/
create.head = (options) => ({
	url: create.url(options),
	method: "head"
});
/**
* @see \App\Http\Controllers\QuizController::create
* @see app/Http/Controllers/QuizController.php:49
* @route '/quizzes/create'
*/
var createForm = (options) => ({
	action: create.url(options),
	method: "get"
});
/**
* @see \App\Http\Controllers\QuizController::create
* @see app/Http/Controllers/QuizController.php:49
* @route '/quizzes/create'
*/
createForm.get = (options) => ({
	action: create.url(options),
	method: "get"
});
/**
* @see \App\Http\Controllers\QuizController::create
* @see app/Http/Controllers/QuizController.php:49
* @route '/quizzes/create'
*/
createForm.head = (options) => ({
	action: create.url({ [options?.mergeQuery ? "mergeQuery" : "query"]: {
		_method: "HEAD",
		...options?.query ?? options?.mergeQuery ?? {}
	} }),
	method: "get"
});
create.form = createForm;
/**
* @see \App\Http\Controllers\QuizController::store
* @see app/Http/Controllers/QuizController.php:54
* @route '/quizzes'
*/
var store = (options) => ({
	url: store.url(options),
	method: "post"
});
store.definition = {
	methods: ["post"],
	url: "/quizzes"
};
/**
* @see \App\Http\Controllers\QuizController::store
* @see app/Http/Controllers/QuizController.php:54
* @route '/quizzes'
*/
store.url = (options) => {
	return store.definition.url + queryParams(options);
};
/**
* @see \App\Http\Controllers\QuizController::store
* @see app/Http/Controllers/QuizController.php:54
* @route '/quizzes'
*/
store.post = (options) => ({
	url: store.url(options),
	method: "post"
});
/**
* @see \App\Http\Controllers\QuizController::store
* @see app/Http/Controllers/QuizController.php:54
* @route '/quizzes'
*/
var storeForm = (options) => ({
	action: store.url(options),
	method: "post"
});
/**
* @see \App\Http\Controllers\QuizController::store
* @see app/Http/Controllers/QuizController.php:54
* @route '/quizzes'
*/
storeForm.post = (options) => ({
	action: store.url(options),
	method: "post"
});
store.form = storeForm;
/**
* @see \App\Http\Controllers\QuizController::show
* @see app/Http/Controllers/QuizController.php:83
* @route '/quizzes/{quiz}'
*/
var show = (args, options) => ({
	url: show.url(args, options),
	method: "get"
});
show.definition = {
	methods: ["get", "head"],
	url: "/quizzes/{quiz}"
};
/**
* @see \App\Http\Controllers\QuizController::show
* @see app/Http/Controllers/QuizController.php:83
* @route '/quizzes/{quiz}'
*/
show.url = (args, options) => {
	if (typeof args === "string" || typeof args === "number") args = { quiz: args };
	if (typeof args === "object" && !Array.isArray(args) && "id" in args) args = { quiz: args.id };
	if (Array.isArray(args)) args = { quiz: args[0] };
	args = applyUrlDefaults(args);
	const parsedArgs = { quiz: typeof args.quiz === "object" ? args.quiz.id : args.quiz };
	return show.definition.url.replace("{quiz}", parsedArgs.quiz.toString()).replace(/\/+$/, "") + queryParams(options);
};
/**
* @see \App\Http\Controllers\QuizController::show
* @see app/Http/Controllers/QuizController.php:83
* @route '/quizzes/{quiz}'
*/
show.get = (args, options) => ({
	url: show.url(args, options),
	method: "get"
});
/**
* @see \App\Http\Controllers\QuizController::show
* @see app/Http/Controllers/QuizController.php:83
* @route '/quizzes/{quiz}'
*/
show.head = (args, options) => ({
	url: show.url(args, options),
	method: "head"
});
/**
* @see \App\Http\Controllers\QuizController::show
* @see app/Http/Controllers/QuizController.php:83
* @route '/quizzes/{quiz}'
*/
var showForm = (args, options) => ({
	action: show.url(args, options),
	method: "get"
});
/**
* @see \App\Http\Controllers\QuizController::show
* @see app/Http/Controllers/QuizController.php:83
* @route '/quizzes/{quiz}'
*/
showForm.get = (args, options) => ({
	action: show.url(args, options),
	method: "get"
});
/**
* @see \App\Http\Controllers\QuizController::show
* @see app/Http/Controllers/QuizController.php:83
* @route '/quizzes/{quiz}'
*/
showForm.head = (args, options) => ({
	action: show.url(args, { [options?.mergeQuery ? "mergeQuery" : "query"]: {
		_method: "HEAD",
		...options?.query ?? options?.mergeQuery ?? {}
	} }),
	method: "get"
});
show.form = showForm;
/**
* @see \App\Http\Controllers\QuizController::edit
* @see app/Http/Controllers/QuizController.php:98
* @route '/quizzes/{quiz}/edit'
*/
var edit = (args, options) => ({
	url: edit.url(args, options),
	method: "get"
});
edit.definition = {
	methods: ["get", "head"],
	url: "/quizzes/{quiz}/edit"
};
/**
* @see \App\Http\Controllers\QuizController::edit
* @see app/Http/Controllers/QuizController.php:98
* @route '/quizzes/{quiz}/edit'
*/
edit.url = (args, options) => {
	if (typeof args === "string" || typeof args === "number") args = { quiz: args };
	if (typeof args === "object" && !Array.isArray(args) && "id" in args) args = { quiz: args.id };
	if (Array.isArray(args)) args = { quiz: args[0] };
	args = applyUrlDefaults(args);
	const parsedArgs = { quiz: typeof args.quiz === "object" ? args.quiz.id : args.quiz };
	return edit.definition.url.replace("{quiz}", parsedArgs.quiz.toString()).replace(/\/+$/, "") + queryParams(options);
};
/**
* @see \App\Http\Controllers\QuizController::edit
* @see app/Http/Controllers/QuizController.php:98
* @route '/quizzes/{quiz}/edit'
*/
edit.get = (args, options) => ({
	url: edit.url(args, options),
	method: "get"
});
/**
* @see \App\Http\Controllers\QuizController::edit
* @see app/Http/Controllers/QuizController.php:98
* @route '/quizzes/{quiz}/edit'
*/
edit.head = (args, options) => ({
	url: edit.url(args, options),
	method: "head"
});
/**
* @see \App\Http\Controllers\QuizController::edit
* @see app/Http/Controllers/QuizController.php:98
* @route '/quizzes/{quiz}/edit'
*/
var editForm = (args, options) => ({
	action: edit.url(args, options),
	method: "get"
});
/**
* @see \App\Http\Controllers\QuizController::edit
* @see app/Http/Controllers/QuizController.php:98
* @route '/quizzes/{quiz}/edit'
*/
editForm.get = (args, options) => ({
	action: edit.url(args, options),
	method: "get"
});
/**
* @see \App\Http\Controllers\QuizController::edit
* @see app/Http/Controllers/QuizController.php:98
* @route '/quizzes/{quiz}/edit'
*/
editForm.head = (args, options) => ({
	action: edit.url(args, { [options?.mergeQuery ? "mergeQuery" : "query"]: {
		_method: "HEAD",
		...options?.query ?? options?.mergeQuery ?? {}
	} }),
	method: "get"
});
edit.form = editForm;
/**
* @see \App\Http\Controllers\QuizController::update
* @see app/Http/Controllers/QuizController.php:120
* @route '/quizzes/{quiz}'
*/
var update = (args, options) => ({
	url: update.url(args, options),
	method: "put"
});
update.definition = {
	methods: ["put", "patch"],
	url: "/quizzes/{quiz}"
};
/**
* @see \App\Http\Controllers\QuizController::update
* @see app/Http/Controllers/QuizController.php:120
* @route '/quizzes/{quiz}'
*/
update.url = (args, options) => {
	if (typeof args === "string" || typeof args === "number") args = { quiz: args };
	if (typeof args === "object" && !Array.isArray(args) && "id" in args) args = { quiz: args.id };
	if (Array.isArray(args)) args = { quiz: args[0] };
	args = applyUrlDefaults(args);
	const parsedArgs = { quiz: typeof args.quiz === "object" ? args.quiz.id : args.quiz };
	return update.definition.url.replace("{quiz}", parsedArgs.quiz.toString()).replace(/\/+$/, "") + queryParams(options);
};
/**
* @see \App\Http\Controllers\QuizController::update
* @see app/Http/Controllers/QuizController.php:120
* @route '/quizzes/{quiz}'
*/
update.put = (args, options) => ({
	url: update.url(args, options),
	method: "put"
});
/**
* @see \App\Http\Controllers\QuizController::update
* @see app/Http/Controllers/QuizController.php:120
* @route '/quizzes/{quiz}'
*/
update.patch = (args, options) => ({
	url: update.url(args, options),
	method: "patch"
});
/**
* @see \App\Http\Controllers\QuizController::update
* @see app/Http/Controllers/QuizController.php:120
* @route '/quizzes/{quiz}'
*/
var updateForm = (args, options) => ({
	action: update.url(args, { [options?.mergeQuery ? "mergeQuery" : "query"]: {
		_method: "PUT",
		...options?.query ?? options?.mergeQuery ?? {}
	} }),
	method: "post"
});
/**
* @see \App\Http\Controllers\QuizController::update
* @see app/Http/Controllers/QuizController.php:120
* @route '/quizzes/{quiz}'
*/
updateForm.put = (args, options) => ({
	action: update.url(args, { [options?.mergeQuery ? "mergeQuery" : "query"]: {
		_method: "PUT",
		...options?.query ?? options?.mergeQuery ?? {}
	} }),
	method: "post"
});
/**
* @see \App\Http\Controllers\QuizController::update
* @see app/Http/Controllers/QuizController.php:120
* @route '/quizzes/{quiz}'
*/
updateForm.patch = (args, options) => ({
	action: update.url(args, { [options?.mergeQuery ? "mergeQuery" : "query"]: {
		_method: "PATCH",
		...options?.query ?? options?.mergeQuery ?? {}
	} }),
	method: "post"
});
update.form = updateForm;
/**
* @see \App\Http\Controllers\QuizController::destroy
* @see app/Http/Controllers/QuizController.php:148
* @route '/quizzes/{quiz}'
*/
var destroy = (args, options) => ({
	url: destroy.url(args, options),
	method: "delete"
});
destroy.definition = {
	methods: ["delete"],
	url: "/quizzes/{quiz}"
};
/**
* @see \App\Http\Controllers\QuizController::destroy
* @see app/Http/Controllers/QuizController.php:148
* @route '/quizzes/{quiz}'
*/
destroy.url = (args, options) => {
	if (typeof args === "string" || typeof args === "number") args = { quiz: args };
	if (typeof args === "object" && !Array.isArray(args) && "id" in args) args = { quiz: args.id };
	if (Array.isArray(args)) args = { quiz: args[0] };
	args = applyUrlDefaults(args);
	const parsedArgs = { quiz: typeof args.quiz === "object" ? args.quiz.id : args.quiz };
	return destroy.definition.url.replace("{quiz}", parsedArgs.quiz.toString()).replace(/\/+$/, "") + queryParams(options);
};
/**
* @see \App\Http\Controllers\QuizController::destroy
* @see app/Http/Controllers/QuizController.php:148
* @route '/quizzes/{quiz}'
*/
destroy.delete = (args, options) => ({
	url: destroy.url(args, options),
	method: "delete"
});
/**
* @see \App\Http\Controllers\QuizController::destroy
* @see app/Http/Controllers/QuizController.php:148
* @route '/quizzes/{quiz}'
*/
var destroyForm = (args, options) => ({
	action: destroy.url(args, { [options?.mergeQuery ? "mergeQuery" : "query"]: {
		_method: "DELETE",
		...options?.query ?? options?.mergeQuery ?? {}
	} }),
	method: "post"
});
/**
* @see \App\Http\Controllers\QuizController::destroy
* @see app/Http/Controllers/QuizController.php:148
* @route '/quizzes/{quiz}'
*/
destroyForm.delete = (args, options) => ({
	action: destroy.url(args, { [options?.mergeQuery ? "mergeQuery" : "query"]: {
		_method: "DELETE",
		...options?.query ?? options?.mergeQuery ?? {}
	} }),
	method: "post"
});
destroy.form = destroyForm;
/**
* @see \App\Http\Controllers\QuizController::regenerateCode
* @see app/Http/Controllers/QuizController.php:178
* @route '/quizzes/{quiz}/regenerate-code'
*/
var regenerateCode = (args, options) => ({
	url: regenerateCode.url(args, options),
	method: "post"
});
regenerateCode.definition = {
	methods: ["post"],
	url: "/quizzes/{quiz}/regenerate-code"
};
/**
* @see \App\Http\Controllers\QuizController::regenerateCode
* @see app/Http/Controllers/QuizController.php:178
* @route '/quizzes/{quiz}/regenerate-code'
*/
regenerateCode.url = (args, options) => {
	if (typeof args === "string" || typeof args === "number") args = { quiz: args };
	if (typeof args === "object" && !Array.isArray(args) && "id" in args) args = { quiz: args.id };
	if (Array.isArray(args)) args = { quiz: args[0] };
	args = applyUrlDefaults(args);
	const parsedArgs = { quiz: typeof args.quiz === "object" ? args.quiz.id : args.quiz };
	return regenerateCode.definition.url.replace("{quiz}", parsedArgs.quiz.toString()).replace(/\/+$/, "") + queryParams(options);
};
/**
* @see \App\Http\Controllers\QuizController::regenerateCode
* @see app/Http/Controllers/QuizController.php:178
* @route '/quizzes/{quiz}/regenerate-code'
*/
regenerateCode.post = (args, options) => ({
	url: regenerateCode.url(args, options),
	method: "post"
});
/**
* @see \App\Http\Controllers\QuizController::regenerateCode
* @see app/Http/Controllers/QuizController.php:178
* @route '/quizzes/{quiz}/regenerate-code'
*/
var regenerateCodeForm = (args, options) => ({
	action: regenerateCode.url(args, options),
	method: "post"
});
/**
* @see \App\Http\Controllers\QuizController::regenerateCode
* @see app/Http/Controllers/QuizController.php:178
* @route '/quizzes/{quiz}/regenerate-code'
*/
regenerateCodeForm.post = (args, options) => ({
	action: regenerateCode.url(args, options),
	method: "post"
});
regenerateCode.form = regenerateCodeForm;
/**
* @see \App\Http\Controllers\QuizController::toggleStatus
* @see app/Http/Controllers/QuizController.php:162
* @route '/quizzes/{quiz}/toggle-status'
*/
var toggleStatus = (args, options) => ({
	url: toggleStatus.url(args, options),
	method: "patch"
});
toggleStatus.definition = {
	methods: ["patch"],
	url: "/quizzes/{quiz}/toggle-status"
};
/**
* @see \App\Http\Controllers\QuizController::toggleStatus
* @see app/Http/Controllers/QuizController.php:162
* @route '/quizzes/{quiz}/toggle-status'
*/
toggleStatus.url = (args, options) => {
	if (typeof args === "string" || typeof args === "number") args = { quiz: args };
	if (typeof args === "object" && !Array.isArray(args) && "id" in args) args = { quiz: args.id };
	if (Array.isArray(args)) args = { quiz: args[0] };
	args = applyUrlDefaults(args);
	const parsedArgs = { quiz: typeof args.quiz === "object" ? args.quiz.id : args.quiz };
	return toggleStatus.definition.url.replace("{quiz}", parsedArgs.quiz.toString()).replace(/\/+$/, "") + queryParams(options);
};
/**
* @see \App\Http\Controllers\QuizController::toggleStatus
* @see app/Http/Controllers/QuizController.php:162
* @route '/quizzes/{quiz}/toggle-status'
*/
toggleStatus.patch = (args, options) => ({
	url: toggleStatus.url(args, options),
	method: "patch"
});
/**
* @see \App\Http\Controllers\QuizController::toggleStatus
* @see app/Http/Controllers/QuizController.php:162
* @route '/quizzes/{quiz}/toggle-status'
*/
var toggleStatusForm = (args, options) => ({
	action: toggleStatus.url(args, { [options?.mergeQuery ? "mergeQuery" : "query"]: {
		_method: "PATCH",
		...options?.query ?? options?.mergeQuery ?? {}
	} }),
	method: "post"
});
/**
* @see \App\Http\Controllers\QuizController::toggleStatus
* @see app/Http/Controllers/QuizController.php:162
* @route '/quizzes/{quiz}/toggle-status'
*/
toggleStatusForm.patch = (args, options) => ({
	action: toggleStatus.url(args, { [options?.mergeQuery ? "mergeQuery" : "query"]: {
		_method: "PATCH",
		...options?.query ?? options?.mergeQuery ?? {}
	} }),
	method: "post"
});
toggleStatus.form = toggleStatusForm;
/**
* @see \App\Http\Controllers\QuizAttemptController::attempts
* @see app/Http/Controllers/QuizAttemptController.php:17
* @route '/quizzes/{quiz}/attempts'
*/
var attempts = (args, options) => ({
	url: attempts.url(args, options),
	method: "get"
});
attempts.definition = {
	methods: ["get", "head"],
	url: "/quizzes/{quiz}/attempts"
};
/**
* @see \App\Http\Controllers\QuizAttemptController::attempts
* @see app/Http/Controllers/QuizAttemptController.php:17
* @route '/quizzes/{quiz}/attempts'
*/
attempts.url = (args, options) => {
	if (typeof args === "string" || typeof args === "number") args = { quiz: args };
	if (typeof args === "object" && !Array.isArray(args) && "id" in args) args = { quiz: args.id };
	if (Array.isArray(args)) args = { quiz: args[0] };
	args = applyUrlDefaults(args);
	const parsedArgs = { quiz: typeof args.quiz === "object" ? args.quiz.id : args.quiz };
	return attempts.definition.url.replace("{quiz}", parsedArgs.quiz.toString()).replace(/\/+$/, "") + queryParams(options);
};
/**
* @see \App\Http\Controllers\QuizAttemptController::attempts
* @see app/Http/Controllers/QuizAttemptController.php:17
* @route '/quizzes/{quiz}/attempts'
*/
attempts.get = (args, options) => ({
	url: attempts.url(args, options),
	method: "get"
});
/**
* @see \App\Http\Controllers\QuizAttemptController::attempts
* @see app/Http/Controllers/QuizAttemptController.php:17
* @route '/quizzes/{quiz}/attempts'
*/
attempts.head = (args, options) => ({
	url: attempts.url(args, options),
	method: "head"
});
/**
* @see \App\Http\Controllers\QuizAttemptController::attempts
* @see app/Http/Controllers/QuizAttemptController.php:17
* @route '/quizzes/{quiz}/attempts'
*/
var attemptsForm = (args, options) => ({
	action: attempts.url(args, options),
	method: "get"
});
/**
* @see \App\Http\Controllers\QuizAttemptController::attempts
* @see app/Http/Controllers/QuizAttemptController.php:17
* @route '/quizzes/{quiz}/attempts'
*/
attemptsForm.get = (args, options) => ({
	action: attempts.url(args, options),
	method: "get"
});
/**
* @see \App\Http\Controllers\QuizAttemptController::attempts
* @see app/Http/Controllers/QuizAttemptController.php:17
* @route '/quizzes/{quiz}/attempts'
*/
attemptsForm.head = (args, options) => ({
	action: attempts.url(args, { [options?.mergeQuery ? "mergeQuery" : "query"]: {
		_method: "HEAD",
		...options?.query ?? options?.mergeQuery ?? {}
	} }),
	method: "get"
});
attempts.form = attemptsForm;
Object.assign(index, index), Object.assign(create, create), Object.assign(store, store), Object.assign(show, show), Object.assign(edit, edit), Object.assign(update, update), Object.assign(destroy, destroy), Object.assign(regenerateCode, regenerateCode), Object.assign(toggleStatus, toggleStatus), Object.assign(attempts, attempts);
//#endregion
export { index as a, toggleStatus as c, edit as i, update as l, create as n, show as o, destroy as r, store as s, attempts as t, Badge_default as u };
