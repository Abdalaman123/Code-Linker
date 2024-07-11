(self.webpackChunk = self.webpackChunk || []).push([
    ["MemberAccountDetails"], {
        "./js/common/Loader.js": (e, t, a) => {
            "use strict";
            a.d(t, {
                Z: () => n
            });
            var s = a("../node_modules/react/index.js");

            function n({
                inverted: e,
                inline: t
            }) {
                return s.createElement("div", {
                    className: "loader-wrapper " + (t ? "loader-wrapper--inline" : ""),
                    "aria-hidden": "true"
                }, s.createElement("div", {
                    className: ["search-loader", e ? "" : "search-loader--red"].join(" ")
                }, s.createElement("span", {
                    className: "loader"
                }), s.createElement("span", {
                    className: "loader"
                }), s.createElement("span", {
                    className: "loader"
                })))
            }
        },
        "./js/components/EditPasswordForm.js": (e, t, a) => {
            "use strict";
            a.d(t, {
                Z: () => m
            });
            var s = a("../node_modules/react/index.js"),
                n = a("../node_modules/formik/dist/formik.esm.js"),
                o = a("./js/forms/FormComponent.js"),
                l = a("./js/forms/Input.js"),
                r = a("./js/common/LaddaButton.js"),
                i = a("./js/schemas/index.js");
            class m extends o.Z {
                render() {
                    const {
                        buttonLabel: e
                    } = this.state, {
                        loading: t,
                        onSubmit: a
                    } = this.props;
                    return s.createElement("div", null, s.createElement(n.J9, {
                        validationSchema: (0, i.w)({
                            password: !0
                        }),
                        initialValues: {
                            password: ""
                        },
                        onSubmit: a,
                        render: () => s.createElement(n.l0, null, s.createElement(l.Z, {
                            label: "New password (e.g. honey-jar-carrot-cake)",
                            type: "password",
                            name: "password",
                            autoComplete: "new-password",
                            autoCapitalize: "off",
                            spellCheck: "false",
                            autoCorrect: "off"
                        }), s.createElement("p", {
                            className: "auth-modal__hint auth-modal__hint--left-aligned"
                        }, s.createElement("strong", null, "Hint"), ": Use a password manager or a passphrase (four random words like", " ", s.createElement("em", null, "honey-jar-carrot-cake"), ")."), s.createElement("div", {
                            className: "btn--lined btn--large"
                        }, s.createElement(r.Z, {
                            text: e,
                            processing: t
                        })))
                    }))
                }
            }
        },
        "./js/components/ShippingAddressForm.js": (e, t, a) => {
            "use strict";
            a.d(t, {
                Z: () => j
            });
            var s = a("../node_modules/@babel/runtime/helpers/esm/extends.js"),
                n = a("../node_modules/@babel/runtime/helpers/esm/defineProperty.js"),
                o = a("../node_modules/react/index.js"),
                l = a("../node_modules/formik/dist/formik.esm.js"),
                r = a("../node_modules/lodash/get.js"),
                i = a.n(r),
                m = a("./js/schemas/index.js"),
                c = a("./js/forms/FormComponent.js"),
                d = a("./js/forms/Input.js"),
                u = a("./js/forms/Autocomplete.js"),
                h = a("./js/constants/data/countries.json"),
                p = a.n(h),
                f = a("./js/constants/data/states.json"),
                g = a.n(f);
            class b extends c.Z {
                render() {
                    const {
                        legend: e,
                        className: t,
                        type: a,
                        name: s,
                        disabled: n
                    } = this.props, l = i()(this.props, "values." + s + ".country"), r = g()[l];
                    return o.createElement("fieldset", {
                        className: t
                    }, o.createElement("legend", null, e), o.createElement("div", {
                        className: "form__row"
                    }, o.createElement(d.Z, {
                        label: "First name",
                        className: "field--half",
                        name: s + ".firstname",
                        autoCapitalize: "words",
                        spellCheck: "false",
                        autoCorrect: "off",
                        disabled: n,
                        autoComplete: a + " given-name"
                    }), o.createElement(d.Z, {
                        label: "Last name",
                        className: "field--half",
                        name: s + ".lastname",
                        autoCapitalize: "words",
                        spellCheck: "false",
                        autoCorrect: "off",
                        disabled: n,
                        autoComplete: a + " family-name"
                    })), o.createElement("div", {
                        className: "form__row"
                    }, o.createElement(u.Z, {
                        label: "Country",
                        name: s + ".country",
                        className: "field--two-thirds",
                        items: p().filter((e => !e.disabled)),
                        autoComplete: a + " country",
                        autoCapitalize: "words",
                        spellCheck: "false",
                        autoCorrect: "off",
                        disabled: n
                    }), o.createElement(d.Z, {
                        label: "Postal code",
                        name: s + ".zip",
                        className: "field--one-third lining-figures-tnum",
                        autoCapitalize: "off",
                        spellCheck: "false",
                        autoCorrect: "off",
                        autoComplete: a + " postal-code",
                        disabled: n
                    })), o.createElement("div", {
                        className: "form__row"
                    }, o.createElement(d.Z, {
                        label: "City",
                        name: s + ".city",
                        className: r && "field--two-thirds",
                        autoCapitalize: "words",
                        spellCheck: "false",
                        autoCorrect: "off",
                        autoComplete: a + " address-level2",
                        disabled: n
                    }), o.createElement(u.Z, {
                        label: r ? r.label : "State / Province",
                        name: s + ".state",
                        className: r ? "field--one-third" : "form__field__hidden",
                        autoCapitalize: "on",
                        spellCheck: "false",
                        autoCorrect: "off",
                        autoComplete: a + " region",
                        items: r ? r.states : [],
                        disabled: n
                    })), o.createElement("div", {
                        className: "form__row"
                    }, o.createElement(d.Z, {
                        label: "Street address",
                        name: s + ".address",
                        className: "field--two-thirds",
                        autoCapitalize: "words",
                        spellCheck: "false",
                        autoCorrect: "off",
                        autoComplete: a + " address-line1",
                        disabled: n
                    }), o.createElement(d.Z, {
                        label: "Apt / Suite (optional)",
                        name: s + ".address2",
                        className: "field--one-third lining-figures-tnum",
                        autoCapitalize: "on",
                        spellCheck: "false",
                        autoCorrect: "off",
                        autoComplete: a + " address-line2",
                        disabled: n
                    })), o.createElement("div", {
                        className: "form__row"
                    }, o.createElement(d.Z, {
                        label: "Company (optional)",
                        name: s + ".company",
                        autoCapitalize: "off",
                        spellCheck: "false",
                        autoCorrect: "off",
                        autoComplete: a + " organization",
                        disabled: n
                    })))
                }
            }
            var E = a("./js/common/LaddaButton.js"),
                v = a("./js/forms/Checkbox.js"),
                w = a("./js/helpers/index.js"),
                _ = a("./js/utils/scrollTo.js");

            function y(e, t) {
                var a = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var s = Object.getOwnPropertySymbols(e);
                    t && (s = s.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), a.push.apply(a, s)
                }
                return a
            }

            function C(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var a = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? y(Object(a), !0).forEach((function(t) {
                        (0, n.Z)(e, t, a[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a)) : y(Object(a)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(a, t))
                    }))
                }
                return e
            }
            class j extends c.Z {
                constructor(...e) {
                    super(...e), this.onLoginClick = e => {
                        e.preventDefault(), (0, w.Ps)("/checkout/"), window.location.replace("/auth/")
                    }, this.onScrollClick = e => !e.preventDefault() && (0, _.Z)(".checkbox-controlled-section")
                }
                render() {
                    const {
                        buttonLabel: e
                    } = this.state, {
                        loading: t,
                        onSubmit: a,
                        className: n,
                        data: r,
                        full: i,
                        onChange: c,
                        requiresShipping: u
                    } = this.props, h = (0, m.w)({
                        shippingAddress: u,
                        sameAddress: u,
                        billingAddress: !0,
                        email: i
                    });
                    return r.sameAddress && u && (r.billingAddress = C({}, r.shippingAddress)), o.createElement(l.J9, {
                        validateOnChange: !1,
                        validationSchema: h,
                        validate: e => {
                            e.sameAddress && u && (e.billingAddress = C({}, e.shippingAddress)), u || (e.shippingAddress = C({}, e.billingAddress)), h.validate(e).then((() => c && c(e))).catch((e => {
                                throw e.errors
                            }))
                        },
                        initialValues: r,
                        onSubmit: a,
                        render: a => {
                            const {
                                values: {
                                    sameAddress: r
                                },
                                isValid: m,
                                isSubmitting: c,
                                isValidating: h
                            } = a;
                            return !c || h || t || m || (0, _.H)(), o.createElement(l.l0, {
                                className: n
                            }, i && o.createElement("fieldset", null, o.createElement("legend", null, "Customer Details", " ", o.createElement("span", {
                                className: "form__text grey elena thin smaller"
                            }, "(Already have an account?", " ", o.createElement("a", {
                                href: "/auth/",
                                onClick: this.onLoginClick
                            }, "Log in)"))), o.createElement(d.Z, {
                                label: "Email",
                                name: "email",
                                type: "email",
                                autoCapitalize: "off",
                                spellCheck: "false",
                                autoCorrect: "off",
                                autoComplete: "shipping home email",
                                disabled: t
                            })), u && o.createElement(b, (0, s.Z)({
                                name: "shippingAddress",
                                type: "shipping",
                                legend: o.createElement("span", null, "Shipping Address"),
                                disabled: t
                            }, a)), u && o.createElement(v.Z, {
                                id: "use-same-address",
                                className: "section-hider",
                                name: "sameAddress",
                                label: () => o.createElement("span", null, "Use my shipping address as my billing address. ", !r && o.createElement("a", {
                                    href: "#",
                                    onClick: this.onScrollClick
                                }, "Scroll down ↓"))
                            }), (!r || !u) && o.createElement(b, (0, s.Z)({
                                className: "checkbox-controlled-section",
                                legend: "Billing Address",
                                name: "billingAddress",
                                type: "billing"
                            }, a)), o.createElement("label", {
                                className: "form__field form__field--checkbox"
                            }, o.createElement("input", {
                                type: "checkbox"
                            }), o.createElement("span", {
                                className: "form__field__label"
                            }, "I just like ticking off large checkboxes!")), o.createElement("div", {
                                className: "btn--lined btn--large"
                            }, o.createElement(E.Z, {
                                type: "submit",
                                text: e,
                                processing: t
                            })))
                        }
                    })
                }
            }
        },
        "./js/components/Teaser.js": (e, t, a) => {
            "use strict";
            a.d(t, {
                Z: () => n
            });
            var s = a("../node_modules/react/index.js");
            const n = e => {
                const {
                    children: t,
                    color: a,
                    icon: n
                } = e;
                return s.createElement("p", {
                    className: "membership__discount clearfix"
                }, s.createElement("small", {
                    className: "membership__discount--note membership__discount--note__simplified bg--light-" + a
                }, n && s.createElement("span", {
                    role: "img"
                }, n), t))
            }
        },
        "./js/containers/MemberAccountDetails.js": (e, t, a) => {
            "use strict";
            a.r(t), a.d(t, {
                default: () => S
            });
            var s = a("../node_modules/react/index.js"),
                n = a("../node_modules/react-redux/es/index.js"),
                o = a("../node_modules/smooth-scroll/dist/smooth-scroll.polyfills.min.js"),
                l = a.n(o),
                r = a("../node_modules/lodash/get.js"),
                i = a.n(r),
                m = a("./js/actions/index.js"),
                c = a("./js/actions/user.js"),
                d = a("./js/helpers/index.js"),
                u = a("../node_modules/formik/dist/formik.esm.js"),
                h = a("./js/forms/FormComponent.js"),
                p = a("./js/forms/Input.js"),
                f = a("./js/common/LaddaButton.js"),
                g = a("./js/schemas/index.js");
            const b = e => {
                const t = e && i()(e, "user_metadata") || {},
                    {
                        firstname: a,
                        lastname: s,
                        twitter: n
                    } = t,
                    {
                        email: o
                    } = e || {};
                return {
                    email: o,
                    lastname: s,
                    firstname: a,
                    twitter: n
                }
            };
            class E extends h.Z {
                render() {
                    const {
                        user: e,
                        loading: t,
                        onSubmit: a,
                        className: n
                    } = this.props, {
                        buttonLabel: o
                    } = this.state;
                    return s.createElement(u.J9, {
                        validationSchema: (0, g.w)({
                            email: !0,
                            firstname: !0,
                            lastname: !0,
                            twitter: !0
                        }),
                        initialValues: b(e),
                        onSubmit: a,
                        render: () => s.createElement(u.l0, {
                            className: n
                        }, s.createElement(p.Z, {
                            id: "email",
                            name: "email",
                            label: "Email",
                            type: "email",
                            autoCapitalize: "off",
                            autoComplete: "off",
                            spellCheck: "false",
                            autoCorrect: "off"
                        }), s.createElement("div", {
                            className: "form__row"
                        }, s.createElement(p.Z, {
                            id: "firstname",
                            label: "First name",
                            name: "firstname",
                            type: "text",
                            className: "field--half",
                            autoCapitalize: "words",
                            spellCheck: "false",
                            autoCorrect: "off"
                        }), s.createElement(p.Z, {
                            id: "lastname",
                            label: "Last name",
                            name: "lastname",
                            type: "text",
                            className: "field--half",
                            autoCapitalize: "words",
                            spellCheck: "false",
                            autoCorrect: "off"
                        })), s.createElement(p.Z, {
                            id: "twitter",
                            label: "Twitter (e.g. smashingmag)",
                            name: "twitter",
                            type: "text",
                            autoCapitalize: "off",
                            spellCheck: "false",
                            autoCorrect: "off"
                        }), s.createElement("div", {
                            className: "btn--lined btn--large"
                        }, s.createElement(f.Z, {
                            text: o,
                            processing: t
                        })))
                    })
                }
            }
            var v = a("./js/components/EditPasswordForm.js"),
                w = a("./js/components/ShippingAddressForm.js"),
                _ = a("./js/components/Teaser.js"),
                y = a("./js/common/Loader.js");
            const C = new(l()),
                j = e => C.animateScroll(document.querySelector(e)),
                S = (0, n.$j)((({
                    auth: e
                }) => ({
                    user: e.user,
                    loading: e.loading,
                    savingPersonalDetails: e.savingPersonalDetails,
                    savingPassword: e.savingPassword,
                    savingAddress: e.savingAddress,
                    emailChanged: e.emailChanged
                })), (e => ({
                    savePersonalDetails: t => e((0, c.gt)(t)),
                    changePassword: t => e((0, m.Cp)(t)),
                    saveUserMetadata: t => e((0, c.Nh)(t))
                })))((e => {
                    const {
                        loading: t,
                        user: a,
                        savingPersonalDetails: n,
                        savingPassword: o,
                        savingAddress: l,
                        emailChanged: r,
                        savePersonalDetails: m,
                        changePassword: c,
                        saveUserMetadata: u
                    } = e;
                    return s.createElement("div", null, s.createElement("div", {
                        className: "dashboard-membership__desc"
                    }, s.createElement("h2", {
                        className: "dashboard-membership__heading dashboard-membership__heading--main"
                    }, "Personal details."), s.createElement("div", {
                        className: "dashboard-membership__callout"
                    }, s.createElement("div", {
                        className: "dashboard-membership__explanation"
                    }, s.createElement("p", null, "Remember when somebody addressed you with a wrong name, but you just missed the time window to correct them? Well, not in here. We don", "'", "t want you to feel awkward among friends."), s.createElement("ul", null, s.createElement("li", null, "Update your", " ", s.createElement("a", {
                        href: "#",
                        onClick: (0, d.ZT)((() => j("#details")))
                    }, "name and email"), ","), s.createElement("li", null, "Update your", " ", s.createElement("a", {
                        href: "#",
                        onClick: (0, d.ZT)((() => j("#password")))
                    }, "password,")), s.createElement("li", null, "Update your", " ", s.createElement("a", {
                        href: "#",
                        onClick: (0, d.ZT)((() => j("#address")))
                    }, "shipping & billing addresses."))), s.createElement("p", null, s.createElement("strong", null, "We don", "'", "t store your credit card data"), ".", s.createElement("br", null), s.createElement("em", null, "Privacy matters"), ". But you knew it already,", " ", s.createElement("em", null, "didn", "'", "t you"), "?")), s.createElement("div", {
                        className: "dashboard-membership__visuals update-settings"
                    }, s.createElement("figure", {
                        className: "update-settings__personal"
                    }, s.createElement("img", {
                        alt: "Smashing Cat Waldo",
                        src: "../../images/smashing-cat/cat-waldo.svg"
                    }))))), s.createElement("div", {
                        className: "dashboard-membership__desc"
                    }, s.createElement("h2", {
                        id: "details",
                        className: "dashboard-membership__heading"
                    }, "Update your personal details."), s.createElement("div", {
                        className: "dashboard-membership__callout dashboard-membership__callout-no-visuals"
                    }, s.createElement("div", {
                        className: "dashboard-membership__explanation dashboard-membership__explanation-with-form"
                    }, s.createElement("p", null, "Not many people change their names regularly, but just in case you have to, here we go. ", s.createElement("strong", null, "Watch out for the email"), " we", "'", "ll send you for confirmation."), r && s.createElement("p", {
                        className: "comment__message-notification"
                    }, "Please check your inbox — a confirmation email is on its way!"), t ? s.createElement(y.Z, null) : s.createElement(E, {
                        user: a,
                        loading: n,
                        onSubmit: m
                    })))), s.createElement("div", {
                        className: "dashboard-membership__desc"
                    }, s.createElement("h2", {
                        id: "password",
                        className: "dashboard-membership__heading"
                    }, "Update your password."), s.createElement("div", {
                        className: "dashboard-membership__callout dashboard-membership__callout--password"
                    }, s.createElement("div", {
                        className: "dashboard-membership__explanation dashboard-membership__explanation-with-form"
                    }, s.createElement("p", null, "No limits on characters, no excessive requirements. Please", " ", s.createElement("strong", null, "double check your password"), " before saving it. It goes without saying: we care about your privacy and will keep your data safe."), s.createElement(v.Z, {
                        onSubmit: c,
                        loading: o
                    })), s.createElement("div", {
                        className: "dashboard-membership__visuals update-settings"
                    }, s.createElement("figure", {
                        className: "update-settings__password"
                    }, s.createElement("img", {
                        src: "/images/smashing-cat/cat-blindfolded-safe.svg",
                        alt: "We keep your data safe and secure. No peeking."
                    }))))), s.createElement("div", {
                        className: "dashboard-membership__desc row"
                    }, s.createElement("div", {
                        className: "col-3 l-bio-image--large mra"
                    }, s.createElement("figure", null, s.createElement("a", {
                        className: "books__book__image",
                        href: "/printed-books/smashing-magazine-print-1/"
                    }, s.createElement("div", {
                        className: '"books__book__img'
                    }, s.createElement("img", {
                        alt: "Smashing Print Magazine",
                        src: "https://archive.smashing.media/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/976f23ab-abb9-4e36-9693-f56b37aea955/smashing-print-product-image-opt.png"
                    }))))), s.createElement("div", {
                        className: "col-8"
                    }, s.createElement("h2", {
                        id: "address",
                        className: "dashboard-membership__heading"
                    }, "Update your shipping & billing addresses."), s.createElement("div", {
                        className: "dashboard-membership__callout"
                    }, s.createElement("div", {
                        className: "dashboard-membership__explanation dashboard-membership__explanation-with-form"
                    }, s.createElement("p", null, "Please keep your shipping & billing addresses updated, so we can send your books, magazines and other goodies to the right place. ", s.createElement("em", null, "Meowww.")), (0, d.Co)(a) && !(0, d.J9)(a) && s.createElement(_.Z, null, s.createElement("em", null, "You are smashing!"), " We'd love to ship", " ", s.createElement("strong", null, "printed goodies"), " to your doorstep — just update your shipping address below."), (0, d.Co)(a) && (0, d.J9)(a) && s.createElement(_.Z, {
                        color: "green",
                        icon: "✅"
                    }, " ", s.createElement("em", null, "Your address is successfully saved."), " Nothing else needs to be done. Yay!"), !(0, d.Co)(a) && s.createElement(_.Z, null, s.createElement("strong", null, "To double your discount on printed books"), ",", " ", s.createElement("a", {
                        href: "/membership/your-plan/"
                    }, "upgrade your plan"), " to", " ", s.createElement("em", null, "Smashing"), " ($9 a month) — just make sure to save or update your shipping address below."), t ? s.createElement(y.Z, null) : s.createElement(w.Z, {
                        data: i()(a, "user_metadata") || {},
                        onSubmit: u,
                        loading: l
                    }))))))
                }))
        },
        "./js/forms/Autocomplete.js": (e, t, a) => {
            "use strict";
            a.d(t, {
                Z: () => d
            });
            var s = a("../node_modules/@babel/runtime/helpers/esm/extends.js"),
                n = a("../node_modules/react/index.js"),
                o = a("../node_modules/formik/dist/formik.esm.js"),
                l = a("../node_modules/lodash/get.js"),
                r = a.n(l),
                i = a("../node_modules/react-uid/dist/es2015/uid.js"),
                m = a("./js/forms/Input.js");
            class c extends n.Component {
                constructor(...e) {
                    super(...e), this.state = {
                        selected: 0
                    }, this.handleChange = e => {
                        this.setState({
                            selected: 0,
                            autoComplete: "off",
                            suggestions: this.filterSuggestions(e.target.value)
                        })
                    }, this.handleFocus = (e, t) => {
                        const {
                            field: {
                                name: a
                            },
                            form: {
                                setFieldValue: s,
                                setFieldTouched: n
                            }
                        } = this.props, {
                            value: o
                        } = t.target;
                        if (e && !o) return !1;
                        if (e) this.setState({
                            selected: 0,
                            autoComplete: "off",
                            suggestions: this.filterSuggestions(o)
                        }, (() => {
                            n(a, !1, !1), s(a, o)
                        }));
                        else {
                            const e = this.filterSuggestions(o, !0);
                            n(a), s(a, r()(e, "[0]") || o), setTimeout((() => {
                                this.setState({
                                    selected: 0,
                                    suggestions: null
                                })
                            }), 100)
                        }
                    }, this.handleSuggestion = e => {
                        const {
                            field: {
                                name: t
                            },
                            form: {
                                setFieldValue: a,
                                setFieldTouched: s
                            }
                        } = this.props, {
                            textContent: n
                        } = e.target;
                        this.setState({
                            suggestions: null
                        }, (() => {
                            s(t), a(t, n)
                        }))
                    }, this.handleKeyDown = e => {
                        const {
                            value: t
                        } = e.target;
                        if ("ArrowUp" === e.key || "ArrowDown" === e.key) {
                            const a = "ArrowUp" === e.key ? -1 : 1;
                            let {
                                selected: s
                            } = this.state;
                            const n = this.filterSuggestions(t);
                            s += a, s >= n.length && (s = n.length - 1), s < 0 && (s = 0), this.setState({
                                selected: s
                            })
                        }
                    }, this.handleKeyPress = e => {
                        "Enter" === e.key && (e.preventDefault(), this.pickFirstSuggestion())
                    }, this.filterSuggestions = (e, t) => {
                        const {
                            items: a,
                            valueField: s
                        } = this.props, n = [];
                        if (!e) return t ? n : null;
                        for (let t = 0, o = a.length; t < o; t += 1) {
                            const o = Object.assign({}, a[t]),
                                l = new RegExp("^" + e.replace(/\s/, ".*"), "i");
                            (l.test(o.label) || l.test(o.value) || (o.alternatives || []).find((e => l.test(e)))) && (e && (o.boost = 0, o.label.toLowerCase() === e.toLowerCase() && (o.boost = 5), o.value.toLowerCase() === e.toLowerCase() && (o.boost = 10)), n.push({
                                value: o[s || "label"],
                                boost: o.boost || 0,
                                label: o.label,
                                alternatives: o.alternatives,
                                code: o.value
                            }))
                        }
                        return t || 1 !== n.length || n[0].value !== e ? n.sort(((e, t) => t.boost - e.boost)).map((e => e.value)).slice(0, 5) : null
                    }, this.pickFirstSuggestion = () => {
                        const {
                            field: {
                                value: e,
                                name: t
                            },
                            form: {
                                setFieldValue: a,
                                setFieldTouched: s
                            }
                        } = this.props, {
                            selected: n
                        } = this.state, o = this.filterSuggestions(e);
                        o && (s(t), a(t, o[n]), this.setState({
                            suggestions: null
                        }))
                    }
                }
                handleHover(e) {
                    return () => {
                        this.setState({
                            selected: e
                        })
                    }
                }
                render() {
                    const {
                        field: {
                            name: e
                        },
                        items: t
                    } = this.props, {
                        suggestions: a,
                        selected: o,
                        autoComplete: l
                    } = this.state, r = e.replace(/[^\w0-9_-]/g, "");
                    return n.createElement(m.I, (0, s.Z)({}, this.props, {
                        onInput: this.handleChange,
                        onChange: this.handleChange,
                        onKeyPress: this.handleKeyPress,
                        onKeyDown: this.handleKeyDown,
                        onFocus: e => this.handleFocus(!0, e),
                        onBlur: e => this.handleFocus(!1, e),
                        autoComplete: l || "on",
                        id: r
                    }), t.length > 0 && n.createElement("datalist", {
                        id: "datalist-" + r
                    }, n.createElement("option", {
                        value: t[0].label
                    })), a && n.createElement("ul", {
                        className: "field--suggestions"
                    }, a.map(((e, t) => n.createElement("li", {
                        key: (0, i.h)(e),
                        role: "option",
                        "aria-selected": o === t,
                        onMouseOver: this.handleHover(t),
                        className: "field--suggestion " + (o === t ? "field--suggestion__selected" : ""),
                        onClick: this.handleSuggestion
                    }, e)))))
                }
            }

            function d(e) {
                return n.createElement(o.gN, (0, s.Z)({
                    component: c
                }, e))
            }
        },
        "./js/forms/Checkbox.js": (e, t, a) => {
            "use strict";
            a.d(t, {
                Z: () => m
            });
            var s = a("../node_modules/@babel/runtime/helpers/esm/extends.js"),
                n = a("../node_modules/react/index.js"),
                o = a("../node_modules/lodash/isFunction.js"),
                l = a.n(o),
                r = a("../node_modules/formik/dist/formik.esm.js");

            function i(e) {
                const {
                    label: t,
                    className: a,
                    id: s,
                    field: {
                        name: o,
                        value: r,
                        onChange: i,
                        onBlur: m
                    }
                } = e, c = ["form__field", "form__field--checkbox"];
                return a && c.push(a), n.createElement("label", {
                    className: c.join(" ")
                }, n.createElement("input", {
                    id: s,
                    name: o,
                    type: "checkbox",
                    value: r,
                    checked: r,
                    onChange: t => {
                        e.onChange && e.onChange(t), i && i(t)
                    },
                    onBlur: t => {
                        e.onBlur && e.onBlur(t), m && m(t)
                    }
                }), n.createElement("span", {
                    className: "form__field__label"
                }, l()(t) ? t() : t))
            }

            function m(e) {
                return n.createElement(r.gN, (0, s.Z)({
                    component: i
                }, e))
            }
        },
        "./js/forms/FormComponent.js": (e, t, a) => {
            "use strict";
            a.d(t, {
                Z: () => n
            });
            var s = a("../node_modules/react/index.js");
            class n extends s.Component {
                constructor(e) {
                    super(e), this.state = {
                        saved: !1,
                        loading: !1,
                        buttonLabel: "Save Changes"
                    }
                }
                static getDerivedStateFromProps(e, t) {
                    const {
                        loading: a,
                        error: s
                    } = e;
                    let {
                        buttonLabel: n
                    } = e;
                    const o = t.loading && !a && !s;
                    return n || (n = a ? "Saving..." : o ? "Saved ✓" : "Save Changes"), {
                        loading: a,
                        saved: o,
                        buttonLabel: n
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
        "./js/utils/scrollTo.js": (e, t, a) => {
            "use strict";
            a.d(t, {
                H: () => l,
                Z: () => r
            });
            var s = a("../node_modules/smooth-scroll/dist/smooth-scroll.polyfills.min.js");
            const n = new(a.n(s)()),
                o = e => {
                    const t = "string" == typeof e ? document.querySelector(e) : e;
                    t && n.animateScroll(t)
                },
                l = () => {
                    const e = document.querySelector("[aria-live].error-msg");
                    e && o(e.closest(".form__field"))
                },
                r = o
        },
        "../node_modules/react-uid/dist/es2015/uid.js": (e, t, a) => {
            "use strict";
            a.d(t, {
                h: () => s
            });
            var s = function() {
                var e = 1,
                    t = new WeakMap,
                    a = function(s, n) {
                        return "number" == typeof s || "string" == typeof s ? n ? "idx-" + n : "val-" + s : t.has(s) ? "uid" + t.get(s) : (t.set(s, e++), a(s))
                    };
                return a
            }()
        },
        "../node_modules/smooth-scroll/dist/smooth-scroll.polyfills.min.js": function(e, t, a) {
            var s, n;
            window.Element && !Element.prototype.closest && (Element.prototype.closest = function(e) {
                    var t, a = (this.document || this.ownerDocument).querySelectorAll(e),
                        s = this;
                    do {
                        for (t = a.length; --t >= 0 && a.item(t) !== s;);
                    } while (t < 0 && (s = s.parentElement));
                    return s
                }),
                function() {
                    function e(e, t) {
                        t = t || {
                            bubbles: !1,
                            cancelable: !1,
                            detail: void 0
                        };
                        var a = document.createEvent("CustomEvent");
                        return a.initCustomEvent(e, t.bubbles, t.cancelable, t.detail), a
                    }
                    if ("function" == typeof window.CustomEvent) return !1;
                    e.prototype = window.Event.prototype, window.CustomEvent = e
                }(),
                function() {
                    for (var e = 0, t = ["ms", "moz", "webkit", "o"], a = 0; a < t.length && !window.requestAnimationFrame; ++a) window.requestAnimationFrame = window[t[a] + "RequestAnimationFrame"], window.cancelAnimationFrame = window[t[a] + "CancelAnimationFrame"] || window[t[a] + "CancelRequestAnimationFrame"];
                    window.requestAnimationFrame || (window.requestAnimationFrame = function(t, a) {
                        var s = (new Date).getTime(),
                            n = Math.max(0, 16 - (s - e)),
                            o = window.setTimeout((function() {
                                t(s + n)
                            }), n);
                        return e = s + n, o
                    }), window.cancelAnimationFrame || (window.cancelAnimationFrame = function(e) {
                        clearTimeout(e)
                    })
                }(), n = void 0 !== a.g ? a.g : "undefined" != typeof window ? window : this, void 0 === (s = function() {
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
                            a = function() {
                                return "querySelector" in document && "addEventListener" in e && "requestAnimationFrame" in e && "closest" in e.Element.prototype
                            },
                            s = function() {
                                for (var e = {}, t = 0; t < arguments.length; t++) ! function(t) {
                                    for (var a in t) t.hasOwnProperty(a) && (e[a] = t[a])
                                }(arguments[t]);
                                return e
                            },
                            n = function(t) {
                                return !(!("matchMedia" in e) || !e.matchMedia("(prefers-reduced-motion)").matches)
                            },
                            o = function(t) {
                                return parseInt(e.getComputedStyle(t).height, 10)
                            },
                            l = function(e) {
                                var t;
                                try {
                                    t = decodeURIComponent(e)
                                } catch (a) {
                                    t = e
                                }
                                return t
                            },
                            r = function(e) {
                                "#" === e.charAt(0) && (e = e.substr(1));
                                for (var t, a = String(e), s = a.length, n = -1, o = "", l = a.charCodeAt(0); ++n < s;) {
                                    if (0 === (t = a.charCodeAt(n))) throw new InvalidCharacterError("Invalid character: the input contains U+0000.");
                                    o += t >= 1 && t <= 31 || 127 == t || 0 === n && t >= 48 && t <= 57 || 1 === n && t >= 48 && t <= 57 && 45 === l ? "\\" + t.toString(16) + " " : t >= 128 || 45 === t || 95 === t || t >= 48 && t <= 57 || t >= 65 && t <= 90 || t >= 97 && t <= 122 ? a.charAt(n) : "\\" + a.charAt(n)
                                }
                                var r;
                                try {
                                    r = decodeURIComponent("#" + o)
                                } catch (e) {
                                    r = "#" + o
                                }
                                return r
                            },
                            i = function(e, t) {
                                var a;
                                return "easeInQuad" === e.easing && (a = t * t), "easeOutQuad" === e.easing && (a = t * (2 - t)), "easeInOutQuad" === e.easing && (a = t < .5 ? 2 * t * t : (4 - 2 * t) * t - 1), "easeInCubic" === e.easing && (a = t * t * t), "easeOutCubic" === e.easing && (a = --t * t * t + 1), "easeInOutCubic" === e.easing && (a = t < .5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1), "easeInQuart" === e.easing && (a = t * t * t * t), "easeOutQuart" === e.easing && (a = 1 - --t * t * t * t), "easeInOutQuart" === e.easing && (a = t < .5 ? 8 * t * t * t * t : 1 - 8 * --t * t * t * t), "easeInQuint" === e.easing && (a = t * t * t * t * t), "easeOutQuint" === e.easing && (a = 1 + --t * t * t * t * t), "easeInOutQuint" === e.easing && (a = t < .5 ? 16 * t * t * t * t * t : 1 + 16 * --t * t * t * t * t), e.customEasing && (a = e.customEasing(t)), a || t
                            },
                            m = function() {
                                return Math.max(document.body.scrollHeight, document.documentElement.scrollHeight, document.body.offsetHeight, document.documentElement.offsetHeight, document.body.clientHeight, document.documentElement.clientHeight)
                            },
                            c = function(t, a, s, n) {
                                var o = 0;
                                if (t.offsetParent)
                                    do {
                                        o += t.offsetTop, t = t.offsetParent
                                    } while (t);
                                return o = Math.max(o - a - s, 0), n && (o = Math.min(o, m() - e.innerHeight)), o
                            },
                            d = function(e) {
                                return e ? o(e) + e.offsetTop : 0
                            },
                            u = function(e, t, a) {
                                t || history.pushState && a.updateURL && history.pushState({
                                    smoothScroll: JSON.stringify(a),
                                    anchor: e.id
                                }, document.title, e === document.documentElement ? "#top" : "#" + e.id)
                            },
                            h = function(t, a, s) {
                                0 === t && document.body.focus(), s || (t.focus(), document.activeElement !== t && (t.setAttribute("tabindex", "-1"), t.focus(), t.style.outline = "none"), e.scrollTo(0, a))
                            },
                            p = function(t, a, s, n) {
                                if (a.emitEvents && "function" == typeof e.CustomEvent) {
                                    var o = new CustomEvent(t, {
                                        bubbles: !0,
                                        detail: {
                                            anchor: s,
                                            toggle: n
                                        }
                                    });
                                    document.dispatchEvent(o)
                                }
                            };
                        return function(o, f) {
                            var g, b, E, v, w, _, y = {
                                    cancelScroll: function(e) {
                                        cancelAnimationFrame(_), _ = null, e || p("scrollCancel", g)
                                    },
                                    animateScroll: function(a, n, o) {
                                        var l = s(g || t, o || {}),
                                            r = "[object Number]" === Object.prototype.toString.call(a),
                                            f = r || !a.tagName ? null : a;
                                        if (r || f) {
                                            var b = e.pageYOffset;
                                            l.header && !E && (E = document.querySelector(l.header)), v || (v = d(E));
                                            var w, C, j, S = r ? a : c(f, v, parseInt("function" == typeof l.offset ? l.offset(a, n) : l.offset, 10), l.clip),
                                                k = S - b,
                                                N = m(),
                                                x = 0,
                                                A = function(t, s) {
                                                    var o = e.pageYOffset;
                                                    if (t == s || o == s || (b < s && e.innerHeight + o) >= N) return y.cancelScroll(!0), h(a, s, r), p("scrollStop", l, a, n), w = null, _ = null, !0
                                                },
                                                Z = function(t) {
                                                    w || (w = t), C = (x += t - w) / parseInt(l.speed, 10), j = b + k * i(l, C = C > 1 ? 1 : C), e.scrollTo(0, Math.floor(j)), A(j, S) || (_ = e.requestAnimationFrame(Z), w = t)
                                                };
                                            0 === e.pageYOffset && e.scrollTo(0, 0), u(a, r, l), p("scrollStart", l, a, n), y.cancelScroll(!0), e.requestAnimationFrame(Z)
                                        }
                                    }
                                },
                                C = function(t) {
                                    if (!n() && 0 === t.button && !t.metaKey && !t.ctrlKey && "closest" in t.target && (b = t.target.closest(o)) && "a" === b.tagName.toLowerCase() && !t.target.closest(g.ignore) && b.hostname === e.location.hostname && b.pathname === e.location.pathname && /#/.test(b.href)) {
                                        var a = r(l(b.hash)),
                                            s = g.topOnEmptyHash && "#" === a ? document.documentElement : document.querySelector(a);
                                        (s = s || "#top" !== a ? s : document.documentElement) && (t.preventDefault(), y.animateScroll(s, b))
                                    }
                                },
                                j = function(e) {
                                    if (null !== history.state && history.state.smoothScroll && history.state.smoothScroll === JSON.stringify(g) && history.state.anchor) {
                                        var t = document.querySelector(r(l(history.state.anchor)));
                                        t && y.animateScroll(t, null, {
                                            updateURL: !1
                                        })
                                    }
                                },
                                S = function(e) {
                                    w || (w = setTimeout((function() {
                                        w = null, v = d(E)
                                    }), 66))
                                };
                            return y.destroy = function() {
                                g && (document.removeEventListener("click", C, !1), e.removeEventListener("resize", S, !1), e.removeEventListener("popstate", j, !1), y.cancelScroll(), g = null, b = null, E = null, v = null, w = null, _ = null)
                            }, y.init = function(n) {
                                if (!a()) throw "Smooth Scroll: This browser does not support the required JavaScript methods and browser APIs.";
                                y.destroy(), g = s(t, n || {}), E = g.header ? document.querySelector(g.header) : null, v = d(E), document.addEventListener("click", C, !1), E && e.addEventListener("resize", S, !1), g.updateURL && g.popstate && e.addEventListener("popstate", j, !1)
                            }, y.init(f), y
                        }
                    }(n)
                }.apply(t, [])) || (e.exports = s)
        }
    }
]);
//# sourceMappingURL=MemberAccountDetails.c718f8285a2688a45adf.js.map