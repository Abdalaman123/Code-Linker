(self.webpackChunk = self.webpackChunk || []).push([
    ["TOC"], {
        "./js/containers/TOC.js": (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, {
                default: () => d
            });
            var o = n("../node_modules/react/index.js"),
                a = n("../node_modules/lodash/isEmpty.js"),
                r = n.n(a),
                i = n("../node_modules/smooth-scroll/dist/smooth-scroll.polyfills.min.js");
            const s = new(n.n(i)()),
                c = e => parseInt(e.tagName.toLowerCase().replace("h", ""), 10),
                l = e => e.id || e.textContent.toLowerCase().replace(/[^\w0-9-]+/g, "-"),
                u = (e, t) => {
                    const n = [];
                    let o = !1;
                    return e.forEach(((a, i) => {
                        const s = c(a);
                        if (o) return !1;
                        t === s && n.push({
                            text: a.textContent,
                            level: t,
                            children: [],
                            el: a,
                            id: l(a)
                        }), t < s && r()(n[n.length - 1].children) && (n[n.length - 1].children = u(e.slice(i), s)), t > s && (o = !0)
                    })), n
                };
            class d extends o.Component {
                constructor(e) {
                    super(e);
                    const t = [];
                    if ([].forEach.call(document.querySelectorAll(".article__content > h2, .article__content > h3, .internal__content > h2, .internal__content > h3, .c-garfield-the-cat > h2, .c-garfield-the-cat > h3"), (e => {
                            (e => {
                                const t = l(e);
                                e.id = t;
                                const n = document.createElement("a");
                                n.href = "#" + t, n.className = "heading-hash";
                                const o = document.createElement("img");
                                o.src = "/images/link.svg", o.setAttribute("alt", "Link"), n.appendChild(o), e.appendChild(document.createTextNode(" ")), e.appendChild(n), n.addEventListener("click", (() => {
                                    window.location.hash = t
                                }))
                            })(e), t.push(e)
                        })), r()(t)) {
                        const e = document.querySelector(".article__toc");
                        e && e.classList.add("hidden")
                    }
                    const n = r()(t) ? [] : u(t, c(t[0]));
                    this.state = {
                        page: 0,
                        totalPages: Math.ceil(n.length / 6),
                        articleHeaders: t,
                        hMap: n
                    }
                }
                incPage(e) {
                    let {
                        page: t
                    } = this.state;
                    const {
                        totalPages: n
                    } = this.state;
                    t += e, t < 0 && (t = 0), t > n - 1 && (t = n - 1), this.setState({
                        page: t
                    })
                }
                renderHMap(e, t) {
                    const {
                        page: n
                    } = this.state, a = 6 * n, i = a + 6 - 1;
                    return o.createElement("ol", {
                        className: t ? "article__toc__list" : ""
                    }, e.map(((e, n) => {
                        let c;
                        return n === a && (c = {
                            counterReset: "listCounter " + a
                        }), o.createElement("li", {
                            className: t && n >= a && n <= i ? "" : "hidden",
                            style: c
                        }, o.createElement("a", {
                            href: "#" + e.id,
                            onClick: t => !t.preventDefault() && (e => {
                                s.animateScroll(e.el, !1, {
                                    after: () => {
                                        window.location.hash = e.id
                                    }
                                })
                            })(e)
                        }, o.createElement("span", {
                            className: "sr-only"
                        }, "Jump to "), e.text), !r()(e.children) && this.renderHMap(e.children))
                    })))
                }
                render() {
                    const {
                        page: e,
                        articleHeaders: t,
                        hMap: n,
                        totalPages: a
                    } = this.state;
                    return r()(t) ? null : o.createElement("div", null, this.renderHMap(n, 1), t.length > 6 && o.createElement("div", {
                        className: "tablesaw-enhanced"
                    }, o.createElement("div", {
                        className: "tablesaw-bar tablesaw-mode-swipe"
                    }, o.createElement("div", {
                        className: "tablesaw-advance"
                    }, o.createElement("a", {
                        href: "#",
                        onClick: e => !e.preventDefault() && this.incPage(-1),
                        className: "btn tablesaw-nav-btn tablesaw-btn btn-micro left" + (0 === e ? " disabled" : ""),
                        title: "Previous column"
                    }), o.createElement("a", {
                        href: "#",
                        onClick: e => !e.preventDefault() && this.incPage(1),
                        className: "btn tablesaw-nav-btn tablesaw-btn btn-micro right" + (e === a - 1 ? " disabled" : ""),
                        title: "Next column"
                    })))))
                }
            }
        },
        "../node_modules/smooth-scroll/dist/smooth-scroll.polyfills.min.js": function(e, t, n) {
            var o, a;
            window.Element && !Element.prototype.closest && (Element.prototype.closest = function(e) {
                    var t, n = (this.document || this.ownerDocument).querySelectorAll(e),
                        o = this;
                    do {
                        for (t = n.length; --t >= 0 && n.item(t) !== o;);
                    } while (t < 0 && (o = o.parentElement));
                    return o
                }),
                function() {
                    function e(e, t) {
                        t = t || {
                            bubbles: !1,
                            cancelable: !1,
                            detail: void 0
                        };
                        var n = document.createEvent("CustomEvent");
                        return n.initCustomEvent(e, t.bubbles, t.cancelable, t.detail), n
                    }
                    if ("function" == typeof window.CustomEvent) return !1;
                    e.prototype = window.Event.prototype, window.CustomEvent = e
                }(),
                function() {
                    for (var e = 0, t = ["ms", "moz", "webkit", "o"], n = 0; n < t.length && !window.requestAnimationFrame; ++n) window.requestAnimationFrame = window[t[n] + "RequestAnimationFrame"], window.cancelAnimationFrame = window[t[n] + "CancelAnimationFrame"] || window[t[n] + "CancelRequestAnimationFrame"];
                    window.requestAnimationFrame || (window.requestAnimationFrame = function(t, n) {
                        var o = (new Date).getTime(),
                            a = Math.max(0, 16 - (o - e)),
                            r = window.setTimeout((function() {
                                t(o + a)
                            }), a);
                        return e = o + a, r
                    }), window.cancelAnimationFrame || (window.cancelAnimationFrame = function(e) {
                        clearTimeout(e)
                    })
                }(), a = void 0 !== n.g ? n.g : "undefined" != typeof window ? window : this, void 0 === (o = function() {
                    return function(e) {
                        "use strict";
                        var t = {
                                ignore: "[data-scroll-ignore]",
                                header: null,
                                topOnEmptyHash: !0,
                                speed: 500,
                                clip: !0,
                                offset: 0,
                                easing: "easeInOutCubic",
                                customEasing: null,
                                updateURL: !0,
                                popstate: !0,
                                emitEvents: !0
                            },
                            n = function() {
                                return "querySelector" in document && "addEventListener" in e && "requestAnimationFrame" in e && "closest" in e.Element.prototype
                            },
                            o = function() {
                                for (var e = {}, t = 0; t < arguments.length; t++) ! function(t) {
                                    for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
                                }(arguments[t]);
                                return e
                            },
                            a = function(t) {
                                return !(!("matchMedia" in e) || !e.matchMedia("(prefers-reduced-motion)").matches)
                            },
                            r = function(t) {
                                return parseInt(e.getComputedStyle(t).height, 10)
                            },
                            i = function(e) {
                                var t;
                                try {
                                    t = decodeURIComponent(e)
                                } catch (n) {
                                    t = e
                                }
                                return t
                            },
                            s = function(e) {
                                "#" === e.charAt(0) && (e = e.substr(1));
                                for (var t, n = String(e), o = n.length, a = -1, r = "", i = n.charCodeAt(0); ++a < o;) {
                                    if (0 === (t = n.charCodeAt(a))) throw new InvalidCharacterError("Invalid character: the input contains U+0000.");
                                    r += t >= 1 && t <= 31 || 127 == t || 0 === a && t >= 48 && t <= 57 || 1 === a && t >= 48 && t <= 57 && 45 === i ? "\\" + t.toString(16) + " " : t >= 128 || 45 === t || 95 === t || t >= 48 && t <= 57 || t >= 65 && t <= 90 || t >= 97 && t <= 122 ? n.charAt(a) : "\\" + n.charAt(a)
                                }
                                var s;
                                try {
                                    s = decodeURIComponent("#" + r)
                                } catch (e) {
                                    s = "#" + r
                                }
                                return s
                            },
                            c = function(e, t) {
                                var n;
                                return "easeInQuad" === e.easing && (n = t * t), "easeOutQuad" === e.easing && (n = t * (2 - t)), "easeInOutQuad" === e.easing && (n = t < .5 ? 2 * t * t : (4 - 2 * t) * t - 1), "easeInCubic" === e.easing && (n = t * t * t), "easeOutCubic" === e.easing && (n = --t * t * t + 1), "easeInOutCubic" === e.easing && (n = t < .5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1), "easeInQuart" === e.easing && (n = t * t * t * t), "easeOutQuart" === e.easing && (n = 1 - --t * t * t * t), "easeInOutQuart" === e.easing && (n = t < .5 ? 8 * t * t * t * t : 1 - 8 * --t * t * t * t), "easeInQuint" === e.easing && (n = t * t * t * t * t), "easeOutQuint" === e.easing && (n = 1 + --t * t * t * t * t), "easeInOutQuint" === e.easing && (n = t < .5 ? 16 * t * t * t * t * t : 1 + 16 * --t * t * t * t * t), e.customEasing && (n = e.customEasing(t)), n || t
                            },
                            l = function() {
                                return Math.max(document.body.scrollHeight, document.documentElement.scrollHeight, document.body.offsetHeight, document.documentElement.offsetHeight, document.body.clientHeight, document.documentElement.clientHeight)
                            },
                            u = function(t, n, o, a) {
                                var r = 0;
                                if (t.offsetParent)
                                    do {
                                        r += t.offsetTop, t = t.offsetParent
                                    } while (t);
                                return r = Math.max(r - n - o, 0), a && (r = Math.min(r, l() - e.innerHeight)), r
                            },
                            d = function(e) {
                                return e ? r(e) + e.offsetTop : 0
                            },
                            m = function(e, t, n) {
                                t || history.pushState && n.updateURL && history.pushState({
                                    smoothScroll: JSON.stringify(n),
                                    anchor: e.id
                                }, document.title, e === document.documentElement ? "#top" : "#" + e.id)
                            },
                            h = function(t, n, o) {
                                0 === t && document.body.focus(), o || (t.focus(), document.activeElement !== t && (t.setAttribute("tabindex", "-1"), t.focus(), t.style.outline = "none"), e.scrollTo(0, n))
                            },
                            f = function(t, n, o, a) {
                                if (n.emitEvents && "function" == typeof e.CustomEvent) {
                                    var r = new CustomEvent(t, {
                                        bubbles: !0,
                                        detail: {
                                            anchor: o,
                                            toggle: a
                                        }
                                    });
                                    document.dispatchEvent(r)
                                }
                            };
                        return function(r, p) {
                            var g, w, v, E, b, y, C = {
                                    cancelScroll: function(e) {
                                        cancelAnimationFrame(y), y = null, e || f("scrollCancel", g)
                                    },
                                    animateScroll: function(n, a, r) {
                                        var i = o(g || t, r || {}),
                                            s = "[object Number]" === Object.prototype.toString.call(n),
                                            p = s || !n.tagName ? null : n;
                                        if (s || p) {
                                            var w = e.pageYOffset;
                                            i.header && !v && (v = document.querySelector(i.header)), E || (E = d(v));
                                            var b, S, A, O = s ? n : u(p, E, parseInt("function" == typeof i.offset ? i.offset(n, a) : i.offset, 10), i.clip),
                                                q = O - w,
                                                I = l(),
                                                _ = 0,
                                                L = function(t, o) {
                                                    var r = e.pageYOffset;
                                                    if (t == o || r == o || (w < o && e.innerHeight + r) >= I) return C.cancelScroll(!0), h(n, o, s), f("scrollStop", i, n, a), b = null, y = null, !0
                                                },
                                                N = function(t) {
                                                    b || (b = t), S = (_ += t - b) / parseInt(i.speed, 10), A = w + q * c(i, S = S > 1 ? 1 : S), e.scrollTo(0, Math.floor(A)), L(A, O) || (y = e.requestAnimationFrame(N), b = t)
                                                };
                                            0 === e.pageYOffset && e.scrollTo(0, 0), m(n, s, i), f("scrollStart", i, n, a), C.cancelScroll(!0), e.requestAnimationFrame(N)
                                        }
                                    }
                                },
                                S = function(t) {
                                    if (!a() && 0 === t.button && !t.metaKey && !t.ctrlKey && "closest" in t.target && (w = t.target.closest(r)) && "a" === w.tagName.toLowerCase() && !t.target.closest(g.ignore) && w.hostname === e.location.hostname && w.pathname === e.location.pathname && /#/.test(w.href)) {
                                        var n = s(i(w.hash)),
                                            o = g.topOnEmptyHash && "#" === n ? document.documentElement : document.querySelector(n);
                                        (o = o || "#top" !== n ? o : document.documentElement) && (t.preventDefault(), C.animateScroll(o, w))
                                    }
                                },
                                A = function(e) {
                                    if (null !== history.state && history.state.smoothScroll && history.state.smoothScroll === JSON.stringify(g) && history.state.anchor) {
                                        var t = document.querySelector(s(i(history.state.anchor)));
                                        t && C.animateScroll(t, null, {
                                            updateURL: !1
                                        })
                                    }
                                },
                                O = function(e) {
                                    b || (b = setTimeout((function() {
                                        b = null, E = d(v)
                                    }), 66))
                                };
                            return C.destroy = function() {
                                g && (document.removeEventListener("click", S, !1), e.removeEventListener("resize", O, !1), e.removeEventListener("popstate", A, !1), C.cancelScroll(), g = null, w = null, v = null, E = null, b = null, y = null)
                            }, C.init = function(a) {
                                if (!n()) throw "Smooth Scroll: This browser does not support the required JavaScript methods and browser APIs.";
                                C.destroy(), g = o(t, a || {}), v = g.header ? document.querySelector(g.header) : null, E = d(v), document.addEventListener("click", S, !1), v && e.addEventListener("resize", O, !1), g.updateURL && g.popstate && e.addEventListener("popstate", A, !1)
                            }, C.init(p), C
                        }
                    }(a)
                }.apply(t, [])) || (e.exports = o)
        }
    }
]);
//# sourceMappingURL=TOC.fb36f77d144b29d92b93.js.map