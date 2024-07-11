(self.webpackChunk = self.webpackChunk || []).push([
    ["ContentTabs"], {
        "./js/handlers/ContentTabs.js": (e, t, s) => {
            "use strict";

            function c(e) {
                const {
                    element: t,
                    mq: s
                } = e, c = e.selected || 0, a = window.matchMedia(s), r = t.querySelectorAll(".content-tab"), n = t.querySelectorAll(".content-tab--content"), l = e => {
                    if (e.matches) {
                        if ([].forEach.call(n, (e => e.classList.add("hidden"))), [].forEach.call(n, (e => e.classList.remove("pricing__card--active"))), n[c] && n[c].classList.remove("hidden"), r[c] && r[c].classList.add("content-tabs__current"), r[c]) {
                            const e = r[c].querySelector("button");
                            e && e.setAttribute("aria-pressed", "true")
                        }
                    } else [].forEach.call(r, (e => e.classList.remove("content-tabs__current"))), [].forEach.call(n, (e => e.classList.remove("hidden")))
                };
                return a.addListener(l), l(a), [].forEach.call(r, ((e, t) => {
                    e.addEventListener("click", (s => {
                        [].forEach.call(n, (e => e.classList.add("hidden"))), n[t] && n[t].classList.remove("hidden"), [].forEach.call(r, (e => {
                            e.classList.remove("content-tabs__current"), e.querySelector("button").removeAttribute("aria-pressed", "true")
                        })), e.classList.add("content-tabs__current");
                        const c = e.querySelector("button");
                        c && c.setAttribute("aria-pressed", "true"), s.preventDefault()
                    }))
                })), null
            }
            s.r(t), s.d(t, {
                default: () => c
            })
        }
    }
]);
//# sourceMappingURL=ContentTabs.3fbf73f013e2b8d366aa.js.map