import { Q as queryParams, R as applyUrlDefaults } from "./app-FZe8oXsS.js";
const join = (options) => ({
  url: join.url(options),
  method: "get"
});
join.definition = {
  methods: ["get", "head"],
  url: "/join"
};
join.url = (options) => {
  return join.definition.url + queryParams(options);
};
join.get = (options) => ({
  url: join.url(options),
  method: "get"
});
join.head = (options) => ({
  url: join.url(options),
  method: "head"
});
const joinForm = (options) => ({
  action: join.url(options),
  method: "get"
});
joinForm.get = (options) => ({
  action: join.url(options),
  method: "get"
});
joinForm.head = (options) => ({
  action: join.url({
    [(options == null ? void 0 : options.mergeQuery) ? "mergeQuery" : "query"]: {
      _method: "HEAD",
      ...(options == null ? void 0 : options.query) ?? (options == null ? void 0 : options.mergeQuery) ?? {}
    }
  }),
  method: "get"
});
join.form = joinForm;
const resolve = (options) => ({
  url: resolve.url(options),
  method: "post"
});
resolve.definition = {
  methods: ["post"],
  url: "/join"
};
resolve.url = (options) => {
  return resolve.definition.url + queryParams(options);
};
resolve.post = (options) => ({
  url: resolve.url(options),
  method: "post"
});
const resolveForm = (options) => ({
  action: resolve.url(options),
  method: "post"
});
resolveForm.post = (options) => ({
  action: resolve.url(options),
  method: "post"
});
resolve.form = resolveForm;
const start = (args, options) => ({
  url: start.url(args, options),
  method: "post"
});
start.definition = {
  methods: ["post"],
  url: "/quizzes/{quiz}/attempts"
};
start.url = (args, options) => {
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
  return start.definition.url.replace("{quiz}", parsedArgs.quiz.toString()).replace(/\/+$/, "") + queryParams(options);
};
start.post = (args, options) => ({
  url: start.url(args, options),
  method: "post"
});
const startForm = (args, options) => ({
  action: start.url(args, options),
  method: "post"
});
startForm.post = (args, options) => ({
  action: start.url(args, options),
  method: "post"
});
start.form = startForm;
const show = (args, options) => ({
  url: show.url(args, options),
  method: "get"
});
show.definition = {
  methods: ["get", "head"],
  url: "/attempts/{attempt}"
};
show.url = (args, options) => {
  if (typeof args === "string" || typeof args === "number") {
    args = { attempt: args };
  }
  if (typeof args === "object" && !Array.isArray(args) && "id" in args) {
    args = { attempt: args.id };
  }
  if (Array.isArray(args)) {
    args = {
      attempt: args[0]
    };
  }
  args = applyUrlDefaults(args);
  const parsedArgs = {
    attempt: typeof args.attempt === "object" ? args.attempt.id : args.attempt
  };
  return show.definition.url.replace("{attempt}", parsedArgs.attempt.toString()).replace(/\/+$/, "") + queryParams(options);
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
const submit = (args, options) => ({
  url: submit.url(args, options),
  method: "post"
});
submit.definition = {
  methods: ["post"],
  url: "/attempts/{attempt}/submit"
};
submit.url = (args, options) => {
  if (typeof args === "string" || typeof args === "number") {
    args = { attempt: args };
  }
  if (typeof args === "object" && !Array.isArray(args) && "id" in args) {
    args = { attempt: args.id };
  }
  if (Array.isArray(args)) {
    args = {
      attempt: args[0]
    };
  }
  args = applyUrlDefaults(args);
  const parsedArgs = {
    attempt: typeof args.attempt === "object" ? args.attempt.id : args.attempt
  };
  return submit.definition.url.replace("{attempt}", parsedArgs.attempt.toString()).replace(/\/+$/, "") + queryParams(options);
};
submit.post = (args, options) => ({
  url: submit.url(args, options),
  method: "post"
});
const submitForm = (args, options) => ({
  action: submit.url(args, options),
  method: "post"
});
submitForm.post = (args, options) => ({
  action: submit.url(args, options),
  method: "post"
});
submit.form = submitForm;
const violation = (args, options) => ({
  url: violation.url(args, options),
  method: "post"
});
violation.definition = {
  methods: ["post"],
  url: "/attempts/{attempt}/violation"
};
violation.url = (args, options) => {
  if (typeof args === "string" || typeof args === "number") {
    args = { attempt: args };
  }
  if (typeof args === "object" && !Array.isArray(args) && "id" in args) {
    args = { attempt: args.id };
  }
  if (Array.isArray(args)) {
    args = {
      attempt: args[0]
    };
  }
  args = applyUrlDefaults(args);
  const parsedArgs = {
    attempt: typeof args.attempt === "object" ? args.attempt.id : args.attempt
  };
  return violation.definition.url.replace("{attempt}", parsedArgs.attempt.toString()).replace(/\/+$/, "") + queryParams(options);
};
violation.post = (args, options) => ({
  url: violation.url(args, options),
  method: "post"
});
const violationForm = (args, options) => ({
  action: violation.url(args, options),
  method: "post"
});
violationForm.post = (args, options) => ({
  action: violation.url(args, options),
  method: "post"
});
violation.form = violationForm;
const results = (args, options) => ({
  url: results.url(args, options),
  method: "get"
});
results.definition = {
  methods: ["get", "head"],
  url: "/attempts/{attempt}/results"
};
results.url = (args, options) => {
  if (typeof args === "string" || typeof args === "number") {
    args = { attempt: args };
  }
  if (typeof args === "object" && !Array.isArray(args) && "id" in args) {
    args = { attempt: args.id };
  }
  if (Array.isArray(args)) {
    args = {
      attempt: args[0]
    };
  }
  args = applyUrlDefaults(args);
  const parsedArgs = {
    attempt: typeof args.attempt === "object" ? args.attempt.id : args.attempt
  };
  return results.definition.url.replace("{attempt}", parsedArgs.attempt.toString()).replace(/\/+$/, "") + queryParams(options);
};
results.get = (args, options) => ({
  url: results.url(args, options),
  method: "get"
});
results.head = (args, options) => ({
  url: results.url(args, options),
  method: "head"
});
const resultsForm = (args, options) => ({
  action: results.url(args, options),
  method: "get"
});
resultsForm.get = (args, options) => ({
  action: results.url(args, options),
  method: "get"
});
resultsForm.head = (args, options) => ({
  action: results.url(args, {
    [(options == null ? void 0 : options.mergeQuery) ? "mergeQuery" : "query"]: {
      _method: "HEAD",
      ...(options == null ? void 0 : options.query) ?? (options == null ? void 0 : options.mergeQuery) ?? {}
    }
  }),
  method: "get"
});
results.form = resultsForm;
({
  join: Object.assign(join, join),
  resolve: Object.assign(resolve, resolve),
  start: Object.assign(start, start),
  show: Object.assign(show, show),
  submit: Object.assign(submit, submit),
  violation: Object.assign(violation, violation),
  results: Object.assign(results, results)
});
export {
  join as j,
  results as r
};
