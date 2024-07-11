(self.webpackChunk = self.webpackChunk || []).push([
    ["FeaturePanel"], {
        "./js/containers/FeaturePanel.js": (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, {
                default: () => c
            });
            var r = n("../node_modules/@babel/runtime/helpers/esm/extends.js"),
                s = n("../node_modules/react/index.js"),
                a = n("../node_modules/react-redux/es/index.js"),
                o = n("./js/actions/fetchPanels.js"),
                l = n("./js/actions/fetchMarket.js"),
                i = n("./js/selectors/index.js");
            class d extends s.Component {
                constructor(...e) {
                    super(...e), this.componentDidMount = () => {
                        const {
                            fetchPanels: e,
                            fetchMarket: t
                        } = this.props;
                        e(), t()
                    }, this.shouldComponentUpdate = e => {
                        const {
                            loading: t
                        } = this.props;
                        return !(!t || e.loading)
                    }, this.render = () => {
                        const {
                            element: e,
                            panel: t,
                            loading: n,
                            id: a
                        } = this.props;
                        if (n || !t) return e.classList.add("hidden"), null;
                        e.classList.remove("hidden");
                        const o = {};
                        t.width && (o.width = t.width), t.height && (o.height = t.height);
                        const l = s.createElement("img", (0, r.Z)({
                            loading: "lazy",
                            decoding: "async",
                            className: "feature-panel-image-img",
                            src: t.image,
                            alt: "Feature Panel"
                        }, o));
                        return s.createElement("aside", {
                            className: "feature-panel"
                        }, s.createElement("div", {
                            className: "feature-panel-left-col"
                        }, s.createElement("div", {
                            className: "feature-panel-description",
                            dangerouslySetInnerHTML: {
                                __html: t.body
                            }
                        }), t.ctaText && s.createElement("a", {
                            "data-instant": !0,
                            href: t.ctaLink,
                            className: "btn btn--green btn--large",
                            dangerouslySetInnerHTML: {
                                __html: t.ctaText
                            }
                        })), s.createElement("div", {
                            className: "feature-panel-right-col"
                        }, s.createElement("a", {
                            "data-instant": !0,
                            href: t.ctaLink,
                            className: "feature-panel-image-link"
                        }, s.createElement("div", {
                            className: "feature-panel-image"
                        }, t.avif ? s.createElement("picture", null, s.createElement("source", {
                            type: "image/avif",
                            srcSet: t.avif
                        }), l) : l))))
                    }
                }
            }
            const c = (0, a.$j)(((e, t) => ({
                loading: e.panels.loading || e.market.loading,
                panel: (0, i.hv)(t)(e)
            })), (e => ({
                fetchPanels: () => e((0, o.dI)()),
                fetchMarket: () => e((0, l.Bm)())
            })))(d)
        },
        "./js/selectors/index.js": (e, t, n) => {
            "use strict";
            n.d(t, {
                j: () => _,
                Yy: () => y,
                hv: () => v,
                NW: () => b,
                oU: () => w,
                AX: () => A,
                RH: () => N,
                u6: () => C,
                bY: () => M,
                Mc: () => I,
                nj: () => S,
                zh: () => H,
                GG: () => D,
                yx: () => G,
                Nq: () => R
            });
            var r = n("../node_modules/@babel/runtime/helpers/esm/defineProperty.js"),
                s = n("../node_modules/reselect/es/index.js"),
                a = n("../node_modules/lodash/get.js"),
                o = n.n(a),
                l = n("../node_modules/lodash/sample.js"),
                i = n.n(l),
                d = n("../node_modules/lodash/intersection.js"),
                c = n.n(d),
                u = n("../node_modules/lodash/isEmpty.js"),
                m = n.n(u),
                p = n("./js/helpers/index.js");

            function h(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function f(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? h(Object(n), !0).forEach((function(t) {
                        (0, r.Z)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : h(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            const j = e => o()(e, "market.market") ? o()(e, "market.market").toLowerCase() : null,
                g = e => (o()(e, "panels.items") || []).map((e => (e.market = e.market ? e.market.toLowerCase() : null, e))),
                _ = e => o()(e, "cart.currency"),
                y = e => (0, s.P1)((e => o()(e, "products.items") || []), _, ((t, n) => {
                    const r = ((e, t) => (t || []).find((t => t.sku === e)))(e, t);
                    return console.log(e, r), o()(r, "bundlePrices." + n.toLowerCase() + ".price") ? o()(r, "bundlePrices." + n.toLowerCase()) : o()(r, "prices." + n.toLowerCase())
                })),
                v = ({
                    id: e,
                    categories: t
                }) => (0, s.P1)(j, g, ((n, r) => ((e, t) => (t || []).find((t => t.id === e)))(e, r) || ((e, t) => i()(t.filter((t => !m()(c()(t.categories, e))))) || null)(t.split(","), r) || i()(((e, t) => {
                    const n = t.filter((t => t.market === e));
                    return n.length ? n : t
                })(n, r)) || null)),
                b = e => (0, s.P1)(P("orders"), (({
                    items: t
                }) => (t || []).find((t => t.id === e)))),
                P = (e = "cart") => t => o()(t, e),
                k = e => o()(e, "products.items") || [],
                w = (e = "cart") => (0, s.P1)(P(e), k, ((e, t) => f(f({}, e), {}, {
                    items: (o()(e, "items") || []).map((e => f(f({}, e), {}, {
                        product: f(f({}, t.find((t => t.id === e.productId))), e.product)
                    })))
                }))),
                O = e => o()(e, "auth.user"),
                x = e => o()(e, "settings"),
                L = (0, s.P1)(O, (e => o()(e, "user_metadata") || {})),
                E = (0, s.P1)(O, (e => o()(e, "app_metadata") || {})),
                A = (0, s.P1)(L, (e => o()(e, "firstname"))),
                N = (0, s.P1)(L, (e => o()(e, "lastname"))),
                C = (0, s.P1)(L, x, ((e, t) => o()(e, "firstname") ? o()(e, "firstname") + " " + o()(e, "lastname") : o()(t, "name"))),
                M = (0, s.P1)(L, x, ((e, t) => o()(e, "twitter") || o()(t, "twitter"))),
                I = (0, s.P1)(O, (e => o()(e, "plan"))),
                S = (0, s.P1)(E, (e => o()(e, "subscription.type"))),
                H = (e, t) => (0, p.jN)(o()(e, t + ".error")),
                D = (0, s.P1)(L, (e => o()(e, "shippingAddress.country") || "")),
                F = ((0, s.P1)(O, (e => o()(e, "token.access_token"))), e => o()(e, "ad.items") || []),
                G = (0, s.P1)(F, (e => e.filter((e => e.active && "sidebar" !== e.placement)).filter((e => !(!(0, p.GH)() || "homepage" !== e.placement) || !(0, p.GH)() && "homepage" !== e.placement)))),
                R = (0, s.P1)(F, (e => e.filter((e => e.active && "sidebar" === e.placement))))
        },
        "../node_modules/lodash/_baseIntersection.js": (e, t, n) => {
            var r = n("../node_modules/lodash/_SetCache.js"),
                s = n("../node_modules/lodash/_arrayIncludes.js"),
                a = n("../node_modules/lodash/_arrayIncludesWith.js"),
                o = n("../node_modules/lodash/_arrayMap.js"),
                l = n("../node_modules/lodash/_baseUnary.js"),
                i = n("../node_modules/lodash/_cacheHas.js"),
                d = Math.min;
            e.exports = function(e, t, n) {
                for (var c = n ? a : s, u = e[0].length, m = e.length, p = m, h = Array(m), f = 1 / 0, j = []; p--;) {
                    var g = e[p];
                    p && t && (g = o(g, l(t))), f = d(g.length, f), h[p] = !n && (t || u >= 120 && g.length >= 120) ? new r(p && g) : void 0
                }
                g = e[0];
                var _ = -1,
                    y = h[0];
                e: for (; ++_ < u && j.length < f;) {
                    var v = g[_],
                        b = t ? t(v) : v;
                    if (v = n || 0 !== v ? v : 0, !(y ? i(y, b) : c(j, b, n))) {
                        for (p = m; --p;) {
                            var P = h[p];
                            if (!(P ? i(P, b) : c(e[p], b, n))) continue e
                        }
                        y && y.push(b), j.push(v)
                    }
                }
                return j
            }
        },
        "../node_modules/lodash/_castArrayLikeObject.js": (e, t, n) => {
            var r = n("../node_modules/lodash/isArrayLikeObject.js");
            e.exports = function(e) {
                return r(e) ? e : []
            }
        },
        "../node_modules/lodash/intersection.js": (e, t, n) => {
            var r = n("../node_modules/lodash/_arrayMap.js"),
                s = n("../node_modules/lodash/_baseIntersection.js"),
                a = n("../node_modules/lodash/_baseRest.js"),
                o = n("../node_modules/lodash/_castArrayLikeObject.js"),
                l = a((function(e) {
                    var t = r(e, o);
                    return t.length && t[0] === e[0] ? s(t) : []
                }));
            e.exports = l
        },
        "../node_modules/lodash/isArrayLikeObject.js": (e, t, n) => {
            var r = n("../node_modules/lodash/isArrayLike.js"),
                s = n("../node_modules/lodash/isObjectLike.js");
            e.exports = function(e) {
                return s(e) && r(e)
            }
        },
        "../node_modules/lodash/sample.js": (e, t, n) => {
            var r = n("../node_modules/lodash/_baseRandom.js");
            e.exports = function(e) {
                var t = e.length;
                return t ? e[r(0, t - 1)] : void 0
            }
        },
        "../node_modules/reselect/es/index.js": (e, t, n) => {
            "use strict";

            function r(e, t) {
                return e === t
            }

            function s(e, t, n) {
                if (null === t || null === n || t.length !== n.length) return !1;
                for (var r = t.length, s = 0; s < r; s++)
                    if (!e(t[s], n[s])) return !1;
                return !0
            }

            function a(e) {
                var t = Array.isArray(e[0]) ? e[0] : e;
                if (!t.every((function(e) {
                        return "function" == typeof e
                    }))) {
                    var n = t.map((function(e) {
                        return typeof e
                    })).join(", ");
                    throw new Error("Selector creators expect all input-selectors to be functions, instead received the following types: [" + n + "]")
                }
                return t
            }
            n.d(t, {
                P1: () => o
            });
            var o = function(e) {
                for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
                return function() {
                    for (var t = arguments.length, r = Array(t), s = 0; s < t; s++) r[s] = arguments[s];
                    var o = 0,
                        l = r.pop(),
                        i = a(r),
                        d = e.apply(void 0, [function() {
                            return o++, l.apply(null, arguments)
                        }].concat(n)),
                        c = e((function() {
                            for (var e = [], t = i.length, n = 0; n < t; n++) e.push(i[n].apply(null, arguments));
                            return d.apply(null, e)
                        }));
                    return c.resultFunc = l, c.dependencies = i, c.recomputations = function() {
                        return o
                    }, c.resetRecomputations = function() {
                        return o = 0
                    }, c
                }
            }((function(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : r,
                    n = null,
                    a = null;
                return function() {
                    return s(t, n, arguments) || (a = e.apply(null, arguments)), n = arguments, a
                }
            }))
        }
    }
]);
//# sourceMappingURL=FeaturePanel.16f8089744d24d55a879.js.map