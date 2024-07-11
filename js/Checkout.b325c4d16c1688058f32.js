(self.webpackChunk = self.webpackChunk || []).push([
    ["Checkout"], {
        "./js/common/Overlay.js": (e, t, a) => {
            "use strict";
            a.d(t, {
                Z: () => r
            });
            var s = a("../node_modules/react/index.js"),
                n = a("../node_modules/react-dom/index.js");
            const l = document.createElement("div");
            document.body.appendChild(l);
            class r extends s.Component {
                componentDidUpdate() {
                    const {
                        visible: e
                    } = this.props;
                    if (void 0 !== e) {
                        const t = e ? "add" : "remove",
                            a = document.querySelector("#cart");
                        a && a.classList[t]("hidden")
                    }
                }
                render() {
                    const {
                        visible: e,
                        onClose: t,
                        verbose: a,
                        wide: r,
                        children: o
                    } = this.props, c = s.createElement("section", {
                        className: "overlay " + (e ? "show" : "hide"),
                        "aria-hidden": !e,
                        tabIndex: "-1",
                        onClick: e => {
                            e.preventDefault(), t && t(e)
                        },
                        ref: e => {
                            this.el = e
                        },
                        role: "presentation"
                    }, s.createElement("div", {
                        className: "overlay__content-wrapper"
                    }, s.createElement("div", {
                        className: "overlay__content " + (a ? "overlay__content--verbose " : "") + " " + (r ? " overlay__content--wide " : ""),
                        onClick: e => e.stopPropagation(),
                        role: "presentation"
                    }, e ? o : null, s.createElement("button", {
                        type: "button",
                        onClick: e => {
                            e.preventDefault(), t && t(e)
                        },
                        className: "overlay-close-button",
                        "aria-label": "close"
                    }, s.createElement("span", {
                        className: "button__label sr-only"
                    }, "Close")))));
                    return n.createPortal(c, l)
                }
            }
        },
        "./js/components/Empty.js": (e, t, a) => {
            "use strict";
            a.d(t, {
                Z: () => n
            });
            var s = a("../node_modules/react/index.js");
            const n = e => {
                const {
                    title: t,
                    children: a
                } = e;
                return s.createElement("div", {
                    className: "container"
                }, s.createElement("div", {
                    className: "row dashboard__empty-state"
                }, s.createElement("div", {
                    className: "col col-12 "
                }, s.createElement("h2", null, t), a, s.createElement("img", {
                    src: "/images/smashing-cat/cat-waldo.svg",
                    width: "375",
                    alt: "Sometimes cats get lost, too."
                }))))
            }
        },
        "./js/components/ShippingAddressForm.js": (e, t, a) => {
            "use strict";
            a.d(t, {
                Z: () => k
            });
            var s = a("../node_modules/@babel/runtime/helpers/esm/extends.js"),
                n = a("../node_modules/@babel/runtime/helpers/esm/defineProperty.js"),
                l = a("../node_modules/react/index.js"),
                r = a("../node_modules/formik/dist/formik.esm.js"),
                o = a("../node_modules/lodash/get.js"),
                c = a.n(o),
                i = a("./js/schemas/index.js"),
                m = a("./js/forms/FormComponent.js"),
                d = a("./js/forms/Input.js"),
                u = a("./js/forms/Autocomplete.js"),
                p = a("./js/constants/data/countries.json"),
                h = a.n(p),
                E = a("./js/constants/data/states.json"),
                g = a.n(E);
            class b extends m.Z {
                render() {
                    const {
                        legend: e,
                        className: t,
                        type: a,
                        name: s,
                        disabled: n
                    } = this.props, r = c()(this.props, "values." + s + ".country"), o = g()[r];
                    return l.createElement("fieldset", {
                        className: t
                    }, l.createElement("legend", null, e), l.createElement("div", {
                        className: "form__row"
                    }, l.createElement(d.Z, {
                        label: "First name",
                        className: "field--half",
                        name: s + ".firstname",
                        autoCapitalize: "words",
                        spellCheck: "false",
                        autoCorrect: "off",
                        disabled: n,
                        autoComplete: a + " given-name"
                    }), l.createElement(d.Z, {
                        label: "Last name",
                        className: "field--half",
                        name: s + ".lastname",
                        autoCapitalize: "words",
                        spellCheck: "false",
                        autoCorrect: "off",
                        disabled: n,
                        autoComplete: a + " family-name"
                    })), l.createElement("div", {
                        className: "form__row"
                    }, l.createElement(u.Z, {
                        label: "Country",
                        name: s + ".country",
                        className: "field--two-thirds",
                        items: h().filter((e => !e.disabled)),
                        autoComplete: a + " country",
                        autoCapitalize: "words",
                        spellCheck: "false",
                        autoCorrect: "off",
                        disabled: n
                    }), l.createElement(d.Z, {
                        label: "Postal code",
                        name: s + ".zip",
                        className: "field--one-third lining-figures-tnum",
                        autoCapitalize: "off",
                        spellCheck: "false",
                        autoCorrect: "off",
                        autoComplete: a + " postal-code",
                        disabled: n
                    })), l.createElement("div", {
                        className: "form__row"
                    }, l.createElement(d.Z, {
                        label: "City",
                        name: s + ".city",
                        className: o && "field--two-thirds",
                        autoCapitalize: "words",
                        spellCheck: "false",
                        autoCorrect: "off",
                        autoComplete: a + " address-level2",
                        disabled: n
                    }), l.createElement(u.Z, {
                        label: o ? o.label : "State / Province",
                        name: s + ".state",
                        className: o ? "field--one-third" : "form__field__hidden",
                        autoCapitalize: "on",
                        spellCheck: "false",
                        autoCorrect: "off",
                        autoComplete: a + " region",
                        items: o ? o.states : [],
                        disabled: n
                    })), l.createElement("div", {
                        className: "form__row"
                    }, l.createElement(d.Z, {
                        label: "Street address",
                        name: s + ".address",
                        className: "field--two-thirds",
                        autoCapitalize: "words",
                        spellCheck: "false",
                        autoCorrect: "off",
                        autoComplete: a + " address-line1",
                        disabled: n
                    }), l.createElement(d.Z, {
                        label: "Apt / Suite (optional)",
                        name: s + ".address2",
                        className: "field--one-third lining-figures-tnum",
                        autoCapitalize: "on",
                        spellCheck: "false",
                        autoCorrect: "off",
                        autoComplete: a + " address-line2",
                        disabled: n
                    })), l.createElement("div", {
                        className: "form__row"
                    }, l.createElement(d.Z, {
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
            var _ = a("./js/common/LaddaButton.js"),
                f = a("./js/forms/Checkbox.js"),
                y = a("./js/helpers/index.js"),
                v = a("./js/utils/scrollTo.js");

            function N(e, t) {
                var a = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var s = Object.getOwnPropertySymbols(e);
                    t && (s = s.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), a.push.apply(a, s)
                }
                return a
            }

            function w(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var a = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? N(Object(a), !0).forEach((function(t) {
                        (0, n.Z)(e, t, a[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a)) : N(Object(a)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(a, t))
                    }))
                }
                return e
            }
            class k extends m.Z {
                constructor(...e) {
                    super(...e), this.onLoginClick = e => {
                        e.preventDefault(), (0, y.Ps)("/checkout/"), window.location.replace("/auth/")
                    }, this.onScrollClick = e => !e.preventDefault() && (0, v.Z)(".checkbox-controlled-section")
                }
                render() {
                    const {
                        buttonLabel: e
                    } = this.state, {
                        loading: t,
                        onSubmit: a,
                        className: n,
                        data: o,
                        full: c,
                        onChange: m,
                        requiresShipping: u
                    } = this.props, p = (0, i.w)({
                        shippingAddress: u,
                        sameAddress: u,
                        billingAddress: !0,
                        email: c
                    });
                    return o.sameAddress && u && (o.billingAddress = w({}, o.shippingAddress)), l.createElement(r.J9, {
                        validateOnChange: !1,
                        validationSchema: p,
                        validate: e => {
                            e.sameAddress && u && (e.billingAddress = w({}, e.shippingAddress)), u || (e.shippingAddress = w({}, e.billingAddress)), p.validate(e).then((() => m && m(e))).catch((e => {
                                throw e.errors
                            }))
                        },
                        initialValues: o,
                        onSubmit: a,
                        render: a => {
                            const {
                                values: {
                                    sameAddress: o
                                },
                                isValid: i,
                                isSubmitting: m,
                                isValidating: p
                            } = a;
                            return !m || p || t || i || (0, v.H)(), l.createElement(r.l0, {
                                className: n
                            }, c && l.createElement("fieldset", null, l.createElement("legend", null, "Customer Details", " ", l.createElement("span", {
                                className: "form__text grey elena thin smaller"
                            }, "(Already have an account?", " ", l.createElement("a", {
                                href: "/auth/",
                                onClick: this.onLoginClick
                            }, "Log in)"))), l.createElement(d.Z, {
                                label: "Email",
                                name: "email",
                                type: "email",
                                autoCapitalize: "off",
                                spellCheck: "false",
                                autoCorrect: "off",
                                autoComplete: "shipping home email",
                                disabled: t
                            })), u && l.createElement(b, (0, s.Z)({
                                name: "shippingAddress",
                                type: "shipping",
                                legend: l.createElement("span", null, "Shipping Address"),
                                disabled: t
                            }, a)), u && l.createElement(f.Z, {
                                id: "use-same-address",
                                className: "section-hider",
                                name: "sameAddress",
                                label: () => l.createElement("span", null, "Use my shipping address as my billing address. ", !o && l.createElement("a", {
                                    href: "#",
                                    onClick: this.onScrollClick
                                }, "Scroll down ↓"))
                            }), (!o || !u) && l.createElement(b, (0, s.Z)({
                                className: "checkbox-controlled-section",
                                legend: "Billing Address",
                                name: "billingAddress",
                                type: "billing"
                            }, a)), l.createElement("label", {
                                className: "form__field form__field--checkbox"
                            }, l.createElement("input", {
                                type: "checkbox"
                            }), l.createElement("span", {
                                className: "form__field__label"
                            }, "I just like ticking off large checkboxes!")), l.createElement("div", {
                                className: "btn--lined btn--large"
                            }, l.createElement(_.Z, {
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
        "./js/containers/Checkout.js": (e, t, a) => {
            "use strict";
            a.r(t), a.d(t, {
                default: () => K
            });
            var s = a("../node_modules/@babel/runtime/helpers/esm/extends.js"),
                n = a("../node_modules/@babel/runtime/helpers/esm/defineProperty.js"),
                l = a("../node_modules/react/index.js"),
                r = a("../node_modules/react-redux/es/index.js"),
                o = a("../node_modules/smooth-scroll/dist/smooth-scroll.polyfills.min.js"),
                c = a.n(o),
                i = a("../node_modules/lodash/get.js"),
                m = a.n(i),
                d = a("../node_modules/lodash/isEmpty.js"),
                u = a.n(d),
                p = a("../node_modules/lodash/omit.js"),
                h = a.n(p),
                E = a("./js/selectors/index.js"),
                g = a("./js/actions/index.js"),
                b = a("./js/actions/commerce.js"),
                _ = a("./js/helpers/index.js"),
                f = (a("./js/components/Teaser.js"), a("./js/components/Empty.js")),
                y = a("./js/components/Confetti.js");
            const v = ["/checkout", "/checkout/payment", "/checkout/confirmation"],
                N = ({
                    active: e
                }) => l.createElement("section", {
                    className: "block"
                }, l.createElement("div", {
                    className: "row checkout__tabs-wrapper"
                }, l.createElement("div", {
                    className: "container checkout__tabs__breadcrumbs"
                }, l.createElement("ul", {
                    className: "checkout__tabs",
                    "aria-label": "checkout progress"
                }, l.createElement("li", {
                    className: "checkout__tab " + (e ? "" : "active")
                }, l.createElement("a", {
                    href: v[0],
                    "aria-current": !e
                }, l.createElement("span", {
                    className: "lining-figures-tnum"
                }, "1."), " Customer Details", " ", !e && l.createElement("span", {
                    className: "sr-only"
                }, "you are here"))), l.createElement("li", {
                    className: "checkout__tab " + (1 === e ? "active" : "")
                }, l.createElement("a", {
                    href: v[1],
                    "aria-current": 1 === e
                }, l.createElement("span", {
                    className: "lining-figures-tnum"
                }, "2."), " Payment Details", " ", 1 === e && l.createElement("span", {
                    className: "sr-only"
                }, "you are here"))), l.createElement("li", {
                    className: "checkout__tab " + (2 === e ? "active" : "")
                }, l.createElement("a", {
                    href: v[2],
                    "aria-current": 2 === e
                }, l.createElement("span", {
                    className: "lining-figures-tnum"
                }, "3."), " Review Order", " ", 2 === e && l.createElement("span", {
                    className: "sr-only"
                }, "you are here")))), l.createElement("nav", {
                    className: "checkout__tabs__breadcrumbs__mobile-nav"
                }, l.createElement("ul", null, l.createElement("li", null, l.createElement("a", {
                    className: e ? "" : "disabled",
                    href: e - 1 < 0 ? "#" : v[e - 1]
                }, l.createElement("button", {
                    type: "button",
                    disabled: !e && "disabled",
                    className: ["btn btn--small btn--white btn--white--bordered", e ? "" : "btn--disabled"].join(" ")
                }, "Prev"))), l.createElement("li", null, l.createElement("a", {
                    href: e + 1 < v.length ? v[e + 1] : "#",
                    disabled: 2 === e && "disabled"
                }, l.createElement("button", {
                    type: "button",
                    className: ["btn btn--small btn--white btn--white--bordered", 2 === e ? "btn--disabled" : ""].join(" ")
                }, "Next"))))))));
            var w = a("./js/common/LaddaButton.js");

            function k(e) {
                const {
                    cart: t,
                    editable: a,
                    onUpdate: s,
                    onAdd: n,
                    onRemove: r,
                    onDelete: o
                } = e;
                return l.createElement("ul", {
                    className: "checkout__receipt__items"
                }, t.items.map((e => l.createElement("li", {
                    key: e.id,
                    className: "checkout__receipt__item"
                }, l.createElement("a", {
                    href: e.path
                }, l.createElement("img", {
                    className: "checkout__receipt__item-image",
                    src: m()(e, "product.images[0].file.url"),
                    alt: m()(e, "product.name")
                })), l.createElement("h5", {
                    "aria-level": "2",
                    className: "checkout__receipt__item__title"
                }, m()(e, "product.name")), l.createElement("p", {
                    className: "checkout__receipt__item__desc"
                }, (0, _.s6)(e), e.addons && " + " + e.addons.map((e => e.title)).join(", ")), l.createElement("div", {
                    className: "lining-figures-tnum"
                }, l.createElement("span", {
                    className: "product-count grey lining-figures-tnum"
                }, e.quantity), " ", l.createElement("span", {
                    className: "grey"
                }, "×"), " ", "USD" === t.currency && l.createElement("span", {
                    className: "product-currency"
                }, "$"), l.createElement("span", {
                    className: "product-price lining-figures-tnum"
                }, e.addonPrice ? "(" + e.price.amount + " + " + e.addonPrice.amount + ")" : e.price), "EUR" === t.currency && l.createElement("span", {
                    className: "product-currency"
                }, "€"), a && (e => (0, _.Xg)((0, _.s6)(e)) ? l.createElement("label", {
                    htmlFor: "count-1",
                    className: "form__field checkout__receipt__amount"
                }, l.createElement("div", {
                    className: "increment-decrement-input-wrapper"
                }, l.createElement("input", {
                    className: "form__field__input",
                    type: "number",
                    name: "count",
                    id: "count-1",
                    value: e.quantity,
                    onChange: s(e),
                    min: "1",
                    max: "10",
                    inputMode: "decimal"
                }), l.createElement("button", {
                    type: "button",
                    className: "increment-button count-button",
                    "aria-controls": "count-2",
                    onClick: n(e)
                }, "+"), l.createElement("button", {
                    type: "button",
                    className: "decrement-button count-button",
                    "aria-controls": "count-2",
                    onClick: r(e)
                }, "-")), l.createElement("span", {
                    className: "error-msg"
                })) : l.createElement("a", {
                    href: "#",
                    onClick: o(e),
                    className: "form__field checkout__receipt__amount"
                }, "Remove"))(e))))))
            }

            function C(e) {
                const {
                    cart: t,
                    shippingAddress: a,
                    onRemoveCoupon: s
                } = e, {
                    coupon: n
                } = t, r = (0, _.PX)(a.country, t), o = a.country ? (0, _.WB)(a.country) : null;
                return l.createElement("div", null, l.createElement("div", {
                    className: "receipt__row"
                }, l.createElement("table", {
                    className: "checkout__receipt__costs"
                }, l.createElement("tbody", null, l.createElement("tr", null, l.createElement("th", {
                    scope: "row"
                }, "Subtotal"), l.createElement("td", {
                    className: "checkout__receipt__subtotal"
                }, (0, _.dN)(t.subTotal, t.currency))), n && l.createElement("tr", {
                    className: "checkout__coupon"
                }, l.createElement("th", {
                    scope: "row"
                }, l.createElement("span", {
                    className: "coupon-code"
                }, n.code)), l.createElement("td", {
                    className: "lining-figures-tnum coupon-sum"
                }, "-", (0, _.dN)(n.amount, t.currency), " ", l.createElement("a", {
                    href: "#",
                    onClick: s,
                    className: "checkout__coupon_remove"
                }, "✕"))), !!m()(t, "discountTotal") && l.createElement("tr", {
                    className: "checkout__coupon"
                }, l.createElement("th", {
                    scope: "row"
                }, l.createElement("span", {
                    className: "membership-coupon"
                }, "Discount", " ", l.createElement("span", {
                    className: "membership-emoji",
                    role: "img",
                    "aria-label": "lion"
                }, "✂️"))), l.createElement("td", {
                    className: "lining-figures-tnum coupon-sum"
                }, "-", (0, _.dN)(t.discountTotal, t.currency))), l.createElement("tr", {
                    className: "checkout__estimated"
                }, l.createElement("th", {
                    scope: "row"
                }, "Taxes"), l.createElement("td", {
                    className: "checkout__receipt__subtotal"
                }, (0, _.dN)(t.taxTotal, t.currency))), (0, _.S6)(t) && l.createElement("tr", null, l.createElement("th", {
                    scope: "row"
                }, "Airmail Shipping"), l.createElement("td", {
                    className: "shipping-highlight-costs"
                }, l.createElement("span", null, "Free"))), l.createElement("tr", {
                    className: "checkout__estimated-delivery"
                }, l.createElement("th", {
                    scope: "row"
                }, "Pay by card or PayPal"), l.createElement("td", {
                    className: "lining-figures-tnum delivery-highlight"
                }, l.createElement("span", null, "Free"))), (0, _.S6)(t) && l.createElement("tr", {
                    className: "checkout__estimated-delivery"
                }, l.createElement("th", {
                    scope: "row"
                }, "Delivery Aim  ", l.createElement("span", {
                    className: "checkout__emoji"
                }, o)), l.createElement("td", {
                    className: "delivery-highlight"
                }, (0, _.z3)(r[0], r[1]))), l.createElement("tr", {
                    className: "checkout__being-smashing"
                }, l.createElement("th", {
                    scope: "row"
                }, "Feeling Smashing"), l.createElement("td", {
                    className: "shipping-highlight-costs"
                }, l.createElement("span", null, "Priceless")))))), l.createElement("div", {
                    className: "receipt__row checkout__receipt__total"
                }, l.createElement("div", {
                    className: "float--left"
                }, l.createElement("span", {
                    className: "small-caps"
                }, l.createElement("strong", null, "Total"), " ", l.createElement("span", {
                    className: "checkout__receipt__currency"
                }, t.currency)), l.createElement("br", null), !!t.taxTotal && l.createElement("small", {
                    className: "grey"
                }, "Including", " ", l.createElement("span", {
                    className: "lining-figures-tnum"
                }, (0, _.dN)(t.taxTotal, t.currency)), " ", "in taxes")), l.createElement("span", {
                    className: "checkout__receipt__total-price float--right"
                }, (0, _.dN)(t.grandTotal, t.currency))))
            }
            class j extends l.Component {
                constructor(...e) {
                    super(...e), this.state = {
                        open: !1
                    }, this.handleAdd = e => t => (console.log(e, e.id, e.quantity - 1), !t.preventDefault() && this.props.onUpdate(e.id, e.quantity + 1)), this.handleRemove = e => t => !t.preventDefault() && (e.quantity - 1 ? this.props.onUpdate(e.id, e.quantity - 1) : this.props.onDelete(e.id)), this.handleUpdate = e => t => !t.preventDefault() && this.props.onUpdate(e.id, parseInt(t.target.value, 10)), this.handleDelete = e => t => !t.preventDefault() && this.props.onDelete(e.id), this.handleApplyCoupon = e => !e.preventDefault() && this.props.onCoupon(this.couponInput.value), this.handleRemoveCoupon = e => !e.preventDefault() && this.props.onRemoveCoupon(null)
                }
                render() {
                    const {
                        cart: e,
                        couponError: t,
                        validatingCoupon: a
                    } = this.props;
                    let {
                        details: s
                    } = this.props;
                    const {
                        open: n
                    } = this.state;
                    if (s = s || {
                            shippingAddress: {},
                            billingAddress: {}
                        }, !e) return l.createElement("div", null);
                    const {
                        currency: r,
                        coupon: o
                    } = e;
                    return l.createElement("div", null, l.createElement("button", {
                        onClick: e => !e.preventDefault() && this.setState((e => ({
                            open: !e.open
                        }))),
                        type: "button",
                        className: "checkout__receipt-toggle btn btn--green btn--medium btn--full btn--text-shadow"
                    }, n ? "Hide Cart Details" : "Show Cart Details"), l.createElement("div", {
                        className: "checkout__receipt__dispenser ml-3 " + (n ? "open" : ""),
                        id: "the-checkout-receipt"
                    }, l.createElement("div", {
                        className: "checkout__receipt__wrapper"
                    }, l.createElement("div", {
                        className: "checkout__receipt"
                    }, l.createElement(k, {
                        cart: e,
                        editable: !0,
                        onUpdate: this.handleUpdate,
                        onAdd: this.handleAdd,
                        onRemove: this.handleRemove,
                        onDelete: this.handleDelete
                    }), l.createElement("div", {
                        className: "receipt__row"
                    }, l.createElement("form", {
                        className: "checkout__receipt__discount " + (o ? "success" : ""),
                        onSubmit: this.handleApplyCoupon
                    }, l.createElement("div", {
                        className: "input__coupon__wrapper"
                    }, l.createElement("input", {
                        "aria-label": "enter discount code",
                        type: "text",
                        className: "input__coupon " + (o ? "success" : ""),
                        disabled: o,
                        name: "discount",
                        readOnly: o,
                        defaultValue: o ? o.code : "",
                        placeholder: "Discount code",
                        autoComplete: "off",
                        ref: e => {
                            this.couponInput = e
                        }
                    }), o ? l.createElement(w.Z, {
                        key: "ladda-button-2",
                        className: "input__coupon__submit success",
                        disabled: !0,
                        text: "You save " + (0, _.bM)(o, r) + "!"
                    }) : l.createElement(w.Z, {
                        key: "ladda-button-1",
                        processing: a,
                        className: "input__coupon__submit btn--grey btn--grey--bordered",
                        text: "Cash in!"
                    })), t && l.createElement("span", {
                        className: "error-msg"
                    }, "Uh-oh! The code looks... fishy!", " ", l.createElement("span", {
                        role: "img",
                        "aria-label": "fish"
                    }, "🐟"), " ", "Why don", "'", "t you try, well, FISH instead?"))), l.createElement(C, {
                        onRemoveCoupon: this.handleRemoveCoupon,
                        cart: e,
                        coupon: o,
                        shippingAddress: s.shippingAddress
                    })))))
                }
            }
            var S = a("./js/components/ShippingAddressForm.js"),
                x = a("../node_modules/formik/dist/formik.esm.js"),
                P = a("./js/schemas/index.js"),
                D = a("./js/constants/index.js"),
                O = a("./js/utils/scrollTo.js"),
                A = a("./js/components/CreditCardForm.js");

            function Z({
                loading: e,
                firstname: t,
                lastname: a,
                error: n,
                handlePaymentConfirmation: r,
                handlePaypal: o
            }) {
                return l.createElement(x.J9, {
                    validateOnChange: !1,
                    validationSchema: (0, P.w)({
                        ccname: !0,
                        cc: !0
                    }),
                    initialValues: {
                        ccname: t ? t + " " + a : "",
                        cc: null
                    },
                    onSubmit: r,
                    render: t => {
                        const {
                            isValid: a,
                            isSubmitting: r,
                            isValidating: c
                        } = t;
                        return !r || c || e || a || (0, O.H)(), l.createElement(x.l0, null, l.createElement("fieldset", null, l.createElement("legend", {
                            className: "title--secure"
                        }, "Pay with PayPal"), l.createElement("div", {
                            className: "form__row"
                        }, l.createElement("div", {
                            id: "paypal-button",
                            style: {
                                maxWidth: "15em"
                            }
                        }))), l.createElement("p", {
                            className: "alert clearfix hidden"
                        }, l.createElement("small", null, l.createElement("span", {
                            role: "img",
                            "aria-label": "Warning!"
                        }, "⚠️"), "Uh-oh: we’re experiencing some technical issues with PayPal at the moment. Please use our fallback", " ", l.createElement("a", {
                            href: "https://shop.smashingmagazine.com/products/smashing-book-6-new-frontiers-in-web-design"
                        }, "Shopify shop"), " ", "if you prefer to pay via PayPal.")), l.createElement(A.Z, (0, s.Z)({}, t, {
                            handlePaypal: o,
                            isSwell: !0,
                            error: n
                        })), l.createElement("div", {
                            className: "btn--lined"
                        }, l.createElement(w.Z, {
                            type: "submit",
                            text: "Review Your Order →",
                            processing: e
                        })))
                    }
                })
            }
            var T = a("../node_modules/lodash/isString.js"),
                R = a.n(T);

            function U(e) {
                const {
                    title: t,
                    address: a,
                    editable: s,
                    link: n
                } = e;
                return l.createElement("div", {
                    className: "receipt__row"
                }, l.createElement("h5", {
                    "aria-level": "2",
                    className: "checkout__receipt__item__title"
                }, t), l.createElement("p", {
                    className: "checkout__receipt__item__desc"
                }, a.firstname, " ", a.lastname, l.createElement("br", null), a.company && l.createElement("div", null, a.company, l.createElement("br", null)), a.address, a.address2 && l.createElement("span", null, l.createElement("br", null), a.address2), l.createElement("br", null), a.zip, " ", a.city, a.state ? ", " + a.state : null, l.createElement("br", null), a.country), s && l.createElement("a", {
                    href: n,
                    className: "btn btn--small btn--white btn--white--bordered checkout__review__edit-address"
                }, "Edit"))
            }
            var z = a("../node_modules/react-uid/dist/es2015/uid.js"),
                q = a("./js/forms/FormComponent.js"),
                M = a("./js/common/Overlay.js"),
                I = a("./js/forms/Input.js");
            class L extends q.Z {
                render() {
                    const {
                        show: e,
                        loading: t,
                        email: a,
                        onHide: s,
                        onSubmit: n
                    } = this.props, {
                        saved: r
                    } = this.state, o = (0, P.w)({
                        email: !0
                    });
                    return l.createElement(x.J9, {
                        validateOnChange: !1,
                        validationSchema: o,
                        initialValues: {
                            email: a
                        },
                        onSubmit: n,
                        render: () => l.createElement(M.Z, {
                            visible: e,
                            onClose: s,
                            autofocus: !0
                        }, l.createElement(x.l0, {
                            className: "form--resend__email"
                        }, l.createElement("fieldset", null, l.createElement("legend", {
                            className: "legend--notes"
                        }, "Send confirmation to another email"), l.createElement("small", null, "Sometimes servers play ping-pong, or it just takes a while for a message to arrive. Re-send the confirmation to another email", " ", "—", " or just take a screenshot."), l.createElement(I.Z, {
                            label: "Your email",
                            type: "email",
                            name: "email"
                        }), l.createElement(w.Z, {
                            color: "green",
                            processing: t,
                            text: t ? "Sending..." : r ? "📨 Sent 🥳" : "Re-send confirmation →"
                        }))))
                    })
                }
            }
            class F extends q.Z {
                render() {
                    const {
                        show: e,
                        loading: t,
                        done: a,
                        onHide: s,
                        onSubmit: n,
                        error: r
                    } = this.props, o = (0, P.w)({
                        password: !0
                    });
                    return l.createElement(x.J9, {
                        validateOnChange: !1,
                        validationSchema: o,
                        initialValues: {
                            password: ""
                        },
                        onSubmit: n,
                        render: () => l.createElement(M.Z, {
                            visible: e,
                            onClose: s
                        }, !a && l.createElement(x.l0, {
                            className: "form--setting__password"
                        }, l.createElement("fieldset", null, l.createElement("legend", {
                            className: "legend--notes"
                        }, "Set a memorable password"), l.createElement("small", null, "No limits on characters, no rules or requirements. Just pick a password that you can easily remember."), r && l.createElement("p", null, l.createElement("p", {
                            className: "error-msg error-msg__standalone animation-shake"
                        }, r)), l.createElement(I.Z, {
                            label: "Passphrase (e.g. honey-jar-carrot-cake)",
                            type: "password",
                            name: "password"
                        }), l.createElement(w.Z, {
                            processing: t,
                            text: t ? "Saving..." : "Set password →"
                        }))), a && l.createElement("div", {
                            className: "auth-modal__desc"
                        }, l.createElement("div", {
                            className: "auth-modal__container"
                        }, l.createElement("h2", {
                            className: "auth-modal-title"
                        }, "Check your email!"), l.createElement("small", {
                            className: "auth-modal__desc--textblock"
                        }, l.createElement("em", null, "Boooo-yah!"), " Your $15 coupon code is", " ", l.createElement("code", {
                            className: "coupon"
                        }, "WELOVECATS"), " — please", " ", l.createElement("strong", null, "confirm your email to activate the discount"), "."), l.createElement("small", null, "Ah, you can use that fancy passphrase of yours to", " ", l.createElement("a", {
                            href: "/auth"
                        }, "sign into your dashboard"), " to track your orders. You", "'", "ll find some ", l.createElement("strong", null, "lovely goodies"), " there, too. ", l.createElement("em", null, "Meow!"))), l.createElement("img", {
                            alt: "Friendly Cat",
                            src: "../../images/smashing-cat/friendly-cat.png",
                            width: "250"
                        })))
                    })
                }
            }
            const V = new(c());
            class B extends l.Component {
                constructor(e) {
                    super(e), this.handleEmail = e => this.setState({
                        email: e.target.value
                    }), this.handlePassword = e => this.setState({
                        password: e.target.value
                    }), this.handleToggleResendModal = e => !e.preventDefault() && this.setState((e => ({
                        showResendModal: !e.showResendModal
                    }))), this.handleTogglePasswordModal = e => !e.preventDefault() && this.setState((e => ({
                        showPasswordModal: !e.showPasswordModal
                    }))), this.state = {
                        email: m()(e, "order.account.email"),
                        showResendModal: !1,
                        showPasswordModal: !1
                    }
                }
                componentDidMount() {
                    setTimeout((() => {
                        const e = document.querySelector(".checkout");
                        e && V.animateScroll(e)
                    }), 0)
                }
                render() {
                    const {
                        user: e,
                        order: t,
                        loading: a,
                        signedUp: s,
                        cart: n,
                        onResend: r,
                        onSignup: o,
                        error: c
                    } = this.props, {
                        email: i,
                        showResendModal: d,
                        showPasswordModal: u,
                        resent: p
                    } = this.state, h = m()(t, "downloads"), E = (0, _.QD)(t), g = (0, _.PX)(m()(t, "shipping_address.country"), t);
                    return l.createElement("div", null, l.createElement(L, {
                        show: d,
                        loading: a,
                        email: i,
                        saved: this.saved,
                        onHide: this.handleToggleResendModal,
                        onSubmit: e => r(t.id, e.email)
                    }), !e && l.createElement(F, {
                        show: u,
                        loading: a,
                        done: s,
                        onHide: this.handleTogglePasswordModal,
                        onSubmit: e => o(e.password),
                        error: c
                    }), l.createElement("section", {
                        className: "block"
                    }, l.createElement("div", {
                        className: "container checkout__success"
                    }, l.createElement("div", {
                        className: "row"
                    }, l.createElement("div", {
                        className: "col col-12"
                    }, l.createElement("div", {
                        className: "checkout__success__content__container"
                    }, l.createElement("div", {
                        className: "checkout__success__content"
                    }, t.canceled ? l.createElement("h2", {
                        className: "center green h1"
                    }, l.createElement("span", {
                        role: "img",
                        "aria-label": "Celebration"
                    }, "❌"), " ", "Order ", t.refunded && "refunded and ", " canceled") : l.createElement("h2", {
                        className: "center green h1"
                    }, l.createElement("span", {
                        role: "img",
                        "aria-label": "Celebration"
                    }, "🎊"), " ", "Yay, it worked!"), l.createElement("p", {
                        className: "center"
                    }, "Your order number is", " ", l.createElement("strong", {
                        className: "lining-figures-tnum"
                    }, "#", t.number), ".", l.createElement("br", null), l.createElement("br", null), !t.canceled && l.createElement("a", {
                        href: "/invoices/" + t.id + "/",
                        className: "btn btn--small btn--green"
                    }, "View and print your invoice →")), l.createElement("ul", null, e && !!m()(n, "memberTotalDiscount") && l.createElement("li", null, l.createElement("em", null, "Meow!"), " As ", l.createElement("em", null, "Smashing Member"), ",", " ", l.createElement("strong", {
                        className: "highlight"
                    }, "you just saved", " ", l.createElement("span", {
                        className: "lining-figures-tnum"
                    }, (0, _.dN)(n.memberTotalDiscount, n.currency))), " ", "on this purchase,"), E.includes("Book") && l.createElement("li", null, "We'll pack the bag with your printed book as soon as we can! Expected delivery:", " ", l.createElement("strong", null, (0, _.z3)(g[0], g[1])), "."), e && l.createElement("li", null, "You can always", " ", l.createElement("a", {
                        href: "/membership/downloads/"
                    }, "download your eBooks"), " ", "in your Membership dashboard."), l.createElement("li", null, "Ah, don't miss the next release:", " ", l.createElement("a", {
                        href: "https://www.smashingmagazine.com/the-smashing-newsletter/"
                    }, "subscribe to our lovely newsletter"), ". ❤️")), h && h.length ? l.createElement("div", null, l.createElement("h3", null, "Download Your eBooks"), l.createElement("p", null, (e || s) && l.createElement("span", null, "No need to backup the files — you can always find them", " ", l.createElement("a", {
                        href: "/membership/downloads/"
                    }, "in your dashboard"), ".")), l.createElement("ul", {
                        className: "checkout__success__downloads"
                    }, h.map((e => l.createElement("li", {
                        key: (0, z.h)(e)
                    }, l.createElement("a", {
                        download: !0,
                        target: "_blank",
                        href: e.url || D.Z.API_URL_ORDER_DOWNLOADS + "/" + t.id + "/products/" + e.productId + "/downloads/" + e.type
                    }, e.name), " ", e.type && l.createElement("span", {
                        className: "meta small-caps"
                    }, l.createElement("span", {
                        className: "decoration"
                    }, "— "), e.type)))), !e && !s && l.createElement("li", null, "Get your eBooks ", l.createElement("strong", null, "in your dashboard"), ", just", " ", l.createElement("a", {
                        href: "#",
                        onClick: this.handleTogglePasswordModal
                    }, "set up your password first"), "."))) : null, l.createElement("p", null, "If you have any questions, get in touch at", " ", l.createElement("em", null, l.createElement("a", {
                        href: "mailto:help@smashingmagazine.com"
                    }, "help@smashingmagazine.com")), ".")), l.createElement("p", {
                        className: "checkout__success__visual"
                    }, l.createElement("a", {
                        href: "/printed-books"
                    }, l.createElement("img", {
                        src: "/images/smashing-cat/checkout-cat.svg",
                        alt: "Thanks for your purchase!"
                    })))))))))
                }
            }
            a("../node_modules/lodash/uniqueId.js");
            class H extends q.Z {
                constructor(e) {
                    super(e), this.handleToggle = () => {
                        this.setState({
                            edit: !this.state.edit
                        }, (() => {
                            const e = document.getElementById(this.state.id);
                            e && e.focus()
                        }))
                    }, this.state = {
                        edit: !1
                    }
                }
                render() {
                    const {
                        className: e,
                        name: t,
                        value: a,
                        onSubmit: n
                    } = this.props, {
                        edit: r
                    } = this.state;
                    return l.createElement(x.J9, {
                        validationSchema: (0, P.w)({
                            [t]: !0
                        }),
                        initialValues: {
                            [t]: a
                        },
                        onSubmit: e => n(e[t]),
                        render: ({
                            values: a
                        }) => l.createElement(x.l0, {
                            className: ["form__field--inline", e].join(" ")
                        }, l.createElement("span", {
                            className: "checkout__review__email",
                            style: {
                                display: r ? "none" : "block"
                            }
                        }, a[t]), r && l.createElement(I.Z, (0, s.Z)({}, this.props, {
                            autoFocus: r
                        })), l.createElement("button", {
                            type: r ? "button" : "submit",
                            className: "checkout__review__email-editor btn btn--small btn--white btn--white--bordered",
                            onClick: this.handleToggle
                        }, r ? "Save" : "Edit"))
                    })
                }
            }
            class Y extends l.Component {
                constructor(...e) {
                    super(...e), this.handleEditEmail = e => this.props.setCustomerDetails({
                        email: e
                    }, !0), this.handleSignup = e => {
                        this.props.signup(m()(this.props.order, "account.email"), e, {
                            firstname: m()(this.props.order, "billing.firstName") || m()(this.props.order, "shipping.firstName"),
                            lastname: m()(this.props.order, "billing.lastName") || m()(this.props.order, "shipping.lastName")
                        }, !1)
                    }
                }
                renderError() {
                    const {
                        cart: e,
                        error: t
                    } = this.props;
                    return t ? l.createElement("div", {
                        className: "checkout__review__email-wrapper"
                    }, l.createElement("div", {
                        "aria-live": "assertive",
                        className: "error-msg error-msg__standalone animation-shake"
                    }, l.createElement("span", null, "Oh-oh, we had an issue processing your order. Please try again via", " ", l.createElement("a", {
                        href: "https://shop.smashingmagazine.com/products/job-listing"
                    }, "this link"), " ", "or send us a brief email:", " ", l.createElement("a", {
                        href: "mailto:help@smashingmagazine.com?subject=Problem with Job Listing Order"
                    }, "help@smashingmagazine.com"), ". We", "'", "ll reply asap!"), R()(t) ? l.createElement("div", null, l.createElement("br", null), t) : null)) : null
                }
                render() {
                    const {
                        putOrder: e,
                        cart: t,
                        user: a,
                        signedUp: s,
                        loading: n,
                        error: r,
                        order: o,
                        resendConfirmation: c
                    } = this.props, i = m()(t, "metadata.details");
                    return o && o.id ? l.createElement(B, {
                        cart: o || {},
                        user: a,
                        order: o,
                        error: r,
                        onResend: c,
                        onSignup: this.handleSignup,
                        signedUp: s,
                        loading: n
                    }) : l.createElement("section", {
                        className: "block checkout__tab-section"
                    }, l.createElement("div", {
                        className: "auth__container--checkout"
                    }, l.createElement("div", {
                        className: "auth__modal__wrapper"
                    }, l.createElement("h1", {
                        className: "center"
                    }, l.createElement("span", {
                        role: "img",
                        "aria-label": "popcorn"
                    }, "🍿"), " ", "Just one more thing..."), l.createElement("div", {
                        className: "checkout__confirmation"
                    }, l.createElement("span", {
                        className: "small center"
                    }, "Your order confirmation will be sent to:")), l.createElement("div", {
                        className: "checkout__review__email-wrapper"
                    }, l.createElement(H, {
                        value: i.email,
                        name: "email",
                        type: "email",
                        errorMessage: "⚠️️  Please enter your email. No fishy emails from us, we promise! 🐟",
                        autoCapitalize: "off",
                        spellCheck: "false",
                        autoCorrect: "off",
                        autoComplete: "shipping home email",
                        onSubmit: this.handleEditEmail
                    })), this.renderError(), l.createElement("div", {
                        className: "checkout__receipt checkout__review"
                    }, l.createElement(w.Z, {
                        className: "btn--secure btn--full btn--large ladda-button btn--text-shadow",
                        text: "Finish Checkout →",
                        processing: n,
                        onClick: e
                    }), l.createElement(k, {
                        cart: t
                    }), (0, _.S6)(t) && l.createElement(U, {
                        title: "Ship to:",
                        address: i.shippingAddress,
                        editable: !0,
                        link: "/checkout/"
                    }), l.createElement(U, {
                        title: "Bill to:",
                        address: i.billingAddress,
                        editable: !0,
                        link: "/checkout/"
                    }), l.createElement(C, {
                        cart: t,
                        shippingAddress: i.shippingAddress
                    }), l.createElement(w.Z, {
                        className: "btn--secure btn--full btn--large ladda-button btn--text-shadow",
                        text: "Finish Checkout →",
                        processing: n,
                        onClick: e
                    })), this.renderError())))
                }
            }

            function J(e, t) {
                var a = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var s = Object.getOwnPropertySymbols(e);
                    t && (s = s.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), a.push.apply(a, s)
                }
                return a
            }

            function W(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var a = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? J(Object(a), !0).forEach((function(t) {
                        (0, n.Z)(e, t, a[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a)) : J(Object(a)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(a, t))
                    }))
                }
                return e
            }
            const $ = new(c()),
                X = e => -1 !== e.indexOf("payment") ? 1 : -1 !== e.indexOf("confirmation") ? 2 : 0,
                G = () => {
                    const e = document.querySelector('input[name="cardnumber"]') || document.querySelector('input[name="email"]');
                    e && !e.value && e.focus()
                };
            class Q extends l.Component {
                constructor(e) {
                    super(e);
                    const {
                        checkRoute: t,
                        path: a
                    } = e;
                    t(a), this.state = {
                        step: 0,
                        needScrollTop: !1,
                        loading: !0
                    }
                }
                componentDidMount() {
                    const {
                        fetchCart: e,
                        fetchCartOrder: t,
                        step: a,
                        orderId: s,
                        getUser: n
                    } = this.props;
                    2 === a && s && t(s), e(!0), setTimeout(G, 250)
                }
                componentDidUpdate() {
                    const {
                        initPaymentRequest: e,
                        element: t,
                        orderId: a,
                        order: s,
                        fetchCartOrder: n
                    } = this.props, {
                        needScrollTop: l,
                        step: r,
                        loading: o
                    } = this.state;
                    1 === r && e();
                    const c = document.querySelector(".checkout__tabs");
                    if (l && c && $.animateScroll(c), setTimeout((() => l && G()), 600), !o) {
                        const e = t.querySelector("#loader");
                        e && e.remove()
                    }
                }
                static getDerivedStateFromProps(e, t) {
                    const {
                        step: a
                    } = t, {
                        step: s,
                        initialLoading: n
                    } = e;
                    return {
                        step: s,
                        needScrollTop: s !== a,
                        loading: n
                    }
                }
                render() {
                    const {
                        loading: e,
                        initialLoading: t,
                        cart: a,
                        step: n,
                        user: r,
                        order: o,
                        setCustomerDetails: c,
                        handleUpdate: i,
                        handleDelete: d,
                        handleCoupon: p,
                        handleRemoveCoupon: E
                    } = this.props, g = {
                        firstname: "",
                        lastname: "",
                        country: "",
                        city: "",
                        address: "",
                        state: ""
                    };
                    let b = m()(a, "metadata.details") || {
                        email: "",
                        shippingAddress: W({}, g),
                        billingAddress: W({}, g),
                        sameAddress: !0
                    };
                    return r && (b = h()(b, ["email"])), t ? null : u()(a.items) && !o.id ? l.createElement("section", {
                        className: "checkout__tab-section"
                    }, l.createElement(f.Z, {
                        title: "Cart is empty!"
                    }, l.createElement("p", {
                        className: "center"
                    }, "Uh-oh! There", "'", "s ", l.createElement("em", null, "literally"), " nothing in your shopping cart!", l.createElement("br", null), "Now, we", "'", "ve got", " ", l.createElement("strong", null, l.createElement("span", {
                        className: "small-caps"
                    }, "72"), " cats"), " ", "spread around the site.", l.createElement("br", null), "Some of them are hidden on our", " ", l.createElement("a", {
                        href: "/printed-books"
                    }, "book pages"), "."), l.createElement("p", {
                        className: "center"
                    }, l.createElement("a", {
                        href: "/printed-books",
                        className: "btn btn--white btn--white--bordered js-overlay-trigger"
                    }, "Take me to those pages →")))) : l.createElement("div", {
                        className: "checkout"
                    }, !o.id && l.createElement(N, {
                        active: n
                    }), 2 !== n && l.createElement("div", {
                        className: "container"
                    }, l.createElement("div", {
                        className: "row"
                    }, l.createElement("div", {
                        className: "col-xs-12 col-md-4 last-md checkout__receipt-container"
                    }, l.createElement(j, {
                        validatingCoupon: a.validatingCoupon,
                        couponError: a.couponError,
                        cart: a,
                        items: a.items,
                        onUpdate: i,
                        onDelete: d,
                        onCoupon: p,
                        onRemoveCoupon: E
                    })), l.createElement("div", {
                        className: "col-xs-12 col-md-8"
                    }, l.createElement("section", {
                        "data-tabs-pane": !0,
                        role: "tabpanel",
                        className: "block tabs-pane active checkout__tab-section"
                    }, !n && l.createElement(S.Z, {
                        onChange: e => c(e, 1),
                        onSubmit: e => c(e, 0),
                        requiresShipping: (0, _.S6)(a),
                        loading: e,
                        data: b,
                        buttonLabel: "Continue to Payment Details →",
                        full: !r
                    }), 1 === n ? l.createElement(Z, (0, s.Z)({
                        loading: e,
                        requiresShipping: (0, _.S6)(a)
                    }, this.props, {
                        isSwell: !0
                    })) : null)))), 2 === n ? l.createElement("div", null, o.id ? l.createElement(y.Z, null) : null, l.createElement(Y, (0, s.Z)({
                        loading: e
                    }, this.props))) : null)
                }
            }
            const K = (0, r.$j)((e => {
                const {
                    history: {
                        path: t
                    },
                    orders: a,
                    cart: s,
                    auth: n,
                    order: l
                } = e;
                return {
                    user: n.user,
                    path: t,
                    step: X(t),
                    orderId: m()(window.location.pathname.match(/\/checkout\/confirmation\/([a-z0-9]{12,})/), "[1]"),
                    order: (0, E.oU)("order")(e),
                    cart: (0, E.oU)()(e),
                    products: m()(e, "products.items"),
                    orders: a,
                    initialLoading: n.loading || s.isFetching,
                    loading: s.loading || n.loading,
                    firstname: m()(s, "metadata.details.billingAddress.firstname"),
                    lastname: m()(s, "metadata.details.billingAddress.lastname"),
                    error: s.error || n.error,
                    signedUp: n.signedUp
                }
            }), (e => ({
                setCustomerDetails: (t, a) => e((0, b.sI)(t, a)),
                fetchCartOrder: t => e((0, b.bg)(t)),
                fetchCart: t => e((0, b.x7)(t)),
                checkRoute: t => e((0, g.Jq)(t)),
                initPaymentRequest: () => e((0, g.IA)()),
                handlePaymentConfirmation: t => e((0, b.aH)(t)),
                handlePaypal: t => e((0, b.gd)(t)),
                handleUpdate: (t, a) => e((0, b.$G)(t, a)),
                handleDelete: t => e((0, b.cl)(t)),
                handleCoupon: t => e((0, b.zL)(t)),
                handleRemoveCoupon: () => e((0, b.SS)()),
                resendConfirmation: (t, a) => e((0, g.resendConfirmation)(t, a)),
                signup: (t, a, s, n) => e((0, g.IU)(t, a, s, n)),
                putOrder: () => e((0, b.i8)())
            })))(Q)
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
                    const l = t.loading && !a && !s;
                    return n || (n = a ? "Saving..." : l ? "Saved ✓" : "Save Changes"), {
                        loading: a,
                        saved: l,
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
                H: () => r,
                Z: () => o
            });
            var s = a("../node_modules/smooth-scroll/dist/smooth-scroll.polyfills.min.js");
            const n = new(a.n(s)()),
                l = e => {
                    const t = "string" == typeof e ? document.querySelector(e) : e;
                    t && n.animateScroll(t)
                },
                r = () => {
                    const e = document.querySelector("[aria-live].error-msg");
                    e && l(e.closest(".form__field"))
                },
                o = l
        },
        "../node_modules/lodash/uniqueId.js": (e, t, a) => {
            var s = a("../node_modules/lodash/toString.js"),
                n = 0;
            e.exports = function(e) {
                var t = ++n;
                return s(e) + t
            }
        }
    }
]);
//# sourceMappingURL=Checkout.b325c4d16c1688058f32.js.map