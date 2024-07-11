(self.webpackChunk = self.webpackChunk || []).push([
    ["Tooltip"], {
        "./js/handlers/Tooltip.js": (e, t, n) => {
            "use strict";

            function r(e) {
                const {
                    element: t
                } = e, n = t, r = n.querySelector("abbr");
                r.setAttribute("tabindex", "0"), r.setAttribute("role", "button");
                const i = r.getAttribute("title");
                r.removeAttribute("title");
                const o = n.querySelector('[role="status"]');
                return r.addEventListener("click", (() => {
                    o.innerHTML = "", window.setTimeout((() => {
                        o.innerHTML = i
                    }), 50)
                })), r.addEventListener("keydown", (e => {
                    const t = e.keyCode || e.which;
                    27 === t && (o.innerHTML = ""), 13 !== t && 32 !== t || (e.preventDefault(), r.click())
                })), r.addEventListener("mouseover", (() => {
                    o.innerHTML = i
                })), r.addEventListener("mouseout", (() => {
                    o.innerHTML = ""
                })), document.addEventListener("click", (e => {
                    n !== e.target && (o.innerHTML = "")
                })), null
            }
            n.r(t), n.d(t, {
                default: () => r
            })
        }
    }
]);
//# sourceMappingURL=Tooltip.3720c9ed3ad11cbeacbe.js.map