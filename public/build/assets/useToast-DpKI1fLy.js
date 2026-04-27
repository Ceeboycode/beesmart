import { c as createLucideIcon, aF as toast } from "./app-FZe8oXsS.js";
/**
 * @license lucide-vue-next v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const GripVertical = createLucideIcon("GripVerticalIcon", [
  ["circle", { cx: "9", cy: "12", r: "1", key: "1vctgf" }],
  ["circle", { cx: "9", cy: "5", r: "1", key: "hp0tcf" }],
  ["circle", { cx: "9", cy: "19", r: "1", key: "fkjjf6" }],
  ["circle", { cx: "15", cy: "12", r: "1", key: "1tmaij" }],
  ["circle", { cx: "15", cy: "5", r: "1", key: "19l28e" }],
  ["circle", { cx: "15", cy: "19", r: "1", key: "f4zoj3" }]
]);
/**
 * @license lucide-vue-next v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Trash2 = createLucideIcon("Trash2Icon", [
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
  ["path", { d: "M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6", key: "4alrt4" }],
  ["path", { d: "M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2", key: "v07s0e" }],
  ["line", { x1: "10", x2: "10", y1: "11", y2: "17", key: "1uufr5" }],
  ["line", { x1: "14", x2: "14", y1: "11", y2: "17", key: "xtxkd" }]
]);
function useToast() {
  function info(message, options) {
    return toast.info(message, options);
  }
  function success(message, options) {
    return toast.success(message, options);
  }
  function error(message, options) {
    return toast.error(message, options);
  }
  function warning(message, options) {
    return toast.warning(message, options);
  }
  function honey(message, options) {
    return toast(message, {
      ...options
    });
  }
  function loading(message, options) {
    return toast.loading(message, options);
  }
  function dismiss(id) {
    return toast.dismiss(id);
  }
  function promise(promiseFn, messages, options) {
    return toast.promise(promiseFn, {
      loading: messages.loading,
      success: messages.success,
      error: messages.error,
      ...options
    });
  }
  return { info, success, error, warning, honey, loading, dismiss, promise };
}
export {
  GripVertical as G,
  Trash2 as T,
  useToast as u
};
