(self.webpackChunk = self.webpackChunk || []).push([
    ["AddTimeAgo"], {
        "./js/handlers/AddTimeAgo.js": (e, n, t) => {
            "use strict";
            t.r(n), t.d(n, {
                default: () => a
            });
            var r = t("../node_modules/react/index.js"),
                s = t("../node_modules/date-fns/distance_in_words_to_now/index.js"),
                o = t.n(s);

            function a(e) {
                const {
                    element: n
                } = e, t = n.getAttribute("datetime");
                return r.createElement(r.Fragment, null, o()(t), " ago")
            }
        },
        "../node_modules/date-fns/_lib/getTimezoneOffsetInMilliseconds/index.js": e => {
            e.exports = function(e) {
                var n = new Date(e.getTime()),
                    t = n.getTimezoneOffset();
                return n.setSeconds(0, 0), 6e4 * t + n.getTime() % 6e4
            }
        },
        "../node_modules/date-fns/compare_asc/index.js": (e, n, t) => {
            var r = t("../node_modules/date-fns/parse/index.js");
            e.exports = function(e, n) {
                var t = r(e).getTime(),
                    s = r(n).getTime();
                return t < s ? -1 : t > s ? 1 : 0
            }
        },
        "../node_modules/date-fns/compare_desc/index.js": (e, n, t) => {
            var r = t("../node_modules/date-fns/parse/index.js");
            e.exports = function(e, n) {
                var t = r(e).getTime(),
                    s = r(n).getTime();
                return t > s ? -1 : t < s ? 1 : 0
            }
        },
        "../node_modules/date-fns/difference_in_calendar_months/index.js": (e, n, t) => {
            var r = t("../node_modules/date-fns/parse/index.js");
            e.exports = function(e, n) {
                var t = r(e),
                    s = r(n);
                return 12 * (t.getFullYear() - s.getFullYear()) + (t.getMonth() - s.getMonth())
            }
        },
        "../node_modules/date-fns/difference_in_milliseconds/index.js": (e, n, t) => {
            var r = t("../node_modules/date-fns/parse/index.js");
            e.exports = function(e, n) {
                var t = r(e),
                    s = r(n);
                return t.getTime() - s.getTime()
            }
        },
        "../node_modules/date-fns/difference_in_months/index.js": (e, n, t) => {
            var r = t("../node_modules/date-fns/parse/index.js"),
                s = t("../node_modules/date-fns/difference_in_calendar_months/index.js"),
                o = t("../node_modules/date-fns/compare_asc/index.js");
            e.exports = function(e, n) {
                var t = r(e),
                    a = r(n),
                    d = o(t, a),
                    u = Math.abs(s(t, a));
                return t.setMonth(t.getMonth() - d * u), d * (u - (o(t, a) === -d))
            }
        },
        "../node_modules/date-fns/difference_in_seconds/index.js": (e, n, t) => {
            var r = t("../node_modules/date-fns/difference_in_milliseconds/index.js");
            e.exports = function(e, n) {
                var t = r(e, n) / 1e3;
                return t > 0 ? Math.floor(t) : Math.ceil(t)
            }
        },
        "../node_modules/date-fns/distance_in_words/index.js": (e, n, t) => {
            var r = t("../node_modules/date-fns/compare_desc/index.js"),
                s = t("../node_modules/date-fns/parse/index.js"),
                o = t("../node_modules/date-fns/difference_in_seconds/index.js"),
                a = t("../node_modules/date-fns/difference_in_months/index.js"),
                d = t("../node_modules/date-fns/locale/en/index.js"),
                u = 43200;
            e.exports = function(e, n, t) {
                var i = t || {},
                    l = r(e, n),
                    c = i.locale,
                    f = d.distanceInWords.localize;
                c && c.distanceInWords && c.distanceInWords.localize && (f = c.distanceInWords.localize);
                var m, _, x = {
                    addSuffix: Boolean(i.addSuffix),
                    comparison: l
                };
                l > 0 ? (m = s(e), _ = s(n)) : (m = s(n), _ = s(e));
                var h, p = o(_, m),
                    v = _.getTimezoneOffset() - m.getTimezoneOffset(),
                    g = Math.round(p / 60) - v;
                if (g < 2) return i.includeSeconds ? p < 5 ? f("lessThanXSeconds", 5, x) : p < 10 ? f("lessThanXSeconds", 10, x) : p < 20 ? f("lessThanXSeconds", 20, x) : p < 40 ? f("halfAMinute", null, x) : f(p < 60 ? "lessThanXMinutes" : "xMinutes", 1, x) : 0 === g ? f("lessThanXMinutes", 1, x) : f("xMinutes", g, x);
                if (g < 45) return f("xMinutes", g, x);
                if (g < 90) return f("aboutXHours", 1, x);
                if (g < 1440) return f("aboutXHours", Math.round(g / 60), x);
                if (g < 2520) return f("xDays", 1, x);
                if (g < u) return f("xDays", Math.round(g / 1440), x);
                if (g < 86400) return f("aboutXMonths", h = Math.round(g / u), x);
                if ((h = a(_, m)) < 12) return f("xMonths", Math.round(g / u), x);
                var M = h % 12,
                    D = Math.floor(h / 12);
                return M < 3 ? f("aboutXYears", D, x) : M < 9 ? f("overXYears", D, x) : f("almostXYears", D + 1, x)
            }
        },
        "../node_modules/date-fns/distance_in_words_to_now/index.js": (e, n, t) => {
            var r = t("../node_modules/date-fns/distance_in_words/index.js");
            e.exports = function(e, n) {
                return r(Date.now(), e, n)
            }
        },
        "../node_modules/date-fns/is_date/index.js": e => {
            e.exports = function(e) {
                return e instanceof Date
            }
        },
        "../node_modules/date-fns/locale/_lib/build_formatting_tokens_reg_exp/index.js": e => {
            var n = ["M", "MM", "Q", "D", "DD", "DDD", "DDDD", "d", "E", "W", "WW", "YY", "YYYY", "GG", "GGGG", "H", "HH", "h", "hh", "m", "mm", "s", "ss", "S", "SS", "SSS", "Z", "ZZ", "X", "x"];
            e.exports = function(e) {
                var t = [];
                for (var r in e) e.hasOwnProperty(r) && t.push(r);
                var s = n.concat(t).sort().reverse();
                return new RegExp("(\\[[^\\[]*\\])|(\\\\)?(" + s.join("|") + "|.)", "g")
            }
        },
        "../node_modules/date-fns/locale/en/build_distance_in_words_locale/index.js": e => {
            e.exports = function() {
                var e = {
                    lessThanXSeconds: {
                        one: "less than a second",
                        other: "less than {{count}} seconds"
                    },
                    xSeconds: {
                        one: "1 second",
                        other: "{{count}} seconds"
                    },
                    halfAMinute: "half a minute",
                    lessThanXMinutes: {
                        one: "less than a minute",
                        other: "less than {{count}} minutes"
                    },
                    xMinutes: {
                        one: "1 minute",
                        other: "{{count}} minutes"
                    },
                    aboutXHours: {
                        one: "about 1 hour",
                        other: "about {{count}} hours"
                    },
                    xHours: {
                        one: "1 hour",
                        other: "{{count}} hours"
                    },
                    xDays: {
                        one: "1 day",
                        other: "{{count}} days"
                    },
                    aboutXMonths: {
                        one: "about 1 month",
                        other: "about {{count}} months"
                    },
                    xMonths: {
                        one: "1 month",
                        other: "{{count}} months"
                    },
                    aboutXYears: {
                        one: "about 1 year",
                        other: "about {{count}} years"
                    },
                    xYears: {
                        one: "1 year",
                        other: "{{count}} years"
                    },
                    overXYears: {
                        one: "over 1 year",
                        other: "over {{count}} years"
                    },
                    almostXYears: {
                        one: "almost 1 year",
                        other: "almost {{count}} years"
                    }
                };
                return {
                    localize: function(n, t, r) {
                        var s;
                        return r = r || {}, s = "string" == typeof e[n] ? e[n] : 1 === t ? e[n].one : e[n].other.replace("{{count}}", t), r.addSuffix ? r.comparison > 0 ? "in " + s : s + " ago" : s
                    }
                }
            }
        },
        "../node_modules/date-fns/locale/en/build_format_locale/index.js": (e, n, t) => {
            var r = t("../node_modules/date-fns/locale/_lib/build_formatting_tokens_reg_exp/index.js");
            e.exports = function() {
                var e = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                    n = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
                    t = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
                    s = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
                    o = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                    a = ["AM", "PM"],
                    d = ["am", "pm"],
                    u = ["a.m.", "p.m."],
                    i = {
                        MMM: function(n) {
                            return e[n.getMonth()]
                        },
                        MMMM: function(e) {
                            return n[e.getMonth()]
                        },
                        dd: function(e) {
                            return t[e.getDay()]
                        },
                        ddd: function(e) {
                            return s[e.getDay()]
                        },
                        dddd: function(e) {
                            return o[e.getDay()]
                        },
                        A: function(e) {
                            return e.getHours() / 12 >= 1 ? a[1] : a[0]
                        },
                        a: function(e) {
                            return e.getHours() / 12 >= 1 ? d[1] : d[0]
                        },
                        aa: function(e) {
                            return e.getHours() / 12 >= 1 ? u[1] : u[0]
                        }
                    };
                return ["M", "D", "DDD", "d", "Q", "W"].forEach((function(e) {
                    i[e + "o"] = function(n, t) {
                        return function(e) {
                            var n = e % 100;
                            if (n > 20 || n < 10) switch (n % 10) {
                                case 1:
                                    return e + "st";
                                case 2:
                                    return e + "nd";
                                case 3:
                                    return e + "rd"
                            }
                            return e + "th"
                        }(t[e](n))
                    }
                })), {
                    formatters: i,
                    formattingTokensRegExp: r(i)
                }
            }
        },
        "../node_modules/date-fns/locale/en/index.js": (e, n, t) => {
            var r = t("../node_modules/date-fns/locale/en/build_distance_in_words_locale/index.js"),
                s = t("../node_modules/date-fns/locale/en/build_format_locale/index.js");
            e.exports = {
                distanceInWords: r(),
                format: s()
            }
        },
        "../node_modules/date-fns/parse/index.js": (e, n, t) => {
            var r = t("../node_modules/date-fns/_lib/getTimezoneOffsetInMilliseconds/index.js"),
                s = t("../node_modules/date-fns/is_date/index.js"),
                o = 36e5,
                a = 6e4,
                d = /[T ]/,
                u = /:/,
                i = /^(\d{2})$/,
                l = [/^([+-]\d{2})$/, /^([+-]\d{3})$/, /^([+-]\d{4})$/],
                c = /^(\d{4})/,
                f = [/^([+-]\d{4})/, /^([+-]\d{5})/, /^([+-]\d{6})/],
                m = /^-(\d{2})$/,
                _ = /^-?(\d{3})$/,
                x = /^-?(\d{2})-?(\d{2})$/,
                h = /^-?W(\d{2})$/,
                p = /^-?W(\d{2})-?(\d{1})$/,
                v = /^(\d{2}([.,]\d*)?)$/,
                g = /^(\d{2}):?(\d{2}([.,]\d*)?)$/,
                M = /^(\d{2}):?(\d{2}):?(\d{2}([.,]\d*)?)$/,
                D = /([Z+-].*)$/,
                T = /^(Z)$/,
                j = /^([+-])(\d{2})$/,
                y = /^([+-])(\d{2}):?(\d{2})$/;

            function b(e, n, t) {
                n = n || 0, t = t || 0;
                var r = new Date(0);
                r.setUTCFullYear(e, 0, 4);
                var s = 7 * n + t + 1 - (r.getUTCDay() || 7);
                return r.setUTCDate(r.getUTCDate() + s), r
            }
            e.exports = function(e, n) {
                if (s(e)) return new Date(e.getTime());
                if ("string" != typeof e) return new Date(e);
                var t = (n || {}).additionalDigits;
                t = null == t ? 2 : Number(t);
                var S = function(e) {
                        var n, t = {},
                            r = e.split(d);
                        u.test(r[0]) ? (t.date = null, n = r[0]) : (t.date = r[0], n = r[1]);
                        if (n) {
                            var s = D.exec(n);
                            s ? (t.time = n.replace(s[1], ""), t.timezone = s[1]) : t.time = n
                        }
                        return t
                    }(e),
                    w = function(e, n) {
                        var t, r = l[n],
                            s = f[n];
                        if (t = c.exec(e) || s.exec(e)) {
                            var o = t[1];
                            return {
                                year: parseInt(o, 10),
                                restDateString: e.slice(o.length)
                            }
                        }
                        if (t = i.exec(e) || r.exec(e)) {
                            var a = t[1];
                            return {
                                year: 100 * parseInt(a, 10),
                                restDateString: e.slice(a.length)
                            }
                        }
                        return {
                            year: null
                        }
                    }(S.date, t),
                    I = w.year,
                    Y = function(e, n) {
                        if (null === n) return null;
                        var t, r, s;
                        if (0 === e.length) return (r = new Date(0)).setUTCFullYear(n), r;
                        if (t = m.exec(e)) return r = new Date(0), s = parseInt(t[1], 10) - 1, r.setUTCFullYear(n, s), r;
                        if (t = _.exec(e)) {
                            r = new Date(0);
                            var o = parseInt(t[1], 10);
                            return r.setUTCFullYear(n, 0, o), r
                        }
                        if (t = x.exec(e)) {
                            r = new Date(0), s = parseInt(t[1], 10) - 1;
                            var a = parseInt(t[2], 10);
                            return r.setUTCFullYear(n, s, a), r
                        }
                        if (t = h.exec(e)) return b(n, parseInt(t[1], 10) - 1);
                        if (t = p.exec(e)) {
                            return b(n, parseInt(t[1], 10) - 1, parseInt(t[2], 10) - 1)
                        }
                        return null
                    }(w.restDateString, I);
                if (Y) {
                    var X, F = Y.getTime(),
                        $ = 0;
                    if (S.time && ($ = function(e) {
                            var n, t, r;
                            if (n = v.exec(e)) return (t = parseFloat(n[1].replace(",", "."))) % 24 * o;
                            if (n = g.exec(e)) return t = parseInt(n[1], 10), r = parseFloat(n[2].replace(",", ".")), t % 24 * o + r * a;
                            if (n = M.exec(e)) {
                                t = parseInt(n[1], 10), r = parseInt(n[2], 10);
                                var s = parseFloat(n[3].replace(",", "."));
                                return t % 24 * o + r * a + 1e3 * s
                            }
                            return null
                        }(S.time)), S.timezone) X = function(e) {
                        var n, t;
                        if (n = T.exec(e)) return 0;
                        if (n = j.exec(e)) return t = 60 * parseInt(n[2], 10), "+" === n[1] ? -t : t;
                        if (n = y.exec(e)) return t = 60 * parseInt(n[2], 10) + parseInt(n[3], 10), "+" === n[1] ? -t : t;
                        return 0
                    }(S.timezone) * a;
                    else {
                        var W = F + $,
                            A = new Date(W);
                        X = r(A);
                        var z = new Date(W);
                        z.setDate(A.getDate() + 1);
                        var C = r(z) - r(A);
                        C > 0 && (X += C)
                    }
                    return new Date(F + $ + X)
                }
                return new Date(e)
            }
        }
    }
]);
//# sourceMappingURL=AddTimeAgo.c69adde9d6dd3a91f9ad.js.map