(self.webpackChunk = self.webpackChunk || []).push([
    ["JobsFilters"], {
        "./js/handlers/JobsFilters.js": (e, t, s) => {
            "use strict";

            function i(e) {
                const {
                    element: t
                } = e, s = t.querySelector("#filters__trigger"), i = t.querySelector("#switches"), a = t.querySelector("#jobs__filters-placeholder"), r = t.querySelectorAll('.jobs__filters__switch input[type="radio"]');
                let l;

                function d() {
                    window.matchMedia("(min-width: 1025px)").matches && s && (s.classList.remove("open"), s.setAttribute("tabindex", "-1"), l = !0, i.classList.add("slideDown"), i.classList.remove("slideUp"), i.classList.remove("closed"), a.classList.remove("closed"), Array.from(r).forEach((e => {
                        e.setAttribute("tabindex", "0")
                    })))
                }
                return window.matchMedia("(max-width: 1025px)").matches && Array.from(r).forEach((e => {
                    e.setAttribute("tabindex", "-1")
                })), s && s.addEventListener("click", (function(e) {
                    e.preventDefault(), this.classList.toggle("open");
                    const t = "true" === this.getAttribute("aria-expanded");
                    this.setAttribute("aria-expanded", t ? "false" : "true"), window.matchMedia("(max-width: 1024px)").matches && (i.classList.add("slideUp"), i.classList.remove("slideDown"), i.classList.add("closed"), a.classList.add("closed"), i.classList.remove("open")), this.classList.contains("open") ? (l = !0, i.classList.add("slideDown"), i.classList.remove("slideUp"), i.classList.remove("closed"), a.classList.remove("closed"), Array.from(r).forEach((e => {
                        e.setAttribute("tabindex", "0")
                    }))) : (this.setAttribute("tabindex", "0"), l = !1, Array.from(r).forEach((e => {
                        e.setAttribute("tabindex", "-1")
                    }))), d()
                }), !1), window.addEventListener("resize", d, !1), null
            }
            s.r(t), s.d(t, {
                default: () => i
            })
        }
    }
]);
//# sourceMappingURL=JobsFilters.0927e6361a79a832bf12.js.map