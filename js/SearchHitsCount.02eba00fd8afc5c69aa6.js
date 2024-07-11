(self.webpackChunk = self.webpackChunk || []).push([
    ["SearchHitsCount"], {
        "./js/containers/SearchHitsCount.js": (e, n, s) => {
            "use strict";
            s.r(n), s.d(n, {
                default: () => u
            });
            var t = s("../node_modules/react/index.js");
            const u = (0, s("../node_modules/react-redux/es/index.js").$j)((e => ({
                amount: e.search.count
            })))((function({
                amount: e
            }) {
                return t.createElement("span", null, e)
            }))
        }
    }
]);
//# sourceMappingURL=SearchHitsCount.02eba00fd8afc5c69aa6.js.map