(self.webpackChunk = self.webpackChunk || []).push([
    ["InstantAddToCart"], {
        "./js/handlers/InstantAddToCart.js": (s, e, t) => {
            "use strict";
            t.r(e), t.d(e, {
                default: () => o
            });
            var n = t("./js/actions/commerce.js"),
                a = t("./js/helpers/index.js");

            function o(s) {
                const {
                    store: e
                } = s, t = (0, a.re)("path"), o = (0, a.re)("sku");
                t && o && e.dispatch((0, n.oA)(o, 1)), setTimeout((() => window.location.assign("/checkout/")), 1e3)
            }
        }
    }
]);
//# sourceMappingURL=InstantAddToCart.13cbf00c4f4c7d14e50e.js.map