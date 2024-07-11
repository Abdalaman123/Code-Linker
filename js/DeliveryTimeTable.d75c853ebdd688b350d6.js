(self.webpackChunk = self.webpackChunk || []).push([
    ["DeliveryTimeTable"], {
        "./js/containers/DeliveryTimeTable.js": (e, a, l) => {
            "use strict";
            l.r(a), l.d(a, {
                default: () => c
            });
            var s = l("../node_modules/react/index.js"),
                n = l("./js/constants/data/countries.json"),
                t = l.n(n),
                r = l("./js/constants/index.js");
            const c = () => s.createElement("div", null, s.createElement("ul", {
                className: "leaders",
                "aria-label": "delivery estimates"
            }, s.createElement("li", {
                className: "leaders__header",
                "aria-hidden": "true"
            }, s.createElement("span", null, "Shipping Country"), s.createElement("span", null, "Days")), t().map((e => {
                const a = e.delivery || r.Z.DEFAULT_DELIVERY;
                return e.disabled ? null : s.createElement("li", {
                    key: e.value
                }, s.createElement("span", null, e.label), s.createElement("span", {
                    className: "small-caps"
                }, a[0], "–", a[1], " ", s.createElement("span", {
                    className: "sr-only"
                }, "days")))
            }))))
        }
    }
]);
//# sourceMappingURL=DeliveryTimeTable.d75c853ebdd688b350d6.js.map