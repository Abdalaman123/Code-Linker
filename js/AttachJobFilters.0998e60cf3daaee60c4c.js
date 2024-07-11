(self.webpackChunk = self.webpackChunk || []).push([
    ["AttachJobFilters"], {
        "./js/handlers/AttachJobFilters.js": (e, t, a) => {
            "use strict";

            function l({
                element: e
            }) {
                const t = document.getElementById("jobs__filters");
                if (!t) return null;
                const a = e.querySelector(".search-input"),
                    l = e.querySelector(".search-clear-button"),
                    n = {
                        location: "all",
                        commitment: "all",
                        jobtypes: "all",
                        search: null
                    },
                    s = [],
                    r = Array.from(document.querySelectorAll(".jobs__list .job") || []);
                let o = null;

                function c() {
                    let e = !1;
                    s.forEach(((t, a) => {
                        let l = !1;
                        Object.keys(n).forEach((e => {
                            (function(e, t, a) {
                                if ("all" === t) return !0;
                                switch (e) {
                                    case "jobtypes":
                                        return -1 !== a.indexOf(t);
                                    case "search":
                                        return null === t || -1 !== a.indexOf(t.toLowerCase());
                                    default:
                                        return a === t
                                }
                            })(e, n[e], t[e]) || (l = !0)
                        })), e = e || !l, r[a].classList.toggle("hidden", l)
                    })), o.classList.toggle("hidden", e)
                }
                return r.forEach((e => {
                    if (e.classList.contains("js-no-results")) return o = e, o;
                    s.push({
                        location: e.dataset.location,
                        commitment: e.dataset.commitment,
                        jobtypes: (e.dataset.jobtypes || "").split(",").map((e => e.toLowerCase())),
                        search: e.textContent.toLowerCase()
                    })
                })), Array.from(t.querySelectorAll("input[type='radio']") || []).forEach((e => e.addEventListener("change", (e => {
                    n[e.target.name] = e.target.value, c()
                }), !1))), document.getElementById("js-job-search-form").addEventListener("submit", (e => !e.preventDefault())), l.addEventListener("click", (e => {
                    e.preventDefault(), l.classList.remove("enabled"), a.value = "", c()
                })), a.addEventListener("input", (e => {
                    const {
                        value: t
                    } = e.target;
                    e.preventDefault(), n.search = t || null, c(), l && l.classList[t ? "add" : "remove"]("enabled")
                }), !1), null
            }
            a.r(t), a.d(t, {
                default: () => l
            })
        }
    }
]);
//# sourceMappingURL=AttachJobFilters.0998e60cf3daaee60c4c.js.map