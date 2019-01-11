define("github-rollup-github-bootstrap", ["@github/query-selector", "selector-observer", "delegated-events", "github/onfocus", "github/sliding-promise-queue", "github/fetch", "invariant", "github/parse-html", "github/debounce", "github/remote-form", "github/form", "github/throttled-input", "github/history", "github/eventloop-tasks", "github/proxy-site-detection", "github/metadata", "github/send-beacon", "github/document-ready", "github/subscription", "github/updatable-content", "github/has-interactions", "github/pjax", "github/session-storage", "github/hotkey", "github/fetch-json", "github/fragment-target", "github/visible", "github/details-dialog", "github/remote-submit", "github/text", "github/sudo", "github/hash-change", "github/google-analytics", "github/number-helpers", "github/navigation", "github/inflector", "github/details", "form-data-entries", "github/menu", "github/select-menu/loading", "github/failbot", "@github/sortablejs", "scroll-anchoring", "github/sso", "github/pjax/prefetch", "github/code-editor", "github/task-list"], function(e, t, r, n, a, s, o, i, u, c, l, d, m, f, p, v, g, h, y, b, j, L, w, x, k, E, T, q, S, A, M, H, I, R, _, C, F, P, N, D, O, B, U, V, z, W, $) {
    "use strict";
    a = a && a.hasOwnProperty("default") ? a.default : a, o = o && o.hasOwnProperty("default") ? o.default : o, u = u && u.hasOwnProperty("default") ? u.default : u, p = p && p.hasOwnProperty("default") ? p.default : p;
    var K = "default" in L ? L.default : L;
 
    function J(t) {
        var r = e.query(t, 'input[type="radio"]', HTMLInputElement),
            n = r.hasAttribute("data-already-member"),
            a = e.closest(t, "form");
        if (a.classList.toggle("is-member", n), a.classList.toggle("is-not-member", !n), r.hasAttribute("data-member-type")) {
            var s = r.getAttribute("data-member-type");
            if (s) {
                var o = e.query(a, 'input[type="hidden"][name="member_type"]', HTMLInputElement);
                o && (o.value = s)
            }
        }
    }
    x = x && x.hasOwnProperty("default") ? x.default : x, T = T && T.hasOwnProperty("default") ? T.default : T, M = M && M.hasOwnProperty("default") ? M.default : M, H = H && H.hasOwnProperty("default") ? H.default : H, P = P && P.hasOwnProperty("default") ? P.default : P, B = B && B.hasOwnProperty("default") ? B.default : B, V = V && V.hasOwnProperty("default") ? V.default : V, t.observe(".js-account-membership", function(t) {
        var r = e.query(t, ".select-menu-item.selected", HTMLElement);
        r && J(r)
    }), r.on("selectmenu:selected", ".js-account-membership .select-menu-item", function(e) {
        J(e.currentTarget)
    });
    var G = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        },
        X = function(e) {
            return function() {
                var t = e.apply(this, arguments);
                return new Promise(function(e, r) {
                    return function n(a, s) {
                        try {
                            var o = t[a](s),
                                i = o.value
                        } catch (e) {
                            return void r(e)
                        }
                        if (!o.done) return Promise.resolve(i).then(function(e) {
                            n("next", e)
                        }, function(e) {
                            n("throw", e)
                        });
                        e(i)
                    }("next")
                })
            }
        },
        Q = function(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        },
        Y = function() {
            function e(e, t) {
                for (var r = 0; r < t.length; r++) {
                    var n = t[r];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                }
            }
            return function(t, r, n) {
                return r && e(t.prototype, r), n && e(t, n), t
            }
        }(),
        Z = function e(t, r, n) {
            null === t && (t = Function.prototype);
            var a = Object.getOwnPropertyDescriptor(t, r);
            if (void 0 === a) {
                var s = Object.getPrototypeOf(t);
                return null === s ? void 0 : e(s, r, n)
            }
            if ("value" in a) return a.value;
            var o = a.get;
            return void 0 !== o ? o.call(n) : void 0
        },
        ee = function(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        },
        te = function(e, t) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" != typeof t && "function" != typeof t ? e : t
        },
        re = function() {
            return function(e, t) {
                if (Array.isArray(e)) return e;
                if (Symbol.iterator in Object(e)) return function(e, t) {
                    var r = [],
                        n = !0,
                        a = !1,
                        s = void 0;
                    try {
                        for (var o, i = e[Symbol.iterator](); !(n = (o = i.next()).done) && (r.push(o.value), !t || r.length !== t); n = !0);
                    } catch (e) {
                        a = !0, s = e
                    } finally {
                        try {
                            !n && i.return && i.return()
                        } finally {
                            if (a) throw s
                        }
                    }
                    return r
                }(e, t);
                throw new TypeError("Invalid attempt to destructure non-iterable instance")
            }
        }(),
        ne = function(e, t) {
            return Object.freeze(Object.defineProperties(e, {
                raw: {
                    value: Object.freeze(t)
                }
            }))
        },
        ae = function(e) {
            if (Array.isArray(e)) {
                for (var t = 0, r = Array(e.length); t < e.length; t++) r[t] = e[t];
                return r
            }
            return Array.from(e)
        };
 
    function se() {
        var t = e.querySelectorAll(document, "input[type=text].js-advanced-search-prefix", HTMLInputElement),
            r = e.querySelectorAll(document, "select.js-advanced-search-prefix", HTMLSelectElement),
            n = e.querySelectorAll(document, ".js-advanced-search-prefix:checked", HTMLInputElement),
            a = [].concat(ae(ie(t)), ae(ie(r)), ae(ie(n))),
            s = a.reduce(function(e, t) {
                return t.value && t.type && e[t.type]++, e
            }, {
                Repositories: 0,
                Users: 0,
                Code: 0,
                Issues: 0
            }),
            o = a.reduce(function(e, t) {
                return (e + " " + (r = t, n = r.prefix, a = r.value, "" === n ? "" : a ? "" + n + a : "")).trim();
                var r, n, a
            }, ""),
            i = e.query(document, ".js-advanced-search-input", HTMLInputElement).value;
        e.query(document, ".js-type-value", HTMLInputElement).value = function(e) {
            var t = 0,
                r = "Repositories";
            for (var n in e) e[n] > t && (t = e[n], r = n);
            return r
        }(s), e.query(document, ".js-search-query", HTMLInputElement).value = (i + " " + o).trim();
        var u = e.query(document, ".js-advanced-query");
        u.innerHTML = "", u.textContent = o;
        var c = document.createElement("span");
        c.textContent = i.trim(), u.prepend(c, " ")
    }
 
    function oe(e) {
        return -1 !== e.search(/\s/g) ? '"' + e + '"' : e
    }
 
    function ie(t) {
        return t.map(function(t) {
            var r = t.value.trim(),
                n = e.getAttribute(t, "data-search-prefix"),
                a = t.getAttribute("data-search-type");
            return "" === n ? {
                prefix: n,
                value: r,
                type: a
            } : -1 !== r.search(/,/g) && "location" !== n ? r.split(/,/).map(function(e) {
                return {
                    prefix: n,
                    value: oe(e.trim()),
                    type: a
                }
            }) : {
                prefix: n,
                value: oe(r),
                type: a
            }
        }).reduce(function(e, t) {
            return e.concat(t)
        }, [])
    }
    n.onInput(".js-advanced-search-prefix", function() {
        se()
    }), r.on("change", ".js-advanced-search-prefix", se), n.onFocus(".js-advanced-search-input", function(t) {
        var r = e.closest(t, ".js-advanced-search-label");
        r.classList.add("focus"), t.addEventListener("blur", function() {
            return r.classList.remove("focus")
        }, {
            once: !0
        })
    }), t.observe(".js-advanced-search-input", function() {
        se()
    });
    var ue, ce = new a;
 
    function le(e) {
        return o(e instanceof HTMLElement, "app/assets/modules/github/apps/installation-repo-selection.js:16"), e.querySelectorAll(".js-integrations-install-repo-picked .js-repository-picker-result").length
    }
 
    function de(e) {
        o(e instanceof HTMLElement, "app/assets/modules/github/apps/installation-repo-selection.js:32");
        var t = e.querySelector("input.js-no-repositories-radio"),
            r = e.querySelector("input.js-all-repositories-radio");
        return o(r instanceof HTMLInputElement, "app/assets/modules/github/apps/installation-repo-selection.js:35"), t instanceof HTMLInputElement && t.checked || r.checked || function(e) {
            return le(e) > 0
        }(e)
    }
 
    function me() {
        return document.querySelector(".js-apps-install-select-repositories-container")
    }
 
    function fe() {
        var e = me();
        return e && e.querySelector(".js-filterable-field")
    }
 
    function pe(e) {
        return function() {
            var t = e.querySelector("button.js-integrations-install-form-submit");
            o(t instanceof HTMLButtonElement, "app/assets/modules/github/apps/installation-repo-selection.js:53"), t.disabled = !de(e);
            var r = e.querySelector(".flash");
            r && r.classList.toggle("d-none", ! function(e) {
                var t = +e.getAttribute("data-max-repos");
                if (t) return le(e) >= t
            }(e))
        }
    }
 
    function ve() {
        var e = 0;
        0 !== document.querySelectorAll(".js-integrations-install-repo-picked:not(.d-none)").length && (e = document.querySelectorAll(".js-repository-picker-result:not(.d-none)").length);
        var t = "";
        e > 0 && (t = "Selected " + e + " " + (e > 1 ? "repositories" : "repository"));
        var r = document.querySelector(".js-integration-total-repos");
        o(r instanceof HTMLElement, "app/assets/modules/github/apps/installation-repo-selection.js:78"), r.textContent = t
    }
 
    function ge(e, t) {
        var r = e.querySelector(".js-app-logo-with-bgcolor");
        r && (r.style.backgroundColor = "#" + t)
    }
 
    function he(e, t) {
        var r = e.nextElementSibling;
        if (r) return o(r instanceof HTMLElement, "app/assets/modules/github/find-next-element-sibling.js:8"), r.classList.contains(t) ? r : he(r, t)
    }
 
    function ye() {
        var e = document.getElementById("ajax-error-message");
        e && e.classList.add("visible")
    }
 
    function be() {
        var e = document.getElementById("ajax-error-message");
        e && e.classList.remove("visible")
    }
    t.observe(".js-integrations-install-form", function(t) {
            var n, a = (n = X(regeneratorRuntime.mark(function e(t) {
                    var r, n, a, u, d, m, f, p, v, g, h, y, b;
                    return regeneratorRuntime.wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return e.prev = 0, r = fe(), n = r && r.getAttribute("data-alternate-search-url"), o(n, "app/assets/modules/github/apps/installation-repo-selection.js:121"), a = Array.prototype.slice.call(document.querySelectorAll(".js-integrations-install-repo-picked .js-selected-repository-field")).map(function(e) {
                                    return o(e instanceof HTMLInputElement, "app/assets/modules/github/apps/installation-repo-selection.js:126"), e.value
                                }), n += ~n.indexOf("?") ? "&" : "?", n += "q=" + encodeURIComponent(t), e.next = 9, ce.push(s.fetchText(n));
                            case 9:
                                for (u = e.sent, d = i.parseHTML(document, u.trim()), m = !0, f = !1, p = void 0, e.prev = 14, v = d.querySelectorAll(".js-navigation-item")[Symbol.iterator](); !(m = (g = v.next()).done); m = !0) h = g.value, y = h.getAttribute("data-autocomplete-value"), a.includes(y) && h.remove();
                                e.next = 22;
                                break;
                            case 18:
                                e.prev = 18, e.t0 = e.catch(14), f = !0, p = e.t0;
                            case 22:
                                e.prev = 22, e.prev = 23, !m && v.return && v.return();
                            case 25:
                                if (e.prev = 25, !f) {
                                    e.next = 28;
                                    break
                                }
                                throw p;
                            case 28:
                                return e.finish(25);
                            case 29:
                                return e.finish(22);
                            case 30:
                                for (; c.firstChild;) c.removeChild(c.firstChild);
                                c.append(d);
                            case 32:
                                return e.prev = 32, (b = me()) && b.classList.remove("is-loading"), l = null, e.finish(32);
                            case 37:
                            case "end":
                                return e.stop()
                        }
                    }, e, this, [
                        [0, , 32, 37],
                        [14, 18, 22, 30],
                        [23, , 25, 29]
                    ])
                })), function(e) {
                    return n.apply(this, arguments)
                }),
                u = me();
            if (u) {
                var c = u.querySelector(".js-navigation-container");
                o(c, "app/assets/modules/github/apps/installation-repo-selection.js:86"), t.addEventListener("change", pe(t)), r.on("selectmenu:selected", ".js-apps-install-select-repositories-container", function(r) {
                    r.target.classList.add("d-none");
                    var n = t.querySelector(".js-integrations-install-repo-picked"),
                        s = r.target.querySelector(".js-repository-picker-result");
                    o(s instanceof HTMLElement, "app/assets/modules/github/apps/installation-repo-selection.js:97");
                    var u = i.parseHTML(document, s.outerHTML.trim()).querySelector(".js-repository-picker-result");
                    o(u instanceof HTMLElement, "app/assets/modules/github/apps/installation-repo-selection.js:101"), u.classList.remove("d-none"), o(n, "app/assets/modules/github/apps/installation-repo-selection.js:103"), n.insertBefore(u, n.firstChild), e.query(document, ".js-min-repository-error").classList.add("d-none"), ve(), pe(t).call(), a("")
                });
                var l = null;
                r.on("filterable:change", ".js-apps-install-select-repositories-container", function(e) {
                    if (!l) {
                        l = e;
                        var t = me();
                        t && t.classList.add("is-loading"), c.classList.contains("filterable-active") ? setTimeout(function() {
                            var e = fe();
                            if (e instanceof HTMLInputElement) {
                                var t = e.value.trim();
                                a(t)
                            }
                        }, 1e3) : (t && t.classList.remove("is-loading"), l = null)
                    }
                }), r.on("click", ".js-repository-picker-remove", function(r) {
                    var n = r.target.closest(".js-repository-picker-result");
                    o(n instanceof HTMLElement, "app/assets/modules/github/apps/installation-repo-selection.js:192");
                    var s = r.target.closest("svg.js-repository-picker-remove");
                    if (s) {
                        var i = s.getAttribute("data-repo-id");
                        if (i) {
                            var u = me(),
                                c = u && u.querySelector('.js-navigation-item[data-repo-id="' + i + '"]');
                            c && (c.classList.remove("selected"), c.classList.remove("d-none"))
                        }
                    }
                    if (n.remove(), 0 === e.query(document, ".js-integrations-install-repo-picked").children.length) {
                        var l = Array.from(document.querySelectorAll(".js-min-repository-error")),
                            d = !0,
                            m = !1,
                            f = void 0;
                        try {
                            for (var p, v = l[Symbol.iterator](); !(d = (p = v.next()).done); d = !0) {
                                p.value.classList.remove("d-none")
                            }
                        } catch (e) {
                            m = !0, f = e
                        } finally {
                            try {
                                !d && v.return && v.return()
                            } finally {
                                if (m) throw f
                            }
                        }
                    }
                    return ve(), a(""), pe(t).call()
                }), r.on("click", ".js-apps-install-select-repositories-container .js-menu-target", function() {
                    return e.query(document, ".js-select-repositories-radio", HTMLInputElement).checked = !0, pe(t).call()
                }), r.on("click", ".js-no-repositories-radio", function() {
                    e.query(document, ".js-integrations-install-repo-picked, .js-min-repository-error").classList.add("d-none"), ve()
                }), r.on("click", ".js-all-repositories-radio", function() {
                    e.query(document, ".js-integrations-install-repo-picked, .js-min-repository-error").classList.add("d-none"), ve()
                }), r.on("click", ".js-select-repositories-radio", function() {
                    e.query(document, ".js-integrations-install-repo-picked").classList.remove("d-none"), ve()
                })
            }
        }), r.on("submit", ".js-integrations-install-form", function(e) {
            var t = e.target.querySelector(".js-all-repositories-radio");
            if (t instanceof HTMLInputElement)
                if (t.checked) {
                    var r = Array.from(e.target.querySelectorAll('input[name="repository_ids[]"]')),
                        n = !0,
                        a = !1,
                        s = void 0;
                    try {
                        for (var i, u = r[Symbol.iterator](); !(n = (i = u.next()).done); n = !0) {
                            i.value.remove()
                        }
                    } catch (e) {
                        a = !0, s = e
                    } finally {
                        try {
                            !n && u.return && u.return()
                        } finally {
                            if (a) throw s
                        }
                    }
                } else {
                    var c = me();
                    if (!c) return;
                    var l = c.querySelector(".js-navigation-container");
                    for (o(l instanceof HTMLElement, "app/assets/modules/github/apps/installation-repo-selection.js:260"); l.firstChild;) l.removeChild(l.firstChild)
                }
        }), c.remoteForm(".js-app-bgcolor-form", (ue = X(regeneratorRuntime.mark(function e(t, r) {
            var n, a;
            return regeneratorRuntime.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                    case 0:
                        if (n = t.querySelector(".js-app-bgcolor-save-notice")) {
                            e.next = 3;
                            break
                        }
                        return e.abrupt("return");
                    case 3:
                        return a = void 0, e.prev = 4, e.next = 7, r.html();
                    case 7:
                        a = e.sent, e.next = 13;
                        break;
                    case 10:
                        e.prev = 10, e.t0 = e.catch(4), n.classList.remove("visible");
                    case 13:
                        a && (n.classList.add("visible"), setTimeout(function() {
                            return n.classList.remove("visible")
                        }, 1500));
                    case 14:
                    case "end":
                        return e.stop()
                }
            }, e, this, [
                [4, 10]
            ])
        })), function(e, t) {
            return ue.apply(this, arguments)
        })), n.onInput(".js-app-bgcolor-input", function(t) {
            var r = t.target;
            o(r instanceof HTMLInputElement, "app/assets/modules/github/apps.js:46");
            var n = e.closest(r, "form", HTMLFormElement),
                a = r.value.replace(/^#/, "");
            if (a.length < 1) return r.classList.remove("text-red"), void ge(n, r.defaultValue);
            r.checkValidity() ? (r.classList.remove("text-red"), ge(n, a), n.classList.contains("js-app-bgcolor-form") && u(function() {
                return function(e, t) {
                    t.checkValidity() && l.submit(e)
                }(n, r)
            }, 400)()) : (r.classList.add("text-red"), ge(n, r.defaultValue))
        }), r.on("click", ".js-banner .js-next", function(t) {
            var r = e.closest(t.currentTarget, ".js-banner"),
                n = e.query(r, ".js-dismiss", HTMLButtonElement),
                a = e.query(r, ".js-next", HTMLButtonElement),
                s = e.query(r, ".js-page.d-block"),
                i = he(s, "js-page");
            o(i, "app/assets/modules/github/banner.js:43"), s.classList.remove("d-block"), s.classList.add("d-none"), i.classList.remove("d-none"), i.classList.add("d-block"), he(i, "js-page") || (a.classList.add("d-none"), n.classList.remove("d-none"))
        }), t.observe(".js-banner", function(t) {
            var r = e.query(t, ".js-dismiss", HTMLButtonElement);
            if (t.querySelectorAll(".js-page").length > 0) {
                var n = e.query(t, ".js-next", HTMLButtonElement),
                    a = e.query(t, ".js-page.d-block", HTMLDivElement);
                a && !he(a, "js-page") ? r.classList.remove("d-none") : n.classList.remove("d-none")
            } else r.classList.remove("d-none")
        }), r.on("deprecatedAjaxError", "[data-remote]", function(e) {
            o(e instanceof CustomEvent, "app/assets/modules/github/behaviors/ajax-error.js:25");
            var t = e.detail,
                r = t.error,
                n = t.text;
            e.currentTarget === e.target && "abort" !== r && "canceled" !== r && (/<html/.test(n) ? (ye(), e.stopImmediatePropagation()) : setTimeout(function() {
                e.defaultPrevented || ye()
            }, 0))
        }), r.on("deprecatedAjaxSend", "[data-remote]", function() {
            be()
        }), r.on("click", ".js-ajax-error-dismiss", function() {
            be()
        }), r.on("deprecatedAjaxSend", "[data-remote]", function(e) {
            e.currentTarget === e.target && (e.defaultPrevented || e.currentTarget.classList.add("loading"))
        }), r.on("deprecatedAjaxComplete", "[data-remote]", function(e) {
            e.currentTarget === e.target && e.currentTarget.classList.remove("loading")
        }), c.remoteForm("form.js-ajax-pagination, .js-ajax-pagination form", function() {
            var t = X(regeneratorRuntime.mark(function t(n, a) {
                var s, o;
                return regeneratorRuntime.wrap(function(t) {
                    for (;;) switch (t.prev = t.next) {
                        case 0:
                            return s = e.closest(n, ".js-ajax-pagination"), o = void 0, t.prev = 2, t.next = 5, a.html();
                        case 5:
                            o = t.sent, t.next = 16;
                            break;
                        case 8:
                            if (t.prev = 8, t.t0 = t.catch(2), !t.t0.response || 404 !== t.t0.response.status) {
                                t.next = 15;
                                break
                            }
                            return s.remove(), t.abrupt("return");
                        case 15:
                            throw t.t0;
                        case 16:
                            s.replaceWith(o.html), r.fire(n, "page:loaded");
                        case 18:
                        case "end":
                            return t.stop()
                    }
                }, t, this, [
                    [2, 8]
                ])
            }));
            return function(e, r) {
                return t.apply(this, arguments)
            }
        }()),
        function() {
            var e = document.createElement("input");
            if (!("checkValidity" in e && "setCustomValidity" in e && (e.required = !0, e.value = "hi", e.cloneNode().checkValidity()))) {
                var t = new WeakMap,
                    r = !0,
                    n = !1,
                    a = void 0;
                try {
                    for (var s, o = ["HTMLFormElement", "HTMLInputElement", "HTMLTextAreaElement", "HTMLSelectElement", "HTMLButtonElement", "HTMLFieldSetElement", "HTMLOutputElement"][Symbol.iterator](); !(r = (s = o.next()).done); r = !0) {
                        var i = s.value;
                        window[i] && (window[i].prototype.checkValidity = u, "HTMLFormElement" !== i && (window[i].prototype.setCustomValidity = c))
                    }
                } catch (e) {
                    n = !0, a = e
                } finally {
                    try {
                        !r && o.return && o.return()
                    } finally {
                        if (n) throw a
                    }
                }
            }
 
            function u() {
                var e = function() {
                    if (this instanceof HTMLFormElement || this instanceof HTMLFieldSetElement) {
                        var e = !0,
                            r = !1,
                            n = void 0;
                        try {
                            for (var a, s = this.elements[Symbol.iterator](); !(e = (a = s.next()).done); e = !0)
                                if (!a.value.checkValidity()) return !1
                        } catch (e) {
                            r = !0, n = e
                        } finally {
                            try {
                                !e && s.return && s.return()
                            } finally {
                                if (r) throw n
                            }
                        }
                        return !0
                    }
                    if (this instanceof HTMLInputElement && "hidden" === this.type) return !0;
                    if (t.get(this)) return !1;
                    if (this.hasAttribute("required") && !this.value) return !1;
                    var o = this.getAttribute("pattern");
                    if (null != o && this.value) {
                        var i = new RegExp("^(?:" + o + ")$");
                        if (0 !== this.value.search(i)) return !1
                    }
                    return !0
                }.call(this);
                if (!e) {
                    var r = new CustomEvent("invalid", {
                        bubbles: !1,
                        cancelable: !0
                    });
                    this.dispatchEvent(r)
                }
                return e
            }
 
            function c(e) {
                t.set(this, e)
            }
        }();
    var je = ["input[pattern]", "input[required]", "textarea[required]", "input[data-required-change]", "textarea[data-required-change]"].join(",");
    n.onFocus(je, function(e) {
        o(e instanceof HTMLInputElement || e instanceof HTMLTextAreaElement, "app/assets/modules/github/behaviors/html-validation.js:21");
        var t = e.checkValidity();
 
        function r() {
            var r = e.checkValidity();
            r !== t && e.form && we(e.form), t = r
        }
        e.addEventListener("input", r), e.addEventListener("blur", function t() {
            e.removeEventListener("input", r), e.removeEventListener("blur", t)
        })
    });
    var Le = new WeakMap;
 
    function we(t) {
        var r = t.checkValidity(),
            n = !0,
            a = !1,
            s = void 0;
        try {
            for (var o, i = e.querySelectorAll(t, "button[data-disable-invalid]", HTMLButtonElement)[Symbol.iterator](); !(n = (o = i.next()).done); n = !0) {
                o.value.disabled = !r
            }
        } catch (e) {
            a = !0, s = e
        } finally {
            try {
                !n && i.return && i.return()
            } finally {
                if (a) throw s
            }
        }
    }
    t.observe("button[data-disable-invalid]", {
        constructor: HTMLButtonElement,
        initialize: function(e) {
            var t = e.form;
            t && (! function(e) {
                Le.get(e) || (e.addEventListener("change", function() {
                    return we(e)
                }), Le.set(e, !0))
            }(t), e.disabled = !t.checkValidity())
        }
    }), t.observe("input[data-required-change], textarea[data-required-change]", function(e) {
        function t() {
            e.setCustomValidity(e.value === e.defaultValue ? "unchanged" : "")
        }
        o(e instanceof HTMLInputElement || e instanceof HTMLTextAreaElement, "app/assets/modules/github/behaviors/html-validation.js:68"), e.addEventListener("input", t), e.addEventListener("change", t), t(), e.form && we(e.form)
    }), document.addEventListener("reset", function(e) {
        if (e.target instanceof HTMLFormElement) {
            var t = e.target;
            setTimeout(function() {
                return we(t)
            })
        }
    }), r.on("submit", "form.js-normalize-submit", function(e) {
        var t = e.currentTarget;
        o(t instanceof HTMLFormElement, "app/assets/modules/github/behaviors/html-validation.js:97"), t.checkValidity() || e.preventDefault()
    });
    var xe = new WeakMap;
 
    function ke(e, t) {
        t.classList.remove("is-loading", "successed", "errored", "warn"), e.classList.remove("is-autocheck-loading", "is-autocheck-successful", "is-autocheck-errored");
        var r = t.querySelector("p.note");
        if (r) {
            var n = xe.get(r);
            n && (r.innerHTML = n)
        }
        var a = t.querySelector("dd.error");
        a && a.remove();
        var s = t.querySelector("dd.warning");
        s && s.remove()
    }
 
    function Ee(e) {
        var t = e.closest("form");
        if (t) {
            var r = t.querySelector(".js-auto-complete-button");
            r instanceof HTMLButtonElement && (r.disabled = !e.value)
        }
    }
    t.observe("auto-check", function(t) {
        var r = e.query(t, "input", HTMLInputElement),
            n = e.closest(r, "dl.form-group"),
            a = r.form;
        o(a, "app/assets/modules/github/behaviors/autocheck.js:16");
        var s = n.querySelector("p.note");
        s && xe.set(s, s.innerHTML), t.addEventListener("loadstart", function() {
            ke(r, n), n.classList.add("is-loading"), r.classList.add("is-autocheck-loading"), we(a)
        }), t.addEventListener("loadend", function() {
            n.classList.remove("is-loading"), r.classList.remove("is-autocheck-loading")
        }), r.addEventListener("autocheck:success", function(e) {
            o(e instanceof CustomEvent, "app/assets/modules/github/behaviors/autocheck.js:35"), r.classList.add("is-autocheck-successful"), n.classList.add("successed"), we(a);
            var t = e.detail.message;
            if (t)
                if (s) s.innerHTML = t;
                else {
                    var i = document.createElement("dd");
                    i.classList.add("warning"), i.innerHTML = t, n.append(i), n.classList.add("warn")
                }
        }), r.addEventListener("autocheck:error", function(e) {
            if (o(e instanceof CustomEvent, "app/assets/modules/github/behaviors/autocheck.js:56"), r.classList.add("is-autocheck-errored"), n.classList.add("errored"), we(a), s) s.innerHTML = e.detail.message || "Something went wrong";
            else {
                var t = e.detail.message || "Something went wrong",
                    i = document.createElement("dd");
                i.classList.add("error"), i.innerHTML = t, n.append(i)
            }
        }), r.addEventListener("input", function() {
            r.value || ke(r, n)
        })
    }), t.observe("auto-complete", function(e) {
        e.addEventListener("loadstart", function() {
            return e.classList.add("is-auto-complete-loading")
        }), e.addEventListener("loadend", function() {
            return e.classList.remove("is-auto-complete-loading")
        })
    }), t.observe("auto-complete", {
        constructor: AutocompleteElement,
        initialize: Ee
    }), r.on("change", "auto-complete", function(e) {
        o(e.currentTarget instanceof AutocompleteElement, "app/assets/modules/github/behaviors/autocomplete.js:18"), Ee(e.currentTarget)
    });
    var Te = function() {
            var e = X(regeneratorRuntime.mark(function e(t) {
                var r, n, a, i, u, c;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                        case 0:
                            return r = t.form, o(r, "app/assets/modules/github/behaviors/autosearch-form.js:34"), r.classList.add("is-sending"), e.prev = 3, n = l.serialize(r), a = (r.action + "&" + n).replace(/[?&]/, "?"), e.next = 8, qe.push(s.fetchText(a));
                        case 8:
                            i = e.sent, u = r.getAttribute("data-results-container"), (c = u ? document.getElementById(u) : null) && (c.innerHTML = i), m.replaceState(null, "", "?" + n);
                        case 13:
                            return e.prev = 13, r.classList.remove("is-sending"), e.finish(13);
                        case 16:
                        case "end":
                            return e.stop()
                    }
                }, e, this, [
                    [3, , 13, 16]
                ])
            }));
            return function(t) {
                return e.apply(this, arguments)
            }
        }(),
        qe = new a;
 
    function Se() {
        if ("Intl" in window) try {
            return (new window.Intl.DateTimeFormat).resolvedOptions().timeZone
        } catch (e) {
            if (!(e instanceof RangeError)) throw e
        }
    }
 
    function Ae(e, t) {
        return !!(e && t in e && (r = e[t], "function" == typeof r && r.toString().match(/native code/)));
        var r
    }
    n.onFocus(".js-autosearch-field", function(e) {
        var t = e;
        o(t instanceof HTMLInputElement, "app/assets/modules/github/behaviors/autosearch-form.js:54"), d.addThrottledInputEventListener(t, Te), t.addEventListener("blur", function() {
            return d.removeThrottledInputEventListener(t, Te)
        }, {
            once: !0
        })
    }), n.onFocus("input[data-autoselect]", function() {
        var e = X(regeneratorRuntime.mark(function e(t) {
            return regeneratorRuntime.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                    case 0:
                        return o(t instanceof HTMLInputElement, "app/assets/modules/github/behaviors/autoselect.js:10"), e.next = 3, f.microtask();
                    case 3:
                        t.select();
                    case 4:
                    case "end":
                        return e.stop()
                }
            }, e, this)
        }));
        return function(t) {
            return e.apply(this, arguments)
        }
    }()), r.on("change", "form[data-autosubmit]", function(e) {
        var t = e.currentTarget;
        o(t instanceof HTMLFormElement, "app/assets/modules/github/behaviors/autosubmit.js:20"), l.submit(t)
    }), r.on("change", "input[data-autosubmit]", function(e) {
        var t = e.currentTarget;
        o(t instanceof HTMLInputElement, "app/assets/modules/github/behaviors/autosubmit.js:25");
        var r = t.form;
        o(r, "app/assets/modules/github/behaviors/autosubmit.js:27"), l.submit(r)
    });
    var Me = {
            beacon: Ae(window.navigator, "sendBeacon"),
            customElements: Ae(window.customElements, "define"),
            highResolutionTime: Ae(window.performance, "now"),
            stringEndsWith: Ae(String.prototype, "endsWith"),
            stringStartsWith: Ae(String.prototype, "startsWith"),
            timezone: !!Se(),
            userTimingEntries: Ae(window.performance, "getEntries"),
            userTimingMark: Ae(window.performance, "mark")
        },
        He = function() {
            var e = X(regeneratorRuntime.mark(function e() {
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                        case 0:
                            return e.next = 2, h.loaded;
                        case 2:
                            null == _e && (_e = requestIdleCallback(Ce));
                        case 3:
                        case "end":
                            return e.stop()
                    }
                }, e, this)
            }));
            return function() {
                return e.apply(this, arguments)
            }
        }(),
        Ie = [];
 
    function Re(e) {
        void 0 === e.timestamp && (e.timestamp = (new Date).getTime()), Ie.push(e), He()
    }
    var _e = null;
 
    function Ce() {
        if (_e = null, !p(document)) {
            var e = v.getMetadataByName(document, "browser-stats-url");
            e && (g.guaranteedPost(e, JSON.stringify({
                stats: Ie
            }), "application/json"), Ie = [])
        }
    }
 
    function Fe(e) {
        e.preventDefault(), e.stopPropagation()
    }
    Re({
        features: Me
    }), t.observe("a.btn.disabled", {
        subscribe: function(e) {
            return y.fromEvent(e, "click", Fe)
        }
    });
 
    function Pe(e) {
        try {
            return JSON.parse(window.localStorage.getItem(e))
        } catch (e) {
            return {}
        }
    }
 
    function Ne(e, t) {
        try {
            window.localStorage.setItem(e, JSON.stringify(t))
        } catch (e) {}
    }
 
    function De() {
        var e = {},
            t = !0,
            r = !1,
            n = void 0;
        try {
            for (var a, s = document.getElementsByTagName("script")[Symbol.iterator](); !(t = (a = s.next()).done); t = !0) {
                var o = a.value;
                (m = o.src.match(/\/([\w-]+)-[0-9a-f]{32,}\.js$/)) && (e[m[1] + ".js"] = o.src)
            }
        } catch (e) {
            r = !0, n = e
        } finally {
            try {
                !t && s.return && s.return()
            } finally {
                if (r) throw n
            }
        }
        var i = !0,
            u = !1,
            c = void 0;
        try {
            for (var l, d = document.getElementsByTagName("link")[Symbol.iterator](); !(i = (l = d.next()).done); i = !0) {
                var m, f = l.value;
                (m = f.href.match(/\/([\w-]+)-[0-9a-f]{32,}\.css$/)) && (e[m[1] + ".css"] = f.href)
            }
        } catch (e) {
            u = !0, c = e
        } finally {
            try {
                !i && d.return && d.return()
            } finally {
                if (u) throw c
            }
        }
        return e
    }
    X(regeneratorRuntime.mark(function e() {
        var t, r, n;
        return regeneratorRuntime.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
                case 0:
                    return e.next = 2, h.loaded;
                case 2:
                    t = Pe("bundle-urls") || {}, Ne("bundle-urls", r = De()), (n = Object.keys(r).filter(function(e) {
                        var n = r[e];
                        return t[e] !== n
                    })).length && Re({
                        downloadedBundles: n
                    });
                case 7:
                case "end":
                    return e.stop()
            }
        }, e, void 0)
    }))();
    var Oe, Be, Ue, Ve, ze, We, $e, Ke = function() {
        return function(e, t) {
            if (Array.isArray(e)) return e;
            if (Symbol.iterator in Object(e)) return function(e, t) {
                var r = [],
                    n = !0,
                    a = !1,
                    s = void 0;
                try {
                    for (var o, i = e[Symbol.iterator](); !(n = (o = i.next()).done) && (r.push(o.value), !t || r.length !== t); n = !0);
                } catch (e) {
                    a = !0, s = e
                } finally {
                    try {
                        !n && i.return && i.return()
                    } finally {
                        if (a) throw s
                    }
                }
                return r
            }(e, t);
            throw new TypeError("Invalid attempt to destructure non-iterable instance")
        }
    }();
 
    function Je(e) {
        var t = e.querySelector(".js-clipboard-clippy-icon"),
            r = e.querySelector(".js-clipboard-check-icon");
        e.classList.toggle("ClipboardButton--success"), e.classList.toggle("tooltipped"), e.classList.toggle("tooltipped-s"), t && t.classList.toggle("d-none"), r && r.classList.toggle("d-none")
    }
 
    function Ge(e) {
        var t = e.querySelector(".js-comment-form-error");
        t && (t.style.display = "none")
    }
 
    function Xe(e, t) {
        var r = "You can't comment at this time";
        if (t.response && 422 === t.response.status) {
            var n = t.response.json;
            n.errors && (r += " 鈥� your comment " + n.errors.join(", "))
        }
        r += ". ";
        var a = e.querySelector(".js-comment-form-error");
        a && (a.style.display = "block", a.classList.remove("d-none"), a.textContent = r)
    }
 
    function Qe(e, t) {
        var r = e.closest(".js-write-bucket");
        r && r.classList.toggle("focused", t)
    }
 
    function Ye(e) {
        var t = e.currentTarget;
        t instanceof Element && Qe(t, !1)
    }
    t.observe(".js-check-all-container", {
        subscribe: function(e) {
            var t = !1,
                r = null;
 
            function n(e, t, r, n) {
                t instanceof HTMLInputElement && (t.indeterminate = n, t.checked !== r && (t.checked = r, setTimeout(function() {
                    var r = new CustomEvent("change", {
                        bubbles: !0,
                        cancelable: !1,
                        detail: {
                            relatedTarget: e
                        }
                    });
                    t.dispatchEvent(r)
                })))
            }
 
            function a(a) {
                var s = a.target;
                s instanceof Element && (s.hasAttribute("data-check-all") ? function(t) {
                    if (t instanceof CustomEvent) {
                        var a = t.detail.relatedTarget;
                        if (a && a.hasAttribute("data-check-all-item")) return
                    }
                    var s = t.target;
                    if (s instanceof HTMLInputElement) {
                        r = null;
                        var i = !0,
                            u = !1,
                            c = void 0;
                        try {
                            for (var l, d = e.querySelectorAll("[data-check-all-item]")[Symbol.iterator](); !(i = (l = d.next()).done); i = !0) {
                                var m = l.value;
                                n(s, m, s.checked, !1)
                            }
                        } catch (e) {
                            u = !0, c = e
                        } finally {
                            try {
                                !i && d.return && d.return()
                            } finally {
                                if (u) throw c
                            }
                        }
                        o()
                    }
                }(a) : s.hasAttribute("data-check-all-item") && function(a) {
                    if (a instanceof CustomEvent) {
                        var s = a.detail.relatedTarget;
                        if (s.hasAttribute("data-check-all") || s.hasAttribute("data-check-all-item")) return
                    }
                    var i = a.target;
                    if (i instanceof HTMLInputElement) {
                        var u = e.querySelector("[data-check-all]");
                        if (u) {
                            var c = Array.from(e.querySelectorAll("[data-check-all-item]"));
                            if (t && r) {
                                var l = [c.indexOf(r), c.indexOf(i)].sort(),
                                    d = Ke(l, 2),
                                    m = d[0],
                                    f = d[1],
                                    p = !0,
                                    v = !1,
                                    g = void 0;
                                try {
                                    for (var h, y = c.slice(m, +f + 1 || 9e9)[Symbol.iterator](); !(p = (h = y.next()).done); p = !0) {
                                        var b = h.value;
                                        n(i, b, i.checked, !1)
                                    }
                                } catch (e) {
                                    v = !0, g = e
                                } finally {
                                    try {
                                        !p && y.return && y.return()
                                    } finally {
                                        if (v) throw g
                                    }
                                }
                            }
                            t = !1, r = i;
                            var j = c.length,
                                L = c.filter(function(e) {
                                    return e instanceof HTMLInputElement && e.checked
                                }).length;
                            n(i, u, L === j, j > L && L > 0), o()
                        }
                    }
                }(a))
            }
 
            function s(e) {
                e.target instanceof Element && e.target.hasAttribute("data-check-all-item") && (t = e.shiftKey)
            }
 
            function o() {
                var t = e.querySelector("[data-check-all-count]");
                if (t) {
                    var r = e.querySelectorAll("[data-check-all-item]:checked").length;
                    t.textContent = r.toString()
                }
            }
            return e.addEventListener("mousedown", s), e.addEventListener("change", a), {
                unsubscribe: function() {
                    e.removeEventListener("mousedown", s), e.removeEventListener("change", a)
                }
            }
        }
    }), r.on("copy", ".js-clipboard-copy", function(e) {
        Je(e.target), setTimeout(function() {
            return Je(e.target)
        }, 2e3)
    }), c.remoteForm(".js-new-comment-form", function() {
        var t = X(regeneratorRuntime.mark(function t(r, n) {
            var a, s, o, i, u, c, d, m, f, p, v;
            return regeneratorRuntime.wrap(function(t) {
                for (;;) switch (t.prev = t.next) {
                    case 0:
                        return a = void 0, Ge(r), t.prev = 2, t.next = 5, n.json();
                    case 5:
                        a = t.sent, t.next = 11;
                        break;
                    case 8:
                        t.prev = 8, t.t0 = t.catch(2), Xe(r, t.t0);
                    case 11:
                        if (a) {
                            t.next = 13;
                            break
                        }
                        return t.abrupt("return");
                    case 13:
                        for (r.reset(), s = !0, o = !1, i = void 0, t.prev = 17, u = e.querySelectorAll(r, ".js-resettable-field", HTMLInputElement)[Symbol.iterator](); !(s = (c = u.next()).done); s = !0) d = c.value, l.changeValue(d, d.getAttribute("data-reset-value") || "");
                        t.next = 25;
                        break;
                    case 21:
                        t.prev = 21, t.t1 = t.catch(17), o = !0, i = t.t1;
                    case 25:
                        t.prev = 25, t.prev = 26, !s && u.return && u.return();
                    case 28:
                        if (t.prev = 28, !o) {
                            t.next = 31;
                            break
                        }
                        throw i;
                    case 31:
                        return t.finish(28);
                    case 32:
                        return t.finish(25);
                    case 33:
                        for (f in e.query(r, ".js-write-tab").click(), m = a.json.updateContent) p = m[f], (v = document.querySelector(f)) ? b.replaceContent(v, p) : console.warn("couldn't find " + f + " for immediate update");
                    case 37:
                    case "end":
                        return t.stop()
                }
            }, t, this, [
                [2, 8],
                [17, 21, 25, 33],
                [26, , 28, 32]
            ])
        }));
        return function(e, r) {
            return t.apply(this, arguments)
        }
    }()), t.observe(".js-comment-and-button", {
        constructor: HTMLButtonElement,
        initialize: function(t) {
            o(t.form, "app/assets/modules/github/behaviors/commenting/close.js:29");
            var r = e.query(t.form, ".js-comment-field"),
                n = t.textContent,
                a = !1;
 
            function s(r) {
                var s = r.currentTarget;
                o(s instanceof HTMLTextAreaElement, "app/assets/modules/github/behaviors/commenting/close.js:36");
                var i = s.value.trim();
                i !== a && (a = i, t.textContent = i ? e.getAttribute(t, "data-comment-text") : n)
            }
            return {
                add: function() {
                    r.addEventListener("input", s), r.addEventListener("change", s)
                },
                remove: function() {
                    r.removeEventListener("input", s), r.removeEventListener("change", s)
                }
            }
        }
    }), r.on("click", ".js-comment-edit-button", function(t) {
        var n = e.closest(t.currentTarget, ".js-comment");
        n.classList.add("is-comment-editing"), e.query(n, ".js-write-tab").click();
        var a = e.query(n, ".js-comment-field");
        o(a instanceof HTMLTextAreaElement, "app/assets/modules/github/behaviors/commenting/edit.js:18"), a.focus(), r.fire(a, "change");
        var s = t.currentTarget.closest(".js-dropdown-details");
        s && s.removeAttribute("open")
    }), r.on("click", ".js-comment-hide-button", function(t) {
        var r = e.closest(t.currentTarget, ".js-comment").querySelector(".js-minimize-comment");
        r && r.classList.remove("d-none");
        var n = t.currentTarget.closest(".js-dropdown-details");
        n && n.removeAttribute("open")
    }), r.on("click", ".js-comment-hide-minimize-form", function(t) {
        e.closest(t.currentTarget, ".js-minimize-comment").classList.add("d-none")
    }), r.on("click", ".js-comment-cancel-button", function(t) {
        var r = e.closest(t.currentTarget, "form", HTMLFormElement),
            n = e.getAttribute(t.currentTarget, "data-confirm-text");
        if (j.hasDirtyFields(r) && !confirm(n)) return !1;
        var a = !0,
            s = !1,
            i = void 0;
        try {
            for (var u, c = r.querySelectorAll("input, textarea")[Symbol.iterator](); !(a = (u = c.next()).done); a = !0) {
                var l = u.value;
                o(l instanceof HTMLInputElement || l instanceof HTMLTextAreaElement, "app/assets/modules/github/behaviors/commenting/edit.js:55"), l.value = l.defaultValue
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
        var d = t.currentTarget.closest(".js-comment");
        d && d.classList.remove("is-comment-editing")
    }), c.remoteForm(".js-comment-delete, .js-comment .js-comment-update, .js-issue-update, .js-comment-minimize, .js-comment-unminimize", function(t, r, n) {
        var a = e.closest(t, ".js-comment");
        a.classList.add("is-comment-loading");
        var s = a.getAttribute("data-body-version");
        s && n.headers.set("X-Body-Version", s)
    }), c.remoteForm(".js-comment .js-comment-update", function() {
        var t = X(regeneratorRuntime.mark(function t(r, n) {
            var a, i, u, c, l, d, m, f, p, v, g, h, y, b, j, L, w;
            return regeneratorRuntime.wrap(function(t) {
                for (;;) switch (t.prev = t.next) {
                    case 0:
                        return a = void 0, i = e.closest(r, ".js-comment"), t.prev = 2, t.next = 5, n.json();
                    case 5:
                        a = t.sent, t.next = 19;
                        break;
                    case 8:
                        if (t.prev = 8, t.t0 = t.catch(2), 422 !== t.t0.response.status) {
                            t.next = 18;
                            break
                        }
                        if (!(u = JSON.parse(t.t0.response.text)).errors) {
                            t.next = 16;
                            break
                        }
                        return (c = i.querySelector(".js-comment-update-error")) && (c.textContent = "There was an error posting your comment: " + u.errors.join(", "), c.style.display = "block"), t.abrupt("return");
                    case 16:
                        t.next = 19;
                        break;
                    case 18:
                        throw t.t0;
                    case 19:
                        if (a) {
                            t.next = 21;
                            break
                        }
                        return t.abrupt("return");
                    case 21:
                        for (l = a.json, (d = i.querySelector(".js-comment-body")) && (d.innerHTML = l.body), (m = i.querySelector(".js-comment-update-error")) && (m.style.display = "none"), i.setAttribute("data-body-version", l.newBodyVersion), (f = i.querySelector(".js-body-version")) instanceof HTMLInputElement && (f.value = l.newBodyVersion), p = !0, v = !1, g = void 0, t.prev = 32, h = i.querySelectorAll("input, textarea")[Symbol.iterator](); !(p = (y = h.next()).done); p = !0) b = y.value, o(b instanceof HTMLInputElement || b instanceof HTMLTextAreaElement, "app/assets/modules/github/behaviors/commenting/edit.js:119"), b.defaultValue = b.value;
                        t.next = 40;
                        break;
                    case 36:
                        t.prev = 36, t.t1 = t.catch(32), v = !0, g = t.t1;
                    case 40:
                        t.prev = 40, t.prev = 41, !p && h.return && h.return();
                    case 43:
                        if (t.prev = 43, !v) {
                            t.next = 46;
                            break
                        }
                        throw g;
                    case 46:
                        return t.finish(43);
                    case 47:
                        return t.finish(40);
                    case 48:
                        if (i.classList.remove("is-comment-stale", "is-comment-editing"), !((j = i.querySelector(".js-comment-edit-history")) instanceof IncludeFragmentElement)) {
                            t.next = 54;
                            break
                        }
                        j.setAttribute("src", l.editUrl), t.next = 61;
                        break;
                    case 54:
                        if (!(L = i.querySelector(".js-comment-fragment"))) {
                            t.next = 61;
                            break
                        }
                        return t.next = 58, s.fetchSafeDocumentFragment(document, l.editUrl);
                    case 58:
                        w = t.sent, L.innerHTML = "", L.append(w);
                    case 61:
                    case "end":
                        return t.stop()
                }
            }, t, this, [
                [2, 8],
                [32, 36, 40, 48],
                [41, , 43, 47]
            ])
        }));
        return function(e, r) {
            return t.apply(this, arguments)
        }
    }()), c.remoteForm(".js-comment .js-comment-delete, .js-comment .js-comment-update, .js-comment-minimize, .js-comment-unminimize", (Oe = X(regeneratorRuntime.mark(function t(r, n) {
        var a, s;
        return regeneratorRuntime.wrap(function(t) {
            for (;;) switch (t.prev = t.next) {
                case 0:
                    return a = e.closest(r, ".js-comment"), t.prev = 1, t.next = 4, n.text();
                case 4:
                    t.next = 15;
                    break;
                case 6:
                    if (t.prev = 6, t.t0 = t.catch(1), 422 !== t.t0.response.status) {
                        t.next = 14;
                        break
                    }
                    s = void 0;
                    try {
                        s = JSON.parse(t.t0.response.text)
                    } catch (e) {}
                    s && s.stale && a.classList.add("is-comment-stale"), t.next = 15;
                    break;
                case 14:
                    throw t.t0;
                case 15:
                    a.classList.remove("is-comment-loading");
                case 16:
                case "end":
                    return t.stop()
            }
        }, t, this, [
            [1, 6]
        ])
    })), function(e, t) {
        return Oe.apply(this, arguments)
    })), c.remoteForm(".js-comment-delete", (Be = X(regeneratorRuntime.mark(function t(r, n) {
        var a;
        return regeneratorRuntime.wrap(function(t) {
            for (;;) switch (t.prev = t.next) {
                case 0:
                    return t.next = 2, n.json();
                case 2:
                    (a = r.closest(".js-comment-delete-container")) || (a = r.closest(".js-comment-container") || r.closest(".js-line-comments")) && 1 !== a.querySelectorAll(".js-comment").length && (a = e.closest(r, ".js-comment")), o(a, "app/assets/modules/github/behaviors/commenting/edit.js:178"), a.remove();
                case 6:
                case "end":
                    return t.stop()
            }
        }, t, this)
    })), function(e, t) {
        return Be.apply(this, arguments)
    })), c.remoteForm(".js-issue-update", (Ue = X(regeneratorRuntime.mark(function t(r, n) {
        var a, s, o, i, u, c, l, d, m, f, p;
        return regeneratorRuntime.wrap(function(t) {
            for (;;) switch (t.prev = t.next) {
                case 0:
                    return (a = e.closest(r, ".js-details-container")).classList.remove("open"), t.next = 4, n.json();
                case 4:
                    for (s = t.sent, null != (o = s.json).issue_title && (e.query(a, ".js-issue-title").textContent = o.issue_title, (i = a.closest(".js-issues-results")) && (u = i.querySelector(".js-merge-pull-request textarea")) instanceof HTMLTextAreaElement && u.value === u.defaultValue && (u.value = u.defaultValue = o.issue_title)), document.title = o.page_title, c = !0, l = !1, d = void 0, t.prev = 11, m = r.elements[Symbol.iterator](); !(c = (f = m.next()).done); c = !0)((p = f.value) instanceof HTMLInputElement || p instanceof HTMLTextAreaElement) && (p.defaultValue = p.value);
                    t.next = 19;
                    break;
                case 15:
                    t.prev = 15, t.t0 = t.catch(11), l = !0, d = t.t0;
                case 19:
                    t.prev = 19, t.prev = 20, !c && m.return && m.return();
                case 22:
                    if (t.prev = 22, !l) {
                        t.next = 25;
                        break
                    }
                    throw d;
                case 25:
                    return t.finish(22);
                case 26:
                    return t.finish(19);
                case 27:
                case "end":
                    return t.stop()
            }
        }, t, this, [
            [11, 15, 19, 27],
            [20, , 22, 26]
        ])
    })), function(e, t) {
        return Ue.apply(this, arguments)
    })), c.remoteForm(".js-repository-advisory-title-update", (Ve = X(regeneratorRuntime.mark(function t(r, n) {
        var a, s, o, i, u, c, l, d;
        return regeneratorRuntime.wrap(function(t) {
            for (;;) switch (t.prev = t.next) {
                case 0:
                    return e.closest(r, ".js-details-container").classList.remove("open"), t.next = 4, n.json();
                case 4:
                    for (a = t.sent, s = a.json, document.title = s.page_title, o = !0, i = !1, u = void 0, t.prev = 10, c = r.elements[Symbol.iterator](); !(o = (l = c.next()).done); o = !0)((d = l.value) instanceof HTMLInputElement || d instanceof HTMLTextAreaElement) && (d.defaultValue = d.value);
                    t.next = 18;
                    break;
                case 14:
                    t.prev = 14, t.t0 = t.catch(10), i = !0, u = t.t0;
                case 18:
                    t.prev = 18, t.prev = 19, !o && c.return && c.return();
                case 21:
                    if (t.prev = 21, !i) {
                        t.next = 24;
                        break
                    }
                    throw u;
                case 24:
                    return t.finish(21);
                case 25:
                    return t.finish(18);
                case 26:
                case "end":
                    return t.stop()
            }
        }, t, this, [
            [10, 14, 18, 26],
            [19, , 21, 25]
        ])
    })), function(e, t) {
        return Ve.apply(this, arguments)
    })), c.remoteForm(".js-repository-advisory-update", (ze = X(regeneratorRuntime.mark(function t(r) {
        var n, a, s, o, i, u;
        return regeneratorRuntime.wrap(function(t) {
            for (;;) switch (t.prev = t.next) {
                case 0:
                    for (e.closest(r, ".previewable-edit").classList.remove("is-comment-editing"), n = !0, a = !1, s = void 0, t.prev = 5, o = r.elements[Symbol.iterator](); !(n = (i = o.next()).done); n = !0)((u = i.value) instanceof HTMLInputElement || u instanceof HTMLTextAreaElement) && (u.defaultValue = u.value);
                    t.next = 13;
                    break;
                case 9:
                    t.prev = 9, t.t0 = t.catch(5), a = !0, s = t.t0;
                case 13:
                    t.prev = 13, t.prev = 14, !n && o.return && o.return();
                case 16:
                    if (t.prev = 16, !a) {
                        t.next = 19;
                        break
                    }
                    throw s;
                case 19:
                    return t.finish(16);
                case 20:
                    return t.finish(13);
                case 21:
                case "end":
                    return t.stop()
            }
        }, t, this, [
            [5, 9, 13, 21],
            [14, , 16, 20]
        ])
    })), function(e) {
        return ze.apply(this, arguments)
    })), c.remoteForm(".js-comment-minimize", (We = X(regeneratorRuntime.mark(function t(r, n) {
        var a, s, o, i, u;
        return regeneratorRuntime.wrap(function(t) {
            for (;;) switch (t.prev = t.next) {
                case 0:
                    return t.next = 2, n.json();
                case 2:
                    a = e.closest(r, ".js-comment"), (s = a.querySelector(".js-minimize-comment")) && s.classList.add("d-none"), (o = e.closest(r, ".unminimized-comment")).classList.add("d-none"), o.classList.remove("js-comment"), i = e.closest(r, ".js-minimizable-comment-group"), (u = i.querySelector(".minimized-comment")) && u.classList.remove("d-none"), u && u.classList.add("js-comment");
                case 12:
                case "end":
                    return t.stop()
            }
        }, t, this)
    })), function(e, t) {
        return We.apply(this, arguments)
    })), c.remoteForm(".js-comment-unminimize", ($e = X(regeneratorRuntime.mark(function t(r, n) {
        var a, s, o;
        return regeneratorRuntime.wrap(function(t) {
            for (;;) switch (t.prev = t.next) {
                case 0:
                    return t.next = 2, n.json();
                case 2:
                    a = e.closest(r, ".js-minimizable-comment-group"), (s = a.querySelector(".unminimized-comment")) && s.classList.remove("d-none"), s && s.classList.add("js-comment"), (o = a.querySelector(".minimized-comment")) && o.classList.add("d-none"), o && o.classList.remove("js-comment");
                case 9:
                case "end":
                    return t.stop()
            }
        }, t, this)
    })), function(e, t) {
        return $e.apply(this, arguments)
    })), n.onFocus(".js-comment-field", function(e) {
        Qe(e, !0), e.addEventListener("blur", Ye, {
            once: !0
        })
    });
    var Ze = function() {
            var t = X(regeneratorRuntime.mark(function t(n, a, s, o, i) {
                var u, c, l, d, m, f, p, v, g;
                return regeneratorRuntime.wrap(function(t) {
                    for (;;) switch (t.prev = t.next) {
                        case 0:
                            if ((u = {}).text = a, u.authenticity_token = tt(n), o && (u.path = o), s && (u.original_line = s), i && (u.line_number = i), c = {
                                    url: e.getAttribute(n, "data-preview-url"),
                                    data: u
                                }, r.fire(n, "preview:setup", c), l = JSON.stringify(c), d = at.get(n) || [], m = re(d, 2), f = m[0], p = m[1], f !== l) {
                                t.next = 12;
                                break
                            }
                            return t.abrupt("return", p);
                        case 12:
                            return st = !1, v = nt.push(ot(c)), at.set(n, [l, v]), t.next = 17, v;
                        case 17:
                            return g = t.sent, st = !0, t.abrupt("return", g);
                        case 20:
                        case "end":
                            return t.stop()
                    }
                }, t, this)
            }));
            return function(e, r, n, a, s) {
                return t.apply(this, arguments)
            }
        }(),
        et = function() {
            var t = X(regeneratorRuntime.mark(function t(r) {
                var n, a, s, o, i, u, c, l, d;
                return regeneratorRuntime.wrap(function(t) {
                    for (;;) switch (t.prev = t.next) {
                        case 0:
                            return n = e.query(r, ".js-comment-field", HTMLTextAreaElement), a = e.query(r, ".comment-body"), s = r.querySelector(".js-original-line"), o = r.querySelector(".js-path"), i = r.querySelector(".js-line-number"), u = s instanceof HTMLInputElement ? s.value : null, c = o instanceof HTMLInputElement ? o.value : null, l = i instanceof HTMLInputElement ? i.value : null, st || (a.innerHTML = "<p>Loading preview&hellip;</p>"), t.prev = 9, t.next = 12, Ze(r, n.value, u, c, l);
                        case 12:
                            d = t.sent, a.innerHTML = d || "<p>Nothing to preview</p>", t.next = 19;
                            break;
                        case 16:
                            t.prev = 16, t.t0 = t.catch(9), a.innerHTML = "<p>Error rendering preview</p>";
                        case 19:
                        case "end":
                            return t.stop()
                    }
                }, t, this, [
                    [9, 16]
                ])
            }));
            return function(e) {
                return t.apply(this, arguments)
            }
        }();
 
    function tt(t) {
        var r = t.getAttribute("data-preview-authenticity-token"),
            n = e.closest(t, "form", HTMLFormElement).elements.namedItem("authenticity_token");
        return null != r ? r : n instanceof HTMLInputElement ? n.value : void 0
    }
 
    function rt(t) {
        var r = e.closest(t, ".js-previewable-comment-form"),
            n = t.classList.contains("js-preview-tab");
        if (n) {
            var a = e.query(r, ".js-write-bucket");
            e.query(r, ".js-preview-body").style.minHeight = a.clientHeight + "px"
        }
        r.classList.toggle("preview-selected", n), r.classList.toggle("write-selected", !n);
        var s = e.query(r, ".tabnav-tab.selected");
        s.setAttribute("aria-selected", "false"), s.classList.remove("selected"), t.classList.add("selected"), t.setAttribute("aria-selected", "true");
        var o = e.query(r, ".js-write-tab");
        return n ? o.setAttribute("data-hotkey", "Control+P,Meta+P") : o.removeAttribute("data-hotkey"), r
    }
    r.on("click", ".js-write-tab", function(t) {
        var r = t.currentTarget,
            n = rt(r);
        setTimeout(function() {
            e.query(n, ".js-comment-field").focus()
        });
        var a = e.closest(r, ".js-previewable-comment-form").querySelector("markdown-toolbar");
        null != a && a.classList.remove("d-none")
    }), r.on("click", ".js-preview-tab", function(t) {
        var r = t.currentTarget,
            n = rt(r);
        setTimeout(function() {
            et(n)
        });
        var a = e.closest(r, ".js-previewable-comment-form").querySelector("markdown-toolbar");
        null != a && a.classList.add("d-none"), t.stopPropagation(), t.preventDefault()
    }), r.on("preview:render", ".js-previewable-comment-form", function(t) {
        var r = rt(e.query(t.target, ".js-preview-tab"));
        setTimeout(function() {
            et(r)
        })
    });
    var nt = new a,
        at = new WeakMap,
        st = !1;
 
    function ot(e) {
        var t = new FormData;
        for (var r in e.data) null !== e.data[r] && t.append(r, e.data[r]);
        return s.fetchText(e.url, {
            method: "post",
            body: t
        })
    }
    t.observe(".js-preview-tab", function(t) {
        var r, n = (r = X(regeneratorRuntime.mark(function r() {
                var n, c, l;
                return regeneratorRuntime.wrap(function(r) {
                    for (;;) switch (r.prev = r.next) {
                        case 0:
                            return a || (a = e.closest(t, ".js-previewable-comment-form"), s = e.query(a, ".js-comment-field", HTMLTextAreaElement), n = a.querySelector(".js-original-line"), c = a.querySelector(".js-path"), l = a.querySelector(".js-line-number"), o = n instanceof HTMLInputElement ? n.value : null, i = c instanceof HTMLInputElement ? c.value : null, u = l instanceof HTMLInputElement ? l.value : null), r.prev = 1, r.next = 4, Ze(a, s.value, o, i, u);
                        case 4:
                            r.next = 8;
                            break;
                        case 6:
                            r.prev = 6, r.t0 = r.catch(1);
                        case 8:
                        case "end":
                            return r.stop()
                    }
                }, r, this, [
                    [1, 6]
                ])
            })), function() {
                return r.apply(this, arguments)
            }),
            a = void 0,
            s = void 0,
            o = void 0,
            i = void 0,
            u = void 0;
        t.addEventListener("mouseenter", function() {
            n()
        })
    }), n.onKey("keydown", ".js-comment-field", function(t) {
        var r = t.target;
        if (o(r instanceof HTMLTextAreaElement, "app/assets/modules/github/behaviors/commenting/preview.js:236"), (t.ctrlKey || t.metaKey) && "P" === t.key) {
            var n = e.closest(r, ".js-previewable-comment-form");
            n.classList.contains("write-selected") && (r.blur(), n.dispatchEvent(new CustomEvent("preview:render", {
                bubbles: !0,
                cancelable: !1
            })), t.preventDefault(), t.stopImmediatePropagation())
        }
    });
    var it = /^(>[^\n]\n|\s*\n)*\s*(\+1|-1|:\+1*|:-1*)\s*$/m;
 
    function ut(t) {
        var r = t.target;
        o(r instanceof HTMLTextAreaElement, "app/assets/modules/github/behaviors/commenting/reaction-suggestion.js:27");
        var n = r.value,
            a = e.closest(r, ".js-reaction-suggestion");
        if (a)
            if (it.test(n)) {
                a.classList.add("reaction-suggestion");
                var s = e.getAttribute(a, "data-reaction-markup");
                a.setAttribute("data-reaction-suggestion-message", s)
            } else ct(a)
    }
 
    function ct(e) {
        e.classList.remove("reaction-suggestion"), e.classList.add("hide-reaction-suggestion"), e.removeAttribute("data-reaction-suggestion-message")
    }
    r.on("focusout", "#new_comment_field", function(t) {
        var r = t.currentTarget;
        ct(e.closest(r, ".js-reaction-suggestion"))
    }), r.on("focusin", "#new_comment_field", function(e) {
        ut(e)
    }), n.onKey("keyup", "#new_comment_field", function(e) {
        ut(e)
    });
    var lt = new WeakMap,
        dt = ["input[type=submit][data-disable-with]", "button[data-disable-with]"].join(", ");
 
    function mt(e, t) {
        e instanceof HTMLInputElement ? e.value = t : e.innerHTML = t
    }
 
    function ft(e) {
        var t = !0,
            r = !1,
            n = void 0;
        try {
            for (var a, s = e.querySelectorAll(dt)[Symbol.iterator](); !(t = (a = s.next()).done); t = !0) {
                var i = a.value,
                    u = lt.get(i);
                null != u && (o(i instanceof HTMLInputElement || i instanceof HTMLButtonElement, "app/assets/modules/github/behaviors/disable-with.js:56"), mt(i, u), i.hasAttribute("data-disable-invalid") && !e.checkValidity() || (i.disabled = !1), lt.delete(i))
            }
        } catch (e) {
            r = !0, n = e
        } finally {
            try {
                !t && s.return && s.return()
            } finally {
                if (r) throw n
            }
        }
    }
    r.on("submit", "form", function(e) {
        var t, r = !0,
            n = !1,
            a = void 0;
        try {
            for (var s, i = e.currentTarget.querySelectorAll(dt)[Symbol.iterator](); !(r = (s = i.next()).done); r = !0) {
                var u = s.value;
                o(u instanceof HTMLInputElement || u instanceof HTMLButtonElement, "app/assets/modules/github/behaviors/disable-with.js:40"), lt.set(u, (t = u) instanceof HTMLInputElement ? t.value || "Submit" : t.innerHTML || "");
                var c = u.getAttribute("data-disable-with");
                c && mt(u, c), u.disabled = !0
            }
        } catch (e) {
            n = !0, a = e
        } finally {
            try {
                !r && i.return && i.return()
            } finally {
                if (n) throw a
            }
        }
    }, {
        capture: !0
    }), r.on("deprecatedAjaxComplete", "form", function(e) {
        var t = e.currentTarget,
            r = e.target;
        o(t instanceof HTMLFormElement, "app/assets/modules/github/behaviors/disable-with.js:70"), t === r && ft(t)
    }), c.afterRemote(ft), r.on("menu:activate", ".js-select-menu", function(e) {
        e.currentTarget.classList.add("is-dirty")
    }), r.on("menu:deactivate", ".js-select-menu", function(e) {
        e.currentTarget.classList.remove("is-dirty")
    });
    var pt = {
        OS: "Meta",
        Win: "Meta",
        Windows: "Meta",
        Scroll: "ScrollLock",
        SpaceBar: " ",
        Left: "ArrowLeft",
        Right: "ArrowRight",
        Down: "ArrowDown",
        Up: "ArrowUp",
        Del: "Delete",
        Esc: "Escape"
    };
    var vt = Object.getOwnPropertyDescriptor(KeyboardEvent.prototype, "key");
    if (vt) {
        var gt = function(e) {
            return vt.get.apply(e)
        };
        /Macintosh.*Safari/.test(navigator.userAgent) && (gt = function(e) {
            return function(e, t) {
                return t && /^[a-z]$/.test(e) ? e.toUpperCase() : e
            }(vt.get.apply(e), e.shiftKey)
        }), Object.defineProperty(KeyboardEvent.prototype, "key", {
            enumerable: !0,
            configurable: !0,
            get: function() {
                return e = gt(this), pt[e] || e;
                var e
            }
        })
    }
    var ht = new WeakMap;
 
    function yt(e) {
        return ht.has(e)
    }
 
    function bt(t, r, n) {
        var a = n.limit,
            s = e.query(t, "template", HTMLTemplateElement),
            i = {},
            u = !0,
            c = !1,
            l = void 0;
        try {
            for (var d, m = e.querySelectorAll(t, "input[type=hidden]", HTMLInputElement)[Symbol.iterator](); !(u = (d = m.next()).done); u = !0) {
                var f = d.value;
                i["" + f.name + f.value] = f
            }
        } catch (e) {
            c = !0, l = e
        } finally {
            try {
                !u && m.return && m.return()
            } finally {
                if (c) throw l
            }
        }
        for (var p = s.nextElementSibling; p;) {
            var v = p;
            p = v.nextElementSibling, v.classList.contains("selected") || v.classList.contains("select-menu-divider") ? v.classList.add("d-none") : v.remove()
        }
        var g = ht.get(t);
        o(null != g, "app/assets/modules/github/substring-memory-filter-list.js:68");
        var h = 0,
            y = document.createDocumentFragment(),
            b = t.querySelector(".js-divider-suggestions"),
            j = t.querySelector(".js-divider-rest");
 
        function L(t) {
            var n = !(null != a && h >= a) && function(e) {
                return (e.login + " " + e.name).toLowerCase().trim()
            }(t).indexOf(r) >= 0;
            if (n || t.selected) {
                var o = function(t, r, n) {
                    if (null != t.element) return t.element;
                    var a = r.content.cloneNode(!0),
                        s = e.query(a, "input[type=checkbox]", HTMLInputElement);
                    t.type && (s.name = "reviewer_" + t.type + "_ids[]");
                    s.value = t.id;
                    var o = "" + s.name + t.id,
                        i = t.selected;
                    n[o] && (i = !0, n[o].remove(), delete n[o]);
                    var u = e.query(a, ".js-navigation-item");
                    i && (u.classList.add("selected"), s.checked = !0);
                    t.disabled && u.classList.add("disabled");
                    var c = a.querySelector(".js-username");
                    c && (c.textContent = t.login);
                    var l = a.querySelector(".js-description");
                    l && (l.textContent = t.name);
                    var d = a.querySelector(".js-extended-description");
                    d && (t.description ? d.textContent = t.description : d.remove());
                    return e.query(a, ".js-avatar", HTMLImageElement).src = t.avatar, t.element = u, t.element
                }(t, s, i);
                o.classList.toggle("d-none", !n), n && h++, y.appendChild(o)
            }
        }
        if (b && g.suggestions) {
            var w = !0,
                x = !1,
                k = void 0;
            try {
                for (var E, T = g.suggestions[Symbol.iterator](); !(w = (E = T.next()).done); w = !0) {
                    L(E.value)
                }
            } catch (e) {
                x = !0, k = e
            } finally {
                try {
                    !w && T.return && T.return()
                } finally {
                    if (x) throw k
                }
            }
            y.childNodes.length && (b.after(y), b.classList.toggle("d-none", 0 === h), y = document.createDocumentFragment())
        }
        var q = h,
            S = !0,
            A = !1,
            M = void 0;
        try {
            for (var H, I = g.users[Symbol.iterator](); !(S = (H = I.next()).done); S = !0) {
                L(H.value)
            }
        } catch (e) {
            A = !0, M = e
        } finally {
            try {
                !S && I.return && I.return()
            } finally {
                if (A) throw M
            }
        }
        return t.append(y), j && j.classList.toggle("d-none", h === q || 0 === q), h
    }
 
    function jt(e, t) {
        var r = Et(e, t);
        r && -1 === t.indexOf("/") && (r += Et(e.substring(e.lastIndexOf("/") + 1), t));
        return r
    }
 
    function Lt(e, t) {
        var r = function() {
            for (var r = [], n = 0, a = e.length; n < a; n++) {
                var s = e[n],
                    o = jt(s, t);
                o && r.push([s, o])
            }
            return r
        }();
        r.sort(wt);
        for (var n = [], a = 0, s = r.length; a < s; a++) {
            var o = r[a];
            n.push(o[0])
        }
        return n
    }
 
    function wt(e, t) {
        var r = e[0],
            n = t[0],
            a = e[1],
            s = t[1];
        return a > s ? -1 : a < s ? 1 : r < n ? -1 : r > n ? 1 : 0
    }
 
    function xt(e) {
        for (var t = e.toLowerCase().split(""), r = "", n = 0; n < t.length; n++) {
            var a = t[n].replace(/[\\^$*+?.()|[\]{}]/g, "\\$&");
            r += 0 === n ? "(.*)(" + a + ")" : "([^" + a + "]*?)(" + a + ")"
        }
        return new RegExp(r + "(.*?)$", "i")
    }
 
    function kt(e, t, r) {
        if (t) {
            var n = e.innerHTML.trim().match(r || xt(t));
            if (!n) return;
            for (var a = !1, s = [], o = 1; o < n.length; ++o) {
                var i = n[o];
                i && (o % 2 == 0 ? a || (s.push("<mark>"), a = !0) : a && (s.push("</mark>"), a = !1), s.push(i))
            }
            e.innerHTML = s.join("")
        } else {
            var u = e.innerHTML.trim(),
                c = u.replace(/<\/?mark>/g, "");
            u !== c && (e.innerHTML = c)
        }
    }
 
    function Et(e, t) {
        var r = e;
        if (r === t) return 1;
        for (var n = r.length, a = 0, s = 0, o = 0; o < t.length; o++) {
            var i = t[o],
                u = r.indexOf(i.toLowerCase()),
                c = r.indexOf(i.toUpperCase()),
                l = Math.min(u, c),
                d = l > -1 ? l : Math.max(u, c);
            if (-1 === d) return 0;
            a += .1, r[d] === i && (a += .1), 0 === d && (a += .8, 0 === o && (s = 1)), " " === r.charAt(d - 1) && (a += .8), r = r.substring(d + 1, n)
        }
        var m = t.length,
            f = a / m,
            p = (f * (m / n) + f) / 2;
        return s && p + .1 < 1 && (p += .1), p
    }
    var Tt = new WeakMap,
        qt = new WeakMap,
        St = new WeakMap;
 
    function At(e, t) {
        var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        if (!e) return 0;
        var n = t.toLowerCase(),
            a = null != r.text ? r.text : Ht,
            s = r.limit,
            o = r.score,
            i = Tt.get(e),
            u = Array.from(e.children);
        i || (i = Array.from(e.children), Tt.set(e, i));
        var c = !0,
            l = !1,
            d = void 0;
        try {
            for (var m, f = u[Symbol.iterator](); !(c = (m = f.next()).done); c = !0) {
                var p = m.value;
                e.removeChild(p), p.style.display = ""
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
        var v = document.createDocumentFragment(),
            g = 0,
            h = 0;
        if (n) {
            var y = Array.from(i),
                b = !0,
                j = !1,
                L = void 0;
            try {
                for (var w, x = y[Symbol.iterator](); !(b = (w = x.next()).done); b = !0) {
                    var k = w.value;
                    null == qt.get(k) && qt.set(k, a(k));
                    var E = o ? o(qt.get(k) || "", n, k) : jt(qt.get(k) || "", n);
                    St.set(k, String(E))
                }
            } catch (e) {
                j = !0, L = e
            } finally {
                try {
                    !b && x.return && x.return()
                } finally {
                    if (j) throw L
                }
            }
            y.sort(Mt);
            var T = xt(n),
                q = !0,
                S = !1,
                A = void 0;
            try {
                for (var M, H = y[Symbol.iterator](); !(q = (M = H.next()).done); q = !0) {
                    var I = M.value;
                    (null == s || g < s) && parseFloat(St.get(I)) > 0 && (h++, !0 === r.mark && (kt(I), kt(I, n, T)), v.appendChild(I)), g++
                }
            } catch (e) {
                S = !0, A = e
            } finally {
                try {
                    !q && H.return && H.return()
                } finally {
                    if (S) throw A
                }
            }
        } else {
            var R = !0,
                _ = !1,
                C = void 0;
            try {
                for (var F, P = i[Symbol.iterator](); !(R = (F = P.next()).done); R = !0) {
                    var N = F.value;
                    (null == s || g < s) && (h++, !0 === r.mark && kt(N), v.appendChild(N)), g++
                }
            } catch (e) {
                _ = !0, C = e
            } finally {
                try {
                    !R && P.return && P.return()
                } finally {
                    if (_) throw C
                }
            }
        }
        e.appendChild(v);
        var D = e.querySelectorAll(".js-divider"),
            O = !0,
            B = !1,
            U = void 0;
        try {
            for (var V, z = D[Symbol.iterator](); !(O = (V = z.next()).done); O = !0) {
                V.value.classList.toggle("d-none", Boolean(n && n.trim().length > 0))
            }
        } catch (e) {
            B = !0, U = e
        } finally {
            try {
                !O && z.return && z.return()
            } finally {
                if (B) throw U
            }
        }
        return h
    }
 
    function Mt(e, t) {
        var r = parseFloat(St.get(e)),
            n = parseFloat(St.get(t)),
            a = qt.get(e) || "",
            s = qt.get(t) || "";
        return r > n ? -1 : r < n ? 1 : a < s ? -1 : a > s ? 1 : 0
    }
 
    function Ht(e) {
        return e.hasAttribute("data-filter-value") ? (e.getAttribute("data-filter-value") || "").toLowerCase().trim() : e.textContent.toLowerCase().trim()
    }
 
    function It(e) {
        return e.textContent.toLowerCase().trim()
    }
 
    function Rt(e, t) {
        var r = e.innerHTML;
        if (t) {
            var n = new RegExp(t, "i");
            e.innerHTML = r.replace(n, "<mark>$&</mark>")
        } else {
            var a = r.replace(/<\/?mark>/g, "");
            r !== a && (e.innerHTML = a)
        }
    }
 
    function _t(e) {
        return e.textContent.toLowerCase().trim()
    }
 
    function Ct(e, t) {
        var r = e.innerHTML;
        if (t) {
            var n = new RegExp(t, "i");
            e.innerHTML = r.replace(n, "<mark>$&</mark>")
        } else {
            var a = r.replace(/<\/?mark>/g, "");
            r !== a && (e.innerHTML = a)
        }
    }
 
    function Ft(e, t) {
        var r = e.hasAttribute("data-filterable-highlight"),
            n = parseInt(e.getAttribute("data-filterable-limit"), 10) || null,
            a = 0;
        switch (e.getAttribute("data-filterable-type")) {
            case "fuzzy":
                a = At(e, t, {
                    mark: r,
                    limit: n
                });
                break;
            case "substring":
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
                });
                break;
            case "substring-memory":
                a = bt(e, t, {
                    limit: n
                });
                break;
            default:
                a = function(e, t) {
                    var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                        n = void 0;
                    if (e) {
                        var a = t.toLowerCase(),
                            s = null != r.text ? r.text : It,
                            o = r.limit;
                        !0 === r.mark ? n = Rt : "function" == typeof r.mark && (n = r.mark);
                        var i = 0,
                            u = !0,
                            c = !1,
                            l = void 0;
                        try {
                            for (var d, m = e.children[Symbol.iterator](); !(u = (d = m.next()).done); u = !0) {
                                var f = d.value;
                                0 === s(f).indexOf(a) ? null != o && i >= o ? (f.style.display = "none", f.hidden = !0) : (i++, f.style.display = "", f.hidden = !1, n && (n(f), n(f, a))) : (f.style.display = "none", f.hidden = !0)
                            }
                        } catch (e) {
                            c = !0, l = e
                        } finally {
                            try {
                                !u && m.return && m.return()
                            } finally {
                                if (c) throw l
                            }
                        }
                        return i
                    }
                }(e, t, {
                    mark: r,
                    limit: n
                })
        }! function(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                r = e.closest(".js-select-menu, details-menu");
            if (!r) return;
            var n = function(e) {
                var t = e.querySelector("[data-filterable-notice]");
                return t || ((t = document.createElement("div")).classList.add("sr-only"), t.setAttribute("data-filterable-notice", ""), t.setAttribute("aria-live", "polite"), e.append(t), t)
            }(r);
            n.textContent = "", n.textContent = t + " results found."
        }(e, a), e.classList.toggle("filterable-active", t.length > 0), e.classList.toggle("filterable-empty", 0 === a)
    }
 
    function Pt() {
        return Reflect.construct(HTMLElement, [], this.__proto__.constructor)
    }
    t.observe(".js-filterable-field", {
        constructor: HTMLInputElement,
        initialize: function(e) {
            var t, n, a = (t = X(regeneratorRuntime.mark(function e(t) {
                    return regeneratorRuntime.wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                if (o !== t.value) {
                                    e.next = 2;
                                    break
                                }
                                return e.abrupt("return");
                            case 2:
                                return o = t.value, e.next = 5, f.microtask();
                            case 5:
                                r.fire(t, "filterable:change");
                            case 6:
                            case "end":
                                return e.stop()
                        }
                    }, e, this)
                })), function(e) {
                    return t.apply(this, arguments)
                }),
                s = (n = X(regeneratorRuntime.mark(function t() {
                    return regeneratorRuntime.wrap(function(t) {
                        for (;;) switch (t.prev = t.next) {
                            case 0:
                                return o = e.value, t.next = 3, f.microtask();
                            case 3:
                                r.fire(e, "filterable:change");
                            case 4:
                            case "end":
                                return t.stop()
                        }
                    }, t, this)
                })), function() {
                    return n.apply(this, arguments)
                }),
                o = e.value;
            return {
                add: function(e) {
                    e.addEventListener("focus", s), d.addThrottledInputEventListener(e, a), document.activeElement === e && s()
                },
                remove: function(e) {
                    e.removeEventListener("focus", s), d.removeThrottledInputEventListener(e, a)
                }
            }
        }
    }), r.on("filterable:change", ".js-filterable-field", function(e) {
        var t = e.currentTarget;
        o(t instanceof HTMLInputElement, "app/assets/modules/github/behaviors/filterable.js:84");
        var r = t.value.trim().toLowerCase(),
            n = document.querySelectorAll("[data-filterable-for=" + t.id + "]"),
            a = !0,
            s = !1,
            i = void 0;
        try {
            for (var u, c = n[Symbol.iterator](); !(a = (u = c.next()).done); a = !0) {
                var l = u.value;
                if ("substring-memory" !== l.getAttribute("data-filterable-type") || yt(l)) {
                    Ft(l, r);
                    var d = new CustomEvent("filterable:change", {
                        bubbles: !0,
                        cancelable: !1,
                        detail: {
                            inputField: t
                        }
                    });
                    l.dispatchEvent(d)
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
    }), document.addEventListener("selectmenu:data", function(e) {
        o(e instanceof CustomEvent, "app/assets/modules/github/behaviors/filterable.js:159");
        var t = e.target,
            n = e.detail;
        o(t instanceof HTMLElement, "app/assets/modules/github/behaviors/filterable.js:161");
        var a = t.querySelector('[data-filterable-type="substring-memory"]');
        if (a) {
            ! function(e, t) {
                ht.set(e, t)
            }(a, n.data);
            var s = t.querySelector(".js-filterable-field");
            s && s === document.activeElement && r.fire(s, "filterable:change")
        }
    }), Object.setPrototypeOf(Pt.prototype, HTMLElement.prototype), Object.setPrototypeOf(Pt, HTMLElement);
    var Nt = function(e) {
        function t() {
            return Q(this, t), te(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
        }
        return ee(t, Pt), Y(t, [{
            key: "connectedCallback",
            value: function() {
                var e = this.input;
                e && (e.setAttribute("autocomplete", "off"), e.setAttribute("spellcheck", "false"), this.debounceInputChange = u(this.fetchResults.bind(this), 300), this.boundFetchResults = this.fetchResults.bind(this), e.addEventListener("focus", this.boundFetchResults), e.addEventListener("change", this.boundFetchResults), e.addEventListener("input", this.debounceInputChange))
            }
        }, {
            key: "disconnectedCallback",
            value: function() {
                var e = this.input;
                e && (e.removeEventListener("focus", this.boundFetchResults), e.removeEventListener("change", this.boundFetchResults), e.removeEventListener("input", this.debounceInputChange))
            }
        }, {
            key: "fetchResults",
            value: function() {
                var e = X(regeneratorRuntime.mark(function e() {
                    var t, r, n, a, o, i;
                    return regeneratorRuntime.wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                if (this.input) {
                                    e.next = 2;
                                    break
                                }
                                return e.abrupt("return");
                            case 2:
                                if (t = this.input.value.trim(), this.currentQuery !== t) {
                                    e.next = 5;
                                    break
                                }
                                return e.abrupt("return");
                            case 5:
                                if (this.currentQuery = t, r = this.src) {
                                    e.next = 9;
                                    break
                                }
                                return e.abrupt("return");
                            case 9:
                                if (n = this.resultsContainer) {
                                    e.next = 12;
                                    break
                                }
                                return e.abrupt("return");
                            case 12:
                                return a = new URL(r, window.location.origin), (o = new URLSearchParams(a.search)).append("q", t), a.search = o.toString(), this.dispatchEvent(new CustomEvent("loadstart")), this.setAttribute("loading", ""), e.prev = 18, e.next = 21, s.fetchSafeDocumentFragment(document, a);
                            case 21:
                                i = e.sent, this.dispatchEvent(new CustomEvent("load")), n.innerHTML = "", n.append(i), e.next = 30;
                                break;
                            case 27:
                                e.prev = 27, e.t0 = e.catch(18), this.dispatchEvent(new CustomEvent("error"));
                            case 30:
                                this.removeAttribute("loading"), this.dispatchEvent(new CustomEvent("loadend"));
                            case 32:
                            case "end":
                                return e.stop()
                        }
                    }, e, this, [
                        [18, 27]
                    ])
                }));
                return function() {
                    return e.apply(this, arguments)
                }
            }()
        }, {
            key: "input",
            get: function() {
                var e = this.querySelector("input");
                return e instanceof HTMLInputElement ? e : null
            }
        }, {
            key: "resultsContainer",
            get: function() {
                return document.getElementById(this.getAttribute("aria-owns") || "")
            }
        }, {
            key: "src",
            get: function() {
                return this.getAttribute("src") || ""
            },
            set: function(e) {
                this.setAttribute("src", e)
            }
        }]), t
    }();
    window.customElements.get("filterable-input") || (window.FilterableInputElement = Nt, window.customElements.define("filterable-input", Nt)), t.observe("details-menu filterable-input", {
        constructor: Nt,
        initialize: function(e) {
            var t = document.getElementById(e.getAttribute("aria-owns") || "");
            if (t) {
                var r = void 0;
                e.addEventListener("load", function() {
                    r = document.activeElement && t.contains(document.activeElement) && document.activeElement.id ? document.activeElement.id : null
                }), e.addEventListener("loadend", function() {
                    if (r) {
                        var n = t.querySelector("#" + r) || t.querySelector('[role^="menu"]');
                        n ? n.focus() : e.input && e.input.focus()
                    }
                })
            }
        }
    }), r.on("click", ".js-flash-close", function(e) {
        var t = e.currentTarget.closest(".flash-messages"),
            r = e.currentTarget.closest(".flash");
        o(r, "app/assets/modules/github/behaviors/flash.js:24"), r.remove(), t && !t.querySelector(".flash") && t.remove()
    });
    var Dt = new WeakMap;
 
    function Ot(e, t) {
        return !!e && e.length >= t
    }
 
    function Bt(e) {
        return !!e && /\d/.test(e)
    }
 
    function Ut(e) {
        return !!e && /[a-z]/.test(e)
    }
 
    function Vt(e) {
        return null == e.getAttribute("data-pjax-preserve-scroll") && 0
    }
 
    function zt(e) {
        for (var t = e; t;) {
            var r = t.getAttribute("data-pjax");
            if (r && "true" !== r) return document.querySelector(r);
            t = t.parentElement && t.parentElement.closest("[data-pjax]")
        }
        return e.closest("[data-pjax-container]")
    }
    document.addEventListener("focus", function(e) {
        var t = e.target;
        Dt.get(t) || (r.fire(t, "focusin:delay"), Dt.set(t, !0))
    }, {
        capture: !0
    }), document.addEventListener("blur", function(e) {
        setTimeout(function() {
            var t = e.target;
            t !== document.activeElement && (r.fire(t, "focusout:delay"), Dt.delete(e.target))
        }, 200)
    }, {
        capture: !0
    }), c.remoteForm(".js-immediate-updates", function() {
        var e = X(regeneratorRuntime.mark(function e(t, r) {
            var n, a, s, o, i;
            return regeneratorRuntime.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                    case 0:
                        return n = void 0, e.prev = 1, e.next = 4, r.json();
                    case 4:
                        a = e.sent, n = a.json.updateContent, e.next = 11;
                        break;
                    case 8:
                        e.prev = 8, e.t0 = e.catch(1), e.t0.response.json && (n = e.t0.response.json.updateContent);
                    case 11:
                        if (n)
                            for (s in n) o = n[s], (i = document.querySelector(s)) && b.replaceContent(i, o);
                    case 12:
                    case "end":
                        return e.stop()
                }
            }, e, this, [
                [1, 8]
            ])
        }));
        return function(t, r) {
            return e.apply(this, arguments)
        }
    }()), c.remoteForm(".js-notice-dismiss", function() {
        var t = X(regeneratorRuntime.mark(function t(r, n) {
            return regeneratorRuntime.wrap(function(t) {
                for (;;) switch (t.prev = t.next) {
                    case 0:
                        return t.next = 2, n.text();
                    case 2:
                        e.closest(r, ".js-notice").remove();
                    case 4:
                    case "end":
                        return t.stop()
                }
            }, t, this)
        }));
        return function(e, r) {
            return t.apply(this, arguments)
        }
    }()), t.observe("password-strength", function(t) {
        var r = e.query(t, "input", HTMLInputElement),
            n = Number(t.getAttribute("data-minimum-character-count")),
            a = Number(t.getAttribute("data-passphrase-length")),
            s = t.querySelector("p.note") || t.querySelector(".form-control-note");
        r.addEventListener("keyup", function() {
            s && function(t, r, n, a) {
                var s = e.query(t, "span.js-more-than-n-chars"),
                    o = e.query(t, "span.js-min-chars"),
                    i = e.query(t, "span.js-number-requirement"),
                    u = e.query(t, "span.js-letter-requirement");
                if (function(e) {
                        var t = !0,
                            r = !1,
                            n = void 0;
                        try {
                            for (var a, s = e[Symbol.iterator](); !(t = (a = s.next()).done); t = !0) {
                                var o = a.value;
                                o.classList.remove("text-green", "text-red")
                            }
                        } catch (e) {
                            r = !0, n = e
                        } finally {
                            try {
                                !t && s.return && s.return()
                            } finally {
                                if (r) throw n
                            }
                        }
                    }([s, o, i, u]), Ot(r, a)) s.classList.add("text-green");
                else if (function(e, t) {
                        return Ot(e, t) && Bt(e) && Ut(e)
                    }(r, n)) o.classList.add("text-green"), i.classList.add("text-green"), u.classList.add("text-green");
                else {
                    var c = Ot(r, n) ? "text-green" : "text-red",
                        l = Bt(r) ? "text-green" : "text-red",
                        d = Ut(r) ? "text-green" : "text-red";
                    s.classList.add("text-red"), o.classList.add(c), i.classList.add(l), u.classList.add(d)
                }
            }(s, r.value, n, a)
        })
    }), r.on("click", ".js-permalink-shortcut", function(e) {
        var t = e.currentTarget;
        o(t instanceof HTMLAnchorElement, "app/assets/modules/github/behaviors/permalink.js:16");
        try {
            m.replaceState(null, "", t.href + window.location.hash)
        } catch (e) {
            window.location = t.href + window.location.hash
        }
        e.preventDefault()
    }), r.on("click", "[data-pjax] a, a[data-pjax]", function(e) {
        o(e instanceof MouseEvent, "app/assets/modules/github/behaviors/pjax.js:54");
        var t = e.currentTarget;
        if (t instanceof HTMLAnchorElement) {
            if (null != t.getAttribute("data-skip-pjax")) return;
            if (null != t.getAttribute("data-remote")) return;
            var r = zt(t);
            r && L.click(e, {
                container: r,
                scrollTo: Vt(t)
            })
        }
    }), r.on("submit", "form[data-pjax]", function(e) {
        o(e instanceof Event, "app/assets/modules/github/behaviors/pjax.js:75");
        var t = e.target,
            r = zt(t);
        r && L.submit(e, {
            container: r,
            scrollTo: Vt(t)
        })
    }), r.on("change", "select[data-pjax]", function(e) {
        var t = e.currentTarget;
        o(t instanceof HTMLSelectElement, "app/assets/modules/github/behaviors/pjax.js:88");
        var r = zt(t);
        r && K({
            url: t.value,
            container: r
        })
    }), X(regeneratorRuntime.mark(function e() {
        var t, r, n, a, s, o, i, u, c;
        return regeneratorRuntime.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
                case 0:
                    return c = function() {
                        a && clearTimeout(a), i(100), t.classList.remove("is-loading")
                    }, u = function e() {
                        0 === n && (n = 12), i(Math.min(n + 3, 95)), a = setTimeout(e, 500)
                    }, i = function(e) {
                        0 === e && (null == s && (s = getComputedStyle(r).transition), r.style.transition = "none"), n = e, r.style.width = n + "%", 0 === e && (r.clientWidth, r.style.transition = s || "")
                    }, o = function() {
                        i(0), t.classList.add("is-loading"), a = setTimeout(u, 0)
                    }, e.next = 6, h.ready;
                case 6:
                    if (t = document.getElementById("js-pjax-loader-bar")) {
                        e.next = 9;
                        break
                    }
                    return e.abrupt("return");
                case 9:
                    if ((r = t.firstElementChild) instanceof HTMLElement) {
                        e.next = 12;
                        break
                    }
                    return e.abrupt("return");
                case 12:
                    n = 0, a = null, s = null, document.addEventListener("pjax:start", o), document.addEventListener("pjax:end", c), document.addEventListener("pjax:timeout", function(e) {
                        e.preventDefault()
                    });
                case 18:
                case "end":
                    return e.stop()
            }
        }, e, this)
    }))();
    var Wt = function() {
            var e = X(regeneratorRuntime.mark(function e() {
                var t, r, n;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                        case 0:
                            return e.next = 2, f.microtask();
                        case 2:
                            if (window.performance.getEntriesByName(Jt).length) {
                                e.next = 4;
                                break
                            }
                            return e.abrupt("return");
                        case 4:
                            if (window.performance.mark(Gt), window.performance.measure(Kt, Jt, Gt), t = window.performance.getEntriesByName(Kt), r = t.pop(), n = r ? r.duration : null) {
                                e.next = 11;
                                break
                            }
                            return e.abrupt("return");
                        case 11:
                            $t && Re({
                                requestUrl: $t,
                                pjaxDuration: Math.round(n)
                            }), Xt();
                        case 13:
                        case "end":
                            return e.stop()
                    }
                }, e, this)
            }));
            return function() {
                return e.apply(this, arguments)
            }
        }(),
        $t = null,
        Kt = "last_pjax_request",
        Jt = "pjax_start",
        Gt = "pjax_end";
 
    function Xt() {
        window.performance.clearMarks(Jt), window.performance.clearMarks(Gt), window.performance.clearMeasures(Kt)
    }
 
    function Qt(e, t) {
        return e.split("/", 3).join("/") === t.split("/", 3).join("/")
    }
    window.performance.getEntriesByName && (document.addEventListener("pjax:start", function(e) {
        e instanceof CustomEvent && e.detail && e.detail.url && (window.performance.mark(Jt), $t = e.detail.url)
    }), document.addEventListener("pjax:end", Wt)), document.addEventListener("pjax:click", function(e) {
        if (window.onbeforeunload) return e.preventDefault()
    }), r.on("pjax:click", "#js-repo-pjax-container a[href]", function(e) {
        o(e.currentTarget instanceof HTMLAnchorElement, "app/assets/modules/github/behaviors/pjax/exceptions.js:25");
        var t = e.currentTarget.pathname;
        Qt(t, location.pathname) ? function(e) {
            var t = e.split("/")[3];
            return -1 !== ["projects", "releases", "tags", "wiki", "community"].indexOf(t) && Qt(e, location.pathname)
        }(t) && e.preventDefault() : e.preventDefault()
    }), r.on("pjax:click", ".js-comment-body", function(e) {
        var t = e.target;
        t instanceof HTMLAnchorElement && "files" === t.pathname.split("/")[3] && e.preventDefault()
    });
    var Yt = {};
 
    function Zt(e) {
        var t = e.target;
        if (o(t instanceof HTMLInputElement || t instanceof HTMLTextAreaElement, "app/assets/modules/github/behaviors/quick-submit.js:18"), (e.ctrlKey || e.metaKey) && "Enter" === e.key) {
            var r = t.form;
            o(r instanceof HTMLFormElement, "app/assets/modules/github/behaviors/quick-submit.js:22");
            var n = r.querySelector("input[type=submit], button[type=submit]");
            if (e.shiftKey) {
                var a = r.querySelector(".js-quick-submit-alternative");
                (a instanceof HTMLInputElement || a instanceof HTMLButtonElement) && !a.disabled && l.submit(r, a)
            } else(n instanceof HTMLInputElement || n instanceof HTMLButtonElement) && n.disabled || l.submit(r);
            e.preventDefault()
        }
    }
 
    function er(e) {
        for (var t = arguments.length, r = Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++) r[n - 1] = arguments[n];
        return r.some(function(t) {
            return e.classList.contains(t)
        })
    }
 
    function tr(e) {
        if (null === e.parentNode || !(e.parentNode instanceof HTMLElement)) throw new Error;
        for (var t = e.parentNode.children, r = 0; r < t.length; ++r)
            if (t[r] === e) return r;
        return 0
    }
    X(regeneratorRuntime.mark(function e() {
        return regeneratorRuntime.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
                case 0:
                    return e.next = 2, h.ready;
                case 2:
                    Yt[document.location.pathname] = Array.from(document.querySelectorAll("head [data-pjax-transient]"));
                case 3:
                case "end":
                    return e.stop()
            }
        }, e, void 0)
    }))(), document.addEventListener("pjax:beforeReplace", function(e) {
        o(e instanceof CustomEvent, "app/assets/modules/github/behaviors/pjax/head.js:14");
        for (var t = e.detail.contents, r = 0; r < t.length; r++) {
            var n = t[r];
            if (n)
                if ("pjax-head" === n.id) Yt[document.location.pathname] = Array.from(n.children), t[r] = null;
                else if ("js-flash-container" === n.id) {
                var a = document.querySelector("#js-flash-container");
                a && a.replaceWith(n), t[r] = null
            }
        }
    }), document.addEventListener("pjax:end", function() {
        var e = Yt[document.location.pathname];
        if (e) {
            var t = document.head;
            o(t, "app/assets/modules/github/behaviors/pjax/head.js:35");
            var r = !0,
                n = !1,
                a = void 0;
            try {
                for (var s, i = document.querySelectorAll("head [data-pjax-transient]")[Symbol.iterator](); !(r = (s = i.next()).done); r = !0) {
                    s.value.remove()
                }
            } catch (e) {
                n = !0, a = e
            } finally {
                try {
                    !r && i.return && i.return()
                } finally {
                    if (n) throw a
                }
            }
            var u = !0,
                c = !1,
                l = void 0;
            try {
                for (var d, m = e[Symbol.iterator](); !(u = (d = m.next()).done); u = !0) {
                    var f = d.value;
                    f.matches("title, script, link[rel=stylesheet]") ? f.matches("link[rel=stylesheet]") && t.append(f) : (f.setAttribute("data-pjax-transient", ""), t.append(f))
                }
            } catch (e) {
                c = !0, l = e
            } finally {
                try {
                    !u && m.return && m.return()
                } finally {
                    if (c) throw l
                }
            }
        }
    }), n.onKey("keydown", ".js-quick-submit", function(e) {
        Zt(e)
    });
    var rr = 0;
 
    function nr(e) {
        return e.replace(/&/g, "&amp;").replace(/'/g, "&apos;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
    }
    var ar = {
        INPUT: function(e) {
            return e instanceof HTMLInputElement && e.checked ? "[x] " : "[ ] "
        },
        CODE: function(e) {
            var t = e.textContent;
            return e.parentNode && "PRE" === e.parentNode.nodeName ? (e.textContent = "```\n" + t.replace(/\n+$/, "") + "\n```", e) : t.indexOf("`") >= 0 ? "`` " + t + " ``" : "`" + t + "`"
        },
        PRE: function(e) {
            var t = e.parentNode;
            if (t instanceof HTMLElement && "DIV" === t.nodeName && t.classList.contains("highlight")) {
                var r = t.className.match(/highlight-source-(\S+)/),
                    n = r ? r[1] : "",
                    a = e.textContent.replace(/\n+$/, "");
                e.textContent = "```" + n + "\n" + a + "\n```", e.append("\n\n")
            }
            return e
        },
        STRONG: function(e) {
            return "**" + e.textContent + "**"
        },
        EM: function(e) {
            return "_" + e.textContent + "_"
        },
        BLOCKQUOTE: function(e) {
            var t = e.textContent.trim().replace(/^/gm, "> "),
                r = document.createElement("pre");
            return r.textContent = t + "\n\n", r
        },
        A: function(e) {
            var t = e.textContent,
                r = e.getAttribute("href");
            return er(e, "user-mention", "team-mention") ? t : er(e, "issue-link") && /^#\d+$/.test(t) ? t : /^https?:/.test(t) && t === r ? t : r ? "[" + t + "](" + r + ")" : t
        },
        IMG: function(e) {
            var t = e.getAttribute("alt") || "";
            if (t && er(e, "emoji")) return t;
            var r = e.getAttribute("src");
            if (!r) throw new Error;
            var n = e.hasAttribute("width") ? ' width="' + nr(e.getAttribute("width") || "") + '"' : "",
                a = e.hasAttribute("height") ? ' height="' + nr(e.getAttribute("height") || "") + '"' : "";
            return n || a ? '<img alt="' + nr(t) + '"' + n + a + ' src="' + nr(r) + '">' : "![" + t + "](" + r + ")"
        },
        LI: function(e) {
            var t = e.parentNode;
            if (!t) throw new Error;
            var r, n, a, s = "";
            (n = (r = e).childNodes[0], a = r.childNodes[1], n && r.childNodes.length < 3 && !("OL" !== n.nodeName && "UL" !== n.nodeName || a && (a.nodeType !== Node.TEXT_NODE || a.textContent.trim()))) || (s = "OL" === t.nodeName ? rr > 0 && !t.previousSibling ? tr(e) + rr + 1 + "\\. " : tr(e) + 1 + ". " : "* ");
            var o = s.replace(/\S/g, " "),
                i = e.textContent.trim().replace(/^/gm, o),
                u = document.createElement("pre");
            return u.textContent = i.replace(o, s), u
        },
        OL: function(e) {
            var t = document.createElement("li");
            return t.appendChild(document.createElement("br")), e.append(t), e
        },
        H1: function(e) {
            var t = parseInt(e.nodeName.slice(1));
            return e.prepend(Array(t + 1).join("#") + " "), e
        },
        UL: function(e) {
            return e
        }
    };
    ar.UL = ar.OL;
    for (var sr = 2; sr <= 6; ++sr) ar["H" + sr] = ar.H1;
 
    function or(e, t) {
        for (var r = document.createNodeIterator(e, NodeFilter.SHOW_ELEMENT, function(e) {
                return e.nodeName in ar && ! function(e) {
                    return e instanceof HTMLAnchorElement && 1 === e.childNodes.length && e.childNodes[0] instanceof HTMLImageElement && e.childNodes[0].src === e.href
                }(e) && (function(e) {
                    return "IMG" === e.nodeName || null != e.firstChild
                }(e) || function(e) {
                    return "INPUT" === e.nodeName && e instanceof HTMLInputElement && "checkbox" === e.type
                }(e)) ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP
            }), n = [], a = r.nextNode(); a;) a instanceof HTMLElement && n.push(a), a = r.nextNode();
        n.reverse();
        var s = !0,
            o = !1,
            i = void 0;
        try {
            for (var u, c = n[Symbol.iterator](); !(s = (u = c.next()).done); s = !0) t(a = u.value, ar[a.nodeName](a))
        } catch (e) {
            o = !0, i = e
        } finally {
            try {
                !s && c.return && c.return()
            } finally {
                if (o) throw i
            }
        }
    }
    var ir = new WeakMap,
        ur = 0;
 
    function cr(e) {
        for (var t = e; t = t.parentElement;)
            if (ir.has(t)) return t
    }
 
    function lr(e) {
        var t, r = !0,
            n = !1,
            a = void 0;
        try {
            for (var s, o = e.querySelectorAll("textarea")[Symbol.iterator](); !(r = (s = o.next()).done); r = !0) {
                var i = s.value;
                if (i instanceof HTMLTextAreaElement && !((t = i).offsetWidth <= 0 && t.offsetHeight <= 0)) return i
            }
        } catch (e) {
            n = !0, a = e
        } finally {
            try {
                !r && o.return && o.return()
            } finally {
                if (n) throw a
            }
        }
    }
 
    function dr(e) {
        if (! function(e) {
                return e.defaultPrevented || "r" !== e.key || e.metaKey || e.altKey || e.shiftKey || e.ctrlKey || e.target instanceof HTMLElement && (t = e.target, r = t.nodeName.toLowerCase(), n = (t.getAttribute("type") || "").toLowerCase(), "select" === r || "textarea" === r || "input" === r && "submit" !== n && "reset" !== n || t.isContentEditable);
                var t, r, n
            }(e)) {
            var t = window.getSelection(),
                r = void 0;
            try {
                r = t.getRangeAt(0)
            } catch (e) {
                return
            }
            mr(t.toString(), r) && e.preventDefault()
        }
    }
 
    function mr(e, t) {
        var r = e.trim();
        if (!r) return !1;
        var n = t.startContainer;
        if (!n) return !1;
        if (n.nodeType !== Node.ELEMENT_NODE && (n = n.parentNode), !(n instanceof Element)) return !1;
        var a = cr(n);
        if (!a) return !1;
        var s = a.getAttribute("data-quote-markdown");
        if (null != s) try {
            r = function(e) {
                var t = document.body;
                if (!t) return "";
                var r = document.createElement("div");
                r.appendChild(e), r.style.cssText = "position:absolute;left:-9999px;", t.appendChild(r);
                var n = "";
                try {
                    var a = window.getSelection(),
                        s = document.createRange();
                    s.selectNodeContents(r), a.removeAllRanges(), a.addRange(s), n = a.toString(), a.removeAllRanges(), s.detach()
                } finally {
                    t.removeChild(r)
                }
                return n
            }(function(e, t) {
                var r = e.startContainer;
                if (!(r && r.parentNode && r.parentNode instanceof HTMLElement)) throw new Error("the range must start within an HTMLElement");
                var n = r.parentNode,
                    a = e.cloneContents();
                if (t) {
                    var s = a.querySelector(t);
                    s && (a = document.createDocumentFragment()).appendChild(s)
                }
                rr = 0;
                var o = n.closest("li");
                if (o && o.parentNode && ("OL" === o.parentNode.nodeName && (rr = tr(o)), !a.querySelector("li"))) {
                    var i = document.createElement("li");
                    if (!o.parentNode) throw new Error;
                    var u = document.createElement(o.parentNode.nodeName);
                    i.appendChild(a), u.appendChild(i), (a = document.createDocumentFragment()).appendChild(u)
                }
                return or(a, function(e, t) {
                    return e.replaceWith(t)
                }), a
            }(t, s)).replace(/^\n+/, "").replace(/\s+$/, "")
        } catch (e) {
            setTimeout(function() {
                throw e
            })
        }
        if (!a.dispatchEvent(new CustomEvent("quote-selection", {
                bubbles: !0,
                cancelable: !0,
                detail: {
                    range: t,
                    selectionText: r
                }
            }))) return !0;
        var o = lr(a);
        if (!o) return !1;
        var i = "> " + r.replace(/\n/g, "\n> ") + "\n\n";
        return o.value && (i = o.value + "\n\n" + i), o.value = i, o.focus(), o.selectionStart = o.value.length, o.scrollTop = o.scrollHeight, !0
    }
    t.observe(".js-quote-selection-container", {
        subscribe: function(e) {
            return function(e) {
                ur += ir.has(e) ? 0 : 1, ir.set(e, 1), document.addEventListener("keydown", dr)
            }(e), {
                unsubscribe: function() {
                    ! function(e) {
                        ur -= ir.has(e) ? 1 : 0, ir.delete(e), ur || document.removeEventListener("keydown", dr)
                    }(e)
                }
            }
        }
    }), r.on("click", ".js-comment-quote-reply", function(t) {
        var r = t.currentTarget,
            n = document.body;
        o(n, "app/assets/modules/github/behaviors/quote-selection.js:13");
        var a = e.closest(r, ".js-comment"),
            s = e.query(a, ".js-comment-body"),
            i = window.getSelection();
        "Range" === i.type && s.contains(i.anchorNode) || (i.removeAllRanges(), i.selectAllChildren(s)), mr(i.toString(), i.getRangeAt(0))
    }), document.addEventListener("toggle", function(e) {
        var t = e.target;
        if (t instanceof Element && t.hasAttribute("open")) {
            var r = t.querySelector(".js-comment-quote-reply.d-none");
            if (r) {
                var n = cr(t);
                n && (n.querySelector(".js-inline-comment-form-container") || lr(n)) && r.classList.remove("d-none")
            }
        }
    }, {
        capture: !0
    }), t.observe(".has-removed-contents", function() {
        var e = void 0;
        return {
            add: function(t) {
                e = Array.from(t.childNodes);
                var n = !0,
                    a = !1,
                    s = void 0;
                try {
                    for (var o, i = e[Symbol.iterator](); !(n = (o = i.next()).done); n = !0) {
                        var u = o.value;
                        t.removeChild(u)
                    }
                } catch (e) {
                    a = !0, s = e
                } finally {
                    try {
                        !n && i.return && i.return()
                    } finally {
                        if (a) throw s
                    }
                }
                var c = t.closest("form");
                c && r.fire(c, "change")
            },
            remove: function(t) {
                var n = !0,
                    a = !1,
                    s = void 0;
                try {
                    for (var o, i = e[Symbol.iterator](); !(n = (o = i.next()).done); n = !0) {
                        var u = o.value;
                        t.appendChild(u)
                    }
                } catch (e) {
                    a = !0, s = e
                } finally {
                    try {
                        !n && i.return && i.return()
                    } finally {
                        if (a) throw s
                    }
                }
                var c = t.closest("form");
                c && r.fire(c, "change")
            }
        }
    });
    var fr = function() {
        var e = X(regeneratorRuntime.mark(function e(t) {
            var n, a, s, o, i, u, c, l, d, m, p, v, g, h, y, b, j, L, x;
            return regeneratorRuntime.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                    case 0:
                        if (n = "session-resume:" + t, a = w.getItem(n)) {
                            e.next = 4;
                            break
                        }
                        return e.abrupt("return");
                    case 4:
                        for (w.removeItem(n), s = [], o = !0, i = !1, u = void 0, e.prev = 9, c = JSON.parse(a)[Symbol.iterator](); !(o = (l = c.next()).done); o = !0) d = l.value, m = re(d, 2), p = m[0], v = m[1], r.fire(document, "session:resume", {
                            targetId: p,
                            targetValue: v
                        }) && (g = document.getElementById(p)) && (g instanceof HTMLInputElement || g instanceof HTMLTextAreaElement) && g.value === g.defaultValue && (g.value = v, s.push(g));
                        e.next = 17;
                        break;
                    case 13:
                        e.prev = 13, e.t0 = e.catch(9), i = !0, u = e.t0;
                    case 17:
                        e.prev = 17, e.prev = 18, !o && c.return && c.return();
                    case 20:
                        if (e.prev = 20, !i) {
                            e.next = 23;
                            break
                        }
                        throw u;
                    case 23:
                        return e.finish(20);
                    case 24:
                        return e.finish(17);
                    case 25:
                        return e.next = 27, f.microtask();
                    case 27:
                        for (h = !0, y = !1, b = void 0, e.prev = 30, j = s[Symbol.iterator](); !(h = (L = j.next()).done); h = !0) x = L.value, r.fire(x, "change");
                        e.next = 38;
                        break;
                    case 34:
                        e.prev = 34, e.t1 = e.catch(30), y = !0, b = e.t1;
                    case 38:
                        e.prev = 38, e.prev = 39, !h && j.return && j.return();
                    case 41:
                        if (e.prev = 41, !y) {
                            e.next = 44;
                            break
                        }
                        throw b;
                    case 44:
                        return e.finish(41);
                    case 45:
                        return e.finish(38);
                    case 46:
                    case "end":
                        return e.stop()
                }
            }, e, this, [
                [9, 13, 17, 25],
                [18, , 20, 24],
                [30, 34, 38, 46],
                [39, , 41, 45]
            ])
        }));
        return function(t) {
            return e.apply(this, arguments)
        }
    }();
 
    function pr(e) {
        var t = e || window.location;
        return v.getMetadataByName(document, "session-resume-id") || t.pathname
    }
    var vr = null;
 
    function gr(e) {
        var t = "session-resume:" + e,
            r = [],
            n = !0,
            a = !1,
            s = void 0;
        try {
            for (var o, i = document.querySelectorAll(".js-session-resumable")[Symbol.iterator](); !(n = (o = i.next()).done); n = !0) {
                var u = o.value;
                (u instanceof HTMLInputElement || u instanceof HTMLTextAreaElement) && r.push(u)
            }
        } catch (e) {
            a = !0, s = e
        } finally {
            try {
                !n && i.return && i.return()
            } finally {
                if (a) throw s
            }
        }
        var c = r.filter(function(e) {
            return function(e) {
                return e.id && e.value !== e.defaultValue && e.form !== vr
            }(e)
        }).map(function(e) {
            return [e.id, e.value]
        });
        c.length && w.setItem(t, JSON.stringify(c))
    }
    window.addEventListener("submit", function() {
        var e = X(regeneratorRuntime.mark(function e(t) {
            return regeneratorRuntime.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                    case 0:
                        return vr = t.target, e.next = 3, f.microtask();
                    case 3:
                        t.defaultPrevented && (vr = null);
                    case 4:
                    case "end":
                        return e.stop()
                }
            }, e, void 0)
        }));
        return function(t) {
            return e.apply(this, arguments)
        }
    }(), {
        capture: !0
    }), window.addEventListener("pageshow", function() {
        fr(pr())
    }), window.addEventListener("pjax:end", function() {
        fr(pr())
    }), window.addEventListener("pagehide", function() {
        gr(pr())
    }), window.addEventListener("pjax:beforeReplace", function(e) {
        var t = e.detail.previousState,
            r = t ? t.url : null;
        if (r) gr(pr(new URL(r)));
        else {
            var n = new Error("pjax:beforeReplace event.detail.previousState.url is undefined");
            setTimeout(function() {
                throw n
            })
        }
    }), t.observe("textarea.js-size-to-fit", {
        constructor: HTMLTextAreaElement,
        subscribe: function(e) {
            var t = null,
                r = !1,
                n = void 0,
                a = void 0,
                s = void 0;
 
            function o(t) {
                if (n !== t.clientX || a !== t.clientY) {
                    var i = e.style.height;
                    s && s !== i && (r = !0, e.style.maxHeight = "", e.removeEventListener("mousemove", o)), s = i
                }
                n = t.clientX, a = t.clientY
            }
            var i = e.ownerDocument,
                u = i.documentElement;
 
            function c() {
                if (!(r || e.value === t || e.offsetWidth <= 0 && e.offsetHeight <= 0)) {
                    var n = function() {
                            for (var t = 0, r = e; r !== i.body && null !== r;) t += r.offsetTop || 0, r = r.offsetParent;
                            var n = t - i.defaultView.pageYOffset;
                            return {
                                top: n,
                                bottom: u.clientHeight - (n + e.offsetHeight)
                            }
                        }(),
                        a = n.top,
                        o = n.bottom;
                    if (!(a < 0 || o < 0)) {
                        var c = Number(getComputedStyle(e).height.replace(/px/, "")) + o;
                        e.style.maxHeight = c - 100 + "px";
                        var l = e.parentElement;
                        if (l instanceof HTMLElement) {
                            var d = l.style.height;
                            l.style.height = getComputedStyle(l).height, e.style.height = "auto", e.style.height = e.scrollHeight + "px", l.style.height = d, s = e.style.height
                        }
                        t = e.value
                    }
                }
            }
 
            function l() {
                r = !1, e.style.height = "", e.style.maxHeight = ""
            }
            e.addEventListener("mousemove", o), e.addEventListener("input", c), e.addEventListener("change", c);
            var d = e.form;
            return d && d.addEventListener("reset", l), e.value && c(), {
                unsubscribe: function() {
                    e.removeEventListener("mousemove", o), e.removeEventListener("input", c), e.removeEventListener("change", c), d && d.removeEventListener("reset", l)
                }
            }
        }
    }), c.remoteForm(".js-social-form", function() {
        var t = X(regeneratorRuntime.mark(function t(r, n) {
            var a, s, o, i, u, c, l;
            return regeneratorRuntime.wrap(function(t) {
                for (;;) switch (t.prev = t.next) {
                    case 0:
                        return t.next = 2, n.json();
                    case 2:
                        for (a = t.sent, s = e.closest(r, ".js-social-container"), o = !0, i = !1, u = void 0, t.prev = 7, c = s.querySelectorAll(".js-social-count")[Symbol.iterator](); !(o = (l = c.next()).done); o = !0) l.value.textContent = a.json.count;
                        t.next = 15;
                        break;
                    case 11:
                        t.prev = 11, t.t0 = t.catch(7), i = !0, u = t.t0;
                    case 15:
                        t.prev = 15, t.prev = 16, !o && c.return && c.return();
                    case 18:
                        if (t.prev = 18, !i) {
                            t.next = 21;
                            break
                        }
                        throw u;
                    case 21:
                        return t.finish(18);
                    case 22:
                        return t.finish(15);
                    case 23:
                    case "end":
                        return t.stop()
                }
            }, t, this, [
                [7, 11, 15, 23],
                [16, , 18, 22]
            ])
        }));
        return function(e, r) {
            return t.apply(this, arguments)
        }
    }());
    var hr = new Map,
        yr = function(e) {
            for (var t = arguments.length, r = Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++) r[n - 1] = arguments[n];
            return new br(e, r, "html")
        },
        br = function() {
            function e(t, r, n) {
                var a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : _r;
                Q(this, e), this.strings = t, this.values = r, this.type = n, this.partCallback = a
            }
            return Y(e, [{
                key: "getHTML",
                value: function() {
                    for (var e, t, r = this.strings.length - 1, n = "", a = !0, s = 0; s < r; s++) {
                        var o = this.strings[s];
                        n += o;
                        var i = (void 0, void 0, t = (e = o).lastIndexOf(">"), e.indexOf("<", t + 1) > -1 ? e.length : t);
                        n += (a = i > -1 ? i < o.length : a) ? wr : Lr
                    }
                    return n += this.strings[r]
                }
            }, {
                key: "getTemplateElement",
                value: function() {
                    var e = document.createElement("template");
                    return e.innerHTML = this.getHTML(), e
                }
            }]), e
        }();
    ! function(e) {
        function t() {
            return Q(this, t), te(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
        }
        ee(t, br), Y(t, [{
            key: "getHTML",
            value: function() {
                return "<svg>" + Z(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "getHTML", this).call(this) + "</svg>"
            }
        }, {
            key: "getTemplateElement",
            value: function() {
                var e = Z(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "getTemplateElement", this).call(this),
                    r = e.content,
                    n = r.firstChild;
                return r.removeChild(n), Fr(r, n.firstChild), e
            }
        }])
    }();
 
    function jr(e) {
        var t = hr.get(e.type);
        void 0 === t && (t = new Map, hr.set(e.type, t));
        var r = t.get(e.strings);
        return void 0 === r && (r = new qr(e, e.getTemplateElement()), t.set(e.strings, r)), r
    }
    var Lr = "{{lit-" + String(Math.random()).slice(2) + "}}",
        wr = "\x3c!--" + Lr + "--\x3e",
        xr = new RegExp(Lr + "|" + wr),
        kr = /[ \x09\x0a\x0c\x0d]([^\0-\x1F\x7F-\x9F \x09\x0a\x0c\x0d"'>=/]+)[ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*)$/;
    var Er = function e(t, r, n, a, s) {
            Q(this, e), this.type = t, this.index = r, this.name = n, this.rawName = a, this.strings = s
        },
        Tr = function(e) {
            return -1 !== e.index
        },
        qr = function e(t, r) {
            Q(this, e), this.parts = [], this.element = r;
            for (var n = this.element.content, a = document.createTreeWalker(n, 133, null, !1), s = -1, o = 0, i = [], u = void 0, c = void 0; a.nextNode();) {
                s++, u = c;
                var l = c = a.currentNode;
                if (1 === l.nodeType) {
                    if (!l.hasAttributes()) continue;
                    for (var d = l.attributes, m = 0, f = 0; f < d.length; f++) d[f].value.indexOf(Lr) >= 0 && m++;
                    for (; m-- > 0;) {
                        var p = t.strings[o],
                            v = kr.exec(p)[1],
                            g = d.getNamedItem(v),
                            h = g.value.split(xr);
                        this.parts.push(new Er("attribute", s, g.name, v, h)), l.removeAttribute(g.name), o += h.length - 1
                    }
                } else if (3 === l.nodeType) {
                    var y = l.nodeValue;
                    if (y.indexOf(Lr) < 0) continue;
                    var b = l.parentNode,
                        j = y.split(xr),
                        L = j.length - 1;
                    o += L;
                    for (var w = 0; w < L; w++) b.insertBefore("" === j[w] ? document.createComment("") : document.createTextNode(j[w]), l), this.parts.push(new Er("node", s++));
                    b.insertBefore("" === j[L] ? document.createComment("") : document.createTextNode(j[L]), l), i.push(l)
                } else if (8 === l.nodeType && l.nodeValue === Lr) {
                    var x = l.parentNode,
                        k = l.previousSibling;
                    null === k || k !== u || k.nodeType !== Node.TEXT_NODE ? x.insertBefore(document.createComment(""), l) : s--, this.parts.push(new Er("node", s++)), i.push(l), null === l.nextSibling ? x.insertBefore(document.createComment(""), l) : s--, c = u, o++
                }
            }
            var E = !0,
                T = !1,
                q = void 0;
            try {
                for (var S, A = i[Symbol.iterator](); !(E = (S = A.next()).done); E = !0) {
                    var M = S.value;
                    M.parentNode.removeChild(M)
                }
            } catch (e) {
                T = !0, q = e
            } finally {
                try {
                    !E && A.return && A.return()
                } finally {
                    if (T) throw q
                }
            }
        },
        Sr = function(e, t) {
            return Ar(t) ? (t = t(e), Mr) : null === t ? void 0 : t
        },
        Ar = function(e) {
            return "function" == typeof e && !0 === e.__litDirective
        },
        Mr = {},
        Hr = function(e) {
            return null === e || !("object" === (void 0 === e ? "undefined" : G(e)) || "function" == typeof e)
        },
        Ir = function() {
            function e(t, r, n, a) {
                Q(this, e), this.instance = t, this.element = r, this.name = n, this.strings = a, this.size = a.length - 1, this._previousValues = []
            }
            return Y(e, [{
                key: "_interpolate",
                value: function(e, t) {
                    for (var r = this.strings, n = r.length - 1, a = "", s = 0; s < n; s++) {
                        a += r[s];
                        var o = Sr(this, e[t + s]);
                        if (o && o !== Mr && (Array.isArray(o) || "string" != typeof o && o[Symbol.iterator])) {
                            var i = !0,
                                u = !1,
                                c = void 0;
                            try {
                                for (var l, d = o[Symbol.iterator](); !(i = (l = d.next()).done); i = !0) {
                                    a += l.value
                                }
                            } catch (e) {
                                u = !0, c = e
                            } finally {
                                try {
                                    !i && d.return && d.return()
                                } finally {
                                    if (u) throw c
                                }
                            }
                        } else a += o
                    }
                    return a + r[n]
                }
            }, {
                key: "_equalToPreviousValues",
                value: function(e, t) {
                    for (var r = t; r < t + this.size; r++)
                        if (this._previousValues[r] !== e[r] || !Hr(e[r])) return !1;
                    return !0
                }
            }, {
                key: "setValue",
                value: function(e, t) {
                    if (!this._equalToPreviousValues(e, t)) {
                        var r = this.strings,
                            n = void 0;
                        2 === r.length && "" === r[0] && "" === r[1] ? (n = Sr(this, e[t]), Array.isArray(n) && (n = n.join(""))) : n = this._interpolate(e, t), n !== Mr && this.element.setAttribute(this.name, n), this._previousValues = e
                    }
                }
            }]), e
        }(),
        Rr = function() {
            function e(t, r, n) {
                Q(this, e), this.instance = t, this.startNode = r, this.endNode = n, this._previousValue = void 0
            }
            return Y(e, [{
                key: "setValue",
                value: function(e) {
                    if ((e = Sr(this, e)) !== Mr)
                        if (Hr(e)) {
                            if (e === this._previousValue) return;
                            this._setText(e)
                        } else e instanceof br ? this._setTemplateResult(e) : Array.isArray(e) || e[Symbol.iterator] ? this._setIterable(e) : e instanceof Node ? this._setNode(e) : void 0 !== e.then ? this._setPromise(e) : this._setText(e)
                }
            }, {
                key: "_insert",
                value: function(e) {
                    this.endNode.parentNode.insertBefore(e, this.endNode)
                }
            }, {
                key: "_setNode",
                value: function(e) {
                    this._previousValue !== e && (this.clear(), this._insert(e), this._previousValue = e)
                }
            }, {
                key: "_setText",
                value: function(e) {
                    var t = this.startNode.nextSibling;
                    e = void 0 === e ? "" : e, t === this.endNode.previousSibling && t.nodeType === Node.TEXT_NODE ? t.textContent = e : this._setNode(document.createTextNode(e)), this._previousValue = e
                }
            }, {
                key: "_setTemplateResult",
                value: function(e) {
                    var t = this.instance._getTemplate(e),
                        r = void 0;
                    this._previousValue && this._previousValue.template === t ? r = this._previousValue : (r = new Cr(t, this.instance._partCallback, this.instance._getTemplate), this._setNode(r._clone()), this._previousValue = r), r.update(e.values)
                }
            }, {
                key: "_setIterable",
                value: function(t) {
                    Array.isArray(this._previousValue) || (this.clear(), this._previousValue = []);
                    var r = this._previousValue,
                        n = 0,
                        a = !0,
                        s = !1,
                        o = void 0;
                    try {
                        for (var i, u = t[Symbol.iterator](); !(a = (i = u.next()).done); a = !0) {
                            var c = i.value,
                                l = r[n];
                            if (void 0 === l) {
                                var d = this.startNode;
                                if (n > 0) d = r[n - 1].endNode = document.createTextNode(""), this._insert(d);
                                l = new e(this.instance, d, this.endNode), r.push(l)
                            }
                            l.setValue(c), n++
                        }
                    } catch (e) {
                        s = !0, o = e
                    } finally {
                        try {
                            !a && u.return && u.return()
                        } finally {
                            if (s) throw o
                        }
                    }
                    if (0 === n) this.clear(), this._previousValue = void 0;
                    else if (n < r.length) {
                        var m = r[n - 1];
                        r.length = n, this.clear(m.endNode.previousSibling), m.endNode = this.endNode
                    }
                }
            }, {
                key: "_setPromise",
                value: function(e) {
                    var t = this;
                    this._previousValue = e, e.then(function(r) {
                        t._previousValue === e && t.setValue(r)
                    })
                }
            }, {
                key: "clear",
                value: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.startNode;
                    Pr(this.startNode.parentNode, e.nextSibling, this.endNode)
                }
            }]), e
        }(),
        _r = function(e, t, r) {
            if ("attribute" === t.type) return new Ir(e, r, t.name, t.strings);
            if ("node" === t.type) return new Rr(e, r, r.nextSibling);
            throw new Error("Unknown part type " + t.type)
        },
        Cr = function() {
            function e(t, r, n) {
                Q(this, e), this._parts = [], this.template = t, this._partCallback = r, this._getTemplate = n
            }
            return Y(e, [{
                key: "update",
                value: function(e) {
                    var t = 0,
                        r = !0,
                        n = !1,
                        a = void 0;
                    try {
                        for (var s, o = this._parts[Symbol.iterator](); !(r = (s = o.next()).done); r = !0) {
                            var i = s.value;
                            i ? void 0 === i.size ? (i.setValue(e[t]), t++) : (i.setValue(e, t), t += i.size) : t++
                        }
                    } catch (e) {
                        n = !0, a = e
                    } finally {
                        try {
                            !r && o.return && o.return()
                        } finally {
                            if (n) throw a
                        }
                    }
                }
            }, {
                key: "_clone",
                value: function() {
                    var e = this.template.element.content.cloneNode(!0),
                        t = this.template.parts;
                    if (t.length > 0)
                        for (var r = document.createTreeWalker(e, 133, null, !1), n = -1, a = 0; a < t.length; a++) {
                            var s = t[a],
                                o = Tr(s);
                            if (o)
                                for (; n < s.index;) n++, r.nextNode();
                            this._parts.push(o ? this._partCallback(this, s, r.currentNode) : void 0)
                        }
                    return e
                }
            }]), e
        }(),
        Fr = function(e, t) {
            for (var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null, n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null, a = t; a !== r;) {
                var s = a.nextSibling;
                e.insertBefore(a, n), a = s
            }
        },
        Pr = function(e, t) {
            for (var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null, n = t; n !== r;) {
                var a = n.nextSibling;
                e.removeChild(n), n = a
            }
        };
 
    function Nr(e, t) {
        e.addEventListener("keydown", Br), t.addEventListener("click", Ur)
    }
 
    function Dr(e, t) {
        e.removeAttribute("aria-activedescendant"), e.removeEventListener("keydown", Br), t.removeEventListener("click", Ur)
    }
    var Or = !!navigator.userAgent.match(/Macintosh/);
 
    function Br(e) {
        if (!(e.shiftKey || e.metaKey || e.altKey)) {
            var t = e.currentTarget;
            if (t instanceof HTMLTextAreaElement || t instanceof HTMLInputElement) {
                var r = document.getElementById(t.getAttribute("aria-owns") || "");
                if (r) switch (e.key) {
                    case "Enter":
                    case "Tab":
                        ! function(e, t) {
                            var r = t.querySelector('[aria-selected="true"]');
                            if (!r) return;
                            Vr(r)
                        }(0, r), e.preventDefault();
                        break;
                    case "ArrowDown":
                        zr(t, r, 1), e.preventDefault();
                        break;
                    case "ArrowUp":
                        zr(t, r, -1), e.preventDefault();
                        break;
                    case "n":
                        Or && e.ctrlKey && (zr(t, r, 1), e.preventDefault());
                        break;
                    case "p":
                        Or && e.ctrlKey && (zr(t, r, -1), e.preventDefault())
                }
            }
        }
    }
 
    function Ur(e) {
        if (e.target instanceof Element) {
            var t = e.target.closest('[role="option"]');
            t && (Vr(t), e.preventDefault())
        }
    }
 
    function Vr(e) {
        e.dispatchEvent(new CustomEvent("combobox-commit", {
            bubbles: !0
        }))
    }
 
    function zr(e, t) {
        var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
            n = t.querySelector('[aria-selected="true"]'),
            a = Array.from(t.querySelectorAll('[role="option"]')),
            s = a.indexOf(n),
            o = 1 === r ? 0 : a.length - 1;
        if (n && s >= 0) {
            var i = s + r;
            i >= 0 && i < a.length && (o = i)
        }
        var u = a[o];
        if (u) {
            var c = !0,
                l = !1,
                d = void 0;
            try {
                for (var m, f = a[Symbol.iterator](); !(c = (m = f.next()).done); c = !0) {
                    var p = m.value;
                    u === p ? (e.setAttribute("aria-activedescendant", u.id), u.setAttribute("aria-selected", "true")) : p.setAttribute("aria-selected", "false")
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
        }
    }
    var Wr = ["position:absolute;", "overflow:auto;", "word-wrap:break-word;", "top:0px;", "left:-9999px;"],
        $r = ["box-sizing", "font-family", "font-size", "font-style", "font-variant", "font-weight", "height", "letter-spacing", "line-height", "max-height", "min-height", "padding-bottom", "padding-left", "padding-right", "padding-top", "border-bottom", "border-left", "border-right", "border-top", "text-decoration", "text-indent", "text-transform", "width", "word-spacing"],
        Kr = new WeakMap;
 
    function Jr(t) {
        var r = function(e, t) {
                var r = e.nodeName.toLowerCase();
                if ("textarea" !== r && "input" !== r) throw new Error("expected textField to a textarea or input");
                var n = Kr.get(e);
                if (n && n.parentElement === e.parentElement) n.innerHTML = "";
                else {
                    n = document.createElement("div"), Kr.set(e, n);
                    var a = window.getComputedStyle(e),
                        s = Wr.slice(0);
                    "textarea" === r ? s.push("white-space:pre-wrap;") : s.push("white-space:nowrap;");
                    for (var i = 0, u = $r.length; i < u; i++) {
                        var c = $r[i];
                        s.push(c + ":" + a.getPropertyValue(c) + ";")
                    }
                    n.style.cssText = s.join(" ")
                }
                var l = void 0;
                !1 !== t && ((l = document.createElement("span")).style.cssText = "position: absolute;", l.className = "text-field-mirror-marker", l.innerHTML = "&nbsp;");
                var d = void 0,
                    m = void 0;
                if ("number" == typeof t) {
                    var f = e.value.substring(0, t);
                    f && (d = document.createTextNode(f)), (f = e.value.substring(t)) && (m = document.createTextNode(f))
                } else {
                    var p = e.value;
                    p && (d = document.createTextNode(p))
                }
                return d && n.appendChild(d), l && n.appendChild(l), m && n.appendChild(m), n.parentElement || (o(e.parentElement, "textField must have a parentElement to mirror -- app/assets/modules/github/text-field-mirror.js:111"), e.parentElement.insertBefore(n, e)), n.scrollTop = e.scrollTop, n.scrollLeft = e.scrollLeft, n
            }(t, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : t.selectionEnd),
            n = e.query(r, ".text-field-mirror-marker"),
            a = r.getBoundingClientRect(),
            s = n.getBoundingClientRect();
        return setTimeout(function() {
            r.remove()
        }, 5e3), {
            top: s.top - a.top,
            left: s.left - a.left
        }
    }
    var Gr = ne(["", ""], ["", ""]),
        Xr = ne(['\n        <li\n          role="option"\n          id="suggester-', "-", "-", '"\n          data-value="', '"\n          data-text="', '"\n          data-mentionable-type="', '"\n          data-mentionable-id="', '">\n          <span>', "</span>\n          <small>", "</small>\n        </li>"], ['\n        <li\n          role="option"\n          id="suggester-', "-", "-", '"\n          data-value="', '"\n          data-text="', '"\n          data-mentionable-type="', '"\n          data-mentionable-id="', '">\n          <span>', "</span>\n          <small>", "</small>\n        </li>"]),
        Qr = new WeakMap,
        Yr = {},
        Zr = function() {
            function t(e) {
                Q(this, t), this.setup = this.setup.bind(this), this.teardown = this.teardown.bind(this), this.textarea = e.input, this.types = e.types, this.suggester = e.suggester, this.suggestions = document.createElement("div"), this.deactivateHandler = this.deactivate.bind(this), this.pasteHandler = this.onPaste.bind(this), this.inputHandler = this.onInput.bind(this), this.escapeHandler = this.onEscapeKeydown.bind(this), this.commitHandler = this.onComboboxCommit.bind(this)
            }
            return Y(t, [{
                key: "setup",
                value: function() {
                    var e = this.textarea.form;
                    o(e, "app/assets/modules/github/suggester.js:102"), e.addEventListener("reset", this.deactivateHandler), this.textarea.addEventListener("paste", this.pasteHandler), this.textarea.addEventListener("input", this.inputHandler), this.textarea.addEventListener("keydown", this.escapeHandler), this.suggester.addEventListener("combobox-commit", this.commitHandler), this.textarea.addEventListener("focusout:delay", this.teardown), this.loadSuggestions()
                }
            }, {
                key: "teardown",
                value: function() {
                    this.deactivate();
                    var e = this.textarea.form;
                    o(e, "app/assets/modules/github/suggester.js:118"), e.removeEventListener("reset", this.deactivateHandler), this.textarea.removeEventListener("paste", this.pasteHandler), this.textarea.removeEventListener("input", this.inputHandler), this.textarea.removeEventListener("keydown", this.escapeHandler), this.suggester.removeEventListener("combobox-commit", this.commitHandler), this.textarea.removeEventListener("focusout:delay", this.teardown), this.onSuggestionsLoaded = function() {}
                }
            }, {
                key: "onPaste",
                value: function() {
                    this.deactivate(), this.justPasted = !0
                }
            }, {
                key: "onInput",
                value: function() {
                    this.justPasted ? this.justPasted = !1 : this.checkQuery()
                }
            }, {
                key: "onEscapeKeydown",
                value: function(e) {
                    this.suggester.hidden || "Escape" === e.key && (this.deactivate(), e.stopImmediatePropagation(), e.preventDefault())
                }
            }, {
                key: "_getDataValue",
                value: function(e) {
                    return this.currentSearch && this.currentSearch.type.getValue ? this.currentSearch.type.getValue(e) : e.getAttribute("data-value")
                }
            }, {
                key: "_findIndexOfPick",
                value: function(e, t) {
                    var r = 1,
                        n = !0,
                        a = !1,
                        s = void 0;
                    try {
                        for (var o, i = e[Symbol.iterator](); !(n = (o = i.next()).done); n = !0) {
                            var u = o.value;
                            if (this._getDataValue(u) === t) return r;
                            r++
                        }
                    } catch (e) {
                        a = !0, s = e
                    } finally {
                        try {
                            !n && i.return && i.return()
                        } finally {
                            if (a) throw s
                        }
                    }
                    return -1
                }
            }, {
                key: "onComboboxCommit",
                value: function(e) {
                    var t = e.target;
                    if (o(t instanceof HTMLElement, "app/assets/modules/github/suggester.js:178"), t.hasAttribute("data-value")) {
                        var r = this._getDataValue(t);
                        if (r) {
                            var n = this.currentSearch;
                            if (n) {
                                var a = this.textarea.value.substring(0, n.endIndex),
                                    s = this.textarea.value.substring(n.endIndex);
                                a = a.replace(n.type.match, n.type.replace.replace("$value", r)), this.textarea.value = a + s, this.deactivate(), this.textarea.focus(), this.textarea.selectionStart = a.length, this.textarea.selectionEnd = a.length
                            }
                        }
                    }
                }
            }, {
                key: "mentionData",
                value: function() {
                    var t = this.suggestions.querySelector("[data-mentions-json]");
                    if (t) {
                        var r = Qr.get(t);
                        if (!r) {
                            var n = e.getAttribute(t, "data-mentions-json");
                            r = JSON.parse(n), Qr.set(t, r)
                        }
                        return r
                    }
                }
            }, {
                key: "checkQuery",
                value: function() {
                    var e = X(regeneratorRuntime.mark(function e() {
                        var t, r;
                        return regeneratorRuntime.wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if (!(t = this.searchQuery())) {
                                        e.next = 11;
                                        break
                                    }
                                    if (r = "mention" === t.type.typeid ? this.mentionData() : null, !this.currentSearch || this.currentSearch !== t.query) {
                                        e.next = 5;
                                        break
                                    }
                                    return e.abrupt("return");
                                case 5:
                                    return this.currentSearch = t, e.next = 8, this.search(r);
                                case 8:
                                    return e.sent ? this.activate(t.startIndex) : this.deactivate(), e.abrupt("return");
                                case 11:
                                    this.currentSearch = null, this.deactivate();
                                case 13:
                                case "end":
                                    return e.stop()
                            }
                        }, e, this)
                    }));
                    return function() {
                        return e.apply(this, arguments)
                    }
                }()
            }, {
                key: "renderResults",
                value: function(e, t) {
                    var r, n = function(e) {
                        var t = "user" === e.type ? e.login : e.name,
                            r = "user" === e.type ? e.name : e.description,
                            n = t + " " + r;
                        return yr(Xr, e.id, e.type, t, t, n, e.type, e.id, t, r)
                    };
                    ! function(e, t) {
                        var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : jr,
                            n = r(e),
                            a = t.__templateInstance;
                        if (void 0 === a || a.template !== n || a._partCallback !== e.partCallback) {
                            a = new Cr(n, e.partCallback, r), t.__templateInstance = a;
                            var s = a._clone();
                            a.update(e.values), Pr(t, t.firstChild), t.appendChild(s)
                        } else a.update(e.values)
                    }((r = t, yr(Gr, r.map(n))), e)
                }
            }, {
                key: "activate",
                value: function(e) {
                    if (this.textarea === document.activeElement) {
                        var t = Jr(this.textarea, e + 1),
                            r = t.top,
                            n = t.left;
                        if (this.suggester.style.top = r + "px", this.suggester.style.left = n + "px", this.suggester.hidden) {
                            this.suggester.hidden = !1;
                            var a = this.suggester.querySelector("ul");
                            o(a, "app/assets/modules/github/suggester.js:283");
                            var s = a.id || "suggester-" + Math.floor(1e5 * Math.random()).toString();
                            a.id = s, this.textarea.setAttribute("aria-owns", s), this.textarea.setAttribute("role", "combobox"), Nr(this.textarea, this.suggester)
                        }
                    }
                }
            }, {
                key: "deactivate",
                value: function() {
                    if (!this.suggester.hidden) {
                        this.suggester.hidden = !0;
                        var e = this.suggester.querySelector(".suggestions");
                        e && (e.style.display = "none"), this.textarea.removeAttribute("role"), Dr(this.textarea, this.suggester)
                    }
                }
            }, {
                key: "search",
                value: function() {
                    var e = X(regeneratorRuntime.mark(function e(t) {
                        var r, n, a, s, o, i, u;
                        return regeneratorRuntime.wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if (this.currentSearch) {
                                        e.next = 2;
                                        break
                                    }
                                    return e.abrupt("return", !1);
                                case 2:
                                    return r = this.currentSearch, n = r.type, a = r.query, e.next = 5, n.search(this.suggestions, a, t);
                                case 5:
                                    if (s = e.sent, o = s.element, i = s.results, !((i && Array.isArray(i) ? i.length : i) > 0 && o)) {
                                        e.next = 20;
                                        break
                                    }
                                    return u = o.cloneNode(!0), t && Array.isArray(i) && this.renderResults(u, i), this.suggester.innerHTML = "", this.suggester.appendChild(u), u.id = this.textarea.getAttribute("aria-owns") || "", u.style.display = "block", zr(this.textarea, this.suggester), e.abrupt("return", !0);
                                case 20:
                                    return e.abrupt("return", !1);
                                case 21:
                                case "end":
                                    return e.stop()
                            }
                        }, e, this)
                    }));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }()
            }, {
                key: "searchQuery",
                value: function() {
                    var e = this.textarea.selectionEnd,
                        t = this.textarea.value.substring(0, e);
                    for (var r in this.types) {
                        var n = this.types[r],
                            a = t.match(n.match);
                        if (a) return n.normalizeMatch ? n.normalizeMatch(n, e, a) : this.normalizeMatch(n, e, a)
                    }
                }
            }, {
                key: "normalizeMatch",
                value: function(e, t, r) {
                    var n = r[2];
                    return {
                        type: e,
                        text: n,
                        query: r[3],
                        startIndex: t - n.length,
                        endIndex: t
                    }
                }
            }, {
                key: "loadSuggestions",
                value: function() {
                    var e = X(regeneratorRuntime.mark(function e() {
                        var t, r, n;
                        return regeneratorRuntime.wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if (!this.suggestions.hasChildNodes()) {
                                        e.next = 2;
                                        break
                                    }
                                    return e.abrupt("return");
                                case 2:
                                    if (t = this.suggester.getAttribute("data-url")) {
                                        e.next = 5;
                                        break
                                    }
                                    return e.abrupt("return");
                                case 5:
                                    return r = Yr[t] || (Yr[t] = s.fetchText(t)), e.next = 8, r;
                                case 8:
                                    n = e.sent, this.onSuggestionsLoaded(n);
                                case 10:
                                case "end":
                                    return e.stop()
                            }
                        }, e, this)
                    }));
                    return function() {
                        return e.apply(this, arguments)
                    }
                }()
            }, {
                key: "onSuggestionsLoaded",
                value: function(e) {
                    var t = i.parseHTML(document, e);
                    this.suggestions.appendChild(t), document.activeElement === this.textarea && (this.currentSearch = null, this.checkQuery())
                }
            }]), t
        }(),
        en = new WeakMap,
        tn = new WeakMap;
 
    function rn(e, t, r) {
        var n = t.toLowerCase(),
            a = r.text,
            s = r.score,
            o = e;
        if (n) {
            o = [];
            var i = !0,
                u = !1,
                c = void 0;
            try {
                for (var l, d = e[Symbol.iterator](); !(i = (l = d.next()).done); i = !0) {
                    var m = l.value;
                    null == en.get(m) && en.set(m, a(m));
                    var f = s ? s(en.get(m) || "", n, m) : jt(en.get(m) || "", n);
                    tn.set(m, f), f > 0 && o.push(m)
                }
            } catch (e) {
                u = !0, c = e
            } finally {
                try {
                    !i && d.return && d.return()
                } finally {
                    if (u) throw c
                }
            }
            o.sort(nn)
        }
        return null != r.limit ? o.slice(0, r.limit) : o
    }
 
    function nn(e, t) {
        var r = parseFloat(tn.get(e)),
            n = parseFloat(tn.get(t)),
            a = en.get(e) || "",
            s = en.get(t) || "";
        return r > n ? -1 : r < n ? 1 : a < s ? -1 : a > s ? 1 : 0
    }
 
    function an(e, t, r) {
        var n = r[3],
            a = r[4];
        return {
            type: e,
            text: n,
            query: a,
            startIndex: t - a.length,
            endIndex: t
        }
    }
    var sn = {
            mention: {
                typeid: "mention",
                match: /(^|\s|\()(@([a-z0-9\-_/]*))$/i,
                replace: "$1@$value ",
                search: function(e, t, r) {
                    var n = pn(t),
                        a = e.querySelector("ul.mention-suggestions"),
                        s = void 0;
                    return s = r ? rn(r, t, {
                        limit: 5,
                        score: function(e, t, r) {
                            var a = n.score(e),
                                s = r.score;
                            return "number" == typeof s ? a * s : a
                        },
                        text: function(e) {
                            return e.login ? (e.login + " " + e.name).trim().toLowerCase() : (e.name + " " + e.description).trim().toLowerCase()
                        }
                    }) : At(a, t, {
                        limit: 5,
                        text: cn,
                        score: function(e, t, r) {
                            var a = n.score(e);
                            o(r, "app/assets/modules/github/behaviors/suggester.js:94");
                            var s = r.getAttribute("data-mentionable-score");
                            return null !== s ? a * parseFloat(s) : a
                        }
                    }), Promise.resolve({
                        element: a,
                        results: s
                    })
                }
            },
            auditLogUser: {
                typeid: "auditLogUser",
                match: /(^|\s)((-?actor:|-?user:)([a-z0-9\-+_]*))$/i,
                replace: "$1$3$value ",
                search: function(e, t) {
                    var r = e.querySelector("ul.user-suggestions"),
                        n = At(r, t, {
                            limit: 5
                        });
                    return Promise.resolve({
                        element: r,
                        results: n
                    })
                },
                normalizeMatch: an
            },
            auditLogOrg: {
                typeid: "auditLogOrg",
                match: /(^|\s)((-?org:)([a-z0-9\-+_]*))$/i,
                replace: "$1$3$value ",
                search: function(e, t) {
                    var r = e.querySelector("ul.org-suggestions"),
                        n = At(r, t, {
                            limit: 5
                        });
                    return Promise.resolve({
                        element: r,
                        results: n
                    })
                },
                normalizeMatch: an
            },
            auditLogAction: {
                typeid: "auditLogAction",
                match: /(^|\s)((-?action:)([a-z0-9.\-+_]*))$/i,
                replace: "$1$3$value ",
                search: function(e, t) {
                    var r = e.querySelector("ul.action-suggestions"),
                        n = At(r, t, {
                            limit: 5
                        });
                    return Promise.resolve({
                        element: r,
                        results: n
                    })
                },
                normalizeMatch: an
            },
            auditLogRepo: {
                typeid: "auditLogRepo",
                match: /(^|\s)((-?repo:)([a-z0-9/\-+_]*))$/i,
                replace: "$1$3$value ",
                search: function(e, t) {
                    var r = e.querySelector("ul.repo-suggestions"),
                        n = At(r, t, {
                            limit: 5
                        });
                    return Promise.resolve({
                        element: r,
                        results: n
                    })
                },
                normalizeMatch: an
            },
            auditLogCountry: {
                typeid: "auditLogCountry",
                match: /(^|\s)((-?country:)([a-z0-9\-+_]*))$/i,
                replace: "$1$3$value ",
                search: function(e, t) {
                    var r = e.querySelector("ul.country-suggestions"),
                        n = At(r, t, {
                            limit: 5
                        });
                    return Promise.resolve({
                        element: r,
                        results: n
                    })
                },
                normalizeMatch: an
            },
            emoji: {
                typeid: "emoji",
                match: /(^|\s|\()(:([a-z0-9\-+_]*))$/i,
                replace: "$1$value ",
                getValue: function(e) {
                    if (e.hasAttribute("data-use-colon-emoji")) return e.getAttribute("data-value");
                    var t = e.firstElementChild;
                    return t && "G-EMOJI" === t.tagName && !t.firstElementChild ? t.textContent : e.getAttribute("data-value")
                },
                search: function(e, t) {
                    var r = e.querySelector("ul.emoji-suggestions"),
                        n = At(r, " " + t.toLowerCase().replace(/_/g, " "), {
                            limit: 5,
                            text: un,
                            score: dn
                        });
                    return Promise.resolve({
                        element: r,
                        results: n
                    })
                }
            },
            search: {
                typeid: "search",
                match: /(^|\s)([a-z-]*)$/i,
                replace: "$1$value",
                getValue: function(e) {
                    return e.getAttribute("data-value")
                },
                search: function(e, t) {
                    var r = e.querySelector("ul.search-suggestions"),
                        n = At(r, t, {
                            limit: 10,
                            text: function(e) {
                                return e.getAttribute("data-text") || ""
                            },
                            score: ln
                        });
                    return Promise.resolve({
                        element: r,
                        results: n
                    })
                },
                normalizeMatch: function(e, t, r) {
                    var n = r[2];
                    return {
                        type: e,
                        text: n,
                        query: n,
                        startIndex: t - n.length,
                        endIndex: t
                    }
                }
            },
            hashed: {
                typeid: "issue",
                match: /(^|\s|\()(#([a-z0-9\-_/]*))$/i,
                replace: "$1#$value ",
                search: function(e, t) {
                    var r = void 0,
                        n = e.querySelector("ul.hashed-suggestions"),
                        a = At(n, t, {
                            limit: 5,
                            text: cn,
                            score: /^\d+$/.test(t) ? (r = new RegExp("\\b" + t), function(e) {
                                return function(e, t) {
                                    var r = e.search(t);
                                    return r > -1 ? 1e3 - r : 0
                                }(e, r)
                            }) : pn(t).score
                        });
                    return Promise.resolve({
                        element: n,
                        results: a
                    })
                }
            }
        },
        on = {};
 
    function un(e) {
        var t = e.getAttribute("data-emoji-name") || "";
        return on[t] = " " + cn(e).replace(/_/g, " "), t
    }
 
    function cn(e) {
        return (e.getAttribute("data-text") || "").trim().toLowerCase()
    }
 
    function ln(e, t) {
        var r = e.indexOf(t);
        return -1 === r ? 0 : 1 / (r + 1)
    }
 
    function dn(e, t) {
        var r = on[e].indexOf(t);
        return r > -1 ? 1e3 - r : 0
    }
 
    function mn(e, t, r) {
        for (var n = r, a = [], s = 1; s < t.length; s += 1) {
            if (-1 === (n = e.indexOf(t[s], n))) return;
            a.push(n++)
        }
        return a
    }
 
    function fn() {
        return 2
    }
 
    function pn(e) {
        var t = void 0;
        if (e) {
            var r = e.toLowerCase().split("");
            t = function(t) {
                if (!t) return 0;
                var n = function(e, t) {
                    var r, n = void 0,
                        a = void 0,
                        s = void 0,
                        o = function(e, t) {
                            for (var r = 0, n = [];
                                (r = e.indexOf(t, r)) > -1;) n.push(r++);
                            return n
                        }(e, t[0]);
                    if (0 !== o.length) {
                        if (1 === t.length) return [o[0], 1, []];
                        for (s = null, a = 0, r = o.length; a < r; a++) {
                            var i = o[a];
                            if (n = mn(e, t, i + 1)) {
                                var u = n[n.length - 1] - i;
                                (!s || u < s[1]) && (s = [i, u, n])
                            }
                        }
                        return s
                    }
                }(t, r);
                if (!n) return 0;
                var a = e.length / n[1];
                return a /= n[0] / 2 + 1
            }
        } else t = fn;
        return {
            score: t
        }
    }
 
    function vn(e) {
        var t = e.match(/`{3,}/g);
        return t || (t = function(e) {
            return e.replace(/`{3,}[^`]*\n(.+)?\n`{3,}/g, "")
        }(e).match(/`/g)), null != t && t.length % 2
    }
    r.on("focusin:delay", ".js-suggester-field", function(t) {
        var r = t.currentTarget;
        o(r instanceof HTMLInputElement || r instanceof HTMLTextAreaElement, "app/assets/modules/github/behaviors/suggester.js:417");
        var n = e.closest(r, ".js-suggester-container"),
            a = e.query(n, ".js-suggester");
        new Zr({
            input: r,
            suggester: a,
            types: sn,
            disable: vn
        }).setup()
    });
    var gn = function() {
        function t(e) {
            Q(this, t), this.container = e.container, this.selections = e.selections, this.inputWrap = e.inputWrap, this.input = e.input, this.tagTemplate = e.tagTemplate, o(this.input.form, "app/assets/modules/github/behaviors/tag-input.js:62"), this.form = this.input.form, this.autoComplete = e.autoComplete
        }
        return Y(t, [{
            key: "setup",
            value: function() {
                var e = this;
                this.container.addEventListener("click", function(t) {
                    var r = t.target;
                    o(r instanceof HTMLElement, "app/assets/modules/github/behaviors/tag-input.js:71"), r.matches(".js-remove") ? e.removeTag(t) : e.onFocus()
                }), this.input.addEventListener("focus", this.onFocus.bind(this)), this.input.addEventListener("blur", this.onBlur.bind(this)), this.input.addEventListener("keydown", this.onKeyDown.bind(this)), this.form.addEventListener("submit", this.onSubmit.bind(this)), this.autoComplete.addEventListener("change", function() {
                    e.selectTag(e.autoComplete.value)
                })
            }
        }, {
            key: "onFocus",
            value: function() {
                this.inputWrap.classList.add("focus"), this.input !== document.activeElement && this.input.focus()
            }
        }, {
            key: "onBlur",
            value: function() {
                this.inputWrap.classList.remove("focus"), this.autoComplete.open || this.onSubmit()
            }
        }, {
            key: "onSubmit",
            value: function() {
                this.input.value && (this.selectTag(this.input.value), this.autoComplete.open = !1)
            }
        }, {
            key: "onKeyDown",
            value: function(e) {
                switch (x(e)) {
                    case "Backspace":
                        this.onBackspace();
                        break;
                    case "Enter":
                    case "Tab":
                        this.taggifyValueWhenSuggesterHidden(e);
                        break;
                    case ",":
                    case " ":
                        this.taggifyValue(e)
                }
            }
        }, {
            key: "taggifyValueWhenSuggesterHidden",
            value: function(e) {
                !this.autoComplete.open && this.input.value && (e.preventDefault(), this.selectTag(this.input.value))
            }
        }, {
            key: "taggifyValue",
            value: function(e) {
                this.input.value && (e.preventDefault(), this.selectTag(this.input.value), this.autoComplete.open = !1)
            }
        }, {
            key: "selectTag",
            value: function(e) {
                var t = this.normalizeTag(e),
                    n = this.selectedTags();
                t && n.indexOf(t) < 0 && (this.selections.appendChild(this.templateTag(t)), this.input.value = "", r.fire(this.form, "tags:changed"))
            }
        }, {
            key: "removeTag",
            value: function(t) {
                var n = t.target;
                o(n instanceof HTMLElement, "app/assets/modules/github/behaviors/tag-input.js:161"), t.preventDefault(), e.closest(n, ".js-tag-input-tag").remove(), r.fire(this.form, "tags:changed")
            }
        }, {
            key: "templateTag",
            value: function(t) {
                var r = this.tagTemplate.cloneNode(!0);
                return e.query(r, "input", HTMLInputElement).value = t, e.query(r, ".js-placeholder-tag-name").replaceWith(t), r.classList.remove("d-none", "js-template"), r
            }
        }, {
            key: "normalizeTag",
            value: function(e) {
                return e.toLowerCase().trim().replace(/[\s,']+/g, "-")
            }
        }, {
            key: "onBackspace",
            value: function() {
                if (!this.input.value) {
                    var e = this.selections.querySelector("li:last-child .js-remove");
                    e && e.click()
                }
            }
        }, {
            key: "selectedTags",
            value: function() {
                var t = e.querySelectorAll(this.selections, "input", HTMLInputElement);
                return Array.from(t).map(function(e) {
                    return e.value
                }).filter(function(e) {
                    return e.length > 0
                })
            }
        }]), t
    }();
    t.observe(".js-tag-input-container", {
        constructor: HTMLElement,
        initialize: function(t) {
            new gn({
                container: t,
                inputWrap: e.query(t, ".js-tag-input-wrapper"),
                input: e.query(t, 'input[type="text"], input:not([type])', HTMLInputElement),
                selections: e.query(t, ".js-tag-input-selected-tags"),
                tagTemplate: e.query(t, ".js-template"),
                autoComplete: e.query(t, "auto-complete", AutocompleteElement)
            }).setup()
        }
    });
    var hn = function() {
        var t = X(regeneratorRuntime.mark(function t(r) {
            var n, a, s, i, u, c, l, d, m, f, p, v, g;
            return regeneratorRuntime.wrap(function(t) {
                for (;;) switch (t.prev = t.next) {
                    case 0:
                        if (n = r.currentTarget, o(n instanceof HTMLElement, "app/assets/modules/github/behaviors/team-members.js:11"), !(h = n).getAttribute("data-hovercard-url") || !h.closest("[data-team-hovercards-enabled]")) {
                            t.next = 5;
                            break
                        }
                        return n.classList.remove("tooltipped"), t.abrupt("return");
                    case 5:
                        if (a = n.getAttribute("data-url")) {
                            t.next = 8;
                            break
                        }
                        return t.abrupt("return");
                    case 8:
                        for (s = k.fetchJSON(a), i = e.getAttribute(n, "data-id"), u = document.querySelectorAll(".js-team-mention[data-id='" + i + "']"), c = !0, l = !1, d = void 0, t.prev = 14, m = u[Symbol.iterator](); !(c = (f = m.next()).done); c = !0) f.value.removeAttribute("data-url");
                        t.next = 22;
                        break;
                    case 18:
                        t.prev = 18, t.t0 = t.catch(14), l = !0, d = t.t0;
                    case 22:
                        t.prev = 22, t.prev = 23, !c && m.return && m.return();
                    case 25:
                        if (t.prev = 25, !l) {
                            t.next = 28;
                            break
                        }
                        throw d;
                    case 28:
                        return t.finish(25);
                    case 29:
                        return t.finish(22);
                    case 30:
                        return t.prev = 30, t.next = 33, s;
                    case 33:
                        0 === (p = t.sent).total ? p.members.push("This team has no members") : p.total > p.members.length && p.members.push(p.total - p.members.length + " more"), yn(u, bn(p.members)), t.next = 43;
                        break;
                    case 38:
                        t.prev = 38, t.t1 = t.catch(30), v = t.t1.response ? t.t1.response.status : 500, g = e.getAttribute(n, 404 === v ? "data-permission-text" : "data-error-text"), yn(u, g);
                    case 43:
                    case "end":
                        return t.stop()
                }
                var h
            }, t, this, [
                [14, 18, 22, 30],
                [23, , 25, 29],
                [30, 38]
            ])
        }));
        return function(e) {
            return t.apply(this, arguments)
        }
    }();
 
    function yn(e, t) {
        var r = !0,
            n = !1,
            a = void 0;
        try {
            for (var s, o = e[Symbol.iterator](); !(r = (s = o.next()).done); r = !0) {
                var i = s.value;
                i.setAttribute("aria-label", t), i.classList.add("tooltipped", "tooltipped-s", "tooltipped-multiline")
            }
        } catch (e) {
            n = !0, a = e
        } finally {
            try {
                !r && o.return && o.return()
            } finally {
                if (n) throw a
            }
        }
    }
 
    function bn(e) {
        if (0 === e.length) return "";
        if (1 === e.length) return e[0];
        if (2 === e.length) return e.join(" and ");
        var t = e[e.length - 1];
        return e.slice(0, -1).concat("and " + t).join(", ")
    }
 
    function jn(e) {
        return new Promise(function(t) {
            function r() {
                e.hasFocus() && (t(), e.removeEventListener("visibilitychange", r), window.removeEventListener("focus", r), window.removeEventListener("blur", r))
            }
            e.addEventListener("visibilitychange", r), window.addEventListener("focus", r), window.addEventListener("blur", r), r()
        })
    }
    t.observe(".js-team-mention", function(e) {
        e.addEventListener("mouseenter", hn)
    });
    var Ln = function() {
            var e = X(regeneratorRuntime.mark(function e(t, r) {
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                        case 0:
                            if (r.elements.push(t), 1 !== r.elements.length) {
                                e.next = 6;
                                break
                            }
                            return window.addEventListener("scroll", r.scrollHandler, {
                                capture: !0,
                                passive: !0
                            }), e.next = 5, jn(document);
                        case 5:
                            En(r);
                        case 6:
                        case "end":
                            return e.stop()
                    }
                }, e, this)
            }));
            return function(t, r) {
                return e.apply(this, arguments)
            }
        }(),
        wn = 0,
        xn = -1;
 
    function kn(e) {
        var t = e.getBoundingClientRect(),
            r = window.innerHeight,
            n = window.innerWidth;
        if (0 === t.height) return !1;
        if (t.height < r) return t.top >= 0 && t.left >= 0 && t.bottom <= r && t.right <= n;
        var a = Math.ceil(r / 2);
        return t.top >= 0 && t.top + a < r
    }
 
    function En(e) {
        var t = !0,
            r = !1,
            n = void 0;
        try {
            for (var a, s = e.elements[Symbol.iterator](); !(t = (a = s.next()).done); t = !0) {
                var o = a.value;
                kn(o) ? e.in.call(o, o, e) : e.out && e.out.call(o, o, e)
            }
        } catch (e) {
            r = !0, n = e
        } finally {
            try {
                !t && s.return && s.return()
            } finally {
                if (r) throw n
            }
        }
    }
 
    function Tn(e, r) {
        var n = {
            id: wn++,
            selector: e,
            in: r,
            out: null,
            elements: [],
            checkPending: !1,
            scrollHandler: function() {
                ! function(e) {
                    document.hasFocus() && window.scrollY !== xn && (xn = window.scrollY, e.checkPending || (e.checkPending = !0, window.requestAnimationFrame(function() {
                        e.checkPending = !1, En(e)
                    })))
                }(n)
            }
        };
        t.observe(e, {
            add: function(e) {
                Ln(e, n)
            },
            remove: function(e) {
                ! function(e, t) {
                    var r = t.elements.indexOf(e); - 1 !== r && t.elements.splice(r, 1), 0 === t.elements.length && window.removeEventListener("scroll", t.scrollHandler, {
                        capture: !0,
                        passive: !0
                    })
                }(e, n)
            }
        })
    }
    var qn = 0;
 
    function Sn(e) {
        return e.classList.remove("js-unread-item", "unread-item")
    }
    Tn(".js-unread-item", function(e) {
        Sn(e)
    }), t.observe(".js-unread-item", {
        add: function() {
            qn++
        },
        remove: function() {
            0 === --qn && function() {
                if (document.hasFocus()) {
                    var e = document.querySelector(".js-timeline-marker-form");
                    e && e instanceof HTMLFormElement && l.submit(e)
                }
            }()
        }
    }), r.on("socket:message", ".js-discussion", function(e) {
        if (e.currentTarget === e.target) {
            var t = !0,
                r = !1,
                n = void 0;
            try {
                for (var a, s = document.querySelectorAll(".js-unread-item")[Symbol.iterator](); !(t = (a = s.next()).done); t = !0) {
                    Sn(a.value)
                }
            } catch (e) {
                r = !0, n = e
            } finally {
                try {
                    !t && s.return && s.return()
                } finally {
                    if (r) throw n
                }
            }
        }
    });
    var An = 0,
        Mn = /^\(\d+\)\s+/;
 
    function Hn() {
        var e = An ? "(" + An + ") " : "";
        document.title.match(Mn) ? document.title = document.title.replace(Mn, e) : document.title = "" + e + document.title
    }
 
    function In() {
        if (!document.querySelector(":target")) {
            var e = E.decodeFragmentValue(location.hash).toLowerCase(),
                t = E.findElementByFragmentName(document, "user-content-" + e);
            t && t.scrollIntoView()
        }
    }
 
    function Rn(e) {
        o(e.target instanceof Element, "app/assets/modules/github/behaviors/will-transition-once.js:26"), e.target.classList.remove("will-transition-once")
    }
    t.observe(".js-unread-item", {
        add: function() {
            An++, Hn()
        },
        remove: function() {
            An--, Hn()
        }
    }), window.addEventListener("hashchange", In), document.addEventListener("pjax:success", In), X(regeneratorRuntime.mark(function e() {
        return regeneratorRuntime.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
                case 0:
                    return e.next = 2, h.ready;
                case 2:
                    In();
                case 3:
                case "end":
                    return e.stop()
            }
        }, e, this)
    }))(), r.on("click", "a[href]", function(e) {
        var t = e.currentTarget;
        t instanceof HTMLAnchorElement && t.href === location.href && location.hash.length > 1 && setTimeout(function() {
            e.defaultPrevented || In()
        })
    }), t.observe(".will-transition-once", {
        constructor: HTMLElement,
        subscribe: function(e) {
            return y.fromEvent(e, "transitionend", Rn)
        }
    });
    var _n = function() {
            var t = X(regeneratorRuntime.mark(function t(r) {
                var n, a, s, o, i, u, c, l, d, f, p, v, g, h, y, b, j, w, x, E, T, q, S;
                return regeneratorRuntime.wrap(function(t) {
                    for (;;) switch (t.prev = t.next) {
                        case 0:
                            return n = r.getAttribute("data-item-name") || "items", a = parseInt(r.getAttribute("data-item-minimum")) || 0, s = parseInt(r.getAttribute("data-item-count")) || 0, o = Math.max(a, parseInt(r.value) || 0), i = o > 300, (u = document.querySelector(".js-purchase-button")) instanceof HTMLButtonElement && (u.disabled = 0 === o || i), (c = document.querySelector(".js-downgrade-button")) instanceof HTMLButtonElement && (c.disabled = o === s), l = new URL(e.getAttribute(r, "data-url"), window.location.origin), (d = new URLSearchParams(l.search.slice(1))).append(n, o.toString()), document.querySelector(".js-transform-user") && d.append("transform_user", "1"), l.search = d.toString(), t.next = 17, Cn.push(k.fetchJSON(l));
                        case 17:
                            f = t.sent, (p = document.querySelector(".js-contact-us")) && p.classList.toggle("d-none", !i), (v = document.querySelector(".js-payment-summary")) && v.classList.toggle("d-none", i), (g = document.querySelector(".js-billing-section")) && g.classList.toggle("has-removed-contents", f.free), (h = document.querySelector(".js-upgrade-info")) && h.classList.toggle("d-none", o <= 0), (y = document.querySelector(".js-downgrade-info")) && y.classList.toggle("d-none", o >= 0), (b = document.querySelector(".js-extra-seats-line-item")) && b.classList.toggle("d-none", f.no_additional_seats), j = f.selectors, t.t0 = regeneratorRuntime.keys(j);
                        case 32:
                            if ((t.t1 = t.t0()).done) {
                                t.next = 55;
                                break
                            }
                            for (w = t.t1.value, x = !0, E = !1, T = void 0, t.prev = 37, q = document.querySelectorAll(w)[Symbol.iterator](); !(x = (S = q.next()).done); x = !0) S.value.textContent = j[w];
                            t.next = 45;
                            break;
                        case 41:
                            t.prev = 41, t.t2 = t.catch(37), E = !0, T = t.t2;
                        case 45:
                            t.prev = 45, t.prev = 46, !x && q.return && q.return();
                        case 48:
                            if (t.prev = 48, !E) {
                                t.next = 51;
                                break
                            }
                            throw T;
                        case 51:
                            return t.finish(48);
                        case 52:
                            return t.finish(45);
                        case 53:
                            t.next = 32;
                            break;
                        case 55:
                            m.replaceState(L.getState(), "", f.url);
                        case 56:
                        case "end":
                            return t.stop()
                    }
                }, t, this, [
                    [37, 41, 45, 53],
                    [46, , 48, 52]
                ])
            }));
            return function(e) {
                return t.apply(this, arguments)
            }
        }(),
        Cn = new a;
    t.observe(".js-addon-purchase-field", {
        constructor: HTMLInputElement,
        add: function(e) {
            T(e) && _n(e), d.addThrottledInputEventListener(e, function() {
                _n(e)
            })
        }
    }), t.observe(".js-addon-downgrade-field", {
        constructor: HTMLInputElement,
        add: function(e) {
            T(e) && _n(e), e.addEventListener("change", function() {
                _n(e)
            })
        }
    });
    var Fn = function() {
        var t = X(regeneratorRuntime.mark(function t(n, a, o) {
            var i, u, c;
            return regeneratorRuntime.wrap(function(t) {
                for (;;) switch (t.prev = t.next) {
                    case 0:
                        return i = e.query(document, ".js-repo-health-check", HTMLFormElement), e.query(i, ".js-repo-health-name", HTMLInputElement).value = o, n.classList.remove("d-none"), n.classList.add("is-loading"), a.setCustomValidity("checking"), r.fire(a, "change"), t.next = 9, s.fetchSafeDocumentFragment(document, i.action, {
                            method: "POST",
                            body: new FormData(i)
                        });
                    case 9:
                        u = t.sent, (c = e.query(n, ".js-repo-health-results")).innerHTML = "", c.appendChild(u), n.classList.remove("is-loading"), a.setCustomValidity(""), r.fire(a, "change");
                    case 16:
                    case "end":
                        return t.stop()
                }
            }, t, this)
        }));
        return function(e, r, n) {
            return t.apply(this, arguments)
        }
    }();
    t.observe(".js-repo-health", function(t) {
        var r = e.closest(t, "form", HTMLFormElement),
            n = e.query(r, ".js-comment-field", HTMLTextAreaElement),
            a = e.query(r, ".js-repo-name", HTMLInputElement);
 
        function s() {
            Fn(t, n, a.value)
        }
        "hidden" === a.type ? n.addEventListener("focus", s) : a.addEventListener("change", s)
    });
    var Pn = null,
        Nn = 300,
        Dn = [".", ".", "."],
        On = 0,
        Bn = new WeakMap;
 
    function Un() {
        var t = e.query(document, ".js-audit-log-export-status");
        return Bn.set(t, t.textContent), Pn = setInterval(function() {
            var e = Dn.slice(0, On).join("");
            t.textContent = "Exporting" + e, On >= 3 ? On = 0 : On += 1
        }, Nn), e.query(document, ".js-audit-log-export-button").classList.add("disabled")
    }
 
    function Vn() {
        e.query(document, ".js-audit-log-export-button").classList.remove("disabled");
        var t = e.query(document, ".js-audit-log-export-status");
        t.textContent = Bn.get(t) || "", null !== Pn && clearInterval(Pn), On = 0
    }
 
    function zn() {
        Vn();
        var e = document.getElementById("ajax-error-message");
        e && e.classList.add("visible")
    }
    c.remoteForm(".js-audit-log-export-form", function() {
        var e = X(regeneratorRuntime.mark(function e(t, r) {
            var n, a;
            return regeneratorRuntime.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                    case 0:
                        return Un(), n = void 0, e.prev = 2, e.next = 5, r.json();
                    case 5:
                        n = e.sent, e.next = 12;
                        break;
                    case 8:
                        return e.prev = 8, e.t0 = e.catch(2), zn(), e.abrupt("return");
                    case 12:
                        return a = n.json, e.prev = 13, e.next = 16, s.fetchPoll(a.job_url);
                    case 16:
                        e.next = 22;
                        break;
                    case 18:
                        return e.prev = 18, e.t1 = e.catch(13), zn(), e.abrupt("return");
                    case 22:
                        t = a.export_url, Vn(), window.location = t;
                    case 23:
                    case "end":
                        return e.stop()
                }
                var t
            }, e, this, [
                [2, 8],
                [13, 18]
            ])
        }));
        return function(t, r) {
            return e.apply(this, arguments)
        }
    }()), r.on("combobox-commit", ".audit-search-form .js-suggester", function(t) {
        var r = e.closest(t.currentTarget, "form", HTMLFormElement);
        l.submit(r)
    });
    var Wn = null,
        $n = new a;
 
    function Kn(t) {
        var r = t.form;
        o(r, "app/assets/modules/github/branches.js:43");
        var n = e.closest(r, ".js-branches"),
            a = n.querySelectorAll(".js-branches-subnav .js-subnav-item"),
            i = n.querySelector(".js-branches-subnav .js-subnav-item.selected"),
            u = e.query(n, ".js-branches-subnav .js-branches-all"),
            c = r.getAttribute("data-results-container");
        Wn || (Wn = i);
        var l = t.value.trim().length > 0,
            d = function(t) {
                var r = t.form;
                if (o(r, "app/assets/modules/github/branches.js:24"), t.value.trim()) {
                    var n = new URL(r.action, window.location.origin),
                        a = new URLSearchParams(n.search.slice(1)),
                        s = r.elements.namedItem("utf8");
                    return s instanceof HTMLInputElement && a.append("utf8", s.value), a.append("query", t.value), n.search = a.toString(), n.toString()
                }
                return e.getAttribute(r, "data-reset-url")
            }(t);
 
        function f() {
            n.classList.remove("is-loading")
        }
        $n.push(s.fetchSafeDocumentFragment(document, d)).then(function(e) {
            m.replaceState(null, "", d);
            var t = c ? document.getElementById(c) : null;
            t && (t.innerHTML = "", t.appendChild(e))
        }).then(f, f), n.classList.toggle("is-search-mode", l), n.classList.add("is-loading");
        var p = !0,
            v = !1,
            g = void 0;
        try {
            for (var h, y = a[Symbol.iterator](); !(p = (h = y.next()).done); p = !0) {
                h.value.classList.remove("selected")
            }
        } catch (e) {
            v = !0, g = e
        } finally {
            try {
                !p && y.return && y.return()
            } finally {
                if (v) throw g
            }
        }
        l ? u.classList.add("selected") : Wn && (Wn.classList.add("selected"), Wn = null)
    }
 
    function Jn(t) {
        var r = e.closest(t, ".js-branch-row").getAttribute("data-branch-name"),
            n = e.closest(t, ".js-branches").querySelectorAll(".js-branch-row");
        return Array.from(n).filter(function(e) {
            return e.getAttribute("data-branch-name") === r
        })
    }
    t.observe(".js-branch-search-field", {
        constructor: HTMLInputElement,
        initialize: function(e) {
            d.addThrottledInputEventListener(e, Kn)
        },
        subscribe: function(e) {
            return y.fromEvent(e, "keyup", function(t) {
                var r, n;
                o(t instanceof KeyboardEvent, "app/assets/modules/github/branches.js:104"), "Escape" === x(t) && (n = (r = e).value.trim(), r.value = "", n && Kn(r), e.blur())
            })
        }
    }), r.on("submit", ".js-branch-search", function(e) {
        return e.preventDefault()
    }), r.on("click", ".js-clear-branch-search", function(t) {
        var n = t.currentTarget;
        o(n instanceof HTMLButtonElement, "app/assets/modules/github/branches.js:119"), o(n.form, "app/assets/modules/github/branches.js:120");
        var a = e.query(n.form, ".js-branch-search-field", HTMLInputElement);
        a.focus(), a.value = "", r.fire(a, "input")
    }), c.remoteForm(".js-branch-destroy, .js-branch-restore", function() {
        var t = X(regeneratorRuntime.mark(function t(r, n) {
            var a, s, o, i, u, c, l, d, m, f, p, v, g, h, y, b, j, L, w, x, k, E;
            return regeneratorRuntime.wrap(function(t) {
                for (;;) switch (t.prev = t.next) {
                    case 0:
                        for (e.query(r, "button[type=submit]").blur(), a = Jn(r), s = !0, o = !1, i = void 0, t.prev = 6, u = a[Symbol.iterator](); !(s = (c = u.next()).done); s = !0) l = c.value, d = l.querySelector(".js-branch-delete-target"), (m = l.querySelector(".js-loading-spinner")) && (m.hidden = !1), d && (d.hidden = !0);
                        t.next = 14;
                        break;
                    case 10:
                        t.prev = 10, t.t0 = t.catch(6), o = !0, i = t.t0;
                    case 14:
                        t.prev = 14, t.prev = 15, !s && u.return && u.return();
                    case 17:
                        if (t.prev = 17, !o) {
                            t.next = 20;
                            break
                        }
                        throw i;
                    case 20:
                        return t.finish(17);
                    case 21:
                        return t.finish(14);
                    case 22:
                        return f = !1, t.prev = 23, t.next = 26, n.text();
                    case 26:
                        t.next = 32;
                        break;
                    case 28:
                        t.prev = 28, t.t1 = t.catch(23), f = !0, location.reload();
                    case 32:
                        for (t.prev = 32, p = !0, v = !1, g = void 0, t.prev = 36, h = a[Symbol.iterator](); !(p = (y = h.next()).done); p = !0) b = y.value, d = b.querySelector(".js-branch-delete-target"), m = b.querySelector(".js-loading-spinner"), d && (d.hidden = !1), m && (m.hidden = !0);
                        t.next = 44;
                        break;
                    case 40:
                        t.prev = 40, t.t2 = t.catch(36), v = !0, g = t.t2;
                    case 44:
                        t.prev = 44, t.prev = 45, !p && h.return && h.return();
                    case 47:
                        if (t.prev = 47, !v) {
                            t.next = 50;
                            break
                        }
                        throw g;
                    case 50:
                        return t.finish(47);
                    case 51:
                        return t.finish(44);
                    case 52:
                        return t.finish(32);
                    case 53:
                        if (f) {
                            t.next = 74;
                            break
                        }
                        for (j = r.classList.contains("js-branch-destroy"), L = !0, w = !1, x = void 0, t.prev = 58, k = a[Symbol.iterator](); !(L = (E = k.next()).done); L = !0) E.value.classList.toggle("Details--on", j);
                        t.next = 66;
                        break;
                    case 62:
                        t.prev = 62, t.t3 = t.catch(58), w = !0, x = t.t3;
                    case 66:
                        t.prev = 66, t.prev = 67, !L && k.return && k.return();
                    case 69:
                        if (t.prev = 69, !w) {
                            t.next = 72;
                            break
                        }
                        throw x;
                    case 72:
                        return t.finish(69);
                    case 73:
                        return t.finish(66);
                    case 74:
                    case "end":
                        return t.stop()
                }
            }, t, this, [
                [6, 10, 14, 22],
                [15, , 17, 21],
                [23, 28, 32, 53],
                [36, 40, 44, 52],
                [45, , 47, 51],
                [58, 62, 66, 74],
                [67, , 69, 73]
            ])
        }));
        return function(e, r) {
            return t.apply(this, arguments)
        }
    }());
    var Gn = function() {
            var t = X(regeneratorRuntime.mark(function t(r) {
                var n, a, o, i, u, c, l, d, m;
                return regeneratorRuntime.wrap(function(t) {
                    for (;;) switch (t.prev = t.next) {
                        case 0:
                            return n = r.target, a = e.query(n, ".js-bulk-actions"), o = Array.from(n.querySelectorAll(".js-bulk-actions-toggle:checked")), i = o.map(function(t) {
                                return e.closest(t, ".js-bulk-actions-item").getAttribute("data-bulk-actions-id") || ""
                            }).sort(), u = n.getAttribute("data-bulk-actions-url") || "", c = n.getAttribute("data-bulk-actions-parameter") || "", l = i.map(function(e) {
                                return c + "[]=" + e
                            }).join("&"), d = u + "?" + l, t.next = 10, Xn.push(s.fetchText(d));
                        case 10:
                            m = t.sent, 0 === o.length ? (a.innerHTML = m, Qn(n)) : (Qn(n), a.innerHTML = m);
                        case 12:
                        case "end":
                            return t.stop()
                    }
                }, t, this)
            }));
            return function(e) {
                return t.apply(this, arguments)
            }
        }(),
        Xn = new a;
 
    function Qn(e) {
        var t = document.querySelector(".js-membership-tabs");
        if (t) {
            var r = e.querySelectorAll(".js-bulk-actions-toggle:checked");
            t.classList.toggle("d-none", r.length > 0)
        }
    }
    r.on("change", ".js-bulk-actions-toggle", function(t) {
        var n = t.currentTarget,
            a = e.closest(n, ".js-bulk-actions-container");
        r.fire(a, "bulk-actions:update")
    }), r.on("bulk-actions:update", ".js-bulk-actions-container", u(Gn, 100));
    var Yn = function() {
        var t = X(regeneratorRuntime.mark(function t() {
            return regeneratorRuntime.wrap(function(t) {
                for (;;) switch (t.prev = t.next) {
                    case 0:
                        return t.next = 2, q.dialog({
                            content: e.query(document, "#disable-saml-confirmation", HTMLTemplateElement).content.cloneNode(!0)
                        });
                    case 2:
                        t.sent.addEventListener("dialog:remove", sa);
                    case 4:
                    case "end":
                        return t.stop()
                }
            }, t, this)
        }));
        return function() {
            return t.apply(this, arguments)
        }
    }();
 
    function Zn() {
        return e.query(document, ".js-business-saml-provider-settings-form", HTMLFormElement)
    }
 
    function ea() {
        return Zn().querySelector(".js-business-saml-form-inputs")
    }
 
    function ta(e) {
        e && e.classList.remove("d-none")
    }
 
    function ra() {
        return "1" === e.query(document, ".js-business-saml-currently-enabled", HTMLInputElement).value && !e.query(document, ".js-business-enable-saml", HTMLInputElement).checked
    }
 
    function na() {
        return e.query(document, ".is-submit-button-value", HTMLInputElement)
    }
 
    function aa() {
        Zn().submit()
    }
 
    function sa() {
        var e = document.querySelector(".js-business-enable-saml");
        e && e instanceof HTMLInputElement && (e.checked = !0, ta(ea()))
    }
 
    function oa() {
        var t = "0" === e.query(document, ".js-business-two-factor-currently-enabled", HTMLInputElement).value;
        return e.query(document, ".js-business-enable-two-factor", HTMLInputElement).checked && t
    }
    if (r.on("change", ".js-select-initial-admins", function(t) {
            if (t.target === t.currentTarget) {
                var r = t.target;
                o(r instanceof AutocompleteElement, "app/assets/modules/github/businesses.js:14");
                var n = e.closest(r, "form");
                r.value && (! function(t, r) {
                    var n = e.query(t, ".js-business-admin-login-list", HTMLInputElement);
                    n.value = n.value + " " + r;
                    var a = e.query(t, ".js-initial-admins", HTMLTableElement),
                        s = e.query(t, ".js-admin-template-row", HTMLTableRowElement).cloneNode(!0);
                    s.setAttribute("data-value", r), e.query(s, ".js-admin-login", HTMLElement).textContent = r, a.appendChild(s), s.classList.remove("d-none"), a.classList.remove("d-none")
                }(n, r.value), r.value = "")
            }
        }), r.on("click", ".js-deselect-admin", function(t) {
            var r = t.target;
            ! function(t, r) {
                var n = e.closest(r, "tr"),
                    a = n.getAttribute("data-value"),
                    s = e.query(t, ".js-business-admin-login-list", HTMLInputElement);
                null != a && (s.value = s.value.replace(a, ""));
                n.remove()
            }(e.closest(r, "form"), r)
        }), r.on("click", ".js-preview-sign-in-message", function(t) {
            var r = e.query(document, "#custom_messages_sign_in_message", HTMLTextAreaElement).value;
            e.query(document, "#sign_in_message", HTMLInputElement).value = r;
            var n = t.currentTarget;
            o(n instanceof HTMLButtonElement, "app/assets/modules/github/businesses.js:67"), o(n.form, "app/assets/modules/github/businesses.js:68"), n.form.submit()
        }), r.on("click", ".js-preview-sign-out-message", function(t) {
            var r = e.query(document, "#custom_messages_sign_out_message", HTMLTextAreaElement).value;
            e.query(document, "#sign_out_message", HTMLInputElement).value = r;
            var n = t.currentTarget;
            o(n instanceof HTMLButtonElement, "app/assets/modules/github/businesses.js:77"), o(n.form, "app/assets/modules/github/businesses.js:78"), n.form.submit()
        }), r.on("click", ".js-preview-auth-provider-name", function(t) {
            var r = e.query(document, "#custom_messages_auth_provider_name", HTMLInputElement).value;
            e.query(document, "#auth_provider_name", HTMLInputElement).value = r;
            var n = t.currentTarget;
            o(n instanceof HTMLButtonElement, "app/assets/modules/github/businesses.js:87"), o(n.form, "app/assets/modules/github/businesses.js:88"), l.submit(n.form)
        }), r.on("click", ".js-preview-suspended-message", function(t) {
            var r = e.query(document, "#custom_messages_suspended_message", HTMLTextAreaElement).value;
            e.query(document, "#suspended_message", HTMLInputElement).value = r;
            var n = t.currentTarget;
            o(n instanceof HTMLButtonElement && n.form, "app/assets/modules/github/businesses.js:97"), n.form.submit()
        }), r.on("click", ".js-admin-settings-policy-input", function(e) {
            var t = e.currentTarget;
            o(t instanceof HTMLInputElement, "app/assets/modules/github/businesses.js:102"), o(t.form instanceof HTMLFormElement, "app/assets/modules/github/businesses.js:103"), l.submit(t.form)
        }), r.on("click", ".js-admin-settings-select", function(t) {
            var r = t.currentTarget,
                n = e.query(r, ".js-value"),
                a = e.closest(r, "form", HTMLFormElement);
            e.query(a, ".js-item-value", HTMLInputElement).value = n.textContent, l.submit(a)
        }), r.on("click", ".js-business-enable-saml", function(e) {
            var t;
            o(e.currentTarget instanceof HTMLInputElement, "app/assets/modules/github/businesses.js:181"), e.currentTarget.checked ? ta(ea()) : (t = ea()) && t.classList.add("d-none")
        }), r.on("click", ".js-business-saml-submit", function(e) {
            e.preventDefault(), o(e.currentTarget instanceof HTMLButtonElement, "app/assets/modules/github/businesses.js:198"), S.persistSubmitButtonValue(e.currentTarget), l.submit(Zn())
        }), r.on("submit", ".js-business-saml-provider-settings-form", function(e) {
            e.preventDefault(), "test_settings" === na().name ? aa() : "save_settings" === na().name && (ra() ? Yn() : aa())
        }), r.on("click", ".js-business-two-factor-submit-button", function(e) {
            oa() || e.preventDefault()
        }), top !== window) {
        alert("For security reasons, framing is not allowed.");
        try {
            top.location.replace(document.location)
        } catch (e) {}
    }
    var ia = /\bChrome\//.test(navigator.userAgent) && !/\bEdge\//.test(navigator.userAgent),
        ua = /Macintosh.*Safari/.test(navigator.userAgent),
        ca = void 0,
        la = !1;
 
    function da() {
        ca = document.activeElement, document.body && (ia || ua) && document.body.classList.toggle("intent-mouse", la)
    }
 
    function ma(e) {
        return e.hasAttribute("data-maxlength") ? parseInt(e.getAttribute("data-maxlength")) : e.maxLength
    }
 
    function fa(t) {
        var r = ma(t);
        ! function(t, r, n) {
            var a = n.closest(".js-characters-remaining-container");
            if (a) {
                var s = e.query(a, ".js-characters-remaining"),
                    o = String(s.getAttribute("data-suffix")),
                    i = r - A.getUtf8StringLength(t);
                i <= 20 ? (s.textContent = i + " " + o, s.classList.toggle("text-red", i <= 5), s.hidden = !1) : s.hidden = !0
            }
        }(t.value, r, t)
    }
 
    function pa(t) {
        var r = t.querySelectorAll(".js-characters-remaining-container"),
            n = !0,
            a = !1,
            s = void 0;
        try {
            for (var o, i = r[Symbol.iterator](); !(n = (o = i.next()).done); n = !0) {
                var u = o.value;
                fa(e.query(u, ".js-characters-remaining-field", HTMLInputElement))
            }
        } catch (e) {
            a = !0, s = e
        } finally {
            try {
                !n && i.return && i.return()
            } finally {
                if (a) throw s
            }
        }
    }
    document.addEventListener("mousedown", function() {
        la = !0, ca === document.activeElement && da()
    }, {
        capture: !0
    }), document.addEventListener("keydown", function() {
        la = !1
    }, {
        capture: !0
    }), document.addEventListener("focusin", da, {
        capture: !0
    }), r.on("click", ".js-new-user-contrib-example", function() {
        var t = X(regeneratorRuntime.mark(function t(r) {
            var n, a, i, u, c;
            return regeneratorRuntime.wrap(function(t) {
                for (;;) switch (t.prev = t.next) {
                    case 0:
                        if (!(n = e.query(document, ".js-calendar-graph")).classList.contains("sample-graph")) {
                            t.next = 3;
                            break
                        }
                        return t.abrupt("return");
                    case 3:
                        return n.classList.add("sample-graph"), a = e.getAttribute(r.currentTarget, "data-url"), i = void 0, t.prev = 6, t.next = 9, s.fetchText(a);
                    case 9:
                        i = t.sent, t.next = 16;
                        break;
                    case 12:
                        return t.prev = 12, t.t0 = t.catch(6), n.classList.remove("sample-graph"), t.abrupt("return");
                    case 16:
                        (u = document.createElement("div")).innerHTML = i, c = n.querySelector(".js-calendar-graph-svg"), o(c, "app/assets/modules/github/calendar-sample.js:32"), c.replaceWith(u.children[0]);
                    case 21:
                    case "end":
                        return t.stop()
                }
            }, t, this, [
                [6, 12]
            ])
        }));
        return function(e) {
            return t.apply(this, arguments)
        }
    }()), n.onInput(".js-characters-remaining-field", function(e) {
        var t = e.target;
        o(t instanceof HTMLInputElement, "app/assets/modules/github/characters-remaining.js:61"), fa(t)
    }), t.observe(".js-characters-remaining-field", {
        constructor: HTMLInputElement,
        initialize: fa
    });
    var va = {}.hasOwnProperty,
        ga = [].slice;
 
    function ha(e) {
        if (console && console.warn) return console.warn(e)
    }
    var ya = {
        host: "collector.githubapp.com",
        type: "page_view",
        dimensions: {},
        measures: {},
        context: {},
        actor: {},
        image: new Image,
        performance: {},
        expectedPerformanceTimingKeys: ["connectEnd", "connectStart", "domComplete", "domContentLoadedEventEnd", "domContentLoadedEventStart", "domInteractive", "domLoading", "domainLookupEnd", "domainLookupStart", "fetchStart", "loadEventEnd", "loadEventStart", "navigationStart", "redirectEnd", "redirectStart", "requestStart", "responseEnd", "responseStart", "secureConnectionStart", "unloadEventEnd", "unloadEventStart"],
        recordPageView: function() {
            return this.applyMetaTags(), null != this.app && (null == this.host ? (ha("Host not set, you are doing something wrong"), !1) : (this.image.src = this._src(), this._clearPerformance(), !0))
        },
        setHost: function(e) {
            this.host = e
        },
        setApp: function(e) {
            this.app = e
        },
        setDimensions: function(e) {
            this.dimensions = e
        },
        addDimensions: function(e) {
            var t = void 0;
            null == this.dimensions && (this.dimensions = {});
            var r = [];
            for (t in e)
                if (va.call(e, t)) {
                    var n = e[t];
                    r.push(this.dimensions[t] = n)
                }
            return r
        },
        setMeasures: function(e) {
            this.measures = e
        },
        addMeasures: function(e) {
            var t = void 0;
            null == this.measures && (this.measures = {});
            var r = [];
            for (t in e)
                if (va.call(e, t)) {
                    var n = e[t];
                    r.push(this.measures[t] = n)
                }
            return r
        },
        setContext: function(e) {
            this.context = e
        },
        addContext: function(e) {
            var t = void 0;
            null == this.context && (this.context = {});
            var r = [];
            for (t in e)
                if (va.call(e, t)) {
                    var n = e[t];
                    r.push(this.context[t] = n)
                }
            return r
        },
        setActor: function(e) {
            this.actor = e
        },
        push: function(e) {
            return this.applyCall(e)
        },
        enablePerformance: function() {
            this.performance = this._performanceTiming()
        },
        _recordSrc: function(e, t, r, n) {
            return "//" + this.host + "/" + this.app + "/" + e + "?" + this._queryString(t, r, n)
        },
        _src: function() {
            return "//" + this.host + "/" + this.app + "/" + this.type + "?" + this._queryString()
        },
        _queryString: function(e, t, r) {
            var n = void 0,
                a = void 0,
                s = function() {
                    var e = this._params(),
                        t = [];
                    for (n in e) a = e[n], t.push("dimensions[" + n + "]=" + a);
                    return t
                }.call(this);
            return s.push(this._encodeObject("dimensions", this._merge(this.dimensions, e))), s.push(this._encodeObject("measures", this._merge(this.measures, t))), null != this.performance && s.push(this._encodeObject("measures", {
                performance_timing: this.performance
            })), s.push(this._encodeObject("context", this._merge(this.context, r))), s.push(this._actor()), s.push(this._encodeObject("dimensions", {
                cid: this._clientId()
            })), s.join("&")
        },
        _clearPerformance: function() {
            this.performance = null
        },
        _performanceTiming: function() {
            var e, t = void 0,
                r = void 0;
            if (null == window.performance || null == window.performance.timing || null == window.performance.timing.navigationStart) return null;
            var n = {},
                a = this.expectedPerformanceTimingKeys;
            for (t = 0, e = a.length; t < e; t++) {
                var s = a[t];
                n[s] = null != (r = window.performance.timing[s]) ? r : 0
            }
            var o = [],
                i = n.navigationStart;
            for (var u in n) {
                var c = n[u],
                    l = 0 === c ? null : c - i;
                o.push(l)
            }
            return "1-" + o.join("-")
        },
        _params: function() {
            return {
                page: this._encode(this._page()),
                title: this._encode(this._title()),
                referrer: this._encode(this._referrer()),
                user_agent: this._encode(this._agent()),
                screen_resolution: this._encode(this._screenResolution()),
                pixel_ratio: this._encode(this._pixelRatio()),
                browser_resolution: this._encode(this._browserResolution()),
                tz_seconds: this._encode(this._tzSeconds()),
                timestamp: (new Date).getTime()
            }
        },
        _page: function() {
            try {
                var e = document.querySelector("meta[name=octolytics-location]");
                return e instanceof HTMLMetaElement ? document.location.origin + e.content : document.location.href
            } catch (e) {}
        },
        _title: function() {
            try {
                return document.title
            } catch (e) {}
        },
        _referrer: function() {
            var e = void 0;
            e = "";
            try {
                e = window.top.document.referrer
            } catch (t) {
                if (window.parent) try {
                    e = window.parent.document.referrer
                } catch (e) {}
            }
            return "" === e && (e = document.referrer), e
        },
        _agent: function() {
            try {
                return navigator.userAgent
            } catch (e) {}
        },
        _screenResolution: function() {
            try {
                return screen.width + "x" + screen.height
            } catch (e) {
                return "unknown"
            }
        },
        _pixelRatio: function() {
            return window.devicePixelRatio
        },
        _browserResolution: function() {
            var e = void 0,
                t = void 0;
            try {
                return t = 0, e = 0, "number" == typeof window.innerWidth ? (t = window.innerWidth, e = window.innerHeight) : null != document.documentElement && null != document.documentElement.clientWidth ? (t = document.documentElement.clientWidth, e = document.documentElement.clientHeight) : null != document.body && null != document.body.clientWidth && (t = document.body.clientWidth, e = document.body.clientHeight), t + "x" + e
            } catch (e) {
                return "unknown"
            }
        },
        _tzSeconds: function() {
            try {
                return -60 * (new Date).getTimezoneOffset()
            } catch (e) {
                return ""
            }
        },
        _merge: function() {
            for (var e, t = void 0, r = void 0, n = arguments.length, a = Array(n), s = 0; s < n; s++) a[s] = arguments[s];
            var o = 1 <= a.length ? ga.call(a, 0) : [],
                i = {};
            for (t = 0, e = o.length; t < e; t++) {
                var u = o[t];
                for (r in u) {
                    var c = u[r];
                    i[r] = c
                }
            }
            return i
        },
        _encodeObject: function(e, t) {
            var r = void 0,
                n = void 0,
                a = void 0,
                s = [];
            if (null != Array.isArray && Array.isArray(t) || "[object Array]" === Object.prototype.toString.call(t))
                for (r = 0, n = t.length; r < n; r++) {
                    var o = t[r];
                    s.push(this._encodeObject(e + "[]", o))
                } else if (t === Object(t))
                    for (a in t) s.push(this._encodeObject(e + "[" + a + "]", t[a]));
                else s.push(e + "=" + this._encode(t));
            return s.join("&")
        },
        _actor: function() {
            var e = void 0,
                t = void 0,
                r = void 0,
                n = [],
                a = this.actor;
            for (t in a) {
                var s = a[t],
                    o = "dimensions[actor_" + t + "]";
                if (s.join)
                    for (e = 0, r = s.length; e < r; e++) {
                        var i = s[e];
                        n.push(o + "[]=" + this._encode(i))
                    } else n.push(o + "=" + this._encode(s))
            }
            return n.join("&")
        },
        _getCookie: function(e) {
            var t, r = void 0,
                n = [],
                a = document.cookie.split(";");
            for (r = 0, t = a.length; r < t; r++) {
                var s = a[r].trim().split("=");
                if (!(s.length < 2)) {
                    var o = s[0],
                        i = s[1];
                    o === e && n.push({
                        key: o,
                        value: i
                    })
                }
            }
            return n
        },
        _clientId: function() {
            var e = void 0;
            return "" === (e = this._getClientId()) && (e = this._setClientId()), e
        },
        _getClientId: function() {
            var e, t = void 0,
                r = void 0,
                n = this._getCookie("_octo"),
                a = [];
            for (r = 0, e = n.length; r < e; r++) {
                var s = n[r].value.split(".");
                if ("GH1" === s.shift() && s.length > 1) {
                    var o = s.shift().split("-");
                    1 === o.length && (o[1] = "1"), o[0] *= 1, o[1] *= 1, t = s.join("."), a.push([o, t])
                }
            }
            return t = "", a.length > 0 && (t = a.sort().reverse()[0][1]), t
        },
        _setClientId: function() {
            var e = (new Date).getTime(),
                t = Math.round(Math.random() * (Math.pow(2, 31) - 1)) + "." + Math.round(e / 1e3),
                r = "GH1.1." + t,
                n = new Date(e + 63072e6).toUTCString(),
                a = document.domain;
            if (null == a) throw new Error("Unable to get document domain");
            var s = "." + a.split(".").reverse().slice(0, 2).reverse().join(".");
            return document.cookie = "_octo=" + r + "; expires=" + n + "; path=/; domain=" + s, t
        },
        _encode: function(e) {
            return null != e ? window.encodeURIComponent(e) : ""
        },
        applyQueuedCalls: function(e) {
            var t, r = void 0,
                n = [];
            for (r = 0, t = e.length; r < t; r++) {
                var a = e[r];
                n.push(this.applyCall(a))
            }
            return n
        },
        applyCall: function(e) {
            var t = e[0],
                r = e.slice(1);
            return this[t] ? this[t].apply(this, ae(r)) : ha(t + " is not a valid method")
        },
        applyMetaTags: function() {
            var e = this.loadMetaTags();
            return e.host && this.setHost(e.host), e.app && this.setApp(e.app), this._objectIsEmpty(e.actor) || this.setActor(e.actor), this.addDimensions(e.dimensions), this.addMeasures(e.measures), this.addContext(e.context)
        },
        loadMetaTags: function() {
            var e, t = void 0,
                r = {
                    dimensions: {},
                    measures: {},
                    context: {},
                    actor: {}
                },
                n = document.getElementsByTagName("meta");
            for (t = 0, e = n.length; t < e; t++) {
                var a = n[t];
                if (a.name && a.content) {
                    var s = a.name.match(this.octolyticsMetaTagName);
                    if (s) switch (s[1]) {
                        case "host":
                            r.host = a.content;
                            break;
                        case "app-id":
                        case "app":
                            r.app = a.content;
                            break;
                        case "dimension":
                            this._addField(r.dimensions, s[2], a);
                            break;
                        case "measure":
                            this._addField(r.measures, s[2], a);
                            break;
                        case "context":
                            this._addField(r.context, s[2], a);
                            break;
                        case "actor":
                            this._addField(r.actor, s[2], a)
                    }
                }
            }
            return r
        },
        _addField: function(e, t, r) {
            r.attributes["data-array"] ? (null == e[t] && (e[t] = []), e[t].push(r.content)) : e[t] = r.content
        },
        _objectIsEmpty: function(e) {
            var t = void 0;
            for (t in e)
                if (va.call(e, t)) return !1;
            return !0
        },
        octolyticsMetaTagName: /^octolytics-(host|app-id|app|dimension|measure|context|actor)-?(.*)/
    };
    if (window._octo) {
        if (window._octo.slice) {
            var ba = window._octo.slice(0);
            window._octo = ya, window._octo.applyQueuedCalls(ba)
        }
    } else window._octo = ya;
 
    function ja(t) {
        var r = e.getAttribute(t, "data-fieldname");
        return document.querySelectorAll('span[data-fieldname="' + r + '"]')
    }
 
    function La(e, t) {
        if (e.value) {
            var r = !0,
                n = !1,
                a = void 0;
            try {
                for (var s, o = t[Symbol.iterator](); !(r = (s = o.next()).done); r = !0) {
                    s.value.textContent = e.value
                }
            } catch (e) {
                n = !0, a = e
            } finally {
                try {
                    !r && o.return && o.return()
                } finally {
                    if (n) throw a
                }
            }
        }
    }
 
    function wa(e, t) {
        return e.length < t.length ? -1 : e.length > t.length ? 1 : e.localeCompare(t)
    }
 
    function xa(e, t) {
        var r = e.getBoundingClientRect();
        return (t.getBoundingClientRect().width - r.width) / 2
    }
 
    function ka(e, t) {
        var r = e.querySelector("svg");
        if (r) {
            var n = r.querySelector(".js-highlight-blob"),
                a = Math.floor(e.clientWidth),
                s = Math.max(a, 250),
                i = s,
                u = r.querySelector(".js-highlight-label-top"),
                c = r.querySelector(".js-highlight-label-bottom"),
                l = r.querySelector(".js-highlight-label-right"),
                d = r.querySelector(".js-highlight-label-left"),
                m = r.querySelector(".js-highlight-percent-top"),
                f = r.querySelector(".js-highlight-percent-bottom"),
                p = r.querySelector(".js-highlight-percent-right"),
                v = r.querySelector(".js-highlight-percent-left"),
                g = r.querySelector(".js-highlight-x-axis"),
                h = r.querySelector(".js-highlight-y-axis"),
                y = r.querySelector(".js-highlight-top-ellipse"),
                b = r.querySelector(".js-highlight-right-ellipse"),
                j = r.querySelector(".js-highlight-bottom-ellipse"),
                L = r.querySelector(".js-highlight-left-ellipse"),
                w = e.querySelector(".js-activity-overview-graph-spinner"),
                x = r.querySelector("g");
            o(x, "app/assets/modules/github/contributions-spider-graph.js:71"), o(n, "app/assets/modules/github/contributions-spider-graph.js:72"), o(u, "app/assets/modules/github/contributions-spider-graph.js:73"), o(c, "app/assets/modules/github/contributions-spider-graph.js:74"), o(l, "app/assets/modules/github/contributions-spider-graph.js:75"), o(d, "app/assets/modules/github/contributions-spider-graph.js:76"), o(m, "app/assets/modules/github/contributions-spider-graph.js:77"), o(f, "app/assets/modules/github/contributions-spider-graph.js:78"), o(p, "app/assets/modules/github/contributions-spider-graph.js:79"), o(v, "app/assets/modules/github/contributions-spider-graph.js:80"), o(g, "app/assets/modules/github/contributions-spider-graph.js:81"), o(h, "app/assets/modules/github/contributions-spider-graph.js:82"), o(y, "app/assets/modules/github/contributions-spider-graph.js:83"), o(b, "app/assets/modules/github/contributions-spider-graph.js:84"), o(j, "app/assets/modules/github/contributions-spider-graph.js:85"), o(L, "app/assets/modules/github/contributions-spider-graph.js:86"), o(w, "app/assets/modules/github/contributions-spider-graph.js:87"), x.removeAttribute("transform"), r.classList.remove("d-none"), r.classList.add("d-block"), w.classList.remove("d-block"), w.classList.add("d-none"), u.innerHTML = "", l.innerHTML = "", c.innerHTML = "", d.innerHTML = "", m.innerHTML = "&nbsp;", p.innerHTML = "&nbsp;", f.innerHTML = "&nbsp;", v.innerHTML = "&nbsp;";
            var k = Object.keys(t.percentages).sort(wa),
                E = k.slice(0, 2).sort(),
                T = re(E, 2),
                q = T[0],
                S = T[1],
                A = k.slice(2, 4).sort(),
                M = re(A, 2),
                H = M[0],
                I = M[1],
                R = t.percentages[H],
                _ = t.percentages[S],
                C = t.percentages[I],
                F = t.percentages[q],
                P = null,
                N = function(e, r) {
                    var n = t.percentages[e];
                    if (n > 0) return P = r, n + "%"
                },
                D = N(H, m);
            D && (m.textContent = D);
            var O = N(S, p);
            O && (p.textContent = O);
            var B = N(I, f);
            B && (f.textContent = B);
            var U = N(q, v);
            U && (v.textContent = U);
            var V = s / 2,
                z = s / 2;
            u.appendChild(document.createTextNode(H)), u.setAttribute("dx", V.toString()), c.appendChild(document.createTextNode(I)), c.setAttribute("dx", z.toString()), m.setAttribute("dx", V.toString()), f.setAttribute("dx", z.toString());
            var W = u.getBoundingClientRect().height,
                $ = 0;
            P && ($ = P.getBoundingClientRect().height);
            var K = i / 2 + W / 4,
                J = i / 2 + W / 4;
            F > 0 && (K = K + $ / 2 + 2.5), _ > 0 && (J = J + $ / 2 + 2.5), d.appendChild(document.createTextNode(q)), d.setAttribute("dy", K.toString()), l.appendChild(document.createTextNode(S)), l.setAttribute("dy", J.toString());
            var G = K - W,
                X = J - W;
            v.setAttribute("dy", G.toString()), p.setAttribute("dy", X.toString());
            var Q = R / 100,
                Y = C / 100,
                Z = F / 100,
                ee = _ / 100,
                te = Math.max(Q, Y, Z, ee),
                ne = function(e) {
                    return 1 * e / te + 0
                };
            Q = ne(Q), Y = ne(Y), Z = ne(Z), ee = ne(ee);
            var ae = function(e) {
                    var t = 0,
                        r = !0,
                        n = !1,
                        a = void 0;
                    try {
                        for (var s, o = e[Symbol.iterator](); !(r = (s = o.next()).done); r = !0) {
                            var i = s.value.getBoundingClientRect();
                            i.width > t && (t = i.width)
                        }
                    } catch (e) {
                        n = !0, a = e
                    } finally {
                        try {
                            !r && o.return && o.return()
                        } finally {
                            if (n) throw a
                        }
                    }
                    return t
                }([d, l, u, c]) + 10,
                se = Math.max(ae, W),
                oe = s / 2,
                ie = i / 2,
                ue = oe,
                ce = se,
                le = oe,
                de = i - se,
                me = se,
                fe = ie,
                pe = s - se,
                ve = ie,
                ge = oe - me,
                he = ie - ce,
                ye = ce + (1 - Q) * he,
                be = Math.max(de - (1 - Y) * he, ie),
                je = me + (1 - Z) * ge,
                Le = pe - (1 - ee) * ge;
            g.setAttribute("x1", me.toString()), g.setAttribute("y1", ie.toString()), g.setAttribute("x2", pe.toString()), g.setAttribute("y2", ie.toString()), h.setAttribute("x1", oe.toString()), h.setAttribute("y1", ce.toString()), h.setAttribute("x2", oe.toString()), h.setAttribute("y2", de.toString()), ye + 4 < ie && (ye += 4), be - 4 > ie && (be -= 4), je + 4 < oe && (je += 4), Le - 4 > oe && (Le -= 4);
            var we = ce - 10,
                xe = pe + 10,
                ke = de + 10 + 8;
            C > 0 && (ke += $);
            var Ee = me - 12;
            u.setAttribute("dy", we.toString()), l.setAttribute("dx", xe.toString()), c.setAttribute("dy", ke.toString()), d.setAttribute("dx", Ee.toString());
            var Te = Ee - xa(v, d),
                qe = xe + xa(p, l);
            v.setAttribute("dx", Te.toString()), p.setAttribute("dx", qe.toString());
            var Se = we - W,
                Ae = ke - W;
            m.setAttribute("dy", Se.toString()), f.setAttribute("dy", Ae.toString());
            0 === R ? y.classList.add("d-none") : (y.setAttribute("cx", ue.toString()), y.setAttribute("cy", (ye - 2).toString())), 0 === _ ? b.classList.add("d-none") : (b.setAttribute("cx", (Le + 2).toString()), b.setAttribute("cy", ve.toString())), 0 === C ? j.classList.add("d-none") : (j.setAttribute("cx", le.toString()), j.setAttribute("cy", (be + 2).toString())), 0 === F ? L.classList.add("d-none") : (L.setAttribute("cx", (je - 2).toString()), L.setAttribute("cy", fe.toString()));
            var Me = x.getBoundingClientRect(),
                He = r.getBoundingClientRect(),
                Ie = 0 - (Me.top - He.top),
                Re = 0 - (Me.left - He.left);
            x.setAttribute("transform", "translate(" + Re + ", " + Ie + ")");
            var _e = Math.ceil(Me.width),
                Ce = Math.ceil(Me.height);
            r.setAttribute("width", _e.toString()), r.setAttribute("height", Ce.toString());
            var Fe = "M" + ue + "," + ye + " " + [
                [Le, ve],
                [le, be],
                [je, fe]
            ].map(function(e) {
                return "L" + e[0] + "," + e[1]
            }).join(" ") + " z";
            R + _ + C + F !== 0 && n.setAttribute("d", Fe)
        }
    }
 
    function Ea(e) {
        Re({
            hydroEventPayload: e.getAttribute("data-hydro-view"),
            hydroEventHmac: e.getAttribute("data-hydro-view-hmac")
        })
    }
 
    function Ta(t) {
        var r = t.map(function(e) {
                return e.priority
            }),
            n = Math.min.apply(Math, ae(r)),
            a = t.find(function(e) {
                return e.priority === n
            });
        a && e.query(a.el, ".js-loader").classList.remove("d-none")
    }
    document.addEventListener("keydown", function(e) {
        if ("Escape" === e.key && e.target === document.body) {
            var t = document.querySelector('.js-targetable-comment[aria-selected="true"]');
            t && (t.setAttribute("aria-selected", "false"), window.history.replaceState(null, null, window.location.pathname + window.location.search))
        }
    }), document.addEventListener("click", function(e) {
        var t = document.querySelector('.js-targetable-comment[aria-selected="true"]');
        if (t && e.target instanceof HTMLElement) {
            var r = e.target.closest(".js-targetable-comment");
            r && r === t || (t.setAttribute("aria-selected", "false"), window.history.replaceState(null, null, window.location.pathname + window.location.search))
        }
    }), r.on("click", ".js-timestamp", function(t) {
        t.preventDefault();
        var r = t.currentTarget;
        o(r instanceof HTMLAnchorElement, "app/assets/modules/github/comment-keyboard-navigation.js:38"), window.history.replaceState(null, null, r.hash);
        var n = !0,
            a = !1,
            s = void 0;
        try {
            for (var i, u = document.querySelectorAll('.js-targetable-comment[aria-selected="true"]')[Symbol.iterator](); !(n = (i = u.next()).done); n = !0) {
                i.value.setAttribute("aria-selected", "false")
            }
        } catch (e) {
            a = !0, s = e
        } finally {
            try {
                !n && u.return && u.return()
            } finally {
                if (a) throw s
            }
        }
        e.closest(t.currentTarget, ".js-targetable-comment").setAttribute("aria-selected", "true"), r.scrollIntoView(!0), r.blur()
    }), t.observe(".targetable-comment-container-nojs", function(e) {
        e.classList.remove("targetable-comment-container-nojs")
    }), t.observe(".js-discussion", function(e) {
        var t = document.querySelector(".js-targetable-comment:target");
        t && (o(e instanceof HTMLElement, "app/assets/modules/github/comment-keyboard-navigation.js:62"), t.setAttribute("aria-selected", "true"), t.scrollIntoView(!0))
    }), n.onFocus(".js-template-form-input", function(e) {
        o(e instanceof HTMLInputElement, "app/assets/modules/github/community.js:28");
        var t = ja(e);
 
        function r() {
            La(e, t)
        }
 
        function n(e) {
            var r = !0,
                n = !1,
                a = void 0;
            try {
                for (var s, o = t[Symbol.iterator](); !(r = (s = o.next()).done); r = !0) {
                    s.value.classList.toggle("CommunityTemplate-highlight--focus", e)
                }
            } catch (e) {
                n = !0, a = e
            } finally {
                try {
                    !r && o.return && o.return()
                } finally {
                    if (n) throw a
                }
            }
        }
        n(!0), e.addEventListener("input", r), e.addEventListener("blur", function t() {
            n(!1), e.removeEventListener("input", r), e.removeEventListener("blur", t)
        })
    }), r.on("click", ".js-template-highlight", function(t) {
        var r, n;
        (r = t.currentTarget, n = e.getAttribute(r, "data-fieldname"), e.query(document, 'input[data-fieldname="' + n + '"]', HTMLInputElement)).focus()
    }), t.observe(".js-templates", function() {
        var t = !0,
            r = !1,
            n = void 0;
        try {
            for (var a, s = e.querySelectorAll(document, ".js-template-form-input", HTMLInputElement)[Symbol.iterator](); !(t = (a = s.next()).done); t = !0) {
                var o = a.value;
                La(o, ja(o))
            }
        } catch (e) {
            r = !0, n = e
        } finally {
            try {
                !t && s.return && s.return()
            } finally {
                if (r) throw n
            }
        }
    }), t.observe(".js-activity-overview-graph-container", function(t) {
        var r = e.getAttribute(t, "data-percentages");
        ka(t, {
            percentages: JSON.parse(r)
        })
    }), r.on("click", "[data-hydro-click]", function(e) {
        var t = e.currentTarget;
        Re({
            hydroEventPayload: t.getAttribute("data-hydro-click"),
            hydroEventHmac: t.getAttribute("data-hydro-click-hmac"),
            hydroClientContext: t.getAttribute("data-hydro-client-context")
        })
    }), t.observe(".dashboard-sidebar.js-sticky", {
        constructor: HTMLElement,
        initialize: function(e) {
            if (!e.classList.contains("is-placeholder")) {
                var t = !0,
                    r = function() {
                        var r = e.getBoundingClientRect(),
                            n = window.innerHeight,
                            a = 0 === r.top;
                        a ? a && t && (t = !1, e.style.height = n + "px") : (e.style.width = "auto", e.style.height = n - r.top + "px")
                    };
                document.addEventListener("scroll", r, {
                    passive: !0
                }), window.addEventListener("resize", function() {
                    t = !0, r()
                }, {
                    passive: !0
                }), r()
            }
        }
    }), r.on("details:toggled", ".js-news-feed-event-group", function(e) {
        if (o(e instanceof CustomEvent, "app/assets/modules/github/dashboard.js:48"), e.detail.open) {
            var t = e.currentTarget,
                r = !0,
                n = !1,
                a = void 0;
            try {
                for (var s, i = t.querySelectorAll("[data-hydro-view]")[Symbol.iterator](); !(r = (s = i.next()).done); r = !0) {
                    Ea(s.value)
                }
            } catch (e) {
                n = !0, a = e
            } finally {
                try {
                    !r && i.return && i.return()
                } finally {
                    if (n) throw a
                }
            }
        }
    });
    var qa = document.querySelectorAll(".js-dashboard-deferred");
    if (qa.length) try {
        ! function(t) {
            var r = Array.from(t).map(function(t) {
                    return {
                        url: e.getAttribute(t, "data-src"),
                        priority: parseInt(e.getAttribute(t, "data-priority"), 10),
                        el: t,
                        loaded: !1
                    }
                }),
                n = function(e) {
                    var t = e.url,
                        n = e.el;
                    s.fetchSafeDocumentFragment(document, t).then(function(t) {
                        n.replaceWith(t), e.loaded = !0, Ta(r.filter(function(e) {
                            return !e.loaded
                        }))
                    }).catch(function() {
                        n.classList.add("is-error")
                    })
                },
                a = !0,
                o = !1,
                i = void 0;
            try {
                for (var u, c = r[Symbol.iterator](); !(a = (u = c.next()).done); a = !0) n(u.value)
            } catch (e) {
                o = !0, i = e
            } finally {
                try {
                    !a && c.return && c.return()
                } finally {
                    if (o) throw i
                }
            }
            Ta(r)
        }(qa)
    } catch (e) {}
 
    function Sa(t) {
        var r = t.currentTarget;
        o(r instanceof HTMLElement, "app/assets/modules/github/dashboard/discover-repositories.js:20"), e.query(r, ".js-dismiss-repository-recommendation").classList.remove("d-none")
    }
 
    function Aa(t) {
        var r = t.currentTarget;
        o(r instanceof HTMLElement, "app/assets/modules/github/dashboard/discover-repositories.js:26"), e.query(r, ".js-dismiss-repository-recommendation").classList.add("d-none")
    }
    Tn(".js-discover-repositories .js-ajax-pagination", function(e) {
        o(e instanceof HTMLFormElement, "app/assets/modules/github/dashboard/discover-repositories.js:11"), e.classList.contains("is-loading") || (e.classList.add("is-loading"), l.submit(e))
    }), t.observe(".js-repository-recommendation", {
        add: function(e) {
            e.addEventListener("mouseover", Sa), e.addEventListener("mouseout", Aa)
        },
        remove: function(e) {
            e.removeEventListener("mouseover", Sa), e.removeEventListener("mouseout", Aa)
        }
    }), c.remoteForm(".js-dismiss-repository-recommendation", function() {
        var t = X(regeneratorRuntime.mark(function t(r, n) {
            var a, s, o;
            return regeneratorRuntime.wrap(function(t) {
                for (;;) switch (t.prev = t.next) {
                    case 0:
                        return a = e.closest(r, ".js-repository-recommendation-and-restore"), s = e.query(a, ".js-restore-repo-rec-container"), o = e.query(a, ".js-repository-recommendation"), t.next = 5, n.html();
                    case 5:
                        t.sent && (o.classList.add("d-none"), s.classList.remove("d-none"), s.style.display = "block");
                    case 7:
                    case "end":
                        return t.stop()
                }
            }, t, this)
        }));
        return function(e, r) {
            return t.apply(this, arguments)
        }
    }()), c.remoteForm(".js-restore-repo-rec-form", function() {
        var t = X(regeneratorRuntime.mark(function t(r, n) {
            var a, s, o;
            return regeneratorRuntime.wrap(function(t) {
                for (;;) switch (t.prev = t.next) {
                    case 0:
                        return a = e.closest(r, ".js-repository-recommendation-and-restore"), s = e.query(a, ".js-restore-repo-rec-container"), o = e.query(a, ".js-repository-recommendation"), t.next = 5, n.html();
                    case 5:
                        t.sent && (s.classList.add("d-none"), o.classList.remove("d-none"), o.style.display = "block");
                    case 7:
                    case "end":
                        return t.stop()
                }
            }, t, this)
        }));
        return function(e, r) {
            return t.apply(this, arguments)
        }
    }()), r.on("click", ".js-show-more-recent-items", function(e) {
        e.currentTarget.classList.add("d-none")
    }), t.observe(".js-recent-activity-container", function() {
        var e = document.querySelector(".js-all-activity-header");
        e && e.classList.remove("d-none")
    });
    var Ma = function() {
        var t = X(regeneratorRuntime.mark(function t(r) {
            var n, a, o, i;
            return regeneratorRuntime.wrap(function(t) {
                for (;;) switch (t.prev = t.next) {
                    case 0:
                        return t.next = 2, M("high");
                    case 2:
                        return n = e.query(document, ".js-delegated-account-recovery-submit", HTMLButtonElement), a = e.query(document, ".js-create-recovery-token-form", HTMLFormElement), r.classList.remove("failed"), r.classList.add("loading"), n.disabled = !0, t.prev = 7, t.next = 10, s.fetchForm(a);
                    case 10:
                        return o = t.sent, t.next = 13, o.json();
                    case 13:
                        i = t.sent, l.fillFormValues(r, {
                            token: i.token,
                            state: i.state_url
                        }), r.submit(), t.next = 23;
                        break;
                    case 18:
                        t.prev = 18, t.t0 = t.catch(7), r.classList.remove("loading"), r.classList.add("failed"), n.disabled = !1;
                    case 23:
                    case "end":
                        return t.stop()
                }
            }, t, this, [
                [7, 18]
            ])
        }));
        return function(e) {
            return t.apply(this, arguments)
        }
    }();
    r.on("submit", "form.js-post-recovery-token", function(e) {
        var t = e.currentTarget;
        o(t instanceof HTMLFormElement, "app/assets/modules/github/delegated-account-recovery.js:44"), e.preventDefault(), Ma(t)
    }), t.observe("form.js-recovery-provider-auto-redirect", {
        constructor: HTMLFormElement,
        initialize: function(e) {
            e.submit()
        }
    }), r.on("click", ".js-sub-dependencies", function() {
        var t = X(regeneratorRuntime.mark(function t(r) {
            var n, a, i, u, c, l, d, m, f = r.currentTarget;
            return regeneratorRuntime.wrap(function(t) {
                for (;;) switch (t.prev = t.next) {
                    case 0:
                        if (o(f instanceof HTMLElement, "app/assets/modules/github/dependencies.js:9"), a = (n = f).getAttribute("data-loaded"), i = n.querySelector(".js-expanded"), u = n.querySelector(".js-collapsed"), c = n.closest(".js-details-container"), i && i.classList.toggle("d-none"), u && u.classList.toggle("d-none"), c && c.classList.toggle("bg-gray-light"), a) {
                            t.next = 17;
                            break
                        }
                        return n.setAttribute("data-loaded", "true"), l = e.getAttribute(n, "data-sub-dependency-url"), d = n.closest(".js-dependency"), t.next = 15, s.fetchSafeDocumentFragment(document, l);
                    case 15:
                        m = t.sent, d && d.after(m);
                    case 17:
                    case "end":
                        return t.stop()
                }
            }, t, this)
        }));
        return function(e) {
            return t.apply(this, arguments)
        }
    }());
    var Ha = function() {
            var e = X(regeneratorRuntime.mark(function e(t) {
                var n, a, s = t.currentTarget;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                        case 0:
                            return o(s instanceof HTMLElement, "app/assets/modules/github/details-element.js:45"), n = s, a = s.hasAttribute("open"), r.fire(n, a ? "menu:activate" : "menu:deactivate"), e.next = 6, f.microtask();
                        case 6:
                            r.fire(n, a ? "menu:activated" : "menu:deactivated");
                        case 7:
                        case "end":
                            return e.stop()
                    }
                }, e, this)
            }));
            return function(t) {
                return e.apply(this, arguments)
            }
        }(),
        Ia = null;
 
    function Ra(e) {
        var t = e.currentTarget;
        o(t instanceof HTMLElement, "app/assets/modules/github/details-element.js:27"), t.hasAttribute("open") ? (Ia && Ia !== t && Ia.removeAttribute("open"), Ia = t) : t === Ia && (Ia = null)
    }
 
    function _a(t) {
        var r = t.currentTarget;
        if (r instanceof Element) {
            var n = e.closest(r, "details"),
                a = e.getAttribute(n, "data-deferred-details-content-url");
            n.removeAttribute("data-deferred-details-content-url"), e.query(n, "include-fragment", IncludeFragmentElement).src = a
        }
    }
    document.addEventListener("keydown", function(e) {
        !e.defaultPrevented && "Escape" === e.key && Ia && Ia.removeAttribute("open")
    }), t.observe(".js-dropdown-details", {
        subscribe: function(e) {
            return y.fromEvent(e, "toggle", Ra)
        }
    }), t.observe("details.js-select-menu", {
        subscribe: function(e) {
            return y.fromEvent(e, "toggle", Ha)
        }
    }), r.on("menu:deactivate", "details.js-select-menu", function(e) {
        e.currentTarget.hasAttribute("open") && e.currentTarget.removeAttribute("open")
    }), t.observe("[data-deferred-details-content-url]", {
        subscribe: function(t) {
            var r = e.query(t, "summary");
            return y.fromEvent(r, "mouseenter", _a)
        }
    }), t.observe("[data-deferred-details-content-url]", {
        subscribe: function(e) {
            return y.fromEvent(e, "toggle", _a)
        }
    }), r.on("click", "[data-toggle-for]", function(e) {
        var t = e.currentTarget.getAttribute("data-toggle-for") || "",
            r = document.getElementById(t);
        r && (r.hasAttribute("open") ? r.removeAttribute("open") : r.setAttribute("open", "open"))
    }), t.observe("details.select-menu details-menu include-fragment", function(e) {
        var t = e.closest("details");
        t && (e.addEventListener("loadstart", function() {
            t.classList.add("is-loading")
        }), e.addEventListener("loadend", function() {
            t.classList.remove("is-loading");
            var e = t.querySelector(".js-filterable-field");
            e && r.fire(e, "filterable:change")
        }))
    }), t.observe("details details-menu .js-filterable-field", {
        constructor: HTMLInputElement,
        add: function(e) {
            var t = e.closest("details");
            t && t.addEventListener("toggle", function() {
                t.hasAttribute("open") || (e.value = "", r.fire(e, "filterable:change"))
            })
        }
    }), H(function(e) {
        var t = e.target;
        if (t && !t.closest("summary"))
            for (var r = t.parentElement; r;)(r = r.closest("details")) && (r.hasAttribute("open") || r.setAttribute("open", ""), r = r.parentElement)
    });
    var Ca = !1,
        Fa = [];
 
    function Pa() {
        Fa.length ? Ca || (window.addEventListener("resize", Na, {
            passive: !0
        }), document.addEventListener("scroll", Na, {
            passive: !0
        }), Ca = !0) : (window.removeEventListener("resize", Na, {
            passive: !0
        }), document.removeEventListener("scroll", Na, {
            passive: !0
        }), Ca = !1)
    }
 
    function Na() {
        var e = !0,
            t = !1,
            r = void 0;
        try {
            for (var n, a = Fa[Symbol.iterator](); !(e = (n = a.next()).done); e = !0) {
                var s = n.value;
                if (s.element.offsetHeight > 0) {
                    var o = s.element,
                        i = s.placeholder,
                        u = s.top,
                        c = o.getBoundingClientRect();
                    if (i) {
                        var l = i.getBoundingClientRect();
                        o.classList.contains("is-stuck") ? l.top > parseInt(u) ? Oa(s) : Ba(s) : c.top <= parseInt(u) && Da(s)
                    } else c.top <= parseInt(u) ? Da(s) : Oa(s)
                }
            }
        } catch (e) {
            t = !0, r = e
        } finally {
            try {
                !e && a.return && a.return()
            } finally {
                if (t) throw r
            }
        }
    }
 
    function Da(e) {
        var t = e.element,
            r = e.placeholder,
            n = e.top;
        if (r) {
            var a = t.getBoundingClientRect();
            t.style.top = n.toString(), t.style.left = a.left + "px", t.style.width = a.width + "px", t.style.marginTop = "0", t.style.position = "fixed", r.style.display = "block"
        }
        t.classList.add("is-stuck")
    }
 
    function Oa(e) {
        var t = e.element,
            r = e.placeholder;
        r && (t.style.position = "static", t.style.marginTop = r.style.marginTop, r.style.display = "none"), t.classList.remove("is-stuck")
    }
 
    function Ba(e) {
        var t = e.element,
            r = e.placeholder,
            n = e.offsetParent,
            a = e.top;
        if (r) {
            var s = t.getBoundingClientRect(),
                o = r.getBoundingClientRect();
            if (t.style.left = o.left + "px", t.style.width = o.width + "px", n) {
                var i = n.getBoundingClientRect();
                i.bottom < s.height + parseInt(a) && (t.style.top = i.bottom - s.height + "px")
            }
        }
    }
 
    function Ua(e) {
        if (function(e) {
                var t = window.getComputedStyle(e).position;
                return /sticky/.test(t)
            }(e)) return null;
        var t = e.previousElementSibling;
        if (t && t.classList.contains("is-placeholder")) return o(t instanceof HTMLElement, "previousElement must be an HTMLElement -- app/assets/modules/github/sticky.js:127"), t;
        var r = document.createElement("div");
        return r.style.visibility = "hidden", r.style.display = "none", r.style.height = window.getComputedStyle(e).height, r.className = e.className, r.classList.remove("js-sticky"), r.classList.add("is-placeholder"), o(e.parentNode, "Element must be inserted into the dom -- app/assets/modules/github/sticky.js:140"), e.parentNode.insertBefore(r, e)
    }
 
    function Va(e) {
        var t = e.ownerDocument;
        e.scrollIntoView(), t.defaultView.scrollBy(0, -za(t))
    }
 
    function za(e) {
        Na();
        var t = e.querySelectorAll(".js-sticky-offset-scroll");
        return Math.max.apply(Math, ae(Array.from(t).map(function(e) {
            var t = e.getBoundingClientRect(),
                r = t.top,
                n = t.height;
            return 0 === r ? n : 0
        })))
    }
 
    function Wa(e) {
        var t = $a();
        if (t) {
            Ka(e, t);
            var r = function(e, t) {
                var r = function(e, t) {
                    var r = /^(diff-[0-9a-f]{32})(?:[L|R]\d+)?$/.exec(t);
                    if (!r) return;
                    var n = r[1],
                        a = e.querySelector("a[name='" + n + "']");
                    if (!a) return;
                    var s = a.nextElementSibling;
                    if (s && !s.querySelector(".js-diff-load-container")) return;
                    return s
                }(e, t);
                if (r) return r;
                return function(e, t) {
                    var r = /^(?:r|commitcomment-)(\d+)$/.exec(t);
                    if (!r) return;
                    var n = r[1],
                        a = e.querySelector("#diff-with-comment-" + n);
                    if (!a) return;
                    return a.closest(".js-file")
                }(e, t)
            }(e, t);
            r && (Va(r), Ga(r))
        }
    }
 
    function $a() {
        return window.location.hash.slice(1)
    }
 
    function Ka(e, t) {
        var r = E.findElementByFragmentName(e.ownerDocument, t);
        r && e.contains(r) && Va(r)
    }
 
    function Ja(t) {
        var r = t.currentTarget;
        o(r instanceof Element, "app/assets/modules/github/diffs/progressive.js:146"), e.query(r, ".js-diff-progressive-spinner").classList.add("d-none"), e.query(r, ".js-diff-progressive-retry").classList.remove("d-none")
    }
 
    function Ga(t) {
        var r = e.query(t, ".js-diff-entry-loader", IncludeFragmentElement),
            n = e.query(t, ".js-diff-placeholder", Element),
            a = e.query(t, "button.js-diff-load", HTMLButtonElement),
            s = e.query(t, ".js-button-text");
        n.setAttribute("fill", "url('#animated-diff-gradient')"), s.textContent = a.getAttribute("data-disable-with") || "", a.disabled = !0;
        var o = new URL(r.getAttribute("data-fragment-url") || "", window.location.origin);
        return r.src = o.toString(), r.data
    }
 
    function Xa(t) {
        var r = t.currentTarget;
        o(r instanceof Element, "app/assets/modules/github/diffs/progressive.js:175"), e.query(r, ".js-diff-load-button-container").classList.add("d-none"), e.query(r, ".js-diff-load-retry").classList.remove("d-none")
    }
 
    function Qa(e) {
        var t = e.currentTarget;
        o(t instanceof IncludeFragmentElement, "app/assets/modules/github/diffs/progressive.js:188"), t.setAttribute("data-url", t.src), t.removeAttribute("src")
    }
 
    function Ya(e) {
        e.src = e.getAttribute("data-url") || "", e.removeAttribute("data-url")
    }
 
    function Za(t) {
        var r, n, a, s, o, i, u, c;
        ! function() {
            var e = ns(),
                t = es(),
                r = rs(),
                n = !0,
                a = !1,
                s = void 0;
            try {
                for (var o, i = r[Symbol.iterator](); !(n = (o = i.next()).done); n = !0) {
                    var u = o.value,
                        c = u.getAttribute("data-file-type");
                    if (c) {
                        var l = t.includes(c);
                        is(u, l)
                    }
                    if (e && e.checked) {
                        var d = "true" === u.getAttribute("data-file-deleted");
                        d && is(u, !d)
                    }
                }
            } catch (e) {
                a = !0, s = e
            } finally {
                try {
                    !n && i.return && i.return()
                } finally {
                    if (a) throw s
                }
            }
        }(), us(), r = t, e.query(document, ".js-file-filter-text", HTMLElement).classList.toggle("text-blue", r), n = t, a = document.querySelector(".js-reset-filters"), s = document.querySelector(".js-commits-filtered"), null == a || s || (a.hidden = !n),
            function() {
                var t = rs(),
                    r = ts(),
                    n = os(),
                    a = function(e) {
                        var r = t.find(function(t) {
                            var r = t.getAttribute("data-file-type"),
                                a = t.getAttribute("data-file-deleted");
                            if (r && a) {
                                var s = "true" === a && n;
                                return r === e.value && !s
                            }
                        });
                        e.disabled = void 0 === r
                    },
                    s = !0,
                    o = !1,
                    i = void 0;
                try {
                    for (var u, c = r[Symbol.iterator](); !(s = (u = c.next()).done); s = !0) {
                        var l = u.value;
                        a(l)
                    }
                } catch (e) {
                    o = !0, i = e
                } finally {
                    try {
                        !s && c.return && c.return()
                    } finally {
                        if (o) throw i
                    }
                }
                var d = document.querySelector(".js-deleted-files-container"),
                    m = ns();
                if (m && d) {
                    var f = function() {
                        var t = es(),
                            r = e.querySelectorAll(document, ".js-file-header[data-file-deleted='true']").find(function(e) {
                                var r = e.getAttribute("data-file-type");
                                return !r || t.includes(r)
                            });
                        return Boolean(r)
                    }();
                    d.classList.toggle("text-gray", !f), m.disabled = !f
                }
            }(), o = ss(), i = e.query(document, ".js-file-filter-select-all-container", HTMLElement), u = o ? "data-select-all-markup" : "data-all-selected-markup", c = e.getAttribute(i, u), i.textContent = c, i.classList.toggle("text-gray", !o), i.classList.toggle("text-blue", o),
            function() {
                var t = document.querySelector(".js-deleted-files-container");
                if (t) {
                    var r = os() ? "data-show-deleted-markup" : "data-hide-deleted-markup",
                        n = e.getAttribute(t, r);
                    t.textContent = n
                }
            }(),
            function() {
                var t = e.querySelectorAll(document, ".js-file-type-count"),
                    r = !0,
                    n = !1,
                    a = void 0;
                try {
                    for (var s, o = t[Symbol.iterator](); !(r = (s = o.next()).done); r = !0) {
                        var i = s.value,
                            u = os() ? "data-non-deleted-file-count" : "data-all-file-count",
                            c = e.getAttribute(i, u);
                        i.textContent = c
                    }
                } catch (e) {
                    n = !0, a = e
                } finally {
                    try {
                        !r && o.return && o.return()
                    } finally {
                        if (n) throw a
                    }
                }
            }()
    }
 
    function es() {
        return ts().filter(function(e) {
            return e.checked
        }).map(function(e) {
            return e.value
        })
    }
 
    function ts() {
        return e.querySelectorAll(document, ".js-diff-file-type-option", HTMLInputElement)
    }
 
    function rs() {
        return e.querySelectorAll(document, ".js-file-header", HTMLElement)
    }
 
    function ns() {
        var e = document.querySelector(".js-deleted-files-toggle");
        if (e instanceof HTMLInputElement) return e
    }
 
    function as() {
        return ss() || os()
    }
 
    function ss() {
        var e = ts().find(function(e) {
            return !e.checked
        });
        return Boolean(e)
    }
 
    function os() {
        var e = ns();
        return !!e && e.checked
    }
 
    function is(t, r) {
        e.closest(t, ".js-file.js-details-container").hidden = !r
    }
 
    function us() {
        var t = e.querySelectorAll(document, ".toc-menu-item", HTMLAnchorElement),
            r = es(),
            n = ns(),
            a = !0,
            s = !1,
            o = void 0;
        try {
            for (var i, u = t[Symbol.iterator](); !(a = (i = u.next()).done); a = !0) {
                var c = i.value,
                    l = c.getAttribute("data-file-type");
                if (l) {
                    var d = r.includes(l);
                    c.classList.toggle("d-none", !d)
                }
                if (n && n.checked) {
                    var m = "true" === c.getAttribute("data-file-deleted");
                    m && c.classList.toggle("d-none", m)
                }
            }
        } catch (e) {
            s = !0, o = e
        } finally {
            try {
                !a && u.return && u.return()
            } finally {
                if (s) throw o
            }
        }
    }
    t.observe(".js-sticky", {
        constructor: HTMLElement,
        add: function(e) {
            ! function(e) {
                var t = Ua(e),
                    r = window.getComputedStyle(e).position;
                e.style.position = "static";
                var n = e.offsetParent;
                e.style.position = "fixed";
                var a = window.getComputedStyle(e).top,
                    s = {
                        element: e,
                        placeholder: t,
                        offsetParent: n,
                        top: "auto" === a ? 0 : a
                    };
                e.style.position = r, Fa.push(s)
            }(e), Na(), Pa()
        },
        remove: function(e) {
            ! function(e) {
                var t = Fa.map(function(e) {
                    return e.element
                }).indexOf(e);
                Fa.splice(t, 1)
            }(e), Pa()
        }
    }), t.observe(".js-diff-progressive-container", function(e) {
        Wa(e);
        var t = e.querySelector(".js-diff-progressive-loader");
        t && (t.addEventListener("load", function() {
            Wa(e)
        }), t.addEventListener("error", Qa), t.addEventListener("error", Ja))
    }), r.on("click", ".js-diff-progressive-retry .js-retry-button", function(t) {
        var r = e.closest(t.currentTarget, ".js-diff-progressive-loader", IncludeFragmentElement);
        ! function(t) {
            e.query(t, ".js-diff-progressive-spinner").classList.remove("d-none"), e.query(t, ".js-diff-progressive-retry").classList.add("d-none")
        }(r), Ya(r)
    }), t.observe(".js-diff-load-container", function(t) {
        var r = t.querySelector(".js-diff-entry-loader");
        r && (r.addEventListener("load", function() {
            e.closest(t, ".js-file").classList.remove("hide-file-notes-toggle");
            var r = $a();
            r && Ka(t, r)
        }), r.addEventListener("error", Qa), r.addEventListener("error", Xa))
    }), r.on("click", ".js-diff-load", function(t) {
        t.target.classList.contains("js-ignore-this") || Ga(e.closest(t.currentTarget, ".js-diff-load-container"))
    }), r.on("click", ".js-diff-load-retry .js-retry-button", function(t) {
        var r = e.closest(t.currentTarget, ".js-diff-entry-loader", IncludeFragmentElement);
        ! function(t) {
            e.query(t, ".js-diff-load-button-container").classList.remove("d-none"), e.query(t, ".js-diff-load-retry").classList.add("d-none")
        }(r), Ya(r)
    }), r.on("click", ".js-rendered, .js-source", function(t) {
        var r = t.currentTarget;
        r.classList.contains("selected") ? t.preventDefault() : (function(t) {
            var r = e.closest(t, ".js-file-header"),
                n = t.classList.contains("js-rendered"),
                a = t.classList.contains("js-source"),
                s = e.getAttribute(r, "data-short-path"),
                o = e.getAttribute(r, "data-anchor"),
                i = new URL(window.location.href, window.location.origin),
                u = new URLSearchParams(i.search.slice(1));
            i.hash = o, n ? u.set("short_path", s) : a && u.delete("short_path");
            i.search = u.toString(), m.replaceState(null, "", i.toString())
        }(r), function(e) {
            var t = !0,
                r = !1,
                n = void 0;
            try {
                for (var a, s = document.querySelectorAll(".js-rendered, .js-source")[Symbol.iterator](); !(t = (a = s.next()).done); t = !0) {
                    var o = a.value;
                    o.classList.remove("selected"), o.removeAttribute("aria-current")
                }
            } catch (e) {
                r = !0, n = e
            } finally {
                try {
                    !t && s.return && s.return()
                } finally {
                    if (r) throw n
                }
            }
            e.classList.add("selected"), e.setAttribute("aria-current", "true")
        }(r))
    }), c.remoteForm(".js-prose-diff-toggle-form", function() {
        var t = X(regeneratorRuntime.mark(function t(r, n) {
            var a, s, o;
            return regeneratorRuntime.wrap(function(t) {
                for (;;) switch (t.prev = t.next) {
                    case 0:
                        return a = e.closest(r, ".js-details-container"), s = e.query(a, ".js-file-content"), t.next = 4, n.html();
                    case 4:
                        for (o = t.sent; s.lastChild;) s.removeChild(s.lastChild);
                        s.append(o.html), a.classList.toggle("display-rich-diff"), a.classList.toggle("show-inline-notes");
                    case 9:
                    case "end":
                        return t.stop()
                }
            }, t, this)
        }));
        return function(e, r) {
            return t.apply(this, arguments)
        }
    }()), r.on("change", ".js-diff-style-toggle input", function(t) {
        var r = e.closest(t.target, ".js-diff-settings"),
            n = !0,
            a = !1,
            s = void 0;
        try {
            for (var o, i = e.querySelectorAll(r, ".js-diff-style-toggle label")[Symbol.iterator](); !(n = (o = i.next()).done); n = !0) {
                o.value.classList.toggle("selected")
            }
        } catch (e) {
            a = !0, s = e
        } finally {
            try {
                !n && i.return && i.return()
            } finally {
                if (a) throw s
            }
        }
    }), r.on("click", ".js-toc-retry", function(e) {
        var t = e.target.closest(".js-select-menu");
        null != t && (t.classList.add("js-load-contents", "is-loading"), t.classList.remove("has-error"))
    }), r.on("change", ".js-diff-file-type-option", function() {
        Za(as())
    }), t.observe(".js-toc-items-container", function() {
        us()
    }), r.on("click", ".js-file-filter-select-all", function() {
        if (ss()) {
            var e = ts(),
                t = !0,
                r = !1,
                n = void 0;
            try {
                for (var a, s = e[Symbol.iterator](); !(t = (a = s.next()).done); t = !0) {
                    a.value.checked = !0
                }
            } catch (e) {
                r = !0, n = e
            } finally {
                try {
                    !t && s.return && s.return()
                } finally {
                    if (r) throw n
                }
            }
            Za(as())
        }
    }), r.on("change", ".js-deleted-files-toggle", function() {
        Za(as())
    });
    var cs = {};
 
    function ls(e) {
        var t = e.getAttribute("data-filter-value") || "";
        return cs[t] = function(e) {
            return (e.getAttribute("data-aliases") || "").trim().toLowerCase()
        }(e), t
    }
 
    function ds(e, t) {
        var r = cs[e].indexOf(t);
        return r > -1 ? 1e3 - r : 0
    }
 
    function ms(t) {
        return e.query(t, '[role="tablist"] [role="tab"][aria-selected="true"]')
    }
 
    function fs(t) {
        var r = e.querySelectorAll(t, '[role="tablist"] [role="tab"]'),
            n = ms(t);
        return e.querySelectorAll(t, '[role="tabpanel"]', HTMLElement)[Array.from(r).indexOf(n)]
    }
 
    function ps(t, r) {
        var n = e.query(t, ".js-emoji-picker-all-emoji"),
            a = e.query(t, ".js-emoji-picker-no-results"),
            s = e.query(t, ".js-emoji-picker-results-header");
        a.hidden = !0, n.hidden = !1, s.hidden = !1, At(n, r, {
            text: ls,
            score: ds
        }), n.querySelectorAll(".js-emoji-button").length < 1 && (a.hidden = !1, n.hidden = !0, s.hidden = !0)
    }
 
    function vs(t) {
        var r = e.query(t, ".js-emoji-picker-filter", HTMLInputElement),
            n = e.query(t, ".js-emoji-picker-filter-tab-button");
        r.value = "", ps(t, ""), n.hidden = !0
    }
 
    function gs(e) {
        e.classList.add("selected-emoji")
    }
 
    function hs(e, t) {
        var r = fs(e),
            n = Array.from(r.querySelectorAll(".js-emoji-button")),
            a = e.querySelector(".selected-emoji.js-emoji-button"),
            s = null;
        if (a) {
            a.classList.remove("selected-emoji");
            var o = n.indexOf(a);
            t && n[o + 1] ? s = n[o + 1] : !t && n[o - 1] && (s = n[o - 1])
        }
        s || (s = t ? n[0] : n[n.length - 1]), gs(s), s.focus()
    }
 
    function ys(e) {
        if (e.target instanceof HTMLElement) {
            var t = e.target.closest(".js-emoji-picker");
            if (t && (o(t instanceof HTMLElement, "app/assets/modules/github/emoji-picker.js:189"), !t.hidden)) switch (e.key) {
                case "ArrowDown":
                    e.preventDefault(), hs(t, !0);
                    break;
                case "ArrowUp":
                    e.preventDefault(), hs(t, !1)
            }
        }
    }
 
    function bs(e) {
        e.hidden = !0, document.removeEventListener("keydown", ys)
    }
 
    function js() {
        return Reflect.construct(HTMLElement, [], this.__proto__.constructor)
    }
    n.onInput(".js-emoji-picker-filter", function(t) {
        var r = t.target;
        o(r instanceof HTMLInputElement, "app/assets/modules/github/emoji-picker.js:228"),
            function(t) {
                var r = e.closest(t, ".js-emoji-picker"),
                    n = ms(r),
                    a = e.query(r, ".js-emoji-picker-filter-tab-button", HTMLButtonElement),
                    s = t.value.toLowerCase();
                if (ps(r, s), n.classList.contains("js-emoji-picker-filter-tab-button") || n.classList.add("emoji-picker-prior-selected-tab-button"), s.length > 0) a.hidden = !1, "true" === a.getAttribute("aria-selected") || (a.click(), t.focus());
                else {
                    a.hidden = !0;
                    var o = r.querySelector(".emoji-picker-prior-selected-tab-button");
                    o instanceof HTMLButtonElement && o.click()
                }
            }(r)
    }), t.observe(".js-emoji-picker", function(e) {
        o(e instanceof HTMLElement, "app/assets/modules/github/emoji-picker.js:234"), document.addEventListener("click", function(t) {
            t.target instanceof HTMLElement && (t.target.closest(".js-emoji-picker") !== e && bs(e))
        })
    }), Object.setPrototypeOf(js.prototype, HTMLElement.prototype), Object.setPrototypeOf(js, HTMLElement);
    var Ls = function(e) {
            function t() {
                Q(this, t);
                var e = te(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
                return e.teardownHandler = e.teardown.bind(e), e.deactivateHandler = e.deactivate.bind(e), e.pasteHandler = e.onPaste.bind(e), e.inputHandler = e.onInput.bind(e), e.escapeHandler = e.onEscapeKeydown.bind(e), e
            }
            return ee(t, js), Y(t, [{
                key: "connectedCallback",
                value: function() {
                    var e = document.getElementById(this.getAttribute("for") || "");
                    (e instanceof HTMLInputElement || e instanceof HTMLTextAreaElement) && (this.input = e, e.form && e.form.addEventListener("reset", this.deactivateHandler), e.addEventListener("paste", this.pasteHandler), e.addEventListener("input", this.inputHandler), e.addEventListener("keydown", this.escapeHandler), e.addEventListener("focusout:delay", this.teardownHandler), this.addEventListener("combobox-commit", this.onComboboxCommit))
                }
            }, {
                key: "disconnectedCallback",
                value: function() {
                    this.teardownHandler()
                }
            }, {
                key: "teardown",
                value: function() {
                    this.deactivate();
                    var e = this.input;
                    e && (e.form && e.form.removeEventListener("reset", this.deactivateHandler), e.removeEventListener("paste", this.pasteHandler), e.removeEventListener("input", this.inputHandler), e.removeEventListener("keydown", this.escapeHandler), e.removeEventListener("focusout:delay", this.teardownHandler), this.removeEventListener("combobox-commit", this.onComboboxCommit))
                }
            }, {
                key: "getList",
                value: function() {
                    return this.querySelector("ul")
                }
            }, {
                key: "loadSuggestions",
                value: function() {
                    var e = X(regeneratorRuntime.mark(function e() {
                        var t;
                        return regeneratorRuntime.wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if (t = this.getAttribute("src")) {
                                        e.next = 3;
                                        break
                                    }
                                    return e.abrupt("return");
                                case 3:
                                    return e.t0 = i.parseHTML, e.t1 = document, e.next = 7, s.fetchText(t);
                                case 7:
                                    e.t2 = e.sent, this.suggestionContainer = (0, e.t0)(e.t1, e.t2).children[0], document.activeElement === this.input && (this.currentSearch = null, this.checkQuery());
                                case 10:
                                case "end":
                                    return e.stop()
                            }
                        }, e, this)
                    }));
                    return function() {
                        return e.apply(this, arguments)
                    }
                }()
            }, {
                key: "activate",
                value: function(e) {
                    if (this.input === document.activeElement) {
                        var t = Jr(this.input, e + 1),
                            r = t.top,
                            n = t.left;
                        if (this.style.top = r + "px", this.style.left = n + "px", this.hidden) {
                            this.hidden = !1;
                            var a = this.getList();
                            a && (a.id || (a.id = "suggester-" + Math.floor(1e5 * Math.random()).toString()), this.input.setAttribute("aria-owns", a.id), this.input.setAttribute("role", "combobox"), Nr(this.input, this))
                        }
                    }
                }
            }, {
                key: "deactivate",
                value: function() {
                    if (!this.hidden) {
                        this.hidden = !0;
                        var e = this.getList();
                        e && e.remove(), this.input.removeAttribute("role"), Dr(this.input, this)
                    }
                }
            }, {
                key: "onPaste",
                value: function() {
                    this.deactivate(), this.justPasted = !0
                }
            }, {
                key: "onInput",
                value: function() {
                    this.justPasted ? this.justPasted = !1 : this.checkQuery()
                }
            }, {
                key: "onEscapeKeydown",
                value: function(e) {
                    this.hidden || "Escape" === e.key && (this.deactivate(), e.stopImmediatePropagation(), e.preventDefault())
                }
            }, {
                key: "onComboboxCommit",
                value: function(e) {
                    var t = e.target;
                    if (t instanceof HTMLElement && t.hasAttribute("data-value")) {
                        var r = this.getValue(t);
                        if (r) {
                            var n = this.currentSearch;
                            if (n) {
                                var a = this.input.value.substring(0, n.endIndex),
                                    s = this.input.value.substring(n.endIndex);
                                a = a.replace(this.matchRegExp, this.replacePattern.replace("$value", r)), this.input.value = a + s, this.input.dispatchEvent(new CustomEvent("suggester:complete", {
                                    bubbles: !0
                                })), this.deactivate(), this.input.focus(), this.input.selectionStart = a.length, this.input.selectionEnd = a.length
                            }
                        }
                    }
                }
            }, {
                key: "checkQuery",
                value: function() {
                    var e = X(regeneratorRuntime.mark(function e() {
                        var t;
                        return regeneratorRuntime.wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if (this.suggestionContainer) {
                                        e.next = 3;
                                        break
                                    }
                                    return e.next = 3, this.loadSuggestions();
                                case 3:
                                    if (!(t = this.searchQuery())) {
                                        e.next = 13;
                                        break
                                    }
                                    if (!this.currentSearch || this.currentSearch !== t.query) {
                                        e.next = 7;
                                        break
                                    }
                                    return e.abrupt("return");
                                case 7:
                                    return this.currentSearch = t, e.next = 10, this.searchAndUpdateResults();
                                case 10:
                                    return e.sent ? this.activate(t.startIndex) : this.deactivate(), e.abrupt("return");
                                case 13:
                                    this.currentSearch = null, this.deactivate();
                                case 15:
                                case "end":
                                    return e.stop()
                            }
                        }, e, this)
                    }));
                    return function() {
                        return e.apply(this, arguments)
                    }
                }()
            }, {
                key: "searchAndUpdateResults",
                value: function() {
                    var e = X(regeneratorRuntime.mark(function e() {
                        var t, r, n, a, s;
                        return regeneratorRuntime.wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if (this.currentSearch) {
                                        e.next = 2;
                                        break
                                    }
                                    return e.abrupt("return", !1);
                                case 2:
                                    return e.next = 4, this.search(this.currentSearch.query);
                                case 4:
                                    if (t = e.sent) {
                                        e.next = 7;
                                        break
                                    }
                                    return e.abrupt("return", !1);
                                case 7:
                                    if (r = t.element, !(t.results > 0 && r)) {
                                        e.next = 21;
                                        break
                                    }
                                    if (n = r.cloneNode(!0), (a = this.getList()) ? a.replaceWith(n) : this.append(n), n.id = this.input.getAttribute("aria-owns") || "", n.style.display = "block", s = this.getList()) {
                                        e.next = 17;
                                        break
                                    }
                                    return e.abrupt("return", !1);
                                case 17:
                                    return zr(this.input, s), e.abrupt("return", !0);
                                case 21:
                                    return e.abrupt("return", !1);
                                case 22:
                                case "end":
                                    return e.stop()
                            }
                        }, e, this)
                    }));
                    return function() {
                        return e.apply(this, arguments)
                    }
                }()
            }, {
                key: "searchQuery",
                value: function() {
                    var e = this.input.selectionEnd,
                        t = this.input.value.substring(0, e).match(this.matchRegExp);
                    if (t) return this.normalizeMatch(e, t)
                }
            }, {
                key: "normalizeMatch",
                value: function(e, t) {
                    var r = e - t[2].length,
                        n = e;
                    return {
                        query: t[3],
                        startIndex: r,
                        endIndex: n
                    }
                }
            }, {
                key: "getValue",
                value: function(e) {
                    return e.getAttribute("data-value")
                }
            }, {
                key: "search",
                value: function(e) {
                    throw new Error("Searching with " + e + ", but search function is not definied")
                }
            }]), t
        }(),
        ws = function(e) {
            function t() {
                Q(this, t);
                var e = te(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
                return e.matchRegExp = /(^|\s|\()(:([a-z0-9\-+_]*))$/i, e.replacePattern = "$1$value ", e
            }
            return ee(t, Ls), Y(t, [{
                key: "search",
                value: function(e) {
                    var t = " " + e.toLowerCase().replace(/_/g, " "),
                        r = At(this.suggestionContainer, t, {
                            limit: 5,
                            text: ks,
                            score: Es
                        });
                    if (!this.suggestionContainer) throw new Error("suggestionContainer is null");
                    return Promise.resolve({
                        element: this.suggestionContainer,
                        results: r
                    })
                }
            }, {
                key: "getValue",
                value: function(e) {
                    if (e.hasAttribute("data-use-colon-emoji")) return e.getAttribute("data-value");
                    var t = e.firstElementChild;
                    return t && "G-EMOJI" === t.tagName && !t.firstElementChild ? t.textContent : e.getAttribute("data-value")
                }
            }]), t
        }(),
        xs = {};
 
    function ks(e) {
        var t = e.getAttribute("data-emoji-name") || "";
        return xs[t] = " " + function(e) {
            return (e.getAttribute("data-text") || "").trim().toLowerCase()
        }(e).replace(/_/g, " "), t
    }
 
    function Es(e, t) {
        var r = xs[e].indexOf(t);
        return r > -1 ? 1e3 - r : 0
    }
 
    function Ts() {
        var t = !0,
            r = !1,
            n = void 0;
        try {
            for (var a, s = document.querySelectorAll(".js-newsletter-frequency-choice.selected")[Symbol.iterator](); !(t = (a = s.next()).done); t = !0) {
                a.value.classList.remove("selected")
            }
        } catch (e) {
            r = !0, n = e
        } finally {
            try {
                !t && s.return && s.return()
            } finally {
                if (r) throw n
            }
        }
        var o = e.query(document, ".js-newsletter-frequency-radio:enabled:checked");
        e.closest(o, ".js-newsletter-frequency-choice").classList.add("selected")
    }
    window.customElements.get("emoji-suggester") || (window.EmojiSuggesterElement = ws, window.customElements.define("emoji-suggester", ws)), t.observe(".js-subscription-toggle", function() {
        Ts()
    }), r.on("change", ".js-newsletter-frequency-radio", function() {
        Ts()
    }), c.remoteForm(".js-subscription-toggle", function() {
        var t = X(regeneratorRuntime.mark(function t(r, n) {
            var a;
            return regeneratorRuntime.wrap(function(t) {
                for (;;) switch (t.prev = t.next) {
                    case 0:
                        return t.next = 2, n.text();
                    case 2:
                        (a = e.query(r, ".selected .notice")).classList.add("visible"), setTimeout(function() {
                            a.classList.remove("visible")
                        }, 2e3);
                    case 5:
                    case "end":
                        return t.stop()
                }
            }, t, this)
        }));
        return function(e, r) {
            return t.apply(this, arguments)
        }
    }()), c.remoteForm(".js-explore-newsletter-form", function() {
        var t = X(regeneratorRuntime.mark(function t(r, n) {
            var a;
            return regeneratorRuntime.wrap(function(t) {
                for (;;) switch (t.prev = t.next) {
                    case 0:
                        return t.next = 2, n.html();
                    case 2:
                        a = t.sent, e.closest(r, ".js-explore-newsletter-container").replaceWith(a.html);
                    case 5:
                    case "end":
                        return t.stop()
                }
            }, t, this)
        }));
        return function(e, r) {
            return t.apply(this, arguments)
        }
    }());
    var qs = function() {
            function e(t) {
                Q(this, e), this.files = Array.from(t), this.percentages = this.files.map(function() {
                    return 0
                }), this.size = this.files.length, this.total = this.files.reduce(function(e, t) {
                    return e + t.size
                }, 0), this.uploaded = 0
            }
            return Y(e, [{
                key: "percent",
                value: function() {
                    var e = this,
                        t = this.files.map(function(t, r) {
                            return t.size * e.percentages[r] / 100
                        }).reduce(function(e, t) {
                            return e + t
                        });
                    return Math.round(t / this.total * 100)
                }
            }, {
                key: "progress",
                value: function(e, t) {
                    var r = this.files.indexOf(e);
                    this.percentages[r] = t
                }
            }, {
                key: "completed",
                value: function() {
                    this.uploaded += 1
                }
            }, {
                key: "isFinished",
                value: function() {
                    return this.uploaded === this.files.length
                }
            }]), e
        }(),
        Ss = ["is-default", "is-uploading", "is-bad-file", "is-duplicate-filename", "is-too-big", "is-too-many", "is-hidden-file", "is-failed", "is-bad-dimensions", "is-empty", "is-bad-permissions", "is-repository-required", "is-bad-format"];
 
    function As(e, t) {
        var r;
        (r = e.classList).remove.apply(r, Ss), e.classList.add(t)
    }
    var Ms = new(function() {
            function e() {
                Q(this, e), this.uploads = [], this.busy = !1
            }
            return Y(e, [{
                key: "upload",
                value: function(e) {
                    this.uploads.push(e), this.process()
                }
            }, {
                key: "process",
                value: function() {
                    var e = this;
                    if (!this.busy && 0 !== this.uploads.length) {
                        var t = this.uploads.shift();
                        this.busy = !0;
                        var r = new XMLHttpRequest;
                        for (var n in r.open("POST", t.to, !0), t.header) r.setRequestHeader(n, t.header[n]);
                        r.onloadstart = function() {
                            t.start()
                        }, r.onload = function() {
                            204 === r.status ? t.complete({}) : 201 === r.status ? t.complete(JSON.parse(r.responseText)) : t.error({
                                status: r.status,
                                body: r.responseText
                            }), e.busy = !1, e.process()
                        }, r.onerror = function() {
                            t.error({
                                status: 0,
                                body: ""
                            }), e.busy = !1, e.uploads = []
                        }, r.upload.onprogress = function(e) {
                            if (e.lengthComputable) {
                                var r = Math.round(e.loaded / e.total * 100);
                                t.progress(r)
                            }
                        };
                        var a = new FormData;
                        for (var s in t.sameOrigin && a.append("authenticity_token", t.csrf), t.form) a.append(s, t.form[s]);
                        a.append("file", t.file), r.send(a)
                    }
                }
            }]), e
        }()),
        Hs = function() {
            var e = X(regeneratorRuntime.mark(function e(t, n) {
                var a, s, o, i, u, c, l, d, m, f, p, v, g;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                        case 0:
                            a = !0, s = !1, o = void 0, e.prev = 3, i = t.files[Symbol.iterator]();
                        case 5:
                            if (a = (u = i.next()).done) {
                                e.next = 37;
                                break
                            }
                            if (c = u.value, l = Is(c, n), d = [], r.fire(n, "upload:setup", {
                                    batch: t,
                                    file: c,
                                    policyRequest: l.options,
                                    preprocess: d
                                })) {
                                e.next = 11;
                                break
                            }
                            return e.abrupt("return");
                        case 11:
                            return e.prev = 11, e.next = 14, Promise.all(d);
                        case 14:
                            return e.next = 16, k.fetchJSON(l.url, l.options);
                        case 16:
                            m = e.sent, Ms.upload(Rs(t, c, m, n)), e.next = 34;
                            break;
                        case 20:
                            if (e.prev = 20, e.t0 = e.catch(11), r.fire(n, "upload:invalid", {
                                    batch: t,
                                    file: c,
                                    error: e.t0
                                }), !e.t0.response) {
                                e.next = 32;
                                break
                            }
                            return e.next = 26, e.t0.response.text();
                        case 26:
                            f = e.sent, p = e.t0.response.status, v = Cs({
                                status: p,
                                body: f
                            }, c), As(n, v), e.next = 34;
                            break;
                        case 32:
                            g = Cs({
                                status: 0,
                                body: ""
                            }), As(n, g);
                        case 34:
                            a = !0, e.next = 5;
                            break;
                        case 37:
                            e.next = 43;
                            break;
                        case 39:
                            e.prev = 39, e.t1 = e.catch(3), s = !0, o = e.t1;
                        case 43:
                            e.prev = 43, e.prev = 44, !a && i.return && i.return();
                        case 46:
                            if (e.prev = 46, !s) {
                                e.next = 49;
                                break
                            }
                            throw o;
                        case 49:
                            return e.finish(46);
                        case 50:
                            return e.finish(43);
                        case 51:
                        case "end":
                            return e.stop()
                    }
                }, e, this, [
                    [3, 39, 43, 51],
                    [11, 20],
                    [44, , 46, 50]
                ])
            }));
            return function(t, r) {
                return e.apply(this, arguments)
            }
        }();
 
    function Is(t, r) {
        var n = e.getAttribute(r, "data-upload-policy-url"),
            a = r.getAttribute("data-upload-repository-id"),
            s = r.getAttribute("data-upload-policy-authenticity-token");
        null == s && (s = _s(r));
        var o = new FormData;
        return o.append("name", t.name), o.append("size", String(t.size)), o.append("content_type", t.type), o.append("authenticity_token", s), a && o.append("repository_id", a), t._path && o.append("directory", String(t._path)), {
            url: n,
            options: {
                method: "post",
                body: o,
                headers: {}
            }
        }
    }
 
    function Rs(e, t, n, a) {
        var s = n.upload_authenticity_token;
        null == s && (s = _s(a));
        var o = n.asset_upload_authenticity_token;
        return null == o && (o = _s(a)), {
            file: t,
            to: n.upload_url,
            form: n.form,
            header: n.header,
            sameOrigin: n.same_origin,
            csrf: s,
            start: function() {
                As(a, "is-uploading"), r.fire(a, "upload:start", {
                    batch: e,
                    file: t,
                    policy: n
                })
            },
            progress: function(n) {
                e.progress(t, n), r.fire(a, "upload:progress", {
                    batch: e,
                    file: t,
                    percent: n
                })
            },
            complete: function(s) {
                if (e.completed(), s && s.href && (n.asset || (n.asset = {}), n.asset.href = s.href), n.asset_upload_url && n.asset_upload_url.length > 0) {
                    var i = new FormData;
                    i.append("authenticity_token", o), k.fetchJSON(n.asset_upload_url, {
                        method: "put",
                        body: i
                    })
                }
                r.fire(a, "upload:complete", {
                    batch: e,
                    file: t,
                    policy: n,
                    result: s
                }), As(a, "is-default")
            },
            error: function(s) {
                r.fire(a, "upload:error", {
                    batch: e,
                    file: t,
                    policy: n
                });
                var o = Cs(s);
                As(a, o)
            }
        }
    }
 
    function _s(t) {
        var r = e.closest(t, "form", HTMLFormElement);
        return e.namedItem(r, "authenticity_token").value
    }
 
    function Cs(e, t) {
        if (400 === e.status) return "is-bad-file";
        if (422 !== e.status) return "is-failed";
        var r = JSON.parse(e.body);
        if (!r || !r.errors) return "is-failed";
        var n = !0,
            a = !1,
            s = void 0;
        try {
            for (var o, i = r.errors[Symbol.iterator](); !(n = (o = i.next()).done); n = !0) {
                var u = o.value;
                switch (u.field) {
                    case "size":
                        var c = t ? t.size : null;
                        return null != c && 0 === parseInt(c) ? "is-empty" : "is-too-big";
                    case "file_count":
                        return "is-too-many";
                    case "width":
                    case "height":
                        return "is-bad-dimensions";
                    case "name":
                        return "already_exists" === u.code ? "is-duplicate-filename" : "is-bad-file";
                    case "content_type":
                        return "is-bad-file";
                    case "uploader_id":
                        return "is-bad-permissions";
                    case "repository_id":
                        return "is-repository-required";
                    case "format":
                        return "is-bad-format"
                }
            }
        } catch (e) {
            a = !0, s = e
        } finally {
            try {
                !n && i.return && i.return()
            } finally {
                if (a) throw s
            }
        }
        return "is-failed"
    }
    var Fs = function() {
            var e = X(regeneratorRuntime.mark(function e(t, r) {
                var n, a;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                        case 0:
                            if (!r.getFilesAndDirectories) {
                                e.next = 8;
                                break
                            }
                            return e.next = 3, r.getFilesAndDirectories();
                        case 3:
                            return n = e.sent, a = Us(n).map(function(e) {
                                return Fs(r.path, e)
                            }), e.abrupt("return", Promise.all(a));
                        case 8:
                            return r._path = t, e.abrupt("return", Promise.resolve(r));
                        case 10:
                        case "end":
                            return e.stop()
                    }
                }, e, this)
            }));
            return function(t, r) {
                return e.apply(this, arguments)
            }
        }(),
        Ps = function() {
            var e = X(regeneratorRuntime.mark(function e(t) {
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                        case 0:
                            return e.t0 = Bs, e.next = 3, Fs("", t);
                        case 3:
                            return e.t1 = e.sent, e.abrupt("return", (0, e.t0)(e.t1));
                        case 5:
                        case "end":
                            return e.stop()
                    }
                }, e, this)
            }));
            return function(t) {
                return e.apply(this, arguments)
            }
        }(),
        Ns = function() {
            var e = X(regeneratorRuntime.mark(function e(t, r) {
                var n, a, s;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                        case 0:
                            if (!r.isDirectory) {
                                e.next = 8;
                                break
                            }
                            return e.next = 3, zs(r);
                        case 3:
                            return n = e.sent, a = Us(n).map(function(e) {
                                return Ns(r.fullPath, e)
                            }), e.abrupt("return", Promise.all(a));
                        case 8:
                            return e.next = 10, Vs(r);
                        case 10:
                            return (s = e.sent)._path = t, e.abrupt("return", s);
                        case 13:
                        case "end":
                            return e.stop()
                    }
                }, e, this)
            }));
            return function(t, r) {
                return e.apply(this, arguments)
            }
        }(),
        Ds = function() {
            var e = X(regeneratorRuntime.mark(function e(t) {
                var r, n;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                        case 0:
                            return r = Array.from(t.items).map(function(e) {
                                return e.webkitGetAsEntry()
                            }), n = Us(r).map(function(e) {
                                return Ns("", e)
                            }), e.t0 = Bs, e.next = 5, Promise.all(n);
                        case 5:
                            return e.t1 = e.sent, e.abrupt("return", (0, e.t0)(e.t1));
                        case 7:
                        case "end":
                            return e.stop()
                    }
                }, e, this)
            }));
            return function(t) {
                return e.apply(this, arguments)
            }
        }();
 
    function Os(e, t) {
        return t && e.getFilesAndDirectories ? Ps(e) : t && function(e) {
            return e.items && Array.from(e.items).some(function(e) {
                var t = e.webkitGetAsEntry && e.webkitGetAsEntry();
                return t && t.isDirectory
            })
        }(e) ? Ds(e) : Promise.resolve(Us(Array.from(e.files)))
    }
 
    function Bs(e) {
        return e.reduce(function(e, t) {
            return e.concat(Array.isArray(t) ? Bs(t) : t)
        }, [])
    }
 
    function Us(e) {
        return Array.from(e).filter(function(e) {
            return ! function(e) {
                return e.name.startsWith(".")
            }(e)
        })
    }
 
    function Vs(e) {
        return new Promise(function(t, r) {
            e.file(t, r)
        })
    }
 
    function zs(e) {
        return new Promise(function(t, r) {
            e.createReader().readEntries(t, r)
        })
    }
    var Ws = function() {
        var e = X(regeneratorRuntime.mark(function e(t, n) {
            var a, s;
            return regeneratorRuntime.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                    case 0:
                        return e.next = 2, Os(n, t.hasAttribute("data-directory-upload"));
                    case 2:
                        if ((a = e.sent).length) {
                            e.next = 6;
                            break
                        }
                        return As(t, "is-hidden-file"), e.abrupt("return");
                    case 6:
                        s = Js.bind(null, a), !r.fire(t, "upload:drop:setup", {
                            upload: s,
                            files: a
                        }) || Js(a, t);
                    case 9:
                    case "end":
                        return e.stop()
                }
            }, e, this)
        }));
        return function(t, r) {
            return e.apply(this, arguments)
        }
    }();
 
    function $s() {
        return Reflect.construct(HTMLElement, [], this.__proto__.constructor)
    }
    Object.setPrototypeOf($s.prototype, HTMLElement.prototype), Object.setPrototypeOf($s, HTMLElement);
    var Ks = function(e) {
        function t() {
            Q(this, t);
            var e = te(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
            return e.addEventListener("dragenter", Qs), e.addEventListener("dragover", Qs), e.addEventListener("dragleave", Ys), e.addEventListener("drop", Zs), e.addEventListener("paste", eo), e
        }
        return ee(t, $s), Y(t, [{
            key: "connectedCallback",
            value: function() {}
        }, {
            key: "upload",
            value: function(e) {
                Js(e, this)
            }
        }]), t
    }();
 
    function Js(e, t) {
        var r = new qs(e);
        Hs(r, t)
    }
 
    function Gs(e) {
        return Array.from(e.types).indexOf("Files") >= 0
    }
    window.customElements.get("file-attachment") || (window.FileAttachmentElement = Ks, window.customElements.define("file-attachment", Ks));
    var Xs = null;
 
    function Qs(e) {
        var t = e.currentTarget;
        o(t instanceof Element, "app/assets/modules/github/file-attachment-element.js:65"), Xs && clearTimeout(Xs), Xs = setTimeout(function() {
            return t.classList.remove("dragover")
        }, 200);
        var r = e.dataTransfer;
        r && Gs(r) && (r.dropEffect = "copy", t.classList.add("dragover"), e.stopPropagation(), e.preventDefault())
    }
 
    function Ys(e) {
        e.dataTransfer && (e.dataTransfer.dropEffect = "none"), o(e.currentTarget instanceof Element, "app/assets/modules/github/file-attachment-element.js:88"), e.currentTarget.classList.remove("dragover"), e.stopPropagation(), e.preventDefault()
    }
 
    function Zs(e) {
        var t = e.currentTarget;
        if (t instanceof Element) {
            t.classList.remove("dragover");
            var r = e.dataTransfer;
            r && Gs(r) && (Ws(t, r), e.stopPropagation(), e.preventDefault())
        }
    }
 
    function eo(e) {
        if (e.clipboardData && e.clipboardData.items) {
            var t = e.currentTarget;
            if (t instanceof Element) {
                var r = Array.from(e.clipboardData.items).map(function(e) {
                    return [e, function(e) {
                        switch (e) {
                            case "image/gif":
                                return "image.gif";
                            case "image/png":
                                return "image.png";
                            case "image/jpeg":
                                return "image.jpg"
                        }
                    }(e.type)]
                }).filter(function(e) {
                    return e[1]
                }).shift();
                if (r) {
                    var n = re(r, 1)[0].getAsFile();
                    n && (Js([n], t), e.preventDefault())
                }
            }
        }
    }
 
    function to() {
        za(document) && function(e) {
            var t = E.findFragmentTarget(e);
            t && Va(t)
        }(document)
    }
    H(to), r.on("click", "a[href]", function(e) {
        e.currentTarget instanceof HTMLAnchorElement && setTimeout(to, 0)
    });
    var ro = function e(t) {
            Q(this, e), this.name = t.getAttribute("data-theme-name") || "", this.slug = t.getAttribute("data-theme-slug") || "", this.gem = t.getAttribute("data-theme-gem") || "", this.selected = t.classList.contains("selected"), this.baseHref = t.getAttribute("href") || ""
        },
        no = function() {
            function t() {
                var r = this;
                Q(this, t), this.pagePreview = e.query(document, "#page-preview"), this.contextLoader = e.query(document, ".theme-picker-spinner"), this.fullPicker = e.query(document, ".theme-picker-thumbs"), this.miniPicker = e.query(document, ".theme-picker-controls"), this.scrollBackwardsLink = e.query(document, ".theme-toggle-full-left", HTMLButtonElement), this.scrollForwardsLink = e.query(document, ".theme-toggle-full-right", HTMLButtonElement), this.themeLinksContainer = e.query(this.fullPicker, ".js-theme-selector"), this.themeLinks = e.querySelectorAll(this.themeLinksContainer, ".theme-selector-thumbnail"), this.themes = this.themeLinks.map(function(e) {
                    var t = new ro(e);
                    return t.selected && (r.selectedTheme = t), t
                }), this.scrolledPage = 0, this.selectedTheme = this.selectedTheme || this.themes[0], this.pagePreview.addEventListener("load", function() {
                    return r.onPagePreviewLoad()
                }), this.scrollBackwardsLink.addEventListener("click", function() {
                    return r.scrollThemeLinksContainer(-1)
                }), this.scrollForwardsLink.addEventListener("click", function() {
                    return r.scrollThemeLinksContainer(1)
                }), e.query(document, ".theme-picker-prev").addEventListener("click", function(e) {
                    return r.onThemeNavPrevClick(e)
                }), e.query(document, ".theme-picker-next").addEventListener("click", function(e) {
                    return r.onThemeNavNextClick(e)
                });
                var n = !0,
                    a = !1,
                    s = void 0;
                try {
                    for (var o, i = this.themeLinks[Symbol.iterator](); !(n = (o = i.next()).done); n = !0) {
                        o.value.addEventListener("click", function(e) {
                            return r.onThemeLinkClick(e)
                        })
                    }
                } catch (e) {
                    a = !0, s = e
                } finally {
                    try {
                        !n && i.return && i.return()
                    } finally {
                        if (a) throw s
                    }
                }
                e.query(document, ".theme-picker-view-toggle").addEventListener("click", function(e) {
                    return r.onHideClick(e)
                });
                var u = document.querySelector("#page-edit");
                u && u.addEventListener("click", function(e) {
                    return r.onEditClick(e)
                }), e.query(document, "#page-publish").addEventListener("click", function(e) {
                    return r.onPublishClick(e)
                }), this.theme(this.selectedTheme), this.updateScrollLinks()
            }
            return Y(t, [{
                key: "onPagePreviewLoad",
                value: function() {
                    this.contextLoader.classList.remove("visible")
                }
            }, {
                key: "onThemeNavPrevClick",
                value: function(e) {
                    this.theme(this.prevTheme()), e.preventDefault()
                }
            }, {
                key: "onThemeNavNextClick",
                value: function(e) {
                    this.theme(this.nextTheme()), e.preventDefault()
                }
            }, {
                key: "onThemeLinkClick",
                value: function(e) {
                    this.theme(this.themeForLink(e.currentTarget)), e.preventDefault()
                }
            }, {
                key: "onHideClick",
                value: function(e) {
                    var t = e.currentTarget;
                    o(t instanceof HTMLElement, "app/assets/modules/github/generated-pages-theme-picker.js:98"), this.fullPicker.classList.toggle("d-none"), this.miniPicker.classList.toggle("d-none"), this.scrollToTheme(this.theme(), !1), t.classList.toggle("open")
                }
            }, {
                key: "onEditClick",
                value: function(t) {
                    l.submit(e.query(document, "#page-edit-form", HTMLFormElement)), t.preventDefault()
                }
            }, {
                key: "onPublishClick",
                value: function(t) {
                    var r = e.query(document, "#page-publish-form", HTMLFormElement),
                        n = this.theme();
                    n && (e.query(document, 'input[name="page[theme_slug]"]', HTMLInputElement).value = n.slug), l.submit(r), t.preventDefault()
                }
            }, {
                key: "scrollThemeLinksContainer",
                value: function(e) {
                    this.scrollToTheme(this.themes[e < 0 ? 0 : 6]), this.updateScrollLinks()
                }
            }, {
                key: "updateScrollLinks",
                value: function() {
                    var e = 0 === this.scrolledPage;
                    this.scrollBackwardsLink.disabled = e, this.scrollBackwardsLink.classList.toggle("disabled", e), this.scrollForwardsLink.disabled = !e, this.scrollForwardsLink.classList.toggle("disabled", !e)
                }
            }, {
                key: "selectedThemeIndex",
                value: function() {
                    return this.themes.indexOf(this.selectedTheme)
                }
            }, {
                key: "prevTheme",
                value: function() {
                    var e = (this.selectedThemeIndex() - 1) % this.themes.length;
                    return e < 0 && (e += this.themes.length), this.themes[e]
                }
            }, {
                key: "nextTheme",
                value: function() {
                    return this.themes[(this.selectedThemeIndex() + 1) % this.themes.length]
                }
            }, {
                key: "themeForLink",
                value: function(e) {
                    return this.themes[this.themeLinks.indexOf(e)]
                }
            }, {
                key: "linkForTheme",
                value: function(e) {
                    return this.themeLinks[this.themes.indexOf(e)]
                }
            }, {
                key: "scrollToTheme",
                value: function(e) {
                    var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
                    this.scrolledPage = Math.floor(this.themes.indexOf(e) / 6);
                    var r = 0;
                    if (this.scrolledPage > 0) {
                        var n = this.linkForTheme(this.themes[6 * this.scrolledPage]);
                        r = n.offsetLeft
                    }
                    var a, s = this.themeLinksContainer,
                        o = r - s.scrollLeft;
                    if (t && 0 !== o) {
                        a = function(e) {
                            if (!(e < 0)) {
                                var t = s.scrollLeft;
                                return s.scrollLeft = Math[r - t > 0 ? "min" : "max"](t + o * (e / 150), r), t !== s.scrollLeft && void 0
                            }
                        }, new Promise(function(e) {
                            var t = performance.now();
                            ! function r() {
                                window.requestAnimationFrame(function(n) {
                                    !1 !== a(n - t) ? (t = n, r()) : e()
                                })
                            }()
                        })
                    } else s.scrollLeft = r
                }
            }, {
                key: "theme",
                value: function(t) {
                    if (!t) return this.selectedTheme;
                    this.selectedTheme = t, this.showPreviewFor(t);
                    var r = !0,
                        n = !1,
                        a = void 0;
                    try {
                        for (var s, o = this.themeLinks[Symbol.iterator](); !(r = (s = o.next()).done); r = !0) {
                            s.value.classList.remove("selected")
                        }
                    } catch (e) {
                        n = !0, a = e
                    } finally {
                        try {
                            !r && o.return && o.return()
                        } finally {
                            if (n) throw a
                        }
                    }
                    this.linkForTheme(t).classList.add("selected"), this.scrollToTheme(t), e.query(this.miniPicker, ".js-theme-name").textContent = t.name
                }
            }, {
                key: "showPreviewFor",
                value: function(t) {
                    if (this.contextLoader.classList.add("visible"), t.gem) this.pagePreview.setAttribute("src", t.baseHref);
                    else {
                        var r = e.query(this.fullPicker, "form", HTMLFormElement);
                        e.query(document, 'input[name="theme_slug"]', HTMLInputElement).value = t.slug, l.submit(r)
                    }
                }
            }]), t
        }();
 
    function ao() {
        var e = document.querySelector(".js-get-repo-modal");
        if (e) {
            e.classList.remove("is-downloading");
            var t = !0,
                r = !1,
                n = void 0;
            try {
                for (var a, s = e.querySelectorAll(".js-modal-download-mac, .js-modal-download-windows, .js-modal-download-xcode, .js-modal-download-visual-studio")[Symbol.iterator](); !(t = (a = s.next()).done); t = !0) {
                    var o = a.value;
                    o.classList.remove("d-block"), o.classList.add("d-none")
                }
            } catch (e) {
                r = !0, n = e
            } finally {
                try {
                    !t && s.return && s.return()
                } finally {
                    if (r) throw n
                }
            }
        }
    }
 
    function so(e) {
        var t = document.querySelectorAll(e);
        if (t.length > 0) return t[t.length - 1]
    }
 
    function oo() {
        return ((t = so("meta[name=analytics-location]")) instanceof HTMLMetaElement ? t.content : window.location.pathname) + function() {
            var t = "";
            so("meta[name=analytics-location-query-strip]") || (t = window.location.search);
            var r = so("meta[name=analytics-location-params]");
            r instanceof HTMLMetaElement && (t += (t ? "&" : "?") + r.content);
            var n = !0,
                a = !1,
                s = void 0;
            try {
                for (var o, i = e.querySelectorAll(document, "meta[name=analytics-param-rename]", HTMLMetaElement)[Symbol.iterator](); !(n = (o = i.next()).done); n = !0) {
                    var u = o.value.content.split(":", 2);
                    t = t.replace(new RegExp("(^|[?&])" + u[0] + "($|=)", "g"), "$1" + u[1] + "$2")
                }
            } catch (e) {
                a = !0, s = e
            } finally {
                try {
                    !n && i.return && i.return()
                } finally {
                    if (a) throw s
                }
            }
            return t
        }();
        var t
    }
 
    function io() {
        var t = window.location.protocol + "//" + window.location.host + oo();
        I.setGlobalLocation(t), I.setGlobalTitle(so("meta[name=analytics-location]") ? "(masked)" : document.title);
        var r = so("meta[name=analytics-ec-payload]");
        r instanceof HTMLMetaElement && uo(r.content);
        var n = w.getItem("ga-deferred");
        n && (uo(n), w.removeItem("ga-deferred"));
        var a = !0,
            s = !1,
            o = void 0;
        try {
            for (var i, u = e.querySelectorAll(document, "meta.js-ga-set", HTMLMetaElement)[Symbol.iterator](); !(a = (i = u.next()).done); a = !0) {
                var c = i.value;
                I.setDimension(c.name, c.content)
            }
        } catch (e) {
            s = !0, o = e
        } finally {
            try {
                !a && u.return && u.return()
            } finally {
                if (s) throw o
            }
        }
    }
 
    function uo(e) {
        if (e) {
            var t = !0,
                r = !1,
                n = void 0;
            try {
                for (var a, s = JSON.parse(e)[Symbol.iterator](); !(t = (a = s.next()).done); t = !0) {
                    var o = a.value;
                    window.ga.apply(null, o)
                }
            } catch (e) {
                r = !0, n = e
            } finally {
                try {
                    !t && s.return && s.return()
                } finally {
                    if (r) throw n
                }
            }
        }
    }
 
    function co() {
        var e = !0,
            t = !1,
            r = void 0;
        try {
            for (var n, a = document.querySelectorAll("meta[name=analytics-virtual-pageview]")[Symbol.iterator](); !(e = (n = a.next()).done); e = !0) {
                var s = n.value;
                s instanceof HTMLMetaElement && I.trackPageview(s.content, {
                    title: ""
                })
            }
        } catch (e) {
            t = !0, r = e
        } finally {
            try {
                !e && a.return && a.return()
            } finally {
                if (t) throw r
            }
        }
        I.trackPageview()
    }
 
    function lo(e) {
        var t = e.trim().split(/\s*,\s*/),
            r = re(t, 4),
            n = r[0],
            a = r[1],
            s = r[2],
            o = r[3],
            i = {
                category: n,
                action: a,
                label: s
            };
        return o && (i.value = Number(o)), i
    }
    t.observe("#theme-picker-wrap", function() {
        new no
    }), r.on("click", ".email-hidden-toggle", function(e) {
        var t = e.currentTarget.nextElementSibling;
        o(t instanceof HTMLElement, "app/assets/modules/github/gfm.js:11"), t.style.display = "", t.classList.toggle("expanded"), e.preventDefault()
    }), r.on("click", ".js-git-clone-help-container .js-git-clone-help-switcher", function(t) {
        var r = t.currentTarget,
            n = e.closest(r, ".js-git-clone-help-container"),
            a = r.getAttribute("data-url") || "";
        if (e.query(n, ".js-git-clone-help-field", HTMLInputElement).value = a, r.matches(".js-git-protocol-clone-url")) {
            var s = !0,
                o = !1,
                i = void 0;
            try {
                for (var u, c = n.querySelectorAll(".js-git-clone-help-text")[Symbol.iterator](); !(s = (u = c.next()).done); s = !0) {
                    u.value.textContent = a
                }
            } catch (e) {
                o = !0, i = e
            } finally {
                try {
                    !s && c.return && c.return()
                } finally {
                    if (o) throw i
                }
            }
        }
        var l = n.querySelector(".js-clone-url-button.selected");
        l && l.classList.remove("selected"), e.closest(r, ".js-clone-url-button").classList.add("selected")
    }), r.on("click", ".js-get-repo", function(t) {
        var r = e.getAttribute(t.currentTarget, "data-open-app");
        ! function(e, t) {
            e.classList.add("is-downloading");
            var r = void 0;
            switch (t) {
                case "mac":
                    r = e.querySelector(".js-modal-download-mac");
                    break;
                case "windows":
                    r = e.querySelector(".js-modal-download-windows");
                    break;
                case "xcode":
                    r = e.querySelector(".js-modal-download-xcode");
                    break;
                case "visual-studio":
                    r = e.querySelector(".js-modal-download-visual-studio")
            }
            r && (r.classList.remove("d-none"), r.classList.add("d-block"))
        }(e.closest(t.currentTarget, ".js-get-repo-modal"), r)
    }), r.on("toggle", ".js-get-repo-select-menu", ao, {
        capture: !0
    }), r.on("click", ".js-get-repo-modal-download-back", ao), I.providePlugin("octolyticsPlugin", function(e) {
        var t = e.get("sendHitTask");
        e.set("sendHitTask", function(e) {
            t(e), "event" === e.get("hitType") && null != window._octo && g.guaranteedPost("//" + window._octo.host + "/collect", e.get("hitPayload"), "application/x-www-form-urlencoded")
        })
    });
    var mo = document.querySelector("meta[name=google-analytics]");
    mo instanceof HTMLMetaElement && (I.setGlobalAccount(mo.content, "auto"), I.requirePlugin("octolyticsPlugin"), I.requirePlugin("ec"), io()), X(regeneratorRuntime.mark(function e() {
        return regeneratorRuntime.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
                case 0:
                    return e.next = 2, h.ready;
                case 2:
                    co();
                case 3:
                case "end":
                    return e.stop()
            }
        }, e, this)
    }))(), document.addEventListener("pjax:complete", function() {
        setTimeout(function() {
            io(), co()
        }, 20)
    }, !1), t.observe("[data-ga-load]", function(e) {
        var t = lo(e.getAttribute("data-ga-load") || "");
        t.interactive = !1, I.trackEvent(t)
    }), t.observe("meta[name=analytics-event]", {
        constructor: HTMLMetaElement,
        initialize: function(e) {
            var t = lo(e.content);
            t.interactive = !1, I.trackEvent(t)
        }
    }), r.on("click", "[data-ga-click]", function(e) {
        uo(e.currentTarget.getAttribute("data-ga-ec"));
        var t = lo(e.currentTarget.getAttribute("data-ga-click") || "");
        I.trackEvent(t)
    }, {
        capture: !0
    }), r.on("click", "[data-ga-deferred]", function(e) {
        w.setItem("ga-deferred", e.currentTarget.getAttribute("data-ga-deferred") || "")
    }, {
        capture: !0
    }), r.on("change", "[data-ga-change]", function(e) {
        uo(e.currentTarget.getAttribute("data-ga-ec"));
        var t = lo(e.currentTarget.getAttribute("data-ga-change") || "");
        I.trackEvent(t)
    }, {
        capture: !0
    }), r.on("click", ".js-skip-to-content", function(e) {
        var t = document.getElementById("start-of-content");
        if (t) {
            var r = t.nextElementSibling;
            r instanceof HTMLElement && (r.setAttribute("tabindex", "-1"), r.focus())
        }
        e.preventDefault()
    });
    var fo = "ontouchstart" in document;
    var po = !0,
        vo = !1,
        go = void 0;
    try {
        for (var ho, yo = document.querySelectorAll(".HeaderMenu-details")[Symbol.iterator](); !(po = (ho = yo.next()).done); po = !0) {
            var bo = ho.value;
            bo.addEventListener("toggle", Lo), fo || (bo.addEventListener("mouseover", wo), bo.addEventListener("mouseleave", wo))
        }
    } catch (e) {
        vo = !0, go = e
    } finally {
        try {
            !po && yo.return && yo.return()
        } finally {
            if (vo) throw go
        }
    }
    var jo = !1;
 
    function Lo(e) {
        if (!jo) {
            jo = !0;
            var t = !0,
                r = !1,
                n = void 0;
            try {
                for (var a, s = document.querySelectorAll(".HeaderMenu-details")[Symbol.iterator](); !(t = (a = s.next()).done); t = !0) {
                    var o = a.value;
                    o !== e.currentTarget && o.removeAttribute("open")
                }
            } catch (e) {
                r = !0, n = e
            } finally {
                try {
                    !t && s.return && s.return()
                } finally {
                    if (r) throw n
                }
            }
            setTimeout(function() {
                return jo = !1
            })
        }
    }
 
    function wo(e) {
        var t = e.currentTarget;
        t instanceof HTMLElement && window.innerWidth > 1012 && ("mouseover" === e.type ? e.target instanceof Node && e.relatedTarget instanceof Node && t.contains(e.target) && !t.contains(e.relatedTarget) && t.setAttribute("open", "") : t.removeAttribute("open"))
    }
 
    function xo(t) {
        if (window._octo) {
            var r = Math.floor((new Date).getTime() / 1e3);
            t.timestamp = r;
            if (document.head && document.head.querySelector('meta[name="octolytics-event-url"]')) {
                var n = e.query(document.head, 'meta[name="octolytics-event-url"]', HTMLMetaElement).content;
                g.guaranteedPost(n, JSON.stringify(t), "text/plain")
            }
        }
    }
    r.on("click", ".js-video-play, .js-video-close", function(t) {
        t.preventDefault();
        var r = t.currentTarget,
            n = r.classList.contains("js-video-play"),
            a = e.closest(r, ".js-video-container"),
            s = e.query(a, ".js-video-iframe", HTMLIFrameElement),
            o = document.querySelector(".js-video-bg");
        n ? s.src = s.getAttribute("data-src") || "" : s.removeAttribute("src"), a.classList.toggle("is-expanded", n), null != o && o.classList.toggle("is-expanded", n),
            function(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                    r = e.getBoundingClientRect(),
                    n = r.top - t,
                    a = r.bottom - window.innerHeight + t;
                n < 0 ? window.scrollBy(0, n) : a > 0 && window.scrollBy(0, a)
            }(s, 20)
    }), r.on("click", "[data-octo-click]", function(e) {
        if (window._octo) {
            var t = e.currentTarget,
                r = t.getAttribute("data-octo-click") || "",
                n = {};
            n.event_type = r;
            var a = {},
                s = {},
                o = {},
                i = [];
            t.hasAttribute("data-octo-dimensions") && (i = (t.getAttribute("data-octo-dimensions") || "").split(","));
            var u = document.head ? document.head.querySelectorAll('meta[name^="octolytics-"]') : [],
                c = !0,
                l = !1,
                d = void 0;
            try {
                for (var m, f = u[Symbol.iterator](); !(c = (m = f.next()).done); c = !0) {
                    var p = m.value;
                    if (p instanceof HTMLMetaElement)
                        if (p.name.startsWith("octolytics-dimension-")) a[p.name.replace(/^octolytics-dimension-/, "")] = p.content;
                        else if (p.name.startsWith("octolytics-measure-")) {
                        s[p.name.replace(/^octolytics-measure-/, "")] = p.content
                    } else if (p.name.startsWith("octolytics-context-")) {
                        o[p.name.replace(/^octolytics-context-/, "")] = p.content
                    } else if (p.name.startsWith("octolytics-actor-")) {
                        a[p.name.replace(/^octolytics-/, "").replace(/-/g, "_")] = p.content
                    } else if (p.name.startsWith("octolytics-")) {
                        n[p.name.replace(/^octolytics-/, "").replace(/-/g, "_")] = p.content
                    }
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
            if (t.hasAttribute("data-ga-click")) {
                var v = (t.getAttribute("data-ga-click") || "").split(",").map(function(e) {
                    return e.trim()
                });
                a.category = v[0], a.action = v[1]
            }
            var g = !0,
                h = !1,
                y = void 0;
            try {
                for (var b, j = i[Symbol.iterator](); !(g = (b = j.next()).done); g = !0) {
                    var L = b.value.split(":");
                    a[L.shift()] = L.join(":")
                }
            } catch (e) {
                h = !0, y = e
            } finally {
                try {
                    !g && j.return && j.return()
                } finally {
                    if (h) throw y
                }
            }
            n.dimensions = a, n.measures = s, n.context = o, xo(n)
        }
    });
    var ko = function() {
            var e = X(regeneratorRuntime.mark(function e(t) {
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                        case 0:
                            return qo[t] || (qo[t] = s.fetchSafeDocumentFragment(document, t)), e.abrupt("return", qo[t]);
                        case 2:
                        case "end":
                            return e.stop()
                    }
                }, e, this)
            }));
            return function(t) {
                return e.apply(this, arguments)
            }
        }(),
        Eo = function() {
            var e = X(regeneratorRuntime.mark(function e(t, r) {
                var n, a, s, i, u;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                        case 0:
                            if (n = t.currentTarget, t instanceof MouseEvent && (Ho = t.clientX), o(n instanceof Element, "app/assets/modules/github/hovercards.js:273"), So !== n) {
                                e.next = 5;
                                break
                            }
                            return e.abrupt("return");
                        case 5:
                            if (!n.closest(".js-hovercard-content")) {
                                e.next = 7;
                                break
                            }
                            return e.abrupt("return");
                        case 7:
                            if (Vo(n)) {
                                e.next = 9;
                                break
                            }
                            return e.abrupt("return");
                        case 9:
                            return Do(), So = n, Ao = document.activeElement, a = Uo(n), s = void 0, e.prev = 14, i = new Promise(function(e) {
                                return setTimeout(e, r, 0)
                            }), e.next = 18, ko(a);
                        case 18:
                            return s = e.sent, e.next = 21, i;
                        case 21:
                            e.next = 37;
                            break;
                        case 23:
                            if (e.prev = 23, e.t0 = e.catch(14), !e.t0.response || 404 !== e.t0.response.status) {
                                e.next = 32;
                                break
                            }
                            return u = "Hovercard is unavailable", n.setAttribute("aria-label", u), n.classList.add("tooltipped", "tooltipped-ne"), e.abrupt("return");
                        case 32:
                            if (!/X-HTML-Safe/.test(e.t0.message)) {
                                e.next = 36;
                                break
                            }
                            return e.abrupt("return");
                        case 36:
                            throw e.t0;
                        case 37:
                            n === So && (Bo(s, n), t instanceof KeyboardEvent && To && To.focus());
                        case 38:
                        case "end":
                            return e.stop()
                    }
                }, e, this, [
                    [14, 23]
                ])
            }));
            return function(t, r) {
                return e.apply(this, arguments)
            }
        }(),
        To = document.querySelector(".js-hovercard-content"),
        qo = {},
        So = void 0,
        Ao = void 0,
        Mo = void 0,
        Ho = 0,
        Io = 12,
        Ro = 24,
        _o = Ro - 7,
        Co = 16,
        Fo = 100,
        Po = 250;
 
    function No(e) {
        return "Popover-message--" + e
    }
 
    function Do() {
        To && (To.style.display = "none", To.children[0].innerHTML = "", Ao = null, So = null)
    }
 
    function Oo(e) {
        o(To, "app/assets/modules/github/hovercards.js:109");
        var t = To.getBoundingClientRect(),
            r = t.width,
            n = t.height,
            a = function(e) {
                var t = e.getClientRects(),
                    r = t[0],
                    n = !0,
                    a = !1,
                    s = void 0;
                try {
                    for (var o, i = t[Symbol.iterator](); !(n = (o = i.next()).done); n = !0) {
                        var u = o.value;
                        if (u.left < Ho && u.right > Ho) {
                            r = u;
                            break
                        }
                    }
                } catch (e) {
                    a = !0, s = e
                } finally {
                    try {
                        !n && i.return && i.return()
                    } finally {
                        if (a) throw s
                    }
                }
                return r
            }(e),
            s = a.left,
            i = a.top,
            u = a.height,
            c = a.width,
            l = i > n;
        if (e.classList.contains("js-hovercard-left")) {
            var d = i + u / 2;
            return {
                containerTop: l ? d - n + _o + Co / 2 : d - _o - Co / 2,
                containerLeft: s - r - Io,
                contentClassSuffix: l ? "right-bottom" : "right-top"
            }
        }
        var m = window.innerWidth - s > r,
            f = s + c / 2;
        return {
            containerTop: l ? i - n - Io : i + u + Io,
            containerLeft: m ? f - Ro : f - r + Ro,
            contentClassSuffix: l ? m ? "bottom-left" : "bottom-right" : m ? "top-left" : "top-right"
        }
    }
 
    function Bo(e, t) {
        if (To) {
            var r = To.children[0];
            r.innerHTML = "";
            var n = document.createElement("div"),
                a = !0,
                s = !1,
                o = void 0;
            try {
                for (var i, u = e.children[Symbol.iterator](); !(a = (i = u.next()).done); a = !0) {
                    var c = i.value;
                    n.appendChild(c.cloneNode(!0))
                }
            } catch (e) {
                s = !0, o = e
            } finally {Ho
                try {
                    !a && u.return && u.return()
                } finally {
                    if (s) throw o
                }
            }
            r.appendChild(n),
                function(e, t) {
                    if (To) {
                        To.style.visibility = "hidden", To.style.display = "block", t.classList.remove(No("bottom-left"), No("bottom-right"), No("right-top"), No("right-bottom"), No("top-left"), No("top-right"));
                        var r = Oo(e),
                            n = r.containerTop,
                            a = r.containerLeft,
                            s = r.contentClassSuffix;
                        t.classList.add(No(s)), To.style.top = n + window.pageYOffset + "px", To.style.left = a + window.pageXOffset + "px", To.style.visibility = ""
                    }
                }(t, r),
                function(e) {
                    setTimeout(function() {
                        if (document.body && document.body.contains(e)) {
                            var t = e.querySelector("[data-hovercard-tracking]");
                            if (t) {
                                var r = t.getAttribute("data-hovercard-tracking");
                                if (r) {
                                    var n = {
                                        event_type: "user-hovercard-load"
                                    };
                                    n.dimensions = JSON.parse(r), xo(n)
                                }
                            }
                            var a = e.querySelector("[data-hydro-view]");
                            a && Ea(a)
                        }
                    }, 500)
                }(n), To.style.display = "block"
        }
    }
 
    function Uo(e) {
        var t = e.getAttribute("data-hovercard-url");
        if (t) {
            var r = function(e) {
                var t = e.closest("[data-hovercard-subject-tag]");
                if (t) return t.getAttribute("data-hovercard-subject-tag");
                var r = document.head && document.head.querySelector('meta[name="hovercard-subject-tag"]');
                return r ? r.getAttribute("content") : void 0
            }(e);
            if (r) {
                var n = new URL(t, window.location.origin),
                    a = new URLSearchParams(n.search.slice(1));
                return a.append("subject", r), a.append("current_path", window.location.pathname + window.location.search), n.search = a.toString(), n.toString()
            }
            return t
        }
        return ""
    }
 
    function Vo(e) {
        var t = e.getAttribute("data-hovercard-type");
        return "pull_request" === t || "issue" === t ? !!e.closest("[data-issue-and-pr-hovercards-enabled]") : "team" === t ? !!e.closest("[data-team-hovercards-enabled]") : "repository" === t ? !!e.closest("[data-repository-hovercards-enabled]") : "commit" !== t || !!e.closest("[data-commit-hovercards-enabled]")
    }
 
    function zo(e) {
        Eo(e, Po)
    }
 
    function Wo(e) {
        if (So) {
            if (e instanceof MouseEvent && e.relatedTarget instanceof HTMLElement) {
                var t = e.relatedTarget;
                if (t.closest(".js-hovercard-content") || t.closest("[data-hovercard-url]")) return
            } else e instanceof KeyboardEvent && Ao && Ao.focus();
            Do()
        }
    }
 
    function $o(e) {
        var t = So;
        Mo = setTimeout(function() {
            So === t && Wo(e)
        }, Fo)
    }
 
    function Ko(e) {
        switch (o(e instanceof KeyboardEvent, "app/assets/modules/github/hovercards.js:357"), e.key) {
            case "h":
            case "H":
                Eo(e);
                break;
            case "Escape":
                Wo(e)
        }
    }
 
    function Jo() {
        Mo && clearTimeout(Mo)
    }
 
    function Go() {
        var e = document.getElementById("js-update-integration-permissions");
        e && e.removeAttribute("disabled")
    }
 
    function Xo() {
        return (t = e.querySelectorAll(document, '[id^=integration_permission_]:checked:not([data-permission="none"])', HTMLInputElement), Array.from(t, function(e) {
            return e.getAttribute("data-resource")
        })).map(function(t) {
            return function(t) {
                if (t) return e.querySelectorAll(document, '.js-integration-hook-event[data-resource~="' + t + '"]:checked', HTMLInputElement)
            }(t)
        }).reduce(function(e, t) {
            return e.concat(t, [])
        }, []);
        var t
    }
 
    function Qo() {
        var t = e.query(document, ".js-content-references input", HTMLInputElement),
            r = e.query(document, ".js-content-references template", HTMLTemplateElement),
            n = e.query(document, ".js-content-references-domain-list"),
            a = t.value;
        if (a) {
            var s = r.content.cloneNode(!0);
            e.query(s, "input", HTMLInputElement).value = a, e.query(s, ".js-content-references-domain-url").textContent = a, t.value = "", n.appendChild(s), e.closest(n, ".Box").hidden = !1, Go()
        }
    }
    To && (t.observe("[data-hovercard-url]", {
        subscribe: function(e) {
            return y.fromEvent(e, "mouseover", zo)
        }
    }), t.observe("[data-hovercard-url]", {
        subscribe: function(e) {
            return y.fromEvent(e, "mouseleave", $o)
        }
    }), t.observe("[data-hovercard-url]", {
        subscribe: function(e) {
            return y.fromEvent(e, "keyup", Ko)
        }
    }), t.observe("[data-hovercard-url]", {
        add: function(e) {
            var t = [].concat(ae(e.querySelectorAll("a")));
            "A" === e.tagName && t.push(e);
            var r = !0,
                n = !1,
                a = void 0;
            try {
                for (var s, o = t[Symbol.iterator](); !(r = (s = o.next()).done); r = !0) s.value.setAttribute("aria-describedby", "hovercard-aria-description")
            } catch (e) {
                n = !0, a = e
            } finally {
                try {
                    !r && o.return && o.return()
                } finally {
                    if (n) throw a
                }
            }
        },
        remove: function(e) {
            So === e && Do()
        }
    }), t.observe(".js-hovercard-content", {
        subscribe: function(e) {
            return y.fromEvent(e, "mouseover", Jo)
        }
    }), t.observe(".js-hovercard-content", {
        subscribe: function(e) {
            return y.fromEvent(e, "mouseleave", Wo)
        }
    }), t.observe(".js-hovercard-content", {
        subscribe: function(e) {
            return y.fromEvent(e, "keyup", Ko)
        }
    }), r.on("menu:activated", ".js-select-menu", Do), window.addEventListener("statechange", Do)), t.observe(".js-scrollnav-listener", function(t) {
        window.addEventListener("scroll", function() {
            ! function(t) {
                var r = e.query(t, ".js-scrollnav").getBoundingClientRect().height,
                    n = !0,
                    a = !1,
                    s = void 0;
                try {
                    for (var o, i = t.querySelectorAll(".js-section")[Symbol.iterator](); !(n = (o = i.next()).done); n = !0) {
                        var u = o.value,
                            c = u.getBoundingClientRect(),
                            l = r >= c.top,
                            d = r <= c.top + c.height;
                        if (l && d) {
                            var m = t.querySelector('.js-scrollnav-item[href="#' + u.id + '"]');
                            if (m && !m.classList.contains("selected")) {
                                var f = !0,
                                    p = !1,
                                    v = void 0;
                                try {
                                    for (var g, h = t.querySelectorAll(".js-scrollnav-item")[Symbol.iterator](); !(f = (g = h.next()).done); f = !0) g.value.classList.remove("selected")
                                } catch (e) {
                                    p = !0, v = e
                                } finally {
                                    try {
                                        !f && h.return && h.return()
                                    } finally {
                                        if (p) throw v
                                    }
                                }
                                m.classList.add("selected")
                            }
                        }
                    }
                } catch (e) {
                    a = !0, s = e
                } finally {
                    try {
                        !n && i.return && i.return()
                    } finally {
                        if (a) throw s
                    }
                }
            }(t)
        }, {
            passive: !0
        })
    }), r.on("change", ".js-integration-permissions-selector [id^=integration_permission_]", function(t) {
        var r, n = t.currentTarget,
            a = n.getAttribute("data-permission"),
            s = n.getAttribute("data-resource") || "",
            o = e.querySelectorAll(document, '.js-integration-hook-event[data-resource~="' + s + '"]', HTMLInputElement),
            i = e.querySelectorAll(document, ".js-integration-single-file-resource", HTMLInputElement),
            u = e.querySelectorAll(document, '.js-dropdown-container[data-resource~="' + s + '"]');
        if (Go(), "none" !== a) {
            var c = e.querySelectorAll(document, ".js-integration-hook-event-permission-error[data-resource~='" + s + "']"),
                l = !0,
                d = !1,
                m = void 0;
            try {
                for (var f, p = c[Symbol.iterator](); !(l = (f = p.next()).done); l = !0) {
                    f.value.classList.add("d-none")
                }
            } catch (e) {
                d = !0, m = e
            } finally {
                try {
                    !l && p.return && p.return()
                } finally {
                    if (d) throw m
                }
            }
            var v = e.querySelectorAll(document, ".js-integration-single-file-permission-error"),
                g = !0,
                h = !1,
                y = void 0;
            try {
                for (var b, j = v[Symbol.iterator](); !(g = (b = j.next()).done); g = !0) {
                    b.value.classList.add("d-none")
                }
            } catch (e) {
                h = !0, y = e
            } finally {
                try {
                    !g && j.return && j.return()
                } finally {
                    if (h) throw y
                }
            }
            var L = !0,
                w = !1,
                x = void 0;
            try {
                for (var k, E = o[Symbol.iterator](); !(L = (k = E.next()).done); L = !0) {
                    k.value.readOnly = !1
                }
            } catch (e) {
                w = !0, x = e
            } finally {
                try {
                    !L && E.return && E.return()
                } finally {
                    if (w) throw x
                }
            }
            var T = !0,
                q = !1,
                S = void 0;
            try {
                for (var A, M = i[Symbol.iterator](); !(T = (A = M.next()).done); T = !0) {
                    A.value.readOnly = !1
                }
            } catch (e) {
                q = !0, S = e
            } finally {
                try {
                    !T && M.return && M.return()
                } finally {
                    if (q) throw S
                }
            }
            e.closest(n, ".js-list-group-item").classList.remove("disabled");
            var H = !0,
                I = !1,
                R = void 0;
            try {
                for (var _, C = u[Symbol.iterator](); !(H = (_ = C.next()).done); H = !0) {
                    _.value.classList.remove("d-none")
                }
            } catch (e) {
                I = !0, R = e
            } finally {
                try {
                    !H && C.return && C.return()
                } finally {
                    if (I) throw R
                }
            }
        } else {
            var F = !0,
                P = !1,
                N = void 0;
            try {
                for (var D, O = o[Symbol.iterator](); !(F = (D = O.next()).done); F = !0) {
                    var B = D.value;
                    r = B, Xo().includes(r) || (B.readOnly = !0, B.checked = !1, e.closest(B, ".js-dropdown-container").classList.add("anim-fade-in", "d-none"))
                }
            } catch (e) {
                P = !0, N = e
            } finally {
                try {
                    !F && O.return && O.return()
                } finally {
                    if (P) throw N
                }
            }
            if (e.closest(n, ".js-list-group-item").classList.add("disabled"), "single_file" === s) {
                var U = !0,
                    V = !1,
                    z = void 0;
                try {
                    for (var W, $ = i[Symbol.iterator](); !(U = (W = $.next()).done); U = !0) {
                        var K = W.value;
                        K.readOnly = !0, K.value = ""
                    }
                } catch (e) {
                    V = !0, z = e
                } finally {
                    try {
                        !U && $.return && $.return()
                    } finally {
                        if (V) throw z
                    }
                }
            } else "content_references" === s && (e.query(document, ".js-dropdown-container[data-resource~='" + s + "']").classList.add("anim-fade-in", "d-none"), "none" === a && (e.query(document, ".js-content-references-domain-list").innerHTML = ""))
        }
    }), r.on("change", ".js-integration-permissions-selector [name^=integration]", Go), r.on("click", ".js-integration-permissions-selector .js-integration-hook-event", function(t) {
        var r = t.currentTarget;
        if (o(r instanceof HTMLInputElement, "app/assets/modules/github/integrations.js:169"), r.readOnly) {
            var n = e.closest(r, ".js-send-events");
            e.query(n, ".js-integration-hook-event-permission-error").classList.remove("d-none"), t.preventDefault()
        }
    }), r.on("click", ".js-integration-permissions-selector .js-integration-single-file-resource", function(t) {
        var r = t.currentTarget;
        if (o(r instanceof HTMLInputElement, "app/assets/modules/github/integrations.js:181"), r.readOnly) {
            var n = e.closest(r, ".js-single-file");
            e.query(n, ".js-integration-single-file-permission-error").classList.remove("d-none"), t.preventDefault()
        }
    }), n.onKey("keydown", ".js-content-references input", function(e) {
        "Enter" === e.key && (e.preventDefault(), Qo())
    }), r.on("click", ".js-content-references .js-domain-add", Qo), r.on("click", ".js-content-references .js-close", function(t) {
        var r = e.closest(t.target, "li"),
            n = r.parentElement;
        n && (n.removeChild(r), 0 === e.querySelectorAll(n, "li").length && (e.closest(n, ".Box").hidden = !0), Go())
    });
    var Yo = function() {
        var e = X(regeneratorRuntime.mark(function e(t) {
            var r, n, a, s, i, u, c, l, d, m, f, p, v = t.currentTarget;
            return regeneratorRuntime.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                    case 0:
                        if (o(v instanceof HTMLElement, "app/assets/modules/github/issues/issue-link.js:12"), r = v.getAttribute("data-url")) {
                            e.next = 4;
                            break
                        }
                        return e.abrupt("return");
                    case 4:
                        for (n = v.getAttribute("data-id") || "", a = v.textContent, s = document.querySelectorAll(".js-issue-link[data-id='" + n + "']"), i = !0, u = !1, c = void 0, e.prev = 10, l = s[Symbol.iterator](); !(i = (d = l.next()).done); i = !0) d.value.removeAttribute("data-url");
                        e.next = 18;
                        break;
                    case 14:
                        e.prev = 14, e.t0 = e.catch(10), u = !0, c = e.t0;
                    case 18:
                        e.prev = 18, e.prev = 19, !i && l.return && l.return();
                    case 21:
                        if (e.prev = 21, !u) {
                            e.next = 24;
                            break
                        }
                        throw c;
                    case 24:
                        return e.finish(21);
                    case 25:
                        return e.finish(18);
                    case 26:
                        return e.prev = 26, e.next = 29, k.fetchJSON(r);
                    case 29:
                        m = e.sent, Zo(s, a + ", " + m.title), e.next = 38;
                        break;
                    case 33:
                        e.prev = 33, e.t1 = e.catch(26), f = (null != e.t1.response ? e.t1.response.status : void 0) || 500, p = function() {
                            switch (f) {
                                case 404:
                                    return v.getAttribute("data-permission-text");
                                default:
                                    return v.getAttribute("data-error-text")
                            }
                        }(), Zo(s, p || "");
                    case 38:
                    case "end":
                        return e.stop()
                }
            }, e, this, [
                [10, 14, 18, 26],
                [19, , 21, 25],
                [26, 33]
            ])
        }));
        return function(t) {
            return e.apply(this, arguments)
        }
    }();
 
    function Zo(e, t) {
        var r, n = !0,
            a = !1,
            s = void 0;
        try {
            for (var o, i = e[Symbol.iterator](); !(n = (o = i.next()).done); n = !0) {
                var u = o.value;
                (r = u).getAttribute("data-hovercard-url") && r.closest("[data-issue-and-pr-hovercards-enabled]") || u.classList.add("tooltipped", "tooltipped-ne"), u.setAttribute("aria-label", t)
            }
        } catch (e) {
            a = !0, s = e
        } finally {
            try {
                !n && i.return && i.return()
            } finally {
                if (a) throw s
            }
        }
    }
 
    function ei(e) {
        var t = /^([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(function(e) {
            return String(e).toLowerCase().replace(/[^0-9a-f]/g, "")
        }(e));
        if (t) return [parseInt(t[1], 16), parseInt(t[2], 16), parseInt(t[3], 16)]
    }
    t.observe(".js-issue-link", {
        subscribe: function(e) {
            return y.fromEvent(e, "mouseenter", Yo)
        }
    });
    "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self && self;
    var ti, ri = (function(e, t) {
            var r;
            r = function() {
                var e = null,
                    t = {};
                s("monochrome", null, [
                    [0, 0],
                    [100, 0]
                ]), s("red", [-26, 18], [
                    [20, 100],
                    [30, 92],
                    [40, 89],
                    [50, 85],
                    [60, 78],
                    [70, 70],
                    [80, 60],
                    [90, 55],
                    [100, 50]
                ]), s("orange", [19, 46], [
                    [20, 100],
                    [30, 93],
                    [40, 88],
                    [50, 86],
                    [60, 85],
                    [70, 70],
                    [100, 70]
                ]), s("yellow", [47, 62], [
                    [25, 100],
                    [40, 94],
                    [50, 89],
                    [60, 86],
                    [70, 84],
                    [80, 82],
                    [90, 80],
                    [100, 75]
                ]), s("green", [63, 178], [
                    [30, 100],
                    [40, 90],
                    [50, 85],
                    [60, 81],
                    [70, 74],
                    [80, 64],
                    [90, 50],
                    [100, 40]
                ]), s("blue", [179, 257], [
                    [20, 100],
                    [30, 86],
                    [40, 80],
                    [50, 74],
                    [60, 60],
                    [70, 52],
                    [80, 44],
                    [90, 39],
                    [100, 35]
                ]), s("purple", [258, 282], [
                    [20, 100],
                    [30, 87],
                    [40, 79],
                    [50, 70],
                    [60, 65],
                    [70, 59],
                    [80, 52],
                    [90, 45],
                    [100, 42]
                ]), s("pink", [283, 334], [
                    [20, 100],
                    [30, 90],
                    [40, 86],
                    [60, 84],
                    [80, 80],
                    [90, 75],
                    [100, 73]
                ]);
                var r = function(s) {
                    if (void 0 !== (s = s || {}).seed && null !== s.seed && s.seed === parseInt(s.seed, 10)) e = s.seed;
                    else if ("string" == typeof s.seed) e = function(e) {
                        for (var t = 0, r = 0; r !== e.length && !(t >= Number.MAX_SAFE_INTEGER); r++) t += e.charCodeAt(r);
                        return t
                    }(s.seed);
                    else {
                        if (void 0 !== s.seed && null !== s.seed) throw new TypeError("The seed value must be an integer or string");
                        e = null
                    }
                    var u, c, l;
                    if (null !== s.count && void 0 !== s.count) {
                        var d = s.count,
                            m = [];
                        for (s.count = null; d > m.length;) e && s.seed && (s.seed += 1), m.push(r(s));
                        return s.count = d, m
                    }
                    return u = function(e) {
                            var r = a(function(e) {
                                if ("number" == typeof parseInt(e)) {
                                    var r = parseInt(e);
                                    if (r < 360 && r > 0) return [r, r]
                                }
                                if ("string" == typeof e)
                                    if (t[e]) {
                                        var n = t[e];
                                        if (n.hueRange) return n.hueRange
                                    } else if (e.match(/^#?([0-9A-F]{3}|[0-9A-F]{6})$/i)) {
                                    var a = function(e) {
                                        e = 3 === (e = e.replace(/^#/, "")).length ? e.replace(/(.)/g, "$1$1") : e;
                                        var t = parseInt(e.substr(0, 2), 16) / 255,
                                            r = parseInt(e.substr(2, 2), 16) / 255,
                                            n = parseInt(e.substr(4, 2), 16) / 255,
                                            a = Math.max(t, r, n),
                                            s = a - Math.min(t, r, n),
                                            o = a ? s / a : 0;
                                        switch (a) {
                                            case t:
                                                return [(r - n) / s % 6 * 60 || 0, o, a];
                                            case r:
                                                return [60 * ((n - t) / s + 2) || 0, o, a];
                                            case n:
                                                return [60 * ((t - r) / s + 4) || 0, o, a]
                                        }
                                    }(e)[0];
                                    return [a, a]
                                }
                                return [0, 360]
                            }(e.hue));
                            r < 0 && (r = 360 + r);
                            return r
                        }(s), c = function(e, t) {
                            if ("monochrome" === t.hue) return 0;
                            if ("random" === t.luminosity) return a([0, 100]);
                            var r = function(e) {
                                    return n(e).saturationRange
                                }(e),
                                s = r[0],
                                o = r[1];
                            switch (t.luminosity) {
                                case "bright":
                                    s = 55;
                                    break;
                                case "dark":
                                    s = o - 10;
                                    break;
                                case "light":
                                    o = 55
                            }
                            return a([s, o])
                        }(u, s), l = function(e, t, r) {
                            var s = function(e, t) {
                                    for (var r = n(e).lowerBounds, a = 0; a < r.length - 1; a++) {
                                        var s = r[a][0],
                                            o = r[a][1],
                                            i = r[a + 1][0],
                                            u = r[a + 1][1];
                                        if (t >= s && t <= i) {
                                            var c = (u - o) / (i - s),
                                                l = o - c * s;
                                            return c * t + l
                                        }
                                    }
                                    return 0
                                }(e, t),
                                o = 100;
                            switch (r.luminosity) {
                                case "dark":
                                    o = s + 20;
                                    break;
                                case "light":
                                    s = (o + s) / 2;
                                    break;
                                case "random":
                                    s = 0, o = 100
                            }
                            return a([s, o])
                        }(u, c, s),
                        function(e, t) {
                            switch (t.format) {
                                case "hsvArray":
                                    return e;
                                case "hslArray":
                                    return i(e);
                                case "hsl":
                                    var r = i(e);
                                    return "hsl(" + r[0] + ", " + r[1] + "%, " + r[2] + "%)";
                                case "hsla":
                                    var n = i(e),
                                        a = t.alpha || Math.random();
                                    return "hsla(" + n[0] + ", " + n[1] + "%, " + n[2] + "%, " + a + ")";
                                case "rgbArray":
                                    return o(e);
                                case "rgb":
                                    var s = o(e);
                                    return "rgb(" + s.join(", ") + ")";
                                case "rgba":
                                    var u = o(e),
                                        a = t.alpha || Math.random();
                                    return "rgba(" + u.join(", ") + ", " + a + ")";
                                default:
                                    return function(e) {
                                        var t = o(e);
 
                                        function r(e) {
                                            var t = e.toString(16);
                                            return 1 == t.length ? "0" + t : t
                                        }
                                        return "#" + r(t[0]) + r(t[1]) + r(t[2])
                                    }(e)
                            }
                        }([u, c, l], s)
                };
 
                function n(e) {
                    for (var r in e >= 334 && e <= 360 && (e -= 360), t) {
                        var n = t[r];
                        if (n.hueRange && e >= n.hueRange[0] && e <= n.hueRange[1]) return t[r]
                    }
                    return "Color not found"
                }
 
                function a(t) {
                    if (null === e) return Math.floor(t[0] + Math.random() * (t[1] + 1 - t[0]));
                    var r = t[1] || 1,
                        n = t[0] || 0,
                        a = (e = (9301 * e + 49297) % 233280) / 233280;
                    return Math.floor(n + a * (r - n))
                }
 
                function s(e, r, n) {
                    var a = n[0][0],
                        s = n[n.length - 1][0],
                        o = n[n.length - 1][1],
                        i = n[0][1];
                    t[e] = {
                        hueRange: r,
                        lowerBounds: n,
                        saturationRange: [a, s],
                        brightnessRange: [o, i]
                    }
                }
 
                function o(e) {
                    var t = e[0];
                    0 === t && (t = 1), 360 === t && (t = 359), t /= 360;
                    var r = e[1] / 100,
                        n = e[2] / 100,
                        a = Math.floor(6 * t),
                        s = 6 * t - a,
                        o = n * (1 - r),
                        i = n * (1 - s * r),
                        u = n * (1 - (1 - s) * r),
                        c = 256,
                        l = 256,
                        d = 256;
                    switch (a) {
                        case 0:
                            c = n, l = u, d = o;
                            break;
                        case 1:
                            c = i, l = n, d = o;
                            break;
                        case 2:
                            c = o, l = n, d = u;
                            break;
                        case 3:
                            c = o, l = i, d = n;
                            break;
                        case 4:
                            c = u, l = o, d = n;
                            break;
                        case 5:
                            c = n, l = o, d = i
                    }
                    var m = [Math.floor(255 * c), Math.floor(255 * l), Math.floor(255 * d)];
                    return m
                }
 
                function i(e) {
                    var t = e[0],
                        r = e[1] / 100,
                        n = e[2] / 100,
                        a = (2 - r) * n;
                    return [t, Math.round(r * n / (a < 1 ? a : 2 - a) * 1e4) / 100, a / 2 * 100]
                }
                return r
            }(), e && e.exports && (t = e.exports = r), t.randomColor = r
        }(ti = {
            exports: {}
        }, ti.exports), ti.exports),
        ni = (ri.randomColor, function() {
            var t = X(regeneratorRuntime.mark(function t(r) {
                var n, a, o, i, u, c, l, d, m, f, p, v, g;
                return regeneratorRuntime.wrap(function(t) {
                    for (;;) switch (t.prev = t.next) {
                        case 0:
                            if (n = r.closest(".js-label-preview-container")) {
                                t.next = 3;
                                break
                            }
                            return t.abrupt("return");
                        case 3:
                            if (a = e.closest(r, ".js-label-form", HTMLFormElement), o = a.querySelector(".js-new-label-error"), i = a.getAttribute("data-label-id"), u = e.query(n, ".js-label-preview", HTMLElement), c = pi(a, u), l = fi(a), d = mi(a), m = e.getAttribute(u, "data-url-template"), f = di(m, c, l, d, i), !n.hasAttribute("data-last-preview-url")) {
                                t.next = 16;
                                break
                            }
                            if (p = e.getAttribute(n, "data-last-preview-url"), f !== p) {
                                t.next = 16;
                                break
                            }
                            return t.abrupt("return");
                        case 16:
                            return v = void 0, t.prev = 17, t.next = 20, s.fetchSafeDocumentFragment(document, f);
                        case 20:
                            v = t.sent, t.next = 31;
                            break;
                        case 23:
                            return t.prev = 23, t.t0 = t.catch(17), t.next = 27, t.t0.response.json();
                        case 27:
                            return g = t.sent, ci(a, g), o && (o.textContent = g.message, o.hidden = !1), t.abrupt("return");
                        case 31:
                            o && (o.textContent = "", o.hidden = !0), li(a), u.innerHTML = "", u.appendChild(v), n.setAttribute("data-last-preview-url", f);
                        case 36:
                        case "end":
                            return t.stop()
                    }
                }, t, this, [
                    [17, 23]
                ])
            }));
            return function(e) {
                return t.apply(this, arguments)
            }
        }());
 
    function ai(e, t) {
        var r = function(e) {
            var t = ei(e);
            if (t) return (299 * t[0] + 587 * t[1] + 114 * t[2]) / 1e3
        }(t);
        null != r && (r < 150 ? (e.classList.remove("text-gray-dark"), e.classList.add("text-white")) : (e.classList.remove("text-white"), e.classList.add("text-gray-dark")))
    }
 
    function si(e, t) {
        var r = t;
        "#" !== r.charAt(0) && (r = "#" + r), e.style.backgroundColor = r;
        var n = e.querySelector(".js-new-label-color-icon");
        n && ai(n, t)
    }
 
    function oi(t, r) {
        t.blur();
        var n = e.closest(t, "form");
        e.query(n, ".js-new-label-color-input", HTMLInputElement).value = r, si(e.query(n, ".js-new-label-color", HTMLButtonElement), r)
    }
 
    function ii(e) {
        var t = Array.from(e.querySelectorAll(".js-navigation-item")).filter(function(e) {
            return "" === e.style.display
        });
        if (!(t.length > 2) && t.every(function(e) {
                return e.classList.contains("js-label-options")
            })) {
            var r = t.filter(function(e) {
                return e.classList.contains("js-add-label-button")
            })[0];
            if (r) {
                var n = !0,
                    a = !1,
                    s = void 0;
                try {
                    for (var o, i = e.querySelectorAll('[aria-selected="true"]')[Symbol.iterator](); !(n = (o = i.next()).done); n = !0) {
                        o.value.setAttribute("aria-selected", "false")
                    }
                } catch (e) {
                    a = !0, s = e
                } finally {
                    try {
                        !n && i.return && i.return()
                    } finally {
                        if (a) throw s
                    }
                }
                r.setAttribute("aria-selected", "true")
            }
        }
    }
 
    function ui(t, r, n) {
        var a = r.querySelector(t);
        a && (n ? function(t, r) {
            e.closest(t, ".js-label-error-container").classList.add("errored"), t.textContent = r, t.classList.remove("d-none")
        }(a, n[0]) : function(t) {
            e.closest(t, ".js-label-error-container").classList.remove("errored"), t.classList.add("d-none")
        }(a))
    }
 
    function ci(e, t) {
        ui(".js-label-name-error", e, t.name), ui(".js-label-description-error", e, t.description), ui(".js-label-color-error", e, t.color)
    }
 
    function li(e) {
        ui(".js-label-name-error", e, null), ui(".js-label-description-error", e, null), ui(".js-label-color-error", e, null)
    }
 
    function di(e, t, r, n, a) {
        var s = new URL("" + e + encodeURIComponent(t), window.location.origin),
            o = new URLSearchParams(s.search.slice(1));
        return o.append("color", r), n && o.append("description", n), a && o.append("id", a), s.search = o.toString(), s.toString()
    }
 
    function mi(e) {
        var t = null,
            r = e.querySelector(".js-new-label-description-input");
        return r instanceof HTMLInputElement && r.value.trim().length > 0 && (t = r.value.trim()), t
    }
 
    function fi(t) {
        var r = e.query(t, ".js-new-label-color-input", HTMLInputElement);
        return r.checkValidity() ? r.value.trim().replace(/^#/, "") : "ededed"
    }
 
    function pi(t, r) {
        var n = e.query(t, ".js-new-label-name-input", HTMLInputElement).value.trim();
        return n.length < 1 && (n = e.getAttribute(r, "data-default-name")), n
    }
 
    function vi(t, r) {
        e.closest(t, ".js-details-container").classList.toggle("is-empty", r)
    }
 
    function gi(t) {
        var r = e.query(document, ".js-labels-count"),
            n = R.parseFormattedNumber(r.textContent) + t;
        r.textContent = R.formatNumber(n);
        var a = e.query(document, ".js-labels-label");
        return C.pluralizeNode(n, a), n
    }
    n.onInput(".js-label-filter-field", function(t) {
        var r = t.target;
        o(r instanceof HTMLInputElement, "app/assets/modules/github/issues/labels.js:252");
        var n = e.closest(r, ".js-select-menu").querySelector(".js-new-label-name");
        if (n) {
            var a = r.value.trim();
            n.textContent = a
        }
    }), r.on("filterable:change", ".js-filterable-issue-labels", function(t) {
        o(t instanceof CustomEvent, "app/assets/modules/github/issues/labels.js:265");
        var r = e.closest(t.target, ".js-issue-labels-menu-content"),
            n = r.querySelector(".js-new-label-modal, .js-add-label-button");
        if (n) {
            var a = t.detail.inputField.value.trim().toLowerCase(),
                s = Array.from(r.querySelectorAll(".js-navigation-item")).filter(function(e) {
                    return "" === e.style.display
                }),
                i = a.length > 0;
            if (i) {
                var u = !0,
                    c = !1,
                    l = void 0;
                try {
                    for (var d, m = s[Symbol.iterator](); !(u = (d = m.next()).done); u = !0) {
                        var f = d.value.querySelector('input[type="checkbox"][name="issue[labels][]"]');
                        if (f)
                            if (f.getAttribute("data-label-name").toLowerCase() === a) {
                                i = !1;
                                break
                            }
                    }
                } catch (e) {
                    c = !0, l = e
                } finally {
                    try {
                        !u && m.return && m.return()
                    } finally {
                        if (c) throw l
                    }
                }
            }
            n.classList.toggle("d-none", !i), ii(r)
        }
    }), r.on("navigation:focus", ".js-label-options", function(e) {
        var t = e.target.closest(".js-filterable-issue-labels");
        t instanceof HTMLElement && ii(t)
    }), n.onFocus(".js-new-label-color-input", function(t) {
        var r = e.closest(t, "form"),
            n = e.query(r, ".js-new-label-swatches");
        n.hidden = !1, t.addEventListener("blur", function() {
            n.hidden = !0
        }, {
            once: !0
        })
    }), n.onInput(".js-new-label-color-input", function(t) {
        var r = t.target;
        o(r instanceof HTMLInputElement, "app/assets/modules/github/issues/labels.js:324");
        var n = r.value.trim();
        if (!(n.length < 1))
            if (0 !== n.indexOf("#") && (n = "#" + n, r.value = n), r.checkValidity()) {
                r.classList.remove("text-red");
                var a = e.closest(r, "form");
                si(e.query(a, ".js-new-label-color", HTMLButtonElement), n)
            } else r.classList.add("text-red")
    }), n.onKey("keyup", ".js-new-label-color-input", function(t) {
        var n = t.target;
        o(n instanceof HTMLInputElement, "app/assets/modules/github/issues/labels.js:348");
        var a = n.value.trim();
        if (0 !== a.indexOf("#") && (a = "#" + a, n.value = a), n.checkValidity()) {
            var s = e.closest(n, "form");
            si(e.query(s, ".js-new-label-color", HTMLButtonElement), a)
        }
        r.fire(n, "change", !1), li(e.closest(n, "form", HTMLFormElement))
    }), n.onKey("keyup", ".js-new-label-description-input", function(e) {
        var t = e.target;
        o(t instanceof HTMLInputElement, "app/assets/modules/github/issues/labels.js:369");
        var r = t.form;
        o(r, "app/assets/modules/github/issues/labels.js:371"), li(r)
    }), n.onKey("keyup", ".js-new-label-color-input", function(e) {
        var t = e.target;
        o(t instanceof HTMLInputElement, "app/assets/modules/github/issues/labels.js:377");
        var r = t.form;
        o(r, "app/assets/modules/github/issues/labels.js:379"), li(r)
    }), n.onKey("keydown", ".js-label-filter-field", function(t) {
        if ("Enter" === t.key) {
            var r = e.query(document, ".js-issue-labels-menu-content").querySelector('.js-label-options[aria-selected="true"]');
            r && r.click()
        }
    }), r.on("click", ".js-new-label-color", function(e) {
        var t = e.currentTarget;
        o(t instanceof HTMLButtonElement, "app/assets/modules/github/issues/labels.js:400"), oi(t, ri()), ni(t)
    }), r.on("mousedown", ".js-new-label-color-swatch", function(t) {
        var r = t.currentTarget;
        o(r instanceof HTMLButtonElement, "app/assets/modules/github/issues/labels.js:408"), oi(r, e.getAttribute(r, "data-color")), ni(r), e.closest(r, ".js-new-label-swatches").hidden = !0
    }), r.on("toggle", ".js-new-label-modal", function(t) {
        t.target.hasAttribute("open") && function(t) {
            var r = t.querySelector(".js-new-label-name-input");
            if (!r) return;
            o(r instanceof HTMLInputElement, "app/assets/modules/github/issues/labels.js:434");
            var n = e.query(t, ".js-new-label-color-input", HTMLInputElement),
                a = ri();
            if (n.value.length > 0)
                for (; n.value === a;) a = ri();
            n.value = a;
            var s = e.query(t, ".js-new-label-color", HTMLButtonElement);
            si(s, a);
            var i = e.query(document, ".js-new-label-name").textContent;
            l.changeValue(r, i), fa(r), ni(s)
        }(t.target)
    }, {
        capture: !0
    }), c.remoteForm(".js-new-label-modal-form", function() {
        var t = X(regeneratorRuntime.mark(function t(r, n) {
            var a, s, o, i;
            return regeneratorRuntime.wrap(function(t) {
                for (;;) switch (t.prev = t.next) {
                    case 0:
                        return a = e.query(r, ".js-new-label-error"), s = void 0, t.prev = 2, t.next = 5, n.html();
                    case 5:
                        s = t.sent, t.next = 13;
                        break;
                    case 8:
                        t.prev = 8, t.t0 = t.catch(2), o = t.t0.response.json, a.textContent = o.message, a.hidden = !1;
                    case 13:
                        if (s) {
                            t.next = 15;
                            break
                        }
                        return t.abrupt("return");
                    case 15:
                        a.hidden = !0, _.clear(e.query(document, ".js-issue-labels-menu-content")), e.query(document, ".js-new-label-modal").removeAttribute("open"), e.query(document, ".js-filterable-issue-labels").prepend(s.html), (i = e.query(document, ".js-label-filter-field", HTMLInputElement)).value = i.defaultValue, i.focus();
                    case 23:
                    case "end":
                        return t.stop()
                }
            }, t, this, [
                [2, 8]
            ])
        }));
        return function(e, r) {
            return t.apply(this, arguments)
        }
    }()), r.on("click", ".js-edit-label-cancel", function(t) {
        var r = e.closest(t.target, "form", HTMLFormElement);
        li(r), r.reset();
        var n = e.query(r, ".js-new-label-color-input", HTMLInputElement),
            a = n.value;
        e.query(r, ".js-new-label-color", HTMLButtonElement).style.backgroundColor = a, pa(r), ni(n);
        var s = t.currentTarget.closest(".js-labels-list-item");
        if (s) {
            e.query(s, ".js-update-label", HTMLElement).classList.add("d-none");
            var o = s.querySelector(".js-label-preview");
            if (o) o.classList.add("d-none"), e.query(s, ".js-label-link", HTMLElement).classList.remove("d-none");
            var i = s.querySelectorAll(".js-hide-on-label-edit.d-none"),
                u = !0,
                c = !1,
                l = void 0;
            try {
                for (var d, m = i[Symbol.iterator](); !(u = (d = m.next()).done); u = !0) {
                    d.value.classList.remove("d-none")
                }
            } catch (e) {
                c = !0, l = e
            } finally {
                try {
                    !u && m.return && m.return()
                } finally {
                    if (c) throw l
                }
            }
        }
    }), c.remoteForm(".js-update-label", function() {
        var t = X(regeneratorRuntime.mark(function t(r, n) {
            var a, s;
            return regeneratorRuntime.wrap(function(t) {
                for (;;) switch (t.prev = t.next) {
                    case 0:
                        return a = void 0, t.prev = 1, t.next = 4, n.html();
                    case 4:
                        a = t.sent, t.next = 12;
                        break;
                    case 7:
                        return t.prev = 7, t.t0 = t.catch(1), s = t.t0.response.json, ci(r, s), t.abrupt("return");
                    case 12:
                        li(r), e.closest(r, ".js-labels-list-item").replaceWith(a.html);
                    case 15:
                    case "end":
                        return t.stop()
                }
            }, t, this, [
                [1, 7]
            ])
        }));
        return function(e, r) {
            return t.apply(this, arguments)
        }
    }()), c.remoteForm(".js-create-label", function() {
        var t = X(regeneratorRuntime.mark(function t(r, n) {
            var a, s, o;
            return regeneratorRuntime.wrap(function(t) {
                for (;;) switch (t.prev = t.next) {
                    case 0:
                        return a = void 0, t.prev = 1, t.next = 4, n.html();
                    case 4:
                        a = t.sent, t.next = 12;
                        break;
                    case 7:
                        return t.prev = 7, t.t0 = t.catch(1), s = t.t0.response.json, ci(r, s), t.abrupt("return");
                    case 12:
                        r.reset(), li(r), e.query(document, ".js-label-list").prepend(a.html), gi(1), vi(r, !1), oi(e.query(r, ".js-new-label-color", HTMLButtonElement), ri()), ni(e.query(r, ".js-new-label-name-input", HTMLInputElement)), pa(r), (o = r.closest(".js-details-container")) instanceof HTMLElement && F.toggleDetailsTarget(o);
                    case 23:
                    case "end":
                        return t.stop()
                }
            }, t, this, [
                [1, 7]
            ])
        }));
        return function(e, r) {
            return t.apply(this, arguments)
        }
    }()), r.on("click", ".js-details-target-new-label", function() {
        var t = e.query(document, ".js-create-label");
        e.query(t, ".js-new-label-name-input", HTMLInputElement).focus()
    }), r.on("click", ".js-edit-label", function(t) {
        var r = e.closest(t.currentTarget, ".js-labels-list-item"),
            n = e.query(r, ".js-update-label", HTMLElement);
        n.classList.remove("d-none"), e.query(n, ".js-new-label-name-input", HTMLInputElement).focus();
        var a = r.querySelector(".js-label-preview");
        a && (a.classList.remove("d-none"), e.query(r, ".js-label-link", HTMLElement).classList.add("d-none"));
        var s = e.querySelectorAll(r, ".js-hide-on-label-edit", HTMLElement),
            o = !0,
            i = !1,
            u = void 0;
        try {
            for (var c, l = s[Symbol.iterator](); !(o = (c = l.next()).done); o = !0) {
                c.value.classList.add("d-none")
            }
        } catch (e) {
            i = !0, u = e
        } finally {
            try {
                !o && l.return && l.return()
            } finally {
                if (i) throw u
            }
        }
    }), c.remoteForm(".js-delete-label", function() {
        var t = X(regeneratorRuntime.mark(function t(r, n) {
            var a, s;
            return regeneratorRuntime.wrap(function(t) {
                for (;;) switch (t.prev = t.next) {
                    case 0:
                        return a = e.closest(r, ".js-labels-list-item"), e.query(a, ".js-label-delete-spinner").hidden = !1, t.next = 4, n.text();
                    case 4:
                        s = gi(-1), vi(r, 0 === s), a.remove();
                    case 7:
                    case "end":
                        return t.stop()
                }
            }, t, this)
        }));
        return function(e, r) {
            return t.apply(this, arguments)
        }
    }());
    var hi = u(function(e) {
        var t = e.target;
        o(t instanceof HTMLInputElement, "app/assets/modules/github/issues/labels.js:228"), ni(t)
    }, 500);
    r.on("suggester:complete", ".js-new-label-name-input", hi), n.onInput(".js-new-label-name-input", hi), n.onInput(".js-new-label-description-input", hi), n.onInput(".js-new-label-color-input", hi), n.onKey("keypress", ".js-new-label-name-input", function(e) {
        var t = e.target;
        o(t instanceof HTMLInputElement, "app/assets/modules/github/issues/labels.js:628");
        var r = parseInt(t.getAttribute("data-maxlength"));
        A.getUtf8StringLength(t.value) >= r && e.preventDefault()
    }), H(function(e) {
        var t = e.newURL,
            r = t.match(/\/issues#issue\/(\d+)$/);
        if (r) {
            var n = r[1];
            window.location = t.replace(/\/?#issue\/.+/, "/" + n)
        }
    }), H(function(e) {
        var t = e.newURL,
            r = t.match(/\/issues#issue\/(\d+)\/comment\/(\d+)$/);
        if (r) {
            var n = r[1],
                a = r[2];
            window.location = t.replace(/\/?#issue\/.+/, "/" + n + "#issuecomment-" + a)
        }
    }), t.observe(".js-issue-row .js-issues-list-check:checked", {
        add: function(t) {
            e.closest(t, ".js-issue-row").classList.add("selected")
        },
        remove: function(t) {
            e.closest(t, ".js-issue-row").classList.remove("selected")
        }
    }), r.on("navigation:keydown", ".js-issue-row", function(e) {
        var t, r;
        o(e instanceof CustomEvent, "app/assets/modules/github/issues/list.js:28"), "x" === e.detail.hotkey && (t = e.currentTarget, (r = t.querySelector(".js-issues-list-check")) instanceof HTMLInputElement && l.changeValue(r, !r.checked), e.preventDefault(), e.stopPropagation())
    }), n.onFocus("#js-issues-search", function(e) {
        o(e instanceof HTMLInputElement, "app/assets/modules/github/issues/list.js:40"), e.value = e.value
    }), r.on("details-menu-select", ".js-saved-reply-container button", function(t) {
        var r = e.query(t.target, ".js-saved-reply-body"),
            n = r.textContent.trim(),
            a = e.closest(t.currentTarget, ".js-previewable-comment-form"),
            s = e.query(a, "textarea.js-comment-field", HTMLTextAreaElement);
        A.insertText(s, n), setTimeout(function() {
            return s.focus()
        }, 0), e.query(a, "input.js-saved-reply-id", HTMLInputElement).value = r.getAttribute("data-saved-reply-id") || ""
    }), n.onKey("keydown", ".js-saved-reply-shortcut-comment-field", function(t) {
        if ("Control+." === x(t)) {
            o(t.target instanceof HTMLElement, "app/assets/modules/github/issues/replies.js:26");
            var r = e.closest(t.target, ".js-previewable-comment-form");
            e.query(r, ".js-saved-reply-container").setAttribute("open", ""), t.preventDefault(), I.trackEvent({
                category: "Markdown Toolbar",
                action: "shortcut",
                label: "saved reply"
            })
        }
    }), n.onKey("keydown", ".js-saved-reply-filter-input", function(t) {
        if (/^Control\+[1-9]$/.test(x(t))) {
            o(t.target instanceof HTMLElement, "app/assets/modules/github/issues/replies.js:41");
            var r = e.closest(t.target, ".js-saved-reply-container").querySelectorAll('[role="menuitem"]'),
                n = Number(t.key),
                a = r[n - 1];
            a && (a.click(), t.preventDefault(), I.trackEvent({
                category: "Saved Replies",
                action: "shortcut",
                label: "saved reply number " + n
            }))
        }
    });
    var yi = function() {
        var t = X(regeneratorRuntime.mark(function t(r, n) {
            var a, i, u, c, l;
            return regeneratorRuntime.wrap(function(t) {
                for (;;) switch (t.prev = t.next) {
                    case 0:
                        return a = wi(r), n && a.append(n.name, n.value), null == (i = r.getAttribute("data-authenticity-token")) && (u = e.closest(r, "form", HTMLFormElement).elements.namedItem("authenticity_token")) instanceof HTMLInputElement && (i = u.value), o(i, "app/assets/modules/github/issues/sidebar.js:107"), a.append("authenticity_token", i), c = e.getAttribute(r, "data-url"), t.next = 9, s.fetchText(c, {
                            method: "post",
                            body: a
                        });
                    case 9:
                        l = t.sent, Li(e.closest(r, ".js-discussion-sidebar-item"), l);
                    case 11:
                    case "end":
                        return t.stop()
                }
            }, t, this)
        }));
        return function(e, r) {
            return t.apply(this, arguments)
        }
    }();
 
    function bi(e) {
        e instanceof HTMLFormElement ? l.submit(e) : yi(e)
    }
 
    function ji(e) {
        var t = e.currentTarget;
        o(t instanceof Element, "app/assets/modules/github/issues/sidebar.js:21");
        var r = t.closest(".js-issue-sidebar-form") || t.querySelector(".js-issue-sidebar-form");
        o(r, "app/assets/modules/github/issues/sidebar.js:23"), bi(r)
    }
 
    function Li(e, t) {
        e.replaceWith(i.parseHTML(document, t))
    }
 
    function wi(t) {
        var r = e.closest(t, "form", HTMLFormElement),
            n = P(r),
            a = new FormData,
            s = !0,
            o = !1,
            i = void 0;
        try {
            for (var u, c = n[Symbol.iterator](); !(s = (u = c.next()).done); s = !0) {
                var l = u.value,
                    d = re(l, 2),
                    m = d[0],
                    f = d[1];
                t.contains(xi(r, m, f)) && a.append(m, f)
            }
        } catch (e) {
            o = !0, i = e
        } finally {
            try {
                !s && c.return && c.return()
            } finally {
                if (o) throw i
            }
        }
        return a
    }
 
    function xi(e, t, r) {
        var n = !0,
            a = !1,
            s = void 0;
        try {
            for (var o, i = e.elements[Symbol.iterator](); !(n = (o = i.next()).done); n = !0) {
                var u = o.value;
                if ((u instanceof HTMLInputElement || u instanceof HTMLTextAreaElement || u instanceof HTMLButtonElement) && u.name === t && u.value === r) return u
            }
        } catch (e) {
            a = !0, s = e
        } finally {
            try {
                !n && i.return && i.return()
            } finally {
                if (a) throw s
            }
        }
    }
    r.on("selectmenu:selected", ".js-discussion-sidebar-item", function(t) {
        var r = e.query(t.currentTarget, ".js-issue-sidebar-form"),
            n = t.target,
            a = e.closest(n, ".js-select-menu"),
            s = a.hasAttribute("data-multiple");
        if (n.hasAttribute("data-clear-assignees")) {
            var o = e.querySelectorAll(a, 'input[name="issue[user_assignee_ids][]"]:checked', HTMLInputElement),
                i = !0,
                u = !1,
                c = void 0;
            try {
                for (var l, d = o[Symbol.iterator](); !(i = (l = d.next()).done); i = !0) {
                    var m = l.value;
                    m.disabled = !1, m.checked = !1
                }
            } catch (e) {
                u = !0, c = e
            } finally {
                try {
                    !i && d.return && d.return()
                } finally {
                    if (u) throw c
                }
            }
            bi(r)
        } else if (s) {
            var f = Number(a.getAttribute("data-max-options"));
            if (f) {
                var p = a.querySelectorAll('input[type="checkbox"]:checked').length;
                e.query(a, ".js-max-warning").classList.toggle("d-none", p <= f)
            }
            a.addEventListener("menu:deactivate", ji, {
                once: !0
            })
        } else bi(r)
    }), c.remoteForm(".js-issue-sidebar-form", function() {
        var t = X(regeneratorRuntime.mark(function t(r, n) {
            var a;
            return regeneratorRuntime.wrap(function(t) {
                for (;;) switch (t.prev = t.next) {
                    case 0:
                        return t.next = 2, n.html();
                    case 2:
                        a = t.sent, o(r.parentNode instanceof HTMLElement, "app/assets/modules/github/issues/sidebar.js:60"), e.closest(r, ".js-discussion-sidebar-item").replaceWith(a.html);
                    case 5:
                    case "end":
                        return t.stop()
                }
            }, t, this)
        }));
        return function(e, r) {
            return t.apply(this, arguments)
        }
    }()), r.on("click", "div.js-issue-sidebar-form .js-suggested-reviewer", function(t) {
        var r = t.currentTarget;
        o(r instanceof HTMLButtonElement, "app/assets/modules/github/issues/sidebar.js:67");
        var n = e.closest(r, ".js-issue-sidebar-form");
        yi(n, {
            name: r.name,
            value: r.value
        }), t.preventDefault()
    }), r.on("click", "div.js-issue-sidebar-form .js-issue-assign-self", function(t) {
        var r = t.currentTarget;
        o(r instanceof HTMLButtonElement, "app/assets/modules/github/issues/sidebar.js:77");
        var n = e.closest(r, ".js-issue-sidebar-form");
        yi(n, {
            name: r.name,
            value: r.value
        }), t.preventDefault()
    }), c.remoteForm(".js-pages-preview-toggle-form", function() {
        var t = X(regeneratorRuntime.mark(function t(r, n) {
            var a;
            return regeneratorRuntime.wrap(function(t) {
                for (;;) switch (t.prev = t.next) {
                    case 0:
                        return t.next = 2, n.json();
                    case 2:
                        a = t.sent, e.query(r, "button.btn").textContent = a.json.new_button_value;
                    case 4:
                    case "end":
                        return t.stop()
                }
            }, t, this)
        }));
        return function(e, r) {
            return t.apply(this, arguments)
        }
    }()), r.on("change", ".js-project-menu-checkbox", function(t) {
        var r = t.currentTarget;
        o(r instanceof HTMLInputElement, "app/assets/modules/github/issues/sidebar.js:121");
        var n = e.closest(r, ".js-project-menu-container"),
            a = !0,
            s = !1,
            i = void 0;
        try {
            for (var u, c = e.querySelectorAll(n, ".js-project-menu-checkbox", HTMLInputElement)[Symbol.iterator](); !(a = (u = c.next()).done); a = !0) {
                var l = u.value;
                l !== r && (l.name === r.name && (l.checked = r.checked, e.closest(l, ".select-menu-item").classList.toggle("selected", l.checked)))
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
    }), r.on("click", ".js-prompt-dismiss", function(t) {
        e.closest(t.currentTarget, ".js-prompt").remove()
    }), r.on("change", ".js-issues-list-check", function() {
        var t = !!document.querySelector(".js-issues-list-check:checked");
        e.query(document, "#js-issues-toolbar").classList.toggle("triage-mode", t)
    }), r.on("change", ".js-issues-list-check", function() {
        var t = e.querySelectorAll(document, ".js-issues-list-check:checked", HTMLInputElement).map(function(e) {
                return [e.name, e.value]
            }),
            r = document.querySelectorAll("#js-issues-toolbar .js-issues-toolbar-triage .js-select-menu"),
            n = !0,
            a = !1,
            s = void 0;
        try {
            for (var o, i = r[Symbol.iterator](); !(n = (o = i.next()).done); n = !0) {
                var u = o.value;
                D.setLoadingData(u, t), u.classList.add("js-load-contents")
            }
        } catch (e) {
            a = !0, s = e
        } finally {
            try {
                !n && i.return && i.return()
            } finally {
                if (a) throw s
            }
        }
    }), r.on("selectmenu:selected", ".js-issues-toolbar-triage .js-navigation-item", function() {
        var t = X(regeneratorRuntime.mark(function t(r) {
            var n, a, s, o, i, u, c, l;
            return regeneratorRuntime.wrap(function(t) {
                for (;;) switch (t.prev = t.next) {
                    case 0:
                        return n = r.currentTarget, a = e.closest(n, ".js-menu-container"), s = a.hasAttribute("data-submits-hash"), o = e.closest(n, "form"), i = n.classList.contains("selected"), u = e.getAttribute(n, "data-name"), c = e.getAttribute(n, "data-value"), (l = document.createElement("input")).setAttribute("type", "hidden"), s ? (l.setAttribute("name", u + "[" + c + "]"), l.setAttribute("value", i ? "1" : "0")) : (l.setAttribute("name", u), l.setAttribute("value", i ? c : "")), e.query(o, ".js-issues-triage-fields").appendChild(l), o.classList.add("will-submit"), t.next = 15, f.microtask();
                    case 15:
                        N.deactivate(a);
                    case 16:
                    case "end":
                        return t.stop()
                }
            }, t, this)
        }));
        return function(e) {
            return t.apply(this, arguments)
        }
    }()), r.on("menu:deactivate", ".js-issues-toolbar-triage .js-menu-container", function() {
        var e = X(regeneratorRuntime.mark(function e(t) {
            var r, n, a, i, u;
            return regeneratorRuntime.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                    case 0:
                        if (r = t.currentTarget, (n = r.querySelector("form.will-submit")) instanceof HTMLFormElement) {
                            e.next = 4;
                            break
                        }
                        return e.abrupt("return");
                    case 4:
                        return r.classList.add("is-loading"), a = n.action, i = n.method, e.prev = 7, e.next = 10, k.fetchJSON(a, {
                            method: i,
                            body: new FormData(n)
                        });
                    case 10:
                        return u = e.sent, e.next = 13, s.fetchPoll(u.job.url, {
                            headers: {
                                accept: "application/json"
                            }
                        });
                    case 13:
                        o(r instanceof HTMLElement, "app/assets/modules/github/issues/triage.js:81"), N.deactivate(r), location.reload(), e.next = 21;
                        break;
                    case 18:
                        e.prev = 18, e.t0 = e.catch(7), r.classList.add("has-error");
                    case 21:
                        n.classList.remove("will-submit"), t.preventDefault();
                    case 23:
                    case "end":
                        return e.stop()
                }
            }, e, this, [
                [7, 18]
            ])
        }));
        return function(t) {
            return e.apply(this, arguments)
        }
    }());
    c.remoteForm(".js-undo-issue-event-form", function() {
        var t = X(regeneratorRuntime.mark(function t(r, n) {
            var a, s, o;
            return regeneratorRuntime.wrap(function(t) {
                for (;;) switch (t.prev = t.next) {
                    case 0:
                        return t.next = 2, n.text();
                    case 2:
                        for (a = e.getAttribute(r, "action"), r.remove(), s = document.querySelectorAll('.js-undo-issue-event-form[action="' + a + '"]'), o = 0; o < s.length; o++) s[o].remove();
                    case 6:
                    case "end":
                        return t.stop()
                }
            }, t, void 0)
        }));
        return function(e, r) {
            return t.apply(this, arguments)
        }
    }());
    var ki = function(e) {
            function t(e) {
                Q(this, t);
                var r = te(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
                return r.name = "JumpToParseError", r
            }
            return ee(t, e), t
        }(Error),
        Ei = function(e) {
            function t(e) {
                Q(this, t);
                var r = te(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e.message));
                return r.name = "JumpToPageViewError", r.stack = e.stack, r.message, r
            }
            return ee(t, e), t
        }(Error);
 
    function Ti(e) {
        var t = void 0;
        switch (e.type) {
            case "Project":
                o(e.owner, "app/assets/modules/github/jump-to/page-key-helpers.js:10"), o(null !== e.number && void 0 !== e.number, "app/assets/modules/github/jump-to/page-key-helpers.js:11"), t = Ai(e.owner.name, "" + e.number);
                break;
            case "Repository":
                t = Si.apply(void 0, ae(e.name.split("/")));
                break;
            case "Team":
                t = qi.apply(void 0, ae(e.name.split("/")));
                break;
            default:
                throw new Error("Invalid Suggestion type: " + e.type)
        }
        return t
    }
 
    function qi(e, t) {
        return "team:" + e + "/" + t
    }
 
    function Si(e, t) {
        return "repository:" + e + "/" + t
    }
 
    function Ai(e, t) {
        return "project:" + e + "/" + t
    }
    var Mi = {
        frequency: .6,
        recency: .4
    };
 
    function Hi(e, t, r) {
        var n = t.get(e) || 0,
            a = r.get(e) || 0;
        return n * Mi.frequency + a * Mi.recency
    }
 
    function Ii(e) {
        var t = [].concat(ae(Object.keys(e))).reduce(function(t, r) {
            return t + e[r].visitCount
        }, 0);
        return new Map(Object.keys(e).map(function(r) {
            return [r, e[r].visitCount / t]
        }))
    }
 
    function Ri(e) {
        var t = [].concat(ae(Object.keys(e))).sort(function(t, r) {
                return e[t].lastVisitedAt - e[r].lastVisitedAt
            }),
            r = t.length;
        return new Map(t.map(function(e, t) {
            return [e, (t + 1) / r]
        }))
    }
    var _i = "jump_to:page_views",
        Ci = /^\/orgs\/([a-z0-9-]+)\/teams\/([\w-]+)/,
        Fi = [/^\/([^/]+)\/([^/]+)\/?$/, /^\/([^/]+)\/([^/]+)\/blob/, /^\/([^/]+)\/([^/]+)\/tree/, /^\/([^/]+)\/([^/]+)\/issues/, /^\/([^/]+)\/([^/]+)\/pulls?/, /^\/([^/]+)\/([^/]+)\/pulse/],
        Pi = [
            ["organization", /^\/orgs\/([a-z0-9-]+)\/projects\/([0-9-]+)/],
            ["repository", /^\/([^/]+)\/([^/]+)\/projects\/([0-9-]+)/]
        ],
        Ni = /^(team|repository|project):[^/]+\/[^/]+(\/([^/]+))?$/,
        Di = 100;
 
    function Oi() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : zi();
        if (!e) return {};
        var t = e.getItem(_i);
        if (!t) return {};
        var r = void 0;
        try {
            r = JSON.parse(t)
        } catch (t) {
            var n = new ki("Failed to parse jump-to localStorage contents");
            return O.reportError(n), Vi({}, e), {}
        }
        var a = {};
        for (var s in r)
            if (s.match(Ni)) a[s] = r[s];
            else {
                var o = new ki("Invalid jump-to pageview map key from localStorage");
                O.reportError(o)
            }
        return a
    }
 
    function Bi(e) {
        return Object.keys(e).length <= Di ? e : function(e) {
            var t = Ii(e),
                r = Ri(e);
            return Object.keys(e).map(function(e) {
                return {
                    pageKey: e,
                    score: Hi(e, t, r)
                }
            }).sort(function(e, t) {
                return t.score - e.score
            }).map(function(e) {
                return e.pageKey
            })
        }(e).slice(0, Di / 2).reduce(function(t, r) {
            return t[r] = e[r], t
        }, {})
    }
 
    function Ui(e, t) {
        var r = Oi(t),
            n = Math.floor(Date.now() / 1e3),
            a = r[e] || {
                lastVisitedAt: n,
                visitCount: 0
            };
        a.visitCount += 1, a.lastVisitedAt = n, r[e] = a, Vi(Bi(r), t)
    }
 
    function Vi(e, t) {
        t.setItem(_i, JSON.stringify(e))
    }
    var zi = function() {
        var e = "test-storage-availability";
        try {
            return window.localStorage.setItem(e, e), window.localStorage.removeItem(e), window.localStorage
        } catch (e) {
            return null
        }
    };
 
    function Wi() {
        var e = new FormData,
            t = !0,
            r = !1,
            n = void 0;
        try {
            for (var a, s = Object.keys(Oi())[Symbol.iterator](); !(t = (a = s.next()).done); t = !0) {
                var o = a.value;
                e.append("variables[pageViews][]", o)
            }
        } catch (e) {
            r = !0, n = e
        } finally {
            try {
                !t && s.return && s.return()
            } finally {
                if (r) throw n
            }
        }
        return e
    }
 
    function $i(e) {
        if (e.data.errors) return [];
        var t = e.data.suggestions.nodes,
            r = 1,
            n = !0,
            a = !1,
            s = void 0;
        try {
            for (var o, i = t[Symbol.iterator](); !(n = (o = i.next()).done); n = !0) {
                var u = o.value;
                u.rank = r++, u.pageKey = Ti(u), "Team" === u.type && (u.name = "@" + u.name)
            }
        } catch (e) {
            a = !0, s = e
        } finally {
            try {
                !n && i.return && i.return()
            } finally {
                if (a) throw s
            }
        }
        return t
    }
 
    function Ki(e, t, r) {
        var n = new URL(e, window.location.origin),
            a = new URLSearchParams(n.search.slice(1));
        a.set("q", t), r && a.set("unscoped_q", t);
        var s = new URLSearchParams(window.location.search).get("type");
        return s && a.set("type", s), n.search = a.toString(), n.toString()
    }
    var Ji = void 0;
 
    function Gi(e) {
        return Ji || (Ji = v.getMetadataByName(document, "enabled-features").split(",")), -1 !== Ji.indexOf(e)
    }
    var Xi = {};
 
    function Qi(t) {
        var r = e.getAttribute(t, "data-target-type");
        if ("Search" === r) {
            var n = e.query(document, ".js-site-search-form", HTMLFormElement),
                a = n.getAttribute("data-scope-type");
            a && Zi({
                dimensions: {
                    scope_id: parseInt(n.getAttribute("data-scope-id")),
                    scope_type: a
                }
            }), Yi("search")
        } else Zi({
            dimensions: {
                target_id: parseInt(t.getAttribute("data-target-id")),
                target_type: r
            },
            measures: {
                client_rank: parseInt(t.getAttribute("data-client-rank")),
                server_rank: parseInt(t.getAttribute("data-server-rank"))
            }
        }), Yi("click")
    }
 
    function Yi(e) {
        var t = parseInt(v.getMetadataByName(document, "octolytics-actor-id"));
        if (!t) return !1;
        Xi.dimensions = Xi.dimensions || {}, Xi.dimensions.actor_id = t;
        var r = Xi.dimensions && Xi.dimensions.session_id;
        return ("menu-activation" !== e || !r) && (!("menu-activation" !== e && !r) && ("menu-activation" === e && Zi({
            dimensions: {
                session_id: r = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(e) {
                    var t = 16 * Math.random() | 0,
                        r = "x" === e ? t : 3 & t | 8;
                    return r.toString(16)
                })
            }
        }), Xi.event_type = "jump-to-" + e, o(r, "app/assets/modules/github/jump-to/tracking.js:76"), function(e) {
            Gi("JUMP_TO_LOGGING") && console.log(JSON.stringify(e));
            xo(e)
        }(Xi), "menu-deactivation" !== e && "click" !== e && "search" !== e || (Xi = {}), !0))
    }
 
    function Zi(e) {
        e.context && (Xi.context = Object.assign(Xi.context || {}, e.context), Xi.dimensions = Object.assign(Xi.dimensions || {}, e.context)), e.dimensions && (Xi.dimensions = Object.assign(Xi.dimensions || {}, e.dimensions)), e.measures && (Xi.measures = Object.assign(Xi.measures || {}, e.measures))
    }
 
    function eu(e) {
        return !!(e ? e.closest(".js-jump-to-field") : document.querySelector(".js-jump-to-field"))
    }
 
    function tu(t) {
        var r = e.getAttribute(t, "data-jump-to-suggestions-path");
        return window.location.origin + r
    }
 
    function ru(t, r) {
        var n = t.value.trim(),
            a = function(e) {
                var t = (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null) || Oi(),
                    r = Ii(t),
                    n = Ri(t);
                return e.map(function(e) {
                    return {
                        suggestion: e,
                        score: Hi(e.pageKey, r, n)
                    }
                }).sort(function(e, t) {
                    return t.score - e.score
                }).map(function(e) {
                    return e.suggestion
                })
            }(function(e, t, r) {
                var n = e.replace(/\s/g, ""),
                    a = t.filter(function(e) {
                        return e.path !== r
                    });
                return n ? rn(a, n, {
                    text: function(e) {
                        return e.name
                    }
                }) : a
            }(n, r, window.location.pathname)),
            s = a.slice(0, 7);
        Zi({
                measures: {
                    result_count: a.length,
                    display_count: s.length,
                    filter_count: r.length - a.length
                },
                context: {
                    query: n,
                    display_set: s.map(function(e) {
                        return [e.type, e.databaseId]
                    })
                }
            }),
            function(t, r, n) {
                var a = t.form;
                o(a, "app/assets/modules/github/jump-to/render.js:78");
                var s = lu(".js-jump-to-suggestions-template-container"),
                    i = document.createDocumentFragment();
                n.length < 1 && !r ? function() {
                    if (!v.getMetadataByName(document, "user-login")) return;
                    var e = lu(".js-jump-to-no-results-template-container").cloneNode(!0);
                    e.classList.remove("d-none"), iu(e)
                }() : (n.forEach(function(t, n) {
                    i.appendChild(function(t, r, n, a) {
                        var s = t.cloneNode(!0);
                        s.id = "jump-to-suggestion-" + r.type.toLowerCase() + "-" + r.databaseId;
                        var o = e.query(s, ".js-jump-to-suggestion-path", HTMLAnchorElement);
                        o.href = r.path, o.setAttribute("data-target-type", r.type), o.setAttribute("data-target-id", "" + r.databaseId), o.setAttribute("data-client-rank", "" + a), o.setAttribute("data-server-rank", "" + r.rank);
                        var i = e.query(s, ".js-jump-to-suggestion-name");
                        switch (i.textContent = r.name, i.setAttribute("aria-label", r.name), kt(i, n.replace(/\s/g, "")), r.type) {
                            case "Team":
                                var u = e.query(s, ".js-jump-to-suggestion-avatar", HTMLImageElement);
                                u.alt = r.name, u.src = r.avatarUrl ? r.avatarUrl : "", u.classList.remove("d-none");
                                break;
                            case "Project":
                                uu(s, ".js-jump-to-octicon-project");
                                break;
                            case "Repository":
                                uu(s, ".js-jump-to-octicon-repo")
                        }
                        return e.query(s, ".js-jump-to-badge-jump").classList.remove("d-none"), s
                    }(s, t, r, n))
                }), iu(i))
            }(t, n, s), Yi("menu-activation") || Yi("query")
    }
 
    function nu(e) {
        e.classList.add("js-navigation-enable"), e.classList.add("jump-to-field-active")
    }
 
    function au(t) {
        e.query(document, ".js-jump-to-suggestions-container").classList.remove("d-none"), t.classList.add("jump-to-dropdown-visible"), e.query(document, ".js-jump-to").setAttribute("aria-expanded", "true")
    }
 
    function su() {
        e.query(document, ".js-jump-to-suggestions-container").classList.add("d-none"), e.query(document, ".js-jump-to-field").classList.remove("jump-to-dropdown-visible"), e.query(document, ".js-jump-to").setAttribute("aria-expanded", "false"), Yi("menu-deactivation")
    }
 
    function ou(t) {
        var r = t.form;
        o(r, "app/assets/modules/github/jump-to/render.js:38");
        var n = e.query(document, ".js-jump-to-suggestions-results-container"),
            a = t.value.trim(),
            s = !(!t.form || !t.form.getAttribute("data-scope-type")),
            i = e.query(n, ".js-jump-to-scoped-search"),
            u = e.query(n, ".js-jump-to-global-search");
        if (i.classList.toggle("d-none", !a || !s), u.classList.toggle("d-none", !a), a && s) {
            var c = cu(i, a, Ki(e.getAttribute(r, "action"), a, s), !0);
            n.replaceChild(c, i)
        }
        if (a) {
            var l = cu(u, a, Ki(e.getAttribute(r, "data-unscoped-search-url"), a, !1), !1);
            n.replaceChild(l, u)
        }
    }
 
    function iu(t) {
        var r = e.query(document, ".js-jump-to-suggestions-results-container"),
            n = !0,
            a = !1,
            s = void 0;
        try {
            for (var i, u = e.querySelectorAll(r, ".js-jump-to-suggestion")[Symbol.iterator](); !(n = (i = u.next()).done); n = !0) {
                var c = i.value;
                o(c.parentNode, "app/assets/modules/github/jump-to/render.js:115"), c.parentNode.removeChild(c)
            }
        } catch (e) {
            a = !0, s = e
        } finally {
            try {
                !n && u.return && u.return()
            } finally {
                if (a) throw s
            }
        }
        r.appendChild(t)
    }
 
    function uu(t, r) {
        var n = e.query(t, ".js-jump-to-octicon"),
            a = e.query(n, r, SVGElement);
        n.classList.remove("d-none"), a.classList.remove("d-none")
    }
 
    function cu(t, r, n, a) {
        var s = t.cloneNode(!0);
        s.id = "jump-to-suggestion-search-" + (a ? "scoped" : "global");
        var o = e.query(s, ".js-jump-to-suggestion-path", HTMLAnchorElement);
        o.href = n, o.setAttribute("data-target-type", "Search");
        var i = e.query(s, ".js-jump-to-suggestion-name");
        i.textContent = r, i.setAttribute("aria-label", r), uu(s, ".js-jump-to-octicon-search");
        var u = e.query(s, ".js-jump-to-badge-search");
        return u.classList.remove("d-none"), a ? e.query(u, ".js-jump-to-badge-search-text-default").classList.remove("d-none") : e.query(u, ".js-jump-to-badge-search-text-global").classList.remove("d-none"), s
    }
 
    function lu(t) {
        var r = e.query(document, ".js-jump-to-suggestions-container"),
            n = e.query(r, t).firstElementChild;
        return o(n instanceof HTMLElement, "app/assets/modules/github/jump-to/render.js:201"), n
    }
    var du = function() {
            var e = X(regeneratorRuntime.mark(function e(t) {
                var r, n, a;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                        case 0:
                            return r = tu(t), n = Wi(), e.prev = 2, e.next = 5, k.fetchJSON(s.csrfRequest(r, {
                                method: "POST",
                                body: n
                            }));
                        case 5:
                            return a = e.sent, e.abrupt("return", $i(a));
                        case 9:
                            if (e.prev = 9, e.t0 = e.catch(2), !e.t0.response || 422 !== e.t0.response.status) {
                                e.next = 15;
                                break
                            }
                            return e.abrupt("return", []);
                        case 15:
                            throw e.t0;
                        case 16:
                        case "end":
                            return e.stop()
                    }
                }, e, this, [
                    [2, 9]
                ])
            }));
            return function(t) {
                return e.apply(this, arguments)
            }
        }(),
        mu = function() {
            var e = X(regeneratorRuntime.mark(function e(t) {
                var r;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                        case 0:
                            return o((r = t) instanceof HTMLInputElement, "app/assets/modules/github/jump-to.js:78"), nu(r), au(r), fu || (fu = du(r)), ou(r), vu(r), e.t0 = ru, e.t1 = r, e.next = 11, fu;
                        case 11:
                            e.t2 = e.sent, (0, e.t0)(e.t1, e.t2);
                        case 13:
                        case "end":
                            return e.stop()
                    }
                }, e, this)
            }));
            return function(t) {
                return e.apply(this, arguments)
            }
        }(),
        fu = void 0;
    t.observe(".js-jump-to-field", {
        constructor: HTMLInputElement,
        add: function(e) {
            try {
                ! function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : zi();
                    if (t) {
                        var r = e.match(Ci);
                        if (r) Ui(qi(r[1], r[2]), t);
                        else {
                            for (var n = void 0, a = 0, s = Pi.length; a < s; a++) {
                                var i = re(Pi[a], 2),
                                    u = i[0],
                                    c = i[1];
                                if (n = e.match(c)) {
                                    var l = void 0,
                                        d = void 0;
                                    switch (u) {
                                        case "organization":
                                            l = n[1], d = n[2];
                                            break;
                                        case "repository":
                                            l = n[1] + "/" + n[2], d = n[3]
                                    }
                                    return o(l, "app/assets/modules/github/jump-to/page-views.js:104"), o(d, "app/assets/modules/github/jump-to/page-views.js:105"), void Ui(Ai(l, d), t)
                                }
                            }
                            for (var m = void 0, f = 0, p = Fi.length; f < p; f++)
                                if (m = e.match(Fi[f])) return void Ui(Si(m[1], m[2]), t)
                        }
                    }
                }(window.location.pathname)
            } catch (e) {
                O.reportError(new Ei(e))
            }
            d.addThrottledInputEventListener(e, X(regeneratorRuntime.mark(function t() {
                return regeneratorRuntime.wrap(function(t) {
                    for (;;) switch (t.prev = t.next) {
                        case 0:
                            return ou(e), vu(e), t.t0 = ru, t.t1 = e, t.next = 6, fu;
                        case 6:
                            t.t2 = t.sent, (0, t.t0)(t.t1, t.t2);
                        case 8:
                        case "end":
                            return t.stop()
                    }
                }, t, this)
            }))), document.activeElement && document.activeElement === e && mu(e)
        }
    }), n.onFocus(".js-jump-to-field", mu), r.on("navigation:keydown", ".js-site-search-form", function(t) {
        o(t instanceof CustomEvent, "app/assets/modules/github/jump-to.js:94");
        var r = t.currentTarget.querySelector('.js-navigation-item[aria-selected="true"]');
        switch (t.detail.hotkey) {
            case "Enter":
                if (r) Qi(e.query(r, ".js-jump-to-suggestion-path", HTMLElement));
                else {
                    var n = t.currentTarget;
                    o(n instanceof HTMLFormElement, "app/assets/modules/github/jump-to.js:102"), l.submit(n)
                }
                break;
            case "Escape":
                e.query(t.currentTarget, ".js-jump-to-field", HTMLInputElement).blur(), su()
        }
    }), r.on("navigation:focus", ".js-site-search-form", function(t) {
        var r = e.query(document, ".js-jump-to-field", HTMLInputElement),
            n = t.target.id;
        r.setAttribute("aria-activedescendant", n)
    });
    var pu = void 0;
 
    function vu(t) {
        var r = t.value.trim(),
            n = e.query(document, ".js-jump-to-suggestions-results-container");
        r ? _.focus(n) : _.activate(n)
    }
 
    function gu(t) {
        var r = t.currentTarget;
        o(r instanceof HTMLInputElement || r instanceof HTMLTextAreaElement, "app/assets/modules/github/length-limited-input-with-warning.js:36");
        var n = parseInt(r.getAttribute("data-input-max-length"), 10),
            a = parseInt(r.getAttribute("data-warning-length"), 10) || 5,
            s = r.value.replace(/(\r\n|\n|\r)/g, "\r\n"),
            i = n - s.length;
        if (i <= 0) {
            var u = s.substr(0, n);
            u.endsWith("\r") ? (u = u.substr(0, n - 1), i = 1) : i = 0, r.value = u
        }
        var c = e.getAttribute(r, "data-warning-text"),
            l = e.closest(r, ".js-length-limited-input-container"),
            d = e.query(l, ".js-length-limited-input-warning");
        i <= a ? (d.textContent = c.replace(new RegExp("{{remaining}}", "g"), "" + i), d.classList.remove("d-none")) : (d.textContent = "", d.classList.add("d-none"))
    }
 
    function hu(t) {
        var r = t.currentTarget,
            n = e.query(r, ".js-milestone-edit-cancel"),
            a = n.getAttribute("data-confirm-changes");
        a && (j.hasDirtyFields(r) ? n.setAttribute("data-confirm", a) : n.removeAttribute("data-confirm"))
    }
 
    function yu(t, n) {
        r.on("click", t + " .js-sortable-button", function(r) {
            var a = r.currentTarget;
            o(a instanceof HTMLElement, "app/assets/modules/github/sortable-button.js:10");
            var s = e.closest(a, t),
                i = a.getAttribute("data-direction"),
                u = s.parentElement;
            o(u, "app/assets/modules/github/sortable-button.js:14");
            var c = Array.from(u.children).indexOf(s);
            "up" === i && s.previousElementSibling ? s.previousElementSibling.insertAdjacentElement("beforebegin", s) : "down" === i && s.nextElementSibling && s.nextElementSibling.insertAdjacentElement("afterend", s);
            var l = Array.from(u.children).indexOf(s);
            a.focus(), n({
                oldIndex: c,
                newIndex: l,
                item: s
            })
        })
    }
    r.on("focusout", ".js-jump-to", function() {
        var t = e.query(document, ".js-jump-to-field", HTMLInputElement);
        pu = setTimeout(function() {
            ! function(e) {
                e.classList.remove("js-navigation-enable"), e.classList.remove("jump-to-field-active")
            }(t), su()
        }, 200)
    }), r.on("focusin", ".js-jump-to", function() {
        clearTimeout(pu), au(e.query(document, ".js-jump-to-field", HTMLInputElement))
    }), r.on("click", ".js-jump-to-suggestion-path", function(t) {
        var r, n, a, s, i = t.currentTarget;
        if (o(i instanceof HTMLAnchorElement, "app/assets/modules/github/jump-to.js:142"), "Search" === i.getAttribute("data-target-type")) {
            var u = e.query(document, ".js-jump-to-field", HTMLInputElement);
            i.href = (r = u.value.trim(), n = i.href, a = new URL(n), (s = new URLSearchParams(a.search.slice(1))).get("q") && s.set("q", r), s.get("unscoped_q") && s.set("unscoped_q", r), a.search = s.toString(), a.toString())
        }
        Qi(i)
    }), r.on("submit", ".js-site-search-form", function(e) {
        if (eu()) {
            var t = e.target;
            t.getAttribute("data-scoped-search-url") && Zi({
                scope_type: t.getAttribute("data-scope-type"),
                scope_id: t.getAttribute("data-scope-id")
            }), Yi("search")
        }
    }), r.on("click", ".js-details-target-new-label", function(t) {
        var r = t.target;
        o(r instanceof HTMLElement, "app/assets/modules/github/labels/maintainer-label-prompt.js:10");
        var n = he(r, "Popover");
        if (n) {
            var a = e.query(n, "form", HTMLFormElement);
            l.submit(a)
        }
    }), t.observe(".js-length-limited-input", {
        add: function(e) {
            e.addEventListener("input", gu), e.addEventListener("change", gu)
        },
        remove: function(e) {
            e.removeEventListener("input", gu), e.removeEventListener("change", gu)
        }
    }), t.observe("link[rel=prefetch-viewed]", {
        initialize: function() {
            requestIdleCallback(function() {
                fetch(location.href, {
                    method: "HEAD",
                    credentials: "same-origin",
                    headers: {
                        Purpose: "prefetch-viewed"
                    }
                })
            })
        }
    }), r.on("click", ".js-manage-requests-tabs-item", function(t) {
        var r = t.currentTarget,
            n = e.closest(r, ".js-manage-memberships-container");
        e.query(n, ".js-manage-invitations-tabs-item").classList.remove("selected"), r.classList.add("selected");
        var a = e.query(n, ".js-manage-invitations-list"),
            s = e.query(n, ".js-manage-requests-list");
        a.classList.add("d-none"), s.classList.remove("d-none")
    }), r.on("click", ".js-manage-invitations-tabs-item", function(t) {
        var r = t.currentTarget,
            n = e.closest(r, ".js-manage-memberships-container");
        e.query(n, ".js-manage-requests-tabs-item").classList.remove("selected"), r.classList.add("selected");
        var a = e.query(n, ".js-manage-requests-list"),
            s = e.query(n, ".js-manage-invitations-list");
        a.classList.add("d-none"), s.classList.remove("d-none")
    }), r.on("change", ".js-milestone-edit-form", hu), r.on("click", ".js-milestone-edit-form", hu);
    var bu = function() {
            var t = X(regeneratorRuntime.mark(function t(r) {
                var n, a;
                return regeneratorRuntime.wrap(function(t) {
                    for (;;) switch (t.prev = t.next) {
                        case 0:
                            if (!j.hasInteractions(r)) {
                                t.next = 2;
                                break
                            }
                            return t.abrupt("return");
                        case 2:
                            return n = e.getAttribute(r, "data-url"), t.next = 5, s.fetchSafeDocumentFragment(document, n);
                        case 5:
                            a = t.sent, U.preserveAnchorNodePosition(document, function() {
                                r.replaceWith(a)
                            });
                        case 7:
                        case "end":
                            return t.stop()
                    }
                }, t, this)
            }));
            return function(e) {
                return t.apply(this, arguments)
            }
        }(),
        ju = new WeakMap;
    r.on("socket:message", ".js-milestone-issues", function() {
        var t = X(regeneratorRuntime.mark(function t(r) {
            var n, a, s, i;
            return regeneratorRuntime.wrap(function(t) {
                for (;;) switch (t.prev = t.next) {
                    case 0:
                        if (o(r instanceof CustomEvent, "app/assets/modules/github/milestone-dragging.js:34"), n = r.currentTarget, a = r.detail.data, "1" !== (s = e.query(n, ".js-milestone-issues-container")).getAttribute("data-is-sorting")) {
                            t.next = 7;
                            break
                        }
                        return s.removeAttribute("data-is-sorting"), t.abrupt("return");
                    case 7:
                        return t.next = 9, V();
                    case 9:
                        (i = document.querySelector(".js-client-uid")) instanceof HTMLInputElement && i.value === a.client_uid || bu(n);
                    case 11:
                    case "end":
                        return t.stop()
                }
            }, t, this)
        }));
        return function(e) {
            return t.apply(this, arguments)
        }
    }()), c.remoteForm(".js-milestone-sort-form", function() {
        var t = X(regeneratorRuntime.mark(function t(r, n) {
            var a, s, o;
            return regeneratorRuntime.wrap(function(t) {
                for (;;) switch (t.prev = t.next) {
                    case 0:
                        return t.next = 2, n.json();
                    case 2:
                        a = t.sent, s = a.json, (o = e.query(r, ".js-milestone-reorder-feedback")).textContent = "", s.error ? e.query(r, ".js-milestone-changed").classList.remove("d-none") : (e.query(r, ".js-timestamp", HTMLInputElement).value = s.updated_at, o.textContent = o.getAttribute("data-success-text") || "");
                    case 7:
                    case "end":
                        return t.stop()
                }
            }, t, this)
        }));
        return function(e, r) {
            return t.apply(this, arguments)
        }
    }());
    var Lu = u(function(t) {
        var r = t.newIndex,
            n = t.item,
            a = e.closest(n, ".js-milestone-issues-container"),
            s = n.getAttribute("data-id") || "",
            o = function(e, t) {
                return e.querySelectorAll(".js-draggable-issue")[t]
            }(a, r - 1),
            i = o && o.getAttribute("data-id"),
            u = e.closest(a, ".js-milestone-sort-form", HTMLFormElement);
        e.query(u, ".js-item-id", HTMLInputElement).value = s, e.query(u, ".js-prev-id", HTMLInputElement).value = i || "", I.trackEvent({
            category: "Milestone",
            action: "reorder",
            label: "string" == typeof t.trackingLabel ? t.trackingLabel : "drag-and-drop"
        }), a.setAttribute("data-is-sorting", "1"), l.submit(u)
    }, 200);
 
    function wu(t, r) {
        Lu({
            item: r,
            newIndex: Array.from(t.querySelectorAll(".js-draggable-issue")).indexOf(r),
            trackingLabel: "keyboard-shortcut"
        }), _.refocus(e.closest(r, ".js-navigation-container"), r)
    }
 
    function xu(e, t) {
        var r = !0,
            n = !1,
            a = void 0;
        try {
            for (var s, o = document.querySelectorAll(".js-setting-toggle .js-status-indicator")[Symbol.iterator](); !(r = (s = o.next()).done); r = !0) {
                s.value.classList.remove("status-indicator-success", "status-indicator-loading", "status-indicator-failed")
            }
        } catch (e) {
            n = !0, a = e
        } finally {
            try {
                !r && o.return && o.return()
            } finally {
                if (n) throw a
            }
        }
        e.classList.add(t)
    }
    yu(".js-draggable-issue", Lu), r.on("navigation:keydown", ".js-draggable-issues-container .js-draggable-issue", function(t) {
        o(t instanceof CustomEvent, "app/assets/modules/github/milestone-dragging.js:110");
        var r = t.currentTarget,
            n = e.closest(r, ".js-draggable-issues-container");
        if ("J" === t.detail.hotkey) {
            var a = r.nextElementSibling;
            a && (a.after(r), wu(n, r), t.preventDefault(), t.stopPropagation())
        } else if ("K" === t.detail.hotkey) {
            var s = r.previousElementSibling;
            s && (s.before(r), wu(n, r), t.preventDefault(), t.stopPropagation())
        }
    }), t.observe(".js-draggable-issues-container", {
        add: function(e) {
            if (!ju.has(e)) {
                var t = B.create(e, {
                    animation: 150,
                    item: ".js-draggable-issue",
                    handle: ".js-drag-handle",
                    onUpdate: Lu,
                    chosenClass: "is-dragging"
                });
                ju.set(e, t)
            }
        },
        remove: function(e) {
            var t = ju.get(e);
            t && t.destroy()
        }
    }), r.on("submit", ".js-mobile-preference-form", function(t) {
        e.query(t.currentTarget, ".js-mobile-preference-anchor-field", HTMLInputElement).value = window.location.hash.substr(1)
    }), c.remoteForm(".js-setting-toggle", function() {
        var t = X(regeneratorRuntime.mark(function t(r, n) {
            var a;
            return regeneratorRuntime.wrap(function(t) {
                for (;;) switch (t.prev = t.next) {
                    case 0:
                        return xu(a = e.query(r, ".js-status-indicator"), "status-indicator-loading"), t.prev = 2, t.next = 5, n.text();
                    case 5:
                        t.next = 10;
                        break;
                    case 7:
                        t.prev = 7, t.t0 = t.catch(2), xu(a, "status-indicator-failed");
                    case 10:
                        xu(a, "status-indicator-success");
                    case 11:
                    case "end":
                        return t.stop()
                }
            }, t, this, [
                [2, 7]
            ])
        }));
        return function(e, r) {
            return t.apply(this, arguments)
        }
    }()), r.on("change", ".js-toggle-email-settings input", function() {
        var t = e.query(document, ".js-notification-emails"),
            r = document.querySelector(".js-toggle-email-settings input:checked");
        t.classList.toggle("d-none", !r)
    }), c.remoteForm(".js-unignore-form, .js-ignore-form, .js-unsubscribe-form, .js-subscribe-form", function() {
        var t = X(regeneratorRuntime.mark(function t(r, n) {
            var a, s;
            return regeneratorRuntime.wrap(function(t) {
                for (;;) switch (t.prev = t.next) {
                    case 0:
                        return (a = e.closest(r, ".js-subscription-row")).classList.add("loading"), t.prev = 2, t.next = 5, n.text();
                    case 5:
                        t.next = 13;
                        break;
                    case 7:
                        t.prev = 7, t.t0 = t.catch(2), a.classList.remove("loading"), (s = e.query(r, ".btn-sm")).classList.add("btn-danger"), s.setAttribute("title", a.getAttribute("data-error-message") || "");
                    case 13:
                        a.classList.remove("loading"), r.classList.contains("js-unignore-form") || r.classList.contains("js-unsubscribe-form") ? a.classList.add("unsubscribed") : (r.classList.contains("js-ignore-form") || r.classList.contains("js-subscribe-form")) && a.classList.remove("unsubscribed");
                    case 15:
                    case "end":
                        return t.stop()
                }
            }, t, this, [
                [2, 7]
            ])
        }));
        return function(e, r) {
            return t.apply(this, arguments)
        }
    }()), c.remoteForm(".js-thread-subscribe-form", function() {
        var t = X(regeneratorRuntime.mark(function t(r, n) {
            var a, s;
            return regeneratorRuntime.wrap(function(t) {
                for (;;) switch (t.prev = t.next) {
                    case 0:
                        return t.next = 2, n.text();
                    case 2:
                        a = t.sent, s = e.closest(r, ".js-thread-subscription-status"), a && b.replaceContent(s, a.text);
                    case 5:
                    case "end":
                        return t.stop()
                }
            }, t, this)
        }));
        return function(e, r) {
            return t.apply(this, arguments)
        }
    }());
    var ku = function() {
        var e = X(regeneratorRuntime.mark(function e(t) {
            return regeneratorRuntime.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                    case 0:
                        return e.next = 2, jn(document);
                    case 2:
                        return e.next = 4, new Promise(function(e) {
                            return setTimeout(e, 1e3)
                        });
                    case 4:
                        o(t instanceof HTMLButtonElement, "app/assets/modules/github/oauth.js:9"), t.disabled = !1;
                    case 6:
                    case "end":
                        return e.stop()
                }
            }, e, this)
        }));
        return function(t) {
            return e.apply(this, arguments)
        }
    }();
 
    function Eu() {
        var t = document.querySelector(".js-org-reinstate-forms"),
            r = document.querySelectorAll(".js-org-reinstate-option:checked");
        if (t && 1 === r.length) {
            var n = e.getAttribute(r[0], "data-form"),
                a = t.getElementsByClassName("js-togglable-form"),
                s = !0,
                i = !1,
                u = void 0;
            try {
                for (var c, l = a[Symbol.iterator](); !(s = (c = l.next()).done); s = !0) {
                    c.value.classList.add("d-none")
                }
            } catch (e) {
                i = !0, u = e
            } finally {
                try {
                    !s && l.return && l.return()
                } finally {
                    if (i) throw u
                }
            }
            var d = document.getElementById(n);
            o(d, "app/assets/modules/github/orgs/invitations.js:41"), d.classList.remove("d-none")
        }
    }
    t.observe("#js-oauth-authorize-btn", function(e) {
        ku(e)
    }), X(regeneratorRuntime.mark(function e() {
        return regeneratorRuntime.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
                case 0:
                    return e.next = 2, h.loaded;
                case 2:
                    window._octo.push(["enablePerformance"]), window._octo.push(["recordPageView"]);
                case 4:
                case "end":
                    return e.stop()
            }
        }, e, this)
    }))(), document.addEventListener("pjax:complete", function() {
        window._octo.push(["recordPageView"])
    }), r.on("change", ".js-two-factor-needs-enforced", function(t) {
        var r = t.currentTarget;
        o(r instanceof HTMLInputElement, "app/assets/modules/github/orgs/2fa.js:36"), e.query(document, ".js-confirm-2fa-modal").classList.toggle("d-none", !r.checked), e.query(document, ".js-2fa-save-button").classList.toggle("d-none", r.checked)
    }), t.observe(".js-two-factor-enforcement-poller", function(e) {
        e.addEventListener("load", function() {
            window.location.reload()
        })
    }), r.on("click", ".js-invitations-team-suggestions-view-all", function() {
        var t = X(regeneratorRuntime.mark(function t(r) {
            var n, a, o, i, u, c, l, d, m, f, p;
            return regeneratorRuntime.wrap(function(t) {
                for (;;) switch (t.prev = t.next) {
                    case 0:
                        return n = r.currentTarget, a = e.getAttribute(n, "data-url"), o = e.querySelectorAll(document, ".js-invitation-toggle-team:checked", HTMLInputElement).map(function(e) {
                            return e.value
                        }), t.next = 5, s.fetchSafeDocumentFragment(document, a);
                    case 5:
                        for (i = t.sent, (u = e.closest(n, "ul")).innerHTML = "", u.appendChild(i), c = !0, l = !1, d = void 0, t.prev = 12, m = o[Symbol.iterator](); !(c = (f = m.next()).done); c = !0) p = f.value, e.query(u, '.js-invitation-toggle-team[value="' + p + '"]', HTMLInputElement).checked = !0;
                        t.next = 20;
                        break;
                    case 16:
                        t.prev = 16, t.t0 = t.catch(12), l = !0, d = t.t0;
                    case 20:
                        t.prev = 20, t.prev = 21, !c && m.return && m.return();
                    case 23:
                        if (t.prev = 23, !l) {
                            t.next = 26;
                            break
                        }
                        throw d;
                    case 26:
                        return t.finish(23);
                    case 27:
                        return t.finish(20);
                    case 28:
                    case "end":
                        return t.stop()
                }
            }, t, this, [
                [12, 16, 20, 28],
                [21, , 23, 27]
            ])
        }));
        return function(e) {
            return t.apply(this, arguments)
        }
    }()), r.on("change", ".js-org-reinstate-option", Eu), t.observe(".js-org-reinstate-forms", Eu);
    var Tu = function() {
        var t = X(regeneratorRuntime.mark(function t(r, n, a, o) {
            var i, u, c, l;
            return regeneratorRuntime.wrap(function(t) {
                for (;;) switch (t.prev = t.next) {
                    case 0:
                        return i = e.getAttribute(r, "data-url"), u = new URL(i, window.location.origin), (c = new URLSearchParams(u.search.slice(1))).append("member", n), c.append("action_type", a), o && c.append("return_to", o), u.search = c.toString(), qu(!0), e.query(document, ".js-add-team-member-form").hidden = !0, t.next = 11, s.fetchSafeDocumentFragment(document, u);
                    case 11:
                        l = t.sent, qu(!1), r.innerHTML = "", r.appendChild(l);
                    case 15:
                    case "end":
                        return t.stop()
                }
            }, t, this)
        }));
        return function(e, r, n, a) {
            return t.apply(this, arguments)
        }
    }();
 
    function qu(t) {
        e.query(document, ".js-add-members-loading-state").hidden = !t, e.query(document, ".js-add-members-modal-content").hidden = t
    }
 
    function Su() {
        e.query(document, ".js-save-member-privileges-button-container").classList.toggle("member-privilege-radios-preserved", Au() && Mu() && Hu())
    }
 
    function Au() {
        return "" === e.query(document, ".js-customize-member-privileges-default-repository-permission-radio:checked", HTMLInputElement).value
    }
 
    function Mu() {
        return "0" === e.query(document, ".js-customize-member-privileges-repository-creation-radio:checked", HTMLInputElement).value
    }
 
    function Hu() {
        return "secret" === e.query(document, ".js-customize-member-privileges-team-privacy-radio:checked", HTMLInputElement).value
    }
 
    function Iu(e) {
        var t = !0,
            r = !1,
            n = void 0;
        try {
            for (var a, s = e[Symbol.iterator](); !(t = (a = s.next()).done); t = !0) {
                var o = a.value;
                null !== o && o.classList.remove("has-removed-contents")
            }
        } catch (e) {
            r = !0, n = e
        } finally {
            try {
                !t && s.return && s.return()
            } finally {
                if (r) throw n
            }
        }
    }
 
    function Ru(e) {
        var t = !0,
            r = !1,
            n = void 0;
        try {
            for (var a, s = e[Symbol.iterator](); !(t = (a = s.next()).done); t = !0) {
                var o = a.value;
                null !== o && o.classList.add("has-removed-contents")
            }
        } catch (e) {
            r = !0, n = e
        } finally {
            try {
                !t && s.return && s.return()
            } finally {
                if (r) throw n
            }
        }
    }
 
    function _u(t) {
        for (var r in t.selectors) {
            var n = t.selectors[r],
                a = document.querySelector(r);
            n && a && (a.textContent = n)
        }
        var s = 100 === t.filled_seats_percent;
        e.query(document, ".js-live-update-seats-percent").style.width = t.filled_seats_percent + "%", e.query(document, ".js-need-more-seats").classList.toggle("d-none", !s), e.query(document, ".js-add-org-member-form").classList.toggle("d-none", s)
    }
    r.on("click", ".js-membership-tab", function(t) {
        var r = e.getAttribute(t.currentTarget, "data-membership"),
            n = e.query(document, ".js-member-filter-field", HTMLInputElement),
            a = n.value,
            s = new RegExp("membership:[a-z-]+"),
            o = a.toString().trim().replace(s, "");
        n.value = (o + " " + r).replace(/\s\s/, " "), n.focus(), d.dispatchThrottledInputEvent(n), e.query(document, ".js-membership-tabs").classList.remove("selected"), t.currentTarget.classList.add("selected")
    }), r.on("click", ".js-member-search-filter", function(t) {
        t.preventDefault();
        var r = e.getAttribute(t.currentTarget, "data-filter"),
            n = e.closest(t.currentTarget, ".js-select-menu, [data-filter-on]"),
            a = e.getAttribute(n, "data-filter-on"),
            s = e.query(document, ".js-member-filter-field", HTMLInputElement),
            o = s.value,
            i = new RegExp(a + ":[a-z]+"),
            u = o.toString().trim().replace(i, "");
        s.value = (u + " " + r).replace(/\s\s/, " "), s.focus(), d.dispatchThrottledInputEvent(s)
    }), r.on("submit", ".js-needs-interstitial .js-approve-membership-request", function(t) {
        var r = t.currentTarget;
        o(r instanceof HTMLFormElement, "app/assets/modules/github/orgs/members.js:57");
        var n = e.getAttribute(e.query(r, "[data-member-name]"), "data-member-name"),
            a = e.getAttribute(r, "data-action-type"),
            s = e.closest(r, ".js-add-members-container");
        t.preventDefault(), Tu(s, n, a, null)
    }), r.on("submit", ".js-needs-interstitial.js-add-team-member-form", function(t) {
        var r = t.currentTarget;
        o(r instanceof HTMLFormElement, "app/assets/modules/github/orgs/members.js:69");
        var n = e.namedItem(r, "member");
        if (n.value) {
            var a = e.getAttribute(r, "data-action-type"),
                s = e.query(document, ".js-add-members-container");
            t.preventDefault();
            var i = r.getAttribute("data-return-to");
            Tu(s, n.value, a, i)
        }
    }), t.observe("#add-team-member", function(t) {
        var r = e.query(t, "details-dialog"),
            n = r.innerHTML;
        t.addEventListener("toggle", function(e) {
            var t = e.currentTarget;
            o(t instanceof HTMLElement, "app/assets/modules/github/orgs/members.js:112"), t.hasAttribute("open") || (r.innerHTML = n)
        })
    }), c.remoteForm(".js-add-org-member-form", function() {
        var t = X(regeneratorRuntime.mark(function t(r, n) {
            var a, s, o, u, c, l, d, m, f, p, v;
            return regeneratorRuntime.wrap(function(t) {
                for (;;) switch (t.prev = t.next) {
                    case 0:
                        return a = e.query(document, ".js-member-list"), r.classList.add("is-sending"), (s = document.querySelector(".flash-messages")) && s.remove(), o = void 0, t.prev = 5, t.next = 8, n.json();
                    case 8:
                        o = t.sent, t.next = 17;
                        break;
                    case 11:
                        if (t.prev = 11, t.t0 = t.catch(5), t.t0.response || t.t0.response.json) {
                            t.next = 15;
                            break
                        }
                        return t.abrupt("return");
                    case 15:
                        return a.insertAdjacentHTML("beforebegin", t.t0.response.json.message_html), t.abrupt("return");
                    case 17:
                        if (r.classList.remove("is-sending"), e.query(r, "auto-complete", AutocompleteElement).value = "", u = e.query(i.parseHTML(document, o.json.list_item_html), "*"), !(c = u.getAttribute("data-login"))) {
                            t.next = 49;
                            break
                        }
                        l = !0, d = !1, m = void 0, t.prev = 25, f = a.children[Symbol.iterator]();
                    case 27:
                        if (l = (p = f.next()).done) {
                            t.next = 35;
                            break
                        }
                        if ((v = p.value).getAttribute("data-login") !== c) {
                            t.next = 32;
                            break
                        }
                        return v.remove(), t.abrupt("break", 35);
                    case 32:
                        l = !0, t.next = 27;
                        break;
                    case 35:
                        t.next = 41;
                        break;
                    case 37:
                        t.prev = 37, t.t1 = t.catch(25), d = !0, m = t.t1;
                    case 41:
                        t.prev = 41, t.prev = 42, !l && f.return && f.return();
                    case 44:
                        if (t.prev = 44, !d) {
                            t.next = 47;
                            break
                        }
                        throw m;
                    case 47:
                        return t.finish(44);
                    case 48:
                        return t.finish(41);
                    case 49:
                        a.prepend(u);
                    case 50:
                    case "end":
                        return t.stop()
                }
            }, t, this, [
                [5, 11],
                [25, 37, 41, 49],
                [42, , 44, 48]
            ])
        }));
        return function(e, r) {
            return t.apply(this, arguments)
        }
    }()), r.on("change", ".js-customize-member-privileges-default-repository-permission-radio", function() {
        e.query(document, ".js-migrate-ability-list-item-default-repository-permission").classList.toggle("migrate-ability-not-possible", Au()), Su()
    }), r.on("change", ".js-customize-member-privileges-repository-creation-radio", function() {
        e.query(document, ".js-migrate-ability-list-item-members-can-create-repositories").classList.toggle("migrate-ability-not-possible", Mu()), Su()
    }), r.on("change", ".js-customize-member-privileges-team-privacy-radio", function() {
        e.query(document, ".js-migrate-ability-list-item-team-privacy").classList.toggle("migrate-ability-not-possible", Hu()), Su()
    }), t.observe(".js-save-member-privileges-button-container", Su), r.on("click", ".js-org-signup-duration-change", function(t) {
        o(t instanceof MouseEvent, "app/assets/modules/github/orgs/new.js:13");
        var r = t.currentTarget,
            n = e.query(document, ".js-plan-choice:checked", HTMLInputElement),
            a = e.query(document, "#js-pjax-container"),
            s = new URLSearchParams;
        s.append("plan_duration", e.getAttribute(r, "data-plan-duration")), s.append("plan", n.value);
        var i = e.query(document, ".js-new-organization-name", HTMLInputElement);
        i.value && s.append("login", i.value);
        var u = e.query(document, ".js-new-organization-billing-email", HTMLInputElement);
        u.value && s.append("billing_email", u.value), document.querySelector(".js-transform-user") && s.append("transform_user", "1");
        var c = t.currentTarget;
        o(c instanceof HTMLAnchorElement, "app/assets/modules/github/orgs/new.js:29"), c.search = "?" + s.toString(), L.click(t, {
            scrollTo: !1,
            container: a
        })
    }), r.on("autocheck:success", ".js-new-organization-name", function(t) {
        var r = t.target;
        o(r instanceof HTMLInputElement, "app/assets/modules/github/orgs/new.js:40");
        var n = e.closest(r, "dd").querySelector(".js-field-hint-name");
        n && (n.textContent = r.value)
    }), n.onInput(".js-company-name-input", function(t) {
        var r = t.target;
        o(r instanceof HTMLInputElement, "app/assets/modules/github/orgs/new.js:53");
        var n = r.form;
        o(n, "app/assets/modules/github/orgs/new.js:56");
        var a = n.querySelector(".js-company-name-text");
        if (a) {
            var s = e.query(n, ".js-corp-tos-link"),
                i = n.querySelector(".js-tos-link");
            i && (i.classList.add("d-none"), i.setAttribute("aria-hidden", "true")), s.classList.remove("d-none"), s.setAttribute("aria-hidden", "false"), a.textContent = " on behalf of your company, " + r.value
        }
    }), t.observe(".js-company-owned:not(:checked)", {
        constructor: HTMLInputElement,
        add: function(t) {
            var r = t.form;
            o(r, "app/assets/modules/github/orgs/new.js:84");
            var n = e.query(r, ".js-company-name-input", HTMLInputElement),
                a = e.query(document, ".js-company-name-text"),
                s = e.query(document, ".js-corp-tos-link"),
                i = e.query(document, ".js-tos-link");
            t.getAttribute("data-optional") && n.removeAttribute("required"), l.changeValue(n, ""), i.classList.remove("d-none"), i.setAttribute("aria-hidden", "false"), s.classList.add("d-none"), s.setAttribute("aria-hidden", "true"), a.textContent = ""
        }
    }), t.observe(".js-company-owned:checked", {
        constructor: HTMLInputElement,
        add: function(t) {
            var n = t.form;
            o(n, "app/assets/modules/github/orgs/new.js:109");
            var a = e.query(n, ".js-company-name-input");
            a.setAttribute("required", "required"), r.fire(a, "change")
        }
    }), t.observe(".js-plan-choice", {
        constructor: HTMLInputElement,
        add: function(t) {
            var r = t;
            r.addEventListener("change", function() {
                var t = document.querySelector(".js-new-business-section");
                t && r.checked && (t.classList.add("has-removed-contents"), e.query(document, ".js-company-owned", HTMLInputElement).disabled = !1)
            })
        }
    }), t.observe(".js-show-new-business-fields", {
        constructor: HTMLInputElement,
        add: function(e) {
            var t = e;
            t.addEventListener("change", function() {
                var e = document.querySelector(".js-new-business-section");
                e && t.checked && e.classList.remove("has-removed-contents")
            })
        }
    }), t.observe(".js-company-owned-autoselect", {
        constructor: HTMLInputElement,
        add: function(t) {
            var r = t;
 
            function n() {
                if (r.checked && r.form) {
                    var t = e.query(r.form, ".js-company-owned", HTMLInputElement);
                    l.changeValue(t, !0), document.querySelectorAll(".js-new-business-section").length > 0 && (t.disabled = !0)
                }
            }
            r.addEventListener("change", n), n()
        }
    }), c.remoteForm(".js-org-list-item .js-org-remove-item", function() {
        var t = X(regeneratorRuntime.mark(function t(r, n) {
            var a;
            return regeneratorRuntime.wrap(function(t) {
                for (;;) switch (t.prev = t.next) {
                    case 0:
                        return e.closest(r, ".js-org-list-item").classList.add("d-none"), t.prev = 1, t.next = 4, n.text();
                    case 4:
                        t.next = 13;
                        break;
                    case 6:
                        if (t.prev = 6, t.t0 = t.catch(1), e.closest(r, ".js-org-list-item").classList.remove("d-none"), !(a = r.getAttribute("data-error-message"))) {
                            t.next = 13;
                            break
                        }
                        return alert(a), t.abrupt("return");
                    case 13:
                        e.closest(r, ".js-org-list-item").remove();
                    case 14:
                    case "end":
                        return t.stop()
                }
            }, t, this, [
                [1, 6]
            ])
        }));
        return function(e, r) {
            return t.apply(this, arguments)
        }
    }()), r.on("click", ".js-enterprise-choice", function(e) {
        var t = document.querySelector(".js-enterprise-cloud-info"),
            r = document.querySelector(".js-enterprise-self-hosted-info"),
            n = document.querySelector(".js-billing-section"),
            a = document.querySelector(".SignUpContinueActions");
        "cloud" === e.target.value ? (Ru([r]), Iu([n, a, t])) : (Ru([n, a, t]), Iu([r]))
    }), c.remoteForm(".js-select-repo-permission", function() {
        var e = X(regeneratorRuntime.mark(function e(t, r) {
            var n, a, s;
            return regeneratorRuntime.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                    case 0:
                        return t.classList.remove("was-successful"), t.classList.add("is-loading"), e.next = 4, r.json();
                    case 4:
                        n = e.sent, t.classList.remove("is-loading"), t.classList.add("was-successful"), (a = t.closest(".js-org-repo")) && (s = n.json, a.classList.toggle("with-higher-access", s.members_with_higher_access));
                    case 9:
                    case "end":
                        return e.stop()
                }
            }, e, this)
        }));
        return function(t, r) {
            return e.apply(this, arguments)
        }
    }()), c.remoteForm(".js-per-seat-invite-field, .js-per-seat-invite .js-org-remove-item", function() {
        var e = X(regeneratorRuntime.mark(function e(t, r) {
            return regeneratorRuntime.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                    case 0:
                        return e.next = 2, r.json();
                    case 2:
                        _u(e.sent.json);
                    case 4:
                    case "end":
                        return e.stop()
                }
            }, e, this)
        }));
        return function(t, r) {
            return e.apply(this, arguments)
        }
    }());
    var Cu = function() {
        var t = X(regeneratorRuntime.mark(function t() {
            return regeneratorRuntime.wrap(function(t) {
                for (;;) switch (t.prev = t.next) {
                    case 0:
                        return t.next = 2, q.dialog({
                            content: e.query(document, "#disable-saml-confirmation", HTMLTemplateElement).content.cloneNode(!0)
                        });
                    case 2:
                        t.sent.addEventListener("dialog:remove", zu);
                    case 4:
                    case "end":
                        return t.stop()
                }
            }, t, this)
        }));
        return function() {
            return t.apply(this, arguments)
        }
    }();
 
    function Fu() {
        return e.query(document, ".js-saml-provider-settings-form", HTMLFormElement)
    }
 
    function Pu() {
        return Fu().querySelector(".js-saml-form-inputs")
    }
 
    function Nu() {
        return e.query(document, ".js-org-saml-confirm-enforcement-hidden", HTMLInputElement)
    }
 
    function Du(e) {
        e && e.classList.remove("d-none")
    }
 
    function Ou() {
        return "1" === e.query(document, ".js-org-saml-currently-enabled", HTMLInputElement).value && !e.query(document, ".js-org-enable-saml", HTMLInputElement).checked
    }
 
    function Bu() {
        return e.query(document, ".is-submit-button-value", HTMLInputElement)
    }
 
    function Uu() {
        return e.query(document, ".js-org-saml-enforce", HTMLInputElement).checked && "0" === Nu().value && !("1" === e.query(document, ".js-org-saml-previously-enforced", HTMLInputElement).value) && "1" === e.query(document, ".js-org-has-unlinked-saml-members", HTMLInputElement).value
    }
 
    function Vu() {
        Fu().submit()
    }
 
    function zu() {
        var e = document.querySelector(".js-org-enable-saml");
        e && e instanceof HTMLInputElement && (e.checked = !0, Du(Pu()))
    }
    r.on("click", ".js-org-enable-saml", function(e) {
        var t;
        o(e.currentTarget instanceof HTMLInputElement, "app/assets/modules/github/orgs/security.js:111"), e.currentTarget.checked ? Du(Pu()) : (t = Pu()) && t.classList.add("d-none")
    }), r.on("click", ".js-saml-submit", function(e) {
        e.preventDefault(), o(e.currentTarget instanceof HTMLButtonElement, "app/assets/modules/github/orgs/security.js:128"), S.persistSubmitButtonValue(e.currentTarget), l.submit(Fu())
    }), r.on("click", ".js-org-saml-confirm-enforce-button", function() {
        Nu().value = "true", l.submit(Fu())
    }), r.on("submit", ".js-saml-provider-settings-form", function(t) {
        t.preventDefault(), "test_settings" === Bu().name ? Vu() : "save_settings" === Bu().name && (Ou() ? Cu() : Uu() ? q.dialog({
            content: e.query(document, "#enforce-saml-confirmation", HTMLTemplateElement).content.cloneNode(!0)
        }) : Vu())
    });
    var Wu = function() {
        var t = X(regeneratorRuntime.mark(function t(r) {
            var n, a, o, i, u, c, l, d, m, f, p, v, g, h, y, b, j;
            return regeneratorRuntime.wrap(function(t) {
                for (;;) switch (t.prev = t.next) {
                    case 0:
                        n = e.closest(r, ".js-team-add-user-form"), a = e.query(n, ".js-team-add-user-name", HTMLInputElement), o = a.value, a.value = "", i = e.query(document, ".js-team-user-logins"), u = !0, c = !1, l = void 0, t.prev = 8, d = i.querySelectorAll("li")[Symbol.iterator]();
                    case 10:
                        if (u = (m = d.next()).done) {
                            t.next = 17;
                            break
                        }
                        if (m.value.getAttribute("data-login") !== o) {
                            t.next = 14;
                            break
                        }
                        return t.abrupt("return");
                    case 14:
                        u = !0, t.next = 10;
                        break;
                    case 17:
                        t.next = 23;
                        break;
                    case 19:
                        t.prev = 19, t.t0 = t.catch(8), c = !0, l = t.t0;
                    case 23:
                        t.prev = 23, t.prev = 24, !u && d.return && d.return();
                    case 26:
                        if (t.prev = 26, !c) {
                            t.next = 29;
                            break
                        }
                        throw l;
                    case 29:
                        return t.finish(26);
                    case 30:
                        return t.finish(23);
                    case 31:
                        return t.next = 33, M("low");
                    case 33:
                        return f = new URL(n.getAttribute("data-template-url") || "", window.location.origin), (p = new URLSearchParams(f.search.slice(1))).append("member", o), f.search = p.toString(), a.focus(), t.next = 40, s.fetchSafeDocumentFragment(document, f);
                    case 40:
                        for (v = t.sent, i.appendChild(v), g = !0, h = !1, y = void 0, t.prev = 45, b = e.querySelectorAll(document, ".js-login-field", HTMLInputElement)[Symbol.iterator](); !(g = (j = b.next()).done); g = !0) j.value.disabled = !1;
                        t.next = 53;
                        break;
                    case 49:
                        t.prev = 49, t.t1 = t.catch(45), h = !0, y = t.t1;
                    case 53:
                        t.prev = 53, t.prev = 54, !g && b.return && b.return();
                    case 56:
                        if (t.prev = 56, !h) {
                            t.next = 59;
                            break
                        }
                        throw y;
                    case 59:
                        return t.finish(56);
                    case 60:
                        return t.finish(53);
                    case 61:
                        n.classList.add("d-none");
                    case 62:
                    case "end":
                        return t.stop()
                }
            }, t, this, [
                [8, 19, 23, 31],
                [24, , 26, 30],
                [45, 49, 53, 61],
                [54, , 56, 60]
            ])
        }));
        return function(e) {
            return t.apply(this, arguments)
        }
    }();
 
    function $u(t, r) {
        e.query(t, ".js-add-child-team-loading-state").hidden = !r, e.query(t, ".js-add-child-team-modal-content").hidden = r
    }
 
    function Ku(t) {
        var r = e.query(t, ".js-inline-comment-form-container");
        r.classList.add("open"), e.query(r, ".js-write-tab").click(), e.query(r, ".js-comment-field").focus()
    }
 
    function Ju(t) {
        t.reset();
        var n = e.closest(t, ".js-inline-comment-form-container");
        n.classList.remove("open"), r.fire(n, "inlinecomment:collapse")
    }
    r.on("click", ".js-team-remove-user", function(t) {
        t.preventDefault();
        var r = !0,
            n = !1,
            a = void 0;
        try {
            for (var s, o = document.querySelectorAll(".js-team-add-user-form")[Symbol.iterator](); !(r = (s = o.next()).done); r = !0) {
                s.value.classList.remove("d-none")
            }
        } catch (e) {
            n = !0, a = e
        } finally {
            try {
                !r && o.return && o.return()
            } finally {
                if (n) throw a
            }
        }
        e.query(document, ".js-team-add-user-name").focus(), e.closest(t.currentTarget, "li").remove()
    }), r.on("click", ".js-team-add-user-button", function(e) {
        e.preventDefault(), Wu(e.currentTarget)
    }), r.on("click", ".js-rename-owners-team-next-btn", function() {
        var t = e.query(document, ".js-rename-owners-team-about-content");
        t.hidden = !t.hidden;
        var r = e.query(document, ".js-rename-owners-team-rename-form");
        r.hidden = !r.hidden
    }), r.on("change", ".js-add-child-team-completer", function() {
        var t = X(regeneratorRuntime.mark(function t(r) {
            var n, a, i, u, c;
            return regeneratorRuntime.wrap(function(t) {
                for (;;) switch (t.prev = t.next) {
                    case 0:
                        if (r.target === r.currentTarget) {
                            t.next = 2;
                            break
                        }
                        return t.abrupt("return");
                    case 2:
                        if (n = r.currentTarget, o(n instanceof AutocompleteElement, "app/assets/modules/github/orgs/team-add-child.js:17"), n.value) {
                            t.next = 6;
                            break
                        }
                        return t.abrupt("return");
                    case 6:
                        return $u(a = e.closest(n, ".js-add-team-container"), !0), i = e.closest(n, ".js-add-child-team-form"), u = e.getAttribute(i, "data-change-parent-summary-path"), t.next = 12, s.fetchSafeDocumentFragment(document, u);
                    case 12:
                        c = t.sent, e.query(i, ".js-add-team-search").hidden = !0, e.query(i, ".js-add-team-warning").append(c), $u(a, !1);
                    case 16:
                    case "end":
                        return t.stop()
                }
            }, t, this)
        }));
        return function(e) {
            return t.apply(this, arguments)
        }
    }()), r.on("click", ".js-expandable-team-breadcrumbs .js-team-breadcrumb-trigger", function() {
        var t = X(regeneratorRuntime.mark(function t(r) {
            var n;
            return regeneratorRuntime.wrap(function(t) {
                for (;;) switch (t.prev = t.next) {
                    case 0:
                        return (n = e.closest(r.target, ".js-expandable-team-breadcrumbs")).classList.add("is-loading"), t.prev = 2, t.next = 5, b.updateContent(n);
                    case 5:
                        t.next = 9;
                        break;
                    case 7:
                        t.prev = 7, t.t0 = t.catch(2);
                    case 9:
                        n.classList.remove("is-loading");
                    case 10:
                    case "end":
                        return t.stop()
                }
            }, t, this, [
                [2, 7]
            ])
        }));
        return function(e) {
            return t.apply(this, arguments)
        }
    }()), r.on("click", ".js-toggle-inline-comment-form", function(t) {
        Ku(e.closest(t.currentTarget, ".js-line-comments"))
    }), r.on("quote-selection", ".js-line-comments", function(e) {
        Ku(e.currentTarget)
    }), n.onKey("keydown", ".js-inline-comment-form-container form .js-comment-field", function(t) {
        var r = t.target;
        (o(r instanceof HTMLTextAreaElement, "app/assets/modules/github/behaviors/inline-comment.js:37"), r.classList.contains("js-navigation-enable")) || "Escape" === t.key && 0 === r.value.length && (Ju(e.closest(r, "form", HTMLFormElement)), t.preventDefault())
    }), r.on("click", ".js-hide-inline-comment-form", function(t) {
        var r = e.closest(t.currentTarget, "form", HTMLFormElement);
        !j.hasDirtyFields(r) || confirm(e.getAttribute(t.target, "data-confirm-cancel-text")) ? Ju(r) : t.preventDefault()
    });
    var Gu = function() {
        var e = X(regeneratorRuntime.mark(function e() {
            var t;
            return regeneratorRuntime.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                    case 0:
                        return e.next = 2, h.loaded;
                    case 2:
                        (t = document.querySelector(".js-show-discussion .js-mark-notification-form")) instanceof HTMLFormElement && l.submit(t);
                    case 4:
                    case "end":
                        return e.stop()
                }
            }, e, this)
        }));
        return function() {
            return e.apply(this, arguments)
        }
    }();
 
    function Xu(t) {
        var r = t.closest(".js-teams-write-a-post");
        return r ? function(t) {
            var r = e.query(t, ".js-team-discussions-post-compose");
            r.classList.contains("d-none") || (r.classList.add("d-none"), e.query(t, ".js-post-placeholder").classList.remove("d-none"), t.classList.remove("active")), e.query(t, ".js-comment-form-error").classList.add("d-none")
        }(r) : t.closest(".js-teams-reply-to-post") ? function(e) {
            o(e instanceof HTMLFormElement, "app/assets/modules/github/orgs/team-discussions.js:30"), Ju(e)
        }(t) : void 0
    }
 
    function Qu(e) {
        var t = nc(e);
        if (t) {
            o(/\[private\]/.test(t.name), "app/assets/modules/github/orgs/team-discussions.js:66");
            var n = t.getAttribute("data-original-value"),
                a = e.querySelector("1" === n ? ".js-discussion-post-select-private" : ".js-discussion-post-select-public");
            a && r.fire(a, "navigation:open")
        }
    }
 
    function Yu(e) {
        var t = e.closest(".js-teams-reply-to-post"),
            r = t && t.querySelector(".js-comment-form-error");
        r && r.classList.add("d-none")
    }
 
    function Zu(e, t) {
        e.textContent = (parseInt(e.textContent) + t).toString()
    }
 
    function ec(e) {
        e.addEventListener("transitionend", function(t) {
            t instanceof TransitionEvent && "opacity" === t.propertyName && e.remove()
        }, {
            once: !0
        }), e.classList.add("fade-out")
    }
 
    function tc(t, r) {
        t.classList.add("d-none"), o(t.parentElement, "app/assets/modules/github/orgs/team-discussions.js:224"), e.query(t.parentElement, r).classList.remove("d-none")
    }
 
    function rc(t, r) {
        var n = t.target.closest(".js-comment-update") || t.target.closest(".js-new-comment-form");
        o(n instanceof HTMLFormElement, "app/assets/modules/github/orgs/team-discussions.js:252");
        var a = nc(n);
        o(a, "app/assets/modules/github/orgs/team-discussions.js:256"), o(/\[private\]/.test(a.name), "app/assets/modules/github/orgs/team-discussions.js:257"), a.value = r;
        var s = t.target.closest(".js-discussion-post");
        if (s) {
            var i = e.query(s, ".js-discussion-post-privacy-icon");
            "1" === r ? (s.classList.add("discussion-post-private"), i.classList.remove("d-none")) : (s.classList.remove("discussion-post-private"), i.classList.add("d-none"))
        }
    }
 
    function nc(e) {
        var t = e.querySelector(".js-discussion-post-privacy-select");
        if (t) {
            var r = t.querySelector("input");
            if (r) return o(r instanceof HTMLInputElement, "app/assets/modules/github/orgs/team-discussions.js:280"), r
        }
    }
    r.on("click", ".js-team-discussions-team-description-toggle", function() {
        e.query(document, ".js-team-discussions-team-description").classList.toggle("d-none"), e.query(document, ".js-team-discussions-team-description-form").classList.toggle("d-none")
    }), r.on("click", ".js-team-discussions-post-toggle", function(t) {
        var r = e.closest(t.target, ".js-teams-write-a-post");
        r.classList.contains("active") || (r.classList.add("active"), e.query(r, ".js-team-discussions-post-compose").classList.remove("d-none"), e.query(r, ".js-post-placeholder").classList.add("d-none"), e.query(r, ".js-title-field").focus())
    }), r.on("click", ".js-hide-post-form", function(t) {
        var r = e.closest(t.target, ".js-new-comment-form", HTMLFormElement);
        !j.hasDirtyFields(r) || confirm(e.getAttribute(t.target, "data-confirm-cancel-text")) ? (Xu(t.target), Qu(r)) : t.preventDefault()
    }), r.on("click", ".js-hide-inline-comment-form", function(e) {
        Yu(e.target)
    }), c.remoteForm(".js-new-comment-form", function() {
        var e = X(regeneratorRuntime.mark(function e(t, r) {
            return regeneratorRuntime.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                    case 0:
                        return e.next = 2, r.text();
                    case 2:
                        Xu(t), Qu(t), Yu(t);
                    case 5:
                    case "end":
                        return e.stop()
                }
            }, e, this)
        }));
        return function(t, r) {
            return e.apply(this, arguments)
        }
    }()), c.remoteForm(".js-team-discussions-team-description-form", function() {
        var t = X(regeneratorRuntime.mark(function t(r, n) {
            var a, s, o;
            return regeneratorRuntime.wrap(function(t) {
                for (;;) switch (t.prev = t.next) {
                    case 0:
                        return t.prev = 0, t.next = 3, n.text();
                    case 3:
                        t.next = 7;
                        break;
                    case 5:
                        t.prev = 5, t.t0 = t.catch(0);
                    case 7:
                        a = e.query(document, ".js-team-discussions-team-description"), s = e.query(a, ".description"), o = e.query(document, ".js-team-discussions-team-description-field", HTMLTextAreaElement), a.classList.toggle("d-none"), r.classList.toggle("d-none"), o.value.trim() ? (s.textContent = o.value, o.defaultValue = o.value) : (s.textContent = "This team has no description", o.defaultValue = "");
                    case 13:
                    case "end":
                        return t.stop()
                }
            }, t, this, [
                [0, 5]
            ])
        }));
        return function(e, r) {
            return t.apply(this, arguments)
        }
    }()), c.remoteForm(".js-comment-pin", function() {
        var t = X(regeneratorRuntime.mark(function t(r, n) {
            var a, s, o, i, u, c, l;
            return regeneratorRuntime.wrap(function(t) {
                for (;;) switch (t.prev = t.next) {
                    case 0:
                        return (a = e.query(r, "button[type=submit]")).blur(), t.next = 4, n.text();
                    case 4:
                        s = e.query(r, 'input[name="team_discussion[pinned]"]', HTMLInputElement), o = document.querySelector("#pinned_posts_counter"), i = e.getAttribute(a, "aria-label"), u = e.getAttribute(a, "data-alternate-aria-label"), a.setAttribute("data-alternate-aria-label", i), a.setAttribute("aria-label", u), a.classList.toggle("pinned"), c = a.classList.contains("pinned"), o && (Zu(o, c ? 1 : -1), l = e.closest(o, ".js-pinned-post-tab"), !c && l.classList.contains("selected") && ec(e.closest(r, ".js-comment-delete-container"))), s.value = c ? "0" : "1";
                    case 14:
                    case "end":
                        return t.stop()
                }
            }, t, this)
        }));
        return function(e, r) {
            return t.apply(this, arguments)
        }
    }()), c.remoteForm(".js-comment-delete", function() {
        var e = X(regeneratorRuntime.mark(function e(t, r) {
            var n, a, s;
            return regeneratorRuntime.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                    case 0:
                        return e.next = 2, r.text();
                    case 2:
                        n = t.closest(".discussion-post"), (a = n && n.querySelector(".js-comment-pin button[type=submit]")) && a.classList.contains("pinned") && (s = document.querySelector("#pinned_posts_counter")) && Zu(s, -1);
                    case 5:
                    case "end":
                        return e.stop()
                }
            }, e, this)
        }));
        return function(t, r) {
            return e.apply(this, arguments)
        }
    }()), r.on("quote-selection", ".js-discussion-post", function(t) {
        var r = e.query(t.target, ".js-inline-comment-form-container");
        r.classList.add("open"), e.query(r, ".js-write-tab").click(), e.query(r, ".js-comment-field").focus()
    }), c.remoteForm(".js-comment-subscribe", function() {
        var e = X(regeneratorRuntime.mark(function e(t, r) {
            return regeneratorRuntime.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                    case 0:
                        return e.next = 2, r.text();
                    case 2:
                        tc(t, ".js-comment-unsubscribe");
                    case 3:
                    case "end":
                        return e.stop()
                }
            }, e, this)
        }));
        return function(t, r) {
            return e.apply(this, arguments)
        }
    }()), c.remoteForm(".js-comment-unsubscribe", function() {
        var e = X(regeneratorRuntime.mark(function e(t, r) {
            return regeneratorRuntime.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                    case 0:
                        return e.next = 2, r.text();
                    case 2:
                        tc(t, ".js-comment-subscribe");
                    case 3:
                    case "end":
                        return e.stop()
                }
            }, e, this)
        }));
        return function(t, r) {
            return e.apply(this, arguments)
        }
    }()), c.remoteForm(".js-discussion-post-update", function() {
        var e = X(regeneratorRuntime.mark(function e(t, r) {
            var n, a, s;
            return regeneratorRuntime.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                    case 0:
                        if (n = t.closest(".js-comment")) {
                            e.next = 3;
                            break
                        }
                        return e.abrupt("return");
                    case 3:
                        if (a = n.querySelector(".js-comment-title")) {
                            e.next = 6;
                            break
                        }
                        return e.abrupt("return");
                    case 6:
                        return e.next = 8, r.json();
                    case 8:
                        s = e.sent, a.textContent = s.json.title;
                    case 10:
                    case "end":
                        return e.stop()
                }
            }, e, this)
        }));
        return function(t, r) {
            return e.apply(this, arguments)
        }
    }()), r.on("selectmenu:selected", ".js-discussion-post-select-private", function(e) {
        rc(e, "1")
    }), r.on("selectmenu:selected", ".js-discussion-post-select-public", function(e) {
        rc(e, "0")
    }), Gu();
    var ac = function() {
            var e = X(regeneratorRuntime.mark(function e(t, r, n) {
                var a, o, i, u, c, l;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                        case 0:
                            if (!r.length) {
                                e.next = 24;
                                break
                            }
                            for (a = !0, o = !1, i = void 0, e.prev = 4, u = r[Symbol.iterator](); !(a = (c = u.next()).done); a = !0) c.value.classList.remove("d-none");
                            e.next = 12;
                            break;
                        case 8:
                            e.prev = 8, e.t0 = e.catch(4), o = !0, i = e.t0;
                        case 12:
                            e.prev = 12, e.prev = 13, !a && u.return && u.return();
                        case 15:
                            if (e.prev = 15, !o) {
                                e.next = 18;
                                break
                            }
                            throw i;
                        case 18:
                            return e.finish(15);
                        case 19:
                            return e.finish(12);
                        case 20:
                            t.classList.add("is-open"), oc = !1, e.next = 30;
                            break;
                        case 24:
                            return e.next = 26, s.fetchSafeDocumentFragment(document, n);
                        case 26:
                            l = e.sent, t.after(l), t.classList.add("is-open"), oc = !1;
                        case 30:
                        case "end":
                            return e.stop()
                    }
                }, e, this, [
                    [4, 8, 12, 20],
                    [13, , 15, 19]
                ])
            }));
            return function(t, r, n) {
                return e.apply(this, arguments)
            }
        }(),
        sc = function() {
            var t = X(regeneratorRuntime.mark(function t(r) {
                var n, a, o, i, u;
                return regeneratorRuntime.wrap(function(t) {
                    for (;;) switch (t.prev = t.next) {
                        case 0:
                            return n = e.getAttribute(r, "data-contents-url"), a = new URL(n, window.location.origin), (o = new URLSearchParams(a.search.slice(1))).append("query", r.value.trim()), a.search = o.toString(), i = e.query(document, ".js-select-team-results"), t.next = 8, s.fetchSafeDocumentFragment(document, a);
                        case 8:
                            u = t.sent, i.innerHTML = "", i.append(u);
                        case 11:
                        case "end":
                            return t.stop()
                    }
                }, t, this)
            }));
            return function(e) {
                return t.apply(this, arguments)
            }
        }(),
        oc = !1;
 
    function ic(t) {
        var r = e.closest(t, "form", HTMLFormElement),
            n = r.querySelector(".js-selected-team-id"),
            a = n instanceof HTMLInputElement && n.value,
            s = e.query(r, ".js-team-privacy-closed"),
            o = e.query(r, ".js-team-privacy-secret"),
            i = e.query(s, "input", HTMLInputElement),
            u = e.query(o, "input", HTMLInputElement);
        o.classList.toggle("tooltipped", !!a), o.classList.toggle("text-gray", !!a), u.disabled = !!a, a && (i.checked = !0)
    }
 
    function uc(e, t) {
        var r = e.value;
        e.value = t.textContent, t.textContent = r
    }
 
    function cc(e) {
        var t = e.match(/#?(?:L)(\d+)/g);
        return t ? t.map(function(e) {
            return parseInt(e.replace(/\D/g, ""))
        }) : []
    }
 
    function lc(e) {
        return {
            lineRange: cc(e),
            anchorPrefix: function(e) {
                var t = e.match(/(file-.+?-)L\d+?/i);
                return t ? t[1] : ""
            }(e)
        }
    }
 
    function dc(e, t) {
        return e - t
    }
    r.on("click", ".js-open-child-team", function(t) {
        if (!oc) {
            oc = !0;
            var r = t.currentTarget.getAttribute("data-parent-team-slug");
            if (r) {
                var n = document.querySelectorAll('.js-child-team[data-parent-team-slug="' + r + '"]'),
                    a = e.closest(t.currentTarget, ".js-team-row");
                if (a.classList.contains("is-open")) t.currentTarget.setAttribute("aria-expanded", "false"),
                    function(t, r) {
                        (function t(r) {
                            var n = !0;
                            var a = !1;
                            var s = void 0;
                            try {
                                for (var o, i = r[Symbol.iterator](); !(n = (o = i.next()).done); n = !0) {
                                    var u = o.value,
                                        c = e.getAttribute(u, "data-team-slug"),
                                        l = document.querySelectorAll('.js-child-team[data-parent-team-slug="' + c + '"]');
                                    t(l), u.classList.remove("is-open"), u.classList.add("d-none")
                                }
                            } catch (e) {
                                a = !0, s = e
                            } finally {
                                try {
                                    !n && i.return && i.return()
                                } finally {
                                    if (a) throw s
                                }
                            }
                        })(r), t.classList.remove("is-open"), oc = !1
                    }(a, n);
                else {
                    t.currentTarget.setAttribute("aria-expanded", "true");
                    var s = e.getAttribute(t.currentTarget, "data-child-team-url");
                    ac(a, n, s)
                }
            }
        }
    }), r.on("click", ".js-show-more-child-teams", function() {
        var t = X(regeneratorRuntime.mark(function t(r) {
            var n, a, o, i, u;
            return regeneratorRuntime.wrap(function(t) {
                for (;;) switch (t.prev = t.next) {
                    case 0:
                        if (!oc) {
                            t.next = 2;
                            break
                        }
                        return t.abrupt("return");
                    case 2:
                        return oc = !0, n = r.currentTarget, a = e.closest(n, ".js-team-row"), o = e.getAttribute(n, "data-child-team-url"), i = a.parentNode, t.next = 9, s.fetchSafeDocumentFragment(document, o);
                    case 9:
                        u = t.sent, a.before(u), i && i.removeChild(a), oc = !1;
                    case 13:
                    case "end":
                        return t.stop()
                }
            }, t, this)
        }));
        return function(e) {
            return t.apply(this, arguments)
        }
    }()), t.observe(".js-selected-team-field", {
        constructor: HTMLInputElement,
        initialize: function(e) {
            d.addThrottledInputEventListener(e, sc)
        }
    }), r.on("menu:activated", ".js-select-team-menu", function(e) {
        var t = e.target.querySelector(".js-selected-team-field");
        t && t.focus()
    }), r.on("selectmenu:selected", ".js-select-team", function(t) {
        var r = t.currentTarget,
            n = e.getAttribute(r, "data-selected-team-id"),
            a = e.query(document, "#selected-team-id", HTMLInputElement),
            s = e.query(r, ".js-selected-team-name").innerHTML,
            o = e.query(document, "#selected-team-name", HTMLInputElement);
        n !== a.value && (a.value = n, o.value = s)
    }), r.on("selectmenu:selected", ".js-clear-team-selection", function() {
        var t = e.query(document, ".js-select-button");
        t.textContent = t.getAttribute("data-placeholder") || "Select team"
    }), n.onInput(".js-team-ldap-group-field", function(t) {
        var r = t.currentTarget;
        o(r instanceof HTMLInputElement, "app/assets/modules/github/orgs/team-import.js:11"), e.closest(r, ".form-group").classList.remove("errored")
    }), r.on("change", ".js-import-ldap-group-completer", function(t) {
        if (t.target === t.currentTarget) {
            var r = t.target;
            o(r instanceof AutocompleteElement, "app/assets/modules/github/orgs/team-import.js:19");
            var n = e.closest(r, ".js-ldap-group-adder"),
                a = e.query(r, ".js-team-ldap-group-field", HTMLInputElement),
                s = e.query(n, ".js-team-ldap-dn-field", HTMLInputElement);
            if (s.value = "", r.value) {
                var i = JSON.parse(r.value),
                    u = i.dn,
                    c = i.cn;
                a.value = c, s.value = u
            }
        }
    }), c.remoteForm(".js-ldap-group-adder", function() {
        var t = X(regeneratorRuntime.mark(function t(r, n, a) {
            var s, o, i;
            return regeneratorRuntime.wrap(function(t) {
                for (;;) switch (t.prev = t.next) {
                    case 0:
                        return a.headers.set("X-Context", "import"), s = e.closest(r, ".js-ldap-import-groups-container"), o = void 0, t.prev = 3, t.next = 6, n.html();
                    case 6:
                        o = t.sent, t.next = 13;
                        break;
                    case 9:
                        return t.prev = 9, t.t0 = t.catch(3), t.t0.response && e.query(r, ".form-group").classList.add("errored"), t.abrupt("return");
                    case 13:
                        i = document.querySelector(".js-import-form-actions"), s.classList.remove("is-empty"), e.query(s, ".js-ldap-imported-groups").prepend(o.html), r.reset(), e.query(r, ".js-team-ldap-group-field").focus(), i && i.classList.remove("d-none");
                    case 19:
                    case "end":
                        return t.stop()
                }
            }, t, this, [
                [3, 9]
            ])
        }));
        return function(e, r, n) {
            return t.apply(this, arguments)
        }
    }()), r.on("submit", ".js-team-remove-group", function(t) {
        e.closest(t.currentTarget, ".js-team").classList.add("is-removing"), e.query(document, ".js-team-ldap-group-field").focus()
    }), c.remoteForm(".js-team-remove-group", function() {
        var t = X(regeneratorRuntime.mark(function t(r, n) {
            return regeneratorRuntime.wrap(function(t) {
                for (;;) switch (t.prev = t.next) {
                    case 0:
                        return t.prev = 0, t.next = 3, n.text();
                    case 3:
                        t.next = 9;
                        break;
                    case 5:
                        return t.prev = 5, t.t0 = t.catch(0), e.closest(r, ".js-team").classList.remove("is-removing"), t.abrupt("return");
                    case 9:
                        e.closest(r, ".js-team").remove(), document.querySelector(".js-team:not(.is-removing)") || (e.query(document, ".js-ldap-import-groups-container").classList.add("is-empty"), e.query(document, ".js-import-form-actions").classList.add("d-none"));
                    case 11:
                    case "end":
                        return t.stop()
                }
            }, t, this, [
                [0, 5]
            ])
        }));
        return function(e, r) {
            return t.apply(this, arguments)
        }
    }()), r.on("click", ".js-edit-team", function(t) {
        var r = e.closest(t.currentTarget, ".js-team");
        r.classList.contains("is-removing") || (r.classList.add("is-editing"), e.query(r, ".js-team-name-field").focus())
    }), r.on("click", ".js-cancel-team-edit", function(t) {
        var r = e.closest(t.currentTarget, ".js-team"),
            n = e.query(r, ".js-team-form", HTMLFormElement);
        r.classList.remove("is-editing"), n.reset()
    }), c.remoteForm(".js-team-form", function() {
        var t = X(regeneratorRuntime.mark(function t(r, n, a) {
            var s;
            return regeneratorRuntime.wrap(function(t) {
                for (;;) switch (t.prev = t.next) {
                    case 0:
                        return a.headers.set("X-Context", "import"), t.next = 3, n.html();
                    case 3:
                        s = t.sent, e.closest(r, ".js-team").replaceWith(s.html);
                    case 6:
                    case "end":
                        return t.stop()
                }
            }, t, this)
        }));
        return function(e, r, n) {
            return t.apply(this, arguments)
        }
    }()), r.on("click", ".js-team-search-filter", function(t) {
        t.preventDefault();
        var r = e.getAttribute(t.currentTarget, "data-filter"),
            n = e.closest(t.currentTarget, ".js-select-menu"),
            a = e.getAttribute(n, "data-filter-on"),
            s = e.query(document, ".js-team-search-field", HTMLInputElement),
            o = new RegExp(a + ":[a-z]+"),
            i = s.value.trim().replace(o, "");
        s.value = (i + " " + r).replace(/\s\s/, " "), s.focus(), d.dispatchThrottledInputEvent(s)
    }), t.observe(".js-select-team-menu", function(e) {
        ic(e)
    }), r.on("selectmenu:selected", ".js-select-team-menu", function(e) {
        ic(e.currentTarget)
    }), r.on("click", ".js-create-team-button", function(t) {
        var r = e.closest(t.currentTarget, "form"),
            n = r.querySelector(".js-already-selected-team-name");
        if (n instanceof HTMLInputElement) {
            var a = r.querySelector(".js-original-team-visibility"),
                o = r.querySelector(".js-team-privacy-secret");
            if (o) {
                var i = e.query(o, "input", HTMLInputElement),
                    u = function(e) {
                        return e.value !== e.getAttribute("data-original-team-name")
                    }(n),
                    c = function(e, t) {
                        return null != e && t.checked && !["", "SECRET"].includes(e.getAttribute("data-original-team-visibility"))
                    }(a, i);
                if (u || c) {
                    t.preventDefault();
                    var l = e.getAttribute(r, "data-important-changes-summary-url"),
                        d = new URL(l, window.location.origin),
                        m = new URLSearchParams(d.search.slice(1));
                    m.append("parent_team", n.value), c && m.append("visibility_changed", c.toString()), u && m.append("parent_changed", u.toString()), d.search = m.toString(), q.dialog({
                        content: s.fetchSafeDocumentFragment(document, d),
                        dialogClass: "p-3"
                    })
                }
            }
        }
    }), r.on("click", ".js-confirm-edit-team", function() {
        e.query(document, ".js-org-team-form", HTMLFormElement).submit()
    }), r.on("change", ".js-team-project-completer", function(t) {
        if (t.target === t.currentTarget) {
            var r = t.currentTarget;
            o(r instanceof AutocompleteElement, "app/assets/modules/github/orgs/team-projects.js:11");
            var n = e.closest(t.currentTarget, "form", HTMLFormElement),
                a = e.namedItem(n, "project_id"),
                s = e.query(n, ".js-team-project-complete-field", HTMLInputElement);
            if (r.value) {
                var i = JSON.parse(r.value),
                    u = i.name,
                    c = i.id;
                a.value = c, s.value = u
            } else a.value = ""
        }
    }), t.observe(".js-org-transform-poller", function(e) {
        var t = e.getAttribute("data-redirect-url");
        e.addEventListener("load", function() {
            window.location.href = t
        })
    }), r.on("click", "#load-readme", function(t) {
        var r = e.query(document, "#gollum-editor-body", HTMLTextAreaElement),
            n = e.query(document, "#editor-body-buffer"),
            a = e.query(document, "#undo-load-readme"),
            s = n.textContent,
            i = e.getAttribute(t.currentTarget, "data-readme-name");
        uc(r, n), o(t.currentTarget instanceof HTMLButtonElement, "app/assets/modules/github/pages-composer.js:16"), t.currentTarget.disabled = !0, t.currentTarget.textContent = i + " loaded", a.classList.remove("d-none"), r.addEventListener("input", function e() {
            r.value !== s && (a.classList.add("d-none"), r.removeEventListener("input", e))
        })
    }), r.on("click", "#undo-load-readme", function(t) {
        uc(e.query(document, "#gollum-editor-body", HTMLTextAreaElement), e.query(document, "#editor-body-buffer"));
        var r = e.query(document, "#load-readme", HTMLButtonElement),
            n = e.getAttribute(r, "data-readme-name");
        r.disabled = !1, r.textContent = "Load " + n, t.currentTarget.classList.add("d-none")
    });
    var mc = !1;
 
    function fc() {
        var t = lc(window.location.hash);
        ! function(e) {
            var t = e.lineRange,
                r = e.anchorPrefix,
                n = document.querySelectorAll(".js-file-line");
            if (0 !== n.length) {
                var a = !0,
                    s = !1,
                    o = void 0;
                try {
                    for (var i, u = n[Symbol.iterator](); !(a = (i = u.next()).done); a = !0) i.value.classList.remove("highlighted")
                } catch (e) {
                    s = !0, o = e
                } finally {
                    try {
                        !a && u.return && u.return()
                    } finally {
                        if (s) throw o
                    }
                }
                for (var c = t[0]; c <= t[t.length - 1]; c++) {
                    var l = document.querySelector("#" + r + "LC" + c);
                    l && l.classList.add("highlighted")
                }
            }
        }(t),
        function() {
            var e = document.querySelector(".js-file-line-actions");
            if (!e) return;
            var t = document.querySelectorAll(".js-file-line.highlighted"),
                r = t[0];
            if (r) {
                ! function(e) {
                    var t = [],
                        r = !0,
                        n = !1,
                        a = void 0;
                    try {
                        for (var s, o = e[Symbol.iterator](); !(r = (s = o.next()).done); r = !0) {
                            var i = s.value;
                            t.push(i.textContent)
                        }
                    } catch (e) {
                        n = !0, a = e
                    } finally {
                        try {
                            !r && o.return && o.return()
                        } finally {
                            if (n) throw a
                        }
                    }
                    var u = document.getElementById("js-copy-lines");
                    if (u instanceof ClipboardCopyElement) {
                        u.textContent = "Copy " + C.pluralize(e.length, "line"), u.value = t.join("\n");
                        var c = "Blob, copyLines, numLines:" + e.length.toString();
                        u.setAttribute("data-ga-click", c)
                    }
                }(t),
                function(e) {
                    var t = document.getElementById("js-view-git-blame");
                    if (!t) return;
                    t.setAttribute("data-ga-click", "Blob, viewGitBlame, numLines:" + e.toString())
                }(t.length);
                var n = function(e) {
                    var t = document.querySelector(".js-permalink-shortcut");
                    if (t instanceof HTMLAnchorElement) {
                        var r = "" + t.href + window.location.hash,
                            n = document.getElementById("js-copy-permalink");
                        if (n instanceof ClipboardCopyElement) {
                            n.value = r;
                            var a = "Blob, copyPermalink, numLines:" + e.toString();
                            n.setAttribute("data-ga-click", a)
                        }
                        return r
                    }
                }(t.length);
                n && function(e, t) {
                    var r = document.getElementById("js-new-issue");
                    if (r instanceof HTMLAnchorElement) {
                        if (!r.href) return;
                        var n = new URL(r.href, window.location.origin),
                            a = new URLSearchParams(n.search.slice(1));
                        a.set("permalink", e), n.search = a.toString(), r.href = n.toString(), r.setAttribute("data-ga-click", "Blob, newIssue, numLines:" + t.toString())
                    }
                }(n, t.length), e.style.top = r.offsetTop - 2 + "px", e.classList.remove("d-none")
            } else e.classList.add("d-none")
        }();
        var r = t.lineRange,
            n = t.anchorPrefix,
            a = document.querySelector("#" + n + "LC" + r[0]);
        !mc && a && (a.scrollIntoView(), e.closest(a, ".blob-wrapper, .js-blob-wrapper").scrollLeft = 0);
        mc = !1
    }
 
    function pc(e) {
        var t = e.currentTarget,
            r = t.getAttribute("data-original-text");
        r && (t.textContent = "Copied!", setTimeout(function() {
            t.textContent = r
        }, 2e3))
    }
 
    function vc() {
        var t = e.querySelectorAll(document, ".js-toggle-diff-contents"),
            r = !0,
            n = !1,
            a = void 0;
        try {
            for (var s, o = t[Symbol.iterator](); !(r = (s = o.next()).done); r = !0) {
                s.value.setAttribute("data-collapse-expand-all-files-callout", "false")
            }
        } catch (e) {
            n = !0, a = e
        } finally {
            try {
                !r && o.return && o.return()
            } finally {
                if (n) throw a
            }
        }
    }
 
    function gc(e) {
        var t = e.match(/^#?(diff-[a-f0-9]+)(L|R)(\d+)(?:-(L|R)(\d+))?$/i);
        if (null != t && 6 === t.length) return t;
        var r = e.match(/^#?(discussion-diff-[0-9]+)(L|R)(\d+)(?:-(L|R)(\d+))?$/i);
        return null != r && 6 === r.length ? r : null
    }
    H(function() {
        if (document.querySelector(".js-file-line-container")) {
            setTimeout(fc, 0);
            var e = window.location.hash,
                t = !0,
                r = !1,
                n = void 0;
            try {
                for (var a, s = document.querySelectorAll(".js-update-url-with-hash")[Symbol.iterator](); !(t = (a = s.next()).done); t = !0) {
                    var o = a.value;
                    if (o instanceof HTMLAnchorElement) o.hash = e;
                    else if (o instanceof HTMLFormElement) {
                        var i = new URL(o.action);
                        i.hash = e, o.action = i.toString()
                    }
                }
            } catch (e) {
                r = !0, n = e
            } finally {
                try {
                    !t && s.return && s.return()
                } finally {
                    if (r) throw n
                }
            }
        }
    }), r.on("click", "#js-copy-permalink", pc), r.on("click", "#js-copy-lines", pc), r.on("click", ".js-line-number", function(e) {
        o(e.currentTarget instanceof Element, "app/assets/modules/github/pages/blob/lines.js:160");
        var t, r, n = lc(e.currentTarget.id);
        if (e instanceof MouseEvent && e.shiftKey) {
            var a = cc(window.location.hash);
            a.length > 0 && n.lineRange.unshift(a[0])
        }
        t = function() {
            window.location.hash = function(e) {
                var t = e.lineRange,
                    r = e.anchorPrefix;
                switch (t.sort(dc), t.length) {
                    case 1:
                        return "#" + r + "L" + t[0];
                    case 2:
                        return "#" + r + "L" + t[0] + "-L" + t[1];
                    default:
                        return "#"
                }
            }(n)
        }, r = window.scrollY, mc = !0, t(), window.scrollTo(0, r)
    }), r.on("submit", ".js-jump-to-line-form", function(t) {
        var r = e.query(t.currentTarget, ".js-jump-to-line-field", HTMLInputElement).value.replace(/[^\d-]/g, "").split("-").map(function(e) {
            return parseInt(e, 10)
        }).filter(function(e) {
            return e > 0
        }).sort(function(e, t) {
            return e - t
        });
        r.length && (window.location.hash = "L" + r.join("-L")), t.preventDefault()
    }), n.onInput(".js-csv-filter-field", function(e) {
        o(e.target instanceof HTMLInputElement, "app/assets/modules/github/pages/blob/csv.js:7");
        var t = e.target.value.toLowerCase(),
            r = !0,
            n = !1,
            a = void 0;
        try {
            for (var s, i = document.querySelectorAll(".js-csv-data tbody tr")[Symbol.iterator](); !(r = (s = i.next()).done); r = !0) {
                var u = s.value;
                u.hidden = !!t && !u.textContent.toLowerCase().includes(t)
            }
        } catch (e) {
            n = !0, a = e
        } finally {
            try {
                !r && i.return && i.return()
            } finally {
                if (n) throw a
            }
        }
    }), r.on("navigation:keydown", ".js-commits-list-item", function(t) {
        o(t instanceof CustomEvent, "app/assets/modules/github/pages/commits.js:9"), "c" === t.detail.hotkey && e.query(t.target, ".js-navigation-open").click()
    }), r.on("menu:activated", ".js-diffbar-commits-menu", function(e) {
        o(e instanceof CustomEvent, "app/assets/modules/github/pages/commits.js:16");
        var t = e.currentTarget.querySelector(".in-range");
        t && _.focus(e.currentTarget, t)
    }), r.on("click", ".js-toggle-diff-contents", function(t) {
        if ((o(t instanceof MouseEvent, "app/assets/modules/github/pages/diffs/collapse-expand-all-files-callout.js:10"), !t.altKey) && "true" === e.getAttribute(t.currentTarget, "data-collapse-expand-all-files-callout")) {
            var r = e.closest(t.currentTarget, ".js-toggle-diff-buttons");
            e.query(r, ".js-collapse-expand-all-files-callout").hidden = !1, vc()
        }
    }), c.remoteForm(".js-dismiss-collapse-expand-all-files-callout", function() {
        var t = X(regeneratorRuntime.mark(function t(r, n) {
            return regeneratorRuntime.wrap(function(t) {
                for (;;) switch (t.prev = t.next) {
                    case 0:
                        return t.next = 2, n.text();
                    case 2:
                        e.closest(r, ".js-collapse-expand-all-files-callout").hidden = !0, vc();
                    case 5:
                    case "end":
                        return t.stop()
                }
            }, t, this)
        }));
        return function(e, r) {
            return t.apply(this, arguments)
        }
    }());
    var hc = function() {
            var e = X(regeneratorRuntime.mark(function e(t, r) {
                var n, a, s, o, i, u, c, l, d, m, f, p, v, g;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                        case 0:
                            if (n = t.anchor, a = t.side, s = t.line, o = t.lastLine, i = t.hashFragment, u = t.partialHashFragment, c = E.findElementByFragmentName(document, n)) {
                                e.next = 4;
                                break
                            }
                            return e.abrupt("return");
                        case 4:
                            if (l = c.nextElementSibling) {
                                e.next = 7;
                                break
                            }
                            return e.abrupt("return");
                        case 7:
                            if ((d = Lc(l, a, s, o)).length) {
                                e.next = 27;
                                break
                            }
                            if (!(m = E.findElementByFragmentName(document, i))) {
                                e.next = 13;
                                break
                            }
                            return bc(m), e.abrupt("return");
                        case 13:
                            if (f = l.querySelector(".js-diff-load-container")) {
                                e.next = 16;
                                break
                            }
                            return e.abrupt("return");
                        case 16:
                            return e.prev = 16, e.next = 19, Ga(f);
                        case 19:
                            (p = E.findElementByFragmentName(document, i)) instanceof HTMLElement && bc(p), e.next = 26;
                            break;
                        case 23:
                            e.prev = 23, e.t0 = e.catch(16), bc(l);
                        case 26:
                            return e.abrupt("return");
                        case 27:
                            return e.next = 29, jc(d, u);
                        case 29:
                            v = 1, g = E.findElementByFragmentName(document, i), Lc(l, a, s, o).length ? hc(t, r) : g ? bc(g) : r < v && hc(t, r + 1);
                        case 33:
                        case "end":
                            return e.stop()
                    }
                }, e, this, [
                    [16, 23]
                ])
            }));
            return function(t, r) {
                return e.apply(this, arguments)
            }
        }(),
        yc = function() {
            var t = X(regeneratorRuntime.mark(function t(r, n) {
                var a, o, i, u, c, l, d, m, f, p;
                return regeneratorRuntime.wrap(function(t) {
                    for (;;) switch (t.prev = t.next) {
                        case 0:
                            return a = void 0, n ? (o = "R" === n.slice(-1) ? "data-right-range" : "data-left-range", i = r.getAttribute(o) || "", u = parseInt(i.split("-")[0], 10), a = n + u) : a = r.hash.slice(1), c = e.getAttribute(r, "data-url"), l = new URL(c, window.location.origin), (d = new URLSearchParams(l.search.slice(1))).append("anchor", a), l.search = d.toString(), t.next = 9, s.fetchSafeDocumentFragment(document, l);
                        case 9:
                            m = t.sent, f = e.closest(r, ".js-expandable-line"), v = ".file-diff-line", g = void 0, g = f.nextElementSibling, (p = g instanceof HTMLElement && g.matches(v) ? g : null) ? U.preservePosition(p, function() {
                                f.replaceWith(m)
                            }) : f.replaceWith(m);
                        case 13:
                        case "end":
                            return t.stop()
                    }
                    var v, g
                }, t, this)
            }));
            return function(e, r) {
                return t.apply(this, arguments)
            }
        }();
 
    function bc(e) {
        F.ensureExpanded(e), Va(e)
    }
 
    function jc(e, t) {
        return Promise.all(e.map(function(e) {
            return yc(e, t)
        }))
    }
 
    function Lc(t, r, n, a) {
        var s = parseInt(n, 10),
            o = parseInt(a, 10);
        return e.querySelectorAll(t, ".js-expand", HTMLAnchorElement).filter(function(e) {
            var t = "R" === r ? "data-right-range" : "data-left-range",
                n = (e.getAttribute(t) || "").split("-"),
                a = parseInt(n[0], 10),
                i = parseInt(n[1], 10);
            return a <= s && s <= i || (s <= a && i <= o || a <= o && o <= i)
        })
    }
 
    function wc(e, t) {
        var r = e.nextElementSibling;
        return r && r.matches(t) ? r : null
    }
 
    function xc(t, r) {
        var n = e.query(t, ".js-comment-form-error"),
            a = void 0;
        a = r.errors ? Array.isArray(r.errors) ? r.errors.join(", ") : r.errors : "There was an error posting your comment.", n.textContent = a, n.style.display = "block", n.classList.remove("d-none")
    }
 
    function kc(e) {
        var t = e.querySelector(".js-toggle-file-notes");
        t instanceof HTMLInputElement && l.changeValue(t, !0)
    }
 
    function Ec() {
        var e = !0,
            t = !1,
            r = void 0;
        try {
            for (var n, a = document.querySelectorAll(".file .js-inline-comments-container")[Symbol.iterator](); !(e = (n = a.next()).done); e = !0) {
                var s = n.value,
                    o = s.querySelectorAll(".js-comments-holder > *").length > 0,
                    i = s.querySelector(".js-inline-comment-form-container"),
                    u = !!i && i.classList.contains("open");
                o || u || s.remove()
            }
        } catch (e) {
            t = !0, r = e
        } finally {
            try {
                !e && a.return && a.return()
            } finally {
                if (t) throw r
            }
        }
    }
 
    function Tc(t) {
        var r = e.query(document, t).firstElementChild;
        o(r, "app/assets/modules/github/pages/diffs/line-comments.js:222");
        var n = r.cloneNode(!0),
            a = n.querySelector("textarea");
        return a instanceof HTMLTextAreaElement && (a.value = ""), n
    }
 
    function qc(t, r) {
        var n = !0,
            a = !1,
            s = void 0;
        try {
            for (var o, i = ["type", "path", "position", "line", "side", "original-line"][Symbol.iterator](); !(n = (o = i.next()).done); n = !0) {
                var u = o.value,
                    c = t.elements.namedItem(u);
                if (c instanceof HTMLInputElement) {
                    var l = r.getAttribute("data-" + u) || "";
                    c.value = l
                }
            }
        } catch (e) {
            a = !0, s = e
        } finally {
            try {
                !n && i.return && i.return()
            } finally {
                if (a) throw s
            }
        }
        var d = r.getAttribute("data-position") || "",
            m = r.getAttribute("data-anchor") || "",
            f = e.query(t, ".js-comment-field"),
            p = f.id.replace(/^r\d+ /, "").replace("${anchor}", m).replace("${position}", d),
            v = !0,
            g = !1,
            h = void 0;
        try {
            for (var y, b = t.querySelectorAll('[for="' + f.id + '"]')[Symbol.iterator](); !(v = (y = b.next()).done); v = !0) {
                y.value.setAttribute("for", p)
            }
        } catch (e) {
            g = !0, h = e
        } finally {
            try {
                !v && b.return && b.return()
            } finally {
                if (g) throw h
            }
        }
        f.id = p
    }
 
    function Sc(e) {
        return Math.floor(e / 2)
    }
 
    function Ac(e, t) {
        var r = e.parentElement;
        if (r) {
            var n = r.children,
                a = void 0;
            if (4 === n.length)
                for (var s = 0, o = n.length; s < o; s++) {
                    n[s] === e && (a = Sc(s))
                }
            for (var i = 0, u = n.length; i < u; i++) {
                var c = n[i];
                null != a && Sc(i) !== a || c.classList.toggle("is-hovered", t)
            }
        }
    }
    H(function() {
        var e = function(e) {
            if (!e) return;
            var t = gc(e);
            if (!t) return;
            var r = t[1],
                n = t[2],
                a = t[3],
                s = t[5];
            return {
                anchor: r,
                side: n,
                line: a,
                lastLine: s,
                hashFragment: r + n + a,
                partialHashFragment: r + n
            }
        }(window.location.hash);
        e && (E.findElementByFragmentName(document, e.hashFragment) && !e.lastLine || hc(e, 0))
    }), r.on("click", ".js-expand", function(e) {
        e.preventDefault(), o(e.currentTarget instanceof HTMLAnchorElement, "app/assets/modules/github/pages/diffs/expander.js:122"), yc(e.currentTarget, null)
    }), r.on("click", ".js-add-single-line-comment", function(t) {
        var r = t.currentTarget;
        o(r instanceof Element, "app/assets/modules/github/pages/diffs/line-comments.js:17"), kc(e.closest(r, ".file"));
        var n = function(t) {
            var r = e.closest(t, "tr"),
                n = wc(r, ".js-inline-comments-container");
            if (n instanceof Element) {
                var a = e.query(r, "button.js-add-line-comment"),
                    s = Array.from(n.querySelectorAll(".js-inline-comment-form")).pop();
                return s instanceof HTMLFormElement && qc(s, a), n
            }
        }(r) || function(t) {
            var r = e.closest(t, "tr"),
                n = Tc("#js-inline-comments-single-container-template"),
                a = n.querySelector(".js-inline-comment-form");
            a instanceof HTMLFormElement && qc(a, t);
            return r.after(n), n
        }(r);
        Ku(Array.from(n.querySelectorAll(".js-line-comments")).pop())
    }), r.on("click", ".js-toggle-new-thread-form", function(t) {
        var r = t.currentTarget.getAttribute("data-side"),
            n = e.closest(t.currentTarget, "td"),
            a = Array.from(n.querySelectorAll(".js-line-comments")).pop(),
            s = e.query(a, ".js-inline-comment-form", HTMLFormElement),
            i = e.closest(t.currentTarget, "tr").previousElementSibling;
        o(i, "app/assets/modules/github/pages/diffs/line-comments.js:36");
        var u = "right" === r ? ".blob-code-addition" : ".blob-code-deletion";
        qc(s, e.query(i, u + " button.js-add-line-comment, .blob-code-context button.js-add-line-comment")), Ku(a)
    }), r.on("click", ".js-add-split-line-comment", function(t) {
        var r = t.currentTarget;
        kc(e.closest(r, ".file"));
        var n, a, s = e.closest(r, "tr"),
            i = "addition" === r.getAttribute("data-type") ? "js-addition" : "js-deletion",
            u = function(e, t, r) {
                var n = e.querySelector(".js-line-comments." + t);
                if (n) {
                    var a = Array.from(n.querySelectorAll(".js-inline-comment-form")).pop();
                    return o(a instanceof HTMLFormElement, "app/assets/modules/github/pages/diffs/line-comments.js:254"), qc(a, r), n
                }
                var s = Tc("#js-inline-comments-split-form-container-template");
                s.classList.add(t);
                var i = s.querySelector(".js-inline-comment-form");
                i instanceof HTMLFormElement && qc(i, r);
                var u = e.querySelectorAll("." + t);
                u[u.length - 1].after(s);
                var c = !0,
                    l = !1,
                    d = void 0;
                try {
                    for (var m, f = u[Symbol.iterator](); !(c = (m = f.next()).done); c = !0) {
                        var p = m.value;
                        p.remove()
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
                return s
            }((a = wc(n = s, ".js-inline-comments-container")) || (a = Tc("#js-inline-comments-split-container-template"), n.after(a), a), i, r);
        Ku(Array.from(u.querySelectorAll(".js-line-comments")).pop())
    }), c.remoteForm(".js-inline-comment-form", function() {
        var t = X(regeneratorRuntime.mark(function t(r, n) {
            var a, s, u, c, l, d;
            return regeneratorRuntime.wrap(function(t) {
                for (;;) switch (t.prev = t.next) {
                    case 0:
                        return a = void 0, t.prev = 1, t.next = 4, n.json();
                    case 4:
                        a = t.sent, t.next = 16;
                        break;
                    case 7:
                        if (t.prev = 7, t.t0 = t.catch(1), !t.t0.response) {
                            t.next = 15;
                            break
                        }
                        s = void 0;
                        try {
                            s = t.t0.response.json
                        } catch (e) {}
                        if (!s) {
                            t.next = 15;
                            break
                        }
                        return xc(r, s), t.abrupt("return");
                    case 15:
                        throw t.t0;
                    case 16:
                        u = a.json, c = u.inline_comment, l = r.closest(".js-line-comments"), c && (o(l, "app/assets/modules/github/pages/diffs/line-comments.js:126"), e.query(l, ".js-comments-holder").append(i.parseHTML(document, c))), (d = u.inline_comment_thread) && (o(l, "app/assets/modules/github/pages/diffs/line-comments.js:133"), l.replaceWith(i.parseHTML(document, d))), Ju(r);
                    case 23:
                    case "end":
                        return t.stop()
                }
            }, t, this, [
                [1, 7]
            ])
        }));
        return function(e, r) {
            return t.apply(this, arguments)
        }
    }()), document.addEventListener("session:resume", function(e) {
        o(e instanceof CustomEvent, "app/assets/modules/github/pages/diffs/line-comments.js:190"),
            function(e) {
                var t = e.match(/^new_inline_comment_(?:discussion|diff)_(?:[\w-]+)_(\d+)_(\d+)$/) || [],
                    r = re(t, 2),
                    n = r[0],
                    a = r[1];
                if (n) {
                    var s = document.querySelector(".js-inline-comment-form input[name='in_reply_to'][value='" + a + "']");
                    if (s) {
                        var o = s.closest(".js-line-comments");
                        o && Ku(o)
                    }
                }
            }(e.detail.targetId),
            function(e) {
                var t = e.match(/^new_inline_comment_diff_(?:[\w-]+)_(\d+)$/) || [],
                    r = re(t, 2),
                    n = r[0],
                    a = r[1];
                if (n) {
                    var s = document.querySelector(".js-add-line-comment[data-anchor='" + n + "'][data-position='" + a + "']");
                    s && s.click()
                }
            }(e.detail.targetId)
    }), t.observe(".js-comment", {
        remove: Ec
    }), document.addEventListener("inlinecomment:collapse", function() {
        Ec()
    }), t.observe(".diff-table", function(e) {
        var t = null;
 
        function r(e) {
            o(e instanceof MouseEvent, "app/assets/modules/github/pages/diffs/line-highlight.js:43"), t && Ac(t, !1), t = null
        }
 
        function n(e) {
            o(e instanceof MouseEvent, "app/assets/modules/github/pages/diffs/line-highlight.js:51"), t && Ac(t, !1), e.target instanceof HTMLElement && (t = e.target.closest("td.blob-code")) && Ac(t, !0)
        }
        return {
            add: function() {
                e.addEventListener("mouseenter", r), e.addEventListener("mouseleave", r), e.addEventListener("mouseover", n)
            },
            remove: function() {
                e.removeEventListener("mouseenter", r), e.removeEventListener("mouseleave", r), e.removeEventListener("mouseover", n)
            }
        }
    });
    var Mc, Hc, Ic = function() {
            function e(t, r, n) {
                Q(this, e), this.diffId = t, this.side = r, this.lineNumber = n, this.element = E.findElementByFragmentName(document, this.anchor())
            }
            return Y(e, [{
                key: "anchor",
                value: function() {
                    return "" + this.diffId + this.anchorSuffix()
                }
            }, {
                key: "anchorSuffix",
                value: function() {
                    return "" + this.side + this.lineNumber
                }
            }, {
                key: "is",
                value: function(e) {
                    return this.diffId === e.diffId && this.side === e.side && this.lineNumber === e.lineNumber
                }
            }]), e
        }(),
        Rc = function() {
            function e(t, r, n, a, s) {
                Q(this, e), this.elements = new Set, this.isParsed = !1, this.isSplit = !1, this.diffId = t, this.diffTable = document.querySelector(".js-diff-table[data-diff-anchor=" + t + "]"), this.diffTable && (this.isSplit = this.diffTable.classList.contains("js-file-diff-split")), this.start = new Ic(t, r, n), this.end = new Ic(t, a, s), this.parse()
            }
            return Y(e, [{
                key: "anchor",
                value: function() {
                    var e = [];
                    return e.push(this.start.anchor()), this.start.is(this.end) || e.push(this.end.anchorSuffix()), e.join("-")
                }
            }, {
                key: "parse",
                value: function() {
                    if (this.diffTable) {
                        var e = this.diffTable.querySelectorAll(".js-linkable-line-number");
                        e = this.unify(e), e = this.filterInRange(e), this.elements = this.expandRelatedElements(e), this.isParsed = !0
                    }
                }
            }, {
                key: "unify",
                value: function(e) {
                    if (!this.isSplit) return Array.from(e);
                    var t = [],
                        r = [],
                        n = [],
                        a = !0,
                        s = !1,
                        o = void 0;
                    try {
                        for (var i, u = e[Symbol.iterator](); !(a = (i = u.next()).done); a = !0) {
                            var c = i.value;
                            c.classList.contains("blob-num-addition") ? r.push(c) : c.classList.contains("blob-num-deletion") ? n.push(c) : (t.push.apply(t, ae(n).concat(ae(r), [c])), r = [], n = [])
                        }
                    } catch (e) {
                        s = !0, o = e
                    } finally {
                        try {
                            !a && u.return && u.return()
                        } finally {
                            if (s) throw o
                        }
                    }
                    return t.push.apply(t, ae(n).concat(ae(r))), t
                }
            }, {
                key: "filterInRange",
                value: function(e) {
                    if (!this.start.element || !this.end.element) return [];
                    var t = e.indexOf(this.start.element),
                        r = e.indexOf(this.end.element);
                    if (t > r) {
                        var n = [r, t];
                        t = n[0], r = n[1];
                        var a = [this.end, this.start],
                            s = a[0],
                            o = a[1];
                        this.start = s, this.end = o
                    }
                    return e.slice(t, r + 1)
                }
            }, {
                key: "expandRelatedElements",
                value: function(e) {
                    var t = this.isSplit;
                    return e.reduce(function(e, r) {
                        var n = r.parentElement,
                            a = r.classList.contains("blob-num-deletion") || r.classList.contains("blob-num-addition");
                        if (!n) return e;
                        if (t && a) return Array.from(n.children).indexOf(r) < 2 ? e.add(n.children[0]).add(n.children[1]) : e.add(n.children[2]).add(n.children[3]);
                        var s = !0,
                            o = !1,
                            i = void 0;
                        try {
                            for (var u, c = Array.from(n.children)[Symbol.iterator](); !(s = (u = c.next()).done); s = !0) {
                                var l = u.value;
                                e.add(l)
                            }
                        } catch (e) {
                            o = !0, i = e
                        } finally {
                            try {
                                !s && c.return && c.return()
                            } finally {
                                if (o) throw i
                            }
                        }
                        return e
                    }, new Set)
                }
            }]), e
        }(),
        _c = null;
 
    function Cc() {
        return document.body && document.body.classList.contains("diff-range-highlighting")
    }
 
    function Fc() {
        if (_c) {
            var e = !0,
                t = !1,
                r = void 0;
            try {
                for (var n, a = _c.elements[Symbol.iterator](); !(e = (n = a.next()).done); e = !0) {
                    n.value.classList.remove("selected-line")
                }
            } catch (e) {
                t = !0, r = e
            } finally {
                try {
                    !e && a.return && a.return()
                } finally {
                    if (t) throw r
                }
            }
            _c = null
        }
        var s = gc(window.location.hash);
        if (s) {
            var o = s[1],
                i = s[2],
                u = s[3],
                c = Cc() && s[4] || i,
                l = Cc() && s[5] || u;
            _c = new Rc(o, i, +u, c, +l);
            var d = !0,
                m = !1,
                f = void 0;
            try {
                for (var p, v = _c.elements[Symbol.iterator](); !(d = (p = v.next()).done); d = !0) {
                    p.value.classList.add("selected-line")
                }
            } catch (e) {
                m = !0, f = e
            } finally {
                try {
                    !d && v.return && v.return()
                } finally {
                    if (m) throw f
                }
            }
        }
    }
 
    function Pc() {
        var e = document.body;
        o(e, "app/assets/modules/github/pages/diffs/split.js:9");
        var t = document.querySelector("meta[name=diff-view]"),
            r = t && t instanceof HTMLMetaElement ? t.content : "",
            n = document.querySelector(".js-file-diff-split"),
            a = document.querySelector(".CommunityTemplate-header"),
            s = !!("split" === r && n || document.querySelector(".wants-full-width-container"));
        e.classList.toggle("full-width", s);
        var i = !!a;
        e.classList.toggle("full-width-p0", i)
    }
 
    function Nc(e) {
        var t = e.parentElement;
        o(t, "app/assets/modules/github/pages/diffs/tr-collapsing.js:19");
        var r = t.querySelectorAll("td.js-line-comments").length,
            n = t.querySelectorAll("td.js-line-comments.is-collapsed").length;
        t.classList.toggle("is-collapsed", n > 0 && r === n)
    }
 
    function Dc(t) {
        var r = e.querySelectorAll(document, ".js-hook-event-checkbox", HTMLInputElement),
            n = !0,
            a = !1,
            s = void 0;
        try {
            for (var o, i = r[Symbol.iterator](); !(n = (o = i.next()).done); n = !0) {
                var u = o.value;
                u.checked = u.matches(t)
            }
        } catch (e) {
            a = !0, s = e
        } finally {
            try {
                !n && i.return && i.return()
            } finally {
                if (a) throw s
            }
        }
    }
 
    function Oc(e) {
        e.classList.contains("unread") && (e.classList.remove("unread"), e.classList.add("read"))
    }
 
    function Bc(e) {
        e.classList.contains("read") && (e.classList.add("unread"), e.classList.remove("read"))
    }
 
    function Uc(e) {
        e.setAttribute("tabindex", "-1"), e.addEventListener("blur", function() {
            return e.removeAttribute("tabindex")
        }), e.focus()
    }
 
    function Vc(t) {
        var r = e.closest(t, ".js-org-insights-hero-container"),
            n = !0,
            a = !1,
            s = void 0;
        try {
            for (var o, i = r.querySelectorAll("[role=tab]")[Symbol.iterator](); !(n = (o = i.next()).done); n = !0) {
                var u = o.value;
                u.setAttribute("aria-selected", (u === t).toString())
            }
        } catch (e) {
            a = !0, s = e
        } finally {
            try {
                !n && i.return && i.return()
            } finally {
                if (a) throw s
            }
        }
        var c = !0,
            l = !1,
            d = void 0;
        try {
            for (var m, f = r.querySelectorAll("[role=tabpanel]")[Symbol.iterator](); !(c = (m = f.next()).done); c = !0) {
                var p = m.value;
                p.hidden = t.id !== p.getAttribute("aria-labelledby")
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
        var v = !0,
            g = !1,
            h = void 0;
        try {
            for (var y, b = e.querySelectorAll(document, ".org-insights-header a", HTMLAnchorElement)[Symbol.iterator](); !(v = (y = b.next()).done); v = !0) {
                y.value.hash = t.hash
            }
        } catch (e) {
            g = !0, h = e
        } finally {
            try {
                !v && b.return && b.return()
            } finally {
                if (g) throw h
            }
        }
    }
    r.on("click", ".js-linkable-line-number", function(e) {
        var t = e.currentTarget.id;
        if (e instanceof MouseEvent && e.shiftKey && Cc()) {
            var r = gc(t);
            if (!r) return;
            var n = r[1],
                a = r[2],
                s = r[3];
            if (_c && _c.diffId === n) t = new Rc(n, _c.start.side, _c.start.lineNumber, a, +s).anchor()
        }
        window.history.replaceState(null, null, "#" + t), Fc(), e.preventDefault()
    }), H(Fc), t.observe(".blob-expanded", Fc), t.observe(".js-diff-progressive-loader", function(e) {
        e.addEventListener("load", Fc)
    }), t.observe(".js-diff-entry-loader", function(e) {
        e.addEventListener("load", Fc)
    }), r.on("click", ".js-rich-diff.collapsed .js-expandable", function(e) {
        e.preventDefault();
        var t = e.target.closest(".js-rich-diff");
        o(t, "app/assets/modules/github/pages/diffs/prose-diff.js:9"), t.classList.remove("collapsed")
    }), r.on("click", ".js-show-rich-diff", function(e) {
        var t = e.currentTarget.closest(".js-warn-no-visible-changes");
        if (t) {
            t.classList.add("d-none");
            var r = t.parentElement;
            o(r, "app/assets/modules/github/pages/diffs/prose-diff.js:20");
            var n = r.querySelector(".js-no-rich-changes");
            n && n.classList.remove("d-none")
        }
    }), t.observe("meta[name=diff-view]", {
        add: Pc,
        remove: Pc
    }), t.observe(".js-file-diff-split", {
        add: Pc,
        remove: Pc
    }), t.observe(".js-compare-tab.selected", {
        add: Pc,
        remove: Pc
    }), t.observe(".wants-full-width-container", {
        add: Pc,
        remove: Pc
    }), t.observe(".CommunityTemplate-header", {
        add: Pc,
        remove: Pc
    }), r.on("change", ".js-toggle-file-notes", function(t) {
        var r = t.currentTarget;
        o(r instanceof HTMLInputElement, "app/assets/modules/github/pages/diffs/toggle-file-notes.js:15"), e.closest(r, ".file").classList.toggle("show-inline-notes", r.checked)
    }), r.on("click", ".js-toggle-all-file-notes", function(t) {
        var r = e.querySelectorAll(document, ".js-toggle-file-notes", HTMLInputElement),
            n = r.some(function(e) {
                return e.checked
            }),
            a = !0,
            s = !1,
            o = void 0;
        try {
            for (var i, u = r[Symbol.iterator](); !(a = (i = u.next()).done); a = !0) {
                var c = i.value;
                l.changeValue(c, !n)
            }
        } catch (e) {
            s = !0, o = e
        } finally {
            try {
                !a && u.return && u.return()
            } finally {
                if (s) throw o
            }
        }
        t.preventDefault()
    }), t.observe(".js-inline-comments-container", function(e) {
        var t = void 0,
            r = e.closest(".file");
        if (r) return {
            add: t = function() {
                var e = null != r.querySelector(".js-inline-comments-container");
                r.classList.toggle("has-inline-notes", e)
            },
            remove: t
        }
    }), t.observe("td.js-line-comments.is-collapsed", {
        add: Nc,
        remove: Nc
    }), t.observe(".js-hook-url-field", {
        constructor: HTMLInputElement,
        add: function(t) {
            function r() {
                var r = t.form;
                o(r, "app/assets/modules/github/pages/hooks.js:19");
                var n = void 0;
                try {
                    n = new URL(t.value)
                } catch (e) {}
                var a = r.querySelector(".js-invalid-url-notice");
                a && (a.hidden = !!("" === t.value || n && /^https?:/.test(n.protocol))), e.query(r, ".js-ssl-hook-fields").hidden = !(n && "https:" === n.protocol)
            }
            d.addThrottledInputEventListener(t, r), r()
        }
    }), r.on("change", ".js-hook-event-choice", function(t) {
        var r = t.currentTarget;
        o(r instanceof HTMLInputElement, "app/assets/modules/github/pages/hooks.js:49");
        var n = r.checked && "custom" === r.value,
            a = r.closest(".js-hook-events-field");
        (a && a.classList.toggle("is-custom", n), r.checked) && (n ? e.query(document, ".js-hook-wildcard-event", HTMLInputElement).checked = !1 : "push" === r.value ? Dc('[value="push"]') : "all" === r.value && Dc(".js-hook-wildcard-event"))
    }), r.on("details:toggled", ".js-hook-secret", function(t) {
        var r = t.currentTarget,
            n = e.query(r, "input[type=password]", HTMLInputElement);
        r.classList.contains("open") && n.focus()
    }), r.on("click", ".js-hook-deliveries-pagination-button", function() {
        var t = X(regeneratorRuntime.mark(function t(r) {
            var n, a, i;
            return regeneratorRuntime.wrap(function(t) {
                for (;;) switch (t.prev = t.next) {
                    case 0:
                        return n = r.currentTarget, o(n instanceof HTMLButtonElement, "app/assets/modules/github/pages/hooks.js:81"), n.disabled = !0, a = n.parentElement, o(a, "app/assets/modules/github/pages/hooks.js:84"), i = e.getAttribute(n, "data-url"), t.t0 = a, t.next = 9, s.fetchSafeDocumentFragment(document, i);
                    case 9:
                        t.t1 = t.sent, t.t0.before.call(t.t0, t.t1), a.remove();
                    case 12:
                    case "end":
                        return t.stop()
                }
            }, t, this)
        }));
        return function(e) {
            return t.apply(this, arguments)
        }
    }()), c.remoteForm(".js-redeliver-hook-form", function() {
        var t = X(regeneratorRuntime.mark(function t(r, n) {
            var a, s, i, u;
            return regeneratorRuntime.wrap(function(t) {
                for (;;) switch (t.prev = t.next) {
                    case 0:
                        return a = void 0, t.prev = 1, t.next = 4, n.html();
                    case 4:
                        a = t.sent, t.next = 12;
                        break;
                    case 7:
                        return t.prev = 7, t.t0 = t.catch(1), o(r.parentElement, "app/assets/modules/github/pages/hooks.js:98"), r.classList.add("failed"), t.abrupt("return");
                    case 12:
                        s = r.getAttribute("data-delivery-guid") || "", i = e.query(document, '.js-hook-delivery-container[data-delivery-guid="' + s + '"]'), u = i.parentElement, o(u, "app/assets/modules/github/pages/hooks.js:106"), i.replaceWith(a.html), e.query(u, "poll-include-fragment").addEventListener("load", function() {
                            var t = e.query(u, ".js-hook-delivery-container"),
                                r = e.query(u, ".js-item-status"),
                                n = t.getAttribute("data-status-class");
                            r.classList.remove("success", "pending", "failure"), n && r.classList.add(n);
                            var a = u.querySelector(".js-item-status-tooltip"),
                                s = t.getAttribute("data-status-message");
                            a && s && a.setAttribute("aria-label", s)
                        });
                    case 19:
                    case "end":
                        return t.stop()
                }
            }, t, this, [
                [1, 7]
            ])
        }));
        return function(e, r) {
            return t.apply(this, arguments)
        }
    }()), c.remoteForm(".js-test-hook-form", function() {
        var t = X(regeneratorRuntime.mark(function t(r, n) {
            var a, s, o;
            return regeneratorRuntime.wrap(function(t) {
                for (;;) switch (t.prev = t.next) {
                    case 0:
                        return (a = e.query(document, ".js-test-hook-message")).classList.remove("error", "success"), t.prev = 2, t.next = 5, n.text();
                    case 5:
                        t.next = 20;
                        break;
                    case 7:
                        if (t.prev = 7, t.t0 = t.catch(2), a.classList.add("error"), s = e.query(a, ".js-test-hook-message-errors"), null == t.t0.response) {
                            t.next = 18;
                            break
                        }
                        return t.next = 14, t.t0.response.json();
                    case 14:
                        o = t.sent, s.textContent = o.errors, t.next = 19;
                        break;
                    case 18:
                        s.textContent = s.getAttribute("data-network-error-message") || "";
                    case 19:
                        return t.abrupt("return");
                    case 20:
                        a.classList.add("success");
                    case 21:
                    case "end":
                        return t.stop()
                }
            }, t, this, [
                [2, 7]
            ])
        }));
        return function(e, r) {
            return t.apply(this, arguments)
        }
    }()), r.on("click", ".js-hook-enforcement-select .js-navigation-item", function(t) {
        var r = t.currentTarget,
            n = e.query(t.currentTarget, ".js-value"),
            a = e.closest(r, "form", HTMLFormElement),
            s = e.query(a, ".js-enforcement-value", HTMLInputElement),
            o = n.textContent.split("_"),
            i = re(o, 2),
            u = i[0],
            c = i[1];
        s.value = u;
        var d = a.querySelector(".js-final-value");
        d instanceof HTMLInputElement && (d.value = c ? "false" : "true"), l.submit(a)
    }), r.on("click", ".js-notification-target", function(t) {
        (o(t instanceof MouseEvent, "app/assets/modules/github/pages/notifications.js:29"), 0 === t.button) && Oc(e.closest(t.currentTarget, ".js-notification"))
    }), c.remoteForm(".js-delete-notification", function() {
        var t = X(regeneratorRuntime.mark(function t(r, n) {
            return regeneratorRuntime.wrap(function(t) {
                for (;;) switch (t.prev = t.next) {
                    case 0:
                        return t.next = 2, n.html();
                    case 2:
                        Oc(e.closest(r, ".js-notification"));
                    case 4:
                    case "end":
                        return t.stop()
                }
            }, t, this)
        }));
        return function(e, r) {
            return t.apply(this, arguments)
        }
    }()), c.remoteForm(".js-mute-notification", function() {
        var t = X(regeneratorRuntime.mark(function t(r, n) {
            var a, s;
            return regeneratorRuntime.wrap(function(t) {
                for (;;) switch (t.prev = t.next) {
                    case 0:
                        return a = document.activeElement && document.activeElement.closest(".js-notification"), t.next = 3, n.html();
                    case 3:
                        Oc(s = e.closest(r, ".js-notification")), s.classList.toggle("muted"), s === a && e.query(s, ".js-unmute-notification button").focus();
                    case 7:
                    case "end":
                        return t.stop()
                }
            }, t, this)
        }));
        return function(e, r) {
            return t.apply(this, arguments)
        }
    }()), c.remoteForm(".js-unmute-notification", function() {
        var t = X(regeneratorRuntime.mark(function t(r, n) {
            var a, s;
            return regeneratorRuntime.wrap(function(t) {
                for (;;) switch (t.prev = t.next) {
                    case 0:
                        return a = document.activeElement && document.activeElement.closest(".js-notification"), t.next = 3, n.html();
                    case 3:
                        (s = e.closest(r, ".js-notification")).classList.toggle("muted"), s === a && e.query(s, ".js-mute-notification button").focus();
                    case 6:
                    case "end":
                        return t.stop()
                }
            }, t, this)
        }));
        return function(e, r) {
            return t.apply(this, arguments)
        }
    }()), c.remoteForm(".js-mark-notification-as-read", function() {
        var t = X(regeneratorRuntime.mark(function t(r, n) {
            var a, s;
            return regeneratorRuntime.wrap(function(t) {
                for (;;) switch (t.prev = t.next) {
                    case 0:
                        return a = document.activeElement && document.activeElement.closest(".js-notification"), t.next = 3, n.html();
                    case 3:
                        Oc(s = e.closest(r, ".js-notification")), s === a && e.query(s, ".js-mark-notification-as-unread button").focus();
                    case 6:
                    case "end":
                        return t.stop()
                }
            }, t, this)
        }));
        return function(e, r) {
            return t.apply(this, arguments)
        }
    }()), c.remoteForm(".js-mark-notification-as-unread", function() {
        var t = X(regeneratorRuntime.mark(function t(r, n) {
            var a, s;
            return regeneratorRuntime.wrap(function(t) {
                for (;;) switch (t.prev = t.next) {
                    case 0:
                        return a = document.activeElement && document.activeElement.closest(".js-notification"), t.next = 3, n.html();
                    case 3:
                        Bc(s = e.closest(r, ".js-notification")), s === a && e.query(s, ".js-mark-notification-as-read button").focus();
                    case 6:
                    case "end":
                        return t.stop()
                }
            }, t, this)
        }));
        return function(e, r) {
            return t.apply(this, arguments)
        }
    }()), c.remoteForm(".js-mark-visible-as-read", function() {
        var t = X(regeneratorRuntime.mark(function t(r, n) {
            var a, s, o, i, u, c, l, d, m, f;
            return regeneratorRuntime.wrap(function(t) {
                for (;;) switch (t.prev = t.next) {
                    case 0:
                        return t.next = 2, n.html();
                    case 2:
                        for (a = e.closest(r, ".js-notifications-browser"), s = a.querySelectorAll(".unread"), o = !0, i = !1, u = void 0, t.prev = 7, c = s[Symbol.iterator](); !(o = (l = c.next()).done); o = !0)(d = l.value).classList.remove("unread"), d.classList.add("read");
                        t.next = 15;
                        break;
                    case 11:
                        t.prev = 11, t.t0 = t.catch(7), i = !0, u = t.t0;
                    case 15:
                        t.prev = 15, t.prev = 16, !o && c.return && c.return();
                    case 18:
                        if (t.prev = 18, !i) {
                            t.next = 21;
                            break
                        }
                        throw u;
                    case 21:
                        return t.finish(18);
                    case 22:
                        return t.finish(15);
                    case 23:
                        (m = a.querySelector(".js-mark-visible-as-read")) && m.classList.add("mark-all-as-read-confirmed"), (f = a.querySelector(".js-mark-as-read-confirmation")) && f.classList.add("mark-all-as-read-confirmed"), Uc(e.query(r, ".js-mark-visible-as-read-success"));
                    case 28:
                    case "end":
                        return t.stop()
                }
            }, t, this, [
                [7, 11, 15, 23],
                [16, , 18, 22]
            ])
        }));
        return function(e, r) {
            return t.apply(this, arguments)
        }
    }()), c.remoteForm(".js-mark-remaining-as-read", function() {
        var t = X(regeneratorRuntime.mark(function t(r, n) {
            var a, s, o;
            return regeneratorRuntime.wrap(function(t) {
                for (;;) switch (t.prev = t.next) {
                    case 0:
                        return t.next = 2, n.html();
                    case 2:
                        a = e.closest(r, ".js-notifications-browser"), (s = a.querySelector(".js-mark-remaining-as-read")) && s.classList.add("d-none"), (o = a.querySelector(".js-mark-remaining-as-read-confirmation")) && (o.classList.remove("d-none"), Uc(o));
                    case 7:
                    case "end":
                        return t.stop()
                }
            }, t, this)
        }));
        return function(e, r) {
            return t.apply(this, arguments)
        }
    }()), c.remoteForm(".js-create-saved-notification-thread", function() {
        var t = X(regeneratorRuntime.mark(function t(r, n) {
            var a;
            return regeneratorRuntime.wrap(function(t) {
                for (;;) switch (t.prev = t.next) {
                    case 0:
                        return t.next = 2, n.json();
                    case 2:
                        r.hidden = !0, a = e.closest(r, ".js-save-notification"), e.query(a, ".js-delete-saved-notification-thread").hidden = !1;
                    case 6:
                    case "end":
                        return t.stop()
                }
            }, t, this)
        }));
        return function(e, r) {
            return t.apply(this, arguments)
        }
    }()), c.remoteForm(".js-delete-saved-notification-thread", (Mc = X(regeneratorRuntime.mark(function t(r, n) {
        var a;
        return regeneratorRuntime.wrap(function(t) {
            for (;;) switch (t.prev = t.next) {
                case 0:
                    return t.next = 2, n.json();
                case 2:
                    r.getAttribute("data-is-saved-notification-view") ? e.closest(r, ".js-notification").classList.toggle("d-none") : (r.hidden = !0, a = e.closest(r, ".js-save-notification"), e.query(a, ".js-create-saved-notification-thread").hidden = !1);
                case 4:
                case "end":
                    return t.stop()
            }
        }, t, this)
    })), function(e, t) {
        return Mc.apply(this, arguments)
    })), r.on("navigation:keydown", ".js-notification", function(e) {
        o(e instanceof CustomEvent, "app/assets/modules/github/pages/notifications.js:163");
        var t = e.currentTarget,
            r = t.querySelector(".js-delete-notification") || t.querySelector(".js-mark-notification-as-read");
        switch (e.detail.hotkey) {
            case "I":
            case "e":
            case "y":
                l.submit(r), e.preventDefault(), e.stopPropagation();
                break;
            case "M":
            case "m":
                l.submit(t.querySelector(".js-mute-notification")), e.preventDefault(), e.stopPropagation()
        }
    }), r.on("navigation:keyopen", ".js-notification", function(e) {
        Oc(e.currentTarget)
    }), c.remoteForm(".js-notifications-subscription", (Hc = X(regeneratorRuntime.mark(function t(r, n) {
        var a;
        return regeneratorRuntime.wrap(function(t) {
            for (;;) switch (t.prev = t.next) {
                case 0:
                    return (a = e.query(r, ".js-spinner")).classList.remove("d-none"), t.prev = 2, t.next = 5, n.html();
                case 5:
                    t.next = 9;
                    break;
                case 7:
                    t.prev = 7, t.t0 = t.catch(2);
                case 9:
                    a.classList.add("d-none");
                case 10:
                case "end":
                    return t.stop()
            }
        }, t, this, [
            [2, 7]
        ])
    })), function(e, t) {
        return Hc.apply(this, arguments)
    })), c.remoteForm(".js-toggler-container .js-set-approval-state", function() {
        var t = X(regeneratorRuntime.mark(function t(r, n) {
            var a, s;
            return regeneratorRuntime.wrap(function(t) {
                for (;;) switch (t.prev = t.next) {
                    case 0:
                        return (a = e.closest(r, ".js-toggler-container")).classList.add("loading"), t.next = 4, n.json();
                    case 4:
                        1 === (s = t.sent).json.approval_state ? a.classList.add("on") : 2 === s.json.approval_state && (a.classList.add("revoked"), a.classList.remove("on")), a.classList.remove("loading");
                    case 7:
                    case "end":
                        return t.stop()
                }
            }, t, this)
        }));
        return function(e, r) {
            return t.apply(this, arguments)
        }
    }()), c.remoteForm(".js-request-access-approval-form", function() {
        var t = X(regeneratorRuntime.mark(function t(r, n) {
            var a;
            return regeneratorRuntime.wrap(function(t) {
                for (;;) switch (t.prev = t.next) {
                    case 0:
                        return t.next = 2, n.text();
                    case 2:
                        a = e.getAttribute(r, "data-container-id"), e.query(document, "#" + a).classList.add("on");
                    case 4:
                    case "end":
                        return t.stop()
                }
            }, t, this)
        }));
        return function(e, r) {
            return t.apply(this, arguments)
        }
    }()), r.on("click", ".js-org-insights-hero-container [role=tab]", function(e) {
        var t = e.currentTarget;
        t instanceof HTMLAnchorElement && Vc(t)
    }), H(function() {
        try {
            Vc(e.query(document, "[href='" + (document.location.hash || "#insights-prs") + "']", HTMLAnchorElement))
        } catch (e) {}
    });
    var zc = function() {
            var t = X(regeneratorRuntime.mark(function t(r) {
                var n, a, s, i, u, c, l, d, m, f, p, v, g, h, y, b, j, L, w, x;
                return regeneratorRuntime.wrap(function(t) {
                    for (;;) switch (t.prev = t.next) {
                        case 0:
                            if (n = r.getAttribute("data-results")) {
                                t.next = 3;
                                break
                            }
                            return t.abrupt("return");
                        case 3:
                            if (a = document.getElementById(n)) {
                                t.next = 6;
                                break
                            }
                            return t.abrupt("return");
                        case 6:
                            if (s = Wc.get(a)) {
                                t.next = 27;
                                break
                            }
                            if (!$c) {
                                t.next = 10;
                                break
                            }
                            return t.abrupt("return");
                        case 10:
                            return $c = !0, i = e.getAttribute(a, "data-url"), u = void 0, t.prev = 13, t.next = 16, k.fetchJSON(i);
                        case 16:
                            u = t.sent, t.next = 23;
                            break;
                        case 19:
                            return t.prev = 19, t.t0 = t.catch(13), $c = !1, t.abrupt("return");
                        case 23:
                            return $c = !1, Wc.set(a, u.paths), zc(r), t.abrupt("return");
                        case 27:
                            for (c = e.query(a, ".js-tree-browser-result-template").firstElementChild, o(c, "app/assets/modules/github/pages/repositories/tree-finder.js:47"), l = e.query(a, ".js-tree-finder-results"), d = r.value, m = void 0, f = void 0, d ? (m = xt(d), f = Lt(s, d)) : f = s, a.classList.toggle("filterable-empty", !f.length), p = document.createDocumentFragment(), v = !0, g = !1, h = void 0, t.prev = 39, y = f.slice(0, 50)[Symbol.iterator](); !(v = (b = y.next()).done); v = !0) j = b.value, L = c.cloneNode(!0), w = e.query(L, ".js-tree-finder-path", HTMLAnchorElement), (x = new URL(w.href)).pathname = x.pathname + "/" + encodeURI(j), w.href = x.href, w.textContent = j, kt(w, d, m), p.append(L);
                            t.next = 47;
                            break;
                        case 43:
                            t.prev = 43, t.t1 = t.catch(39), g = !0, h = t.t1;
                        case 47:
                            t.prev = 47, t.prev = 48, !v && y.return && y.return();
                        case 50:
                            if (t.prev = 50, !g) {
                                t.next = 53;
                                break
                            }
                            throw h;
                        case 53:
                            return t.finish(50);
                        case 54:
                            return t.finish(47);
                        case 55:
                            l.innerHTML = "", l.append(p), _.focus(l);
                        case 58:
                        case "end":
                            return t.stop()
                    }
                }, t, this, [
                    [13, 19],
                    [39, 43, 47, 55],
                    [48, , 50, 54]
                ])
            }));
            return function(e) {
                return t.apply(this, arguments)
            }
        }(),
        Wc = new WeakMap,
        $c = !1;
    n.onKey("keydown", ".js-tree-finder-field", function(e) {
        "Escape" === e.key && (e.preventDefault(), history.back())
    }), t.observe(".js-tree-finder-field", {
        constructor: HTMLInputElement,
        initialize: function(e) {
            function t() {
                zc(e)
            }
            return t(), {
                add: function(e) {
                    d.addThrottledInputEventListener(e, t), e.focus()
                },
                remove: function(e) {
                    d.removeThrottledInputEventListener(e, t)
                }
            }
        }
    }), document.addEventListener("pjax:end", function() {
        var e = document.querySelector('meta[name="selected-link"]'),
            t = e && e.getAttribute("value");
        if (t) {
            var r = !0,
                n = !1,
                a = void 0;
            try {
                for (var s, o = document.querySelectorAll(".js-sidenav-container-pjax .js-selected-navigation-item")[Symbol.iterator](); !(r = (s = o.next()).done); r = !0) {
                    var i = s.value,
                        u = (i.getAttribute("data-selected-links") || "").split(" ").indexOf(t) >= 0;
                    i.classList.toggle("selected", u)
                }
            } catch (e) {
                n = !0, a = e
            } finally {
                try {
                    !r && o.return && o.return()
                } finally {
                    if (n) throw a
                }
            }
        }
    }), n.onFocus(".js-email-notice-trigger", function(t) {
        var r = e.querySelectorAll(document, ".js-email-notice"),
            n = !0,
            a = !1,
            s = void 0;
        try {
            for (var o, i = r[Symbol.iterator](); !(n = (o = i.next()).done); n = !0) {
                o.value.classList.add("notice-highlight")
            }
        } catch (e) {
            a = !0, s = e
        } finally {
            try {
                !n && i.return && i.return()
            } finally {
                if (a) throw s
            }
        }
        t.addEventListener("blur", function() {
            var e = !0,
                t = !1,
                n = void 0;
            try {
                for (var a, s = r[Symbol.iterator](); !(e = (a = s.next()).done); e = !0) {
                    a.value.classList.remove("notice-highlight")
                }
            } catch (e) {
                t = !0, n = e
            } finally {
                try {
                    !e && s.return && s.return()
                } finally {
                    if (t) throw n
                }
            }
        })
    }), t.observe(".js-plan-choice:checked", {
        add: function(e) {
            var t = e.closest(".plan-row");
            t && t.classList.add("selected")
        },
        remove: function(e) {
            var t = e.closest(".plan-row");
            t && t.classList.remove("selected")
        }
    }), t.observe(".js-setup-organization:checked", {
        add: function() {
            var t = e.query(document, ".js-choose-plan-submit");
            t.getAttribute("data-default-text") || t.setAttribute("data-default-text", t.textContent), t.textContent = t.getAttribute("data-org-text") || ""
        },
        remove: function() {
            var t = e.query(document, ".js-choose-plan-submit");
            t.textContent = t.getAttribute("data-default-text") || ""
        }
    });
    var Kc = new WeakMap;
 
    function Jc(t) {
        var r = t.target;
        o(r instanceof HTMLElement, "app/assets/modules/github/pages/signup.js:65");
        var n = e.closest(r, "form");
        if (r.closest("input[type=text]") && !Kc.get(n)) {
            var a = e.query(n, ".js-signup-source", HTMLInputElement);
            I.trackEvent({
                category: "Signup",
                action: "Attempt",
                label: a.value
            }), Kc.set(n, !0)
        }
    }
    t.observe(".js-signup-form", {
        subscribe: function(e) {
            return y.fromEvent(e, "input", Jc)
        }
    }), t.observe(".js-octocaptcha-parent", function(t) {
        var r = e.query(t, ".js-octocaptcha-spinner"),
            n = e.query(t, ".js-octocaptcha-success"),
            a = e.query(t, ".js-octocaptcha-token", HTMLInputElement),
            s = e.query(t, ".js-octocaptcha-form-submit", HTMLButtonElement),
            o = e.query(t, ".js-octocaptcha-frame-container"),
            i = e.query(t, ".js-octocaptcha-frame"),
            u = a.getAttribute("data-octocaptcha-url"),
            c = "true" === t.getAttribute("data-redirect-after-solved"),
            l = !1,
            d = function() {
                l || (l = !0, r.classList.add("d-none"), n.classList.remove("d-none"), s.disabled = !1, c && s.click())
            },
            m = function() {
                if (!l) {
                    var e = document.createElement("input");
                    e.type = "hidden", e.id = "error_loading_captcha", e.name = "error_loading_captcha", e.value = "1", c = !1, t.appendChild(e), d()
                }
            };
        setTimeout(m, 2e4), i.addEventListener("error", m), window.addEventListener("message", function(e) {
            if (e.origin === u) {
                var t = e.data && e.data.event;
                "captcha-loaded" === t ? l || (l = !0, r.classList.add("d-none"), o.classList.remove("v-hidden", "zero-height")) : "captcha-complete" === t ? (a.value = e.data.sessionToken, s.disabled = !1, c && s.click()) : "captcha-suppressed" === t && d()
            }
        })
    }), t.observe(".js-other-field:checked", {
        add: function() {
            var e = document.querySelector(".js-specify-field");
            null !== e && (e.hidden = !1)
        },
        remove: function() {
            var e = document.querySelector(".js-specify-field");
            null !== e && (e.hidden = !0)
        }
    });
    var Gc = function() {
            var t = X(regeneratorRuntime.mark(function t(r) {
                var n, a, i, u, c, l, d;
                return regeneratorRuntime.wrap(function(t) {
                    for (;;) switch (t.prev = t.next) {
                        case 0:
                            if (n = r.oldIndex, a = r.newIndex, i = r.item, n !== a) {
                                t.next = 3;
                                break
                            }
                            return t.abrupt("return");
                        case 3:
                            return u = e.closest(i, ".js-pinned-issues-reorder-form", HTMLFormElement), c = e.closest(u, ".js-pinned-issues-reorder-container"), (l = e.query(c, ".js-pinned-issues-spinner")).style.display = "inline-block", o(Xc, "app/assets/modules/github/pinned-issue-reordering.js:35"), Xc.option("disabled", !0), t.prev = 9, t.next = 12, s.fetchText(u.action, {
                                method: u.method,
                                body: new FormData(u)
                            });
                        case 12:
                            l.style.display = "none", Xc.option("disabled", !1), t.next = 21;
                            break;
                        case 16:
                            t.prev = 16, t.t0 = t.catch(9), d = i.parentNode, o(d, "app/assets/modules/github/pinned-issue-reordering.js:47"), Qc ? d.insertBefore(i, Qc) : d.appendChild(i);
                        case 21:
                        case "end":
                            return t.stop()
                    }
                }, t, this, [
                    [9, 16]
                ])
            }));
            return function(e) {
                return t.apply(this, arguments)
            }
        }(),
        Xc = null,
        Qc = null;
 
    function Yc(e) {
        var t = e.item,
            r = e.oldIndex;
        Qc = t.parentNode.children[r + 1]
    }
    t.observe(".js-pinned-issues-reorder-list", function(e) {
        Xc = B.create(e, {
            animation: 150,
            item: ".js-pinned-issue-list-item",
            handle: ".js-pinned-issue-reorder",
            onUpdate: Gc,
            onStart: Yc,
            chosenClass: "is-dragging"
        })
    }), r.on("submit", ".js-pinned-issues-reorder-form", function(e) {
        e.preventDefault()
    }), yu(".js-pinned-issue-list-item", Gc);
    var Zc = null;
    r.on("pjax:click", ".js-pjax-capture-input", function() {
        Zc = function(e) {
            var t = e.createElement("textarea");
            return t.style.position = "fixed", t.style.top = "0", t.style.left = "0", t.style.opacity = "0", o(e.body, "app/assets/modules/github/capture-keypresses.js:18"), e.body.appendChild(t), t.focus(),
                function() {
                    return t.blur(), t.remove(), t.value
                }
        }(document)
    }), r.on("pjax:end", "#js-repo-pjax-container", function() {
        if (Zc) {
            var e = Zc(),
                t = document.querySelector(".js-pjax-restore-captured-input");
            t instanceof HTMLInputElement && e && l.changeValue(t, e), Zc = null
        }
    }), r.on("pjax:click", ".js-pjax-history-navigate", function(e) {
        o(e instanceof CustomEvent, "app/assets/modules/github/pjax/history-navigate.js:14"), e.currentTarget.href === m.getBackURL() ? (history.back(), e.detail.relatedEvent.preventDefault(), e.preventDefault()) : e.currentTarget.href === m.getForwardURL() && (history.forward(), e.detail.relatedEvent.preventDefault(), e.preventDefault())
    }), t.observe("link[rel=pjax-prefetch]", {
        constructor: HTMLLinkElement,
        initialize: function(e) {
            var t = L.fetch(e, {
                headers: {
                    Purpose: "prefetch"
                }
            });
            z.setPrefetchResponse(e, t)
        }
    });
    var el = function() {
            var e = X(regeneratorRuntime.mark(function e(t) {
                var r, n;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                        case 0:
                            if (r = document.getElementById("js-contribution-activity")) {
                                e.next = 3;
                                break
                            }
                            return e.abrupt("return");
                        case 3:
                            return r.classList.add("loading"), e.next = 6, s.fetchSafeDocumentFragment(document, t);
                        case 6:
                            n = e.sent, r.classList.remove("loading"), r.innerHTML = "", r.append(n);
                        case 10:
                        case "end":
                            return e.stop()
                    }
                }, e, this)
            }));
            return function(t) {
                return e.apply(this, arguments)
            }
        }(),
        tl = function() {
            var t = X(regeneratorRuntime.mark(function t(r, n, a) {
                var o, i, u, c, l;
                return regeneratorRuntime.wrap(function(t) {
                    for (;;) switch (t.prev = t.next) {
                        case 0:
                            return o = e.query(document, ".js-calendar-graph"), i = e.getAttribute(o, "data-graph-url"), u = new URL(i, window.location.origin), c = cl(u.search.slice(1), {
                                from: r,
                                to: n,
                                org: a
                            }), u.search = c.toString(), t.next = 7, s.fetchSafeDocumentFragment(document, u.toString());
                        case 7:
                            l = t.sent, e.query(document, ".js-yearly-contributions").replaceWith(l);
                        case 9:
                        case "end":
                            return t.stop()
                    }
                }, t, this)
            }));
            return function(e, r, n) {
                return t.apply(this, arguments)
            }
        }(),
        rl = function() {
            var e = X(regeneratorRuntime.mark(function e(t, r) {
                var n, a;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                        case 0:
                            if (n = document.getElementById("year-list-container")) {
                                e.next = 3;
                                break
                            }
                            return e.abrupt("return");
                        case 3:
                            return r.append("year_list", "1"), t.search = r.toString(), e.next = 7, s.fetchSafeDocumentFragment(document, t.toString());
                        case 7:
                            a = e.sent, n.innerHTML = "", n.append(a);
                        case 10:
                        case "end":
                            return e.stop()
                    }
                }, e, this)
            }));
            return function(t, r) {
                return e.apply(this, arguments)
            }
        }(),
        nl = function() {
            var e = X(regeneratorRuntime.mark(function e(t) {
                var r, n, a, s, o, i;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                        case 0:
                            return r = pl(), n = gl(), a = new Date(n.first), s = new Date(n.last), e.next = 6, tl(a, s, t);
                        case 6:
                            r.first && r.last && (o = new Date(r.first), i = new Date(r.last), ml(o, i));
                        case 7:
                        case "end":
                            return e.stop()
                    }
                }, e, this)
            }));
            return function(t) {
                return e.apply(this, arguments)
            }
        }(),
        al = null;
 
    function sl() {
        var t = e.query(document, ".js-calendar-graph"),
            r = e.getAttribute(t, "data-url");
        return new URL(r, window.location.origin)
    }
 
    function ol(t) {
        var r = t.target;
        o(r instanceof Element, "app/assets/modules/github/profile/contributions.js:55"), r.matches("rect.day") && (il(), function(t) {
            var r = document.body;
            o(r, "app/assets/modules/github/profile/contributions.js:88");
            var n = e.getAttribute(t, "data-date"),
                a = function(e, t) {
                    var r = ul[t.getUTCMonth()].slice(0, 3) + " " + t.getUTCDate() + ", " + t.getUTCFullYear(),
                        n = 0 === e ? "No" : R.formatNumber(e),
                        a = document.createElement("div");
                    a.classList.add("svg-tip", "svg-tip-one-line"), a.style.pointerEvents = "none";
                    var s = document.createElement("strong");
                    return s.textContent = n + " " + C.pluralize(e, "contribution"), a.append(s, " on " + r), a
                }(parseInt(t.getAttribute("data-count")), bl(n));
            r.appendChild(a);
            var s = t.getBoundingClientRect(),
                i = s.left + window.pageXOffset - a.offsetWidth / 2 + s.width / 2,
                u = s.bottom + window.pageYOffset - a.offsetHeight - 2 * s.height;
            a.style.top = u + "px", a.style.left = i + "px"
        }(r))
    }
 
    function il() {
        var e = document.querySelector(".svg-tip");
        e && e.remove()
    }
    t.observe(".js-calendar-graph-svg", function(t) {
        var r = e.closest(t, ".js-calendar-graph");
        r.addEventListener("mouseover", ol), r.addEventListener("mouseout", il);
        var n = r.getAttribute("data-from");
        n && (n = al = bl(n));
        var a = r.getAttribute("data-to");
        a && (a = bl(a))
    }), r.on("click", ".js-calendar-graph rect.day", function(t) {
        o(t instanceof MouseEvent, "app/assets/modules/github/profile/contributions.js:38");
        var r = t.currentTarget;
        o(r instanceof Element, "app/assets/modules/github/profile/contributions.js:40");
        var n = e.closest(r, ".js-calendar-graph"),
            a = e.getAttribute(n, "data-org"),
            s = e.getAttribute(r, "data-date");
        r.classList.contains("active") ? Ll(jl()) : function(e, t, r) {
            var n = void 0,
                a = void 0;
            if (al && t) {
                var s = al.getTime(),
                    o = s - 26784e5,
                    i = s + 26784e5,
                    u = e > al ? [al, e] : [e, al],
                    c = re(u, 2);
                n = c[0], a = c[1], n = new Date(Math.max(n, o)), a = new Date(Math.min(a, i)), al = null
            } else al = a = n = e;
            ml(n, a);
            var l = sl(),
                d = cl(l.search.slice(1), {
                    from: n,
                    to: a,
                    org: r
                });
            d.append("tab", "overview"), l.search = d.toString(), el(l.toString())
        }(bl(s), t.shiftKey, a)
    });
    var ul = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
 
    function cl(e, t) {
        var r = new URLSearchParams(e);
        r.delete("from"), r.delete("to"), r.delete("org");
        var n = t.fromStr;
        t.from && (n = yl(t.from)), n && r.append("from", n);
        var a = t.toStr;
        t.to && (a = yl(t.to)), a && r.append("to", a);
        var s = t.org;
        return s && r.append("org", s), r
    }
 
    function ll(e, t) {
        var r = (e.getAttribute("class") || "").trim().split(" ").filter(function(e) {
            return e !== t
        });
        e.setAttribute("class", r.join(" "))
    }
 
    function dl(e, t) {
        var r = (e.getAttribute("class") || "") + " " + t;
        e.setAttribute("class", r.trim())
    }
 
    function ml(t, r) {
        var n = e.query(document, ".js-calendar-graph"),
            a = n.querySelectorAll("rect.day"),
            s = !0,
            o = !1,
            i = void 0;
        try {
            for (var u, c = a[Symbol.iterator](); !(s = (u = c.next()).done); s = !0) {
                ll(u.value, "active")
            }
        } catch (e) {
            o = !0, i = e
        } finally {
            try {
                !s && c.return && c.return()
            } finally {
                if (o) throw i
            }
        }
        if (n.classList.remove("days-selected"), t || r) {
            n.classList.add("days-selected");
            var l = !0,
                d = !1,
                m = void 0;
            try {
                for (var f, p = a[Symbol.iterator](); !(l = (f = p.next()).done); l = !0) {
                    var v = f.value;
                    g(v) && dl(v, "active")
                }
            } catch (e) {
                d = !0, m = e
            } finally {
                try {
                    !l && p.return && p.return()
                } finally {
                    if (d) throw m
                }
            }
        }
 
        function g(e) {
            var n = bl(e.getAttribute("data-date") || "").getTime();
            return t && r ? t.getTime() <= n && n <= r.getTime() : t ? n === t.getTime() : void 0
        }
    }
 
    function fl() {
        var e = new URLSearchParams(window.location.search.slice(1));
        return {
            first: e.get("from"),
            last: e.get("to")
        }
    }
 
    function pl() {
        var t = e.query(document, ".js-calendar-graph").querySelectorAll("rect.active"),
            r = t[0],
            n = t[t.length - 1];
        return {
            first: r = r && e.getAttribute(r, "data-date"),
            last: n = n && e.getAttribute(n, "data-date")
        }
    }
 
    function vl() {
        var e = new URL(jl()),
            t = new URLSearchParams(e.search.slice(1));
        return {
            first: t.get("from"),
            last: t.get("to")
        }
    }
 
    function gl() {
        var t = e.query(document, ".js-calendar-graph");
        return {
            first: e.getAttribute(t, "data-from"),
            last: e.getAttribute(t, "data-to")
        }
    }
 
    function hl(e) {
        return ("0" + e).slice(-2)
    }
 
    function yl(e) {
        return e.getUTCFullYear() + "-" + hl(e.getUTCMonth() + 1) + "-" + hl(e.getUTCDate())
    }
 
    function bl(e) {
        var t = e.split("-").map(function(e) {
                return parseInt(e, 10)
            }),
            r = re(t, 3),
            n = r[0],
            a = r[1],
            s = r[2];
        return new Date(Date.UTC(n, a - 1, s))
    }
 
    function jl() {
        var t = e.query(document, ".js-profile-timeline-year-list .js-year-link.selected");
        return o(t instanceof HTMLAnchorElement, "app/assets/modules/github/profile/contributions.js:443"), t.href || ""
    }
 
    function Ll(e) {
        var t = new URL(e).search,
            r = new URLSearchParams(t.slice(1)),
            n = r.get("org"),
            a = new Date(r.get("from")),
            s = new Date(r.get("to"));
        tl(a, s, n);
        var o = new sl,
            i = cl(o.search.slice(1), {
                from: a,
                to: s,
                org: n
            });
        i.append("tab", "overview"), o.search = i.toString(), el(o.toString())
    }
 
    function wl(e) {
        var t = e.closest(".js-details-container");
        t && t.classList.add("open");
        var r = e.getBoundingClientRect(),
            n = window.scrollY + r.top - 62 - 10;
        window.scrollTo(0, n)
    }
    r.on("click", ".js-org-filter-link", function(e) {
            e.stopPropagation(), e.preventDefault();
            var t = e.currentTarget;
            o(t instanceof HTMLAnchorElement, "app/assets/modules/github/profile/contributions.js:377");
            var r = t.closest(".js-org-filter-links-container");
            o(r, "app/assets/modules/github/profile/contributions.js:379");
            var n = r.querySelector(".js-org-filter-link.selected"),
                a = new URL(t.href, window.location.origin),
                s = new URLSearchParams(a.search.slice(1)),
                i = s.get("org"),
                u = function() {
                    var e = [pl, fl, vl],
                        t = void 0,
                        r = void 0,
                        n = void 0,
                        a = !0,
                        s = !1,
                        i = void 0;
                    try {
                        for (var u, c = e[Symbol.iterator](); !(a = (u = c.next()).done); a = !0)
                            if ((n = (0, u.value)()).last) {
                                t = n.first, r = n.last;
                                break
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
                    return o(t, "app/assets/modules/github/profile/contributions.js:291"), o(r, "app/assets/modules/github/profile/contributions.js:292"), {
                        first: t,
                        last: r
                    }
                }();
            o(u.first, "app/assets/modules/github/profile/contributions.js:386"), o(u.last, "app/assets/modules/github/profile/contributions.js:387");
            var c = new Date(u.first),
                l = new Date(u.last);
            n && n.classList.remove("selected"), t !== n && t.classList.add("selected"), nl(i);
            var d = sl(),
                f = {
                    org: i,
                    from: null,
                    to: null
                };
            s.has("from") && (f.from = c), s.has("to") && (f.to = l);
            var p = cl(d.search.slice(1), f);
            d.search = p.toString(), el(d.toString()), rl(d, p), m.pushState(null, "", d.toString())
        }), r.on("click", ".js-year-link", function(t) {
            t.stopPropagation(), t.preventDefault();
            var r = t.currentTarget;
            o(r instanceof HTMLAnchorElement, "app/assets/modules/github/profile/contributions.js:426");
            var n = r.closest("ul");
            o(n instanceof HTMLElement, "app/assets/modules/github/profile/contributions.js:429"), e.query(n, ".js-year-link.selected").classList.remove("selected"), r.classList.add("selected"), Ll(r.href), m.pushState(null, "", r.href)
        }),
        function() {
            var e = window.location.hash;
            if (e && !(e.indexOf("#event-") < 0)) {
                var t = e.slice(1, e.length),
                    r = document.getElementById(t);
                r && wl(r)
            }
        }(), window.addEventListener("hashchange", function(e) {
            var t = e.newURL || window.location.href,
                r = t.slice(t.indexOf("#") + 1, t.length),
                n = document.getElementById(r);
            n && (e.stopPropagation(), wl(n))
        }), c.remoteForm(".js-show-more-timeline-form", function() {
            var t = X(regeneratorRuntime.mark(function t(r, n) {
                var a, s, o, i, u, c, l, d, f, p;
                return regeneratorRuntime.wrap(function(t) {
                    for (;;) switch (t.prev = t.next) {
                        case 0:
                            return t.next = 2, n.text();
                        case 2:
                            (a = document.querySelector(".js-show-more-timeline-form")) && (s = e.getAttribute(a, "data-year"), o = e.query(document, ".js-year-link.selected"), i = e.query(document, "#year-link-" + s), o.classList.remove("selected"), i.classList.add("selected"), u = r.getAttribute("data-year"), s !== u && (c = e.getAttribute(a, "data-from"), l = new Date(c), d = e.getAttribute(a, "data-to"), f = new Date(d), p = a.getAttribute("data-org"), tl(l, f, p))), document.title = r.getAttribute("data-title") || "", m.pushState(null, "", r.getAttribute("data-url") || "");
                        case 6:
                        case "end":
                            return t.stop()
                    }
                }, t, this)
            }));
            return function(e, r) {
                return t.apply(this, arguments)
            }
        }());
 
    function xl(t) {
        e.query(document, ".js-profile-editable-area").hidden = t, e.query(document, ".js-profile-editable-form").hidden = !t, e.query(document, ".js-profile-editable-error").textContent = ""
    }
    r.on("click", ".js-profile-editable-edit-button", function() {
        xl(!0)
    }), r.on("click", ".js-profile-editable-cancel", function() {
        xl(!1)
    }), c.remoteForm(".js-profile-editable-form", function() {
        var t = X(regeneratorRuntime.mark(function t(r, n) {
            var a;
            return regeneratorRuntime.wrap(function(t) {
                for (;;) switch (t.prev = t.next) {
                    case 0:
                        return a = void 0, t.prev = 1, t.next = 4, n.html();
                    case 4:
                        a = t.sent, t.next = 11;
                        break;
                    case 7:
                        return t.prev = 7, t.t0 = t.catch(1), 422 === t.t0.response.status && (e.query(document, ".js-profile-editable-error").textContent = t.t0.response.json.message), t.abrupt("return");
                    case 11:
                        r = a.html, e.query(document, ".js-profile-editable-area").replaceWith(r), xl(!1);
                    case 13:
                    case "end":
                        return t.stop()
                }
                var r
            }, t, void 0, [
                [1, 7]
            ])
        }));
        return function(e, r) {
            return t.apply(this, arguments)
        }
    }());
    var kl = function() {
        var t = X(regeneratorRuntime.mark(function t(r) {
            var n, a, s, o, i, u, c, l, d, m, p = r.currentTarget;
            return regeneratorRuntime.wrap(function(t) {
                for (;;) switch (t.prev = t.next) {
                    case 0:
                        return n = e.query(p, ".js-pinned-repos-selection-list"), t.next = 3, f.microtask();
                    case 3:
                        for (a = e.querySelectorAll(n, "input[type=checkbox]", HTMLInputElement), s = a.filter(function(e) {
                                return e.checked
                            }).length, o = parseInt(n.getAttribute("data-max-repo-count"), 10), i = !0, u = !1, c = void 0, t.prev = 9, l = a[Symbol.iterator](); !(i = (d = l.next()).done); i = !0)(m = d.value).disabled = s === o && !m.checked;
                        t.next = 17;
                        break;
                    case 13:
                        t.prev = 13, t.t0 = t.catch(9), u = !0, c = t.t0;
                    case 17:
                        t.prev = 17, t.prev = 18, !i && l.return && l.return();
                    case 20:
                        if (t.prev = 20, !u) {
                            t.next = 23;
                            break
                        }
                        throw c;
                    case 23:
                        return t.finish(20);
                    case 24:
                        return t.finish(17);
                    case 25:
                        El(e.closest(n, ".js-pinned-repos-selection-form", HTMLFormElement), s, o);
                    case 27:
                    case "end":
                        return t.stop()
                }
            }, t, this, [
                [9, 13, 17, 25],
                [18, , 20, 24]
            ])
        }));
        return function(e) {
            return t.apply(this, arguments)
        }
    }();
 
    function El(t, r, n) {
        var a = e.query(t, ".js-remaining-pinned-repos-count"),
            s = e.getAttribute(a, "data-remaining-label"),
            o = n - r;
        a.textContent = o + " " + s, a.classList.toggle("text-red", o < 1)
    }
 
    function Tl(t) {
        return {
            name: e.query(t, ".js-repo").textContent.toLowerCase().trim(),
            pinned: e.query(t, 'input[type="checkbox"]', HTMLInputElement).checked,
            owner: t.classList.contains("js-owned-repo"),
            contributor: t.classList.contains("js-contributed-repo"),
            element: t
        }
    }
 
    function ql(t) {
        var r = t.target;
        o(r instanceof Element, "app/assets/modules/github/profile/pinned-repositories.js:102");
        var n = e.closest(r, ".js-pinned-repos-selection-form"),
            a = e.query(n, ".js-pinned-repos-filter", HTMLInputElement).value.toLowerCase().trim(),
            s = function(t) {
                if (function(e) {
                        return !e.querySelector(".js-pinned-repo-source")
                    }(t)) return {
                    owners: !0,
                    contributors: !0
                };
                var r = e.querySelectorAll(t, ".js-pinned-repo-source:checked", HTMLInputElement),
                    n = r.map(function(e) {
                        return e.value
                    }),
                    a = n.indexOf("owned") > -1,
                    s = n.indexOf("contributed") > -1,
                    o = !0,
                    i = !1,
                    u = void 0;
                try {
                    for (var c, l = r[Symbol.iterator](); !(o = (c = l.next()).done); o = !0) c.value.disabled = a !== s
                } catch (e) {
                    i = !0, u = e
                } finally {
                    try {
                        !o && l.return && l.return()
                    } finally {
                        if (i) throw u
                    }
                }
                return {
                    owners: a,
                    contributors: s
                }
            }(n),
            i = Array.from(n.querySelectorAll(".js-pinned-repos-selection")).map(Tl).map(function(e) {
                return {
                    matched: function(e, t, r) {
                        if (e.pinned) return !0;
                        var n = !t || e.name.indexOf(t) > -1,
                            a = e.owner && r.owners,
                            s = e.contributor && r.contributors;
                        return n && (a || s)
                    }(e, a, s),
                    candidate: e
                }
            }),
            u = !0,
            c = !1,
            l = void 0;
        try {
            for (var d, m = i[Symbol.iterator](); !(u = (d = m.next()).done); u = !0) {
                var f = d.value,
                    p = f.matched;
                f.candidate.element.classList.toggle("d-none", !p)
            }
        } catch (e) {
            c = !0, l = e
        } finally {
            try {
                !u && m.return && m.return()
            } finally {
                if (c) throw l
            }
        }
        var v = i.some(function(e) {
            return e.matched
        });
        e.query(n, ".js-no-repos-message").classList.toggle("d-none", v)
    }
    n.onKey("keydown", ".js-pinned-repos-filter", function(e) {
        o(e instanceof KeyboardEvent, "app/assets/modules/github/profile/pinned-repositories.js:127"), "Enter" === x(e) && e.preventDefault()
    }), n.onInput(".js-pinned-repos-filter", ql), r.on("change", ".js-pinned-repos-filter", ql), r.on("search", ".js-pinned-repos-filter", ql), r.on("change", ".js-pinned-repo-source", ql), r.on("change", ".js-pinned-repos-selection-form", kl), r.on("reset", ".js-pinned-repos-selection-form", kl);
    var Sl = function() {
            var t = X(regeneratorRuntime.mark(function t(r) {
                var n, a, i, u, c, l, d, m;
                return regeneratorRuntime.wrap(function(t) {
                    for (;;) switch (t.prev = t.next) {
                        case 0:
                            if (n = r.oldIndex, a = r.newIndex, i = r.item, n !== a) {
                                t.next = 3;
                                break
                            }
                            return t.abrupt("return");
                        case 3:
                            return u = e.closest(i, ".js-pinned-repos-reorder-form", HTMLFormElement), c = e.closest(u, ".js-pinned-repos-reorder-container"), l = e.query(c, ".js-pinned-repos-spinner"), (d = e.query(c, ".js-pinned-repos-reorder-message")).textContent = "", l.style.display = "inline-block", o(Al, "app/assets/modules/github/profile/pinned-repository-reordering.js:37"), Al.option("disabled", !0), t.prev = 11, t.next = 14, s.fetchText(u.action, {
                                method: u.method,
                                body: new FormData(u)
                            });
                        case 14:
                            d.textContent = d.getAttribute("data-success-text") || "", l.style.display = "none", Al.option("disabled", !1), t.next = 25;
                            break;
                        case 19:
                            t.prev = 19, t.t0 = t.catch(11), d.textContent = d.getAttribute("data-error-text") || "", m = i.parentNode, o(m, "app/assets/modules/github/profile/pinned-repository-reordering.js:52"), Ml ? m.insertBefore(i, Ml) : m.appendChild(i);
                        case 25:
                        case "end":
                            return t.stop()
                    }
                }, t, this, [
                    [11, 19]
                ])
            }));
            return function(e) {
                return t.apply(this, arguments)
            }
        }(),
        Al = null,
        Ml = null;
 
    function Hl(e) {
        var t = e.item,
            r = e.oldIndex;
        Ml = t.parentNode.children[r + 1]
    }
    t.observe(".js-pinned-repos-reorder-list", function(e) {
        Al = B.create(e, {
            animation: 150,
            item: ".js-pinned-repo-list-item",
            handle: ".js-pinned-repository-reorder",
            onUpdate: Sl,
            onStart: Hl,
            chosenClass: "is-dragging"
        })
    }), r.on("submit", ".js-pinned-repos-reorder-form", function(e) {
        e.preventDefault()
    }), yu(".js-pinned-repo-list-item", Sl), t.observe(".js-user-profile-sticky-fields.is-stuck", function() {
        var t = e.query(document, ".js-user-profile-sticky-bar");
        return {
            add: function() {
                t.classList.add("is-stuck")
            },
            remove: function() {
                t.classList.remove("is-stuck")
            }
        }
    }), t.observe(".js-user-profile-follow-button.is-stuck", function() {
        var t = e.query(document, ".js-user-profile-sticky-bar");
        return {
            add: function() {
                t.classList.add("is-follow-stuck")
            },
            remove: function() {
                t.classList.remove("is-follow-stuck")
            }
        }
    }), t.observe(".js-user-profile-following-toggle .js-toggler-container.on", function() {
        return {
            add: function() {
                var e = document.querySelector(".js-user-profile-following-mini-toggle .js-toggler-container");
                e && e.classList.add("on")
            },
            remove: function() {
                var e = document.querySelector(".js-user-profile-following-mini-toggle .js-toggler-container");
                e && e.classList.remove("on")
            }
        }
    }), t.observe(".js-user-profile-following-mini-toggle .js-toggler-container.on", function() {
        var t = e.query(document, ".js-user-profile-following-toggle .js-toggler-container");
        return {
            add: function() {
                t.classList.add("on")
            },
            remove: function() {
                t.classList.remove("on")
            }
        }
    });
    var Il = document.querySelector("meta[name=js-proxy-site-detection-payload]"),
        Rl = document.querySelector("meta[name=expected-hostname]");
    if (Il instanceof HTMLMetaElement && Rl instanceof HTMLMetaElement && p(document)) {
        var _l = {
                url: window.location.href,
                expectedHostname: Rl.content,
                documentHostname: document.location.hostname,
                proxyPayload: Il.content
            },
            Cl = new Error,
            Fl = {};
        Fl.$__ = btoa(JSON.stringify(_l)), O.reportError(Cl, Fl)
    }
    r.on("details-menu-select", ".js-pull-base-branch-item", function(t) {
        t.preventDefault();
        var r = e.query(document, ".js-change-base-template", HTMLTemplateElement).content.cloneNode(!0);
        e.query(r, ".js-pull-change-base-branch-field", HTMLInputElement).value = t.currentTarget.getAttribute("data-branch") || "", q.dialog({
            content: r
        })
    });
    var Pl = function() {
        var e = X(regeneratorRuntime.mark(function e(t) {
            var r, n;
            return regeneratorRuntime.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                    case 0:
                        if (n = function(e) {
                                o(e.target instanceof HTMLElement, "app/assets/modules/github/pulls/commits-range-selection.js:62"), Nl(t, r, e.target)
                            }, r = t.querySelector('.js-navigation-item[aria-selected="true"]')) {
                            e.next = 4;
                            break
                        }
                        return e.abrupt("return");
                    case 4:
                        return Nl(t, r, r), t.addEventListener("navigation:focus", n), e.next = 8, new Promise(function(e) {
                            return window.addEventListener("keyup", e, {
                                once: !0
                            })
                        });
                    case 8:
                        t.removeEventListener("navigation:focus", n), Dl(t);
                    case 10:
                    case "end":
                        return e.stop()
                }
            }, e, this)
        }));
        return function(t) {
            return e.apply(this, arguments)
        }
    }();
 
    function Nl(e, t, r) {
        var n = Array.from(e.querySelectorAll(".js-navigation-item")),
            a = n.indexOf(t),
            s = n.indexOf(r);
        if (-1 === a) throw new Error("Couldn't find startIndex in container");
        if (-1 === s) throw new Error("Couldn't find endItem in container");
        if (Dl(e), n[s].classList.add("is-last-in-range"), a > s) {
            var o = [s, a];
            a = o[0], s = o[1]
        }
        var i = !0,
            u = !1,
            c = void 0;
        try {
            for (var l, d = n[Symbol.iterator](); !(i = (l = d.next()).done); i = !0) {
                l.value.classList.add("js-navigation-open")
            }
        } catch (e) {
            u = !0, c = e
        } finally {
            try {
                !i && d.return && d.return()
            } finally {
                if (u) throw c
            }
        }
        var m = !0,
            f = !1,
            p = void 0;
        try {
            for (var v, g = n.slice(a, s + 1)[Symbol.iterator](); !(m = (v = g.next()).done); m = !0) {
                var h = v.value;
                h.classList.add("is-range-selected"), h.classList.remove("js-navigation-open")
            }
        } catch (e) {
            f = !0, p = e
        } finally {
            try {
                !m && g.return && g.return()
            } finally {
                if (f) throw p
            }
        }
    }
 
    function Dl(e) {
        var t = !0,
            r = !1,
            n = void 0;
        try {
            for (var a, s = e.querySelectorAll(".js-navigation-item")[Symbol.iterator](); !(t = (a = s.next()).done); t = !0) {
                a.value.classList.remove("is-range-selected", "is-last-in-range")
            }
        } catch (e) {
            r = !0, n = e
        } finally {
            try {
                !t && s.return && s.return()
            } finally {
                if (r) throw n
            }
        }
    }
    r.on("navigation:open", ".js-diffbar-commits-list .js-navigation-item", function(e) {
        if (o(e instanceof CustomEvent, "app/assets/modules/github/pulls/commits-range-selection.js:84"), e.detail.shiftKey) {
            e.preventDefault();
            var t = e.currentTarget.closest(".js-diffbar-commits-menu");
            if (e.currentTarget.classList.contains("is-range-selected")) {
                e.stopPropagation();
                var r = t.querySelectorAll(".js-navigation-item.is-range-selected"),
                    n = r[0],
                    a = r[r.length - 1],
                    s = t.getAttribute("data-range-url"),
                    i = n.getAttribute("data-parent-commit"),
                    u = a.getAttribute("data-commit"),
                    c = i && u ? i + ".." + u : u,
                    l = s.replace("$range", c),
                    d = document.getElementById("js-repo-pjax-container");
                o(d, "app/assets/modules/github/pulls/commits-range-selection.js:106"), K({
                    url: l,
                    container: d
                })
            } else e.stopImmediatePropagation(), Pl(t)
        }
    }), r.on("click", ".js-compare-tab", function(t) {
        var r = !0,
            n = !1,
            a = void 0;
        try {
            for (var s, i = document.querySelectorAll(".js-compare-tab.selected")[Symbol.iterator](); !(r = (s = i.next()).done); r = !0) {
                s.value.classList.remove("selected")
            }
        } catch (e) {
            n = !0, a = e
        } finally {
            try {
                !r && i.return && i.return()
            } finally {
                if (n) throw a
            }
        }
        t.currentTarget.classList.add("selected");
        var u = !0,
            c = !1,
            l = void 0;
        try {
            for (var d, m = document.querySelectorAll("#commits_bucket, #files_bucket, #commit_comments_bucket")[Symbol.iterator](); !(u = (d = m.next()).done); u = !0) {
                d.value.classList.add("d-none")
            }
        } catch (e) {
            c = !0, l = e
        } finally {
            try {
                !u && m.return && m.return()
            } finally {
                if (c) throw l
            }
        }
        o(t.currentTarget instanceof HTMLAnchorElement, "app/assets/modules/github/pulls/compare.js:21");
        var f = t.currentTarget.hash;
        e.query(document, f).classList.remove("d-none"), t.preventDefault()
    }), H(function(t) {
        var r = t.target;
        if (r instanceof HTMLElement) {
            var n = r.closest("#commits_bucket, #files_bucket, #commit_comments_bucket");
            n && n instanceof HTMLElement && !T(n) && e.query(document, '.js-compare-tab[href="#' + n.id + '"]').click()
        }
    }), r.on("click", ".js-toggle-range-editor-cross-repo", function() {
        e.query(document, ".js-range-editor").classList.toggle("is-cross-repo")
    }), r.on("pjax:click", ".js-range-editor", function(e) {
        var t = document.querySelector(".js-compare-pr");
        if (t && t.classList.contains("open")) {
            o(e instanceof CustomEvent, "app/assets/modules/github/pulls/compare.js:52");
            var r = e.detail.options,
                n = new URL(r.url);
            n.search.match(/expand=1/) || (n.search += (n.search ? "&" : "") + "expand=1", r.url = n.toString())
        }
    }), r.on("navigation:open", ".js-commitish-form", function(e) {
        var t = e.currentTarget;
        o(t instanceof HTMLFormElement, "app/assets/modules/github/pulls/compare.js:64");
        var r = document.createElement("input");
        r.type = "hidden", r.name = "new_compare_ref";
        var n = t.querySelector(".js-new-item-name");
        o(n, "app/assets/modules/github/pulls/compare.js:69"), r.value = n.textContent, t.appendChild(r), l.submit(t)
    }), t.observe(".js-compare-pr.open", {
        add: function() {
            var e = document.body;
            o(e, "app/assets/modules/github/pulls/compare.js:79"), e.classList.add("is-pr-composer-expanded")
        },
        remove: function() {
            var e = document.body;
            o(e, "app/assets/modules/github/pulls/compare.js:84"), e.classList.remove("is-pr-composer-expanded")
        }
    }), r.on("change", ".js-collab-checkbox", function(t) {
        var r = t.currentTarget;
        o(r instanceof HTMLInputElement, "app/assets/modules/github/pulls/composer.js:9");
        var n = r.form;
        o(n, "app/assets/modules/github/pulls/composer.js:11");
        var a = !0,
            s = !1,
            i = void 0;
        try {
            for (var u, c = n.querySelectorAll(".errored")[Symbol.iterator](); !(a = (u = c.next()).done); a = !0) {
                u.value.classList.remove("errored")
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
        var l = e.closest(r, ".js-collab-option"),
            d = e.query(l, ".js-status-indicator");
        d.classList.remove("status-indicator-success", "status-indicator-failed"), d.classList.add("status-indicator-loading")
    }), c.remoteForm(".js-collab-form", function() {
        var t = X(regeneratorRuntime.mark(function t(r, n) {
            var a, s, o, i, u, c, l, d, m, f, p, v, g, h, y, b, j, L, w, x, k, E, T, q;
            return regeneratorRuntime.wrap(function(t) {
                for (;;) switch (t.prev = t.next) {
                    case 0:
                        return t.prev = 0, t.next = 3, n.text();
                    case 3:
                        t.next = 46;
                        break;
                    case 5:
                        for (t.prev = 5, t.t0 = t.catch(0), a = !0, s = !1, o = void 0, t.prev = 10, i = r.querySelectorAll(".status-indicator-loading")[Symbol.iterator](); !(a = (u = i.next()).done); a = !0)(c = u.value).classList.remove("status-indicator-loading"), c.classList.add("status-indicator-failed"), (l = e.closest(c, ".js-collab-option")).classList.add("errored"), (d = e.query(l, ".js-collab-checkbox", HTMLInputElement)).checked = !d.checked;
                        t.next = 18;
                        break;
                    case 14:
                        t.prev = 14, t.t1 = t.catch(10), s = !0, o = t.t1;
                    case 18:
                        t.prev = 18, t.prev = 19, !a && i.return && i.return();
                    case 21:
                        if (t.prev = 21, !s) {
                            t.next = 24;
                            break
                        }
                        throw o;
                    case 24:
                        return t.finish(21);
                    case 25:
                        return t.finish(18);
                    case 26:
                        for (m = !0, f = !1, p = void 0, t.prev = 29, v = r.querySelectorAll(".status-indicator-success")[Symbol.iterator](); !(m = (g = v.next()).done); m = !0) g.value.classList.remove("status-indicator-success");
                        t.next = 37;
                        break;
                    case 33:
                        t.prev = 33, t.t2 = t.catch(29), f = !0, p = t.t2;
                    case 37:
                        t.prev = 37, t.prev = 38, !m && v.return && v.return();
                    case 40:
                        if (t.prev = 40, !f) {
                            t.next = 43;
                            break
                        }
                        throw p;
                    case 43:
                        return t.finish(40);
                    case 44:
                        return t.finish(37);
                    case 45:
                        return t.abrupt("return");
                    case 46:
                        for (h = !0, y = !1, b = void 0, t.prev = 49, j = r.querySelectorAll(".errored")[Symbol.iterator](); !(h = (L = j.next()).done); h = !0) L.value.classList.remove("errored");
                        t.next = 57;
                        break;
                    case 53:
                        t.prev = 53, t.t3 = t.catch(49), y = !0, b = t.t3;
                    case 57:
                        t.prev = 57, t.prev = 58, !h && j.return && j.return();
                    case 60:
                        if (t.prev = 60, !y) {
                            t.next = 63;
                            break
                        }
                        throw b;
                    case 63:
                        return t.finish(60);
                    case 64:
                        return t.finish(57);
                    case 65:
                        for (w = !0, x = !1, k = void 0, t.prev = 68, E = r.querySelectorAll(".status-indicator-loading")[Symbol.iterator](); !(w = (T = E.next()).done); w = !0)(q = T.value).classList.remove("status-indicator-loading"), q.classList.add("status-indicator-success");
                        t.next = 76;
                        break;
                    case 72:
                        t.prev = 72, t.t4 = t.catch(68), x = !0, k = t.t4;
                    case 76:
                        t.prev = 76, t.prev = 77, !w && E.return && E.return();
                    case 79:
                        if (t.prev = 79, !x) {
                            t.next = 82;
                            break
                        }
                        throw k;
                    case 82:
                        return t.finish(79);
                    case 83:
                        return t.finish(76);
                    case 84:
                    case "end":
                        return t.stop()
                }
            }, t, this, [
                [0, 5],
                [10, 14, 18, 26],
                [19, , 21, 25],
                [29, 33, 37, 45],
                [38, , 40, 44],
                [49, 53, 57, 65],
                [58, , 60, 64],
                [68, 72, 76, 84],
                [77, , 79, 83]
            ])
        }));
        return function(e, r) {
            return t.apply(this, arguments)
        }
    }()), r.on("details-menu-selected", ".js-button-menu", function(t) {
        var r = e.query(t.currentTarget, "button[data-menu-button]"),
            n = e.query(t.target, "span[data-menu-button-text]").textContent;
        r.textContent = n, r.focus()
    }), t.observe(".js-timeline-item > .discussion-item.discussion-commits", {
        constructor: HTMLElement,
        add: function(t) {
            if (!t.querySelector(".discussion-item-header")) {
                var r = t.closest(".js-timeline-item");
                if (r instanceof HTMLElement) {
                    var n = r.previousElementSibling;
                    n instanceof HTMLElement && n.querySelector(".discussion-item.discussion-commits") && function(t, r) {
                        var n = e.query(t, ".timeline-commits"),
                            a = r.querySelectorAll(".timeline-commits > .commit"),
                            s = !0,
                            o = !1,
                            i = void 0;
                        try {
                            for (var u, c = a[Symbol.iterator](); !(s = (u = c.next()).done); s = !0) {
                                var l = u.value;
                                n.appendChild(l)
                            }
                        } catch (e) {
                            o = !0, i = e
                        } finally {
                            try {
                                !s && c.return && c.return()
                            } finally {
                                if (o) throw i
                            }
                        }
                        r.remove()
                    }(n, r)
                }
            }
        }
    });
    var Ol = void 0;
 
    function Bl(e) {
        var t = document.querySelector("head .js-site-favicon");
        t instanceof HTMLLinkElement && (null == Ol && (Ol = t.href), t.href = e)
    }
    t.observe("[data-favicon-override]", {
        add: function(t) {
            var r = e.getAttribute(t, "data-favicon-override");
            setTimeout(function() {
                return Bl(r)
            })
        },
        remove: function() {
            null != Ol && Bl(Ol)
        }
    }), r.on("click", ".js-file-header .js-details-target", function(t) {
        if (t instanceof MouseEvent && t.altKey && t.currentTarget instanceof HTMLElement) {
            var r = t.currentTarget,
                n = e.closest(r, ".js-details-container");
            n.addEventListener("details:toggled", function(e) {
                o(e instanceof CustomEvent, "app/assets/modules/github/pulls/file-collapsing.js:19");
                var t = e.detail.open;
                U.preservePosition(n, function() {
                    var e = !0,
                        r = !1,
                        a = void 0;
                    try {
                        for (var s, o = document.querySelectorAll(".js-file.js-details-container")[Symbol.iterator](); !(e = (s = o.next()).done); e = !0) {
                            var i = s.value;
                            i !== n && (i.classList.toggle("open", t), i.classList.toggle("Details--on", t))
                        }
                    } catch (e) {
                        r = !0, a = e
                    } finally {
                        try {
                            !e && o.return && o.return()
                        } finally {
                            if (r) throw a
                        }
                    }
                })
            }, {
                once: !0
            }), vc()
        }
    }), H(function() {
        var e = window.location.hash.slice(1);
        if (e) {
            var t = document.getElementsByName(e)[0];
            if (t) {
                var r = t.nextElementSibling;
                r && r.matches(".js-file.js-details-container") && (r.classList.add("open"), r.classList.add("Details--on"))
            }
        }
    }), r.on("click", ".js-fork-cleanup-select-item", function(t) {
        var r = t.currentTarget,
            n = e.closest(r, ".js-fork-cleanup-select-menu"),
            a = !0,
            s = !1,
            o = void 0;
        try {
            for (var i, u = e.querySelectorAll(n, ".js-fork-cleanup-select-item")[Symbol.iterator](); !(a = (i = u.next()).done); a = !0) {
                i.value.classList.remove("selected")
            }
        } catch (e) {
            s = !0, o = e
        } finally {
            try {
                !a && u.return && u.return()
            } finally {
                if (s) throw o
            }
        }
        r.classList.add("selected");
        var c = e.closest(n, ".js-fork-cleanup-button-group"),
            l = r.getAttribute("data-toggles-button");
        "branch" === l ? (e.query(c, ".js-fork-cleanup-branch-button").classList.remove("d-none"), e.query(c, ".js-fork-cleanup-fork-button").classList.add("d-none")) : "fork" === l && (e.query(c, ".js-fork-cleanup-branch-button").classList.add("d-none"), e.query(c, ".js-fork-cleanup-fork-button").classList.remove("d-none"))
    }), r.on("details:toggled", ".js-pull-merging", function(t) {
        var r = t.currentTarget,
            n = e.querySelectorAll(r, ".js-merge-pull-request"),
            a = n.some(T),
            s = !0,
            o = !1,
            i = void 0;
        try {
            for (var u, c = n[Symbol.iterator](); !(s = (u = c.next()).done); s = !0) {
                u.value.classList.toggle("is-dirty", a)
            }
        } catch (e) {
            o = !0, i = e
        } finally {
            try {
                !s && c.return && c.return()
            } finally {
                if (o) throw i
            }
        }
    }), r.on("click", ".js-merge-box-try-again", function() {
        var t = X(regeneratorRuntime.mark(function t(n) {
            var a, s = n.currentTarget;
            return regeneratorRuntime.wrap(function(t) {
                for (;;) switch (t.prev = t.next) {
                    case 0:
                        a = e.query(e.closest(s, ".js-pull-merging"), ".js-tryable-again", HTMLFormElement), r.fire(a, "submit");
                    case 2:
                    case "end":
                        return t.stop()
                }
            }, t, this)
        }));
        return function(e) {
            return t.apply(this, arguments)
        }
    }()), document.addEventListener("session:resume", function(e) {
        o(e instanceof CustomEvent, "app/assets/modules/github/pulls/merge.js:32");
        var t = document.getElementById(e.detail.targetId);
        if (t) {
            var r = t.closest(".js-merge-pull-request");
            if (r) {
                var n = r.closest(".js-details-container");
                n && n.classList.add("open")
            }
        }
    }), r.on("change", ".js-merge-method", function(t) {
        var r = t.currentTarget,
            n = e.closest(r, ".js-merge-pr");
        o(r instanceof HTMLInputElement, "app/assets/modules/github/pulls/merge.js:45"), n.classList.toggle("is-merging", "merge" === r.value), n.classList.toggle("is-squashing", "squash" === r.value), n.classList.toggle("is-rebasing", "rebase" === r.value);
        var a = e.querySelectorAll(n, ".js-merge-pull-request .js-merge-commit-button", HTMLButtonElement),
            s = !0,
            i = !1,
            u = void 0;
        try {
            for (var c, l = a[Symbol.iterator](); !(s = (c = l.next()).done); s = !0) {
                var d = c.value;
                d.type = r.value === d.value ? "submit" : "button"
            }
        } catch (e) {
            i = !0, u = e
        } finally {
            try {
                !s && l.return && l.return()
            } finally {
                if (i) throw u
            }
        }
        var m = e.closest(n, ".js-pull-merging"),
            f = m.getAttribute("data-url") || "";
        f = f.replace(/merge_type=(\w+)/, "merge_type=" + r.value), m.setAttribute("data-url", f)
    }), r.on("change", ".js-merge-button-toggle", function(t) {
        var r = t.currentTarget;
        o(r instanceof HTMLInputElement, "app/assets/modules/github/pulls/merge.js:62");
        var n = e.closest(r, ".js-merge-pr"),
            a = !r.checked,
            s = !0,
            i = !1,
            u = void 0;
        try {
            for (var c, l = e.querySelectorAll(n, ".js-merge-commit-button", HTMLButtonElement)[Symbol.iterator](); !(s = (c = l.next()).done); s = !0) {
                c.value.disabled = a
            }
        } catch (e) {
            i = !0, u = e
        } finally {
            try {
                !s && l.return && l.return()
            } finally {
                if (i) throw u
            }
        }
    }), r.on("navigation:open", ".js-merge-method-menu .js-navigation-item", function(t) {
        var r = t.currentTarget,
            n = e.closest(r, ".js-merge-pr"),
            a = e.query(n, ".js-merge-title", HTMLInputElement),
            s = e.query(n, ".js-merge-message", HTMLTextAreaElement);
        a.defaultValue === a.value && (a.defaultValue = r.getAttribute("data-input-title-value") || ""), s.defaultValue === s.value && (s.defaultValue = r.getAttribute("data-input-message-value") || "")
    }), r.on("details:toggled", ".js-merge-pr", function(e) {
        var t = e.currentTarget.querySelector(".js-merge-message");
        t && r.fire(t, "change")
    }), r.on("click", ".js-pull-merging a[href]", function(e) {
        var t = e.currentTarget;
        o(t instanceof HTMLElement, "app/assets/modules/github/pulls/merge.js:94"), la && t.blur()
    });
    var Ul = !1;
 
    function Vl() {
        for (var e = document.querySelectorAll(".pull-request-ref-restore"), t = 0; t < e.length; t++) e[t].classList.toggle("last", t === e.length - 1)
    }
 
    function zl() {
        var e = null != document.querySelector("#js-pull-restorable"),
            t = document.querySelector(".js-pull-discussion-timeline");
        t && t.classList.toggle("is-pull-restorable", e)
    }
 
    function Wl() {
        var t = document.querySelector(".js-reviews-container");
        t && setTimeout(function() {
            return function(t) {
                var r = e.closest(t, ".js-review-state-classes"),
                    n = r.querySelectorAll(".js-pending-review-comment").length;
                r.classList.toggle("is-review-pending", n > 0);
                var a = !0,
                    s = !1,
                    o = void 0;
                try {
                    for (var i, u = document.querySelectorAll(".js-pending-review-comment-count")[Symbol.iterator](); !(a = (i = u.next()).done); a = !0) i.value.textContent = String(n)
                } catch (e) {
                    s = !0, o = e
                } finally {
                    try {
                        !a && u.return && u.return()
                    } finally {
                        if (s) throw o
                    }
                }
                var c = !0,
                    l = !1,
                    d = void 0;
                try {
                    for (var m, f = document.querySelectorAll(".js-pending-comment-count-type")[Symbol.iterator](); !(c = (m = f.next()).done); c = !0) {
                        var p = m.value;
                        C.pluralizeNode(n, p)
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
                if (n > 0) {
                    var v = e.query(t, ".js-reviews-toggle");
                    v.classList.add("anim-pulse-in"), v.addEventListener("animationend", function() {
                        return v.classList.remove("anim-pulse-in")
                    }, {
                        once: !0
                    })
                }
            }(t)
        })
    }
    document.addEventListener("keydown", function(e) {
        "Alt" === e.key && (Ul = !0)
    }), document.addEventListener("keyup", function(e) {
        "Alt" === e.key && (Ul = !1)
    }), r.on("click", ".js-toggle-outdated-comments", function(t) {
        if ((t instanceof MouseEvent && t.altKey || Ul) && t.currentTarget instanceof HTMLElement) {
            var r = t.currentTarget,
                n = e.closest(r, "details");
            setTimeout(function() {
                U.preservePosition(r, a)
            })
        }
 
        function a() {
            var t = n.hasAttribute("open"),
                a = !0,
                s = !1,
                o = void 0;
            try {
                for (var i, u = document.querySelectorAll(".js-toggle-outdated-comments")[Symbol.iterator](); !(a = (i = u.next()).done); a = !0) {
                    var c = i.value;
                    if (c !== r) {
                        var l = e.closest(c, "details");
                        t ? l.setAttribute("open", "") : l.removeAttribute("open")
                    }
                }
            } catch (e) {
                s = !0, o = e
            } finally {
                try {
                    !a && u.return && u.return()
                } finally {
                    if (s) throw o
                }
            }
        }
    }), t.observe(".pull-request-ref-restore", {
        add: Vl,
        remove: Vl
    }), t.observe("#js-pull-restorable", {
        add: zl,
        remove: zl
    }), c.remoteForm(".js-inline-comment-form", function() {
        var e = X(regeneratorRuntime.mark(function e(t, r) {
            return regeneratorRuntime.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                    case 0:
                        return e.next = 2, r.text();
                    case 2:
                        Wl();
                    case 3:
                    case "end":
                        return e.stop()
                }
            }, e, this)
        }));
        return function(t, r) {
            return e.apply(this, arguments)
        }
    }()), c.remoteForm(".js-pending-review-comment .js-comment-delete", function() {
        var e = X(regeneratorRuntime.mark(function e(t, r) {
            return regeneratorRuntime.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                    case 0:
                        return e.next = 2, r.text();
                    case 2:
                        Wl();
                    case 3:
                    case "end":
                        return e.stop()
                }
            }, e, this)
        }));
        return function(t, r) {
            return e.apply(this, arguments)
        }
    }()), c.remoteForm(".js-resolvable-timeline-thread-form", function() {
        var t = X(regeneratorRuntime.mark(function t(r, n) {
            var a, s;
            return regeneratorRuntime.wrap(function(t) {
                for (;;) switch (t.prev = t.next) {
                    case 0:
                        return t.prev = 0, t.next = 3, n.html();
                    case 3:
                        a = t.sent, e.closest(r, ".js-resolvable-timeline-thread-container").replaceWith(a.html), t.next = 12;
                        break;
                    case 8:
                        t.prev = 8, t.t0 = t.catch(0), (s = document.getElementById("ajax-error-message")) && s.classList.add("visible");
                    case 12:
                    case "end":
                        return t.stop()
                }
            }, t, this, [
                [0, 8]
            ])
        }));
        return function(e, r) {
            return t.apply(this, arguments)
        }
    }()), r.on("click", ".js-resolvable-thread-toggler", function(t) {
        var r = e.closest(t.target, ".js-resolvable-timeline-thread-container");
        e.closest(t.target, ".js-resolvable-thread-toggler-container").classList.toggle("border-bottom"), e.query(r, ".js-resolvable-thread-contents").classList.toggle("d-none");
        var n = !0,
            a = !1,
            s = void 0;
        try {
            for (var o, i = r.querySelectorAll(".js-resolvable-thread-toggler")[Symbol.iterator](); !(n = (o = i.next()).done); n = !0) {
                o.value.classList.toggle("d-none")
            }
        } catch (e) {
            a = !0, s = e
        } finally {
            try {
                !n && i.return && i.return()
            } finally {
                if (a) throw s
            }
        }
    }), document.addEventListener("pjax:end", function() {
        var e = !0,
            t = !1,
            n = void 0;
        try {
            for (var a, s = document.querySelectorAll(".js-pull-refresh-on-pjax")[Symbol.iterator](); !(e = (a = s.next()).done); e = !0) {
                var o = a.value;
                r.fire(o, "socket:message", {})
            }
        } catch (e) {
            t = !0, n = e
        } finally {
            try {
                !e && s.return && s.return()
            } finally {
                if (t) throw n
            }
        }
    });
    var $l = "```suggestion",
        Kl = "```",
        Jl = new RegExp($l + "(?:.*)\n", "i"),
        Gl = new RegExp(Kl + "(\n|$)");
 
    function Xl(e, t) {
        var r = e.slice(0, t).split("\n");
        return e.split("\n")[r.length - 1]
    }
 
    function Ql(e) {
        var t = /^(\s+)/.exec(e);
        return t && t[0] || ""
    }
 
    function Yl(e, t) {
        var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
            n = t.substring(r, t.length),
            a = e.exec(n);
        return a ? a.index + r : -1
    }
 
    function Zl(e, t) {
        for (var r = [], n = 0, a = -1;
            (a = Yl(Jl, e, n)) > -1;) {
            n = a + $l.length;
            var s = Yl(Gl, e, n);
            if (-1 === s) return !1;
            n = s + Kl.length, r.push([a, s])
        }
        return r.some(function(e) {
            return t > e[0] && t < e[1]
        })
    }
 
    function ed(e, t) {
        var r = function(e) {
                var t = $l + "\n";
                return t += e + "\n", t += Kl
            }(e),
            n = t.selectionStart,
            a = t.value,
            s = Yl(/\n/, a, n),
            o = "" === a.trim(),
            i = Xl(a, n),
            u = "" === i.trim(),
            c = ("\n" + Kl).length,
            d = a,
            m = 0;
        if (o) m = (d = r).length - c;
        else if (-1 === s) m = u ? (d = a + r).length - c : (d = [a, r].join("\n")).length - c;
        else if (u) {
            var f = n - Ql(i).length,
                p = a.substring(0, f),
                v = a.substring(s, a.length);
            m = (d = [p, r, v].join("")).length - v.length - c
        } else if (Zl(a, n)) {
            var g = Yl(/```/, a, n) + 3,
                h = a.substring(0, g),
                y = a.substring(g, a.length);
            m = (d = [h, "\n", r, y].join("")).length - y.length - c
        } else {
            var b = a.substring(0, s),
                j = a.substring(s, a.length);
            m = (d = [b, "\n", r, j].join("")).length - j.length - c
        }
        l.changeValue(t, d), t.focus(), t.setSelectionRange(m, m)
    }
    var td = ".js-add-to-batch-enabled",
        rd = ".js-unchanged-suggestion",
        nd = ".js-closed-pull",
        ad = ".js-viewing-subset-changes",
        sd = ".js-validation-on-left-blob",
        od = ".js-validation-on-right-blob",
        id = ".js-outdated-comment",
        ud = ".js-resolved-thread",
        cd = ".js-pending-review";
 
    function ld(t) {
        var r = function(t) {
            var r = t.closest(".js-inline-comments-container");
            if (r) {
                var n = t.closest(".js-line-comments.line-comments"),
                    a = null;
                n && (a = n.classList.contains("js-addition") ? "right" : "left");
                var s = r.previousElementSibling;
                o(s, "app/assets/modules/github/pulls/suggested-changes.js:43");
                var i = [];
                if ("TR" === s.tagName) i = Array.from(s.children);
                else {
                    var u = s.querySelectorAll("tr"),
                        c = Array.from(u).pop();
                    i = Array.from(c.children)
                }
                var l = i.filter(function(e) {
                        var t = e.classList;
                        return !t.contains("blob-code-marker-cell") && (t.contains("code-review") || t.contains("blob-code"))
                    }),
                    d = "right" === a ? l.pop() : l.shift();
                if (d) return e.query(d, ".blob-code-inner").textContent
            }
        }(t);
        if (null != r) {
            var n = e.closest(t, ".js-suggester-container");
            ed(r, e.query(n, ".js-comment-field", HTMLTextAreaElement))
        }
    }
 
    function dd(t, r) {
        var n = document.querySelectorAll(".js-apply-suggestion-button"),
            a = e.query(t, ".js-disabled-apply-suggestion-button"),
            s = !0,
            o = !1,
            i = void 0;
        try {
            for (var u, c = n[Symbol.iterator](); !(s = (u = c.next()).done); s = !0) {
                var l = u.value,
                    d = a.cloneNode(!0);
                fd(d, r), e.closest(l, "details").replaceWith(d)
            }
        } catch (e) {
            o = !0, i = e
        } finally {
            try {
                !s && c.return && c.return()
            } finally {
                if (o) throw i
            }
        }
    }
 
    function md(t) {
        var r = document.querySelector(".js-batched-suggested-changes-container");
        r && r.classList.add("d-none");
        var n = !0,
            a = !1,
            s = void 0;
        try {
            for (var o, i = e.querySelectorAll(document, ".js-apply-single-suggestion", HTMLInputElement)[Symbol.iterator](); !(n = (o = i.next()).done); n = !0) {
                var u = o.value;
                u.classList.remove("d-none"), u.disabled = !0, u.setAttribute("aria-label", t)
            }
        } catch (e) {
            a = !0, s = e
        } finally {
            try {
                !n && i.return && i.return()
            } finally {
                if (a) throw s
            }
        }
        var c = !0,
            l = !1,
            d = void 0;
        try {
            for (var m, f = e.querySelectorAll(document, ".js-batched-suggested-changes-add", HTMLInputElement)[Symbol.iterator](); !(c = (m = f.next()).done); c = !0) {
                var p = m.value;
                p.classList.remove("d-none"), p.disabled = !0, p.setAttribute("aria-label", t)
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
        var v = !0,
            g = !1,
            h = void 0;
        try {
            for (var y, b = document.querySelectorAll(".js-batched-suggested-changes-remove")[Symbol.iterator](); !(v = (y = b.next()).done); v = !0) {
                y.value.classList.add("d-none")
            }
        } catch (e) {
            g = !0, h = e
        } finally {
            try {
                !v && b.return && b.return()
            } finally {
                if (g) throw h
            }
        }
        var j = !0,
            L = !1,
            w = void 0;
        try {
            for (var x, k = document.querySelectorAll(".js-focus-commit-suggestions-form-button")[Symbol.iterator](); !(j = (x = k.next()).done); j = !0) {
                x.value.classList.add("d-none")
            }
        } catch (e) {
            L = !0, w = e
        } finally {
            try {
                !j && k.return && k.return()
            } finally {
                if (L) throw w
            }
        }
        var E = !0,
            T = !1,
            q = void 0;
        try {
            for (var S, A = document.querySelectorAll(".pending-batched-suggestion-label")[Symbol.iterator](); !(E = (S = A.next()).done); E = !0) {
                S.value.classList.add("d-none")
            }
        } catch (e) {
            T = !0, q = e
        } finally {
            try {
                !E && A.return && A.return()
            } finally {
                if (T) throw q
            }
        }
    }
 
    function fd(e, t) {
        e.setAttribute("aria-label", t), e.classList.remove("d-none")
    }
 
    function pd(t, r) {
        var n = e.query(document, ".js-suggested-changes-inline-validation-template").cloneNode(!0);
        n.classList.remove("js-suggested-changes-inline-validation-template"), e.query(n, ".js-suggested-changes-inline-error-message").textContent = t.trim();
        var a = r.parentNode;
        o(a, "app/assets/modules/github/pulls/suggested-changes.js:127"), a.insertBefore(n, r.nextSibling)
    }
 
    function vd() {
        var t = document.querySelector(".js-batched-suggested-changes-container");
        t && setTimeout(function() {
            return function(t) {
                var r = e.closest(t, ".js-review-state-classes").querySelectorAll("[data-pending-batched-suggestion]").length,
                    n = !0,
                    a = !1,
                    s = void 0;
                try {
                    for (var o, i = document.querySelectorAll(".js-pending-batched-suggested-changes-count")[Symbol.iterator](); !(n = (o = i.next()).done); n = !0) o.value.textContent = String(r)
                } catch (e) {
                    a = !0, s = e
                } finally {
                    try {
                        !n && i.return && i.return()
                    } finally {
                        if (a) throw s
                    }
                }
                var u = e.query(document, ".js-reenable-add-to-batch").textContent,
                    c = !0,
                    l = !1,
                    d = void 0;
                try {
                    for (var m, f = document.querySelectorAll("[data-batched-suggestion-reenable-sibling]")[Symbol.iterator](); !(c = (m = f.next()).done); c = !0) {
                        var p = m.value;
                        p.removeAttribute("data-batched-suggestion-reenable-sibling"), p.removeAttribute("disabled"), p.setAttribute("aria-label", u)
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
                if (r > 0) {
                    t.hidden = !1;
                    var v = e.query(t, ".js-batched-suggested-changes-toggle");
                    v.classList.add("anim-pulse-in"), v.addEventListener("animationend", function() {
                        return v.classList.remove("anim-pulse-in")
                    }, {
                        once: !0
                    });
                    var g = !0,
                        h = !1,
                        y = void 0;
                    try {
                        for (var b, j = document.querySelectorAll(".js-apply-single-suggestion")[Symbol.iterator](); !(g = (b = j.next()).done); g = !0) b.value.classList.add("d-none")
                    } catch (e) {
                        h = !0, y = e
                    } finally {
                        try {
                            !g && j.return && j.return()
                        } finally {
                            if (h) throw y
                        }
                    }
                    var L = !0,
                        w = !1,
                        x = void 0;
                    try {
                        for (var k, E = document.querySelectorAll(".js-batched-suggested-changes-add")[Symbol.iterator](); !(L = (k = E.next()).done); L = !0) {
                            var T = k.value;
                            if ("true" === (X = e.closest(T, ".js-suggested-change-form-container")).getAttribute("data-pending-batched-suggestion") || "true" === X.getAttribute("data-comment-pending") || "true" === X.getAttribute("data-outdated-comment") ? T.classList.add("d-none") : T.classList.remove("d-none"), "true" === T.getAttribute("data-batched-suggestion-disabled-by-sibling")) {
                                T.removeAttribute("data-batched-suggestion-disabled-by-sibling"), T.setAttribute("disabled", "disabled");
                                var q = e.query(document, ".js-one-suggestion-per-line").textContent;
                                T.setAttribute("aria-label", q)
                            }
                        }
                    } catch (e) {
                        w = !0, x = e
                    } finally {
                        try {
                            !L && E.return && E.return()
                        } finally {
                            if (w) throw x
                        }
                    }
                    var S = !0,
                        A = !1,
                        M = void 0;
                    try {
                        for (var H, I = document.querySelectorAll(".js-batched-suggested-changes-remove")[Symbol.iterator](); !(S = (H = I.next()).done); S = !0) {
                            var R = H.value;
                            "true" === (X = e.closest(R, ".js-suggested-change-form-container")).getAttribute("data-pending-batched-suggestion") ? R.classList.remove("d-none") : R.classList.add("d-none")
                        }
                    } catch (e) {
                        A = !0, M = e
                    } finally {
                        try {
                            !S && I.return && I.return()
                        } finally {
                            if (A) throw M
                        }
                    }
                    var _ = !0,
                        C = !1,
                        F = void 0;
                    try {
                        for (var P, N = document.querySelectorAll(".js-focus-commit-suggestions-form-button")[Symbol.iterator](); !(_ = (P = N.next()).done); _ = !0) {
                            var D = P.value,
                                O = "true" === (X = e.closest(D, ".js-suggested-change-form-container")).getAttribute("data-comment-pending"),
                                B = "true" === X.getAttribute("data-outdated-comment"),
                                U = "true" === X.getAttribute("data-resolved-comment"),
                                V = e.closest(D, ".js-inline-comments-container"),
                                z = "left" === e.query(V, 'input[name="side"]', HTMLInputElement).value;
                            O || B || U || z ? D.classList.add("d-none") : D.classList.remove("d-none")
                        }
                    } catch (e) {
                        C = !0, F = e
                    } finally {
                        try {
                            !_ && N.return && N.return()
                        } finally {
                            if (C) throw F
                        }
                    }
                    var W = !0,
                        $ = !1,
                        K = void 0;
                    try {
                        for (var J, G = document.querySelectorAll(".pending-batched-suggestion-label")[Symbol.iterator](); !(W = (J = G.next()).done); W = !0) {
                            var X, Q = J.value;
                            "true" === (X = e.closest(Q, ".js-suggested-change-form-container")).getAttribute("data-pending-batched-suggestion") ? Q.classList.remove("d-none") : Q.classList.add("d-none")
                        }
                    } catch (e) {
                        $ = !0, K = e
                    } finally {
                        try {
                            !W && G.return && G.return()
                        } finally {
                            if ($) throw K
                        }
                    }
                } else {
                    t.hidden = !0;
                    var Y = !0,
                        Z = !1,
                        ee = void 0;
                    try {
                        for (var te, re = document.querySelectorAll(".js-apply-single-suggestion")[Symbol.iterator](); !(Y = (te = re.next()).done); Y = !0) te.value.classList.remove("d-none")
                    } catch (e) {
                        Z = !0, ee = e
                    } finally {
                        try {
                            !Y && re.return && re.return()
                        } finally {
                            if (Z) throw ee
                        }
                    }
                    var ne = !0,
                        ae = !1,
                        se = void 0;
                    try {
                        for (var oe, ie = document.querySelectorAll(".js-batched-suggested-changes-add")[Symbol.iterator](); !(ne = (oe = ie.next()).done); ne = !0) oe.value.classList.remove("d-none")
                    } catch (e) {
                        ae = !0, se = e
                    } finally {
                        try {
                            !ne && ie.return && ie.return()
                        } finally {
                            if (ae) throw se
                        }
                    }
                    var ue = !0,
                        ce = !1,
                        le = void 0;
                    try {
                        for (var de, me = document.querySelectorAll(".js-batched-suggested-changes-remove")[Symbol.iterator](); !(ue = (de = me.next()).done); ue = !0) de.value.classList.add("d-none")
                    } catch (e) {
                        ce = !0, le = e
                    } finally {
                        try {
                            !ue && me.return && me.return()
                        } finally {
                            if (ce) throw le
                        }
                    }
                    var fe = !0,
                        pe = !1,
                        ve = void 0;
                    try {
                        for (var ge, he = document.querySelectorAll(".js-focus-commit-suggestions-form-button")[Symbol.iterator](); !(fe = (ge = he.next()).done); fe = !0) ge.value.classList.add("d-none")
                    } catch (e) {
                        pe = !0, ve = e
                    } finally {
                        try {
                            !fe && he.return && he.return()
                        } finally {
                            if (pe) throw ve
                        }
                    }
                    var ye = !0,
                        be = !1,
                        je = void 0;
                    try {
                        for (var Le, we = document.querySelectorAll(".pending-batched-suggestion-label")[Symbol.iterator](); !(ye = (Le = we.next()).done); ye = !0) Le.value.classList.add("d-none")
                    } catch (e) {
                        be = !0, je = e
                    } finally {
                        try {
                            !ye && we.return && we.return()
                        } finally {
                            if (be) throw je
                        }
                    }
                }
            }(t)
        })
    }
 
    function gd(t, r) {
        var n = e.query(t, "input[name=commit_title]", HTMLInputElement),
            a = e.query(t, "textarea[name=commit_message]", HTMLTextAreaElement),
            s = n.value.trim();
        "" === s && (s = n.defaultValue);
        var o = a.value.trim();
        "" !== o && (s = s + "\n\n" + o + "\n"), n.disabled = !0, a.disabled = !0;
        var i = document.createElement("input");
        i.setAttribute("type", "hidden"), i.setAttribute("name", "message"), i.value = s, t.appendChild(i);
        var u = document.createElement("input");
        u.setAttribute("type", "hidden"), u.setAttribute("name", "changes"), u.value = JSON.stringify(r), t.appendChild(u)
    }
 
    function hd(t) {
        var r = t.target;
        o(r instanceof HTMLElement, "app/assets/modules/github/reactions.js:32");
        var n = e.getAttribute(r, "data-reaction-label"),
            a = e.closest(r, ".js-add-reaction-popover");
        e.query(a, ".js-reaction-description").textContent = n
    }
 
    function yd(t) {
        o(t.target instanceof HTMLElement, "app/assets/modules/github/reactions.js:41");
        var r = e.closest(t.target, ".js-add-reaction-popover");
        e.query(r, ".js-reaction-description").textContent = "Pick your reaction"
    }
    r.on("click", ".js-suggested-change-toolbar-item", function(e) {
        var t = e.currentTarget;
        t instanceof HTMLButtonElement && !t.disabled && ld(t)
    }), r.on("click", ".js-refresh-after-suggestion", function() {
        window.location.reload()
    }), t.observe(".js-inline-comments-container", {
        add: function(t) {
            var r = t.querySelector('input[name="side"]'),
                n = document.querySelector(".js-suggested-changes-subset-files"),
                a = r instanceof HTMLInputElement && "left" === r.value;
            if (n || a) {
                var s = e.querySelectorAll(t, ".js-suggested-change-toolbar-item", HTMLButtonElement),
                    o = n ? ad : sd,
                    i = e.query(document, o).textContent.trim(),
                    u = !0,
                    c = !1,
                    l = void 0;
                try {
                    for (var d, m = s[Symbol.iterator](); !(u = (d = m.next()).done); u = !0) {
                        var f = d.value;
                        f.disabled = !0, f.setAttribute("aria-label", i)
                    }
                } catch (e) {
                    c = !0, l = e
                } finally {
                    try {
                        !u && m.return && m.return()
                    } finally {
                        if (c) throw l
                    }
                }
            }
        }
    }), t.observe(".js-preview-body .js-apply-changes", {
        add: function(t) {
            var r = t.closest(".js-suggested-changes-container");
            if (!r) return t.remove();
            var n = e.query(document, od).textContent,
                a = e.query(document, sd).textContent,
                s = e.closest(t, ".js-suggested-changes-blob");
            if ("" !== r.getAttribute("data-thread-side")) {
                if ("left" === r.getAttribute("data-thread-side")) return pd(a, s), t.remove()
            } else {
                var i = e.closest(t, ".js-inline-comment-form"),
                    u = e.query(i, 'input[name="side"]', HTMLInputElement);
                if (!i || !u) return t.remove();
                if (i && "left" === u.value) return pd(a, s), t.remove()
            }
            var c = t.previousElementSibling;
            o(c, "app/assets/modules/github/pulls/suggested-changes.js:194");
            var l = c.querySelector(".js-blob-code-deletion"),
                d = c.querySelectorAll(".js-blob-code-addition");
            if (l && 0 !== d.length) {
                if (l.textContent === Array.from(d).map(function(e) {
                        return e.textContent
                    }).join("\n")) return pd(n, s), t.remove();
                t.remove()
            }
        }
    }), t.observe(".js-comment-body .js-apply-changes", {
        add: function(t) {
            var r = t.closest(".js-suggested-changes-container");
            if (!r) return t.remove();
            var n = r.querySelector(".js-suggested-changes-template");
            if (!(n instanceof HTMLTemplateElement)) return t.remove();
            var a = n.content.cloneNode(!0),
                s = e.query(a, ".js-disabled-apply-suggestion-button"),
                o = e.query(a, ".js-batched-suggested-changes-add");
            if (document.querySelectorAll(".js-suggested-changes-files-tab").length) {
                var i = e.query(document, td).textContent;
                o.removeAttribute("disabled"), o.setAttribute("aria-label", i)
            }
            var u = e.query(document, ".js-pull-header-details"),
                c = u && "true" === u.getAttribute("data-pull-is-open"),
                l = t.closest(".js-resolvable-timeline-thread-container"),
                d = "true" === n.getAttribute("data-comment-pending");
            if (l && "true" === l.getAttribute("data-resolved")) {
                var m = e.query(document, ud).textContent,
                    f = a.querySelector("details");
                return f && f.remove(), fd(s, m), o.setAttribute("disabled", "disabled"), o.setAttribute("aria-label", m), t.replaceWith(a)
            }
            if (!c) {
                var p = e.query(document, nd).textContent;
                return fd(s, p), o && (o.setAttribute("disabled", "disabled"), o.setAttribute("aria-label", p)), t.replaceWith(a)
            }
            if (d) {
                var v = e.query(document, cd).textContent;
                return e.query(a, "details").remove(), fd(s, v), o && (o.setAttribute("disabled", "disabled"), o.setAttribute("aria-label", v)), t.replaceWith(a)
            }
            var g = "left" === e.closest(t, ".js-suggested-changes-contents").getAttribute("data-thread-side"),
                h = document.querySelector(".js-suggested-changes-subset-files"),
                y = "true" === n.getAttribute("data-outdated-comment");
            if (g || h || y) {
                var b = void 0;
                return h ? b = e.query(document, ad).textContent : g ? b = e.query(document, sd).textContent : y && (b = e.query(document, id).textContent), e.query(a, "details").remove(), fd(s, b), o && (o.setAttribute("disabled", "disabled"), o.setAttribute("aria-label", b)), t.replaceWith(a)
            }
            var j = e.query(a, ".js-single-suggested-change-form"),
                L = t.closest(".js-suggested-changes-blob");
            if (L) {
                var w = L.querySelector(".js-blob-code-deletion"),
                    x = L.querySelectorAll(".js-blob-code-addition");
                if (!w) return;
                var k = w.textContent,
                    E = Array.from(x).map(function(e) {
                        return e.textContent
                    });
                if (E.length > 0 && k === E.join("\n")) {
                    var T = e.query(document, rd).textContent;
                    e.query(a, "details").remove(), fd(s, T), o && (o.setAttribute("disabled", "disabled"), o.setAttribute("aria-label", T))
                } else {
                    var q = !0,
                        S = !1,
                        A = void 0;
                    try {
                        for (var M, H = E[Symbol.iterator](); !(q = (M = H.next()).done); q = !0) {
                            var I = M.value,
                                R = document.createElement("input");
                            R.setAttribute("type", "hidden"), R.setAttribute("name", "value[]"), R.value = I, j.appendChild(R)
                        }
                    } catch (e) {
                        S = !0, A = e
                    } finally {
                        try {
                            !q && H.return && H.return()
                        } finally {
                            if (S) throw A
                        }
                    }
                }
            }
            t.replaceWith(a)
        }
    }), t.observe(".js-pull-header-details", {
        add: function(t) {
            var r = "true" === t.getAttribute("data-pull-is-open"),
                n = document.querySelector(".js-suggested-changes-template");
            if (!r && n instanceof HTMLTemplateElement) {
                var a = n.content,
                    s = e.query(document, nd).textContent;
                dd(a, s), md(s)
            }
        }
    }), t.observe(".js-suggested-changes-subset-files", {
        add: function() {
            var t = document.querySelector(".js-suggested-changes-template");
            if (t instanceof HTMLTemplateElement) {
                var r = t.content,
                    n = e.query(document, ad).textContent;
                dd(r, n), md(n)
            }
        }
    }), r.on("click", ".js-apply-suggestion-button", function() {
        var t = X(regeneratorRuntime.mark(function t(r) {
            var n, a;
            return regeneratorRuntime.wrap(function(t) {
                for (;;) switch (t.prev = t.next) {
                    case 0:
                        (n = r.currentTarget.parentElement) && (a = e.query(n, ".js-suggestion-commit-title"), setTimeout(function() {
                            return a.focus()
                        }, 1));
                    case 2:
                    case "end":
                        return t.stop()
                }
            }, t, this)
        }));
        return function(e) {
            return t.apply(this, arguments)
        }
    }()), r.on("click", ".js-dismiss-suggested-change-onboarding-notice", function() {
        var t = X(regeneratorRuntime.mark(function t(r) {
            var n, a, o, i, u, c, l, d;
            return regeneratorRuntime.wrap(function(t) {
                for (;;) switch (t.prev = t.next) {
                    case 0:
                        return n = e.getAttribute(r.currentTarget, "data-url"), (a = new FormData).append("notice", "suggested_changes_onboarding_prompt"), t.next = 5, s.fetchText(s.csrfRequest(n, {
                            method: "post",
                            body: a
                        }));
                    case 5:
                        for (o = document.querySelectorAll(".js-suggested-change-onboarding-notice"), i = !0, u = !1, c = void 0, t.prev = 9, l = o[Symbol.iterator](); !(i = (d = l.next()).done); i = !0) d.value.remove();
                        t.next = 17;
                        break;
                    case 13:
                        t.prev = 13, t.t0 = t.catch(9), u = !0, c = t.t0;
                    case 17:
                        t.prev = 17, t.prev = 18, !i && l.return && l.return();
                    case 20:
                        if (t.prev = 20, !u) {
                            t.next = 23;
                            break
                        }
                        throw c;
                    case 23:
                        return t.finish(20);
                    case 24:
                        return t.finish(17);
                    case 25:
                    case "end":
                        return t.stop()
                }
            }, t, this, [
                [9, 13, 17, 25],
                [18, , 20, 24]
            ])
        }));
        return function(e) {
            return t.apply(this, arguments)
        }
    }()), n.onKey("keydown", ".js-comment-field", function(e) {
        if ("Enter" === e.key) {
            var t = e.target;
            o(t instanceof HTMLTextAreaElement, "app/assets/modules/github/pulls/suggested-changes.js:406"),
                function(e) {
                    var t = e.selectionStart;
                    if (!Zl(e.value, t)) return !1;
                    var r = e.value,
                        n = Xl(r, t);
                    if (null === n) return !1;
                    var a = "\n" + Ql(n),
                        s = r.substr(0, t) + a + r.substr(t);
                    l.changeValue(e, s);
                    var o = t + a.length;
                    return e.setSelectionRange(o, o), !0
                }(t) && e.preventDefault()
        }
    }), n.onKey("keypress", ".js-suggestion-commit-message", function(e) {
        var t = e.currentTarget;
        o(t instanceof HTMLTextAreaElement, "app/assets/modules/github/pulls/suggested-changes.js:415"), "Enter" === e.key && t.setAttribute("rows", "3")
    }), r.on("click", ".js-batched-suggested-changes-add", function(t) {
        var r = e.closest(t.target, ".js-suggested-change-form-container");
        if ("true" !== r.getAttribute("data-comment-pending") && "true" !== r.getAttribute("data-outdated-comment") && "true" !== t.target.getAttribute("data-batched-suggestion-disabled-by-sibling")) {
            r.setAttribute("data-pending-batched-suggestion", "true");
            var n = e.closest(t.target, ".js-inline-comments-container"),
                a = !0,
                s = !1,
                o = void 0;
            try {
                for (var i, u = n.querySelectorAll(".js-batched-suggested-changes-add")[Symbol.iterator](); !(a = (i = u.next()).done); a = !0) {
                    i.value.setAttribute("data-batched-suggestion-disabled-by-sibling", "true")
                }
            } catch (e) {
                s = !0, o = e
            } finally {
                try {
                    !a && u.return && u.return()
                } finally {
                    if (s) throw o
                }
            }
            t.target.removeAttribute("data-batched-suggestion-disabled-by-sibling"), vd()
        }
    }), r.on("click", ".js-batched-suggested-changes-remove", function(t) {
        e.closest(t.currentTarget, ".js-suggested-change-form-container").removeAttribute("data-pending-batched-suggestion");
        var r = e.closest(t.currentTarget, ".js-inline-comments-container"),
            n = !0,
            a = !1,
            s = void 0;
        try {
            for (var o, i = r.querySelectorAll(".js-batched-suggested-changes-add")[Symbol.iterator](); !(n = (o = i.next()).done); n = !0) {
                o.value.setAttribute("data-batched-suggestion-reenable-sibling", "true")
            }
        } catch (e) {
            a = !0, s = e
        } finally {
            try {
                !n && i.return && i.return()
            } finally {
                if (a) throw s
            }
        }
        vd()
    }), r.on("click", ".js-focus-commit-suggestions-form-button", function(e) {
        e.preventDefault(), window.location = "#clear-commit-suggestions", window.location = "#commit-suggestions"
    }), r.on("click", ".js-dismiss-batched-suggested-changes-onboarding-notice", function() {
        var t = X(regeneratorRuntime.mark(function t(r) {
            var n, a, o, i, u, c, l;
            return regeneratorRuntime.wrap(function(t) {
                for (;;) switch (t.prev = t.next) {
                    case 0:
                        return n = e.getAttribute(r.currentTarget, "data-url"), (a = new FormData).append("notice", "batched_suggested_changes_onboarding_prompt"), t.next = 5, s.fetchText(s.csrfRequest(n, {
                            method: "post",
                            body: a
                        }));
                    case 5:
                        for (o = !0, i = !1, u = void 0, t.prev = 8, c = document.querySelectorAll(".js-batched-suggested-change-onboarding-notice")[Symbol.iterator](); !(o = (l = c.next()).done); o = !0) l.value.remove();
                        t.next = 16;
                        break;
                    case 12:
                        t.prev = 12, t.t0 = t.catch(8), i = !0, u = t.t0;
                    case 16:
                        t.prev = 16, t.prev = 17, !o && c.return && c.return();
                    case 19:
                        if (t.prev = 19, !i) {
                            t.next = 22;
                            break
                        }
                        throw u;
                    case 22:
                        return t.finish(19);
                    case 23:
                        return t.finish(16);
                    case 24:
                    case "end":
                        return t.stop()
                }
            }, t, this, [
                [8, 12, 16, 24],
                [17, , 19, 23]
            ])
        }));
        return function(e) {
            return t.apply(this, arguments)
        }
    }()), r.on("click", ".js-single-suggested-change-form .js-suggested-changes-submit", function(t) {
        try {
            var r = t.currentTarget,
                n = e.closest(r, ".js-single-suggested-change-form", HTMLFormElement),
                a = e.querySelectorAll(n, 'input[name="value[]"]', HTMLInputElement).map(function(e) {
                    return e.value
                });
            gd(n, [{
                commentId: e.query(n, "input[name=comment_id]", HTMLInputElement).value,
                path: e.query(n, "input[name=path]", HTMLInputElement).value,
                suggestion: a
            }])
        } catch (e) {
            O.reportError(e)
        }
    }), c.remoteForm(".js-single-suggested-change-form", function() {
        var t = X(regeneratorRuntime.mark(function t(r, n) {
            var a, s, o, i, u, c, l, d, m;
            return regeneratorRuntime.wrap(function(t) {
                for (;;) switch (t.prev = t.next) {
                    case 0:
                        return a = e.closest(r, ".js-suggested-change-form-container"), s = e.closest(r, "details"), o = e.query(a, ".js-suggestion-applied"), i = e.query(a, ".js-batched-suggested-changes-add"), u = e.closest(r, ".js-suggested-changes-contents"), c = e.query(u, ".js-error-message-placeholder"), t.prev = 6, t.next = 9, n.json();
                    case 9:
                        o.classList.remove("d-none"), i.classList.add("d-none"), s.remove(), window.location.reload(), t.next = 26;
                        break;
                    case 15:
                        t.prev = 15, t.t0 = t.catch(6), l = t.t0.response.json && t.t0.response.json.error, d = e.query(c, ".js-error-message"), c.hidden = !1, d.textContent = l, a.prepend(c), m = e.closest(r, ".js-suggested-change-form-container"), e.query(m, ".js-batched-suggested-changes-add").classList.add("d-none"), s.remove();
                    case 26:
                    case "end":
                        return t.stop()
                }
            }, t, this, [
                [6, 15]
            ])
        }));
        return function(e, r) {
            return t.apply(this, arguments)
        }
    }()), r.on("click", ".js-suggestion-batch-submit", function(t) {
        var r = e.closest(t.currentTarget, ".js-batched-suggested-changes-form", HTMLFormElement),
            n = [];
        try {
            var a = !0,
                s = !1,
                o = void 0;
            try {
                for (var i, u = document.querySelectorAll("[data-pending-batched-suggestion]")[Symbol.iterator](); !(a = (i = u.next()).done); a = !0) {
                    var c = i.value,
                        l = e.query(c, ".js-single-suggested-change-form", HTMLFormElement),
                        d = e.querySelectorAll(l, 'input[name="value[]"]', HTMLInputElement).map(function(e) {
                            return e.value
                        });
                    n.push({
                        commentId: e.query(l, "input[name=comment_id]", HTMLInputElement).value,
                        path: e.query(l, "input[name=path]", HTMLInputElement).value,
                        suggestion: d
                    })
                }
            } catch (e) {
                s = !0, o = e
            } finally {
                try {
                    !a && u.return && u.return()
                } finally {
                    if (s) throw o
                }
            }
            gd(r, n)
        } catch (e) {
            O.reportError(e)
        }
    }), c.remoteForm(".js-batched-suggested-changes-form", function() {
        var t = X(regeneratorRuntime.mark(function t(r, n) {
            var a, s, o;
            return regeneratorRuntime.wrap(function(t) {
                for (;;) switch (t.prev = t.next) {
                    case 0:
                        return t.prev = 0, t.next = 3, n.json();
                    case 3:
                        e.closest(r, ".js-batched-suggested-changes-container", HTMLElement).hidden = !0, window.location.reload(), t.next = 16;
                        break;
                    case 8:
                        t.prev = 8, t.t0 = t.catch(0), a = t.t0.response.json && t.t0.response.json.error, s = e.closest(r, ".js-batched-suggested-changes-container"), o = e.query(s, ".js-error-message-container"), e.query(o, ".js-error-message").textContent = a, o.hidden = !1;
                    case 16:
                    case "end":
                        return t.stop()
                }
            }, t, this, [
                [0, 8]
            ])
        }));
        return function(e, r) {
            return t.apply(this, arguments)
        }
    }()), t.observe(".js-files-tab-stale", {
        add: function() {
            var e = document.querySelector(".js-batched-suggested-changes-container");
            e && setTimeout(function() {
                e.hidden = !0
            })
        }
    }), c.remoteForm(".js-pick-reaction", function() {
        var t = X(regeneratorRuntime.mark(function t(r, n) {
            var a, s, o, u, c, l, d;
            return regeneratorRuntime.wrap(function(t) {
                for (;;) switch (t.prev = t.next) {
                    case 0:
                        return t.next = 2, n.json();
                    case 2:
                        a = t.sent, (s = r.closest(".js-menu-container")) instanceof HTMLElement && N.deactivate(s), o = e.closest(r, ".js-comment"), u = e.query(o, ".js-reactions-container"), c = e.query(o, ".js-comment-header-reaction-button"), l = i.parseHTML(document, a.json.reactions_container.trim()), d = i.parseHTML(document, a.json.comment_header_reaction_button.trim()), u.replaceWith(l), c.replaceWith(d), o.classList.remove("is-reacting");
                    case 13:
                    case "end":
                        return t.stop()
                }
            }, t, this)
        }));
        return function(e, r) {
            return t.apply(this, arguments)
        }
    }()), r.on("toggle", ".js-reaction-popover-container", function(t) {
        var r = t.currentTarget.hasAttribute("open"),
            n = !0,
            a = !1,
            s = void 0;
        try {
            for (var o, i = t.target.querySelectorAll(".js-reaction-option-item")[Symbol.iterator](); !(n = (o = i.next()).done); n = !0) {
                var u = o.value;
                r ? (u.addEventListener("mouseenter", hd), u.addEventListener("mouseleave", yd)) : (u.removeEventListener("mouseenter", hd), u.removeEventListener("mouseleave", yd))
            }
        } catch (e) {
            a = !0, s = e
        } finally {
            try {
                !n && i.return && i.return()
            } finally {
                if (a) throw s
            }
        }
        e.closest(t.target, ".js-comment").classList.toggle("is-reacting", r)
    }, {
        capture: !0
    });
    var bd = function() {
            var t = X(regeneratorRuntime.mark(function t(r) {
                var n, a, s, o;
                return regeneratorRuntime.wrap(function(t) {
                    for (;;) switch (t.prev = t.next) {
                        case 0:
                            if (r.value) {
                                t.next = 2;
                                break
                            }
                            return t.abrupt("return");
                        case 2:
                            if (r.value !== xd.get(r)) {
                                t.next = 4;
                                break
                            }
                            return t.abrupt("return");
                        case 4:
                            return wd("loading"), xd.set(r, r.value), n = e.getAttribute(r, "data-url"), a = new URL(n, window.location.origin), (s = new URLSearchParams(a.search.slice(1))).append("tag_name", r.value), a.search = s.toString(), t.prev = 11, t.next = 14, k.fetchJSON(a);
                        case 14:
                            "duplicate" === (o = t.sent).status && parseInt(r.getAttribute("data-existing-id")) === parseInt(o.release_id) ? wd("valid") : (e.query(document, ".js-release-tag .js-edit-release-link").setAttribute("href", o.url), wd(o.status)), t.next = 21;
                            break;
                        case 18:
                            t.prev = 18, t.t0 = t.catch(11), wd("invalid");
                        case 21:
                        case "end":
                            return t.stop()
                    }
                }, t, this, [
                    [11, 18]
                ])
            }));
            return function(e) {
                return t.apply(this, arguments)
            }
        }(),
        jd = function() {
            var t = X(regeneratorRuntime.mark(function t(n) {
                var a, s;
                return regeneratorRuntime.wrap(function(t) {
                    for (;;) switch (t.prev = t.next) {
                        case 0:
                            return a = n.form, o(a instanceof HTMLFormElement, "app/assets/modules/github/releases.js:14"), e.query(a, "#release_draft", HTMLInputElement).value = "1", Ld(n, "saving"), t.prev = 5, t.next = 8, k.fetchJSON(a.action, {
                                method: a.method,
                                body: new FormData(a)
                            });
                        case 8:
                            return s = t.sent, Ld(n, "saved"), setTimeout(Ld, 5e3, n, "default"), r.fire(a, "release:saved", {
                                release: s
                            }), t.abrupt("return", s);
                        case 15:
                            throw t.prev = 15, t.t0 = t.catch(5), Ld(n, "failed"), t.t0;
                        case 19:
                        case "end":
                            return t.stop()
                    }
                }, t, this, [
                    [5, 15]
                ])
            }));
            return function(e) {
                return t.apply(this, arguments)
            }
        }();
 
    function Ld(e, t) {
        var r = !0,
            n = !1,
            a = void 0;
        try {
            for (var s, o = e.querySelectorAll(".js-save-draft-button-state")[Symbol.iterator](); !(r = (s = o.next()).done); r = !0) {
                var i = s.value;
                i.hidden = i.getAttribute("data-state") !== t
            }
        } catch (e) {
            n = !0, a = e
        } finally {
            try {
                !r && o.return && o.return()
            } finally {
                if (n) throw a
            }
        }
        e.disabled = "saving" === t
    }
 
    function wd(e) {
        var t = document.querySelector(".js-release-target-wrapper");
        if (null != t) {
            switch (e) {
                case "valid":
                    t.classList.add("d-none");
                    break;
                case "loading":
                    break;
                default:
                    t.classList.remove("d-none")
            }
            var r = !0,
                n = !1,
                a = void 0;
            try {
                for (var s, o = document.querySelectorAll(".js-tag-status-message")[Symbol.iterator](); !(r = (s = o.next()).done); r = !0) {
                    var i = s.value;
                    i.hidden = i.getAttribute("data-state") !== e
                }
            } catch (e) {
                n = !0, a = e
            } finally {
                try {
                    !r && o.return && o.return()
                } finally {
                    if (n) throw a
                }
            }
        }
    }
    r.on("change", ".js-releases-marketplace-publish-field", function(t) {
        var r = t.currentTarget;
        o(r instanceof HTMLInputElement, "app/assets/modules/github/releases.js:38");
        var n = e.closest(t.currentTarget, ".js-releases-marketplace-publish-container"),
            a = e.query(n, ".js-releases-marketplace-publish-preview");
        r.checked ? a.classList.remove("d-none") : a.classList.add("d-none")
    }), r.on("click", ".js-save-draft", function(e) {
        var t = e.currentTarget;
        o(t instanceof HTMLButtonElement, "app/assets/modules/github/releases.js:52"), jd(t), e.preventDefault()
    }), r.on("click", ".js-timeline-tags-expander", function(t) {
        var r = t.currentTarget;
        e.closest(r, ".js-timeline-tags").classList.remove("is-collapsed")
    }), r.on("release:saved", ".js-release-form", function(t) {
        o(t instanceof CustomEvent, "app/assets/modules/github/releases.js:73");
        var r = t.detail.release,
            n = t.currentTarget,
            a = n.getAttribute("data-repo-url"),
            s = r.update_url || kd("tag", a, r.tag_name);
        (n.setAttribute("action", s), r.update_authenticity_token) && (n.querySelector("input[name=authenticity_token]").value = r.update_authenticity_token);
        var i = r.edit_url || kd("edit", a, r.tag_name);
        m.replaceState(L.getState(), document.title, i);
        var u = document.querySelector("#delete_release_confirm form");
        if (u) {
            var c = r.delete_url || kd("tag", a, r.tag_name);
            if (u.setAttribute("action", c), r.delete_authenticity_token) e.query(u, "input[name=authenticity_token]", HTMLInputElement).value = r.delete_authenticity_token
        }
        var l = n.querySelector("#release_id");
        if (!l.value) {
            l.value = r.id;
            var d = document.createElement("input");
            d.type = "hidden", d.name = "_method", d.value = "put", n.appendChild(d)
        }
    }), r.on("click", ".js-publish-release", function() {
        e.query(document, "#release_draft", HTMLInputElement).value = "0"
    });
    var xd = new WeakMap;
 
    function kd(e, t, r) {
        return t + "/releases/" + e + "/" + r
    }
 
    function Ed(t) {
        var r = e.closest(t, "form", HTMLFormElement).querySelector(".js-previewable-comment-form");
        if (r) {
            var n = r.getAttribute("data-base-preview-url");
            n || (n = String(r.getAttribute("data-preview-url")), r.setAttribute("data-base-preview-url", n));
            var a = e.querySelectorAll(t, 'input[name="release[tag_name]"], input[name="release[target_commitish]"]:checked', HTMLInputElement),
                s = new URL(n, window.location.origin),
                o = new URLSearchParams(s.search.slice(1)),
                i = !0,
                u = !1,
                c = void 0;
            try {
                for (var l, d = a[Symbol.iterator](); !(i = (l = d.next()).done); i = !0) {
                    var m = l.value;
                    m.value && o.append(m.name, m.value)
                }
            } catch (e) {
                u = !0, c = e
            } finally {
                try {
                    !i && d.return && d.return()
                } finally {
                    if (u) throw c
                }
            }
            s.search = o.toString(), r.setAttribute("data-preview-url", s.toString())
        }
    }
    t.observe("input.js-release-tag-field", {
        constructor: HTMLInputElement,
        initialize: function(e) {
            bd(e), e.addEventListener("blur", function() {
                bd(e)
            })
        }
    }), r.on("change", ".js-release-tag", function(e) {
        Ed(e.currentTarget)
    }), t.observe(".js-release-form .js-previewable-comment-form", function(t) {
        Ed(e.query(e.closest(t, "form"), ".js-release-tag"))
    });
    var Td = {
            Message: "render:hook:message",
            AfterReady: "render:hook:afterready"
        },
        qd = "actions:lock:acquire",
        Sd = "actions:lock:release",
        Ad = function() {
            function t(e) {
                Q(this, t), this._initialized = !1, this._visual = e
            }
            return Y(t, [{
                key: "init",
                value: function() {
                    this._initialized || (this._initialized = !0, this._handToVisual())
                }
            }, {
                key: "tabChange",
                value: function(t) {
                    switch (t) {
                        case "render-editor":
                            return void this._handToVisual();
                        case "show-code":
                            return this._visual.send(qd), r = e.query(document, ".js-render-editor-lock"), void setTimeout(function() {
                                r.style.opacity = "1"
                            }, 50)
                    }
                    var r
                }
            }, {
                key: "_handToVisual",
                value: function() {
                    Md(!0), this._visual.send(Sd)
                }
            }, {
                key: "handleMessage",
                value: function(e) {
                    switch (e) {
                        case Sd:
                            Md(!1)
                    }
                }
            }], [{
                key: "init",
                value: function() {
                    if (t.initialized) throw Error("Invariant: pjax not supported");
                    t.initialized = !0;
                    var n = new t({
                        send: function(t) {
                            return r = {
                                type: t
                            }, n = Od(e.query(document, ".js-render-target")), o(n, "app/assets/modules/github/render-editor.js:56"), void Bd(n, r);
                            var r, n
                        }
                    });
                    r.on(Td.Message, ".js-render-editor-actions", function(e) {
                        o(e instanceof CustomEvent, "app/assets/modules/github/actions-editor.js:48"), n.handleMessage(e.detail.type)
                    }), r.on(Td.AfterReady, ".js-render-editor-actions", function() {
                        n.init()
                    }), r.on("tab:change", ".js-file-editor-nav", function(e) {
                        o(e instanceof CustomEvent, "app/assets/modules/github/actions-editor.js:57"), n.tabChange(e.detail.name)
                    })
                }
            }]), t
        }();
 
    function Md(t) {
        var r = e.query(document, ".js-render-editor-lock");
        r.hidden = !t, t && (r.style.opacity = "0");
        var n = e.query(document, ".js-code-editor"),
            a = W.getCodeEditor(n);
        o(a, "app/assets/modules/github/actions-editor.js:111"), a.editor.setOption("readOnly", !!t && "nocursor")
    }
    Ad.initialized = !1, t.observe(".js-render-editor-actions", Ad.init);
    var Hd = "history:replace",
        Id = /^\/([^/]+)\/([^/]+)\/actions(?:\/workflow-runs\/([^/?]+))?/;
    r.on(Td.Message, ".js-actions-page", function(e) {
        switch (o(e instanceof CustomEvent, "app/assets/modules/github/actions-page.js:37"), e.detail.body) {
            case Hd:
                return void
                function(e) {
                    var t = new URL(window.location.href);
                    switch (e.page) {
                        case "actions":
                            ! function(e, t) {
                                m.replaceState({}, "", function(e, t) {
                                    var r = function(e) {
                                            var t = Id.exec(e);
                                            o(null != t, "expected to be on actions page -- app/assets/modules/github/actions-page.js:72");
                                            var r = re(t, 4),
                                                n = r[1],
                                                a = r[2],
                                                s = r[3];
                                            return {
                                                owner: n,
                                                name: a,
                                                runID: s
                                            }
                                        }(e),
                                        n = r.owner,
                                        a = r.name;
                                    return function(e) {
                                        var t = e.name,
                                            r = e.owner,
                                            n = e.runID;
                                        return "/" + r + "/" + t + "/actions" + (n ? "/workflow-runs/" + n : "")
                                    }({
                                        owner: n,
                                        name: a,
                                        runID: t.urlParams.runID
                                    })
                                }(e.pathname, t))
                            }(t, e);
                            break;
                        default:
                            throw Error("unknown page history update '" + e.page + "'")
                    }
                }(e.detail.payload)
        }
    });
    var Rd = ["is-render-pending", "is-render-ready", "is-render-loading", "is-render-loaded"],
        _d = new WeakMap,
        Cd = function(e) {
            var t = !1;
            return function() {
                t || (t = !0, e.apply(void 0, arguments))
            }
        }(function() {
            Re({
                incrementKey: "LAUNCH_EDITOR_RENDER_SUCCEED"
            })
        });
 
    function Fd(e) {
        if (null != e) {
            var t = _d.get(e);
            null != t && (t.load = t.hello = null, t.helloTimer && (clearTimeout(t.helloTimer), t.helloTimer = null), t.loadTimer && (clearTimeout(t.loadTimer), t.loadTimer = null))
        }
    }
 
    function Pd(e, t) {
        var r;
        if (null != e) {
            if (Ud(e)) {
                var n = void 0;
                switch (t) {
                    case "timeout:hello":
                        n = "LAUNCH_EDITOR_RENDER_TIMEOUT_HELLO";
                        break;
                    case "timeout:load":
                        n = "LAUNCH_EDITOR_RENDER_TIMEOUT_LOAD";
                        break;
                    default:
                        n = "LAUNCH_EDITOR_RENDER_FAIL"
                }
                Re({
                    incrementKey: n
                })
            }
            return (r = e.classList).remove.apply(r, Rd), e.classList.add("is-render-failed"), Fd(e)
        }
    }
 
    function Nd() {
        return !0
    }
 
    function Dd(e, t) {
        var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Nd;
        return function() {
            if (T(e) && !e.classList.contains("is-render-ready") && !e.classList.contains("is-render-failed") && !e.classList.contains("is-render-failed-fatally") && (!r || r())) return Pd(e, t)
        }
    }
 
    function Od(e) {
        var t = e.querySelector("iframe");
        return t instanceof HTMLIFrameElement ? t.contentWindow : null
    }
 
    function Bd(e, t) {
        e && e.postMessage && e.postMessage(JSON.stringify(t), "*")
    }
 
    function Ud(e) {
        return "launch_flow_file" === e.getAttribute("data-type")
    }
    t.observe(".js-render-target", {
        constructor: HTMLElement,
        initialize: function(e) {
            var t = _d.get(e);
            null != t && t.load || (Fd(e), function(e) {
                if (!_d.get(e)) {
                    var t = {
                        load: null,
                        hello: null,
                        helloTimer: null,
                        loadTimer: null
                    };
                    t.load = Date.now(), t.helloTimer = setTimeout(Dd(e, "timeout:hello", function() {
                        return !t.hello
                    }), 1e4), t.loadTimer = setTimeout(Dd(e, "timeout:load"), 45e3), _d.set(e, t)
                }
            }(e), e.classList.add("is-render-automatic"), e.classList.add("is-render-requested"))
        }
    }), window.addEventListener("message", function(e) {
        var t = e.data;
        if (t) {
            var n = function(e) {
                if ("string" == typeof e) try {
                    return JSON.parse(e)
                } catch (e) {
                    return
                }
            }(t) || t;
            if ("string" == typeof n.type || "render" === n.type) {
                var a = n.type;
                if ("string" == typeof n.identity) {
                    var s = n.identity;
                    if ("string" == typeof n.body) {
                        var o = n.body,
                            i = function(e) {
                                return Array.from(document.querySelectorAll(".js-render-target")).filter(function(t) {
                                    return !e || t.getAttribute("data-identity") === e
                                })[0]
                            }(s);
                        if (i)
                            if (e.origin === i.getAttribute("data-host")) ! function(e, t, n, a, s) {
                                var o, i, u;
                                switch (a) {
                                    case "hello":
                                        var c = _d.get(e) || {
                                            untimed: !0
                                        };
                                        c.hello = Date.now();
                                        var l = Od(e);
                                        if (Bd(l, {
                                                type: "render:cmd",
                                                body: {
                                                    cmd: "ack",
                                                    ack: !0
                                                }
                                            }), Bd(l, {
                                                type: "render:cmd",
                                                body: {
                                                    cmd: "branding",
                                                    branding: !1
                                                }
                                            }), e.classList.contains("is-local") && l && "function" == typeof l.postMessage) {
                                            var d = l,
                                                m = e.closest(".js-code-editor"),
                                                f = m instanceof HTMLElement ? W.getCodeEditor(m) : null,
                                                p = e.getAttribute("data-data");
                                            if (f) {
                                                var v = null,
                                                    g = function(e, t) {
                                                        if (! function(e) {
                                                                return e && "setValue" === e.origin
                                                            }(t)) {
                                                            var r = f.code();
                                                            r !== v && (v = r, Bd(d, {
                                                                type: "render:data",
                                                                body: r
                                                            }))
                                                        }
                                                    };
                                                f.editor.on("change", g), g()
                                            } else p && Bd(d, {
                                                type: "render:data",
                                                body: p
                                            })
                                        }
                                        break;
                                    case "error":
                                        return Pd(e, a);
                                    case "error:fatal":
                                        return Pd(e, a), e.classList.add("is-render-failed-fatal");
                                    case "error:invalid":
                                        return Pd(e, a), e.classList.add("is-render-failed-invalid");
                                    case "loading":
                                        return (o = e.classList).remove.apply(o, Rd), e.classList.add("is-render-loading");
                                    case "loaded":
                                        return (i = e.classList).remove.apply(i, Rd), e.classList.add("is-render-loaded");
                                    case "ready":
                                        (u = e.classList).remove.apply(u, Rd), e.classList.add("is-render-ready"), s && "number" == typeof s.height && (e.style.height = s.height + "px"), Ud(e) && Cd(), r.fire(e, Td.AfterReady, {
                                            container: e,
                                            payload: s
                                        });
                                        break;
                                    case "resize":
                                        s && "number" == typeof s.height && (e.style.height = s.height + "px");
                                        break;
                                    case "data":
                                        r.fire(e, "edit:visual", s);
                                        break;
                                    default:
                                        r.fire(e, Td.Message, {
                                            type: t,
                                            body: a,
                                            payload: s
                                        })
                                }
                            }(i, a, 0, o, null != n.payload ? n.payload : void 0)
                    }
                }
            }
        }
    }), r.on("change", ".js-repository-import-owner-container input", function(t) {
        var r = t.currentTarget,
            n = r.getAttribute("data-upsell") || "",
            a = r.getAttribute("data-billing-url") || "";
        e.query(document, ".js-repository-import-billing-url", HTMLAnchorElement).href = a, e.query(document, ".js-repository-import-upsell").classList.toggle("d-none", "false" === n), e.query(document, ".js-repository-import-no-upsell").classList.toggle("d-none", "true" === n)
    }), r.on("socket:message", ".repository-import", function(e) {
        o(e instanceof CustomEvent, "app/assets/modules/github/repo-import.js:19");
        var t = e.detail.data;
        t.redirect_to && (document.location.href = t.redirect_to, e.stopImmediatePropagation())
    }), r.on("change", "input.js-repository-import-lfs-opt", function(t) {
        var r = t.currentTarget;
        o(r instanceof HTMLInputElement, "app/assets/modules/github/repo-import.js:28");
        var n = parseInt(r.getAttribute("data-percent-used")),
            a = e.closest(r, ".js-repository-import-lfs-container"),
            s = r.getAttribute("data-used") || "";
        e.query(a, ".js-repository-import-lfs-warn").classList.toggle("d-none", !(n > 100)), e.query(a, ".js-usage-bar").classList.toggle("exceeded", n >= 100), e.query(a, ".js-usage-bar").setAttribute("aria-label", n + "%"), e.query(a, ".js-repository-import-lfs-progress").style.width = n + "%", e.query(a, "span.js-usage-text").textContent = s
    }), c.remoteForm(".js-repository-import-author-form", function() {
        var t = X(regeneratorRuntime.mark(function t(r, n) {
            var a;
            return regeneratorRuntime.wrap(function(t) {
                for (;;) switch (t.prev = t.next) {
                    case 0:
                        return t.next = 2, n.html();
                    case 2:
                        a = t.sent, e.closest(r, ".js-repository-import-author").replaceWith(a.html);
                    case 5:
                    case "end":
                        return t.stop()
                }
            }, t, this)
        }));
        return function(e, r) {
            return t.apply(this, arguments)
        }
    }()), r.on("click", ".js-repository-import-projects-cancel-button", function() {
        var t = e.query(document, ".js-repository-import-projects-cancel-form", HTMLFormElement);
        l.submit(t)
    });
    var Vd = !1;
 
    function zd() {
        return "false" === e.query(document, ".js-privacy-toggle:checked", HTMLInputElement).value
    }
 
    function Wd() {
        var t = e.query(document, ".js-repo-name");
        r.fire(t, "change");
        var n = e.query(document, ".js-owner-container"),
            a = e.query(n, '[aria-checked="true"]'),
            s = e.query(document, ".js-privacy-toggle[value=false]", HTMLInputElement),
            o = e.query(document, ".js-privacy-toggle[value=true]", HTMLInputElement);
        Vd || ("private" === a.getAttribute("data-default") ? (s.checked = !0, r.fire(s, "change")) : (o.checked = !0, r.fire(o, "change"))), "false" === a.getAttribute("data-org-allow-public-repos") ? (o.disabled = !0, !0 === o.checked && (s.checked = !0, r.fire(s, "change"))) : o.disabled = !1,
            function(e) {
                var t = !0,
                    r = !1,
                    n = void 0;
                try {
                    for (var a, s = document.querySelectorAll(".js-with-permission-fields")[Symbol.iterator](); !(t = (a = s.next()).done); t = !0) {
                        var o = a.value;
                        o.hidden = !e
                    }
                } catch (e) {
                    r = !0, n = e
                } finally {
                    try {
                        !t && s.return && s.return()
                    } finally {
                        if (r) throw n
                    }
                }
                var i = !0,
                    u = !1,
                    c = void 0;
                try {
                    for (var l, d = document.querySelectorAll(".js-without-permission-fields")[Symbol.iterator](); !(i = (l = d.next()).done); i = !0) {
                        var m = l.value;
                        m.hidden = e
                    }
                } catch (e) {
                    u = !0, c = e
                } finally {
                    try {
                        !i && d.return && d.return()
                    } finally {
                        if (u) throw c
                    }
                }
                var f = document.querySelector(".errored"),
                    p = document.querySelector("dl.warn");
                f && (f.hidden = !e);
                p && (p.hidden = !e)
            }("yes" === a.getAttribute("data-permission")),
            function() {
                var t = document.querySelector("#js-upgrade-container");
                if (!t) return;
                var r = e.query(document, "#js-payment-methods-form");
                t.firstElementChild && r.appendChild(t.firstElementChild);
                var n = e.query(document, "input[name=owner]:checked", HTMLInputElement).value,
                    a = r.querySelector('.js-upgrade[data-login="' + n + '"]');
                a && t.appendChild(a)
            }(), $d();
        var i = document.querySelector(".js-quick-install-container");
        if (i) {
            var u = e.query(i, ".js-quick-install-divider");
            u.hidden = !0;
            var c = e.query(document, "input[name=owner]:checked", HTMLInputElement).parentElement;
            if (c) {
                var l = c.querySelector(".js-quick-install-list-template");
                if (l instanceof HTMLTemplateElement) {
                    var d = e.query(i, ".js-account-apps");
                    d.innerHTML = "", d.append(l.content.cloneNode(!0)), l.children.length > 0 && (u.hidden = !1)
                }
            }
        }
    }
 
    function $d(e) {
        var t = document.querySelector("#js-upgrade-container");
        if (t) {
            var r = t.querySelector(".js-billing-section"),
                n = t.querySelector(".js-confirm-upgrade-checkbox"),
                a = e ? e.target : null;
            a || (a = document.querySelector(".js-privacy-toggle:checked")), o(a instanceof HTMLInputElement, "app/assets/modules/github/repo-new.js:95"), "false" === a.value ? (t.hidden = !1, r && r.classList.remove("has-removed-contents"), n && (o(n instanceof HTMLInputElement, "app/assets/modules/github/repo-new.js:101"), n.checked = !0)) : (t.hidden = !0, r && r.classList.add("has-removed-contents"), n && (o(n instanceof HTMLInputElement, "app/assets/modules/github/repo-new.js:108"), n.checked = !1)), Kd()
        }
    }
 
    function Kd() {
        var t = e.query(document, "#new_repository"),
            r = e.query(t, ".js-repo-name").classList.contains("is-autocheck-successful");
        zd() && (r = r && function() {
            var e = document.querySelector("#js-upgrade-container");
            if (!e) return !0;
            if (e.querySelector(".js-ofac-sanction-notice")) return !1;
            var t = e.querySelector(".js-confirm-upgrade-checkbox");
            if (t instanceof HTMLInputElement && !t.checked) return !1;
            var r = e.querySelector(".js-zuora-billing-info");
            if (r && r.classList.contains("d-none")) return !1;
            return !0
        }()), e.query(t, "button[type=submit]", HTMLButtonElement).disabled = !r
    }
    t.observe("#js-upgrade-container .js-zuora-billing-info:not(.d-none)", Kd), t.observe(".page-new-repo", function() {
        Vd = zd();
        var e = document.querySelector("#js-upgrade-container");
        e && (e.hidden = !0), Wd();
        var t = document.querySelector(".js-owner-select");
        t instanceof HTMLElement && t.focus()
    }), r.on("click", ".js-reponame-suggestion", function(t) {
        var n = e.query(document, ".js-repo-name", HTMLInputElement);
        n.value = t.currentTarget.textContent, r.fire(n, "input", !1)
    }), r.on("click", ".js-privacy-toggle", function() {
        Vd = !0
    }), r.on("change", ".js-privacy-toggle", $d), r.on("change", ".js-owner-radio-button", Wd), r.on("change", "#js-upgrade-container input", Kd), n.onInput("#js-upgrade-container input", Kd), r.on("autocheck:send", "#repository_name", function(t) {
        o(t instanceof CustomEvent, "app/assets/modules/github/repo-new.js:203");
        var r = t.currentTarget.form;
        o(r, "app/assets/modules/github/repo-new.js:206");
        var n = e.query(r, "input[name=owner]:checked", HTMLInputElement).value;
        t.detail.body.append("owner", n)
    }), r.on("autocheck:complete", "#repository_name", function() {
        Kd()
    }), r.on("click", ".js-toggle-lang-stats", function() {
        var t = e.query(document, ".js-stats-switcher-viewport"),
            r = 0 !== t.scrollTop ? "is-revealing-overview" : "is-revealing-lang-stats";
        t.classList.toggle(r)
    });
    var Jd = new WeakMap,
        Gd = 100;
 
    function Xd(e) {
        var t = Jd.get(e) || 0;
        if (!(t > Gd)) {
            var r = e.querySelector(".js-more-repos-form");
            r && (Jd.set(e, t + 1), o(r instanceof HTMLFormElement, "app/assets/modules/github/repo-list.js:31"), l.submit(r))
        }
    }
 
    function Qd(e) {
        var t = e.querySelector(".js-your-repositories-search");
        t && r.fire(t, "filterable:change")
    }
 
    function Yd(t) {
        var r = e.getAttribute(t, "data-url"),
            n = e.getAttribute(t, "data-query-name");
        m.replaceState(null, "", function(e, t, r) {
            var n = new URL(e, window.location.origin),
                a = new URLSearchParams(n.search.slice(1));
            return t.length < 1 ? a.delete(r) : a.set(r, t), n.search = a.toString(), n.toString()
        }(r, t.value.trim(), n))
    }
 
    function Zd(t, r) {
        if (!eu(t)) {
            var n = e.query(document, ".js-site-search-form", HTMLFormElement);
            e.query(document, ".js-site-search").classList.toggle("scoped-search", r);
            var a = void 0,
                s = void 0;
            r ? (a = e.getAttribute(n, "data-scoped-search-url"), s = e.getAttribute(t, "data-scoped-placeholder")) : (a = e.getAttribute(n, "data-unscoped-search-url"), s = e.getAttribute(t, "data-unscoped-placeholder")), n.setAttribute("action", a), t.setAttribute("placeholder", s)
        }
    }
    n.onFocus(".js-your-repositories-search", function(t) {
        Xd(e.closest(t, ".js-repos-container"))
    }), t.observe(".js-your-repositories-search", {
        constructor: HTMLInputElement,
        initialize: function(t) {
            t.defaultValue.trim().length > 0 && Qd(e.closest(t, ".js-repos-container"))
        }
    }), n.onInput(".js-your-repositories-search", function(e) {
        var t = e.target;
        o(t instanceof HTMLInputElement, "app/assets/modules/github/repo-list.js:100"), Yd(t)
    }), t.observe(".js-more-repos-form", function(t) {
        var r = e.closest(t, ".js-repos-container");
        (function(e) {
            var t = e.querySelector(".js-your-repositories-search");
            return !!t && (document.activeElement === t || (o(t instanceof HTMLInputElement, "app/assets/modules/github/repo-list.js:62"), t.defaultValue.trim().length > 0))
        })(r) && Xd(r), t.addEventListener("page:loaded", function() {
            Qd(r)
        })
    }), r.on("pjax:end", ".js-repos-container", function(e) {
        var t = e.target;
        o(t instanceof HTMLElement, "app/assets/modules/github/repo-list.js:123"),
            function(e) {
                Jd.set(e, 0)
            }(t), Qd(t)
    }), t.observe(".js-codesearch-nav", function(e) {
        var t = e.querySelector(".selected");
        if (t) {
            var r = t.offsetLeft,
                n = t.offsetWidth,
                a = r + n,
                s = window.innerWidth;
            (a - e.scrollLeft > s || a < e.scrollLeft) && (e.scrollLeft = r - s / 2 + n / 2)
        }
    }), t.observe(".js-codesearch-count", function(e) {
        var t = e.getAttribute("data-search-type"),
            r = !0,
            n = !1,
            a = void 0;
        try {
            for (var s, o = document.querySelectorAll(".js-codesearch-deferred-count")[Symbol.iterator](); !(r = (s = o.next()).done); r = !0) {
                var i = s.value;
                if (t && i.getAttribute("data-search-type") === t) {
                    var u = e.cloneNode(!0);
                    u.classList.remove("js-codesearch-count"), i.replaceWith(u)
                }
            }
        } catch (e) {
            n = !0, a = e
        } finally {
            try {
                !r && o.return && o.return()
            } finally {
                if (n) throw a
            }
        }
    }), n.onKey("keyup", ".js-site-search-field", function(e) {
        var t = e.target;
        o(t instanceof HTMLInputElement, "app/assets/modules/github/search/site.js:34");
        var r = 0 === t.value.length;
        r && "Backspace" === e.key && t.classList.contains("is-clearable") && Zd(t, !1), r && "Escape" === e.key && Zd(t, !0), t.classList.toggle("is-clearable", r)
    }), n.onFocus(".js-site-search-focus", function(t) {
        var r = e.closest(t, ".js-chromeless-input-container");
        r.classList.add("focus"), t.addEventListener("blur", function e() {
            r.classList.remove("focus"), o(t instanceof HTMLInputElement, "app/assets/modules/github/search/site.js:53"), 0 === t.value.length && t.classList.contains("js-site-search-field") && Zd(t, !0), t.removeEventListener("blur", e)
        })
    }), r.on("submit", ".js-site-search-form", function(t) {
        e.query(t.target, ".js-site-search-type-field", HTMLInputElement).value = new URLSearchParams(window.location.search).get("type")
    });
    var em = function() {
        var t = X(regeneratorRuntime.mark(function t(r) {
            var n, a, i, u, c, l, d, m, f, p, v;
            return regeneratorRuntime.wrap(function(t) {
                for (;;) switch (t.prev = t.next) {
                    case 0:
                        if (n = r.getAttribute("data-contents-url"), a = Gi("SEARCH_SUGGESTIONS"), n) {
                            t.next = 4;
                            break
                        }
                        return t.abrupt("return");
                    case 4:
                        return i = e.query(document, ".js-search-suggester"), u = r.value.slice(0, r.selectionEnd).match(/\S*$/), c = u ? u[0] : "", l = new URL(n, window.location.origin), (d = new URLSearchParams).append("query", c), l.search = d.toString(), t.next = 13, s.fetchText(l.toString());
                    case 13:
                        if ("" !== (m = t.sent).trim()) {
                            t.next = 17;
                            break
                        }
                        return rm(), t.abrupt("return");
                    case 17:
                        i.innerHTML = m, a && i.classList.remove("d-none"), _.activate(e.query(i, ".js-navigation-container")), f = e.query(i, ".js-search-suggester-helper"), p = r.value.match(/(^|\s)[^\s:]+$/), v = f.parentElement, o(v instanceof HTMLElement, "app/assets/modules/github/search-suggester.js:51"), p && (f.textContent = r.value), v.classList.toggle("d-none", a && !p);
                    case 26:
                    case "end":
                        return t.stop()
                }
            }, t, this)
        }));
        return function(e) {
            return t.apply(this, arguments)
        }
    }();
 
    function tm(e) {
        var t = e.value.slice(0, e.selectionEnd),
            r = e.value.slice(e.selectionEnd),
            n = 0 === e.value.trim().length,
            a = t.match(/(^|\s+)[^\s:]+$/) && r.match(/^(\s|$)/);
        return n || a
    }
 
    function rm() {
        e.query(document, ".js-search-suggester").classList.add("d-none")
    }
 
    function nm(t) {
        var r = t.target,
            n = e.closest(r, ".js-navigation-item"),
            a = e.query(document, ".js-search-suggester-field", HTMLInputElement),
            s = e.query(document, ".js-search-suggester"),
            o = n.getAttribute("data-value") || "",
            i = a.value.slice(0, a.selectionEnd).replace(/\S+$/, ""),
            u = a.value.slice(a.selectionEnd);
        s.classList.contains("d-none") ? l.submit(e.query(document, "#search_form", HTMLFormElement)) : (t.preventDefault(), a.value = i + o + u, tm(a) ? em(a) : rm())
    }
 
    function am(t, r) {
        var n = e.query(r, ".js-repo-access-error");
        n.textContent = t, n.classList.remove("d-none")
    }
 
    function sm() {
        var e = !0,
            t = !1,
            r = void 0;
        try {
            for (var n, a = document.querySelectorAll(".js-repo-access-error")[Symbol.iterator](); !(e = (n = a.next()).done); e = !0) {
                var s = n.value;
                s.textContent = "", s.classList.add("d-none")
            }
        } catch (e) {
            t = !0, r = e
        } finally {
            try {
                !e && a.return && a.return()
            } finally {
                if (t) throw r
            }
        }
    }
 
    function om(t) {
        var r = t.querySelectorAll(".js-repo-access-entry").length,
            n = parseInt(e.query(t, ".js-collab-limit", HTMLElement).getAttribute("data-collab-limit"), 10),
            a = e.query(t, ".js-over-limit", HTMLElement),
            s = e.query(t, ".js-under-limit", HTMLElement);
        t.classList.toggle("is-empty", 0 === r), a.classList.toggle("d-none", r < n), s.classList.toggle("d-none", r >= n)
    }
 
    function im() {
        var t = document.getElementById("collaborators");
        t && (e.query(t, ".js-add-new-collab", HTMLButtonElement).disabled = !0)
    }
 
    function um(t) {
        var r = document.querySelector(".js-repo-access-team-select");
        if (r) {
            var n = 0,
                a = !0,
                s = !1,
                o = void 0;
            try {
                for (var i, u = r.querySelectorAll(".js-repo-access-team-select-option")[Symbol.iterator](); !(a = (i = u.next()).done); a = !0) {
                    var c = i.value;
                    t === c.getAttribute("data-team-id") && (c.classList.add("has-access"), c.classList.remove("selected")), c.classList.contains("has-access") || n++
                }
            } catch (e) {
                s = !0, o = e
            } finally {
                try {
                    !a && u.return && u.return()
                } finally {
                    if (s) throw o
                }
            }
            0 === n && e.closest(r, ".js-repo-access-group").classList.add("no-form")
        }
    }
 
    function cm(t) {
        var r = document.querySelector(".js-repo-access-team-select");
        if (r) {
            var n = r.querySelector("[data-team-id='" + t + "']");
            n && n.classList.remove("has-access"), e.closest(r, ".js-repo-access-group").classList.remove("no-form")
        }
    }
    t.observe(".js-search-suggester-field", {
        constructor: HTMLInputElement,
        initialize: function(e) {
            em(e), d.addThrottledInputEventListener(e, function() {
                tm(e) ? em(e) : rm()
            })
        }
    }), r.on("focusin", ".js-search-suggester-field", function(e) {
        var t = e.currentTarget;
        o(t instanceof HTMLInputElement, "app/assets/modules/github/search-suggester.js:75"), tm(t) ? em(t) : rm()
    }), r.on("focusout", ".js-search-suggester-field", function() {
        rm()
    }), r.on("mousedown", ".js-search-suggester", nm), r.on("navigation:keydown", ".js-search-suggester", function(t) {
        o(t instanceof CustomEvent, "app/assets/modules/github/search-suggester.js:105");
        var r = t.currentTarget.querySelector('.js-search-suggester .js-navigation-item[aria-selected="true"]');
        switch (t.detail.hotkey) {
            case "Enter":
                r ? nm(t) : l.submit(e.query(document, "#search_form", HTMLFormElement));
                break;
            case "Tab":
                r && nm(t);
                break;
            case "ArrowLeft":
            case "ArrowRight":
            case "Escape":
                rm()
        }
    }), r.on("click", ".js-segmented-nav-button", function(t) {
        t.preventDefault();
        var r = t.currentTarget,
            n = e.getAttribute(r, "data-selected-tab"),
            a = e.closest(r, ".js-segmented-nav"),
            s = a.parentElement;
        o(s, "app/assets/modules/github/segmented-nav.js:14");
        var i = !0,
            u = !1,
            c = void 0;
        try {
            for (var l, d = e.querySelectorAll(a, ".js-segmented-nav-button")[Symbol.iterator](); !(i = (l = d.next()).done); i = !0) {
                l.value.classList.remove("selected")
            }
        } catch (e) {
            u = !0, c = e
        } finally {
            try {
                !i && d.return && d.return()
            } finally {
                if (u) throw c
            }
        }
        r.classList.add("selected");
        var m = !0,
            f = !1,
            p = void 0;
        try {
            for (var v, g = e.querySelectorAll(s, ".js-selected-nav-tab")[Symbol.iterator](); !(m = (v = g.next()).done); m = !0) {
                var h = v.value;
                h.parentElement === s && h.classList.remove("active")
            }
        } catch (e) {
            f = !0, p = e
        } finally {
            try {
                !m && g.return && g.return()
            } finally {
                if (f) throw p
            }
        }
        e.query(document, "." + n).classList.add("active")
    }), t.observe("body.js-print-popup", function() {
        window.print(), setTimeout(window.close, 1e3)
    });
    var lm, dm = function() {
        var e = document.querySelector(".js-repo-filled-seats"),
            t = document.querySelector(".js-repo-access-progress");
        if (e && t) {
            var r = e.getAttribute("data-filled-seats"),
                n = e.getAttribute("data-seats");
            if (r && n) {
                var a = parseInt(r) + 1,
                    s = parseFloat(n);
                e.textContent = a.toString(), e.setAttribute("data-filled-seats", a.toString()), t.style.width = a / s * 100 + "%"
            }
        }
    };
 
    function mm(t) {
        var r = e.query(t, ".js-authorized-pushers");
        if (r.getAttribute("data-limit")) {
            var n = parseInt(r.getAttribute("data-limit")),
                a = r.querySelectorAll(".js-authorized-user-or-team").length;
            r.classList.toggle("at-limit", a >= n)
        }
    }
    r.on("selectmenu:selected", ".js-repo-access-team-select", function(t) {
        var r = t.currentTarget,
            n = e.query(r, ".js-repo-access-team-select-option.selected").getAttribute("data-team-id") || "",
            a = e.query(e.closest(r, ".js-repo-access-group"), ".js-add-repo-access-field", HTMLInputElement);
        a.value = n, o(a.form, "app/assets/modules/github/settings/repository-collabs.js:116"), l.submit(a.form)
    }), c.remoteForm(".js-add-repo-access-form", function() {
        var t = X(regeneratorRuntime.mark(function t(r, n) {
            var a, s, o, i, u, c, l, d, m;
            return regeneratorRuntime.wrap(function(t) {
                for (;;) switch (t.prev = t.next) {
                    case 0:
                        return sm(), t.next = 3, n.json();
                    case 3:
                        if (a = t.sent, s = a.json, o = void 0, i = e.closest(r, ".js-repo-access-group"), o = "collaborators" === i.id ? i.querySelector(".js-repo-access-list-invites") : i.querySelector(".js-repo-access-list"), (u = r.querySelector(".js-add-repo-access-field")) instanceof HTMLInputElement && (c = u.value, u.value = "", "teams" === i.id && um(c)), !s.error) {
                            t.next = 13;
                            break
                        }
                        return am(s.error, i), t.abrupt("return");
                    case 13:
                        im(), f = void 0, (f = document.querySelector("#teams .js-add-new-collab")) instanceof HTMLButtonElement && (f.disabled = !0), dm(), o && (o.insertAdjacentHTML("beforeend", s.html), l = e.querySelectorAll(o, ".js-repo-access-entry"), e.query(l[l.length - 1], "a").focus()), om(i), (s.seats || 0 === s.seats) && (d = 1 === s.seats ? "seat" : "seats", (m = document.getElementById("available-seats")) && (m.innerHTML = s.seats + " " + d));
                    case 19:
                    case "end":
                        return t.stop()
                }
                var f
            }, t, this)
        }));
        return function(e, r) {
            return t.apply(this, arguments)
        }
    }()), c.remoteForm(".js-remove-repo-access-form", function() {
        var t = X(regeneratorRuntime.mark(function t(r, n) {
            var a, s;
            return regeneratorRuntime.wrap(function(t) {
                for (;;) switch (t.prev = t.next) {
                    case 0:
                        if (!r.hasAttribute("data-skip-remote")) {
                            t.next = 2;
                            break
                        }
                        return t.abrupt("return");
                    case 2:
                        return t.prev = 2, t.next = 5, n.text();
                    case 5:
                        t.next = 11;
                        break;
                    case 7:
                        return t.prev = 7, t.t0 = t.catch(2), am(r.getAttribute("data-error-message") || "", e.closest(r, ".js-repo-access-group")), t.abrupt("return");
                    case 11:
                        sm(), a = e.closest(r, ".js-repo-access-entry"), "teams" === (s = e.closest(r, ".js-repo-access-group")).id && cm(a.getAttribute("data-team-id") || ""), a.remove(), om(s);
                    case 17:
                    case "end":
                        return t.stop()
                }
            }, t, this, [
                [2, 7]
            ])
        }));
        return function(e, r) {
            return t.apply(this, arguments)
        }
    }()), r.on("change", "input.js-repo-data-opt-in", function(t) {
        var r = t.currentTarget;
        o(r instanceof HTMLInputElement, "app/assets/modules/github/settings/repository-options.js:16");
        var n = e.closest(r, ".js-repo-data-services"),
            a = r.checked,
            s = !0,
            i = !1,
            u = void 0;
        try {
            for (var c, l = n.querySelectorAll(".js-repo-data-options")[Symbol.iterator](); !(s = (c = l.next()).done); s = !0) {
                c.value.classList.toggle("active", a)
            }
        } catch (e) {
            i = !0, u = e
        } finally {
            try {
                !s && l.return && l.return()
            } finally {
                if (i) throw u
            }
        }
        var d = !0,
            m = !1,
            f = void 0;
        try {
            for (var p, v = n.querySelectorAll(".js-repo-data-option")[Symbol.iterator](); !(d = (p = v.next()).done); d = !0) {
                var g = p.value;
                a ? g.removeAttribute("disabled") : (g.setAttribute("disabled", "disabled"), g.removeAttribute("checked"))
            }
        } catch (e) {
            m = !0, f = e
        } finally {
            try {
                !d && v.return && v.return()
            } finally {
                if (m) throw f
            }
        }
    }), r.on("change", "input.js-default-branch", function(t) {
        var r = t.currentTarget;
        o(r instanceof HTMLInputElement, "app/assets/modules/github/settings/repository-options.js:40");
        var n = e.query(document, ".js-default-branch-confirmation", HTMLInputElement);
        e.query(document, ".js-update-branch-dialog").hidden = r.value === n.getAttribute("data-original-value"), n.value = r.value
    }), r.on("change", ".js-repo-features-form input[type=checkbox]", function(t) {
        var r = t.currentTarget,
            n = e.closest(r, ".js-repo-option"),
            a = e.query(n, ".js-status-indicator");
        a.classList.remove("status-indicator-success", "status-indicator-failed"), a.classList.add("status-indicator-loading")
    }), c.remoteForm(".js-repo-features-form", function() {
        var t = X(regeneratorRuntime.mark(function t(r, n) {
            var a, s, o, i, u, c, l, d, m, f, p, v, g, h, y;
            return regeneratorRuntime.wrap(function(t) {
                for (;;) switch (t.prev = t.next) {
                    case 0:
                        return a = void 0, t.prev = 1, t.next = 4, n.html();
                    case 4:
                        a = t.sent, t.next = 29;
                        break;
                    case 7:
                        for (t.prev = 7, t.t0 = t.catch(1), s = !0, o = !1, i = void 0, t.prev = 12, u = e.querySelectorAll(r, ".status-indicator-loading")[Symbol.iterator](); !(s = (c = u.next()).done); s = !0)(l = c.value).classList.remove("status-indicator-loading"), l.classList.add("status-indicator-failed"), d = e.closest(l, ".js-repo-option"), (m = e.query(d, "input[type=checkbox]", HTMLInputElement)).checked = !m.checked;
                        t.next = 20;
                        break;
                    case 16:
                        t.prev = 16, t.t1 = t.catch(12), o = !0, i = t.t1;
                    case 20:
                        t.prev = 20, t.prev = 21, !s && u.return && u.return();
                    case 23:
                        if (t.prev = 23, !o) {
                            t.next = 26;
                            break
                        }
                        throw i;
                    case 26:
                        return t.finish(23);
                    case 27:
                        return t.finish(20);
                    case 28:
                        return t.abrupt("return");
                    case 29:
                        for (f = !0, p = !1, v = void 0, t.prev = 32, g = e.querySelectorAll(r, ".status-indicator-loading")[Symbol.iterator](); !(f = (h = g.next()).done); f = !0)(y = h.value).classList.remove("status-indicator-loading"), y.classList.add("status-indicator-success");
                        t.next = 40;
                        break;
                    case 36:
                        t.prev = 36, t.t2 = t.catch(32), p = !0, v = t.t2;
                    case 40:
                        t.prev = 40, t.prev = 41, !f && g.return && g.return();
                    case 43:
                        if (t.prev = 43, !p) {
                            t.next = 46;
                            break
                        }
                        throw v;
                    case 46:
                        return t.finish(43);
                    case 47:
                        return t.finish(40);
                    case 48:
                        e.query(document, ".js-repo-nav").replaceWith(a.html);
                    case 49:
                    case "end":
                        return t.stop()
                }
            }, t, this, [
                [1, 7],
                [12, 16, 20, 28],
                [21, , 23, 27],
                [32, 36, 40, 48],
                [41, , 43, 47]
            ])
        }));
        return function(e, r) {
            return t.apply(this, arguments)
        }
    }()), r.on("change", ".js-merge-features-form input[type=checkbox]", function(t) {
        var r = t.currentTarget;
        o(r instanceof HTMLInputElement, "app/assets/modules/github/settings/repository-options.js:77");
        var n = r.form;
        o(n, "app/assets/modules/github/settings/repository-options.js:80");
        var a = !0,
            s = !1,
            i = void 0;
        try {
            for (var u, c = n.querySelectorAll(".errored")[Symbol.iterator](); !(a = (u = c.next()).done); a = !0) {
                u.value.classList.remove("errored")
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
        var l = e.closest(r, ".js-repo-option"),
            d = e.query(l, ".js-status-indicator");
        d.classList.remove("status-indicator-success", "status-indicator-failed"), d.classList.add("status-indicator-loading")
    }), c.remoteForm(".js-merge-features-form", function() {
        var t = X(regeneratorRuntime.mark(function t(r, n) {
            var a, s, o, i, u, c, l, d, m, f, p, v, g, h, y, b, j, L, w, x, k, E, T, q, S, A, M, H, I, R, _, C, F, P;
            return regeneratorRuntime.wrap(function(t) {
                for (;;) switch (t.prev = t.next) {
                    case 0:
                        return t.prev = 0, t.next = 3, n.text();
                    case 3:
                        t.next = 65;
                        break;
                    case 5:
                        for (t.prev = 5, t.t0 = t.catch(0), a = !0, s = !1, o = void 0, t.prev = 10, i = r.querySelectorAll(".js-select-one-warning")[Symbol.iterator](); !(a = (u = i.next()).done); a = !0) u.value.classList.remove("d-none");
                        t.next = 18;
                        break;
                    case 14:
                        t.prev = 14, t.t1 = t.catch(10), s = !0, o = t.t1;
                    case 18:
                        t.prev = 18, t.prev = 19, !a && i.return && i.return();
                    case 21:
                        if (t.prev = 21, !s) {
                            t.next = 24;
                            break
                        }
                        throw o;
                    case 24:
                        return t.finish(21);
                    case 25:
                        return t.finish(18);
                    case 26:
                        for (c = !0, l = !1, d = void 0, t.prev = 29, m = r.querySelectorAll(".status-indicator-loading")[Symbol.iterator](); !(c = (f = m.next()).done); c = !0)(p = f.value).classList.remove("status-indicator-loading"), p.classList.add("status-indicator-failed"), (v = e.closest(p, ".js-repo-option")).classList.add("errored"), (g = e.query(v, "input[type=checkbox]", HTMLInputElement)).checked = !g.checked;
                        t.next = 37;
                        break;
                    case 33:
                        t.prev = 33, t.t2 = t.catch(29), l = !0, d = t.t2;
                    case 37:
                        t.prev = 37, t.prev = 38, !c && m.return && m.return();
                    case 40:
                        if (t.prev = 40, !l) {
                            t.next = 43;
                            break
                        }
                        throw d;
                    case 43:
                        return t.finish(40);
                    case 44:
                        return t.finish(37);
                    case 45:
                        for (h = !0, y = !1, b = void 0, t.prev = 48, j = r.querySelectorAll(".status-indicator-success")[Symbol.iterator](); !(h = (L = j.next()).done); h = !0) L.value.classList.remove("status-indicator-success");
                        t.next = 56;
                        break;
                    case 52:
                        t.prev = 52, t.t3 = t.catch(48), y = !0, b = t.t3;
                    case 56:
                        t.prev = 56, t.prev = 57, !h && j.return && j.return();
                    case 59:
                        if (t.prev = 59, !y) {
                            t.next = 62;
                            break
                        }
                        throw b;
                    case 62:
                        return t.finish(59);
                    case 63:
                        return t.finish(56);
                    case 64:
                        return t.abrupt("return");
                    case 65:
                        for (w = !0, x = !1, k = void 0, t.prev = 68, E = r.querySelectorAll(".errored")[Symbol.iterator](); !(w = (T = E.next()).done); w = !0) T.value.classList.remove("errored");
                        t.next = 76;
                        break;
                    case 72:
                        t.prev = 72, t.t4 = t.catch(68), x = !0, k = t.t4;
                    case 76:
                        t.prev = 76, t.prev = 77, !w && E.return && E.return();
                    case 79:
                        if (t.prev = 79, !x) {
                            t.next = 82;
                            break
                        }
                        throw k;
                    case 82:
                        return t.finish(79);
                    case 83:
                        return t.finish(76);
                    case 84:
                        for (q = !0, S = !1, A = void 0, t.prev = 87, M = r.querySelectorAll(".js-select-one-warning")[Symbol.iterator](); !(q = (H = M.next()).done); q = !0) H.value.classList.add("d-none");
                        t.next = 95;
                        break;
                    case 91:
                        t.prev = 91, t.t5 = t.catch(87), S = !0, A = t.t5;
                    case 95:
                        t.prev = 95, t.prev = 96, !q && M.return && M.return();
                    case 98:
                        if (t.prev = 98, !S) {
                            t.next = 101;
                            break
                        }
                        throw A;
                    case 101:
                        return t.finish(98);
                    case 102:
                        return t.finish(95);
                    case 103:
                        for (I = !0, R = !1, _ = void 0, t.prev = 106, C = r.querySelectorAll(".status-indicator-loading")[Symbol.iterator](); !(I = (F = C.next()).done); I = !0)(P = F.value).classList.remove("status-indicator-loading"), P.classList.add("status-indicator-success");
                        t.next = 114;
                        break;
                    case 110:
                        t.prev = 110, t.t6 = t.catch(106), R = !0, _ = t.t6;
                    case 114:
                        t.prev = 114, t.prev = 115, !I && C.return && C.return();
                    case 117:
                        if (t.prev = 117, !R) {
                            t.next = 120;
                            break
                        }
                        throw _;
                    case 120:
                        return t.finish(117);
                    case 121:
                        return t.finish(114);
                    case 122:
                    case "end":
                        return t.stop()
                }
            }, t, this, [
                [0, 5],
                [10, 14, 18, 26],
                [19, , 21, 25],
                [29, 33, 37, 45],
                [38, , 40, 44],
                [48, 52, 56, 64],
                [57, , 59, 63],
                [68, 72, 76, 84],
                [77, , 79, 83],
                [87, 91, 95, 103],
                [96, , 98, 102],
                [106, 110, 114, 122],
                [115, , 117, 121]
            ])
        }));
        return function(e, r) {
            return t.apply(this, arguments)
        }
    }()), r.on("change", "input.js-required-status-toggle", function(t) {
        var r = t.currentTarget;
        o(r instanceof HTMLInputElement, "app/assets/modules/github/settings/repository-options.js:139");
        var n = e.closest(r, ".js-protected-branch-settings");
        e.query(n, ".js-required-statuses").classList.toggle("d-none", !r.checked)
    }), r.on("change", "input.js-required-status-checkbox", function(t) {
        var r = t.currentTarget;
        o(r instanceof HTMLInputElement, "app/assets/modules/github/settings/repository-options.js:146");
        var n = e.closest(r, ".js-protected-branches-item");
        e.query(n, ".js-required-status-badge").classList.toggle("d-none", !r.checked)
    }), r.on("change", ".js-authorized-branch-pushers-toggle, input.js-authorized-review-dismisser-toggle", function(t) {
        var r = t.currentTarget;
        o(r instanceof HTMLInputElement, "app/assets/modules/github/settings/repository-options.js:156");
        var n = e.closest(r, ".js-protected-branch-options"),
            a = e.query(n, ".js-authorized-pushers");
        a.classList.toggle("d-none", !r.checked), e.query(a, ".js-add-protected-branch-user-or-team input", HTMLInputElement).focus()
    }), r.on("change", ".js-protected-branch-include-admin-toggle", function(t) {
        var r = t.currentTarget,
            n = e.closest(r, ".js-protected-branch-settings").querySelectorAll(".js-protected-branch-admin-permission"),
            a = !0,
            s = !1,
            o = void 0;
        try {
            for (var i, u = n[Symbol.iterator](); !(a = (i = u.next()).done); a = !0) {
                var c = i.value;
                c.classList.toggle("d-none"), c.classList.toggle("active", !c.classList.contains("d-none"))
            }
        } catch (e) {
            s = !0, o = e
        } finally {
            try {
                !a && u.return && u.return()
            } finally {
                if (s) throw o
            }
        }
    }), r.on("change", ".js-add-protected-branch-user-or-team", (lm = X(regeneratorRuntime.mark(function t(r) {
        var n, a, i, u, c, l, d, m;
        return regeneratorRuntime.wrap(function(t) {
            for (;;) switch (t.prev = t.next) {
                case 0:
                    if (r.target === r.currentTarget) {
                        t.next = 2;
                        break
                    }
                    return t.abrupt("return");
                case 2:
                    if (n = r.currentTarget, o(n instanceof AutocompleteElement, "app/assets/modules/github/settings/repository-options.js:188"), a = n.value) {
                        t.next = 7;
                        break
                    }
                    return t.abrupt("return");
                case 7:
                    if (n.value = "", i = e.closest(n, ".js-protected-branch-options"), u = e.query(i, ".js-authorized-users-and-teams"), !(c = u.querySelector("div[data-user-or-team-name='" + a + "']"))) {
                        t.next = 14;
                        break
                    }
                    return e.query(c, ".js-protected-branch-pusher").classList.add("user-already-added"), t.abrupt("return");
                case 14:
                    return l = e.getAttribute(n, "data-add-url"), d = new URL(l, window.location.origin), (m = new URLSearchParams(d.search.slice(1))).append("item", a), d.search = m.toString(), t.t0 = u, t.next = 22, s.fetchSafeDocumentFragment(document, d);
                case 22:
                    t.t1 = t.sent, t.t0.append.call(t.t0, t.t1), mm(i);
                case 25:
                case "end":
                    return t.stop()
            }
        }, t, this)
    })), function(e) {
        return lm.apply(this, arguments)
    })), r.on("click", ".js-remove-authorized-user-or-team", function(t) {
        var r = t.currentTarget,
            n = e.closest(r, ".js-protected-branch-options");
        e.closest(r, ".js-authorized-user-or-team").remove(), mm(n)
    }), t.observe("#pages-cname-field", {
        constructor: HTMLInputElement,
        add: function(t) {
            d.addThrottledInputEventListener(t, function() {
                e.query(document, ".js-pages-cname-save-btn", HTMLButtonElement).disabled = t.value === t.defaultValue
            })
        }
    }), r.on("selectmenu:selected", ".js-pages-source", function(t) {
        var r = t.currentTarget,
            n = e.query(document, ".js-pages-source-btn-text"),
            a = n.getAttribute("data-original-text") === n.textContent;
        e.query(document, ".js-pages-source-save-btn", HTMLButtonElement).disabled = a;
        var s = document.querySelector(".js-pages-theme-source-value");
        if (s && s instanceof HTMLInputElement) {
            var i = e.query(r, ".selected input", HTMLInputElement).value,
                u = e.query(document, ".js-pages-theme-source-note"),
                c = e.query(document, ".js-pages-theme-source-note-value");
            if ("none" === i) {
                var l = s.getAttribute("data-original-value"),
                    d = c.getAttribute("data-original-text");
                o(null != l && null != d, "Missing attributes [`data-original-value`, `data-original-text`] -- app/assets/modules/github/settings/repository-options.js:250"), s.value = l, c.textContent = d, u.classList.remove("hide-note")
            } else s.value = i, c.textContent = n.textContent, a ? u.classList.add("hide-note") : u.classList.remove("hide-note")
        }
    }), t.observe(".js-pages-https-status-form", {
        constructor: HTMLFormElement,
        add: function(e) {
            var t = this,
                r = new Request(e.action, {
                    method: e.method,
                    body: new FormData(e)
                });
            X(regeneratorRuntime.mark(function n() {
                var a;
                return regeneratorRuntime.wrap(function(t) {
                    for (;;) switch (t.prev = t.next) {
                        case 0:
                            return t.prev = 0, t.next = 3, s.fetchSafeDocumentFragment(document, r);
                        case 3:
                            a = t.sent, e.replaceWith(a), t.next = 13;
                            break;
                        case 7:
                            if (t.prev = 7, t.t0 = t.catch(0), !t.t0.response || 404 !== t.t0.response.status) {
                                t.next = 12;
                                break
                            }
                            t.next = 13;
                            break;
                        case 12:
                            throw t.t0;
                        case 13:
                        case "end":
                            return t.stop()
                    }
                }, n, t, [
                    [0, 7]
                ])
            }))()
        }
    }), t.observe(".js-enable-btn", {
        constructor: HTMLButtonElement,
        add: function(e) {
            e.disabled = !1, e.classList.remove("tooltipped"), e.removeAttribute("aria-label")
        }
    }), r.on("click", ".js-repo-team-suggestions-view-all", function() {
        var t = X(regeneratorRuntime.mark(function t(r) {
            var n, a, o, i, u, c, l, d, m, f;
            return regeneratorRuntime.wrap(function(t) {
                for (;;) switch (t.prev = t.next) {
                    case 0:
                        return n = e.closest(r.currentTarget, "ul"), a = e.getAttribute(r.currentTarget, "data-url"), o = e.querySelectorAll(document, ".js-repo-toggle-team:checked", HTMLInputElement).map(function(e) {
                            return e.value
                        }), t.next = 5, s.fetchSafeDocumentFragment(document, a);
                    case 5:
                        for (i = t.sent, n.innerHTML = "", n.append(i), u = !0, c = !1, l = void 0, t.prev = 11, d = o[Symbol.iterator](); !(u = (m = d.next()).done); u = !0) f = m.value, e.query(n, '.js-repo-toggle-team[value="' + f + '"]', HTMLInputElement).checked = !0;
                        t.next = 19;
                        break;
                    case 15:
                        t.prev = 15, t.t0 = t.catch(11), c = !0, l = t.t0;
                    case 19:
                        t.prev = 19, t.prev = 20, !u && d.return && d.return();
                    case 22:
                        if (t.prev = 22, !c) {
                            t.next = 25;
                            break
                        }
                        throw l;
                    case 25:
                        return t.finish(22);
                    case 26:
                        return t.finish(19);
                    case 27:
                    case "end":
                        return t.stop()
                }
            }, t, this, [
                [11, 15, 19, 27],
                [20, , 22, 26]
            ])
        }));
        return function(e) {
            return t.apply(this, arguments)
        }
    }()), n.onInput(".js-synced-repo-owner-input", function(e) {
        var t = e.target;
        o(t instanceof HTMLInputElement, "app/assets/modules/github/settings/repository-settings.js:25");
        var r = t.getAttribute("data-sync");
        if (r) {
            var n = document.querySelectorAll('[data-sync-with="' + r + '"]'),
                a = !0,
                s = !1,
                i = void 0;
            try {
                for (var u, c = n[Symbol.iterator](); !(a = (u = c.next()).done); a = !0) {
                    u.value.textContent = t.value
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
    }), c.remoteForm(".js-saved-reply-delete", function() {
        var e = X(regeneratorRuntime.mark(function e(t, r) {
            var n, a, s;
            return regeneratorRuntime.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                    case 0:
                        return e.next = 2, r.text();
                    case 2:
                        n = t.closest(".js-saved-reply-container"), o(n, "app/assets/modules/github/settings/saved-replies.js:10"), a = n.querySelectorAll(".js-saved-reply-list-item").length, n.classList.toggle("has-replies", a > 1), s = t.closest(".js-saved-reply-list-item"), o(s, "app/assets/modules/github/settings/saved-replies.js:16"), s.remove();
                    case 9:
                    case "end":
                        return e.stop()
                }
            }, e, this)
        }));
        return function(t, r) {
            return e.apply(this, arguments)
        }
    }()), c.remoteForm(".js-user-sessions-revoke", function() {
        var e = X(regeneratorRuntime.mark(function e(t, r) {
            var n, a, s;
            return regeneratorRuntime.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                    case 0:
                        return e.next = 2, r.text();
                    case 2:
                        n = t.closest(".js-user-sessions-container"), a = t.closest(".js-user-session"), o(a, "app/assets/modules/github/settings/user-sessions.js:12"), a.remove(), n && (s = n.querySelectorAll(".js-user-session").length, n.classList.toggle("has-active-sessions", s > 0));
                    case 7:
                    case "end":
                        return e.stop()
                }
            }, e, this)
        }));
        return function(t, r) {
            return e.apply(this, arguments)
        }
    }());
    var fm = function() {
        var e = X(regeneratorRuntime.mark(function e(t) {
            var r, n;
            return regeneratorRuntime.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                    case 0:
                        if (t) {
                            e.next = 2;
                            break
                        }
                        return e.abrupt("return");
                    case 2:
                        if (r = t.getAttribute("data-url")) {
                            e.next = 5;
                            break
                        }
                        return e.abrupt("return");
                    case 5:
                        return n = void 0, e.prev = 6, e.next = 9, s.fetchSafeDocumentFragment(document, r);
                    case 9:
                        n = e.sent, t.innerHTML = "", t.append(n), e.next = 17;
                        break;
                    case 14:
                        e.prev = 14, e.t0 = e.catch(6), window.location.reload();
                    case 17:
                    case "end":
                        return e.stop()
                }
            }, e, this, [
                [6, 14]
            ])
        }));
        return function(t) {
            return e.apply(this, arguments)
        }
    }();
 
    function pm(t, r) {
        e.query(t, ".js-add-new-blocked-user", HTMLButtonElement).disabled = !r
    }
 
    function vm(e) {
        var t = e.currentTarget.querySelector("input.js-filterable-field");
        t && (t.focus(), r.fire(t, "filterable:change"))
    }
 
    function gm(t) {
        var r = e.closest(t.currentTarget, ".js-select-menu").querySelector(".js-navigation-container"),
            n = t.currentTarget;
        r && n instanceof HTMLElement && _.refocus(r, n)
    }
    t.observe(".js-email-global-unsubscribe-form", function(t) {
        e.query(t, ".js-email-global-unsubscribe-submit", HTMLInputElement).disabled = !0
    }), r.on("change", ".js-email-global-unsubscribe-form", function(t) {
        var r = t.currentTarget,
            n = e.query(r, ".js-email-global-unsubscribe-submit", HTMLInputElement),
            a = e.querySelectorAll(r, ".js-email-global-unsubscribe", HTMLInputElement),
            s = Array.from(a).some(function(e) {
                return e.checked !== e.defaultChecked
            });
        n.disabled = !s
    }), c.remoteForm(".js-verify-ssh-key", function() {
        var t = X(regeneratorRuntime.mark(function t(r, n) {
            var a;
            return regeneratorRuntime.wrap(function(t) {
                for (;;) switch (t.prev = t.next) {
                    case 0:
                        return t.next = 2, n.html();
                    case 2:
                        a = e.closest(r, "li"), e.query(a, ".js-unverified-user-key-notice").remove(), e.query(a, ".js-user-key-icon").classList.remove("unverified-user-key"), r.remove();
                    case 6:
                    case "end":
                        return t.stop()
                }
            }, t, this)
        }));
        return function(e, r) {
            return t.apply(this, arguments)
        }
    }()), c.remoteForm(".js-leave-collaborated-repo", function() {
        var t = X(regeneratorRuntime.mark(function t(r, n) {
            var a;
            return regeneratorRuntime.wrap(function(t) {
                for (;;) switch (t.prev = t.next) {
                    case 0:
                        return t.next = 2, n.html();
                    case 2:
                        a = e.getAttribute(r, "data-repo-id"), e.query(document, ".js-collab-repo[data-repo-id='" + a + "']").remove(), document.querySelector(".js-collab-repo") || (e.query(document, ".js-collaborated-repos-empty").hidden = !1, e.query(document, ".js-collaborated-repos").hidden = !0);
                    case 5:
                    case "end":
                        return t.stop()
                }
            }, t, this)
        }));
        return function(e, r) {
            return t.apply(this, arguments)
        }
    }()), c.remoteForm(".js-email-unsubscribe-form", function() {
        var e = X(regeneratorRuntime.mark(function e(t, r) {
            var n, a, s, o, i, u;
            return regeneratorRuntime.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                    case 0:
                        return e.next = 2, r.text();
                    case 2:
                        for (n = !0, a = !1, s = void 0, e.prev = 5, o = document.querySelectorAll(".js-email-unsubscribe-message")[Symbol.iterator](); !(n = (i = o.next()).done); n = !0)(u = i.value).hidden = !u.hidden;
                        e.next = 13;
                        break;
                    case 9:
                        e.prev = 9, e.t0 = e.catch(5), a = !0, s = e.t0;
                    case 13:
                        e.prev = 13, e.prev = 14, !n && o.return && o.return();
                    case 16:
                        if (e.prev = 16, !a) {
                            e.next = 19;
                            break
                        }
                        throw s;
                    case 19:
                        return e.finish(16);
                    case 20:
                        return e.finish(13);
                    case 21:
                    case "end":
                        return e.stop()
                }
            }, e, this, [
                [5, 9, 13, 21],
                [14, , 16, 20]
            ])
        }));
        return function(t, r) {
            return e.apply(this, arguments)
        }
    }()), c.remoteForm(".js-revoke-access-form", function() {
        var t = X(regeneratorRuntime.mark(function t(r, n) {
            var a, s, o;
            return regeneratorRuntime.wrap(function(t) {
                for (;;) switch (t.prev = t.next) {
                    case 0:
                        return t.next = 2, n.html();
                    case 2:
                        a = e.getAttribute(r, "data-id"), s = e.getAttribute(r, "data-type-name"), (o = e.query(document, ".js-revoke-item[data-type='" + s + "'][data-id='" + a + "']")).remove(), o.classList.contains("new-token") && e.query(document, ".js-flash-new-token").remove();
                    case 7:
                    case "end":
                        return t.stop()
                }
            }, t, this)
        }));
        return function(e, r) {
            return t.apply(this, arguments)
        }
    }()), r.on("click", ".js-delete-oauth-application-image", function() {
        var t = e.query(document, ".js-delete-oauth-application-image-form", HTMLFormElement);
        l.submit(t)
    }), r.on("click", ".js-new-callback", function(t) {
        t.preventDefault();
        var r = t.currentTarget,
            n = e.closest(r, ".js-callback-urls"),
            a = e.query(n, ".js-callback-url").cloneNode(!0);
        a.classList.remove("is-default-callback"), e.query(a, "input", HTMLInputElement).value = "", n.classList.add("has-many");
        var s = r.parentNode;
        o(s instanceof HTMLElement, "app/assets/modules/github/settings/user-settings.js:90"), s.insertBefore(a, r)
    }), r.on("click", ".js-delete-callback", function(t) {
        t.preventDefault();
        var r = t.currentTarget;
        e.closest(r, ".js-callback-url").remove();
        var n = e.closest(r, ".js-callback-urls");
        e.querySelectorAll(n, ".js-callback-url", HTMLElement).length <= 1 && n.classList.remove("has-many")
    }), r.on("click", ".js-oauth-application-whitelist .js-deny-this-request", function(t) {
        var r = t.currentTarget,
            n = r.nextElementSibling;
        o(n instanceof HTMLInputElement, "app/assets/modules/github/settings/user-settings.js:112"), n.value = "denied", l.submit(e.closest(r, ".js-org-application-access-form", HTMLFormElement))
    }), r.on("change", ".js-checkbox-scope", function(t) {
        var r = t.currentTarget;
        o(r instanceof HTMLInputElement, "app/assets/modules/github/settings/user-settings.js:121");
        var n = e.closest(r, ".js-check-scope-container"),
            a = e.querySelectorAll(n, ".js-checkbox-scope", HTMLInputElement),
            s = !0,
            i = !1,
            u = void 0;
        try {
            for (var c, l = a[Symbol.iterator](); !(s = (c = l.next()).done); s = !0) {
                var d = c.value;
                d !== r && (d.checked = r.checked, d.disabled = r.checked)
            }
        } catch (e) {
            i = !0, u = e
        } finally {
            try {
                !s && l.return && l.return()
            } finally {
                if (i) throw u
            }
        }
    }), r.on("click", ".js-generate-integration-key", function() {
        var t = e.query(document, ".js-integration-key-management-wrapper");
        t.classList.add("downloading"), t.classList.contains("js-integration-key-multi") && (t.classList.add("has-keys"), setTimeout(function() {
            var t = e.query(document, ".js-integration-keys-container", HTMLElement);
            t && fm(t)
        }, 1e3))
    }), c.remoteForm(".js-remove-integration-key", function() {
        var t = X(regeneratorRuntime.mark(function t(r, n) {
            var a, s, o, i, u, c;
            return regeneratorRuntime.wrap(function(t) {
                for (;;) switch (t.prev = t.next) {
                    case 0:
                        return t.prev = 0, t.next = 3, n.text();
                    case 3:
                        t.next = 23;
                        break;
                    case 5:
                        if (t.prev = 5, t.t0 = t.catch(0), t.t0.response) {
                            t.next = 9;
                            break
                        }
                        throw t.t0;
                    case 9:
                        e.closest(r, "details").removeAttribute("open"), a = e.query(document, ".js-integration-key-management-wrapper"), s = e.query(a, ".js-error-container"), o = e.query(s, ".js-error-message"), t.t1 = t.t0.response.status, t.next = 500 === t.t1 ? 16 : 404 === t.t1 ? 18 : 20;
                        break;
                    case 16:
                        return o.textContent = "Oops, something went wrong.", t.abrupt("break", 21);
                    case 18:
                        return o.textContent = "Oops, that key could not be found.", t.abrupt("break", 21);
                    case 20:
                        o.textContent = t.t0.response.json.message;
                    case 21:
                        return a.classList.add("error"), t.abrupt("return");
                    case 23:
                        i = e.getAttribute(r, "data-key-id"), (u = document.getElementById(i)) && (c = e.closest(u, ".js-integration-keys-container", HTMLElement)) && fm(c);
                    case 26:
                    case "end":
                        return t.stop()
                }
            }, t, this, [
                [0, 5]
            ])
        }));
        return function(e, r) {
            return t.apply(this, arguments)
        }
    }()), r.on("click", ".js-error-dismiss", function() {
        var t = e.query(document, ".js-integration-keys-container", HTMLElement);
        t && fm(t)
    }), t.observe(".js-block-users-form", function(e) {
        pm(e, !1)
    }), c.remoteForm(".js-block-users-form", function() {
        var t = X(regeneratorRuntime.mark(function t(r, n) {
            var a, s, o, i;
            return regeneratorRuntime.wrap(function(t) {
                for (;;) switch (t.prev = t.next) {
                    case 0:
                        return t.next = 2, n.html();
                    case 2:
                        a = t.sent, s = e.query(document, ".js-user-block-settings-list"), o = e.query(s, ".js-blocked-list"), pm(r, !1), i = e.query(r, ".js-add-blocked-user-field", HTMLInputElement), l.changeValue(i, ""), u = s, document.querySelector(".js-blocked-user-list") || e.query(u, ".blankslate").classList.add("d-none"), o.prepend(a.html);
                    case 10:
                    case "end":
                        return t.stop()
                }
                var u
            }, t, this)
        }));
        return function(e, r) {
            return t.apply(this, arguments)
        }
    }()), r.on("change", ".js-add-blocked-user-completer", function(t) {
        if (t.target === t.currentTarget) {
            var r = t.target;
            o(r instanceof AutocompleteElement, "app/assets/modules/github/settings/user-settings.js:246"), pm(e.closest(r, ".js-block-users-form"), !!r.value)
        }
    }), r.on("change", ".js-notification-restrictions-confirmation-needed", function(t) {
        var r = t.currentTarget;
        o(r instanceof HTMLInputElement, "app/assets/modules/github/settings/verified-domains.js:10"), e.query(document, ".js-notification-restrictions-confirm-modal").classList.toggle("d-none", !r.checked), e.query(document, ".js-notification-restrictions-save").classList.toggle("d-none", r.checked)
    }), r.on("deprecatedAjaxSuccess", ".js-select-menu:not([data-multiple])", function(e) {
        o(e.currentTarget instanceof HTMLElement, "app/assets/modules/github/select-menu/ajax.js:20"), N.deactivate(e.currentTarget)
    }), r.on("deprecatedAjaxSend", ".js-select-menu:not([data-multiple])", function(e) {
        e.currentTarget.classList.add("is-loading")
    }), r.on("deprecatedAjaxComplete", ".js-select-menu", function(e) {
        e.currentTarget.classList.remove("is-loading")
    }), r.on("deprecatedAjaxError", ".js-select-menu", function(e) {
        e.currentTarget.classList.add("has-error")
    }), r.on("menu:deactivate", ".js-select-menu", function(e) {
        e.currentTarget.classList.remove("is-loading", "has-error")
    }), r.on("navigation:open", ".js-select-menu:not([data-multiple]) .js-navigation-item", function(t) {
        var n = t.currentTarget;
        if (r.fire(n, "selectmenu:select")) {
            var a = e.closest(n, ".js-select-menu"),
                s = a.querySelector(".js-navigation-item.selected");
            s && s.classList.remove("selected"), n.classList.add("selected"), n.classList.remove("indeterminate");
            var o = !0,
                i = !1,
                u = void 0;
            try {
                for (var c, d = e.querySelectorAll(n, "input[type=radio], input[type=checkbox]", HTMLInputElement)[Symbol.iterator](); !(o = (c = d.next()).done); o = !0) {
                    var m = c.value;
                    l.changeValue(m, !0)
                }
            } catch (e) {
                i = !0, u = e
            } finally {
                try {
                    !o && d.return && d.return()
                } finally {
                    if (i) throw u
                }
            }
            r.fire(n, "selectmenu:selected"), a.classList.contains("is-loading") || N.deactivate(a)
        }
    }), r.on("navigation:open", ".js-select-menu[data-multiple] .js-navigation-item", function(t) {
        var n = t.currentTarget;
        if (r.fire(n, "selectmenu:select")) {
            var a = n.classList.contains("selected");
            n.classList.toggle("selected"), n.classList.remove("indeterminate");
            var s = !0,
                o = !1,
                i = void 0;
            try {
                for (var u, c = e.querySelectorAll(n, "input[type=radio], input[type=checkbox]", HTMLInputElement)[Symbol.iterator](); !(s = (u = c.next()).done); s = !0) {
                    var d = u.value;
                    l.changeValue(d, !a)
                }
            } catch (e) {
                o = !0, i = e
            } finally {
                try {
                    !s && c.return && c.return()
                } finally {
                    if (o) throw i
                }
            }
            r.fire(n, "selectmenu:selected")
        }
    }), r.on("selectmenu:select", ".js-select-menu .js-navigation-item.disabled", function(e) {
        e.preventDefault()
    }), r.on("selectmenu:selected", ".js-select-menu .js-navigation-item", function(t) {
        var r = t.currentTarget,
            n = e.closest(r, ".js-select-menu"),
            a = r.querySelector(".js-select-button-text");
        if (a) {
            var s = n.querySelector(".js-select-button");
            s && (s.innerHTML = a.innerHTML)
        }
        var o = r.querySelector(".js-select-menu-item-gravatar");
        if (o) {
            var i = n.querySelector(".js-select-button-gravatar");
            i && (i.innerHTML = o.innerHTML)
        }
    }), r.on("selectmenu:change", ".js-select-menu .select-menu-list", function(e) {
        var t = e.currentTarget,
            r = Array.from(t.querySelectorAll(".js-navigation-item")),
            n = !0,
            a = !1,
            s = void 0;
        try {
            for (var o, i = r[Symbol.iterator](); !(n = (o = i.next()).done); n = !0) {
                o.value.classList.remove("last-visible")
            }
        } catch (e) {
            a = !0, s = e
        } finally {
            try {
                !n && i.return && i.return()
            } finally {
                if (a) throw s
            }
        }
        var u = r.filter(T).pop();
        if (u && u.classList.add("last-visible"), !t.hasAttribute("data-filterable-for")) {
            var c = e.target.classList.contains("filterable-empty");
            t.classList.toggle("filterable-empty", c)
        }
    }), t.observe("tab-container .select-menu-list .filterable-empty", {
        add: function(t) {
            e.closest(t, ".select-menu-list").classList.add("filterable-empty")
        },
        remove: function(t) {
            e.closest(t, ".select-menu-list").classList.remove("filterable-empty")
        }
    }), r.on("menu:activated", ".js-select-menu", vm), r.on("selectmenu:load", ".js-select-menu", vm), r.on("menu:deactivate", ".js-select-menu", function(e) {
        var t = e.currentTarget,
            n = t.querySelector("input.js-filterable-field");
        n instanceof HTMLInputElement && (n.value = "", r.fire(n, "filterable:change"));
        var a = !0,
            s = !1,
            i = void 0;
        try {
            for (var u, c = t.querySelectorAll(".js-navigation-item.selected")[Symbol.iterator](); !(a = (u = c.next()).done); a = !0) {
                var l = u.value,
                    d = l.querySelector("input[type=radio], input[type=checkbox]");
                d && (o(d instanceof HTMLInputElement, "app/assets/modules/github/select-menu/filterable.js:37"), l.classList.toggle("selected", d.checked))
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
        var m = document.activeElement;
        if (m && t.contains(m)) try {
            m.blur()
        } catch (e) {}
    }), r.on("menu:activate", ".js-select-menu", function(e) {
        var t = e.currentTarget.querySelector(".js-menu-target");
        t && t.classList.add("selected");
        var r = e.currentTarget.querySelector(".js-navigation-container");
        r && _.push(r)
    }), r.on("menu:deactivate", ".js-select-menu", function(e) {
        var t = e.currentTarget.querySelector(".js-menu-target");
        t && t.classList.remove("selected");
        var r = e.currentTarget.querySelector(".js-navigation-container");
        r && _.pop(r)
    }), r.on("filterable:change", ".js-select-menu .select-menu-list", gm), r.on("selectmenu:tabchange", ".js-select-menu .select-menu-list", gm), r.on("filterable:change", ".js-select-menu .select-menu-list, details-menu .select-menu-list", function(t) {
        o(t instanceof CustomEvent, "app/assets/modules/github/select-menu/new.js:22");
        var n = t.currentTarget,
            a = n.querySelector(".js-new-item-form");
        a && function(t, r, n) {
            var a = n.length > 0 && ! function(e, t) {
                var r = !0,
                    n = !1,
                    a = void 0;
                try {
                    for (var s, o = e.querySelectorAll(".js-select-button-text, .js-select-menu-filter-text")[Symbol.iterator](); !(r = (s = o.next()).done); r = !0) {
                        var i = s.value,
                            u = i.textContent.toLowerCase().trim();
                        if (u === t.toLowerCase()) return !0
                    }
                } catch (e) {
                    n = !0, a = e
                } finally {
                    try {
                        !r && o.return && o.return()
                    } finally {
                        if (n) throw a
                    }
                }
                return !1
            }(t, n);
            if (t.classList.toggle("is-showing-new-item-form", a), !a) return;
            e.query(r, ".js-new-item-name").textContent = n;
            var s = r.querySelector(".js-new-item-value");
            (s instanceof HTMLInputElement || s instanceof HTMLButtonElement) && (s.value = n)
        }(n, a, t.detail.inputField.value), r.fire(t.target, "selectmenu:change")
    });
 
    function hm() {
        var e = document.body;
        o(e, "app/assets/modules/github/sessions/two-factor.js:12"), e.classList.add("is-sending"), e.classList.remove("is-sent", "is-not-sent")
    }
 
    function ym() {
        var e = document.body;
        o(e, "app/assets/modules/github/sessions/two-factor.js:20"), e.classList.add("is-sent"), e.classList.remove("is-sending")
    }
 
    function bm(t) {
        var r = document.body;
        o(r, "app/assets/modules/github/sessions/two-factor.js:28"), t && (e.query(document, ".js-sms-error").textContent = t), r.classList.add("is-not-sent"), r.classList.remove("is-sending")
    }
    c.remoteForm(".js-send-auth-code", function() {
        var e = X(regeneratorRuntime.mark(function e(t, r) {
            var n;
            return regeneratorRuntime.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                    case 0:
                        return hm(), n = void 0, e.prev = 2, e.next = 5, r.text();
                    case 5:
                        n = e.sent, e.next = 11;
                        break;
                    case 8:
                        e.prev = 8, e.t0 = e.catch(2), bm(e.t0.response.text);
                    case 11:
                        n && ym();
                    case 12:
                    case "end":
                        return e.stop()
                }
            }, e, void 0, [
                [2, 8]
            ])
        }));
        return function(t, r) {
            return e.apply(this, arguments)
        }
    }()), r.on("click", ".js-send-two-factor-code", function() {
        var t = X(regeneratorRuntime.mark(function t(r) {
            var n, a, i, u, c, l, d, m, f, p, v, g, h, y, b, j, L, w, x, k;
            return regeneratorRuntime.wrap(function(t) {
                for (;;) switch (t.prev = t.next) {
                    case 0:
                        return n = r.currentTarget, o(n instanceof HTMLButtonElement, "app/assets/modules/github/sessions/two-factor.js:55"), a = n.form, o(a, "app/assets/modules/github/sessions/two-factor.js:57"), i = e.query(a, ".js-country-code-select", HTMLSelectElement).value, u = e.query(a, ".js-sms-number", HTMLInputElement).value, c = i + " " + u, hm(), null == (l = n.getAttribute("data-authenticity-token")) && (l = e.namedItem(a, "authenticity_token").value), (d = new FormData).append("number", c), d.append("authenticity_token", l), t.prev = 13, m = e.getAttribute(n, "data-url"), t.next = 17, s.fetch(m, {
                            method: "post",
                            body: d
                        });
                    case 17:
                        for (ym(), f = !0, p = !1, v = void 0, t.prev = 21, g = a.querySelectorAll(".js-2fa-enable")[Symbol.iterator](); !(f = (h = g.next()).done); f = !0)((y = h.value) instanceof HTMLInputElement || y instanceof HTMLButtonElement) && (y.disabled = !1);
                        t.next = 29;
                        break;
                    case 25:
                        t.prev = 25, t.t0 = t.catch(21), p = !0, v = t.t0;
                    case 29:
                        t.prev = 29, t.prev = 30, !f && g.return && g.return();
                    case 32:
                        if (t.prev = 32, !p) {
                            t.next = 35;
                            break
                        }
                        throw v;
                    case 35:
                        return t.finish(32);
                    case 36:
                        return t.finish(29);
                    case 37:
                        e.query(a, ".js-2fa-otp").focus(), t.next = 66;
                        break;
                    case 40:
                        if (t.prev = 40, t.t1 = t.catch(13), !t.t1.response) {
                            t.next = 47;
                            break
                        }
                        return t.next = 45, t.t1.response.text();
                    case 45:
                        bm(t.sent);
                    case 47:
                        for (b = !0, j = !1, L = void 0, t.prev = 50, w = a.querySelectorAll(".js-2fa-enable")[Symbol.iterator](); !(b = (x = w.next()).done); b = !0)((k = x.value) instanceof HTMLInputElement || k instanceof HTMLButtonElement) && (k.disabled = !0);
                        t.next = 58;
                        break;
                    case 54:
                        t.prev = 54, t.t2 = t.catch(50), j = !0, L = t.t2;
                    case 58:
                        t.prev = 58, t.prev = 59, !b && w.return && w.return();
                    case 61:
                        if (t.prev = 61, !j) {
                            t.next = 64;
                            break
                        }
                        throw L;
                    case 64:
                        return t.finish(61);
                    case 65:
                        return t.finish(58);
                    case 66:
                    case "end":
                        return t.stop()
                }
            }, t, this, [
                [13, 40],
                [21, 25, 29, 37],
                [30, , 32, 36],
                [50, 54, 58, 66],
                [59, , 61, 65]
            ])
        }));
        return function(e) {
            return t.apply(this, arguments)
        }
    }()), r.on("click", ".js-enable-enable-two-factor-auth-button", function() {
        var t = e.query(document, ".js-enable-two-factor-auth-button", HTMLButtonElement);
        t.disabled = !1, t.removeAttribute("aria-label"), t.classList.remove("tooltipped")
    }), t.observe(".js-two-factor-sms-fallback-button", function(t) {
        t.addEventListener("toggle", function(t) {
            var r = t.currentTarget;
            o(r instanceof Element, "app/assets/modules/github/sessions/two-factor.js:112");
            var n = !0,
                a = !1,
                s = void 0;
            try {
                for (var i, u = r.querySelectorAll(".flash")[Symbol.iterator](); !(n = (i = u.next()).done); n = !0) {
                    i.value.hidden = !0
                }
            } catch (e) {
                a = !0, s = e
            } finally {
                try {
                    !n && u.return && u.return()
                } finally {
                    if (a) throw s
                }
            }
            e.query(r, ".js-configure-sms-fallback").hidden = !1, e.query(r, ".js-verify-sms-fallback").hidden = !0
        })
    }), c.remoteForm(".js-two-factor-set-sms-fallback", function() {
        var t = X(regeneratorRuntime.mark(function t(r, n) {
            var a, s, o, i, u;
            return regeneratorRuntime.wrap(function(t) {
                for (;;) switch (t.prev = t.next) {
                    case 0:
                        return a = void 0, t.prev = 1, t.next = 4, n.text();
                    case 4:
                        a = t.sent, t.next = 14;
                        break;
                    case 7:
                        switch (t.prev = 7, t.t0 = t.catch(1), s = e.query(r, ".js-configure-sms-fallback"), o = e.query(r, ".js-verify-sms-fallback"), i = s.hidden ? o : s, u = e.query(i, ".flash"), t.t0.response.status) {
                            case 422:
                            case 429:
                                u.textContent = t.t0.response.text, u.hidden = !1
                        }
                    case 14:
                        if (!a) {
                            t.next = 24;
                            break
                        }
                        t.t1 = a.status, t.next = 200 === t.t1 ? 18 : 201 === t.t1 ? 18 : 202 === t.t1 ? 20 : 24;
                        break;
                    case 18:
                        return window.location.reload(), t.abrupt("break", 24);
                    case 20:
                        return e.query(r, ".js-configure-sms-fallback").hidden = !0, e.query(r, ".js-verify-sms-fallback").hidden = !1, e.query(r, ".js-fallback-otp").focus(), t.abrupt("break", 24);
                    case 24:
                    case "end":
                        return t.stop()
                }
            }, t, void 0, [
                [1, 7]
            ])
        }));
        return function(e, r) {
            return t.apply(this, arguments)
        }
    }()), t.observe("meta[name=user-login]", {
        constructor: HTMLMetaElement,
        initialize: function(t) {
            var n = t.content,
                a = String(!!n.length);
            try {
                window.localStorage.setItem("logged-in", a)
            } catch (e) {
                return
            }
            window.addEventListener("storage", function(t) {
                if (t.storageArea === window.localStorage && "logged-in" === t.key && ("true" === t.newValue || "false" === t.newValue) && t.newValue !== a) {
                    a = t.newValue;
                    var n = e.query(document, ".js-stale-session-flash");
                    n.classList.toggle("is-signed-in", "true" === a), n.classList.toggle("is-signed-out", "false" === a), n.classList.remove("d-none"), window.addEventListener("popstate", function(e) {
                        e.state && null != e.state.container && location.reload()
                    }), r.on("submit", "form", function(e) {
                        e.preventDefault()
                    })
                }
            })
        }
    }), t.observe(".js-contact-javascript-flag", {
        constructor: HTMLInputElement,
        add: function(e) {
            e.value = "true"
        }
    }), r.on("socket:message", ".js-notification-indicator", function(e) {
        o(e instanceof CustomEvent, "app/assets/modules/github/site/header-notifications.js:10");
        var t = e.currentTarget,
            r = e.detail.data;
        t.setAttribute("aria-label", r.aria_label), t.setAttribute("data-ga-click", r.ga_click), t.querySelector("span").setAttribute("class", r.span_class)
    });
    var jm = function() {
            var e = X(regeneratorRuntime.mark(function e() {
                var t;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                        case 0:
                            if (!Lm) {
                                e.next = 2;
                                break
                            }
                            return e.abrupt("return");
                        case 2:
                            return Lm = !0, t = "/site/keyboard_shortcuts?url=" + window.location.pathname, e.next = 6, q.dialog({
                                content: s.fetchSafeDocumentFragment(document, t),
                                dialogClass: "kb-shortcut-dialog container-xl"
                            });
                        case 6:
                            e.sent.addEventListener("dialog:remove", function() {
                                Lm = !1
                            }, {
                                once: !0
                            });
                        case 8:
                        case "end":
                            return e.stop()
                    }
                }, e, this)
            }));
            return function() {
                return e.apply(this, arguments)
            }
        }(),
        Lm = !1;
    r.on("click", ".js-keyboard-shortcuts", jm), document.addEventListener("keydown", function(e) {
        e.target instanceof Node && l.isFormField(e.target) || "?" === x(e) && jm()
    });
    var wm = function() {
        var t = X(regeneratorRuntime.mark(function t(r) {
            var n, a, s, o, i, u;
            return regeneratorRuntime.wrap(function(t) {
                for (;;) switch (t.prev = t.next) {
                    case 0:
                        return n = v.getMetadataByName(document, "site-status-api-url"), t.next = 3, window.fetch(n);
                    case 3:
                        return a = t.sent, t.next = 6, a.json();
                    case 6:
                        s = t.sent, "none" !== (o = s.status.indicator) && r instanceof HTMLElement && (e.query(r, ".js-site-status-message").textContent = s.status.description, e.query(r, ".js-site-status-time").setAttribute("datetime", s.page.updated_at), i = e.query(r, ".flash"), u = "minor" === o ? "flash-warn" : "flash-error", i.classList.add(u), r.hidden = !1);
                    case 9:
                    case "end":
                        return t.stop()
                }
            }, t, this)
        }));
        return function(e) {
            return t.apply(this, arguments)
        }
    }();
    t.observe(".js-site-status-container", {
        initialize: function(e) {
            wm(e)
        }
    }), n.onFocus(".js-skip-password-autofill", function(e) {
        o(e instanceof HTMLInputElement, "app/assets/modules/github/skip-autofill.js:9"), e.type = "password"
    }), r.on("click", ".js-smoothscroll-anchor", function(e) {
        var t = e.currentTarget;
        if (t instanceof HTMLAnchorElement) {
            var r = E.findFragmentTarget(document, t.hash);
            r && (r.scrollIntoView({
                behavior: "smooth"
            }), e.preventDefault())
        }
    });
    var xm = void 0;
    X(regeneratorRuntime.mark(function e() {
        return regeneratorRuntime.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
                case 0:
                    if (!Gi("SERVICE_WORKER") || !navigator.serviceWorker) {
                        e.next = 11;
                        break
                    }
                    return e.prev = 1, e.next = 4, navigator.serviceWorker.register("/service-worker.js");
                case 4:
                    xm = e.sent, e.next = 10;
                    break;
                case 7:
                    e.prev = 7, e.t0 = e.catch(1), console.error(e.t0);
                case 10:
                    xm && console.log("Service worker registration successful: ", xm);
                case 11:
                case "end":
                    return e.stop()
            }
        }, e, this, [
            [1, 7]
        ])
    }))(), r.on("click", ".js-subscribe-to-web-push", function(t) {
        if (window.PushManager) {
            t.preventDefault();
            var r = t.currentTarget;
            o(r instanceof HTMLButtonElement, "app/assets/modules/github/service-worker-registration.js:36"), o(r.form, "app/assets/modules/github/service-worker-registration.js:37");
            var n = e.query(r.form, "[name=authenticity_token]", HTMLInputElement).value;
            fetch("/web-push/public-key", {
                credentials: "same-origin"
            }).then(function(e) {
                return e.json()
            }).then(function(e) {
                return e.vapid_public_key
            }).then(function(e) {
                var t = new Uint8Array(e);
                return xm.pushManager.subscribe({
                    userVisibleOnly: !0,
                    applicationServerKey: t
                })
            }).then(function(e) {
                var t = e.toJSON(),
                    r = new FormData;
                return r.append("authenticity_token", n), r.append("endpoint", t.endpoint), r.append("p256dh", t.keys.p256dh), r.append("auth", t.keys.auth), fetch("/web-push-subscription", {
                    method: "POST",
                    body: r,
                    credentials: "same-origin"
                })
            }).then(function(e) {
                return console.log(e)
            }).catch(function(e) {
                console.error(e)
            })
        }
    });
    var km = {},
        Em = {},
        Tm = null,
        qm = 0,
        Sm = 0,
        Am = null,
        Mm = 1e3,
        Hm = 1008,
        Im = 1011,
        Rm = 1013,
        _m = 1012;
 
    function Cm() {
        var e = document.head && document.head.querySelector("link[rel=web-socket]");
        if (e) {
            o(e instanceof HTMLLinkElement, "Link must be of type HTMLLinkElement -- app/assets/modules/github/socket-channel.js:53");
            try {
                Tm = new WebSocket(e.href, void 0)
            } catch (e) {
                if (Tm = null, e.name && "SecurityError" !== e.name) throw new Error("error opening WebSocket: " + e.message + " (" + e.name + ")");
                return null
            }
            var t = setTimeout(function() {
                window.removeEventListener("online", Fm), Tm && Tm.close(), Tm = null
            }, 4e3);
            Tm.addEventListener("open", function() {
                for (var e in clearTimeout(t), qm += 1, Sm = 0, km) Tm && Tm.send("subscribe:" + e)
            }), Tm.addEventListener("message", function(e) {
                o(e instanceof MessageEvent, "app/assets/modules/github/socket-channel.js:84");
                var t = JSON.parse(String(e.data)),
                    n = t[0],
                    a = t[1];
                if (n && a) {
                    var s = Em[n] || [],
                        i = !0,
                        u = !1,
                        c = void 0;
                    try {
                        for (var l, d = s[Symbol.iterator](); !(i = (l = d.next()).done); i = !0) {
                            var m = l.value;
                            r.fire(m, "socket:message", {
                                data: a,
                                name: n
                            })
                        }
                    } catch (e) {
                        u = !0, c = e
                    } finally {
                        try {
                            !i && d.return && d.return()
                        } finally {
                            if (u) throw c
                        }
                    }
                }
            })
        }
    }
 
    function Fm(e) {
        if (!1 !== navigator.onLine) {
            if (qm >= 5 || e.code === Hm || e.code === Im) return window.removeEventListener("online", Fm), Tm && Tm.close(Mm, "give-up-reconnects"), void(Tm = null);
            Sm += 1;
            var t = null;
            if (e.code === Rm || e.code === _m) t = 5e3;
            else {
                var r = 5 * Math.random();
                t = 1e3 * Math.pow(2, Sm) * r
            }
            Am && clearTimeout(Am), Am = setTimeout(Cm, t)
        }
    }
 
    function Pm(e) {
        var t = e.getAttribute("data-channel");
        return t ? t.split(/\s+/) : []
    }
    window.WebSocket && (t.observe(".js-socket-channel[data-channel]", {
        add: function(e) {
            if (Tm || Cm(), Tm) {
                var t = !0,
                    r = !1,
                    n = void 0;
                try {
                    for (var a, s = Pm(e)[Symbol.iterator](); !(t = (a = s.next()).done); t = !0) {
                        var o = a.value;
                        Tm.readyState !== WebSocket.OPEN || km[o] || Tm.send("subscribe:" + o), km[o] = !0, null == Em[o] && (Em[o] = []), Em[o].push(e)
                    }
                } catch (e) {
                    r = !0, n = e
                } finally {
                    try {
                        !t && s.return && s.return()
                    } finally {
                        if (r) throw n
                    }
                }
            }
        },
        remove: function(e) {
            var t = !0,
                r = !1,
                n = void 0;
            try {
                for (var a, s = Pm(e)[Symbol.iterator](); !(t = (a = s.next()).done); t = !0) {
                    var o = a.value,
                        i = Em[o];
                    if (i) {
                        var u = i.indexOf(e); - 1 !== u && i.splice(u, 1)
                    }
                }
            } catch (e) {
                r = !0, n = e
            } finally {
                try {
                    !t && s.return && s.return()
                } finally {
                    if (r) throw n
                }
            }
        }
    }), window.addEventListener("online", Fm), window.addEventListener("offline", function() {
        Tm && Tm.close(Mm, "navigator-offline")
    })), t.observe("form.js-auto-replay-enforced-sso-request", {
        constructor: HTMLFormElement,
        initialize: function(e) {
            l.submit(e)
        }
    });
    var Nm = function() {
        var t = X(regeneratorRuntime.mark(function t(r) {
            var n, a, o, i, u, c, l, d;
            return regeneratorRuntime.wrap(function(t) {
                for (;;) switch (t.prev = t.next) {
                    case 0:
                        if (n = r.querySelector(".js-dropdown-details"), (a = r.querySelector(".js-status-dropdown-menu") || r.closest(".js-status-dropdown-menu")) instanceof HTMLElement) {
                            t.next = 4;
                            break
                        }
                        return t.abrupt("return");
                    case 4:
                        return o = e.query(a, ".js-status-loader"), i = e.query(a, ".js-status-loading"), u = e.query(a, ".js-status-error"), c = e.getAttribute(o, "data-contents-url"), i.classList.remove("d-none"), u.classList.add("d-none"), l = void 0, t.prev = 11, t.next = 14, V();
                    case 14:
                        return t.next = 16, s.fetchSafeDocumentFragment(document, c);
                    case 16:
                        l = t.sent, t.next = 23;
                        break;
                    case 19:
                        t.prev = 19, t.t0 = t.catch(11), i.classList.add("d-none"), u.classList.remove("d-none");
                    case 23:
                        l && (o.replaceWith(l), e.query(a, ".js-details-container").classList.add("open"), (d = document.body) && n && a.classList.contains("js-append-menu-to-body") && Dm(d, a, n));
                    case 24:
                    case "end":
                        return t.stop()
                }
            }, t, this, [
                [11, 19]
            ])
        }));
        return function(e) {
            return t.apply(this, arguments)
        }
    }();
 
    function Dm(e, t, r) {
        var n = e.getBoundingClientRect().height,
            a = t.getBoundingClientRect(),
            s = r.getBoundingClientRect(),
            o = s.top;
        o + a.height + 10 >= n && (o = Math.max(n - a.height - 10, 0));
        var i = s.right;
        null != r.closest(".js-build-status-to-the-left") && (i = Math.max(s.left - a.width - 10, 0)), t.style.top = o + "px", t.style.left = i + "px", t.style.right = "auto"
    }
 
    function Om(e) {
        var t = e.currentTarget;
        o(t instanceof Element, "app/assets/modules/github/statuses.js:113"), Nm(t)
    }
    r.on("toggle", ".js-build-status .js-dropdown-details", function(t) {
        var r = t.currentTarget,
            n = r.querySelector(".js-status-dropdown-menu");
        if (n) {
            r.addEventListener("toggle", s), n.classList.contains("js-close-menu-on-scroll") && window.addEventListener("scroll", o, {
                capture: !0,
                passive: !0
            }), n.classList.remove("d-none"), e.query(n, ".js-details-container").classList.add("open");
            var a = document.body;
            a && n.classList.contains("js-append-menu-to-body") && (a.appendChild(n), Dm(a, n, r))
        }
 
        function s() {
            r.hasAttribute("open") || i()
        }
 
        function o(e) {
            n.contains(e.target) || i()
        }
 
        function i() {
            r.removeAttribute("open"), n.classList.add("d-none"), r.appendChild(n), r.removeEventListener("toggle", s), window.removeEventListener("scroll", o)
        }
    }, {
        capture: !0
    }), r.on("click", ".js-status-retry", function(e) {
        var t = e.currentTarget;
        Nm(t)
    }), t.observe(".js-build-status", {
        add: function(e) {
            e.addEventListener("mouseenter", Om, {
                once: !0
            })
        },
        remove: function(e) {
            e.removeEventListener("mouseenter", Om)
        }
    });
    var Bm = !1;
 
    function Um(e, n) {
        var a, s = (a = X(regeneratorRuntime.mark(function e(t) {
            var a;
            return regeneratorRuntime.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                    case 0:
                        if (Bm) {
                            e.next = 6;
                            break
                        }
                        return t.preventDefault(), t.stopImmediatePropagation(), e.next = 5, M(n);
                    case 5:
                        try {
                            a = t.target, o(a instanceof HTMLFormElement, "app/assets/modules/github/sudo-required.js:22"), Bm = !0, l.submit(a), Bm = !1
                        } catch (e) {
                            r.fire(t.target, "sudo:failed", {
                                error: e
                            })
                        }
                    case 6:
                    case "end":
                        return e.stop()
                }
            }, e, this)
        })), function(e) {
            return a.apply(this, arguments)
        });
        t.observe(e, {
            add: function(e) {
                e.addEventListener("submit", s)
            },
            remove: function(e) {
                e.removeEventListener("submit", s)
            }
        })
    }
 
    function Vm(t, n) {
        var a = e.closest(t, ".js-survey-question-form"),
            s = e.query(a, "input.js-survey-other-text", HTMLInputElement);
        a.classList.toggle("is-other-selected", n), s.hidden = !n, n ? (s.required = !0, s.focus()) : s.required = !1, r.fire(s, "change")
    }
    Um("form.js-sudo-required", "low"), Um("form.js-high-risk-sudo-required", "high"), r.on("change", "select.js-survey-select", function(e) {
        var t = e.currentTarget;
        o(t instanceof HTMLSelectElement, "app/assets/modules/github/survey.js:24"), Vm(t, t.options[t.selectedIndex].classList.contains("js-survey-option-other"))
    }), r.on("change", "input.js-survey-radio", function(e) {
        var t = e.currentTarget;
        o(t instanceof HTMLInputElement, "app/assets/modules/github/survey.js:30"), Vm(t, t.classList.contains("js-survey-radio-other"))
    });
    var zm = function() {
        var t = X(regeneratorRuntime.mark(function t(r, n, a) {
            var o, i, u, c, l, d;
            return regeneratorRuntime.wrap(function(t) {
                for (;;) switch (t.prev = t.next) {
                    case 0:
                        return o = e.getAttribute(r, "data-tagsearch-url"), i = e.getAttribute(r, "data-tagsearch-path"), u = e.getAttribute(r, "data-tagsearch-ref"), c = new URL(o, window.location.origin), (l = new URLSearchParams).set("q", n), l.set("context", i), l.set("ref", u), l.set("lang", a), c.search = l.toString(), t.next = 12, s.fetchText(c);
                    case 12:
                        if (d = t.sent, !/js-tagsearch-no-definitions/.test(d)) {
                            t.next = 15;
                            break
                        }
                        return t.abrupt("return", "");
                    case 15:
                        return t.abrupt("return", d);
                    case 16:
                    case "end":
                        return t.stop()
                }
            }, t, this)
        }));
        return function(e, r, n) {
            return t.apply(this, arguments)
        }
    }();
 
    function Wm(e, t, r) {
        var n = void 0,
            a = void 0;
        if (document.caretPositionFromPoint) {
            var s = document.caretPositionFromPoint(t, r);
            s && (n = s.offsetNode, a = s.offset)
        } else if (document.caretRangeFromPoint) {
            var o = document.caretRangeFromPoint(t, r);
            o && (n = o.startContainer, a = o.startOffset)
        }
        if (n && "number" == typeof a) {
            var i = n.textContent;
            if (!i) return null;
            var u = function(e, t, r) {
                var n = void 0;
                for (; n = t.exec(e);) {
                    var a = n.index + n[0].length;
                    if (n.index < r && r < a) return [n[0], n.index, a]
                }
                return null
            }(i, e, a);
            if (!u) return null;
            var c = document.createRange();
            return c.setStart(n, u[1]), c.setEnd(n, u[2]), c
        }
    }
 
    function $m(e) {
        var t = e.closest(".highlight");
        if (t) {
            var r = !0,
                n = !1,
                a = void 0;
            try {
                for (var s, o = t.classList[Symbol.iterator](); !(r = (s = o.next()).done); r = !0) {
                    switch (s.value) {
                        case "highlight-source-go":
                            return "Go";
                        case "highlight-source-js":
                            return "JavaScript";
                        case "highlight-source-python":
                            return "Python";
                        case "highlight-source-ruby":
                            return "Ruby";
                        case "highlight-source-ts":
                            return "TypeScript"
                    }
                }
            } catch (e) {
                n = !0, a = e
            } finally {
                try {
                    !r && o.return && o.return()
                } finally {
                    if (n) throw a
                }
            }
        }
        return null
    }
    t.observe(".js-tagsearch-popover", {
        constructor: HTMLElement,
        subscribe: function(t) {
            var r, n = (r = X(regeneratorRuntime.mark(function r(n) {
                    var s, c, d, m, f, p, v, g, h, y, b, j, L;
                    return regeneratorRuntime.wrap(function(r) {
                        for (;;) switch (r.prev = r.next) {
                            case 0:
                                if (s = Wm(/\w+[!?]?/g, n.clientX, n.clientY)) {
                                    r.next = 3;
                                    break
                                }
                                return r.abrupt("return");
                            case 3:
                                c = s.commonAncestorContainer.parentElement, o(c, "app/assets/modules/github/tagsearch.js:23"), d = !0, m = !1, f = void 0, r.prev = 8, p = c.classList[Symbol.iterator]();
                            case 10:
                                if (d = (v = p.next()).done) {
                                    r.next = 17;
                                    break
                                }
                                if (g = v.value, !["pl-token", "pl-c", "pl-s", "pl-k"].includes(g)) {
                                    r.next = 14;
                                    break
                                }
                                return r.abrupt("return");
                            case 14:
                                d = !0, r.next = 10;
                                break;
                            case 17:
                                r.next = 23;
                                break;
                            case 19:
                                r.prev = 19, r.t0 = r.catch(8), m = !0, f = r.t0;
                            case 23:
                                r.prev = 23, r.prev = 24, !d && p.return && p.return();
                            case 26:
                                if (r.prev = 26, !m) {
                                    r.next = 29;
                                    break
                                }
                                throw f;
                            case 29:
                                return r.finish(26);
                            case 30:
                                return r.finish(23);
                            case 31:
                                if ((h = s.toString()) && !h.match(/\n|\s|[();&.=",]/)) {
                                    r.next = 34;
                                    break
                                }
                                return r.abrupt("return");
                            case 34:
                                if ((y = u.get(c)) || (y = new Set, u.set(c, y)), !y.has(h)) {
                                    r.next = 38;
                                    break
                                }
                                return r.abrupt("return");
                            case 38:
                                if (y.add(h), "HTML+ERB" !== (b = e.getAttribute(t, "data-tagsearch-lang"))) {
                                    r.next = 46;
                                    break
                                }
                                if (!c.closest(".pl-sre")) {
                                    r.next = 45;
                                    break
                                }
                                b = "Ruby", r.next = 46;
                                break;
                            case 45:
                                return r.abrupt("return");
                            case 46:
                                if (!a.classList.contains("js-code-block-container")) {
                                    r.next = 50;
                                    break
                                }
                                if (b = $m(c)) {
                                    r.next = 50;
                                    break
                                }
                                return r.abrupt("return");
                            case 50:
                                return r.next = 52, zm(t, h, b);
                            case 52:
                                if (j = r.sent) {
                                    r.next = 55;
                                    break
                                }
                                return r.abrupt("return");
                            case 55:
                                (L = document.createElement("span")).classList.add("pl-token"), L.addEventListener("click", l), i.set(L, j), s.surroundContents(L);
                            case 60:
                            case "end":
                                return r.stop()
                        }
                    }, r, this, [
                        [8, 19, 23, 31],
                        [24, , 26, 30]
                    ])
                })), function(e) {
                    return r.apply(this, arguments)
                }),
                a = e.query(document, ".js-file-line-container, .js-code-block-container"),
                s = e.query(t, ".js-tagsearch-popover-content"),
                i = new WeakMap,
                u = new WeakMap,
                c = void 0;
 
            function l(r) {
                if (!(r.altKey || r.ctrlKey || r.metaKey)) {
                    var n = r.currentTarget;
                    o(n instanceof HTMLElement, "app/assets/modules/github/tagsearch.js:72"), n === c ? d() : (function(r) {
                        c && c.classList.remove("active");
                        (c = r).classList.add("active"), s.innerHTML = i.get(r) || "";
                        var n = r.getClientRects()[0];
                        t.style.position = "absolute", t.style.top = window.scrollY + n.bottom + 7 + "px", t.style.left = window.scrollX + n.left + "px";
                        var a = r.closest(".js-file-line");
                        a && function(t) {
                            var r = t.id.replace(/^LC/, ""),
                                n = s.querySelector(".js-tagsearch-looking-at-def"),
                                a = s.querySelector(".js-tagsearch-defined-on");
                            if (!r || !n || !a) return;
                            e.getAttribute(n, "data-row") === r && (n.hidden = !1, a.hidden = !0)
                        }(a)
                    }(n), function() {
                        if (!t.hidden) return;
                        t.hidden = !1, document.addEventListener("click", m), document.addEventListener("keyup", f)
                    }()), r.preventDefault()
                }
            }
 
            function d() {
                t.hidden || (t.hidden = !0, c && c.classList.remove("active"), c = null, document.removeEventListener("click", m), document.removeEventListener("keyup", f))
            }
 
            function m(e) {
                var r = e.target;
                r instanceof Node && (o(c, "app/assets/modules/github/tagsearch.js:138"), t.contains(r) || c.contains(r) || d())
            }
 
            function f(e) {
                switch (e.key) {
                    case "Escape":
                        d()
                }
            }
            return a.addEventListener("mousemove", n), {
                unsubscribe: function() {
                    a.removeEventListener("mousemove", n)
                }
            }
        }
    });
    var Km = function() {
            var t = X(regeneratorRuntime.mark(function t() {
                var r, n, a, s, o, i, u, c, l, d, m;
                return regeneratorRuntime.wrap(function(t) {
                    for (;;) switch (t.prev = t.next) {
                        case 0:
                            if (i = function() {
                                    n === r.value && Xm && (Xm.value = n)
                                }, o = function(t) {
                                    if (n === r.value) {
                                        var o = t.normalized_ref;
                                        if (s.innerHTML = null == t.message_html ? "" : t.message_html, !o) e.query(s, "code").textContent = a;
                                        Xm && (Xm.value = o)
                                    }
                                }, r = e.query(document, ".js-quick-pull-new-branch-name", HTMLInputElement), n = r.value, null != (a = r.getAttribute("data-generated-branch"))) {
                                t.next = 7;
                                break
                            }
                            throw new Error("Missing attribute `data-generated-branch`");
                        case 7:
                            return s = e.query(document, ".js-quick-pull-normalization-info"), u = r.getAttribute("data-check-authenticity-token") || "", (c = new FormData).append("ref", n), c.append("authenticity_token", u), l = e.getAttribute(r, "data-check-url"), d = k.fetchJSON(l, {
                                method: "post",
                                body: c
                            }), t.next = 16, Gm.push(d);
                        case 16:
                            m = t.sent;
                            try {
                                o(m)
                            } catch (e) {
                                i()
                            }
                        case 18:
                        case "end":
                            return t.stop()
                    }
                }, t, this)
            }));
            return function() {
                return t.apply(this, arguments)
            }
        }(),
        Jm = function() {
            var t = X(regeneratorRuntime.mark(function t(r) {
                var n, a, s, o, u, c, l, d, m, f, p, v, g, h, y, b, j, L, w, x, E, T;
                return regeneratorRuntime.wrap(function(t) {
                    for (;;) switch (t.prev = t.next) {
                        case 0:
                            r.classList.add("is-loading"), tf(), n = e.query(r, '[name="filename"]', HTMLInputElement).value, a = {}, s = !0, o = !1, u = void 0, t.prev = 7, c = e.querySelectorAll(document, ".js-template-form", HTMLFormElement)[Symbol.iterator]();
                        case 9:
                            if (s = (l = c.next()).done) {
                                t.next = 35;
                                break
                            }
                            for (d = l.value, m = e.query(d, '[name="filename"]', HTMLInputElement).value, a[m] = {}, f = !0, p = !1, v = void 0, t.prev = 16, g = P(d)[Symbol.iterator](); !(f = (h = g.next()).done); f = !0) y = h.value, b = re(y, 2), j = b[0], L = b[1], a[m][j] = L;
                            t.next = 24;
                            break;
                        case 20:
                            t.prev = 20, t.t0 = t.catch(16), p = !0, v = t.t0;
                        case 24:
                            t.prev = 24, t.prev = 25, !f && g.return && g.return();
                        case 27:
                            if (t.prev = 27, !p) {
                                t.next = 30;
                                break
                            }
                            throw v;
                        case 30:
                            return t.finish(27);
                        case 31:
                            return t.finish(24);
                        case 32:
                            s = !0, t.next = 9;
                            break;
                        case 35:
                            t.next = 41;
                            break;
                        case 37:
                            t.prev = 37, t.t1 = t.catch(7), o = !0, u = t.t1;
                        case 41:
                            t.prev = 41, t.prev = 42, !s && c.return && c.return();
                        case 44:
                            if (t.prev = 44, !o) {
                                t.next = 47;
                                break
                            }
                            throw u;
                        case 47:
                            return t.finish(44);
                        case 48:
                            return t.finish(41);
                        case 49:
                            return t.next = 51, k.fetchJSON(r.action, {
                                method: "POST",
                                body: JSON.stringify({
                                    current: n,
                                    templates: a
                                })
                            });
                        case 51:
                            w = t.sent, x = i.parseHTML(document, w.html), e.closest(r, ".js-template-preview").replaceWith(x), E = e.query(document, ".js-hidden-template-fields"), (T = E.querySelector('[data-filename="' + w.filename + '"]')) instanceof HTMLInputElement ? T.value = w.markdown : ((T = document.createElement("input")).type = "hidden", T.name = "templates[][" + w.filename + "]", T.setAttribute("data-filename", w.filename), T.value = w.markdown, E.append(T)), r.classList.remove("is-loading"), tf();
                        case 59:
                        case "end":
                            return t.stop()
                    }
                }, t, this, [
                    [7, 37, 41, 49],
                    [16, 20, 24, 32],
                    [25, , 27, 31],
                    [42, , 44, 48]
                ])
            }));
            return function(e) {
                return t.apply(this, arguments)
            }
        }(),
        Gm = new a,
        Xm = null,
        Qm = u(Km, 200);
 
    function Ym() {
        return document.querySelectorAll(".js-template-editor").length > 0
    }
 
    function Zm(e) {
        e.classList.toggle("section-focus")
    }
 
    function ef() {
        return document.querySelectorAll(".js-template-form.is-loading").length > 0 ? "loading" : document.querySelectorAll(".js-template-form.is-errored").length > 0 ? "error" : "ok"
    }
 
    function tf() {
        var t = e.query(document, ".js-commit-templates-form", HTMLFormElement),
            r = e.query(t, ".js-blob-submit", HTMLButtonElement),
            n = e.query(document, ".js-template-commit-form-error-message"),
            a = e.query(document, ".js-template-commit-form-loading-message");
        switch (ef()) {
            case "loading":
                n.classList.add("d-none"), a.classList.remove("d-none"), t.setAttribute("disabled", "disabled"), r.setAttribute("disabled", "disabled");
                break;
            case "error":
                n.classList.remove("d-none"), a.classList.add("d-none"), t.setAttribute("disabled", "disabled"), r.setAttribute("disabled", "disabled");
                break;
            default:
                n.classList.add("d-none"), a.classList.add("d-none"), t.removeAttribute("disabled"), r.removeAttribute("disabled")
        }
    }
 
    function rf() {
        var t = !0,
            r = !1,
            n = void 0;
        try {
            for (var a, s = e.querySelectorAll(document, ".js-template-form", HTMLFormElement)[Symbol.iterator](); !(t = (a = s.next()).done); t = !0) {
                var o = a.value;
                Jm(o)
            }
        } catch (e) {
            r = !0, n = e
        } finally {
            try {
                !t && s.return && s.return()
            } finally {
                if (r) throw n
            }
        }
    }
 
    function nf(e) {
        if (! function(e) {
                var t = void 0;
                try {
                    t = new URL(e.url)
                } catch (e) {
                    return !0
                }
                return t.host !== window.location.host
            }(e) && ! function(e) {
                return /[?&]_pjax=/.test(e.url)
            }(e)) {
            var t, r = null != (t = document.querySelector(".js-timeline-marker")) ? t.getAttribute("data-last-modified") : null;
            r && e.headers.set("X-Timeline-Last-Modified", r)
        }
    }
    t.observe(".js-custom-fields-drag-container", function(e) {
        B.create(e, {
            draggable: ".js-custom-field-draggable",
            handle: ".js-draggable-box-icon"
        })
    }), t.observe(".js-template-form .js-issue-labels", {
        add: function(t) {
            var r = t.closest(".js-issue-template-labels-container");
            if (r) {
                var n = e.query(r, ".js-issue-template-labels", HTMLInputElement);
                n.value = "";
                var a = !0,
                    s = !1,
                    o = void 0;
                try {
                    for (var i, u = t.children[Symbol.iterator](); !(a = (i = u.next()).done); a = !0) {
                        var c = i.value.getAttribute("data-name");
                        c && !n.value.includes(c) && ("" === n.value ? n.value = c : n.value = n.value + ", " + c)
                    }
                } catch (e) {
                    s = !0, o = e
                } finally {
                    try {
                        !a && u.return && u.return()
                    } finally {
                        if (s) throw o
                    }
                }
            }
        }
    }), t.observe(".js-template-form .js-issue-assignees", {
        add: function(t) {
            var r = t.closest(".js-issue-template-assignees-container");
            o(r instanceof HTMLElement, "app/assets/modules/github/template-editor.js:105");
            var n = e.query(r, ".js-issue-template-assignees", HTMLInputElement);
            n.value = "";
            var a = !0,
                s = !1,
                i = void 0;
            try {
                for (var u, c = t.children[Symbol.iterator](); !(a = (u = c.next()).done); a = !0) {
                    var l = u.value.querySelector("span");
                    if (l) {
                        var d = l.getAttribute("data-assignee-name");
                        d && !n.value.includes(d) && ("" === n.value ? n.value = d : n.value = n.value + ", " + d)
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
    }), r.on("change", ".js-quick-pull-choice-option", function(t) {
        if (Ym()) {
            var r = t.currentTarget;
            o(r instanceof HTMLInputElement, "app/assets/modules/github/template-editor.js:133"), e.query(document, ".js-commit-branch-name").classList.toggle("d-none", "quick-pull" !== r.value);
            var n = e.query(document, ".js-quick-pull-new-branch-name");
            "quick-pull" === r.value ? n.setAttribute("required", "required") : n.removeAttribute("required")
        }
    }), n.onInput(".js-quick-pull-new-branch-name", function(t) {
        if (Ym()) {
            var r = t.target;
            o(r instanceof HTMLInputElement, "app/assets/modules/github/template-editor.js:150");
            var n = r.value;
            e.query(document, ".js-quick-pull-target-branch", HTMLInputElement).value = n, n.length && Qm()
        }
    }), n.onInput(".js-synced-template-input", function(t) {
        var r = t.target;
        o(r instanceof HTMLInputElement, "app/assets/modules/github/template-editor.js:161");
        var n = r.getAttribute("data-sync");
        if (n) {
            var a = e.closest(r, ".js-sync-container"),
                s = e.querySelectorAll(a, '[data-sync-with="' + n + '"]'),
                i = r.value;
            if ("" !== i.trim()) {
                var u = !0,
                    c = !1,
                    l = void 0;
                try {
                    for (var d, m = s[Symbol.iterator](); !(u = (d = m.next()).done); u = !0) {
                        d.value.textContent = r.value
                    }
                } catch (e) {
                    c = !0, l = e
                } finally {
                    try {
                        !u && m.return && m.return()
                    } finally {
                        if (c) throw l
                    }
                }
                if ("name" === n) e.query(a, ".js-sync-filename", HTMLInputElement).value = (i.replace(/[^\w]/g, "-") + ".md").toLowerCase()
            } else {
                var f = !0,
                    p = !1,
                    v = void 0;
                try {
                    for (var g, h = s[Symbol.iterator](); !(f = (g = h.next()).done); f = !0) {
                        var y = g.value,
                            b = y.getAttribute("data-sync-blank");
                        b && (y.innerHTML = '<span class="text-gray">' + b + "</span>")
                    }
                } catch (e) {
                    p = !0, v = e
                } finally {
                    try {
                        !f && h.return && h.return()
                    } finally {
                        if (p) throw v
                    }
                }
            }
        }
    }), r.on("submit", ".js-template-form", function(e) {
        e.preventDefault();
        var t = e.currentTarget;
        o(t instanceof HTMLFormElement, "app/assets/modules/github/template-editor.js:295"), Jm(t)
    }), r.on("click", ".js-toggle-template-commit", function() {
        var t = e.query(document, ".js-template-commit-pane");
        t.classList.toggle("d-none"), t.classList.contains("d-none") || rf()
    }), r.on("submit", ".js-commit-templates-form", function(e) {
        "ok" !== ef() && e.preventDefault(), tf()
    }), r.on("click", ".js-refresh-template-content", function() {
        var t = X(regeneratorRuntime.mark(function t(r) {
            var n, a, o, i, u, c, l;
            return regeneratorRuntime.wrap(function(t) {
                for (;;) switch (t.prev = t.next) {
                    case 0:
                        if (n = r.currentTarget, a = e.closest(n, ".js-template-form"), (o = e.query(a, ".js-template-content-preview")).innerHTML = '<span class="text-gray">Loading preview...</span>', i = e.query(a, ".js-template-content-textarea", HTMLTextAreaElement).value, u = n.getAttribute("data-markdown-preview-url")) {
                            t.next = 8;
                            break
                        }
                        return t.abrupt("return");
                    case 8:
                        return (c = new FormData).append("markdown", i), t.next = 12, s.fetchText(u, {
                            method: "POST",
                            body: c
                        });
                    case 12:
                        l = t.sent, o.innerHTML = l;
                    case 14:
                    case "end":
                        return t.stop()
                }
            }, t, this)
        }));
        return function(e) {
            return t.apply(this, arguments)
        }
    }()), r.on("click", ".js-custom-template-toggle", function(t) {
        var r = t.target,
            n = e.closest(r, ".js-template-preview"),
            a = !n.classList.contains("expand-preview");
        if (function() {
                var e = document.querySelectorAll(".js-template-preview"),
                    t = !0,
                    r = !1,
                    n = void 0;
                try {
                    for (var a, s = e[Symbol.iterator](); !(t = (a = s.next()).done); t = !0) a.value.classList.remove("expand-preview")
                } catch (e) {
                    r = !0, n = e
                } finally {
                    try {
                        !t && s.return && s.return()
                    } finally {
                        if (r) throw n
                    }
                }
            }(), a) n.classList.add("expand-preview"), n.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
        else {
            var s = e.query(n, ".js-template-form", HTMLFormElement);
            Jm(s)
        }
    }), r.on("click", ".js-remove-template-button", function(t) {
        var r = e.closest(t.target, ".js-template-preview"),
            n = e.getAttribute(r, "data-filename"),
            a = e.query(document, ".js-hidden-template-fields").querySelector('[data-filename="' + n + '"]');
        a && a.remove(), r.remove(), rf()
    }), r.on("click", ".js-append-custom-field-option", function(t) {
        var r = t.target,
            n = r.getAttribute("data-source");
        if (n) {
            var a = e.query(document, "#" + n);
            r.insertAdjacentHTML("beforebegin", a.innerHTML)
        }
    }), r.on("click", ".js-remove-custom-field-option", function(t) {
        e.closest(t.target, ".js-custom-field-option").remove()
    }), r.on("click", ".js-edit-custom-field", function(t) {
        Zm(e.closest(t.target, ".js-custom-field-editor"))
    }), r.on("click", ".js-edit-custom-field-header", function(t) {
        e.closest(t.target, ".js-custom-field-header").classList.toggle("section-focus")
    }), r.on("click", ".js-remove-custom-field", function(t) {
        e.closest(t.target, ".js-custom-field-editor").remove()
    }), r.on("click", ".js-add-template-button", function(t) {
        var r = t.currentTarget,
            n = e.query(document, ".js-templates-container"),
            a = r.getAttribute("data-source");
        if (a) {
            var s = e.query(document, "#" + a);
            n.insertAdjacentHTML("beforeend", s.innerHTML)
        }
    }), r.on("click", ".js-add-custom-field-button", function(t) {
        var r = t.currentTarget,
            n = e.closest(r, ".js-template-preview"),
            a = r.getAttribute("data-source");
        if (a) {
            var s = e.query(document, "#" + a),
                o = i.parseHTML(document, s.innerHTML).firstElementChild;
            if (o instanceof HTMLElement) Zm(o), e.query(n, ".js-custom-fields-container").insertAdjacentElement("beforeend", o)
        }
    }), t.observe(".js-discussion", function() {
        var e = void 0;
 
        function r() {
            e = new WeakSet(document.querySelectorAll(".js-timeline-item"))
        }
        r(), document.addEventListener("pjax:end", r), t.observe(".js-timeline-item", function(t) {
            e.has(t) || function(e) {
                var t = document.querySelector(".js-global-screen-reader-notice");
                t && (t.textContent = "", t.textContent = function(e) {
                    return (e.innerText || "").trim()
                }(e))
            }(t)
        })
    }), c.remoteForm(".js-needs-timeline-marker-header", function(e, t, r) {
        nf(r)
    }), r.on("deprecatedAjaxSend", "[data-remote]", function(e) {
        o(e instanceof CustomEvent, "app/assets/modules/github/timeline/marker.js:50"), nf(e.detail.request)
    });
    var af = function() {
        var e = X(regeneratorRuntime.mark(function e(t) {
            var r, n, a, o, i, u, c, l, d, m, f;
            return regeneratorRuntime.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                    case 0:
                        if (r = document.getElementById("js-timeline-progressive-loader")) {
                            e.next = 3;
                            break
                        }
                        return e.abrupt("return");
                    case 3:
                        if (n = r.getAttribute("data-timeline-item-src")) {
                            e.next = 6;
                            break
                        }
                        return e.abrupt("return");
                    case 6:
                        return a = new URL(n, window.location.origin), (o = new URLSearchParams(a.search.slice(1))).append("anchor", t), a.search = o.toString(), i = void 0, e.prev = 11, e.next = 14, s.fetchSafeDocumentFragment(document, a);
                    case 14:
                        i = e.sent, e.next = 20;
                        break;
                    case 17:
                        return e.prev = 17, e.t0 = e.catch(11), e.abrupt("return");
                    case 20:
                        if (u = i.querySelector(".js-timeline-item")) {
                            e.next = 23;
                            break
                        }
                        return e.abrupt("return");
                    case 23:
                        if (c = u.getAttribute("data-gid")) {
                            e.next = 26;
                            break
                        }
                        return e.abrupt("return");
                    case 26:
                        (l = document.querySelector(".js-timeline-item[data-gid='" + c + "']")) ? (l.replaceWith(u), (d = document.getElementById(t)) && sf(d)) : ((m = document.getElementById("js-progressive-timeline-item-container")) && m.replaceWith(i), (f = document.getElementById(t)) && sf(f));
                    case 28:
                    case "end":
                        return e.stop()
                }
            }, e, this, [
                [11, 17]
            ])
        }));
        return function(t) {
            return e.apply(this, arguments)
        }
    }();
 
    function sf(e) {
        ! function(e) {
            var t = e.closest("details, .js-details-container");
            if (!t) return;
            o(t instanceof HTMLElement, "app/assets/modules/github/timeline/progressive.js:86"), "DETAILS" === t.nodeName ? t.setAttribute("open", "open") : F.isDetailsTargetExpanded(t) || F.toggleDetailsTarget(t)
        }(e);
        var t = e.querySelector("[href='#" + e.id + "']");
        t && t.click()
    }
 
    function of () {
        return window.location.hash.slice(1)
    }
    X(regeneratorRuntime.mark(function e() {
        var t;
        return regeneratorRuntime.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
                case 0:
                    return e.next = 2, h.ready;
                case 2:
                    if (t = of ()) {
                        e.next = 5;
                        break
                    }
                    return e.abrupt("return");
                case 5:
                    document.getElementById(t) || af(t);
                case 7:
                case "end":
                    return e.stop()
            }
        }, e, void 0)
    }))(), t.observe(".js-timeline-progressive-focus-container", function(e) {
        var t = of ();
        if (t) {
            var r = document.getElementById(t);
            r && e.contains(r) && sf(r)
        }
    });
    var uf = "navigationStart";
 
    function cf() {
        var e = {};
        e.crossBrowserLoadEvent = Date.now();
        var t = window.performance && window.performance.timing;
        if (t)
            for (var r in t) {
                var n = t[r];
                "number" == typeof n && (e[r] = n)
            } else {
                var a = function() {
                    var e = w.getItem(uf);
                    if (e) return parseInt(e, 10)
                }();
                null != a && (e.simulatedNavigationStart = a)
            }
        var s = function() {
            if (window.performance && "timeOrigin" in window.performance && window.performance.getEntriesByType) {
                var e = window.performance.getEntriesByType("paint");
                if (e.length) {
                    var t = e.find(function(e) {
                        return "first-paint" === e.name
                    });
                    if (t) return Math.round((performance.timeOrigin + t.startTime) / 1e6)
                }
            }
        }();
        return null != s && (e.chromeFirstPaintTime = s), e
    }
 
    function lf() {
        var e = [],
            t = window.performance;
        if (t && t.getEntriesByType) {
            var r = !0,
                n = !1,
                a = void 0;
            try {
                for (var s, o = t.getEntriesByType("resource")[Symbol.iterator](); !(r = (s = o.next()).done); r = !0) {
                    var i = s.value,
                        u = {};
                    for (var c in e.push(u), i) {
                        var l = i[c];
                        "number" != typeof l && "string" != typeof l || (u[c] = l)
                    }
                }
            } catch (e) {
                n = !0, a = e
            } finally {
                try {
                    !r && o.return && o.return()
                } finally {
                    if (n) throw a
                }
            }
        }
        return e
    }
 
    function df() {
        var e = [],
            t = window.performance;
        if (t && t.getEntriesByType) {
            var r = !0,
                n = !1,
                a = void 0;
            try {
                for (var s, o = t.getEntriesByType("navigation")[Symbol.iterator](); !(r = (s = o.next()).done); r = !0) {
                    var i = s.value,
                        u = {};
                    for (var c in e.push(u), i) {
                        var l = i[c];
                        "number" != typeof l && "string" != typeof l || (u[c] = l)
                    }
                }
            } catch (e) {
                n = !0, a = e
            } finally {
                try {
                    !r && o.return && o.return()
                } finally {
                    if (n) throw a
                }
            }
        }
        var d = cf();
        return d && 0 === e.length && e.push({
            name: location.href,
            entryType: "navigation",
            startTime: 0,
            duration: d.loadEventEnd - d.navigationStart,
            initiatorType: "navigation",
            nextHopProtocol: "http/1.1",
            type: "navigate",
            redirectStart: d.redirectStart,
            redirectEnd: d.redirectEnd,
            fetchStart: d.fetchStart,
            domainLookupStart: d.domainLookupStart,
            domainLookupEnd: d.domainLookupEnd,
            connectStart: d.connectStart,
            connectEnd: d.connectEnd,
            secureConnectionStart: d.secureConnectionStart,
            requestStart: d.requestStart,
            responseStart: d.responseStart,
            responseEnd: d.responseEnd,
            unloadEventStart: d.unloadEventStart,
            unloadEventEnd: d.unloadEventEnd,
            domInteractive: d.domInteractive,
            domContentLoadedEventStart: d.domContentLoadedEventStart,
            domContentLoadedEventEnd: d.domContentLoadedEventEnd,
            domComplete: d.domComplete,
            loadEventStart: d.loadEventStart,
            loadEventEnd: d.loadEventEnd
        }), e
    }
    window.performance || window.performance.timing || window.addEventListener("pagehide", function() {
            w.setItem(uf, Date.now().toString())
        }),
        function() {
            var e = X(regeneratorRuntime.mark(function e() {
                var t, r;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                        case 0:
                            return e.next = 2, h.loaded;
                        case 2:
                            return e.next = 4, new Promise(function(e) {
                                return setTimeout(e)
                            });
                        case 4:
                            (t = lf()).length && Re({
                                resourceTimings: t
                            }), (r = df()).length && Re({
                                navigationTimings: r
                            });
                        case 8:
                        case "end":
                            return e.stop()
                    }
                }, e, this)
            }));
            return function() {
                return e.apply(this, arguments)
            }
        }()();
    r.on("click", ".js-toggler-container .js-toggler-target", function(e) {
        if (o(e instanceof MouseEvent, "app/assets/modules/github/toggler.js:41"), o(e.currentTarget, "app/assets/modules/github/toggler.js:42"), 0 === e.button) {
            var t = e.currentTarget.closest(".js-toggler-container"),
                r = e.currentTarget.closest(".js-toggler-container-secondary");
            t.classList.toggle("on"), r && r.classList.toggle("on")
        }
    }), c.remoteForm(".js-toggler-container", function() {
        var e = X(regeneratorRuntime.mark(function e(t, r) {
            return regeneratorRuntime.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                    case 0:
                        return t.classList.remove("success", "error"), t.classList.add("loading"), e.prev = 2, e.next = 5, r.text();
                    case 5:
                        t.classList.add("success"), e.next = 11;
                        break;
                    case 8:
                        e.prev = 8, e.t0 = e.catch(2), t.classList.add("error");
                    case 11:
                        return e.prev = 11, t.classList.remove("loading"), e.finish(11);
                    case 14:
                    case "end":
                        return e.stop()
                }
            }, e, void 0, [
                [2, 8, 11, 14]
            ])
        }));
        return function(t, r) {
            return e.apply(this, arguments)
        }
    }());
    var mf = function() {
            var t = X(regeneratorRuntime.mark(function t() {
                var r, n, a;
                return regeneratorRuntime.wrap(function(t) {
                    for (;;) switch (t.prev = t.next) {
                        case 0:
                            return r = e.query(document, ".js-topics-list-container"), n = e.getAttribute(r, "data-url"), t.next = 4, s.fetchSafeDocumentFragment(document, n);
                        case 4:
                            a = t.sent, r.innerHTML = "", r.appendChild(a);
                        case 7:
                        case "end":
                            return t.stop()
                    }
                }, t, this)
            }));
            return function() {
                return t.apply(this, arguments)
            }
        }(),
        ff = function() {
            var t = X(regeneratorRuntime.mark(function t(r) {
                var n, a, o;
                return regeneratorRuntime.wrap(function(t) {
                    for (;;) switch (t.prev = t.next) {
                        case 0:
                            if (n = r.querySelector(".js-topic-suggestions-container")) {
                                t.next = 3;
                                break
                            }
                            return t.abrupt("return");
                        case 3:
                            return a = e.getAttribute(n, "data-url"), t.next = 6, s.fetchSafeDocumentFragment(document, a);
                        case 6:
                            o = t.sent, n.innerHTML = "", n.appendChild(o);
                        case 9:
                        case "end":
                            return t.stop()
                    }
                }, t, this)
            }));
            return function(e) {
                return t.apply(this, arguments)
            }
        }();
 
    function pf(t) {
        var r = e.closest(t, ".js-topic-save-notice-container"),
            n = e.query(r, ".js-repo-topics-save-notice");
        n.classList.remove("d-none"), n.classList.add("d-inline-block", "anim-fade-in"), setTimeout(function() {
            n.classList.remove("d-inline-block"), n.classList.add("d-none")
        }, 1900)
    }
 
    function vf(t) {
        var r = e.query(t, ".js-topic-suggestions-box");
        r.querySelector(".js-topic-suggestion") || r.remove()
    }
 
    function gf() {}
    c.remoteForm(".js-accept-topic-form", function() {
        var t = X(regeneratorRuntime.mark(function t(r, n) {
            var a, s, o, i, u, c;
            return regeneratorRuntime.wrap(function(t) {
                for (;;) switch (t.prev = t.next) {
                    case 0:
                        return t.next = 2, n.html();
                    case 2:
                        a = e.closest(r, ".js-topic-form-area"), s = e.closest(r, ".js-topic-suggestion"), o = e.query(a, ".js-template"), i = e.query(a, ".js-tag-input-selected-tags"), u = o.cloneNode(!0), c = e.query(s, 'input[name="input[name]"]', HTMLInputElement).value, e.query(u, "input", HTMLInputElement).value = c, e.query(u, ".js-placeholder-tag-name").replaceWith(c), u.classList.remove("d-none", "js-template"), i.appendChild(u), s.remove(), ff(a), vf(a), pf(r);
                    case 16:
                    case "end":
                        return t.stop()
                }
            }, t, this)
        }));
        return function(e, r) {
            return t.apply(this, arguments)
        }
    }()), r.on("click", ".js-repo-topics-form-done", function() {
        mf()
    }), c.remoteForm(".js-decline-topic-form", function() {
        var t = X(regeneratorRuntime.mark(function t(r, n) {
            var a;
            return regeneratorRuntime.wrap(function(t) {
                for (;;) switch (t.prev = t.next) {
                    case 0:
                        return t.next = 2, n.html();
                    case 2:
                        pf(r), a = e.closest(r, ".js-topic-form-area"), e.closest(r, ".js-topic-suggestion").remove(), ff(a), vf(a);
                    case 8:
                    case "end":
                        return t.stop()
                }
            }, t, this)
        }));
        return function(e, r) {
            return t.apply(this, arguments)
        }
    }()), c.remoteForm(".js-repo-topics-edit-form", function() {
        var t = X(regeneratorRuntime.mark(function t(r, n) {
            var a, s, o, i, u, c, l, d, m, f, p, v, g, h, y, b, j, L, w, x;
            return regeneratorRuntime.wrap(function(t) {
                for (;;) switch (t.prev = t.next) {
                    case 0:
                        for ((a = e.closest(r, ".js-topic-form-area")).classList.remove("errored"), e.query(a, ".js-topic-error").textContent = "", s = !0, o = !1, i = void 0, t.prev = 6, u = a.querySelectorAll(".js-tag-input-tag.invalid-topic")[Symbol.iterator](); !(s = (c = u.next()).done); s = !0) c.value.classList.remove("invalid-topic");
                        t.next = 14;
                        break;
                    case 10:
                        t.prev = 10, t.t0 = t.catch(6), o = !0, i = t.t0;
                    case 14:
                        t.prev = 14, t.prev = 15, !s && u.return && u.return();
                    case 17:
                        if (t.prev = 17, !o) {
                            t.next = 20;
                            break
                        }
                        throw i;
                    case 20:
                        return t.finish(17);
                    case 21:
                        return t.finish(14);
                    case 22:
                        return t.prev = 22, t.next = 25, n.json();
                    case 25:
                        pf(r), ff(a), t.next = 78;
                        break;
                    case 29:
                        if (t.prev = 29, t.t1 = t.catch(22), (l = t.t1.response.json).message && (a.classList.add("errored"), e.query(a, ".js-topic-error").textContent = l.message), !l.invalidTopics) {
                            t.next = 78;
                            break
                        }
                        d = e.querySelectorAll(r, ".js-topic-input", HTMLInputElement), m = !0, f = !1, p = void 0, t.prev = 38, v = l.invalidTopics[Symbol.iterator]();
                    case 40:
                        if (m = (g = v.next()).done) {
                            t.next = 64;
                            break
                        }
                        for (h = g.value, y = !0, b = !1, j = void 0, t.prev = 45, L = d[Symbol.iterator](); !(y = (w = L.next()).done); y = !0)(x = w.value).value === h && e.closest(x, ".js-tag-input-tag").classList.add("invalid-topic");
                        t.next = 53;
                        break;
                    case 49:
                        t.prev = 49, t.t2 = t.catch(45), b = !0, j = t.t2;
                    case 53:
                        t.prev = 53, t.prev = 54, !y && L.return && L.return();
                    case 56:
                        if (t.prev = 56, !b) {
                            t.next = 59;
                            break
                        }
                        throw j;
                    case 59:
                        return t.finish(56);
                    case 60:
                        return t.finish(53);
                    case 61:
                        m = !0, t.next = 40;
                        break;
                    case 64:
                        t.next = 70;
                        break;
                    case 66:
                        t.prev = 66, t.t3 = t.catch(38), f = !0, p = t.t3;
                    case 70:
                        t.prev = 70, t.prev = 71, !m && v.return && v.return();
                    case 73:
                        if (t.prev = 73, !f) {
                            t.next = 76;
                            break
                        }
                        throw p;
                    case 76:
                        return t.finish(73);
                    case 77:
                        return t.finish(70);
                    case 78:
                    case "end":
                        return t.stop()
                }
            }, t, this, [
                [6, 10, 14, 22],
                [15, , 17, 21],
                [22, 29],
                [38, 66, 70, 78],
                [45, 49, 53, 61],
                [54, , 56, 60],
                [71, , 73, 77]
            ])
        }));
        return function(e, r) {
            return t.apply(this, arguments)
        }
    }()), r.on("tags:changed", ".js-repo-topics-edit-form", function(e) {
        var t = e.target;
        o(t instanceof HTMLFormElement, "app/assets/modules/github/topics.js:136"), l.submit(t)
    }), r.on("click", ".js-reveal-hidden-topics", function(t) {
        var r = t.target,
            n = e.closest(r, ".js-hidden-topics-container").querySelector(".js-hidden-topics");
        n && (n.classList.remove("d-none"), r.remove())
    }), t.observe(".js-touch-events", {
        add: function(e) {
            e.addEventListener("click", gf)
        },
        remove: function(e) {
            e.removeEventListener("click", gf)
        }
    });
    var hf = function() {
        var t = X(regeneratorRuntime.mark(function t(r) {
            var n, a, s, o, i;
            return regeneratorRuntime.wrap(function(t) {
                for (;;) switch (t.prev = t.next) {
                    case 0:
                        n = e.closest(r, ".js-content-attachment"), a = e.getAttribute(e.closest(r, "[data-unfurl-authenticity-token]"), "data-unfurl-authenticity-token"), s = e.getAttribute(r, "data-id"), (o = new XMLHttpRequest).onload = function() {
                            o.status >= 200 && o.status < 300 && n.remove()
                        }, o.open("POST", "/content_reference_attachments/hide"), (i = new FormData).append("id", s), i.append("authenticity_token", a), o.send(i);
                    case 10:
                    case "end":
                        return t.stop()
                }
            }, t, this)
        }));
        return function(e) {
            return t.apply(this, arguments)
        }
    }();
 
    function yf(t) {
        var r, n = e.query(t, ".markdown-body");
        (n.clientHeight < 188 || "" === (r = n).textContent.trim() && 1 === e.querySelectorAll(r, "img").length) && (t.classList.remove("max--md"), e.query(t, ".Details-content--closed").hidden = !0, e.query(t, ".Details-content--open").hidden = !0)
    }
    var bf = !0,
        jf = !1,
        Lf = void 0;
    try {
        for (var wf, xf = e.querySelectorAll(document, ".js-content-attachment .max--md")[Symbol.iterator](); !(bf = (wf = xf.next()).done); bf = !0) {
            yf(wf.value)
        }
    } catch (e) {
        jf = !0, Lf = e
    } finally {
        try {
            !bf && xf.return && xf.return()
        } finally {
            if (jf) throw Lf
        }
    }
 
    function kf() {
        return !!window.u2f || "true" === v.getMetadataByName(document, "u2f-support")
    }
    r.on("click", ".js-hide-content-attachment", function(e) {
            e.preventDefault(), hf(e.currentTarget)
        }), t.observe(".js-content-attachment .max--md", yf), requestIdleCallback(function() {
            var e = Se();
            if (e) {
                var t = "https:" === location.protocol ? "secure" : "";
                document.cookie = "tz=" + encodeURIComponent(e) + "; path=/; " + t
            }
        }),
        function() {
            var e = "chrome" in window && window.navigator.userAgent.indexOf("Edge") < 0;
            if (!("u2f" in window) && e) {
                var t, r = window.u2f = {};
                r.EXTENSION_ID = "kmendfapggjehodndflmmgagdbamhnfd", r.MessageTypes = {
                    U2F_REGISTER_REQUEST: "u2f_register_request",
                    U2F_REGISTER_RESPONSE: "u2f_register_response",
                    U2F_SIGN_REQUEST: "u2f_sign_request",
                    U2F_SIGN_RESPONSE: "u2f_sign_response",
                    U2F_GET_API_VERSION_REQUEST: "u2f_get_api_version_request",
                    U2F_GET_API_VERSION_RESPONSE: "u2f_get_api_version_response"
                }, r.ErrorCodes = {
                    OK: 0,
                    OTHER_ERROR: 1,
                    BAD_REQUEST: 2,
                    CONFIGURATION_UNSUPPORTED: 3,
                    DEVICE_INELIGIBLE: 4,
                    TIMEOUT: 5
                }, r.getMessagePort = function(e) {
                    if ("undefined" != typeof chrome && chrome.runtime) {
                        var t = {
                            type: r.MessageTypes.U2F_SIGN_REQUEST,
                            signRequests: []
                        };
                        chrome.runtime.sendMessage(r.EXTENSION_ID, t, function() {
                            chrome.runtime.lastError ? r.getIframePort_(e) : r.getChromeRuntimePort_(e)
                        })
                    } else r.isAndroidChrome_() ? r.getAuthenticatorPort_(e) : r.isIosChrome_() ? r.getIosPort_(e) : r.getIframePort_(e)
                }, r.isAndroidChrome_ = function() {
                    var e = navigator.userAgent;
                    return -1 != e.indexOf("Chrome") && -1 != e.indexOf("Android")
                }, r.isIosChrome_ = function() {
                    return ["iPhone", "iPad", "iPod"].indexOf(navigator.platform) > -1
                }, r.getChromeRuntimePort_ = function(e) {
                    var t = chrome.runtime.connect(r.EXTENSION_ID, {
                        includeTlsChannelId: !0
                    });
                    setTimeout(function() {
                        e(new r.WrappedChromeRuntimePort_(t))
                    }, 0)
                }, r.getAuthenticatorPort_ = function(e) {
                    setTimeout(function() {
                        e(new r.WrappedAuthenticatorPort_)
                    }, 0)
                }, r.getIosPort_ = function(e) {
                    setTimeout(function() {
                        e(new r.WrappedIosPort_)
                    }, 0)
                }, r.WrappedChromeRuntimePort_ = function(e) {
                    this.port_ = e
                }, r.formatSignRequest_ = function(e, n, a, s, o) {
                    if (void 0 === t || t < 1.1) {
                        for (var i = [], u = 0; u < a.length; u++) i[u] = {
                            version: a[u].version,
                            challenge: n,
                            keyHandle: a[u].keyHandle,
                            appId: e
                        };
                        return {
                            type: r.MessageTypes.U2F_SIGN_REQUEST,
                            signRequests: i,
                            timeoutSeconds: s,
                            requestId: o
                        }
                    }
                    return {
                        type: r.MessageTypes.U2F_SIGN_REQUEST,
                        appId: e,
                        challenge: n,
                        registeredKeys: a,
                        timeoutSeconds: s,
                        requestId: o
                    }
                }, r.formatRegisterRequest_ = function(e, n, a, s, o) {
                    if (void 0 === t || t < 1.1) {
                        for (var i = 0; i < a.length; i++) a[i].appId = e;
                        var u = [];
                        for (i = 0; i < n.length; i++) u[i] = {
                            version: n[i].version,
                            challenge: a[0],
                            keyHandle: n[i].keyHandle,
                            appId: e
                        };
                        return {
                            type: r.MessageTypes.U2F_REGISTER_REQUEST,
                            signRequests: u,
                            registerRequests: a,
                            timeoutSeconds: s,
                            requestId: o
                        }
                    }
                    return {
                        type: r.MessageTypes.U2F_REGISTER_REQUEST,
                        appId: e,
                        registerRequests: a,
                        registeredKeys: n,
                        timeoutSeconds: s,
                        requestId: o
                    }
                }, r.WrappedChromeRuntimePort_.prototype.postMessage = function(e) {
                    this.port_.postMessage(e)
                }, r.WrappedChromeRuntimePort_.prototype.addEventListener = function(e, t) {
                    var r = e.toLowerCase();
                    "message" == r || "onmessage" == r ? this.port_.onMessage.addListener(function(e) {
                        t({
                            data: e
                        })
                    }) : console.error("WrappedChromeRuntimePort only supports onMessage")
                }, r.WrappedAuthenticatorPort_ = function() {
                    this.requestId_ = -1, this.requestObject_ = null
                }, r.WrappedAuthenticatorPort_.prototype.postMessage = function(e) {
                    var t = r.WrappedAuthenticatorPort_.INTENT_URL_BASE_ + ";S.request=" + encodeURIComponent(JSON.stringify(e)) + ";end";
                    document.location = t
                }, r.WrappedAuthenticatorPort_.prototype.getPortType = function() {
                    return "WrappedAuthenticatorPort_"
                }, r.WrappedAuthenticatorPort_.prototype.addEventListener = function(e, t) {
                    if ("message" == e.toLowerCase()) {
                        window.addEventListener("message", this.onRequestUpdate_.bind(this, t), !1)
                    } else console.error("WrappedAuthenticatorPort only supports message")
                }, r.WrappedAuthenticatorPort_.prototype.onRequestUpdate_ = function(e, t) {
                    var r = JSON.parse(t.data),
                        n = (r.intentURL, r.errorCode, null);
                    r.hasOwnProperty("data") && (n = JSON.parse(r.data)), e({
                        data: n
                    })
                }, r.WrappedAuthenticatorPort_.INTENT_URL_BASE_ = "intent:#Intent;action=com.google.android.apps.authenticator.AUTHENTICATE", r.WrappedIosPort_ = function() {}, r.WrappedIosPort_.prototype.postMessage = function(e) {
                    var t = JSON.stringify(e),
                        r = "u2f://auth?" + encodeURI(t);
                    location.replace(r)
                }, r.WrappedIosPort_.prototype.getPortType = function() {
                    return "WrappedIosPort_"
                }, r.WrappedIosPort_.prototype.addEventListener = function(e, t) {
                    "message" !== e.toLowerCase() && console.error("WrappedIosPort only supports message")
                }, r.getIframePort_ = function(e) {
                    var t = "chrome-extension://" + r.EXTENSION_ID,
                        n = document.createElement("iframe");
                    n.src = t + "/u2f-comms.html", n.setAttribute("style", "display:none"), document.body.appendChild(n);
                    var a = new MessageChannel,
                        s = function(t) {
                            "ready" == t.data ? (a.port1.removeEventListener("message", s), e(a.port1)) : console.error('First event on iframe port was not "ready"')
                        };
                    a.port1.addEventListener("message", s), a.port1.start(), n.addEventListener("load", function() {
                        n.contentWindow.postMessage("init", t, [a.port2])
                    })
                }, r.EXTENSION_TIMEOUT_SEC = 30, r.port_ = null, r.waitingForPort_ = [], r.reqCounter_ = 0, r.callbackMap_ = {}, r.getPortSingleton_ = function(e) {
                    r.port_ ? e(r.port_) : (0 == r.waitingForPort_.length && r.getMessagePort(function(e) {
                        for (r.port_ = e, r.port_.addEventListener("message", r.responseHandler_); r.waitingForPort_.length;) r.waitingForPort_.shift()(r.port_)
                    }), r.waitingForPort_.push(e))
                }, r.responseHandler_ = function(e) {
                    var t = e.data,
                        n = t.requestId;
                    if (n && r.callbackMap_[n]) {
                        var a = r.callbackMap_[n];
                        delete r.callbackMap_[n], a(t.responseData)
                    } else console.error("Unknown or missing requestId in response.")
                }, r.sign = function(e, n, a, s, o) {
                    void 0 === t ? r.getApiVersion(function(i) {
                        t = void 0 === i.js_api_version ? 0 : i.js_api_version, console.log("Extension JS API Version: ", t), r.sendSignRequest(e, n, a, s, o)
                    }) : r.sendSignRequest(e, n, a, s, o)
                }, r.sendSignRequest = function(e, t, n, a, s) {
                    r.getPortSingleton_(function(o) {
                        var i = ++r.reqCounter_;
                        r.callbackMap_[i] = a;
                        var u = void 0 !== s ? s : r.EXTENSION_TIMEOUT_SEC,
                            c = r.formatSignRequest_(e, t, n, u, i);
                        o.postMessage(c)
                    })
                }, r.register = function(e, n, a, s, o) {
                    void 0 === t ? r.getApiVersion(function(i) {
                        t = void 0 === i.js_api_version ? 0 : i.js_api_version, console.log("Extension JS API Version: ", t), r.sendRegisterRequest(e, n, a, s, o)
                    }) : r.sendRegisterRequest(e, n, a, s, o)
                }, r.sendRegisterRequest = function(e, t, n, a, s) {
                    r.getPortSingleton_(function(o) {
                        var i = ++r.reqCounter_;
                        r.callbackMap_[i] = a;
                        var u = void 0 !== s ? s : r.EXTENSION_TIMEOUT_SEC,
                            c = r.formatRegisterRequest_(e, n, t, u, i);
                        o.postMessage(c)
                    })
                }, r.getApiVersion = function(e, t) {
                    r.getPortSingleton_(function(n) {
                        if (n.getPortType) {
                            var a;
                            switch (n.getPortType()) {
                                case "WrappedIosPort_":
                                case "WrappedAuthenticatorPort_":
                                    a = 1.1;
                                    break;
                                default:
                                    a = 0
                            }
                            e({
                                js_api_version: a
                            })
                        } else {
                            var s = ++r.reqCounter_;
                            r.callbackMap_[s] = e;
                            var o = {
                                type: r.MessageTypes.U2F_GET_API_VERSION_REQUEST,
                                timeoutSeconds: void 0 !== t ? t : r.EXTENSION_TIMEOUT_SEC,
                                requestId: s
                            };
                            n.postMessage(o)
                        }
                    })
                }
            }
        }();
    var Ef = function(e) {
        function t(e, r) {
            Q(this, t);
            var n = te(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
            return n.code = r, n
        }
        return ee(t, e), t
    }(Error);
 
    function Tf() {
        for (var e = arguments.length, t = Array(e), r = 0; r < e; r++) t[r] = arguments[r];
        return new Promise(function(e, r) {
            var n;
            (n = window.u2f).register.apply(n, t.concat([function(t) {
                null != t.errorCode && 0 !== t.errorCode ? r(new Ef("Device registration failed", t.errorCode)) : e(t)
            }]))
        })
    }
 
    function qf() {
        var t = e.query(document, ".js-u2f-auth-form", HTMLFormElement),
            n = e.query(t, ".js-u2f-auth-response", HTMLInputElement),
            a = t.getAttribute("data-app-id"),
            s = t.getAttribute("data-challenge"),
            o = t.getAttribute("data-sign-requests");
        if (null != o) {
            var i = JSON.parse(o),
                u = !0,
                c = !1,
                l = void 0;
            try {
                for (var d, m = document.querySelectorAll(".js-u2f-error")[Symbol.iterator](); !(u = (d = m.next()).done); u = !0) {
                    d.value.classList.add("d-none")
                }
            } catch (e) {
                c = !0, l = e
            } finally {
                try {
                    !u && m.return && m.return()
                } finally {
                    if (c) throw l
                }
            }
            var f = document.querySelector(".js-u2f-login-waiting");
            null != f && f.classList.remove("d-none"),
                function() {
                    for (var e = arguments.length, t = Array(e), r = 0; r < e; r++) t[r] = arguments[r];
                    return new Promise(function(e, r) {
                        var n;
                        (n = window.u2f).sign.apply(n, t.concat([function(t) {
                            null != t.errorCode && 0 !== t.errorCode ? r(new Ef("Signing request failed", t.errorCode)) : e(t)
                        }]))
                    })
                }(a, s, i).then(function(e) {
                    n.value = JSON.stringify(e), r.fire(t, "submit") && t.submit()
                }, function(e) {
                    var t = ".js-u2f-auth-error";
                    switch (e.code) {
                        case 4:
                            t = ".js-u2f-auth-not-registered-error";
                            break;
                        case 5:
                            t = ".js-u2f-auth-timeout"
                    }
                    var r = document.querySelector(t);
                    null != r && r.classList.remove("d-none"), null != f && f.classList.add("d-none")
                })
        }
    }
    r.on("click", ".js-u2f-auth-retry", function() {
        qf()
    }), t.observe(".js-u2f-auth-form-body", function(e) {
        e.classList.toggle("unavailable", !kf()), kf() && qf()
    });
    var Sf = function() {
            var t = X(regeneratorRuntime.mark(function t(r) {
                var n, a, s;
                return regeneratorRuntime.wrap(function(t) {
                    for (;;) switch (t.prev = t.next) {
                        case 0:
                            return t.next = 2, M("high");
                        case 2:
                            if (t.sent) {
                                t.next = 5;
                                break
                            }
                            throw new Error("sudo failed");
                        case 5:
                            return n = e.query(document, ".js-add-u2f-registration-form", HTMLFormElement), e.namedItem(n, "response").value = JSON.stringify(r), t.prev = 7, t.next = 10, k.fetchJSON(n.action, {
                                method: n.method,
                                body: new FormData(n)
                            });
                        case 10:
                            Rf(a = t.sent), Ff(), a.registration && _f(a.registration), t.next = 27;
                            break;
                        case 16:
                            if (t.prev = 16, t.t0 = t.catch(7), !t.t0.response) {
                                t.next = 26;
                                break
                            }
                            return t.next = 21, t.t0.response.json();
                        case 21:
                            Rf(s = t.sent), Cf(".js-u2f-server-error", s.error), t.next = 27;
                            break;
                        case 26:
                            Cf(".js-u2f-network-error");
                        case 27:
                        case "end":
                            return t.stop()
                    }
                }, t, this, [
                    [7, 16]
                ])
            }));
            return function(e) {
                return t.apply(this, arguments)
            }
        }(),
        Af = function() {
            var t = X(regeneratorRuntime.mark(function t() {
                var r, n, a, s;
                return regeneratorRuntime.wrap(function(t) {
                    for (;;) switch (t.prev = t.next) {
                        case 0:
                            return (r = e.query(document, ".js-new-u2f-registration")).classList.add("is-sending"), r.classList.remove("is-showing-error"), n = e.query(document, ".js-add-u2f-registration-form"), a = e.getAttribute(n, "data-app-id"), t.prev = 5, t.next = 8, Tf(a, If(), Hf());
                        case 8:
                            return s = t.sent, t.next = 11, Sf(s);
                        case 11:
                            t.next = 24;
                            break;
                        case 13:
                            t.prev = 13, t.t0 = t.catch(5), t.t1 = t.t0.code, t.next = 4 === t.t1 ? 18 : 5 === t.t1 ? 20 : 22;
                            break;
                        case 18:
                            return Cf(".js-u2f-registered-error"), t.abrupt("break", 24);
                        case 20:
                            return Cf(".js-u2f-timeout-error"), t.abrupt("break", 24);
                        case 22:
                            return Cf(".js-u2f-other-error"), t.abrupt("break", 24);
                        case 24:
                        case "end":
                            return t.stop()
                    }
                }, t, this, [
                    [5, 13]
                ])
            }));
            return function() {
                return t.apply(this, arguments)
            }
        }();
 
    function Mf(e, t, r) {
        if (!r) {
            var n = e.getAttribute(t);
            if (!n) return;
            return JSON.parse(n)
        }
        e.setAttribute(t, JSON.stringify(r))
    }
 
    function Hf(t) {
        return Mf(e.query(document, ".js-add-u2f-registration-form", HTMLFormElement), "data-sign-requests", t)
    }
 
    function If(t) {
        return Mf(e.query(document, ".js-add-u2f-registration-form", HTMLFormElement), "data-register-requests", t)
    }
 
    function Rf(e) {
        e.register_requests && If(e.register_requests), e.sign_requests && Hf(e.sign_requests)
    }
 
    function _f(t) {
        var r = document.createElement("div");
        r.innerHTML = t;
        var n = r.firstChild;
        null != n && e.query(document, ".js-u2f-registrations").appendChild(n)
    }
 
    function Cf(t, r) {
        var n = e.query(document, ".js-new-u2f-registration");
        n.classList.add("is-showing-error"), n.classList.remove("is-sending");
        var a = !0,
            s = !1,
            o = void 0;
        try {
            for (var i, u = n.querySelectorAll(".js-u2f-error")[Symbol.iterator](); !(a = (i = u.next()).done); a = !0) {
                i.value.classList.add("d-none")
            }
        } catch (e) {
            s = !0, o = e
        } finally {
            try {
                !a && u.return && u.return()
            } finally {
                if (s) throw o
            }
        }
        var c = e.query(n, t);
        r && (c.textContent = r), c.classList.remove("d-none")
    }
 
    function Ff() {
        e.query(document, ".js-new-u2f-registration").classList.remove("is-sending", "is-active"), e.query(document, ".js-u2f-registration-nickname-field", HTMLInputElement).value = ""
    }
    c.remoteForm(".js-u2f-registration-delete", function() {
        var t = X(regeneratorRuntime.mark(function t(r, n) {
            var a;
            return regeneratorRuntime.wrap(function(t) {
                for (;;) switch (t.prev = t.next) {
                    case 0:
                        return (a = e.closest(r, ".js-u2f-registration")).classList.add("is-sending"), t.next = 4, n.json();
                    case 4:
                        Rf(t.sent.json), a.remove();
                    case 7:
                    case "end":
                        return t.stop()
                }
            }, t, this)
        }));
        return function(e, r) {
            return t.apply(this, arguments)
        }
    }()), r.on("click", ".js-add-u2f-registration-link", function() {
        var t = e.query(document, ".js-new-u2f-registration");
        t.classList.add("is-active"), t.classList.remove("is-showing-error"), e.query(document, ".js-u2f-registration-nickname-field", HTMLInputElement).focus()
    }), r.on("click", ".js-u2f-register-retry", function() {
        Af()
    }), r.on("submit", ".js-add-u2f-registration-form", function(e) {
        e.preventDefault(), Af()
    }), t.observe(".js-u2f-box", function(e) {
        e.classList.toggle("available", kf())
    }), r.on("socket:message", ".js-updatable-content", function(e) {
        o(e instanceof CustomEvent, "app/assets/modules/github/updatable-content-observer.js:17");
        var t = e.detail.data || {},
            r = t.gid,
            n = t.wait,
            a = void 0;
        if (r && e.target.getAttribute("data-gid") === r ? a = e.target : r ? a = e.target.querySelector('[data-url][data-gid="' + r + '"]') : e.currentTarget === e.target && (a = e.target), a instanceof HTMLElement) {
            var s = b.updateContent.bind(null, a);
            null == n ? s() : setTimeout(s, n)
        }
    }), r.on("upload:setup", ".js-upload-avatar-image", function(e) {
        o(e instanceof CustomEvent, "app/assets/modules/github/upload/avatar.js:9");
        var t = e.detail.policyRequest,
            r = e.currentTarget.getAttribute("data-alambic-organization"),
            n = e.currentTarget.getAttribute("data-alambic-owner-type"),
            a = e.currentTarget.getAttribute("data-alambic-owner-id");
        r && t.body.append("organization_id", r), n && t.body.append("owner_type", n), a && t.body.append("owner_id", a)
    }), r.on("upload:complete", ".js-upload-avatar-image", function(e) {
        o(e instanceof CustomEvent, "app/assets/modules/github/upload/avatar.js:26");
        var t = "/settings/avatars/" + e.detail.result.id;
        q.dialog({
            content: s.fetchSafeDocumentFragment(document, t)
        })
    });
    var Pf = function() {
            function e(t) {
                Q(this, e), this.dataview = new DataView(t), this.pos = 0
            }
            return Y(e, null, [{
                key: "fromFile",
                value: function(t) {
                    return new Promise(function(r, n) {
                        var a = new FileReader;
                        a.onload = function() {
                            o(a.result instanceof ArrayBuffer, "app/assets/modules/github/png-scanner.js:38"), r(new e(a.result))
                        }, a.onerror = function() {
                            n(a.error)
                        }, a.readAsArrayBuffer(t)
                    })
                }
            }]), Y(e, [{
                key: "advance",
                value: function(e) {
                    this.pos += e
                }
            }, {
                key: "readInt",
                value: function(e) {
                    var t = this,
                        r = function() {
                            switch (e) {
                                case 1:
                                    return t.dataview.getUint8(t.pos);
                                case 2:
                                    return t.dataview.getUint16(t.pos);
                                case 4:
                                    return t.dataview.getUint32(t.pos);
                                default:
                                    throw new Error("bytes parameter must be 1, 2 or 4")
                            }
                        }();
                    return this.advance(e), r
                }
            }, {
                key: "readChar",
                value: function() {
                    return this.readInt(1)
                }
            }, {
                key: "readShort",
                value: function() {
                    return this.readInt(2)
                }
            }, {
                key: "readLong",
                value: function() {
                    return this.readInt(4)
                }
            }, {
                key: "readString",
                value: function(e) {
                    for (var t = [], r = 0; r < e; r++) t.push(String.fromCharCode(this.readChar()));
                    return t.join("")
                }
            }, {
                key: "scan",
                value: function(e) {
                    if (2303741511 !== this.readLong()) throw new Error("invalid PNG");
                    for (this.advance(4);;) {
                        var t = this.readLong(),
                            r = this.readString(4),
                            n = this.pos + t + 4;
                        if (!1 === e.call(this, r, t) || "IEND" === r) break;
                        this.pos = n
                    }
                }
            }]), e
        }(),
        Nf = function() {
            var e = X(regeneratorRuntime.mark(function e(t) {
                var r, n, a;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                        case 0:
                            if ("image/png" === t.type) {
                                e.next = 2;
                                break
                            }
                            return e.abrupt("return", null);
                        case 2:
                            return r = t.slice(0, 10240, t.type), e.next = 5, Pf.fromFile(r);
                        case 5:
                            return n = e.sent, a = {
                                width: 0,
                                height: 0,
                                ppi: 1
                            }, n.scan(function(e) {
                                switch (e) {
                                    case "IHDR":
                                        return a.width = this.readLong(), a.height = this.readLong(), !0;
                                    case "pHYs":
                                        var t = this.readLong(),
                                            r = this.readLong(),
                                            n = void 0;
                                        return 1 === this.readChar() && (n = .0254), n && (a.ppi = Math.round((t + r) / 2 * n)), !1;
                                    case "IDAT":
                                        return !1
                                }
                                return !0
                            }), e.abrupt("return", a);
                        case 9:
                        case "end":
                            return e.stop()
                    }
                }, e, this)
            }));
            return function(t) {
                return e.apply(this, arguments)
            }
        }();
 
    function Df(e, t) {
        var r = e.selectionEnd,
            n = e.value.substring(0, r),
            a = e.value.substring(r),
            s = "" === e.value || n.match(/\n$/) ? "" : "\n";
        e.value = n + s + t + a, e.selectionStart = r + t.length, e.selectionEnd = r + t.length, e.dispatchEvent(new CustomEvent("change", {
            bubbles: !0,
            cancelable: !1
        })), e.focus()
    }
 
    function Of(e) {
        var t = e.dataTransfer;
        if (t && ! function(e) {
                return Array.from(e.types).indexOf("Files") >= 0
            }(t) && zf(t)) {
            e.stopPropagation(), e.preventDefault();
            var r = e.currentTarget;
            if (r instanceof HTMLTextAreaElement) {
                var n = !0,
                    a = !1,
                    s = void 0;
                try {
                    for (var o, i = Wf(t).map(Vf)[Symbol.iterator](); !(n = (o = i.next()).done); n = !0) {
                        Df(r, o.value)
                    }
                } catch (e) {
                    a = !0, s = e
                } finally {
                    try {
                        n || null == i.return || i.return()
                    } finally {
                        if (a) throw s
                    }
                }
            }
        }
    }
 
    function Bf(e) {
        var t = e.dataTransfer;
        t && (t.dropEffect = "link")
    }
 
    function Uf(e) {
        var t = e.clipboardData;
        if (t && zf(t)) {
            e.stopPropagation(), e.preventDefault();
            var r = e.currentTarget;
            if (r instanceof HTMLTextAreaElement) {
                var n = !0,
                    a = !1,
                    s = void 0;
                try {
                    for (var o, i = Wf(t).map(Vf)[Symbol.iterator](); !(n = (o = i.next()).done); n = !0) {
                        Df(r, o.value)
                    }
                } catch (e) {
                    a = !0, s = e
                } finally {
                    try {
                        n || null == i.return || i.return()
                    } finally {
                        if (a) throw s
                    }
                }
            }
        }
    }
 
    function Vf(e) {
        return t = e.split(".").pop().toLowerCase(), ["gif", "png", "jpg", "jpeg"].indexOf(t) > -1 ? "\n![](".concat(e, ")\n") : e;
        var t
    }
 
    function zf(e) {
        return Array.from(e.types).indexOf("text/uri-list") >= 0
    }
 
    function Wf(e) {
        return (e.getData("text/uri-list") || "").split("\r\n")
    }
 
    function $f(e) {
        var t = e.dataTransfer;
        if (t && ! function(e) {
                return Array.from(e.types).indexOf("Files") >= 0
            }(t)) {
            var r = Qf(t);
            if (r) {
                e.stopPropagation(), e.preventDefault();
                var n = e.currentTarget;
                n instanceof HTMLTextAreaElement && Df(n, Xf(r))
            }
        }
    }
 
    function Kf(e) {
        var t = e.dataTransfer;
        t && (t.dropEffect = "copy")
    }
 
    function Jf(e) {
        if (e.clipboardData) {
            var t = Qf(e.clipboardData);
            if (t) {
                e.stopPropagation(), e.preventDefault();
                var r = e.currentTarget;
                r instanceof HTMLTextAreaElement && Df(r, Xf(t))
            }
        }
    }
 
    function Gf(e) {
        return e.textContent.trim().replace(/\|/g, "\\|").replace(/\n/g, " ") || "聽"
    }
 
    function Xf(e) {
        var t, r = Array.from(e.querySelectorAll("tr")),
            n = (t = r.shift(), Array.from(t.querySelectorAll("td, th")).map(Gf)),
            a = n.map(function() {
                return "--"
            }),
            s = "".concat(n.join(" | "), "\n").concat(a.join(" | "), "\n"),
            o = r.map(function(e) {
                return Array.from(e.querySelectorAll("td")).map(Gf).join(" | ")
            }).join("\n");
        return "\n".concat(s).concat(o, "\n\n")
    }
 
    function Qf(e) {
        if (-1 !== Array.from(e.types).indexOf("text/html")) {
            var t = e.getData("text/html");
            if (/<table/i.test(t)) {
                var r = function(e) {
                    var t = document.createElement("div");
                    return t.innerHTML = e, t.querySelector("table")
                }(t);
                if (r && !r.closest(".js-comment")) return /\b(js|blob|diff)-./.test(r.className) ? null : r
            }
        }
    }
 
    function Yf(e) {
        return (Zf(e) ? "!" : "") + "[Uploading " + e.name + "鈥()"
    }
 
    function Zf(e) {
        return ["image/gif", "image/png", "image/jpg", "image/jpeg"].indexOf(e.type) > -1
    }
    t.observe(".js-paste-markdown", {
        subscribe: function(e) {
            return function(e) {
                    e.addEventListener("dragover", Kf), e.addEventListener("drop", $f), e.addEventListener("paste", Jf)
                }(e),
                function(e) {
                    e.addEventListener("dragover", Bf), e.addEventListener("drop", Of), e.addEventListener("paste", Uf)
                }(e), {
                    unsubscribe: function() {
                        ! function(e) {
                            e.removeEventListener("dragover", Kf), e.removeEventListener("drop", $f), e.removeEventListener("paste", Jf)
                        }(e),
                        function(e) {
                            e.removeEventListener("dragover", Bf), e.removeEventListener("drop", Of), e.removeEventListener("paste", Uf)
                        }(e)
                    }
                }
        }
    });
 
    function ep(t) {
        var r = e.closest(t, "form", HTMLFormElement);
        return e.query(r, "#release_id", HTMLInputElement).value
    }
    r.on("upload:setup", ".js-upload-markdown-image", function(t) {
        o(t instanceof CustomEvent, "app/assets/modules/github/upload/markdown.js:53");
        var r = e.query(t.currentTarget, ".js-comment-field", HTMLTextAreaElement);
        r.setCustomValidity("uploading"), A.insertText(r, Yf(t.detail.file) + "\n")
    }), r.on("upload:complete", ".js-upload-markdown-image", function() {
        var t = X(regeneratorRuntime.mark(function t(r) {
            var n, a, s, i, u;
            return regeneratorRuntime.wrap(function(t) {
                for (;;) switch (t.prev = t.next) {
                    case 0:
                        return u = function(e) {
                            var t = "[" + n.file.name + "](" + n.policy.asset.href + ")";
                            if (Zf(n.file)) {
                                var r = function(e) {
                                        return e.toLowerCase().replace(/[^a-z0-9\-_]+/gi, ".").replace(/\.{2,}/g, ".").replace(/^\.|\.$/gi, "")
                                    }(n.policy.asset.name).replace(/\.[^.]+$/, "").replace(/\./g, " "),
                                    a = n.policy.asset.href;
                                if (e && 144 === e.ppi) t = '<img width="' + Math.round(e.width / 2) + '" alt="' + r + '" src="' + a + '">';
                                else t = "![" + r + "](" + a + ")"
                            }
                            s.setCustomValidity(""), A.replaceText(s, i, t)
                        }, o(r instanceof CustomEvent, "app/assets/modules/github/upload/markdown.js:60"), n = r.detail, a = r.currentTarget, s = e.query(a, ".js-comment-field", HTMLTextAreaElement), i = Yf(n.file), t.prev = 6, t.t0 = u, t.next = 10, Nf(n.file);
                    case 10:
                        t.t1 = t.sent, (0, t.t0)(t.t1), t.next = 18;
                        break;
                    case 14:
                        t.prev = 14, t.t2 = t.catch(6), u(), setTimeout(function() {
                            throw t.t2
                        });
                    case 18:
                    case "end":
                        return t.stop()
                }
            }, t, this, [
                [6, 14]
            ])
        }));
        return function(e) {
            return t.apply(this, arguments)
        }
    }()), r.on("upload:error", ".js-upload-markdown-image", function(t) {
        o(t instanceof CustomEvent, "app/assets/modules/github/upload/markdown.js:96");
        var r = e.query(t.currentTarget, ".js-comment-field", HTMLTextAreaElement),
            n = Yf(t.detail.file);
        r.setCustomValidity(""), A.replaceText(r, n, "")
    }), r.on("upload:invalid", ".js-upload-markdown-image", function(t) {
        o(t instanceof CustomEvent, "app/assets/modules/github/upload/markdown.js:104");
        var r = e.query(t.currentTarget, ".js-comment-field", HTMLTextAreaElement),
            n = Yf(t.detail.file);
        r.setCustomValidity(""), A.replaceText(r, n, "")
    }), r.on("upload:setup", ".js-upload-marketplace-listing-screenshot", function(e) {
        o(e instanceof CustomEvent, "app/assets/modules/github/upload/marketplace-listing-screenshot.js:9");
        var t = e.detail.policyRequest,
            r = e.currentTarget.getAttribute("data-marketplace-listing-id");
        r && t.body.append("marketplace_listing_id", r)
    }), r.on("upload:complete", ".js-upload-marketplace-listing-screenshot", function() {
        var t = X(regeneratorRuntime.mark(function t(r) {
            var n, a, o;
            return regeneratorRuntime.wrap(function(t) {
                for (;;) switch (t.prev = t.next) {
                    case 0:
                        return n = e.getAttribute(r.currentTarget, "data-screenshots-url"), a = e.query(document, ".js-marketplace-listing-screenshots-container"), t.next = 4, s.fetchSafeDocumentFragment(document, n);
                    case 4:
                        o = t.sent, a.innerHTML = "", a.appendChild(o);
                    case 7:
                    case "end":
                        return t.stop()
                }
            }, t, this)
        }));
        return function(e) {
            return t.apply(this, arguments)
        }
    }()), r.on("upload:setup", ".js-upload-marketplace-listing-hero-card-background", function(e) {
        o(e instanceof CustomEvent, "app/assets/modules/github/upload/marketplace-listing-hero-card-background.js:8");
        var t = e.detail.policyRequest,
            r = e.currentTarget.getAttribute("data-marketplace-listing-id");
        r && t.body.append("marketplace_listing_id", r)
    }), r.on("upload:complete", ".js-upload-marketplace-listing-hero-card-background", function(t) {
        o(t instanceof CustomEvent, "app/assets/modules/github/upload/marketplace-listing-hero-card-background.js:19");
        var r = t.detail,
            n = r.policy;
        e.query(document, ".js-marketplace-listing-hero-card-background-id", HTMLInputElement).value = n.asset.id || r.result.id;
        var a = e.query(document, ".js-hero-listing-container"),
            s = n.asset.href || r.result.href;
        a.style.backgroundImage = "url(" + s + ")"
    }), r.on("click", ".js-release-remove-file", function(t) {
        var r = e.closest(t.currentTarget, ".js-release-file");
        r.classList.add("delete"), e.query(r, "input.destroy", HTMLInputElement).value = "true"
    }), r.on("click", ".js-release-undo-remove-file", function(t) {
        var r = e.closest(t.currentTarget, ".js-release-file");
        r.classList.remove("delete"), e.query(r, "input.destroy", HTMLInputElement).value = ""
    });
    var tp = null;
 
    function rp(t, r) {
        var n = r.body;
        o(n instanceof FormData, "app/assets/modules/github/upload/release-file.js:49"), n.append("release_id", ep(t));
        var a = e.querySelectorAll(document, ".js-releases-field .js-release-file.delete .id", HTMLInputElement);
        if (a.length) {
            var s = a.map(function(e) {
                return e.value
            });
            n.append("deletion_candidates", s.join(","))
        }
    }
    r.on("release:saved", ".js-release-form", function(t) {
        var r = t.currentTarget;
        tp = null;
        var n = !1,
            a = !0,
            s = !1,
            o = void 0;
        try {
            for (var i, u = r.querySelectorAll(".js-releases-field .js-release-file")[Symbol.iterator](); !(a = (i = u.next()).done); a = !0) {
                var c = i.value;
                c.classList.contains("delete") ? c.remove() : c.classList.contains("js-template") || (n = !0)
            }
        } catch (e) {
            s = !0, o = e
        } finally {
            try {
                !a && u.return && u.return()
            } finally {
                if (s) throw o
            }
        }
        var l = e.query(r, ".js-releases-field");
        l.classList.toggle("not-populated", !n), l.classList.toggle("is-populated", n)
    }), r.on("upload:setup", ".js-upload-release-file", function(t) {
        o(t instanceof CustomEvent, "app/assets/modules/github/upload/release-file.js:60");
        var r = t.detail,
            n = r.policyRequest,
            a = r.preprocess,
            s = t.currentTarget;
        if (ep(s)) rp(s, n);
        else {
            if (!tp) {
                var i = e.query(document, ".js-save-draft", HTMLButtonElement);
                tp = jd(i)
            }
            var u = rp.bind(null, s, n);
            a.push(tp.then(u))
        }
    }), r.on("upload:start", ".js-upload-release-file", function(t) {
        o(t instanceof CustomEvent, "app/assets/modules/github/upload/release-file.js:83");
        var r = t.detail.policy;
        e.query(t.currentTarget, ".js-upload-meter").classList.remove("d-none");
        var n = r.asset.replaced_asset;
        if (n) {
            var a = !0,
                s = !1,
                i = void 0;
            try {
                for (var u, c = e.querySelectorAll(document, ".js-releases-field .js-release-file .id", HTMLInputElement)[Symbol.iterator](); !(a = (u = c.next()).done); a = !0) {
                    var l = u.value;
                    Number(l.value) === n && e.closest(l, ".js-release-file").remove()
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
    }), r.on("upload:complete", ".js-upload-release-file", function(t) {
        o(t instanceof CustomEvent, "app/assets/modules/github/upload/release-file.js:100");
        var r = t.detail,
            n = r.policy,
            a = e.query(document, ".js-releases-field"),
            s = e.query(a, ".js-template").cloneNode(!0);
        s.classList.remove("d-none", "js-template"), e.query(s, "input.id", HTMLInputElement).value = n.asset.id || r.result.id;
        var i = n.asset.name || n.asset.href.split("/").pop(),
            u = !0,
            c = !1,
            l = void 0;
        try {
            for (var d, m = s.querySelectorAll(".js-release-asset-filename")[Symbol.iterator](); !(u = (d = m.next()).done); u = !0) {
                var f = d.value;
                f instanceof HTMLInputElement ? f.value = i : f.textContent = i
            }
        } catch (e) {
            c = !0, l = e
        } finally {
            try {
                !u && m.return && m.return()
            } finally {
                if (c) throw l
            }
        }
        var p = n.asset.size ? "(" + (n.asset.size / 1048576).toFixed(2) + " MB)" : "";
        e.query(s, ".js-release-asset-filesize").textContent = p, a.appendChild(s), a.classList.remove("not-populated"), a.classList.add("is-populated"), e.query(t.currentTarget, ".js-upload-meter").classList.add("d-none")
    }), r.on("upload:progress", ".js-upload-release-file", function(t) {
        o(t instanceof CustomEvent, "app/assets/modules/github/upload/release-file.js:133"), e.query(t.currentTarget, ".js-upload-meter").style.width = t.detail.percent + "%"
    });
    var np = function() {
            var t = X(regeneratorRuntime.mark(function t(r) {
                var n;
                return regeneratorRuntime.wrap(function(t) {
                    for (;;) switch (t.prev = t.next) {
                        case 0:
                            return n = e.getAttribute(r, "data-redirect-url"), t.prev = 1, t.next = 4, s.fetchPoll(e.getAttribute(r, "data-poll-url"));
                        case 4:
                            window.location = n, t.next = 11;
                            break;
                        case 7:
                            t.prev = 7, t.t0 = t.catch(1), e.query(document, ".js-manifest-ready-check").classList.add("d-none"), e.query(document, ".js-manifest-ready-check-failed").classList.remove("d-none");
                        case 11:
                        case "end":
                            return t.stop()
                    }
                }, t, this, [
                    [1, 7]
                ])
            }));
            return function(e) {
                return t.apply(this, arguments)
            }
        }(),
        ap = null,
        sp = new WeakMap;
 
    function op(t, r) {
        var n = e.closest(t, ".js-upload-manifest-file-container"),
            a = e.query(n, ".js-upload-progress");
        a.classList.add("active"), t.classList.add("is-progress-bar");
        var s = e.query(a, ".js-upload-meter-text");
        e.query(s, ".js-upload-meter-range-start").textContent = String(r.batch.uploaded + 1), e.query(s, ".js-upload-meter-range-end").textContent = String(r.batch.size)
    }
 
    function ip(t) {
        t.classList.remove("is-progress-bar");
        var r = e.closest(t, ".js-upload-manifest-file-container");
        e.query(r, ".js-upload-progress").classList.remove("active"), e.query(r, ".js-upload-meter-text .js-upload-meter-filename").textContent = ""
    }
 
    function up() {
        var e = void 0,
            t = void 0,
            r = new Promise(function(r, n) {
                e = r, t = n
            });
        return o(e, "app/assets/modules/github/upload/upload-manifest-file.js:140"), o(t, "app/assets/modules/github/upload/upload-manifest-file.js:141"), [r, e, t]
    }
 
    function cp(e) {
        return e._path ? e._path + "/" + e.name : e.name
    }
 
    function lp(e) {
        ip(e.currentTarget)
    }
    r.on("upload:drop:setup", ".js-upload-manifest-file", function(e) {
        o(e instanceof CustomEvent, "app/assets/modules/github/upload/upload-manifest-file.js:54");
        var t = e.detail.files,
            r = parseInt(e.currentTarget.getAttribute("data-directory-upload-max-files"), 10);
        t.length > r && (e.preventDefault(), e.currentTarget.classList.add("is-too-many"))
    }), r.on("upload:drop:setup", ".js-upload-manifest-tree-view", function(t) {
        o(t instanceof CustomEvent, "app/assets/modules/github/upload/upload-manifest-file.js:64"), t.preventDefault();
        var r = t.detail.upload,
            n = e.query(document, "#js-repo-pjax-container");
        n.addEventListener("pjax:success", function() {
            r(n.querySelector(".js-uploadable-container"))
        }, {
            once: !0
        });
        var a = e.getAttribute(t.currentTarget, "data-drop-url");
        K({
            url: a,
            container: n
        })
    }), r.on("upload:setup", ".js-upload-manifest-file", function() {
        var t = X(regeneratorRuntime.mark(function t(r) {
            var n, a, s, i, u, c, l, d, m, f, p, v, g, h;
            return regeneratorRuntime.wrap(function(t) {
                for (;;) switch (t.prev = t.next) {
                    case 0:
                        if (u = function() {
                                a.body.append("upload_manifest_id", sp.get(i))
                            }, o(r instanceof CustomEvent, "app/assets/modules/github/upload/upload-manifest-file.js:84"), n = r.detail, a = n.policyRequest, s = n.preprocess, op(i = r.currentTarget, r.detail), !sp.get(i)) {
                            t.next = 8;
                            break
                        }
                        return u(), t.abrupt("return");
                    case 8:
                        if (!ap) {
                            t.next = 11;
                            break
                        }
                        return s.push(ap.then(u)), t.abrupt("return");
                    case 11:
                        return c = e.closest(i, ".js-upload-manifest-file-container"), l = c.querySelector(".js-upload-manifest-form"), ap = k.fetchJSON(l.action, {
                            method: l.method,
                            body: new FormData(l)
                        }), d = up(), m = re(d, 2), f = m[0], p = m[1], s.push(f.then(u)), t.next = 18, ap;
                    case 18:
                        v = t.sent, g = e.query(document, ".js-manifest-commit-form", HTMLFormElement), h = g.elements.namedItem("manifest_id"), o(h instanceof HTMLInputElement, "app/assets/modules/github/upload/upload-manifest-file.js:123"), h.value = v.upload_manifest.id, sp.set(i, v.upload_manifest.id), ap = null, p();
                    case 26:
                    case "end":
                        return t.stop()
                }
            }, t, this)
        }));
        return function(e) {
            return t.apply(this, arguments)
        }
    }()), r.on("upload:start", ".js-upload-manifest-file", function(t) {
        o(t instanceof CustomEvent, "app/assets/modules/github/upload/upload-manifest-file.js:154");
        var r = t.detail,
            n = e.closest(t.currentTarget, ".js-upload-manifest-file-container"),
            a = e.query(n, ".js-upload-progress"),
            s = e.query(a, ".js-upload-meter-text");
        e.query(s, ".js-upload-meter-range-start").textContent = r.batch.uploaded + 1, e.query(s, ".js-upload-meter-filename").textContent = cp(r.file)
    }), r.on("upload:complete", ".js-upload-manifest-file", function(t) {
        o(t instanceof CustomEvent, "app/assets/modules/github/upload/upload-manifest-file.js:169");
        var r = t.detail,
            n = e.query(document, ".js-manifest-commit-file-template", HTMLTableElement).rows[0].cloneNode(!0);
        e.query(n, ".name").textContent = cp(r.file);
        var a = r.policy.asset.id || r.result.id,
            s = e.query(n, ".js-remove-manifest-file-form", HTMLFormElement).elements.namedItem("file_id");
        o(s instanceof HTMLInputElement, "app/assets/modules/github/upload/upload-manifest-file.js:185"), s.value = a;
        var i = e.query(document, ".js-manifest-file-list");
        i.classList.remove("d-none"), t.currentTarget.classList.add("is-file-list"), e.query(document, ".js-upload-progress").classList.add("is-file-list"), e.query(i, ".js-manifest-file-list-root").appendChild(n), r.batch.isFinished() && ip(t.currentTarget)
    }), r.on("upload:progress", ".js-upload-manifest-file", function(t) {
        o(t instanceof CustomEvent, "app/assets/modules/github/upload/upload-manifest-file.js:203");
        var r = t.detail,
            n = e.closest(t.currentTarget, ".js-upload-manifest-file-container");
        e.query(n, ".js-upload-meter").style.width = r.batch.percent() + "%"
    }), r.on("upload:error", ".js-upload-manifest-file", lp), r.on("upload:invalid", ".js-upload-manifest-file", lp), c.remoteForm(".js-remove-manifest-file-form", function() {
        var t = X(regeneratorRuntime.mark(function t(r, n) {
            var a;
            return regeneratorRuntime.wrap(function(t) {
                for (;;) switch (t.prev = t.next) {
                    case 0:
                        return t.next = 2, n.html();
                    case 2:
                        a = e.closest(r, ".js-manifest-file-list-root"), e.closest(r, ".js-manifest-file-entry").remove(), a.hasChildNodes() || (e.closest(a, ".js-manifest-file-list").classList.add("d-none"), e.query(document, ".js-upload-manifest-file").classList.remove("is-file-list"), e.query(document, ".js-upload-progress").classList.remove("is-file-list"));
                    case 6:
                    case "end":
                        return t.stop()
                }
            }, t, this)
        }));
        return function(e, r) {
            return t.apply(this, arguments)
        }
    }()), t.observe(".js-manifest-ready-check", {
        initialize: function(e) {
            np(e)
        }
    });
    var dp = function() {
        var e = X(regeneratorRuntime.mark(function e(t, n) {
            var a, s;
            return regeneratorRuntime.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                    case 0:
                        return e.next = 2, Os(n, t.hasAttribute("data-directory-upload"));
                    case 2:
                        if ((a = e.sent).length) {
                            e.next = 6;
                            break
                        }
                        return As(t, "is-hidden-file"), e.abrupt("return");
                    case 6:
                        s = fp.bind(null, a), !r.fire(t, "upload:drop:setup", {
                            upload: s,
                            files: a
                        }) || fp(a, t);
                    case 9:
                    case "end":
                        return e.stop()
                }
            }, e, this)
        }));
        return function(t, r) {
            return e.apply(this, arguments)
        }
    }();
 
    function mp(e) {
        return Array.from(e.types).indexOf("Files") >= 0
    }
 
    function fp(e, t) {
        var r = new qs(e);
        Hs(r, t)
    }
 
    function pp(e) {
        var t = e.dataTransfer;
        t && mp(t) && e.preventDefault()
    }
 
    function vp(e) {
        var t = e.dataTransfer;
        t && mp(t) && e.preventDefault()
    }
    var gp = null;
 
    function hp(e) {
        if (!Ep) {
            var t = e.currentTarget;
            o(t instanceof Element, "app/assets/modules/github/uploads.js:69"), gp && clearTimeout(gp), gp = setTimeout(function() {
                return t.classList.remove("dragover")
            }, 200);
            var r = e.dataTransfer;
            r && mp(r) && (r.dropEffect = "copy", t.classList.add("dragover"), e.stopPropagation(), e.preventDefault())
        }
    }
 
    function yp(e) {
        e.dataTransfer && (e.dataTransfer.dropEffect = "none"), o(e.currentTarget instanceof Element, "app/assets/modules/github/uploads.js:92"), e.currentTarget.classList.remove("dragover"), e.stopPropagation(), e.preventDefault()
    }
 
    function bp(e) {
        e.target instanceof Element && e.target.classList.contains("js-document-dropzone") && (o(e.currentTarget instanceof Element, "app/assets/modules/github/uploads.js:103"), e.currentTarget.classList.remove("dragover"))
    }
 
    function jp(e) {
        var t = document.body;
        o(t, "app/assets/modules/github/uploads.js:128");
        var r = e.currentTarget;
        o(r instanceof Element, "app/assets/modules/github/uploads.js:131"), r.classList.remove("dragover"), t.classList.remove("dragover");
        var n = e.dataTransfer;
        n && mp(n) && (dp(r, n), e.stopPropagation(), e.preventDefault())
    }
 
    function Lp(e) {
        if (e.clipboardData && e.clipboardData.items) {
            var t = Array.from(e.clipboardData.items).map(function(e) {
                return [e, function(e) {
                    switch (e) {
                        case "image/gif":
                            return "image.gif";
                        case "image/png":
                            return "image.png";
                        case "image/jpeg":
                            return "image.jpg"
                    }
                }(e.type)]
            }).filter(function(e) {
                return e[1]
            }).shift();
            if (t) {
                var r = re(t, 1)[0].getAsFile();
                o(e.currentTarget instanceof HTMLElement, "app/assets/modules/github/uploads.js:171"), o(r, "app/assets/modules/github/uploads.js:172"), fp([r], e.currentTarget), e.preventDefault()
            }
        }
    }
 
    function wp(e) {
        var t = e.target;
        if (t instanceof HTMLInputElement && t.classList.contains("js-manual-file-chooser")) {
            if (t instanceof HTMLElement) {
                var r = t.closest(".js-details-menu");
                r && r instanceof HTMLDetailsElement && (r.open = !1)
            }
            e.currentTarget instanceof Ks ? e.currentTarget.upload(t.files) : (o(e.currentTarget instanceof Element, "app/assets/modules/github/uploads.js:201"), fp(t.files, e.currentTarget)), t.value = ""
        }
    }
 
    function xp(t) {
        var r = t.currentTarget;
        o(r instanceof HTMLElement, "app/assets/modules/github/uploads.js:214"), As(r.classList.contains("js-uploadable-container") ? r : e.query(r, ".js-uploadable-container, file-attachment"), "is-default")
    }
    var kp = 0,
        Ep = !1;
 
    function Tp() {
        Ep = !0
    }
 
    function qp() {
        Ep = !1
    }
 
    function Sp(t) {
        return e.query(t, ".js-user-status-details").hasAttribute("open")
    }
 
    function Ap(t) {
        var r = t.querySelector(".js-emoji-picker");
        r && (! function(t) {
            var r = e.query(t, ".js-original-emoji-category"),
                n = e.query(t, ".js-original-emoji-category-tab", HTMLElement),
                a = ms(t),
                s = fs(t),
                o = t.querySelector(".js-originally-selected-emoji");
            if (o) {
                var i = t.querySelector(".selected-emoji");
                i && i.classList.remove("selected-emoji"), o.classList.add("selected-emoji")
            }
            a.removeAttribute("aria-selected"), r.setAttribute("aria-selected", "true"), s.hidden = !0, n.hidden = !1
        }(r), vs(r), bs(r))
    }
 
    function Mp(t) {
        var r = e.query(t, ".js-user-status-original-emoji"),
            n = e.query(t, ".js-user-status-custom-emoji"),
            a = e.query(t, ".js-user-status-no-emoji-icon");
        n.innerHTML = r.innerHTML, a.hidden = n.hasChildNodes()
    }
 
    function Hp(t, r) {
        var n = e.query(t, ".js-user-status-message-field", HTMLInputElement);
        Mp(t), n.focus(),
            function(t, r) {
                var n = t.querySelector(".js-user-status-emoji-picker");
                if (n instanceof IncludeFragmentElement) {
                    var a = e.getAttribute(n, "data-url");
                    if (r) {
                        a = new URL(a, window.location.origin);
                        var s = new URLSearchParams(a.search.slice(1));
                        s.append("show_picker", "1"), a.search = s.toString()
                    }
                    n.setAttribute("src", a.toString())
                }
            }(t, r),
            function(t) {
                var r = t.querySelector(".js-user-status-org-picker");
                if (r instanceof IncludeFragmentElement) {
                    var n = e.getAttribute(r, "data-url");
                    r.src = n.toString()
                }
            }(t)
    }
 
    function Ip(t, r) {
        Sp(t) ? function(t) {
            var r = e.query(t, ".js-user-status-message-field", HTMLInputElement);
            Mp(t), Ap(t), r.value = r.defaultValue, pa(t)
        }(t) : Hp(t, r)
    }
 
    function Rp(e, t) {
        if (!Sp(e)) {
            var r = e.querySelectorAll(".js-toggle-user-status-edit.Details-content--closed"),
                n = !0,
                a = !1,
                s = void 0;
            try {
                for (var o, i = r[Symbol.iterator](); !(n = (o = i.next()).done); n = !0) {
                    var u = o.value;
                    u.classList.toggle("text-blue", t), u.classList.toggle("link-gray-dark", !t)
                }
            } catch (e) {
                a = !0, s = e
            } finally {
                try {
                    !n && i.return && i.return()
                } finally {
                    if (a) throw s
                }
            }
        }
    }
 
    function _p(t) {
        t.target instanceof Element && Rp(e.closest(t.target, ".js-user-status-container"), !0)
    }
 
    function Cp(t) {
        t.target instanceof Element && Rp(e.closest(t.target, ".js-user-status-container"), !1)
    }
 
    function Fp(t, r) {
        e.query(t, ".js-user-status-custom-emoji").innerHTML = r.innerHTML, e.query(t, ".js-user-status-no-emoji-icon").hidden = !0
    }
 
    function Pp(t, r) {
        e.query(t, ".js-user-status-emoji-field", HTMLInputElement).value = r.value
    }
 
    function Np(e, t) {
        if ("Escape" === x(t)) {
            var r = e.closest(".js-user-status-container");
            if (!r) return;
            e.value = e.defaultValue, Ip(r, !1)
        }
    }
 
    function Dp(t) {
        var r = e.query(t, ".js-user-status-submit", HTMLButtonElement),
            n = e.query(t, ".js-user-status-message-field", HTMLInputElement),
            a = n.value.trim(),
            s = "" !== e.query(t, ".js-user-status-emoji-field", HTMLInputElement).value,
            o = !1;
        (function(e) {
            return ma(e) - A.getUtf8StringLength(e.value) < 0
        })(n) && (o = !0), a.length < 1 && s && (o = !0), r.disabled = o
    }
 
    function Op(e) {
        var t, r = e.currentTarget;
        o(r instanceof Element, "app/assets/modules/github/warn-unsaved-changes.js:39"), j.hasDirtyFields(r) ? (t = r.getAttribute("data-warn-unsaved-changes") || "Changes you made may not be saved.", window.onbeforeunload = function(e) {
            return e.returnValue = t, t
        }) : Bp()
    }
 
    function Bp() {
        window.onbeforeunload = null
    }
 
    function Up(e) {
        var t = e.currentTarget;
        o(t instanceof Element, "app/assets/modules/github/warn-unsaved-changes.js:63"), t.hasAttribute("open") || Bp()
    }
 
    function Vp(t) {
        var r = t.currentTarget;
        if (o(r instanceof Element, "app/assets/modules/github/warn-unsaved-changes.js:73"), r.closest("details[open]")) {
            var n = !0,
                a = e.querySelectorAll(r, "form[data-warn-unsaved-changes]", HTMLFormElement),
                s = !0,
                i = !1,
                u = void 0;
            try {
                for (var c, l = a[Symbol.iterator](); !(s = (c = l.next()).done); s = !0) {
                    var d = c.value;
                    if (j.hasDirtyFields(d)) {
                        var m = e.getAttribute(d, "data-warn-unsaved-changes");
                        n = confirm(m);
                        break
                    }
                }
            } catch (e) {
                i = !0, u = e
            } finally {
                try {
                    !s && l.return && l.return()
                } finally {
                    if (i) throw u
                }
            }
            n || t.preventDefault()
        }
    }
 
    function zp(e, t, r) {
        var n = e[r],
            a = {
                position_in_list: r,
                number_of_related_issues: e.length,
                title_length: t.length
            };
        return n.repository.isPrivate || (a = Object.assign({}, a, {
            title_string_at_time_of_click: t,
            id_of_clicked_result: n.databaseId,
            results_shown_at_time_of_click: e.map(function(e) {
                return e.databaseId
            })
        })), a
    }
    t.observe(".js-document-dropzone", {
        add: function(e) {
            var t = document.body;
            o(t, "app/assets/modules/github/uploads.js:241"), t.addEventListener("dragstart", Tp), t.addEventListener("dragend", qp), t.addEventListener("dragenter", hp), t.addEventListener("dragover", hp), t.addEventListener("dragleave", bp), e.addEventListener("drop", jp)
        },
        remove: function(e) {
            var t = document.body;
            o(t, "app/assets/modules/github/uploads.js:252"), t.removeEventListener("dragstart", Tp), t.removeEventListener("dragend", qp), t.removeEventListener("dragenter", hp), t.removeEventListener("dragover", hp), t.removeEventListener("dragleave", bp), e.removeEventListener("drop", jp)
        }
    }), t.observe(".js-uploadable-container, file-attachment", {
        add: function(e) {
            0 == kp++ && (document.addEventListener("drop", pp), document.addEventListener("dragover", vp)), e.addEventListener("change", wp);
            var t = e.closest("form");
            t && t.addEventListener("reset", xp)
        },
        remove: function(e) {
            0 == --kp && (document.removeEventListener("drop", pp), document.removeEventListener("dragover", vp)), e.removeEventListener("change", wp);
            var t = e.closest("form");
            t && t.removeEventListener("reset", xp)
        }
    }), t.observe(".js-uploadable-container", {
        add: function(e) {
            e.addEventListener("dragenter", hp), e.addEventListener("dragover", hp), e.addEventListener("dragleave", yp), e.addEventListener("drop", jp), e.addEventListener("paste", Lp)
        },
        remove: function(e) {
            e.removeEventListener("dragenter", hp), e.removeEventListener("dragover", hp), e.removeEventListener("dragleave", yp), e.removeEventListener("drop", jp), e.removeEventListener("paste", Lp)
        }
    }), c.remoteForm(".js-user-status-form", function() {
        var t = X(regeneratorRuntime.mark(function t(r, n) {
            var a, o, i, u, c, l, d, m, f, p, v, g;
            return regeneratorRuntime.wrap(function(t) {
                for (;;) switch (t.prev = t.next) {
                    case 0:
                        if (!e.query(r, ".js-user-status-submit", HTMLButtonElement).disabled) {
                            t.next = 3;
                            break
                        }
                        return t.abrupt("return");
                    case 3:
                        return a = void 0, t.prev = 4, t.next = 7, n.html();
                    case 7:
                        a = t.sent, t.next = 13;
                        break;
                    case 10:
                        return t.prev = 10, t.t0 = t.catch(4), t.abrupt("return");
                    case 13:
                        (o = e.closest(r, ".js-user-status-container")).replaceWith(a.html), i = document.querySelectorAll(".js-user-status-container"), u = !0, c = !1, l = void 0, t.prev = 19, d = i[Symbol.iterator]();
                    case 21:
                        if (u = (m = d.next()).done) {
                            t.next = 34;
                            break
                        }
                        if (f = m.value, o === f) {
                            t.next = 31;
                            break
                        }
                        if (!(p = f.closest(".js-user-status-context"))) {
                            t.next = 31;
                            break
                        }
                        return v = e.getAttribute(p, "data-url"), t.next = 29, s.fetchSafeDocumentFragment(document, v);
                    case 29:
                        g = t.sent, f.replaceWith(g);
                    case 31:
                        u = !0, t.next = 21;
                        break;
                    case 34:
                        t.next = 40;
                        break;
                    case 36:
                        t.prev = 36, t.t1 = t.catch(19), c = !0, l = t.t1;
                    case 40:
                        t.prev = 40, t.prev = 41, !u && d.return && d.return();
                    case 43:
                        if (t.prev = 43, !c) {
                            t.next = 46;
                            break
                        }
                        throw l;
                    case 46:
                        return t.finish(43);
                    case 47:
                        return t.finish(40);
                    case 48:
                    case "end":
                        return t.stop()
                }
            }, t, this, [
                [4, 10],
                [19, 36, 40, 48],
                [41, , 43, 47]
            ])
        }));
        return function(e, r) {
            return t.apply(this, arguments)
        }
    }()), t.observe(".js-toggle-user-status-edit", function(e) {
        e.addEventListener("mouseenter", _p), e.addEventListener("mouseleave", Cp)
    }), r.on("click", ".js-toggle-user-status-edit", function(t) {
        var r = t.currentTarget;
        Ip(e.closest(r, ".js-user-status-container"), !!t.target.closest(".js-toggle-user-status-emoji-picker"))
    }), r.on("click", ".js-toggle-user-status-emoji-picker", function(t) {
        var r = t.currentTarget,
            n = e.closest(r, ".js-user-status-container").querySelector(".js-emoji-picker");
        n && n.hidden && setTimeout(function() {
            return function(t) {
                var r = e.query(t, ".js-emoji-picker-filter", HTMLInputElement),
                    n = !t.hidden;
                t.hidden = n, n ? (r.value = "", document.removeEventListener("keydown", ys)) : (r.focus(), document.addEventListener("keydown", ys))
            }(n)
        }, 50)
    }), r.on("click", ".js-emoji-button", function(t) {
        var r, n, a, s = t.currentTarget;
        o(s instanceof HTMLButtonElement, "app/assets/modules/github/user-status.js:324"), r = s, n = e.closest(r, ".js-user-status-container"), a = e.query(n, ".js-emoji-picker"), Pp(n, r),
            function(e) {
                var t = e.querySelector(".selected-emoji");
                t && t.classList.remove("selected-emoji")
            }(n), gs(r), Fp(n, r), Dp(n), bs(a)
    }), r.on("click", ".js-user-status-emoji-tab", function(t) {
        var r, n, a, s = t.currentTarget;
        r = s, n = e.closest(r, ".js-emoji-picker"), a = e.query(n, ".js-emoji-picker-filter", HTMLInputElement), vs(n), n.hidden || a.focus()
    }), t.observe(".js-user-status-message-field", {
        constructor: HTMLInputElement,
        subscribe: function(e) {
            return y.fromEvent(e, "keyup", function(t) {
                t instanceof KeyboardEvent && Np(e, t)
            })
        }
    }), t.observe(".js-emoji-picker-filter", {
        constructor: HTMLInputElement,
        subscribe: function(e) {
            return y.fromEvent(e, "keyup", function(t) {
                t instanceof KeyboardEvent && Np(e, t)
            })
        }
    }), r.on("click", ".js-clear-user-status-button", function(t) {
        var r = t.currentTarget;
        ! function(t) {
            e.query(t, ".js-user-status-emoji-field", HTMLInputElement).value = "", e.query(t, ".js-user-status-no-emoji-icon").hidden = !1, e.query(t, ".js-user-status-custom-emoji").innerHTML = "";
            var r = e.query(t, ".js-user-status-message-field", HTMLInputElement);
            r.value = "", r.classList.contains("js-characters-remaining-field") && fa(r);
            var n = t.querySelector(".selected-emoji.js-emoji-button");
            n && n.classList.remove("selected-emoji"), Dp(t)
        }(e.closest(r, ".js-user-status-container"))
    }), r.on("click", ".js-predefined-user-status", function(t) {
        var r = t.currentTarget;
        o(r instanceof HTMLButtonElement, "app/assets/modules/github/user-status.js:363"),
            function(t) {
                var r = e.closest(t, ".js-user-status-container"),
                    n = e.query(t, ".js-predefined-user-status-emoji"),
                    a = e.query(t, ".js-predefined-user-status-message"),
                    s = e.query(r, ".js-user-status-message-field", HTMLInputElement);
                s.value = a.textContent.trim(), Fp(r, n), Pp(r, t), Dp(r), s.classList.contains("js-characters-remaining-field") && fa(s)
            }(r)
    }), n.onInput(".js-user-status-message-field", function(t) {
        var r = t.target;
        o(r instanceof HTMLElement, "app/assets/modules/github/user-status.js:370"), Dp(e.closest(r, ".js-user-status-form"))
    }), r.on("click", ".js-user-status-org-button", function(t) {
        var r = t.currentTarget;
        o(r instanceof HTMLButtonElement, "app/assets/modules/github/user-status.js:378"),
            function(t) {
                var r = e.closest(t, ".js-user-status-container"),
                    n = e.query(r, ".js-user-status-org-id-field", HTMLInputElement),
                    a = e.query(r, ".js-user-status-org-details"),
                    s = e.query(r, ".js-user-status-selected-org"),
                    o = e.query(t, ".js-user-status-org-display"),
                    i = e.query(r, ".js-user-status-org-message"),
                    u = t.value,
                    c = "" !== u,
                    l = e.query(r, ".js-suggester"),
                    d = "";
                n.value = u, s.innerHTML = "";
                var m = o.cloneNode(!0);
                if (m.hidden = !1, s.appendChild(m), a.removeAttribute("open"), c) {
                    var f = e.getAttribute(i, "data-prefix"),
                        p = e.getAttribute(i, "data-suffix"),
                        v = e.getAttribute(t, "data-org");
                    i.textContent = "" + f + v + p;
                    var g = new URL(e.getAttribute(l, "data-org-url"), window.location.origin),
                        h = new URLSearchParams(g.search.slice(1));
                    h.append("global_id", u), g.search = h.toString(), d = g.toString()
                } else i.textContent = e.getAttribute(i, "data-none"), d = e.getAttribute(l, "data-no-org-url");
                l.setAttribute("data-url", d)
            }(r)
    }), t.observe("[data-warn-unsaved-changes]", {
        add: function(t) {
            t.addEventListener("input", Op), t.addEventListener("change", Op), t.addEventListener("submit", Bp);
            var r = t.closest("details-dialog");
            r && (e.closest(r, "details").addEventListener("toggle", Up), r.addEventListener("details-dialog:will-close", Vp))
        },
        remove: function(t) {
            t.removeEventListener("input", Op), t.removeEventListener("change", Op), t.removeEventListener("submit", Bp);
            var r = t.closest("details-dialog");
            r && (e.closest(r, "details").removeEventListener("toggle", Up), r.removeEventListener("details-dialog:will-close", Vp), Bp())
        }
    });
    var Wp = function() {
            var t = X(regeneratorRuntime.mark(function t(r) {
                var n, a, i;
                return regeneratorRuntime.wrap(function(t) {
                    for (;;) switch (t.prev = t.next) {
                        case 0:
                            if (n = r.value, Kp = n, n) {
                                t.next = 4;
                                break
                            }
                            return t.abrupt("return", []);
                        case 4:
                            return ev(r), a = e.getAttribute(r, "data-related-issues-path"), t.next = 8, k.fetchJSON(s.csrfRequest(a, {
                                method: "POST",
                                body: Zp(n, r.getAttribute("data-repository-id"))
                            }));
                        case 8:
                            if (i = t.sent, tv(), o(i.data, "app/assets/modules/github/related-issues.js:152"), !i.data.errors) {
                                t.next = 13;
                                break
                            }
                            return t.abrupt("return", []);
                        case 13:
                            return t.abrupt("return", i.data.repository.relatedIssues.nodes);
                        case 14:
                        case "end":
                            return t.stop()
                    }
                }, t, this)
            }));
            return function(e) {
                return t.apply(this, arguments)
            }
        }(),
        $p = "related-issues-hidden",
        Kp = void 0;
 
    function Jp(t, r) {
        if (0 === r.length) return tv(), Gp(), e.query(document, ".js-related-issues-suggestions-results-wrapper").hidden = !0, void
        function() {
            var e = document.querySelector(".js-related-issues-beta-notice");
            if (e) {
                var t = document.querySelector("#first-time-contributor");
                t && (t.style.top = "25%");
                var r = document.querySelector("#prior-contributor");
                r && (r.style.top = "25%"), e.classList.add("d-none")
            }
        }();
        var n, a;
        e.query(document, ".js-number-of-related-issues", HTMLInputElement).value = "" + r.length, n = function(t, r) {
                for (var n = e.query(document, ".js-related-issues-suggestions-template", HTMLTemplateElement), a = document.createDocumentFragment(), s = 0; s < r.length; s++) {
                    var o = rv(n, r[s], zp(r, t.value, s));
                    a.appendChild(o)
                }
                return a
            }(t, r), (a = e.query(document, ".js-related-issues-suggestions-results-container")).innerHTML = "", a.appendChild(n), w.getItem($p) || (Yp(!0), Xp(!0), e.query(document, ".js-related-issues-results-display").setAttribute("open", "")), e.query(document, ".js-related-issues-suggestions-results-wrapper").hidden = !1,
            function() {
                var e = document.querySelector(".js-related-issues-beta-notice");
                if (e) {
                    var t = document.querySelector("#first-time-contributor");
                    t && (t.style.top = "70%");
                    var r = document.querySelector("#prior-contributor");
                    r && (r.style.top = "70%"), e.classList.remove("d-none")
                }
            }()
    }
 
    function Gp() {
        Yp(!1), Xp(!1), e.query(document, ".js-related-issues-results-display").removeAttribute("open")
    }
 
    function Xp() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : void 0,
            r = e.query(document, ".js-related-issues-found-message"),
            n = e.query(document, ".js-related-issues-feedback-message");
        void 0 !== t ? (r.hidden = !t, n.hidden = !t) : (r.hidden = !r.hidden, n.hidden = !n.hidden)
    }
    t.observe(".js-related-issues-search", {
        constructor: HTMLInputElement,
        add: function(e) {
            var t = this;
            document.querySelector(".js-related-issues-suggestions-container") && (w.getItem($p) && Gp(), d.addThrottledInputEventListener(e, X(regeneratorRuntime.mark(function r() {
                return regeneratorRuntime.wrap(function(t) {
                    for (;;) switch (t.prev = t.next) {
                        case 0:
                            return t.t0 = Jp, t.t1 = e, t.next = 4, Wp(e);
                        case 4:
                            t.t2 = t.sent, (0, t.t0)(t.t1, t.t2);
                        case 6:
                        case "end":
                            return t.stop()
                    }
                }, r, t)
            })), {
                wait: 500
            }), r.on("change", ".js-related-issues-search", X(regeneratorRuntime.mark(function r() {
                return regeneratorRuntime.wrap(function(t) {
                    for (;;) switch (t.prev = t.next) {
                        case 0:
                            if (e.value === Kp) {
                                t.next = 7;
                                break
                            }
                            return t.t0 = Jp, t.t1 = e, t.next = 5, Wp(e);
                        case 5:
                            t.t2 = t.sent, (0, t.t0)(t.t1, t.t2);
                        case 7:
                        case "end":
                            return t.stop()
                    }
                }, r, t)
            }))))
        }
    }), r.on("submit", "form#new_issue", function(e) {
        e.defaultPrevented || w.removeItem($p)
    }), r.on("click", ".js-toggle-related-results", function() {
        Yp(), Xp(), e.query(document, ".js-related-issues-results-display").hasAttribute("open") ? w.setItem($p, "true") : (w.removeItem($p), window.localStorage.removeItem($p))
    }), r.on("navigation:keydown", ".js-issue-title-input-container", function(t) {
        o(t instanceof CustomEvent, "app/assets/modules/github/related-issues.js:100");
        var r = document.querySelector('.js-issue-title-input-container .js-navigation-item[aria-selected="true"]'),
            n = e.query(document, ".js-related-issues-results-display").hasAttribute("open");
        switch (t.detail.hotkey) {
            case "Enter":
                if (!r) {
                    var a = e.closest(t.currentTarget, "form", HTMLFormElement);
                    a.querySelector("input[type=submit], button[type=submit]").disabled || l.submit(a)
                }
                break;
            case "Escape":
                n && e.query(document, ".js-hide-related-results").click()
        }
    }), n.onKey("keydown", ".js-related-issues-search", function(e) {
        document.querySelector('.js-issue-title-input-container .js-navigation-item[aria-selected="true"]') || Zt(e)
    });
    var Qp = !1;
 
    function Yp() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : void 0,
            r = void 0;
        r = void 0 === t ? !e.query(document, ".js-related-issues-results-display").hasAttribute("open") : !!t, !Qp && r ? (_.activate(e.query(document, ".js-related-issues-suggestions-results-container")), e.query(document, ".js-related-issues-search").classList.add("js-navigation-enable")) : (_.deactivate(e.query(document, ".js-related-issues-suggestions-results-container")), e.query(document, ".js-related-issues-search").classList.remove("js-navigation-enable"))
    }
 
    function Zp(e, t) {
        o(t, "app/assets/modules/github/related-issues.js:315");
        var r = new FormData;
        return r.append("variables[query]", e), r.append("variables[repository_id]", t), r
    }
 
    function ev(t) {
        var r = e.query(document, ".js-related-issues-spinner");
        "true" === t.getAttribute("data-user-has-opted-in") && (r.hidden = !1)
    }
 
    function tv() {
        var e = document.querySelector(".js-related-issues-spinner");
        e && (e.hidden = !0)
    }
 
    function rv(t, r, n) {
        var a = t.content.cloneNode(!0);
        "OPEN" === r.state ? nv(a, ".js-related-issues-octicon-issue-opened") : nv(a, ".js-related-issues-octicon-issue-closed");
        var s = e.query(a, ".js-related-issue-suggestion-link", HTMLAnchorElement);
        if (s.href = r.url, s.setAttribute("data-hydro-client-context", JSON.stringify(n)), e.query(a, ".js-related-issue-suggestion-title", HTMLElement).textContent = r.title, e.query(a, ".js-related-issue-number", HTMLElement).textContent = "#" + r.number, e.query(a, ".js-related-issue-opened-at", HTMLElement).setAttribute("datetime", r.createdAt), r.author) {
            var o = e.query(a, ".js-related-issue-author", HTMLElement);
            o.textContent = "" + r.author.login, o.hidden = !1
        }
        return e.query(a, ".js-related-issue-updated-at", HTMLElement).setAttribute("datetime", r.updatedAt), e.query(a, ".js-related-issue-suggestion-comment-count").textContent = r.comments.totalCount, a
    }
 
    function nv(t, r) {
        var n = e.query(t, ".js-related-issue-octicon"),
            a = e.query(n, r, SVGElement);
        n.classList.remove("d-none"), a.classList.remove("d-none")
    }
    r.on("compositionstart", ".js-related-issues-search", function() {
        Yp(!1), Qp = !0
    }), r.on("compositionend", ".js-related-issues-search", function() {
        Qp = !1, Yp()
    }), r.on("click", ["form button:not([type])", "form button[type=submit]", "form input[type=submit]"].join(", "), function(e) {
        var t = e.currentTarget;
        o(t instanceof HTMLButtonElement || t instanceof HTMLInputElement, "app/assets/modules/github/remote.js:159"), t.form && !e.defaultPrevented && S.persistSubmitButtonValue(t)
    }), c.remoteForm("form[data-remote]", function(e, t, n) {
        "json" === e.getAttribute("data-type") && n.headers.set("Accept", "application/json"), r.fire(e, "deprecatedAjaxSend", {
            request: n
        }), t.text().catch(function(e) {
            if (e.response) return e.response;
            throw e
        }).then(function(t) {
            t.status < 300 ? r.fire(e, "deprecatedAjaxSuccess") : r.fire(e, "deprecatedAjaxError", {
                error: t.statusText,
                status: t.status,
                text: t.text
            })
        }, function(t) {
            r.fire(e, "deprecatedAjaxError", {
                error: t.message,
                status: 0,
                text: null
            })
        }).then(function() {
            r.fire(e, "deprecatedAjaxComplete")
        })
    }), r.on("deprecatedAjaxComplete", "form", function(e) {
        var t = e.currentTarget;
        o(t instanceof HTMLFormElement, "app/assets/modules/github/remote.js:170");
        var r = S.findPersistedSubmitButtonValue(t);
        r && r.remove()
    }), c.afterRemote(function(e) {
        var t = S.findPersistedSubmitButtonValue(e);
        t && t.remove()
    })
});
 
//# sourceMappingURL=github-5357d8084028db31b7941be5db032b9f.js.map