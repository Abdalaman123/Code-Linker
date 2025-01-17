const initNav = () => {
    const e = document.querySelector(".global-header"),
        t = document.querySelector(".global-header #js-search-input"),
        n = document.querySelector(".main-nav"),
        o = n.querySelector(".main-nav__primary"),
        s = document.querySelector(".secondary-nav"),
        c = s.querySelector(".main-nav__secondary");
    c.querySelectorAll(".nav-item-link").forEach(e => {
        e.tabIndex = "-1"
    });
    const a = o.querySelector(".main-nav-more-item").querySelector(".main-nav-more-item__button");
    t.addEventListener("blur", () => {
        e.classList.remove("searchFocused")
    }), t.addEventListener("focus", () => {
        e.classList.add("searchFocused")
    });
    const r = () => {
        n.classList.toggle("js-show-secondary"), s.classList.toggle("js-show-secondary"), a.setAttribute("aria-expanded", n.classList.contains("js-show-secondary"))
    };
    a.addEventListener("click", e => {
        e.preventDefault(), r()
    });
    const l = e => Array.from(e).filter(e => null !== e.offsetParent),
        d = e => {
            const t = Array.from(e).findIndex(e => !(e !== document.activeElement && !e.contains(document.activeElement)));
            return -1 === t ? 0 : t
        },
        i = e => {
            const t = l(e),
                n = d(t);
            return n + 1 < t.length ? t[n + 1] : a
        },
        u = e => {
            const t = l(e),
                n = d(t);
            return n - 1 < 0 ? a : t[n - 1]
        };
    document.addEventListener("keydown", e => {
        if (document.activeElement === a) {
            const t = l(o.querySelectorAll(".nav-item-link")),
                s = l(c.querySelectorAll(".nav-item-link"));
            37 === e.keyCode && t[t.length - 1].focus(), 39 === e.keyCode && t[0].focus(), 40 === e.keyCode && (e.preventDefault(), n.classList.contains("js-show-secondary") ? s[0].focus() : r()), 38 === e.keyCode && (e.preventDefault(), n.classList.contains("js-show-secondary") && r())
        } else if (o.contains(document.activeElement)) {
            const t = o.querySelectorAll(".nav-item-link");
            37 === e.keyCode && u(t).focus(), 39 === e.keyCode && i(t).focus()
        } else if (c.contains(document.activeElement)) {
            const t = l(o.querySelectorAll(".nav-item-link"));
            37 === e.keyCode && t[t.length - 1].focus(), 39 === e.keyCode && t[0].focus();
            const n = c.querySelectorAll(".nav-item-link");
            38 === e.keyCode && (e.preventDefault(), u(n).focus()), 40 === e.keyCode && (e.preventDefault(), i(n).focus())
        }
    }), document.addEventListener("click", e => {
        let t = e.target;
        for (; t;) {
            if (t === a) return;
            t = t.parentNode
        }
        n.classList.remove("js-show-secondary"), s.classList.remove("js-show-secondary"), a.setAttribute("aria-expanded", !1)
    }), document.body.classList.add("enhanced")
};
document.addEventListener("DOMContentLoaded", initNav);