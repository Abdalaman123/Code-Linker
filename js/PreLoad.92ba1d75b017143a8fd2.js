(self.webpackChunk = self.webpackChunk || []).push([
    ["PreLoad"], {
        "./js/handlers/PreLoad.js": (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, {
                default: () => j
            });
            var o = n("../node_modules/react/index.js"),
                s = n("../node_modules/react-redux/es/index.js"),
                r = n("../node_modules/smooth-scroll/dist/smooth-scroll.polyfills.min.js"),
                a = n.n(r),
                i = n("../node_modules/lodash/get.js"),
                d = n.n(i),
                u = n("../node_modules/lodash/intersection.js"),
                l = n.n(u),
                c = n("../node_modules/lodash/isEmpty.js"),
                m = n.n(c),
                h = n("./js/utils/floatingLabels.js"),
                f = n("./js/actions/commerce.js"),
                p = n("./js/helpers/index.js"),
                v = n("./js/actions/index.js");
            const g = new(a()),
                b = e => {
                    const t = [];
                    e ? e.plan ? (t.push(e.plan), t.push("subscriber")) : (t.push("free"), t.push("non-subscriber")) : (t.push("anonymous"), t.push("non-subscriber"));
                    const n = document.querySelectorAll("[data-audience]");
                    Array.from(n).forEach((e => {
                        const n = e.getAttribute("data-audience").split(" ");
                        m()(l()(n, t)) ? (e.classList.add("hidden"), e.getAttribute("data-remove") && e.remove()) : e.classList.remove("hidden")
                    })), ["anonymous", "free", "supporter", "smashing", "member", "subscriber", "non-subscriber"].forEach((e => document.body.classList.remove(e))), t.forEach((e => document.body.classList.add(e)))
                };
            class y extends o.Component {
                constructor(e) {
                    super(e), this.render = () => null;
                    const t = window.location.pathname.replace(/^\/|\/$/g, "");
                    document.body.classList.remove("no-js"), document.body.classList.add("enhanced"), document.body.classList.add("js"), t.match("auth") && document.body.classList.add("auth"), t.match("membership") && document.body.classList.add("dashboard"), (0, h.Z)(), (() => {
                        const e = document.querySelectorAll("[data-scroll]");
                        [].forEach.call(e, (e => {
                            e.addEventListener("click", (() => {
                                const t = document.querySelector(e.getAttribute("data-scroll"));
                                t && g.animateScroll(t)
                            }))
                        }))
                    })()
                }
                componentDidMount() {
                    const {
                        fetchProducts: e,
                        loaded: t,
                        user: n,
                        getUser: o,
                        applyCoupon: s
                    } = this.props, r = (0, p.re)("coupon");
                    r && s(r), r && (0, f.x7)(), o(), e(), t && b(n)
                }
                componentDidUpdate() {
                    const {
                        loaded: e,
                        user: t
                    } = this.props;
                    e && b(t)
                }
            }
            const j = (0, s.$j)((e => {
                const {
                    loaded: t,
                    user: n
                } = d()(e, "auth") || {};
                return {
                    loaded: t,
                    user: n
                }
            }), (e => ({
                getUser: () => e((0, v.PR)()),
                fetchProducts: () => e((0, f.t2)()),
                fetchCart: () => e((0, f.x7)()),
                applyCoupon: t => e((0, f.zL)(t))
            })))(y)
        },
        "./js/utils/floatingLabels.js": (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => s
            });
            var o = n("./js/utils/index.js");
            const s = function() {
                const e = document.querySelectorAll(".js-form-field input");
                let t = !1;

                function n() {
                    const e = document.getElementById("auth-modal-wrapper");
                    e && ((0, o.As)(this, ".auth-modal-wrapper") ? (e.classList.add("hover"), t = !0) : e.classList.remove("hover"))
                }

                function s() {
                    const e = document.getElementById("auth-modal-wrapper");
                    e && ((0, o.As)(this, ".auth-modal-wrapper") && (t = !1), t || e.classList.remove("hover"))
                }

                function r() {
                    const e = (0, o.As)(this, ".js-form-field");
                    e.classList.add("float"), e.classList.add("focused")
                }

                function a() {
                    const e = this.value.trim(),
                        t = (0, o.As)(this, ".js-form-field");
                    e.length || (t.classList.remove("float"), t.classList.remove("focused"), t.classList.remove("blurred")), 0 !== e.length && (t.classList.add("float"), t.classList.remove("focused"), t.classList.add("blurred"))
                }
                Array.from(document.querySelectorAll("input, a")).forEach((e => (e.addEventListener("focus", n, !1), e.addEventListener("blur", s, !1), !0))), e && Array.from(e).forEach((e => {
                    e.addEventListener("focus", r, !1), e.addEventListener("blur", a, !1), e.addEventListener("change", a, !1)
                }))
            }
        },
        "./js/utils/index.js": (e, t, n) => {
            "use strict";
            n.d(t, {
                $E: () => a,
                As: () => i,
                t7: () => u
            });
            var o = n("../node_modules/lodash/throttle.js"),
                s = n.n(o),
                r = n("./js/constants/index.js");

            function a(e) {
                const t = document,
                    n = t.querySelector('meta[name="viewport"]'),
                    {
                        content: o
                    } = n,
                    s = ",maximum-scale=",
                    r = /,*maximum-scale=\d*\.*\d*/;

                function a(e) {
                    n.content = o + ("blur" === e.type ? o.match(r, "") ? "" : s + 10 : s + 1)
                }
                e.addEventListener && t.querySelector && (e.addEventListener("focus", a, !0), e.addEventListener("blur", a, !1))
            }

            function i(e, t) {
                const n = t.charAt(0),
                    o = "classList" in document.documentElement;
                let s, r;
                for ("[" === n && (s = (t = t.substr(1, t.length - 2)).split("="), s.length > 1 && (r = !0, s[1] = s[1].replace(/"/g, "").replace(/'/g, ""))); e && e !== document && 1 === e.nodeType; e = e.parentNode) {
                    if ("." === n)
                        if (o) {
                            if (e.classList.contains(t.substr(1))) return e
                        } else if (new RegExp("(^|\\s)" + t.substr(1) + "(\\s|$)").test(e.className)) return e;
                    if ("#" === n && e.id === t.substr(1)) return e;
                    if ("[" === n && e.hasAttribute(s[0])) {
                        if (!r) return e;
                        if (e.getAttribute(s[0]) === s[1]) return e
                    }
                    if (e.tagName.toLowerCase() === t) return e
                }
                return null
            }
            let d = !1;
            try {
                const e = Object.defineProperty({}, "passive", {
                    get() {
                        d = !0
                    }
                });
                window.addEventListener("test", null, e)
            } catch (e) {}

            function u() {
                [].forEach.call(document.querySelectorAll("iframe[data-src]"), (e => {
                    e.src = e.getAttribute("data-src")
                }));
                const e = document.querySelectorAll("img[data-src], div[data-src]"),
                    t = () => {
                        e.length && [].forEach.call(e, (e => {
                            if (function(e, t) {
                                    t = t || 1;
                                    const n = e.getBoundingClientRect(),
                                        o = window.innerHeight || document.documentElement.clientHeight,
                                        s = window.innerWidth || document.documentElement.clientWidth,
                                        r = n.top - t <= o && n.top + n.height >= 0,
                                        a = n.left - t <= s && n.left + n.width >= 0;
                                    return r && a
                                }(e, 800) && !e.getAttribute("data-loaded")) {
                                const t = e.getAttribute("data-src"),
                                    n = e.getAttribute("data-size"),
                                    o = e.getAttribute("data-alt") || e.getAttribute("alt"),
                                    s = document.createElement("img");
                                s.src = t.replace(/(s=)[\d]+/, "$1" + (n || r.Z.GRAVATAR_THUMB_SMALL)), s.alt = o, e.className && (s.className = e.className), s.addEventListener("load", (() => {
                                    e.parentNode && e.parentNode.replaceChild(s, e)
                                })), e.setAttribute("data-loaded", "true")
                            }
                        }))
                    };
                var n;
                e.length && (t(), n = t, window.addEventListener("scroll", s()(n, 100), !!d && {
                    passive: !0
                }))
            }
        },
        "../node_modules/lodash/_baseIntersection.js": (e, t, n) => {
            var o = n("../node_modules/lodash/_SetCache.js"),
                s = n("../node_modules/lodash/_arrayIncludes.js"),
                r = n("../node_modules/lodash/_arrayIncludesWith.js"),
                a = n("../node_modules/lodash/_arrayMap.js"),
                i = n("../node_modules/lodash/_baseUnary.js"),
                d = n("../node_modules/lodash/_cacheHas.js"),
                u = Math.min;
            e.exports = function(e, t, n) {
                for (var l = n ? r : s, c = e[0].length, m = e.length, h = m, f = Array(m), p = 1 / 0, v = []; h--;) {
                    var g = e[h];
                    h && t && (g = a(g, i(t))), p = u(g.length, p), f[h] = !n && (t || c >= 120 && g.length >= 120) ? new o(h && g) : void 0
                }
                g = e[0];
                var b = -1,
                    y = f[0];
                e: for (; ++b < c && v.length < p;) {
                    var j = g[b],
                        w = t ? t(j) : j;
                    if (j = n || 0 !== j ? j : 0, !(y ? d(y, w) : l(v, w, n))) {
                        for (h = m; --h;) {
                            var E = f[h];
                            if (!(E ? d(E, w) : l(e[h], w, n))) continue e
                        }
                        y && y.push(w), v.push(j)
                    }
                }
                return v
            }
        },
        "../node_modules/lodash/_baseTrim.js": (e, t, n) => {
            var o = n("../node_modules/lodash/_trimmedEndIndex.js"),
                s = /^\s+/;
            e.exports = function(e) {
                return e ? e.slice(0, o(e) + 1).replace(s, "") : e
            }
        },
        "../node_modules/lodash/_castArrayLikeObject.js": (e, t, n) => {
            var o = n("../node_modules/lodash/isArrayLikeObject.js");
            e.exports = function(e) {
                return o(e) ? e : []
            }
        },
        "../node_modules/lodash/_trimmedEndIndex.js": e => {
            var t = /\s/;
            e.exports = function(e) {
                for (var n = e.length; n-- && t.test(e.charAt(n)););
                return n
            }
        },
        "../node_modules/lodash/debounce.js": (e, t, n) => {
            var o = n("../node_modules/lodash/isObject.js"),
                s = n("../node_modules/lodash/now.js"),
                r = n("../node_modules/lodash/toNumber.js"),
                a = Math.max,
                i = Math.min;
            e.exports = function(e, t, n) {
                var d, u, l, c, m, h, f = 0,
                    p = !1,
                    v = !1,
                    g = !0;
                if ("function" != typeof e) throw new TypeError("Expected a function");

                function b(t) {
                    var n = d,
                        o = u;
                    return d = u = void 0, f = t, c = e.apply(o, n)
                }

                function y(e) {
                    return f = e, m = setTimeout(w, t), p ? b(e) : c
                }

                function j(e) {
                    var n = e - h;
                    return void 0 === h || n >= t || n < 0 || v && e - f >= l
                }

                function w() {
                    var e = s();
                    if (j(e)) return E(e);
                    m = setTimeout(w, function(e) {
                        var n = t - (e - h);
                        return v ? i(n, l - (e - f)) : n
                    }(e))
                }

                function E(e) {
                    return m = void 0, g && d ? b(e) : (d = u = void 0, c)
                }

                function A() {
                    var e = s(),
                        n = j(e);
                    if (d = arguments, u = this, h = e, n) {
                        if (void 0 === m) return y(h);
                        if (v) return clearTimeout(m), m = setTimeout(w, t), b(h)
                    }
                    return void 0 === m && (m = setTimeout(w, t)), c
                }
                return t = r(t) || 0, o(n) && (p = !!n.leading, l = (v = "maxWait" in n) ? a(r(n.maxWait) || 0, t) : l, g = "trailing" in n ? !!n.trailing : g), A.cancel = function() {
                    void 0 !== m && clearTimeout(m), f = 0, d = h = u = m = void 0
                }, A.flush = function() {
                    return void 0 === m ? c : E(s())
                }, A
            }
        },
        "../node_modules/lodash/intersection.js": (e, t, n) => {
            var o = n("../node_modules/lodash/_arrayMap.js"),
                s = n("../node_modules/lodash/_baseIntersection.js"),
                r = n("../node_modules/lodash/_baseRest.js"),
                a = n("../node_modules/lodash/_castArrayLikeObject.js"),
                i = r((function(e) {
                    var t = o(e, a);
                    return t.length && t[0] === e[0] ? s(t) : []
                }));
            e.exports = i
        },
        "../node_modules/lodash/isArrayLikeObject.js": (e, t, n) => {
            var o = n("../node_modules/lodash/isArrayLike.js"),
                s = n("../node_modules/lodash/isObjectLike.js");
            e.exports = function(e) {
                return s(e) && o(e)
            }
        },
        "../node_modules/lodash/now.js": (e, t, n) => {
            var o = n("../node_modules/lodash/_root.js");
            e.exports = function() {
                return o.Date.now()
            }
        },
        "../node_modules/lodash/throttle.js": (e, t, n) => {
            var o = n("../node_modules/lodash/debounce.js"),
                s = n("../node_modules/lodash/isObject.js");
            e.exports = function(e, t, n) {
                var r = !0,
                    a = !0;
                if ("function" != typeof e) throw new TypeError("Expected a function");
                return s(n) && (r = "leading" in n ? !!n.leading : r, a = "trailing" in n ? !!n.trailing : a), o(e, t, {
                    leading: r,
                    maxWait: t,
                    trailing: a
                })
            }
        },
        "../node_modules/lodash/toNumber.js": (e, t, n) => {
            var o = n("../node_modules/lodash/_baseTrim.js"),
                s = n("../node_modules/lodash/isObject.js"),
                r = n("../node_modules/lodash/isSymbol.js"),
                a = /^[-+]0x[0-9a-f]+$/i,
                i = /^0b[01]+$/i,
                d = /^0o[0-7]+$/i,
                u = parseInt;
            e.exports = function(e) {
                if ("number" == typeof e) return e;
                if (r(e)) return NaN;
                if (s(e)) {
                    var t = "function" == typeof e.valueOf ? e.valueOf() : e;
                    e = s(t) ? t + "" : t
                }
                if ("string" != typeof e) return 0 === e ? e : +e;
                e = o(e);
                var n = i.test(e);
                return n || d.test(e) ? u(e.slice(2), n ? 2 : 8) : a.test(e) ? NaN : +e
            }
        },
        "../node_modules/smooth-scroll/dist/smooth-scroll.polyfills.min.js": function(e, t, n) {
            var o, s;
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
                            s = Math.max(0, 16 - (o - e)),
                            r = window.setTimeout((function() {
                                t(o + s)
                            }), s);
                        return e = o + s, r
                    }), window.cancelAnimationFrame || (window.cancelAnimationFrame = function(e) {
                        clearTimeout(e)
                    })
                }(), s = void 0 !== n.g ? n.g : "undefined" != typeof window ? window : this, void 0 === (o = function() {
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
                            s = function(t) {
                                return !(!("matchMedia" in e) || !e.matchMedia("(prefers-reduced-motion)").matches)
                            },
                            r = function(t) {
                                return parseInt(e.getComputedStyle(t).height, 10)
                            },
                            a = function(e) {
                                var t;
                                try {
                                    t = decodeURIComponent(e)
                                } catch (n) {
                                    t = e
                                }
                                return t
                            },
                            i = function(e) {
                                "#" === e.charAt(0) && (e = e.substr(1));
                                for (var t, n = String(e), o = n.length, s = -1, r = "", a = n.charCodeAt(0); ++s < o;) {
                                    if (0 === (t = n.charCodeAt(s))) throw new InvalidCharacterError("Invalid character: the input contains U+0000.");
                                    r += t >= 1 && t <= 31 || 127 == t || 0 === s && t >= 48 && t <= 57 || 1 === s && t >= 48 && t <= 57 && 45 === a ? "\\" + t.toString(16) + " " : t >= 128 || 45 === t || 95 === t || t >= 48 && t <= 57 || t >= 65 && t <= 90 || t >= 97 && t <= 122 ? n.charAt(s) : "\\" + n.charAt(s)
                                }
                                var i;
                                try {
                                    i = decodeURIComponent("#" + r)
                                } catch (e) {
                                    i = "#" + r
                                }
                                return i
                            },
                            d = function(e, t) {
                                var n;
                                return "easeInQuad" === e.easing && (n = t * t), "easeOutQuad" === e.easing && (n = t * (2 - t)), "easeInOutQuad" === e.easing && (n = t < .5 ? 2 * t * t : (4 - 2 * t) * t - 1), "easeInCubic" === e.easing && (n = t * t * t), "easeOutCubic" === e.easing && (n = --t * t * t + 1), "easeInOutCubic" === e.easing && (n = t < .5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1), "easeInQuart" === e.easing && (n = t * t * t * t), "easeOutQuart" === e.easing && (n = 1 - --t * t * t * t), "easeInOutQuart" === e.easing && (n = t < .5 ? 8 * t * t * t * t : 1 - 8 * --t * t * t * t), "easeInQuint" === e.easing && (n = t * t * t * t * t), "easeOutQuint" === e.easing && (n = 1 + --t * t * t * t * t), "easeInOutQuint" === e.easing && (n = t < .5 ? 16 * t * t * t * t * t : 1 + 16 * --t * t * t * t * t), e.customEasing && (n = e.customEasing(t)), n || t
                            },
                            u = function() {
                                return Math.max(document.body.scrollHeight, document.documentElement.scrollHeight, document.body.offsetHeight, document.documentElement.offsetHeight, document.body.clientHeight, document.documentElement.clientHeight)
                            },
                            l = function(t, n, o, s) {
                                var r = 0;
                                if (t.offsetParent)
                                    do {
                                        r += t.offsetTop, t = t.offsetParent
                                    } while (t);
                                return r = Math.max(r - n - o, 0), s && (r = Math.min(r, u() - e.innerHeight)), r
                            },
                            c = function(e) {
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
                            f = function(t, n, o, s) {
                                if (n.emitEvents && "function" == typeof e.CustomEvent) {
                                    var r = new CustomEvent(t, {
                                        bubbles: !0,
                                        detail: {
                                            anchor: o,
                                            toggle: s
                                        }
                                    });
                                    document.dispatchEvent(r)
                                }
                            };
                        return function(r, p) {
                            var v, g, b, y, j, w, E = {
                                    cancelScroll: function(e) {
                                        cancelAnimationFrame(w), w = null, e || f("scrollCancel", v)
                                    },
                                    animateScroll: function(n, s, r) {
                                        var a = o(v || t, r || {}),
                                            i = "[object Number]" === Object.prototype.toString.call(n),
                                            p = i || !n.tagName ? null : n;
                                        if (i || p) {
                                            var g = e.pageYOffset;
                                            a.header && !b && (b = document.querySelector(a.header)), y || (y = c(b));
                                            var j, A, L, _ = i ? n : l(p, y, parseInt("function" == typeof a.offset ? a.offset(n, s) : a.offset, 10), a.clip),
                                                S = _ - g,
                                                x = u(),
                                                C = 0,
                                                O = function(t, o) {
                                                    var r = e.pageYOffset;
                                                    if (t == o || r == o || (g < o && e.innerHeight + r) >= x) return E.cancelScroll(!0), h(n, o, i), f("scrollStop", a, n, s), j = null, w = null, !0
                                                },
                                                I = function(t) {
                                                    j || (j = t), A = (C += t - j) / parseInt(a.speed, 10), L = g + S * d(a, A = A > 1 ? 1 : A), e.scrollTo(0, Math.floor(L)), O(L, _) || (w = e.requestAnimationFrame(I), j = t)
                                                };
                                            0 === e.pageYOffset && e.scrollTo(0, 0), m(n, i, a), f("scrollStart", a, n, s), E.cancelScroll(!0), e.requestAnimationFrame(I)
                                        }
                                    }
                                },
                                A = function(t) {
                                    if (!s() && 0 === t.button && !t.metaKey && !t.ctrlKey && "closest" in t.target && (g = t.target.closest(r)) && "a" === g.tagName.toLowerCase() && !t.target.closest(v.ignore) && g.hostname === e.location.hostname && g.pathname === e.location.pathname && /#/.test(g.href)) {
                                        var n = i(a(g.hash)),
                                            o = v.topOnEmptyHash && "#" === n ? document.documentElement : document.querySelector(n);
                                        (o = o || "#top" !== n ? o : document.documentElement) && (t.preventDefault(), E.animateScroll(o, g))
                                    }
                                },
                                L = function(e) {
                                    if (null !== history.state && history.state.smoothScroll && history.state.smoothScroll === JSON.stringify(v) && history.state.anchor) {
                                        var t = document.querySelector(i(a(history.state.anchor)));
                                        t && E.animateScroll(t, null, {
                                            updateURL: !1
                                        })
                                    }
                                },
                                _ = function(e) {
                                    j || (j = setTimeout((function() {
                                        j = null, y = c(b)
                                    }), 66))
                                };
                            return E.destroy = function() {
                                v && (document.removeEventListener("click", A, !1), e.removeEventListener("resize", _, !1), e.removeEventListener("popstate", L, !1), E.cancelScroll(), v = null, g = null, b = null, y = null, j = null, w = null)
                            }, E.init = function(s) {
                                if (!n()) throw "Smooth Scroll: This browser does not support the required JavaScript methods and browser APIs.";
                                E.destroy(), v = o(t, s || {}), b = v.header ? document.querySelector(v.header) : null, y = c(b), document.addEventListener("click", A, !1), b && e.addEventListener("resize", _, !1), v.updateURL && v.popstate && e.addEventListener("popstate", L, !1)
                            }, E.init(p), E
                        }
                    }(s)
                }.apply(t, [])) || (e.exports = o)
        }
    }
]);
//# sourceMappingURL=PreLoad.92ba1d75b017143a8fd2.js.map