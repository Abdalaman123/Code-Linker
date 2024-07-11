(self.webpackChunk = self.webpackChunk || []).push([
    ["MemberHeader"], {
        "./js/common/Loader.js": (e, t, r) => {
            "use strict";
            r.d(t, {
                Z: () => n
            });
            var s = r("../node_modules/react/index.js");

            function n({
                inverted: e,
                inline: t
            }) {
                return s.createElement("div", {
                    className: "loader-wrapper " + (t ? "loader-wrapper--inline" : ""),
                    "aria-hidden": "true"
                }, s.createElement("div", {
                    className: ["search-loader", e ? "" : "search-loader--red"].join(" ")
                }, s.createElement("span", {
                    className: "loader"
                }), s.createElement("span", {
                    className: "loader"
                }), s.createElement("span", {
                    className: "loader"
                })))
            }
        },
        "./js/containers/MemberHeader.js": (e, t, r) => {
            "use strict";
            r.r(t), r.d(t, {
                default: () => m
            });
            var s = r("../node_modules/react/index.js"),
                n = r("../node_modules/react-redux/es/index.js"),
                a = r("../node_modules/react-uid/dist/es2015/uid.js"),
                o = r("./js/actions/index.js"),
                l = r("./js/selectors/index.js"),
                i = r("./js/common/Loader.js");
            const d = [{
                    url: "/membership",
                    title: "Home",
                    match: "account"
                }, {
                    url: "/membership/personal-details/",
                    title: "Personal Details",
                    match: "account"
                }, {
                    url: "/membership/your-plan/",
                    title: "Your Plan",
                    match: "payment"
                }, {
                    url: "/membership/downloads/",
                    title: "Downloads",
                    match: "downloads"
                }, {
                    url: "/membership/orders/",
                    title: "Purchases",
                    match: "orders"
                }],
                u = [{
                    url: "/auth/",
                    title: "Login to your dashboard ↬"
                }];
            class c extends s.Component {
                constructor(...e) {
                    super(...e), this.state = {}, this.getClasses = e => this.props.path.match(e) ? "active" : null
                }
                componentDidMount() {
                    const {
                        getUser: e
                    } = this.props;
                    e()
                }
                static getDerivedStateFromProps(e) {
                    return e.isLoggedOut && window.location.replace("/membership/"), {}
                }
                handleLogout(e) {
                    const {
                        logout: t
                    } = this.props;
                    e.preventDefault(), t()
                }
                tabClass(e) {
                    const {
                        route: t
                    } = this.props;
                    return "dashboard__header__tab" + (e === t ? " active" : "")
                }
                render() {
                    const {
                        user: e,
                        loading: t,
                        name: r
                    } = this.props;
                    return !e && t ? s.createElement(i.Z, {
                        inverted: !0
                    }) : s.createElement("div", null, s.createElement("h1", {
                        className: "dashboard__header__greeting h2"
                    }, r ? "Smashing to see you" + (r ? ", " + r : "") + "!" : "Smashing Membership"), e ? s.createElement("p", null, "A friendly community for people who design and build the web.", s.createElement("br", null), "You are looking ", s.createElement("em", null, "truly"), " smashing today, by the way.") : s.createElement("p", null, "A friendly community for people who design and build the web. With discounts on books, workshops, conferences and goodies — for just ", s.createElement("span", {
                        className: "small-caps"
                    }, "1"), " fancy coffee a month."), e ? s.createElement("ul", {
                        className: "dashboard__header__actions"
                    }, d.map((({
                        title: e,
                        url: t,
                        match: r
                    }) => s.createElement("li", {
                        key: (0, a.h)(t)
                    }, s.createElement("a", {
                        href: t,
                        className: this.getClasses(r)
                    }, e)))), s.createElement("li", null, s.createElement("a", {
                        href: "https://smashing-membership.herokuapp.com/"
                    }, "Slack")), s.createElement("li", null, s.createElement("a", {
                        href: "#",
                        onClick: this.handleLogout.bind(this)
                    }, "Log out"))) : s.createElement("ul", {
                        className: "dashboard__header__actions"
                    }, u.map((({
                        title: e,
                        url: t
                    }) => s.createElement("li", {
                        key: (0, a.h)(t)
                    }, s.createElement("a", {
                        className: "btn btn--white btn--white--bordered btn--medium btn--large",
                        href: t
                    }, e))))), e ? s.createElement("ul", {
                        className: "dashboard__header__actions"
                    }) : null)
                }
            }
            const m = (0, n.$j)((e => ({
                path: e.history.path,
                user: e.auth.user,
                loading: e.auth.loading,
                isLoggedOut: e.auth.isLoggedOut,
                name: (0, l.AX)(e)
            })), (e => ({
                getUser: () => e((0, o.PR)()),
                logout: () => e((0, o.kS)())
            })))(c)
        },
        "./js/selectors/index.js": (e, t, r) => {
            "use strict";
            r.d(t, {
                j: () => _,
                Yy: () => g,
                hv: () => y,
                NW: () => v,
                oU: () => k,
                AX: () => A,
                RH: () => N,
                u6: () => C,
                bY: () => D,
                Mc: () => M,
                nj: () => S,
                zh: () => H,
                GG: () => I,
                yx: () => G,
                Nq: () => U
            });
            var s = r("../node_modules/@babel/runtime/helpers/esm/defineProperty.js"),
                n = r("../node_modules/reselect/es/index.js"),
                a = r("../node_modules/lodash/get.js"),
                o = r.n(a),
                l = r("../node_modules/lodash/sample.js"),
                i = r.n(l),
                d = r("../node_modules/lodash/intersection.js"),
                u = r.n(d),
                c = r("../node_modules/lodash/isEmpty.js"),
                m = r.n(c),
                h = r("./js/helpers/index.js");

            function p(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var s = Object.getOwnPropertySymbols(e);
                    t && (s = s.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), r.push.apply(r, s)
                }
                return r
            }

            function f(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? p(Object(r), !0).forEach((function(t) {
                        (0, s.Z)(e, t, r[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : p(Object(r)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    }))
                }
                return e
            }
            const b = e => o()(e, "market.market") ? o()(e, "market.market").toLowerCase() : null,
                j = e => (o()(e, "panels.items") || []).map((e => (e.market = e.market ? e.market.toLowerCase() : null, e))),
                _ = e => o()(e, "cart.currency"),
                g = e => (0, n.P1)((e => o()(e, "products.items") || []), _, ((t, r) => {
                    const s = ((e, t) => (t || []).find((t => t.sku === e)))(e, t);
                    return console.log(e, s), o()(s, "bundlePrices." + r.toLowerCase() + ".price") ? o()(s, "bundlePrices." + r.toLowerCase()) : o()(s, "prices." + r.toLowerCase())
                })),
                y = ({
                    id: e,
                    categories: t
                }) => (0, n.P1)(b, j, ((r, s) => ((e, t) => (t || []).find((t => t.id === e)))(e, s) || ((e, t) => i()(t.filter((t => !m()(u()(t.categories, e))))) || null)(t.split(","), s) || i()(((e, t) => {
                    const r = t.filter((t => t.market === e));
                    return r.length ? r : t
                })(r, s)) || null)),
                v = e => (0, n.P1)(w("orders"), (({
                    items: t
                }) => (t || []).find((t => t.id === e)))),
                w = (e = "cart") => t => o()(t, e),
                P = e => o()(e, "products.items") || [],
                k = (e = "cart") => (0, n.P1)(w(e), P, ((e, t) => f(f({}, e), {}, {
                    items: (o()(e, "items") || []).map((e => f(f({}, e), {}, {
                        product: f(f({}, t.find((t => t.id === e.productId))), e.product)
                    })))
                }))),
                E = e => o()(e, "auth.user"),
                O = e => o()(e, "settings"),
                L = (0, n.P1)(E, (e => o()(e, "user_metadata") || {})),
                x = (0, n.P1)(E, (e => o()(e, "app_metadata") || {})),
                A = (0, n.P1)(L, (e => o()(e, "firstname"))),
                N = (0, n.P1)(L, (e => o()(e, "lastname"))),
                C = (0, n.P1)(L, O, ((e, t) => o()(e, "firstname") ? o()(e, "firstname") + " " + o()(e, "lastname") : o()(t, "name"))),
                D = (0, n.P1)(L, O, ((e, t) => o()(e, "twitter") || o()(t, "twitter"))),
                M = (0, n.P1)(E, (e => o()(e, "plan"))),
                S = (0, n.P1)(x, (e => o()(e, "subscription.type"))),
                H = (e, t) => (0, h.jN)(o()(e, t + ".error")),
                I = (0, n.P1)(L, (e => o()(e, "shippingAddress.country") || "")),
                R = ((0, n.P1)(E, (e => o()(e, "token.access_token"))), e => o()(e, "ad.items") || []),
                G = (0, n.P1)(R, (e => e.filter((e => e.active && "sidebar" !== e.placement)).filter((e => !(!(0, h.GH)() || "homepage" !== e.placement) || !(0, h.GH)() && "homepage" !== e.placement)))),
                U = (0, n.P1)(R, (e => e.filter((e => e.active && "sidebar" === e.placement))))
        },
        "../node_modules/lodash/_baseIntersection.js": (e, t, r) => {
            var s = r("../node_modules/lodash/_SetCache.js"),
                n = r("../node_modules/lodash/_arrayIncludes.js"),
                a = r("../node_modules/lodash/_arrayIncludesWith.js"),
                o = r("../node_modules/lodash/_arrayMap.js"),
                l = r("../node_modules/lodash/_baseUnary.js"),
                i = r("../node_modules/lodash/_cacheHas.js"),
                d = Math.min;
            e.exports = function(e, t, r) {
                for (var u = r ? a : n, c = e[0].length, m = e.length, h = m, p = Array(m), f = 1 / 0, b = []; h--;) {
                    var j = e[h];
                    h && t && (j = o(j, l(t))), f = d(j.length, f), p[h] = !r && (t || c >= 120 && j.length >= 120) ? new s(h && j) : void 0
                }
                j = e[0];
                var _ = -1,
                    g = p[0];
                e: for (; ++_ < c && b.length < f;) {
                    var y = j[_],
                        v = t ? t(y) : y;
                    if (y = r || 0 !== y ? y : 0, !(g ? i(g, v) : u(b, v, r))) {
                        for (h = m; --h;) {
                            var w = p[h];
                            if (!(w ? i(w, v) : u(e[h], v, r))) continue e
                        }
                        g && g.push(v), b.push(y)
                    }
                }
                return b
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
                a = r("../node_modules/lodash/_baseRest.js"),
                o = r("../node_modules/lodash/_castArrayLikeObject.js"),
                l = a((function(e) {
                    var t = s(e, o);
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
        "../node_modules/react-uid/dist/es2015/uid.js": (e, t, r) => {
            "use strict";
            r.d(t, {
                h: () => s
            });
            var s = function() {
                var e = 1,
                    t = new WeakMap,
                    r = function(s, n) {
                        return "number" == typeof s || "string" == typeof s ? n ? "idx-" + n : "val-" + s : t.has(s) ? "uid" + t.get(s) : (t.set(s, e++), r(s))
                    };
                return r
            }()
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

            function a(e) {
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
                P1: () => o
            });
            var o = function(e) {
                for (var t = arguments.length, r = Array(t > 1 ? t - 1 : 0), s = 1; s < t; s++) r[s - 1] = arguments[s];
                return function() {
                    for (var t = arguments.length, s = Array(t), n = 0; n < t; n++) s[n] = arguments[n];
                    var o = 0,
                        l = s.pop(),
                        i = a(s),
                        d = e.apply(void 0, [function() {
                            return o++, l.apply(null, arguments)
                        }].concat(r)),
                        u = e((function() {
                            for (var e = [], t = i.length, r = 0; r < t; r++) e.push(i[r].apply(null, arguments));
                            return d.apply(null, e)
                        }));
                    return u.resultFunc = l, u.dependencies = i, u.recomputations = function() {
                        return o
                    }, u.resetRecomputations = function() {
                        return o = 0
                    }, u
                }
            }((function(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : s,
                    r = null,
                    a = null;
                return function() {
                    return n(t, r, arguments) || (a = e.apply(null, arguments)), r = arguments, a
                }
            }))
        }
    }
]);
//# sourceMappingURL=MemberHeader.69ef938f4aa5dd876f17.js.map