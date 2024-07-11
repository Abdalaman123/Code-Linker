(self.webpackChunk = self.webpackChunk || []).push([
    ["CookieBanner"], {
        "./js/containers/CookieBanner.js": (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, {
                default: () => p
            });
            var s = n("../node_modules/react/index.js"),
                a = n("../node_modules/react-redux/es/index.js"),
                o = n("../node_modules/lodash/get.js"),
                r = n.n(o),
                c = n("./js/actions/index.js"),
                i = n("./js/utils/loadScript.js");
            const d = () => {
                Array.from(document.querySelectorAll('script[type="text/plain"]')).forEach((e => {
                    (0, i.Z)(e.getAttribute("src")), e.remove()
                }))
            };
            class l extends s.Component {
                constructor(...e) {
                    super(...e), this.handleClick = e => {
                        const {
                            setPrivacySettings: t
                        } = this.props;
                        d(), t(e)
                    }
                }
                componentDidMount() {
                    const {
                        privacy: {
                            responded: e
                        }
                    } = this.props;
                    e && d()
                }
                render() {
                    const {
                        privacy: {
                            responded: e
                        }
                    } = this.props;
                    return e ? null : s.createElement("div", {
                        className: "cookie-banner"
                    }, s.createElement("p", null, "We use cookies for login, checkout and stats. Learn more in our ", s.createElement("a", {
                        href: "/privacy-policy/"
                    }, "privacy settings"), "."), s.createElement("div", {
                        className: "cookie-banner__container"
                    }, s.createElement("button", {
                        className: "btn btn--white btn--white--bordered cookies--btn btn—-medium mr5",
                        onClick: () => this.handleClick(!1)
                    }, "No, thanks."), s.createElement("button", {
                        className: "btn cookies--btn btn--green btn—-medium btn--text-shadow mr0",
                        onClick: () => this.handleClick(!0)
                    }, "It’s okay.")))
                }
            }
            const p = (0, a.$j)((e => ({
                privacy: r()(e, "privacy")
            })), (e => ({
                setPrivacySettings: t => e((0, c.UE)(t))
            })))(l)
        },
        "./js/utils/loadScript.js": (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => s
            });
            const s = (e, t) => {
                const n = document.createElement("script");
                n.type = "text/javascript", n.readyState ? n.onreadystatechange = () => {
                    "loaded" !== n.readyState && "complete" !== n.readyState || (n.onreadystatechange = null, t && t())
                } : n.onload = () => {
                    t && t()
                }, n.src = e, document.getElementsByTagName("head")[0].appendChild(n)
            }
        }
    }
]);
//# sourceMappingURL=CookieBanner.aab48d19cdb505a211ab.js.map