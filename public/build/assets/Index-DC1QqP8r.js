import { c as createLucideIcon, Q as queryParams, R as applyUrlDefaults, d as defineComponent, o as openBlock, k as createBlock, g as withCtx, b as createVNode, e as unref, i as createTextVNode, f as createBaseVNode, t as toDisplayString, aw as withKeys, _ as _sfc_main$7, a as createElementBlock, F as Fragment, r as renderList, n as normalizeClass, l as createCommentVNode, ax as X, p as ref, H as router, w as watch, h as head_default, v as _sfc_main$9, x as link_default, ay as join, az as LayoutGrid, j as withModifiers, m as computed, s as start, aA as _sfc_main$e, aB as _sfc_main$f, aC as _sfc_main$g, aD as _sfc_main$h, aE as _sfc_main$i, y as normalizeStyle } from "./app-FZe8oXsS.js";
import { _ as _sfc_main$c } from "./ConfirmDialog.vue_vue_type_script_setup_true_lang-BrqZv0cw.js";
import { _ as _sfc_main$2, a as _sfc_main$3, b as _sfc_main$4, c as _sfc_main$5, d as _sfc_main$8 } from "./DialogTitle.vue_vue_type_script_setup_true_lang-BnppUMeH.js";
import { _ as _sfc_main$6 } from "./Input.vue_vue_type_script_setup_true_lang-CWD3gtEB.js";
import { P as Plus } from "./plus-BqyduFti.js";
import { C as Check } from "./check-DO8yqo7u.js";
import { T as Trash2, u as useToast, G as GripVertical } from "./useToast-DpKI1fLy.js";
import { _ as _sfc_main$b } from "./QuizStartDialog.vue_vue_type_script_setup_true_lang-BOmQCnQC.js";
import { c as create, _ as _sfc_main$a, i as index, d as assignCategory, t as toggleStatus, f as destroy$1, a as attempts, s as show, e as edit } from "./index-k5qqUSJu.js";
import { _ as _sfc_main$k, a as _sfc_main$m } from "./CardContent.vue_vue_type_script_setup_true_lang-n-UlRd_e.js";
import { C as ClipboardList, _ as _sfc_main$l } from "./CardFooter.vue_vue_type_script_setup_true_lang-CtOjHttm.js";
import { _ as _sfc_main$d, a as _sfc_main$j } from "./CardTitle.vue_vue_type_script_setup_true_lang-C3Ddipjo.js";
import { F as FolderOpen } from "./folder-open-DewPg2uP.js";
import { C as Copy } from "./copy-CC7GnCVt.js";
import { P as Play } from "./play-BzhWlS7d.js";
import "./DialogFooter.vue_vue_type_script_setup_true_lang-LUn7Xu4s.js";
import "./triangle-alert-RlSOkNJU.js";
import "./index-CyJYVQs2.js";
/**
 * @license lucide-vue-next v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const EllipsisVertical = createLucideIcon("EllipsisVerticalIcon", [
  ["circle", { cx: "12", cy: "12", r: "1", key: "41hilf" }],
  ["circle", { cx: "12", cy: "5", r: "1", key: "gxeob9" }],
  ["circle", { cx: "12", cy: "19", r: "1", key: "lyex9k" }]
]);
/**
 * @license lucide-vue-next v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const FolderPlus = createLucideIcon("FolderPlusIcon", [
  ["path", { d: "M12 10v6", key: "1bos4e" }],
  ["path", { d: "M9 13h6", key: "1uhe8q" }],
  [
    "path",
    {
      d: "M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",
      key: "1kt360"
    }
  ]
]);
/**
 * @license lucide-vue-next v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Folder = createLucideIcon("FolderIcon", [
  [
    "path",
    {
      d: "M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",
      key: "1kt360"
    }
  ]
]);
/**
 * @license lucide-vue-next v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Pencil = createLucideIcon("PencilIcon", [
  [
    "path",
    {
      d: "M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",
      key: "1a8usu"
    }
  ],
  ["path", { d: "m15 5 4 4", key: "1mk7zo" }]
]);
/**
 * @license lucide-vue-next v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const PowerOff = createLucideIcon("PowerOffIcon", [
  ["path", { d: "M18.36 6.64A9 9 0 0 1 20.77 15", key: "dxknvb" }],
  ["path", { d: "M6.16 6.16a9 9 0 1 0 12.68 12.68", key: "1x7qb5" }],
  ["path", { d: "M12 2v4", key: "3427ic" }],
  ["path", { d: "m2 2 20 20", key: "1ooewy" }]
]);
/**
 * @license lucide-vue-next v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Power = createLucideIcon("PowerIcon", [
  ["path", { d: "M12 2v10", key: "mnfbl" }],
  ["path", { d: "M18.4 6.6a9 9 0 1 1-12.77.04", key: "obofu9" }]
]);
/**
 * @license lucide-vue-next v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Settings2 = createLucideIcon("Settings2Icon", [
  ["path", { d: "M20 7h-9", key: "3s1dr2" }],
  ["path", { d: "M14 17H5", key: "gfn3mx" }],
  ["circle", { cx: "17", cy: "17", r: "3", key: "18b49y" }],
  ["circle", { cx: "7", cy: "7", r: "3", key: "dfmy0x" }]
]);
const store = (options) => ({
  url: store.url(options),
  method: "post"
});
store.definition = {
  methods: ["post"],
  url: "/categories"
};
store.url = (options) => {
  return store.definition.url + queryParams(options);
};
store.post = (options) => ({
  url: store.url(options),
  method: "post"
});
const storeForm = (options) => ({
  action: store.url(options),
  method: "post"
});
storeForm.post = (options) => ({
  action: store.url(options),
  method: "post"
});
store.form = storeForm;
const update = (args, options) => ({
  url: update.url(args, options),
  method: "put"
});
update.definition = {
  methods: ["put"],
  url: "/categories/{category}"
};
update.url = (args, options) => {
  if (typeof args === "string" || typeof args === "number") {
    args = { category: args };
  }
  if (typeof args === "object" && !Array.isArray(args) && "id" in args) {
    args = { category: args.id };
  }
  if (Array.isArray(args)) {
    args = {
      category: args[0]
    };
  }
  args = applyUrlDefaults(args);
  const parsedArgs = {
    category: typeof args.category === "object" ? args.category.id : args.category
  };
  return update.definition.url.replace("{category}", parsedArgs.category.toString()).replace(/\/+$/, "") + queryParams(options);
};
update.put = (args, options) => ({
  url: update.url(args, options),
  method: "put"
});
const updateForm = (args, options) => ({
  action: update.url(args, {
    [(options == null ? void 0 : options.mergeQuery) ? "mergeQuery" : "query"]: {
      _method: "PUT",
      ...(options == null ? void 0 : options.query) ?? (options == null ? void 0 : options.mergeQuery) ?? {}
    }
  }),
  method: "post"
});
updateForm.put = (args, options) => ({
  action: update.url(args, {
    [(options == null ? void 0 : options.mergeQuery) ? "mergeQuery" : "query"]: {
      _method: "PUT",
      ...(options == null ? void 0 : options.query) ?? (options == null ? void 0 : options.mergeQuery) ?? {}
    }
  }),
  method: "post"
});
update.form = updateForm;
const destroy = (args, options) => ({
  url: destroy.url(args, options),
  method: "delete"
});
destroy.definition = {
  methods: ["delete"],
  url: "/categories/{category}"
};
destroy.url = (args, options) => {
  if (typeof args === "string" || typeof args === "number") {
    args = { category: args };
  }
  if (typeof args === "object" && !Array.isArray(args) && "id" in args) {
    args = { category: args.id };
  }
  if (Array.isArray(args)) {
    args = {
      category: args[0]
    };
  }
  args = applyUrlDefaults(args);
  const parsedArgs = {
    category: typeof args.category === "object" ? args.category.id : args.category
  };
  return destroy.definition.url.replace("{category}", parsedArgs.category.toString()).replace(/\/+$/, "") + queryParams(options);
};
destroy.delete = (args, options) => ({
  url: destroy.url(args, options),
  method: "delete"
});
const destroyForm = (args, options) => ({
  action: destroy.url(args, {
    [(options == null ? void 0 : options.mergeQuery) ? "mergeQuery" : "query"]: {
      _method: "DELETE",
      ...(options == null ? void 0 : options.query) ?? (options == null ? void 0 : options.mergeQuery) ?? {}
    }
  }),
  method: "post"
});
destroyForm.delete = (args, options) => ({
  action: destroy.url(args, {
    [(options == null ? void 0 : options.mergeQuery) ? "mergeQuery" : "query"]: {
      _method: "DELETE",
      ...(options == null ? void 0 : options.query) ?? (options == null ? void 0 : options.mergeQuery) ?? {}
    }
  }),
  method: "post"
});
destroy.form = destroyForm;
const reorder = (args, options) => ({
  url: reorder.url(args, options),
  method: "post"
});
reorder.definition = {
  methods: ["post"],
  url: "/categories/{category}/reorder"
};
reorder.url = (args, options) => {
  if (typeof args === "string" || typeof args === "number") {
    args = { category: args };
  }
  if (typeof args === "object" && !Array.isArray(args) && "id" in args) {
    args = { category: args.id };
  }
  if (Array.isArray(args)) {
    args = {
      category: args[0]
    };
  }
  args = applyUrlDefaults(args);
  const parsedArgs = {
    category: typeof args.category === "object" ? args.category.id : args.category
  };
  return reorder.definition.url.replace("{category}", parsedArgs.category.toString()).replace(/\/+$/, "") + queryParams(options);
};
reorder.post = (args, options) => ({
  url: reorder.url(args, options),
  method: "post"
});
const reorderForm = (args, options) => ({
  action: reorder.url(args, options),
  method: "post"
});
reorderForm.post = (args, options) => ({
  action: reorder.url(args, options),
  method: "post"
});
reorder.form = reorderForm;
({
  store: Object.assign(store, store),
  update: Object.assign(update, update),
  destroy: Object.assign(destroy, destroy),
  reorder: Object.assign(reorder, reorder)
});
const _hoisted_1$1 = { class: "space-y-2" };
const _hoisted_2$1 = { class: "flex gap-2" };
const _hoisted_3$1 = ["title"];
const _hoisted_4$1 = {
  key: 0,
  class: "rounded-lg border bg-muted/30 p-2"
};
const _hoisted_5$1 = { class: "grid grid-cols-8 gap-1" };
const _hoisted_6$1 = ["onClick"];
const _hoisted_7$1 = { class: "mt-1 max-h-72 space-y-1 overflow-y-auto pr-1" };
const _hoisted_8$1 = {
  key: 0,
  class: "py-4 text-center text-sm text-muted-foreground"
};
const _hoisted_9$1 = { class: "flex items-center gap-2 px-3 py-2" };
const _hoisted_10$1 = {
  key: 0,
  class: "border-t px-3 pb-2 pt-2"
};
const _hoisted_11$1 = { class: "grid grid-cols-8 gap-1" };
const _hoisted_12$1 = ["onClick"];
const _hoisted_13$1 = {
  key: 1,
  class: "flex items-center gap-2 px-3 py-2"
};
const _hoisted_14$1 = { class: "flex size-7 shrink-0 items-center justify-center text-lg" };
const _hoisted_15$1 = { class: "min-w-0 flex-1" };
const _hoisted_16$1 = { class: "block truncate text-sm font-medium" };
const _hoisted_17$1 = { class: "text-xs text-muted-foreground" };
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "ManageCategoriesDialog",
  props: {
    open: { type: Boolean },
    categories: {}
  },
  emits: ["update:open"],
  setup(__props, { emit: __emit }) {
    const PRESET_EMOJIS = [
      "📚",
      "📖",
      "📝",
      "✏️",
      "📐",
      "📏",
      "🔬",
      "🔭",
      "🧪",
      "🧬",
      "🧮",
      "⚗️",
      "💻",
      "🖥️",
      "📱",
      "🎯",
      "🏆",
      "⭐",
      "💡",
      "🔍",
      "📊",
      "📈",
      "🗺️",
      "🎓",
      "🎨",
      "🎭",
      "🎵",
      "🎼",
      "🎮",
      "⚽",
      "🏃",
      "🌍",
      "🌊",
      "🌿",
      "🌺",
      "🏔️",
      "🏛️",
      "⚡",
      "🔥",
      "💧",
      "🌈",
      "🦁",
      "🐬",
      "🦋",
      "🌟",
      "✨",
      "💫",
      "🔐"
    ];
    const props = __props;
    const emit = __emit;
    const newName = ref("");
    const newIcon = ref("");
    const creating = ref(false);
    const showNewPicker = ref(false);
    function create2() {
      if (!newName.value.trim()) return;
      creating.value = true;
      showNewPicker.value = false;
      router.post(
        store().url,
        { name: newName.value.trim(), icon: newIcon.value || null },
        {
          preserveScroll: true,
          onSuccess: () => {
            newName.value = "";
            newIcon.value = "";
          },
          onFinish: () => {
            creating.value = false;
          }
        }
      );
    }
    const editingId = ref(null);
    const editingName = ref("");
    const editingIcon = ref("");
    const showEditPicker = ref(false);
    function startEdit(category) {
      editingId.value = category.id;
      editingName.value = category.name;
      editingIcon.value = category.icon ?? "";
      showEditPicker.value = false;
    }
    function cancelEdit() {
      editingId.value = null;
      editingName.value = "";
      editingIcon.value = "";
      showEditPicker.value = false;
    }
    function saveEdit(category) {
      if (!editingName.value.trim()) return;
      showEditPicker.value = false;
      router.put(
        update.url(category.id),
        { name: editingName.value.trim(), icon: editingIcon.value || null },
        {
          preserveScroll: true,
          onSuccess: () => {
            editingId.value = null;
          }
        }
      );
    }
    function remove(category) {
      router.delete(destroy.url(category.id), { preserveScroll: true });
    }
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(_sfc_main$8), {
        open: props.open,
        "onUpdate:open": _cache[6] || (_cache[6] = ($event) => emit("update:open", $event))
      }, {
        default: withCtx(() => [
          createVNode(unref(_sfc_main$2), { class: "sm:max-w-md" }, {
            default: withCtx(() => [
              createVNode(unref(_sfc_main$3), null, {
                default: withCtx(() => [
                  createVNode(unref(_sfc_main$4), null, {
                    default: withCtx(() => [..._cache[7] || (_cache[7] = [
                      createTextVNode("Manage folders", -1)
                    ])]),
                    _: 1
                  }),
                  createVNode(unref(_sfc_main$5), null, {
                    default: withCtx(() => [..._cache[8] || (_cache[8] = [
                      createTextVNode("Create, rename, or delete folders. Click the icon to pick an emoji.", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createBaseVNode("div", _hoisted_1$1, [
                createBaseVNode("div", _hoisted_2$1, [
                  createBaseVNode("button", {
                    type: "button",
                    class: "flex size-9 shrink-0 items-center justify-center rounded-lg border text-xl transition-colors hover:bg-muted",
                    title: showNewPicker.value ? "Close picker" : "Choose emoji",
                    onClick: _cache[0] || (_cache[0] = ($event) => showNewPicker.value = !showNewPicker.value)
                  }, toDisplayString(newIcon.value || "📁"), 9, _hoisted_3$1),
                  createVNode(unref(_sfc_main$6), {
                    modelValue: newName.value,
                    "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => newName.value = $event),
                    placeholder: "New folder name",
                    onKeydown: withKeys(create2, ["enter"])
                  }, null, 8, ["modelValue"]),
                  createVNode(unref(_sfc_main$7), {
                    disabled: !newName.value.trim() || creating.value,
                    size: "icon",
                    onClick: create2
                  }, {
                    default: withCtx(() => [
                      createVNode(unref(Plus), { class: "size-4" })
                    ]),
                    _: 1
                  }, 8, ["disabled"])
                ]),
                showNewPicker.value ? (openBlock(), createElementBlock("div", _hoisted_4$1, [
                  _cache[9] || (_cache[9] = createBaseVNode("p", { class: "mb-2 text-xs font-medium text-muted-foreground" }, "Choose an emoji", -1)),
                  createBaseVNode("div", _hoisted_5$1, [
                    (openBlock(), createElementBlock(Fragment, null, renderList(PRESET_EMOJIS, (emoji) => {
                      return createBaseVNode("button", {
                        key: emoji,
                        type: "button",
                        class: normalizeClass(["flex size-8 items-center justify-center rounded text-lg transition-colors hover:bg-background", emoji === newIcon.value ? "bg-primary/10 ring-1 ring-primary" : ""]),
                        onClick: ($event) => {
                          newIcon.value = emoji;
                          showNewPicker.value = false;
                        }
                      }, toDisplayString(emoji), 11, _hoisted_6$1);
                    }), 64)),
                    createBaseVNode("button", {
                      type: "button",
                      class: "flex size-8 items-center justify-center rounded text-xs text-muted-foreground transition-colors hover:bg-background hover:text-foreground",
                      title: "No emoji",
                      onClick: _cache[2] || (_cache[2] = ($event) => {
                        newIcon.value = "";
                        showNewPicker.value = false;
                      })
                    }, " ✕ ")
                  ])
                ])) : createCommentVNode("", true)
              ]),
              createBaseVNode("div", _hoisted_7$1, [
                props.categories.length === 0 ? (openBlock(), createElementBlock("p", _hoisted_8$1, " No folders yet. Create one above. ")) : createCommentVNode("", true),
                (openBlock(true), createElementBlock(Fragment, null, renderList(props.categories, (category) => {
                  return openBlock(), createElementBlock("div", {
                    key: category.id,
                    class: "rounded-md border"
                  }, [
                    editingId.value === category.id ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
                      createBaseVNode("div", _hoisted_9$1, [
                        createBaseVNode("button", {
                          type: "button",
                          class: "flex size-8 shrink-0 items-center justify-center rounded text-xl transition-colors hover:bg-muted",
                          onClick: _cache[3] || (_cache[3] = ($event) => showEditPicker.value = !showEditPicker.value)
                        }, toDisplayString(editingIcon.value || "📁"), 1),
                        createVNode(unref(_sfc_main$6), {
                          modelValue: editingName.value,
                          "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => editingName.value = $event),
                          class: "h-7 flex-1 text-sm",
                          onKeydown: [
                            withKeys(($event) => saveEdit(category), ["enter"]),
                            withKeys(cancelEdit, ["escape"])
                          ]
                        }, null, 8, ["modelValue", "onKeydown"]),
                        createVNode(unref(_sfc_main$7), {
                          size: "icon",
                          class: "size-7 shrink-0",
                          variant: "ghost",
                          onClick: ($event) => saveEdit(category)
                        }, {
                          default: withCtx(() => [
                            createVNode(unref(Check), { class: "size-3.5" })
                          ]),
                          _: 1
                        }, 8, ["onClick"]),
                        createVNode(unref(_sfc_main$7), {
                          size: "icon",
                          class: "size-7 shrink-0",
                          variant: "ghost",
                          onClick: cancelEdit
                        }, {
                          default: withCtx(() => [
                            createVNode(unref(X), { class: "size-3.5" })
                          ]),
                          _: 1
                        })
                      ]),
                      showEditPicker.value ? (openBlock(), createElementBlock("div", _hoisted_10$1, [
                        _cache[10] || (_cache[10] = createBaseVNode("p", { class: "mb-2 text-xs font-medium text-muted-foreground" }, "Choose an emoji", -1)),
                        createBaseVNode("div", _hoisted_11$1, [
                          (openBlock(), createElementBlock(Fragment, null, renderList(PRESET_EMOJIS, (emoji) => {
                            return createBaseVNode("button", {
                              key: emoji,
                              type: "button",
                              class: normalizeClass(["flex size-8 items-center justify-center rounded text-lg transition-colors hover:bg-muted", emoji === editingIcon.value ? "bg-primary/10 ring-1 ring-primary" : ""]),
                              onClick: ($event) => {
                                editingIcon.value = emoji;
                                showEditPicker.value = false;
                              }
                            }, toDisplayString(emoji), 11, _hoisted_12$1);
                          }), 64)),
                          createBaseVNode("button", {
                            type: "button",
                            class: "flex size-8 items-center justify-center rounded text-xs text-muted-foreground transition-colors hover:bg-muted hover:text-foreground",
                            title: "No emoji",
                            onClick: _cache[5] || (_cache[5] = ($event) => {
                              editingIcon.value = "";
                              showEditPicker.value = false;
                            })
                          }, " ✕ ")
                        ])
                      ])) : createCommentVNode("", true)
                    ], 64)) : (openBlock(), createElementBlock("div", _hoisted_13$1, [
                      createBaseVNode("span", _hoisted_14$1, [
                        createTextVNode(toDisplayString(category.icon || "") + " ", 1),
                        !category.icon ? (openBlock(), createBlock(unref(Folder), {
                          key: 0,
                          class: "size-4 text-amber-400"
                        })) : createCommentVNode("", true)
                      ]),
                      createBaseVNode("div", _hoisted_15$1, [
                        createBaseVNode("span", _hoisted_16$1, toDisplayString(category.name), 1),
                        createBaseVNode("span", _hoisted_17$1, toDisplayString(category.quiz_count) + " quiz" + toDisplayString(category.quiz_count !== 1 ? "zes" : ""), 1)
                      ]),
                      createVNode(unref(_sfc_main$7), {
                        size: "icon",
                        class: "size-7 shrink-0",
                        variant: "ghost",
                        onClick: ($event) => startEdit(category)
                      }, {
                        default: withCtx(() => [
                          createVNode(unref(Pencil), { class: "size-3.5" })
                        ]),
                        _: 1
                      }, 8, ["onClick"]),
                      createVNode(unref(_sfc_main$7), {
                        size: "icon",
                        class: "size-7 shrink-0 text-destructive hover:text-destructive",
                        variant: "ghost",
                        onClick: ($event) => remove(category)
                      }, {
                        default: withCtx(() => [
                          createVNode(unref(Trash2), { class: "size-3.5" })
                        ]),
                        _: 1
                      }, 8, ["onClick"])
                    ]))
                  ]);
                }), 128))
              ])
            ]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["open"]);
    };
  }
});
const _hoisted_1 = { class: "flex flex-col gap-6 p-4 sm:p-6" };
const _hoisted_2 = { class: "flex flex-wrap items-start justify-between gap-3" };
const _hoisted_3 = { class: "flex gap-2" };
const _hoisted_4 = {
  key: 0,
  class: "space-y-3"
};
const _hoisted_5 = { class: "flex items-center justify-between" };
const _hoisted_6 = { class: "mt-0.5 text-xs text-muted-foreground" };
const _hoisted_7 = {
  class: "grid gap-3",
  style: { "grid-template-columns": "repeat(auto-fill, minmax(110px, 1fr))" }
};
const _hoisted_8 = { class: "w-full" };
const _hoisted_9 = { class: "text-xs text-muted-foreground" };
const _hoisted_10 = ["onDragover", "onDrop", "onClick"];
const _hoisted_11 = {
  key: 0,
  class: "absolute inset-0 flex flex-col items-center justify-center gap-1 rounded-[10px]"
};
const _hoisted_12 = {
  key: 0,
  class: "text-2xl leading-none sm:text-3xl"
};
const _hoisted_13 = { class: "w-full" };
const _hoisted_14 = { class: "truncate text-xs font-semibold sm:text-sm" };
const _hoisted_15 = { class: "text-xs text-muted-foreground" };
const _hoisted_16 = {
  key: 2,
  class: "pointer-events-none absolute inset-0 rounded-[10px] ring-2 ring-amber-300/50"
};
const _hoisted_17 = {
  key: 0,
  class: "absolute inset-0 flex flex-col items-center justify-center gap-1 rounded-[10px]"
};
const _hoisted_18 = { class: "w-full" };
const _hoisted_19 = { class: "text-xs text-muted-foreground" };
const _hoisted_20 = {
  key: 2,
  class: "pointer-events-none absolute inset-0 rounded-[10px] ring-2 ring-slate-300/50"
};
const _hoisted_21 = {
  key: 0,
  class: "hidden items-center gap-2.5 rounded-lg border border-amber-200 bg-amber-50 px-4 py-2.5 text-sm text-amber-800 dark:border-amber-800/50 dark:bg-amber-950/40 dark:text-amber-300 sm:flex"
};
const _hoisted_22 = {
  key: 1,
  class: "flex flex-wrap items-center gap-2 text-sm"
};
const _hoisted_23 = { class: "flex items-center gap-1.5 font-semibold" };
const _hoisted_24 = {
  key: 0,
  class: "text-base leading-none"
};
const _hoisted_25 = {
  key: 2,
  class: "rounded-2xl border border-dashed p-10 text-center"
};
const _hoisted_26 = { class: "mt-4 flex flex-wrap justify-center gap-2" };
const _hoisted_27 = {
  key: 0,
  class: "flex items-center gap-3"
};
const _hoisted_28 = { class: "text-xs text-muted-foreground" };
const _hoisted_29 = { class: "grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3" };
const _hoisted_30 = { class: "flex items-start justify-between gap-2" };
const _hoisted_31 = { class: "flex flex-wrap items-center gap-1.5" };
const _hoisted_32 = {
  key: 0,
  class: "leading-none"
};
const _hoisted_33 = { class: "flex shrink-0 items-center gap-1" };
const _hoisted_34 = {
  key: 0,
  class: "ml-auto text-xs text-muted-foreground"
};
const _hoisted_35 = {
  key: 0,
  class: "ml-auto max-w-[80px] truncate text-xs text-muted-foreground"
};
const _hoisted_36 = { class: "line-clamp-2 text-sm text-muted-foreground" };
const _hoisted_37 = ["onClick"];
const _hoisted_38 = { class: "font-mono text-sm font-semibold tracking-[0.2em]" };
const _hoisted_39 = { class: "flex items-center gap-1 text-xs text-muted-foreground group-hover:text-foreground" };
const _hoisted_40 = { class: "text-xs text-muted-foreground" };
const _hoisted_41 = { class: "flex items-center gap-3 pt-2" };
const _hoisted_42 = { class: "text-sm font-semibold text-muted-foreground" };
const _hoisted_43 = { class: "text-xs text-muted-foreground" };
const _hoisted_44 = { class: "grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3" };
const _hoisted_45 = { class: "flex flex-wrap items-center gap-1.5" };
const _hoisted_46 = {
  key: 0,
  class: "leading-none"
};
const _hoisted_47 = { class: "line-clamp-2 text-sm text-muted-foreground" };
const _hoisted_48 = { class: "flex items-center justify-between rounded-md border bg-muted/30 px-3 py-2" };
const _hoisted_49 = { class: "font-mono text-sm font-semibold tracking-[0.2em]" };
const _hoisted_50 = { class: "text-xs text-muted-foreground" };
const _hoisted_51 = {
  key: 0,
  class: "flex items-center gap-2"
};
const _hoisted_52 = { class: "h-1.5 flex-1 overflow-hidden rounded-full bg-muted" };
const _hoisted_53 = { class: "shrink-0 text-xs text-muted-foreground" };
const _hoisted_54 = {
  key: 5,
  class: "rounded-2xl border border-dashed p-10 text-center"
};
const _hoisted_55 = { class: "mt-1 text-xs text-muted-foreground" };
const _hoisted_56 = { class: "font-medium text-foreground" };
const _hoisted_57 = { class: "space-y-1" };
const _hoisted_58 = {
  key: 0,
  class: "py-3 text-center text-sm text-muted-foreground"
};
const _hoisted_59 = ["onClick"];
const _hoisted_60 = {
  key: 0,
  class: "w-5 text-center text-lg leading-none"
};
const _hoisted_61 = { class: "flex-1 font-medium" };
const _hoisted_62 = {
  key: 1,
  class: "my-1 h-px bg-border"
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...{
    layout: {
      breadcrumbs: [{ title: "Quizzes", href: index() }]
    }
  },
  __name: "Index",
  props: {
    quizzes: {},
    joinedQuizzes: {},
    categories: {}
  },
  setup(__props) {
    const props = __props;
    const toast = useToast();
    const copiedId = ref(null);
    const activeFilter = ref(null);
    const localOrder = ref([...props.quizzes]);
    watch(
      () => props.quizzes,
      (quizzes) => {
        localOrder.value = [...quizzes];
      }
    );
    const filteredQuizzes = computed(() => {
      if (activeFilter.value === null) return localOrder.value;
      if (activeFilter.value === 0) return localOrder.value.filter((q) => !q.category_id);
      return localOrder.value.filter((q) => q.category_id === activeFilter.value);
    });
    const filteredJoinedQuizzes = computed(() => {
      if (activeFilter.value === null) return props.joinedQuizzes;
      if (activeFilter.value === 0) return props.joinedQuizzes.filter((q) => !q.category_id);
      return props.joinedQuizzes.filter((q) => q.category_id === activeFilter.value);
    });
    const uncategorizedCount = computed(
      () => localOrder.value.filter((q) => !q.category_id).length + props.joinedQuizzes.filter((q) => !q.category_id).length
    );
    const activeFolderLabel = computed(() => {
      var _a;
      if (activeFilter.value === null) return null;
      if (activeFilter.value === 0) return "Uncategorized";
      return ((_a = props.categories.find((c) => c.id === activeFilter.value)) == null ? void 0 : _a.name) ?? null;
    });
    const activeFolderIcon = computed(() => {
      var _a;
      if (activeFilter.value === null || activeFilter.value === 0) return null;
      return ((_a = props.categories.find((c) => c.id === activeFilter.value)) == null ? void 0 : _a.icon) ?? null;
    });
    const hasAnyQuizzes = computed(() => props.quizzes.length > 0 || props.joinedQuizzes.length > 0);
    const manageCategoriesOpen = ref(false);
    const startDialogOpen = ref(false);
    const startingQuiz = ref(null);
    const startingInProgress = ref(false);
    const deleteDialogOpen = ref(false);
    const deletingQuiz = ref(null);
    const deleteInProgress = ref(false);
    const toggleDialogOpen = ref(false);
    const togglingQuiz = ref(null);
    const toggleInProgress = ref(false);
    const moveDialogOpen = ref(false);
    const movingQuiz = ref(null);
    const openMoveDialog = (quiz) => {
      movingQuiz.value = quiz;
      moveDialogOpen.value = true;
    };
    const moveToCategory = (categoryId) => {
      if (!movingQuiz.value) return;
      const quiz = movingQuiz.value;
      moveDialogOpen.value = false;
      movingQuiz.value = null;
      const cat = categoryId ? props.categories.find((c) => c.id === categoryId) ?? null : null;
      localOrder.value = localOrder.value.map(
        (q) => q.id !== quiz.id ? q : { ...q, category_id: categoryId, category: cat ? { id: cat.id, name: cat.name } : null, sort_order: null }
      );
      router.patch(
        assignCategory.url(quiz.id),
        { category_id: categoryId },
        { preserveScroll: true }
      );
    };
    const draggedQuizId = ref(null);
    const dragOverChipKey = ref(null);
    const dragOverQuizId = ref(null);
    function onDragStart(event, quiz) {
      draggedQuizId.value = quiz.id;
      event.dataTransfer.effectAllowed = "move";
    }
    function onDragEnd() {
      draggedQuizId.value = null;
      dragOverChipKey.value = null;
      dragOverQuizId.value = null;
    }
    function onChipDragOver(event, key) {
      if (draggedQuizId.value === null) return;
      event.preventDefault();
      dragOverChipKey.value = key;
    }
    function onChipDragLeave() {
      dragOverChipKey.value = null;
    }
    function onChipDrop(event, categoryId) {
      event.preventDefault();
      const quizId = draggedQuizId.value;
      draggedQuizId.value = null;
      dragOverChipKey.value = null;
      if (quizId === null) return;
      const cat = categoryId ? props.categories.find((c) => c.id === categoryId) ?? null : null;
      localOrder.value = localOrder.value.map(
        (q) => q.id !== quizId ? q : { ...q, category_id: categoryId, category: cat ? { id: cat.id, name: cat.name } : null, sort_order: null }
      );
      router.patch(
        assignCategory.url(quizId),
        { category_id: categoryId },
        { preserveScroll: true }
      );
    }
    function onQuizDragOver(event, targetQuiz) {
      if (draggedQuizId.value === null || draggedQuizId.value === targetQuiz.id) return;
      const dragged = localOrder.value.find((q) => q.id === draggedQuizId.value);
      if (!dragged || dragged.category_id !== targetQuiz.category_id) return;
      event.preventDefault();
      dragOverQuizId.value = targetQuiz.id;
    }
    function onQuizDragLeave(targetQuiz) {
      if (dragOverQuizId.value === targetQuiz.id) dragOverQuizId.value = null;
    }
    function onQuizDrop(event, targetQuiz) {
      const draggedId = draggedQuizId.value;
      dragOverQuizId.value = null;
      if (draggedId === null) return;
      const dragged = localOrder.value.find((q) => q.id === draggedId);
      if (!dragged || dragged.category_id !== targetQuiz.category_id) return;
      event.preventDefault();
      event.stopPropagation();
      const next = [...localOrder.value];
      const fromIdx = next.findIndex((q) => q.id === draggedId);
      const toIdx = next.findIndex((q) => q.id === targetQuiz.id);
      next.splice(fromIdx, 1);
      next.splice(toIdx, 0, dragged);
      localOrder.value = next;
      const categoryId = dragged.category_id;
      if (categoryId) {
        const quizIds = next.filter((q) => q.category_id === categoryId).map((q) => q.id);
        router.post(reorder.url(categoryId), { quiz_ids: quizIds }, { preserveScroll: true });
      }
    }
    const toDateLabel = (value) => new Date(value).toLocaleDateString();
    const copyCode = async (quiz) => {
      try {
        await navigator.clipboard.writeText(quiz.quiz_code);
        copiedId.value = quiz.id;
        setTimeout(() => {
          if (copiedId.value === quiz.id) copiedId.value = null;
        }, 1500);
      } catch {
      }
    };
    const openToggleDialog = (quiz) => {
      togglingQuiz.value = quiz;
      toggleDialogOpen.value = true;
    };
    const confirmToggle = () => {
      if (!togglingQuiz.value) return;
      const quiz = togglingQuiz.value;
      const nextStatus = quiz.status === "active" ? "inactive" : "active";
      toggleInProgress.value = true;
      router.patch(
        toggleStatus.url(quiz.id),
        {},
        {
          preserveScroll: true,
          onSuccess: () => {
            toast.success(`"${quiz.title}" is now ${nextStatus}.`);
            toggleDialogOpen.value = false;
          },
          onError: () => toast.error("Failed to update quiz status."),
          onFinish: () => {
            toggleInProgress.value = false;
            togglingQuiz.value = null;
          }
        }
      );
    };
    const openStartDialog = (quiz) => {
      startingQuiz.value = quiz;
      startDialogOpen.value = true;
    };
    const confirmStart = () => {
      if (!startingQuiz.value) return;
      startingInProgress.value = true;
      router.post(
        start.url({ quiz: startingQuiz.value.id }),
        {},
        { onFinish: () => {
          startingInProgress.value = false;
        } }
      );
    };
    const openDeleteDialog = (quiz) => {
      deletingQuiz.value = quiz;
      deleteDialogOpen.value = true;
    };
    const confirmDelete = () => {
      if (!deletingQuiz.value) return;
      const quiz = deletingQuiz.value;
      deleteInProgress.value = true;
      router.delete(destroy$1.url(quiz.id), {
        preserveScroll: true,
        onSuccess: () => {
          toast.success(`"${quiz.title}" deleted.`);
          deleteDialogOpen.value = false;
        },
        onError: () => toast.error("Failed to delete quiz."),
        onFinish: () => {
          deleteInProgress.value = false;
          deletingQuiz.value = null;
        }
      });
    };
    return (_ctx, _cache) => {
      var _a, _b, _c, _d, _e, _f;
      return openBlock(), createElementBlock(Fragment, null, [
        createVNode(unref(head_default), { title: "Quizzes" }),
        createBaseVNode("div", _hoisted_1, [
          createBaseVNode("div", _hoisted_2, [
            createVNode(_sfc_main$9, {
              title: "Quiz library",
              description: "Browse, review, and manage all your quizzes."
            }),
            createBaseVNode("div", _hoisted_3, [
              createVNode(unref(_sfc_main$7), {
                variant: "outline",
                size: "sm",
                "as-child": ""
              }, {
                default: withCtx(() => [
                  createVNode(unref(link_default), {
                    href: unref(join)().url
                  }, {
                    default: withCtx(() => [..._cache[15] || (_cache[15] = [
                      createTextVNode("Join by code", -1)
                    ])]),
                    _: 1
                  }, 8, ["href"])
                ]),
                _: 1
              }),
              createVNode(unref(_sfc_main$7), {
                size: "sm",
                "as-child": ""
              }, {
                default: withCtx(() => [
                  createVNode(unref(link_default), {
                    href: unref(create)()
                  }, {
                    default: withCtx(() => [
                      createVNode(unref(Plus), { class: "size-4" }),
                      _cache[16] || (_cache[16] = createBaseVNode("span", { class: "hidden sm:inline" }, "Create quiz", -1)),
                      _cache[17] || (_cache[17] = createBaseVNode("span", { class: "sm:hidden" }, "Create", -1))
                    ]),
                    _: 1
                  }, 8, ["href"])
                ]),
                _: 1
              })
            ])
          ]),
          hasAnyQuizzes.value ? (openBlock(), createElementBlock("div", _hoisted_4, [
            createBaseVNode("div", _hoisted_5, [
              createBaseVNode("div", null, [
                _cache[20] || (_cache[20] = createBaseVNode("h2", { class: "text-sm font-semibold" }, "Folders", -1)),
                createBaseVNode("p", _hoisted_6, [
                  props.categories.length > 0 ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
                    _cache[18] || (_cache[18] = createBaseVNode("span", { class: "hidden sm:inline" }, "Click a folder to filter · Drag quiz cards onto a folder to assign", -1)),
                    _cache[19] || (_cache[19] = createBaseVNode("span", { class: "sm:hidden" }, "Tap a folder to filter quizzes", -1))
                  ], 64)) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
                    createTextVNode(" Group your quizzes by subject — create a folder to get started ")
                  ], 64))
                ])
              ]),
              createVNode(unref(_sfc_main$7), {
                variant: "ghost",
                size: "sm",
                class: "gap-1.5 text-muted-foreground hover:text-foreground",
                onClick: _cache[0] || (_cache[0] = ($event) => manageCategoriesOpen.value = true)
              }, {
                default: withCtx(() => [
                  createVNode(unref(Settings2), { class: "size-3.5" }),
                  _cache[21] || (_cache[21] = createBaseVNode("span", { class: "hidden sm:inline" }, "Manage", -1))
                ]),
                _: 1
              })
            ]),
            createBaseVNode("div", _hoisted_7, [
              createBaseVNode("button", {
                type: "button",
                class: normalizeClass(["flex cursor-pointer flex-col items-center gap-2 rounded-xl border-2 px-2 py-3 text-center transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring sm:px-3 sm:py-4", activeFilter.value === null ? "border-primary bg-primary/5 shadow-sm" : "border-border bg-card hover:border-primary/50 hover:bg-muted/40"]),
                onClick: _cache[1] || (_cache[1] = ($event) => activeFilter.value = null)
              }, [
                createVNode(unref(LayoutGrid), {
                  class: normalizeClass(["size-8 transition-colors sm:size-9", activeFilter.value === null ? "text-primary" : "text-muted-foreground"])
                }, null, 8, ["class"]),
                createBaseVNode("div", _hoisted_8, [
                  _cache[22] || (_cache[22] = createBaseVNode("p", { class: "truncate text-xs font-semibold sm:text-sm" }, "All", -1)),
                  createBaseVNode("p", _hoisted_9, toDisplayString(props.quizzes.length + props.joinedQuizzes.length), 1)
                ])
              ], 2),
              (openBlock(true), createElementBlock(Fragment, null, renderList(props.categories, (category) => {
                return openBlock(), createElementBlock("button", {
                  key: category.id,
                  type: "button",
                  class: normalizeClass(["group relative flex cursor-pointer flex-col items-center gap-2 rounded-xl border-2 px-2 py-3 text-center transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring sm:px-3 sm:py-4", [
                    dragOverChipKey.value === category.id ? "scale-[1.04] border-amber-400 bg-amber-50 shadow-xl dark:bg-amber-950/40" : activeFilter.value === category.id ? "border-amber-400 bg-amber-50/70 shadow-sm dark:bg-amber-950/20" : draggedQuizId.value !== null ? "border-dashed border-amber-300 bg-card hover:border-amber-400 hover:bg-amber-50/50 dark:hover:bg-amber-950/20" : "border-border bg-card hover:border-amber-300 hover:bg-amber-50/40 dark:bg-card dark:hover:bg-amber-950/10"
                  ]]),
                  onDragover: withModifiers(($event) => onChipDragOver($event, category.id), ["prevent"]),
                  onDragleave: onChipDragLeave,
                  onDrop: withModifiers(($event) => onChipDrop($event, category.id), ["prevent"]),
                  onClick: ($event) => activeFilter.value = category.id
                }, [
                  dragOverChipKey.value === category.id ? (openBlock(), createElementBlock("div", _hoisted_11, [
                    createVNode(unref(FolderOpen), { class: "size-8 animate-bounce text-amber-500 sm:size-9" }),
                    _cache[23] || (_cache[23] = createBaseVNode("span", { class: "text-xs font-bold text-amber-700 dark:text-amber-300" }, "Drop here", -1))
                  ])) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
                    category.icon ? (openBlock(), createElementBlock("span", _hoisted_12, toDisplayString(category.icon), 1)) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
                      activeFilter.value === category.id ? (openBlock(), createBlock(unref(FolderOpen), {
                        key: 0,
                        class: "size-8 text-amber-500 sm:size-9"
                      })) : (openBlock(), createBlock(unref(Folder), {
                        key: 1,
                        class: "size-8 text-amber-400 transition-transform group-hover:scale-110 group-hover:text-amber-500 sm:size-9"
                      }))
                    ], 64)),
                    createBaseVNode("div", _hoisted_13, [
                      createBaseVNode("p", _hoisted_14, toDisplayString(category.name), 1),
                      createBaseVNode("p", _hoisted_15, toDisplayString(category.quiz_count), 1)
                    ])
                  ], 64)),
                  draggedQuizId.value !== null && dragOverChipKey.value !== category.id ? (openBlock(), createElementBlock("div", _hoisted_16)) : createCommentVNode("", true)
                ], 42, _hoisted_10);
              }), 128)),
              createBaseVNode("button", {
                type: "button",
                class: normalizeClass(["group relative flex cursor-pointer flex-col items-center gap-2 rounded-xl border-2 px-2 py-3 text-center transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring sm:px-3 sm:py-4", [
                  dragOverChipKey.value === 0 ? "scale-[1.04] border-slate-400 bg-slate-50 shadow-xl dark:bg-slate-800/50" : activeFilter.value === 0 ? "border-slate-400 bg-slate-50/70 shadow-sm dark:bg-slate-800/20" : draggedQuizId.value !== null ? "border-dashed border-slate-300 bg-card hover:border-slate-400 hover:bg-slate-50/50" : "border-border bg-card hover:border-slate-300 hover:bg-slate-50/40 dark:bg-card"
                ]]),
                onDragover: _cache[2] || (_cache[2] = withModifiers(($event) => onChipDragOver($event, 0), ["prevent"])),
                onDragleave: onChipDragLeave,
                onDrop: _cache[3] || (_cache[3] = withModifiers(($event) => onChipDrop($event, null), ["prevent"])),
                onClick: _cache[4] || (_cache[4] = ($event) => activeFilter.value = 0)
              }, [
                dragOverChipKey.value === 0 ? (openBlock(), createElementBlock("div", _hoisted_17, [
                  createVNode(unref(FolderOpen), { class: "size-8 animate-bounce text-slate-500 sm:size-9" }),
                  _cache[24] || (_cache[24] = createBaseVNode("span", { class: "text-xs font-bold text-slate-600 dark:text-slate-300" }, "Unassign", -1))
                ])) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
                  activeFilter.value === 0 ? (openBlock(), createBlock(unref(FolderOpen), {
                    key: 0,
                    class: "size-8 text-slate-500 sm:size-9"
                  })) : (openBlock(), createBlock(unref(Folder), {
                    key: 1,
                    class: "size-8 text-slate-400 transition-transform group-hover:scale-110 group-hover:text-slate-500 sm:size-9"
                  })),
                  createBaseVNode("div", _hoisted_18, [
                    _cache[25] || (_cache[25] = createBaseVNode("p", { class: "truncate text-xs font-medium text-muted-foreground sm:text-sm" }, "Unfiled", -1)),
                    createBaseVNode("p", _hoisted_19, toDisplayString(uncategorizedCount.value), 1)
                  ])
                ], 64)),
                draggedQuizId.value !== null && dragOverChipKey.value !== 0 ? (openBlock(), createElementBlock("div", _hoisted_20)) : createCommentVNode("", true)
              ], 34),
              createBaseVNode("button", {
                type: "button",
                class: "group flex cursor-pointer flex-col items-center gap-2 rounded-xl border-2 border-dashed px-2 py-3 text-center transition-all hover:border-primary/60 hover:bg-primary/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring sm:px-3 sm:py-4",
                onClick: _cache[5] || (_cache[5] = ($event) => manageCategoriesOpen.value = true)
              }, [
                createVNode(unref(FolderPlus), { class: "size-8 text-muted-foreground/40 transition-all group-hover:scale-110 group-hover:text-primary sm:size-9" }),
                _cache[26] || (_cache[26] = createBaseVNode("p", { class: "text-xs font-medium text-muted-foreground group-hover:text-primary sm:text-sm" }, "New", -1))
              ])
            ]),
            draggedQuizId.value !== null ? (openBlock(), createElementBlock("div", _hoisted_21, [
              createVNode(unref(FolderOpen), { class: "size-4 shrink-0" }),
              _cache[27] || (_cache[27] = createBaseVNode("span", null, [
                createBaseVNode("span", { class: "font-semibold" }, "Drop onto a folder"),
                createTextVNode(" to assign it, or onto another quiz in the same folder to reorder. ")
              ], -1))
            ])) : createCommentVNode("", true)
          ])) : createCommentVNode("", true),
          activeFilter.value !== null ? (openBlock(), createElementBlock("div", _hoisted_22, [
            createBaseVNode("button", {
              type: "button",
              class: "text-muted-foreground underline-offset-2 hover:text-foreground hover:underline",
              onClick: _cache[6] || (_cache[6] = ($event) => activeFilter.value = null)
            }, " All quizzes "),
            _cache[28] || (_cache[28] = createBaseVNode("span", { class: "text-muted-foreground" }, "/", -1)),
            createBaseVNode("span", _hoisted_23, [
              activeFolderIcon.value ? (openBlock(), createElementBlock("span", _hoisted_24, toDisplayString(activeFolderIcon.value), 1)) : (openBlock(), createBlock(unref(FolderOpen), {
                key: 1,
                class: "size-4 text-amber-500"
              })),
              createTextVNode(" " + toDisplayString(activeFolderLabel.value) + " ", 1),
              createVNode(unref(_sfc_main$a), {
                variant: "secondary",
                class: "ml-0.5 px-1.5 py-0 text-xs font-normal"
              }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(filteredQuizzes.value.length + filteredJoinedQuizzes.value.length), 1)
                ]),
                _: 1
              })
            ])
          ])) : createCommentVNode("", true),
          !hasAnyQuizzes.value ? (openBlock(), createElementBlock("div", _hoisted_25, [
            _cache[31] || (_cache[31] = createBaseVNode("h3", { class: "text-base font-semibold" }, "No quizzes yet", -1)),
            _cache[32] || (_cache[32] = createBaseVNode("p", { class: "mt-1 text-sm text-muted-foreground" }, " Create your first quiz and share the auto-generated code with your learners. ", -1)),
            createBaseVNode("div", _hoisted_26, [
              createVNode(unref(_sfc_main$7), { "as-child": "" }, {
                default: withCtx(() => [
                  createVNode(unref(link_default), {
                    href: unref(create)()
                  }, {
                    default: withCtx(() => [
                      createVNode(unref(Plus), { class: "size-4" }),
                      _cache[29] || (_cache[29] = createTextVNode(" Create quiz ", -1))
                    ]),
                    _: 1
                  }, 8, ["href"])
                ]),
                _: 1
              }),
              createVNode(unref(_sfc_main$7), {
                variant: "outline",
                "as-child": ""
              }, {
                default: withCtx(() => [
                  createVNode(unref(link_default), {
                    href: unref(join)().url
                  }, {
                    default: withCtx(() => [..._cache[30] || (_cache[30] = [
                      createTextVNode("Join by code", -1)
                    ])]),
                    _: 1
                  }, 8, ["href"])
                ]),
                _: 1
              })
            ])
          ])) : createCommentVNode("", true),
          props.quizzes.length > 0 && filteredQuizzes.value.length > 0 ? (openBlock(), createElementBlock(Fragment, { key: 3 }, [
            activeFilter.value !== null || props.joinedQuizzes.length > 0 ? (openBlock(), createElementBlock("div", _hoisted_27, [
              _cache[33] || (_cache[33] = createBaseVNode("h2", { class: "text-sm font-semibold text-muted-foreground" }, "Your quizzes", -1)),
              _cache[34] || (_cache[34] = createBaseVNode("div", { class: "h-px flex-1 bg-border" }, null, -1)),
              createBaseVNode("span", _hoisted_28, toDisplayString(filteredQuizzes.value.length), 1)
            ])) : createCommentVNode("", true),
            createBaseVNode("div", _hoisted_29, [
              (openBlock(true), createElementBlock(Fragment, null, renderList(filteredQuizzes.value, (quiz) => {
                return openBlock(), createBlock(unref(_sfc_main$m), {
                  key: quiz.id,
                  class: normalizeClass(["flex h-full flex-col transition-shadow", [
                    draggedQuizId.value !== null ? "cursor-grabbing" : "",
                    dragOverQuizId.value === quiz.id ? "ring-2 ring-primary ring-offset-1" : ""
                  ]]),
                  draggable: "true",
                  onDragstart: ($event) => onDragStart($event, quiz),
                  onDragend: onDragEnd,
                  onDragover: ($event) => onQuizDragOver($event, quiz),
                  onDragleave: ($event) => onQuizDragLeave(quiz),
                  onDrop: ($event) => onQuizDrop($event, quiz)
                }, {
                  default: withCtx(() => [
                    createVNode(unref(_sfc_main$d), { class: "pb-2" }, {
                      default: withCtx(() => [
                        createBaseVNode("div", _hoisted_30, [
                          createBaseVNode("div", _hoisted_31, [
                            createVNode(unref(_sfc_main$a), {
                              variant: quiz.status === "active" ? "success" : "secondary",
                              class: "text-xs"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(quiz.status), 1)
                              ]),
                              _: 2
                            }, 1032, ["variant"]),
                            createVNode(unref(_sfc_main$a), {
                              variant: "honey",
                              class: "text-xs"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(quiz.source), 1)
                              ]),
                              _: 2
                            }, 1024),
                            quiz.category ? (openBlock(), createBlock(unref(_sfc_main$a), {
                              key: 0,
                              variant: "outline",
                              class: "gap-1 text-xs"
                            }, {
                              default: withCtx(() => {
                                var _a2, _b2;
                                return [
                                  ((_a2 = props.categories.find((c) => c.id === quiz.category_id)) == null ? void 0 : _a2.icon) ? (openBlock(), createElementBlock("span", _hoisted_32, toDisplayString((_b2 = props.categories.find((c) => c.id === quiz.category_id)) == null ? void 0 : _b2.icon), 1)) : (openBlock(), createBlock(unref(Folder), {
                                    key: 1,
                                    class: "size-3 text-amber-500"
                                  })),
                                  createTextVNode(" " + toDisplayString(quiz.category.name), 1)
                                ];
                              }),
                              _: 2
                            }, 1024)) : createCommentVNode("", true),
                            createVNode(unref(_sfc_main$a), {
                              variant: "outline",
                              class: "text-xs"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(quiz.questions_count) + " Q", 1)
                              ]),
                              _: 2
                            }, 1024),
                            createVNode(unref(_sfc_main$a), {
                              variant: "outline",
                              class: "gap-1 text-xs"
                            }, {
                              default: withCtx(() => [
                                createVNode(unref(ClipboardList), { class: "size-3" }),
                                createTextVNode(" " + toDisplayString(quiz.attempts_count), 1)
                              ]),
                              _: 2
                            }, 1024)
                          ]),
                          createBaseVNode("div", _hoisted_33, [
                            createVNode(unref(GripVertical), {
                              class: "hidden size-4 cursor-grab text-muted-foreground/50 sm:block",
                              title: "Drag to reorder within the same folder"
                            }),
                            createVNode(unref(_sfc_main$e), null, {
                              default: withCtx(() => [
                                createVNode(unref(_sfc_main$f), { "as-child": "" }, {
                                  default: withCtx(() => [
                                    createVNode(unref(_sfc_main$7), {
                                      variant: "ghost",
                                      size: "icon",
                                      class: "size-7 text-muted-foreground"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(unref(EllipsisVertical), { class: "size-4" })
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                }),
                                createVNode(unref(_sfc_main$g), {
                                  align: "end",
                                  class: "w-52"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(unref(_sfc_main$h), { "as-child": "" }, {
                                      default: withCtx(() => [
                                        createVNode(unref(link_default), {
                                          href: unref(attempts)(quiz.id).url
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(unref(ClipboardList), { class: "size-4" }),
                                            _cache[35] || (_cache[35] = createTextVNode(" View attempts ", -1)),
                                            quiz.attempts_count > 0 ? (openBlock(), createElementBlock("span", _hoisted_34, toDisplayString(quiz.attempts_count), 1)) : createCommentVNode("", true)
                                          ]),
                                          _: 2
                                        }, 1032, ["href"])
                                      ]),
                                      _: 2
                                    }, 1024),
                                    createVNode(unref(_sfc_main$h), {
                                      onClick: ($event) => openMoveDialog(quiz)
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(unref(FolderOpen), { class: "size-4" }),
                                        _cache[36] || (_cache[36] = createTextVNode(" Move to folder ", -1)),
                                        quiz.category ? (openBlock(), createElementBlock("span", _hoisted_35, toDisplayString(quiz.category.name), 1)) : createCommentVNode("", true)
                                      ]),
                                      _: 2
                                    }, 1032, ["onClick"]),
                                    createVNode(unref(_sfc_main$i)),
                                    createVNode(unref(_sfc_main$h), {
                                      onClick: ($event) => openToggleDialog(quiz)
                                    }, {
                                      default: withCtx(() => [
                                        quiz.status === "inactive" ? (openBlock(), createBlock(unref(Power), {
                                          key: 0,
                                          class: "size-4"
                                        })) : (openBlock(), createBlock(unref(PowerOff), {
                                          key: 1,
                                          class: "size-4"
                                        })),
                                        createTextVNode(" " + toDisplayString(quiz.status === "active" ? "Deactivate" : "Activate"), 1)
                                      ]),
                                      _: 2
                                    }, 1032, ["onClick"]),
                                    createVNode(unref(_sfc_main$i)),
                                    createVNode(unref(_sfc_main$h), {
                                      class: "text-destructive focus:text-destructive",
                                      onClick: ($event) => openDeleteDialog(quiz)
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(unref(Trash2), { class: "size-4" }),
                                        _cache[37] || (_cache[37] = createTextVNode(" Delete ", -1))
                                      ]),
                                      _: 1
                                    }, 8, ["onClick"])
                                  ]),
                                  _: 2
                                }, 1024)
                              ]),
                              _: 2
                            }, 1024)
                          ])
                        ]),
                        createVNode(unref(_sfc_main$j), { class: "mt-2 text-base sm:text-lg" }, {
                          default: withCtx(() => [
                            createVNode(unref(link_default), {
                              href: unref(show)(quiz.id),
                              class: "hover:underline"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(quiz.title), 1)
                              ]),
                              _: 2
                            }, 1032, ["href"])
                          ]),
                          _: 2
                        }, 1024)
                      ]),
                      _: 2
                    }, 1024),
                    createVNode(unref(_sfc_main$k), { class: "flex-1 space-y-3 pt-0" }, {
                      default: withCtx(() => {
                        var _a2;
                        return [
                          createBaseVNode("p", _hoisted_36, toDisplayString(quiz.description || "No description provided."), 1),
                          createBaseVNode("button", {
                            type: "button",
                            class: "group flex w-full items-center justify-between rounded-md border bg-muted/30 px-3 py-2 text-left transition hover:bg-muted",
                            onClick: ($event) => copyCode(quiz)
                          }, [
                            createBaseVNode("span", _hoisted_38, toDisplayString(quiz.quiz_code), 1),
                            createBaseVNode("span", _hoisted_39, [
                              createVNode(unref(Copy), { class: "size-3" }),
                              createTextVNode(" " + toDisplayString(copiedId.value === quiz.id ? "Copied" : "Copy"), 1)
                            ])
                          ], 8, _hoisted_37),
                          createBaseVNode("p", _hoisted_40, " Created " + toDisplayString(toDateLabel(quiz.created_at)) + " · " + toDisplayString(((_a2 = quiz.creator) == null ? void 0 : _a2.name) ?? "Unknown"), 1)
                        ];
                      }),
                      _: 2
                    }, 1024),
                    createVNode(unref(_sfc_main$l), { class: "flex-wrap gap-2 pt-2" }, {
                      default: withCtx(() => [
                        quiz.status === "active" && quiz.questions_count > 0 ? (openBlock(), createBlock(unref(_sfc_main$7), {
                          key: 0,
                          size: "sm",
                          onClick: ($event) => openStartDialog(quiz)
                        }, {
                          default: withCtx(() => [
                            createVNode(unref(Play), { class: "size-4" }),
                            _cache[38] || (_cache[38] = createTextVNode(" Take ", -1))
                          ]),
                          _: 1
                        }, 8, ["onClick"])) : createCommentVNode("", true),
                        createVNode(unref(_sfc_main$7), {
                          size: "sm",
                          variant: "secondary",
                          "as-child": ""
                        }, {
                          default: withCtx(() => [
                            createVNode(unref(link_default), {
                              href: unref(edit)(quiz.id)
                            }, {
                              default: withCtx(() => [..._cache[39] || (_cache[39] = [
                                createTextVNode("Edit", -1)
                              ])]),
                              _: 1
                            }, 8, ["href"])
                          ]),
                          _: 2
                        }, 1024)
                      ]),
                      _: 2
                    }, 1024)
                  ]),
                  _: 2
                }, 1032, ["class", "onDragstart", "onDragover", "onDragleave", "onDrop"]);
              }), 128))
            ])
          ], 64)) : createCommentVNode("", true),
          filteredJoinedQuizzes.value.length > 0 ? (openBlock(), createElementBlock(Fragment, { key: 4 }, [
            createBaseVNode("div", _hoisted_41, [
              createBaseVNode("h2", _hoisted_42, toDisplayString(activeFilter.value !== null ? "Joined quizzes in this folder" : "Joined quizzes"), 1),
              _cache[40] || (_cache[40] = createBaseVNode("div", { class: "h-px flex-1 bg-border" }, null, -1)),
              createBaseVNode("span", _hoisted_43, toDisplayString(filteredJoinedQuizzes.value.length), 1)
            ]),
            createBaseVNode("div", _hoisted_44, [
              (openBlock(true), createElementBlock(Fragment, null, renderList(filteredJoinedQuizzes.value, (quiz) => {
                return openBlock(), createBlock(unref(_sfc_main$m), {
                  key: quiz.id,
                  class: "flex h-full flex-col"
                }, {
                  default: withCtx(() => [
                    createVNode(unref(_sfc_main$d), { class: "pb-2" }, {
                      default: withCtx(() => [
                        createBaseVNode("div", _hoisted_45, [
                          createVNode(unref(_sfc_main$a), {
                            variant: quiz.status === "active" ? "success" : "secondary",
                            class: "text-xs"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(quiz.status), 1)
                            ]),
                            _: 2
                          }, 1032, ["variant"]),
                          quiz.category ? (openBlock(), createBlock(unref(_sfc_main$a), {
                            key: 0,
                            variant: "outline",
                            class: "gap-1 text-xs"
                          }, {
                            default: withCtx(() => {
                              var _a2, _b2;
                              return [
                                quiz.category_id && ((_a2 = props.categories.find((c) => c.id === quiz.category_id)) == null ? void 0 : _a2.icon) ? (openBlock(), createElementBlock("span", _hoisted_46, toDisplayString((_b2 = props.categories.find((c) => c.id === quiz.category_id)) == null ? void 0 : _b2.icon), 1)) : (openBlock(), createBlock(unref(Folder), {
                                  key: 1,
                                  class: "size-3 text-amber-500"
                                })),
                                createTextVNode(" " + toDisplayString(quiz.category.name), 1)
                              ];
                            }),
                            _: 2
                          }, 1024)) : createCommentVNode("", true),
                          createVNode(unref(_sfc_main$a), {
                            variant: "outline",
                            class: "text-xs"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(quiz.questions_count) + " Q", 1)
                            ]),
                            _: 2
                          }, 1024),
                          createVNode(unref(_sfc_main$a), {
                            variant: "outline",
                            class: "gap-1 text-xs"
                          }, {
                            default: withCtx(() => [
                              createVNode(unref(ClipboardList), { class: "size-3" }),
                              createTextVNode(" " + toDisplayString(quiz.my_attempts_count) + toDisplayString(quiz.max_attempts ? ` / ${quiz.max_attempts}` : ""), 1)
                            ]),
                            _: 2
                          }, 1024)
                        ]),
                        createVNode(unref(_sfc_main$j), { class: "mt-2 text-base sm:text-lg" }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(quiz.title), 1)
                          ]),
                          _: 2
                        }, 1024)
                      ]),
                      _: 2
                    }, 1024),
                    createVNode(unref(_sfc_main$k), { class: "flex-1 space-y-3 pt-0" }, {
                      default: withCtx(() => {
                        var _a2;
                        return [
                          createBaseVNode("p", _hoisted_47, toDisplayString(quiz.description || "No description provided."), 1),
                          createBaseVNode("div", _hoisted_48, [
                            createBaseVNode("span", _hoisted_49, toDisplayString(quiz.quiz_code), 1),
                            createBaseVNode("span", _hoisted_50, "by " + toDisplayString(((_a2 = quiz.creator) == null ? void 0 : _a2.name) ?? "Unknown"), 1)
                          ]),
                          quiz.max_attempts ? (openBlock(), createElementBlock("div", _hoisted_51, [
                            createBaseVNode("div", _hoisted_52, [
                              createBaseVNode("div", {
                                class: "h-full rounded-full bg-primary transition-all",
                                style: normalizeStyle({ width: `${Math.min(100, quiz.my_attempts_count / quiz.max_attempts * 100)}%` })
                              }, null, 4)
                            ]),
                            createBaseVNode("span", _hoisted_53, toDisplayString(quiz.my_attempts_count) + "/" + toDisplayString(quiz.max_attempts), 1)
                          ])) : createCommentVNode("", true)
                        ];
                      }),
                      _: 2
                    }, 1024),
                    createVNode(unref(_sfc_main$l), { class: "flex-wrap gap-2 pt-2" }, {
                      default: withCtx(() => [
                        quiz.status === "active" && quiz.questions_count > 0 && (!quiz.max_attempts || quiz.my_attempts_count < quiz.max_attempts) ? (openBlock(), createBlock(unref(_sfc_main$7), {
                          key: 0,
                          size: "sm",
                          onClick: ($event) => openStartDialog(quiz)
                        }, {
                          default: withCtx(() => [
                            createVNode(unref(Play), { class: "size-4" }),
                            _cache[41] || (_cache[41] = createTextVNode(" Take again ", -1))
                          ]),
                          _: 1
                        }, 8, ["onClick"])) : createCommentVNode("", true),
                        createVNode(unref(_sfc_main$7), {
                          size: "sm",
                          variant: "outline",
                          "as-child": ""
                        }, {
                          default: withCtx(() => [
                            createVNode(unref(link_default), {
                              href: unref(attempts)(quiz.id).url
                            }, {
                              default: withCtx(() => [
                                createVNode(unref(ClipboardList), { class: "size-3.5" }),
                                _cache[42] || (_cache[42] = createTextVNode(" My attempts ", -1))
                              ]),
                              _: 1
                            }, 8, ["href"])
                          ]),
                          _: 2
                        }, 1024)
                      ]),
                      _: 2
                    }, 1024)
                  ]),
                  _: 2
                }, 1024);
              }), 128))
            ])
          ], 64)) : createCommentVNode("", true),
          activeFilter.value !== null && filteredQuizzes.value.length === 0 && filteredJoinedQuizzes.value.length === 0 ? (openBlock(), createElementBlock("div", _hoisted_54, [
            createVNode(unref(FolderOpen), { class: "mx-auto size-12 text-muted-foreground/25" }),
            _cache[45] || (_cache[45] = createBaseVNode("p", { class: "mt-3 text-sm font-medium" }, "This folder is empty", -1)),
            createBaseVNode("p", _hoisted_55, [
              _cache[43] || (_cache[43] = createBaseVNode("span", { class: "hidden sm:inline" }, "Drag a quiz onto this folder, or ", -1)),
              createBaseVNode("button", {
                type: "button",
                class: "underline underline-offset-2 hover:text-foreground",
                onClick: _cache[7] || (_cache[7] = ($event) => activeFilter.value = null)
              }, "view all quizzes"),
              _cache[44] || (_cache[44] = createTextVNode(". ", -1))
            ])
          ])) : createCommentVNode("", true)
        ]),
        createVNode(_sfc_main$1, {
          open: manageCategoriesOpen.value,
          "onUpdate:open": _cache[8] || (_cache[8] = ($event) => manageCategoriesOpen.value = $event),
          categories: props.categories
        }, null, 8, ["open", "categories"]),
        createVNode(unref(_sfc_main$8), {
          open: moveDialogOpen.value,
          "onUpdate:open": _cache[11] || (_cache[11] = ($event) => moveDialogOpen.value = $event)
        }, {
          default: withCtx(() => [
            createVNode(unref(_sfc_main$2), { class: "sm:max-w-xs" }, {
              default: withCtx(() => {
                var _a2, _b2;
                return [
                  createVNode(unref(_sfc_main$3), null, {
                    default: withCtx(() => [
                      createVNode(unref(_sfc_main$4), null, {
                        default: withCtx(() => [..._cache[46] || (_cache[46] = [
                          createTextVNode("Move to folder", -1)
                        ])]),
                        _: 1
                      }),
                      createVNode(unref(_sfc_main$5), null, {
                        default: withCtx(() => {
                          var _a3;
                          return [
                            _cache[47] || (_cache[47] = createTextVNode(" Choose a folder for ", -1)),
                            createBaseVNode("span", _hoisted_56, toDisplayString((_a3 = movingQuiz.value) == null ? void 0 : _a3.title), 1),
                            _cache[48] || (_cache[48] = createTextVNode(". ", -1))
                          ];
                        }),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createBaseVNode("div", _hoisted_57, [
                    props.categories.length === 0 ? (openBlock(), createElementBlock("p", _hoisted_58, [
                      _cache[49] || (_cache[49] = createTextVNode(" No folders yet. ", -1)),
                      createBaseVNode("button", {
                        type: "button",
                        class: "underline underline-offset-2 hover:text-foreground",
                        onClick: _cache[9] || (_cache[9] = ($event) => {
                          moveDialogOpen.value = false;
                          manageCategoriesOpen.value = true;
                        })
                      }, " Create one ")
                    ])) : createCommentVNode("", true),
                    (openBlock(true), createElementBlock(Fragment, null, renderList(props.categories, (category) => {
                      var _a3, _b3;
                      return openBlock(), createElementBlock("button", {
                        key: category.id,
                        type: "button",
                        class: normalizeClass(["flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-left text-sm transition-colors hover:bg-muted", ((_a3 = movingQuiz.value) == null ? void 0 : _a3.category_id) === category.id ? "bg-muted" : ""]),
                        onClick: ($event) => moveToCategory(category.id)
                      }, [
                        category.icon ? (openBlock(), createElementBlock("span", _hoisted_60, toDisplayString(category.icon), 1)) : (openBlock(), createBlock(unref(Folder), {
                          key: 1,
                          class: "size-5 shrink-0 text-amber-400"
                        })),
                        createBaseVNode("span", _hoisted_61, toDisplayString(category.name), 1),
                        ((_b3 = movingQuiz.value) == null ? void 0 : _b3.category_id) === category.id ? (openBlock(), createBlock(unref(Check), {
                          key: 2,
                          class: "size-4 text-primary"
                        })) : createCommentVNode("", true)
                      ], 10, _hoisted_59);
                    }), 128)),
                    props.categories.length > 0 ? (openBlock(), createElementBlock("div", _hoisted_62)) : createCommentVNode("", true),
                    createBaseVNode("button", {
                      type: "button",
                      class: normalizeClass(["flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-left text-sm transition-colors hover:bg-muted", !((_a2 = movingQuiz.value) == null ? void 0 : _a2.category_id) ? "bg-muted" : ""]),
                      onClick: _cache[10] || (_cache[10] = ($event) => moveToCategory(null))
                    }, [
                      createVNode(unref(Folder), { class: "size-5 shrink-0 text-slate-400" }),
                      _cache[50] || (_cache[50] = createBaseVNode("span", { class: "flex-1 text-muted-foreground" }, "No folder", -1)),
                      !((_b2 = movingQuiz.value) == null ? void 0 : _b2.category_id) ? (openBlock(), createBlock(unref(Check), {
                        key: 0,
                        class: "size-4 text-primary"
                      })) : createCommentVNode("", true)
                    ], 2)
                  ])
                ];
              }),
              _: 1
            })
          ]),
          _: 1
        }, 8, ["open"]),
        createVNode(_sfc_main$b, {
          open: startDialogOpen.value,
          "onUpdate:open": _cache[12] || (_cache[12] = ($event) => startDialogOpen.value = $event),
          quiz: startingQuiz.value ?? void 0,
          processing: startingInProgress.value,
          onConfirm: confirmStart
        }, null, 8, ["open", "quiz", "processing"]),
        createVNode(_sfc_main$c, {
          open: toggleDialogOpen.value,
          "onUpdate:open": _cache[13] || (_cache[13] = ($event) => toggleDialogOpen.value = $event),
          title: ((_a = togglingQuiz.value) == null ? void 0 : _a.status) === "active" ? "Deactivate quiz?" : "Activate quiz?",
          description: ((_b = togglingQuiz.value) == null ? void 0 : _b.status) === "active" ? `'${(_c = togglingQuiz.value) == null ? void 0 : _c.title}' will no longer be joinable by code.` : `'${(_d = togglingQuiz.value) == null ? void 0 : _d.title}' will become joinable by code.`,
          "confirm-label": ((_e = togglingQuiz.value) == null ? void 0 : _e.status) === "active" ? "Deactivate" : "Activate",
          processing: toggleInProgress.value,
          onConfirm: confirmToggle
        }, null, 8, ["open", "title", "description", "confirm-label", "processing"]),
        createVNode(_sfc_main$c, {
          open: deleteDialogOpen.value,
          "onUpdate:open": _cache[14] || (_cache[14] = ($event) => deleteDialogOpen.value = $event),
          title: "Delete quiz?",
          description: `'${(_f = deletingQuiz.value) == null ? void 0 : _f.title}' and all its questions and attempts will be permanently deleted. This cannot be undone.`,
          "confirm-label": "Delete",
          variant: "destructive",
          processing: deleteInProgress.value,
          onConfirm: confirmDelete
        }, null, 8, ["open", "description", "processing"])
      ], 64);
    };
  }
});
export {
  _sfc_main as default
};
