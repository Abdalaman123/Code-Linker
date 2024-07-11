(self.webpackChunk = self.webpackChunk || []).push([
    ["HTMLOverlay"], {
        "./js/common/Overlay.js": (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => a
            });
            var s = n("../node_modules/react/index.js"),
                o = n("../node_modules/react-dom/index.js");
            const l = document.createElement("div");
            document.body.appendChild(l);
            class a extends s.Component {
                componentDidUpdate() {
                    const {
                        visible: e
                    } = this.props;
                    if (void 0 !== e) {
                        const t = e ? "add" : "remove",
                            n = document.querySelector("#cart");
                        n && n.classList[t]("hidden")
                    }
                }
                render() {
                    const {
                        visible: e,
                        onClose: t,
                        verbose: n,
                        wide: a,
                        children: r
                    } = this.props, i = s.createElement("section", {
                        className: "overlay " + (e ? "show" : "hide"),
                        "aria-hidden": !e,
                        tabIndex: "-1",
                        onClick: e => {
                            e.preventDefault(), t && t(e)
                        },
                        ref: e => {
                            this.el = e
                        },
                        role: "presentation"
                    }, s.createElement("div", {
                        className: "overlay__content-wrapper"
                    }, s.createElement("div", {
                        className: "overlay__content " + (n ? "overlay__content--verbose " : "") + " " + (a ? " overlay__content--wide " : ""),
                        onClick: e => e.stopPropagation(),
                        role: "presentation"
                    }, e ? r : null, s.createElement("button", {
                        type: "button",
                        onClick: e => {
                            e.preventDefault(), t && t(e)
                        },
                        className: "overlay-close-button",
                        "aria-label": "close"
                    }, s.createElement("span", {
                        className: "button__label sr-only"
                    }, "Close")))));
                    return o.createPortal(i, l)
                }
            }
        },
        "./js/containers/HTMLOverlay.js": (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, {
                default: () => l
            });
            var s = n("../node_modules/react/index.js"),
                o = n("./js/common/Overlay.js");
            class l extends s.Component {
                componentDidMount() {
                    const {
                        element: e
                    } = this.props;
                    e.addEventListener("click", (e => {
                        e.preventDefault(), this.setState({
                            visible: !0
                        })
                    }))
                }
                componentDidUpdate() {
                    [].forEach.call(this.overlay.el.querySelectorAll('[data-action="close"]'), (e => {
                        e.addEventListener("click", (() => {
                            this.setState({
                                visible: !1
                            })
                        }))
                    }))
                }
                render() {
                    const {
                        selector: e,
                        wide: t
                    } = this.props, {
                        visible: n
                    } = this.state, l = document.querySelector(e);
                    return l ? s.createElement(o.Z, {
                        ref: e => {
                            this.overlay = e
                        },
                        wide: t,
                        visible: n,
                        onClose: e => !e.stopPropagation() && this.setState({
                            visible: !1
                        })
                    }, s.createElement("div", {
                        dangerouslySetInnerHTML: {
                            __html: l.innerHTML
                        }
                    })) : null
                }
            }
        }
    }
]);
//# sourceMappingURL=HTMLOverlay.a61624a2067d80f5f465.js.map