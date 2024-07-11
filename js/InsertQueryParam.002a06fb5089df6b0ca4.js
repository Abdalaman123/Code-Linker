(self.webpackChunk = self.webpackChunk || []).push([
    ["InsertQueryParam"], {
        "./js/containers/InsertQueryParam.js": (e, s, r) => {
            "use strict";
            r.r(s), r.d(s, {
                default: () => n
            });
            var t = r("../node_modules/react/index.js"),
                a = r("./js/helpers/index.js");
            class n extends t.Component {
                constructor(e) {
                    super(e), this.render = () => {
                        const {
                            value: e
                        } = this.state;
                        return t.createElement("span", null, e)
                    }, this.state = {
                        value: (0, a.re)(e.param)
                    }
                }
            }
        }
    }
]);
//# sourceMappingURL=InsertQueryParam.002a06fb5089df6b0ca4.js.map