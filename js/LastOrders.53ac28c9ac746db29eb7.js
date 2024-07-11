(self.webpackChunk = self.webpackChunk || []).push([
    ["LastOrders"], {
        "./js/containers/LastOrders.js": (e, t, s) => {
            "use strict";
            s.r(t), s.d(t, {
                default: () => h
            });
            var n = s("../node_modules/react/index.js"),
                r = s("../node_modules/react-redux/es/index.js"),
                o = s("../node_modules/lodash/isEmpty.js"),
                l = s.n(o),
                a = s("../node_modules/lodash/get.js"),
                d = s.n(a),
                i = s("../node_modules/date-fns/format/index.js"),
                m = s.n(i),
                c = s("./js/actions/commerce.js");
            class u extends n.Component {
                constructor(...e) {
                    super(...e), this.state = {}, this.render = () => {
                        const {
                            loading: e,
                            items: t,
                            count: s
                        } = this.props;
                        if (e || l()(t)) return null;
                        const r = t.slice(0, s);
                        return n.createElement("div", null, n.createElement("div", null, "Your last orders ", n.createElement("a", {
                            href: "/membership/orders/"
                        }, "(see all)"), ":"), r.map((e => e.line_items.map((t => {
                            const s = (e => ({
                                    "e-book": "eBook",
                                    book: "Print + eBook",
                                    bundle: "eBook Bundle"
                                }[e.type.toLowerCase()]))(t),
                                r = d()(t, "meta.attendees"),
                                o = d()(t, "meta.event"),
                                l = o && o.title ? "SmashingConf " + o.title + " " + t.title + (r && r.length > 1 ? "s" : "") : t.title;
                            return n.createElement("div", null, n.createElement("strong", null, n.createElement("a", {
                                href: "/membership/orders/" + e.id
                            }, l)), s && n.createElement("em", null, " (", s, ")"), n.createElement("span", {
                                className: "small-caps light-grey"
                            }, " ", "— ", m()(e.created_at, "DD.MM.YYYY")))
                        })))))
                    }
                }
                static getDerivedStateFromProps(e, t) {
                    const {
                        items: s,
                        element: n,
                        loading: r
                    } = e;
                    return !r && !l()(s) && n.classList.remove("hidden"), t
                }
                componentDidMount() {
                    const {
                        fetchOrders: e
                    } = this.props;
                    e()
                }
            }
            const h = (0, r.$j)((({
                orders: e
            }) => ({
                loading: e.loading,
                items: e.items
            })), (e => ({
                fetchOrders: () => e((0, c.AU)())
            })))(u)
        }
    }
]);
//# sourceMappingURL=LastOrders.53ac28c9ac746db29eb7.js.map