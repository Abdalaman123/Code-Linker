(self.webpackChunk = self.webpackChunk || []).push([
    ["AddToCart"], {
        "./js/handlers/AddToCart.js": (t, e, s) => {
            "use strict";
            s.r(e), s.d(e, {
                default: () => c
            });
            var a = s("../node_modules/react-redux/es/index.js"),
                n = s("./js/actions/commerce.js");
            const c = (0, a.$j)(null, (t => ({
                addItemBySKU: (e, s) => t((0, n.oA)(e, s))
            })))((function(t) {
                const {
                    element: e,
                    addItemBySKU: s,
                    silent: a,
                    link: n
                } = t;
                return e.addEventListener("click", (t => {
                    if (t.preventDefault(), n) return window.location.assign(n);
                    if (!a) {
                        const t = e.innerHTML;
                        e.innerHTML = 'Great choice! 🎁<span class="sr-only">Item added to cart</span>', document.body.classList.add("js-cart-items");
                        const {
                            className: s
                        } = e;
                        e.classList.add("btn--green"), e.classList.add("outline--none"), setTimeout((() => {
                            e.classList.remove("btn--green"), e.classList.remove("outline--none"), e.className = s, e.innerHTML = t
                        }), 1500)
                    }! function() {
                        const t = document.querySelectorAll("#cart .cart-trigger")[0],
                            e = document.querySelectorAll("#cart .cart")[0];
                        e && t && (t.classList.remove("adding-to-cart-animation"), e.classList.remove("adding-to-cart-animation"), setTimeout((() => {
                            t.classList.add("adding-to-cart-animation"), e.classList.add("adding-to-cart-animation")
                        }), 10))
                    }(), s(e.getAttribute("data-product-sku"))
                }), !1), null
            }))
        }
    }
]);
//# sourceMappingURL=AddToCart.bbbf279d4f24eeaa3d87.js.map