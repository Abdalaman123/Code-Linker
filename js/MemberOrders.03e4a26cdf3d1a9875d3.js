(self.webpackChunk = self.webpackChunk || []).push([
    ["MemberOrders"], {
        "./js/components/Empty.js": (e, t, r) => {
            "use strict";
            r.d(t, {
                Z: () => s
            });
            var a = r("../node_modules/react/index.js");
            const s = e => {
                const {
                    title: t,
                    children: r
                } = e;
                return a.createElement("div", {
                    className: "container"
                }, a.createElement("div", {
                    className: "row dashboard__empty-state"
                }, a.createElement("div", {
                    className: "col col-12 "
                }, a.createElement("h2", null, t), r, a.createElement("img", {
                    src: "/images/smashing-cat/cat-waldo.svg",
                    width: "375",
                    alt: "Sometimes cats get lost, too."
                }))))
            }
        },
        "./js/containers/MemberOrders.js": (e, t, r) => {
            "use strict";
            r.r(t), r.d(t, {
                default: () => g
            });
            var a = r("../node_modules/react/index.js"),
                s = r("../node_modules/react-redux/es/index.js"),
                n = r("./js/actions/commerce.js"),
                o = r("../node_modules/date-fns/format/index.js"),
                l = r.n(o),
                d = r("../node_modules/react-uid/dist/es2015/uid.js"),
                m = r("./js/components/Empty.js"),
                c = r("./js/common/Loader.js"),
                i = r("./js/helpers/index.js");
            const u = ({
                order: e
            }) => a.createElement("tr", {
                className: "order__item " + e.payment_state
            }, a.createElement("th", {
                className: "order__nb"
            }, a.createElement("a", {
                href: "/membership/orders/" + e.id
            }, e.number || e.invoice_number || (0, i.P2)(e.id))), a.createElement("th", {
                className: "order__title"
            }, a.createElement("a", {
                href: "/membership/orders/" + e.id
            }, (0, i.Ui)(e))), a.createElement("th", {
                className: "order__type"
            }, a.createElement("small", null, (0, i.QD)(e).join(" + ").toUpperCase())), a.createElement("td", {
                className: "order__date"
            }, a.createElement("time", {
                dateTime: l()(e.dateCreated || e.created_at, "YYYY-MM-DD HH:mm")
            }, l()(e.dateCreated || e.created_at, "MMM D, YYYY"))), a.createElement("td", {
                className: "order__total"
            }, e.refunded ? "Refunded" : (0, i.dN)(e.grandTotal || e.total / 100, e.currency)));
            class p extends a.Component {
                constructor(e) {
                    super(e), document.body.classList.add("dashboard-page")
                }
                render() {
                    const {
                        orders: e
                    } = this.props;
                    return a.createElement("table", {
                        "data-tablesaw-mode": "swipe",
                        "data-tablesaw-minimap": !0,
                        "data-tablesaw-swipe-media": "(max-width: 800px)",
                        className: "dashboard__table dashboard__table--orders enhance-table"
                    }, a.createElement("thead", null, a.createElement("tr", null, a.createElement("th", null, "#"), a.createElement("th", {
                        "data-tablesaw-priority": "persist"
                    }, "Title"), a.createElement("th", {
                        "data-tablesaw-sortable-col": !0
                    }, "Type"), a.createElement("th", {
                        "data-tablesaw-sortable-col": !0
                    }, "Date"), a.createElement("th", {
                        "data-tablesaw-sortable-col": !0
                    }, "Total"))), a.createElement("tbody", null, e.filter((e => "paid" === e.payment_state || e.paid)).map((e => a.createElement(u, {
                        key: (0, d.h)(e),
                        order: e
                    })))))
                }
            }
            class h extends a.Component {
                renderEmpty() {
                    return a.createElement(m.Z, {
                        title: "We couldn’t find any purchases!"
                    }, a.createElement("p", null, "Sometimes servers play ping-pong, but sometimes there are just ", a.createElement("strong", null, "no purchases yet"), ".", a.createElement("br", null), "We have ", a.createElement("a", {
                        href: "/printed-books"
                    }, "printed books and eBooks"), " on everything web, you know.", a.createElement("br", null), "It", "'", "s our mistake? Please email us at", " ", a.createElement("a", {
                        href: "mailto:help@smashingmagazine.com"
                    }, "help@smashingmagazine.com"), "."), a.createElement("div", {
                        className: "btn--lined"
                    }, a.createElement("a", {
                        href: "/printed-books"
                    }, a.createElement("button", {
                        type: "button",
                        className: "btn btn--green btn--large btn--text-shadow"
                    }, "Check those books →"))))
                }
                render() {
                    const {
                        orders: e,
                        loading: t,
                        error: r
                    } = this.props;
                    return t ? a.createElement(c.Z, null) : !e || e && 0 === e.length ? this.renderEmpty() : a.createElement("div", null, !(t || r) && a.createElement(p, {
                        orders: e
                    }))
                }
            }
            var b = r("./js/components/OrderItem.js"),
                E = r("./js/selectors/index.js");
            class _ extends a.Component {
                componentDidMount() {
                    const {
                        fetchOrder: e,
                        fetchOrders: t,
                        orderId: r
                    } = this.props;
                    r ? e(r) : t()
                }
                render() {
                    const {
                        order: e,
                        orders: t,
                        loading: r,
                        makeDownload: s,
                        orderId: n
                    } = this.props;
                    return a.createElement("div", null, n ? a.createElement(b.Z, {
                        order: e,
                        onDownload: e => s(e),
                        loading: r
                    }) : a.createElement(h, {
                        orders: t,
                        loading: r
                    }))
                }
            }
            const g = (0, s.$j)((e => {
                const {
                    orders: t
                } = e, r = window.location.pathname.match(/orders\/([^/]+)/);
                let a = r && r[1];
                return {
                    order: (0, E.NW)(a)(e),
                    orders: t.items,
                    loading: t.loading,
                    orderId: a
                }
            }), (e => ({
                makeDownload: t => e((0, n.KV)(t)),
                fetchOrder: t => e((0, n.G7)(t)),
                fetchOrders: () => e((0, n.AU)())
            })))(_)
        },
        "../node_modules/react-uid/dist/es2015/uid.js": (e, t, r) => {
            "use strict";
            r.d(t, {
                h: () => a
            });
            var a = function() {
                var e = 1,
                    t = new WeakMap,
                    r = function(a, s) {
                        return "number" == typeof a || "string" == typeof a ? s ? "idx-" + s : "val-" + a : t.has(a) ? "uid" + t.get(a) : (t.set(a, e++), r(a))
                    };
                return r
            }()
        }
    }
]);
//# sourceMappingURL=MemberOrders.03e4a26cdf3d1a9875d3.js.map