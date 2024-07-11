(self.webpackChunk = self.webpackChunk || []).push([
    ["PostLoad"], {
        "./js/handlers/PostLoad.js": (e, t, r) => {
            "use strict";
            r.r(t), r.d(t, {
                default: () => w
            });
            var n = r("../node_modules/react/index.js"),
                a = r("../node_modules/react-redux/es/index.js"),
                s = r("../node_modules/lodash/isEmpty.js"),
                o = r.n(s),
                l = r("../node_modules/lodash/isArray.js"),
                i = r.n(l),
                c = r("../node_modules/lodash/sample.js"),
                d = r.n(c),
                u = r("../node_modules/lodash/get.js"),
                m = r.n(u),
                p = r("../node_modules/lodash/shuffle.js"),
                h = r.n(p),
                f = r("./js/constants/index.js"),
                g = r("./js/actions/index.js"),
                y = r("./js/selectors/index.js"),
                b = r("./js/utils/index.js"),
                A = r("./js/utils/loadScript.js");
            const v = () => {
                    Array.from(document.querySelectorAll(".tablesaw")).forEach((e => {
                        e.querySelector("tr");
                        const t = Array.from(e.querySelectorAll("th")).map((e => e.getAttribute("data-label") || e.innerHTML));
                        Array.from(e.querySelectorAll("td")).forEach(((e, r) => {
                            const n = t[r % t.length];
                            e.setAttribute("data-label", n ? "" + n : "")
                        }))
                    }))
                },
                j = (e = [".partners", ".advertisement", ".js-ads", ".col--article__grid--ad", ".advertisement-container", ".sponsor__homepage", ".article--grid__sponsors"]) => e.forEach((e => {
                    [].forEach.call(document.querySelectorAll(e), (e => !e.classList.contains("partners__native") && !e.classList.contains("partners__video") && e.classList.add("hidden")))
                })),
                _ = (e, t) => {
                    let r = 0;
                    e = (e => [...e, {
                        html: '\n      <a href="/contact/" class="partners__native--smashing">\n        <picture>\n          <source srcset="/images/banners/smashing-friskies-300x250.png" media="(max-width: 600px)">\n          <img\n            srcset="/images/banners/smashing-friskies-' + (1 === e.length ? "900x200" : "300x250") + '.svg"\n            alt="Advertise with Smashing Magazine"\n            loading="lazy"\n            decoding="async"\n            fetchpriority="low"\n            ' + (1 === e.length ? 'width="850"' : 'width="325"') + '"\n          />\n        </picture>\n      </a>\n    '
                    }])(h()(e)), (() => {
                        const e = [".partners-leaderboard", ".partners__lead"],
                            t = document.querySelector(".article__content .c-garfield-the-cat");
                        if (t) {
                            const r = t.querySelectorAll(".article__content .c-garfield-the-cat > p");
                            e.forEach((e => {
                                const n = document.querySelectorAll(e),
                                    a = t.querySelectorAll(e + "-place");
                                [].forEach.call(n, ((e, n) => {
                                    const s = m()(a, n);
                                    if (s) t.insertBefore(e, s), s.remove();
                                    else {
                                        let a = !1;
                                        [].forEach.call(r, ((r, s) => {
                                            !a && s > 15 + 10 * n && (t.insertBefore(e, r), a = !0)
                                        })), a || e.remove()
                                    }
                                }))
                            }))
                        }
                    })(), (e => {
                        const t = document.createElement("style");
                        t.type = "text/css", e.forEach((e => {
                            if (!e.backgroundColor || !e.textColor) return !1;
                            const r = "linear-gradient(-30deg, " + e.backgroundColor + "E5, " + e.backgroundColor + "E5 45%, " + e.backgroundColor + " 45%) #fff";
                            t.innerHTML += "\n      .partners-" + e.external_id + " {\n        background: " + (e.background || r) + ";\n      }\n\n      .partners-" + e.external_id + " .partners--title,\n      .partners-" + e.external_id + " .partners--text {\n        color: " + e.textColor + " !important;\n      }\n\n      .partners-" + e.external_id + " .partners--title:hover,\n      .partners-" + e.external_id + " .partners--text:hover {\n        color: " + e.textColorHover + " !important;\n      }\n\n      .partners-" + e.external_id + " .partners--cta {\n        color: " + e.ctaTextColor + " !important;\n        background-color: " + e.ctaBackgroundColor + " !important;\n        text-shadow: none !important;\n      }\n\n      .partners-" + e.external_id + " .partners--cta:hover {\n        color: " + e.ctaTextColorHover + " !important;\n        background-color: " + e.ctaBackgroundHoverColor + " !important;\n      }\n    "
                        })), document.body.appendChild(t)
                    })(e), [].forEach.call(document.querySelectorAll(".partners"), (n => {
                        if (n.getAttribute("data-rendered")) return !1;
                        const a = n.getAttribute("data-amount") ? 1 * n.getAttribute("data-amount") : f.Z.ADS_PER_AREA,
                            s = e.slice(r, r + a);
                        if (r += a, !s.length) return !1;
                        let o = "<ul>";
                        s.forEach((e => {
                            if ((e = (e => {
                                    const t = ["link", "image"].filter((t => i()(e[t])))[0] || "link",
                                        r = d()((i()(e[t]) ? e[t] : [e[t]]).map(((e, t) => t)));
                                    return Object.keys(e).forEach((t => {
                                        e[t] = i()(e[t]) ? e[t] : [e[t]], e[t] = e[t][r] || d()(e[t])
                                    })), e
                                })(e)).html) return o += e.html, !0;
                            const r = '\n        <img\n          src="' + e.image + '"\n          alt="' + (e.alt || e.title) + '"\n          ' + (parseInt(e.width) ? 'width="' + e.width + '"' : "") + "\n          " + (parseInt(e.height) ? 'height="' + e.height + '"' : "") + "\n        />\n      ";
                            o += '\n        <li class="partners-' + e.external_id + " " + (e.className || "") + '">\n          <a href="' + e.link + '" data-event-category="ads" data-event-action="click" data-event-label="' + e.link + '">\n            <div class="partners--image-wrapper" data-title="' + e.title + '">\n              ' + (e.image_avif ? '<picture>\n                  <source type="image/avif" srcset="' + e.image_avif + '" />\n                  ' + r + "\n                </picture>" : r) + '\n            </div>\n            <div class="partners--content-wrapper">\n              <div class="partners--title">' + e.company + '</div>\n              <div class="partners--text" data-title="' + e.title + '">' + e.description + '</div>\n            </div>\n            <span class="partners--cta">' + e.callToAction + "</span>\n          </a>\n          " + ((e, t, r) => {
                                let n = "";
                                return e && e.split("||").forEach((e => {
                                    n += '<img class="pixel" src="' + e.replace("[timestamp]", t || (new Date).getTime() / 1e3).replace("${GDPR}", r ? 2 : 1) + '" style="display:none;" height="0" width="0" />'
                                })), n
                            })(e.pixel, e.timestamp, t) + "\n        </li>\n      "
                        })), o += "</ul>", n.innerHTML = o, n.classList.remove("hidden"), n.setAttribute("data-rendered", "true")
                    })), [].forEach.call(document.querySelectorAll(".partners a"), (e => e.addEventListener("click", (t => !t.preventDefault() && window.location.assign(e.getAttribute("href")))))), ["#sponsors-article-end"].map((e => document.querySelectorAll(e))).forEach((e => Array.from(e).forEach((e => !e.hasChildNodes() && e.remove())))), document.querySelector("#sponsors-article-end") || document.querySelector("#promo-article-end") && document.querySelector("#promo-article-end").classList.remove("hidden")
                };
            class E extends n.Component {
                constructor(...e) {
                    super(...e), this.state = {
                        initedAds: !1
                    }, this.render = () => null
                }
                componentDidMount() {
                    const {
                        fetchAds: e,
                        setAdBlocked: t
                    } = this.props;
                    document.querySelectorAll(".partners").length && e(), (e => {
                        const t = document.createElement("div");
                        t.innerHTML = "&nbsp;", t.className = "adsbox", document.body.appendChild(t), window.setTimeout((() => {
                            0 === t.offsetHeight && e && e(!0), t.remove()
                        }), 100)
                    })((() => {
                        [].forEach.call(document.querySelectorAll(".noads"), (e => e.classList.remove("hidden"))), t()
                    })), PAGE_TYPE && "articles" === PAGE_TYPE && Array.from(document.querySelectorAll("h2,h3,h4,h5")).forEach((e => {
                        e.getAttribute("id") && (e.innerHTML = e.innerHTML + '&nbsp;<a class="anchor" href="#' + e.getAttribute("id") + '">#</a>')
                    })), (0, b.t7)(), Array.from(document.querySelectorAll(".codepen")).length && (0, A.Z)("/js/codepen.js"), Array.from(document.querySelectorAll('[class^="language-"]')).length && (0, A.Z)("/js/prism.js"), Array.from(document.querySelectorAll("lite-youtube")).length && (0, A.Z)("/js/lite-youtube.js"), Array.from(document.querySelectorAll("lite-vimeo")).length && (0, A.Z)("/js/lite-vimeo.js"), v()
                }
                static getDerivedStateFromProps(e, t) {
                    const {
                        articleAds: r,
                        sidebarAds: n,
                        loaded: a,
                        hide: s,
                        doTracking: l
                    } = e;
                    let {
                        initedAds: i
                    } = t;
                    if (s) j(), localStorage.removeItem("no_sw");
                    else if (a) return i || (((e, t) => {
                        if (!t) return !1;
                        const r = document.querySelectorAll(".partners.partners__native .dot");
                        Array.from(r).forEach((e => {
                            if (e.src) return !1;
                            e.src = e.getAttribute("data-dot").replace("[timestamp]", (new Date).getTime() / 1e3), e.removeAttribute("data-dot")
                        }))
                    })(0, l), _(r, l), i = !0), a && o()(r) && j(), {
                        initedAds: i
                    };
                    return t
                }
            }
            const w = (0, a.$j)((e => ({
                ads: m()(e, "ad.items") || [],
                articleAds: (0, y.yx)(e),
                sidebarAds: (0, y.Nq)(e),
                loaded: m()(e, "ad.loaded"),
                blocked: m()(e, "ad.blocked"),
                hide: m()(e, "ad.hide"),
                doTracking: m()(e, "privacy.accepted")
            })), (e => ({
                setAdBlocked: () => e((0, g.PL)()),
                fetchAds: () => e((0, g.Tt)())
            })))(E)
        },
        "./js/selectors/index.js": (e, t, r) => {
            "use strict";
            r.d(t, {
                j: () => b,
                Yy: () => A,
                hv: () => v,
                NW: () => j,
                oU: () => w,
                AX: () => L,
                RH: () => q,
                u6: () => C,
                bY: () => T,
                Mc: () => O,
                nj: () => H,
                zh: () => N,
                GG: () => D,
                yx: () => B,
                Nq: () => G
            });
            var n = r("../node_modules/@babel/runtime/helpers/esm/defineProperty.js"),
                a = r("../node_modules/reselect/es/index.js"),
                s = r("../node_modules/lodash/get.js"),
                o = r.n(s),
                l = r("../node_modules/lodash/sample.js"),
                i = r.n(l),
                c = r("../node_modules/lodash/intersection.js"),
                d = r.n(c),
                u = r("../node_modules/lodash/isEmpty.js"),
                m = r.n(u),
                p = r("./js/helpers/index.js");

            function h(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), r.push.apply(r, n)
                }
                return r
            }

            function f(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? h(Object(r), !0).forEach((function(t) {
                        (0, n.Z)(e, t, r[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : h(Object(r)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    }))
                }
                return e
            }
            const g = e => o()(e, "market.market") ? o()(e, "market.market").toLowerCase() : null,
                y = e => (o()(e, "panels.items") || []).map((e => (e.market = e.market ? e.market.toLowerCase() : null, e))),
                b = e => o()(e, "cart.currency"),
                A = e => (0, a.P1)((e => o()(e, "products.items") || []), b, ((t, r) => {
                    const n = ((e, t) => (t || []).find((t => t.sku === e)))(e, t);
                    return console.log(e, n), o()(n, "bundlePrices." + r.toLowerCase() + ".price") ? o()(n, "bundlePrices." + r.toLowerCase()) : o()(n, "prices." + r.toLowerCase())
                })),
                v = ({
                    id: e,
                    categories: t
                }) => (0, a.P1)(g, y, ((r, n) => ((e, t) => (t || []).find((t => t.id === e)))(e, n) || ((e, t) => i()(t.filter((t => !m()(d()(t.categories, e))))) || null)(t.split(","), n) || i()(((e, t) => {
                    const r = t.filter((t => t.market === e));
                    return r.length ? r : t
                })(r, n)) || null)),
                j = e => (0, a.P1)(_("orders"), (({
                    items: t
                }) => (t || []).find((t => t.id === e)))),
                _ = (e = "cart") => t => o()(t, e),
                E = e => o()(e, "products.items") || [],
                w = (e = "cart") => (0, a.P1)(_(e), E, ((e, t) => f(f({}, e), {}, {
                    items: (o()(e, "items") || []).map((e => f(f({}, e), {}, {
                        product: f(f({}, t.find((t => t.id === e.productId))), e.product)
                    })))
                }))),
                x = e => o()(e, "auth.user"),
                k = e => o()(e, "settings"),
                S = (0, a.P1)(x, (e => o()(e, "user_metadata") || {})),
                P = (0, a.P1)(x, (e => o()(e, "app_metadata") || {})),
                L = (0, a.P1)(S, (e => o()(e, "firstname"))),
                q = (0, a.P1)(S, (e => o()(e, "lastname"))),
                C = (0, a.P1)(S, k, ((e, t) => o()(e, "firstname") ? o()(e, "firstname") + " " + o()(e, "lastname") : o()(t, "name"))),
                T = (0, a.P1)(S, k, ((e, t) => o()(e, "twitter") || o()(t, "twitter"))),
                O = (0, a.P1)(x, (e => o()(e, "plan"))),
                H = (0, a.P1)(P, (e => o()(e, "subscription.type"))),
                N = (e, t) => (0, p.jN)(o()(e, t + ".error")),
                D = (0, a.P1)(S, (e => o()(e, "shippingAddress.country") || "")),
                M = ((0, a.P1)(x, (e => o()(e, "token.access_token"))), e => o()(e, "ad.items") || []),
                B = (0, a.P1)(M, (e => e.filter((e => e.active && "sidebar" !== e.placement)).filter((e => !(!(0, p.GH)() || "homepage" !== e.placement) || !(0, p.GH)() && "homepage" !== e.placement)))),
                G = (0, a.P1)(M, (e => e.filter((e => e.active && "sidebar" === e.placement))))
        },
        "./js/utils/index.js": (e, t, r) => {
            "use strict";
            r.d(t, {
                $E: () => o,
                As: () => l,
                t7: () => c
            });
            var n = r("../node_modules/lodash/throttle.js"),
                a = r.n(n),
                s = r("./js/constants/index.js");

            function o(e) {
                const t = document,
                    r = t.querySelector('meta[name="viewport"]'),
                    {
                        content: n
                    } = r,
                    a = ",maximum-scale=",
                    s = /,*maximum-scale=\d*\.*\d*/;

                function o(e) {
                    r.content = n + ("blur" === e.type ? n.match(s, "") ? "" : a + 10 : a + 1)
                }
                e.addEventListener && t.querySelector && (e.addEventListener("focus", o, !0), e.addEventListener("blur", o, !1))
            }

            function l(e, t) {
                const r = t.charAt(0),
                    n = "classList" in document.documentElement;
                let a, s;
                for ("[" === r && (a = (t = t.substr(1, t.length - 2)).split("="), a.length > 1 && (s = !0, a[1] = a[1].replace(/"/g, "").replace(/'/g, ""))); e && e !== document && 1 === e.nodeType; e = e.parentNode) {
                    if ("." === r)
                        if (n) {
                            if (e.classList.contains(t.substr(1))) return e
                        } else if (new RegExp("(^|\\s)" + t.substr(1) + "(\\s|$)").test(e.className)) return e;
                    if ("#" === r && e.id === t.substr(1)) return e;
                    if ("[" === r && e.hasAttribute(a[0])) {
                        if (!s) return e;
                        if (e.getAttribute(a[0]) === a[1]) return e
                    }
                    if (e.tagName.toLowerCase() === t) return e
                }
                return null
            }
            let i = !1;
            try {
                const e = Object.defineProperty({}, "passive", {
                    get() {
                        i = !0
                    }
                });
                window.addEventListener("test", null, e)
            } catch (e) {}

            function c() {
                [].forEach.call(document.querySelectorAll("iframe[data-src]"), (e => {
                    e.src = e.getAttribute("data-src")
                }));
                const e = document.querySelectorAll("img[data-src], div[data-src]"),
                    t = () => {
                        e.length && [].forEach.call(e, (e => {
                            if (function(e, t) {
                                    t = t || 1;
                                    const r = e.getBoundingClientRect(),
                                        n = window.innerHeight || document.documentElement.clientHeight,
                                        a = window.innerWidth || document.documentElement.clientWidth,
                                        s = r.top - t <= n && r.top + r.height >= 0,
                                        o = r.left - t <= a && r.left + r.width >= 0;
                                    return s && o
                                }(e, 800) && !e.getAttribute("data-loaded")) {
                                const t = e.getAttribute("data-src"),
                                    r = e.getAttribute("data-size"),
                                    n = e.getAttribute("data-alt") || e.getAttribute("alt"),
                                    a = document.createElement("img");
                                a.src = t.replace(/(s=)[\d]+/, "$1" + (r || s.Z.GRAVATAR_THUMB_SMALL)), a.alt = n, e.className && (a.className = e.className), a.addEventListener("load", (() => {
                                    e.parentNode && e.parentNode.replaceChild(a, e)
                                })), e.setAttribute("data-loaded", "true")
                            }
                        }))
                    };
                var r;
                e.length && (t(), r = t, window.addEventListener("scroll", a()(r, 100), !!i && {
                    passive: !0
                }))
            }
        },
        "./js/utils/loadScript.js": (e, t, r) => {
            "use strict";
            r.d(t, {
                Z: () => n
            });
            const n = (e, t) => {
                const r = document.createElement("script");
                r.type = "text/javascript", r.readyState ? r.onreadystatechange = () => {
                    "loaded" !== r.readyState && "complete" !== r.readyState || (r.onreadystatechange = null, t && t())
                } : r.onload = () => {
                    t && t()
                }, r.src = e, document.getElementsByTagName("head")[0].appendChild(r)
            }
        }
    }
]);
//# sourceMappingURL=PostLoad.4d98e0fc61e01886a249.js.map