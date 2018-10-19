! function(t, e) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = t.document ? e(t, !0) : function(t) {
        if (!t.document) throw new Error("jQuery requires a window with a document");
        return e(t)
    } : e(t)
}("undefined" != typeof window ? window : this, function(T, t) {
    var e = [],
        S = T.document,
        d = e.slice,
        m = e.concat,
        a = e.push,
        s = e.indexOf,
        i = {},
        n = i.toString,
        f = i.hasOwnProperty,
        g = {},
        o = "2.2.4",
        C = function(t, e) {
            return new C.fn.init(t, e)
        },
        r = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        l = /^-ms-/,
        c = /-([\da-z])/gi,
        u = function(t, e) {
            return e.toUpperCase()
        };

    function h(t) {
        var e = !!t && "length" in t && t.length,
            i = C.type(t);
        return "function" !== i && !C.isWindow(t) && ("array" === i || 0 === e || "number" == typeof e && 0 < e && e - 1 in t)
    }
    C.fn = C.prototype = {
        jquery: o,
        constructor: C,
        selector: "",
        length: 0,
        toArray: function() {
            return d.call(this)
        },
        get: function(t) {
            return null != t ? t < 0 ? this[t + this.length] : this[t] : d.call(this)
        },
        pushStack: function(t) {
            var e = C.merge(this.constructor(), t);
            return e.prevObject = this, e.context = this.context, e
        },
        each: function(t) {
            return C.each(this, t)
        },
        map: function(i) {
            return this.pushStack(C.map(this, function(t, e) {
                return i.call(t, e, t)
            }))
        },
        slice: function() {
            return this.pushStack(d.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(t) {
            var e = this.length,
                i = +t + (t < 0 ? e : 0);
            return this.pushStack(0 <= i && i < e ? [this[i]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor()
        },
        push: a,
        sort: e.sort,
        splice: e.splice
    }, C.extend = C.fn.extend = function() {
        var t, e, i, n, s, o, r = arguments[0] || {},
            a = 1,
            l = arguments.length,
            c = !1;
        for ("boolean" == typeof r && (c = r, r = arguments[a] || {}, a++), "object" == typeof r || C.isFunction(r) || (r = {}), a === l && (r = this, a--); a < l; a++)
            if (null != (t = arguments[a]))
                for (e in t) i = r[e], r !== (n = t[e]) && (c && n && (C.isPlainObject(n) || (s = C.isArray(n))) ? (s ? (s = !1, o = i && C.isArray(i) ? i : []) : o = i && C.isPlainObject(i) ? i : {}, r[e] = C.extend(c, o, n)) : void 0 !== n && (r[e] = n));
        return r
    }, C.extend({
        expando: "jQuery" + (o + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(t) {
            throw new Error(t)
        },
        noop: function() {},
        isFunction: function(t) {
            return "function" === C.type(t)
        },
        isArray: Array.isArray,
        isWindow: function(t) {
            return null != t && t === t.window
        },
        isNumeric: function(t) {
            var e = t && t.toString();
            return !C.isArray(t) && 0 <= e - parseFloat(e) + 1
        },
        isPlainObject: function(t) {
            var e;
            if ("object" !== C.type(t) || t.nodeType || C.isWindow(t)) return !1;
            if (t.constructor && !f.call(t, "constructor") && !f.call(t.constructor.prototype || {}, "isPrototypeOf")) return !1;
            for (e in t);
            return void 0 === e || f.call(t, e)
        },
        isEmptyObject: function(t) {
            var e;
            for (e in t) return !1;
            return !0
        },
        type: function(t) {
            return null == t ? t + "" : "object" == typeof t || "function" == typeof t ? i[n.call(t)] || "object" : typeof t
        },
        globalEval: function(t) {
            var e, i = eval;
            (t = C.trim(t)) && (1 === t.indexOf("use strict") ? ((e = S.createElement("script")).text = t, S.head.appendChild(e).parentNode.removeChild(e)) : i(t))
        },
        camelCase: function(t) {
            return t.replace(l, "ms-").replace(c, u)
        },
        nodeName: function(t, e) {
            return t.nodeName && t.nodeName.toLowerCase() === e.toLowerCase()
        },
        each: function(t, e) {
            var i, n = 0;
            if (h(t))
                for (i = t.length; n < i && !1 !== e.call(t[n], n, t[n]); n++);
            else
                for (n in t)
                    if (!1 === e.call(t[n], n, t[n])) break;
            return t
        },
        trim: function(t) {
            return null == t ? "" : (t + "").replace(r, "")
        },
        makeArray: function(t, e) {
            var i = e || [];
            return null != t && (h(Object(t)) ? C.merge(i, "string" == typeof t ? [t] : t) : a.call(i, t)), i
        },
        inArray: function(t, e, i) {
            return null == e ? -1 : s.call(e, t, i)
        },
        merge: function(t, e) {
            for (var i = +e.length, n = 0, s = t.length; n < i; n++) t[s++] = e[n];
            return t.length = s, t
        },
        grep: function(t, e, i) {
            for (var n = [], s = 0, o = t.length, r = !i; s < o; s++) !e(t[s], s) !== r && n.push(t[s]);
            return n
        },
        map: function(t, e, i) {
            var n, s, o = 0,
                r = [];
            if (h(t))
                for (n = t.length; o < n; o++) null != (s = e(t[o], o, i)) && r.push(s);
            else
                for (o in t) null != (s = e(t[o], o, i)) && r.push(s);
            return m.apply([], r)
        },
        guid: 1,
        proxy: function(t, e) {
            var i, n, s;
            return "string" == typeof e && (i = t[e], e = t, t = i), C.isFunction(t) ? (n = d.call(arguments, 2), (s = function() {
                return t.apply(e || this, n.concat(d.call(arguments)))
            }).guid = t.guid = t.guid || C.guid++, s) : void 0
        },
        now: Date.now,
        support: g
    }), "function" == typeof Symbol && (C.fn[Symbol.iterator] = e[Symbol.iterator]), C.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(t, e) {
        i["[object " + e + "]"] = e.toLowerCase()
    });
    var p = function(i) {
        var t, f, b, o, s, m, u, g, x, l, c, k, T, r, S, v, a, d, y, C = "sizzle" + 1 * new Date,
            w = i.document,
            $ = 0,
            n = 0,
            h = st(),
            p = st(),
            _ = st(),
            D = function(t, e) {
                return t === e && (c = !0), 0
            },
            E = {}.hasOwnProperty,
            e = [],
            M = e.pop,
            A = e.push,
            H = e.push,
            O = e.slice,
            P = function(t, e) {
                for (var i = 0, n = t.length; i < n; i++)
                    if (t[i] === e) return i;
                return -1
            },
            L = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            I = "[\\x20\\t\\r\\n\\f]",
            N = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
            z = "\\[" + I + "*(" + N + ")(?:" + I + "*([*^$|!~]?=)" + I + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + N + "))|)" + I + "*\\]",
            j = ":(" + N + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + z + ")*)|.*)\\)|)",
            R = new RegExp(I + "+", "g"),
            q = new RegExp("^" + I + "+|((?:^|[^\\\\])(?:\\\\.)*)" + I + "+$", "g"),
            F = new RegExp("^" + I + "*," + I + "*"),
            W = new RegExp("^" + I + "*([>+~]|" + I + ")" + I + "*"),
            B = new RegExp("=" + I + "*([^\\]'\"]*?)" + I + "*\\]", "g"),
            U = new RegExp(j),
            V = new RegExp("^" + N + "$"),
            Y = {
                ID: new RegExp("^#(" + N + ")"),
                CLASS: new RegExp("^\\.(" + N + ")"),
                TAG: new RegExp("^(" + N + "|[*])"),
                ATTR: new RegExp("^" + z),
                PSEUDO: new RegExp("^" + j),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + I + "*(even|odd|(([+-]|)(\\d*)n|)" + I + "*(?:([+-]|)" + I + "*(\\d+)|))" + I + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + L + ")$", "i"),
                needsContext: new RegExp("^" + I + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + I + "*((?:-\\d)?\\d*)" + I + "*\\)|)(?=[^-]|$)", "i")
            },
            X = /^(?:input|select|textarea|button)$/i,
            K = /^h\d$/i,
            G = /^[^{]+\{\s*\[native \w/,
            Q = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            J = /[+~]/,
            Z = /'|\\/g,
            tt = new RegExp("\\\\([\\da-f]{1,6}" + I + "?|(" + I + ")|.)", "ig"),
            et = function(t, e, i) {
                var n = "0x" + e - 65536;
                return n != n || i ? e : n < 0 ? String.fromCharCode(n + 65536) : String.fromCharCode(n >> 10 | 55296, 1023 & n | 56320)
            },
            it = function() {
                k()
            };
        try {
            H.apply(e = O.call(w.childNodes), w.childNodes), e[w.childNodes.length].nodeType
        } catch (t) {
            H = {
                apply: e.length ? function(t, e) {
                    A.apply(t, O.call(e))
                } : function(t, e) {
                    for (var i = t.length, n = 0; t[i++] = e[n++];);
                    t.length = i - 1
                }
            }
        }

        function nt(t, e, i, n) {
            var s, o, r, a, l, c, d, u, h = e && e.ownerDocument,
                p = e ? e.nodeType : 9;
            if (i = i || [], "string" != typeof t || !t || 1 !== p && 9 !== p && 11 !== p) return i;
            if (!n && ((e ? e.ownerDocument || e : w) !== T && k(e), e = e || T, S)) {
                if (11 !== p && (c = Q.exec(t)))
                    if (s = c[1]) {
                        if (9 === p) {
                            if (!(r = e.getElementById(s))) return i;
                            if (r.id === s) return i.push(r), i
                        } else if (h && (r = h.getElementById(s)) && y(e, r) && r.id === s) return i.push(r), i
                    } else {
                        if (c[2]) return H.apply(i, e.getElementsByTagName(t)), i;
                        if ((s = c[3]) && f.getElementsByClassName && e.getElementsByClassName) return H.apply(i, e.getElementsByClassName(s)), i
                    } if (f.qsa && !_[t + " "] && (!v || !v.test(t))) {
                    if (1 !== p) h = e, u = t;
                    else if ("object" !== e.nodeName.toLowerCase()) {
                        for ((a = e.getAttribute("id")) ? a = a.replace(Z, "\\$&") : e.setAttribute("id", a = C), o = (d = m(t)).length, l = V.test(a) ? "#" + a : "[id='" + a + "']"; o--;) d[o] = l + " " + ft(d[o]);
                        u = d.join(","), h = J.test(t) && ht(e.parentNode) || e
                    }
                    if (u) try {
                        return H.apply(i, h.querySelectorAll(u)), i
                    } catch (t) {} finally {
                        a === C && e.removeAttribute("id")
                    }
                }
            }
            return g(t.replace(q, "$1"), e, i, n)
        }

        function st() {
            var n = [];
            return function t(e, i) {
                return n.push(e + " ") > b.cacheLength && delete t[n.shift()], t[e + " "] = i
            }
        }

        function ot(t) {
            return t[C] = !0, t
        }

        function rt(t) {
            var e = T.createElement("div");
            try {
                return !!t(e)
            } catch (t) {
                return !1
            } finally {
                e.parentNode && e.parentNode.removeChild(e), e = null
            }
        }

        function at(t, e) {
            for (var i = t.split("|"), n = i.length; n--;) b.attrHandle[i[n]] = e
        }

        function lt(t, e) {
            var i = e && t,
                n = i && 1 === t.nodeType && 1 === e.nodeType && (~e.sourceIndex || 1 << 31) - (~t.sourceIndex || 1 << 31);
            if (n) return n;
            if (i)
                for (; i = i.nextSibling;)
                    if (i === e) return -1;
            return t ? 1 : -1
        }

        function ct(e) {
            return function(t) {
                return "input" === t.nodeName.toLowerCase() && t.type === e
            }
        }

        function dt(i) {
            return function(t) {
                var e = t.nodeName.toLowerCase();
                return ("input" === e || "button" === e) && t.type === i
            }
        }

        function ut(r) {
            return ot(function(o) {
                return o = +o, ot(function(t, e) {
                    for (var i, n = r([], t.length, o), s = n.length; s--;) t[i = n[s]] && (t[i] = !(e[i] = t[i]))
                })
            })
        }

        function ht(t) {
            return t && void 0 !== t.getElementsByTagName && t
        }
        for (t in f = nt.support = {}, s = nt.isXML = function(t) {
                var e = t && (t.ownerDocument || t).documentElement;
                return !!e && "HTML" !== e.nodeName
            }, k = nt.setDocument = function(t) {
                var e, i, n = t ? t.ownerDocument || t : w;
                return n !== T && 9 === n.nodeType && n.documentElement && (r = (T = n).documentElement, S = !s(T), (i = T.defaultView) && i.top !== i && (i.addEventListener ? i.addEventListener("unload", it, !1) : i.attachEvent && i.attachEvent("onunload", it)), f.attributes = rt(function(t) {
                    return t.className = "i", !t.getAttribute("className")
                }), f.getElementsByTagName = rt(function(t) {
                    return t.appendChild(T.createComment("")), !t.getElementsByTagName("*").length
                }), f.getElementsByClassName = G.test(T.getElementsByClassName), f.getById = rt(function(t) {
                    return r.appendChild(t).id = C, !T.getElementsByName || !T.getElementsByName(C).length
                }), f.getById ? (b.find.ID = function(t, e) {
                    if (void 0 !== e.getElementById && S) {
                        var i = e.getElementById(t);
                        return i ? [i] : []
                    }
                }, b.filter.ID = function(t) {
                    var e = t.replace(tt, et);
                    return function(t) {
                        return t.getAttribute("id") === e
                    }
                }) : (delete b.find.ID, b.filter.ID = function(t) {
                    var i = t.replace(tt, et);
                    return function(t) {
                        var e = void 0 !== t.getAttributeNode && t.getAttributeNode("id");
                        return e && e.value === i
                    }
                }), b.find.TAG = f.getElementsByTagName ? function(t, e) {
                    return void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t) : f.qsa ? e.querySelectorAll(t) : void 0
                } : function(t, e) {
                    var i, n = [],
                        s = 0,
                        o = e.getElementsByTagName(t);
                    if ("*" === t) {
                        for (; i = o[s++];) 1 === i.nodeType && n.push(i);
                        return n
                    }
                    return o
                }, b.find.CLASS = f.getElementsByClassName && function(t, e) {
                    return void 0 !== e.getElementsByClassName && S ? e.getElementsByClassName(t) : void 0
                }, a = [], v = [], (f.qsa = G.test(T.querySelectorAll)) && (rt(function(t) {
                    r.appendChild(t).innerHTML = "<a id='" + C + "'></a><select id='" + C + "-\r\\' msallowcapture=''><option selected=''></option></select>", t.querySelectorAll("[msallowcapture^='']").length && v.push("[*^$]=" + I + "*(?:''|\"\")"), t.querySelectorAll("[selected]").length || v.push("\\[" + I + "*(?:value|" + L + ")"), t.querySelectorAll("[id~=" + C + "-]").length || v.push("~="), t.querySelectorAll(":checked").length || v.push(":checked"), t.querySelectorAll("a#" + C + "+*").length || v.push(".#.+[+~]")
                }), rt(function(t) {
                    var e = T.createElement("input");
                    e.setAttribute("type", "hidden"), t.appendChild(e).setAttribute("name", "D"), t.querySelectorAll("[name=d]").length && v.push("name" + I + "*[*^$|!~]?="), t.querySelectorAll(":enabled").length || v.push(":enabled", ":disabled"), t.querySelectorAll("*,:x"), v.push(",.*:")
                })), (f.matchesSelector = G.test(d = r.matches || r.webkitMatchesSelector || r.mozMatchesSelector || r.oMatchesSelector || r.msMatchesSelector)) && rt(function(t) {
                    f.disconnectedMatch = d.call(t, "div"), d.call(t, "[s!='']:x"), a.push("!=", j)
                }), v = v.length && new RegExp(v.join("|")), a = a.length && new RegExp(a.join("|")), e = G.test(r.compareDocumentPosition), y = e || G.test(r.contains) ? function(t, e) {
                    var i = 9 === t.nodeType ? t.documentElement : t,
                        n = e && e.parentNode;
                    return t === n || !(!n || 1 !== n.nodeType || !(i.contains ? i.contains(n) : t.compareDocumentPosition && 16 & t.compareDocumentPosition(n)))
                } : function(t, e) {
                    if (e)
                        for (; e = e.parentNode;)
                            if (e === t) return !0;
                    return !1
                }, D = e ? function(t, e) {
                    if (t === e) return c = !0, 0;
                    var i = !t.compareDocumentPosition - !e.compareDocumentPosition;
                    return i || (1 & (i = (t.ownerDocument || t) === (e.ownerDocument || e) ? t.compareDocumentPosition(e) : 1) || !f.sortDetached && e.compareDocumentPosition(t) === i ? t === T || t.ownerDocument === w && y(w, t) ? -1 : e === T || e.ownerDocument === w && y(w, e) ? 1 : l ? P(l, t) - P(l, e) : 0 : 4 & i ? -1 : 1)
                } : function(t, e) {
                    if (t === e) return c = !0, 0;
                    var i, n = 0,
                        s = t.parentNode,
                        o = e.parentNode,
                        r = [t],
                        a = [e];
                    if (!s || !o) return t === T ? -1 : e === T ? 1 : s ? -1 : o ? 1 : l ? P(l, t) - P(l, e) : 0;
                    if (s === o) return lt(t, e);
                    for (i = t; i = i.parentNode;) r.unshift(i);
                    for (i = e; i = i.parentNode;) a.unshift(i);
                    for (; r[n] === a[n];) n++;
                    return n ? lt(r[n], a[n]) : r[n] === w ? -1 : a[n] === w ? 1 : 0
                }), T
            }, nt.matches = function(t, e) {
                return nt(t, null, null, e)
            }, nt.matchesSelector = function(t, e) {
                if ((t.ownerDocument || t) !== T && k(t), e = e.replace(B, "='$1']"), f.matchesSelector && S && !_[e + " "] && (!a || !a.test(e)) && (!v || !v.test(e))) try {
                    var i = d.call(t, e);
                    if (i || f.disconnectedMatch || t.document && 11 !== t.document.nodeType) return i
                } catch (t) {}
                return 0 < nt(e, T, null, [t]).length
            }, nt.contains = function(t, e) {
                return (t.ownerDocument || t) !== T && k(t), y(t, e)
            }, nt.attr = function(t, e) {
                (t.ownerDocument || t) !== T && k(t);
                var i = b.attrHandle[e.toLowerCase()],
                    n = i && E.call(b.attrHandle, e.toLowerCase()) ? i(t, e, !S) : void 0;
                return void 0 !== n ? n : f.attributes || !S ? t.getAttribute(e) : (n = t.getAttributeNode(e)) && n.specified ? n.value : null
            }, nt.error = function(t) {
                throw new Error("Syntax error, unrecognized expression: " + t)
            }, nt.uniqueSort = function(t) {
                var e, i = [],
                    n = 0,
                    s = 0;
                if (c = !f.detectDuplicates, l = !f.sortStable && t.slice(0), t.sort(D), c) {
                    for (; e = t[s++];) e === t[s] && (n = i.push(s));
                    for (; n--;) t.splice(i[n], 1)
                }
                return l = null, t
            }, o = nt.getText = function(t) {
                var e, i = "",
                    n = 0,
                    s = t.nodeType;
                if (s) {
                    if (1 === s || 9 === s || 11 === s) {
                        if ("string" == typeof t.textContent) return t.textContent;
                        for (t = t.firstChild; t; t = t.nextSibling) i += o(t)
                    } else if (3 === s || 4 === s) return t.nodeValue
                } else
                    for (; e = t[n++];) i += o(e);
                return i
            }, (b = nt.selectors = {
                cacheLength: 50,
                createPseudo: ot,
                match: Y,
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
                    ATTR: function(t) {
                        return t[1] = t[1].replace(tt, et), t[3] = (t[3] || t[4] || t[5] || "").replace(tt, et), "~=" === t[2] && (t[3] = " " + t[3] + " "), t.slice(0, 4)
                    },
                    CHILD: function(t) {
                        return t[1] = t[1].toLowerCase(), "nth" === t[1].slice(0, 3) ? (t[3] || nt.error(t[0]), t[4] = +(t[4] ? t[5] + (t[6] || 1) : 2 * ("even" === t[3] || "odd" === t[3])), t[5] = +(t[7] + t[8] || "odd" === t[3])) : t[3] && nt.error(t[0]), t
                    },
                    PSEUDO: function(t) {
                        var e, i = !t[6] && t[2];
                        return Y.CHILD.test(t[0]) ? null : (t[3] ? t[2] = t[4] || t[5] || "" : i && U.test(i) && (e = m(i, !0)) && (e = i.indexOf(")", i.length - e) - i.length) && (t[0] = t[0].slice(0, e), t[2] = i.slice(0, e)), t.slice(0, 3))
                    }
                },
                filter: {
                    TAG: function(t) {
                        var e = t.replace(tt, et).toLowerCase();
                        return "*" === t ? function() {
                            return !0
                        } : function(t) {
                            return t.nodeName && t.nodeName.toLowerCase() === e
                        }
                    },
                    CLASS: function(t) {
                        var e = h[t + " "];
                        return e || (e = new RegExp("(^|" + I + ")" + t + "(" + I + "|$)")) && h(t, function(t) {
                            return e.test("string" == typeof t.className && t.className || void 0 !== t.getAttribute && t.getAttribute("class") || "")
                        })
                    },
                    ATTR: function(i, n, s) {
                        return function(t) {
                            var e = nt.attr(t, i);
                            return null == e ? "!=" === n : !n || (e += "", "=" === n ? e === s : "!=" === n ? e !== s : "^=" === n ? s && 0 === e.indexOf(s) : "*=" === n ? s && -1 < e.indexOf(s) : "$=" === n ? s && e.slice(-s.length) === s : "~=" === n ? -1 < (" " + e.replace(R, " ") + " ").indexOf(s) : "|=" === n && (e === s || e.slice(0, s.length + 1) === s + "-"))
                        }
                    },
                    CHILD: function(f, t, e, m, g) {
                        var v = "nth" !== f.slice(0, 3),
                            y = "last" !== f.slice(-4),
                            w = "of-type" === t;
                        return 1 === m && 0 === g ? function(t) {
                            return !!t.parentNode
                        } : function(t, e, i) {
                            var n, s, o, r, a, l, c = v !== y ? "nextSibling" : "previousSibling",
                                d = t.parentNode,
                                u = w && t.nodeName.toLowerCase(),
                                h = !i && !w,
                                p = !1;
                            if (d) {
                                if (v) {
                                    for (; c;) {
                                        for (r = t; r = r[c];)
                                            if (w ? r.nodeName.toLowerCase() === u : 1 === r.nodeType) return !1;
                                        l = c = "only" === f && !l && "nextSibling"
                                    }
                                    return !0
                                }
                                if (l = [y ? d.firstChild : d.lastChild], y && h) {
                                    for (p = (a = (n = (s = (o = (r = d)[C] || (r[C] = {}))[r.uniqueID] || (o[r.uniqueID] = {}))[f] || [])[0] === $ && n[1]) && n[2], r = a && d.childNodes[a]; r = ++a && r && r[c] || (p = a = 0) || l.pop();)
                                        if (1 === r.nodeType && ++p && r === t) {
                                            s[f] = [$, a, p];
                                            break
                                        }
                                } else if (h && (p = a = (n = (s = (o = (r = t)[C] || (r[C] = {}))[r.uniqueID] || (o[r.uniqueID] = {}))[f] || [])[0] === $ && n[1]), !1 === p)
                                    for (;
                                        (r = ++a && r && r[c] || (p = a = 0) || l.pop()) && ((w ? r.nodeName.toLowerCase() !== u : 1 !== r.nodeType) || !++p || (h && ((s = (o = r[C] || (r[C] = {}))[r.uniqueID] || (o[r.uniqueID] = {}))[f] = [$, p]), r !== t)););
                                return (p -= g) === m || p % m == 0 && 0 <= p / m
                            }
                        }
                    },
                    PSEUDO: function(t, o) {
                        var e, r = b.pseudos[t] || b.setFilters[t.toLowerCase()] || nt.error("unsupported pseudo: " + t);
                        return r[C] ? r(o) : 1 < r.length ? (e = [t, t, "", o], b.setFilters.hasOwnProperty(t.toLowerCase()) ? ot(function(t, e) {
                            for (var i, n = r(t, o), s = n.length; s--;) t[i = P(t, n[s])] = !(e[i] = n[s])
                        }) : function(t) {
                            return r(t, 0, e)
                        }) : r
                    }
                },
                pseudos: {
                    not: ot(function(t) {
                        var n = [],
                            s = [],
                            a = u(t.replace(q, "$1"));
                        return a[C] ? ot(function(t, e, i, n) {
                            for (var s, o = a(t, null, n, []), r = t.length; r--;)(s = o[r]) && (t[r] = !(e[r] = s))
                        }) : function(t, e, i) {
                            return n[0] = t, a(n, null, i, s), n[0] = null, !s.pop()
                        }
                    }),
                    has: ot(function(e) {
                        return function(t) {
                            return 0 < nt(e, t).length
                        }
                    }),
                    contains: ot(function(e) {
                        return e = e.replace(tt, et),
                            function(t) {
                                return -1 < (t.textContent || t.innerText || o(t)).indexOf(e)
                            }
                    }),
                    lang: ot(function(i) {
                        return V.test(i || "") || nt.error("unsupported lang: " + i), i = i.replace(tt, et).toLowerCase(),
                            function(t) {
                                var e;
                                do {
                                    if (e = S ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return (e = e.toLowerCase()) === i || 0 === e.indexOf(i + "-")
                                } while ((t = t.parentNode) && 1 === t.nodeType);
                                return !1
                            }
                    }),
                    target: function(t) {
                        var e = i.location && i.location.hash;
                        return e && e.slice(1) === t.id
                    },
                    root: function(t) {
                        return t === r
                    },
                    focus: function(t) {
                        return t === T.activeElement && (!T.hasFocus || T.hasFocus()) && !!(t.type || t.href || ~t.tabIndex)
                    },
                    enabled: function(t) {
                        return !1 === t.disabled
                    },
                    disabled: function(t) {
                        return !0 === t.disabled
                    },
                    checked: function(t) {
                        var e = t.nodeName.toLowerCase();
                        return "input" === e && !!t.checked || "option" === e && !!t.selected
                    },
                    selected: function(t) {
                        return t.parentNode && t.parentNode.selectedIndex, !0 === t.selected
                    },
                    empty: function(t) {
                        for (t = t.firstChild; t; t = t.nextSibling)
                            if (t.nodeType < 6) return !1;
                        return !0
                    },
                    parent: function(t) {
                        return !b.pseudos.empty(t)
                    },
                    header: function(t) {
                        return K.test(t.nodeName)
                    },
                    input: function(t) {
                        return X.test(t.nodeName)
                    },
                    button: function(t) {
                        var e = t.nodeName.toLowerCase();
                        return "input" === e && "button" === t.type || "button" === e
                    },
                    text: function(t) {
                        var e;
                        return "input" === t.nodeName.toLowerCase() && "text" === t.type && (null == (e = t.getAttribute("type")) || "text" === e.toLowerCase())
                    },
                    first: ut(function() {
                        return [0]
                    }),
                    last: ut(function(t, e) {
                        return [e - 1]
                    }),
                    eq: ut(function(t, e, i) {
                        return [i < 0 ? i + e : i]
                    }),
                    even: ut(function(t, e) {
                        for (var i = 0; i < e; i += 2) t.push(i);
                        return t
                    }),
                    odd: ut(function(t, e) {
                        for (var i = 1; i < e; i += 2) t.push(i);
                        return t
                    }),
                    lt: ut(function(t, e, i) {
                        for (var n = i < 0 ? i + e : i; 0 <= --n;) t.push(n);
                        return t
                    }),
                    gt: ut(function(t, e, i) {
                        for (var n = i < 0 ? i + e : i; ++n < e;) t.push(n);
                        return t
                    })
                }
            }).pseudos.nth = b.pseudos.eq, {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0
            }) b.pseudos[t] = ct(t);
        for (t in {
                submit: !0,
                reset: !0
            }) b.pseudos[t] = dt(t);

        function pt() {}

        function ft(t) {
            for (var e = 0, i = t.length, n = ""; e < i; e++) n += t[e].value;
            return n
        }

        function mt(a, t, e) {
            var l = t.dir,
                c = e && "parentNode" === l,
                d = n++;
            return t.first ? function(t, e, i) {
                for (; t = t[l];)
                    if (1 === t.nodeType || c) return a(t, e, i)
            } : function(t, e, i) {
                var n, s, o, r = [$, d];
                if (i) {
                    for (; t = t[l];)
                        if ((1 === t.nodeType || c) && a(t, e, i)) return !0
                } else
                    for (; t = t[l];)
                        if (1 === t.nodeType || c) {
                            if ((n = (s = (o = t[C] || (t[C] = {}))[t.uniqueID] || (o[t.uniqueID] = {}))[l]) && n[0] === $ && n[1] === d) return r[2] = n[2];
                            if ((s[l] = r)[2] = a(t, e, i)) return !0
                        }
            }
        }

        function gt(s) {
            return 1 < s.length ? function(t, e, i) {
                for (var n = s.length; n--;)
                    if (!s[n](t, e, i)) return !1;
                return !0
            } : s[0]
        }

        function vt(t, e, i, n, s) {
            for (var o, r = [], a = 0, l = t.length, c = null != e; a < l; a++)(o = t[a]) && (i && !i(o, n, s) || (r.push(o), c && e.push(a)));
            return r
        }

        function yt(p, f, m, g, v, t) {
            return g && !g[C] && (g = yt(g)), v && !v[C] && (v = yt(v, t)), ot(function(t, e, i, n) {
                var s, o, r, a = [],
                    l = [],
                    c = e.length,
                    d = t || function(t, e, i) {
                        for (var n = 0, s = e.length; n < s; n++) nt(t, e[n], i);
                        return i
                    }(f || "*", i.nodeType ? [i] : i, []),
                    u = !p || !t && f ? d : vt(d, a, p, i, n),
                    h = m ? v || (t ? p : c || g) ? [] : e : u;
                if (m && m(u, h, i, n), g)
                    for (s = vt(h, l), g(s, [], i, n), o = s.length; o--;)(r = s[o]) && (h[l[o]] = !(u[l[o]] = r));
                if (t) {
                    if (v || p) {
                        if (v) {
                            for (s = [], o = h.length; o--;)(r = h[o]) && s.push(u[o] = r);
                            v(null, h = [], s, n)
                        }
                        for (o = h.length; o--;)(r = h[o]) && -1 < (s = v ? P(t, r) : a[o]) && (t[s] = !(e[s] = r))
                    }
                } else h = vt(h === e ? h.splice(c, h.length) : h), v ? v(null, e, h, n) : H.apply(e, h)
            })
        }

        function wt(t) {
            for (var s, e, i, n = t.length, o = b.relative[t[0].type], r = o || b.relative[" "], a = o ? 1 : 0, l = mt(function(t) {
                    return t === s
                }, r, !0), c = mt(function(t) {
                    return -1 < P(s, t)
                }, r, !0), d = [function(t, e, i) {
                    var n = !o && (i || e !== x) || ((s = e).nodeType ? l(t, e, i) : c(t, e, i));
                    return s = null, n
                }]; a < n; a++)
                if (e = b.relative[t[a].type]) d = [mt(gt(d), e)];
                else {
                    if ((e = b.filter[t[a].type].apply(null, t[a].matches))[C]) {
                        for (i = ++a; i < n && !b.relative[t[i].type]; i++);
                        return yt(1 < a && gt(d), 1 < a && ft(t.slice(0, a - 1).concat({
                            value: " " === t[a - 2].type ? "*" : ""
                        })).replace(q, "$1"), e, a < i && wt(t.slice(a, i)), i < n && wt(t = t.slice(i)), i < n && ft(t))
                    }
                    d.push(e)
                } return gt(d)
        }
        return pt.prototype = b.filters = b.pseudos, b.setFilters = new pt, m = nt.tokenize = function(t, e) {
            var i, n, s, o, r, a, l, c = p[t + " "];
            if (c) return e ? 0 : c.slice(0);
            for (r = t, a = [], l = b.preFilter; r;) {
                for (o in i && !(n = F.exec(r)) || (n && (r = r.slice(n[0].length) || r), a.push(s = [])), i = !1, (n = W.exec(r)) && (i = n.shift(), s.push({
                        value: i,
                        type: n[0].replace(q, " ")
                    }), r = r.slice(i.length)), b.filter) !(n = Y[o].exec(r)) || l[o] && !(n = l[o](n)) || (i = n.shift(), s.push({
                    value: i,
                    type: o,
                    matches: n
                }), r = r.slice(i.length));
                if (!i) break
            }
            return e ? r.length : r ? nt.error(t) : p(t, a).slice(0)
        }, u = nt.compile = function(t, e) {
            var i, g, v, y, w, n, s = [],
                o = [],
                r = _[t + " "];
            if (!r) {
                for (e || (e = m(t)), i = e.length; i--;)(r = wt(e[i]))[C] ? s.push(r) : o.push(r);
                (r = _(t, (g = o, y = 0 < (v = s).length, w = 0 < g.length, n = function(t, e, i, n, s) {
                    var o, r, a, l = 0,
                        c = "0",
                        d = t && [],
                        u = [],
                        h = x,
                        p = t || w && b.find.TAG("*", s),
                        f = $ += null == h ? 1 : Math.random() || .1,
                        m = p.length;
                    for (s && (x = e === T || e || s); c !== m && null != (o = p[c]); c++) {
                        if (w && o) {
                            for (r = 0, e || o.ownerDocument === T || (k(o), i = !S); a = g[r++];)
                                if (a(o, e || T, i)) {
                                    n.push(o);
                                    break
                                } s && ($ = f)
                        }
                        y && ((o = !a && o) && l--, t && d.push(o))
                    }
                    if (l += c, y && c !== l) {
                        for (r = 0; a = v[r++];) a(d, u, e, i);
                        if (t) {
                            if (0 < l)
                                for (; c--;) d[c] || u[c] || (u[c] = M.call(n));
                            u = vt(u)
                        }
                        H.apply(n, u), s && !t && 0 < u.length && 1 < l + v.length && nt.uniqueSort(n)
                    }
                    return s && ($ = f, x = h), d
                }, y ? ot(n) : n))).selector = t
            }
            return r
        }, g = nt.select = function(t, e, i, n) {
            var s, o, r, a, l, c = "function" == typeof t && t,
                d = !n && m(t = c.selector || t);
            if (i = i || [], 1 === d.length) {
                if (2 < (o = d[0] = d[0].slice(0)).length && "ID" === (r = o[0]).type && f.getById && 9 === e.nodeType && S && b.relative[o[1].type]) {
                    if (!(e = (b.find.ID(r.matches[0].replace(tt, et), e) || [])[0])) return i;
                    c && (e = e.parentNode), t = t.slice(o.shift().value.length)
                }
                for (s = Y.needsContext.test(t) ? 0 : o.length; s-- && (r = o[s], !b.relative[a = r.type]);)
                    if ((l = b.find[a]) && (n = l(r.matches[0].replace(tt, et), J.test(o[0].type) && ht(e.parentNode) || e))) {
                        if (o.splice(s, 1), !(t = n.length && ft(o))) return H.apply(i, n), i;
                        break
                    }
            }
            return (c || u(t, d))(n, e, !S, i, !e || J.test(t) && ht(e.parentNode) || e), i
        }, f.sortStable = C.split("").sort(D).join("") === C, f.detectDuplicates = !!c, k(), f.sortDetached = rt(function(t) {
            return 1 & t.compareDocumentPosition(T.createElement("div"))
        }), rt(function(t) {
            return t.innerHTML = "<a href='#'></a>", "#" === t.firstChild.getAttribute("href")
        }) || at("type|href|height|width", function(t, e, i) {
            return i ? void 0 : t.getAttribute(e, "type" === e.toLowerCase() ? 1 : 2)
        }), f.attributes && rt(function(t) {
            return t.innerHTML = "<input/>", t.firstChild.setAttribute("value", ""), "" === t.firstChild.getAttribute("value")
        }) || at("value", function(t, e, i) {
            return i || "input" !== t.nodeName.toLowerCase() ? void 0 : t.defaultValue
        }), rt(function(t) {
            return null == t.getAttribute("disabled")
        }) || at(L, function(t, e, i) {
            var n;
            return i ? void 0 : !0 === t[e] ? e.toLowerCase() : (n = t.getAttributeNode(e)) && n.specified ? n.value : null
        }), nt
    }(T);
    C.find = p, C.expr = p.selectors, C.expr[":"] = C.expr.pseudos, C.uniqueSort = C.unique = p.uniqueSort, C.text = p.getText, C.isXMLDoc = p.isXML, C.contains = p.contains;
    var v = function(t, e, i) {
            for (var n = [], s = void 0 !== i;
                (t = t[e]) && 9 !== t.nodeType;)
                if (1 === t.nodeType) {
                    if (s && C(t).is(i)) break;
                    n.push(t)
                } return n
        },
        y = function(t, e) {
            for (var i = []; t; t = t.nextSibling) 1 === t.nodeType && t !== e && i.push(t);
            return i
        },
        w = C.expr.match.needsContext,
        b = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,
        x = /^.[^:#\[\.,]*$/;

    function k(t, i, n) {
        if (C.isFunction(i)) return C.grep(t, function(t, e) {
            return !!i.call(t, e, t) !== n
        });
        if (i.nodeType) return C.grep(t, function(t) {
            return t === i !== n
        });
        if ("string" == typeof i) {
            if (x.test(i)) return C.filter(i, t, n);
            i = C.filter(i, t)
        }
        return C.grep(t, function(t) {
            return -1 < s.call(i, t) !== n
        })
    }
    C.filter = function(t, e, i) {
        var n = e[0];
        return i && (t = ":not(" + t + ")"), 1 === e.length && 1 === n.nodeType ? C.find.matchesSelector(n, t) ? [n] : [] : C.find.matches(t, C.grep(e, function(t) {
            return 1 === t.nodeType
        }))
    }, C.fn.extend({
        find: function(t) {
            var e, i = this.length,
                n = [],
                s = this;
            if ("string" != typeof t) return this.pushStack(C(t).filter(function() {
                for (e = 0; e < i; e++)
                    if (C.contains(s[e], this)) return !0
            }));
            for (e = 0; e < i; e++) C.find(t, s[e], n);
            return (n = this.pushStack(1 < i ? C.unique(n) : n)).selector = this.selector ? this.selector + " " + t : t, n
        },
        filter: function(t) {
            return this.pushStack(k(this, t || [], !1))
        },
        not: function(t) {
            return this.pushStack(k(this, t || [], !0))
        },
        is: function(t) {
            return !!k(this, "string" == typeof t && w.test(t) ? C(t) : t || [], !1).length
        }
    });
    var $, _ = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/;
    (C.fn.init = function(t, e, i) {
        var n, s;
        if (!t) return this;
        if (i = i || $, "string" == typeof t) {
            if (!(n = "<" === t[0] && ">" === t[t.length - 1] && 3 <= t.length ? [null, t, null] : _.exec(t)) || !n[1] && e) return !e || e.jquery ? (e || i).find(t) : this.constructor(e).find(t);
            if (n[1]) {
                if (e = e instanceof C ? e[0] : e, C.merge(this, C.parseHTML(n[1], e && e.nodeType ? e.ownerDocument || e : S, !0)), b.test(n[1]) && C.isPlainObject(e))
                    for (n in e) C.isFunction(this[n]) ? this[n](e[n]) : this.attr(n, e[n]);
                return this
            }
            return (s = S.getElementById(n[2])) && s.parentNode && (this.length = 1, this[0] = s), this.context = S, this.selector = t, this
        }
        return t.nodeType ? (this.context = this[0] = t, this.length = 1, this) : C.isFunction(t) ? void 0 !== i.ready ? i.ready(t) : t(C) : (void 0 !== t.selector && (this.selector = t.selector, this.context = t.context), C.makeArray(t, this))
    }).prototype = C.fn, $ = C(S);
    var D = /^(?:parents|prev(?:Until|All))/,
        E = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };

    function M(t, e) {
        for (;
            (t = t[e]) && 1 !== t.nodeType;);
        return t
    }
    C.fn.extend({
        has: function(t) {
            var e = C(t, this),
                i = e.length;
            return this.filter(function() {
                for (var t = 0; t < i; t++)
                    if (C.contains(this, e[t])) return !0
            })
        },
        closest: function(t, e) {
            for (var i, n = 0, s = this.length, o = [], r = w.test(t) || "string" != typeof t ? C(t, e || this.context) : 0; n < s; n++)
                for (i = this[n]; i && i !== e; i = i.parentNode)
                    if (i.nodeType < 11 && (r ? -1 < r.index(i) : 1 === i.nodeType && C.find.matchesSelector(i, t))) {
                        o.push(i);
                        break
                    } return this.pushStack(1 < o.length ? C.uniqueSort(o) : o)
        },
        index: function(t) {
            return t ? "string" == typeof t ? s.call(C(t), this[0]) : s.call(this, t.jquery ? t[0] : t) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(t, e) {
            return this.pushStack(C.uniqueSort(C.merge(this.get(), C(t, e))))
        },
        addBack: function(t) {
            return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
        }
    }), C.each({
        parent: function(t) {
            var e = t.parentNode;
            return e && 11 !== e.nodeType ? e : null
        },
        parents: function(t) {
            return v(t, "parentNode")
        },
        parentsUntil: function(t, e, i) {
            return v(t, "parentNode", i)
        },
        next: function(t) {
            return M(t, "nextSibling")
        },
        prev: function(t) {
            return M(t, "previousSibling")
        },
        nextAll: function(t) {
            return v(t, "nextSibling")
        },
        prevAll: function(t) {
            return v(t, "previousSibling")
        },
        nextUntil: function(t, e, i) {
            return v(t, "nextSibling", i)
        },
        prevUntil: function(t, e, i) {
            return v(t, "previousSibling", i)
        },
        siblings: function(t) {
            return y((t.parentNode || {}).firstChild, t)
        },
        children: function(t) {
            return y(t.firstChild)
        },
        contents: function(t) {
            return t.contentDocument || C.merge([], t.childNodes)
        }
    }, function(n, s) {
        C.fn[n] = function(t, e) {
            var i = C.map(this, s, t);
            return "Until" !== n.slice(-5) && (e = t), e && "string" == typeof e && (i = C.filter(e, i)), 1 < this.length && (E[n] || C.uniqueSort(i), D.test(n) && i.reverse()), this.pushStack(i)
        }
    });
    var A, H = /\S+/g;

    function O() {
        S.removeEventListener("DOMContentLoaded", O), T.removeEventListener("load", O), C.ready()
    }
    C.Callbacks = function(n) {
        var t, i;
        n = "string" == typeof n ? (t = n, i = {}, C.each(t.match(H) || [], function(t, e) {
            i[e] = !0
        }), i) : C.extend({}, n);
        var s, e, o, r, a = [],
            l = [],
            c = -1,
            d = function() {
                for (r = n.once, o = s = !0; l.length; c = -1)
                    for (e = l.shift(); ++c < a.length;) !1 === a[c].apply(e[0], e[1]) && n.stopOnFalse && (c = a.length, e = !1);
                n.memory || (e = !1), s = !1, r && (a = e ? [] : "")
            },
            u = {
                add: function() {
                    return a && (e && !s && (c = a.length - 1, l.push(e)), function i(t) {
                        C.each(t, function(t, e) {
                            C.isFunction(e) ? n.unique && u.has(e) || a.push(e) : e && e.length && "string" !== C.type(e) && i(e)
                        })
                    }(arguments), e && !s && d()), this
                },
                remove: function() {
                    return C.each(arguments, function(t, e) {
                        for (var i; - 1 < (i = C.inArray(e, a, i));) a.splice(i, 1), i <= c && c--
                    }), this
                },
                has: function(t) {
                    return t ? -1 < C.inArray(t, a) : 0 < a.length
                },
                empty: function() {
                    return a && (a = []), this
                },
                disable: function() {
                    return r = l = [], a = e = "", this
                },
                disabled: function() {
                    return !a
                },
                lock: function() {
                    return r = l = [], e || (a = e = ""), this
                },
                locked: function() {
                    return !!r
                },
                fireWith: function(t, e) {
                    return r || (e = [t, (e = e || []).slice ? e.slice() : e], l.push(e), s || d()), this
                },
                fire: function() {
                    return u.fireWith(this, arguments), this
                },
                fired: function() {
                    return !!o
                }
            };
        return u
    }, C.extend({
        Deferred: function(t) {
            var o = [
                    ["resolve", "done", C.Callbacks("once memory"), "resolved"],
                    ["reject", "fail", C.Callbacks("once memory"), "rejected"],
                    ["notify", "progress", C.Callbacks("memory")]
                ],
                s = "pending",
                r = {
                    state: function() {
                        return s
                    },
                    always: function() {
                        return a.done(arguments).fail(arguments), this
                    },
                    then: function() {
                        var s = arguments;
                        return C.Deferred(function(n) {
                            C.each(o, function(t, e) {
                                var i = C.isFunction(s[t]) && s[t];
                                a[e[1]](function() {
                                    var t = i && i.apply(this, arguments);
                                    t && C.isFunction(t.promise) ? t.promise().progress(n.notify).done(n.resolve).fail(n.reject) : n[e[0] + "With"](this === r ? n.promise() : this, i ? [t] : arguments)
                                })
                            }), s = null
                        }).promise()
                    },
                    promise: function(t) {
                        return null != t ? C.extend(t, r) : r
                    }
                },
                a = {};
            return r.pipe = r.then, C.each(o, function(t, e) {
                var i = e[2],
                    n = e[3];
                r[e[1]] = i.add, n && i.add(function() {
                    s = n
                }, o[1 ^ t][2].disable, o[2][2].lock), a[e[0]] = function() {
                    return a[e[0] + "With"](this === a ? r : this, arguments), this
                }, a[e[0] + "With"] = i.fireWith
            }), r.promise(a), t && t.call(a, a), a
        },
        when: function(t) {
            var s, e, i, n = 0,
                o = d.call(arguments),
                r = o.length,
                a = 1 !== r || t && C.isFunction(t.promise) ? r : 0,
                l = 1 === a ? t : C.Deferred(),
                c = function(e, i, n) {
                    return function(t) {
                        i[e] = this, n[e] = 1 < arguments.length ? d.call(arguments) : t, n === s ? l.notifyWith(i, n) : --a || l.resolveWith(i, n)
                    }
                };
            if (1 < r)
                for (s = new Array(r), e = new Array(r), i = new Array(r); n < r; n++) o[n] && C.isFunction(o[n].promise) ? o[n].promise().progress(c(n, e, s)).done(c(n, i, o)).fail(l.reject) : --a;
            return a || l.resolveWith(i, o), l.promise()
        }
    }), C.fn.ready = function(t) {
        return C.ready.promise().done(t), this
    }, C.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function(t) {
            t ? C.readyWait++ : C.ready(!0)
        },
        ready: function(t) {
            (!0 === t ? --C.readyWait : C.isReady) || ((C.isReady = !0) !== t && 0 < --C.readyWait || (A.resolveWith(S, [C]), C.fn.triggerHandler && (C(S).triggerHandler("ready"), C(S).off("ready"))))
        }
    }), C.ready.promise = function(t) {
        return A || (A = C.Deferred(), "complete" === S.readyState || "loading" !== S.readyState && !S.documentElement.doScroll ? T.setTimeout(C.ready) : (S.addEventListener("DOMContentLoaded", O), T.addEventListener("load", O))), A.promise(t)
    }, C.ready.promise();
    var P = function(t, e, i, n, s, o, r) {
            var a = 0,
                l = t.length,
                c = null == i;
            if ("object" === C.type(i))
                for (a in s = !0, i) P(t, e, a, i[a], !0, o, r);
            else if (void 0 !== n && (s = !0, C.isFunction(n) || (r = !0), c && (r ? (e.call(t, n), e = null) : (c = e, e = function(t, e, i) {
                    return c.call(C(t), i)
                })), e))
                for (; a < l; a++) e(t[a], i, r ? n : n.call(t[a], a, e(t[a], i)));
            return s ? t : c ? e.call(t) : l ? e(t[0], i) : o
        },
        L = function(t) {
            return 1 === t.nodeType || 9 === t.nodeType || !+t.nodeType
        };

    function I() {
        this.expando = C.expando + I.uid++
    }
    I.uid = 1, I.prototype = {
        register: function(t, e) {
            var i = e || {};
            return t.nodeType ? t[this.expando] = i : Object.defineProperty(t, this.expando, {
                value: i,
                writable: !0,
                configurable: !0
            }), t[this.expando]
        },
        cache: function(t) {
            if (!L(t)) return {};
            var e = t[this.expando];
            return e || (e = {}, L(t) && (t.nodeType ? t[this.expando] = e : Object.defineProperty(t, this.expando, {
                value: e,
                configurable: !0
            }))), e
        },
        set: function(t, e, i) {
            var n, s = this.cache(t);
            if ("string" == typeof e) s[e] = i;
            else
                for (n in e) s[n] = e[n];
            return s
        },
        get: function(t, e) {
            return void 0 === e ? this.cache(t) : t[this.expando] && t[this.expando][e]
        },
        access: function(t, e, i) {
            var n;
            return void 0 === e || e && "string" == typeof e && void 0 === i ? void 0 !== (n = this.get(t, e)) ? n : this.get(t, C.camelCase(e)) : (this.set(t, e, i), void 0 !== i ? i : e)
        },
        remove: function(t, e) {
            var i, n, s, o = t[this.expando];
            if (void 0 !== o) {
                if (void 0 === e) this.register(t);
                else {
                    C.isArray(e) ? n = e.concat(e.map(C.camelCase)) : (s = C.camelCase(e), e in o ? n = [e, s] : n = (n = s) in o ? [n] : n.match(H) || []), i = n.length;
                    for (; i--;) delete o[n[i]]
                }(void 0 === e || C.isEmptyObject(o)) && (t.nodeType ? t[this.expando] = void 0 : delete t[this.expando])
            }
        },
        hasData: function(t) {
            var e = t[this.expando];
            return void 0 !== e && !C.isEmptyObject(e)
        }
    };
    var N = new I,
        z = new I,
        j = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        R = /[A-Z]/g;

    function q(t, e, i) {
        var n;
        if (void 0 === i && 1 === t.nodeType)
            if (n = "data-" + e.replace(R, "-$&").toLowerCase(), "string" == typeof(i = t.getAttribute(n))) {
                try {
                    i = "true" === i || "false" !== i && ("null" === i ? null : +i + "" === i ? +i : j.test(i) ? C.parseJSON(i) : i)
                } catch (t) {}
                z.set(t, e, i)
            } else i = void 0;
        return i
    }
    C.extend({
        hasData: function(t) {
            return z.hasData(t) || N.hasData(t)
        },
        data: function(t, e, i) {
            return z.access(t, e, i)
        },
        removeData: function(t, e) {
            z.remove(t, e)
        },
        _data: function(t, e, i) {
            return N.access(t, e, i)
        },
        _removeData: function(t, e) {
            N.remove(t, e)
        }
    }), C.fn.extend({
        data: function(n, t) {
            var e, i, s, o = this[0],
                r = o && o.attributes;
            if (void 0 === n) {
                if (this.length && (s = z.get(o), 1 === o.nodeType && !N.get(o, "hasDataAttrs"))) {
                    for (e = r.length; e--;) r[e] && (0 === (i = r[e].name).indexOf("data-") && (i = C.camelCase(i.slice(5)), q(o, i, s[i])));
                    N.set(o, "hasDataAttrs", !0)
                }
                return s
            }
            return "object" == typeof n ? this.each(function() {
                z.set(this, n)
            }) : P(this, function(e) {
                var t, i;
                if (o && void 0 === e) {
                    if (void 0 !== (t = z.get(o, n) || z.get(o, n.replace(R, "-$&").toLowerCase()))) return t;
                    if (i = C.camelCase(n), void 0 !== (t = z.get(o, i))) return t;
                    if (void 0 !== (t = q(o, i, void 0))) return t
                } else i = C.camelCase(n), this.each(function() {
                    var t = z.get(this, i);
                    z.set(this, i, e), -1 < n.indexOf("-") && void 0 !== t && z.set(this, n, e)
                })
            }, null, t, 1 < arguments.length, null, !0)
        },
        removeData: function(t) {
            return this.each(function() {
                z.remove(this, t)
            })
        }
    }), C.extend({
        queue: function(t, e, i) {
            var n;
            return t ? (e = (e || "fx") + "queue", n = N.get(t, e), i && (!n || C.isArray(i) ? n = N.access(t, e, C.makeArray(i)) : n.push(i)), n || []) : void 0
        },
        dequeue: function(t, e) {
            e = e || "fx";
            var i = C.queue(t, e),
                n = i.length,
                s = i.shift(),
                o = C._queueHooks(t, e);
            "inprogress" === s && (s = i.shift(), n--), s && ("fx" === e && i.unshift("inprogress"), delete o.stop, s.call(t, function() {
                C.dequeue(t, e)
            }, o)), !n && o && o.empty.fire()
        },
        _queueHooks: function(t, e) {
            var i = e + "queueHooks";
            return N.get(t, i) || N.access(t, i, {
                empty: C.Callbacks("once memory").add(function() {
                    N.remove(t, [e + "queue", i])
                })
            })
        }
    }), C.fn.extend({
        queue: function(e, i) {
            var t = 2;
            return "string" != typeof e && (i = e, e = "fx", t--), arguments.length < t ? C.queue(this[0], e) : void 0 === i ? this : this.each(function() {
                var t = C.queue(this, e, i);
                C._queueHooks(this, e), "fx" === e && "inprogress" !== t[0] && C.dequeue(this, e)
            })
        },
        dequeue: function(t) {
            return this.each(function() {
                C.dequeue(this, t)
            })
        },
        clearQueue: function(t) {
            return this.queue(t || "fx", [])
        },
        promise: function(t, e) {
            var i, n = 1,
                s = C.Deferred(),
                o = this,
                r = this.length,
                a = function() {
                    --n || s.resolveWith(o, [o])
                };
            for ("string" != typeof t && (e = t, t = void 0), t = t || "fx"; r--;)(i = N.get(o[r], t + "queueHooks")) && i.empty && (n++, i.empty.add(a));
            return a(), s.promise(e)
        }
    });
    var F = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        W = new RegExp("^(?:([+-])=|)(" + F + ")([a-z%]*)$", "i"),
        B = ["Top", "Right", "Bottom", "Left"],
        U = function(t, e) {
            return t = e || t, "none" === C.css(t, "display") || !C.contains(t.ownerDocument, t)
        };

    function V(t, e, i, n) {
        var s, o = 1,
            r = 20,
            a = n ? function() {
                return n.cur()
            } : function() {
                return C.css(t, e, "")
            },
            l = a(),
            c = i && i[3] || (C.cssNumber[e] ? "" : "px"),
            d = (C.cssNumber[e] || "px" !== c && +l) && W.exec(C.css(t, e));
        if (d && d[3] !== c)
            for (c = c || d[3], i = i || [], d = +l || 1; d /= o = o || ".5", C.style(t, e, d + c), o !== (o = a() / l) && 1 !== o && --r;);
        return i && (d = +d || +l || 0, s = i[1] ? d + (i[1] + 1) * i[2] : +i[2], n && (n.unit = c, n.start = d, n.end = s)), s
    }
    var Y = /^(?:checkbox|radio)$/i,
        X = /<([\w:-]+)/,
        K = /^$|\/(?:java|ecma)script/i,
        G = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""]
        };

    function Q(t, e) {
        var i = void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e || "*") : void 0 !== t.querySelectorAll ? t.querySelectorAll(e || "*") : [];
        return void 0 === e || e && C.nodeName(t, e) ? C.merge([t], i) : i
    }

    function J(t, e) {
        for (var i = 0, n = t.length; i < n; i++) N.set(t[i], "globalEval", !e || N.get(e[i], "globalEval"))
    }
    G.optgroup = G.option, G.tbody = G.tfoot = G.colgroup = G.caption = G.thead, G.th = G.td;
    var Z, tt, et = /<|&#?\w+;/;

    function it(t, e, i, n, s) {
        for (var o, r, a, l, c, d, u = e.createDocumentFragment(), h = [], p = 0, f = t.length; p < f; p++)
            if ((o = t[p]) || 0 === o)
                if ("object" === C.type(o)) C.merge(h, o.nodeType ? [o] : o);
                else if (et.test(o)) {
            for (r = r || u.appendChild(e.createElement("div")), a = (X.exec(o) || ["", ""])[1].toLowerCase(), l = G[a] || G._default, r.innerHTML = l[1] + C.htmlPrefilter(o) + l[2], d = l[0]; d--;) r = r.lastChild;
            C.merge(h, r.childNodes), (r = u.firstChild).textContent = ""
        } else h.push(e.createTextNode(o));
        for (u.textContent = "", p = 0; o = h[p++];)
            if (n && -1 < C.inArray(o, n)) s && s.push(o);
            else if (c = C.contains(o.ownerDocument, o), r = Q(u.appendChild(o), "script"), c && J(r), i)
            for (d = 0; o = r[d++];) K.test(o.type || "") && i.push(o);
        return u
    }
    Z = S.createDocumentFragment().appendChild(S.createElement("div")), (tt = S.createElement("input")).setAttribute("type", "radio"), tt.setAttribute("checked", "checked"), tt.setAttribute("name", "t"), Z.appendChild(tt), g.checkClone = Z.cloneNode(!0).cloneNode(!0).lastChild.checked, Z.innerHTML = "<textarea>x</textarea>", g.noCloneChecked = !!Z.cloneNode(!0).lastChild.defaultValue;
    var nt = /^key/,
        st = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        ot = /^([^.]*)(?:\.(.+)|)/;

    function rt() {
        return !0
    }

    function at() {
        return !1
    }

    function lt() {
        try {
            return S.activeElement
        } catch (t) {}
    }

    function ct(t, e, i, n, s, o) {
        var r, a;
        if ("object" == typeof e) {
            for (a in "string" != typeof i && (n = n || i, i = void 0), e) ct(t, a, i, n, e[a], o);
            return t
        }
        if (null == n && null == s ? (s = i, n = i = void 0) : null == s && ("string" == typeof i ? (s = n, n = void 0) : (s = n, n = i, i = void 0)), !1 === s) s = at;
        else if (!s) return t;
        return 1 === o && (r = s, (s = function(t) {
            return C().off(t), r.apply(this, arguments)
        }).guid = r.guid || (r.guid = C.guid++)), t.each(function() {
            C.event.add(this, e, s, n, i)
        })
    }
    C.event = {
        global: {},
        add: function(e, t, i, n, s) {
            var o, r, a, l, c, d, u, h, p, f, m, g = N.get(e);
            if (g)
                for (i.handler && (i = (o = i).handler, s = o.selector), i.guid || (i.guid = C.guid++), (l = g.events) || (l = g.events = {}), (r = g.handle) || (r = g.handle = function(t) {
                        return void 0 !== C && C.event.triggered !== t.type ? C.event.dispatch.apply(e, arguments) : void 0
                    }), c = (t = (t || "").match(H) || [""]).length; c--;) p = m = (a = ot.exec(t[c]) || [])[1], f = (a[2] || "").split(".").sort(), p && (u = C.event.special[p] || {}, p = (s ? u.delegateType : u.bindType) || p, u = C.event.special[p] || {}, d = C.extend({
                    type: p,
                    origType: m,
                    data: n,
                    handler: i,
                    guid: i.guid,
                    selector: s,
                    needsContext: s && C.expr.match.needsContext.test(s),
                    namespace: f.join(".")
                }, o), (h = l[p]) || ((h = l[p] = []).delegateCount = 0, u.setup && !1 !== u.setup.call(e, n, f, r) || e.addEventListener && e.addEventListener(p, r)), u.add && (u.add.call(e, d), d.handler.guid || (d.handler.guid = i.guid)), s ? h.splice(h.delegateCount++, 0, d) : h.push(d), C.event.global[p] = !0)
        },
        remove: function(t, e, i, n, s) {
            var o, r, a, l, c, d, u, h, p, f, m, g = N.hasData(t) && N.get(t);
            if (g && (l = g.events)) {
                for (c = (e = (e || "").match(H) || [""]).length; c--;)
                    if (p = m = (a = ot.exec(e[c]) || [])[1], f = (a[2] || "").split(".").sort(), p) {
                        for (u = C.event.special[p] || {}, h = l[p = (n ? u.delegateType : u.bindType) || p] || [], a = a[2] && new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)"), r = o = h.length; o--;) d = h[o], !s && m !== d.origType || i && i.guid !== d.guid || a && !a.test(d.namespace) || n && n !== d.selector && ("**" !== n || !d.selector) || (h.splice(o, 1), d.selector && h.delegateCount--, u.remove && u.remove.call(t, d));
                        r && !h.length && (u.teardown && !1 !== u.teardown.call(t, f, g.handle) || C.removeEvent(t, p, g.handle), delete l[p])
                    } else
                        for (p in l) C.event.remove(t, p + e[c], i, n, !0);
                C.isEmptyObject(l) && N.remove(t, "handle events")
            }
        },
        dispatch: function(t) {
            t = C.event.fix(t);
            var e, i, n, s, o, r = [],
                a = d.call(arguments),
                l = (N.get(this, "events") || {})[t.type] || [],
                c = C.event.special[t.type] || {};
            if ((a[0] = t).delegateTarget = this, !c.preDispatch || !1 !== c.preDispatch.call(this, t)) {
                for (r = C.event.handlers.call(this, t, l), e = 0;
                    (s = r[e++]) && !t.isPropagationStopped();)
                    for (t.currentTarget = s.elem, i = 0;
                        (o = s.handlers[i++]) && !t.isImmediatePropagationStopped();) t.rnamespace && !t.rnamespace.test(o.namespace) || (t.handleObj = o, t.data = o.data, void 0 !== (n = ((C.event.special[o.origType] || {}).handle || o.handler).apply(s.elem, a)) && !1 === (t.result = n) && (t.preventDefault(), t.stopPropagation()));
                return c.postDispatch && c.postDispatch.call(this, t), t.result
            }
        },
        handlers: function(t, e) {
            var i, n, s, o, r = [],
                a = e.delegateCount,
                l = t.target;
            if (a && l.nodeType && ("click" !== t.type || isNaN(t.button) || t.button < 1))
                for (; l !== this; l = l.parentNode || this)
                    if (1 === l.nodeType && (!0 !== l.disabled || "click" !== t.type)) {
                        for (n = [], i = 0; i < a; i++) void 0 === n[s = (o = e[i]).selector + " "] && (n[s] = o.needsContext ? -1 < C(s, this).index(l) : C.find(s, this, null, [l]).length), n[s] && n.push(o);
                        n.length && r.push({
                            elem: l,
                            handlers: n
                        })
                    } return a < e.length && r.push({
                elem: this,
                handlers: e.slice(a)
            }), r
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(t, e) {
                return null == t.which && (t.which = null != e.charCode ? e.charCode : e.keyCode), t
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(t, e) {
                var i, n, s, o = e.button;
                return null == t.pageX && null != e.clientX && (n = (i = t.target.ownerDocument || S).documentElement, s = i.body, t.pageX = e.clientX + (n && n.scrollLeft || s && s.scrollLeft || 0) - (n && n.clientLeft || s && s.clientLeft || 0), t.pageY = e.clientY + (n && n.scrollTop || s && s.scrollTop || 0) - (n && n.clientTop || s && s.clientTop || 0)), t.which || void 0 === o || (t.which = 1 & o ? 1 : 2 & o ? 3 : 4 & o ? 2 : 0), t
            }
        },
        fix: function(t) {
            if (t[C.expando]) return t;
            var e, i, n, s = t.type,
                o = t,
                r = this.fixHooks[s];
            for (r || (this.fixHooks[s] = r = st.test(s) ? this.mouseHooks : nt.test(s) ? this.keyHooks : {}), n = r.props ? this.props.concat(r.props) : this.props, t = new C.Event(o), e = n.length; e--;) t[i = n[e]] = o[i];
            return t.target || (t.target = S), 3 === t.target.nodeType && (t.target = t.target.parentNode), r.filter ? r.filter(t, o) : t
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    return this !== lt() && this.focus ? (this.focus(), !1) : void 0
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    return this === lt() && this.blur ? (this.blur(), !1) : void 0
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    return "checkbox" === this.type && this.click && C.nodeName(this, "input") ? (this.click(), !1) : void 0
                },
                _default: function(t) {
                    return C.nodeName(t.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(t) {
                    void 0 !== t.result && t.originalEvent && (t.originalEvent.returnValue = t.result)
                }
            }
        }
    }, C.removeEvent = function(t, e, i) {
        t.removeEventListener && t.removeEventListener(e, i)
    }, C.Event = function(t, e) {
        return this instanceof C.Event ? (t && t.type ? (this.originalEvent = t, this.type = t.type, this.isDefaultPrevented = t.defaultPrevented || void 0 === t.defaultPrevented && !1 === t.returnValue ? rt : at) : this.type = t, e && C.extend(this, e), this.timeStamp = t && t.timeStamp || C.now(), void(this[C.expando] = !0)) : new C.Event(t, e)
    }, C.Event.prototype = {
        constructor: C.Event,
        isDefaultPrevented: at,
        isPropagationStopped: at,
        isImmediatePropagationStopped: at,
        isSimulated: !1,
        preventDefault: function() {
            var t = this.originalEvent;
            this.isDefaultPrevented = rt, t && !this.isSimulated && t.preventDefault()
        },
        stopPropagation: function() {
            var t = this.originalEvent;
            this.isPropagationStopped = rt, t && !this.isSimulated && t.stopPropagation()
        },
        stopImmediatePropagation: function() {
            var t = this.originalEvent;
            this.isImmediatePropagationStopped = rt, t && !this.isSimulated && t.stopImmediatePropagation(), this.stopPropagation()
        }
    }, C.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(t, s) {
        C.event.special[t] = {
            delegateType: s,
            bindType: s,
            handle: function(t) {
                var e, i = t.relatedTarget,
                    n = t.handleObj;
                return i && (i === this || C.contains(this, i)) || (t.type = n.origType, e = n.handler.apply(this, arguments), t.type = s), e
            }
        }
    }), C.fn.extend({
        on: function(t, e, i, n) {
            return ct(this, t, e, i, n)
        },
        one: function(t, e, i, n) {
            return ct(this, t, e, i, n, 1)
        },
        off: function(t, e, i) {
            var n, s;
            if (t && t.preventDefault && t.handleObj) return n = t.handleObj, C(t.delegateTarget).off(n.namespace ? n.origType + "." + n.namespace : n.origType, n.selector, n.handler), this;
            if ("object" == typeof t) {
                for (s in t) this.off(s, e, t[s]);
                return this
            }
            return !1 !== e && "function" != typeof e || (i = e, e = void 0), !1 === i && (i = at), this.each(function() {
                C.event.remove(this, t, i, e)
            })
        }
    });
    var dt = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,
        ut = /<script|<style|<link/i,
        ht = /checked\s*(?:[^=]|=\s*.checked.)/i,
        pt = /^true\/(.*)/,
        ft = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

    function mt(t, e) {
        return C.nodeName(t, "table") && C.nodeName(11 !== e.nodeType ? e : e.firstChild, "tr") ? t.getElementsByTagName("tbody")[0] || t.appendChild(t.ownerDocument.createElement("tbody")) : t
    }

    function gt(t) {
        return t.type = (null !== t.getAttribute("type")) + "/" + t.type, t
    }

    function vt(t) {
        var e = pt.exec(t.type);
        return e ? t.type = e[1] : t.removeAttribute("type"), t
    }

    function yt(t, e) {
        var i, n, s, o, r, a, l, c;
        if (1 === e.nodeType) {
            if (N.hasData(t) && (o = N.access(t), r = N.set(e, o), c = o.events))
                for (s in delete r.handle, r.events = {}, c)
                    for (i = 0, n = c[s].length; i < n; i++) C.event.add(e, s, c[s][i]);
            z.hasData(t) && (a = z.access(t), l = C.extend({}, a), z.set(e, l))
        }
    }

    function wt(i, n, s, o) {
        n = m.apply([], n);
        var t, e, r, a, l, c, d = 0,
            u = i.length,
            h = u - 1,
            p = n[0],
            f = C.isFunction(p);
        if (f || 1 < u && "string" == typeof p && !g.checkClone && ht.test(p)) return i.each(function(t) {
            var e = i.eq(t);
            f && (n[0] = p.call(this, t, e.html())), wt(e, n, s, o)
        });
        if (u && (e = (t = it(n, i[0].ownerDocument, !1, i, o)).firstChild, 1 === t.childNodes.length && (t = e), e || o)) {
            for (a = (r = C.map(Q(t, "script"), gt)).length; d < u; d++) l = t, d !== h && (l = C.clone(l, !0, !0), a && C.merge(r, Q(l, "script"))), s.call(i[d], l, d);
            if (a)
                for (c = r[r.length - 1].ownerDocument, C.map(r, vt), d = 0; d < a; d++) l = r[d], K.test(l.type || "") && !N.access(l, "globalEval") && C.contains(c, l) && (l.src ? C._evalUrl && C._evalUrl(l.src) : C.globalEval(l.textContent.replace(ft, "")))
        }
        return i
    }

    function bt(t, e, i) {
        for (var n, s = e ? C.filter(e, t) : t, o = 0; null != (n = s[o]); o++) i || 1 !== n.nodeType || C.cleanData(Q(n)), n.parentNode && (i && C.contains(n.ownerDocument, n) && J(Q(n, "script")), n.parentNode.removeChild(n));
        return t
    }
    C.extend({
        htmlPrefilter: function(t) {
            return t.replace(dt, "<$1></$2>")
        },
        clone: function(t, e, i) {
            var n, s, o, r, a, l, c, d = t.cloneNode(!0),
                u = C.contains(t.ownerDocument, t);
            if (!(g.noCloneChecked || 1 !== t.nodeType && 11 !== t.nodeType || C.isXMLDoc(t)))
                for (r = Q(d), n = 0, s = (o = Q(t)).length; n < s; n++) a = o[n], l = r[n], void 0, "input" === (c = l.nodeName.toLowerCase()) && Y.test(a.type) ? l.checked = a.checked : "input" !== c && "textarea" !== c || (l.defaultValue = a.defaultValue);
            if (e)
                if (i)
                    for (o = o || Q(t), r = r || Q(d), n = 0, s = o.length; n < s; n++) yt(o[n], r[n]);
                else yt(t, d);
            return 0 < (r = Q(d, "script")).length && J(r, !u && Q(t, "script")), d
        },
        cleanData: function(t) {
            for (var e, i, n, s = C.event.special, o = 0; void 0 !== (i = t[o]); o++)
                if (L(i)) {
                    if (e = i[N.expando]) {
                        if (e.events)
                            for (n in e.events) s[n] ? C.event.remove(i, n) : C.removeEvent(i, n, e.handle);
                        i[N.expando] = void 0
                    }
                    i[z.expando] && (i[z.expando] = void 0)
                }
        }
    }), C.fn.extend({
        domManip: wt,
        detach: function(t) {
            return bt(this, t, !0)
        },
        remove: function(t) {
            return bt(this, t)
        },
        text: function(t) {
            return P(this, function(t) {
                return void 0 === t ? C.text(this) : this.empty().each(function() {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = t)
                })
            }, null, t, arguments.length)
        },
        append: function() {
            return wt(this, arguments, function(t) {
                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || mt(this, t).appendChild(t)
            })
        },
        prepend: function() {
            return wt(this, arguments, function(t) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var e = mt(this, t);
                    e.insertBefore(t, e.firstChild)
                }
            })
        },
        before: function() {
            return wt(this, arguments, function(t) {
                this.parentNode && this.parentNode.insertBefore(t, this)
            })
        },
        after: function() {
            return wt(this, arguments, function(t) {
                this.parentNode && this.parentNode.insertBefore(t, this.nextSibling)
            })
        },
        empty: function() {
            for (var t, e = 0; null != (t = this[e]); e++) 1 === t.nodeType && (C.cleanData(Q(t, !1)), t.textContent = "");
            return this
        },
        clone: function(t, e) {
            return t = null != t && t, e = null == e ? t : e, this.map(function() {
                return C.clone(this, t, e)
            })
        },
        html: function(t) {
            return P(this, function(t) {
                var e = this[0] || {},
                    i = 0,
                    n = this.length;
                if (void 0 === t && 1 === e.nodeType) return e.innerHTML;
                if ("string" == typeof t && !ut.test(t) && !G[(X.exec(t) || ["", ""])[1].toLowerCase()]) {
                    t = C.htmlPrefilter(t);
                    try {
                        for (; i < n; i++) 1 === (e = this[i] || {}).nodeType && (C.cleanData(Q(e, !1)), e.innerHTML = t);
                        e = 0
                    } catch (t) {}
                }
                e && this.empty().append(t)
            }, null, t, arguments.length)
        },
        replaceWith: function() {
            var i = [];
            return wt(this, arguments, function(t) {
                var e = this.parentNode;
                C.inArray(this, i) < 0 && (C.cleanData(Q(this)), e && e.replaceChild(t, this))
            }, i)
        }
    }), C.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(t, r) {
        C.fn[t] = function(t) {
            for (var e, i = [], n = C(t), s = n.length - 1, o = 0; o <= s; o++) e = o === s ? this : this.clone(!0), C(n[o])[r](e), a.apply(i, e.get());
            return this.pushStack(i)
        }
    });
    var xt, kt = {
        HTML: "block",
        BODY: "block"
    };

    function Tt(t, e) {
        var i = C(e.createElement(t)).appendTo(e.body),
            n = C.css(i[0], "display");
        return i.detach(), n
    }

    function St(t) {
        var e = S,
            i = kt[t];
        return i || ("none" !== (i = Tt(t, e)) && i || ((e = (xt = (xt || C("<iframe frameborder='0' width='0' height='0'/>")).appendTo(e.documentElement))[0].contentDocument).write(), e.close(), i = Tt(t, e), xt.detach()), kt[t] = i), i
    }
    var Ct = /^margin/,
        $t = new RegExp("^(" + F + ")(?!px)[a-z%]+$", "i"),
        _t = function(t) {
            var e = t.ownerDocument.defaultView;
            return e && e.opener || (e = T), e.getComputedStyle(t)
        },
        Dt = function(t, e, i, n) {
            var s, o, r = {};
            for (o in e) r[o] = t.style[o], t.style[o] = e[o];
            for (o in s = i.apply(t, n || []), e) t.style[o] = r[o];
            return s
        },
        Et = S.documentElement;

    function Mt(t, e, i) {
        var n, s, o, r, a = t.style;
        return "" !== (r = (i = i || _t(t)) ? i.getPropertyValue(e) || i[e] : void 0) && void 0 !== r || C.contains(t.ownerDocument, t) || (r = C.style(t, e)), i && !g.pixelMarginRight() && $t.test(r) && Ct.test(e) && (n = a.width, s = a.minWidth, o = a.maxWidth, a.minWidth = a.maxWidth = a.width = r, r = i.width, a.width = n, a.minWidth = s, a.maxWidth = o), void 0 !== r ? r + "" : r
    }

    function At(t, e) {
        return {
            get: function() {
                return t() ? void delete this.get : (this.get = e).apply(this, arguments)
            }
        }
    }! function() {
        var e, i, n, s, o = S.createElement("div"),
            r = S.createElement("div");
        if (r.style) {
            function t() {
                r.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", r.innerHTML = "", Et.appendChild(o);
                var t = T.getComputedStyle(r);
                e = "1%" !== t.top, s = "2px" === t.marginLeft, i = "4px" === t.width, r.style.marginRight = "50%", n = "4px" === t.marginRight, Et.removeChild(o)
            }
            r.style.backgroundClip = "content-box", r.cloneNode(!0).style.backgroundClip = "", g.clearCloneStyle = "content-box" === r.style.backgroundClip, o.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", o.appendChild(r), C.extend(g, {
                pixelPosition: function() {
                    return t(), e
                },
                boxSizingReliable: function() {
                    return null == i && t(), i
                },
                pixelMarginRight: function() {
                    return null == i && t(), n
                },
                reliableMarginLeft: function() {
                    return null == i && t(), s
                },
                reliableMarginRight: function() {
                    var t, e = r.appendChild(S.createElement("div"));
                    return e.style.cssText = r.style.cssText = "-webkit-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", e.style.marginRight = e.style.width = "0", r.style.width = "1px", Et.appendChild(o), t = !parseFloat(T.getComputedStyle(e).marginRight), Et.removeChild(o), r.removeChild(e), t
                }
            })
        }
    }();
    var Ht = /^(none|table(?!-c[ea]).+)/,
        Ot = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        Pt = {
            letterSpacing: "0",
            fontWeight: "400"
        },
        Lt = ["Webkit", "O", "Moz", "ms"],
        It = S.createElement("div").style;

    function Nt(t) {
        if (t in It) return t;
        for (var e = t[0].toUpperCase() + t.slice(1), i = Lt.length; i--;)
            if ((t = Lt[i] + e) in It) return t
    }

    function zt(t, e, i) {
        var n = W.exec(e);
        return n ? Math.max(0, n[2] - (i || 0)) + (n[3] || "px") : e
    }

    function jt(t, e, i, n, s) {
        for (var o = i === (n ? "border" : "content") ? 4 : "width" === e ? 1 : 0, r = 0; o < 4; o += 2) "margin" === i && (r += C.css(t, i + B[o], !0, s)), n ? ("content" === i && (r -= C.css(t, "padding" + B[o], !0, s)), "margin" !== i && (r -= C.css(t, "border" + B[o] + "Width", !0, s))) : (r += C.css(t, "padding" + B[o], !0, s), "padding" !== i && (r += C.css(t, "border" + B[o] + "Width", !0, s)));
        return r
    }

    function Rt(t, e, i) {
        var n = !0,
            s = "width" === e ? t.offsetWidth : t.offsetHeight,
            o = _t(t),
            r = "border-box" === C.css(t, "boxSizing", !1, o);
        if (s <= 0 || null == s) {
            if (((s = Mt(t, e, o)) < 0 || null == s) && (s = t.style[e]), $t.test(s)) return s;
            n = r && (g.boxSizingReliable() || s === t.style[e]), s = parseFloat(s) || 0
        }
        return s + jt(t, e, i || (r ? "border" : "content"), n, o) + "px"
    }

    function qt(t, e) {
        for (var i, n, s, o = [], r = 0, a = t.length; r < a; r++)(n = t[r]).style && (o[r] = N.get(n, "olddisplay"), i = n.style.display, e ? (o[r] || "none" !== i || (n.style.display = ""), "" === n.style.display && U(n) && (o[r] = N.access(n, "olddisplay", St(n.nodeName)))) : (s = U(n), "none" === i && s || N.set(n, "olddisplay", s ? i : C.css(n, "display"))));
        for (r = 0; r < a; r++)(n = t[r]).style && (e && "none" !== n.style.display && "" !== n.style.display || (n.style.display = e ? o[r] || "" : "none"));
        return t
    }

    function Ft(t, e, i, n, s) {
        return new Ft.prototype.init(t, e, i, n, s)
    }
    C.extend({
        cssHooks: {
            opacity: {
                get: function(t, e) {
                    if (e) {
                        var i = Mt(t, "opacity");
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
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            float: "cssFloat"
        },
        style: function(t, e, i, n) {
            if (t && 3 !== t.nodeType && 8 !== t.nodeType && t.style) {
                var s, o, r, a = C.camelCase(e),
                    l = t.style;
                return e = C.cssProps[a] || (C.cssProps[a] = Nt(a) || a), r = C.cssHooks[e] || C.cssHooks[a], void 0 === i ? r && "get" in r && void 0 !== (s = r.get(t, !1, n)) ? s : l[e] : ("string" === (o = typeof i) && (s = W.exec(i)) && s[1] && (i = V(t, e, s), o = "number"), void(null != i && i == i && ("number" === o && (i += s && s[3] || (C.cssNumber[a] ? "" : "px")), g.clearCloneStyle || "" !== i || 0 !== e.indexOf("background") || (l[e] = "inherit"), r && "set" in r && void 0 === (i = r.set(t, i, n)) || (l[e] = i))))
            }
        },
        css: function(t, e, i, n) {
            var s, o, r, a = C.camelCase(e);
            return e = C.cssProps[a] || (C.cssProps[a] = Nt(a) || a), (r = C.cssHooks[e] || C.cssHooks[a]) && "get" in r && (s = r.get(t, !0, i)), void 0 === s && (s = Mt(t, e, n)), "normal" === s && e in Pt && (s = Pt[e]), "" === i || i ? (o = parseFloat(s), !0 === i || isFinite(o) ? o || 0 : s) : s
        }
    }), C.each(["height", "width"], function(t, r) {
        C.cssHooks[r] = {
            get: function(t, e, i) {
                return e ? Ht.test(C.css(t, "display")) && 0 === t.offsetWidth ? Dt(t, Ot, function() {
                    return Rt(t, r, i)
                }) : Rt(t, r, i) : void 0
            },
            set: function(t, e, i) {
                var n, s = i && _t(t),
                    o = i && jt(t, r, i, "border-box" === C.css(t, "boxSizing", !1, s), s);
                return o && (n = W.exec(e)) && "px" !== (n[3] || "px") && (t.style[r] = e, e = C.css(t, r)), zt(0, e, o)
            }
        }
    }), C.cssHooks.marginLeft = At(g.reliableMarginLeft, function(t, e) {
        return e ? (parseFloat(Mt(t, "marginLeft")) || t.getBoundingClientRect().left - Dt(t, {
            marginLeft: 0
        }, function() {
            return t.getBoundingClientRect().left
        })) + "px" : void 0
    }), C.cssHooks.marginRight = At(g.reliableMarginRight, function(t, e) {
        return e ? Dt(t, {
            display: "inline-block"
        }, Mt, [t, "marginRight"]) : void 0
    }), C.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(s, o) {
        C.cssHooks[s + o] = {
            expand: function(t) {
                for (var e = 0, i = {}, n = "string" == typeof t ? t.split(" ") : [t]; e < 4; e++) i[s + B[e] + o] = n[e] || n[e - 2] || n[0];
                return i
            }
        }, Ct.test(s) || (C.cssHooks[s + o].set = zt)
    }), C.fn.extend({
        css: function(t, e) {
            return P(this, function(t, e, i) {
                var n, s, o = {},
                    r = 0;
                if (C.isArray(e)) {
                    for (n = _t(t), s = e.length; r < s; r++) o[e[r]] = C.css(t, e[r], !1, n);
                    return o
                }
                return void 0 !== i ? C.style(t, e, i) : C.css(t, e)
            }, t, e, 1 < arguments.length)
        },
        show: function() {
            return qt(this, !0)
        },
        hide: function() {
            return qt(this)
        },
        toggle: function(t) {
            return "boolean" == typeof t ? t ? this.show() : this.hide() : this.each(function() {
                U(this) ? C(this).show() : C(this).hide()
            })
        }
    }), ((C.Tween = Ft).prototype = {
        constructor: Ft,
        init: function(t, e, i, n, s, o) {
            this.elem = t, this.prop = i, this.easing = s || C.easing._default, this.options = e, this.start = this.now = this.cur(), this.end = n, this.unit = o || (C.cssNumber[i] ? "" : "px")
        },
        cur: function() {
            var t = Ft.propHooks[this.prop];
            return t && t.get ? t.get(this) : Ft.propHooks._default.get(this)
        },
        run: function(t) {
            var e, i = Ft.propHooks[this.prop];
            return this.options.duration ? this.pos = e = C.easing[this.easing](t, this.options.duration * t, 0, 1, this.options.duration) : this.pos = e = t, this.now = (this.end - this.start) * e + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), i && i.set ? i.set(this) : Ft.propHooks._default.set(this), this
        }
    }).init.prototype = Ft.prototype, (Ft.propHooks = {
        _default: {
            get: function(t) {
                var e;
                return 1 !== t.elem.nodeType || null != t.elem[t.prop] && null == t.elem.style[t.prop] ? t.elem[t.prop] : (e = C.css(t.elem, t.prop, "")) && "auto" !== e ? e : 0
            },
            set: function(t) {
                C.fx.step[t.prop] ? C.fx.step[t.prop](t) : 1 !== t.elem.nodeType || null == t.elem.style[C.cssProps[t.prop]] && !C.cssHooks[t.prop] ? t.elem[t.prop] = t.now : C.style(t.elem, t.prop, t.now + t.unit)
            }
        }
    }).scrollTop = Ft.propHooks.scrollLeft = {
        set: function(t) {
            t.elem.nodeType && t.elem.parentNode && (t.elem[t.prop] = t.now)
        }
    }, C.easing = {
        linear: function(t) {
            return t
        },
        swing: function(t) {
            return .5 - Math.cos(t * Math.PI) / 2
        },
        _default: "swing"
    }, C.fx = Ft.prototype.init, C.fx.step = {};
    var Wt, Bt, Ut, Vt, Yt, Xt = /^(?:toggle|show|hide)$/,
        Kt = /queueHooks$/;

    function Gt() {
        return T.setTimeout(function() {
            Wt = void 0
        }), Wt = C.now()
    }

    function Qt(t, e) {
        var i, n = 0,
            s = {
                height: t
            };
        for (e = e ? 1 : 0; n < 4; n += 2 - e) s["margin" + (i = B[n])] = s["padding" + i] = t;
        return e && (s.opacity = s.width = t), s
    }

    function Jt(t, e, i) {
        for (var n, s = (Zt.tweeners[e] || []).concat(Zt.tweeners["*"]), o = 0, r = s.length; o < r; o++)
            if (n = s[o].call(i, e, t)) return n
    }

    function Zt(o, t, e) {
        var i, r, n = 0,
            s = Zt.prefilters.length,
            a = C.Deferred().always(function() {
                delete l.elem
            }),
            l = function() {
                if (r) return !1;
                for (var t = Wt || Gt(), e = Math.max(0, c.startTime + c.duration - t), i = 1 - (e / c.duration || 0), n = 0, s = c.tweens.length; n < s; n++) c.tweens[n].run(i);
                return a.notifyWith(o, [c, i, e]), i < 1 && s ? e : (a.resolveWith(o, [c]), !1)
            },
            c = a.promise({
                elem: o,
                props: C.extend({}, t),
                opts: C.extend(!0, {
                    specialEasing: {},
                    easing: C.easing._default
                }, e),
                originalProperties: t,
                originalOptions: e,
                startTime: Wt || Gt(),
                duration: e.duration,
                tweens: [],
                createTween: function(t, e) {
                    var i = C.Tween(o, c.opts, t, e, c.opts.specialEasing[t] || c.opts.easing);
                    return c.tweens.push(i), i
                },
                stop: function(t) {
                    var e = 0,
                        i = t ? c.tweens.length : 0;
                    if (r) return this;
                    for (r = !0; e < i; e++) c.tweens[e].run(1);
                    return t ? (a.notifyWith(o, [c, 1, 0]), a.resolveWith(o, [c, t])) : a.rejectWith(o, [c, t]), this
                }
            }),
            d = c.props;
        for (function(t, e) {
                var i, n, s, o, r;
                for (i in t)
                    if (s = e[n = C.camelCase(i)], o = t[i], C.isArray(o) && (s = o[1], o = t[i] = o[0]), i !== n && (t[n] = o, delete t[i]), (r = C.cssHooks[n]) && "expand" in r)
                        for (i in o = r.expand(o), delete t[n], o) i in t || (t[i] = o[i], e[i] = s);
                    else e[n] = s
            }(d, c.opts.specialEasing); n < s; n++)
            if (i = Zt.prefilters[n].call(c, o, d, c.opts)) return C.isFunction(i.stop) && (C._queueHooks(c.elem, c.opts.queue).stop = C.proxy(i.stop, i)), i;
        return C.map(d, Jt, c), C.isFunction(c.opts.start) && c.opts.start.call(o, c), C.fx.timer(C.extend(l, {
            elem: o,
            anim: c,
            queue: c.opts.queue
        })), c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always)
    }
    C.Animation = C.extend(Zt, {
        tweeners: {
            "*": [function(t, e) {
                var i = this.createTween(t, e);
                return V(i.elem, t, W.exec(e), i), i
            }]
        },
        tweener: function(t, e) {
            C.isFunction(t) ? (e = t, t = ["*"]) : t = t.match(H);
            for (var i, n = 0, s = t.length; n < s; n++) i = t[n], Zt.tweeners[i] = Zt.tweeners[i] || [], Zt.tweeners[i].unshift(e)
        },
        prefilters: [function(e, t, i) {
            var n, s, o, r, a, l, c, d = this,
                u = {},
                h = e.style,
                p = e.nodeType && U(e),
                f = N.get(e, "fxshow");
            for (n in i.queue || (null == (a = C._queueHooks(e, "fx")).unqueued && (a.unqueued = 0, l = a.empty.fire, a.empty.fire = function() {
                    a.unqueued || l()
                }), a.unqueued++, d.always(function() {
                    d.always(function() {
                        a.unqueued--, C.queue(e, "fx").length || a.empty.fire()
                    })
                })), 1 === e.nodeType && ("height" in t || "width" in t) && (i.overflow = [h.overflow, h.overflowX, h.overflowY], "inline" === ("none" === (c = C.css(e, "display")) ? N.get(e, "olddisplay") || St(e.nodeName) : c) && "none" === C.css(e, "float") && (h.display = "inline-block")), i.overflow && (h.overflow = "hidden", d.always(function() {
                    h.overflow = i.overflow[0], h.overflowX = i.overflow[1], h.overflowY = i.overflow[2]
                })), t)
                if (s = t[n], Xt.exec(s)) {
                    if (delete t[n], o = o || "toggle" === s, s === (p ? "hide" : "show")) {
                        if ("show" !== s || !f || void 0 === f[n]) continue;
                        p = !0
                    }
                    u[n] = f && f[n] || C.style(e, n)
                } else c = void 0;
            if (C.isEmptyObject(u)) "inline" === ("none" === c ? St(e.nodeName) : c) && (h.display = c);
            else
                for (n in f ? "hidden" in f && (p = f.hidden) : f = N.access(e, "fxshow", {}), o && (f.hidden = !p), p ? C(e).show() : d.done(function() {
                        C(e).hide()
                    }), d.done(function() {
                        var t;
                        for (t in N.remove(e, "fxshow"), u) C.style(e, t, u[t])
                    }), u) r = Jt(p ? f[n] : 0, n, d), n in f || (f[n] = r.start, p && (r.end = r.start, r.start = "width" === n || "height" === n ? 1 : 0))
        }],
        prefilter: function(t, e) {
            e ? Zt.prefilters.unshift(t) : Zt.prefilters.push(t)
        }
    }), C.speed = function(t, e, i) {
        var n = t && "object" == typeof t ? C.extend({}, t) : {
            complete: i || !i && e || C.isFunction(t) && t,
            duration: t,
            easing: i && e || e && !C.isFunction(e) && e
        };
        return n.duration = C.fx.off ? 0 : "number" == typeof n.duration ? n.duration : n.duration in C.fx.speeds ? C.fx.speeds[n.duration] : C.fx.speeds._default, null != n.queue && !0 !== n.queue || (n.queue = "fx"), n.old = n.complete, n.complete = function() {
            C.isFunction(n.old) && n.old.call(this), n.queue && C.dequeue(this, n.queue)
        }, n
    }, C.fn.extend({
        fadeTo: function(t, e, i, n) {
            return this.filter(U).css("opacity", 0).show().end().animate({
                opacity: e
            }, t, i, n)
        },
        animate: function(e, t, i, n) {
            var s = C.isEmptyObject(e),
                o = C.speed(t, i, n),
                r = function() {
                    var t = Zt(this, C.extend({}, e), o);
                    (s || N.get(this, "finish")) && t.stop(!0)
                };
            return r.finish = r, s || !1 === o.queue ? this.each(r) : this.queue(o.queue, r)
        },
        stop: function(s, t, o) {
            var r = function(t) {
                var e = t.stop;
                delete t.stop, e(o)
            };
            return "string" != typeof s && (o = t, t = s, s = void 0), t && !1 !== s && this.queue(s || "fx", []), this.each(function() {
                var t = !0,
                    e = null != s && s + "queueHooks",
                    i = C.timers,
                    n = N.get(this);
                if (e) n[e] && n[e].stop && r(n[e]);
                else
                    for (e in n) n[e] && n[e].stop && Kt.test(e) && r(n[e]);
                for (e = i.length; e--;) i[e].elem !== this || null != s && i[e].queue !== s || (i[e].anim.stop(o), t = !1, i.splice(e, 1));
                !t && o || C.dequeue(this, s)
            })
        },
        finish: function(r) {
            return !1 !== r && (r = r || "fx"), this.each(function() {
                var t, e = N.get(this),
                    i = e[r + "queue"],
                    n = e[r + "queueHooks"],
                    s = C.timers,
                    o = i ? i.length : 0;
                for (e.finish = !0, C.queue(this, r, []), n && n.stop && n.stop.call(this, !0), t = s.length; t--;) s[t].elem === this && s[t].queue === r && (s[t].anim.stop(!0), s.splice(t, 1));
                for (t = 0; t < o; t++) i[t] && i[t].finish && i[t].finish.call(this);
                delete e.finish
            })
        }
    }), C.each(["toggle", "show", "hide"], function(t, n) {
        var s = C.fn[n];
        C.fn[n] = function(t, e, i) {
            return null == t || "boolean" == typeof t ? s.apply(this, arguments) : this.animate(Qt(n, !0), t, e, i)
        }
    }), C.each({
        slideDown: Qt("show"),
        slideUp: Qt("hide"),
        slideToggle: Qt("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(t, n) {
        C.fn[t] = function(t, e, i) {
            return this.animate(n, t, e, i)
        }
    }), C.timers = [], C.fx.tick = function() {
        var t, e = 0,
            i = C.timers;
        for (Wt = C.now(); e < i.length; e++)(t = i[e])() || i[e] !== t || i.splice(e--, 1);
        i.length || C.fx.stop(), Wt = void 0
    }, C.fx.timer = function(t) {
        C.timers.push(t), t() ? C.fx.start() : C.timers.pop()
    }, C.fx.interval = 13, C.fx.start = function() {
        Bt || (Bt = T.setInterval(C.fx.tick, C.fx.interval))
    }, C.fx.stop = function() {
        T.clearInterval(Bt), Bt = null
    }, C.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    }, C.fn.delay = function(n, t) {
        return n = C.fx && C.fx.speeds[n] || n, t = t || "fx", this.queue(t, function(t, e) {
            var i = T.setTimeout(t, n);
            e.stop = function() {
                T.clearTimeout(i)
            }
        })
    }, Ut = S.createElement("input"), Vt = S.createElement("select"), Yt = Vt.appendChild(S.createElement("option")), Ut.type = "checkbox", g.checkOn = "" !== Ut.value, g.optSelected = Yt.selected, Vt.disabled = !0, g.optDisabled = !Yt.disabled, (Ut = S.createElement("input")).value = "t", Ut.type = "radio", g.radioValue = "t" === Ut.value;
    var te, ee = C.expr.attrHandle;
    C.fn.extend({
        attr: function(t, e) {
            return P(this, C.attr, t, e, 1 < arguments.length)
        },
        removeAttr: function(t) {
            return this.each(function() {
                C.removeAttr(this, t)
            })
        }
    }), C.extend({
        attr: function(t, e, i) {
            var n, s, o = t.nodeType;
            if (3 !== o && 8 !== o && 2 !== o) return void 0 === t.getAttribute ? C.prop(t, e, i) : (1 === o && C.isXMLDoc(t) || (e = e.toLowerCase(), s = C.attrHooks[e] || (C.expr.match.bool.test(e) ? te : void 0)), void 0 !== i ? null === i ? void C.removeAttr(t, e) : s && "set" in s && void 0 !== (n = s.set(t, i, e)) ? n : (t.setAttribute(e, i + ""), i) : s && "get" in s && null !== (n = s.get(t, e)) ? n : null == (n = C.find.attr(t, e)) ? void 0 : n)
        },
        attrHooks: {
            type: {
                set: function(t, e) {
                    if (!g.radioValue && "radio" === e && C.nodeName(t, "input")) {
                        var i = t.value;
                        return t.setAttribute("type", e), i && (t.value = i), e
                    }
                }
            }
        },
        removeAttr: function(t, e) {
            var i, n, s = 0,
                o = e && e.match(H);
            if (o && 1 === t.nodeType)
                for (; i = o[s++];) n = C.propFix[i] || i, C.expr.match.bool.test(i) && (t[n] = !1), t.removeAttribute(i)
        }
    }), te = {
        set: function(t, e, i) {
            return !1 === e ? C.removeAttr(t, i) : t.setAttribute(i, i), i
        }
    }, C.each(C.expr.match.bool.source.match(/\w+/g), function(t, e) {
        var o = ee[e] || C.find.attr;
        ee[e] = function(t, e, i) {
            var n, s;
            return i || (s = ee[e], ee[e] = n, n = null != o(t, e, i) ? e.toLowerCase() : null, ee[e] = s), n
        }
    });
    var ie = /^(?:input|select|textarea|button)$/i,
        ne = /^(?:a|area)$/i;
    C.fn.extend({
        prop: function(t, e) {
            return P(this, C.prop, t, e, 1 < arguments.length)
        },
        removeProp: function(t) {
            return this.each(function() {
                delete this[C.propFix[t] || t]
            })
        }
    }), C.extend({
        prop: function(t, e, i) {
            var n, s, o = t.nodeType;
            if (3 !== o && 8 !== o && 2 !== o) return 1 === o && C.isXMLDoc(t) || (e = C.propFix[e] || e, s = C.propHooks[e]), void 0 !== i ? s && "set" in s && void 0 !== (n = s.set(t, i, e)) ? n : t[e] = i : s && "get" in s && null !== (n = s.get(t, e)) ? n : t[e]
        },
        propHooks: {
            tabIndex: {
                get: function(t) {
                    var e = C.find.attr(t, "tabindex");
                    return e ? parseInt(e, 10) : ie.test(t.nodeName) || ne.test(t.nodeName) && t.href ? 0 : -1
                }
            }
        },
        propFix: {
            for: "htmlFor",
            class: "className"
        }
    }), g.optSelected || (C.propHooks.selected = {
        get: function(t) {
            var e = t.parentNode;
            return e && e.parentNode && e.parentNode.selectedIndex, null
        },
        set: function(t) {
            var e = t.parentNode;
            e && (e.selectedIndex, e.parentNode && e.parentNode.selectedIndex)
        }
    }), C.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        C.propFix[this.toLowerCase()] = this
    });
    var se = /[\t\r\n\f]/g;

    function oe(t) {
        return t.getAttribute && t.getAttribute("class") || ""
    }
    C.fn.extend({
        addClass: function(e) {
            var t, i, n, s, o, r, a, l = 0;
            if (C.isFunction(e)) return this.each(function(t) {
                C(this).addClass(e.call(this, t, oe(this)))
            });
            if ("string" == typeof e && e)
                for (t = e.match(H) || []; i = this[l++];)
                    if (s = oe(i), n = 1 === i.nodeType && (" " + s + " ").replace(se, " ")) {
                        for (r = 0; o = t[r++];) n.indexOf(" " + o + " ") < 0 && (n += o + " ");
                        s !== (a = C.trim(n)) && i.setAttribute("class", a)
                    } return this
        },
        removeClass: function(e) {
            var t, i, n, s, o, r, a, l = 0;
            if (C.isFunction(e)) return this.each(function(t) {
                C(this).removeClass(e.call(this, t, oe(this)))
            });
            if (!arguments.length) return this.attr("class", "");
            if ("string" == typeof e && e)
                for (t = e.match(H) || []; i = this[l++];)
                    if (s = oe(i), n = 1 === i.nodeType && (" " + s + " ").replace(se, " ")) {
                        for (r = 0; o = t[r++];)
                            for (; - 1 < n.indexOf(" " + o + " ");) n = n.replace(" " + o + " ", " ");
                        s !== (a = C.trim(n)) && i.setAttribute("class", a)
                    } return this
        },
        toggleClass: function(s, e) {
            var o = typeof s;
            return "boolean" == typeof e && "string" === o ? e ? this.addClass(s) : this.removeClass(s) : C.isFunction(s) ? this.each(function(t) {
                C(this).toggleClass(s.call(this, t, oe(this), e), e)
            }) : this.each(function() {
                var t, e, i, n;
                if ("string" === o)
                    for (e = 0, i = C(this), n = s.match(H) || []; t = n[e++];) i.hasClass(t) ? i.removeClass(t) : i.addClass(t);
                else void 0 !== s && "boolean" !== o || ((t = oe(this)) && N.set(this, "__className__", t), this.setAttribute && this.setAttribute("class", t || !1 === s ? "" : N.get(this, "__className__") || ""))
            })
        },
        hasClass: function(t) {
            var e, i, n = 0;
            for (e = " " + t + " "; i = this[n++];)
                if (1 === i.nodeType && -1 < (" " + oe(i) + " ").replace(se, " ").indexOf(e)) return !0;
            return !1
        }
    });
    var re = /\r/g,
        ae = /[\x20\t\r\n\f]+/g;
    C.fn.extend({
        val: function(i) {
            var n, t, s, e = this[0];
            return arguments.length ? (s = C.isFunction(i), this.each(function(t) {
                var e;
                1 === this.nodeType && (null == (e = s ? i.call(this, t, C(this).val()) : i) ? e = "" : "number" == typeof e ? e += "" : C.isArray(e) && (e = C.map(e, function(t) {
                    return null == t ? "" : t + ""
                })), (n = C.valHooks[this.type] || C.valHooks[this.nodeName.toLowerCase()]) && "set" in n && void 0 !== n.set(this, e, "value") || (this.value = e))
            })) : e ? (n = C.valHooks[e.type] || C.valHooks[e.nodeName.toLowerCase()]) && "get" in n && void 0 !== (t = n.get(e, "value")) ? t : "string" == typeof(t = e.value) ? t.replace(re, "") : null == t ? "" : t : void 0
        }
    }), C.extend({
        valHooks: {
            option: {
                get: function(t) {
                    var e = C.find.attr(t, "value");
                    return null != e ? e : C.trim(C.text(t)).replace(ae, " ")
                }
            },
            select: {
                get: function(t) {
                    for (var e, i, n = t.options, s = t.selectedIndex, o = "select-one" === t.type || s < 0, r = o ? null : [], a = o ? s + 1 : n.length, l = s < 0 ? a : o ? s : 0; l < a; l++)
                        if (((i = n[l]).selected || l === s) && (g.optDisabled ? !i.disabled : null === i.getAttribute("disabled")) && (!i.parentNode.disabled || !C.nodeName(i.parentNode, "optgroup"))) {
                            if (e = C(i).val(), o) return e;
                            r.push(e)
                        } return r
                },
                set: function(t, e) {
                    for (var i, n, s = t.options, o = C.makeArray(e), r = s.length; r--;)((n = s[r]).selected = -1 < C.inArray(C.valHooks.option.get(n), o)) && (i = !0);
                    return i || (t.selectedIndex = -1), o
                }
            }
        }
    }), C.each(["radio", "checkbox"], function() {
        C.valHooks[this] = {
            set: function(t, e) {
                return C.isArray(e) ? t.checked = -1 < C.inArray(C(t).val(), e) : void 0
            }
        }, g.checkOn || (C.valHooks[this].get = function(t) {
            return null === t.getAttribute("value") ? "on" : t.value
        })
    });
    var le = /^(?:focusinfocus|focusoutblur)$/;
    C.extend(C.event, {
        trigger: function(t, e, i, n) {
            var s, o, r, a, l, c, d, u = [i || S],
                h = f.call(t, "type") ? t.type : t,
                p = f.call(t, "namespace") ? t.namespace.split(".") : [];
            if (o = r = i = i || S, 3 !== i.nodeType && 8 !== i.nodeType && !le.test(h + C.event.triggered) && (-1 < h.indexOf(".") && (h = (p = h.split(".")).shift(), p.sort()), l = h.indexOf(":") < 0 && "on" + h, (t = t[C.expando] ? t : new C.Event(h, "object" == typeof t && t)).isTrigger = n ? 2 : 3, t.namespace = p.join("."), t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = i), e = null == e ? [t] : C.makeArray(e, [t]), d = C.event.special[h] || {}, n || !d.trigger || !1 !== d.trigger.apply(i, e))) {
                if (!n && !d.noBubble && !C.isWindow(i)) {
                    for (a = d.delegateType || h, le.test(a + h) || (o = o.parentNode); o; o = o.parentNode) u.push(o), r = o;
                    r === (i.ownerDocument || S) && u.push(r.defaultView || r.parentWindow || T)
                }
                for (s = 0;
                    (o = u[s++]) && !t.isPropagationStopped();) t.type = 1 < s ? a : d.bindType || h, (c = (N.get(o, "events") || {})[t.type] && N.get(o, "handle")) && c.apply(o, e), (c = l && o[l]) && c.apply && L(o) && (t.result = c.apply(o, e), !1 === t.result && t.preventDefault());
                return t.type = h, n || t.isDefaultPrevented() || d._default && !1 !== d._default.apply(u.pop(), e) || !L(i) || l && C.isFunction(i[h]) && !C.isWindow(i) && ((r = i[l]) && (i[l] = null), i[C.event.triggered = h](), C.event.triggered = void 0, r && (i[l] = r)), t.result
            }
        },
        simulate: function(t, e, i) {
            var n = C.extend(new C.Event, i, {
                type: t,
                isSimulated: !0
            });
            C.event.trigger(n, null, e)
        }
    }), C.fn.extend({
        trigger: function(t, e) {
            return this.each(function() {
                C.event.trigger(t, e, this)
            })
        },
        triggerHandler: function(t, e) {
            var i = this[0];
            return i ? C.event.trigger(t, e, i, !0) : void 0
        }
    }), C.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(t, i) {
        C.fn[i] = function(t, e) {
            return 0 < arguments.length ? this.on(i, null, t, e) : this.trigger(i)
        }
    }), C.fn.extend({
        hover: function(t, e) {
            return this.mouseenter(t).mouseleave(e || t)
        }
    }), g.focusin = "onfocusin" in T, g.focusin || C.each({
        focus: "focusin",
        blur: "focusout"
    }, function(i, n) {
        var s = function(t) {
            C.event.simulate(n, t.target, C.event.fix(t))
        };
        C.event.special[n] = {
            setup: function() {
                var t = this.ownerDocument || this,
                    e = N.access(t, n);
                e || t.addEventListener(i, s, !0), N.access(t, n, (e || 0) + 1)
            },
            teardown: function() {
                var t = this.ownerDocument || this,
                    e = N.access(t, n) - 1;
                e ? N.access(t, n, e) : (t.removeEventListener(i, s, !0), N.remove(t, n))
            }
        }
    });
    var ce = T.location,
        de = C.now(),
        ue = /\?/;
    C.parseJSON = function(t) {
        return JSON.parse(t + "")
    }, C.parseXML = function(t) {
        var e;
        if (!t || "string" != typeof t) return null;
        try {
            e = (new T.DOMParser).parseFromString(t, "text/xml")
        } catch (t) {
            e = void 0
        }
        return e && !e.getElementsByTagName("parsererror").length || C.error("Invalid XML: " + t), e
    };
    var he = /#.*$/,
        pe = /([?&])_=[^&]*/,
        fe = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        me = /^(?:GET|HEAD)$/,
        ge = /^\/\//,
        ve = {},
        ye = {},
        we = "*/".concat("*"),
        be = S.createElement("a");

    function xe(o) {
        return function(t, e) {
            "string" != typeof t && (e = t, t = "*");
            var i, n = 0,
                s = t.toLowerCase().match(H) || [];
            if (C.isFunction(e))
                for (; i = s[n++];) "+" === i[0] ? (i = i.slice(1) || "*", (o[i] = o[i] || []).unshift(e)) : (o[i] = o[i] || []).push(e)
        }
    }

    function ke(e, s, o, r) {
        var a = {},
            l = e === ye;

        function c(t) {
            var n;
            return a[t] = !0, C.each(e[t] || [], function(t, e) {
                var i = e(s, o, r);
                return "string" != typeof i || l || a[i] ? l ? !(n = i) : void 0 : (s.dataTypes.unshift(i), c(i), !1)
            }), n
        }
        return c(s.dataTypes[0]) || !a["*"] && c("*")
    }

    function Te(t, e) {
        var i, n, s = C.ajaxSettings.flatOptions || {};
        for (i in e) void 0 !== e[i] && ((s[i] ? t : n || (n = {}))[i] = e[i]);
        return n && C.extend(!0, t, n), t
    }
    be.href = ce.href, C.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: ce.href,
            type: "GET",
            isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(ce.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": we,
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
                "text json": C.parseJSON,
                "text xml": C.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(t, e) {
            return e ? Te(Te(t, C.ajaxSettings), e) : Te(C.ajaxSettings, t)
        },
        ajaxPrefilter: xe(ve),
        ajaxTransport: xe(ye),
        ajax: function(t, e) {
            "object" == typeof t && (e = t, t = void 0), e = e || {};
            var d, u, h, i, p, n, f, s, m = C.ajaxSetup({}, e),
                g = m.context || m,
                v = m.context && (g.nodeType || g.jquery) ? C(g) : C.event,
                y = C.Deferred(),
                w = C.Callbacks("once memory"),
                b = m.statusCode || {},
                o = {},
                r = {},
                x = 0,
                a = "canceled",
                k = {
                    readyState: 0,
                    getResponseHeader: function(t) {
                        var e;
                        if (2 === x) {
                            if (!i)
                                for (i = {}; e = fe.exec(h);) i[e[1].toLowerCase()] = e[2];
                            e = i[t.toLowerCase()]
                        }
                        return null == e ? null : e
                    },
                    getAllResponseHeaders: function() {
                        return 2 === x ? h : null
                    },
                    setRequestHeader: function(t, e) {
                        var i = t.toLowerCase();
                        return x || (t = r[i] = r[i] || t, o[t] = e), this
                    },
                    overrideMimeType: function(t) {
                        return x || (m.mimeType = t), this
                    },
                    statusCode: function(t) {
                        var e;
                        if (t)
                            if (x < 2)
                                for (e in t) b[e] = [b[e], t[e]];
                            else k.always(t[k.status]);
                        return this
                    },
                    abort: function(t) {
                        var e = t || a;
                        return d && d.abort(e), l(0, e), this
                    }
                };
            if (y.promise(k).complete = w.add, k.success = k.done, k.error = k.fail, m.url = ((t || m.url || ce.href) + "").replace(he, "").replace(ge, ce.protocol + "//"), m.type = e.method || e.type || m.method || m.type, m.dataTypes = C.trim(m.dataType || "*").toLowerCase().match(H) || [""], null == m.crossDomain) {
                n = S.createElement("a");
                try {
                    n.href = m.url, n.href = n.href, m.crossDomain = be.protocol + "//" + be.host != n.protocol + "//" + n.host
                } catch (t) {
                    m.crossDomain = !0
                }
            }
            if (m.data && m.processData && "string" != typeof m.data && (m.data = C.param(m.data, m.traditional)), ke(ve, m, e, k), 2 === x) return k;
            for (s in (f = C.event && m.global) && 0 == C.active++ && C.event.trigger("ajaxStart"), m.type = m.type.toUpperCase(), m.hasContent = !me.test(m.type), u = m.url, m.hasContent || (m.data && (u = m.url += (ue.test(u) ? "&" : "?") + m.data, delete m.data), !1 === m.cache && (m.url = pe.test(u) ? u.replace(pe, "$1_=" + de++) : u + (ue.test(u) ? "&" : "?") + "_=" + de++)), m.ifModified && (C.lastModified[u] && k.setRequestHeader("If-Modified-Since", C.lastModified[u]), C.etag[u] && k.setRequestHeader("If-None-Match", C.etag[u])), (m.data && m.hasContent && !1 !== m.contentType || e.contentType) && k.setRequestHeader("Content-Type", m.contentType), k.setRequestHeader("Accept", m.dataTypes[0] && m.accepts[m.dataTypes[0]] ? m.accepts[m.dataTypes[0]] + ("*" !== m.dataTypes[0] ? ", " + we + "; q=0.01" : "") : m.accepts["*"]), m.headers) k.setRequestHeader(s, m.headers[s]);
            if (m.beforeSend && (!1 === m.beforeSend.call(g, k, m) || 2 === x)) return k.abort();
            for (s in a = "abort", {
                    success: 1,
                    error: 1,
                    complete: 1
                }) k[s](m[s]);
            if (d = ke(ye, m, e, k)) {
                if (k.readyState = 1, f && v.trigger("ajaxSend", [k, m]), 2 === x) return k;
                m.async && 0 < m.timeout && (p = T.setTimeout(function() {
                    k.abort("timeout")
                }, m.timeout));
                try {
                    x = 1, d.send(o, l)
                } catch (t) {
                    if (!(x < 2)) throw t;
                    l(-1, t)
                }
            } else l(-1, "No Transport");

            function l(t, e, i, n) {
                var s, o, r, a, l, c = e;
                2 !== x && (x = 2, p && T.clearTimeout(p), d = void 0, h = n || "", k.readyState = 0 < t ? 4 : 0, s = 200 <= t && t < 300 || 304 === t, i && (a = function(t, e, i) {
                    for (var n, s, o, r, a = t.contents, l = t.dataTypes;
                        "*" === l[0];) l.shift(), void 0 === n && (n = t.mimeType || e.getResponseHeader("Content-Type"));
                    if (n)
                        for (s in a)
                            if (a[s] && a[s].test(n)) {
                                l.unshift(s);
                                break
                            } if (l[0] in i) o = l[0];
                    else {
                        for (s in i) {
                            if (!l[0] || t.converters[s + " " + l[0]]) {
                                o = s;
                                break
                            }
                            r || (r = s)
                        }
                        o = o || r
                    }
                    return o ? (o !== l[0] && l.unshift(o), i[o]) : void 0
                }(m, k, i)), a = function(t, e, i, n) {
                    var s, o, r, a, l, c = {},
                        d = t.dataTypes.slice();
                    if (d[1])
                        for (r in t.converters) c[r.toLowerCase()] = t.converters[r];
                    for (o = d.shift(); o;)
                        if (t.responseFields[o] && (i[t.responseFields[o]] = e), !l && n && t.dataFilter && (e = t.dataFilter(e, t.dataType)), l = o, o = d.shift())
                            if ("*" === o) o = l;
                            else if ("*" !== l && l !== o) {
                        if (!(r = c[l + " " + o] || c["* " + o]))
                            for (s in c)
                                if ((a = s.split(" "))[1] === o && (r = c[l + " " + a[0]] || c["* " + a[0]])) {
                                    !0 === r ? r = c[s] : !0 !== c[s] && (o = a[0], d.unshift(a[1]));
                                    break
                                } if (!0 !== r)
                            if (r && t.throws) e = r(e);
                            else try {
                                e = r(e)
                            } catch (t) {
                                return {
                                    state: "parsererror",
                                    error: r ? t : "No conversion from " + l + " to " + o
                                }
                            }
                    }
                    return {
                        state: "success",
                        data: e
                    }
                }(m, a, k, s), s ? (m.ifModified && ((l = k.getResponseHeader("Last-Modified")) && (C.lastModified[u] = l), (l = k.getResponseHeader("etag")) && (C.etag[u] = l)), 204 === t || "HEAD" === m.type ? c = "nocontent" : 304 === t ? c = "notmodified" : (c = a.state, o = a.data, s = !(r = a.error))) : (r = c, !t && c || (c = "error", t < 0 && (t = 0))), k.status = t, k.statusText = (e || c) + "", s ? y.resolveWith(g, [o, c, k]) : y.rejectWith(g, [k, c, r]), k.statusCode(b), b = void 0, f && v.trigger(s ? "ajaxSuccess" : "ajaxError", [k, m, s ? o : r]), w.fireWith(g, [k, c]), f && (v.trigger("ajaxComplete", [k, m]), --C.active || C.event.trigger("ajaxStop")))
            }
            return k
        },
        getJSON: function(t, e, i) {
            return C.get(t, e, i, "json")
        },
        getScript: function(t, e) {
            return C.get(t, void 0, e, "script")
        }
    }), C.each(["get", "post"], function(t, s) {
        C[s] = function(t, e, i, n) {
            return C.isFunction(e) && (n = n || i, i = e, e = void 0), C.ajax(C.extend({
                url: t,
                type: s,
                dataType: n,
                data: e,
                success: i
            }, C.isPlainObject(t) && t))
        }
    }), C._evalUrl = function(t) {
        return C.ajax({
            url: t,
            type: "GET",
            dataType: "script",
            async: !1,
            global: !1,
            throws: !0
        })
    }, C.fn.extend({
        wrapAll: function(e) {
            var t;
            return C.isFunction(e) ? this.each(function(t) {
                C(this).wrapAll(e.call(this, t))
            }) : (this[0] && (t = C(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
                for (var t = this; t.firstElementChild;) t = t.firstElementChild;
                return t
            }).append(this)), this)
        },
        wrapInner: function(i) {
            return C.isFunction(i) ? this.each(function(t) {
                C(this).wrapInner(i.call(this, t))
            }) : this.each(function() {
                var t = C(this),
                    e = t.contents();
                e.length ? e.wrapAll(i) : t.append(i)
            })
        },
        wrap: function(e) {
            var i = C.isFunction(e);
            return this.each(function(t) {
                C(this).wrapAll(i ? e.call(this, t) : e)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                C.nodeName(this, "body") || C(this).replaceWith(this.childNodes)
            }).end()
        }
    }), C.expr.filters.hidden = function(t) {
        return !C.expr.filters.visible(t)
    }, C.expr.filters.visible = function(t) {
        return 0 < t.offsetWidth || 0 < t.offsetHeight || 0 < t.getClientRects().length
    };
    var Se = /%20/g,
        Ce = /\[\]$/,
        $e = /\r?\n/g,
        _e = /^(?:submit|button|image|reset|file)$/i,
        De = /^(?:input|select|textarea|keygen)/i;

    function Ee(i, t, n, s) {
        var e;
        if (C.isArray(t)) C.each(t, function(t, e) {
            n || Ce.test(i) ? s(i, e) : Ee(i + "[" + ("object" == typeof e && null != e ? t : "") + "]", e, n, s)
        });
        else if (n || "object" !== C.type(t)) s(i, t);
        else
            for (e in t) Ee(i + "[" + e + "]", t[e], n, s)
    }
    C.param = function(t, e) {
        var i, n = [],
            s = function(t, e) {
                e = C.isFunction(e) ? e() : null == e ? "" : e, n[n.length] = encodeURIComponent(t) + "=" + encodeURIComponent(e)
            };
        if (void 0 === e && (e = C.ajaxSettings && C.ajaxSettings.traditional), C.isArray(t) || t.jquery && !C.isPlainObject(t)) C.each(t, function() {
            s(this.name, this.value)
        });
        else
            for (i in t) Ee(i, t[i], e, s);
        return n.join("&").replace(Se, "+")
    }, C.fn.extend({
        serialize: function() {
            return C.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var t = C.prop(this, "elements");
                return t ? C.makeArray(t) : this
            }).filter(function() {
                var t = this.type;
                return this.name && !C(this).is(":disabled") && De.test(this.nodeName) && !_e.test(t) && (this.checked || !Y.test(t))
            }).map(function(t, e) {
                var i = C(this).val();
                return null == i ? null : C.isArray(i) ? C.map(i, function(t) {
                    return {
                        name: e.name,
                        value: t.replace($e, "\r\n")
                    }
                }) : {
                    name: e.name,
                    value: i.replace($e, "\r\n")
                }
            }).get()
        }
    }), C.ajaxSettings.xhr = function() {
        try {
            return new T.XMLHttpRequest
        } catch (t) {}
    };
    var Me = {
            0: 200,
            1223: 204
        },
        Ae = C.ajaxSettings.xhr();
    g.cors = !!Ae && "withCredentials" in Ae, g.ajax = Ae = !!Ae, C.ajaxTransport(function(s) {
        var o, r;
        return g.cors || Ae && !s.crossDomain ? {
            send: function(t, e) {
                var i, n = s.xhr();
                if (n.open(s.type, s.url, s.async, s.username, s.password), s.xhrFields)
                    for (i in s.xhrFields) n[i] = s.xhrFields[i];
                for (i in s.mimeType && n.overrideMimeType && n.overrideMimeType(s.mimeType), s.crossDomain || t["X-Requested-With"] || (t["X-Requested-With"] = "XMLHttpRequest"), t) n.setRequestHeader(i, t[i]);
                o = function(t) {
                    return function() {
                        o && (o = r = n.onload = n.onerror = n.onabort = n.onreadystatechange = null, "abort" === t ? n.abort() : "error" === t ? "number" != typeof n.status ? e(0, "error") : e(n.status, n.statusText) : e(Me[n.status] || n.status, n.statusText, "text" !== (n.responseType || "text") || "string" != typeof n.responseText ? {
                            binary: n.response
                        } : {
                            text: n.responseText
                        }, n.getAllResponseHeaders()))
                    }
                }, n.onload = o(), r = n.onerror = o("error"), void 0 !== n.onabort ? n.onabort = r : n.onreadystatechange = function() {
                    4 === n.readyState && T.setTimeout(function() {
                        o && r()
                    })
                }, o = o("abort");
                try {
                    n.send(s.hasContent && s.data || null)
                } catch (t) {
                    if (o) throw t
                }
            },
            abort: function() {
                o && o()
            }
        } : void 0
    }), C.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function(t) {
                return C.globalEval(t), t
            }
        }
    }), C.ajaxPrefilter("script", function(t) {
        void 0 === t.cache && (t.cache = !1), t.crossDomain && (t.type = "GET")
    }), C.ajaxTransport("script", function(i) {
        var n, s;
        if (i.crossDomain) return {
            send: function(t, e) {
                n = C("<script>").prop({
                    charset: i.scriptCharset,
                    src: i.url
                }).on("load error", s = function(t) {
                    n.remove(), s = null, t && e("error" === t.type ? 404 : 200, t.type)
                }), S.head.appendChild(n[0])
            },
            abort: function() {
                s && s()
            }
        }
    });
    var He = [],
        Oe = /(=)\?(?=&|$)|\?\?/;
    C.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var t = He.pop() || C.expando + "_" + de++;
            return this[t] = !0, t
        }
    }), C.ajaxPrefilter("json jsonp", function(t, e, i) {
        var n, s, o, r = !1 !== t.jsonp && (Oe.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && Oe.test(t.data) && "data");
        return r || "jsonp" === t.dataTypes[0] ? (n = t.jsonpCallback = C.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, r ? t[r] = t[r].replace(Oe, "$1" + n) : !1 !== t.jsonp && (t.url += (ue.test(t.url) ? "&" : "?") + t.jsonp + "=" + n), t.converters["script json"] = function() {
            return o || C.error(n + " was not called"), o[0]
        }, t.dataTypes[0] = "json", s = T[n], T[n] = function() {
            o = arguments
        }, i.always(function() {
            void 0 === s ? C(T).removeProp(n) : T[n] = s, t[n] && (t.jsonpCallback = e.jsonpCallback, He.push(n)), o && C.isFunction(s) && s(o[0]), o = s = void 0
        }), "script") : void 0
    }), C.parseHTML = function(t, e, i) {
        if (!t || "string" != typeof t) return null;
        "boolean" == typeof e && (i = e, e = !1), e = e || S;
        var n = b.exec(t),
            s = !i && [];
        return n ? [e.createElement(n[1])] : (n = it([t], e, s), s && s.length && C(s).remove(), C.merge([], n.childNodes))
    };
    var Pe = C.fn.load;

    function Le(t) {
        return C.isWindow(t) ? t : 9 === t.nodeType && t.defaultView
    }
    C.fn.load = function(t, e, i) {
        if ("string" != typeof t && Pe) return Pe.apply(this, arguments);
        var n, s, o, r = this,
            a = t.indexOf(" ");
        return -1 < a && (n = C.trim(t.slice(a)), t = t.slice(0, a)), C.isFunction(e) ? (i = e, e = void 0) : e && "object" == typeof e && (s = "POST"), 0 < r.length && C.ajax({
            url: t,
            type: s || "GET",
            dataType: "html",
            data: e
        }).done(function(t) {
            o = arguments, r.html(n ? C("<div>").append(C.parseHTML(t)).find(n) : t)
        }).always(i && function(t, e) {
            r.each(function() {
                i.apply(this, o || [t.responseText, e, t])
            })
        }), this
    }, C.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(t, e) {
        C.fn[e] = function(t) {
            return this.on(e, t)
        }
    }), C.expr.filters.animated = function(e) {
        return C.grep(C.timers, function(t) {
            return e === t.elem
        }).length
    }, C.offset = {
        setOffset: function(t, e, i) {
            var n, s, o, r, a, l, c = C.css(t, "position"),
                d = C(t),
                u = {};
            "static" === c && (t.style.position = "relative"), a = d.offset(), o = C.css(t, "top"), l = C.css(t, "left"), ("absolute" === c || "fixed" === c) && -1 < (o + l).indexOf("auto") ? (r = (n = d.position()).top, s = n.left) : (r = parseFloat(o) || 0, s = parseFloat(l) || 0), C.isFunction(e) && (e = e.call(t, i, C.extend({}, a))), null != e.top && (u.top = e.top - a.top + r), null != e.left && (u.left = e.left - a.left + s), "using" in e ? e.using.call(t, u) : d.css(u)
        }
    }, C.fn.extend({
        offset: function(e) {
            if (arguments.length) return void 0 === e ? this : this.each(function(t) {
                C.offset.setOffset(this, e, t)
            });
            var t, i, n = this[0],
                s = {
                    top: 0,
                    left: 0
                },
                o = n && n.ownerDocument;
            return o ? (t = o.documentElement, C.contains(t, n) ? (s = n.getBoundingClientRect(), i = Le(o), {
                top: s.top + i.pageYOffset - t.clientTop,
                left: s.left + i.pageXOffset - t.clientLeft
            }) : s) : void 0
        },
        position: function() {
            if (this[0]) {
                var t, e, i = this[0],
                    n = {
                        top: 0,
                        left: 0
                    };
                return "fixed" === C.css(i, "position") ? e = i.getBoundingClientRect() : (t = this.offsetParent(), e = this.offset(), C.nodeName(t[0], "html") || (n = t.offset()), n.top += C.css(t[0], "borderTopWidth", !0), n.left += C.css(t[0], "borderLeftWidth", !0)), {
                    top: e.top - n.top - C.css(i, "marginTop", !0),
                    left: e.left - n.left - C.css(i, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var t = this.offsetParent; t && "static" === C.css(t, "position");) t = t.offsetParent;
                return t || Et
            })
        }
    }), C.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(e, s) {
        var o = "pageYOffset" === s;
        C.fn[e] = function(t) {
            return P(this, function(t, e, i) {
                var n = Le(t);
                return void 0 === i ? n ? n[s] : t[e] : void(n ? n.scrollTo(o ? n.pageXOffset : i, o ? i : n.pageYOffset) : t[e] = i)
            }, e, t, arguments.length)
        }
    }), C.each(["top", "left"], function(t, i) {
        C.cssHooks[i] = At(g.pixelPosition, function(t, e) {
            return e ? (e = Mt(t, i), $t.test(e) ? C(t).position()[i] + "px" : e) : void 0
        })
    }), C.each({
        Height: "height",
        Width: "width"
    }, function(o, r) {
        C.each({
            padding: "inner" + o,
            content: r,
            "": "outer" + o
        }, function(n, t) {
            C.fn[t] = function(t, e) {
                var i = arguments.length && (n || "boolean" != typeof t),
                    s = n || (!0 === t || !0 === e ? "margin" : "border");
                return P(this, function(t, e, i) {
                    var n;
                    return C.isWindow(t) ? t.document.documentElement["client" + o] : 9 === t.nodeType ? (n = t.documentElement, Math.max(t.body["scroll" + o], n["scroll" + o], t.body["offset" + o], n["offset" + o], n["client" + o])) : void 0 === i ? C.css(t, e, s) : C.style(t, e, i, s)
                }, r, i ? t : void 0, i, null)
            }
        })
    }), C.fn.extend({
        bind: function(t, e, i) {
            return this.on(t, null, e, i)
        },
        unbind: function(t, e) {
            return this.off(t, null, e)
        },
        delegate: function(t, e, i, n) {
            return this.on(e, t, i, n)
        },
        undelegate: function(t, e, i) {
            return 1 === arguments.length ? this.off(t, "**") : this.off(e, t || "**", i)
        },
        size: function() {
            return this.length
        }
    }), C.fn.andSelf = C.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function() {
        return C
    });
    var Ie = T.jQuery,
        Ne = T.$;
    return C.noConflict = function(t) {
        return T.$ === C && (T.$ = Ne), t && T.jQuery === C && (T.jQuery = Ie), C
    }, t || (T.jQuery = T.$ = C), C
}),
function(t) {
    "use strict";
    "function" == typeof define && define.amd ? define(["jquery"], t) : "undefined" != typeof exports ? module.exports = t(require("jquery")) : t(jQuery)
}(function(c) {
    "use strict";
    var s, r = window.Slick || {};
    (s = 0, r = function(t, e) {
        var i, n = this;
        n.defaults = {
            accessibility: !0,
            adaptiveHeight: !1,
            appendArrows: c(t),
            appendDots: c(t),
            arrows: !0,
            asNavFor: null,
            prevArrow: '<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',
            nextArrow: '<button class="slick-next" aria-label="Next" type="button">Next</button>',
            autoplay: !1,
            autoplaySpeed: 3e3,
            centerMode: !1,
            centerPadding: "50px",
            cssEase: "ease",
            customPaging: function(t, e) {
                return c('<button type="button" />').text(e + 1)
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
        }, n.initials = {
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
        }, c.extend(n, n.initials), n.activeBreakpoint = null, n.animType = null, n.animProp = null, n.breakpoints = [], n.breakpointSettings = [], n.cssTransitions = !1, n.focussed = !1, n.interrupted = !1, n.hidden = "hidden", n.paused = !0, n.positionProp = null, n.respondTo = null, n.rowCount = 1, n.shouldClick = !0, n.$slider = c(t), n.$slidesCache = null, n.transformType = null, n.transitionType = null, n.visibilityChange = "visibilitychange", n.windowWidth = 0, n.windowTimer = null, i = c(t).data("slick") || {}, n.options = c.extend({}, n.defaults, e, i), n.currentSlide = n.options.initialSlide, n.originalSettings = n.options, void 0 !== document.mozHidden ? (n.hidden = "mozHidden", n.visibilityChange = "mozvisibilitychange") : void 0 !== document.webkitHidden && (n.hidden = "webkitHidden", n.visibilityChange = "webkitvisibilitychange"), n.autoPlay = c.proxy(n.autoPlay, n), n.autoPlayClear = c.proxy(n.autoPlayClear, n), n.autoPlayIterator = c.proxy(n.autoPlayIterator, n), n.changeSlide = c.proxy(n.changeSlide, n), n.clickHandler = c.proxy(n.clickHandler, n), n.selectHandler = c.proxy(n.selectHandler, n), n.setPosition = c.proxy(n.setPosition, n), n.swipeHandler = c.proxy(n.swipeHandler, n), n.dragHandler = c.proxy(n.dragHandler, n), n.keyHandler = c.proxy(n.keyHandler, n), n.instanceUid = s++, n.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/, n.registerBreakpoints(), n.init(!0)
    }).prototype.activateADA = function() {
        this.$slideTrack.find(".slick-active").attr({
            "aria-hidden": "false"
        }).find("a, input, button, select").attr({
            tabindex: "0"
        })
    }, r.prototype.addSlide = r.prototype.slickAdd = function(t, e, i) {
        var n = this;
        if ("boolean" == typeof e) i = e, e = null;
        else if (e < 0 || e >= n.slideCount) return !1;
        n.unload(), "number" == typeof e ? 0 === e && 0 === n.$slides.length ? c(t).appendTo(n.$slideTrack) : i ? c(t).insertBefore(n.$slides.eq(e)) : c(t).insertAfter(n.$slides.eq(e)) : !0 === i ? c(t).prependTo(n.$slideTrack) : c(t).appendTo(n.$slideTrack), n.$slides = n.$slideTrack.children(this.options.slide), n.$slideTrack.children(this.options.slide).detach(), n.$slideTrack.append(n.$slides), n.$slides.each(function(t, e) {
            c(e).attr("data-slick-index", t)
        }), n.$slidesCache = n.$slides, n.reinit()
    }, r.prototype.animateHeight = function() {
        var t = this;
        if (1 === t.options.slidesToShow && !0 === t.options.adaptiveHeight && !1 === t.options.vertical) {
            var e = t.$slides.eq(t.currentSlide).outerHeight(!0);
            t.$list.animate({
                height: e
            }, t.options.speed)
        }
    }, r.prototype.animateSlide = function(t, e) {
        var i = {},
            n = this;
        n.animateHeight(), !0 === n.options.rtl && !1 === n.options.vertical && (t = -t), !1 === n.transformsEnabled ? !1 === n.options.vertical ? n.$slideTrack.animate({
            left: t
        }, n.options.speed, n.options.easing, e) : n.$slideTrack.animate({
            top: t
        }, n.options.speed, n.options.easing, e) : !1 === n.cssTransitions ? (!0 === n.options.rtl && (n.currentLeft = -n.currentLeft), c({
            animStart: n.currentLeft
        }).animate({
            animStart: t
        }, {
            duration: n.options.speed,
            easing: n.options.easing,
            step: function(t) {
                t = Math.ceil(t), !1 === n.options.vertical ? i[n.animType] = "translate(" + t + "px, 0px)" : i[n.animType] = "translate(0px," + t + "px)", n.$slideTrack.css(i)
            },
            complete: function() {
                e && e.call()
            }
        })) : (n.applyTransition(), t = Math.ceil(t), !1 === n.options.vertical ? i[n.animType] = "translate3d(" + t + "px, 0px, 0px)" : i[n.animType] = "translate3d(0px," + t + "px, 0px)", n.$slideTrack.css(i), e && setTimeout(function() {
            n.disableTransition(), e.call()
        }, n.options.speed))
    }, r.prototype.getNavTarget = function() {
        var t = this.options.asNavFor;
        return t && null !== t && (t = c(t).not(this.$slider)), t
    }, r.prototype.asNavFor = function(e) {
        var t = this.getNavTarget();
        null !== t && "object" == typeof t && t.each(function() {
            var t = c(this).slick("getSlick");
            t.unslicked || t.slideHandler(e, !0)
        })
    }, r.prototype.applyTransition = function(t) {
        var e = this,
            i = {};
        !1 === e.options.fade ? i[e.transitionType] = e.transformType + " " + e.options.speed + "ms " + e.options.cssEase : i[e.transitionType] = "opacity " + e.options.speed + "ms " + e.options.cssEase, !1 === e.options.fade ? e.$slideTrack.css(i) : e.$slides.eq(t).css(i)
    }, r.prototype.autoPlay = function() {
        var t = this;
        t.autoPlayClear(), t.slideCount > t.options.slidesToShow && (t.autoPlayTimer = setInterval(t.autoPlayIterator, t.options.autoplaySpeed))
    }, r.prototype.autoPlayClear = function() {
        this.autoPlayTimer && clearInterval(this.autoPlayTimer)
    }, r.prototype.autoPlayIterator = function() {
        var t = this,
            e = t.currentSlide + t.options.slidesToScroll;
        t.paused || t.interrupted || t.focussed || (!1 === t.options.infinite && (1 === t.direction && t.currentSlide + 1 === t.slideCount - 1 ? t.direction = 0 : 0 === t.direction && (e = t.currentSlide - t.options.slidesToScroll, t.currentSlide - 1 == 0 && (t.direction = 1))), t.slideHandler(e))
    }, r.prototype.buildArrows = function() {
        var t = this;
        !0 === t.options.arrows && (t.$prevArrow = c(t.options.prevArrow).addClass("slick-arrow"), t.$nextArrow = c(t.options.nextArrow).addClass("slick-arrow"), t.slideCount > t.options.slidesToShow ? (t.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), t.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), t.htmlExpr.test(t.options.prevArrow) && t.$prevArrow.prependTo(t.options.appendArrows), t.htmlExpr.test(t.options.nextArrow) && t.$nextArrow.appendTo(t.options.appendArrows), !0 !== t.options.infinite && t.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true")) : t.$prevArrow.add(t.$nextArrow).addClass("slick-hidden").attr({
            "aria-disabled": "true",
            tabindex: "-1"
        }))
    }, r.prototype.buildDots = function() {
        var t, e, i = this;
        if (!0 === i.options.dots) {
            for (i.$slider.addClass("slick-dotted"), e = c("<ul />").addClass(i.options.dotsClass), t = 0; t <= i.getDotCount(); t += 1) e.append(c("<li />").append(i.options.customPaging.call(this, i, t)));
            i.$dots = e.appendTo(i.options.appendDots), i.$dots.find("li").first().addClass("slick-active")
        }
    }, r.prototype.buildOut = function() {
        var t = this;
        t.$slides = t.$slider.children(t.options.slide + ":not(.slick-cloned)").addClass("slick-slide"), t.slideCount = t.$slides.length, t.$slides.each(function(t, e) {
            c(e).attr("data-slick-index", t).data("originalStyling", c(e).attr("style") || "")
        }), t.$slider.addClass("slick-slider"), t.$slideTrack = 0 === t.slideCount ? c('<div class="slick-track"/>').appendTo(t.$slider) : t.$slides.wrapAll('<div class="slick-track"/>').parent(), t.$list = t.$slideTrack.wrap('<div class="slick-list"/>').parent(), t.$slideTrack.css("opacity", 0), !0 !== t.options.centerMode && !0 !== t.options.swipeToSlide || (t.options.slidesToScroll = 1), c("img[data-lazy]", t.$slider).not("[src]").addClass("slick-loading"), t.setupInfinite(), t.buildArrows(), t.buildDots(), t.updateDots(), t.setSlideClasses("number" == typeof t.currentSlide ? t.currentSlide : 0), !0 === t.options.draggable && t.$list.addClass("draggable")
    }, r.prototype.buildRows = function() {
        var t, e, i, n, s, o, r, a = this;
        if (n = document.createDocumentFragment(), o = a.$slider.children(), 1 < a.options.rows) {
            for (r = a.options.slidesPerRow * a.options.rows, s = Math.ceil(o.length / r), t = 0; t < s; t++) {
                var l = document.createElement("div");
                for (e = 0; e < a.options.rows; e++) {
                    var c = document.createElement("div");
                    for (i = 0; i < a.options.slidesPerRow; i++) {
                        var d = t * r + (e * a.options.slidesPerRow + i);
                        o.get(d) && c.appendChild(o.get(d))
                    }
                    l.appendChild(c)
                }
                n.appendChild(l)
            }
            a.$slider.empty().append(n), a.$slider.children().children().children().css({
                width: 100 / a.options.slidesPerRow + "%",
                display: "inline-block"
            })
        }
    }, r.prototype.checkResponsive = function(t, e) {
        var i, n, s, o = this,
            r = !1,
            a = o.$slider.width(),
            l = window.innerWidth || c(window).width();
        if ("window" === o.respondTo ? s = l : "slider" === o.respondTo ? s = a : "min" === o.respondTo && (s = Math.min(l, a)), o.options.responsive && o.options.responsive.length && null !== o.options.responsive) {
            for (i in n = null, o.breakpoints) o.breakpoints.hasOwnProperty(i) && (!1 === o.originalSettings.mobileFirst ? s < o.breakpoints[i] && (n = o.breakpoints[i]) : s > o.breakpoints[i] && (n = o.breakpoints[i]));
            null !== n ? null !== o.activeBreakpoint ? (n !== o.activeBreakpoint || e) && (o.activeBreakpoint = n, "unslick" === o.breakpointSettings[n] ? o.unslick(n) : (o.options = c.extend({}, o.originalSettings, o.breakpointSettings[n]), !0 === t && (o.currentSlide = o.options.initialSlide), o.refresh(t)), r = n) : (o.activeBreakpoint = n, "unslick" === o.breakpointSettings[n] ? o.unslick(n) : (o.options = c.extend({}, o.originalSettings, o.breakpointSettings[n]), !0 === t && (o.currentSlide = o.options.initialSlide), o.refresh(t)), r = n) : null !== o.activeBreakpoint && (o.activeBreakpoint = null, o.options = o.originalSettings, !0 === t && (o.currentSlide = o.options.initialSlide), o.refresh(t), r = n), t || !1 === r || o.$slider.trigger("breakpoint", [o, r])
        }
    }, r.prototype.changeSlide = function(t, e) {
        var i, n, s = this,
            o = c(t.currentTarget);
        switch (o.is("a") && t.preventDefault(), o.is("li") || (o = o.closest("li")), i = s.slideCount % s.options.slidesToScroll != 0 ? 0 : (s.slideCount - s.currentSlide) % s.options.slidesToScroll, t.data.message) {
            case "previous":
                n = 0 === i ? s.options.slidesToScroll : s.options.slidesToShow - i, s.slideCount > s.options.slidesToShow && s.slideHandler(s.currentSlide - n, !1, e);
                break;
            case "next":
                n = 0 === i ? s.options.slidesToScroll : i, s.slideCount > s.options.slidesToShow && s.slideHandler(s.currentSlide + n, !1, e);
                break;
            case "index":
                var r = 0 === t.data.index ? 0 : t.data.index || o.index() * s.options.slidesToScroll;
                s.slideHandler(s.checkNavigable(r), !1, e), o.children().trigger("focus");
                break;
            default:
                return
        }
    }, r.prototype.checkNavigable = function(t) {
        var e, i;
        if (i = 0, t > (e = this.getNavigableIndexes())[e.length - 1]) t = e[e.length - 1];
        else
            for (var n in e) {
                if (t < e[n]) {
                    t = i;
                    break
                }
                i = e[n]
            }
        return t
    }, r.prototype.cleanUpEvents = function() {
        var t = this;
        t.options.dots && null !== t.$dots && (c("li", t.$dots).off("click.slick", t.changeSlide).off("mouseenter.slick", c.proxy(t.interrupt, t, !0)).off("mouseleave.slick", c.proxy(t.interrupt, t, !1)), !0 === t.options.accessibility && t.$dots.off("keydown.slick", t.keyHandler)), t.$slider.off("focus.slick blur.slick"), !0 === t.options.arrows && t.slideCount > t.options.slidesToShow && (t.$prevArrow && t.$prevArrow.off("click.slick", t.changeSlide), t.$nextArrow && t.$nextArrow.off("click.slick", t.changeSlide), !0 === t.options.accessibility && (t.$prevArrow && t.$prevArrow.off("keydown.slick", t.keyHandler), t.$nextArrow && t.$nextArrow.off("keydown.slick", t.keyHandler))), t.$list.off("touchstart.slick mousedown.slick", t.swipeHandler), t.$list.off("touchmove.slick mousemove.slick", t.swipeHandler), t.$list.off("touchend.slick mouseup.slick", t.swipeHandler), t.$list.off("touchcancel.slick mouseleave.slick", t.swipeHandler), t.$list.off("click.slick", t.clickHandler), c(document).off(t.visibilityChange, t.visibility), t.cleanUpSlideEvents(), !0 === t.options.accessibility && t.$list.off("keydown.slick", t.keyHandler), !0 === t.options.focusOnSelect && c(t.$slideTrack).children().off("click.slick", t.selectHandler), c(window).off("orientationchange.slick.slick-" + t.instanceUid, t.orientationChange), c(window).off("resize.slick.slick-" + t.instanceUid, t.resize), c("[draggable!=true]", t.$slideTrack).off("dragstart", t.preventDefault), c(window).off("load.slick.slick-" + t.instanceUid, t.setPosition)
    }, r.prototype.cleanUpSlideEvents = function() {
        var t = this;
        t.$list.off("mouseenter.slick", c.proxy(t.interrupt, t, !0)), t.$list.off("mouseleave.slick", c.proxy(t.interrupt, t, !1))
    }, r.prototype.cleanUpRows = function() {
        var t;
        1 < this.options.rows && ((t = this.$slides.children().children()).removeAttr("style"), this.$slider.empty().append(t))
    }, r.prototype.clickHandler = function(t) {
        !1 === this.shouldClick && (t.stopImmediatePropagation(), t.stopPropagation(), t.preventDefault())
    }, r.prototype.destroy = function(t) {
        var e = this;
        e.autoPlayClear(), e.touchObject = {}, e.cleanUpEvents(), c(".slick-cloned", e.$slider).detach(), e.$dots && e.$dots.remove(), e.$prevArrow && e.$prevArrow.length && (e.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), e.htmlExpr.test(e.options.prevArrow) && e.$prevArrow.remove()), e.$nextArrow && e.$nextArrow.length && (e.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), e.htmlExpr.test(e.options.nextArrow) && e.$nextArrow.remove()), e.$slides && (e.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function() {
            c(this).attr("style", c(this).data("originalStyling"))
        }), e.$slideTrack.children(this.options.slide).detach(), e.$slideTrack.detach(), e.$list.detach(), e.$slider.append(e.$slides)), e.cleanUpRows(), e.$slider.removeClass("slick-slider"), e.$slider.removeClass("slick-initialized"), e.$slider.removeClass("slick-dotted"), e.unslicked = !0, t || e.$slider.trigger("destroy", [e])
    }, r.prototype.disableTransition = function(t) {
        var e = {};
        e[this.transitionType] = "", !1 === this.options.fade ? this.$slideTrack.css(e) : this.$slides.eq(t).css(e)
    }, r.prototype.fadeSlide = function(t, e) {
        var i = this;
        !1 === i.cssTransitions ? (i.$slides.eq(t).css({
            zIndex: i.options.zIndex
        }), i.$slides.eq(t).animate({
            opacity: 1
        }, i.options.speed, i.options.easing, e)) : (i.applyTransition(t), i.$slides.eq(t).css({
            opacity: 1,
            zIndex: i.options.zIndex
        }), e && setTimeout(function() {
            i.disableTransition(t), e.call()
        }, i.options.speed))
    }, r.prototype.fadeSlideOut = function(t) {
        var e = this;
        !1 === e.cssTransitions ? e.$slides.eq(t).animate({
            opacity: 0,
            zIndex: e.options.zIndex - 2
        }, e.options.speed, e.options.easing) : (e.applyTransition(t), e.$slides.eq(t).css({
            opacity: 0,
            zIndex: e.options.zIndex - 2
        }))
    }, r.prototype.filterSlides = r.prototype.slickFilter = function(t) {
        var e = this;
        null !== t && (e.$slidesCache = e.$slides, e.unload(), e.$slideTrack.children(this.options.slide).detach(), e.$slidesCache.filter(t).appendTo(e.$slideTrack), e.reinit())
    }, r.prototype.focusHandler = function() {
        var i = this;
        i.$slider.off("focus.slick blur.slick").on("focus.slick blur.slick", "*", function(t) {
            t.stopImmediatePropagation();
            var e = c(this);
            setTimeout(function() {
                i.options.pauseOnFocus && (i.focussed = e.is(":focus"), i.autoPlay())
            }, 0)
        })
    }, r.prototype.getCurrent = r.prototype.slickCurrentSlide = function() {
        return this.currentSlide
    }, r.prototype.getDotCount = function() {
        var t = this,
            e = 0,
            i = 0,
            n = 0;
        if (!0 === t.options.infinite)
            if (t.slideCount <= t.options.slidesToShow) ++n;
            else
                for (; e < t.slideCount;) ++n, e = i + t.options.slidesToScroll, i += t.options.slidesToScroll <= t.options.slidesToShow ? t.options.slidesToScroll : t.options.slidesToShow;
        else if (!0 === t.options.centerMode) n = t.slideCount;
        else if (t.options.asNavFor)
            for (; e < t.slideCount;) ++n, e = i + t.options.slidesToScroll, i += t.options.slidesToScroll <= t.options.slidesToShow ? t.options.slidesToScroll : t.options.slidesToShow;
        else n = 1 + Math.ceil((t.slideCount - t.options.slidesToShow) / t.options.slidesToScroll);
        return n - 1
    }, r.prototype.getLeft = function(t) {
        var e, i, n, s, o = this,
            r = 0;
        return o.slideOffset = 0, i = o.$slides.first().outerHeight(!0), !0 === o.options.infinite ? (o.slideCount > o.options.slidesToShow && (o.slideOffset = o.slideWidth * o.options.slidesToShow * -1, s = -1, !0 === o.options.vertical && !0 === o.options.centerMode && (2 === o.options.slidesToShow ? s = -1.5 : 1 === o.options.slidesToShow && (s = -2)), r = i * o.options.slidesToShow * s), o.slideCount % o.options.slidesToScroll != 0 && t + o.options.slidesToScroll > o.slideCount && o.slideCount > o.options.slidesToShow && (t > o.slideCount ? (o.slideOffset = (o.options.slidesToShow - (t - o.slideCount)) * o.slideWidth * -1, r = (o.options.slidesToShow - (t - o.slideCount)) * i * -1) : (o.slideOffset = o.slideCount % o.options.slidesToScroll * o.slideWidth * -1, r = o.slideCount % o.options.slidesToScroll * i * -1))) : t + o.options.slidesToShow > o.slideCount && (o.slideOffset = (t + o.options.slidesToShow - o.slideCount) * o.slideWidth, r = (t + o.options.slidesToShow - o.slideCount) * i), o.slideCount <= o.options.slidesToShow && (r = o.slideOffset = 0), !0 === o.options.centerMode && o.slideCount <= o.options.slidesToShow ? o.slideOffset = o.slideWidth * Math.floor(o.options.slidesToShow) / 2 - o.slideWidth * o.slideCount / 2 : !0 === o.options.centerMode && !0 === o.options.infinite ? o.slideOffset += o.slideWidth * Math.floor(o.options.slidesToShow / 2) - o.slideWidth : !0 === o.options.centerMode && (o.slideOffset = 0, o.slideOffset += o.slideWidth * Math.floor(o.options.slidesToShow / 2)), e = !1 === o.options.vertical ? t * o.slideWidth * -1 + o.slideOffset : t * i * -1 + r, !0 === o.options.variableWidth && (n = o.slideCount <= o.options.slidesToShow || !1 === o.options.infinite ? o.$slideTrack.children(".slick-slide").eq(t) : o.$slideTrack.children(".slick-slide").eq(t + o.options.slidesToShow), e = !0 === o.options.rtl ? n[0] ? -1 * (o.$slideTrack.width() - n[0].offsetLeft - n.width()) : 0 : n[0] ? -1 * n[0].offsetLeft : 0, !0 === o.options.centerMode && (n = o.slideCount <= o.options.slidesToShow || !1 === o.options.infinite ? o.$slideTrack.children(".slick-slide").eq(t) : o.$slideTrack.children(".slick-slide").eq(t + o.options.slidesToShow + 1), e = !0 === o.options.rtl ? n[0] ? -1 * (o.$slideTrack.width() - n[0].offsetLeft - n.width()) : 0 : n[0] ? -1 * n[0].offsetLeft : 0, e += (o.$list.width() - n.outerWidth()) / 2)), e
    }, r.prototype.getOption = r.prototype.slickGetOption = function(t) {
        return this.options[t]
    }, r.prototype.getNavigableIndexes = function() {
        var t, e = this,
            i = 0,
            n = 0,
            s = [];
        for (!1 === e.options.infinite ? t = e.slideCount : (i = -1 * e.options.slidesToScroll, n = -1 * e.options.slidesToScroll, t = 2 * e.slideCount); i < t;) s.push(i), i = n + e.options.slidesToScroll, n += e.options.slidesToScroll <= e.options.slidesToShow ? e.options.slidesToScroll : e.options.slidesToShow;
        return s
    }, r.prototype.getSlick = function() {
        return this
    }, r.prototype.getSlideCount = function() {
        var i, n, s = this;
        return n = !0 === s.options.centerMode ? s.slideWidth * Math.floor(s.options.slidesToShow / 2) : 0, !0 === s.options.swipeToSlide ? (s.$slideTrack.find(".slick-slide").each(function(t, e) {
            if (e.offsetLeft - n + c(e).outerWidth() / 2 > -1 * s.swipeLeft) return i = e, !1
        }), Math.abs(c(i).attr("data-slick-index") - s.currentSlide) || 1) : s.options.slidesToScroll
    }, r.prototype.goTo = r.prototype.slickGoTo = function(t, e) {
        this.changeSlide({
            data: {
                message: "index",
                index: parseInt(t)
            }
        }, e)
    }, r.prototype.init = function(t) {
        var e = this;
        c(e.$slider).hasClass("slick-initialized") || (c(e.$slider).addClass("slick-initialized"), e.buildRows(), e.buildOut(), e.setProps(), e.startLoad(), e.loadSlider(), e.initializeEvents(), e.updateArrows(), e.updateDots(), e.checkResponsive(!0), e.focusHandler()), t && e.$slider.trigger("init", [e]), !0 === e.options.accessibility && e.initADA(), e.options.autoplay && (e.paused = !1, e.autoPlay())
    }, r.prototype.initADA = function() {
        var i = this,
            n = Math.ceil(i.slideCount / i.options.slidesToShow),
            s = i.getNavigableIndexes().filter(function(t) {
                return 0 <= t && t < i.slideCount
            });
        i.$slides.add(i.$slideTrack.find(".slick-cloned")).attr({
            "aria-hidden": "true",
            tabindex: "-1"
        }).find("a, input, button, select").attr({
            tabindex: "-1"
        }), null !== i.$dots && (i.$slides.not(i.$slideTrack.find(".slick-cloned")).each(function(t) {
            var e = s.indexOf(t);
            c(this).attr({
                role: "tabpanel",
                id: "slick-slide" + i.instanceUid + t,
                tabindex: -1
            }), -1 !== e && c(this).attr({
                "aria-describedby": "slick-slide-control" + i.instanceUid + e
            })
        }), i.$dots.attr("role", "tablist").find("li").each(function(t) {
            var e = s[t];
            c(this).attr({
                role: "presentation"
            }), c(this).find("button").first().attr({
                role: "tab",
                id: "slick-slide-control" + i.instanceUid + t,
                "aria-controls": "slick-slide" + i.instanceUid + e,
                "aria-label": t + 1 + " of " + n,
                "aria-selected": null,
                tabindex: "-1"
            })
        }).eq(i.currentSlide).find("button").attr({
            "aria-selected": "true",
            tabindex: "0"
        }).end());
        for (var t = i.currentSlide, e = t + i.options.slidesToShow; t < e; t++) i.$slides.eq(t).attr("tabindex", 0);
        i.activateADA()
    }, r.prototype.initArrowEvents = function() {
        var t = this;
        !0 === t.options.arrows && t.slideCount > t.options.slidesToShow && (t.$prevArrow.off("click.slick").on("click.slick", {
            message: "previous"
        }, t.changeSlide), t.$nextArrow.off("click.slick").on("click.slick", {
            message: "next"
        }, t.changeSlide), !0 === t.options.accessibility && (t.$prevArrow.on("keydown.slick", t.keyHandler), t.$nextArrow.on("keydown.slick", t.keyHandler)))
    }, r.prototype.initDotEvents = function() {
        var t = this;
        !0 === t.options.dots && (c("li", t.$dots).on("click.slick", {
            message: "index"
        }, t.changeSlide), !0 === t.options.accessibility && t.$dots.on("keydown.slick", t.keyHandler)), !0 === t.options.dots && !0 === t.options.pauseOnDotsHover && c("li", t.$dots).on("mouseenter.slick", c.proxy(t.interrupt, t, !0)).on("mouseleave.slick", c.proxy(t.interrupt, t, !1))
    }, r.prototype.initSlideEvents = function() {
        var t = this;
        t.options.pauseOnHover && (t.$list.on("mouseenter.slick", c.proxy(t.interrupt, t, !0)), t.$list.on("mouseleave.slick", c.proxy(t.interrupt, t, !1)))
    }, r.prototype.initializeEvents = function() {
        var t = this;
        t.initArrowEvents(), t.initDotEvents(), t.initSlideEvents(), t.$list.on("touchstart.slick mousedown.slick", {
            action: "start"
        }, t.swipeHandler), t.$list.on("touchmove.slick mousemove.slick", {
            action: "move"
        }, t.swipeHandler), t.$list.on("touchend.slick mouseup.slick", {
            action: "end"
        }, t.swipeHandler), t.$list.on("touchcancel.slick mouseleave.slick", {
            action: "end"
        }, t.swipeHandler), t.$list.on("click.slick", t.clickHandler), c(document).on(t.visibilityChange, c.proxy(t.visibility, t)), !0 === t.options.accessibility && t.$list.on("keydown.slick", t.keyHandler), !0 === t.options.focusOnSelect && c(t.$slideTrack).children().on("click.slick", t.selectHandler), c(window).on("orientationchange.slick.slick-" + t.instanceUid, c.proxy(t.orientationChange, t)), c(window).on("resize.slick.slick-" + t.instanceUid, c.proxy(t.resize, t)), c("[draggable!=true]", t.$slideTrack).on("dragstart", t.preventDefault), c(window).on("load.slick.slick-" + t.instanceUid, t.setPosition), c(t.setPosition)
    }, r.prototype.initUI = function() {
        var t = this;
        !0 === t.options.arrows && t.slideCount > t.options.slidesToShow && (t.$prevArrow.show(), t.$nextArrow.show()), !0 === t.options.dots && t.slideCount > t.options.slidesToShow && t.$dots.show()
    }, r.prototype.keyHandler = function(t) {
        var e = this;
        t.target.tagName.match("TEXTAREA|INPUT|SELECT") || (37 === t.keyCode && !0 === e.options.accessibility ? e.changeSlide({
            data: {
                message: !0 === e.options.rtl ? "next" : "previous"
            }
        }) : 39 === t.keyCode && !0 === e.options.accessibility && e.changeSlide({
            data: {
                message: !0 === e.options.rtl ? "previous" : "next"
            }
        }))
    }, r.prototype.lazyLoad = function() {
        function t(t) {
            c("img[data-lazy]", t).each(function() {
                var t = c(this),
                    e = c(this).attr("data-lazy"),
                    i = c(this).attr("data-srcset"),
                    n = c(this).attr("data-sizes") || o.$slider.attr("data-sizes"),
                    s = document.createElement("img");
                s.onload = function() {
                    t.animate({
                        opacity: 0
                    }, 100, function() {
                        i && (t.attr("srcset", i), n && t.attr("sizes", n)), t.attr("src", e).animate({
                            opacity: 1
                        }, 200, function() {
                            t.removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading")
                        }), o.$slider.trigger("lazyLoaded", [o, t, e])
                    })
                }, s.onerror = function() {
                    t.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), o.$slider.trigger("lazyLoadError", [o, t, e])
                }, s.src = e
            })
        }
        var e, i, n, o = this;
        if (!0 === o.options.centerMode ? !0 === o.options.infinite ? n = (i = o.currentSlide + (o.options.slidesToShow / 2 + 1)) + o.options.slidesToShow + 2 : (i = Math.max(0, o.currentSlide - (o.options.slidesToShow / 2 + 1)), n = o.options.slidesToShow / 2 + 1 + 2 + o.currentSlide) : (i = o.options.infinite ? o.options.slidesToShow + o.currentSlide : o.currentSlide, n = Math.ceil(i + o.options.slidesToShow), !0 === o.options.fade && (0 < i && i--, n <= o.slideCount && n++)), e = o.$slider.find(".slick-slide").slice(i, n), "anticipated" === o.options.lazyLoad)
            for (var s = i - 1, r = n, a = o.$slider.find(".slick-slide"), l = 0; l < o.options.slidesToScroll; l++) s < 0 && (s = o.slideCount - 1), e = (e = e.add(a.eq(s))).add(a.eq(r)), s--, r++;
        t(e), o.slideCount <= o.options.slidesToShow ? t(o.$slider.find(".slick-slide")) : o.currentSlide >= o.slideCount - o.options.slidesToShow ? t(o.$slider.find(".slick-cloned").slice(0, o.options.slidesToShow)) : 0 === o.currentSlide && t(o.$slider.find(".slick-cloned").slice(-1 * o.options.slidesToShow))
    }, r.prototype.loadSlider = function() {
        var t = this;
        t.setPosition(), t.$slideTrack.css({
            opacity: 1
        }), t.$slider.removeClass("slick-loading"), t.initUI(), "progressive" === t.options.lazyLoad && t.progressiveLazyLoad()
    }, r.prototype.next = r.prototype.slickNext = function() {
        this.changeSlide({
            data: {
                message: "next"
            }
        })
    }, r.prototype.orientationChange = function() {
        this.checkResponsive(), this.setPosition()
    }, r.prototype.pause = r.prototype.slickPause = function() {
        this.autoPlayClear(), this.paused = !0
    }, r.prototype.play = r.prototype.slickPlay = function() {
        var t = this;
        t.autoPlay(), t.options.autoplay = !0, t.paused = !1, t.focussed = !1, t.interrupted = !1
    }, r.prototype.postSlide = function(t) {
        var e = this;
        e.unslicked || (e.$slider.trigger("afterChange", [e, t]), e.animating = !1, e.slideCount > e.options.slidesToShow && e.setPosition(), e.swipeLeft = null, e.options.autoplay && e.autoPlay(), !0 === e.options.accessibility && (e.initADA(), e.options.focusOnChange && c(e.$slides.get(e.currentSlide)).attr("tabindex", 0).focus()))
    }, r.prototype.prev = r.prototype.slickPrev = function() {
        this.changeSlide({
            data: {
                message: "previous"
            }
        })
    }, r.prototype.preventDefault = function(t) {
        t.preventDefault()
    }, r.prototype.progressiveLazyLoad = function(t) {
        t = t || 1;
        var e, i, n, s, o, r = this,
            a = c("img[data-lazy]", r.$slider);
        a.length ? (e = a.first(), i = e.attr("data-lazy"), n = e.attr("data-srcset"), s = e.attr("data-sizes") || r.$slider.attr("data-sizes"), (o = document.createElement("img")).onload = function() {
            n && (e.attr("srcset", n), s && e.attr("sizes", s)), e.attr("src", i).removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading"), !0 === r.options.adaptiveHeight && r.setPosition(), r.$slider.trigger("lazyLoaded", [r, e, i]), r.progressiveLazyLoad()
        }, o.onerror = function() {
            t < 3 ? setTimeout(function() {
                r.progressiveLazyLoad(t + 1)
            }, 500) : (e.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), r.$slider.trigger("lazyLoadError", [r, e, i]), r.progressiveLazyLoad())
        }, o.src = i) : r.$slider.trigger("allImagesLoaded", [r])
    }, r.prototype.refresh = function(t) {
        var e, i, n = this;
        i = n.slideCount - n.options.slidesToShow, !n.options.infinite && n.currentSlide > i && (n.currentSlide = i), n.slideCount <= n.options.slidesToShow && (n.currentSlide = 0), e = n.currentSlide, n.destroy(!0), c.extend(n, n.initials, {
            currentSlide: e
        }), n.init(), t || n.changeSlide({
            data: {
                message: "index",
                index: e
            }
        }, !1)
    }, r.prototype.registerBreakpoints = function() {
        var t, e, i, n = this,
            s = n.options.responsive || null;
        if ("array" === c.type(s) && s.length) {
            for (t in n.respondTo = n.options.respondTo || "window", s)
                if (i = n.breakpoints.length - 1, s.hasOwnProperty(t)) {
                    for (e = s[t].breakpoint; 0 <= i;) n.breakpoints[i] && n.breakpoints[i] === e && n.breakpoints.splice(i, 1), i--;
                    n.breakpoints.push(e), n.breakpointSettings[e] = s[t].settings
                } n.breakpoints.sort(function(t, e) {
                return n.options.mobileFirst ? t - e : e - t
            })
        }
    }, r.prototype.reinit = function() {
        var t = this;
        t.$slides = t.$slideTrack.children(t.options.slide).addClass("slick-slide"), t.slideCount = t.$slides.length, t.currentSlide >= t.slideCount && 0 !== t.currentSlide && (t.currentSlide = t.currentSlide - t.options.slidesToScroll), t.slideCount <= t.options.slidesToShow && (t.currentSlide = 0), t.registerBreakpoints(), t.setProps(), t.setupInfinite(), t.buildArrows(), t.updateArrows(), t.initArrowEvents(), t.buildDots(), t.updateDots(), t.initDotEvents(), t.cleanUpSlideEvents(), t.initSlideEvents(), t.checkResponsive(!1, !0), !0 === t.options.focusOnSelect && c(t.$slideTrack).children().on("click.slick", t.selectHandler), t.setSlideClasses("number" == typeof t.currentSlide ? t.currentSlide : 0), t.setPosition(), t.focusHandler(), t.paused = !t.options.autoplay, t.autoPlay(), t.$slider.trigger("reInit", [t])
    }, r.prototype.resize = function() {
        var t = this;
        c(window).width() !== t.windowWidth && (clearTimeout(t.windowDelay), t.windowDelay = window.setTimeout(function() {
            t.windowWidth = c(window).width(), t.checkResponsive(), t.unslicked || t.setPosition()
        }, 50))
    }, r.prototype.removeSlide = r.prototype.slickRemove = function(t, e, i) {
        var n = this;
        if (t = "boolean" == typeof t ? !0 === (e = t) ? 0 : n.slideCount - 1 : !0 === e ? --t : t, n.slideCount < 1 || t < 0 || t > n.slideCount - 1) return !1;
        n.unload(), !0 === i ? n.$slideTrack.children().remove() : n.$slideTrack.children(this.options.slide).eq(t).remove(), n.$slides = n.$slideTrack.children(this.options.slide), n.$slideTrack.children(this.options.slide).detach(), n.$slideTrack.append(n.$slides), n.$slidesCache = n.$slides, n.reinit()
    }, r.prototype.setCSS = function(t) {
        var e, i, n = this,
            s = {};
        !0 === n.options.rtl && (t = -t), e = "left" == n.positionProp ? Math.ceil(t) + "px" : "0px", i = "top" == n.positionProp ? Math.ceil(t) + "px" : "0px", s[n.positionProp] = t, !1 === n.transformsEnabled || (!(s = {}) === n.cssTransitions ? s[n.animType] = "translate(" + e + ", " + i + ")" : s[n.animType] = "translate3d(" + e + ", " + i + ", 0px)"), n.$slideTrack.css(s)
    }, r.prototype.setDimensions = function() {
        var t = this;
        !1 === t.options.vertical ? !0 === t.options.centerMode && t.$list.css({
            padding: "0px " + t.options.centerPadding
        }) : (t.$list.height(t.$slides.first().outerHeight(!0) * t.options.slidesToShow), !0 === t.options.centerMode && t.$list.css({
            padding: t.options.centerPadding + " 0px"
        })), t.listWidth = t.$list.width(), t.listHeight = t.$list.height(), !1 === t.options.vertical && !1 === t.options.variableWidth ? (t.slideWidth = Math.ceil(t.listWidth / t.options.slidesToShow), t.$slideTrack.width(Math.ceil(t.slideWidth * t.$slideTrack.children(".slick-slide").length))) : !0 === t.options.variableWidth ? t.$slideTrack.width(5e3 * t.slideCount) : (t.slideWidth = Math.ceil(t.listWidth), t.$slideTrack.height(Math.ceil(t.$slides.first().outerHeight(!0) * t.$slideTrack.children(".slick-slide").length)));
        var e = t.$slides.first().outerWidth(!0) - t.$slides.first().width();
        !1 === t.options.variableWidth && t.$slideTrack.children(".slick-slide").width(t.slideWidth - e)
    }, r.prototype.setFade = function() {
        var i, n = this;
        n.$slides.each(function(t, e) {
            i = n.slideWidth * t * -1, !0 === n.options.rtl ? c(e).css({
                position: "relative",
                right: i,
                top: 0,
                zIndex: n.options.zIndex - 2,
                opacity: 0
            }) : c(e).css({
                position: "relative",
                left: i,
                top: 0,
                zIndex: n.options.zIndex - 2,
                opacity: 0
            })
        }), n.$slides.eq(n.currentSlide).css({
            zIndex: n.options.zIndex - 1,
            opacity: 1
        })
    }, r.prototype.setHeight = function() {
        var t = this;
        if (1 === t.options.slidesToShow && !0 === t.options.adaptiveHeight && !1 === t.options.vertical) {
            var e = t.$slides.eq(t.currentSlide).outerHeight(!0);
            t.$list.css("height", e)
        }
    }, r.prototype.setOption = r.prototype.slickSetOption = function() {
        var t, e, i, n, s, o = this,
            r = !1;
        if ("object" === c.type(arguments[0]) ? (i = arguments[0], r = arguments[1], s = "multiple") : "string" === c.type(arguments[0]) && (i = arguments[0], n = arguments[1], r = arguments[2], "responsive" === arguments[0] && "array" === c.type(arguments[1]) ? s = "responsive" : void 0 !== arguments[1] && (s = "single")), "single" === s) o.options[i] = n;
        else if ("multiple" === s) c.each(i, function(t, e) {
            o.options[t] = e
        });
        else if ("responsive" === s)
            for (e in n)
                if ("array" !== c.type(o.options.responsive)) o.options.responsive = [n[e]];
                else {
                    for (t = o.options.responsive.length - 1; 0 <= t;) o.options.responsive[t].breakpoint === n[e].breakpoint && o.options.responsive.splice(t, 1), t--;
                    o.options.responsive.push(n[e])
                } r && (o.unload(), o.reinit())
    }, r.prototype.setPosition = function() {
        var t = this;
        t.setDimensions(), t.setHeight(), !1 === t.options.fade ? t.setCSS(t.getLeft(t.currentSlide)) : t.setFade(), t.$slider.trigger("setPosition", [t])
    }, r.prototype.setProps = function() {
        var t = this,
            e = document.body.style;
        t.positionProp = !0 === t.options.vertical ? "top" : "left", "top" === t.positionProp ? t.$slider.addClass("slick-vertical") : t.$slider.removeClass("slick-vertical"), void 0 === e.WebkitTransition && void 0 === e.MozTransition && void 0 === e.msTransition || !0 === t.options.useCSS && (t.cssTransitions = !0), t.options.fade && ("number" == typeof t.options.zIndex ? t.options.zIndex < 3 && (t.options.zIndex = 3) : t.options.zIndex = t.defaults.zIndex), void 0 !== e.OTransform && (t.animType = "OTransform", t.transformType = "-o-transform", t.transitionType = "OTransition", void 0 === e.perspectiveProperty && void 0 === e.webkitPerspective && (t.animType = !1)), void 0 !== e.MozTransform && (t.animType = "MozTransform", t.transformType = "-moz-transform", t.transitionType = "MozTransition", void 0 === e.perspectiveProperty && void 0 === e.MozPerspective && (t.animType = !1)), void 0 !== e.webkitTransform && (t.animType = "webkitTransform", t.transformType = "-webkit-transform", t.transitionType = "webkitTransition", void 0 === e.perspectiveProperty && void 0 === e.webkitPerspective && (t.animType = !1)), void 0 !== e.msTransform && (t.animType = "msTransform", t.transformType = "-ms-transform", t.transitionType = "msTransition", void 0 === e.msTransform && (t.animType = !1)), void 0 !== e.transform && !1 !== t.animType && (t.animType = "transform", t.transformType = "transform", t.transitionType = "transition"), t.transformsEnabled = t.options.useTransform && null !== t.animType && !1 !== t.animType
    }, r.prototype.setSlideClasses = function(t) {
        var e, i, n, s, o = this;
        if (i = o.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden", "true"), o.$slides.eq(t).addClass("slick-current"), !0 === o.options.centerMode) {
            var r = o.options.slidesToShow % 2 == 0 ? 1 : 0;
            e = Math.floor(o.options.slidesToShow / 2), !0 === o.options.infinite && (e <= t && t <= o.slideCount - 1 - e ? o.$slides.slice(t - e + r, t + e + 1).addClass("slick-active").attr("aria-hidden", "false") : (n = o.options.slidesToShow + t, i.slice(n - e + 1 + r, n + e + 2).addClass("slick-active").attr("aria-hidden", "false")), 0 === t ? i.eq(i.length - 1 - o.options.slidesToShow).addClass("slick-center") : t === o.slideCount - 1 && i.eq(o.options.slidesToShow).addClass("slick-center")), o.$slides.eq(t).addClass("slick-center")
        } else 0 <= t && t <= o.slideCount - o.options.slidesToShow ? o.$slides.slice(t, t + o.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false") : i.length <= o.options.slidesToShow ? i.addClass("slick-active").attr("aria-hidden", "false") : (s = o.slideCount % o.options.slidesToShow, n = !0 === o.options.infinite ? o.options.slidesToShow + t : t, o.options.slidesToShow == o.options.slidesToScroll && o.slideCount - t < o.options.slidesToShow ? i.slice(n - (o.options.slidesToShow - s), n + s).addClass("slick-active").attr("aria-hidden", "false") : i.slice(n, n + o.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false"));
        "ondemand" !== o.options.lazyLoad && "anticipated" !== o.options.lazyLoad || o.lazyLoad()
    }, r.prototype.setupInfinite = function() {
        var t, e, i, n = this;
        if (!0 === n.options.fade && (n.options.centerMode = !1), !0 === n.options.infinite && !1 === n.options.fade && (e = null, n.slideCount > n.options.slidesToShow)) {
            for (i = !0 === n.options.centerMode ? n.options.slidesToShow + 1 : n.options.slidesToShow, t = n.slideCount; t > n.slideCount - i; t -= 1) e = t - 1, c(n.$slides[e]).clone(!0).attr("id", "").attr("data-slick-index", e - n.slideCount).prependTo(n.$slideTrack).addClass("slick-cloned");
            for (t = 0; t < i + n.slideCount; t += 1) e = t, c(n.$slides[e]).clone(!0).attr("id", "").attr("data-slick-index", e + n.slideCount).appendTo(n.$slideTrack).addClass("slick-cloned");
            n.$slideTrack.find(".slick-cloned").find("[id]").each(function() {
                c(this).attr("id", "")
            })
        }
    }, r.prototype.interrupt = function(t) {
        t || this.autoPlay(), this.interrupted = t
    }, r.prototype.selectHandler = function(t) {
        var e = c(t.target).is(".slick-slide") ? c(t.target) : c(t.target).parents(".slick-slide"),
            i = parseInt(e.attr("data-slick-index"));
        i || (i = 0), this.slideCount <= this.options.slidesToShow ? this.slideHandler(i, !1, !0) : this.slideHandler(i)
    }, r.prototype.slideHandler = function(t, e, i) {
        var n, s, o, r, a, l = null,
            c = this;
        if (e = e || !1, !(!0 === c.animating && !0 === c.options.waitForAnimate || !0 === c.options.fade && c.currentSlide === t))
            if (!1 === e && c.asNavFor(t), n = t, l = c.getLeft(n), r = c.getLeft(c.currentSlide), c.currentLeft = null === c.swipeLeft ? r : c.swipeLeft, !1 === c.options.infinite && !1 === c.options.centerMode && (t < 0 || t > c.getDotCount() * c.options.slidesToScroll)) !1 === c.options.fade && (n = c.currentSlide, !0 !== i ? c.animateSlide(r, function() {
                c.postSlide(n)
            }) : c.postSlide(n));
            else if (!1 === c.options.infinite && !0 === c.options.centerMode && (t < 0 || t > c.slideCount - c.options.slidesToScroll)) !1 === c.options.fade && (n = c.currentSlide, !0 !== i ? c.animateSlide(r, function() {
            c.postSlide(n)
        }) : c.postSlide(n));
        else {
            if (c.options.autoplay && clearInterval(c.autoPlayTimer), s = n < 0 ? c.slideCount % c.options.slidesToScroll != 0 ? c.slideCount - c.slideCount % c.options.slidesToScroll : c.slideCount + n : n >= c.slideCount ? c.slideCount % c.options.slidesToScroll != 0 ? 0 : n - c.slideCount : n, c.animating = !0, c.$slider.trigger("beforeChange", [c, c.currentSlide, s]), o = c.currentSlide, c.currentSlide = s, c.setSlideClasses(c.currentSlide), c.options.asNavFor && (a = (a = c.getNavTarget()).slick("getSlick")).slideCount <= a.options.slidesToShow && a.setSlideClasses(c.currentSlide), c.updateDots(), c.updateArrows(), !0 === c.options.fade) return !0 !== i ? (c.fadeSlideOut(o), c.fadeSlide(s, function() {
                c.postSlide(s)
            })) : c.postSlide(s), void c.animateHeight();
            !0 !== i ? c.animateSlide(l, function() {
                c.postSlide(s)
            }) : c.postSlide(s)
        }
    }, r.prototype.startLoad = function() {
        var t = this;
        !0 === t.options.arrows && t.slideCount > t.options.slidesToShow && (t.$prevArrow.hide(), t.$nextArrow.hide()), !0 === t.options.dots && t.slideCount > t.options.slidesToShow && t.$dots.hide(), t.$slider.addClass("slick-loading")
    }, r.prototype.swipeDirection = function() {
        var t, e, i, n, s = this;
        return t = s.touchObject.startX - s.touchObject.curX, e = s.touchObject.startY - s.touchObject.curY, i = Math.atan2(e, t), (n = Math.round(180 * i / Math.PI)) < 0 && (n = 360 - Math.abs(n)), n <= 45 && 0 <= n ? !1 === s.options.rtl ? "left" : "right" : n <= 360 && 315 <= n ? !1 === s.options.rtl ? "left" : "right" : 135 <= n && n <= 225 ? !1 === s.options.rtl ? "right" : "left" : !0 === s.options.verticalSwiping ? 35 <= n && n <= 135 ? "down" : "up" : "vertical"
    }, r.prototype.swipeEnd = function(t) {
        var e, i, n = this;
        if (n.dragging = !1, n.swiping = !1, n.scrolling) return n.scrolling = !1;
        if (n.interrupted = !1, n.shouldClick = !(10 < n.touchObject.swipeLength), void 0 === n.touchObject.curX) return !1;
        if (!0 === n.touchObject.edgeHit && n.$slider.trigger("edge", [n, n.swipeDirection()]), n.touchObject.swipeLength >= n.touchObject.minSwipe) {
            switch (i = n.swipeDirection()) {
                case "left":
                case "down":
                    e = n.options.swipeToSlide ? n.checkNavigable(n.currentSlide + n.getSlideCount()) : n.currentSlide + n.getSlideCount(), n.currentDirection = 0;
                    break;
                case "right":
                case "up":
                    e = n.options.swipeToSlide ? n.checkNavigable(n.currentSlide - n.getSlideCount()) : n.currentSlide - n.getSlideCount(), n.currentDirection = 1
            }
            "vertical" != i && (n.slideHandler(e), n.touchObject = {}, n.$slider.trigger("swipe", [n, i]))
        } else n.touchObject.startX !== n.touchObject.curX && (n.slideHandler(n.currentSlide), n.touchObject = {})
    }, r.prototype.swipeHandler = function(t) {
        var e = this;
        if (!(!1 === e.options.swipe || "ontouchend" in document && !1 === e.options.swipe || !1 === e.options.draggable && -1 !== t.type.indexOf("mouse"))) switch (e.touchObject.fingerCount = t.originalEvent && void 0 !== t.originalEvent.touches ? t.originalEvent.touches.length : 1, e.touchObject.minSwipe = e.listWidth / e.options.touchThreshold, !0 === e.options.verticalSwiping && (e.touchObject.minSwipe = e.listHeight / e.options.touchThreshold), t.data.action) {
            case "start":
                e.swipeStart(t);
                break;
            case "move":
                e.swipeMove(t);
                break;
            case "end":
                e.swipeEnd(t)
        }
    }, r.prototype.swipeMove = function(t) {
        var e, i, n, s, o, r, a = this;
        return o = void 0 !== t.originalEvent ? t.originalEvent.touches : null, !(!a.dragging || a.scrolling || o && 1 !== o.length) && (e = a.getLeft(a.currentSlide), a.touchObject.curX = void 0 !== o ? o[0].pageX : t.clientX, a.touchObject.curY = void 0 !== o ? o[0].pageY : t.clientY, a.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(a.touchObject.curX - a.touchObject.startX, 2))), r = Math.round(Math.sqrt(Math.pow(a.touchObject.curY - a.touchObject.startY, 2))), !a.options.verticalSwiping && !a.swiping && 4 < r ? !(a.scrolling = !0) : (!0 === a.options.verticalSwiping && (a.touchObject.swipeLength = r), i = a.swipeDirection(), void 0 !== t.originalEvent && 4 < a.touchObject.swipeLength && (a.swiping = !0, t.preventDefault()), s = (!1 === a.options.rtl ? 1 : -1) * (a.touchObject.curX > a.touchObject.startX ? 1 : -1), !0 === a.options.verticalSwiping && (s = a.touchObject.curY > a.touchObject.startY ? 1 : -1), n = a.touchObject.swipeLength, (a.touchObject.edgeHit = !1) === a.options.infinite && (0 === a.currentSlide && "right" === i || a.currentSlide >= a.getDotCount() && "left" === i) && (n = a.touchObject.swipeLength * a.options.edgeFriction, a.touchObject.edgeHit = !0), !1 === a.options.vertical ? a.swipeLeft = e + n * s : a.swipeLeft = e + n * (a.$list.height() / a.listWidth) * s, !0 === a.options.verticalSwiping && (a.swipeLeft = e + n * s), !0 !== a.options.fade && !1 !== a.options.touchMove && (!0 === a.animating ? (a.swipeLeft = null, !1) : void a.setCSS(a.swipeLeft))))
    }, r.prototype.swipeStart = function(t) {
        var e, i = this;
        if (i.interrupted = !0, 1 !== i.touchObject.fingerCount || i.slideCount <= i.options.slidesToShow) return !(i.touchObject = {});
        void 0 !== t.originalEvent && void 0 !== t.originalEvent.touches && (e = t.originalEvent.touches[0]), i.touchObject.startX = i.touchObject.curX = void 0 !== e ? e.pageX : t.clientX, i.touchObject.startY = i.touchObject.curY = void 0 !== e ? e.pageY : t.clientY, i.dragging = !0
    }, r.prototype.unfilterSlides = r.prototype.slickUnfilter = function() {
        var t = this;
        null !== t.$slidesCache && (t.unload(), t.$slideTrack.children(this.options.slide).detach(), t.$slidesCache.appendTo(t.$slideTrack), t.reinit())
    }, r.prototype.unload = function() {
        var t = this;
        c(".slick-cloned", t.$slider).remove(), t.$dots && t.$dots.remove(), t.$prevArrow && t.htmlExpr.test(t.options.prevArrow) && t.$prevArrow.remove(), t.$nextArrow && t.htmlExpr.test(t.options.nextArrow) && t.$nextArrow.remove(), t.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden", "true").css("width", "")
    }, r.prototype.unslick = function(t) {
        this.$slider.trigger("unslick", [this, t]), this.destroy()
    }, r.prototype.updateArrows = function() {
        var t = this;
        Math.floor(t.options.slidesToShow / 2), !0 === t.options.arrows && t.slideCount > t.options.slidesToShow && !t.options.infinite && (t.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), t.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), 0 === t.currentSlide ? (t.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true"), t.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : t.currentSlide >= t.slideCount - t.options.slidesToShow && !1 === t.options.centerMode ? (t.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), t.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : t.currentSlide >= t.slideCount - 1 && !0 === t.options.centerMode && (t.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), t.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")))
    }, r.prototype.updateDots = function() {
        var t = this;
        null !== t.$dots && (t.$dots.find("li").removeClass("slick-active").end(), t.$dots.find("li").eq(Math.floor(t.currentSlide / t.options.slidesToScroll)).addClass("slick-active"))
    }, r.prototype.visibility = function() {
        this.options.autoplay && (document[this.hidden] ? this.interrupted = !0 : this.interrupted = !1)
    }, c.fn.slick = function() {
        var t, e, i = this,
            n = arguments[0],
            s = Array.prototype.slice.call(arguments, 1),
            o = i.length;
        for (t = 0; t < o; t++)
            if ("object" == typeof n || void 0 === n ? i[t].slick = new r(i[t], n) : e = i[t].slick[n].apply(i[t].slick, s), void 0 !== e) return e;
        return i
    }
}),
function() {
    var n, e, i, l, s, o = function(t, e) {
            return function() {
                return t.apply(e, arguments)
            }
        },
        r = [].indexOf || function(t) {
            for (var e = 0, i = this.length; e < i; e++)
                if (e in this && this[e] === t) return e;
            return -1
        };
    e = function() {
        function t() {}
        return t.prototype.extend = function(t, e) {
            var i, n;
            for (i in e) n = e[i], null == t[i] && (t[i] = n);
            return t
        }, t.prototype.isMobile = function(t) {
            return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(t)
        }, t.prototype.createEvent = function(t, e, i, n) {
            var s;
            return null == e && (e = !1), null == i && (i = !1), null == n && (n = null), null != document.createEvent ? (s = document.createEvent("CustomEvent")).initCustomEvent(t, e, i, n) : null != document.createEventObject ? (s = document.createEventObject()).eventType = t : s.eventName = t, s
        }, t.prototype.emitEvent = function(t, e) {
            return null != t.dispatchEvent ? t.dispatchEvent(e) : e in (null != t) ? t[e]() : "on" + e in (null != t) ? t["on" + e]() : void 0
        }, t.prototype.addEvent = function(t, e, i) {
            return null != t.addEventListener ? t.addEventListener(e, i, !1) : null != t.attachEvent ? t.attachEvent("on" + e, i) : t[e] = i
        }, t.prototype.removeEvent = function(t, e, i) {
            return null != t.removeEventListener ? t.removeEventListener(e, i, !1) : null != t.detachEvent ? t.detachEvent("on" + e, i) : delete t[e]
        }, t.prototype.innerHeight = function() {
            return "innerHeight" in window ? window.innerHeight : document.documentElement.clientHeight
        }, t
    }(), i = this.WeakMap || this.MozWeakMap || (i = function() {
        function t() {
            this.keys = [], this.values = []
        }
        return t.prototype.get = function(t) {
            var e, i, n, s;
            for (e = i = 0, n = (s = this.keys).length; i < n; e = ++i)
                if (s[e] === t) return this.values[e]
        }, t.prototype.set = function(t, e) {
            var i, n, s, o;
            for (i = n = 0, s = (o = this.keys).length; n < s; i = ++n)
                if (o[i] === t) return void(this.values[i] = e);
            return this.keys.push(t), this.values.push(e)
        }, t
    }()), n = this.MutationObserver || this.WebkitMutationObserver || this.MozMutationObserver || (n = function() {
        function t() {
            "undefined" != typeof console && null !== console && console.warn("MutationObserver is not supported by your browser."), "undefined" != typeof console && null !== console && console.warn("WOW.js cannot detect dom mutations, please call .sync() after loading new content.")
        }
        return t.notSupported = !0, t.prototype.observe = function() {}, t
    }()), l = this.getComputedStyle || function(i) {
        return this.getPropertyValue = function(t) {
            var e;
            return "float" === t && (t = "styleFloat"), s.test(t) && t.replace(s, function(t, e) {
                return e.toUpperCase()
            }), (null != (e = i.currentStyle) ? e[t] : void 0) || null
        }, this
    }, s = /(\-([a-z]){1})/g, this.WOW = function() {
        function t(t) {
            null == t && (t = {}), this.scrollCallback = o(this.scrollCallback, this), this.scrollHandler = o(this.scrollHandler, this), this.resetAnimation = o(this.resetAnimation, this), this.start = o(this.start, this), this.scrolled = !0, this.config = this.util().extend(t, this.defaults), this.animationNameCache = new i, this.wowEvent = this.util().createEvent(this.config.boxClass)
        }
        return t.prototype.defaults = {
            boxClass: "wow",
            animateClass: "animated",
            offset: 0,
            mobile: !0,
            live: !0,
            callback: null
        }, t.prototype.init = function() {
            var t;
            return this.element = window.document.documentElement, "interactive" === (t = document.readyState) || "complete" === t ? this.start() : this.util().addEvent(document, "DOMContentLoaded", this.start), this.finished = []
        }, t.prototype.start = function() {
            var s, t, e, i, r;
            if (this.stopped = !1, this.boxes = function() {
                    var t, e, i, n;
                    for (n = [], t = 0, e = (i = this.element.querySelectorAll("." + this.config.boxClass)).length; t < e; t++) s = i[t], n.push(s);
                    return n
                }.call(this), this.all = function() {
                    var t, e, i, n;
                    for (n = [], t = 0, e = (i = this.boxes).length; t < e; t++) s = i[t], n.push(s);
                    return n
                }.call(this), this.boxes.length)
                if (this.disabled()) this.resetStyle();
                else
                    for (t = 0, e = (i = this.boxes).length; t < e; t++) s = i[t], this.applyStyle(s, !0);
            return this.disabled() || (this.util().addEvent(window, "scroll", this.scrollHandler), this.util().addEvent(window, "resize", this.scrollHandler), this.interval = setInterval(this.scrollCallback, 50)), this.config.live ? new n((r = this, function(t) {
                var e, i, s, o, n;
                for (n = [], e = 0, i = t.length; e < i; e++) o = t[e], n.push(function() {
                    var t, e, i, n;
                    for (n = [], t = 0, e = (i = o.addedNodes || []).length; t < e; t++) s = i[t], n.push(this.doSync(s));
                    return n
                }.call(r));
                return n
            })).observe(document.body, {
                childList: !0,
                subtree: !0
            }) : void 0
        }, t.prototype.stop = function() {
            return this.stopped = !0, this.util().removeEvent(window, "scroll", this.scrollHandler), this.util().removeEvent(window, "resize", this.scrollHandler), null != this.interval ? clearInterval(this.interval) : void 0
        }, t.prototype.sync = function() {
            return n.notSupported ? this.doSync(this.element) : void 0
        }, t.prototype.doSync = function(t) {
            var e, i, n, s, o;
            if (null == t && (t = this.element), 1 === t.nodeType) {
                for (o = [], i = 0, n = (s = (t = t.parentNode || t).querySelectorAll("." + this.config.boxClass)).length; i < n; i++) e = s[i], r.call(this.all, e) < 0 ? (this.boxes.push(e), this.all.push(e), this.stopped || this.disabled() ? this.resetStyle() : this.applyStyle(e, !0), o.push(this.scrolled = !0)) : o.push(void 0);
                return o
            }
        }, t.prototype.show = function(t) {
            return this.applyStyle(t), t.className = t.className + " " + this.config.animateClass, null != this.config.callback && this.config.callback(t), this.util().emitEvent(t, this.wowEvent), this.util().addEvent(t, "animationend", this.resetAnimation), this.util().addEvent(t, "oanimationend", this.resetAnimation), this.util().addEvent(t, "webkitAnimationEnd", this.resetAnimation), this.util().addEvent(t, "MSAnimationEnd", this.resetAnimation), t
        }, t.prototype.applyStyle = function(t, e) {
            var i, n, s, o;
            return n = t.getAttribute("data-wow-duration"), i = t.getAttribute("data-wow-delay"), s = t.getAttribute("data-wow-iteration"), this.animate((o = this, function() {
                return o.customStyle(t, e, n, i, s)
            }))
        }, t.prototype.animate = "requestAnimationFrame" in window ? function(t) {
            return window.requestAnimationFrame(t)
        } : function(t) {
            return t()
        }, t.prototype.resetStyle = function() {
            var t, e, i, n, s;
            for (s = [], e = 0, i = (n = this.boxes).length; e < i; e++) t = n[e], s.push(t.style.visibility = "visible");
            return s
        }, t.prototype.resetAnimation = function(t) {
            var e;
            return 0 <= t.type.toLowerCase().indexOf("animationend") ? (e = t.target || t.srcElement).className = e.className.replace(this.config.animateClass, "").trim() : void 0
        }, t.prototype.customStyle = function(t, e, i, n, s) {
            return e && this.cacheAnimationName(t), t.style.visibility = e ? "hidden" : "visible", i && this.vendorSet(t.style, {
                animationDuration: i
            }), n && this.vendorSet(t.style, {
                animationDelay: n
            }), s && this.vendorSet(t.style, {
                animationIterationCount: s
            }), this.vendorSet(t.style, {
                animationName: e ? "none" : this.cachedAnimationName(t)
            }), t
        }, t.prototype.vendors = ["moz", "webkit"], t.prototype.vendorSet = function(s, t) {
            var o, e, r, a;
            for (o in e = [], t) r = t[o], s["" + o] = r, e.push(function() {
                var t, e, i, n;
                for (n = [], t = 0, e = (i = this.vendors).length; t < e; t++) a = i[t], n.push(s["" + a + o.charAt(0).toUpperCase() + o.substr(1)] = r);
                return n
            }.call(this));
            return e
        }, t.prototype.vendorCSS = function(t, e) {
            var i, n, s, o, r, a;
            for (o = (r = l(t)).getPropertyCSSValue(e), i = 0, n = (s = this.vendors).length; i < n; i++) a = s[i], o = o || r.getPropertyCSSValue("-" + a + "-" + e);
            return o
        }, t.prototype.animationName = function(e) {
            var i;
            try {
                i = this.vendorCSS(e, "animation-name").cssText
            } catch (t) {
                i = l(e).getPropertyValue("animation-name")
            }
            return "none" === i ? "" : i
        }, t.prototype.cacheAnimationName = function(t) {
            return this.animationNameCache.set(t, this.animationName(t))
        }, t.prototype.cachedAnimationName = function(t) {
            return this.animationNameCache.get(t)
        }, t.prototype.scrollHandler = function() {
            return this.scrolled = !0
        }, t.prototype.scrollCallback = function() {
            var s;
            return !this.scrolled || (this.scrolled = !1, this.boxes = function() {
                var t, e, i, n;
                for (n = [], t = 0, e = (i = this.boxes).length; t < e; t++)(s = i[t]) && (this.isVisible(s) ? this.show(s) : n.push(s));
                return n
            }.call(this), this.boxes.length || this.config.live) ? void 0 : this.stop()
        }, t.prototype.offsetTop = function(t) {
            for (var e; void 0 === t.offsetTop;) t = t.parentNode;
            for (e = t.offsetTop; t = t.offsetParent;) e += t.offsetTop;
            return e
        }, t.prototype.isVisible = function(t) {
            var e, i, n, s, o;
            return i = t.getAttribute("data-wow-offset") || this.config.offset, s = (o = window.pageYOffset) + Math.min(this.element.clientHeight, this.util().innerHeight()) - i, e = (n = this.offsetTop(t)) + t.clientHeight, n <= s && o <= e
        }, t.prototype.util = function() {
            return null != this._util ? this._util : this._util = new e
        }, t.prototype.disabled = function() {
            return !this.config.mobile && this.util().isMobile(navigator.userAgent)
        }, t
    }()
}.call(this),
    function(e, i) {
        "function" == typeof define && define.amd ? define("jquery-bridget/jquery-bridget", ["jquery"], function(t) {
            return i(e, t)
        }) : "object" == typeof module && module.exports ? module.exports = i(e, require("jquery")) : e.jQueryBridget = i(e, e.jQuery)
    }(window, function(t, e) {
        "use strict";

        function i(c, s, d) {
            (d = d || e || t.jQuery) && (s.prototype.option || (s.prototype.option = function(t) {
                d.isPlainObject(t) && (this.options = d.extend(!0, this.options, t))
            }), d.fn[c] = function(t) {
                if ("string" == typeof t) {
                    var e = u.call(arguments, 1);
                    return r = e, l = "$()." + c + '("' + (o = t) + '")', (i = this).each(function(t, e) {
                        var i = d.data(e, c);
                        if (i) {
                            var n = i[o];
                            if (n && "_" != o.charAt(0)) {
                                var s = n.apply(i, r);
                                a = void 0 === a ? s : a
                            } else h(l + " is not a valid method")
                        } else h(c + " not initialized. Cannot call methods, i.e. " + l)
                    }), void 0 !== a ? a : i
                }
                var i, o, r, a, l, n;
                return n = t, this.each(function(t, e) {
                    var i = d.data(e, c);
                    i ? (i.option(n), i._init()) : (i = new s(e, n), d.data(e, c, i))
                }), this
            }, n(d))
        }

        function n(t) {
            !t || t && t.bridget || (t.bridget = i)
        }
        var u = Array.prototype.slice,
            s = t.console,
            h = void 0 === s ? function() {} : function(t) {
                s.error(t)
            };
        return n(e || t.jQuery), i
    }),
    function(t, e) {
        "function" == typeof define && define.amd ? define("get-size/get-size", e) : "object" == typeof module && module.exports ? module.exports = e() : t.getSize = e()
    }(window, function() {
        "use strict";

        function v(t) {
            var e = parseFloat(t);
            return -1 == t.indexOf("%") && !isNaN(e) && e
        }

        function y(t) {
            var e = getComputedStyle(t);
            return e || i("Style returned " + e + ". Are you running this code in a hidden iframe on Firefox? See https://bit.ly/getsizebug1"), e
        }

        function w(t) {
            if (function() {
                    if (!T) {
                        T = !0;
                        var t = document.createElement("div");
                        t.style.width = "200px", t.style.padding = "1px 2px 3px 4px", t.style.borderStyle = "solid", t.style.borderWidth = "1px 2px 3px 4px", t.style.boxSizing = "border-box";
                        var e = document.body || document.documentElement;
                        e.appendChild(t);
                        var i = y(t);
                        b = 200 == Math.round(v(i.width)), w.isBoxSizeOuter = b, e.removeChild(t)
                    }
                }(), "string" == typeof t && (t = document.querySelector(t)), t && "object" == typeof t && t.nodeType) {
                var e = y(t);
                if ("none" == e.display) return function() {
                    for (var t = {
                            width: 0,
                            height: 0,
                            innerWidth: 0,
                            innerHeight: 0,
                            outerWidth: 0,
                            outerHeight: 0
                        }, e = 0; e < k; e++) t[x[e]] = 0;
                    return t
                }();
                var i = {};
                i.width = t.offsetWidth, i.height = t.offsetHeight;
                for (var n = i.isBorderBox = "border-box" == e.boxSizing, s = 0; s < k; s++) {
                    var o = x[s],
                        r = e[o],
                        a = parseFloat(r);
                    i[o] = isNaN(a) ? 0 : a
                }
                var l = i.paddingLeft + i.paddingRight,
                    c = i.paddingTop + i.paddingBottom,
                    d = i.marginLeft + i.marginRight,
                    u = i.marginTop + i.marginBottom,
                    h = i.borderLeftWidth + i.borderRightWidth,
                    p = i.borderTopWidth + i.borderBottomWidth,
                    f = n && b,
                    m = v(e.width);
                !1 !== m && (i.width = m + (f ? 0 : l + h));
                var g = v(e.height);
                return !1 !== g && (i.height = g + (f ? 0 : c + p)), i.innerWidth = i.width - (l + h), i.innerHeight = i.height - (c + p), i.outerWidth = i.width + d, i.outerHeight = i.height + u, i
            }
        }
        var b, i = "undefined" == typeof console ? function() {} : function(t) {
                console.error(t)
            },
            x = ["paddingLeft", "paddingRight", "paddingTop", "paddingBottom", "marginLeft", "marginRight", "marginTop", "marginBottom", "borderLeftWidth", "borderRightWidth", "borderTopWidth", "borderBottomWidth"],
            k = x.length,
            T = !1;
        return w
    }),
    function(t, e) {
        "function" == typeof define && define.amd ? define("ev-emitter/ev-emitter", e) : "object" == typeof module && module.exports ? module.exports = e() : t.EvEmitter = e()
    }("undefined" != typeof window ? window : this, function() {
        function t() {}
        var e = t.prototype;
        return e.on = function(t, e) {
            if (t && e) {
                var i = this._events = this._events || {},
                    n = i[t] = i[t] || [];
                return -1 == n.indexOf(e) && n.push(e), this
            }
        }, e.once = function(t, e) {
            if (t && e) {
                this.on(t, e);
                var i = this._onceEvents = this._onceEvents || {};
                return (i[t] = i[t] || {})[e] = !0, this
            }
        }, e.off = function(t, e) {
            var i = this._events && this._events[t];
            if (i && i.length) {
                var n = i.indexOf(e);
                return -1 != n && i.splice(n, 1), this
            }
        }, e.emitEvent = function(t, e) {
            var i = this._events && this._events[t];
            if (i && i.length) {
                i = i.slice(0), e = e || [];
                for (var n = this._onceEvents && this._onceEvents[t], s = 0; s < i.length; s++) {
                    var o = i[s];
                    n && n[o] && (this.off(t, o), delete n[o]), o.apply(this, e)
                }
                return this
            }
        }, e.allOff = function() {
            delete this._events, delete this._onceEvents
        }, t
    }),
    function(t, e) {
        "use strict";
        "function" == typeof define && define.amd ? define("desandro-matches-selector/matches-selector", e) : "object" == typeof module && module.exports ? module.exports = e() : t.matchesSelector = e()
    }(window, function() {
        "use strict";
        var i = function() {
            var t = window.Element.prototype;
            if (t.matches) return "matches";
            if (t.matchesSelector) return "matchesSelector";
            for (var e = ["webkit", "moz", "ms", "o"], i = 0; i < e.length; i++) {
                var n = e[i] + "MatchesSelector";
                if (t[n]) return n
            }
        }();
        return function(t, e) {
            return t[i](e)
        }
    }),
    function(e, i) {
        "function" == typeof define && define.amd ? define("fizzy-ui-utils/utils", ["desandro-matches-selector/matches-selector"], function(t) {
            return i(e, t)
        }) : "object" == typeof module && module.exports ? module.exports = i(e, require("desandro-matches-selector")) : e.fizzyUIUtils = i(e, e.matchesSelector)
    }(window, function(c, o) {
        var d = {
                extend: function(t, e) {
                    for (var i in e) t[i] = e[i];
                    return t
                },
                modulo: function(t, e) {
                    return (t % e + e) % e
                }
            },
            e = Array.prototype.slice;
        d.makeArray = function(t) {
            return Array.isArray(t) ? t : null == t ? [] : "object" == typeof t && "number" == typeof t.length ? e.call(t) : [t]
        }, d.removeFrom = function(t, e) {
            var i = t.indexOf(e); - 1 != i && t.splice(i, 1)
        }, d.getParent = function(t, e) {
            for (; t.parentNode && t != document.body;)
                if (t = t.parentNode, o(t, e)) return t
        }, d.getQueryElement = function(t) {
            return "string" == typeof t ? document.querySelector(t) : t
        }, d.handleEvent = function(t) {
            var e = "on" + t.type;
            this[e] && this[e](t)
        }, d.filterFindElements = function(t, n) {
            t = d.makeArray(t);
            var s = [];
            return t.forEach(function(t) {
                if (t instanceof HTMLElement) {
                    if (!n) return void s.push(t);
                    o(t, n) && s.push(t);
                    for (var e = t.querySelectorAll(n), i = 0; i < e.length; i++) s.push(e[i])
                }
            }), s
        }, d.debounceMethod = function(t, e, n) {
            n = n || 100;
            var s = t.prototype[e],
                o = e + "Timeout";
            t.prototype[e] = function() {
                var t = this[o];
                clearTimeout(t);
                var e = arguments,
                    i = this;
                this[o] = setTimeout(function() {
                    s.apply(i, e), delete i[o]
                }, n)
            }
        }, d.docReady = function(t) {
            var e = document.readyState;
            "complete" == e || "interactive" == e ? setTimeout(t) : document.addEventListener("DOMContentLoaded", t)
        }, d.toDashed = function(t) {
            return t.replace(/(.)([A-Z])/g, function(t, e, i) {
                return e + "-" + i
            }).toLowerCase()
        };
        var u = c.console;
        return d.htmlInit = function(a, l) {
            d.docReady(function() {
                var t = d.toDashed(l),
                    s = "data-" + t,
                    e = document.querySelectorAll("[" + s + "]"),
                    i = document.querySelectorAll(".js-" + t),
                    n = d.makeArray(e).concat(d.makeArray(i)),
                    o = s + "-options",
                    r = c.jQuery;
                n.forEach(function(e) {
                    var t, i = e.getAttribute(s) || e.getAttribute(o);
                    try {
                        t = i && JSON.parse(i)
                    } catch (t) {
                        return void(u && u.error("Error parsing " + s + " on " + e.className + ": " + t))
                    }
                    var n = new a(e, t);
                    r && r.data(e, l, n)
                })
            })
        }, d
    }),
    function(t, e) {
        "function" == typeof define && define.amd ? define("outlayer/item", ["ev-emitter/ev-emitter", "get-size/get-size"], e) : "object" == typeof module && module.exports ? module.exports = e(require("ev-emitter"), require("get-size")) : (t.Outlayer = {}, t.Outlayer.Item = e(t.EvEmitter, t.getSize))
    }(window, function(t, e) {
        "use strict";

        function i(t, e) {
            t && (this.element = t, this.layout = e, this.position = {
                x: 0,
                y: 0
            }, this._create())
        }
        var n = document.documentElement.style,
            s = "string" == typeof n.transition ? "transition" : "WebkitTransition",
            o = "string" == typeof n.transform ? "transform" : "WebkitTransform",
            r = {
                WebkitTransition: "webkitTransitionEnd",
                transition: "transitionend"
            } [s],
            a = {
                transform: o,
                transition: s,
                transitionDuration: s + "Duration",
                transitionProperty: s + "Property",
                transitionDelay: s + "Delay"
            },
            l = i.prototype = Object.create(t.prototype);
        l.constructor = i, l._create = function() {
            this._transn = {
                ingProperties: {},
                clean: {},
                onEnd: {}
            }, this.css({
                position: "absolute"
            })
        }, l.handleEvent = function(t) {
            var e = "on" + t.type;
            this[e] && this[e](t)
        }, l.getSize = function() {
            this.size = e(this.element)
        }, l.css = function(t) {
            var e = this.element.style;
            for (var i in t) {
                e[a[i] || i] = t[i]
            }
        }, l.getPosition = function() {
            var t = getComputedStyle(this.element),
                e = this.layout._getOption("originLeft"),
                i = this.layout._getOption("originTop"),
                n = t[e ? "left" : "right"],
                s = t[i ? "top" : "bottom"],
                o = parseFloat(n),
                r = parseFloat(s),
                a = this.layout.size; - 1 != n.indexOf("%") && (o = o / 100 * a.width), -1 != s.indexOf("%") && (r = r / 100 * a.height), o = isNaN(o) ? 0 : o, r = isNaN(r) ? 0 : r, o -= e ? a.paddingLeft : a.paddingRight, r -= i ? a.paddingTop : a.paddingBottom, this.position.x = o, this.position.y = r
        }, l.layoutPosition = function() {
            var t = this.layout.size,
                e = {},
                i = this.layout._getOption("originLeft"),
                n = this.layout._getOption("originTop"),
                s = i ? "paddingLeft" : "paddingRight",
                o = i ? "left" : "right",
                r = i ? "right" : "left",
                a = this.position.x + t[s];
            e[o] = this.getXValue(a), e[r] = "";
            var l = n ? "paddingTop" : "paddingBottom",
                c = n ? "top" : "bottom",
                d = n ? "bottom" : "top",
                u = this.position.y + t[l];
            e[c] = this.getYValue(u), e[d] = "", this.css(e), this.emitEvent("layout", [this])
        }, l.getXValue = function(t) {
            var e = this.layout._getOption("horizontal");
            return this.layout.options.percentPosition && !e ? t / this.layout.size.width * 100 + "%" : t + "px"
        }, l.getYValue = function(t) {
            var e = this.layout._getOption("horizontal");
            return this.layout.options.percentPosition && e ? t / this.layout.size.height * 100 + "%" : t + "px"
        }, l._transitionTo = function(t, e) {
            this.getPosition();
            var i = this.position.x,
                n = this.position.y,
                s = t == this.position.x && e == this.position.y;
            if (this.setPosition(t, e), !s || this.isTransitioning) {
                var o = t - i,
                    r = e - n,
                    a = {};
                a.transform = this.getTranslate(o, r), this.transition({
                    to: a,
                    onTransitionEnd: {
                        transform: this.layoutPosition
                    },
                    isCleaning: !0
                })
            } else this.layoutPosition()
        }, l.getTranslate = function(t, e) {
            return "translate3d(" + (t = this.layout._getOption("originLeft") ? t : -t) + "px, " + (e = this.layout._getOption("originTop") ? e : -e) + "px, 0)"
        }, l.goTo = function(t, e) {
            this.setPosition(t, e), this.layoutPosition()
        }, l.moveTo = l._transitionTo, l.setPosition = function(t, e) {
            this.position.x = parseFloat(t), this.position.y = parseFloat(e)
        }, l._nonTransition = function(t) {
            for (var e in this.css(t.to), t.isCleaning && this._removeStyles(t.to), t.onTransitionEnd) t.onTransitionEnd[e].call(this)
        }, l.transition = function(t) {
            if (parseFloat(this.layout.options.transitionDuration)) {
                var e = this._transn;
                for (var i in t.onTransitionEnd) e.onEnd[i] = t.onTransitionEnd[i];
                for (i in t.to) e.ingProperties[i] = !0, t.isCleaning && (e.clean[i] = !0);
                if (t.from) {
                    this.css(t.from);
                    this.element.offsetHeight;
                    null
                }
                this.enableTransition(t.to), this.css(t.to), this.isTransitioning = !0
            } else this._nonTransition(t)
        };
        var c = "opacity," + o.replace(/([A-Z])/g, function(t) {
            return "-" + t.toLowerCase()
        });
        l.enableTransition = function() {
            if (!this.isTransitioning) {
                var t = this.layout.options.transitionDuration;
                t = "number" == typeof t ? t + "ms" : t, this.css({
                    transitionProperty: c,
                    transitionDuration: t,
                    transitionDelay: this.staggerDelay || 0
                }), this.element.addEventListener(r, this, !1)
            }
        }, l.onwebkitTransitionEnd = function(t) {
            this.ontransitionend(t)
        }, l.onotransitionend = function(t) {
            this.ontransitionend(t)
        };
        var d = {
            "-webkit-transform": "transform"
        };
        l.ontransitionend = function(t) {
            if (t.target === this.element) {
                var e = this._transn,
                    i = d[t.propertyName] || t.propertyName;
                if (delete e.ingProperties[i], function(t) {
                        for (var e in t) return !1;
                        return !0
                    }(e.ingProperties) && this.disableTransition(), i in e.clean && (this.element.style[t.propertyName] = "", delete e.clean[i]), i in e.onEnd) e.onEnd[i].call(this), delete e.onEnd[i];
                this.emitEvent("transitionEnd", [this])
            }
        }, l.disableTransition = function() {
            this.removeTransitionStyles(), this.element.removeEventListener(r, this, !1), this.isTransitioning = !1
        }, l._removeStyles = function(t) {
            var e = {};
            for (var i in t) e[i] = "";
            this.css(e)
        };
        var u = {
            transitionProperty: "",
            transitionDuration: "",
            transitionDelay: ""
        };
        return l.removeTransitionStyles = function() {
            this.css(u)
        }, l.stagger = function(t) {
            t = isNaN(t) ? 0 : t, this.staggerDelay = t + "ms"
        }, l.removeElem = function() {
            this.element.parentNode.removeChild(this.element), this.css({
                display: ""
            }), this.emitEvent("remove", [this])
        }, l.remove = function() {
            return s && parseFloat(this.layout.options.transitionDuration) ? (this.once("transitionEnd", function() {
                this.removeElem()
            }), void this.hide()) : void this.removeElem()
        }, l.reveal = function() {
            delete this.isHidden, this.css({
                display: ""
            });
            var t = this.layout.options,
                e = {};
            e[this.getHideRevealTransitionEndProperty("visibleStyle")] = this.onRevealTransitionEnd, this.transition({
                from: t.hiddenStyle,
                to: t.visibleStyle,
                isCleaning: !0,
                onTransitionEnd: e
            })
        }, l.onRevealTransitionEnd = function() {
            this.isHidden || this.emitEvent("reveal")
        }, l.getHideRevealTransitionEndProperty = function(t) {
            var e = this.layout.options[t];
            if (e.opacity) return "opacity";
            for (var i in e) return i
        }, l.hide = function() {
            this.isHidden = !0, this.css({
                display: ""
            });
            var t = this.layout.options,
                e = {};
            e[this.getHideRevealTransitionEndProperty("hiddenStyle")] = this.onHideTransitionEnd, this.transition({
                from: t.visibleStyle,
                to: t.hiddenStyle,
                isCleaning: !0,
                onTransitionEnd: e
            })
        }, l.onHideTransitionEnd = function() {
            this.isHidden && (this.css({
                display: "none"
            }), this.emitEvent("hide"))
        }, l.destroy = function() {
            this.css({
                position: "",
                left: "",
                right: "",
                top: "",
                bottom: "",
                transition: "",
                transform: ""
            })
        }, i
    }),
    function(s, o) {
        "use strict";
        "function" == typeof define && define.amd ? define("outlayer/outlayer", ["ev-emitter/ev-emitter", "get-size/get-size", "fizzy-ui-utils/utils", "./item"], function(t, e, i, n) {
            return o(s, t, e, i, n)
        }) : "object" == typeof module && module.exports ? module.exports = o(s, require("ev-emitter"), require("get-size"), require("fizzy-ui-utils"), require("./item")) : s.Outlayer = o(s, s.EvEmitter, s.getSize, s.fizzyUIUtils, s.Outlayer.Item)
    }(window, function(t, e, s, o, n) {
        "use strict";

        function r(t, e) {
            var i = o.getQueryElement(t);
            if (i) {
                this.element = i, c && (this.$element = c(this.element)), this.options = o.extend({}, this.constructor.defaults), this.option(e);
                var n = ++d;
                this.element.outlayerGUID = n, (u[n] = this)._create(), this._getOption("initLayout") && this.layout()
            } else l && l.error("Bad element for " + this.constructor.namespace + ": " + (i || t))
        }

        function a(t) {
            function e() {
                t.apply(this, arguments)
            }
            return (e.prototype = Object.create(t.prototype)).constructor = e
        }
        var l = t.console,
            c = t.jQuery,
            i = function() {},
            d = 0,
            u = {};
        r.namespace = "outlayer", r.Item = n, r.defaults = {
            containerStyle: {
                position: "relative"
            },
            initLayout: !0,
            originLeft: !0,
            originTop: !0,
            resize: !0,
            resizeContainer: !0,
            transitionDuration: "0.4s",
            hiddenStyle: {
                opacity: 0,
                transform: "scale(0.001)"
            },
            visibleStyle: {
                opacity: 1,
                transform: "scale(1)"
            }
        };
        var h = r.prototype;
        o.extend(h, e.prototype), h.option = function(t) {
            o.extend(this.options, t)
        }, h._getOption = function(t) {
            var e = this.constructor.compatOptions[t];
            return e && void 0 !== this.options[e] ? this.options[e] : this.options[t]
        }, r.compatOptions = {
            initLayout: "isInitLayout",
            horizontal: "isHorizontal",
            layoutInstant: "isLayoutInstant",
            originLeft: "isOriginLeft",
            originTop: "isOriginTop",
            resize: "isResizeBound",
            resizeContainer: "isResizingContainer"
        }, h._create = function() {
            this.reloadItems(), this.stamps = [], this.stamp(this.options.stamp), o.extend(this.element.style, this.options.containerStyle), this._getOption("resize") && this.bindResize()
        }, h.reloadItems = function() {
            this.items = this._itemize(this.element.children)
        }, h._itemize = function(t) {
            for (var e = this._filterFindItemElements(t), i = this.constructor.Item, n = [], s = 0; s < e.length; s++) {
                var o = new i(e[s], this);
                n.push(o)
            }
            return n
        }, h._filterFindItemElements = function(t) {
            return o.filterFindElements(t, this.options.itemSelector)
        }, h.getItemElements = function() {
            return this.items.map(function(t) {
                return t.element
            })
        }, h.layout = function() {
            this._resetLayout(), this._manageStamps();
            var t = this._getOption("layoutInstant"),
                e = void 0 !== t ? t : !this._isLayoutInited;
            this.layoutItems(this.items, e), this._isLayoutInited = !0
        }, h._init = h.layout, h._resetLayout = function() {
            this.getSize()
        }, h.getSize = function() {
            this.size = s(this.element)
        }, h._getMeasurement = function(t, e) {
            var i, n = this.options[t];
            n ? ("string" == typeof n ? i = this.element.querySelector(n) : n instanceof HTMLElement && (i = n), this[t] = i ? s(i)[e] : n) : this[t] = 0
        }, h.layoutItems = function(t, e) {
            t = this._getItemsForLayout(t), this._layoutItems(t, e), this._postLayout()
        }, h._getItemsForLayout = function(t) {
            return t.filter(function(t) {
                return !t.isIgnored
            })
        }, h._layoutItems = function(t, i) {
            if (this._emitCompleteOnItems("layout", t), t && t.length) {
                var n = [];
                t.forEach(function(t) {
                    var e = this._getItemLayoutPosition(t);
                    e.item = t, e.isInstant = i || t.isLayoutInstant, n.push(e)
                }, this), this._processLayoutQueue(n)
            }
        }, h._getItemLayoutPosition = function() {
            return {
                x: 0,
                y: 0
            }
        }, h._processLayoutQueue = function(t) {
            this.updateStagger(), t.forEach(function(t, e) {
                this._positionItem(t.item, t.x, t.y, t.isInstant, e)
            }, this)
        }, h.updateStagger = function() {
            var t = this.options.stagger;
            return null == t ? void(this.stagger = 0) : (this.stagger = function(t) {
                if ("number" == typeof t) return t;
                var e = t.match(/(^\d*\.?\d*)(\w*)/),
                    i = e && e[1],
                    n = e && e[2];
                return i.length ? (i = parseFloat(i)) * (p[n] || 1) : 0
            }(t), this.stagger)
        }, h._positionItem = function(t, e, i, n, s) {
            n ? t.goTo(e, i) : (t.stagger(s * this.stagger), t.moveTo(e, i))
        }, h._postLayout = function() {
            this.resizeContainer()
        }, h.resizeContainer = function() {
            if (this._getOption("resizeContainer")) {
                var t = this._getContainerSize();
                t && (this._setContainerMeasure(t.width, !0), this._setContainerMeasure(t.height, !1))
            }
        }, h._getContainerSize = i, h._setContainerMeasure = function(t, e) {
            if (void 0 !== t) {
                var i = this.size;
                i.isBorderBox && (t += e ? i.paddingLeft + i.paddingRight + i.borderLeftWidth + i.borderRightWidth : i.paddingBottom + i.paddingTop + i.borderTopWidth + i.borderBottomWidth), t = Math.max(t, 0), this.element.style[e ? "width" : "height"] = t + "px"
            }
        }, h._emitCompleteOnItems = function(e, t) {
            function i() {
                s.dispatchEvent(e + "Complete", null, [t])
            }

            function n() {
                ++r == o && i()
            }
            var s = this,
                o = t.length;
            if (t && o) {
                var r = 0;
                t.forEach(function(t) {
                    t.once(e, n)
                })
            } else i()
        }, h.dispatchEvent = function(t, e, i) {
            var n = e ? [e].concat(i) : i;
            if (this.emitEvent(t, n), c)
                if (this.$element = this.$element || c(this.element), e) {
                    var s = c.Event(e);
                    s.type = t, this.$element.trigger(s, i)
                } else this.$element.trigger(t, i)
        }, h.ignore = function(t) {
            var e = this.getItem(t);
            e && (e.isIgnored = !0)
        }, h.unignore = function(t) {
            var e = this.getItem(t);
            e && delete e.isIgnored
        }, h.stamp = function(t) {
            (t = this._find(t)) && (this.stamps = this.stamps.concat(t), t.forEach(this.ignore, this))
        }, h.unstamp = function(t) {
            (t = this._find(t)) && t.forEach(function(t) {
                o.removeFrom(this.stamps, t), this.unignore(t)
            }, this)
        }, h._find = function(t) {
            return t ? ("string" == typeof t && (t = this.element.querySelectorAll(t)), t = o.makeArray(t)) : void 0
        }, h._manageStamps = function() {
            this.stamps && this.stamps.length && (this._getBoundingRect(), this.stamps.forEach(this._manageStamp, this))
        }, h._getBoundingRect = function() {
            var t = this.element.getBoundingClientRect(),
                e = this.size;
            this._boundingRect = {
                left: t.left + e.paddingLeft + e.borderLeftWidth,
                top: t.top + e.paddingTop + e.borderTopWidth,
                right: t.right - (e.paddingRight + e.borderRightWidth),
                bottom: t.bottom - (e.paddingBottom + e.borderBottomWidth)
            }
        }, h._manageStamp = i, h._getElementOffset = function(t) {
            var e = t.getBoundingClientRect(),
                i = this._boundingRect,
                n = s(t);
            return {
                left: e.left - i.left - n.marginLeft,
                top: e.top - i.top - n.marginTop,
                right: i.right - e.right - n.marginRight,
                bottom: i.bottom - e.bottom - n.marginBottom
            }
        }, h.handleEvent = o.handleEvent, h.bindResize = function() {
            t.addEventListener("resize", this), this.isResizeBound = !0
        }, h.unbindResize = function() {
            t.removeEventListener("resize", this), this.isResizeBound = !1
        }, h.onresize = function() {
            this.resize()
        }, o.debounceMethod(r, "onresize", 100), h.resize = function() {
            this.isResizeBound && this.needsResizeLayout() && this.layout()
        }, h.needsResizeLayout = function() {
            var t = s(this.element);
            return this.size && t && t.innerWidth !== this.size.innerWidth
        }, h.addItems = function(t) {
            var e = this._itemize(t);
            return e.length && (this.items = this.items.concat(e)), e
        }, h.appended = function(t) {
            var e = this.addItems(t);
            e.length && (this.layoutItems(e, !0), this.reveal(e))
        }, h.prepended = function(t) {
            var e = this._itemize(t);
            if (e.length) {
                var i = this.items.slice(0);
                this.items = e.concat(i), this._resetLayout(), this._manageStamps(), this.layoutItems(e, !0), this.reveal(e), this.layoutItems(i)
            }
        }, h.reveal = function(t) {
            if (this._emitCompleteOnItems("reveal", t), t && t.length) {
                var i = this.updateStagger();
                t.forEach(function(t, e) {
                    t.stagger(e * i), t.reveal()
                })
            }
        }, h.hide = function(t) {
            if (this._emitCompleteOnItems("hide", t), t && t.length) {
                var i = this.updateStagger();
                t.forEach(function(t, e) {
                    t.stagger(e * i), t.hide()
                })
            }
        }, h.revealItemElements = function(t) {
            var e = this.getItems(t);
            this.reveal(e)
        }, h.hideItemElements = function(t) {
            var e = this.getItems(t);
            this.hide(e)
        }, h.getItem = function(t) {
            for (var e = 0; e < this.items.length; e++) {
                var i = this.items[e];
                if (i.element == t) return i
            }
        }, h.getItems = function(t) {
            t = o.makeArray(t);
            var i = [];
            return t.forEach(function(t) {
                var e = this.getItem(t);
                e && i.push(e)
            }, this), i
        }, h.remove = function(t) {
            var e = this.getItems(t);
            this._emitCompleteOnItems("remove", e), e && e.length && e.forEach(function(t) {
                t.remove(), o.removeFrom(this.items, t)
            }, this)
        }, h.destroy = function() {
            var t = this.element.style;
            t.height = "", t.position = "", t.width = "", this.items.forEach(function(t) {
                t.destroy()
            }), this.unbindResize();
            var e = this.element.outlayerGUID;
            delete u[e], delete this.element.outlayerGUID, c && c.removeData(this.element, this.constructor.namespace)
        }, r.data = function(t) {
            var e = (t = o.getQueryElement(t)) && t.outlayerGUID;
            return e && u[e]
        }, r.create = function(t, e) {
            var i = a(r);
            return i.defaults = o.extend({}, r.defaults), o.extend(i.defaults, e), i.compatOptions = o.extend({}, r.compatOptions), i.namespace = t, i.data = r.data, i.Item = a(n), o.htmlInit(i, t), c && c.bridget && c.bridget(t, i), i
        };
        var p = {
            ms: 1,
            s: 1e3
        };
        return r.Item = n, r
    }),
    function(t, e) {
        "function" == typeof define && define.amd ? define("packery/js/rect", e) : "object" == typeof module && module.exports ? module.exports = e() : (t.Packery = t.Packery || {}, t.Packery.Rect = e())
    }(window, function() {
        "use strict";

        function a(t) {
            for (var e in a.defaults) this[e] = a.defaults[e];
            for (e in t) this[e] = t[e]
        }
        a.defaults = {
            x: 0,
            y: 0,
            width: 0,
            height: 0
        };
        var t = a.prototype;
        return t.contains = function(t) {
            var e = t.width || 0,
                i = t.height || 0;
            return this.x <= t.x && this.y <= t.y && this.x + this.width >= t.x + e && this.y + this.height >= t.y + i
        }, t.overlaps = function(t) {
            var e = this.x + this.width,
                i = this.y + this.height,
                n = t.x + t.width,
                s = t.y + t.height;
            return this.x < n && e > t.x && this.y < s && i > t.y
        }, t.getMaximalFreeRects = function(t) {
            if (!this.overlaps(t)) return !1;
            var e, i = [],
                n = this.x + this.width,
                s = this.y + this.height,
                o = t.x + t.width,
                r = t.y + t.height;
            return this.y < t.y && (e = new a({
                x: this.x,
                y: this.y,
                width: this.width,
                height: t.y - this.y
            }), i.push(e)), o < n && (e = new a({
                x: o,
                y: this.y,
                width: n - o,
                height: this.height
            }), i.push(e)), r < s && (e = new a({
                x: this.x,
                y: r,
                width: this.width,
                height: s - r
            }), i.push(e)), this.x < t.x && (e = new a({
                x: this.x,
                y: this.y,
                width: t.x - this.x,
                height: this.height
            }), i.push(e)), i
        }, t.canFit = function(t) {
            return this.width >= t.width && this.height >= t.height
        }, a
    }),
    function(t, e) {
        if ("function" == typeof define && define.amd) define("packery/js/packer", ["./rect"], e);
        else if ("object" == typeof module && module.exports) module.exports = e(require("./rect"));
        else {
            var i = t.Packery = t.Packery || {};
            i.Packer = e(i.Rect)
        }
    }(window, function(e) {
        "use strict";

        function t(t, e, i) {
            this.width = t || 0, this.height = e || 0, this.sortDirection = i || "downwardLeftToRight", this.reset()
        }
        var i = t.prototype;
        i.reset = function() {
            this.spaces = [];
            var t = new e({
                x: 0,
                y: 0,
                width: this.width,
                height: this.height
            });
            this.spaces.push(t), this.sorter = n[this.sortDirection] || n.downwardLeftToRight
        }, i.pack = function(t) {
            for (var e = 0; e < this.spaces.length; e++) {
                var i = this.spaces[e];
                if (i.canFit(t)) {
                    this.placeInSpace(t, i);
                    break
                }
            }
        }, i.columnPack = function(t) {
            for (var e = 0; e < this.spaces.length; e++) {
                var i = this.spaces[e];
                if (i.x <= t.x && i.x + i.width >= t.x + t.width && i.height >= t.height - .01) {
                    t.y = i.y, this.placed(t);
                    break
                }
            }
        }, i.rowPack = function(t) {
            for (var e = 0; e < this.spaces.length; e++) {
                var i = this.spaces[e];
                if (i.y <= t.y && i.y + i.height >= t.y + t.height && i.width >= t.width - .01) {
                    t.x = i.x, this.placed(t);
                    break
                }
            }
        }, i.placeInSpace = function(t, e) {
            t.x = e.x, t.y = e.y, this.placed(t)
        }, i.placed = function(t) {
            for (var e = [], i = 0; i < this.spaces.length; i++) {
                var n = this.spaces[i],
                    s = n.getMaximalFreeRects(t);
                s ? e.push.apply(e, s) : e.push(n)
            }
            this.spaces = e, this.mergeSortSpaces()
        }, i.mergeSortSpaces = function() {
            t.mergeRects(this.spaces), this.spaces.sort(this.sorter)
        }, i.addSpace = function(t) {
            this.spaces.push(t), this.mergeSortSpaces()
        }, t.mergeRects = function(t) {
            var e = 0,
                i = t[e];
            t: for (; i;) {
                for (var n = 0, s = t[e + n]; s;) {
                    if (s == i) n++;
                    else {
                        if (s.contains(i)) {
                            t.splice(e, 1), i = t[e];
                            continue t
                        }
                        i.contains(s) ? t.splice(e + n, 1) : n++
                    }
                    s = t[e + n]
                }
                i = t[++e]
            }
            return t
        };
        var n = {
            downwardLeftToRight: function(t, e) {
                return t.y - e.y || t.x - e.x
            },
            rightwardTopToBottom: function(t, e) {
                return t.x - e.x || t.y - e.y
            }
        };
        return t
    }),
    function(t, e) {
        "function" == typeof define && define.amd ? define("packery/js/item", ["outlayer/outlayer", "./rect"], e) : "object" == typeof module && module.exports ? module.exports = e(require("outlayer"), require("./rect")) : t.Packery.Item = e(t.Outlayer, t.Packery.Rect)
    }(window, function(t, e) {
        "use strict";
        var i = "string" == typeof document.documentElement.style.transform ? "transform" : "WebkitTransform",
            n = function() {
                t.Item.apply(this, arguments)
            },
            s = n.prototype = Object.create(t.Item.prototype),
            o = s._create;
        s._create = function() {
            o.call(this), this.rect = new e
        };
        var r = s.moveTo;
        return s.moveTo = function(t, e) {
            var i = Math.abs(this.position.x - t),
                n = Math.abs(this.position.y - e);
            return this.layout.dragItemCount && !this.isPlacing && !this.isTransitioning && i < 1 && n < 1 ? void this.goTo(t, e) : void r.apply(this, arguments)
        }, s.enablePlacing = function() {
            this.removeTransitionStyles(), this.isTransitioning && i && (this.element.style[i] = "none"), this.isTransitioning = !1, this.getSize(), this.layout._setRectSize(this.element, this.rect), this.isPlacing = !0
        }, s.disablePlacing = function() {
            this.isPlacing = !1
        }, s.removeElem = function() {
            var t = this.element.parentNode;
            t && t.removeChild(this.element), this.layout.packer.addSpace(this.rect), this.emitEvent("remove", [this])
        }, s.showDropPlaceholder = function() {
            var t = this.dropPlaceholder;
            t || ((t = this.dropPlaceholder = document.createElement("div")).className = "packery-drop-placeholder", t.style.position = "absolute"), t.style.width = this.size.width + "px", t.style.height = this.size.height + "px", this.positionDropPlaceholder(), this.layout.element.appendChild(t)
        }, s.positionDropPlaceholder = function() {
            this.dropPlaceholder.style[i] = "translate(" + this.rect.x + "px, " + this.rect.y + "px)"
        }, s.hideDropPlaceholder = function() {
            var t = this.dropPlaceholder.parentNode;
            t && t.removeChild(this.dropPlaceholder)
        }, n
    }),
    function(t, e) {
        "function" == typeof define && define.amd ? define(["get-size/get-size", "outlayer/outlayer", "packery/js/rect", "packery/js/packer", "packery/js/item"], e) : "object" == typeof module && module.exports ? module.exports = e(require("get-size"), require("outlayer"), require("./rect"), require("./packer"), require("./item")) : t.Packery = e(t.getSize, t.Outlayer, t.Packery.Rect, t.Packery.Packer, t.Packery.Item)
    }(window, function(d, t, m, e, i) {
        "use strict";

        function n(t, e) {
            return t.position.y - e.position.y || t.position.x - e.position.x
        }

        function s(t, e) {
            return t.position.x - e.position.x || t.position.y - e.position.y
        }
        m.prototype.canFit = function(t) {
            return this.width >= t.width - 1 && this.height >= t.height - 1
        };
        var o = t.create("packery");
        o.Item = i;
        var r = o.prototype;
        r._create = function() {
            t.prototype._create.call(this), this.packer = new e, this.shiftPacker = new e, this.isEnabled = !0, this.dragItemCount = 0;
            var i = this;
            this.handleDraggabilly = {
                dragStart: function() {
                    i.itemDragStart(this.element)
                },
                dragMove: function() {
                    i.itemDragMove(this.element, this.position.x, this.position.y)
                },
                dragEnd: function() {
                    i.itemDragEnd(this.element)
                }
            }, this.handleUIDraggable = {
                start: function(t, e) {
                    e && i.itemDragStart(t.currentTarget)
                },
                drag: function(t, e) {
                    e && i.itemDragMove(t.currentTarget, e.position.left, e.position.top)
                },
                stop: function(t, e) {
                    e && i.itemDragEnd(t.currentTarget)
                }
            }
        }, r._resetLayout = function() {
            var t, e, i;
            this.getSize(), this._getMeasurements(), this._getOption("horizontal") ? (t = 1 / 0, e = this.size.innerHeight + this.gutter, i = "rightwardTopToBottom") : (t = this.size.innerWidth + this.gutter, e = 1 / 0, i = "downwardLeftToRight"), this.packer.width = this.shiftPacker.width = t, this.packer.height = this.shiftPacker.height = e, this.packer.sortDirection = this.shiftPacker.sortDirection = i, this.packer.reset(), this.maxY = 0, this.maxX = 0
        }, r._getMeasurements = function() {
            this._getMeasurement("columnWidth", "width"), this._getMeasurement("rowHeight", "height"), this._getMeasurement("gutter", "width")
        }, r._getItemLayoutPosition = function(t) {
            if (this._setRectSize(t.element, t.rect), this.isShifting || 0 < this.dragItemCount) {
                var e = this._getPackMethod();
                this.packer[e](t.rect)
            } else this.packer.pack(t.rect);
            return this._setMaxXY(t.rect), t.rect
        }, r.shiftLayout = function() {
            this.isShifting = !0, this.layout(), delete this.isShifting
        }, r._getPackMethod = function() {
            return this._getOption("horizontal") ? "rowPack" : "columnPack"
        }, r._setMaxXY = function(t) {
            this.maxX = Math.max(t.x + t.width, this.maxX), this.maxY = Math.max(t.y + t.height, this.maxY)
        }, r._setRectSize = function(t, e) {
            var i = d(t),
                n = i.outerWidth,
                s = i.outerHeight;
            (n || s) && (n = this._applyGridGutter(n, this.columnWidth), s = this._applyGridGutter(s, this.rowHeight)), e.width = Math.min(n, this.packer.width), e.height = Math.min(s, this.packer.height)
        }, r._applyGridGutter = function(t, e) {
            if (!e) return t + this.gutter;
            var i = t % (e += this.gutter);
            return Math[i && i < 1 ? "round" : "ceil"](t / e) * e
        }, r._getContainerSize = function() {
            return this._getOption("horizontal") ? {
                width: this.maxX - this.gutter
            } : {
                height: this.maxY - this.gutter
            }
        }, r._manageStamp = function(t) {
            var e, i = this.getItem(t);
            if (i && i.isPlacing) e = i.rect;
            else {
                var n = this._getElementOffset(t);
                e = new m({
                    x: this._getOption("originLeft") ? n.left : n.right,
                    y: this._getOption("originTop") ? n.top : n.bottom
                })
            }
            this._setRectSize(t, e), this.packer.placed(e), this._setMaxXY(e)
        }, r.sortItemsByPosition = function() {
            var t = this._getOption("horizontal") ? s : n;
            this.items.sort(t)
        }, r.fit = function(t, e, i) {
            var n = this.getItem(t);
            n && (this.stamp(n.element), n.enablePlacing(), this.updateShiftTargets(n), e = void 0 === e ? n.rect.x : e, i = void 0 === i ? n.rect.y : i, this.shift(n, e, i), this._bindFitEvents(n), n.moveTo(n.rect.x, n.rect.y), this.shiftLayout(), this.unstamp(n.element), this.sortItemsByPosition(), n.disablePlacing())
        }, r._bindFitEvents = function(t) {
            function e() {
                2 == ++n && i.dispatchEvent("fitComplete", null, [t])
            }
            var i = this,
                n = 0;
            t.once("layout", e), this.once("layoutComplete", e)
        }, r.resize = function() {
            this.isResizeBound && this.needsResizeLayout() && (this.options.shiftPercentResize ? this.resizeShiftPercentLayout() : this.layout())
        }, r.needsResizeLayout = function() {
            var t = d(this.element),
                e = this._getOption("horizontal") ? "innerHeight" : "innerWidth";
            return t[e] != this.size[e]
        }, r.resizeShiftPercentLayout = function() {
            var t = this._getItemsForLayout(this.items),
                e = this._getOption("horizontal"),
                i = e ? "y" : "x",
                n = e ? "height" : "width",
                s = e ? "rowHeight" : "columnWidth",
                o = e ? "innerHeight" : "innerWidth",
                r = this[s];
            if (r = r && r + this.gutter) {
                this._getMeasurements();
                var a = this[s] + this.gutter;
                t.forEach(function(t) {
                    var e = Math.round(t.rect[i] / r);
                    t.rect[i] = e * a
                })
            } else {
                var l = d(this.element)[o] + this.gutter,
                    c = this.packer[n];
                t.forEach(function(t) {
                    t.rect[i] = t.rect[i] / c * l
                })
            }
            this.shiftLayout()
        }, r.itemDragStart = function(t) {
            if (this.isEnabled) {
                this.stamp(t);
                var e = this.getItem(t);
                e && (e.enablePlacing(), e.showDropPlaceholder(), this.dragItemCount++, this.updateShiftTargets(e))
            }
        }, r.updateShiftTargets = function(t) {
            this.shiftPacker.reset(), this._getBoundingRect();
            var s = this._getOption("originLeft"),
                o = this._getOption("originTop");
            this.stamps.forEach(function(t) {
                var e = this.getItem(t);
                if (!e || !e.isPlacing) {
                    var i = this._getElementOffset(t),
                        n = new m({
                            x: s ? i.left : i.right,
                            y: o ? i.top : i.bottom
                        });
                    this._setRectSize(t, n), this.shiftPacker.placed(n)
                }
            }, this);
            var l = this._getOption("horizontal"),
                e = l ? "rowHeight" : "columnWidth",
                c = l ? "height" : "width";
            this.shiftTargetKeys = [], this.shiftTargets = [];
            var d, u = this[e];
            if (u = u && u + this.gutter) {
                var i = Math.ceil(t.rect[c] / u),
                    n = Math.floor((this.shiftPacker[c] + this.gutter) / u);
                d = (n - i) * u;
                for (var r = 0; r < n; r++) {
                    var a = l ? 0 : r * u,
                        h = l ? r * u : 0;
                    this._addShiftTarget(a, h, d)
                }
            } else d = this.shiftPacker[c] + this.gutter - t.rect[c], this._addShiftTarget(0, 0, d);
            var p = this._getItemsForLayout(this.items),
                f = this._getPackMethod();
            p.forEach(function(t) {
                var e = t.rect;
                this._setRectSize(t.element, e), this.shiftPacker[f](e), this._addShiftTarget(e.x, e.y, d);
                var i = l ? e.x + e.width : e.x,
                    n = l ? e.y : e.y + e.height;
                if (this._addShiftTarget(i, n, d), u)
                    for (var s = Math.round(e[c] / u), o = 1; o < s; o++) {
                        var r = l ? i : e.x + u * o,
                            a = l ? e.y + u * o : n;
                        this._addShiftTarget(r, a, d)
                    }
            }, this)
        }, r._addShiftTarget = function(t, e, i) {
            var n = this._getOption("horizontal") ? e : t;
            if (!(0 !== n && i < n)) {
                var s = t + "," + e; - 1 != this.shiftTargetKeys.indexOf(s) || (this.shiftTargetKeys.push(s), this.shiftTargets.push({
                    x: t,
                    y: e
                }))
            }
        }, r.shift = function(t, e, i) {
            var r, a = 1 / 0,
                l = {
                    x: e,
                    y: i
                };
            this.shiftTargets.forEach(function(t) {
                var e, i, n, s, o = (n = (i = l).x - (e = t).x, s = i.y - e.y, Math.sqrt(n * n + s * s));
                o < a && (r = t, a = o)
            }), t.rect.x = r.x, t.rect.y = r.y
        };
        r.itemDragMove = function(t, e, i) {
            function n() {
                o.shift(s, e, i), s.positionDropPlaceholder(), o.layout()
            }
            var s = this.isEnabled && this.getItem(t);
            if (s) {
                e -= this.size.paddingLeft, i -= this.size.paddingTop;
                var o = this,
                    r = new Date;
                this._itemDragTime && r - this._itemDragTime < 120 ? (clearTimeout(this.dragTimeout), this.dragTimeout = setTimeout(n, 120)) : (n(), this._itemDragTime = r)
            }
        }, r.itemDragEnd = function(t) {
            function e() {
                2 == ++n && (i.element.classList.remove("is-positioning-post-drag"), i.hideDropPlaceholder(), s.dispatchEvent("dragItemPositioned", null, [i]))
            }
            var i = this.isEnabled && this.getItem(t);
            if (i) {
                clearTimeout(this.dragTimeout), i.element.classList.add("is-positioning-post-drag");
                var n = 0,
                    s = this;
                i.once("layout", e), this.once("layoutComplete", e), i.moveTo(i.rect.x, i.rect.y), this.layout(), this.dragItemCount = Math.max(0, this.dragItemCount - 1), this.sortItemsByPosition(), i.disablePlacing(), this.unstamp(i.element)
            }
        }, r.bindDraggabillyEvents = function(t) {
            this._bindDraggabillyEvents(t, "on")
        }, r.unbindDraggabillyEvents = function(t) {
            this._bindDraggabillyEvents(t, "off")
        }, r._bindDraggabillyEvents = function(t, e) {
            var i = this.handleDraggabilly;
            t[e]("dragStart", i.dragStart), t[e]("dragMove", i.dragMove), t[e]("dragEnd", i.dragEnd)
        }, r.bindUIDraggableEvents = function(t) {
            this._bindUIDraggableEvents(t, "on")
        }, r.unbindUIDraggableEvents = function(t) {
            this._bindUIDraggableEvents(t, "off")
        }, r._bindUIDraggableEvents = function(t, e) {
            var i = this.handleUIDraggable;
            t[e]("dragstart", i.start)[e]("drag", i.drag)[e]("dragstop", i.stop)
        };
        var a = r.destroy;
        return r.destroy = function() {
            a.apply(this, arguments), this.isEnabled = !1
        }, o.Rect = m, o.Packer = e, o
    }),
    function($) {
        $.fn.marquee = function(C) {
            return this.each(function() {
                var i, n, s = $.extend({}, $.fn.marquee.defaults, C),
                    o = $(this),
                    r = 3,
                    t = "animation-play-state",
                    a = !1,
                    l = function(t, e, i) {
                        for (var n = ["webkit", "moz", "MS", "o", ""], s = 0; s < n.length; s++) n[s] || (e = e.toLowerCase()), t.addEventListener(n[s] + e, i, !1)
                    },
                    e = {
                        pause: function() {
                            a && s.allowCss3Support ? i.css(t, "paused") : $.fn.pause && i.pause(), o.data("runningStatus", "paused"), o.trigger("paused")
                        },
                        resume: function() {
                            a && s.allowCss3Support ? i.css(t, "running") : $.fn.resume && i.resume(), o.data("runningStatus", "resumed"), o.trigger("resumed")
                        },
                        toggle: function() {
                            e["resumed" == o.data("runningStatus") ? "pause" : "resume"]()
                        },
                        destroy: function() {
                            clearTimeout(o.timer), o.find("*").addBack().unbind(), o.html(o.find(".js-marquee:first").html())
                        }
                    };
                if ("string" == typeof C) $.isFunction(e[C]) && (i || (i = o.find(".js-marquee-wrapper")), !0 === o.data("css3AnimationIsSupported") && (a = !0), e[C]());
                else {
                    var c;
                    $.each(s, function(t, e) {
                        if (void 0 !== (c = o.attr("data-" + t))) {
                            switch (c) {
                                case "true":
                                    c = !0;
                                    break;
                                case "false":
                                    c = !1
                            }
                            s[t] = c
                        }
                    }), s.speed && (s.duration = parseInt(o.width(), 10) / s.speed * 1e3);
                    var d = "up" == s.direction || "down" == s.direction;
                    s.gap = s.duplicated ? parseInt(s.gap) : 0, o.wrapInner('<div class="js-marquee"></div>');
                    var u = o.find(".js-marquee").css({
                        "margin-right": s.gap,
                        float: "left"
                    });
                    if (s.duplicated && u.clone(!0).appendTo(o), o.wrapInner('<div style="width:100000px" class="js-marquee-wrapper"></div>'), i = o.find(".js-marquee-wrapper"), d) {
                        var h = o.height();
                        i.removeAttr("style"), o.height(h), o.find(".js-marquee").css({
                            float: "none",
                            "margin-bottom": s.gap,
                            "margin-right": 0
                        }), s.duplicated && o.find(".js-marquee:last").css({
                            "margin-bottom": 0
                        });
                        var p = o.find(".js-marquee:first").height() + s.gap;
                        s.startVisible && !s.duplicated ? (s._completeDuration = (parseInt(p, 10) + parseInt(h, 10)) / parseInt(h, 10) * s.duration, s.duration *= parseInt(p, 10) / parseInt(h, 10)) : s.duration *= (parseInt(p, 10) + parseInt(h, 10)) / parseInt(h, 10)
                    } else {
                        var f = o.find(".js-marquee:first").width() + s.gap,
                            m = o.width();
                        s.startVisible && !s.duplicated ? (s._completeDuration = (parseInt(f, 10) + parseInt(m, 10)) / parseInt(m, 10) * s.duration, s.duration *= parseInt(f, 10) / parseInt(m, 10)) : s.duration *= (parseInt(f, 10) + parseInt(m, 10)) / parseInt(m, 10)
                    }
                    if (s.duplicated && (s.duration /= 2), s.allowCss3Support) {
                        u = document.body || document.createElement("div");
                        var g = "marqueeAnimation-" + Math.floor(1e7 * Math.random()),
                            v = ["Webkit", "Moz", "O", "ms", "Khtml"],
                            y = "animation",
                            w = "",
                            b = "";
                        if (u.style.animation && (b = "@keyframes " + g + " ", a = !0), !1 === a)
                            for (var x = 0; x < v.length; x++)
                                if (void 0 !== u.style[v[x] + "AnimationName"]) {
                                    u = "-" + v[x].toLowerCase() + "-", y = u + y, t = u + t, b = "@" + u + "keyframes " + g + " ", a = !0;
                                    break
                                } a && (w = g + " " + s.duration / 1e3 + "s " + s.delayBeforeStart / 1e3 + "s infinite " + s.css3easing, o.data("css3AnimationIsSupported", !0))
                    }
                    var k = function() {
                            i.css("transform", "translateY(" + ("up" == s.direction ? h + "px" : "-" + p + "px") + ")")
                        },
                        T = function() {
                            i.css("transform", "translateX(" + ("left" == s.direction ? m + "px" : "-" + f + "px") + ")")
                        };
                    s.duplicated ? (d ? s.startVisible ? i.css("transform", "translateY(0)") : i.css("transform", "translateY(" + ("up" == s.direction ? h + "px" : "-" + (2 * p - s.gap) + "px") + ")") : s.startVisible ? i.css("transform", "translateX(0)") : i.css("transform", "translateX(" + ("left" == s.direction ? m + "px" : "-" + (2 * f - s.gap) + "px") + ")"), s.startVisible || (r = 1)) : s.startVisible ? r = 2 : d ? k() : T();
                    var S = function() {
                        if (s.duplicated && (1 === r ? (s._originalDuration = s.duration, s.duration = d ? "up" == s.direction ? s.duration + h / (p / s.duration) : 2 * s.duration : "left" == s.direction ? s.duration + m / (f / s.duration) : 2 * s.duration, w && (w = g + " " + s.duration / 1e3 + "s " + s.delayBeforeStart / 1e3 + "s " + s.css3easing), r++) : 2 === r && (s.duration = s._originalDuration, w && (g += "0", b = $.trim(b) + "0 ", w = g + " " + s.duration / 1e3 + "s 0s infinite " + s.css3easing), r++)), d ? s.duplicated ? (2 < r && i.css("transform", "translateY(" + ("up" == s.direction ? 0 : "-" + p + "px") + ")"), n = {
                                transform: "translateY(" + ("up" == s.direction ? "-" + p + "px" : 0) + ")"
                            }) : s.startVisible ? 2 === r ? (w && (w = g + " " + s.duration / 1e3 + "s " + s.delayBeforeStart / 1e3 + "s " + s.css3easing), n = {
                                transform: "translateY(" + ("up" == s.direction ? "-" + p + "px" : h + "px") + ")"
                            }, r++) : 3 === r && (s.duration = s._completeDuration, w && (g += "0", b = $.trim(b) + "0 ", w = g + " " + s.duration / 1e3 + "s 0s infinite " + s.css3easing), k()) : (k(), n = {
                                transform: "translateY(" + ("up" == s.direction ? "-" + i.height() + "px" : h + "px") + ")"
                            }) : s.duplicated ? (2 < r && i.css("transform", "translateX(" + ("left" == s.direction ? 0 : "-" + f + "px") + ")"), n = {
                                transform: "translateX(" + ("left" == s.direction ? "-" + f + "px" : 0) + ")"
                            }) : s.startVisible ? 2 === r ? (w && (w = g + " " + s.duration / 1e3 + "s " + s.delayBeforeStart / 1e3 + "s " + s.css3easing), n = {
                                transform: "translateX(" + ("left" == s.direction ? "-" + f + "px" : m + "px") + ")"
                            }, r++) : 3 === r && (s.duration = s._completeDuration, w && (g += "0", b = $.trim(b) + "0 ", w = g + " " + s.duration / 1e3 + "s 0s infinite " + s.css3easing), T()) : (T(), n = {
                                transform: "translateX(" + ("left" == s.direction ? "-" + f + "px" : m + "px") + ")"
                            }), o.trigger("beforeStarting"), a) {
                            i.css(y, w);
                            var t = b + " { 100%  " + function(t) {
                                    var e, i = [];
                                    for (e in t) t.hasOwnProperty(e) && i.push(e + ":" + t[e]);
                                    return i.push(), "{" + i.join(",") + "}"
                                }(n) + "}",
                                e = i.find("style");
                            0 !== e.length ? e.filter(":last").html(t) : $("head").append("<style>" + t + "</style>"), l(i[0], "AnimationIteration", function() {
                                o.trigger("finished")
                            }), l(i[0], "AnimationEnd", function() {
                                S(), o.trigger("finished")
                            })
                        } else i.animate(n, s.duration, s.easing, function() {
                            o.trigger("finished"), s.pauseOnCycle ? o.timer = setTimeout(S, s.delayBeforeStart) : S()
                        });
                        o.data("runningStatus", "resumed")
                    };
                    o.bind("pause", e.pause), o.bind("resume", e.resume), s.pauseOnHover && (o.bind("mouseenter", e.pause), o.bind("mouseleave", e.resume)), a && s.allowCss3Support ? S() : o.timer = setTimeout(S, s.delayBeforeStart)
                }
            })
        }, $.fn.marquee.defaults = {
            allowCss3Support: !0,
            css3easing: "linear",
            easing: "linear",
            delayBeforeStart: 1e3,
            direction: "left",
            duplicated: !1,
            duration: 5e3,
            gap: 20,
            pauseOnCycle: !1,
            pauseOnHover: !1,
            startVisible: !1
        }
    }(jQuery),
    function(t, r, o) {
        var e, s, i, a, n, l, h, c, d, f, u, p, m, g, v;
        m = {
            classes: "",
            inline: p = !(u = "datepicker"),
            language: "ru",
            startDate: new Date,
            firstDay: "",
            weekends: [6, 0],
            dateFormat: "",
            altField: "",
            altFieldDateFormat: "@",
            toggleSelected: !0,
            keyboardNav: !0,
            position: "bottom left",
            offset: 12,
            view: "days",
            minView: "days",
            showOtherMonths: !0,
            selectOtherMonths: !0,
            moveToOtherMonthsOnSelect: !0,
            showOtherYears: !0,
            selectOtherYears: !0,
            moveToOtherYearsOnSelect: !0,
            minDate: "",
            maxDate: "",
            disableNavWhenOutOfRange: !0,
            multipleDates: !1,
            multipleDatesSeparator: ",",
            range: !1,
            todayButton: !1,
            clearButton: !1,
            showEvent: "focus",
            autoClose: !1,
            monthsField: "monthsShort",
            prevHtml: '<svg><path d="M 17,12 l -5,5 l 5,5"></path></svg>',
            nextHtml: '<svg><path d="M 14,12 l 5,5 l -5,5"></path></svg>',
            navTitles: {
                days: "MM, <i>yyyy</i>",
                months: "yyyy",
                years: "yyyy1 - yyyy2"
            },
            timepicker: !1,
            onlyTimepicker: !1,
            dateTimeSeparator: " ",
            timeFormat: "",
            minHours: 0,
            maxHours: 24,
            minMinutes: 0,
            maxMinutes: 59,
            hoursStep: 1,
            minutesStep: 1,
            onSelect: "",
            onShow: "",
            onHide: "",
            onChangeMonth: "",
            onChangeYear: "",
            onChangeDecade: "",
            onChangeView: "",
            onRenderCell: ""
        }, g = {
            ctrlRight: [17, 39],
            ctrlUp: [17, 38],
            ctrlLeft: [17, 37],
            ctrlDown: [17, 40],
            shiftRight: [16, 39],
            shiftUp: [16, 38],
            shiftLeft: [16, 37],
            shiftDown: [16, 40],
            altUp: [18, 38],
            altRight: [18, 39],
            altLeft: [18, 37],
            altDown: [18, 40],
            ctrlShiftUp: [16, 17, 38]
        }, (f = v = function(t, e) {
            this.el = t, this.$el = r(t), this.opts = r.extend(!0, {}, m, e, this.$el.data()), c == o && (c = r("body")), this.opts.startDate || (this.opts.startDate = new Date), "INPUT" == this.el.nodeName && (this.elIsInput = !0), this.opts.altField && (this.$altField = "string" == typeof this.opts.altField ? r(this.opts.altField) : this.opts.altField), this.inited = !1, this.visible = !1, this.silent = !1, this.currentDate = this.opts.startDate, this.currentView = this.opts.view, this._createShortCuts(), this.selectedDates = [], this.views = {}, this.keys = [], this.minRange = "", this.maxRange = "", this._prevOnSelectValue = "", this.init()
        }).prototype = {
            VERSION: "2.2.3",
            viewIndexes: ["days", "months", "years"],
            init: function() {
                p || this.opts.inline || !this.elIsInput || this._buildDatepickersContainer(), this._buildBaseHtml(), this._defineLocale(this.opts.language), this._syncWithMinMaxDates(), this.elIsInput && (this.opts.inline || (this._setPositionClasses(this.opts.position), this._bindEvents()), this.opts.keyboardNav && !this.opts.onlyTimepicker && this._bindKeyboardEvents(), this.$datepicker.on("mousedown", this._onMouseDownDatepicker.bind(this)), this.$datepicker.on("mouseup", this._onMouseUpDatepicker.bind(this))), this.opts.classes && this.$datepicker.addClass(this.opts.classes), this.opts.timepicker && (this.timepicker = new r.fn.datepicker.Timepicker(this, this.opts), this._bindTimepickerEvents()), this.opts.onlyTimepicker && this.$datepicker.addClass("-only-timepicker-"), this.views[this.currentView] = new r.fn.datepicker.Body(this, this.currentView, this.opts), this.views[this.currentView].show(), this.nav = new r.fn.datepicker.Navigation(this, this.opts), this.view = this.currentView, this.$el.on("clickCell.adp", this._onClickCell.bind(this)), this.$datepicker.on("mouseenter", ".datepicker--cell", this._onMouseEnterCell.bind(this)), this.$datepicker.on("mouseleave", ".datepicker--cell", this._onMouseLeaveCell.bind(this)), this.inited = !0
            },
            _createShortCuts: function() {
                this.minDate = this.opts.minDate ? this.opts.minDate : new Date(-86399999136e5), this.maxDate = this.opts.maxDate ? this.opts.maxDate : new Date(86399999136e5)
            },
            _bindEvents: function() {
                this.$el.on(this.opts.showEvent + ".adp", this._onShowEvent.bind(this)), this.$el.on("mouseup.adp", this._onMouseUpEl.bind(this)), this.$el.on("blur.adp", this._onBlur.bind(this)), this.$el.on("keyup.adp", this._onKeyUpGeneral.bind(this)), r(t).on("resize.adp", this._onResize.bind(this)), r("body").on("mouseup.adp", this._onMouseUpBody.bind(this))
            },
            _bindKeyboardEvents: function() {
                this.$el.on("keydown.adp", this._onKeyDown.bind(this)), this.$el.on("keyup.adp", this._onKeyUp.bind(this)), this.$el.on("hotKey.adp", this._onHotKey.bind(this))
            },
            _bindTimepickerEvents: function() {
                this.$el.on("timeChange.adp", this._onTimeChange.bind(this))
            },
            isWeekend: function(t) {
                return -1 !== this.opts.weekends.indexOf(t)
            },
            _defineLocale: function(t) {
                "string" == typeof t ? (this.loc = r.fn.datepicker.language[t], this.loc || (console.warn("Can't find language \"" + t + '" in Datepicker.language, will use "ru" instead'), this.loc = r.extend(!0, {}, r.fn.datepicker.language.ru)), this.loc = r.extend(!0, {}, r.fn.datepicker.language.ru, r.fn.datepicker.language[t])) : this.loc = r.extend(!0, {}, r.fn.datepicker.language.ru, t), this.opts.dateFormat && (this.loc.dateFormat = this.opts.dateFormat), this.opts.timeFormat && (this.loc.timeFormat = this.opts.timeFormat), "" !== this.opts.firstDay && (this.loc.firstDay = this.opts.firstDay), this.opts.timepicker && (this.loc.dateFormat = [this.loc.dateFormat, this.loc.timeFormat].join(this.opts.dateTimeSeparator)), this.opts.onlyTimepicker && (this.loc.dateFormat = this.loc.timeFormat);
                var e = this._getWordBoundaryRegExp;
                (this.loc.timeFormat.match(e("aa")) || this.loc.timeFormat.match(e("AA"))) && (this.ampm = !0)
            },
            _buildDatepickersContainer: function() {
                p = !0, c.append('<div class="datepickers-container" id="datepickers-container"></div>'), d = r("#datepickers-container")
            },
            _buildBaseHtml: function() {
                var t, e = r('<div class="datepicker-inline">');
                t = "INPUT" == this.el.nodeName ? this.opts.inline ? e.insertAfter(this.$el) : d : e.appendTo(this.$el), this.$datepicker = r('<div class="datepicker"><i class="datepicker--pointer"></i><nav class="datepicker--nav"></nav><div class="datepicker--content"></div></div>').appendTo(t), this.$content = r(".datepicker--content", this.$datepicker), this.$nav = r(".datepicker--nav", this.$datepicker)
            },
            _triggerOnChange: function() {
                if (!this.selectedDates.length) {
                    if ("" === this._prevOnSelectValue) return;
                    return this._prevOnSelectValue = "", this.opts.onSelect("", "", this)
                }
                var t, e = this.selectedDates,
                    i = f.getParsedDate(e[0]),
                    n = this,
                    s = new Date(i.year, i.month, i.date, i.hours, i.minutes);
                t = e.map(function(t) {
                    return n.formatDate(n.loc.dateFormat, t)
                }).join(this.opts.multipleDatesSeparator), (this.opts.multipleDates || this.opts.range) && (s = e.map(function(t) {
                    var e = f.getParsedDate(t);
                    return new Date(e.year, e.month, e.date, e.hours, e.minutes)
                })), this._prevOnSelectValue = t, this.opts.onSelect(t, s, this)
            },
            next: function() {
                var t = this.parsedDate,
                    e = this.opts;
                switch (this.view) {
                    case "days":
                        this.date = new Date(t.year, t.month + 1, 1), e.onChangeMonth && e.onChangeMonth(this.parsedDate.month, this.parsedDate.year);
                        break;
                    case "months":
                        this.date = new Date(t.year + 1, t.month, 1), e.onChangeYear && e.onChangeYear(this.parsedDate.year);
                        break;
                    case "years":
                        this.date = new Date(t.year + 10, 0, 1), e.onChangeDecade && e.onChangeDecade(this.curDecade)
                }
            },
            prev: function() {
                var t = this.parsedDate,
                    e = this.opts;
                switch (this.view) {
                    case "days":
                        this.date = new Date(t.year, t.month - 1, 1), e.onChangeMonth && e.onChangeMonth(this.parsedDate.month, this.parsedDate.year);
                        break;
                    case "months":
                        this.date = new Date(t.year - 1, t.month, 1), e.onChangeYear && e.onChangeYear(this.parsedDate.year);
                        break;
                    case "years":
                        this.date = new Date(t.year - 10, 0, 1), e.onChangeDecade && e.onChangeDecade(this.curDecade)
                }
            },
            formatDate: function(t, e) {
                e = e || this.date;
                var i, n = t,
                    s = this._getWordBoundaryRegExp,
                    o = this.loc,
                    r = f.getLeadingZeroNum,
                    a = f.getDecade(e),
                    l = f.getParsedDate(e),
                    c = l.fullHours,
                    d = l.hours,
                    u = t.match(s("aa")) || t.match(s("AA")),
                    h = "am",
                    p = this._replacer;
                switch (this.opts.timepicker && this.timepicker && u && (c = r((i = this.timepicker._getValidHoursFromDate(e, u)).hours), d = i.hours, h = i.dayPeriod), !0) {
                    case /@/.test(n):
                        n = n.replace(/@/, e.getTime());
                    case /aa/.test(n):
                        n = p(n, s("aa"), h);
                    case /AA/.test(n):
                        n = p(n, s("AA"), h.toUpperCase());
                    case /dd/.test(n):
                        n = p(n, s("dd"), l.fullDate);
                    case /d/.test(n):
                        n = p(n, s("d"), l.date);
                    case /DD/.test(n):
                        n = p(n, s("DD"), o.days[l.day]);
                    case /D/.test(n):
                        n = p(n, s("D"), o.daysShort[l.day]);
                    case /mm/.test(n):
                        n = p(n, s("mm"), l.fullMonth);
                    case /m/.test(n):
                        n = p(n, s("m"), l.month + 1);
                    case /MM/.test(n):
                        n = p(n, s("MM"), this.loc.months[l.month]);
                    case /M/.test(n):
                        n = p(n, s("M"), o.monthsShort[l.month]);
                    case /ii/.test(n):
                        n = p(n, s("ii"), l.fullMinutes);
                    case /i/.test(n):
                        n = p(n, s("i"), l.minutes);
                    case /hh/.test(n):
                        n = p(n, s("hh"), c);
                    case /h/.test(n):
                        n = p(n, s("h"), d);
                    case /yyyy/.test(n):
                        n = p(n, s("yyyy"), l.year);
                    case /yyyy1/.test(n):
                        n = p(n, s("yyyy1"), a[0]);
                    case /yyyy2/.test(n):
                        n = p(n, s("yyyy2"), a[1]);
                    case /yy/.test(n):
                        n = p(n, s("yy"), l.year.toString().slice(-2))
                }
                return n
            },
            _replacer: function(t, e, s) {
                return t.replace(e, function(t, e, i, n) {
                    return e + s + n
                })
            },
            _getWordBoundaryRegExp: function(t) {
                var e = "\\s|\\.|-|/|\\\\|,|\\$|\\!|\\?|:|;";
                return new RegExp("(^|>|" + e + ")(" + t + ")($|<|" + e + ")", "g")
            },
            selectDate: function(t) {
                var e = this,
                    i = e.opts,
                    n = e.parsedDate,
                    s = e.selectedDates.length,
                    o = "";
                if (Array.isArray(t)) t.forEach(function(t) {
                    e.selectDate(t)
                });
                else if (t instanceof Date) {
                    if (this.lastSelectedDate = t, this.timepicker && this.timepicker._setTime(t), e._trigger("selectDate", t), this.timepicker && (t.setHours(this.timepicker.hours), t.setMinutes(this.timepicker.minutes)), "days" == e.view && t.getMonth() != n.month && i.moveToOtherMonthsOnSelect && (o = new Date(t.getFullYear(), t.getMonth(), 1)), "years" == e.view && t.getFullYear() != n.year && i.moveToOtherYearsOnSelect && (o = new Date(t.getFullYear(), 0, 1)), o && (e.silent = !0, e.date = o, e.silent = !1, e.nav._render()), i.multipleDates && !i.range) {
                        if (s === i.multipleDates) return;
                        e._isSelected(t) || e.selectedDates.push(t)
                    } else i.range ? 2 == s ? (e.selectedDates = [t], e.minRange = t, e.maxRange = "") : 1 == s ? (e.selectedDates.push(t), e.maxRange ? e.minRange = t : e.maxRange = t, f.bigger(e.maxRange, e.minRange) && (e.maxRange = e.minRange, e.minRange = t), e.selectedDates = [e.minRange, e.maxRange]) : (e.selectedDates = [t], e.minRange = t) : e.selectedDates = [t];
                    e._setInputValue(), i.onSelect && e._triggerOnChange(), i.autoClose && !this.timepickerIsActive && (i.multipleDates || i.range ? i.range && 2 == e.selectedDates.length && e.hide() : e.hide()), e.views[this.currentView]._render()
                }
            },
            removeDate: function(i) {
                var n = this.selectedDates,
                    s = this;
                if (i instanceof Date) return n.some(function(t, e) {
                    return f.isSame(t, i) ? (n.splice(e, 1), s.selectedDates.length ? s.lastSelectedDate = s.selectedDates[s.selectedDates.length - 1] : (s.minRange = "", s.maxRange = "", s.lastSelectedDate = ""), s.views[s.currentView]._render(), s._setInputValue(), s.opts.onSelect && s._triggerOnChange(), !0) : void 0
                })
            },
            today: function() {
                this.silent = !0, this.view = this.opts.minView, this.silent = !1, this.date = new Date, this.opts.todayButton instanceof Date && this.selectDate(this.opts.todayButton)
            },
            clear: function() {
                this.selectedDates = [], this.minRange = "", this.maxRange = "", this.views[this.currentView]._render(), this._setInputValue(), this.opts.onSelect && this._triggerOnChange()
            },
            update: function(t, e) {
                var i = arguments.length,
                    n = this.lastSelectedDate;
                return 2 == i ? this.opts[t] = e : 1 == i && "object" == typeof t && (this.opts = r.extend(!0, this.opts, t)), this._createShortCuts(), this._syncWithMinMaxDates(), this._defineLocale(this.opts.language), this.nav._addButtonsIfNeed(), this.opts.onlyTimepicker || this.nav._render(), this.views[this.currentView]._render(), this.elIsInput && !this.opts.inline && (this._setPositionClasses(this.opts.position), this.visible && this.setPosition(this.opts.position)), this.opts.classes && this.$datepicker.addClass(this.opts.classes), this.opts.onlyTimepicker && this.$datepicker.addClass("-only-timepicker-"), this.opts.timepicker && (n && this.timepicker._handleDate(n), this.timepicker._updateRanges(), this.timepicker._updateCurrentTime(), n && (n.setHours(this.timepicker.hours), n.setMinutes(this.timepicker.minutes))), this._setInputValue(), this
            },
            _syncWithMinMaxDates: function() {
                var t = this.date.getTime();
                this.silent = !0, this.minTime > t && (this.date = this.minDate), this.maxTime < t && (this.date = this.maxDate), this.silent = !1
            },
            _isSelected: function(e, i) {
                var n = !1;
                return this.selectedDates.some(function(t) {
                    return f.isSame(t, e, i) ? (n = t, !0) : void 0
                }), n
            },
            _setInputValue: function() {
                var t, e = this,
                    i = e.opts,
                    n = e.loc.dateFormat,
                    s = i.altFieldDateFormat,
                    o = e.selectedDates.map(function(t) {
                        return e.formatDate(n, t)
                    });
                i.altField && e.$altField.length && (t = (t = this.selectedDates.map(function(t) {
                    return e.formatDate(s, t)
                })).join(this.opts.multipleDatesSeparator), this.$altField.val(t)), o = o.join(this.opts.multipleDatesSeparator), this.$el.val(o)
            },
            _isInRange: function(t, e) {
                var i = t.getTime(),
                    n = f.getParsedDate(t),
                    s = f.getParsedDate(this.minDate),
                    o = f.getParsedDate(this.maxDate),
                    r = new Date(n.year, n.month, s.date).getTime(),
                    a = new Date(n.year, n.month, o.date).getTime(),
                    l = {
                        day: i >= this.minTime && i <= this.maxTime,
                        month: r >= this.minTime && a <= this.maxTime,
                        year: n.year >= s.year && n.year <= o.year
                    };
                return e ? l[e] : l.day
            },
            _getDimensions: function(t) {
                var e = t.offset();
                return {
                    width: t.outerWidth(),
                    height: t.outerHeight(),
                    left: e.left,
                    top: e.top
                }
            },
            _getDateFromCell: function(t) {
                var e = this.parsedDate,
                    i = t.data("year") || e.year,
                    n = t.data("month") == o ? e.month : t.data("month"),
                    s = t.data("date") || 1;
                return new Date(i, n, s)
            },
            _setPositionClasses: function(t) {
                var e = (t = t.split(" "))[0],
                    i = "datepicker -" + e + "-" + t[1] + "- -from-" + e + "-";
                this.visible && (i += " active"), this.$datepicker.removeAttr("class").addClass(i)
            },
            setPosition: function(t) {
                t = t || this.opts.position;
                var e, i, n = this._getDimensions(this.$el),
                    s = this._getDimensions(this.$datepicker),
                    o = t.split(" "),
                    r = this.opts.offset,
                    a = o[0],
                    l = o[1];
                switch (a) {
                    case "top":
                        e = n.top - s.height - r;
                        break;
                    case "right":
                        i = n.left + n.width + r;
                        break;
                    case "bottom":
                        e = n.top + n.height + r;
                        break;
                    case "left":
                        i = n.left - s.width - r
                }
                switch (l) {
                    case "top":
                        e = n.top;
                        break;
                    case "right":
                        i = n.left + n.width - s.width;
                        break;
                    case "bottom":
                        e = n.top + n.height - s.height;
                        break;
                    case "left":
                        i = n.left;
                        break;
                    case "center":
                        /left|right/.test(a) ? e = n.top + n.height / 2 - s.height / 2 : i = n.left + n.width / 2 - s.width / 2
                }
                this.$datepicker.css({
                    left: i,
                    top: e
                })
            },
            show: function() {
                var t = this.opts.onShow;
                this.setPosition(this.opts.position), this.$datepicker.addClass("active"), this.visible = !0, t && this._bindVisionEvents(t)
            },
            hide: function() {
                var t = this.opts.onHide;
                this.$datepicker.removeClass("active").css({
                    left: "-100000px"
                }), this.focused = "", this.keys = [], this.inFocus = !1, this.visible = !1, this.$el.blur(), t && this._bindVisionEvents(t)
            },
            down: function(t) {
                this._changeView(t, "down")
            },
            up: function(t) {
                this._changeView(t, "up")
            },
            _bindVisionEvents: function(t) {
                this.$datepicker.off("transitionend.dp"), t(this, !1), this.$datepicker.one("transitionend.dp", t.bind(this, this, !0))
            },
            _changeView: function(t, e) {
                t = t || this.focused || this.date;
                var i = "up" == e ? this.viewIndex + 1 : this.viewIndex - 1;
                2 < i && (i = 2), i < 0 && (i = 0), this.silent = !0, this.date = new Date(t.getFullYear(), t.getMonth(), 1), this.silent = !1, this.view = this.viewIndexes[i]
            },
            _handleHotKey: function(t) {
                var e, i, n, s = f.getParsedDate(this._getFocusedDate()),
                    o = this.opts,
                    r = !1,
                    a = !1,
                    l = !1,
                    c = s.year,
                    d = s.month,
                    u = s.date;
                switch (t) {
                    case "ctrlRight":
                    case "ctrlUp":
                        d += 1, r = !0;
                        break;
                    case "ctrlLeft":
                    case "ctrlDown":
                        d -= 1, r = !0;
                        break;
                    case "shiftRight":
                    case "shiftUp":
                        a = !0, c += 1;
                        break;
                    case "shiftLeft":
                    case "shiftDown":
                        a = !0, c -= 1;
                        break;
                    case "altRight":
                    case "altUp":
                        l = !0, c += 10;
                        break;
                    case "altLeft":
                    case "altDown":
                        l = !0, c -= 10;
                        break;
                    case "ctrlShiftUp":
                        this.up()
                }
                n = f.getDaysCount(new Date(c, d)), i = new Date(c, d, u), n < u && (u = n), i.getTime() < this.minTime ? i = this.minDate : i.getTime() > this.maxTime && (i = this.maxDate), this.focused = i, e = f.getParsedDate(i), r && o.onChangeMonth && o.onChangeMonth(e.month, e.year), a && o.onChangeYear && o.onChangeYear(e.year), l && o.onChangeDecade && o.onChangeDecade(this.curDecade)
            },
            _registerKey: function(e) {
                this.keys.some(function(t) {
                    return t == e
                }) || this.keys.push(e)
            },
            _unRegisterKey: function(t) {
                var e = this.keys.indexOf(t);
                this.keys.splice(e, 1)
            },
            _isHotKeyPressed: function() {
                var t, e = !1,
                    i = this.keys.sort();
                for (var n in g) t = g[n], i.length == t.length && t.every(function(t, e) {
                    return t == i[e]
                }) && (this._trigger("hotKey", n), e = !0);
                return e
            },
            _trigger: function(t, e) {
                this.$el.trigger(t, e)
            },
            _focusNextCell: function(t, e) {
                e = e || this.cellType;
                var i = f.getParsedDate(this._getFocusedDate()),
                    n = i.year,
                    s = i.month,
                    o = i.date;
                if (!this._isHotKeyPressed()) {
                    switch (t) {
                        case 37:
                            "day" == e && (o -= 1), "month" == e && (s -= 1), "year" == e && (n -= 1);
                            break;
                        case 38:
                            "day" == e && (o -= 7), "month" == e && (s -= 3), "year" == e && (n -= 4);
                            break;
                        case 39:
                            "day" == e && (o += 1), "month" == e && (s += 1), "year" == e && (n += 1);
                            break;
                        case 40:
                            "day" == e && (o += 7), "month" == e && (s += 3), "year" == e && (n += 4)
                    }
                    var r = new Date(n, s, o);
                    r.getTime() < this.minTime ? r = this.minDate : r.getTime() > this.maxTime && (r = this.maxDate), this.focused = r
                }
            },
            _getFocusedDate: function() {
                var t = this.focused || this.selectedDates[this.selectedDates.length - 1],
                    e = this.parsedDate;
                if (!t) switch (this.view) {
                    case "days":
                        t = new Date(e.year, e.month, (new Date).getDate());
                        break;
                    case "months":
                        t = new Date(e.year, e.month, 1);
                        break;
                    case "years":
                        t = new Date(e.year, 0, 1)
                }
                return t
            },
            _getCell: function(t, e) {
                e = e || this.cellType;
                var i, n = f.getParsedDate(t),
                    s = '.datepicker--cell[data-year="' + n.year + '"]';
                switch (e) {
                    case "month":
                        s = '[data-month="' + n.month + '"]';
                        break;
                    case "day":
                        s += '[data-month="' + n.month + '"][data-date="' + n.date + '"]'
                }
                return (i = this.views[this.currentView].$el.find(s)).length ? i : r("")
            },
            destroy: function() {
                var t = this;
                t.$el.off(".adp").data("datepicker", ""), t.selectedDates = [], t.focused = "", t.views = {}, t.keys = [], t.minRange = "", t.maxRange = "", t.opts.inline || !t.elIsInput ? t.$datepicker.closest(".datepicker-inline").remove() : t.$datepicker.remove()
            },
            _handleAlreadySelectedDates: function(t, e) {
                this.opts.range ? this.opts.toggleSelected ? this.removeDate(e) : 2 != this.selectedDates.length && this._trigger("clickCell", e) : this.opts.toggleSelected && this.removeDate(e), this.opts.toggleSelected || (this.lastSelectedDate = t, this.opts.timepicker && (this.timepicker._setTime(t), this.timepicker.update()))
            },
            _onShowEvent: function(t) {
                this.visible || this.show()
            },
            _onBlur: function() {
                !this.inFocus && this.visible && this.hide()
            },
            _onMouseDownDatepicker: function(t) {
                this.inFocus = !0
            },
            _onMouseUpDatepicker: function(t) {
                this.inFocus = !1, t.originalEvent.inFocus = !0, t.originalEvent.timepickerFocus || this.$el.focus()
            },
            _onKeyUpGeneral: function(t) {
                this.$el.val() || this.clear()
            },
            _onResize: function() {
                this.visible && this.setPosition()
            },
            _onMouseUpBody: function(t) {
                t.originalEvent.inFocus || this.visible && !this.inFocus && this.hide()
            },
            _onMouseUpEl: function(t) {
                t.originalEvent.inFocus = !0, setTimeout(this._onKeyUpGeneral.bind(this), 4)
            },
            _onKeyDown: function(t) {
                var e = t.which;
                if (this._registerKey(e), 37 <= e && e <= 40 && (t.preventDefault(), this._focusNextCell(e)), 13 == e && this.focused) {
                    if (this._getCell(this.focused).hasClass("-disabled-")) return;
                    if (this.view != this.opts.minView) this.down();
                    else {
                        var i = this._isSelected(this.focused, this.cellType);
                        if (!i) return this.timepicker && (this.focused.setHours(this.timepicker.hours), this.focused.setMinutes(this.timepicker.minutes)), void this.selectDate(this.focused);
                        this._handleAlreadySelectedDates(i, this.focused)
                    }
                }
                27 == e && this.hide()
            },
            _onKeyUp: function(t) {
                var e = t.which;
                this._unRegisterKey(e)
            },
            _onHotKey: function(t, e) {
                this._handleHotKey(e)
            },
            _onMouseEnterCell: function(t) {
                var e = r(t.target).closest(".datepicker--cell"),
                    i = this._getDateFromCell(e);
                this.silent = !0, this.focused && (this.focused = ""), e.addClass("-focus-"), this.focused = i, this.silent = !1, this.opts.range && 1 == this.selectedDates.length && (this.minRange = this.selectedDates[0], this.maxRange = "", f.less(this.minRange, this.focused) && (this.maxRange = this.minRange, this.minRange = ""), this.views[this.currentView]._update())
            },
            _onMouseLeaveCell: function(t) {
                r(t.target).closest(".datepicker--cell").removeClass("-focus-"), this.silent = !0, this.focused = "", this.silent = !1
            },
            _onTimeChange: function(t, e, i) {
                var n = new Date,
                    s = !1;
                this.selectedDates.length && (s = !0, n = this.lastSelectedDate), n.setHours(e), n.setMinutes(i), s || this._getCell(n).hasClass("-disabled-") ? (this._setInputValue(), this.opts.onSelect && this._triggerOnChange()) : this.selectDate(n)
            },
            _onClickCell: function(t, e) {
                this.timepicker && (e.setHours(this.timepicker.hours), e.setMinutes(this.timepicker.minutes)), this.selectDate(e)
            },
            set focused(t) {
                if (!t && this.focused) {
                    var e = this._getCell(this.focused);
                    e.length && e.removeClass("-focus-")
                }
                this._focused = t, this.opts.range && 1 == this.selectedDates.length && (this.minRange = this.selectedDates[0], this.maxRange = "", f.less(this.minRange, this._focused) && (this.maxRange = this.minRange, this.minRange = "")), this.silent || (this.date = t)
            },
            get focused() {
                return this._focused
            },
            get parsedDate() {
                return f.getParsedDate(this.date)
            },
            set date(t) {
                return t instanceof Date ? (this.currentDate = t, this.inited && !this.silent && (this.views[this.view]._render(), this.nav._render(), this.visible && this.elIsInput && this.setPosition()), t) : void 0
            },
            get date() {
                return this.currentDate
            },
            set view(t) {
                return this.viewIndex = this.viewIndexes.indexOf(t), this.viewIndex < 0 ? void 0 : (this.prevView = this.currentView, this.currentView = t, this.inited && (this.views[t] ? this.views[t]._render() : this.views[t] = new r.fn.datepicker.Body(this, t, this.opts), this.views[this.prevView].hide(), this.views[t].show(), this.nav._render(), this.opts.onChangeView && this.opts.onChangeView(t), this.elIsInput && this.visible && this.setPosition()), t)
            },
            get view() {
                return this.currentView
            },
            get cellType() {
                return this.view.substring(0, this.view.length - 1)
            },
            get minTime() {
                var t = f.getParsedDate(this.minDate);
                return new Date(t.year, t.month, t.date).getTime()
            },
            get maxTime() {
                var t = f.getParsedDate(this.maxDate);
                return new Date(t.year, t.month, t.date).getTime()
            },
            get curDecade() {
                return f.getDecade(this.date)
            }
        }, f.getDaysCount = function(t) {
            return new Date(t.getFullYear(), t.getMonth() + 1, 0).getDate()
        }, f.getParsedDate = function(t) {
            return {
                year: t.getFullYear(),
                month: t.getMonth(),
                fullMonth: t.getMonth() + 1 < 10 ? "0" + (t.getMonth() + 1) : t.getMonth() + 1,
                date: t.getDate(),
                fullDate: t.getDate() < 10 ? "0" + t.getDate() : t.getDate(),
                day: t.getDay(),
                hours: t.getHours(),
                fullHours: t.getHours() < 10 ? "0" + t.getHours() : t.getHours(),
                minutes: t.getMinutes(),
                fullMinutes: t.getMinutes() < 10 ? "0" + t.getMinutes() : t.getMinutes()
            }
        }, f.getDecade = function(t) {
            var e = 10 * Math.floor(t.getFullYear() / 10);
            return [e, e + 9]
        }, f.template = function(t, i) {
            return t.replace(/#\{([\w]+)\}/g, function(t, e) {
                return i[e] || 0 === i[e] ? i[e] : void 0
            })
        }, f.isSame = function(t, e, i) {
            if (!t || !e) return !1;
            var n = f.getParsedDate(t),
                s = f.getParsedDate(e),
                o = i || "day";
            return {
                day: n.date == s.date && n.month == s.month && n.year == s.year,
                month: n.month == s.month && n.year == s.year,
                year: n.year == s.year
            } [o]
        }, f.less = function(t, e, i) {
            return !(!t || !e) && e.getTime() < t.getTime()
        }, f.bigger = function(t, e, i) {
            return !(!t || !e) && e.getTime() > t.getTime()
        }, f.getLeadingZeroNum = function(t) {
            return parseInt(t) < 10 ? "0" + t : t
        }, f.resetTime = function(t) {
            return "object" == typeof t ? (t = f.getParsedDate(t), new Date(t.year, t.month, t.date)) : void 0
        }, r.fn.datepicker = function(e) {
            return this.each(function() {
                if (r.data(this, u)) {
                    var t = r.data(this, u);
                    t.opts = r.extend(!0, t.opts, e), t.update()
                } else r.data(this, u, new v(this, e))
            })
        }, r.fn.datepicker.Constructor = v, r.fn.datepicker.language = {
            ru: {
                days: ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"],
                daysShort: ["Вос", "Пон", "Вто", "Сре", "Чет", "Пят", "Суб"],
                daysMin: ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"],
                months: ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"],
                monthsShort: ["Янв", "Фев", "Мар", "Апр", "Май", "Июн", "Июл", "Авг", "Сен", "Окт", "Ноя", "Дек"],
                today: "Сегодня",
                clear: "Очистить",
                dateFormat: "dd.mm.yyyy",
                timeFormat: "hh:ii",
                firstDay: 1
            }
        }, r(function() {
            r(".datepicker-here").datepicker()
        }), n = {
            days: '<div class="datepicker--days datepicker--body"><div class="datepicker--days-names"></div><div class="datepicker--cells datepicker--cells-days"></div></div>',
            months: '<div class="datepicker--months datepicker--body"><div class="datepicker--cells datepicker--cells-months"></div></div>',
            years: '<div class="datepicker--years datepicker--body"><div class="datepicker--cells datepicker--cells-years"></div></div>'
        }, l = r.fn.datepicker, h = l.Constructor, l.Body = function(t, e, i) {
            this.d = t, this.type = e, this.opts = i, this.$el = r(""), this.opts.onlyTimepicker || this.init()
        }, l.Body.prototype = {
            init: function() {
                this._buildBaseHtml(), this._render(), this._bindEvents()
            },
            _bindEvents: function() {
                this.$el.on("click", ".datepicker--cell", r.proxy(this._onClickCell, this))
            },
            _buildBaseHtml: function() {
                this.$el = r(n[this.type]).appendTo(this.d.$content), this.$names = r(".datepicker--days-names", this.$el), this.$cells = r(".datepicker--cells", this.$el)
            },
            _getDayNamesHtml: function(t, e, i, n) {
                return e = e != o ? e : t, i = i || "", 7 < (n = n != o ? n : 0) ? i : 7 == e ? this._getDayNamesHtml(t, 0, i, ++n) : (i += '<div class="datepicker--day-name' + (this.d.isWeekend(e) ? " -weekend-" : "") + '">' + this.d.loc.daysMin[e] + "</div>", this._getDayNamesHtml(t, ++e, i, ++n))
            },
            _getCellContents: function(t, e) {
                var i = "datepicker--cell datepicker--cell-" + e,
                    n = new Date,
                    s = this.d,
                    o = h.resetTime(s.minRange),
                    r = h.resetTime(s.maxRange),
                    a = s.opts,
                    l = h.getParsedDate(t),
                    c = {},
                    d = l.date;
                switch (e) {
                    case "day":
                        s.isWeekend(l.day) && (i += " -weekend-"), l.month != this.d.parsedDate.month && (i += " -other-month-", a.selectOtherMonths || (i += " -disabled-"), a.showOtherMonths || (d = ""));
                        break;
                    case "month":
                        d = s.loc[s.opts.monthsField][l.month];
                        break;
                    case "year":
                        var u = s.curDecade;
                        d = l.year, (l.year < u[0] || l.year > u[1]) && (i += " -other-decade-", a.selectOtherYears || (i += " -disabled-"), a.showOtherYears || (d = ""))
                }
                return a.onRenderCell && (d = (c = a.onRenderCell(t, e) || {}).html ? c.html : d, i += c.classes ? " " + c.classes : ""), a.range && (h.isSame(o, t, e) && (i += " -range-from-"), h.isSame(r, t, e) && (i += " -range-to-"), 1 == s.selectedDates.length && s.focused ? ((h.bigger(o, t) && h.less(s.focused, t) || h.less(r, t) && h.bigger(s.focused, t)) && (i += " -in-range-"), h.less(r, t) && h.isSame(s.focused, t) && (i += " -range-from-"), h.bigger(o, t) && h.isSame(s.focused, t) && (i += " -range-to-")) : 2 == s.selectedDates.length && h.bigger(o, t) && h.less(r, t) && (i += " -in-range-")), h.isSame(n, t, e) && (i += " -current-"), s.focused && h.isSame(t, s.focused, e) && (i += " -focus-"), s._isSelected(t, e) && (i += " -selected-"), (!s._isInRange(t, e) || c.disabled) && (i += " -disabled-"), {
                    html: d,
                    classes: i
                }
            },
            _getDaysHtml: function(t) {
                for (var e, i, n = h.getDaysCount(t), s = new Date(t.getFullYear(), t.getMonth(), 1).getDay(), o = new Date(t.getFullYear(), t.getMonth(), n).getDay(), r = s - this.d.loc.firstDay, a = 6 - o + this.d.loc.firstDay, l = "", c = 1 - (r = r < 0 ? r + 7 : r), d = n + (a = 6 < a ? a - 7 : a); c <= d; c++) i = t.getFullYear(), e = t.getMonth(), l += this._getDayHtml(new Date(i, e, c));
                return l
            },
            _getDayHtml: function(t) {
                var e = this._getCellContents(t, "day");
                return '<div class="' + e.classes + '" data-date="' + t.getDate() + '" data-month="' + t.getMonth() + '" data-year="' + t.getFullYear() + '">' + e.html + "</div>"
            },
            _getMonthsHtml: function(t) {
                for (var e = "", i = h.getParsedDate(t), n = 0; n < 12;) e += this._getMonthHtml(new Date(i.year, n)), n++;
                return e
            },
            _getMonthHtml: function(t) {
                var e = this._getCellContents(t, "month");
                return '<div class="' + e.classes + '" data-month="' + t.getMonth() + '">' + e.html + "</div>"
            },
            _getYearsHtml: function(t) {
                for (var e = (h.getParsedDate(t), h.getDecade(t)), i = "", n = e[0] - 1; n <= e[1] + 1; n++) i += this._getYearHtml(new Date(n, 0));
                return i
            },
            _getYearHtml: function(t) {
                var e = this._getCellContents(t, "year");
                return '<div class="' + e.classes + '" data-year="' + t.getFullYear() + '">' + e.html + "</div>"
            },
            _renderTypes: {
                days: function() {
                    var t = this._getDayNamesHtml(this.d.loc.firstDay),
                        e = this._getDaysHtml(this.d.currentDate);
                    this.$cells.html(e), this.$names.html(t)
                },
                months: function() {
                    var t = this._getMonthsHtml(this.d.currentDate);
                    this.$cells.html(t)
                },
                years: function() {
                    var t = this._getYearsHtml(this.d.currentDate);
                    this.$cells.html(t)
                }
            },
            _render: function() {
                this.opts.onlyTimepicker || this._renderTypes[this.type].bind(this)()
            },
            _update: function() {
                var i, n, s, t = r(".datepicker--cell", this.$cells),
                    o = this;
                t.each(function(t, e) {
                    n = r(this), s = o.d._getDateFromCell(r(this)), i = o._getCellContents(s, o.d.cellType), n.attr("class", i.classes)
                })
            },
            show: function() {
                this.opts.onlyTimepicker || (this.$el.addClass("active"), this.acitve = !0)
            },
            hide: function() {
                this.$el.removeClass("active"), this.active = !1
            },
            _handleClick: function(t) {
                var e = t.data("date") || 1,
                    i = t.data("month") || 0,
                    n = t.data("year") || this.d.parsedDate.year,
                    s = this.d;
                if (s.view == this.opts.minView) {
                    var o = new Date(n, i, e),
                        r = this.d._isSelected(o, this.d.cellType);
                    return r ? void s._handleAlreadySelectedDates.bind(s, r, o)() : void s._trigger("clickCell", o)
                }
                s.down(new Date(n, i, e))
            },
            _onClickCell: function(t) {
                var e = r(t.target).closest(".datepicker--cell");
                e.hasClass("-disabled-") || this._handleClick.bind(this)(e)
            }
        }, i = r.fn.datepicker, a = i.Constructor, i.Navigation = function(t, e) {
            this.d = t, this.opts = e, this.$buttonsContainer = "", this.init()
        }, i.Navigation.prototype = {
            init: function() {
                this._buildBaseHtml(), this._bindEvents()
            },
            _bindEvents: function() {
                this.d.$nav.on("click", ".datepicker--nav-action", r.proxy(this._onClickNavButton, this)), this.d.$nav.on("click", ".datepicker--nav-title", r.proxy(this._onClickNavTitle, this)), this.d.$datepicker.on("click", ".datepicker--button", r.proxy(this._onClickNavButton, this))
            },
            _buildBaseHtml: function() {
                this.opts.onlyTimepicker || this._render(), this._addButtonsIfNeed()
            },
            _addButtonsIfNeed: function() {
                this.opts.todayButton && this._addButton("today"), this.opts.clearButton && this._addButton("clear")
            },
            _render: function() {
                var t = this._getTitle(this.d.currentDate),
                    e = a.template('<div class="datepicker--nav-action" data-action="prev">#{prevHtml}</div><div class="datepicker--nav-title">#{title}</div><div class="datepicker--nav-action" data-action="next">#{nextHtml}</div>', r.extend({
                        title: t
                    }, this.opts));
                this.d.$nav.html(e), "years" == this.d.view && r(".datepicker--nav-title", this.d.$nav).addClass("-disabled-"), this.setNavStatus()
            },
            _getTitle: function(t) {
                return this.d.formatDate(this.opts.navTitles[this.d.view], t)
            },
            _addButton: function(t) {
                this.$buttonsContainer.length || this._addButtonsContainer();
                var e = {
                        action: t,
                        label: this.d.loc[t]
                    },
                    i = a.template('<span class="datepicker--button" data-action="#{action}">#{label}</span>', e);
                r("[data-action=" + t + "]", this.$buttonsContainer).length || this.$buttonsContainer.append(i)
            },
            _addButtonsContainer: function() {
                this.d.$datepicker.append('<div class="datepicker--buttons"></div>'), this.$buttonsContainer = r(".datepicker--buttons", this.d.$datepicker)
            },
            setNavStatus: function() {
                if ((this.opts.minDate || this.opts.maxDate) && this.opts.disableNavWhenOutOfRange) {
                    var t = this.d.parsedDate,
                        e = t.month,
                        i = t.year,
                        n = t.date;
                    switch (this.d.view) {
                        case "days":
                            this.d._isInRange(new Date(i, e - 1, 1), "month") || this._disableNav("prev"), this.d._isInRange(new Date(i, e + 1, 1), "month") || this._disableNav("next");
                            break;
                        case "months":
                            this.d._isInRange(new Date(i - 1, e, n), "year") || this._disableNav("prev"), this.d._isInRange(new Date(i + 1, e, n), "year") || this._disableNav("next");
                            break;
                        case "years":
                            var s = a.getDecade(this.d.date);
                            this.d._isInRange(new Date(s[0] - 1, 0, 1), "year") || this._disableNav("prev"), this.d._isInRange(new Date(s[1] + 1, 0, 1), "year") || this._disableNav("next")
                    }
                }
            },
            _disableNav: function(t) {
                r('[data-action="' + t + '"]', this.d.$nav).addClass("-disabled-")
            },
            _activateNav: function(t) {
                r('[data-action="' + t + '"]', this.d.$nav).removeClass("-disabled-")
            },
            _onClickNavButton: function(t) {
                var e = r(t.target).closest("[data-action]").data("action");
                this.d[e]()
            },
            _onClickNavTitle: function(t) {
                return r(t.target).hasClass("-disabled-") ? void 0 : "days" == this.d.view ? this.d.view = "months" : void(this.d.view = "years")
            }
        }, e = r.fn.datepicker, s = e.Constructor, e.Timepicker = function(t, e) {
            this.d = t, this.opts = e, this.init()
        }, e.Timepicker.prototype = {
            init: function() {
                var t = "input";
                this._setTime(this.d.date), this._buildHTML(), navigator.userAgent.match(/trident/gi) && (t = "change"), this.d.$el.on("selectDate", this._onSelectDate.bind(this)), this.$ranges.on(t, this._onChangeRange.bind(this)), this.$ranges.on("mouseup", this._onMouseUpRange.bind(this)), this.$ranges.on("mousemove focus ", this._onMouseEnterRange.bind(this)), this.$ranges.on("mouseout blur", this._onMouseOutRange.bind(this))
            },
            _setTime: function(t) {
                var e = s.getParsedDate(t);
                this._handleDate(t), this.hours = e.hours < this.minHours ? this.minHours : e.hours, this.minutes = e.minutes < this.minMinutes ? this.minMinutes : e.minutes
            },
            _setMinTimeFromDate: function(t) {
                this.minHours = t.getHours(), this.minMinutes = t.getMinutes(), this.d.lastSelectedDate && this.d.lastSelectedDate.getHours() > t.getHours() && (this.minMinutes = this.opts.minMinutes)
            },
            _setMaxTimeFromDate: function(t) {
                this.maxHours = t.getHours(), this.maxMinutes = t.getMinutes(), this.d.lastSelectedDate && this.d.lastSelectedDate.getHours() < t.getHours() && (this.maxMinutes = this.opts.maxMinutes)
            },
            _setDefaultMinMaxTime: function() {
                var t = this.opts;
                this.minHours = t.minHours < 0 || 23 < t.minHours ? 0 : t.minHours, this.minMinutes = t.minMinutes < 0 || 59 < t.minMinutes ? 0 : t.minMinutes, this.maxHours = t.maxHours < 0 || 23 < t.maxHours ? 23 : t.maxHours, this.maxMinutes = t.maxMinutes < 0 || 59 < t.maxMinutes ? 59 : t.maxMinutes
            },
            _validateHoursMinutes: function(t) {
                this.hours < this.minHours ? this.hours = this.minHours : this.hours > this.maxHours && (this.hours = this.maxHours), this.minutes < this.minMinutes ? this.minutes = this.minMinutes : this.minutes > this.maxMinutes && (this.minutes = this.maxMinutes)
            },
            _buildHTML: function() {
                var t = s.getLeadingZeroNum,
                    e = {
                        hourMin: this.minHours,
                        hourMax: t(this.maxHours),
                        hourStep: this.opts.hoursStep,
                        hourValue: this.hours,
                        hourVisible: t(this.displayHours),
                        minMin: this.minMinutes,
                        minMax: t(this.maxMinutes),
                        minStep: this.opts.minutesStep,
                        minValue: t(this.minutes)
                    },
                    i = s.template('<div class="datepicker--time"><div class="datepicker--time-current">   <span class="datepicker--time-current-hours">#{hourVisible}</span>   <span class="datepicker--time-current-colon">:</span>   <span class="datepicker--time-current-minutes">#{minValue}</span></div><div class="datepicker--time-sliders">   <div class="datepicker--time-row">      <input type="range" name="hours" value="#{hourValue}" min="#{hourMin}" max="#{hourMax}" step="#{hourStep}"/>   </div>   <div class="datepicker--time-row">      <input type="range" name="minutes" value="#{minValue}" min="#{minMin}" max="#{minMax}" step="#{minStep}"/>   </div></div></div>', e);
                this.$timepicker = r(i).appendTo(this.d.$datepicker), this.$ranges = r('[type="range"]', this.$timepicker), this.$hours = r('[name="hours"]', this.$timepicker), this.$minutes = r('[name="minutes"]', this.$timepicker), this.$hoursText = r(".datepicker--time-current-hours", this.$timepicker), this.$minutesText = r(".datepicker--time-current-minutes", this.$timepicker), this.d.ampm && (this.$ampm = r('<span class="datepicker--time-current-ampm">').appendTo(r(".datepicker--time-current", this.$timepicker)).html(this.dayPeriod), this.$timepicker.addClass("-am-pm-"))
            },
            _updateCurrentTime: function() {
                var t = s.getLeadingZeroNum(this.displayHours),
                    e = s.getLeadingZeroNum(this.minutes);
                this.$hoursText.html(t), this.$minutesText.html(e), this.d.ampm && this.$ampm.html(this.dayPeriod)
            },
            _updateRanges: function() {
                this.$hours.attr({
                    min: this.minHours,
                    max: this.maxHours
                }).val(this.hours), this.$minutes.attr({
                    min: this.minMinutes,
                    max: this.maxMinutes
                }).val(this.minutes)
            },
            _handleDate: function(t) {
                this._setDefaultMinMaxTime(), t && (s.isSame(t, this.d.opts.minDate) ? this._setMinTimeFromDate(this.d.opts.minDate) : s.isSame(t, this.d.opts.maxDate) && this._setMaxTimeFromDate(this.d.opts.maxDate)), this._validateHoursMinutes(t)
            },
            update: function() {
                this._updateRanges(), this._updateCurrentTime()
            },
            _getValidHoursFromDate: function(t, e) {
                var i = t;
                t instanceof Date && (i = s.getParsedDate(t).hours);
                var n = "am";
                if (e || this.d.ampm) switch (!0) {
                    case 0 == i:
                        i = 12;
                        break;
                    case 12 == i:
                        n = "pm";
                        break;
                    case 11 < i:
                        i -= 12, n = "pm"
                }
                return {
                    hours: i,
                    dayPeriod: n
                }
            },
            set hours(t) {
                this._hours = t;
                var e = this._getValidHoursFromDate(t);
                this.displayHours = e.hours, this.dayPeriod = e.dayPeriod
            },
            get hours() {
                return this._hours
            },
            _onChangeRange: function(t) {
                var e = r(t.target),
                    i = e.attr("name");
                this.d.timepickerIsActive = !0, this[i] = e.val(), this._updateCurrentTime(), this.d._trigger("timeChange", [this.hours, this.minutes]), this._handleDate(this.d.lastSelectedDate), this.update()
            },
            _onSelectDate: function(t, e) {
                this._handleDate(e), this.update()
            },
            _onMouseEnterRange: function(t) {
                var e = r(t.target).attr("name");
                r(".datepicker--time-current-" + e, this.$timepicker).addClass("-focus-")
            },
            _onMouseOutRange: function(t) {
                var e = r(t.target).attr("name");
                this.d.inFocus || r(".datepicker--time-current-" + e, this.$timepicker).removeClass("-focus-")
            },
            _onMouseUpRange: function(t) {
                this.d.timepickerIsActive = !1
            }
        }
    }(window, jQuery);
var tools = {
        init: function(t) {
            if (this.client(), null != t)
                for (var e = 0, i = t.length; e < i; e++) tools[t[e]]()
        },
        client: function() {
            window.client = {
                get: function() {
                    this.$document = $(document), this.$window = $(window), this.windowW = this.$window.width(), this.windowH = this.$window.height(), this.isMobile = this.windowW <= 1200, this.scrollW = this.getScrollWidth(), this.isRetina = this.checkRetina()
                },
                getScrollWidth: function() {
                    var t = document.createElement("div");
                    t.style.visibility = "hidden", t.style.width = "100px", t.style.msOverflowStyle = "scrollbar", document.body.appendChild(t);
                    var e = t.offsetWidth;
                    t.style.overflow = "scroll";
                    var i = document.createElement("div");
                    i.style.width = "100%", t.appendChild(i);
                    var n = i.offsetWidth;
                    return t.parentNode.removeChild(t), e - n
                },
                checkRetina: function() {
                    if (window.matchMedia) {
                        var t = window.matchMedia("only screen and (min--moz-device-pixel-ratio: 1.3), only screen and (-o-min-device-pixel-ratio: 2.6/2), only screen and (-webkit-min-device-pixel-ratio: 1.3), only screen  and (min-device-pixel-ratio: 1.3), only screen and (min-resolution: 1.3dppx)");
                        return t && t.matches || 1 < window.devicePixelRatio
                    }
                }
            }, client.get(), client.$window.on("resize", function() {
                client.get()
            })
        },
        backgrounds: function() {
            for (var t = document.querySelectorAll("[data-bg-src]"), e = t.length, i = 0; i < e; i++) {
                var n = t[i],
                    s = n.getAttribute("data-bg-src") || "",
                    o = n.getAttribute("data-bg-size") || "cover",
                    r = n.getAttribute("data-bg-pos") || "center center";
                n.style.background = "url(" + s + ") " + r + " / " + o + " no-repeat"
            }
        },
        tabs: function() {
            window.tabs = {
                init: function() {
                    var t = this,
                        e = document.querySelectorAll("[data-tabs]");
                    t.classTabActive = "tabs__tab_active", t.classBtnActive = "tabs__btn_active", t.tagTab = "[data-tab]", t.tagBtn = "[data-open-tab]";
                    for (var i = 0, n = e.length; i < n; i++) {
                        var s = e[i],
                            o = s.querySelector("[data-tab]").getAttribute("data-tab");
                        t.open(s, o), s.classList.add("tabs_initialized")
                    }
                    t.events()
                },
                open: function(t, e) {
                    for (var i = this, n = t.querySelectorAll(i.tagTab), s = 0, o = n.length; s < o; s++) {
                        n[s].classList.remove(i.classTabActive)
                    }
                    t.querySelector("[data-tab='" + e + "']").classList.add(i.classTabActive);
                    for (var r = t.querySelectorAll(i.tagBtn), a = 0, l = r.length; a < l; a++) {
                        r[a].classList.remove(i.classBtnActive)
                    }
                    t.querySelector("[data-open-tab='" + e + "']").classList.add(i.classBtnActive)
                },
                events: function() {
                    var n = this;
                    client.$document.on("click", "[data-open-tab]", function() {
                        var t = $(this),
                            e = t.closest(".tabs"),
                            i = t.data("open-tab");
                        n.open(e[0], i)
                    })
                }
            }, tabs.init()
        },
        modals: function() {
            window.modals = {
                init: function() {
                    var t = this;
                    t.container = document.querySelector("[data-modals]"), t.tagBtnClose = "[data-modal-close]", t.tagBtnCloseAll = "[data-modal-close-all]", t.tagBtnOpen = "[data-modal-open]", t.classModalActive = "modal_active", t.countOpened = 0, t.events()
                },
                open: function(t, e) {
                    var i = modals,
                        n = document.querySelector("[data-modal='" + t + "']");
                    null !== n && (i.hideOverflow(), n.classList.add(i.classModalActive), i.countOpened++, $(n).trigger("modalOpened"), e && e(n))
                },
                close: function(t, e) {
                    var i = this;
                    if (i.countOpened) {
                        var n = document.querySelector("[data-modal='" + t + "']");
                        null !== n && (n.classList.remove(i.classModalActive), i.countOpened--, i.countOpened || setTimeout(function() {
                            i.showOverflow()
                        }, 500), $(n).trigger("modalClosed"), e && e(n), $("[data-modal]").find("iframe").attr("src", ""))
                    }
                },
                closeAll: function(t) {
                    for (var e = this, i = e.container.querySelectorAll("[data-modal]"), n = 0, s = i.length; n < s; n++) {
                        i[n].classList.remove(e.classModalActive)
                    }
                    e.countOpened = 0, setTimeout(function() {
                        e.showOverflow()
                    }, 500), t && t(), $("[data-modal]").find("iframe").attr("src", "")
                },
                hideOverflow: function() {},
                showOverflow: function() {},
                events: function() {
                    var i = this;
                    client.$document.on("click", i.tagBtnCloseAll, function(t) {
                        t.preventDefault(), i.closeAll()
                    }), client.$document.on("click", i.tagBtnClose, function(t) {
                        t.preventDefault();
                        var e = $(this).closest(".modal").data("modal");
                        i.close(e)
                    }), client.$document.on("click", i.tagBtnOpen, function(t) {
                        t.preventDefault();
                        var e = $(this).data("modal-open");
                        i.open(e)
                    })
                }
            }, modals.init()
        },
        preloader: function() {
            window.preloader = {
                init: function() {
                    this.urls = this.getUrls(), this.loadImages(this.urls)
                },
                getUrls: function() {
                    for (var t = [], e = document.getElementsByTagName("img"), i = e.length, n = 0, s = document.querySelectorAll("[data-bg-src]"), o = s.length, r = 0; n < i; n++) {
                        var a = e[n].getAttribute("src");
                        t.push(a)
                    }
                    for (; r < o; r++) {
                        a = s[r].getAttribute("data-bg-src");
                        t.push(a)
                    }
                    return this.total = i + o, this.loaded = 0, t
                },
                loadImages: function(t) {
                    for (var e = this, i = 0, n = t.length; i < n; i++) {
                        var s = t[i],
                            o = new Image;
                        o.src = s, o.addEventListener("load", function() {
                            e.loaded++, e.check()
                        }), o.addEventListener("error", function() {
                            e.loaded++, e.check()
                        })
                    }
                },
                getProgress: function() {
                    return (this.loaded / this.total).toFixed(2)
                },
                check: function() {
                    this.loaded === this.total && this.done()
                },
                done: function() {
                    var t;
                    document.createEvent ? (t = document.createEvent("HTMLEvents")).initEvent("preloaderDone", !0, !0) : (t = document.createEventObject()).eventType = "preloaderDone", t.eventName = "preloaderDone", document.createEvent ? document.dispatchEvent(t) : document.fireEvent("on" + t.eventType, t)
                }
            }, preloader.init()
        },
        select: function() {
            window.customSelect = {
                init: function() {
                    this.html = {
                        $elements: $("[data-custom-select]")
                    }, this.render(), this.events()
                },
                render: function() {
                    var n = this;
                    n.html.$elements.each(function() {
                        var t = $(this),
                            e = t.find("select"),
                            s = [];
                        e.find("option").each(function() {
                            var t = $(this),
                                e = t.val(),
                                i = t.text(),
                                n = t.prop("selected");
                            s.push({
                                value: e,
                                text: i,
                                isSelected: n
                            })
                        });
                        var i = n.build(s);
                        t.append(i)
                    })
                },
                build: function(t) {
                    for (var e = "", i = "", n = 0, s = t.length; n < s; n++) {
                        var o = t[n].value,
                            r = t[n].text,
                            a = t[n].isSelected;
                        if (o.length && !a) i += '<button class="custom-select__item" data-select-item-value="' + o + '" data-select-item-text="' + r + '">' + r + "</button>";
                        if (o.length && a) i += '<button class="custom-select__item custom-select__item_hide" data-select-item-value="' + o + '" data-select-item-text="' + r + '">' + r + "</button>";
                        a && ($(this).addClass("custom-select__item_hide"), e = r)
                    }
                    return '<div class="custom-select__outer"><button class="custom-select__head"><div class="custom-select__value">' + e + '</div></button><div class="custom-select__body"><div class="custom-select__list">' + i + "</div></div></div>"
                },
                setActiveItem: function(t, e, i, n) {
                    t.find(".custom-select__value").text(n), e.val(i), this.close(t), e.trigger("change")
                },
                open: function(t) {
                    t.find(".custom-select__body").slideDown(300), t.addClass("custom-select_opened")
                },
                close: function(t) {
                    t.find(".custom-select__body").slideUp(300), t.removeClass("custom-select_opened")
                },
                closeAll: function() {
                    this.html.$elements.each(function() {
                        var t = $(this);
                        t.find(".custom-select__body").slideUp(300), t.removeClass("custom-select_opened")
                    })
                },
                rebuildSelect: function(t) {
                    t.siblings(".custom-select__outer").remove();
                    var e = t.parent(),
                        s = [];
                    t.find("option").each(function() {
                        var t = $(this),
                            e = t.val(),
                            i = t.text(),
                            n = t.prop("selected");
                        s.push({
                            value: e,
                            text: i,
                            isSelected: n
                        })
                    });
                    var i = this.build(s);
                    e.append(i)
                },
                events: function() {
                    var r = this;
                    client.$document.on("click", ".custom-select__head", function(t) {
                        t.preventDefault();
                        var e = $(this).closest("[data-custom-select]");
                        e.hasClass("custom-select_opened") ? r.close(e) : (r.closeAll(), r.open(e))
                    }), client.$document.on("click", "[data-select-item-value]", function(t) {
                        t.preventDefault();
                        var e = $(this),
                            i = e.closest("[data-custom-select]"),
                            n = i.find("select"),
                            s = e.data("select-item-value"),
                            o = e.data("select-item-text");
                        r.setActiveItem(i, n, s, o), setTimeout(function() {
                            e.siblings().removeClass("custom-select__item_hide"), e.addClass("custom-select__item_hide")
                        }, 300)
                    }), client.$document.on("click", function(t) {
                        $(t.target).hasClass("custom-select") || $(t.target).closest(".custom-select").length || r.closeAll()
                    }), r.html.$elements.find("select").on("reinitSelect", function() {
                        var t = $(this);
                        r.rebuildSelect(t)
                    })
                }
            }, customSelect.init()
        },
        forms: function() {
            window.forms = {
                init: function() {
                    var t = forms;
                    t.elements = {
                        $form: $("[data-form]")
                    }, t.elements.$form.find("input, textarea").each(function() {
                        $(this).val().length && $(this).closest(".fieldset").addClass("has-data")
                    }), t.events()
                },
                onSubmit: function(t) {
                    var e = forms,
                        i = t.serializeArray();
                    e.validate(t, i) && e.send(t, i)
                },
                onError: function(t, e) {
                    console.log(e);
                    forms;
                    t.trigger("onerror", [e])
                },
                onSuccess: function(t, e) {
                    console.log(e);
                    forms;
                    t.trigger("onsuccess", [e]), t.find("input").not("[data-no-reset], [type=hidden]").val(""), t.find(".fieldset").removeClass("focus has-error has-data")
                },
                validate: function(t, e) {
                    console.log(e);
                    forms;
                    for (var i = 1, n = {
                            name: function(t) {
                                return 0 < t.length
                            },
                            email: function(t) {
                                return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(t).toLowerCase())
                            },
                            message: function(t) {
                                return 5 < t.length
                            },
                            phone: function(t) {
                                return 5 < t.length
                            },
                            date: function(t) {
                                return 10 === t.length
                            }
                        }, s = e.length; s--;) {
                        var o = e[s],
                            r = o.name,
                            a = t.find("[name='" + r + "']"),
                            l = a.data("required");
                        if (void 0 !== l && !1 !== l) {
                            var c = a.data("field-name"),
                                d = o.value,
                                u = a.closest(".fieldset");
                            n.hasOwnProperty(c) && (n[c](d) ? u.removeClass("has-error") : (i = 0, u.addClass("has-error")))
                        }
                    }
                    var h = t.find('[data-field-name="agreement"]');
                    if (h.length) {
                        u = h.closest(".fieldset");
                        h.prop("checked") ? u.removeClass("has-error") : (i = 0, u.addClass("has-error"))
                    }
                    return t.find('[name="valid"]').val().length && (i = !1), i
                },
                send: function(e, t) {
                    var i = forms;
                    $.ajax({
                        type: e.attr("method"),
                        url: e.attr("action"),
                        data: t,
                        dataType: "json",
                        success: function(t) {
                            t.success ? i.onSuccess(e, t) : i.onError(e, t)
                        },
                        error: function(t) {
                            i.onError(e, t)
                        }
                    })
                },
                events: function() {
                    var i = forms;
                    i.elements.$form.on("submit", function(t) {
                        t.preventDefault();
                        var e = $(this).closest("form");
                        i.onSubmit(e)
                    }), i.elements.$form.find("input, textarea").focus(function() {
                        $(this).closest(".fieldset").removeClass("has-error").addClass("focus")
                    }), i.elements.$form.find("input, textarea").blur(function() {
                        var t = $(this);
                        t.closest(".fieldset").removeClass("focus"), t.val().length ? t.closest(".fieldset").addClass("has-data") : t.closest(".fieldset").removeClass("has-data")
                    }), i.elements.$form.find("input, textarea").on("keyup", function() {
                        $(this).val().length ? $(this).closest(".fieldset").addClass("has-data") : $(this).closest(".fieldset").removeClass("has-data")
                    })
                }
            }, forms.init()
        }
    },
    browserDetecter = function() {
        var t = "unknown";
        !!window.chrome && !e && (t = "chrome"), "undefined" != typeof document && !!document.documentMode && !isEdge && (t = "ie"), void 0 !== window.InstallTrigger && (t = "firefox"), /^((?!chrome|android).)*safari/i.test(navigator.userAgent) && (t = "safari");
        var e = !!window.opera || 0 <= navigator.userAgent.indexOf(" OPR/");
        e && (t = "is_opera"), window.browser = t, $("body").addClass("browser-" + t)
    },
    modules = {
        isInited: !1,
        data: {
            all: []
        },
        init: function() {
            if (!modules.isInited) {
                console.log(modules.data.all), modules.data.all.forEach(function(t) {
                    window[t] = window[t]()
                });
                var t = document.body.getAttribute("data-page");
                if (t) {
                    var e = modules.data[t];
                    e && e.forEach(function(t) {
                        window[t] = window[t]()
                    }), modules.isInited = !0
                }
            }
        },
        add: function(e, t) {
            t ? t.forEach(function(t) {
                modules.data.hasOwnProperty(t) || (modules.data[t] = []), modules.data[t].push(e)
            }) : modules.data.all.push(e)
        }
    },

    

    animations = {
        init: function() {
            var t = animations;
            t.$splitLetters = $("[data-split-letters]"), t.$splitLines = $("[data-split-lines]"), t.prepareElements()
        },
        prepareElements: function() {
            var t = animations;
            t.$splitLetters.each(function() {
                var t = $(this);
                splitLines(t);
                t.find(".line").each(function() {
                    var t = $(this),
                        e = t.text().split(""),
                        n = "",
                        s = 0,
                        o = .5;
                    for (i = 0; i < e.length; i++) {
                        var r = "transition: transform " + (o + .03) + "s ease " + (s + .05) + "s, opacity " + (o + .03) + "s ease " + (s + .05) + "s; -webkit-transition: transform " + (o + .03) + "s ease " + (s + .05) + "s, opacity " + (o + .03) + "s ease " + (s + .05) + "s;";
                        s += .05, o += .03;
                        var a = '<span class="letter" style="' + r + '">' + e[i] + "</span>",
                            l = i + 1;
                        l < e.length && " " == e[l] && (a = '<span class="letter" style="' + r + '">' + e[i] + "&nbsp;</span>"), " " == e[i] && (a = ""), n += a
                    }
                    t.html(n)
                })
            }), t.$splitLines.each(function() {
                splitLines($(this))
            })
        }
    };

function splitLines(t) {
    t.html(function(t, e) {
        return e.replace(/(\S+\s*)/g, "<span>$1</span>")
    });

    var n = 0,
        s = {},
        o = 0,
        r = 0;
    $("span", t).each(function(t, e) {
        o = $(e).offset().top;
        var i = $(this).html();
        n < o && (n = o, s[++r] = []);
        try {
            s[r].push(i)
        } catch (t) {}
    });
    var i = "";
    $.each(s, function(t, e) {
        i += '<span class="line">' + e.join("") + "</span>"
    }), t.html(i)
}
var scrollAnimations = function() {
    var t = $("[data-split-letters], [data-split-lines], .has-animation");
    client.isMobile && $("[data-animation-delay]").each(function() {
        $(this).attr("data-animation-delay", "0")
    });
    var n = client.isMobile ? 1 : 1.2,
        e = function() {
            var i = $(window).scrollTop();
            t.each(function() {
                var t = $(this),
                    e = t.data("animation-delay");
                e && t.offset().top - i < client.windowH / n && !t.hasClass("animation-complete") && setTimeout(function() {
                    t.addClass("animation-complete")
                }, e), !e && t.offset().top - i < client.windowH / n && !t.hasClass("animation-complete") && t.addClass("animation-complete")
            })
        };
    return {
        check: e,
        init: function() {
            $(window).on("scroll", function() {
                e()
            }), setTimeout(function() {
                e()
            }, 200)
        }
    }
};




modules.add("scrollAnimations");
var slickIniter = function() {
    $("[data-slick]").slick()
};
modules.add("slickIniter");
var wowAnimations = function() {
        var t = $("[data-wow-delay]");
        $(".has-animation-start").addClass("animation-complete"), client.isMobile && t.each(function() {
            $(this).attr("data-wow-delay", "0s")
        });
        var e = function() {
            (new WOW).init()
        };
        $("[data-preloader]").length ? setTimeout(function() {
            e()
        }, 4e3) : e()
    },
    parallax = function() {
        if (!client.isMobile) {
            var t = $("[data-parallax]");
            if (t.length) {
                var e = function() {
                    var i = $(window).scrollTop(),
                        n = i;
                    t.each(function() {
                        var t = $(this),
                            e = t.offset().top;
                        i = e - i - client.windowH, t.css({
                            transform: "translate3d(0, " + (n / 7 - client.windowH / 4 + 150) + "px, 1px)"
                        })
                    })
                };
                $(window).on("scroll", function() {
                    e()
                }), $(window).on("resize", function() {
                    e()
                }), e(), setTimeout(function() {
                    e()
                }, 1e3)
            }
        }
    };
modules.add("parallax");
var hoverW = function() {
        var t = $("[data-hover-item]"),
            e = function() {
                t.each(function() {
                    var t = $(this);
                    t.css({
                        width: "auto"
                    });
                    var e = Math.ceil(t.outerWidth(!0)) + 1;
                    t.css({
                        width: e
                    }), t.closest("[data-hover-container]").find("[data-hover-item-fake]").css({
                        width: e
                    })
                })
            };
        e(), $(window).on("resize", function() {
            setTimeout(function() {
                e()
            }, 500)
        })
    },
    headerPanel = function() {
        $("[data-header]");
        var s = $("body"),
            o = $("[data-header-color]"),
            t = "header-fixed",
            r = "header_white",
            e = 0,
            i = function() {
                var n = $(window).scrollTop();
                100 <= n && !e && (s.addClass(t), e = 1), n < 100 && e && (s.removeClass(t), e = 0), $(o.get().reverse()).each(function(t) {
                    if ($(this).offset().top - n - 68 <= 0) {
                        var e = o.length - 1 - t,
                            i = o.eq(e).data("header-color");
                        return console.log(i), "black" === i ? s.addClass(r) : s.removeClass(r), !1
                    }
                })
            };
        $(window).on("scroll resize", i), i()
    };
modules.add("headerPanel");
var menu = function() {
        var t, e, i, n = $("[data-btn-menu]"),
            s = $("[data-panel-menu]"),
            o = $(".header"),
            r = $("body"),
            a = $("html"),
            l = r.find(".btn-make"),
            c = window.innerWidth - document.documentElement.clientWidth,
            d = "panel_active",
            u = "menu-opened",
            h = 0,
            p = function() {
                s.addClass(d), r.addClass(u), h = 1, 1200 < $(window).width() && (e = Number(o.css("padding-right").slice(0, -2)) + Number(c), t = l.css("right").slice(0, -2), i = Number(c) + Number(t), l.css("right", i + "px"), r.css("padding-right", c + "px"), a.css("overflow", "hidden"), o.css("padding-right", e + "px"))
            },
            f = function() {
                s.removeClass(d), r.removeClass(u), $(".panel__sidebar").removeClass("panel__sidebar_menu panel__sidebar_hide-default"), r.removeClass("menu-categories"), $(".menu .nav__link_active").removeClass("nav__link_active"), $(".menu .card_active").removeClass("card_active"), h = 0, 1200 < $(window).width() && (l.css("right", ""), r.css("padding-right", ""), a.css("overflow", "auto"), o.css("padding-right", ""))
            },
            m = function() {
                h ? f() : p()
            };
        return n.on("click", m), {
            open: p,
            close: f
        }
    },
    menuCards = function() {
        var i = $(".menu .card"),
            n = $(".nav__link"),
            s = $(".panel__sidebar"),
            o = "card_active",
            r = "nav__link_active",
            a = "panel__sidebar_active";
        n.on("mousemove", function() {
            if (!$(this).hasClass(r)) {
                var t, e = $(this).closest(".nav__item").index();
                t = e, s.addClass(a), i.removeClass(o).eq(t).addClass(o), n.removeClass(r).eq(t).addClass(r), setTimeout(function() {
                    s.removeClass(a), 0
                }, 700), s.addClass("panel__sidebar_hide-default")
            }
        })
    },
    linkMenu = function() {
        var t = $("[data-link-menu]"),
            e = $(".panel__sidebar"),
            i = $("[data-categories]"),
            n = $("body"),
            s = "menu-categories",
            o = "panel__sidebar_menu";
        t.on("click", function() {
            if (client.isMobile) e.addClass(o), n.addClass(s);
            else {
                menu.close();
                var t = i.offset().top + 100;
                $("html, body").animate({
                    scrollTop: t
                }, 1e3)
            }
        }), $(window).on("resize", function() {
            1200 < $(this).width() && (e.removeClass(o), n.removeClass(s))
        })
    };
modules.add("menu"), modules.add("menuCards"), modules.add("linkMenu");
var instagram = function() {
    var t = $("[data-string]"),
        e = 80 * t.text().length;
    t.marquee({
        duplicated: !0,
        gap: 200,
        duration: e
    })
};
modules.add("instagram");
var reservation = function() {
        var t, e, i, n = $("[data-reservation]"),
            s = $("[data-success]"),
            o = n.find("[data-form]"),
            r = $("[data-reservation-open]"),
            a = $("[data-reservation-close]"),
            l = $("[data-success-close]"),
            c = $("body"),
            d = c.find(".btn-make"),
            u = window.innerWidth - document.documentElement.clientWidth,
            h = $(".header"),
            p = "reservation_active",
            f = "success_active",
            m = function() {
                n.addClass(p), 1, $("body").addClass("fixedPosition"), 1200 < $(window).width() && (e = Number(h.css("padding-right").slice(0, -2)) + Number(u), t = d.css("right").slice(0, -2), i = Number(u) + Number(t), d.css("right", i + "px"), c.css("padding-right", u + "px"), h.css("padding-right", e + "px"))
            },
            g = function() {
                n.removeClass(p), 0, $("body").removeClass("fixedPosition"), 1200 < $(window).width() && (d.css("right", ""), c.css("padding-right", ""), h.css("padding-right", ""))
            },
            v = function() {},
            y = function() {
                g(), s.addClass(f), $("body").addClass("fixedPosition")
            },
            w = function() {
                s.removeClass(f), $("body").removeClass("fixedPosition")
            };
        r.on("click", m), a.on("click", g), o.on("onerror", v), o.on("onsuccess", y), l.on("click", w)
    },
    reservationDate = function() {
        var t = $("[data-datepicker]"),
            e = $("html").attr("lang").toLowerCase();
        $.fn.datepicker.language.en = {
            days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            daysShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
            daysMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
            months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
            monthsShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
            today: "Today",
            clear: "Clear",
            dateFormat: "mm.dd.yyyy",
            timeFormat: "hh:ii aa",
            firstDay: 0
        }, $.fn.datepicker.language.ru = {
            days: ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"],
            daysShort: ["Вос", "Пон", "Вто", "Сре", "Чет", "Пят", "Суб"],
            daysMin: ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"],
            months: ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"],
            monthsShort: ["Янв", "Фев", "Мар", "Апр", "Май", "Июн", "Июл", "Авг", "Сен", "Окт", "Ноя", "Дек"],
            today: "Сегодня",
            clear: "Очистить",
            dateFormat: "dd.mm.yyyy",
            timeFormat: "hh:ii",
            firstDay: 1
        }, $.fn.datepicker.language.ua = {
            days: ["Неділя", "Понеділок", "Вівторок", "Середа", "Четвер", "П'ятница", "Субота"],
            daysShort: ["Ндл", "Пнд", "Втр", "Срд", "Чтв", "Птн", "Сбт"],
            daysMin: ["Нд", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"],
            months: ["Січень", "Лютий", "Березень", "Квітень", "Травень", "Червень", "Липень", "Серпень", "Вересень", "Жовтень", "Листопад", "Грудень"],
            monthsShort: ["Січ", "Лют", "Бер", "Квіт", "Трав", "Черв", "Лип", "Серп", "Вер", "Жовт", "Лист", "Груд"],
            today: "Сьогодні",
            clear: "Очистити",
            dateFormat: "dd.mm.yyyy",
            timeFormat: "hh:ii",
            firstDay: 1
        }, t.datepicker({
            minDate: new Date,
            startDate: new Date,
            autoClose: !0,
            inline: !0,
            language: e
        }), t.data("datepicker").selectDate(new Date)
    },
    choice = function() {
        var i = $("[data-choice]"),
            e = "opened",
            s = "choice__item_active",
            o = function(t) {
                t.removeClass(e)
            },
            n = function() {
                i.removeClass(e)
            };
        ! function() {
            i.each(function() {
                var t = $(this),
                    e = t.find(".choice__item_active");
                if (e.length) {
                    var i = e.find(".choice__button").text();
                    t.find("input").val(i), e.closest(".choice__item").addClass(s)
                }
            });
            var t = $("[data-choice-hr]").val(),
                e = $("[data-choice-min]").val();
            $("[data-choice-time]").val(t + " " + e)
        }(), i.find("input").on("click", function() {
            var t = $(this).closest("[data-choice]");
            t.hasClass(e) ? (n(), o(t)) : (n(), t.addClass(e))
        }), i.find(".choice__button").on("click", function(t) {
            t.preventDefault();
            var e = $(this),
                i = e.closest("[data-choice]");
            i.find(".choice__item").removeClass(s);
            var n = e.text();
            i.find("input").val(n), e.closest(".choice__item").addClass(s), o(i)
        }), $(document).on("click", function(t) {
            $(t.target).closest(".fieldset_choice").length || n()
        }), $("[data-choice-hr], [data-choice-min]").on("change", function() {
            var t = $("[data-choice-hr]").val(),
                e = $("[data-choice-min]").val();
            $("[data-choice-time]").val(t + ", " + e)
        })
    };
modules.add("reservation"), modules.add("reservationDate", ["about", "contacts", "carte", "main", "media"]), modules.add("choice");
var blanket = function() {
    var t = $("[data-blanket]"),
        e = "blanket_active",
        i = function() {
            t.removeClass(e)
        },
        n = function() {
            $(window).width() < 820 && $(window).width() > $(window).height() ? t.addClass(e) : i()
        };
    $(window).on("resize orientationchange", function() {
        n()
    }), n()
};
modules.add("blanket");
var preloader = function() {
    var t = $("[data-preloader]");
    setTimeout(function() {
        t.addClass("preloader_active")
    }, 500)
};
modules.add("preloader");
var mediaPackeryIniter = function() {
        var t = $(".instagram__list[data-packery]");
        setTimeout(function() {
            t.packery()
        }, 500)
    },
    poster = function() {
        if (client.isMobile) {
            var t, e, i = $("[data-poster]"),
                n = function() {
                    t = window.innerHeight, 767 < (e = window.innerWidth) && e < 1201 && (t = "auto"), i.css({
                        height: t
                    })
                };
            window.addEventListener("resize orientationchange", function() {
                setTimeout(function() {
                    n()
                }, 500)
            }), n()
        }
    },
    posterSlider = function() {
        var t = $(".poster__slider[data-slick]");
        $("[data-preloader]").length && (t.slick("slickPause"), setTimeout(function() {
            t.slick("slickPlay")
        }, 4e3))
    };
modules.add("poster", ["main"]), modules.add("posterSlider", ["main"]);
var mainVideo = function() {
    var t, e = $("[data-main-video]"),
        i = e.find(".play"),
        n = e.find(".video__iframe"),
        s = "video_active",
        o = n.data("src"),
        r = client.isMobile,
        a = function() {
            e.addClass(s), n.attr("src", o)
        },
        l = function() {
            r || (t = setTimeout(function() {
                a()
            }, 2e3))
        },
        c = function() {
            clearTimeout(t)
        };
    i.on("mouseenter", l), i.on("mouseleave", c), i.on("click", function() {
        r && a()
    }), $(window).on("resize", function() {
        var t = $(this).width();
        r = t < 1201 ? 1 : 0
    })
};
modules.add("mainVideo", ["main"]);
var langs = function() {
    if (!client.isMobile) {
        var e = $("[data-langs]"),
            i = "langs_hidden",
            n = 1,
            t = function() {
                var t = $(window).scrollTop();
                if (150 < t && n) return e.addClass(i), void(n = 0);
                t < 150 && !n && (e.removeClass(i), n = 1)
            };
        $(window).on("scroll", function() {
            t()
        })
    }
};
modules.add("langs", ["main"]);
var categories = function() {
    if (!client.isMobile) {
        var i = $("[data-categories]");
        if (i.length) {
            var n = i.find(".card").eq(0),
                s = i.find(".card").eq(1),
                o = i.offset().top,
                t = function() {
                    var t = $(window).scrollTop(),
                        e = (o = i.offset().top) - t - client.windowH;
                    e < 0 && e > -i.height() - client.windowH - 200 && (console.log(o - t - client.windowH), n.css({
                        transform: "translate3d(0, " + (e / 8 + client.windowH / 5) + "px, 1px)"
                    }), s.css({
                        transform: "translate3d(0, " + (e / 3 + client.windowH / 3) + "px, 1px)"
                    }))
                };
            $(window).on("scroll", function() {
                t()
            }), $(window).on("resize", function() {
                o = i.offset().top, t()
            }), t()
        }
    }
};
modules.add("categories", ["main"]);
var mainNav = function() {
    var e = $("[data-nav]").find(".card"),
        t = $("[data-nav-section]"),
        i = "card_active",
        n = [],
        s = function() {
            var i = $(window).scrollTop();
            n.forEach(function(t, e) {
                if (i + client.windowH / 2 >= t) return o(e), !1
            })
        },
        o = function(t) {
            e.removeClass(i).eq(t).addClass(i)
        },
        r = function() {
            n = [], t.each(function(t) {
                var e = $(this).offset().top;
                n.push(e)
            })
        };
    setInterval(function() {
        r()
    }, 2e3), $(window).on("scroll", function() {
        s()
    }), $(window).on("resize", function() {
        r(), s()
    }), r(), s()
};
modules.add("mainNav", ["main"]);
var carte = function() {
    if (!client.isMobile) {
        var e = $(".about__slider, .about__link"),
            i = $("[data-footer]").height(),
            n = function(t) {
                e.css({
                    transform: "translate3d(0, -" + t + "px, -1px) translateZ(1px)"
                })
            },
            t = function() {
                var t = $(window).scrollTop(),
                    e = $(document).height() - client.windowH - i;
                n(e < t ? t - e : 0)
            };
        t(), $(window).on("scroll", function() {
            t()
        }), $(window).on("resize", function() {
            t()
        })
    }
};
modules.add("carte", ["carte"]);
mediaPackeryIniter = function() {
    var t = $(".instagram__list[data-packery]");
    setTimeout(function() {
        t.packery()
    }, 500)
};
var aboutSlider = function() {
    var t, e = $("[data-about-slider]"),
        i = $("[data-slider-arrow-prev]"),
        n = $("[data-slider-arrow-next]"),
        s = i.find(".arrow__field"),
        o = n.find(".arrow__field"),
        r = i.find(".arrow__btn"),
        a = n.find(".arrow__btn");
    (t = e.data("about-slider")).prevArrow = i, t.nextArrow = n, e.slick(t), s.on("mousemove", function(t) {
        var e = $(this).offset(),
            i = t.pageX - e.left,
            n = t.pageY - e.top,
            s = i - 50;
        0 <= s ? Math.sqrt(s) : Math.sqrt(-1 * s);
        var o = n - 50;
        0 <= o ? (diry = 1, Math.sqrt(o)) : (diry = -1, Math.sqrt(-1 * o)), r.css({
            "-webkit-transform": "translate3d(" + s / 3 + "px, " + o / 3 + "px, 1px)",
            "-moz-transform": "translate3d(" + s / 3 + "px, " + o / 3 + "px, 1px)",
            transform: "translate3d(" + s / 3 + "px, " + o / 3 + "px, 1px)"
        })
    }), s.on("mouseleave", function() {
        r.css({
            "-webkit-transform": "translate3d(0px, 0px, 1px)",
            "-moz-transform": "translate3d(0px, 0px, 1px)",
            transform: "translate3d(0px, 0px, 1px)"
        })
    }), o.on("mousemove", function(t) {
        var e = $(this).offset(),
            i = t.pageX - e.left,
            n = t.pageY - e.top,
            s = i - 50;
        0 <= s ? Math.sqrt(s) : Math.sqrt(-1 * s);
        var o = n - 50;
        0 <= o ? (diry = 1, Math.sqrt(o)) : (diry = -1, Math.sqrt(-1 * o)), a.css({
            "-webkit-transform": "translate3d(" + s / 3 + "px, " + o / 3 + "px, 1px)",
            "-moz-transform": "translate3d(" + s / 3 + "px, " + o / 3 + "px, 1px)",
            transform: "translate3d(" + s / 3 + "px, " + o / 3 + "px, 1px)"
        })
    }), o.on("mouseleave", function() {
        a.css({
            "-webkit-transform": "translate3d(0px, 0px, 1px)",
            "-moz-transform": "translate3d(0px, 0px, 1px)",
            transform: "translate3d(0px, 0px, 1px)"
        })
    })
};
modules.add("aboutSlider", ["about", "main"]);
var cursor = function() {
    var e, i, n = $("[data-custom-cursor]"),
        t = $("a, button");
    $(window).on("mousemove", function(t) {
        e = t.clientX, i = t.clientY, n.css("transform", "matrix(1, 0, 0, 1, " + e + ", " + i + ")")
    }), t.on("mouseenter", function() {
        n.addClass("custom-cursor_active")
    }), t.on("mouseleave", function() {
        n.removeClass("custom-cursor_active")
    })
};
modules.add("cursor");
var app = {
    init: function() {
        tools.init(["backgrounds", "forms"]), browserDetecter(), modules.init(), wowAnimations(), mediaPackeryIniter()
    }
};
"ready" == document.fonts.status ? 1201 <= window.innerWidth && hoverW() : document.fonts.ready.then(function() {
    1201 <= window.innerWidth && hoverW()
}), $(document).ready(function() {
    app.init(), animations.init(), $("[data-preloader]").length ? setTimeout(function() {
        scrollAnimations.init()
    }, 4e3) : scrollAnimations.init()
});