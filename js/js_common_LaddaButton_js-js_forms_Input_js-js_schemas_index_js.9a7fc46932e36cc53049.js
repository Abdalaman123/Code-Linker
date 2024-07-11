(self.webpackChunk = self.webpackChunk || []).push([
    ["js_common_LaddaButton_js-js_forms_Input_js-js_schemas_index_js"], {
        "./js/common/LaddaButton.js": (a, l, e) => {
            "use strict";
            e.d(l, {
                Z: () => s
            });
            var u = e("../node_modules/react/index.js"),
                b = e("../node_modules/react-ladda/dist/index.js"),
                v = e.n(b);
            const s = ({
                text: a,
                className: l,
                onClick: e,
                disabled: s,
                color: o,
                processing: t,
                type: r
            }) => {
                const n = ["btn", "btn--" + (o || "green"), "btn--large", "btn--text-shadow", "auth__modal__btn", "ladda-button"];
                return l && n.push(l), u.createElement(v(), {
                    type: r,
                    loading: t,
                    onClick: e,
                    className: n.join(" "),
                    "data-style": b.EXPAND_RIGHT,
                    disabled: s
                }, u.createElement("span", {
                    className: "ladda-label"
                }, a))
            }
        },
        "./js/forms/Input.js": (a, l, e) => {
            "use strict";
            e.d(l, {
                I: () => d,
                Z: () => O
            });
            var u = e("../node_modules/@babel/runtime/helpers/esm/extends.js"),
                b = e("../node_modules/@babel/runtime/helpers/esm/defineProperty.js"),
                v = e("../node_modules/react/index.js"),
                s = e("../node_modules/lodash/get.js"),
                o = e.n(s),
                t = e("../node_modules/lodash/omit.js"),
                r = e.n(t),
                n = e("../node_modules/formik/dist/formik.esm.js");

            function i(a, l) {
                var e = Object.keys(a);
                if (Object.getOwnPropertySymbols) {
                    var u = Object.getOwnPropertySymbols(a);
                    l && (u = u.filter((function(l) {
                        return Object.getOwnPropertyDescriptor(a, l).enumerable
                    }))), e.push.apply(e, u)
                }
                return e
            }

            function A(a) {
                for (var l = 1; l < arguments.length; l++) {
                    var e = null != arguments[l] ? arguments[l] : {};
                    l % 2 ? i(Object(e), !0).forEach((function(l) {
                        (0, b.Z)(a, l, e[l])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(a, Object.getOwnPropertyDescriptors(e)) : i(Object(e)).forEach((function(l) {
                        Object.defineProperty(a, l, Object.getOwnPropertyDescriptor(e, l))
                    }))
                }
                return a
            }
            class d extends v.Component {
                constructor(...a) {
                    super(...a), this.state = {
                        id: Math.random(),
                        showPassword: !1,
                        touched: !1,
                        focused: !1
                    }, this.handleToggleShowPassword = a => {
                        const {
                            showPassword: l
                        } = this.state;
                        a.preventDefault(), this.setState({
                            showPassword: !l
                        })
                    }
                }
                render() {
                    const a = A({}, this.props),
                        {
                            focus: l,
                            showPassword: e,
                            id: b,
                            focused: s
                        } = this.state,
                        {
                            children: t,
                            label: n,
                            className: i,
                            type: d,
                            field: {
                                name: O,
                                value: c,
                                onChange: P,
                                onBlur: T,
                                onFocus: m
                            },
                            form: {
                                errors: R,
                                touched: S,
                                setFieldTouched: h
                            },
                            inputRef: N,
                            errorMessage: M
                        } = a,
                        C = ["form__field", l ? "focused" : "blurred", a.className],
                        g = "textarea" === d ? "textarea" : "input",
                        p = [],
                        _ = o()(R, O);
                    let {
                        inputMode: E
                    } = a;
                    E || "email" !== d || (E = "email"), E || (E = "text"), i && C.push(i), "textarea" !== d && p.push("form__field__input"), o()(S, O) && !_ && c && (p.push("success"), C.push("success")), _ && o()(S, O) && (p.push("fail"), C.push("fail")), a.type = "password" === d && e ? "text" : d || "text", a.id = a.id || "el-" + b;
                    const K = A(A({}, r()(a, ["field", "form", "inputRef", "items", "optional"])), {}, {
                        "data-optional": a.optional,
                        className: p.join(" "),
                        inputMode: E,
                        onChange: l => {
                            this.state.touched || this.setState({
                                touched: !0
                            }), a.onChange && a.onChange(l), P && P(l)
                        },
                        onBlur: l => {
                            if (this.setState({
                                    focused: !1
                                }), !l.target.value && !this.state.touched) return !1;
                            a.onBlur && a.onBlur(l), T && T(l)
                        },
                        onFocus: l => {
                            h(O, !1, !1), this.setState({
                                focused: !0
                            }), a.onFocus && a.onFocus(l), m && m(l)
                        },
                        onSelect: a.onSelect,
                        name: O,
                        value: c
                    });
                    return N && (K.ref = N), v.createElement("label", {
                        className: C.join(" ")
                    }, n && v.createElement("label", {
                        htmlFor: a.id,
                        className: "form__field__label"
                    }, n), v.createElement("div", {
                        className: "password" === d ? "password-with-show-wrapper input-wrapper" : "input-wrapper"
                    }, v.createElement(g, K, null), "password" === d && v.createElement("label", {
                        htmlFor: a.id + "-show-password",
                        className: "show-password",
                        onClick: this.handleToggleShowPassword
                    }, v.createElement("input", (0, u.Z)({}, K, {
                        id: a.id + "-show-password",
                        type: "checkbox",
                        className: "show-password__checkbox",
                        checked: e
                    })), v.createElement("span", null, e ? "Hide" : "Show")), t), _ && o()(S, O) && v.createElement("span", {
                        id: a.id + "-error",
                        "aria-live": "assertive",
                        className: "error-msg"
                    }, M || _))
                }
            }

            function O(a) {
                return v.createElement(n.gN, (0, u.Z)({
                    component: d
                }, a))
            }
        },
        "./js/schemas/index.js": (a, l, e) => {
            "use strict";
            e.d(l, {
                w: () => O
            });
            var u = e("../node_modules/yup/lib/index.js"),
                b = e("../node_modules/lodash/flatten.js"),
                v = e.n(b),
                s = e("../node_modules/lodash/pick.js"),
                o = e.n(s),
                t = e("./js/constants/messages.js"),
                r = e("./js/constants/data/countries.json"),
                n = e.n(r),
                i = e("./js/constants/data/states.json"),
                A = e.n(i);
            const d = {
                email: u.Z_().email(t.Z.EMAIL_WRONG_FORMAT).required(t.Z.EMAIL_WRONG_FORMAT).nullable(),
                password: u.Z_().required(t.Z.PASSWORD_WRONG_FORMAT),
                firstname: u.Z_().min(2, t.Z.FIRSTNAME_WRONG_FORMAT).required(t.Z.FIRSTNAME_WRONG_FORMAT).nullable(),
                lastname: u.Z_().min(2, t.Z.LASTNAME_WRONG_FORMAT).required(t.Z.LASTNAME_WRONG_FORMAT).nullable(),
                ccname: u.Z_().min(3, t.Z.CC_NAME_WRONG_FORMAT).required(t.Z.CC_NAME_WRONG_FORMAT).nullable(),
                twitter: u.Z_().min(1, t.Z.TWITTER_WRONG_FORMAT).max(15, t.Z.TWITTER_WRONG_FORMAT).matches(/^@?(\w){1,15}$/, t.Z.TWITTER_WRONG_FORMAT).nullable(),
                sameAddress: u.O7(),
                zip: u.Z_().required(t.Z.ZIP_WRONG_FORMAT).nullable(),
                city: u.Z_().required(t.Z.CITY_WRONG_FORMAT).nullable(),
                country: u.Z_().oneOf(n().map((a => a.label)), t.Z.COUNTRY_WRONG_FORMAT).required(t.Z.COUNTRY_WRONG_FORMAT).nullable(),
                state: u.Z_().when("country", {
                    is: a => Object.keys(A()).includes(a),
                    then: u.Z_().oneOf(v()(Object.keys(A()).map((a => A()[a].states))).map((a => a.label)), t.Z.STATE_WRONG_FORMAT).required(t.Z.STATE_WRONG_FORMAT)
                }).nullable(),
                address: u.Z_().required(t.Z.STREET_WRONG_FORMAT).nullable(),
                address2: u.Z_(t.Z.APT_WRONG_FORMAT).nullable(),
                company: u.Z_(t.Z.COMPANY_WRONG_FORMAT).nullable(),
                name: u.Z_().min(1, t.Z.NAME_WRONG_FORMAT).max(100, t.Z.NAME_WRONG_FORMAT).required(t.Z.NAME_WRONG_FORMAT).nullable(),
                message: u.Z_().min(1, t.Z.COMMENT_WRONG_FORMAT).required(t.Z.COMMENT_WRONG_FORMAT).nullable(),
                company_name: u.Z_().min(3, t.Z.COMPANY_NAME_WRONG_FORMAT).required(t.Z.COMPANY_NAME_WRONG_FORMAT).nullable(),
                company_logo: u.Z_().min(5, t.Z.COMPANY_LOGO_WRONG_FORMAT).required(t.Z.COMPANY_LOGO_WRONG_FORMAT).nullable(),
                title: u.Z_().min(5, t.Z.TITLE_WRONG_FORMAT).required(t.Z.TITLE_WRONG_FORMAT).nullable(),
                jobtype: u.Z_().oneOf(["design", "programming", "other"], t.Z.JOB_TYPE_NOT_SELECTED).required(t.Z.JOB_TYPE_NOT_SELECTED).nullable(),
                location: u.Z_().nullable(),
                remote: u.O7(),
                reloc_assistance: u.O7(),
                visa_assistance: u.O7(),
                description: u.Z_().min(50, t.Z.DESCRIPTION_WRONG_FORMAT).required(t.Z.DESCRIPTION_WRONG_FORMAT).nullable(),
                application_url: u.Z_().min(5, t.Z.APPLICATION_URL_WRONG_FORMAT).required(t.Z.APPLICATION_URL_WRONG_FORMAT).nullable(),
                commitment: u.Z_().oneOf(["full-time", "freelance"], t.Z.COMMITMENT_NOT_SELECTED).required(t.Z.COMMITMENT_NOT_SELECTED),
                tos: u.O7().oneOf([!0], t.Z.TOS_NOT_ACCEPTED).required(t.Z.TOS_NOT_ACCEPTED),
                cc: u.Ry().required(t.Z.CC_NOT_COMPLETE).nullable()
            };
            d.shippingAddress = u.Ry().shape(o()(d, ["firstname", "lastname", "country", "zip", "city", "state", "address", "address2", "company"])), d.billingAddress = d.shippingAddress.clone();
            const O = a => u.Ry().shape(o()(d, Object.keys(a).filter((l => !!a[l]))))
        },
        "./js/constants/data/states.json": a => {
            a.exports = {
                Canada: {
                    label: "Province",
                    states: [{
                        label: "Alberta",
                        value: "AB"
                    }, {
                        label: "British Columbia",
                        value: "BC"
                    }, {
                        label: "Manitoba",
                        value: "MB"
                    }, {
                        label: "New Brunswick",
                        value: "NB"
                    }, {
                        label: "Newfoundland",
                        value: "NL"
                    }, {
                        label: "Northwest Territories",
                        value: "NT"
                    }, {
                        label: "Nova Scotia",
                        value: "NS"
                    }, {
                        label: "Nunavut",
                        value: "NU"
                    }, {
                        label: "Ontario",
                        value: "ON"
                    }, {
                        label: "Prince Edward Island",
                        value: "PE"
                    }, {
                        label: "Quebec",
                        value: "QC"
                    }, {
                        label: "Saskatchewan",
                        value: "SK"
                    }, {
                        label: "Yukon",
                        value: "YT"
                    }]
                },
                "United States": {
                    label: "State",
                    states: [{
                        label: "Alabama",
                        value: "AL"
                    }, {
                        label: "Alaska",
                        value: "AK"
                    }, {
                        label: "American Samoa",
                        value: "AS"
                    }, {
                        label: "Arizona",
                        value: "AZ"
                    }, {
                        label: "Arkansas",
                        value: "AR"
                    }, {
                        label: "California",
                        value: "CA"
                    }, {
                        label: "Colorado",
                        value: "CO"
                    }, {
                        label: "Connecticut",
                        value: "CT"
                    }, {
                        label: "Delaware",
                        value: "DE"
                    }, {
                        label: "Federated States of Micronesia",
                        value: "FM"
                    }, {
                        label: "Florida",
                        value: "FL"
                    }, {
                        label: "Georgia",
                        value: "GA"
                    }, {
                        label: "Guam",
                        value: "GU"
                    }, {
                        label: "Hawaii",
                        value: "HI"
                    }, {
                        label: "Idaho",
                        value: "ID"
                    }, {
                        label: "Illinois",
                        value: "IL"
                    }, {
                        label: "Indiana",
                        value: "IN"
                    }, {
                        label: "Iowa",
                        value: "IA"
                    }, {
                        label: "Kansas",
                        value: "KS"
                    }, {
                        label: "Kentucky",
                        value: "KY"
                    }, {
                        label: "Louisiana",
                        value: "LA"
                    }, {
                        label: "Maine",
                        value: "ME"
                    }, {
                        label: "Marshall Islands",
                        value: "MH"
                    }, {
                        label: "Maryland",
                        value: "MD"
                    }, {
                        label: "Massachusetts",
                        value: "MA"
                    }, {
                        label: "Michigan",
                        value: "MI"
                    }, {
                        label: "Minnesota",
                        value: "MN"
                    }, {
                        label: "Mississippi",
                        value: "MS"
                    }, {
                        label: "Missouri",
                        value: "MO"
                    }, {
                        label: "Montana",
                        value: "MT"
                    }, {
                        label: "Nebraska",
                        value: "NE"
                    }, {
                        label: "Nevada",
                        value: "NV"
                    }, {
                        label: "New Hampshire",
                        value: "NH"
                    }, {
                        label: "New Jersey",
                        value: "NJ"
                    }, {
                        label: "New Mexico",
                        value: "NM"
                    }, {
                        label: "New York",
                        value: "NY"
                    }, {
                        label: "North Carolina",
                        value: "NC"
                    }, {
                        label: "North Dakota",
                        value: "ND"
                    }, {
                        label: "Northern Mariana Islands",
                        value: "MP"
                    }, {
                        label: "Ohio",
                        value: "OH"
                    }, {
                        label: "Oklahoma",
                        value: "OK"
                    }, {
                        label: "Oregon",
                        value: "OR"
                    }, {
                        label: "Palau",
                        value: "PW"
                    }, {
                        label: "Pennsylvania",
                        value: "PA"
                    }, {
                        label: "Puerto Rico",
                        value: "PR"
                    }, {
                        label: "Rhode Island",
                        value: "RI"
                    }, {
                        label: "South Carolina",
                        value: "SC"
                    }, {
                        label: "South Dakota",
                        value: "SD"
                    }, {
                        label: "Tennessee",
                        value: "TN"
                    }, {
                        label: "Texas",
                        value: "TX"
                    }, {
                        label: "Utah",
                        value: "UT"
                    }, {
                        label: "Vermont",
                        value: "VT"
                    }, {
                        label: "Virginia",
                        value: "VA"
                    }, {
                        label: "Washington",
                        value: "WA"
                    }, {
                        label: "Washington DC",
                        value: "DC"
                    }, {
                        label: "West Virginia",
                        value: "WV"
                    }, {
                        label: "Wisconsin",
                        value: "WI"
                    }, {
                        label: "Wyoming",
                        value: "WY"
                    }, {
                        label: "Virgin Islands",
                        value: "VI"
                    }, {
                        label: "Armed Forces Americas",
                        value: "AA"
                    }, {
                        label: "Armed Forces Europe",
                        value: "AE"
                    }, {
                        label: "Armed Forces Pacific",
                        value: "AP"
                    }]
                },
                Argentina: {
                    label: "Province",
                    states: [{
                        label: "Buenos Aires",
                        value: "B"
                    }, {
                        label: "Catamarca",
                        value: "K"
                    }, {
                        label: "Chaco",
                        value: "H"
                    }, {
                        label: "Chubut",
                        value: "U"
                    }, {
                        label: "Ciudad Autónoma de Buenos Aires",
                        value: "C"
                    }, {
                        label: "Córdoba",
                        value: "X"
                    }, {
                        label: "Corrientes",
                        value: "W"
                    }, {
                        label: "Ente Ríos",
                        value: "E"
                    }, {
                        label: "Formosa",
                        value: "P"
                    }, {
                        label: "Jujuy",
                        value: "Y"
                    }, {
                        label: "La Pampa",
                        value: "L"
                    }, {
                        label: "La Rioja",
                        value: "F"
                    }, {
                        label: "Mendoza",
                        value: "M"
                    }, {
                        label: "Misiones",
                        value: "N"
                    }, {
                        label: "Neuquén",
                        value: "Q"
                    }, {
                        label: "Río Negro",
                        value: "R"
                    }, {
                        label: "Salta",
                        value: "A"
                    }, {
                        label: "San Juan",
                        value: "J"
                    }, {
                        label: "San Luis",
                        value: "D"
                    }, {
                        label: "Santa Cruz",
                        value: "Z"
                    }, {
                        label: "Santa Fe",
                        value: "S"
                    }, {
                        label: "Santiago Del Estero",
                        value: "G"
                    }, {
                        label: "Tierra Del Fuego",
                        value: "V"
                    }, {
                        label: "Tucumán",
                        value: "T"
                    }]
                },
                Australia: {
                    label: "State/territory",
                    states: [{
                        label: "Australian Capital Territory",
                        value: "ACT"
                    }, {
                        label: "New South Wales",
                        value: "NSW"
                    }, {
                        label: "Northern Territory",
                        value: "NT"
                    }, {
                        label: "Queensland",
                        value: "QLD"
                    }, {
                        label: "South Australia",
                        value: "SA"
                    }, {
                        label: "Tasmania",
                        value: "TAS"
                    }, {
                        label: "Victoria",
                        value: "VIC"
                    }, {
                        label: "Western Australia",
                        value: "WA"
                    }]
                },
                Brazil: {
                    label: "State",
                    states: [{
                        label: "Acre",
                        value: "AC"
                    }, {
                        label: "Alagoas",
                        value: "AL"
                    }, {
                        label: "Amapá",
                        value: "AP"
                    }, {
                        label: "Amazonas",
                        value: "AM"
                    }, {
                        label: "Bahia",
                        value: "BA"
                    }, {
                        label: "Ceará",
                        value: "CE"
                    }, {
                        label: "Distrito Federal",
                        value: "DF"
                    }, {
                        label: "Espírito Santo",
                        value: "ES"
                    }, {
                        label: "Goiás",
                        value: "GO"
                    }, {
                        label: "Maranhão",
                        value: "MA"
                    }, {
                        label: "Mato Grosso",
                        value: "MT"
                    }, {
                        label: "Mato Grosso do Sul",
                        value: "MS"
                    }, {
                        label: "Minas Gerais",
                        value: "MG"
                    }, {
                        label: "Pará",
                        value: "PA"
                    }, {
                        label: "Paraíba",
                        value: "PB"
                    }, {
                        label: "Paraná",
                        value: "PR"
                    }, {
                        label: "Pernambuco",
                        value: "PE"
                    }, {
                        label: "Piauí",
                        value: "PI"
                    }, {
                        label: "Rio de Janeiro",
                        value: "RJ"
                    }, {
                        label: "Rio Grande do Norte",
                        value: "RN"
                    }, {
                        label: "Rio Grande do Sul",
                        value: "RS"
                    }, {
                        label: "Rondônia",
                        value: "RO"
                    }, {
                        label: "Roraima",
                        value: "RR"
                    }, {
                        label: "Santa Catarina",
                        value: "SC"
                    }, {
                        label: "São Paulo",
                        value: "SP"
                    }, {
                        label: "Sergipe",
                        value: "SE"
                    }, {
                        label: "Tocantins",
                        value: "TO"
                    }]
                },
                Egypt: {
                    label: "Region",
                    states: [{
                        label: "Dakahlia",
                        value: "DK"
                    }, {
                        label: "Red Sea",
                        value: "BA"
                    }, {
                        label: "Beheira",
                        value: "BH"
                    }, {
                        label: "Faiyum",
                        value: "FYM"
                    }, {
                        label: "Gharbia",
                        value: "GH"
                    }, {
                        label: "Alexandria",
                        value: "ALX"
                    }, {
                        label: "Ismailia",
                        value: "IS"
                    }, {
                        label: "Giza",
                        value: "GZ"
                    }, {
                        label: "Monufia",
                        value: "MNF"
                    }, {
                        label: "Minya",
                        value: "MN"
                    }, {
                        label: "Cairo",
                        value: "C"
                    }, {
                        label: "Qalyubia",
                        value: "KB"
                    }, {
                        label: "Luxor",
                        value: "LX"
                    }, {
                        label: "New Valley",
                        value: "WAD"
                    }, {
                        label: "Al Sharqia",
                        value: "SHR"
                    }, {
                        label: "6th of October",
                        value: "SU"
                    }, {
                        label: "Suez",
                        value: "SUZ"
                    }, {
                        label: "Aswan",
                        value: "ASN"
                    }, {
                        label: "Asyut",
                        value: "AST"
                    }, {
                        label: "Beni Suef",
                        value: "BNS"
                    }, {
                        label: "Port Said",
                        value: "PTS"
                    }, {
                        label: "Damietta",
                        value: "DT"
                    }, {
                        label: "Helwan",
                        value: "HU"
                    }, {
                        label: "South Sinai",
                        value: "JS"
                    }, {
                        label: "Kafr el-Sheikh",
                        value: "KFS"
                    }, {
                        label: "Matrouh",
                        value: "MT"
                    }, {
                        label: "Qena",
                        value: "KN"
                    }, {
                        label: "North Sinai",
                        value: "SIN"
                    }, {
                        label: "Sohag",
                        value: "SHG"
                    }]
                },
                Guatemala: {
                    label: "Region",
                    states: [{
                        label: "Alta Verapaz",
                        value: "AVE"
                    }, {
                        label: "Baja Verapaz",
                        value: "BVE"
                    }, {
                        label: "Chimaltenango",
                        value: "CMT"
                    }, {
                        label: "Chiquimula",
                        value: "CQM"
                    }, {
                        label: "El Progreso",
                        value: "EPR"
                    }, {
                        label: "Escuintla",
                        value: "ESC"
                    }, {
                        label: "Guatemala",
                        value: "GUA"
                    }, {
                        label: "Huehuetenango",
                        value: "HUE"
                    }, {
                        label: "Izabal",
                        value: "IZA"
                    }, {
                        label: "Jalapa",
                        value: "JAL"
                    }, {
                        label: "Jutiapa",
                        value: "JUT"
                    }, {
                        label: "Petén",
                        value: "PET"
                    }, {
                        label: "Quetzaltenango",
                        value: "QUE"
                    }, {
                        label: "Quiché",
                        value: "QUI"
                    }, {
                        label: "Retalhuleu",
                        value: "RET"
                    }, {
                        label: "Sacatepéquez",
                        value: "SAC"
                    }, {
                        label: "San Marcos",
                        value: "SMA"
                    }, {
                        label: "Santa Rosa",
                        value: "SRO"
                    }, {
                        label: "Sololá",
                        value: "SOL"
                    }, {
                        label: "Suchitepéquez",
                        value: "SUC"
                    }, {
                        label: "Totonicapán",
                        value: "TOT"
                    }, {
                        label: "Zacapa",
                        value: "ZAC"
                    }]
                },
                India: {
                    label: "State",
                    states: [{
                        label: "Andaman and Nicobar",
                        value: "AN"
                    }, {
                        label: "Andhra Pradesh",
                        value: "AP"
                    }, {
                        label: "Arunachal Pradesh",
                        value: "AR"
                    }, {
                        label: "Assam",
                        value: "AS"
                    }, {
                        label: "Bihar",
                        value: "BR"
                    }, {
                        label: "Chandigarh",
                        value: "CH"
                    }, {
                        label: "Chattisgarh",
                        value: "CG"
                    }, {
                        label: "Dadra and Nagar Haveli",
                        value: "DN"
                    }, {
                        label: "Daman and Diu",
                        value: "DD"
                    }, {
                        label: "Delhi",
                        value: "DL"
                    }, {
                        label: "Goa",
                        value: "GA"
                    }, {
                        label: "Gujarat",
                        value: "GJ"
                    }, {
                        label: "Haryana",
                        value: "HR"
                    }, {
                        label: "Himachal Pradesh",
                        value: "HP"
                    }, {
                        label: "Jammu and Kashmir",
                        value: "JK"
                    }, {
                        label: "Jharkhand",
                        value: "JH"
                    }, {
                        label: "Karnataka",
                        value: "KA"
                    }, {
                        label: "Kerala",
                        value: "KL"
                    }, {
                        label: "Lakshadweep",
                        value: "LD"
                    }, {
                        label: "Madhya Pradesh",
                        value: "MP"
                    }, {
                        label: "Maharashtra",
                        value: "MH"
                    }, {
                        label: "Manipur",
                        value: "MN"
                    }, {
                        label: "Meghalaya",
                        value: "ML"
                    }, {
                        label: "Mizoram",
                        value: "MZ"
                    }, {
                        label: "Nagaland",
                        value: "NL"
                    }, {
                        label: "Orissa",
                        value: "OR"
                    }, {
                        label: "Puducherry",
                        value: "PY"
                    }, {
                        label: "Punjab",
                        value: "PB"
                    }, {
                        label: "Rajasthan",
                        value: "RJ"
                    }, {
                        label: "Sikkim",
                        value: "SK"
                    }, {
                        label: "Tamil Nadu",
                        value: "TN"
                    }, {
                        label: "Telangana",
                        value: "TS"
                    }, {
                        label: "Tripura",
                        value: "TR"
                    }, {
                        label: "Uttar Pradesh",
                        value: "UP"
                    }, {
                        label: "Uttarakhand",
                        value: "UK"
                    }, {
                        label: "West Bengal",
                        value: "WB"
                    }]
                },
                Indonesia: {
                    label: "Province",
                    states: [{
                        label: "Aceh",
                        value: "AC"
                    }, {
                        label: "Bali",
                        value: "BA"
                    }, {
                        label: "Bangka Belitung",
                        value: "BB"
                    }, {
                        label: "Banten",
                        value: "BT"
                    }, {
                        label: "Bengkulu",
                        value: "BE"
                    }, {
                        label: "Gorontalo",
                        value: "GO"
                    }, {
                        label: "Jakarta",
                        value: "JK"
                    }, {
                        label: "Jambi",
                        value: "JA"
                    }, {
                        label: "Jawa Barat",
                        value: "JB"
                    }, {
                        label: "Jawa Tengah",
                        value: "JT"
                    }, {
                        label: "Jawa Timur",
                        value: "JI"
                    }, {
                        label: "Kalimantan Barat",
                        value: "KB"
                    }, {
                        label: "Kalimantan Selatan",
                        value: "KS"
                    }, {
                        label: "Kalimantan Tengah",
                        value: "KT"
                    }, {
                        label: "Kalimantan Timur",
                        value: "KI"
                    }, {
                        label: "Kalimantan Utara",
                        value: "KU"
                    }, {
                        label: "Kepulauan Riau",
                        value: "KR"
                    }, {
                        label: "Lampung",
                        value: "LA"
                    }, {
                        label: "Maluku",
                        value: "MA"
                    }, {
                        label: "Maluku Utara",
                        value: "MU"
                    }, {
                        label: "Nusa Tenggara Barat",
                        value: "NB"
                    }, {
                        label: "Nusa Tenggara Timur",
                        value: "NT"
                    }, {
                        label: "Papua",
                        value: "PA"
                    }, {
                        label: "Papua Barat",
                        value: "PB"
                    }, {
                        label: "Riau",
                        value: "RI"
                    }, {
                        label: "Sulawesi Barat",
                        value: "SR"
                    }, {
                        label: "Sulawesi Selatan",
                        value: "SN"
                    }, {
                        label: "Sulawesi Tengah",
                        value: "ST"
                    }, {
                        label: "Sulawesi Tenggara",
                        value: "SG"
                    }, {
                        label: "Sulawesi Utara",
                        value: "SA"
                    }, {
                        label: "Sumatra Barat",
                        value: "SB"
                    }, {
                        label: "Sumatra Selatan",
                        value: "SS"
                    }, {
                        label: "Sumatra Utara",
                        value: "SU"
                    }, {
                        label: "Yogyakarta",
                        value: "YO"
                    }]
                },
                Italy: {
                    label: "Province",
                    states: [{
                        label: "Agrigento",
                        value: "AG"
                    }, {
                        label: "Alessandria",
                        value: "AL"
                    }, {
                        label: "Ancona",
                        value: "AN"
                    }, {
                        label: "Aosta",
                        value: "AO"
                    }, {
                        label: "Arezzo",
                        value: "AR"
                    }, {
                        label: "Ascoli Piceno",
                        value: "AP"
                    }, {
                        label: "Asti",
                        value: "AT"
                    }, {
                        label: "Avellino",
                        value: "AV"
                    }, {
                        label: "Bari",
                        value: "BA"
                    }, {
                        label: "Barletta-Andria-Trani",
                        value: "BT"
                    }, {
                        label: "Belluno",
                        value: "BL"
                    }, {
                        label: "Benevento",
                        value: "BN"
                    }, {
                        label: "Bergamo",
                        value: "BG"
                    }, {
                        label: "Biella",
                        value: "BI"
                    }, {
                        label: "Bologna",
                        value: "BO"
                    }, {
                        label: "Bolzano",
                        value: "BZ"
                    }, {
                        label: "Brescia",
                        value: "BS"
                    }, {
                        label: "Brindisi",
                        value: "BR"
                    }, {
                        label: "Cagliari",
                        value: "CA"
                    }, {
                        label: "Caltanissetta",
                        value: "CL"
                    }, {
                        label: "Campobasso",
                        value: "CB"
                    }, {
                        label: "Carbonia-Iglesias",
                        value: "CI"
                    }, {
                        label: "Caserta",
                        value: "CE"
                    }, {
                        label: "Catania",
                        value: "CT"
                    }, {
                        label: "Catanzaro",
                        value: "CZ"
                    }, {
                        label: "Chieti",
                        value: "CH"
                    }, {
                        label: "Como",
                        value: "CO"
                    }, {
                        label: "Cosenza",
                        value: "CS"
                    }, {
                        label: "Cremona",
                        value: "CR"
                    }, {
                        label: "Crotone",
                        value: "KR"
                    }, {
                        label: "Cuneo",
                        value: "CN"
                    }, {
                        label: "Enna",
                        value: "EN"
                    }, {
                        label: "Fermo",
                        value: "FM"
                    }, {
                        label: "Ferrara",
                        value: "FE"
                    }, {
                        label: "Firenze",
                        value: "FI"
                    }, {
                        label: "Foggia",
                        value: "FG"
                    }, {
                        label: "Forlì-Cesena",
                        value: "FC"
                    }, {
                        label: "Frosinone",
                        value: "FR"
                    }, {
                        label: "Genova",
                        value: "GE"
                    }, {
                        label: "Gorizia",
                        value: "GO"
                    }, {
                        label: "Grosseto",
                        value: "GR"
                    }, {
                        label: "Imperia",
                        value: "IM"
                    }, {
                        label: "Isernia",
                        value: "IS"
                    }, {
                        label: "La Spezia",
                        value: "SP"
                    }, {
                        label: "L'Aquila",
                        value: "AQ"
                    }, {
                        label: "Latina",
                        value: "LT"
                    }, {
                        label: "Lecce",
                        value: "LE"
                    }, {
                        label: "Lecco",
                        value: "LC"
                    }, {
                        label: "Livorno",
                        value: "LI"
                    }, {
                        label: "Lodi",
                        value: "LO"
                    }, {
                        label: "Lucca",
                        value: "LU"
                    }, {
                        label: "Macerata",
                        value: "MC"
                    }, {
                        label: "Mantova",
                        value: "MN"
                    }, {
                        label: "Massa-Carrara",
                        value: "MS"
                    }, {
                        label: "Matera",
                        value: "MT"
                    }, {
                        label: "Medio Campidano",
                        value: "VS"
                    }, {
                        label: "Messina",
                        value: "ME"
                    }, {
                        label: "Milano",
                        value: "MI"
                    }, {
                        label: "Modena",
                        value: "MO"
                    }, {
                        label: "Monza e Brianza",
                        value: "MB"
                    }, {
                        label: "Napoli",
                        value: "NA"
                    }, {
                        label: "Novara",
                        value: "NO"
                    }, {
                        label: "Nuoro",
                        value: "NU"
                    }, {
                        label: "Ogliastra",
                        value: "OG"
                    }, {
                        label: "Olbia-Tempio",
                        value: "OT"
                    }, {
                        label: "Oristano",
                        value: "OR"
                    }, {
                        label: "Padova",
                        value: "PD"
                    }, {
                        label: "Palermo",
                        value: "PA"
                    }, {
                        label: "Parma",
                        value: "PR"
                    }, {
                        label: "Pavia",
                        value: "PV"
                    }, {
                        label: "Perugia",
                        value: "PG"
                    }, {
                        label: "Pesaro e Urbino",
                        value: "PU"
                    }, {
                        label: "Pescara",
                        value: "PE"
                    }, {
                        label: "Piacenza",
                        value: "PC"
                    }, {
                        label: "Pisa",
                        value: "PI"
                    }, {
                        label: "Pistoia",
                        value: "PT"
                    }, {
                        label: "Pordenone",
                        value: "PN"
                    }, {
                        label: "Potenza",
                        value: "PZ"
                    }, {
                        label: "Prato",
                        value: "PO"
                    }, {
                        label: "Ragusa",
                        value: "RG"
                    }, {
                        label: "Ravenna",
                        value: "RA"
                    }, {
                        label: "Reggio Calabria",
                        value: "RC"
                    }, {
                        label: "Reggio Emilia",
                        value: "RE"
                    }, {
                        label: "Rieti",
                        value: "RI"
                    }, {
                        label: "Rimini",
                        value: "RN"
                    }, {
                        label: "Roma",
                        value: "RM"
                    }, {
                        label: "Rovigo",
                        value: "RO"
                    }, {
                        label: "Salerno",
                        value: "SA"
                    }, {
                        label: "Sassari",
                        value: "SS"
                    }, {
                        label: "Savona",
                        value: "SV"
                    }, {
                        label: "Siena",
                        value: "SI"
                    }, {
                        label: "Siracusa",
                        value: "SR"
                    }, {
                        label: "Sondrio",
                        value: "SO"
                    }, {
                        label: "Taranto",
                        value: "TA"
                    }, {
                        label: "Teramo",
                        value: "TE"
                    }, {
                        label: "Terni",
                        value: "TR"
                    }, {
                        label: "Torino",
                        value: "TO"
                    }, {
                        label: "Trapani",
                        value: "TP"
                    }, {
                        label: "Trento",
                        value: "TN"
                    }, {
                        label: "Treviso",
                        value: "TV"
                    }, {
                        label: "Trieste",
                        value: "TS"
                    }, {
                        label: "Udine",
                        value: "UD"
                    }, {
                        label: "Varese",
                        value: "VA"
                    }, {
                        label: "Venezia",
                        value: "VE"
                    }, {
                        label: "Verbano-Cusio-Ossola",
                        value: "VB"
                    }, {
                        label: "Vercelli",
                        value: "VC"
                    }, {
                        label: "Verona",
                        value: "VR"
                    }, {
                        label: "Vibo Valentia",
                        value: "VV"
                    }, {
                        label: "Vicenza",
                        value: "VI"
                    }, {
                        label: "Viterbo",
                        value: "VT"
                    }]
                },
                Japan: {
                    label: "Prefecture",
                    states: [{
                        label: "Aichi",
                        value: "JP-23"
                    }, {
                        label: "Akita",
                        value: "JP-05"
                    }, {
                        label: "Aomori",
                        value: "JP-02"
                    }, {
                        label: "Chiba",
                        value: "JP-12"
                    }, {
                        label: "Ehime",
                        value: "JP-38"
                    }, {
                        label: "Fukui",
                        value: "JP-18"
                    }, {
                        label: "Fukuoka",
                        value: "JP-40"
                    }, {
                        label: "Fukushima",
                        value: "JP-07"
                    }, {
                        label: "Gifu",
                        value: "JP-21"
                    }, {
                        label: "Gunma",
                        value: "JP-10"
                    }, {
                        label: "Hiroshima",
                        value: "JP-34"
                    }, {
                        label: "Hokkaidō",
                        value: "JP-01"
                    }, {
                        label: "Hyōgo",
                        value: "JP-28"
                    }, {
                        label: "Ibaraki",
                        value: "JP-08"
                    }, {
                        label: "Ishikawa",
                        value: "JP-17"
                    }, {
                        label: "Iwate",
                        value: "JP-03"
                    }, {
                        label: "Kagawa",
                        value: "JP-37"
                    }, {
                        label: "Kagoshima",
                        value: "JP-46"
                    }, {
                        label: "Kanagawa",
                        value: "JP-14"
                    }, {
                        label: "Kōchi",
                        value: "JP-39"
                    }, {
                        label: "Kumamoto",
                        value: "JP-43"
                    }, {
                        label: "Kyōto",
                        value: "JP-26"
                    }, {
                        label: "Mie",
                        value: "JP-24"
                    }, {
                        label: "Miyagi",
                        value: "JP-04"
                    }, {
                        label: "Miyazaki",
                        value: "JP-45"
                    }, {
                        label: "Nagano",
                        value: "JP-20"
                    }, {
                        label: "Nagasaki",
                        value: "JP-42"
                    }, {
                        label: "Nara",
                        value: "JP-29"
                    }, {
                        label: "Niigata",
                        value: "JP-15"
                    }, {
                        label: "Ōita",
                        value: "JP-44"
                    }, {
                        label: "Okayama",
                        value: "JP-33"
                    }, {
                        label: "Okinawa",
                        value: "JP-47"
                    }, {
                        label: "Ōsaka",
                        value: "JP-27",
                        alternatives: ["Osaka"]
                    }, {
                        label: "Saga",
                        value: "JP-41"
                    }, {
                        label: "Saitama",
                        value: "JP-11"
                    }, {
                        label: "Shiga",
                        value: "JP-25"
                    }, {
                        label: "Shimane",
                        value: "JP-32"
                    }, {
                        label: "Shizuoka",
                        value: "JP-22"
                    }, {
                        label: "Tochigi",
                        value: "JP-09"
                    }, {
                        label: "Tokushima",
                        value: "JP-36"
                    }, {
                        label: "Tottori",
                        value: "JP-31"
                    }, {
                        label: "Toyama",
                        value: "JP-16"
                    }, {
                        label: "Tōkyō",
                        value: "JP-13"
                    }, {
                        label: "Wakayama",
                        value: "JP-30"
                    }, {
                        label: "Yamagata",
                        value: "JP-06"
                    }, {
                        label: "Yamaguchi",
                        value: "JP-35"
                    }, {
                        label: "Yamanashi",
                        value: "JP-19"
                    }]
                },
                Malaysia: {
                    label: "State/territory",
                    states: [{
                        label: "Johor",
                        value: "JHR"
                    }, {
                        label: "Kedah",
                        value: "KDH"
                    }, {
                        label: "Kelantan",
                        value: "KTN"
                    }, {
                        label: "Kuala Lumpur",
                        value: "KUL"
                    }, {
                        label: "Labuan",
                        value: "LBN"
                    }, {
                        label: "Melaka",
                        value: "MLK"
                    }, {
                        label: "Negeri Sembilan",
                        value: "NSN"
                    }, {
                        label: "Pahang",
                        value: "PHG"
                    }, {
                        label: "Perak",
                        value: "PRK"
                    }, {
                        label: "Perlis",
                        value: "PLS"
                    }, {
                        label: "Pulau Pinang",
                        value: "PNG"
                    }, {
                        label: "Putrajaya",
                        value: "PJY"
                    }, {
                        label: "Sabah",
                        value: "SBH"
                    }, {
                        label: "Sarawak",
                        value: "SWK"
                    }, {
                        label: "Selangor",
                        value: "SGR"
                    }, {
                        label: "Terengganu",
                        value: "TRG"
                    }]
                },
                Mexico: {
                    label: "State",
                    states: [{
                        label: "Aguascalientes",
                        value: "AGS"
                    }, {
                        label: "Baja California",
                        value: "BC"
                    }, {
                        label: "Baja California Sur",
                        value: "BCS"
                    }, {
                        label: "Chihuahua",
                        value: "CHIH"
                    }, {
                        label: "Colima",
                        value: "COL"
                    }, {
                        label: "Campeche",
                        value: "CAMP"
                    }, {
                        label: "Coahuila",
                        value: "COAH"
                    }, {
                        label: "Chiapas",
                        value: "CHIS"
                    }, {
                        label: "Distrito Federal",
                        value: "DF"
                    }, {
                        label: "Durango",
                        value: "DGO"
                    }, {
                        label: "Guerrero",
                        value: "GRO"
                    }, {
                        label: "Guanajuato",
                        value: "GTO"
                    }, {
                        label: "Hidalgo",
                        value: "HGO"
                    }, {
                        label: "Jalisco",
                        value: "JAL"
                    }, {
                        label: "Michoacán",
                        value: "MICH"
                    }, {
                        label: "Morelos",
                        value: "MOR"
                    }, {
                        label: "México",
                        value: "MEX"
                    }, {
                        label: "Nayarit",
                        value: "NAY"
                    }, {
                        label: "Nuevo León",
                        value: "NL"
                    }, {
                        label: "Oaxaca",
                        value: "OAx"
                    }, {
                        label: "Puebla",
                        value: "PUE"
                    }, {
                        label: "Quintana Roo",
                        value: "Q ROO"
                    }, {
                        label: "Querétaro",
                        value: "QRO"
                    }, {
                        label: "Sinaloa",
                        value: "SIN"
                    }, {
                        label: "San Luis Potosí",
                        value: "SLP"
                    }, {
                        label: "Sonora",
                        value: "SON"
                    }, {
                        label: "Tabasco",
                        value: "TAB"
                    }, {
                        label: "Tlaxcala",
                        value: "TLAX"
                    }, {
                        label: "Tamaulipas",
                        value: "TAMPS"
                    }, {
                        label: "Veracruz",
                        value: "VER"
                    }, {
                        label: "Yucatán",
                        value: "YUC"
                    }, {
                        label: "Zacatecas",
                        value: "ZAC"
                    }]
                },
                "New Zealand": {
                    label: "Region",
                    states: [{
                        label: "Auckland",
                        value: "AUK"
                    }, {
                        label: "Bay of Plenty",
                        value: "BOP"
                    }, {
                        label: "Canterbury",
                        value: "CAN"
                    }, {
                        label: "Gisborne",
                        value: "GIS"
                    }, {
                        label: "Hawke's Bay",
                        value: "HKB"
                    }, {
                        label: "Manawatu-Wanganui",
                        value: "MWT"
                    }, {
                        label: "Marlborough",
                        value: "MBH"
                    }, {
                        label: "Nelson",
                        value: "NSN"
                    }, {
                        label: "Northland",
                        value: "NTL"
                    }, {
                        label: "Otago",
                        value: "OTA"
                    }, {
                        label: "Southland",
                        value: "STL"
                    }, {
                        label: "Taranaki",
                        value: "TKI"
                    }, {
                        label: "Tasman",
                        value: "TAS"
                    }, {
                        label: "Waikato",
                        value: "WKO"
                    }, {
                        label: "Wellington",
                        value: "WGN"
                    }, {
                        label: "West Coast",
                        value: "WTC"
                    }]
                },
                Panama: {
                    label: "Region",
                    states: [{
                        label: "Bocas del Toro",
                        value: "PA-1"
                    }, {
                        label: "Chiriquí",
                        value: "PA-4"
                    }, {
                        label: "Coclé",
                        value: "PA-2"
                    }, {
                        label: "Colón",
                        value: "PA-3"
                    }, {
                        label: "Darién",
                        value: "PA-5"
                    }, {
                        label: "Emberá",
                        value: "PA-EM"
                    }, {
                        label: "Herrera",
                        value: "PA-6"
                    }, {
                        label: "Kuna Yala",
                        value: "PA-KY"
                    }, {
                        label: "Los Santos",
                        value: "PA-7"
                    }, {
                        label: "Ngöbe-Buglé",
                        value: "PA-NB"
                    }, {
                        label: "Panamá",
                        value: "PA-8"
                    }, {
                        label: "Panamá Oeste",
                        value: "PA-10"
                    }, {
                        label: "Veraguas",
                        value: "PA-9"
                    }]
                },
                Portugal: {
                    label: "Region",
                    states: [{
                        label: "Aveiro",
                        value: "PT-01"
                    }, {
                        label: "Beja",
                        value: "PT-02"
                    }, {
                        label: "Braga",
                        value: "PT-03"
                    }, {
                        label: "Bragança",
                        value: "PT-04"
                    }, {
                        label: "Castelo Branco",
                        value: "PT-05"
                    }, {
                        label: "Coimbra",
                        value: "PT-06"
                    }, {
                        label: "Évora",
                        value: "PT-07"
                    }, {
                        label: "Faro",
                        value: "PT-08"
                    }, {
                        label: "Guarda",
                        value: "PT-09"
                    }, {
                        label: "Leiria",
                        value: "PT-10"
                    }, {
                        label: "Lisboa",
                        value: "PT-11"
                    }, {
                        label: "Portalegre",
                        value: "PT-12"
                    }, {
                        label: "Porto",
                        value: "PT-13"
                    }, {
                        label: "Santarém",
                        value: "PT-14"
                    }, {
                        label: "Setúbal",
                        value: "PT-15"
                    }, {
                        label: "Viana do Castelo",
                        value: "PT-16"
                    }, {
                        label: "Vila Real",
                        value: "PT-17"
                    }, {
                        label: "Viseu",
                        value: "PT-18"
                    }, {
                        label: "Açores",
                        value: "PT-20"
                    }, {
                        label: "Madeira",
                        value: "PT-30"
                    }]
                },
                Russia: {
                    label: "Region",
                    states: [{
                        label: "Republic of Adygeya",
                        value: "AD"
                    }, {
                        label: "Altai Republic",
                        value: "AL"
                    }, {
                        label: "Altai Krai",
                        value: "ALT"
                    }, {
                        label: "Amur Oblast",
                        value: "AMU"
                    }, {
                        label: "Arkhangelsk Oblast",
                        value: "ARK"
                    }, {
                        label: "Astrakhan Oblast",
                        value: "AST"
                    }, {
                        label: "Republic of Bashkortostan",
                        value: "BA"
                    }, {
                        label: "Belgorod Oblast",
                        value: "BEL"
                    }, {
                        label: "Bryansk Oblast",
                        value: "BRY"
                    }, {
                        label: "Republic of Buryatia",
                        value: "BU"
                    }, {
                        label: "Chechen Republic",
                        value: "CE"
                    }, {
                        label: "Chelyabinsk Oblast",
                        value: "CHE"
                    }, {
                        label: "Chukotka Autonomous Okrug",
                        value: "CHU"
                    }, {
                        label: "Chuvash Republic",
                        value: "CU"
                    }, {
                        label: "Republic of Dagestan",
                        value: "DA"
                    }, {
                        label: "Republic of Ingushetia",
                        value: "IN"
                    }, {
                        label: "Irkutsk Oblast",
                        value: "IRK"
                    }, {
                        label: "Ivanovo Oblast",
                        value: "IVA"
                    }, {
                        label: "Kamchatka Krai",
                        value: "KAM"
                    }, {
                        label: "Kabardino-Balkarian Republic",
                        value: "KB"
                    }, {
                        label: "Kaliningrad Oblast",
                        value: "KGD"
                    }, {
                        label: "Republic of Kalmykia",
                        value: "KL"
                    }, {
                        label: "Kaluga Oblast",
                        value: "KLU"
                    }, {
                        label: "Karachay–Cherkess Republic",
                        value: "KC"
                    }, {
                        label: "Republic of Karelia",
                        value: "KR"
                    }, {
                        label: "Kemerovo Oblast",
                        value: "KEM"
                    }, {
                        label: "Khabarovsk Krai",
                        value: "KHA"
                    }, {
                        label: "Republic of Khakassia",
                        value: "KK"
                    }, {
                        label: "Khanty-Mansi Autonomous Okrug",
                        value: "KHM"
                    }, {
                        label: "Kirov Oblast",
                        value: "KIR"
                    }, {
                        label: "Komi Republic",
                        value: "KO"
                    }, {
                        label: "Kostroma Oblast",
                        value: "KOS"
                    }, {
                        label: "Krasnodar Krai",
                        value: "KDA"
                    }, {
                        label: "Krasnoyarsk Krai",
                        value: "KYA"
                    }, {
                        label: "Kurgan Oblast",
                        value: "KGN"
                    }, {
                        label: "Kursk Oblast",
                        value: "KRS"
                    }, {
                        label: "Leningrad Oblast",
                        value: "LEN"
                    }, {
                        label: "Lipetsk Oblast",
                        value: "LIP"
                    }, {
                        label: "Magadan Oblast",
                        value: "MAG"
                    }, {
                        label: "Mari El Republic",
                        value: "ME"
                    }, {
                        label: "Republic of Mordovia",
                        value: "MO"
                    }, {
                        label: "Moscow Oblast",
                        value: "MOS"
                    }, {
                        label: "Moscow",
                        value: "MOW"
                    }, {
                        label: "Murmansk Oblast",
                        value: "MUR"
                    }, {
                        label: "Nizhny Novgorod Oblast",
                        value: "NIZ"
                    }, {
                        label: "Novgorod Oblast",
                        value: "NGR"
                    }, {
                        label: "Novosibirsk Oblast",
                        value: "NVS"
                    }, {
                        label: "Omsk Oblast",
                        value: "OMS"
                    }, {
                        label: "Orenburg Oblast",
                        value: "ORE"
                    }, {
                        label: "Oryol Oblast",
                        value: "ORL"
                    }, {
                        label: "Penza Oblast",
                        value: "PNZ"
                    }, {
                        label: "Perm Krai",
                        value: "PER"
                    }, {
                        label: "Primorsky Krai",
                        value: "PRI"
                    }, {
                        label: "Pskov Oblast",
                        value: "PSK"
                    }, {
                        label: "Rostov Oblast",
                        value: "ROS"
                    }, {
                        label: "Ryazan Oblast",
                        value: "RYA"
                    }, {
                        label: "Sakha Republic (Yakutia)",
                        value: "SA"
                    }, {
                        label: "Sakhalin Oblast",
                        value: "SAK"
                    }, {
                        label: "Samara Oblast",
                        value: "SAM"
                    }, {
                        label: "Saint Petersburg",
                        value: "SPE"
                    }, {
                        label: "Saratov Oblast",
                        value: "SAR"
                    }, {
                        label: "Republic of North Ossetia–Alania",
                        value: "SE"
                    }, {
                        label: "Smolensk Oblast",
                        value: "SMO"
                    }, {
                        label: "Stavropol Krai",
                        value: "STA"
                    }, {
                        label: "Sverdlovsk Oblast",
                        value: "SVE"
                    }, {
                        label: "Tambov Oblast",
                        value: "TAM"
                    }, {
                        label: "Republic of Tatarstan",
                        value: "TA"
                    }, {
                        label: "Tomsk Oblast",
                        value: "TOM"
                    }, {
                        label: "Tula Oblast",
                        value: "TUL"
                    }, {
                        label: "Tver Oblast",
                        value: "TVE"
                    }, {
                        label: "Tyumen Oblast",
                        value: "TYU"
                    }, {
                        label: "Tyva Republic",
                        value: "TY"
                    }, {
                        label: "Udmurtia",
                        value: "UD"
                    }, {
                        label: "Ulyanovsk Oblast",
                        value: "ULY"
                    }, {
                        label: "Vladimir Oblast",
                        value: "VLA"
                    }, {
                        label: "Volgograd Oblast",
                        value: "VGG"
                    }, {
                        label: "Vologda Oblast",
                        value: "VLG"
                    }, {
                        label: "Voronezh Oblast",
                        value: "VOR"
                    }, {
                        label: "Yamalo-Nenets Autonomous Okrug",
                        value: "YAN"
                    }, {
                        label: "Yaroslavl Oblast",
                        value: "YAR"
                    }, {
                        label: "Jewish Autonomous Oblast",
                        value: "YEV"
                    }, {
                        label: "Zabaykalsky Krai",
                        value: "ZAB"
                    }]
                },
                "South Africa": {
                    label: "Province",
                    states: [{
                        label: "Eastern Cape",
                        value: "EC"
                    }, {
                        label: "Free State",
                        value: "FS"
                    }, {
                        label: "Gauteng",
                        value: "GT"
                    }, {
                        label: "KwaZulu-Natal",
                        value: "NL"
                    }, {
                        label: "Limpopo",
                        value: "LP"
                    }, {
                        label: "Mpumalanga",
                        value: "MP"
                    }, {
                        label: "Northern Cape",
                        value: "NC"
                    }, {
                        label: "North West",
                        value: "NW"
                    }, {
                        label: "Western Cape",
                        value: "WC"
                    }]
                },
                "South Korea": {
                    label: "Province",
                    states: [{
                        label: "Busan",
                        value: "KR-26"
                    }, {
                        label: "Chungbuk",
                        value: "KR-43"
                    }, {
                        label: "Chungnam",
                        value: "KR-44"
                    }, {
                        label: "Daegu",
                        value: "KR-27"
                    }, {
                        label: "Daejeon",
                        value: "KR-30"
                    }, {
                        label: "Gangwon",
                        value: "KR-42"
                    }, {
                        label: "Gwangju",
                        value: "KR-29"
                    }, {
                        label: "Gyeonggi",
                        value: "KR-41"
                    }, {
                        label: "Gyeongbuk",
                        value: "KR-47"
                    }, {
                        label: "Gyeongnam",
                        value: "KR-48"
                    }, {
                        label: "Incheon",
                        value: "KR-28"
                    }, {
                        label: "Jeju",
                        value: "KR-49"
                    }, {
                        label: "Jeonbuk",
                        value: "KR-45"
                    }, {
                        label: "Jeonnam",
                        value: "KR-46"
                    }, {
                        label: "Sejong",
                        value: "KR-50"
                    }, {
                        label: "Seoul",
                        value: "KR-11"
                    }, {
                        label: "Ulsan",
                        value: "KR-31"
                    }]
                },
                Spain: {
                    label: "Province",
                    states: [{
                        label: "A Coruña",
                        value: "C"
                    }, {
                        label: "Álava",
                        value: "VI"
                    }, {
                        label: "Albacete",
                        value: "AB"
                    }, {
                        label: "Alicante",
                        value: "A"
                    }, {
                        label: "Almería",
                        value: "AL"
                    }, {
                        label: "Asturias",
                        value: "O"
                    }, {
                        label: "Ávila",
                        value: "AV"
                    }, {
                        label: "Badajoz",
                        value: "BA"
                    }, {
                        label: "Balears",
                        value: "PM"
                    }, {
                        label: "Barcelona",
                        value: "B"
                    }, {
                        label: "Burgos",
                        value: "BU"
                    }, {
                        label: "Cáceres",
                        value: "CC"
                    }, {
                        label: "Cádiz",
                        value: "CA"
                    }, {
                        label: "Cantabria",
                        value: "S"
                    }, {
                        label: "Castellón",
                        value: "CS"
                    }, {
                        label: "Ceuta",
                        value: "CE"
                    }, {
                        label: "Ciudad Real",
                        value: "CR"
                    }, {
                        label: "Córdoba",
                        value: "CO"
                    }, {
                        label: "Cuenca",
                        value: "CU"
                    }, {
                        label: "Girona",
                        value: "GI"
                    }, {
                        label: "Granada",
                        value: "GR"
                    }, {
                        label: "Guadalajara",
                        value: "GU"
                    }, {
                        label: "Guipúzcoa",
                        value: "SS"
                    }, {
                        label: "Huelva",
                        value: "H"
                    }, {
                        label: "Huesca",
                        value: "HU"
                    }, {
                        label: "Jaén",
                        value: "J"
                    }, {
                        label: "La Rioja",
                        value: "LO"
                    }, {
                        label: "Las Palmas",
                        value: "GC"
                    }, {
                        label: "León",
                        value: "LE"
                    }, {
                        label: "Lleida",
                        value: "L"
                    }, {
                        label: "Lugo",
                        value: "LU"
                    }, {
                        label: "Madrid",
                        value: "M"
                    }, {
                        label: "Málaga",
                        value: "MA"
                    }, {
                        label: "Melilla",
                        value: "ML"
                    }, {
                        label: "Murcia",
                        value: "MU"
                    }, {
                        label: "Navarra",
                        value: "NA"
                    }, {
                        label: "Ourense",
                        value: "OR"
                    }, {
                        label: "Palencia",
                        value: "P"
                    }, {
                        label: "Pontevedra",
                        value: "PO"
                    }, {
                        label: "Salamanca",
                        value: "SA"
                    }, {
                        label: "Santa Cruz de Tenerife",
                        value: "TF"
                    }, {
                        label: "Segovia",
                        value: "SG"
                    }, {
                        label: "Sevilla",
                        value: "SE"
                    }, {
                        label: "Soria",
                        value: "SO"
                    }, {
                        label: "Tarragona",
                        value: "T"
                    }, {
                        label: "Teruel",
                        value: "TE"
                    }, {
                        label: "Toledo",
                        value: "TO"
                    }, {
                        label: "Valencia",
                        value: "V"
                    }, {
                        label: "Valladolid",
                        value: "VA"
                    }, {
                        label: "Vizcaya",
                        value: "BI"
                    }, {
                        label: "Zamora",
                        value: "ZA"
                    }, {
                        label: "Zaragoza",
                        value: "Z"
                    }]
                },
                "United Arab Emirates": {
                    label: "Region",
                    states: [{
                        label: "Abu Dhabi",
                        value: "AZ"
                    }, {
                        label: "Ajman",
                        value: "AJ"
                    }, {
                        label: "Dubai",
                        value: "DU"
                    }, {
                        label: "Fujairah",
                        value: "FU"
                    }, {
                        label: "Ras al-Khaimah",
                        value: "RK"
                    }, {
                        label: "Sharjah",
                        value: "SH"
                    }, {
                        label: "Umm al-Quwain",
                        value: "UQ"
                    }]
                }
            }
        }
    }
]);
//# sourceMappingURL=js_common_LaddaButton_js-js_forms_Input_js-js_schemas_index_js.9a7fc46932e36cc53049.js.map