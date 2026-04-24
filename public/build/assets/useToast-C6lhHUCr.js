import { E as createLucideIcon, a as toast } from "./app-DSvgGTY4.js";
//#region node_modules/lucide-vue-next/dist/esm/icons/trash-2.js
/**
* @license lucide-vue-next v0.468.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var Trash2 = createLucideIcon("Trash2Icon", [
	["path", {
		d: "M3 6h18",
		key: "d0wm0j"
	}],
	["path", {
		d: "M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",
		key: "4alrt4"
	}],
	["path", {
		d: "M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",
		key: "v07s0e"
	}],
	["line", {
		x1: "10",
		x2: "10",
		y1: "11",
		y2: "17",
		key: "1uufr5"
	}],
	["line", {
		x1: "14",
		x2: "14",
		y1: "11",
		y2: "17",
		key: "xtxkd"
	}]
]);
//#endregion
//#region resources/js/composables/useToast.ts
function useToast() {
	/** Standard info-style notification */
	function info(message, options) {
		return toast.info(message, options);
	}
	/** Green success notification */
	function success(message, options) {
		return toast.success(message, options);
	}
	/** Red error notification */
	function error(message, options) {
		return toast.error(message, options);
	}
	/** Yellow warning notification */
	function warning(message, options) {
		return toast.warning(message, options);
	}
	/** BeeSmart amber/honey branded notification */
	function honey(message, options) {
		return toast(message, { ...options });
	}
	/** Loading toast — returns the toast ID so you can dismiss it */
	function loading(message, options) {
		return toast.loading(message, options);
	}
	/** Dismiss a specific toast by ID, or all toasts if no ID given */
	function dismiss(id) {
		return toast.dismiss(id);
	}
	/** Promise toast — shows loading, then resolves to success or error */
	function promise(promiseFn, messages, options) {
		return toast.promise(promiseFn, {
			loading: messages.loading,
			success: messages.success,
			error: messages.error,
			...options
		});
	}
	return {
		info,
		success,
		error,
		warning,
		honey,
		loading,
		dismiss,
		promise
	};
}
//#endregion
export { Trash2 as n, useToast as t };
