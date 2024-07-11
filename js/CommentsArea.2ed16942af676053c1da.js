(self.webpackChunk = self.webpackChunk || []).push([
    ["CommentsArea"], {
        "./js/actions/comments.js": (e, t, n) => {
            "use strict";
            n.d(t, {
                tH: () => i,
                w: () => c,
                py: () => d
            });
            var r = n("./js/constants/actionTypes.js"),
                s = n("./js/helpers/index.js"),
                o = n("./js/utils/auth.js"),
                a = n("./js/constants/index.js"),
                l = n("./js/actions/index.js");
            const m = (e, t) => {
                    let n = (0, s.qZ)(e);
                    return t && (n = n.replace(/\.json$/, ".count.json")), fetch(n).then((e => e.ok ? e.json() : 404 === e.status ? [] : void 0))
                },
                i = e => t => {
                    t({
                        type: r.Z.COMMENTS_FETCH_START
                    }), m(e).then((n => t({
                        type: r.Z.COMMENTS_FETCH_SUCCESS,
                        comments: n,
                        thread: e
                    }))).catch((e => t({
                        type: r.Z.COMMENTS_FETCH_FAIL,
                        error: (0, s.jN)(e)
                    })))
                },
                c = e => t => {
                    t({
                        type: r.Z.COMMENTS_SUBMIT_START
                    });
                    const n = o.Z.currentUser(),
                        i = n ? n.jwt().catch(null) : Promise.resolve(null);
                    return t((0, l.Lt)({
                        name: e.name,
                        twitter: e.twitter
                    })), i.then((o => {
                        const l = {
                            "Content-Type": "application/json"
                        };
                        o && (l.Authorization = "Bearer " + o), fetch(a.Z.COMMENTS_API_BASE + e.thread, {
                            method: "POST",
                            headers: l,
                            body: JSON.stringify({
                                author: e.name,
                                body: e.message,
                                twitter: e.twitter,
                                email: n && n.email,
                                parent: e.parent
                            })
                        }).then((e => e.ok ? e.json() : Promise.reject(e))).then((() => m(e.thread))).then((n => t({
                            type: r.Z.COMMENTS_SUBMIT_SUCCESS,
                            comments: n,
                            thread: e.thread
                        }))).catch((e => t({
                            type: r.Z.COMMENTS_SUBMIT_FAIL,
                            error: (0, s.jN)(e)
                        })))
                    }))
                },
                d = e => t => {
                    t({
                        type: r.Z.COMMENTS_COUNT_START
                    }), m(e, 1).then((n => t({
                        type: r.Z.COMMENTS_COUNT_SUCCESS,
                        count: n.count,
                        thread: e
                    }))).catch((e => t({
                        type: r.Z.COMMENTS_COUNT_FAIL,
                        error: (0, s.jN)(e)
                    })))
                }
        },
        "./js/common/Loader.js": (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => s
            });
            var r = n("../node_modules/react/index.js");

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
        "./js/containers/CommentsArea.js": (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, {
                default: () => S
            });
            var r = n("../node_modules/@babel/runtime/helpers/esm/defineProperty.js"),
                s = n("../node_modules/react/index.js"),
                o = n("../node_modules/react-redux/es/index.js"),
                a = n("./js/actions/comments.js"),
                l = n("./js/selectors/index.js"),
                m = n("./js/common/Loader.js"),
                i = n("../node_modules/date-fns/format/index.js"),
                c = n.n(i),
                d = n("../node_modules/marked/lib/marked.js"),
                u = n.n(d);

            function p(e, t = 10) {
                let n = 0;
                for (let t = 0; t < e.length; t++) n += e.charCodeAt(t);
                return n % t
            }
            const h = new(u().Renderer);
            h.image = (e, t, n) => '<a rel="nofollow" href="' + e + '" target="_blank">' + (t || n) + "</a>", h.link = (e, t, n) => '<a rel="nofollow" href="' + e + '" target="_blank">' + (t || n) + "</a>", u().setOptions({
                sanitize: !0,
                renderer: h
            });
            class f extends s.Component {
                constructor(e) {
                    super(e), this.handleReplyButton = e => !e.preventDefault() && this.props.onReplyButton && this.props.onReplyButton(this.props.comment), this.handleRef = e => e && Array.from(e.getElementsByTagName("code")).forEach((e => window.Prism && window.Prism.highlightElement(e))), this.handleReplyButton = this.handleReplyButton.bind(this)
                }
                commentBody() {
                    const {
                        comment: e
                    } = this.props, {
                        body: t
                    } = e;
                    if (e.parentComment) {
                        const n = e.parentComment.author.replace(/[^\w\s]/g, "");
                        return u()(t).replace(/^<p>/, '<p><span class="comment__reply-to">@' + n + ":</span>")
                    }
                    return u()(t)
                }
                renderUserpic() {
                    const {
                        comment: e
                    } = this.props, t = s.createElement("div", {
                        className: "author__image-wrapper tilt"
                    }, s.createElement("div", {
                        className: "author__image"
                    }, s.createElement("img", {
                        width: "73",
                        height: "73",
                        loading: "lazy",
                        decoding: "async",
                        src: "https://smashingmagazine.com/images/userpics/avatarSM-" + (p(e.author, 16) + 1) + ".png",
                        alt: e.author
                    })));
                    return e.twitter ? s.createElement("a", {
                        href: "https://twitter.com/" + e.twitter
                    }, t) : t
                }
                render() {
                    const {
                        comment: e,
                        level: t,
                        onReplyButton: n,
                        id: r
                    } = this.props;
                    return s.createElement("div", {
                        className: "article__comment-wrapper",
                        id: r || e.id,
                        tabIndex: "0"
                    }, s.createElement("figure", {
                        className: "article__comment" + (e.verified ? " article__comment-verified" : "")
                    }, s.createElement("header", null, s.createElement("figure", {
                        className: "author author--avatar-only"
                    }, this.renderUserpic()), s.createElement("span", null, e.twitter ? s.createElement("a", {
                        href: "https://twitter.com/" + e.twitter
                    }, e.author) : e.author), " ", "wrote", s.createElement("time", {
                        dateTime: c()(e.date, "YYYY-MM-DD HH:mm")
                    }, " ", "— ", c()(e.date, "MMMM D, YYYY H:mm")), " ", s.createElement("a", {
                        className: "anchor",
                        href: "#" + (r || e.id)
                    }, "#")), s.createElement("div", {
                        className: "comment__content"
                    }, s.createElement("p", {
                        dangerouslySetInnerHTML: {
                            __html: this.commentBody(e)
                        },
                        ref: this.handleRef
                    })), t < 3 && s.createElement("footer", null, s.createElement("button", {
                        type: "button",
                        className: "btn btn--white btn--white--bordered btn--medium",
                        onClick: this.handleReplyButton
                    }, "Reply"))), e.children && e.children.map((e => s.createElement(f, {
                        key: e.id,
                        comment: e,
                        level: t + 1,
                        onReplyButton: n
                    }))))
                }
            }
            class y extends s.Component {
                constructor(e) {
                    super(e), this.handleToggleAll = e => !e.preventDefault() && this.setState({
                        showAll: !this.state.showAll
                    }), this.handleReplyButton = e => this.props.onReplyButton && this.props.onReplyButton(e), this.renderEmpty = () => s.createElement("div", null, s.createElement("p", null, "No comments have been posted yet. Please feel free to comment first!"), s.createElement("p", null, s.createElement("em", null, "Note: Make sure your comment is related to the topic of the article above. Let's start a personal and meaningful conversation!"))), this.renderShowAllButton = () => {
                        const {
                            comments: e,
                            refCommentId: t
                        } = this.props;
                        return s.createElement("button", {
                            type: "button",
                            className: "btn btn--medium btn--load-comments btn--blue",
                            onClick: this.handleToggleAll
                        }, "Load all ", e.length, " comments ↓")
                    };
                    const {
                        refCommentId: t,
                        comments: n
                    } = e;
                    this.state = {
                        showAll: t && n.find((e => e.id === t))
                    }, this.handleToggleAll = this.handleToggleAll.bind(this)
                }
                componentDidMount() {
                    const {
                        refCommentId: e
                    } = this.props, t = document.querySelector("#comment-" + e);
                    t && setTimeout((() => {
                        t.focus(), t.scrollIntoView()
                    }), 150)
                }
                render() {
                    const {
                        comments: e,
                        thread: t
                    } = this.props, {
                        showAll: n
                    } = this.state, r = n ? e : e && e.slice(0, 2);
                    return s.createElement("div", {
                        className: "article__comments",
                        "aria-live": "polite",
                        "aria-relevant": "additions"
                    }, s.createElement("h2", {
                        className: "h1"
                    }, "— Comments", " ", s.createElement("span", {
                        className: "comments__comment-count sup"
                    }, e ? e.length : 0)), e && 0 === e.length && this.renderEmpty(), r && function(e) {
                        const t = {};
                        return e.map((e => {
                            const n = Object.assign({}, e);
                            if (t[n.id] = n, n.parent && "0" !== n.parent) {
                                const e = t[n.parent];
                                if (e) return e.children = e.children || [], e.children.push(n), n.parentComment = e, !1
                            }
                            return n
                        })).filter((e => e))
                    }(r).map((e => s.createElement(f, {
                        id: "comment-" + e.id,
                        key: e.id,
                        comment: e,
                        level: 0,
                        onReplyButton: this.handleReplyButton.bind(this)
                    }))), !n && e && e.length > 2 && this.renderShowAllButton())
                }
            }
            var _ = n("../node_modules/formik/dist/formik.esm.js"),
                g = n("./js/forms/Input.js"),
                j = n("./js/common/LaddaButton.js"),
                b = n("./js/forms/FormComponent.js"),
                v = n("./js/schemas/index.js");
            class w extends b.Z {
                componentDidUpdate() {
                    const {
                        saved: e,
                        name: t,
                        twitter: n,
                        resetForm: r
                    } = this.state;
                    e && r && r({
                        name: t,
                        twitter: n,
                        message: ""
                    }), e && setTimeout((() => {
                        this.setState({
                            saved: !1
                        })
                    }), 7e3)
                }
                render() {
                    const {
                        replyTo: e,
                        loading: t,
                        message: n,
                        name: r,
                        twitter: o,
                        onSubmit: a,
                        error: l
                    } = this.props, {
                        saved: m
                    } = this.state, i = t ? "Posting..." : m ? "Submitted ✓" : "Post Comment", c = {
                        name: r,
                        message: n,
                        twitter: o
                    };
                    return s.createElement(_.J9, {
                        validationSchema: (0, v.w)({
                            name: !0,
                            twitter: !0,
                            message: !0
                        }),
                        initialValues: c,
                        onSubmit: (e, {
                            resetForm: t
                        }) => {
                            this.setState({
                                name: e.name,
                                twitter: e.twitter,
                                resetForm: t
                            }), a(e)
                        },
                        render: () => s.createElement(_.l0, null, s.createElement("h3", {
                            className: "article__comments__form__desc"
                        }, "Leave a comment"), s.createElement("small", {
                            className: "article__comments--notes"
                        }, s.createElement("span", null, "Comments are moderated. They will be published only if they add to the discussion in a constructive way. If you disagree, please be polite. We all want to learn from each other here. We use ", s.createElement("em", null, "GitHub Flavored Markdown"), " for comments. Call out code within a sentence with single backticks (", s.createElement("code", null, "`command`"), "). For a distinct block, use triple backticks (", s.createElement("code", null, "```code block```"), "). Typo? Please ", s.createElement("a", {
                            href: "/contact/"
                        }, "let us know"), ".")), l && s.createElement("p", null, s.createElement("span", {
                            className: "error-server error-msg"
                        }, l)), s.createElement("div", {
                            className: "comment__message-field"
                        }, s.createElement("div", {
                            className: "comment__reply-to-container"
                        }, s.createElement(g.Z, {
                            label: e ? "Your message to " + e.author : "Your message",
                            type: "textarea",
                            name: "message",
                            className: "comment__message-field"
                        }))), s.createElement(g.Z, {
                            label: "Your (real) name",
                            name: "name",
                            className: "comment__name-field"
                        }), s.createElement(g.Z, {
                            label: "Your Twitter (e.g. 'smashingmag')",
                            name: "twitter",
                            className: "comment__twitter-field",
                            optional: !0
                        }), m && s.createElement("p", {
                            className: "comment__message-notification"
                        }, s.createElement("strong", null, "Yay, it worked!"), " Your comment will go live straight after moderation. You are on fire today! 🎊"), s.createElement("div", {
                            className: "btn--lined"
                        }, s.createElement(j.Z, {
                            text: i,
                            processing: t
                        })))
                    })
                }
            }

            function E(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function C(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? E(Object(n), !0).forEach((function(t) {
                        (0, r.Z)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : E(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            class O extends s.Component {
                constructor(e) {
                    super(e), this.handleComment = e => {
                        const {
                            postComment: t,
                            thread: n
                        } = this.props, {
                            replyTo: r
                        } = this.state;
                        t(C(C({}, e), {}, {
                            thread: n,
                            parent: r ? r.id : null
                        }))
                    }, this.handleReplyButton = e => this.setState({
                        replyTo: e
                    }, (() => {
                        const e = this.props.element.querySelector(".comment__message-field textarea");
                        e && e.focus()
                    }));
                    const {
                        hash: t
                    } = window.location;
                    this.state = {
                        replyTo: null,
                        refCommentId: t.includes("comment-") ? t.replace("#comment-", "") : null
                    }
                }
                componentDidMount() {
                    const {
                        fetchComments: e,
                        thread: t
                    } = this.props;
                    e(t)
                }
                render() {
                    const {
                        thread: e,
                        date: t,
                        comments: n,
                        error: r,
                        loading: o,
                        adding: a,
                        name: l,
                        twitter: i
                    } = this.props, {
                        replyTo: c,
                        refCommentId: d
                    } = this.state;
                    return o ? s.createElement(m.Z, null) : s.createElement("div", {
                        className: "row"
                    }, s.createElement("div", {
                        className: "col col-7"
                    }, s.createElement(y, {
                        refCommentId: d,
                        thread: e,
                        comments: n || [],
                        onReplyButton: this.handleReplyButton
                    })), s.createElement("div", {
                        className: "col col-5 comment-form__sticky"
                    }, s.createElement(w, {
                        error: r,
                        name: l,
                        twitter: i,
                        onSubmit: this.handleComment,
                        thread: e,
                        date: t,
                        replyTo: c,
                        loading: a
                    })))
                }
            }
            const S = (0, o.$j)(((e, t) => ({
                comments: e.comments.items[t.thread],
                loading: e.comments.loading || e.cart.loading,
                adding: e.comments.adding,
                error: (0, l.zh)(e, "comments"),
                name: (0, l.u6)(e),
                twitter: (0, l.bY)(e)
            })), (e => ({
                fetchComments: t => e((0, a.tH)(t)),
                postComment: t => e((0, a.w)(t))
            })))(O)
        },
        "./js/forms/FormComponent.js": (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => s
            });
            var r = n("../node_modules/react/index.js");
            class s extends r.Component {
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
                        error: r
                    } = e;
                    let {
                        buttonLabel: s
                    } = e;
                    const o = t.loading && !n && !r;
                    return s || (s = n ? "Saving..." : o ? "Saved ✓" : "Save Changes"), {
                        loading: n,
                        saved: o,
                        buttonLabel: s
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
        "./js/selectors/index.js": (e, t, n) => {
            "use strict";
            n.d(t, {
                j: () => g,
                Yy: () => j,
                hv: () => b,
                NW: () => v,
                oU: () => C,
                AX: () => k,
                RH: () => T,
                u6: () => M,
                bY: () => A,
                Mc: () => x,
                nj: () => B,
                zh: () => R,
                GG: () => L,
                yx: () => Z,
                Nq: () => D
            });
            var r = n("../node_modules/@babel/runtime/helpers/esm/defineProperty.js"),
                s = n("../node_modules/reselect/es/index.js"),
                o = n("../node_modules/lodash/get.js"),
                a = n.n(o),
                l = n("../node_modules/lodash/sample.js"),
                m = n.n(l),
                i = n("../node_modules/lodash/intersection.js"),
                c = n.n(i),
                d = n("../node_modules/lodash/isEmpty.js"),
                u = n.n(d),
                p = n("./js/helpers/index.js");

            function h(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function f(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? h(Object(n), !0).forEach((function(t) {
                        (0, r.Z)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : h(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            const y = e => a()(e, "market.market") ? a()(e, "market.market").toLowerCase() : null,
                _ = e => (a()(e, "panels.items") || []).map((e => (e.market = e.market ? e.market.toLowerCase() : null, e))),
                g = e => a()(e, "cart.currency"),
                j = e => (0, s.P1)((e => a()(e, "products.items") || []), g, ((t, n) => {
                    const r = ((e, t) => (t || []).find((t => t.sku === e)))(e, t);
                    return console.log(e, r), a()(r, "bundlePrices." + n.toLowerCase() + ".price") ? a()(r, "bundlePrices." + n.toLowerCase()) : a()(r, "prices." + n.toLowerCase())
                })),
                b = ({
                    id: e,
                    categories: t
                }) => (0, s.P1)(y, _, ((n, r) => ((e, t) => (t || []).find((t => t.id === e)))(e, r) || ((e, t) => m()(t.filter((t => !u()(c()(t.categories, e))))) || null)(t.split(","), r) || m()(((e, t) => {
                    const n = t.filter((t => t.market === e));
                    return n.length ? n : t
                })(n, r)) || null)),
                v = e => (0, s.P1)(w("orders"), (({
                    items: t
                }) => (t || []).find((t => t.id === e)))),
                w = (e = "cart") => t => a()(t, e),
                E = e => a()(e, "products.items") || [],
                C = (e = "cart") => (0, s.P1)(w(e), E, ((e, t) => f(f({}, e), {}, {
                    items: (a()(e, "items") || []).map((e => f(f({}, e), {}, {
                        product: f(f({}, t.find((t => t.id === e.productId))), e.product)
                    })))
                }))),
                O = e => a()(e, "auth.user"),
                S = e => a()(e, "settings"),
                N = (0, s.P1)(O, (e => a()(e, "user_metadata") || {})),
                P = (0, s.P1)(O, (e => a()(e, "app_metadata") || {})),
                k = (0, s.P1)(N, (e => a()(e, "firstname"))),
                T = (0, s.P1)(N, (e => a()(e, "lastname"))),
                M = (0, s.P1)(N, S, ((e, t) => a()(e, "firstname") ? a()(e, "firstname") + " " + a()(e, "lastname") : a()(t, "name"))),
                A = (0, s.P1)(N, S, ((e, t) => a()(e, "twitter") || a()(t, "twitter"))),
                x = (0, s.P1)(O, (e => a()(e, "plan"))),
                B = (0, s.P1)(P, (e => a()(e, "subscription.type"))),
                R = (e, t) => (0, p.jN)(a()(e, t + ".error")),
                L = (0, s.P1)(N, (e => a()(e, "shippingAddress.country") || "")),
                I = ((0, s.P1)(O, (e => a()(e, "token.access_token"))), e => a()(e, "ad.items") || []),
                Z = (0, s.P1)(I, (e => e.filter((e => e.active && "sidebar" !== e.placement)).filter((e => !(!(0, p.GH)() || "homepage" !== e.placement) || !(0, p.GH)() && "homepage" !== e.placement)))),
                D = (0, s.P1)(I, (e => e.filter((e => e.active && "sidebar" === e.placement))))
        },
        "../node_modules/lodash/_baseIntersection.js": (e, t, n) => {
            var r = n("../node_modules/lodash/_SetCache.js"),
                s = n("../node_modules/lodash/_arrayIncludes.js"),
                o = n("../node_modules/lodash/_arrayIncludesWith.js"),
                a = n("../node_modules/lodash/_arrayMap.js"),
                l = n("../node_modules/lodash/_baseUnary.js"),
                m = n("../node_modules/lodash/_cacheHas.js"),
                i = Math.min;
            e.exports = function(e, t, n) {
                for (var c = n ? o : s, d = e[0].length, u = e.length, p = u, h = Array(u), f = 1 / 0, y = []; p--;) {
                    var _ = e[p];
                    p && t && (_ = a(_, l(t))), f = i(_.length, f), h[p] = !n && (t || d >= 120 && _.length >= 120) ? new r(p && _) : void 0
                }
                _ = e[0];
                var g = -1,
                    j = h[0];
                e: for (; ++g < d && y.length < f;) {
                    var b = _[g],
                        v = t ? t(b) : b;
                    if (b = n || 0 !== b ? b : 0, !(j ? m(j, v) : c(y, v, n))) {
                        for (p = u; --p;) {
                            var w = h[p];
                            if (!(w ? m(w, v) : c(e[p], v, n))) continue e
                        }
                        j && j.push(v), y.push(b)
                    }
                }
                return y
            }
        },
        "../node_modules/lodash/_castArrayLikeObject.js": (e, t, n) => {
            var r = n("../node_modules/lodash/isArrayLikeObject.js");
            e.exports = function(e) {
                return r(e) ? e : []
            }
        },
        "../node_modules/lodash/intersection.js": (e, t, n) => {
            var r = n("../node_modules/lodash/_arrayMap.js"),
                s = n("../node_modules/lodash/_baseIntersection.js"),
                o = n("../node_modules/lodash/_baseRest.js"),
                a = n("../node_modules/lodash/_castArrayLikeObject.js"),
                l = o((function(e) {
                    var t = r(e, a);
                    return t.length && t[0] === e[0] ? s(t) : []
                }));
            e.exports = l
        },
        "../node_modules/lodash/isArrayLikeObject.js": (e, t, n) => {
            var r = n("../node_modules/lodash/isArrayLike.js"),
                s = n("../node_modules/lodash/isObjectLike.js");
            e.exports = function(e) {
                return s(e) && r(e)
            }
        },
        "../node_modules/lodash/sample.js": (e, t, n) => {
            var r = n("../node_modules/lodash/_baseRandom.js");
            e.exports = function(e) {
                var t = e.length;
                return t ? e[r(0, t - 1)] : void 0
            }
        },
        "../node_modules/reselect/es/index.js": (e, t, n) => {
            "use strict";

            function r(e, t) {
                return e === t
            }

            function s(e, t, n) {
                if (null === t || null === n || t.length !== n.length) return !1;
                for (var r = t.length, s = 0; s < r; s++)
                    if (!e(t[s], n[s])) return !1;
                return !0
            }

            function o(e) {
                var t = Array.isArray(e[0]) ? e[0] : e;
                if (!t.every((function(e) {
                        return "function" == typeof e
                    }))) {
                    var n = t.map((function(e) {
                        return typeof e
                    })).join(", ");
                    throw new Error("Selector creators expect all input-selectors to be functions, instead received the following types: [" + n + "]")
                }
                return t
            }
            n.d(t, {
                P1: () => a
            });
            var a = function(e) {
                for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
                return function() {
                    for (var t = arguments.length, r = Array(t), s = 0; s < t; s++) r[s] = arguments[s];
                    var a = 0,
                        l = r.pop(),
                        m = o(r),
                        i = e.apply(void 0, [function() {
                            return a++, l.apply(null, arguments)
                        }].concat(n)),
                        c = e((function() {
                            for (var e = [], t = m.length, n = 0; n < t; n++) e.push(m[n].apply(null, arguments));
                            return i.apply(null, e)
                        }));
                    return c.resultFunc = l, c.dependencies = m, c.recomputations = function() {
                        return a
                    }, c.resetRecomputations = function() {
                        return a = 0
                    }, c
                }
            }((function(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : r,
                    n = null,
                    o = null;
                return function() {
                    return s(t, n, arguments) || (o = e.apply(null, arguments)), n = arguments, o
                }
            }))
        }
    }
]);
//# sourceMappingURL=CommentsArea.2ed16942af676053c1da.js.map