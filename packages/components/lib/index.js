!(function (t, e) {
  "object" == typeof exports && "object" == typeof module
    ? (module.exports = e())
    : "function" == typeof define && define.amd
    ? define("GRGCOMPONENTS", [], e)
    : "object" == typeof exports
    ? (exports.GRGCOMPONENTS = e())
    : (t.GRGCOMPONENTS = e());
})(self, function () {
  return (() => {
    var t = {
        2782: (t, e, r) => {
          "use strict";
          r.d(e, { default: () => b }), r(8695), r(6936), r(1939);
          var n = function () {
            var t = this,
              e = t.$createElement,
              r = t._self._c || e;
            return r("transition", { attrs: { name: t.transitionName } }, [
              r(
                "div",
                {
                  directives: [
                    {
                      name: "show",
                      rawName: "v-show",
                      value: t.visible,
                      expression: "visible",
                    },
                  ],
                  staticClass: "back-to-ceiling",
                  style: t.customStyle,
                  on: { click: t.backToTop },
                },
                [
                  r(
                    "svg",
                    {
                      staticClass: "Icon Icon--backToTopArrow",
                      staticStyle: { height: "16px", width: "16px" },
                      attrs: {
                        width: "16",
                        height: "16",
                        viewBox: "0 0 17 17",
                        xmlns: "http://www.w3.org/2000/svg",
                        "aria-hidden": "true",
                      },
                    },
                    [
                      r("path", {
                        attrs: {
                          d:
                            "M12.036 15.59a1 1 0 0 1-.997.995H5.032a.996.996 0 0 1-.997-.996V8.584H1.03c-1.1 0-1.36-.633-.578-1.416L7.33.29a1.003 1.003 0 0 1 1.412 0l6.878 6.88c.782.78.523 1.415-.58 1.415h-3.004v7.004z",
                        },
                      }),
                    ]
                  ),
                ]
              ),
            ]);
          };
          (n._withStripped = !0), r(1245);
          const o = {
            name: "SBackToTop",
            props: {
              visibilityHeight: { type: Number, default: 400 },
              backPosition: { type: Number, default: 0 },
              customStyle: {
                type: Object,
                default: function () {
                  return {
                    right: "50px",
                    bottom: "50px",
                    width: "40px",
                    height: "40px",
                    "border-radius": "4px",
                    "line-height": "45px",
                    background: "#e7eaf1",
                  };
                },
              },
              transitionName: { type: String, default: "fade" },
              appendTo: { type: String, default: "" },
            },
            data: function () {
              return (
                (this.appendToEl = window),
                { visible: !1, interval: null, isMoving: !1 }
              );
            },
            mounted: function () {
              (window.__bt = this),
                this.appendTo &&
                  (this.appendToEl = document.querySelector(this.appendTo)),
                this.appendToEl.addEventListener("scroll", this.handleScroll);
            },
            beforeDestroy: function () {
              this.appendToEl.removeEventListener("scroll", this.handleScroll),
                this.interval && clearInterval(this.interval);
            },
            methods: {
              handleScroll: function () {
                var t =
                  this.appendToEl instanceof Window
                    ? this.appendToEl.pageYOffset
                    : this.appendToEl.scrollTop;
                this.visible = t > this.visibilityHeight;
              },
              backToTop: function () {
                var t = this;
                if (!this.isMoving) {
                  var e =
                      this.appendToEl instanceof Window
                        ? this.appendToEl.pageYOffset
                        : this.appendToEl.scrollTop,
                    r = 0;
                  (this.isMoving = !0),
                    (this.interval = setInterval(function () {
                      var n = Math.floor(t.easeInOutQuad(10 * r, e, -e, 500));
                      n <= t.backPosition
                        ? (t.appendToEl.scrollTo(0, t.backPosition),
                          clearInterval(t.interval),
                          (t.isMoving = !1))
                        : t.appendToEl.scrollTo(0, n),
                        r++;
                    }, 16.7));
                }
              },
              easeInOutQuad: function (t, e, r, n) {
                return (t /= n / 2) < 1
                  ? (r / 2) * t * t + e
                  : (-r / 2) * (--t * (t - 2) - 1) + e;
              },
            },
          };
          var i = r(6062),
            a = r.n(i),
            c = r(3271);
          function s(t, e, r, n, o, i, a, c) {
            var s,
              u = "function" == typeof t ? t.options : t;
            if (
              (e &&
                ((u.render = e), (u.staticRenderFns = r), (u._compiled = !0)),
              n && (u.functional = !0),
              i && (u._scopeId = "data-v-" + i),
              a
                ? ((s = function (t) {
                    (t =
                      t ||
                      (this.$vnode && this.$vnode.ssrContext) ||
                      (this.parent &&
                        this.parent.$vnode &&
                        this.parent.$vnode.ssrContext)) ||
                      "undefined" == typeof __VUE_SSR_CONTEXT__ ||
                      (t = __VUE_SSR_CONTEXT__),
                      o && o.call(this, t),
                      t &&
                        t._registeredComponents &&
                        t._registeredComponents.add(a);
                  }),
                  (u._ssrRegister = s))
                : o &&
                  (s = c
                    ? function () {
                        o.call(
                          this,
                          (u.functional ? this.parent : this).$root.$options
                            .shadowRoot
                        );
                      }
                    : o),
              s)
            )
              if (u.functional) {
                u._injectStyles = s;
                var f = u.render;
                u.render = function (t, e) {
                  return s.call(e), f(t, e);
                };
              } else {
                var l = u.beforeCreate;
                u.beforeCreate = l ? [].concat(l, s) : [s];
              }
            return { exports: t, options: u };
          }
          a()(c.Z, { insert: "head", singleton: !1 }), c.Z.locals;
          var u = s(o, n, [], !1, null, "3a8f819e", null);
          u.options.__file = "src/backto-top/src/backto-top.vue";
          const f = u.exports;
          f.install = function (t) {
            t.component(f.name, f);
          };
          const l = f;
          var p = function () {
            var t = this,
              e = t.$createElement,
              r = t._self._c || e;
            return r("div", [
              r("h1", [t._v("\n    " + t._s(t.$t("hello")) + "\n  ")]),
              t._v(" "),
              r("h2", [t._v("\n    " + t._s(this.$t("hello")) + "\n  ")]),
            ]);
          };
          p._withStripped = !0;
          var d = s(
            {
              name: "HelloWorld",
              beforeCreate: function () {
                console.log("beforeCreate", (window.__hw = this));
              },
              created: function () {
                console.log(this);
              },
            },
            p,
            [],
            !1,
            null,
            null,
            null
          );
          d.options.__file = "src/hello-world/src/hello-world.vue";
          const v = d.exports;
          v.install = function (t) {
            t.component(v.name, v);
          };
          const h = v;
          var y = [l, h],
            g = function (t) {
              y.forEach(function (e) {
                t.component(e.name, e);
              });
            };
          "undefined" != typeof window && window.Vue && g(window.Vue);
          const b = {
            version: "0.7.0",
            install: g,
            BacktoTop: l,
            HelloWorld: h,
          };
        },
        3819: (t) => {
          t.exports = function (t) {
            if ("function" != typeof t)
              throw TypeError(String(t) + " is not a function");
            return t;
          };
        },
        8505: (t, e, r) => {
          var n = r(5052);
          t.exports = function (t) {
            if (!n(t) && null !== t)
              throw TypeError("Can't set " + String(t) + " as a prototype");
            return t;
          };
        },
        1176: (t, e, r) => {
          var n = r(5052);
          t.exports = function (t) {
            if (!n(t)) throw TypeError(String(t) + " is not an object");
            return t;
          };
        },
        6570: (t, e, r) => {
          "use strict";
          var n = r(9996).forEach,
            o = r(6038),
            i = r(3037),
            a = o("forEach"),
            c = i("forEach");
          t.exports =
            a && c
              ? [].forEach
              : function (t) {
                  return n(
                    this,
                    t,
                    arguments.length > 1 ? arguments[1] : void 0
                  );
                };
        },
        9540: (t, e, r) => {
          var n = r(905),
            o = r(4237),
            i = r(3231),
            a = function (t) {
              return function (e, r, a) {
                var c,
                  s = n(e),
                  u = o(s.length),
                  f = i(a, u);
                if (t && r != r) {
                  for (; u > f; ) if ((c = s[f++]) != c) return !0;
                } else
                  for (; u > f; f++)
                    if ((t || f in s) && s[f] === r) return t || f || 0;
                return !t && -1;
              };
            };
          t.exports = { includes: a(!0), indexOf: a(!1) };
        },
        9996: (t, e, r) => {
          var n = r(7636),
            o = r(9337),
            i = r(2991),
            a = r(4237),
            c = r(7501),
            s = [].push,
            u = function (t) {
              var e = 1 == t,
                r = 2 == t,
                u = 3 == t,
                f = 4 == t,
                l = 6 == t,
                p = 7 == t,
                d = 5 == t || l;
              return function (v, h, y, g) {
                for (
                  var b,
                    m,
                    x = i(v),
                    S = o(x),
                    w = n(h, y, 3),
                    T = a(S.length),
                    E = 0,
                    O = g || c,
                    _ = e ? O(v, T) : r || p ? O(v, 0) : void 0;
                  T > E;
                  E++
                )
                  if ((d || E in S) && ((m = w((b = S[E]), E, x)), t))
                    if (e) _[E] = m;
                    else if (m)
                      switch (t) {
                        case 3:
                          return !0;
                        case 5:
                          return b;
                        case 6:
                          return E;
                        case 2:
                          s.call(_, b);
                      }
                    else
                      switch (t) {
                        case 4:
                          return !1;
                        case 7:
                          s.call(_, b);
                      }
                return l ? -1 : u || f ? f : _;
              };
            };
          t.exports = {
            forEach: u(0),
            map: u(1),
            filter: u(2),
            some: u(3),
            every: u(4),
            find: u(5),
            findIndex: u(6),
            filterOut: u(7),
          };
        },
        6038: (t, e, r) => {
          "use strict";
          var n = r(4229);
          t.exports = function (t, e) {
            var r = [][t];
            return (
              !!r &&
              n(function () {
                r.call(
                  null,
                  e ||
                    function () {
                      throw 1;
                    },
                  1
                );
              })
            );
          };
        },
        3037: (t, e, r) => {
          var n = r(7400),
            o = r(4229),
            i = r(816),
            a = Object.defineProperty,
            c = {},
            s = function (t) {
              throw t;
            };
          t.exports = function (t, e) {
            if (i(c, t)) return c[t];
            e || (e = {});
            var r = [][t],
              u = !!i(e, "ACCESSORS") && e.ACCESSORS,
              f = i(e, 0) ? e[0] : s,
              l = i(e, 1) ? e[1] : void 0;
            return (c[t] =
              !!r &&
              !o(function () {
                if (u && !n) return !0;
                var t = { length: -1 };
                u ? a(t, 1, { enumerable: !0, get: s }) : (t[1] = 1),
                  r.call(t, f, l);
              }));
          };
        },
        7501: (t, e, r) => {
          var n = r(5052),
            o = r(3718),
            i = r(95)("species");
          t.exports = function (t, e) {
            var r;
            return (
              o(t) &&
                ("function" != typeof (r = t.constructor) ||
                (r !== Array && !o(r.prototype))
                  ? n(r) && null === (r = r[i]) && (r = void 0)
                  : (r = void 0)),
              new (void 0 === r ? Array : r)(0 === e ? 0 : e)
            );
          };
        },
        7079: (t) => {
          var e = {}.toString;
          t.exports = function (t) {
            return e.call(t).slice(8, -1);
          };
        },
        7081: (t, e, r) => {
          var n = r(816),
            o = r(4826),
            i = r(7933),
            a = r(1787);
          t.exports = function (t, e) {
            for (var r = o(e), c = a.f, s = i.f, u = 0; u < r.length; u++) {
              var f = r[u];
              n(t, f) || c(t, f, s(e, f));
            }
          };
        },
        5762: (t, e, r) => {
          var n = r(7400),
            o = r(1787),
            i = r(5358);
          t.exports = n
            ? function (t, e, r) {
                return o.f(t, e, i(1, r));
              }
            : function (t, e, r) {
                return (t[e] = r), t;
              };
        },
        5358: (t) => {
          t.exports = function (t, e) {
            return {
              enumerable: !(1 & t),
              configurable: !(2 & t),
              writable: !(4 & t),
              value: e,
            };
          };
        },
        7400: (t, e, r) => {
          var n = r(4229);
          t.exports = !n(function () {
            return (
              7 !=
              Object.defineProperty({}, 1, {
                get: function () {
                  return 7;
                },
              })[1]
            );
          });
        },
        2635: (t, e, r) => {
          var n = r(9859),
            o = r(5052),
            i = n.document,
            a = o(i) && o(i.createElement);
          t.exports = function (t) {
            return a ? i.createElement(t) : {};
          };
        },
        5694: (t) => {
          t.exports = {
            CSSRuleList: 0,
            CSSStyleDeclaration: 0,
            CSSValueList: 0,
            ClientRectList: 0,
            DOMRectList: 0,
            DOMStringList: 0,
            DOMTokenList: 1,
            DataTransferItemList: 0,
            FileList: 0,
            HTMLAllCollection: 0,
            HTMLCollection: 0,
            HTMLFormElement: 0,
            HTMLSelectElement: 0,
            MediaList: 0,
            MimeTypeArray: 0,
            NamedNodeMap: 0,
            NodeList: 1,
            PaintRequestList: 0,
            Plugin: 0,
            PluginArray: 0,
            SVGLengthList: 0,
            SVGNumberList: 0,
            SVGPathSegList: 0,
            SVGPointList: 0,
            SVGStringList: 0,
            SVGTransformList: 0,
            SourceBufferList: 0,
            StyleSheetList: 0,
            TextTrackCueList: 0,
            TextTrackList: 0,
            TouchList: 0,
          };
        },
        3837: (t) => {
          t.exports = [
            "constructor",
            "hasOwnProperty",
            "isPrototypeOf",
            "propertyIsEnumerable",
            "toLocaleString",
            "toString",
            "valueOf",
          ];
        },
        3103: (t, e, r) => {
          var n = r(9859),
            o = r(7933).f,
            i = r(5762),
            a = r(7487),
            c = r(2079),
            s = r(7081),
            u = r(6541);
          t.exports = function (t, e) {
            var r,
              f,
              l,
              p,
              d,
              v = t.target,
              h = t.global,
              y = t.stat;
            if ((r = h ? n : y ? n[v] || c(v, {}) : (n[v] || {}).prototype))
              for (f in e) {
                if (
                  ((p = e[f]),
                  (l = t.noTargetGet ? (d = o(r, f)) && d.value : r[f]),
                  !u(h ? f : v + (y ? "." : "#") + f, t.forced) && void 0 !== l)
                ) {
                  if (typeof p == typeof l) continue;
                  s(p, l);
                }
                (t.sham || (l && l.sham)) && i(p, "sham", !0), a(r, f, p, t);
              }
          };
        },
        4229: (t) => {
          t.exports = function (t) {
            try {
              return !!t();
            } catch (t) {
              return !0;
            }
          };
        },
        7636: (t, e, r) => {
          var n = r(3819);
          t.exports = function (t, e, r) {
            if ((n(t), void 0 === e)) return t;
            switch (r) {
              case 0:
                return function () {
                  return t.call(e);
                };
              case 1:
                return function (r) {
                  return t.call(e, r);
                };
              case 2:
                return function (r, n) {
                  return t.call(e, r, n);
                };
              case 3:
                return function (r, n, o) {
                  return t.call(e, r, n, o);
                };
            }
            return function () {
              return t.apply(e, arguments);
            };
          };
        },
        1333: (t, e, r) => {
          var n = r(9276),
            o = r(9859),
            i = function (t) {
              return "function" == typeof t ? t : void 0;
            };
          t.exports = function (t, e) {
            return arguments.length < 2
              ? i(n[t]) || i(o[t])
              : (n[t] && n[t][e]) || (o[t] && o[t][e]);
          };
        },
        9859: (t, e, r) => {
          var n = function (t) {
            return t && t.Math == Math && t;
          };
          t.exports =
            n("object" == typeof globalThis && globalThis) ||
            n("object" == typeof window && window) ||
            n("object" == typeof self && self) ||
            n("object" == typeof r.g && r.g) ||
            (function () {
              return this;
            })() ||
            Function("return this")();
        },
        816: (t) => {
          var e = {}.hasOwnProperty;
          t.exports = function (t, r) {
            return e.call(t, r);
          };
        },
        5977: (t) => {
          t.exports = {};
        },
        3777: (t, e, r) => {
          var n = r(1333);
          t.exports = n("document", "documentElement");
        },
        4394: (t, e, r) => {
          var n = r(7400),
            o = r(4229),
            i = r(2635);
          t.exports =
            !n &&
            !o(function () {
              return (
                7 !=
                Object.defineProperty(i("div"), "a", {
                  get: function () {
                    return 7;
                  },
                }).a
              );
            });
        },
        9337: (t, e, r) => {
          var n = r(4229),
            o = r(7079),
            i = "".split;
          t.exports = n(function () {
            return !Object("z").propertyIsEnumerable(0);
          })
            ? function (t) {
                return "String" == o(t) ? i.call(t, "") : Object(t);
              }
            : Object;
        },
        835: (t, e, r) => {
          var n = r(5052),
            o = r(6540);
          t.exports = function (t, e, r) {
            var i, a;
            return (
              o &&
                "function" == typeof (i = e.constructor) &&
                i !== r &&
                n((a = i.prototype)) &&
                a !== r.prototype &&
                o(t, a),
              t
            );
          };
        },
        8511: (t, e, r) => {
          var n = r(5353),
            o = Function.toString;
          "function" != typeof n.inspectSource &&
            (n.inspectSource = function (t) {
              return o.call(t);
            }),
            (t.exports = n.inspectSource);
        },
        6407: (t, e, r) => {
          var n,
            o,
            i,
            a = r(8694),
            c = r(9859),
            s = r(5052),
            u = r(5762),
            f = r(816),
            l = r(5353),
            p = r(4399),
            d = r(5977),
            v = c.WeakMap;
          if (a) {
            var h = l.state || (l.state = new v()),
              y = h.get,
              g = h.has,
              b = h.set;
            (n = function (t, e) {
              return (e.facade = t), b.call(h, t, e), e;
            }),
              (o = function (t) {
                return y.call(h, t) || {};
              }),
              (i = function (t) {
                return g.call(h, t);
              });
          } else {
            var m = p("state");
            (d[m] = !0),
              (n = function (t, e) {
                return (e.facade = t), u(t, m, e), e;
              }),
              (o = function (t) {
                return f(t, m) ? t[m] : {};
              }),
              (i = function (t) {
                return f(t, m);
              });
          }
          t.exports = {
            set: n,
            get: o,
            has: i,
            enforce: function (t) {
              return i(t) ? o(t) : n(t, {});
            },
            getterFor: function (t) {
              return function (e) {
                var r;
                if (!s(e) || (r = o(e)).type !== t)
                  throw TypeError("Incompatible receiver, " + t + " required");
                return r;
              };
            },
          };
        },
        3718: (t, e, r) => {
          var n = r(7079);
          t.exports =
            Array.isArray ||
            function (t) {
              return "Array" == n(t);
            };
        },
        6541: (t, e, r) => {
          var n = r(4229),
            o = /#|\.prototype\./,
            i = function (t, e) {
              var r = c[a(t)];
              return (
                r == u || (r != s && ("function" == typeof e ? n(e) : !!e))
              );
            },
            a = (i.normalize = function (t) {
              return String(t).replace(o, ".").toLowerCase();
            }),
            c = (i.data = {}),
            s = (i.NATIVE = "N"),
            u = (i.POLYFILL = "P");
          t.exports = i;
        },
        5052: (t) => {
          t.exports = function (t) {
            return "object" == typeof t ? null !== t : "function" == typeof t;
          };
        },
        4231: (t) => {
          t.exports = !1;
        },
        3839: (t, e, r) => {
          var n = r(4229);
          t.exports =
            !!Object.getOwnPropertySymbols &&
            !n(function () {
              return !String(Symbol());
            });
        },
        8694: (t, e, r) => {
          var n = r(9859),
            o = r(8511),
            i = n.WeakMap;
          t.exports = "function" == typeof i && /native code/.test(o(i));
        },
        2391: (t, e, r) => {
          var n,
            o = r(1176),
            i = r(219),
            a = r(3837),
            c = r(5977),
            s = r(3777),
            u = r(2635),
            f = r(4399)("IE_PROTO"),
            l = function () {},
            p = function (t) {
              return "<script>" + t + "</script>";
            },
            d = function () {
              try {
                n = document.domain && new ActiveXObject("htmlfile");
              } catch (t) {}
              var t, e;
              d = n
                ? (function (t) {
                    t.write(p("")), t.close();
                    var e = t.parentWindow.Object;
                    return (t = null), e;
                  })(n)
                : (((e = u("iframe")).style.display = "none"),
                  s.appendChild(e),
                  (e.src = String("javascript:")),
                  (t = e.contentWindow.document).open(),
                  t.write(p("document.F=Object")),
                  t.close(),
                  t.F);
              for (var r = a.length; r--; ) delete d.prototype[a[r]];
              return d();
            };
          (c[f] = !0),
            (t.exports =
              Object.create ||
              function (t, e) {
                var r;
                return (
                  null !== t
                    ? ((l.prototype = o(t)),
                      (r = new l()),
                      (l.prototype = null),
                      (r[f] = t))
                    : (r = d()),
                  void 0 === e ? r : i(r, e)
                );
              });
        },
        219: (t, e, r) => {
          var n = r(7400),
            o = r(1787),
            i = r(1176),
            a = r(5632);
          t.exports = n
            ? Object.defineProperties
            : function (t, e) {
                i(t);
                for (var r, n = a(e), c = n.length, s = 0; c > s; )
                  o.f(t, (r = n[s++]), e[r]);
                return t;
              };
        },
        1787: (t, e, r) => {
          var n = r(7400),
            o = r(4394),
            i = r(1176),
            a = r(2066),
            c = Object.defineProperty;
          e.f = n
            ? c
            : function (t, e, r) {
                if ((i(t), (e = a(e, !0)), i(r), o))
                  try {
                    return c(t, e, r);
                  } catch (t) {}
                if ("get" in r || "set" in r)
                  throw TypeError("Accessors not supported");
                return "value" in r && (t[e] = r.value), t;
              };
        },
        7933: (t, e, r) => {
          var n = r(7400),
            o = r(9195),
            i = r(5358),
            a = r(905),
            c = r(2066),
            s = r(816),
            u = r(4394),
            f = Object.getOwnPropertyDescriptor;
          e.f = n
            ? f
            : function (t, e) {
                if (((t = a(t)), (e = c(e, !0)), u))
                  try {
                    return f(t, e);
                  } catch (t) {}
                if (s(t, e)) return i(!o.f.call(t, e), t[e]);
              };
        },
        8151: (t, e, r) => {
          var n = r(140),
            o = r(3837).concat("length", "prototype");
          e.f =
            Object.getOwnPropertyNames ||
            function (t) {
              return n(t, o);
            };
        },
        894: (t, e) => {
          e.f = Object.getOwnPropertySymbols;
        },
        140: (t, e, r) => {
          var n = r(816),
            o = r(905),
            i = r(9540).indexOf,
            a = r(5977);
          t.exports = function (t, e) {
            var r,
              c = o(t),
              s = 0,
              u = [];
            for (r in c) !n(a, r) && n(c, r) && u.push(r);
            for (; e.length > s; )
              n(c, (r = e[s++])) && (~i(u, r) || u.push(r));
            return u;
          };
        },
        5632: (t, e, r) => {
          var n = r(140),
            o = r(3837);
          t.exports =
            Object.keys ||
            function (t) {
              return n(t, o);
            };
        },
        9195: (t, e) => {
          "use strict";
          var r = {}.propertyIsEnumerable,
            n = Object.getOwnPropertyDescriptor,
            o = n && !r.call({ 1: 2 }, 1);
          e.f = o
            ? function (t) {
                var e = n(this, t);
                return !!e && e.enumerable;
              }
            : r;
        },
        6540: (t, e, r) => {
          var n = r(1176),
            o = r(8505);
          t.exports =
            Object.setPrototypeOf ||
            ("__proto__" in {}
              ? (function () {
                  var t,
                    e = !1,
                    r = {};
                  try {
                    (t = Object.getOwnPropertyDescriptor(
                      Object.prototype,
                      "__proto__"
                    ).set).call(r, []),
                      (e = r instanceof Array);
                  } catch (t) {}
                  return function (r, i) {
                    return n(r), o(i), e ? t.call(r, i) : (r.__proto__ = i), r;
                  };
                })()
              : void 0);
        },
        4826: (t, e, r) => {
          var n = r(1333),
            o = r(8151),
            i = r(894),
            a = r(1176);
          t.exports =
            n("Reflect", "ownKeys") ||
            function (t) {
              var e = o.f(a(t)),
                r = i.f;
              return r ? e.concat(r(t)) : e;
            };
        },
        9276: (t, e, r) => {
          var n = r(9859);
          t.exports = n;
        },
        7487: (t, e, r) => {
          var n = r(9859),
            o = r(5762),
            i = r(816),
            a = r(2079),
            c = r(8511),
            s = r(6407),
            u = s.get,
            f = s.enforce,
            l = String(String).split("String");
          (t.exports = function (t, e, r, c) {
            var s,
              u = !!c && !!c.unsafe,
              p = !!c && !!c.enumerable,
              d = !!c && !!c.noTargetGet;
            "function" == typeof r &&
              ("string" != typeof e || i(r, "name") || o(r, "name", e),
              (s = f(r)).source ||
                (s.source = l.join("string" == typeof e ? e : ""))),
              t !== n
                ? (u ? !d && t[e] && (p = !0) : delete t[e],
                  p ? (t[e] = r) : o(t, e, r))
                : p
                ? (t[e] = r)
                : a(e, r);
          })(Function.prototype, "toString", function () {
            return ("function" == typeof this && u(this).source) || c(this);
          });
        },
        8885: (t) => {
          t.exports = function (t) {
            if (null == t) throw TypeError("Can't call method on " + t);
            return t;
          };
        },
        2079: (t, e, r) => {
          var n = r(9859),
            o = r(5762);
          t.exports = function (t, e) {
            try {
              o(n, t, e);
            } catch (r) {
              n[t] = e;
            }
            return e;
          };
        },
        4399: (t, e, r) => {
          var n = r(3036),
            o = r(1441),
            i = n("keys");
          t.exports = function (t) {
            return i[t] || (i[t] = o(t));
          };
        },
        5353: (t, e, r) => {
          var n = r(9859),
            o = r(2079),
            i = "__core-js_shared__",
            a = n[i] || o(i, {});
          t.exports = a;
        },
        3036: (t, e, r) => {
          var n = r(4231),
            o = r(5353);
          (t.exports = function (t, e) {
            return o[t] || (o[t] = void 0 !== e ? e : {});
          })("versions", []).push({
            version: "3.8.1",
            mode: n ? "pure" : "global",
            copyright: "© 2020 Denis Pushkarev (zloirock.ru)",
          });
        },
        1017: (t, e, r) => {
          var n = r(8885),
            o = "[" + r(1647) + "]",
            i = RegExp("^" + o + o + "*"),
            a = RegExp(o + o + "*$"),
            c = function (t) {
              return function (e) {
                var r = String(n(e));
                return (
                  1 & t && (r = r.replace(i, "")),
                  2 & t && (r = r.replace(a, "")),
                  r
                );
              };
            };
          t.exports = { start: c(1), end: c(2), trim: c(3) };
        },
        3231: (t, e, r) => {
          var n = r(6051),
            o = Math.max,
            i = Math.min;
          t.exports = function (t, e) {
            var r = n(t);
            return r < 0 ? o(r + e, 0) : i(r, e);
          };
        },
        905: (t, e, r) => {
          var n = r(9337),
            o = r(8885);
          t.exports = function (t) {
            return n(o(t));
          };
        },
        6051: (t) => {
          var e = Math.ceil,
            r = Math.floor;
          t.exports = function (t) {
            return isNaN((t = +t)) ? 0 : (t > 0 ? r : e)(t);
          };
        },
        4237: (t, e, r) => {
          var n = r(6051),
            o = Math.min;
          t.exports = function (t) {
            return t > 0 ? o(n(t), 9007199254740991) : 0;
          };
        },
        2991: (t, e, r) => {
          var n = r(8885);
          t.exports = function (t) {
            return Object(n(t));
          };
        },
        2066: (t, e, r) => {
          var n = r(5052);
          t.exports = function (t, e) {
            if (!n(t)) return t;
            var r, o;
            if (
              e &&
              "function" == typeof (r = t.toString) &&
              !n((o = r.call(t)))
            )
              return o;
            if ("function" == typeof (r = t.valueOf) && !n((o = r.call(t))))
              return o;
            if (
              !e &&
              "function" == typeof (r = t.toString) &&
              !n((o = r.call(t)))
            )
              return o;
            throw TypeError("Can't convert object to primitive value");
          };
        },
        1441: (t) => {
          var e = 0,
            r = Math.random();
          t.exports = function (t) {
            return (
              "Symbol(" +
              String(void 0 === t ? "" : t) +
              ")_" +
              (++e + r).toString(36)
            );
          };
        },
        6969: (t, e, r) => {
          var n = r(3839);
          t.exports = n && !Symbol.sham && "symbol" == typeof Symbol.iterator;
        },
        95: (t, e, r) => {
          var n = r(9859),
            o = r(3036),
            i = r(816),
            a = r(1441),
            c = r(3839),
            s = r(6969),
            u = o("wks"),
            f = n.Symbol,
            l = s ? f : (f && f.withoutSetter) || a;
          t.exports = function (t) {
            return (
              i(u, t) ||
                (c && i(f, t) ? (u[t] = f[t]) : (u[t] = l("Symbol." + t))),
              u[t]
            );
          };
        },
        1647: (t) => {
          t.exports = "\t\n\v\f\r                　\u2028\u2029\ufeff";
        },
        8695: (t, e, r) => {
          "use strict";
          var n = r(3103),
            o = r(6570);
          n(
            { target: "Array", proto: !0, forced: [].forEach != o },
            { forEach: o }
          );
        },
        6936: (t, e, r) => {
          var n = r(7400),
            o = r(1787).f,
            i = Function.prototype,
            a = i.toString,
            c = /^\s*function ([^ (]*)/,
            s = "name";
          n &&
            !(s in i) &&
            o(i, s, {
              configurable: !0,
              get: function () {
                try {
                  return a.call(this).match(c)[1];
                } catch (t) {
                  return "";
                }
              },
            });
        },
        1245: (t, e, r) => {
          "use strict";
          var n = r(7400),
            o = r(9859),
            i = r(6541),
            a = r(7487),
            c = r(816),
            s = r(7079),
            u = r(835),
            f = r(2066),
            l = r(4229),
            p = r(2391),
            d = r(8151).f,
            v = r(7933).f,
            h = r(1787).f,
            y = r(1017).trim,
            g = "Number",
            b = o.Number,
            m = b.prototype,
            x = s(p(m)) == g,
            S = function (t) {
              var e,
                r,
                n,
                o,
                i,
                a,
                c,
                s,
                u = f(t, !1);
              if ("string" == typeof u && u.length > 2)
                if (43 === (e = (u = y(u)).charCodeAt(0)) || 45 === e) {
                  if (88 === (r = u.charCodeAt(2)) || 120 === r) return NaN;
                } else if (48 === e) {
                  switch (u.charCodeAt(1)) {
                    case 66:
                    case 98:
                      (n = 2), (o = 49);
                      break;
                    case 79:
                    case 111:
                      (n = 8), (o = 55);
                      break;
                    default:
                      return +u;
                  }
                  for (a = (i = u.slice(2)).length, c = 0; c < a; c++)
                    if ((s = i.charCodeAt(c)) < 48 || s > o) return NaN;
                  return parseInt(i, n);
                }
              return +u;
            };
          if (i(g, !b(" 0o1") || !b("0b1") || b("+0x1"))) {
            for (
              var w,
                T = function (t) {
                  var e = arguments.length < 1 ? 0 : t,
                    r = this;
                  return r instanceof T &&
                    (x
                      ? l(function () {
                          m.valueOf.call(r);
                        })
                      : s(r) != g)
                    ? u(new b(S(e)), r, T)
                    : S(e);
                },
                E = n
                  ? d(b)
                  : "MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,fromString,range".split(
                      ","
                    ),
                O = 0;
              E.length > O;
              O++
            )
              c(b, (w = E[O])) && !c(T, w) && h(T, w, v(b, w));
            (T.prototype = m), (m.constructor = T), a(o, g, T);
          }
        },
        1939: (t, e, r) => {
          var n = r(9859),
            o = r(5694),
            i = r(6570),
            a = r(5762);
          for (var c in o) {
            var s = n[c],
              u = s && s.prototype;
            if (u && u.forEach !== i)
              try {
                a(u, "forEach", i);
              } catch (t) {
                u.forEach = i;
              }
          }
        },
        3271: (t, e, r) => {
          "use strict";
          r.d(e, { Z: () => i });
          var n = r(2609),
            o = r.n(n)()(function (t) {
              return t[1];
            });
          o.push([
            t.id,
            "\n.back-to-ceiling[data-v-3a8f819e] {\n  position: fixed;\n  display: inline-block;\n  text-align: center;\n  cursor: pointer;\n}\n.back-to-ceiling[data-v-3a8f819e]:hover {\n  background: #d5dbe7;\n}\n.fade-enter-active[data-v-3a8f819e],\n.fade-leave-active[data-v-3a8f819e] {\n  transition: opacity 0.5s;\n}\n.fade-enter[data-v-3a8f819e],\n.fade-leave-to[data-v-3a8f819e] {\n  opacity: 0;\n}\n.back-to-ceiling .Icon[data-v-3a8f819e] {\n  fill: #9aaabf;\n  background: none;\n}\n",
            "",
          ]);
          const i = o;
        },
        2609: (t) => {
          "use strict";
          t.exports = function (t) {
            var e = [];
            return (
              (e.toString = function () {
                return this.map(function (e) {
                  var r = t(e);
                  return e[2] ? "@media ".concat(e[2], " {").concat(r, "}") : r;
                }).join("");
              }),
              (e.i = function (t, r, n) {
                "string" == typeof t && (t = [[null, t, ""]]);
                var o = {};
                if (n)
                  for (var i = 0; i < this.length; i++) {
                    var a = this[i][0];
                    null != a && (o[a] = !0);
                  }
                for (var c = 0; c < t.length; c++) {
                  var s = [].concat(t[c]);
                  (n && o[s[0]]) ||
                    (r &&
                      (s[2]
                        ? (s[2] = "".concat(r, " and ").concat(s[2]))
                        : (s[2] = r)),
                    e.push(s));
                }
              }),
              e
            );
          };
        },
        6062: (t, e, r) => {
          "use strict";
          var n,
            o = (function () {
              var t = {};
              return function (e) {
                if (void 0 === t[e]) {
                  var r = document.querySelector(e);
                  if (
                    window.HTMLIFrameElement &&
                    r instanceof window.HTMLIFrameElement
                  )
                    try {
                      r = r.contentDocument.head;
                    } catch (t) {
                      r = null;
                    }
                  t[e] = r;
                }
                return t[e];
              };
            })(),
            i = [];
          function a(t) {
            for (var e = -1, r = 0; r < i.length; r++)
              if (i[r].identifier === t) {
                e = r;
                break;
              }
            return e;
          }
          function c(t, e) {
            for (var r = {}, n = [], o = 0; o < t.length; o++) {
              var c = t[o],
                s = e.base ? c[0] + e.base : c[0],
                u = r[s] || 0,
                f = "".concat(s, " ").concat(u);
              r[s] = u + 1;
              var l = a(f),
                p = { css: c[1], media: c[2], sourceMap: c[3] };
              -1 !== l
                ? (i[l].references++, i[l].updater(p))
                : i.push({ identifier: f, updater: h(p, e), references: 1 }),
                n.push(f);
            }
            return n;
          }
          function s(t) {
            var e = document.createElement("style"),
              n = t.attributes || {};
            if (void 0 === n.nonce) {
              var i = r.nc;
              i && (n.nonce = i);
            }
            if (
              (Object.keys(n).forEach(function (t) {
                e.setAttribute(t, n[t]);
              }),
              "function" == typeof t.insert)
            )
              t.insert(e);
            else {
              var a = o(t.insert || "head");
              if (!a)
                throw new Error(
                  "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid."
                );
              a.appendChild(e);
            }
            return e;
          }
          var u,
            f =
              ((u = []),
              function (t, e) {
                return (u[t] = e), u.filter(Boolean).join("\n");
              });
          function l(t, e, r, n) {
            var o = r
              ? ""
              : n.media
              ? "@media ".concat(n.media, " {").concat(n.css, "}")
              : n.css;
            if (t.styleSheet) t.styleSheet.cssText = f(e, o);
            else {
              var i = document.createTextNode(o),
                a = t.childNodes;
              a[e] && t.removeChild(a[e]),
                a.length ? t.insertBefore(i, a[e]) : t.appendChild(i);
            }
          }
          function p(t, e, r) {
            var n = r.css,
              o = r.media,
              i = r.sourceMap;
            if (
              (o ? t.setAttribute("media", o) : t.removeAttribute("media"),
              i &&
                "undefined" != typeof btoa &&
                (n += "\n/*# sourceMappingURL=data:application/json;base64,".concat(
                  btoa(unescape(encodeURIComponent(JSON.stringify(i)))),
                  " */"
                )),
              t.styleSheet)
            )
              t.styleSheet.cssText = n;
            else {
              for (; t.firstChild; ) t.removeChild(t.firstChild);
              t.appendChild(document.createTextNode(n));
            }
          }
          var d = null,
            v = 0;
          function h(t, e) {
            var r, n, o;
            if (e.singleton) {
              var i = v++;
              (r = d || (d = s(e))),
                (n = l.bind(null, r, i, !1)),
                (o = l.bind(null, r, i, !0));
            } else
              (r = s(e)),
                (n = p.bind(null, r, e)),
                (o = function () {
                  !(function (t) {
                    if (null === t.parentNode) return !1;
                    t.parentNode.removeChild(t);
                  })(r);
                });
            return (
              n(t),
              function (e) {
                if (e) {
                  if (
                    e.css === t.css &&
                    e.media === t.media &&
                    e.sourceMap === t.sourceMap
                  )
                    return;
                  n((t = e));
                } else o();
              }
            );
          }
          t.exports = function (t, e) {
            (e = e || {}).singleton ||
              "boolean" == typeof e.singleton ||
              (e.singleton =
                (void 0 === n &&
                  (n = Boolean(
                    window && document && document.all && !window.atob
                  )),
                n));
            var r = c((t = t || []), e);
            return function (t) {
              if (
                ((t = t || []),
                "[object Array]" === Object.prototype.toString.call(t))
              ) {
                for (var n = 0; n < r.length; n++) {
                  var o = a(r[n]);
                  i[o].references--;
                }
                for (var s = c(t, e), u = 0; u < r.length; u++) {
                  var f = a(r[u]);
                  0 === i[f].references && (i[f].updater(), i.splice(f, 1));
                }
                r = s;
              }
            };
          };
        },
      },
      e = {};
    function r(n) {
      if (e[n]) return e[n].exports;
      var o = (e[n] = { id: n, exports: {} });
      return t[n](o, o.exports, r), o.exports;
    }
    return (
      (r.n = (t) => {
        var e = t && t.__esModule ? () => t.default : () => t;
        return r.d(e, { a: e }), e;
      }),
      (r.d = (t, e) => {
        for (var n in e)
          r.o(e, n) &&
            !r.o(t, n) &&
            Object.defineProperty(t, n, { enumerable: !0, get: e[n] });
      }),
      (r.g = (function () {
        if ("object" == typeof globalThis) return globalThis;
        try {
          return this || new Function("return this")();
        } catch (t) {
          if ("object" == typeof window) return window;
        }
      })()),
      (r.o = (t, e) => Object.prototype.hasOwnProperty.call(t, e)),
      r(2782)
    );
  })().default;
});
