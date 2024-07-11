(self.webpackChunk = self.webpackChunk || []).push([
    ["CommentsCount"], {
        "./js/actions/comments.js": (t, e, n) => {
            "use strict";
            n.d(e, {
                tH: () => u,
                w: () => h,
                py: () => p
            });
            var s = n("./js/constants/actionTypes.js"),
                o = n("./js/helpers/index.js"),
                a = n("./js/utils/auth.js"),
                r = n("./js/constants/index.js"),
                c = n("./js/actions/index.js");
            const m = (t, e) => {
                    let n = (0, o.qZ)(t);
                    return e && (n = n.replace(/\.json$/, ".count.json")), fetch(n).then((t => t.ok ? t.json() : 404 === t.status ? [] : void 0))
                },
                u = t => e => {
                    e({
                        type: s.Z.COMMENTS_FETCH_START
                    }), m(t).then((n => e({
                        type: s.Z.COMMENTS_FETCH_SUCCESS,
                        comments: n,
                        thread: t
                    }))).catch((t => e({
                        type: s.Z.COMMENTS_FETCH_FAIL,
                        error: (0, o.jN)(t)
                    })))
                },
                h = t => e => {
                    e({
                        type: s.Z.COMMENTS_SUBMIT_START
                    });
                    const n = a.Z.currentUser(),
                        u = n ? n.jwt().catch(null) : Promise.resolve(null);
                    return e((0, c.Lt)({
                        name: t.name,
                        twitter: t.twitter
                    })), u.then((a => {
                        const c = {
                            "Content-Type": "application/json"
                        };
                        a && (c.Authorization = "Bearer " + a), fetch(r.Z.COMMENTS_API_BASE + t.thread, {
                            method: "POST",
                            headers: c,
                            body: JSON.stringify({
                                author: t.name,
                                body: t.message,
                                twitter: t.twitter,
                                email: n && n.email,
                                parent: t.parent
                            })
                        }).then((t => t.ok ? t.json() : Promise.reject(t))).then((() => m(t.thread))).then((n => e({
                            type: s.Z.COMMENTS_SUBMIT_SUCCESS,
                            comments: n,
                            thread: t.thread
                        }))).catch((t => e({
                            type: s.Z.COMMENTS_SUBMIT_FAIL,
                            error: (0, o.jN)(t)
                        })))
                    }))
                },
                p = t => e => {
                    e({
                        type: s.Z.COMMENTS_COUNT_START
                    }), m(t, 1).then((n => e({
                        type: s.Z.COMMENTS_COUNT_SUCCESS,
                        count: n.count,
                        thread: t
                    }))).catch((t => e({
                        type: s.Z.COMMENTS_COUNT_FAIL,
                        error: (0, o.jN)(t)
                    })))
                }
        },
        "./js/containers/CommentsCount.js": (t, e, n) => {
            "use strict";
            n.r(e), n.d(e, {
                default: () => c
            });
            var s = n("../node_modules/react/index.js"),
                o = n("../node_modules/react-redux/es/index.js"),
                a = n("./js/actions/comments.js");
            class r extends s.Component {
                constructor(...t) {
                    super(...t), this.render = () => {
                        const {
                            amount: t
                        } = this.props;
                        return t ? s.createElement("span", null, s.createElement("span", {
                            className: "small-caps"
                        }, t), " ", s.createElement("span", {
                            className: "comment-count"
                        }, "comment", t > 1 ? "s" : "")) : s.createElement("span", null, "0 ", s.createElement("span", {
                            className: "comment-count"
                        }, "comments"))
                    }
                }
                componentDidMount() {
                    const {
                        thread: t,
                        fetchCommentsCount: e
                    } = this.props;
                    e(t)
                }
            }
            const c = (0, o.$j)(((t, e) => ({
                amount: t.comments.amounts[e.thread] || 0
            })), (t => ({
                fetchCommentsCount: e => t((0, a.py)(e))
            })))(r)
        }
    }
]);
//# sourceMappingURL=CommentsCount.8a9acde8ab86701b126a.js.map