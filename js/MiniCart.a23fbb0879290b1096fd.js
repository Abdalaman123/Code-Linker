(self.webpackChunk = self.webpackChunk || []).push([
    ["MiniCart"], {
        "./js/containers/MiniCart.js": (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, {
                default: () => h
            });
            var r = n("../node_modules/react/index.js"),
                a = n("../node_modules/react-redux/es/index.js"),
                s = n("../node_modules/lodash/get.js"),
                o = n.n(s),
                c = n("./js/actions/commerce.js"),
                l = n("./js/helpers/index.js"),
                i = n("./js/constants/index.js"),
                u = n("./js/selectors/index.js");
            const d = () => {
                    let e = !0;
                    return i.Z.NO_MINI_CART_ROUTES.forEach((t => {
                        document.location.pathname.match(t) && (e = !1)
                    })), e
                },
                m = "cart-active";
            class p extends r.Component {
                constructor(e) {
                    super(e), this.handleToggle = e => {
                        e.preventDefault(), e.stopPropagation(), this.setState((e => ({
                            open: !e.open,
                            wasUserInteraction: !0
                        })))
                    }, this.handleCartClick = e => e.stopPropagation(), this.handleEmpty = e => {
                        const {
                            emptyCart: t
                        } = this.props;
                        this.handleToggle(e), e.preventDefault(), setTimeout((() => t()), 200)
                    }, this.timeout = null, this.state = Object.assign({
                        open: !0,
                        cart: {},
                        wasUserInteraction: !1,
                        wasEmptyBefore: !1
                    })
                }
                componentDidMount() {
                    const {
                        fetchCart: e
                    } = this.props;
                    e()
                }
                componentDidUpdate() {
                    const {
                        cart: e,
                        wasEmptyBefore: t
                    } = this.state;
                    if (!o()(e, "items")) return !1;
                    !!e.itemQuantity && d() ? document.body.classList.add(m) : document.body.classList.remove(m), t && setTimeout((() => {
                        this.setState({
                            open: !0,
                            wasUserInteraction: !1
                        }, (() => {
                            this.timeout && clearTimeout(this.timeout), this.timeout = setTimeout((() => {
                                const {
                                    open: e,
                                    wasUserInteraction: t
                                } = this.state;
                                e && !t && this.setState({
                                    open: !1
                                })
                            }), 5e3)
                        }))
                    }), 0)
                }
                static getDerivedStateFromProps(e, t) {
                    const {
                        cart: n
                    } = e, {
                        open: r,
                        cart: a
                    } = t;
                    return {
                        open: !!n.itemQuantity && r,
                        cart: n,
                        wasEmptyBefore: a && a.loaded && !a.itemQuantity && n.loaded && n.itemQuantity
                    }
                }
                handleQTY(e, t) {
                    const {
                        updateItem: n,
                        removeItem: r
                    } = this.props;
                    return a => {
                        a.preventDefault(), t ? n(o()(e, "id"), t) : r(o()(e, "id"))
                    }
                }
                render() {
                    const {
                        open: e
                    } = this.state, {
                        shippingAddress: t,
                        cart: n,
                        wasEmptyBefore: a
                    } = this.props, s = !n.itemQuantity, c = {
                        "cart-container": !0,
                        "cart-open": e && !s,
                        empty: s
                    }, i = (0, l.PX)(t.country, n);
                    return s || !d() ? null : r.createElement("div", {
                        className: Object.keys(c).filter((e => c[e])).join(" "),
                        onClick: this.handleToggle
                    }, r.createElement("a", {
                        onClick: this.handleToggle,
                        className: "cart-trigger cart-reminder-animation" + (a ? "-init" : "")
                    }, r.createElement("ul", {
                        className: "count"
                    }, r.createElement("li", null, n.itemQuantity), r.createElement("li", null, n.itemQuantity))), r.createElement("div", {
                        className: "cart cart-reminder-animation" + (a ? "-init" : ""),
                        onClick: this.handleCartClick
                    }, r.createElement("div", {
                        className: "wrapper"
                    }, r.createElement("header", null, r.createElement("h2", null, "Shopping Cart"), r.createElement("a", {
                        className: "clear-the-cart",
                        href: "#",
                        onClick: this.handleEmpty
                    }, "Clear the cart")), r.createElement("div", {
                        className: "body"
                    }, r.createElement("ul", null, (o()(n, "items") || []).map((e => {
                        const t = (0, l.od)(o()(e, "product.productType")),
                            a = t ? "/" + t + "/" + o()(e, "product.sku") : null,
                            s = o()(e, "product.name");
                        return r.createElement("li", {
                            className: "product",
                            key: e.id
                        }, r.createElement("div", {
                            className: "product-image"
                        }, r.createElement("a", {
                            href: e.path
                        }, r.createElement("img", {
                            src: o()(e, "product.images[0].file.url"),
                            alt: o()(e, "product.name")
                        }))), r.createElement("div", {
                            className: "product-details"
                        }, r.createElement("h3", {
                            className: "product-title"
                        }, a ? r.createElement("a", {
                            href: a
                        }, s) : s), r.createElement("p", {
                            className: "product-description"
                        }, o()(e, "product.content.productType"), e.addons && " + " + e.addons.map((e => e.title)).join(", ")), r.createElement("div", {
                            className: "product-controls"
                        }, r.createElement("div", {
                            className: "product-amount"
                        }, r.createElement("span", {
                            className: "product-count grey lining-figures-tnum"
                        }, e.quantity), " ", r.createElement("span", {
                            className: "grey"
                        }, "×"), " ", "USD" === n.currency && r.createElement("span", {
                            className: "product-currency"
                        }, "$"), r.createElement("span", {
                            className: "product-price lining-figures-tnum"
                        }, e.price), "EUR" === n.currency && r.createElement("span", {
                            className: "product-currency"
                        }, "€")), (0, l.Xg)((0, l.s6)(e)) ? r.createElement("label", {
                            htmlFor: "count-" + e.id,
                            className: "form__field product-counter"
                        }, r.createElement("div", {
                            className: "increment-decrement-input-wrapper"
                        }, r.createElement("input", {
                            className: "form__field__input",
                            type: "number",
                            name: "count",
                            id: "count-" + e.id,
                            value: e.quantity,
                            min: "1",
                            inputMode: "decimal",
                            onChange: t => this.handleQTY(e, parseInt(t.target.value, 10))(t)
                        }), r.createElement("button", {
                            type: "button",
                            className: "increment-button count-button",
                            "aria-controls": "count-2",
                            onClick: this.handleQTY(e, e.quantity + 1)
                        }, "+"), r.createElement("button", {
                            type: "button",
                            className: "decrement-button count-button",
                            "aria-controls": "count-2",
                            onClick: this.handleQTY(e, e.quantity - 1)
                        }, "-"))) : r.createElement("a", {
                            href: "#",
                            onClick: this.handleQTY(e, 0),
                            className: "form__field product-counter"
                        }, "Remove"))))
                    })), o()(n, "discountTotal") ? r.createElement("li", {
                        className: "product checkout__coupon"
                    }, r.createElement("div", {
                        className: "product-image"
                    }, r.createElement("img", {
                        src: "/images/smashing-cat/cat-just-friendly.svg",
                        alt: "Friendly Cat"
                    })), r.createElement("div", {
                        className: "product-details"
                    }, r.createElement("h3", {
                        className: "product-title"
                    }, "Your Discount", " ", r.createElement("span", {
                        role: "img",
                        "aria-label": "Lion",
                        className: "membership-emoji"
                    }, "🦁")), r.createElement("p", {
                        className: "product-description"
                    }, r.createElement("em", null, "Thanks for being smashing.")), r.createElement("div", {
                        className: "product-controls"
                    }, r.createElement("div", {
                        className: "product-amount"
                    }, r.createElement("span", {
                        className: "product-count lining-figures-tnum coupon-sum"
                    }, "-", (0, l.dN)(n.discountTotal, n.currency)), " ")))) : null)), r.createElement("footer", null, r.createElement("a", {
                        href: "/checkout",
                        className: "checkout"
                    }, r.createElement("span", null, "Checkout (", (0, l.dN)(n.grandTotal, n.currency), ") →"), r.createElement("small", null, r.createElement("span", null, "Final prices, no surprises."), " ", (0, l.S6)(n) && r.createElement("span", null, "You", "'", "ll get the book before", " ", (0, l.p6)(i[1]), ".", " "), (0, l.Yl)(n, "eBook") && r.createElement("span", null, "Amazon Kindle, ePUB, PDF.")))))))
                }
            }
            const h = (0, a.$j)((e => ({
                cart: (0, u.oU)()(e),
                products: o()(e, "products.items"),
                shippingAddress: o()(e, "order.details.shippingAddress") || o()(e, "auth.user.user_metadata.shippingAddress") || {}
            })), (e => ({
                fetchCart: () => e((0, c.x7)()),
                emptyCart: () => e((0, c.UY)()),
                updateItem: (t, n) => e((0, c.$G)(t, n)),
                removeItem: t => e((0, c.cl)(t))
            })))(p)
        },
        "./js/selectors/index.js": (e, t, n) => {
            "use strict";
            n.d(t, {
                j: () => j,
                Yy: () => E,
                hv: () => v,
                NW: () => _,
                oU: () => k,
                AX: () => T,
                RH: () => x,
                u6: () => A,
                bY: () => I,
                Mc: () => L,
                nj: () => D,
                zh: () => U,
                GG: () => Q,
                yx: () => Y,
                Nq: () => M
            });
            var r = n("../node_modules/@babel/runtime/helpers/esm/defineProperty.js"),
                a = n("../node_modules/reselect/es/index.js"),
                s = n("../node_modules/lodash/get.js"),
                o = n.n(s),
                c = n("../node_modules/lodash/sample.js"),
                l = n.n(c),
                i = n("../node_modules/lodash/intersection.js"),
                u = n.n(i),
                d = n("../node_modules/lodash/isEmpty.js"),
                m = n.n(d),
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
            const y = e => o()(e, "market.market") ? o()(e, "market.market").toLowerCase() : null,
                g = e => (o()(e, "panels.items") || []).map((e => (e.market = e.market ? e.market.toLowerCase() : null, e))),
                j = e => o()(e, "cart.currency"),
                E = e => (0, a.P1)((e => o()(e, "products.items") || []), j, ((t, n) => {
                    const r = ((e, t) => (t || []).find((t => t.sku === e)))(e, t);
                    return console.log(e, r), o()(r, "bundlePrices." + n.toLowerCase() + ".price") ? o()(r, "bundlePrices." + n.toLowerCase()) : o()(r, "prices." + n.toLowerCase())
                })),
                v = ({
                    id: e,
                    categories: t
                }) => (0, a.P1)(y, g, ((n, r) => ((e, t) => (t || []).find((t => t.id === e)))(e, r) || ((e, t) => l()(t.filter((t => !m()(u()(t.categories, e))))) || null)(t.split(","), r) || l()(((e, t) => {
                    const n = t.filter((t => t.market === e));
                    return n.length ? n : t
                })(n, r)) || null)),
                _ = e => (0, a.P1)(b("orders"), (({
                    items: t
                }) => (t || []).find((t => t.id === e)))),
                b = (e = "cart") => t => o()(t, e),
                N = e => o()(e, "products.items") || [],
                k = (e = "cart") => (0, a.P1)(b(e), N, ((e, t) => f(f({}, e), {}, {
                    items: (o()(e, "items") || []).map((e => f(f({}, e), {}, {
                        product: f(f({}, t.find((t => t.id === e.productId))), e.product)
                    })))
                }))),
                P = e => o()(e, "auth.user"),
                C = e => o()(e, "settings"),
                w = (0, a.P1)(P, (e => o()(e, "user_metadata") || {})),
                O = (0, a.P1)(P, (e => o()(e, "app_metadata") || {})),
                T = (0, a.P1)(w, (e => o()(e, "firstname"))),
                x = (0, a.P1)(w, (e => o()(e, "lastname"))),
                A = (0, a.P1)(w, C, ((e, t) => o()(e, "firstname") ? o()(e, "firstname") + " " + o()(e, "lastname") : o()(t, "name"))),
                I = (0, a.P1)(w, C, ((e, t) => o()(e, "twitter") || o()(t, "twitter"))),
                L = (0, a.P1)(P, (e => o()(e, "plan"))),
                D = (0, a.P1)(O, (e => o()(e, "subscription.type"))),
                U = (e, t) => (0, p.jN)(o()(e, t + ".error")),
                Q = (0, a.P1)(w, (e => o()(e, "shippingAddress.country") || "")),
                S = ((0, a.P1)(P, (e => o()(e, "token.access_token"))), e => o()(e, "ad.items") || []),
                Y = (0, a.P1)(S, (e => e.filter((e => e.active && "sidebar" !== e.placement)).filter((e => !(!(0, p.GH)() || "homepage" !== e.placement) || !(0, p.GH)() && "homepage" !== e.placement)))),
                M = (0, a.P1)(S, (e => e.filter((e => e.active && "sidebar" === e.placement))))
        },
        "../node_modules/lodash/_baseIntersection.js": (e, t, n) => {
            var r = n("../node_modules/lodash/_SetCache.js"),
                a = n("../node_modules/lodash/_arrayIncludes.js"),
                s = n("../node_modules/lodash/_arrayIncludesWith.js"),
                o = n("../node_modules/lodash/_arrayMap.js"),
                c = n("../node_modules/lodash/_baseUnary.js"),
                l = n("../node_modules/lodash/_cacheHas.js"),
                i = Math.min;
            e.exports = function(e, t, n) {
                for (var u = n ? s : a, d = e[0].length, m = e.length, p = m, h = Array(m), f = 1 / 0, y = []; p--;) {
                    var g = e[p];
                    p && t && (g = o(g, c(t))), f = i(g.length, f), h[p] = !n && (t || d >= 120 && g.length >= 120) ? new r(p && g) : void 0
                }
                g = e[0];
                var j = -1,
                    E = h[0];
                e: for (; ++j < d && y.length < f;) {
                    var v = g[j],
                        _ = t ? t(v) : v;
                    if (v = n || 0 !== v ? v : 0, !(E ? l(E, _) : u(y, _, n))) {
                        for (p = m; --p;) {
                            var b = h[p];
                            if (!(b ? l(b, _) : u(e[p], _, n))) continue e
                        }
                        E && E.push(_), y.push(v)
                    }
                }
                return y
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
                a = n("../node_modules/lodash/_baseIntersection.js"),
                s = n("../node_modules/lodash/_baseRest.js"),
                o = n("../node_modules/lodash/_castArrayLikeObject.js"),
                c = s((function(e) {
                    var t = r(e, o);
                    return t.length && t[0] === e[0] ? a(t) : []
                }));
            e.exports = c
        },
        "../node_modules/lodash/isArrayLikeObject.js": (e, t, n) => {
            var r = n("../node_modules/lodash/isArrayLike.js"),
                a = n("../node_modules/lodash/isObjectLike.js");
            e.exports = function(e) {
                return a(e) && r(e)
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

            function a(e, t, n) {
                if (null === t || null === n || t.length !== n.length) return !1;
                for (var r = t.length, a = 0; a < r; a++)
                    if (!e(t[a], n[a])) return !1;
                return !0
            }

            function s(e) {
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
                    for (var t = arguments.length, r = Array(t), a = 0; a < t; a++) r[a] = arguments[a];
                    var o = 0,
                        c = r.pop(),
                        l = s(r),
                        i = e.apply(void 0, [function() {
                            return o++, c.apply(null, arguments)
                        }].concat(n)),
                        u = e((function() {
                            for (var e = [], t = l.length, n = 0; n < t; n++) e.push(l[n].apply(null, arguments));
                            return i.apply(null, e)
                        }));
                    return u.resultFunc = c, u.dependencies = l, u.recomputations = function() {
                        return o
                    }, u.resetRecomputations = function() {
                        return o = 0
                    }, u
                }
            }((function(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : r,
                    n = null,
                    s = null;
                return function() {
                    return a(t, n, arguments) || (s = e.apply(null, arguments)), n = arguments, s
                }
            }))
        }
    }
]);
//# sourceMappingURL=MiniCart.a23fbb0879290b1096fd.js.map