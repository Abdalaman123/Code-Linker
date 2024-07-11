(self.webpackChunk = self.webpackChunk || []).push([
    ["ContrastSwitcher"], {
        "./js/handlers/ContrastSwitcher.js": (t, e, s) => {
            "use strict";
            s.r(e), s.d(e, {
                default: () => a
            });
            var n = s("../node_modules/react/index.js"),
                r = s("../node_modules/react-redux/es/index.js"),
                o = s("./js/actions/index.js");
            const i = (t, e) => {
                const s = e ? "add" : "remove";
                document.body.classList[s]("contrast"), t.setAttribute("aria-pressed", e), t.querySelector(".settings--state").textContent = e ? "Bring red back!" : "Seriously, red?"
            };
            class d extends n.Component {
                componentDidMount() {
                    const {
                        element: t,
                        settings: e,
                        setSetting: s
                    } = this.props;
                    i(t, e.highContrast), t.addEventListener("click", (() => {
                        const e = "true" === t.getAttribute("aria-pressed") || !1;
                        i(t, !e), s({
                            highContrast: !e
                        })
                    }))
                }
                render() {
                    return null
                }
            }
            const a = (0, r.$j)((t => ({
                settings: t.settings || {}
            })), (t => ({
                setSetting: e => t((0, o.Lt)(e))
            })))(d)
        }
    }
]);
//# sourceMappingURL=ContrastSwitcher.23684a35d3e9776bf4dd.js.map