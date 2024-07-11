(self.webpackChunk = self.webpackChunk || []).push([
    ["MemberCount"], {
        "./js/containers/MemberCount.js": (e, s, t) => {
            "use strict";
            t.r(s), t.d(s, {
                default: () => l
            });
            var n = t("../node_modules/react/index.js"),
                r = t("../node_modules/react-redux/es/index.js"),
                o = t("./js/actions/actionHelpers.js"),
                c = t("./js/constants/index.js");
            const a = "USER_STATS_FETCH",
                u = ((0, o.hp)(a), (0, o.gt)(a, c.Z.API_URL_MEMBERS));
            class d extends n.Component {
                constructor(...e) {
                    super(...e), this.render = () => {
                        const {
                            amount: e
                        } = this.props;
                        return e ? n.createElement("span", null, e) : n.createElement("span", null)
                    }
                }
                componentDidMount() {
                    const {
                        fetchUserStats: e
                    } = this.props;
                    e()
                }
            }
            const l = (0, r.$j)((e => ({
                amount: e.users.total ? e.users.subscribers.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") : 0
            })), (e => ({
                fetchUserStats: () => e(u())
            })))(d)
        }
    }
]);
//# sourceMappingURL=MemberCount.8cf23757789b93a24739.js.map