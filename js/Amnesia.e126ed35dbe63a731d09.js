(self.webpackChunk = self.webpackChunk || []).push([
    ["Amnesia"], {
        "./js/components/LoginForm.js": (e, a, t) => {
            "use strict";
            t.d(a, {
                Z: () => m
            });
            var s = t("../node_modules/react/index.js"),
                r = t("../node_modules/formik/dist/formik.esm.js"),
                o = t("./js/schemas/index.js"),
                l = t("./js/forms/Input.js"),
                n = t("./js/common/LaddaButton.js");

            function m({
                error: e,
                loading: a,
                hidePasswordField: t,
                showNameFields: m,
                buttonText: i,
                onSubmit: d
            }) {
                return s.createElement(r.J9, {
                    validateOnChange: !1,
                    validationSchema: (0, o.w)({
                        email: !0,
                        firstname: m,
                        lastname: m,
                        password: !t
                    }),
                    initialValues: {
                        firstname: "",
                        lastname: "",
                        password: "",
                        email: ""
                    },
                    onSubmit: d,
                    render: () => s.createElement(r.l0, null, e && s.createElement("p", null, s.createElement("span", {
                        className: "error-server error-msg"
                    }, e)), m && s.createElement("div", {
                        className: "form__row"
                    }, s.createElement(l.Z, {
                        type: "text",
                        id: "firstname",
                        name: "firstname",
                        label: "First name",
                        className: "form__field js-form-field blurred field--half",
                        autoComplete: "given-name",
                        autoCapitalize: "off",
                        spellCheck: "false",
                        autoCorrect: "off"
                    }), s.createElement(l.Z, {
                        type: "text",
                        id: "lastname",
                        name: "lastname",
                        label: "Last name",
                        className: "form__field js-form-field blurred field--half",
                        autoComplete: "family-name",
                        autoCapitalize: "off",
                        spellCheck: "false",
                        autoCorrect: "off"
                    })), s.createElement(l.Z, {
                        type: "email",
                        name: "email",
                        label: "Your email",
                        autoComplete: "email",
                        autoCapitalize: "off",
                        spellCheck: "false",
                        autoCorrect: "off"
                    }), !t && s.createElement(l.Z, {
                        type: "password",
                        name: "password",
                        id: "password",
                        label: "Memorable password (yep, that one)",
                        autoComplete: "password",
                        autoCapitalize: "off",
                        spellCheck: "false",
                        autoCorrect: "off"
                    }), s.createElement("div", {
                        className: "btn--lined"
                    }, s.createElement(n.Z, {
                        type: "submit",
                        text: i,
                        processing: a
                    })))
                })
            }
        },
        "./js/containers/Amnesia.js": (e, a, t) => {
            "use strict";
            t.r(a), t.d(a, {
                default: () => n
            });
            var s = t("../node_modules/react/index.js"),
                r = t("../node_modules/react-redux/es/index.js"),
                o = t("./js/actions/index.js"),
                l = t("./js/components/LoginForm.js");
            const n = (0, r.$j)((({
                auth: e
            }) => ({
                loading: e.loading,
                error: e.error
            })), (e => ({
                recover: a => e((0, o.A9)(a))
            })))((function({
                loading: e,
                error: a,
                recover: t
            }) {
                return s.createElement(l.Z, {
                    hidePasswordField: !0,
                    hideRememberField: !0,
                    error: a && a.msg ? a.msg : a,
                    loading: e,
                    buttonText: e ? "Recovering..." : "Recover password →",
                    onSubmit: t
                })
            }))
        }
    }
]);
//# sourceMappingURL=Amnesia.e126ed35dbe63a731d09.js.map