$(function () {
    $(".js-filterable-field").keyup(function (event) {
        menuList(this);
        stopEvent(event);
    })
})

function menuList(obj) {
    var id = $(obj).attr("id");
    var r = $(obj).val().trim().toLowerCase(),
        n = document.querySelectorAll("[data-filterable-for=" + id + "]"),
        a = !0,
        s = !1,
        i = void 0;
    try {
        for (var u, c = n[Symbol.iterator](); !(a = (u = c.next()).done); a = !0) {
            var l = u.value;
            if ("substring" == l.getAttribute("data-filterable-type")) {
               Ft(l,r);
            }
        }
    } catch (e) {
        s = !0, i = e
    } finally {
        try {
            !a && c.return && c.return()
        } finally {
            if (s) throw i
        }
    }
}
function Ft(e, t){
    var r = e.hasAttribute("data-filterable-highlight"),
        n = parseInt(e.getAttribute("data-filterable-limit"), 10) || null,
        a = 0;
    a = function(e, t) {
        var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
            n = void 0;
        if (e) {
            var a = t.toLowerCase(),
                s = null != r.text ? r.text : _t,
                o = r.limit,
                i = Array.from(e.children).filter(function(e) {
                    return !e.classList.contains("select-menu-no-results")
                });
            !0 === r.mark ? n = Ct : "function" == typeof r.mark && (n = r.mark);
            var u = 0,
                c = !0,
                l = !1,
                d = void 0;
            try {
                for (var m, f = i[Symbol.iterator](); !(c = (m = f.next()).done); c = !0) {
                    var p = m.value; - 1 !== s(p).indexOf(a) ? null != o && u >= o ? (p.style.display = "none", p.hidden = !0) : (u++, p.style.display = "", p.hidden = !1, n && (n(p), n(p, a))) : (p.style.display = "none", p.hidden = !0)
                }
            } catch (e) {
                l = !0, d = e
            } finally {
                try {
                    !c && f.return && f.return()
                } finally {
                    if (l) throw d
                }
            }
            return u
        }
    }(e, t, {
        mark: r,
        limit: n
    });!function(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
            r = e.closest(".js-select-menu, details-menu");
        if (!r) return;
        var n = function(e) {
            var t = e.querySelector("[data-filterable-notice]");
            return t || ((t = document.createElement("div")).classList.add("sr-only "), t.setAttribute("data-filterable-notice", ""), t.setAttribute("aria-live", "polite"), e.append(t), t)
        }(r);
        n.textContent = "", n.textContent = t + " results found."
    }(e, a), e.classList.toggle("filterable-active", t.length > 0), e.classList.toggle("filterable-empty", 0 === a)
}
function _t(e) {
    return e.textContent.toLowerCase().trim()
}