(self.webpackChunk = self.webpackChunk || []).push([
    ["EditButton"], {
        "./js/containers/EditButton.js": (e, s, t) => {
            "use strict";
            t.r(s), t.d(s, {
                default: () => r
            });
            var n = t("../node_modules/react/index.js"),
                a = t("../node_modules/react-redux/es/index.js"),
                l = t("../node_modules/lodash/get.js"),
                o = t.n(l);
            const r = (0, a.$j)((e => ({
                user: o()(e, "auth.user")
            })))((({
                user: e,
                path: s,
                collection: t
            }) => {
                if (e) {
                    const {
                        roles: a
                    } = e.claims().app_metadata;
                    if (a && a.indexOf("cms") >= 0) {
                        const e = s.split("/").pop().replace(/\.[^.]+$/, "");
                        return n.createElement("a", {
                            className: "btn",
                            href: "/admin/#/collections/" + t + "/entries/" + e
                        }, "Edit in CMS")
                    }
                }
                return null
            }))
        }
    }
]);
//# sourceMappingURL=EditButton.f1625b8f5cd6b0d448bf.js.map