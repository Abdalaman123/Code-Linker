(self.webpackChunk = self.webpackChunk || []).push([
    ["Accordion"], {
        "./js/handlers/Accordion.js": (e, t, r) => {
            "use strict";

            function a(e) {
                const {
                    element: t
                } = e, r = t.querySelectorAll(".accordion-item"), a = t.querySelectorAll(".accordion-desc:not(.schedule__session__desc)"), i = e => {
                    const t = e.nextElementSibling,
                        r = t.querySelectorAll("a");
                    "true" === e.getAttribute("aria-expanded") ? (e.setAttribute("aria-expanded", "false"), t.setAttribute("aria-hidden", "true"), Array.from(r).forEach((e => e.setAttribute("tabindex", "-1")))) : (e.setAttribute("aria-expanded", "true"), t.setAttribute("aria-hidden", "false"), t.classList.remove("is-hidden"), Array.from(r).forEach((e => e.setAttribute("tabindex", "0"))))
                };
                return Array.from(a).forEach(((e, t) => {
                    e.setAttribute("id", "accordion-desc-" + t), e.setAttribute("aria-hidden", "true");
                    const r = e.querySelectorAll("a");
                    Array.from(r).forEach((e => e.setAttribute("tabindex", "-1")))
                })), Array.from(r).forEach(((e, t) => {
                    e.setAttribute("id", "accordion-item-" + t), e.setAttribute("aria-expanded", "false"), 0 === t && e.setAttribute("tabindex", "0"), e.onclick = () => i(e), e.addEventListener("keyup", (t => {
                        !t.key || "Enter" !== t.key && " " !== t.key || i(e)
                    }))
                })), null
            }
            r.r(t), r.d(t, {
                default: () => a
            })
        }
    }
]);
//# sourceMappingURL=Accordion.eee5c2d6d16474912eff.js.map