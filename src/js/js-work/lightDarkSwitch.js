/* Legal Note: JS for the CookieBanner by https://www.websitepolicies.com/cookie-consent-banner-generator */

const lightButton = document.getElementById("light");
const darkButton = document.getElementById("dark");
const mobileLightButton = document.getElementById("mobile-light");
const mobileDarkButton = document.getElementById("mobile-dark");
const favApp = document.getElementById("fav-app");
const favPNG = document.getElementById("fav-png");
const favICO = document.getElementById("fav-ico");
const img = document.getElementById("img");
const bag = document.getElementById("shopping-bag");

const footerInst = document.getElementById("footer-instagram");
const footerTwit = document.getElementById("footer-twitter");
const footerPay = document.getElementById("footer-paypal");

const body = document.body;

const theme = localStorage.getItem("theme");

function lightIcon() {
    favApp.href = "/src/img/favicon/favicon.png";
    favPNG.href = "/src/img/favicon/favicon.png";
    favICO.href = "/src/img/favicon/favicon.ico";
    img.src = "/src/img/Light-TypeError-Logo.png";
    
    footerInst.src = "/src/img/Light-Instagram-64.svg";
    footerTwit.src = "/src/img/Light-Twitter-64.svg";
    footerPay.src = "/src/img/Light-PayPal-64.svg";

    bag.setAttribute("data-custom-icon-url", "/src/img/Light-ShoppingBag-32.png")

}

function darkIcon() {
    favApp.href = "/src/img/favicon/favicon-dark.png";
    favPNG.href = "/src/img/favicon/favicon-dark.png";
    favICO.href = "/src/img/favicon/favicon-dark.ico";
    img.src = "/src/img/Dark-TypeError-Logo.png";
    
    
    footerInst.src = "/src/img/Dark-Instagram-64.svg";
    footerTwit.src = "/src/img/Dark-Twitter-64.svg";
    footerPay.src = "/src/img/Dark-PayPal-64.svg";

    bag.setAttribute("data-custom-icon-url", "/src/img/Dark-ShoppingBag-32.png")
}

function lightCookie() {
    // Light
    !(function (t) {
        if (!t.isInit) {
            var e = {
                getCookie: function (t) {
                    var e = ("; " + document.cookie).split("; " + t + "=");
                    return e.length < 2 ? void 0 : e.pop().split(";").shift();
                },
                setCookie: function (t, e, n, i, s, o) {
                    if ("" != t) {
                        var r = new Date();
                        r.setDate(r.getDate() + (n || 365));
                        var a = [t + "=" + e, "expires=" + r.toUTCString(), "path=" + (s || "/")];
                        i && a.push("domain=" + i), o && a.push("secure"), (document.cookie = a.join(";"));
                    }
                },
                compileTemplate: function (t, e) {
                    return t.replace(/{{([a-z][a-z0-9\-_]*)}}/gi, function (t) {
                        return e(arguments[1]) || "";
                    });
                },
                addClass: function (t, e) {
                    t.className += " " + e;
                },
                removeClass: function (t, e) {
                    var n = new RegExp("\\b" + e + "\\b");
                    t.className = t.className.replace(n, "");
                },
                hasClass: function (t, e) {
                    return 1 === t.nodeType && (" " + t.className + " ").replace(/[\n\t]/g, " ").indexOf(" " + e + " ") >= 0;
                },
                extend: function (t, e) {
                    for (var n in e) e.hasOwnProperty(n) && (n in t && this.isPlainObj(t[n]) && this.isPlainObj(e[n]) ? this.extend(t[n], e[n]) : (t[n] = e[n]));
                    return t;
                },
                isPlainObj: function (t) {
                    return "object" == typeof t && null !== t && t.constructor == Object;
                },
                normalizeColor: function (t) {
                    return "#" == t[0] && (t = t.substr(1)), 3 == t.length && (t = t[0] + t[0] + t[1] + t[1] + t[2] + t[2]), t;
                },
                hashColors: function (t) {
                    var e,
                        n,
                        i = 0;
                    if (0 === t.length) return i;
                    for (e = 0, n = t.length; e < n; ++e) (i = (i << 5) - i + t.charCodeAt(e)), (i |= 0);
                    return i;
                },
                getLuminance: function (t) {
                    var e = parseInt(this.normalizeColor(t), 16),
                        n = (e >> 16) - 20,
                        i = ((e >> 8) & 255) - 20,
                        s = (255 & e) - 20;
                    return "#" + (16777216 + 65536 * (n < 255 ? (n < 1 ? 0 : n) : 255) + 256 * (i < 255 ? (i < 1 ? 0 : i) : 255) + (s < 255 ? (s < 1 ? 0 : s) : 255)).toString(16).slice(1);
                },
                isMobile: function () {
                    return /Android|webOS|iPhone|iPad|iPod|IEMobile|Opera Mini|BlackBerry/i.test(navigator.userAgent);
                },
            };
            (t.fadeEnd = (function () {
                var t = document.createElement("div"),
                    e = { t: "transitionend", MozT: "transitionend", msT: "MSTransitionEnd", OT: "oTransitionEnd", WebkitT: "webkitTransitionEnd" };
                for (var n in e) if (e.hasOwnProperty(n) && void 0 !== t.style[n + "ransition"]) return e[n];
                return "";
            })()),
                (t.fading = !!t.fadeEnd),
                (t.customCSS = {}),
                (t.Popup = (function () {
                    var n = {
                        enabled: !0,
                        autoOpen: !0,
                        cookie: { name: "wpcc", path: "/", domain: "", expiryDays: 365, secure: !1 },
                        content: { message: "This website uses cookies to ensure you get the best experience on our website.", link: "Learn more", href: "https://www.internetcookies.org", target: "_blank", button: "Got it!" },
                        container: '<div class="wpcc-container {{classes}}">{{children}}</div>',
                        template:
                            '<span class="wpcc-message">{{message}} <a class="wpcc-privacy" href="{{href}}" rel="noopener" target="{{target}}"  >{{link}}</a></span><div class="wpcc-compliance"><a class="wpcc-btn"  >{{button}}</a></div>',
                        pushdown: !1,
                        position: "bottom-left",
                        corners: "",
                        padding: "",
                        margin: "",
                        fontsize: "",
                        transparency: "",
                        border: "",
                        colors: null,
                        onInit: function (t) {},
                        onStatusChange: function (t, e) {},
                    };
                    function i() {
                        this.init.apply(this, arguments);
                    }
                    function s(t) {
                        (this.displayTimeout = null), e.removeClass(t, "wpcc-invisible");
                    }
                    function o(e) {
                        (e.style.display = "none"), e.removeEventListener(t.fadeEnd, this.afterFading), (this.afterFading = null);
                    }
                    function r(n) {
                        var i = this.options,
                            s = document.createElement("div"),
                            o = i.container && 1 === i.container.nodeType ? i.container : document.body;
                        s.innerHTML = n;
                        var r = s.children[0];
                        (r.style.display = "none"),
                            e.hasClass(r, "wpcc-container") && t.fading && e.addClass(r, "wpcc-invisible"),
                            (this.onButtonClick = function (t) {
                                this.setStatus("dismiss"), this.close();
                            }.bind(this)),
                            (this.onButtonEnter = function (t) {
                                13 === t.keyCode && (t.preventDefault(), this.setStatus("dismiss"), this.close());
                            }.bind(this));
                        var a = r.getElementsByClassName("wpcc-btn")[0];
                        return a.addEventListener("click", this.onButtonClick), a.addEventListener("keyup", this.onButtonEnter), o.firstChild ? o.insertBefore(r, o.firstChild) : o.appendChild(r), r;
                    }
                    function a(t) {
                        return "000000" == (t = e.normalizeColor(t)) ? "#222222" : e.getLuminance(t);
                    }
                    return (
                        (i.prototype.init = function (i) {
                            this.options && this.destroy(),
                                e.extend((this.options = {}), n),
                                e.isPlainObj(i) && e.extend(this.options, i),
                                function () {
                                    var t = this.options.onInit.bind(this);
                                    if (window.CookiesOK || window.navigator.CookiesOK) return t("dismiss"), !0;
                                    var e = this.getStatus(),
                                        n = "dismiss" == e;
                                    n && t(e);
                                    return n;
                                }.call(this) && (this.options.enabled = !1);
                            var s = this.options.container
                                .replace(
                                    "{{classes}}",
                                    function () {
                                        var n = this.options,
                                            i = ["wpcc-" + ("top" == n.position || "bottom" == n.position ? "banner" : "float")];
                                        n.corners && i.push("wpcc-corners-round wpcc-corners-" + n.corners);
                                        n.padding && i.push("wpcc-padding-" + n.padding);
                                        n.margin && i.push("wpcc-margin-" + n.margin);
                                        n.transparency && i.push("wpcc-transparency-" + n.transparency);
                                        n.fontsize && i.push("wpcc-fontsize-" + n.fontsize);
                                        n.border && i.push("wpcc-border-" + n.border);
                                        n.pushdown && i.push("wpcc-pushdown");
                                        i.push.apply(
                                            i,
                                            function () {
                                                var t = this.options.position.split("-"),
                                                    e = [];
                                                return (
                                                    t.forEach(function (t) {
                                                        e.push("wpcc-" + t);
                                                    }),
                                                    e
                                                );
                                            }.call(this)
                                        );
                                        (function (n) {
                                            var i = e.hashColors(JSON.stringify(n)),
                                                s = "wpcc-color-custom-" + i,
                                                o = e.isPlainObj(n);
                                            (this.customCSS = o ? s : null),
                                                o &&
                                                    (function (e, n, i) {
                                                        if (t.customCSS[e]) return void ++t.customCSS[e].references;
                                                        var s = {},
                                                            o = n.popup,
                                                            r = n.button;
                                                        o &&
                                                            ((s[i + ".wpcc-container"] = ["background-color: " + o.background, "border-color: " + o.border, "color: " + o.text]),
                                                            (s[i + " .wpcc-privacy," + i + " .wpcc-privacy:active," + i + " .wpcc-privacy:visited"] = ["color: " + o.text]),
                                                            r &&
                                                                ((s[i + " .wpcc-btn"] = ["color: " + r.text, "background-color: " + r.background]),
                                                                (s[i + " .wpcc-btn:focus, " + i + " .wpcc-btn:hover"] = ["background-color: " + a(r.background)])));
                                                        var c = document.createElement("style");
                                                        document.head.appendChild(c), (t.customCSS[e] = { references: 1, element: c.sheet });
                                                        var p = -1;
                                                        for (var l in s) s.hasOwnProperty(l) && c.sheet.insertRule(l + "{" + s[l].join(";") + "}", ++p);
                                                    })(i, n, "." + s);
                                            return o;
                                        }.call(this, this.options.colors));
                                        this.customCSS && i.push(this.customCSS);
                                        return i;
                                    }
                                        .call(this)
                                        .join(" ")
                                )
                                .replace(
                                    "{{children}}",
                                    function () {
                                        var t = this.options;
                                        return e.compileTemplate(t.template, function (e) {
                                            var n = t.content[e];
                                            return e && "string" == typeof n && n.length ? n : "";
                                        });
                                    }.call(this)
                                );
                            this.options.pushdown
                                ? ((this.wrapper = r.call(this, '<div class="wpcc-pushdown-wrap">' + s + "</div>")),
                                  (this.wrapper.style.display = ""),
                                  (this.element = this.wrapper.firstChild),
                                  (this.element.style.display = "none"),
                                  e.addClass(this.element, "wpcc-invisible"))
                                : ((this.wrapper = null), (this.element = r.call(this, s))),
                                this.options.autoOpen && this.autoOpen();
                        }),
                        (i.prototype.destroy = function () {
                            this.onButtonClick && this.element && (this.element.removeEventListener("click", this.onButtonClick), (this.onButtonClick = null)),
                                this.onButtonEnter && this.element && (this.element.removeEventListener("keyup", this.onButtonEnter), (this.onButtonEnter = null)),
                                this.wrapper && this.wrapper.parentNode ? this.wrapper.parentNode.removeChild(this.wrapper) : this.element && this.element.parentNode && this.element.parentNode.removeChild(this.element),
                                (this.wrapper = null),
                                (this.element = null),
                                (function (n) {
                                    if (e.isPlainObj(n)) {
                                        var i = e.hashColors(JSON.stringify(n)),
                                            s = t.customCSS[i];
                                        if (s && !--s.references) {
                                            var o = s.element.ownerNode;
                                            o && o.parentNode && o.parentNode.removeChild(o), (t.customCSS[i] = null);
                                        }
                                    }
                                })(this.options.colors),
                                (this.options = null);
                        }),
                        (i.prototype.open = function (e) {
                            if (this.element) return this.isOpen() || (t.fading ? this.fadeIn() : (this.element.style.display = "")), this;
                        }),
                        (i.prototype.close = function () {
                            if (this.element) return this.isOpen() && (t.fading ? this.fadeOut() : (this.element.style.display = "none")), this;
                        }),
                        (i.prototype.fadeIn = function () {
                            var n = this.element;
                            if (t.fading && n && (this.afterFading && o.call(this, n), e.hasClass(n, "wpcc-invisible"))) {
                                if (((n.style.display = ""), this.options.pushdown)) {
                                    var i = 0,
                                        r = this.element.clientHeight;
                                    e.hasClass(this.element, "wpcc-border-1")
                                        ? (i = 1)
                                        : e.hasClass(this.element, "wpcc-border-2")
                                        ? (i = 2)
                                        : e.hasClass(this.element, "wpcc-border-3")
                                        ? (i = 3)
                                        : e.hasClass(this.element, "wpcc-border-4")
                                        ? (i = 4)
                                        : e.hasClass(this.element, "wpcc-border-5") && (i = 5),
                                        (this.element.parentNode.style.maxHeight = r + 2 * i + "px");
                                }
                                this.displayTimeout = setTimeout(s.bind(this, n), 25);
                            }
                        }),
                        (i.prototype.fadeOut = function () {
                            var n = this.element;
                            n &&
                                t.fading &&
                                (this.displayTimeout && (clearTimeout(this.displayTimeout), s.bind(this, n)),
                                e.hasClass(n, "wpcc-invisible") ||
                                    (this.options.pushdown && (this.element.parentNode.style.maxHeight = ""), (this.afterFading = o.bind(this, n)), n.addEventListener(t.fadeEnd, this.afterFading), e.addClass(n, "wpcc-invisible")));
                        }),
                        (i.prototype.isOpen = function () {
                            return this.element && "" == this.element.style.display && (!t.fading || !e.hasClass(this.element, "wpcc-invisible"));
                        }),
                        (i.prototype.savedCookie = function (t) {
                            return "dismiss" == this.getStatus();
                        }),
                        (i.prototype.autoOpen = function (t) {
                            !this.savedCookie() && this.options.enabled && this.open();
                        }),
                        (i.prototype.setStatus = function (t) {
                            var n = this.options.cookie,
                                i = e.getCookie(n.name);
                            e.setCookie(n.name, t, n.expiryDays, n.domain, n.path, n.secure), this.options.onStatusChange.call(this, t, "dismiss" == i);
                        }),
                        (i.prototype.getStatus = function () {
                            return e.getCookie(this.options.cookie.name);
                        }),
                        (i.prototype.clearStatus = function () {
                            var t = this.options.cookie;
                            e.setCookie(t.name, "", -1, t.domain, t.path, t.secure);
                        }),
                        i
                    );
                })()),
                (t.init = function (e, n, i) {
                    n || (n = function () {}), i || (i = function () {}), n(new t.Popup(e));
                }),
                (t.isInit = !0),
                (window.wpcc = t);
        }
    })(window.wpcc || {});
    !(function (t) {
        if (!t.isInit) {
            var e = {
                getCookie: function (t) {
                    var e = ("; " + document.cookie).split("; " + t + "=");
                    return e.length < 2 ? void 0 : e.pop().split(";").shift();
                },
                setCookie: function (t, e, n, i, s, o) {
                    if ("" != t) {
                        var r = new Date();
                        r.setDate(r.getDate() + (n || 365));
                        var a = [t + "=" + e, "expires=" + r.toUTCString(), "path=" + (s || "/")];
                        i && a.push("domain=" + i), o && a.push("secure"), (document.cookie = a.join(";"));
                    }
                },
                compileTemplate: function (t, e) {
                    return t.replace(/{{([a-z][a-z0-9\-_]*)}}/gi, function (t) {
                        return e(arguments[1]) || "";
                    });
                },
                addClass: function (t, e) {
                    t.className += " " + e;
                },
                removeClass: function (t, e) {
                    var n = new RegExp("\\b" + e + "\\b");
                    t.className = t.className.replace(n, "");
                },
                hasClass: function (t, e) {
                    return 1 === t.nodeType && (" " + t.className + " ").replace(/[\n\t]/g, " ").indexOf(" " + e + " ") >= 0;
                },
                extend: function (t, e) {
                    for (var n in e) e.hasOwnProperty(n) && (n in t && this.isPlainObj(t[n]) && this.isPlainObj(e[n]) ? this.extend(t[n], e[n]) : (t[n] = e[n]));
                    return t;
                },
                isPlainObj: function (t) {
                    return "object" == typeof t && null !== t && t.constructor == Object;
                },
                normalizeColor: function (t) {
                    return "#" == t[0] && (t = t.substr(1)), 3 == t.length && (t = t[0] + t[0] + t[1] + t[1] + t[2] + t[2]), t;
                },
                hashColors: function (t) {
                    var e,
                        n,
                        i = 0;
                    if (0 === t.length) return i;
                    for (e = 0, n = t.length; e < n; ++e) (i = (i << 5) - i + t.charCodeAt(e)), (i |= 0);
                    return i;
                },
                getLuminance: function (t) {
                    var e = parseInt(this.normalizeColor(t), 16),
                        n = (e >> 16) - 20,
                        i = ((e >> 8) & 255) - 20,
                        s = (255 & e) - 20;
                    return "#" + (16777216 + 65536 * (n < 255 ? (n < 1 ? 0 : n) : 255) + 256 * (i < 255 ? (i < 1 ? 0 : i) : 255) + (s < 255 ? (s < 1 ? 0 : s) : 255)).toString(16).slice(1);
                },
                isMobile: function () {
                    return /Android|webOS|iPhone|iPad|iPod|IEMobile|Opera Mini|BlackBerry/i.test(navigator.userAgent);
                },
            };
            (t.fadeEnd = (function () {
                var t = document.createElement("div"),
                    e = { t: "transitionend", MozT: "transitionend", msT: "MSTransitionEnd", OT: "oTransitionEnd", WebkitT: "webkitTransitionEnd" };
                for (var n in e) if (e.hasOwnProperty(n) && void 0 !== t.style[n + "ransition"]) return e[n];
                return "";
            })()),
                (t.fading = !!t.fadeEnd),
                (t.customCSS = {}),
                (t.Popup = (function () {
                    var n = {
                        enabled: !0,
                        autoOpen: !0,
                        cookie: { name: "wpcc", path: "/", domain: "", expiryDays: 365, secure: !1 },
                        content: { message: "This website uses cookies to ensure you get the best experience on our website.", link: "Learn more", href: "https://www.internetcookies.org", target: "_blank", button: "Got it!" },
                        container: '<div class="wpcc-container {{classes}}">{{children}}</div>',
                        template:
                            '<span class="wpcc-message">{{message}} <a class="wpcc-privacy" href="{{href}}" rel="noopener" target="{{target}}"  >{{link}}</a></span><div class="wpcc-compliance"><a class="wpcc-btn"  >{{button}}</a></div>',
                        pushdown: !1,
                        position: "bottom-left",
                        corners: "",
                        padding: "",
                        margin: "",
                        fontsize: "",
                        transparency: "",
                        border: "",
                        colors: null,
                        onInit: function (t) {},
                        onStatusChange: function (t, e) {},
                    };
                    function i() {
                        this.init.apply(this, arguments);
                    }
                    function s(t) {
                        (this.displayTimeout = null), e.removeClass(t, "wpcc-invisible");
                    }
                    function o(e) {
                        (e.style.display = "none"), e.removeEventListener(t.fadeEnd, this.afterFading), (this.afterFading = null);
                    }
                    function r(n) {
                        var i = this.options,
                            s = document.createElement("div"),
                            o = i.container && 1 === i.container.nodeType ? i.container : document.body;
                        s.innerHTML = n;
                        var r = s.children[0];
                        (r.style.display = "none"),
                            e.hasClass(r, "wpcc-container") && t.fading && e.addClass(r, "wpcc-invisible"),
                            (this.onButtonClick = function (t) {
                                this.setStatus("dismiss"), this.close();
                            }.bind(this)),
                            (this.onButtonEnter = function (t) {
                                13 === t.keyCode && (t.preventDefault(), this.setStatus("dismiss"), this.close());
                            }.bind(this));
                        var a = r.getElementsByClassName("wpcc-btn")[0];
                        return a.addEventListener("click", this.onButtonClick), a.addEventListener("keyup", this.onButtonEnter), o.firstChild ? o.insertBefore(r, o.firstChild) : o.appendChild(r), r;
                    }
                    function a(t) {
                        return "000000" == (t = e.normalizeColor(t)) ? "#222222" : e.getLuminance(t);
                    }
                    return (
                        (i.prototype.init = function (i) {
                            this.options && this.destroy(),
                                e.extend((this.options = {}), n),
                                e.isPlainObj(i) && e.extend(this.options, i),
                                function () {
                                    var t = this.options.onInit.bind(this);
                                    if (window.CookiesOK || window.navigator.CookiesOK) return t("dismiss"), !0;
                                    var e = this.getStatus(),
                                        n = "dismiss" == e;
                                    n && t(e);
                                    return n;
                                }.call(this) && (this.options.enabled = !1);
                            var s = this.options.container
                                .replace(
                                    "{{classes}}",
                                    function () {
                                        var n = this.options,
                                            i = ["wpcc-" + ("top" == n.position || "bottom" == n.position ? "banner" : "float")];
                                        n.corners && i.push("wpcc-corners-round wpcc-corners-" + n.corners);
                                        n.padding && i.push("wpcc-padding-" + n.padding);
                                        n.margin && i.push("wpcc-margin-" + n.margin);
                                        n.transparency && i.push("wpcc-transparency-" + n.transparency);
                                        n.fontsize && i.push("wpcc-fontsize-" + n.fontsize);
                                        n.border && i.push("wpcc-border-" + n.border);
                                        n.pushdown && i.push("wpcc-pushdown");
                                        i.push.apply(
                                            i,
                                            function () {
                                                var t = this.options.position.split("-"),
                                                    e = [];
                                                return (
                                                    t.forEach(function (t) {
                                                        e.push("wpcc-" + t);
                                                    }),
                                                    e
                                                );
                                            }.call(this)
                                        );
                                        (function (n) {
                                            var i = e.hashColors(JSON.stringify(n)),
                                                s = "wpcc-color-custom-" + i,
                                                o = e.isPlainObj(n);
                                            (this.customCSS = o ? s : null),
                                                o &&
                                                    (function (e, n, i) {
                                                        if (t.customCSS[e]) return void ++t.customCSS[e].references;
                                                        var s = {},
                                                            o = n.popup,
                                                            r = n.button;
                                                        o &&
                                                            ((s[i + ".wpcc-container"] = ["background-color: " + o.background, "border-color: " + o.border, "color: " + o.text]),
                                                            (s[i + " .wpcc-privacy," + i + " .wpcc-privacy:active," + i + " .wpcc-privacy:visited"] = ["color: " + o.text]),
                                                            r &&
                                                                ((s[i + " .wpcc-btn"] = ["color: " + r.text, "background-color: " + r.background]),
                                                                (s[i + " .wpcc-btn:focus, " + i + " .wpcc-btn:hover"] = ["background-color: " + a(r.background)])));
                                                        var c = document.createElement("style");
                                                        document.head.appendChild(c), (t.customCSS[e] = { references: 1, element: c.sheet });
                                                        var p = -1;
                                                        for (var l in s) s.hasOwnProperty(l) && c.sheet.insertRule(l + "{" + s[l].join(";") + "}", ++p);
                                                    })(i, n, "." + s);
                                            return o;
                                        }.call(this, this.options.colors));
                                        this.customCSS && i.push(this.customCSS);
                                        return i;
                                    }
                                        .call(this)
                                        .join(" ")
                                )
                                .replace(
                                    "{{children}}",
                                    function () {
                                        var t = this.options;
                                        return e.compileTemplate(t.template, function (e) {
                                            var n = t.content[e];
                                            return e && "string" == typeof n && n.length ? n : "";
                                        });
                                    }.call(this)
                                );
                            this.options.pushdown
                                ? ((this.wrapper = r.call(this, '<div class="wpcc-pushdown-wrap">' + s + "</div>")),
                                  (this.wrapper.style.display = ""),
                                  (this.element = this.wrapper.firstChild),
                                  (this.element.style.display = "none"),
                                  e.addClass(this.element, "wpcc-invisible"))
                                : ((this.wrapper = null), (this.element = r.call(this, s))),
                                this.options.autoOpen && this.autoOpen();
                        }),
                        (i.prototype.destroy = function () {
                            this.onButtonClick && this.element && (this.element.removeEventListener("click", this.onButtonClick), (this.onButtonClick = null)),
                                this.onButtonEnter && this.element && (this.element.removeEventListener("keyup", this.onButtonEnter), (this.onButtonEnter = null)),
                                this.wrapper && this.wrapper.parentNode ? this.wrapper.parentNode.removeChild(this.wrapper) : this.element && this.element.parentNode && this.element.parentNode.removeChild(this.element),
                                (this.wrapper = null),
                                (this.element = null),
                                (function (n) {
                                    if (e.isPlainObj(n)) {
                                        var i = e.hashColors(JSON.stringify(n)),
                                            s = t.customCSS[i];
                                        if (s && !--s.references) {
                                            var o = s.element.ownerNode;
                                            o && o.parentNode && o.parentNode.removeChild(o), (t.customCSS[i] = null);
                                        }
                                    }
                                })(this.options.colors),
                                (this.options = null);
                        }),
                        (i.prototype.open = function (e) {
                            if (this.element) return this.isOpen() || (t.fading ? this.fadeIn() : (this.element.style.display = "")), this;
                        }),
                        (i.prototype.close = function () {
                            if (this.element) return this.isOpen() && (t.fading ? this.fadeOut() : (this.element.style.display = "none")), this;
                        }),
                        (i.prototype.fadeIn = function () {
                            var n = this.element;
                            if (t.fading && n && (this.afterFading && o.call(this, n), e.hasClass(n, "wpcc-invisible"))) {
                                if (((n.style.display = ""), this.options.pushdown)) {
                                    var i = 0,
                                        r = this.element.clientHeight;
                                    e.hasClass(this.element, "wpcc-border-1")
                                        ? (i = 1)
                                        : e.hasClass(this.element, "wpcc-border-2")
                                        ? (i = 2)
                                        : e.hasClass(this.element, "wpcc-border-3")
                                        ? (i = 3)
                                        : e.hasClass(this.element, "wpcc-border-4")
                                        ? (i = 4)
                                        : e.hasClass(this.element, "wpcc-border-5") && (i = 5),
                                        (this.element.parentNode.style.maxHeight = r + 2 * i + "px");
                                }
                                this.displayTimeout = setTimeout(s.bind(this, n), 25);
                            }
                        }),
                        (i.prototype.fadeOut = function () {
                            var n = this.element;
                            n &&
                                t.fading &&
                                (this.displayTimeout && (clearTimeout(this.displayTimeout), s.bind(this, n)),
                                e.hasClass(n, "wpcc-invisible") ||
                                    (this.options.pushdown && (this.element.parentNode.style.maxHeight = ""), (this.afterFading = o.bind(this, n)), n.addEventListener(t.fadeEnd, this.afterFading), e.addClass(n, "wpcc-invisible")));
                        }),
                        (i.prototype.isOpen = function () {
                            return this.element && "" == this.element.style.display && (!t.fading || !e.hasClass(this.element, "wpcc-invisible"));
                        }),
                        (i.prototype.savedCookie = function (t) {
                            return "dismiss" == this.getStatus();
                        }),
                        (i.prototype.autoOpen = function (t) {
                            !this.savedCookie() && this.options.enabled && this.open();
                        }),
                        (i.prototype.setStatus = function (t) {
                            var n = this.options.cookie,
                                i = e.getCookie(n.name);
                            e.setCookie(n.name, t, n.expiryDays, n.domain, n.path, n.secure), this.options.onStatusChange.call(this, t, "dismiss" == i);
                        }),
                        (i.prototype.getStatus = function () {
                            return e.getCookie(this.options.cookie.name);
                        }),
                        (i.prototype.clearStatus = function () {
                            var t = this.options.cookie;
                            e.setCookie(t.name, "", -1, t.domain, t.path, t.secure);
                        }),
                        i
                    );
                })()),
                (t.init = function (e, n, i) {
                    n || (n = function () {}), i || (i = function () {}), n(new t.Popup(e));
                }),
                (t.isInit = !0),
                (window.wpcc = t);
        }
    })(window.wpcc || {});

    window.addEventListener("load", function () {
        window.wpcc.init({
            corners: "small",
            colors: { popup: { background: "#ffffff", text: "#82888c", border: "#e0e0e0" }, button: { background: "#0341b5c2", text: "#fafafa" } },
            content: { message: "Für ein besseres Erlebnis verwenden wir Cookies auf unserer Webseite. Diese können jederzeit widerrufen werden.", link: "Klicke hier für mehr Informationen", href: "#", target: "_blank", button: "Okay, verstanden"},
            position: "bottom",
            margin: "none",
            padding: "none",
            border: "thin",
            fontsize: "small",
        });
    });
}

function darkCookie() {
    // Dark
    !(function (t) {
        if (!t.isInit) {
            var e = {
                getCookie: function (t) {
                    var e = ("; " + document.cookie).split("; " + t + "=");
                    return e.length < 2 ? void 0 : e.pop().split(";").shift();
                },
                setCookie: function (t, e, n, i, s, o) {
                    if ("" != t) {
                        var r = new Date();
                        r.setDate(r.getDate() + (n || 365));
                        var a = [t + "=" + e, "expires=" + r.toUTCString(), "path=" + (s || "/")];
                        i && a.push("domain=" + i), o && a.push("secure"), (document.cookie = a.join(";"));
                    }
                },
                compileTemplate: function (t, e) {
                    return t.replace(/{{([a-z][a-z0-9\-_]*)}}/gi, function (t) {
                        return e(arguments[1]) || "";
                    });
                },
                addClass: function (t, e) {
                    t.className += " " + e;
                },
                removeClass: function (t, e) {
                    var n = new RegExp("\\b" + e + "\\b");
                    t.className = t.className.replace(n, "");
                },
                hasClass: function (t, e) {
                    return 1 === t.nodeType && (" " + t.className + " ").replace(/[\n\t]/g, " ").indexOf(" " + e + " ") >= 0;
                },
                extend: function (t, e) {
                    for (var n in e) e.hasOwnProperty(n) && (n in t && this.isPlainObj(t[n]) && this.isPlainObj(e[n]) ? this.extend(t[n], e[n]) : (t[n] = e[n]));
                    return t;
                },
                isPlainObj: function (t) {
                    return "object" == typeof t && null !== t && t.constructor == Object;
                },
                normalizeColor: function (t) {
                    return "#" == t[0] && (t = t.substr(1)), 3 == t.length && (t = t[0] + t[0] + t[1] + t[1] + t[2] + t[2]), t;
                },
                hashColors: function (t) {
                    var e,
                        n,
                        i = 0;
                    if (0 === t.length) return i;
                    for (e = 0, n = t.length; e < n; ++e) (i = (i << 5) - i + t.charCodeAt(e)), (i |= 0);
                    return i;
                },
                getLuminance: function (t) {
                    var e = parseInt(this.normalizeColor(t), 16),
                        n = (e >> 16) - 20,
                        i = ((e >> 8) & 255) - 20,
                        s = (255 & e) - 20;
                    return "#" + (16777216 + 65536 * (n < 255 ? (n < 1 ? 0 : n) : 255) + 256 * (i < 255 ? (i < 1 ? 0 : i) : 255) + (s < 255 ? (s < 1 ? 0 : s) : 255)).toString(16).slice(1);
                },
                isMobile: function () {
                    return /Android|webOS|iPhone|iPad|iPod|IEMobile|Opera Mini|BlackBerry/i.test(navigator.userAgent);
                },
            };
            (t.fadeEnd = (function () {
                var t = document.createElement("div"),
                    e = { t: "transitionend", MozT: "transitionend", msT: "MSTransitionEnd", OT: "oTransitionEnd", WebkitT: "webkitTransitionEnd" };
                for (var n in e) if (e.hasOwnProperty(n) && void 0 !== t.style[n + "ransition"]) return e[n];
                return "";
            })()),
                (t.fading = !!t.fadeEnd),
                (t.customCSS = {}),
                (t.Popup = (function () {
                    var n = {
                        enabled: !0,
                        autoOpen: !0,
                        cookie: { name: "wpcc", path: "/", domain: "", expiryDays: 365, secure: !1 },
                        content: { message: "This website uses cookies to ensure you get the best experience on our website.", link: "Learn more", href: "https://www.internetcookies.org", target: "_blank", button: "Got it!" },
                        container: '<div class="wpcc-container {{classes}}">{{children}}</div>',
                        template:
                            '<span class="wpcc-message">{{message}} <a class="wpcc-privacy" href="{{href}}" rel="noopener" target="{{target}}"  >{{link}}</a></span><div class="wpcc-compliance"><a class="wpcc-btn"  >{{button}}</a></div>',
                        pushdown: !1,
                        position: "bottom-left",
                        corners: "",
                        padding: "",
                        margin: "",
                        fontsize: "",
                        transparency: "",
                        border: "",
                        colors: null,
                        onInit: function (t) {},
                        onStatusChange: function (t, e) {},
                    };
                    function i() {
                        this.init.apply(this, arguments);
                    }
                    function s(t) {
                        (this.displayTimeout = null), e.removeClass(t, "wpcc-invisible");
                    }
                    function o(e) {
                        (e.style.display = "none"), e.removeEventListener(t.fadeEnd, this.afterFading), (this.afterFading = null);
                    }
                    function r(n) {
                        var i = this.options,
                            s = document.createElement("div"),
                            o = i.container && 1 === i.container.nodeType ? i.container : document.body;
                        s.innerHTML = n;
                        var r = s.children[0];
                        (r.style.display = "none"),
                            e.hasClass(r, "wpcc-container") && t.fading && e.addClass(r, "wpcc-invisible"),
                            (this.onButtonClick = function (t) {
                                this.setStatus("dismiss"), this.close();
                            }.bind(this)),
                            (this.onButtonEnter = function (t) {
                                13 === t.keyCode && (t.preventDefault(), this.setStatus("dismiss"), this.close());
                            }.bind(this));
                        var a = r.getElementsByClassName("wpcc-btn")[0];
                        return a.addEventListener("click", this.onButtonClick), a.addEventListener("keyup", this.onButtonEnter), o.firstChild ? o.insertBefore(r, o.firstChild) : o.appendChild(r), r;
                    }
                    function a(t) {
                        return "000000" == (t = e.normalizeColor(t)) ? "#222222" : e.getLuminance(t);
                    }
                    return (
                        (i.prototype.init = function (i) {
                            this.options && this.destroy(),
                                e.extend((this.options = {}), n),
                                e.isPlainObj(i) && e.extend(this.options, i),
                                function () {
                                    var t = this.options.onInit.bind(this);
                                    if (window.CookiesOK || window.navigator.CookiesOK) return t("dismiss"), !0;
                                    var e = this.getStatus(),
                                        n = "dismiss" == e;
                                    n && t(e);
                                    return n;
                                }.call(this) && (this.options.enabled = !1);
                            var s = this.options.container
                                .replace(
                                    "{{classes}}",
                                    function () {
                                        var n = this.options,
                                            i = ["wpcc-" + ("top" == n.position || "bottom" == n.position ? "banner" : "float")];
                                        n.corners && i.push("wpcc-corners-round wpcc-corners-" + n.corners);
                                        n.padding && i.push("wpcc-padding-" + n.padding);
                                        n.margin && i.push("wpcc-margin-" + n.margin);
                                        n.transparency && i.push("wpcc-transparency-" + n.transparency);
                                        n.fontsize && i.push("wpcc-fontsize-" + n.fontsize);
                                        n.border && i.push("wpcc-border-" + n.border);
                                        n.pushdown && i.push("wpcc-pushdown");
                                        i.push.apply(
                                            i,
                                            function () {
                                                var t = this.options.position.split("-"),
                                                    e = [];
                                                return (
                                                    t.forEach(function (t) {
                                                        e.push("wpcc-" + t);
                                                    }),
                                                    e
                                                );
                                            }.call(this)
                                        );
                                        (function (n) {
                                            var i = e.hashColors(JSON.stringify(n)),
                                                s = "wpcc-color-custom-" + i,
                                                o = e.isPlainObj(n);
                                            (this.customCSS = o ? s : null),
                                                o &&
                                                    (function (e, n, i) {
                                                        if (t.customCSS[e]) return void ++t.customCSS[e].references;
                                                        var s = {},
                                                            o = n.popup,
                                                            r = n.button;
                                                        o &&
                                                            ((s[i + ".wpcc-container"] = ["background-color: " + o.background, "border-color: " + o.border, "color: " + o.text]),
                                                            (s[i + " .wpcc-privacy," + i + " .wpcc-privacy:active," + i + " .wpcc-privacy:visited"] = ["color: " + o.text]),
                                                            r &&
                                                                ((s[i + " .wpcc-btn"] = ["color: " + r.text, "background-color: " + r.background]),
                                                                (s[i + " .wpcc-btn:focus, " + i + " .wpcc-btn:hover"] = ["background-color: " + a(r.background)])));
                                                        var c = document.createElement("style");
                                                        document.head.appendChild(c), (t.customCSS[e] = { references: 1, element: c.sheet });
                                                        var p = -1;
                                                        for (var l in s) s.hasOwnProperty(l) && c.sheet.insertRule(l + "{" + s[l].join(";") + "}", ++p);
                                                    })(i, n, "." + s);
                                            return o;
                                        }.call(this, this.options.colors));
                                        this.customCSS && i.push(this.customCSS);
                                        return i;
                                    }
                                        .call(this)
                                        .join(" ")
                                )
                                .replace(
                                    "{{children}}",
                                    function () {
                                        var t = this.options;
                                        return e.compileTemplate(t.template, function (e) {
                                            var n = t.content[e];
                                            return e && "string" == typeof n && n.length ? n : "";
                                        });
                                    }.call(this)
                                );
                            this.options.pushdown
                                ? ((this.wrapper = r.call(this, '<div class="wpcc-pushdown-wrap">' + s + "</div>")),
                                  (this.wrapper.style.display = ""),
                                  (this.element = this.wrapper.firstChild),
                                  (this.element.style.display = "none"),
                                  e.addClass(this.element, "wpcc-invisible"))
                                : ((this.wrapper = null), (this.element = r.call(this, s))),
                                this.options.autoOpen && this.autoOpen();
                        }),
                        (i.prototype.destroy = function () {
                            this.onButtonClick && this.element && (this.element.removeEventListener("click", this.onButtonClick), (this.onButtonClick = null)),
                                this.onButtonEnter && this.element && (this.element.removeEventListener("keyup", this.onButtonEnter), (this.onButtonEnter = null)),
                                this.wrapper && this.wrapper.parentNode ? this.wrapper.parentNode.removeChild(this.wrapper) : this.element && this.element.parentNode && this.element.parentNode.removeChild(this.element),
                                (this.wrapper = null),
                                (this.element = null),
                                (function (n) {
                                    if (e.isPlainObj(n)) {
                                        var i = e.hashColors(JSON.stringify(n)),
                                            s = t.customCSS[i];
                                        if (s && !--s.references) {
                                            var o = s.element.ownerNode;
                                            o && o.parentNode && o.parentNode.removeChild(o), (t.customCSS[i] = null);
                                        }
                                    }
                                })(this.options.colors),
                                (this.options = null);
                        }),
                        (i.prototype.open = function (e) {
                            if (this.element) return this.isOpen() || (t.fading ? this.fadeIn() : (this.element.style.display = "")), this;
                        }),
                        (i.prototype.close = function () {
                            if (this.element) return this.isOpen() && (t.fading ? this.fadeOut() : (this.element.style.display = "none")), this;
                        }),
                        (i.prototype.fadeIn = function () {
                            var n = this.element;
                            if (t.fading && n && (this.afterFading && o.call(this, n), e.hasClass(n, "wpcc-invisible"))) {
                                if (((n.style.display = ""), this.options.pushdown)) {
                                    var i = 0,
                                        r = this.element.clientHeight;
                                    e.hasClass(this.element, "wpcc-border-1")
                                        ? (i = 1)
                                        : e.hasClass(this.element, "wpcc-border-2")
                                        ? (i = 2)
                                        : e.hasClass(this.element, "wpcc-border-3")
                                        ? (i = 3)
                                        : e.hasClass(this.element, "wpcc-border-4")
                                        ? (i = 4)
                                        : e.hasClass(this.element, "wpcc-border-5") && (i = 5),
                                        (this.element.parentNode.style.maxHeight = r + 2 * i + "px");
                                }
                                this.displayTimeout = setTimeout(s.bind(this, n), 25);
                            }
                        }),
                        (i.prototype.fadeOut = function () {
                            var n = this.element;
                            n &&
                                t.fading &&
                                (this.displayTimeout && (clearTimeout(this.displayTimeout), s.bind(this, n)),
                                e.hasClass(n, "wpcc-invisible") ||
                                    (this.options.pushdown && (this.element.parentNode.style.maxHeight = ""), (this.afterFading = o.bind(this, n)), n.addEventListener(t.fadeEnd, this.afterFading), e.addClass(n, "wpcc-invisible")));
                        }),
                        (i.prototype.isOpen = function () {
                            return this.element && "" == this.element.style.display && (!t.fading || !e.hasClass(this.element, "wpcc-invisible"));
                        }),
                        (i.prototype.savedCookie = function (t) {
                            return "dismiss" == this.getStatus();
                        }),
                        (i.prototype.autoOpen = function (t) {
                            !this.savedCookie() && this.options.enabled && this.open();
                        }),
                        (i.prototype.setStatus = function (t) {
                            var n = this.options.cookie,
                                i = e.getCookie(n.name);
                            e.setCookie(n.name, t, n.expiryDays, n.domain, n.path, n.secure), this.options.onStatusChange.call(this, t, "dismiss" == i);
                        }),
                        (i.prototype.getStatus = function () {
                            return e.getCookie(this.options.cookie.name);
                        }),
                        (i.prototype.clearStatus = function () {
                            var t = this.options.cookie;
                            e.setCookie(t.name, "", -1, t.domain, t.path, t.secure);
                        }),
                        i
                    );
                })()),
                (t.init = function (e, n, i) {
                    n || (n = function () {}), i || (i = function () {}), n(new t.Popup(e));
                }),
                (t.isInit = !0),
                (window.wpcc = t);
        }
    })(window.wpcc || {});
    !(function (t) {
        if (!t.isInit) {
            var e = {
                getCookie: function (t) {
                    var e = ("; " + document.cookie).split("; " + t + "=");
                    return e.length < 2 ? void 0 : e.pop().split(";").shift();
                },
                setCookie: function (t, e, n, i, s, o) {
                    if ("" != t) {
                        var r = new Date();
                        r.setDate(r.getDate() + (n || 365));
                        var a = [t + "=" + e, "expires=" + r.toUTCString(), "path=" + (s || "/")];
                        i && a.push("domain=" + i), o && a.push("secure"), (document.cookie = a.join(";"));
                    }
                },
                compileTemplate: function (t, e) {
                    return t.replace(/{{([a-z][a-z0-9\-_]*)}}/gi, function (t) {
                        return e(arguments[1]) || "";
                    });
                },
                addClass: function (t, e) {
                    t.className += " " + e;
                },
                removeClass: function (t, e) {
                    var n = new RegExp("\\b" + e + "\\b");
                    t.className = t.className.replace(n, "");
                },
                hasClass: function (t, e) {
                    return 1 === t.nodeType && (" " + t.className + " ").replace(/[\n\t]/g, " ").indexOf(" " + e + " ") >= 0;
                },
                extend: function (t, e) {
                    for (var n in e) e.hasOwnProperty(n) && (n in t && this.isPlainObj(t[n]) && this.isPlainObj(e[n]) ? this.extend(t[n], e[n]) : (t[n] = e[n]));
                    return t;
                },
                isPlainObj: function (t) {
                    return "object" == typeof t && null !== t && t.constructor == Object;
                },
                normalizeColor: function (t) {
                    return "#" == t[0] && (t = t.substr(1)), 3 == t.length && (t = t[0] + t[0] + t[1] + t[1] + t[2] + t[2]), t;
                },
                hashColors: function (t) {
                    var e,
                        n,
                        i = 0;
                    if (0 === t.length) return i;
                    for (e = 0, n = t.length; e < n; ++e) (i = (i << 5) - i + t.charCodeAt(e)), (i |= 0);
                    return i;
                },
                getLuminance: function (t) {
                    var e = parseInt(this.normalizeColor(t), 16),
                        n = (e >> 16) - 20,
                        i = ((e >> 8) & 255) - 20,
                        s = (255 & e) - 20;
                    return "#" + (16777216 + 65536 * (n < 255 ? (n < 1 ? 0 : n) : 255) + 256 * (i < 255 ? (i < 1 ? 0 : i) : 255) + (s < 255 ? (s < 1 ? 0 : s) : 255)).toString(16).slice(1);
                },
                isMobile: function () {
                    return /Android|webOS|iPhone|iPad|iPod|IEMobile|Opera Mini|BlackBerry/i.test(navigator.userAgent);
                },
            };
            (t.fadeEnd = (function () {
                var t = document.createElement("div"),
                    e = { t: "transitionend", MozT: "transitionend", msT: "MSTransitionEnd", OT: "oTransitionEnd", WebkitT: "webkitTransitionEnd" };
                for (var n in e) if (e.hasOwnProperty(n) && void 0 !== t.style[n + "ransition"]) return e[n];
                return "";
            })()),
                (t.fading = !!t.fadeEnd),
                (t.customCSS = {}),
                (t.Popup = (function () {
                    var n = {
                        enabled: !0,
                        autoOpen: !0,
                        cookie: { name: "wpcc", path: "/", domain: "", expiryDays: 365, secure: !1 },
                        content: { message: "This website uses cookies to ensure you get the best experience on our website.", link: "Learn more", href: "https://www.internetcookies.org", target: "_blank", button: "Got it!" },
                        container: '<div class="wpcc-container {{classes}}">{{children}}</div>',
                        template:
                            '<span class="wpcc-message">{{message}} <a class="wpcc-privacy" href="{{href}}" rel="noopener" target="{{target}}"  >{{link}}</a></span><div class="wpcc-compliance"><a class="wpcc-btn"  >{{button}}</a></div>',
                        pushdown: !1,
                        position: "bottom-left",
                        corners: "",
                        padding: "",
                        margin: "",
                        fontsize: "",
                        transparency: "",
                        border: "",
                        colors: null,
                        onInit: function (t) {},
                        onStatusChange: function (t, e) {},
                    };
                    function i() {
                        this.init.apply(this, arguments);
                    }
                    function s(t) {
                        (this.displayTimeout = null), e.removeClass(t, "wpcc-invisible");
                    }
                    function o(e) {
                        (e.style.display = "none"), e.removeEventListener(t.fadeEnd, this.afterFading), (this.afterFading = null);
                    }
                    function r(n) {
                        var i = this.options,
                            s = document.createElement("div"),
                            o = i.container && 1 === i.container.nodeType ? i.container : document.body;
                        s.innerHTML = n;
                        var r = s.children[0];
                        (r.style.display = "none"),
                            e.hasClass(r, "wpcc-container") && t.fading && e.addClass(r, "wpcc-invisible"),
                            (this.onButtonClick = function (t) {
                                this.setStatus("dismiss"), this.close();
                            }.bind(this)),
                            (this.onButtonEnter = function (t) {
                                13 === t.keyCode && (t.preventDefault(), this.setStatus("dismiss"), this.close());
                            }.bind(this));
                        var a = r.getElementsByClassName("wpcc-btn")[0];
                        return a.addEventListener("click", this.onButtonClick), a.addEventListener("keyup", this.onButtonEnter), o.firstChild ? o.insertBefore(r, o.firstChild) : o.appendChild(r), r;
                    }
                    function a(t) {
                        return "000000" == (t = e.normalizeColor(t)) ? "#222222" : e.getLuminance(t);
                    }
                    return (
                        (i.prototype.init = function (i) {
                            this.options && this.destroy(),
                                e.extend((this.options = {}), n),
                                e.isPlainObj(i) && e.extend(this.options, i),
                                function () {
                                    var t = this.options.onInit.bind(this);
                                    if (window.CookiesOK || window.navigator.CookiesOK) return t("dismiss"), !0;
                                    var e = this.getStatus(),
                                        n = "dismiss" == e;
                                    n && t(e);
                                    return n;
                                }.call(this) && (this.options.enabled = !1);
                            var s = this.options.container
                                .replace(
                                    "{{classes}}",
                                    function () {
                                        var n = this.options,
                                            i = ["wpcc-" + ("top" == n.position || "bottom" == n.position ? "banner" : "float")];
                                        n.corners && i.push("wpcc-corners-round wpcc-corners-" + n.corners);
                                        n.padding && i.push("wpcc-padding-" + n.padding);
                                        n.margin && i.push("wpcc-margin-" + n.margin);
                                        n.transparency && i.push("wpcc-transparency-" + n.transparency);
                                        n.fontsize && i.push("wpcc-fontsize-" + n.fontsize);
                                        n.border && i.push("wpcc-border-" + n.border);
                                        n.pushdown && i.push("wpcc-pushdown");
                                        i.push.apply(
                                            i,
                                            function () {
                                                var t = this.options.position.split("-"),
                                                    e = [];
                                                return (
                                                    t.forEach(function (t) {
                                                        e.push("wpcc-" + t);
                                                    }),
                                                    e
                                                );
                                            }.call(this)
                                        );
                                        (function (n) {
                                            var i = e.hashColors(JSON.stringify(n)),
                                                s = "wpcc-color-custom-" + i,
                                                o = e.isPlainObj(n);
                                            (this.customCSS = o ? s : null),
                                                o &&
                                                    (function (e, n, i) {
                                                        if (t.customCSS[e]) return void ++t.customCSS[e].references;
                                                        var s = {},
                                                            o = n.popup,
                                                            r = n.button;
                                                        o &&
                                                            ((s[i + ".wpcc-container"] = ["background-color: " + o.background, "border-color: " + o.border, "color: " + o.text]),
                                                            (s[i + " .wpcc-privacy," + i + " .wpcc-privacy:active," + i + " .wpcc-privacy:visited"] = ["color: " + o.text]),
                                                            r &&
                                                                ((s[i + " .wpcc-btn"] = ["color: " + r.text, "background-color: " + r.background]),
                                                                (s[i + " .wpcc-btn:focus, " + i + " .wpcc-btn:hover"] = ["background-color: " + a(r.background)])));
                                                        var c = document.createElement("style");
                                                        document.head.appendChild(c), (t.customCSS[e] = { references: 1, element: c.sheet });
                                                        var p = -1;
                                                        for (var l in s) s.hasOwnProperty(l) && c.sheet.insertRule(l + "{" + s[l].join(";") + "}", ++p);
                                                    })(i, n, "." + s);
                                            return o;
                                        }.call(this, this.options.colors));
                                        this.customCSS && i.push(this.customCSS);
                                        return i;
                                    }
                                        .call(this)
                                        .join(" ")
                                )
                                .replace(
                                    "{{children}}",
                                    function () {
                                        var t = this.options;
                                        return e.compileTemplate(t.template, function (e) {
                                            var n = t.content[e];
                                            return e && "string" == typeof n && n.length ? n : "";
                                        });
                                    }.call(this)
                                );
                            this.options.pushdown
                                ? ((this.wrapper = r.call(this, '<div class="wpcc-pushdown-wrap">' + s + "</div>")),
                                  (this.wrapper.style.display = ""),
                                  (this.element = this.wrapper.firstChild),
                                  (this.element.style.display = "none"),
                                  e.addClass(this.element, "wpcc-invisible"))
                                : ((this.wrapper = null), (this.element = r.call(this, s))),
                                this.options.autoOpen && this.autoOpen();
                        }),
                        (i.prototype.destroy = function () {
                            this.onButtonClick && this.element && (this.element.removeEventListener("click", this.onButtonClick), (this.onButtonClick = null)),
                                this.onButtonEnter && this.element && (this.element.removeEventListener("keyup", this.onButtonEnter), (this.onButtonEnter = null)),
                                this.wrapper && this.wrapper.parentNode ? this.wrapper.parentNode.removeChild(this.wrapper) : this.element && this.element.parentNode && this.element.parentNode.removeChild(this.element),
                                (this.wrapper = null),
                                (this.element = null),
                                (function (n) {
                                    if (e.isPlainObj(n)) {
                                        var i = e.hashColors(JSON.stringify(n)),
                                            s = t.customCSS[i];
                                        if (s && !--s.references) {
                                            var o = s.element.ownerNode;
                                            o && o.parentNode && o.parentNode.removeChild(o), (t.customCSS[i] = null);
                                        }
                                    }
                                })(this.options.colors),
                                (this.options = null);
                        }),
                        (i.prototype.open = function (e) {
                            if (this.element) return this.isOpen() || (t.fading ? this.fadeIn() : (this.element.style.display = "")), this;
                        }),
                        (i.prototype.close = function () {
                            if (this.element) return this.isOpen() && (t.fading ? this.fadeOut() : (this.element.style.display = "none")), this;
                        }),
                        (i.prototype.fadeIn = function () {
                            var n = this.element;
                            if (t.fading && n && (this.afterFading && o.call(this, n), e.hasClass(n, "wpcc-invisible"))) {
                                if (((n.style.display = ""), this.options.pushdown)) {
                                    var i = 0,
                                        r = this.element.clientHeight;
                                    e.hasClass(this.element, "wpcc-border-1")
                                        ? (i = 1)
                                        : e.hasClass(this.element, "wpcc-border-2")
                                        ? (i = 2)
                                        : e.hasClass(this.element, "wpcc-border-3")
                                        ? (i = 3)
                                        : e.hasClass(this.element, "wpcc-border-4")
                                        ? (i = 4)
                                        : e.hasClass(this.element, "wpcc-border-5") && (i = 5),
                                        (this.element.parentNode.style.maxHeight = r + 2 * i + "px");
                                }
                                this.displayTimeout = setTimeout(s.bind(this, n), 25);
                            }
                        }),
                        (i.prototype.fadeOut = function () {
                            var n = this.element;
                            n &&
                                t.fading &&
                                (this.displayTimeout && (clearTimeout(this.displayTimeout), s.bind(this, n)),
                                e.hasClass(n, "wpcc-invisible") ||
                                    (this.options.pushdown && (this.element.parentNode.style.maxHeight = ""), (this.afterFading = o.bind(this, n)), n.addEventListener(t.fadeEnd, this.afterFading), e.addClass(n, "wpcc-invisible")));
                        }),
                        (i.prototype.isOpen = function () {
                            return this.element && "" == this.element.style.display && (!t.fading || !e.hasClass(this.element, "wpcc-invisible"));
                        }),
                        (i.prototype.savedCookie = function (t) {
                            return "dismiss" == this.getStatus();
                        }),
                        (i.prototype.autoOpen = function (t) {
                            !this.savedCookie() && this.options.enabled && this.open();
                        }),
                        (i.prototype.setStatus = function (t) {
                            var n = this.options.cookie,
                                i = e.getCookie(n.name);
                            e.setCookie(n.name, t, n.expiryDays, n.domain, n.path, n.secure), this.options.onStatusChange.call(this, t, "dismiss" == i);
                        }),
                        (i.prototype.getStatus = function () {
                            return e.getCookie(this.options.cookie.name);
                        }),
                        (i.prototype.clearStatus = function () {
                            var t = this.options.cookie;
                            e.setCookie(t.name, "", -1, t.domain, t.path, t.secure);
                        }),
                        i
                    );
                })()),
                (t.init = function (e, n, i) {
                    n || (n = function () {}), i || (i = function () {}), n(new t.Popup(e));
                }),
                (t.isInit = !0),
                (window.wpcc = t);
        }
    })(window.wpcc || {});

    window.addEventListener("load", function () {
        window.wpcc.init({
            corners: "small",
            colors: { popup: { background: "#1B1C1E", text: "#FAFAFA", border: "#e0e0e0" }, button: { background: "#283d62", text: "#fafafa" } },
            content: { message: "Für ein besseres Erlebnis verwenden wir Cookies auf unserer Webseite. Diese können jederzeit widerrufen werden.", link: "Klicke hier für mehr Informationen", button: "Okay, verstanden", href: "#" },
            position: "bottom",
            margin: "none",
            padding: "none",
            border: "thin",
            fontsize: "small",
        });
    });
}

if (theme) {
    body.classList.add(theme);
    if (body.classList.contains("dark")) {
        darkCookie();
        darkIcon();
    }
    else {
        lightIcon();
        lightCookie();
    }
}
else if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
    body.classList.replace("light", "dark");
    darkCookie();
    darkIcon();
}
else {
    lightIcon();
    lightCookie();
}

// Button Event Handlers
// desktop
lightButton.onclick = () => {
    localStorage.setItem("theme", "light");
    body.classList.replace("dark", "light");
    lightIcon();
};

darkButton.onclick = () => {
    localStorage.setItem("theme", "dark");
    body.classList.replace("light", "dark");
    darkIcon();
};

// mobile
mobileLightButton.onclick = () => {
    localStorage.setItem("theme", "dark");
    body.classList.replace("light", "dark");
    darkIcon();
};

mobileDarkButton.onclick = () => {
    localStorage.setItem("theme", "light");
    body.classList.replace("dark", "light");
    lightIcon();
};
