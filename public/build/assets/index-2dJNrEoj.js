import { d as defineComponent, au as reactiveOmit, o as openBlock, k as createBlock, g as withCtx, Z as renderSlot, a0 as mergeProps, e as unref, av as cn, ai as Primitive, aD as cva, Q as queryParams, R as applyUrlDefaults } from "./app-U-Wu707C.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Badge",
  props: {
    asChild: { type: Boolean },
    as: {},
    variant: {},
    class: { type: [Boolean, null, String, Object, Array] }
  },
  setup(__props) {
    const props = __props;
    const delegatedProps = reactiveOmit(props, "class");
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(Primitive), mergeProps({
        "data-slot": "badge",
        class: unref(cn)(unref(badgeVariants)({ variant: __props.variant }), props.class)
      }, unref(delegatedProps)), {
        default: withCtx(() => [
          renderSlot(_ctx.$slots, "default")
        ]),
        _: 3
      }, 16, ["class"]);
    };
  }
});
const badgeVariants = cva(
  "inline-flex items-center justify-center rounded-full border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden",
  {
    variants: {
      variant: {
        default: "border-transparent bg-primary text-primary-foreground [a&]:hover:bg-primary/90",
        secondary: "border-transparent bg-secondary text-secondary-foreground [a&]:hover:bg-secondary/90",
        destructive: "border-transparent bg-destructive text-white [a&]:hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
        outline: "text-foreground [a&]:hover:bg-accent [a&]:hover:text-accent-foreground",
        honey: "border-amber-300 bg-amber-100 text-amber-800 dark:border-amber-700 dark:bg-amber-900/30 dark:text-amber-300 [a&]:hover:bg-amber-200",
        success: "border-transparent bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-300 [a&]:hover:bg-emerald-200"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
);
const index = (options) => ({
  url: index.url(options),
  method: "get"
});
index.definition = {
  methods: ["get", "head"],
  url: "/quizzes"
};
index.url = (options) => {
  return index.definition.url + queryParams(options);
};
index.get = (options) => ({
  url: index.url(options),
  method: "get"
});
index.head = (options) => ({
  url: index.url(options),
  method: "head"
});
const indexForm = (options) => ({
  action: index.url(options),
  method: "get"
});
indexForm.get = (options) => ({
  action: index.url(options),
  method: "get"
});
indexForm.head = (options) => ({
  action: index.url({
    [(options == null ? void 0 : options.mergeQuery) ? "mergeQuery" : "query"]: {
      _method: "HEAD",
      ...(options == null ? void 0 : options.query) ?? (options == null ? void 0 : options.mergeQuery) ?? {}
    }
  }),
  method: "get"
});
index.form = indexForm;
const create = (options) => ({
  url: create.url(options),
  method: "get"
});
create.definition = {
  methods: ["get", "head"],
  url: "/quizzes/create"
};
create.url = (options) => {
  return create.definition.url + queryParams(options);
};
create.get = (options) => ({
  url: create.url(options),
  method: "get"
});
create.head = (options) => ({
  url: create.url(options),
  method: "head"
});
const createForm = (options) => ({
  action: create.url(options),
  method: "get"
});
createForm.get = (options) => ({
  action: create.url(options),
  method: "get"
});
createForm.head = (options) => ({
  action: create.url({
    [(options == null ? void 0 : options.mergeQuery) ? "mergeQuery" : "query"]: {
      _method: "HEAD",
      ...(options == null ? void 0 : options.query) ?? (options == null ? void 0 : options.mergeQuery) ?? {}
    }
  }),
  method: "get"
});
create.form = createForm;
const store = (options) => ({
  url: store.url(options),
  method: "post"
});
store.definition = {
  methods: ["post"],
  url: "/quizzes"
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
const show = (args, options) => ({
  url: show.url(args, options),
  method: "get"
});
show.definition = {
  methods: ["get", "head"],
  url: "/quizzes/{quiz}"
};
show.url = (args, options) => {
  if (typeof args === "string" || typeof args === "number") {
    args = { quiz: args };
  }
  if (typeof args === "object" && !Array.isArray(args) && "id" in args) {
    args = { quiz: args.id };
  }
  if (Array.isArray(args)) {
    args = {
      quiz: args[0]
    };
  }
  args = applyUrlDefaults(args);
  const parsedArgs = {
    quiz: typeof args.quiz === "object" ? args.quiz.id : args.quiz
  };
  return show.definition.url.replace("{quiz}", parsedArgs.quiz.toString()).replace(/\/+$/, "") + queryParams(options);
};
show.get = (args, options) => ({
  url: show.url(args, options),
  method: "get"
});
show.head = (args, options) => ({
  url: show.url(args, options),
  method: "head"
});
const showForm = (args, options) => ({
  action: show.url(args, options),
  method: "get"
});
showForm.get = (args, options) => ({
  action: show.url(args, options),
  method: "get"
});
showForm.head = (args, options) => ({
  action: show.url(args, {
    [(options == null ? void 0 : options.mergeQuery) ? "mergeQuery" : "query"]: {
      _method: "HEAD",
      ...(options == null ? void 0 : options.query) ?? (options == null ? void 0 : options.mergeQuery) ?? {}
    }
  }),
  method: "get"
});
show.form = showForm;
const edit = (args, options) => ({
  url: edit.url(args, options),
  method: "get"
});
edit.definition = {
  methods: ["get", "head"],
  url: "/quizzes/{quiz}/edit"
};
edit.url = (args, options) => {
  if (typeof args === "string" || typeof args === "number") {
    args = { quiz: args };
  }
  if (typeof args === "object" && !Array.isArray(args) && "id" in args) {
    args = { quiz: args.id };
  }
  if (Array.isArray(args)) {
    args = {
      quiz: args[0]
    };
  }
  args = applyUrlDefaults(args);
  const parsedArgs = {
    quiz: typeof args.quiz === "object" ? args.quiz.id : args.quiz
  };
  return edit.definition.url.replace("{quiz}", parsedArgs.quiz.toString()).replace(/\/+$/, "") + queryParams(options);
};
edit.get = (args, options) => ({
  url: edit.url(args, options),
  method: "get"
});
edit.head = (args, options) => ({
  url: edit.url(args, options),
  method: "head"
});
const editForm = (args, options) => ({
  action: edit.url(args, options),
  method: "get"
});
editForm.get = (args, options) => ({
  action: edit.url(args, options),
  method: "get"
});
editForm.head = (args, options) => ({
  action: edit.url(args, {
    [(options == null ? void 0 : options.mergeQuery) ? "mergeQuery" : "query"]: {
      _method: "HEAD",
      ...(options == null ? void 0 : options.query) ?? (options == null ? void 0 : options.mergeQuery) ?? {}
    }
  }),
  method: "get"
});
edit.form = editForm;
const update = (args, options) => ({
  url: update.url(args, options),
  method: "put"
});
update.definition = {
  methods: ["put", "patch"],
  url: "/quizzes/{quiz}"
};
update.url = (args, options) => {
  if (typeof args === "string" || typeof args === "number") {
    args = { quiz: args };
  }
  if (typeof args === "object" && !Array.isArray(args) && "id" in args) {
    args = { quiz: args.id };
  }
  if (Array.isArray(args)) {
    args = {
      quiz: args[0]
    };
  }
  args = applyUrlDefaults(args);
  const parsedArgs = {
    quiz: typeof args.quiz === "object" ? args.quiz.id : args.quiz
  };
  return update.definition.url.replace("{quiz}", parsedArgs.quiz.toString()).replace(/\/+$/, "") + queryParams(options);
};
update.put = (args, options) => ({
  url: update.url(args, options),
  method: "put"
});
update.patch = (args, options) => ({
  url: update.url(args, options),
  method: "patch"
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
updateForm.patch = (args, options) => ({
  action: update.url(args, {
    [(options == null ? void 0 : options.mergeQuery) ? "mergeQuery" : "query"]: {
      _method: "PATCH",
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
  url: "/quizzes/{quiz}"
};
destroy.url = (args, options) => {
  if (typeof args === "string" || typeof args === "number") {
    args = { quiz: args };
  }
  if (typeof args === "object" && !Array.isArray(args) && "id" in args) {
    args = { quiz: args.id };
  }
  if (Array.isArray(args)) {
    args = {
      quiz: args[0]
    };
  }
  args = applyUrlDefaults(args);
  const parsedArgs = {
    quiz: typeof args.quiz === "object" ? args.quiz.id : args.quiz
  };
  return destroy.definition.url.replace("{quiz}", parsedArgs.quiz.toString()).replace(/\/+$/, "") + queryParams(options);
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
const regenerateCode = (args, options) => ({
  url: regenerateCode.url(args, options),
  method: "post"
});
regenerateCode.definition = {
  methods: ["post"],
  url: "/quizzes/{quiz}/regenerate-code"
};
regenerateCode.url = (args, options) => {
  if (typeof args === "string" || typeof args === "number") {
    args = { quiz: args };
  }
  if (typeof args === "object" && !Array.isArray(args) && "id" in args) {
    args = { quiz: args.id };
  }
  if (Array.isArray(args)) {
    args = {
      quiz: args[0]
    };
  }
  args = applyUrlDefaults(args);
  const parsedArgs = {
    quiz: typeof args.quiz === "object" ? args.quiz.id : args.quiz
  };
  return regenerateCode.definition.url.replace("{quiz}", parsedArgs.quiz.toString()).replace(/\/+$/, "") + queryParams(options);
};
regenerateCode.post = (args, options) => ({
  url: regenerateCode.url(args, options),
  method: "post"
});
const regenerateCodeForm = (args, options) => ({
  action: regenerateCode.url(args, options),
  method: "post"
});
regenerateCodeForm.post = (args, options) => ({
  action: regenerateCode.url(args, options),
  method: "post"
});
regenerateCode.form = regenerateCodeForm;
const toggleStatus = (args, options) => ({
  url: toggleStatus.url(args, options),
  method: "patch"
});
toggleStatus.definition = {
  methods: ["patch"],
  url: "/quizzes/{quiz}/toggle-status"
};
toggleStatus.url = (args, options) => {
  if (typeof args === "string" || typeof args === "number") {
    args = { quiz: args };
  }
  if (typeof args === "object" && !Array.isArray(args) && "id" in args) {
    args = { quiz: args.id };
  }
  if (Array.isArray(args)) {
    args = {
      quiz: args[0]
    };
  }
  args = applyUrlDefaults(args);
  const parsedArgs = {
    quiz: typeof args.quiz === "object" ? args.quiz.id : args.quiz
  };
  return toggleStatus.definition.url.replace("{quiz}", parsedArgs.quiz.toString()).replace(/\/+$/, "") + queryParams(options);
};
toggleStatus.patch = (args, options) => ({
  url: toggleStatus.url(args, options),
  method: "patch"
});
const toggleStatusForm = (args, options) => ({
  action: toggleStatus.url(args, {
    [(options == null ? void 0 : options.mergeQuery) ? "mergeQuery" : "query"]: {
      _method: "PATCH",
      ...(options == null ? void 0 : options.query) ?? (options == null ? void 0 : options.mergeQuery) ?? {}
    }
  }),
  method: "post"
});
toggleStatusForm.patch = (args, options) => ({
  action: toggleStatus.url(args, {
    [(options == null ? void 0 : options.mergeQuery) ? "mergeQuery" : "query"]: {
      _method: "PATCH",
      ...(options == null ? void 0 : options.query) ?? (options == null ? void 0 : options.mergeQuery) ?? {}
    }
  }),
  method: "post"
});
toggleStatus.form = toggleStatusForm;
const attempts = (args, options) => ({
  url: attempts.url(args, options),
  method: "get"
});
attempts.definition = {
  methods: ["get", "head"],
  url: "/quizzes/{quiz}/attempts"
};
attempts.url = (args, options) => {
  if (typeof args === "string" || typeof args === "number") {
    args = { quiz: args };
  }
  if (typeof args === "object" && !Array.isArray(args) && "id" in args) {
    args = { quiz: args.id };
  }
  if (Array.isArray(args)) {
    args = {
      quiz: args[0]
    };
  }
  args = applyUrlDefaults(args);
  const parsedArgs = {
    quiz: typeof args.quiz === "object" ? args.quiz.id : args.quiz
  };
  return attempts.definition.url.replace("{quiz}", parsedArgs.quiz.toString()).replace(/\/+$/, "") + queryParams(options);
};
attempts.get = (args, options) => ({
  url: attempts.url(args, options),
  method: "get"
});
attempts.head = (args, options) => ({
  url: attempts.url(args, options),
  method: "head"
});
const attemptsForm = (args, options) => ({
  action: attempts.url(args, options),
  method: "get"
});
attemptsForm.get = (args, options) => ({
  action: attempts.url(args, options),
  method: "get"
});
attemptsForm.head = (args, options) => ({
  action: attempts.url(args, {
    [(options == null ? void 0 : options.mergeQuery) ? "mergeQuery" : "query"]: {
      _method: "HEAD",
      ...(options == null ? void 0 : options.query) ?? (options == null ? void 0 : options.mergeQuery) ?? {}
    }
  }),
  method: "get"
});
attempts.form = attemptsForm;
({
  index: Object.assign(index, index),
  create: Object.assign(create, create),
  store: Object.assign(store, store),
  show: Object.assign(show, show),
  edit: Object.assign(edit, edit),
  update: Object.assign(update, update),
  destroy: Object.assign(destroy, destroy),
  regenerateCode: Object.assign(regenerateCode, regenerateCode),
  toggleStatus: Object.assign(toggleStatus, toggleStatus),
  attempts: Object.assign(attempts, attempts)
});
export {
  _sfc_main as _,
  attempts as a,
  store as b,
  create as c,
  destroy as d,
  edit as e,
  index as i,
  show as s,
  toggleStatus as t,
  update as u
};
