(self.webpackChunk = self.webpackChunk || []).push([
    ["MemberRecoverPassword"], {
        "./js/components/EditPasswordForm.js": (e, s, a) => {
            "use strict";
            a.d(s, {
                Z: () => m
            });
            var t = a("../node_modules/react/index.js"),
                r = a("../node_modules/formik/dist/formik.esm.js"),
                o = a("./js/forms/FormComponent.js"),
                n = a("./js/forms/Input.js"),
                l = a("./js/common/LaddaButton.js"),
                d = a("./js/schemas/index.js");
            class m extends o.Z {
                render() {
                    const {
                        buttonLabel: e
                    } = this.state, {
                        loading: s,
                        onSubmit: a
                    } = this.props;
                    return t.createElement("div", null, t.createElement(r.J9, {
                        validationSchema: (0, d.w)({
                            password: !0
                        }),
                        initialValues: {
                            password: ""
                        },
                        onSubmit: a,
                        render: () => t.createElement(r.l0, null, t.createElement(n.Z, {
                            label: "New password (e.g. honey-jar-carrot-cake)",
                            type: "password",
                            name: "password",
                            autoComplete: "new-password",
                            autoCapitalize: "off",
                            spellCheck: "false",
                            autoCorrect: "off"
                        }), t.createElement("p", {
                            className: "auth-modal__hint auth-modal__hint--left-aligned"
                        }, t.createElement("strong", null, "Hint"), ": Use a password manager or a passphrase (four random words like", " ", t.createElement("em", null, "honey-jar-carrot-cake"), ")."), t.createElement("div", {
                            className: "btn--lined btn--large"
                        }, t.createElement(l.Z, {
                            text: e,
                            processing: s
                        })))
                    }))
                }
            }
        },
        "./js/containers/MemberRecoverPassword.js": (e, s, a) => {
            "use strict";
            a.r(s), a.d(s, {
                default: () => d
            });
            var t = a("../node_modules/react/index.js"),
                r = a("../node_modules/react-redux/es/index.js"),
                o = a("./js/actions/index.js"),
                n = a("./js/components/EditPasswordForm.js");
            class l extends t.Component {
                constructor(e) {
                    super(e), this.state = {
                        saved: !1
                    }
                }
                componentDidMount() {
                    const {
                        loading: e,
                        getUser: s
                    } = this.props;
                    e || s()
                }
                static getDerivedStateFromProps(e, s) {
                    const {
                        savingPassword: a,
                        error: t
                    } = e;
                    return {
                        saved: s.savingPassword && !a && !t,
                        savingPassword: a
                    }
                }
                render() {
                    const {
                        changePassword: e,
                        savingPassword: s,
                        user: a
                    } = this.props, {
                        saved: r
                    } = this.state;
                    return t.createElement("section", {
                        className: "block bg--red"
                    }, t.createElement("div", {
                        className: "container"
                    }, t.createElement("div", {
                        className: "auth-container"
                    }, t.createElement("div", {
                        className: "auth-modal-wrapper auth-modal-wrapper--recover-password",
                        id: "auth-modal-wrapper"
                    }, t.createElement("div", {
                        className: "auth-modal auth-modal--white"
                    }, t.createElement("div", {
                        className: "auth-modal__desc"
                    }, t.createElement("div", {
                        className: "auth-modal__container"
                    }, t.createElement("h2", {
                        className: "auth-modal-title"
                    }, r ? "Well done, " + a.user_metadata.firstname + "!" : "Set up a new password"), !r && t.createElement("small", null, "No limits on characters,", " ", t.createElement("strong", null, "no excessive rules or requirements"), ". Just pick a password that you can easily remember."), r && t.createElement("small", null, "Your password is now", " ", t.createElement("strong", {
                        className: "success"
                    }, "successfully saved"), ". No need to tattoo it though — you can always recover it — ", t.createElement("em", null, "obviously"), ".")), t.createElement("img", {
                        className: "auth-modal__passphrase",
                        src: "/images/smashing-cat/password.png",
                        alt: "Cat Password",
                        width: "350",
                        height: "335"
                    })), r && t.createElement("div", {
                        className: "btn--lined"
                    }, t.createElement("a", {
                        href: "/membership/"
                    }, t.createElement("button", {
                        type: "button",
                        className: "btn btn--green btn--medium auth__modal__btn"
                    }, "Go to your dashboard →"))), !r && t.createElement(n.Z, {
                        loading: s,
                        hideOldPassword: !0,
                        onSubmit: e
                    }))))))
                }
            }
            const d = (0, r.$j)((({
                auth: e
            }) => ({
                user: e.user,
                savingPassword: e.savingPassword,
                error: e.error,
                loading: e.loading
            })), (e => ({
                getUser: () => e((0, o.PR)()),
                changePassword: s => e((0, o.Cp)(s))
            })))(l)
        },
        "./js/forms/FormComponent.js": (e, s, a) => {
            "use strict";
            a.d(s, {
                Z: () => r
            });
            var t = a("../node_modules/react/index.js");
            class r extends t.Component {
                constructor(e) {
                    super(e), this.state = {
                        saved: !1,
                        loading: !1,
                        buttonLabel: "Save Changes"
                    }
                }
                static getDerivedStateFromProps(e, s) {
                    const {
                        loading: a,
                        error: t
                    } = e;
                    let {
                        buttonLabel: r
                    } = e;
                    const o = s.loading && !a && !t;
                    return r || (r = a ? "Saving..." : o ? "Saved ✓" : "Save Changes"), {
                        loading: a,
                        saved: o,
                        buttonLabel: r
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
        }
    }
]);
//# sourceMappingURL=MemberRecoverPassword.90df5c13995e3356cde3.js.map