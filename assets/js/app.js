!function(e) {
    function t(t) {
        for (var i, s, o = t[0], r = t[1], a = 0, c = []; a < o.length; a++)
            s = o[a],
            Object.prototype.hasOwnProperty.call(n, s) && n[s] && c.push(n[s][0]),
            n[s] = 0;
        for (i in r)
            Object.prototype.hasOwnProperty.call(r, i) && (e[i] = r[i]);
        for (l && l(t); c.length; )
            c.shift()()
    }
    var i = {}
      , n = {
        0: 0
    };
    function s(t) {
        if (i[t])
            return i[t].exports;
        var n = i[t] = {
            i: t,
            l: !1,
            exports: {}
        };
        return e[t].call(n.exports, n, n.exports, s),
        n.l = !0,
        n.exports
    }
    s.e = function(e) {
        var t = []
          , i = n[e];
        if (0 !== i)
            if (i)
                t.push(i[2]);
            else {
                var o = new Promise((function(t, s) {
                    i = n[e] = [t, s]
                }
                ));
                t.push(i[2] = o);
                var r, a = document.createElement("script");
                a.charset = "utf-8",
                a.timeout = 120,
                s.nc && a.setAttribute("nonce", s.nc),
                a.src = function(e) {
                    return s.p + "" + ({}[e] || e) + ".js"
                }(e);
                var l = new Error;
                r = function(t) {
                    a.onerror = a.onload = null,
                    clearTimeout(c);
                    var i = n[e];
                    if (0 !== i) {
                        if (i) {
                            var s = t && ("load" === t.type ? "missing" : t.type)
                              , o = t && t.target && t.target.src;
                            l.message = "Loading chunk " + e + " failed.\n(" + s + ": " + o + ")",
                            l.name = "ChunkLoadError",
                            l.type = s,
                            l.request = o,
                            i[1](l)
                        }
                        n[e] = void 0
                    }
                }
                ;
                var c = setTimeout((function() {
                    r({
                        type: "timeout",
                        target: a
                    })
                }
                ), 12e4);
                a.onerror = a.onload = r,
                document.head.appendChild(a)
            }
        return Promise.all(t)
    }
    ,
    s.m = e,
    s.c = i,
    s.d = function(e, t, i) {
        s.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: i
        })
    }
    ,
    s.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }),
        Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }
    ,
    s.t = function(e, t) {
        if (1 & t && (e = s(e)),
        8 & t)
            return e;
        if (4 & t && "object" == typeof e && e && e.__esModule)
            return e;
        var i = Object.create(null);
        if (s.r(i),
        Object.defineProperty(i, "default", {
            enumerable: !0,
            value: e
        }),
        2 & t && "string" != typeof e)
            for (var n in e)
                s.d(i, n, function(t) {
                    return e[t]
                }
                .bind(null, n));
        return i
    }
    ,
    s.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default
        }
        : function() {
            return e
        }
        ;
        return s.d(t, "a", t),
        t
    }
    ,
    s.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }
    ,
    s.p = "/",
    s.oe = function(e) {
        throw console.error(e),
        e
    }
    ;
    var o = window.webpackJsonp = window.webpackJsonp || []
      , r = o.push.bind(o);
    o.push = t,
    o = o.slice();
    for (var a = 0; a < o.length; a++)
        t(o[a]);
    var l = r;
    s(s.s = 0)
}({
    0: function(e, t, i) {
        i("lEkl"),
        e.exports = i("ZZjj")
    },
    "1zha": function(e, t, i) {
        "use strict";
        function n(e, t, i) {
            return t in e ? Object.defineProperty(e, t, {
                value: i,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = i,
            e
        }
        !function(e) {
            var t = "js-tabs"
              , i = "js-tablist__item"
              , s = "js-tablist__link"
              , o = "js-tabcontent"
              , r = "js-link-to-tab"
              , a = "data-tabs-prefix-class"
              , l = "data-hx"
              , c = "data-tabs-generated-hx-class"
              , d = "data-existing-hx"
              , u = "label_"
              , h = "tabs"
              , p = "tabs__list"
              , f = "tabs__item"
              , m = "role"
              , g = "aria-labelledby"
              , y = "aria-hidden"
              , v = "aria-controls"
              , b = "aria-selected"
              , w = window.location.hash.replace("#", "")
              , T = function(t) {
                return e.getElementById(t)
            }
              , k = function(e, t) {
                e.classList ? e.classList.add(t) : e.className += " " + t
            }
              , C = function(e, t) {
                return e.classList ? e.classList.contains(t) : new RegExp("(^| )" + t + "( |$)","gi").test(e.className)
            }
              , x = function(e, t) {
                Object.keys(t).forEach((function(i) {
                    e.setAttribute(i, t[i])
                }
                ))
            }
              , _ = function(e) {
                e.forEach((function(e) {
                    var t;
                    x(e, (n(t = {}, b, "false"),
                    n(t, "tabindex", "-1"),
                    t))
                }
                ))
            }
              , A = function(e) {
                e.forEach((function(e) {
                    e.setAttribute(y, !0)
                }
                ))
            }
              , E = function(e) {
                var t, i = T(e.getAttribute(v));
                x(e, (n(t = {}, b, "true"),
                n(t, "tabindex", "0"),
                t)),
                i.removeAttribute(y),
                setTimeout((function() {
                    e.focus()
                }
                ), 0),
                setTimeout((function() {
                    history.pushState(null, null, location.pathname + location.search + "#" + e.getAttribute(v))
                }
                ), 1e3)
            }
              , S = function(e, t, i, n) {
                var o = void 0;
                e.forEach((function(e, t) {
                    "true" === e.querySelector("." + s).getAttribute(b) && (o = t)
                }
                )),
                _(t),
                A(i),
                "next" === n && (E(t[o + 1]),
                setTimeout((function() {
                    t[o + 1].focus()
                }
                ), 0)),
                "prev" === n && (E(t[o - 1]),
                setTimeout((function() {
                    t[o - 1].focus()
                }
                ), 0))
            }
              , L = function(e, t) {
                for (var i = !1, n = e.parentNode; n && !1 === i; )
                    !0 === C(n, t) ? i = !0 : n = n.parentNode;
                return !0 === i ? n.getAttribute("id") : ""
            }
              , P = function() {
                var i = arguments.length <= 0 || void 0 === arguments[0] ? e : arguments[0];
                return [].slice.call(i.querySelectorAll("." + t))
            }
              , O = function(e) {
                P(e).forEach((function(e) {
                    var t = Math.random().toString(32).slice(2, 12)
                      , r = !0 === e.hasAttribute(a) ? e.getAttribute(a) + "-" : ""
                      , E = !0 === e.hasAttribute(l) ? e.getAttribute(l) : ""
                      , S = !0 === e.hasAttribute(c) ? e.getAttribute(c) : "invisible"
                      , P = !0 === e.hasAttribute(d) ? e.getAttribute(d) : ""
                      , O = [].slice.call(e.querySelectorAll(".js-tablist"))
                      , N = [].slice.call(e.querySelectorAll("." + i))
                      , D = [].slice.call(e.querySelectorAll("." + s))
                      , j = [].slice.call(e.querySelectorAll("." + o))
                      , M = !0;
                    if (k(e, r + h),
                    e.setAttribute("id", h + t),
                    O.forEach((function(e) {
                        var i;
                        k(e, r + p),
                        x(e, (n(i = {}, m, "tablist"),
                        n(i, "id", p + t),
                        i))
                    }
                    )),
                    N.forEach((function(e, i) {
                        var s;
                        k(e, r + f),
                        x(e, (n(s = {}, m, "presentation"),
                        n(s, "id", f + t + "-" + (i + 1)),
                        s))
                    }
                    )),
                    D.forEach((function(e) {
                        var t, i, s = e.getAttribute("href").replace("#", ""), o = T(s), a = e.innerText, l = !0 === e.hasAttribute("data-selected");
                        if (k(e, r + "tabs__link"),
                        x(e, (n(t = {
                            id: u + s
                        }, m, "tab"),
                        n(t, v, s),
                        n(t, "tabindex", "-1"),
                        n(t, b, "false"),
                        t)),
                        x(o, (n(i = {}, y, "true"),
                        n(i, m, "tabpanel"),
                        n(i, g, u + s),
                        i)),
                        k(o, r + "tabs__content"),
                        l && M && (M = !1,
                        x(e, n({
                            tabindex: "0"
                        }, b, "true")),
                        x(o, n({}, y, "false"))),
                        "" !== E) {
                            var c = document.createElement(E);
                            c.setAttribute("class", S),
                            c.setAttribute("tabindex", "0"),
                            c.innerHTML = a,
                            o.insertBefore(c, o.firstChild)
                        }
                        "" !== P && [].slice.call(o.querySelectorAll(P + ":first-child")).forEach((function(e) {
                            e.setAttribute("tabindex", "0")
                        }
                        ));
                        e.removeAttribute("href")
                    }
                    )),
                    "" !== w) {
                        var I = T(w);
                        if (null !== I && null !== e.querySelector("#" + w))
                            if (!0 === C(I, o)) {
                                _(D),
                                A(j),
                                I.removeAttribute(y);
                                var $ = T(u + w);
                                x($, n({
                                    tabindex: "0"
                                }, b, "true")),
                                M = !1
                            } else {
                                var R = L(I, o);
                                if ("" !== R) {
                                    _(D),
                                    A(j),
                                    T(R).removeAttribute(y);
                                    var H = T(u + R);
                                    x(H, n({
                                        tabindex: "0"
                                    }, b, "true")),
                                    M = !1
                                }
                            }
                    }
                    !0 === M && (x(D[0], n({
                        tabindex: "0"
                    }, b, "true")),
                    T(D[0].getAttribute(v)).removeAttribute(y))
                }
                ))
            };
            ["click", "keydown"].forEach((function(n) {
                e.body.addEventListener(n, (function(e) {
                    var a = L(e.target, s);
                    if ((!0 === C(e.target, s) || "" !== a) && "click" === n) {
                        var l = !0 === C(e.target, s) ? e.target : T(a)
                          , c = L(e.target, t)
                          , d = T(c)
                          , u = [].slice.call(d.querySelectorAll("." + s))
                          , h = [].slice.call(d.querySelectorAll("." + o));
                        _(u),
                        A(h),
                        E(l),
                        e.preventDefault()
                    }
                    if ((!0 === C(e.target, s) || "" !== a) && "keydown" === n) {
                        c = L(e.target, t),
                        d = T(c);
                        var p = [].slice.call(d.querySelectorAll("." + i))
                          , f = (u = [].slice.call(d.querySelectorAll("." + s)),
                        h = [].slice.call(d.querySelectorAll("." + o)),
                        p[0].querySelector("." + s))
                          , m = p[p.length - 1].querySelector("." + s);
                        36 === e.keyCode ? (_(u),
                        A(h),
                        E(f),
                        e.preventDefault()) : 35 === e.keyCode ? (_(u),
                        A(h),
                        E(m),
                        e.preventDefault()) : 37 !== e.keyCode && 38 !== e.keyCode || e.ctrlKey ? 40 !== e.keyCode && 39 !== e.keyCode || e.ctrlKey || ("true" === m.getAttribute(b) ? (_(u),
                        A(h),
                        E(f),
                        e.preventDefault()) : (S(p, u, h, "next"),
                        e.preventDefault())) : "true" === f.getAttribute(b) ? (_(u),
                        A(h),
                        E(m),
                        e.preventDefault()) : (S(p, u, h, "prev"),
                        e.preventDefault())
                    }
                    var y = L(e.target, o);
                    "" !== y && "keydown" === n && function() {
                        var n = T(T(y).getAttribute(g))
                          , r = L(e.target, t)
                          , a = T(r)
                          , l = [].slice.call(a.querySelectorAll("." + i))
                          , c = [].slice.call(a.querySelectorAll("." + s))
                          , d = [].slice.call(a.querySelectorAll("." + o))
                          , u = l[0].querySelector("." + s)
                          , h = l[l.length - 1].querySelector("." + s);
                        38 === e.keyCode && e.ctrlKey && (setTimeout((function() {
                            n.focus()
                        }
                        ), 0),
                        e.preventDefault()),
                        33 === e.keyCode && e.ctrlKey && (n.focus(),
                        e.preventDefault(),
                        "true" === u.getAttribute(b) ? (_(c),
                        A(d),
                        E(h)) : S(l, c, d, "prev")),
                        34 === e.keyCode && e.ctrlKey && (n.focus(),
                        e.preventDefault(),
                        "true" === h.getAttribute(b) ? (_(c),
                        A(d),
                        E(u)) : S(l, c, d, "next"))
                    }();
                    var v = L(e.target, r);
                    if ((!0 === C(e.target, r) || "" !== v) && "click" === n) {
                        var w = !0 === C(e.target, r) ? e.target.getAttribute("href").replace("#", "") : T(v).replace("#", "")
                          , k = T(w)
                          , x = T(k.getAttribute(g));
                        c = L(e.target, t),
                        d = T(c),
                        u = [].slice.call(d.querySelectorAll("." + s)),
                        h = [].slice.call(d.querySelectorAll("." + o));
                        _(u),
                        A(h),
                        E(x),
                        e.preventDefault()
                    }
                }
                ), !0)
            }
            ));
            document.addEventListener("DOMContentLoaded", (function e() {
                O(),
                document.removeEventListener("DOMContentLoaded", e)
            }
            )),
            window.van11yAccessibleTabPanelAria = O
        }(document)
    },
    "2Hg+": function(e, t, i) {
        (function(e, t) {
            e.$ = e.jQuery = i("EVdn"),
            t((function() {
                t(".accountTabs nav a").on("click", (function() {
                    t(".accountTabs article").hide(),
                    t(".accountTabs nav a").attr("aria-selected", !1),
                    t(this).attr("aria-selected", !0);
                    var e = "#" + t(this).attr("aria-controls");
                    t(e).show()
                }
                )),
                t(".accountTabs #tab1").trigger("click")
            }
            ))
        }
        ).call(this, i("yLpj"), i("EVdn"))
    },
    "363H": function(e, t, i) {
        "use strict";
        i.d(t, "a", (function() {
            return h
        }
        ));
        const n = e => "[object Object]" === Object.prototype.toString.call(e)
          , s = (e, t) => {
            const i = document.createElement(e);
            if (t && "object" == typeof t)
                for (const e in t)
                    "html" === e ? i.innerHTML = t[e] : i.setAttribute(e, t[e]);
            return i
        }
          , o = e => {
            e instanceof NodeList ? e.forEach(e => o(e)) : e.innerHTML = ""
        }
          , r = (e, t, i) => s("li", {
            class: e,
            html: `<a href="#" data-page="${t}">${i}</a>`
        })
          , a = (e, t) => {
            let i, n;
            1 === t ? (i = 0,
            n = e.length) : -1 === t && (i = e.length - 1,
            n = -1);
            for (let s = !0; s; ) {
                s = !1;
                for (let o = i; o != n; o += t)
                    if (e[o + t] && e[o].value > e[o + t].value) {
                        const i = e[o]
                          , n = e[o + t]
                          , r = i;
                        e[o] = n,
                        e[o + t] = r,
                        s = !0
                    }
            }
            return e
        }
        ;
        class l {
            constructor(e, t) {
                return this.dt = e,
                this.rows = t,
                this
            }
            build(e) {
                const t = s("tr");
                let i = this.dt.headings;
                return i.length || (i = e.map( () => "")),
                i.forEach( (i, n) => {
                    const o = s("td");
                    e[n] && e[n].length || (e[n] = ""),
                    o.innerHTML = e[n],
                    o.data = e[n],
                    t.appendChild(o)
                }
                ),
                t
            }
            render(e) {
                return e
            }
            add(e) {
                if (Array.isArray(e)) {
                    const t = this.dt;
                    Array.isArray(e[0]) ? e.forEach(e => {
                        t.data.push(this.build(e))
                    }
                    ) : t.data.push(this.build(e)),
                    t.data.length && (t.hasRows = !0),
                    this.update(),
                    t.columns().rebuild()
                }
            }
            remove(e) {
                const t = this.dt;
                Array.isArray(e) ? (e.sort( (e, t) => t - e),
                e.forEach(e => {
                    t.data.splice(e, 1)
                }
                )) : "all" == e ? t.data = [] : t.data.splice(e, 1),
                t.data.length || (t.hasRows = !1),
                this.update(),
                t.columns().rebuild()
            }
            update() {
                this.dt.data.forEach( (e, t) => {
                    e.dataIndex = t
                }
                )
            }
        }
        class c {
            constructor(e) {
                return this.dt = e,
                this
            }
            swap(e) {
                if (e.length && 2 === e.length) {
                    const t = [];
                    this.dt.headings.forEach( (e, i) => {
                        t.push(i)
                    }
                    );
                    const i = e[0]
                      , n = e[1]
                      , s = t[n];
                    t[n] = t[i],
                    t[i] = s,
                    this.order(t)
                }
            }
            order(e) {
                let t, i, n, s, o, r, a;
                const l = [[], [], [], []]
                  , c = this.dt;
                e.forEach( (e, n) => {
                    o = c.headings[e],
                    r = "false" !== o.getAttribute("data-sortable"),
                    t = o.cloneNode(!0),
                    t.originalCellIndex = n,
                    t.sortable = r,
                    l[0].push(t),
                    c.hiddenColumns.includes(e) || (i = o.cloneNode(!0),
                    i.originalCellIndex = n,
                    i.sortable = r,
                    l[1].push(i))
                }
                ),
                c.data.forEach( (t, i) => {
                    n = t.cloneNode(!1),
                    s = t.cloneNode(!1),
                    n.dataIndex = s.dataIndex = i,
                    null !== t.searchIndex && void 0 !== t.searchIndex && (n.searchIndex = s.searchIndex = t.searchIndex),
                    e.forEach(e => {
                        a = t.cells[e].cloneNode(!0),
                        a.data = t.cells[e].data,
                        n.appendChild(a),
                        c.hiddenColumns.includes(e) || (a = t.cells[e].cloneNode(!0),
                        a.data = t.cells[e].data,
                        s.appendChild(a))
                    }
                    ),
                    l[2].push(n),
                    l[3].push(s)
                }
                ),
                c.headings = l[0],
                c.activeHeadings = l[1],
                c.data = l[2],
                c.activeRows = l[3],
                c.update()
            }
            hide(e) {
                if (e.length) {
                    const t = this.dt;
                    e.forEach(e => {
                        t.hiddenColumns.includes(e) || t.hiddenColumns.push(e)
                    }
                    ),
                    this.rebuild()
                }
            }
            show(e) {
                if (e.length) {
                    let t;
                    const i = this.dt;
                    e.forEach(e => {
                        t = i.hiddenColumns.indexOf(e),
                        t > -1 && i.hiddenColumns.splice(t, 1)
                    }
                    ),
                    this.rebuild()
                }
            }
            visible(e) {
                let t;
                const i = this.dt;
                return e = e || i.headings.map(e => e.originalCellIndex),
                isNaN(e) ? Array.isArray(e) && (t = [],
                e.forEach(e => {
                    t.push(!i.hiddenColumns.includes(e))
                }
                )) : t = !i.hiddenColumns.includes(e),
                t
            }
            add(e) {
                let t;
                const i = document.createElement("th");
                if (!this.dt.headings.length)
                    return this.dt.insert({
                        headings: [e.heading],
                        data: e.data.map(e => [e])
                    }),
                    void this.rebuild();
                this.dt.hiddenHeader ? i.innerHTML = "" : e.heading.nodeName ? i.appendChild(e.heading) : i.innerHTML = e.heading,
                this.dt.headings.push(i),
                this.dt.data.forEach( (i, n) => {
                    e.data[n] && (t = document.createElement("td"),
                    e.data[n].nodeName ? t.appendChild(e.data[n]) : t.innerHTML = e.data[n],
                    t.data = t.innerHTML,
                    e.render && (t.innerHTML = e.render.call(this, t.data, t, i)),
                    i.appendChild(t))
                }
                ),
                e.type && i.setAttribute("data-type", e.type),
                e.format && i.setAttribute("data-format", e.format),
                e.hasOwnProperty("sortable") && (i.sortable = e.sortable,
                i.setAttribute("data-sortable", !0 === e.sortable ? "true" : "false")),
                this.rebuild(),
                this.dt.renderHeader()
            }
            remove(e) {
                Array.isArray(e) ? (e.sort( (e, t) => t - e),
                e.forEach(e => this.remove(e))) : (this.dt.headings.splice(e, 1),
                this.dt.data.forEach(t => {
                    t.removeChild(t.cells[e])
                }
                )),
                this.rebuild()
            }
            filter(e, t, i, n) {
                const s = this.dt;
                if (s.filterState || (s.filterState = {
                    originalData: s.data
                }),
                !s.filterState[e]) {
                    const t = [...n, () => !0];
                    s.filterState[e] = function() {
                        let e = 0;
                        return () => t[e++ % t.length]
                    }()
                }
                const o = s.filterState[e]()
                  , r = Array.from(s.filterState.originalData).filter(t => {
                    const i = t.cells[e]
                      , n = i.hasAttribute("data-content") ? i.getAttribute("data-content") : i.innerText;
                    return "function" == typeof o ? o(n) : n === o
                }
                );
                s.data = r,
                this.rebuild(),
                s.update(),
                i || s.emit("datatable.sort", e, t)
            }
            sort(e, t, n) {
                const s = this.dt;
                if (s.hasHeadings && (e < 0 || e > s.headings.length))
                    return !1;
                const o = s.options.filters && s.options.filters[s.headings[e].textContent];
                if (o && 0 !== o.length)
                    return void this.filter(e, t, n, o);
                s.sorting = !0,
                n || s.emit("datatable.sorting", e, t);
                let r = s.data;
                const l = []
                  , c = [];
                let d = 0
                  , u = 0;
                const h = s.headings[e]
                  , p = [];
                if ("date" === h.getAttribute("data-type")) {
                    let e = !1;
                    h.hasAttribute("data-format") && (e = h.getAttribute("data-format")),
                    p.push(i.e(1).then(i.bind(null, "phj3")).then( ({parseDate: t}) => i => t(i, e)))
                }
                Promise.all(p).then(i => {
                    const o = i[0];
                    let p, f;
                    Array.from(r).forEach(t => {
                        const i = t.cells[e]
                          , n = i.hasAttribute("data-content") ? i.getAttribute("data-content") : i.innerText;
                        let s;
                        s = o ? o(n) : "string" == typeof n ? n.replace(/(\$|,|\s|%)/g, "") : n,
                        parseFloat(s) == s ? c[u++] = {
                            value: Number(s),
                            row: t
                        } : l[d++] = {
                            value: "string" == typeof n ? n.toLowerCase() : n,
                            row: t
                        }
                    }
                    ),
                    t || (t = h.classList.contains("asc") ? "desc" : "asc"),
                    "desc" == t ? (p = a(l, -1),
                    f = a(c, -1),
                    h.classList.remove("asc"),
                    h.classList.add("desc")) : (p = a(c, 1),
                    f = a(l, 1),
                    h.classList.remove("desc"),
                    h.classList.add("asc")),
                    s.lastTh && h != s.lastTh && (s.lastTh.classList.remove("desc"),
                    s.lastTh.classList.remove("asc")),
                    s.lastTh = h,
                    r = p.concat(f),
                    s.data = [];
                    const m = [];
                    r.forEach( (e, t) => {
                        s.data.push(e.row),
                        null !== e.row.searchIndex && void 0 !== e.row.searchIndex && m.push(t)
                    }
                    ),
                    s.searchData = m,
                    this.rebuild(),
                    s.update(),
                    n || s.emit("datatable.sort", e, t)
                }
                )
            }
            rebuild() {
                let e, t, i, n;
                const s = this.dt
                  , o = [];
                s.activeRows = [],
                s.activeHeadings = [],
                s.headings.forEach( (e, t) => {
                    e.originalCellIndex = t,
                    e.sortable = "false" !== e.getAttribute("data-sortable"),
                    s.hiddenColumns.includes(t) || s.activeHeadings.push(e)
                }
                ),
                s.data.forEach( (r, a) => {
                    e = r.cloneNode(!1),
                    t = r.cloneNode(!1),
                    e.dataIndex = t.dataIndex = a,
                    null !== r.searchIndex && void 0 !== r.searchIndex && (e.searchIndex = t.searchIndex = r.searchIndex),
                    Array.from(r.cells).forEach(o => {
                        i = o.cloneNode(!0),
                        i.data = o.data,
                        e.appendChild(i),
                        s.hiddenColumns.includes(i.cellIndex) || (n = i.cloneNode(!0),
                        n.data = i.data,
                        t.appendChild(n))
                    }
                    ),
                    o.push(e),
                    s.activeRows.push(t)
                }
                ),
                s.data = o,
                s.update()
            }
        }
        const d = function(e) {
            let t = !1
              , i = !1;
            if ((e = e || this.options.data).headings) {
                t = s("thead");
                const i = s("tr");
                e.headings.forEach(e => {
                    const t = s("th", {
                        html: e
                    });
                    i.appendChild(t)
                }
                ),
                t.appendChild(i)
            }
            e.data && e.data.length && (i = s("tbody"),
            e.data.forEach(t => {
                if (e.headings && e.headings.length !== t.length)
                    throw new Error("The number of rows do not match the number of headings.");
                const n = s("tr");
                t.forEach(e => {
                    const t = s("td", {
                        html: e
                    });
                    n.appendChild(t)
                }
                ),
                i.appendChild(n)
            }
            )),
            t && (null !== this.table.tHead && this.table.removeChild(this.table.tHead),
            this.table.appendChild(t)),
            i && (this.table.tBodies.length && this.table.removeChild(this.table.tBodies[0]),
            this.table.appendChild(i))
        }
          , u = {
            sortable: !0,
            searchable: !0,
            paging: !0,
            perPage: 10,
            perPageSelect: [5, 10, 15, 20, 25],
            nextPrev: !0,
            firstLast: !1,
            prevText: "&lsaquo;",
            nextText: "&rsaquo;",
            firstText: "&laquo;",
            lastText: "&raquo;",
            ellipsisText: "&hellip;",
            ascText: "▴",
            descText: "▾",
            truncatePager: !0,
            pagerDelta: 2,
            scrollY: "",
            fixedColumns: !0,
            fixedHeight: !1,
            header: !0,
            footer: !1,
            labels: {
                placeholder: "Search...",
                perPage: "{select} entries per page",
                noRows: "No entries found",
                info: "Showing {start} to {end} of {rows} entries"
            },
            layout: {
                top: "{select}{search}",
                bottom: "{info}{pager}"
            }
        };
        class h {
            constructor(e, t={}) {
                if (this.initialized = !1,
                this.options = {
                    ...u,
                    ...t,
                    layout: {
                        ...u.layout,
                        ...t.layout
                    },
                    labels: {
                        ...u.labels,
                        ...t.labels
                    }
                },
                "string" == typeof e && (e = document.querySelector(e)),
                this.initialLayout = e.innerHTML,
                this.initialSortable = this.options.sortable,
                this.options.header || (this.options.sortable = !1),
                null === e.tHead && (!this.options.data || this.options.data && !this.options.data.headings) && (this.options.sortable = !1),
                e.tBodies.length && !e.tBodies[0].rows.length && this.options.data && !this.options.data.data)
                    throw new Error("You seem to be using the data option, but you've not defined any rows.");
                this.table = e,
                this.init()
            }
            static extend(e, t) {
                "function" == typeof t ? h.prototype[e] = t : h[e] = t
            }
            init(e) {
                if (this.initialized || this.table.classList.contains("dataTable-table"))
                    return !1;
                Object.assign(this.options, e || {}),
                this.currentPage = 1,
                this.onFirstPage = !0,
                this.hiddenColumns = [],
                this.columnRenderers = [],
                this.selectedColumns = [],
                this.render(),
                setTimeout( () => {
                    this.emit("datatable.init"),
                    this.initialized = !0,
                    this.options.plugins && Object.entries(this.options.plugins).forEach( ([e,t]) => {
                        this[e] && "function" == typeof this[e] && (this[e] = this[e](t, {
                            createElement: s
                        }),
                        t.enabled && this[e].init && "function" == typeof this[e].init && this[e].init())
                    }
                    )
                }
                , 10)
            }
            render(e) {
                if (e) {
                    switch (e) {
                    case "page":
                        this.renderPage();
                        break;
                    case "pager":
                        this.renderPager();
                        break;
                    case "header":
                        this.renderHeader()
                    }
                    return !1
                }
                const t = this.options;
                let i = "";
                if (t.data && d.call(this),
                t.ajax) {
                    const e = t.ajax
                      , i = new XMLHttpRequest
                      , n = e => {
                        this.emit("datatable.ajax.progress", e, i)
                    }
                      , s = t => {
                        if (4 === i.readyState)
                            if (this.emit("datatable.ajax.loaded", t, i),
                            200 === i.status) {
                                const n = {};
                                n.data = e.load ? e.load.call(this, i) : i.responseText,
                                n.type = "json",
                                e.content && e.content.type && (n.type = e.content.type,
                                Object.assign(n, e.content)),
                                this.import(n),
                                this.setColumns(!0),
                                this.emit("datatable.ajax.success", t, i)
                            } else
                                this.emit("datatable.ajax.error", t, i)
                    }
                      , o = e => {
                        this.emit("datatable.ajax.error", e, i)
                    }
                      , r = e => {
                        this.emit("datatable.ajax.abort", e, i)
                    }
                    ;
                    i.addEventListener("progress", n, !1),
                    i.addEventListener("load", s, !1),
                    i.addEventListener("error", o, !1),
                    i.addEventListener("abort", r, !1),
                    this.emit("datatable.ajax.loading", i),
                    i.open("GET", "string" == typeof e ? t.ajax : t.ajax.url),
                    i.send()
                }
                if (this.body = this.table.tBodies[0],
                this.head = this.table.tHead,
                this.foot = this.table.tFoot,
                this.body || (this.body = s("tbody"),
                this.table.appendChild(this.body)),
                this.hasRows = this.body.rows.length > 0,
                !this.head) {
                    const e = s("thead")
                      , i = s("tr");
                    this.hasRows && (Array.from(this.body.rows[0].cells).forEach( () => {
                        i.appendChild(s("th"))
                    }
                    ),
                    e.appendChild(i)),
                    this.head = e,
                    this.table.insertBefore(this.head, this.body),
                    this.hiddenHeader = !t.ajax
                }
                if (this.headings = [],
                this.hasHeadings = this.head.rows.length > 0,
                this.hasHeadings && (this.header = this.head.rows[0],
                this.headings = [].slice.call(this.header.cells)),
                t.header || this.head && this.table.removeChild(this.table.tHead),
                t.footer ? this.head && !this.foot && (this.foot = s("tfoot", {
                    html: this.head.innerHTML
                }),
                this.table.appendChild(this.foot)) : this.foot && this.table.removeChild(this.table.tFoot),
                this.wrapper = s("div", {
                    class: "dataTable-wrapper dataTable-loading"
                }),
                i += "<div class='dataTable-top'>",
                i += t.layout.top,
                i += "</div>",
                t.scrollY.length ? i += `<div class='dataTable-container' style='height: ${t.scrollY}; overflow-Y: auto;'></div>` : i += "<div class='dataTable-container'></div>",
                i += "<div class='dataTable-bottom'>",
                i += t.layout.bottom,
                i += "</div>",
                i = i.replace("{info}", t.paging ? "<div class='dataTable-info'></div>" : ""),
                t.paging && t.perPageSelect) {
                    let e = "<div class='dataTable-dropdown'><label>";
                    e += t.labels.perPage,
                    e += "</label></div>";
                    const n = s("select", {
                        class: "dataTable-selector"
                    });
                    t.perPageSelect.forEach(e => {
                        const i = e === t.perPage
                          , s = new Option(e,e,i,i);
                        n.add(s)
                    }
                    ),
                    e = e.replace("{select}", n.outerHTML),
                    i = i.replace("{select}", e)
                } else
                    i = i.replace("{select}", "");
                if (t.searchable) {
                    const e = `<div class='dataTable-search'><input class='dataTable-input' placeholder='${t.labels.placeholder}' type='text'></div>`;
                    i = i.replace("{search}", e)
                } else
                    i = i.replace("{search}", "");
                this.hasHeadings && this.render("header"),
                this.table.classList.add("dataTable-table");
                const n = s("div", {
                    class: "dataTable-pagination"
                })
                  , o = s("ul");
                n.appendChild(o),
                i = i.replace(/\{pager\}/g, n.outerHTML),
                this.wrapper.innerHTML = i,
                this.container = this.wrapper.querySelector(".dataTable-container"),
                this.pagers = this.wrapper.querySelectorAll(".dataTable-pagination"),
                this.label = this.wrapper.querySelector(".dataTable-info"),
                this.table.parentNode.replaceChild(this.wrapper, this.table),
                this.container.appendChild(this.table),
                this.rect = this.table.getBoundingClientRect(),
                this.data = Array.from(this.body.rows),
                this.activeRows = this.data.slice(),
                this.activeHeadings = this.headings.slice(),
                this.update(),
                t.ajax || this.setColumns(),
                this.fixHeight(),
                this.fixColumns(),
                t.header || this.wrapper.classList.add("no-header"),
                t.footer || this.wrapper.classList.add("no-footer"),
                t.sortable && this.wrapper.classList.add("sortable"),
                t.searchable && this.wrapper.classList.add("searchable"),
                t.fixedHeight && this.wrapper.classList.add("fixed-height"),
                t.fixedColumns && this.wrapper.classList.add("fixed-columns"),
                this.bindEvents()
            }
            renderPage() {
                if (this.hasHeadings && (o(this.header),
                this.activeHeadings.forEach(e => this.header.appendChild(e))),
                this.hasRows && this.totalPages) {
                    this.currentPage > this.totalPages && (this.currentPage = 1);
                    const e = this.currentPage - 1
                      , t = document.createDocumentFragment();
                    this.pages[e].forEach(e => t.appendChild(this.rows().render(e))),
                    this.clear(t),
                    this.onFirstPage = 1 === this.currentPage,
                    this.onLastPage = this.currentPage === this.lastPage
                } else
                    this.setMessage(this.options.labels.noRows);
                let e, t = 0, i = 0, n = 0;
                if (this.totalPages && (t = this.currentPage - 1,
                i = t * this.options.perPage,
                n = i + this.pages[t].length,
                i += 1,
                e = this.searching ? this.searchData.length : this.data.length),
                this.label && this.options.labels.info.length) {
                    const t = this.options.labels.info.replace("{start}", i).replace("{end}", n).replace("{page}", this.currentPage).replace("{pages}", this.totalPages).replace("{rows}", e);
                    this.label.innerHTML = e ? t : ""
                }
                1 == this.currentPage && this.fixHeight()
            }
            renderPager() {
                if (o(this.pagers),
                this.totalPages > 1) {
                    const e = "pager"
                      , t = document.createDocumentFragment()
                      , i = this.onFirstPage ? 1 : this.currentPage - 1
                      , n = this.onLastPage ? this.totalPages : this.currentPage + 1;
                    this.options.firstLast && t.appendChild(r(e, 1, this.options.firstText)),
                    this.options.nextPrev && t.appendChild(r(e, i, this.options.prevText));
                    let o = this.links;
                    this.options.truncatePager && (o = ( (e, t, i, n, o) => {
                        let r;
                        const a = 2 * (n = n || 2);
                        let l = t - n
                          , c = t + n;
                        const d = []
                          , u = [];
                        t < 4 - n + a ? c = 3 + a : t > i - (3 - n + a) && (l = i - (2 + a));
                        for (let t = 1; t <= i; t++)
                            if (1 == t || t == i || t >= l && t <= c) {
                                const i = e[t - 1];
                                i.classList.remove("active"),
                                d.push(i)
                            }
                        return d.forEach(t => {
                            const i = t.children[0].getAttribute("data-page");
                            if (r) {
                                const t = r.children[0].getAttribute("data-page");
                                if (i - t == 2)
                                    u.push(e[t]);
                                else if (i - t != 1) {
                                    const e = s("li", {
                                        class: "ellipsis",
                                        html: `<a href="#">${o}</a>`
                                    });
                                    u.push(e)
                                }
                            }
                            u.push(t),
                            r = t
                        }
                        ),
                        u
                    }
                    )(this.links, this.currentPage, this.pages.length, this.options.pagerDelta, this.options.ellipsisText)),
                    this.links[this.currentPage - 1].classList.add("active"),
                    o.forEach(e => {
                        e.classList.remove("active"),
                        t.appendChild(e)
                    }
                    ),
                    this.links[this.currentPage - 1].classList.add("active"),
                    this.options.nextPrev && t.appendChild(r(e, n, this.options.nextText)),
                    this.options.firstLast && t.appendChild(r(e, this.totalPages, this.options.lastText)),
                    this.pagers.forEach(e => {
                        e.appendChild(t.cloneNode(!0))
                    }
                    )
                }
            }
            renderHeader() {
                this.labels = [],
                this.headings && this.headings.length && this.headings.forEach( (e, t) => {
                    if (this.labels[t] = e.textContent,
                    e.firstElementChild && e.firstElementChild.classList.contains("dataTable-sorter") && (e.innerHTML = e.firstElementChild.innerHTML),
                    e.sortable = "false" !== e.getAttribute("data-sortable"),
                    e.originalCellIndex = t,
                    this.options.sortable && e.sortable) {
                        const t = s("a", {
                            href: "#",
                            class: "dataTable-sorter",
                            html: e.innerHTML
                        });
                        e.innerHTML = "",
                        e.setAttribute("data-sortable", ""),
                        e.appendChild(t)
                    }
                }
                ),
                this.fixColumns()
            }
            bindEvents() {
                const e = this.options;
                if (e.perPageSelect) {
                    const t = this.wrapper.querySelector(".dataTable-selector");
                    t && t.addEventListener("change", () => {
                        e.perPage = parseInt(t.value, 10),
                        this.update(),
                        this.fixHeight(),
                        this.emit("datatable.perpage", e.perPage)
                    }
                    , !1)
                }
                e.searchable && (this.input = this.wrapper.querySelector(".dataTable-input"),
                this.input && this.input.addEventListener("keyup", () => this.search(this.input.value), !1)),
                this.wrapper.addEventListener("click", t => {
                    const i = t.target;
                    "a" === i.nodeName.toLowerCase() && (i.hasAttribute("data-page") ? (this.page(i.getAttribute("data-page")),
                    t.preventDefault()) : e.sortable && i.classList.contains("dataTable-sorter") && "false" != i.parentNode.getAttribute("data-sortable") && (this.columns().sort(this.headings.indexOf(i.parentNode)),
                    t.preventDefault()))
                }
                , !1),
                window.addEventListener("resize", () => {
                    this.rect = this.container.getBoundingClientRect(),
                    this.fixColumns()
                }
                )
            }
            setColumns(e) {
                e || this.data.forEach(e => {
                    Array.from(e.cells).forEach(e => {
                        e.data = e.innerHTML
                    }
                    )
                }
                ),
                this.options.columns && this.headings.length && this.options.columns.forEach(e => {
                    Array.isArray(e.select) || (e.select = [e.select]),
                    e.hasOwnProperty("render") && "function" == typeof e.render && (this.selectedColumns = this.selectedColumns.concat(e.select),
                    this.columnRenderers.push({
                        columns: e.select,
                        renderer: e.render
                    })),
                    e.select.forEach(t => {
                        const i = this.headings[t];
                        e.type && i.setAttribute("data-type", e.type),
                        e.format && i.setAttribute("data-format", e.format),
                        e.hasOwnProperty("sortable") && i.setAttribute("data-sortable", e.sortable),
                        e.hasOwnProperty("hidden") && !1 !== e.hidden && this.columns().hide([t]),
                        e.hasOwnProperty("sort") && 1 === e.select.length && this.columns().sort(e.select[0], e.sort, !0)
                    }
                    )
                }
                ),
                this.hasRows && (this.data.forEach( (e, t) => {
                    e.dataIndex = t,
                    Array.from(e.cells).forEach(e => {
                        e.data = e.innerHTML
                    }
                    )
                }
                ),
                this.selectedColumns.length && this.data.forEach(e => {
                    Array.from(e.cells).forEach( (t, i) => {
                        this.selectedColumns.includes(i) && this.columnRenderers.forEach(n => {
                            n.columns.includes(i) && (t.innerHTML = n.renderer.call(this, t.data, t, e))
                        }
                        )
                    }
                    )
                }
                ),
                this.columns().rebuild()),
                this.render("header")
            }
            destroy() {
                this.table.innerHTML = this.initialLayout,
                this.table.classList.remove("dataTable-table"),
                this.wrapper.parentNode.replaceChild(this.table, this.wrapper),
                this.initialized = !1
            }
            update() {
                this.wrapper.classList.remove("dataTable-empty"),
                this.paginate(this),
                this.render("page"),
                this.links = [];
                let e = this.pages.length;
                for (; e--; ) {
                    const t = e + 1;
                    this.links[e] = r(0 === e ? "active" : "", t, t)
                }
                this.sorting = !1,
                this.render("pager"),
                this.rows().update(),
                this.emit("datatable.update")
            }
            paginate() {
                const e = this.options.perPage;
                let t = this.activeRows;
                return this.searching && (t = [],
                this.searchData.forEach(e => t.push(this.activeRows[e]))),
                this.options.paging ? this.pages = t.map( (i, n) => n % e == 0 ? t.slice(n, n + e) : null).filter(e => e) : this.pages = [t],
                this.totalPages = this.lastPage = this.pages.length,
                this.totalPages
            }
            fixColumns() {
                if ((this.options.scrollY.length || this.options.fixedColumns) && this.activeHeadings && this.activeHeadings.length) {
                    let e, t = !1;
                    if (this.columnWidths = [],
                    this.table.tHead) {
                        if (this.options.scrollY.length && (t = s("thead"),
                        t.appendChild(s("tr")),
                        t.style.height = "0px",
                        this.headerTable && (this.table.tHead = this.headerTable.tHead)),
                        this.activeHeadings.forEach(e => {
                            e.style.width = ""
                        }
                        ),
                        this.activeHeadings.forEach( (e, i) => {
                            const n = e.offsetWidth
                              , o = n / this.rect.width * 100;
                            if (e.style.width = o + "%",
                            this.columnWidths[i] = n,
                            this.options.scrollY.length) {
                                const e = s("th");
                                t.firstElementChild.appendChild(e),
                                e.style.width = o + "%",
                                e.style.paddingTop = "0",
                                e.style.paddingBottom = "0",
                                e.style.border = "0"
                            }
                        }
                        ),
                        this.options.scrollY.length) {
                            const e = this.table.parentElement;
                            if (!this.headerTable) {
                                this.headerTable = s("table", {
                                    class: "dataTable-table"
                                });
                                const t = s("div", {
                                    class: "dataTable-headercontainer"
                                });
                                t.appendChild(this.headerTable),
                                e.parentElement.insertBefore(t, e)
                            }
                            const i = this.table.tHead;
                            this.table.replaceChild(t, i),
                            this.headerTable.tHead = i,
                            this.headerTable.parentElement.style.paddingRight = this.headerTable.clientWidth - this.table.clientWidth + parseInt(this.headerTable.parentElement.style.paddingRight || "0", 10) + "px",
                            e.scrollHeight > e.clientHeight && (e.style.overflowY = "scroll")
                        }
                    } else {
                        e = [],
                        t = s("thead");
                        const i = s("tr");
                        Array.from(this.table.tBodies[0].rows[0].cells).forEach( () => {
                            const t = s("th");
                            i.appendChild(t),
                            e.push(t)
                        }
                        ),
                        t.appendChild(i),
                        this.table.insertBefore(t, this.body);
                        const n = [];
                        e.forEach( (e, t) => {
                            const i = e.offsetWidth
                              , s = i / this.rect.width * 100;
                            n.push(s),
                            this.columnWidths[t] = i
                        }
                        ),
                        this.data.forEach(e => {
                            Array.from(e.cells).forEach( (e, t) => {
                                this.columns(e.cellIndex).visible() && (e.style.width = n[t] + "%")
                            }
                            )
                        }
                        ),
                        this.table.removeChild(t)
                    }
                }
            }
            fixHeight() {
                this.options.fixedHeight && (this.container.style.height = null,
                this.rect = this.container.getBoundingClientRect(),
                this.container.style.height = this.rect.height + "px")
            }
            search(e) {
                return !!this.hasRows && (e = e.toLowerCase(),
                this.currentPage = 1,
                this.searching = !0,
                this.searchData = [],
                e.length ? (this.clear(),
                this.data.forEach( (t, i) => {
                    const n = this.searchData.includes(t);
                    e.split(" ").reduce( (e, i) => {
                        let n = !1
                          , s = null
                          , o = null;
                        for (let e = 0; e < t.cells.length; e++)
                            if (s = t.cells[e],
                            o = s.hasAttribute("data-content") ? s.getAttribute("data-content") : s.textContent,
                            o.toLowerCase().includes(i) && this.columns(s.cellIndex).visible()) {
                                n = !0;
                                break
                            }
                        return e && n
                    }
                    , !0) && !n ? (t.searchIndex = i,
                    this.searchData.push(i)) : t.searchIndex = null
                }
                ),
                this.wrapper.classList.add("search-results"),
                this.searchData.length ? this.update() : (this.wrapper.classList.remove("search-results"),
                this.setMessage(this.options.labels.noRows)),
                void this.emit("datatable.search", e, this.searchData)) : (this.searching = !1,
                this.update(),
                this.emit("datatable.search", e, this.searchData),
                this.wrapper.classList.remove("search-results"),
                !1))
            }
            page(e) {
                return e != this.currentPage && (isNaN(e) || (this.currentPage = parseInt(e, 10)),
                !(e > this.pages.length || e < 0) && (this.render("page"),
                this.render("pager"),
                void this.emit("datatable.page", e)))
            }
            sortColumn(e, t) {
                this.columns().sort(e, t)
            }
            insert(e) {
                let t = [];
                if (n(e)) {
                    if (e.headings && !this.hasHeadings && !this.hasRows) {
                        const t = s("tr");
                        e.headings.forEach(e => {
                            const i = s("th", {
                                html: e
                            });
                            t.appendChild(i)
                        }
                        ),
                        this.head.appendChild(t),
                        this.header = t,
                        this.headings = [].slice.call(t.cells),
                        this.hasHeadings = !0,
                        this.options.sortable = this.initialSortable,
                        this.render("header"),
                        this.activeHeadings = this.headings.slice()
                    }
                    e.data && Array.isArray(e.data) && (t = e.data)
                } else
                    Array.isArray(e) && e.forEach(e => {
                        const i = [];
                        Object.entries(e).forEach( ([e,t]) => {
                            const n = this.labels.indexOf(e);
                            n > -1 && (i[n] = t)
                        }
                        ),
                        t.push(i)
                    }
                    );
                t.length && (this.rows().add(t),
                this.hasRows = !0),
                this.update(),
                this.setColumns(),
                this.fixColumns()
            }
            refresh() {
                this.options.searchable && (this.input.value = "",
                this.searching = !1),
                this.currentPage = 1,
                this.onFirstPage = !0,
                this.update(),
                this.emit("datatable.refresh")
            }
            clear(e) {
                this.body && o(this.body);
                let t = this.body;
                if (this.body || (t = this.table),
                e) {
                    if ("string" == typeof e) {
                        document.createDocumentFragment().innerHTML = e
                    }
                    t.appendChild(e)
                }
            }
            export(e) {
                if (!this.hasHeadings && !this.hasRows)
                    return !1;
                const t = this.activeHeadings;
                let i = [];
                const s = [];
                let o, r, a, l;
                if (!n(e))
                    return !1;
                const c = {
                    download: !0,
                    skipColumn: [],
                    lineDelimiter: "\n",
                    columnDelimiter: ",",
                    tableName: "myTable",
                    replacer: null,
                    space: 4,
                    ...e
                };
                if (c.type) {
                    if ("txt" !== c.type && "csv" !== c.type || (i[0] = this.header),
                    c.selection)
                        if (isNaN(c.selection)) {
                            if (Array.isArray(c.selection))
                                for (o = 0; o < c.selection.length; o++)
                                    i = i.concat(this.pages[c.selection[o] - 1])
                        } else
                            i = i.concat(this.pages[c.selection - 1]);
                    else
                        i = i.concat(this.activeRows);
                    if (i.length) {
                        if ("txt" === c.type || "csv" === c.type) {
                            for (a = "",
                            o = 0; o < i.length; o++) {
                                for (r = 0; r < i[o].cells.length; r++)
                                    if (!c.skipColumn.includes(t[r].originalCellIndex) && this.columns(t[r].originalCellIndex).visible()) {
                                        let e = i[o].cells[r].textContent;
                                        e = e.trim(),
                                        e = e.replace(/\s{2,}/g, " "),
                                        e = e.replace(/\n/g, "  "),
                                        e = e.replace(/"/g, '""'),
                                        e = e.replace(/#/g, "%23"),
                                        e.includes(",") && (e = `"${e}"`),
                                        a += e + c.columnDelimiter
                                    }
                                a = a.trim().substring(0, a.length - 1),
                                a += c.lineDelimiter
                            }
                            a = a.trim().substring(0, a.length - 1),
                            c.download && (a = "data:text/csv;charset=utf-8," + a)
                        } else if ("sql" === c.type) {
                            for (a = `INSERT INTO \`${c.tableName}\` (`,
                            o = 0; o < t.length; o++)
                                !c.skipColumn.includes(t[o].originalCellIndex) && this.columns(t[o].originalCellIndex).visible() && (a += `\`${t[o].textContent}\`,`);
                            for (a = a.trim().substring(0, a.length - 1),
                            a += ") VALUES ",
                            o = 0; o < i.length; o++) {
                                for (a += "(",
                                r = 0; r < i[o].cells.length; r++)
                                    !c.skipColumn.includes(t[r].originalCellIndex) && this.columns(t[r].originalCellIndex).visible() && (a += `"${i[o].cells[r].textContent}",`);
                                a = a.trim().substring(0, a.length - 1),
                                a += "),"
                            }
                            a = a.trim().substring(0, a.length - 1),
                            a += ";",
                            c.download && (a = "data:application/sql;charset=utf-8," + a)
                        } else if ("json" === c.type) {
                            for (r = 0; r < i.length; r++)
                                for (s[r] = s[r] || {},
                                o = 0; o < t.length; o++)
                                    !c.skipColumn.includes(t[o].originalCellIndex) && this.columns(t[o].originalCellIndex).visible() && (s[r][t[o].textContent] = i[r].cells[o].textContent);
                            a = JSON.stringify(s, c.replacer, c.space),
                            c.download && (a = "data:application/json;charset=utf-8," + a)
                        }
                        return c.download && (c.filename = c.filename || "datatable_export",
                        c.filename += "." + c.type,
                        a = encodeURI(a),
                        l = document.createElement("a"),
                        l.href = a,
                        l.download = c.filename,
                        document.body.appendChild(l),
                        l.click(),
                        document.body.removeChild(l)),
                        a
                    }
                }
                return !1
            }
            import(e) {
                let t = !1;
                if (!n(e))
                    return !1;
                const i = {
                    lineDelimiter: "\n",
                    columnDelimiter: ",",
                    ...e
                };
                if (i.data.length || n(i.data)) {
                    if ("csv" === i.type) {
                        t = {
                            data: []
                        };
                        const e = i.data.split(i.lineDelimiter);
                        e.length && (i.headings && (t.headings = e[0].split(i.columnDelimiter),
                        e.shift()),
                        e.forEach( (e, n) => {
                            t.data[n] = [];
                            const s = e.split(i.columnDelimiter);
                            s.length && s.forEach(e => {
                                t.data[n].push(e)
                            }
                            )
                        }
                        ))
                    } else if ("json" === i.type) {
                        const e = (e => {
                            let t = !1;
                            try {
                                t = JSON.parse(e)
                            } catch (e) {
                                return !1
                            }
                            return !(null === t || !Array.isArray(t) && !n(t)) && t
                        }
                        )(i.data);
                        e && (t = {
                            headings: [],
                            data: []
                        },
                        e.forEach( (e, i) => {
                            t.data[i] = [],
                            Object.entries(e).forEach( ([e,n]) => {
                                t.headings.includes(e) || t.headings.push(e),
                                t.data[i].push(n)
                            }
                            )
                        }
                        ))
                    }
                    n(i.data) && (t = i.data),
                    t && this.insert(t)
                }
                return !1
            }
            print() {
                const e = this.activeHeadings
                  , t = this.activeRows
                  , i = s("table")
                  , n = s("thead")
                  , o = s("tbody")
                  , r = s("tr");
                e.forEach(e => {
                    r.appendChild(s("th", {
                        html: e.textContent
                    }))
                }
                ),
                n.appendChild(r),
                t.forEach(e => {
                    const t = s("tr");
                    Array.from(e.cells).forEach(e => {
                        t.appendChild(s("td", {
                            html: e.textContent
                        }))
                    }
                    ),
                    o.appendChild(t)
                }
                ),
                i.appendChild(n),
                i.appendChild(o);
                const a = window.open();
                a.document.body.appendChild(i),
                a.print()
            }
            setMessage(e) {
                let t = 1;
                this.hasRows ? t = this.data[0].cells.length : this.activeHeadings.length && (t = this.activeHeadings.length),
                this.wrapper.classList.add("dataTable-empty"),
                this.label && (this.label.innerHTML = ""),
                this.totalPages = 0,
                this.render("pager"),
                this.clear(s("tr", {
                    html: `<td class="dataTables-empty" colspan="${t}">${e}</td>`
                }))
            }
            columns(e) {
                return new c(this,e)
            }
            rows(e) {
                return new l(this,e)
            }
            on(e, t) {
                this.events = this.events || {},
                this.events[e] = this.events[e] || [],
                this.events[e].push(t)
            }
            off(e, t) {
                this.events = this.events || {},
                e in this.events != !1 && this.events[e].splice(this.events[e].indexOf(t), 1)
            }
            emit(e) {
                if (this.events = this.events || {},
                e in this.events != !1)
                    for (let t = 0; t < this.events[e].length; t++)
                        this.events[e][t].apply(this, Array.prototype.slice.call(arguments, 1))
            }
        }
    },
    "3F5G": function(e, t, i) {
        (function(e) {
            var t = e(".countdown__wrapper").attr("data-date");
            !function() {
                if (document.getElementById("days"))
                    var e = new Date(t).getTime()
                      , i = setInterval((function() {
                        var t = (new Date).getTime()
                          , n = e - t;
                        if (document.getElementById("days").innerText = Math.floor(n / 864e5),
                        document.getElementById("hours").innerText = Math.floor(n % 864e5 / 36e5),
                        document.getElementById("minutes").innerText = Math.floor(n % 36e5 / 6e4),
                        document.getElementById("seconds").innerText = Math.floor(n % 6e4 / 1e3),
                        n < 0) {
                            var s = document.getElementById("headline")
                              , o = document.getElementById("countdown")
                              , r = document.getElementById("content");
                            s.innerText = "It's my birthday!",
                            o.style.display = "none",
                            r.style.display = "block",
                            clearInterval(i)
                        }
                    }
                    ), 0)
            }()
        }
        ).call(this, i("EVdn"))
    },
    "4QVJ": function(e, t, i) {
        (function(e, t) {
            e.$ = e.jQuery = i("EVdn"),
            t(".flip-card").on("click", (function(e) {
                t(this).find(".flip-card-inner").toggleClass("flip-card-inner--flipped")
            }
            ))
        }
        ).call(this, i("yLpj"), i("EVdn"))
    },
    "8oxB": function(e, t) {
        var i, n, s = e.exports = {};
        function o() {
            throw new Error("setTimeout has not been defined")
        }
        function r() {
            throw new Error("clearTimeout has not been defined")
        }
        function a(e) {
            if (i === setTimeout)
                return setTimeout(e, 0);
            if ((i === o || !i) && setTimeout)
                return i = setTimeout,
                setTimeout(e, 0);
            try {
                return i(e, 0)
            } catch (t) {
                try {
                    return i.call(null, e, 0)
                } catch (t) {
                    return i.call(this, e, 0)
                }
            }
        }
        !function() {
            try {
                i = "function" == typeof setTimeout ? setTimeout : o
            } catch (e) {
                i = o
            }
            try {
                n = "function" == typeof clearTimeout ? clearTimeout : r
            } catch (e) {
                n = r
            }
        }();
        var l, c = [], d = !1, u = -1;
        function h() {
            d && l && (d = !1,
            l.length ? c = l.concat(c) : u = -1,
            c.length && p())
        }
        function p() {
            if (!d) {
                var e = a(h);
                d = !0;
                for (var t = c.length; t; ) {
                    for (l = c,
                    c = []; ++u < t; )
                        l && l[u].run();
                    u = -1,
                    t = c.length
                }
                l = null,
                d = !1,
                function(e) {
                    if (n === clearTimeout)
                        return clearTimeout(e);
                    if ((n === r || !n) && clearTimeout)
                        return n = clearTimeout,
                        clearTimeout(e);
                    try {
                        n(e)
                    } catch (t) {
                        try {
                            return n.call(null, e)
                        } catch (t) {
                            return n.call(this, e)
                        }
                    }
                }(e)
            }
        }
        function f(e, t) {
            this.fun = e,
            this.array = t
        }
        function m() {}
        s.nextTick = function(e) {
            var t = new Array(arguments.length - 1);
            if (arguments.length > 1)
                for (var i = 1; i < arguments.length; i++)
                    t[i - 1] = arguments[i];
            c.push(new f(e,t)),
            1 !== c.length || d || a(p)
        }
        ,
        f.prototype.run = function() {
            this.fun.apply(null, this.array)
        }
        ,
        s.title = "browser",
        s.browser = !0,
        s.env = {},
        s.argv = [],
        s.version = "",
        s.versions = {},
        s.on = m,
        s.addListener = m,
        s.once = m,
        s.off = m,
        s.removeListener = m,
        s.removeAllListeners = m,
        s.emit = m,
        s.prependListener = m,
        s.prependOnceListener = m,
        s.listeners = function(e) {
            return []
        }
        ,
        s.binding = function(e) {
            throw new Error("process.binding is not supported")
        }
        ,
        s.cwd = function() {
            return "/"
        }
        ,
        s.chdir = function(e) {
            throw new Error("process.chdir is not supported")
        }
        ,
        s.umask = function() {
            return 0
        }
    },
    BFHv: function(e, t, i) {
        var n, s, o;
        !function(r) {
            "use strict";
            s = [i("EVdn")],
            void 0 === (o = "function" == typeof (n = function(e) {
                var t = -1
                  , i = -1
                  , n = function(e) {
                    return parseFloat(e) || 0
                }
                  , s = function(t) {
                    var i = e(t)
                      , s = null
                      , o = [];
                    return i.each((function() {
                        var t = e(this)
                          , i = t.offset().top - n(t.css("margin-top"))
                          , r = o.length > 0 ? o[o.length - 1] : null;
                        null === r ? o.push(t) : Math.floor(Math.abs(s - i)) <= 1 ? o[o.length - 1] = r.add(t) : o.push(t),
                        s = i
                    }
                    )),
                    o
                }
                  , o = function(t) {
                    var i = {
                        byRow: !0,
                        property: "height",
                        target: null,
                        remove: !1
                    };
                    return "object" == typeof t ? e.extend(i, t) : ("boolean" == typeof t ? i.byRow = t : "remove" === t && (i.remove = !0),
                    i)
                }
                  , r = e.fn.matchHeight = function(t) {
                    var i = o(t);
                    if (i.remove) {
                        var n = this;
                        return this.css(i.property, ""),
                        e.each(r._groups, (function(e, t) {
                            t.elements = t.elements.not(n)
                        }
                        )),
                        this
                    }
                    return this.length <= 1 && !i.target || (r._groups.push({
                        elements: this,
                        options: i
                    }),
                    r._apply(this, i)),
                    this
                }
                ;
                r.version = "0.7.2",
                r._groups = [],
                r._throttle = 80,
                r._maintainScroll = !1,
                r._beforeUpdate = null,
                r._afterUpdate = null,
                r._rows = s,
                r._parse = n,
                r._parseOptions = o,
                r._apply = function(t, i) {
                    var a = o(i)
                      , l = e(t)
                      , c = [l]
                      , d = e(window).scrollTop()
                      , u = e("html").outerHeight(!0)
                      , h = l.parents().filter(":hidden");
                    return h.each((function() {
                        var t = e(this);
                        t.data("style-cache", t.attr("style"))
                    }
                    )),
                    h.css("display", "block"),
                    a.byRow && !a.target && (l.each((function() {
                        var t = e(this)
                          , i = t.css("display");
                        "inline-block" !== i && "flex" !== i && "inline-flex" !== i && (i = "block"),
                        t.data("style-cache", t.attr("style")),
                        t.css({
                            display: i,
                            "padding-top": "0",
                            "padding-bottom": "0",
                            "margin-top": "0",
                            "margin-bottom": "0",
                            "border-top-width": "0",
                            "border-bottom-width": "0",
                            height: "100px",
                            overflow: "hidden"
                        })
                    }
                    )),
                    c = s(l),
                    l.each((function() {
                        var t = e(this);
                        t.attr("style", t.data("style-cache") || "")
                    }
                    ))),
                    e.each(c, (function(t, i) {
                        var s = e(i)
                          , o = 0;
                        if (a.target)
                            o = a.target.outerHeight(!1);
                        else {
                            if (a.byRow && s.length <= 1)
                                return void s.css(a.property, "");
                            s.each((function() {
                                var t = e(this)
                                  , i = t.attr("style")
                                  , n = t.css("display");
                                "inline-block" !== n && "flex" !== n && "inline-flex" !== n && (n = "block");
                                var s = {
                                    display: n
                                };
                                s[a.property] = "",
                                t.css(s),
                                t.outerHeight(!1) > o && (o = t.outerHeight(!1)),
                                i ? t.attr("style", i) : t.css("display", "")
                            }
                            ))
                        }
                        s.each((function() {
                            var t = e(this)
                              , i = 0;
                            a.target && t.is(a.target) || ("border-box" !== t.css("box-sizing") && (i += n(t.css("border-top-width")) + n(t.css("border-bottom-width")),
                            i += n(t.css("padding-top")) + n(t.css("padding-bottom"))),
                            t.css(a.property, o - i + "px"))
                        }
                        ))
                    }
                    )),
                    h.each((function() {
                        var t = e(this);
                        t.attr("style", t.data("style-cache") || null)
                    }
                    )),
                    r._maintainScroll && e(window).scrollTop(d / u * e("html").outerHeight(!0)),
                    this
                }
                ,
                r._applyDataApi = function() {
                    var t = {};
                    e("[data-match-height], [data-mh]").each((function() {
                        var i = e(this)
                          , n = i.attr("data-mh") || i.attr("data-match-height");
                        t[n] = n in t ? t[n].add(i) : i
                    }
                    )),
                    e.each(t, (function() {
                        this.matchHeight(!0)
                    }
                    ))
                }
                ;
                var a = function(t) {
                    r._beforeUpdate && r._beforeUpdate(t, r._groups),
                    e.each(r._groups, (function() {
                        r._apply(this.elements, this.options)
                    }
                    )),
                    r._afterUpdate && r._afterUpdate(t, r._groups)
                };
                r._update = function(n, s) {
                    if (s && "resize" === s.type) {
                        var o = e(window).width();
                        if (o === t)
                            return;
                        t = o
                    }
                    n ? -1 === i && (i = setTimeout((function() {
                        a(s),
                        i = -1
                    }
                    ), r._throttle)) : a(s)
                }
                ,
                e(r._applyDataApi);
                var l = e.fn.on ? "on" : "bind";
                e(window)[l]("load", (function(e) {
                    r._update(!1, e)
                }
                )),
                e(window)[l]("resize orientationchange", (function(e) {
                    r._update(!0, e)
                }
                ))
            }
            ) ? n.apply(t, s) : n) || (e.exports = o)
        }()
    },
    C331: function(e, t, i) {
        "use strict";
        var n = "bfred-it:object-fit-images"
          , s = /(object-fit|object-position)\s*:\s*([-.\w\s%]+)/g
          , o = "undefined" == typeof Image ? {
            style: {
                "object-position": 1
            }
        } : new Image
          , r = "object-fit"in o.style
          , a = "object-position"in o.style
          , l = "background-size"in o.style
          , c = "string" == typeof o.currentSrc
          , d = o.getAttribute
          , u = o.setAttribute
          , h = !1;
        function p(e, t, i) {
            var n = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='" + (t || 1) + "' height='" + (i || 0) + "'%3E%3C/svg%3E";
            d.call(e, "src") !== n && u.call(e, "src", n)
        }
        function f(e, t) {
            e.naturalWidth ? t(e) : setTimeout(f, 100, e, t)
        }
        function m(e) {
            var t = function(e) {
                for (var t, i = getComputedStyle(e).fontFamily, n = {}; null !== (t = s.exec(i)); )
                    n[t[1]] = t[2];
                return n
            }(e)
              , i = e[n];
            if (t["object-fit"] = t["object-fit"] || "fill",
            !i.img) {
                if ("fill" === t["object-fit"])
                    return;
                if (!i.skipTest && r && !t["object-position"])
                    return
            }
            if (!i.img) {
                i.img = new Image(e.width,e.height),
                i.img.srcset = d.call(e, "data-ofi-srcset") || e.srcset,
                i.img.src = d.call(e, "data-ofi-src") || e.src,
                u.call(e, "data-ofi-src", e.src),
                e.srcset && u.call(e, "data-ofi-srcset", e.srcset),
                p(e, e.naturalWidth || e.width, e.naturalHeight || e.height),
                e.srcset && (e.srcset = "");
                try {
                    !function(e) {
                        var t = {
                            get: function(t) {
                                return e[n].img[t || "src"]
                            },
                            set: function(t, i) {
                                return e[n].img[i || "src"] = t,
                                u.call(e, "data-ofi-" + i, t),
                                m(e),
                                t
                            }
                        };
                        Object.defineProperty(e, "src", t),
                        Object.defineProperty(e, "currentSrc", {
                            get: function() {
                                return t.get("currentSrc")
                            }
                        }),
                        Object.defineProperty(e, "srcset", {
                            get: function() {
                                return t.get("srcset")
                            },
                            set: function(e) {
                                return t.set(e, "srcset")
                            }
                        })
                    }(e)
                } catch (e) {
                    window.console && console.warn("https://bit.ly/ofi-old-browser")
                }
            }
            !function(e) {
                if (e.srcset && !c && window.picturefill) {
                    var t = window.picturefill._;
                    e[t.ns] && e[t.ns].evaled || t.fillImg(e, {
                        reselect: !0
                    }),
                    e[t.ns].curSrc || (e[t.ns].supported = !1,
                    t.fillImg(e, {
                        reselect: !0
                    })),
                    e.currentSrc = e[t.ns].curSrc || e.src
                }
            }(i.img),
            e.style.backgroundImage = 'url("' + (i.img.currentSrc || i.img.src).replace(/"/g, '\\"') + '")',
            e.style.backgroundPosition = t["object-position"] || "center",
            e.style.backgroundRepeat = "no-repeat",
            e.style.backgroundOrigin = "content-box",
            /scale-down/.test(t["object-fit"]) ? f(i.img, (function() {
                i.img.naturalWidth > e.width || i.img.naturalHeight > e.height ? e.style.backgroundSize = "contain" : e.style.backgroundSize = "auto"
            }
            )) : e.style.backgroundSize = t["object-fit"].replace("none", "auto").replace("fill", "100% 100%"),
            f(i.img, (function(t) {
                p(e, t.naturalWidth, t.naturalHeight)
            }
            ))
        }
        function g(e, t) {
            var i = !h && !e;
            if (t = t || {},
            e = e || "img",
            a && !t.skipTest || !l)
                return !1;
            "img" === e ? e = document.getElementsByTagName("img") : "string" == typeof e ? e = document.querySelectorAll(e) : "length"in e || (e = [e]);
            for (var s = 0; s < e.length; s++)
                e[s][n] = e[s][n] || {
                    skipTest: t.skipTest
                },
                m(e[s]);
            i && (document.body.addEventListener("load", (function(e) {
                "IMG" === e.target.tagName && g(e.target, {
                    skipTest: t.skipTest
                })
            }
            ), !0),
            h = !0,
            e = "img"),
            t.watchMQ && window.addEventListener("resize", g.bind(null, e, {
                skipTest: t.skipTest
            }))
        }
        g.supportsObjectFit = r,
        g.supportsObjectPosition = a,
        function() {
            function e(e, t) {
                return e[n] && e[n].img && ("src" === t || "srcset" === t) ? e[n].img : e
            }
            a || (HTMLImageElement.prototype.getAttribute = function(t) {
                return d.call(e(this, t), t)
            }
            ,
            HTMLImageElement.prototype.setAttribute = function(t, i) {
                return u.call(e(this, t), t, String(i))
            }
            )
        }(),
        e.exports = g
    },
    CWM2: function(e, t, i) {
        var n, s, o;
        s = [],
        void 0 === (o = "function" == typeof (n = () => {
            let e, t, i;
            const n = {
                sel: [],
                el: []
            };
            let s = !1
              , o = !1;
            function r() {}
            function a(e, t) {
                Array.prototype.forEach.call(e, t)
            }
            function l() {
                this.reset()
            }
            function c(e) {
                return t.some(t => t.start < e && e < t.end)
            }
            function d(e, n, s) {
                if (0 === s)
                    e.style.whiteSpace = n,
                    i = 0,
                    t = [],
                    function e(n, s) {
                        if (n.nodeType === n.ELEMENT_NODE)
                            if ("nowrap" === window.getComputedStyle(n).whiteSpace) {
                                const e = n.outerHTML.length;
                                t.push({
                                    start: i,
                                    end: i + e
                                }),
                                i += e
                            } else
                                a(n.childNodes, t => {
                                    e(t, !0)
                                }
                                ),
                                s && (i += n.outerHTML.length - n.innerHTML.length);
                        else
                            n.nodeType === n.COMMENT_NODE ? i += n.length + 7 : n.nodeType === n.PROCESSING_INSTRUCTION_NODE ? i += n.length + 2 : i += n.length
                    }(e, !1),
                    e.style.whiteSpace = "nowrap";
                else {
                    const e = [];
                    t.forEach(t => {
                        t.start > s && e.push({
                            start: t.start - s,
                            end: t.end - s
                        })
                    }
                    ),
                    t = e
                }
            }
            function u(e, t, i) {
                const n = (t = t.trim()).split(" ").length;
                if (t += " ",
                n < 2)
                    return t;
                const s = document.createElement("span");
                s.innerHTML = t,
                e.appendChild(s);
                const o = s.offsetWidth;
                s.parentNode.removeChild(s);
                const r = Math.floor((i - o) / (n - 1));
                s.style.wordSpacing = r + "px",
                s.setAttribute("data-owner", "balance-text-justify");
                const a = document.createElement("div");
                return a.appendChild(s),
                a.innerHTML
            }
            function h(t, i) {
                const n = /([^\S\u00a0]|-|\u2014|\u2013|\u00ad)(?![^<]*>)/g;
                let s;
                if (!e)
                    for (e = [],
                    s = n.exec(t); null !== s; )
                        c(s.index) || e.push(s.index),
                        s = n.exec(t);
                return -1 !== e.indexOf(i)
            }
            function p(e, t) {
                return 0 === t || t === e.length || h(e, t - 1) && !h(e, t)
            }
            function f(e, t, i, n, s, o, r) {
                let a;
                if (t && "string" == typeof t)
                    for (; ; ) {
                        for (; !p(t, o); )
                            o += s;
                        if (e.innerHTML = t.substr(0, o),
                        a = e.offsetWidth,
                        s < 0) {
                            if (a <= n || a <= 0 || 0 === o)
                                break
                        } else if (n <= a || i <= a || o === t.length)
                            break;
                        o += s
                    }
                r.index = o,
                r.width = a
            }
            function m(e) {
                return e ? "string" == typeof e ? document.querySelectorAll(e) : e.tagName && e.querySelectorAll ? [e] : e : []
            }
            function g(t) {
                a(m(t), t => {
                    !function(e) {
                        let t = e.querySelectorAll('br[data-owner="balance-text-hyphen"]');
                        a(t, e => {
                            e.outerHTML = ""
                        }
                        ),
                        t = e.querySelectorAll('br[data-owner="balance-text"]'),
                        a(t, e => {
                            e.outerHTML = " "
                        }
                        );
                        let i = e.querySelectorAll('span[data-owner="balance-text-softhyphen"]');
                        if (i.length > 0 && a(i, e => {
                            const t = document.createTextNode("­");
                            e.parentNode.insertBefore(t, e),
                            e.parentNode.removeChild(e)
                        }
                        ),
                        i = e.querySelectorAll('span[data-owner="balance-text-justify"]'),
                        i.length > 0) {
                            let t = "";
                            a(i, e => {
                                t += e.textContent,
                                e.parentNode.removeChild(e)
                            }
                            ),
                            e.innerHTML = t
                        }
                    }(t);
                    const i = t.style.whiteSpace
                      , n = t.style.float
                      , s = t.style.display
                      , o = t.style.position
                      , r = t.style.lineHeight;
                    t.style.lineHeight = "normal";
                    const c = t.offsetWidth
                      , h = t.offsetHeight;
                    t.style.whiteSpace = "nowrap",
                    t.style.float = "none",
                    t.style.display = "inline",
                    t.style.position = "static";
                    let p = t.offsetWidth;
                    const m = t.offsetHeight
                      , g = "pre-wrap" === i ? 0 : function(e, t) {
                        const i = document.createElement("div");
                        i.style.display = "block",
                        i.style.position = "absolute",
                        i.style.bottom = 0,
                        i.style.right = 0,
                        i.style.width = 0,
                        i.style.height = 0,
                        i.style.margin = 0,
                        i.style.padding = 0,
                        i.style.visibility = "hidden",
                        i.style.overflow = "hidden";
                        const n = document.createElement("span");
                        n.style.fontSize = "2000px",
                        n.innerHTML = "&nbsp;",
                        i.appendChild(n),
                        e.appendChild(i);
                        const s = n.getBoundingClientRect();
                        return i.parentNode.removeChild(i),
                        t / (s.height / s.width)
                    }(t, m);
                    if (c > 0 && p > c && p < 5e3) {
                        let n = t.innerHTML
                          , s = ""
                          , o = "";
                        const r = function(e) {
                            return "justify" === (e.currentStyle || window.getComputedStyle(e, null)).textAlign
                        }(t);
                        let a, y, v, b, w, T, k, C = Math.round(h / m), x = 0;
                        for (; C > 1; )
                            e = null,
                            d(t, i, x),
                            a = Math.round((p + g) / C - g),
                            y = Math.round((n.length + 1) / C) - 1,
                            v = new l,
                            f(t, n, c, a, -1, y, v),
                            b = new l,
                            y = v.index,
                            f(t, n, c, a, 1, y, b),
                            v.reset(),
                            y = b.index,
                            f(t, n, c, a, -1, y, v),
                            w = 0 === v.index ? b.index : c < b.width || v.index === b.index || Math.abs(a - v.width) < Math.abs(b.width - a) ? v.index : b.index,
                            o = n.substr(0, w).replace(/\s$/, ""),
                            k = Boolean(o.match(/\u00ad$/)),
                            k && (o = o.replace(/\u00ad$/, '<span data-owner="balance-text-softhyphen">-</span>')),
                            r ? s += u(t, o, c) : (s += o,
                            T = k || Boolean(o.match(/(-|\u2014|\u2013)$/)),
                            s += T ? '<br data-owner="balance-text-hyphen" />' : '<br data-owner="balance-text" aria-hidden="true" />'),
                            n = n.substr(w),
                            x = w,
                            C--,
                            t.innerHTML = n,
                            p = t.offsetWidth;
                        t.innerHTML = r ? s + u(t, n, c) : s + n
                    }
                    t.style.whiteSpace = i,
                    t.style.float = n,
                    t.style.display = s,
                    t.style.position = o,
                    t.style.lineHeight = r
                }
                )
            }
            function y() {
                const e = m(n.sel.join(","));
                g(Array.prototype.concat.apply(n.el, e))
            }
            function v() {
                var e;
                s || (e = y,
                "loading" !== document.readyState ? e() : document.addEventListener ? document.addEventListener("DOMContentLoaded", e) : document.attachEvent("onreadystatechange", () => {
                    "loading" !== document.readyState && e()
                }
                ),
                window.addEventListener("load", y),
                window.addEventListener("resize", function(e, t, i, ...n) {
                    let s;
                    return function() {
                        const o = this;
                        s ? clearTimeout(s) : i && e.apply(o, n),
                        s = setTimeout((function() {
                            i || e.apply(o, n),
                            s = null
                        }
                        ), t || 100)
                    }
                }(y)),
                s = !0)
            }
            function b(e, t) {
                e ? t && !0 === t.watch ? function(e) {
                    "string" == typeof e ? n.sel.push(e) : a(m(e), e => {
                        n.el.push(e)
                    }
                    ),
                    v(),
                    y()
                }(e) : t && !1 === t.watch ? function(e) {
                    "string" == typeof e ? n.sel = n.sel.filter(t => t !== e) : (e = m(e),
                    n.el = n.el.filter(t => -1 === e.indexOf(t)))
                }(e) : g(e) : o || (n.sel.push(".balance-text"),
                v(),
                o = !0)
            }
            return l.prototype.reset = function() {
                this.index = 0,
                this.width = 0
            }
            ,
            b.updateWatched = y,
            function() {
                if ("undefined" == typeof window)
                    return !1;
                const {style: e} = document.documentElement;
                return e.textWrap || e.WebkitTextWrap || e.MozTextWrap || e.MsTextWrap
            }() ? (r.updateWatched = r,
            r) : b
        }
        ) ? n.apply(t, s) : n) || (e.exports = o)
    },
    Cfdk: function(e, t, i) {
        "use strict";
        function n(e, t) {
            for (var i = 0; i < t.length; i++) {
                var n = t[i];
                n.enumerable = n.enumerable || !1,
                n.configurable = !0,
                "value"in n && (n.writable = !0),
                Object.defineProperty(e, n.key, n)
            }
        }
        i.d(t, "a", (function() {
            return s
        }
        ));
        var s = function() {
            function e(t, i) {
                !function(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, e),
                this.container = document.getElementById(t),
                this.onCompletion = i,
                this.totalTime = 2100,
                this.interval = null
            }
            var t, i, s;
            return t = e,
            (i = [{
                key: "start",
                value: function() {
                    var e = this;
                    this.container ? this.interval = setInterval((function() {
                        var t = Math.floor(e.totalTime / 60)
                          , i = e.totalTime % 60;
                        e.container.textContent = "".concat(t, ":").concat(i < 10 ? "0" : "").concat(i),
                        0 === e.totalTime ? (clearInterval(e.interval),
                        "function" == typeof e.onCompletion && e.onCompletion()) : e.totalTime--
                    }
                    ), 1e3) : console.error("Countdown Timer container not found")
                }
            }, {
                key: "stop",
                value: function() {
                    this.interval && clearInterval(this.interval)
                }
            }]) && n(t.prototype, i),
            s && n(t, s),
            e
        }()
    },
    EVdn: function(e, t, i) {
        var n;
        !function(t, i) {
            "use strict";
            "object" == typeof e.exports ? e.exports = t.document ? i(t, !0) : function(e) {
                if (!e.document)
                    throw new Error("jQuery requires a window with a document");
                return i(e)
            }
            : i(t)
        }("undefined" != typeof window ? window : this, (function(i, s) {
            "use strict";
            var o = []
              , r = Object.getPrototypeOf
              , a = o.slice
              , l = o.flat ? function(e) {
                return o.flat.call(e)
            }
            : function(e) {
                return o.concat.apply([], e)
            }
              , c = o.push
              , d = o.indexOf
              , u = {}
              , h = u.toString
              , p = u.hasOwnProperty
              , f = p.toString
              , m = f.call(Object)
              , g = {}
              , y = function(e) {
                return "function" == typeof e && "number" != typeof e.nodeType && "function" != typeof e.item
            }
              , v = function(e) {
                return null != e && e === e.window
            }
              , b = i.document
              , w = {
                type: !0,
                src: !0,
                nonce: !0,
                noModule: !0
            };
            function T(e, t, i) {
                var n, s, o = (i = i || b).createElement("script");
                if (o.text = e,
                t)
                    for (n in w)
                        (s = t[n] || t.getAttribute && t.getAttribute(n)) && o.setAttribute(n, s);
                i.head.appendChild(o).parentNode.removeChild(o)
            }
            function k(e) {
                return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? u[h.call(e)] || "object" : typeof e
            }
            var C = function(e, t) {
                return new C.fn.init(e,t)
            };
            function x(e) {
                var t = !!e && "length"in e && e.length
                  , i = k(e);
                return !y(e) && !v(e) && ("array" === i || 0 === t || "number" == typeof t && t > 0 && t - 1 in e)
            }
            C.fn = C.prototype = {
                jquery: "3.6.0",
                constructor: C,
                length: 0,
                toArray: function() {
                    return a.call(this)
                },
                get: function(e) {
                    return null == e ? a.call(this) : e < 0 ? this[e + this.length] : this[e]
                },
                pushStack: function(e) {
                    var t = C.merge(this.constructor(), e);
                    return t.prevObject = this,
                    t
                },
                each: function(e) {
                    return C.each(this, e)
                },
                map: function(e) {
                    return this.pushStack(C.map(this, (function(t, i) {
                        return e.call(t, i, t)
                    }
                    )))
                },
                slice: function() {
                    return this.pushStack(a.apply(this, arguments))
                },
                first: function() {
                    return this.eq(0)
                },
                last: function() {
                    return this.eq(-1)
                },
                even: function() {
                    return this.pushStack(C.grep(this, (function(e, t) {
                        return (t + 1) % 2
                    }
                    )))
                },
                odd: function() {
                    return this.pushStack(C.grep(this, (function(e, t) {
                        return t % 2
                    }
                    )))
                },
                eq: function(e) {
                    var t = this.length
                      , i = +e + (e < 0 ? t : 0);
                    return this.pushStack(i >= 0 && i < t ? [this[i]] : [])
                },
                end: function() {
                    return this.prevObject || this.constructor()
                },
                push: c,
                sort: o.sort,
                splice: o.splice
            },
            C.extend = C.fn.extend = function() {
                var e, t, i, n, s, o, r = arguments[0] || {}, a = 1, l = arguments.length, c = !1;
                for ("boolean" == typeof r && (c = r,
                r = arguments[a] || {},
                a++),
                "object" == typeof r || y(r) || (r = {}),
                a === l && (r = this,
                a--); a < l; a++)
                    if (null != (e = arguments[a]))
                        for (t in e)
                            n = e[t],
                            "__proto__" !== t && r !== n && (c && n && (C.isPlainObject(n) || (s = Array.isArray(n))) ? (i = r[t],
                            o = s && !Array.isArray(i) ? [] : s || C.isPlainObject(i) ? i : {},
                            s = !1,
                            r[t] = C.extend(c, o, n)) : void 0 !== n && (r[t] = n));
                return r
            }
            ,
            C.extend({
                expando: "jQuery" + ("3.6.0" + Math.random()).replace(/\D/g, ""),
                isReady: !0,
                error: function(e) {
                    throw new Error(e)
                },
                noop: function() {},
                isPlainObject: function(e) {
                    var t, i;
                    return !(!e || "[object Object]" !== h.call(e)) && (!(t = r(e)) || "function" == typeof (i = p.call(t, "constructor") && t.constructor) && f.call(i) === m)
                },
                isEmptyObject: function(e) {
                    var t;
                    for (t in e)
                        return !1;
                    return !0
                },
                globalEval: function(e, t, i) {
                    T(e, {
                        nonce: t && t.nonce
                    }, i)
                },
                each: function(e, t) {
                    var i, n = 0;
                    if (x(e))
                        for (i = e.length; n < i && !1 !== t.call(e[n], n, e[n]); n++)
                            ;
                    else
                        for (n in e)
                            if (!1 === t.call(e[n], n, e[n]))
                                break;
                    return e
                },
                makeArray: function(e, t) {
                    var i = t || [];
                    return null != e && (x(Object(e)) ? C.merge(i, "string" == typeof e ? [e] : e) : c.call(i, e)),
                    i
                },
                inArray: function(e, t, i) {
                    return null == t ? -1 : d.call(t, e, i)
                },
                merge: function(e, t) {
                    for (var i = +t.length, n = 0, s = e.length; n < i; n++)
                        e[s++] = t[n];
                    return e.length = s,
                    e
                },
                grep: function(e, t, i) {
                    for (var n = [], s = 0, o = e.length, r = !i; s < o; s++)
                        !t(e[s], s) !== r && n.push(e[s]);
                    return n
                },
                map: function(e, t, i) {
                    var n, s, o = 0, r = [];
                    if (x(e))
                        for (n = e.length; o < n; o++)
                            null != (s = t(e[o], o, i)) && r.push(s);
                    else
                        for (o in e)
                            null != (s = t(e[o], o, i)) && r.push(s);
                    return l(r)
                },
                guid: 1,
                support: g
            }),
            "function" == typeof Symbol && (C.fn[Symbol.iterator] = o[Symbol.iterator]),
            C.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), (function(e, t) {
                u["[object " + t + "]"] = t.toLowerCase()
            }
            ));
            var _ = function(e) {
                var t, i, n, s, o, r, a, l, c, d, u, h, p, f, m, g, y, v, b, w = "sizzle" + 1 * new Date, T = e.document, k = 0, C = 0, x = le(), _ = le(), A = le(), E = le(), S = function(e, t) {
                    return e === t && (u = !0),
                    0
                }, L = {}.hasOwnProperty, P = [], O = P.pop, N = P.push, D = P.push, j = P.slice, M = function(e, t) {
                    for (var i = 0, n = e.length; i < n; i++)
                        if (e[i] === t)
                            return i;
                    return -1
                }, I = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", $ = "[\\x20\\t\\r\\n\\f]", R = "(?:\\\\[\\da-fA-F]{1,6}" + $ + "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+", H = "\\[" + $ + "*(" + R + ")(?:" + $ + "*([*^$|!~]?=)" + $ + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + R + "))|)" + $ + "*\\]", F = ":(" + R + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + H + ")*)|.*)\\)|)", q = new RegExp($ + "+","g"), V = new RegExp("^" + $ + "+|((?:^|[^\\\\])(?:\\\\.)*)" + $ + "+$","g"), B = new RegExp("^" + $ + "*," + $ + "*"), z = new RegExp("^" + $ + "*([>+~]|" + $ + ")" + $ + "*"), W = new RegExp($ + "|>"), U = new RegExp(F), Y = new RegExp("^" + R + "$"), X = {
                    ID: new RegExp("^#(" + R + ")"),
                    CLASS: new RegExp("^\\.(" + R + ")"),
                    TAG: new RegExp("^(" + R + "|[*])"),
                    ATTR: new RegExp("^" + H),
                    PSEUDO: new RegExp("^" + F),
                    CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + $ + "*(even|odd|(([+-]|)(\\d*)n|)" + $ + "*(?:([+-]|)" + $ + "*(\\d+)|))" + $ + "*\\)|)","i"),
                    bool: new RegExp("^(?:" + I + ")$","i"),
                    needsContext: new RegExp("^" + $ + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + $ + "*((?:-\\d)?\\d*)" + $ + "*\\)|)(?=[^-]|$)","i")
                }, J = /HTML$/i, Z = /^(?:input|select|textarea|button)$/i, G = /^h\d$/i, K = /^[^{]+\{\s*\[native \w/, Q = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, ee = /[+~]/, te = new RegExp("\\\\[\\da-fA-F]{1,6}" + $ + "?|\\\\([^\\r\\n\\f])","g"), ie = function(e, t) {
                    var i = "0x" + e.slice(1) - 65536;
                    return t || (i < 0 ? String.fromCharCode(i + 65536) : String.fromCharCode(i >> 10 | 55296, 1023 & i | 56320))
                }, ne = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g, se = function(e, t) {
                    return t ? "\0" === e ? "�" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e
                }, oe = function() {
                    h()
                }, re = we((function(e) {
                    return !0 === e.disabled && "fieldset" === e.nodeName.toLowerCase()
                }
                ), {
                    dir: "parentNode",
                    next: "legend"
                });
                try {
                    D.apply(P = j.call(T.childNodes), T.childNodes),
                    P[T.childNodes.length].nodeType
                } catch (e) {
                    D = {
                        apply: P.length ? function(e, t) {
                            N.apply(e, j.call(t))
                        }
                        : function(e, t) {
                            for (var i = e.length, n = 0; e[i++] = t[n++]; )
                                ;
                            e.length = i - 1
                        }
                    }
                }
                function ae(e, t, n, s) {
                    var o, a, c, d, u, f, y, v = t && t.ownerDocument, T = t ? t.nodeType : 9;
                    if (n = n || [],
                    "string" != typeof e || !e || 1 !== T && 9 !== T && 11 !== T)
                        return n;
                    if (!s && (h(t),
                    t = t || p,
                    m)) {
                        if (11 !== T && (u = Q.exec(e)))
                            if (o = u[1]) {
                                if (9 === T) {
                                    if (!(c = t.getElementById(o)))
                                        return n;
                                    if (c.id === o)
                                        return n.push(c),
                                        n
                                } else if (v && (c = v.getElementById(o)) && b(t, c) && c.id === o)
                                    return n.push(c),
                                    n
                            } else {
                                if (u[2])
                                    return D.apply(n, t.getElementsByTagName(e)),
                                    n;
                                if ((o = u[3]) && i.getElementsByClassName && t.getElementsByClassName)
                                    return D.apply(n, t.getElementsByClassName(o)),
                                    n
                            }
                        if (i.qsa && !E[e + " "] && (!g || !g.test(e)) && (1 !== T || "object" !== t.nodeName.toLowerCase())) {
                            if (y = e,
                            v = t,
                            1 === T && (W.test(e) || z.test(e))) {
                                for ((v = ee.test(e) && ye(t.parentNode) || t) === t && i.scope || ((d = t.getAttribute("id")) ? d = d.replace(ne, se) : t.setAttribute("id", d = w)),
                                a = (f = r(e)).length; a--; )
                                    f[a] = (d ? "#" + d : ":scope") + " " + be(f[a]);
                                y = f.join(",")
                            }
                            try {
                                return D.apply(n, v.querySelectorAll(y)),
                                n
                            } catch (t) {
                                E(e, !0)
                            } finally {
                                d === w && t.removeAttribute("id")
                            }
                        }
                    }
                    return l(e.replace(V, "$1"), t, n, s)
                }
                function le() {
                    var e = [];
                    return function t(i, s) {
                        return e.push(i + " ") > n.cacheLength && delete t[e.shift()],
                        t[i + " "] = s
                    }
                }
                function ce(e) {
                    return e[w] = !0,
                    e
                }
                function de(e) {
                    var t = p.createElement("fieldset");
                    try {
                        return !!e(t)
                    } catch (e) {
                        return !1
                    } finally {
                        t.parentNode && t.parentNode.removeChild(t),
                        t = null
                    }
                }
                function ue(e, t) {
                    for (var i = e.split("|"), s = i.length; s--; )
                        n.attrHandle[i[s]] = t
                }
                function he(e, t) {
                    var i = t && e
                      , n = i && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
                    if (n)
                        return n;
                    if (i)
                        for (; i = i.nextSibling; )
                            if (i === t)
                                return -1;
                    return e ? 1 : -1
                }
                function pe(e) {
                    return function(t) {
                        return "input" === t.nodeName.toLowerCase() && t.type === e
                    }
                }
                function fe(e) {
                    return function(t) {
                        var i = t.nodeName.toLowerCase();
                        return ("input" === i || "button" === i) && t.type === e
                    }
                }
                function me(e) {
                    return function(t) {
                        return "form"in t ? t.parentNode && !1 === t.disabled ? "label"in t ? "label"in t.parentNode ? t.parentNode.disabled === e : t.disabled === e : t.isDisabled === e || t.isDisabled !== !e && re(t) === e : t.disabled === e : "label"in t && t.disabled === e
                    }
                }
                function ge(e) {
                    return ce((function(t) {
                        return t = +t,
                        ce((function(i, n) {
                            for (var s, o = e([], i.length, t), r = o.length; r--; )
                                i[s = o[r]] && (i[s] = !(n[s] = i[s]))
                        }
                        ))
                    }
                    ))
                }
                function ye(e) {
                    return e && void 0 !== e.getElementsByTagName && e
                }
                for (t in i = ae.support = {},
                o = ae.isXML = function(e) {
                    var t = e && e.namespaceURI
                      , i = e && (e.ownerDocument || e).documentElement;
                    return !J.test(t || i && i.nodeName || "HTML")
                }
                ,
                h = ae.setDocument = function(e) {
                    var t, s, r = e ? e.ownerDocument || e : T;
                    return r != p && 9 === r.nodeType && r.documentElement ? (f = (p = r).documentElement,
                    m = !o(p),
                    T != p && (s = p.defaultView) && s.top !== s && (s.addEventListener ? s.addEventListener("unload", oe, !1) : s.attachEvent && s.attachEvent("onunload", oe)),
                    i.scope = de((function(e) {
                        return f.appendChild(e).appendChild(p.createElement("div")),
                        void 0 !== e.querySelectorAll && !e.querySelectorAll(":scope fieldset div").length
                    }
                    )),
                    i.attributes = de((function(e) {
                        return e.className = "i",
                        !e.getAttribute("className")
                    }
                    )),
                    i.getElementsByTagName = de((function(e) {
                        return e.appendChild(p.createComment("")),
                        !e.getElementsByTagName("*").length
                    }
                    )),
                    i.getElementsByClassName = K.test(p.getElementsByClassName),
                    i.getById = de((function(e) {
                        return f.appendChild(e).id = w,
                        !p.getElementsByName || !p.getElementsByName(w).length
                    }
                    )),
                    i.getById ? (n.filter.ID = function(e) {
                        var t = e.replace(te, ie);
                        return function(e) {
                            return e.getAttribute("id") === t
                        }
                    }
                    ,
                    n.find.ID = function(e, t) {
                        if (void 0 !== t.getElementById && m) {
                            var i = t.getElementById(e);
                            return i ? [i] : []
                        }
                    }
                    ) : (n.filter.ID = function(e) {
                        var t = e.replace(te, ie);
                        return function(e) {
                            var i = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
                            return i && i.value === t
                        }
                    }
                    ,
                    n.find.ID = function(e, t) {
                        if (void 0 !== t.getElementById && m) {
                            var i, n, s, o = t.getElementById(e);
                            if (o) {
                                if ((i = o.getAttributeNode("id")) && i.value === e)
                                    return [o];
                                for (s = t.getElementsByName(e),
                                n = 0; o = s[n++]; )
                                    if ((i = o.getAttributeNode("id")) && i.value === e)
                                        return [o]
                            }
                            return []
                        }
                    }
                    ),
                    n.find.TAG = i.getElementsByTagName ? function(e, t) {
                        return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : i.qsa ? t.querySelectorAll(e) : void 0
                    }
                    : function(e, t) {
                        var i, n = [], s = 0, o = t.getElementsByTagName(e);
                        if ("*" === e) {
                            for (; i = o[s++]; )
                                1 === i.nodeType && n.push(i);
                            return n
                        }
                        return o
                    }
                    ,
                    n.find.CLASS = i.getElementsByClassName && function(e, t) {
                        if (void 0 !== t.getElementsByClassName && m)
                            return t.getElementsByClassName(e)
                    }
                    ,
                    y = [],
                    g = [],
                    (i.qsa = K.test(p.querySelectorAll)) && (de((function(e) {
                        var t;
                        f.appendChild(e).innerHTML = "<a id='" + w + "'></a><select id='" + w + "-\r\\' msallowcapture=''><option selected=''></option></select>",
                        e.querySelectorAll("[msallowcapture^='']").length && g.push("[*^$]=" + $ + "*(?:''|\"\")"),
                        e.querySelectorAll("[selected]").length || g.push("\\[" + $ + "*(?:value|" + I + ")"),
                        e.querySelectorAll("[id~=" + w + "-]").length || g.push("~="),
                        (t = p.createElement("input")).setAttribute("name", ""),
                        e.appendChild(t),
                        e.querySelectorAll("[name='']").length || g.push("\\[" + $ + "*name" + $ + "*=" + $ + "*(?:''|\"\")"),
                        e.querySelectorAll(":checked").length || g.push(":checked"),
                        e.querySelectorAll("a#" + w + "+*").length || g.push(".#.+[+~]"),
                        e.querySelectorAll("\\\f"),
                        g.push("[\\r\\n\\f]")
                    }
                    )),
                    de((function(e) {
                        e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                        var t = p.createElement("input");
                        t.setAttribute("type", "hidden"),
                        e.appendChild(t).setAttribute("name", "D"),
                        e.querySelectorAll("[name=d]").length && g.push("name" + $ + "*[*^$|!~]?="),
                        2 !== e.querySelectorAll(":enabled").length && g.push(":enabled", ":disabled"),
                        f.appendChild(e).disabled = !0,
                        2 !== e.querySelectorAll(":disabled").length && g.push(":enabled", ":disabled"),
                        e.querySelectorAll("*,:x"),
                        g.push(",.*:")
                    }
                    ))),
                    (i.matchesSelector = K.test(v = f.matches || f.webkitMatchesSelector || f.mozMatchesSelector || f.oMatchesSelector || f.msMatchesSelector)) && de((function(e) {
                        i.disconnectedMatch = v.call(e, "*"),
                        v.call(e, "[s!='']:x"),
                        y.push("!=", F)
                    }
                    )),
                    g = g.length && new RegExp(g.join("|")),
                    y = y.length && new RegExp(y.join("|")),
                    t = K.test(f.compareDocumentPosition),
                    b = t || K.test(f.contains) ? function(e, t) {
                        var i = 9 === e.nodeType ? e.documentElement : e
                          , n = t && t.parentNode;
                        return e === n || !(!n || 1 !== n.nodeType || !(i.contains ? i.contains(n) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(n)))
                    }
                    : function(e, t) {
                        if (t)
                            for (; t = t.parentNode; )
                                if (t === e)
                                    return !0;
                        return !1
                    }
                    ,
                    S = t ? function(e, t) {
                        if (e === t)
                            return u = !0,
                            0;
                        var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                        return n || (1 & (n = (e.ownerDocument || e) == (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !i.sortDetached && t.compareDocumentPosition(e) === n ? e == p || e.ownerDocument == T && b(T, e) ? -1 : t == p || t.ownerDocument == T && b(T, t) ? 1 : d ? M(d, e) - M(d, t) : 0 : 4 & n ? -1 : 1)
                    }
                    : function(e, t) {
                        if (e === t)
                            return u = !0,
                            0;
                        var i, n = 0, s = e.parentNode, o = t.parentNode, r = [e], a = [t];
                        if (!s || !o)
                            return e == p ? -1 : t == p ? 1 : s ? -1 : o ? 1 : d ? M(d, e) - M(d, t) : 0;
                        if (s === o)
                            return he(e, t);
                        for (i = e; i = i.parentNode; )
                            r.unshift(i);
                        for (i = t; i = i.parentNode; )
                            a.unshift(i);
                        for (; r[n] === a[n]; )
                            n++;
                        return n ? he(r[n], a[n]) : r[n] == T ? -1 : a[n] == T ? 1 : 0
                    }
                    ,
                    p) : p
                }
                ,
                ae.matches = function(e, t) {
                    return ae(e, null, null, t)
                }
                ,
                ae.matchesSelector = function(e, t) {
                    if (h(e),
                    i.matchesSelector && m && !E[t + " "] && (!y || !y.test(t)) && (!g || !g.test(t)))
                        try {
                            var n = v.call(e, t);
                            if (n || i.disconnectedMatch || e.document && 11 !== e.document.nodeType)
                                return n
                        } catch (e) {
                            E(t, !0)
                        }
                    return ae(t, p, null, [e]).length > 0
                }
                ,
                ae.contains = function(e, t) {
                    return (e.ownerDocument || e) != p && h(e),
                    b(e, t)
                }
                ,
                ae.attr = function(e, t) {
                    (e.ownerDocument || e) != p && h(e);
                    var s = n.attrHandle[t.toLowerCase()]
                      , o = s && L.call(n.attrHandle, t.toLowerCase()) ? s(e, t, !m) : void 0;
                    return void 0 !== o ? o : i.attributes || !m ? e.getAttribute(t) : (o = e.getAttributeNode(t)) && o.specified ? o.value : null
                }
                ,
                ae.escape = function(e) {
                    return (e + "").replace(ne, se)
                }
                ,
                ae.error = function(e) {
                    throw new Error("Syntax error, unrecognized expression: " + e)
                }
                ,
                ae.uniqueSort = function(e) {
                    var t, n = [], s = 0, o = 0;
                    if (u = !i.detectDuplicates,
                    d = !i.sortStable && e.slice(0),
                    e.sort(S),
                    u) {
                        for (; t = e[o++]; )
                            t === e[o] && (s = n.push(o));
                        for (; s--; )
                            e.splice(n[s], 1)
                    }
                    return d = null,
                    e
                }
                ,
                s = ae.getText = function(e) {
                    var t, i = "", n = 0, o = e.nodeType;
                    if (o) {
                        if (1 === o || 9 === o || 11 === o) {
                            if ("string" == typeof e.textContent)
                                return e.textContent;
                            for (e = e.firstChild; e; e = e.nextSibling)
                                i += s(e)
                        } else if (3 === o || 4 === o)
                            return e.nodeValue
                    } else
                        for (; t = e[n++]; )
                            i += s(t);
                    return i
                }
                ,
                (n = ae.selectors = {
                    cacheLength: 50,
                    createPseudo: ce,
                    match: X,
                    attrHandle: {},
                    find: {},
                    relative: {
                        ">": {
                            dir: "parentNode",
                            first: !0
                        },
                        " ": {
                            dir: "parentNode"
                        },
                        "+": {
                            dir: "previousSibling",
                            first: !0
                        },
                        "~": {
                            dir: "previousSibling"
                        }
                    },
                    preFilter: {
                        ATTR: function(e) {
                            return e[1] = e[1].replace(te, ie),
                            e[3] = (e[3] || e[4] || e[5] || "").replace(te, ie),
                            "~=" === e[2] && (e[3] = " " + e[3] + " "),
                            e.slice(0, 4)
                        },
                        CHILD: function(e) {
                            return e[1] = e[1].toLowerCase(),
                            "nth" === e[1].slice(0, 3) ? (e[3] || ae.error(e[0]),
                            e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])),
                            e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && ae.error(e[0]),
                            e
                        },
                        PSEUDO: function(e) {
                            var t, i = !e[6] && e[2];
                            return X.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : i && U.test(i) && (t = r(i, !0)) && (t = i.indexOf(")", i.length - t) - i.length) && (e[0] = e[0].slice(0, t),
                            e[2] = i.slice(0, t)),
                            e.slice(0, 3))
                        }
                    },
                    filter: {
                        TAG: function(e) {
                            var t = e.replace(te, ie).toLowerCase();
                            return "*" === e ? function() {
                                return !0
                            }
                            : function(e) {
                                return e.nodeName && e.nodeName.toLowerCase() === t
                            }
                        },
                        CLASS: function(e) {
                            var t = x[e + " "];
                            return t || (t = new RegExp("(^|" + $ + ")" + e + "(" + $ + "|$)")) && x(e, (function(e) {
                                return t.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "")
                            }
                            ))
                        },
                        ATTR: function(e, t, i) {
                            return function(n) {
                                var s = ae.attr(n, e);
                                return null == s ? "!=" === t : !t || (s += "",
                                "=" === t ? s === i : "!=" === t ? s !== i : "^=" === t ? i && 0 === s.indexOf(i) : "*=" === t ? i && s.indexOf(i) > -1 : "$=" === t ? i && s.slice(-i.length) === i : "~=" === t ? (" " + s.replace(q, " ") + " ").indexOf(i) > -1 : "|=" === t && (s === i || s.slice(0, i.length + 1) === i + "-"))
                            }
                        },
                        CHILD: function(e, t, i, n, s) {
                            var o = "nth" !== e.slice(0, 3)
                              , r = "last" !== e.slice(-4)
                              , a = "of-type" === t;
                            return 1 === n && 0 === s ? function(e) {
                                return !!e.parentNode
                            }
                            : function(t, i, l) {
                                var c, d, u, h, p, f, m = o !== r ? "nextSibling" : "previousSibling", g = t.parentNode, y = a && t.nodeName.toLowerCase(), v = !l && !a, b = !1;
                                if (g) {
                                    if (o) {
                                        for (; m; ) {
                                            for (h = t; h = h[m]; )
                                                if (a ? h.nodeName.toLowerCase() === y : 1 === h.nodeType)
                                                    return !1;
                                            f = m = "only" === e && !f && "nextSibling"
                                        }
                                        return !0
                                    }
                                    if (f = [r ? g.firstChild : g.lastChild],
                                    r && v) {
                                        for (b = (p = (c = (d = (u = (h = g)[w] || (h[w] = {}))[h.uniqueID] || (u[h.uniqueID] = {}))[e] || [])[0] === k && c[1]) && c[2],
                                        h = p && g.childNodes[p]; h = ++p && h && h[m] || (b = p = 0) || f.pop(); )
                                            if (1 === h.nodeType && ++b && h === t) {
                                                d[e] = [k, p, b];
                                                break
                                            }
                                    } else if (v && (b = p = (c = (d = (u = (h = t)[w] || (h[w] = {}))[h.uniqueID] || (u[h.uniqueID] = {}))[e] || [])[0] === k && c[1]),
                                    !1 === b)
                                        for (; (h = ++p && h && h[m] || (b = p = 0) || f.pop()) && ((a ? h.nodeName.toLowerCase() !== y : 1 !== h.nodeType) || !++b || (v && ((d = (u = h[w] || (h[w] = {}))[h.uniqueID] || (u[h.uniqueID] = {}))[e] = [k, b]),
                                        h !== t)); )
                                            ;
                                    return (b -= s) === n || b % n == 0 && b / n >= 0
                                }
                            }
                        },
                        PSEUDO: function(e, t) {
                            var i, s = n.pseudos[e] || n.setFilters[e.toLowerCase()] || ae.error("unsupported pseudo: " + e);
                            return s[w] ? s(t) : s.length > 1 ? (i = [e, e, "", t],
                            n.setFilters.hasOwnProperty(e.toLowerCase()) ? ce((function(e, i) {
                                for (var n, o = s(e, t), r = o.length; r--; )
                                    e[n = M(e, o[r])] = !(i[n] = o[r])
                            }
                            )) : function(e) {
                                return s(e, 0, i)
                            }
                            ) : s
                        }
                    },
                    pseudos: {
                        not: ce((function(e) {
                            var t = []
                              , i = []
                              , n = a(e.replace(V, "$1"));
                            return n[w] ? ce((function(e, t, i, s) {
                                for (var o, r = n(e, null, s, []), a = e.length; a--; )
                                    (o = r[a]) && (e[a] = !(t[a] = o))
                            }
                            )) : function(e, s, o) {
                                return t[0] = e,
                                n(t, null, o, i),
                                t[0] = null,
                                !i.pop()
                            }
                        }
                        )),
                        has: ce((function(e) {
                            return function(t) {
                                return ae(e, t).length > 0
                            }
                        }
                        )),
                        contains: ce((function(e) {
                            return e = e.replace(te, ie),
                            function(t) {
                                return (t.textContent || s(t)).indexOf(e) > -1
                            }
                        }
                        )),
                        lang: ce((function(e) {
                            return Y.test(e || "") || ae.error("unsupported lang: " + e),
                            e = e.replace(te, ie).toLowerCase(),
                            function(t) {
                                var i;
                                do {
                                    if (i = m ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang"))
                                        return (i = i.toLowerCase()) === e || 0 === i.indexOf(e + "-")
                                } while ((t = t.parentNode) && 1 === t.nodeType);
                                return !1
                            }
                        }
                        )),
                        target: function(t) {
                            var i = e.location && e.location.hash;
                            return i && i.slice(1) === t.id
                        },
                        root: function(e) {
                            return e === f
                        },
                        focus: function(e) {
                            return e === p.activeElement && (!p.hasFocus || p.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                        },
                        enabled: me(!1),
                        disabled: me(!0),
                        checked: function(e) {
                            var t = e.nodeName.toLowerCase();
                            return "input" === t && !!e.checked || "option" === t && !!e.selected
                        },
                        selected: function(e) {
                            return e.parentNode && e.parentNode.selectedIndex,
                            !0 === e.selected
                        },
                        empty: function(e) {
                            for (e = e.firstChild; e; e = e.nextSibling)
                                if (e.nodeType < 6)
                                    return !1;
                            return !0
                        },
                        parent: function(e) {
                            return !n.pseudos.empty(e)
                        },
                        header: function(e) {
                            return G.test(e.nodeName)
                        },
                        input: function(e) {
                            return Z.test(e.nodeName)
                        },
                        button: function(e) {
                            var t = e.nodeName.toLowerCase();
                            return "input" === t && "button" === e.type || "button" === t
                        },
                        text: function(e) {
                            var t;
                            return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                        },
                        first: ge((function() {
                            return [0]
                        }
                        )),
                        last: ge((function(e, t) {
                            return [t - 1]
                        }
                        )),
                        eq: ge((function(e, t, i) {
                            return [i < 0 ? i + t : i]
                        }
                        )),
                        even: ge((function(e, t) {
                            for (var i = 0; i < t; i += 2)
                                e.push(i);
                            return e
                        }
                        )),
                        odd: ge((function(e, t) {
                            for (var i = 1; i < t; i += 2)
                                e.push(i);
                            return e
                        }
                        )),
                        lt: ge((function(e, t, i) {
                            for (var n = i < 0 ? i + t : i > t ? t : i; --n >= 0; )
                                e.push(n);
                            return e
                        }
                        )),
                        gt: ge((function(e, t, i) {
                            for (var n = i < 0 ? i + t : i; ++n < t; )
                                e.push(n);
                            return e
                        }
                        ))
                    }
                }).pseudos.nth = n.pseudos.eq,
                {
                    radio: !0,
                    checkbox: !0,
                    file: !0,
                    password: !0,
                    image: !0
                })
                    n.pseudos[t] = pe(t);
                for (t in {
                    submit: !0,
                    reset: !0
                })
                    n.pseudos[t] = fe(t);
                function ve() {}
                function be(e) {
                    for (var t = 0, i = e.length, n = ""; t < i; t++)
                        n += e[t].value;
                    return n
                }
                function we(e, t, i) {
                    var n = t.dir
                      , s = t.next
                      , o = s || n
                      , r = i && "parentNode" === o
                      , a = C++;
                    return t.first ? function(t, i, s) {
                        for (; t = t[n]; )
                            if (1 === t.nodeType || r)
                                return e(t, i, s);
                        return !1
                    }
                    : function(t, i, l) {
                        var c, d, u, h = [k, a];
                        if (l) {
                            for (; t = t[n]; )
                                if ((1 === t.nodeType || r) && e(t, i, l))
                                    return !0
                        } else
                            for (; t = t[n]; )
                                if (1 === t.nodeType || r)
                                    if (d = (u = t[w] || (t[w] = {}))[t.uniqueID] || (u[t.uniqueID] = {}),
                                    s && s === t.nodeName.toLowerCase())
                                        t = t[n] || t;
                                    else {
                                        if ((c = d[o]) && c[0] === k && c[1] === a)
                                            return h[2] = c[2];
                                        if (d[o] = h,
                                        h[2] = e(t, i, l))
                                            return !0
                                    }
                        return !1
                    }
                }
                function Te(e) {
                    return e.length > 1 ? function(t, i, n) {
                        for (var s = e.length; s--; )
                            if (!e[s](t, i, n))
                                return !1;
                        return !0
                    }
                    : e[0]
                }
                function ke(e, t, i, n, s) {
                    for (var o, r = [], a = 0, l = e.length, c = null != t; a < l; a++)
                        (o = e[a]) && (i && !i(o, n, s) || (r.push(o),
                        c && t.push(a)));
                    return r
                }
                function Ce(e, t, i, n, s, o) {
                    return n && !n[w] && (n = Ce(n)),
                    s && !s[w] && (s = Ce(s, o)),
                    ce((function(o, r, a, l) {
                        var c, d, u, h = [], p = [], f = r.length, m = o || function(e, t, i) {
                            for (var n = 0, s = t.length; n < s; n++)
                                ae(e, t[n], i);
                            return i
                        }(t || "*", a.nodeType ? [a] : a, []), g = !e || !o && t ? m : ke(m, h, e, a, l), y = i ? s || (o ? e : f || n) ? [] : r : g;
                        if (i && i(g, y, a, l),
                        n)
                            for (c = ke(y, p),
                            n(c, [], a, l),
                            d = c.length; d--; )
                                (u = c[d]) && (y[p[d]] = !(g[p[d]] = u));
                        if (o) {
                            if (s || e) {
                                if (s) {
                                    for (c = [],
                                    d = y.length; d--; )
                                        (u = y[d]) && c.push(g[d] = u);
                                    s(null, y = [], c, l)
                                }
                                for (d = y.length; d--; )
                                    (u = y[d]) && (c = s ? M(o, u) : h[d]) > -1 && (o[c] = !(r[c] = u))
                            }
                        } else
                            y = ke(y === r ? y.splice(f, y.length) : y),
                            s ? s(null, r, y, l) : D.apply(r, y)
                    }
                    ))
                }
                function xe(e) {
                    for (var t, i, s, o = e.length, r = n.relative[e[0].type], a = r || n.relative[" "], l = r ? 1 : 0, d = we((function(e) {
                        return e === t
                    }
                    ), a, !0), u = we((function(e) {
                        return M(t, e) > -1
                    }
                    ), a, !0), h = [function(e, i, n) {
                        var s = !r && (n || i !== c) || ((t = i).nodeType ? d(e, i, n) : u(e, i, n));
                        return t = null,
                        s
                    }
                    ]; l < o; l++)
                        if (i = n.relative[e[l].type])
                            h = [we(Te(h), i)];
                        else {
                            if ((i = n.filter[e[l].type].apply(null, e[l].matches))[w]) {
                                for (s = ++l; s < o && !n.relative[e[s].type]; s++)
                                    ;
                                return Ce(l > 1 && Te(h), l > 1 && be(e.slice(0, l - 1).concat({
                                    value: " " === e[l - 2].type ? "*" : ""
                                })).replace(V, "$1"), i, l < s && xe(e.slice(l, s)), s < o && xe(e = e.slice(s)), s < o && be(e))
                            }
                            h.push(i)
                        }
                    return Te(h)
                }
                return ve.prototype = n.filters = n.pseudos,
                n.setFilters = new ve,
                r = ae.tokenize = function(e, t) {
                    var i, s, o, r, a, l, c, d = _[e + " "];
                    if (d)
                        return t ? 0 : d.slice(0);
                    for (a = e,
                    l = [],
                    c = n.preFilter; a; ) {
                        for (r in i && !(s = B.exec(a)) || (s && (a = a.slice(s[0].length) || a),
                        l.push(o = [])),
                        i = !1,
                        (s = z.exec(a)) && (i = s.shift(),
                        o.push({
                            value: i,
                            type: s[0].replace(V, " ")
                        }),
                        a = a.slice(i.length)),
                        n.filter)
                            !(s = X[r].exec(a)) || c[r] && !(s = c[r](s)) || (i = s.shift(),
                            o.push({
                                value: i,
                                type: r,
                                matches: s
                            }),
                            a = a.slice(i.length));
                        if (!i)
                            break
                    }
                    return t ? a.length : a ? ae.error(e) : _(e, l).slice(0)
                }
                ,
                a = ae.compile = function(e, t) {
                    var i, s = [], o = [], a = A[e + " "];
                    if (!a) {
                        for (t || (t = r(e)),
                        i = t.length; i--; )
                            (a = xe(t[i]))[w] ? s.push(a) : o.push(a);
                        (a = A(e, function(e, t) {
                            var i = t.length > 0
                              , s = e.length > 0
                              , o = function(o, r, a, l, d) {
                                var u, f, g, y = 0, v = "0", b = o && [], w = [], T = c, C = o || s && n.find.TAG("*", d), x = k += null == T ? 1 : Math.random() || .1, _ = C.length;
                                for (d && (c = r == p || r || d); v !== _ && null != (u = C[v]); v++) {
                                    if (s && u) {
                                        for (f = 0,
                                        r || u.ownerDocument == p || (h(u),
                                        a = !m); g = e[f++]; )
                                            if (g(u, r || p, a)) {
                                                l.push(u);
                                                break
                                            }
                                        d && (k = x)
                                    }
                                    i && ((u = !g && u) && y--,
                                    o && b.push(u))
                                }
                                if (y += v,
                                i && v !== y) {
                                    for (f = 0; g = t[f++]; )
                                        g(b, w, r, a);
                                    if (o) {
                                        if (y > 0)
                                            for (; v--; )
                                                b[v] || w[v] || (w[v] = O.call(l));
                                        w = ke(w)
                                    }
                                    D.apply(l, w),
                                    d && !o && w.length > 0 && y + t.length > 1 && ae.uniqueSort(l)
                                }
                                return d && (k = x,
                                c = T),
                                b
                            };
                            return i ? ce(o) : o
                        }(o, s))).selector = e
                    }
                    return a
                }
                ,
                l = ae.select = function(e, t, i, s) {
                    var o, l, c, d, u, h = "function" == typeof e && e, p = !s && r(e = h.selector || e);
                    if (i = i || [],
                    1 === p.length) {
                        if ((l = p[0] = p[0].slice(0)).length > 2 && "ID" === (c = l[0]).type && 9 === t.nodeType && m && n.relative[l[1].type]) {
                            if (!(t = (n.find.ID(c.matches[0].replace(te, ie), t) || [])[0]))
                                return i;
                            h && (t = t.parentNode),
                            e = e.slice(l.shift().value.length)
                        }
                        for (o = X.needsContext.test(e) ? 0 : l.length; o-- && (c = l[o],
                        !n.relative[d = c.type]); )
                            if ((u = n.find[d]) && (s = u(c.matches[0].replace(te, ie), ee.test(l[0].type) && ye(t.parentNode) || t))) {
                                if (l.splice(o, 1),
                                !(e = s.length && be(l)))
                                    return D.apply(i, s),
                                    i;
                                break
                            }
                    }
                    return (h || a(e, p))(s, t, !m, i, !t || ee.test(e) && ye(t.parentNode) || t),
                    i
                }
                ,
                i.sortStable = w.split("").sort(S).join("") === w,
                i.detectDuplicates = !!u,
                h(),
                i.sortDetached = de((function(e) {
                    return 1 & e.compareDocumentPosition(p.createElement("fieldset"))
                }
                )),
                de((function(e) {
                    return e.innerHTML = "<a href='#'></a>",
                    "#" === e.firstChild.getAttribute("href")
                }
                )) || ue("type|href|height|width", (function(e, t, i) {
                    if (!i)
                        return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
                }
                )),
                i.attributes && de((function(e) {
                    return e.innerHTML = "<input/>",
                    e.firstChild.setAttribute("value", ""),
                    "" === e.firstChild.getAttribute("value")
                }
                )) || ue("value", (function(e, t, i) {
                    if (!i && "input" === e.nodeName.toLowerCase())
                        return e.defaultValue
                }
                )),
                de((function(e) {
                    return null == e.getAttribute("disabled")
                }
                )) || ue(I, (function(e, t, i) {
                    var n;
                    if (!i)
                        return !0 === e[t] ? t.toLowerCase() : (n = e.getAttributeNode(t)) && n.specified ? n.value : null
                }
                )),
                ae
            }(i);
            C.find = _,
            C.expr = _.selectors,
            C.expr[":"] = C.expr.pseudos,
            C.uniqueSort = C.unique = _.uniqueSort,
            C.text = _.getText,
            C.isXMLDoc = _.isXML,
            C.contains = _.contains,
            C.escapeSelector = _.escape;
            var A = function(e, t, i) {
                for (var n = [], s = void 0 !== i; (e = e[t]) && 9 !== e.nodeType; )
                    if (1 === e.nodeType) {
                        if (s && C(e).is(i))
                            break;
                        n.push(e)
                    }
                return n
            }
              , E = function(e, t) {
                for (var i = []; e; e = e.nextSibling)
                    1 === e.nodeType && e !== t && i.push(e);
                return i
            }
              , S = C.expr.match.needsContext;
            function L(e, t) {
                return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
            }
            var P = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
            function O(e, t, i) {
                return y(t) ? C.grep(e, (function(e, n) {
                    return !!t.call(e, n, e) !== i
                }
                )) : t.nodeType ? C.grep(e, (function(e) {
                    return e === t !== i
                }
                )) : "string" != typeof t ? C.grep(e, (function(e) {
                    return d.call(t, e) > -1 !== i
                }
                )) : C.filter(t, e, i)
            }
            C.filter = function(e, t, i) {
                var n = t[0];
                return i && (e = ":not(" + e + ")"),
                1 === t.length && 1 === n.nodeType ? C.find.matchesSelector(n, e) ? [n] : [] : C.find.matches(e, C.grep(t, (function(e) {
                    return 1 === e.nodeType
                }
                )))
            }
            ,
            C.fn.extend({
                find: function(e) {
                    var t, i, n = this.length, s = this;
                    if ("string" != typeof e)
                        return this.pushStack(C(e).filter((function() {
                            for (t = 0; t < n; t++)
                                if (C.contains(s[t], this))
                                    return !0
                        }
                        )));
                    for (i = this.pushStack([]),
                    t = 0; t < n; t++)
                        C.find(e, s[t], i);
                    return n > 1 ? C.uniqueSort(i) : i
                },
                filter: function(e) {
                    return this.pushStack(O(this, e || [], !1))
                },
                not: function(e) {
                    return this.pushStack(O(this, e || [], !0))
                },
                is: function(e) {
                    return !!O(this, "string" == typeof e && S.test(e) ? C(e) : e || [], !1).length
                }
            });
            var N, D = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
            (C.fn.init = function(e, t, i) {
                var n, s;
                if (!e)
                    return this;
                if (i = i || N,
                "string" == typeof e) {
                    if (!(n = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : D.exec(e)) || !n[1] && t)
                        return !t || t.jquery ? (t || i).find(e) : this.constructor(t).find(e);
                    if (n[1]) {
                        if (t = t instanceof C ? t[0] : t,
                        C.merge(this, C.parseHTML(n[1], t && t.nodeType ? t.ownerDocument || t : b, !0)),
                        P.test(n[1]) && C.isPlainObject(t))
                            for (n in t)
                                y(this[n]) ? this[n](t[n]) : this.attr(n, t[n]);
                        return this
                    }
                    return (s = b.getElementById(n[2])) && (this[0] = s,
                    this.length = 1),
                    this
                }
                return e.nodeType ? (this[0] = e,
                this.length = 1,
                this) : y(e) ? void 0 !== i.ready ? i.ready(e) : e(C) : C.makeArray(e, this)
            }
            ).prototype = C.fn,
            N = C(b);
            var j = /^(?:parents|prev(?:Until|All))/
              , M = {
                children: !0,
                contents: !0,
                next: !0,
                prev: !0
            };
            function I(e, t) {
                for (; (e = e[t]) && 1 !== e.nodeType; )
                    ;
                return e
            }
            C.fn.extend({
                has: function(e) {
                    var t = C(e, this)
                      , i = t.length;
                    return this.filter((function() {
                        for (var e = 0; e < i; e++)
                            if (C.contains(this, t[e]))
                                return !0
                    }
                    ))
                },
                closest: function(e, t) {
                    var i, n = 0, s = this.length, o = [], r = "string" != typeof e && C(e);
                    if (!S.test(e))
                        for (; n < s; n++)
                            for (i = this[n]; i && i !== t; i = i.parentNode)
                                if (i.nodeType < 11 && (r ? r.index(i) > -1 : 1 === i.nodeType && C.find.matchesSelector(i, e))) {
                                    o.push(i);
                                    break
                                }
                    return this.pushStack(o.length > 1 ? C.uniqueSort(o) : o)
                },
                index: function(e) {
                    return e ? "string" == typeof e ? d.call(C(e), this[0]) : d.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
                },
                add: function(e, t) {
                    return this.pushStack(C.uniqueSort(C.merge(this.get(), C(e, t))))
                },
                addBack: function(e) {
                    return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
                }
            }),
            C.each({
                parent: function(e) {
                    var t = e.parentNode;
                    return t && 11 !== t.nodeType ? t : null
                },
                parents: function(e) {
                    return A(e, "parentNode")
                },
                parentsUntil: function(e, t, i) {
                    return A(e, "parentNode", i)
                },
                next: function(e) {
                    return I(e, "nextSibling")
                },
                prev: function(e) {
                    return I(e, "previousSibling")
                },
                nextAll: function(e) {
                    return A(e, "nextSibling")
                },
                prevAll: function(e) {
                    return A(e, "previousSibling")
                },
                nextUntil: function(e, t, i) {
                    return A(e, "nextSibling", i)
                },
                prevUntil: function(e, t, i) {
                    return A(e, "previousSibling", i)
                },
                siblings: function(e) {
                    return E((e.parentNode || {}).firstChild, e)
                },
                children: function(e) {
                    return E(e.firstChild)
                },
                contents: function(e) {
                    return null != e.contentDocument && r(e.contentDocument) ? e.contentDocument : (L(e, "template") && (e = e.content || e),
                    C.merge([], e.childNodes))
                }
            }, (function(e, t) {
                C.fn[e] = function(i, n) {
                    var s = C.map(this, t, i);
                    return "Until" !== e.slice(-5) && (n = i),
                    n && "string" == typeof n && (s = C.filter(n, s)),
                    this.length > 1 && (M[e] || C.uniqueSort(s),
                    j.test(e) && s.reverse()),
                    this.pushStack(s)
                }
            }
            ));
            var $ = /[^\x20\t\r\n\f]+/g;
            function R(e) {
                return e
            }
            function H(e) {
                throw e
            }
            function F(e, t, i, n) {
                var s;
                try {
                    e && y(s = e.promise) ? s.call(e).done(t).fail(i) : e && y(s = e.then) ? s.call(e, t, i) : t.apply(void 0, [e].slice(n))
                } catch (e) {
                    i.apply(void 0, [e])
                }
            }
            C.Callbacks = function(e) {
                e = "string" == typeof e ? function(e) {
                    var t = {};
                    return C.each(e.match($) || [], (function(e, i) {
                        t[i] = !0
                    }
                    )),
                    t
                }(e) : C.extend({}, e);
                var t, i, n, s, o = [], r = [], a = -1, l = function() {
                    for (s = s || e.once,
                    n = t = !0; r.length; a = -1)
                        for (i = r.shift(); ++a < o.length; )
                            !1 === o[a].apply(i[0], i[1]) && e.stopOnFalse && (a = o.length,
                            i = !1);
                    e.memory || (i = !1),
                    t = !1,
                    s && (o = i ? [] : "")
                }, c = {
                    add: function() {
                        return o && (i && !t && (a = o.length - 1,
                        r.push(i)),
                        function t(i) {
                            C.each(i, (function(i, n) {
                                y(n) ? e.unique && c.has(n) || o.push(n) : n && n.length && "string" !== k(n) && t(n)
                            }
                            ))
                        }(arguments),
                        i && !t && l()),
                        this
                    },
                    remove: function() {
                        return C.each(arguments, (function(e, t) {
                            for (var i; (i = C.inArray(t, o, i)) > -1; )
                                o.splice(i, 1),
                                i <= a && a--
                        }
                        )),
                        this
                    },
                    has: function(e) {
                        return e ? C.inArray(e, o) > -1 : o.length > 0
                    },
                    empty: function() {
                        return o && (o = []),
                        this
                    },
                    disable: function() {
                        return s = r = [],
                        o = i = "",
                        this
                    },
                    disabled: function() {
                        return !o
                    },
                    lock: function() {
                        return s = r = [],
                        i || t || (o = i = ""),
                        this
                    },
                    locked: function() {
                        return !!s
                    },
                    fireWith: function(e, i) {
                        return s || (i = [e, (i = i || []).slice ? i.slice() : i],
                        r.push(i),
                        t || l()),
                        this
                    },
                    fire: function() {
                        return c.fireWith(this, arguments),
                        this
                    },
                    fired: function() {
                        return !!n
                    }
                };
                return c
            }
            ,
            C.extend({
                Deferred: function(e) {
                    var t = [["notify", "progress", C.Callbacks("memory"), C.Callbacks("memory"), 2], ["resolve", "done", C.Callbacks("once memory"), C.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", C.Callbacks("once memory"), C.Callbacks("once memory"), 1, "rejected"]]
                      , n = "pending"
                      , s = {
                        state: function() {
                            return n
                        },
                        always: function() {
                            return o.done(arguments).fail(arguments),
                            this
                        },
                        catch: function(e) {
                            return s.then(null, e)
                        },
                        pipe: function() {
                            var e = arguments;
                            return C.Deferred((function(i) {
                                C.each(t, (function(t, n) {
                                    var s = y(e[n[4]]) && e[n[4]];
                                    o[n[1]]((function() {
                                        var e = s && s.apply(this, arguments);
                                        e && y(e.promise) ? e.promise().progress(i.notify).done(i.resolve).fail(i.reject) : i[n[0] + "With"](this, s ? [e] : arguments)
                                    }
                                    ))
                                }
                                )),
                                e = null
                            }
                            )).promise()
                        },
                        then: function(e, n, s) {
                            var o = 0;
                            function r(e, t, n, s) {
                                return function() {
                                    var a = this
                                      , l = arguments
                                      , c = function() {
                                        var i, c;
                                        if (!(e < o)) {
                                            if ((i = n.apply(a, l)) === t.promise())
                                                throw new TypeError("Thenable self-resolution");
                                            c = i && ("object" == typeof i || "function" == typeof i) && i.then,
                                            y(c) ? s ? c.call(i, r(o, t, R, s), r(o, t, H, s)) : (o++,
                                            c.call(i, r(o, t, R, s), r(o, t, H, s), r(o, t, R, t.notifyWith))) : (n !== R && (a = void 0,
                                            l = [i]),
                                            (s || t.resolveWith)(a, l))
                                        }
                                    }
                                      , d = s ? c : function() {
                                        try {
                                            c()
                                        } catch (i) {
                                            C.Deferred.exceptionHook && C.Deferred.exceptionHook(i, d.stackTrace),
                                            e + 1 >= o && (n !== H && (a = void 0,
                                            l = [i]),
                                            t.rejectWith(a, l))
                                        }
                                    }
                                    ;
                                    e ? d() : (C.Deferred.getStackHook && (d.stackTrace = C.Deferred.getStackHook()),
                                    i.setTimeout(d))
                                }
                            }
                            return C.Deferred((function(i) {
                                t[0][3].add(r(0, i, y(s) ? s : R, i.notifyWith)),
                                t[1][3].add(r(0, i, y(e) ? e : R)),
                                t[2][3].add(r(0, i, y(n) ? n : H))
                            }
                            )).promise()
                        },
                        promise: function(e) {
                            return null != e ? C.extend(e, s) : s
                        }
                    }
                      , o = {};
                    return C.each(t, (function(e, i) {
                        var r = i[2]
                          , a = i[5];
                        s[i[1]] = r.add,
                        a && r.add((function() {
                            n = a
                        }
                        ), t[3 - e][2].disable, t[3 - e][3].disable, t[0][2].lock, t[0][3].lock),
                        r.add(i[3].fire),
                        o[i[0]] = function() {
                            return o[i[0] + "With"](this === o ? void 0 : this, arguments),
                            this
                        }
                        ,
                        o[i[0] + "With"] = r.fireWith
                    }
                    )),
                    s.promise(o),
                    e && e.call(o, o),
                    o
                },
                when: function(e) {
                    var t = arguments.length
                      , i = t
                      , n = Array(i)
                      , s = a.call(arguments)
                      , o = C.Deferred()
                      , r = function(e) {
                        return function(i) {
                            n[e] = this,
                            s[e] = arguments.length > 1 ? a.call(arguments) : i,
                            --t || o.resolveWith(n, s)
                        }
                    };
                    if (t <= 1 && (F(e, o.done(r(i)).resolve, o.reject, !t),
                    "pending" === o.state() || y(s[i] && s[i].then)))
                        return o.then();
                    for (; i--; )
                        F(s[i], r(i), o.reject);
                    return o.promise()
                }
            });
            var q = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
            C.Deferred.exceptionHook = function(e, t) {
                i.console && i.console.warn && e && q.test(e.name) && i.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t)
            }
            ,
            C.readyException = function(e) {
                i.setTimeout((function() {
                    throw e
                }
                ))
            }
            ;
            var V = C.Deferred();
            function B() {
                b.removeEventListener("DOMContentLoaded", B),
                i.removeEventListener("load", B),
                C.ready()
            }
            C.fn.ready = function(e) {
                return V.then(e).catch((function(e) {
                    C.readyException(e)
                }
                )),
                this
            }
            ,
            C.extend({
                isReady: !1,
                readyWait: 1,
                ready: function(e) {
                    (!0 === e ? --C.readyWait : C.isReady) || (C.isReady = !0,
                    !0 !== e && --C.readyWait > 0 || V.resolveWith(b, [C]))
                }
            }),
            C.ready.then = V.then,
            "complete" === b.readyState || "loading" !== b.readyState && !b.documentElement.doScroll ? i.setTimeout(C.ready) : (b.addEventListener("DOMContentLoaded", B),
            i.addEventListener("load", B));
            var z = function(e, t, i, n, s, o, r) {
                var a = 0
                  , l = e.length
                  , c = null == i;
                if ("object" === k(i))
                    for (a in s = !0,
                    i)
                        z(e, t, a, i[a], !0, o, r);
                else if (void 0 !== n && (s = !0,
                y(n) || (r = !0),
                c && (r ? (t.call(e, n),
                t = null) : (c = t,
                t = function(e, t, i) {
                    return c.call(C(e), i)
                }
                )),
                t))
                    for (; a < l; a++)
                        t(e[a], i, r ? n : n.call(e[a], a, t(e[a], i)));
                return s ? e : c ? t.call(e) : l ? t(e[0], i) : o
            }
              , W = /^-ms-/
              , U = /-([a-z])/g;
            function Y(e, t) {
                return t.toUpperCase()
            }
            function X(e) {
                return e.replace(W, "ms-").replace(U, Y)
            }
            var J = function(e) {
                return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
            };
            function Z() {
                this.expando = C.expando + Z.uid++
            }
            Z.uid = 1,
            Z.prototype = {
                cache: function(e) {
                    var t = e[this.expando];
                    return t || (t = {},
                    J(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
                        value: t,
                        configurable: !0
                    }))),
                    t
                },
                set: function(e, t, i) {
                    var n, s = this.cache(e);
                    if ("string" == typeof t)
                        s[X(t)] = i;
                    else
                        for (n in t)
                            s[X(n)] = t[n];
                    return s
                },
                get: function(e, t) {
                    return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][X(t)]
                },
                access: function(e, t, i) {
                    return void 0 === t || t && "string" == typeof t && void 0 === i ? this.get(e, t) : (this.set(e, t, i),
                    void 0 !== i ? i : t)
                },
                remove: function(e, t) {
                    var i, n = e[this.expando];
                    if (void 0 !== n) {
                        if (void 0 !== t) {
                            i = (t = Array.isArray(t) ? t.map(X) : (t = X(t))in n ? [t] : t.match($) || []).length;
                            for (; i--; )
                                delete n[t[i]]
                        }
                        (void 0 === t || C.isEmptyObject(n)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
                    }
                },
                hasData: function(e) {
                    var t = e[this.expando];
                    return void 0 !== t && !C.isEmptyObject(t)
                }
            };
            var G = new Z
              , K = new Z
              , Q = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/
              , ee = /[A-Z]/g;
            function te(e, t, i) {
                var n;
                if (void 0 === i && 1 === e.nodeType)
                    if (n = "data-" + t.replace(ee, "-$&").toLowerCase(),
                    "string" == typeof (i = e.getAttribute(n))) {
                        try {
                            i = function(e) {
                                return "true" === e || "false" !== e && ("null" === e ? null : e === +e + "" ? +e : Q.test(e) ? JSON.parse(e) : e)
                            }(i)
                        } catch (e) {}
                        K.set(e, t, i)
                    } else
                        i = void 0;
                return i
            }
            C.extend({
                hasData: function(e) {
                    return K.hasData(e) || G.hasData(e)
                },
                data: function(e, t, i) {
                    return K.access(e, t, i)
                },
                removeData: function(e, t) {
                    K.remove(e, t)
                },
                _data: function(e, t, i) {
                    return G.access(e, t, i)
                },
                _removeData: function(e, t) {
                    G.remove(e, t)
                }
            }),
            C.fn.extend({
                data: function(e, t) {
                    var i, n, s, o = this[0], r = o && o.attributes;
                    if (void 0 === e) {
                        if (this.length && (s = K.get(o),
                        1 === o.nodeType && !G.get(o, "hasDataAttrs"))) {
                            for (i = r.length; i--; )
                                r[i] && 0 === (n = r[i].name).indexOf("data-") && (n = X(n.slice(5)),
                                te(o, n, s[n]));
                            G.set(o, "hasDataAttrs", !0)
                        }
                        return s
                    }
                    return "object" == typeof e ? this.each((function() {
                        K.set(this, e)
                    }
                    )) : z(this, (function(t) {
                        var i;
                        if (o && void 0 === t)
                            return void 0 !== (i = K.get(o, e)) || void 0 !== (i = te(o, e)) ? i : void 0;
                        this.each((function() {
                            K.set(this, e, t)
                        }
                        ))
                    }
                    ), null, t, arguments.length > 1, null, !0)
                },
                removeData: function(e) {
                    return this.each((function() {
                        K.remove(this, e)
                    }
                    ))
                }
            }),
            C.extend({
                queue: function(e, t, i) {
                    var n;
                    if (e)
                        return t = (t || "fx") + "queue",
                        n = G.get(e, t),
                        i && (!n || Array.isArray(i) ? n = G.access(e, t, C.makeArray(i)) : n.push(i)),
                        n || []
                },
                dequeue: function(e, t) {
                    t = t || "fx";
                    var i = C.queue(e, t)
                      , n = i.length
                      , s = i.shift()
                      , o = C._queueHooks(e, t);
                    "inprogress" === s && (s = i.shift(),
                    n--),
                    s && ("fx" === t && i.unshift("inprogress"),
                    delete o.stop,
                    s.call(e, (function() {
                        C.dequeue(e, t)
                    }
                    ), o)),
                    !n && o && o.empty.fire()
                },
                _queueHooks: function(e, t) {
                    var i = t + "queueHooks";
                    return G.get(e, i) || G.access(e, i, {
                        empty: C.Callbacks("once memory").add((function() {
                            G.remove(e, [t + "queue", i])
                        }
                        ))
                    })
                }
            }),
            C.fn.extend({
                queue: function(e, t) {
                    var i = 2;
                    return "string" != typeof e && (t = e,
                    e = "fx",
                    i--),
                    arguments.length < i ? C.queue(this[0], e) : void 0 === t ? this : this.each((function() {
                        var i = C.queue(this, e, t);
                        C._queueHooks(this, e),
                        "fx" === e && "inprogress" !== i[0] && C.dequeue(this, e)
                    }
                    ))
                },
                dequeue: function(e) {
                    return this.each((function() {
                        C.dequeue(this, e)
                    }
                    ))
                },
                clearQueue: function(e) {
                    return this.queue(e || "fx", [])
                },
                promise: function(e, t) {
                    var i, n = 1, s = C.Deferred(), o = this, r = this.length, a = function() {
                        --n || s.resolveWith(o, [o])
                    };
                    for ("string" != typeof e && (t = e,
                    e = void 0),
                    e = e || "fx"; r--; )
                        (i = G.get(o[r], e + "queueHooks")) && i.empty && (n++,
                        i.empty.add(a));
                    return a(),
                    s.promise(t)
                }
            });
            var ie = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source
              , ne = new RegExp("^(?:([+-])=|)(" + ie + ")([a-z%]*)$","i")
              , se = ["Top", "Right", "Bottom", "Left"]
              , oe = b.documentElement
              , re = function(e) {
                return C.contains(e.ownerDocument, e)
            }
              , ae = {
                composed: !0
            };
            oe.getRootNode && (re = function(e) {
                return C.contains(e.ownerDocument, e) || e.getRootNode(ae) === e.ownerDocument
            }
            );
            var le = function(e, t) {
                return "none" === (e = t || e).style.display || "" === e.style.display && re(e) && "none" === C.css(e, "display")
            };
            function ce(e, t, i, n) {
                var s, o, r = 20, a = n ? function() {
                    return n.cur()
                }
                : function() {
                    return C.css(e, t, "")
                }
                , l = a(), c = i && i[3] || (C.cssNumber[t] ? "" : "px"), d = e.nodeType && (C.cssNumber[t] || "px" !== c && +l) && ne.exec(C.css(e, t));
                if (d && d[3] !== c) {
                    for (l /= 2,
                    c = c || d[3],
                    d = +l || 1; r--; )
                        C.style(e, t, d + c),
                        (1 - o) * (1 - (o = a() / l || .5)) <= 0 && (r = 0),
                        d /= o;
                    d *= 2,
                    C.style(e, t, d + c),
                    i = i || []
                }
                return i && (d = +d || +l || 0,
                s = i[1] ? d + (i[1] + 1) * i[2] : +i[2],
                n && (n.unit = c,
                n.start = d,
                n.end = s)),
                s
            }
            var de = {};
            function ue(e) {
                var t, i = e.ownerDocument, n = e.nodeName, s = de[n];
                return s || (t = i.body.appendChild(i.createElement(n)),
                s = C.css(t, "display"),
                t.parentNode.removeChild(t),
                "none" === s && (s = "block"),
                de[n] = s,
                s)
            }
            function he(e, t) {
                for (var i, n, s = [], o = 0, r = e.length; o < r; o++)
                    (n = e[o]).style && (i = n.style.display,
                    t ? ("none" === i && (s[o] = G.get(n, "display") || null,
                    s[o] || (n.style.display = "")),
                    "" === n.style.display && le(n) && (s[o] = ue(n))) : "none" !== i && (s[o] = "none",
                    G.set(n, "display", i)));
                for (o = 0; o < r; o++)
                    null != s[o] && (e[o].style.display = s[o]);
                return e
            }
            C.fn.extend({
                show: function() {
                    return he(this, !0)
                },
                hide: function() {
                    return he(this)
                },
                toggle: function(e) {
                    return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each((function() {
                        le(this) ? C(this).show() : C(this).hide()
                    }
                    ))
                }
            });
            var pe, fe, me = /^(?:checkbox|radio)$/i, ge = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i, ye = /^$|^module$|\/(?:java|ecma)script/i;
            pe = b.createDocumentFragment().appendChild(b.createElement("div")),
            (fe = b.createElement("input")).setAttribute("type", "radio"),
            fe.setAttribute("checked", "checked"),
            fe.setAttribute("name", "t"),
            pe.appendChild(fe),
            g.checkClone = pe.cloneNode(!0).cloneNode(!0).lastChild.checked,
            pe.innerHTML = "<textarea>x</textarea>",
            g.noCloneChecked = !!pe.cloneNode(!0).lastChild.defaultValue,
            pe.innerHTML = "<option></option>",
            g.option = !!pe.lastChild;
            var ve = {
                thead: [1, "<table>", "</table>"],
                col: [2, "<table><colgroup>", "</colgroup></table>"],
                tr: [2, "<table><tbody>", "</tbody></table>"],
                td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
                _default: [0, "", ""]
            };
            function be(e, t) {
                var i;
                return i = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : [],
                void 0 === t || t && L(e, t) ? C.merge([e], i) : i
            }
            function we(e, t) {
                for (var i = 0, n = e.length; i < n; i++)
                    G.set(e[i], "globalEval", !t || G.get(t[i], "globalEval"))
            }
            ve.tbody = ve.tfoot = ve.colgroup = ve.caption = ve.thead,
            ve.th = ve.td,
            g.option || (ve.optgroup = ve.option = [1, "<select multiple='multiple'>", "</select>"]);
            var Te = /<|&#?\w+;/;
            function ke(e, t, i, n, s) {
                for (var o, r, a, l, c, d, u = t.createDocumentFragment(), h = [], p = 0, f = e.length; p < f; p++)
                    if ((o = e[p]) || 0 === o)
                        if ("object" === k(o))
                            C.merge(h, o.nodeType ? [o] : o);
                        else if (Te.test(o)) {
                            for (r = r || u.appendChild(t.createElement("div")),
                            a = (ge.exec(o) || ["", ""])[1].toLowerCase(),
                            l = ve[a] || ve._default,
                            r.innerHTML = l[1] + C.htmlPrefilter(o) + l[2],
                            d = l[0]; d--; )
                                r = r.lastChild;
                            C.merge(h, r.childNodes),
                            (r = u.firstChild).textContent = ""
                        } else
                            h.push(t.createTextNode(o));
                for (u.textContent = "",
                p = 0; o = h[p++]; )
                    if (n && C.inArray(o, n) > -1)
                        s && s.push(o);
                    else if (c = re(o),
                    r = be(u.appendChild(o), "script"),
                    c && we(r),
                    i)
                        for (d = 0; o = r[d++]; )
                            ye.test(o.type || "") && i.push(o);
                return u
            }
            var Ce = /^([^.]*)(?:\.(.+)|)/;
            function xe() {
                return !0
            }
            function _e() {
                return !1
            }
            function Ae(e, t) {
                return e === function() {
                    try {
                        return b.activeElement
                    } catch (e) {}
                }() == ("focus" === t)
            }
            function Ee(e, t, i, n, s, o) {
                var r, a;
                if ("object" == typeof t) {
                    for (a in "string" != typeof i && (n = n || i,
                    i = void 0),
                    t)
                        Ee(e, a, i, n, t[a], o);
                    return e
                }
                if (null == n && null == s ? (s = i,
                n = i = void 0) : null == s && ("string" == typeof i ? (s = n,
                n = void 0) : (s = n,
                n = i,
                i = void 0)),
                !1 === s)
                    s = _e;
                else if (!s)
                    return e;
                return 1 === o && (r = s,
                (s = function(e) {
                    return C().off(e),
                    r.apply(this, arguments)
                }
                ).guid = r.guid || (r.guid = C.guid++)),
                e.each((function() {
                    C.event.add(this, t, s, n, i)
                }
                ))
            }
            function Se(e, t, i) {
                i ? (G.set(e, t, !1),
                C.event.add(e, t, {
                    namespace: !1,
                    handler: function(e) {
                        var n, s, o = G.get(this, t);
                        if (1 & e.isTrigger && this[t]) {
                            if (o.length)
                                (C.event.special[t] || {}).delegateType && e.stopPropagation();
                            else if (o = a.call(arguments),
                            G.set(this, t, o),
                            n = i(this, t),
                            this[t](),
                            o !== (s = G.get(this, t)) || n ? G.set(this, t, !1) : s = {},
                            o !== s)
                                return e.stopImmediatePropagation(),
                                e.preventDefault(),
                                s && s.value
                        } else
                            o.length && (G.set(this, t, {
                                value: C.event.trigger(C.extend(o[0], C.Event.prototype), o.slice(1), this)
                            }),
                            e.stopImmediatePropagation())
                    }
                })) : void 0 === G.get(e, t) && C.event.add(e, t, xe)
            }
            C.event = {
                global: {},
                add: function(e, t, i, n, s) {
                    var o, r, a, l, c, d, u, h, p, f, m, g = G.get(e);
                    if (J(e))
                        for (i.handler && (i = (o = i).handler,
                        s = o.selector),
                        s && C.find.matchesSelector(oe, s),
                        i.guid || (i.guid = C.guid++),
                        (l = g.events) || (l = g.events = Object.create(null)),
                        (r = g.handle) || (r = g.handle = function(t) {
                            return void 0 !== C && C.event.triggered !== t.type ? C.event.dispatch.apply(e, arguments) : void 0
                        }
                        ),
                        c = (t = (t || "").match($) || [""]).length; c--; )
                            p = m = (a = Ce.exec(t[c]) || [])[1],
                            f = (a[2] || "").split(".").sort(),
                            p && (u = C.event.special[p] || {},
                            p = (s ? u.delegateType : u.bindType) || p,
                            u = C.event.special[p] || {},
                            d = C.extend({
                                type: p,
                                origType: m,
                                data: n,
                                handler: i,
                                guid: i.guid,
                                selector: s,
                                needsContext: s && C.expr.match.needsContext.test(s),
                                namespace: f.join(".")
                            }, o),
                            (h = l[p]) || ((h = l[p] = []).delegateCount = 0,
                            u.setup && !1 !== u.setup.call(e, n, f, r) || e.addEventListener && e.addEventListener(p, r)),
                            u.add && (u.add.call(e, d),
                            d.handler.guid || (d.handler.guid = i.guid)),
                            s ? h.splice(h.delegateCount++, 0, d) : h.push(d),
                            C.event.global[p] = !0)
                },
                remove: function(e, t, i, n, s) {
                    var o, r, a, l, c, d, u, h, p, f, m, g = G.hasData(e) && G.get(e);
                    if (g && (l = g.events)) {
                        for (c = (t = (t || "").match($) || [""]).length; c--; )
                            if (p = m = (a = Ce.exec(t[c]) || [])[1],
                            f = (a[2] || "").split(".").sort(),
                            p) {
                                for (u = C.event.special[p] || {},
                                h = l[p = (n ? u.delegateType : u.bindType) || p] || [],
                                a = a[2] && new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)"),
                                r = o = h.length; o--; )
                                    d = h[o],
                                    !s && m !== d.origType || i && i.guid !== d.guid || a && !a.test(d.namespace) || n && n !== d.selector && ("**" !== n || !d.selector) || (h.splice(o, 1),
                                    d.selector && h.delegateCount--,
                                    u.remove && u.remove.call(e, d));
                                r && !h.length && (u.teardown && !1 !== u.teardown.call(e, f, g.handle) || C.removeEvent(e, p, g.handle),
                                delete l[p])
                            } else
                                for (p in l)
                                    C.event.remove(e, p + t[c], i, n, !0);
                        C.isEmptyObject(l) && G.remove(e, "handle events")
                    }
                },
                dispatch: function(e) {
                    var t, i, n, s, o, r, a = new Array(arguments.length), l = C.event.fix(e), c = (G.get(this, "events") || Object.create(null))[l.type] || [], d = C.event.special[l.type] || {};
                    for (a[0] = l,
                    t = 1; t < arguments.length; t++)
                        a[t] = arguments[t];
                    if (l.delegateTarget = this,
                    !d.preDispatch || !1 !== d.preDispatch.call(this, l)) {
                        for (r = C.event.handlers.call(this, l, c),
                        t = 0; (s = r[t++]) && !l.isPropagationStopped(); )
                            for (l.currentTarget = s.elem,
                            i = 0; (o = s.handlers[i++]) && !l.isImmediatePropagationStopped(); )
                                l.rnamespace && !1 !== o.namespace && !l.rnamespace.test(o.namespace) || (l.handleObj = o,
                                l.data = o.data,
                                void 0 !== (n = ((C.event.special[o.origType] || {}).handle || o.handler).apply(s.elem, a)) && !1 === (l.result = n) && (l.preventDefault(),
                                l.stopPropagation()));
                        return d.postDispatch && d.postDispatch.call(this, l),
                        l.result
                    }
                },
                handlers: function(e, t) {
                    var i, n, s, o, r, a = [], l = t.delegateCount, c = e.target;
                    if (l && c.nodeType && !("click" === e.type && e.button >= 1))
                        for (; c !== this; c = c.parentNode || this)
                            if (1 === c.nodeType && ("click" !== e.type || !0 !== c.disabled)) {
                                for (o = [],
                                r = {},
                                i = 0; i < l; i++)
                                    void 0 === r[s = (n = t[i]).selector + " "] && (r[s] = n.needsContext ? C(s, this).index(c) > -1 : C.find(s, this, null, [c]).length),
                                    r[s] && o.push(n);
                                o.length && a.push({
                                    elem: c,
                                    handlers: o
                                })
                            }
                    return c = this,
                    l < t.length && a.push({
                        elem: c,
                        handlers: t.slice(l)
                    }),
                    a
                },
                addProp: function(e, t) {
                    Object.defineProperty(C.Event.prototype, e, {
                        enumerable: !0,
                        configurable: !0,
                        get: y(t) ? function() {
                            if (this.originalEvent)
                                return t(this.originalEvent)
                        }
                        : function() {
                            if (this.originalEvent)
                                return this.originalEvent[e]
                        }
                        ,
                        set: function(t) {
                            Object.defineProperty(this, e, {
                                enumerable: !0,
                                configurable: !0,
                                writable: !0,
                                value: t
                            })
                        }
                    })
                },
                fix: function(e) {
                    return e[C.expando] ? e : new C.Event(e)
                },
                special: {
                    load: {
                        noBubble: !0
                    },
                    click: {
                        setup: function(e) {
                            var t = this || e;
                            return me.test(t.type) && t.click && L(t, "input") && Se(t, "click", xe),
                            !1
                        },
                        trigger: function(e) {
                            var t = this || e;
                            return me.test(t.type) && t.click && L(t, "input") && Se(t, "click"),
                            !0
                        },
                        _default: function(e) {
                            var t = e.target;
                            return me.test(t.type) && t.click && L(t, "input") && G.get(t, "click") || L(t, "a")
                        }
                    },
                    beforeunload: {
                        postDispatch: function(e) {
                            void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                        }
                    }
                }
            },
            C.removeEvent = function(e, t, i) {
                e.removeEventListener && e.removeEventListener(t, i)
            }
            ,
            C.Event = function(e, t) {
                if (!(this instanceof C.Event))
                    return new C.Event(e,t);
                e && e.type ? (this.originalEvent = e,
                this.type = e.type,
                this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? xe : _e,
                this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target,
                this.currentTarget = e.currentTarget,
                this.relatedTarget = e.relatedTarget) : this.type = e,
                t && C.extend(this, t),
                this.timeStamp = e && e.timeStamp || Date.now(),
                this[C.expando] = !0
            }
            ,
            C.Event.prototype = {
                constructor: C.Event,
                isDefaultPrevented: _e,
                isPropagationStopped: _e,
                isImmediatePropagationStopped: _e,
                isSimulated: !1,
                preventDefault: function() {
                    var e = this.originalEvent;
                    this.isDefaultPrevented = xe,
                    e && !this.isSimulated && e.preventDefault()
                },
                stopPropagation: function() {
                    var e = this.originalEvent;
                    this.isPropagationStopped = xe,
                    e && !this.isSimulated && e.stopPropagation()
                },
                stopImmediatePropagation: function() {
                    var e = this.originalEvent;
                    this.isImmediatePropagationStopped = xe,
                    e && !this.isSimulated && e.stopImmediatePropagation(),
                    this.stopPropagation()
                }
            },
            C.each({
                altKey: !0,
                bubbles: !0,
                cancelable: !0,
                changedTouches: !0,
                ctrlKey: !0,
                detail: !0,
                eventPhase: !0,
                metaKey: !0,
                pageX: !0,
                pageY: !0,
                shiftKey: !0,
                view: !0,
                char: !0,
                code: !0,
                charCode: !0,
                key: !0,
                keyCode: !0,
                button: !0,
                buttons: !0,
                clientX: !0,
                clientY: !0,
                offsetX: !0,
                offsetY: !0,
                pointerId: !0,
                pointerType: !0,
                screenX: !0,
                screenY: !0,
                targetTouches: !0,
                toElement: !0,
                touches: !0,
                which: !0
            }, C.event.addProp),
            C.each({
                focus: "focusin",
                blur: "focusout"
            }, (function(e, t) {
                C.event.special[e] = {
                    setup: function() {
                        return Se(this, e, Ae),
                        !1
                    },
                    trigger: function() {
                        return Se(this, e),
                        !0
                    },
                    _default: function() {
                        return !0
                    },
                    delegateType: t
                }
            }
            )),
            C.each({
                mouseenter: "mouseover",
                mouseleave: "mouseout",
                pointerenter: "pointerover",
                pointerleave: "pointerout"
            }, (function(e, t) {
                C.event.special[e] = {
                    delegateType: t,
                    bindType: t,
                    handle: function(e) {
                        var i, n = this, s = e.relatedTarget, o = e.handleObj;
                        return s && (s === n || C.contains(n, s)) || (e.type = o.origType,
                        i = o.handler.apply(this, arguments),
                        e.type = t),
                        i
                    }
                }
            }
            )),
            C.fn.extend({
                on: function(e, t, i, n) {
                    return Ee(this, e, t, i, n)
                },
                one: function(e, t, i, n) {
                    return Ee(this, e, t, i, n, 1)
                },
                off: function(e, t, i) {
                    var n, s;
                    if (e && e.preventDefault && e.handleObj)
                        return n = e.handleObj,
                        C(e.delegateTarget).off(n.namespace ? n.origType + "." + n.namespace : n.origType, n.selector, n.handler),
                        this;
                    if ("object" == typeof e) {
                        for (s in e)
                            this.off(s, t, e[s]);
                        return this
                    }
                    return !1 !== t && "function" != typeof t || (i = t,
                    t = void 0),
                    !1 === i && (i = _e),
                    this.each((function() {
                        C.event.remove(this, e, i, t)
                    }
                    ))
                }
            });
            var Le = /<script|<style|<link/i
              , Pe = /checked\s*(?:[^=]|=\s*.checked.)/i
              , Oe = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
            function Ne(e, t) {
                return L(e, "table") && L(11 !== t.nodeType ? t : t.firstChild, "tr") && C(e).children("tbody")[0] || e
            }
            function De(e) {
                return e.type = (null !== e.getAttribute("type")) + "/" + e.type,
                e
            }
            function je(e) {
                return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"),
                e
            }
            function Me(e, t) {
                var i, n, s, o, r, a;
                if (1 === t.nodeType) {
                    if (G.hasData(e) && (a = G.get(e).events))
                        for (s in G.remove(t, "handle events"),
                        a)
                            for (i = 0,
                            n = a[s].length; i < n; i++)
                                C.event.add(t, s, a[s][i]);
                    K.hasData(e) && (o = K.access(e),
                    r = C.extend({}, o),
                    K.set(t, r))
                }
            }
            function Ie(e, t) {
                var i = t.nodeName.toLowerCase();
                "input" === i && me.test(e.type) ? t.checked = e.checked : "input" !== i && "textarea" !== i || (t.defaultValue = e.defaultValue)
            }
            function $e(e, t, i, n) {
                t = l(t);
                var s, o, r, a, c, d, u = 0, h = e.length, p = h - 1, f = t[0], m = y(f);
                if (m || h > 1 && "string" == typeof f && !g.checkClone && Pe.test(f))
                    return e.each((function(s) {
                        var o = e.eq(s);
                        m && (t[0] = f.call(this, s, o.html())),
                        $e(o, t, i, n)
                    }
                    ));
                if (h && (o = (s = ke(t, e[0].ownerDocument, !1, e, n)).firstChild,
                1 === s.childNodes.length && (s = o),
                o || n)) {
                    for (a = (r = C.map(be(s, "script"), De)).length; u < h; u++)
                        c = s,
                        u !== p && (c = C.clone(c, !0, !0),
                        a && C.merge(r, be(c, "script"))),
                        i.call(e[u], c, u);
                    if (a)
                        for (d = r[r.length - 1].ownerDocument,
                        C.map(r, je),
                        u = 0; u < a; u++)
                            c = r[u],
                            ye.test(c.type || "") && !G.access(c, "globalEval") && C.contains(d, c) && (c.src && "module" !== (c.type || "").toLowerCase() ? C._evalUrl && !c.noModule && C._evalUrl(c.src, {
                                nonce: c.nonce || c.getAttribute("nonce")
                            }, d) : T(c.textContent.replace(Oe, ""), c, d))
                }
                return e
            }
            function Re(e, t, i) {
                for (var n, s = t ? C.filter(t, e) : e, o = 0; null != (n = s[o]); o++)
                    i || 1 !== n.nodeType || C.cleanData(be(n)),
                    n.parentNode && (i && re(n) && we(be(n, "script")),
                    n.parentNode.removeChild(n));
                return e
            }
            C.extend({
                htmlPrefilter: function(e) {
                    return e
                },
                clone: function(e, t, i) {
                    var n, s, o, r, a = e.cloneNode(!0), l = re(e);
                    if (!(g.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || C.isXMLDoc(e)))
                        for (r = be(a),
                        n = 0,
                        s = (o = be(e)).length; n < s; n++)
                            Ie(o[n], r[n]);
                    if (t)
                        if (i)
                            for (o = o || be(e),
                            r = r || be(a),
                            n = 0,
                            s = o.length; n < s; n++)
                                Me(o[n], r[n]);
                        else
                            Me(e, a);
                    return (r = be(a, "script")).length > 0 && we(r, !l && be(e, "script")),
                    a
                },
                cleanData: function(e) {
                    for (var t, i, n, s = C.event.special, o = 0; void 0 !== (i = e[o]); o++)
                        if (J(i)) {
                            if (t = i[G.expando]) {
                                if (t.events)
                                    for (n in t.events)
                                        s[n] ? C.event.remove(i, n) : C.removeEvent(i, n, t.handle);
                                i[G.expando] = void 0
                            }
                            i[K.expando] && (i[K.expando] = void 0)
                        }
                }
            }),
            C.fn.extend({
                detach: function(e) {
                    return Re(this, e, !0)
                },
                remove: function(e) {
                    return Re(this, e)
                },
                text: function(e) {
                    return z(this, (function(e) {
                        return void 0 === e ? C.text(this) : this.empty().each((function() {
                            1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
                        }
                        ))
                    }
                    ), null, e, arguments.length)
                },
                append: function() {
                    return $e(this, arguments, (function(e) {
                        1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || Ne(this, e).appendChild(e)
                    }
                    ))
                },
                prepend: function() {
                    return $e(this, arguments, (function(e) {
                        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                            var t = Ne(this, e);
                            t.insertBefore(e, t.firstChild)
                        }
                    }
                    ))
                },
                before: function() {
                    return $e(this, arguments, (function(e) {
                        this.parentNode && this.parentNode.insertBefore(e, this)
                    }
                    ))
                },
                after: function() {
                    return $e(this, arguments, (function(e) {
                        this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
                    }
                    ))
                },
                empty: function() {
                    for (var e, t = 0; null != (e = this[t]); t++)
                        1 === e.nodeType && (C.cleanData(be(e, !1)),
                        e.textContent = "");
                    return this
                },
                clone: function(e, t) {
                    return e = null != e && e,
                    t = null == t ? e : t,
                    this.map((function() {
                        return C.clone(this, e, t)
                    }
                    ))
                },
                html: function(e) {
                    return z(this, (function(e) {
                        var t = this[0] || {}
                          , i = 0
                          , n = this.length;
                        if (void 0 === e && 1 === t.nodeType)
                            return t.innerHTML;
                        if ("string" == typeof e && !Le.test(e) && !ve[(ge.exec(e) || ["", ""])[1].toLowerCase()]) {
                            e = C.htmlPrefilter(e);
                            try {
                                for (; i < n; i++)
                                    1 === (t = this[i] || {}).nodeType && (C.cleanData(be(t, !1)),
                                    t.innerHTML = e);
                                t = 0
                            } catch (e) {}
                        }
                        t && this.empty().append(e)
                    }
                    ), null, e, arguments.length)
                },
                replaceWith: function() {
                    var e = [];
                    return $e(this, arguments, (function(t) {
                        var i = this.parentNode;
                        C.inArray(this, e) < 0 && (C.cleanData(be(this)),
                        i && i.replaceChild(t, this))
                    }
                    ), e)
                }
            }),
            C.each({
                appendTo: "append",
                prependTo: "prepend",
                insertBefore: "before",
                insertAfter: "after",
                replaceAll: "replaceWith"
            }, (function(e, t) {
                C.fn[e] = function(e) {
                    for (var i, n = [], s = C(e), o = s.length - 1, r = 0; r <= o; r++)
                        i = r === o ? this : this.clone(!0),
                        C(s[r])[t](i),
                        c.apply(n, i.get());
                    return this.pushStack(n)
                }
            }
            ));
            var He = new RegExp("^(" + ie + ")(?!px)[a-z%]+$","i")
              , Fe = function(e) {
                var t = e.ownerDocument.defaultView;
                return t && t.opener || (t = i),
                t.getComputedStyle(e)
            }
              , qe = function(e, t, i) {
                var n, s, o = {};
                for (s in t)
                    o[s] = e.style[s],
                    e.style[s] = t[s];
                for (s in n = i.call(e),
                t)
                    e.style[s] = o[s];
                return n
            }
              , Ve = new RegExp(se.join("|"),"i");
            function Be(e, t, i) {
                var n, s, o, r, a = e.style;
                return (i = i || Fe(e)) && ("" !== (r = i.getPropertyValue(t) || i[t]) || re(e) || (r = C.style(e, t)),
                !g.pixelBoxStyles() && He.test(r) && Ve.test(t) && (n = a.width,
                s = a.minWidth,
                o = a.maxWidth,
                a.minWidth = a.maxWidth = a.width = r,
                r = i.width,
                a.width = n,
                a.minWidth = s,
                a.maxWidth = o)),
                void 0 !== r ? r + "" : r
            }
            function ze(e, t) {
                return {
                    get: function() {
                        if (!e())
                            return (this.get = t).apply(this, arguments);
                        delete this.get
                    }
                }
            }
            !function() {
                function e() {
                    if (d) {
                        c.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",
                        d.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",
                        oe.appendChild(c).appendChild(d);
                        var e = i.getComputedStyle(d);
                        n = "1%" !== e.top,
                        l = 12 === t(e.marginLeft),
                        d.style.right = "60%",
                        r = 36 === t(e.right),
                        s = 36 === t(e.width),
                        d.style.position = "absolute",
                        o = 12 === t(d.offsetWidth / 3),
                        oe.removeChild(c),
                        d = null
                    }
                }
                function t(e) {
                    return Math.round(parseFloat(e))
                }
                var n, s, o, r, a, l, c = b.createElement("div"), d = b.createElement("div");
                d.style && (d.style.backgroundClip = "content-box",
                d.cloneNode(!0).style.backgroundClip = "",
                g.clearCloneStyle = "content-box" === d.style.backgroundClip,
                C.extend(g, {
                    boxSizingReliable: function() {
                        return e(),
                        s
                    },
                    pixelBoxStyles: function() {
                        return e(),
                        r
                    },
                    pixelPosition: function() {
                        return e(),
                        n
                    },
                    reliableMarginLeft: function() {
                        return e(),
                        l
                    },
                    scrollboxSize: function() {
                        return e(),
                        o
                    },
                    reliableTrDimensions: function() {
                        var e, t, n, s;
                        return null == a && (e = b.createElement("table"),
                        t = b.createElement("tr"),
                        n = b.createElement("div"),
                        e.style.cssText = "position:absolute;left:-11111px;border-collapse:separate",
                        t.style.cssText = "border:1px solid",
                        t.style.height = "1px",
                        n.style.height = "9px",
                        n.style.display = "block",
                        oe.appendChild(e).appendChild(t).appendChild(n),
                        s = i.getComputedStyle(t),
                        a = parseInt(s.height, 10) + parseInt(s.borderTopWidth, 10) + parseInt(s.borderBottomWidth, 10) === t.offsetHeight,
                        oe.removeChild(e)),
                        a
                    }
                }))
            }();
            var We = ["Webkit", "Moz", "ms"]
              , Ue = b.createElement("div").style
              , Ye = {};
            function Xe(e) {
                var t = C.cssProps[e] || Ye[e];
                return t || (e in Ue ? e : Ye[e] = function(e) {
                    for (var t = e[0].toUpperCase() + e.slice(1), i = We.length; i--; )
                        if ((e = We[i] + t)in Ue)
                            return e
                }(e) || e)
            }
            var Je = /^(none|table(?!-c[ea]).+)/
              , Ze = /^--/
              , Ge = {
                position: "absolute",
                visibility: "hidden",
                display: "block"
            }
              , Ke = {
                letterSpacing: "0",
                fontWeight: "400"
            };
            function Qe(e, t, i) {
                var n = ne.exec(t);
                return n ? Math.max(0, n[2] - (i || 0)) + (n[3] || "px") : t
            }
            function et(e, t, i, n, s, o) {
                var r = "width" === t ? 1 : 0
                  , a = 0
                  , l = 0;
                if (i === (n ? "border" : "content"))
                    return 0;
                for (; r < 4; r += 2)
                    "margin" === i && (l += C.css(e, i + se[r], !0, s)),
                    n ? ("content" === i && (l -= C.css(e, "padding" + se[r], !0, s)),
                    "margin" !== i && (l -= C.css(e, "border" + se[r] + "Width", !0, s))) : (l += C.css(e, "padding" + se[r], !0, s),
                    "padding" !== i ? l += C.css(e, "border" + se[r] + "Width", !0, s) : a += C.css(e, "border" + se[r] + "Width", !0, s));
                return !n && o >= 0 && (l += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - o - l - a - .5)) || 0),
                l
            }
            function tt(e, t, i) {
                var n = Fe(e)
                  , s = (!g.boxSizingReliable() || i) && "border-box" === C.css(e, "boxSizing", !1, n)
                  , o = s
                  , r = Be(e, t, n)
                  , a = "offset" + t[0].toUpperCase() + t.slice(1);
                if (He.test(r)) {
                    if (!i)
                        return r;
                    r = "auto"
                }
                return (!g.boxSizingReliable() && s || !g.reliableTrDimensions() && L(e, "tr") || "auto" === r || !parseFloat(r) && "inline" === C.css(e, "display", !1, n)) && e.getClientRects().length && (s = "border-box" === C.css(e, "boxSizing", !1, n),
                (o = a in e) && (r = e[a])),
                (r = parseFloat(r) || 0) + et(e, t, i || (s ? "border" : "content"), o, n, r) + "px"
            }
            function it(e, t, i, n, s) {
                return new it.prototype.init(e,t,i,n,s)
            }
            C.extend({
                cssHooks: {
                    opacity: {
                        get: function(e, t) {
                            if (t) {
                                var i = Be(e, "opacity");
                                return "" === i ? "1" : i
                            }
                        }
                    }
                },
                cssNumber: {
                    animationIterationCount: !0,
                    columnCount: !0,
                    fillOpacity: !0,
                    flexGrow: !0,
                    flexShrink: !0,
                    fontWeight: !0,
                    gridArea: !0,
                    gridColumn: !0,
                    gridColumnEnd: !0,
                    gridColumnStart: !0,
                    gridRow: !0,
                    gridRowEnd: !0,
                    gridRowStart: !0,
                    lineHeight: !0,
                    opacity: !0,
                    order: !0,
                    orphans: !0,
                    widows: !0,
                    zIndex: !0,
                    zoom: !0
                },
                cssProps: {},
                style: function(e, t, i, n) {
                    if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                        var s, o, r, a = X(t), l = Ze.test(t), c = e.style;
                        if (l || (t = Xe(a)),
                        r = C.cssHooks[t] || C.cssHooks[a],
                        void 0 === i)
                            return r && "get"in r && void 0 !== (s = r.get(e, !1, n)) ? s : c[t];
                        "string" === (o = typeof i) && (s = ne.exec(i)) && s[1] && (i = ce(e, t, s),
                        o = "number"),
                        null != i && i == i && ("number" !== o || l || (i += s && s[3] || (C.cssNumber[a] ? "" : "px")),
                        g.clearCloneStyle || "" !== i || 0 !== t.indexOf("background") || (c[t] = "inherit"),
                        r && "set"in r && void 0 === (i = r.set(e, i, n)) || (l ? c.setProperty(t, i) : c[t] = i))
                    }
                },
                css: function(e, t, i, n) {
                    var s, o, r, a = X(t);
                    return Ze.test(t) || (t = Xe(a)),
                    (r = C.cssHooks[t] || C.cssHooks[a]) && "get"in r && (s = r.get(e, !0, i)),
                    void 0 === s && (s = Be(e, t, n)),
                    "normal" === s && t in Ke && (s = Ke[t]),
                    "" === i || i ? (o = parseFloat(s),
                    !0 === i || isFinite(o) ? o || 0 : s) : s
                }
            }),
            C.each(["height", "width"], (function(e, t) {
                C.cssHooks[t] = {
                    get: function(e, i, n) {
                        if (i)
                            return !Je.test(C.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? tt(e, t, n) : qe(e, Ge, (function() {
                                return tt(e, t, n)
                            }
                            ))
                    },
                    set: function(e, i, n) {
                        var s, o = Fe(e), r = !g.scrollboxSize() && "absolute" === o.position, a = (r || n) && "border-box" === C.css(e, "boxSizing", !1, o), l = n ? et(e, t, n, a, o) : 0;
                        return a && r && (l -= Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - parseFloat(o[t]) - et(e, t, "border", !1, o) - .5)),
                        l && (s = ne.exec(i)) && "px" !== (s[3] || "px") && (e.style[t] = i,
                        i = C.css(e, t)),
                        Qe(0, i, l)
                    }
                }
            }
            )),
            C.cssHooks.marginLeft = ze(g.reliableMarginLeft, (function(e, t) {
                if (t)
                    return (parseFloat(Be(e, "marginLeft")) || e.getBoundingClientRect().left - qe(e, {
                        marginLeft: 0
                    }, (function() {
                        return e.getBoundingClientRect().left
                    }
                    ))) + "px"
            }
            )),
            C.each({
                margin: "",
                padding: "",
                border: "Width"
            }, (function(e, t) {
                C.cssHooks[e + t] = {
                    expand: function(i) {
                        for (var n = 0, s = {}, o = "string" == typeof i ? i.split(" ") : [i]; n < 4; n++)
                            s[e + se[n] + t] = o[n] || o[n - 2] || o[0];
                        return s
                    }
                },
                "margin" !== e && (C.cssHooks[e + t].set = Qe)
            }
            )),
            C.fn.extend({
                css: function(e, t) {
                    return z(this, (function(e, t, i) {
                        var n, s, o = {}, r = 0;
                        if (Array.isArray(t)) {
                            for (n = Fe(e),
                            s = t.length; r < s; r++)
                                o[t[r]] = C.css(e, t[r], !1, n);
                            return o
                        }
                        return void 0 !== i ? C.style(e, t, i) : C.css(e, t)
                    }
                    ), e, t, arguments.length > 1)
                }
            }),
            C.Tween = it,
            it.prototype = {
                constructor: it,
                init: function(e, t, i, n, s, o) {
                    this.elem = e,
                    this.prop = i,
                    this.easing = s || C.easing._default,
                    this.options = t,
                    this.start = this.now = this.cur(),
                    this.end = n,
                    this.unit = o || (C.cssNumber[i] ? "" : "px")
                },
                cur: function() {
                    var e = it.propHooks[this.prop];
                    return e && e.get ? e.get(this) : it.propHooks._default.get(this)
                },
                run: function(e) {
                    var t, i = it.propHooks[this.prop];
                    return this.options.duration ? this.pos = t = C.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e,
                    this.now = (this.end - this.start) * t + this.start,
                    this.options.step && this.options.step.call(this.elem, this.now, this),
                    i && i.set ? i.set(this) : it.propHooks._default.set(this),
                    this
                }
            },
            it.prototype.init.prototype = it.prototype,
            it.propHooks = {
                _default: {
                    get: function(e) {
                        var t;
                        return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = C.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0
                    },
                    set: function(e) {
                        C.fx.step[e.prop] ? C.fx.step[e.prop](e) : 1 !== e.elem.nodeType || !C.cssHooks[e.prop] && null == e.elem.style[Xe(e.prop)] ? e.elem[e.prop] = e.now : C.style(e.elem, e.prop, e.now + e.unit)
                    }
                }
            },
            it.propHooks.scrollTop = it.propHooks.scrollLeft = {
                set: function(e) {
                    e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
                }
            },
            C.easing = {
                linear: function(e) {
                    return e
                },
                swing: function(e) {
                    return .5 - Math.cos(e * Math.PI) / 2
                },
                _default: "swing"
            },
            C.fx = it.prototype.init,
            C.fx.step = {};
            var nt, st, ot = /^(?:toggle|show|hide)$/, rt = /queueHooks$/;
            function at() {
                st && (!1 === b.hidden && i.requestAnimationFrame ? i.requestAnimationFrame(at) : i.setTimeout(at, C.fx.interval),
                C.fx.tick())
            }
            function lt() {
                return i.setTimeout((function() {
                    nt = void 0
                }
                )),
                nt = Date.now()
            }
            function ct(e, t) {
                var i, n = 0, s = {
                    height: e
                };
                for (t = t ? 1 : 0; n < 4; n += 2 - t)
                    s["margin" + (i = se[n])] = s["padding" + i] = e;
                return t && (s.opacity = s.width = e),
                s
            }
            function dt(e, t, i) {
                for (var n, s = (ut.tweeners[t] || []).concat(ut.tweeners["*"]), o = 0, r = s.length; o < r; o++)
                    if (n = s[o].call(i, t, e))
                        return n
            }
            function ut(e, t, i) {
                var n, s, o = 0, r = ut.prefilters.length, a = C.Deferred().always((function() {
                    delete l.elem
                }
                )), l = function() {
                    if (s)
                        return !1;
                    for (var t = nt || lt(), i = Math.max(0, c.startTime + c.duration - t), n = 1 - (i / c.duration || 0), o = 0, r = c.tweens.length; o < r; o++)
                        c.tweens[o].run(n);
                    return a.notifyWith(e, [c, n, i]),
                    n < 1 && r ? i : (r || a.notifyWith(e, [c, 1, 0]),
                    a.resolveWith(e, [c]),
                    !1)
                }, c = a.promise({
                    elem: e,
                    props: C.extend({}, t),
                    opts: C.extend(!0, {
                        specialEasing: {},
                        easing: C.easing._default
                    }, i),
                    originalProperties: t,
                    originalOptions: i,
                    startTime: nt || lt(),
                    duration: i.duration,
                    tweens: [],
                    createTween: function(t, i) {
                        var n = C.Tween(e, c.opts, t, i, c.opts.specialEasing[t] || c.opts.easing);
                        return c.tweens.push(n),
                        n
                    },
                    stop: function(t) {
                        var i = 0
                          , n = t ? c.tweens.length : 0;
                        if (s)
                            return this;
                        for (s = !0; i < n; i++)
                            c.tweens[i].run(1);
                        return t ? (a.notifyWith(e, [c, 1, 0]),
                        a.resolveWith(e, [c, t])) : a.rejectWith(e, [c, t]),
                        this
                    }
                }), d = c.props;
                for (!function(e, t) {
                    var i, n, s, o, r;
                    for (i in e)
                        if (s = t[n = X(i)],
                        o = e[i],
                        Array.isArray(o) && (s = o[1],
                        o = e[i] = o[0]),
                        i !== n && (e[n] = o,
                        delete e[i]),
                        (r = C.cssHooks[n]) && "expand"in r)
                            for (i in o = r.expand(o),
                            delete e[n],
                            o)
                                i in e || (e[i] = o[i],
                                t[i] = s);
                        else
                            t[n] = s
                }(d, c.opts.specialEasing); o < r; o++)
                    if (n = ut.prefilters[o].call(c, e, d, c.opts))
                        return y(n.stop) && (C._queueHooks(c.elem, c.opts.queue).stop = n.stop.bind(n)),
                        n;
                return C.map(d, dt, c),
                y(c.opts.start) && c.opts.start.call(e, c),
                c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always),
                C.fx.timer(C.extend(l, {
                    elem: e,
                    anim: c,
                    queue: c.opts.queue
                })),
                c
            }
            C.Animation = C.extend(ut, {
                tweeners: {
                    "*": [function(e, t) {
                        var i = this.createTween(e, t);
                        return ce(i.elem, e, ne.exec(t), i),
                        i
                    }
                    ]
                },
                tweener: function(e, t) {
                    y(e) ? (t = e,
                    e = ["*"]) : e = e.match($);
                    for (var i, n = 0, s = e.length; n < s; n++)
                        i = e[n],
                        ut.tweeners[i] = ut.tweeners[i] || [],
                        ut.tweeners[i].unshift(t)
                },
                prefilters: [function(e, t, i) {
                    var n, s, o, r, a, l, c, d, u = "width"in t || "height"in t, h = this, p = {}, f = e.style, m = e.nodeType && le(e), g = G.get(e, "fxshow");
                    for (n in i.queue || (null == (r = C._queueHooks(e, "fx")).unqueued && (r.unqueued = 0,
                    a = r.empty.fire,
                    r.empty.fire = function() {
                        r.unqueued || a()
                    }
                    ),
                    r.unqueued++,
                    h.always((function() {
                        h.always((function() {
                            r.unqueued--,
                            C.queue(e, "fx").length || r.empty.fire()
                        }
                        ))
                    }
                    ))),
                    t)
                        if (s = t[n],
                        ot.test(s)) {
                            if (delete t[n],
                            o = o || "toggle" === s,
                            s === (m ? "hide" : "show")) {
                                if ("show" !== s || !g || void 0 === g[n])
                                    continue;
                                m = !0
                            }
                            p[n] = g && g[n] || C.style(e, n)
                        }
                    if ((l = !C.isEmptyObject(t)) || !C.isEmptyObject(p))
                        for (n in u && 1 === e.nodeType && (i.overflow = [f.overflow, f.overflowX, f.overflowY],
                        null == (c = g && g.display) && (c = G.get(e, "display")),
                        "none" === (d = C.css(e, "display")) && (c ? d = c : (he([e], !0),
                        c = e.style.display || c,
                        d = C.css(e, "display"),
                        he([e]))),
                        ("inline" === d || "inline-block" === d && null != c) && "none" === C.css(e, "float") && (l || (h.done((function() {
                            f.display = c
                        }
                        )),
                        null == c && (d = f.display,
                        c = "none" === d ? "" : d)),
                        f.display = "inline-block")),
                        i.overflow && (f.overflow = "hidden",
                        h.always((function() {
                            f.overflow = i.overflow[0],
                            f.overflowX = i.overflow[1],
                            f.overflowY = i.overflow[2]
                        }
                        ))),
                        l = !1,
                        p)
                            l || (g ? "hidden"in g && (m = g.hidden) : g = G.access(e, "fxshow", {
                                display: c
                            }),
                            o && (g.hidden = !m),
                            m && he([e], !0),
                            h.done((function() {
                                for (n in m || he([e]),
                                G.remove(e, "fxshow"),
                                p)
                                    C.style(e, n, p[n])
                            }
                            ))),
                            l = dt(m ? g[n] : 0, n, h),
                            n in g || (g[n] = l.start,
                            m && (l.end = l.start,
                            l.start = 0))
                }
                ],
                prefilter: function(e, t) {
                    t ? ut.prefilters.unshift(e) : ut.prefilters.push(e)
                }
            }),
            C.speed = function(e, t, i) {
                var n = e && "object" == typeof e ? C.extend({}, e) : {
                    complete: i || !i && t || y(e) && e,
                    duration: e,
                    easing: i && t || t && !y(t) && t
                };
                return C.fx.off ? n.duration = 0 : "number" != typeof n.duration && (n.duration in C.fx.speeds ? n.duration = C.fx.speeds[n.duration] : n.duration = C.fx.speeds._default),
                null != n.queue && !0 !== n.queue || (n.queue = "fx"),
                n.old = n.complete,
                n.complete = function() {
                    y(n.old) && n.old.call(this),
                    n.queue && C.dequeue(this, n.queue)
                }
                ,
                n
            }
            ,
            C.fn.extend({
                fadeTo: function(e, t, i, n) {
                    return this.filter(le).css("opacity", 0).show().end().animate({
                        opacity: t
                    }, e, i, n)
                },
                animate: function(e, t, i, n) {
                    var s = C.isEmptyObject(e)
                      , o = C.speed(t, i, n)
                      , r = function() {
                        var t = ut(this, C.extend({}, e), o);
                        (s || G.get(this, "finish")) && t.stop(!0)
                    };
                    return r.finish = r,
                    s || !1 === o.queue ? this.each(r) : this.queue(o.queue, r)
                },
                stop: function(e, t, i) {
                    var n = function(e) {
                        var t = e.stop;
                        delete e.stop,
                        t(i)
                    };
                    return "string" != typeof e && (i = t,
                    t = e,
                    e = void 0),
                    t && this.queue(e || "fx", []),
                    this.each((function() {
                        var t = !0
                          , s = null != e && e + "queueHooks"
                          , o = C.timers
                          , r = G.get(this);
                        if (s)
                            r[s] && r[s].stop && n(r[s]);
                        else
                            for (s in r)
                                r[s] && r[s].stop && rt.test(s) && n(r[s]);
                        for (s = o.length; s--; )
                            o[s].elem !== this || null != e && o[s].queue !== e || (o[s].anim.stop(i),
                            t = !1,
                            o.splice(s, 1));
                        !t && i || C.dequeue(this, e)
                    }
                    ))
                },
                finish: function(e) {
                    return !1 !== e && (e = e || "fx"),
                    this.each((function() {
                        var t, i = G.get(this), n = i[e + "queue"], s = i[e + "queueHooks"], o = C.timers, r = n ? n.length : 0;
                        for (i.finish = !0,
                        C.queue(this, e, []),
                        s && s.stop && s.stop.call(this, !0),
                        t = o.length; t--; )
                            o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0),
                            o.splice(t, 1));
                        for (t = 0; t < r; t++)
                            n[t] && n[t].finish && n[t].finish.call(this);
                        delete i.finish
                    }
                    ))
                }
            }),
            C.each(["toggle", "show", "hide"], (function(e, t) {
                var i = C.fn[t];
                C.fn[t] = function(e, n, s) {
                    return null == e || "boolean" == typeof e ? i.apply(this, arguments) : this.animate(ct(t, !0), e, n, s)
                }
            }
            )),
            C.each({
                slideDown: ct("show"),
                slideUp: ct("hide"),
                slideToggle: ct("toggle"),
                fadeIn: {
                    opacity: "show"
                },
                fadeOut: {
                    opacity: "hide"
                },
                fadeToggle: {
                    opacity: "toggle"
                }
            }, (function(e, t) {
                C.fn[e] = function(e, i, n) {
                    return this.animate(t, e, i, n)
                }
            }
            )),
            C.timers = [],
            C.fx.tick = function() {
                var e, t = 0, i = C.timers;
                for (nt = Date.now(); t < i.length; t++)
                    (e = i[t])() || i[t] !== e || i.splice(t--, 1);
                i.length || C.fx.stop(),
                nt = void 0
            }
            ,
            C.fx.timer = function(e) {
                C.timers.push(e),
                C.fx.start()
            }
            ,
            C.fx.interval = 13,
            C.fx.start = function() {
                st || (st = !0,
                at())
            }
            ,
            C.fx.stop = function() {
                st = null
            }
            ,
            C.fx.speeds = {
                slow: 600,
                fast: 200,
                _default: 400
            },
            C.fn.delay = function(e, t) {
                return e = C.fx && C.fx.speeds[e] || e,
                t = t || "fx",
                this.queue(t, (function(t, n) {
                    var s = i.setTimeout(t, e);
                    n.stop = function() {
                        i.clearTimeout(s)
                    }
                }
                ))
            }
            ,
            function() {
                var e = b.createElement("input")
                  , t = b.createElement("select").appendChild(b.createElement("option"));
                e.type = "checkbox",
                g.checkOn = "" !== e.value,
                g.optSelected = t.selected,
                (e = b.createElement("input")).value = "t",
                e.type = "radio",
                g.radioValue = "t" === e.value
            }();
            var ht, pt = C.expr.attrHandle;
            C.fn.extend({
                attr: function(e, t) {
                    return z(this, C.attr, e, t, arguments.length > 1)
                },
                removeAttr: function(e) {
                    return this.each((function() {
                        C.removeAttr(this, e)
                    }
                    ))
                }
            }),
            C.extend({
                attr: function(e, t, i) {
                    var n, s, o = e.nodeType;
                    if (3 !== o && 8 !== o && 2 !== o)
                        return void 0 === e.getAttribute ? C.prop(e, t, i) : (1 === o && C.isXMLDoc(e) || (s = C.attrHooks[t.toLowerCase()] || (C.expr.match.bool.test(t) ? ht : void 0)),
                        void 0 !== i ? null === i ? void C.removeAttr(e, t) : s && "set"in s && void 0 !== (n = s.set(e, i, t)) ? n : (e.setAttribute(t, i + ""),
                        i) : s && "get"in s && null !== (n = s.get(e, t)) ? n : null == (n = C.find.attr(e, t)) ? void 0 : n)
                },
                attrHooks: {
                    type: {
                        set: function(e, t) {
                            if (!g.radioValue && "radio" === t && L(e, "input")) {
                                var i = e.value;
                                return e.setAttribute("type", t),
                                i && (e.value = i),
                                t
                            }
                        }
                    }
                },
                removeAttr: function(e, t) {
                    var i, n = 0, s = t && t.match($);
                    if (s && 1 === e.nodeType)
                        for (; i = s[n++]; )
                            e.removeAttribute(i)
                }
            }),
            ht = {
                set: function(e, t, i) {
                    return !1 === t ? C.removeAttr(e, i) : e.setAttribute(i, i),
                    i
                }
            },
            C.each(C.expr.match.bool.source.match(/\w+/g), (function(e, t) {
                var i = pt[t] || C.find.attr;
                pt[t] = function(e, t, n) {
                    var s, o, r = t.toLowerCase();
                    return n || (o = pt[r],
                    pt[r] = s,
                    s = null != i(e, t, n) ? r : null,
                    pt[r] = o),
                    s
                }
            }
            ));
            var ft = /^(?:input|select|textarea|button)$/i
              , mt = /^(?:a|area)$/i;
            function gt(e) {
                return (e.match($) || []).join(" ")
            }
            function yt(e) {
                return e.getAttribute && e.getAttribute("class") || ""
            }
            function vt(e) {
                return Array.isArray(e) ? e : "string" == typeof e && e.match($) || []
            }
            C.fn.extend({
                prop: function(e, t) {
                    return z(this, C.prop, e, t, arguments.length > 1)
                },
                removeProp: function(e) {
                    return this.each((function() {
                        delete this[C.propFix[e] || e]
                    }
                    ))
                }
            }),
            C.extend({
                prop: function(e, t, i) {
                    var n, s, o = e.nodeType;
                    if (3 !== o && 8 !== o && 2 !== o)
                        return 1 === o && C.isXMLDoc(e) || (t = C.propFix[t] || t,
                        s = C.propHooks[t]),
                        void 0 !== i ? s && "set"in s && void 0 !== (n = s.set(e, i, t)) ? n : e[t] = i : s && "get"in s && null !== (n = s.get(e, t)) ? n : e[t]
                },
                propHooks: {
                    tabIndex: {
                        get: function(e) {
                            var t = C.find.attr(e, "tabindex");
                            return t ? parseInt(t, 10) : ft.test(e.nodeName) || mt.test(e.nodeName) && e.href ? 0 : -1
                        }
                    }
                },
                propFix: {
                    for: "htmlFor",
                    class: "className"
                }
            }),
            g.optSelected || (C.propHooks.selected = {
                get: function(e) {
                    var t = e.parentNode;
                    return t && t.parentNode && t.parentNode.selectedIndex,
                    null
                },
                set: function(e) {
                    var t = e.parentNode;
                    t && (t.selectedIndex,
                    t.parentNode && t.parentNode.selectedIndex)
                }
            }),
            C.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], (function() {
                C.propFix[this.toLowerCase()] = this
            }
            )),
            C.fn.extend({
                addClass: function(e) {
                    var t, i, n, s, o, r, a, l = 0;
                    if (y(e))
                        return this.each((function(t) {
                            C(this).addClass(e.call(this, t, yt(this)))
                        }
                        ));
                    if ((t = vt(e)).length)
                        for (; i = this[l++]; )
                            if (s = yt(i),
                            n = 1 === i.nodeType && " " + gt(s) + " ") {
                                for (r = 0; o = t[r++]; )
                                    n.indexOf(" " + o + " ") < 0 && (n += o + " ");
                                s !== (a = gt(n)) && i.setAttribute("class", a)
                            }
                    return this
                },
                removeClass: function(e) {
                    var t, i, n, s, o, r, a, l = 0;
                    if (y(e))
                        return this.each((function(t) {
                            C(this).removeClass(e.call(this, t, yt(this)))
                        }
                        ));
                    if (!arguments.length)
                        return this.attr("class", "");
                    if ((t = vt(e)).length)
                        for (; i = this[l++]; )
                            if (s = yt(i),
                            n = 1 === i.nodeType && " " + gt(s) + " ") {
                                for (r = 0; o = t[r++]; )
                                    for (; n.indexOf(" " + o + " ") > -1; )
                                        n = n.replace(" " + o + " ", " ");
                                s !== (a = gt(n)) && i.setAttribute("class", a)
                            }
                    return this
                },
                toggleClass: function(e, t) {
                    var i = typeof e
                      , n = "string" === i || Array.isArray(e);
                    return "boolean" == typeof t && n ? t ? this.addClass(e) : this.removeClass(e) : y(e) ? this.each((function(i) {
                        C(this).toggleClass(e.call(this, i, yt(this), t), t)
                    }
                    )) : this.each((function() {
                        var t, s, o, r;
                        if (n)
                            for (s = 0,
                            o = C(this),
                            r = vt(e); t = r[s++]; )
                                o.hasClass(t) ? o.removeClass(t) : o.addClass(t);
                        else
                            void 0 !== e && "boolean" !== i || ((t = yt(this)) && G.set(this, "__className__", t),
                            this.setAttribute && this.setAttribute("class", t || !1 === e ? "" : G.get(this, "__className__") || ""))
                    }
                    ))
                },
                hasClass: function(e) {
                    var t, i, n = 0;
                    for (t = " " + e + " "; i = this[n++]; )
                        if (1 === i.nodeType && (" " + gt(yt(i)) + " ").indexOf(t) > -1)
                            return !0;
                    return !1
                }
            });
            var bt = /\r/g;
            C.fn.extend({
                val: function(e) {
                    var t, i, n, s = this[0];
                    return arguments.length ? (n = y(e),
                    this.each((function(i) {
                        var s;
                        1 === this.nodeType && (null == (s = n ? e.call(this, i, C(this).val()) : e) ? s = "" : "number" == typeof s ? s += "" : Array.isArray(s) && (s = C.map(s, (function(e) {
                            return null == e ? "" : e + ""
                        }
                        ))),
                        (t = C.valHooks[this.type] || C.valHooks[this.nodeName.toLowerCase()]) && "set"in t && void 0 !== t.set(this, s, "value") || (this.value = s))
                    }
                    ))) : s ? (t = C.valHooks[s.type] || C.valHooks[s.nodeName.toLowerCase()]) && "get"in t && void 0 !== (i = t.get(s, "value")) ? i : "string" == typeof (i = s.value) ? i.replace(bt, "") : null == i ? "" : i : void 0
                }
            }),
            C.extend({
                valHooks: {
                    option: {
                        get: function(e) {
                            var t = C.find.attr(e, "value");
                            return null != t ? t : gt(C.text(e))
                        }
                    },
                    select: {
                        get: function(e) {
                            var t, i, n, s = e.options, o = e.selectedIndex, r = "select-one" === e.type, a = r ? null : [], l = r ? o + 1 : s.length;
                            for (n = o < 0 ? l : r ? o : 0; n < l; n++)
                                if (((i = s[n]).selected || n === o) && !i.disabled && (!i.parentNode.disabled || !L(i.parentNode, "optgroup"))) {
                                    if (t = C(i).val(),
                                    r)
                                        return t;
                                    a.push(t)
                                }
                            return a
                        },
                        set: function(e, t) {
                            for (var i, n, s = e.options, o = C.makeArray(t), r = s.length; r--; )
                                ((n = s[r]).selected = C.inArray(C.valHooks.option.get(n), o) > -1) && (i = !0);
                            return i || (e.selectedIndex = -1),
                            o
                        }
                    }
                }
            }),
            C.each(["radio", "checkbox"], (function() {
                C.valHooks[this] = {
                    set: function(e, t) {
                        if (Array.isArray(t))
                            return e.checked = C.inArray(C(e).val(), t) > -1
                    }
                },
                g.checkOn || (C.valHooks[this].get = function(e) {
                    return null === e.getAttribute("value") ? "on" : e.value
                }
                )
            }
            )),
            g.focusin = "onfocusin"in i;
            var wt = /^(?:focusinfocus|focusoutblur)$/
              , Tt = function(e) {
                e.stopPropagation()
            };
            C.extend(C.event, {
                trigger: function(e, t, n, s) {
                    var o, r, a, l, c, d, u, h, f = [n || b], m = p.call(e, "type") ? e.type : e, g = p.call(e, "namespace") ? e.namespace.split(".") : [];
                    if (r = h = a = n = n || b,
                    3 !== n.nodeType && 8 !== n.nodeType && !wt.test(m + C.event.triggered) && (m.indexOf(".") > -1 && (g = m.split("."),
                    m = g.shift(),
                    g.sort()),
                    c = m.indexOf(":") < 0 && "on" + m,
                    (e = e[C.expando] ? e : new C.Event(m,"object" == typeof e && e)).isTrigger = s ? 2 : 3,
                    e.namespace = g.join("."),
                    e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + g.join("\\.(?:.*\\.|)") + "(\\.|$)") : null,
                    e.result = void 0,
                    e.target || (e.target = n),
                    t = null == t ? [e] : C.makeArray(t, [e]),
                    u = C.event.special[m] || {},
                    s || !u.trigger || !1 !== u.trigger.apply(n, t))) {
                        if (!s && !u.noBubble && !v(n)) {
                            for (l = u.delegateType || m,
                            wt.test(l + m) || (r = r.parentNode); r; r = r.parentNode)
                                f.push(r),
                                a = r;
                            a === (n.ownerDocument || b) && f.push(a.defaultView || a.parentWindow || i)
                        }
                        for (o = 0; (r = f[o++]) && !e.isPropagationStopped(); )
                            h = r,
                            e.type = o > 1 ? l : u.bindType || m,
                            (d = (G.get(r, "events") || Object.create(null))[e.type] && G.get(r, "handle")) && d.apply(r, t),
                            (d = c && r[c]) && d.apply && J(r) && (e.result = d.apply(r, t),
                            !1 === e.result && e.preventDefault());
                        return e.type = m,
                        s || e.isDefaultPrevented() || u._default && !1 !== u._default.apply(f.pop(), t) || !J(n) || c && y(n[m]) && !v(n) && ((a = n[c]) && (n[c] = null),
                        C.event.triggered = m,
                        e.isPropagationStopped() && h.addEventListener(m, Tt),
                        n[m](),
                        e.isPropagationStopped() && h.removeEventListener(m, Tt),
                        C.event.triggered = void 0,
                        a && (n[c] = a)),
                        e.result
                    }
                },
                simulate: function(e, t, i) {
                    var n = C.extend(new C.Event, i, {
                        type: e,
                        isSimulated: !0
                    });
                    C.event.trigger(n, null, t)
                }
            }),
            C.fn.extend({
                trigger: function(e, t) {
                    return this.each((function() {
                        C.event.trigger(e, t, this)
                    }
                    ))
                },
                triggerHandler: function(e, t) {
                    var i = this[0];
                    if (i)
                        return C.event.trigger(e, t, i, !0)
                }
            }),
            g.focusin || C.each({
                focus: "focusin",
                blur: "focusout"
            }, (function(e, t) {
                var i = function(e) {
                    C.event.simulate(t, e.target, C.event.fix(e))
                };
                C.event.special[t] = {
                    setup: function() {
                        var n = this.ownerDocument || this.document || this
                          , s = G.access(n, t);
                        s || n.addEventListener(e, i, !0),
                        G.access(n, t, (s || 0) + 1)
                    },
                    teardown: function() {
                        var n = this.ownerDocument || this.document || this
                          , s = G.access(n, t) - 1;
                        s ? G.access(n, t, s) : (n.removeEventListener(e, i, !0),
                        G.remove(n, t))
                    }
                }
            }
            ));
            var kt = i.location
              , Ct = {
                guid: Date.now()
            }
              , xt = /\?/;
            C.parseXML = function(e) {
                var t, n;
                if (!e || "string" != typeof e)
                    return null;
                try {
                    t = (new i.DOMParser).parseFromString(e, "text/xml")
                } catch (e) {}
                return n = t && t.getElementsByTagName("parsererror")[0],
                t && !n || C.error("Invalid XML: " + (n ? C.map(n.childNodes, (function(e) {
                    return e.textContent
                }
                )).join("\n") : e)),
                t
            }
            ;
            var _t = /\[\]$/
              , At = /\r?\n/g
              , Et = /^(?:submit|button|image|reset|file)$/i
              , St = /^(?:input|select|textarea|keygen)/i;
            function Lt(e, t, i, n) {
                var s;
                if (Array.isArray(t))
                    C.each(t, (function(t, s) {
                        i || _t.test(e) ? n(e, s) : Lt(e + "[" + ("object" == typeof s && null != s ? t : "") + "]", s, i, n)
                    }
                    ));
                else if (i || "object" !== k(t))
                    n(e, t);
                else
                    for (s in t)
                        Lt(e + "[" + s + "]", t[s], i, n)
            }
            C.param = function(e, t) {
                var i, n = [], s = function(e, t) {
                    var i = y(t) ? t() : t;
                    n[n.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == i ? "" : i)
                };
                if (null == e)
                    return "";
                if (Array.isArray(e) || e.jquery && !C.isPlainObject(e))
                    C.each(e, (function() {
                        s(this.name, this.value)
                    }
                    ));
                else
                    for (i in e)
                        Lt(i, e[i], t, s);
                return n.join("&")
            }
            ,
            C.fn.extend({
                serialize: function() {
                    return C.param(this.serializeArray())
                },
                serializeArray: function() {
                    return this.map((function() {
                        var e = C.prop(this, "elements");
                        return e ? C.makeArray(e) : this
                    }
                    )).filter((function() {
                        var e = this.type;
                        return this.name && !C(this).is(":disabled") && St.test(this.nodeName) && !Et.test(e) && (this.checked || !me.test(e))
                    }
                    )).map((function(e, t) {
                        var i = C(this).val();
                        return null == i ? null : Array.isArray(i) ? C.map(i, (function(e) {
                            return {
                                name: t.name,
                                value: e.replace(At, "\r\n")
                            }
                        }
                        )) : {
                            name: t.name,
                            value: i.replace(At, "\r\n")
                        }
                    }
                    )).get()
                }
            });
            var Pt = /%20/g
              , Ot = /#.*$/
              , Nt = /([?&])_=[^&]*/
              , Dt = /^(.*?):[ \t]*([^\r\n]*)$/gm
              , jt = /^(?:GET|HEAD)$/
              , Mt = /^\/\//
              , It = {}
              , $t = {}
              , Rt = "*/".concat("*")
              , Ht = b.createElement("a");
            function Ft(e) {
                return function(t, i) {
                    "string" != typeof t && (i = t,
                    t = "*");
                    var n, s = 0, o = t.toLowerCase().match($) || [];
                    if (y(i))
                        for (; n = o[s++]; )
                            "+" === n[0] ? (n = n.slice(1) || "*",
                            (e[n] = e[n] || []).unshift(i)) : (e[n] = e[n] || []).push(i)
                }
            }
            function qt(e, t, i, n) {
                var s = {}
                  , o = e === $t;
                function r(a) {
                    var l;
                    return s[a] = !0,
                    C.each(e[a] || [], (function(e, a) {
                        var c = a(t, i, n);
                        return "string" != typeof c || o || s[c] ? o ? !(l = c) : void 0 : (t.dataTypes.unshift(c),
                        r(c),
                        !1)
                    }
                    )),
                    l
                }
                return r(t.dataTypes[0]) || !s["*"] && r("*")
            }
            function Vt(e, t) {
                var i, n, s = C.ajaxSettings.flatOptions || {};
                for (i in t)
                    void 0 !== t[i] && ((s[i] ? e : n || (n = {}))[i] = t[i]);
                return n && C.extend(!0, e, n),
                e
            }
            Ht.href = kt.href,
            C.extend({
                active: 0,
                lastModified: {},
                etag: {},
                ajaxSettings: {
                    url: kt.href,
                    type: "GET",
                    isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(kt.protocol),
                    global: !0,
                    processData: !0,
                    async: !0,
                    contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                    accepts: {
                        "*": Rt,
                        text: "text/plain",
                        html: "text/html",
                        xml: "application/xml, text/xml",
                        json: "application/json, text/javascript"
                    },
                    contents: {
                        xml: /\bxml\b/,
                        html: /\bhtml/,
                        json: /\bjson\b/
                    },
                    responseFields: {
                        xml: "responseXML",
                        text: "responseText",
                        json: "responseJSON"
                    },
                    converters: {
                        "* text": String,
                        "text html": !0,
                        "text json": JSON.parse,
                        "text xml": C.parseXML
                    },
                    flatOptions: {
                        url: !0,
                        context: !0
                    }
                },
                ajaxSetup: function(e, t) {
                    return t ? Vt(Vt(e, C.ajaxSettings), t) : Vt(C.ajaxSettings, e)
                },
                ajaxPrefilter: Ft(It),
                ajaxTransport: Ft($t),
                ajax: function(e, t) {
                    "object" == typeof e && (t = e,
                    e = void 0),
                    t = t || {};
                    var n, s, o, r, a, l, c, d, u, h, p = C.ajaxSetup({}, t), f = p.context || p, m = p.context && (f.nodeType || f.jquery) ? C(f) : C.event, g = C.Deferred(), y = C.Callbacks("once memory"), v = p.statusCode || {}, w = {}, T = {}, k = "canceled", x = {
                        readyState: 0,
                        getResponseHeader: function(e) {
                            var t;
                            if (c) {
                                if (!r)
                                    for (r = {}; t = Dt.exec(o); )
                                        r[t[1].toLowerCase() + " "] = (r[t[1].toLowerCase() + " "] || []).concat(t[2]);
                                t = r[e.toLowerCase() + " "]
                            }
                            return null == t ? null : t.join(", ")
                        },
                        getAllResponseHeaders: function() {
                            return c ? o : null
                        },
                        setRequestHeader: function(e, t) {
                            return null == c && (e = T[e.toLowerCase()] = T[e.toLowerCase()] || e,
                            w[e] = t),
                            this
                        },
                        overrideMimeType: function(e) {
                            return null == c && (p.mimeType = e),
                            this
                        },
                        statusCode: function(e) {
                            var t;
                            if (e)
                                if (c)
                                    x.always(e[x.status]);
                                else
                                    for (t in e)
                                        v[t] = [v[t], e[t]];
                            return this
                        },
                        abort: function(e) {
                            var t = e || k;
                            return n && n.abort(t),
                            _(0, t),
                            this
                        }
                    };
                    if (g.promise(x),
                    p.url = ((e || p.url || kt.href) + "").replace(Mt, kt.protocol + "//"),
                    p.type = t.method || t.type || p.method || p.type,
                    p.dataTypes = (p.dataType || "*").toLowerCase().match($) || [""],
                    null == p.crossDomain) {
                        l = b.createElement("a");
                        try {
                            l.href = p.url,
                            l.href = l.href,
                            p.crossDomain = Ht.protocol + "//" + Ht.host != l.protocol + "//" + l.host
                        } catch (e) {
                            p.crossDomain = !0
                        }
                    }
                    if (p.data && p.processData && "string" != typeof p.data && (p.data = C.param(p.data, p.traditional)),
                    qt(It, p, t, x),
                    c)
                        return x;
                    for (u in (d = C.event && p.global) && 0 == C.active++ && C.event.trigger("ajaxStart"),
                    p.type = p.type.toUpperCase(),
                    p.hasContent = !jt.test(p.type),
                    s = p.url.replace(Ot, ""),
                    p.hasContent ? p.data && p.processData && 0 === (p.contentType || "").indexOf("application/x-www-form-urlencoded") && (p.data = p.data.replace(Pt, "+")) : (h = p.url.slice(s.length),
                    p.data && (p.processData || "string" == typeof p.data) && (s += (xt.test(s) ? "&" : "?") + p.data,
                    delete p.data),
                    !1 === p.cache && (s = s.replace(Nt, "$1"),
                    h = (xt.test(s) ? "&" : "?") + "_=" + Ct.guid++ + h),
                    p.url = s + h),
                    p.ifModified && (C.lastModified[s] && x.setRequestHeader("If-Modified-Since", C.lastModified[s]),
                    C.etag[s] && x.setRequestHeader("If-None-Match", C.etag[s])),
                    (p.data && p.hasContent && !1 !== p.contentType || t.contentType) && x.setRequestHeader("Content-Type", p.contentType),
                    x.setRequestHeader("Accept", p.dataTypes[0] && p.accepts[p.dataTypes[0]] ? p.accepts[p.dataTypes[0]] + ("*" !== p.dataTypes[0] ? ", " + Rt + "; q=0.01" : "") : p.accepts["*"]),
                    p.headers)
                        x.setRequestHeader(u, p.headers[u]);
                    if (p.beforeSend && (!1 === p.beforeSend.call(f, x, p) || c))
                        return x.abort();
                    if (k = "abort",
                    y.add(p.complete),
                    x.done(p.success),
                    x.fail(p.error),
                    n = qt($t, p, t, x)) {
                        if (x.readyState = 1,
                        d && m.trigger("ajaxSend", [x, p]),
                        c)
                            return x;
                        p.async && p.timeout > 0 && (a = i.setTimeout((function() {
                            x.abort("timeout")
                        }
                        ), p.timeout));
                        try {
                            c = !1,
                            n.send(w, _)
                        } catch (e) {
                            if (c)
                                throw e;
                            _(-1, e)
                        }
                    } else
                        _(-1, "No Transport");
                    function _(e, t, r, l) {
                        var u, h, b, w, T, k = t;
                        c || (c = !0,
                        a && i.clearTimeout(a),
                        n = void 0,
                        o = l || "",
                        x.readyState = e > 0 ? 4 : 0,
                        u = e >= 200 && e < 300 || 304 === e,
                        r && (w = function(e, t, i) {
                            for (var n, s, o, r, a = e.contents, l = e.dataTypes; "*" === l[0]; )
                                l.shift(),
                                void 0 === n && (n = e.mimeType || t.getResponseHeader("Content-Type"));
                            if (n)
                                for (s in a)
                                    if (a[s] && a[s].test(n)) {
                                        l.unshift(s);
                                        break
                                    }
                            if (l[0]in i)
                                o = l[0];
                            else {
                                for (s in i) {
                                    if (!l[0] || e.converters[s + " " + l[0]]) {
                                        o = s;
                                        break
                                    }
                                    r || (r = s)
                                }
                                o = o || r
                            }
                            if (o)
                                return o !== l[0] && l.unshift(o),
                                i[o]
                        }(p, x, r)),
                        !u && C.inArray("script", p.dataTypes) > -1 && C.inArray("json", p.dataTypes) < 0 && (p.converters["text script"] = function() {}
                        ),
                        w = function(e, t, i, n) {
                            var s, o, r, a, l, c = {}, d = e.dataTypes.slice();
                            if (d[1])
                                for (r in e.converters)
                                    c[r.toLowerCase()] = e.converters[r];
                            for (o = d.shift(); o; )
                                if (e.responseFields[o] && (i[e.responseFields[o]] = t),
                                !l && n && e.dataFilter && (t = e.dataFilter(t, e.dataType)),
                                l = o,
                                o = d.shift())
                                    if ("*" === o)
                                        o = l;
                                    else if ("*" !== l && l !== o) {
                                        if (!(r = c[l + " " + o] || c["* " + o]))
                                            for (s in c)
                                                if ((a = s.split(" "))[1] === o && (r = c[l + " " + a[0]] || c["* " + a[0]])) {
                                                    !0 === r ? r = c[s] : !0 !== c[s] && (o = a[0],
                                                    d.unshift(a[1]));
                                                    break
                                                }
                                        if (!0 !== r)
                                            if (r && e.throws)
                                                t = r(t);
                                            else
                                                try {
                                                    t = r(t)
                                                } catch (e) {
                                                    return {
                                                        state: "parsererror",
                                                        error: r ? e : "No conversion from " + l + " to " + o
                                                    }
                                                }
                                    }
                            return {
                                state: "success",
                                data: t
                            }
                        }(p, w, x, u),
                        u ? (p.ifModified && ((T = x.getResponseHeader("Last-Modified")) && (C.lastModified[s] = T),
                        (T = x.getResponseHeader("etag")) && (C.etag[s] = T)),
                        204 === e || "HEAD" === p.type ? k = "nocontent" : 304 === e ? k = "notmodified" : (k = w.state,
                        h = w.data,
                        u = !(b = w.error))) : (b = k,
                        !e && k || (k = "error",
                        e < 0 && (e = 0))),
                        x.status = e,
                        x.statusText = (t || k) + "",
                        u ? g.resolveWith(f, [h, k, x]) : g.rejectWith(f, [x, k, b]),
                        x.statusCode(v),
                        v = void 0,
                        d && m.trigger(u ? "ajaxSuccess" : "ajaxError", [x, p, u ? h : b]),
                        y.fireWith(f, [x, k]),
                        d && (m.trigger("ajaxComplete", [x, p]),
                        --C.active || C.event.trigger("ajaxStop")))
                    }
                    return x
                },
                getJSON: function(e, t, i) {
                    return C.get(e, t, i, "json")
                },
                getScript: function(e, t) {
                    return C.get(e, void 0, t, "script")
                }
            }),
            C.each(["get", "post"], (function(e, t) {
                C[t] = function(e, i, n, s) {
                    return y(i) && (s = s || n,
                    n = i,
                    i = void 0),
                    C.ajax(C.extend({
                        url: e,
                        type: t,
                        dataType: s,
                        data: i,
                        success: n
                    }, C.isPlainObject(e) && e))
                }
            }
            )),
            C.ajaxPrefilter((function(e) {
                var t;
                for (t in e.headers)
                    "content-type" === t.toLowerCase() && (e.contentType = e.headers[t] || "")
            }
            )),
            C._evalUrl = function(e, t, i) {
                return C.ajax({
                    url: e,
                    type: "GET",
                    dataType: "script",
                    cache: !0,
                    async: !1,
                    global: !1,
                    converters: {
                        "text script": function() {}
                    },
                    dataFilter: function(e) {
                        C.globalEval(e, t, i)
                    }
                })
            }
            ,
            C.fn.extend({
                wrapAll: function(e) {
                    var t;
                    return this[0] && (y(e) && (e = e.call(this[0])),
                    t = C(e, this[0].ownerDocument).eq(0).clone(!0),
                    this[0].parentNode && t.insertBefore(this[0]),
                    t.map((function() {
                        for (var e = this; e.firstElementChild; )
                            e = e.firstElementChild;
                        return e
                    }
                    )).append(this)),
                    this
                },
                wrapInner: function(e) {
                    return y(e) ? this.each((function(t) {
                        C(this).wrapInner(e.call(this, t))
                    }
                    )) : this.each((function() {
                        var t = C(this)
                          , i = t.contents();
                        i.length ? i.wrapAll(e) : t.append(e)
                    }
                    ))
                },
                wrap: function(e) {
                    var t = y(e);
                    return this.each((function(i) {
                        C(this).wrapAll(t ? e.call(this, i) : e)
                    }
                    ))
                },
                unwrap: function(e) {
                    return this.parent(e).not("body").each((function() {
                        C(this).replaceWith(this.childNodes)
                    }
                    )),
                    this
                }
            }),
            C.expr.pseudos.hidden = function(e) {
                return !C.expr.pseudos.visible(e)
            }
            ,
            C.expr.pseudos.visible = function(e) {
                return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
            }
            ,
            C.ajaxSettings.xhr = function() {
                try {
                    return new i.XMLHttpRequest
                } catch (e) {}
            }
            ;
            var Bt = {
                0: 200,
                1223: 204
            }
              , zt = C.ajaxSettings.xhr();
            g.cors = !!zt && "withCredentials"in zt,
            g.ajax = zt = !!zt,
            C.ajaxTransport((function(e) {
                var t, n;
                if (g.cors || zt && !e.crossDomain)
                    return {
                        send: function(s, o) {
                            var r, a = e.xhr();
                            if (a.open(e.type, e.url, e.async, e.username, e.password),
                            e.xhrFields)
                                for (r in e.xhrFields)
                                    a[r] = e.xhrFields[r];
                            for (r in e.mimeType && a.overrideMimeType && a.overrideMimeType(e.mimeType),
                            e.crossDomain || s["X-Requested-With"] || (s["X-Requested-With"] = "XMLHttpRequest"),
                            s)
                                a.setRequestHeader(r, s[r]);
                            t = function(e) {
                                return function() {
                                    t && (t = n = a.onload = a.onerror = a.onabort = a.ontimeout = a.onreadystatechange = null,
                                    "abort" === e ? a.abort() : "error" === e ? "number" != typeof a.status ? o(0, "error") : o(a.status, a.statusText) : o(Bt[a.status] || a.status, a.statusText, "text" !== (a.responseType || "text") || "string" != typeof a.responseText ? {
                                        binary: a.response
                                    } : {
                                        text: a.responseText
                                    }, a.getAllResponseHeaders()))
                                }
                            }
                            ,
                            a.onload = t(),
                            n = a.onerror = a.ontimeout = t("error"),
                            void 0 !== a.onabort ? a.onabort = n : a.onreadystatechange = function() {
                                4 === a.readyState && i.setTimeout((function() {
                                    t && n()
                                }
                                ))
                            }
                            ,
                            t = t("abort");
                            try {
                                a.send(e.hasContent && e.data || null)
                            } catch (e) {
                                if (t)
                                    throw e
                            }
                        },
                        abort: function() {
                            t && t()
                        }
                    }
            }
            )),
            C.ajaxPrefilter((function(e) {
                e.crossDomain && (e.contents.script = !1)
            }
            )),
            C.ajaxSetup({
                accepts: {
                    script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
                },
                contents: {
                    script: /\b(?:java|ecma)script\b/
                },
                converters: {
                    "text script": function(e) {
                        return C.globalEval(e),
                        e
                    }
                }
            }),
            C.ajaxPrefilter("script", (function(e) {
                void 0 === e.cache && (e.cache = !1),
                e.crossDomain && (e.type = "GET")
            }
            )),
            C.ajaxTransport("script", (function(e) {
                var t, i;
                if (e.crossDomain || e.scriptAttrs)
                    return {
                        send: function(n, s) {
                            t = C("<script>").attr(e.scriptAttrs || {}).prop({
                                charset: e.scriptCharset,
                                src: e.url
                            }).on("load error", i = function(e) {
                                t.remove(),
                                i = null,
                                e && s("error" === e.type ? 404 : 200, e.type)
                            }
                            ),
                            b.head.appendChild(t[0])
                        },
                        abort: function() {
                            i && i()
                        }
                    }
            }
            ));
            var Wt, Ut = [], Yt = /(=)\?(?=&|$)|\?\?/;
            C.ajaxSetup({
                jsonp: "callback",
                jsonpCallback: function() {
                    var e = Ut.pop() || C.expando + "_" + Ct.guid++;
                    return this[e] = !0,
                    e
                }
            }),
            C.ajaxPrefilter("json jsonp", (function(e, t, n) {
                var s, o, r, a = !1 !== e.jsonp && (Yt.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && Yt.test(e.data) && "data");
                if (a || "jsonp" === e.dataTypes[0])
                    return s = e.jsonpCallback = y(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback,
                    a ? e[a] = e[a].replace(Yt, "$1" + s) : !1 !== e.jsonp && (e.url += (xt.test(e.url) ? "&" : "?") + e.jsonp + "=" + s),
                    e.converters["script json"] = function() {
                        return r || C.error(s + " was not called"),
                        r[0]
                    }
                    ,
                    e.dataTypes[0] = "json",
                    o = i[s],
                    i[s] = function() {
                        r = arguments
                    }
                    ,
                    n.always((function() {
                        void 0 === o ? C(i).removeProp(s) : i[s] = o,
                        e[s] && (e.jsonpCallback = t.jsonpCallback,
                        Ut.push(s)),
                        r && y(o) && o(r[0]),
                        r = o = void 0
                    }
                    )),
                    "script"
            }
            )),
            g.createHTMLDocument = ((Wt = b.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>",
            2 === Wt.childNodes.length),
            C.parseHTML = function(e, t, i) {
                return "string" != typeof e ? [] : ("boolean" == typeof t && (i = t,
                t = !1),
                t || (g.createHTMLDocument ? ((n = (t = b.implementation.createHTMLDocument("")).createElement("base")).href = b.location.href,
                t.head.appendChild(n)) : t = b),
                o = !i && [],
                (s = P.exec(e)) ? [t.createElement(s[1])] : (s = ke([e], t, o),
                o && o.length && C(o).remove(),
                C.merge([], s.childNodes)));
                var n, s, o
            }
            ,
            C.fn.load = function(e, t, i) {
                var n, s, o, r = this, a = e.indexOf(" ");
                return a > -1 && (n = gt(e.slice(a)),
                e = e.slice(0, a)),
                y(t) ? (i = t,
                t = void 0) : t && "object" == typeof t && (s = "POST"),
                r.length > 0 && C.ajax({
                    url: e,
                    type: s || "GET",
                    dataType: "html",
                    data: t
                }).done((function(e) {
                    o = arguments,
                    r.html(n ? C("<div>").append(C.parseHTML(e)).find(n) : e)
                }
                )).always(i && function(e, t) {
                    r.each((function() {
                        i.apply(this, o || [e.responseText, t, e])
                    }
                    ))
                }
                ),
                this
            }
            ,
            C.expr.pseudos.animated = function(e) {
                return C.grep(C.timers, (function(t) {
                    return e === t.elem
                }
                )).length
            }
            ,
            C.offset = {
                setOffset: function(e, t, i) {
                    var n, s, o, r, a, l, c = C.css(e, "position"), d = C(e), u = {};
                    "static" === c && (e.style.position = "relative"),
                    a = d.offset(),
                    o = C.css(e, "top"),
                    l = C.css(e, "left"),
                    ("absolute" === c || "fixed" === c) && (o + l).indexOf("auto") > -1 ? (r = (n = d.position()).top,
                    s = n.left) : (r = parseFloat(o) || 0,
                    s = parseFloat(l) || 0),
                    y(t) && (t = t.call(e, i, C.extend({}, a))),
                    null != t.top && (u.top = t.top - a.top + r),
                    null != t.left && (u.left = t.left - a.left + s),
                    "using"in t ? t.using.call(e, u) : d.css(u)
                }
            },
            C.fn.extend({
                offset: function(e) {
                    if (arguments.length)
                        return void 0 === e ? this : this.each((function(t) {
                            C.offset.setOffset(this, e, t)
                        }
                        ));
                    var t, i, n = this[0];
                    return n ? n.getClientRects().length ? (t = n.getBoundingClientRect(),
                    i = n.ownerDocument.defaultView,
                    {
                        top: t.top + i.pageYOffset,
                        left: t.left + i.pageXOffset
                    }) : {
                        top: 0,
                        left: 0
                    } : void 0
                },
                position: function() {
                    if (this[0]) {
                        var e, t, i, n = this[0], s = {
                            top: 0,
                            left: 0
                        };
                        if ("fixed" === C.css(n, "position"))
                            t = n.getBoundingClientRect();
                        else {
                            for (t = this.offset(),
                            i = n.ownerDocument,
                            e = n.offsetParent || i.documentElement; e && (e === i.body || e === i.documentElement) && "static" === C.css(e, "position"); )
                                e = e.parentNode;
                            e && e !== n && 1 === e.nodeType && ((s = C(e).offset()).top += C.css(e, "borderTopWidth", !0),
                            s.left += C.css(e, "borderLeftWidth", !0))
                        }
                        return {
                            top: t.top - s.top - C.css(n, "marginTop", !0),
                            left: t.left - s.left - C.css(n, "marginLeft", !0)
                        }
                    }
                },
                offsetParent: function() {
                    return this.map((function() {
                        for (var e = this.offsetParent; e && "static" === C.css(e, "position"); )
                            e = e.offsetParent;
                        return e || oe
                    }
                    ))
                }
            }),
            C.each({
                scrollLeft: "pageXOffset",
                scrollTop: "pageYOffset"
            }, (function(e, t) {
                var i = "pageYOffset" === t;
                C.fn[e] = function(n) {
                    return z(this, (function(e, n, s) {
                        var o;
                        if (v(e) ? o = e : 9 === e.nodeType && (o = e.defaultView),
                        void 0 === s)
                            return o ? o[t] : e[n];
                        o ? o.scrollTo(i ? o.pageXOffset : s, i ? s : o.pageYOffset) : e[n] = s
                    }
                    ), e, n, arguments.length)
                }
            }
            )),
            C.each(["top", "left"], (function(e, t) {
                C.cssHooks[t] = ze(g.pixelPosition, (function(e, i) {
                    if (i)
                        return i = Be(e, t),
                        He.test(i) ? C(e).position()[t] + "px" : i
                }
                ))
            }
            )),
            C.each({
                Height: "height",
                Width: "width"
            }, (function(e, t) {
                C.each({
                    padding: "inner" + e,
                    content: t,
                    "": "outer" + e
                }, (function(i, n) {
                    C.fn[n] = function(s, o) {
                        var r = arguments.length && (i || "boolean" != typeof s)
                          , a = i || (!0 === s || !0 === o ? "margin" : "border");
                        return z(this, (function(t, i, s) {
                            var o;
                            return v(t) ? 0 === n.indexOf("outer") ? t["inner" + e] : t.document.documentElement["client" + e] : 9 === t.nodeType ? (o = t.documentElement,
                            Math.max(t.body["scroll" + e], o["scroll" + e], t.body["offset" + e], o["offset" + e], o["client" + e])) : void 0 === s ? C.css(t, i, a) : C.style(t, i, s, a)
                        }
                        ), t, r ? s : void 0, r)
                    }
                }
                ))
            }
            )),
            C.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], (function(e, t) {
                C.fn[t] = function(e) {
                    return this.on(t, e)
                }
            }
            )),
            C.fn.extend({
                bind: function(e, t, i) {
                    return this.on(e, null, t, i)
                },
                unbind: function(e, t) {
                    return this.off(e, null, t)
                },
                delegate: function(e, t, i, n) {
                    return this.on(t, e, i, n)
                },
                undelegate: function(e, t, i) {
                    return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", i)
                },
                hover: function(e, t) {
                    return this.mouseenter(e).mouseleave(t || e)
                }
            }),
            C.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), (function(e, t) {
                C.fn[t] = function(e, i) {
                    return arguments.length > 0 ? this.on(t, null, e, i) : this.trigger(t)
                }
            }
            ));
            var Xt = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
            C.proxy = function(e, t) {
                var i, n, s;
                if ("string" == typeof t && (i = e[t],
                t = e,
                e = i),
                y(e))
                    return n = a.call(arguments, 2),
                    (s = function() {
                        return e.apply(t || this, n.concat(a.call(arguments)))
                    }
                    ).guid = e.guid = e.guid || C.guid++,
                    s
            }
            ,
            C.holdReady = function(e) {
                e ? C.readyWait++ : C.ready(!0)
            }
            ,
            C.isArray = Array.isArray,
            C.parseJSON = JSON.parse,
            C.nodeName = L,
            C.isFunction = y,
            C.isWindow = v,
            C.camelCase = X,
            C.type = k,
            C.now = Date.now,
            C.isNumeric = function(e) {
                var t = C.type(e);
                return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
            }
            ,
            C.trim = function(e) {
                return null == e ? "" : (e + "").replace(Xt, "")
            }
            ,
            void 0 === (n = function() {
                return C
            }
            .apply(t, [])) || (e.exports = n);
            var Jt = i.jQuery
              , Zt = i.$;
            return C.noConflict = function(e) {
                return i.$ === C && (i.$ = Zt),
                e && i.jQuery === C && (i.jQuery = Jt),
                C
            }
            ,
            void 0 === s && (i.jQuery = i.$ = C),
            C
        }
        ))
    },
    En5V: function(e, t, i) {
        (function(e, t) {
            e.$ = e.jQuery = i("EVdn");
            t(".burger-nav-bg");
            t(".main-nav--dropdown > a").on("click", (function(e) {
                t(window).width() < 1024 && (e.preventDefault(),
                t(this).parent().find(">div").toggleClass("hidden"))
            }
            )),
            t(".mobile__menu-close, .burger-menu-open").on("click", (function(e) {
                t(".main-nav, .mobile__menu-close, .burger-nav-bg").toggleClass("hidden")
            }
            )),
            t(".desktop-search-open").on("click", (function(e) {
                e.preventDefault(),
                t(this).toggleClass("desktop-search-open--open"),
                t(".searchBar").toggleClass("lg:hidden"),
                t(".searchBar input[type=search]").focus()
            }
            ))
        }
        ).call(this, i("yLpj"), i("EVdn"))
    },
    JeAW: function(e, t, i) {
        "use strict";
        function n(e, t, i) {
            return t in e ? Object.defineProperty(e, t, {
                value: i,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = i,
            e
        }
        var s, o = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var i = arguments[t];
                for (var n in i)
                    Object.prototype.hasOwnProperty.call(i, n) && (e[n] = i[n])
            }
            return e
        }
        , r = "data-hashaccordion-id", a = (s = {},
        {
            set: function(e, t) {
                s[e] = t
            },
            get: function(e) {
                return s[e]
            },
            remove: function(e) {
                return s[e]
            }
        }), l = function(e, t) {
            return document.querySelector("#" + e + "[" + r + '="' + t + '"]')
        }, c = function(e, t) {
            e.classList ? e.classList.add(t) : e.className += " " + t
        }, d = function(e, t) {
            e.classList ? e.classList.remove(t) : e.className = e.className.replace(new RegExp("(^|\\b)" + t.split(" ").join("|") + "(\\b|$)","gi"), " ")
        }, u = function(e, t) {
            return e.classList ? e.classList.contains(t) : new RegExp("(^| )" + t + "( |$)","gi").test(e.className)
        }, h = function(e, t) {
            Object.keys(t).forEach((function(i) {
                e.setAttribute(i, t[i])
            }
            ))
        }, p = function(e, t, i) {
            for (var n = !1, s = e; s && !1 === n; )
                !0 === u(s, t) && s.getAttribute(r) === i ? n = !0 : s = s.parentNode;
            return !0 === n ? s.getAttribute("id") : ""
        }, f = function(e, t) {
            e.forEach((function(e) {
                h(e, n({}, t, "false"))
            }
            ))
        }, m = function(e, t) {
            e.setAttribute(t, !0)
        }, g = function(e, t, i) {
            var n = void 0;
            e.forEach((function(e, t) {
                "true" === e.getAttribute(i) && (n = t)
            }
            )),
            "next" === t && (m(e[n + 1]),
            setTimeout((function() {
                e[n + 1].focus()
            }
            ), 0)),
            "prev" === t && (m(e[n - 1]),
            setTimeout((function() {
                e[n - 1].focus()
            }
            ), 0))
        }, y = function() {
            var e = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0]
              , t = o({
                ACCORDION_JS: "js-accordion",
                ACCORDION_JS_HEADER: "js-accordion__header",
                ACCORDION_JS_PANEL: "js-accordion__panel",
                ACCORDION_DATA_PREFIX_CLASS: "data-accordion-prefix-classes",
                ACCORDION_DATA_OPENED: "data-accordion-opened",
                ACCORDION_DATA_MULTISELECTABLE: "data-accordion-multiselectable",
                ACCORDION_DATA_COOL_SELECTORS: "data-accordion-cool-selectors",
                ACCORDION_PREFIX_IDS: "accordion",
                ACCORDION_BUTTON_ID: "_tab",
                ACCORDION_PANEL_ID: "_panel",
                ACCORDION_STYLE: "accordion",
                ACCORDION_TITLE_STYLE: "accordion__title",
                ACCORDION_HEADER_STYLE: "accordion__header",
                ACCORDION_PANEL_STYLE: "accordion__panel",
                ACCORDION_ROLE_TABLIST: "tablist",
                ACCORDION_ROLE_TAB: "tab",
                ACCORDION_ROLE_TABPANEL: "tabpanel",
                ATTR_ROLE: "role",
                ATTR_MULTISELECTABLE: "aria-multiselectable",
                ATTR_EXPANDED: "aria-expanded",
                ATTR_LABELLEDBY: "aria-labelledby",
                ATTR_HIDDEN: "aria-hidden",
                ATTR_CONTROLS: "aria-controls",
                ATTR_SELECTED: "aria-selected"
            }, e)
              , i = Math.random().toString(32).slice(2, 12);
            a.set(i, t);
            var s = function() {
                var e = arguments.length <= 0 || void 0 === arguments[0] ? document : arguments[0];
                return [].slice.call(e.querySelectorAll("." + t.ACCORDION_JS))
            }
              , l = function(e) {
                s(e).forEach((function(e) {
                    var s = "z" + Math.random().toString(32).slice(2, 12)
                      , o = !0 === e.hasAttribute(t.ACCORDION_DATA_PREFIX_CLASS) ? e.getAttribute(t.ACCORDION_DATA_PREFIX_CLASS) + "-" : ""
                      , a = !0 === e.hasAttribute(t.ACCORDION_DATA_COOL_SELECTORS);
                    "none" === e.getAttribute(t.ACCORDION_DATA_MULTISELECTABLE) ? e.setAttribute(t.ATTR_MULTISELECTABLE, "false") : e.setAttribute(t.ATTR_MULTISELECTABLE, "true"),
                    e.setAttribute(t.ATTR_ROLE, t.ACCORDION_ROLE_TABLIST),
                    e.setAttribute("id", s),
                    e.setAttribute(r, i),
                    c(e, o + t.ACCORDION_STYLE),
                    [].slice.call(e.querySelectorAll("." + t.ACCORDION_JS_HEADER)).forEach((function(l, u) {
                        var p, f;
                        if (l.parentNode === e || !1 !== a) {
                            var m = u + 1
                              , g = l.nextElementSibling
                              , y = l.innerHTML
                              , v = document.createElement("BUTTON")
                              , b = !0 === l.hasAttribute(t.ACCORDION_DATA_OPENED) ? l.getAttribute(t.ACCORDION_DATA_OPENED) : "";
                            v.innerHTML = y,
                            c(v, t.ACCORDION_JS_HEADER),
                            c(v, o + t.ACCORDION_HEADER_STYLE),
                            h(v, (n(p = {}, t.ATTR_ROLE, t.ACCORDION_ROLE_TAB),
                            n(p, "id", t.ACCORDION_PREFIX_IDS + s + t.ACCORDION_BUTTON_ID + m),
                            n(p, t.ATTR_CONTROLS, t.ACCORDION_PREFIX_IDS + s + t.ACCORDION_PANEL_ID + m),
                            n(p, t.ATTR_SELECTED, "false"),
                            n(p, "type", "button"),
                            n(p, r, i),
                            p)),
                            l.innerHTML = "",
                            l.appendChild(v),
                            c(l, o + t.ACCORDION_TITLE_STYLE),
                            d(l, t.ACCORDION_JS_HEADER),
                            c(g, o + t.ACCORDION_PANEL_STYLE),
                            h(g, (n(f = {}, t.ATTR_ROLE, t.ACCORDION_ROLE_TABPANEL),
                            n(f, t.ATTR_LABELLEDBY, t.ACCORDION_PREFIX_IDS + s + t.ACCORDION_BUTTON_ID + m),
                            n(f, "id", t.ACCORDION_PREFIX_IDS + s + t.ACCORDION_PANEL_ID + m),
                            n(f, r, i),
                            f)),
                            "true" === b ? (v.setAttribute(t.ATTR_EXPANDED, "true"),
                            l.removeAttribute(t.ACCORDION_DATA_OPENED),
                            g.setAttribute(t.ATTR_HIDDEN, "false")) : (v.setAttribute(t.ATTR_EXPANDED, "false"),
                            g.setAttribute(t.ATTR_HIDDEN, "true"))
                        }
                    }
                    ))
                }
                ))
            };
            return {
                attach: l
            }
        };
        window.van11yAccessibleAccordionAria = (["click", "keydown", "focus"].forEach((function(e) {
            document.body.addEventListener(e, (function(t) {
                var i, n = function(e, t) {
                    for (var i = !1, n = e; 1 === n.nodeType && n && !1 === i; )
                        !0 === n.hasAttribute(t) ? i = !0 : n = n.parentNode;
                    return !0 === i ? n.getAttribute(t) : ""
                }(t.target, r);
                "" !== n && (i = a.get(n),
                !0 === u(t.target, i.ACCORDION_JS_HEADER) && "focus" === e && function() {
                    var e = t.target
                      , s = l(p(e, i.ACCORDION_JS, n), n)
                      , o = !0 === s.hasAttribute(i.ACCORDION_DATA_COOL_SELECTORS)
                      , r = [].slice.call(s.querySelectorAll("." + i.ACCORDION_JS_HEADER));
                    !1 === o && (r = r.filter((function(e) {
                        return e.parentNode.parentNode === s
                    }
                    ))),
                    f(r, i.ATTR_SELECTED),
                    m(e, i.ATTR_SELECTED)
                }(),
                !0 === u(t.target, i.ACCORDION_JS_HEADER) && "click" === e && function() {
                    var e = t.target
                      , s = l(p(e, i.ACCORDION_JS, n), n)
                      , o = !0 === s.hasAttribute(i.ACCORDION_DATA_COOL_SELECTORS)
                      , r = [].slice.call(s.querySelectorAll("." + i.ACCORDION_JS_HEADER))
                      , a = s.getAttribute(i.ATTR_MULTISELECTABLE)
                      , c = l(e.getAttribute(i.ATTR_CONTROLS), n)
                      , d = e.getAttribute(i.ATTR_EXPANDED);
                    !1 === o && (r = r.filter((function(e) {
                        return e.parentNode.parentNode === s
                    }
                    ))),
                    "false" === d ? (e.setAttribute(i.ATTR_EXPANDED, !0),
                    c.removeAttribute(i.ATTR_HIDDEN)) : (e.setAttribute(i.ATTR_EXPANDED, !1),
                    c.setAttribute(i.ATTR_HIDDEN, !0)),
                    "false" === a && r.forEach((function(t) {
                        var s = l(t.getAttribute(i.ATTR_CONTROLS), n);
                        t !== e ? (t.setAttribute(i.ATTR_SELECTED, !1),
                        t.setAttribute(i.ATTR_EXPANDED, !1),
                        s.setAttribute(i.ATTR_HIDDEN, !0)) : t.setAttribute(i.ATTR_SELECTED, !0)
                    }
                    )),
                    setTimeout((function() {
                        e.focus()
                    }
                    ), 0),
                    t.preventDefault()
                }(),
                !0 === u(t.target, i.ACCORDION_JS_HEADER) && "keydown" === e && function() {
                    var e = t.target
                      , s = p(e, i.ACCORDION_JS, n)
                      , o = l(s, n)
                      , r = !0 === o.hasAttribute(i.ACCORDION_DATA_COOL_SELECTORS)
                      , a = [].slice.call(o.querySelectorAll("." + i.ACCORDION_JS_HEADER));
                    !1 === r && (a = a.filter((function(e) {
                        return e.parentNode.parentNode === o
                    }
                    ))),
                    36 === t.keyCode ? (f(a, i.ATTR_SELECTED),
                    m(a[0], i.ATTR_SELECTED),
                    setTimeout((function() {
                        a[0].focus()
                    }
                    ), 0),
                    t.preventDefault()) : 35 === t.keyCode ? (f(a, i.ATTR_SELECTED),
                    m(a[a.length - 1], i.ATTR_SELECTED),
                    setTimeout((function() {
                        a[a.length - 1].focus()
                    }
                    ), 0),
                    t.preventDefault()) : 37 !== t.keyCode && 38 !== t.keyCode || t.ctrlKey ? 40 !== t.keyCode && 39 !== t.keyCode || t.ctrlKey || ("true" === a[a.length - 1].getAttribute(i.ATTR_SELECTED) ? (f(a, i.ATTR_SELECTED),
                    m(a[0], i.ATTR_SELECTED),
                    setTimeout((function() {
                        a[0].focus()
                    }
                    ), 0),
                    t.preventDefault()) : (g(a, "next", i.ATTR_SELECTED),
                    t.preventDefault())) : "true" === a[0].getAttribute(i.ATTR_SELECTED) ? (f(a, i.ATTR_SELECTED),
                    m(a[a.length - 1], i.ATTR_SELECTED),
                    setTimeout((function() {
                        a[a.length - 1].focus()
                    }
                    ), 0),
                    t.preventDefault()) : (g(a, "prev", i.ATTR_SELECTED),
                    t.preventDefault())
                }())
            }
            ), !0)
        }
        )),
        y);
        document.addEventListener("DOMContentLoaded", (function e() {
            window.van11yAccessibleAccordionAria().attach(),
            document.removeEventListener("DOMContentLoaded", e)
        }
        ))
    },
    KoUT: function(e, t, i) {
        (function(i) {
            var n, s;
            Element.prototype.matches || (Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector),
            s = void 0 !== i ? i : "undefined" != typeof window ? window : this,
            void 0 === (n = function() {
                return function(e) {
                    "use strict";
                    var t = {
                        idPrefix: "tabby-toggle_",
                        default: "[data-tabby-default]"
                    }
                      , i = function(t) {
                        if (t && "true" != t.getAttribute("aria-selected")) {
                            var i = document.querySelector(t.hash);
                            if (i) {
                                var n = function(e) {
                                    var t = e.closest('[role="tablist"]');
                                    if (!t)
                                        return {};
                                    var i = t.querySelector('[role="tab"][aria-selected="true"]');
                                    if (!i)
                                        return {};
                                    var n = document.querySelector(i.hash);
                                    return i.setAttribute("aria-selected", "false"),
                                    i.setAttribute("tabindex", "-1"),
                                    n ? (n.setAttribute("hidden", "hidden"),
                                    {
                                        previousTab: i,
                                        previousContent: n
                                    }) : {
                                        previousTab: i
                                    }
                                }(t);
                                !function(e, t) {
                                    e.setAttribute("aria-selected", "true"),
                                    e.setAttribute("tabindex", "0"),
                                    t.removeAttribute("hidden"),
                                    e.focus()
                                }(t, i),
                                n.tab = t,
                                n.content = i,
                                function(t, i) {
                                    var n;
                                    "function" == typeof e.CustomEvent ? n = new CustomEvent("tabby",{
                                        bubbles: !0,
                                        cancelable: !0,
                                        detail: i
                                    }) : (n = document.createEvent("CustomEvent")).initCustomEvent("tabby", !0, !0, i),
                                    t.dispatchEvent(n)
                                }(t, n)
                            }
                        }
                    };
                    return function(n, s) {
                        var o, r, a = {
                            destroy: function() {
                                var e = r.querySelectorAll("a");
                                Array.prototype.forEach.call(e, (function(e) {
                                    var t = document.querySelector(e.hash);
                                    t && function(e, t, i) {
                                        e.id.slice(0, i.idPrefix.length) === i.idPrefix && (e.id = ""),
                                        e.removeAttribute("role"),
                                        e.removeAttribute("aria-controls"),
                                        e.removeAttribute("aria-selected"),
                                        e.removeAttribute("tabindex"),
                                        e.closest("li").removeAttribute("role"),
                                        t.removeAttribute("role"),
                                        t.removeAttribute("aria-labelledby"),
                                        t.removeAttribute("hidden")
                                    }(e, t, o)
                                }
                                )),
                                r.removeAttribute("role"),
                                document.documentElement.removeEventListener("click", l, !0),
                                r.removeEventListener("keydown", c, !0),
                                o = null,
                                r = null
                            },
                            setup: function() {
                                if (r = document.querySelector(n)) {
                                    var e = r.querySelectorAll("a");
                                    r.setAttribute("role", "tablist"),
                                    Array.prototype.forEach.call(e, (function(e) {
                                        var t = document.querySelector(e.hash);
                                        t && function(e, t, i) {
                                            e.id || (e.id = i.idPrefix + t.id),
                                            e.setAttribute("role", "tab"),
                                            e.setAttribute("aria-controls", t.id),
                                            e.closest("li").setAttribute("role", "presentation"),
                                            t.setAttribute("role", "tabpanel"),
                                            t.setAttribute("aria-labelledby", e.id),
                                            e.matches(i.default) ? e.setAttribute("aria-selected", "true") : (e.setAttribute("aria-selected", "false"),
                                            e.setAttribute("tabindex", "-1"),
                                            t.setAttribute("hidden", "hidden"))
                                        }(e, t, o)
                                    }
                                    ))
                                }
                            },
                            toggle: function(e) {
                                var t = e;
                                "string" == typeof e && (t = document.querySelector(n + ' [role="tab"][href*="' + e + '"]')),
                                i(t)
                            }
                        }, l = function(e) {
                            var t = e.target.closest(n + ' [role="tab"]');
                            t && (e.preventDefault(),
                            i(t))
                        }, c = function(e) {
                            var t = document.activeElement;
                            t.matches(n + ' [role="tab"]') && (["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight", "Up", "Down", "Left", "Right", "Home", "End"].indexOf(e.key) < 0 || function(e, t) {
                                var n = function(e) {
                                    var t = e.closest('[role="tablist"]')
                                      , i = t ? t.querySelectorAll('[role="tab"]') : null;
                                    if (i)
                                        return {
                                            tabs: i,
                                            index: Array.prototype.indexOf.call(i, e)
                                        }
                                }(e);
                                if (n) {
                                    var s, o = n.tabs.length - 1;
                                    ["ArrowUp", "ArrowLeft", "Up", "Left"].indexOf(t) > -1 ? s = n.index < 1 ? o : n.index - 1 : ["ArrowDown", "ArrowRight", "Down", "Right"].indexOf(t) > -1 ? s = n.index === o ? 0 : n.index + 1 : "Home" === t ? s = 0 : "End" === t && (s = o),
                                    i(n.tabs[s])
                                }
                            }(t, e.key))
                        };
                        return o = function() {
                            var e = {};
                            return Array.prototype.forEach.call(arguments, (function(t) {
                                for (var i in t) {
                                    if (!t.hasOwnProperty(i))
                                        return;
                                    e[i] = t[i]
                                }
                            }
                            )),
                            e
                        }(t, s || {}),
                        a.setup(),
                        function(t) {
                            if (!(e.location.hash.length < 1)) {
                                var n = document.querySelector(t + ' [role="tab"][href*="' + e.location.hash + '"]');
                                i(n)
                            }
                        }(n),
                        document.documentElement.addEventListener("click", l, !0),
                        r.addEventListener("keydown", c, !0),
                        a
                    }
                }(s)
            }
            .apply(t, [])) || (e.exports = n)
        }
        ).call(this, i("yLpj"))
    },
    PRj7: function(e, t) {
        function i(e, t) {
            return function(e) {
                if (Array.isArray(e))
                    return e
            }(e) || function(e, t) {
                var i = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                if (null == i)
                    return;
                var n, s, o = [], r = !0, a = !1;
                try {
                    for (i = i.call(e); !(r = (n = i.next()).done) && (o.push(n.value),
                    !t || o.length !== t); r = !0)
                        ;
                } catch (e) {
                    a = !0,
                    s = e
                } finally {
                    try {
                        r || null == i.return || i.return()
                    } finally {
                        if (a)
                            throw s
                    }
                }
                return o
            }(e, t) || n(e, t) || function() {
                throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()
        }
        function n(e, t) {
            if (e) {
                if ("string" == typeof e)
                    return s(e, t);
                var i = Object.prototype.toString.call(e).slice(8, -1);
                return "Object" === i && e.constructor && (i = e.constructor.name),
                "Map" === i || "Set" === i ? Array.from(e) : "Arguments" === i || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i) ? s(e, t) : void 0
            }
        }
        function s(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var i = 0, n = new Array(t); i < t; i++)
                n[i] = e[i];
            return n
        }
        var o = document.getElementById("global-subscribe-form");
        function r(e) {
            var t, s = [], o = function(e, t) {
                var i = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                if (!i) {
                    if (Array.isArray(e) || (i = n(e)) || t && e && "number" == typeof e.length) {
                        i && (e = i);
                        var s = 0
                          , o = function() {};
                        return {
                            s: o,
                            n: function() {
                                return s >= e.length ? {
                                    done: !0
                                } : {
                                    done: !1,
                                    value: e[s++]
                                }
                            },
                            e: function(e) {
                                throw e
                            },
                            f: o
                        }
                    }
                    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }
                var r, a = !0, l = !1;
                return {
                    s: function() {
                        i = i.call(e)
                    },
                    n: function() {
                        var e = i.next();
                        return a = e.done,
                        e
                    },
                    e: function(e) {
                        l = !0,
                        r = e
                    },
                    f: function() {
                        try {
                            a || null == i.return || i.return()
                        } finally {
                            if (l)
                                throw r
                        }
                    }
                }
            }(new FormData(e));
            try {
                for (o.s(); !(t = o.n()).done; ) {
                    var r = i(t.value, 2)
                      , a = r[0]
                      , l = r[1];
                    s.push(encodeURIComponent(a) + "=" + encodeURIComponent(l))
                }
            } catch (e) {
                o.e(e)
            } finally {
                o.f()
            }
            return s.join("&")
        }
        null !== o && (o.addEventListener("submit", (function(e) {
            e.preventDefault();
            var t = r(this);
            fetch("/actions/campaign/forms/subscribe", {
                method: "POST",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/x-www-form-urlencoded"
                },
                body: t
            }).then((function(e) {
                return e.json()
            }
            )).then((function(e) {
                if (!0 === e.success) {
                    var t = document.querySelector(".global-form-success");
                    t.textContent = "You have successfully subscribed to our mailing list!",
                    t.classList.remove("hidden"),
                    o.classList.add("hidden"),
                    a()
                } else {
                    var i = document.querySelector(".global-form-fail");
                    i.textContent = "Error subscribing to the mailing list. Please try again.",
                    i.classList.remove("hidden")
                }
            }
            )).catch((function(e) {
                console.error("Fetch error:", e);
                var t = document.querySelector(".global-form-fail");
                t.textContent = "There was an error subscribing to the mailing list .",
                t.classList.remove("hidden")
            }
            ))
        }
        )),
        document.querySelector(".global-form-close").addEventListener("click", (function() {
            a(),
            document.querySelector(".global-form-wrapper").classList.add("hidden"),
            document.querySelector(".global-form-wrapper-bg").classList.add("hidden"),
            document.documentElement.classList.remove("fixed", "w-full"),
            console.log("closed newsletter")
        }
        )));
        function a() {
            var e = new Date;
            e.setTime(e.getTime() + 31536e6);
            var t = "expires=" + e.toUTCString();
            document.cookie = "formClosed=" + (new Date).toISOString() + ";" + t + ";path=/;Secure"
        }
    },
    SUMU: function(e, t, i) {
        (function(e, t) {
            e.$ = e.jQuery = i("EVdn");
            i("j4iJ");
            t((function() {
                function e() {
                    t("#js-checkout-steps").load(document.URL + " #js-checkout-steps")
                }
                function i(e, t) {
                    e.remove(".errors"),
                    e.prepend('<ul class="errors"></ul>'),
                    Object.keys(t).forEach((function(i) {
                        "username" != i && (e.find(".errors").append("<li>" + t[i] + "</li>"),
                        e.find('[name="' + i + '"]').addClass("parsley-error"))
                    }
                    ))
                }
                function n(e) {
                    t.ajax({
                        url: "/token.twig",
                        type: "get",
                        dataType: "json",
                        success: function(t) {
                            var i = t.csrf;
                            e.find("input[name=" + i.name + "]").val(i.value)
                        }
                    })
                }
                t(".js-register-form").parsley(),
                t(".js-address-form").parsley(),
                t(".js-payment-form").parsley(),
                t(".js-register-form-complete").hide(),
                t(".js-address-form-complete").hide(),
                t(".js-payment-form-complete").hide(),
                t(".js-register-form").on("submit", (function(s) {
                    if (s.preventDefault(),
                    t(this).parsley().isValid()) {
                        var o = t(this)
                          , r = o.attr("action")
                          , a = o.serializeArray();
                        t(".js-ajax-loader").addClass("ajax-loader__container--active"),
                        t.ajax({
                            type: "POST",
                            url: r,
                            data: a,
                            dataType: "json",
                            success: function(s) {
                                if (s.errors)
                                    return i(o, s.errors),
                                    !1;
                                var r;
                                t(".js-register-form-complete").html('<div class="js-register-form-complete text-center pt-4 pl-4 pr-4"><span class="bg-green font-bold block border border-green p-2 text-center uppercase text-white">1. Looking good! Your account has been created</span></div>'),
                                n(t(".js-address-form"));
                                var a = o.find('[name="firstName"]').val()
                                  , l = o.find('[name="lastName"]').val();
                                t("#address-firstName").val(a),
                                t("#address-lastName").val(l),
                                t(".js-register-form-complete").slideDown("fast", (function() {
                                    t(".js-register-form-incomplete").slideUp()
                                }
                                )),
                                e(),
                                t("#signup-address").find(".js-address-form-before-complete").removeClass("block").addClass("hidden"),
                                t("#signup-address").slideDown().find(".js-address-form-incomplete").removeClass("hidden").addClass("block").find(":disabled").removeAttr("disabled");
                                var c = JSON.parse(atob(t("#checkout-address").data("items")))
                                  , d = (t("#checkout-address").data("currency"),
                                null !== (r = t("#checkout-address").data("coupon")) && void 0 !== r ? r : "");
                                "undefined" != typeof gtag && gtag("event", "checkout_progress", {
                                    checkout_step: 2,
                                    checkout_option: "address",
                                    value: "address",
                                    currency: "${gtagCurrency}",
                                    items: c,
                                    coupon: d
                                })
                            },
                            complete: function(e) {
                                t(".js-ajax-loader").removeClass("ajax-loader__container--active")
                            },
                            error: function(e) {}
                        }).done((function(e) {}
                        ))
                    }
                    return !1
                }
                )),
                t(".js-address-form").on("submit", (function(s) {
                    if (s.preventDefault(),
                    t(this).parsley().isValid()) {
                        var o = t(this)
                          , r = o.attr("action")
                          , a = o.serializeArray();
                        return t(".js-ajax-loader").addClass("ajax-loader__container--active"),
                        t.ajax({
                            type: "POST",
                            url: r,
                            data: a,
                            dataType: "json",
                            success: function(s) {
                                if (s.errors)
                                    return i(o, s.errors),
                                    !1;
                                var r;
                                t(".js-address-form-complete").html('<div class="js-address-form-complete text-center pt-4 pl-4 pr-4"><span class="bg-green font-bold block border border-green p-2 text-center uppercase text-white">2. Looking good! Your billing address has been saved</span></div>'),
                                n(t(".js-payment-form")),
                                n(t(".js-coupon-code-form")),
                                t(".js-address-form-complete").slideDown("fast", (function() {
                                    t(".js-address-form-incomplete").slideUp()
                                }
                                )),
                                e(),
                                t("#signup-payment").find(".js-payment-form-before-complete").removeClass("block").addClass("hidden"),
                                t("#signup-payment").slideDown().find(".js-payment-form-incomplete").removeClass("hidden").addClass("block").find(":disabled").removeAttr("disabled");
                                var a = JSON.parse(atob(t("#checkout-payment").data("items")))
                                  , l = (t("#checkout-address").data("currency"),
                                null !== (r = t("#checkout-payment").data("coupon")) && void 0 !== r ? r : "");
                                "undefined" != typeof gtag && (gtag("event", "checkout_progress", {
                                    checkout_step: 3,
                                    checkout_option: "payment",
                                    value: "payment",
                                    currency: "${gtagCurrency}",
                                    items: a,
                                    coupon: l
                                }),
                                gtag("event", "set_checkout_option", {
                                    checkout_step: 3,
                                    checkout_option: "payment",
                                    value: "payment"
                                }))
                            },
                            error: function(e) {},
                            complete: function(e) {
                                t(".js-ajax-loader").removeClass("ajax-loader__container--active")
                            }
                        }).done((function(e) {}
                        )),
                        !1
                    }
                }
                )),
                t("body").on("submit", ".js-coupon-code-form", (function(e) {
                    e.preventDefault(),
                    t(".js-ajax-loader").addClass("ajax-loader__container--active");
                    var i = t(this)
                      , n = t(".js-coupon-code-form input[name=couponCode]").val()
                      , s = t(".js-coupon-code-form input[name=action]").val()
                      , o = i.serializeArray();
                    t.ajax({
                        type: "POST",
                        data: o,
                        dataType: "json",
                        url: s,
                        success: function(e) {
                            var i;
                            1 == e.success ? (t(".coupon-code-form, .coupon_error").hide(),
                            t(".js-coupon-code-code").text(n),
                            t(".coupon_applied").show()) : (t(".coupon_applied").hide(),
                            t(".coupon_error").show()),
                            t("#js-payment-button").load(document.URL + " #js-payment-button");
                            i = t("#checkout-payment").data("coupon")
                        },
                        error: function(e) {},
                        complete: function(e) {
                            t(".js-ajax-loader").removeClass("ajax-loader__container--active"),
                            t("[data-coupon]").data("coupon", n)
                        }
                    })
                }
                ))
            }
            ))
        }
        ).call(this, i("yLpj"), i("EVdn"))
    },
    T7iU: function(e, t, i) {
        (function(t, i) {
            "object" == typeof navigator && (e.exports = function() {
                "use strict";
                function e(e, t, i) {
                    return t in e ? Object.defineProperty(e, t, {
                        value: i,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : e[t] = i,
                    e
                }
                function n(e, t) {
                    for (var i = 0; i < t.length; i++) {
                        var n = t[i];
                        n.enumerable = n.enumerable || !1,
                        n.configurable = !0,
                        "value"in n && (n.writable = !0),
                        Object.defineProperty(e, n.key, n)
                    }
                }
                function s(e, t, i) {
                    return t in e ? Object.defineProperty(e, t, {
                        value: i,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : e[t] = i,
                    e
                }
                function o(e, t) {
                    var i = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var n = Object.getOwnPropertySymbols(e);
                        t && (n = n.filter((function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        }
                        ))),
                        i.push.apply(i, n)
                    }
                    return i
                }
                function r(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var i = null != arguments[t] ? arguments[t] : {};
                        t % 2 ? o(Object(i), !0).forEach((function(t) {
                            s(e, t, i[t])
                        }
                        )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i)) : o(Object(i)).forEach((function(t) {
                            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(i, t))
                        }
                        ))
                    }
                    return e
                }
                var a = {
                    addCSS: !0,
                    thumbWidth: 15,
                    watch: !0
                };
                function l(e, t) {
                    return function() {
                        return Array.from(document.querySelectorAll(t)).includes(this)
                    }
                    .call(e, t)
                }
                var c = function(e) {
                    return null != e ? e.constructor : null
                }
                  , d = function(e, t) {
                    return !!(e && t && e instanceof t)
                }
                  , u = function(e) {
                    return c(e) === String
                }
                  , h = function(e) {
                    return Array.isArray(e)
                }
                  , p = function(e) {
                    return d(e, NodeList)
                }
                  , f = u
                  , m = h
                  , g = p
                  , y = function(e) {
                    return d(e, Element)
                }
                  , v = function(e) {
                    return d(e, Event)
                }
                  , b = function(e) {
                    return function(e) {
                        return null == e
                    }(e) || (u(e) || h(e) || p(e)) && !e.length || function(e) {
                        return c(e) === Object
                    }(e) && !Object.keys(e).length
                }
                  , w = function() {
                    function e(t, i) {
                        (function(e, t) {
                            if (!(e instanceof t))
                                throw new TypeError("Cannot call a class as a function")
                        }
                        )(this, e),
                        y(t) ? this.element = t : f(t) && (this.element = document.querySelector(t)),
                        y(this.element) && b(this.element.rangeTouch) && (this.config = r({}, a, {}, i),
                        this.init())
                    }
                    return function(e, t, i) {
                        t && n(e.prototype, t),
                        i && n(e, i)
                    }(e, [{
                        key: "init",
                        value: function() {
                            e.enabled && (this.config.addCSS && (this.element.style.userSelect = "none",
                            this.element.style.webKitUserSelect = "none",
                            this.element.style.touchAction = "manipulation"),
                            this.listeners(!0),
                            this.element.rangeTouch = this)
                        }
                    }, {
                        key: "destroy",
                        value: function() {
                            e.enabled && (this.config.addCSS && (this.element.style.userSelect = "",
                            this.element.style.webKitUserSelect = "",
                            this.element.style.touchAction = ""),
                            this.listeners(!1),
                            this.element.rangeTouch = null)
                        }
                    }, {
                        key: "listeners",
                        value: function(e) {
                            var t = this
                              , i = e ? "addEventListener" : "removeEventListener";
                            ["touchstart", "touchmove", "touchend"].forEach((function(e) {
                                t.element[i](e, (function(e) {
                                    return t.set(e)
                                }
                                ), !1)
                            }
                            ))
                        }
                    }, {
                        key: "get",
                        value: function(t) {
                            if (!e.enabled || !v(t))
                                return null;
                            var i, n = t.target, s = t.changedTouches[0], o = parseFloat(n.getAttribute("min")) || 0, r = parseFloat(n.getAttribute("max")) || 100, a = parseFloat(n.getAttribute("step")) || 1, l = n.getBoundingClientRect(), c = 100 / l.width * (this.config.thumbWidth / 2) / 100;
                            return 0 > (i = 100 / l.width * (s.clientX - l.left)) ? i = 0 : 100 < i && (i = 100),
                            50 > i ? i -= (100 - 2 * i) * c : 50 < i && (i += 2 * (i - 50) * c),
                            o + function(e, t) {
                                if (1 > t) {
                                    var i = function(e) {
                                        var t = "".concat(e).match(/(?:\.(\d+))?(?:[eE]([+-]?\d+))?$/);
                                        return t ? Math.max(0, (t[1] ? t[1].length : 0) - (t[2] ? +t[2] : 0)) : 0
                                    }(t);
                                    return parseFloat(e.toFixed(i))
                                }
                                return Math.round(e / t) * t
                            }(i / 100 * (r - o), a)
                        }
                    }, {
                        key: "set",
                        value: function(t) {
                            e.enabled && v(t) && !t.target.disabled && (t.preventDefault(),
                            t.target.value = this.get(t),
                            function(e, t) {
                                if (e && t) {
                                    var i = new Event(t,{
                                        bubbles: !0
                                    });
                                    e.dispatchEvent(i)
                                }
                            }(t.target, "touchend" === t.type ? "change" : "input"))
                        }
                    }], [{
                        key: "setup",
                        value: function(t) {
                            var i = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {}
                              , n = null;
                            if (b(t) || f(t) ? n = Array.from(document.querySelectorAll(f(t) ? t : 'input[type="range"]')) : y(t) ? n = [t] : g(t) ? n = Array.from(t) : m(t) && (n = t.filter(y)),
                            b(n))
                                return null;
                            var s = r({}, a, {}, i);
                            if (f(t) && s.watch) {
                                var o = new MutationObserver((function(i) {
                                    Array.from(i).forEach((function(i) {
                                        Array.from(i.addedNodes).forEach((function(i) {
                                            y(i) && l(i, t) && new e(i,s)
                                        }
                                        ))
                                    }
                                    ))
                                }
                                ));
                                o.observe(document.body, {
                                    childList: !0,
                                    subtree: !0
                                })
                            }
                            return n.map((function(t) {
                                return new e(t,i)
                            }
                            ))
                        }
                    }, {
                        key: "enabled",
                        get: function() {
                            return "ontouchstart"in document.documentElement
                        }
                    }]),
                    e
                }();
                const T = e => null != e ? e.constructor : null
                  , k = (e, t) => Boolean(e && t && e instanceof t)
                  , C = e => null == e
                  , x = e => T(e) === Object
                  , _ = e => T(e) === String
                  , A = e => T(e) === Function
                  , E = e => Array.isArray(e)
                  , S = e => k(e, NodeList)
                  , L = e => C(e) || (_(e) || E(e) || S(e)) && !e.length || x(e) && !Object.keys(e).length;
                var P = C
                  , O = x
                  , N = e => T(e) === Number && !Number.isNaN(e)
                  , D = _
                  , j = e => T(e) === Boolean
                  , M = A
                  , I = E
                  , $ = S
                  , R = e => null !== e && "object" == typeof e && 1 === e.nodeType && "object" == typeof e.style && "object" == typeof e.ownerDocument
                  , H = e => k(e, Event)
                  , F = e => k(e, KeyboardEvent)
                  , q = e => k(e, TextTrack) || !C(e) && _(e.kind)
                  , V = e => {
                    if (k(e, window.URL))
                        return !0;
                    if (!_(e))
                        return !1;
                    let t = e;
                    e.startsWith("http://") && e.startsWith("https://") || (t = "http://" + e);
                    try {
                        return !L(new URL(t).hostname)
                    } catch (e) {
                        return !1
                    }
                }
                  , B = L;
                const z = ( () => {
                    const e = document.createElement("span")
                      , t = {
                        WebkitTransition: "webkitTransitionEnd",
                        MozTransition: "transitionend",
                        OTransition: "oTransitionEnd otransitionend",
                        transition: "transitionend"
                    }
                      , i = Object.keys(t).find(t => void 0 !== e.style[t]);
                    return !!D(i) && t[i]
                }
                )();
                function W(e, t) {
                    setTimeout( () => {
                        try {
                            e.hidden = !0,
                            e.offsetHeight,
                            e.hidden = !1
                        } catch (e) {}
                    }
                    , t)
                }
                const U = {
                    isIE: Boolean(window.document.documentMode),
                    isEdge: window.navigator.userAgent.includes("Edge"),
                    isWebkit: "WebkitAppearance"in document.documentElement.style && !/Edge/.test(navigator.userAgent),
                    isIPhone: /(iPhone|iPod)/gi.test(navigator.platform),
                    isIos: "MacIntel" === navigator.platform && navigator.maxTouchPoints > 1 || /(iPad|iPhone|iPod)/gi.test(navigator.platform)
                };
                function Y(e, t) {
                    return t.split(".").reduce( (e, t) => e && e[t], e)
                }
                function X(e={}, ...t) {
                    if (!t.length)
                        return e;
                    const i = t.shift();
                    return O(i) ? (Object.keys(i).forEach(t => {
                        O(i[t]) ? (Object.keys(e).includes(t) || Object.assign(e, {
                            [t]: {}
                        }),
                        X(e[t], i[t])) : Object.assign(e, {
                            [t]: i[t]
                        })
                    }
                    ),
                    X(e, ...t)) : e
                }
                function J(e, t) {
                    const i = e.length ? e : [e];
                    Array.from(i).reverse().forEach( (e, i) => {
                        const n = i > 0 ? t.cloneNode(!0) : t
                          , s = e.parentNode
                          , o = e.nextSibling;
                        n.appendChild(e),
                        o ? s.insertBefore(n, o) : s.appendChild(n)
                    }
                    )
                }
                function Z(e, t) {
                    R(e) && !B(t) && Object.entries(t).filter( ([,e]) => !P(e)).forEach( ([t,i]) => e.setAttribute(t, i))
                }
                function G(e, t, i) {
                    const n = document.createElement(e);
                    return O(t) && Z(n, t),
                    D(i) && (n.innerText = i),
                    n
                }
                function K(e, t, i, n) {
                    R(t) && t.appendChild(G(e, i, n))
                }
                function Q(e) {
                    $(e) || I(e) ? Array.from(e).forEach(Q) : R(e) && R(e.parentNode) && e.parentNode.removeChild(e)
                }
                function ee(e) {
                    if (!R(e))
                        return;
                    let {length: t} = e.childNodes;
                    for (; t > 0; )
                        e.removeChild(e.lastChild),
                        t -= 1
                }
                function te(e, t) {
                    return R(t) && R(t.parentNode) && R(e) ? (t.parentNode.replaceChild(e, t),
                    e) : null
                }
                function ie(e, t) {
                    if (!D(e) || B(e))
                        return {};
                    const i = {}
                      , n = X({}, t);
                    return e.split(",").forEach(e => {
                        const t = e.trim()
                          , s = t.replace(".", "")
                          , o = t.replace(/[[\]]/g, "").split("=")
                          , [r] = o
                          , a = o.length > 1 ? o[1].replace(/["']/g, "") : "";
                        switch (t.charAt(0)) {
                        case ".":
                            D(n.class) ? i.class = `${n.class} ${s}` : i.class = s;
                            break;
                        case "#":
                            i.id = t.replace("#", "");
                            break;
                        case "[":
                            i[r] = a
                        }
                    }
                    ),
                    X(n, i)
                }
                function ne(e, t) {
                    if (!R(e))
                        return;
                    let i = t;
                    j(i) || (i = !e.hidden),
                    e.hidden = i
                }
                function se(e, t, i) {
                    if ($(e))
                        return Array.from(e).map(e => se(e, t, i));
                    if (R(e)) {
                        let n = "toggle";
                        return void 0 !== i && (n = i ? "add" : "remove"),
                        e.classList[n](t),
                        e.classList.contains(t)
                    }
                    return !1
                }
                function oe(e, t) {
                    return R(e) && e.classList.contains(t)
                }
                function re(e, t) {
                    const {prototype: i} = Element;
                    return (i.matches || i.webkitMatchesSelector || i.mozMatchesSelector || i.msMatchesSelector || function() {
                        return Array.from(document.querySelectorAll(t)).includes(this)
                    }
                    ).call(e, t)
                }
                function ae(e) {
                    return this.elements.container.querySelectorAll(e)
                }
                function le(e) {
                    return this.elements.container.querySelector(e)
                }
                function ce(e=null, t=!1) {
                    R(e) && (e.focus({
                        preventScroll: !0
                    }),
                    t && se(e, this.config.classNames.tabFocus))
                }
                const de = {
                    "audio/ogg": "vorbis",
                    "audio/wav": "1",
                    "video/webm": "vp8, vorbis",
                    "video/mp4": "avc1.42E01E, mp4a.40.2",
                    "video/ogg": "theora"
                }
                  , ue = {
                    audio: "canPlayType"in document.createElement("audio"),
                    video: "canPlayType"in document.createElement("video"),
                    check(e, t, i) {
                        const n = U.isIPhone && i && ue.playsinline
                          , s = ue[e] || "html5" !== t;
                        return {
                            api: s,
                            ui: s && ue.rangeInput && ("video" !== e || !U.isIPhone || n)
                        }
                    },
                    pip: !(U.isIPhone || !M(G("video").webkitSetPresentationMode) && (!document.pictureInPictureEnabled || G("video").disablePictureInPicture)),
                    airplay: M(window.WebKitPlaybackTargetAvailabilityEvent),
                    playsinline: "playsInline"in document.createElement("video"),
                    mime(e) {
                        if (B(e))
                            return !1;
                        const [t] = e.split("/");
                        let i = e;
                        if (!this.isHTML5 || t !== this.type)
                            return !1;
                        Object.keys(de).includes(i) && (i += `; codecs="${de[e]}"`);
                        try {
                            return Boolean(i && this.media.canPlayType(i).replace(/no/, ""))
                        } catch (e) {
                            return !1
                        }
                    },
                    textTracks: "textTracks"in document.createElement("video"),
                    rangeInput: ( () => {
                        const e = document.createElement("input");
                        return e.type = "range",
                        "range" === e.type
                    }
                    )(),
                    touch: "ontouchstart"in document.documentElement,
                    transitions: !1 !== z,
                    reducedMotion: "matchMedia"in window && window.matchMedia("(prefers-reduced-motion)").matches
                }
                  , he = ( () => {
                    let e = !1;
                    try {
                        const t = Object.defineProperty({}, "passive", {
                            get: () => (e = !0,
                            null)
                        });
                        window.addEventListener("test", null, t),
                        window.removeEventListener("test", null, t)
                    } catch (e) {}
                    return e
                }
                )();
                function pe(e, t, i, n=!1, s=!0, o=!1) {
                    if (!e || !("addEventListener"in e) || B(t) || !M(i))
                        return;
                    const r = t.split(" ");
                    let a = o;
                    he && (a = {
                        passive: s,
                        capture: o
                    }),
                    r.forEach(t => {
                        this && this.eventListeners && n && this.eventListeners.push({
                            element: e,
                            type: t,
                            callback: i,
                            options: a
                        }),
                        e[n ? "addEventListener" : "removeEventListener"](t, i, a)
                    }
                    )
                }
                function fe(e, t="", i, n=!0, s=!1) {
                    pe.call(this, e, t, i, !0, n, s)
                }
                function me(e, t="", i, n=!0, s=!1) {
                    pe.call(this, e, t, i, !1, n, s)
                }
                function ge(e, t="", i, n=!0, s=!1) {
                    const o = (...r) => {
                        me(e, t, o, n, s),
                        i.apply(this, r)
                    }
                    ;
                    pe.call(this, e, t, o, !0, n, s)
                }
                function ye(e, t="", i=!1, n={}) {
                    if (!R(e) || B(t))
                        return;
                    const s = new CustomEvent(t,{
                        bubbles: i,
                        detail: {
                            ...n,
                            plyr: this
                        }
                    });
                    e.dispatchEvent(s)
                }
                function ve() {
                    this && this.eventListeners && (this.eventListeners.forEach(e => {
                        const {element: t, type: i, callback: n, options: s} = e;
                        t.removeEventListener(i, n, s)
                    }
                    ),
                    this.eventListeners = [])
                }
                function be() {
                    return new Promise(e => this.ready ? setTimeout(e, 0) : fe.call(this, this.elements.container, "ready", e)).then( () => {}
                    )
                }
                function we(e) {
                    (e => k(e, Promise) && A(e.then))(e) && e.then(null, () => {}
                    )
                }
                function Te(e) {
                    return I(e) ? e.filter( (t, i) => e.indexOf(t) === i) : e
                }
                function ke(e, t) {
                    return I(e) && e.length ? e.reduce( (e, i) => Math.abs(i - t) < Math.abs(e - t) ? i : e) : null
                }
                function Ce(e) {
                    return !(!window || !window.CSS) && window.CSS.supports(e)
                }
                const xe = [[1, 1], [4, 3], [3, 4], [5, 4], [4, 5], [3, 2], [2, 3], [16, 10], [10, 16], [16, 9], [9, 16], [21, 9], [9, 21], [32, 9], [9, 32]].reduce( (e, [t,i]) => ({
                    ...e,
                    [t / i]: [t, i]
                }), {});
                function _e(e) {
                    return !!(I(e) || D(e) && e.includes(":")) && (I(e) ? e : e.split(":")).map(Number).every(N)
                }
                function Ae(e) {
                    if (!I(e) || !e.every(N))
                        return null;
                    const [t,i] = e
                      , n = (e, t) => 0 === t ? e : n(t, e % t)
                      , s = n(t, i);
                    return [t / s, i / s]
                }
                function Ee(e) {
                    const t = e => _e(e) ? e.split(":").map(Number) : null;
                    let i = t(e);
                    if (null === i && (i = t(this.config.ratio)),
                    null === i && !B(this.embed) && I(this.embed.ratio) && ({ratio: i} = this.embed),
                    null === i && this.isHTML5) {
                        const {videoWidth: e, videoHeight: t} = this.media;
                        i = [e, t]
                    }
                    return Ae(i)
                }
                function Se(e) {
                    if (!this.isVideo)
                        return {};
                    const {wrapper: t} = this.elements
                      , i = Ee.call(this, e);
                    if (!I(i))
                        return {};
                    const [n,s] = Ae(i)
                      , o = 100 / n * s;
                    if (Ce(`aspect-ratio: ${n}/${s}`) ? t.style.aspectRatio = `${n}/${s}` : t.style.paddingBottom = o + "%",
                    this.isVimeo && !this.config.vimeo.premium && this.supported.ui) {
                        const e = 100 / this.media.offsetWidth * parseInt(window.getComputedStyle(this.media).paddingBottom, 10)
                          , i = (e - o) / (e / 50);
                        this.fullscreen.active ? t.style.paddingBottom = null : this.media.style.transform = `translateY(-${i}%)`
                    } else
                        this.isHTML5 && t.classList.add(this.config.classNames.videoFixedRatio);
                    return {
                        padding: o,
                        ratio: i
                    }
                }
                function Le(e, t, i=.05) {
                    const n = e / t
                      , s = ke(Object.keys(xe), n);
                    return Math.abs(s - n) <= i ? xe[s] : [e, t]
                }
                const Pe = {
                    getSources() {
                        return this.isHTML5 ? Array.from(this.media.querySelectorAll("source")).filter(e => {
                            const t = e.getAttribute("type");
                            return !!B(t) || ue.mime.call(this, t)
                        }
                        ) : []
                    },
                    getQualityOptions() {
                        return this.config.quality.forced ? this.config.quality.options : Pe.getSources.call(this).map(e => Number(e.getAttribute("size"))).filter(Boolean)
                    },
                    setup() {
                        if (!this.isHTML5)
                            return;
                        const e = this;
                        e.options.speed = e.config.speed.options,
                        B(this.config.ratio) || Se.call(e),
                        Object.defineProperty(e.media, "quality", {
                            get() {
                                const t = Pe.getSources.call(e).find(t => t.getAttribute("src") === e.source);
                                return t && Number(t.getAttribute("size"))
                            },
                            set(t) {
                                if (e.quality !== t) {
                                    if (e.config.quality.forced && M(e.config.quality.onChange))
                                        e.config.quality.onChange(t);
                                    else {
                                        const i = Pe.getSources.call(e).find(e => Number(e.getAttribute("size")) === t);
                                        if (!i)
                                            return;
                                        const {currentTime: n, paused: s, preload: o, readyState: r, playbackRate: a} = e.media;
                                        e.media.src = i.getAttribute("src"),
                                        ("none" !== o || r) && (e.once("loadedmetadata", () => {
                                            e.speed = a,
                                            e.currentTime = n,
                                            s || we(e.play())
                                        }
                                        ),
                                        e.media.load())
                                    }
                                    ye.call(e, e.media, "qualitychange", !1, {
                                        quality: t
                                    })
                                }
                            }
                        })
                    },
                    cancelRequests() {
                        this.isHTML5 && (Q(Pe.getSources.call(this)),
                        this.media.setAttribute("src", this.config.blankVideo),
                        this.media.load(),
                        this.debug.log("Cancelled network requests"))
                    }
                };
                function Oe(e, ...t) {
                    return B(e) ? e : e.toString().replace(/{(\d+)}/g, (e, i) => t[i].toString())
                }
                const Ne = (e="", t="", i="") => e.replace(new RegExp(t.toString().replace(/([.*+?^=!:${}()|[\]/\\])/g, "\\$1"),"g"), i.toString())
                  , De = (e="") => e.toString().replace(/\w\S*/g, e => e.charAt(0).toUpperCase() + e.substr(1).toLowerCase());
                function je(e) {
                    const t = document.createElement("div");
                    return t.appendChild(e),
                    t.innerHTML
                }
                const Me = {
                    pip: "PIP",
                    airplay: "AirPlay",
                    html5: "HTML5",
                    vimeo: "Vimeo",
                    youtube: "YouTube"
                }
                  , Ie = {
                    get(e="", t={}) {
                        if (B(e) || B(t))
                            return "";
                        let i = Y(t.i18n, e);
                        if (B(i))
                            return Object.keys(Me).includes(e) ? Me[e] : "";
                        const n = {
                            "{seektime}": t.seekTime,
                            "{title}": t.title
                        };
                        return Object.entries(n).forEach( ([e,t]) => {
                            i = Ne(i, e, t)
                        }
                        ),
                        i
                    }
                };
                class $e {
                    constructor(t) {
                        e(this, "get", e => {
                            if (!$e.supported || !this.enabled)
                                return null;
                            const t = window.localStorage.getItem(this.key);
                            if (B(t))
                                return null;
                            const i = JSON.parse(t);
                            return D(e) && e.length ? i[e] : i
                        }
                        ),
                        e(this, "set", e => {
                            if (!$e.supported || !this.enabled)
                                return;
                            if (!O(e))
                                return;
                            let t = this.get();
                            B(t) && (t = {}),
                            X(t, e),
                            window.localStorage.setItem(this.key, JSON.stringify(t))
                        }
                        ),
                        this.enabled = t.config.storage.enabled,
                        this.key = t.config.storage.key
                    }
                    static get supported() {
                        try {
                            if (!("localStorage"in window))
                                return !1;
                            const e = "___test";
                            return window.localStorage.setItem(e, e),
                            window.localStorage.removeItem(e),
                            !0
                        } catch (e) {
                            return !1
                        }
                    }
                }
                function Re(e, t="text") {
                    return new Promise( (i, n) => {
                        try {
                            const n = new XMLHttpRequest;
                            if (!("withCredentials"in n))
                                return;
                            n.addEventListener("load", () => {
                                if ("text" === t)
                                    try {
                                        i(JSON.parse(n.responseText))
                                    } catch (e) {
                                        i(n.responseText)
                                    }
                                else
                                    i(n.response)
                            }
                            ),
                            n.addEventListener("error", () => {
                                throw new Error(n.status)
                            }
                            ),
                            n.open("GET", e, !0),
                            n.responseType = t,
                            n.send()
                        } catch (e) {
                            n(e)
                        }
                    }
                    )
                }
                function He(e, t) {
                    if (!D(e))
                        return;
                    const i = D(t);
                    let n = !1;
                    const s = () => null !== document.getElementById(t)
                      , o = (e, t) => {
                        e.innerHTML = t,
                        i && s() || document.body.insertAdjacentElement("afterbegin", e)
                    }
                    ;
                    if (!i || !s()) {
                        const s = $e.supported
                          , r = document.createElement("div");
                        if (r.setAttribute("hidden", ""),
                        i && r.setAttribute("id", t),
                        s) {
                            const e = window.localStorage.getItem("cache-" + t);
                            if (n = null !== e,
                            n) {
                                const t = JSON.parse(e);
                                o(r, t.content)
                            }
                        }
                        Re(e).then(e => {
                            B(e) || (s && window.localStorage.setItem("cache-" + t, JSON.stringify({
                                content: e
                            })),
                            o(r, e))
                        }
                        ).catch( () => {}
                        )
                    }
                }
                const Fe = e => Math.trunc(e / 60 / 60 % 60, 10);
                function qe(e=0, t=!1, i=!1) {
                    if (!N(e))
                        return qe(void 0, t, i);
                    const n = e => ("0" + e).slice(-2);
                    let s = Fe(e);
                    const o = (r = e,
                    Math.trunc(r / 60 % 60, 10));
                    var r;
                    const a = (e => Math.trunc(e % 60, 10))(e);
                    return s = t || s > 0 ? s + ":" : "",
                    `${i && e > 0 ? "-" : ""}${s}${n(o)}:${n(a)}`
                }
                const Ve = {
                    getIconUrl() {
                        const e = new URL(this.config.iconUrl,window.location).host !== window.location.host || U.isIE && !window.svg4everybody;
                        return {
                            url: this.config.iconUrl,
                            cors: e
                        }
                    },
                    findElements() {
                        try {
                            return this.elements.controls = le.call(this, this.config.selectors.controls.wrapper),
                            this.elements.buttons = {
                                play: ae.call(this, this.config.selectors.buttons.play),
                                pause: le.call(this, this.config.selectors.buttons.pause),
                                restart: le.call(this, this.config.selectors.buttons.restart),
                                rewind: le.call(this, this.config.selectors.buttons.rewind),
                                fastForward: le.call(this, this.config.selectors.buttons.fastForward),
                                mute: le.call(this, this.config.selectors.buttons.mute),
                                pip: le.call(this, this.config.selectors.buttons.pip),
                                airplay: le.call(this, this.config.selectors.buttons.airplay),
                                settings: le.call(this, this.config.selectors.buttons.settings),
                                captions: le.call(this, this.config.selectors.buttons.captions),
                                fullscreen: le.call(this, this.config.selectors.buttons.fullscreen)
                            },
                            this.elements.progress = le.call(this, this.config.selectors.progress),
                            this.elements.inputs = {
                                seek: le.call(this, this.config.selectors.inputs.seek),
                                volume: le.call(this, this.config.selectors.inputs.volume)
                            },
                            this.elements.display = {
                                buffer: le.call(this, this.config.selectors.display.buffer),
                                currentTime: le.call(this, this.config.selectors.display.currentTime),
                                duration: le.call(this, this.config.selectors.display.duration)
                            },
                            R(this.elements.progress) && (this.elements.display.seekTooltip = this.elements.progress.querySelector("." + this.config.classNames.tooltip)),
                            !0
                        } catch (e) {
                            return this.debug.warn("It looks like there is a problem with your custom controls HTML", e),
                            this.toggleNativeControls(!0),
                            !1
                        }
                    },
                    createIcon(e, t) {
                        const i = "http://www.w3.org/2000/svg"
                          , n = Ve.getIconUrl.call(this)
                          , s = `${n.cors ? "" : n.url}#${this.config.iconPrefix}`
                          , o = document.createElementNS(i, "svg");
                        Z(o, X(t, {
                            "aria-hidden": "true",
                            focusable: "false"
                        }));
                        const r = document.createElementNS(i, "use")
                          , a = `${s}-${e}`;
                        return "href"in r && r.setAttributeNS("http://www.w3.org/1999/xlink", "href", a),
                        r.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", a),
                        o.appendChild(r),
                        o
                    },
                    createLabel(e, t={}) {
                        const i = Ie.get(e, this.config);
                        return G("span", {
                            ...t,
                            class: [t.class, this.config.classNames.hidden].filter(Boolean).join(" ")
                        }, i)
                    },
                    createBadge(e) {
                        if (B(e))
                            return null;
                        const t = G("span", {
                            class: this.config.classNames.menu.value
                        });
                        return t.appendChild(G("span", {
                            class: this.config.classNames.menu.badge
                        }, e)),
                        t
                    },
                    createButton(e, t) {
                        const i = X({}, t);
                        let n = function(e="") {
                            let t = e.toString();
                            return t = function(e="") {
                                let t = e.toString();
                                return t = Ne(t, "-", " "),
                                t = Ne(t, "_", " "),
                                t = De(t),
                                Ne(t, " ", "")
                            }(t),
                            t.charAt(0).toLowerCase() + t.slice(1)
                        }(e);
                        const s = {
                            element: "button",
                            toggle: !1,
                            label: null,
                            icon: null,
                            labelPressed: null,
                            iconPressed: null
                        };
                        switch (["element", "icon", "label"].forEach(e => {
                            Object.keys(i).includes(e) && (s[e] = i[e],
                            delete i[e])
                        }
                        ),
                        "button" !== s.element || Object.keys(i).includes("type") || (i.type = "button"),
                        Object.keys(i).includes("class") ? i.class.split(" ").some(e => e === this.config.classNames.control) || X(i, {
                            class: `${i.class} ${this.config.classNames.control}`
                        }) : i.class = this.config.classNames.control,
                        e) {
                        case "play":
                            s.toggle = !0,
                            s.label = "play",
                            s.labelPressed = "pause",
                            s.icon = "play",
                            s.iconPressed = "pause";
                            break;
                        case "mute":
                            s.toggle = !0,
                            s.label = "mute",
                            s.labelPressed = "unmute",
                            s.icon = "volume",
                            s.iconPressed = "muted";
                            break;
                        case "captions":
                            s.toggle = !0,
                            s.label = "enableCaptions",
                            s.labelPressed = "disableCaptions",
                            s.icon = "captions-off",
                            s.iconPressed = "captions-on";
                            break;
                        case "fullscreen":
                            s.toggle = !0,
                            s.label = "enterFullscreen",
                            s.labelPressed = "exitFullscreen",
                            s.icon = "enter-fullscreen",
                            s.iconPressed = "exit-fullscreen";
                            break;
                        case "play-large":
                            i.class += ` ${this.config.classNames.control}--overlaid`,
                            n = "play",
                            s.label = "play",
                            s.icon = "play";
                            break;
                        default:
                            B(s.label) && (s.label = n),
                            B(s.icon) && (s.icon = e)
                        }
                        const o = G(s.element);
                        return s.toggle ? (o.appendChild(Ve.createIcon.call(this, s.iconPressed, {
                            class: "icon--pressed"
                        })),
                        o.appendChild(Ve.createIcon.call(this, s.icon, {
                            class: "icon--not-pressed"
                        })),
                        o.appendChild(Ve.createLabel.call(this, s.labelPressed, {
                            class: "label--pressed"
                        })),
                        o.appendChild(Ve.createLabel.call(this, s.label, {
                            class: "label--not-pressed"
                        }))) : (o.appendChild(Ve.createIcon.call(this, s.icon)),
                        o.appendChild(Ve.createLabel.call(this, s.label))),
                        X(i, ie(this.config.selectors.buttons[n], i)),
                        Z(o, i),
                        "play" === n ? (I(this.elements.buttons[n]) || (this.elements.buttons[n] = []),
                        this.elements.buttons[n].push(o)) : this.elements.buttons[n] = o,
                        o
                    },
                    createRange(e, t) {
                        const i = G("input", X(ie(this.config.selectors.inputs[e]), {
                            type: "range",
                            min: 0,
                            max: 100,
                            step: .01,
                            value: 0,
                            autocomplete: "off",
                            role: "slider",
                            "aria-label": Ie.get(e, this.config),
                            "aria-valuemin": 0,
                            "aria-valuemax": 100,
                            "aria-valuenow": 0
                        }, t));
                        return this.elements.inputs[e] = i,
                        Ve.updateRangeFill.call(this, i),
                        w.setup(i),
                        i
                    },
                    createProgress(e, t) {
                        const i = G("progress", X(ie(this.config.selectors.display[e]), {
                            min: 0,
                            max: 100,
                            value: 0,
                            role: "progressbar",
                            "aria-hidden": !0
                        }, t));
                        if ("volume" !== e) {
                            i.appendChild(G("span", null, "0"));
                            const t = {
                                played: "played",
                                buffer: "buffered"
                            }[e]
                              , n = t ? Ie.get(t, this.config) : "";
                            i.innerText = "% " + n.toLowerCase()
                        }
                        return this.elements.display[e] = i,
                        i
                    },
                    createTime(e, t) {
                        const i = ie(this.config.selectors.display[e], t)
                          , n = G("div", X(i, {
                            class: `${i.class ? i.class : ""} ${this.config.classNames.display.time} `.trim(),
                            "aria-label": Ie.get(e, this.config)
                        }), "00:00");
                        return this.elements.display[e] = n,
                        n
                    },
                    bindMenuItemShortcuts(e, t) {
                        fe.call(this, e, "keydown keyup", i => {
                            if (![32, 38, 39, 40].includes(i.which))
                                return;
                            if (i.preventDefault(),
                            i.stopPropagation(),
                            "keydown" === i.type)
                                return;
                            const n = re(e, '[role="menuitemradio"]');
                            if (!n && [32, 39].includes(i.which))
                                Ve.showMenuPanel.call(this, t, !0);
                            else {
                                let t;
                                32 !== i.which && (40 === i.which || n && 39 === i.which ? (t = e.nextElementSibling,
                                R(t) || (t = e.parentNode.firstElementChild)) : (t = e.previousElementSibling,
                                R(t) || (t = e.parentNode.lastElementChild)),
                                ce.call(this, t, !0))
                            }
                        }
                        , !1),
                        fe.call(this, e, "keyup", e => {
                            13 === e.which && Ve.focusFirstMenuItem.call(this, null, !0)
                        }
                        )
                    },
                    createMenuItem({value: e, list: t, type: i, title: n, badge: s=null, checked: o=!1}) {
                        const r = ie(this.config.selectors.inputs[i])
                          , a = G("button", X(r, {
                            type: "button",
                            role: "menuitemradio",
                            class: `${this.config.classNames.control} ${r.class ? r.class : ""}`.trim(),
                            "aria-checked": o,
                            value: e
                        }))
                          , l = G("span");
                        l.innerHTML = n,
                        R(s) && l.appendChild(s),
                        a.appendChild(l),
                        Object.defineProperty(a, "checked", {
                            enumerable: !0,
                            get: () => "true" === a.getAttribute("aria-checked"),
                            set(e) {
                                e && Array.from(a.parentNode.children).filter(e => re(e, '[role="menuitemradio"]')).forEach(e => e.setAttribute("aria-checked", "false")),
                                a.setAttribute("aria-checked", e ? "true" : "false")
                            }
                        }),
                        this.listeners.bind(a, "click keyup", t => {
                            if (!F(t) || 32 === t.which) {
                                switch (t.preventDefault(),
                                t.stopPropagation(),
                                a.checked = !0,
                                i) {
                                case "language":
                                    this.currentTrack = Number(e);
                                    break;
                                case "quality":
                                    this.quality = e;
                                    break;
                                case "speed":
                                    this.speed = parseFloat(e)
                                }
                                Ve.showMenuPanel.call(this, "home", F(t))
                            }
                        }
                        , i, !1),
                        Ve.bindMenuItemShortcuts.call(this, a, i),
                        t.appendChild(a)
                    },
                    formatTime(e=0, t=!1) {
                        return N(e) ? qe(e, Fe(this.duration) > 0, t) : e
                    },
                    updateTimeDisplay(e=null, t=0, i=!1) {
                        R(e) && N(t) && (e.innerText = Ve.formatTime(t, i))
                    },
                    updateVolume() {
                        this.supported.ui && (R(this.elements.inputs.volume) && Ve.setRange.call(this, this.elements.inputs.volume, this.muted ? 0 : this.volume),
                        R(this.elements.buttons.mute) && (this.elements.buttons.mute.pressed = this.muted || 0 === this.volume))
                    },
                    setRange(e, t=0) {
                        R(e) && (e.value = t,
                        Ve.updateRangeFill.call(this, e))
                    },
                    updateProgress(e) {
                        if (!this.supported.ui || !H(e))
                            return;
                        let t = 0;
                        const i = (e, t) => {
                            const i = N(t) ? t : 0
                              , n = R(e) ? e : this.elements.display.buffer;
                            if (R(n)) {
                                n.value = i;
                                const e = n.getElementsByTagName("span")[0];
                                R(e) && (e.childNodes[0].nodeValue = i)
                            }
                        }
                        ;
                        if (e)
                            switch (e.type) {
                            case "timeupdate":
                            case "seeking":
                            case "seeked":
                                n = this.currentTime,
                                s = this.duration,
                                t = 0 === n || 0 === s || Number.isNaN(n) || Number.isNaN(s) ? 0 : (n / s * 100).toFixed(2),
                                "timeupdate" === e.type && Ve.setRange.call(this, this.elements.inputs.seek, t);
                                break;
                            case "playing":
                            case "progress":
                                i(this.elements.display.buffer, 100 * this.buffered)
                            }
                        var n, s
                    },
                    updateRangeFill(e) {
                        const t = H(e) ? e.target : e;
                        if (R(t) && "range" === t.getAttribute("type")) {
                            if (re(t, this.config.selectors.inputs.seek)) {
                                t.setAttribute("aria-valuenow", this.currentTime);
                                const e = Ve.formatTime(this.currentTime)
                                  , i = Ve.formatTime(this.duration)
                                  , n = Ie.get("seekLabel", this.config);
                                t.setAttribute("aria-valuetext", n.replace("{currentTime}", e).replace("{duration}", i))
                            } else if (re(t, this.config.selectors.inputs.volume)) {
                                const e = 100 * t.value;
                                t.setAttribute("aria-valuenow", e),
                                t.setAttribute("aria-valuetext", e.toFixed(1) + "%")
                            } else
                                t.setAttribute("aria-valuenow", t.value);
                            U.isWebkit && t.style.setProperty("--value", t.value / t.max * 100 + "%")
                        }
                    },
                    updateSeekTooltip(e) {
                        if (!this.config.tooltips.seek || !R(this.elements.inputs.seek) || !R(this.elements.display.seekTooltip) || 0 === this.duration)
                            return;
                        const t = this.config.classNames.tooltip + "--visible"
                          , i = e => se(this.elements.display.seekTooltip, t, e);
                        if (this.touch)
                            return void i(!1);
                        let n = 0;
                        const s = this.elements.progress.getBoundingClientRect();
                        if (H(e))
                            n = 100 / s.width * (e.pageX - s.left);
                        else {
                            if (!oe(this.elements.display.seekTooltip, t))
                                return;
                            n = parseFloat(this.elements.display.seekTooltip.style.left, 10)
                        }
                        n < 0 ? n = 0 : n > 100 && (n = 100),
                        Ve.updateTimeDisplay.call(this, this.elements.display.seekTooltip, this.duration / 100 * n),
                        this.elements.display.seekTooltip.style.left = n + "%",
                        H(e) && ["mouseenter", "mouseleave"].includes(e.type) && i("mouseenter" === e.type)
                    },
                    timeUpdate(e) {
                        const t = !R(this.elements.display.duration) && this.config.invertTime;
                        Ve.updateTimeDisplay.call(this, this.elements.display.currentTime, t ? this.duration - this.currentTime : this.currentTime, t),
                        e && "timeupdate" === e.type && this.media.seeking || Ve.updateProgress.call(this, e)
                    },
                    durationUpdate() {
                        if (!this.supported.ui || !this.config.invertTime && this.currentTime)
                            return;
                        if (this.duration >= 2 ** 32)
                            return ne(this.elements.display.currentTime, !0),
                            void ne(this.elements.progress, !0);
                        R(this.elements.inputs.seek) && this.elements.inputs.seek.setAttribute("aria-valuemax", this.duration);
                        const e = R(this.elements.display.duration);
                        !e && this.config.displayDuration && this.paused && Ve.updateTimeDisplay.call(this, this.elements.display.currentTime, this.duration),
                        e && Ve.updateTimeDisplay.call(this, this.elements.display.duration, this.duration),
                        Ve.updateSeekTooltip.call(this)
                    },
                    toggleMenuButton(e, t) {
                        ne(this.elements.settings.buttons[e], !t)
                    },
                    updateSetting(e, t, i) {
                        const n = this.elements.settings.panels[e];
                        let s = null
                          , o = t;
                        if ("captions" === e)
                            s = this.currentTrack;
                        else {
                            if (s = B(i) ? this[e] : i,
                            B(s) && (s = this.config[e].default),
                            !B(this.options[e]) && !this.options[e].includes(s))
                                return void this.debug.warn(`Unsupported value of '${s}' for ${e}`);
                            if (!this.config[e].options.includes(s))
                                return void this.debug.warn(`Disabled value of '${s}' for ${e}`)
                        }
                        if (R(o) || (o = n && n.querySelector('[role="menu"]')),
                        !R(o))
                            return;
                        this.elements.settings.buttons[e].querySelector("." + this.config.classNames.menu.value).innerHTML = Ve.getLabel.call(this, e, s);
                        const r = o && o.querySelector(`[value="${s}"]`);
                        R(r) && (r.checked = !0)
                    },
                    getLabel(e, t) {
                        switch (e) {
                        case "speed":
                            return 1 === t ? Ie.get("normal", this.config) : t + "&times;";
                        case "quality":
                            if (N(t)) {
                                const e = Ie.get("qualityLabel." + t, this.config);
                                return e.length ? e : t + "p"
                            }
                            return De(t);
                        case "captions":
                            return We.getLabel.call(this);
                        default:
                            return null
                        }
                    },
                    setQualityMenu(e) {
                        if (!R(this.elements.settings.panels.quality))
                            return;
                        const t = "quality"
                          , i = this.elements.settings.panels.quality.querySelector('[role="menu"]');
                        I(e) && (this.options.quality = Te(e).filter(e => this.config.quality.options.includes(e)));
                        const n = !B(this.options.quality) && this.options.quality.length > 1;
                        if (Ve.toggleMenuButton.call(this, t, n),
                        ee(i),
                        Ve.checkMenu.call(this),
                        !n)
                            return;
                        const s = e => {
                            const t = Ie.get("qualityBadge." + e, this.config);
                            return t.length ? Ve.createBadge.call(this, t) : null
                        }
                        ;
                        this.options.quality.sort( (e, t) => {
                            const i = this.config.quality.options;
                            return i.indexOf(e) > i.indexOf(t) ? 1 : -1
                        }
                        ).forEach(e => {
                            Ve.createMenuItem.call(this, {
                                value: e,
                                list: i,
                                type: t,
                                title: Ve.getLabel.call(this, "quality", e),
                                badge: s(e)
                            })
                        }
                        ),
                        Ve.updateSetting.call(this, t, i)
                    },
                    setCaptionsMenu() {
                        if (!R(this.elements.settings.panels.captions))
                            return;
                        const e = "captions"
                          , t = this.elements.settings.panels.captions.querySelector('[role="menu"]')
                          , i = We.getTracks.call(this)
                          , n = Boolean(i.length);
                        if (Ve.toggleMenuButton.call(this, e, n),
                        ee(t),
                        Ve.checkMenu.call(this),
                        !n)
                            return;
                        const s = i.map( (e, i) => ({
                            value: i,
                            checked: this.captions.toggled && this.currentTrack === i,
                            title: We.getLabel.call(this, e),
                            badge: e.language && Ve.createBadge.call(this, e.language.toUpperCase()),
                            list: t,
                            type: "language"
                        }));
                        s.unshift({
                            value: -1,
                            checked: !this.captions.toggled,
                            title: Ie.get("disabled", this.config),
                            list: t,
                            type: "language"
                        }),
                        s.forEach(Ve.createMenuItem.bind(this)),
                        Ve.updateSetting.call(this, e, t)
                    },
                    setSpeedMenu() {
                        if (!R(this.elements.settings.panels.speed))
                            return;
                        const e = "speed"
                          , t = this.elements.settings.panels.speed.querySelector('[role="menu"]');
                        this.options.speed = this.options.speed.filter(e => e >= this.minimumSpeed && e <= this.maximumSpeed);
                        const i = !B(this.options.speed) && this.options.speed.length > 1;
                        Ve.toggleMenuButton.call(this, e, i),
                        ee(t),
                        Ve.checkMenu.call(this),
                        i && (this.options.speed.forEach(i => {
                            Ve.createMenuItem.call(this, {
                                value: i,
                                list: t,
                                type: e,
                                title: Ve.getLabel.call(this, "speed", i)
                            })
                        }
                        ),
                        Ve.updateSetting.call(this, e, t))
                    },
                    checkMenu() {
                        const {buttons: e} = this.elements.settings
                          , t = !B(e) && Object.values(e).some(e => !e.hidden);
                        ne(this.elements.settings.menu, !t)
                    },
                    focusFirstMenuItem(e, t=!1) {
                        if (this.elements.settings.popup.hidden)
                            return;
                        let i = e;
                        R(i) || (i = Object.values(this.elements.settings.panels).find(e => !e.hidden));
                        const n = i.querySelector('[role^="menuitem"]');
                        ce.call(this, n, t)
                    },
                    toggleMenu(e) {
                        const {popup: t} = this.elements.settings
                          , i = this.elements.buttons.settings;
                        if (!R(t) || !R(i))
                            return;
                        const {hidden: n} = t;
                        let s = n;
                        if (j(e))
                            s = e;
                        else if (F(e) && 27 === e.which)
                            s = !1;
                        else if (H(e)) {
                            const n = M(e.composedPath) ? e.composedPath()[0] : e.target
                              , o = t.contains(n);
                            if (o || !o && e.target !== i && s)
                                return
                        }
                        i.setAttribute("aria-expanded", s),
                        ne(t, !s),
                        se(this.elements.container, this.config.classNames.menu.open, s),
                        s && F(e) ? Ve.focusFirstMenuItem.call(this, null, !0) : s || n || ce.call(this, i, F(e))
                    },
                    getMenuSize(e) {
                        const t = e.cloneNode(!0);
                        t.style.position = "absolute",
                        t.style.opacity = 0,
                        t.removeAttribute("hidden"),
                        e.parentNode.appendChild(t);
                        const i = t.scrollWidth
                          , n = t.scrollHeight;
                        return Q(t),
                        {
                            width: i,
                            height: n
                        }
                    },
                    showMenuPanel(e="", t=!1) {
                        const i = this.elements.container.querySelector(`#plyr-settings-${this.id}-${e}`);
                        if (!R(i))
                            return;
                        const n = i.parentNode
                          , s = Array.from(n.children).find(e => !e.hidden);
                        if (ue.transitions && !ue.reducedMotion) {
                            n.style.width = s.scrollWidth + "px",
                            n.style.height = s.scrollHeight + "px";
                            const e = Ve.getMenuSize.call(this, i)
                              , t = e => {
                                e.target === n && ["width", "height"].includes(e.propertyName) && (n.style.width = "",
                                n.style.height = "",
                                me.call(this, n, z, t))
                            }
                            ;
                            fe.call(this, n, z, t),
                            n.style.width = e.width + "px",
                            n.style.height = e.height + "px"
                        }
                        ne(s, !0),
                        ne(i, !1),
                        Ve.focusFirstMenuItem.call(this, i, t)
                    },
                    setDownloadUrl() {
                        const e = this.elements.buttons.download;
                        R(e) && e.setAttribute("href", this.download)
                    },
                    create(e) {
                        const {bindMenuItemShortcuts: t, createButton: i, createProgress: n, createRange: s, createTime: o, setQualityMenu: r, setSpeedMenu: a, showMenuPanel: l} = Ve;
                        this.elements.controls = null,
                        I(this.config.controls) && this.config.controls.includes("play-large") && this.elements.container.appendChild(i.call(this, "play-large"));
                        const c = G("div", ie(this.config.selectors.controls.wrapper));
                        this.elements.controls = c;
                        const d = {
                            class: "plyr__controls__item"
                        };
                        return Te(I(this.config.controls) ? this.config.controls : []).forEach(r => {
                            if ("restart" === r && c.appendChild(i.call(this, "restart", d)),
                            "rewind" === r && c.appendChild(i.call(this, "rewind", d)),
                            "play" === r && c.appendChild(i.call(this, "play", d)),
                            "fast-forward" === r && c.appendChild(i.call(this, "fast-forward", d)),
                            "progress" === r) {
                                const t = G("div", {
                                    class: d.class + " plyr__progress__container"
                                })
                                  , i = G("div", ie(this.config.selectors.progress));
                                if (i.appendChild(s.call(this, "seek", {
                                    id: "plyr-seek-" + e.id
                                })),
                                i.appendChild(n.call(this, "buffer")),
                                this.config.tooltips.seek) {
                                    const e = G("span", {
                                        class: this.config.classNames.tooltip
                                    }, "00:00");
                                    i.appendChild(e),
                                    this.elements.display.seekTooltip = e
                                }
                                this.elements.progress = i,
                                t.appendChild(this.elements.progress),
                                c.appendChild(t)
                            }
                            if ("current-time" === r && c.appendChild(o.call(this, "currentTime", d)),
                            "duration" === r && c.appendChild(o.call(this, "duration", d)),
                            "mute" === r || "volume" === r) {
                                let {volume: t} = this.elements;
                                if (R(t) && c.contains(t) || (t = G("div", X({}, d, {
                                    class: (d.class + " plyr__volume").trim()
                                })),
                                this.elements.volume = t,
                                c.appendChild(t)),
                                "mute" === r && t.appendChild(i.call(this, "mute")),
                                "volume" === r && !U.isIos) {
                                    const i = {
                                        max: 1,
                                        step: .05,
                                        value: this.config.volume
                                    };
                                    t.appendChild(s.call(this, "volume", X(i, {
                                        id: "plyr-volume-" + e.id
                                    })))
                                }
                            }
                            if ("captions" === r && c.appendChild(i.call(this, "captions", d)),
                            "settings" === r && !B(this.config.settings)) {
                                const n = G("div", X({}, d, {
                                    class: (d.class + " plyr__menu").trim(),
                                    hidden: ""
                                }));
                                n.appendChild(i.call(this, "settings", {
                                    "aria-haspopup": !0,
                                    "aria-controls": "plyr-settings-" + e.id,
                                    "aria-expanded": !1
                                }));
                                const s = G("div", {
                                    class: "plyr__menu__container",
                                    id: "plyr-settings-" + e.id,
                                    hidden: ""
                                })
                                  , o = G("div")
                                  , r = G("div", {
                                    id: `plyr-settings-${e.id}-home`
                                })
                                  , a = G("div", {
                                    role: "menu"
                                });
                                r.appendChild(a),
                                o.appendChild(r),
                                this.elements.settings.panels.home = r,
                                this.config.settings.forEach(i => {
                                    const n = G("button", X(ie(this.config.selectors.buttons.settings), {
                                        type: "button",
                                        class: `${this.config.classNames.control} ${this.config.classNames.control}--forward`,
                                        role: "menuitem",
                                        "aria-haspopup": !0,
                                        hidden: ""
                                    }));
                                    t.call(this, n, i),
                                    fe.call(this, n, "click", () => {
                                        l.call(this, i, !1)
                                    }
                                    );
                                    const s = G("span", null, Ie.get(i, this.config))
                                      , r = G("span", {
                                        class: this.config.classNames.menu.value
                                    });
                                    r.innerHTML = e[i],
                                    s.appendChild(r),
                                    n.appendChild(s),
                                    a.appendChild(n);
                                    const c = G("div", {
                                        id: `plyr-settings-${e.id}-${i}`,
                                        hidden: ""
                                    })
                                      , d = G("button", {
                                        type: "button",
                                        class: `${this.config.classNames.control} ${this.config.classNames.control}--back`
                                    });
                                    d.appendChild(G("span", {
                                        "aria-hidden": !0
                                    }, Ie.get(i, this.config))),
                                    d.appendChild(G("span", {
                                        class: this.config.classNames.hidden
                                    }, Ie.get("menuBack", this.config))),
                                    fe.call(this, c, "keydown", e => {
                                        37 === e.which && (e.preventDefault(),
                                        e.stopPropagation(),
                                        l.call(this, "home", !0))
                                    }
                                    , !1),
                                    fe.call(this, d, "click", () => {
                                        l.call(this, "home", !1)
                                    }
                                    ),
                                    c.appendChild(d),
                                    c.appendChild(G("div", {
                                        role: "menu"
                                    })),
                                    o.appendChild(c),
                                    this.elements.settings.buttons[i] = n,
                                    this.elements.settings.panels[i] = c
                                }
                                ),
                                s.appendChild(o),
                                n.appendChild(s),
                                c.appendChild(n),
                                this.elements.settings.popup = s,
                                this.elements.settings.menu = n
                            }
                            if ("pip" === r && ue.pip && c.appendChild(i.call(this, "pip", d)),
                            "airplay" === r && ue.airplay && c.appendChild(i.call(this, "airplay", d)),
                            "download" === r) {
                                const e = X({}, d, {
                                    element: "a",
                                    href: this.download,
                                    target: "_blank"
                                });
                                this.isHTML5 && (e.download = "");
                                const {download: t} = this.config.urls;
                                !V(t) && this.isEmbed && X(e, {
                                    icon: "logo-" + this.provider,
                                    label: this.provider
                                }),
                                c.appendChild(i.call(this, "download", e))
                            }
                            "fullscreen" === r && c.appendChild(i.call(this, "fullscreen", d))
                        }
                        ),
                        this.isHTML5 && r.call(this, Pe.getQualityOptions.call(this)),
                        a.call(this),
                        c
                    },
                    inject() {
                        if (this.config.loadSprite) {
                            const e = Ve.getIconUrl.call(this);
                            e.cors && He(e.url, "sprite-plyr")
                        }
                        this.id = Math.floor(1e4 * Math.random());
                        let e = null;
                        this.elements.controls = null;
                        const t = {
                            id: this.id,
                            seektime: this.config.seekTime,
                            title: this.config.title
                        };
                        let i, n = !0;
                        if (M(this.config.controls) && (this.config.controls = this.config.controls.call(this, t)),
                        this.config.controls || (this.config.controls = []),
                        R(this.config.controls) || D(this.config.controls) ? e = this.config.controls : (e = Ve.create.call(this, {
                            id: this.id,
                            seektime: this.config.seekTime,
                            speed: this.speed,
                            quality: this.quality,
                            captions: We.getLabel.call(this)
                        }),
                        n = !1),
                        n && D(this.config.controls) && (e = (e => {
                            let i = e;
                            return Object.entries(t).forEach( ([e,t]) => {
                                i = Ne(i, `{${e}}`, t)
                            }
                            ),
                            i
                        }
                        )(e)),
                        D(this.config.selectors.controls.container) && (i = document.querySelector(this.config.selectors.controls.container)),
                        R(i) || (i = this.elements.container),
                        i[R(e) ? "insertAdjacentElement" : "insertAdjacentHTML"]("afterbegin", e),
                        R(this.elements.controls) || Ve.findElements.call(this),
                        !B(this.elements.buttons)) {
                            const e = e => {
                                const t = this.config.classNames.controlPressed;
                                Object.defineProperty(e, "pressed", {
                                    enumerable: !0,
                                    get: () => oe(e, t),
                                    set(i=!1) {
                                        se(e, t, i)
                                    }
                                })
                            }
                            ;
                            Object.values(this.elements.buttons).filter(Boolean).forEach(t => {
                                I(t) || $(t) ? Array.from(t).filter(Boolean).forEach(e) : e(t)
                            }
                            )
                        }
                        if (U.isEdge && W(i),
                        this.config.tooltips.controls) {
                            const {classNames: e, selectors: t} = this.config
                              , i = `${t.controls.wrapper} ${t.labels} .${e.hidden}`
                              , n = ae.call(this, i);
                            Array.from(n).forEach(e => {
                                se(e, this.config.classNames.hidden, !1),
                                se(e, this.config.classNames.tooltip, !0)
                            }
                            )
                        }
                    }
                };
                function Be(e, t=!0) {
                    let i = e;
                    if (t) {
                        const e = document.createElement("a");
                        e.href = i,
                        i = e.href
                    }
                    try {
                        return new URL(i)
                    } catch (e) {
                        return null
                    }
                }
                function ze(e) {
                    const t = new URLSearchParams;
                    return O(e) && Object.entries(e).forEach( ([e,i]) => {
                        t.set(e, i)
                    }
                    ),
                    t
                }
                const We = {
                    setup() {
                        if (!this.supported.ui)
                            return;
                        if (!this.isVideo || this.isYouTube || this.isHTML5 && !ue.textTracks)
                            return void (I(this.config.controls) && this.config.controls.includes("settings") && this.config.settings.includes("captions") && Ve.setCaptionsMenu.call(this));
                        var e, t;
                        if (R(this.elements.captions) || (this.elements.captions = G("div", ie(this.config.selectors.captions)),
                        e = this.elements.captions,
                        t = this.elements.wrapper,
                        R(e) && R(t) && t.parentNode.insertBefore(e, t.nextSibling)),
                        U.isIE && window.URL) {
                            const e = this.media.querySelectorAll("track");
                            Array.from(e).forEach(e => {
                                const t = e.getAttribute("src")
                                  , i = Be(t);
                                null !== i && i.hostname !== window.location.href.hostname && ["http:", "https:"].includes(i.protocol) && Re(t, "blob").then(t => {
                                    e.setAttribute("src", window.URL.createObjectURL(t))
                                }
                                ).catch( () => {
                                    Q(e)
                                }
                                )
                            }
                            )
                        }
                        const i = Te((navigator.languages || [navigator.language || navigator.userLanguage || "en"]).map(e => e.split("-")[0]));
                        let n = (this.storage.get("language") || this.config.captions.language || "auto").toLowerCase();
                        "auto" === n && ([n] = i);
                        let s = this.storage.get("captions");
                        if (j(s) || ({active: s} = this.config.captions),
                        Object.assign(this.captions, {
                            toggled: !1,
                            active: s,
                            language: n,
                            languages: i
                        }),
                        this.isHTML5) {
                            const e = this.config.captions.update ? "addtrack removetrack" : "removetrack";
                            fe.call(this, this.media.textTracks, e, We.update.bind(this))
                        }
                        setTimeout(We.update.bind(this), 0)
                    },
                    update() {
                        const e = We.getTracks.call(this, !0)
                          , {active: t, language: i, meta: n, currentTrackNode: s} = this.captions
                          , o = Boolean(e.find(e => e.language === i));
                        this.isHTML5 && this.isVideo && e.filter(e => !n.get(e)).forEach(e => {
                            this.debug.log("Track added", e),
                            n.set(e, {
                                default: "showing" === e.mode
                            }),
                            "showing" === e.mode && (e.mode = "hidden"),
                            fe.call(this, e, "cuechange", () => We.updateCues.call(this))
                        }
                        ),
                        (o && this.language !== i || !e.includes(s)) && (We.setLanguage.call(this, i),
                        We.toggle.call(this, t && o)),
                        se(this.elements.container, this.config.classNames.captions.enabled, !B(e)),
                        I(this.config.controls) && this.config.controls.includes("settings") && this.config.settings.includes("captions") && Ve.setCaptionsMenu.call(this)
                    },
                    toggle(e, t=!0) {
                        if (!this.supported.ui)
                            return;
                        const {toggled: i} = this.captions
                          , n = this.config.classNames.captions.active
                          , s = P(e) ? !i : e;
                        if (s !== i) {
                            if (t || (this.captions.active = s,
                            this.storage.set({
                                captions: s
                            })),
                            !this.language && s && !t) {
                                const e = We.getTracks.call(this)
                                  , t = We.findTrack.call(this, [this.captions.language, ...this.captions.languages], !0);
                                return this.captions.language = t.language,
                                void We.set.call(this, e.indexOf(t))
                            }
                            this.elements.buttons.captions && (this.elements.buttons.captions.pressed = s),
                            se(this.elements.container, n, s),
                            this.captions.toggled = s,
                            Ve.updateSetting.call(this, "captions"),
                            ye.call(this, this.media, s ? "captionsenabled" : "captionsdisabled")
                        }
                        setTimeout( () => {
                            s && this.captions.toggled && (this.captions.currentTrackNode.mode = "hidden")
                        }
                        )
                    },
                    set(e, t=!0) {
                        const i = We.getTracks.call(this);
                        if (-1 !== e)
                            if (N(e))
                                if (e in i) {
                                    if (this.captions.currentTrack !== e) {
                                        this.captions.currentTrack = e;
                                        const n = i[e]
                                          , {language: s} = n || {};
                                        this.captions.currentTrackNode = n,
                                        Ve.updateSetting.call(this, "captions"),
                                        t || (this.captions.language = s,
                                        this.storage.set({
                                            language: s
                                        })),
                                        this.isVimeo && this.embed.enableTextTrack(s),
                                        ye.call(this, this.media, "languagechange")
                                    }
                                    We.toggle.call(this, !0, t),
                                    this.isHTML5 && this.isVideo && We.updateCues.call(this)
                                } else
                                    this.debug.warn("Track not found", e);
                            else
                                this.debug.warn("Invalid caption argument", e);
                        else
                            We.toggle.call(this, !1, t)
                    },
                    setLanguage(e, t=!0) {
                        if (!D(e))
                            return void this.debug.warn("Invalid language argument", e);
                        const i = e.toLowerCase();
                        this.captions.language = i;
                        const n = We.getTracks.call(this)
                          , s = We.findTrack.call(this, [i]);
                        We.set.call(this, n.indexOf(s), t)
                    },
                    getTracks(e=!1) {
                        return Array.from((this.media || {}).textTracks || []).filter(t => !this.isHTML5 || e || this.captions.meta.has(t)).filter(e => ["captions", "subtitles"].includes(e.kind))
                    },
                    findTrack(e, t=!1) {
                        const i = We.getTracks.call(this)
                          , n = e => Number((this.captions.meta.get(e) || {}).default)
                          , s = Array.from(i).sort( (e, t) => n(t) - n(e));
                        let o;
                        return e.every(e => (o = s.find(t => t.language === e),
                        !o)),
                        o || (t ? s[0] : void 0)
                    },
                    getCurrentTrack() {
                        return We.getTracks.call(this)[this.currentTrack]
                    },
                    getLabel(e) {
                        let t = e;
                        return !q(t) && ue.textTracks && this.captions.toggled && (t = We.getCurrentTrack.call(this)),
                        q(t) ? B(t.label) ? B(t.language) ? Ie.get("enabled", this.config) : e.language.toUpperCase() : t.label : Ie.get("disabled", this.config)
                    },
                    updateCues(e) {
                        if (!this.supported.ui)
                            return;
                        if (!R(this.elements.captions))
                            return void this.debug.warn("No captions element to render to");
                        if (!P(e) && !Array.isArray(e))
                            return void this.debug.warn("updateCues: Invalid input", e);
                        let t = e;
                        if (!t) {
                            const e = We.getCurrentTrack.call(this);
                            t = Array.from((e || {}).activeCues || []).map(e => e.getCueAsHTML()).map(je)
                        }
                        const i = t.map(e => e.trim()).join("\n");
                        if (i !== this.elements.captions.innerHTML) {
                            ee(this.elements.captions);
                            const e = G("span", ie(this.config.selectors.caption));
                            e.innerHTML = i,
                            this.elements.captions.appendChild(e),
                            ye.call(this, this.media, "cuechange")
                        }
                    }
                }
                  , Ue = {
                    enabled: !0,
                    title: "",
                    debug: !1,
                    autoplay: !1,
                    autopause: !0,
                    playsinline: !0,
                    seekTime: 10,
                    volume: 1,
                    muted: !1,
                    duration: null,
                    displayDuration: !0,
                    invertTime: !0,
                    toggleInvert: !0,
                    ratio: null,
                    clickToPlay: !0,
                    hideControls: !0,
                    resetOnEnd: !1,
                    disableContextMenu: !0,
                    loadSprite: !0,
                    iconPrefix: "plyr",
                    iconUrl: "https://cdn.plyr.io/3.6.8/plyr.svg",
                    blankVideo: "https://cdn.plyr.io/static/blank.mp4",
                    quality: {
                        default: 576,
                        options: [4320, 2880, 2160, 1440, 1080, 720, 576, 480, 360, 240],
                        forced: !1,
                        onChange: null
                    },
                    loop: {
                        active: !1
                    },
                    speed: {
                        selected: 1,
                        options: [.5, .75, 1, 1.25, 1.5, 1.75, 2, 4]
                    },
                    keyboard: {
                        focused: !0,
                        global: !1
                    },
                    tooltips: {
                        controls: !1,
                        seek: !0
                    },
                    captions: {
                        active: !1,
                        language: "auto",
                        update: !1
                    },
                    fullscreen: {
                        enabled: !0,
                        fallback: !0,
                        iosNative: !1
                    },
                    storage: {
                        enabled: !0,
                        key: "plyr"
                    },
                    controls: ["play-large", "play", "progress", "current-time", "mute", "volume", "captions", "settings", "pip", "airplay", "fullscreen"],
                    settings: ["captions", "quality", "speed"],
                    i18n: {
                        restart: "Restart",
                        rewind: "Rewind {seektime}s",
                        play: "Play",
                        pause: "Pause",
                        fastForward: "Forward {seektime}s",
                        seek: "Seek",
                        seekLabel: "{currentTime} of {duration}",
                        played: "Played",
                        buffered: "Buffered",
                        currentTime: "Current time",
                        duration: "Duration",
                        volume: "Volume",
                        mute: "Mute",
                        unmute: "Unmute",
                        enableCaptions: "Enable captions",
                        disableCaptions: "Disable captions",
                        download: "Download",
                        enterFullscreen: "Enter fullscreen",
                        exitFullscreen: "Exit fullscreen",
                        frameTitle: "Player for {title}",
                        captions: "Captions",
                        settings: "Settings",
                        pip: "PIP",
                        menuBack: "Go back to previous menu",
                        speed: "Speed",
                        normal: "Normal",
                        quality: "Quality",
                        loop: "Loop",
                        start: "Start",
                        end: "End",
                        all: "All",
                        reset: "Reset",
                        disabled: "Disabled",
                        enabled: "Enabled",
                        advertisement: "Ad",
                        qualityBadge: {
                            2160: "4K",
                            1440: "HD",
                            1080: "HD",
                            720: "HD",
                            576: "SD",
                            480: "SD"
                        }
                    },
                    urls: {
                        download: null,
                        vimeo: {
                            sdk: "https://player.vimeo.com/api/player.js",
                            iframe: "https://player.vimeo.com/video/{0}?{1}",
                            api: "https://vimeo.com/api/oembed.json?url={0}"
                        },
                        youtube: {
                            sdk: "https://www.youtube.com/iframe_api",
                            api: "https://noembed.com/embed?url=https://www.youtube.com/watch?v={0}"
                        },
                        googleIMA: {
                            sdk: "https://imasdk.googleapis.com/js/sdkloader/ima3.js"
                        }
                    },
                    listeners: {
                        seek: null,
                        play: null,
                        pause: null,
                        restart: null,
                        rewind: null,
                        fastForward: null,
                        mute: null,
                        volume: null,
                        captions: null,
                        download: null,
                        fullscreen: null,
                        pip: null,
                        airplay: null,
                        speed: null,
                        quality: null,
                        loop: null,
                        language: null
                    },
                    events: ["ended", "progress", "stalled", "playing", "waiting", "canplay", "canplaythrough", "loadstart", "loadeddata", "loadedmetadata", "timeupdate", "volumechange", "play", "pause", "error", "seeking", "seeked", "emptied", "ratechange", "cuechange", "download", "enterfullscreen", "exitfullscreen", "captionsenabled", "captionsdisabled", "languagechange", "controlshidden", "controlsshown", "ready", "statechange", "qualitychange", "adsloaded", "adscontentpause", "adscontentresume", "adstarted", "adsmidpoint", "adscomplete", "adsallcomplete", "adsimpression", "adsclick"],
                    selectors: {
                        editable: "input, textarea, select, [contenteditable]",
                        container: ".plyr",
                        controls: {
                            container: null,
                            wrapper: ".plyr__controls"
                        },
                        labels: "[data-plyr]",
                        buttons: {
                            play: '[data-plyr="play"]',
                            pause: '[data-plyr="pause"]',
                            restart: '[data-plyr="restart"]',
                            rewind: '[data-plyr="rewind"]',
                            fastForward: '[data-plyr="fast-forward"]',
                            mute: '[data-plyr="mute"]',
                            captions: '[data-plyr="captions"]',
                            download: '[data-plyr="download"]',
                            fullscreen: '[data-plyr="fullscreen"]',
                            pip: '[data-plyr="pip"]',
                            airplay: '[data-plyr="airplay"]',
                            settings: '[data-plyr="settings"]',
                            loop: '[data-plyr="loop"]'
                        },
                        inputs: {
                            seek: '[data-plyr="seek"]',
                            volume: '[data-plyr="volume"]',
                            speed: '[data-plyr="speed"]',
                            language: '[data-plyr="language"]',
                            quality: '[data-plyr="quality"]'
                        },
                        display: {
                            currentTime: ".plyr__time--current",
                            duration: ".plyr__time--duration",
                            buffer: ".plyr__progress__buffer",
                            loop: ".plyr__progress__loop",
                            volume: ".plyr__volume--display"
                        },
                        progress: ".plyr__progress",
                        captions: ".plyr__captions",
                        caption: ".plyr__caption"
                    },
                    classNames: {
                        type: "plyr--{0}",
                        provider: "plyr--{0}",
                        video: "plyr__video-wrapper",
                        embed: "plyr__video-embed",
                        videoFixedRatio: "plyr__video-wrapper--fixed-ratio",
                        embedContainer: "plyr__video-embed__container",
                        poster: "plyr__poster",
                        posterEnabled: "plyr__poster-enabled",
                        ads: "plyr__ads",
                        control: "plyr__control",
                        controlPressed: "plyr__control--pressed",
                        playing: "plyr--playing",
                        paused: "plyr--paused",
                        stopped: "plyr--stopped",
                        loading: "plyr--loading",
                        hover: "plyr--hover",
                        tooltip: "plyr__tooltip",
                        cues: "plyr__cues",
                        hidden: "plyr__sr-only",
                        hideControls: "plyr--hide-controls",
                        isIos: "plyr--is-ios",
                        isTouch: "plyr--is-touch",
                        uiSupported: "plyr--full-ui",
                        noTransition: "plyr--no-transition",
                        display: {
                            time: "plyr__time"
                        },
                        menu: {
                            value: "plyr__menu__value",
                            badge: "plyr__badge",
                            open: "plyr--menu-open"
                        },
                        captions: {
                            enabled: "plyr--captions-enabled",
                            active: "plyr--captions-active"
                        },
                        fullscreen: {
                            enabled: "plyr--fullscreen-enabled",
                            fallback: "plyr--fullscreen-fallback"
                        },
                        pip: {
                            supported: "plyr--pip-supported",
                            active: "plyr--pip-active"
                        },
                        airplay: {
                            supported: "plyr--airplay-supported",
                            active: "plyr--airplay-active"
                        },
                        tabFocus: "plyr__tab-focus",
                        previewThumbnails: {
                            thumbContainer: "plyr__preview-thumb",
                            thumbContainerShown: "plyr__preview-thumb--is-shown",
                            imageContainer: "plyr__preview-thumb__image-container",
                            timeContainer: "plyr__preview-thumb__time-container",
                            scrubbingContainer: "plyr__preview-scrubbing",
                            scrubbingContainerShown: "plyr__preview-scrubbing--is-shown"
                        }
                    },
                    attributes: {
                        embed: {
                            provider: "data-plyr-provider",
                            id: "data-plyr-embed-id"
                        }
                    },
                    ads: {
                        enabled: !1,
                        publisherId: "",
                        tagUrl: ""
                    },
                    previewThumbnails: {
                        enabled: !1,
                        src: ""
                    },
                    vimeo: {
                        byline: !1,
                        portrait: !1,
                        title: !1,
                        speed: !0,
                        transparent: !1,
                        customControls: !0,
                        referrerPolicy: null,
                        premium: !1
                    },
                    youtube: {
                        rel: 0,
                        showinfo: 0,
                        iv_load_policy: 3,
                        modestbranding: 1,
                        customControls: !0,
                        noCookie: !1
                    }
                }
                  , Ye = "picture-in-picture"
                  , Xe = {
                    html5: "html5",
                    youtube: "youtube",
                    vimeo: "vimeo"
                }
                  , Je = () => {}
                ;
                class Ze {
                    constructor(e=!1) {
                        this.enabled = window.console && e,
                        this.enabled && this.log("Debugging enabled")
                    }
                    get log() {
                        return this.enabled ? Function.prototype.bind.call(console.log, console) : Je
                    }
                    get warn() {
                        return this.enabled ? Function.prototype.bind.call(console.warn, console) : Je
                    }
                    get error() {
                        return this.enabled ? Function.prototype.bind.call(console.error, console) : Je
                    }
                }
                class Ge {
                    constructor(t) {
                        e(this, "onChange", () => {
                            if (!this.enabled)
                                return;
                            const e = this.player.elements.buttons.fullscreen;
                            R(e) && (e.pressed = this.active);
                            const t = this.target === this.player.media ? this.target : this.player.elements.container;
                            ye.call(this.player, t, this.active ? "enterfullscreen" : "exitfullscreen", !0)
                        }
                        ),
                        e(this, "toggleFallback", (e=!1) => {
                            if (e ? this.scrollPosition = {
                                x: window.scrollX || 0,
                                y: window.scrollY || 0
                            } : window.scrollTo(this.scrollPosition.x, this.scrollPosition.y),
                            document.body.style.overflow = e ? "hidden" : "",
                            se(this.target, this.player.config.classNames.fullscreen.fallback, e),
                            U.isIos) {
                                let t = document.head.querySelector('meta[name="viewport"]');
                                const i = "viewport-fit=cover";
                                t || (t = document.createElement("meta"),
                                t.setAttribute("name", "viewport"));
                                const n = D(t.content) && t.content.includes(i);
                                e ? (this.cleanupViewport = !n,
                                n || (t.content += "," + i)) : this.cleanupViewport && (t.content = t.content.split(",").filter(e => e.trim() !== i).join(","))
                            }
                            this.onChange()
                        }
                        ),
                        e(this, "trapFocus", e => {
                            if (U.isIos || !this.active || "Tab" !== e.key || 9 !== e.keyCode)
                                return;
                            const t = document.activeElement
                              , i = ae.call(this.player, "a[href], button:not(:disabled), input:not(:disabled), [tabindex]")
                              , [n] = i
                              , s = i[i.length - 1];
                            t !== s || e.shiftKey ? t === n && e.shiftKey && (s.focus(),
                            e.preventDefault()) : (n.focus(),
                            e.preventDefault())
                        }
                        ),
                        e(this, "update", () => {
                            if (this.enabled) {
                                let e;
                                e = this.forceFallback ? "Fallback (forced)" : Ge.native ? "Native" : "Fallback",
                                this.player.debug.log(e + " fullscreen enabled")
                            } else
                                this.player.debug.log("Fullscreen not supported and fallback disabled");
                            se(this.player.elements.container, this.player.config.classNames.fullscreen.enabled, this.enabled)
                        }
                        ),
                        e(this, "enter", () => {
                            this.enabled && (U.isIos && this.player.config.fullscreen.iosNative ? this.player.isVimeo ? this.player.embed.requestFullscreen() : this.target.webkitEnterFullscreen() : !Ge.native || this.forceFallback ? this.toggleFallback(!0) : this.prefix ? B(this.prefix) || this.target[`${this.prefix}Request${this.property}`]() : this.target.requestFullscreen({
                                navigationUI: "hide"
                            }))
                        }
                        ),
                        e(this, "exit", () => {
                            if (this.enabled)
                                if (U.isIos && this.player.config.fullscreen.iosNative)
                                    this.target.webkitExitFullscreen(),
                                    we(this.player.play());
                                else if (!Ge.native || this.forceFallback)
                                    this.toggleFallback(!1);
                                else if (this.prefix) {
                                    if (!B(this.prefix)) {
                                        const e = "moz" === this.prefix ? "Cancel" : "Exit";
                                        document[`${this.prefix}${e}${this.property}`]()
                                    }
                                } else
                                    (document.cancelFullScreen || document.exitFullscreen).call(document)
                        }
                        ),
                        e(this, "toggle", () => {
                            this.active ? this.exit() : this.enter()
                        }
                        ),
                        this.player = t,
                        this.prefix = Ge.prefix,
                        this.property = Ge.property,
                        this.scrollPosition = {
                            x: 0,
                            y: 0
                        },
                        this.forceFallback = "force" === t.config.fullscreen.fallback,
                        this.player.elements.fullscreen = t.config.fullscreen.container && function(e, t) {
                            const {prototype: i} = Element;
                            return (i.closest || function() {
                                let e = this;
                                do {
                                    if (re.matches(e, t))
                                        return e;
                                    e = e.parentElement || e.parentNode
                                } while (null !== e && 1 === e.nodeType);
                                return null
                            }
                            ).call(e, t)
                        }(this.player.elements.container, t.config.fullscreen.container),
                        fe.call(this.player, document, "ms" === this.prefix ? "MSFullscreenChange" : this.prefix + "fullscreenchange", () => {
                            this.onChange()
                        }
                        ),
                        fe.call(this.player, this.player.elements.container, "dblclick", e => {
                            R(this.player.elements.controls) && this.player.elements.controls.contains(e.target) || this.player.listeners.proxy(e, this.toggle, "fullscreen")
                        }
                        ),
                        fe.call(this, this.player.elements.container, "keydown", e => this.trapFocus(e)),
                        this.update()
                    }
                    static get native() {
                        return !!(document.fullscreenEnabled || document.webkitFullscreenEnabled || document.mozFullScreenEnabled || document.msFullscreenEnabled)
                    }
                    get usingNative() {
                        return Ge.native && !this.forceFallback
                    }
                    static get prefix() {
                        if (M(document.exitFullscreen))
                            return "";
                        let e = "";
                        return ["webkit", "moz", "ms"].some(t => !(!M(document[t + "ExitFullscreen"]) && !M(document[t + "CancelFullScreen"]) || (e = t,
                        0))),
                        e
                    }
                    static get property() {
                        return "moz" === this.prefix ? "FullScreen" : "Fullscreen"
                    }
                    get enabled() {
                        return (Ge.native || this.player.config.fullscreen.fallback) && this.player.config.fullscreen.enabled && this.player.supported.ui && this.player.isVideo
                    }
                    get active() {
                        if (!this.enabled)
                            return !1;
                        if (!Ge.native || this.forceFallback)
                            return oe(this.target, this.player.config.classNames.fullscreen.fallback);
                        const e = this.prefix ? document[`${this.prefix}${this.property}Element`] : document.fullscreenElement;
                        return e && e.shadowRoot ? e === this.target.getRootNode().host : e === this.target
                    }
                    get target() {
                        return U.isIos && this.player.config.fullscreen.iosNative ? this.player.media : this.player.elements.fullscreen || this.player.elements.container
                    }
                }
                function Ke(e, t=1) {
                    return new Promise( (i, n) => {
                        const s = new Image
                          , o = () => {
                            delete s.onload,
                            delete s.onerror,
                            (s.naturalWidth >= t ? i : n)(s)
                        }
                        ;
                        Object.assign(s, {
                            onload: o,
                            onerror: o,
                            src: e
                        })
                    }
                    )
                }
                const Qe = {
                    addStyleHook() {
                        se(this.elements.container, this.config.selectors.container.replace(".", ""), !0),
                        se(this.elements.container, this.config.classNames.uiSupported, this.supported.ui)
                    },
                    toggleNativeControls(e=!1) {
                        e && this.isHTML5 ? this.media.setAttribute("controls", "") : this.media.removeAttribute("controls")
                    },
                    build() {
                        if (this.listeners.media(),
                        !this.supported.ui)
                            return this.debug.warn(`Basic support only for ${this.provider} ${this.type}`),
                            void Qe.toggleNativeControls.call(this, !0);
                        R(this.elements.controls) || (Ve.inject.call(this),
                        this.listeners.controls()),
                        Qe.toggleNativeControls.call(this),
                        this.isHTML5 && We.setup.call(this),
                        this.volume = null,
                        this.muted = null,
                        this.loop = null,
                        this.quality = null,
                        this.speed = null,
                        Ve.updateVolume.call(this),
                        Ve.timeUpdate.call(this),
                        Qe.checkPlaying.call(this),
                        se(this.elements.container, this.config.classNames.pip.supported, ue.pip && this.isHTML5 && this.isVideo),
                        se(this.elements.container, this.config.classNames.airplay.supported, ue.airplay && this.isHTML5),
                        se(this.elements.container, this.config.classNames.isIos, U.isIos),
                        se(this.elements.container, this.config.classNames.isTouch, this.touch),
                        this.ready = !0,
                        setTimeout( () => {
                            ye.call(this, this.media, "ready")
                        }
                        , 0),
                        Qe.setTitle.call(this),
                        this.poster && Qe.setPoster.call(this, this.poster, !1).catch( () => {}
                        ),
                        this.config.duration && Ve.durationUpdate.call(this)
                    },
                    setTitle() {
                        let e = Ie.get("play", this.config);
                        if (D(this.config.title) && !B(this.config.title) && (e += ", " + this.config.title),
                        Array.from(this.elements.buttons.play || []).forEach(t => {
                            t.setAttribute("aria-label", e)
                        }
                        ),
                        this.isEmbed) {
                            const e = le.call(this, "iframe");
                            if (!R(e))
                                return;
                            const t = B(this.config.title) ? "video" : this.config.title
                              , i = Ie.get("frameTitle", this.config);
                            e.setAttribute("title", i.replace("{title}", t))
                        }
                    },
                    togglePoster(e) {
                        se(this.elements.container, this.config.classNames.posterEnabled, e)
                    },
                    setPoster(e, t=!0) {
                        return t && this.poster ? Promise.reject(new Error("Poster already set")) : (this.media.setAttribute("data-poster", e),
                        this.elements.poster.removeAttribute("hidden"),
                        be.call(this).then( () => Ke(e)).catch(t => {
                            throw e === this.poster && Qe.togglePoster.call(this, !1),
                            t
                        }
                        ).then( () => {
                            if (e !== this.poster)
                                throw new Error("setPoster cancelled by later call to setPoster")
                        }
                        ).then( () => (Object.assign(this.elements.poster.style, {
                            backgroundImage: `url('${e}')`,
                            backgroundSize: ""
                        }),
                        Qe.togglePoster.call(this, !0),
                        e)))
                    },
                    checkPlaying(e) {
                        se(this.elements.container, this.config.classNames.playing, this.playing),
                        se(this.elements.container, this.config.classNames.paused, this.paused),
                        se(this.elements.container, this.config.classNames.stopped, this.stopped),
                        Array.from(this.elements.buttons.play || []).forEach(e => {
                            Object.assign(e, {
                                pressed: this.playing
                            }),
                            e.setAttribute("aria-label", Ie.get(this.playing ? "pause" : "play", this.config))
                        }
                        ),
                        H(e) && "timeupdate" === e.type || Qe.toggleControls.call(this)
                    },
                    checkLoading(e) {
                        this.loading = ["stalled", "waiting"].includes(e.type),
                        clearTimeout(this.timers.loading),
                        this.timers.loading = setTimeout( () => {
                            se(this.elements.container, this.config.classNames.loading, this.loading),
                            Qe.toggleControls.call(this)
                        }
                        , this.loading ? 250 : 0)
                    },
                    toggleControls(e) {
                        const {controls: t} = this.elements;
                        if (t && this.config.hideControls) {
                            const i = this.touch && this.lastSeekTime + 2e3 > Date.now();
                            this.toggleControls(Boolean(e || this.loading || this.paused || t.pressed || t.hover || i))
                        }
                    },
                    migrateStyles() {
                        Object.values({
                            ...this.media.style
                        }).filter(e => !B(e) && D(e) && e.startsWith("--plyr")).forEach(e => {
                            this.elements.container.style.setProperty(e, this.media.style.getPropertyValue(e)),
                            this.media.style.removeProperty(e)
                        }
                        ),
                        B(this.media.style) && this.media.removeAttribute("style")
                    }
                };
                class et {
                    constructor(t) {
                        e(this, "firstTouch", () => {
                            const {player: e} = this
                              , {elements: t} = e;
                            e.touch = !0,
                            se(t.container, e.config.classNames.isTouch, !0)
                        }
                        ),
                        e(this, "setTabFocus", e => {
                            const {player: t} = this
                              , {elements: i} = t;
                            if (clearTimeout(this.focusTimer),
                            "keydown" === e.type && 9 !== e.which)
                                return;
                            "keydown" === e.type && (this.lastKeyDown = e.timeStamp);
                            const n = e.timeStamp - this.lastKeyDown <= 20;
                            ("focus" !== e.type || n) && (( () => {
                                const e = t.config.classNames.tabFocus;
                                se(ae.call(t, "." + e), e, !1)
                            }
                            )(),
                            "focusout" !== e.type && (this.focusTimer = setTimeout( () => {
                                const e = document.activeElement;
                                i.container.contains(e) && se(document.activeElement, t.config.classNames.tabFocus, !0)
                            }
                            , 10)))
                        }
                        ),
                        e(this, "global", (e=!0) => {
                            const {player: t} = this;
                            t.config.keyboard.global && pe.call(t, window, "keydown keyup", this.handleKey, e, !1),
                            pe.call(t, document.body, "click", this.toggleMenu, e),
                            ge.call(t, document.body, "touchstart", this.firstTouch),
                            pe.call(t, document.body, "keydown focus blur focusout", this.setTabFocus, e, !1, !0)
                        }
                        ),
                        e(this, "container", () => {
                            const {player: e} = this
                              , {config: t, elements: i, timers: n} = e;
                            !t.keyboard.global && t.keyboard.focused && fe.call(e, i.container, "keydown keyup", this.handleKey, !1),
                            fe.call(e, i.container, "mousemove mouseleave touchstart touchmove enterfullscreen exitfullscreen", t => {
                                const {controls: s} = i;
                                s && "enterfullscreen" === t.type && (s.pressed = !1,
                                s.hover = !1);
                                let o = 0;
                                ["touchstart", "touchmove", "mousemove"].includes(t.type) && (Qe.toggleControls.call(e, !0),
                                o = e.touch ? 3e3 : 2e3),
                                clearTimeout(n.controls),
                                n.controls = setTimeout( () => Qe.toggleControls.call(e, !1), o)
                            }
                            );
                            const s = () => {
                                if (!e.isVimeo || e.config.vimeo.premium)
                                    return;
                                const t = i.wrapper
                                  , {active: n} = e.fullscreen
                                  , [s,o] = Ee.call(e)
                                  , r = Ce(`aspect-ratio: ${s} / ${o}`);
                                if (!n)
                                    return void (r ? (t.style.width = null,
                                    t.style.height = null) : (t.style.maxWidth = null,
                                    t.style.margin = null));
                                const [a,l] = [Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0), Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0)]
                                  , c = a / l > s / o;
                                r ? (t.style.width = c ? "auto" : "100%",
                                t.style.height = c ? "100%" : "auto") : (t.style.maxWidth = c ? l / o * s + "px" : null,
                                t.style.margin = c ? "0 auto" : null)
                            }
                              , o = () => {
                                clearTimeout(n.resized),
                                n.resized = setTimeout(s, 50)
                            }
                            ;
                            fe.call(e, i.container, "enterfullscreen exitfullscreen", t => {
                                const {target: n} = e.fullscreen;
                                n === i.container && (!e.isEmbed && B(e.config.ratio) || (s(),
                                ("enterfullscreen" === t.type ? fe : me).call(e, window, "resize", o)))
                            }
                            )
                        }
                        ),
                        e(this, "media", () => {
                            const {player: e} = this
                              , {elements: t} = e;
                            if (fe.call(e, e.media, "timeupdate seeking seeked", t => Ve.timeUpdate.call(e, t)),
                            fe.call(e, e.media, "durationchange loadeddata loadedmetadata", t => Ve.durationUpdate.call(e, t)),
                            fe.call(e, e.media, "ended", () => {
                                e.isHTML5 && e.isVideo && e.config.resetOnEnd && (e.restart(),
                                e.pause())
                            }
                            ),
                            fe.call(e, e.media, "progress playing seeking seeked", t => Ve.updateProgress.call(e, t)),
                            fe.call(e, e.media, "volumechange", t => Ve.updateVolume.call(e, t)),
                            fe.call(e, e.media, "playing play pause ended emptied timeupdate", t => Qe.checkPlaying.call(e, t)),
                            fe.call(e, e.media, "waiting canplay seeked playing", t => Qe.checkLoading.call(e, t)),
                            e.supported.ui && e.config.clickToPlay && !e.isAudio) {
                                const i = le.call(e, "." + e.config.classNames.video);
                                if (!R(i))
                                    return;
                                fe.call(e, t.container, "click", n => {
                                    ([t.container, i].includes(n.target) || i.contains(n.target)) && (e.touch && e.config.hideControls || (e.ended ? (this.proxy(n, e.restart, "restart"),
                                    this.proxy(n, () => {
                                        we(e.play())
                                    }
                                    , "play")) : this.proxy(n, () => {
                                        we(e.togglePlay())
                                    }
                                    , "play")))
                                }
                                )
                            }
                            e.supported.ui && e.config.disableContextMenu && fe.call(e, t.wrapper, "contextmenu", e => {
                                e.preventDefault()
                            }
                            , !1),
                            fe.call(e, e.media, "volumechange", () => {
                                e.storage.set({
                                    volume: e.volume,
                                    muted: e.muted
                                })
                            }
                            ),
                            fe.call(e, e.media, "ratechange", () => {
                                Ve.updateSetting.call(e, "speed"),
                                e.storage.set({
                                    speed: e.speed
                                })
                            }
                            ),
                            fe.call(e, e.media, "qualitychange", t => {
                                Ve.updateSetting.call(e, "quality", null, t.detail.quality)
                            }
                            ),
                            fe.call(e, e.media, "ready qualitychange", () => {
                                Ve.setDownloadUrl.call(e)
                            }
                            );
                            const i = e.config.events.concat(["keyup", "keydown"]).join(" ");
                            fe.call(e, e.media, i, i => {
                                let {detail: n={}} = i;
                                "error" === i.type && (n = e.media.error),
                                ye.call(e, t.container, i.type, !0, n)
                            }
                            )
                        }
                        ),
                        e(this, "proxy", (e, t, i) => {
                            const {player: n} = this
                              , s = n.config.listeners[i];
                            let o = !0;
                            M(s) && (o = s.call(n, e)),
                            !1 !== o && M(t) && t.call(n, e)
                        }
                        ),
                        e(this, "bind", (e, t, i, n, s=!0) => {
                            const {player: o} = this
                              , r = o.config.listeners[n]
                              , a = M(r);
                            fe.call(o, e, t, e => this.proxy(e, i, n), s && !a)
                        }
                        ),
                        e(this, "controls", () => {
                            const {player: e} = this
                              , {elements: t} = e
                              , i = U.isIE ? "change" : "input";
                            if (t.buttons.play && Array.from(t.buttons.play).forEach(t => {
                                this.bind(t, "click", () => {
                                    we(e.togglePlay())
                                }
                                , "play")
                            }
                            ),
                            this.bind(t.buttons.restart, "click", e.restart, "restart"),
                            this.bind(t.buttons.rewind, "click", () => {
                                e.lastSeekTime = Date.now(),
                                e.rewind()
                            }
                            , "rewind"),
                            this.bind(t.buttons.fastForward, "click", () => {
                                e.lastSeekTime = Date.now(),
                                e.forward()
                            }
                            , "fastForward"),
                            this.bind(t.buttons.mute, "click", () => {
                                e.muted = !e.muted
                            }
                            , "mute"),
                            this.bind(t.buttons.captions, "click", () => e.toggleCaptions()),
                            this.bind(t.buttons.download, "click", () => {
                                ye.call(e, e.media, "download")
                            }
                            , "download"),
                            this.bind(t.buttons.fullscreen, "click", () => {
                                e.fullscreen.toggle()
                            }
                            , "fullscreen"),
                            this.bind(t.buttons.pip, "click", () => {
                                e.pip = "toggle"
                            }
                            , "pip"),
                            this.bind(t.buttons.airplay, "click", e.airplay, "airplay"),
                            this.bind(t.buttons.settings, "click", t => {
                                t.stopPropagation(),
                                t.preventDefault(),
                                Ve.toggleMenu.call(e, t)
                            }
                            , null, !1),
                            this.bind(t.buttons.settings, "keyup", t => {
                                const i = t.which;
                                [13, 32].includes(i) && (13 !== i ? (t.preventDefault(),
                                t.stopPropagation(),
                                Ve.toggleMenu.call(e, t)) : Ve.focusFirstMenuItem.call(e, null, !0))
                            }
                            , null, !1),
                            this.bind(t.settings.menu, "keydown", t => {
                                27 === t.which && Ve.toggleMenu.call(e, t)
                            }
                            ),
                            this.bind(t.inputs.seek, "mousedown mousemove", e => {
                                const i = t.progress.getBoundingClientRect()
                                  , n = 100 / i.width * (e.pageX - i.left);
                                e.currentTarget.setAttribute("seek-value", n)
                            }
                            ),
                            this.bind(t.inputs.seek, "mousedown mouseup keydown keyup touchstart touchend", t => {
                                const i = t.currentTarget
                                  , n = t.keyCode ? t.keyCode : t.which
                                  , s = "play-on-seeked";
                                if (F(t) && 39 !== n && 37 !== n)
                                    return;
                                e.lastSeekTime = Date.now();
                                const o = i.hasAttribute(s)
                                  , r = ["mouseup", "touchend", "keyup"].includes(t.type);
                                o && r ? (i.removeAttribute(s),
                                we(e.play())) : !r && e.playing && (i.setAttribute(s, ""),
                                e.pause())
                            }
                            ),
                            U.isIos) {
                                const t = ae.call(e, 'input[type="range"]');
                                Array.from(t).forEach(e => this.bind(e, i, e => W(e.target)))
                            }
                            this.bind(t.inputs.seek, i, t => {
                                const i = t.currentTarget;
                                let n = i.getAttribute("seek-value");
                                B(n) && (n = i.value),
                                i.removeAttribute("seek-value"),
                                e.currentTime = n / i.max * e.duration
                            }
                            , "seek"),
                            this.bind(t.progress, "mouseenter mouseleave mousemove", t => Ve.updateSeekTooltip.call(e, t)),
                            this.bind(t.progress, "mousemove touchmove", t => {
                                const {previewThumbnails: i} = e;
                                i && i.loaded && i.startMove(t)
                            }
                            ),
                            this.bind(t.progress, "mouseleave touchend click", () => {
                                const {previewThumbnails: t} = e;
                                t && t.loaded && t.endMove(!1, !0)
                            }
                            ),
                            this.bind(t.progress, "mousedown touchstart", t => {
                                const {previewThumbnails: i} = e;
                                i && i.loaded && i.startScrubbing(t)
                            }
                            ),
                            this.bind(t.progress, "mouseup touchend", t => {
                                const {previewThumbnails: i} = e;
                                i && i.loaded && i.endScrubbing(t)
                            }
                            ),
                            U.isWebkit && Array.from(ae.call(e, 'input[type="range"]')).forEach(t => {
                                this.bind(t, "input", t => Ve.updateRangeFill.call(e, t.target))
                            }
                            ),
                            e.config.toggleInvert && !R(t.display.duration) && this.bind(t.display.currentTime, "click", () => {
                                0 !== e.currentTime && (e.config.invertTime = !e.config.invertTime,
                                Ve.timeUpdate.call(e))
                            }
                            ),
                            this.bind(t.inputs.volume, i, t => {
                                e.volume = t.target.value
                            }
                            , "volume"),
                            this.bind(t.controls, "mouseenter mouseleave", i => {
                                t.controls.hover = !e.touch && "mouseenter" === i.type
                            }
                            ),
                            t.fullscreen && Array.from(t.fullscreen.children).filter(e => !e.contains(t.container)).forEach(i => {
                                this.bind(i, "mouseenter mouseleave", i => {
                                    t.controls.hover = !e.touch && "mouseenter" === i.type
                                }
                                )
                            }
                            ),
                            this.bind(t.controls, "mousedown mouseup touchstart touchend touchcancel", e => {
                                t.controls.pressed = ["mousedown", "touchstart"].includes(e.type)
                            }
                            ),
                            this.bind(t.controls, "focusin", () => {
                                const {config: i, timers: n} = e;
                                se(t.controls, i.classNames.noTransition, !0),
                                Qe.toggleControls.call(e, !0),
                                setTimeout( () => {
                                    se(t.controls, i.classNames.noTransition, !1)
                                }
                                , 0);
                                const s = this.touch ? 3e3 : 4e3;
                                clearTimeout(n.controls),
                                n.controls = setTimeout( () => Qe.toggleControls.call(e, !1), s)
                            }
                            ),
                            this.bind(t.inputs.volume, "wheel", t => {
                                const i = t.webkitDirectionInvertedFromDevice
                                  , [n,s] = [t.deltaX, -t.deltaY].map(e => i ? -e : e)
                                  , o = Math.sign(Math.abs(n) > Math.abs(s) ? n : s);
                                e.increaseVolume(o / 50);
                                const {volume: r} = e.media;
                                (1 === o && r < 1 || -1 === o && r > 0) && t.preventDefault()
                            }
                            , "volume", !1)
                        }
                        ),
                        this.player = t,
                        this.lastKey = null,
                        this.focusTimer = null,
                        this.lastKeyDown = null,
                        this.handleKey = this.handleKey.bind(this),
                        this.toggleMenu = this.toggleMenu.bind(this),
                        this.setTabFocus = this.setTabFocus.bind(this),
                        this.firstTouch = this.firstTouch.bind(this)
                    }
                    handleKey(e) {
                        const {player: t} = this
                          , {elements: i} = t
                          , n = e.keyCode ? e.keyCode : e.which
                          , s = "keydown" === e.type
                          , o = s && n === this.lastKey;
                        if (!(e.altKey || e.ctrlKey || e.metaKey || e.shiftKey) && N(n))
                            if (s) {
                                const s = document.activeElement;
                                if (R(s)) {
                                    const {editable: n} = t.config.selectors
                                      , {seek: o} = i.inputs;
                                    if (s !== o && re(s, n))
                                        return;
                                    if (32 === e.which && re(s, 'button, [role^="menuitem"]'))
                                        return
                                }
                                switch ([32, 37, 38, 39, 40, 48, 49, 50, 51, 52, 53, 54, 56, 57, 67, 70, 73, 75, 76, 77, 79].includes(n) && (e.preventDefault(),
                                e.stopPropagation()),
                                n) {
                                case 48:
                                case 49:
                                case 50:
                                case 51:
                                case 52:
                                case 53:
                                case 54:
                                case 55:
                                case 56:
                                case 57:
                                    o || (t.currentTime = t.duration / 10 * (n - 48));
                                    break;
                                case 32:
                                case 75:
                                    o || we(t.togglePlay());
                                    break;
                                case 38:
                                    t.increaseVolume(.1);
                                    break;
                                case 40:
                                    t.decreaseVolume(.1);
                                    break;
                                case 77:
                                    o || (t.muted = !t.muted);
                                    break;
                                case 39:
                                    t.forward();
                                    break;
                                case 37:
                                    t.rewind();
                                    break;
                                case 70:
                                    t.fullscreen.toggle();
                                    break;
                                case 67:
                                    o || t.toggleCaptions();
                                    break;
                                case 76:
                                    t.loop = !t.loop
                                }
                                27 === n && !t.fullscreen.usingNative && t.fullscreen.active && t.fullscreen.toggle(),
                                this.lastKey = n
                            } else
                                this.lastKey = null
                    }
                    toggleMenu(e) {
                        Ve.toggleMenu.call(this.player, e)
                    }
                }
                "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : void 0 !== t || "undefined" != typeof self && self;
                var tt = function(e, t) {
                    return function(e, t) {
                        e.exports = function() {
                            var e = function() {}
                              , t = {}
                              , i = {}
                              , n = {};
                            function s(e, t) {
                                if (e) {
                                    var s = n[e];
                                    if (i[e] = t,
                                    s)
                                        for (; s.length; )
                                            s[0](e, t),
                                            s.splice(0, 1)
                                }
                            }
                            function o(t, i) {
                                t.call && (t = {
                                    success: t
                                }),
                                i.length ? (t.error || e)(i) : (t.success || e)(t)
                            }
                            function r(t, i, n, s) {
                                var o, a, l = document, c = n.async, d = (n.numRetries || 0) + 1, u = n.before || e, h = t.replace(/[\?|#].*$/, ""), p = t.replace(/^(css|img)!/, "");
                                s = s || 0,
                                /(^css!|\.css$)/.test(h) ? ((a = l.createElement("link")).rel = "stylesheet",
                                a.href = p,
                                (o = "hideFocus"in a) && a.relList && (o = 0,
                                a.rel = "preload",
                                a.as = "style")) : /(^img!|\.(png|gif|jpg|svg|webp)$)/.test(h) ? (a = l.createElement("img")).src = p : ((a = l.createElement("script")).src = t,
                                a.async = void 0 === c || c),
                                a.onload = a.onerror = a.onbeforeload = function(e) {
                                    var l = e.type[0];
                                    if (o)
                                        try {
                                            a.sheet.cssText.length || (l = "e")
                                        } catch (e) {
                                            18 != e.code && (l = "e")
                                        }
                                    if ("e" == l) {
                                        if ((s += 1) < d)
                                            return r(t, i, n, s)
                                    } else if ("preload" == a.rel && "style" == a.as)
                                        return a.rel = "stylesheet";
                                    i(t, l, e.defaultPrevented)
                                }
                                ,
                                !1 !== u(t, a) && l.head.appendChild(a)
                            }
                            function a(e, t, i) {
                                var n, s, o = (e = e.push ? e : [e]).length, a = o, l = [];
                                for (n = function(e, i, n) {
                                    if ("e" == i && l.push(e),
                                    "b" == i) {
                                        if (!n)
                                            return;
                                        l.push(e)
                                    }
                                    --o || t(l)
                                }
                                ,
                                s = 0; s < a; s++)
                                    r(e[s], n, i)
                            }
                            function l(e, i, n) {
                                var r, l;
                                if (i && i.trim && (r = i),
                                l = (r ? n : i) || {},
                                r) {
                                    if (r in t)
                                        throw "LoadJS";
                                    t[r] = !0
                                }
                                function c(t, i) {
                                    a(e, (function(e) {
                                        o(l, e),
                                        t && o({
                                            success: t,
                                            error: i
                                        }, e),
                                        s(r, e)
                                    }
                                    ), l)
                                }
                                if (l.returnPromise)
                                    return new Promise(c);
                                c()
                            }
                            return l.ready = function(e, t) {
                                return function(e, t) {
                                    e = e.push ? e : [e];
                                    var s, o, r, a = [], l = e.length, c = l;
                                    for (s = function(e, i) {
                                        i.length && a.push(e),
                                        --c || t(a)
                                    }
                                    ; l--; )
                                        o = e[l],
                                        (r = i[o]) ? s(o, r) : (n[o] = n[o] || []).push(s)
                                }(e, (function(e) {
                                    o(t, e)
                                }
                                )),
                                l
                            }
                            ,
                            l.done = function(e) {
                                s(e, [])
                            }
                            ,
                            l.reset = function() {
                                t = {},
                                i = {},
                                n = {}
                            }
                            ,
                            l.isDefined = function(e) {
                                return e in t
                            }
                            ,
                            l
                        }()
                    }(t = {
                        exports: {}
                    }),
                    t.exports
                }();
                function it(e) {
                    return new Promise( (t, i) => {
                        tt(e, {
                            success: t,
                            error: i
                        })
                    }
                    )
                }
                function nt(e) {
                    e && !this.embed.hasPlayed && (this.embed.hasPlayed = !0),
                    this.media.paused === e && (this.media.paused = !e,
                    ye.call(this, this.media, e ? "play" : "pause"))
                }
                const st = {
                    setup() {
                        const e = this;
                        se(e.elements.wrapper, e.config.classNames.embed, !0),
                        e.options.speed = e.config.speed.options,
                        Se.call(e),
                        O(window.Vimeo) ? st.ready.call(e) : it(e.config.urls.vimeo.sdk).then( () => {
                            st.ready.call(e)
                        }
                        ).catch(t => {
                            e.debug.warn("Vimeo SDK (player.js) failed to load", t)
                        }
                        )
                    },
                    ready() {
                        const e = this
                          , t = e.config.vimeo
                          , {premium: i, referrerPolicy: n, ...s} = t;
                        i && Object.assign(s, {
                            controls: !1,
                            sidedock: !1
                        });
                        const o = ze({
                            loop: e.config.loop.active,
                            autoplay: e.autoplay,
                            muted: e.muted,
                            gesture: "media",
                            playsinline: !this.config.fullscreen.iosNative,
                            ...s
                        });
                        let r = e.media.getAttribute("src");
                        B(r) && (r = e.media.getAttribute(e.config.attributes.embed.id));
                        const a = B(l = r) ? null : N(Number(l)) ? l : l.match(/^.*(vimeo.com\/|video\/)(\d+).*/) ? RegExp.$2 : l;
                        var l;
                        const c = G("iframe")
                          , d = Oe(e.config.urls.vimeo.iframe, a, o);
                        if (c.setAttribute("src", d),
                        c.setAttribute("allowfullscreen", ""),
                        c.setAttribute("allow", ["autoplay", "fullscreen", "picture-in-picture", "encrypted-media", "accelerometer", "gyroscope"].join("; ")),
                        B(n) || c.setAttribute("referrerPolicy", n),
                        i || !t.customControls)
                            c.setAttribute("data-poster", e.poster),
                            e.media = te(c, e.media);
                        else {
                            const t = G("div", {
                                class: e.config.classNames.embedContainer,
                                "data-poster": e.poster
                            });
                            t.appendChild(c),
                            e.media = te(t, e.media)
                        }
                        t.customControls || Re(Oe(e.config.urls.vimeo.api, d)).then(t => {
                            !B(t) && t.thumbnail_url && Qe.setPoster.call(e, t.thumbnail_url).catch( () => {}
                            )
                        }
                        ),
                        e.embed = new window.Vimeo.Player(c,{
                            autopause: e.config.autopause,
                            muted: e.muted
                        }),
                        e.media.paused = !0,
                        e.media.currentTime = 0,
                        e.supported.ui && e.embed.disableTextTrack(),
                        e.media.play = () => (nt.call(e, !0),
                        e.embed.play()),
                        e.media.pause = () => (nt.call(e, !1),
                        e.embed.pause()),
                        e.media.stop = () => {
                            e.pause(),
                            e.currentTime = 0
                        }
                        ;
                        let {currentTime: u} = e.media;
                        Object.defineProperty(e.media, "currentTime", {
                            get: () => u,
                            set(t) {
                                const {embed: i, media: n, paused: s, volume: o} = e
                                  , r = s && !i.hasPlayed;
                                n.seeking = !0,
                                ye.call(e, n, "seeking"),
                                Promise.resolve(r && i.setVolume(0)).then( () => i.setCurrentTime(t)).then( () => r && i.pause()).then( () => r && i.setVolume(o)).catch( () => {}
                                )
                            }
                        });
                        let h = e.config.speed.selected;
                        Object.defineProperty(e.media, "playbackRate", {
                            get: () => h,
                            set(t) {
                                e.embed.setPlaybackRate(t).then( () => {
                                    h = t,
                                    ye.call(e, e.media, "ratechange")
                                }
                                ).catch( () => {
                                    e.options.speed = [1]
                                }
                                )
                            }
                        });
                        let {volume: p} = e.config;
                        Object.defineProperty(e.media, "volume", {
                            get: () => p,
                            set(t) {
                                e.embed.setVolume(t).then( () => {
                                    p = t,
                                    ye.call(e, e.media, "volumechange")
                                }
                                )
                            }
                        });
                        let {muted: f} = e.config;
                        Object.defineProperty(e.media, "muted", {
                            get: () => f,
                            set(t) {
                                const i = !!j(t) && t;
                                e.embed.setVolume(i ? 0 : e.config.volume).then( () => {
                                    f = i,
                                    ye.call(e, e.media, "volumechange")
                                }
                                )
                            }
                        });
                        let m, {loop: g} = e.config;
                        Object.defineProperty(e.media, "loop", {
                            get: () => g,
                            set(t) {
                                const i = j(t) ? t : e.config.loop.active;
                                e.embed.setLoop(i).then( () => {
                                    g = i
                                }
                                )
                            }
                        }),
                        e.embed.getVideoUrl().then(t => {
                            m = t,
                            Ve.setDownloadUrl.call(e)
                        }
                        ).catch(e => {
                            this.debug.warn(e)
                        }
                        ),
                        Object.defineProperty(e.media, "currentSrc", {
                            get: () => m
                        }),
                        Object.defineProperty(e.media, "ended", {
                            get: () => e.currentTime === e.duration
                        }),
                        Promise.all([e.embed.getVideoWidth(), e.embed.getVideoHeight()]).then(t => {
                            const [i,n] = t;
                            e.embed.ratio = Le(i, n),
                            Se.call(this)
                        }
                        ),
                        e.embed.setAutopause(e.config.autopause).then(t => {
                            e.config.autopause = t
                        }
                        ),
                        e.embed.getVideoTitle().then(t => {
                            e.config.title = t,
                            Qe.setTitle.call(this)
                        }
                        ),
                        e.embed.getCurrentTime().then(t => {
                            u = t,
                            ye.call(e, e.media, "timeupdate")
                        }
                        ),
                        e.embed.getDuration().then(t => {
                            e.media.duration = t,
                            ye.call(e, e.media, "durationchange")
                        }
                        ),
                        e.embed.getTextTracks().then(t => {
                            e.media.textTracks = t,
                            We.setup.call(e)
                        }
                        ),
                        e.embed.on("cuechange", ({cues: t=[]}) => {
                            const i = t.map(e => function(e) {
                                const t = document.createDocumentFragment()
                                  , i = document.createElement("div");
                                return t.appendChild(i),
                                i.innerHTML = e,
                                t.firstChild.innerText
                            }(e.text));
                            We.updateCues.call(e, i)
                        }
                        ),
                        e.embed.on("loaded", () => {
                            e.embed.getPaused().then(t => {
                                nt.call(e, !t),
                                t || ye.call(e, e.media, "playing")
                            }
                            ),
                            R(e.embed.element) && e.supported.ui && e.embed.element.setAttribute("tabindex", -1)
                        }
                        ),
                        e.embed.on("bufferstart", () => {
                            ye.call(e, e.media, "waiting")
                        }
                        ),
                        e.embed.on("bufferend", () => {
                            ye.call(e, e.media, "playing")
                        }
                        ),
                        e.embed.on("play", () => {
                            nt.call(e, !0),
                            ye.call(e, e.media, "playing")
                        }
                        ),
                        e.embed.on("pause", () => {
                            nt.call(e, !1)
                        }
                        ),
                        e.embed.on("timeupdate", t => {
                            e.media.seeking = !1,
                            u = t.seconds,
                            ye.call(e, e.media, "timeupdate")
                        }
                        ),
                        e.embed.on("progress", t => {
                            e.media.buffered = t.percent,
                            ye.call(e, e.media, "progress"),
                            1 === parseInt(t.percent, 10) && ye.call(e, e.media, "canplaythrough"),
                            e.embed.getDuration().then(t => {
                                t !== e.media.duration && (e.media.duration = t,
                                ye.call(e, e.media, "durationchange"))
                            }
                            )
                        }
                        ),
                        e.embed.on("seeked", () => {
                            e.media.seeking = !1,
                            ye.call(e, e.media, "seeked")
                        }
                        ),
                        e.embed.on("ended", () => {
                            e.media.paused = !0,
                            ye.call(e, e.media, "ended")
                        }
                        ),
                        e.embed.on("error", t => {
                            e.media.error = t,
                            ye.call(e, e.media, "error")
                        }
                        ),
                        t.customControls && setTimeout( () => Qe.build.call(e), 0)
                    }
                };
                function ot(e) {
                    e && !this.embed.hasPlayed && (this.embed.hasPlayed = !0),
                    this.media.paused === e && (this.media.paused = !e,
                    ye.call(this, this.media, e ? "play" : "pause"))
                }
                function rt(e) {
                    return e.noCookie ? "https://www.youtube-nocookie.com" : "http:" === window.location.protocol ? "http://www.youtube.com" : void 0
                }
                const at = {
                    setup() {
                        if (se(this.elements.wrapper, this.config.classNames.embed, !0),
                        O(window.YT) && M(window.YT.Player))
                            at.ready.call(this);
                        else {
                            const e = window.onYouTubeIframeAPIReady;
                            window.onYouTubeIframeAPIReady = () => {
                                M(e) && e(),
                                at.ready.call(this)
                            }
                            ,
                            it(this.config.urls.youtube.sdk).catch(e => {
                                this.debug.warn("YouTube API failed to load", e)
                            }
                            )
                        }
                    },
                    getTitle(e) {
                        Re(Oe(this.config.urls.youtube.api, e)).then(e => {
                            if (O(e)) {
                                const {title: t, height: i, width: n} = e;
                                this.config.title = t,
                                Qe.setTitle.call(this),
                                this.embed.ratio = Le(n, i)
                            }
                            Se.call(this)
                        }
                        ).catch( () => {
                            Se.call(this)
                        }
                        )
                    },
                    ready() {
                        const e = this
                          , t = e.config.youtube
                          , i = e.media && e.media.getAttribute("id");
                        if (!B(i) && i.startsWith("youtube-"))
                            return;
                        let n = e.media.getAttribute("src");
                        B(n) && (n = e.media.getAttribute(this.config.attributes.embed.id));
                        const s = B(o = n) ? null : o.match(/^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/) ? RegExp.$2 : o;
                        var o;
                        const r = G("div", {
                            id: `${e.provider}-${Math.floor(1e4 * Math.random())}`,
                            "data-poster": t.customControls ? e.poster : void 0
                        });
                        if (e.media = te(r, e.media),
                        t.customControls) {
                            const t = e => `https://i.ytimg.com/vi/${s}/${e}default.jpg`;
                            Ke(t("maxres"), 121).catch( () => Ke(t("sd"), 121)).catch( () => Ke(t("hq"))).then(t => Qe.setPoster.call(e, t.src)).then(t => {
                                t.includes("maxres") || (e.elements.poster.style.backgroundSize = "cover")
                            }
                            ).catch( () => {}
                            )
                        }
                        e.embed = new window.YT.Player(e.media,{
                            videoId: s,
                            host: rt(t),
                            playerVars: X({}, {
                                autoplay: e.config.autoplay ? 1 : 0,
                                hl: e.config.hl,
                                controls: e.supported.ui && t.customControls ? 0 : 1,
                                disablekb: 1,
                                playsinline: e.config.fullscreen.iosNative ? 0 : 1,
                                cc_load_policy: e.captions.active ? 1 : 0,
                                cc_lang_pref: e.config.captions.language,
                                widget_referrer: window ? window.location.href : null
                            }, t),
                            events: {
                                onError(t) {
                                    if (!e.media.error) {
                                        const i = t.data
                                          , n = {
                                            2: "The request contains an invalid parameter value. For example, this error occurs if you specify a video ID that does not have 11 characters, or if the video ID contains invalid characters, such as exclamation points or asterisks.",
                                            5: "The requested content cannot be played in an HTML5 player or another error related to the HTML5 player has occurred.",
                                            100: "The video requested was not found. This error occurs when a video has been removed (for any reason) or has been marked as private.",
                                            101: "The owner of the requested video does not allow it to be played in embedded players.",
                                            150: "The owner of the requested video does not allow it to be played in embedded players."
                                        }[i] || "An unknown error occured";
                                        e.media.error = {
                                            code: i,
                                            message: n
                                        },
                                        ye.call(e, e.media, "error")
                                    }
                                },
                                onPlaybackRateChange(t) {
                                    const i = t.target;
                                    e.media.playbackRate = i.getPlaybackRate(),
                                    ye.call(e, e.media, "ratechange")
                                },
                                onReady(i) {
                                    if (M(e.media.play))
                                        return;
                                    const n = i.target;
                                    at.getTitle.call(e, s),
                                    e.media.play = () => {
                                        ot.call(e, !0),
                                        n.playVideo()
                                    }
                                    ,
                                    e.media.pause = () => {
                                        ot.call(e, !1),
                                        n.pauseVideo()
                                    }
                                    ,
                                    e.media.stop = () => {
                                        n.stopVideo()
                                    }
                                    ,
                                    e.media.duration = n.getDuration(),
                                    e.media.paused = !0,
                                    e.media.currentTime = 0,
                                    Object.defineProperty(e.media, "currentTime", {
                                        get: () => Number(n.getCurrentTime()),
                                        set(t) {
                                            e.paused && !e.embed.hasPlayed && e.embed.mute(),
                                            e.media.seeking = !0,
                                            ye.call(e, e.media, "seeking"),
                                            n.seekTo(t)
                                        }
                                    }),
                                    Object.defineProperty(e.media, "playbackRate", {
                                        get: () => n.getPlaybackRate(),
                                        set(e) {
                                            n.setPlaybackRate(e)
                                        }
                                    });
                                    let {volume: o} = e.config;
                                    Object.defineProperty(e.media, "volume", {
                                        get: () => o,
                                        set(t) {
                                            o = t,
                                            n.setVolume(100 * o),
                                            ye.call(e, e.media, "volumechange")
                                        }
                                    });
                                    let {muted: r} = e.config;
                                    Object.defineProperty(e.media, "muted", {
                                        get: () => r,
                                        set(t) {
                                            const i = j(t) ? t : r;
                                            r = i,
                                            n[i ? "mute" : "unMute"](),
                                            n.setVolume(100 * o),
                                            ye.call(e, e.media, "volumechange")
                                        }
                                    }),
                                    Object.defineProperty(e.media, "currentSrc", {
                                        get: () => n.getVideoUrl()
                                    }),
                                    Object.defineProperty(e.media, "ended", {
                                        get: () => e.currentTime === e.duration
                                    });
                                    const a = n.getAvailablePlaybackRates();
                                    e.options.speed = a.filter(t => e.config.speed.options.includes(t)),
                                    e.supported.ui && t.customControls && e.media.setAttribute("tabindex", -1),
                                    ye.call(e, e.media, "timeupdate"),
                                    ye.call(e, e.media, "durationchange"),
                                    clearInterval(e.timers.buffering),
                                    e.timers.buffering = setInterval( () => {
                                        e.media.buffered = n.getVideoLoadedFraction(),
                                        (null === e.media.lastBuffered || e.media.lastBuffered < e.media.buffered) && ye.call(e, e.media, "progress"),
                                        e.media.lastBuffered = e.media.buffered,
                                        1 === e.media.buffered && (clearInterval(e.timers.buffering),
                                        ye.call(e, e.media, "canplaythrough"))
                                    }
                                    , 200),
                                    t.customControls && setTimeout( () => Qe.build.call(e), 50)
                                },
                                onStateChange(i) {
                                    const n = i.target;
                                    switch (clearInterval(e.timers.playing),
                                    e.media.seeking && [1, 2].includes(i.data) && (e.media.seeking = !1,
                                    ye.call(e, e.media, "seeked")),
                                    i.data) {
                                    case -1:
                                        ye.call(e, e.media, "timeupdate"),
                                        e.media.buffered = n.getVideoLoadedFraction(),
                                        ye.call(e, e.media, "progress");
                                        break;
                                    case 0:
                                        ot.call(e, !1),
                                        e.media.loop ? (n.stopVideo(),
                                        n.playVideo()) : ye.call(e, e.media, "ended");
                                        break;
                                    case 1:
                                        t.customControls && !e.config.autoplay && e.media.paused && !e.embed.hasPlayed ? e.media.pause() : (ot.call(e, !0),
                                        ye.call(e, e.media, "playing"),
                                        e.timers.playing = setInterval( () => {
                                            ye.call(e, e.media, "timeupdate")
                                        }
                                        , 50),
                                        e.media.duration !== n.getDuration() && (e.media.duration = n.getDuration(),
                                        ye.call(e, e.media, "durationchange")));
                                        break;
                                    case 2:
                                        e.muted || e.embed.unMute(),
                                        ot.call(e, !1);
                                        break;
                                    case 3:
                                        ye.call(e, e.media, "waiting")
                                    }
                                    ye.call(e, e.elements.container, "statechange", !1, {
                                        code: i.data
                                    })
                                }
                            }
                        })
                    }
                }
                  , lt = {
                    setup() {
                        this.media ? (se(this.elements.container, this.config.classNames.type.replace("{0}", this.type), !0),
                        se(this.elements.container, this.config.classNames.provider.replace("{0}", this.provider), !0),
                        this.isEmbed && se(this.elements.container, this.config.classNames.type.replace("{0}", "video"), !0),
                        this.isVideo && (this.elements.wrapper = G("div", {
                            class: this.config.classNames.video
                        }),
                        J(this.media, this.elements.wrapper),
                        this.elements.poster = G("div", {
                            class: this.config.classNames.poster
                        }),
                        this.elements.wrapper.appendChild(this.elements.poster)),
                        this.isHTML5 ? Pe.setup.call(this) : this.isYouTube ? at.setup.call(this) : this.isVimeo && st.setup.call(this)) : this.debug.warn("No media element found!")
                    }
                };
                class ct {
                    constructor(t) {
                        e(this, "load", () => {
                            this.enabled && (O(window.google) && O(window.google.ima) ? this.ready() : it(this.player.config.urls.googleIMA.sdk).then( () => {
                                this.ready()
                            }
                            ).catch( () => {
                                this.trigger("error", new Error("Google IMA SDK failed to load"))
                            }
                            ))
                        }
                        ),
                        e(this, "ready", () => {
                            var e;
                            this.enabled || ((e = this).manager && e.manager.destroy(),
                            e.elements.displayContainer && e.elements.displayContainer.destroy(),
                            e.elements.container.remove()),
                            this.startSafetyTimer(12e3, "ready()"),
                            this.managerPromise.then( () => {
                                this.clearSafetyTimer("onAdsManagerLoaded()")
                            }
                            ),
                            this.listeners(),
                            this.setupIMA()
                        }
                        ),
                        e(this, "setupIMA", () => {
                            this.elements.container = G("div", {
                                class: this.player.config.classNames.ads
                            }),
                            this.player.elements.container.appendChild(this.elements.container),
                            google.ima.settings.setVpaidMode(google.ima.ImaSdkSettings.VpaidMode.ENABLED),
                            google.ima.settings.setLocale(this.player.config.ads.language),
                            google.ima.settings.setDisableCustomPlaybackForIOS10Plus(this.player.config.playsinline),
                            this.elements.displayContainer = new google.ima.AdDisplayContainer(this.elements.container,this.player.media),
                            this.loader = new google.ima.AdsLoader(this.elements.displayContainer),
                            this.loader.addEventListener(google.ima.AdsManagerLoadedEvent.Type.ADS_MANAGER_LOADED, e => this.onAdsManagerLoaded(e), !1),
                            this.loader.addEventListener(google.ima.AdErrorEvent.Type.AD_ERROR, e => this.onAdError(e), !1),
                            this.requestAds()
                        }
                        ),
                        e(this, "requestAds", () => {
                            const {container: e} = this.player.elements;
                            try {
                                const t = new google.ima.AdsRequest;
                                t.adTagUrl = this.tagUrl,
                                t.linearAdSlotWidth = e.offsetWidth,
                                t.linearAdSlotHeight = e.offsetHeight,
                                t.nonLinearAdSlotWidth = e.offsetWidth,
                                t.nonLinearAdSlotHeight = e.offsetHeight,
                                t.forceNonLinearFullSlot = !1,
                                t.setAdWillPlayMuted(!this.player.muted),
                                this.loader.requestAds(t)
                            } catch (e) {
                                this.onAdError(e)
                            }
                        }
                        ),
                        e(this, "pollCountdown", (e=!1) => {
                            if (!e)
                                return clearInterval(this.countdownTimer),
                                void this.elements.container.removeAttribute("data-badge-text");
                            this.countdownTimer = setInterval( () => {
                                const e = qe(Math.max(this.manager.getRemainingTime(), 0))
                                  , t = `${Ie.get("advertisement", this.player.config)} - ${e}`;
                                this.elements.container.setAttribute("data-badge-text", t)
                            }
                            , 100)
                        }
                        ),
                        e(this, "onAdsManagerLoaded", e => {
                            if (!this.enabled)
                                return;
                            const t = new google.ima.AdsRenderingSettings;
                            t.restoreCustomPlaybackStateOnAdBreakComplete = !0,
                            t.enablePreloading = !0,
                            this.manager = e.getAdsManager(this.player, t),
                            this.cuePoints = this.manager.getCuePoints(),
                            this.manager.addEventListener(google.ima.AdErrorEvent.Type.AD_ERROR, e => this.onAdError(e)),
                            Object.keys(google.ima.AdEvent.Type).forEach(e => {
                                this.manager.addEventListener(google.ima.AdEvent.Type[e], e => this.onAdEvent(e))
                            }
                            ),
                            this.trigger("loaded")
                        }
                        ),
                        e(this, "addCuePoints", () => {
                            B(this.cuePoints) || this.cuePoints.forEach(e => {
                                if (0 !== e && -1 !== e && e < this.player.duration) {
                                    const t = this.player.elements.progress;
                                    if (R(t)) {
                                        const i = 100 / this.player.duration * e
                                          , n = G("span", {
                                            class: this.player.config.classNames.cues
                                        });
                                        n.style.left = i.toString() + "%",
                                        t.appendChild(n)
                                    }
                                }
                            }
                            )
                        }
                        ),
                        e(this, "onAdEvent", e => {
                            const {container: t} = this.player.elements
                              , i = e.getAd()
                              , n = e.getAdData();
                            switch ((e => {
                                ye.call(this.player, this.player.media, "ads" + e.replace(/_/g, "").toLowerCase())
                            }
                            )(e.type),
                            e.type) {
                            case google.ima.AdEvent.Type.LOADED:
                                this.trigger("loaded"),
                                this.pollCountdown(!0),
                                i.isLinear() || (i.width = t.offsetWidth,
                                i.height = t.offsetHeight);
                                break;
                            case google.ima.AdEvent.Type.STARTED:
                                this.manager.setVolume(this.player.volume);
                                break;
                            case google.ima.AdEvent.Type.ALL_ADS_COMPLETED:
                                this.player.ended ? this.loadAds() : this.loader.contentComplete();
                                break;
                            case google.ima.AdEvent.Type.CONTENT_PAUSE_REQUESTED:
                                this.pauseContent();
                                break;
                            case google.ima.AdEvent.Type.CONTENT_RESUME_REQUESTED:
                                this.pollCountdown(),
                                this.resumeContent();
                                break;
                            case google.ima.AdEvent.Type.LOG:
                                n.adError && this.player.debug.warn("Non-fatal ad error: " + n.adError.getMessage())
                            }
                        }
                        ),
                        e(this, "onAdError", e => {
                            this.cancel(),
                            this.player.debug.warn("Ads error", e)
                        }
                        ),
                        e(this, "listeners", () => {
                            const {container: e} = this.player.elements;
                            let t;
                            this.player.on("canplay", () => {
                                this.addCuePoints()
                            }
                            ),
                            this.player.on("ended", () => {
                                this.loader.contentComplete()
                            }
                            ),
                            this.player.on("timeupdate", () => {
                                t = this.player.currentTime
                            }
                            ),
                            this.player.on("seeked", () => {
                                const e = this.player.currentTime;
                                B(this.cuePoints) || this.cuePoints.forEach( (i, n) => {
                                    t < i && i < e && (this.manager.discardAdBreak(),
                                    this.cuePoints.splice(n, 1))
                                }
                                )
                            }
                            ),
                            window.addEventListener("resize", () => {
                                this.manager && this.manager.resize(e.offsetWidth, e.offsetHeight, google.ima.ViewMode.NORMAL)
                            }
                            )
                        }
                        ),
                        e(this, "play", () => {
                            const {container: e} = this.player.elements;
                            this.managerPromise || this.resumeContent(),
                            this.managerPromise.then( () => {
                                this.manager.setVolume(this.player.volume),
                                this.elements.displayContainer.initialize();
                                try {
                                    this.initialized || (this.manager.init(e.offsetWidth, e.offsetHeight, google.ima.ViewMode.NORMAL),
                                    this.manager.start()),
                                    this.initialized = !0
                                } catch (e) {
                                    this.onAdError(e)
                                }
                            }
                            ).catch( () => {}
                            )
                        }
                        ),
                        e(this, "resumeContent", () => {
                            this.elements.container.style.zIndex = "",
                            this.playing = !1,
                            we(this.player.media.play())
                        }
                        ),
                        e(this, "pauseContent", () => {
                            this.elements.container.style.zIndex = 3,
                            this.playing = !0,
                            this.player.media.pause()
                        }
                        ),
                        e(this, "cancel", () => {
                            this.initialized && this.resumeContent(),
                            this.trigger("error"),
                            this.loadAds()
                        }
                        ),
                        e(this, "loadAds", () => {
                            this.managerPromise.then( () => {
                                this.manager && this.manager.destroy(),
                                this.managerPromise = new Promise(e => {
                                    this.on("loaded", e),
                                    this.player.debug.log(this.manager)
                                }
                                ),
                                this.initialized = !1,
                                this.requestAds()
                            }
                            ).catch( () => {}
                            )
                        }
                        ),
                        e(this, "trigger", (e, ...t) => {
                            const i = this.events[e];
                            I(i) && i.forEach(e => {
                                M(e) && e.apply(this, t)
                            }
                            )
                        }
                        ),
                        e(this, "on", (e, t) => (I(this.events[e]) || (this.events[e] = []),
                        this.events[e].push(t),
                        this)),
                        e(this, "startSafetyTimer", (e, t) => {
                            this.player.debug.log("Safety timer invoked from: " + t),
                            this.safetyTimer = setTimeout( () => {
                                this.cancel(),
                                this.clearSafetyTimer("startSafetyTimer()")
                            }
                            , e)
                        }
                        ),
                        e(this, "clearSafetyTimer", e => {
                            P(this.safetyTimer) || (this.player.debug.log("Safety timer cleared from: " + e),
                            clearTimeout(this.safetyTimer),
                            this.safetyTimer = null)
                        }
                        ),
                        this.player = t,
                        this.config = t.config.ads,
                        this.playing = !1,
                        this.initialized = !1,
                        this.elements = {
                            container: null,
                            displayContainer: null
                        },
                        this.manager = null,
                        this.loader = null,
                        this.cuePoints = null,
                        this.events = {},
                        this.safetyTimer = null,
                        this.countdownTimer = null,
                        this.managerPromise = new Promise( (e, t) => {
                            this.on("loaded", e),
                            this.on("error", t)
                        }
                        ),
                        this.load()
                    }
                    get enabled() {
                        const {config: e} = this;
                        return this.player.isHTML5 && this.player.isVideo && e.enabled && (!B(e.publisherId) || V(e.tagUrl))
                    }
                    get tagUrl() {
                        const {config: e} = this;
                        return V(e.tagUrl) ? e.tagUrl : "https://go.aniview.com/api/adserver6/vast/?" + ze({
                            AV_PUBLISHERID: "58c25bb0073ef448b1087ad6",
                            AV_CHANNELID: "5a0458dc28a06145e4519d21",
                            AV_URL: window.location.hostname,
                            cb: Date.now(),
                            AV_WIDTH: 640,
                            AV_HEIGHT: 480,
                            AV_CDIM2: e.publisherId
                        })
                    }
                }
                const dt = e => {
                    const t = [];
                    return e.split(/\r\n\r\n|\n\n|\r\r/).forEach(e => {
                        const i = {};
                        e.split(/\r\n|\n|\r/).forEach(e => {
                            if (N(i.startTime)) {
                                if (!B(e.trim()) && B(i.text)) {
                                    const t = e.trim().split("#xywh=");
                                    [i.text] = t,
                                    t[1] && ([i.x,i.y,i.w,i.h] = t[1].split(","))
                                }
                            } else {
                                const t = e.match(/([0-9]{2})?:?([0-9]{2}):([0-9]{2}).([0-9]{2,3})( ?--> ?)([0-9]{2})?:?([0-9]{2}):([0-9]{2}).([0-9]{2,3})/);
                                t && (i.startTime = 60 * Number(t[1] || 0) * 60 + 60 * Number(t[2]) + Number(t[3]) + Number("0." + t[4]),
                                i.endTime = 60 * Number(t[6] || 0) * 60 + 60 * Number(t[7]) + Number(t[8]) + Number("0." + t[9]))
                            }
                        }
                        ),
                        i.text && t.push(i)
                    }
                    ),
                    t
                }
                  , ut = (e, t) => {
                    const i = {};
                    return e > t.width / t.height ? (i.width = t.width,
                    i.height = 1 / e * t.width) : (i.height = t.height,
                    i.width = e * t.height),
                    i
                }
                ;
                class ht {
                    constructor(t) {
                        e(this, "load", () => {
                            this.player.elements.display.seekTooltip && (this.player.elements.display.seekTooltip.hidden = this.enabled),
                            this.enabled && this.getThumbnails().then( () => {
                                this.enabled && (this.render(),
                                this.determineContainerAutoSizing(),
                                this.loaded = !0)
                            }
                            )
                        }
                        ),
                        e(this, "getThumbnails", () => new Promise(e => {
                            const {src: t} = this.player.config.previewThumbnails;
                            if (B(t))
                                throw new Error("Missing previewThumbnails.src config attribute");
                            const i = () => {
                                this.thumbnails.sort( (e, t) => e.height - t.height),
                                this.player.debug.log("Preview thumbnails", this.thumbnails),
                                e()
                            }
                            ;
                            if (M(t))
                                t(e => {
                                    this.thumbnails = e,
                                    i()
                                }
                                );
                            else {
                                const e = (D(t) ? [t] : t).map(e => this.getThumbnail(e));
                                Promise.all(e).then(i)
                            }
                        }
                        )),
                        e(this, "getThumbnail", e => new Promise(t => {
                            Re(e).then(i => {
                                const n = {
                                    frames: dt(i),
                                    height: null,
                                    urlPrefix: ""
                                };
                                n.frames[0].text.startsWith("/") || n.frames[0].text.startsWith("http://") || n.frames[0].text.startsWith("https://") || (n.urlPrefix = e.substring(0, e.lastIndexOf("/") + 1));
                                const s = new Image;
                                s.onload = () => {
                                    n.height = s.naturalHeight,
                                    n.width = s.naturalWidth,
                                    this.thumbnails.push(n),
                                    t()
                                }
                                ,
                                s.src = n.urlPrefix + n.frames[0].text
                            }
                            )
                        }
                        )),
                        e(this, "startMove", e => {
                            if (this.loaded && H(e) && ["touchmove", "mousemove"].includes(e.type) && this.player.media.duration) {
                                if ("touchmove" === e.type)
                                    this.seekTime = this.player.media.duration * (this.player.elements.inputs.seek.value / 100);
                                else {
                                    const t = this.player.elements.progress.getBoundingClientRect()
                                      , i = 100 / t.width * (e.pageX - t.left);
                                    this.seekTime = this.player.media.duration * (i / 100),
                                    this.seekTime < 0 && (this.seekTime = 0),
                                    this.seekTime > this.player.media.duration - 1 && (this.seekTime = this.player.media.duration - 1),
                                    this.mousePosX = e.pageX,
                                    this.elements.thumb.time.innerText = qe(this.seekTime)
                                }
                                this.showImageAtCurrentTime()
                            }
                        }
                        ),
                        e(this, "endMove", () => {
                            this.toggleThumbContainer(!1, !0)
                        }
                        ),
                        e(this, "startScrubbing", e => {
                            (P(e.button) || !1 === e.button || 0 === e.button) && (this.mouseDown = !0,
                            this.player.media.duration && (this.toggleScrubbingContainer(!0),
                            this.toggleThumbContainer(!1, !0),
                            this.showImageAtCurrentTime()))
                        }
                        ),
                        e(this, "endScrubbing", () => {
                            this.mouseDown = !1,
                            Math.ceil(this.lastTime) === Math.ceil(this.player.media.currentTime) ? this.toggleScrubbingContainer(!1) : ge.call(this.player, this.player.media, "timeupdate", () => {
                                this.mouseDown || this.toggleScrubbingContainer(!1)
                            }
                            )
                        }
                        ),
                        e(this, "listeners", () => {
                            this.player.on("play", () => {
                                this.toggleThumbContainer(!1, !0)
                            }
                            ),
                            this.player.on("seeked", () => {
                                this.toggleThumbContainer(!1)
                            }
                            ),
                            this.player.on("timeupdate", () => {
                                this.lastTime = this.player.media.currentTime
                            }
                            )
                        }
                        ),
                        e(this, "render", () => {
                            this.elements.thumb.container = G("div", {
                                class: this.player.config.classNames.previewThumbnails.thumbContainer
                            }),
                            this.elements.thumb.imageContainer = G("div", {
                                class: this.player.config.classNames.previewThumbnails.imageContainer
                            }),
                            this.elements.thumb.container.appendChild(this.elements.thumb.imageContainer);
                            const e = G("div", {
                                class: this.player.config.classNames.previewThumbnails.timeContainer
                            });
                            this.elements.thumb.time = G("span", {}, "00:00"),
                            e.appendChild(this.elements.thumb.time),
                            this.elements.thumb.container.appendChild(e),
                            R(this.player.elements.progress) && this.player.elements.progress.appendChild(this.elements.thumb.container),
                            this.elements.scrubbing.container = G("div", {
                                class: this.player.config.classNames.previewThumbnails.scrubbingContainer
                            }),
                            this.player.elements.wrapper.appendChild(this.elements.scrubbing.container)
                        }
                        ),
                        e(this, "destroy", () => {
                            this.elements.thumb.container && this.elements.thumb.container.remove(),
                            this.elements.scrubbing.container && this.elements.scrubbing.container.remove()
                        }
                        ),
                        e(this, "showImageAtCurrentTime", () => {
                            this.mouseDown ? this.setScrubbingContainerSize() : this.setThumbContainerSizeAndPos();
                            const e = this.thumbnails[0].frames.findIndex(e => this.seekTime >= e.startTime && this.seekTime <= e.endTime)
                              , t = e >= 0;
                            let i = 0;
                            this.mouseDown || this.toggleThumbContainer(t),
                            t && (this.thumbnails.forEach( (t, n) => {
                                this.loadedImages.includes(t.frames[e].text) && (i = n)
                            }
                            ),
                            e !== this.showingThumb && (this.showingThumb = e,
                            this.loadImage(i)))
                        }
                        ),
                        e(this, "loadImage", (e=0) => {
                            const t = this.showingThumb
                              , i = this.thumbnails[e]
                              , {urlPrefix: n} = i
                              , s = i.frames[t]
                              , o = i.frames[t].text
                              , r = n + o;
                            if (this.currentImageElement && this.currentImageElement.dataset.filename === o)
                                this.showImage(this.currentImageElement, s, e, t, o, !1),
                                this.currentImageElement.dataset.index = t,
                                this.removeOldImages(this.currentImageElement);
                            else {
                                this.loadingImage && this.usingSprites && (this.loadingImage.onload = null);
                                const i = new Image;
                                i.src = r,
                                i.dataset.index = t,
                                i.dataset.filename = o,
                                this.showingThumbFilename = o,
                                this.player.debug.log("Loading image: " + r),
                                i.onload = () => this.showImage(i, s, e, t, o, !0),
                                this.loadingImage = i,
                                this.removeOldImages(i)
                            }
                        }
                        ),
                        e(this, "showImage", (e, t, i, n, s, o=!0) => {
                            this.player.debug.log(`Showing thumb: ${s}. num: ${n}. qual: ${i}. newimg: ${o}`),
                            this.setImageSizeAndOffset(e, t),
                            o && (this.currentImageContainer.appendChild(e),
                            this.currentImageElement = e,
                            this.loadedImages.includes(s) || this.loadedImages.push(s)),
                            this.preloadNearby(n, !0).then(this.preloadNearby(n, !1)).then(this.getHigherQuality(i, e, t, s))
                        }
                        ),
                        e(this, "removeOldImages", e => {
                            Array.from(this.currentImageContainer.children).forEach(t => {
                                if ("img" !== t.tagName.toLowerCase())
                                    return;
                                const i = this.usingSprites ? 500 : 1e3;
                                if (t.dataset.index !== e.dataset.index && !t.dataset.deleting) {
                                    t.dataset.deleting = !0;
                                    const {currentImageContainer: e} = this;
                                    setTimeout( () => {
                                        e.removeChild(t),
                                        this.player.debug.log("Removing thumb: " + t.dataset.filename)
                                    }
                                    , i)
                                }
                            }
                            )
                        }
                        ),
                        e(this, "preloadNearby", (e, t=!0) => new Promise(i => {
                            setTimeout( () => {
                                const n = this.thumbnails[0].frames[e].text;
                                if (this.showingThumbFilename === n) {
                                    let s;
                                    s = t ? this.thumbnails[0].frames.slice(e) : this.thumbnails[0].frames.slice(0, e).reverse();
                                    let o = !1;
                                    s.forEach(e => {
                                        const t = e.text;
                                        if (t !== n && !this.loadedImages.includes(t)) {
                                            o = !0,
                                            this.player.debug.log("Preloading thumb filename: " + t);
                                            const {urlPrefix: e} = this.thumbnails[0]
                                              , n = e + t
                                              , s = new Image;
                                            s.src = n,
                                            s.onload = () => {
                                                this.player.debug.log("Preloaded thumb filename: " + t),
                                                this.loadedImages.includes(t) || this.loadedImages.push(t),
                                                i()
                                            }
                                        }
                                    }
                                    ),
                                    o || i()
                                }
                            }
                            , 300)
                        }
                        )),
                        e(this, "getHigherQuality", (e, t, i, n) => {
                            if (e < this.thumbnails.length - 1) {
                                let s = t.naturalHeight;
                                this.usingSprites && (s = i.h),
                                s < this.thumbContainerHeight && setTimeout( () => {
                                    this.showingThumbFilename === n && (this.player.debug.log("Showing higher quality thumb for: " + n),
                                    this.loadImage(e + 1))
                                }
                                , 300)
                            }
                        }
                        ),
                        e(this, "toggleThumbContainer", (e=!1, t=!1) => {
                            const i = this.player.config.classNames.previewThumbnails.thumbContainerShown;
                            this.elements.thumb.container.classList.toggle(i, e),
                            !e && t && (this.showingThumb = null,
                            this.showingThumbFilename = null)
                        }
                        ),
                        e(this, "toggleScrubbingContainer", (e=!1) => {
                            const t = this.player.config.classNames.previewThumbnails.scrubbingContainerShown;
                            this.elements.scrubbing.container.classList.toggle(t, e),
                            e || (this.showingThumb = null,
                            this.showingThumbFilename = null)
                        }
                        ),
                        e(this, "determineContainerAutoSizing", () => {
                            (this.elements.thumb.imageContainer.clientHeight > 20 || this.elements.thumb.imageContainer.clientWidth > 20) && (this.sizeSpecifiedInCSS = !0)
                        }
                        ),
                        e(this, "setThumbContainerSizeAndPos", () => {
                            if (this.sizeSpecifiedInCSS) {
                                if (this.elements.thumb.imageContainer.clientHeight > 20 && this.elements.thumb.imageContainer.clientWidth < 20) {
                                    const e = Math.floor(this.elements.thumb.imageContainer.clientHeight * this.thumbAspectRatio);
                                    this.elements.thumb.imageContainer.style.width = e + "px"
                                } else if (this.elements.thumb.imageContainer.clientHeight < 20 && this.elements.thumb.imageContainer.clientWidth > 20) {
                                    const e = Math.floor(this.elements.thumb.imageContainer.clientWidth / this.thumbAspectRatio);
                                    this.elements.thumb.imageContainer.style.height = e + "px"
                                }
                            } else {
                                const e = Math.floor(this.thumbContainerHeight * this.thumbAspectRatio);
                                this.elements.thumb.imageContainer.style.height = this.thumbContainerHeight + "px",
                                this.elements.thumb.imageContainer.style.width = e + "px"
                            }
                            this.setThumbContainerPos()
                        }
                        ),
                        e(this, "setThumbContainerPos", () => {
                            const e = this.player.elements.progress.getBoundingClientRect()
                              , t = this.player.elements.container.getBoundingClientRect()
                              , {container: i} = this.elements.thumb
                              , n = t.left - e.left + 10
                              , s = t.right - e.left - i.clientWidth - 10;
                            let o = this.mousePosX - e.left - i.clientWidth / 2;
                            o < n && (o = n),
                            o > s && (o = s),
                            i.style.left = o + "px"
                        }
                        ),
                        e(this, "setScrubbingContainerSize", () => {
                            const {width: e, height: t} = ut(this.thumbAspectRatio, {
                                width: this.player.media.clientWidth,
                                height: this.player.media.clientHeight
                            });
                            this.elements.scrubbing.container.style.width = e + "px",
                            this.elements.scrubbing.container.style.height = t + "px"
                        }
                        ),
                        e(this, "setImageSizeAndOffset", (e, t) => {
                            if (!this.usingSprites)
                                return;
                            const i = this.thumbContainerHeight / t.h;
                            e.style.height = e.naturalHeight * i + "px",
                            e.style.width = e.naturalWidth * i + "px",
                            e.style.left = `-${t.x * i}px`,
                            e.style.top = `-${t.y * i}px`
                        }
                        ),
                        this.player = t,
                        this.thumbnails = [],
                        this.loaded = !1,
                        this.lastMouseMoveTime = Date.now(),
                        this.mouseDown = !1,
                        this.loadedImages = [],
                        this.elements = {
                            thumb: {},
                            scrubbing: {}
                        },
                        this.load()
                    }
                    get enabled() {
                        return this.player.isHTML5 && this.player.isVideo && this.player.config.previewThumbnails.enabled
                    }
                    get currentImageContainer() {
                        return this.mouseDown ? this.elements.scrubbing.container : this.elements.thumb.imageContainer
                    }
                    get usingSprites() {
                        return Object.keys(this.thumbnails[0].frames[0]).includes("w")
                    }
                    get thumbAspectRatio() {
                        return this.usingSprites ? this.thumbnails[0].frames[0].w / this.thumbnails[0].frames[0].h : this.thumbnails[0].width / this.thumbnails[0].height
                    }
                    get thumbContainerHeight() {
                        if (this.mouseDown) {
                            const {height: e} = ut(this.thumbAspectRatio, {
                                width: this.player.media.clientWidth,
                                height: this.player.media.clientHeight
                            });
                            return e
                        }
                        return this.sizeSpecifiedInCSS ? this.elements.thumb.imageContainer.clientHeight : Math.floor(this.player.media.clientWidth / this.thumbAspectRatio / 4)
                    }
                    get currentImageElement() {
                        return this.mouseDown ? this.currentScrubbingImageElement : this.currentThumbnailImageElement
                    }
                    set currentImageElement(e) {
                        this.mouseDown ? this.currentScrubbingImageElement = e : this.currentThumbnailImageElement = e
                    }
                }
                const pt = {
                    insertElements(e, t) {
                        D(t) ? K(e, this.media, {
                            src: t
                        }) : I(t) && t.forEach(t => {
                            K(e, this.media, t)
                        }
                        )
                    },
                    change(e) {
                        Y(e, "sources.length") ? (Pe.cancelRequests.call(this),
                        this.destroy.call(this, () => {
                            this.options.quality = [],
                            Q(this.media),
                            this.media = null,
                            R(this.elements.container) && this.elements.container.removeAttribute("class");
                            const {sources: t, type: i} = e
                              , [{provider: n=Xe.html5, src: s}] = t
                              , o = "html5" === n ? i : "div"
                              , r = "html5" === n ? {} : {
                                src: s
                            };
                            Object.assign(this, {
                                provider: n,
                                type: i,
                                supported: ue.check(i, n, this.config.playsinline),
                                media: G(o, r)
                            }),
                            this.elements.container.appendChild(this.media),
                            j(e.autoplay) && (this.config.autoplay = e.autoplay),
                            this.isHTML5 && (this.config.crossorigin && this.media.setAttribute("crossorigin", ""),
                            this.config.autoplay && this.media.setAttribute("autoplay", ""),
                            B(e.poster) || (this.poster = e.poster),
                            this.config.loop.active && this.media.setAttribute("loop", ""),
                            this.config.muted && this.media.setAttribute("muted", ""),
                            this.config.playsinline && this.media.setAttribute("playsinline", "")),
                            Qe.addStyleHook.call(this),
                            this.isHTML5 && pt.insertElements.call(this, "source", t),
                            this.config.title = e.title,
                            lt.setup.call(this),
                            this.isHTML5 && Object.keys(e).includes("tracks") && pt.insertElements.call(this, "track", e.tracks),
                            (this.isHTML5 || this.isEmbed && !this.supported.ui) && Qe.build.call(this),
                            this.isHTML5 && this.media.load(),
                            B(e.previewThumbnails) || (Object.assign(this.config.previewThumbnails, e.previewThumbnails),
                            this.previewThumbnails && this.previewThumbnails.loaded && (this.previewThumbnails.destroy(),
                            this.previewThumbnails = null),
                            this.config.previewThumbnails.enabled && (this.previewThumbnails = new ht(this))),
                            this.fullscreen.update()
                        }
                        , !0)) : this.debug.warn("Invalid source format")
                    }
                };
                class ft {
                    constructor(t, n) {
                        if (e(this, "play", () => M(this.media.play) ? (this.ads && this.ads.enabled && this.ads.managerPromise.then( () => this.ads.play()).catch( () => we(this.media.play())),
                        this.media.play()) : null),
                        e(this, "pause", () => this.playing && M(this.media.pause) ? this.media.pause() : null),
                        e(this, "togglePlay", e => (j(e) ? e : !this.playing) ? this.play() : this.pause()),
                        e(this, "stop", () => {
                            this.isHTML5 ? (this.pause(),
                            this.restart()) : M(this.media.stop) && this.media.stop()
                        }
                        ),
                        e(this, "restart", () => {
                            this.currentTime = 0
                        }
                        ),
                        e(this, "rewind", e => {
                            this.currentTime -= N(e) ? e : this.config.seekTime
                        }
                        ),
                        e(this, "forward", e => {
                            this.currentTime += N(e) ? e : this.config.seekTime
                        }
                        ),
                        e(this, "increaseVolume", e => {
                            const t = this.media.muted ? 0 : this.volume;
                            this.volume = t + (N(e) ? e : 0)
                        }
                        ),
                        e(this, "decreaseVolume", e => {
                            this.increaseVolume(-e)
                        }
                        ),
                        e(this, "airplay", () => {
                            ue.airplay && this.media.webkitShowPlaybackTargetPicker()
                        }
                        ),
                        e(this, "toggleControls", e => {
                            if (this.supported.ui && !this.isAudio) {
                                const t = oe(this.elements.container, this.config.classNames.hideControls)
                                  , i = void 0 === e ? void 0 : !e
                                  , n = se(this.elements.container, this.config.classNames.hideControls, i);
                                if (n && I(this.config.controls) && this.config.controls.includes("settings") && !B(this.config.settings) && Ve.toggleMenu.call(this, !1),
                                n !== t) {
                                    const e = n ? "controlshidden" : "controlsshown";
                                    ye.call(this, this.media, e)
                                }
                                return !n
                            }
                            return !1
                        }
                        ),
                        e(this, "on", (e, t) => {
                            fe.call(this, this.elements.container, e, t)
                        }
                        ),
                        e(this, "once", (e, t) => {
                            ge.call(this, this.elements.container, e, t)
                        }
                        ),
                        e(this, "off", (e, t) => {
                            me(this.elements.container, e, t)
                        }
                        ),
                        e(this, "destroy", (e, t=!1) => {
                            if (!this.ready)
                                return;
                            const i = () => {
                                document.body.style.overflow = "",
                                this.embed = null,
                                t ? (Object.keys(this.elements).length && (Q(this.elements.buttons.play),
                                Q(this.elements.captions),
                                Q(this.elements.controls),
                                Q(this.elements.wrapper),
                                this.elements.buttons.play = null,
                                this.elements.captions = null,
                                this.elements.controls = null,
                                this.elements.wrapper = null),
                                M(e) && e()) : (ve.call(this),
                                Pe.cancelRequests.call(this),
                                te(this.elements.original, this.elements.container),
                                ye.call(this, this.elements.original, "destroyed", !0),
                                M(e) && e.call(this.elements.original),
                                this.ready = !1,
                                setTimeout( () => {
                                    this.elements = null,
                                    this.media = null
                                }
                                , 200))
                            }
                            ;
                            this.stop(),
                            clearTimeout(this.timers.loading),
                            clearTimeout(this.timers.controls),
                            clearTimeout(this.timers.resized),
                            this.isHTML5 ? (Qe.toggleNativeControls.call(this, !0),
                            i()) : this.isYouTube ? (clearInterval(this.timers.buffering),
                            clearInterval(this.timers.playing),
                            null !== this.embed && M(this.embed.destroy) && this.embed.destroy(),
                            i()) : this.isVimeo && (null !== this.embed && this.embed.unload().then(i),
                            setTimeout(i, 200))
                        }
                        ),
                        e(this, "supports", e => ue.mime.call(this, e)),
                        this.timers = {},
                        this.ready = !1,
                        this.loading = !1,
                        this.failed = !1,
                        this.touch = ue.touch,
                        this.media = t,
                        D(this.media) && (this.media = document.querySelectorAll(this.media)),
                        (i && this.media instanceof jQuery || $(this.media) || I(this.media)) && (this.media = this.media[0]),
                        this.config = X({}, Ue, ft.defaults, n || {}, ( () => {
                            try {
                                return JSON.parse(this.media.getAttribute("data-plyr-config"))
                            } catch (e) {
                                return {}
                            }
                        }
                        )()),
                        this.elements = {
                            container: null,
                            fullscreen: null,
                            captions: null,
                            buttons: {},
                            display: {},
                            progress: {},
                            inputs: {},
                            settings: {
                                popup: null,
                                menu: null,
                                panels: {},
                                buttons: {}
                            }
                        },
                        this.captions = {
                            active: null,
                            currentTrack: -1,
                            meta: new WeakMap
                        },
                        this.fullscreen = {
                            active: !1
                        },
                        this.options = {
                            speed: [],
                            quality: []
                        },
                        this.debug = new Ze(this.config.debug),
                        this.debug.log("Config", this.config),
                        this.debug.log("Support", ue),
                        P(this.media) || !R(this.media))
                            return void this.debug.error("Setup failed: no suitable element passed");
                        if (this.media.plyr)
                            return void this.debug.warn("Target already setup");
                        if (!this.config.enabled)
                            return void this.debug.error("Setup failed: disabled by config");
                        if (!ue.check().api)
                            return void this.debug.error("Setup failed: no support");
                        const s = this.media.cloneNode(!0);
                        s.autoplay = !1,
                        this.elements.original = s;
                        const o = this.media.tagName.toLowerCase();
                        let r = null
                          , a = null;
                        switch (o) {
                        case "div":
                            if (r = this.media.querySelector("iframe"),
                            R(r)) {
                                if (a = Be(r.getAttribute("src")),
                                this.provider = function(e) {
                                    return /^(https?:\/\/)?(www\.)?(youtube\.com|youtube-nocookie\.com|youtu\.?be)\/.+$/.test(e) ? Xe.youtube : /^https?:\/\/player.vimeo.com\/video\/\d{0,9}(?=\b|\/)/.test(e) ? Xe.vimeo : null
                                }(a.toString()),
                                this.elements.container = this.media,
                                this.media = r,
                                this.elements.container.className = "",
                                a.search.length) {
                                    const e = ["1", "true"];
                                    e.includes(a.searchParams.get("autoplay")) && (this.config.autoplay = !0),
                                    e.includes(a.searchParams.get("loop")) && (this.config.loop.active = !0),
                                    this.isYouTube ? (this.config.playsinline = e.includes(a.searchParams.get("playsinline")),
                                    this.config.youtube.hl = a.searchParams.get("hl")) : this.config.playsinline = !0
                                }
                            } else
                                this.provider = this.media.getAttribute(this.config.attributes.embed.provider),
                                this.media.removeAttribute(this.config.attributes.embed.provider);
                            if (B(this.provider) || !Object.values(Xe).includes(this.provider))
                                return void this.debug.error("Setup failed: Invalid provider");
                            this.type = "video";
                            break;
                        case "video":
                        case "audio":
                            this.type = o,
                            this.provider = Xe.html5,
                            this.media.hasAttribute("crossorigin") && (this.config.crossorigin = !0),
                            this.media.hasAttribute("autoplay") && (this.config.autoplay = !0),
                            (this.media.hasAttribute("playsinline") || this.media.hasAttribute("webkit-playsinline")) && (this.config.playsinline = !0),
                            this.media.hasAttribute("muted") && (this.config.muted = !0),
                            this.media.hasAttribute("loop") && (this.config.loop.active = !0);
                            break;
                        default:
                            return void this.debug.error("Setup failed: unsupported type")
                        }
                        this.supported = ue.check(this.type, this.provider, this.config.playsinline),
                        this.supported.api ? (this.eventListeners = [],
                        this.listeners = new et(this),
                        this.storage = new $e(this),
                        this.media.plyr = this,
                        R(this.elements.container) || (this.elements.container = G("div", {
                            tabindex: 0
                        }),
                        J(this.media, this.elements.container)),
                        Qe.migrateStyles.call(this),
                        Qe.addStyleHook.call(this),
                        lt.setup.call(this),
                        this.config.debug && fe.call(this, this.elements.container, this.config.events.join(" "), e => {
                            this.debug.log("event: " + e.type)
                        }
                        ),
                        this.fullscreen = new Ge(this),
                        (this.isHTML5 || this.isEmbed && !this.supported.ui) && Qe.build.call(this),
                        this.listeners.container(),
                        this.listeners.global(),
                        this.config.ads.enabled && (this.ads = new ct(this)),
                        this.isHTML5 && this.config.autoplay && this.once("canplay", () => we(this.play())),
                        this.lastSeekTime = 0,
                        this.config.previewThumbnails.enabled && (this.previewThumbnails = new ht(this))) : this.debug.error("Setup failed: no support")
                    }
                    get isHTML5() {
                        return this.provider === Xe.html5
                    }
                    get isEmbed() {
                        return this.isYouTube || this.isVimeo
                    }
                    get isYouTube() {
                        return this.provider === Xe.youtube
                    }
                    get isVimeo() {
                        return this.provider === Xe.vimeo
                    }
                    get isVideo() {
                        return "video" === this.type
                    }
                    get isAudio() {
                        return "audio" === this.type
                    }
                    get playing() {
                        return Boolean(this.ready && !this.paused && !this.ended)
                    }
                    get paused() {
                        return Boolean(this.media.paused)
                    }
                    get stopped() {
                        return Boolean(this.paused && 0 === this.currentTime)
                    }
                    get ended() {
                        return Boolean(this.media.ended)
                    }
                    set currentTime(e) {
                        if (!this.duration)
                            return;
                        const t = N(e) && e > 0;
                        this.media.currentTime = t ? Math.min(e, this.duration) : 0,
                        this.debug.log(`Seeking to ${this.currentTime} seconds`)
                    }
                    get currentTime() {
                        return Number(this.media.currentTime)
                    }
                    get buffered() {
                        const {buffered: e} = this.media;
                        return N(e) ? e : e && e.length && this.duration > 0 ? e.end(0) / this.duration : 0
                    }
                    get seeking() {
                        return Boolean(this.media.seeking)
                    }
                    get duration() {
                        const e = parseFloat(this.config.duration)
                          , t = (this.media || {}).duration
                          , i = N(t) && t !== 1 / 0 ? t : 0;
                        return e || i
                    }
                    set volume(e) {
                        let t = e;
                        D(t) && (t = Number(t)),
                        N(t) || (t = this.storage.get("volume")),
                        N(t) || ({volume: t} = this.config),
                        t > 1 && (t = 1),
                        t < 0 && (t = 0),
                        this.config.volume = t,
                        this.media.volume = t,
                        !B(e) && this.muted && t > 0 && (this.muted = !1)
                    }
                    get volume() {
                        return Number(this.media.volume)
                    }
                    set muted(e) {
                        let t = e;
                        j(t) || (t = this.storage.get("muted")),
                        j(t) || (t = this.config.muted),
                        this.config.muted = t,
                        this.media.muted = t
                    }
                    get muted() {
                        return Boolean(this.media.muted)
                    }
                    get hasAudio() {
                        return !this.isHTML5 || !!this.isAudio || Boolean(this.media.mozHasAudio) || Boolean(this.media.webkitAudioDecodedByteCount) || Boolean(this.media.audioTracks && this.media.audioTracks.length)
                    }
                    set speed(e) {
                        let t = null;
                        N(e) && (t = e),
                        N(t) || (t = this.storage.get("speed")),
                        N(t) || (t = this.config.speed.selected);
                        const {minimumSpeed: i, maximumSpeed: n} = this;
                        t = function(e=0, t=0, i=255) {
                            return Math.min(Math.max(e, t), i)
                        }(t, i, n),
                        this.config.speed.selected = t,
                        setTimeout( () => {
                            this.media.playbackRate = t
                        }
                        , 0)
                    }
                    get speed() {
                        return Number(this.media.playbackRate)
                    }
                    get minimumSpeed() {
                        return this.isYouTube ? Math.min(...this.options.speed) : this.isVimeo ? .5 : .0625
                    }
                    get maximumSpeed() {
                        return this.isYouTube ? Math.max(...this.options.speed) : this.isVimeo ? 2 : 16
                    }
                    set quality(e) {
                        const t = this.config.quality
                          , i = this.options.quality;
                        if (!i.length)
                            return;
                        let n = [!B(e) && Number(e), this.storage.get("quality"), t.selected, t.default].find(N)
                          , s = !0;
                        if (!i.includes(n)) {
                            const e = ke(i, n);
                            this.debug.warn(`Unsupported quality option: ${n}, using ${e} instead`),
                            n = e,
                            s = !1
                        }
                        t.selected = n,
                        this.media.quality = n,
                        s && this.storage.set({
                            quality: n
                        })
                    }
                    get quality() {
                        return this.media.quality
                    }
                    set loop(e) {
                        const t = j(e) ? e : this.config.loop.active;
                        this.config.loop.active = t,
                        this.media.loop = t
                    }
                    get loop() {
                        return Boolean(this.media.loop)
                    }
                    set source(e) {
                        pt.change.call(this, e)
                    }
                    get source() {
                        return this.media.currentSrc
                    }
                    get download() {
                        const {download: e} = this.config.urls;
                        return V(e) ? e : this.source
                    }
                    set download(e) {
                        V(e) && (this.config.urls.download = e,
                        Ve.setDownloadUrl.call(this))
                    }
                    set poster(e) {
                        this.isVideo ? Qe.setPoster.call(this, e, !1).catch( () => {}
                        ) : this.debug.warn("Poster can only be set for video")
                    }
                    get poster() {
                        return this.isVideo ? this.media.getAttribute("poster") || this.media.getAttribute("data-poster") : null
                    }
                    get ratio() {
                        if (!this.isVideo)
                            return null;
                        const e = Ae(Ee.call(this));
                        return I(e) ? e.join(":") : e
                    }
                    set ratio(e) {
                        this.isVideo ? D(e) && _e(e) ? (this.config.ratio = Ae(e),
                        Se.call(this)) : this.debug.error(`Invalid aspect ratio specified (${e})`) : this.debug.warn("Aspect ratio can only be set for video")
                    }
                    set autoplay(e) {
                        const t = j(e) ? e : this.config.autoplay;
                        this.config.autoplay = t
                    }
                    get autoplay() {
                        return Boolean(this.config.autoplay)
                    }
                    toggleCaptions(e) {
                        We.toggle.call(this, e, !1)
                    }
                    set currentTrack(e) {
                        We.set.call(this, e, !1)
                    }
                    get currentTrack() {
                        const {toggled: e, currentTrack: t} = this.captions;
                        return e ? t : -1
                    }
                    set language(e) {
                        We.setLanguage.call(this, e, !1)
                    }
                    get language() {
                        return (We.getCurrentTrack.call(this) || {}).language
                    }
                    set pip(e) {
                        if (!ue.pip)
                            return;
                        const t = j(e) ? e : !this.pip;
                        M(this.media.webkitSetPresentationMode) && this.media.webkitSetPresentationMode(t ? Ye : "inline"),
                        M(this.media.requestPictureInPicture) && (!this.pip && t ? this.media.requestPictureInPicture() : this.pip && !t && document.exitPictureInPicture())
                    }
                    get pip() {
                        return ue.pip ? B(this.media.webkitPresentationMode) ? this.media === document.pictureInPictureElement : this.media.webkitPresentationMode === Ye : null
                    }
                    static supported(e, t, i) {
                        return ue.check(e, t, i)
                    }
                    static loadSprite(e, t) {
                        return He(e, t)
                    }
                    static setup(e, t={}) {
                        let i = null;
                        return D(e) ? i = Array.from(document.querySelectorAll(e)) : $(e) ? i = Array.from(e) : I(e) && (i = e.filter(R)),
                        B(i) ? null : i.map(e => new ft(e,t))
                    }
                }
                var mt;
                return ft.defaults = (mt = Ue,
                JSON.parse(JSON.stringify(mt))),
                ft
            }())
        }
        ).call(this, i("yLpj"), i("EVdn"))
    },
    Ts16: function(e, t, i) {
        "use strict";
        const n = "opt-in"
          , s = "opt-out"
          , o = "show--consent"
          , r = "show--preferences"
          , a = "disable--interaction"
          , l = "data-category"
          , c = "div"
          , d = "button"
          , u = "aria-hidden"
          , h = "btn-group"
          , p = "click"
          , f = "data-role"
          , m = "consentModal"
          , g = "preferencesModal";
        class y {
            constructor() {
                this.t = {
                    mode: n,
                    revision: 0,
                    autoShow: !0,
                    lazyHtmlGeneration: !0,
                    autoClearCookies: !0,
                    manageScriptTags: !0,
                    hideFromBots: !0,
                    cookie: {
                        name: "cc_cookie",
                        expiresAfterDays: 182,
                        domain: "",
                        path: "/",
                        secure: !0,
                        sameSite: "Lax"
                    }
                },
                this.o = {
                    i: {},
                    l: "",
                    _: {},
                    u: {},
                    p: {},
                    m: [],
                    v: !1,
                    h: null,
                    C: null,
                    S: null,
                    M: "",
                    D: !0,
                    T: !1,
                    k: !1,
                    A: !1,
                    N: !1,
                    H: [],
                    V: !1,
                    I: !0,
                    L: [],
                    j: !1,
                    F: "",
                    P: !1,
                    O: [],
                    R: [],
                    B: [],
                    $: [],
                    G: !1,
                    J: !1,
                    U: !1,
                    q: [],
                    K: [],
                    W: [],
                    X: {},
                    Y: {},
                    Z: {},
                    ee: {},
                    te: {},
                    oe: []
                },
                this.ne = {
                    ae: {},
                    se: {}
                },
                this.ce = {},
                this.re = {
                    ie: "cc:onFirstConsent",
                    le: "cc:onConsent",
                    de: "cc:onChange",
                    fe: "cc:onModalShow",
                    _e: "cc:onModalHide",
                    ue: "cc:onModalReady"
                }
            }
        }
        const v = new y
          , b = (e, t) => e.indexOf(t)
          , w = (e, t) => -1 !== b(e, t)
          , T = e => Array.isArray(e)
          , k = e => "string" == typeof e
          , C = e => !!e && "object" == typeof e && !T(e)
          , x = e => "function" == typeof e
          , _ = e => Object.keys(e)
          , A = e => Array.from(new Set(e))
          , E = () => document.activeElement
          , S = e => e.preventDefault()
          , L = (e, t) => e.querySelectorAll(t)
          , P = e => {
            const t = document.createElement(e);
            return e === d && (t.type = e),
            t
        }
          , O = (e, t, i) => e.setAttribute(t, i)
          , N = (e, t, i) => {
            e.removeAttribute(i ? "data-" + t : t)
        }
          , D = (e, t, i) => e.getAttribute(i ? "data-" + t : t)
          , j = (e, t) => e.appendChild(t)
          , M = (e, t) => e.classList.add(t)
          , I = (e, t) => M(e, "cm__" + t)
          , $ = (e, t) => M(e, "pm__" + t)
          , R = (e, t) => e.classList.remove(t)
          , H = e => {
            if ("object" != typeof e)
                return e;
            if (e instanceof Date)
                return new Date(e.getTime());
            let t = Array.isArray(e) ? [] : {};
            for (let i in e) {
                let n = e[i];
                t[i] = H(n)
            }
            return t
        }
          , F = (e, t) => dispatchEvent(new CustomEvent(e,{
            detail: t
        }))
          , q = (e, t, i, n) => {
            e.addEventListener(t, i),
            n && v.o.m.push({
                pe: e,
                ge: t,
                me: i
            })
        }
          , V = () => {
            const e = v.t.cookie.expiresAfterDays;
            return x(e) ? e(v.o.F) : e
        }
          , B = (e, t) => {
            const i = e || []
              , n = t || [];
            return i.filter(e => !w(n, e)).concat(n.filter(e => !w(i, e)))
        }
          , z = e => {
            v.o.R = A(e),
            v.o.F = ( () => {
                let e = "custom";
                const {R: t, O: i, B: n} = v.o
                  , s = t.length;
                return s === i.length ? e = "all" : s === n.length && (e = "necessary"),
                e
            }
            )()
        }
          , W = (e, t, i, n) => {
            const s = "accept-"
              , {show: o, showPreferences: r, hide: a, hidePreferences: l, acceptCategory: c} = t
              , d = e || document
              , u = e => L(d, `[data-cc="${e}"]`)
              , h = (e, t) => {
                S(e),
                c(t),
                l(),
                a()
            }
              , f = u("show-preferencesModal")
              , m = u("show-consentModal")
              , g = u(s + "all")
              , y = u(s + "necessary")
              , b = u(s + "custom")
              , w = v.t.lazyHtmlGeneration;
            for (const e of f)
                O(e, "aria-haspopup", "dialog"),
                q(e, p, e => {
                    S(e),
                    r()
                }
                ),
                w && (q(e, "mouseenter", e => {
                    S(e),
                    v.o.N || i(t, n)
                }
                , !0),
                q(e, "focus", () => {
                    v.o.N || i(t, n)
                }
                ));
            for (let e of m)
                O(e, "aria-haspopup", "dialog"),
                q(e, p, e => {
                    S(e),
                    o(!0)
                }
                , !0);
            for (let e of g)
                q(e, p, e => {
                    h(e, "all")
                }
                , !0);
            for (let e of b)
                q(e, p, e => {
                    h(e)
                }
                , !0);
            for (let e of y)
                q(e, p, e => {
                    h(e, [])
                }
                , !0)
        }
          , U = (e, t) => {
            e && (t && (e.tabIndex = -1),
            e.focus(),
            t && e.removeAttribute("tabindex"))
        }
          , Y = (e, t) => {
            const i = n => {
                n.target.removeEventListener("transitionend", i),
                "opacity" === n.propertyName && "1" === getComputedStyle(e).opacity && U((e => 1 === e ? v.ne.be : v.ne.ve)(t))
            }
            ;
            q(e, "transitionend", i)
        }
        ;
        let X;
        const J = e => {
            clearTimeout(X),
            e ? M(v.ne.ye, a) : X = setTimeout( () => {
                R(v.ne.ye, a)
            }
            , 500)
        }
          , Z = ["M 19.5 4.5 L 4.5 19.5 M 4.5 4.501 L 19.5 19.5", "M 3.572 13.406 L 8.281 18.115 L 20.428 5.885", "M 21.999 6.94 L 11.639 17.18 L 2.001 6.82 "]
          , G = (e=0, t=1.5) => `<svg viewBox="0 0 24 24" stroke-width="${t}"><path d="${Z[e]}"/></svg>`
          , K = e => {
            const t = v.ne
              , i = v.o;
            (e => {
                const n = e === t.he
                  , s = i.i.disablePageInteraction ? t.ye : n ? t.Ce : t.ye;
                q(s, "keydown", t => {
                    if ("Tab" !== t.key || !(n ? i.k && !i.A : i.A))
                        return;
                    const s = E()
                      , o = n ? i.q : i.K;
                    0 !== o.length && (t.shiftKey ? s !== o[0] && e.contains(s) || (S(t),
                    U(o[1])) : s !== o[1] && e.contains(s) || (S(t),
                    U(o[0])))
                }
                , !0)
            }
            )(e)
        }
          , Q = ["[href]", d, "input", "details", "[tabindex]"].map(e => e + ':not([tabindex="-1"])').join(",")
          , ee = e => {
            const {o: t, ne: i} = v
              , n = (e, t) => {
                const i = L(e, Q);
                t[0] = i[0],
                t[1] = i[i.length - 1]
            }
            ;
            1 === e && t.T && n(i.he, t.q),
            2 === e && t.N && n(i.we, t.K)
        }
          , te = (e, t, i) => {
            const {de: n, le: s, ie: o, _e: r, ue: a, fe: l} = v.ce
              , c = v.re;
            if (t) {
                const n = {
                    modalName: t
                };
                return e === c.fe ? x(l) && l(n) : e === c._e ? x(r) && r(n) : (n.modal = i,
                x(a) && a(n)),
                F(e, n)
            }
            const d = {
                cookie: v.o.p
            };
            e === c.ie ? x(o) && o(H(d)) : e === c.le ? x(s) && s(H(d)) : (d.changedCategories = v.o.L,
            d.changedServices = v.o.ee,
            x(n) && n(H(d))),
            F(e, H(d))
        }
          , ie = (e, t) => {
            try {
                return e()
            } catch (e) {
                return !t && console.warn("CookieConsent:", e),
                !1
            }
        }
          , ne = e => {
            const {Y: t, ee: i, O: n, X: s, oe: o, p: r, L: a} = v.o;
            for (const e of n) {
                const n = i[e] || t[e] || [];
                for (const i of n) {
                    const n = s[e][i];
                    if (!n)
                        continue;
                    const {onAccept: o, onReject: r} = n;
                    !n.Se && w(t[e], i) ? (n.Se = !0,
                    x(o) && o()) : n.Se && !w(t[e], i) && (n.Se = !1,
                    x(r) && r())
                }
            }
            if (!v.t.manageScriptTags)
                return;
            const c = o
              , d = e || r.categories || []
              , u = (e, n) => {
                if (n >= e.length)
                    return;
                const s = o[n];
                if (s.xe)
                    return u(e, n + 1);
                const r = s.Me
                  , c = s.De
                  , h = s.Te
                  , p = w(d, c)
                  , f = !!h && w(t[c], h);
                if (!h && !s.ke && p || !h && s.ke && !p && w(a, c) || h && !s.ke && f || h && s.ke && !f && w(i[c] || [], h)) {
                    s.xe = !0;
                    const t = D(r, "type", !0);
                    N(r, "type", !!t),
                    N(r, l);
                    let i = D(r, "src", !0);
                    i && N(r, "src", !0);
                    const o = P("script");
                    o.textContent = r.innerHTML;
                    for (const {nodeName: e} of r.attributes)
                        O(o, e, r[e] || D(r, e));
                    t && (o.type = t),
                    i ? o.src = i : i = r.src;
                    const a = !!i && (!t || ["text/javascript", "module"].includes(t));
                    if (a && (o.onload = o.onerror = () => {
                        u(e, ++n)
                    }
                    ),
                    r.replaceWith(o),
                    a)
                        return
                }
                u(e, ++n)
            }
            ;
            u(c, 0)
        }
          , se = "bottom"
          , oe = "left"
          , re = "right"
          , ae = "inline"
          , le = ["middle", "top", se]
          , ce = [oe, "center", re]
          , de = {
            box: {
                Ee: ["wide", ae],
                Ae: le,
                Ne: ce,
                He: se,
                Ve: re
            },
            cloud: {
                Ee: [ae],
                Ae: le,
                Ne: ce,
                He: se,
                Ve: "center"
            },
            bar: {
                Ee: [ae],
                Ae: le.slice(1),
                Ne: [],
                He: se,
                Ve: ""
            }
        }
          , ue = {
            box: {
                Ee: [],
                Ae: [],
                Ne: [],
                He: "",
                Ve: ""
            },
            bar: {
                Ee: ["wide"],
                Ae: [],
                Ne: [oe, re],
                He: "",
                Ve: oe
            }
        }
          , he = e => {
            const t = v.o.i.guiOptions
              , i = t && t.consentModal
              , n = t && t.preferencesModal;
            0 === e && pe(v.ne.he, de, i, "cm--", "box", "cm"),
            1 === e && pe(v.ne.we, ue, n, "pm--", "box", "pm")
        }
          , pe = (e, t, i, n, s, o) => {
            e.className = o;
            const r = i && i.layout
              , a = i && i.position
              , l = i && i.flipButtons
              , c = !i || !1 !== i.equalWeightButtons
              , d = r && r.split(" ") || []
              , u = d[0]
              , h = d[1]
              , p = u in t ? u : s
              , f = t[p]
              , m = w(f.Ee, h) && h
              , g = a && a.split(" ") || []
              , y = g[0]
              , b = "pm--" === n ? g[0] : g[1]
              , T = w(f.Ae, y) ? y : f.He
              , k = w(f.Ne, b) ? b : f.Ve
              , C = t => {
                t && M(e, n + t)
            }
            ;
            C(p),
            C(m),
            C(T),
            C(k),
            l && C("flip");
            const x = o + "__btn--secondary";
            if ("cm" === o) {
                const {Ie: e, Le: t} = v.ne;
                e && (c ? R(e, x) : M(e, x)),
                t && (c ? R(t, x) : M(t, x))
            } else {
                const {je: e} = v.ne;
                e && (c ? R(e, x) : M(e, x))
            }
        }
          , fe = (e, t) => {
            const i = v.o
              , n = v.ne
              , {hide: s, hidePreferences: o, acceptCategory: r} = e
              , a = e => {
                r(e),
                o(),
                s()
            }
              , l = i.u && i.u.preferencesModal;
            if (!l)
                return;
            const m = l.title
              , y = l.closeIconLabel
              , b = l.acceptAllBtn
              , w = l.acceptNecessaryBtn
              , T = l.savePreferencesBtn
              , x = l.sections || []
              , A = b || w || T;
            if (n.Fe)
                n.Pe = P(c),
                $(n.Pe, "body");
            else {
                n.Fe = P(c),
                M(n.Fe, "pm-wrapper");
                const e = P("div");
                M(e, "pm-overlay"),
                j(n.Fe, e),
                q(e, p, o),
                n.we = P(c),
                M(n.we, "pm"),
                O(n.we, "role", "dialog"),
                O(n.we, u, !0),
                O(n.we, "aria-modal", !0),
                O(n.we, "aria-labelledby", "pm__title"),
                q(n.ye, "keydown", e => {
                    27 === e.keyCode && o()
                }
                , !0),
                n.Oe = P(c),
                $(n.Oe, "header"),
                n.Re = P("h2"),
                $(n.Re, "title"),
                n.Re.id = "pm__title",
                n.Be = P(d),
                $(n.Be, "close-btn"),
                O(n.Be, "aria-label", l.closeIconLabel || ""),
                q(n.Be, p, o),
                n.$e = P("span"),
                n.$e.innerHTML = G(),
                j(n.Be, n.$e),
                n.Ge = P(c),
                $(n.Ge, "body"),
                n.Je = P(c),
                $(n.Je, "footer");
                var E = P(c);
                M(E, "btns");
                var S = P(c)
                  , L = P(c);
                $(S, h),
                $(L, h),
                j(n.Je, S),
                j(n.Je, L),
                j(n.Oe, n.Re),
                j(n.Oe, n.Be),
                n.ve = P(c),
                O(n.ve, "tabIndex", -1),
                j(n.we, n.ve),
                j(n.we, n.Oe),
                j(n.we, n.Ge),
                A && j(n.we, n.Je),
                j(n.Fe, n.we)
            }
            let N;
            m && (n.Re.innerHTML = m,
            y && O(n.Be, "aria-label", y)),
            x.forEach( (e, t) => {
                const s = e.title
                  , o = e.description
                  , r = e.linkedCategory
                  , a = r && i.P[r]
                  , h = e.cookieTable
                  , f = h && h.body
                  , m = h && h.caption
                  , g = f && f.length > 0
                  , y = !!a
                  , v = y && i.X[r]
                  , b = C(v) && _(v) || []
                  , w = y && (!!o || !!g || _(v).length > 0);
                var T = P(c);
                if ($(T, "section"),
                w || o) {
                    var x = P(c);
                    $(x, "section-desc-wrapper")
                }
                let A = b.length;
                if (w && A > 0) {
                    const e = P(c);
                    $(e, "section-services");
                    for (const t of b) {
                        const i = v[t]
                          , n = i && i.label || t
                          , s = P(c)
                          , o = P(c)
                          , l = P(c)
                          , d = P(c);
                        $(s, "service"),
                        $(d, "service-title"),
                        $(o, "service-header"),
                        $(l, "service-icon");
                        const u = me(n, t, a, !0, r);
                        d.innerHTML = n,
                        j(o, l),
                        j(o, d),
                        j(s, o),
                        j(s, u),
                        j(e, s)
                    }
                    j(x, e)
                }
                if (s) {
                    var E = P(c)
                      , S = P(y ? d : c);
                    if ($(E, "section-title-wrapper"),
                    $(S, "section-title"),
                    S.innerHTML = s,
                    j(E, S),
                    y) {
                        const e = P("span");
                        e.innerHTML = G(2, 3.5),
                        $(e, "section-arrow"),
                        j(E, e),
                        T.className += "--toggle";
                        const t = me(s, r, a);
                        let i = l.serviceCounterLabel;
                        if (A > 0 && k(i)) {
                            let e = P("span");
                            $(e, "badge"),
                            $(e, "service-counter"),
                            O(e, u, !0),
                            O(e, "data-servicecounter", A),
                            i && (i = i.split("|"),
                            i = i.length > 1 && A > 1 ? i[1] : i[0],
                            O(e, "data-counterlabel", i)),
                            e.innerHTML = A + (i ? " " + i : ""),
                            j(S, e)
                        }
                        if (w) {
                            $(T, "section--expandable");
                            var L = r + "-desc";
                            O(S, "aria-expanded", !1),
                            O(S, "aria-controls", L)
                        }
                        j(E, t)
                    } else
                        O(S, "role", "heading"),
                        O(S, "aria-level", "3");
                    j(T, E)
                }
                if (o) {
                    var D = P("p");
                    $(D, "section-desc"),
                    D.innerHTML = o,
                    j(x, D)
                }
                if (w && (O(x, u, "true"),
                x.id = L,
                ( (e, t, i) => {
                    q(S, p, () => {
                        t.classList.contains("is-expanded") ? (R(t, "is-expanded"),
                        O(i, "aria-expanded", "false"),
                        O(e, u, "true")) : (M(t, "is-expanded"),
                        O(i, "aria-expanded", "true"),
                        O(e, u, "false"))
                    }
                    )
                }
                )(x, T, S),
                g)) {
                    const e = P("table")
                      , i = P("thead")
                      , s = P("tbody");
                    if (m) {
                        const t = P("caption");
                        $(t, "table-caption"),
                        t.innerHTML = m,
                        e.appendChild(t)
                    }
                    $(e, "section-table"),
                    $(i, "table-head"),
                    $(s, "table-body");
                    const o = h.headers
                      , r = _(o)
                      , a = n.Ue.createDocumentFragment()
                      , l = P("tr");
                    for (const e of r) {
                        const i = o[e]
                          , n = P("th");
                        n.id = "cc__row-" + i + t,
                        O(n, "scope", "col"),
                        $(n, "table-th"),
                        n.innerHTML = i,
                        j(a, n)
                    }
                    j(l, a),
                    j(i, l);
                    const d = n.Ue.createDocumentFragment();
                    for (const e of f) {
                        const i = P("tr");
                        $(i, "table-tr");
                        for (const n of r) {
                            const s = o[n]
                              , r = e[n]
                              , a = P("td")
                              , l = P(c);
                            $(a, "table-td"),
                            O(a, "data-column", s),
                            O(a, "headers", "cc__row-" + s + t),
                            l.insertAdjacentHTML("beforeend", r),
                            j(a, l),
                            j(i, a)
                        }
                        j(d, i)
                    }
                    j(s, d),
                    j(e, i),
                    j(e, s),
                    j(x, e)
                }
                (w || o) && j(T, x);
                const I = n.Pe || n.Ge;
                y ? (N || (N = P(c),
                $(N, "section-toggles")),
                N.appendChild(T)) : N = null,
                j(I, N || T)
            }
            ),
            b && (n.ze || (n.ze = P(d),
            $(n.ze, "btn"),
            O(n.ze, f, "all"),
            j(S, n.ze),
            q(n.ze, p, () => a("all"))),
            n.ze.innerHTML = b),
            w && (n.je || (n.je = P(d),
            $(n.je, "btn"),
            O(n.je, f, "necessary"),
            j(S, n.je),
            q(n.je, p, () => a([]))),
            n.je.innerHTML = w),
            T && (n.qe || (n.qe = P(d),
            $(n.qe, "btn"),
            $(n.qe, "btn--secondary"),
            O(n.qe, f, "save"),
            j(L, n.qe),
            q(n.qe, p, () => a())),
            n.qe.innerHTML = T),
            n.Pe && (n.we.replaceChild(n.Pe, n.Ge),
            n.Ge = n.Pe),
            he(1),
            i.N || (i.N = !0,
            te(v.re.ue, g, n.we),
            t(e),
            j(n.Ce, n.Fe),
            K(n.we),
            setTimeout( () => M(n.Fe, "cc--anim"), 100)),
            ee(2)
        }
        ;
        function me(e, t, i, n, s) {
            const o = v.o
              , r = v.ne
              , a = P("label")
              , c = P("input")
              , d = P("span")
              , h = P("span")
              , f = P("span")
              , m = P("span")
              , g = P("span");
            if (m.innerHTML = G(1, 3),
            g.innerHTML = G(0, 3),
            c.type = "checkbox",
            M(a, "section__toggle-wrapper"),
            M(c, "section__toggle"),
            M(m, "toggle__icon-on"),
            M(g, "toggle__icon-off"),
            M(d, "toggle__icon"),
            M(h, "toggle__icon-circle"),
            M(f, "toggle__label"),
            O(d, u, "true"),
            n ? (M(a, "toggle-service"),
            O(c, l, s),
            r.se[s][t] = c) : r.ae[t] = c,
            n ? (e => {
                q(c, "change", () => {
                    const t = r.se[e]
                      , i = r.ae[e];
                    o.Z[e] = [];
                    for (let i in t) {
                        const n = t[i];
                        n.checked && o.Z[e].push(n.value)
                    }
                    i.checked = o.Z[e].length > 0
                }
                )
            }
            )(s) : (e => {
                q(c, p, () => {
                    const t = r.se[e]
                      , i = c.checked;
                    o.Z[e] = [];
                    for (let n in t)
                        t[n].checked = i,
                        i && o.Z[e].push(n)
                }
                )
            }
            )(t),
            c.value = t,
            f.textContent = e.replace(/<.*>.*<\/.*>/gm, ""),
            j(h, g),
            j(h, m),
            j(d, h),
            o.D)
                (i.readOnly || i.enabled) && (c.checked = !0);
            else if (n) {
                const e = o.Y[s];
                c.checked = i.readOnly || w(e, t)
            } else
                w(o.R, t) && (c.checked = !0);
            return i.readOnly && (c.disabled = !0),
            j(a, c),
            j(a, d),
            j(a, f),
            a
        }
        const ge = () => {
            const e = P("span");
            return v.ne.Ke || (v.ne.Ke = e),
            e
        }
          , ye = (e, t) => {
            const i = v.o
              , n = v.ne
              , {hide: s, showPreferences: o, acceptCategory: r} = e
              , a = i.u && i.u.consentModal;
            if (!a)
                return;
            const l = a.acceptAllBtn
              , g = a.acceptNecessaryBtn
              , y = a.showPreferencesBtn
              , b = a.closeIconLabel
              , w = a.footer
              , T = a.label
              , k = a.title
              , C = e => {
                s(),
                r(e)
            }
            ;
            if (!n.Qe) {
                n.Qe = P(c),
                n.he = P(c),
                n.We = P(c),
                n.Xe = P(c),
                n.Ye = P(c),
                M(n.Qe, "cm-wrapper"),
                M(n.he, "cm"),
                I(n.We, "body"),
                I(n.Xe, "texts"),
                I(n.Ye, "btns"),
                O(n.he, "role", "dialog"),
                O(n.he, "aria-modal", "true"),
                O(n.he, u, "false"),
                O(n.he, "aria-describedby", "cm__desc"),
                T ? O(n.he, "aria-label", T) : k && O(n.he, "aria-labelledby", "cm__title");
                const e = "box"
                  , t = i.i.guiOptions
                  , s = t && t.consentModal
                  , o = (s && s.layout || e).split(" ")[0] === e;
                k && b && o && (n.Le || (n.Le = P(d),
                n.Le.innerHTML = G(),
                I(n.Le, "btn"),
                I(n.Le, "btn--close"),
                q(n.Le, p, () => {
                    C([])
                }
                ),
                j(n.We, n.Le)),
                O(n.Le, "aria-label", b)),
                j(n.We, n.Xe),
                (l || g || y) && j(n.We, n.Ye),
                n.be = P(c),
                O(n.be, "tabIndex", -1),
                j(n.he, n.be),
                j(n.he, n.We),
                j(n.Qe, n.he)
            }
            k && (n.Ze || (n.Ze = P("h2"),
            n.Ze.className = n.Ze.id = "cm__title",
            j(n.Xe, n.Ze)),
            n.Ze.innerHTML = k);
            let x = a.description;
            if (x && (i.V && (x = x.replace("{{revisionMessage}}", i.I ? "" : a.revisionMessage || "")),
            n.et || (n.et = P("p"),
            n.et.className = n.et.id = "cm__desc",
            j(n.Xe, n.et)),
            n.et.innerHTML = x),
            l && (n.tt || (n.tt = P(d),
            j(n.tt, ge()),
            I(n.tt, "btn"),
            O(n.tt, f, "all"),
            q(n.tt, p, () => {
                C("all")
            }
            )),
            n.tt.firstElementChild.innerHTML = l),
            g && (n.Ie || (n.Ie = P(d),
            j(n.Ie, ge()),
            I(n.Ie, "btn"),
            O(n.Ie, f, "necessary"),
            q(n.Ie, p, () => {
                C([])
            }
            )),
            n.Ie.firstElementChild.innerHTML = g),
            y && (n.ot || (n.ot = P(d),
            j(n.ot, ge()),
            I(n.ot, "btn"),
            I(n.ot, "btn--secondary"),
            O(n.ot, f, "show"),
            q(n.ot, "mouseenter", () => {
                i.N || fe(e, t)
            }
            ),
            q(n.ot, p, o)),
            n.ot.firstElementChild.innerHTML = y),
            n.nt || (n.nt = P(c),
            I(n.nt, h),
            l && j(n.nt, n.tt),
            g && j(n.nt, n.Ie),
            (l || g) && j(n.We, n.nt),
            j(n.Ye, n.nt)),
            n.ot && !n.st && (n.st = P(c),
            n.Ie && n.tt ? (I(n.st, h),
            j(n.st, n.ot),
            j(n.Ye, n.st)) : (j(n.nt, n.ot),
            I(n.nt, h + "--uneven"))),
            w) {
                if (!n.ct) {
                    let e = P(c)
                      , t = P(c);
                    n.ct = P(c),
                    I(e, "footer"),
                    I(t, "links"),
                    I(n.ct, "link-group"),
                    j(t, n.ct),
                    j(e, t),
                    j(n.he, e)
                }
                n.ct.innerHTML = w
            }
            he(0),
            i.T || (i.T = !0,
            te(v.re.ue, m, n.he),
            t(e),
            j(n.Ce, n.Qe),
            K(n.he),
            setTimeout( () => M(n.Qe, "cc--anim"), 100)),
            ee(1),
            W(n.We, e, fe, t)
        }
          , ve = e => {
            if (!k(e))
                return null;
            if (e in v.o._)
                return e;
            let t = e.slice(0, 2);
            return t in v.o._ ? t : null
        }
          , be = () => v.o.l || v.o.i.language.default
          , we = e => {
            e && (v.o.l = e)
        }
          , Te = async e => {
            const t = v.o;
            let i = ve(e) ? e : be()
              , n = t._[i];
            if (k(n) ? n = await (async e => {
                try {
                    const t = await fetch(e);
                    return await t.json()
                } catch (e) {
                    return console.error(e),
                    !1
                }
            }
            )(n) : x(n) && (n = await n()),
            !n)
                throw `Could not load translation for the '${i}' language`;
            return t.u = n,
            we(i),
            !0
        }
          , ke = () => {
            let e = v.o.i.language.rtl
              , t = v.ne.Ce;
            e && t && (T(e) || (e = [e]),
            w(e, v.o.l) ? M(t, "cc--rtl") : R(t, "cc--rtl"))
        }
          , Ce = () => {
            const e = v.ne;
            if (e.Ce)
                return;
            e.Ce = P(c),
            e.Ce.id = "cc-main",
            e.Ce.setAttribute("data-nosnippet", ""),
            ke();
            let t = v.o.i.root;
            t && k(t) && (t = document.querySelector(t)),
            (t || e.Ue.body).appendChild(e.Ce)
        }
          , xe = e => ie( () => localStorage.removeItem(e))
          , _e = (e, t) => {
            if (t instanceof RegExp)
                return e.filter(e => t.test(e));
            {
                const i = b(e, t);
                return i > -1 ? [e[i]] : []
            }
        }
          , Ae = e => {
            const {hostname: t, protocol: i} = location
              , {name: n, path: s, domain: o, sameSite: r, useLocalStorage: a, secure: l} = v.t.cookie
              , c = e ? ( () => {
                const e = v.o.S
                  , t = e ? new Date - e : 0;
                return 864e5 * V() - t
            }
            )() : 864e5 * V()
              , d = new Date;
            d.setTime(d.getTime() + c),
            v.o.p.expirationTime = d.getTime();
            const u = JSON.stringify(v.o.p);
            let h = n + "=" + encodeURIComponent(u) + (0 !== c ? "; expires=" + d.toUTCString() : "") + "; Path=" + s + "; SameSite=" + r;
            w(t, ".") && (h += "; Domain=" + o),
            l && "https:" === i && (h += "; Secure"),
            a ? ( (e, t) => {
                ie( () => localStorage.setItem(e, t))
            }
            )(n, u) : document.cookie = h,
            v.o.p
        }
          , Ee = (e, t, i) => {
            if (0 === e.length)
                return;
            const n = i || v.t.cookie.domain
              , s = t || v.t.cookie.path
              , o = "www." === n.slice(0, 4)
              , r = o && n.substring(4)
              , a = (e, t) => {
                t && "." !== t.slice(0, 1) && (t = "." + t),
                document.cookie = e + "=; path=" + s + (t ? "; domain=" + t : "") + "; expires=Thu, 01 Jan 1970 00:00:01 GMT;"
            }
            ;
            for (const t of e)
                a(t, i),
                i || a(t, n),
                o && a(t, r)
        }
          , Se = e => {
            const t = e || v.t.cookie.name
              , i = v.t.cookie.useLocalStorage;
            return ( (e, t) => {
                let i;
                return i = ie( () => JSON.parse(t ? e : decodeURIComponent(e)), !0) || {},
                i
            }
            )(i ? (n = t,
            ie( () => localStorage.getItem(n)) || "") : Le(t, !0), i);
            var n
        }
          , Le = (e, t) => {
            const i = document.cookie.match("(^|;)\\s*" + e + "\\s*=\\s*([^;]+)");
            return i ? t ? i.pop() : e : ""
        }
          , Pe = e => {
            const t = document.cookie.split(/;\s*/)
              , i = [];
            for (const n of t) {
                let t = n.split("=")[0];
                e ? ie( () => {
                    e.test(t) && i.push(t)
                }
                ) : i.push(t)
            }
            return i
        }
          , Oe = (e, t=[]) => {
            ( (e, t) => {
                const {O: i, R: n, B: s, N: o, Z: r, $: a, X: l} = v.o;
                let c = [];
                if (e) {
                    T(e) ? c.push(...e) : k(e) && (c = "all" === e ? i : [e]);
                    for (const e of i)
                        r[e] = w(c, e) ? _(l[e]) : []
                } else
                    c = [...n, ...a],
                    o && (c = ( () => {
                        const e = v.ne.ae;
                        if (!e)
                            return [];
                        let t = [];
                        for (let i in e)
                            e[i].checked && t.push(i);
                        return t
                    }
                    )());
                c = c.filter(e => !w(i, e) || !w(t, e)),
                c.push(...s),
                z(c)
            }
            )(e, t),
            ( () => {
                const e = v.o
                  , {Z: t, B: i, Y: n, X: s, O: o} = e
                  , r = o;
                e.te = H(n);
                for (const o of r) {
                    const r = s[o]
                      , a = _(r)
                      , l = t[o] && t[o].length > 0
                      , c = w(i, o);
                    if (0 !== a.length) {
                        if (n[o] = [],
                        c)
                            n[o].push(...a);
                        else if (l) {
                            const e = t[o];
                            n[o].push(...e)
                        } else
                            n[o] = e.Z[o];
                        n[o] = A(n[o])
                    }
                }
            }
            )(),
            ( () => {
                const e = v.o;
                e.L = v.t.mode === s && e.D ? B(e.$, e.R) : B(e.R, e.p.categories);
                let t = e.L.length > 0
                  , i = !1;
                for (const t of e.O)
                    e.ee[t] = B(e.Y[t], e.te[t]),
                    e.ee[t].length > 0 && (i = !0);
                const o = v.ne.ae;
                for (const t in o)
                    o[t].checked = w(e.R, t);
                for (const t of e.O) {
                    const i = v.ne.se[t]
                      , n = e.Y[t];
                    for (const e in i)
                        i[e].checked = w(n, e)
                }
                e.C || (e.C = new Date),
                e.M || (e.M = ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, e => (e ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> e / 4).toString(16))),
                e.p = {
                    categories: H(e.R),
                    revision: v.t.revision,
                    data: e.h,
                    consentTimestamp: e.C.toISOString(),
                    consentId: e.M,
                    services: H(e.Y),
                    languageCode: v.o.l
                },
                e.S && (e.p.lastConsentTimestamp = e.S.toISOString());
                let r = !1;
                const a = t || i;
                (e.D || a) && (e.D && (e.D = !1,
                r = !0),
                e.S = e.S ? new Date : e.C,
                e.p.lastConsentTimestamp = e.S.toISOString(),
                Ae(),
                v.t.autoClearCookies && (r || a) && (e => {
                    const t = v.o
                      , i = Pe()
                      , n = (e => {
                        const t = v.o;
                        return (e ? t.O : t.L).filter(e => {
                            const i = t.P[e];
                            return !!i && !i.readOnly && !!i.autoClear
                        }
                        )
                    }
                    )(e);
                    for (const e in t.ee)
                        for (const n of t.ee[e]) {
                            const s = t.X[e][n].cookies;
                            if (!w(t.Y[e], n) && s)
                                for (const e of s) {
                                    const t = _e(i, e.name);
                                    Ee(t, e.path, e.domain)
                                }
                        }
                    for (const s of n) {
                        const n = t.P[s].autoClear
                          , o = n && n.cookies || []
                          , r = w(t.L, s)
                          , a = !w(t.R, s)
                          , l = r && a;
                        if (e ? a : l) {
                            n.reloadPage && l && (t.j = !0);
                            for (const e of o) {
                                const t = _e(i, e.name);
                                Ee(t, e.path, e.domain)
                            }
                        }
                    }
                }
                )(r),
                ne()),
                r && (te(v.re.ie),
                te(v.re.le),
                v.t.mode === n) || (a && te(v.re.de),
                e.j && (e.j = !1,
                location.reload()))
            }
            )()
        }
          , Ne = e => {
            const t = v.o.D ? [] : v.o.R;
            return w(t, e)
        }
          , De = (e, t) => {
            const i = v.o.D ? [] : v.o.Y[t] || [];
            return w(i, e)
        }
          , je = e => {
            const {ne: t, o: i} = v;
            if (!i.k) {
                if (!i.T) {
                    if (!e)
                        return;
                    ye(Me, Ce)
                }
                i.k = !0,
                i.J = E(),
                i.v && J(!0),
                Y(t.he, 1),
                M(t.ye, o),
                O(t.he, u, "false"),
                setTimeout( () => {
                    U(v.ne.be)
                }
                , 100),
                te(v.re.fe, m)
            }
        }
        ;
        var Me = {
            show: je,
            hide: () => {
                const {ne: e, o: t, re: i} = v;
                t.k && (t.k = !1,
                t.v && J(),
                U(e.Ke, !0),
                R(e.ye, o),
                O(e.he, u, "true"),
                U(t.J),
                t.J = null,
                te(i._e, m))
            }
            ,
            showPreferences: () => {
                const e = v.o;
                e.A || (e.N || fe(Me, Ce),
                e.A = !0,
                e.k ? e.U = E() : e.J = E(),
                Y(v.ne.we, 2),
                M(v.ne.ye, r),
                O(v.ne.we, u, "false"),
                setTimeout( () => {
                    U(v.ne.ve)
                }
                , 100),
                te(v.re.fe, g))
            }
            ,
            hidePreferences: () => {
                const e = v.o;
                e.A && (e.A = !1,
                ( () => {
                    const e = Ie()
                      , t = v.o.P
                      , i = v.ne.ae
                      , n = v.ne.se
                      , s = e => w(v.o.$, e);
                    for (const o in i) {
                        const r = !!t[o].readOnly;
                        i[o].checked = r || (e ? Ne(o) : s(o));
                        for (const t in n[o])
                            n[o][t].checked = r || (e ? De(t, o) : s(o))
                    }
                }
                )(),
                U(v.ne.$e, !0),
                R(v.ne.ye, r),
                O(v.ne.we, u, "true"),
                e.k ? (U(e.U),
                e.U = null) : (U(e.J),
                e.J = null),
                te(v.re._e, g))
            }
            ,
            acceptCategory: Oe
        };
        const Ie = () => !v.o.D;
        function $e() {
            console.log("updateGtagConsent"),
            "undefined" != typeof gtag && gtag("consent", "update", {
                ad_storage: Ne("marketing") ? "granted" : "denied",
                ad_user_data: Ne("marketing") ? "granted" : "denied",
                ad_personalization: Ne("marketing") ? "granted" : "denied",
                analytics_storage: Ne("analytics") ? "granted" : "denied",
                functionality_storage: Ne("preferences") ? "granted" : "denied",
                personalization_storage: Ne("preferences") ? "granted" : "denied"
            }),
            window.dataLayer && Array.isArray(window.dataLayer) && window.dataLayer.push({
                event: "consent_updated"
            })
        }
        window.addEventListener("load", (function() {
            (async e => {
                const {o: t, t: i, re: n} = v
                  , o = window;
                if (!o._ccRun) {
                    if (o._ccRun = !0,
                    (e => {
                        const {ne: t, t: i, o: n} = v
                          , o = i
                          , r = n
                          , {cookie: a} = o
                          , c = v.ce
                          , d = e.cookie
                          , u = e.categories
                          , h = _(u) || []
                          , p = navigator
                          , f = document;
                        t.Ue = f,
                        t.ye = f.documentElement,
                        a.domain = location.hostname,
                        r.i = e,
                        r.P = u,
                        r.O = h,
                        r._ = e.language.translations,
                        r.v = !!e.disablePageInteraction,
                        c.ie = e.onFirstConsent,
                        c.le = e.onConsent,
                        c.de = e.onChange,
                        c._e = e.onModalHide,
                        c.fe = e.onModalShow,
                        c.ue = e.onModalReady;
                        const {mode: m, autoShow: g, lazyHtmlGeneration: y, autoClearCookies: b, revision: T, manageScriptTags: k, hideFromBots: x} = e;
                        m === s && (o.mode = m),
                        "boolean" == typeof b && (o.autoClearCookies = b),
                        "boolean" == typeof k && (o.manageScriptTags = k),
                        "number" == typeof T && T >= 0 && (o.revision = T,
                        r.V = !0),
                        "boolean" == typeof g && (o.autoShow = g),
                        "boolean" == typeof y && (o.lazyHtmlGeneration = y),
                        !1 === x && (o.hideFromBots = !1),
                        !0 === o.hideFromBots && p && (r.G = p.userAgent && /bot|crawl|spider|slurp|teoma/i.test(p.userAgent) || p.webdriver),
                        C(d) && (o.cookie = {
                            ...a,
                            ...d
                        }),
                        o.autoClearCookies,
                        r.V,
                        o.manageScriptTags,
                        (e => {
                            const {P: t, X: i, Y: n, Z: s, B: o} = v.o;
                            for (let r of e) {
                                const e = t[r]
                                  , a = e.services || {}
                                  , l = C(a) && _(a) || [];
                                i[r] = {},
                                n[r] = [],
                                s[r] = [],
                                e.readOnly && (o.push(r),
                                n[r] = l),
                                v.ne.se[r] = {};
                                for (let e of l) {
                                    const t = a[e];
                                    t.Se = !1,
                                    i[r][e] = t
                                }
                            }
                        }
                        )(h),
                        ( () => {
                            if (!v.t.manageScriptTags)
                                return;
                            const e = v.o
                              , t = L(document, "script[" + l + "]");
                            for (const i of t) {
                                let t = D(i, l)
                                  , n = i.dataset.service || ""
                                  , s = !1;
                                if (t && "!" === t.charAt(0) && (t = t.slice(1),
                                s = !0),
                                "!" === n.charAt(0) && (n = n.slice(1),
                                s = !0),
                                w(e.O, t) && (e.oe.push({
                                    Me: i,
                                    xe: !1,
                                    ke: s,
                                    De: t,
                                    Te: n
                                }),
                                n)) {
                                    const i = e.X[t];
                                    i[n] || (i[n] = {
                                        Se: !1
                                    })
                                }
                            }
                        }
                        )(),
                        we(( () => {
                            const e = v.o.i.language.autoDetect;
                            if (e) {
                                const t = {
                                    browser: navigator.language,
                                    document: document.documentElement.lang
                                }
                                  , i = ve(t[e]);
                                if (i)
                                    return i
                            }
                            return be()
                        }
                        )())
                    }
                    )(e),
                    t.G)
                        return;
                    ( () => {
                        const e = v.o
                          , t = v.t
                          , i = Se()
                          , {categories: n, services: o, consentId: r, consentTimestamp: a, lastConsentTimestamp: l, data: c, revision: d} = i
                          , u = T(n);
                        e.p = i,
                        e.M = r;
                        const h = !!r && k(r);
                        e.C = a,
                        e.C && (e.C = new Date(a)),
                        e.S = l,
                        e.S && (e.S = new Date(l)),
                        e.h = void 0 !== c ? c : null,
                        e.V && h && d !== t.revision && (e.I = !1),
                        e.D = !(h && e.I && e.C && e.S && u),
                        t.cookie.useLocalStorage && !e.D && (e.D = (new Date).getTime() > (i.expirationTime || 0),
                        e.D && xe(t.cookie.name)),
                        e.D,
                        ( () => {
                            const e = v.o;
                            for (const t of e.O) {
                                const i = e.P[t];
                                if (i.readOnly || i.enabled) {
                                    e.$.push(t);
                                    const i = e.X[t] || {};
                                    for (let n in i)
                                        e.Z[t].push(n),
                                        e.i.mode === s && e.Y[t].push(n)
                                }
                            }
                        }
                        )(),
                        e.D ? t.mode === s && (e.R = [...e.$]) : (e.Y = {
                            ...e.Y,
                            ...o
                        },
                        e.Z = {
                            ...e.Y
                        },
                        z([...e.B, ...n]))
                    }
                    )();
                    const a = Ie();
                    if (!await Te())
                        return !1;
                    if (W(null, r = Me, fe, Ce),
                    v.o.D && ye(r, Ce),
                    v.t.lazyHtmlGeneration || fe(r, Ce),
                    i.autoShow && !a && je(!0),
                    a)
                        return ne(),
                        te(n.le);
                    i.mode === s && ne(t.$)
                }
                var r
            }
            )({
                cookie: {
                    name: "cc_cookie"
                },
                guiOptions: {
                    consentModal: {
                        layout: "cloud inline",
                        position: "bottom center",
                        flipButtons: !1,
                        equalWeightButtons: !0
                    },
                    preferencesModal: {
                        layout: "box",
                        flipButtons: !1,
                        equalWeightButtons: !1
                    }
                },
                onFirstConsent: function(e) {
                    e.cookie
                },
                onConsent: function(e) {
                    e.cookie;
                    $e()
                },
                onChange: function(e) {
                    e.changedCategories;
                    $e()
                },
                onModalReady: function(e) {
                    e.modalName
                },
                onModalShow: function(e) {
                    e.modalName
                },
                onModalHide: function(e) {
                    e.modalName
                },
                categories: {
                    necessary: {
                        enabled: !0,
                        readOnly: !0
                    },
                    analytics: {
                        enabled: !0,
                        readOnly: !1
                    },
                    marketing: {
                        enabled: !0,
                        readOnly: !1
                    }
                },
                language: {
                    default: "en",
                    translations: {
                        en: {
                            consentModal: {
                                title: "We use cookies!",
                                description: 'Hi, this website uses essential cookies to ensure its proper operation and tracking cookies to understand how you interact with it. The latter will be set only after consent. <a href="/privacy-policy/">Privacy Policy</a>',
                                acceptAllBtn: "Accept all",
                                acceptNecessaryBtn: "Reject all",
                                showPreferencesBtn: "Manage Individual preferences"
                            },
                            preferencesModal: {
                                title: "Manage cookie preferences",
                                acceptAllBtn: "Accept all",
                                acceptNecessaryBtn: "Reject all",
                                savePreferencesBtn: "Accept current selection",
                                closeIconLabel: "Close modal",
                                sections: [{
                                    title: "Your Privacy Choices",
                                    description: "In this panel you can express some preferences related to the processing of your personal information. You may review and change expressed choices at any time by resurfacing this panel via the provided link. To deny your consent to the specific processing activities described below, switch the toggles to off or use the “Reject all” button and confirm you want to save your choices."
                                }, {
                                    title: "Strictly Necessary",
                                    description: "These cookies are essential for the proper functioning of my website. Without these cookies, the website would not work properly",
                                    linkedCategory: "necessary",
                                    cookieTable: {
                                        caption: "Cookie table",
                                        headers: {
                                            name: "Name",
                                            domain: "Domain",
                                            description: "Description",
                                            expiration: "Expiration"
                                        },
                                        body: [{
                                            name: "CraftSessionId",
                                            domain: "This site",
                                            expiration: "Session",
                                            description: "This site relies on PHP sessions to maintain sessions across web requests. That is done via the PHP session cookie.",
                                            is_regex: !0
                                        }, {
                                            name: "CRAFT_CSRF_TOKEN",
                                            domain: "This site",
                                            expiration: "Session",
                                            description: "Protects us and you as a user against Cross-Site Request Forgery attacks."
                                        }, {
                                            name: "cc_cookie, cookie-consent",
                                            domain: "This site",
                                            expiration: "6 months and 1 year respectively",
                                            description: "Lets us track your cookie preferences"
                                        }]
                                    }
                                }, {
                                    title: "Performance and Analytics cookies",
                                    description: "These cookies allow the website to remember the choices you have made in the past",
                                    linkedCategory: "analytics",
                                    cookieTable: {
                                        caption: "Cookie table",
                                        headers: {
                                            name: "Name",
                                            provider: "Provider",
                                            description: "Description",
                                            expiration: "Expiration"
                                        },
                                        body: [{
                                            name: "_ga, _gid, _gat, _gcl_au, _ga_*",
                                            provider: "google.com",
                                            description: "Used to send data to Google Analytics about the visitors device and behaviour. Tracks user across devices and marketing channels.",
                                            expiration: "2 years for _ga, 1 day for _gid and _gat"
                                        }, {
                                            name: "ln_or, bcookie",
                                            provider: "linkedin.com",
                                            description: "Used to send data to LinkedIn information about the visitors device and behaviour. Tracks user across devices and marketing channels.",
                                            expiration: "1 month"
                                        }, {
                                            name: "_clck, _clsk",
                                            provider: "clarity.microsoft.com",
                                            description: "Persists the Clarity User ID and preferences, unique to that site is attributed to the same user ID. Connects multiple page views by a user into a single Clarity session recording.",
                                            expiration: "1 day and 1 month respectively"
                                        }, {
                                            name: "_tt_enable_cookie, _ttp",
                                            provider: "tiktok.com",
                                            description: "Analytics for TikTok",
                                            expiration: "1 month"
                                        }]
                                    }
                                }, {
                                    title: "Marketing",
                                    description: "Marketing cookies are used to track visitors across websites and to display ads that are relevant to the user.",
                                    linkedCategory: "marketing",
                                    cookieTable: {
                                        caption: "Cookie table",
                                        headers: {
                                            name: "Name",
                                            provider: "Service",
                                            description: "Description",
                                            expiration: "Expiration"
                                        },
                                        body: [{
                                            name: "_fbp, fr, tr",
                                            description: "Used to deliver advertisements",
                                            provider: "Facebook",
                                            expiration: "3 months"
                                        }, {
                                            name: "_pin_unauth",
                                            description: "Used to track advertising conversions",
                                            provider: "Pinterest",
                                            expiration: "1 months"
                                        }]
                                    }
                                }]
                            }
                        }
                    }
                }
            })
        }
        ))
    },
    URgk: function(e, t, i) {
        (function(e) {
            var n = void 0 !== e && e || "undefined" != typeof self && self || window
              , s = Function.prototype.apply;
            function o(e, t) {
                this._id = e,
                this._clearFn = t
            }
            t.setTimeout = function() {
                return new o(s.call(setTimeout, n, arguments),clearTimeout)
            }
            ,
            t.setInterval = function() {
                return new o(s.call(setInterval, n, arguments),clearInterval)
            }
            ,
            t.clearTimeout = t.clearInterval = function(e) {
                e && e.close()
            }
            ,
            o.prototype.unref = o.prototype.ref = function() {}
            ,
            o.prototype.close = function() {
                this._clearFn.call(n, this._id)
            }
            ,
            t.enroll = function(e, t) {
                clearTimeout(e._idleTimeoutId),
                e._idleTimeout = t
            }
            ,
            t.unenroll = function(e) {
                clearTimeout(e._idleTimeoutId),
                e._idleTimeout = -1
            }
            ,
            t._unrefActive = t.active = function(e) {
                clearTimeout(e._idleTimeoutId);
                var t = e._idleTimeout;
                t >= 0 && (e._idleTimeoutId = setTimeout((function() {
                    e._onTimeout && e._onTimeout()
                }
                ), t))
            }
            ,
            i("YBdB"),
            t.setImmediate = "undefined" != typeof self && self.setImmediate || void 0 !== e && e.setImmediate || this && this.setImmediate,
            t.clearImmediate = "undefined" != typeof self && self.clearImmediate || void 0 !== e && e.clearImmediate || this && this.clearImmediate
        }
        ).call(this, i("yLpj"))
    },
    XeJP: function(e, t, i) {
        e.exports = function(e) {
            function t(n) {
                if (i[n])
                    return i[n].exports;
                var s = i[n] = {
                    exports: {},
                    id: n,
                    loaded: !1
                };
                return e[n].call(s.exports, s, s.exports, t),
                s.loaded = !0,
                s.exports
            }
            var i = {};
            return t.m = e,
            t.c = i,
            t.p = "",
            t(0)
        }([function(e, t, i) {
            "use strict";
            var n = function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }(i(2));
            e.exports = n.default
        }
        , function(e, t) {
            e.exports = function(e) {
                var t = typeof e;
                return null != e && ("object" == t || "function" == t)
            }
        }
        , function(e, t, i) {
            "use strict";
            function n(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var s = n(i(9))
              , o = n(i(3))
              , r = i(4);
            t.default = function() {
                if ("undefined" != typeof window) {
                    var e = {
                        history: []
                    }
                      , t = {
                        offset: {},
                        threshold: 0,
                        test: r.inViewport
                    }
                      , i = (0,
                    s.default)((function() {
                        e.history.forEach((function(t) {
                            e[t].check()
                        }
                        ))
                    }
                    ), 100);
                    ["scroll", "resize", "load"].forEach((function(e) {
                        return addEventListener(e, i)
                    }
                    )),
                    window.MutationObserver && addEventListener("DOMContentLoaded", (function() {
                        new MutationObserver(i).observe(document.body, {
                            attributes: !0,
                            childList: !0,
                            subtree: !0
                        })
                    }
                    ));
                    var n = function(i) {
                        if ("string" == typeof i) {
                            var n = [].slice.call(document.querySelectorAll(i));
                            return e.history.indexOf(i) > -1 ? e[i].elements = n : (e[i] = (0,
                            o.default)(n, t),
                            e.history.push(i)),
                            e[i]
                        }
                    };
                    return n.offset = function(e) {
                        if (void 0 === e)
                            return t.offset;
                        var i = function(e) {
                            return "number" == typeof e
                        };
                        return ["top", "right", "bottom", "left"].forEach(i(e) ? function(i) {
                            return t.offset[i] = e
                        }
                        : function(n) {
                            return i(e[n]) ? t.offset[n] = e[n] : null
                        }
                        ),
                        t.offset
                    }
                    ,
                    n.threshold = function(e) {
                        return "number" == typeof e && e >= 0 && e <= 1 ? t.threshold = e : t.threshold
                    }
                    ,
                    n.test = function(e) {
                        return "function" == typeof e ? t.test = e : t.test
                    }
                    ,
                    n.is = function(e) {
                        return t.test(e, t)
                    }
                    ,
                    n.offset(0),
                    n
                }
            }()
        }
        , function(e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var i = function() {
                function e(e, t) {
                    for (var i = 0; i < t.length; i++) {
                        var n = t[i];
                        n.enumerable = n.enumerable || !1,
                        n.configurable = !0,
                        "value"in n && (n.writable = !0),
                        Object.defineProperty(e, n.key, n)
                    }
                }
                return function(t, i, n) {
                    return i && e(t.prototype, i),
                    n && e(t, n),
                    t
                }
            }()
              , n = function() {
                function e(t, i) {
                    (function(e, t) {
                        if (!(e instanceof t))
                            throw new TypeError("Cannot call a class as a function")
                    }
                    )(this, e),
                    this.options = i,
                    this.elements = t,
                    this.current = [],
                    this.handlers = {
                        enter: [],
                        exit: []
                    },
                    this.singles = {
                        enter: [],
                        exit: []
                    }
                }
                return i(e, [{
                    key: "check",
                    value: function() {
                        var e = this;
                        return this.elements.forEach((function(t) {
                            var i = e.options.test(t, e.options)
                              , n = e.current.indexOf(t)
                              , s = n > -1
                              , o = !i && s;
                            i && !s && (e.current.push(t),
                            e.emit("enter", t)),
                            o && (e.current.splice(n, 1),
                            e.emit("exit", t))
                        }
                        )),
                        this
                    }
                }, {
                    key: "on",
                    value: function(e, t) {
                        return this.handlers[e].push(t),
                        this
                    }
                }, {
                    key: "once",
                    value: function(e, t) {
                        return this.singles[e].unshift(t),
                        this
                    }
                }, {
                    key: "emit",
                    value: function(e, t) {
                        for (; this.singles[e].length; )
                            this.singles[e].pop()(t);
                        for (var i = this.handlers[e].length; --i > -1; )
                            this.handlers[e][i](t);
                        return this
                    }
                }]),
                e
            }();
            t.default = function(e, t) {
                return new n(e,t)
            }
        }
        , function(e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
            t.inViewport = function(e, t) {
                var i = e.getBoundingClientRect()
                  , n = i.top
                  , s = i.right
                  , o = i.bottom
                  , r = i.left
                  , a = i.width
                  , l = i.height
                  , c = o
                  , d = window.innerWidth - r
                  , u = window.innerHeight - n
                  , h = s
                  , p = t.threshold * a
                  , f = t.threshold * l;
                return c > t.offset.top + f && d > t.offset.right + p && u > t.offset.bottom + f && h > t.offset.left + p
            }
        }
        , function(e, t) {
            (function(t) {
                var i = "object" == typeof t && t && t.Object === Object && t;
                e.exports = i
            }
            ).call(t, function() {
                return this
            }())
        }
        , function(e, t, i) {
            var n = i(5)
              , s = "object" == typeof self && self && self.Object === Object && self
              , o = n || s || Function("return this")();
            e.exports = o
        }
        , function(e, t, i) {
            var n = i(1)
              , s = i(8)
              , o = i(10)
              , r = "Expected a function"
              , a = Math.max
              , l = Math.min;
            e.exports = function(e, t, i) {
                function c(t) {
                    var i = m
                      , n = g;
                    return m = g = void 0,
                    T = t,
                    v = e.apply(n, i)
                }
                function d(e) {
                    return T = e,
                    b = setTimeout(h, t),
                    k ? c(e) : v
                }
                function u(e) {
                    var i = e - w;
                    return void 0 === w || i >= t || i < 0 || C && e - T >= y
                }
                function h() {
                    var e = s();
                    return u(e) ? p(e) : void (b = setTimeout(h, function(e) {
                        var i = t - (e - w);
                        return C ? l(i, y - (e - T)) : i
                    }(e)))
                }
                function p(e) {
                    return b = void 0,
                    x && m ? c(e) : (m = g = void 0,
                    v)
                }
                function f() {
                    var e = s()
                      , i = u(e);
                    if (m = arguments,
                    g = this,
                    w = e,
                    i) {
                        if (void 0 === b)
                            return d(w);
                        if (C)
                            return b = setTimeout(h, t),
                            c(w)
                    }
                    return void 0 === b && (b = setTimeout(h, t)),
                    v
                }
                var m, g, y, v, b, w, T = 0, k = !1, C = !1, x = !0;
                if ("function" != typeof e)
                    throw new TypeError(r);
                return t = o(t) || 0,
                n(i) && (k = !!i.leading,
                y = (C = "maxWait"in i) ? a(o(i.maxWait) || 0, t) : y,
                x = "trailing"in i ? !!i.trailing : x),
                f.cancel = function() {
                    void 0 !== b && clearTimeout(b),
                    T = 0,
                    m = w = g = b = void 0
                }
                ,
                f.flush = function() {
                    return void 0 === b ? v : p(s())
                }
                ,
                f
            }
        }
        , function(e, t, i) {
            var n = i(6);
            e.exports = function() {
                return n.Date.now()
            }
        }
        , function(e, t, i) {
            var n = i(7)
              , s = i(1)
              , o = "Expected a function";
            e.exports = function(e, t, i) {
                var r = !0
                  , a = !0;
                if ("function" != typeof e)
                    throw new TypeError(o);
                return s(i) && (r = "leading"in i ? !!i.leading : r,
                a = "trailing"in i ? !!i.trailing : a),
                n(e, t, {
                    leading: r,
                    maxWait: t,
                    trailing: a
                })
            }
        }
        , function(e, t) {
            e.exports = function(e) {
                return e
            }
        }
        ])
    },
    YBdB: function(e, t, i) {
        (function(e, t) {
            !function(e, i) {
                "use strict";
                if (!e.setImmediate) {
                    var n, s, o, r, a, l = 1, c = {}, d = !1, u = e.document, h = Object.getPrototypeOf && Object.getPrototypeOf(e);
                    h = h && h.setTimeout ? h : e,
                    "[object process]" === {}.toString.call(e.process) ? n = function(e) {
                        t.nextTick((function() {
                            f(e)
                        }
                        ))
                    }
                    : !function() {
                        if (e.postMessage && !e.importScripts) {
                            var t = !0
                              , i = e.onmessage;
                            return e.onmessage = function() {
                                t = !1
                            }
                            ,
                            e.postMessage("", "*"),
                            e.onmessage = i,
                            t
                        }
                    }() ? e.MessageChannel ? ((o = new MessageChannel).port1.onmessage = function(e) {
                        f(e.data)
                    }
                    ,
                    n = function(e) {
                        o.port2.postMessage(e)
                    }
                    ) : u && "onreadystatechange"in u.createElement("script") ? (s = u.documentElement,
                    n = function(e) {
                        var t = u.createElement("script");
                        t.onreadystatechange = function() {
                            f(e),
                            t.onreadystatechange = null,
                            s.removeChild(t),
                            t = null
                        }
                        ,
                        s.appendChild(t)
                    }
                    ) : n = function(e) {
                        setTimeout(f, 0, e)
                    }
                    : (r = "setImmediate$" + Math.random() + "$",
                    a = function(t) {
                        t.source === e && "string" == typeof t.data && 0 === t.data.indexOf(r) && f(+t.data.slice(r.length))
                    }
                    ,
                    e.addEventListener ? e.addEventListener("message", a, !1) : e.attachEvent("onmessage", a),
                    n = function(t) {
                        e.postMessage(r + t, "*")
                    }
                    ),
                    h.setImmediate = function(e) {
                        "function" != typeof e && (e = new Function("" + e));
                        for (var t = new Array(arguments.length - 1), i = 0; i < t.length; i++)
                            t[i] = arguments[i + 1];
                        var s = {
                            callback: e,
                            args: t
                        };
                        return c[l] = s,
                        n(l),
                        l++
                    }
                    ,
                    h.clearImmediate = p
                }
                function p(e) {
                    delete c[e]
                }
                function f(e) {
                    if (d)
                        setTimeout(f, 0, e);
                    else {
                        var t = c[e];
                        if (t) {
                            d = !0;
                            try {
                                !function(e) {
                                    var t = e.callback
                                      , i = e.args;
                                    switch (i.length) {
                                    case 0:
                                        t();
                                        break;
                                    case 1:
                                        t(i[0]);
                                        break;
                                    case 2:
                                        t(i[0], i[1]);
                                        break;
                                    case 3:
                                        t(i[0], i[1], i[2]);
                                        break;
                                    default:
                                        t.apply(void 0, i)
                                    }
                                }(t)
                            } finally {
                                p(e),
                                d = !1
                            }
                        }
                    }
                }
            }("undefined" == typeof self ? void 0 === e ? this : e : self)
        }
        ).call(this, i("yLpj"), i("8oxB"))
    },
    ZZjj: function(e, t) {},
    "Zej/": function(e, t, i) {
        var n, s, o;
        !function(r) {
            "use strict";
            s = [i("EVdn")],
            void 0 === (o = "function" == typeof (n = function(e) {
                var t = window.Slick || {};
                (i = 0,
                t = function(t, n) {
                    var s, o = this;
                    o.defaults = {
                        accessibility: !0,
                        adaptiveHeight: !1,
                        appendArrows: e(t),
                        appendDots: e(t),
                        arrows: !0,
                        asNavFor: null,
                        prevArrow: '<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',
                        nextArrow: '<button class="slick-next" aria-label="Next" type="button">Next</button>',
                        autoplay: !1,
                        autoplaySpeed: 3e3,
                        centerMode: !1,
                        centerPadding: "50px",
                        cssEase: "ease",
                        customPaging: function(t, i) {
                            return e('<button type="button" />').text(i + 1)
                        },
                        dots: !1,
                        dotsClass: "slick-dots",
                        draggable: !0,
                        easing: "linear",
                        edgeFriction: .35,
                        fade: !1,
                        focusOnSelect: !1,
                        focusOnChange: !1,
                        infinite: !0,
                        initialSlide: 0,
                        lazyLoad: "ondemand",
                        mobileFirst: !1,
                        pauseOnHover: !0,
                        pauseOnFocus: !0,
                        pauseOnDotsHover: !1,
                        respondTo: "window",
                        responsive: null,
                        rows: 1,
                        rtl: !1,
                        slide: "",
                        slidesPerRow: 1,
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        speed: 500,
                        swipe: !0,
                        swipeToSlide: !1,
                        touchMove: !0,
                        touchThreshold: 5,
                        useCSS: !0,
                        useTransform: !0,
                        variableWidth: !1,
                        vertical: !1,
                        verticalSwiping: !1,
                        waitForAnimate: !0,
                        zIndex: 1e3
                    },
                    o.initials = {
                        animating: !1,
                        dragging: !1,
                        autoPlayTimer: null,
                        currentDirection: 0,
                        currentLeft: null,
                        currentSlide: 0,
                        direction: 1,
                        $dots: null,
                        listWidth: null,
                        listHeight: null,
                        loadIndex: 0,
                        $nextArrow: null,
                        $prevArrow: null,
                        scrolling: !1,
                        slideCount: null,
                        slideWidth: null,
                        $slideTrack: null,
                        $slides: null,
                        sliding: !1,
                        slideOffset: 0,
                        swipeLeft: null,
                        swiping: !1,
                        $list: null,
                        touchObject: {},
                        transformsEnabled: !1,
                        unslicked: !1
                    },
                    e.extend(o, o.initials),
                    o.activeBreakpoint = null,
                    o.animType = null,
                    o.animProp = null,
                    o.breakpoints = [],
                    o.breakpointSettings = [],
                    o.cssTransitions = !1,
                    o.focussed = !1,
                    o.interrupted = !1,
                    o.hidden = "hidden",
                    o.paused = !0,
                    o.positionProp = null,
                    o.respondTo = null,
                    o.rowCount = 1,
                    o.shouldClick = !0,
                    o.$slider = e(t),
                    o.$slidesCache = null,
                    o.transformType = null,
                    o.transitionType = null,
                    o.visibilityChange = "visibilitychange",
                    o.windowWidth = 0,
                    o.windowTimer = null,
                    s = e(t).data("slick") || {},
                    o.options = e.extend({}, o.defaults, n, s),
                    o.currentSlide = o.options.initialSlide,
                    o.originalSettings = o.options,
                    void 0 !== document.mozHidden ? (o.hidden = "mozHidden",
                    o.visibilityChange = "mozvisibilitychange") : void 0 !== document.webkitHidden && (o.hidden = "webkitHidden",
                    o.visibilityChange = "webkitvisibilitychange"),
                    o.autoPlay = e.proxy(o.autoPlay, o),
                    o.autoPlayClear = e.proxy(o.autoPlayClear, o),
                    o.autoPlayIterator = e.proxy(o.autoPlayIterator, o),
                    o.changeSlide = e.proxy(o.changeSlide, o),
                    o.clickHandler = e.proxy(o.clickHandler, o),
                    o.selectHandler = e.proxy(o.selectHandler, o),
                    o.setPosition = e.proxy(o.setPosition, o),
                    o.swipeHandler = e.proxy(o.swipeHandler, o),
                    o.dragHandler = e.proxy(o.dragHandler, o),
                    o.keyHandler = e.proxy(o.keyHandler, o),
                    o.instanceUid = i++,
                    o.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/,
                    o.registerBreakpoints(),
                    o.init(!0)
                }
                ).prototype.activateADA = function() {
                    this.$slideTrack.find(".slick-active").attr({
                        "aria-hidden": "false"
                    }).find("a, input, button, select").attr({
                        tabindex: "0"
                    })
                }
                ,
                t.prototype.addSlide = t.prototype.slickAdd = function(t, i, n) {
                    var s = this;
                    if ("boolean" == typeof i)
                        n = i,
                        i = null;
                    else if (i < 0 || i >= s.slideCount)
                        return !1;
                    s.unload(),
                    "number" == typeof i ? 0 === i && 0 === s.$slides.length ? e(t).appendTo(s.$slideTrack) : n ? e(t).insertBefore(s.$slides.eq(i)) : e(t).insertAfter(s.$slides.eq(i)) : !0 === n ? e(t).prependTo(s.$slideTrack) : e(t).appendTo(s.$slideTrack),
                    s.$slides = s.$slideTrack.children(this.options.slide),
                    s.$slideTrack.children(this.options.slide).detach(),
                    s.$slideTrack.append(s.$slides),
                    s.$slides.each((function(t, i) {
                        e(i).attr("data-slick-index", t)
                    }
                    )),
                    s.$slidesCache = s.$slides,
                    s.reinit()
                }
                ,
                t.prototype.animateHeight = function() {
                    var e = this;
                    if (1 === e.options.slidesToShow && !0 === e.options.adaptiveHeight && !1 === e.options.vertical) {
                        var t = e.$slides.eq(e.currentSlide).outerHeight(!0);
                        e.$list.animate({
                            height: t
                        }, e.options.speed)
                    }
                }
                ,
                t.prototype.animateSlide = function(t, i) {
                    var n = {}
                      , s = this;
                    s.animateHeight(),
                    !0 === s.options.rtl && !1 === s.options.vertical && (t = -t),
                    !1 === s.transformsEnabled ? !1 === s.options.vertical ? s.$slideTrack.animate({
                        left: t
                    }, s.options.speed, s.options.easing, i) : s.$slideTrack.animate({
                        top: t
                    }, s.options.speed, s.options.easing, i) : !1 === s.cssTransitions ? (!0 === s.options.rtl && (s.currentLeft = -s.currentLeft),
                    e({
                        animStart: s.currentLeft
                    }).animate({
                        animStart: t
                    }, {
                        duration: s.options.speed,
                        easing: s.options.easing,
                        step: function(e) {
                            e = Math.ceil(e),
                            !1 === s.options.vertical ? (n[s.animType] = "translate(" + e + "px, 0px)",
                            s.$slideTrack.css(n)) : (n[s.animType] = "translate(0px," + e + "px)",
                            s.$slideTrack.css(n))
                        },
                        complete: function() {
                            i && i.call()
                        }
                    })) : (s.applyTransition(),
                    t = Math.ceil(t),
                    !1 === s.options.vertical ? n[s.animType] = "translate3d(" + t + "px, 0px, 0px)" : n[s.animType] = "translate3d(0px," + t + "px, 0px)",
                    s.$slideTrack.css(n),
                    i && setTimeout((function() {
                        s.disableTransition(),
                        i.call()
                    }
                    ), s.options.speed))
                }
                ,
                t.prototype.getNavTarget = function() {
                    var t = this.options.asNavFor;
                    return t && null !== t && (t = e(t).not(this.$slider)),
                    t
                }
                ,
                t.prototype.asNavFor = function(t) {
                    var i = this.getNavTarget();
                    null !== i && "object" == typeof i && i.each((function() {
                        var i = e(this).slick("getSlick");
                        i.unslicked || i.slideHandler(t, !0)
                    }
                    ))
                }
                ,
                t.prototype.applyTransition = function(e) {
                    var t = this
                      , i = {};
                    !1 === t.options.fade ? i[t.transitionType] = t.transformType + " " + t.options.speed + "ms " + t.options.cssEase : i[t.transitionType] = "opacity " + t.options.speed + "ms " + t.options.cssEase,
                    !1 === t.options.fade ? t.$slideTrack.css(i) : t.$slides.eq(e).css(i)
                }
                ,
                t.prototype.autoPlay = function() {
                    var e = this;
                    e.autoPlayClear(),
                    e.slideCount > e.options.slidesToShow && (e.autoPlayTimer = setInterval(e.autoPlayIterator, e.options.autoplaySpeed))
                }
                ,
                t.prototype.autoPlayClear = function() {
                    this.autoPlayTimer && clearInterval(this.autoPlayTimer)
                }
                ,
                t.prototype.autoPlayIterator = function() {
                    var e = this
                      , t = e.currentSlide + e.options.slidesToScroll;
                    e.paused || e.interrupted || e.focussed || (!1 === e.options.infinite && (1 === e.direction && e.currentSlide + 1 === e.slideCount - 1 ? e.direction = 0 : 0 === e.direction && (t = e.currentSlide - e.options.slidesToScroll,
                    e.currentSlide - 1 == 0 && (e.direction = 1))),
                    e.slideHandler(t))
                }
                ,
                t.prototype.buildArrows = function() {
                    var t = this;
                    !0 === t.options.arrows && (t.$prevArrow = e(t.options.prevArrow).addClass("slick-arrow"),
                    t.$nextArrow = e(t.options.nextArrow).addClass("slick-arrow"),
                    t.slideCount > t.options.slidesToShow ? (t.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),
                    t.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),
                    t.htmlExpr.test(t.options.prevArrow) && t.$prevArrow.prependTo(t.options.appendArrows),
                    t.htmlExpr.test(t.options.nextArrow) && t.$nextArrow.appendTo(t.options.appendArrows),
                    !0 !== t.options.infinite && t.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true")) : t.$prevArrow.add(t.$nextArrow).addClass("slick-hidden").attr({
                        "aria-disabled": "true",
                        tabindex: "-1"
                    }))
                }
                ,
                t.prototype.buildDots = function() {
                    var t, i, n = this;
                    if (!0 === n.options.dots && n.slideCount > n.options.slidesToShow) {
                        for (n.$slider.addClass("slick-dotted"),
                        i = e("<ul />").addClass(n.options.dotsClass),
                        t = 0; t <= n.getDotCount(); t += 1)
                            i.append(e("<li />").append(n.options.customPaging.call(this, n, t)));
                        n.$dots = i.appendTo(n.options.appendDots),
                        n.$dots.find("li").first().addClass("slick-active")
                    }
                }
                ,
                t.prototype.buildOut = function() {
                    var t = this;
                    t.$slides = t.$slider.children(t.options.slide + ":not(.slick-cloned)").addClass("slick-slide"),
                    t.slideCount = t.$slides.length,
                    t.$slides.each((function(t, i) {
                        e(i).attr("data-slick-index", t).data("originalStyling", e(i).attr("style") || "")
                    }
                    )),
                    t.$slider.addClass("slick-slider"),
                    t.$slideTrack = 0 === t.slideCount ? e('<div class="slick-track"/>').appendTo(t.$slider) : t.$slides.wrapAll('<div class="slick-track"/>').parent(),
                    t.$list = t.$slideTrack.wrap('<div class="slick-list"/>').parent(),
                    t.$slideTrack.css("opacity", 0),
                    !0 !== t.options.centerMode && !0 !== t.options.swipeToSlide || (t.options.slidesToScroll = 1),
                    e("img[data-lazy]", t.$slider).not("[src]").addClass("slick-loading"),
                    t.setupInfinite(),
                    t.buildArrows(),
                    t.buildDots(),
                    t.updateDots(),
                    t.setSlideClasses("number" == typeof t.currentSlide ? t.currentSlide : 0),
                    !0 === t.options.draggable && t.$list.addClass("draggable")
                }
                ,
                t.prototype.buildRows = function() {
                    var e, t, i, n, s, o, r, a = this;
                    if (n = document.createDocumentFragment(),
                    o = a.$slider.children(),
                    a.options.rows > 0) {
                        for (r = a.options.slidesPerRow * a.options.rows,
                        s = Math.ceil(o.length / r),
                        e = 0; e < s; e++) {
                            var l = document.createElement("div");
                            for (t = 0; t < a.options.rows; t++) {
                                var c = document.createElement("div");
                                for (i = 0; i < a.options.slidesPerRow; i++) {
                                    var d = e * r + (t * a.options.slidesPerRow + i);
                                    o.get(d) && c.appendChild(o.get(d))
                                }
                                l.appendChild(c)
                            }
                            n.appendChild(l)
                        }
                        a.$slider.empty().append(n),
                        a.$slider.children().children().children().css({
                            width: 100 / a.options.slidesPerRow + "%",
                            display: "inline-block"
                        })
                    }
                }
                ,
                t.prototype.checkResponsive = function(t, i) {
                    var n, s, o, r = this, a = !1, l = r.$slider.width(), c = window.innerWidth || e(window).width();
                    if ("window" === r.respondTo ? o = c : "slider" === r.respondTo ? o = l : "min" === r.respondTo && (o = Math.min(c, l)),
                    r.options.responsive && r.options.responsive.length && null !== r.options.responsive) {
                        for (n in s = null,
                        r.breakpoints)
                            r.breakpoints.hasOwnProperty(n) && (!1 === r.originalSettings.mobileFirst ? o < r.breakpoints[n] && (s = r.breakpoints[n]) : o > r.breakpoints[n] && (s = r.breakpoints[n]));
                        null !== s ? null !== r.activeBreakpoint ? (s !== r.activeBreakpoint || i) && (r.activeBreakpoint = s,
                        "unslick" === r.breakpointSettings[s] ? r.unslick(s) : (r.options = e.extend({}, r.originalSettings, r.breakpointSettings[s]),
                        !0 === t && (r.currentSlide = r.options.initialSlide),
                        r.refresh(t)),
                        a = s) : (r.activeBreakpoint = s,
                        "unslick" === r.breakpointSettings[s] ? r.unslick(s) : (r.options = e.extend({}, r.originalSettings, r.breakpointSettings[s]),
                        !0 === t && (r.currentSlide = r.options.initialSlide),
                        r.refresh(t)),
                        a = s) : null !== r.activeBreakpoint && (r.activeBreakpoint = null,
                        r.options = r.originalSettings,
                        !0 === t && (r.currentSlide = r.options.initialSlide),
                        r.refresh(t),
                        a = s),
                        t || !1 === a || r.$slider.trigger("breakpoint", [r, a])
                    }
                }
                ,
                t.prototype.changeSlide = function(t, i) {
                    var n, s, o = this, r = e(t.currentTarget);
                    switch (r.is("a") && t.preventDefault(),
                    r.is("li") || (r = r.closest("li")),
                    n = o.slideCount % o.options.slidesToScroll != 0 ? 0 : (o.slideCount - o.currentSlide) % o.options.slidesToScroll,
                    t.data.message) {
                    case "previous":
                        s = 0 === n ? o.options.slidesToScroll : o.options.slidesToShow - n,
                        o.slideCount > o.options.slidesToShow && o.slideHandler(o.currentSlide - s, !1, i);
                        break;
                    case "next":
                        s = 0 === n ? o.options.slidesToScroll : n,
                        o.slideCount > o.options.slidesToShow && o.slideHandler(o.currentSlide + s, !1, i);
                        break;
                    case "index":
                        var a = 0 === t.data.index ? 0 : t.data.index || r.index() * o.options.slidesToScroll;
                        o.slideHandler(o.checkNavigable(a), !1, i),
                        r.children().trigger("focus");
                        break;
                    default:
                        return
                    }
                }
                ,
                t.prototype.checkNavigable = function(e) {
                    var t, i;
                    if (i = 0,
                    e > (t = this.getNavigableIndexes())[t.length - 1])
                        e = t[t.length - 1];
                    else
                        for (var n in t) {
                            if (e < t[n]) {
                                e = i;
                                break
                            }
                            i = t[n]
                        }
                    return e
                }
                ,
                t.prototype.cleanUpEvents = function() {
                    var t = this;
                    t.options.dots && null !== t.$dots && (e("li", t.$dots).off("click.slick", t.changeSlide).off("mouseenter.slick", e.proxy(t.interrupt, t, !0)).off("mouseleave.slick", e.proxy(t.interrupt, t, !1)),
                    !0 === t.options.accessibility && t.$dots.off("keydown.slick", t.keyHandler)),
                    t.$slider.off("focus.slick blur.slick"),
                    !0 === t.options.arrows && t.slideCount > t.options.slidesToShow && (t.$prevArrow && t.$prevArrow.off("click.slick", t.changeSlide),
                    t.$nextArrow && t.$nextArrow.off("click.slick", t.changeSlide),
                    !0 === t.options.accessibility && (t.$prevArrow && t.$prevArrow.off("keydown.slick", t.keyHandler),
                    t.$nextArrow && t.$nextArrow.off("keydown.slick", t.keyHandler))),
                    t.$list.off("touchstart.slick mousedown.slick", t.swipeHandler),
                    t.$list.off("touchmove.slick mousemove.slick", t.swipeHandler),
                    t.$list.off("touchend.slick mouseup.slick", t.swipeHandler),
                    t.$list.off("touchcancel.slick mouseleave.slick", t.swipeHandler),
                    t.$list.off("click.slick", t.clickHandler),
                    e(document).off(t.visibilityChange, t.visibility),
                    t.cleanUpSlideEvents(),
                    !0 === t.options.accessibility && t.$list.off("keydown.slick", t.keyHandler),
                    !0 === t.options.focusOnSelect && e(t.$slideTrack).children().off("click.slick", t.selectHandler),
                    e(window).off("orientationchange.slick.slick-" + t.instanceUid, t.orientationChange),
                    e(window).off("resize.slick.slick-" + t.instanceUid, t.resize),
                    e("[draggable!=true]", t.$slideTrack).off("dragstart", t.preventDefault),
                    e(window).off("load.slick.slick-" + t.instanceUid, t.setPosition)
                }
                ,
                t.prototype.cleanUpSlideEvents = function() {
                    var t = this;
                    t.$list.off("mouseenter.slick", e.proxy(t.interrupt, t, !0)),
                    t.$list.off("mouseleave.slick", e.proxy(t.interrupt, t, !1))
                }
                ,
                t.prototype.cleanUpRows = function() {
                    var e, t = this;
                    t.options.rows > 0 && ((e = t.$slides.children().children()).removeAttr("style"),
                    t.$slider.empty().append(e))
                }
                ,
                t.prototype.clickHandler = function(e) {
                    !1 === this.shouldClick && (e.stopImmediatePropagation(),
                    e.stopPropagation(),
                    e.preventDefault())
                }
                ,
                t.prototype.destroy = function(t) {
                    var i = this;
                    i.autoPlayClear(),
                    i.touchObject = {},
                    i.cleanUpEvents(),
                    e(".slick-cloned", i.$slider).detach(),
                    i.$dots && i.$dots.remove(),
                    i.$prevArrow && i.$prevArrow.length && (i.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""),
                    i.htmlExpr.test(i.options.prevArrow) && i.$prevArrow.remove()),
                    i.$nextArrow && i.$nextArrow.length && (i.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""),
                    i.htmlExpr.test(i.options.nextArrow) && i.$nextArrow.remove()),
                    i.$slides && (i.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each((function() {
                        e(this).attr("style", e(this).data("originalStyling"))
                    }
                    )),
                    i.$slideTrack.children(this.options.slide).detach(),
                    i.$slideTrack.detach(),
                    i.$list.detach(),
                    i.$slider.append(i.$slides)),
                    i.cleanUpRows(),
                    i.$slider.removeClass("slick-slider"),
                    i.$slider.removeClass("slick-initialized"),
                    i.$slider.removeClass("slick-dotted"),
                    i.unslicked = !0,
                    t || i.$slider.trigger("destroy", [i])
                }
                ,
                t.prototype.disableTransition = function(e) {
                    var t = this
                      , i = {};
                    i[t.transitionType] = "",
                    !1 === t.options.fade ? t.$slideTrack.css(i) : t.$slides.eq(e).css(i)
                }
                ,
                t.prototype.fadeSlide = function(e, t) {
                    var i = this;
                    !1 === i.cssTransitions ? (i.$slides.eq(e).css({
                        zIndex: i.options.zIndex
                    }),
                    i.$slides.eq(e).animate({
                        opacity: 1
                    }, i.options.speed, i.options.easing, t)) : (i.applyTransition(e),
                    i.$slides.eq(e).css({
                        opacity: 1,
                        zIndex: i.options.zIndex
                    }),
                    t && setTimeout((function() {
                        i.disableTransition(e),
                        t.call()
                    }
                    ), i.options.speed))
                }
                ,
                t.prototype.fadeSlideOut = function(e) {
                    var t = this;
                    !1 === t.cssTransitions ? t.$slides.eq(e).animate({
                        opacity: 0,
                        zIndex: t.options.zIndex - 2
                    }, t.options.speed, t.options.easing) : (t.applyTransition(e),
                    t.$slides.eq(e).css({
                        opacity: 0,
                        zIndex: t.options.zIndex - 2
                    }))
                }
                ,
                t.prototype.filterSlides = t.prototype.slickFilter = function(e) {
                    var t = this;
                    null !== e && (t.$slidesCache = t.$slides,
                    t.unload(),
                    t.$slideTrack.children(this.options.slide).detach(),
                    t.$slidesCache.filter(e).appendTo(t.$slideTrack),
                    t.reinit())
                }
                ,
                t.prototype.focusHandler = function() {
                    var t = this;
                    t.$slider.off("focus.slick blur.slick").on("focus.slick blur.slick", "*", (function(i) {
                        i.stopImmediatePropagation();
                        var n = e(this);
                        setTimeout((function() {
                            t.options.pauseOnFocus && (t.focussed = n.is(":focus"),
                            t.autoPlay())
                        }
                        ), 0)
                    }
                    ))
                }
                ,
                t.prototype.getCurrent = t.prototype.slickCurrentSlide = function() {
                    return this.currentSlide
                }
                ,
                t.prototype.getDotCount = function() {
                    var e = this
                      , t = 0
                      , i = 0
                      , n = 0;
                    if (!0 === e.options.infinite)
                        if (e.slideCount <= e.options.slidesToShow)
                            ++n;
                        else
                            for (; t < e.slideCount; )
                                ++n,
                                t = i + e.options.slidesToScroll,
                                i += e.options.slidesToScroll <= e.options.slidesToShow ? e.options.slidesToScroll : e.options.slidesToShow;
                    else if (!0 === e.options.centerMode)
                        n = e.slideCount;
                    else if (e.options.asNavFor)
                        for (; t < e.slideCount; )
                            ++n,
                            t = i + e.options.slidesToScroll,
                            i += e.options.slidesToScroll <= e.options.slidesToShow ? e.options.slidesToScroll : e.options.slidesToShow;
                    else
                        n = 1 + Math.ceil((e.slideCount - e.options.slidesToShow) / e.options.slidesToScroll);
                    return n - 1
                }
                ,
                t.prototype.getLeft = function(e) {
                    var t, i, n, s, o = this, r = 0;
                    return o.slideOffset = 0,
                    i = o.$slides.first().outerHeight(!0),
                    !0 === o.options.infinite ? (o.slideCount > o.options.slidesToShow && (o.slideOffset = o.slideWidth * o.options.slidesToShow * -1,
                    s = -1,
                    !0 === o.options.vertical && !0 === o.options.centerMode && (2 === o.options.slidesToShow ? s = -1.5 : 1 === o.options.slidesToShow && (s = -2)),
                    r = i * o.options.slidesToShow * s),
                    o.slideCount % o.options.slidesToScroll != 0 && e + o.options.slidesToScroll > o.slideCount && o.slideCount > o.options.slidesToShow && (e > o.slideCount ? (o.slideOffset = (o.options.slidesToShow - (e - o.slideCount)) * o.slideWidth * -1,
                    r = (o.options.slidesToShow - (e - o.slideCount)) * i * -1) : (o.slideOffset = o.slideCount % o.options.slidesToScroll * o.slideWidth * -1,
                    r = o.slideCount % o.options.slidesToScroll * i * -1))) : e + o.options.slidesToShow > o.slideCount && (o.slideOffset = (e + o.options.slidesToShow - o.slideCount) * o.slideWidth,
                    r = (e + o.options.slidesToShow - o.slideCount) * i),
                    o.slideCount <= o.options.slidesToShow && (o.slideOffset = 0,
                    r = 0),
                    !0 === o.options.centerMode && o.slideCount <= o.options.slidesToShow ? o.slideOffset = o.slideWidth * Math.floor(o.options.slidesToShow) / 2 - o.slideWidth * o.slideCount / 2 : !0 === o.options.centerMode && !0 === o.options.infinite ? o.slideOffset += o.slideWidth * Math.floor(o.options.slidesToShow / 2) - o.slideWidth : !0 === o.options.centerMode && (o.slideOffset = 0,
                    o.slideOffset += o.slideWidth * Math.floor(o.options.slidesToShow / 2)),
                    t = !1 === o.options.vertical ? e * o.slideWidth * -1 + o.slideOffset : e * i * -1 + r,
                    !0 === o.options.variableWidth && (n = o.slideCount <= o.options.slidesToShow || !1 === o.options.infinite ? o.$slideTrack.children(".slick-slide").eq(e) : o.$slideTrack.children(".slick-slide").eq(e + o.options.slidesToShow),
                    t = !0 === o.options.rtl ? n[0] ? -1 * (o.$slideTrack.width() - n[0].offsetLeft - n.width()) : 0 : n[0] ? -1 * n[0].offsetLeft : 0,
                    !0 === o.options.centerMode && (n = o.slideCount <= o.options.slidesToShow || !1 === o.options.infinite ? o.$slideTrack.children(".slick-slide").eq(e) : o.$slideTrack.children(".slick-slide").eq(e + o.options.slidesToShow + 1),
                    t = !0 === o.options.rtl ? n[0] ? -1 * (o.$slideTrack.width() - n[0].offsetLeft - n.width()) : 0 : n[0] ? -1 * n[0].offsetLeft : 0,
                    t += (o.$list.width() - n.outerWidth()) / 2)),
                    t
                }
                ,
                t.prototype.getOption = t.prototype.slickGetOption = function(e) {
                    return this.options[e]
                }
                ,
                t.prototype.getNavigableIndexes = function() {
                    var e, t = this, i = 0, n = 0, s = [];
                    for (!1 === t.options.infinite ? e = t.slideCount : (i = -1 * t.options.slidesToScroll,
                    n = -1 * t.options.slidesToScroll,
                    e = 2 * t.slideCount); i < e; )
                        s.push(i),
                        i = n + t.options.slidesToScroll,
                        n += t.options.slidesToScroll <= t.options.slidesToShow ? t.options.slidesToScroll : t.options.slidesToShow;
                    return s
                }
                ,
                t.prototype.getSlick = function() {
                    return this
                }
                ,
                t.prototype.getSlideCount = function() {
                    var t, i, n = this;
                    return i = !0 === n.options.centerMode ? n.slideWidth * Math.floor(n.options.slidesToShow / 2) : 0,
                    !0 === n.options.swipeToSlide ? (n.$slideTrack.find(".slick-slide").each((function(s, o) {
                        if (o.offsetLeft - i + e(o).outerWidth() / 2 > -1 * n.swipeLeft)
                            return t = o,
                            !1
                    }
                    )),
                    Math.abs(e(t).attr("data-slick-index") - n.currentSlide) || 1) : n.options.slidesToScroll
                }
                ,
                t.prototype.goTo = t.prototype.slickGoTo = function(e, t) {
                    this.changeSlide({
                        data: {
                            message: "index",
                            index: parseInt(e)
                        }
                    }, t)
                }
                ,
                t.prototype.init = function(t) {
                    var i = this;
                    e(i.$slider).hasClass("slick-initialized") || (e(i.$slider).addClass("slick-initialized"),
                    i.buildRows(),
                    i.buildOut(),
                    i.setProps(),
                    i.startLoad(),
                    i.loadSlider(),
                    i.initializeEvents(),
                    i.updateArrows(),
                    i.updateDots(),
                    i.checkResponsive(!0),
                    i.focusHandler()),
                    t && i.$slider.trigger("init", [i]),
                    !0 === i.options.accessibility && i.initADA(),
                    i.options.autoplay && (i.paused = !1,
                    i.autoPlay())
                }
                ,
                t.prototype.initADA = function() {
                    var t = this
                      , i = Math.ceil(t.slideCount / t.options.slidesToShow)
                      , n = t.getNavigableIndexes().filter((function(e) {
                        return e >= 0 && e < t.slideCount
                    }
                    ));
                    t.$slides.add(t.$slideTrack.find(".slick-cloned")).attr({
                        "aria-hidden": "true",
                        tabindex: "-1"
                    }).find("a, input, button, select").attr({
                        tabindex: "-1"
                    }),
                    null !== t.$dots && (t.$slides.not(t.$slideTrack.find(".slick-cloned")).each((function(i) {
                        var s = n.indexOf(i);
                        if (e(this).attr({
                            role: "tabpanel",
                            id: "slick-slide" + t.instanceUid + i,
                            tabindex: -1
                        }),
                        -1 !== s) {
                            var o = "slick-slide-control" + t.instanceUid + s;
                            e("#" + o).length && e(this).attr({
                                "aria-describedby": o
                            })
                        }
                    }
                    )),
                    t.$dots.attr("role", "tablist").find("li").each((function(s) {
                        var o = n[s];
                        e(this).attr({
                            role: "presentation"
                        }),
                        e(this).find("button").first().attr({
                            role: "tab",
                            id: "slick-slide-control" + t.instanceUid + s,
                            "aria-controls": "slick-slide" + t.instanceUid + o,
                            "aria-label": s + 1 + " of " + i,
                            "aria-selected": null,
                            tabindex: "-1"
                        })
                    }
                    )).eq(t.currentSlide).find("button").attr({
                        "aria-selected": "true",
                        tabindex: "0"
                    }).end());
                    for (var s = t.currentSlide, o = s + t.options.slidesToShow; s < o; s++)
                        t.options.focusOnChange ? t.$slides.eq(s).attr({
                            tabindex: "0"
                        }) : t.$slides.eq(s).removeAttr("tabindex");
                    t.activateADA()
                }
                ,
                t.prototype.initArrowEvents = function() {
                    var e = this;
                    !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && (e.$prevArrow.off("click.slick").on("click.slick", {
                        message: "previous"
                    }, e.changeSlide),
                    e.$nextArrow.off("click.slick").on("click.slick", {
                        message: "next"
                    }, e.changeSlide),
                    !0 === e.options.accessibility && (e.$prevArrow.on("keydown.slick", e.keyHandler),
                    e.$nextArrow.on("keydown.slick", e.keyHandler)))
                }
                ,
                t.prototype.initDotEvents = function() {
                    var t = this;
                    !0 === t.options.dots && t.slideCount > t.options.slidesToShow && (e("li", t.$dots).on("click.slick", {
                        message: "index"
                    }, t.changeSlide),
                    !0 === t.options.accessibility && t.$dots.on("keydown.slick", t.keyHandler)),
                    !0 === t.options.dots && !0 === t.options.pauseOnDotsHover && t.slideCount > t.options.slidesToShow && e("li", t.$dots).on("mouseenter.slick", e.proxy(t.interrupt, t, !0)).on("mouseleave.slick", e.proxy(t.interrupt, t, !1))
                }
                ,
                t.prototype.initSlideEvents = function() {
                    var t = this;
                    t.options.pauseOnHover && (t.$list.on("mouseenter.slick", e.proxy(t.interrupt, t, !0)),
                    t.$list.on("mouseleave.slick", e.proxy(t.interrupt, t, !1)))
                }
                ,
                t.prototype.initializeEvents = function() {
                    var t = this;
                    t.initArrowEvents(),
                    t.initDotEvents(),
                    t.initSlideEvents(),
                    t.$list.on("touchstart.slick mousedown.slick", {
                        action: "start"
                    }, t.swipeHandler),
                    t.$list.on("touchmove.slick mousemove.slick", {
                        action: "move"
                    }, t.swipeHandler),
                    t.$list.on("touchend.slick mouseup.slick", {
                        action: "end"
                    }, t.swipeHandler),
                    t.$list.on("touchcancel.slick mouseleave.slick", {
                        action: "end"
                    }, t.swipeHandler),
                    t.$list.on("click.slick", t.clickHandler),
                    e(document).on(t.visibilityChange, e.proxy(t.visibility, t)),
                    !0 === t.options.accessibility && t.$list.on("keydown.slick", t.keyHandler),
                    !0 === t.options.focusOnSelect && e(t.$slideTrack).children().on("click.slick", t.selectHandler),
                    e(window).on("orientationchange.slick.slick-" + t.instanceUid, e.proxy(t.orientationChange, t)),
                    e(window).on("resize.slick.slick-" + t.instanceUid, e.proxy(t.resize, t)),
                    e("[draggable!=true]", t.$slideTrack).on("dragstart", t.preventDefault),
                    e(window).on("load.slick.slick-" + t.instanceUid, t.setPosition),
                    e(t.setPosition)
                }
                ,
                t.prototype.initUI = function() {
                    var e = this;
                    !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && (e.$prevArrow.show(),
                    e.$nextArrow.show()),
                    !0 === e.options.dots && e.slideCount > e.options.slidesToShow && e.$dots.show()
                }
                ,
                t.prototype.keyHandler = function(e) {
                    var t = this;
                    e.target.tagName.match("TEXTAREA|INPUT|SELECT") || (37 === e.keyCode && !0 === t.options.accessibility ? t.changeSlide({
                        data: {
                            message: !0 === t.options.rtl ? "next" : "previous"
                        }
                    }) : 39 === e.keyCode && !0 === t.options.accessibility && t.changeSlide({
                        data: {
                            message: !0 === t.options.rtl ? "previous" : "next"
                        }
                    }))
                }
                ,
                t.prototype.lazyLoad = function() {
                    var t, i, n, s = this;
                    function o(t) {
                        e("img[data-lazy]", t).each((function() {
                            var t = e(this)
                              , i = e(this).attr("data-lazy")
                              , n = e(this).attr("data-srcset")
                              , o = e(this).attr("data-sizes") || s.$slider.attr("data-sizes")
                              , r = document.createElement("img");
                            r.onload = function() {
                                t.animate({
                                    opacity: 0
                                }, 100, (function() {
                                    n && (t.attr("srcset", n),
                                    o && t.attr("sizes", o)),
                                    t.attr("src", i).animate({
                                        opacity: 1
                                    }, 200, (function() {
                                        t.removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading")
                                    }
                                    )),
                                    s.$slider.trigger("lazyLoaded", [s, t, i])
                                }
                                ))
                            }
                            ,
                            r.onerror = function() {
                                t.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"),
                                s.$slider.trigger("lazyLoadError", [s, t, i])
                            }
                            ,
                            r.src = i
                        }
                        ))
                    }
                    if (!0 === s.options.centerMode ? !0 === s.options.infinite ? n = (i = s.currentSlide + (s.options.slidesToShow / 2 + 1)) + s.options.slidesToShow + 2 : (i = Math.max(0, s.currentSlide - (s.options.slidesToShow / 2 + 1)),
                    n = s.options.slidesToShow / 2 + 1 + 2 + s.currentSlide) : (i = s.options.infinite ? s.options.slidesToShow + s.currentSlide : s.currentSlide,
                    n = Math.ceil(i + s.options.slidesToShow),
                    !0 === s.options.fade && (i > 0 && i--,
                    n <= s.slideCount && n++)),
                    t = s.$slider.find(".slick-slide").slice(i, n),
                    "anticipated" === s.options.lazyLoad)
                        for (var r = i - 1, a = n, l = s.$slider.find(".slick-slide"), c = 0; c < s.options.slidesToScroll; c++)
                            r < 0 && (r = s.slideCount - 1),
                            t = (t = t.add(l.eq(r))).add(l.eq(a)),
                            r--,
                            a++;
                    o(t),
                    s.slideCount <= s.options.slidesToShow ? o(s.$slider.find(".slick-slide")) : s.currentSlide >= s.slideCount - s.options.slidesToShow ? o(s.$slider.find(".slick-cloned").slice(0, s.options.slidesToShow)) : 0 === s.currentSlide && o(s.$slider.find(".slick-cloned").slice(-1 * s.options.slidesToShow))
                }
                ,
                t.prototype.loadSlider = function() {
                    var e = this;
                    e.setPosition(),
                    e.$slideTrack.css({
                        opacity: 1
                    }),
                    e.$slider.removeClass("slick-loading"),
                    e.initUI(),
                    "progressive" === e.options.lazyLoad && e.progressiveLazyLoad()
                }
                ,
                t.prototype.next = t.prototype.slickNext = function() {
                    this.changeSlide({
                        data: {
                            message: "next"
                        }
                    })
                }
                ,
                t.prototype.orientationChange = function() {
                    this.checkResponsive(),
                    this.setPosition()
                }
                ,
                t.prototype.pause = t.prototype.slickPause = function() {
                    this.autoPlayClear(),
                    this.paused = !0
                }
                ,
                t.prototype.play = t.prototype.slickPlay = function() {
                    var e = this;
                    e.autoPlay(),
                    e.options.autoplay = !0,
                    e.paused = !1,
                    e.focussed = !1,
                    e.interrupted = !1
                }
                ,
                t.prototype.postSlide = function(t) {
                    var i = this;
                    i.unslicked || (i.$slider.trigger("afterChange", [i, t]),
                    i.animating = !1,
                    i.slideCount > i.options.slidesToShow && i.setPosition(),
                    i.swipeLeft = null,
                    i.options.autoplay && i.autoPlay(),
                    !0 === i.options.accessibility && (i.initADA(),
                    i.options.focusOnChange && e(i.$slides.get(i.currentSlide)).attr("tabindex", 0).focus()))
                }
                ,
                t.prototype.prev = t.prototype.slickPrev = function() {
                    this.changeSlide({
                        data: {
                            message: "previous"
                        }
                    })
                }
                ,
                t.prototype.preventDefault = function(e) {
                    e.preventDefault()
                }
                ,
                t.prototype.progressiveLazyLoad = function(t) {
                    t = t || 1;
                    var i, n, s, o, r, a = this, l = e("img[data-lazy]", a.$slider);
                    l.length ? (i = l.first(),
                    n = i.attr("data-lazy"),
                    s = i.attr("data-srcset"),
                    o = i.attr("data-sizes") || a.$slider.attr("data-sizes"),
                    (r = document.createElement("img")).onload = function() {
                        s && (i.attr("srcset", s),
                        o && i.attr("sizes", o)),
                        i.attr("src", n).removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading"),
                        !0 === a.options.adaptiveHeight && a.setPosition(),
                        a.$slider.trigger("lazyLoaded", [a, i, n]),
                        a.progressiveLazyLoad()
                    }
                    ,
                    r.onerror = function() {
                        t < 3 ? setTimeout((function() {
                            a.progressiveLazyLoad(t + 1)
                        }
                        ), 500) : (i.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"),
                        a.$slider.trigger("lazyLoadError", [a, i, n]),
                        a.progressiveLazyLoad())
                    }
                    ,
                    r.src = n) : a.$slider.trigger("allImagesLoaded", [a])
                }
                ,
                t.prototype.refresh = function(t) {
                    var i, n, s = this;
                    n = s.slideCount - s.options.slidesToShow,
                    !s.options.infinite && s.currentSlide > n && (s.currentSlide = n),
                    s.slideCount <= s.options.slidesToShow && (s.currentSlide = 0),
                    i = s.currentSlide,
                    s.destroy(!0),
                    e.extend(s, s.initials, {
                        currentSlide: i
                    }),
                    s.init(),
                    t || s.changeSlide({
                        data: {
                            message: "index",
                            index: i
                        }
                    }, !1)
                }
                ,
                t.prototype.registerBreakpoints = function() {
                    var t, i, n, s = this, o = s.options.responsive || null;
                    if ("array" === e.type(o) && o.length) {
                        for (t in s.respondTo = s.options.respondTo || "window",
                        o)
                            if (n = s.breakpoints.length - 1,
                            o.hasOwnProperty(t)) {
                                for (i = o[t].breakpoint; n >= 0; )
                                    s.breakpoints[n] && s.breakpoints[n] === i && s.breakpoints.splice(n, 1),
                                    n--;
                                s.breakpoints.push(i),
                                s.breakpointSettings[i] = o[t].settings
                            }
                        s.breakpoints.sort((function(e, t) {
                            return s.options.mobileFirst ? e - t : t - e
                        }
                        ))
                    }
                }
                ,
                t.prototype.reinit = function() {
                    var t = this;
                    t.$slides = t.$slideTrack.children(t.options.slide).addClass("slick-slide"),
                    t.slideCount = t.$slides.length,
                    t.currentSlide >= t.slideCount && 0 !== t.currentSlide && (t.currentSlide = t.currentSlide - t.options.slidesToScroll),
                    t.slideCount <= t.options.slidesToShow && (t.currentSlide = 0),
                    t.registerBreakpoints(),
                    t.setProps(),
                    t.setupInfinite(),
                    t.buildArrows(),
                    t.updateArrows(),
                    t.initArrowEvents(),
                    t.buildDots(),
                    t.updateDots(),
                    t.initDotEvents(),
                    t.cleanUpSlideEvents(),
                    t.initSlideEvents(),
                    t.checkResponsive(!1, !0),
                    !0 === t.options.focusOnSelect && e(t.$slideTrack).children().on("click.slick", t.selectHandler),
                    t.setSlideClasses("number" == typeof t.currentSlide ? t.currentSlide : 0),
                    t.setPosition(),
                    t.focusHandler(),
                    t.paused = !t.options.autoplay,
                    t.autoPlay(),
                    t.$slider.trigger("reInit", [t])
                }
                ,
                t.prototype.resize = function() {
                    var t = this;
                    e(window).width() !== t.windowWidth && (clearTimeout(t.windowDelay),
                    t.windowDelay = window.setTimeout((function() {
                        t.windowWidth = e(window).width(),
                        t.checkResponsive(),
                        t.unslicked || t.setPosition()
                    }
                    ), 50))
                }
                ,
                t.prototype.removeSlide = t.prototype.slickRemove = function(e, t, i) {
                    var n = this;
                    if (e = "boolean" == typeof e ? !0 === (t = e) ? 0 : n.slideCount - 1 : !0 === t ? --e : e,
                    n.slideCount < 1 || e < 0 || e > n.slideCount - 1)
                        return !1;
                    n.unload(),
                    !0 === i ? n.$slideTrack.children().remove() : n.$slideTrack.children(this.options.slide).eq(e).remove(),
                    n.$slides = n.$slideTrack.children(this.options.slide),
                    n.$slideTrack.children(this.options.slide).detach(),
                    n.$slideTrack.append(n.$slides),
                    n.$slidesCache = n.$slides,
                    n.reinit()
                }
                ,
                t.prototype.setCSS = function(e) {
                    var t, i, n = this, s = {};
                    !0 === n.options.rtl && (e = -e),
                    t = "left" == n.positionProp ? Math.ceil(e) + "px" : "0px",
                    i = "top" == n.positionProp ? Math.ceil(e) + "px" : "0px",
                    s[n.positionProp] = e,
                    !1 === n.transformsEnabled ? n.$slideTrack.css(s) : (s = {},
                    !1 === n.cssTransitions ? (s[n.animType] = "translate(" + t + ", " + i + ")",
                    n.$slideTrack.css(s)) : (s[n.animType] = "translate3d(" + t + ", " + i + ", 0px)",
                    n.$slideTrack.css(s)))
                }
                ,
                t.prototype.setDimensions = function() {
                    var e = this;
                    !1 === e.options.vertical ? !0 === e.options.centerMode && e.$list.css({
                        padding: "0px " + e.options.centerPadding
                    }) : (e.$list.height(e.$slides.first().outerHeight(!0) * e.options.slidesToShow),
                    !0 === e.options.centerMode && e.$list.css({
                        padding: e.options.centerPadding + " 0px"
                    })),
                    e.listWidth = e.$list.width(),
                    e.listHeight = e.$list.height(),
                    !1 === e.options.vertical && !1 === e.options.variableWidth ? (e.slideWidth = Math.ceil(e.listWidth / e.options.slidesToShow),
                    e.$slideTrack.width(Math.ceil(e.slideWidth * e.$slideTrack.children(".slick-slide").length))) : !0 === e.options.variableWidth ? e.$slideTrack.width(5e3 * e.slideCount) : (e.slideWidth = Math.ceil(e.listWidth),
                    e.$slideTrack.height(Math.ceil(e.$slides.first().outerHeight(!0) * e.$slideTrack.children(".slick-slide").length)));
                    var t = e.$slides.first().outerWidth(!0) - e.$slides.first().width();
                    !1 === e.options.variableWidth && e.$slideTrack.children(".slick-slide").width(e.slideWidth - t)
                }
                ,
                t.prototype.setFade = function() {
                    var t, i = this;
                    i.$slides.each((function(n, s) {
                        t = i.slideWidth * n * -1,
                        !0 === i.options.rtl ? e(s).css({
                            position: "relative",
                            right: t,
                            top: 0,
                            zIndex: i.options.zIndex - 2,
                            opacity: 0
                        }) : e(s).css({
                            position: "relative",
                            left: t,
                            top: 0,
                            zIndex: i.options.zIndex - 2,
                            opacity: 0
                        })
                    }
                    )),
                    i.$slides.eq(i.currentSlide).css({
                        zIndex: i.options.zIndex - 1,
                        opacity: 1
                    })
                }
                ,
                t.prototype.setHeight = function() {
                    var e = this;
                    if (1 === e.options.slidesToShow && !0 === e.options.adaptiveHeight && !1 === e.options.vertical) {
                        var t = e.$slides.eq(e.currentSlide).outerHeight(!0);
                        e.$list.css("height", t)
                    }
                }
                ,
                t.prototype.setOption = t.prototype.slickSetOption = function() {
                    var t, i, n, s, o, r = this, a = !1;
                    if ("object" === e.type(arguments[0]) ? (n = arguments[0],
                    a = arguments[1],
                    o = "multiple") : "string" === e.type(arguments[0]) && (n = arguments[0],
                    s = arguments[1],
                    a = arguments[2],
                    "responsive" === arguments[0] && "array" === e.type(arguments[1]) ? o = "responsive" : void 0 !== arguments[1] && (o = "single")),
                    "single" === o)
                        r.options[n] = s;
                    else if ("multiple" === o)
                        e.each(n, (function(e, t) {
                            r.options[e] = t
                        }
                        ));
                    else if ("responsive" === o)
                        for (i in s)
                            if ("array" !== e.type(r.options.responsive))
                                r.options.responsive = [s[i]];
                            else {
                                for (t = r.options.responsive.length - 1; t >= 0; )
                                    r.options.responsive[t].breakpoint === s[i].breakpoint && r.options.responsive.splice(t, 1),
                                    t--;
                                r.options.responsive.push(s[i])
                            }
                    a && (r.unload(),
                    r.reinit())
                }
                ,
                t.prototype.setPosition = function() {
                    var e = this;
                    e.setDimensions(),
                    e.setHeight(),
                    !1 === e.options.fade ? e.setCSS(e.getLeft(e.currentSlide)) : e.setFade(),
                    e.$slider.trigger("setPosition", [e])
                }
                ,
                t.prototype.setProps = function() {
                    var e = this
                      , t = document.body.style;
                    e.positionProp = !0 === e.options.vertical ? "top" : "left",
                    "top" === e.positionProp ? e.$slider.addClass("slick-vertical") : e.$slider.removeClass("slick-vertical"),
                    void 0 === t.WebkitTransition && void 0 === t.MozTransition && void 0 === t.msTransition || !0 === e.options.useCSS && (e.cssTransitions = !0),
                    e.options.fade && ("number" == typeof e.options.zIndex ? e.options.zIndex < 3 && (e.options.zIndex = 3) : e.options.zIndex = e.defaults.zIndex),
                    void 0 !== t.OTransform && (e.animType = "OTransform",
                    e.transformType = "-o-transform",
                    e.transitionType = "OTransition",
                    void 0 === t.perspectiveProperty && void 0 === t.webkitPerspective && (e.animType = !1)),
                    void 0 !== t.MozTransform && (e.animType = "MozTransform",
                    e.transformType = "-moz-transform",
                    e.transitionType = "MozTransition",
                    void 0 === t.perspectiveProperty && void 0 === t.MozPerspective && (e.animType = !1)),
                    void 0 !== t.webkitTransform && (e.animType = "webkitTransform",
                    e.transformType = "-webkit-transform",
                    e.transitionType = "webkitTransition",
                    void 0 === t.perspectiveProperty && void 0 === t.webkitPerspective && (e.animType = !1)),
                    void 0 !== t.msTransform && (e.animType = "msTransform",
                    e.transformType = "-ms-transform",
                    e.transitionType = "msTransition",
                    void 0 === t.msTransform && (e.animType = !1)),
                    void 0 !== t.transform && !1 !== e.animType && (e.animType = "transform",
                    e.transformType = "transform",
                    e.transitionType = "transition"),
                    e.transformsEnabled = e.options.useTransform && null !== e.animType && !1 !== e.animType
                }
                ,
                t.prototype.setSlideClasses = function(e) {
                    var t, i, n, s, o = this;
                    if (i = o.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden", "true"),
                    o.$slides.eq(e).addClass("slick-current"),
                    !0 === o.options.centerMode) {
                        var r = o.options.slidesToShow % 2 == 0 ? 1 : 0;
                        t = Math.floor(o.options.slidesToShow / 2),
                        !0 === o.options.infinite && (e >= t && e <= o.slideCount - 1 - t ? o.$slides.slice(e - t + r, e + t + 1).addClass("slick-active").attr("aria-hidden", "false") : (n = o.options.slidesToShow + e,
                        i.slice(n - t + 1 + r, n + t + 2).addClass("slick-active").attr("aria-hidden", "false")),
                        0 === e ? i.eq(i.length - 1 - o.options.slidesToShow).addClass("slick-center") : e === o.slideCount - 1 && i.eq(o.options.slidesToShow).addClass("slick-center")),
                        o.$slides.eq(e).addClass("slick-center")
                    } else
                        e >= 0 && e <= o.slideCount - o.options.slidesToShow ? o.$slides.slice(e, e + o.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false") : i.length <= o.options.slidesToShow ? i.addClass("slick-active").attr("aria-hidden", "false") : (s = o.slideCount % o.options.slidesToShow,
                        n = !0 === o.options.infinite ? o.options.slidesToShow + e : e,
                        o.options.slidesToShow == o.options.slidesToScroll && o.slideCount - e < o.options.slidesToShow ? i.slice(n - (o.options.slidesToShow - s), n + s).addClass("slick-active").attr("aria-hidden", "false") : i.slice(n, n + o.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false"));
                    "ondemand" !== o.options.lazyLoad && "anticipated" !== o.options.lazyLoad || o.lazyLoad()
                }
                ,
                t.prototype.setupInfinite = function() {
                    var t, i, n, s = this;
                    if (!0 === s.options.fade && (s.options.centerMode = !1),
                    !0 === s.options.infinite && !1 === s.options.fade && (i = null,
                    s.slideCount > s.options.slidesToShow)) {
                        for (n = !0 === s.options.centerMode ? s.options.slidesToShow + 1 : s.options.slidesToShow,
                        t = s.slideCount; t > s.slideCount - n; t -= 1)
                            i = t - 1,
                            e(s.$slides[i]).clone(!0).attr("id", "").attr("data-slick-index", i - s.slideCount).prependTo(s.$slideTrack).addClass("slick-cloned");
                        for (t = 0; t < n + s.slideCount; t += 1)
                            i = t,
                            e(s.$slides[i]).clone(!0).attr("id", "").attr("data-slick-index", i + s.slideCount).appendTo(s.$slideTrack).addClass("slick-cloned");
                        s.$slideTrack.find(".slick-cloned").find("[id]").each((function() {
                            e(this).attr("id", "")
                        }
                        ))
                    }
                }
                ,
                t.prototype.interrupt = function(e) {
                    e || this.autoPlay(),
                    this.interrupted = e
                }
                ,
                t.prototype.selectHandler = function(t) {
                    var i = this
                      , n = e(t.target).is(".slick-slide") ? e(t.target) : e(t.target).parents(".slick-slide")
                      , s = parseInt(n.attr("data-slick-index"));
                    s || (s = 0),
                    i.slideCount <= i.options.slidesToShow ? i.slideHandler(s, !1, !0) : i.slideHandler(s)
                }
                ,
                t.prototype.slideHandler = function(e, t, i) {
                    var n, s, o, r, a, l, c = this;
                    if (t = t || !1,
                    !(!0 === c.animating && !0 === c.options.waitForAnimate || !0 === c.options.fade && c.currentSlide === e))
                        if (!1 === t && c.asNavFor(e),
                        n = e,
                        a = c.getLeft(n),
                        r = c.getLeft(c.currentSlide),
                        c.currentLeft = null === c.swipeLeft ? r : c.swipeLeft,
                        !1 === c.options.infinite && !1 === c.options.centerMode && (e < 0 || e > c.getDotCount() * c.options.slidesToScroll))
                            !1 === c.options.fade && (n = c.currentSlide,
                            !0 !== i && c.slideCount > c.options.slidesToShow ? c.animateSlide(r, (function() {
                                c.postSlide(n)
                            }
                            )) : c.postSlide(n));
                        else if (!1 === c.options.infinite && !0 === c.options.centerMode && (e < 0 || e > c.slideCount - c.options.slidesToScroll))
                            !1 === c.options.fade && (n = c.currentSlide,
                            !0 !== i && c.slideCount > c.options.slidesToShow ? c.animateSlide(r, (function() {
                                c.postSlide(n)
                            }
                            )) : c.postSlide(n));
                        else {
                            if (c.options.autoplay && clearInterval(c.autoPlayTimer),
                            s = n < 0 ? c.slideCount % c.options.slidesToScroll != 0 ? c.slideCount - c.slideCount % c.options.slidesToScroll : c.slideCount + n : n >= c.slideCount ? c.slideCount % c.options.slidesToScroll != 0 ? 0 : n - c.slideCount : n,
                            c.animating = !0,
                            c.$slider.trigger("beforeChange", [c, c.currentSlide, s]),
                            o = c.currentSlide,
                            c.currentSlide = s,
                            c.setSlideClasses(c.currentSlide),
                            c.options.asNavFor && (l = (l = c.getNavTarget()).slick("getSlick")).slideCount <= l.options.slidesToShow && l.setSlideClasses(c.currentSlide),
                            c.updateDots(),
                            c.updateArrows(),
                            !0 === c.options.fade)
                                return !0 !== i ? (c.fadeSlideOut(o),
                                c.fadeSlide(s, (function() {
                                    c.postSlide(s)
                                }
                                ))) : c.postSlide(s),
                                void c.animateHeight();
                            !0 !== i && c.slideCount > c.options.slidesToShow ? c.animateSlide(a, (function() {
                                c.postSlide(s)
                            }
                            )) : c.postSlide(s)
                        }
                }
                ,
                t.prototype.startLoad = function() {
                    var e = this;
                    !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && (e.$prevArrow.hide(),
                    e.$nextArrow.hide()),
                    !0 === e.options.dots && e.slideCount > e.options.slidesToShow && e.$dots.hide(),
                    e.$slider.addClass("slick-loading")
                }
                ,
                t.prototype.swipeDirection = function() {
                    var e, t, i, n, s = this;
                    return e = s.touchObject.startX - s.touchObject.curX,
                    t = s.touchObject.startY - s.touchObject.curY,
                    i = Math.atan2(t, e),
                    (n = Math.round(180 * i / Math.PI)) < 0 && (n = 360 - Math.abs(n)),
                    n <= 45 && n >= 0 || n <= 360 && n >= 315 ? !1 === s.options.rtl ? "left" : "right" : n >= 135 && n <= 225 ? !1 === s.options.rtl ? "right" : "left" : !0 === s.options.verticalSwiping ? n >= 35 && n <= 135 ? "down" : "up" : "vertical"
                }
                ,
                t.prototype.swipeEnd = function(e) {
                    var t, i, n = this;
                    if (n.dragging = !1,
                    n.swiping = !1,
                    n.scrolling)
                        return n.scrolling = !1,
                        !1;
                    if (n.interrupted = !1,
                    n.shouldClick = !(n.touchObject.swipeLength > 10),
                    void 0 === n.touchObject.curX)
                        return !1;
                    if (!0 === n.touchObject.edgeHit && n.$slider.trigger("edge", [n, n.swipeDirection()]),
                    n.touchObject.swipeLength >= n.touchObject.minSwipe) {
                        switch (i = n.swipeDirection()) {
                        case "left":
                        case "down":
                            t = n.options.swipeToSlide ? n.checkNavigable(n.currentSlide + n.getSlideCount()) : n.currentSlide + n.getSlideCount(),
                            n.currentDirection = 0;
                            break;
                        case "right":
                        case "up":
                            t = n.options.swipeToSlide ? n.checkNavigable(n.currentSlide - n.getSlideCount()) : n.currentSlide - n.getSlideCount(),
                            n.currentDirection = 1
                        }
                        "vertical" != i && (n.slideHandler(t),
                        n.touchObject = {},
                        n.$slider.trigger("swipe", [n, i]))
                    } else
                        n.touchObject.startX !== n.touchObject.curX && (n.slideHandler(n.currentSlide),
                        n.touchObject = {})
                }
                ,
                t.prototype.swipeHandler = function(e) {
                    var t = this;
                    if (!(!1 === t.options.swipe || "ontouchend"in document && !1 === t.options.swipe || !1 === t.options.draggable && -1 !== e.type.indexOf("mouse")))
                        switch (t.touchObject.fingerCount = e.originalEvent && void 0 !== e.originalEvent.touches ? e.originalEvent.touches.length : 1,
                        t.touchObject.minSwipe = t.listWidth / t.options.touchThreshold,
                        !0 === t.options.verticalSwiping && (t.touchObject.minSwipe = t.listHeight / t.options.touchThreshold),
                        e.data.action) {
                        case "start":
                            t.swipeStart(e);
                            break;
                        case "move":
                            t.swipeMove(e);
                            break;
                        case "end":
                            t.swipeEnd(e)
                        }
                }
                ,
                t.prototype.swipeMove = function(e) {
                    var t, i, n, s, o, r, a = this;
                    return o = void 0 !== e.originalEvent ? e.originalEvent.touches : null,
                    !(!a.dragging || a.scrolling || o && 1 !== o.length) && (t = a.getLeft(a.currentSlide),
                    a.touchObject.curX = void 0 !== o ? o[0].pageX : e.clientX,
                    a.touchObject.curY = void 0 !== o ? o[0].pageY : e.clientY,
                    a.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(a.touchObject.curX - a.touchObject.startX, 2))),
                    r = Math.round(Math.sqrt(Math.pow(a.touchObject.curY - a.touchObject.startY, 2))),
                    !a.options.verticalSwiping && !a.swiping && r > 4 ? (a.scrolling = !0,
                    !1) : (!0 === a.options.verticalSwiping && (a.touchObject.swipeLength = r),
                    i = a.swipeDirection(),
                    void 0 !== e.originalEvent && a.touchObject.swipeLength > 4 && (a.swiping = !0,
                    e.preventDefault()),
                    s = (!1 === a.options.rtl ? 1 : -1) * (a.touchObject.curX > a.touchObject.startX ? 1 : -1),
                    !0 === a.options.verticalSwiping && (s = a.touchObject.curY > a.touchObject.startY ? 1 : -1),
                    n = a.touchObject.swipeLength,
                    a.touchObject.edgeHit = !1,
                    !1 === a.options.infinite && (0 === a.currentSlide && "right" === i || a.currentSlide >= a.getDotCount() && "left" === i) && (n = a.touchObject.swipeLength * a.options.edgeFriction,
                    a.touchObject.edgeHit = !0),
                    !1 === a.options.vertical ? a.swipeLeft = t + n * s : a.swipeLeft = t + n * (a.$list.height() / a.listWidth) * s,
                    !0 === a.options.verticalSwiping && (a.swipeLeft = t + n * s),
                    !0 !== a.options.fade && !1 !== a.options.touchMove && (!0 === a.animating ? (a.swipeLeft = null,
                    !1) : void a.setCSS(a.swipeLeft))))
                }
                ,
                t.prototype.swipeStart = function(e) {
                    var t, i = this;
                    if (i.interrupted = !0,
                    1 !== i.touchObject.fingerCount || i.slideCount <= i.options.slidesToShow)
                        return i.touchObject = {},
                        !1;
                    void 0 !== e.originalEvent && void 0 !== e.originalEvent.touches && (t = e.originalEvent.touches[0]),
                    i.touchObject.startX = i.touchObject.curX = void 0 !== t ? t.pageX : e.clientX,
                    i.touchObject.startY = i.touchObject.curY = void 0 !== t ? t.pageY : e.clientY,
                    i.dragging = !0
                }
                ,
                t.prototype.unfilterSlides = t.prototype.slickUnfilter = function() {
                    var e = this;
                    null !== e.$slidesCache && (e.unload(),
                    e.$slideTrack.children(this.options.slide).detach(),
                    e.$slidesCache.appendTo(e.$slideTrack),
                    e.reinit())
                }
                ,
                t.prototype.unload = function() {
                    var t = this;
                    e(".slick-cloned", t.$slider).remove(),
                    t.$dots && t.$dots.remove(),
                    t.$prevArrow && t.htmlExpr.test(t.options.prevArrow) && t.$prevArrow.remove(),
                    t.$nextArrow && t.htmlExpr.test(t.options.nextArrow) && t.$nextArrow.remove(),
                    t.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden", "true").css("width", "")
                }
                ,
                t.prototype.unslick = function(e) {
                    var t = this;
                    t.$slider.trigger("unslick", [t, e]),
                    t.destroy()
                }
                ,
                t.prototype.updateArrows = function() {
                    var e = this;
                    Math.floor(e.options.slidesToShow / 2),
                    !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && !e.options.infinite && (e.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false"),
                    e.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false"),
                    0 === e.currentSlide ? (e.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true"),
                    e.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : (e.currentSlide >= e.slideCount - e.options.slidesToShow && !1 === e.options.centerMode || e.currentSlide >= e.slideCount - 1 && !0 === e.options.centerMode) && (e.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"),
                    e.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")))
                }
                ,
                t.prototype.updateDots = function() {
                    var e = this;
                    null !== e.$dots && (e.$dots.find("li").removeClass("slick-active").end(),
                    e.$dots.find("li").eq(Math.floor(e.currentSlide / e.options.slidesToScroll)).addClass("slick-active"))
                }
                ,
                t.prototype.visibility = function() {
                    var e = this;
                    e.options.autoplay && (document[e.hidden] ? e.interrupted = !0 : e.interrupted = !1)
                }
                ,
                e.fn.slick = function() {
                    var e, i, n = this, s = arguments[0], o = Array.prototype.slice.call(arguments, 1), r = n.length;
                    for (e = 0; e < r; e++)
                        if ("object" == typeof s || void 0 === s ? n[e].slick = new t(n[e],s) : i = n[e].slick[s].apply(n[e].slick, o),
                        void 0 !== i)
                            return i;
                    return n
                }
                ;
                var i
            }
            ) ? n.apply(t, s) : n) || (e.exports = o)
        }()
    },
    ZtQj: function(e, t, i) {
        !function(e) {
            "use strict";
            function t(e, t) {
                var i = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }
                    ))),
                    i.push.apply(i, n)
                }
                return i
            }
            function i(e) {
                for (var i = 1; i < arguments.length; i++) {
                    var n = null != arguments[i] ? arguments[i] : {};
                    i % 2 ? t(Object(n), !0).forEach((function(t) {
                        s(e, t, n[t])
                    }
                    )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : t(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }
                    ))
                }
                return e
            }
            function n(e) {
                return (n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                }
                : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }
                )(e)
            }
            function s(e, t, i) {
                return t in e ? Object.defineProperty(e, t, {
                    value: i,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = i,
                e
            }
            function o(e, t, i) {
                var n, s = "";
                if ((e = "number" == typeof e ? String(e) : e).length > t)
                    return e;
                for (n = 0; n < t; n += 1)
                    s += String(i);
                return (s + e).slice(-s.length)
            }
            function r() {
                this.reset()
            }
            function a() {
                this.events = {}
            }
            r.prototype.toString = function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ["hours", "minutes", "seconds"]
                  , t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ":"
                  , i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 2;
                e = e || ["hours", "minutes", "seconds"],
                t = t || ":",
                i = i || 2;
                var n, s = [];
                for (n = 0; n < e.length; n += 1)
                    void 0 !== this[e[n]] && ("secondTenths" === e[n] ? s.push(this[e[n]]) : s.push(o(this[e[n]], i, "0")));
                return s.join(t)
            }
            ,
            r.prototype.reset = function() {
                this.secondTenths = 0,
                this.seconds = 0,
                this.minutes = 0,
                this.hours = 0,
                this.days = 0
            }
            ,
            a.prototype.on = function(e, t) {
                var i = this;
                return Array.isArray(this.events[e]) || (this.events[e] = []),
                this.events[e].push(t),
                function() {
                    return i.removeListener(e, t)
                }
            }
            ,
            a.prototype.removeListener = function(e, t) {
                if (Array.isArray(this.events[e])) {
                    var i = this.events[e].indexOf(t);
                    i > -1 && this.events[e].splice(i, 1)
                }
            }
            ,
            a.prototype.removeAllListeners = function(e) {
                e ? Array.isArray(this.events[e]) && (this.events[e] = []) : this.events = {}
            }
            ,
            a.prototype.emit = function(e) {
                for (var t = this, i = arguments.length, n = new Array(i > 1 ? i - 1 : 0), s = 1; s < i; s++)
                    n[s - 1] = arguments[s];
                Array.isArray(this.events[e]) && this.events[e].forEach((function(e) {
                    return e.apply(t, n)
                }
                ))
            }
            ;
            var l = "seconds"
              , c = "hours"
              , d = "days"
              , u = ["secondTenths", l, "minutes", c, d]
              , h = {
                secondTenths: 100,
                seconds: 1e3,
                minutes: 6e4,
                hours: 36e5,
                days: 864e5
            }
              , p = {
                secondTenths: 10,
                seconds: 60,
                minutes: 60,
                hours: 24
            };
            function f(e, t) {
                return (e % t + t) % t
            }
            function m() {
                var e, t, s, o, m, g, y, v, b, w, T = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, k = new r, C = new r, x = new a, _ = !1, A = !1, E = {}, S = {
                    detail: {
                        timer: this
                    }
                };
                function L(e, t) {
                    var i = p[e];
                    C[e] = t,
                    k[e] = e === d ? Math.abs(t) : f(t >= 0 ? t : i - f(t, i), i)
                }
                function P(e) {
                    return M(e, d)
                }
                function O(e) {
                    return M(e, c)
                }
                function N(e) {
                    return M(e, "minutes")
                }
                function D(e) {
                    return M(e, l)
                }
                function j(e) {
                    return M(e, "secondTenths")
                }
                function M(e, t) {
                    var i = C[t];
                    return L(t, G(e, h[t])),
                    C[t] !== i
                }
                function I() {
                    $(),
                    U()
                }
                function $() {
                    clearInterval(e),
                    e = void 0,
                    _ = !1,
                    A = !1
                }
                function R(e) {
                    de() ? (b = F(),
                    g = K(m.target)) : Y(e),
                    H()
                }
                function H() {
                    var i = h[t];
                    W(B(Date.now())) || (e = setInterval(q, i),
                    _ = !0,
                    A = !1)
                }
                function F() {
                    return B(Date.now()) - C.secondTenths * h.secondTenths * s
                }
                function q() {
                    var e = B(Date.now());
                    z(V()),
                    o(S.detail.timer),
                    W(e) && (te(),
                    le("targetAchieved", S))
                }
                function V() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : B(Date.now())
                      , t = s > 0 ? e - b : b - e
                      , i = {};
                    return i.secondTenths = j(t),
                    i[l] = D(t),
                    i.minutes = N(t),
                    i[c] = O(t),
                    i[d] = P(t),
                    i
                }
                function B(e) {
                    return Math.floor(e / h[t]) * h[t]
                }
                function z(e) {
                    e.secondTenths && le("secondTenthsUpdated", S),
                    e[l] && le("secondsUpdated", S),
                    e.minutes && le("minutesUpdated", S),
                    e[c] && le("hoursUpdated", S),
                    e[d] && le("daysUpdated", S)
                }
                function W(e) {
                    return g instanceof Array && e >= w
                }
                function U() {
                    k.reset(),
                    C.reset()
                }
                function Y(e) {
                    t = X((e = e || {}).precision),
                    o = "function" == typeof e.callback ? e.callback : function() {}
                    ,
                    v = !0 === e.countdown,
                    s = !0 === v ? -1 : 1,
                    "object" === n(e.startValues) ? Q(e.startValues) : y = null,
                    b = F(),
                    V(),
                    "object" === n(e.target) ? g = K(e.target) : v ? (e.target = {
                        seconds: 0
                    },
                    g = K(e.target)) : g = null,
                    E = {
                        precision: t,
                        callback: o,
                        countdown: "object" === n(e) && !0 === e.countdown,
                        target: g,
                        startValues: y
                    },
                    m = e
                }
                function X(e) {
                    if (!J(e = "string" == typeof e ? e : l))
                        throw new Error("Error in precision parameter: ".concat(e, " is not a valid value"));
                    return e
                }
                function J(e) {
                    return u.indexOf(e) >= 0
                }
                function Z(e) {
                    var t;
                    if ("object" === n(e))
                        if (e instanceof Array) {
                            if (5 !== e.length)
                                throw new Error("Array size not valid");
                            t = e
                        } else {
                            for (var i in e)
                                if (u.indexOf(i) < 0)
                                    throw new Error("Error in startValues or target parameter: ".concat(i, " is not a valid input value"));
                            t = [e.secondTenths || 0, e.seconds || 0, e.minutes || 0, e.hours || 0, e.days || 0]
                        }
                    var s = (t = t.map((function(e) {
                        return parseInt(e, 10)
                    }
                    )))[0]
                      , o = t[1] + G(s, 10)
                      , r = t[2] + G(o, 60)
                      , a = t[3] + G(r, 60)
                      , l = t[4] + G(a, 24);
                    return t[0] = s % 10,
                    t[1] = o % 60,
                    t[2] = r % 60,
                    t[3] = a % 24,
                    t[4] = l,
                    t
                }
                function G(e, t) {
                    var i = e / t;
                    return i < 0 ? Math.ceil(i) : Math.floor(i)
                }
                function K(e) {
                    if (e) {
                        var t = ee(g = Z(e));
                        return w = b + t.secondTenths * h.secondTenths * s,
                        g
                    }
                }
                function Q(e) {
                    y = Z(e),
                    k.secondTenths = y[0],
                    k.seconds = y[1],
                    k.minutes = y[2],
                    k.hours = y[3],
                    k.days = y[4],
                    C = ee(y, C)
                }
                function ee(e, t) {
                    var i = t || {};
                    return i.days = e[4],
                    i.hours = 24 * i.days + e[3],
                    i.minutes = 60 * i.hours + e[2],
                    i.seconds = 60 * i.minutes + e[1],
                    i.secondTenths = 10 * i.seconds + e[[0]],
                    i
                }
                function te() {
                    I(),
                    le("stopped", S)
                }
                function ie() {
                    I(),
                    R(m),
                    le("reset", S)
                }
                function ne() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    e = i(i({}, T), e),
                    ce() || (R(e),
                    le("started", S))
                }
                function se() {
                    $(),
                    A = !0,
                    le("paused", S)
                }
                function oe(e, t) {
                    x.on(e, t)
                }
                function re(e, t) {
                    x.removeListener(e, t)
                }
                function ae(e) {
                    x.removeAllListeners(e)
                }
                function le(e, t) {
                    x.emit(e, t)
                }
                function ce() {
                    return _
                }
                function de() {
                    return A
                }
                function ue() {
                    return k
                }
                function he() {
                    return C
                }
                function pe() {
                    return E
                }
                Y(T),
                void 0 !== this && (this.start = ne,
                this.pause = se,
                this.stop = te,
                this.reset = ie,
                this.isRunning = ce,
                this.isPaused = de,
                this.getTimeValues = ue,
                this.getTotalTimeValues = he,
                this.getConfig = pe,
                this.addEventListener = oe,
                this.on = oe,
                this.removeEventListener = re,
                this.removeAllEventListeners = ae,
                this.off = re)
            }
            e.Timer = m,
            e.default = m,
            Object.defineProperty(e, "__esModule", {
                value: !0
            })
        }(t)
    },
    azrh: function(e, t) {
        "document"in self && ((!("classList"in document.createElement("_")) || document.createElementNS && !("classList"in document.createElementNS("http://www.w3.org/2000/svg", "g"))) && function(e) {
            "use strict";
            if ("Element"in e) {
                var t = e.Element.prototype
                  , i = Object
                  , n = String.prototype.trim || function() {
                    return this.replace(/^\s+|\s+$/g, "")
                }
                  , s = Array.prototype.indexOf || function(e) {
                    for (var t = 0, i = this.length; t < i; t++)
                        if (t in this && this[t] === e)
                            return t;
                    return -1
                }
                  , o = function(e, t) {
                    this.name = e,
                    this.code = DOMException[e],
                    this.message = t
                }
                  , r = function(e, t) {
                    if ("" === t)
                        throw new o("SYNTAX_ERR","The token must not be empty.");
                    if (/\s/.test(t))
                        throw new o("INVALID_CHARACTER_ERR","The token must not contain space characters.");
                    return s.call(e, t)
                }
                  , a = function(e) {
                    for (var t = n.call(e.getAttribute("class") || ""), i = t ? t.split(/\s+/) : [], s = 0, o = i.length; s < o; s++)
                        this.push(i[s]);
                    this._updateClassName = function() {
                        e.setAttribute("class", this.toString())
                    }
                }
                  , l = a.prototype = []
                  , c = function() {
                    return new a(this)
                };
                if (o.prototype = Error.prototype,
                l.item = function(e) {
                    return this[e] || null
                }
                ,
                l.contains = function(e) {
                    return ~r(this, e + "")
                }
                ,
                l.add = function() {
                    var e, t = arguments, i = 0, n = t.length, s = !1;
                    do {
                        e = t[i] + "",
                        ~r(this, e) || (this.push(e),
                        s = !0)
                    } while (++i < n);
                    s && this._updateClassName()
                }
                ,
                l.remove = function() {
                    var e, t, i = arguments, n = 0, s = i.length, o = !1;
                    do {
                        for (e = i[n] + "",
                        t = r(this, e); ~t; )
                            this.splice(t, 1),
                            o = !0,
                            t = r(this, e)
                    } while (++n < s);
                    o && this._updateClassName()
                }
                ,
                l.toggle = function(e, t) {
                    var i = this.contains(e)
                      , n = i ? !0 !== t && "remove" : !1 !== t && "add";
                    return n && this[n](e),
                    !0 === t || !1 === t ? t : !i
                }
                ,
                l.replace = function(e, t) {
                    var i = r(e + "");
                    ~i && (this.splice(i, 1, t),
                    this._updateClassName())
                }
                ,
                l.toString = function() {
                    return this.join(" ")
                }
                ,
                i.defineProperty) {
                    var d = {
                        get: c,
                        enumerable: !0,
                        configurable: !0
                    };
                    try {
                        i.defineProperty(t, "classList", d)
                    } catch (e) {
                        void 0 !== e.number && -2146823252 !== e.number || (d.enumerable = !1,
                        i.defineProperty(t, "classList", d))
                    }
                } else
                    i.prototype.__defineGetter__ && t.__defineGetter__("classList", c)
            }
        }(self),
        function() {
            "use strict";
            var e = document.createElement("_");
            if (e.classList.add("c1", "c2"),
            !e.classList.contains("c2")) {
                var t = function(e) {
                    var t = DOMTokenList.prototype[e];
                    DOMTokenList.prototype[e] = function(e) {
                        var i, n = arguments.length;
                        for (i = 0; i < n; i++)
                            e = arguments[i],
                            t.call(this, e)
                    }
                };
                t("add"),
                t("remove")
            }
            if (e.classList.toggle("c3", !1),
            e.classList.contains("c3")) {
                var i = DOMTokenList.prototype.toggle;
                DOMTokenList.prototype.toggle = function(e, t) {
                    return 1 in arguments && !this.contains(e) == !t ? t : i.call(this, e)
                }
            }
            "replace"in document.createElement("_").classList || (DOMTokenList.prototype.replace = function(e, t) {
                var i = this.toString().split(" ")
                  , n = i.indexOf(e + "");
                ~n && (i = i.slice(n),
                this.remove.apply(this, i),
                this.add(t),
                this.add.apply(this, i.slice(1)))
            }
            ),
            e = null
        }())
    },
    fDiW: function(e, t) {
        !function(e) {
            var t = {
                init: function(t, i) {
                    var n = this;
                    if (n.dom = e("body"),
                    n.$elem = e(i),
                    n.options = e.extend({}, e.fn.modaal.options, n.$elem.data(), t),
                    n.xhr = null,
                    n.scope = {
                        is_open: !1,
                        id: "modaal_" + (new Date).getTime() + Math.random().toString(16).substring(2),
                        source: n.options.content_source ? n.options.content_source : n.$elem.attr("href")
                    },
                    n.$elem.attr("data-modaal-scope", n.scope.id),
                    n.private_options = {
                        active_class: "is_active"
                    },
                    n.lastFocus = null,
                    n.options.is_locked || "confirm" == n.options.type || n.options.hide_close ? n.scope.close_btn = "" : n.scope.close_btn = '<button type="button" class="modaal-close" id="modaal-close" aria-label="' + n.options.close_aria_label + '"><span>' + n.options.close_text + "</span></button>",
                    "none" === n.options.animation && (n.options.animation_speed = 0,
                    n.options.after_callback_delay = 0),
                    e(i).on("click.Modaal", (function(e) {
                        e.preventDefault(),
                        n.create_modaal(n, e)
                    }
                    )),
                    !0 === n.options.outer_controls)
                        var s = "outer";
                    else
                        s = "inner";
                    n.scope.prev_btn = '<button type="button" class="modaal-gallery-control modaal-gallery-prev modaal-gallery-prev-' + s + '" id="modaal-gallery-prev" aria-label="Previous image (use left arrow to change)"><span>Previous Image</span></button>',
                    n.scope.next_btn = '<button type="button" class="modaal-gallery-control modaal-gallery-next modaal-gallery-next-' + s + '" id="modaal-gallery-next" aria-label="Next image (use right arrow to change)"><span>Next Image</span></button>',
                    !0 === n.options.start_open && n.create_modaal(n)
                },
                create_modaal: function(e, t) {
                    var i;
                    if ((e = this).lastFocus = e.$elem,
                    !1 !== e.options.should_open && ("function" != typeof e.options.should_open || !1 !== e.options.should_open())) {
                        switch (e.options.before_open.call(e, t),
                        e.options.type) {
                        case "inline":
                            e.create_basic();
                            break;
                        case "ajax":
                            i = e.options.source(e.$elem, e.scope.source),
                            e.fetch_ajax(i);
                            break;
                        case "confirm":
                            e.options.is_locked = !0,
                            e.create_confirm();
                            break;
                        case "image":
                            e.create_image();
                            break;
                        case "iframe":
                            i = e.options.source(e.$elem, e.scope.source),
                            e.create_iframe(i);
                            break;
                        case "video":
                            e.create_video(e.scope.source);
                            break;
                        case "instagram":
                            e.create_instagram()
                        }
                        e.watch_events()
                    }
                },
                watch_events: function() {
                    var t = this;
                    t.dom.off("click.Modaal keyup.Modaal keydown.Modaal"),
                    t.dom.on("keydown.Modaal", (function(i) {
                        var n = i.keyCode
                          , s = i.target;
                        9 == n && t.scope.is_open && (e.contains(document.getElementById(t.scope.id), s) || e("#" + t.scope.id).find('*[tabindex="0"]').focus())
                    }
                    )),
                    t.dom.on("keyup.Modaal", (function(i) {
                        var n = i.keyCode
                          , s = i.target;
                        return i.shiftKey && 9 == i.keyCode && t.scope.is_open && (e.contains(document.getElementById(t.scope.id), s) || e("#" + t.scope.id).find(".modaal-close").focus()),
                        !t.options.is_locked && 27 == n && t.scope.is_open ? !e(document.activeElement).is("input:not(:checkbox):not(:radio)") && void t.modaal_close() : "image" == t.options.type ? (37 == n && t.scope.is_open && !e("#" + t.scope.id + " .modaal-gallery-prev").hasClass("is_hidden") && t.gallery_update("prev"),
                        void (39 == n && t.scope.is_open && !e("#" + t.scope.id + " .modaal-gallery-next").hasClass("is_hidden") && t.gallery_update("next"))) : void 0
                    }
                    )),
                    t.dom.on("click.Modaal", (function(i) {
                        var n = e(i.target);
                        if (t.options.is_locked || !(t.options.overlay_close && n.is(".modaal-inner-wrapper") || n.is(".modaal-close") || n.closest(".modaal-close").length)) {
                            if (n.is(".modaal-confirm-btn"))
                                return n.is(".modaal-ok") && t.options.confirm_callback.call(t, t.lastFocus),
                                n.is(".modaal-cancel") && t.options.confirm_cancel_callback.call(t, t.lastFocus),
                                void t.modaal_close();
                            if (n.is(".modaal-gallery-control")) {
                                if (n.hasClass("is_hidden"))
                                    return;
                                return n.is(".modaal-gallery-prev") && t.gallery_update("prev"),
                                void (n.is(".modaal-gallery-next") && t.gallery_update("next"))
                            }
                        } else
                            t.modaal_close()
                    }
                    ))
                },
                build_modal: function(t) {
                    var i = "";
                    "instagram" == this.options.type && (i = " modaal-instagram");
                    var n, s = "video" == this.options.type ? "modaal-video-wrap" : "modaal-content";
                    switch (this.options.animation) {
                    case "fade":
                        n = " modaal-start_fade";
                        break;
                    case "slide-down":
                        n = " modaal-start_slidedown";
                        break;
                    default:
                        n = " modaal-start_none"
                    }
                    var o = "";
                    this.options.fullscreen && (o = " modaal-fullscreen"),
                    "" === this.options.custom_class && void 0 === this.options.custom_class || (this.options.custom_class = " " + this.options.custom_class);
                    var r = "";
                    this.options.width && this.options.height && "number" == typeof this.options.width && "number" == typeof this.options.height ? r = ' style="max-width:' + this.options.width + "px;height:" + this.options.height + 'px;overflow:auto;"' : this.options.width && "number" == typeof this.options.width ? r = ' style="max-width:' + this.options.width + 'px;"' : this.options.height && "number" == typeof this.options.height && (r = ' style="height:' + this.options.height + 'px;overflow:auto;"'),
                    ("image" == this.options.type || "video" == this.options.type || "instagram" == this.options.type || this.options.fullscreen) && (r = "");
                    var a = "";
                    this.is_touch() && (a = ' style="cursor:pointer;"');
                    var l = '<div class="modaal-wrapper modaal-' + this.options.type + n + i + o + this.options.custom_class + '" id="' + this.scope.id + '"><div class="modaal-outer-wrapper"><div class="modaal-inner-wrapper"' + a + ">";
                    "video" != this.options.type && (l += '<div class="modaal-container"' + r + ">"),
                    l += '<div class="' + s + ' modaal-focus" aria-hidden="false" aria-label="' + this.options.accessible_title + " - " + this.options.close_aria_label + '" role="dialog">',
                    "inline" == this.options.type ? l += '<div class="modaal-content-container" role="document"></div>' : l += t,
                    l += "</div>" + this.scope.close_btn,
                    "video" != this.options.type && (l += "</div>"),
                    l += "</div>",
                    "image" == this.options.type && !0 === this.options.outer_controls && (l += this.scope.prev_btn + this.scope.next_btn),
                    l += "</div></div>",
                    e("#" + this.scope.id + "_overlay").length < 1 && this.dom.append(l),
                    "inline" == this.options.type && t.appendTo("#" + this.scope.id + " .modaal-content-container"),
                    this.modaal_overlay("show")
                },
                create_basic: function() {
                    var t = e(this.scope.source)
                      , i = "";
                    t.length ? (i = t.contents().detach(),
                    t.empty()) : i = "Content could not be loaded. Please check the source and try again.",
                    this.build_modal(i)
                },
                create_instagram: function() {
                    var t = this
                      , i = t.options.instagram_id
                      , n = ""
                      , s = "Instagram photo couldn't be loaded, please check the embed code and try again.";
                    if (t.build_modal('<div class="modaal-content-container' + ("" != t.options.loading_class ? " " + t.options.loading_class : "") + '">' + t.options.loading_content + "</div>"),
                    "" != i && null != i) {
                        var o = "https://api.instagram.com/oembed?url=http://instagr.am/p/" + i + "/";
                        e.ajax({
                            url: o,
                            dataType: "jsonp",
                            cache: !1,
                            success: function(i) {
                                t.dom.append('<div id="temp-ig" style="width:0;height:0;overflow:hidden;">' + i.html + "</div>"),
                                t.dom.attr("data-igloaded") ? window.instgrm.Embeds.process() : t.dom.attr("data-igloaded", "true");
                                var n = "#" + t.scope.id + " .modaal-content-container";
                                e(n).length > 0 && setTimeout((function() {
                                    e("#temp-ig").contents().clone().appendTo(n),
                                    e("#temp-ig").remove()
                                }
                                ), 1e3)
                            },
                            error: function() {
                                n = s;
                                var i = e("#" + t.scope.id + " .modaal-content-container");
                                i.length > 0 && (i.removeClass(t.options.loading_class).addClass(t.options.ajax_error_class),
                                i.html(n))
                            }
                        })
                    } else
                        n = s;
                    return !1
                },
                fetch_ajax: function(t) {
                    var i = this;
                    null == i.options.accessible_title && (i.options.accessible_title = "Dialog Window"),
                    null !== i.xhr && (i.xhr.abort(),
                    i.xhr = null),
                    i.build_modal('<div class="modaal-content-container' + ("" != i.options.loading_class ? " " + i.options.loading_class : "") + '">' + i.options.loading_content + "</div>"),
                    i.xhr = e.ajax(t, {
                        success: function(t) {
                            var n = e("#" + i.scope.id).find(".modaal-content-container");
                            n.length > 0 && (n.removeClass(i.options.loading_class),
                            n.html(t),
                            i.options.ajax_success.call(i, n))
                        },
                        error: function(t) {
                            if ("abort" != t.statusText) {
                                var n = e("#" + i.scope.id + " .modaal-content-container");
                                n.length > 0 && (n.removeClass(i.options.loading_class).addClass(i.options.ajax_error_class),
                                n.html("Content could not be loaded. Please check the source and try again."))
                            }
                        }
                    })
                },
                create_confirm: function() {
                    var e;
                    e = '<div class="modaal-content-container"><h1 id="modaal-title">' + this.options.confirm_title + '</h1><div class="modaal-confirm-content">' + this.options.confirm_content + '</div><div class="modaal-confirm-wrap"><button type="button" class="modaal-confirm-btn modaal-ok" aria-label="Confirm">' + this.options.confirm_button_text + '</button><button type="button" class="modaal-confirm-btn modaal-cancel" aria-label="Cancel">' + this.options.confirm_cancel_button_text + "</button></div></div></div>",
                    this.build_modal(e)
                },
                create_image: function() {
                    var t, i, n = "";
                    if (this.$elem.is("[data-group]") || this.$elem.is("[rel]")) {
                        var s = this.$elem.is("[data-group]")
                          , o = s ? this.$elem.attr("data-group") : this.$elem.attr("rel")
                          , r = e(s ? '[data-group="' + o + '"]' : '[rel="' + o + '"]');
                        r.removeAttr("data-gallery-active", "is_active"),
                        this.$elem.attr("data-gallery-active", "is_active"),
                        i = r.length - 1;
                        var a = [];
                        n = '<div class="modaal-gallery-item-wrap">',
                        r.each((function(t, i) {
                            var n = ""
                              , s = ""
                              , o = ""
                              , r = !1
                              , l = !1
                              , c = i.getAttribute("data-modaal-desc")
                              , d = i.getAttribute("data-gallery-active");
                            e(i).attr("data-modaal-content-source") ? n = e(i).attr("data-modaal-content-source") : e(i).attr("href") ? n = e(i).attr("href") : e(i).attr("src") ? n = e(i).attr("src") : (n = "trigger requires href or data-modaal-content-source attribute",
                            l = !0),
                            "" != c && null != c ? (s = c,
                            o = '<div class="modaal-gallery-label"><span class="modaal-accessible-hide">Image ' + (t + 1) + " - </span>" + c.replace(/</g, "&lt;").replace(/>/g, "&gt;") + "</div>") : o = '<div class="modaal-gallery-label"><span class="modaal-accessible-hide">Image ' + (t + 1) + "</span></div>",
                            d && (r = !0);
                            var u = {
                                url: n,
                                alt: s,
                                rawdesc: c,
                                desc: o,
                                active: r,
                                src_error: l
                            };
                            a.push(u)
                        }
                        ));
                        for (var l = 0; l < a.length; l++) {
                            var c = ""
                              , d = a[l].rawdesc ? "Image: " + a[l].rawdesc : "Image " + l + " no description";
                            a[l].active && (c = " " + this.private_options.active_class),
                            n += '<div class="modaal-gallery-item gallery-item-' + l + c + '" aria-label="' + d + '">' + (a[l].src_error ? a[l].url : '<img src="' + a[l].url + '" alt=" " style="width:100%">') + a[l].desc + "</div>"
                        }
                        n += "</div>",
                        1 != this.options.outer_controls && (n += this.scope.prev_btn + this.scope.next_btn)
                    } else {
                        var u, h = !1;
                        this.$elem.attr("data-modaal-content-source") ? u = this.$elem.attr("data-modaal-content-source") : this.$elem.attr("href") ? u = this.$elem.attr("href") : this.$elem.attr("src") ? u = this.$elem.attr("src") : (u = "trigger requires href or data-modaal-content-source attribute",
                        h = !0);
                        var p = "";
                        d = "";
                        this.$elem.attr("data-modaal-desc") ? (d = this.$elem.attr("data-modaal-desc"),
                        p = '<div class="modaal-gallery-label"><span class="modaal-accessible-hide">Image - </span>' + this.$elem.attr("data-modaal-desc").replace(/</g, "&lt;").replace(/>/g, "&gt;") + "</div>") : d = "Image with no description",
                        n = '<div class="modaal-gallery-item is_active" aria-label="' + d + '">' + (h ? u : '<img src="' + u + '" alt=" " style="width:100%">') + p + "</div>"
                    }
                    t = n,
                    this.build_modal(t),
                    e(".modaal-gallery-item.is_active").is(".gallery-item-0") && e(".modaal-gallery-prev").hide(),
                    e(".modaal-gallery-item.is_active").is(".gallery-item-" + i) && e(".modaal-gallery-next").hide()
                },
                gallery_update: function(t) {
                    var i = this
                      , n = e("#" + i.scope.id)
                      , s = n.find(".modaal-gallery-item").length - 1;
                    if (0 == s)
                        return !1;
                    var o = n.find(".modaal-gallery-prev")
                      , r = n.find(".modaal-gallery-next")
                      , a = 0
                      , l = 0
                      , c = n.find(".modaal-gallery-item." + i.private_options.active_class)
                      , d = "next" == t ? c.next(".modaal-gallery-item") : c.prev(".modaal-gallery-item");
                    return i.options.before_image_change.call(i, c, d),
                    ("prev" != t || !n.find(".gallery-item-0").hasClass("is_active")) && (("next" != t || !n.find(".gallery-item-" + s).hasClass("is_active")) && void c.stop().animate({
                        opacity: 0
                    }, 250, (function() {
                        d.addClass("is_next").css({
                            position: "absolute",
                            display: "block",
                            opacity: 0
                        });
                        var t = e(document).width()
                          , u = t > 1140 ? 280 : 50;
                        a = n.find(".modaal-gallery-item.is_next").width(),
                        l = n.find(".modaal-gallery-item.is_next").height();
                        var h = n.find(".modaal-gallery-item.is_next img").prop("naturalWidth")
                          , p = n.find(".modaal-gallery-item.is_next img").prop("naturalHeight");
                        h > t - u ? (a = t - u,
                        n.find(".modaal-gallery-item.is_next").css({
                            width: a
                        }),
                        n.find(".modaal-gallery-item.is_next img").css({
                            width: a
                        }),
                        l = n.find(".modaal-gallery-item.is_next").find("img").height()) : (a = h,
                        l = p),
                        n.find(".modaal-gallery-item-wrap").stop().animate({
                            width: a,
                            height: l
                        }, 250, (function() {
                            c.removeClass(i.private_options.active_class + " " + i.options.gallery_active_class).removeAttr("style"),
                            c.find("img").removeAttr("style"),
                            d.addClass(i.private_options.active_class + " " + i.options.gallery_active_class).removeClass("is_next").css("position", ""),
                            d.stop().animate({
                                opacity: 1
                            }, 250, (function() {
                                e(this).removeAttr("style").css({
                                    width: "100%"
                                }),
                                e(this).find("img").css("width", "100%"),
                                n.find(".modaal-gallery-item-wrap").removeAttr("style"),
                                i.options.after_image_change.call(i, d)
                            }
                            )),
                            n.find(".modaal-gallery-item").removeAttr("tabindex"),
                            n.find(".modaal-gallery-item." + i.private_options.active_class).attr("tabindex", "0").focus(),
                            n.find(".modaal-gallery-item." + i.private_options.active_class).is(".gallery-item-0") ? o.stop().animate({
                                opacity: 0
                            }, 150, (function() {
                                e(this).hide()
                            }
                            )) : o.stop().css({
                                display: "block",
                                opacity: o.css("opacity")
                            }).animate({
                                opacity: 1
                            }, 150),
                            n.find(".modaal-gallery-item." + i.private_options.active_class).is(".gallery-item-" + s) ? r.stop().animate({
                                opacity: 0
                            }, 150, (function() {
                                e(this).hide()
                            }
                            )) : r.stop().css({
                                display: "block",
                                opacity: o.css("opacity")
                            }).animate({
                                opacity: 1
                            }, 150)
                        }
                        ))
                    }
                    )))
                },
                create_video: function(e) {
                    var t;
                    t = '<iframe src="' + e + '" class="modaal-video-frame" frameborder="0" allowfullscreen></iframe>',
                    this.build_modal('<div class="modaal-video-container">' + t + "</div>")
                },
                create_iframe: function(e) {
                    var t;
                    t = null !== this.options.width || void 0 !== this.options.width || null !== this.options.height || void 0 !== this.options.height ? '<iframe src="' + e + '" class="modaal-iframe-elem" frameborder="0" allowfullscreen></iframe>' : '<div class="modaal-content-container">Please specify a width and height for your iframe</div>',
                    this.build_modal(t)
                },
                modaal_open: function() {
                    var t = this
                      , i = e("#" + t.scope.id)
                      , n = t.options.animation;
                    "none" === n && (i.removeClass("modaal-start_none"),
                    t.options.after_open.call(t, i)),
                    "fade" === n && i.removeClass("modaal-start_fade"),
                    "slide-down" === n && i.removeClass("modaal-start_slide_down");
                    e(".modaal-wrapper *[tabindex=0]").removeAttr("tabindex"),
                    ("image" == t.options.type ? e("#" + t.scope.id).find(".modaal-gallery-item." + t.private_options.active_class) : i.find(".modaal-iframe-elem").length ? i.find(".modaal-iframe-elem") : i.find(".modaal-video-wrap").length ? i.find(".modaal-video-wrap") : i.find(".modaal-focus")).attr("tabindex", "0").focus(),
                    "none" !== n && setTimeout((function() {
                        t.options.after_open.call(t, i)
                    }
                    ), t.options.after_callback_delay)
                },
                modaal_close: function() {
                    var t = this
                      , i = e("#" + t.scope.id);
                    t.options.before_close.call(t, i),
                    null !== t.xhr && (t.xhr.abort(),
                    t.xhr = null),
                    "none" === t.options.animation && i.addClass("modaal-start_none"),
                    "fade" === t.options.animation && i.addClass("modaal-start_fade"),
                    "slide-down" === t.options.animation && i.addClass("modaal-start_slide_down"),
                    setTimeout((function() {
                        "inline" == t.options.type && e("#" + t.scope.id + " .modaal-content-container").contents().detach().appendTo(t.scope.source),
                        i.remove(),
                        t.options.after_close.call(t),
                        t.scope.is_open = !1
                    }
                    ), t.options.after_callback_delay),
                    t.modaal_overlay("hide"),
                    null != t.lastFocus && t.lastFocus.focus()
                },
                modaal_overlay: function(t) {
                    var i = this;
                    "show" == t ? (i.scope.is_open = !0,
                    i.options.background_scroll || i.dom.addClass("modaal-noscroll"),
                    e("#" + i.scope.id + "_overlay").length < 1 && i.dom.append('<div class="modaal-overlay" id="' + i.scope.id + '_overlay"></div>'),
                    e("#" + i.scope.id + "_overlay").css("background", i.options.background).stop().animate({
                        opacity: i.options.overlay_opacity
                    }, i.options.animation_speed, (function() {
                        i.modaal_open()
                    }
                    ))) : "hide" == t && e("#" + i.scope.id + "_overlay").stop().animate({
                        opacity: 0
                    }, i.options.animation_speed, (function() {
                        e(this).remove(),
                        i.dom.removeClass("modaal-noscroll")
                    }
                    ))
                },
                is_touch: function() {
                    return "ontouchstart"in window || navigator.maxTouchPoints
                }
            }
              , i = [];
            function n(e) {
                var t = {}
                  , i = !1;
                e.attr("data-modaal-type") && (i = !0,
                t.type = e.attr("data-modaal-type")),
                e.attr("data-modaal-content-source") && (i = !0,
                t.content_source = e.attr("data-modaal-content-source")),
                e.attr("data-modaal-animation") && (i = !0,
                t.animation = e.attr("data-modaal-animation")),
                e.attr("data-modaal-animation-speed") && (i = !0,
                t.animation_speed = e.attr("data-modaal-animation-speed")),
                e.attr("data-modaal-after-callback-delay") && (i = !0,
                t.after_callback_delay = e.attr("data-modaal-after-callback-delay")),
                e.attr("data-modaal-is-locked") && (i = !0,
                t.is_locked = "true" === e.attr("data-modaal-is-locked")),
                e.attr("data-modaal-hide-close") && (i = !0,
                t.hide_close = "true" === e.attr("data-modaal-hide-close")),
                e.attr("data-modaal-background") && (i = !0,
                t.background = e.attr("data-modaal-background")),
                e.attr("data-modaal-overlay-opacity") && (i = !0,
                t.overlay_opacity = e.attr("data-modaal-overlay-opacity")),
                e.attr("data-modaal-overlay-close") && (i = !0,
                t.overlay_close = "false" !== e.attr("data-modaal-overlay-close")),
                e.attr("data-modaal-accessible-title") && (i = !0,
                t.accessible_title = e.attr("data-modaal-accessible-title")),
                e.attr("data-modaal-start-open") && (i = !0,
                t.start_open = "true" === e.attr("data-modaal-start-open")),
                e.attr("data-modaal-fullscreen") && (i = !0,
                t.fullscreen = "true" === e.attr("data-modaal-fullscreen")),
                e.attr("data-modaal-custom-class") && (i = !0,
                t.custom_class = e.attr("data-modaal-custom-class")),
                e.attr("data-modaal-close-text") && (i = !0,
                t.close_text = e.attr("data-modaal-close-text")),
                e.attr("data-modaal-close-aria-label") && (i = !0,
                t.close_aria_label = e.attr("data-modaal-close-aria-label")),
                e.attr("data-modaal-background-scroll") && (i = !0,
                t.background_scroll = "true" === e.attr("data-modaal-background-scroll")),
                e.attr("data-modaal-width") && (i = !0,
                t.width = parseInt(e.attr("data-modaal-width"))),
                e.attr("data-modaal-height") && (i = !0,
                t.height = parseInt(e.attr("data-modaal-height"))),
                e.attr("data-modaal-confirm-button-text") && (i = !0,
                t.confirm_button_text = e.attr("data-modaal-confirm-button-text")),
                e.attr("data-modaal-confirm-cancel-button-text") && (i = !0,
                t.confirm_cancel_button_text = e.attr("data-modaal-confirm-cancel-button-text")),
                e.attr("data-modaal-confirm-title") && (i = !0,
                t.confirm_title = e.attr("data-modaal-confirm-title")),
                e.attr("data-modaal-confirm-content") && (i = !0,
                t.confirm_content = e.attr("data-modaal-confirm-content")),
                e.attr("data-modaal-gallery-active-class") && (i = !0,
                t.gallery_active_class = e.attr("data-modaal-gallery-active-class")),
                e.attr("data-modaal-loading-content") && (i = !0,
                t.loading_content = e.attr("data-modaal-loading-content")),
                e.attr("data-modaal-loading-class") && (i = !0,
                t.loading_class = e.attr("data-modaal-loading-class")),
                e.attr("data-modaal-ajax-error-class") && (i = !0,
                t.ajax_error_class = e.attr("data-modaal-ajax-error-class")),
                e.attr("data-modaal-instagram-id") && (i = !0,
                t.instagram_id = e.attr("data-modaal-instagram-id")),
                i && e.modaal(t)
            }
            e.fn.modaal = function(n) {
                return this.each((function(s) {
                    var o = e(this).data("modaal");
                    if (o) {
                        if ("string" == typeof n)
                            switch (n) {
                            case "open":
                                o.create_modaal(o);
                                break;
                            case "close":
                                o.modaal_close()
                            }
                    } else {
                        var r = Object.create(t);
                        r.init(n, this),
                        e.data(this, "modaal", r),
                        i.push({
                            element: e(this).attr("class"),
                            options: n
                        })
                    }
                }
                ))
            }
            ,
            e.fn.modaal.options = {
                type: "inline",
                content_source: null,
                animation: "fade",
                animation_speed: 300,
                after_callback_delay: 350,
                is_locked: !1,
                hide_close: !1,
                background: "#000",
                overlay_opacity: "0.8",
                overlay_close: !0,
                accessible_title: "Dialog Window",
                start_open: !1,
                fullscreen: !1,
                custom_class: "",
                background_scroll: !1,
                should_open: !0,
                close_text: "Close",
                close_aria_label: "Close (Press escape to close)",
                width: null,
                height: null,
                before_open: function() {},
                after_open: function() {},
                before_close: function() {},
                after_close: function() {},
                source: function(e, t) {
                    return t
                },
                confirm_button_text: "Confirm",
                confirm_cancel_button_text: "Cancel",
                confirm_title: "Confirm Title",
                confirm_content: "<p>This is the default confirm dialog content. Replace me through the options</p>",
                confirm_callback: function() {},
                confirm_cancel_callback: function() {},
                gallery_active_class: "gallery_active_item",
                outer_controls: !1,
                before_image_change: function(e, t) {},
                after_image_change: function(e) {},
                loading_content: '<div class="modaal-loading-spinner"><div><div></div></div><div><div></div></div><div><div></div></div><div><div></div></div><div><div></div></div><div><div></div></div><div><div></div></div><div><div></div></div></div>',
                loading_class: "is_loading",
                ajax_error_class: "modaal-error",
                ajax_success: function() {},
                instagram_id: null
            },
            e((function() {
                var t = e(".modaal");
                t.length && t.each((function() {
                    n(e(this))
                }
                ));
                var s = new MutationObserver((function(t) {
                    t.forEach((function(t) {
                        if (t.addedNodes && t.addedNodes.length > 0)
                            [].some.call(t.addedNodes, (function(t) {
                                var s = e(t);
                                (s.is("a") || s.is("button")) && (s.hasClass("modaal") ? n(s) : i.forEach((function(t) {
                                    if (t.element == s.attr("class"))
                                        return e(s).modaal(t.options),
                                        !1
                                }
                                )))
                            }
                            ))
                    }
                    ))
                }
                ))
                  , o = {
                    subtree: !0,
                    attributes: !0,
                    childList: !0,
                    characterData: !0
                };
                setTimeout((function() {
                    s.observe(document.body, o)
                }
                ), 500)
            }
            ))
        }(jQuery, window, document)
    },
    gRFy: function(e, t, i) {
        (function(e, t) {
            e.$ = e.jQuery = i("EVdn");
            var n = t("body");
            n.on("click", "input[name=elementCompleted]", (function() {
                var e = t(this).parents("div").attr("data-element")
                  , i = t(this).parents("div").attr("data-type")
                  , n = t(this).parents("div").attr("data-section")
                  , s = t(this).parents("div").attr("data-panel");
                t.post("/actions/business-module/default/complete-element?type=" + i + "&item=" + e + "&section=" + n + "&panel=" + s, (function(e) {
                    console.log(e)
                }
                ))
            }
            )),
            n.on("click", "input[name=elementBookmarked]", (function() {
                var e = t(this).parents("div").attr("data-element")
                  , i = t(this).parents("div").attr("data-type")
                  , n = t(this).parents("div").attr("data-section")
                  , s = t(this).parents("div").attr("data-panel");
                t.post("/actions/business-module/default/bookmark-element?type=" + i + "&item=" + e + "&section=" + n + "&panel=" + s, (function(e) {
                    console.log(e)
                }
                ))
            }
            ))
        }
        ).call(this, i("yLpj"), i("EVdn"))
    },
    hMnm: function(e, t, i) {
        "use strict";
        (function(e, i, n) {
            function s(e, t) {
                if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function")
            }
            function o(e, t) {
                for (var i = 0; i < t.length; i++) {
                    var n = t[i];
                    n.enumerable = n.enumerable || !1,
                    n.configurable = !0,
                    "value"in n && (n.writable = !0),
                    Object.defineProperty(e, n.key, n)
                }
            }
            var r = void 0 !== e && "[object global]" === {}.toString.call(e);
            function a(e, t) {
                return 0 === e.indexOf(t.toLowerCase()) ? e : "".concat(t.toLowerCase()).concat(e.substr(0, 1).toUpperCase()).concat(e.substr(1))
            }
            function l(e) {
                return Boolean(e && 1 === e.nodeType && "nodeName"in e && e.ownerDocument && e.ownerDocument.defaultView)
            }
            function c(e) {
                return !isNaN(parseFloat(e)) && isFinite(e) && Math.floor(e) == e
            }
            function d(e) {
                return /^(https?:)?\/\/((player|www)\.)?vimeo\.com(?=$|\/)/.test(e)
            }
            function u() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
                  , t = e.id
                  , i = e.url
                  , n = t || i;
                if (!n)
                    throw new Error("An id or url must be passed, either in an options object or as a data-vimeo-id or data-vimeo-url attribute.");
                if (c(n))
                    return "https://vimeo.com/".concat(n);
                if (d(n))
                    return n.replace("http:", "https:");
                if (t)
                    throw new TypeError("“".concat(t, "” is not a valid video id."));
                throw new TypeError("“".concat(n, "” is not a vimeo.com url."))
            }
            var h = void 0 !== Array.prototype.indexOf
              , p = "undefined" != typeof window && void 0 !== window.postMessage;
            if (!(r || h && p))
                throw new Error("Sorry, the Vimeo Player API is not available in this browser.");
            var f = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : void 0 !== e ? e : "undefined" != typeof self ? self : {};
            !function(e) {
                if (!e.WeakMap) {
                    var t = Object.prototype.hasOwnProperty
                      , i = function(e, t, i) {
                        Object.defineProperty ? Object.defineProperty(e, t, {
                            configurable: !0,
                            writable: !0,
                            value: i
                        }) : e[t] = i
                    };
                    e.WeakMap = function() {
                        function e() {
                            if (void 0 === this)
                                throw new TypeError("Constructor WeakMap requires 'new'");
                            if (i(this, "_id", o("_WeakMap")),
                            arguments.length > 0)
                                throw new TypeError("WeakMap iterable is not supported")
                        }
                        function s(e, i) {
                            if (!n(e) || !t.call(e, "_id"))
                                throw new TypeError(i + " method called on incompatible receiver " + typeof e)
                        }
                        function o(e) {
                            return e + "_" + r() + "." + r()
                        }
                        function r() {
                            return Math.random().toString().substring(2)
                        }
                        return i(e.prototype, "delete", (function(e) {
                            if (s(this, "delete"),
                            !n(e))
                                return !1;
                            var t = e[this._id];
                            return !(!t || t[0] !== e) && (delete e[this._id],
                            !0)
                        }
                        )),
                        i(e.prototype, "get", (function(e) {
                            if (s(this, "get"),
                            n(e)) {
                                var t = e[this._id];
                                return t && t[0] === e ? t[1] : void 0
                            }
                        }
                        )),
                        i(e.prototype, "has", (function(e) {
                            if (s(this, "has"),
                            !n(e))
                                return !1;
                            var t = e[this._id];
                            return !(!t || t[0] !== e)
                        }
                        )),
                        i(e.prototype, "set", (function(e, t) {
                            if (s(this, "set"),
                            !n(e))
                                throw new TypeError("Invalid value used as weak map key");
                            var o = e[this._id];
                            return o && o[0] === e ? (o[1] = t,
                            this) : (i(e, this._id, [e, t]),
                            this)
                        }
                        )),
                        i(e, "_polyfill", !0),
                        e
                    }()
                }
                function n(e) {
                    return Object(e) === e
                }
            }("undefined" != typeof self ? self : "undefined" != typeof window ? window : f);
            var m = function(e, t) {
                return e(t = {
                    exports: {}
                }, t.exports),
                t.exports
            }((function(e) {
                var t, n, s;
                s = function() {
                    var e, t, n, s = Object.prototype.toString, o = void 0 !== i ? function(e) {
                        return i(e)
                    }
                    : setTimeout;
                    try {
                        Object.defineProperty({}, "x", {}),
                        e = function(e, t, i, n) {
                            return Object.defineProperty(e, t, {
                                value: i,
                                writable: !0,
                                configurable: !1 !== n
                            })
                        }
                    } catch (t) {
                        e = function(e, t, i) {
                            return e[t] = i,
                            e
                        }
                    }
                    function r(e, i) {
                        n.add(e, i),
                        t || (t = o(n.drain))
                    }
                    function a(e) {
                        var t, i = typeof e;
                        return null == e || "object" != i && "function" != i || (t = e.then),
                        "function" == typeof t && t
                    }
                    function l() {
                        for (var e = 0; e < this.chain.length; e++)
                            c(this, 1 === this.state ? this.chain[e].success : this.chain[e].failure, this.chain[e]);
                        this.chain.length = 0
                    }
                    function c(e, t, i) {
                        var n, s;
                        try {
                            !1 === t ? i.reject(e.msg) : (n = !0 === t ? e.msg : t.call(void 0, e.msg)) === i.promise ? i.reject(TypeError("Promise-chain cycle")) : (s = a(n)) ? s.call(n, i.resolve, i.reject) : i.resolve(n)
                        } catch (e) {
                            i.reject(e)
                        }
                    }
                    function d(e) {
                        var t, i = this;
                        if (!i.triggered) {
                            i.triggered = !0,
                            i.def && (i = i.def);
                            try {
                                (t = a(e)) ? r((function() {
                                    var n = new p(i);
                                    try {
                                        t.call(e, (function() {
                                            d.apply(n, arguments)
                                        }
                                        ), (function() {
                                            u.apply(n, arguments)
                                        }
                                        ))
                                    } catch (e) {
                                        u.call(n, e)
                                    }
                                }
                                )) : (i.msg = e,
                                i.state = 1,
                                i.chain.length > 0 && r(l, i))
                            } catch (e) {
                                u.call(new p(i), e)
                            }
                        }
                    }
                    function u(e) {
                        var t = this;
                        t.triggered || (t.triggered = !0,
                        t.def && (t = t.def),
                        t.msg = e,
                        t.state = 2,
                        t.chain.length > 0 && r(l, t))
                    }
                    function h(e, t, i, n) {
                        for (var s = 0; s < t.length; s++)
                            !function(s) {
                                e.resolve(t[s]).then((function(e) {
                                    i(s, e)
                                }
                                ), n)
                            }(s)
                    }
                    function p(e) {
                        this.def = e,
                        this.triggered = !1
                    }
                    function f(e) {
                        this.promise = e,
                        this.state = 0,
                        this.triggered = !1,
                        this.chain = [],
                        this.msg = void 0
                    }
                    function m(e) {
                        if ("function" != typeof e)
                            throw TypeError("Not a function");
                        if (0 !== this.__NPO__)
                            throw TypeError("Not a promise");
                        this.__NPO__ = 1;
                        var t = new f(this);
                        this.then = function(e, i) {
                            var n = {
                                success: "function" != typeof e || e,
                                failure: "function" == typeof i && i
                            };
                            return n.promise = new this.constructor((function(e, t) {
                                if ("function" != typeof e || "function" != typeof t)
                                    throw TypeError("Not a function");
                                n.resolve = e,
                                n.reject = t
                            }
                            )),
                            t.chain.push(n),
                            0 !== t.state && r(l, t),
                            n.promise
                        }
                        ,
                        this.catch = function(e) {
                            return this.then(void 0, e)
                        }
                        ;
                        try {
                            e.call(void 0, (function(e) {
                                d.call(t, e)
                            }
                            ), (function(e) {
                                u.call(t, e)
                            }
                            ))
                        } catch (e) {
                            u.call(t, e)
                        }
                    }
                    n = function() {
                        var e, i, n;
                        function s(e, t) {
                            this.fn = e,
                            this.self = t,
                            this.next = void 0
                        }
                        return {
                            add: function(t, o) {
                                n = new s(t,o),
                                i ? i.next = n : e = n,
                                i = n,
                                n = void 0
                            },
                            drain: function() {
                                var n = e;
                                for (e = i = t = void 0; n; )
                                    n.fn.call(n.self),
                                    n = n.next
                            }
                        }
                    }();
                    var g = e({}, "constructor", m, !1);
                    return m.prototype = g,
                    e(g, "__NPO__", 0, !1),
                    e(m, "resolve", (function(e) {
                        return e && "object" == typeof e && 1 === e.__NPO__ ? e : new this((function(t, i) {
                            if ("function" != typeof t || "function" != typeof i)
                                throw TypeError("Not a function");
                            t(e)
                        }
                        ))
                    }
                    )),
                    e(m, "reject", (function(e) {
                        return new this((function(t, i) {
                            if ("function" != typeof t || "function" != typeof i)
                                throw TypeError("Not a function");
                            i(e)
                        }
                        ))
                    }
                    )),
                    e(m, "all", (function(e) {
                        var t = this;
                        return "[object Array]" != s.call(e) ? t.reject(TypeError("Not an array")) : 0 === e.length ? t.resolve([]) : new t((function(i, n) {
                            if ("function" != typeof i || "function" != typeof n)
                                throw TypeError("Not a function");
                            var s = e.length
                              , o = Array(s)
                              , r = 0;
                            h(t, e, (function(e, t) {
                                o[e] = t,
                                ++r === s && i(o)
                            }
                            ), n)
                        }
                        ))
                    }
                    )),
                    e(m, "race", (function(e) {
                        var t = this;
                        return "[object Array]" != s.call(e) ? t.reject(TypeError("Not an array")) : new t((function(i, n) {
                            if ("function" != typeof i || "function" != typeof n)
                                throw TypeError("Not a function");
                            h(t, e, (function(e, t) {
                                i(t)
                            }
                            ), n)
                        }
                        ))
                    }
                    )),
                    m
                }
                ,
                (n = f)[t = "Promise"] = n[t] || s(),
                e.exports && (e.exports = n[t])
            }
            ))
              , g = new WeakMap;
            function y(e, t, i) {
                var n = g.get(e.element) || {};
                t in n || (n[t] = []),
                n[t].push(i),
                g.set(e.element, n)
            }
            function v(e, t) {
                return (g.get(e.element) || {})[t] || []
            }
            function b(e, t, i) {
                var n = g.get(e.element) || {};
                if (!n[t])
                    return !0;
                if (!i)
                    return n[t] = [],
                    g.set(e.element, n),
                    !0;
                var s = n[t].indexOf(i);
                return -1 !== s && n[t].splice(s, 1),
                g.set(e.element, n),
                n[t] && 0 === n[t].length
            }
            function w(e, t) {
                var i = g.get(e);
                g.set(t, i),
                g.delete(e)
            }
            var T = ["autopause", "autoplay", "background", "byline", "color", "controls", "dnt", "height", "id", "keyboard", "loop", "maxheight", "maxwidth", "muted", "playsinline", "portrait", "responsive", "speed", "texttrack", "title", "transparent", "url", "width"];
            function k(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                return T.reduce((function(t, i) {
                    var n = e.getAttribute("data-vimeo-".concat(i));
                    return (n || "" === n) && (t[i] = "" === n ? 1 : n),
                    t
                }
                ), t)
            }
            function C(e, t) {
                var i = e.html;
                if (!t)
                    throw new TypeError("An element must be provided");
                if (null !== t.getAttribute("data-vimeo-initialized"))
                    return t.querySelector("iframe");
                var n = document.createElement("div");
                return n.innerHTML = i,
                t.appendChild(n.firstChild),
                t.setAttribute("data-vimeo-initialized", "true"),
                t.querySelector("iframe")
            }
            function x(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
                  , i = arguments.length > 2 ? arguments[2] : void 0;
                return new Promise((function(n, s) {
                    if (!d(e))
                        throw new TypeError("“".concat(e, "” is not a vimeo.com url."));
                    var o = "https://vimeo.com/api/oembed.json?url=".concat(encodeURIComponent(e));
                    for (var r in t)
                        t.hasOwnProperty(r) && (o += "&".concat(r, "=").concat(encodeURIComponent(t[r])));
                    var a = "XDomainRequest"in window ? new XDomainRequest : new XMLHttpRequest;
                    a.open("GET", o, !0),
                    a.onload = function() {
                        if (404 !== a.status)
                            if (403 !== a.status)
                                try {
                                    var t = JSON.parse(a.responseText);
                                    if (403 === t.domain_status_code)
                                        return C(t, i),
                                        void s(new Error("“".concat(e, "” is not embeddable.")));
                                    n(t)
                                } catch (e) {
                                    s(e)
                                }
                            else
                                s(new Error("“".concat(e, "” is not embeddable.")));
                        else
                            s(new Error("“".concat(e, "” was not found.")))
                    }
                    ,
                    a.onerror = function() {
                        var e = a.status ? " (".concat(a.status, ")") : "";
                        s(new Error("There was an error fetching the embed code from Vimeo".concat(e, ".")))
                    }
                    ,
                    a.send()
                }
                ))
            }
            function _(e) {
                if ("string" == typeof e)
                    try {
                        e = JSON.parse(e)
                    } catch (e) {
                        return console.warn(e),
                        {}
                    }
                return e
            }
            function A(e, t, i) {
                if (e.element.contentWindow && e.element.contentWindow.postMessage) {
                    var n = {
                        method: t
                    };
                    void 0 !== i && (n.value = i);
                    var s = parseFloat(navigator.userAgent.toLowerCase().replace(/^.*msie (\d+).*$/, "$1"));
                    s >= 8 && s < 10 && (n = JSON.stringify(n)),
                    e.element.contentWindow.postMessage(n, e.origin)
                }
            }
            function E(e, t) {
                var i, n = [];
                if ((t = _(t)).event) {
                    if ("error" === t.event)
                        v(e, t.data.method).forEach((function(i) {
                            var n = new Error(t.data.message);
                            n.name = t.data.name,
                            i.reject(n),
                            b(e, t.data.method, i)
                        }
                        ));
                    n = v(e, "event:".concat(t.event)),
                    i = t.data
                } else if (t.method) {
                    var s = function(e, t) {
                        var i = v(e, t);
                        if (i.length < 1)
                            return !1;
                        var n = i.shift();
                        return b(e, t, n),
                        n
                    }(e, t.method);
                    s && (n.push(s),
                    i = t.value)
                }
                n.forEach((function(t) {
                    try {
                        if ("function" == typeof t)
                            return void t.call(e, i);
                        t.resolve(i)
                    } catch (e) {}
                }
                ))
            }
            var S = new WeakMap
              , L = new WeakMap
              , P = {}
              , O = function() {
                function e(t) {
                    var i = this
                      , o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    if (s(this, e),
                    n && t instanceof jQuery && (t.length > 1 && window.console && console.warn && console.warn("A jQuery object with multiple elements was passed, using the first element."),
                    t = t[0]),
                    "undefined" != typeof document && "string" == typeof t && (t = document.getElementById(t)),
                    !l(t))
                        throw new TypeError("You must pass either a valid element or a valid id.");
                    if ("IFRAME" !== t.nodeName) {
                        var r = t.querySelector("iframe");
                        r && (t = r)
                    }
                    if ("IFRAME" === t.nodeName && !d(t.getAttribute("src") || ""))
                        throw new Error("The player element passed isn’t a Vimeo embed.");
                    if (S.has(t))
                        return S.get(t);
                    this._window = t.ownerDocument.defaultView,
                    this.element = t,
                    this.origin = "*";
                    var a = new m((function(e, n) {
                        if (i._onMessage = function(t) {
                            if (d(t.origin) && i.element.contentWindow === t.source) {
                                "*" === i.origin && (i.origin = t.origin);
                                var s = _(t.data);
                                if (s && "error" === s.event && s.data && "ready" === s.data.method) {
                                    var o = new Error(s.data.message);
                                    return o.name = s.data.name,
                                    void n(o)
                                }
                                var r = s && "ready" === s.event
                                  , a = s && "ping" === s.method;
                                if (r || a)
                                    return i.element.setAttribute("data-ready", "true"),
                                    void e();
                                E(i, s)
                            }
                        }
                        ,
                        i._window.addEventListener("message", i._onMessage),
                        "IFRAME" !== i.element.nodeName) {
                            var s = k(t, o);
                            x(u(s), s, t).then((function(e) {
                                var n = C(e, t);
                                return i.element = n,
                                i._originalElement = t,
                                w(t, n),
                                S.set(i.element, i),
                                e
                            }
                            )).catch(n)
                        }
                    }
                    ));
                    if (L.set(this, a),
                    S.set(this.element, this),
                    "IFRAME" === this.element.nodeName && A(this, "ping"),
                    P.isEnabled) {
                        var c = function() {
                            return P.exit()
                        };
                        P.on("fullscreenchange", (function() {
                            P.isFullscreen ? y(i, "event:exitFullscreen", c) : b(i, "event:exitFullscreen", c),
                            i.ready().then((function() {
                                A(i, "fullscreenchange", P.isFullscreen)
                            }
                            ))
                        }
                        ))
                    }
                    return this
                }
                var t, i, r;
                return t = e,
                (i = [{
                    key: "callMethod",
                    value: function(e) {
                        var t = this
                          , i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                        return new m((function(n, s) {
                            return t.ready().then((function() {
                                y(t, e, {
                                    resolve: n,
                                    reject: s
                                }),
                                A(t, e, i)
                            }
                            )).catch(s)
                        }
                        ))
                    }
                }, {
                    key: "get",
                    value: function(e) {
                        var t = this;
                        return new m((function(i, n) {
                            return e = a(e, "get"),
                            t.ready().then((function() {
                                y(t, e, {
                                    resolve: i,
                                    reject: n
                                }),
                                A(t, e)
                            }
                            )).catch(n)
                        }
                        ))
                    }
                }, {
                    key: "set",
                    value: function(e, t) {
                        var i = this;
                        return new m((function(n, s) {
                            if (e = a(e, "set"),
                            null == t)
                                throw new TypeError("There must be a value to set.");
                            return i.ready().then((function() {
                                y(i, e, {
                                    resolve: n,
                                    reject: s
                                }),
                                A(i, e, t)
                            }
                            )).catch(s)
                        }
                        ))
                    }
                }, {
                    key: "on",
                    value: function(e, t) {
                        if (!e)
                            throw new TypeError("You must pass an event name.");
                        if (!t)
                            throw new TypeError("You must pass a callback function.");
                        if ("function" != typeof t)
                            throw new TypeError("The callback must be a function.");
                        0 === v(this, "event:".concat(e)).length && this.callMethod("addEventListener", e).catch((function() {}
                        )),
                        y(this, "event:".concat(e), t)
                    }
                }, {
                    key: "off",
                    value: function(e, t) {
                        if (!e)
                            throw new TypeError("You must pass an event name.");
                        if (t && "function" != typeof t)
                            throw new TypeError("The callback must be a function.");
                        b(this, "event:".concat(e), t) && this.callMethod("removeEventListener", e).catch((function(e) {}
                        ))
                    }
                }, {
                    key: "loadVideo",
                    value: function(e) {
                        return this.callMethod("loadVideo", e)
                    }
                }, {
                    key: "ready",
                    value: function() {
                        var e = L.get(this) || new m((function(e, t) {
                            t(new Error("Unknown player. Probably unloaded."))
                        }
                        ));
                        return m.resolve(e)
                    }
                }, {
                    key: "addCuePoint",
                    value: function(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                        return this.callMethod("addCuePoint", {
                            time: e,
                            data: t
                        })
                    }
                }, {
                    key: "removeCuePoint",
                    value: function(e) {
                        return this.callMethod("removeCuePoint", e)
                    }
                }, {
                    key: "enableTextTrack",
                    value: function(e, t) {
                        if (!e)
                            throw new TypeError("You must pass a language.");
                        return this.callMethod("enableTextTrack", {
                            language: e,
                            kind: t
                        })
                    }
                }, {
                    key: "disableTextTrack",
                    value: function() {
                        return this.callMethod("disableTextTrack")
                    }
                }, {
                    key: "pause",
                    value: function() {
                        return this.callMethod("pause")
                    }
                }, {
                    key: "play",
                    value: function() {
                        return this.callMethod("play")
                    }
                }, {
                    key: "requestFullscreen",
                    value: function() {
                        return P.isEnabled ? P.request(this.element) : this.callMethod("requestFullscreen")
                    }
                }, {
                    key: "exitFullscreen",
                    value: function() {
                        return P.isEnabled ? P.exit() : this.callMethod("exitFullscreen")
                    }
                }, {
                    key: "getFullscreen",
                    value: function() {
                        return P.isEnabled ? m.resolve(P.isFullscreen) : this.get("fullscreen")
                    }
                }, {
                    key: "requestPictureInPicture",
                    value: function() {
                        return this.callMethod("requestPictureInPicture")
                    }
                }, {
                    key: "exitPictureInPicture",
                    value: function() {
                        return this.callMethod("exitPictureInPicture")
                    }
                }, {
                    key: "getPictureInPicture",
                    value: function() {
                        return this.get("pictureInPicture")
                    }
                }, {
                    key: "unload",
                    value: function() {
                        return this.callMethod("unload")
                    }
                }, {
                    key: "destroy",
                    value: function() {
                        var e = this;
                        return new m((function(t) {
                            if (L.delete(e),
                            S.delete(e.element),
                            e._originalElement && (S.delete(e._originalElement),
                            e._originalElement.removeAttribute("data-vimeo-initialized")),
                            e.element && "IFRAME" === e.element.nodeName && e.element.parentNode && (e.element.parentNode.parentNode && e._originalElement && e._originalElement !== e.element.parentNode ? e.element.parentNode.parentNode.removeChild(e.element.parentNode) : e.element.parentNode.removeChild(e.element)),
                            e.element && "DIV" === e.element.nodeName && e.element.parentNode) {
                                e.element.removeAttribute("data-vimeo-initialized");
                                var i = e.element.querySelector("iframe");
                                i && i.parentNode && (i.parentNode.parentNode && e._originalElement && e._originalElement !== i.parentNode ? i.parentNode.parentNode.removeChild(i.parentNode) : i.parentNode.removeChild(i))
                            }
                            e._window.removeEventListener("message", e._onMessage),
                            t()
                        }
                        ))
                    }
                }, {
                    key: "getAutopause",
                    value: function() {
                        return this.get("autopause")
                    }
                }, {
                    key: "setAutopause",
                    value: function(e) {
                        return this.set("autopause", e)
                    }
                }, {
                    key: "getBuffered",
                    value: function() {
                        return this.get("buffered")
                    }
                }, {
                    key: "getCameraProps",
                    value: function() {
                        return this.get("cameraProps")
                    }
                }, {
                    key: "setCameraProps",
                    value: function(e) {
                        return this.set("cameraProps", e)
                    }
                }, {
                    key: "getChapters",
                    value: function() {
                        return this.get("chapters")
                    }
                }, {
                    key: "getCurrentChapter",
                    value: function() {
                        return this.get("currentChapter")
                    }
                }, {
                    key: "getColor",
                    value: function() {
                        return this.get("color")
                    }
                }, {
                    key: "setColor",
                    value: function(e) {
                        return this.set("color", e)
                    }
                }, {
                    key: "getCuePoints",
                    value: function() {
                        return this.get("cuePoints")
                    }
                }, {
                    key: "getCurrentTime",
                    value: function() {
                        return this.get("currentTime")
                    }
                }, {
                    key: "setCurrentTime",
                    value: function(e) {
                        return this.set("currentTime", e)
                    }
                }, {
                    key: "getDuration",
                    value: function() {
                        return this.get("duration")
                    }
                }, {
                    key: "getEnded",
                    value: function() {
                        return this.get("ended")
                    }
                }, {
                    key: "getLoop",
                    value: function() {
                        return this.get("loop")
                    }
                }, {
                    key: "setLoop",
                    value: function(e) {
                        return this.set("loop", e)
                    }
                }, {
                    key: "setMuted",
                    value: function(e) {
                        return this.set("muted", e)
                    }
                }, {
                    key: "getMuted",
                    value: function() {
                        return this.get("muted")
                    }
                }, {
                    key: "getPaused",
                    value: function() {
                        return this.get("paused")
                    }
                }, {
                    key: "getPlaybackRate",
                    value: function() {
                        return this.get("playbackRate")
                    }
                }, {
                    key: "setPlaybackRate",
                    value: function(e) {
                        return this.set("playbackRate", e)
                    }
                }, {
                    key: "getPlayed",
                    value: function() {
                        return this.get("played")
                    }
                }, {
                    key: "getQualities",
                    value: function() {
                        return this.get("qualities")
                    }
                }, {
                    key: "getQuality",
                    value: function() {
                        return this.get("quality")
                    }
                }, {
                    key: "setQuality",
                    value: function(e) {
                        return this.set("quality", e)
                    }
                }, {
                    key: "getSeekable",
                    value: function() {
                        return this.get("seekable")
                    }
                }, {
                    key: "getSeeking",
                    value: function() {
                        return this.get("seeking")
                    }
                }, {
                    key: "getTextTracks",
                    value: function() {
                        return this.get("textTracks")
                    }
                }, {
                    key: "getVideoEmbedCode",
                    value: function() {
                        return this.get("videoEmbedCode")
                    }
                }, {
                    key: "getVideoId",
                    value: function() {
                        return this.get("videoId")
                    }
                }, {
                    key: "getVideoTitle",
                    value: function() {
                        return this.get("videoTitle")
                    }
                }, {
                    key: "getVideoWidth",
                    value: function() {
                        return this.get("videoWidth")
                    }
                }, {
                    key: "getVideoHeight",
                    value: function() {
                        return this.get("videoHeight")
                    }
                }, {
                    key: "getVideoUrl",
                    value: function() {
                        return this.get("videoUrl")
                    }
                }, {
                    key: "getVolume",
                    value: function() {
                        return this.get("volume")
                    }
                }, {
                    key: "setVolume",
                    value: function(e) {
                        return this.set("volume", e)
                    }
                }]) && o(t.prototype, i),
                r && o(t, r),
                e
            }();
            r || (P = function() {
                var e = function() {
                    for (var e, t = [["requestFullscreen", "exitFullscreen", "fullscreenElement", "fullscreenEnabled", "fullscreenchange", "fullscreenerror"], ["webkitRequestFullscreen", "webkitExitFullscreen", "webkitFullscreenElement", "webkitFullscreenEnabled", "webkitfullscreenchange", "webkitfullscreenerror"], ["webkitRequestFullScreen", "webkitCancelFullScreen", "webkitCurrentFullScreenElement", "webkitCancelFullScreen", "webkitfullscreenchange", "webkitfullscreenerror"], ["mozRequestFullScreen", "mozCancelFullScreen", "mozFullScreenElement", "mozFullScreenEnabled", "mozfullscreenchange", "mozfullscreenerror"], ["msRequestFullscreen", "msExitFullscreen", "msFullscreenElement", "msFullscreenEnabled", "MSFullscreenChange", "MSFullscreenError"]], i = 0, n = t.length, s = {}; i < n; i++)
                        if ((e = t[i]) && e[1]in document) {
                            for (i = 0; i < e.length; i++)
                                s[t[0][i]] = e[i];
                            return s
                        }
                    return !1
                }()
                  , t = {
                    fullscreenchange: e.fullscreenchange,
                    fullscreenerror: e.fullscreenerror
                }
                  , i = {
                    request: function(t) {
                        return new Promise((function(n, s) {
                            var o = function e() {
                                i.off("fullscreenchange", e),
                                n()
                            };
                            i.on("fullscreenchange", o);
                            var r = (t = t || document.documentElement)[e.requestFullscreen]();
                            r instanceof Promise && r.then(o).catch(s)
                        }
                        ))
                    },
                    exit: function() {
                        return new Promise((function(t, n) {
                            if (i.isFullscreen) {
                                var s = function e() {
                                    i.off("fullscreenchange", e),
                                    t()
                                };
                                i.on("fullscreenchange", s);
                                var o = document[e.exitFullscreen]();
                                o instanceof Promise && o.then(s).catch(n)
                            } else
                                t()
                        }
                        ))
                    },
                    on: function(e, i) {
                        var n = t[e];
                        n && document.addEventListener(n, i)
                    },
                    off: function(e, i) {
                        var n = t[e];
                        n && document.removeEventListener(n, i)
                    }
                };
                return Object.defineProperties(i, {
                    isFullscreen: {
                        get: function() {
                            return Boolean(document[e.fullscreenElement])
                        }
                    },
                    element: {
                        enumerable: !0,
                        get: function() {
                            return document[e.fullscreenElement]
                        }
                    },
                    isEnabled: {
                        enumerable: !0,
                        get: function() {
                            return Boolean(document[e.fullscreenEnabled])
                        }
                    }
                }),
                i
            }(),
            function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : document
                  , t = [].slice.call(e.querySelectorAll("[data-vimeo-id], [data-vimeo-url]"))
                  , i = function(e) {
                    "console"in window && console.error && console.error("There was an error creating an embed: ".concat(e))
                };
                t.forEach((function(e) {
                    try {
                        if (null !== e.getAttribute("data-vimeo-defer"))
                            return;
                        var t = k(e);
                        x(u(t), t, e).then((function(t) {
                            return C(t, e)
                        }
                        )).catch(i)
                    } catch (e) {
                        i(e)
                    }
                }
                ))
            }(),
            function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : document;
                if (!window.VimeoPlayerResizeEmbeds_) {
                    window.VimeoPlayerResizeEmbeds_ = !0;
                    var t = function(t) {
                        if (d(t.origin) && t.data && "spacechange" === t.data.event)
                            for (var i = e.querySelectorAll("iframe"), n = 0; n < i.length; n++)
                                if (i[n].contentWindow === t.source) {
                                    i[n].parentElement.style.paddingBottom = "".concat(t.data.data[0].bottom, "px");
                                    break
                                }
                    };
                    window.addEventListener("message", t)
                }
            }()),
            t.a = O
        }
        ).call(this, i("yLpj"), i("URgk").setImmediate, i("EVdn"))
    },
    j4iJ: function(e, t, i) {
        (function(t) {
            var n;
            n = function(e) {
                "use strict";
                function i(e) {
                    return (i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                        return typeof e
                    }
                    : function(e) {
                        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                    }
                    )(e)
                }
                function n() {
                    return (n = Object.assign || function(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var i = arguments[t];
                            for (var n in i)
                                Object.prototype.hasOwnProperty.call(i, n) && (e[n] = i[n])
                        }
                        return e
                    }
                    ).apply(this, arguments)
                }
                function s(e, t) {
                    return function(e) {
                        if (Array.isArray(e))
                            return e
                    }(e) || function(e, t) {
                        if (Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e)) {
                            var i = []
                              , n = !0
                              , s = !1
                              , o = void 0;
                            try {
                                for (var r, a = e[Symbol.iterator](); !(n = (r = a.next()).done) && (i.push(r.value),
                                !t || i.length !== t); n = !0)
                                    ;
                            } catch (e) {
                                s = !0,
                                o = e
                            } finally {
                                try {
                                    n || null == a.return || a.return()
                                } finally {
                                    if (s)
                                        throw o
                                }
                            }
                            return i
                        }
                    }(e, t) || function() {
                        throw new TypeError("Invalid attempt to destructure non-iterable instance")
                    }()
                }
                function o(e) {
                    return function(e) {
                        if (Array.isArray(e)) {
                            for (var t = 0, i = new Array(e.length); t < e.length; t++)
                                i[t] = e[t];
                            return i
                        }
                    }(e) || function(e) {
                        if (Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e))
                            return Array.from(e)
                    }(e) || function() {
                        throw new TypeError("Invalid attempt to spread non-iterable instance")
                    }()
                }
                var r = 1
                  , a = {}
                  , l = {
                    attr: function(e, t, i) {
                        var n, s, o, r = new RegExp("^" + t,"i");
                        if (void 0 === i)
                            i = {};
                        else
                            for (n in i)
                                i.hasOwnProperty(n) && delete i[n];
                        if (!e)
                            return i;
                        for (n = (o = e.attributes).length; n--; )
                            (s = o[n]) && s.specified && r.test(s.name) && (i[this.camelize(s.name.slice(t.length))] = this.deserializeValue(s.value));
                        return i
                    },
                    checkAttr: function(e, t, i) {
                        return e.hasAttribute(t + i)
                    },
                    setAttr: function(e, t, i, n) {
                        e.setAttribute(this.dasherize(t + i), String(n))
                    },
                    getType: function(e) {
                        return e.getAttribute("type") || "text"
                    },
                    generateID: function() {
                        return "" + r++
                    },
                    deserializeValue: function(e) {
                        var t;
                        try {
                            return e ? "true" == e || "false" != e && ("null" == e ? null : isNaN(t = Number(e)) ? /^[\[\{]/.test(e) ? JSON.parse(e) : e : t) : e
                        } catch (t) {
                            return e
                        }
                    },
                    camelize: function(e) {
                        return e.replace(/-+(.)?/g, (function(e, t) {
                            return t ? t.toUpperCase() : ""
                        }
                        ))
                    },
                    dasherize: function(e) {
                        return e.replace(/::/g, "/").replace(/([A-Z]+)([A-Z][a-z])/g, "$1_$2").replace(/([a-z\d])([A-Z])/g, "$1_$2").replace(/_/g, "-").toLowerCase()
                    },
                    warn: function() {
                        var e;
                        window.console && "function" == typeof window.console.warn && (e = window.console).warn.apply(e, arguments)
                    },
                    warnOnce: function(e) {
                        a[e] || (a[e] = !0,
                        this.warn.apply(this, arguments))
                    },
                    _resetWarnings: function() {
                        a = {}
                    },
                    trimString: function(e) {
                        return e.replace(/^\s+|\s+$/g, "")
                    },
                    parse: {
                        date: function(e) {
                            var t = e.match(/^(\d{4,})-(\d\d)-(\d\d)$/);
                            if (!t)
                                return null;
                            var i = s(t.map((function(e) {
                                return parseInt(e, 10)
                            }
                            )), 4)
                              , n = (i[0],
                            i[1])
                              , o = i[2]
                              , r = i[3]
                              , a = new Date(n,o - 1,r);
                            return a.getFullYear() !== n || a.getMonth() + 1 !== o || a.getDate() !== r ? null : a
                        },
                        string: function(e) {
                            return e
                        },
                        integer: function(e) {
                            return isNaN(e) ? null : parseInt(e, 10)
                        },
                        number: function(e) {
                            if (isNaN(e))
                                throw null;
                            return parseFloat(e)
                        },
                        boolean: function(e) {
                            return !/^\s*false\s*$/i.test(e)
                        },
                        object: function(e) {
                            return l.deserializeValue(e)
                        },
                        regexp: function(e) {
                            var t = "";
                            return /^\/.*\/(?:[gimy]*)$/.test(e) ? (t = e.replace(/.*\/([gimy]*)$/, "$1"),
                            e = e.replace(new RegExp("^/(.*?)/" + t + "$"), "$1")) : e = "^" + e + "$",
                            new RegExp(e,t)
                        }
                    },
                    parseRequirement: function(e, t) {
                        var i = this.parse[e || "string"];
                        if (!i)
                            throw 'Unknown requirement specification: "' + e + '"';
                        var n = i(t);
                        if (null === n)
                            throw "Requirement is not a ".concat(e, ': "').concat(t, '"');
                        return n
                    },
                    namespaceEvents: function(t, i) {
                        return (t = this.trimString(t || "").split(/\s+/))[0] ? e.map(t, (function(e) {
                            return "".concat(e, ".").concat(i)
                        }
                        )).join(" ") : ""
                    },
                    difference: function(t, i) {
                        var n = [];
                        return e.each(t, (function(e, t) {
                            -1 == i.indexOf(t) && n.push(t)
                        }
                        )),
                        n
                    },
                    all: function(t) {
                        return e.when.apply(e, o(t).concat([42, 42]))
                    },
                    objectCreate: Object.create || function() {
                        var e = function() {};
                        return function(t) {
                            if (arguments.length > 1)
                                throw Error("Second argument not supported");
                            if ("object" != i(t))
                                throw TypeError("Argument must be an object");
                            e.prototype = t;
                            var n = new e;
                            return e.prototype = null,
                            n
                        }
                    }(),
                    _SubmitSelector: 'input[type="submit"], button:submit'
                }
                  , c = {
                    namespace: "data-parsley-",
                    inputs: "input, textarea, select",
                    excluded: "input[type=button], input[type=submit], input[type=reset], input[type=hidden]",
                    priorityEnabled: !0,
                    multiple: null,
                    group: null,
                    uiEnabled: !0,
                    validationThreshold: 3,
                    focus: "first",
                    trigger: !1,
                    triggerAfterFailure: "input",
                    errorClass: "parsley-error",
                    successClass: "parsley-success",
                    classHandler: function(e) {},
                    errorsContainer: function(e) {},
                    errorsWrapper: '<ul class="parsley-errors-list"></ul>',
                    errorTemplate: "<li></li>"
                }
                  , d = function() {
                    this.__id__ = l.generateID()
                };
                d.prototype = {
                    asyncSupport: !0,
                    _pipeAccordingToValidationResult: function() {
                        var t = this
                          , i = function() {
                            var i = e.Deferred();
                            return !0 !== t.validationResult && i.reject(),
                            i.resolve().promise()
                        };
                        return [i, i]
                    },
                    actualizeOptions: function() {
                        return l.attr(this.element, this.options.namespace, this.domOptions),
                        this.parent && this.parent.actualizeOptions && this.parent.actualizeOptions(),
                        this
                    },
                    _resetOptions: function(e) {
                        for (var t in this.domOptions = l.objectCreate(this.parent.options),
                        this.options = l.objectCreate(this.domOptions),
                        e)
                            e.hasOwnProperty(t) && (this.options[t] = e[t]);
                        this.actualizeOptions()
                    },
                    _listeners: null,
                    on: function(e, t) {
                        return this._listeners = this._listeners || {},
                        (this._listeners[e] = this._listeners[e] || []).push(t),
                        this
                    },
                    subscribe: function(t, i) {
                        e.listenTo(this, t.toLowerCase(), i)
                    },
                    off: function(e, t) {
                        var i = this._listeners && this._listeners[e];
                        if (i)
                            if (t)
                                for (var n = i.length; n--; )
                                    i[n] === t && i.splice(n, 1);
                            else
                                delete this._listeners[e];
                        return this
                    },
                    unsubscribe: function(t, i) {
                        e.unsubscribeTo(this, t.toLowerCase())
                    },
                    trigger: function(e, t, i) {
                        t = t || this;
                        var n, s = this._listeners && this._listeners[e];
                        if (s)
                            for (var o = s.length; o--; )
                                if (!1 === (n = s[o].call(t, t, i)))
                                    return n;
                        return !this.parent || this.parent.trigger(e, t, i)
                    },
                    asyncIsValid: function(e, t) {
                        return l.warnOnce("asyncIsValid is deprecated; please use whenValid instead"),
                        this.whenValid({
                            group: e,
                            force: t
                        })
                    },
                    _findRelated: function() {
                        return this.options.multiple ? e(this.parent.element.querySelectorAll("[".concat(this.options.namespace, 'multiple="').concat(this.options.multiple, '"]'))) : this.$element
                    }
                };
                var u = function(t) {
                    e.extend(!0, this, t)
                };
                u.prototype = {
                    validate: function(e, t) {
                        if (this.fn)
                            return arguments.length > 3 && (t = [].slice.call(arguments, 1, -1)),
                            this.fn(e, t);
                        if (Array.isArray(e)) {
                            if (!this.validateMultiple)
                                throw "Validator `" + this.name + "` does not handle multiple values";
                            return this.validateMultiple.apply(this, arguments)
                        }
                        var i = arguments[arguments.length - 1];
                        if (this.validateDate && i._isDateInput())
                            return arguments[0] = l.parse.date(arguments[0]),
                            null !== arguments[0] && this.validateDate.apply(this, arguments);
                        if (this.validateNumber)
                            return !e || !isNaN(e) && (arguments[0] = parseFloat(arguments[0]),
                            this.validateNumber.apply(this, arguments));
                        if (this.validateString)
                            return this.validateString.apply(this, arguments);
                        throw "Validator `" + this.name + "` only handles multiple values"
                    },
                    parseRequirements: function(t, i) {
                        if ("string" != typeof t)
                            return Array.isArray(t) ? t : [t];
                        var n = this.requirementType;
                        if (Array.isArray(n)) {
                            for (var s = function(e, t) {
                                var i = e.match(/^\s*\[(.*)\]\s*$/);
                                if (!i)
                                    throw 'Requirement is not an array: "' + e + '"';
                                var n = i[1].split(",").map(l.trimString);
                                if (n.length !== t)
                                    throw "Requirement has " + n.length + " values when " + t + " are needed";
                                return n
                            }(t, n.length), o = 0; o < s.length; o++)
                                s[o] = l.parseRequirement(n[o], s[o]);
                            return s
                        }
                        return e.isPlainObject(n) ? function(e, t, i) {
                            var n = null
                              , s = {};
                            for (var o in e)
                                if (o) {
                                    var r = i(o);
                                    "string" == typeof r && (r = l.parseRequirement(e[o], r)),
                                    s[o] = r
                                } else
                                    n = l.parseRequirement(e[o], t);
                            return [n, s]
                        }(n, t, i) : [l.parseRequirement(n, t)]
                    },
                    requirementType: "string",
                    priority: 2
                };
                var h = function(e, t) {
                    this.__class__ = "ValidatorRegistry",
                    this.locale = "en",
                    this.init(e || {}, t || {})
                }
                  , p = {
                    email: /^((([a-zA-Z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-zA-Z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-zA-Z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-zA-Z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-zA-Z]|\d|-|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-zA-Z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-zA-Z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-zA-Z]|\d|-|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-zA-Z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))$/,
                    number: /^-?(\d*\.)?\d+(e[-+]?\d+)?$/i,
                    integer: /^-?\d+$/,
                    digits: /^\d+$/,
                    alphanum: /^\w+$/i,
                    date: {
                        test: function(e) {
                            return null !== l.parse.date(e)
                        }
                    },
                    url: new RegExp("^(?:(?:https?|ftp)://)?(?:\\S+(?::\\S*)?@)?(?:(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[1-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-zA-Z\\u00a1-\\uffff0-9]-*)*[a-zA-Z\\u00a1-\\uffff0-9]+)(?:\\.(?:[a-zA-Z\\u00a1-\\uffff0-9]-*)*[a-zA-Z\\u00a1-\\uffff0-9]+)*(?:\\.(?:[a-zA-Z\\u00a1-\\uffff]{2,})))(?::\\d{2,5})?(?:/\\S*)?$")
                };
                p.range = p.number;
                var f = function(e) {
                    var t = ("" + e).match(/(?:\.(\d+))?(?:[eE]([+-]?\d+))?$/);
                    return t ? Math.max(0, (t[1] ? t[1].length : 0) - (t[2] ? +t[2] : 0)) : 0
                }
                  , m = function(e, t) {
                    return t.map(l.parse[e])
                }
                  , g = function(e, t) {
                    return function(i) {
                        for (var n = arguments.length, s = new Array(n > 1 ? n - 1 : 0), r = 1; r < n; r++)
                            s[r - 1] = arguments[r];
                        return s.pop(),
                        t.apply(void 0, [i].concat(o(m(e, s))))
                    }
                }
                  , y = function(e) {
                    return {
                        validateDate: g("date", e),
                        validateNumber: g("number", e),
                        requirementType: e.length <= 2 ? "string" : ["string", "string"],
                        priority: 30
                    }
                };
                h.prototype = {
                    init: function(e, t) {
                        for (var i in this.catalog = t,
                        this.validators = n({}, this.validators),
                        e)
                            this.addValidator(i, e[i].fn, e[i].priority);
                        window.Parsley.trigger("parsley:validator:init")
                    },
                    setLocale: function(e) {
                        if (void 0 === this.catalog[e])
                            throw new Error(e + " is not available in the catalog");
                        return this.locale = e,
                        this
                    },
                    addCatalog: function(e, t, n) {
                        return "object" === i(t) && (this.catalog[e] = t),
                        !0 === n ? this.setLocale(e) : this
                    },
                    addMessage: function(e, t, i) {
                        return void 0 === this.catalog[e] && (this.catalog[e] = {}),
                        this.catalog[e][t] = i,
                        this
                    },
                    addMessages: function(e, t) {
                        for (var i in t)
                            this.addMessage(e, i, t[i]);
                        return this
                    },
                    addValidator: function(e, t, i) {
                        if (this.validators[e])
                            l.warn('Validator "' + e + '" is already defined.');
                        else if (c.hasOwnProperty(e))
                            return void l.warn('"' + e + '" is a restricted keyword and is not a valid validator name.');
                        return this._setValidator.apply(this, arguments)
                    },
                    hasValidator: function(e) {
                        return !!this.validators[e]
                    },
                    updateValidator: function(e, t, i) {
                        return this.validators[e] ? this._setValidator.apply(this, arguments) : (l.warn('Validator "' + e + '" is not already defined.'),
                        this.addValidator.apply(this, arguments))
                    },
                    removeValidator: function(e) {
                        return this.validators[e] || l.warn('Validator "' + e + '" is not defined.'),
                        delete this.validators[e],
                        this
                    },
                    _setValidator: function(e, t, n) {
                        for (var s in "object" !== i(t) && (t = {
                            fn: t,
                            priority: n
                        }),
                        t.validate || (t = new u(t)),
                        this.validators[e] = t,
                        t.messages || {})
                            this.addMessage(s, e, t.messages[s]);
                        return this
                    },
                    getErrorMessage: function(e) {
                        return ("type" === e.name ? (this.catalog[this.locale][e.name] || {})[e.requirements] : this.formatMessage(this.catalog[this.locale][e.name], e.requirements)) || this.catalog[this.locale].defaultMessage || this.catalog.en.defaultMessage
                    },
                    formatMessage: function(e, t) {
                        if ("object" === i(t)) {
                            for (var n in t)
                                e = this.formatMessage(e, t[n]);
                            return e
                        }
                        return "string" == typeof e ? e.replace(/%s/i, t) : ""
                    },
                    validators: {
                        notblank: {
                            validateString: function(e) {
                                return /\S/.test(e)
                            },
                            priority: 2
                        },
                        required: {
                            validateMultiple: function(e) {
                                return e.length > 0
                            },
                            validateString: function(e) {
                                return /\S/.test(e)
                            },
                            priority: 512
                        },
                        type: {
                            validateString: function(e, t) {
                                var i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}
                                  , n = i.step
                                  , s = void 0 === n ? "any" : n
                                  , o = i.base
                                  , r = void 0 === o ? 0 : o
                                  , a = p[t];
                                if (!a)
                                    throw new Error("validator type `" + t + "` is not supported");
                                if (!e)
                                    return !0;
                                if (!a.test(e))
                                    return !1;
                                if ("number" === t && !/^any$/i.test(s || "")) {
                                    var l = Number(e)
                                      , c = Math.max(f(s), f(r));
                                    if (f(l) > c)
                                        return !1;
                                    var d = function(e) {
                                        return Math.round(e * Math.pow(10, c))
                                    };
                                    if ((d(l) - d(r)) % d(s) != 0)
                                        return !1
                                }
                                return !0
                            },
                            requirementType: {
                                "": "string",
                                step: "string",
                                base: "number"
                            },
                            priority: 256
                        },
                        pattern: {
                            validateString: function(e, t) {
                                return !e || t.test(e)
                            },
                            requirementType: "regexp",
                            priority: 64
                        },
                        minlength: {
                            validateString: function(e, t) {
                                return !e || e.length >= t
                            },
                            requirementType: "integer",
                            priority: 30
                        },
                        maxlength: {
                            validateString: function(e, t) {
                                return e.length <= t
                            },
                            requirementType: "integer",
                            priority: 30
                        },
                        length: {
                            validateString: function(e, t, i) {
                                return !e || e.length >= t && e.length <= i
                            },
                            requirementType: ["integer", "integer"],
                            priority: 30
                        },
                        mincheck: {
                            validateMultiple: function(e, t) {
                                return e.length >= t
                            },
                            requirementType: "integer",
                            priority: 30
                        },
                        maxcheck: {
                            validateMultiple: function(e, t) {
                                return e.length <= t
                            },
                            requirementType: "integer",
                            priority: 30
                        },
                        check: {
                            validateMultiple: function(e, t, i) {
                                return e.length >= t && e.length <= i
                            },
                            requirementType: ["integer", "integer"],
                            priority: 30
                        },
                        min: y((function(e, t) {
                            return e >= t
                        }
                        )),
                        max: y((function(e, t) {
                            return e <= t
                        }
                        )),
                        range: y((function(e, t, i) {
                            return e >= t && e <= i
                        }
                        )),
                        equalto: {
                            validateString: function(t, i) {
                                if (!t)
                                    return !0;
                                var n = e(i);
                                return n.length ? t === n.val() : t === i
                            },
                            priority: 256
                        },
                        euvatin: {
                            validateString: function(e, t) {
                                return !e || /^[A-Z][A-Z][A-Za-z0-9 -]{2,}$/.test(e)
                            },
                            priority: 30
                        }
                    }
                };
                var v = {};
                v.Form = {
                    _actualizeTriggers: function() {
                        var e = this;
                        this.$element.on("submit.Parsley", (function(t) {
                            e.onSubmitValidate(t)
                        }
                        )),
                        this.$element.on("click.Parsley", l._SubmitSelector, (function(t) {
                            e.onSubmitButton(t)
                        }
                        )),
                        !1 !== this.options.uiEnabled && this.element.setAttribute("novalidate", "")
                    },
                    focus: function() {
                        if (this._focusedField = null,
                        !0 === this.validationResult || "none" === this.options.focus)
                            return null;
                        for (var e = 0; e < this.fields.length; e++) {
                            var t = this.fields[e];
                            if (!0 !== t.validationResult && t.validationResult.length > 0 && void 0 === t.options.noFocus && (this._focusedField = t.$element,
                            "first" === this.options.focus))
                                break
                        }
                        return null === this._focusedField ? null : this._focusedField.focus()
                    },
                    _destroyUI: function() {
                        this.$element.off(".Parsley")
                    }
                },
                v.Field = {
                    _reflowUI: function() {
                        if (this._buildUI(),
                        this._ui) {
                            var e = function e(t, i, n) {
                                for (var s = [], o = [], r = 0; r < t.length; r++) {
                                    for (var a = !1, l = 0; l < i.length; l++)
                                        if (t[r].assert.name === i[l].assert.name) {
                                            a = !0;
                                            break
                                        }
                                    a ? o.push(t[r]) : s.push(t[r])
                                }
                                return {
                                    kept: o,
                                    added: s,
                                    removed: n ? [] : e(i, t, !0).added
                                }
                            }(this.validationResult, this._ui.lastValidationResult);
                            this._ui.lastValidationResult = this.validationResult,
                            this._manageStatusClass(),
                            this._manageErrorsMessages(e),
                            this._actualizeTriggers(),
                            !e.kept.length && !e.added.length || this._failedOnce || (this._failedOnce = !0,
                            this._actualizeTriggers())
                        }
                    },
                    getErrorsMessages: function() {
                        if (!0 === this.validationResult)
                            return [];
                        for (var e = [], t = 0; t < this.validationResult.length; t++)
                            e.push(this.validationResult[t].errorMessage || this._getErrorMessage(this.validationResult[t].assert));
                        return e
                    },
                    addError: function(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
                          , i = t.message
                          , n = t.assert
                          , s = t.updateClass
                          , o = void 0 === s || s;
                        this._buildUI(),
                        this._addError(e, {
                            message: i,
                            assert: n
                        }),
                        o && this._errorClass()
                    },
                    updateError: function(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
                          , i = t.message
                          , n = t.assert
                          , s = t.updateClass
                          , o = void 0 === s || s;
                        this._buildUI(),
                        this._updateError(e, {
                            message: i,
                            assert: n
                        }),
                        o && this._errorClass()
                    },
                    removeError: function(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
                          , i = t.updateClass
                          , n = void 0 === i || i;
                        this._buildUI(),
                        this._removeError(e),
                        n && this._manageStatusClass()
                    },
                    _manageStatusClass: function() {
                        this.hasConstraints() && this.needsValidation() && !0 === this.validationResult ? this._successClass() : this.validationResult.length > 0 ? this._errorClass() : this._resetClass()
                    },
                    _manageErrorsMessages: function(t) {
                        if (void 0 === this.options.errorsMessagesDisabled) {
                            if (void 0 !== this.options.errorMessage)
                                return t.added.length || t.kept.length ? (this._insertErrorWrapper(),
                                0 === this._ui.$errorsWrapper.find(".parsley-custom-error-message").length && this._ui.$errorsWrapper.append(e(this.options.errorTemplate).addClass("parsley-custom-error-message")),
                                this._ui.$errorClassHandler.attr("aria-describedby", this._ui.errorsWrapperId),
                                this._ui.$errorsWrapper.addClass("filled").attr("aria-hidden", "false").find(".parsley-custom-error-message").html(this.options.errorMessage)) : (this._ui.$errorClassHandler.removeAttr("aria-describedby"),
                                this._ui.$errorsWrapper.removeClass("filled").attr("aria-hidden", "true").find(".parsley-custom-error-message").remove());
                            for (var i = 0; i < t.removed.length; i++)
                                this._removeError(t.removed[i].assert.name);
                            for (i = 0; i < t.added.length; i++)
                                this._addError(t.added[i].assert.name, {
                                    message: t.added[i].errorMessage,
                                    assert: t.added[i].assert
                                });
                            for (i = 0; i < t.kept.length; i++)
                                this._updateError(t.kept[i].assert.name, {
                                    message: t.kept[i].errorMessage,
                                    assert: t.kept[i].assert
                                })
                        }
                    },
                    _addError: function(t, i) {
                        var n = i.message
                          , s = i.assert;
                        this._insertErrorWrapper(),
                        this._ui.$errorClassHandler.attr("aria-describedby", this._ui.errorsWrapperId),
                        this._ui.$errorsWrapper.addClass("filled").attr("aria-hidden", "false").append(e(this.options.errorTemplate).addClass("parsley-" + t).html(n || this._getErrorMessage(s)))
                    },
                    _updateError: function(e, t) {
                        var i = t.message
                          , n = t.assert;
                        this._ui.$errorsWrapper.addClass("filled").find(".parsley-" + e).html(i || this._getErrorMessage(n))
                    },
                    _removeError: function(e) {
                        this._ui.$errorClassHandler.removeAttr("aria-describedby"),
                        this._ui.$errorsWrapper.removeClass("filled").attr("aria-hidden", "true").find(".parsley-" + e).remove()
                    },
                    _getErrorMessage: function(e) {
                        var t = e.name + "Message";
                        return void 0 !== this.options[t] ? window.Parsley.formatMessage(this.options[t], e.requirements) : window.Parsley.getErrorMessage(e)
                    },
                    _buildUI: function() {
                        if (!this._ui && !1 !== this.options.uiEnabled) {
                            var t = {};
                            this.element.setAttribute(this.options.namespace + "id", this.__id__),
                            t.$errorClassHandler = this._manageClassHandler(),
                            t.errorsWrapperId = "parsley-id-" + (this.options.multiple ? "multiple-" + this.options.multiple : this.__id__),
                            t.$errorsWrapper = e(this.options.errorsWrapper).attr("id", t.errorsWrapperId),
                            t.lastValidationResult = [],
                            t.validationInformationVisible = !1,
                            this._ui = t
                        }
                    },
                    _manageClassHandler: function() {
                        if ("string" == typeof this.options.classHandler && e(this.options.classHandler).length)
                            return e(this.options.classHandler);
                        var t = this.options.classHandler;
                        if ("string" == typeof this.options.classHandler && "function" == typeof window[this.options.classHandler] && (t = window[this.options.classHandler]),
                        "function" == typeof t) {
                            var n = t.call(this, this);
                            if (void 0 !== n && n.length)
                                return n
                        } else {
                            if ("object" === i(t) && t instanceof jQuery && t.length)
                                return t;
                            t && l.warn("The class handler `" + t + "` does not exist in DOM nor as a global JS function")
                        }
                        return this._inputHolder()
                    },
                    _inputHolder: function() {
                        return this.options.multiple && "SELECT" !== this.element.nodeName ? this.$element.parent() : this.$element
                    },
                    _insertErrorWrapper: function() {
                        var t = this.options.errorsContainer;
                        if (0 !== this._ui.$errorsWrapper.parent().length)
                            return this._ui.$errorsWrapper.parent();
                        if ("string" == typeof t) {
                            if (e(t).length)
                                return e(t).append(this._ui.$errorsWrapper);
                            "function" == typeof window[t] ? t = window[t] : l.warn("The errors container `" + t + "` does not exist in DOM nor as a global JS function")
                        }
                        return "function" == typeof t && (t = t.call(this, this)),
                        "object" === i(t) && t.length ? t.append(this._ui.$errorsWrapper) : this._inputHolder().after(this._ui.$errorsWrapper)
                    },
                    _actualizeTriggers: function() {
                        var e, t = this, i = this._findRelated();
                        i.off(".Parsley"),
                        this._failedOnce ? i.on(l.namespaceEvents(this.options.triggerAfterFailure, "Parsley"), (function() {
                            t._validateIfNeeded()
                        }
                        )) : (e = l.namespaceEvents(this.options.trigger, "Parsley")) && i.on(e, (function(e) {
                            t._validateIfNeeded(e)
                        }
                        ))
                    },
                    _validateIfNeeded: function(e) {
                        var t = this;
                        e && /key|input/.test(e.type) && (!this._ui || !this._ui.validationInformationVisible) && this.getValue().length <= this.options.validationThreshold || (this.options.debounce ? (window.clearTimeout(this._debounced),
                        this._debounced = window.setTimeout((function() {
                            return t.validate()
                        }
                        ), this.options.debounce)) : this.validate())
                    },
                    _resetUI: function() {
                        this._failedOnce = !1,
                        this._actualizeTriggers(),
                        void 0 !== this._ui && (this._ui.$errorsWrapper.removeClass("filled").children().remove(),
                        this._resetClass(),
                        this._ui.lastValidationResult = [],
                        this._ui.validationInformationVisible = !1)
                    },
                    _destroyUI: function() {
                        this._resetUI(),
                        void 0 !== this._ui && this._ui.$errorsWrapper.remove(),
                        delete this._ui
                    },
                    _successClass: function() {
                        this._ui.validationInformationVisible = !0,
                        this._ui.$errorClassHandler.removeClass(this.options.errorClass).addClass(this.options.successClass)
                    },
                    _errorClass: function() {
                        this._ui.validationInformationVisible = !0,
                        this._ui.$errorClassHandler.removeClass(this.options.successClass).addClass(this.options.errorClass)
                    },
                    _resetClass: function() {
                        this._ui.$errorClassHandler.removeClass(this.options.successClass).removeClass(this.options.errorClass)
                    }
                };
                var b = function(t, i, n) {
                    this.__class__ = "Form",
                    this.element = t,
                    this.$element = e(t),
                    this.domOptions = i,
                    this.options = n,
                    this.parent = window.Parsley,
                    this.fields = [],
                    this.validationResult = null
                }
                  , w = {
                    pending: null,
                    resolved: !0,
                    rejected: !1
                };
                b.prototype = {
                    onSubmitValidate: function(e) {
                        var t = this;
                        if (!0 !== e.parsley) {
                            var i = this._submitSource || this.$element.find(l._SubmitSelector)[0];
                            if (this._submitSource = null,
                            this.$element.find(".parsley-synthetic-submit-button").prop("disabled", !0),
                            !i || null === i.getAttribute("formnovalidate")) {
                                window.Parsley._remoteCache = {};
                                var n = this.whenValidate({
                                    event: e
                                });
                                "resolved" === n.state() && !1 !== this._trigger("submit") || (e.stopImmediatePropagation(),
                                e.preventDefault(),
                                "pending" === n.state() && n.done((function() {
                                    t._submit(i)
                                }
                                )))
                            }
                        }
                    },
                    onSubmitButton: function(e) {
                        this._submitSource = e.currentTarget
                    },
                    _submit: function(t) {
                        if (!1 !== this._trigger("submit")) {
                            if (t) {
                                var i = this.$element.find(".parsley-synthetic-submit-button").prop("disabled", !1);
                                0 === i.length && (i = e('<input class="parsley-synthetic-submit-button" type="hidden">').appendTo(this.$element)),
                                i.attr({
                                    name: t.getAttribute("name"),
                                    value: t.getAttribute("value")
                                })
                            }
                            this.$element.trigger(n(e.Event("submit"), {
                                parsley: !0
                            }))
                        }
                    },
                    validate: function(t) {
                        if (arguments.length >= 1 && !e.isPlainObject(t)) {
                            l.warnOnce("Calling validate on a parsley form without passing arguments as an object is deprecated.");
                            var i = Array.prototype.slice.call(arguments)
                              , n = i[0]
                              , s = i[1]
                              , o = i[2];
                            t = {
                                group: n,
                                force: s,
                                event: o
                            }
                        }
                        return w[this.whenValidate(t).state()]
                    },
                    whenValidate: function() {
                        var t, i = this, s = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, r = s.group, a = s.force, c = s.event;
                        this.submitEvent = c,
                        c && (this.submitEvent = n({}, c, {
                            preventDefault: function() {
                                l.warnOnce("Using `this.submitEvent.preventDefault()` is deprecated; instead, call `this.validationResult = false`"),
                                i.validationResult = !1
                            }
                        })),
                        this.validationResult = !0,
                        this._trigger("validate"),
                        this._refreshFields();
                        var d = this._withoutReactualizingFormOptions((function() {
                            return e.map(i.fields, (function(e) {
                                return e.whenValidate({
                                    force: a,
                                    group: r
                                })
                            }
                            ))
                        }
                        ));
                        return (t = l.all(d).done((function() {
                            i._trigger("success")
                        }
                        )).fail((function() {
                            i.validationResult = !1,
                            i.focus(),
                            i._trigger("error")
                        }
                        )).always((function() {
                            i._trigger("validated")
                        }
                        ))).pipe.apply(t, o(this._pipeAccordingToValidationResult()))
                    },
                    isValid: function(t) {
                        if (arguments.length >= 1 && !e.isPlainObject(t)) {
                            l.warnOnce("Calling isValid on a parsley form without passing arguments as an object is deprecated.");
                            var i = Array.prototype.slice.call(arguments)
                              , n = i[0]
                              , s = i[1];
                            t = {
                                group: n,
                                force: s
                            }
                        }
                        return w[this.whenValid(t).state()]
                    },
                    whenValid: function() {
                        var t = this
                          , i = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
                          , n = i.group
                          , s = i.force;
                        this._refreshFields();
                        var o = this._withoutReactualizingFormOptions((function() {
                            return e.map(t.fields, (function(e) {
                                return e.whenValid({
                                    group: n,
                                    force: s
                                })
                            }
                            ))
                        }
                        ));
                        return l.all(o)
                    },
                    refresh: function() {
                        return this._refreshFields(),
                        this
                    },
                    reset: function() {
                        for (var e = 0; e < this.fields.length; e++)
                            this.fields[e].reset();
                        this._trigger("reset")
                    },
                    destroy: function() {
                        this._destroyUI();
                        for (var e = 0; e < this.fields.length; e++)
                            this.fields[e].destroy();
                        this.$element.removeData("Parsley"),
                        this._trigger("destroy")
                    },
                    _refreshFields: function() {
                        return this.actualizeOptions()._bindFields()
                    },
                    _bindFields: function() {
                        var t = this
                          , i = this.fields;
                        return this.fields = [],
                        this.fieldsMappedById = {},
                        this._withoutReactualizingFormOptions((function() {
                            t.$element.find(t.options.inputs).not(t.options.excluded).not("[".concat(t.options.namespace, "excluded=true]")).each((function(e, i) {
                                var n = new window.Parsley.Factory(i,{},t);
                                if ("Field" === n.__class__ || "FieldMultiple" === n.__class__) {
                                    var s = n.__class__ + "-" + n.__id__;
                                    void 0 === t.fieldsMappedById[s] && (t.fieldsMappedById[s] = n,
                                    t.fields.push(n))
                                }
                            }
                            )),
                            e.each(l.difference(i, t.fields), (function(e, t) {
                                t.reset()
                            }
                            ))
                        }
                        )),
                        this
                    },
                    _withoutReactualizingFormOptions: function(e) {
                        var t = this.actualizeOptions;
                        this.actualizeOptions = function() {
                            return this
                        }
                        ;
                        var i = e();
                        return this.actualizeOptions = t,
                        i
                    },
                    _trigger: function(e) {
                        return this.trigger("form:" + e)
                    }
                };
                var T = function(e, t, i, s, o) {
                    var r = window.Parsley._validatorRegistry.validators[t]
                      , a = new u(r);
                    n(this, {
                        validator: a,
                        name: t,
                        requirements: i,
                        priority: s = s || e.options[t + "Priority"] || a.priority,
                        isDomConstraint: o = !0 === o
                    }),
                    this._parseRequirements(e.options)
                };
                T.prototype = {
                    validate: function(e, t) {
                        var i;
                        return (i = this.validator).validate.apply(i, [e].concat(o(this.requirementList), [t]))
                    },
                    _parseRequirements: function(e) {
                        var t = this;
                        this.requirementList = this.validator.parseRequirements(this.requirements, (function(i) {
                            return e[t.name + (n = i,
                            n[0].toUpperCase() + n.slice(1))];
                            var n
                        }
                        ))
                    }
                };
                var k = function(t, i, n, s) {
                    this.__class__ = "Field",
                    this.element = t,
                    this.$element = e(t),
                    void 0 !== s && (this.parent = s),
                    this.options = n,
                    this.domOptions = i,
                    this.constraints = [],
                    this.constraintsByName = {},
                    this.validationResult = !0,
                    this._bindConstraints()
                }
                  , C = {
                    pending: null,
                    resolved: !0,
                    rejected: !1
                };
                k.prototype = {
                    validate: function(t) {
                        arguments.length >= 1 && !e.isPlainObject(t) && (l.warnOnce("Calling validate on a parsley field without passing arguments as an object is deprecated."),
                        t = {
                            options: t
                        });
                        var i = this.whenValidate(t);
                        if (!i)
                            return !0;
                        switch (i.state()) {
                        case "pending":
                            return null;
                        case "resolved":
                            return !0;
                        case "rejected":
                            return this.validationResult
                        }
                    },
                    whenValidate: function() {
                        var e, t = this, i = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, n = i.force, s = i.group;
                        if (this.refresh(),
                        !s || this._isInGroup(s))
                            return this.value = this.getValue(),
                            this._trigger("validate"),
                            (e = this.whenValid({
                                force: n,
                                value: this.value,
                                _refreshed: !0
                            }).always((function() {
                                t._reflowUI()
                            }
                            )).done((function() {
                                t._trigger("success")
                            }
                            )).fail((function() {
                                t._trigger("error")
                            }
                            )).always((function() {
                                t._trigger("validated")
                            }
                            ))).pipe.apply(e, o(this._pipeAccordingToValidationResult()))
                    },
                    hasConstraints: function() {
                        return 0 !== this.constraints.length
                    },
                    needsValidation: function(e) {
                        return void 0 === e && (e = this.getValue()),
                        !(!e.length && !this._isRequired() && void 0 === this.options.validateIfEmpty)
                    },
                    _isInGroup: function(t) {
                        return Array.isArray(this.options.group) ? -1 !== e.inArray(t, this.options.group) : this.options.group === t
                    },
                    isValid: function(t) {
                        if (arguments.length >= 1 && !e.isPlainObject(t)) {
                            l.warnOnce("Calling isValid on a parsley field without passing arguments as an object is deprecated.");
                            var i = Array.prototype.slice.call(arguments)
                              , n = i[0]
                              , s = i[1];
                            t = {
                                force: n,
                                value: s
                            }
                        }
                        var o = this.whenValid(t);
                        return !o || C[o.state()]
                    },
                    whenValid: function() {
                        var t = this
                          , i = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
                          , n = i.force
                          , s = void 0 !== n && n
                          , o = i.value
                          , r = i.group
                          , a = i._refreshed;
                        if (a || this.refresh(),
                        !r || this._isInGroup(r)) {
                            if (this.validationResult = !0,
                            !this.hasConstraints())
                                return e.when();
                            if (null == o && (o = this.getValue()),
                            !this.needsValidation(o) && !0 !== s)
                                return e.when();
                            var c = this._getGroupedConstraints()
                              , d = [];
                            return e.each(c, (function(i, n) {
                                var s = l.all(e.map(n, (function(e) {
                                    return t._validateConstraint(o, e)
                                }
                                )));
                                if (d.push(s),
                                "rejected" === s.state())
                                    return !1
                            }
                            )),
                            l.all(d)
                        }
                    },
                    _validateConstraint: function(t, i) {
                        var n = this
                          , s = i.validate(t, this);
                        return !1 === s && (s = e.Deferred().reject()),
                        l.all([s]).fail((function(e) {
                            n.validationResult instanceof Array || (n.validationResult = []),
                            n.validationResult.push({
                                assert: i,
                                errorMessage: "string" == typeof e && e
                            })
                        }
                        ))
                    },
                    getValue: function() {
                        var e;
                        return null == (e = "function" == typeof this.options.value ? this.options.value(this) : void 0 !== this.options.value ? this.options.value : this.$element.val()) ? "" : this._handleWhitespace(e)
                    },
                    reset: function() {
                        return this._resetUI(),
                        this._trigger("reset")
                    },
                    destroy: function() {
                        this._destroyUI(),
                        this.$element.removeData("Parsley"),
                        this.$element.removeData("FieldMultiple"),
                        this._trigger("destroy")
                    },
                    refresh: function() {
                        return this._refreshConstraints(),
                        this
                    },
                    _refreshConstraints: function() {
                        return this.actualizeOptions()._bindConstraints()
                    },
                    refreshConstraints: function() {
                        return l.warnOnce("Parsley's refreshConstraints is deprecated. Please use refresh"),
                        this.refresh()
                    },
                    addConstraint: function(e, t, i, n) {
                        if (window.Parsley._validatorRegistry.validators[e]) {
                            var s = new T(this,e,t,i,n);
                            "undefined" !== this.constraintsByName[s.name] && this.removeConstraint(s.name),
                            this.constraints.push(s),
                            this.constraintsByName[s.name] = s
                        }
                        return this
                    },
                    removeConstraint: function(e) {
                        for (var t = 0; t < this.constraints.length; t++)
                            if (e === this.constraints[t].name) {
                                this.constraints.splice(t, 1);
                                break
                            }
                        return delete this.constraintsByName[e],
                        this
                    },
                    updateConstraint: function(e, t, i) {
                        return this.removeConstraint(e).addConstraint(e, t, i)
                    },
                    _bindConstraints: function() {
                        for (var e = [], t = {}, i = 0; i < this.constraints.length; i++)
                            !1 === this.constraints[i].isDomConstraint && (e.push(this.constraints[i]),
                            t[this.constraints[i].name] = this.constraints[i]);
                        for (var n in this.constraints = e,
                        this.constraintsByName = t,
                        this.options)
                            this.addConstraint(n, this.options[n], void 0, !0);
                        return this._bindHtml5Constraints()
                    },
                    _bindHtml5Constraints: function() {
                        null !== this.element.getAttribute("required") && this.addConstraint("required", !0, void 0, !0),
                        null !== this.element.getAttribute("pattern") && this.addConstraint("pattern", this.element.getAttribute("pattern"), void 0, !0);
                        var e = this.element.getAttribute("min")
                          , t = this.element.getAttribute("max");
                        null !== e && null !== t ? this.addConstraint("range", [e, t], void 0, !0) : null !== e ? this.addConstraint("min", e, void 0, !0) : null !== t && this.addConstraint("max", t, void 0, !0),
                        null !== this.element.getAttribute("minlength") && null !== this.element.getAttribute("maxlength") ? this.addConstraint("length", [this.element.getAttribute("minlength"), this.element.getAttribute("maxlength")], void 0, !0) : null !== this.element.getAttribute("minlength") ? this.addConstraint("minlength", this.element.getAttribute("minlength"), void 0, !0) : null !== this.element.getAttribute("maxlength") && this.addConstraint("maxlength", this.element.getAttribute("maxlength"), void 0, !0);
                        var i = l.getType(this.element);
                        return "number" === i ? this.addConstraint("type", ["number", {
                            step: this.element.getAttribute("step") || "1",
                            base: e || this.element.getAttribute("value")
                        }], void 0, !0) : /^(email|url|range|date)$/i.test(i) ? this.addConstraint("type", i, void 0, !0) : this
                    },
                    _isRequired: function() {
                        return void 0 !== this.constraintsByName.required && !1 !== this.constraintsByName.required.requirements
                    },
                    _trigger: function(e) {
                        return this.trigger("field:" + e)
                    },
                    _handleWhitespace: function(e) {
                        return !0 === this.options.trimValue && l.warnOnce('data-parsley-trim-value="true" is deprecated, please use data-parsley-whitespace="trim"'),
                        "squish" === this.options.whitespace && (e = e.replace(/\s{2,}/g, " ")),
                        "trim" !== this.options.whitespace && "squish" !== this.options.whitespace && !0 !== this.options.trimValue || (e = l.trimString(e)),
                        e
                    },
                    _isDateInput: function() {
                        var e = this.constraintsByName.type;
                        return e && "date" === e.requirements
                    },
                    _getGroupedConstraints: function() {
                        if (!1 === this.options.priorityEnabled)
                            return [this.constraints];
                        for (var e = [], t = {}, i = 0; i < this.constraints.length; i++) {
                            var n = this.constraints[i].priority;
                            t[n] || e.push(t[n] = []),
                            t[n].push(this.constraints[i])
                        }
                        return e.sort((function(e, t) {
                            return t[0].priority - e[0].priority
                        }
                        )),
                        e
                    }
                };
                var x = function() {
                    this.__class__ = "FieldMultiple"
                };
                x.prototype = {
                    addElement: function(e) {
                        return this.$elements.push(e),
                        this
                    },
                    _refreshConstraints: function() {
                        var t;
                        if (this.constraints = [],
                        "SELECT" === this.element.nodeName)
                            return this.actualizeOptions()._bindConstraints(),
                            this;
                        for (var i = 0; i < this.$elements.length; i++)
                            if (e("html").has(this.$elements[i]).length) {
                                t = this.$elements[i].data("FieldMultiple")._refreshConstraints().constraints;
                                for (var n = 0; n < t.length; n++)
                                    this.addConstraint(t[n].name, t[n].requirements, t[n].priority, t[n].isDomConstraint)
                            } else
                                this.$elements.splice(i, 1);
                        return this
                    },
                    getValue: function() {
                        if ("function" == typeof this.options.value)
                            return this.options.value(this);
                        if (void 0 !== this.options.value)
                            return this.options.value;
                        if ("INPUT" === this.element.nodeName) {
                            var t = l.getType(this.element);
                            if ("radio" === t)
                                return this._findRelated().filter(":checked").val() || "";
                            if ("checkbox" === t) {
                                var i = [];
                                return this._findRelated().filter(":checked").each((function() {
                                    i.push(e(this).val())
                                }
                                )),
                                i
                            }
                        }
                        return "SELECT" === this.element.nodeName && null === this.$element.val() ? [] : this.$element.val()
                    },
                    _init: function() {
                        return this.$elements = [this.$element],
                        this
                    }
                };
                var _ = function(t, s, o) {
                    this.element = t,
                    this.$element = e(t);
                    var r = this.$element.data("Parsley");
                    if (r)
                        return void 0 !== o && r.parent === window.Parsley && (r.parent = o,
                        r._resetOptions(r.options)),
                        "object" === i(s) && n(r.options, s),
                        r;
                    if (!this.$element.length)
                        throw new Error("You must bind Parsley on an existing element.");
                    if (void 0 !== o && "Form" !== o.__class__)
                        throw new Error("Parent instance must be a Form instance");
                    return this.parent = o || window.Parsley,
                    this.init(s)
                };
                _.prototype = {
                    init: function(e) {
                        return this.__class__ = "Parsley",
                        this.__version__ = "2.9.2",
                        this.__id__ = l.generateID(),
                        this._resetOptions(e),
                        "FORM" === this.element.nodeName || l.checkAttr(this.element, this.options.namespace, "validate") && !this.$element.is(this.options.inputs) ? this.bind("parsleyForm") : this.isMultiple() ? this.handleMultiple() : this.bind("parsleyField")
                    },
                    isMultiple: function() {
                        var e = l.getType(this.element);
                        return "radio" === e || "checkbox" === e || "SELECT" === this.element.nodeName && null !== this.element.getAttribute("multiple")
                    },
                    handleMultiple: function() {
                        var t, i, n = this;
                        if (this.options.multiple = this.options.multiple || (t = this.element.getAttribute("name")) || this.element.getAttribute("id"),
                        "SELECT" === this.element.nodeName && null !== this.element.getAttribute("multiple"))
                            return this.options.multiple = this.options.multiple || this.__id__,
                            this.bind("parsleyFieldMultiple");
                        if (!this.options.multiple)
                            return l.warn("To be bound by Parsley, a radio, a checkbox and a multiple select input must have either a name or a multiple option.", this.$element),
                            this;
                        this.options.multiple = this.options.multiple.replace(/(:|\.|\[|\]|\{|\}|\$)/g, ""),
                        t && e('input[name="' + t + '"]').each((function(e, t) {
                            var i = l.getType(t);
                            "radio" !== i && "checkbox" !== i || t.setAttribute(n.options.namespace + "multiple", n.options.multiple)
                        }
                        ));
                        for (var s = this._findRelated(), o = 0; o < s.length; o++)
                            if (void 0 !== (i = e(s.get(o)).data("Parsley"))) {
                                this.$element.data("FieldMultiple") || i.addElement(this.$element);
                                break
                            }
                        return this.bind("parsleyField", !0),
                        i || this.bind("parsleyFieldMultiple")
                    },
                    bind: function(t, i) {
                        var n;
                        switch (t) {
                        case "parsleyForm":
                            n = e.extend(new b(this.element,this.domOptions,this.options), new d, window.ParsleyExtend)._bindFields();
                            break;
                        case "parsleyField":
                            n = e.extend(new k(this.element,this.domOptions,this.options,this.parent), new d, window.ParsleyExtend);
                            break;
                        case "parsleyFieldMultiple":
                            n = e.extend(new k(this.element,this.domOptions,this.options,this.parent), new x, new d, window.ParsleyExtend)._init();
                            break;
                        default:
                            throw new Error(t + "is not a supported Parsley type")
                        }
                        return this.options.multiple && l.setAttr(this.element, this.options.namespace, "multiple", this.options.multiple),
                        void 0 !== i ? (this.$element.data("FieldMultiple", n),
                        n) : (this.$element.data("Parsley", n),
                        n._actualizeTriggers(),
                        n._trigger("init"),
                        n)
                    }
                };
                var A = e.fn.jquery.split(".");
                if (parseInt(A[0]) <= 1 && parseInt(A[1]) < 8)
                    throw "The loaded version of jQuery is too old. Please upgrade to 1.8.x or better.";
                A.forEach || l.warn("Parsley requires ES5 to run properly. Please include https://github.com/es-shims/es5-shim");
                var E = n(new d, {
                    element: document,
                    $element: e(document),
                    actualizeOptions: null,
                    _resetOptions: null,
                    Factory: _,
                    version: "2.9.2"
                });
                n(k.prototype, v.Field, d.prototype),
                n(b.prototype, v.Form, d.prototype),
                n(_.prototype, d.prototype),
                e.fn.parsley = e.fn.psly = function(t) {
                    if (this.length > 1) {
                        var i = [];
                        return this.each((function() {
                            i.push(e(this).parsley(t))
                        }
                        )),
                        i
                    }
                    if (0 != this.length)
                        return new _(this[0],t)
                }
                ,
                void 0 === window.ParsleyExtend && (window.ParsleyExtend = {}),
                E.options = n(l.objectCreate(c), window.ParsleyConfig),
                window.ParsleyConfig = E.options,
                window.Parsley = window.psly = E,
                E.Utils = l,
                window.ParsleyUtils = {},
                e.each(l, (function(e, t) {
                    "function" == typeof t && (window.ParsleyUtils[e] = function() {
                        return l.warnOnce("Accessing `window.ParsleyUtils` is deprecated. Use `window.Parsley.Utils` instead."),
                        l[e].apply(l, arguments)
                    }
                    )
                }
                ));
                var S = window.Parsley._validatorRegistry = new h(window.ParsleyConfig.validators,window.ParsleyConfig.i18n);
                window.ParsleyValidator = {},
                e.each("setLocale addCatalog addMessage addMessages getErrorMessage formatMessage addValidator updateValidator removeValidator hasValidator".split(" "), (function(e, t) {
                    window.Parsley[t] = function() {
                        return S[t].apply(S, arguments)
                    }
                    ,
                    window.ParsleyValidator[t] = function() {
                        var e;
                        return l.warnOnce("Accessing the method '".concat(t, "' through Validator is deprecated. Simply call 'window.Parsley.").concat(t, "(...)'")),
                        (e = window.Parsley)[t].apply(e, arguments)
                    }
                }
                )),
                window.Parsley.UI = v,
                window.ParsleyUI = {
                    removeError: function(e, t, i) {
                        var n = !0 !== i;
                        return l.warnOnce("Accessing UI is deprecated. Call 'removeError' on the instance directly. Please comment in issue 1073 as to your need to call this method."),
                        e.removeError(t, {
                            updateClass: n
                        })
                    },
                    getErrorsMessages: function(e) {
                        return l.warnOnce("Accessing UI is deprecated. Call 'getErrorsMessages' on the instance directly."),
                        e.getErrorsMessages()
                    }
                },
                e.each("addError updateError".split(" "), (function(e, t) {
                    window.ParsleyUI[t] = function(e, i, n, s, o) {
                        var r = !0 !== o;
                        return l.warnOnce("Accessing UI is deprecated. Call '".concat(t, "' on the instance directly. Please comment in issue 1073 as to your need to call this method.")),
                        e[t](i, {
                            message: n,
                            assert: s,
                            updateClass: r
                        })
                    }
                }
                )),
                !1 !== window.ParsleyConfig.autoBind && e((function() {
                    e("[data-parsley-validate]").length && e("[data-parsley-validate]").parsley()
                }
                ));
                var L = e({})
                  , P = function() {
                    l.warnOnce("Parsley's pubsub module is deprecated; use the 'on' and 'off' methods on parsley instances or window.Parsley")
                };
                function O(e, t) {
                    return e.parsleyAdaptedCallback || (e.parsleyAdaptedCallback = function() {
                        var i = Array.prototype.slice.call(arguments, 0);
                        i.unshift(this),
                        e.apply(t || L, i)
                    }
                    ),
                    e.parsleyAdaptedCallback
                }
                function N(e) {
                    return 0 === e.lastIndexOf("parsley:", 0) ? e.substr("parsley:".length) : e
                }
                return e.listen = function(e, t) {
                    var n;
                    if (P(),
                    "object" === i(arguments[1]) && "function" == typeof arguments[2] && (n = arguments[1],
                    t = arguments[2]),
                    "function" != typeof t)
                        throw new Error("Wrong parameters");
                    window.Parsley.on(N(e), O(t, n))
                }
                ,
                e.listenTo = function(e, t, i) {
                    if (P(),
                    !(e instanceof k || e instanceof b))
                        throw new Error("Must give Parsley instance");
                    if ("string" != typeof t || "function" != typeof i)
                        throw new Error("Wrong parameters");
                    e.on(N(t), O(i))
                }
                ,
                e.unsubscribe = function(e, t) {
                    if (P(),
                    "string" != typeof e || "function" != typeof t)
                        throw new Error("Wrong arguments");
                    window.Parsley.off(N(e), t.parsleyAdaptedCallback)
                }
                ,
                e.unsubscribeTo = function(e, t) {
                    if (P(),
                    !(e instanceof k || e instanceof b))
                        throw new Error("Must give Parsley instance");
                    e.off(N(t))
                }
                ,
                e.unsubscribeAll = function(t) {
                    P(),
                    window.Parsley.off(N(t)),
                    e("form,input,textarea,select").each((function() {
                        var i = e(this).data("Parsley");
                        i && i.off(N(t))
                    }
                    ))
                }
                ,
                e.emit = function(e, t) {
                    var i;
                    P();
                    var n = t instanceof k || t instanceof b
                      , s = Array.prototype.slice.call(arguments, n ? 2 : 1);
                    s.unshift(N(e)),
                    n || (t = window.Parsley),
                    (i = t).trigger.apply(i, o(s))
                }
                ,
                e.extend(!0, E, {
                    asyncValidators: {
                        default: {
                            fn: function(e) {
                                return e.status >= 200 && e.status < 300
                            },
                            url: !1
                        },
                        reverse: {
                            fn: function(e) {
                                return e.status < 200 || e.status >= 300
                            },
                            url: !1
                        }
                    },
                    addAsyncValidator: function(e, t, i, n) {
                        return E.asyncValidators[e] = {
                            fn: t,
                            url: i || !1,
                            options: n || {}
                        },
                        this
                    }
                }),
                E.addValidator("remote", {
                    requirementType: {
                        "": "string",
                        validator: "string",
                        reverse: "boolean",
                        options: "object"
                    },
                    validateString: function(t, i, n, s) {
                        var o, r, a = {}, l = n.validator || (!0 === n.reverse ? "reverse" : "default");
                        if (void 0 === E.asyncValidators[l])
                            throw new Error("Calling an undefined async validator: `" + l + "`");
                        (i = E.asyncValidators[l].url || i).indexOf("{value}") > -1 ? i = i.replace("{value}", encodeURIComponent(t)) : a[s.element.getAttribute("name") || s.element.getAttribute("id")] = t;
                        var c = e.extend(!0, n.options || {}, E.asyncValidators[l].options);
                        o = e.extend(!0, {}, {
                            url: i,
                            data: a,
                            type: "GET"
                        }, c),
                        s.trigger("field:ajaxoptions", s, o),
                        r = e.param(o),
                        void 0 === E._remoteCache && (E._remoteCache = {});
                        var d = E._remoteCache[r] = E._remoteCache[r] || e.ajax(o)
                          , u = function() {
                            var t = E.asyncValidators[l].fn.call(s, d, i, n);
                            return t || (t = e.Deferred().reject()),
                            e.when(t)
                        };
                        return d.then(u, u)
                    },
                    priority: -1
                }),
                E.on("form:submit", (function() {
                    E._remoteCache = {}
                }
                )),
                d.prototype.addAsyncValidator = function() {
                    return l.warnOnce("Accessing the method `addAsyncValidator` through an instance is deprecated. Simply call `Parsley.addAsyncValidator(...)`"),
                    E.addAsyncValidator.apply(E, arguments)
                }
                ,
                E.addMessages("en", {
                    defaultMessage: "This value seems to be invalid.",
                    type: {
                        email: "This value should be a valid email.",
                        url: "This value should be a valid url.",
                        number: "This value should be a valid number.",
                        integer: "This value should be a valid integer.",
                        digits: "This value should be digits.",
                        alphanum: "This value should be alphanumeric."
                    },
                    notblank: "This value should not be blank.",
                    required: "This value is required.",
                    pattern: "This value seems to be invalid.",
                    min: "This value should be greater than or equal to %s.",
                    max: "This value should be lower than or equal to %s.",
                    range: "This value should be between %s and %s.",
                    minlength: "This value is too short. It should have %s characters or more.",
                    maxlength: "This value is too long. It should have %s characters or fewer.",
                    length: "This value length is invalid. It should be between %s and %s characters long.",
                    mincheck: "You must select at least %s choices.",
                    maxcheck: "You must select %s choices or fewer.",
                    check: "You must select between %s and %s choices.",
                    equalto: "This value should be the same.",
                    euvatin: "It's not a valid VAT Identification Number."
                }),
                E.setLocale("en"),
                (new function() {
                    var i = this
                      , s = window || t;
                    n(this, {
                        isNativeEvent: function(e) {
                            return e.originalEvent && !1 !== e.originalEvent.isTrusted
                        },
                        fakeInputEvent: function(t) {
                            i.isNativeEvent(t) && e(t.target).trigger("input")
                        },
                        misbehaves: function(t) {
                            i.isNativeEvent(t) && (i.behavesOk(t),
                            e(document).on("change.inputevent", t.data.selector, i.fakeInputEvent),
                            i.fakeInputEvent(t))
                        },
                        behavesOk: function(t) {
                            i.isNativeEvent(t) && e(document).off("input.inputevent", t.data.selector, i.behavesOk).off("change.inputevent", t.data.selector, i.misbehaves)
                        },
                        install: function() {
                            if (!s.inputEventPatched) {
                                s.inputEventPatched = "0.0.3";
                                for (var t = 0, n = ["select", 'input[type="checkbox"]', 'input[type="radio"]', 'input[type="file"]']; t < n.length; t++) {
                                    var o = n[t];
                                    e(document).on("input.inputevent", o, {
                                        selector: o
                                    }, i.behavesOk).on("change.inputevent", o, {
                                        selector: o
                                    }, i.misbehaves)
                                }
                            }
                        },
                        uninstall: function() {
                            delete s.inputEventPatched,
                            e(document).off(".inputevent")
                        }
                    })
                }
                ).install(),
                E
            }
            ,
            e.exports = n(i("EVdn"))
        }
        ).call(this, i("yLpj"))
    },
    jiN1: function(e, t, i) {
        "use strict";
        (function(e) {
            var t = i("mlQZ")
              , n = i("Cfdk");
            function s() {
                console.log("Countdown finished!"),
                e(".writingSubmissionForm").submit()
            }
            i("fDiW"),
            e(".copyVideoSplit__play-button").length && e(".copyVideoSplit__play-button").modaal({
                type: "video"
            }),
            e(".modaal-video").length && e(".modaal-video").modaal({
                type: "video"
            }),
            e(".modaal-ajax-course-summary").length && e(".modaal-ajax-course-summary").modaal({
                type: "ajax",
                after_open: function() {
                    window.van11yAccessibleAccordionAria().attach()
                }
            }),
            e(".modaal-ajax").length && e(".modaal-ajax").modaal({
                type: "ajax"
            }),
            e(".submit-writing-button").length && e(".submit-writing-button").modaal({
                type: "ajax",
                after_open: function() {
                    console.log("attaching!");
                    if (null !== document.getElementById("keyboard_num")) {
                        Object(t.a)("keyboard_num", ["é", "è", "à", "ç", "ê", "ë", "î", "ï", "ô", "û", "ù", "ÿ", "â", "æ", "œ"], ["É", "È", "À", "Ç", "Ê", "Ë", "Î", "Ï", "Ô", "Û", "Ù", "Ÿ", "Â", "Æ", "Œ"]),
                        new n.a("timer-container",s).start()
                    }
                }
            })
        }
        ).call(this, i("EVdn"))
    },
    lEkl: function(e, t, i) {
        "use strict";
        i.r(t),
        function(e, t) {
            var n = i("T7iU")
              , s = i.n(n)
              , o = i("hMnm")
              , r = i("363H");
            i("En5V"),
            i("4QVJ"),
            i("qZtZ"),
            i("3F5G"),
            i("SUMU"),
            i("2Hg+"),
            i("gRFy"),
            i("rg37"),
            i("lKWo"),
            i("Ts16"),
            i("jiN1"),
            i("PRj7");
            e.$ = e.jQuery = i("EVdn"),
            i("BFHv"),
            i("j4iJ"),
            i("JeAW"),
            i("1zha"),
            i("Zej/");
            i("KoUT");
            var a = i("C331");
            i("azrh"),
            t((function() {
                if (t(".loginForm").parsley(),
                a(),
                t("#player").length > 0) {
                    var e = t(this).find("iframe")
                      , i = new o.a(e);
                    t(".button-vimeo-trigger").on("click", (function(e) {
                        e.preventDefault(),
                        i.play()
                    }
                    )),
                    i.on("play", (function() {}
                    )),
                    i.getVideoTitle().then((function(e) {}
                    ))
                }
                var n = new s.a("#player-old",{
                    controls: ["play-large", "play", "progress", "current-time", "mute", "volume", "captions", "settings", "pip", "airplay", "fullscreen"],
                    settings: ["captions", "quality", "speed", "loop"],
                    quality: {
                        default: 576,
                        options: [4320, 2880, 2160, 1440, 1080, 720, 576, 480, 360, 240]
                    }
                });
                if (t(".plyr__video-embed").length > 0 && (t(".button-vimeo-trigger").on("click", (function(e) {
                    e.preventDefault(),
                    n.play({
                        controls: ["play-large", "play", "progress", "current-time", "mute", "volume", "captions", "settings", "pip", "airplay", "fullscreen"],
                        settings: ["captions", "quality", "speed", "loop"],
                        quality: {
                            default: 576,
                            options: [4320, 2880, 2160, 1440, 1080, 720, 576, 480, 360, 240]
                        }
                    })
                }
                )),
                t(".button-vimeo-bookmark").on("click", (function(e) {
                    e.preventDefault();
                    n.currentTime
                }
                ))),
                t(".video-chapters__container").length > 0 && t(".video-chapters__container li a").on("click", (function(e) {
                    e.preventDefault(),
                    t(".home-hero__iframe-overlay").remove(),
                    n.embed.setCurrentTime(t(this).attr("data-time")).then((function(e) {
                        n.play()
                    }
                    )).catch((function(e) {
                        e.name
                    }
                    ))
                }
                )),
                t(".relatedEntries__wrapper").length && t(".relatedEntries__wrapper img").matchHeight(),
                t(".panels__panel-copy").length && t(".panels__panel-copy").matchHeight({
                    byRow: !0,
                    property: "height",
                    target: null
                }),
                t(".audio__inner").length && t(".audio__inner").matchHeight(),
                t(".burger-menu-open").on("click", (function() {
                    t(".menu-overlay").show()
                }
                )),
                t(".mobile__menu-close").on("click", (function() {
                    t(".menu-overlay").hide()
                }
                )),
                t(".burger-menu-desktop").on("click", (function(e) {
                    e.preventDefault(),
                    t(".logoAndNav__dropdown").hasClass("block") ? t(".logoAndNav__dropdown").removeClass("block") : t(".logoAndNav__dropdown").addClass("block")
                }
                )),
                t(".logoAndNav__dropdown").on("mouseleave", (function() {
                    t(this).removeClass("block"),
                    t(".rollover__content-hide").removeClass("rollover__content-show")
                }
                )),
                t(".image-slider").length && t(".image-slider").slick({
                    accessibility: !0,
                    dots: !0,
                    adaptiveHeight: !0,
                    arrows: !1,
                    slidesToShow: 4,
                    responsive: [{
                        breakpoint: 992,
                        settings: {
                            slidesToShow: 2
                        }
                    }, {
                        breakpoint: 767,
                        settings: {
                            slidesToShow: 1
                        }
                    }]
                }),
                t(".sample-slider").length && t(".sample-slider").slick({
                    accessibility: !0,
                    dots: !0,
                    adaptiveHeight: !0,
                    arrows: !0,
                    infinite: !0
                }),
                t(".gallery-container").length && t(".gallery-container").slick({
                    accessibility: !0,
                    dots: !0,
                    adaptiveHeight: !0,
                    arrows: !0,
                    infinite: !0,
                    responsive: [{
                        breakpoint: 992,
                        settings: {
                            arrows: !0
                        }
                    }, {
                        breakpoint: 767,
                        settings: {
                            arrows: !1
                        }
                    }]
                }),
                t(".home-hero__iframe-overlay a").on("click", (function(e) {
                    e.preventDefault(),
                    t(".home-hero__iframe-overlay").remove()
                }
                )),
                t(".minimalist-accordion__header").on("click", (function(e) {
                    t(".panels__panel-copy").matchHeight()
                }
                )),
                t(".button--payment-buy").on("click", (function(e) {
                    t(".coupon-code-form").is(":visible") && t("input[name=couponCode]").val() && (e.preventDefault(),
                    alert('Please make sure to click the "Apply code" button on your coupon code first.'))
                }
                )),
                t(".quiz-results-reveal").on("click", (function(e) {
                    e.preventDefault(),
                    t(this).closest("div").next(".quiz-results-table").toggle()
                }
                )),
                t(".quiz-results-table2").length > 0) {
                    var l = document.querySelector(".quiz-results-table2");
                    new r.a(l,{
                        perPageSelect: !1
                    })
                }
                if (t(".cancel-options select").length > 0) {
                    var c = t(".cancel-options select option");
                    c.eq(1).attr("selected", "selected"),
                    c.eq(0).remove()
                }
                t(".header-v2__mob-menu__toggle").on("click", (function() {
                    t(this).toggleClass("active"),
                    t(".header-v2__mob-menu__menu").toggleClass("active")
                }
                )),
                t(".accordion__title").click((function() {
                    t(this).next().slideToggle(".accordion__content"),
                    t(this).toggleClass("active"),
                    t(this).find(".accordion__title-arrow").toggleClass("active")
                }
                ))
            }
            ))
        }
        .call(this, i("yLpj"), i("EVdn"))
    },
    lKWo: function(e, t, i) {
        "use strict";
        var n = i("CWM2");
        i.n(n)()()
    },
    mlQZ: function(e, t, i) {
        "use strict";
        function n(e, t, i) {
            var n = document.getElementById(e);
            if (n) {
                var s = document.createElement("ul");
                s.className = "mini-keyboard mb-1";
                var o = function(e) {
                    var t = n.selectionStart
                      , i = n.selectionEnd;
                    n.value = n.value.substring(0, t) + e + n.value.substring(i, n.value.length),
                    n.focus(),
                    n.selectionStart = t + e.length,
                    n.selectionEnd = t + e.length
                };
                t.forEach((function(e) {
                    var t = document.createElement("li");
                    t.className = "mini-keyboard-key";
                    var i = document.createElement("span");
                    i.className = "mini-keyboard-char",
                    i.innerText = e,
                    t.appendChild(i),
                    t.addEventListener("click", (function() {
                        return o(e)
                    }
                    )),
                    s.appendChild(t)
                }
                ));
                var r = document.createElement("ul");
                r.className = "mini-keyboard mb-2",
                i.forEach((function(e) {
                    var t = document.createElement("li");
                    t.className = "mini-keyboard-key";
                    var i = document.createElement("span");
                    i.className = "mini-keyboard-char",
                    i.innerText = e,
                    t.appendChild(i),
                    t.addEventListener("click", (function() {
                        return o(e)
                    }
                    )),
                    r.appendChild(t)
                }
                )),
                n.parentNode.insertBefore(r, n.nextSibling),
                n.parentNode.insertBefore(s, n.nextSibling)
            } else
                console.error("Textarea not found")
        }
        i.d(t, "a", (function() {
            return n
        }
        ))
    },
    qZtZ: function(e, t, i) {
        "use strict";
        (function(e) {
            var t = i("XeJP")
              , n = i.n(t);
            n()(".statsContainer").once("enter", (function() {
                e(".endNumber").each((function(t) {
                    var i = e(this);
                    e({
                        value: 0
                    }).animate({
                        value: parseInt(i.attr("data-end"))
                    }, {
                        duration: 3e3,
                        easing: "swing",
                        step: function() {
                            i.find(".target").text(Math.round(this.value).toLocaleString("en-GB"))
                        }
                    })
                }
                ))
            }
            )).on("exit", (function(e) {}
            )),
            n()(".customerMap").once("enter", (function() {
                e(".customerMap__marker").addClass("customerMap__marker--animate")
            }
            ))
        }
        ).call(this, i("EVdn"))
    },
    rg37: function(e, t, i) {
        "use strict";
        (function(e, t) {
            var n = i("ZtQj")
              , s = i.n(n);
            e.$ = e.jQuery = i("EVdn");
            var o = new s.a;
            o.start({
                countdown: !0,
                startValues: {
                    seconds: 10
                }
            }),
            t("#countdownExample .values").html(o.getTimeValues().toString()),
            o.addEventListener("secondsUpdated", (function(e) {
                t("#countdownExample .values").html(o.getTimeValues().toString())
            }
            )),
            o.addEventListener("targetAchieved", (function(e) {
                t("#countdownExample .values").html("KABOOM!!")
            }
            ))
        }
        ).call(this, i("yLpj"), i("EVdn"))
    },
    yLpj: function(e, t) {
        var i;
        i = function() {
            return this
        }();
        try {
            i = i || new Function("return this")()
        } catch (e) {
            "object" == typeof window && (i = window)
        }
        e.exports = i
    }
});
