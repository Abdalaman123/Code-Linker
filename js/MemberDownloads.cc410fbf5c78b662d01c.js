(self.webpackChunk = self.webpackChunk || []).push([
    ["MemberDownloads"], {
        "./js/common/Loader.js": (e, a, t) => {
            "use strict";
            t.d(a, {
                Z: () => n
            });
            var s = t("../node_modules/react/index.js");

            function n({
                inverted: e,
                inline: a
            }) {
                return s.createElement("div", {
                    className: "loader-wrapper " + (a ? "loader-wrapper--inline" : ""),
                    "aria-hidden": "true"
                }, s.createElement("div", {
                    className: ["search-loader", e ? "" : "search-loader--red"].join(" ")
                }, s.createElement("span", {
                    className: "loader"
                }), s.createElement("span", {
                    className: "loader"
                }), s.createElement("span", {
                    className: "loader"
                })))
            }
        },
        "./js/components/DownloadsList.js": (e, a, t) => {
            "use strict";
            t.d(a, {
                Z: () => l
            });
            var s = t("../node_modules/react/index.js"),
                n = (t("./js/constants/index.js"), t("../node_modules/lodash/get.js")),
                o = t.n(n);
            class l extends s.Component {
                constructor(...e) {
                    super(...e), this.handleDownload = (e, a) => t => !t.preventDefault() && this.props.onDownload(e, a)
                }
                render() {
                    const {
                        downloads: e
                    } = this.props;
                    return s.createElement("table", {
                        className: "tablesaw dashboard__table data-table dashboard__table--downloads"
                    }, s.createElement("thead", null, s.createElement("tr", null, s.createElement("th", {
                        className: "dashboard__table--downloads__type"
                    }), s.createElement("th", {
                        className: "dashboard__table--downloads__product",
                        "data-tablesaw-priority": "persist"
                    }, "Product"), s.createElement("th", {
                        className: "dashboard__table--downloads__downloads",
                        "data-tablesaw-priority": "persist"
                    }, "Downloads"))), s.createElement("tbody", null, e.map((e => {
                        const a = o()(e, "images.0.file.url");
                        return s.createElement("tr", {
                            key: e.id,
                            className: "download__item"
                        }, s.createElement("td", null, a && s.createElement("img", {
                            src: a,
                            width: "200"
                        })), s.createElement("td", {
                            className: "download__desc"
                        }, s.createElement("span", {
                            className: "download__name"
                        }, e.name)), s.createElement("td", {
                            "data-tablesaw-priority": "persist",
                            className: "download__action"
                        }, s.createElement("ul", null, (o()(e, "downloads") || []).map((e => s.createElement("li", {
                            key: e.id
                        }, s.createElement("a", {
                            href: "#",
                            onClick: this.handleDownload(e.id, e),
                            className: "btn btn--green download__action-" + e.type
                        }, s.createElement("span", null, e.type))))))))
                    }))))
                }
            }
        },
        "./js/components/Empty.js": (e, a, t) => {
            "use strict";
            t.d(a, {
                Z: () => n
            });
            var s = t("../node_modules/react/index.js");
            const n = e => {
                const {
                    title: a,
                    children: t
                } = e;
                return s.createElement("div", {
                    className: "container"
                }, s.createElement("div", {
                    className: "row dashboard__empty-state"
                }, s.createElement("div", {
                    className: "col col-12 "
                }, s.createElement("h2", null, a), t, s.createElement("img", {
                    src: "/images/smashing-cat/cat-waldo.svg",
                    width: "375",
                    alt: "Sometimes cats get lost, too."
                }))))
            }
        },
        "./js/containers/MemberDownloads.js": (e, a, t) => {
            "use strict";
            t.r(a), t.d(a, {
                default: () => w
            });
            var s = t("../node_modules/react/index.js"),
                n = t("../node_modules/react-redux/es/index.js"),
                o = t("./js/actions/commerce.js"),
                l = t("./js/actions/actionHelpers.js"),
                r = t("./js/constants/index.js");
            const {
                API_URL_ME_DOWNLOADS: d
            } = r.Z, c = "REQUEST_DOWNLOADS", m = ((0, l.hp)(c), (0, l.gt)(c, d, {
                authed: !0
            }));
            var i = t("./js/components/DownloadsList.js"),
                p = t("./js/common/Loader.js"),
                u = t("./js/components/Empty.js");
            class h extends s.Component {
                componentDidMount() {
                    const {
                        fetchDownloads: e
                    } = this.props;
                    e()
                }
                render() {
                    const {
                        downloads: e,
                        loading: a,
                        makeDownload: t
                    } = this.props;
                    return a ? s.createElement(p.Z, null) : e && 0 !== e.length ? s.createElement(i.Z, {
                        onDownload: t,
                        downloads: e,
                        loading: a
                    }) : s.createElement(u.Z, {
                        title: "We couldn’t find any downloads!"
                    }, " ", s.createElement("p", null, "Sometimes servers play ping-pong, but sometimes there are just no orders yet.", s.createElement("br", null), "We have ", s.createElement("a", {
                        href: "/ebooks"
                    }, "printed books and eBooks"), " on everything web, you know.", s.createElement("br", null), "It", "'", "s our mistake? Please email us at", " ", s.createElement("a", {
                        href: "mailto:help@smashingmagazine.com"
                    }, "help@smashingmagazine.com"), "."), " ", s.createElement("div", {
                        className: "btn--lined"
                    }, s.createElement("a", {
                        href: "/ebooks"
                    }, s.createElement("button", {
                        type: "button",
                        className: "btn btn--green btn--large btn--text-shadow"
                    }, "Check those eBooks →"))))
                }
            }
            const w = (0, n.$j)((({
                downloads: e
            }) => ({
                downloads: e.items,
                loading: e.loading
            })), (e => ({
                makeDownload: (a, t) => e((0, o.KV)(a, t)),
                fetchDownloads: () => e(m())
            })))(h)
        }
    }
]);
//# sourceMappingURL=MemberDownloads.cc410fbf5c78b662d01c.js.map