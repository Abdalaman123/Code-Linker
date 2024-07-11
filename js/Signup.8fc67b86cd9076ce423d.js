(self.webpackChunk = self.webpackChunk || []).push([
    ["Signup"], {
        "./js/components/LoginForm.js": (e, t, r) => {
            "use strict";
            r.d(t, {
                Z: () => i
            });
            var s = r("../node_modules/react/index.js"),
                n = r("../node_modules/formik/dist/formik.esm.js"),
                o = r("./js/schemas/index.js"),
                a = r("./js/forms/Input.js"),
                l = r("./js/common/LaddaButton.js");

            function i({
                error: e,
                loading: t,
                hidePasswordField: r,
                showNameFields: i,
                buttonText: d,
                onSubmit: u
            }) {
                return s.createElement(n.J9, {
                    validateOnChange: !1,
                    validationSchema: (0, o.w)({
                        email: !0,
                        firstname: i,
                        lastname: i,
                        password: !r
                    }),
                    initialValues: {
                        firstname: "",
                        lastname: "",
                        password: "",
                        email: ""
                    },
                    onSubmit: u,
                    render: () => s.createElement(n.l0, null, e && s.createElement("p", null, s.createElement("span", {
                        className: "error-server error-msg"
                    }, e)), i && s.createElement("div", {
                        className: "form__row"
                    }, s.createElement(a.Z, {
                        type: "text",
                        id: "firstname",
                        name: "firstname",
                        label: "First name",
                        className: "form__field js-form-field blurred field--half",
                        autoComplete: "given-name",
                        autoCapitalize: "off",
                        spellCheck: "false",
                        autoCorrect: "off"
                    }), s.createElement(a.Z, {
                        type: "text",
                        id: "lastname",
                        name: "lastname",
                        label: "Last name",
                        className: "form__field js-form-field blurred field--half",
                        autoComplete: "family-name",
                        autoCapitalize: "off",
                        spellCheck: "false",
                        autoCorrect: "off"
                    })), s.createElement(a.Z, {
                        type: "email",
                        name: "email",
                        label: "Your email",
                        autoComplete: "email",
                        autoCapitalize: "off",
                        spellCheck: "false",
                        autoCorrect: "off"
                    }), !r && s.createElement(a.Z, {
                        type: "password",
                        name: "password",
                        id: "password",
                        label: "Memorable password (yep, that one)",
                        autoComplete: "password",
                        autoCapitalize: "off",
                        spellCheck: "false",
                        autoCorrect: "off"
                    }), s.createElement("div", {
                        className: "btn--lined"
                    }, s.createElement(l.Z, {
                        type: "submit",
                        text: d,
                        processing: t
                    })))
                })
            }
        },
        "./js/containers/Signup.js": (e, t, r) => {
            "use strict";
            r.r(t), r.d(t, {
                default: () => i
            });
            var s = r("../node_modules/react/index.js"),
                n = r("../node_modules/react-redux/es/index.js"),
                o = r("./js/selectors/index.js"),
                a = r("./js/actions/index.js"),
                l = r("./js/components/LoginForm.js");
            const i = (0, n.$j)((e => ({
                loading: e.auth.loading,
                error: (0, o.zh)(e, "auth")
            })), (e => ({
                signup: (t, r, s, n) => e((0, a.IU)(t, r, s, n))
            })))((function({
                loading: e,
                error: t,
                signup: r
            }) {
                return s.createElement(l.Z, {
                    showNameFields: !0,
                    hideRememberField: !0,
                    error: t && t.msg ? t.msg : t,
                    loading: e,
                    buttonText: e ? "Setting up..." : "Set up your account →",
                    onSubmit: ({
                        email: e,
                        password: t,
                        firstname: s,
                        lastname: n
                    }) => r(e, t, {
                        firstname: s,
                        lastname: n
                    }, !0)
                })
            }))
        },
        "./js/selectors/index.js": (e, t, r) => {
            "use strict";
            r.d(t, {
                j: () => b,
                Yy: () => y,
                hv: () => g,
                NW: () => v,
                oU: () => k,
                AX: () => L,
                RH: () => A,
                u6: () => S,
                bY: () => N,
                Mc: () => F,
                nj: () => Z,
                zh: () => I,
                GG: () => z,
                yx: () => R,
                Nq: () => D
            });
            var s = r("../node_modules/@babel/runtime/helpers/esm/defineProperty.js"),
                n = r("../node_modules/reselect/es/index.js"),
                o = r("../node_modules/lodash/get.js"),
                a = r.n(o),
                l = r("../node_modules/lodash/sample.js"),
                i = r.n(l),
                d = r("../node_modules/lodash/intersection.js"),
                u = r.n(d),
                c = r("../node_modules/lodash/isEmpty.js"),
                m = r.n(c),
                p = r("./js/helpers/index.js");

            function f(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var s = Object.getOwnPropertySymbols(e);
                    t && (s = s.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), r.push.apply(r, s)
                }
                return r
            }

            function h(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? f(Object(r), !0).forEach((function(t) {
                        (0, s.Z)(e, t, r[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : f(Object(r)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    }))
                }
                return e
            }
            const j = e => a()(e, "market.market") ? a()(e, "market.market").toLowerCase() : null,
                _ = e => (a()(e, "panels.items") || []).map((e => (e.market = e.market ? e.market.toLowerCase() : null, e))),
                b = e => a()(e, "cart.currency"),
                y = e => (0, n.P1)((e => a()(e, "products.items") || []), b, ((t, r) => {
                    const s = ((e, t) => (t || []).find((t => t.sku === e)))(e, t);
                    return console.log(e, s), a()(s, "bundlePrices." + r.toLowerCase() + ".price") ? a()(s, "bundlePrices." + r.toLowerCase()) : a()(s, "prices." + r.toLowerCase())
                })),
                g = ({
                    id: e,
                    categories: t
                }) => (0, n.P1)(j, _, ((r, s) => ((e, t) => (t || []).find((t => t.id === e)))(e, s) || ((e, t) => i()(t.filter((t => !m()(u()(t.categories, e))))) || null)(t.split(","), s) || i()(((e, t) => {
                    const r = t.filter((t => t.market === e));
                    return r.length ? r : t
                })(r, s)) || null)),
                v = e => (0, n.P1)(w("orders"), (({
                    items: t
                }) => (t || []).find((t => t.id === e)))),
                w = (e = "cart") => t => a()(t, e),
                P = e => a()(e, "products.items") || [],
                k = (e = "cart") => (0, n.P1)(w(e), P, ((e, t) => h(h({}, e), {}, {
                    items: (a()(e, "items") || []).map((e => h(h({}, e), {}, {
                        product: h(h({}, t.find((t => t.id === e.productId))), e.product)
                    })))
                }))),
                C = e => a()(e, "auth.user"),
                x = e => a()(e, "settings"),
                O = (0, n.P1)(C, (e => a()(e, "user_metadata") || {})),
                E = (0, n.P1)(C, (e => a()(e, "app_metadata") || {})),
                L = (0, n.P1)(O, (e => a()(e, "firstname"))),
                A = (0, n.P1)(O, (e => a()(e, "lastname"))),
                S = (0, n.P1)(O, x, ((e, t) => a()(e, "firstname") ? a()(e, "firstname") + " " + a()(e, "lastname") : a()(t, "name"))),
                N = (0, n.P1)(O, x, ((e, t) => a()(e, "twitter") || a()(t, "twitter"))),
                F = (0, n.P1)(C, (e => a()(e, "plan"))),
                Z = (0, n.P1)(E, (e => a()(e, "subscription.type"))),
                I = (e, t) => (0, p.jN)(a()(e, t + ".error")),
                z = (0, n.P1)(O, (e => a()(e, "shippingAddress.country") || "")),
                M = ((0, n.P1)(C, (e => a()(e, "token.access_token"))), e => a()(e, "ad.items") || []),
                R = (0, n.P1)(M, (e => e.filter((e => e.active && "sidebar" !== e.placement)).filter((e => !(!(0, p.GH)() || "homepage" !== e.placement) || !(0, p.GH)() && "homepage" !== e.placement)))),
                D = (0, n.P1)(M, (e => e.filter((e => e.active && "sidebar" === e.placement))))
        },
        "../node_modules/lodash/_baseIntersection.js": (e, t, r) => {
            var s = r("../node_modules/lodash/_SetCache.js"),
                n = r("../node_modules/lodash/_arrayIncludes.js"),
                o = r("../node_modules/lodash/_arrayIncludesWith.js"),
                a = r("../node_modules/lodash/_arrayMap.js"),
                l = r("../node_modules/lodash/_baseUnary.js"),
                i = r("../node_modules/lodash/_cacheHas.js"),
                d = Math.min;
            e.exports = function(e, t, r) {
                for (var u = r ? o : n, c = e[0].length, m = e.length, p = m, f = Array(m), h = 1 / 0, j = []; p--;) {
                    var _ = e[p];
                    p && t && (_ = a(_, l(t))), h = d(_.length, h), f[p] = !r && (t || c >= 120 && _.length >= 120) ? new s(p && _) : void 0
                }
                _ = e[0];
                var b = -1,
                    y = f[0];
                e: for (; ++b < c && j.length < h;) {
                    var g = _[b],
                        v = t ? t(g) : g;
                    if (g = r || 0 !== g ? g : 0, !(y ? i(y, v) : u(j, v, r))) {
                        for (p = m; --p;) {
                            var w = f[p];
                            if (!(w ? i(w, v) : u(e[p], v, r))) continue e
                        }
                        y && y.push(v), j.push(g)
                    }
                }
                return j
            }
        },
        "../node_modules/lodash/_castArrayLikeObject.js": (e, t, r) => {
            var s = r("../node_modules/lodash/isArrayLikeObject.js");
            e.exports = function(e) {
                return s(e) ? e : []
            }
        },
        "../node_modules/lodash/intersection.js": (e, t, r) => {
            var s = r("../node_modules/lodash/_arrayMap.js"),
                n = r("../node_modules/lodash/_baseIntersection.js"),
                o = r("../node_modules/lodash/_baseRest.js"),
                a = r("../node_modules/lodash/_castArrayLikeObject.js"),
                l = o((function(e) {
                    var t = s(e, a);
                    return t.length && t[0] === e[0] ? n(t) : []
                }));
            e.exports = l
        },
        "../node_modules/lodash/isArrayLikeObject.js": (e, t, r) => {
            var s = r("../node_modules/lodash/isArrayLike.js"),
                n = r("../node_modules/lodash/isObjectLike.js");
            e.exports = function(e) {
                return n(e) && s(e)
            }
        },
        "../node_modules/lodash/sample.js": (e, t, r) => {
            var s = r("../node_modules/lodash/_baseRandom.js");
            e.exports = function(e) {
                var t = e.length;
                return t ? e[s(0, t - 1)] : void 0
            }
        },
        "../node_modules/reselect/es/index.js": (e, t, r) => {
            "use strict";

            function s(e, t) {
                return e === t
            }

            function n(e, t, r) {
                if (null === t || null === r || t.length !== r.length) return !1;
                for (var s = t.length, n = 0; n < s; n++)
                    if (!e(t[n], r[n])) return !1;
                return !0
            }

            function o(e) {
                var t = Array.isArray(e[0]) ? e[0] : e;
                if (!t.every((function(e) {
                        return "function" == typeof e
                    }))) {
                    var r = t.map((function(e) {
                        return typeof e
                    })).join(", ");
                    throw new Error("Selector creators expect all input-selectors to be functions, instead received the following types: [" + r + "]")
                }
                return t
            }
            r.d(t, {
                P1: () => a
            });
            var a = function(e) {
                for (var t = arguments.length, r = Array(t > 1 ? t - 1 : 0), s = 1; s < t; s++) r[s - 1] = arguments[s];
                return function() {
                    for (var t = arguments.length, s = Array(t), n = 0; n < t; n++) s[n] = arguments[n];
                    var a = 0,
                        l = s.pop(),
                        i = o(s),
                        d = e.apply(void 0, [function() {
                            return a++, l.apply(null, arguments)
                        }].concat(r)),
                        u = e((function() {
                            for (var e = [], t = i.length, r = 0; r < t; r++) e.push(i[r].apply(null, arguments));
                            return d.apply(null, e)
                        }));
                    return u.resultFunc = l, u.dependencies = i, u.recomputations = function() {
                        return a
                    }, u.resetRecomputations = function() {
                        return a = 0
                    }, u
                }
            }((function(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : s,
                    r = null,
                    o = null;
                return function() {
                    return n(t, r, arguments) || (o = e.apply(null, arguments)), r = arguments, o
                }
            }))
        }
    }
]);
//# sourceMappingURL=Signup.8fc67b86cd9076ce423d.js.map