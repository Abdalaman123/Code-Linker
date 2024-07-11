(() => {
    var t = {
            "../node_modules/in-view/dist/in-view.min.js": function(t) {
                t.exports = function(t) {
                    function e(r) {
                        if (n[r]) return n[r].exports;
                        var i = n[r] = {
                            exports: {},
                            id: r,
                            loaded: !1
                        };
                        return t[r].call(i.exports, i, i.exports, e), i.loaded = !0, i.exports
                    }
                    var n = {};
                    return e.m = t, e.c = n, e.p = "", e(0)
                }([function(t, e, n) {
                    "use strict";

                    function r(t) {
                        return t && t.__esModule ? t : {
                            default: t
                        }
                    }
                    var i = r(n(2));
                    t.exports = i.default
                }, function(t, e) {
                    function n(t) {
                        var e = typeof t;
                        return null != t && ("object" == e || "function" == e)
                    }
                    t.exports = n
                }, function(t, e, n) {
                    "use strict";

                    function r(t) {
                        return t && t.__esModule ? t : {
                            default: t
                        }
                    }
                    Object.defineProperty(e, "__esModule", {
                        value: !0
                    });
                    var i = r(n(9)),
                        o = r(n(3)),
                        u = n(4),
                        s = function() {
                            if ("undefined" != typeof window) {
                                var t = 100,
                                    e = ["scroll", "resize", "load"],
                                    n = {
                                        history: []
                                    },
                                    r = {
                                        offset: {},
                                        threshold: 0,
                                        test: u.inViewport
                                    },
                                    s = (0, i.default)((function() {
                                        n.history.forEach((function(t) {
                                            n[t].check()
                                        }))
                                    }), t);
                                e.forEach((function(t) {
                                    return addEventListener(t, s)
                                })), window.MutationObserver && addEventListener("DOMContentLoaded", (function() {
                                    new MutationObserver(s).observe(document.body, {
                                        attributes: !0,
                                        childList: !0,
                                        subtree: !0
                                    })
                                }));
                                var f = function(t) {
                                    if ("string" == typeof t) {
                                        var e = [].slice.call(document.querySelectorAll(t));
                                        return n.history.indexOf(t) > -1 ? n[t].elements = e : (n[t] = (0, o.default)(e, r), n.history.push(t)), n[t]
                                    }
                                };
                                return f.offset = function(t) {
                                    if (void 0 === t) return r.offset;
                                    var e = function(t) {
                                        return "number" == typeof t
                                    };
                                    return ["top", "right", "bottom", "left"].forEach(e(t) ? function(e) {
                                        return r.offset[e] = t
                                    } : function(n) {
                                        return e(t[n]) ? r.offset[n] = t[n] : null
                                    }), r.offset
                                }, f.threshold = function(t) {
                                    return "number" == typeof t && t >= 0 && t <= 1 ? r.threshold = t : r.threshold
                                }, f.test = function(t) {
                                    return "function" == typeof t ? r.test = t : r.test
                                }, f.is = function(t) {
                                    return r.test(t, r)
                                }, f.offset(0), f
                            }
                        };
                    e.default = s()
                }, function(t, e) {
                    "use strict";

                    function n(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }
                    Object.defineProperty(e, "__esModule", {
                        value: !0
                    });
                    var r = function() {
                            function t(t, e) {
                                for (var n = 0; n < e.length; n++) {
                                    var r = e[n];
                                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                                }
                            }
                            return function(e, n, r) {
                                return n && t(e.prototype, n), r && t(e, r), e
                            }
                        }(),
                        i = function() {
                            function t(e, r) {
                                n(this, t), this.options = r, this.elements = e, this.current = [], this.handlers = {
                                    enter: [],
                                    exit: []
                                }, this.singles = {
                                    enter: [],
                                    exit: []
                                }
                            }
                            return r(t, [{
                                key: "check",
                                value: function() {
                                    var t = this;
                                    return this.elements.forEach((function(e) {
                                        var n = t.options.test(e, t.options),
                                            r = t.current.indexOf(e),
                                            i = r > -1,
                                            o = !n && i;
                                        n && !i && (t.current.push(e), t.emit("enter", e)), o && (t.current.splice(r, 1), t.emit("exit", e))
                                    })), this
                                }
                            }, {
                                key: "on",
                                value: function(t, e) {
                                    return this.handlers[t].push(e), this
                                }
                            }, {
                                key: "once",
                                value: function(t, e) {
                                    return this.singles[t].unshift(e), this
                                }
                            }, {
                                key: "emit",
                                value: function(t, e) {
                                    for (; this.singles[t].length;) this.singles[t].pop()(e);
                                    for (var n = this.handlers[t].length; --n > -1;) this.handlers[t][n](e);
                                    return this
                                }
                            }]), t
                        }();
                    e.default = function(t, e) {
                        return new i(t, e)
                    }
                }, function(t, e) {
                    "use strict";

                    function n(t, e) {
                        var n = t.getBoundingClientRect(),
                            r = n.top,
                            i = n.right,
                            o = n.bottom,
                            u = n.left,
                            s = n.width,
                            f = n.height,
                            c = {
                                t: o,
                                r: window.innerWidth - u,
                                b: window.innerHeight - r,
                                l: i
                            },
                            a = {
                                x: e.threshold * s,
                                y: e.threshold * f
                            };
                        return c.t > e.offset.top + a.y && c.r > e.offset.right + a.x && c.b > e.offset.bottom + a.y && c.l > e.offset.left + a.x
                    }
                    Object.defineProperty(e, "__esModule", {
                        value: !0
                    }), e.inViewport = n
                }, function(t, e) {
                    (function(e) {
                        var n = "object" == typeof e && e && e.Object === Object && e;
                        t.exports = n
                    }).call(e, function() {
                        return this
                    }())
                }, function(t, e, n) {
                    var r = n(5),
                        i = "object" == typeof self && self && self.Object === Object && self,
                        o = r || i || Function("return this")();
                    t.exports = o
                }, function(t, e, n) {
                    function r(t, e, n) {
                        function r(e) {
                            var n = m,
                                r = g;
                            return m = g = void 0, _ = e, O = t.apply(r, n)
                        }

                        function a(t) {
                            return _ = t, x = setTimeout(p, e), E ? r(t) : O
                        }

                        function l(t) {
                            var n = e - (t - j);
                            return P ? c(n, w - (t - _)) : n
                        }

                        function d(t) {
                            var n = t - j;
                            return void 0 === j || n >= e || n < 0 || P && t - _ >= w
                        }

                        function p() {
                            var t = o();
                            return d(t) ? h(t) : void(x = setTimeout(p, l(t)))
                        }

                        function h(t) {
                            return x = void 0, k && m ? r(t) : (m = g = void 0, O)
                        }

                        function v() {
                            void 0 !== x && clearTimeout(x), _ = 0, m = j = g = x = void 0
                        }

                        function b() {
                            return void 0 === x ? O : h(o())
                        }

                        function y() {
                            var t = o(),
                                n = d(t);
                            if (m = arguments, g = this, j = t, n) {
                                if (void 0 === x) return a(j);
                                if (P) return x = setTimeout(p, e), r(j)
                            }
                            return void 0 === x && (x = setTimeout(p, e)), O
                        }
                        var m, g, w, O, x, j, _ = 0,
                            E = !1,
                            P = !1,
                            k = !0;
                        if ("function" != typeof t) throw new TypeError(s);
                        return e = u(e) || 0, i(n) && (E = !!n.leading, w = (P = "maxWait" in n) ? f(u(n.maxWait) || 0, e) : w, k = "trailing" in n ? !!n.trailing : k), y.cancel = v, y.flush = b, y
                    }
                    var i = n(1),
                        o = n(8),
                        u = n(10),
                        s = "Expected a function",
                        f = Math.max,
                        c = Math.min;
                    t.exports = r
                }, function(t, e, n) {
                    var r = n(6),
                        i = function() {
                            return r.Date.now()
                        };
                    t.exports = i
                }, function(t, e, n) {
                    function r(t, e, n) {
                        var r = !0,
                            s = !0;
                        if ("function" != typeof t) throw new TypeError(u);
                        return o(n) && (r = "leading" in n ? !!n.leading : r, s = "trailing" in n ? !!n.trailing : s), i(t, e, {
                            leading: r,
                            maxWait: e,
                            trailing: s
                        })
                    }
                    var i = n(7),
                        o = n(1),
                        u = "Expected a function";
                    t.exports = r
                }, function(t, e) {
                    function n(t) {
                        return t
                    }
                    t.exports = n
                }])
            }
        },
        e = {};

    function n(r) {
        var i = e[r];
        if (void 0 !== i) return i.exports;
        var o = e[r] = {
            exports: {}
        };
        return t[r].call(o.exports, o, o.exports, n), o.exports
    }
    n.n = t => {
        var e = t && t.__esModule ? () => t.default : () => t;
        return n.d(e, {
            a: e
        }), e
    }, n.d = (t, e) => {
        for (var r in e) n.o(e, r) && !n.o(t, r) && Object.defineProperty(t, r, {
            enumerable: !0,
            get: e[r]
        })
    }, n.o = (t, e) => Object.prototype.hasOwnProperty.call(t, e), (() => {
        "use strict";

        function t(t, e, n) {
            return e in t ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[e] = n, t
        }
        var e = n("../node_modules/in-view/dist/in-view.min.js"),
            r = n.n(e);

        function i(t, e) {
            var n = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(t);
                e && (r = r.filter((function(e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                }))), n.push.apply(n, r)
            }
            return n
        }

        function o(e) {
            for (var n = 1; n < arguments.length; n++) {
                var r = null != arguments[n] ? arguments[n] : {};
                n % 2 ? i(Object(r), !0).forEach((function(n) {
                    t(e, n, r[n])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : i(Object(r)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                }))
            }
            return e
        }

        function u() {
            dataLayer.push(arguments)
        }
        window.dataLayer = window.dataLayer || [], u("js", new Date), u("config", "G-CXX395KXNG", {
            anonymize_ip: !0
        }), u("set", "linker", {
            domains: ["smashingmagazine.com", "smashingconf.com"]
        }), u("set", "dimension4", "master"), u("send", "pageview"), [].forEach.call(document.querySelectorAll("[data-event-name]"), (t => {
            const e = t.getAttribute("data-event-name"),
                n = t.getAttribute("data-event-autosend"),
                i = t.getAttribute("id");
            let s = {};
            for (const e of t.attributes) e.name.includes("data-") && (s["" + e.name.replace("data-", "").replace("-", "_")] = e.value);
            e && (n ? u("event", e, o({}, s)) : ("click" === e && t.addEventListener("click", (n => {
                n.preventDefault();
                const r = t.getAttribute("href");
                return u("event", e, o({}, s)), r && window.location.assign(t.getAttribute("href"))
            })), "impression" === e && r()("#" + i).on("enter", (() => {
                u("event", e, o({}, s))
            }))))
        }))
    })()
})();
//# sourceMappingURL=ga.js.map