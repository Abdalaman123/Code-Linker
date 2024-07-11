(self.webpackChunk = self.webpackChunk || []).push([
    ["JobPostForm"], {
        "./js/containers/JobPostForm.js": (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, {
                default: () => q
            });
            var a = n("../node_modules/@babel/runtime/helpers/esm/defineProperty.js"),
                o = n("../node_modules/react/index.js"),
                r = n("../node_modules/react-redux/es/index.js"),
                l = n("../node_modules/smooth-scroll/dist/smooth-scroll.polyfills.min.js"),
                s = n.n(l),
                i = n("../node_modules/formik/dist/formik.esm.js"),
                c = n("../node_modules/marked/lib/marked.js"),
                m = n.n(c),
                u = n("../node_modules/lodash/get.js"),
                d = n.n(u),
                p = n("./js/schemas/index.js"),
                h = n("./js/forms/Input.js"),
                f = n("../node_modules/@babel/runtime/helpers/esm/extends.js");

            function b(e, t) {
                if (null == e) return {};
                var n, a, o = function(e, t) {
                    if (null == e) return {};
                    var n, a, o = {},
                        r = Object.keys(e);
                    for (a = 0; a < r.length; a++) n = r[a], t.indexOf(n) >= 0 || (o[n] = e[n]);
                    return o
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    for (a = 0; a < r.length; a++) n = r[a], t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
                }
                return o
            }
            var E = n("../node_modules/lodash/isFunction.js"),
                g = n.n(E);
            const v = ["field", "id", "label", "className", "value"],
                _ = e => {
                    let {
                        field: {
                            name: t,
                            value: n,
                            onChange: a,
                            onBlur: r
                        },
                        id: l,
                        label: s,
                        className: i,
                        value: c
                    } = e, m = b(e, v);
                    const u = ["form__field", "form__field--radio"];
                    return i && u.push(i), o.createElement("label", {
                        className: u.join(" ")
                    }, o.createElement("input", (0, f.Z)({
                        name: t,
                        id: l,
                        type: "radio",
                        value: c,
                        checked: c === n,
                        onChange: a,
                        onBlur: r,
                        className: "form__field__input"
                    }, m)), o.createElement("span", {
                        className: "form__field__label"
                    }, g()(s) ? s() : s))
                };

            function y(e) {
                return o.createElement(i.gN, (0, f.Z)({
                    component: _
                }, e))
            }
            var w = n("./js/forms/Checkbox.js"),
                j = n("./js/forms/FormComponent.js"),
                N = n("./js/common/LaddaButton.js"),
                S = n("./js/actions/commerce.js"),
                C = n("./js/helpers/index.js");

            function O(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(e);
                    t && (a = a.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, a)
                }
                return n
            }

            function k(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? O(Object(n), !0).forEach((function(t) {
                        (0, a.Z)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : O(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            const x = new(m().Renderer);
            x.image = (e, t, n) => '<a rel="nofollow" href="' + e + '" target="_blank"><img src="' + e + '" alt="' + (t || n) + '" /></a>', x.link = (e, t, n) => '<a rel="nofollow" href="' + e + '" target="_blank">' + (t || n) + "</a>", m().setOptions({
                sanitize: !0,
                renderer: x
            });
            const A = new(s()),
                F = () => A.animateScroll(document.querySelector("#top")),
                P = (e, t, n, a, r) => o.createElement("span", null, o.createElement("strong", null, o.createElement("span", {
                    className: n
                }, e, " "), (0, C.T4)(t, r), " for 60 days"), o.createElement("br", null), o.createElement("span", {
                    className: "form__field__note"
                }, a));
            class L extends j.Z {
                constructor(...e) {
                    super(...e), this.state = {
                        path: document.location.pathname
                    }, this.onMQChange = e => this.setState({
                        mqMatches: e.matches
                    }), this.handleSubmit = e => {
                        this.props.addJobPostToCart(k(k({}, e), this.state))
                    }
                }
                componentDidMount() {
                    document.body.classList.add("no-overflow");
                    const e = window.matchMedia("(max-width: 1024px)");
                    e.addListener(this.onMQChange), this.onMQChange(e)
                }
                renderError(e, t, n) {
                    return d()(t, e) && d()(n, e) ? o.createElement("span", {
                        id: e + "-error",
                        "aria-live": "assertive",
                        className: "error-msg"
                    }, d()(t, e)) : null
                }
                renderForm(e) {
                    const {
                        loading: t,
                        currency: n
                    } = this.props, {
                        errors: a,
                        touched: r,
                        setFieldValue: l,
                        values: s
                    } = e;
                    return o.createElement(i.l0, null, o.createElement("h2", null, "Create & Live-Preview Your Job Listing"), o.createElement("fieldset", null, o.createElement("legend", null, "Company Name"), o.createElement("div", {
                        className: "fieldset__content"
                    }, o.createElement(h.Z, {
                        name: "company_name",
                        placeholder: "Awesome Inc"
                    }))), o.createElement("fieldset", null, o.createElement("legend", null, "Company Logo "), o.createElement("div", {
                        className: "fieldset__content"
                    }, o.createElement(h.Z, {
                        name: "company_logo",
                        placeholder: "Link to your logo (square format preferred)"
                    }))), o.createElement("fieldset", null, o.createElement("legend", null, "Job Title"), o.createElement("div", {
                        className: "fieldset__content"
                    }, o.createElement(h.Z, {
                        name: "title"
                    }))), o.createElement("fieldset", null, o.createElement("legend", null, "Skills"), o.createElement("div", {
                        className: "fieldset__content"
                    }, o.createElement(y, {
                        name: "jobtype",
                        value: "design",
                        label: "Design"
                    }), o.createElement(y, {
                        name: "jobtype",
                        value: "programming",
                        label: "Programming"
                    }), o.createElement(y, {
                        name: "jobtype",
                        value: "other",
                        label: "Other"
                    })), this.renderError("jobtype", a, r)), o.createElement("fieldset", null, o.createElement("legend", null, "Location"), o.createElement("div", {
                        className: "fieldset__content"
                    }, o.createElement("span", {
                        className: "form__field__note"
                    }, "E.g. “San Francisco, CA”, “Berlin”, “Anywhere”"), o.createElement(h.Z, {
                        name: "location"
                    }), o.createElement(w.Z, {
                        name: "remote",
                        label: "Work can be done remotely"
                    }), o.createElement(w.Z, {
                        name: "reloc_assistance",
                        label: "Relocation assistance provided"
                    }), o.createElement(w.Z, {
                        name: "visa_assistance",
                        label: "Visa sponsorship provided"
                    }))), o.createElement("fieldset", null, o.createElement("legend", null, "Description ", o.createElement("span", {
                        className: "grey small"
                    }, "(in Markdown format)")), o.createElement("div", {
                        className: "fieldset__content"
                    }, o.createElement(h.Z, {
                        name: "description",
                        type: "textarea"
                    }, o.createElement("span", {
                        className: "form__field__note"
                    }, "Examples: Use “-” for bullet lists, and “####” for headers.")))), o.createElement("fieldset", null, o.createElement("legend", null, "Application Form URL"), o.createElement("div", {
                        className: "fieldset__content"
                    }, o.createElement(h.Z, {
                        name: "application_url",
                        type: "url"
                    }))), o.createElement("br", null), o.createElement("fieldset", null, o.createElement("legend", null, "Job Type"), o.createElement("div", {
                        className: "fieldset__content"
                    }, o.createElement(y, {
                        name: "commitment",
                        value: "full-time",
                        label: P("Full-time", "250", "orange", "Salaried position, typically 40 hours a week", n)
                    }), o.createElement(y, {
                        name: "commitment",
                        value: "freelance",
                        label: P("Freelance", "85", "highlight", "Shorter-term work, usually remote (off-site)", n)
                    })), this.renderError("commitment", a, r)), o.createElement("fieldset", null, o.createElement("legend", null, "Terms"), o.createElement("div", {
                        className: "fieldset__content"
                    }, o.createElement(w.Z, {
                        name: "tos",
                        label: o.createElement("span", null, "I understand that my listing may be removed if it is for a position that involves adult content, an illegitimate work opportunity, an incorrect job type (i.e. freelance when it should be listed as full-time), or contains inappropriate language.", " ", o.createElement("strong", null, "If removed within 7 days after posting, a refund will be issued."))
                    })), this.renderError("tos", a, r)), o.createElement("div", {
                        className: "btn--lined"
                    }, o.createElement(N.Z, {
                        processing: t,
                        text: t ? "Saving..." : "Checkout →"
                    })))
                }
                renderPreview({
                    values: e
                }) {
                    const {
                        title: t,
                        location: n,
                        company_name: a,
                        company_logo: r,
                        commitment: l,
                        remote: s,
                        description: i,
                        application_url: c,
                        company_url: u
                    } = e, {
                        preview: d,
                        mqMatches: p
                    } = this.state, {
                        loading: h
                    } = this.props;
                    return o.createElement("div", null, o.createElement("header", {
                        className: "jobs__header job-details"
                    }, o.createElement("div", {
                        className: "container"
                    }, o.createElement("div", {
                        className: "row"
                    }, !p && o.createElement("div", {
                        className: "job-details__teaser"
                    }, o.createElement("span", null, "Your Job Listing Preview ↓")), o.createElement("div", {
                        className: "col col-12"
                    }, o.createElement("div", {
                        className: "job-details__intro"
                    }, r && o.createElement("figure", {
                        className: "author author--avatar-only author--white"
                    }, o.createElement("a", {
                        href: u
                    }, o.createElement("div", {
                        className: "author__image-wrapper"
                    }, o.createElement("div", {
                        className: "author__image job-details__image"
                    }, o.createElement("img", {
                        width: "100",
                        src: r,
                        alt: a
                    }))))), o.createElement("p", {
                        className: "job-details__company-call"
                    }, o.createElement("a", {
                        href: u,
                        className: "job-details__company-name"
                    }, o.createElement("strong", null, a)), " ", "is hiring a")), o.createElement("h1", {
                        className: "job-details__job-title h1"
                    }, t), o.createElement("ul", {
                        className: "job-details__meta"
                    }, o.createElement("li", {
                        className: "job__date-posted"
                    }, o.createElement("time", {
                        dateTime: (0, C.rm)(new Date)
                    }, (0, C.rm)(new Date))), o.createElement("li", {
                        className: "job__location"
                    }, s ? "Anywhere" : n), o.createElement("li", {
                        className: "job__type"
                    }, l)))))), o.createElement("section", {
                        className: "block"
                    }, o.createElement("div", {
                        className: "container job-details__details"
                    }, o.createElement("div", {
                        className: "row"
                    }, o.createElement("div", {
                        className: "col col-12"
                    }, o.createElement("div", {
                        dangerouslySetInnerHTML: {
                            __html: m()(i || "")
                        }
                    }), o.createElement("div", {
                        className: "job-details__cta btn--lined"
                    }, o.createElement("a", {
                        href: c,
                        target: "_blank",
                        rel: "noopener noreferrer",
                        className: "btn btn--large btn--side-lined btn--green"
                    }, "Apply for this Job")))))), p && d && o.createElement("div", {
                        className: "btn--lined btn--lined__options"
                    }, o.createElement(N.Z, {
                        processing: h,
                        text: h ? "Saving..." : "Checkout  →"
                    })))
                }
                render() {
                    const e = {
                            company_name: "",
                            company_logo: "",
                            title: "",
                            jobtype: "",
                            location: "",
                            remote: !1,
                            reloc_assistance: !1,
                            visa_assistance: !1,
                            description: "",
                            commitment: "",
                            tos: !1,
                            application_url: ""
                        },
                        t = {};
                    Object.keys(e).forEach((e => {
                        t[e] = !0
                    }));
                    const n = (0, p.w)(t);
                    return o.createElement("section", {
                        className: "block job-posting"
                    }, this.state.mqMatches && o.createElement("div", {
                        className: "content-tabs content-tabs--job-posting"
                    }, o.createElement("ul", null, o.createElement("li", {
                        className: "content-tab " + (this.state.preview ? "" : "content-tabs__current")
                    }, o.createElement("button", {
                        type: "button",
                        onClick: () => this.setState({
                            preview: !1
                        }, F),
                        className: "btn btn--small btn--white btn--white--bordered"
                    }, "Editor")), o.createElement("li", {
                        className: "content-tab " + (this.state.preview ? "content-tabs__current" : "")
                    }, o.createElement("button", {
                        type: "button",
                        onClick: () => this.setState({
                            preview: !0
                        }, F),
                        className: "btn btn--small btn--white btn--white--bordered"
                    }, "Preview")))), o.createElement(i.J9, {
                        validateOnChange: !1,
                        validationSchema: n,
                        initialValues: e,
                        onSubmit: this.handleSubmit,
                        render: e => o.createElement("div", null, o.createElement("div", {
                            className: "container"
                        }, (!this.state.mqMatches || !this.state.preview) && o.createElement("div", {
                            className: "col col-5 job-posting--form"
                        }, this.renderForm(e)), (!this.state.mqMatches || this.state.preview) && o.createElement("div", {
                            className: "col col-7 job-posting--preview"
                        }, this.renderPreview(e))))
                    }))
                }
            }
            const q = (0, r.$j)((({
                cart: e
            }) => ({
                loading: e.loading,
                currency: d()(e, "total.currency") || "USD"
            })), (e => ({
                addJobPostToCart: t => e((0, S.wP)(t))
            })))(L)
        },
        "./js/forms/Checkbox.js": (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => c
            });
            var a = n("../node_modules/@babel/runtime/helpers/esm/extends.js"),
                o = n("../node_modules/react/index.js"),
                r = n("../node_modules/lodash/isFunction.js"),
                l = n.n(r),
                s = n("../node_modules/formik/dist/formik.esm.js");

            function i(e) {
                const {
                    label: t,
                    className: n,
                    id: a,
                    field: {
                        name: r,
                        value: s,
                        onChange: i,
                        onBlur: c
                    }
                } = e, m = ["form__field", "form__field--checkbox"];
                return n && m.push(n), o.createElement("label", {
                    className: m.join(" ")
                }, o.createElement("input", {
                    id: a,
                    name: r,
                    type: "checkbox",
                    value: s,
                    checked: s,
                    onChange: t => {
                        e.onChange && e.onChange(t), i && i(t)
                    },
                    onBlur: t => {
                        e.onBlur && e.onBlur(t), c && c(t)
                    }
                }), o.createElement("span", {
                    className: "form__field__label"
                }, l()(t) ? t() : t))
            }

            function c(e) {
                return o.createElement(s.gN, (0, a.Z)({
                    component: i
                }, e))
            }
        },
        "./js/forms/FormComponent.js": (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => o
            });
            var a = n("../node_modules/react/index.js");
            class o extends a.Component {
                constructor(e) {
                    super(e), this.state = {
                        saved: !1,
                        loading: !1,
                        buttonLabel: "Save Changes"
                    }
                }
                static getDerivedStateFromProps(e, t) {
                    const {
                        loading: n,
                        error: a
                    } = e;
                    let {
                        buttonLabel: o
                    } = e;
                    const r = t.loading && !n && !a;
                    return o || (o = n ? "Saving..." : r ? "Saved ✓" : "Save Changes"), {
                        loading: n,
                        saved: r,
                        buttonLabel: o
                    }
                }
                componentDidUpdate() {
                    const {
                        saved: e
                    } = this.state;
                    e && setTimeout((() => {
                        this.setState({
                            saved: !1
                        })
                    }), 2e3)
                }
            }
        },
        "../node_modules/smooth-scroll/dist/smooth-scroll.polyfills.min.js": function(e, t, n) {
            var a, o;
            window.Element && !Element.prototype.closest && (Element.prototype.closest = function(e) {
                    var t, n = (this.document || this.ownerDocument).querySelectorAll(e),
                        a = this;
                    do {
                        for (t = n.length; --t >= 0 && n.item(t) !== a;);
                    } while (t < 0 && (a = a.parentElement));
                    return a
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
                        var a = (new Date).getTime(),
                            o = Math.max(0, 16 - (a - e)),
                            r = window.setTimeout((function() {
                                t(a + o)
                            }), o);
                        return e = a + o, r
                    }), window.cancelAnimationFrame || (window.cancelAnimationFrame = function(e) {
                        clearTimeout(e)
                    })
                }(), o = void 0 !== n.g ? n.g : "undefined" != typeof window ? window : this, void 0 === (a = function() {
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
                            a = function() {
                                for (var e = {}, t = 0; t < arguments.length; t++) ! function(t) {
                                    for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
                                }(arguments[t]);
                                return e
                            },
                            o = function(t) {
                                return !(!("matchMedia" in e) || !e.matchMedia("(prefers-reduced-motion)").matches)
                            },
                            r = function(t) {
                                return parseInt(e.getComputedStyle(t).height, 10)
                            },
                            l = function(e) {
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
                                for (var t, n = String(e), a = n.length, o = -1, r = "", l = n.charCodeAt(0); ++o < a;) {
                                    if (0 === (t = n.charCodeAt(o))) throw new InvalidCharacterError("Invalid character: the input contains U+0000.");
                                    r += t >= 1 && t <= 31 || 127 == t || 0 === o && t >= 48 && t <= 57 || 1 === o && t >= 48 && t <= 57 && 45 === l ? "\\" + t.toString(16) + " " : t >= 128 || 45 === t || 95 === t || t >= 48 && t <= 57 || t >= 65 && t <= 90 || t >= 97 && t <= 122 ? n.charAt(o) : "\\" + n.charAt(o)
                                }
                                var s;
                                try {
                                    s = decodeURIComponent("#" + r)
                                } catch (e) {
                                    s = "#" + r
                                }
                                return s
                            },
                            i = function(e, t) {
                                var n;
                                return "easeInQuad" === e.easing && (n = t * t), "easeOutQuad" === e.easing && (n = t * (2 - t)), "easeInOutQuad" === e.easing && (n = t < .5 ? 2 * t * t : (4 - 2 * t) * t - 1), "easeInCubic" === e.easing && (n = t * t * t), "easeOutCubic" === e.easing && (n = --t * t * t + 1), "easeInOutCubic" === e.easing && (n = t < .5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1), "easeInQuart" === e.easing && (n = t * t * t * t), "easeOutQuart" === e.easing && (n = 1 - --t * t * t * t), "easeInOutQuart" === e.easing && (n = t < .5 ? 8 * t * t * t * t : 1 - 8 * --t * t * t * t), "easeInQuint" === e.easing && (n = t * t * t * t * t), "easeOutQuint" === e.easing && (n = 1 + --t * t * t * t * t), "easeInOutQuint" === e.easing && (n = t < .5 ? 16 * t * t * t * t * t : 1 + 16 * --t * t * t * t * t), e.customEasing && (n = e.customEasing(t)), n || t
                            },
                            c = function() {
                                return Math.max(document.body.scrollHeight, document.documentElement.scrollHeight, document.body.offsetHeight, document.documentElement.offsetHeight, document.body.clientHeight, document.documentElement.clientHeight)
                            },
                            m = function(t, n, a, o) {
                                var r = 0;
                                if (t.offsetParent)
                                    do {
                                        r += t.offsetTop, t = t.offsetParent
                                    } while (t);
                                return r = Math.max(r - n - a, 0), o && (r = Math.min(r, c() - e.innerHeight)), r
                            },
                            u = function(e) {
                                return e ? r(e) + e.offsetTop : 0
                            },
                            d = function(e, t, n) {
                                t || history.pushState && n.updateURL && history.pushState({
                                    smoothScroll: JSON.stringify(n),
                                    anchor: e.id
                                }, document.title, e === document.documentElement ? "#top" : "#" + e.id)
                            },
                            p = function(t, n, a) {
                                0 === t && document.body.focus(), a || (t.focus(), document.activeElement !== t && (t.setAttribute("tabindex", "-1"), t.focus(), t.style.outline = "none"), e.scrollTo(0, n))
                            },
                            h = function(t, n, a, o) {
                                if (n.emitEvents && "function" == typeof e.CustomEvent) {
                                    var r = new CustomEvent(t, {
                                        bubbles: !0,
                                        detail: {
                                            anchor: a,
                                            toggle: o
                                        }
                                    });
                                    document.dispatchEvent(r)
                                }
                            };
                        return function(r, f) {
                            var b, E, g, v, _, y, w = {
                                    cancelScroll: function(e) {
                                        cancelAnimationFrame(y), y = null, e || h("scrollCancel", b)
                                    },
                                    animateScroll: function(n, o, r) {
                                        var l = a(b || t, r || {}),
                                            s = "[object Number]" === Object.prototype.toString.call(n),
                                            f = s || !n.tagName ? null : n;
                                        if (s || f) {
                                            var E = e.pageYOffset;
                                            l.header && !g && (g = document.querySelector(l.header)), v || (v = u(g));
                                            var _, j, N, S = s ? n : m(f, v, parseInt("function" == typeof l.offset ? l.offset(n, o) : l.offset, 10), l.clip),
                                                C = S - E,
                                                O = c(),
                                                k = 0,
                                                x = function(t, a) {
                                                    var r = e.pageYOffset;
                                                    if (t == a || r == a || (E < a && e.innerHeight + r) >= O) return w.cancelScroll(!0), p(n, a, s), h("scrollStop", l, n, o), _ = null, y = null, !0
                                                },
                                                A = function(t) {
                                                    _ || (_ = t), j = (k += t - _) / parseInt(l.speed, 10), N = E + C * i(l, j = j > 1 ? 1 : j), e.scrollTo(0, Math.floor(N)), x(N, S) || (y = e.requestAnimationFrame(A), _ = t)
                                                };
                                            0 === e.pageYOffset && e.scrollTo(0, 0), d(n, s, l), h("scrollStart", l, n, o), w.cancelScroll(!0), e.requestAnimationFrame(A)
                                        }
                                    }
                                },
                                j = function(t) {
                                    if (!o() && 0 === t.button && !t.metaKey && !t.ctrlKey && "closest" in t.target && (E = t.target.closest(r)) && "a" === E.tagName.toLowerCase() && !t.target.closest(b.ignore) && E.hostname === e.location.hostname && E.pathname === e.location.pathname && /#/.test(E.href)) {
                                        var n = s(l(E.hash)),
                                            a = b.topOnEmptyHash && "#" === n ? document.documentElement : document.querySelector(n);
                                        (a = a || "#top" !== n ? a : document.documentElement) && (t.preventDefault(), w.animateScroll(a, E))
                                    }
                                },
                                N = function(e) {
                                    if (null !== history.state && history.state.smoothScroll && history.state.smoothScroll === JSON.stringify(b) && history.state.anchor) {
                                        var t = document.querySelector(s(l(history.state.anchor)));
                                        t && w.animateScroll(t, null, {
                                            updateURL: !1
                                        })
                                    }
                                },
                                S = function(e) {
                                    _ || (_ = setTimeout((function() {
                                        _ = null, v = u(g)
                                    }), 66))
                                };
                            return w.destroy = function() {
                                b && (document.removeEventListener("click", j, !1), e.removeEventListener("resize", S, !1), e.removeEventListener("popstate", N, !1), w.cancelScroll(), b = null, E = null, g = null, v = null, _ = null, y = null)
                            }, w.init = function(o) {
                                if (!n()) throw "Smooth Scroll: This browser does not support the required JavaScript methods and browser APIs.";
                                w.destroy(), b = a(t, o || {}), g = b.header ? document.querySelector(b.header) : null, v = u(g), document.addEventListener("click", j, !1), g && e.addEventListener("resize", S, !1), b.updateURL && b.popstate && e.addEventListener("popstate", N, !1)
                            }, w.init(f), w
                        }
                    }(o)
                }.apply(t, [])) || (e.exports = a)
        }
    }
]);
//# sourceMappingURL=JobPostForm.97a1e167104dfd828730.js.map