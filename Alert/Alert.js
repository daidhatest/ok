! function(t, e) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : (t = t || self).Sweetalert2 = e()
}(this, function() {
    "use strict";

    function r(t) {
        return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        })(t)
    }

    function a(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }

    function o(t, e) {
        for (var n = 0; n < e.length; n++) {
            var o = e[n];
            o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o)
        }
    }

    function s(t, e, n) {
        return e && o(t.prototype, e), n && o(t, n), t
    }

    function c() {
        return (c = Object.assign || function(t) {
            for (var e = 1; e < arguments.length; e++) {
                var n, o = arguments[e];
                for (n in o) Object.prototype.hasOwnProperty.call(o, n) && (t[n] = o[n])
            }
            return t
        }).apply(this, arguments)
    }

    function u(t) {
        return (u = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
            return t.__proto__ || Object.getPrototypeOf(t)
        })(t)
    }

    function l(t, e) {
        return (l = Object.setPrototypeOf || function(t, e) {
            return t.__proto__ = e, t
        })(t, e)
    }

    function d() {
        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
        if (Reflect.construct.sham) return !1;
        if ("function" == typeof Proxy) return !0;
        try {
            return Date.prototype.toString.call(Reflect.construct(Date, [], function() {})), !0
        } catch (t) {
            return !1
        }
    }

    function i(t, e, n) {
        return (i = d() ? Reflect.construct : function(t, e, n) {
            var o = [null];
            o.push.apply(o, e);
            o = new(Function.bind.apply(t, o));
            return n && l(o, n.prototype), o
        }).apply(null, arguments)
    }

    function p(t, e) {
        return !e || "object" != typeof e && "function" != typeof e ? function(t) {
            if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return t
        }(t) : e
    }

    function f(t, e, n) {
        return (f = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function(t, e, n) {
            t = function(t, e) {
                for (; !Object.prototype.hasOwnProperty.call(t, e) && null !== (t = u(t)););
                return t
            }(t, e);
            if (t) {
                e = Object.getOwnPropertyDescriptor(t, e);
                return e.get ? e.get.call(n) : e.value
            }
        })(t, e, n || t)
    }

    function m(e) {
        return Object.keys(e).map(function(t) {
            return e[t]
        })
    }

    function h(t) {
        return Array.prototype.slice.call(t)
    }

    function g(t, e) {
        e = '"'.concat(t, '" is deprecated and will be removed in the next major release. Please use "').concat(e, '" instead.'), -1 === K.indexOf(e) && (K.push(e), z(e))
    }

    function v(t) {
        return t && "function" == typeof t.toPromise
    }

    function y(t) {
        return v(t) ? t.toPromise() : Promise.resolve(t)
    }

    function b(t) {
        return t && Promise.resolve(t) === t
    }

    function w(t) {
        return t instanceof Element || "object" === r(t = t) && t.jquery
    }

    function C() {
        return document.body.querySelector(".".concat($.container))
    }

    function k(t) {
        var e = C();
        return e ? e.querySelector(t) : null
    }

    function t(t) {
        return k(".".concat(t))
    }

    function x() {
        return t($.popup)
    }

    function n() {
        var t = x();
        return h(t.querySelectorAll(".".concat($.icon)))
    }

    function B() {
        var t = n().filter(function(t) {
            return bt(t)
        });
        return t.length ? t[0] : null
    }

    function A() {
        return t($.title)
    }

    function P() {
        return t($.content)
    }

    function E() {
        return t($.image)
    }

    function O() {
        return t($["progress-steps"])
    }

    function S() {
        return t($["validation-message"])
    }

    function T() {
        return k(".".concat($.actions, " .").concat($.confirm))
    }

    function L() {
        return k(".".concat($.actions, " .").concat($.deny))
    }

    function D() {
        return k(".".concat($.loader))
    }

    function I() {
        return k(".".concat($.actions, " .").concat($.cancel))
    }

    function q() {
        return t($.actions)
    }

    function j() {
        return t($.header)
    }

    function M() {
        return t($.footer)
    }

    function V() {
        return t($["timer-progress-bar"])
    }

    function H() {
        return t($.close)
    }

    function R() {
        var t = h(x().querySelectorAll('[tabindex]:not([tabindex="-1"]):not([tabindex="0"])')).sort(function(t, e) {
                return t = parseInt(t.getAttribute("tabindex")), (e = parseInt(e.getAttribute("tabindex"))) < t ? 1 : t < e ? -1 : 0
            }),
            e = h(x().querySelectorAll('\n  a[href],\n  area[href],\n  input:not([disabled]),\n  select:not([disabled]),\n  textarea:not([disabled]),\n  button:not([disabled]),\n  iframe,\n  object,\n  embed,\n  [tabindex="0"],\n  [contenteditable],\n  audio[controls],\n  video[controls],\n  summary\n')).filter(function(t) {
                return "-1" !== t.getAttribute("tabindex")
            });
        return function(t) {
            for (var e = [], n = 0; n < t.length; n++) - 1 === e.indexOf(t[n]) && e.push(t[n]);
            return e
        }(t.concat(e)).filter(function(t) {
            return bt(t)
        })
    }

    function N() {
        return !X() && !document.body.classList.contains($["no-backdrop"])
    }

    function U(e, t) {
        e.textContent = "", t && (t = (new DOMParser).parseFromString(t, "text/html"), h(t.querySelector("head").childNodes).forEach(function(t) {
            e.appendChild(t)
        }), h(t.querySelector("body").childNodes).forEach(function(t) {
            e.appendChild(t)
        }))
    }

    function _(t, e) {
        if (e) {
            for (var n = e.split(/\s+/), o = 0; o < n.length; o++)
                if (!t.classList.contains(n[o])) return;
            return 1
        }
    }

    function F(t, e, n) {
        var o, i;
        if (i = e, h((o = t).classList).forEach(function(t) {
                -1 === m($).indexOf(t) && -1 === m(J).indexOf(t) && -1 === m(i.showClass).indexOf(t) && o.classList.remove(t)
            }), e.customClass && e.customClass[n]) {
            if ("string" != typeof e.customClass[n] && !e.customClass[n].forEach) return z("Invalid type of customClass.".concat(n, '! Expected string or iterable object, got "').concat(r(e.customClass[n]), '"'));
            gt(t, e.customClass[n])
        }
    }
    var e = "SweetAlert2:",
        z = function(t) {
            console.warn("".concat(e, " ").concat(t))
        },
        W = function(t) {
            console.error("".concat(e, " ").concat(t))
        },
        K = [],
        Y = function(t) {
            return "function" == typeof t ? t() : t
        },
        Z = Object.freeze({
            cancel: "cancel",
            backdrop: "backdrop",
            close: "close",
            esc: "esc",
            timer: "timer"
        }),
        Q = function(t) {
            var e, n = {};
            for (e in t) n[t[e]] = "swal2-" + t[e];
            return n
        },
        $ = Q(["container", "shown", "height-auto", "iosfix", "popup", "modal", "no-backdrop", "no-transition", "toast", "toast-shown", "toast-column", "show", "hide", "close", "title", "header", "content", "html-container", "actions", "confirm", "deny", "cancel", "footer", "icon", "icon-content", "image", "input", "file", "range", "select", "radio", "checkbox", "label", "textarea", "inputerror", "input-label", "validation-message", "progress-steps", "active-progress-step", "progress-step", "progress-step-line", "loader", "loading", "styled", "top", "top-start", "top-end", "top-left", "top-right", "center", "center-start", "center-end", "center-left", "center-right", "bottom", "bottom-start", "bottom-end", "bottom-left", "bottom-right", "grow-row", "grow-column", "grow-fullscreen", "rtl", "timer-progress-bar", "timer-progress-bar-container", "scrollbar-measure", "icon-success", "icon-warning", "icon-info", "icon-question", "icon-error"]),
        J = Q(["success", "warning", "info", "question", "error"]),
        X = function() {
            return document.body.classList.contains($["toast-shown"])
        },
        G = {
            previousBodyPadding: null
        };

    function tt(t, e) {
        if (!e) return null;
        switch (e) {
            case "select":
            case "textarea":
            case "file":
                return yt(t, $[e]);
            case "checkbox":
                return t.querySelector(".".concat($.checkbox, " input"));
            case "radio":
                return t.querySelector(".".concat($.radio, " input:checked")) || t.querySelector(".".concat($.radio, " input:first-child"));
            case "range":
                return t.querySelector(".".concat($.range, " input"));
            default:
                return yt(t, $.input)
        }
    }

    function et(t) {
        var e;
        t.focus(), "file" !== t.type && (e = t.value, t.value = "", t.value = e)
    }

    function nt(t, e, n) {
        t && e && ("string" == typeof e && (e = e.split(/\s+/).filter(Boolean)), e.forEach(function(e) {
            t.forEach ? t.forEach(function(t) {
                n ? t.classList.add(e) : t.classList.remove(e)
            }) : n ? t.classList.add(e) : t.classList.remove(e)
        }))
    }

    function ot(t, e, n) {
        n || 0 === parseInt(n) ? t.style[e] = "number" == typeof n ? "".concat(n, "px") : n : t.style.removeProperty(e)
    }

    function it(t, e) {
        e = 1 < arguments.length && void 0 !== e ? e : "flex", t.style.display = e
    }

    function rt(t) {
        t.style.display = "none"
    }

    function at(t, e, n, o) {
        (e = t.querySelector(e)) && (e.style[n] = o)
    }

    function st(t, e, n) {
        e ? it(t, n) : rt(t)
    }

    function ct(t) {
        return !!(t.scrollHeight > t.clientHeight)
    }

    function ut(t) {
        var e = window.getComputedStyle(t),
            t = parseFloat(e.getPropertyValue("animation-duration") || "0"),
            e = parseFloat(e.getPropertyValue("transition-duration") || "0");
        return 0 < t || 0 < e
    }

    function lt(t, e) {
        var e = 1 < arguments.length && void 0 !== e && e,
            n = V();
        bt(n) && (e && (n.style.transition = "none", n.style.width = "100%"), setTimeout(function() {
            n.style.transition = "width ".concat(t / 1e3, "s linear"), n.style.width = "0%"
        }, 10))
    }

    function dt() {
        return "undefined" == typeof window || "undefined" == typeof document
    }

    function pt(t) {
        kn.isVisible() && ht !== t.target.value && kn.resetValidationMessage(), ht = t.target.value
    }

    function ft(t, e) {
        t instanceof HTMLElement ? e.appendChild(t) : "object" === r(t) ? kt(t, e) : t && U(e, t)
    }

    function mt(t, e) {
        var n = q(),
            o = D(),
            i = T(),
            r = L(),
            a = I();
        e.showConfirmButton || e.showDenyButton || e.showCancelButton || rt(n), F(n, e, "actions"), At(i, "confirm", e), At(r, "deny", e), At(a, "cancel", e),
            function(t, e, n, o) {
                if (!o.buttonsStyling) return vt([t, e, n], $.styled);
                gt([t, e, n], $.styled), o.confirmButtonColor && (t.style.backgroundColor = o.confirmButtonColor);
                o.denyButtonColor && (e.style.backgroundColor = o.denyButtonColor);
                o.cancelButtonColor && (n.style.backgroundColor = o.cancelButtonColor)
            }(i, r, a, e), e.reverseButtons && (n.insertBefore(a, o), n.insertBefore(r, o), n.insertBefore(i, o)), o.innerHTML = e.loaderHtml, F(o, e, "loader")
    }
    var ht, gt = function(t, e) {
            nt(t, e, !0)
        },
        vt = function(t, e) {
            nt(t, e, !1)
        },
        yt = function(t, e) {
            for (var n = 0; n < t.childNodes.length; n++)
                if (_(t.childNodes[n], e)) return t.childNodes[n]
        },
        bt = function(t) {
            return !(!t || !(t.offsetWidth || t.offsetHeight || t.getClientRects().length))
        },
        wt = '\n <div aria-labelledby="'.concat($.title, '" aria-describedby="').concat($.content, '" class="').concat($.popup, '" tabindex="-1">\n   <div class="').concat($.header, '">\n     <ul class="').concat($["progress-steps"], '"></ul>\n     <div class="').concat($.icon, " ").concat(J.error, '"></div>\n     <div class="').concat($.icon, " ").concat(J.question, '"></div>\n     <div class="').concat($.icon, " ").concat(J.warning, '"></div>\n     <div class="').concat($.icon, " ").concat(J.info, '"></div>\n     <div class="').concat($.icon, " ").concat(J.success, '"></div>\n     <img class="').concat($.image, '" />\n     <h2 class="').concat($.title, '" id="').concat($.title, '"></h2>\n     <button type="button" class="').concat($.close, '"></button>\n   </div>\n   <div class="').concat($.content, '">\n     <div id="').concat($.content, '" class="').concat($["html-container"], '"></div>\n     <input class="').concat($.input, '" />\n     <input type="file" class="').concat($.file, '" />\n     <div class="').concat($.range, '">\n       <input type="range" />\n       <output></output>\n     </div>\n     <select class="').concat($.select, '"></select>\n     <div class="').concat($.radio, '"></div>\n     <label for="').concat($.checkbox, '" class="').concat($.checkbox, '">\n       <input type="checkbox" />\n       <span class="').concat($.label, '"></span>\n     </label>\n     <textarea class="').concat($.textarea, '"></textarea>\n     <div class="').concat($["validation-message"], '" id="').concat($["validation-message"], '"></div>\n   </div>\n   <div class="').concat($.actions, '">\n     <div class="').concat($.loader, '"></div>\n     <button type="button" class="').concat($.confirm, '"></button>\n     <button type="button" class="').concat($.deny, '"></button>\n     <button type="button" class="').concat($.cancel, '"></button>\n   </div>\n   <div class="').concat($.footer, '"></div>\n   <div class="').concat($["timer-progress-bar-container"], '">\n     <div class="').concat($["timer-progress-bar"], '"></div>\n   </div>\n </div>\n').replace(/(^|\n)\s*/g, ""),
        Ct = function(t) {
            var e, n, o, i, r, a = !!(i = C()) && (i.parentNode.removeChild(i), vt([document.documentElement, document.body], [$["no-backdrop"], $["toast-shown"], $["has-column"]]), !0);
            dt() ? W("SweetAlert2 requires document to initialize") : ((r = document.createElement("div")).className = $.container, a && gt(r, $["no-transition"]), U(r, wt), (i = "string" == typeof(e = t.target) ? document.querySelector(e) : e).appendChild(r), a = t, (e = x()).setAttribute("role", a.toast ? "alert" : "dialog"), e.setAttribute("aria-live", a.toast ? "polite" : "assertive"), a.toast || e.setAttribute("aria-modal", "true"), r = i, "rtl" === window.getComputedStyle(r).direction && gt(C(), $.rtl), t = P(), a = yt(t, $.input), e = yt(t, $.file), n = t.querySelector(".".concat($.range, " input")), o = t.querySelector(".".concat($.range, " output")), i = yt(t, $.select), r = t.querySelector(".".concat($.checkbox, " input")), t = yt(t, $.textarea), a.oninput = pt, e.onchange = pt, i.onchange = pt, r.onchange = pt, t.oninput = pt, n.oninput = function(t) {
                pt(t), o.value = n.value
            }, n.onchange = function(t) {
                pt(t), n.nextSibling.value = n.value
            })
        },
        kt = function(t, e) {
            t.jquery ? xt(e, t) : U(e, t.toString())
        },
        xt = function(t, e) {
            if (t.textContent = "", 0 in e)
                for (var n = 0; n in e; n++) t.appendChild(e[n].cloneNode(!0));
            else t.appendChild(e.cloneNode(!0))
        },
        Bt = function() {
            if (dt()) return !1;
            var t, e = document.createElement("div"),
                n = {
                    WebkitAnimation: "webkitAnimationEnd",
                    OAnimation: "oAnimationEnd oanimationend",
                    animation: "animationend"
                };
            for (t in n)
                if (Object.prototype.hasOwnProperty.call(n, t) && void 0 !== e.style[t]) return n[t];
            return !1
        }();

    function At(t, e, n) {
        var o;
        st(t, n["show".concat((o = e).charAt(0).toUpperCase() + o.slice(1), "Button")], "inline-block"), U(t, n["".concat(e, "ButtonText")]), t.setAttribute("aria-label", n["".concat(e, "ButtonAriaLabel")]), t.className = $[e], F(t, n, "".concat(e, "Button")), gt(t, n["".concat(e, "ButtonClass")])
    }

    function Pt(t, e) {
        var n, o, i = C();
        i && (o = i, "string" == typeof(n = e.backdrop) ? o.style.background = n : n || gt([document.documentElement, document.body], $["no-backdrop"]), !e.backdrop && e.allowOutsideClick && z('"allowOutsideClick" parameter requires `backdrop` parameter to be set to `true`'), o = i, (n = e.position) in $ ? gt(o, $[n]) : (z('The "position" parameter is not valid, defaulting to "center"'), gt(o, $.center)), n = i, !(o = e.grow) || "string" != typeof o || (o = "grow-".concat(o)) in $ && gt(n, $[o]), F(i, e, "container"), (e = document.body.getAttribute("data-swal2-queue-step")) && (i.setAttribute("data-queue-step", e), document.body.removeAttribute("data-swal2-queue-step")))
    }

    function Et(t, e) {
        t.placeholder && !e.inputPlaceholder || (t.placeholder = e.inputPlaceholder)
    }

    function Ot(t, e, n) {
        var o, i;
        n.inputLabel && (t.id = $.input, o = document.createElement("label"), i = $["input-label"], o.setAttribute("for", t.id), o.className = i, o.innerText = n.inputLabel, e.insertAdjacentElement("beforebegin", o))
    }
    var St = {
            promise: new WeakMap,
            innerParams: new WeakMap,
            domCache: new WeakMap
        },
        Tt = ["input", "file", "range", "select", "radio", "checkbox", "textarea"],
        Lt = function(t) {
            if (!jt[t.input]) return W('Unexpected type of input! Expected "text", "email", "password", "number", "tel", "select", "radio", "checkbox", "textarea", "file" or "url", got "'.concat(t.input, '"'));
            var e = qt(t.input),
                n = jt[t.input](e, t);
            it(n), setTimeout(function() {
                et(n)
            })
        },
        Dt = function(t, e) {
            var n = tt(P(), t);
            if (n)
                for (var o in ! function(t) {
                        for (var e = 0; e < t.attributes.length; e++) {
                            var n = t.attributes[e].name; - 1 === ["type", "value", "style"].indexOf(n) && t.removeAttribute(n)
                        }
                    }(n), e) "range" === t && "placeholder" === o || n.setAttribute(o, e[o])
        },
        It = function(t) {
            var e = qt(t.input);
            t.customClass && gt(e, t.customClass.input)
        },
        qt = function(t) {
            t = $[t] || $.input;
            return yt(P(), t)
        },
        jt = {};
    jt.text = jt.email = jt.password = jt.number = jt.tel = jt.url = function(t, e) {
        return "string" == typeof e.inputValue || "number" == typeof e.inputValue ? t.value = e.inputValue : b(e.inputValue) || z('Unexpected type of inputValue! Expected "string", "number" or "Promise", got "'.concat(r(e.inputValue), '"')), Ot(t, t, e), Et(t, e), t.type = e.input, t
    }, jt.file = function(t, e) {
        return Ot(t, t, e), Et(t, e), t
    }, jt.range = function(t, e) {
        var n = t.querySelector("input"),
            o = t.querySelector("output");
        return n.value = e.inputValue, n.type = e.input, o.value = e.inputValue, Ot(n, t, e), t
    }, jt.select = function(t, e) {
        var n;
        return t.textContent = "", e.inputPlaceholder && (n = document.createElement("option"), U(n, e.inputPlaceholder), n.value = "", n.disabled = !0, n.selected = !0, t.appendChild(n)), Ot(t, t, e), t
    }, jt.radio = function(t) {
        return t.textContent = "", t
    }, jt.checkbox = function(t, e) {
        var n = tt(P(), "checkbox");
        n.value = 1, n.id = $.checkbox, n.checked = Boolean(e.inputValue);
        n = t.querySelector("span");
        return U(n, e.inputPlaceholder), t
    }, jt.textarea = function(e, t) {
        var n, o;
        return e.value = t.inputValue, Et(e, t), Ot(e, e, t), "MutationObserver" in window && (n = parseInt(window.getComputedStyle(x()).width), o = parseInt(window.getComputedStyle(x()).paddingLeft) + parseInt(window.getComputedStyle(x()).paddingRight), new MutationObserver(function() {
            var t = e.offsetWidth + o;
            x().style.width = n < t ? "".concat(t, "px") : null
        }).observe(e, {
            attributes: !0,
            attributeFilter: ["style"]
        })), e
    };

    function Mt(t, e) {
        var o, i, r, n = P().querySelector("#".concat($.content));
        e.html ? (ft(e.html, n), it(n, "block")) : e.text ? (n.textContent = e.text, it(n, "block")) : rt(n), t = t, o = e, i = P(), t = St.innerParams.get(t), r = !t || o.input !== t.input, Tt.forEach(function(t) {
            var e = $[t],
                n = yt(i, e);
            Dt(t, o.inputAttributes), n.className = e, r && rt(n)
        }), o.input && (r && Lt(o), It(o)), F(P(), e, "content")
    }

    function Vt() {
        return C() && C().getAttribute("data-queue-step")
    }

    function Ht(t, o) {
        var i = O();
        if (!o.progressSteps || 0 === o.progressSteps.length) return rt(i), 0;
        it(i), i.textContent = "";
        var r = parseInt(void 0 === o.currentProgressStep ? Vt() : o.currentProgressStep);
        r >= o.progressSteps.length && z("Invalid currentProgressStep parameter, it should be less than progressSteps.length (currentProgressStep like JS arrays starts from 0)"), o.progressSteps.forEach(function(t, e) {
            var n, t = (n = t, t = document.createElement("li"), gt(t, $["progress-step"]), U(t, n), t);
            i.appendChild(t), e === r && gt(t, $["active-progress-step"]), e !== o.progressSteps.length - 1 && (t = o, e = document.createElement("li"), gt(e, $["progress-step-line"]), t.progressStepsDistance && (e.style.width = t.progressStepsDistance), e = e, i.appendChild(e))
        })
    }

    function Rt(t, e) {
        var n = j();
        F(n, e, "header"), Ht(0, e),
            function(t, e) {
                t = St.innerParams.get(t);
                t && e.icon === t.icon && B() ? Ft(B(), e) : (_t(), e.icon && (-1 !== Object.keys(J).indexOf(e.icon) ? (t = k(".".concat($.icon, ".").concat(J[e.icon])), it(t), Wt(t, e), Ft(t, e), gt(t, e.showClass.icon)) : W('Unknown icon! Expected "success", "error", "warning", "info" or "question", got "'.concat(e.icon, '"'))))
            }(t, e),
            function(t) {
                var e = E();
                if (!t.imageUrl) return rt(e);
                it(e, ""), e.setAttribute("src", t.imageUrl), e.setAttribute("alt", t.imageAlt), ot(e, "width", t.imageWidth), ot(e, "height", t.imageHeight), e.className = $.image, F(e, t, "image")
            }(e), n = e, t = A(), st(t, n.title || n.titleText), n.title && ft(n.title, t), n.titleText && (t.innerText = n.titleText), F(t, n, "title"), n = e, e = H(), U(e, n.closeButtonHtml), F(e, n, "closeButton"), st(e, n.showCloseButton), e.setAttribute("aria-label", n.closeButtonAriaLabel)
    }

    function Nt(t, e) {
        var n, o;
        o = e, n = x(), ot(n, "width", o.width), ot(n, "padding", o.padding), o.background && (n.style.background = o.background), Qt(n, o), Pt(0, e), Rt(t, e), Mt(t, e), mt(0, e), o = e, t = M(), st(t, o.footer), o.footer && ft(o.footer, t), F(t, o, "footer"), "function" == typeof e.didRender ? e.didRender(x()) : "function" == typeof e.onRender && e.onRender(x())
    }

    function Ut() {
        return T() && T().click()
    }
    var _t = function() {
            for (var t = n(), e = 0; e < t.length; e++) rt(t[e])
        },
        Ft = function(t, e) {
            Kt(t, e), zt(), F(t, e, "icon")
        },
        zt = function() {
            for (var t = x(), e = window.getComputedStyle(t).getPropertyValue("background-color"), n = t.querySelectorAll("[class^=swal2-success-circular-line], .swal2-success-fix"), o = 0; o < n.length; o++) n[o].style.backgroundColor = e
        },
        Wt = function(t, e) {
            t.textContent = "", e.iconHtml ? U(t, Yt(e.iconHtml)) : "success" === e.icon ? U(t, '\n      <div class="swal2-success-circular-line-left"></div>\n      <span class="swal2-success-line-tip"></span> <span class="swal2-success-line-long"></span>\n      <div class="swal2-success-ring"></div> <div class="swal2-success-fix"></div>\n      <div class="swal2-success-circular-line-right"></div>\n    ') : "error" === e.icon ? U(t, '\n      <span class="swal2-x-mark">\n        <span class="swal2-x-mark-line-left"></span>\n        <span class="swal2-x-mark-line-right"></span>\n      </span>\n    ') : U(t, Yt({
                question: "?",
                warning: "!",
                info: "i"
            } [e.icon]))
        },
        Kt = function(t, e) {
            if (e.iconColor) {
                t.style.color = e.iconColor, t.style.borderColor = e.iconColor;
                for (var n = 0, o = [".swal2-success-line-tip", ".swal2-success-line-long", ".swal2-x-mark-line-left", ".swal2-x-mark-line-right"]; n < o.length; n++) at(t, o[n], "backgroundColor", e.iconColor);
                at(t, ".swal2-success-ring", "borderColor", e.iconColor)
            }
        },
        Yt = function(t) {
            return '<div class="'.concat($["icon-content"], '">').concat(t, "</div>")
        },
        Zt = [],
        Qt = function(t, e) {
            t.className = "".concat($.popup, " ").concat(bt(t) ? e.showClass.popup : ""), e.toast ? (gt([document.documentElement, document.body], $["toast-shown"]), gt(t, $.toast)) : gt(t, $.modal), F(t, e, "popup"), "string" == typeof e.customClass && gt(t, e.customClass), e.icon && gt(t, $["icon-".concat(e.icon)])
        };

    function $t(t) {
        var e = x();
        e || kn.fire(), e = x();
        var n = q(),
            o = D();
        !t && bt(T()) && (t = T()), it(n), t && (rt(t), o.setAttribute("data-button-to-replace", t.className)), o.parentNode.insertBefore(o, t), gt([e, n], $.loading), it(o), e.setAttribute("data-loading", !0), e.setAttribute("aria-busy", !0), e.focus()
    }

    function Jt() {
        return new Promise(function(t) {
            var e = window.scrollX,
                n = window.scrollY;
            oe.restoreFocusTimeout = setTimeout(function() {
                oe.previousActiveElement && oe.previousActiveElement.focus ? (oe.previousActiveElement.focus(), oe.previousActiveElement = null) : document.body && document.body.focus(), t()
            }, 100), void 0 !== e && void 0 !== n && window.scrollTo(e, n)
        })
    }

    function Xt() {
        if (oe.timeout) return function() {
            var t = V(),
                e = parseInt(window.getComputedStyle(t).width);
            t.style.removeProperty("transition"), t.style.width = "100%";
            var n = parseInt(window.getComputedStyle(t).width),
                n = parseInt(e / n * 100);
            t.style.removeProperty("transition"), t.style.width = "".concat(n, "%")
        }(), oe.timeout.stop()
    }

    function Gt() {
        if (oe.timeout) {
            var t = oe.timeout.start();
            return lt(t), t
        }
    }

    function te(t) {
        return Object.prototype.hasOwnProperty.call(ie, t)
    }

    function ee(t) {
        return ae[t]
    }

    function ne(t) {
        for (var e in t) te(o = e) || z('Unknown parameter "'.concat(o, '"')), t.toast && (n = e, -1 !== se.indexOf(n) && z('The parameter "'.concat(n, '" is incompatible with toasts'))), ee(n = e) && g(n, ee(n));
        var n, o
    }
    var oe = {},
        ie = {
            title: "",
            titleText: "",
            text: "",
            html: "",
            footer: "",
            icon: void 0,
            iconColor: void 0,
            iconHtml: void 0,
            toast: !1,
            animation: !0,
            showClass: {
                popup: "swal2-show",
                backdrop: "swal2-backdrop-show",
                icon: "swal2-icon-show"
            },
            hideClass: {
                popup: "swal2-hide",
                backdrop: "swal2-backdrop-hide",
                icon: "swal2-icon-hide"
            },
            customClass: void 0,
            target: "body",
            backdrop: !0,
            heightAuto: !0,
            allowOutsideClick: !0,
            allowEscapeKey: !0,
            allowEnterKey: !0,
            stopKeydownPropagation: !0,
            keydownListenerCapture: !1,
            showConfirmButton: !0,
            showDenyButton: !1,
            showCancelButton: !1,
            preConfirm: void 0,
            preDeny: void 0,
            confirmButtonText: "OK",
            confirmButtonAriaLabel: "",
            confirmButtonColor: void 0,
            denyButtonText: "No",
            denyButtonAriaLabel: "",
            denyButtonColor: void 0,
            cancelButtonText: "Cancel",
            cancelButtonAriaLabel: "",
            cancelButtonColor: void 0,
            buttonsStyling: !0,
            reverseButtons: !1,
            focusConfirm: !0,
            focusDeny: !1,
            focusCancel: !1,
            showCloseButton: !1,
            closeButtonHtml: "&times;",
            closeButtonAriaLabel: "Close this dialog",
            loaderHtml: "",
            showLoaderOnConfirm: !1,
            imageUrl: void 0,
            imageWidth: void 0,
            imageHeight: void 0,
            imageAlt: "",
            timer: void 0,
            timerProgressBar: !1,
            width: void 0,
            padding: void 0,
            background: void 0,
            input: void 0,
            inputPlaceholder: "",
            inputLabel: "",
            inputValue: "",
            inputOptions: {},
            inputAutoTrim: !0,
            inputAttributes: {},
            inputValidator: void 0,
            returnInputValueOnDeny: !1,
            validationMessage: void 0,
            grow: !1,
            position: "center",
            progressSteps: [],
            currentProgressStep: void 0,
            progressStepsDistance: void 0,
            onBeforeOpen: void 0,
            onOpen: void 0,
            willOpen: void 0,
            didOpen: void 0,
            onRender: void 0,
            didRender: void 0,
            onClose: void 0,
            onAfterClose: void 0,
            willClose: void 0,
            didClose: void 0,
            onDestroy: void 0,
            didDestroy: void 0,
            scrollbarPadding: !0
        },
        re = ["allowEscapeKey", "allowOutsideClick", "background", "buttonsStyling", "cancelButtonAriaLabel", "cancelButtonColor", "cancelButtonText", "closeButtonAriaLabel", "closeButtonHtml", "confirmButtonAriaLabel", "confirmButtonColor", "confirmButtonText", "currentProgressStep", "customClass", "denyButtonAriaLabel", "denyButtonColor", "denyButtonText", "didClose", "didDestroy", "footer", "hideClass", "html", "icon", "iconColor", "imageAlt", "imageHeight", "imageUrl", "imageWidth", "onAfterClose", "onClose", "onDestroy", "progressSteps", "reverseButtons", "showCancelButton", "showCloseButton", "showConfirmButton", "showDenyButton", "text", "title", "titleText", "willClose"],
        ae = {
            animation: 'showClass" and "hideClass',
            onBeforeOpen: "willOpen",
            onOpen: "didOpen",
            onRender: "didRender",
            onClose: "willClose",
            onAfterClose: "didClose",
            onDestroy: "didDestroy"
        },
        se = ["allowOutsideClick", "allowEnterKey", "backdrop", "focusConfirm", "focusDeny", "focusCancel", "heightAuto", "keydownListenerCapture"],
        ce = Object.freeze({
            isValidParameter: te,
            isUpdatableParameter: function(t) {
                return -1 !== re.indexOf(t)
            },
            isDeprecatedParameter: ee,
            argsToParams: function(n) {
                var o = {};
                return "object" !== r(n[0]) || w(n[0]) ? ["title", "html", "icon"].forEach(function(t, e) {
                    e = n[e];
                    "string" == typeof e || w(e) ? o[t] = e : void 0 !== e && W("Unexpected type of ".concat(t, '! Expected "string" or "Element", got ').concat(r(e)))
                }) : c(o, n[0]), o
            },
            isVisible: function() {
                return bt(x())
            },
            clickConfirm: Ut,
            clickDeny: function() {
                return L() && L().click()
            },
            clickCancel: function() {
                return I() && I().click()
            },
            getContainer: C,
            getPopup: x,
            getTitle: A,
            getContent: P,
            getHtmlContainer: function() {
                return t($["html-container"])
            },
            getImage: E,
            getIcon: B,
            getIcons: n,
            getInputLabel: function() {
                return t($["input-label"])
            },
            getCloseButton: H,
            getActions: q,
            getConfirmButton: T,
            getDenyButton: L,
            getCancelButton: I,
            getLoader: D,
            getHeader: j,
            getFooter: M,
            getTimerProgressBar: V,
            getFocusableElements: R,
            getValidationMessage: S,
            isLoading: function() {
                return x().hasAttribute("data-loading")
            },
            fire: function() {
                for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++) e[n] = arguments[n];
                return i(this, e)
            },
            mixin: function(r) {
                return function(t) {
                    ! function(t, e) {
                        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                        t.prototype = Object.create(e && e.prototype, {
                            constructor: {
                                value: t,
                                writable: !0,
                                configurable: !0
                            }
                        }), e && l(t, e)
                    }(i, t);
                    var n, o, e = (n = i, o = d(), function() {
                        var t, e = u(n);
                        return p(this, o ? (t = u(this).constructor, Reflect.construct(e, arguments, t)) : e.apply(this, arguments))
                    });

                    function i() {
                        return a(this, i), e.apply(this, arguments)
                    }
                    return s(i, [{
                        key: "_main",
                        value: function(t) {
                            return f(u(i.prototype), "_main", this).call(this, c({}, r, t))
                        }
                    }]), i
                }(this)
            },
            queue: function(t) {
                var r = this;
                Zt = t;

                function a(t, e) {
                    Zt = [], t(e)
                }
                var s = [];
                return new Promise(function(i) {
                    ! function e(n, o) {
                        n < Zt.length ? (document.body.setAttribute("data-swal2-queue-step", n), r.fire(Zt[n]).then(function(t) {
                            void 0 !== t.value ? (s.push(t.value), e(n + 1, o)) : a(i, {
                                dismiss: t.dismiss
                            })
                        })) : a(i, {
                            value: s
                        })
                    }(0)
                })
            },
            getQueueStep: Vt,
            insertQueueStep: function(t, e) {
                return e && e < Zt.length ? Zt.splice(e, 0, t) : Zt.push(t)
            },
            deleteQueueStep: function(t) {
                void 0 !== Zt[t] && Zt.splice(t, 1)
            },
            showLoading: $t,
            enableLoading: $t,
            getTimerLeft: function() {
                return oe.timeout && oe.timeout.getTimerLeft()
            },
            stopTimer: Xt,
            resumeTimer: Gt,
            toggleTimer: function() {
                var t = oe.timeout;
                return t && (t.running ? Xt : Gt)()
            },
            increaseTimer: function(t) {
                if (oe.timeout) {
                    t = oe.timeout.increase(t);
                    return lt(t, !0), t
                }
            },
            isTimerRunning: function() {
                return oe.timeout && oe.timeout.isRunning()
            }
        });

    function ue() {
        var t, e;
        St.innerParams.get(this) && (t = St.domCache.get(this), rt(t.loader), (e = t.popup.getElementsByClassName(t.loader.getAttribute("data-button-to-replace"))).length ? it(e[0], "inline-block") : bt(T()) || bt(L()) || bt(I()) || rt(t.actions), vt([t.popup, t.actions], $.loading), t.popup.removeAttribute("aria-busy"), t.popup.removeAttribute("data-loading"), t.confirmButton.disabled = !1, t.denyButton.disabled = !1, t.cancelButton.disabled = !1)
    }

    function le() {
        null === G.previousBodyPadding && document.body.scrollHeight > window.innerHeight && (G.previousBodyPadding = parseInt(window.getComputedStyle(document.body).getPropertyValue("padding-right")), document.body.style.paddingRight = "".concat(G.previousBodyPadding + function() {
            var t = document.createElement("div");
            t.className = $["scrollbar-measure"], document.body.appendChild(t);
            var e = t.getBoundingClientRect().width - t.clientWidth;
            return document.body.removeChild(t), e
        }(), "px"))
    }

    function de() {
        return !!window.MSInputMethodContext && !!document.documentMode
    }

    function pe() {
        var t = C(),
            e = x();
        t.style.removeProperty("align-items"), e.offsetTop < 0 && (t.style.alignItems = "flex-start")
    }
    var fe = function() {
            navigator.userAgent.match(/(CriOS|FxiOS|EdgiOS|YaBrowser|UCBrowser)/i) || x().scrollHeight > window.innerHeight - 44 && (C().style.paddingBottom = "".concat(44, "px"))
        },
        me = function() {
            var e, t = C();
            t.ontouchstart = function(t) {
                e = he(t)
            }, t.ontouchmove = function(t) {
                e && (t.preventDefault(), t.stopPropagation())
            }
        },
        he = function(t) {
            var e = t.target,
                n = C();
            return !ge(t) && !ve(t) && (e === n || !(ct(n) || "INPUT" === e.tagName || ct(P()) && P().contains(e)))
        },
        ge = function(t) {
            return t.touches && t.touches.length && "stylus" === t.touches[0].touchType
        },
        ve = function(t) {
            return t.touches && 1 < t.touches.length
        },
        ye = {
            swalPromiseResolve: new WeakMap
        };

    function be(t, e, n, o) {
        n ? Ae(t, o) : (Jt().then(function() {
            return Ae(t, o)
        }), oe.keydownTarget.removeEventListener("keydown", oe.keydownHandler, {
            capture: oe.keydownListenerCapture
        }), oe.keydownHandlerAdded = !1), e.parentNode && !document.body.getAttribute("data-swal2-queue-step") && e.parentNode.removeChild(e), N() && (null !== G.previousBodyPadding && (document.body.style.paddingRight = "".concat(G.previousBodyPadding, "px"), G.previousBodyPadding = null), _(document.body, $.iosfix) && (e = parseInt(document.body.style.top, 10), vt(document.body, $.iosfix), document.body.style.top = "", document.body.scrollTop = -1 * e), "undefined" != typeof window && de() && window.removeEventListener("resize", pe), h(document.body.children).forEach(function(t) {
            t.hasAttribute("data-previous-aria-hidden") ? (t.setAttribute("aria-hidden", t.getAttribute("data-previous-aria-hidden")), t.removeAttribute("data-previous-aria-hidden")) : t.removeAttribute("aria-hidden")
        })), vt([document.documentElement, document.body], [$.shown, $["height-auto"], $["no-backdrop"], $["toast-shown"], $["toast-column"]])
    }

    function we(t) {
        var e, n, o, i = x();
        i && (t = Ce(t), (e = St.innerParams.get(this)) && !_(i, e.hideClass.popup) && (n = ye.swalPromiseResolve.get(this), vt(i, e.showClass.popup), gt(i, e.hideClass.popup), o = C(), vt(o, e.showClass.backdrop), gt(o, e.hideClass.backdrop), ke(this, i, e), n(t)))
    }

    function Ce(t) {
        return void 0 === t ? {
            isConfirmed: !1,
            isDenied: !1,
            isDismissed: !0
        } : c({
            isConfirmed: !1,
            isDenied: !1,
            isDismissed: !1
        }, t)
    }

    function ke(t, e, n) {
        var o = C(),
            i = Bt && ut(e),
            r = n.onClose,
            a = n.onAfterClose,
            s = n.willClose,
            n = n.didClose;
        xe(e, s, r), i ? Be(t, e, o, n || a) : be(t, o, X(), n || a)
    }
    var xe = function(t, e, n) {
            null !== e && "function" == typeof e ? e(t) : null !== n && "function" == typeof n && n(t)
        },
        Be = function(t, e, n, o) {
            oe.swalCloseEventFinishedCallback = be.bind(null, t, n, X(), o), e.addEventListener(Bt, function(t) {
                t.target === e && (oe.swalCloseEventFinishedCallback(), delete oe.swalCloseEventFinishedCallback)
            })
        },
        Ae = function(t, e) {
            setTimeout(function() {
                "function" == typeof e && e(), t._destroy()
            })
        };

    function Pe(t, e, n) {
        var o = St.domCache.get(t);
        e.forEach(function(t) {
            o[t].disabled = n
        })
    }

    function Ee(t, e) {
        if (!t) return !1;
        if ("radio" === t.type)
            for (var n = t.parentNode.parentNode.querySelectorAll("input"), o = 0; o < n.length; o++) n[o].disabled = e;
        else t.disabled = e
    }
    var Oe = function() {
            function n(t, e) {
                a(this, n), this.callback = t, this.remaining = e, this.running = !1, this.start()
            }
            return s(n, [{
                key: "start",
                value: function() {
                    return this.running || (this.running = !0, this.started = new Date, this.id = setTimeout(this.callback, this.remaining)), this.remaining
                }
            }, {
                key: "stop",
                value: function() {
                    return this.running && (this.running = !1, clearTimeout(this.id), this.remaining -= new Date - this.started), this.remaining
                }
            }, {
                key: "increase",
                value: function(t) {
                    var e = this.running;
                    return e && this.stop(), this.remaining += t, e && this.start(), this.remaining
                }
            }, {
                key: "getTimerLeft",
                value: function() {
                    return this.running && (this.stop(), this.start()), this.remaining
                }
            }, {
                key: "isRunning",
                value: function() {
                    return this.running
                }
            }]), n
        }(),
        Se = {
            email: function(t, e) {
                return /^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9.-]+\.[a-zA-Z0-9-]{2,24}$/.test(t) ? Promise.resolve() : Promise.resolve(e || "Invalid email address")
            },
            url: function(t, e) {
                return /^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-z]{2,63}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)$/.test(t) ? Promise.resolve() : Promise.resolve(e || "Invalid URL")
            }
        };

    function Te(t) {
        var e, n;
        (e = t).inputValidator || Object.keys(Se).forEach(function(t) {
            e.input === t && (e.inputValidator = Se[t])
        }), t.showLoaderOnConfirm && !t.preConfirm && z("showLoaderOnConfirm is set to true, but preConfirm is not defined.\nshowLoaderOnConfirm should be used together with preConfirm, see usage example:\nhttps://sweetalert2.github.io/#ajax-request"), t.animation = Y(t.animation), (n = t).target && ("string" != typeof n.target || document.querySelector(n.target)) && ("string" == typeof n.target || n.target.appendChild) || (z('Target parameter is not valid, defaulting to "body"'), n.target = "body"), "string" == typeof t.title && (t.title = t.title.split("\n").join("<br />")), Ct(t)
    }

    function Le(t) {
        var e = C(),
            n = x();
        "function" == typeof t.willOpen ? t.willOpen(n) : "function" == typeof t.onBeforeOpen && t.onBeforeOpen(n);
        var o = window.getComputedStyle(document.body).overflowY;
        He(e, n, t), setTimeout(function() {
            Me(e, n)
        }, 10), N() && (Ve(e, t.scrollbarPadding, o), h(document.body.children).forEach(function(t) {
            t === C() || function(t, e) {
                if ("function" == typeof t.contains) return t.contains(e)
            }(t, C()) || (t.hasAttribute("aria-hidden") && t.setAttribute("data-previous-aria-hidden", t.getAttribute("aria-hidden")), t.setAttribute("aria-hidden", "true"))
        })), X() || oe.previousActiveElement || (oe.previousActiveElement = document.activeElement), je(n, t), vt(e, $["no-transition"])
    }

    function De(t) {
        var e = x();
        t.target === e && (t = C(), e.removeEventListener(Bt, De), t.style.overflowY = "auto")
    }

    function Ie(t, e) {
        t.closePopup({
            isConfirmed: !0,
            value: e
        })
    }

    function qe(t, e, n) {
        var o = R(),
            i = 0;
        if (i < o.length) return (e += n) === o.length ? e = 0 : -1 === e && (e = o.length - 1), o[e].focus();
        x().focus()
    }
    var je = function(t, e) {
            "function" == typeof e.didOpen ? setTimeout(function() {
                return e.didOpen(t)
            }) : "function" == typeof e.onOpen && setTimeout(function() {
                return e.onOpen(t)
            })
        },
        Me = function(t, e) {
            Bt && ut(e) ? (t.style.overflowY = "hidden", e.addEventListener(Bt, De)) : t.style.overflowY = "auto"
        },
        Ve = function(t, e, n) {
            var o;
            (/iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream || "MacIntel" === navigator.platform && 1 < navigator.maxTouchPoints) && !_(document.body, $.iosfix) && (o = document.body.scrollTop, document.body.style.top = "".concat(-1 * o, "px"), gt(document.body, $.iosfix), me(), fe()), "undefined" != typeof window && de() && (pe(), window.addEventListener("resize", pe)), e && "hidden" !== n && le(), setTimeout(function() {
                t.scrollTop = 0
            })
        },
        He = function(t, e, n) {
            gt(t, n.showClass.backdrop), e.style.setProperty("opacity", "0", "important"), it(e), setTimeout(function() {
                gt(e, n.showClass.popup), e.style.removeProperty("opacity")
            }, 10), gt([document.documentElement, document.body], $.shown), n.heightAuto && n.backdrop && !n.toast && gt([document.documentElement, document.body], $["height-auto"])
        },
        Re = function(t) {
            return t.checked ? 1 : 0
        },
        Ne = function(t) {
            return t.checked ? t.value : null
        },
        Ue = function(t) {
            return t.files.length ? null !== t.getAttribute("multiple") ? t.files : t.files[0] : null
        },
        _e = function(e, n) {
            function o(t) {
                return ze[n.input](i, We(t), n)
            }
            var i = P();
            v(n.inputOptions) || b(n.inputOptions) ? ($t(), y(n.inputOptions).then(function(t) {
                e.hideLoading(), o(t)
            })) : "object" === r(n.inputOptions) ? o(n.inputOptions) : W("Unexpected type of inputOptions! Expected object, Map or Promise, got ".concat(r(n.inputOptions)))
        },
        Fe = function(e, n) {
            var o = e.getInput();
            rt(o), y(n.inputValue).then(function(t) {
                o.value = "number" === n.input ? parseFloat(t) || 0 : "".concat(t), it(o), o.focus(), e.hideLoading()
            }).catch(function(t) {
                W("Error in inputValue promise: ".concat(t)), o.value = "", it(o), o.focus(), e.hideLoading()
            })
        },
        ze = {
            select: function(t, e, i) {
                function o(t, e, n) {
                    var o = document.createElement("option");
                    o.value = n, U(o, e), i.inputValue.toString() === n.toString() && (o.selected = !0), t.appendChild(o)
                }
                var r = yt(t, $.select);
                e.forEach(function(t) {
                    var e, n = t[0],
                        t = t[1];
                    Array.isArray(t) ? ((e = document.createElement("optgroup")).label = n, e.disabled = !1, r.appendChild(e), t.forEach(function(t) {
                        return o(e, t[1], t[0])
                    })) : o(r, t, n)
                }), r.focus()
            },
            radio: function(t, e, i) {
                var r = yt(t, $.radio);
                e.forEach(function(t) {
                    var e = t[0],
                        n = t[1],
                        o = document.createElement("input"),
                        t = document.createElement("label");
                    o.type = "radio", o.name = $.radio, o.value = e, i.inputValue.toString() === e.toString() && (o.checked = !0);
                    e = document.createElement("span");
                    U(e, n), e.className = $.label, t.appendChild(o), t.appendChild(e), r.appendChild(t)
                });
                e = r.querySelectorAll("input");
                e.length && e[0].focus()
            }
        },
        We = function n(o) {
            var i = [];
            return "undefined" != typeof Map && o instanceof Map ? o.forEach(function(t, e) {
                "object" === r(t) && (t = n(t)), i.push([e, t])
            }) : Object.keys(o).forEach(function(t) {
                var e = o[t];
                "object" === r(e) && (e = n(e)), i.push([t, e])
            }), i
        },
        Ke = function(t, e, n) {
            var o = function(t, e) {
                t = t.getInput();
                if (!t) return null;
                switch (e.input) {
                    case "checkbox":
                        return Re(t);
                    case "radio":
                        return Ne(t);
                    case "file":
                        return Ue(t);
                    default:
                        return e.inputAutoTrim ? t.value.trim() : t.value
                }
            }(t, e);
            e.inputValidator ? Ye(t, e, o) : t.getInput().checkValidity() ? ("deny" === n ? Ze : Qe)(t, e, o) : (t.enableButtons(), t.showValidationMessage(e.validationMessage))
        },
        Ye = function(e, n, o) {
            e.disableInput(), Promise.resolve().then(function() {
                return y(n.inputValidator(o, n.validationMessage))
            }).then(function(t) {
                e.enableButtons(), e.enableInput(), t ? e.showValidationMessage(t) : Qe(e, n, o)
            })
        },
        Ze = function(e, t, n) {
            t.preDeny ? Promise.resolve().then(function() {
                return y(t.preDeny(n, t.validationMessage))
            }).then(function(t) {
                !1 === t ? e.hideLoading() : e.closePopup({
                    isDenied: !0,
                    value: void 0 === t ? n : t
                })
            }) : e.closePopup({
                isDenied: !0,
                value: n
            })
        },
        Qe = function(e, t, n) {
            t.showLoaderOnConfirm && $t(), t.preConfirm ? (e.resetValidationMessage(), Promise.resolve().then(function() {
                return y(t.preConfirm(n, t.validationMessage))
            }).then(function(t) {
                bt(S()) || !1 === t ? e.hideLoading() : Ie(e, void 0 === t ? n : t)
            })) : Ie(e, n)
        },
        $e = ["ArrowRight", "ArrowDown", "Right", "Down"],
        Je = ["ArrowLeft", "ArrowUp", "Left", "Up"],
        Xe = ["Escape", "Esc"],
        Ge = function(t, e, n) {
            var o = St.innerParams.get(t);
            o.stopKeydownPropagation && e.stopPropagation(), "Enter" === e.key ? tn(t, e, o) : "Tab" === e.key ? en(e, o) : -1 !== [].concat($e, Je).indexOf(e.key) ? nn(e.key) : -1 !== Xe.indexOf(e.key) && on(e, o, n)
        },
        tn = function(t, e, n) {
            e.isComposing || e.target && t.getInput() && e.target.outerHTML === t.getInput().outerHTML && -1 === ["textarea", "file"].indexOf(n.input) && (Ut(), e.preventDefault())
        },
        en = function(t) {
            for (var e = t.target, n = R(), o = -1, i = 0; i < n.length; i++)
                if (e === n[i]) {
                    o = i;
                    break
                } t.shiftKey ? qe(0, o, -1) : qe(0, o, 1), t.stopPropagation(), t.preventDefault()
        },
        nn = function(t) {
            -1 !== [T(), L(), I()].indexOf(document.activeElement) && (t = -1 !== $e.indexOf(t) ? "nextElementSibling" : "previousElementSibling", (t = document.activeElement[t]) && t.focus())
        },
        on = function(t, e, n) {
            Y(e.allowEscapeKey) && (t.preventDefault(), n(Z.esc))
        },
        rn = function(e, t, n) {
            t.popup.onclick = function() {
                var t = St.innerParams.get(e);
                t.showConfirmButton || t.showDenyButton || t.showCancelButton || t.showCloseButton || t.input || n(Z.close)
            }
        },
        an = !1,
        sn = function(e) {
            e.popup.onmousedown = function() {
                e.container.onmouseup = function(t) {
                    e.container.onmouseup = void 0, t.target === e.container && (an = !0)
                }
            }
        },
        cn = function(e) {
            e.container.onmousedown = function() {
                e.popup.onmouseup = function(t) {
                    e.popup.onmouseup = void 0, t.target !== e.popup && !e.popup.contains(t.target) || (an = !0)
                }
            }
        },
        un = function(n, o, i) {
            o.container.onclick = function(t) {
                var e = St.innerParams.get(n);
                an ? an = !1 : t.target === o.container && Y(e.allowOutsideClick) && i(Z.backdrop)
            }
        };

    function ln(t) {
        var e = c({}, ie.showClass, t.showClass),
            n = c({}, ie.hideClass, t.hideClass),
            o = c({}, ie, t);
        return o.showClass = e, o.hideClass = n, !1 === t.animation && (o.showClass = {
            popup: "swal2-noanimation",
            backdrop: "swal2-noanimation"
        }, o.hideClass = {}), o
    }

    function dn(a, s, c) {
        return new Promise(function(t) {
            function e(t) {
                a.closePopup({
                    isDismissed: !0,
                    dismiss: t
                })
            }
            var n, o, i, r;
            ye.swalPromiseResolve.set(a, t), s.confirmButton.onclick = function() {
                return e = c, (t = a).disableButtons(), void(e.input ? Ke(t, e, "confirm") : Qe(t, e, !0));
                var t, e
            }, s.denyButton.onclick = function() {
                return e = c, (t = a).disableButtons(), void(e.returnInputValueOnDeny ? Ke(t, e, "deny") : Ze(t, e, !1));
                var t, e
            }, s.cancelButton.onclick = function() {
                return t = e, a.disableButtons(), void t(Z.cancel);
                var t
            }, s.closeButton.onclick = function() {
                return e(Z.close)
            }, n = a, r = s, t = e, St.innerParams.get(n).toast ? rn(n, r, t) : (sn(r), cn(r), un(n, r, t)), o = a, r = c, i = e, (t = oe).keydownTarget && t.keydownHandlerAdded && (t.keydownTarget.removeEventListener("keydown", t.keydownHandler, {
                capture: t.keydownListenerCapture
            }), t.keydownHandlerAdded = !1), r.toast || (t.keydownHandler = function(t) {
                return Ge(o, t, i)
            }, t.keydownTarget = r.keydownListenerCapture ? window : x(), t.keydownListenerCapture = r.keydownListenerCapture, t.keydownTarget.addEventListener("keydown", t.keydownHandler, {
                capture: t.keydownListenerCapture
            }), t.keydownHandlerAdded = !0), (c.toast && (c.input || c.footer || c.showCloseButton) ? gt : vt)(document.body, $["toast-column"]), r = a, "select" === (t = c).input || "radio" === t.input ? _e(r, t) : -1 !== ["text", "email", "number", "tel", "textarea"].indexOf(t.input) && (v(t.inputValue) || b(t.inputValue)) && Fe(r, t), Le(c), fn(oe, c, e), mn(s, c), setTimeout(function() {
                s.container.scrollTop = 0
            })
        })
    }

    function pn(t) {
        var e = {
            popup: x(),
            container: C(),
            content: P(),
            actions: q(),
            confirmButton: T(),
            denyButton: L(),
            cancelButton: I(),
            loader: D(),
            closeButton: H(),
            validationMessage: S(),
            progressSteps: O()
        };
        return St.domCache.set(t, e), e
    }
    var fn = function(t, e, n) {
            var o = V();
            rt(o), e.timer && (t.timeout = new Oe(function() {
                n("timer"), delete t.timeout
            }, e.timer), e.timerProgressBar && (it(o), setTimeout(function() {
                t.timeout.running && lt(e.timer)
            })))
        },
        mn = function(t, e) {
            if (!e.toast) return Y(e.allowEnterKey) ? void(hn(t, e) || qe(0, -1, 1)) : gn()
        },
        hn = function(t, e) {
            return e.focusDeny && bt(t.denyButton) ? (t.denyButton.focus(), !0) : e.focusCancel && bt(t.cancelButton) ? (t.cancelButton.focus(), !0) : !(!e.focusConfirm || !bt(t.confirmButton)) && (t.confirmButton.focus(), !0)
        },
        gn = function() {
            document.activeElement && "function" == typeof document.activeElement.blur && document.activeElement.blur()
        };

    function vn(t) {
        "function" == typeof t.didDestroy ? t.didDestroy() : "function" == typeof t.onDestroy && t.onDestroy()
    }

    function yn(t) {
        delete t.params, delete oe.keydownHandler, delete oe.keydownTarget, wn(St), wn(ye)
    }
    var bn, wn = function(t) {
            for (var e in t) t[e] = new WeakMap
        },
        Q = Object.freeze({
            hideLoading: ue,
            disableLoading: ue,
            getInput: function(t) {
                var e = St.innerParams.get(t || this);
                return (t = St.domCache.get(t || this)) ? tt(t.content, e.input) : null
            },
            close: we,
            closePopup: we,
            closeModal: we,
            closeToast: we,
            enableButtons: function() {
                Pe(this, ["confirmButton", "denyButton", "cancelButton"], !1)
            },
            disableButtons: function() {
                Pe(this, ["confirmButton", "denyButton", "cancelButton"], !0)
            },
            enableInput: function() {
                return Ee(this.getInput(), !1)
            },
            disableInput: function() {
                return Ee(this.getInput(), !0)
            },
            showValidationMessage: function(t) {
                var e = St.domCache.get(this),
                    n = St.innerParams.get(this);
                U(e.validationMessage, t), e.validationMessage.className = $["validation-message"], n.customClass && n.customClass.validationMessage && gt(e.validationMessage, n.customClass.validationMessage), it(e.validationMessage), (e = this.getInput()) && (e.setAttribute("aria-invalid", !0), e.setAttribute("aria-describedBy", $["validation-message"]), et(e), gt(e, $.inputerror))
            },
            resetValidationMessage: function() {
                var t = St.domCache.get(this);
                t.validationMessage && rt(t.validationMessage), (t = this.getInput()) && (t.removeAttribute("aria-invalid"), t.removeAttribute("aria-describedBy"), vt(t, $.inputerror))
            },
            getProgressSteps: function() {
                return St.domCache.get(this).progressSteps
            },
            _main: function(t) {
                ne(t), oe.currentInstance && oe.currentInstance._destroy(), oe.currentInstance = this;
                var e = ln(t);
                return Te(e), Object.freeze(e), oe.timeout && (oe.timeout.stop(), delete oe.timeout), clearTimeout(oe.restoreFocusTimeout), t = pn(this), Nt(this, e), St.innerParams.set(this, e), dn(this, t, e)
            },
            update: function(e) {
                var t = x(),
                    n = St.innerParams.get(this);
                if (!t || _(t, n.hideClass.popup)) return z("You're trying to update the closed or closing popup, that won't work. Use the update() method in preConfirm parameter or show a new popup.");
                var o = {};
                Object.keys(e).forEach(function(t) {
                    kn.isUpdatableParameter(t) ? o[t] = e[t] : z('Invalid parameter to update: "'.concat(t, '". Updatable params are listed here: https://github.com/sweetalert2/sweetalert2/blob/master/src/utils/params.js\n\nIf you think this parameter should be updatable, request it here: https://github.com/sweetalert2/sweetalert2/issues/new?template=02_feature_request.md'))
                }), n = c({}, n, o), Nt(this, n), St.innerParams.set(this, n), Object.defineProperties(this, {
                    params: {
                        value: c({}, this.params, e),
                        writable: !1,
                        enumerable: !0
                    }
                })
            },
            _destroy: function() {
                var t = St.domCache.get(this),
                    e = St.innerParams.get(this);
                e && (t.popup && oe.swalCloseEventFinishedCallback && (oe.swalCloseEventFinishedCallback(), delete oe.swalCloseEventFinishedCallback), oe.deferDisposalTimer && (clearTimeout(oe.deferDisposalTimer), delete oe.deferDisposalTimer), vn(e), yn(this))
            }
        }),
        Cn = function() {
            function i() {
                if (a(this, i), "undefined" != typeof window) {
                    "undefined" == typeof Promise && W("This package requires a Promise library, please include a shim to enable it in this browser (See: https://github.com/sweetalert2/sweetalert2/wiki/Migration-from-SweetAlert-to-SweetAlert2#1-ie-support)"), bn = this;
                    for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++) e[n] = arguments[n];
                    var o = Object.freeze(this.constructor.argsToParams(e));
                    Object.defineProperties(this, {
                        params: {
                            value: o,
                            writable: !1,
                            enumerable: !0,
                            configurable: !0
                        }
                    });
                    o = this._main(this.params);
                    St.promise.set(this, o)
                }
            }
            return s(i, [{
                key: "then",
                value: function(t) {
                    return St.promise.get(this).then(t)
                }
            }, {
                key: "finally",
                value: function(t) {
                    return St.promise.get(this).finally(t)
                }
            }]), i
        }();
    c(Cn.prototype, Q), c(Cn, ce), Object.keys(Q).forEach(function(t) {
        Cn[t] = function() {
            if (bn) return bn[t].apply(bn, arguments)
        }
    }), Cn.DismissReason = Z, Cn.version = "10.10.1";
    var kn = Cn;
    return kn.default = kn
}), void 0 !== this && this.Sweetalert2 && (this.swal = this.sweetAlert = this.Swal = this.SweetAlert = this.Sweetalert2);
"undefined" != typeof document && function(e, t) {
    var n = e.createElement("style");
    if (e.getElementsByTagName("head")[0].appendChild(n), n.styleSheet) n.styleSheet.disabled || (n.styleSheet.cssText = t);
    else try {
        n.innerHTML = t
    } catch (e) {
        n.innerText = t
    }
};