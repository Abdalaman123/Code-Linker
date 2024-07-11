(self.webpackChunk = self.webpackChunk || []).push([
    ["SearchResults"], {
        "./js/common/Loader.js": (e, t, a) => {
            "use strict";
            a.d(t, {
                Z: () => s
            });
            var r = a("../node_modules/react/index.js");

            function s({
                inverted: e,
                inline: t
            }) {
                return r.createElement("div", {
                    className: "loader-wrapper " + (t ? "loader-wrapper--inline" : ""),
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
        "./js/containers/SearchResults.js": (e, t, a) => {
            "use strict";
            a.r(t), a.d(t, {
                default: () => b
            });
            var r = a("../node_modules/@babel/runtime/helpers/esm/defineProperty.js"),
                s = a("../node_modules/react/index.js"),
                l = a("../node_modules/react-redux/es/index.js"),
                n = a("../node_modules/react-uid/dist/es2015/uid.js"),
                c = a("../node_modules/date-fns/format/index.js"),
                o = a.n(c),
                i = a("../node_modules/lodash/get.js"),
                m = a.n(i),
                u = a("./js/actions/index.js"),
                d = a("./js/helpers/index.js"),
                h = a("./js/common/Loader.js");

            function p(e, t) {
                var a = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), a.push.apply(a, r)
                }
                return a
            }

            function g(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var a = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? p(Object(a), !0).forEach((function(t) {
                        (0, r.Z)(e, t, a[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a)) : p(Object(a)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(a, t))
                    }))
                }
                return e
            }
            const E = e => {
                    const {
                        hit: t
                    } = e, a = new Date(1e3 * t.publishedDate), r = t.url.split("/").filter((e => e)).pop();
                    return s.createElement("article", {
                        className: "article--post"
                    }, s.createElement("header", null, s.createElement("div", {
                        className: "article--post__image mb-5"
                    }, s.createElement("figure", {
                        className: "bio-image"
                    }, s.createElement("a", {
                        className: "bio-image-link",
                        href: t.authorURL
                    }, s.createElement("div", {
                        className: "bio-image-wrapper"
                    }, s.createElement("img", {
                        className: "bio-image-image",
                        src: t.authorImage || t.image,
                        width: "75",
                        height: "75",
                        alt: t.authorName || t.author
                    }))))), s.createElement("div", {
                        className: "search-post-container"
                    }, s.createElement("span", {
                        className: "article--post__author-name"
                    }, s.createElement("a", {
                        className: "grey",
                        href: t.authorURL,
                        dangerouslySetInnerHTML: {
                            __html: m()(t, "_highlightResult.authorName.value") || t.authorName
                        }
                    }), " ", s.createElement("span", null, "wrote")), s.createElement("h2", {
                        className: "article--post__title"
                    }, s.createElement("a", {
                        href: t.url,
                        dangerouslySetInnerHTML: {
                            __html: t._highlightResult.title.value
                        }
                    })))), s.createElement("footer", {
                        className: "article--post__stats"
                    }, s.createElement("ul", null, s.createElement("li", {
                        className: "article--post__comments-count"
                    }, s.createElement("a", {
                        href: t.url + "#comments"
                    }, s.createElement("span", {
                        className: "js-comments-count",
                        "data-slug": r,
                        "data-date": a
                    }, t.commentCount), " ", "comments")))), s.createElement("div", {
                        className: "article--post__content"
                    }, s.createElement("p", {
                        className: "article--post__teaser"
                    }, s.createElement("time", {
                        dateTime: o()(a, "YYYY-MM-DD"),
                        className: "article--post__time"
                    }, o()(a, "MMMM D, YYYY"), " —", " "), s.createElement("span", {
                        dangerouslySetInnerHTML: {
                            __html: t._highlightResult.description.value
                        }
                    }), " ", s.createElement("a", {
                        href: t.url,
                        className: "read-more-link"
                    }, "Read more…"))))
                },
                _ = e => {
                    const {
                        hit: t
                    } = e, a = new Date(1e3 * t.publishedDate);
                    return s.createElement("li", {
                        className: "row"
                    }, s.createElement("div", {
                        className: "col-xs-12 col-md-3"
                    }, s.createElement("figure", null, s.createElement("a", {
                        href: t.url
                    }, s.createElement("img", {
                        width: "235",
                        loading: "eager",
                        src: t.image || t.authorImage,
                        alt: t.author
                    })))), s.createElement("article", {
                        className: "col-xs-12 col-md-9"
                    }, s.createElement("h2", null, s.createElement("a", {
                        href: t.url,
                        dangerouslySetInnerHTML: {
                            __html: t._highlightResult.title.value
                        }
                    })), s.createElement("span", {
                        className: "article--post__url"
                    }, (0, d.CN)(t.url)), s.createElement("p", null, s.createElement("time", {
                        dateTime: o()(a, "YYYY-MM-DD"),
                        className: "article--post__time"
                    }, o()(a, "MMM D, YYYY"), " —"), s.createElement("span", {
                        dangerouslySetInnerHTML: {
                            __html: t._highlightResult.description.value
                        }
                    }))))
                };
            class f extends s.Component {
                constructor(e) {
                    super(e);
                    const t = (0, d.re)("q");
                    this.state = {
                        isSearchPage: "search" === window.location.pathname.replace(/\/+$/, "").split("/").pop(),
                        query: t,
                        results: null,
                        page: 0
                    }
                }
                componentDidMount() {
                    const {
                        search: e
                    } = this.props, {
                        query: t,
                        isSearchPage: a
                    } = this.state;
                    t && e(t)
                }
                static getDerivedStateFromProps(e, t) {
                    return g(g({}, t), e)
                }
                renderResults() {
                    const {
                        lite: e,
                        search: t
                    } = this.props, {
                        results: a,
                        query: r,
                        loading: l,
                        page: c
                    } = this.state;
                    return e ? s.createElement("div", {
                        id: "js-search-results-dropdown",
                        className: "header__search-results " + (r && a ? "slideDown" : "slideUp") + " " + (a && 0 === a.nbHits ? "no-results-found" : ""),
                        "aria-live": "polite",
                        "aria-relevant": "additions",
                        "aria-atomic": "false"
                    }, s.createElement("div", {
                        className: "header__search-logo"
                    }, s.createElement("a", {
                        href: "https://www.algolia.com",
                        tabIndex: "0"
                    }, s.createElement("img", {
                        src: "/images/search-by-algolia-white.svg",
                        alt: "Search powered by our good friends at Algolia"
                    }))), s.createElement("ol", null, a.hits.slice(0, 3).map((e => s.createElement(_, {
                        key: (0, n.h)(e),
                        hit: e
                    })))), r && a && a.nbHits > 3 && s.createElement("div", {
                        className: "load-more"
                    }, s.createElement("a", {
                        className: "btn btn--white btn--white--bordered btn--large",
                        href: "/search/?q=" + encodeURIComponent(r)
                    }, "See all search results →"))) : s.createElement("div", null, a.hits.map((e => s.createElement(E, {
                        key: (0, n.h)(e),
                        hit: e
                    }))), !l && r && a && a.page < a.nbPages - 1 && s.createElement("div", {
                        className: "load-more col-12"
                    }, s.createElement("a", {
                        tabIndex: 0,
                        role: "button",
                        className: "load-more__link",
                        onClick: () => t(r, c + 1)
                    }, "Load More Results")))
                }
                render() {
                    const {
                        query: e,
                        results: t,
                        loading: a,
                        isSearchPage: r
                    } = this.state, {
                        lite: l
                    } = this.props;
                    return e ? r && l ? null : s.createElement("div", {
                        className: "row"
                    }, s.createElement("div", {
                        className: "col col-12"
                    }, e && t && 0 === t.nbHits && s.createElement("div", null, s.createElement("div", {
                        className: "header__search-results meow__content meow__content--large"
                    }, s.createElement("h2", {
                        className: "h2 text-shadow"
                    }, "Uh-oh, no results found!"), s.createElement("p", {
                        className: "meow__intro"
                    }, "Unfortunately, there are no results for your query (yet!), but you can subscribe to our lovely", " ", s.createElement("a", {
                        href: "/the-smashing-newsletter/"
                    }, "email newsletter"), " to not miss the next ones.")), s.createElement("div", {
                        className: "meow__illustration--split"
                    }, s.createElement("img", {
                        src: "https://www.smashingmagazine.com/images/smashing-cat/sad-cat-singing.svg",
                        alt: "A responsive sad cat, crying for attention (literally!)."
                    }))), e && t && this.renderResults(), a && s.createElement(h.Z, {
                        inverted: !0
                    }))) : null
                }
            }
            const b = (0, l.$j)((e => g({}, e.search)), (e => ({
                search: (t, a) => e((0, u.yC)(t, a))
            })))(f)
        },
        "../node_modules/react-uid/dist/es2015/uid.js": (e, t, a) => {
            "use strict";
            a.d(t, {
                h: () => r
            });
            var r = function() {
                var e = 1,
                    t = new WeakMap,
                    a = function(r, s) {
                        return "number" == typeof r || "string" == typeof r ? s ? "idx-" + s : "val-" + r : t.has(r) ? "uid" + t.get(r) : (t.set(r, e++), a(r))
                    };
                return a
            }()
        }
    }
]);
//# sourceMappingURL=SearchResults.5beb59409edaa28d93a2.js.map