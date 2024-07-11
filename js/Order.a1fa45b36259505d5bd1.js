(self.webpackChunk = self.webpackChunk || []).push([
    ["Order"], {
        "./js/containers/Order.js": (e, r, n) => {
            "use strict";
            n.r(r), n.d(r, {
                default: () => l
            });
            var o = n("../node_modules/react/index.js"),
                d = n("../node_modules/react-redux/es/index.js"),
                s = n("./js/actions/commerce.js"),
                t = n("./js/selectors/index.js"),
                c = n("./js/helpers/index.js"),
                i = n("./js/components/OrderItem.js");
            class a extends o.Component {
                componentDidMount() {
                    const {
                        fetchCartOrder: e,
                        orderId: r
                    } = this.props;
                    r && e(r)
                }
                render() {
                    const {
                        order: e,
                        loading: r,
                        print: n
                    } = this.props;
                    return o.createElement("div", null, o.createElement(i.Z, {
                        print: n,
                        order: e,
                        loading: r,
                        isReceipt: !0
                    }))
                }
            }
            const l = (0, d.$j)((e => {
                const r = window.location.pathname.match(/invoices\/([^/]+)/);
                let n = r && r[1];
                return {
                    order: (0, t.oU)("order")(e),
                    loading: e.order.loading,
                    loaded: e.order.loaded,
                    orderId: n,
                    print: (0, c.re)("print")
                }
            }), (e => ({
                fetchCartOrder: r => e((0, s.bg)(r, !0))
            })))(a)
        }
    }
]);
//# sourceMappingURL=Order.a1fa45b36259505d5bd1.js.map