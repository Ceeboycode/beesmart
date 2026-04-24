import { n as queryParams, t as applyUrlDefaults } from "./wayfinder-BXUQpGRW.js";
//#region resources/js/routes/attempts/index.ts
/**
* @see \App\Http\Controllers\QuizAttemptController::join
* @see app/Http/Controllers/QuizAttemptController.php:64
* @route '/join'
*/
var join = (options) => ({
	url: join.url(options),
	method: "get"
});
join.definition = {
	methods: ["get", "head"],
	url: "/join"
};
/**
* @see \App\Http\Controllers\QuizAttemptController::join
* @see app/Http/Controllers/QuizAttemptController.php:64
* @route '/join'
*/
join.url = (options) => {
	return join.definition.url + queryParams(options);
};
/**
* @see \App\Http\Controllers\QuizAttemptController::join
* @see app/Http/Controllers/QuizAttemptController.php:64
* @route '/join'
*/
join.get = (options) => ({
	url: join.url(options),
	method: "get"
});
/**
* @see \App\Http\Controllers\QuizAttemptController::join
* @see app/Http/Controllers/QuizAttemptController.php:64
* @route '/join'
*/
join.head = (options) => ({
	url: join.url(options),
	method: "head"
});
/**
* @see \App\Http\Controllers\QuizAttemptController::join
* @see app/Http/Controllers/QuizAttemptController.php:64
* @route '/join'
*/
var joinForm = (options) => ({
	action: join.url(options),
	method: "get"
});
/**
* @see \App\Http\Controllers\QuizAttemptController::join
* @see app/Http/Controllers/QuizAttemptController.php:64
* @route '/join'
*/
joinForm.get = (options) => ({
	action: join.url(options),
	method: "get"
});
/**
* @see \App\Http\Controllers\QuizAttemptController::join
* @see app/Http/Controllers/QuizAttemptController.php:64
* @route '/join'
*/
joinForm.head = (options) => ({
	action: join.url({ [options?.mergeQuery ? "mergeQuery" : "query"]: {
		_method: "HEAD",
		...options?.query ?? options?.mergeQuery ?? {}
	} }),
	method: "get"
});
join.form = joinForm;
/**
* @see \App\Http\Controllers\QuizAttemptController::resolve
* @see app/Http/Controllers/QuizAttemptController.php:72
* @route '/join'
*/
var resolve = (options) => ({
	url: resolve.url(options),
	method: "post"
});
resolve.definition = {
	methods: ["post"],
	url: "/join"
};
/**
* @see \App\Http\Controllers\QuizAttemptController::resolve
* @see app/Http/Controllers/QuizAttemptController.php:72
* @route '/join'
*/
resolve.url = (options) => {
	return resolve.definition.url + queryParams(options);
};
/**
* @see \App\Http\Controllers\QuizAttemptController::resolve
* @see app/Http/Controllers/QuizAttemptController.php:72
* @route '/join'
*/
resolve.post = (options) => ({
	url: resolve.url(options),
	method: "post"
});
/**
* @see \App\Http\Controllers\QuizAttemptController::resolve
* @see app/Http/Controllers/QuizAttemptController.php:72
* @route '/join'
*/
var resolveForm = (options) => ({
	action: resolve.url(options),
	method: "post"
});
/**
* @see \App\Http\Controllers\QuizAttemptController::resolve
* @see app/Http/Controllers/QuizAttemptController.php:72
* @route '/join'
*/
resolveForm.post = (options) => ({
	action: resolve.url(options),
	method: "post"
});
resolve.form = resolveForm;
/**
* @see \App\Http\Controllers\QuizAttemptController::start
* @see app/Http/Controllers/QuizAttemptController.php:101
* @route '/quizzes/{quiz}/attempts'
*/
var start = (args, options) => ({
	url: start.url(args, options),
	method: "post"
});
start.definition = {
	methods: ["post"],
	url: "/quizzes/{quiz}/attempts"
};
/**
* @see \App\Http\Controllers\QuizAttemptController::start
* @see app/Http/Controllers/QuizAttemptController.php:101
* @route '/quizzes/{quiz}/attempts'
*/
start.url = (args, options) => {
	if (typeof args === "string" || typeof args === "number") args = { quiz: args };
	if (typeof args === "object" && !Array.isArray(args) && "id" in args) args = { quiz: args.id };
	if (Array.isArray(args)) args = { quiz: args[0] };
	args = applyUrlDefaults(args);
	const parsedArgs = { quiz: typeof args.quiz === "object" ? args.quiz.id : args.quiz };
	return start.definition.url.replace("{quiz}", parsedArgs.quiz.toString()).replace(/\/+$/, "") + queryParams(options);
};
/**
* @see \App\Http\Controllers\QuizAttemptController::start
* @see app/Http/Controllers/QuizAttemptController.php:101
* @route '/quizzes/{quiz}/attempts'
*/
start.post = (args, options) => ({
	url: start.url(args, options),
	method: "post"
});
/**
* @see \App\Http\Controllers\QuizAttemptController::start
* @see app/Http/Controllers/QuizAttemptController.php:101
* @route '/quizzes/{quiz}/attempts'
*/
var startForm = (args, options) => ({
	action: start.url(args, options),
	method: "post"
});
/**
* @see \App\Http\Controllers\QuizAttemptController::start
* @see app/Http/Controllers/QuizAttemptController.php:101
* @route '/quizzes/{quiz}/attempts'
*/
startForm.post = (args, options) => ({
	action: start.url(args, options),
	method: "post"
});
start.form = startForm;
/**
* @see \App\Http\Controllers\QuizAttemptController::show
* @see app/Http/Controllers/QuizAttemptController.php:146
* @route '/attempts/{attempt}'
*/
var show = (args, options) => ({
	url: show.url(args, options),
	method: "get"
});
show.definition = {
	methods: ["get", "head"],
	url: "/attempts/{attempt}"
};
/**
* @see \App\Http\Controllers\QuizAttemptController::show
* @see app/Http/Controllers/QuizAttemptController.php:146
* @route '/attempts/{attempt}'
*/
show.url = (args, options) => {
	if (typeof args === "string" || typeof args === "number") args = { attempt: args };
	if (typeof args === "object" && !Array.isArray(args) && "id" in args) args = { attempt: args.id };
	if (Array.isArray(args)) args = { attempt: args[0] };
	args = applyUrlDefaults(args);
	const parsedArgs = { attempt: typeof args.attempt === "object" ? args.attempt.id : args.attempt };
	return show.definition.url.replace("{attempt}", parsedArgs.attempt.toString()).replace(/\/+$/, "") + queryParams(options);
};
/**
* @see \App\Http\Controllers\QuizAttemptController::show
* @see app/Http/Controllers/QuizAttemptController.php:146
* @route '/attempts/{attempt}'
*/
show.get = (args, options) => ({
	url: show.url(args, options),
	method: "get"
});
/**
* @see \App\Http\Controllers\QuizAttemptController::show
* @see app/Http/Controllers/QuizAttemptController.php:146
* @route '/attempts/{attempt}'
*/
show.head = (args, options) => ({
	url: show.url(args, options),
	method: "head"
});
/**
* @see \App\Http\Controllers\QuizAttemptController::show
* @see app/Http/Controllers/QuizAttemptController.php:146
* @route '/attempts/{attempt}'
*/
var showForm = (args, options) => ({
	action: show.url(args, options),
	method: "get"
});
/**
* @see \App\Http\Controllers\QuizAttemptController::show
* @see app/Http/Controllers/QuizAttemptController.php:146
* @route '/attempts/{attempt}'
*/
showForm.get = (args, options) => ({
	action: show.url(args, options),
	method: "get"
});
/**
* @see \App\Http\Controllers\QuizAttemptController::show
* @see app/Http/Controllers/QuizAttemptController.php:146
* @route '/attempts/{attempt}'
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
* @see \App\Http\Controllers\QuizAttemptController::submit
* @see app/Http/Controllers/QuizAttemptController.php:192
* @route '/attempts/{attempt}/submit'
*/
var submit = (args, options) => ({
	url: submit.url(args, options),
	method: "post"
});
submit.definition = {
	methods: ["post"],
	url: "/attempts/{attempt}/submit"
};
/**
* @see \App\Http\Controllers\QuizAttemptController::submit
* @see app/Http/Controllers/QuizAttemptController.php:192
* @route '/attempts/{attempt}/submit'
*/
submit.url = (args, options) => {
	if (typeof args === "string" || typeof args === "number") args = { attempt: args };
	if (typeof args === "object" && !Array.isArray(args) && "id" in args) args = { attempt: args.id };
	if (Array.isArray(args)) args = { attempt: args[0] };
	args = applyUrlDefaults(args);
	const parsedArgs = { attempt: typeof args.attempt === "object" ? args.attempt.id : args.attempt };
	return submit.definition.url.replace("{attempt}", parsedArgs.attempt.toString()).replace(/\/+$/, "") + queryParams(options);
};
/**
* @see \App\Http\Controllers\QuizAttemptController::submit
* @see app/Http/Controllers/QuizAttemptController.php:192
* @route '/attempts/{attempt}/submit'
*/
submit.post = (args, options) => ({
	url: submit.url(args, options),
	method: "post"
});
/**
* @see \App\Http\Controllers\QuizAttemptController::submit
* @see app/Http/Controllers/QuizAttemptController.php:192
* @route '/attempts/{attempt}/submit'
*/
var submitForm = (args, options) => ({
	action: submit.url(args, options),
	method: "post"
});
/**
* @see \App\Http\Controllers\QuizAttemptController::submit
* @see app/Http/Controllers/QuizAttemptController.php:192
* @route '/attempts/{attempt}/submit'
*/
submitForm.post = (args, options) => ({
	action: submit.url(args, options),
	method: "post"
});
submit.form = submitForm;
/**
* @see \App\Http\Controllers\QuizAttemptController::results
* @see app/Http/Controllers/QuizAttemptController.php:243
* @route '/attempts/{attempt}/results'
*/
var results = (args, options) => ({
	url: results.url(args, options),
	method: "get"
});
results.definition = {
	methods: ["get", "head"],
	url: "/attempts/{attempt}/results"
};
/**
* @see \App\Http\Controllers\QuizAttemptController::results
* @see app/Http/Controllers/QuizAttemptController.php:243
* @route '/attempts/{attempt}/results'
*/
results.url = (args, options) => {
	if (typeof args === "string" || typeof args === "number") args = { attempt: args };
	if (typeof args === "object" && !Array.isArray(args) && "id" in args) args = { attempt: args.id };
	if (Array.isArray(args)) args = { attempt: args[0] };
	args = applyUrlDefaults(args);
	const parsedArgs = { attempt: typeof args.attempt === "object" ? args.attempt.id : args.attempt };
	return results.definition.url.replace("{attempt}", parsedArgs.attempt.toString()).replace(/\/+$/, "") + queryParams(options);
};
/**
* @see \App\Http\Controllers\QuizAttemptController::results
* @see app/Http/Controllers/QuizAttemptController.php:243
* @route '/attempts/{attempt}/results'
*/
results.get = (args, options) => ({
	url: results.url(args, options),
	method: "get"
});
/**
* @see \App\Http\Controllers\QuizAttemptController::results
* @see app/Http/Controllers/QuizAttemptController.php:243
* @route '/attempts/{attempt}/results'
*/
results.head = (args, options) => ({
	url: results.url(args, options),
	method: "head"
});
/**
* @see \App\Http\Controllers\QuizAttemptController::results
* @see app/Http/Controllers/QuizAttemptController.php:243
* @route '/attempts/{attempt}/results'
*/
var resultsForm = (args, options) => ({
	action: results.url(args, options),
	method: "get"
});
/**
* @see \App\Http\Controllers\QuizAttemptController::results
* @see app/Http/Controllers/QuizAttemptController.php:243
* @route '/attempts/{attempt}/results'
*/
resultsForm.get = (args, options) => ({
	action: results.url(args, options),
	method: "get"
});
/**
* @see \App\Http\Controllers\QuizAttemptController::results
* @see app/Http/Controllers/QuizAttemptController.php:243
* @route '/attempts/{attempt}/results'
*/
resultsForm.head = (args, options) => ({
	action: results.url(args, { [options?.mergeQuery ? "mergeQuery" : "query"]: {
		_method: "HEAD",
		...options?.query ?? options?.mergeQuery ?? {}
	} }),
	method: "get"
});
results.form = resultsForm;
Object.assign(join, join), Object.assign(resolve, resolve), Object.assign(start, start), Object.assign(show, show), Object.assign(submit, submit), Object.assign(results, results);
//#endregion
export { results as n, join as t };
