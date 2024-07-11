(self.webpackChunk = self.webpackChunk || []).push([
    ["TokenVerification"], {
        "./js/common/Loader.js": (e, n, a) => {
            "use strict";
            a.d(n, {
                Z: () => o
            });
            var r = a("../node_modules/react/index.js");

            function o({
                inverted: e,
                inline: n
            }) {
                return r.createElement("div", {
                    className: "loader-wrapper " + (n ? "loader-wrapper--inline" : ""),
                    "aria-hidden": "true"
                }, r.createElement("div", {
                    className: ["search-loader", e ? "" : "search-loader--red"].join(" ")
                }, r.createElement("span", {
                    className: "loader"
                }), r.createElement("span", {
                    className: "loader"
                }), r.createElement("span", {
                    className: "loader"
                })))
            }
        },
        "./js/containers/TokenVerification.js": (e, n, a) => {
            "use strict";
            a.r(n), a.d(n, {
                default: () => c
            });
            var r = a("../node_modules/react/index.js"),
                o = a("../node_modules/react-redux/es/index.js"),
                s = a("./js/common/Loader.js"),
                t = a("./js/actions/index.js");
            class i extends r.Component {
                constructor(e) {
                    super(e), this.componentDidMount = () => {
                        const {
                            verifyEmailChangeToken: e,
                            verifyRecoveryToken: n,
                            verifyConfirmationToken: a
                        } = this.props, {
                            token: r,
                            route: o
                        } = this.state;
                        switch (o) {
                            case "confirm":
                                a(r);
                                break;
                            case "recover":
                                n(r);
                                break;
                            default:
                                e(r)
                        }
                    }, this.render = () => r.createElement(s.Z, null);
                    const n = window.location.pathname.split("/"),
                        a = n.pop(),
                        o = n.pop();
                    this.state = {
                        token: a,
                        route: o
                    }
                }
            }
            const c = (0, o.$j)(null, (e => ({
                verifyConfirmationToken: n => e((0, t.Rj)(n)),
                verifyRecoveryToken: n => e((0, t.D6)(n)),
                verifyEmailChangeToken: n => e((0, t.Hs)(n))
            })))(i)
        }
    }
]);
//# sourceMappingURL=TokenVerification.55dbbcb8c7b93a6aa7fb.js.map