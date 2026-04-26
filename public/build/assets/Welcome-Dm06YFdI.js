import { d as defineComponent, B as onMounted, o as openBlock, a as createElementBlock, b as createVNode, e as unref, h as head_default, f as createBaseVNode, g as withCtx, x as link_default, k as createBlock, i as createTextVNode, F as Fragment, aE as login, aF as register, l as createCommentVNode, D as withDirectives, aG as vShow, n as normalizeClass, aH as createStaticVNode, r as renderList, t as toDisplayString, p as ref, z as _export_sfc } from "./app-U-Wu707C.js";
const _hoisted_1 = { class: "min-h-screen bg-gradient-to-b from-amber-50 via-white to-amber-50/30 text-gray-900 dark:from-gray-950 dark:via-gray-950 dark:to-amber-950/10 dark:text-gray-100" };
const _hoisted_2 = { class: "sticky top-0 z-50 border-b border-amber-200/50 bg-amber-50/95 backdrop-blur-md transition-all duration-300 dark:border-amber-900/30 dark:bg-gray-950/95" };
const _hoisted_3 = { class: "mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:px-6 md:py-4" };
const _hoisted_4 = { class: "hidden items-center gap-2 md:flex" };
const _hoisted_5 = {
  class: "h-6 w-6",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor"
};
const _hoisted_6 = {
  key: 0,
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "stroke-width": "2",
  d: "M4 6h16M4 12h16M4 18h16"
};
const _hoisted_7 = {
  key: 1,
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "stroke-width": "2",
  d: "M6 18L18 6M6 6l12 12"
};
const _hoisted_8 = { class: "border-t border-amber-200/50 bg-amber-50/95 backdrop-blur-md md:hidden dark:border-amber-900/30 dark:bg-gray-950/95" };
const _hoisted_9 = { class: "flex flex-col space-y-2 px-4 py-4" };
const _hoisted_10 = { id: "main-content" };
const _hoisted_11 = { class: "relative mx-auto max-w-3xl px-4" };
const _hoisted_12 = {
  class: "animate-fade-in-up flex flex-wrap items-center justify-center gap-4",
  style: { "animation-delay": "0.2s" }
};
const _hoisted_13 = { class: "mx-auto max-w-6xl" };
const _hoisted_14 = { class: "grid gap-6 md:grid-cols-2 lg:grid-cols-3" };
const _hoisted_15 = { class: "testimonial-card rounded-2xl border border-amber-200/50 bg-white/80 p-6 shadow-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl dark:border-amber-800/30 dark:bg-gray-900/80" };
const _hoisted_16 = { class: "mb-3 flex gap-1 text-amber-400" };
const _hoisted_17 = { class: "testimonial-card rounded-2xl border border-amber-200/50 bg-white/80 p-6 shadow-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl dark:border-amber-800/30 dark:bg-gray-900/80" };
const _hoisted_18 = { class: "mb-3 flex gap-1 text-amber-400" };
const _hoisted_19 = { class: "testimonial-card rounded-2xl border border-amber-200/50 bg-white/80 p-6 shadow-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl dark:border-amber-800/30 dark:bg-gray-900/80" };
const _hoisted_20 = { class: "mb-3 flex gap-1 text-amber-400" };
const _hoisted_21 = { class: "mx-auto max-w-2xl overflow-hidden rounded-3xl bg-gradient-to-br from-amber-500 to-amber-600 p-8 text-center shadow-xl transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl md:p-12" };
const _hoisted_22 = { class: "border-t border-amber-200/50 bg-gradient-to-r from-amber-50/50 to-white/30 px-4 py-6 backdrop-blur-sm dark:border-amber-900/30 dark:from-gray-950 dark:to-gray-950/80 md:px-6 md:py-8" };
const _hoisted_23 = { class: "mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-sm text-gray-500 md:flex-row dark:text-gray-500" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Welcome",
  props: {
    canRegister: { type: Boolean, default: true }
  },
  setup(__props) {
    const isVisible = ref({
      hero: false,
      stats: false,
      features: false,
      howItWorks: false,
      testimonials: false,
      cta: false
    });
    onMounted(() => {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const section = entry.target.getAttribute("data-section");
            if (section) {
              isVisible.value[section] = true;
            }
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.1, rootMargin: "0px 0px -50px 0px" });
      document.querySelectorAll("[data-section]").forEach((el) => observer.observe(el));
    });
    const mobileMenuOpen = ref(false);
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(Fragment, null, [
        createVNode(unref(head_default), { title: "BeeSmart – Quiz Your Way to the Top" }),
        createBaseVNode("div", _hoisted_1, [
          _cache[28] || (_cache[28] = createBaseVNode("a", {
            href: "#main-content",
            class: "sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:rounded-full focus:bg-amber-500 focus:px-4 focus:py-2 focus:text-white"
          }, " Skip to content ", -1)),
          createBaseVNode("header", _hoisted_2, [
            createBaseVNode("div", _hoisted_3, [
              createVNode(unref(link_default), {
                href: "/",
                class: "group flex items-center gap-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2"
              }, {
                default: withCtx(() => [..._cache[4] || (_cache[4] = [
                  createBaseVNode("svg", {
                    class: "h-8 w-8 transition-transform duration-300 group-hover:scale-105 md:h-9 md:w-9",
                    viewBox: "0 0 64 64",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg"
                  }, [
                    createBaseVNode("ellipse", {
                      cx: "32",
                      cy: "36",
                      rx: "14",
                      ry: "18",
                      fill: "#F59E0B"
                    }),
                    createBaseVNode("rect", {
                      x: "18",
                      y: "30",
                      width: "28",
                      height: "5",
                      rx: "2",
                      fill: "#1C1917",
                      opacity: "0.7"
                    }),
                    createBaseVNode("rect", {
                      x: "18",
                      y: "40",
                      width: "28",
                      height: "5",
                      rx: "2",
                      fill: "#1C1917",
                      opacity: "0.7"
                    }),
                    createBaseVNode("circle", {
                      cx: "32",
                      cy: "17",
                      r: "9",
                      fill: "#F59E0B"
                    }),
                    createBaseVNode("circle", {
                      cx: "28",
                      cy: "15",
                      r: "2",
                      fill: "#1C1917"
                    }),
                    createBaseVNode("circle", {
                      cx: "36",
                      cy: "15",
                      r: "2",
                      fill: "#1C1917"
                    }),
                    createBaseVNode("line", {
                      x1: "28",
                      y1: "9",
                      x2: "22",
                      y2: "3",
                      stroke: "#1C1917",
                      "stroke-width": "2",
                      "stroke-linecap": "round"
                    }),
                    createBaseVNode("circle", {
                      cx: "21",
                      cy: "2",
                      r: "2",
                      fill: "#F59E0B",
                      stroke: "#1C1917",
                      "stroke-width": "1.5"
                    }),
                    createBaseVNode("line", {
                      x1: "36",
                      y1: "9",
                      x2: "42",
                      y2: "3",
                      stroke: "#1C1917",
                      "stroke-width": "2",
                      "stroke-linecap": "round"
                    }),
                    createBaseVNode("circle", {
                      cx: "43",
                      cy: "2",
                      r: "2",
                      fill: "#F59E0B",
                      stroke: "#1C1917",
                      "stroke-width": "1.5"
                    }),
                    createBaseVNode("ellipse", {
                      cx: "16",
                      cy: "28",
                      rx: "10",
                      ry: "6",
                      fill: "white",
                      opacity: "0.85",
                      transform: "rotate(-20 16 28)"
                    }),
                    createBaseVNode("ellipse", {
                      cx: "48",
                      cy: "28",
                      rx: "10",
                      ry: "6",
                      fill: "white",
                      opacity: "0.85",
                      transform: "rotate(20 48 28)"
                    }),
                    createBaseVNode("ellipse", {
                      cx: "14",
                      cy: "36",
                      rx: "7",
                      ry: "4",
                      fill: "white",
                      opacity: "0.6",
                      transform: "rotate(-15 14 36)"
                    }),
                    createBaseVNode("ellipse", {
                      cx: "50",
                      cy: "36",
                      rx: "7",
                      ry: "4",
                      fill: "white",
                      opacity: "0.6",
                      transform: "rotate(15 50 36)"
                    }),
                    createBaseVNode("path", {
                      d: "M32 54 L29 62 L32 59 L35 62 Z",
                      fill: "#D97706"
                    })
                  ], -1),
                  createBaseVNode("span", { class: "text-xl font-bold tracking-tight text-amber-600 transition-colors group-hover:text-amber-500 dark:text-amber-400" }, "BeeSmart", -1)
                ])]),
                _: 1
              }),
              createBaseVNode("nav", _hoisted_4, [
                _ctx.$page.props.auth.user ? (openBlock(), createBlock(unref(link_default), {
                  key: 0,
                  href: "/dashboard",
                  class: "rounded-full bg-amber-500 px-5 py-2 text-sm font-semibold text-white shadow-lg shadow-amber-500/20 transition-all hover:scale-105 hover:bg-amber-600 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 dark:bg-amber-500 dark:hover:bg-amber-400"
                }, {
                  default: withCtx(() => [..._cache[5] || (_cache[5] = [
                    createTextVNode(" Dashboard ", -1)
                  ])]),
                  _: 1
                })) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
                  createVNode(unref(link_default), {
                    href: unref(login)(),
                    class: "rounded-full px-5 py-2 text-sm font-semibold text-amber-700 transition-all hover:bg-amber-100 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 dark:text-amber-300 dark:hover:bg-amber-900/40"
                  }, {
                    default: withCtx(() => [..._cache[6] || (_cache[6] = [
                      createTextVNode(" Log in ", -1)
                    ])]),
                    _: 1
                  }, 8, ["href"]),
                  __props.canRegister ? (openBlock(), createBlock(unref(link_default), {
                    key: 0,
                    href: unref(register)(),
                    class: "rounded-full bg-amber-500 px-5 py-2 text-sm font-semibold text-white shadow-lg shadow-amber-500/20 transition-all hover:scale-105 hover:bg-amber-600 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 dark:bg-amber-500 dark:hover:bg-amber-400"
                  }, {
                    default: withCtx(() => [..._cache[7] || (_cache[7] = [
                      createTextVNode(" Get Started Free ", -1)
                    ])]),
                    _: 1
                  }, 8, ["href"])) : createCommentVNode("", true)
                ], 64))
              ]),
              createBaseVNode("button", {
                onClick: _cache[0] || (_cache[0] = ($event) => mobileMenuOpen.value = !mobileMenuOpen.value),
                class: "rounded-lg p-2 text-amber-700 transition-colors hover:bg-amber-100 focus:outline-none focus:ring-2 focus:ring-amber-500 md:hidden dark:text-amber-300 dark:hover:bg-amber-900/40",
                "aria-label": "Toggle menu"
              }, [
                (openBlock(), createElementBlock("svg", _hoisted_5, [
                  !mobileMenuOpen.value ? (openBlock(), createElementBlock("path", _hoisted_6)) : (openBlock(), createElementBlock("path", _hoisted_7))
                ]))
              ])
            ]),
            withDirectives(createBaseVNode("div", _hoisted_8, [
              createBaseVNode("div", _hoisted_9, [
                _ctx.$page.props.auth.user ? (openBlock(), createBlock(unref(link_default), {
                  key: 0,
                  href: "/dashboard",
                  class: "rounded-full bg-amber-500 px-5 py-2.5 text-center text-sm font-semibold text-white",
                  onClick: _cache[1] || (_cache[1] = ($event) => mobileMenuOpen.value = false)
                }, {
                  default: withCtx(() => [..._cache[8] || (_cache[8] = [
                    createTextVNode(" Dashboard ", -1)
                  ])]),
                  _: 1
                })) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
                  createVNode(unref(link_default), {
                    href: unref(login)(),
                    class: "rounded-full px-5 py-2.5 text-center text-sm font-semibold text-amber-700 transition-colors hover:bg-amber-100 dark:text-amber-300 dark:hover:bg-amber-900/40",
                    onClick: _cache[2] || (_cache[2] = ($event) => mobileMenuOpen.value = false)
                  }, {
                    default: withCtx(() => [..._cache[9] || (_cache[9] = [
                      createTextVNode(" Log in ", -1)
                    ])]),
                    _: 1
                  }, 8, ["href"]),
                  __props.canRegister ? (openBlock(), createBlock(unref(link_default), {
                    key: 0,
                    href: unref(register)(),
                    class: "rounded-full bg-amber-500 px-5 py-2.5 text-center text-sm font-semibold text-white",
                    onClick: _cache[3] || (_cache[3] = ($event) => mobileMenuOpen.value = false)
                  }, {
                    default: withCtx(() => [..._cache[10] || (_cache[10] = [
                      createTextVNode(" Get Started Free ", -1)
                    ])]),
                    _: 1
                  }, 8, ["href"])) : createCommentVNode("", true)
                ], 64))
              ])
            ], 512), [
              [vShow, mobileMenuOpen.value]
            ])
          ]),
          createBaseVNode("main", _hoisted_10, [
            createBaseVNode("section", {
              "data-section": "hero",
              class: normalizeClass(["relative overflow-hidden px-4 pb-20 pt-16 text-center md:px-6 md:pb-28 md:pt-24 lg:pb-32 lg:pt-28", { "animate-fade-in-up": isVisible.value.hero }]),
              style: { "opacity": "0" }
            }, [
              _cache[15] || (_cache[15] = createStaticVNode('<div class="pointer-events-none absolute inset-0 opacity-[0.03] dark:opacity-[0.05]" aria-hidden="true" data-v-e573a5e5><svg class="h-full w-full" xmlns="http://www.w3.org/2000/svg" data-v-e573a5e5><defs data-v-e573a5e5><pattern id="honeycomb" x="0" y="0" width="56" height="100" patternUnits="userSpaceOnUse" data-v-e573a5e5><polygon points="28,2 54,16 54,44 28,58 2,44 2,16" fill="none" stroke="#F59E0B" stroke-width="1.5" data-v-e573a5e5></polygon><polygon points="28,52 54,66 54,94 28,108 2,94 2,66" fill="none" stroke="#F59E0B" stroke-width="1.5" data-v-e573a5e5></polygon><polygon points="56,27 82,41 82,69 56,83 30,69 30,41" fill="none" stroke="#F59E0B" stroke-width="1.5" data-v-e573a5e5></polygon></pattern></defs><rect width="100%" height="100%" fill="url(#honeycomb)" data-v-e573a5e5></rect></svg></div><div class="pointer-events-none absolute -left-16 top-24 hidden opacity-30 lg:block xl:-left-8" aria-hidden="true" data-v-e573a5e5><svg class="h-20 w-20 animate-float" viewBox="0 0 64 64" fill="none" data-v-e573a5e5><ellipse cx="32" cy="36" rx="12" ry="15" fill="#F59E0B" data-v-e573a5e5></ellipse><rect x="20" y="31" width="24" height="4" rx="2" fill="#1C1917" opacity="0.6" data-v-e573a5e5></rect><rect x="20" y="39" width="24" height="4" rx="2" fill="#1C1917" opacity="0.6" data-v-e573a5e5></rect><circle cx="32" cy="19" r="8" fill="#F59E0B" data-v-e573a5e5></circle><ellipse cx="17" cy="27" rx="9" ry="5" fill="white" opacity="0.8" transform="rotate(-20 17 27)" data-v-e573a5e5></ellipse><ellipse cx="47" cy="27" rx="9" ry="5" fill="white" opacity="0.8" transform="rotate(20 47 27)" data-v-e573a5e5></ellipse></svg></div><div class="pointer-events-none absolute -right-16 top-32 hidden opacity-20 lg:block xl:-right-8" aria-hidden="true" data-v-e573a5e5><svg class="h-14 w-14 animate-float-delayed" viewBox="0 0 64 64" fill="none" data-v-e573a5e5><ellipse cx="32" cy="36" rx="12" ry="15" fill="#FCD34D" data-v-e573a5e5></ellipse><rect x="20" y="31" width="24" height="4" rx="2" fill="#1C1917" opacity="0.6" data-v-e573a5e5></rect><rect x="20" y="39" width="24" height="4" rx="2" fill="#1C1917" opacity="0.6" data-v-e573a5e5></rect><circle cx="32" cy="19" r="8" fill="#FCD34D" data-v-e573a5e5></circle><ellipse cx="17" cy="27" rx="9" ry="5" fill="white" opacity="0.8" transform="rotate(-20 17 27)" data-v-e573a5e5></ellipse><ellipse cx="47" cy="27" rx="9" ry="5" fill="white" opacity="0.8" transform="rotate(20 47 27)" data-v-e573a5e5></ellipse></svg></div>', 3)),
              createBaseVNode("div", _hoisted_11, [
                _cache[13] || (_cache[13] = createStaticVNode('<div class="animate-fade-in mb-6 inline-flex items-center gap-2 rounded-full border border-amber-300 bg-amber-100/80 px-4 py-1.5 text-sm font-medium text-amber-700 backdrop-blur-sm dark:border-amber-700 dark:bg-amber-900/40 dark:text-amber-300" data-v-e573a5e5><svg class="h-4 w-4 animate-pulse" viewBox="0 0 20 20" fill="currentColor" data-v-e573a5e5><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" data-v-e573a5e5></path></svg> The #1 Smart Quiz Platform </div><h1 class="animate-fade-in-up mb-6 text-4xl font-extrabold leading-tight tracking-tight text-gray-900 sm:text-5xl lg:text-6xl dark:text-white" data-v-e573a5e5> Learn Smarter,<br data-v-e573a5e5><span class="bg-gradient-to-r from-amber-500 to-amber-600 bg-clip-text text-transparent" data-v-e573a5e5>Quiz Like a Bee</span></h1><p class="animate-fade-in-up mx-auto mb-10 max-w-xl text-base text-gray-600 sm:text-lg dark:text-gray-400" style="animation-delay:0.1s;" data-v-e573a5e5> BeeSmart turns learning into an exciting quiz adventure. Create quizzes, challenge friends, and track your knowledge growth — all in one buzzing platform. </p>', 3)),
                createBaseVNode("div", _hoisted_12, [
                  __props.canRegister ? (openBlock(), createBlock(unref(link_default), {
                    key: 0,
                    href: unref(register)(),
                    class: "group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-amber-500 to-amber-600 px-8 py-3.5 text-base font-bold text-white shadow-lg shadow-amber-500/30 transition-all hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2"
                  }, {
                    default: withCtx(() => [..._cache[11] || (_cache[11] = [
                      createBaseVNode("svg", {
                        class: "h-5 w-5 transition-transform group-hover:rotate-12",
                        viewBox: "0 0 64 64",
                        fill: "none"
                      }, [
                        createBaseVNode("ellipse", {
                          cx: "32",
                          cy: "36",
                          rx: "12",
                          ry: "15",
                          fill: "white",
                          opacity: "0.9"
                        }),
                        createBaseVNode("rect", {
                          x: "20",
                          y: "31",
                          width: "24",
                          height: "4",
                          rx: "2",
                          fill: "#92400E",
                          opacity: "0.6"
                        }),
                        createBaseVNode("rect", {
                          x: "20",
                          y: "39",
                          width: "24",
                          height: "4",
                          rx: "2",
                          fill: "#92400E",
                          opacity: "0.6"
                        }),
                        createBaseVNode("circle", {
                          cx: "32",
                          cy: "19",
                          r: "8",
                          fill: "white",
                          opacity: "0.9"
                        }),
                        createBaseVNode("ellipse", {
                          cx: "17",
                          cy: "27",
                          rx: "9",
                          ry: "5",
                          fill: "white",
                          opacity: "0.5",
                          transform: "rotate(-20 17 27)"
                        }),
                        createBaseVNode("ellipse", {
                          cx: "47",
                          cy: "27",
                          rx: "9",
                          ry: "5",
                          fill: "white",
                          opacity: "0.5",
                          transform: "rotate(20 47 27)"
                        })
                      ], -1),
                      createTextVNode(" Start for Free ", -1)
                    ])]),
                    _: 1
                  }, 8, ["href"])) : createCommentVNode("", true),
                  createVNode(unref(link_default), {
                    href: unref(login)(),
                    class: "group inline-flex items-center gap-2 rounded-full border-2 border-amber-400 px-8 py-3.5 text-base font-bold text-amber-700 transition-all hover:bg-amber-100 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 dark:border-amber-600 dark:text-amber-400 dark:hover:bg-amber-900/40"
                  }, {
                    default: withCtx(() => [..._cache[12] || (_cache[12] = [
                      createTextVNode(" Log In ", -1),
                      createBaseVNode("svg", {
                        class: "h-4 w-4 transition-transform group-hover:translate-x-1",
                        viewBox: "0 0 20 20",
                        fill: "currentColor"
                      }, [
                        createBaseVNode("path", {
                          "fill-rule": "evenodd",
                          d: "M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z",
                          "clip-rule": "evenodd"
                        })
                      ], -1)
                    ])]),
                    _: 1
                  }, 8, ["href"])
                ]),
                _cache[14] || (_cache[14] = createBaseVNode("p", {
                  class: "animate-fade-in-up mt-8 text-sm text-gray-500 dark:text-gray-500",
                  style: { "animation-delay": "0.3s" }
                }, [
                  createTextVNode(" Join "),
                  createBaseVNode("span", { class: "font-semibold text-amber-600 dark:text-amber-400" }, "10,000+"),
                  createTextVNode(" learners already buzzing on BeeSmart ")
                ], -1))
              ])
            ], 2),
            createBaseVNode("section", {
              "data-section": "stats",
              class: normalizeClass(["border-y border-amber-200/50 bg-gradient-to-r from-amber-100/50 to-amber-50/30 px-4 py-12 backdrop-blur-sm dark:border-amber-900/30 dark:from-amber-900/10 dark:to-transparent md:px-6", { "animate-fade-in-up": isVisible.value.stats }]),
              style: { "opacity": "0" }
            }, [..._cache[16] || (_cache[16] = [
              createStaticVNode('<div class="mx-auto grid max-w-4xl grid-cols-2 gap-8 text-center lg:grid-cols-4" data-v-e573a5e5><div class="group transition-transform hover:scale-105" data-v-e573a5e5><p class="stat-number text-3xl font-extrabold text-amber-600 dark:text-amber-400 lg:text-4xl" data-v-e573a5e5>10K+</p><p class="mt-1 text-sm text-gray-600 dark:text-gray-400" data-v-e573a5e5>Active Learners</p></div><div class="group transition-transform hover:scale-105" data-v-e573a5e5><p class="stat-number text-3xl font-extrabold text-amber-600 dark:text-amber-400 lg:text-4xl" data-v-e573a5e5>50K+</p><p class="mt-1 text-sm text-gray-600 dark:text-gray-400" data-v-e573a5e5>Quizzes Completed</p></div><div class="group transition-transform hover:scale-105" data-v-e573a5e5><p class="stat-number text-3xl font-extrabold text-amber-600 dark:text-amber-400 lg:text-4xl" data-v-e573a5e5>500+</p><p class="mt-1 text-sm text-gray-600 dark:text-gray-400" data-v-e573a5e5>Quiz Topics</p></div><div class="group transition-transform hover:scale-105" data-v-e573a5e5><p class="stat-number text-3xl font-extrabold text-amber-600 dark:text-amber-400 lg:text-4xl" data-v-e573a5e5>4.9★</p><p class="mt-1 text-sm text-gray-600 dark:text-gray-400" data-v-e573a5e5>Average Rating</p></div></div>', 1)
            ])], 2),
            createBaseVNode("section", {
              "data-section": "features",
              class: normalizeClass(["px-4 py-16 md:px-6 md:py-20 lg:py-24", { "animate-fade-in-up": isVisible.value.features }]),
              style: { "opacity": "0" }
            }, [..._cache[17] || (_cache[17] = [
              createStaticVNode('<div class="mx-auto max-w-6xl" data-v-e573a5e5><div class="mb-12 text-center md:mb-16" data-v-e573a5e5><h2 class="text-3xl font-extrabold tracking-tight text-gray-900 lg:text-4xl dark:text-white" data-v-e573a5e5> Everything you need to <span class="bg-gradient-to-r from-amber-500 to-amber-600 bg-clip-text text-transparent" data-v-e573a5e5>bee</span> brilliant </h2><p class="mt-4 text-gray-500 dark:text-gray-400" data-v-e573a5e5> Powerful tools built to make learning fun and effective </p></div><div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3" data-v-e573a5e5><div class="feature-card group rounded-2xl border border-amber-200/50 bg-white/80 p-6 shadow-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl dark:border-amber-800/30 dark:bg-gray-900/80" data-v-e573a5e5><div class="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-amber-100 transition-colors group-hover:bg-amber-200 dark:bg-amber-900/40" data-v-e573a5e5><svg class="h-6 w-6 text-amber-600 dark:text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" data-v-e573a5e5><path stroke-linecap="round" stroke-linejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" data-v-e573a5e5></path></svg></div><h3 class="mb-2 font-bold text-gray-900 dark:text-white" data-v-e573a5e5>Smart Quiz Builder</h3><p class="text-sm text-gray-500 dark:text-gray-400" data-v-e573a5e5>Create interactive quizzes with multiple question types — MCQ, true/false, fill-in-the-blank and more.</p></div><div class="feature-card group rounded-2xl border border-amber-200/50 bg-white/80 p-6 shadow-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl dark:border-amber-800/30 dark:bg-gray-900/80" data-v-e573a5e5><div class="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-amber-100 transition-colors group-hover:bg-amber-200 dark:bg-amber-900/40" data-v-e573a5e5><svg class="h-6 w-6 text-amber-600 dark:text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" data-v-e573a5e5><path stroke-linecap="round" stroke-linejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" data-v-e573a5e5></path></svg></div><h3 class="mb-2 font-bold text-gray-900 dark:text-white" data-v-e573a5e5>Instant Feedback</h3><p class="text-sm text-gray-500 dark:text-gray-400" data-v-e573a5e5>Get real-time scores and explanations right after each answer. Learn from mistakes instantly.</p></div><div class="feature-card group rounded-2xl border border-amber-200/50 bg-white/80 p-6 shadow-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl dark:border-amber-800/30 dark:bg-gray-900/80" data-v-e573a5e5><div class="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-amber-100 transition-colors group-hover:bg-amber-200 dark:bg-amber-900/40" data-v-e573a5e5><svg class="h-6 w-6 text-amber-600 dark:text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" data-v-e573a5e5><path stroke-linecap="round" stroke-linejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" data-v-e573a5e5></path></svg></div><h3 class="mb-2 font-bold text-gray-900 dark:text-white" data-v-e573a5e5>Progress Tracking</h3><p class="text-sm text-gray-500 dark:text-gray-400" data-v-e573a5e5>Watch your knowledge grow with detailed charts and performance insights over time.</p></div><div class="feature-card group rounded-2xl border border-amber-200/50 bg-white/80 p-6 shadow-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl dark:border-amber-800/30 dark:bg-gray-900/80" data-v-e573a5e5><div class="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-amber-100 transition-colors group-hover:bg-amber-200 dark:bg-amber-900/40" data-v-e573a5e5><svg class="h-6 w-6 text-amber-600 dark:text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" data-v-e573a5e5><path stroke-linecap="round" stroke-linejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" data-v-e573a5e5></path></svg></div><h3 class="mb-2 font-bold text-gray-900 dark:text-white" data-v-e573a5e5>Challenge Friends</h3><p class="text-sm text-gray-500 dark:text-gray-400" data-v-e573a5e5>Share quizzes and compete with classmates or colleagues. Learning is better together.</p></div><div class="feature-card group rounded-2xl border border-amber-200/50 bg-white/80 p-6 shadow-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl dark:border-amber-800/30 dark:bg-gray-900/80" data-v-e573a5e5><div class="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-amber-100 transition-colors group-hover:bg-amber-200 dark:bg-amber-900/40" data-v-e573a5e5><svg class="h-6 w-6 text-amber-600 dark:text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" data-v-e573a5e5><path stroke-linecap="round" stroke-linejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" data-v-e573a5e5></path></svg></div><h3 class="mb-2 font-bold text-gray-900 dark:text-white" data-v-e573a5e5>Huge Topic Library</h3><p class="text-sm text-gray-500 dark:text-gray-400" data-v-e573a5e5>Browse 500+ quiz topics across science, math, history, coding, and many more categories.</p></div><div class="feature-card group rounded-2xl border border-amber-200/50 bg-white/80 p-6 shadow-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl dark:border-amber-800/30 dark:bg-gray-900/80" data-v-e573a5e5><div class="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-amber-100 transition-colors group-hover:bg-amber-200 dark:bg-amber-900/40" data-v-e573a5e5><svg class="h-6 w-6 text-amber-600 dark:text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" data-v-e573a5e5><path stroke-linecap="round" stroke-linejoin="round" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" data-v-e573a5e5></path></svg></div><h3 class="mb-2 font-bold text-gray-900 dark:text-white" data-v-e573a5e5>Mobile Friendly</h3><p class="text-sm text-gray-500 dark:text-gray-400" data-v-e573a5e5>Quiz on the go. BeeSmart works beautifully on any device — phone, tablet, or desktop.</p></div></div></div>', 1)
            ])], 2),
            createBaseVNode("section", {
              "data-section": "howItWorks",
              class: normalizeClass(["bg-gradient-to-r from-amber-100/40 to-transparent px-4 py-16 dark:from-amber-900/10 md:px-6 md:py-20 lg:py-24", { "animate-fade-in-up": isVisible.value.howItWorks }]),
              style: { "opacity": "0" }
            }, [..._cache[18] || (_cache[18] = [
              createStaticVNode('<div class="mx-auto max-w-4xl" data-v-e573a5e5><div class="mb-12 text-center md:mb-16" data-v-e573a5e5><h2 class="text-3xl font-extrabold tracking-tight text-gray-900 lg:text-4xl dark:text-white" data-v-e573a5e5> How it works </h2><p class="mt-4 text-gray-500 dark:text-gray-400" data-v-e573a5e5>Get started in just 3 easy steps</p></div><div class="grid gap-8 md:grid-cols-3" data-v-e573a5e5><div class="step-card text-center transition-all duration-300 hover:-translate-y-2" data-v-e573a5e5><div class="step-number mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-amber-500 to-amber-600 text-2xl font-extrabold text-white shadow-lg" data-v-e573a5e5> 1 </div><h3 class="mb-2 font-bold text-gray-900 dark:text-white" data-v-e573a5e5>Create an Account</h3><p class="text-sm text-gray-500 dark:text-gray-400" data-v-e573a5e5>Sign up for free in seconds. No credit card required.</p></div><div class="step-card text-center transition-all duration-300 hover:-translate-y-2" data-v-e573a5e5><div class="step-number mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-amber-500 to-amber-600 text-2xl font-extrabold text-white shadow-lg" data-v-e573a5e5> 2 </div><h3 class="mb-2 font-bold text-gray-900 dark:text-white" data-v-e573a5e5>Pick or Create a Quiz</h3><p class="text-sm text-gray-500 dark:text-gray-400" data-v-e573a5e5>Choose from our library or build your own custom quiz.</p></div><div class="step-card text-center transition-all duration-300 hover:-translate-y-2" data-v-e573a5e5><div class="step-number mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-amber-500 to-amber-600 text-2xl font-extrabold text-white shadow-lg" data-v-e573a5e5> 3 </div><h3 class="mb-2 font-bold text-gray-900 dark:text-white" data-v-e573a5e5>Learn &amp; Level Up</h3><p class="text-sm text-gray-500 dark:text-gray-400" data-v-e573a5e5>Track your scores, earn badges, and grow smarter every day.</p></div></div></div>', 1)
            ])], 2),
            createBaseVNode("section", {
              "data-section": "testimonials",
              class: normalizeClass(["px-4 py-16 md:px-6 md:py-20 lg:py-24", { "animate-fade-in-up": isVisible.value.testimonials }]),
              style: { "opacity": "0" }
            }, [
              createBaseVNode("div", _hoisted_13, [
                _cache[22] || (_cache[22] = createBaseVNode("div", { class: "mb-12 text-center md:mb-16" }, [
                  createBaseVNode("h2", { class: "text-3xl font-extrabold tracking-tight text-gray-900 lg:text-4xl dark:text-white" }, " What learners are saying ")
                ], -1)),
                createBaseVNode("div", _hoisted_14, [
                  createBaseVNode("div", _hoisted_15, [
                    createBaseVNode("div", _hoisted_16, [
                      (openBlock(), createElementBlock(Fragment, null, renderList(5, (i) => {
                        return createBaseVNode("span", {
                          key: i,
                          class: "inline-block animate-pulse"
                        }, "★");
                      }), 64))
                    ]),
                    _cache[19] || (_cache[19] = createStaticVNode('<p class="mb-4 text-sm italic text-gray-600 dark:text-gray-400" data-v-e573a5e5>&quot;BeeSmart made studying for my exams actually fun. I can&#39;t believe how much I&#39;ve retained compared to just reading!&quot;</p><div class="flex items-center gap-3" data-v-e573a5e5><div class="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-amber-400 to-amber-500 font-bold text-white" data-v-e573a5e5>M</div><div data-v-e573a5e5><p class="text-sm font-semibold text-gray-900 dark:text-white" data-v-e573a5e5>Maria Santos</p><p class="text-xs text-gray-400" data-v-e573a5e5>College Student</p></div></div>', 2))
                  ]),
                  createBaseVNode("div", _hoisted_17, [
                    createBaseVNode("div", _hoisted_18, [
                      (openBlock(), createElementBlock(Fragment, null, renderList(5, (i) => {
                        return createBaseVNode("span", {
                          key: i,
                          class: "inline-block animate-pulse"
                        }, "★");
                      }), 64))
                    ]),
                    _cache[20] || (_cache[20] = createStaticVNode('<p class="mb-4 text-sm italic text-gray-600 dark:text-gray-400" data-v-e573a5e5>&quot;I use BeeSmart to quiz my entire team on new product knowledge. The progress reports are incredibly helpful.&quot;</p><div class="flex items-center gap-3" data-v-e573a5e5><div class="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-amber-400 to-amber-500 font-bold text-white" data-v-e573a5e5>J</div><div data-v-e573a5e5><p class="text-sm font-semibold text-gray-900 dark:text-white" data-v-e573a5e5>James Reyes</p><p class="text-xs text-gray-400" data-v-e573a5e5>Team Lead</p></div></div>', 2))
                  ]),
                  createBaseVNode("div", _hoisted_19, [
                    createBaseVNode("div", _hoisted_20, [
                      (openBlock(), createElementBlock(Fragment, null, renderList(5, (i) => {
                        return createBaseVNode("span", {
                          key: i,
                          class: "inline-block animate-pulse"
                        }, "★");
                      }), 64))
                    ]),
                    _cache[21] || (_cache[21] = createStaticVNode('<p class="mb-4 text-sm italic text-gray-600 dark:text-gray-400" data-v-e573a5e5>&quot;My students love competing on BeeSmart quizzes. Engagement in my classes has never been higher!&quot;</p><div class="flex items-center gap-3" data-v-e573a5e5><div class="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-amber-400 to-amber-500 font-bold text-white" data-v-e573a5e5>A</div><div data-v-e573a5e5><p class="text-sm font-semibold text-gray-900 dark:text-white" data-v-e573a5e5>Ana Cruz</p><p class="text-xs text-gray-400" data-v-e573a5e5>High School Teacher</p></div></div>', 2))
                  ])
                ])
              ])
            ], 2),
            createBaseVNode("section", {
              "data-section": "cta",
              class: normalizeClass(["px-4 pb-20 md:px-6 md:pb-24", { "animate-fade-in-up": isVisible.value.cta }]),
              style: { "opacity": "0" }
            }, [
              createBaseVNode("div", _hoisted_21, [
                _cache[25] || (_cache[25] = createStaticVNode('<svg class="mx-auto mb-6 h-16 w-16 animate-float md:h-20 md:w-20" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-e573a5e5><ellipse cx="32" cy="36" rx="14" ry="18" fill="white" opacity="0.95" data-v-e573a5e5></ellipse><rect x="18" y="30" width="28" height="5" rx="2" fill="#92400E" opacity="0.5" data-v-e573a5e5></rect><rect x="18" y="40" width="28" height="5" rx="2" fill="#92400E" opacity="0.5" data-v-e573a5e5></rect><circle cx="32" cy="17" r="9" fill="white" opacity="0.95" data-v-e573a5e5></circle><circle cx="28" cy="15" r="2" fill="#92400E" data-v-e573a5e5></circle><circle cx="36" cy="15" r="2" fill="#92400E" data-v-e573a5e5></circle><ellipse cx="16" cy="28" rx="10" ry="6" fill="white" opacity="0.7" transform="rotate(-20 16 28)" data-v-e573a5e5></ellipse><ellipse cx="48" cy="28" rx="10" ry="6" fill="white" opacity="0.7" transform="rotate(20 48 28)" data-v-e573a5e5></ellipse></svg><h2 class="mb-4 text-2xl font-extrabold text-white md:text-3xl lg:text-4xl" data-v-e573a5e5> Ready to get buzzing? </h2><p class="mb-6 text-amber-100 md:mb-8" data-v-e573a5e5> Join thousands of smart learners. Start your free account today — no credit card needed. </p>', 3)),
                __props.canRegister ? (openBlock(), createBlock(unref(link_default), {
                  key: 0,
                  href: unref(register)(),
                  class: "group inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-base font-bold text-amber-600 shadow-lg transition-all hover:scale-105 hover:bg-amber-50 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 md:px-8 md:py-3.5"
                }, {
                  default: withCtx(() => [..._cache[23] || (_cache[23] = [
                    createTextVNode(" Create Your Free Account ", -1),
                    createBaseVNode("svg", {
                      class: "h-4 w-4 transition-transform group-hover:translate-x-1",
                      viewBox: "0 0 20 20",
                      fill: "currentColor"
                    }, [
                      createBaseVNode("path", {
                        "fill-rule": "evenodd",
                        d: "M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z",
                        "clip-rule": "evenodd"
                      })
                    ], -1)
                  ])]),
                  _: 1
                }, 8, ["href"])) : (openBlock(), createBlock(unref(link_default), {
                  key: 1,
                  href: unref(login)(),
                  class: "group inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-base font-bold text-amber-600 shadow-lg transition-all hover:scale-105 hover:bg-amber-50 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 md:px-8 md:py-3.5"
                }, {
                  default: withCtx(() => [..._cache[24] || (_cache[24] = [
                    createTextVNode(" Log In to BeeSmart ", -1)
                  ])]),
                  _: 1
                }, 8, ["href"]))
              ])
            ], 2)
          ]),
          createBaseVNode("footer", _hoisted_22, [
            createBaseVNode("div", _hoisted_23, [
              _cache[26] || (_cache[26] = createStaticVNode('<div class="flex items-center gap-2" data-v-e573a5e5><svg class="h-6 w-6" viewBox="0 0 64 64" fill="none" data-v-e573a5e5><ellipse cx="32" cy="36" rx="12" ry="15" fill="#F59E0B" data-v-e573a5e5></ellipse><rect x="20" y="31" width="24" height="4" rx="2" fill="#1C1917" opacity="0.6" data-v-e573a5e5></rect><rect x="20" y="39" width="24" height="4" rx="2" fill="#1C1917" opacity="0.6" data-v-e573a5e5></rect><circle cx="32" cy="19" r="8" fill="#F59E0B" data-v-e573a5e5></circle><ellipse cx="17" cy="27" rx="9" ry="5" fill="white" opacity="0.8" transform="rotate(-20 17 27)" data-v-e573a5e5></ellipse><ellipse cx="47" cy="27" rx="9" ry="5" fill="white" opacity="0.8" transform="rotate(20 47 27)" data-v-e573a5e5></ellipse></svg><span class="font-semibold text-amber-600 dark:text-amber-400" data-v-e573a5e5>BeeSmart</span></div>', 1)),
              createBaseVNode("p", null, "© " + toDisplayString((/* @__PURE__ */ new Date()).getFullYear()) + " BeeSmart. All rights reserved.", 1),
              _cache[27] || (_cache[27] = createBaseVNode("div", { class: "flex gap-6" }, [
                createBaseVNode("a", {
                  href: "#",
                  class: "transition-colors hover:text-amber-600 focus:outline-none focus:ring-2 focus:ring-amber-500 dark:hover:text-amber-400"
                }, "Privacy"),
                createBaseVNode("a", {
                  href: "#",
                  class: "transition-colors hover:text-amber-600 focus:outline-none focus:ring-2 focus:ring-amber-500 dark:hover:text-amber-400"
                }, "Terms"),
                createBaseVNode("a", {
                  href: "#",
                  class: "transition-colors hover:text-amber-600 focus:outline-none focus:ring-2 focus:ring-amber-500 dark:hover:text-amber-400"
                }, "Contact")
              ], -1))
            ])
          ])
        ])
      ], 64);
    };
  }
});
const Welcome = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-e573a5e5"]]);
export {
  Welcome as default
};
