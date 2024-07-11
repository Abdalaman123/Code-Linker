(self.webpackChunk = self.webpackChunk || []).push([
    ["AddLoginRedirect"], {
        "./js/handlers/AddLoginRedirect.js": (e, n, t) => {
            "use strict";
            t.r(n), t.d(n, {
                default: () => d
            });
            var s = t("./js/helpers/index.js");

            function d(e) {
                const {
                    element: n
                } = e;
                return n.addEventListener("click", (e => {
                    e.preventDefault(), (0, s.Ps)(), window.location.replace("/auth/")
                })), null
            }
        }
    }
]);
//# sourceMappingURL=AddLoginRedirect.1908d64884619c425fa6.js.map