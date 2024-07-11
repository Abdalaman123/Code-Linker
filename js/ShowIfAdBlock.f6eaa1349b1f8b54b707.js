(self.webpackChunk = self.webpackChunk || []).push([
    ["ShowIfAdBlock"], {
        "./js/handlers/ShowIfAdBlock.js": (e, d, s) => {
            "use strict";
            s.r(d), s.d(d, {
                default: () => c
            });
            var n = s("../node_modules/react/index.js"),
                t = s("../node_modules/react-redux/es/index.js");
            class o extends n.Component {
                componentDidUpdate() {
                    const {
                        element: e,
                        hide: d,
                        blocked: s
                    } = this.props;
                    if (!d && s) {
                        e.classList.remove("hidden");
                        const d = document.getElementById("membership-popup__close-button");
                        d && d.addEventListener("click", (d => !d.preventDefault() && e.classList.add("hidden")))
                    }
                }
                render() {
                    return null
                }
            }
            const c = (0, t.$j)((e => ({
                hide: e.ad.hide,
                blocked: e.ad.blocked
            })))(o)
        }
    }
]);
//# sourceMappingURL=ShowIfAdBlock.f6eaa1349b1f8b54b707.js.map