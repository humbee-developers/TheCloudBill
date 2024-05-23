/*!
 * Webflow: Front-end site library
 * @license MIT
 * Inline scripts may access the api using an async handler:
 *   var Webflow = Webflow || [];
 *   Webflow.push(readyFunction);
 */

(() => {
  var J_ = Object.create;
  var sn = Object.defineProperty;
  var eb = Object.getOwnPropertyDescriptor;
  var tb = Object.getOwnPropertyNames;
  var rb = Object.getPrototypeOf,
    nb = Object.prototype.hasOwnProperty;
  var he = (e, t) => () => (e && (t = e((e = 0))), t);
  var c = (e, t) => () => (t || e((t = { exports: {} }).exports, t), t.exports),
    ke = (e, t) => {
      for (var r in t) sn(e, r, { get: t[r], enumerable: !0 });
    },
    Ps = (e, t, r, n) => {
      if ((t && typeof t == "object") || typeof t == "function")
        for (let i of tb(t))
          !nb.call(e, i) &&
            i !== r &&
            sn(e, i, {
              get: () => t[i],
              enumerable: !(n = eb(t, i)) || n.enumerable,
            });
      return e;
    };
  var le = (e, t, r) => (
      (r = e != null ? J_(rb(e)) : {}),
      Ps(
        t || !e || !e.__esModule
          ? sn(r, "default", { value: e, enumerable: !0 })
          : r,
        e
      )
    ),
    rt = (e) => Ps(sn({}, "__esModule", { value: !0 }), e);
  var Pi = c(() => {
    "use strict";
    window.tram = (function (e) {
      function t(l, w) {
        var C = new T.Bare();
        return C.init(l, w);
      }
      function r(l) {
        return l.replace(/[A-Z]/g, function (w) {
          return "-" + w.toLowerCase();
        });
      }
      function n(l) {
        var w = parseInt(l.slice(1), 16),
          C = (w >> 16) & 255,
          P = (w >> 8) & 255,
          x = 255 & w;
        return [C, P, x];
      }
      function i(l, w, C) {
        return (
          "#" + ((1 << 24) | (l << 16) | (w << 8) | C).toString(16).slice(1)
        );
      }
      function o() {}
      function a(l, w) {
        f("Type warning: Expected: [" + l + "] Got: [" + typeof w + "] " + w);
      }
      function s(l, w, C) {
        f("Units do not match [" + l + "]: " + w + ", " + C);
      }
      function u(l, w, C) {
        if ((w !== void 0 && (C = w), l === void 0)) return C;
        var P = C;
        return (
          Fe.test(l) || !He.test(l)
            ? (P = parseInt(l, 10))
            : He.test(l) && (P = 1e3 * parseFloat(l)),
          0 > P && (P = 0),
          P === P ? P : C
        );
      }
      function f(l) {
        oe.debug && window && window.console.warn(l);
      }
      function b(l) {
        for (var w = -1, C = l ? l.length : 0, P = []; ++w < C; ) {
          var x = l[w];
          x && P.push(x);
        }
        return P;
      }
      var v = (function (l, w, C) {
          function P(ie) {
            return typeof ie == "object";
          }
          function x(ie) {
            return typeof ie == "function";
          }
          function M() {}
          function te(ie, ve) {
            function K() {
              var Re = new ae();
              return x(Re.init) && Re.init.apply(Re, arguments), Re;
            }
            function ae() {}
            ve === C && ((ve = ie), (ie = Object)), (K.Bare = ae);
            var se,
              be = (M[l] = ie[l]),
              tt = (ae[l] = K[l] = new M());
            return (
              (tt.constructor = K),
              (K.mixin = function (Re) {
                return (ae[l] = K[l] = te(K, Re)[l]), K;
              }),
              (K.open = function (Re) {
                if (
                  ((se = {}),
                  x(Re) ? (se = Re.call(K, tt, be, K, ie)) : P(Re) && (se = Re),
                  P(se))
                )
                  for (var _r in se) w.call(se, _r) && (tt[_r] = se[_r]);
                return x(tt.init) || (tt.init = ie), K;
              }),
              K.open(ve)
            );
          }
          return te;
        })("prototype", {}.hasOwnProperty),
        p = {
          ease: [
            "ease",
            function (l, w, C, P) {
              var x = (l /= P) * l,
                M = x * l;
              return (
                w +
                C * (-2.75 * M * x + 11 * x * x + -15.5 * M + 8 * x + 0.25 * l)
              );
            },
          ],
          "ease-in": [
            "ease-in",
            function (l, w, C, P) {
              var x = (l /= P) * l,
                M = x * l;
              return w + C * (-1 * M * x + 3 * x * x + -3 * M + 2 * x);
            },
          ],
          "ease-out": [
            "ease-out",
            function (l, w, C, P) {
              var x = (l /= P) * l,
                M = x * l;
              return (
                w +
                C * (0.3 * M * x + -1.6 * x * x + 2.2 * M + -1.8 * x + 1.9 * l)
              );
            },
          ],
          "ease-in-out": [
            "ease-in-out",
            function (l, w, C, P) {
              var x = (l /= P) * l,
                M = x * l;
              return w + C * (2 * M * x + -5 * x * x + 2 * M + 2 * x);
            },
          ],
          linear: [
            "linear",
            function (l, w, C, P) {
              return (C * l) / P + w;
            },
          ],
          "ease-in-quad": [
            "cubic-bezier(0.550, 0.085, 0.680, 0.530)",
            function (l, w, C, P) {
              return C * (l /= P) * l + w;
            },
          ],
          "ease-out-quad": [
            "cubic-bezier(0.250, 0.460, 0.450, 0.940)",
            function (l, w, C, P) {
              return -C * (l /= P) * (l - 2) + w;
            },
          ],
          "ease-in-out-quad": [
            "cubic-bezier(0.455, 0.030, 0.515, 0.955)",
            function (l, w, C, P) {
              return (l /= P / 2) < 1
                ? (C / 2) * l * l + w
                : (-C / 2) * (--l * (l - 2) - 1) + w;
            },
          ],
          "ease-in-cubic": [
            "cubic-bezier(0.550, 0.055, 0.675, 0.190)",
            function (l, w, C, P) {
              return C * (l /= P) * l * l + w;
            },
          ],
          "ease-out-cubic": [
            "cubic-bezier(0.215, 0.610, 0.355, 1)",
            function (l, w, C, P) {
              return C * ((l = l / P - 1) * l * l + 1) + w;
            },
          ],
          "ease-in-out-cubic": [
            "cubic-bezier(0.645, 0.045, 0.355, 1)",
            function (l, w, C, P) {
              return (l /= P / 2) < 1
                ? (C / 2) * l * l * l + w
                : (C / 2) * ((l -= 2) * l * l + 2) + w;
            },
          ],
          "ease-in-quart": [
            "cubic-bezier(0.895, 0.030, 0.685, 0.220)",
            function (l, w, C, P) {
              return C * (l /= P) * l * l * l + w;
            },
          ],
          "ease-out-quart": [
            "cubic-bezier(0.165, 0.840, 0.440, 1)",
            function (l, w, C, P) {
              return -C * ((l = l / P - 1) * l * l * l - 1) + w;
            },
          ],
          "ease-in-out-quart": [
            "cubic-bezier(0.770, 0, 0.175, 1)",
            function (l, w, C, P) {
              return (l /= P / 2) < 1
                ? (C / 2) * l * l * l * l + w
                : (-C / 2) * ((l -= 2) * l * l * l - 2) + w;
            },
          ],
          "ease-in-quint": [
            "cubic-bezier(0.755, 0.050, 0.855, 0.060)",
            function (l, w, C, P) {
              return C * (l /= P) * l * l * l * l + w;
            },
          ],
          "ease-out-quint": [
            "cubic-bezier(0.230, 1, 0.320, 1)",
            function (l, w, C, P) {
              return C * ((l = l / P - 1) * l * l * l * l + 1) + w;
            },
          ],
          "ease-in-out-quint": [
            "cubic-bezier(0.860, 0, 0.070, 1)",
            function (l, w, C, P) {
              return (l /= P / 2) < 1
                ? (C / 2) * l * l * l * l * l + w
                : (C / 2) * ((l -= 2) * l * l * l * l + 2) + w;
            },
          ],
          "ease-in-sine": [
            "cubic-bezier(0.470, 0, 0.745, 0.715)",
            function (l, w, C, P) {
              return -C * Math.cos((l / P) * (Math.PI / 2)) + C + w;
            },
          ],
          "ease-out-sine": [
            "cubic-bezier(0.390, 0.575, 0.565, 1)",
            function (l, w, C, P) {
              return C * Math.sin((l / P) * (Math.PI / 2)) + w;
            },
          ],
          "ease-in-out-sine": [
            "cubic-bezier(0.445, 0.050, 0.550, 0.950)",
            function (l, w, C, P) {
              return (-C / 2) * (Math.cos((Math.PI * l) / P) - 1) + w;
            },
          ],
          "ease-in-expo": [
            "cubic-bezier(0.950, 0.050, 0.795, 0.035)",
            function (l, w, C, P) {
              return l === 0 ? w : C * Math.pow(2, 10 * (l / P - 1)) + w;
            },
          ],
          "ease-out-expo": [
            "cubic-bezier(0.190, 1, 0.220, 1)",
            function (l, w, C, P) {
              return l === P
                ? w + C
                : C * (-Math.pow(2, (-10 * l) / P) + 1) + w;
            },
          ],
          "ease-in-out-expo": [
            "cubic-bezier(1, 0, 0, 1)",
            function (l, w, C, P) {
              return l === 0
                ? w
                : l === P
                ? w + C
                : (l /= P / 2) < 1
                ? (C / 2) * Math.pow(2, 10 * (l - 1)) + w
                : (C / 2) * (-Math.pow(2, -10 * --l) + 2) + w;
            },
          ],
          "ease-in-circ": [
            "cubic-bezier(0.600, 0.040, 0.980, 0.335)",
            function (l, w, C, P) {
              return -C * (Math.sqrt(1 - (l /= P) * l) - 1) + w;
            },
          ],
          "ease-out-circ": [
            "cubic-bezier(0.075, 0.820, 0.165, 1)",
            function (l, w, C, P) {
              return C * Math.sqrt(1 - (l = l / P - 1) * l) + w;
            },
          ],
          "ease-in-out-circ": [
            "cubic-bezier(0.785, 0.135, 0.150, 0.860)",
            function (l, w, C, P) {
              return (l /= P / 2) < 1
                ? (-C / 2) * (Math.sqrt(1 - l * l) - 1) + w
                : (C / 2) * (Math.sqrt(1 - (l -= 2) * l) + 1) + w;
            },
          ],
          "ease-in-back": [
            "cubic-bezier(0.600, -0.280, 0.735, 0.045)",
            function (l, w, C, P, x) {
              return (
                x === void 0 && (x = 1.70158),
                C * (l /= P) * l * ((x + 1) * l - x) + w
              );
            },
          ],
          "ease-out-back": [
            "cubic-bezier(0.175, 0.885, 0.320, 1.275)",
            function (l, w, C, P, x) {
              return (
                x === void 0 && (x = 1.70158),
                C * ((l = l / P - 1) * l * ((x + 1) * l + x) + 1) + w
              );
            },
          ],
          "ease-in-out-back": [
            "cubic-bezier(0.680, -0.550, 0.265, 1.550)",
            function (l, w, C, P, x) {
              return (
                x === void 0 && (x = 1.70158),
                (l /= P / 2) < 1
                  ? (C / 2) * l * l * (((x *= 1.525) + 1) * l - x) + w
                  : (C / 2) *
                      ((l -= 2) * l * (((x *= 1.525) + 1) * l + x) + 2) +
                    w
              );
            },
          ],
        },
        E = {
          "ease-in-back": "cubic-bezier(0.600, 0, 0.735, 0.045)",
          "ease-out-back": "cubic-bezier(0.175, 0.885, 0.320, 1)",
          "ease-in-out-back": "cubic-bezier(0.680, 0, 0.265, 1)",
        },
        A = document,
        O = window,
        S = "bkwld-tram",
        _ = /[\-\.0-9]/g,
        y = /[A-Z]/,
        R = "number",
        D = /^(rgb|#)/,
        F = /(em|cm|mm|in|pt|pc|px)$/,
        q = /(em|cm|mm|in|pt|pc|px|%)$/,
        W = /(deg|rad|turn)$/,
        j = "unitless",
        Y = /(all|none) 0s ease 0s/,
        Z = /^(width|height)$/,
        V = " ",
        L = A.createElement("a"),
        h = ["Webkit", "Moz", "O", "ms"],
        N = ["-webkit-", "-moz-", "-o-", "-ms-"],
        k = function (l) {
          if (l in L.style) return { dom: l, css: l };
          var w,
            C,
            P = "",
            x = l.split("-");
          for (w = 0; w < x.length; w++)
            P += x[w].charAt(0).toUpperCase() + x[w].slice(1);
          for (w = 0; w < h.length; w++)
            if (((C = h[w] + P), C in L.style))
              return { dom: C, css: N[w] + l };
        },
        U = (t.support = {
          bind: Function.prototype.bind,
          transform: k("transform"),
          transition: k("transition"),
          backface: k("backface-visibility"),
          timing: k("transition-timing-function"),
        });
      if (U.transition) {
        var J = U.timing.dom;
        if (((L.style[J] = p["ease-in-back"][0]), !L.style[J]))
          for (var re in E) p[re][0] = E[re];
      }
      var G = (t.frame = (function () {
          var l =
            O.requestAnimationFrame ||
            O.webkitRequestAnimationFrame ||
            O.mozRequestAnimationFrame ||
            O.oRequestAnimationFrame ||
            O.msRequestAnimationFrame;
          return l && U.bind
            ? l.bind(O)
            : function (w) {
                O.setTimeout(w, 16);
              };
        })()),
        H = (t.now = (function () {
          var l = O.performance,
            w = l && (l.now || l.webkitNow || l.msNow || l.mozNow);
          return w && U.bind
            ? w.bind(l)
            : Date.now ||
                function () {
                  return +new Date();
                };
        })()),
        d = v(function (l) {
          function w(ne, ce) {
            var ye = b(("" + ne).split(V)),
              de = ye[0];
            ce = ce || {};
            var Le = z[de];
            if (!Le) return f("Unsupported property: " + de);
            if (!ce.weak || !this.props[de]) {
              var je = Le[0],
                De = this.props[de];
              return (
                De || (De = this.props[de] = new je.Bare()),
                De.init(this.$el, ye, Le, ce),
                De
              );
            }
          }
          function C(ne, ce, ye) {
            if (ne) {
              var de = typeof ne;
              if (
                (ce ||
                  (this.timer && this.timer.destroy(),
                  (this.queue = []),
                  (this.active = !1)),
                de == "number" && ce)
              )
                return (
                  (this.timer = new ue({
                    duration: ne,
                    context: this,
                    complete: M,
                  })),
                  void (this.active = !0)
                );
              if (de == "string" && ce) {
                switch (ne) {
                  case "hide":
                    K.call(this);
                    break;
                  case "stop":
                    te.call(this);
                    break;
                  case "redraw":
                    ae.call(this);
                    break;
                  default:
                    w.call(this, ne, ye && ye[1]);
                }
                return M.call(this);
              }
              if (de == "function") return void ne.call(this, this);
              if (de == "object") {
                var Le = 0;
                tt.call(
                  this,
                  ne,
                  function (Te, Z_) {
                    Te.span > Le && (Le = Te.span), Te.stop(), Te.animate(Z_);
                  },
                  function (Te) {
                    "wait" in Te && (Le = u(Te.wait, 0));
                  }
                ),
                  be.call(this),
                  Le > 0 &&
                    ((this.timer = new ue({ duration: Le, context: this })),
                    (this.active = !0),
                    ce && (this.timer.complete = M));
                var je = this,
                  De = !1,
                  an = {};
                G(function () {
                  tt.call(je, ne, function (Te) {
                    Te.active && ((De = !0), (an[Te.name] = Te.nextStyle));
                  }),
                    De && je.$el.css(an);
                });
              }
            }
          }
          function P(ne) {
            (ne = u(ne, 0)),
              this.active
                ? this.queue.push({ options: ne })
                : ((this.timer = new ue({
                    duration: ne,
                    context: this,
                    complete: M,
                  })),
                  (this.active = !0));
          }
          function x(ne) {
            return this.active
              ? (this.queue.push({ options: ne, args: arguments }),
                void (this.timer.complete = M))
              : f(
                  "No active transition timer. Use start() or wait() before then()."
                );
          }
          function M() {
            if (
              (this.timer && this.timer.destroy(),
              (this.active = !1),
              this.queue.length)
            ) {
              var ne = this.queue.shift();
              C.call(this, ne.options, !0, ne.args);
            }
          }
          function te(ne) {
            this.timer && this.timer.destroy(),
              (this.queue = []),
              (this.active = !1);
            var ce;
            typeof ne == "string"
              ? ((ce = {}), (ce[ne] = 1))
              : (ce = typeof ne == "object" && ne != null ? ne : this.props),
              tt.call(this, ce, Re),
              be.call(this);
          }
          function ie(ne) {
            te.call(this, ne), tt.call(this, ne, _r, $_);
          }
          function ve(ne) {
            typeof ne != "string" && (ne = "block"),
              (this.el.style.display = ne);
          }
          function K() {
            te.call(this), (this.el.style.display = "none");
          }
          function ae() {
            this.el.offsetHeight;
          }
          function se() {
            te.call(this),
              e.removeData(this.el, S),
              (this.$el = this.el = null);
          }
          function be() {
            var ne,
              ce,
              ye = [];
            this.upstream && ye.push(this.upstream);
            for (ne in this.props)
              (ce = this.props[ne]), ce.active && ye.push(ce.string);
            (ye = ye.join(",")),
              this.style !== ye &&
                ((this.style = ye), (this.el.style[U.transition.dom] = ye));
          }
          function tt(ne, ce, ye) {
            var de,
              Le,
              je,
              De,
              an = ce !== Re,
              Te = {};
            for (de in ne)
              (je = ne[de]),
                de in fe
                  ? (Te.transform || (Te.transform = {}),
                    (Te.transform[de] = je))
                  : (y.test(de) && (de = r(de)),
                    de in z ? (Te[de] = je) : (De || (De = {}), (De[de] = je)));
            for (de in Te) {
              if (((je = Te[de]), (Le = this.props[de]), !Le)) {
                if (!an) continue;
                Le = w.call(this, de);
              }
              ce.call(this, Le, je);
            }
            ye && De && ye.call(this, De);
          }
          function Re(ne) {
            ne.stop();
          }
          function _r(ne, ce) {
            ne.set(ce);
          }
          function $_(ne) {
            this.$el.css(ne);
          }
          function Xe(ne, ce) {
            l[ne] = function () {
              return this.children
                ? Q_.call(this, ce, arguments)
                : (this.el && ce.apply(this, arguments), this);
            };
          }
          function Q_(ne, ce) {
            var ye,
              de = this.children.length;
            for (ye = 0; de > ye; ye++) ne.apply(this.children[ye], ce);
            return this;
          }
          (l.init = function (ne) {
            if (
              ((this.$el = e(ne)),
              (this.el = this.$el[0]),
              (this.props = {}),
              (this.queue = []),
              (this.style = ""),
              (this.active = !1),
              oe.keepInherited && !oe.fallback)
            ) {
              var ce = B(this.el, "transition");
              ce && !Y.test(ce) && (this.upstream = ce);
            }
            U.backface &&
              oe.hideBackface &&
              m(this.el, U.backface.css, "hidden");
          }),
            Xe("add", w),
            Xe("start", C),
            Xe("wait", P),
            Xe("then", x),
            Xe("next", M),
            Xe("stop", te),
            Xe("set", ie),
            Xe("show", ve),
            Xe("hide", K),
            Xe("redraw", ae),
            Xe("destroy", se);
        }),
        T = v(d, function (l) {
          function w(C, P) {
            var x = e.data(C, S) || e.data(C, S, new d.Bare());
            return x.el || x.init(C), P ? x.start(P) : x;
          }
          l.init = function (C, P) {
            var x = e(C);
            if (!x.length) return this;
            if (x.length === 1) return w(x[0], P);
            var M = [];
            return (
              x.each(function (te, ie) {
                M.push(w(ie, P));
              }),
              (this.children = M),
              this
            );
          };
        }),
        I = v(function (l) {
          function w() {
            var M = this.get();
            this.update("auto");
            var te = this.get();
            return this.update(M), te;
          }
          function C(M, te, ie) {
            return te !== void 0 && (ie = te), M in p ? M : ie;
          }
          function P(M) {
            var te = /rgba?\((\d+),\s*(\d+),\s*(\d+)/.exec(M);
            return (te ? i(te[1], te[2], te[3]) : M).replace(
              /#(\w)(\w)(\w)$/,
              "#$1$1$2$2$3$3"
            );
          }
          var x = { duration: 500, ease: "ease", delay: 0 };
          (l.init = function (M, te, ie, ve) {
            (this.$el = M), (this.el = M[0]);
            var K = te[0];
            ie[2] && (K = ie[2]),
              Q[K] && (K = Q[K]),
              (this.name = K),
              (this.type = ie[1]),
              (this.duration = u(te[1], this.duration, x.duration)),
              (this.ease = C(te[2], this.ease, x.ease)),
              (this.delay = u(te[3], this.delay, x.delay)),
              (this.span = this.duration + this.delay),
              (this.active = !1),
              (this.nextStyle = null),
              (this.auto = Z.test(this.name)),
              (this.unit = ve.unit || this.unit || oe.defaultUnit),
              (this.angle = ve.angle || this.angle || oe.defaultAngle),
              oe.fallback || ve.fallback
                ? (this.animate = this.fallback)
                : ((this.animate = this.transition),
                  (this.string =
                    this.name +
                    V +
                    this.duration +
                    "ms" +
                    (this.ease != "ease" ? V + p[this.ease][0] : "") +
                    (this.delay ? V + this.delay + "ms" : "")));
          }),
            (l.set = function (M) {
              (M = this.convert(M, this.type)), this.update(M), this.redraw();
            }),
            (l.transition = function (M) {
              (this.active = !0),
                (M = this.convert(M, this.type)),
                this.auto &&
                  (this.el.style[this.name] == "auto" &&
                    (this.update(this.get()), this.redraw()),
                  M == "auto" && (M = w.call(this))),
                (this.nextStyle = M);
            }),
            (l.fallback = function (M) {
              var te =
                this.el.style[this.name] || this.convert(this.get(), this.type);
              (M = this.convert(M, this.type)),
                this.auto &&
                  (te == "auto" && (te = this.convert(this.get(), this.type)),
                  M == "auto" && (M = w.call(this))),
                (this.tween = new ee({
                  from: te,
                  to: M,
                  duration: this.duration,
                  delay: this.delay,
                  ease: this.ease,
                  update: this.update,
                  context: this,
                }));
            }),
            (l.get = function () {
              return B(this.el, this.name);
            }),
            (l.update = function (M) {
              m(this.el, this.name, M);
            }),
            (l.stop = function () {
              (this.active || this.nextStyle) &&
                ((this.active = !1),
                (this.nextStyle = null),
                m(this.el, this.name, this.get()));
              var M = this.tween;
              M && M.context && M.destroy();
            }),
            (l.convert = function (M, te) {
              if (M == "auto" && this.auto) return M;
              var ie,
                ve = typeof M == "number",
                K = typeof M == "string";
              switch (te) {
                case R:
                  if (ve) return M;
                  if (K && M.replace(_, "") === "") return +M;
                  ie = "number(unitless)";
                  break;
                case D:
                  if (K) {
                    if (M === "" && this.original) return this.original;
                    if (te.test(M))
                      return M.charAt(0) == "#" && M.length == 7 ? M : P(M);
                  }
                  ie = "hex or rgb string";
                  break;
                case F:
                  if (ve) return M + this.unit;
                  if (K && te.test(M)) return M;
                  ie = "number(px) or string(unit)";
                  break;
                case q:
                  if (ve) return M + this.unit;
                  if (K && te.test(M)) return M;
                  ie = "number(px) or string(unit or %)";
                  break;
                case W:
                  if (ve) return M + this.angle;
                  if (K && te.test(M)) return M;
                  ie = "number(deg) or string(angle)";
                  break;
                case j:
                  if (ve || (K && q.test(M))) return M;
                  ie = "number(unitless) or string(unit or %)";
              }
              return a(ie, M), M;
            }),
            (l.redraw = function () {
              this.el.offsetHeight;
            });
        }),
        g = v(I, function (l, w) {
          l.init = function () {
            w.init.apply(this, arguments),
              this.original || (this.original = this.convert(this.get(), D));
          };
        }),
        X = v(I, function (l, w) {
          (l.init = function () {
            w.init.apply(this, arguments), (this.animate = this.fallback);
          }),
            (l.get = function () {
              return this.$el[this.name]();
            }),
            (l.update = function (C) {
              this.$el[this.name](C);
            });
        }),
        $ = v(I, function (l, w) {
          function C(P, x) {
            var M, te, ie, ve, K;
            for (M in P)
              (ve = fe[M]),
                (ie = ve[0]),
                (te = ve[1] || M),
                (K = this.convert(P[M], ie)),
                x.call(this, te, K, ie);
          }
          (l.init = function () {
            w.init.apply(this, arguments),
              this.current ||
                ((this.current = {}),
                fe.perspective &&
                  oe.perspective &&
                  ((this.current.perspective = oe.perspective),
                  m(this.el, this.name, this.style(this.current)),
                  this.redraw()));
          }),
            (l.set = function (P) {
              C.call(this, P, function (x, M) {
                this.current[x] = M;
              }),
                m(this.el, this.name, this.style(this.current)),
                this.redraw();
            }),
            (l.transition = function (P) {
              var x = this.values(P);
              this.tween = new _e({
                current: this.current,
                values: x,
                duration: this.duration,
                delay: this.delay,
                ease: this.ease,
              });
              var M,
                te = {};
              for (M in this.current) te[M] = M in x ? x[M] : this.current[M];
              (this.active = !0), (this.nextStyle = this.style(te));
            }),
            (l.fallback = function (P) {
              var x = this.values(P);
              this.tween = new _e({
                current: this.current,
                values: x,
                duration: this.duration,
                delay: this.delay,
                ease: this.ease,
                update: this.update,
                context: this,
              });
            }),
            (l.update = function () {
              m(this.el, this.name, this.style(this.current));
            }),
            (l.style = function (P) {
              var x,
                M = "";
              for (x in P) M += x + "(" + P[x] + ") ";
              return M;
            }),
            (l.values = function (P) {
              var x,
                M = {};
              return (
                C.call(this, P, function (te, ie, ve) {
                  (M[te] = ie),
                    this.current[te] === void 0 &&
                      ((x = 0),
                      ~te.indexOf("scale") && (x = 1),
                      (this.current[te] = this.convert(x, ve)));
                }),
                M
              );
            });
        }),
        ee = v(function (l) {
          function w(K) {
            ie.push(K) === 1 && G(C);
          }
          function C() {
            var K,
              ae,
              se,
              be = ie.length;
            if (be)
              for (G(C), ae = H(), K = be; K--; )
                (se = ie[K]), se && se.render(ae);
          }
          function P(K) {
            var ae,
              se = e.inArray(K, ie);
            se >= 0 &&
              ((ae = ie.slice(se + 1)),
              (ie.length = se),
              ae.length && (ie = ie.concat(ae)));
          }
          function x(K) {
            return Math.round(K * ve) / ve;
          }
          function M(K, ae, se) {
            return i(
              K[0] + se * (ae[0] - K[0]),
              K[1] + se * (ae[1] - K[1]),
              K[2] + se * (ae[2] - K[2])
            );
          }
          var te = { ease: p.ease[1], from: 0, to: 1 };
          (l.init = function (K) {
            (this.duration = K.duration || 0), (this.delay = K.delay || 0);
            var ae = K.ease || te.ease;
            p[ae] && (ae = p[ae][1]),
              typeof ae != "function" && (ae = te.ease),
              (this.ease = ae),
              (this.update = K.update || o),
              (this.complete = K.complete || o),
              (this.context = K.context || this),
              (this.name = K.name);
            var se = K.from,
              be = K.to;
            se === void 0 && (se = te.from),
              be === void 0 && (be = te.to),
              (this.unit = K.unit || ""),
              typeof se == "number" && typeof be == "number"
                ? ((this.begin = se), (this.change = be - se))
                : this.format(be, se),
              (this.value = this.begin + this.unit),
              (this.start = H()),
              K.autoplay !== !1 && this.play();
          }),
            (l.play = function () {
              this.active ||
                (this.start || (this.start = H()), (this.active = !0), w(this));
            }),
            (l.stop = function () {
              this.active && ((this.active = !1), P(this));
            }),
            (l.render = function (K) {
              var ae,
                se = K - this.start;
              if (this.delay) {
                if (se <= this.delay) return;
                se -= this.delay;
              }
              if (se < this.duration) {
                var be = this.ease(se, 0, 1, this.duration);
                return (
                  (ae = this.startRGB
                    ? M(this.startRGB, this.endRGB, be)
                    : x(this.begin + be * this.change)),
                  (this.value = ae + this.unit),
                  void this.update.call(this.context, this.value)
                );
              }
              (ae = this.endHex || this.begin + this.change),
                (this.value = ae + this.unit),
                this.update.call(this.context, this.value),
                this.complete.call(this.context),
                this.destroy();
            }),
            (l.format = function (K, ae) {
              if (((ae += ""), (K += ""), K.charAt(0) == "#"))
                return (
                  (this.startRGB = n(ae)),
                  (this.endRGB = n(K)),
                  (this.endHex = K),
                  (this.begin = 0),
                  void (this.change = 1)
                );
              if (!this.unit) {
                var se = ae.replace(_, ""),
                  be = K.replace(_, "");
                se !== be && s("tween", ae, K), (this.unit = se);
              }
              (ae = parseFloat(ae)),
                (K = parseFloat(K)),
                (this.begin = this.value = ae),
                (this.change = K - ae);
            }),
            (l.destroy = function () {
              this.stop(),
                (this.context = null),
                (this.ease = this.update = this.complete = o);
            });
          var ie = [],
            ve = 1e3;
        }),
        ue = v(ee, function (l) {
          (l.init = function (w) {
            (this.duration = w.duration || 0),
              (this.complete = w.complete || o),
              (this.context = w.context),
              this.play();
          }),
            (l.render = function (w) {
              var C = w - this.start;
              C < this.duration ||
                (this.complete.call(this.context), this.destroy());
            });
        }),
        _e = v(ee, function (l, w) {
          (l.init = function (C) {
            (this.context = C.context),
              (this.update = C.update),
              (this.tweens = []),
              (this.current = C.current);
            var P, x;
            for (P in C.values)
              (x = C.values[P]),
                this.current[P] !== x &&
                  this.tweens.push(
                    new ee({
                      name: P,
                      from: this.current[P],
                      to: x,
                      duration: C.duration,
                      delay: C.delay,
                      ease: C.ease,
                      autoplay: !1,
                    })
                  );
            this.play();
          }),
            (l.render = function (C) {
              var P,
                x,
                M = this.tweens.length,
                te = !1;
              for (P = M; P--; )
                (x = this.tweens[P]),
                  x.context &&
                    (x.render(C), (this.current[x.name] = x.value), (te = !0));
              return te
                ? void (this.update && this.update.call(this.context))
                : this.destroy();
            }),
            (l.destroy = function () {
              if ((w.destroy.call(this), this.tweens)) {
                var C,
                  P = this.tweens.length;
                for (C = P; C--; ) this.tweens[C].destroy();
                (this.tweens = null), (this.current = null);
              }
            });
        }),
        oe = (t.config = {
          debug: !1,
          defaultUnit: "px",
          defaultAngle: "deg",
          keepInherited: !1,
          hideBackface: !1,
          perspective: "",
          fallback: !U.transition,
          agentTests: [],
        });
      (t.fallback = function (l) {
        if (!U.transition) return (oe.fallback = !0);
        oe.agentTests.push("(" + l + ")");
        var w = new RegExp(oe.agentTests.join("|"), "i");
        oe.fallback = w.test(navigator.userAgent);
      }),
        t.fallback("6.0.[2-5] Safari"),
        (t.tween = function (l) {
          return new ee(l);
        }),
        (t.delay = function (l, w, C) {
          return new ue({ complete: w, duration: l, context: C });
        }),
        (e.fn.tram = function (l) {
          return t.call(null, this, l);
        });
      var m = e.style,
        B = e.css,
        Q = { transform: U.transform && U.transform.css },
        z = {
          color: [g, D],
          background: [g, D, "background-color"],
          "outline-color": [g, D],
          "border-color": [g, D],
          "border-top-color": [g, D],
          "border-right-color": [g, D],
          "border-bottom-color": [g, D],
          "border-left-color": [g, D],
          "border-width": [I, F],
          "border-top-width": [I, F],
          "border-right-width": [I, F],
          "border-bottom-width": [I, F],
          "border-left-width": [I, F],
          "border-spacing": [I, F],
          "letter-spacing": [I, F],
          margin: [I, F],
          "margin-top": [I, F],
          "margin-right": [I, F],
          "margin-bottom": [I, F],
          "margin-left": [I, F],
          padding: [I, F],
          "padding-top": [I, F],
          "padding-right": [I, F],
          "padding-bottom": [I, F],
          "padding-left": [I, F],
          "outline-width": [I, F],
          opacity: [I, R],
          top: [I, q],
          right: [I, q],
          bottom: [I, q],
          left: [I, q],
          "font-size": [I, q],
          "text-indent": [I, q],
          "word-spacing": [I, q],
          width: [I, q],
          "min-width": [I, q],
          "max-width": [I, q],
          height: [I, q],
          "min-height": [I, q],
          "max-height": [I, q],
          "line-height": [I, j],
          "scroll-top": [X, R, "scrollTop"],
          "scroll-left": [X, R, "scrollLeft"],
        },
        fe = {};
      U.transform &&
        ((z.transform = [$]),
        (fe = {
          x: [q, "translateX"],
          y: [q, "translateY"],
          rotate: [W],
          rotateX: [W],
          rotateY: [W],
          scale: [R],
          scaleX: [R],
          scaleY: [R],
          skew: [W],
          skewX: [W],
          skewY: [W],
        })),
        U.transform &&
          U.backface &&
          ((fe.z = [q, "translateZ"]),
          (fe.rotateZ = [W]),
          (fe.scaleZ = [R]),
          (fe.perspective = [F]));
      var Fe = /ms/,
        He = /s|\./;
      return (e.tram = t);
    })(window.jQuery);
  });
  var Ms = c((jU, qs) => {
    "use strict";
    var ib = window.$,
      ob = Pi() && ib.tram;
    qs.exports = (function () {
      var e = {};
      e.VERSION = "1.6.0-Webflow";
      var t = {},
        r = Array.prototype,
        n = Object.prototype,
        i = Function.prototype,
        o = r.push,
        a = r.slice,
        s = r.concat,
        u = n.toString,
        f = n.hasOwnProperty,
        b = r.forEach,
        v = r.map,
        p = r.reduce,
        E = r.reduceRight,
        A = r.filter,
        O = r.every,
        S = r.some,
        _ = r.indexOf,
        y = r.lastIndexOf,
        R = Array.isArray,
        D = Object.keys,
        F = i.bind,
        q = (e.each = e.forEach = function (h, N, k) {
          if (h == null) return h;
          if (b && h.forEach === b) h.forEach(N, k);
          else if (h.length === +h.length) {
            for (var U = 0, J = h.length; U < J; U++)
              if (N.call(k, h[U], U, h) === t) return;
          } else
            for (var re = e.keys(h), U = 0, J = re.length; U < J; U++)
              if (N.call(k, h[re[U]], re[U], h) === t) return;
          return h;
        });
      (e.map = e.collect = function (h, N, k) {
        var U = [];
        return h == null
          ? U
          : v && h.map === v
          ? h.map(N, k)
          : (q(h, function (J, re, G) {
              U.push(N.call(k, J, re, G));
            }),
            U);
      }),
        (e.find = e.detect = function (h, N, k) {
          var U;
          return (
            W(h, function (J, re, G) {
              if (N.call(k, J, re, G)) return (U = J), !0;
            }),
            U
          );
        }),
        (e.filter = e.select = function (h, N, k) {
          var U = [];
          return h == null
            ? U
            : A && h.filter === A
            ? h.filter(N, k)
            : (q(h, function (J, re, G) {
                N.call(k, J, re, G) && U.push(J);
              }),
              U);
        });
      var W = (e.some = e.any = function (h, N, k) {
        N || (N = e.identity);
        var U = !1;
        return h == null
          ? U
          : S && h.some === S
          ? h.some(N, k)
          : (q(h, function (J, re, G) {
              if (U || (U = N.call(k, J, re, G))) return t;
            }),
            !!U);
      });
      (e.contains = e.include = function (h, N) {
        return h == null
          ? !1
          : _ && h.indexOf === _
          ? h.indexOf(N) != -1
          : W(h, function (k) {
              return k === N;
            });
      }),
        (e.delay = function (h, N) {
          var k = a.call(arguments, 2);
          return setTimeout(function () {
            return h.apply(null, k);
          }, N);
        }),
        (e.defer = function (h) {
          return e.delay.apply(e, [h, 1].concat(a.call(arguments, 1)));
        }),
        (e.throttle = function (h) {
          var N, k, U;
          return function () {
            N ||
              ((N = !0),
              (k = arguments),
              (U = this),
              ob.frame(function () {
                (N = !1), h.apply(U, k);
              }));
          };
        }),
        (e.debounce = function (h, N, k) {
          var U,
            J,
            re,
            G,
            H,
            d = function () {
              var T = e.now() - G;
              T < N
                ? (U = setTimeout(d, N - T))
                : ((U = null), k || ((H = h.apply(re, J)), (re = J = null)));
            };
          return function () {
            (re = this), (J = arguments), (G = e.now());
            var T = k && !U;
            return (
              U || (U = setTimeout(d, N)),
              T && ((H = h.apply(re, J)), (re = J = null)),
              H
            );
          };
        }),
        (e.defaults = function (h) {
          if (!e.isObject(h)) return h;
          for (var N = 1, k = arguments.length; N < k; N++) {
            var U = arguments[N];
            for (var J in U) h[J] === void 0 && (h[J] = U[J]);
          }
          return h;
        }),
        (e.keys = function (h) {
          if (!e.isObject(h)) return [];
          if (D) return D(h);
          var N = [];
          for (var k in h) e.has(h, k) && N.push(k);
          return N;
        }),
        (e.has = function (h, N) {
          return f.call(h, N);
        }),
        (e.isObject = function (h) {
          return h === Object(h);
        }),
        (e.now =
          Date.now ||
          function () {
            return new Date().getTime();
          }),
        (e.templateSettings = {
          evaluate: /<%([\s\S]+?)%>/g,
          interpolate: /<%=([\s\S]+?)%>/g,
          escape: /<%-([\s\S]+?)%>/g,
        });
      var j = /(.)^/,
        Y = {
          "'": "'",
          "\\": "\\",
          "\r": "r",
          "\n": "n",
          "\u2028": "u2028",
          "\u2029": "u2029",
        },
        Z = /\\|'|\r|\n|\u2028|\u2029/g,
        V = function (h) {
          return "\\" + Y[h];
        },
        L = /^\s*(\w|\$)+\s*$/;
      return (
        (e.template = function (h, N, k) {
          !N && k && (N = k), (N = e.defaults({}, N, e.templateSettings));
          var U = RegExp(
              [
                (N.escape || j).source,
                (N.interpolate || j).source,
                (N.evaluate || j).source,
              ].join("|") + "|$",
              "g"
            ),
            J = 0,
            re = "__p+='";
          h.replace(U, function (T, I, g, X, $) {
            return (
              (re += h.slice(J, $).replace(Z, V)),
              (J = $ + T.length),
              I
                ? (re +=
                    `'+
((__t=(` +
                    I +
                    `))==null?'':_.escape(__t))+
'`)
                : g
                ? (re +=
                    `'+
((__t=(` +
                    g +
                    `))==null?'':__t)+
'`)
                : X &&
                  (re +=
                    `';
` +
                    X +
                    `
__p+='`),
              T
            );
          }),
            (re += `';
`);
          var G = N.variable;
          if (G) {
            if (!L.test(G))
              throw new Error("variable is not a bare identifier: " + G);
          } else
            (re =
              `with(obj||{}){
` +
              re +
              `}
`),
              (G = "obj");
          re =
            `var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};
` +
            re +
            `return __p;
`;
          var H;
          try {
            H = new Function(N.variable || "obj", "_", re);
          } catch (T) {
            throw ((T.source = re), T);
          }
          var d = function (T) {
            return H.call(this, T, e);
          };
          return (
            (d.source =
              "function(" +
              G +
              `){
` +
              re +
              "}"),
            d
          );
        }),
        e
      );
    })();
  });
  var Ne = c((zU, Ws) => {
    "use strict";
    var pe = {},
      Bt = {},
      Wt = [],
      Mi = window.Webflow || [],
      Et = window.jQuery,
      Ke = Et(window),
      ab = Et(document),
      nt = Et.isFunction,
      ze = (pe._ = Ms()),
      Ds = (pe.tram = Pi() && Et.tram),
      cn = !1,
      Fi = !1;
    Ds.config.hideBackface = !1;
    Ds.config.keepInherited = !0;
    pe.define = function (e, t, r) {
      Bt[e] && Gs(Bt[e]);
      var n = (Bt[e] = t(Et, ze, r) || {});
      return ks(n), n;
    };
    pe.require = function (e) {
      return Bt[e];
    };
    function ks(e) {
      pe.env() &&
        (nt(e.design) && Ke.on("__wf_design", e.design),
        nt(e.preview) && Ke.on("__wf_preview", e.preview)),
        nt(e.destroy) && Ke.on("__wf_destroy", e.destroy),
        e.ready && nt(e.ready) && sb(e);
    }
    function sb(e) {
      if (cn) {
        e.ready();
        return;
      }
      ze.contains(Wt, e.ready) || Wt.push(e.ready);
    }
    function Gs(e) {
      nt(e.design) && Ke.off("__wf_design", e.design),
        nt(e.preview) && Ke.off("__wf_preview", e.preview),
        nt(e.destroy) && Ke.off("__wf_destroy", e.destroy),
        e.ready && nt(e.ready) && ub(e);
    }
    function ub(e) {
      Wt = ze.filter(Wt, function (t) {
        return t !== e.ready;
      });
    }
    pe.push = function (e) {
      if (cn) {
        nt(e) && e();
        return;
      }
      Mi.push(e);
    };
    pe.env = function (e) {
      var t = window.__wf_design,
        r = typeof t < "u";
      if (!e) return r;
      if (e === "design") return r && t;
      if (e === "preview") return r && !t;
      if (e === "slug") return r && window.__wf_slug;
      if (e === "editor") return window.WebflowEditor;
      if (e === "test") return window.__wf_test;
      if (e === "frame") return window !== window.top;
    };
    var un = navigator.userAgent.toLowerCase(),
      Vs = (pe.env.touch =
        "ontouchstart" in window ||
        (window.DocumentTouch && document instanceof window.DocumentTouch)),
      cb = (pe.env.chrome =
        /chrome/.test(un) &&
        /Google/.test(navigator.vendor) &&
        parseInt(un.match(/chrome\/(\d+)\./)[1], 10)),
      lb = (pe.env.ios = /(ipod|iphone|ipad)/.test(un));
    pe.env.safari = /safari/.test(un) && !cb && !lb;
    var qi;
    Vs &&
      ab.on("touchstart mousedown", function (e) {
        qi = e.target;
      });
    pe.validClick = Vs
      ? function (e) {
          return e === qi || Et.contains(e, qi);
        }
      : function () {
          return !0;
        };
    var Us = "resize.webflow orientationchange.webflow load.webflow",
      fb = "scroll.webflow " + Us;
    pe.resize = Di(Ke, Us);
    pe.scroll = Di(Ke, fb);
    pe.redraw = Di();
    function Di(e, t) {
      var r = [],
        n = {};
      return (
        (n.up = ze.throttle(function (i) {
          ze.each(r, function (o) {
            o(i);
          });
        })),
        e && t && e.on(t, n.up),
        (n.on = function (i) {
          typeof i == "function" && (ze.contains(r, i) || r.push(i));
        }),
        (n.off = function (i) {
          if (!arguments.length) {
            r = [];
            return;
          }
          r = ze.filter(r, function (o) {
            return o !== i;
          });
        }),
        n
      );
    }
    pe.location = function (e) {
      window.location = e;
    };
    pe.env() && (pe.location = function () {});
    pe.ready = function () {
      (cn = !0), Fi ? db() : ze.each(Wt, Fs), ze.each(Mi, Fs), pe.resize.up();
    };
    function Fs(e) {
      nt(e) && e();
    }
    function db() {
      (Fi = !1), ze.each(Bt, ks);
    }
    var Rt;
    pe.load = function (e) {
      Rt.then(e);
    };
    function Bs() {
      Rt && (Rt.reject(), Ke.off("load", Rt.resolve)),
        (Rt = new Et.Deferred()),
        Ke.on("load", Rt.resolve);
    }
    pe.destroy = function (e) {
      (e = e || {}),
        (Fi = !0),
        Ke.triggerHandler("__wf_destroy"),
        e.domready != null && (cn = e.domready),
        ze.each(Bt, Gs),
        pe.resize.off(),
        pe.scroll.off(),
        pe.redraw.off(),
        (Wt = []),
        (Mi = []),
        Rt.state() === "pending" && Bs();
    };
    Et(pe.ready);
    Bs();
    Ws.exports = window.Webflow = pe;
  });
  var js = c((KU, Xs) => {
    "use strict";
    var Hs = Ne();
    Hs.define(
      "brand",
      (Xs.exports = function (e) {
        var t = {},
          r = document,
          n = e("html"),
          i = e("body"),
          o = ".w-webflow-badge",
          a = window.location,
          s = /PhantomJS/i.test(navigator.userAgent),
          u =
            "fullscreenchange webkitfullscreenchange mozfullscreenchange msfullscreenchange",
          f;
        t.ready = function () {
          var E = n.attr("data-wf-status"),
            A = n.attr("data-wf-domain") || "";
          /\.webflow\.io$/i.test(A) && a.hostname !== A && (E = !0),
            E &&
              !s &&
              ((f = f || v()),
              p(),
              setTimeout(p, 500),
              e(r).off(u, b).on(u, b));
        };
        function b() {
          var E =
            r.fullScreen ||
            r.mozFullScreen ||
            r.webkitIsFullScreen ||
            r.msFullscreenElement ||
            !!r.webkitFullscreenElement;
          e(f).attr("style", E ? "display: none !important;" : "");
        }
        function v() {
          var E = e('<a class="w-webflow-badge"></a>').attr(
              "href",
              "https://webflow.com?utm_campaign=brandjs"
            ),
            A = e("<img>")
              .attr(
                "src",
                "https://d3e54v103j8qbb.cloudfront.net/img/webflow-badge-icon-d2.89e12c322e.svg"
              )
              .attr("alt", "")
              .css({ marginRight: "4px", width: "26px" }),
            O = e("<img>")
              .attr(
                "src",
                "https://d3e54v103j8qbb.cloudfront.net/img/webflow-badge-text-d2.c82cec3b78.svg"
              )
              .attr("alt", "Made in Webflow");
          return E.append(A, O), E[0];
        }
        function p() {
          var E = i.children(o),
            A = E.length && E.get(0) === f,
            O = Hs.env("editor");
          if (A) {
            O && E.remove();
            return;
          }
          E.length && E.remove(), O || i.append(f);
        }
        return t;
      })
    );
  });
  var Ks = c((YU, zs) => {
    "use strict";
    var ki = Ne();
    ki.define(
      "edit",
      (zs.exports = function (e, t, r) {
        if (
          ((r = r || {}),
          (ki.env("test") || ki.env("frame")) && !r.fixture && !pb())
        )
          return { exit: 1 };
        var n = {},
          i = e(window),
          o = e(document.documentElement),
          a = document.location,
          s = "hashchange",
          u,
          f = r.load || p,
          b = !1;
        try {
          b =
            localStorage &&
            localStorage.getItem &&
            localStorage.getItem("WebflowEditor");
        } catch {}
        b
          ? f()
          : a.search
          ? (/[?&](edit)(?:[=&?]|$)/.test(a.search) ||
              /\?edit$/.test(a.href)) &&
            f()
          : i.on(s, v).triggerHandler(s);
        function v() {
          u || (/\?edit/.test(a.hash) && f());
        }
        function p() {
          (u = !0),
            (window.WebflowEditor = !0),
            i.off(s, v),
            y(function (D) {
              e.ajax({
                url: _("https://editor-api.webflow.com/api/editor/view"),
                data: { siteId: o.attr("data-wf-site") },
                xhrFields: { withCredentials: !0 },
                dataType: "json",
                crossDomain: !0,
                success: E(D),
              });
            });
        }
        function E(D) {
          return function (F) {
            if (!F) {
              console.error("Could not load editor data");
              return;
            }
            (F.thirdPartyCookiesSupported = D),
              A(S(F.scriptPath), function () {
                window.WebflowEditor(F);
              });
          };
        }
        function A(D, F) {
          e.ajax({ type: "GET", url: D, dataType: "script", cache: !0 }).then(
            F,
            O
          );
        }
        function O(D, F, q) {
          throw (console.error("Could not load editor script: " + F), q);
        }
        function S(D) {
          return D.indexOf("//") >= 0
            ? D
            : _("https://editor-api.webflow.com" + D);
        }
        function _(D) {
          return D.replace(/([^:])\/\//g, "$1/");
        }
        function y(D) {
          var F = window.document.createElement("iframe");
          (F.src = "https://webflow.com/site/third-party-cookie-check.html"),
            (F.style.display = "none"),
            (F.sandbox = "allow-scripts allow-same-origin");
          var q = function (W) {
            W.data === "WF_third_party_cookies_unsupported"
              ? (R(F, q), D(!1))
              : W.data === "WF_third_party_cookies_supported" &&
                (R(F, q), D(!0));
          };
          (F.onerror = function () {
            R(F, q), D(!1);
          }),
            window.addEventListener("message", q, !1),
            window.document.body.appendChild(F);
        }
        function R(D, F) {
          window.removeEventListener("message", F, !1), D.remove();
        }
        return n;
      })
    );
    function pb() {
      try {
        return window.top.__Cypress__;
      } catch {
        return !1;
      }
    }
  });
  var $s = c(($U, Ys) => {
    "use strict";
    var vb = Ne();
    vb.define(
      "focus-visible",
      (Ys.exports = function () {
        function e(r) {
          var n = !0,
            i = !1,
            o = null,
            a = {
              text: !0,
              search: !0,
              url: !0,
              tel: !0,
              email: !0,
              password: !0,
              number: !0,
              date: !0,
              month: !0,
              week: !0,
              time: !0,
              datetime: !0,
              "datetime-local": !0,
            };
          function s(R) {
            return !!(
              R &&
              R !== document &&
              R.nodeName !== "HTML" &&
              R.nodeName !== "BODY" &&
              "classList" in R &&
              "contains" in R.classList
            );
          }
          function u(R) {
            var D = R.type,
              F = R.tagName;
            return !!(
              (F === "INPUT" && a[D] && !R.readOnly) ||
              (F === "TEXTAREA" && !R.readOnly) ||
              R.isContentEditable
            );
          }
          function f(R) {
            R.getAttribute("data-wf-focus-visible") ||
              R.setAttribute("data-wf-focus-visible", "true");
          }
          function b(R) {
            R.getAttribute("data-wf-focus-visible") &&
              R.removeAttribute("data-wf-focus-visible");
          }
          function v(R) {
            R.metaKey ||
              R.altKey ||
              R.ctrlKey ||
              (s(r.activeElement) && f(r.activeElement), (n = !0));
          }
          function p() {
            n = !1;
          }
          function E(R) {
            s(R.target) && (n || u(R.target)) && f(R.target);
          }
          function A(R) {
            s(R.target) &&
              R.target.hasAttribute("data-wf-focus-visible") &&
              ((i = !0),
              window.clearTimeout(o),
              (o = window.setTimeout(function () {
                i = !1;
              }, 100)),
              b(R.target));
          }
          function O() {
            document.visibilityState === "hidden" && (i && (n = !0), S());
          }
          function S() {
            document.addEventListener("mousemove", y),
              document.addEventListener("mousedown", y),
              document.addEventListener("mouseup", y),
              document.addEventListener("pointermove", y),
              document.addEventListener("pointerdown", y),
              document.addEventListener("pointerup", y),
              document.addEventListener("touchmove", y),
              document.addEventListener("touchstart", y),
              document.addEventListener("touchend", y);
          }
          function _() {
            document.removeEventListener("mousemove", y),
              document.removeEventListener("mousedown", y),
              document.removeEventListener("mouseup", y),
              document.removeEventListener("pointermove", y),
              document.removeEventListener("pointerdown", y),
              document.removeEventListener("pointerup", y),
              document.removeEventListener("touchmove", y),
              document.removeEventListener("touchstart", y),
              document.removeEventListener("touchend", y);
          }
          function y(R) {
            (R.target.nodeName && R.target.nodeName.toLowerCase() === "html") ||
              ((n = !1), _());
          }
          document.addEventListener("keydown", v, !0),
            document.addEventListener("mousedown", p, !0),
            document.addEventListener("pointerdown", p, !0),
            document.addEventListener("touchstart", p, !0),
            document.addEventListener("visibilitychange", O, !0),
            S(),
            r.addEventListener("focus", E, !0),
            r.addEventListener("blur", A, !0);
        }
        function t() {
          if (typeof document < "u")
            try {
              document.querySelector(":focus-visible");
            } catch {
              e(document);
            }
        }
        return { ready: t };
      })
    );
  });
  var Js = c((QU, Zs) => {
    "use strict";
    var Qs = Ne();
    Qs.define(
      "focus",
      (Zs.exports = function () {
        var e = [],
          t = !1;
        function r(a) {
          t &&
            (a.preventDefault(),
            a.stopPropagation(),
            a.stopImmediatePropagation(),
            e.unshift(a));
        }
        function n(a) {
          var s = a.target,
            u = s.tagName;
          return (
            (/^a$/i.test(u) && s.href != null) ||
            (/^(button|textarea)$/i.test(u) && s.disabled !== !0) ||
            (/^input$/i.test(u) &&
              /^(button|reset|submit|radio|checkbox)$/i.test(s.type) &&
              !s.disabled) ||
            (!/^(button|input|textarea|select|a)$/i.test(u) &&
              !Number.isNaN(Number.parseFloat(s.tabIndex))) ||
            /^audio$/i.test(u) ||
            (/^video$/i.test(u) && s.controls === !0)
          );
        }
        function i(a) {
          n(a) &&
            ((t = !0),
            setTimeout(() => {
              for (t = !1, a.target.focus(); e.length > 0; ) {
                var s = e.pop();
                s.target.dispatchEvent(new MouseEvent(s.type, s));
              }
            }, 0));
        }
        function o() {
          typeof document < "u" &&
            document.body.hasAttribute("data-wf-focus-within") &&
            Qs.env.safari &&
            (document.addEventListener("mousedown", i, !0),
            document.addEventListener("mouseup", r, !0),
            document.addEventListener("click", r, !0));
        }
        return { ready: o };
      })
    );
  });
  var ru = c((ZU, tu) => {
    "use strict";
    var Gi = window.jQuery,
      it = {},
      ln = [],
      eu = ".w-ix",
      fn = {
        reset: function (e, t) {
          t.__wf_intro = null;
        },
        intro: function (e, t) {
          t.__wf_intro ||
            ((t.__wf_intro = !0), Gi(t).triggerHandler(it.types.INTRO));
        },
        outro: function (e, t) {
          t.__wf_intro &&
            ((t.__wf_intro = null), Gi(t).triggerHandler(it.types.OUTRO));
        },
      };
    it.triggers = {};
    it.types = { INTRO: "w-ix-intro" + eu, OUTRO: "w-ix-outro" + eu };
    it.init = function () {
      for (var e = ln.length, t = 0; t < e; t++) {
        var r = ln[t];
        r[0](0, r[1]);
      }
      (ln = []), Gi.extend(it.triggers, fn);
    };
    it.async = function () {
      for (var e in fn) {
        var t = fn[e];
        fn.hasOwnProperty(e) &&
          (it.triggers[e] = function (r, n) {
            ln.push([t, n]);
          });
      }
    };
    it.async();
    tu.exports = it;
  });
  var br = c((JU, ou) => {
    "use strict";
    var Vi = ru();
    function nu(e, t) {
      var r = document.createEvent("CustomEvent");
      r.initCustomEvent(t, !0, !0, null), e.dispatchEvent(r);
    }
    var gb = window.jQuery,
      dn = {},
      iu = ".w-ix",
      hb = {
        reset: function (e, t) {
          Vi.triggers.reset(e, t);
        },
        intro: function (e, t) {
          Vi.triggers.intro(e, t), nu(t, "COMPONENT_ACTIVE");
        },
        outro: function (e, t) {
          Vi.triggers.outro(e, t), nu(t, "COMPONENT_INACTIVE");
        },
      };
    dn.triggers = {};
    dn.types = { INTRO: "w-ix-intro" + iu, OUTRO: "w-ix-outro" + iu };
    gb.extend(dn.triggers, hb);
    ou.exports = dn;
  });
  var au = c((eB, dt) => {
    function Ui(e) {
      return (
        (dt.exports = Ui =
          typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  typeof Symbol == "function" &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              }),
        (dt.exports.__esModule = !0),
        (dt.exports.default = dt.exports),
        Ui(e)
      );
    }
    (dt.exports = Ui),
      (dt.exports.__esModule = !0),
      (dt.exports.default = dt.exports);
  });
  var pn = c((tB, Tr) => {
    var mb = au().default;
    function su(e) {
      if (typeof WeakMap != "function") return null;
      var t = new WeakMap(),
        r = new WeakMap();
      return (su = function (i) {
        return i ? r : t;
      })(e);
    }
    function yb(e, t) {
      if (!t && e && e.__esModule) return e;
      if (e === null || (mb(e) !== "object" && typeof e != "function"))
        return { default: e };
      var r = su(t);
      if (r && r.has(e)) return r.get(e);
      var n = {},
        i = Object.defineProperty && Object.getOwnPropertyDescriptor;
      for (var o in e)
        if (o !== "default" && Object.prototype.hasOwnProperty.call(e, o)) {
          var a = i ? Object.getOwnPropertyDescriptor(e, o) : null;
          a && (a.get || a.set)
            ? Object.defineProperty(n, o, a)
            : (n[o] = e[o]);
        }
      return (n.default = e), r && r.set(e, n), n;
    }
    (Tr.exports = yb),
      (Tr.exports.__esModule = !0),
      (Tr.exports.default = Tr.exports);
  });
  var uu = c((rB, Ir) => {
    function Eb(e) {
      return e && e.__esModule ? e : { default: e };
    }
    (Ir.exports = Eb),
      (Ir.exports.__esModule = !0),
      (Ir.exports.default = Ir.exports);
  });
  var me = c((nB, cu) => {
    var vn = function (e) {
      return e && e.Math == Math && e;
    };
    cu.exports =
      vn(typeof globalThis == "object" && globalThis) ||
      vn(typeof window == "object" && window) ||
      vn(typeof self == "object" && self) ||
      vn(typeof global == "object" && global) ||
      (function () {
        return this;
      })() ||
      Function("return this")();
  });
  var Ht = c((iB, lu) => {
    lu.exports = function (e) {
      try {
        return !!e();
      } catch {
        return !0;
      }
    };
  });
  var Lt = c((oB, fu) => {
    var _b = Ht();
    fu.exports = !_b(function () {
      return (
        Object.defineProperty({}, 1, {
          get: function () {
            return 7;
          },
        })[1] != 7
      );
    });
  });
  var gn = c((aB, du) => {
    var wr = Function.prototype.call;
    du.exports = wr.bind
      ? wr.bind(wr)
      : function () {
          return wr.apply(wr, arguments);
        };
  });
  var hu = c((gu) => {
    "use strict";
    var pu = {}.propertyIsEnumerable,
      vu = Object.getOwnPropertyDescriptor,
      bb = vu && !pu.call({ 1: 2 }, 1);
    gu.f = bb
      ? function (t) {
          var r = vu(this, t);
          return !!r && r.enumerable;
        }
      : pu;
  });
  var Bi = c((uB, mu) => {
    mu.exports = function (e, t) {
      return {
        enumerable: !(e & 1),
        configurable: !(e & 2),
        writable: !(e & 4),
        value: t,
      };
    };
  });
  var Ye = c((cB, Eu) => {
    var yu = Function.prototype,
      Wi = yu.bind,
      Hi = yu.call,
      Tb = Wi && Wi.bind(Hi);
    Eu.exports = Wi
      ? function (e) {
          return e && Tb(Hi, e);
        }
      : function (e) {
          return (
            e &&
            function () {
              return Hi.apply(e, arguments);
            }
          );
        };
  });
  var Tu = c((lB, bu) => {
    var _u = Ye(),
      Ib = _u({}.toString),
      wb = _u("".slice);
    bu.exports = function (e) {
      return wb(Ib(e), 8, -1);
    };
  });
  var wu = c((fB, Iu) => {
    var Ob = me(),
      Ab = Ye(),
      xb = Ht(),
      Sb = Tu(),
      Xi = Ob.Object,
      Cb = Ab("".split);
    Iu.exports = xb(function () {
      return !Xi("z").propertyIsEnumerable(0);
    })
      ? function (e) {
          return Sb(e) == "String" ? Cb(e, "") : Xi(e);
        }
      : Xi;
  });
  var ji = c((dB, Ou) => {
    var Rb = me(),
      Lb = Rb.TypeError;
    Ou.exports = function (e) {
      if (e == null) throw Lb("Can't call method on " + e);
      return e;
    };
  });
  var Or = c((pB, Au) => {
    var Nb = wu(),
      Pb = ji();
    Au.exports = function (e) {
      return Nb(Pb(e));
    };
  });
  var ot = c((vB, xu) => {
    xu.exports = function (e) {
      return typeof e == "function";
    };
  });
  var Xt = c((gB, Su) => {
    var qb = ot();
    Su.exports = function (e) {
      return typeof e == "object" ? e !== null : qb(e);
    };
  });
  var Ar = c((hB, Cu) => {
    var zi = me(),
      Mb = ot(),
      Fb = function (e) {
        return Mb(e) ? e : void 0;
      };
    Cu.exports = function (e, t) {
      return arguments.length < 2 ? Fb(zi[e]) : zi[e] && zi[e][t];
    };
  });
  var Lu = c((mB, Ru) => {
    var Db = Ye();
    Ru.exports = Db({}.isPrototypeOf);
  });
  var Pu = c((yB, Nu) => {
    var kb = Ar();
    Nu.exports = kb("navigator", "userAgent") || "";
  });
  var Vu = c((EB, Gu) => {
    var ku = me(),
      Ki = Pu(),
      qu = ku.process,
      Mu = ku.Deno,
      Fu = (qu && qu.versions) || (Mu && Mu.version),
      Du = Fu && Fu.v8,
      $e,
      hn;
    Du &&
      (($e = Du.split(".")),
      (hn = $e[0] > 0 && $e[0] < 4 ? 1 : +($e[0] + $e[1])));
    !hn &&
      Ki &&
      (($e = Ki.match(/Edge\/(\d+)/)),
      (!$e || $e[1] >= 74) &&
        (($e = Ki.match(/Chrome\/(\d+)/)), $e && (hn = +$e[1])));
    Gu.exports = hn;
  });
  var Yi = c((_B, Bu) => {
    var Uu = Vu(),
      Gb = Ht();
    Bu.exports =
      !!Object.getOwnPropertySymbols &&
      !Gb(function () {
        var e = Symbol();
        return (
          !String(e) ||
          !(Object(e) instanceof Symbol) ||
          (!Symbol.sham && Uu && Uu < 41)
        );
      });
  });
  var $i = c((bB, Wu) => {
    var Vb = Yi();
    Wu.exports = Vb && !Symbol.sham && typeof Symbol.iterator == "symbol";
  });
  var Qi = c((TB, Hu) => {
    var Ub = me(),
      Bb = Ar(),
      Wb = ot(),
      Hb = Lu(),
      Xb = $i(),
      jb = Ub.Object;
    Hu.exports = Xb
      ? function (e) {
          return typeof e == "symbol";
        }
      : function (e) {
          var t = Bb("Symbol");
          return Wb(t) && Hb(t.prototype, jb(e));
        };
  });
  var ju = c((IB, Xu) => {
    var zb = me(),
      Kb = zb.String;
    Xu.exports = function (e) {
      try {
        return Kb(e);
      } catch {
        return "Object";
      }
    };
  });
  var Ku = c((wB, zu) => {
    var Yb = me(),
      $b = ot(),
      Qb = ju(),
      Zb = Yb.TypeError;
    zu.exports = function (e) {
      if ($b(e)) return e;
      throw Zb(Qb(e) + " is not a function");
    };
  });
  var $u = c((OB, Yu) => {
    var Jb = Ku();
    Yu.exports = function (e, t) {
      var r = e[t];
      return r == null ? void 0 : Jb(r);
    };
  });
  var Zu = c((AB, Qu) => {
    var eT = me(),
      Zi = gn(),
      Ji = ot(),
      eo = Xt(),
      tT = eT.TypeError;
    Qu.exports = function (e, t) {
      var r, n;
      if (
        (t === "string" && Ji((r = e.toString)) && !eo((n = Zi(r, e)))) ||
        (Ji((r = e.valueOf)) && !eo((n = Zi(r, e)))) ||
        (t !== "string" && Ji((r = e.toString)) && !eo((n = Zi(r, e))))
      )
        return n;
      throw tT("Can't convert object to primitive value");
    };
  });
  var ec = c((xB, Ju) => {
    Ju.exports = !1;
  });
  var mn = c((SB, rc) => {
    var tc = me(),
      rT = Object.defineProperty;
    rc.exports = function (e, t) {
      try {
        rT(tc, e, { value: t, configurable: !0, writable: !0 });
      } catch {
        tc[e] = t;
      }
      return t;
    };
  });
  var yn = c((CB, ic) => {
    var nT = me(),
      iT = mn(),
      nc = "__core-js_shared__",
      oT = nT[nc] || iT(nc, {});
    ic.exports = oT;
  });
  var to = c((RB, ac) => {
    var aT = ec(),
      oc = yn();
    (ac.exports = function (e, t) {
      return oc[e] || (oc[e] = t !== void 0 ? t : {});
    })("versions", []).push({
      version: "3.19.0",
      mode: aT ? "pure" : "global",
      copyright: "\xA9 2021 Denis Pushkarev (zloirock.ru)",
    });
  });
  var uc = c((LB, sc) => {
    var sT = me(),
      uT = ji(),
      cT = sT.Object;
    sc.exports = function (e) {
      return cT(uT(e));
    };
  });
  var _t = c((NB, cc) => {
    var lT = Ye(),
      fT = uc(),
      dT = lT({}.hasOwnProperty);
    cc.exports =
      Object.hasOwn ||
      function (t, r) {
        return dT(fT(t), r);
      };
  });
  var ro = c((PB, lc) => {
    var pT = Ye(),
      vT = 0,
      gT = Math.random(),
      hT = pT((1).toString);
    lc.exports = function (e) {
      return "Symbol(" + (e === void 0 ? "" : e) + ")_" + hT(++vT + gT, 36);
    };
  });
  var no = c((qB, gc) => {
    var mT = me(),
      yT = to(),
      fc = _t(),
      ET = ro(),
      dc = Yi(),
      vc = $i(),
      jt = yT("wks"),
      Nt = mT.Symbol,
      pc = Nt && Nt.for,
      _T = vc ? Nt : (Nt && Nt.withoutSetter) || ET;
    gc.exports = function (e) {
      if (!fc(jt, e) || !(dc || typeof jt[e] == "string")) {
        var t = "Symbol." + e;
        dc && fc(Nt, e)
          ? (jt[e] = Nt[e])
          : vc && pc
          ? (jt[e] = pc(t))
          : (jt[e] = _T(t));
      }
      return jt[e];
    };
  });
  var Ec = c((MB, yc) => {
    var bT = me(),
      TT = gn(),
      hc = Xt(),
      mc = Qi(),
      IT = $u(),
      wT = Zu(),
      OT = no(),
      AT = bT.TypeError,
      xT = OT("toPrimitive");
    yc.exports = function (e, t) {
      if (!hc(e) || mc(e)) return e;
      var r = IT(e, xT),
        n;
      if (r) {
        if (
          (t === void 0 && (t = "default"), (n = TT(r, e, t)), !hc(n) || mc(n))
        )
          return n;
        throw AT("Can't convert object to primitive value");
      }
      return t === void 0 && (t = "number"), wT(e, t);
    };
  });
  var io = c((FB, _c) => {
    var ST = Ec(),
      CT = Qi();
    _c.exports = function (e) {
      var t = ST(e, "string");
      return CT(t) ? t : t + "";
    };
  });
  var ao = c((DB, Tc) => {
    var RT = me(),
      bc = Xt(),
      oo = RT.document,
      LT = bc(oo) && bc(oo.createElement);
    Tc.exports = function (e) {
      return LT ? oo.createElement(e) : {};
    };
  });
  var so = c((kB, Ic) => {
    var NT = Lt(),
      PT = Ht(),
      qT = ao();
    Ic.exports =
      !NT &&
      !PT(function () {
        return (
          Object.defineProperty(qT("div"), "a", {
            get: function () {
              return 7;
            },
          }).a != 7
        );
      });
  });
  var uo = c((Oc) => {
    var MT = Lt(),
      FT = gn(),
      DT = hu(),
      kT = Bi(),
      GT = Or(),
      VT = io(),
      UT = _t(),
      BT = so(),
      wc = Object.getOwnPropertyDescriptor;
    Oc.f = MT
      ? wc
      : function (t, r) {
          if (((t = GT(t)), (r = VT(r)), BT))
            try {
              return wc(t, r);
            } catch {}
          if (UT(t, r)) return kT(!FT(DT.f, t, r), t[r]);
        };
  });
  var xr = c((VB, xc) => {
    var Ac = me(),
      WT = Xt(),
      HT = Ac.String,
      XT = Ac.TypeError;
    xc.exports = function (e) {
      if (WT(e)) return e;
      throw XT(HT(e) + " is not an object");
    };
  });
  var Sr = c((Rc) => {
    var jT = me(),
      zT = Lt(),
      KT = so(),
      Sc = xr(),
      YT = io(),
      $T = jT.TypeError,
      Cc = Object.defineProperty;
    Rc.f = zT
      ? Cc
      : function (t, r, n) {
          if ((Sc(t), (r = YT(r)), Sc(n), KT))
            try {
              return Cc(t, r, n);
            } catch {}
          if ("get" in n || "set" in n) throw $T("Accessors not supported");
          return "value" in n && (t[r] = n.value), t;
        };
  });
  var En = c((BB, Lc) => {
    var QT = Lt(),
      ZT = Sr(),
      JT = Bi();
    Lc.exports = QT
      ? function (e, t, r) {
          return ZT.f(e, t, JT(1, r));
        }
      : function (e, t, r) {
          return (e[t] = r), e;
        };
  });
  var lo = c((WB, Nc) => {
    var eI = Ye(),
      tI = ot(),
      co = yn(),
      rI = eI(Function.toString);
    tI(co.inspectSource) ||
      (co.inspectSource = function (e) {
        return rI(e);
      });
    Nc.exports = co.inspectSource;
  });
  var Mc = c((HB, qc) => {
    var nI = me(),
      iI = ot(),
      oI = lo(),
      Pc = nI.WeakMap;
    qc.exports = iI(Pc) && /native code/.test(oI(Pc));
  });
  var fo = c((XB, Dc) => {
    var aI = to(),
      sI = ro(),
      Fc = aI("keys");
    Dc.exports = function (e) {
      return Fc[e] || (Fc[e] = sI(e));
    };
  });
  var _n = c((jB, kc) => {
    kc.exports = {};
  });
  var Hc = c((zB, Wc) => {
    var uI = Mc(),
      Bc = me(),
      po = Ye(),
      cI = Xt(),
      lI = En(),
      vo = _t(),
      go = yn(),
      fI = fo(),
      dI = _n(),
      Gc = "Object already initialized",
      mo = Bc.TypeError,
      pI = Bc.WeakMap,
      bn,
      Cr,
      Tn,
      vI = function (e) {
        return Tn(e) ? Cr(e) : bn(e, {});
      },
      gI = function (e) {
        return function (t) {
          var r;
          if (!cI(t) || (r = Cr(t)).type !== e)
            throw mo("Incompatible receiver, " + e + " required");
          return r;
        };
      };
    uI || go.state
      ? ((bt = go.state || (go.state = new pI())),
        (Vc = po(bt.get)),
        (ho = po(bt.has)),
        (Uc = po(bt.set)),
        (bn = function (e, t) {
          if (ho(bt, e)) throw new mo(Gc);
          return (t.facade = e), Uc(bt, e, t), t;
        }),
        (Cr = function (e) {
          return Vc(bt, e) || {};
        }),
        (Tn = function (e) {
          return ho(bt, e);
        }))
      : ((Pt = fI("state")),
        (dI[Pt] = !0),
        (bn = function (e, t) {
          if (vo(e, Pt)) throw new mo(Gc);
          return (t.facade = e), lI(e, Pt, t), t;
        }),
        (Cr = function (e) {
          return vo(e, Pt) ? e[Pt] : {};
        }),
        (Tn = function (e) {
          return vo(e, Pt);
        }));
    var bt, Vc, ho, Uc, Pt;
    Wc.exports = { set: bn, get: Cr, has: Tn, enforce: vI, getterFor: gI };
  });
  var zc = c((KB, jc) => {
    var yo = Lt(),
      hI = _t(),
      Xc = Function.prototype,
      mI = yo && Object.getOwnPropertyDescriptor,
      Eo = hI(Xc, "name"),
      yI = Eo && function () {}.name === "something",
      EI = Eo && (!yo || (yo && mI(Xc, "name").configurable));
    jc.exports = { EXISTS: Eo, PROPER: yI, CONFIGURABLE: EI };
  });
  var Zc = c((YB, Qc) => {
    var _I = me(),
      Kc = ot(),
      bI = _t(),
      Yc = En(),
      TI = mn(),
      II = lo(),
      $c = Hc(),
      wI = zc().CONFIGURABLE,
      OI = $c.get,
      AI = $c.enforce,
      xI = String(String).split("String");
    (Qc.exports = function (e, t, r, n) {
      var i = n ? !!n.unsafe : !1,
        o = n ? !!n.enumerable : !1,
        a = n ? !!n.noTargetGet : !1,
        s = n && n.name !== void 0 ? n.name : t,
        u;
      if (
        (Kc(r) &&
          (String(s).slice(0, 7) === "Symbol(" &&
            (s = "[" + String(s).replace(/^Symbol\(([^)]*)\)/, "$1") + "]"),
          (!bI(r, "name") || (wI && r.name !== s)) && Yc(r, "name", s),
          (u = AI(r)),
          u.source || (u.source = xI.join(typeof s == "string" ? s : ""))),
        e === _I)
      ) {
        o ? (e[t] = r) : TI(t, r);
        return;
      } else i ? !a && e[t] && (o = !0) : delete e[t];
      o ? (e[t] = r) : Yc(e, t, r);
    })(Function.prototype, "toString", function () {
      return (Kc(this) && OI(this).source) || II(this);
    });
  });
  var _o = c(($B, Jc) => {
    var SI = Math.ceil,
      CI = Math.floor;
    Jc.exports = function (e) {
      var t = +e;
      return t !== t || t === 0 ? 0 : (t > 0 ? CI : SI)(t);
    };
  });
  var tl = c((QB, el) => {
    var RI = _o(),
      LI = Math.max,
      NI = Math.min;
    el.exports = function (e, t) {
      var r = RI(e);
      return r < 0 ? LI(r + t, 0) : NI(r, t);
    };
  });
  var nl = c((ZB, rl) => {
    var PI = _o(),
      qI = Math.min;
    rl.exports = function (e) {
      return e > 0 ? qI(PI(e), 9007199254740991) : 0;
    };
  });
  var ol = c((JB, il) => {
    var MI = nl();
    il.exports = function (e) {
      return MI(e.length);
    };
  });
  var bo = c((eW, sl) => {
    var FI = Or(),
      DI = tl(),
      kI = ol(),
      al = function (e) {
        return function (t, r, n) {
          var i = FI(t),
            o = kI(i),
            a = DI(n, o),
            s;
          if (e && r != r) {
            for (; o > a; ) if (((s = i[a++]), s != s)) return !0;
          } else
            for (; o > a; a++)
              if ((e || a in i) && i[a] === r) return e || a || 0;
          return !e && -1;
        };
      };
    sl.exports = { includes: al(!0), indexOf: al(!1) };
  });
  var Io = c((tW, cl) => {
    var GI = Ye(),
      To = _t(),
      VI = Or(),
      UI = bo().indexOf,
      BI = _n(),
      ul = GI([].push);
    cl.exports = function (e, t) {
      var r = VI(e),
        n = 0,
        i = [],
        o;
      for (o in r) !To(BI, o) && To(r, o) && ul(i, o);
      for (; t.length > n; ) To(r, (o = t[n++])) && (~UI(i, o) || ul(i, o));
      return i;
    };
  });
  var In = c((rW, ll) => {
    ll.exports = [
      "constructor",
      "hasOwnProperty",
      "isPrototypeOf",
      "propertyIsEnumerable",
      "toLocaleString",
      "toString",
      "valueOf",
    ];
  });
  var dl = c((fl) => {
    var WI = Io(),
      HI = In(),
      XI = HI.concat("length", "prototype");
    fl.f =
      Object.getOwnPropertyNames ||
      function (t) {
        return WI(t, XI);
      };
  });
  var vl = c((pl) => {
    pl.f = Object.getOwnPropertySymbols;
  });
  var hl = c((oW, gl) => {
    var jI = Ar(),
      zI = Ye(),
      KI = dl(),
      YI = vl(),
      $I = xr(),
      QI = zI([].concat);
    gl.exports =
      jI("Reflect", "ownKeys") ||
      function (t) {
        var r = KI.f($I(t)),
          n = YI.f;
        return n ? QI(r, n(t)) : r;
      };
  });
  var yl = c((aW, ml) => {
    var ZI = _t(),
      JI = hl(),
      ew = uo(),
      tw = Sr();
    ml.exports = function (e, t) {
      for (var r = JI(t), n = tw.f, i = ew.f, o = 0; o < r.length; o++) {
        var a = r[o];
        ZI(e, a) || n(e, a, i(t, a));
      }
    };
  });
  var _l = c((sW, El) => {
    var rw = Ht(),
      nw = ot(),
      iw = /#|\.prototype\./,
      Rr = function (e, t) {
        var r = aw[ow(e)];
        return r == uw ? !0 : r == sw ? !1 : nw(t) ? rw(t) : !!t;
      },
      ow = (Rr.normalize = function (e) {
        return String(e).replace(iw, ".").toLowerCase();
      }),
      aw = (Rr.data = {}),
      sw = (Rr.NATIVE = "N"),
      uw = (Rr.POLYFILL = "P");
    El.exports = Rr;
  });
  var Tl = c((uW, bl) => {
    var wo = me(),
      cw = uo().f,
      lw = En(),
      fw = Zc(),
      dw = mn(),
      pw = yl(),
      vw = _l();
    bl.exports = function (e, t) {
      var r = e.target,
        n = e.global,
        i = e.stat,
        o,
        a,
        s,
        u,
        f,
        b;
      if (
        (n
          ? (a = wo)
          : i
          ? (a = wo[r] || dw(r, {}))
          : (a = (wo[r] || {}).prototype),
        a)
      )
        for (s in t) {
          if (
            ((f = t[s]),
            e.noTargetGet ? ((b = cw(a, s)), (u = b && b.value)) : (u = a[s]),
            (o = vw(n ? s : r + (i ? "." : "#") + s, e.forced)),
            !o && u !== void 0)
          ) {
            if (typeof f == typeof u) continue;
            pw(f, u);
          }
          (e.sham || (u && u.sham)) && lw(f, "sham", !0), fw(a, s, f, e);
        }
    };
  });
  var wl = c((cW, Il) => {
    var gw = Io(),
      hw = In();
    Il.exports =
      Object.keys ||
      function (t) {
        return gw(t, hw);
      };
  });
  var Al = c((lW, Ol) => {
    var mw = Lt(),
      yw = Sr(),
      Ew = xr(),
      _w = Or(),
      bw = wl();
    Ol.exports = mw
      ? Object.defineProperties
      : function (t, r) {
          Ew(t);
          for (var n = _w(r), i = bw(r), o = i.length, a = 0, s; o > a; )
            yw.f(t, (s = i[a++]), n[s]);
          return t;
        };
  });
  var Sl = c((fW, xl) => {
    var Tw = Ar();
    xl.exports = Tw("document", "documentElement");
  });
  var Fl = c((dW, Ml) => {
    var Iw = xr(),
      ww = Al(),
      Cl = In(),
      Ow = _n(),
      Aw = Sl(),
      xw = ao(),
      Sw = fo(),
      Rl = ">",
      Ll = "<",
      Ao = "prototype",
      xo = "script",
      Pl = Sw("IE_PROTO"),
      Oo = function () {},
      ql = function (e) {
        return Ll + xo + Rl + e + Ll + "/" + xo + Rl;
      },
      Nl = function (e) {
        e.write(ql("")), e.close();
        var t = e.parentWindow.Object;
        return (e = null), t;
      },
      Cw = function () {
        var e = xw("iframe"),
          t = "java" + xo + ":",
          r;
        return (
          (e.style.display = "none"),
          Aw.appendChild(e),
          (e.src = String(t)),
          (r = e.contentWindow.document),
          r.open(),
          r.write(ql("document.F=Object")),
          r.close(),
          r.F
        );
      },
      wn,
      On = function () {
        try {
          wn = new ActiveXObject("htmlfile");
        } catch {}
        On =
          typeof document < "u"
            ? document.domain && wn
              ? Nl(wn)
              : Cw()
            : Nl(wn);
        for (var e = Cl.length; e--; ) delete On[Ao][Cl[e]];
        return On();
      };
    Ow[Pl] = !0;
    Ml.exports =
      Object.create ||
      function (t, r) {
        var n;
        return (
          t !== null
            ? ((Oo[Ao] = Iw(t)), (n = new Oo()), (Oo[Ao] = null), (n[Pl] = t))
            : (n = On()),
          r === void 0 ? n : ww(n, r)
        );
      };
  });
  var kl = c((pW, Dl) => {
    var Rw = no(),
      Lw = Fl(),
      Nw = Sr(),
      So = Rw("unscopables"),
      Co = Array.prototype;
    Co[So] == null && Nw.f(Co, So, { configurable: !0, value: Lw(null) });
    Dl.exports = function (e) {
      Co[So][e] = !0;
    };
  });
  var Gl = c(() => {
    "use strict";
    var Pw = Tl(),
      qw = bo().includes,
      Mw = kl();
    Pw(
      { target: "Array", proto: !0 },
      {
        includes: function (t) {
          return qw(this, t, arguments.length > 1 ? arguments[1] : void 0);
        },
      }
    );
    Mw("includes");
  });
  var Ul = c((hW, Vl) => {
    var Fw = me(),
      Dw = Ye();
    Vl.exports = function (e, t) {
      return Dw(Fw[e].prototype[t]);
    };
  });
  var Wl = c((mW, Bl) => {
    Gl();
    var kw = Ul();
    Bl.exports = kw("Array", "includes");
  });
  var Xl = c((yW, Hl) => {
    var Gw = Wl();
    Hl.exports = Gw;
  });
  var zl = c((EW, jl) => {
    var Vw = Xl();
    jl.exports = Vw;
  });
  var Ro = c((_W, Kl) => {
    var Uw =
      typeof global == "object" && global && global.Object === Object && global;
    Kl.exports = Uw;
  });
  var Qe = c((bW, Yl) => {
    var Bw = Ro(),
      Ww = typeof self == "object" && self && self.Object === Object && self,
      Hw = Bw || Ww || Function("return this")();
    Yl.exports = Hw;
  });
  var zt = c((TW, $l) => {
    var Xw = Qe(),
      jw = Xw.Symbol;
    $l.exports = jw;
  });
  var ef = c((IW, Jl) => {
    var Ql = zt(),
      Zl = Object.prototype,
      zw = Zl.hasOwnProperty,
      Kw = Zl.toString,
      Lr = Ql ? Ql.toStringTag : void 0;
    function Yw(e) {
      var t = zw.call(e, Lr),
        r = e[Lr];
      try {
        e[Lr] = void 0;
        var n = !0;
      } catch {}
      var i = Kw.call(e);
      return n && (t ? (e[Lr] = r) : delete e[Lr]), i;
    }
    Jl.exports = Yw;
  });
  var rf = c((wW, tf) => {
    var $w = Object.prototype,
      Qw = $w.toString;
    function Zw(e) {
      return Qw.call(e);
    }
    tf.exports = Zw;
  });
  var Tt = c((OW, af) => {
    var nf = zt(),
      Jw = ef(),
      e0 = rf(),
      t0 = "[object Null]",
      r0 = "[object Undefined]",
      of = nf ? nf.toStringTag : void 0;
    function n0(e) {
      return e == null
        ? e === void 0
          ? r0
          : t0
        : of && of in Object(e)
        ? Jw(e)
        : e0(e);
    }
    af.exports = n0;
  });
  var Lo = c((AW, sf) => {
    function i0(e, t) {
      return function (r) {
        return e(t(r));
      };
    }
    sf.exports = i0;
  });
  var No = c((xW, uf) => {
    var o0 = Lo(),
      a0 = o0(Object.getPrototypeOf, Object);
    uf.exports = a0;
  });
  var pt = c((SW, cf) => {
    function s0(e) {
      return e != null && typeof e == "object";
    }
    cf.exports = s0;
  });
  var Po = c((CW, ff) => {
    var u0 = Tt(),
      c0 = No(),
      l0 = pt(),
      f0 = "[object Object]",
      d0 = Function.prototype,
      p0 = Object.prototype,
      lf = d0.toString,
      v0 = p0.hasOwnProperty,
      g0 = lf.call(Object);
    function h0(e) {
      if (!l0(e) || u0(e) != f0) return !1;
      var t = c0(e);
      if (t === null) return !0;
      var r = v0.call(t, "constructor") && t.constructor;
      return typeof r == "function" && r instanceof r && lf.call(r) == g0;
    }
    ff.exports = h0;
  });
  var df = c((qo) => {
    "use strict";
    Object.defineProperty(qo, "__esModule", { value: !0 });
    qo.default = m0;
    function m0(e) {
      var t,
        r = e.Symbol;
      return (
        typeof r == "function"
          ? r.observable
            ? (t = r.observable)
            : ((t = r("observable")), (r.observable = t))
          : (t = "@@observable"),
        t
      );
    }
  });
  var pf = c((Fo, Mo) => {
    "use strict";
    Object.defineProperty(Fo, "__esModule", { value: !0 });
    var y0 = df(),
      E0 = _0(y0);
    function _0(e) {
      return e && e.__esModule ? e : { default: e };
    }
    var Kt;
    typeof self < "u"
      ? (Kt = self)
      : typeof window < "u"
      ? (Kt = window)
      : typeof global < "u"
      ? (Kt = global)
      : typeof Mo < "u"
      ? (Kt = Mo)
      : (Kt = Function("return this")());
    var b0 = (0, E0.default)(Kt);
    Fo.default = b0;
  });
  var Do = c((Nr) => {
    "use strict";
    Nr.__esModule = !0;
    Nr.ActionTypes = void 0;
    Nr.default = mf;
    var T0 = Po(),
      I0 = hf(T0),
      w0 = pf(),
      vf = hf(w0);
    function hf(e) {
      return e && e.__esModule ? e : { default: e };
    }
    var gf = (Nr.ActionTypes = { INIT: "@@redux/INIT" });
    function mf(e, t, r) {
      var n;
      if (
        (typeof t == "function" && typeof r > "u" && ((r = t), (t = void 0)),
        typeof r < "u")
      ) {
        if (typeof r != "function")
          throw new Error("Expected the enhancer to be a function.");
        return r(mf)(e, t);
      }
      if (typeof e != "function")
        throw new Error("Expected the reducer to be a function.");
      var i = e,
        o = t,
        a = [],
        s = a,
        u = !1;
      function f() {
        s === a && (s = a.slice());
      }
      function b() {
        return o;
      }
      function v(O) {
        if (typeof O != "function")
          throw new Error("Expected listener to be a function.");
        var S = !0;
        return (
          f(),
          s.push(O),
          function () {
            if (S) {
              (S = !1), f();
              var y = s.indexOf(O);
              s.splice(y, 1);
            }
          }
        );
      }
      function p(O) {
        if (!(0, I0.default)(O))
          throw new Error(
            "Actions must be plain objects. Use custom middleware for async actions."
          );
        if (typeof O.type > "u")
          throw new Error(
            'Actions may not have an undefined "type" property. Have you misspelled a constant?'
          );
        if (u) throw new Error("Reducers may not dispatch actions.");
        try {
          (u = !0), (o = i(o, O));
        } finally {
          u = !1;
        }
        for (var S = (a = s), _ = 0; _ < S.length; _++) S[_]();
        return O;
      }
      function E(O) {
        if (typeof O != "function")
          throw new Error("Expected the nextReducer to be a function.");
        (i = O), p({ type: gf.INIT });
      }
      function A() {
        var O,
          S = v;
        return (
          (O = {
            subscribe: function (y) {
              if (typeof y != "object")
                throw new TypeError("Expected the observer to be an object.");
              function R() {
                y.next && y.next(b());
              }
              R();
              var D = S(R);
              return { unsubscribe: D };
            },
          }),
          (O[vf.default] = function () {
            return this;
          }),
          O
        );
      }
      return (
        p({ type: gf.INIT }),
        (n = { dispatch: p, subscribe: v, getState: b, replaceReducer: E }),
        (n[vf.default] = A),
        n
      );
    }
  });
  var Go = c((ko) => {
    "use strict";
    ko.__esModule = !0;
    ko.default = O0;
    function O0(e) {
      typeof console < "u" &&
        typeof console.error == "function" &&
        console.error(e);
      try {
        throw new Error(e);
      } catch {}
    }
  });
  var _f = c((Vo) => {
    "use strict";
    Vo.__esModule = !0;
    Vo.default = R0;
    var yf = Do(),
      A0 = Po(),
      PW = Ef(A0),
      x0 = Go(),
      qW = Ef(x0);
    function Ef(e) {
      return e && e.__esModule ? e : { default: e };
    }
    function S0(e, t) {
      var r = t && t.type,
        n = (r && '"' + r.toString() + '"') || "an action";
      return (
        "Given action " +
        n +
        ', reducer "' +
        e +
        '" returned undefined. To ignore an action, you must explicitly return the previous state.'
      );
    }
    function C0(e) {
      Object.keys(e).forEach(function (t) {
        var r = e[t],
          n = r(void 0, { type: yf.ActionTypes.INIT });
        if (typeof n > "u")
          throw new Error(
            'Reducer "' +
              t +
              '" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined.'
          );
        var i =
          "@@redux/PROBE_UNKNOWN_ACTION_" +
          Math.random().toString(36).substring(7).split("").join(".");
        if (typeof r(void 0, { type: i }) > "u")
          throw new Error(
            'Reducer "' +
              t +
              '" returned undefined when probed with a random type. ' +
              ("Don't try to handle " +
                yf.ActionTypes.INIT +
                ' or other actions in "redux/*" ') +
              "namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined."
          );
      });
    }
    function R0(e) {
      for (var t = Object.keys(e), r = {}, n = 0; n < t.length; n++) {
        var i = t[n];
        typeof e[i] == "function" && (r[i] = e[i]);
      }
      var o = Object.keys(r);
      if (!1) var a;
      var s;
      try {
        C0(r);
      } catch (u) {
        s = u;
      }
      return function () {
        var f =
            arguments.length <= 0 || arguments[0] === void 0
              ? {}
              : arguments[0],
          b = arguments[1];
        if (s) throw s;
        if (!1) var v;
        for (var p = !1, E = {}, A = 0; A < o.length; A++) {
          var O = o[A],
            S = r[O],
            _ = f[O],
            y = S(_, b);
          if (typeof y > "u") {
            var R = S0(O, b);
            throw new Error(R);
          }
          (E[O] = y), (p = p || y !== _);
        }
        return p ? E : f;
      };
    }
  });
  var Tf = c((Uo) => {
    "use strict";
    Uo.__esModule = !0;
    Uo.default = L0;
    function bf(e, t) {
      return function () {
        return t(e.apply(void 0, arguments));
      };
    }
    function L0(e, t) {
      if (typeof e == "function") return bf(e, t);
      if (typeof e != "object" || e === null)
        throw new Error(
          "bindActionCreators expected an object or a function, instead received " +
            (e === null ? "null" : typeof e) +
            '. Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?'
        );
      for (var r = Object.keys(e), n = {}, i = 0; i < r.length; i++) {
        var o = r[i],
          a = e[o];
        typeof a == "function" && (n[o] = bf(a, t));
      }
      return n;
    }
  });
  var Wo = c((Bo) => {
    "use strict";
    Bo.__esModule = !0;
    Bo.default = N0;
    function N0() {
      for (var e = arguments.length, t = Array(e), r = 0; r < e; r++)
        t[r] = arguments[r];
      if (t.length === 0)
        return function (o) {
          return o;
        };
      if (t.length === 1) return t[0];
      var n = t[t.length - 1],
        i = t.slice(0, -1);
      return function () {
        return i.reduceRight(function (o, a) {
          return a(o);
        }, n.apply(void 0, arguments));
      };
    }
  });
  var If = c((Ho) => {
    "use strict";
    Ho.__esModule = !0;
    var P0 =
      Object.assign ||
      function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = arguments[t];
          for (var n in r)
            Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
        }
        return e;
      };
    Ho.default = D0;
    var q0 = Wo(),
      M0 = F0(q0);
    function F0(e) {
      return e && e.__esModule ? e : { default: e };
    }
    function D0() {
      for (var e = arguments.length, t = Array(e), r = 0; r < e; r++)
        t[r] = arguments[r];
      return function (n) {
        return function (i, o, a) {
          var s = n(i, o, a),
            u = s.dispatch,
            f = [],
            b = {
              getState: s.getState,
              dispatch: function (p) {
                return u(p);
              },
            };
          return (
            (f = t.map(function (v) {
              return v(b);
            })),
            (u = M0.default.apply(void 0, f)(s.dispatch)),
            P0({}, s, { dispatch: u })
          );
        };
      };
    }
  });
  var Xo = c((We) => {
    "use strict";
    We.__esModule = !0;
    We.compose = We.applyMiddleware = We.bindActionCreators = We.combineReducers = We.createStore = void 0;
    var k0 = Do(),
      G0 = Yt(k0),
      V0 = _f(),
      U0 = Yt(V0),
      B0 = Tf(),
      W0 = Yt(B0),
      H0 = If(),
      X0 = Yt(H0),
      j0 = Wo(),
      z0 = Yt(j0),
      K0 = Go(),
      GW = Yt(K0);
    function Yt(e) {
      return e && e.__esModule ? e : { default: e };
    }
    We.createStore = G0.default;
    We.combineReducers = U0.default;
    We.bindActionCreators = W0.default;
    We.applyMiddleware = X0.default;
    We.compose = z0.default;
  });
  var Ze,
    jo,
    at,
    Y0,
    $0,
    An,
    Q0,
    zo = he(() => {
      "use strict";
      (Ze = {
        NAVBAR_OPEN: "NAVBAR_OPEN",
        NAVBAR_CLOSE: "NAVBAR_CLOSE",
        TAB_ACTIVE: "TAB_ACTIVE",
        TAB_INACTIVE: "TAB_INACTIVE",
        SLIDER_ACTIVE: "SLIDER_ACTIVE",
        SLIDER_INACTIVE: "SLIDER_INACTIVE",
        DROPDOWN_OPEN: "DROPDOWN_OPEN",
        DROPDOWN_CLOSE: "DROPDOWN_CLOSE",
        MOUSE_CLICK: "MOUSE_CLICK",
        MOUSE_SECOND_CLICK: "MOUSE_SECOND_CLICK",
        MOUSE_DOWN: "MOUSE_DOWN",
        MOUSE_UP: "MOUSE_UP",
        MOUSE_OVER: "MOUSE_OVER",
        MOUSE_OUT: "MOUSE_OUT",
        MOUSE_MOVE: "MOUSE_MOVE",
        MOUSE_MOVE_IN_VIEWPORT: "MOUSE_MOVE_IN_VIEWPORT",
        SCROLL_INTO_VIEW: "SCROLL_INTO_VIEW",
        SCROLL_OUT_OF_VIEW: "SCROLL_OUT_OF_VIEW",
        SCROLLING_IN_VIEW: "SCROLLING_IN_VIEW",
        ECOMMERCE_CART_OPEN: "ECOMMERCE_CART_OPEN",
        ECOMMERCE_CART_CLOSE: "ECOMMERCE_CART_CLOSE",
        PAGE_START: "PAGE_START",
        PAGE_FINISH: "PAGE_FINISH",
        PAGE_SCROLL_UP: "PAGE_SCROLL_UP",
        PAGE_SCROLL_DOWN: "PAGE_SCROLL_DOWN",
        PAGE_SCROLL: "PAGE_SCROLL",
      }),
        (jo = { ELEMENT: "ELEMENT", CLASS: "CLASS", PAGE: "PAGE" }),
        (at = { ELEMENT: "ELEMENT", VIEWPORT: "VIEWPORT" }),
        (Y0 = { X_AXIS: "X_AXIS", Y_AXIS: "Y_AXIS" }),
        ($0 = {
          CHILDREN: "CHILDREN",
          SIBLINGS: "SIBLINGS",
          IMMEDIATE_CHILDREN: "IMMEDIATE_CHILDREN",
        }),
        (An = {
          FADE_EFFECT: "FADE_EFFECT",
          SLIDE_EFFECT: "SLIDE_EFFECT",
          GROW_EFFECT: "GROW_EFFECT",
          SHRINK_EFFECT: "SHRINK_EFFECT",
          SPIN_EFFECT: "SPIN_EFFECT",
          FLY_EFFECT: "FLY_EFFECT",
          POP_EFFECT: "POP_EFFECT",
          FLIP_EFFECT: "FLIP_EFFECT",
          JIGGLE_EFFECT: "JIGGLE_EFFECT",
          PULSE_EFFECT: "PULSE_EFFECT",
          DROP_EFFECT: "DROP_EFFECT",
          BLINK_EFFECT: "BLINK_EFFECT",
          BOUNCE_EFFECT: "BOUNCE_EFFECT",
          FLIP_LEFT_TO_RIGHT_EFFECT: "FLIP_LEFT_TO_RIGHT_EFFECT",
          FLIP_RIGHT_TO_LEFT_EFFECT: "FLIP_RIGHT_TO_LEFT_EFFECT",
          RUBBER_BAND_EFFECT: "RUBBER_BAND_EFFECT",
          JELLO_EFFECT: "JELLO_EFFECT",
          GROW_BIG_EFFECT: "GROW_BIG_EFFECT",
          SHRINK_BIG_EFFECT: "SHRINK_BIG_EFFECT",
          PLUGIN_LOTTIE_EFFECT: "PLUGIN_LOTTIE_EFFECT",
        }),
        (Q0 = {
          LEFT: "LEFT",
          RIGHT: "RIGHT",
          BOTTOM: "BOTTOM",
          TOP: "TOP",
          BOTTOM_LEFT: "BOTTOM_LEFT",
          BOTTOM_RIGHT: "BOTTOM_RIGHT",
          TOP_RIGHT: "TOP_RIGHT",
          TOP_LEFT: "TOP_LEFT",
          CLOCKWISE: "CLOCKWISE",
          COUNTER_CLOCKWISE: "COUNTER_CLOCKWISE",
        });
    });
  var Ge,
    Z0,
    xn = he(() => {
      "use strict";
      (Ge = {
        TRANSFORM_MOVE: "TRANSFORM_MOVE",
        TRANSFORM_SCALE: "TRANSFORM_SCALE",
        TRANSFORM_ROTATE: "TRANSFORM_ROTATE",
        TRANSFORM_SKEW: "TRANSFORM_SKEW",
        STYLE_OPACITY: "STYLE_OPACITY",
        STYLE_SIZE: "STYLE_SIZE",
        STYLE_FILTER: "STYLE_FILTER",
        STYLE_FONT_VARIATION: "STYLE_FONT_VARIATION",
        STYLE_BACKGROUND_COLOR: "STYLE_BACKGROUND_COLOR",
        STYLE_BORDER: "STYLE_BORDER",
        STYLE_TEXT_COLOR: "STYLE_TEXT_COLOR",
        OBJECT_VALUE: "OBJECT_VALUE",
        PLUGIN_LOTTIE: "PLUGIN_LOTTIE",
        PLUGIN_SPLINE: "PLUGIN_SPLINE",
        PLUGIN_VARIABLE: "PLUGIN_VARIABLE",
        GENERAL_DISPLAY: "GENERAL_DISPLAY",
        GENERAL_START_ACTION: "GENERAL_START_ACTION",
        GENERAL_CONTINUOUS_ACTION: "GENERAL_CONTINUOUS_ACTION",
        GENERAL_COMBO_CLASS: "GENERAL_COMBO_CLASS",
        GENERAL_STOP_ACTION: "GENERAL_STOP_ACTION",
        GENERAL_LOOP: "GENERAL_LOOP",
        STYLE_BOX_SHADOW: "STYLE_BOX_SHADOW",
      }),
        (Z0 = {
          ELEMENT: "ELEMENT",
          ELEMENT_CLASS: "ELEMENT_CLASS",
          TRIGGER_ELEMENT: "TRIGGER_ELEMENT",
        });
    });
  var J0,
    wf = he(() => {
      "use strict";
      J0 = {
        MOUSE_CLICK_INTERACTION: "MOUSE_CLICK_INTERACTION",
        MOUSE_HOVER_INTERACTION: "MOUSE_HOVER_INTERACTION",
        MOUSE_MOVE_INTERACTION: "MOUSE_MOVE_INTERACTION",
        SCROLL_INTO_VIEW_INTERACTION: "SCROLL_INTO_VIEW_INTERACTION",
        SCROLLING_IN_VIEW_INTERACTION: "SCROLLING_IN_VIEW_INTERACTION",
        MOUSE_MOVE_IN_VIEWPORT_INTERACTION:
          "MOUSE_MOVE_IN_VIEWPORT_INTERACTION",
        PAGE_IS_SCROLLING_INTERACTION: "PAGE_IS_SCROLLING_INTERACTION",
        PAGE_LOAD_INTERACTION: "PAGE_LOAD_INTERACTION",
        PAGE_SCROLLED_INTERACTION: "PAGE_SCROLLED_INTERACTION",
        NAVBAR_INTERACTION: "NAVBAR_INTERACTION",
        DROPDOWN_INTERACTION: "DROPDOWN_INTERACTION",
        ECOMMERCE_CART_INTERACTION: "ECOMMERCE_CART_INTERACTION",
        TAB_INTERACTION: "TAB_INTERACTION",
        SLIDER_INTERACTION: "SLIDER_INTERACTION",
      };
    });
  var eO,
    tO,
    rO,
    nO,
    iO,
    oO,
    aO,
    Ko,
    Of = he(() => {
      "use strict";
      xn();
      ({
        TRANSFORM_MOVE: eO,
        TRANSFORM_SCALE: tO,
        TRANSFORM_ROTATE: rO,
        TRANSFORM_SKEW: nO,
        STYLE_SIZE: iO,
        STYLE_FILTER: oO,
        STYLE_FONT_VARIATION: aO,
      } = Ge),
        (Ko = {
          [eO]: !0,
          [tO]: !0,
          [rO]: !0,
          [nO]: !0,
          [iO]: !0,
          [oO]: !0,
          [aO]: !0,
        });
    });
  var Ie = {};
  ke(Ie, {
    IX2_ACTION_LIST_PLAYBACK_CHANGED: () => IO,
    IX2_ANIMATION_FRAME_CHANGED: () => mO,
    IX2_CLEAR_REQUESTED: () => vO,
    IX2_ELEMENT_STATE_CHANGED: () => TO,
    IX2_EVENT_LISTENER_ADDED: () => gO,
    IX2_EVENT_STATE_CHANGED: () => hO,
    IX2_INSTANCE_ADDED: () => EO,
    IX2_INSTANCE_REMOVED: () => bO,
    IX2_INSTANCE_STARTED: () => _O,
    IX2_MEDIA_QUERIES_DEFINED: () => OO,
    IX2_PARAMETER_CHANGED: () => yO,
    IX2_PLAYBACK_REQUESTED: () => dO,
    IX2_PREVIEW_REQUESTED: () => fO,
    IX2_RAW_DATA_IMPORTED: () => sO,
    IX2_SESSION_INITIALIZED: () => uO,
    IX2_SESSION_STARTED: () => cO,
    IX2_SESSION_STOPPED: () => lO,
    IX2_STOP_REQUESTED: () => pO,
    IX2_TEST_FRAME_RENDERED: () => AO,
    IX2_VIEWPORT_WIDTH_CHANGED: () => wO,
  });
  var sO,
    uO,
    cO,
    lO,
    fO,
    dO,
    pO,
    vO,
    gO,
    hO,
    mO,
    yO,
    EO,
    _O,
    bO,
    TO,
    IO,
    wO,
    OO,
    AO,
    Af = he(() => {
      "use strict";
      (sO = "IX2_RAW_DATA_IMPORTED"),
        (uO = "IX2_SESSION_INITIALIZED"),
        (cO = "IX2_SESSION_STARTED"),
        (lO = "IX2_SESSION_STOPPED"),
        (fO = "IX2_PREVIEW_REQUESTED"),
        (dO = "IX2_PLAYBACK_REQUESTED"),
        (pO = "IX2_STOP_REQUESTED"),
        (vO = "IX2_CLEAR_REQUESTED"),
        (gO = "IX2_EVENT_LISTENER_ADDED"),
        (hO = "IX2_EVENT_STATE_CHANGED"),
        (mO = "IX2_ANIMATION_FRAME_CHANGED"),
        (yO = "IX2_PARAMETER_CHANGED"),
        (EO = "IX2_INSTANCE_ADDED"),
        (_O = "IX2_INSTANCE_STARTED"),
        (bO = "IX2_INSTANCE_REMOVED"),
        (TO = "IX2_ELEMENT_STATE_CHANGED"),
        (IO = "IX2_ACTION_LIST_PLAYBACK_CHANGED"),
        (wO = "IX2_VIEWPORT_WIDTH_CHANGED"),
        (OO = "IX2_MEDIA_QUERIES_DEFINED"),
        (AO = "IX2_TEST_FRAME_RENDERED");
    });
  var Ce = {};
  ke(Ce, {
    ABSTRACT_NODE: () => wA,
    AUTO: () => pA,
    BACKGROUND: () => sA,
    BACKGROUND_COLOR: () => aA,
    BAR_DELIMITER: () => hA,
    BORDER_COLOR: () => uA,
    BOUNDARY_SELECTOR: () => LO,
    CHILDREN: () => mA,
    COLON_DELIMITER: () => gA,
    COLOR: () => cA,
    COMMA_DELIMITER: () => vA,
    CONFIG_UNIT: () => GO,
    CONFIG_VALUE: () => MO,
    CONFIG_X_UNIT: () => FO,
    CONFIG_X_VALUE: () => NO,
    CONFIG_Y_UNIT: () => DO,
    CONFIG_Y_VALUE: () => PO,
    CONFIG_Z_UNIT: () => kO,
    CONFIG_Z_VALUE: () => qO,
    DISPLAY: () => lA,
    FILTER: () => rA,
    FLEX: () => fA,
    FONT_VARIATION_SETTINGS: () => nA,
    HEIGHT: () => oA,
    HTML_ELEMENT: () => TA,
    IMMEDIATE_CHILDREN: () => yA,
    IX2_ID_DELIMITER: () => xO,
    OPACITY: () => tA,
    PARENT: () => _A,
    PLAIN_OBJECT: () => IA,
    PRESERVE_3D: () => bA,
    RENDER_GENERAL: () => AA,
    RENDER_PLUGIN: () => SA,
    RENDER_STYLE: () => xA,
    RENDER_TRANSFORM: () => OA,
    ROTATE_X: () => YO,
    ROTATE_Y: () => $O,
    ROTATE_Z: () => QO,
    SCALE_3D: () => KO,
    SCALE_X: () => XO,
    SCALE_Y: () => jO,
    SCALE_Z: () => zO,
    SIBLINGS: () => EA,
    SKEW: () => ZO,
    SKEW_X: () => JO,
    SKEW_Y: () => eA,
    TRANSFORM: () => VO,
    TRANSLATE_3D: () => HO,
    TRANSLATE_X: () => UO,
    TRANSLATE_Y: () => BO,
    TRANSLATE_Z: () => WO,
    WF_PAGE: () => SO,
    WIDTH: () => iA,
    WILL_CHANGE: () => dA,
    W_MOD_IX: () => RO,
    W_MOD_JS: () => CO,
  });
  var xO,
    SO,
    CO,
    RO,
    LO,
    NO,
    PO,
    qO,
    MO,
    FO,
    DO,
    kO,
    GO,
    VO,
    UO,
    BO,
    WO,
    HO,
    XO,
    jO,
    zO,
    KO,
    YO,
    $O,
    QO,
    ZO,
    JO,
    eA,
    tA,
    rA,
    nA,
    iA,
    oA,
    aA,
    sA,
    uA,
    cA,
    lA,
    fA,
    dA,
    pA,
    vA,
    gA,
    hA,
    mA,
    yA,
    EA,
    _A,
    bA,
    TA,
    IA,
    wA,
    OA,
    AA,
    xA,
    SA,
    xf = he(() => {
      "use strict";
      (xO = "|"),
        (SO = "data-wf-page"),
        (CO = "w-mod-js"),
        (RO = "w-mod-ix"),
        (LO = ".w-dyn-item"),
        (NO = "xValue"),
        (PO = "yValue"),
        (qO = "zValue"),
        (MO = "value"),
        (FO = "xUnit"),
        (DO = "yUnit"),
        (kO = "zUnit"),
        (GO = "unit"),
        (VO = "transform"),
        (UO = "translateX"),
        (BO = "translateY"),
        (WO = "translateZ"),
        (HO = "translate3d"),
        (XO = "scaleX"),
        (jO = "scaleY"),
        (zO = "scaleZ"),
        (KO = "scale3d"),
        (YO = "rotateX"),
        ($O = "rotateY"),
        (QO = "rotateZ"),
        (ZO = "skew"),
        (JO = "skewX"),
        (eA = "skewY"),
        (tA = "opacity"),
        (rA = "filter"),
        (nA = "font-variation-settings"),
        (iA = "width"),
        (oA = "height"),
        (aA = "backgroundColor"),
        (sA = "background"),
        (uA = "borderColor"),
        (cA = "color"),
        (lA = "display"),
        (fA = "flex"),
        (dA = "willChange"),
        (pA = "AUTO"),
        (vA = ","),
        (gA = ":"),
        (hA = "|"),
        (mA = "CHILDREN"),
        (yA = "IMMEDIATE_CHILDREN"),
        (EA = "SIBLINGS"),
        (_A = "PARENT"),
        (bA = "preserve-3d"),
        (TA = "HTML_ELEMENT"),
        (IA = "PLAIN_OBJECT"),
        (wA = "ABSTRACT_NODE"),
        (OA = "RENDER_TRANSFORM"),
        (AA = "RENDER_GENERAL"),
        (xA = "RENDER_STYLE"),
        (SA = "RENDER_PLUGIN");
    });
  var Sf = {};
  ke(Sf, {
    ActionAppliesTo: () => Z0,
    ActionTypeConsts: () => Ge,
    EventAppliesTo: () => jo,
    EventBasedOn: () => at,
    EventContinuousMouseAxes: () => Y0,
    EventLimitAffectedElements: () => $0,
    EventTypeConsts: () => Ze,
    IX2EngineActionTypes: () => Ie,
    IX2EngineConstants: () => Ce,
    InteractionTypeConsts: () => J0,
    QuickEffectDirectionConsts: () => Q0,
    QuickEffectIds: () => An,
    ReducedMotionTypes: () => Ko,
  });
  var Ve = he(() => {
    "use strict";
    zo();
    xn();
    wf();
    Of();
    Af();
    xf();
    xn();
    zo();
  });
  var CA,
    Cf,
    Rf = he(() => {
      "use strict";
      Ve();
      ({ IX2_RAW_DATA_IMPORTED: CA } = Ie),
        (Cf = (e = Object.freeze({}), t) => {
          switch (t.type) {
            case CA:
              return t.payload.ixData || Object.freeze({});
            default:
              return e;
          }
        });
    });
  var $t = c((Ee) => {
    "use strict";
    Object.defineProperty(Ee, "__esModule", { value: !0 });
    var RA =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (e) {
            return typeof e;
          }
        : function (e) {
            return e &&
              typeof Symbol == "function" &&
              e.constructor === Symbol &&
              e !== Symbol.prototype
              ? "symbol"
              : typeof e;
          };
    Ee.clone = Cn;
    Ee.addLast = Pf;
    Ee.addFirst = qf;
    Ee.removeLast = Mf;
    Ee.removeFirst = Ff;
    Ee.insert = Df;
    Ee.removeAt = kf;
    Ee.replaceAt = Gf;
    Ee.getIn = Rn;
    Ee.set = Ln;
    Ee.setIn = Nn;
    Ee.update = Uf;
    Ee.updateIn = Bf;
    Ee.merge = Wf;
    Ee.mergeDeep = Hf;
    Ee.mergeIn = Xf;
    Ee.omit = jf;
    Ee.addDefaults = zf;
    var Lf = "INVALID_ARGS";
    function Nf(e) {
      throw new Error(e);
    }
    function Yo(e) {
      var t = Object.keys(e);
      return Object.getOwnPropertySymbols
        ? t.concat(Object.getOwnPropertySymbols(e))
        : t;
    }
    var LA = {}.hasOwnProperty;
    function Cn(e) {
      if (Array.isArray(e)) return e.slice();
      for (var t = Yo(e), r = {}, n = 0; n < t.length; n++) {
        var i = t[n];
        r[i] = e[i];
      }
      return r;
    }
    function Ue(e, t, r) {
      var n = r;
      n == null && Nf(Lf);
      for (
        var i = !1, o = arguments.length, a = Array(o > 3 ? o - 3 : 0), s = 3;
        s < o;
        s++
      )
        a[s - 3] = arguments[s];
      for (var u = 0; u < a.length; u++) {
        var f = a[u];
        if (f != null) {
          var b = Yo(f);
          if (b.length)
            for (var v = 0; v <= b.length; v++) {
              var p = b[v];
              if (!(e && n[p] !== void 0)) {
                var E = f[p];
                t && Sn(n[p]) && Sn(E) && (E = Ue(e, t, n[p], E)),
                  !(E === void 0 || E === n[p]) &&
                    (i || ((i = !0), (n = Cn(n))), (n[p] = E));
              }
            }
        }
      }
      return n;
    }
    function Sn(e) {
      var t = typeof e > "u" ? "undefined" : RA(e);
      return e != null && (t === "object" || t === "function");
    }
    function Pf(e, t) {
      return Array.isArray(t) ? e.concat(t) : e.concat([t]);
    }
    function qf(e, t) {
      return Array.isArray(t) ? t.concat(e) : [t].concat(e);
    }
    function Mf(e) {
      return e.length ? e.slice(0, e.length - 1) : e;
    }
    function Ff(e) {
      return e.length ? e.slice(1) : e;
    }
    function Df(e, t, r) {
      return e
        .slice(0, t)
        .concat(Array.isArray(r) ? r : [r])
        .concat(e.slice(t));
    }
    function kf(e, t) {
      return t >= e.length || t < 0 ? e : e.slice(0, t).concat(e.slice(t + 1));
    }
    function Gf(e, t, r) {
      if (e[t] === r) return e;
      for (var n = e.length, i = Array(n), o = 0; o < n; o++) i[o] = e[o];
      return (i[t] = r), i;
    }
    function Rn(e, t) {
      if ((!Array.isArray(t) && Nf(Lf), e != null)) {
        for (var r = e, n = 0; n < t.length; n++) {
          var i = t[n];
          if (((r = r?.[i]), r === void 0)) return r;
        }
        return r;
      }
    }
    function Ln(e, t, r) {
      var n = typeof t == "number" ? [] : {},
        i = e ?? n;
      if (i[t] === r) return i;
      var o = Cn(i);
      return (o[t] = r), o;
    }
    function Vf(e, t, r, n) {
      var i = void 0,
        o = t[n];
      if (n === t.length - 1) i = r;
      else {
        var a =
          Sn(e) && Sn(e[o]) ? e[o] : typeof t[n + 1] == "number" ? [] : {};
        i = Vf(a, t, r, n + 1);
      }
      return Ln(e, o, i);
    }
    function Nn(e, t, r) {
      return t.length ? Vf(e, t, r, 0) : r;
    }
    function Uf(e, t, r) {
      var n = e?.[t],
        i = r(n);
      return Ln(e, t, i);
    }
    function Bf(e, t, r) {
      var n = Rn(e, t),
        i = r(n);
      return Nn(e, t, i);
    }
    function Wf(e, t, r, n, i, o) {
      for (
        var a = arguments.length, s = Array(a > 6 ? a - 6 : 0), u = 6;
        u < a;
        u++
      )
        s[u - 6] = arguments[u];
      return s.length
        ? Ue.call.apply(Ue, [null, !1, !1, e, t, r, n, i, o].concat(s))
        : Ue(!1, !1, e, t, r, n, i, o);
    }
    function Hf(e, t, r, n, i, o) {
      for (
        var a = arguments.length, s = Array(a > 6 ? a - 6 : 0), u = 6;
        u < a;
        u++
      )
        s[u - 6] = arguments[u];
      return s.length
        ? Ue.call.apply(Ue, [null, !1, !0, e, t, r, n, i, o].concat(s))
        : Ue(!1, !0, e, t, r, n, i, o);
    }
    function Xf(e, t, r, n, i, o, a) {
      var s = Rn(e, t);
      s == null && (s = {});
      for (
        var u = void 0,
          f = arguments.length,
          b = Array(f > 7 ? f - 7 : 0),
          v = 7;
        v < f;
        v++
      )
        b[v - 7] = arguments[v];
      return (
        b.length
          ? (u = Ue.call.apply(Ue, [null, !1, !1, s, r, n, i, o, a].concat(b)))
          : (u = Ue(!1, !1, s, r, n, i, o, a)),
        Nn(e, t, u)
      );
    }
    function jf(e, t) {
      for (var r = Array.isArray(t) ? t : [t], n = !1, i = 0; i < r.length; i++)
        if (LA.call(e, r[i])) {
          n = !0;
          break;
        }
      if (!n) return e;
      for (var o = {}, a = Yo(e), s = 0; s < a.length; s++) {
        var u = a[s];
        r.indexOf(u) >= 0 || (o[u] = e[u]);
      }
      return o;
    }
    function zf(e, t, r, n, i, o) {
      for (
        var a = arguments.length, s = Array(a > 6 ? a - 6 : 0), u = 6;
        u < a;
        u++
      )
        s[u - 6] = arguments[u];
      return s.length
        ? Ue.call.apply(Ue, [null, !0, !1, e, t, r, n, i, o].concat(s))
        : Ue(!0, !1, e, t, r, n, i, o);
    }
    var NA = {
      clone: Cn,
      addLast: Pf,
      addFirst: qf,
      removeLast: Mf,
      removeFirst: Ff,
      insert: Df,
      removeAt: kf,
      replaceAt: Gf,
      getIn: Rn,
      set: Ln,
      setIn: Nn,
      update: Uf,
      updateIn: Bf,
      merge: Wf,
      mergeDeep: Hf,
      mergeIn: Xf,
      omit: jf,
      addDefaults: zf,
    };
    Ee.default = NA;
  });
  var Yf,
    PA,
    qA,
    MA,
    FA,
    DA,
    Kf,
    $f,
    Qf = he(() => {
      "use strict";
      Ve();
      (Yf = le($t())),
        ({
          IX2_PREVIEW_REQUESTED: PA,
          IX2_PLAYBACK_REQUESTED: qA,
          IX2_STOP_REQUESTED: MA,
          IX2_CLEAR_REQUESTED: FA,
        } = Ie),
        (DA = { preview: {}, playback: {}, stop: {}, clear: {} }),
        (Kf = Object.create(null, {
          [PA]: { value: "preview" },
          [qA]: { value: "playback" },
          [MA]: { value: "stop" },
          [FA]: { value: "clear" },
        })),
        ($f = (e = DA, t) => {
          if (t.type in Kf) {
            let r = [Kf[t.type]];
            return (0, Yf.setIn)(e, [r], { ...t.payload });
          }
          return e;
        });
    });
  var Pe,
    kA,
    GA,
    VA,
    UA,
    BA,
    WA,
    HA,
    XA,
    jA,
    zA,
    Zf,
    KA,
    Jf,
    ed = he(() => {
      "use strict";
      Ve();
      (Pe = le($t())),
        ({
          IX2_SESSION_INITIALIZED: kA,
          IX2_SESSION_STARTED: GA,
          IX2_TEST_FRAME_RENDERED: VA,
          IX2_SESSION_STOPPED: UA,
          IX2_EVENT_LISTENER_ADDED: BA,
          IX2_EVENT_STATE_CHANGED: WA,
          IX2_ANIMATION_FRAME_CHANGED: HA,
          IX2_ACTION_LIST_PLAYBACK_CHANGED: XA,
          IX2_VIEWPORT_WIDTH_CHANGED: jA,
          IX2_MEDIA_QUERIES_DEFINED: zA,
        } = Ie),
        (Zf = {
          active: !1,
          tick: 0,
          eventListeners: [],
          eventState: {},
          playbackState: {},
          viewportWidth: 0,
          mediaQueryKey: null,
          hasBoundaryNodes: !1,
          hasDefinedMediaQueries: !1,
          reducedMotion: !1,
        }),
        (KA = 20),
        (Jf = (e = Zf, t) => {
          switch (t.type) {
            case kA: {
              let { hasBoundaryNodes: r, reducedMotion: n } = t.payload;
              return (0, Pe.merge)(e, {
                hasBoundaryNodes: r,
                reducedMotion: n,
              });
            }
            case GA:
              return (0, Pe.set)(e, "active", !0);
            case VA: {
              let {
                payload: { step: r = KA },
              } = t;
              return (0, Pe.set)(e, "tick", e.tick + r);
            }
            case UA:
              return Zf;
            case HA: {
              let {
                payload: { now: r },
              } = t;
              return (0, Pe.set)(e, "tick", r);
            }
            case BA: {
              let r = (0, Pe.addLast)(e.eventListeners, t.payload);
              return (0, Pe.set)(e, "eventListeners", r);
            }
            case WA: {
              let { stateKey: r, newState: n } = t.payload;
              return (0, Pe.setIn)(e, ["eventState", r], n);
            }
            case XA: {
              let { actionListId: r, isPlaying: n } = t.payload;
              return (0, Pe.setIn)(e, ["playbackState", r], n);
            }
            case jA: {
              let { width: r, mediaQueries: n } = t.payload,
                i = n.length,
                o = null;
              for (let a = 0; a < i; a++) {
                let { key: s, min: u, max: f } = n[a];
                if (r >= u && r <= f) {
                  o = s;
                  break;
                }
              }
              return (0, Pe.merge)(e, { viewportWidth: r, mediaQueryKey: o });
            }
            case zA:
              return (0, Pe.set)(e, "hasDefinedMediaQueries", !0);
            default:
              return e;
          }
        });
    });
  var rd = c((o5, td) => {
    function YA() {
      (this.__data__ = []), (this.size = 0);
    }
    td.exports = YA;
  });
  var Pn = c((a5, nd) => {
    function $A(e, t) {
      return e === t || (e !== e && t !== t);
    }
    nd.exports = $A;
  });
  var Pr = c((s5, id) => {
    var QA = Pn();
    function ZA(e, t) {
      for (var r = e.length; r--; ) if (QA(e[r][0], t)) return r;
      return -1;
    }
    id.exports = ZA;
  });
  var ad = c((u5, od) => {
    var JA = Pr(),
      ex = Array.prototype,
      tx = ex.splice;
    function rx(e) {
      var t = this.__data__,
        r = JA(t, e);
      if (r < 0) return !1;
      var n = t.length - 1;
      return r == n ? t.pop() : tx.call(t, r, 1), --this.size, !0;
    }
    od.exports = rx;
  });
  var ud = c((c5, sd) => {
    var nx = Pr();
    function ix(e) {
      var t = this.__data__,
        r = nx(t, e);
      return r < 0 ? void 0 : t[r][1];
    }
    sd.exports = ix;
  });
  var ld = c((l5, cd) => {
    var ox = Pr();
    function ax(e) {
      return ox(this.__data__, e) > -1;
    }
    cd.exports = ax;
  });
  var dd = c((f5, fd) => {
    var sx = Pr();
    function ux(e, t) {
      var r = this.__data__,
        n = sx(r, e);
      return n < 0 ? (++this.size, r.push([e, t])) : (r[n][1] = t), this;
    }
    fd.exports = ux;
  });
  var qr = c((d5, pd) => {
    var cx = rd(),
      lx = ad(),
      fx = ud(),
      dx = ld(),
      px = dd();
    function Qt(e) {
      var t = -1,
        r = e == null ? 0 : e.length;
      for (this.clear(); ++t < r; ) {
        var n = e[t];
        this.set(n[0], n[1]);
      }
    }
    Qt.prototype.clear = cx;
    Qt.prototype.delete = lx;
    Qt.prototype.get = fx;
    Qt.prototype.has = dx;
    Qt.prototype.set = px;
    pd.exports = Qt;
  });
  var gd = c((p5, vd) => {
    var vx = qr();
    function gx() {
      (this.__data__ = new vx()), (this.size = 0);
    }
    vd.exports = gx;
  });
  var md = c((v5, hd) => {
    function hx(e) {
      var t = this.__data__,
        r = t.delete(e);
      return (this.size = t.size), r;
    }
    hd.exports = hx;
  });
  var Ed = c((g5, yd) => {
    function mx(e) {
      return this.__data__.get(e);
    }
    yd.exports = mx;
  });
  var bd = c((h5, _d) => {
    function yx(e) {
      return this.__data__.has(e);
    }
    _d.exports = yx;
  });
  var st = c((m5, Td) => {
    function Ex(e) {
      var t = typeof e;
      return e != null && (t == "object" || t == "function");
    }
    Td.exports = Ex;
  });
  var $o = c((y5, Id) => {
    var _x = Tt(),
      bx = st(),
      Tx = "[object AsyncFunction]",
      Ix = "[object Function]",
      wx = "[object GeneratorFunction]",
      Ox = "[object Proxy]";
    function Ax(e) {
      if (!bx(e)) return !1;
      var t = _x(e);
      return t == Ix || t == wx || t == Tx || t == Ox;
    }
    Id.exports = Ax;
  });
  var Od = c((E5, wd) => {
    var xx = Qe(),
      Sx = xx["__core-js_shared__"];
    wd.exports = Sx;
  });
  var Sd = c((_5, xd) => {
    var Qo = Od(),
      Ad = (function () {
        var e = /[^.]+$/.exec((Qo && Qo.keys && Qo.keys.IE_PROTO) || "");
        return e ? "Symbol(src)_1." + e : "";
      })();
    function Cx(e) {
      return !!Ad && Ad in e;
    }
    xd.exports = Cx;
  });
  var Zo = c((b5, Cd) => {
    var Rx = Function.prototype,
      Lx = Rx.toString;
    function Nx(e) {
      if (e != null) {
        try {
          return Lx.call(e);
        } catch {}
        try {
          return e + "";
        } catch {}
      }
      return "";
    }
    Cd.exports = Nx;
  });
  var Ld = c((T5, Rd) => {
    var Px = $o(),
      qx = Sd(),
      Mx = st(),
      Fx = Zo(),
      Dx = /[\\^$.*+?()[\]{}|]/g,
      kx = /^\[object .+?Constructor\]$/,
      Gx = Function.prototype,
      Vx = Object.prototype,
      Ux = Gx.toString,
      Bx = Vx.hasOwnProperty,
      Wx = RegExp(
        "^" +
          Ux.call(Bx)
            .replace(Dx, "\\$&")
            .replace(
              /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
              "$1.*?"
            ) +
          "$"
      );
    function Hx(e) {
      if (!Mx(e) || qx(e)) return !1;
      var t = Px(e) ? Wx : kx;
      return t.test(Fx(e));
    }
    Rd.exports = Hx;
  });
  var Pd = c((I5, Nd) => {
    function Xx(e, t) {
      return e?.[t];
    }
    Nd.exports = Xx;
  });
  var It = c((w5, qd) => {
    var jx = Ld(),
      zx = Pd();
    function Kx(e, t) {
      var r = zx(e, t);
      return jx(r) ? r : void 0;
    }
    qd.exports = Kx;
  });
  var qn = c((O5, Md) => {
    var Yx = It(),
      $x = Qe(),
      Qx = Yx($x, "Map");
    Md.exports = Qx;
  });
  var Mr = c((A5, Fd) => {
    var Zx = It(),
      Jx = Zx(Object, "create");
    Fd.exports = Jx;
  });
  var Gd = c((x5, kd) => {
    var Dd = Mr();
    function eS() {
      (this.__data__ = Dd ? Dd(null) : {}), (this.size = 0);
    }
    kd.exports = eS;
  });
  var Ud = c((S5, Vd) => {
    function tS(e) {
      var t = this.has(e) && delete this.__data__[e];
      return (this.size -= t ? 1 : 0), t;
    }
    Vd.exports = tS;
  });
  var Wd = c((C5, Bd) => {
    var rS = Mr(),
      nS = "__lodash_hash_undefined__",
      iS = Object.prototype,
      oS = iS.hasOwnProperty;
    function aS(e) {
      var t = this.__data__;
      if (rS) {
        var r = t[e];
        return r === nS ? void 0 : r;
      }
      return oS.call(t, e) ? t[e] : void 0;
    }
    Bd.exports = aS;
  });
  var Xd = c((R5, Hd) => {
    var sS = Mr(),
      uS = Object.prototype,
      cS = uS.hasOwnProperty;
    function lS(e) {
      var t = this.__data__;
      return sS ? t[e] !== void 0 : cS.call(t, e);
    }
    Hd.exports = lS;
  });
  var zd = c((L5, jd) => {
    var fS = Mr(),
      dS = "__lodash_hash_undefined__";
    function pS(e, t) {
      var r = this.__data__;
      return (
        (this.size += this.has(e) ? 0 : 1),
        (r[e] = fS && t === void 0 ? dS : t),
        this
      );
    }
    jd.exports = pS;
  });
  var Yd = c((N5, Kd) => {
    var vS = Gd(),
      gS = Ud(),
      hS = Wd(),
      mS = Xd(),
      yS = zd();
    function Zt(e) {
      var t = -1,
        r = e == null ? 0 : e.length;
      for (this.clear(); ++t < r; ) {
        var n = e[t];
        this.set(n[0], n[1]);
      }
    }
    Zt.prototype.clear = vS;
    Zt.prototype.delete = gS;
    Zt.prototype.get = hS;
    Zt.prototype.has = mS;
    Zt.prototype.set = yS;
    Kd.exports = Zt;
  });
  var Zd = c((P5, Qd) => {
    var $d = Yd(),
      ES = qr(),
      _S = qn();
    function bS() {
      (this.size = 0),
        (this.__data__ = {
          hash: new $d(),
          map: new (_S || ES)(),
          string: new $d(),
        });
    }
    Qd.exports = bS;
  });
  var ep = c((q5, Jd) => {
    function TS(e) {
      var t = typeof e;
      return t == "string" || t == "number" || t == "symbol" || t == "boolean"
        ? e !== "__proto__"
        : e === null;
    }
    Jd.exports = TS;
  });
  var Fr = c((M5, tp) => {
    var IS = ep();
    function wS(e, t) {
      var r = e.__data__;
      return IS(t) ? r[typeof t == "string" ? "string" : "hash"] : r.map;
    }
    tp.exports = wS;
  });
  var np = c((F5, rp) => {
    var OS = Fr();
    function AS(e) {
      var t = OS(this, e).delete(e);
      return (this.size -= t ? 1 : 0), t;
    }
    rp.exports = AS;
  });
  var op = c((D5, ip) => {
    var xS = Fr();
    function SS(e) {
      return xS(this, e).get(e);
    }
    ip.exports = SS;
  });
  var sp = c((k5, ap) => {
    var CS = Fr();
    function RS(e) {
      return CS(this, e).has(e);
    }
    ap.exports = RS;
  });
  var cp = c((G5, up) => {
    var LS = Fr();
    function NS(e, t) {
      var r = LS(this, e),
        n = r.size;
      return r.set(e, t), (this.size += r.size == n ? 0 : 1), this;
    }
    up.exports = NS;
  });
  var Mn = c((V5, lp) => {
    var PS = Zd(),
      qS = np(),
      MS = op(),
      FS = sp(),
      DS = cp();
    function Jt(e) {
      var t = -1,
        r = e == null ? 0 : e.length;
      for (this.clear(); ++t < r; ) {
        var n = e[t];
        this.set(n[0], n[1]);
      }
    }
    Jt.prototype.clear = PS;
    Jt.prototype.delete = qS;
    Jt.prototype.get = MS;
    Jt.prototype.has = FS;
    Jt.prototype.set = DS;
    lp.exports = Jt;
  });
  var dp = c((U5, fp) => {
    var kS = qr(),
      GS = qn(),
      VS = Mn(),
      US = 200;
    function BS(e, t) {
      var r = this.__data__;
      if (r instanceof kS) {
        var n = r.__data__;
        if (!GS || n.length < US - 1)
          return n.push([e, t]), (this.size = ++r.size), this;
        r = this.__data__ = new VS(n);
      }
      return r.set(e, t), (this.size = r.size), this;
    }
    fp.exports = BS;
  });
  var Jo = c((B5, pp) => {
    var WS = qr(),
      HS = gd(),
      XS = md(),
      jS = Ed(),
      zS = bd(),
      KS = dp();
    function er(e) {
      var t = (this.__data__ = new WS(e));
      this.size = t.size;
    }
    er.prototype.clear = HS;
    er.prototype.delete = XS;
    er.prototype.get = jS;
    er.prototype.has = zS;
    er.prototype.set = KS;
    pp.exports = er;
  });
  var gp = c((W5, vp) => {
    var YS = "__lodash_hash_undefined__";
    function $S(e) {
      return this.__data__.set(e, YS), this;
    }
    vp.exports = $S;
  });
  var mp = c((H5, hp) => {
    function QS(e) {
      return this.__data__.has(e);
    }
    hp.exports = QS;
  });
  var Ep = c((X5, yp) => {
    var ZS = Mn(),
      JS = gp(),
      eC = mp();
    function Fn(e) {
      var t = -1,
        r = e == null ? 0 : e.length;
      for (this.__data__ = new ZS(); ++t < r; ) this.add(e[t]);
    }
    Fn.prototype.add = Fn.prototype.push = JS;
    Fn.prototype.has = eC;
    yp.exports = Fn;
  });
  var bp = c((j5, _p) => {
    function tC(e, t) {
      for (var r = -1, n = e == null ? 0 : e.length; ++r < n; )
        if (t(e[r], r, e)) return !0;
      return !1;
    }
    _p.exports = tC;
  });
  var Ip = c((z5, Tp) => {
    function rC(e, t) {
      return e.has(t);
    }
    Tp.exports = rC;
  });
  var ea = c((K5, wp) => {
    var nC = Ep(),
      iC = bp(),
      oC = Ip(),
      aC = 1,
      sC = 2;
    function uC(e, t, r, n, i, o) {
      var a = r & aC,
        s = e.length,
        u = t.length;
      if (s != u && !(a && u > s)) return !1;
      var f = o.get(e),
        b = o.get(t);
      if (f && b) return f == t && b == e;
      var v = -1,
        p = !0,
        E = r & sC ? new nC() : void 0;
      for (o.set(e, t), o.set(t, e); ++v < s; ) {
        var A = e[v],
          O = t[v];
        if (n) var S = a ? n(O, A, v, t, e, o) : n(A, O, v, e, t, o);
        if (S !== void 0) {
          if (S) continue;
          p = !1;
          break;
        }
        if (E) {
          if (
            !iC(t, function (_, y) {
              if (!oC(E, y) && (A === _ || i(A, _, r, n, o))) return E.push(y);
            })
          ) {
            p = !1;
            break;
          }
        } else if (!(A === O || i(A, O, r, n, o))) {
          p = !1;
          break;
        }
      }
      return o.delete(e), o.delete(t), p;
    }
    wp.exports = uC;
  });
  var Ap = c((Y5, Op) => {
    var cC = Qe(),
      lC = cC.Uint8Array;
    Op.exports = lC;
  });
  var Sp = c(($5, xp) => {
    function fC(e) {
      var t = -1,
        r = Array(e.size);
      return (
        e.forEach(function (n, i) {
          r[++t] = [i, n];
        }),
        r
      );
    }
    xp.exports = fC;
  });
  var Rp = c((Q5, Cp) => {
    function dC(e) {
      var t = -1,
        r = Array(e.size);
      return (
        e.forEach(function (n) {
          r[++t] = n;
        }),
        r
      );
    }
    Cp.exports = dC;
  });
  var Mp = c((Z5, qp) => {
    var Lp = zt(),
      Np = Ap(),
      pC = Pn(),
      vC = ea(),
      gC = Sp(),
      hC = Rp(),
      mC = 1,
      yC = 2,
      EC = "[object Boolean]",
      _C = "[object Date]",
      bC = "[object Error]",
      TC = "[object Map]",
      IC = "[object Number]",
      wC = "[object RegExp]",
      OC = "[object Set]",
      AC = "[object String]",
      xC = "[object Symbol]",
      SC = "[object ArrayBuffer]",
      CC = "[object DataView]",
      Pp = Lp ? Lp.prototype : void 0,
      ta = Pp ? Pp.valueOf : void 0;
    function RC(e, t, r, n, i, o, a) {
      switch (r) {
        case CC:
          if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
            return !1;
          (e = e.buffer), (t = t.buffer);
        case SC:
          return !(e.byteLength != t.byteLength || !o(new Np(e), new Np(t)));
        case EC:
        case _C:
        case IC:
          return pC(+e, +t);
        case bC:
          return e.name == t.name && e.message == t.message;
        case wC:
        case AC:
          return e == t + "";
        case TC:
          var s = gC;
        case OC:
          var u = n & mC;
          if ((s || (s = hC), e.size != t.size && !u)) return !1;
          var f = a.get(e);
          if (f) return f == t;
          (n |= yC), a.set(e, t);
          var b = vC(s(e), s(t), n, i, o, a);
          return a.delete(e), b;
        case xC:
          if (ta) return ta.call(e) == ta.call(t);
      }
      return !1;
    }
    qp.exports = RC;
  });
  var Dn = c((J5, Fp) => {
    function LC(e, t) {
      for (var r = -1, n = t.length, i = e.length; ++r < n; ) e[i + r] = t[r];
      return e;
    }
    Fp.exports = LC;
  });
  var we = c((eH, Dp) => {
    var NC = Array.isArray;
    Dp.exports = NC;
  });
  var ra = c((tH, kp) => {
    var PC = Dn(),
      qC = we();
    function MC(e, t, r) {
      var n = t(e);
      return qC(e) ? n : PC(n, r(e));
    }
    kp.exports = MC;
  });
  var Vp = c((rH, Gp) => {
    function FC(e, t) {
      for (var r = -1, n = e == null ? 0 : e.length, i = 0, o = []; ++r < n; ) {
        var a = e[r];
        t(a, r, e) && (o[i++] = a);
      }
      return o;
    }
    Gp.exports = FC;
  });
  var na = c((nH, Up) => {
    function DC() {
      return [];
    }
    Up.exports = DC;
  });
  var ia = c((iH, Wp) => {
    var kC = Vp(),
      GC = na(),
      VC = Object.prototype,
      UC = VC.propertyIsEnumerable,
      Bp = Object.getOwnPropertySymbols,
      BC = Bp
        ? function (e) {
            return e == null
              ? []
              : ((e = Object(e)),
                kC(Bp(e), function (t) {
                  return UC.call(e, t);
                }));
          }
        : GC;
    Wp.exports = BC;
  });
  var Xp = c((oH, Hp) => {
    function WC(e, t) {
      for (var r = -1, n = Array(e); ++r < e; ) n[r] = t(r);
      return n;
    }
    Hp.exports = WC;
  });
  var zp = c((aH, jp) => {
    var HC = Tt(),
      XC = pt(),
      jC = "[object Arguments]";
    function zC(e) {
      return XC(e) && HC(e) == jC;
    }
    jp.exports = zC;
  });
  var Dr = c((sH, $p) => {
    var Kp = zp(),
      KC = pt(),
      Yp = Object.prototype,
      YC = Yp.hasOwnProperty,
      $C = Yp.propertyIsEnumerable,
      QC = Kp(
        (function () {
          return arguments;
        })()
      )
        ? Kp
        : function (e) {
            return KC(e) && YC.call(e, "callee") && !$C.call(e, "callee");
          };
    $p.exports = QC;
  });
  var Zp = c((uH, Qp) => {
    function ZC() {
      return !1;
    }
    Qp.exports = ZC;
  });
  var kn = c((kr, tr) => {
    var JC = Qe(),
      eR = Zp(),
      tv = typeof kr == "object" && kr && !kr.nodeType && kr,
      Jp = tv && typeof tr == "object" && tr && !tr.nodeType && tr,
      tR = Jp && Jp.exports === tv,
      ev = tR ? JC.Buffer : void 0,
      rR = ev ? ev.isBuffer : void 0,
      nR = rR || eR;
    tr.exports = nR;
  });
  var Gn = c((cH, rv) => {
    var iR = 9007199254740991,
      oR = /^(?:0|[1-9]\d*)$/;
    function aR(e, t) {
      var r = typeof e;
      return (
        (t = t ?? iR),
        !!t &&
          (r == "number" || (r != "symbol" && oR.test(e))) &&
          e > -1 &&
          e % 1 == 0 &&
          e < t
      );
    }
    rv.exports = aR;
  });
  var Vn = c((lH, nv) => {
    var sR = 9007199254740991;
    function uR(e) {
      return typeof e == "number" && e > -1 && e % 1 == 0 && e <= sR;
    }
    nv.exports = uR;
  });
  var ov = c((fH, iv) => {
    var cR = Tt(),
      lR = Vn(),
      fR = pt(),
      dR = "[object Arguments]",
      pR = "[object Array]",
      vR = "[object Boolean]",
      gR = "[object Date]",
      hR = "[object Error]",
      mR = "[object Function]",
      yR = "[object Map]",
      ER = "[object Number]",
      _R = "[object Object]",
      bR = "[object RegExp]",
      TR = "[object Set]",
      IR = "[object String]",
      wR = "[object WeakMap]",
      OR = "[object ArrayBuffer]",
      AR = "[object DataView]",
      xR = "[object Float32Array]",
      SR = "[object Float64Array]",
      CR = "[object Int8Array]",
      RR = "[object Int16Array]",
      LR = "[object Int32Array]",
      NR = "[object Uint8Array]",
      PR = "[object Uint8ClampedArray]",
      qR = "[object Uint16Array]",
      MR = "[object Uint32Array]",
      ge = {};
    ge[xR] = ge[SR] = ge[CR] = ge[RR] = ge[LR] = ge[NR] = ge[PR] = ge[qR] = ge[
      MR
    ] = !0;
    ge[dR] = ge[pR] = ge[OR] = ge[vR] = ge[AR] = ge[gR] = ge[hR] = ge[mR] = ge[
      yR
    ] = ge[ER] = ge[_R] = ge[bR] = ge[TR] = ge[IR] = ge[wR] = !1;
    function FR(e) {
      return fR(e) && lR(e.length) && !!ge[cR(e)];
    }
    iv.exports = FR;
  });
  var sv = c((dH, av) => {
    function DR(e) {
      return function (t) {
        return e(t);
      };
    }
    av.exports = DR;
  });
  var cv = c((Gr, rr) => {
    var kR = Ro(),
      uv = typeof Gr == "object" && Gr && !Gr.nodeType && Gr,
      Vr = uv && typeof rr == "object" && rr && !rr.nodeType && rr,
      GR = Vr && Vr.exports === uv,
      oa = GR && kR.process,
      VR = (function () {
        try {
          var e = Vr && Vr.require && Vr.require("util").types;
          return e || (oa && oa.binding && oa.binding("util"));
        } catch {}
      })();
    rr.exports = VR;
  });
  var Un = c((pH, dv) => {
    var UR = ov(),
      BR = sv(),
      lv = cv(),
      fv = lv && lv.isTypedArray,
      WR = fv ? BR(fv) : UR;
    dv.exports = WR;
  });
  var aa = c((vH, pv) => {
    var HR = Xp(),
      XR = Dr(),
      jR = we(),
      zR = kn(),
      KR = Gn(),
      YR = Un(),
      $R = Object.prototype,
      QR = $R.hasOwnProperty;
    function ZR(e, t) {
      var r = jR(e),
        n = !r && XR(e),
        i = !r && !n && zR(e),
        o = !r && !n && !i && YR(e),
        a = r || n || i || o,
        s = a ? HR(e.length, String) : [],
        u = s.length;
      for (var f in e)
        (t || QR.call(e, f)) &&
          !(
            a &&
            (f == "length" ||
              (i && (f == "offset" || f == "parent")) ||
              (o &&
                (f == "buffer" || f == "byteLength" || f == "byteOffset")) ||
              KR(f, u))
          ) &&
          s.push(f);
      return s;
    }
    pv.exports = ZR;
  });
  var Bn = c((gH, vv) => {
    var JR = Object.prototype;
    function eL(e) {
      var t = e && e.constructor,
        r = (typeof t == "function" && t.prototype) || JR;
      return e === r;
    }
    vv.exports = eL;
  });
  var hv = c((hH, gv) => {
    var tL = Lo(),
      rL = tL(Object.keys, Object);
    gv.exports = rL;
  });
  var Wn = c((mH, mv) => {
    var nL = Bn(),
      iL = hv(),
      oL = Object.prototype,
      aL = oL.hasOwnProperty;
    function sL(e) {
      if (!nL(e)) return iL(e);
      var t = [];
      for (var r in Object(e)) aL.call(e, r) && r != "constructor" && t.push(r);
      return t;
    }
    mv.exports = sL;
  });
  var qt = c((yH, yv) => {
    var uL = $o(),
      cL = Vn();
    function lL(e) {
      return e != null && cL(e.length) && !uL(e);
    }
    yv.exports = lL;
  });
  var Ur = c((EH, Ev) => {
    var fL = aa(),
      dL = Wn(),
      pL = qt();
    function vL(e) {
      return pL(e) ? fL(e) : dL(e);
    }
    Ev.exports = vL;
  });
  var bv = c((_H, _v) => {
    var gL = ra(),
      hL = ia(),
      mL = Ur();
    function yL(e) {
      return gL(e, mL, hL);
    }
    _v.exports = yL;
  });
  var wv = c((bH, Iv) => {
    var Tv = bv(),
      EL = 1,
      _L = Object.prototype,
      bL = _L.hasOwnProperty;
    function TL(e, t, r, n, i, o) {
      var a = r & EL,
        s = Tv(e),
        u = s.length,
        f = Tv(t),
        b = f.length;
      if (u != b && !a) return !1;
      for (var v = u; v--; ) {
        var p = s[v];
        if (!(a ? p in t : bL.call(t, p))) return !1;
      }
      var E = o.get(e),
        A = o.get(t);
      if (E && A) return E == t && A == e;
      var O = !0;
      o.set(e, t), o.set(t, e);
      for (var S = a; ++v < u; ) {
        p = s[v];
        var _ = e[p],
          y = t[p];
        if (n) var R = a ? n(y, _, p, t, e, o) : n(_, y, p, e, t, o);
        if (!(R === void 0 ? _ === y || i(_, y, r, n, o) : R)) {
          O = !1;
          break;
        }
        S || (S = p == "constructor");
      }
      if (O && !S) {
        var D = e.constructor,
          F = t.constructor;
        D != F &&
          "constructor" in e &&
          "constructor" in t &&
          !(
            typeof D == "function" &&
            D instanceof D &&
            typeof F == "function" &&
            F instanceof F
          ) &&
          (O = !1);
      }
      return o.delete(e), o.delete(t), O;
    }
    Iv.exports = TL;
  });
  var Av = c((TH, Ov) => {
    var IL = It(),
      wL = Qe(),
      OL = IL(wL, "DataView");
    Ov.exports = OL;
  });
  var Sv = c((IH, xv) => {
    var AL = It(),
      xL = Qe(),
      SL = AL(xL, "Promise");
    xv.exports = SL;
  });
  var Rv = c((wH, Cv) => {
    var CL = It(),
      RL = Qe(),
      LL = CL(RL, "Set");
    Cv.exports = LL;
  });
  var sa = c((OH, Lv) => {
    var NL = It(),
      PL = Qe(),
      qL = NL(PL, "WeakMap");
    Lv.exports = qL;
  });
  var Hn = c((AH, kv) => {
    var ua = Av(),
      ca = qn(),
      la = Sv(),
      fa = Rv(),
      da = sa(),
      Dv = Tt(),
      nr = Zo(),
      Nv = "[object Map]",
      ML = "[object Object]",
      Pv = "[object Promise]",
      qv = "[object Set]",
      Mv = "[object WeakMap]",
      Fv = "[object DataView]",
      FL = nr(ua),
      DL = nr(ca),
      kL = nr(la),
      GL = nr(fa),
      VL = nr(da),
      Mt = Dv;
    ((ua && Mt(new ua(new ArrayBuffer(1))) != Fv) ||
      (ca && Mt(new ca()) != Nv) ||
      (la && Mt(la.resolve()) != Pv) ||
      (fa && Mt(new fa()) != qv) ||
      (da && Mt(new da()) != Mv)) &&
      (Mt = function (e) {
        var t = Dv(e),
          r = t == ML ? e.constructor : void 0,
          n = r ? nr(r) : "";
        if (n)
          switch (n) {
            case FL:
              return Fv;
            case DL:
              return Nv;
            case kL:
              return Pv;
            case GL:
              return qv;
            case VL:
              return Mv;
          }
        return t;
      });
    kv.exports = Mt;
  });
  var jv = c((xH, Xv) => {
    var pa = Jo(),
      UL = ea(),
      BL = Mp(),
      WL = wv(),
      Gv = Hn(),
      Vv = we(),
      Uv = kn(),
      HL = Un(),
      XL = 1,
      Bv = "[object Arguments]",
      Wv = "[object Array]",
      Xn = "[object Object]",
      jL = Object.prototype,
      Hv = jL.hasOwnProperty;
    function zL(e, t, r, n, i, o) {
      var a = Vv(e),
        s = Vv(t),
        u = a ? Wv : Gv(e),
        f = s ? Wv : Gv(t);
      (u = u == Bv ? Xn : u), (f = f == Bv ? Xn : f);
      var b = u == Xn,
        v = f == Xn,
        p = u == f;
      if (p && Uv(e)) {
        if (!Uv(t)) return !1;
        (a = !0), (b = !1);
      }
      if (p && !b)
        return (
          o || (o = new pa()),
          a || HL(e) ? UL(e, t, r, n, i, o) : BL(e, t, u, r, n, i, o)
        );
      if (!(r & XL)) {
        var E = b && Hv.call(e, "__wrapped__"),
          A = v && Hv.call(t, "__wrapped__");
        if (E || A) {
          var O = E ? e.value() : e,
            S = A ? t.value() : t;
          return o || (o = new pa()), i(O, S, r, n, o);
        }
      }
      return p ? (o || (o = new pa()), WL(e, t, r, n, i, o)) : !1;
    }
    Xv.exports = zL;
  });
  var va = c((SH, Yv) => {
    var KL = jv(),
      zv = pt();
    function Kv(e, t, r, n, i) {
      return e === t
        ? !0
        : e == null || t == null || (!zv(e) && !zv(t))
        ? e !== e && t !== t
        : KL(e, t, r, n, Kv, i);
    }
    Yv.exports = Kv;
  });
  var Qv = c((CH, $v) => {
    var YL = Jo(),
      $L = va(),
      QL = 1,
      ZL = 2;
    function JL(e, t, r, n) {
      var i = r.length,
        o = i,
        a = !n;
      if (e == null) return !o;
      for (e = Object(e); i--; ) {
        var s = r[i];
        if (a && s[2] ? s[1] !== e[s[0]] : !(s[0] in e)) return !1;
      }
      for (; ++i < o; ) {
        s = r[i];
        var u = s[0],
          f = e[u],
          b = s[1];
        if (a && s[2]) {
          if (f === void 0 && !(u in e)) return !1;
        } else {
          var v = new YL();
          if (n) var p = n(f, b, u, e, t, v);
          if (!(p === void 0 ? $L(b, f, QL | ZL, n, v) : p)) return !1;
        }
      }
      return !0;
    }
    $v.exports = JL;
  });
  var ga = c((RH, Zv) => {
    var eN = st();
    function tN(e) {
      return e === e && !eN(e);
    }
    Zv.exports = tN;
  });
  var eg = c((LH, Jv) => {
    var rN = ga(),
      nN = Ur();
    function iN(e) {
      for (var t = nN(e), r = t.length; r--; ) {
        var n = t[r],
          i = e[n];
        t[r] = [n, i, rN(i)];
      }
      return t;
    }
    Jv.exports = iN;
  });
  var ha = c((NH, tg) => {
    function oN(e, t) {
      return function (r) {
        return r == null ? !1 : r[e] === t && (t !== void 0 || e in Object(r));
      };
    }
    tg.exports = oN;
  });
  var ng = c((PH, rg) => {
    var aN = Qv(),
      sN = eg(),
      uN = ha();
    function cN(e) {
      var t = sN(e);
      return t.length == 1 && t[0][2]
        ? uN(t[0][0], t[0][1])
        : function (r) {
            return r === e || aN(r, e, t);
          };
    }
    rg.exports = cN;
  });
  var Br = c((qH, ig) => {
    var lN = Tt(),
      fN = pt(),
      dN = "[object Symbol]";
    function pN(e) {
      return typeof e == "symbol" || (fN(e) && lN(e) == dN);
    }
    ig.exports = pN;
  });
  var jn = c((MH, og) => {
    var vN = we(),
      gN = Br(),
      hN = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
      mN = /^\w*$/;
    function yN(e, t) {
      if (vN(e)) return !1;
      var r = typeof e;
      return r == "number" ||
        r == "symbol" ||
        r == "boolean" ||
        e == null ||
        gN(e)
        ? !0
        : mN.test(e) || !hN.test(e) || (t != null && e in Object(t));
    }
    og.exports = yN;
  });
  var ug = c((FH, sg) => {
    var ag = Mn(),
      EN = "Expected a function";
    function ma(e, t) {
      if (typeof e != "function" || (t != null && typeof t != "function"))
        throw new TypeError(EN);
      var r = function () {
        var n = arguments,
          i = t ? t.apply(this, n) : n[0],
          o = r.cache;
        if (o.has(i)) return o.get(i);
        var a = e.apply(this, n);
        return (r.cache = o.set(i, a) || o), a;
      };
      return (r.cache = new (ma.Cache || ag)()), r;
    }
    ma.Cache = ag;
    sg.exports = ma;
  });
  var lg = c((DH, cg) => {
    var _N = ug(),
      bN = 500;
    function TN(e) {
      var t = _N(e, function (n) {
          return r.size === bN && r.clear(), n;
        }),
        r = t.cache;
      return t;
    }
    cg.exports = TN;
  });
  var dg = c((kH, fg) => {
    var IN = lg(),
      wN = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
      ON = /\\(\\)?/g,
      AN = IN(function (e) {
        var t = [];
        return (
          e.charCodeAt(0) === 46 && t.push(""),
          e.replace(wN, function (r, n, i, o) {
            t.push(i ? o.replace(ON, "$1") : n || r);
          }),
          t
        );
      });
    fg.exports = AN;
  });
  var ya = c((GH, pg) => {
    function xN(e, t) {
      for (var r = -1, n = e == null ? 0 : e.length, i = Array(n); ++r < n; )
        i[r] = t(e[r], r, e);
      return i;
    }
    pg.exports = xN;
  });
  var Eg = c((VH, yg) => {
    var vg = zt(),
      SN = ya(),
      CN = we(),
      RN = Br(),
      LN = 1 / 0,
      gg = vg ? vg.prototype : void 0,
      hg = gg ? gg.toString : void 0;
    function mg(e) {
      if (typeof e == "string") return e;
      if (CN(e)) return SN(e, mg) + "";
      if (RN(e)) return hg ? hg.call(e) : "";
      var t = e + "";
      return t == "0" && 1 / e == -LN ? "-0" : t;
    }
    yg.exports = mg;
  });
  var bg = c((UH, _g) => {
    var NN = Eg();
    function PN(e) {
      return e == null ? "" : NN(e);
    }
    _g.exports = PN;
  });
  var Wr = c((BH, Tg) => {
    var qN = we(),
      MN = jn(),
      FN = dg(),
      DN = bg();
    function kN(e, t) {
      return qN(e) ? e : MN(e, t) ? [e] : FN(DN(e));
    }
    Tg.exports = kN;
  });
  var ir = c((WH, Ig) => {
    var GN = Br(),
      VN = 1 / 0;
    function UN(e) {
      if (typeof e == "string" || GN(e)) return e;
      var t = e + "";
      return t == "0" && 1 / e == -VN ? "-0" : t;
    }
    Ig.exports = UN;
  });
  var zn = c((HH, wg) => {
    var BN = Wr(),
      WN = ir();
    function HN(e, t) {
      t = BN(t, e);
      for (var r = 0, n = t.length; e != null && r < n; ) e = e[WN(t[r++])];
      return r && r == n ? e : void 0;
    }
    wg.exports = HN;
  });
  var Kn = c((XH, Og) => {
    var XN = zn();
    function jN(e, t, r) {
      var n = e == null ? void 0 : XN(e, t);
      return n === void 0 ? r : n;
    }
    Og.exports = jN;
  });
  var xg = c((jH, Ag) => {
    function zN(e, t) {
      return e != null && t in Object(e);
    }
    Ag.exports = zN;
  });
  var Cg = c((zH, Sg) => {
    var KN = Wr(),
      YN = Dr(),
      $N = we(),
      QN = Gn(),
      ZN = Vn(),
      JN = ir();
    function eP(e, t, r) {
      t = KN(t, e);
      for (var n = -1, i = t.length, o = !1; ++n < i; ) {
        var a = JN(t[n]);
        if (!(o = e != null && r(e, a))) break;
        e = e[a];
      }
      return o || ++n != i
        ? o
        : ((i = e == null ? 0 : e.length),
          !!i && ZN(i) && QN(a, i) && ($N(e) || YN(e)));
    }
    Sg.exports = eP;
  });
  var Lg = c((KH, Rg) => {
    var tP = xg(),
      rP = Cg();
    function nP(e, t) {
      return e != null && rP(e, t, tP);
    }
    Rg.exports = nP;
  });
  var Pg = c((YH, Ng) => {
    var iP = va(),
      oP = Kn(),
      aP = Lg(),
      sP = jn(),
      uP = ga(),
      cP = ha(),
      lP = ir(),
      fP = 1,
      dP = 2;
    function pP(e, t) {
      return sP(e) && uP(t)
        ? cP(lP(e), t)
        : function (r) {
            var n = oP(r, e);
            return n === void 0 && n === t ? aP(r, e) : iP(t, n, fP | dP);
          };
    }
    Ng.exports = pP;
  });
  var Yn = c(($H, qg) => {
    function vP(e) {
      return e;
    }
    qg.exports = vP;
  });
  var Ea = c((QH, Mg) => {
    function gP(e) {
      return function (t) {
        return t?.[e];
      };
    }
    Mg.exports = gP;
  });
  var Dg = c((ZH, Fg) => {
    var hP = zn();
    function mP(e) {
      return function (t) {
        return hP(t, e);
      };
    }
    Fg.exports = mP;
  });
  var Gg = c((JH, kg) => {
    var yP = Ea(),
      EP = Dg(),
      _P = jn(),
      bP = ir();
    function TP(e) {
      return _P(e) ? yP(bP(e)) : EP(e);
    }
    kg.exports = TP;
  });
  var wt = c((eX, Vg) => {
    var IP = ng(),
      wP = Pg(),
      OP = Yn(),
      AP = we(),
      xP = Gg();
    function SP(e) {
      return typeof e == "function"
        ? e
        : e == null
        ? OP
        : typeof e == "object"
        ? AP(e)
          ? wP(e[0], e[1])
          : IP(e)
        : xP(e);
    }
    Vg.exports = SP;
  });
  var _a = c((tX, Ug) => {
    var CP = wt(),
      RP = qt(),
      LP = Ur();
    function NP(e) {
      return function (t, r, n) {
        var i = Object(t);
        if (!RP(t)) {
          var o = CP(r, 3);
          (t = LP(t)),
            (r = function (s) {
              return o(i[s], s, i);
            });
        }
        var a = e(t, r, n);
        return a > -1 ? i[o ? t[a] : a] : void 0;
      };
    }
    Ug.exports = NP;
  });
  var ba = c((rX, Bg) => {
    function PP(e, t, r, n) {
      for (var i = e.length, o = r + (n ? 1 : -1); n ? o-- : ++o < i; )
        if (t(e[o], o, e)) return o;
      return -1;
    }
    Bg.exports = PP;
  });
  var Hg = c((nX, Wg) => {
    var qP = /\s/;
    function MP(e) {
      for (var t = e.length; t-- && qP.test(e.charAt(t)); );
      return t;
    }
    Wg.exports = MP;
  });
  var jg = c((iX, Xg) => {
    var FP = Hg(),
      DP = /^\s+/;
    function kP(e) {
      return e && e.slice(0, FP(e) + 1).replace(DP, "");
    }
    Xg.exports = kP;
  });
  var $n = c((oX, Yg) => {
    var GP = jg(),
      zg = st(),
      VP = Br(),
      Kg = 0 / 0,
      UP = /^[-+]0x[0-9a-f]+$/i,
      BP = /^0b[01]+$/i,
      WP = /^0o[0-7]+$/i,
      HP = parseInt;
    function XP(e) {
      if (typeof e == "number") return e;
      if (VP(e)) return Kg;
      if (zg(e)) {
        var t = typeof e.valueOf == "function" ? e.valueOf() : e;
        e = zg(t) ? t + "" : t;
      }
      if (typeof e != "string") return e === 0 ? e : +e;
      e = GP(e);
      var r = BP.test(e);
      return r || WP.test(e) ? HP(e.slice(2), r ? 2 : 8) : UP.test(e) ? Kg : +e;
    }
    Yg.exports = XP;
  });
  var Zg = c((aX, Qg) => {
    var jP = $n(),
      $g = 1 / 0,
      zP = 17976931348623157e292;
    function KP(e) {
      if (!e) return e === 0 ? e : 0;
      if (((e = jP(e)), e === $g || e === -$g)) {
        var t = e < 0 ? -1 : 1;
        return t * zP;
      }
      return e === e ? e : 0;
    }
    Qg.exports = KP;
  });
  var Ta = c((sX, Jg) => {
    var YP = Zg();
    function $P(e) {
      var t = YP(e),
        r = t % 1;
      return t === t ? (r ? t - r : t) : 0;
    }
    Jg.exports = $P;
  });
  var th = c((uX, eh) => {
    var QP = ba(),
      ZP = wt(),
      JP = Ta(),
      eq = Math.max;
    function tq(e, t, r) {
      var n = e == null ? 0 : e.length;
      if (!n) return -1;
      var i = r == null ? 0 : JP(r);
      return i < 0 && (i = eq(n + i, 0)), QP(e, ZP(t, 3), i);
    }
    eh.exports = tq;
  });
  var Ia = c((cX, rh) => {
    var rq = _a(),
      nq = th(),
      iq = rq(nq);
    rh.exports = iq;
  });
  var oh = {};
  ke(oh, {
    ELEMENT_MATCHES: () => oq,
    FLEX_PREFIXED: () => wa,
    IS_BROWSER_ENV: () => Je,
    TRANSFORM_PREFIXED: () => Ot,
    TRANSFORM_STYLE_PREFIXED: () => Zn,
    withBrowser: () => Qn,
  });
  var ih,
    Je,
    Qn,
    oq,
    wa,
    Ot,
    nh,
    Zn,
    Jn = he(() => {
      "use strict";
      (ih = le(Ia())),
        (Je = typeof window < "u"),
        (Qn = (e, t) => (Je ? e() : t)),
        (oq = Qn(() =>
          (0, ih.default)(
            [
              "matches",
              "matchesSelector",
              "mozMatchesSelector",
              "msMatchesSelector",
              "oMatchesSelector",
              "webkitMatchesSelector",
            ],
            (e) => e in Element.prototype
          )
        )),
        (wa = Qn(() => {
          let e = document.createElement("i"),
            t = [
              "flex",
              "-webkit-flex",
              "-ms-flexbox",
              "-moz-box",
              "-webkit-box",
            ],
            r = "";
          try {
            let { length: n } = t;
            for (let i = 0; i < n; i++) {
              let o = t[i];
              if (((e.style.display = o), e.style.display === o)) return o;
            }
            return r;
          } catch {
            return r;
          }
        }, "flex")),
        (Ot = Qn(() => {
          let e = document.createElement("i");
          if (e.style.transform == null) {
            let t = ["Webkit", "Moz", "ms"],
              r = "Transform",
              { length: n } = t;
            for (let i = 0; i < n; i++) {
              let o = t[i] + r;
              if (e.style[o] !== void 0) return o;
            }
          }
          return "transform";
        }, "transform")),
        (nh = Ot.split("transform")[0]),
        (Zn = nh ? nh + "TransformStyle" : "transformStyle");
    });
  var Oa = c((lX, lh) => {
    var aq = 4,
      sq = 0.001,
      uq = 1e-7,
      cq = 10,
      Hr = 11,
      ei = 1 / (Hr - 1),
      lq = typeof Float32Array == "function";
    function ah(e, t) {
      return 1 - 3 * t + 3 * e;
    }
    function sh(e, t) {
      return 3 * t - 6 * e;
    }
    function uh(e) {
      return 3 * e;
    }
    function ti(e, t, r) {
      return ((ah(t, r) * e + sh(t, r)) * e + uh(t)) * e;
    }
    function ch(e, t, r) {
      return 3 * ah(t, r) * e * e + 2 * sh(t, r) * e + uh(t);
    }
    function fq(e, t, r, n, i) {
      var o,
        a,
        s = 0;
      do
        (a = t + (r - t) / 2), (o = ti(a, n, i) - e), o > 0 ? (r = a) : (t = a);
      while (Math.abs(o) > uq && ++s < cq);
      return a;
    }
    function dq(e, t, r, n) {
      for (var i = 0; i < aq; ++i) {
        var o = ch(t, r, n);
        if (o === 0) return t;
        var a = ti(t, r, n) - e;
        t -= a / o;
      }
      return t;
    }
    lh.exports = function (t, r, n, i) {
      if (!(0 <= t && t <= 1 && 0 <= n && n <= 1))
        throw new Error("bezier x values must be in [0, 1] range");
      var o = lq ? new Float32Array(Hr) : new Array(Hr);
      if (t !== r || n !== i)
        for (var a = 0; a < Hr; ++a) o[a] = ti(a * ei, t, n);
      function s(u) {
        for (var f = 0, b = 1, v = Hr - 1; b !== v && o[b] <= u; ++b) f += ei;
        --b;
        var p = (u - o[b]) / (o[b + 1] - o[b]),
          E = f + p * ei,
          A = ch(E, t, n);
        return A >= sq ? dq(u, E, t, n) : A === 0 ? E : fq(u, f, f + ei, t, n);
      }
      return function (f) {
        return t === r && n === i
          ? f
          : f === 0
          ? 0
          : f === 1
          ? 1
          : ti(s(f), r, i);
      };
    };
  });
  var jr = {};
  ke(jr, {
    bounce: () => Kq,
    bouncePast: () => Yq,
    ease: () => pq,
    easeIn: () => vq,
    easeInOut: () => hq,
    easeOut: () => gq,
    inBack: () => Gq,
    inCirc: () => Mq,
    inCubic: () => _q,
    inElastic: () => Bq,
    inExpo: () => Nq,
    inOutBack: () => Uq,
    inOutCirc: () => Dq,
    inOutCubic: () => Tq,
    inOutElastic: () => Hq,
    inOutExpo: () => qq,
    inOutQuad: () => Eq,
    inOutQuart: () => Oq,
    inOutQuint: () => Sq,
    inOutSine: () => Lq,
    inQuad: () => mq,
    inQuart: () => Iq,
    inQuint: () => Aq,
    inSine: () => Cq,
    outBack: () => Vq,
    outBounce: () => kq,
    outCirc: () => Fq,
    outCubic: () => bq,
    outElastic: () => Wq,
    outExpo: () => Pq,
    outQuad: () => yq,
    outQuart: () => wq,
    outQuint: () => xq,
    outSine: () => Rq,
    swingFrom: () => jq,
    swingFromTo: () => Xq,
    swingTo: () => zq,
  });
  function mq(e) {
    return Math.pow(e, 2);
  }
  function yq(e) {
    return -(Math.pow(e - 1, 2) - 1);
  }
  function Eq(e) {
    return (e /= 0.5) < 1 ? 0.5 * Math.pow(e, 2) : -0.5 * ((e -= 2) * e - 2);
  }
  function _q(e) {
    return Math.pow(e, 3);
  }
  function bq(e) {
    return Math.pow(e - 1, 3) + 1;
  }
  function Tq(e) {
    return (e /= 0.5) < 1
      ? 0.5 * Math.pow(e, 3)
      : 0.5 * (Math.pow(e - 2, 3) + 2);
  }
  function Iq(e) {
    return Math.pow(e, 4);
  }
  function wq(e) {
    return -(Math.pow(e - 1, 4) - 1);
  }
  function Oq(e) {
    return (e /= 0.5) < 1
      ? 0.5 * Math.pow(e, 4)
      : -0.5 * ((e -= 2) * Math.pow(e, 3) - 2);
  }
  function Aq(e) {
    return Math.pow(e, 5);
  }
  function xq(e) {
    return Math.pow(e - 1, 5) + 1;
  }
  function Sq(e) {
    return (e /= 0.5) < 1
      ? 0.5 * Math.pow(e, 5)
      : 0.5 * (Math.pow(e - 2, 5) + 2);
  }
  function Cq(e) {
    return -Math.cos(e * (Math.PI / 2)) + 1;
  }
  function Rq(e) {
    return Math.sin(e * (Math.PI / 2));
  }
  function Lq(e) {
    return -0.5 * (Math.cos(Math.PI * e) - 1);
  }
  function Nq(e) {
    return e === 0 ? 0 : Math.pow(2, 10 * (e - 1));
  }
  function Pq(e) {
    return e === 1 ? 1 : -Math.pow(2, -10 * e) + 1;
  }
  function qq(e) {
    return e === 0
      ? 0
      : e === 1
      ? 1
      : (e /= 0.5) < 1
      ? 0.5 * Math.pow(2, 10 * (e - 1))
      : 0.5 * (-Math.pow(2, -10 * --e) + 2);
  }
  function Mq(e) {
    return -(Math.sqrt(1 - e * e) - 1);
  }
  function Fq(e) {
    return Math.sqrt(1 - Math.pow(e - 1, 2));
  }
  function Dq(e) {
    return (e /= 0.5) < 1
      ? -0.5 * (Math.sqrt(1 - e * e) - 1)
      : 0.5 * (Math.sqrt(1 - (e -= 2) * e) + 1);
  }
  function kq(e) {
    return e < 1 / 2.75
      ? 7.5625 * e * e
      : e < 2 / 2.75
      ? 7.5625 * (e -= 1.5 / 2.75) * e + 0.75
      : e < 2.5 / 2.75
      ? 7.5625 * (e -= 2.25 / 2.75) * e + 0.9375
      : 7.5625 * (e -= 2.625 / 2.75) * e + 0.984375;
  }
  function Gq(e) {
    let t = vt;
    return e * e * ((t + 1) * e - t);
  }
  function Vq(e) {
    let t = vt;
    return (e -= 1) * e * ((t + 1) * e + t) + 1;
  }
  function Uq(e) {
    let t = vt;
    return (e /= 0.5) < 1
      ? 0.5 * (e * e * (((t *= 1.525) + 1) * e - t))
      : 0.5 * ((e -= 2) * e * (((t *= 1.525) + 1) * e + t) + 2);
  }
  function Bq(e) {
    let t = vt,
      r = 0,
      n = 1;
    return e === 0
      ? 0
      : e === 1
      ? 1
      : (r || (r = 0.3),
        n < 1
          ? ((n = 1), (t = r / 4))
          : (t = (r / (2 * Math.PI)) * Math.asin(1 / n)),
        -(
          n *
          Math.pow(2, 10 * (e -= 1)) *
          Math.sin(((e - t) * (2 * Math.PI)) / r)
        ));
  }
  function Wq(e) {
    let t = vt,
      r = 0,
      n = 1;
    return e === 0
      ? 0
      : e === 1
      ? 1
      : (r || (r = 0.3),
        n < 1
          ? ((n = 1), (t = r / 4))
          : (t = (r / (2 * Math.PI)) * Math.asin(1 / n)),
        n * Math.pow(2, -10 * e) * Math.sin(((e - t) * (2 * Math.PI)) / r) + 1);
  }
  function Hq(e) {
    let t = vt,
      r = 0,
      n = 1;
    return e === 0
      ? 0
      : (e /= 1 / 2) === 2
      ? 1
      : (r || (r = 0.3 * 1.5),
        n < 1
          ? ((n = 1), (t = r / 4))
          : (t = (r / (2 * Math.PI)) * Math.asin(1 / n)),
        e < 1
          ? -0.5 *
            (n *
              Math.pow(2, 10 * (e -= 1)) *
              Math.sin(((e - t) * (2 * Math.PI)) / r))
          : n *
              Math.pow(2, -10 * (e -= 1)) *
              Math.sin(((e - t) * (2 * Math.PI)) / r) *
              0.5 +
            1);
  }
  function Xq(e) {
    let t = vt;
    return (e /= 0.5) < 1
      ? 0.5 * (e * e * (((t *= 1.525) + 1) * e - t))
      : 0.5 * ((e -= 2) * e * (((t *= 1.525) + 1) * e + t) + 2);
  }
  function jq(e) {
    let t = vt;
    return e * e * ((t + 1) * e - t);
  }
  function zq(e) {
    let t = vt;
    return (e -= 1) * e * ((t + 1) * e + t) + 1;
  }
  function Kq(e) {
    return e < 1 / 2.75
      ? 7.5625 * e * e
      : e < 2 / 2.75
      ? 7.5625 * (e -= 1.5 / 2.75) * e + 0.75
      : e < 2.5 / 2.75
      ? 7.5625 * (e -= 2.25 / 2.75) * e + 0.9375
      : 7.5625 * (e -= 2.625 / 2.75) * e + 0.984375;
  }
  function Yq(e) {
    return e < 1 / 2.75
      ? 7.5625 * e * e
      : e < 2 / 2.75
      ? 2 - (7.5625 * (e -= 1.5 / 2.75) * e + 0.75)
      : e < 2.5 / 2.75
      ? 2 - (7.5625 * (e -= 2.25 / 2.75) * e + 0.9375)
      : 2 - (7.5625 * (e -= 2.625 / 2.75) * e + 0.984375);
  }
  var Xr,
    vt,
    pq,
    vq,
    gq,
    hq,
    Aa = he(() => {
      "use strict";
      (Xr = le(Oa())),
        (vt = 1.70158),
        (pq = (0, Xr.default)(0.25, 0.1, 0.25, 1)),
        (vq = (0, Xr.default)(0.42, 0, 1, 1)),
        (gq = (0, Xr.default)(0, 0, 0.58, 1)),
        (hq = (0, Xr.default)(0.42, 0, 0.58, 1));
    });
  var dh = {};
  ke(dh, {
    applyEasing: () => Qq,
    createBezierEasing: () => $q,
    optimizeFloat: () => zr,
  });
  function zr(e, t = 5, r = 10) {
    let n = Math.pow(r, t),
      i = Number(Math.round(e * n) / n);
    return Math.abs(i) > 1e-4 ? i : 0;
  }
  function $q(e) {
    return (0, fh.default)(...e);
  }
  function Qq(e, t, r) {
    return t === 0
      ? 0
      : t === 1
      ? 1
      : zr(r ? (t > 0 ? r(t) : t) : t > 0 && e && jr[e] ? jr[e](t) : t);
  }
  var fh,
    xa = he(() => {
      "use strict";
      Aa();
      fh = le(Oa());
    });
  var gh = {};
  ke(gh, {
    createElementState: () => vh,
    ixElements: () => fM,
    mergeActionState: () => Sa,
  });
  function vh(e, t, r, n, i) {
    let o =
      r === Zq ? (0, or.getIn)(i, ["config", "target", "objectId"]) : null;
    return (0, or.mergeIn)(e, [n], { id: n, ref: t, refId: o, refType: r });
  }
  function Sa(e, t, r, n, i) {
    let o = pM(i);
    return (0, or.mergeIn)(e, [t, lM, r], n, o);
  }
  function pM(e) {
    let { config: t } = e;
    return dM.reduce((r, n) => {
      let i = n[0],
        o = n[1],
        a = t[i],
        s = t[o];
      return a != null && s != null && (r[o] = s), r;
    }, {});
  }
  var or,
    dX,
    Zq,
    pX,
    Jq,
    eM,
    tM,
    rM,
    nM,
    iM,
    oM,
    aM,
    sM,
    uM,
    cM,
    ph,
    lM,
    fM,
    dM,
    hh = he(() => {
      "use strict";
      or = le($t());
      Ve();
      ({
        HTML_ELEMENT: dX,
        PLAIN_OBJECT: Zq,
        ABSTRACT_NODE: pX,
        CONFIG_X_VALUE: Jq,
        CONFIG_Y_VALUE: eM,
        CONFIG_Z_VALUE: tM,
        CONFIG_VALUE: rM,
        CONFIG_X_UNIT: nM,
        CONFIG_Y_UNIT: iM,
        CONFIG_Z_UNIT: oM,
        CONFIG_UNIT: aM,
      } = Ce),
        ({
          IX2_SESSION_STOPPED: sM,
          IX2_INSTANCE_ADDED: uM,
          IX2_ELEMENT_STATE_CHANGED: cM,
        } = Ie),
        (ph = {}),
        (lM = "refState"),
        (fM = (e = ph, t = {}) => {
          switch (t.type) {
            case sM:
              return ph;
            case uM: {
              let {
                  elementId: r,
                  element: n,
                  origin: i,
                  actionItem: o,
                  refType: a,
                } = t.payload,
                { actionTypeId: s } = o,
                u = e;
              return (
                (0, or.getIn)(u, [r, n]) !== n && (u = vh(u, n, a, r, o)),
                Sa(u, r, s, i, o)
              );
            }
            case cM: {
              let {
                elementId: r,
                actionTypeId: n,
                current: i,
                actionItem: o,
              } = t.payload;
              return Sa(e, r, n, i, o);
            }
            default:
              return e;
          }
        });
      dM = [
        [Jq, nM],
        [eM, iM],
        [tM, oM],
        [rM, aM],
      ];
    });
  var mh = c((Oe) => {
    "use strict";
    Object.defineProperty(Oe, "__esModule", { value: !0 });
    Oe.renderPlugin = Oe.getPluginOrigin = Oe.getPluginDuration = Oe.getPluginDestination = Oe.getPluginConfig = Oe.createPluginInstance = Oe.clearPlugin = void 0;
    var vM = (e) => e.value;
    Oe.getPluginConfig = vM;
    var gM = (e, t) => {
      if (t.config.duration !== "auto") return null;
      let r = parseFloat(e.getAttribute("data-duration"));
      return r > 0
        ? r * 1e3
        : parseFloat(e.getAttribute("data-default-duration")) * 1e3;
    };
    Oe.getPluginDuration = gM;
    var hM = (e) => e || { value: 0 };
    Oe.getPluginOrigin = hM;
    var mM = (e) => ({ value: e.value });
    Oe.getPluginDestination = mM;
    var yM = (e) => {
      let t = window.Webflow.require("lottie").createInstance(e);
      return t.stop(), t.setSubframe(!0), t;
    };
    Oe.createPluginInstance = yM;
    var EM = (e, t, r) => {
      if (!e) return;
      let n = t[r.actionTypeId].value / 100;
      e.goToFrame(e.frames * n);
    };
    Oe.renderPlugin = EM;
    var _M = (e) => {
      window.Webflow.require("lottie").createInstance(e).stop();
    };
    Oe.clearPlugin = _M;
  });
  var Eh = c((Ae) => {
    "use strict";
    Object.defineProperty(Ae, "__esModule", { value: !0 });
    Ae.renderPlugin = Ae.getPluginOrigin = Ae.getPluginDuration = Ae.getPluginDestination = Ae.getPluginConfig = Ae.createPluginInstance = Ae.clearPlugin = void 0;
    var bM = (e) => document.querySelector(`[data-w-id="${e}"]`),
      TM = () => window.Webflow.require("spline"),
      IM = (e, t) => e.filter((r) => !t.includes(r)),
      wM = (e, t) => e.value[t];
    Ae.getPluginConfig = wM;
    var OM = () => null;
    Ae.getPluginDuration = OM;
    var yh = Object.freeze({
        positionX: 0,
        positionY: 0,
        positionZ: 0,
        rotationX: 0,
        rotationY: 0,
        rotationZ: 0,
        scaleX: 1,
        scaleY: 1,
        scaleZ: 1,
      }),
      AM = (e, t) => {
        let r = t.config.value,
          n = Object.keys(r);
        if (e) {
          let o = Object.keys(e),
            a = IM(n, o);
          return a.length ? a.reduce((u, f) => ((u[f] = yh[f]), u), e) : e;
        }
        return n.reduce((o, a) => ((o[a] = yh[a]), o), {});
      };
    Ae.getPluginOrigin = AM;
    var xM = (e) => e.value;
    Ae.getPluginDestination = xM;
    var SM = (e, t) => {
      var r;
      let n =
        t == null ||
        (r = t.config) === null ||
        r === void 0 ||
        (r = r.target) === null ||
        r === void 0
          ? void 0
          : r.pluginElement;
      return n ? bM(n) : null;
    };
    Ae.createPluginInstance = SM;
    var CM = (e, t, r) => {
      let n = TM(),
        i = n.getInstance(e),
        o = r.config.target.objectId,
        a = (s) => {
          if (!s) throw new Error("Invalid spline app passed to renderSpline");
          let u = o && s.findObjectById(o);
          if (!u) return;
          let { PLUGIN_SPLINE: f } = t;
          f.positionX != null && (u.position.x = f.positionX),
            f.positionY != null && (u.position.y = f.positionY),
            f.positionZ != null && (u.position.z = f.positionZ),
            f.rotationX != null && (u.rotation.x = f.rotationX),
            f.rotationY != null && (u.rotation.y = f.rotationY),
            f.rotationZ != null && (u.rotation.z = f.rotationZ),
            f.scaleX != null && (u.scale.x = f.scaleX),
            f.scaleY != null && (u.scale.y = f.scaleY),
            f.scaleZ != null && (u.scale.z = f.scaleZ);
        };
      i ? a(i.spline) : n.setLoadHandler(e, a);
    };
    Ae.renderPlugin = CM;
    var RM = () => null;
    Ae.clearPlugin = RM;
  });
  var Ra = c((Ca) => {
    "use strict";
    Object.defineProperty(Ca, "__esModule", { value: !0 });
    Ca.normalizeColor = LM;
    var _h = {
      aliceblue: "#F0F8FF",
      antiquewhite: "#FAEBD7",
      aqua: "#00FFFF",
      aquamarine: "#7FFFD4",
      azure: "#F0FFFF",
      beige: "#F5F5DC",
      bisque: "#FFE4C4",
      black: "#000000",
      blanchedalmond: "#FFEBCD",
      blue: "#0000FF",
      blueviolet: "#8A2BE2",
      brown: "#A52A2A",
      burlywood: "#DEB887",
      cadetblue: "#5F9EA0",
      chartreuse: "#7FFF00",
      chocolate: "#D2691E",
      coral: "#FF7F50",
      cornflowerblue: "#6495ED",
      cornsilk: "#FFF8DC",
      crimson: "#DC143C",
      cyan: "#00FFFF",
      darkblue: "#00008B",
      darkcyan: "#008B8B",
      darkgoldenrod: "#B8860B",
      darkgray: "#A9A9A9",
      darkgreen: "#006400",
      darkgrey: "#A9A9A9",
      darkkhaki: "#BDB76B",
      darkmagenta: "#8B008B",
      darkolivegreen: "#556B2F",
      darkorange: "#FF8C00",
      darkorchid: "#9932CC",
      darkred: "#8B0000",
      darksalmon: "#E9967A",
      darkseagreen: "#8FBC8F",
      darkslateblue: "#483D8B",
      darkslategray: "#2F4F4F",
      darkslategrey: "#2F4F4F",
      darkturquoise: "#00CED1",
      darkviolet: "#9400D3",
      deeppink: "#FF1493",
      deepskyblue: "#00BFFF",
      dimgray: "#696969",
      dimgrey: "#696969",
      dodgerblue: "#1E90FF",
      firebrick: "#B22222",
      floralwhite: "#FFFAF0",
      forestgreen: "#228B22",
      fuchsia: "#FF00FF",
      gainsboro: "#DCDCDC",
      ghostwhite: "#F8F8FF",
      gold: "#FFD700",
      goldenrod: "#DAA520",
      gray: "#808080",
      green: "#008000",
      greenyellow: "#ADFF2F",
      grey: "#808080",
      honeydew: "#F0FFF0",
      hotpink: "#FF69B4",
      indianred: "#CD5C5C",
      indigo: "#4B0082",
      ivory: "#FFFFF0",
      khaki: "#F0E68C",
      lavender: "#E6E6FA",
      lavenderblush: "#FFF0F5",
      lawngreen: "#7CFC00",
      lemonchiffon: "#FFFACD",
      lightblue: "#ADD8E6",
      lightcoral: "#F08080",
      lightcyan: "#E0FFFF",
      lightgoldenrodyellow: "#FAFAD2",
      lightgray: "#D3D3D3",
      lightgreen: "#90EE90",
      lightgrey: "#D3D3D3",
      lightpink: "#FFB6C1",
      lightsalmon: "#FFA07A",
      lightseagreen: "#20B2AA",
      lightskyblue: "#87CEFA",
      lightslategray: "#778899",
      lightslategrey: "#778899",
      lightsteelblue: "#B0C4DE",
      lightyellow: "#FFFFE0",
      lime: "#00FF00",
      limegreen: "#32CD32",
      linen: "#FAF0E6",
      magenta: "#FF00FF",
      maroon: "#800000",
      mediumaquamarine: "#66CDAA",
      mediumblue: "#0000CD",
      mediumorchid: "#BA55D3",
      mediumpurple: "#9370DB",
      mediumseagreen: "#3CB371",
      mediumslateblue: "#7B68EE",
      mediumspringgreen: "#00FA9A",
      mediumturquoise: "#48D1CC",
      mediumvioletred: "#C71585",
      midnightblue: "#191970",
      mintcream: "#F5FFFA",
      mistyrose: "#FFE4E1",
      moccasin: "#FFE4B5",
      navajowhite: "#FFDEAD",
      navy: "#000080",
      oldlace: "#FDF5E6",
      olive: "#808000",
      olivedrab: "#6B8E23",
      orange: "#FFA500",
      orangered: "#FF4500",
      orchid: "#DA70D6",
      palegoldenrod: "#EEE8AA",
      palegreen: "#98FB98",
      paleturquoise: "#AFEEEE",
      palevioletred: "#DB7093",
      papayawhip: "#FFEFD5",
      peachpuff: "#FFDAB9",
      peru: "#CD853F",
      pink: "#FFC0CB",
      plum: "#DDA0DD",
      powderblue: "#B0E0E6",
      purple: "#800080",
      rebeccapurple: "#663399",
      red: "#FF0000",
      rosybrown: "#BC8F8F",
      royalblue: "#4169E1",
      saddlebrown: "#8B4513",
      salmon: "#FA8072",
      sandybrown: "#F4A460",
      seagreen: "#2E8B57",
      seashell: "#FFF5EE",
      sienna: "#A0522D",
      silver: "#C0C0C0",
      skyblue: "#87CEEB",
      slateblue: "#6A5ACD",
      slategray: "#708090",
      slategrey: "#708090",
      snow: "#FFFAFA",
      springgreen: "#00FF7F",
      steelblue: "#4682B4",
      tan: "#D2B48C",
      teal: "#008080",
      thistle: "#D8BFD8",
      tomato: "#FF6347",
      turquoise: "#40E0D0",
      violet: "#EE82EE",
      wheat: "#F5DEB3",
      white: "#FFFFFF",
      whitesmoke: "#F5F5F5",
      yellow: "#FFFF00",
      yellowgreen: "#9ACD32",
    };
    function LM(e) {
      let t,
        r,
        n,
        i = 1,
        o = e.replace(/\s/g, "").toLowerCase(),
        s = (typeof _h[o] == "string" ? _h[o].toLowerCase() : null) || o;
      if (s.startsWith("#")) {
        let u = s.substring(1);
        u.length === 3
          ? ((t = parseInt(u[0] + u[0], 16)),
            (r = parseInt(u[1] + u[1], 16)),
            (n = parseInt(u[2] + u[2], 16)))
          : u.length === 6 &&
            ((t = parseInt(u.substring(0, 2), 16)),
            (r = parseInt(u.substring(2, 4), 16)),
            (n = parseInt(u.substring(4, 6), 16)));
      } else if (s.startsWith("rgba")) {
        let u = s.match(/rgba\(([^)]+)\)/)[1].split(",");
        (t = parseInt(u[0], 10)),
          (r = parseInt(u[1], 10)),
          (n = parseInt(u[2], 10)),
          (i = parseFloat(u[3]));
      } else if (s.startsWith("rgb")) {
        let u = s.match(/rgb\(([^)]+)\)/)[1].split(",");
        (t = parseInt(u[0], 10)),
          (r = parseInt(u[1], 10)),
          (n = parseInt(u[2], 10));
      } else if (s.startsWith("hsla")) {
        let u = s.match(/hsla\(([^)]+)\)/)[1].split(","),
          f = parseFloat(u[0]),
          b = parseFloat(u[1].replace("%", "")) / 100,
          v = parseFloat(u[2].replace("%", "")) / 100;
        i = parseFloat(u[3]);
        let p = (1 - Math.abs(2 * v - 1)) * b,
          E = p * (1 - Math.abs(((f / 60) % 2) - 1)),
          A = v - p / 2,
          O,
          S,
          _;
        f >= 0 && f < 60
          ? ((O = p), (S = E), (_ = 0))
          : f >= 60 && f < 120
          ? ((O = E), (S = p), (_ = 0))
          : f >= 120 && f < 180
          ? ((O = 0), (S = p), (_ = E))
          : f >= 180 && f < 240
          ? ((O = 0), (S = E), (_ = p))
          : f >= 240 && f < 300
          ? ((O = E), (S = 0), (_ = p))
          : ((O = p), (S = 0), (_ = E)),
          (t = Math.round((O + A) * 255)),
          (r = Math.round((S + A) * 255)),
          (n = Math.round((_ + A) * 255));
      } else if (s.startsWith("hsl")) {
        let u = s.match(/hsl\(([^)]+)\)/)[1].split(","),
          f = parseFloat(u[0]),
          b = parseFloat(u[1].replace("%", "")) / 100,
          v = parseFloat(u[2].replace("%", "")) / 100,
          p = (1 - Math.abs(2 * v - 1)) * b,
          E = p * (1 - Math.abs(((f / 60) % 2) - 1)),
          A = v - p / 2,
          O,
          S,
          _;
        f >= 0 && f < 60
          ? ((O = p), (S = E), (_ = 0))
          : f >= 60 && f < 120
          ? ((O = E), (S = p), (_ = 0))
          : f >= 120 && f < 180
          ? ((O = 0), (S = p), (_ = E))
          : f >= 180 && f < 240
          ? ((O = 0), (S = E), (_ = p))
          : f >= 240 && f < 300
          ? ((O = E), (S = 0), (_ = p))
          : ((O = p), (S = 0), (_ = E)),
          (t = Math.round((O + A) * 255)),
          (r = Math.round((S + A) * 255)),
          (n = Math.round((_ + A) * 255));
      }
      if (Number.isNaN(t) || Number.isNaN(r) || Number.isNaN(n))
        throw new Error(
          `Invalid color in [ix2/shared/utils/normalizeColor.js] '${e}'`
        );
      return { red: t, green: r, blue: n, alpha: i };
    }
  });
  var bh = c((xe) => {
    "use strict";
    Object.defineProperty(xe, "__esModule", { value: !0 });
    xe.renderPlugin = xe.getPluginOrigin = xe.getPluginDuration = xe.getPluginDestination = xe.getPluginConfig = xe.createPluginInstance = xe.clearPlugin = void 0;
    var NM = Ra(),
      PM = (e, t) => e.value[t];
    xe.getPluginConfig = PM;
    var qM = () => null;
    xe.getPluginDuration = qM;
    var MM = (e, t) => {
      if (e) return e;
      let r = t.config.value,
        n = t.config.target.objectId,
        i = getComputedStyle(document.documentElement).getPropertyValue(n);
      if (r.size != null) return { size: parseInt(i, 10) };
      if (r.red != null && r.green != null && r.blue != null)
        return (0, NM.normalizeColor)(i);
    };
    xe.getPluginOrigin = MM;
    var FM = (e) => e.value;
    xe.getPluginDestination = FM;
    var DM = () => null;
    xe.createPluginInstance = DM;
    var kM = (e, t, r) => {
      let n = r.config.target.objectId,
        i = r.config.value.unit,
        { PLUGIN_VARIABLE: o } = t,
        { size: a, red: s, green: u, blue: f, alpha: b } = o,
        v;
      a != null && (v = a + i),
        s != null &&
          f != null &&
          u != null &&
          b != null &&
          (v = `rgba(${s}, ${u}, ${f}, ${b})`),
        v != null && document.documentElement.style.setProperty(n, v);
    };
    xe.renderPlugin = kM;
    var GM = (e, t) => {
      let r = t.config.target.objectId;
      document.documentElement.style.removeProperty(r);
    };
    xe.clearPlugin = GM;
  });
  var Th = c((ri) => {
    "use strict";
    var Na = pn().default;
    Object.defineProperty(ri, "__esModule", { value: !0 });
    ri.pluginMethodMap = void 0;
    var La = (Ve(), rt(Sf)),
      VM = Na(mh()),
      UM = Na(Eh()),
      BM = Na(bh()),
      yX = (ri.pluginMethodMap = new Map([
        [La.ActionTypeConsts.PLUGIN_LOTTIE, { ...VM }],
        [La.ActionTypeConsts.PLUGIN_SPLINE, { ...UM }],
        [La.ActionTypeConsts.PLUGIN_VARIABLE, { ...BM }],
      ]));
  });
  var Ih = {};
  ke(Ih, {
    clearPlugin: () => ka,
    createPluginInstance: () => HM,
    getPluginConfig: () => qa,
    getPluginDestination: () => Fa,
    getPluginDuration: () => WM,
    getPluginOrigin: () => Ma,
    isPluginType: () => Ft,
    renderPlugin: () => Da,
  });
  function Ft(e) {
    return Pa.pluginMethodMap.has(e);
  }
  var Pa,
    Dt,
    qa,
    Ma,
    WM,
    Fa,
    HM,
    Da,
    ka,
    Ga = he(() => {
      "use strict";
      Jn();
      Pa = le(Th());
      (Dt = (e) => (t) => {
        if (!Je) return () => null;
        let r = Pa.pluginMethodMap.get(t);
        if (!r) throw new Error(`IX2 no plugin configured for: ${t}`);
        let n = r[e];
        if (!n) throw new Error(`IX2 invalid plugin method: ${e}`);
        return n;
      }),
        (qa = Dt("getPluginConfig")),
        (Ma = Dt("getPluginOrigin")),
        (WM = Dt("getPluginDuration")),
        (Fa = Dt("getPluginDestination")),
        (HM = Dt("createPluginInstance")),
        (Da = Dt("renderPlugin")),
        (ka = Dt("clearPlugin"));
    });
  var Oh = c((bX, wh) => {
    function XM(e, t) {
      return e == null || e !== e ? t : e;
    }
    wh.exports = XM;
  });
  var xh = c((TX, Ah) => {
    function jM(e, t, r, n) {
      var i = -1,
        o = e == null ? 0 : e.length;
      for (n && o && (r = e[++i]); ++i < o; ) r = t(r, e[i], i, e);
      return r;
    }
    Ah.exports = jM;
  });
  var Ch = c((IX, Sh) => {
    function zM(e) {
      return function (t, r, n) {
        for (var i = -1, o = Object(t), a = n(t), s = a.length; s--; ) {
          var u = a[e ? s : ++i];
          if (r(o[u], u, o) === !1) break;
        }
        return t;
      };
    }
    Sh.exports = zM;
  });
  var Lh = c((wX, Rh) => {
    var KM = Ch(),
      YM = KM();
    Rh.exports = YM;
  });
  var Va = c((OX, Nh) => {
    var $M = Lh(),
      QM = Ur();
    function ZM(e, t) {
      return e && $M(e, t, QM);
    }
    Nh.exports = ZM;
  });
  var qh = c((AX, Ph) => {
    var JM = qt();
    function eF(e, t) {
      return function (r, n) {
        if (r == null) return r;
        if (!JM(r)) return e(r, n);
        for (
          var i = r.length, o = t ? i : -1, a = Object(r);
          (t ? o-- : ++o < i) && n(a[o], o, a) !== !1;

        );
        return r;
      };
    }
    Ph.exports = eF;
  });
  var Ua = c((xX, Mh) => {
    var tF = Va(),
      rF = qh(),
      nF = rF(tF);
    Mh.exports = nF;
  });
  var Dh = c((SX, Fh) => {
    function iF(e, t, r, n, i) {
      return (
        i(e, function (o, a, s) {
          r = n ? ((n = !1), o) : t(r, o, a, s);
        }),
        r
      );
    }
    Fh.exports = iF;
  });
  var Gh = c((CX, kh) => {
    var oF = xh(),
      aF = Ua(),
      sF = wt(),
      uF = Dh(),
      cF = we();
    function lF(e, t, r) {
      var n = cF(e) ? oF : uF,
        i = arguments.length < 3;
      return n(e, sF(t, 4), r, i, aF);
    }
    kh.exports = lF;
  });
  var Uh = c((RX, Vh) => {
    var fF = ba(),
      dF = wt(),
      pF = Ta(),
      vF = Math.max,
      gF = Math.min;
    function hF(e, t, r) {
      var n = e == null ? 0 : e.length;
      if (!n) return -1;
      var i = n - 1;
      return (
        r !== void 0 &&
          ((i = pF(r)), (i = r < 0 ? vF(n + i, 0) : gF(i, n - 1))),
        fF(e, dF(t, 3), i, !0)
      );
    }
    Vh.exports = hF;
  });
  var Wh = c((LX, Bh) => {
    var mF = _a(),
      yF = Uh(),
      EF = mF(yF);
    Bh.exports = EF;
  });
  function Hh(e, t) {
    return e === t ? e !== 0 || t !== 0 || 1 / e === 1 / t : e !== e && t !== t;
  }
  function bF(e, t) {
    if (Hh(e, t)) return !0;
    if (
      typeof e != "object" ||
      e === null ||
      typeof t != "object" ||
      t === null
    )
      return !1;
    let r = Object.keys(e),
      n = Object.keys(t);
    if (r.length !== n.length) return !1;
    for (let i = 0; i < r.length; i++)
      if (!_F.call(t, r[i]) || !Hh(e[r[i]], t[r[i]])) return !1;
    return !0;
  }
  var _F,
    Ba,
    Xh = he(() => {
      "use strict";
      _F = Object.prototype.hasOwnProperty;
      Ba = bF;
    });
  var cm = {};
  ke(cm, {
    cleanupHTMLElement: () => y1,
    clearAllStyles: () => m1,
    clearObjectCache: () => kF,
    getActionListProgress: () => _1,
    getAffectedElements: () => za,
    getComputedStyle: () => jF,
    getDestinationValues: () => JF,
    getElementId: () => BF,
    getInstanceId: () => VF,
    getInstanceOrigin: () => YF,
    getItemConfigByKey: () => ZF,
    getMaxDurationItemIndex: () => um,
    getNamespacedParameterId: () => I1,
    getRenderType: () => om,
    getStyleProp: () => e1,
    mediaQueriesEqual: () => O1,
    observeStore: () => XF,
    reduceListToGroup: () => b1,
    reifyState: () => WF,
    renderHTMLElement: () => t1,
    shallowEqual: () => Ba,
    shouldAllowMediaQuery: () => w1,
    shouldNamespaceEventParameter: () => T1,
    stringifyTarget: () => A1,
  });
  function kF() {
    ni.clear();
  }
  function VF() {
    return "i" + GF++;
  }
  function BF(e, t) {
    for (let r in e) {
      let n = e[r];
      if (n && n.ref === t) return n.id;
    }
    return "e" + UF++;
  }
  function WF({ events: e, actionLists: t, site: r } = {}) {
    let n = (0, si.default)(
        e,
        (a, s) => {
          let { eventTypeId: u } = s;
          return a[u] || (a[u] = {}), (a[u][s.id] = s), a;
        },
        {}
      ),
      i = r && r.mediaQueries,
      o = [];
    return (
      i
        ? (o = i.map((a) => a.key))
        : ((i = []), console.warn("IX2 missing mediaQueries in site data")),
      {
        ixData: {
          events: e,
          actionLists: t,
          eventTypeMap: n,
          mediaQueries: i,
          mediaQueryKeys: o,
        },
      }
    );
  }
  function XF({ store: e, select: t, onChange: r, comparator: n = HF }) {
    let { getState: i, subscribe: o } = e,
      a = o(u),
      s = t(i());
    function u() {
      let f = t(i());
      if (f == null) {
        a();
        return;
      }
      n(f, s) || ((s = f), r(s, e));
    }
    return a;
  }
  function Kh(e) {
    let t = typeof e;
    if (t === "string") return { id: e };
    if (e != null && t === "object") {
      let {
        id: r,
        objectId: n,
        selector: i,
        selectorGuids: o,
        appliesTo: a,
        useEventTarget: s,
      } = e;
      return {
        id: r,
        objectId: n,
        selector: i,
        selectorGuids: o,
        appliesTo: a,
        useEventTarget: s,
      };
    }
    return {};
  }
  function za({
    config: e,
    event: t,
    eventTarget: r,
    elementRoot: n,
    elementApi: i,
  }) {
    if (!i) throw new Error("IX2 missing elementApi");
    let { targets: o } = e;
    if (Array.isArray(o) && o.length > 0)
      return o.reduce(
        (L, h) =>
          L.concat(
            za({
              config: { target: h },
              event: t,
              eventTarget: r,
              elementRoot: n,
              elementApi: i,
            })
          ),
        []
      );
    let {
        getValidDocument: a,
        getQuerySelector: s,
        queryDocument: u,
        getChildElements: f,
        getSiblingElements: b,
        matchSelector: v,
        elementContains: p,
        isSiblingNode: E,
      } = i,
      { target: A } = e;
    if (!A) return [];
    let {
      id: O,
      objectId: S,
      selector: _,
      selectorGuids: y,
      appliesTo: R,
      useEventTarget: D,
    } = Kh(A);
    if (S) return [ni.has(S) ? ni.get(S) : ni.set(S, {}).get(S)];
    if (R === jo.PAGE) {
      let L = a(O);
      return L ? [L] : [];
    }
    let q = (t?.action?.config?.affectedElements ?? {})[O || _] || {},
      W = !!(q.id || q.selector),
      j,
      Y,
      Z,
      V = t && s(Kh(t.target));
    if (
      (W
        ? ((j = q.limitAffectedElements), (Y = V), (Z = s(q)))
        : (Y = Z = s({ id: O, selector: _, selectorGuids: y })),
      t && D)
    ) {
      let L = r && (Z || D === !0) ? [r] : u(V);
      if (Z) {
        if (D === MF) return u(Z).filter((h) => L.some((N) => p(h, N)));
        if (D === jh) return u(Z).filter((h) => L.some((N) => p(N, h)));
        if (D === zh) return u(Z).filter((h) => L.some((N) => E(N, h)));
      }
      return L;
    }
    return Y == null || Z == null
      ? []
      : Je && n
      ? u(Z).filter((L) => n.contains(L))
      : j === jh
      ? u(Y, Z)
      : j === qF
      ? f(u(Y)).filter(v(Z))
      : j === zh
      ? b(u(Y)).filter(v(Z))
      : u(Z);
  }
  function jF({ element: e, actionItem: t }) {
    if (!Je) return {};
    let { actionTypeId: r } = t;
    switch (r) {
      case lr:
      case fr:
      case dr:
      case pr:
      case ci:
        return window.getComputedStyle(e);
      default:
        return {};
    }
  }
  function YF(e, t = {}, r = {}, n, i) {
    let { getStyle: o } = i,
      { actionTypeId: a } = n;
    if (Ft(a)) return Ma(a)(t[a], n);
    switch (n.actionTypeId) {
      case sr:
      case ur:
      case cr:
      case Qr:
        return t[n.actionTypeId] || Ka[n.actionTypeId];
      case Zr:
        return zF(t[n.actionTypeId], n.config.filters);
      case Jr:
        return KF(t[n.actionTypeId], n.config.fontVariations);
      case rm:
        return { value: (0, gt.default)(parseFloat(o(e, oi)), 1) };
      case lr: {
        let s = o(e, ut),
          u = o(e, ct),
          f,
          b;
        return (
          n.config.widthUnit === At
            ? (f = Yh.test(s) ? parseFloat(s) : parseFloat(r.width))
            : (f = (0, gt.default)(parseFloat(s), parseFloat(r.width))),
          n.config.heightUnit === At
            ? (b = Yh.test(u) ? parseFloat(u) : parseFloat(r.height))
            : (b = (0, gt.default)(parseFloat(u), parseFloat(r.height))),
          { widthValue: f, heightValue: b }
        );
      }
      case fr:
      case dr:
      case pr:
        return v1({
          element: e,
          actionTypeId: n.actionTypeId,
          computedStyle: r,
          getStyle: o,
        });
      case ci:
        return { value: (0, gt.default)(o(e, ai), r.display) };
      case DF:
        return t[n.actionTypeId] || { value: 0 };
      default:
        return;
    }
  }
  function JF({ element: e, actionItem: t, elementApi: r }) {
    if (Ft(t.actionTypeId)) return Fa(t.actionTypeId)(t.config);
    switch (t.actionTypeId) {
      case sr:
      case ur:
      case cr:
      case Qr: {
        let { xValue: n, yValue: i, zValue: o } = t.config;
        return { xValue: n, yValue: i, zValue: o };
      }
      case lr: {
        let { getStyle: n, setStyle: i, getProperty: o } = r,
          { widthUnit: a, heightUnit: s } = t.config,
          { widthValue: u, heightValue: f } = t.config;
        if (!Je) return { widthValue: u, heightValue: f };
        if (a === At) {
          let b = n(e, ut);
          i(e, ut, ""), (u = o(e, "offsetWidth")), i(e, ut, b);
        }
        if (s === At) {
          let b = n(e, ct);
          i(e, ct, ""), (f = o(e, "offsetHeight")), i(e, ct, b);
        }
        return { widthValue: u, heightValue: f };
      }
      case fr:
      case dr:
      case pr: {
        let {
          rValue: n,
          gValue: i,
          bValue: o,
          aValue: a,
          globalSwatchId: s,
        } = t.config;
        if (s && s.startsWith("--")) {
          let { getStyle: u } = r,
            f = u(e, s),
            b = (0, Zh.normalizeColor)(f);
          return {
            rValue: b.red,
            gValue: b.green,
            bValue: b.blue,
            aValue: b.alpha,
          };
        }
        return { rValue: n, gValue: i, bValue: o, aValue: a };
      }
      case Zr:
        return t.config.filters.reduce($F, {});
      case Jr:
        return t.config.fontVariations.reduce(QF, {});
      default: {
        let { value: n } = t.config;
        return { value: n };
      }
    }
  }
  function om(e) {
    if (/^TRANSFORM_/.test(e)) return em;
    if (/^STYLE_/.test(e)) return Xa;
    if (/^GENERAL_/.test(e)) return Ha;
    if (/^PLUGIN_/.test(e)) return tm;
  }
  function e1(e, t) {
    return e === Xa ? t.replace("STYLE_", "").toLowerCase() : null;
  }
  function t1(e, t, r, n, i, o, a, s, u) {
    switch (s) {
      case em:
        return a1(e, t, r, i, a);
      case Xa:
        return g1(e, t, r, i, o, a);
      case Ha:
        return h1(e, i, a);
      case tm: {
        let { actionTypeId: f } = i;
        if (Ft(f)) return Da(f)(u, t, i);
      }
    }
  }
  function a1(e, t, r, n, i) {
    let o = o1
        .map((s) => {
          let u = Ka[s],
            {
              xValue: f = u.xValue,
              yValue: b = u.yValue,
              zValue: v = u.zValue,
              xUnit: p = "",
              yUnit: E = "",
              zUnit: A = "",
            } = t[s] || {};
          switch (s) {
            case sr:
              return `${wF}(${f}${p}, ${b}${E}, ${v}${A})`;
            case ur:
              return `${OF}(${f}${p}, ${b}${E}, ${v}${A})`;
            case cr:
              return `${AF}(${f}${p}) ${xF}(${b}${E}) ${SF}(${v}${A})`;
            case Qr:
              return `${CF}(${f}${p}, ${b}${E})`;
            default:
              return "";
          }
        })
        .join(" "),
      { setStyle: a } = i;
    kt(e, Ot, i), a(e, Ot, o), c1(n, r) && a(e, Zn, RF);
  }
  function s1(e, t, r, n) {
    let i = (0, si.default)(t, (a, s, u) => `${a} ${u}(${s}${i1(u, r)})`, ""),
      { setStyle: o } = n;
    kt(e, Kr, n), o(e, Kr, i);
  }
  function u1(e, t, r, n) {
    let i = (0, si.default)(
        t,
        (a, s, u) => (a.push(`"${u}" ${s}`), a),
        []
      ).join(", "),
      { setStyle: o } = n;
    kt(e, Yr, n), o(e, Yr, i);
  }
  function c1({ actionTypeId: e }, { xValue: t, yValue: r, zValue: n }) {
    return (
      (e === sr && n !== void 0) ||
      (e === ur && n !== void 0) ||
      (e === cr && (t !== void 0 || r !== void 0))
    );
  }
  function p1(e, t) {
    let r = e.exec(t);
    return r ? r[1] : "";
  }
  function v1({ element: e, actionTypeId: t, computedStyle: r, getStyle: n }) {
    let i = ja[t],
      o = n(e, i),
      a = f1.test(o) ? o : r[i],
      s = p1(d1, a).split($r);
    return {
      rValue: (0, gt.default)(parseInt(s[0], 10), 255),
      gValue: (0, gt.default)(parseInt(s[1], 10), 255),
      bValue: (0, gt.default)(parseInt(s[2], 10), 255),
      aValue: (0, gt.default)(parseFloat(s[3]), 1),
    };
  }
  function g1(e, t, r, n, i, o) {
    let { setStyle: a } = o;
    switch (n.actionTypeId) {
      case lr: {
        let { widthUnit: s = "", heightUnit: u = "" } = n.config,
          { widthValue: f, heightValue: b } = r;
        f !== void 0 && (s === At && (s = "px"), kt(e, ut, o), a(e, ut, f + s)),
          b !== void 0 &&
            (u === At && (u = "px"), kt(e, ct, o), a(e, ct, b + u));
        break;
      }
      case Zr: {
        s1(e, r, n.config, o);
        break;
      }
      case Jr: {
        u1(e, r, n.config, o);
        break;
      }
      case fr:
      case dr:
      case pr: {
        let s = ja[n.actionTypeId],
          u = Math.round(r.rValue),
          f = Math.round(r.gValue),
          b = Math.round(r.bValue),
          v = r.aValue;
        kt(e, s, o),
          a(e, s, v >= 1 ? `rgb(${u},${f},${b})` : `rgba(${u},${f},${b},${v})`);
        break;
      }
      default: {
        let { unit: s = "" } = n.config;
        kt(e, i, o), a(e, i, r.value + s);
        break;
      }
    }
  }
  function h1(e, t, r) {
    let { setStyle: n } = r;
    switch (t.actionTypeId) {
      case ci: {
        let { value: i } = t.config;
        i === LF && Je ? n(e, ai, wa) : n(e, ai, i);
        return;
      }
    }
  }
  function kt(e, t, r) {
    if (!Je) return;
    let n = im[t];
    if (!n) return;
    let { getStyle: i, setStyle: o } = r,
      a = i(e, ar);
    if (!a) {
      o(e, ar, n);
      return;
    }
    let s = a.split($r).map(nm);
    s.indexOf(n) === -1 && o(e, ar, s.concat(n).join($r));
  }
  function am(e, t, r) {
    if (!Je) return;
    let n = im[t];
    if (!n) return;
    let { getStyle: i, setStyle: o } = r,
      a = i(e, ar);
    !a ||
      a.indexOf(n) === -1 ||
      o(
        e,
        ar,
        a
          .split($r)
          .map(nm)
          .filter((s) => s !== n)
          .join($r)
      );
  }
  function m1({ store: e, elementApi: t }) {
    let { ixData: r } = e.getState(),
      { events: n = {}, actionLists: i = {} } = r;
    Object.keys(n).forEach((o) => {
      let a = n[o],
        { config: s } = a.action,
        { actionListId: u } = s,
        f = i[u];
      f && $h({ actionList: f, event: a, elementApi: t });
    }),
      Object.keys(i).forEach((o) => {
        $h({ actionList: i[o], elementApi: t });
      });
  }
  function $h({ actionList: e = {}, event: t, elementApi: r }) {
    let { actionItemGroups: n, continuousParameterGroups: i } = e;
    n &&
      n.forEach((o) => {
        Qh({ actionGroup: o, event: t, elementApi: r });
      }),
      i &&
        i.forEach((o) => {
          let { continuousActionGroups: a } = o;
          a.forEach((s) => {
            Qh({ actionGroup: s, event: t, elementApi: r });
          });
        });
  }
  function Qh({ actionGroup: e, event: t, elementApi: r }) {
    let { actionItems: n } = e;
    n.forEach((i) => {
      let { actionTypeId: o, config: a } = i,
        s;
      Ft(o)
        ? (s = (u) => ka(o)(u, i))
        : (s = sm({ effect: E1, actionTypeId: o, elementApi: r })),
        za({ config: a, event: t, elementApi: r }).forEach(s);
    });
  }
  function y1(e, t, r) {
    let { setStyle: n, getStyle: i } = r,
      { actionTypeId: o } = t;
    if (o === lr) {
      let { config: a } = t;
      a.widthUnit === At && n(e, ut, ""), a.heightUnit === At && n(e, ct, "");
    }
    i(e, ar) && sm({ effect: am, actionTypeId: o, elementApi: r })(e);
  }
  function E1(e, t, r) {
    let { setStyle: n } = r;
    am(e, t, r), n(e, t, ""), t === Ot && n(e, Zn, "");
  }
  function um(e) {
    let t = 0,
      r = 0;
    return (
      e.forEach((n, i) => {
        let { config: o } = n,
          a = o.delay + o.duration;
        a >= t && ((t = a), (r = i));
      }),
      r
    );
  }
  function _1(e, t) {
    let { actionItemGroups: r, useFirstGroupAsInitialState: n } = e,
      { actionItem: i, verboseTimeElapsed: o = 0 } = t,
      a = 0,
      s = 0;
    return (
      r.forEach((u, f) => {
        if (n && f === 0) return;
        let { actionItems: b } = u,
          v = b[um(b)],
          { config: p, actionTypeId: E } = v;
        i.id === v.id && (s = a + o);
        let A = om(E) === Ha ? 0 : p.duration;
        a += p.delay + A;
      }),
      a > 0 ? zr(s / a) : 0
    );
  }
  function b1({ actionList: e, actionItemId: t, rawData: r }) {
    let { actionItemGroups: n, continuousParameterGroups: i } = e,
      o = [],
      a = (s) => (
        o.push((0, ui.mergeIn)(s, ["config"], { delay: 0, duration: 0 })),
        s.id === t
      );
    return (
      n && n.some(({ actionItems: s }) => s.some(a)),
      i &&
        i.some((s) => {
          let { continuousActionGroups: u } = s;
          return u.some(({ actionItems: f }) => f.some(a));
        }),
      (0, ui.setIn)(r, ["actionLists"], {
        [e.id]: { id: e.id, actionItemGroups: [{ actionItems: o }] },
      })
    );
  }
  function T1(e, { basedOn: t }) {
    return (
      (e === Ze.SCROLLING_IN_VIEW && (t === at.ELEMENT || t == null)) ||
      (e === Ze.MOUSE_MOVE && t === at.ELEMENT)
    );
  }
  function I1(e, t) {
    return e + FF + t;
  }
  function w1(e, t) {
    return t == null ? !0 : e.indexOf(t) !== -1;
  }
  function O1(e, t) {
    return Ba(e && e.sort(), t && t.sort());
  }
  function A1(e) {
    if (typeof e == "string") return e;
    if (e.pluginElement && e.objectId) return e.pluginElement + Wa + e.objectId;
    if (e.objectId) return e.objectId;
    let { id: t = "", selector: r = "", useEventTarget: n = "" } = e;
    return t + Wa + r + Wa + n;
  }
  var gt,
    si,
    ii,
    ui,
    Zh,
    TF,
    IF,
    wF,
    OF,
    AF,
    xF,
    SF,
    CF,
    RF,
    LF,
    oi,
    Kr,
    Yr,
    ut,
    ct,
    Jh,
    NF,
    PF,
    jh,
    qF,
    zh,
    MF,
    ai,
    ar,
    At,
    $r,
    FF,
    Wa,
    em,
    Ha,
    Xa,
    tm,
    sr,
    ur,
    cr,
    Qr,
    rm,
    Zr,
    Jr,
    lr,
    fr,
    dr,
    pr,
    ci,
    DF,
    nm,
    ja,
    im,
    ni,
    GF,
    UF,
    HF,
    Yh,
    zF,
    KF,
    $F,
    QF,
    ZF,
    Ka,
    r1,
    n1,
    i1,
    o1,
    l1,
    f1,
    d1,
    sm,
    lm = he(() => {
      "use strict";
      (gt = le(Oh())), (si = le(Gh())), (ii = le(Wh())), (ui = le($t()));
      Ve();
      Xh();
      xa();
      Zh = le(Ra());
      Ga();
      Jn();
      ({
        BACKGROUND: TF,
        TRANSFORM: IF,
        TRANSLATE_3D: wF,
        SCALE_3D: OF,
        ROTATE_X: AF,
        ROTATE_Y: xF,
        ROTATE_Z: SF,
        SKEW: CF,
        PRESERVE_3D: RF,
        FLEX: LF,
        OPACITY: oi,
        FILTER: Kr,
        FONT_VARIATION_SETTINGS: Yr,
        WIDTH: ut,
        HEIGHT: ct,
        BACKGROUND_COLOR: Jh,
        BORDER_COLOR: NF,
        COLOR: PF,
        CHILDREN: jh,
        IMMEDIATE_CHILDREN: qF,
        SIBLINGS: zh,
        PARENT: MF,
        DISPLAY: ai,
        WILL_CHANGE: ar,
        AUTO: At,
        COMMA_DELIMITER: $r,
        COLON_DELIMITER: FF,
        BAR_DELIMITER: Wa,
        RENDER_TRANSFORM: em,
        RENDER_GENERAL: Ha,
        RENDER_STYLE: Xa,
        RENDER_PLUGIN: tm,
      } = Ce),
        ({
          TRANSFORM_MOVE: sr,
          TRANSFORM_SCALE: ur,
          TRANSFORM_ROTATE: cr,
          TRANSFORM_SKEW: Qr,
          STYLE_OPACITY: rm,
          STYLE_FILTER: Zr,
          STYLE_FONT_VARIATION: Jr,
          STYLE_SIZE: lr,
          STYLE_BACKGROUND_COLOR: fr,
          STYLE_BORDER: dr,
          STYLE_TEXT_COLOR: pr,
          GENERAL_DISPLAY: ci,
          OBJECT_VALUE: DF,
        } = Ge),
        (nm = (e) => e.trim()),
        (ja = Object.freeze({ [fr]: Jh, [dr]: NF, [pr]: PF })),
        (im = Object.freeze({
          [Ot]: IF,
          [Jh]: TF,
          [oi]: oi,
          [Kr]: Kr,
          [ut]: ut,
          [ct]: ct,
          [Yr]: Yr,
        })),
        (ni = new Map());
      GF = 1;
      UF = 1;
      HF = (e, t) => e === t;
      (Yh = /px/),
        (zF = (e, t) =>
          t.reduce(
            (r, n) => (r[n.type] == null && (r[n.type] = r1[n.type]), r),
            e || {}
          )),
        (KF = (e, t) =>
          t.reduce(
            (r, n) => (
              r[n.type] == null &&
                (r[n.type] = n1[n.type] || n.defaultValue || 0),
              r
            ),
            e || {}
          ));
      ($F = (e, t) => (t && (e[t.type] = t.value || 0), e)),
        (QF = (e, t) => (t && (e[t.type] = t.value || 0), e)),
        (ZF = (e, t, r) => {
          if (Ft(e)) return qa(e)(r, t);
          switch (e) {
            case Zr: {
              let n = (0, ii.default)(r.filters, ({ type: i }) => i === t);
              return n ? n.value : 0;
            }
            case Jr: {
              let n = (0, ii.default)(
                r.fontVariations,
                ({ type: i }) => i === t
              );
              return n ? n.value : 0;
            }
            default:
              return r[t];
          }
        });
      (Ka = {
        [sr]: Object.freeze({ xValue: 0, yValue: 0, zValue: 0 }),
        [ur]: Object.freeze({ xValue: 1, yValue: 1, zValue: 1 }),
        [cr]: Object.freeze({ xValue: 0, yValue: 0, zValue: 0 }),
        [Qr]: Object.freeze({ xValue: 0, yValue: 0 }),
      }),
        (r1 = Object.freeze({
          blur: 0,
          "hue-rotate": 0,
          invert: 0,
          grayscale: 0,
          saturate: 100,
          sepia: 0,
          contrast: 100,
          brightness: 100,
        })),
        (n1 = Object.freeze({ wght: 0, opsz: 0, wdth: 0, slnt: 0 })),
        (i1 = (e, t) => {
          let r = (0, ii.default)(t.filters, ({ type: n }) => n === e);
          if (r && r.unit) return r.unit;
          switch (e) {
            case "blur":
              return "px";
            case "hue-rotate":
              return "deg";
            default:
              return "%";
          }
        }),
        (o1 = Object.keys(Ka));
      (l1 = "\\(([^)]+)\\)"), (f1 = /^rgb/), (d1 = RegExp(`rgba?${l1}`));
      sm = ({ effect: e, actionTypeId: t, elementApi: r }) => (n) => {
        switch (t) {
          case sr:
          case ur:
          case cr:
          case Qr:
            e(n, Ot, r);
            break;
          case Zr:
            e(n, Kr, r);
            break;
          case Jr:
            e(n, Yr, r);
            break;
          case rm:
            e(n, oi, r);
            break;
          case lr:
            e(n, ut, r), e(n, ct, r);
            break;
          case fr:
          case dr:
          case pr:
            e(n, ja[t], r);
            break;
          case ci:
            e(n, ai, r);
            break;
        }
      };
    });
  var Gt = c((qe) => {
    "use strict";
    var vr = pn().default;
    Object.defineProperty(qe, "__esModule", { value: !0 });
    qe.IX2VanillaUtils = qe.IX2VanillaPlugins = qe.IX2ElementsReducer = qe.IX2Easings = qe.IX2EasingUtils = qe.IX2BrowserSupport = void 0;
    var x1 = vr((Jn(), rt(oh)));
    qe.IX2BrowserSupport = x1;
    var S1 = vr((Aa(), rt(jr)));
    qe.IX2Easings = S1;
    var C1 = vr((xa(), rt(dh)));
    qe.IX2EasingUtils = C1;
    var R1 = vr((hh(), rt(gh)));
    qe.IX2ElementsReducer = R1;
    var L1 = vr((Ga(), rt(Ih)));
    qe.IX2VanillaPlugins = L1;
    var N1 = vr((lm(), rt(cm)));
    qe.IX2VanillaUtils = N1;
  });
  var fi,
    ht,
    P1,
    q1,
    M1,
    F1,
    D1,
    k1,
    li,
    fm,
    G1,
    V1,
    Ya,
    U1,
    B1,
    W1,
    H1,
    dm,
    pm = he(() => {
      "use strict";
      Ve();
      (fi = le(Gt())),
        (ht = le($t())),
        ({
          IX2_RAW_DATA_IMPORTED: P1,
          IX2_SESSION_STOPPED: q1,
          IX2_INSTANCE_ADDED: M1,
          IX2_INSTANCE_STARTED: F1,
          IX2_INSTANCE_REMOVED: D1,
          IX2_ANIMATION_FRAME_CHANGED: k1,
        } = Ie),
        ({
          optimizeFloat: li,
          applyEasing: fm,
          createBezierEasing: G1,
        } = fi.IX2EasingUtils),
        ({ RENDER_GENERAL: V1 } = Ce),
        ({
          getItemConfigByKey: Ya,
          getRenderType: U1,
          getStyleProp: B1,
        } = fi.IX2VanillaUtils),
        (W1 = (e, t) => {
          let {
              position: r,
              parameterId: n,
              actionGroups: i,
              destinationKeys: o,
              smoothing: a,
              restingValue: s,
              actionTypeId: u,
              customEasingFn: f,
              skipMotion: b,
              skipToValue: v,
            } = e,
            { parameters: p } = t.payload,
            E = Math.max(1 - a, 0.01),
            A = p[n];
          A == null && ((E = 1), (A = s));
          let O = Math.max(A, 0) || 0,
            S = li(O - r),
            _ = b ? v : li(r + S * E),
            y = _ * 100;
          if (_ === r && e.current) return e;
          let R, D, F, q;
          for (let j = 0, { length: Y } = i; j < Y; j++) {
            let { keyframe: Z, actionItems: V } = i[j];
            if ((j === 0 && (R = V[0]), y >= Z)) {
              R = V[0];
              let L = i[j + 1],
                h = L && y !== Z;
              (D = h ? L.actionItems[0] : null),
                h && ((F = Z / 100), (q = (L.keyframe - Z) / 100));
            }
          }
          let W = {};
          if (R && !D)
            for (let j = 0, { length: Y } = o; j < Y; j++) {
              let Z = o[j];
              W[Z] = Ya(u, Z, R.config);
            }
          else if (R && D && F !== void 0 && q !== void 0) {
            let j = (_ - F) / q,
              Y = R.config.easing,
              Z = fm(Y, j, f);
            for (let V = 0, { length: L } = o; V < L; V++) {
              let h = o[V],
                N = Ya(u, h, R.config),
                J = (Ya(u, h, D.config) - N) * Z + N;
              W[h] = J;
            }
          }
          return (0, ht.merge)(e, { position: _, current: W });
        }),
        (H1 = (e, t) => {
          let {
              active: r,
              origin: n,
              start: i,
              immediate: o,
              renderType: a,
              verbose: s,
              actionItem: u,
              destination: f,
              destinationKeys: b,
              pluginDuration: v,
              instanceDelay: p,
              customEasingFn: E,
              skipMotion: A,
            } = e,
            O = u.config.easing,
            { duration: S, delay: _ } = u.config;
          v != null && (S = v),
            (_ = p ?? _),
            a === V1 ? (S = 0) : (o || A) && (S = _ = 0);
          let { now: y } = t.payload;
          if (r && n) {
            let R = y - (i + _);
            if (s) {
              let j = y - i,
                Y = S + _,
                Z = li(Math.min(Math.max(0, j / Y), 1));
              e = (0, ht.set)(e, "verboseTimeElapsed", Y * Z);
            }
            if (R < 0) return e;
            let D = li(Math.min(Math.max(0, R / S), 1)),
              F = fm(O, D, E),
              q = {},
              W = null;
            return (
              b.length &&
                (W = b.reduce((j, Y) => {
                  let Z = f[Y],
                    V = parseFloat(n[Y]) || 0,
                    h = (parseFloat(Z) - V) * F + V;
                  return (j[Y] = h), j;
                }, {})),
              (q.current = W),
              (q.position = D),
              D === 1 && ((q.active = !1), (q.complete = !0)),
              (0, ht.merge)(e, q)
            );
          }
          return e;
        }),
        (dm = (e = Object.freeze({}), t) => {
          switch (t.type) {
            case P1:
              return t.payload.ixInstances || Object.freeze({});
            case q1:
              return Object.freeze({});
            case M1: {
              let {
                  instanceId: r,
                  elementId: n,
                  actionItem: i,
                  eventId: o,
                  eventTarget: a,
                  eventStateKey: s,
                  actionListId: u,
                  groupIndex: f,
                  isCarrier: b,
                  origin: v,
                  destination: p,
                  immediate: E,
                  verbose: A,
                  continuous: O,
                  parameterId: S,
                  actionGroups: _,
                  smoothing: y,
                  restingValue: R,
                  pluginInstance: D,
                  pluginDuration: F,
                  instanceDelay: q,
                  skipMotion: W,
                  skipToValue: j,
                } = t.payload,
                { actionTypeId: Y } = i,
                Z = U1(Y),
                V = B1(Z, Y),
                L = Object.keys(p).filter(
                  (N) => p[N] != null && typeof p[N] != "string"
                ),
                { easing: h } = i.config;
              return (0, ht.set)(e, r, {
                id: r,
                elementId: n,
                active: !1,
                position: 0,
                start: 0,
                origin: v,
                destination: p,
                destinationKeys: L,
                immediate: E,
                verbose: A,
                current: null,
                actionItem: i,
                actionTypeId: Y,
                eventId: o,
                eventTarget: a,
                eventStateKey: s,
                actionListId: u,
                groupIndex: f,
                renderType: Z,
                isCarrier: b,
                styleProp: V,
                continuous: O,
                parameterId: S,
                actionGroups: _,
                smoothing: y,
                restingValue: R,
                pluginInstance: D,
                pluginDuration: F,
                instanceDelay: q,
                skipMotion: W,
                skipToValue: j,
                customEasingFn:
                  Array.isArray(h) && h.length === 4 ? G1(h) : void 0,
              });
            }
            case F1: {
              let { instanceId: r, time: n } = t.payload;
              return (0, ht.mergeIn)(e, [r], {
                active: !0,
                complete: !1,
                start: n,
              });
            }
            case D1: {
              let { instanceId: r } = t.payload;
              if (!e[r]) return e;
              let n = {},
                i = Object.keys(e),
                { length: o } = i;
              for (let a = 0; a < o; a++) {
                let s = i[a];
                s !== r && (n[s] = e[s]);
              }
              return n;
            }
            case k1: {
              let r = e,
                n = Object.keys(e),
                { length: i } = n;
              for (let o = 0; o < i; o++) {
                let a = n[o],
                  s = e[a],
                  u = s.continuous ? W1 : H1;
                r = (0, ht.set)(r, a, u(s, t));
              }
              return r;
            }
            default:
              return e;
          }
        });
    });
  var X1,
    j1,
    z1,
    vm,
    gm = he(() => {
      "use strict";
      Ve();
      ({
        IX2_RAW_DATA_IMPORTED: X1,
        IX2_SESSION_STOPPED: j1,
        IX2_PARAMETER_CHANGED: z1,
      } = Ie),
        (vm = (e = {}, t) => {
          switch (t.type) {
            case X1:
              return t.payload.ixParameters || {};
            case j1:
              return {};
            case z1: {
              let { key: r, value: n } = t.payload;
              return (e[r] = n), e;
            }
            default:
              return e;
          }
        });
    });
  var ym = {};
  ke(ym, { default: () => Y1 });
  var hm,
    mm,
    K1,
    Y1,
    Em = he(() => {
      "use strict";
      hm = le(Xo());
      Rf();
      Qf();
      ed();
      mm = le(Gt());
      pm();
      gm();
      ({ ixElements: K1 } = mm.IX2ElementsReducer),
        (Y1 = (0, hm.combineReducers)({
          ixData: Cf,
          ixRequest: $f,
          ixSession: Jf,
          ixElements: K1,
          ixInstances: dm,
          ixParameters: vm,
        }));
    });
  var bm = c((KX, _m) => {
    var $1 = Tt(),
      Q1 = we(),
      Z1 = pt(),
      J1 = "[object String]";
    function eD(e) {
      return typeof e == "string" || (!Q1(e) && Z1(e) && $1(e) == J1);
    }
    _m.exports = eD;
  });
  var Im = c((YX, Tm) => {
    var tD = Ea(),
      rD = tD("length");
    Tm.exports = rD;
  });
  var Om = c(($X, wm) => {
    var nD = "\\ud800-\\udfff",
      iD = "\\u0300-\\u036f",
      oD = "\\ufe20-\\ufe2f",
      aD = "\\u20d0-\\u20ff",
      sD = iD + oD + aD,
      uD = "\\ufe0e\\ufe0f",
      cD = "\\u200d",
      lD = RegExp("[" + cD + nD + sD + uD + "]");
    function fD(e) {
      return lD.test(e);
    }
    wm.exports = fD;
  });
  var qm = c((QX, Pm) => {
    var xm = "\\ud800-\\udfff",
      dD = "\\u0300-\\u036f",
      pD = "\\ufe20-\\ufe2f",
      vD = "\\u20d0-\\u20ff",
      gD = dD + pD + vD,
      hD = "\\ufe0e\\ufe0f",
      mD = "[" + xm + "]",
      $a = "[" + gD + "]",
      Qa = "\\ud83c[\\udffb-\\udfff]",
      yD = "(?:" + $a + "|" + Qa + ")",
      Sm = "[^" + xm + "]",
      Cm = "(?:\\ud83c[\\udde6-\\uddff]){2}",
      Rm = "[\\ud800-\\udbff][\\udc00-\\udfff]",
      ED = "\\u200d",
      Lm = yD + "?",
      Nm = "[" + hD + "]?",
      _D = "(?:" + ED + "(?:" + [Sm, Cm, Rm].join("|") + ")" + Nm + Lm + ")*",
      bD = Nm + Lm + _D,
      TD = "(?:" + [Sm + $a + "?", $a, Cm, Rm, mD].join("|") + ")",
      Am = RegExp(Qa + "(?=" + Qa + ")|" + TD + bD, "g");
    function ID(e) {
      for (var t = (Am.lastIndex = 0); Am.test(e); ) ++t;
      return t;
    }
    Pm.exports = ID;
  });
  var Fm = c((ZX, Mm) => {
    var wD = Im(),
      OD = Om(),
      AD = qm();
    function xD(e) {
      return OD(e) ? AD(e) : wD(e);
    }
    Mm.exports = xD;
  });
  var km = c((JX, Dm) => {
    var SD = Wn(),
      CD = Hn(),
      RD = qt(),
      LD = bm(),
      ND = Fm(),
      PD = "[object Map]",
      qD = "[object Set]";
    function MD(e) {
      if (e == null) return 0;
      if (RD(e)) return LD(e) ? ND(e) : e.length;
      var t = CD(e);
      return t == PD || t == qD ? e.size : SD(e).length;
    }
    Dm.exports = MD;
  });
  var Vm = c((ej, Gm) => {
    var FD = "Expected a function";
    function DD(e) {
      if (typeof e != "function") throw new TypeError(FD);
      return function () {
        var t = arguments;
        switch (t.length) {
          case 0:
            return !e.call(this);
          case 1:
            return !e.call(this, t[0]);
          case 2:
            return !e.call(this, t[0], t[1]);
          case 3:
            return !e.call(this, t[0], t[1], t[2]);
        }
        return !e.apply(this, t);
      };
    }
    Gm.exports = DD;
  });
  var Za = c((tj, Um) => {
    var kD = It(),
      GD = (function () {
        try {
          var e = kD(Object, "defineProperty");
          return e({}, "", {}), e;
        } catch {}
      })();
    Um.exports = GD;
  });
  var Ja = c((rj, Wm) => {
    var Bm = Za();
    function VD(e, t, r) {
      t == "__proto__" && Bm
        ? Bm(e, t, { configurable: !0, enumerable: !0, value: r, writable: !0 })
        : (e[t] = r);
    }
    Wm.exports = VD;
  });
  var Xm = c((nj, Hm) => {
    var UD = Ja(),
      BD = Pn(),
      WD = Object.prototype,
      HD = WD.hasOwnProperty;
    function XD(e, t, r) {
      var n = e[t];
      (!(HD.call(e, t) && BD(n, r)) || (r === void 0 && !(t in e))) &&
        UD(e, t, r);
    }
    Hm.exports = XD;
  });
  var Km = c((ij, zm) => {
    var jD = Xm(),
      zD = Wr(),
      KD = Gn(),
      jm = st(),
      YD = ir();
    function $D(e, t, r, n) {
      if (!jm(e)) return e;
      t = zD(t, e);
      for (var i = -1, o = t.length, a = o - 1, s = e; s != null && ++i < o; ) {
        var u = YD(t[i]),
          f = r;
        if (u === "__proto__" || u === "constructor" || u === "prototype")
          return e;
        if (i != a) {
          var b = s[u];
          (f = n ? n(b, u, s) : void 0),
            f === void 0 && (f = jm(b) ? b : KD(t[i + 1]) ? [] : {});
        }
        jD(s, u, f), (s = s[u]);
      }
      return e;
    }
    zm.exports = $D;
  });
  var $m = c((oj, Ym) => {
    var QD = zn(),
      ZD = Km(),
      JD = Wr();
    function e2(e, t, r) {
      for (var n = -1, i = t.length, o = {}; ++n < i; ) {
        var a = t[n],
          s = QD(e, a);
        r(s, a) && ZD(o, JD(a, e), s);
      }
      return o;
    }
    Ym.exports = e2;
  });
  var Zm = c((aj, Qm) => {
    var t2 = Dn(),
      r2 = No(),
      n2 = ia(),
      i2 = na(),
      o2 = Object.getOwnPropertySymbols,
      a2 = o2
        ? function (e) {
            for (var t = []; e; ) t2(t, n2(e)), (e = r2(e));
            return t;
          }
        : i2;
    Qm.exports = a2;
  });
  var ey = c((sj, Jm) => {
    function s2(e) {
      var t = [];
      if (e != null) for (var r in Object(e)) t.push(r);
      return t;
    }
    Jm.exports = s2;
  });
  var ry = c((uj, ty) => {
    var u2 = st(),
      c2 = Bn(),
      l2 = ey(),
      f2 = Object.prototype,
      d2 = f2.hasOwnProperty;
    function p2(e) {
      if (!u2(e)) return l2(e);
      var t = c2(e),
        r = [];
      for (var n in e)
        (n == "constructor" && (t || !d2.call(e, n))) || r.push(n);
      return r;
    }
    ty.exports = p2;
  });
  var iy = c((cj, ny) => {
    var v2 = aa(),
      g2 = ry(),
      h2 = qt();
    function m2(e) {
      return h2(e) ? v2(e, !0) : g2(e);
    }
    ny.exports = m2;
  });
  var ay = c((lj, oy) => {
    var y2 = ra(),
      E2 = Zm(),
      _2 = iy();
    function b2(e) {
      return y2(e, _2, E2);
    }
    oy.exports = b2;
  });
  var uy = c((fj, sy) => {
    var T2 = ya(),
      I2 = wt(),
      w2 = $m(),
      O2 = ay();
    function A2(e, t) {
      if (e == null) return {};
      var r = T2(O2(e), function (n) {
        return [n];
      });
      return (
        (t = I2(t)),
        w2(e, r, function (n, i) {
          return t(n, i[0]);
        })
      );
    }
    sy.exports = A2;
  });
  var ly = c((dj, cy) => {
    var x2 = wt(),
      S2 = Vm(),
      C2 = uy();
    function R2(e, t) {
      return C2(e, S2(x2(t)));
    }
    cy.exports = R2;
  });
  var dy = c((pj, fy) => {
    var L2 = Wn(),
      N2 = Hn(),
      P2 = Dr(),
      q2 = we(),
      M2 = qt(),
      F2 = kn(),
      D2 = Bn(),
      k2 = Un(),
      G2 = "[object Map]",
      V2 = "[object Set]",
      U2 = Object.prototype,
      B2 = U2.hasOwnProperty;
    function W2(e) {
      if (e == null) return !0;
      if (
        M2(e) &&
        (q2(e) ||
          typeof e == "string" ||
          typeof e.splice == "function" ||
          F2(e) ||
          k2(e) ||
          P2(e))
      )
        return !e.length;
      var t = N2(e);
      if (t == G2 || t == V2) return !e.size;
      if (D2(e)) return !L2(e).length;
      for (var r in e) if (B2.call(e, r)) return !1;
      return !0;
    }
    fy.exports = W2;
  });
  var vy = c((vj, py) => {
    var H2 = Ja(),
      X2 = Va(),
      j2 = wt();
    function z2(e, t) {
      var r = {};
      return (
        (t = j2(t, 3)),
        X2(e, function (n, i, o) {
          H2(r, i, t(n, i, o));
        }),
        r
      );
    }
    py.exports = z2;
  });
  var hy = c((gj, gy) => {
    function K2(e, t) {
      for (
        var r = -1, n = e == null ? 0 : e.length;
        ++r < n && t(e[r], r, e) !== !1;

      );
      return e;
    }
    gy.exports = K2;
  });
  var yy = c((hj, my) => {
    var Y2 = Yn();
    function $2(e) {
      return typeof e == "function" ? e : Y2;
    }
    my.exports = $2;
  });
  var _y = c((mj, Ey) => {
    var Q2 = hy(),
      Z2 = Ua(),
      J2 = yy(),
      ek = we();
    function tk(e, t) {
      var r = ek(e) ? Q2 : Z2;
      return r(e, J2(t));
    }
    Ey.exports = tk;
  });
  var Ty = c((yj, by) => {
    var rk = Qe(),
      nk = function () {
        return rk.Date.now();
      };
    by.exports = nk;
  });
  var Oy = c((Ej, wy) => {
    var ik = st(),
      es = Ty(),
      Iy = $n(),
      ok = "Expected a function",
      ak = Math.max,
      sk = Math.min;
    function uk(e, t, r) {
      var n,
        i,
        o,
        a,
        s,
        u,
        f = 0,
        b = !1,
        v = !1,
        p = !0;
      if (typeof e != "function") throw new TypeError(ok);
      (t = Iy(t) || 0),
        ik(r) &&
          ((b = !!r.leading),
          (v = "maxWait" in r),
          (o = v ? ak(Iy(r.maxWait) || 0, t) : o),
          (p = "trailing" in r ? !!r.trailing : p));
      function E(q) {
        var W = n,
          j = i;
        return (n = i = void 0), (f = q), (a = e.apply(j, W)), a;
      }
      function A(q) {
        return (f = q), (s = setTimeout(_, t)), b ? E(q) : a;
      }
      function O(q) {
        var W = q - u,
          j = q - f,
          Y = t - W;
        return v ? sk(Y, o - j) : Y;
      }
      function S(q) {
        var W = q - u,
          j = q - f;
        return u === void 0 || W >= t || W < 0 || (v && j >= o);
      }
      function _() {
        var q = es();
        if (S(q)) return y(q);
        s = setTimeout(_, O(q));
      }
      function y(q) {
        return (s = void 0), p && n ? E(q) : ((n = i = void 0), a);
      }
      function R() {
        s !== void 0 && clearTimeout(s), (f = 0), (n = u = i = s = void 0);
      }
      function D() {
        return s === void 0 ? a : y(es());
      }
      function F() {
        var q = es(),
          W = S(q);
        if (((n = arguments), (i = this), (u = q), W)) {
          if (s === void 0) return A(u);
          if (v) return clearTimeout(s), (s = setTimeout(_, t)), E(u);
        }
        return s === void 0 && (s = setTimeout(_, t)), a;
      }
      return (F.cancel = R), (F.flush = D), F;
    }
    wy.exports = uk;
  });
  var xy = c((_j, Ay) => {
    var ck = Oy(),
      lk = st(),
      fk = "Expected a function";
    function dk(e, t, r) {
      var n = !0,
        i = !0;
      if (typeof e != "function") throw new TypeError(fk);
      return (
        lk(r) &&
          ((n = "leading" in r ? !!r.leading : n),
          (i = "trailing" in r ? !!r.trailing : i)),
        ck(e, t, { leading: n, maxWait: t, trailing: i })
      );
    }
    Ay.exports = dk;
  });
  var Cy = {};
  ke(Cy, {
    actionListPlaybackChanged: () => hr,
    animationFrameChanged: () => pi,
    clearRequested: () => Dk,
    elementStateChanged: () => us,
    eventListenerAdded: () => di,
    eventStateChanged: () => os,
    instanceAdded: () => as,
    instanceRemoved: () => ss,
    instanceStarted: () => vi,
    mediaQueriesDefined: () => ls,
    parameterChanged: () => gr,
    playbackRequested: () => Mk,
    previewRequested: () => qk,
    rawDataImported: () => ts,
    sessionInitialized: () => rs,
    sessionStarted: () => ns,
    sessionStopped: () => is,
    stopRequested: () => Fk,
    testFrameRendered: () => kk,
    viewportWidthChanged: () => cs,
  });
  var Sy,
    pk,
    vk,
    gk,
    hk,
    mk,
    yk,
    Ek,
    _k,
    bk,
    Tk,
    Ik,
    wk,
    Ok,
    Ak,
    xk,
    Sk,
    Ck,
    Rk,
    Lk,
    Nk,
    Pk,
    ts,
    rs,
    ns,
    is,
    qk,
    Mk,
    Fk,
    Dk,
    di,
    kk,
    os,
    pi,
    gr,
    as,
    vi,
    ss,
    us,
    hr,
    cs,
    ls,
    gi = he(() => {
      "use strict";
      Ve();
      (Sy = le(Gt())),
        ({
          IX2_RAW_DATA_IMPORTED: pk,
          IX2_SESSION_INITIALIZED: vk,
          IX2_SESSION_STARTED: gk,
          IX2_SESSION_STOPPED: hk,
          IX2_PREVIEW_REQUESTED: mk,
          IX2_PLAYBACK_REQUESTED: yk,
          IX2_STOP_REQUESTED: Ek,
          IX2_CLEAR_REQUESTED: _k,
          IX2_EVENT_LISTENER_ADDED: bk,
          IX2_TEST_FRAME_RENDERED: Tk,
          IX2_EVENT_STATE_CHANGED: Ik,
          IX2_ANIMATION_FRAME_CHANGED: wk,
          IX2_PARAMETER_CHANGED: Ok,
          IX2_INSTANCE_ADDED: Ak,
          IX2_INSTANCE_STARTED: xk,
          IX2_INSTANCE_REMOVED: Sk,
          IX2_ELEMENT_STATE_CHANGED: Ck,
          IX2_ACTION_LIST_PLAYBACK_CHANGED: Rk,
          IX2_VIEWPORT_WIDTH_CHANGED: Lk,
          IX2_MEDIA_QUERIES_DEFINED: Nk,
        } = Ie),
        ({ reifyState: Pk } = Sy.IX2VanillaUtils),
        (ts = (e) => ({ type: pk, payload: { ...Pk(e) } })),
        (rs = ({ hasBoundaryNodes: e, reducedMotion: t }) => ({
          type: vk,
          payload: { hasBoundaryNodes: e, reducedMotion: t },
        })),
        (ns = () => ({ type: gk })),
        (is = () => ({ type: hk })),
        (qk = ({ rawData: e, defer: t }) => ({
          type: mk,
          payload: { defer: t, rawData: e },
        })),
        (Mk = ({
          actionTypeId: e = Ge.GENERAL_START_ACTION,
          actionListId: t,
          actionItemId: r,
          eventId: n,
          allowEvents: i,
          immediate: o,
          testManual: a,
          verbose: s,
          rawData: u,
        }) => ({
          type: yk,
          payload: {
            actionTypeId: e,
            actionListId: t,
            actionItemId: r,
            testManual: a,
            eventId: n,
            allowEvents: i,
            immediate: o,
            verbose: s,
            rawData: u,
          },
        })),
        (Fk = (e) => ({ type: Ek, payload: { actionListId: e } })),
        (Dk = () => ({ type: _k })),
        (di = (e, t) => ({
          type: bk,
          payload: { target: e, listenerParams: t },
        })),
        (kk = (e = 1) => ({ type: Tk, payload: { step: e } })),
        (os = (e, t) => ({ type: Ik, payload: { stateKey: e, newState: t } })),
        (pi = (e, t) => ({ type: wk, payload: { now: e, parameters: t } })),
        (gr = (e, t) => ({ type: Ok, payload: { key: e, value: t } })),
        (as = (e) => ({ type: Ak, payload: { ...e } })),
        (vi = (e, t) => ({ type: xk, payload: { instanceId: e, time: t } })),
        (ss = (e) => ({ type: Sk, payload: { instanceId: e } })),
        (us = (e, t, r, n) => ({
          type: Ck,
          payload: { elementId: e, actionTypeId: t, current: r, actionItem: n },
        })),
        (hr = ({ actionListId: e, isPlaying: t }) => ({
          type: Rk,
          payload: { actionListId: e, isPlaying: t },
        })),
        (cs = ({ width: e, mediaQueries: t }) => ({
          type: Lk,
          payload: { width: e, mediaQueries: t },
        })),
        (ls = () => ({ type: Nk }));
    });
  var Me = {};
  ke(Me, {
    elementContains: () => ps,
    getChildElements: () => Kk,
    getClosestElement: () => en,
    getProperty: () => Wk,
    getQuerySelector: () => ds,
    getRefType: () => vs,
    getSiblingElements: () => Yk,
    getStyle: () => Bk,
    getValidDocument: () => Xk,
    isSiblingNode: () => zk,
    matchSelector: () => Hk,
    queryDocument: () => jk,
    setStyle: () => Uk,
  });
  function Uk(e, t, r) {
    e.style[t] = r;
  }
  function Bk(e, t) {
    return t.startsWith("--")
      ? window.getComputedStyle(document.documentElement).getPropertyValue(t)
      : e.style[t];
  }
  function Wk(e, t) {
    return e[t];
  }
  function Hk(e) {
    return (t) => t[fs](e);
  }
  function ds({ id: e, selector: t }) {
    if (e) {
      let r = e;
      if (e.indexOf(Ry) !== -1) {
        let n = e.split(Ry),
          i = n[0];
        if (((r = n[1]), i !== document.documentElement.getAttribute(Ny)))
          return null;
      }
      return `[data-w-id="${r}"], [data-w-id^="${r}_instance"]`;
    }
    return t;
  }
  function Xk(e) {
    return e == null || e === document.documentElement.getAttribute(Ny)
      ? document
      : null;
  }
  function jk(e, t) {
    return Array.prototype.slice.call(
      document.querySelectorAll(t ? e + " " + t : e)
    );
  }
  function ps(e, t) {
    return e.contains(t);
  }
  function zk(e, t) {
    return e !== t && e.parentNode === t.parentNode;
  }
  function Kk(e) {
    let t = [];
    for (let r = 0, { length: n } = e || []; r < n; r++) {
      let { children: i } = e[r],
        { length: o } = i;
      if (o) for (let a = 0; a < o; a++) t.push(i[a]);
    }
    return t;
  }
  function Yk(e = []) {
    let t = [],
      r = [];
    for (let n = 0, { length: i } = e; n < i; n++) {
      let { parentNode: o } = e[n];
      if (!o || !o.children || !o.children.length || r.indexOf(o) !== -1)
        continue;
      r.push(o);
      let a = o.firstElementChild;
      for (; a != null; )
        e.indexOf(a) === -1 && t.push(a), (a = a.nextElementSibling);
    }
    return t;
  }
  function vs(e) {
    return e != null && typeof e == "object"
      ? e instanceof Element
        ? Gk
        : Vk
      : null;
  }
  var Ly,
    fs,
    Ry,
    Gk,
    Vk,
    Ny,
    en,
    Py = he(() => {
      "use strict";
      Ly = le(Gt());
      Ve();
      ({ ELEMENT_MATCHES: fs } = Ly.IX2BrowserSupport),
        ({
          IX2_ID_DELIMITER: Ry,
          HTML_ELEMENT: Gk,
          PLAIN_OBJECT: Vk,
          WF_PAGE: Ny,
        } = Ce);
      en = Element.prototype.closest
        ? (e, t) => (document.documentElement.contains(e) ? e.closest(t) : null)
        : (e, t) => {
            if (!document.documentElement.contains(e)) return null;
            let r = e;
            do {
              if (r[fs] && r[fs](t)) return r;
              r = r.parentNode;
            } while (r != null);
            return null;
          };
    });
  var gs = c((Ij, My) => {
    var $k = st(),
      qy = Object.create,
      Qk = (function () {
        function e() {}
        return function (t) {
          if (!$k(t)) return {};
          if (qy) return qy(t);
          e.prototype = t;
          var r = new e();
          return (e.prototype = void 0), r;
        };
      })();
    My.exports = Qk;
  });
  var hi = c((wj, Fy) => {
    function Zk() {}
    Fy.exports = Zk;
  });
  var yi = c((Oj, Dy) => {
    var Jk = gs(),
      eG = hi();
    function mi(e, t) {
      (this.__wrapped__ = e),
        (this.__actions__ = []),
        (this.__chain__ = !!t),
        (this.__index__ = 0),
        (this.__values__ = void 0);
    }
    mi.prototype = Jk(eG.prototype);
    mi.prototype.constructor = mi;
    Dy.exports = mi;
  });
  var Uy = c((Aj, Vy) => {
    var ky = zt(),
      tG = Dr(),
      rG = we(),
      Gy = ky ? ky.isConcatSpreadable : void 0;
    function nG(e) {
      return rG(e) || tG(e) || !!(Gy && e && e[Gy]);
    }
    Vy.exports = nG;
  });
  var Hy = c((xj, Wy) => {
    var iG = Dn(),
      oG = Uy();
    function By(e, t, r, n, i) {
      var o = -1,
        a = e.length;
      for (r || (r = oG), i || (i = []); ++o < a; ) {
        var s = e[o];
        t > 0 && r(s)
          ? t > 1
            ? By(s, t - 1, r, n, i)
            : iG(i, s)
          : n || (i[i.length] = s);
      }
      return i;
    }
    Wy.exports = By;
  });
  var jy = c((Sj, Xy) => {
    var aG = Hy();
    function sG(e) {
      var t = e == null ? 0 : e.length;
      return t ? aG(e, 1) : [];
    }
    Xy.exports = sG;
  });
  var Ky = c((Cj, zy) => {
    function uG(e, t, r) {
      switch (r.length) {
        case 0:
          return e.call(t);
        case 1:
          return e.call(t, r[0]);
        case 2:
          return e.call(t, r[0], r[1]);
        case 3:
          return e.call(t, r[0], r[1], r[2]);
      }
      return e.apply(t, r);
    }
    zy.exports = uG;
  });
  var Qy = c((Rj, $y) => {
    var cG = Ky(),
      Yy = Math.max;
    function lG(e, t, r) {
      return (
        (t = Yy(t === void 0 ? e.length - 1 : t, 0)),
        function () {
          for (
            var n = arguments, i = -1, o = Yy(n.length - t, 0), a = Array(o);
            ++i < o;

          )
            a[i] = n[t + i];
          i = -1;
          for (var s = Array(t + 1); ++i < t; ) s[i] = n[i];
          return (s[t] = r(a)), cG(e, this, s);
        }
      );
    }
    $y.exports = lG;
  });
  var Jy = c((Lj, Zy) => {
    function fG(e) {
      return function () {
        return e;
      };
    }
    Zy.exports = fG;
  });
  var rE = c((Nj, tE) => {
    var dG = Jy(),
      eE = Za(),
      pG = Yn(),
      vG = eE
        ? function (e, t) {
            return eE(e, "toString", {
              configurable: !0,
              enumerable: !1,
              value: dG(t),
              writable: !0,
            });
          }
        : pG;
    tE.exports = vG;
  });
  var iE = c((Pj, nE) => {
    var gG = 800,
      hG = 16,
      mG = Date.now;
    function yG(e) {
      var t = 0,
        r = 0;
      return function () {
        var n = mG(),
          i = hG - (n - r);
        if (((r = n), i > 0)) {
          if (++t >= gG) return arguments[0];
        } else t = 0;
        return e.apply(void 0, arguments);
      };
    }
    nE.exports = yG;
  });
  var aE = c((qj, oE) => {
    var EG = rE(),
      _G = iE(),
      bG = _G(EG);
    oE.exports = bG;
  });
  var uE = c((Mj, sE) => {
    var TG = jy(),
      IG = Qy(),
      wG = aE();
    function OG(e) {
      return wG(IG(e, void 0, TG), e + "");
    }
    sE.exports = OG;
  });
  var fE = c((Fj, lE) => {
    var cE = sa(),
      AG = cE && new cE();
    lE.exports = AG;
  });
  var pE = c((Dj, dE) => {
    function xG() {}
    dE.exports = xG;
  });
  var hs = c((kj, gE) => {
    var vE = fE(),
      SG = pE(),
      CG = vE
        ? function (e) {
            return vE.get(e);
          }
        : SG;
    gE.exports = CG;
  });
  var mE = c((Gj, hE) => {
    var RG = {};
    hE.exports = RG;
  });
  var ms = c((Vj, EE) => {
    var yE = mE(),
      LG = Object.prototype,
      NG = LG.hasOwnProperty;
    function PG(e) {
      for (
        var t = e.name + "", r = yE[t], n = NG.call(yE, t) ? r.length : 0;
        n--;

      ) {
        var i = r[n],
          o = i.func;
        if (o == null || o == e) return i.name;
      }
      return t;
    }
    EE.exports = PG;
  });
  var _i = c((Uj, _E) => {
    var qG = gs(),
      MG = hi(),
      FG = 4294967295;
    function Ei(e) {
      (this.__wrapped__ = e),
        (this.__actions__ = []),
        (this.__dir__ = 1),
        (this.__filtered__ = !1),
        (this.__iteratees__ = []),
        (this.__takeCount__ = FG),
        (this.__views__ = []);
    }
    Ei.prototype = qG(MG.prototype);
    Ei.prototype.constructor = Ei;
    _E.exports = Ei;
  });
  var TE = c((Bj, bE) => {
    function DG(e, t) {
      var r = -1,
        n = e.length;
      for (t || (t = Array(n)); ++r < n; ) t[r] = e[r];
      return t;
    }
    bE.exports = DG;
  });
  var wE = c((Wj, IE) => {
    var kG = _i(),
      GG = yi(),
      VG = TE();
    function UG(e) {
      if (e instanceof kG) return e.clone();
      var t = new GG(e.__wrapped__, e.__chain__);
      return (
        (t.__actions__ = VG(e.__actions__)),
        (t.__index__ = e.__index__),
        (t.__values__ = e.__values__),
        t
      );
    }
    IE.exports = UG;
  });
  var xE = c((Hj, AE) => {
    var BG = _i(),
      OE = yi(),
      WG = hi(),
      HG = we(),
      XG = pt(),
      jG = wE(),
      zG = Object.prototype,
      KG = zG.hasOwnProperty;
    function bi(e) {
      if (XG(e) && !HG(e) && !(e instanceof BG)) {
        if (e instanceof OE) return e;
        if (KG.call(e, "__wrapped__")) return jG(e);
      }
      return new OE(e);
    }
    bi.prototype = WG.prototype;
    bi.prototype.constructor = bi;
    AE.exports = bi;
  });
  var CE = c((Xj, SE) => {
    var YG = _i(),
      $G = hs(),
      QG = ms(),
      ZG = xE();
    function JG(e) {
      var t = QG(e),
        r = ZG[t];
      if (typeof r != "function" || !(t in YG.prototype)) return !1;
      if (e === r) return !0;
      var n = $G(r);
      return !!n && e === n[0];
    }
    SE.exports = JG;
  });
  var PE = c((jj, NE) => {
    var RE = yi(),
      eV = uE(),
      tV = hs(),
      ys = ms(),
      rV = we(),
      LE = CE(),
      nV = "Expected a function",
      iV = 8,
      oV = 32,
      aV = 128,
      sV = 256;
    function uV(e) {
      return eV(function (t) {
        var r = t.length,
          n = r,
          i = RE.prototype.thru;
        for (e && t.reverse(); n--; ) {
          var o = t[n];
          if (typeof o != "function") throw new TypeError(nV);
          if (i && !a && ys(o) == "wrapper") var a = new RE([], !0);
        }
        for (n = a ? n : r; ++n < r; ) {
          o = t[n];
          var s = ys(o),
            u = s == "wrapper" ? tV(o) : void 0;
          u &&
          LE(u[0]) &&
          u[1] == (aV | iV | oV | sV) &&
          !u[4].length &&
          u[9] == 1
            ? (a = a[ys(u[0])].apply(a, u[3]))
            : (a = o.length == 1 && LE(o) ? a[s]() : a.thru(o));
        }
        return function () {
          var f = arguments,
            b = f[0];
          if (a && f.length == 1 && rV(b)) return a.plant(b).value();
          for (var v = 0, p = r ? t[v].apply(this, f) : b; ++v < r; )
            p = t[v].call(this, p);
          return p;
        };
      });
    }
    NE.exports = uV;
  });
  var ME = c((zj, qE) => {
    var cV = PE(),
      lV = cV();
    qE.exports = lV;
  });
  var DE = c((Kj, FE) => {
    function fV(e, t, r) {
      return (
        e === e &&
          (r !== void 0 && (e = e <= r ? e : r),
          t !== void 0 && (e = e >= t ? e : t)),
        e
      );
    }
    FE.exports = fV;
  });
  var GE = c((Yj, kE) => {
    var dV = DE(),
      Es = $n();
    function pV(e, t, r) {
      return (
        r === void 0 && ((r = t), (t = void 0)),
        r !== void 0 && ((r = Es(r)), (r = r === r ? r : 0)),
        t !== void 0 && ((t = Es(t)), (t = t === t ? t : 0)),
        dV(Es(e), t, r)
      );
    }
    kE.exports = pV;
  });
  var KE,
    YE,
    $E,
    QE,
    vV,
    gV,
    hV,
    mV,
    yV,
    EV,
    _V,
    bV,
    TV,
    IV,
    wV,
    OV,
    AV,
    xV,
    SV,
    ZE,
    JE,
    CV,
    RV,
    LV,
    e_,
    NV,
    PV,
    t_,
    qV,
    _s,
    r_,
    VE,
    UE,
    n_,
    rn,
    MV,
    lt,
    i_,
    FV,
    Be,
    et,
    nn,
    o_,
    bs,
    BE,
    Ts,
    DV,
    tn,
    kV,
    GV,
    VV,
    a_,
    WE,
    UV,
    HE,
    BV,
    WV,
    HV,
    XE,
    Ti,
    Ii,
    jE,
    zE,
    s_,
    u_ = he(() => {
      "use strict";
      (KE = le(ME())), (YE = le(Kn())), ($E = le(GE()));
      Ve();
      Is();
      gi();
      (QE = le(Gt())),
        ({
          MOUSE_CLICK: vV,
          MOUSE_SECOND_CLICK: gV,
          MOUSE_DOWN: hV,
          MOUSE_UP: mV,
          MOUSE_OVER: yV,
          MOUSE_OUT: EV,
          DROPDOWN_CLOSE: _V,
          DROPDOWN_OPEN: bV,
          SLIDER_ACTIVE: TV,
          SLIDER_INACTIVE: IV,
          TAB_ACTIVE: wV,
          TAB_INACTIVE: OV,
          NAVBAR_CLOSE: AV,
          NAVBAR_OPEN: xV,
          MOUSE_MOVE: SV,
          PAGE_SCROLL_DOWN: ZE,
          SCROLL_INTO_VIEW: JE,
          SCROLL_OUT_OF_VIEW: CV,
          PAGE_SCROLL_UP: RV,
          SCROLLING_IN_VIEW: LV,
          PAGE_FINISH: e_,
          ECOMMERCE_CART_CLOSE: NV,
          ECOMMERCE_CART_OPEN: PV,
          PAGE_START: t_,
          PAGE_SCROLL: qV,
        } = Ze),
        (_s = "COMPONENT_ACTIVE"),
        (r_ = "COMPONENT_INACTIVE"),
        ({ COLON_DELIMITER: VE } = Ce),
        ({ getNamespacedParameterId: UE } = QE.IX2VanillaUtils),
        (n_ = (e) => (t) => (typeof t == "object" && e(t) ? !0 : t)),
        (rn = n_(({ element: e, nativeEvent: t }) => e === t.target)),
        (MV = n_(({ element: e, nativeEvent: t }) => e.contains(t.target))),
        (lt = (0, KE.default)([rn, MV])),
        (i_ = (e, t) => {
          if (t) {
            let { ixData: r } = e.getState(),
              { events: n } = r,
              i = n[t];
            if (i && !DV[i.eventTypeId]) return i;
          }
          return null;
        }),
        (FV = ({ store: e, event: t }) => {
          let { action: r } = t,
            { autoStopEventId: n } = r.config;
          return !!i_(e, n);
        }),
        (Be = ({ store: e, event: t, element: r, eventStateKey: n }, i) => {
          let { action: o, id: a } = t,
            { actionListId: s, autoStopEventId: u } = o.config,
            f = i_(e, u);
          return (
            f &&
              mr({
                store: e,
                eventId: u,
                eventTarget: r,
                eventStateKey: u + VE + n.split(VE)[1],
                actionListId: (0, YE.default)(f, "action.config.actionListId"),
              }),
            mr({
              store: e,
              eventId: a,
              eventTarget: r,
              eventStateKey: n,
              actionListId: s,
            }),
            on({
              store: e,
              eventId: a,
              eventTarget: r,
              eventStateKey: n,
              actionListId: s,
            }),
            i
          );
        }),
        (et = (e, t) => (r, n) => (e(r, n) === !0 ? t(r, n) : n)),
        (nn = { handler: et(lt, Be) }),
        (o_ = { ...nn, types: [_s, r_].join(" ") }),
        (bs = [
          { target: window, types: "resize orientationchange", throttle: !0 },
          {
            target: document,
            types: "scroll wheel readystatechange IX2_PAGE_UPDATE",
            throttle: !0,
          },
        ]),
        (BE = "mouseover mouseout"),
        (Ts = { types: bs }),
        (DV = { PAGE_START: t_, PAGE_FINISH: e_ }),
        (tn = (() => {
          let e = window.pageXOffset !== void 0,
            r =
              document.compatMode === "CSS1Compat"
                ? document.documentElement
                : document.body;
          return () => ({
            scrollLeft: e ? window.pageXOffset : r.scrollLeft,
            scrollTop: e ? window.pageYOffset : r.scrollTop,
            stiffScrollTop: (0, $E.default)(
              e ? window.pageYOffset : r.scrollTop,
              0,
              r.scrollHeight - window.innerHeight
            ),
            scrollWidth: r.scrollWidth,
            scrollHeight: r.scrollHeight,
            clientWidth: r.clientWidth,
            clientHeight: r.clientHeight,
            innerWidth: window.innerWidth,
            innerHeight: window.innerHeight,
          });
        })()),
        (kV = (e, t) =>
          !(
            e.left > t.right ||
            e.right < t.left ||
            e.top > t.bottom ||
            e.bottom < t.top
          )),
        (GV = ({ element: e, nativeEvent: t }) => {
          let { type: r, target: n, relatedTarget: i } = t,
            o = e.contains(n);
          if (r === "mouseover" && o) return !0;
          let a = e.contains(i);
          return !!(r === "mouseout" && o && a);
        }),
        (VV = (e) => {
          let {
              element: t,
              event: { config: r },
            } = e,
            { clientWidth: n, clientHeight: i } = tn(),
            o = r.scrollOffsetValue,
            u = r.scrollOffsetUnit === "PX" ? o : (i * (o || 0)) / 100;
          return kV(t.getBoundingClientRect(), {
            left: 0,
            top: u,
            right: n,
            bottom: i - u,
          });
        }),
        (a_ = (e) => (t, r) => {
          let { type: n } = t.nativeEvent,
            i = [_s, r_].indexOf(n) !== -1 ? n === _s : r.isActive,
            o = { ...r, isActive: i };
          return ((!r || o.isActive !== r.isActive) && e(t, o)) || o;
        }),
        (WE = (e) => (t, r) => {
          let n = { elementHovered: GV(t) };
          return (
            ((r ? n.elementHovered !== r.elementHovered : n.elementHovered) &&
              e(t, n)) ||
            n
          );
        }),
        (UV = (e) => (t, r) => {
          let n = { ...r, elementVisible: VV(t) };
          return (
            ((r ? n.elementVisible !== r.elementVisible : n.elementVisible) &&
              e(t, n)) ||
            n
          );
        }),
        (HE = (e) => (t, r = {}) => {
          let { stiffScrollTop: n, scrollHeight: i, innerHeight: o } = tn(),
            {
              event: { config: a, eventTypeId: s },
            } = t,
            { scrollOffsetValue: u, scrollOffsetUnit: f } = a,
            b = f === "PX",
            v = i - o,
            p = Number((n / v).toFixed(2));
          if (r && r.percentTop === p) return r;
          let E = (b ? u : (o * (u || 0)) / 100) / v,
            A,
            O,
            S = 0;
          r &&
            ((A = p > r.percentTop),
            (O = r.scrollingDown !== A),
            (S = O ? p : r.anchorTop));
          let _ = s === ZE ? p >= S + E : p <= S - E,
            y = {
              ...r,
              percentTop: p,
              inBounds: _,
              anchorTop: S,
              scrollingDown: A,
            };
          return (r && _ && (O || y.inBounds !== r.inBounds) && e(t, y)) || y;
        }),
        (BV = (e, t) =>
          e.left > t.left &&
          e.left < t.right &&
          e.top > t.top &&
          e.top < t.bottom),
        (WV = (e) => (t, r) => {
          let n = { finished: document.readyState === "complete" };
          return n.finished && !(r && r.finshed) && e(t), n;
        }),
        (HV = (e) => (t, r) => {
          let n = { started: !0 };
          return r || e(t), n;
        }),
        (XE = (e) => (t, r = { clickCount: 0 }) => {
          let n = { clickCount: (r.clickCount % 2) + 1 };
          return (n.clickCount !== r.clickCount && e(t, n)) || n;
        }),
        (Ti = (e = !0) => ({
          ...o_,
          handler: et(
            e ? lt : rn,
            a_((t, r) => (r.isActive ? nn.handler(t, r) : r))
          ),
        })),
        (Ii = (e = !0) => ({
          ...o_,
          handler: et(
            e ? lt : rn,
            a_((t, r) => (r.isActive ? r : nn.handler(t, r)))
          ),
        })),
        (jE = {
          ...Ts,
          handler: UV((e, t) => {
            let { elementVisible: r } = t,
              { event: n, store: i } = e,
              { ixData: o } = i.getState(),
              { events: a } = o;
            return !a[n.action.config.autoStopEventId] && t.triggered
              ? t
              : (n.eventTypeId === JE) === r
              ? (Be(e), { ...t, triggered: !0 })
              : t;
          }),
        }),
        (zE = 0.05),
        (s_ = {
          [TV]: Ti(),
          [IV]: Ii(),
          [bV]: Ti(),
          [_V]: Ii(),
          [xV]: Ti(!1),
          [AV]: Ii(!1),
          [wV]: Ti(),
          [OV]: Ii(),
          [PV]: { types: "ecommerce-cart-open", handler: et(lt, Be) },
          [NV]: { types: "ecommerce-cart-close", handler: et(lt, Be) },
          [vV]: {
            types: "click",
            handler: et(
              lt,
              XE((e, { clickCount: t }) => {
                FV(e) ? t === 1 && Be(e) : Be(e);
              })
            ),
          },
          [gV]: {
            types: "click",
            handler: et(
              lt,
              XE((e, { clickCount: t }) => {
                t === 2 && Be(e);
              })
            ),
          },
          [hV]: { ...nn, types: "mousedown" },
          [mV]: { ...nn, types: "mouseup" },
          [yV]: {
            types: BE,
            handler: et(
              lt,
              WE((e, t) => {
                t.elementHovered && Be(e);
              })
            ),
          },
          [EV]: {
            types: BE,
            handler: et(
              lt,
              WE((e, t) => {
                t.elementHovered || Be(e);
              })
            ),
          },
          [SV]: {
            types: "mousemove mouseout scroll",
            handler: (
              {
                store: e,
                element: t,
                eventConfig: r,
                nativeEvent: n,
                eventStateKey: i,
              },
              o = { clientX: 0, clientY: 0, pageX: 0, pageY: 0 }
            ) => {
              let {
                  basedOn: a,
                  selectedAxis: s,
                  continuousParameterGroupId: u,
                  reverse: f,
                  restingState: b = 0,
                } = r,
                {
                  clientX: v = o.clientX,
                  clientY: p = o.clientY,
                  pageX: E = o.pageX,
                  pageY: A = o.pageY,
                } = n,
                O = s === "X_AXIS",
                S = n.type === "mouseout",
                _ = b / 100,
                y = u,
                R = !1;
              switch (a) {
                case at.VIEWPORT: {
                  _ = O
                    ? Math.min(v, window.innerWidth) / window.innerWidth
                    : Math.min(p, window.innerHeight) / window.innerHeight;
                  break;
                }
                case at.PAGE: {
                  let {
                    scrollLeft: D,
                    scrollTop: F,
                    scrollWidth: q,
                    scrollHeight: W,
                  } = tn();
                  _ = O ? Math.min(D + E, q) / q : Math.min(F + A, W) / W;
                  break;
                }
                case at.ELEMENT:
                default: {
                  y = UE(i, u);
                  let D = n.type.indexOf("mouse") === 0;
                  if (D && lt({ element: t, nativeEvent: n }) !== !0) break;
                  let F = t.getBoundingClientRect(),
                    { left: q, top: W, width: j, height: Y } = F;
                  if (!D && !BV({ left: v, top: p }, F)) break;
                  (R = !0), (_ = O ? (v - q) / j : (p - W) / Y);
                  break;
                }
              }
              return (
                S && (_ > 1 - zE || _ < zE) && (_ = Math.round(_)),
                (a !== at.ELEMENT || R || R !== o.elementHovered) &&
                  ((_ = f ? 1 - _ : _), e.dispatch(gr(y, _))),
                {
                  elementHovered: R,
                  clientX: v,
                  clientY: p,
                  pageX: E,
                  pageY: A,
                }
              );
            },
          },
          [qV]: {
            types: bs,
            handler: ({ store: e, eventConfig: t }) => {
              let { continuousParameterGroupId: r, reverse: n } = t,
                { scrollTop: i, scrollHeight: o, clientHeight: a } = tn(),
                s = i / (o - a);
              (s = n ? 1 - s : s), e.dispatch(gr(r, s));
            },
          },
          [LV]: {
            types: bs,
            handler: (
              { element: e, store: t, eventConfig: r, eventStateKey: n },
              i = { scrollPercent: 0 }
            ) => {
              let {
                  scrollLeft: o,
                  scrollTop: a,
                  scrollWidth: s,
                  scrollHeight: u,
                  clientHeight: f,
                } = tn(),
                {
                  basedOn: b,
                  selectedAxis: v,
                  continuousParameterGroupId: p,
                  startsEntering: E,
                  startsExiting: A,
                  addEndOffset: O,
                  addStartOffset: S,
                  addOffsetValue: _ = 0,
                  endOffsetValue: y = 0,
                } = r,
                R = v === "X_AXIS";
              if (b === at.VIEWPORT) {
                let D = R ? o / s : a / u;
                return (
                  D !== i.scrollPercent && t.dispatch(gr(p, D)),
                  { scrollPercent: D }
                );
              } else {
                let D = UE(n, p),
                  F = e.getBoundingClientRect(),
                  q = (S ? _ : 0) / 100,
                  W = (O ? y : 0) / 100;
                (q = E ? q : 1 - q), (W = A ? W : 1 - W);
                let j = F.top + Math.min(F.height * q, f),
                  Z = F.top + F.height * W - j,
                  V = Math.min(f + Z, u),
                  h = Math.min(Math.max(0, f - j), V) / V;
                return (
                  h !== i.scrollPercent && t.dispatch(gr(D, h)),
                  { scrollPercent: h }
                );
              }
            },
          },
          [JE]: jE,
          [CV]: jE,
          [ZE]: {
            ...Ts,
            handler: HE((e, t) => {
              t.scrollingDown && Be(e);
            }),
          },
          [RV]: {
            ...Ts,
            handler: HE((e, t) => {
              t.scrollingDown || Be(e);
            }),
          },
          [e_]: {
            types: "readystatechange IX2_PAGE_UPDATE",
            handler: et(rn, WV(Be)),
          },
          [t_]: {
            types: "readystatechange IX2_PAGE_UPDATE",
            handler: et(rn, HV(Be)),
          },
        });
    });
  var O_ = {};
  ke(O_, {
    observeRequests: () => lU,
    startActionGroup: () => on,
    startEngine: () => Ci,
    stopActionGroup: () => mr,
    stopAllActionGroups: () => T_,
    stopEngine: () => Ri,
  });
  function lU(e) {
    Vt({ store: e, select: ({ ixRequest: t }) => t.preview, onChange: pU }),
      Vt({ store: e, select: ({ ixRequest: t }) => t.playback, onChange: vU }),
      Vt({ store: e, select: ({ ixRequest: t }) => t.stop, onChange: gU }),
      Vt({ store: e, select: ({ ixRequest: t }) => t.clear, onChange: hU });
  }
  function fU(e) {
    Vt({
      store: e,
      select: ({ ixSession: t }) => t.mediaQueryKey,
      onChange: () => {
        Ri(e),
          y_({ store: e, elementApi: Me }),
          Ci({ store: e, allowEvents: !0 }),
          E_();
      },
    });
  }
  function dU(e, t) {
    let r = Vt({
      store: e,
      select: ({ ixSession: n }) => n.tick,
      onChange: (n) => {
        t(n), r();
      },
    });
  }
  function pU({ rawData: e, defer: t }, r) {
    let n = () => {
      Ci({ store: r, rawData: e, allowEvents: !0 }), E_();
    };
    t ? setTimeout(n, 0) : n();
  }
  function E_() {
    document.dispatchEvent(new CustomEvent("IX2_PAGE_UPDATE"));
  }
  function vU(e, t) {
    let {
        actionTypeId: r,
        actionListId: n,
        actionItemId: i,
        eventId: o,
        allowEvents: a,
        immediate: s,
        testManual: u,
        verbose: f = !0,
      } = e,
      { rawData: b } = e;
    if (n && i && b && s) {
      let v = b.actionLists[n];
      v && (b = JV({ actionList: v, actionItemId: i, rawData: b }));
    }
    if (
      (Ci({ store: t, rawData: b, allowEvents: a, testManual: u }),
      (n && r === Ge.GENERAL_START_ACTION) || ws(r))
    ) {
      mr({ store: t, actionListId: n }),
        b_({ store: t, actionListId: n, eventId: o });
      let v = on({
        store: t,
        eventId: o,
        actionListId: n,
        immediate: s,
        verbose: f,
      });
      f && v && t.dispatch(hr({ actionListId: n, isPlaying: !s }));
    }
  }
  function gU({ actionListId: e }, t) {
    e ? mr({ store: t, actionListId: e }) : T_({ store: t }), Ri(t);
  }
  function hU(e, t) {
    Ri(t), y_({ store: t, elementApi: Me });
  }
  function Ci({ store: e, rawData: t, allowEvents: r, testManual: n }) {
    let { ixSession: i } = e.getState();
    t && e.dispatch(ts(t)),
      i.active ||
        (e.dispatch(
          rs({
            hasBoundaryNodes: !!document.querySelector(Oi),
            reducedMotion:
              document.body.hasAttribute("data-wf-ix-vacation") &&
              window.matchMedia("(prefers-reduced-motion)").matches,
          })
        ),
        r &&
          (TU(e), mU(), e.getState().ixSession.hasDefinedMediaQueries && fU(e)),
        e.dispatch(ns()),
        yU(e, n));
  }
  function mU() {
    let { documentElement: e } = document;
    e.className.indexOf(c_) === -1 && (e.className += ` ${c_}`);
  }
  function yU(e, t) {
    let r = (n) => {
      let { ixSession: i, ixParameters: o } = e.getState();
      i.active &&
        (e.dispatch(pi(n, o)), t ? dU(e, r) : requestAnimationFrame(r));
    };
    r(window.performance.now());
  }
  function Ri(e) {
    let { ixSession: t } = e.getState();
    if (t.active) {
      let { eventListeners: r } = t;
      r.forEach(EU), nU(), e.dispatch(is());
    }
  }
  function EU({ target: e, listenerParams: t }) {
    e.removeEventListener.apply(e, t);
  }
  function _U({
    store: e,
    eventStateKey: t,
    eventTarget: r,
    eventId: n,
    eventConfig: i,
    actionListId: o,
    parameterGroup: a,
    smoothing: s,
    restingValue: u,
  }) {
    let { ixData: f, ixSession: b } = e.getState(),
      { events: v } = f,
      p = v[n],
      { eventTypeId: E } = p,
      A = {},
      O = {},
      S = [],
      { continuousActionGroups: _ } = a,
      { id: y } = a;
    eU(E, i) && (y = tU(t, y));
    let R = b.hasBoundaryNodes && r ? en(r, Oi) : null;
    _.forEach((D) => {
      let { keyframe: F, actionItems: q } = D;
      q.forEach((W) => {
        let { actionTypeId: j } = W,
          { target: Y } = W.config;
        if (!Y) return;
        let Z = Y.boundaryMode ? R : null,
          V = iU(Y) + Os + j;
        if (((O[V] = bU(O[V], F, W)), !A[V])) {
          A[V] = !0;
          let { config: L } = W;
          Ai({
            config: L,
            event: p,
            eventTarget: r,
            elementRoot: Z,
            elementApi: Me,
          }).forEach((h) => {
            S.push({ element: h, key: V });
          });
        }
      });
    }),
      S.forEach(({ element: D, key: F }) => {
        let q = O[F],
          W = (0, mt.default)(q, "[0].actionItems[0]", {}),
          { actionTypeId: j } = W,
          Y = Si(j) ? xs(j)(D, W) : null,
          Z = As({ element: D, actionItem: W, elementApi: Me }, Y);
        Ss({
          store: e,
          element: D,
          eventId: n,
          actionListId: o,
          actionItem: W,
          destination: Z,
          continuous: !0,
          parameterId: y,
          actionGroups: q,
          smoothing: s,
          restingValue: u,
          pluginInstance: Y,
        });
      });
  }
  function bU(e = [], t, r) {
    let n = [...e],
      i;
    return (
      n.some((o, a) => (o.keyframe === t ? ((i = a), !0) : !1)),
      i == null && ((i = n.length), n.push({ keyframe: t, actionItems: [] })),
      n[i].actionItems.push(r),
      n
    );
  }
  function TU(e) {
    let { ixData: t } = e.getState(),
      { eventTypeMap: r } = t;
    __(e),
      (0, yr.default)(r, (i, o) => {
        let a = s_[o];
        if (!a) {
          console.warn(`IX2 event type not configured: ${o}`);
          return;
        }
        SU({ logic: a, store: e, events: i });
      });
    let { ixSession: n } = e.getState();
    n.eventListeners.length && wU(e);
  }
  function wU(e) {
    let t = () => {
      __(e);
    };
    IU.forEach((r) => {
      window.addEventListener(r, t), e.dispatch(di(window, [r, t]));
    }),
      t();
  }
  function __(e) {
    let { ixSession: t, ixData: r } = e.getState(),
      n = window.innerWidth;
    if (n !== t.viewportWidth) {
      let { mediaQueries: i } = r;
      e.dispatch(cs({ width: n, mediaQueries: i }));
    }
  }
  function SU({ logic: e, store: t, events: r }) {
    CU(r);
    let { types: n, handler: i } = e,
      { ixData: o } = t.getState(),
      { actionLists: a } = o,
      s = OU(r, xU);
    if (!(0, d_.default)(s)) return;
    (0, yr.default)(s, (v, p) => {
      let E = r[p],
        { action: A, id: O, mediaQueries: S = o.mediaQueryKeys } = E,
        { actionListId: _ } = A.config;
      oU(S, o.mediaQueryKeys) || t.dispatch(ls()),
        A.actionTypeId === Ge.GENERAL_CONTINUOUS_ACTION &&
          (Array.isArray(E.config) ? E.config : [E.config]).forEach((R) => {
            let { continuousParameterGroupId: D } = R,
              F = (0, mt.default)(a, `${_}.continuousParameterGroups`, []),
              q = (0, f_.default)(F, ({ id: Y }) => Y === D),
              W = (R.smoothing || 0) / 100,
              j = (R.restingState || 0) / 100;
            q &&
              v.forEach((Y, Z) => {
                let V = O + Os + Z;
                _U({
                  store: t,
                  eventStateKey: V,
                  eventTarget: Y,
                  eventId: O,
                  eventConfig: R,
                  actionListId: _,
                  parameterGroup: q,
                  smoothing: W,
                  restingValue: j,
                });
              });
          }),
        (A.actionTypeId === Ge.GENERAL_START_ACTION || ws(A.actionTypeId)) &&
          b_({ store: t, actionListId: _, eventId: O });
    });
    let u = (v) => {
        let { ixSession: p } = t.getState();
        AU(s, (E, A, O) => {
          let S = r[A],
            _ = p.eventState[O],
            { action: y, mediaQueries: R = o.mediaQueryKeys } = S;
          if (!xi(R, p.mediaQueryKey)) return;
          let D = (F = {}) => {
            let q = i(
              {
                store: t,
                element: E,
                event: S,
                eventConfig: F,
                nativeEvent: v,
                eventStateKey: O,
              },
              _
            );
            aU(q, _) || t.dispatch(os(O, q));
          };
          y.actionTypeId === Ge.GENERAL_CONTINUOUS_ACTION
            ? (Array.isArray(S.config) ? S.config : [S.config]).forEach(D)
            : D();
        });
      },
      f = (0, h_.default)(u, cU),
      b = ({ target: v = document, types: p, throttle: E }) => {
        p.split(" ")
          .filter(Boolean)
          .forEach((A) => {
            let O = E ? f : u;
            v.addEventListener(A, O), t.dispatch(di(v, [A, O]));
          });
      };
    Array.isArray(n) ? n.forEach(b) : typeof n == "string" && b(e);
  }
  function CU(e) {
    if (!uU) return;
    let t = {},
      r = "";
    for (let n in e) {
      let { eventTypeId: i, target: o } = e[n],
        a = ds(o);
      t[a] ||
        ((i === Ze.MOUSE_CLICK || i === Ze.MOUSE_SECOND_CLICK) &&
          ((t[a] = !0),
          (r += a + "{cursor: pointer;touch-action: manipulation;}")));
    }
    if (r) {
      let n = document.createElement("style");
      (n.textContent = r), document.body.appendChild(n);
    }
  }
  function b_({ store: e, actionListId: t, eventId: r }) {
    let { ixData: n, ixSession: i } = e.getState(),
      { actionLists: o, events: a } = n,
      s = a[r],
      u = o[t];
    if (u && u.useFirstGroupAsInitialState) {
      let f = (0, mt.default)(u, "actionItemGroups[0].actionItems", []),
        b = (0, mt.default)(s, "mediaQueries", n.mediaQueryKeys);
      if (!xi(b, i.mediaQueryKey)) return;
      f.forEach((v) => {
        let { config: p, actionTypeId: E } = v,
          A =
            p?.target?.useEventTarget === !0 && p?.target?.objectId == null
              ? { target: s.target, targets: s.targets }
              : p,
          O = Ai({ config: A, event: s, elementApi: Me }),
          S = Si(E);
        O.forEach((_) => {
          let y = S ? xs(E)(_, v) : null;
          Ss({
            destination: As({ element: _, actionItem: v, elementApi: Me }, y),
            immediate: !0,
            store: e,
            element: _,
            eventId: r,
            actionItem: v,
            actionListId: t,
            pluginInstance: y,
          });
        });
      });
    }
  }
  function T_({ store: e }) {
    let { ixInstances: t } = e.getState();
    (0, yr.default)(t, (r) => {
      if (!r.continuous) {
        let { actionListId: n, verbose: i } = r;
        Cs(r, e), i && e.dispatch(hr({ actionListId: n, isPlaying: !1 }));
      }
    });
  }
  function mr({
    store: e,
    eventId: t,
    eventTarget: r,
    eventStateKey: n,
    actionListId: i,
  }) {
    let { ixInstances: o, ixSession: a } = e.getState(),
      s = a.hasBoundaryNodes && r ? en(r, Oi) : null;
    (0, yr.default)(o, (u) => {
      let f = (0, mt.default)(u, "actionItem.config.target.boundaryMode"),
        b = n ? u.eventStateKey === n : !0;
      if (u.actionListId === i && u.eventId === t && b) {
        if (s && f && !ps(s, u.element)) return;
        Cs(u, e),
          u.verbose && e.dispatch(hr({ actionListId: i, isPlaying: !1 }));
      }
    });
  }
  function on({
    store: e,
    eventId: t,
    eventTarget: r,
    eventStateKey: n,
    actionListId: i,
    groupIndex: o = 0,
    immediate: a,
    verbose: s,
  }) {
    let { ixData: u, ixSession: f } = e.getState(),
      { events: b } = u,
      v = b[t] || {},
      { mediaQueries: p = u.mediaQueryKeys } = v,
      E = (0, mt.default)(u, `actionLists.${i}`, {}),
      { actionItemGroups: A, useFirstGroupAsInitialState: O } = E;
    if (!A || !A.length) return !1;
    o >= A.length && (0, mt.default)(v, "config.loop") && (o = 0),
      o === 0 && O && o++;
    let _ =
        (o === 0 || (o === 1 && O)) && ws(v.action?.actionTypeId)
          ? v.config.delay
          : void 0,
      y = (0, mt.default)(A, [o, "actionItems"], []);
    if (!y.length || !xi(p, f.mediaQueryKey)) return !1;
    let R = f.hasBoundaryNodes && r ? en(r, Oi) : null,
      D = $V(y),
      F = !1;
    return (
      y.forEach((q, W) => {
        let { config: j, actionTypeId: Y } = q,
          Z = Si(Y),
          { target: V } = j;
        if (!V) return;
        let L = V.boundaryMode ? R : null;
        Ai({
          config: j,
          event: v,
          eventTarget: r,
          elementRoot: L,
          elementApi: Me,
        }).forEach((N, k) => {
          let U = Z ? xs(Y)(N, q) : null,
            J = Z ? sU(Y)(N, q) : null;
          F = !0;
          let re = D === W && k === 0,
            G = QV({ element: N, actionItem: q }),
            H = As({ element: N, actionItem: q, elementApi: Me }, U);
          Ss({
            store: e,
            element: N,
            actionItem: q,
            eventId: t,
            eventTarget: r,
            eventStateKey: n,
            actionListId: i,
            groupIndex: o,
            isCarrier: re,
            computedStyle: G,
            destination: H,
            immediate: a,
            verbose: s,
            pluginInstance: U,
            pluginDuration: J,
            instanceDelay: _,
          });
        });
      }),
      F
    );
  }
  function Ss(e) {
    let { store: t, computedStyle: r, ...n } = e,
      {
        element: i,
        actionItem: o,
        immediate: a,
        pluginInstance: s,
        continuous: u,
        restingValue: f,
        eventId: b,
      } = n,
      v = !u,
      p = KV(),
      { ixElements: E, ixSession: A, ixData: O } = t.getState(),
      S = zV(E, i),
      { refState: _ } = E[S] || {},
      y = vs(i),
      R = A.reducedMotion && Ko[o.actionTypeId],
      D;
    if (R && u)
      switch (O.events[b]?.eventTypeId) {
        case Ze.MOUSE_MOVE:
        case Ze.MOUSE_MOVE_IN_VIEWPORT:
          D = f;
          break;
        default:
          D = 0.5;
          break;
      }
    let F = ZV(i, _, r, o, Me, s);
    if (
      (t.dispatch(
        as({
          instanceId: p,
          elementId: S,
          origin: F,
          refType: y,
          skipMotion: R,
          skipToValue: D,
          ...n,
        })
      ),
      I_(document.body, "ix2-animation-started", p),
      a)
    ) {
      RU(t, p);
      return;
    }
    Vt({ store: t, select: ({ ixInstances: q }) => q[p], onChange: w_ }),
      v && t.dispatch(vi(p, A.tick));
  }
  function Cs(e, t) {
    I_(document.body, "ix2-animation-stopping", {
      instanceId: e.id,
      state: t.getState(),
    });
    let { elementId: r, actionItem: n } = e,
      { ixElements: i } = t.getState(),
      { ref: o, refType: a } = i[r] || {};
    a === m_ && rU(o, n, Me), t.dispatch(ss(e.id));
  }
  function I_(e, t, r) {
    let n = document.createEvent("CustomEvent");
    n.initCustomEvent(t, !0, !0, r), e.dispatchEvent(n);
  }
  function RU(e, t) {
    let { ixParameters: r } = e.getState();
    e.dispatch(vi(t, 0)), e.dispatch(pi(performance.now(), r));
    let { ixInstances: n } = e.getState();
    w_(n[t], e);
  }
  function w_(e, t) {
    let {
        active: r,
        continuous: n,
        complete: i,
        elementId: o,
        actionItem: a,
        actionTypeId: s,
        renderType: u,
        current: f,
        groupIndex: b,
        eventId: v,
        eventTarget: p,
        eventStateKey: E,
        actionListId: A,
        isCarrier: O,
        styleProp: S,
        verbose: _,
        pluginInstance: y,
      } = e,
      { ixData: R, ixSession: D } = t.getState(),
      { events: F } = R,
      q = F[v] || {},
      { mediaQueries: W = R.mediaQueryKeys } = q;
    if (xi(W, D.mediaQueryKey) && (n || r || i)) {
      if (f || (u === jV && i)) {
        t.dispatch(us(o, s, f, a));
        let { ixElements: j } = t.getState(),
          { ref: Y, refType: Z, refState: V } = j[o] || {},
          L = V && V[s];
        (Z === m_ || Si(s)) && YV(Y, V, L, v, a, S, Me, u, y);
      }
      if (i) {
        if (O) {
          let j = on({
            store: t,
            eventId: v,
            eventTarget: p,
            eventStateKey: E,
            actionListId: A,
            groupIndex: b + 1,
            verbose: _,
          });
          _ && !j && t.dispatch(hr({ actionListId: A, isPlaying: !1 }));
        }
        Cs(e, t);
      }
    }
  }
  var f_,
    mt,
    d_,
    p_,
    v_,
    g_,
    yr,
    h_,
    wi,
    XV,
    ws,
    Os,
    Oi,
    m_,
    jV,
    c_,
    Ai,
    zV,
    As,
    Vt,
    KV,
    YV,
    y_,
    $V,
    QV,
    ZV,
    JV,
    eU,
    tU,
    xi,
    rU,
    nU,
    iU,
    oU,
    aU,
    Si,
    xs,
    sU,
    l_,
    uU,
    cU,
    IU,
    OU,
    AU,
    xU,
    Is = he(() => {
      "use strict";
      (f_ = le(Ia())),
        (mt = le(Kn())),
        (d_ = le(km())),
        (p_ = le(ly())),
        (v_ = le(dy())),
        (g_ = le(vy())),
        (yr = le(_y())),
        (h_ = le(xy()));
      Ve();
      wi = le(Gt());
      gi();
      Py();
      u_();
      (XV = Object.keys(An)),
        (ws = (e) => XV.includes(e)),
        ({
          COLON_DELIMITER: Os,
          BOUNDARY_SELECTOR: Oi,
          HTML_ELEMENT: m_,
          RENDER_GENERAL: jV,
          W_MOD_IX: c_,
        } = Ce),
        ({
          getAffectedElements: Ai,
          getElementId: zV,
          getDestinationValues: As,
          observeStore: Vt,
          getInstanceId: KV,
          renderHTMLElement: YV,
          clearAllStyles: y_,
          getMaxDurationItemIndex: $V,
          getComputedStyle: QV,
          getInstanceOrigin: ZV,
          reduceListToGroup: JV,
          shouldNamespaceEventParameter: eU,
          getNamespacedParameterId: tU,
          shouldAllowMediaQuery: xi,
          cleanupHTMLElement: rU,
          clearObjectCache: nU,
          stringifyTarget: iU,
          mediaQueriesEqual: oU,
          shallowEqual: aU,
        } = wi.IX2VanillaUtils),
        ({
          isPluginType: Si,
          createPluginInstance: xs,
          getPluginDuration: sU,
        } = wi.IX2VanillaPlugins),
        (l_ = navigator.userAgent),
        (uU = l_.match(/iPad/i) || l_.match(/iPhone/)),
        (cU = 12);
      IU = ["resize", "orientationchange"];
      (OU = (e, t) => (0, p_.default)((0, g_.default)(e, t), v_.default)),
        (AU = (e, t) => {
          (0, yr.default)(e, (r, n) => {
            r.forEach((i, o) => {
              let a = n + Os + o;
              t(i, n, a);
            });
          });
        }),
        (xU = (e) => {
          let t = { target: e.target, targets: e.targets };
          return Ai({ config: t, elementApi: Me });
        });
    });
  var x_ = c((yt) => {
    "use strict";
    var LU = pn().default,
      NU = uu().default;
    Object.defineProperty(yt, "__esModule", { value: !0 });
    yt.actions = void 0;
    yt.destroy = A_;
    yt.init = DU;
    yt.setEnv = FU;
    yt.store = void 0;
    zl();
    var PU = Xo(),
      qU = NU((Em(), rt(ym))),
      Rs = (Is(), rt(O_)),
      MU = LU((gi(), rt(Cy)));
    yt.actions = MU;
    var Ls = (yt.store = (0, PU.createStore)(qU.default));
    function FU(e) {
      e() && (0, Rs.observeRequests)(Ls);
    }
    function DU(e) {
      A_(), (0, Rs.startEngine)({ store: Ls, rawData: e, allowEvents: !0 });
    }
    function A_() {
      (0, Rs.stopEngine)(Ls);
    }
  });
  var L_ = c((iz, R_) => {
    "use strict";
    var S_ = Ne(),
      C_ = x_();
    C_.setEnv(S_.env);
    S_.define(
      "ix2",
      (R_.exports = function () {
        return C_;
      })
    );
  });
  var P_ = c((oz, N_) => {
    "use strict";
    var Er = Ne();
    Er.define(
      "links",
      (N_.exports = function (e, t) {
        var r = {},
          n = e(window),
          i,
          o = Er.env(),
          a = window.location,
          s = document.createElement("a"),
          u = "w--current",
          f = /index\.(html|php)$/,
          b = /\/$/,
          v,
          p;
        r.ready = r.design = r.preview = E;
        function E() {
          (i = o && Er.env("design")),
            (p = Er.env("slug") || a.pathname || ""),
            Er.scroll.off(O),
            (v = []);
          for (var _ = document.links, y = 0; y < _.length; ++y) A(_[y]);
          v.length && (Er.scroll.on(O), O());
        }
        function A(_) {
          if (!_.getAttribute("hreflang")) {
            var y =
              (i && _.getAttribute("href-disabled")) || _.getAttribute("href");
            if (((s.href = y), !(y.indexOf(":") >= 0))) {
              var R = e(_);
              if (
                s.hash.length > 1 &&
                s.host + s.pathname === a.host + a.pathname
              ) {
                if (!/^#[a-zA-Z0-9\-\_]+$/.test(s.hash)) return;
                var D = e(s.hash);
                D.length && v.push({ link: R, sec: D, active: !1 });
                return;
              }
              if (!(y === "#" || y === "")) {
                var F =
                  s.href === a.href || y === p || (f.test(y) && b.test(p));
                S(R, u, F);
              }
            }
          }
        }
        function O() {
          var _ = n.scrollTop(),
            y = n.height();
          t.each(v, function (R) {
            if (!R.link.attr("hreflang")) {
              var D = R.link,
                F = R.sec,
                q = F.offset().top,
                W = F.outerHeight(),
                j = y * 0.5,
                Y = F.is(":visible") && q + W - j >= _ && q + j <= _ + y;
              R.active !== Y && ((R.active = Y), S(D, u, Y));
            }
          });
        }
        function S(_, y, R) {
          var D = _.hasClass(y);
          (R && D) || (!R && !D) || (R ? _.addClass(y) : _.removeClass(y));
        }
        return r;
      })
    );
  });
  var M_ = c((az, q_) => {
    "use strict";
    var Li = Ne();
    Li.define(
      "scroll",
      (q_.exports = function (e) {
        var t = {
            WF_CLICK_EMPTY: "click.wf-empty-link",
            WF_CLICK_SCROLL: "click.wf-scroll",
          },
          r = window.location,
          n = A() ? null : window.history,
          i = e(window),
          o = e(document),
          a = e(document.body),
          s =
            window.requestAnimationFrame ||
            window.mozRequestAnimationFrame ||
            window.webkitRequestAnimationFrame ||
            function (L) {
              window.setTimeout(L, 15);
            },
          u = Li.env("editor") ? ".w-editor-body" : "body",
          f =
            "header, " +
            u +
            " > .header, " +
            u +
            " > .w-nav:not([data-no-scroll])",
          b = 'a[href="#"]',
          v = 'a[href*="#"]:not(.w-tab-link):not(' + b + ")",
          p = '.wf-force-outline-none[tabindex="-1"]:focus{outline:none;}',
          E = document.createElement("style");
        E.appendChild(document.createTextNode(p));
        function A() {
          try {
            return !!window.frameElement;
          } catch {
            return !0;
          }
        }
        var O = /^#[a-zA-Z0-9][\w:.-]*$/;
        function S(L) {
          return O.test(L.hash) && L.host + L.pathname === r.host + r.pathname;
        }
        let _ =
          typeof window.matchMedia == "function" &&
          window.matchMedia("(prefers-reduced-motion: reduce)");
        function y() {
          return (
            document.body.getAttribute("data-wf-scroll-motion") === "none" ||
            _.matches
          );
        }
        function R(L, h) {
          var N;
          switch (h) {
            case "add":
              (N = L.attr("tabindex")),
                N
                  ? L.attr("data-wf-tabindex-swap", N)
                  : L.attr("tabindex", "-1");
              break;
            case "remove":
              (N = L.attr("data-wf-tabindex-swap")),
                N
                  ? (L.attr("tabindex", N),
                    L.removeAttr("data-wf-tabindex-swap"))
                  : L.removeAttr("tabindex");
              break;
          }
          L.toggleClass("wf-force-outline-none", h === "add");
        }
        function D(L) {
          var h = L.currentTarget;
          if (
            !(
              Li.env("design") ||
              (window.$.mobile && /(?:^|\s)ui-link(?:$|\s)/.test(h.className))
            )
          ) {
            var N = S(h) ? h.hash : "";
            if (N !== "") {
              var k = e(N);
              k.length &&
                (L && (L.preventDefault(), L.stopPropagation()),
                F(N, L),
                window.setTimeout(
                  function () {
                    q(k, function () {
                      R(k, "add"),
                        k.get(0).focus({ preventScroll: !0 }),
                        R(k, "remove");
                    });
                  },
                  L ? 0 : 300
                ));
            }
          }
        }
        function F(L) {
          if (
            r.hash !== L &&
            n &&
            n.pushState &&
            !(Li.env.chrome && r.protocol === "file:")
          ) {
            var h = n.state && n.state.hash;
            h !== L && n.pushState({ hash: L }, "", L);
          }
        }
        function q(L, h) {
          var N = i.scrollTop(),
            k = W(L);
          if (N !== k) {
            var U = j(L, N, k),
              J = Date.now(),
              re = function () {
                var G = Date.now() - J;
                window.scroll(0, Y(N, k, G, U)),
                  G <= U ? s(re) : typeof h == "function" && h();
              };
            s(re);
          }
        }
        function W(L) {
          var h = e(f),
            N = h.css("position") === "fixed" ? h.outerHeight() : 0,
            k = L.offset().top - N;
          if (L.data("scroll") === "mid") {
            var U = i.height() - N,
              J = L.outerHeight();
            J < U && (k -= Math.round((U - J) / 2));
          }
          return k;
        }
        function j(L, h, N) {
          if (y()) return 0;
          var k = 1;
          return (
            a.add(L).each(function (U, J) {
              var re = parseFloat(J.getAttribute("data-scroll-time"));
              !isNaN(re) && re >= 0 && (k = re);
            }),
            (472.143 * Math.log(Math.abs(h - N) + 125) - 2e3) * k
          );
        }
        function Y(L, h, N, k) {
          return N > k ? h : L + (h - L) * Z(N / k);
        }
        function Z(L) {
          return L < 0.5
            ? 4 * L * L * L
            : (L - 1) * (2 * L - 2) * (2 * L - 2) + 1;
        }
        function V() {
          var { WF_CLICK_EMPTY: L, WF_CLICK_SCROLL: h } = t;
          o.on(h, v, D),
            o.on(L, b, function (N) {
              N.preventDefault();
            }),
            document.head.insertBefore(E, document.head.firstChild);
        }
        return { ready: V };
      })
    );
  });
  var D_ = c((sz, F_) => {
    "use strict";
    var kU = Ne();
    kU.define(
      "touch",
      (F_.exports = function (e) {
        var t = {},
          r = window.getSelection;
        (e.event.special.tap = { bindType: "click", delegateType: "click" }),
          (t.init = function (o) {
            return (
              (o = typeof o == "string" ? e(o).get(0) : o), o ? new n(o) : null
            );
          });
        function n(o) {
          var a = !1,
            s = !1,
            u = Math.min(Math.round(window.innerWidth * 0.04), 40),
            f,
            b;
          o.addEventListener("touchstart", v, !1),
            o.addEventListener("touchmove", p, !1),
            o.addEventListener("touchend", E, !1),
            o.addEventListener("touchcancel", A, !1),
            o.addEventListener("mousedown", v, !1),
            o.addEventListener("mousemove", p, !1),
            o.addEventListener("mouseup", E, !1),
            o.addEventListener("mouseout", A, !1);
          function v(S) {
            var _ = S.touches;
            (_ && _.length > 1) ||
              ((a = !0),
              _ ? ((s = !0), (f = _[0].clientX)) : (f = S.clientX),
              (b = f));
          }
          function p(S) {
            if (a) {
              if (s && S.type === "mousemove") {
                S.preventDefault(), S.stopPropagation();
                return;
              }
              var _ = S.touches,
                y = _ ? _[0].clientX : S.clientX,
                R = y - b;
              (b = y),
                Math.abs(R) > u &&
                  r &&
                  String(r()) === "" &&
                  (i("swipe", S, { direction: R > 0 ? "right" : "left" }), A());
            }
          }
          function E(S) {
            if (a && ((a = !1), s && S.type === "mouseup")) {
              S.preventDefault(), S.stopPropagation(), (s = !1);
              return;
            }
          }
          function A() {
            a = !1;
          }
          function O() {
            o.removeEventListener("touchstart", v, !1),
              o.removeEventListener("touchmove", p, !1),
              o.removeEventListener("touchend", E, !1),
              o.removeEventListener("touchcancel", A, !1),
              o.removeEventListener("mousedown", v, !1),
              o.removeEventListener("mousemove", p, !1),
              o.removeEventListener("mouseup", E, !1),
              o.removeEventListener("mouseout", A, !1),
              (o = null);
          }
          this.destroy = O;
        }
        function i(o, a, s) {
          var u = e.Event(o, { originalEvent: a });
          e(a.target).trigger(u, s);
        }
        return (t.instance = t.init(document)), t;
      })
    );
  });
  var k_ = c((Ns) => {
    "use strict";
    Object.defineProperty(Ns, "__esModule", { value: !0 });
    Ns.default = GU;
    function GU(e, t, r, n, i, o, a, s, u, f, b, v, p) {
      return function (E) {
        e(E);
        var A = E.form,
          O = {
            name: A.attr("data-name") || A.attr("name") || "Untitled Form",
            pageId: A.attr("data-wf-page-id") || "",
            elementId: A.attr("data-wf-element-id") || "",
            source: t.href,
            test: r.env(),
            fields: {},
            fileUploads: {},
            dolphin: /pass[\s-_]?(word|code)|secret|login|credentials/i.test(
              A.html()
            ),
            trackingCookies: n(),
          };
        let S = A.attr("data-wf-flow");
        S && (O.wfFlow = S), i(E);
        var _ = o(A, O.fields);
        if (_) return a(_);
        if (((O.fileUploads = s(A)), u(E), !f)) {
          b(E);
          return;
        }
        v.ajax({
          url: p,
          type: "POST",
          data: O,
          dataType: "json",
          crossDomain: !0,
        })
          .done(function (y) {
            y && y.code === 200 && (E.success = !0), b(E);
          })
          .fail(function () {
            b(E);
          });
      };
    }
  });
  var V_ = c((cz, G_) => {
    "use strict";
    var Ni = Ne();
    Ni.define(
      "forms",
      (G_.exports = function (e, t) {
        var r = {},
          n = e(document),
          i,
          o = window.location,
          a = window.XDomainRequest && !window.atob,
          s = ".w-form",
          u,
          f = /e(-)?mail/i,
          b = /^\S+@\S+$/,
          v = window.alert,
          p = Ni.env(),
          E,
          A,
          O,
          S = /list-manage[1-9]?.com/i,
          _ = t.debounce(function () {
            v(
              "Oops! This page has improperly configured forms. Please contact your website administrator to fix this issue."
            );
          }, 100);
        r.ready = r.design = r.preview = function () {
          y(), !p && !E && D();
        };
        function y() {
          (u = e("html").attr("data-wf-site")),
            (A = "https://webflow.com/api/v1/form/" + u),
            a &&
              A.indexOf("https://webflow.com") >= 0 &&
              (A = A.replace(
                "https://webflow.com",
                "https://formdata.webflow.com"
              )),
            (O = `${A}/signFile`),
            (i = e(s + " form")),
            i.length && i.each(R);
        }
        function R(G, H) {
          var d = e(H),
            T = e.data(H, s);
          T || (T = e.data(H, s, { form: d })), F(T);
          var I = d.closest("div.w-form");
          (T.done = I.find("> .w-form-done")),
            (T.fail = I.find("> .w-form-fail")),
            (T.fileUploads = I.find(".w-file-upload")),
            T.fileUploads.each(function ($) {
              U($, T);
            });
          var g =
            T.form.attr("aria-label") || T.form.attr("data-name") || "Form";
          T.done.attr("aria-label") || T.form.attr("aria-label", g),
            T.done.attr("tabindex", "-1"),
            T.done.attr("role", "region"),
            T.done.attr("aria-label") ||
              T.done.attr("aria-label", g + " success"),
            T.fail.attr("tabindex", "-1"),
            T.fail.attr("role", "region"),
            T.fail.attr("aria-label") ||
              T.fail.attr("aria-label", g + " failure");
          var X = (T.action = d.attr("action"));
          if (
            ((T.handler = null),
            (T.redirect = d.attr("data-redirect")),
            S.test(X))
          ) {
            T.handler = h;
            return;
          }
          if (!X) {
            if (u) {
              T.handler = (() => {
                let $ = k_().default;
                return $(F, o, Ni, Z, k, W, v, j, q, u, N, e, A);
              })();
              return;
            }
            _();
          }
        }
        function D() {
          (E = !0),
            n.on("submit", s + " form", function ($) {
              var ee = e.data(this, s);
              ee.handler && ((ee.evt = $), ee.handler(ee));
            });
          let G = ".w-checkbox-input",
            H = ".w-radio-input",
            d = "w--redirected-checked",
            T = "w--redirected-focus",
            I = "w--redirected-focus-visible",
            g = ":focus-visible, [data-wf-focus-visible]",
            X = [
              ["checkbox", G],
              ["radio", H],
            ];
          n.on(
            "change",
            s + ' form input[type="checkbox"]:not(' + G + ")",
            ($) => {
              e($.target).siblings(G).toggleClass(d);
            }
          ),
            n.on("change", s + ' form input[type="radio"]', ($) => {
              e(`input[name="${$.target.name}"]:not(${G})`).map((ue, _e) =>
                e(_e).siblings(H).removeClass(d)
              );
              let ee = e($.target);
              ee.hasClass("w-radio-input") || ee.siblings(H).addClass(d);
            }),
            X.forEach(([$, ee]) => {
              n.on(
                "focus",
                s + ` form input[type="${$}"]:not(` + ee + ")",
                (ue) => {
                  e(ue.target).siblings(ee).addClass(T),
                    e(ue.target).filter(g).siblings(ee).addClass(I);
                }
              ),
                n.on(
                  "blur",
                  s + ` form input[type="${$}"]:not(` + ee + ")",
                  (ue) => {
                    e(ue.target).siblings(ee).removeClass(`${T} ${I}`);
                  }
                );
            });
        }
        function F(G) {
          var H = (G.btn = G.form.find(':input[type="submit"]'));
          (G.wait = G.btn.attr("data-wait") || null),
            (G.success = !1),
            H.prop("disabled", !1),
            G.label && H.val(G.label);
        }
        function q(G) {
          var H = G.btn,
            d = G.wait;
          H.prop("disabled", !0), d && ((G.label = H.val()), H.val(d));
        }
        function W(G, H) {
          var d = null;
          return (
            (H = H || {}),
            G.find(':input:not([type="submit"]):not([type="file"])').each(
              function (T, I) {
                var g = e(I),
                  X = g.attr("type"),
                  $ =
                    g.attr("data-name") || g.attr("name") || "Field " + (T + 1);
                $ = encodeURIComponent($);
                var ee = g.val();
                if (X === "checkbox") ee = g.is(":checked");
                else if (X === "radio") {
                  if (H[$] === null || typeof H[$] == "string") return;
                  ee =
                    G.find(
                      'input[name="' + g.attr("name") + '"]:checked'
                    ).val() || null;
                }
                typeof ee == "string" && (ee = e.trim(ee)),
                  (H[$] = ee),
                  (d = d || V(g, X, $, ee));
              }
            ),
            d
          );
        }
        function j(G) {
          var H = {};
          return (
            G.find(':input[type="file"]').each(function (d, T) {
              var I = e(T),
                g = I.attr("data-name") || I.attr("name") || "File " + (d + 1),
                X = I.attr("data-value");
              typeof X == "string" && (X = e.trim(X)), (H[g] = X);
            }),
            H
          );
        }
        let Y = { _mkto_trk: "marketo" };
        function Z() {
          return document.cookie.split("; ").reduce(function (H, d) {
            let T = d.split("="),
              I = T[0];
            if (I in Y) {
              let g = Y[I],
                X = T.slice(1).join("=");
              H[g] = X;
            }
            return H;
          }, {});
        }
        function V(G, H, d, T) {
          var I = null;
          return (
            H === "password"
              ? (I = "Passwords cannot be submitted.")
              : G.attr("required")
              ? T
                ? f.test(G.attr("type")) &&
                  (b.test(T) ||
                    (I = "Please enter a valid email address for: " + d))
                : (I = "Please fill out the required field: " + d)
              : d === "g-recaptcha-response" &&
                !T &&
                (I = "Please confirm you\u2019re not a robot."),
            I
          );
        }
        function L(G) {
          k(G), N(G);
        }
        function h(G) {
          F(G);
          var H = G.form,
            d = {};
          if (/^https/.test(o.href) && !/^https/.test(G.action)) {
            H.attr("method", "post");
            return;
          }
          k(G);
          var T = W(H, d);
          if (T) return v(T);
          q(G);
          var I;
          t.each(d, function (ee, ue) {
            f.test(ue) && (d.EMAIL = ee),
              /^((full[ _-]?)?name)$/i.test(ue) && (I = ee),
              /^(first[ _-]?name)$/i.test(ue) && (d.FNAME = ee),
              /^(last[ _-]?name)$/i.test(ue) && (d.LNAME = ee);
          }),
            I &&
              !d.FNAME &&
              ((I = I.split(" ")),
              (d.FNAME = I[0]),
              (d.LNAME = d.LNAME || I[1]));
          var g = G.action.replace("/post?", "/post-json?") + "&c=?",
            X = g.indexOf("u=") + 2;
          X = g.substring(X, g.indexOf("&", X));
          var $ = g.indexOf("id=") + 3;
          ($ = g.substring($, g.indexOf("&", $))),
            (d["b_" + X + "_" + $] = ""),
            e
              .ajax({ url: g, data: d, dataType: "jsonp" })
              .done(function (ee) {
                (G.success = ee.result === "success" || /already/.test(ee.msg)),
                  G.success || console.info("MailChimp error: " + ee.msg),
                  N(G);
              })
              .fail(function () {
                N(G);
              });
        }
        function N(G) {
          var H = G.form,
            d = G.redirect,
            T = G.success;
          if (T && d) {
            Ni.location(d);
            return;
          }
          G.done.toggle(T),
            G.fail.toggle(!T),
            T ? G.done.focus() : G.fail.focus(),
            H.toggle(!T),
            F(G);
        }
        function k(G) {
          G.evt && G.evt.preventDefault(), (G.evt = null);
        }
        function U(G, H) {
          if (!H.fileUploads || !H.fileUploads[G]) return;
          var d,
            T = e(H.fileUploads[G]),
            I = T.find("> .w-file-upload-default"),
            g = T.find("> .w-file-upload-uploading"),
            X = T.find("> .w-file-upload-success"),
            $ = T.find("> .w-file-upload-error"),
            ee = I.find(".w-file-upload-input"),
            ue = I.find(".w-file-upload-label"),
            _e = ue.children(),
            oe = $.find(".w-file-upload-error-msg"),
            m = X.find(".w-file-upload-file"),
            B = X.find(".w-file-remove-link"),
            Q = m.find(".w-file-upload-file-name"),
            z = oe.attr("data-w-size-error"),
            fe = oe.attr("data-w-type-error"),
            Fe = oe.attr("data-w-generic-error");
          if (
            (p ||
              ue.on("click keydown", function (x) {
                (x.type === "keydown" && x.which !== 13 && x.which !== 32) ||
                  (x.preventDefault(), ee.click());
              }),
            ue.find(".w-icon-file-upload-icon").attr("aria-hidden", "true"),
            B.find(".w-icon-file-upload-remove").attr("aria-hidden", "true"),
            p)
          )
            ee.on("click", function (x) {
              x.preventDefault();
            }),
              ue.on("click", function (x) {
                x.preventDefault();
              }),
              _e.on("click", function (x) {
                x.preventDefault();
              });
          else {
            B.on("click keydown", function (x) {
              if (x.type === "keydown") {
                if (x.which !== 13 && x.which !== 32) return;
                x.preventDefault();
              }
              ee.removeAttr("data-value"),
                ee.val(""),
                Q.html(""),
                I.toggle(!0),
                X.toggle(!1),
                ue.focus();
            }),
              ee.on("change", function (x) {
                (d = x.target && x.target.files && x.target.files[0]),
                  d &&
                    (I.toggle(!1),
                    $.toggle(!1),
                    g.toggle(!0),
                    g.focus(),
                    Q.text(d.name),
                    P() || q(H),
                    (H.fileUploads[G].uploading = !0),
                    J(d, w));
              });
            var He = ue.outerHeight();
            ee.height(He), ee.width(1);
          }
          function l(x) {
            var M = x.responseJSON && x.responseJSON.msg,
              te = Fe;
            typeof M == "string" && M.indexOf("InvalidFileTypeError") === 0
              ? (te = fe)
              : typeof M == "string" &&
                M.indexOf("MaxFileSizeError") === 0 &&
                (te = z),
              oe.text(te),
              ee.removeAttr("data-value"),
              ee.val(""),
              g.toggle(!1),
              I.toggle(!0),
              $.toggle(!0),
              $.focus(),
              (H.fileUploads[G].uploading = !1),
              P() || F(H);
          }
          function w(x, M) {
            if (x) return l(x);
            var te = M.fileName,
              ie = M.postData,
              ve = M.fileId,
              K = M.s3Url;
            ee.attr("data-value", ve), re(K, ie, d, te, C);
          }
          function C(x) {
            if (x) return l(x);
            g.toggle(!1),
              X.css("display", "inline-block"),
              X.focus(),
              (H.fileUploads[G].uploading = !1),
              P() || F(H);
          }
          function P() {
            var x = (H.fileUploads && H.fileUploads.toArray()) || [];
            return x.some(function (M) {
              return M.uploading;
            });
          }
        }
        function J(G, H) {
          var d = new URLSearchParams({ name: G.name, size: G.size });
          e.ajax({ type: "GET", url: `${O}?${d}`, crossDomain: !0 })
            .done(function (T) {
              H(null, T);
            })
            .fail(function (T) {
              H(T);
            });
        }
        function re(G, H, d, T, I) {
          var g = new FormData();
          for (var X in H) g.append(X, H[X]);
          g.append("file", d, T),
            e
              .ajax({
                type: "POST",
                url: G,
                data: g,
                processData: !1,
                contentType: !1,
              })
              .done(function () {
                I(null);
              })
              .fail(function ($) {
                I($);
              });
        }
        return r;
      })
    );
  });
  var B_ = c((lz, U_) => {
    "use strict";
    var xt = Ne(),
      VU = br(),
      Se = {
        ARROW_LEFT: 37,
        ARROW_UP: 38,
        ARROW_RIGHT: 39,
        ARROW_DOWN: 40,
        ESCAPE: 27,
        SPACE: 32,
        ENTER: 13,
        HOME: 36,
        END: 35,
      };
    xt.define(
      "navbar",
      (U_.exports = function (e, t) {
        var r = {},
          n = e.tram,
          i = e(window),
          o = e(document),
          a = t.debounce,
          s,
          u,
          f,
          b,
          v = xt.env(),
          p = '<div class="w-nav-overlay" data-wf-ignore />',
          E = ".w-nav",
          A = "w--open",
          O = "w--nav-dropdown-open",
          S = "w--nav-dropdown-toggle-open",
          _ = "w--nav-dropdown-list-open",
          y = "w--nav-link-open",
          R = VU.triggers,
          D = e();
        (r.ready = r.design = r.preview = F),
          (r.destroy = function () {
            (D = e()), q(), u && u.length && u.each(Z);
          });
        function F() {
          (f = v && xt.env("design")),
            (b = xt.env("editor")),
            (s = e(document.body)),
            (u = o.find(E)),
            u.length && (u.each(Y), q(), W());
        }
        function q() {
          xt.resize.off(j);
        }
        function W() {
          xt.resize.on(j);
        }
        function j() {
          u.each(I);
        }
        function Y(m, B) {
          var Q = e(B),
            z = e.data(B, E);
          z ||
            (z = e.data(B, E, {
              open: !1,
              el: Q,
              config: {},
              selectedIdx: -1,
            })),
            (z.menu = Q.find(".w-nav-menu")),
            (z.links = z.menu.find(".w-nav-link")),
            (z.dropdowns = z.menu.find(".w-dropdown")),
            (z.dropdownToggle = z.menu.find(".w-dropdown-toggle")),
            (z.dropdownList = z.menu.find(".w-dropdown-list")),
            (z.button = Q.find(".w-nav-button")),
            (z.container = Q.find(".w-container")),
            (z.overlayContainerId = "w-nav-overlay-" + m),
            (z.outside = d(z));
          var fe = Q.find(".w-nav-brand");
          fe &&
            fe.attr("href") === "/" &&
            fe.attr("aria-label") == null &&
            fe.attr("aria-label", "home"),
            z.button.attr("style", "-webkit-user-select: text;"),
            z.button.attr("aria-label") == null &&
              z.button.attr("aria-label", "menu"),
            z.button.attr("role", "button"),
            z.button.attr("tabindex", "0"),
            z.button.attr("aria-controls", z.overlayContainerId),
            z.button.attr("aria-haspopup", "menu"),
            z.button.attr("aria-expanded", "false"),
            z.el.off(E),
            z.button.off(E),
            z.menu.off(E),
            h(z),
            f
              ? (V(z), z.el.on("setting" + E, N(z)))
              : (L(z),
                z.button.on("click" + E, G(z)),
                z.menu.on("click" + E, "a", H(z)),
                z.button.on("keydown" + E, k(z)),
                z.el.on("keydown" + E, U(z))),
            I(m, B);
        }
        function Z(m, B) {
          var Q = e.data(B, E);
          Q && (V(Q), e.removeData(B, E));
        }
        function V(m) {
          m.overlay && (oe(m, !0), m.overlay.remove(), (m.overlay = null));
        }
        function L(m) {
          m.overlay ||
            ((m.overlay = e(p).appendTo(m.el)),
            m.overlay.attr("id", m.overlayContainerId),
            (m.parent = m.menu.parent()),
            oe(m, !0));
        }
        function h(m) {
          var B = {},
            Q = m.config || {},
            z = (B.animation = m.el.attr("data-animation") || "default");
          (B.animOver = /^over/.test(z)),
            (B.animDirect = /left$/.test(z) ? -1 : 1),
            Q.animation !== z && m.open && t.defer(re, m),
            (B.easing = m.el.attr("data-easing") || "ease"),
            (B.easing2 = m.el.attr("data-easing2") || "ease");
          var fe = m.el.attr("data-duration");
          (B.duration = fe != null ? Number(fe) : 400),
            (B.docHeight = m.el.attr("data-doc-height")),
            (m.config = B);
        }
        function N(m) {
          return function (B, Q) {
            Q = Q || {};
            var z = i.width();
            h(m),
              Q.open === !0 && ue(m, !0),
              Q.open === !1 && oe(m, !0),
              m.open &&
                t.defer(function () {
                  z !== i.width() && re(m);
                });
          };
        }
        function k(m) {
          return function (B) {
            switch (B.keyCode) {
              case Se.SPACE:
              case Se.ENTER:
                return G(m)(), B.preventDefault(), B.stopPropagation();
              case Se.ESCAPE:
                return oe(m), B.preventDefault(), B.stopPropagation();
              case Se.ARROW_RIGHT:
              case Se.ARROW_DOWN:
              case Se.HOME:
              case Se.END:
                return m.open
                  ? (B.keyCode === Se.END
                      ? (m.selectedIdx = m.links.length - 1)
                      : (m.selectedIdx = 0),
                    J(m),
                    B.preventDefault(),
                    B.stopPropagation())
                  : (B.preventDefault(), B.stopPropagation());
            }
          };
        }
        function U(m) {
          return function (B) {
            if (m.open)
              switch (
                ((m.selectedIdx = m.links.index(document.activeElement)),
                B.keyCode)
              ) {
                case Se.HOME:
                case Se.END:
                  return (
                    B.keyCode === Se.END
                      ? (m.selectedIdx = m.links.length - 1)
                      : (m.selectedIdx = 0),
                    J(m),
                    B.preventDefault(),
                    B.stopPropagation()
                  );
                case Se.ESCAPE:
                  return (
                    oe(m),
                    m.button.focus(),
                    B.preventDefault(),
                    B.stopPropagation()
                  );
                case Se.ARROW_LEFT:
                case Se.ARROW_UP:
                  return (
                    (m.selectedIdx = Math.max(-1, m.selectedIdx - 1)),
                    J(m),
                    B.preventDefault(),
                    B.stopPropagation()
                  );
                case Se.ARROW_RIGHT:
                case Se.ARROW_DOWN:
                  return (
                    (m.selectedIdx = Math.min(
                      m.links.length - 1,
                      m.selectedIdx + 1
                    )),
                    J(m),
                    B.preventDefault(),
                    B.stopPropagation()
                  );
              }
          };
        }
        function J(m) {
          if (m.links[m.selectedIdx]) {
            var B = m.links[m.selectedIdx];
            B.focus(), H(B);
          }
        }
        function re(m) {
          m.open && (oe(m, !0), ue(m, !0));
        }
        function G(m) {
          return a(function () {
            m.open ? oe(m) : ue(m);
          });
        }
        function H(m) {
          return function (B) {
            var Q = e(this),
              z = Q.attr("href");
            if (!xt.validClick(B.currentTarget)) {
              B.preventDefault();
              return;
            }
            z && z.indexOf("#") === 0 && m.open && oe(m);
          };
        }
        function d(m) {
          return (
            m.outside && o.off("click" + E, m.outside),
            function (B) {
              var Q = e(B.target);
              (b && Q.closest(".w-editor-bem-EditorOverlay").length) || T(m, Q);
            }
          );
        }
        var T = a(function (m, B) {
          if (m.open) {
            var Q = B.closest(".w-nav-menu");
            m.menu.is(Q) || oe(m);
          }
        });
        function I(m, B) {
          var Q = e.data(B, E),
            z = (Q.collapsed = Q.button.css("display") !== "none");
          if ((Q.open && !z && !f && oe(Q, !0), Q.container.length)) {
            var fe = X(Q);
            Q.links.each(fe), Q.dropdowns.each(fe);
          }
          Q.open && _e(Q);
        }
        var g = "max-width";
        function X(m) {
          var B = m.container.css(g);
          return (
            B === "none" && (B = ""),
            function (Q, z) {
              (z = e(z)), z.css(g, ""), z.css(g) === "none" && z.css(g, B);
            }
          );
        }
        function $(m, B) {
          B.setAttribute("data-nav-menu-open", "");
        }
        function ee(m, B) {
          B.removeAttribute("data-nav-menu-open");
        }
        function ue(m, B) {
          if (m.open) return;
          (m.open = !0),
            m.menu.each($),
            m.links.addClass(y),
            m.dropdowns.addClass(O),
            m.dropdownToggle.addClass(S),
            m.dropdownList.addClass(_),
            m.button.addClass(A);
          var Q = m.config,
            z = Q.animation;
          (z === "none" || !n.support.transform || Q.duration <= 0) && (B = !0);
          var fe = _e(m),
            Fe = m.menu.outerHeight(!0),
            He = m.menu.outerWidth(!0),
            l = m.el.height(),
            w = m.el[0];
          if (
            (I(0, w),
            R.intro(0, w),
            xt.redraw.up(),
            f || o.on("click" + E, m.outside),
            B)
          ) {
            x();
            return;
          }
          var C = "transform " + Q.duration + "ms " + Q.easing;
          if (
            (m.overlay &&
              ((D = m.menu.prev()), m.overlay.show().append(m.menu)),
            Q.animOver)
          ) {
            n(m.menu)
              .add(C)
              .set({ x: Q.animDirect * He, height: fe })
              .start({ x: 0 })
              .then(x),
              m.overlay && m.overlay.width(He);
            return;
          }
          var P = l + Fe;
          n(m.menu).add(C).set({ y: -P }).start({ y: 0 }).then(x);
          function x() {
            m.button.attr("aria-expanded", "true");
          }
        }
        function _e(m) {
          var B = m.config,
            Q = B.docHeight ? o.height() : s.height();
          return (
            B.animOver
              ? m.menu.height(Q)
              : m.el.css("position") !== "fixed" && (Q -= m.el.outerHeight(!0)),
            m.overlay && m.overlay.height(Q),
            Q
          );
        }
        function oe(m, B) {
          if (!m.open) return;
          (m.open = !1), m.button.removeClass(A);
          var Q = m.config;
          if (
            ((Q.animation === "none" ||
              !n.support.transform ||
              Q.duration <= 0) &&
              (B = !0),
            R.outro(0, m.el[0]),
            o.off("click" + E, m.outside),
            B)
          ) {
            n(m.menu).stop(), w();
            return;
          }
          var z = "transform " + Q.duration + "ms " + Q.easing2,
            fe = m.menu.outerHeight(!0),
            Fe = m.menu.outerWidth(!0),
            He = m.el.height();
          if (Q.animOver) {
            n(m.menu)
              .add(z)
              .start({ x: Fe * Q.animDirect })
              .then(w);
            return;
          }
          var l = He + fe;
          n(m.menu).add(z).start({ y: -l }).then(w);
          function w() {
            m.menu.height(""),
              n(m.menu).set({ x: 0, y: 0 }),
              m.menu.each(ee),
              m.links.removeClass(y),
              m.dropdowns.removeClass(O),
              m.dropdownToggle.removeClass(S),
              m.dropdownList.removeClass(_),
              m.overlay &&
                m.overlay.children().length &&
                (D.length ? m.menu.insertAfter(D) : m.menu.prependTo(m.parent),
                m.overlay.attr("style", "").hide()),
              m.el.triggerHandler("w-close"),
              m.button.attr("aria-expanded", "false");
          }
        }
        return r;
      })
    );
  });
  var X_ = c((fz, H_) => {
    "use strict";
    var St = Ne(),
      UU = br(),
      ft = {
        ARROW_LEFT: 37,
        ARROW_UP: 38,
        ARROW_RIGHT: 39,
        ARROW_DOWN: 40,
        SPACE: 32,
        ENTER: 13,
        HOME: 36,
        END: 35,
      },
      W_ =
        'a[href], area[href], [role="button"], input, select, textarea, button, iframe, object, embed, *[tabindex], *[contenteditable]';
    St.define(
      "slider",
      (H_.exports = function (e, t) {
        var r = {},
          n = e.tram,
          i = e(document),
          o,
          a,
          s = St.env(),
          u = ".w-slider",
          f = '<div class="w-slider-dot" data-wf-ignore />',
          b =
            '<div aria-live="off" aria-atomic="true" class="w-slider-aria-label" data-wf-ignore />',
          v = "w-slider-force-show",
          p = UU.triggers,
          E,
          A = !1;
        (r.ready = function () {
          (a = St.env("design")), O();
        }),
          (r.design = function () {
            (a = !0), setTimeout(O, 1e3);
          }),
          (r.preview = function () {
            (a = !1), O();
          }),
          (r.redraw = function () {
            (A = !0), O(), (A = !1);
          }),
          (r.destroy = S);
        function O() {
          (o = i.find(u)), o.length && (o.each(R), !E && (S(), _()));
        }
        function S() {
          St.resize.off(y), St.redraw.off(r.redraw);
        }
        function _() {
          St.resize.on(y), St.redraw.on(r.redraw);
        }
        function y() {
          o.filter(":visible").each(U);
        }
        function R(d, T) {
          var I = e(T),
            g = e.data(T, u);
          g ||
            (g = e.data(T, u, {
              index: 0,
              depth: 1,
              hasFocus: { keyboard: !1, mouse: !1 },
              el: I,
              config: {},
            })),
            (g.mask = I.children(".w-slider-mask")),
            (g.left = I.children(".w-slider-arrow-left")),
            (g.right = I.children(".w-slider-arrow-right")),
            (g.nav = I.children(".w-slider-nav")),
            (g.slides = g.mask.children(".w-slide")),
            g.slides.each(p.reset),
            A && (g.maskWidth = 0),
            I.attr("role") === void 0 && I.attr("role", "region"),
            I.attr("aria-label") === void 0 && I.attr("aria-label", "carousel");
          var X = g.mask.attr("id");
          if (
            (X || ((X = "w-slider-mask-" + d), g.mask.attr("id", X)),
            !a && !g.ariaLiveLabel && (g.ariaLiveLabel = e(b).appendTo(g.mask)),
            g.left.attr("role", "button"),
            g.left.attr("tabindex", "0"),
            g.left.attr("aria-controls", X),
            g.left.attr("aria-label") === void 0 &&
              g.left.attr("aria-label", "previous slide"),
            g.right.attr("role", "button"),
            g.right.attr("tabindex", "0"),
            g.right.attr("aria-controls", X),
            g.right.attr("aria-label") === void 0 &&
              g.right.attr("aria-label", "next slide"),
            !n.support.transform)
          ) {
            g.left.hide(), g.right.hide(), g.nav.hide(), (E = !0);
            return;
          }
          g.el.off(u),
            g.left.off(u),
            g.right.off(u),
            g.nav.off(u),
            D(g),
            a
              ? (g.el.on("setting" + u, h(g)), L(g), (g.hasTimer = !1))
              : (g.el.on("swipe" + u, h(g)),
                g.left.on("click" + u, j(g)),
                g.right.on("click" + u, Y(g)),
                g.left.on("keydown" + u, W(g, j)),
                g.right.on("keydown" + u, W(g, Y)),
                g.nav.on("keydown" + u, "> div", h(g)),
                g.config.autoplay &&
                  !g.hasTimer &&
                  ((g.hasTimer = !0), (g.timerCount = 1), V(g)),
                g.el.on("mouseenter" + u, q(g, !0, "mouse")),
                g.el.on("focusin" + u, q(g, !0, "keyboard")),
                g.el.on("mouseleave" + u, q(g, !1, "mouse")),
                g.el.on("focusout" + u, q(g, !1, "keyboard"))),
            g.nav.on("click" + u, "> div", h(g)),
            s ||
              g.mask
                .contents()
                .filter(function () {
                  return this.nodeType === 3;
                })
                .remove();
          var $ = I.filter(":hidden");
          $.addClass(v);
          var ee = I.parents(":hidden");
          ee.addClass(v), A || U(d, T), $.removeClass(v), ee.removeClass(v);
        }
        function D(d) {
          var T = {};
          (T.crossOver = 0),
            (T.animation = d.el.attr("data-animation") || "slide"),
            T.animation === "outin" &&
              ((T.animation = "cross"), (T.crossOver = 0.5)),
            (T.easing = d.el.attr("data-easing") || "ease");
          var I = d.el.attr("data-duration");
          if (
            ((T.duration = I != null ? parseInt(I, 10) : 500),
            F(d.el.attr("data-infinite")) && (T.infinite = !0),
            F(d.el.attr("data-disable-swipe")) && (T.disableSwipe = !0),
            F(d.el.attr("data-hide-arrows"))
              ? (T.hideArrows = !0)
              : d.config.hideArrows && (d.left.show(), d.right.show()),
            F(d.el.attr("data-autoplay")))
          ) {
            (T.autoplay = !0),
              (T.delay = parseInt(d.el.attr("data-delay"), 10) || 2e3),
              (T.timerMax = parseInt(d.el.attr("data-autoplay-limit"), 10));
            var g = "mousedown" + u + " touchstart" + u;
            a ||
              d.el.off(g).one(g, function () {
                L(d);
              });
          }
          var X = d.right.width();
          (T.edge = X ? X + 40 : 100), (d.config = T);
        }
        function F(d) {
          return d === "1" || d === "true";
        }
        function q(d, T, I) {
          return function (g) {
            if (T) d.hasFocus[I] = T;
            else if (
              e.contains(d.el.get(0), g.relatedTarget) ||
              ((d.hasFocus[I] = T),
              (d.hasFocus.mouse && I === "keyboard") ||
                (d.hasFocus.keyboard && I === "mouse"))
            )
              return;
            T
              ? (d.ariaLiveLabel.attr("aria-live", "polite"),
                d.hasTimer && L(d))
              : (d.ariaLiveLabel.attr("aria-live", "off"), d.hasTimer && V(d));
          };
        }
        function W(d, T) {
          return function (I) {
            switch (I.keyCode) {
              case ft.SPACE:
              case ft.ENTER:
                return T(d)(), I.preventDefault(), I.stopPropagation();
            }
          };
        }
        function j(d) {
          return function () {
            k(d, { index: d.index - 1, vector: -1 });
          };
        }
        function Y(d) {
          return function () {
            k(d, { index: d.index + 1, vector: 1 });
          };
        }
        function Z(d, T) {
          var I = null;
          T === d.slides.length && (O(), J(d)),
            t.each(d.anchors, function (g, X) {
              e(g.els).each(function ($, ee) {
                e(ee).index() === T && (I = X);
              });
            }),
            I != null && k(d, { index: I, immediate: !0 });
        }
        function V(d) {
          L(d);
          var T = d.config,
            I = T.timerMax;
          (I && d.timerCount++ > I) ||
            (d.timerId = window.setTimeout(function () {
              d.timerId == null || a || (Y(d)(), V(d));
            }, T.delay));
        }
        function L(d) {
          window.clearTimeout(d.timerId), (d.timerId = null);
        }
        function h(d) {
          return function (T, I) {
            I = I || {};
            var g = d.config;
            if (a && T.type === "setting") {
              if (I.select === "prev") return j(d)();
              if (I.select === "next") return Y(d)();
              if ((D(d), J(d), I.select == null)) return;
              Z(d, I.select);
              return;
            }
            if (T.type === "swipe")
              return g.disableSwipe || St.env("editor")
                ? void 0
                : I.direction === "left"
                ? Y(d)()
                : I.direction === "right"
                ? j(d)()
                : void 0;
            if (d.nav.has(T.target).length) {
              var X = e(T.target).index();
              if (
                (T.type === "click" && k(d, { index: X }), T.type === "keydown")
              )
                switch (T.keyCode) {
                  case ft.ENTER:
                  case ft.SPACE: {
                    k(d, { index: X }), T.preventDefault();
                    break;
                  }
                  case ft.ARROW_LEFT:
                  case ft.ARROW_UP: {
                    N(d.nav, Math.max(X - 1, 0)), T.preventDefault();
                    break;
                  }
                  case ft.ARROW_RIGHT:
                  case ft.ARROW_DOWN: {
                    N(d.nav, Math.min(X + 1, d.pages)), T.preventDefault();
                    break;
                  }
                  case ft.HOME: {
                    N(d.nav, 0), T.preventDefault();
                    break;
                  }
                  case ft.END: {
                    N(d.nav, d.pages), T.preventDefault();
                    break;
                  }
                  default:
                    return;
                }
            }
          };
        }
        function N(d, T) {
          var I = d.children().eq(T).focus();
          d.children().not(I);
        }
        function k(d, T) {
          T = T || {};
          var I = d.config,
            g = d.anchors;
          d.previous = d.index;
          var X = T.index,
            $ = {};
          X < 0
            ? ((X = g.length - 1),
              I.infinite &&
                (($.x = -d.endX), ($.from = 0), ($.to = g[0].width)))
            : X >= g.length &&
              ((X = 0),
              I.infinite &&
                (($.x = g[g.length - 1].width),
                ($.from = -g[g.length - 1].x),
                ($.to = $.from - $.x))),
            (d.index = X);
          var ee = d.nav
            .children()
            .eq(X)
            .addClass("w-active")
            .attr("aria-pressed", "true")
            .attr("tabindex", "0");
          d.nav
            .children()
            .not(ee)
            .removeClass("w-active")
            .attr("aria-pressed", "false")
            .attr("tabindex", "-1"),
            I.hideArrows &&
              (d.index === g.length - 1 ? d.right.hide() : d.right.show(),
              d.index === 0 ? d.left.hide() : d.left.show());
          var ue = d.offsetX || 0,
            _e = (d.offsetX = -g[d.index].x),
            oe = { x: _e, opacity: 1, visibility: "" },
            m = e(g[d.index].els),
            B = e(g[d.previous] && g[d.previous].els),
            Q = d.slides.not(m),
            z = I.animation,
            fe = I.easing,
            Fe = Math.round(I.duration),
            He = T.vector || (d.index > d.previous ? 1 : -1),
            l = "opacity " + Fe + "ms " + fe,
            w = "transform " + Fe + "ms " + fe;
          if (
            (m.find(W_).removeAttr("tabindex"),
            m.removeAttr("aria-hidden"),
            m.find("*").removeAttr("aria-hidden"),
            Q.find(W_).attr("tabindex", "-1"),
            Q.attr("aria-hidden", "true"),
            Q.find("*").attr("aria-hidden", "true"),
            a || (m.each(p.intro), Q.each(p.outro)),
            T.immediate && !A)
          ) {
            n(m).set(oe), x();
            return;
          }
          if (d.index === d.previous) return;
          if (
            (a || d.ariaLiveLabel.text(`Slide ${X + 1} of ${g.length}.`),
            z === "cross")
          ) {
            var C = Math.round(Fe - Fe * I.crossOver),
              P = Math.round(Fe - C);
            (l = "opacity " + C + "ms " + fe),
              n(B).set({ visibility: "" }).add(l).start({ opacity: 0 }),
              n(m)
                .set({ visibility: "", x: _e, opacity: 0, zIndex: d.depth++ })
                .add(l)
                .wait(P)
                .then({ opacity: 1 })
                .then(x);
            return;
          }
          if (z === "fade") {
            n(B).set({ visibility: "" }).stop(),
              n(m)
                .set({ visibility: "", x: _e, opacity: 0, zIndex: d.depth++ })
                .add(l)
                .start({ opacity: 1 })
                .then(x);
            return;
          }
          if (z === "over") {
            (oe = { x: d.endX }),
              n(B).set({ visibility: "" }).stop(),
              n(m)
                .set({
                  visibility: "",
                  zIndex: d.depth++,
                  x: _e + g[d.index].width * He,
                })
                .add(w)
                .start({ x: _e })
                .then(x);
            return;
          }
          I.infinite && $.x
            ? (n(d.slides.not(B))
                .set({ visibility: "", x: $.x })
                .add(w)
                .start({ x: _e }),
              n(B).set({ visibility: "", x: $.from }).add(w).start({ x: $.to }),
              (d.shifted = B))
            : (I.infinite &&
                d.shifted &&
                (n(d.shifted).set({ visibility: "", x: ue }),
                (d.shifted = null)),
              n(d.slides).set({ visibility: "" }).add(w).start({ x: _e }));
          function x() {
            (m = e(g[d.index].els)),
              (Q = d.slides.not(m)),
              z !== "slide" && (oe.visibility = "hidden"),
              n(Q).set(oe);
          }
        }
        function U(d, T) {
          var I = e.data(T, u);
          if (I) {
            if (G(I)) return J(I);
            a && H(I) && J(I);
          }
        }
        function J(d) {
          var T = 1,
            I = 0,
            g = 0,
            X = 0,
            $ = d.maskWidth,
            ee = $ - d.config.edge;
          ee < 0 && (ee = 0),
            (d.anchors = [{ els: [], x: 0, width: 0 }]),
            d.slides.each(function (_e, oe) {
              g - I > ee &&
                (T++,
                (I += $),
                (d.anchors[T - 1] = { els: [], x: g, width: 0 })),
                (X = e(oe).outerWidth(!0)),
                (g += X),
                (d.anchors[T - 1].width += X),
                d.anchors[T - 1].els.push(oe);
              var m = _e + 1 + " of " + d.slides.length;
              e(oe).attr("aria-label", m), e(oe).attr("role", "group");
            }),
            (d.endX = g),
            a && (d.pages = null),
            d.nav.length && d.pages !== T && ((d.pages = T), re(d));
          var ue = d.index;
          ue >= T && (ue = T - 1), k(d, { immediate: !0, index: ue });
        }
        function re(d) {
          var T = [],
            I,
            g = d.el.attr("data-nav-spacing");
          g && (g = parseFloat(g) + "px");
          for (var X = 0, $ = d.pages; X < $; X++)
            (I = e(f)),
              I.attr("aria-label", "Show slide " + (X + 1) + " of " + $)
                .attr("aria-pressed", "false")
                .attr("role", "button")
                .attr("tabindex", "-1"),
              d.nav.hasClass("w-num") && I.text(X + 1),
              g != null && I.css({ "margin-left": g, "margin-right": g }),
              T.push(I);
          d.nav.empty().append(T);
        }
        function G(d) {
          var T = d.mask.width();
          return d.maskWidth !== T ? ((d.maskWidth = T), !0) : !1;
        }
        function H(d) {
          var T = 0;
          return (
            d.slides.each(function (I, g) {
              T += e(g).outerWidth(!0);
            }),
            d.slidesWidth !== T ? ((d.slidesWidth = T), !0) : !1
          );
        }
        return r;
      })
    );
  });
  var z_ = c((dz, j_) => {
    "use strict";
    var Ct = Ne(),
      BU = br();
    Ct.define(
      "tabs",
      (j_.exports = function (e) {
        var t = {},
          r = e.tram,
          n = e(document),
          i,
          o,
          a = Ct.env,
          s = a.safari,
          u = a(),
          f = "data-w-tab",
          b = "data-w-pane",
          v = ".w-tabs",
          p = "w--current",
          E = "w--tab-active",
          A = BU.triggers,
          O = !1;
        (t.ready = t.design = t.preview = S),
          (t.redraw = function () {
            (O = !0), S(), (O = !1);
          }),
          (t.destroy = function () {
            (i = n.find(v)), i.length && (i.each(R), _());
          });
        function S() {
          (o = u && Ct.env("design")),
            (i = n.find(v)),
            i.length &&
              (i.each(D), Ct.env("preview") && !O && i.each(R), _(), y());
        }
        function _() {
          Ct.redraw.off(t.redraw);
        }
        function y() {
          Ct.redraw.on(t.redraw);
        }
        function R(V, L) {
          var h = e.data(L, v);
          h &&
            (h.links && h.links.each(A.reset),
            h.panes && h.panes.each(A.reset));
        }
        function D(V, L) {
          var h = v.substr(1) + "-" + V,
            N = e(L),
            k = e.data(L, v);
          if (
            (k || (k = e.data(L, v, { el: N, config: {} })),
            (k.current = null),
            (k.tabIdentifier = h + "-" + f),
            (k.paneIdentifier = h + "-" + b),
            (k.menu = N.children(".w-tab-menu")),
            (k.links = k.menu.children(".w-tab-link")),
            (k.content = N.children(".w-tab-content")),
            (k.panes = k.content.children(".w-tab-pane")),
            k.el.off(v),
            k.links.off(v),
            k.menu.attr("role", "tablist"),
            k.links.attr("tabindex", "-1"),
            F(k),
            !o)
          ) {
            k.links.on("click" + v, W(k)), k.links.on("keydown" + v, j(k));
            var U = k.links.filter("." + p),
              J = U.attr(f);
            J && Y(k, { tab: J, immediate: !0 });
          }
        }
        function F(V) {
          var L = {};
          L.easing = V.el.attr("data-easing") || "ease";
          var h = parseInt(V.el.attr("data-duration-in"), 10);
          h = L.intro = h === h ? h : 0;
          var N = parseInt(V.el.attr("data-duration-out"), 10);
          (N = L.outro = N === N ? N : 0),
            (L.immediate = !h && !N),
            (V.config = L);
        }
        function q(V) {
          var L = V.current;
          return Array.prototype.findIndex.call(
            V.links,
            (h) => h.getAttribute(f) === L,
            null
          );
        }
        function W(V) {
          return function (L) {
            L.preventDefault();
            var h = L.currentTarget.getAttribute(f);
            h && Y(V, { tab: h });
          };
        }
        function j(V) {
          return function (L) {
            var h = q(V),
              N = L.key,
              k = {
                ArrowLeft: h - 1,
                ArrowUp: h - 1,
                ArrowRight: h + 1,
                ArrowDown: h + 1,
                End: V.links.length - 1,
                Home: 0,
              };
            if (N in k) {
              L.preventDefault();
              var U = k[N];
              U === -1 && (U = V.links.length - 1),
                U === V.links.length && (U = 0);
              var J = V.links[U],
                re = J.getAttribute(f);
              re && Y(V, { tab: re });
            }
          };
        }
        function Y(V, L) {
          L = L || {};
          var h = V.config,
            N = h.easing,
            k = L.tab;
          if (k !== V.current) {
            V.current = k;
            var U;
            V.links.each(function (I, g) {
              var X = e(g);
              if (L.immediate || h.immediate) {
                var $ = V.panes[I];
                g.id || (g.id = V.tabIdentifier + "-" + I),
                  $.id || ($.id = V.paneIdentifier + "-" + I),
                  (g.href = "#" + $.id),
                  g.setAttribute("role", "tab"),
                  g.setAttribute("aria-controls", $.id),
                  g.setAttribute("aria-selected", "false"),
                  $.setAttribute("role", "tabpanel"),
                  $.setAttribute("aria-labelledby", g.id);
              }
              g.getAttribute(f) === k
                ? ((U = g),
                  X.addClass(p)
                    .removeAttr("tabindex")
                    .attr({ "aria-selected": "true" })
                    .each(A.intro))
                : X.hasClass(p) &&
                  X.removeClass(p)
                    .attr({ tabindex: "-1", "aria-selected": "false" })
                    .each(A.outro);
            });
            var J = [],
              re = [];
            V.panes.each(function (I, g) {
              var X = e(g);
              g.getAttribute(f) === k ? J.push(g) : X.hasClass(E) && re.push(g);
            });
            var G = e(J),
              H = e(re);
            if (L.immediate || h.immediate) {
              G.addClass(E).each(A.intro),
                H.removeClass(E),
                O || Ct.redraw.up();
              return;
            } else {
              var d = window.scrollX,
                T = window.scrollY;
              U.focus(), window.scrollTo(d, T);
            }
            H.length && h.outro
              ? (H.each(A.outro),
                r(H)
                  .add("opacity " + h.outro + "ms " + N, { fallback: s })
                  .start({ opacity: 0 })
                  .then(() => Z(h, H, G)))
              : Z(h, H, G);
          }
        }
        function Z(V, L, h) {
          if (
            (L.removeClass(E).css({
              opacity: "",
              transition: "",
              transform: "",
              width: "",
              height: "",
            }),
            h.addClass(E).each(A.intro),
            Ct.redraw.up(),
            !V.intro)
          )
            return r(h).set({ opacity: 1 });
          r(h)
            .set({ opacity: 0 })
            .redraw()
            .add("opacity " + V.intro + "ms " + V.easing, { fallback: s })
            .start({ opacity: 1 });
        }
        return t;
      })
    );
  });
  var Y_ = c((pz, K_) => {
    "use strict";
    var Ut = Ne();
    Ut.define(
      "maps",
      (K_.exports = function (e, t) {
        var r = {},
          n = e(document),
          i = null,
          o,
          a = ".w-widget-map",
          s = "";
        (r.ready = function () {
          Ut.env() || u();
        }),
          (r.destroy = f);
        function u() {
          if (((o = n.find(a)), !o.length)) return;
          i === null
            ? (e.getScript(
                "https://maps.googleapis.com/maps/api/js?v=3.31&sensor=false&callback=_wf_maps_loaded&key=" +
                  s
              ),
              (window._wf_maps_loaded = S))
            : S();
          function S() {
            (window._wf_maps_loaded = function () {}),
              (i = window.google),
              o.each(v),
              f(),
              b();
          }
        }
        function f() {
          Ut.resize.off(p), Ut.redraw.off(p);
        }
        function b() {
          Ut.resize.on(p), Ut.redraw.on(p);
        }
        function v(S, _) {
          var y = e(_).data();
          O(_, y);
        }
        function p() {
          o.each(E);
        }
        function E(S, _) {
          var y = O(_);
          i.maps.event.trigger(y.map, "resize"), y.setMapPosition();
        }
        var A = "w-widget-map";
        function O(S, _) {
          var y = e.data(S, A);
          if (y) return y;
          var R = typeof _.widgetTooltip == "string" && _.widgetTooltip !== "",
            D = e(S),
            F = D.attr("title"),
            q = "Map pin";
          F && _.widgetTooltip
            ? (q = `Map pin on ${F} showing location of ${_.widgetTooltip}`)
            : F && !_.widgetTooltip
            ? (q = `Map pin on ${F}`)
            : !F &&
              _.widgetTooltip &&
              (q = `Map pin showing location of ${_.widgetTooltip}`),
            (y = e.data(S, A, {
              latLng: "51.511214,-0.119824",
              tooltip: "",
              style: "roadmap",
              zoom: 12,
              marker: new i.maps.Marker({ draggable: !1, title: q }),
              infowindow: new i.maps.InfoWindow({ disableAutoPan: !0 }),
            })),
            typeof _.widgetLatlng == "string" &&
              _.widgetLatlng.length !== "" &&
              (y.latLng = _.widgetLatlng);
          var W = y.latLng.split(","),
            j = new i.maps.LatLng(W[0], W[1]);
          y.latLngObj = j;
          var Y = !(Ut.env.touch && !_.enableTouch);
          if (
            ((y.map = new i.maps.Map(S, {
              center: y.latLngObj,
              zoom: y.zoom,
              maxZoom: 20,
              mapTypeControl: !1,
              panControl: !1,
              streetViewControl: !1,
              scrollwheel: _.enableScroll,
              draggable: Y,
              zoomControl: !0,
              zoomControlOptions: { style: i.maps.ZoomControlStyle.SMALL },
              mapTypeId: y.style,
            })),
            y.marker.setMap(y.map),
            (y.setMapPosition = function () {
              y.map.setCenter(y.latLngObj);
              var h = 0,
                N = 0,
                k = D.css([
                  "paddingTop",
                  "paddingRight",
                  "paddingBottom",
                  "paddingLeft",
                ]);
              (h -= parseInt(k.paddingLeft, 10)),
                (h += parseInt(k.paddingRight, 10)),
                (N -= parseInt(k.paddingTop, 10)),
                (N += parseInt(k.paddingBottom, 10)),
                (h || N) && y.map.panBy(h, N),
                D.css("position", "");
            }),
            i.maps.event.addListener(y.map, "tilesloaded", function () {
              i.maps.event.clearListeners(y.map, "tilesloaded"),
                y.setMapPosition();
            }),
            y.setMapPosition(),
            y.marker.setPosition(y.latLngObj),
            y.infowindow.setPosition(y.latLngObj),
            R)
          ) {
            var Z = _.widgetTooltip;
            (y.tooltip = Z),
              y.infowindow.setContent(Z),
              y.infowindowOpen ||
                (y.infowindow.open(y.map, y.marker), (y.infowindowOpen = !0));
          }
          var V = _.widgetStyle;
          V && y.map.setMapTypeId(V);
          var L = _.widgetZoom;
          return (
            L != null && ((y.zoom = L), y.map.setZoom(Number(L))),
            i.maps.event.addListener(y.marker, "click", function () {
              window.open(
                "https://maps.google.com/?z=" + y.zoom + "&daddr=" + y.latLng
              );
            }),
            y
          );
        }
        return r;
      })
    );
  });
  js();
  Ks();
  $s();
  Js();
  br();
  L_();
  P_();
  M_();
  D_();
  V_();
  B_();
  X_();
  z_();
  Y_();
})();
/*!
 * tram.js v0.8.2-global
 * Cross-browser CSS3 transitions in JavaScript
 * https://github.com/bkwld/tram
 * MIT License
 */
/*!
 * Webflow._ (aka) Underscore.js 1.6.0 (custom build)
 *
 * http://underscorejs.org
 * (c) 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Underscore may be freely distributed under the MIT license.
 * @license MIT
 */
/*! Bundled license information:

timm/lib/timm.js:
  (*!
   * Timm
   *
   * Immutability helpers with fast reads and acceptable writes.
   *
   * @copyright Guillermo Grau Panea 2016
   * @license MIT
   *)
*/
/**
 * ----------------------------------------------------------------------
 * Webflow: Interactions 2.0: Init
 */
Webflow.require("ix2").init({
  events: {
    e: {
      id: "e",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-2",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        selector: ".slider-arrow",
        originalId: "20db4045-bf75-5f63-8567-3cbdc526051b",
        appliesTo: "CLASS",
      },
      targets: [
        {
          selector: ".slider-arrow",
          originalId: "20db4045-bf75-5f63-8567-3cbdc526051b",
          appliesTo: "CLASS",
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1704864883632,
    },
    "e-2": {
      id: "e-2",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-2",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        selector: ".slider-arrow",
        originalId: "20db4045-bf75-5f63-8567-3cbdc526051b",
        appliesTo: "CLASS",
      },
      targets: [
        {
          selector: ".slider-arrow",
          originalId: "20db4045-bf75-5f63-8567-3cbdc526051b",
          appliesTo: "CLASS",
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1704864883633,
    },
    "e-5": {
      id: "e-5",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-4",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-6",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "2aed732a-8552-86aa-adca-13ecb0b020cb",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "2aed732a-8552-86aa-adca-13ecb0b020cb",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1704998314300,
    },
    "e-6": {
      id: "e-6",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_SECOND_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-5",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-5",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "2aed732a-8552-86aa-adca-13ecb0b020cb",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "2aed732a-8552-86aa-adca-13ecb0b020cb",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1704998314300,
    },
    "e-7": {
      id: "e-7",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-6",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-8",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "7d397d8f-a30a-5534-4e52-d85a3dcc9e4c",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "7d397d8f-a30a-5534-4e52-d85a3dcc9e4c",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: true,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1705036661321,
    },
    "e-9": {
      id: "e-9",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-7",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-10",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "65a9f49b837859a8d466af3c|1921a297-8864-3156-68df-446e86f975e2",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "65a9f49b837859a8d466af3c|1921a297-8864-3156-68df-446e86f975e2",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: true,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1705054986130,
    },
    "e-11": {
      id: "e-11",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLLING_IN_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_CONTINUOUS_ACTION",
        config: { actionListId: "a-8", affectedElements: {}, duration: 0 },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "65a9f49b837859a8d466af3c|4aa60b53-ef46-6595-1620-9622fe6576c6",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "65a9f49b837859a8d466af3c|4aa60b53-ef46-6595-1620-9622fe6576c6",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: [
        {
          continuousParameterGroupId: "a-8-p",
          smoothing: 50,
          startsEntering: true,
          addStartOffset: false,
          addOffsetValue: 50,
          startsExiting: false,
          addEndOffset: false,
          endOffsetValue: 50,
        },
      ],
      createdOn: 1705121454360,
    },
    "e-14": {
      id: "e-14",
      name: "",
      animationType: "custom",
      eventTypeId: "TAB_ACTIVE",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-9",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-15",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        selector: ".our-location-tab-link",
        originalId:
          "65a9f49b837859a8d466af40|17d55c4e-41e6-b1d5-b178-63fe0042a451",
        appliesTo: "CLASS",
      },
      targets: [
        {
          selector: ".our-location-tab-link",
          originalId:
            "65a9f49b837859a8d466af40|17d55c4e-41e6-b1d5-b178-63fe0042a451",
          appliesTo: "CLASS",
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1706124186658,
    },
    "e-15": {
      id: "e-15",
      name: "",
      animationType: "custom",
      eventTypeId: "TAB_INACTIVE",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-10",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-14",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        selector: ".our-location-tab-link",
        originalId:
          "65a9f49b837859a8d466af40|17d55c4e-41e6-b1d5-b178-63fe0042a451",
        appliesTo: "CLASS",
      },
      targets: [
        {
          selector: ".our-location-tab-link",
          originalId:
            "65a9f49b837859a8d466af40|17d55c4e-41e6-b1d5-b178-63fe0042a451",
          appliesTo: "CLASS",
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1706124186658,
    },
    "e-16": {
      id: "e-16",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-17" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "65a9f49b837859a8d466af30|aa3fcdcf-255a-31a2-089d-f9af65f9fee3",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "65a9f49b837859a8d466af30|aa3fcdcf-255a-31a2-089d-f9af65f9fee3",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 50,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1706156550490,
    },
    "e-18": {
      id: "e-18",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-19" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "65a9f49b837859a8d466af30|6404fa94-b6a4-97b0-4a44-cd36138e0345",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "65a9f49b837859a8d466af30|6404fa94-b6a4-97b0-4a44-cd36138e0345",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 20,
        scrollOffsetUnit: "%",
        delay: 100,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1706156569917,
    },
    "e-20": {
      id: "e-20",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-21" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "65a9f49b837859a8d466af30|4914e53e-69bf-1f49-d2b0-065ea9f52d2d",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "65a9f49b837859a8d466af30|4914e53e-69bf-1f49-d2b0-065ea9f52d2d",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 20,
        scrollOffsetUnit: "%",
        delay: 150,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1706156588821,
    },
    "e-22": {
      id: "e-22",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-23" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "65a9f49b837859a8d466af30|4df0b2b6-31b0-817c-2c28-561ff2fc6c48",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "65a9f49b837859a8d466af30|4df0b2b6-31b0-817c-2c28-561ff2fc6c48",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 20,
        scrollOffsetUnit: "%",
        delay: 200,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1706156608679,
    },
    "e-24": {
      id: "e-24",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-25" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        selector: ".home-hero-image-wrap",
        originalId:
          "65a9f49b837859a8d466af30|91009758-ef07-4b7b-857c-6e6e9bec83c5",
        appliesTo: "CLASS",
      },
      targets: [
        {
          id: "65a9f49b837859a8d466af30|91009758-ef07-4b7b-857c-6e6e9bec83c5",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 20,
        scrollOffsetUnit: "%",
        delay: 250,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1706156691150,
    },
    "e-26": {
      id: "e-26",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-27" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "7d397d8f-a30a-5534-4e52-d85a3dcc9e4c",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "7d397d8f-a30a-5534-4e52-d85a3dcc9e4c",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 20,
        scrollOffsetUnit: "%",
        delay: 0,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1706157540381,
    },
    "e-28": {
      id: "e-28",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-29" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "7b15d134-3226-4119-25d5-fc52d7989f77",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "7b15d134-3226-4119-25d5-fc52d7989f77",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 20,
        scrollOffsetUnit: "%",
        delay: 0,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1706157565205,
    },
    "e-30": {
      id: "e-30",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-31" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "65a9f49b837859a8d466af30|66922db8-d25b-1b43-89d1-c9540f93b7d8",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "65a9f49b837859a8d466af30|66922db8-d25b-1b43-89d1-c9540f93b7d8",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 20,
        scrollOffsetUnit: "%",
        delay: 0,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1706157630886,
    },
    "e-32": {
      id: "e-32",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-33" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "65a9f49b837859a8d466af30|dce10c11-8eac-92c3-e604-633cc1622349",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "65a9f49b837859a8d466af30|dce10c11-8eac-92c3-e604-633cc1622349",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 20,
        scrollOffsetUnit: "%",
        delay: 0,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1706157646815,
    },
    "e-34": {
      id: "e-34",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-35" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "65a9f49b837859a8d466af30|4ec98f2b-9704-ab13-f4da-ec21161794d4",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "65a9f49b837859a8d466af30|4ec98f2b-9704-ab13-f4da-ec21161794d4",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 20,
        scrollOffsetUnit: "%",
        delay: 100,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1706157720409,
    },
    "e-36": {
      id: "e-36",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-37" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "65a9f49b837859a8d466af30|5ea11e30-384a-8ff1-c154-03a497780593",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "65a9f49b837859a8d466af30|5ea11e30-384a-8ff1-c154-03a497780593",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 20,
        scrollOffsetUnit: "%",
        delay: 200,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1706157748835,
    },
    "e-38": {
      id: "e-38",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-39" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "65a9f49b837859a8d466af30|bb68e3f0-6c69-fa5c-6e62-ab510ed4d0e2",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "65a9f49b837859a8d466af30|bb68e3f0-6c69-fa5c-6e62-ab510ed4d0e2",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 20,
        scrollOffsetUnit: "%",
        delay: 400,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1706157762941,
    },
    "e-41": {
      id: "e-41",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-42" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "65a9f49b837859a8d466af30|5338289f-d808-eafb-6467-58853b02b937",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "65a9f49b837859a8d466af30|5338289f-d808-eafb-6467-58853b02b937",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 20,
        scrollOffsetUnit: "%",
        delay: 0,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1706158929331,
    },
    "e-43": {
      id: "e-43",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GROW_EFFECT",
        instant: false,
        config: { actionListId: "growIn", autoStopEventId: "e-44" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "65a9f49b837859a8d466af30|4f2b0e08-53ed-9504-6ce3-45220bf2a1f9",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "65a9f49b837859a8d466af30|4f2b0e08-53ed-9504-6ce3-45220bf2a1f9",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 20,
        scrollOffsetUnit: "%",
        delay: 0,
        direction: null,
        effectIn: true,
      },
      createdOn: 1706158946031,
    },
    "e-47": {
      id: "e-47",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GROW_EFFECT",
        instant: false,
        config: { actionListId: "growIn", autoStopEventId: "e-48" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "65a9f49b837859a8d466af30|a7ce71aa-2ed4-fb5f-0541-5a0760168b97",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "65a9f49b837859a8d466af30|a7ce71aa-2ed4-fb5f-0541-5a0760168b97",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 20,
        scrollOffsetUnit: "%",
        delay: 0,
        direction: null,
        effectIn: true,
      },
      createdOn: 1706160406741,
    },
    "e-49": {
      id: "e-49",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-50" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        selector: ".feature-two-item-content-inner",
        originalId:
          "65a9f49b837859a8d466af30|9644e94e-98f7-ac76-9eaf-e4845d4bfc50",
        appliesTo: "CLASS",
      },
      targets: [
        {
          selector: ".feature-two-item-content-inner",
          originalId:
            "65a9f49b837859a8d466af30|9644e94e-98f7-ac76-9eaf-e4845d4bfc50",
          appliesTo: "CLASS",
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 20,
        scrollOffsetUnit: "%",
        delay: 0,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1706161004609,
    },
    "e-51": {
      id: "e-51",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-52" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "65a9f49b837859a8d466af30|8aa97cb6-034d-075f-333e-f27fd7956089",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "65a9f49b837859a8d466af30|8aa97cb6-034d-075f-333e-f27fd7956089",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 20,
        scrollOffsetUnit: "%",
        delay: 0,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1706168618604,
    },
    "e-53": {
      id: "e-53",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-54" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "65a9f49b837859a8d466af30|5468d97b-443d-d50d-4d62-8d456fb79697",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "65a9f49b837859a8d466af30|5468d97b-443d-d50d-4d62-8d456fb79697",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 20,
        scrollOffsetUnit: "%",
        delay: 50,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1706168631435,
    },
    "e-55": {
      id: "e-55",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-56" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "65a9f49b837859a8d466af30|35d96522-68d9-1c50-34a0-551a37b2e674",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "65a9f49b837859a8d466af30|35d96522-68d9-1c50-34a0-551a37b2e674",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 20,
        scrollOffsetUnit: "%",
        delay: 0,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1706168648150,
    },
    "e-57": {
      id: "e-57",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GROW_EFFECT",
        instant: false,
        config: { actionListId: "growIn", autoStopEventId: "e-58" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "65a9f49b837859a8d466af30|8ee54a8f-4443-5260-589a-7ab68a96f630",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "65a9f49b837859a8d466af30|8ee54a8f-4443-5260-589a-7ab68a96f630",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 20,
        scrollOffsetUnit: "%",
        delay: 0,
        direction: null,
        effectIn: true,
      },
      createdOn: 1706168692612,
    },
    "e-59": {
      id: "e-59",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GROW_EFFECT",
        instant: false,
        config: { actionListId: "growIn", autoStopEventId: "e-60" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "65a9f49b837859a8d466af30|e52da5bd-ecf1-1125-962a-09f5f3ff6b00",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "65a9f49b837859a8d466af30|e52da5bd-ecf1-1125-962a-09f5f3ff6b00",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 20,
        scrollOffsetUnit: "%",
        delay: 0,
        direction: null,
        effectIn: true,
      },
      createdOn: 1706168757297,
    },
    "e-61": {
      id: "e-61",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-62" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "65a9f49b837859a8d466af30|40c77d90-6e78-c112-dd18-1f654aeca66e",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "65a9f49b837859a8d466af30|40c77d90-6e78-c112-dd18-1f654aeca66e",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 20,
        scrollOffsetUnit: "%",
        delay: 0,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1706168909685,
    },
    "e-65": {
      id: "e-65",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-66" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "bac2fd5a-c529-ad8c-8565-23a948016e88",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "bac2fd5a-c529-ad8c-8565-23a948016e88",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 20,
        scrollOffsetUnit: "%",
        delay: 0,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1706169059620,
    },
    "e-67": {
      id: "e-67",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-68" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "ccb61aa3-6690-e3f6-cdcb-86f7f4203e2b",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "ccb61aa3-6690-e3f6-cdcb-86f7f4203e2b",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 20,
        scrollOffsetUnit: "%",
        delay: 50,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1706169118641,
    },
    "e-69": {
      id: "e-69",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-12",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-70",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "218c0a69-4c8c-5a9e-ed3c-d126a579ab18",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "218c0a69-4c8c-5a9e-ed3c-d126a579ab18",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1706171769139,
    },
    "e-70": {
      id: "e-70",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-13",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-69",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "218c0a69-4c8c-5a9e-ed3c-d126a579ab18",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "218c0a69-4c8c-5a9e-ed3c-d126a579ab18",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1706171769139,
    },
    "e-73": {
      id: "e-73",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-74" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "65a9f49b837859a8d466af3c|634ce6fd-85f8-3fab-bf7a-aa95d4de85c3",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "65a9f49b837859a8d466af3c|634ce6fd-85f8-3fab-bf7a-aa95d4de85c3",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 100,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1706239403746,
    },
    "e-75": {
      id: "e-75",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-76" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "65a9f49b837859a8d466af3c|5ce1c71e-0a49-a5c5-80db-49d154e94723",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "65a9f49b837859a8d466af3c|5ce1c71e-0a49-a5c5-80db-49d154e94723",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 20,
        scrollOffsetUnit: "%",
        delay: 150,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1706239428450,
    },
    "e-77": {
      id: "e-77",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-78" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "65a9f49b837859a8d466af3c|87b6683b-e274-36b1-b809-51439f1be67b",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "65a9f49b837859a8d466af3c|87b6683b-e274-36b1-b809-51439f1be67b",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 20,
        scrollOffsetUnit: "%",
        delay: 200,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1706239507274,
    },
    "e-79": {
      id: "e-79",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-80" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "65a9f49b837859a8d466af3c|74162f9c-e11b-08f1-7c7e-687475b1ff36",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "65a9f49b837859a8d466af3c|74162f9c-e11b-08f1-7c7e-687475b1ff36",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 20,
        scrollOffsetUnit: "%",
        delay: 0,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1706239611059,
    },
    "e-81": {
      id: "e-81",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-82" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "65a9f49b837859a8d466af3c|e95a2d97-0876-5d2d-acfc-aa3dd204578c",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "65a9f49b837859a8d466af3c|e95a2d97-0876-5d2d-acfc-aa3dd204578c",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 20,
        scrollOffsetUnit: "%",
        delay: 50,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1706239631609,
    },
    "e-83": {
      id: "e-83",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-84" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "65a9f49b837859a8d466af3c|b6b89d41-96a0-a800-7879-6f3bb2b1c0a1",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "65a9f49b837859a8d466af3c|b6b89d41-96a0-a800-7879-6f3bb2b1c0a1",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 20,
        scrollOffsetUnit: "%",
        delay: 100,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1706239650154,
    },
    "e-85": {
      id: "e-85",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-86" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "65a9f49b837859a8d466af3c|05413448-f93c-3a92-9eb2-54a9a3f85827",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "65a9f49b837859a8d466af3c|05413448-f93c-3a92-9eb2-54a9a3f85827",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 20,
        scrollOffsetUnit: "%",
        delay: 0,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1706239965465,
    },
    "e-87": {
      id: "e-87",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-88" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "65a9f49b837859a8d466af3c|4ea6b140-cfd8-ef53-64b1-4cd4ba77dd63",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "65a9f49b837859a8d466af3c|4ea6b140-cfd8-ef53-64b1-4cd4ba77dd63",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 20,
        scrollOffsetUnit: "%",
        delay: 50,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1706239986680,
    },
    "e-89": {
      id: "e-89",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-90" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "65a9f49b837859a8d466af3c|6a821951-0613-269d-87ef-eedf0f37c731",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "65a9f49b837859a8d466af3c|6a821951-0613-269d-87ef-eedf0f37c731",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 20,
        scrollOffsetUnit: "%",
        delay: 0,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1706240030054,
    },
    "e-91": {
      id: "e-91",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-92" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "65a9f49b837859a8d466af3c|69c9a9c0-18dd-49e9-2078-2dc06bde593b",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "65a9f49b837859a8d466af3c|69c9a9c0-18dd-49e9-2078-2dc06bde593b",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 20,
        scrollOffsetUnit: "%",
        delay: 50,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1706240046667,
    },
    "e-93": {
      id: "e-93",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GROW_EFFECT",
        instant: false,
        config: { actionListId: "growIn", autoStopEventId: "e-94" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "65a9f49b837859a8d466af3c|6d7f7b62-dccb-a119-1f8a-379da8d44ef7",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "65a9f49b837859a8d466af3c|6d7f7b62-dccb-a119-1f8a-379da8d44ef7",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 20,
        scrollOffsetUnit: "%",
        delay: 100,
        direction: null,
        effectIn: true,
      },
      createdOn: 1706240070337,
    },
    "e-95": {
      id: "e-95",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-96" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "b6395dac-0396-8136-bba5-f45782815da9",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "b6395dac-0396-8136-bba5-f45782815da9",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 50,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1706241382036,
    },
    "e-97": {
      id: "e-97",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-98" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "b6395dac-0396-8136-bba5-f45782815df5",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "b6395dac-0396-8136-bba5-f45782815df5",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 100,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1706241396364,
    },
    "e-99": {
      id: "e-99",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-100" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "65a9f49b837859a8d466af40|1abef2b9-529d-64bc-9efb-705f60f7d74a",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "65a9f49b837859a8d466af40|1abef2b9-529d-64bc-9efb-705f60f7d74a",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 50,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1706242005671,
    },
    "e-101": {
      id: "e-101",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-102" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "65a9f49b837859a8d466af40|b8dfd4e4-cfc2-4b79-1345-c97fafbcb7a4",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "65a9f49b837859a8d466af40|b8dfd4e4-cfc2-4b79-1345-c97fafbcb7a4",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 20,
        scrollOffsetUnit: "%",
        delay: 100,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1706242021749,
    },
    "e-103": {
      id: "e-103",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-104" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "65a9f49b837859a8d466af40|39ad6279-a982-d5c3-d172-e07fcc447179",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "65a9f49b837859a8d466af40|39ad6279-a982-d5c3-d172-e07fcc447179",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 20,
        scrollOffsetUnit: "%",
        delay: 150,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1706242036122,
    },
    "e-105": {
      id: "e-105",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-106" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "65a9f49b837859a8d466af40|0daa8a38-b4fe-3c39-874d-fb8a83b373b2",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "65a9f49b837859a8d466af40|0daa8a38-b4fe-3c39-874d-fb8a83b373b2",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 20,
        scrollOffsetUnit: "%",
        delay: 0,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1706242097996,
    },
    "e-107": {
      id: "e-107",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-108" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "65a9f49b837859a8d466af40|f9f07921-807f-a302-0ff3-660894f09d4c",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "65a9f49b837859a8d466af40|f9f07921-807f-a302-0ff3-660894f09d4c",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 20,
        scrollOffsetUnit: "%",
        delay: 50,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1706242112371,
    },
    "e-109": {
      id: "e-109",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-110" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "65a9f49b837859a8d466af40|88d5ea23-54d6-8afe-5496-dd370255b5eb",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "65a9f49b837859a8d466af40|88d5ea23-54d6-8afe-5496-dd370255b5eb",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 20,
        scrollOffsetUnit: "%",
        delay: 100,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1706242125928,
    },
    "e-111": {
      id: "e-111",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-112" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "65a9f49b837859a8d466af40|8b26ff49-bbd5-89de-9649-25c1b0220309",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "65a9f49b837859a8d466af40|8b26ff49-bbd5-89de-9649-25c1b0220309",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 20,
        scrollOffsetUnit: "%",
        delay: 0,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1706242333482,
    },
    "e-113": {
      id: "e-113",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-114" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "65a9f49b837859a8d466af40|9b57c5c2-b017-f47c-a42d-6508030e3f22",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "65a9f49b837859a8d466af40|9b57c5c2-b017-f47c-a42d-6508030e3f22",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 20,
        scrollOffsetUnit: "%",
        delay: 50,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1706242350836,
    },
    "e-115": {
      id: "e-115",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-116" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "65a9f49b837859a8d466af40|92c1f911-7701-0b90-6f66-df58b81dd661",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "65a9f49b837859a8d466af40|92c1f911-7701-0b90-6f66-df58b81dd661",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 20,
        scrollOffsetUnit: "%",
        delay: 100,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1706242501374,
    },
    "e-117": {
      id: "e-117",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-118" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "65a9f49b837859a8d466af40|aa2188a2-5867-daf9-2fcb-4159078cdc1d",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "65a9f49b837859a8d466af40|aa2188a2-5867-daf9-2fcb-4159078cdc1d",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 20,
        scrollOffsetUnit: "%",
        delay: 0,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1706242541966,
    },
    "e-119": {
      id: "e-119",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-120" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "65a9f49b837859a8d466af40|d417a45c-21cf-547d-544f-d450d008420b",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "65a9f49b837859a8d466af40|d417a45c-21cf-547d-544f-d450d008420b",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 20,
        scrollOffsetUnit: "%",
        delay: 50,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1706242560842,
    },
    "e-121": {
      id: "e-121",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-122" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "a7049d71-7a99-b7cf-3a1b-1e649434d3d4",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "a7049d71-7a99-b7cf-3a1b-1e649434d3d4",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 20,
        scrollOffsetUnit: "%",
        delay: 20,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1706242608731,
    },
    "e-123": {
      id: "e-123",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-124" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "65a9f49b837859a8d466af40|45ce65d1-7933-894d-21ef-d5f81958c5c7",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "65a9f49b837859a8d466af40|45ce65d1-7933-894d-21ef-d5f81958c5c7",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 25,
        scrollOffsetUnit: "%",
        delay: 0,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1706242665507,
    },
    "e-125": {
      id: "e-125",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-126" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "65a9f49b837859a8d466af40|45ce65d1-7933-894d-21ef-d5f81958c5c9",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "65a9f49b837859a8d466af40|45ce65d1-7933-894d-21ef-d5f81958c5c9",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 25,
        scrollOffsetUnit: "%",
        delay: 300,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1706242680387,
    },
    "e-131": {
      id: "e-131",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-15",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-132",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        selector: ".social-link-wrap",
        originalId: "b6395dac-0396-8136-bba5-f45782815dbe",
        appliesTo: "CLASS",
      },
      targets: [
        {
          selector: ".social-link-wrap",
          originalId: "b6395dac-0396-8136-bba5-f45782815dbe",
          appliesTo: "CLASS",
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1706253076924,
    },
    "e-132": {
      id: "e-132",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-16",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-131",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        selector: ".social-link-wrap",
        originalId: "b6395dac-0396-8136-bba5-f45782815dbe",
        appliesTo: "CLASS",
      },
      targets: [
        {
          selector: ".social-link-wrap",
          originalId: "b6395dac-0396-8136-bba5-f45782815dbe",
          appliesTo: "CLASS",
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1706253076925,
    },
    "e-133": {
      id: "e-133",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-12",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-134",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "e89651fd-7e47-e604-54c6-d0b3513ad077",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "e89651fd-7e47-e604-54c6-d0b3513ad077",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1706255784776,
    },
    "e-134": {
      id: "e-134",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-13",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-133",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "e89651fd-7e47-e604-54c6-d0b3513ad077",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "e89651fd-7e47-e604-54c6-d0b3513ad077",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1706255784777,
    },
    "e-135": {
      id: "e-135",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-136" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "65a9f49b837859a8d466af43|cd4ed58d-8018-7968-f16d-b8445926bf80",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "65a9f49b837859a8d466af43|cd4ed58d-8018-7968-f16d-b8445926bf80",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 50,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1706256122546,
    },
    "e-137": {
      id: "e-137",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-138" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "65a9f49b837859a8d466af43|6a1c825b-9daf-f1a8-a762-c8cec1c4afde",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "65a9f49b837859a8d466af43|6a1c825b-9daf-f1a8-a762-c8cec1c4afde",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 20,
        scrollOffsetUnit: "%",
        delay: 100,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1706256143051,
    },
    "e-139": {
      id: "e-139",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-140" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "65a9f49b837859a8d466af43|66eaf89b-fa4f-db2b-cb4a-4e85b556ec08",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "65a9f49b837859a8d466af43|66eaf89b-fa4f-db2b-cb4a-4e85b556ec08",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 20,
        scrollOffsetUnit: "%",
        delay: 150,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1706256159774,
    },
    "e-141": {
      id: "e-141",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-142" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "65a9f49b837859a8d466af43|b50ccf83-70bf-5464-0eba-32bc9784873e",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "65a9f49b837859a8d466af43|b50ccf83-70bf-5464-0eba-32bc9784873e",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 20,
        scrollOffsetUnit: "%",
        delay: 200,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1706256202496,
    },
    "e-143": {
      id: "e-143",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-144" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "65a9f49b837859a8d466af43|b50ccf83-70bf-5464-0eba-32bc97848748",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "65a9f49b837859a8d466af43|b50ccf83-70bf-5464-0eba-32bc97848748",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 20,
        scrollOffsetUnit: "%",
        delay: 250,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1706256219542,
    },
    "e-145": {
      id: "e-145",
      name: "",
      animationType: "custom",
      eventTypeId: "NAVBAR_OPEN",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-17",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-146",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "ec6e2703-623a-3a04-b21b-e85324299e72",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "ec6e2703-623a-3a04-b21b-e85324299e72",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1706299148085,
    },
    "e-146": {
      id: "e-146",
      name: "",
      animationType: "custom",
      eventTypeId: "NAVBAR_CLOSE",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-18",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-145",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "ec6e2703-623a-3a04-b21b-e85324299e72",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "ec6e2703-623a-3a04-b21b-e85324299e72",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1706299148087,
    },
    "e-147": {
      id: "e-147",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLLING_IN_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_CONTINUOUS_ACTION",
        config: { actionListId: "a-19", affectedElements: {}, duration: 0 },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "65a9f49b837859a8d466af30|d84beb6a-c51d-9524-0b1d-340905811bf7",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "65a9f49b837859a8d466af30|d84beb6a-c51d-9524-0b1d-340905811bf7",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: [
        {
          continuousParameterGroupId: "a-19-p",
          smoothing: 50,
          startsEntering: true,
          addStartOffset: true,
          addOffsetValue: 10,
          startsExiting: false,
          addEndOffset: true,
          endOffsetValue: 10,
        },
      ],
      createdOn: 1706299707437,
    },
    "e-148": {
      id: "e-148",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-149" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "65a9f49b837859a8d466af30|53e10ab2-f191-c3bf-cde5-32f590b94067",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "65a9f49b837859a8d466af30|53e10ab2-f191-c3bf-cde5-32f590b94067",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 15,
        scrollOffsetUnit: "%",
        delay: 200,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1706300369862,
    },
    "e-156": {
      id: "e-156",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-157" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        selector: ".about-us-showcase-info-card",
        originalId:
          "65a9f49b837859a8d466af3c|fefa56f9-89e7-a9a0-5935-ce79e48dcc48",
        appliesTo: "CLASS",
      },
      targets: [
        {
          selector: ".about-us-showcase-info-card",
          originalId:
            "65a9f49b837859a8d466af3c|fefa56f9-89e7-a9a0-5935-ce79e48dcc48",
          appliesTo: "CLASS",
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 20,
        scrollOffsetUnit: "%",
        delay: 300,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1706782216061,
    },
    "e-158": {
      id: "e-158",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-12",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-159",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "65a9f49b837859a8d466af40|ab20b289-4c68-0f76-dfad-b3082f4d2ca3",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "65a9f49b837859a8d466af40|ab20b289-4c68-0f76-dfad-b3082f4d2ca3",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1706783034623,
    },
    "e-159": {
      id: "e-159",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-13",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-158",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "65a9f49b837859a8d466af40|ab20b289-4c68-0f76-dfad-b3082f4d2ca3",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "65a9f49b837859a8d466af40|ab20b289-4c68-0f76-dfad-b3082f4d2ca3",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1706783034625,
    },
    "e-164": {
      id: "e-164",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLLING_IN_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_CONTINUOUS_ACTION",
        config: { actionListId: "a-11", affectedElements: {}, duration: 0 },
      },
      mediaQueries: ["main", "medium", "small"],
      target: {
        id: "65a9f49b837859a8d466af30|1781cfb8-bd10-a171-1dfc-aa1d11a58f87",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "65a9f49b837859a8d466af30|1781cfb8-bd10-a171-1dfc-aa1d11a58f87",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: [
        {
          continuousParameterGroupId: "a-11-p",
          smoothing: 80,
          startsEntering: true,
          addStartOffset: false,
          addOffsetValue: 50,
          startsExiting: false,
          addEndOffset: false,
          endOffsetValue: 50,
        },
      ],
      createdOn: 1706933487414,
    },
    "e-165": {
      id: "e-165",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLLING_IN_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_CONTINUOUS_ACTION",
        config: { actionListId: "a-11", affectedElements: {}, duration: 0 },
      },
      mediaQueries: ["main", "medium", "small"],
      target: {
        id: "65a9f49b837859a8d466af30|6d4e0a31-23dc-358f-578c-5751a153746c",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "65a9f49b837859a8d466af30|6d4e0a31-23dc-358f-578c-5751a153746c",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: [
        {
          continuousParameterGroupId: "a-11-p",
          smoothing: 90,
          startsEntering: true,
          addStartOffset: false,
          addOffsetValue: 50,
          startsExiting: false,
          addEndOffset: false,
          endOffsetValue: 50,
        },
      ],
      createdOn: 1706933567984,
    },
    "e-166": {
      id: "e-166",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLLING_IN_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_CONTINUOUS_ACTION",
        config: { actionListId: "a-11", affectedElements: {}, duration: 0 },
      },
      mediaQueries: ["main", "medium", "small"],
      target: {
        id: "65a9f49b837859a8d466af30|29ed8110-9f5b-04ae-b130-be9e20f5bd4a",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "65a9f49b837859a8d466af30|29ed8110-9f5b-04ae-b130-be9e20f5bd4a",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: [
        {
          continuousParameterGroupId: "a-11-p",
          smoothing: 90,
          startsEntering: true,
          addStartOffset: false,
          addOffsetValue: 50,
          startsExiting: false,
          addEndOffset: false,
          endOffsetValue: 50,
        },
      ],
      createdOn: 1706933758651,
    },
    "e-167": {
      id: "e-167",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLLING_IN_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_CONTINUOUS_ACTION",
        config: { actionListId: "a-20", affectedElements: {}, duration: 0 },
      },
      mediaQueries: ["main", "medium"],
      target: {
        id: "65a9f49b837859a8d466af3c|d0e95129-94f4-22be-ca2b-46c6e375276a",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "65a9f49b837859a8d466af3c|d0e95129-94f4-22be-ca2b-46c6e375276a",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: [
        {
          continuousParameterGroupId: "a-20-p",
          smoothing: 90,
          startsEntering: true,
          addStartOffset: false,
          addOffsetValue: 15,
          startsExiting: false,
          addEndOffset: true,
          endOffsetValue: 15,
        },
      ],
      createdOn: 1706935299518,
    },
    "e-172": {
      id: "e-172",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-12",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-173",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "d3a7f24b-b91a-a0bd-4a14-9c6c7a270907",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "d3a7f24b-b91a-a0bd-4a14-9c6c7a270907",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1707318343359,
    },
    "e-173": {
      id: "e-173",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-13",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-172",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "d3a7f24b-b91a-a0bd-4a14-9c6c7a270907",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "d3a7f24b-b91a-a0bd-4a14-9c6c7a270907",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1707318343360,
    },
    "e-174": {
      id: "e-174",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-175" },
      },
      mediaQueries: ["tiny"],
      target: {
        id: "65a9f49b837859a8d466af30|264e7775-a124-e53e-ad60-0f123178baa6",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "65a9f49b837859a8d466af30|264e7775-a124-e53e-ad60-0f123178baa6",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 20,
        scrollOffsetUnit: "%",
        delay: 0,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1707318992915,
    },
    "e-176": {
      id: "e-176",
      name: "",
      animationType: "custom",
      eventTypeId: "PAGE_SCROLL",
      action: {
        id: "",
        actionTypeId: "GENERAL_CONTINUOUS_ACTION",
        config: { actionListId: "a-21", affectedElements: {}, duration: 0 },
      },
      mediaQueries: ["medium", "small", "tiny"],
      target: {
        id: "65a9f49b837859a8d466af30",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "65a9f49b837859a8d466af30",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: [
        {
          continuousParameterGroupId: "a-21-p",
          smoothing: 80,
          startsEntering: true,
          addStartOffset: false,
          addOffsetValue: 50,
          startsExiting: false,
          addEndOffset: false,
          endOffsetValue: 50,
        },
      ],
      createdOn: 1707377170469,
    },
    "e-177": {
      id: "e-177",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-178" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "65e7e88fab4cd903e5c8640d|eab13cdd-4b1f-3afa-b7a6-9751304df19a",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "65e7e88fab4cd903e5c8640d|eab13cdd-4b1f-3afa-b7a6-9751304df19a",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 50,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1709701435603,
    },
    "e-191": {
      id: "e-191",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-192" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "65e7e88fab4cd903e5c8640d|e7f5e0de-9a49-22f9-d556-588867034bfe",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "65e7e88fab4cd903e5c8640d|e7f5e0de-9a49-22f9-d556-588867034bfe",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 20,
        scrollOffsetUnit: "%",
        delay: 0,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1709788892777,
    },
    "e-193": {
      id: "e-193",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-194" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "65e7e88fab4cd903e5c8640d|e7f5e0de-9a49-22f9-d556-588867034c00",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "65e7e88fab4cd903e5c8640d|e7f5e0de-9a49-22f9-d556-588867034c00",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 20,
        scrollOffsetUnit: "%",
        delay: 50,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1709788892777,
    },
    "e-207": {
      id: "e-207",
      name: "",
      animationType: "custom",
      eventTypeId: "TAB_ACTIVE",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-28",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-208",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        selector: ".compare-plan-tabs-link",
        originalId:
          "65e7e88fab4cd903e5c8640d|c8764444-2647-5796-a364-d9274d1b8e6c",
        appliesTo: "CLASS",
      },
      targets: [
        {
          selector: ".compare-plan-tabs-link",
          originalId:
            "65e7e88fab4cd903e5c8640d|c8764444-2647-5796-a364-d9274d1b8e6c",
          appliesTo: "CLASS",
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1709879971639,
    },
    "e-208": {
      id: "e-208",
      name: "",
      animationType: "custom",
      eventTypeId: "TAB_INACTIVE",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-29",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-207",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        selector: ".compare-plan-tabs-link",
        originalId:
          "65e7e88fab4cd903e5c8640d|c8764444-2647-5796-a364-d9274d1b8e6c",
        appliesTo: "CLASS",
      },
      targets: [
        {
          selector: ".compare-plan-tabs-link",
          originalId:
            "65e7e88fab4cd903e5c8640d|c8764444-2647-5796-a364-d9274d1b8e6c",
          appliesTo: "CLASS",
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1709879971640,
    },
    "e-209": {
      id: "e-209",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-12",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-210",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        selector: ".primary-button.comparison-plan-button",
        originalId:
          "65e7e88fab4cd903e5c8640d|a13b726e-3eb7-476c-8c14-fa52527dc72e",
        appliesTo: "CLASS",
      },
      targets: [
        {
          selector: ".primary-button.comparison-plan-button",
          originalId:
            "65e7e88fab4cd903e5c8640d|a13b726e-3eb7-476c-8c14-fa52527dc72e",
          appliesTo: "CLASS",
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1709959076619,
    },
    "e-210": {
      id: "e-210",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-13",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-209",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        selector: ".primary-button.comparison-plan-button",
        originalId:
          "65e7e88fab4cd903e5c8640d|a13b726e-3eb7-476c-8c14-fa52527dc72e",
        appliesTo: "CLASS",
      },
      targets: [
        {
          selector: ".primary-button.comparison-plan-button",
          originalId:
            "65e7e88fab4cd903e5c8640d|a13b726e-3eb7-476c-8c14-fa52527dc72e",
          appliesTo: "CLASS",
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1709959076620,
    },
    "e-219": {
      id: "e-219",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-220" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "65e7e88fab4cd903e5c8640d|330b0e92-8706-789c-f9f4-ae91a1e2afa8",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "65e7e88fab4cd903e5c8640d|330b0e92-8706-789c-f9f4-ae91a1e2afa8",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 20,
        scrollOffsetUnit: "%",
        delay: 100,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1709971034178,
    },
    "e-221": {
      id: "e-221",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-222" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "65e7e88fab4cd903e5c8640d|d9aa4370-097d-50c9-832e-c6b3f9185038",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "65e7e88fab4cd903e5c8640d|d9aa4370-097d-50c9-832e-c6b3f9185038",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 20,
        scrollOffsetUnit: "%",
        delay: 150,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1709971048346,
    },
    "e-223": {
      id: "e-223",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-224" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "65e7e88fab4cd903e5c8640d|de6bb017-f7f9-b753-6eb9-0471c2172a0a",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "65e7e88fab4cd903e5c8640d|de6bb017-f7f9-b753-6eb9-0471c2172a0a",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 20,
        scrollOffsetUnit: "%",
        delay: 200,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1709971070269,
    },
    "e-225": {
      id: "e-225",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-226" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "65e7e88fab4cd903e5c8640d|ba005a7a-0d0e-3346-f0f5-1ae324e01565",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "65e7e88fab4cd903e5c8640d|ba005a7a-0d0e-3346-f0f5-1ae324e01565",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 20,
        scrollOffsetUnit: "%",
        delay: 0,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1709971116543,
    },
    "e-227": {
      id: "e-227",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-228" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "65e7e88fab4cd903e5c8640d|b46bad00-5ed5-beb7-84ad-c50c63334599",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "65e7e88fab4cd903e5c8640d|b46bad00-5ed5-beb7-84ad-c50c63334599",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 20,
        scrollOffsetUnit: "%",
        delay: 50,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1709971130583,
    },
    "e-231": {
      id: "e-231",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-232" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        selector: ".accordion-title",
        originalId:
          "65efd65cdc3019b69f02a1cc|023737ed-6cba-eb4a-987f-4c011f1d4536",
        appliesTo: "CLASS",
      },
      targets: [
        {
          id: "65efd65cdc3019b69f02a1cc|023737ed-6cba-eb4a-987f-4c011f1d4536",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 20,
        scrollOffsetUnit: "%",
        delay: 0,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1710394118601,
    },
    "e-233": {
      id: "e-233",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-234" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        selector: ".accordion-item-inner",
        originalId:
          "65efd65cdc3019b69f02a1cc|023737ed-6cba-eb4a-987f-4c011f1d4538",
        appliesTo: "CLASS",
      },
      targets: [
        {
          id: "65efd65cdc3019b69f02a1cc|023737ed-6cba-eb4a-987f-4c011f1d4538",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 20,
        scrollOffsetUnit: "%",
        delay: 50,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1710394118601,
    },
    "e-235": {
      id: "e-235",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-12",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-236",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "65a9f49b837859a8d466af30|985ddea8-63d5-68f7-258f-f07bf98472b5",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "65a9f49b837859a8d466af30|985ddea8-63d5-68f7-258f-f07bf98472b5",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1710398251736,
    },
    "e-236": {
      id: "e-236",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-13",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-235",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "65a9f49b837859a8d466af30|985ddea8-63d5-68f7-258f-f07bf98472b5",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "65a9f49b837859a8d466af30|985ddea8-63d5-68f7-258f-f07bf98472b5",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1710398251736,
    },
    "e-237": {
      id: "e-237",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-12",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-238",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "65a9f49b837859a8d466af30|269f6800-9ff0-cc36-7f1d-481c82409d14",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "65a9f49b837859a8d466af30|269f6800-9ff0-cc36-7f1d-481c82409d14",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1710399304181,
    },
    "e-238": {
      id: "e-238",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-13",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-237",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "65a9f49b837859a8d466af30|269f6800-9ff0-cc36-7f1d-481c82409d14",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "65a9f49b837859a8d466af30|269f6800-9ff0-cc36-7f1d-481c82409d14",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1710399304181,
    },
    "e-239": {
      id: "e-239",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-12",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-240",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "65a9f49b837859a8d466af30|d24ee298-c21b-71e5-c3d9-f9cc6c3c4e2a",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "65a9f49b837859a8d466af30|d24ee298-c21b-71e5-c3d9-f9cc6c3c4e2a",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1710403965188,
    },
    "e-240": {
      id: "e-240",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-13",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-239",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "65a9f49b837859a8d466af30|d24ee298-c21b-71e5-c3d9-f9cc6c3c4e2a",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "65a9f49b837859a8d466af30|d24ee298-c21b-71e5-c3d9-f9cc6c3c4e2a",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1710403965188,
    },
    "e-241": {
      id: "e-241",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-242" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "65efd664bd25d505d10cf0da|c6627d30-c739-e074-d43b-1bb343de1139",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "65efd664bd25d505d10cf0da|c6627d30-c739-e074-d43b-1bb343de1139",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 50,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1710422587475,
    },
    "e-243": {
      id: "e-243",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-12",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-244",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "65efd6864f1e90643e4f5721|9eb8bd6f-882d-bdca-c086-4e17327dfa1d",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "65efd6864f1e90643e4f5721|9eb8bd6f-882d-bdca-c086-4e17327dfa1d",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1710439398323,
    },
    "e-244": {
      id: "e-244",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-13",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-243",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "65efd6864f1e90643e4f5721|9eb8bd6f-882d-bdca-c086-4e17327dfa1d",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "65efd6864f1e90643e4f5721|9eb8bd6f-882d-bdca-c086-4e17327dfa1d",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1710439398323,
    },
    "e-251": {
      id: "e-251",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-12",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-252",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "65f296e49e6211e5ba470ed7|91daecfc-9598-daf1-c136-db1ad565fdad",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "65f296e49e6211e5ba470ed7|91daecfc-9598-daf1-c136-db1ad565fdad",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1710527638767,
    },
    "e-252": {
      id: "e-252",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-13",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-251",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "65f296e49e6211e5ba470ed7|91daecfc-9598-daf1-c136-db1ad565fdad",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "65f296e49e6211e5ba470ed7|91daecfc-9598-daf1-c136-db1ad565fdad",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1710527638767,
    },
    "e-253": {
      id: "e-253",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-254" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "65a9f49b837859a8d466af3c|58c9a28d-9e51-6336-82fc-29dd06aef086",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "65a9f49b837859a8d466af3c|58c9a28d-9e51-6336-82fc-29dd06aef086",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 20,
        scrollOffsetUnit: "%",
        delay: 0,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1710684603356,
    },
    "e-255": {
      id: "e-255",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-256" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "65a9f49b837859a8d466af3c|32424f22-7638-b19e-df63-e40e7a58cada",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "65a9f49b837859a8d466af3c|32424f22-7638-b19e-df63-e40e7a58cada",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 20,
        scrollOffsetUnit: "%",
        delay: 50,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1710684650910,
    },
    "e-257": {
      id: "e-257",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-258" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "65a9f49b837859a8d466af3c|5355f93a-7c21-3f94-c8b4-0c5408b51daa",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "65a9f49b837859a8d466af3c|5355f93a-7c21-3f94-c8b4-0c5408b51daa",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 20,
        scrollOffsetUnit: "%",
        delay: 50,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1710684678338,
    },
    "e-259": {
      id: "e-259",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-260" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "20db4045-bf75-5f63-8567-3cbdc52604f6",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "20db4045-bf75-5f63-8567-3cbdc52604f6",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 20,
        scrollOffsetUnit: "%",
        delay: 0,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1710687465054,
    },
    "e-261": {
      id: "e-261",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-12",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-262",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        selector: ".primary-button.pricing",
        originalId:
          "65e7e88fab4cd903e5c8640d|a31cf947-ee14-195e-e9c2-88e7bf539a72",
        appliesTo: "CLASS",
      },
      targets: [
        {
          selector: ".primary-button.pricing",
          originalId:
            "65e7e88fab4cd903e5c8640d|a31cf947-ee14-195e-e9c2-88e7bf539a72",
          appliesTo: "CLASS",
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1710688044142,
    },
    "e-262": {
      id: "e-262",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-13",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-261",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        selector: ".primary-button.pricing",
        originalId:
          "65e7e88fab4cd903e5c8640d|a31cf947-ee14-195e-e9c2-88e7bf539a72",
        appliesTo: "CLASS",
      },
      targets: [
        {
          selector: ".primary-button.pricing",
          originalId:
            "65e7e88fab4cd903e5c8640d|a31cf947-ee14-195e-e9c2-88e7bf539a72",
          appliesTo: "CLASS",
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1710688044175,
    },
    "e-265": {
      id: "e-265",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-266" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "65efd65cdc3019b69f02a1cc|b2200739-36fb-edcb-5152-2accf375a219",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "65efd65cdc3019b69f02a1cc|b2200739-36fb-edcb-5152-2accf375a219",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 20,
        scrollOffsetUnit: "%",
        delay: 0,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1710688394291,
    },
    "e-267": {
      id: "e-267",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-268" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "65efd65cdc3019b69f02a1cc|724a0cae-c7cd-24c5-800e-186340e5870e",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "65efd65cdc3019b69f02a1cc|724a0cae-c7cd-24c5-800e-186340e5870e",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 20,
        scrollOffsetUnit: "%",
        delay: 50,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1710688429562,
    },
    "e-269": {
      id: "e-269",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-270" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "65efd65cdc3019b69f02a1cc|90734477-94f5-0eff-1434-d74c91868e1a",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "65efd65cdc3019b69f02a1cc|90734477-94f5-0eff-1434-d74c91868e1a",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 20,
        scrollOffsetUnit: "%",
        delay: 100,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1710688480206,
    },
    "e-271": {
      id: "e-271",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-272" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "65efd65cdc3019b69f02a1cc|63c265b1-6d59-9ed2-4dd0-086d31a20701",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "65efd65cdc3019b69f02a1cc|63c265b1-6d59-9ed2-4dd0-086d31a20701",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 20,
        scrollOffsetUnit: "%",
        delay: 150,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1710688497360,
    },
    "e-273": {
      id: "e-273",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-274" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        selector: ".integration-feature-card-wrap",
        originalId:
          "65efd65cdc3019b69f02a1cc|2da361bc-ccfd-0696-6e81-77b8fb7a62ec",
        appliesTo: "CLASS",
      },
      targets: [
        {
          selector: ".integration-feature-card-wrap",
          originalId:
            "65efd65cdc3019b69f02a1cc|2da361bc-ccfd-0696-6e81-77b8fb7a62ec",
          appliesTo: "CLASS",
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 20,
        scrollOffsetUnit: "%",
        delay: 120,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1710688565257,
    },
    "e-275": {
      id: "e-275",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-276" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "65efd65cdc3019b69f02a1cc|12a3cf17-ed4b-2add-e806-17047252ad3d",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "65efd65cdc3019b69f02a1cc|12a3cf17-ed4b-2add-e806-17047252ad3d",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 20,
        scrollOffsetUnit: "%",
        delay: 0,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1710688659594,
    },
    "e-277": {
      id: "e-277",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-278" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        selector: ".integration-list-item",
        originalId:
          "65efd65cdc3019b69f02a1cc|b1f47a3d-d514-0800-e93c-db782ad8bafc",
        appliesTo: "CLASS",
      },
      targets: [
        {
          selector: ".integration-list-item",
          originalId:
            "65efd65cdc3019b69f02a1cc|b1f47a3d-d514-0800-e93c-db782ad8bafc",
          appliesTo: "CLASS",
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 20,
        scrollOffsetUnit: "%",
        delay: 100,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1710688779518,
    },
    "e-279": {
      id: "e-279",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-280" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        selector: ".integration-list-category",
        originalId:
          "65efd65cdc3019b69f02a1cc|12b1e200-ff2b-18e8-549b-a0254c077e41",
        appliesTo: "CLASS",
      },
      targets: [
        {
          selector: ".integration-list-category",
          originalId:
            "65efd65cdc3019b69f02a1cc|12b1e200-ff2b-18e8-549b-a0254c077e41",
          appliesTo: "CLASS",
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 20,
        scrollOffsetUnit: "%",
        delay: 100,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1710688828148,
    },
    "e-281": {
      id: "e-281",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-12",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-282",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "65efd6730b526344077ca652|15a38003-9d35-fd48-35f4-5144f125fb0d",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "65efd6730b526344077ca652|15a38003-9d35-fd48-35f4-5144f125fb0d",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1710719236839,
    },
    "e-282": {
      id: "e-282",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-13",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-281",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "65efd6730b526344077ca652|15a38003-9d35-fd48-35f4-5144f125fb0d",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "65efd6730b526344077ca652|15a38003-9d35-fd48-35f4-5144f125fb0d",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1710719236839,
    },
    "e-283": {
      id: "e-283",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-284" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        selector: ".user-form-wrapper",
        originalId:
          "65efd6730b526344077ca652|15a38003-9d35-fd48-35f4-5144f125faf4",
        appliesTo: "CLASS",
      },
      targets: [
        {
          selector: ".user-form-wrapper",
          originalId:
            "65efd6730b526344077ca652|15a38003-9d35-fd48-35f4-5144f125faf4",
          appliesTo: "CLASS",
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 20,
        scrollOffsetUnit: "%",
        delay: 0,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1710719961561,
    },
    "e-285": {
      id: "e-285",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GROW_EFFECT",
        instant: false,
        config: { actionListId: "growIn", autoStopEventId: "e-286" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        selector: ".user-page-testimonial",
        originalId:
          "65efd6730b526344077ca652|15a38003-9d35-fd48-35f4-5144f125fb2f",
        appliesTo: "CLASS",
      },
      targets: [
        {
          selector: ".user-page-testimonial",
          originalId:
            "65efd6730b526344077ca652|15a38003-9d35-fd48-35f4-5144f125fb2f",
          appliesTo: "CLASS",
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 20,
        scrollOffsetUnit: "%",
        delay: 0,
        direction: null,
        effectIn: true,
      },
      createdOn: 1710719980510,
    },
    "e-291": {
      id: "e-291",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-31",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-292",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "b26abf98-0018-6354-ce0c-830c8377e1e2",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "b26abf98-0018-6354-ce0c-830c8377e1e2",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: true,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1710761122669,
    },
    "e-293": {
      id: "e-293",
      name: "",
      animationType: "custom",
      eventTypeId: "SLIDER_ACTIVE",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-32",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-294",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        selector: ".slider-image-slide",
        originalId:
          "65efd664bd25d505d10cf0da|6096ed79-341c-1c88-8fd4-57ee71d88a80",
        appliesTo: "CLASS",
      },
      targets: [
        {
          selector: ".slider-image-slide",
          originalId:
            "65efd664bd25d505d10cf0da|6096ed79-341c-1c88-8fd4-57ee71d88a80",
          appliesTo: "CLASS",
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1710768283487,
    },
    "e-294": {
      id: "e-294",
      name: "",
      animationType: "custom",
      eventTypeId: "SLIDER_INACTIVE",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-33",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-293",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        selector: ".slider-image-slide",
        originalId:
          "65efd664bd25d505d10cf0da|6096ed79-341c-1c88-8fd4-57ee71d88a80",
        appliesTo: "CLASS",
      },
      targets: [
        {
          selector: ".slider-image-slide",
          originalId:
            "65efd664bd25d505d10cf0da|6096ed79-341c-1c88-8fd4-57ee71d88a80",
          appliesTo: "CLASS",
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1710768283490,
    },
    "e-295": {
      id: "e-295",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-296" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "65efd650e79b381a5ab3a614|095dc593-f8a9-00fc-ca53-9ffe7475f207",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "65efd650e79b381a5ab3a614|095dc593-f8a9-00fc-ca53-9ffe7475f207",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 50,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1710783875084,
    },
    "e-297": {
      id: "e-297",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-298" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "65efd650e79b381a5ab3a614|095dc593-f8a9-00fc-ca53-9ffe7475f20a",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "65efd650e79b381a5ab3a614|095dc593-f8a9-00fc-ca53-9ffe7475f20a",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 100,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1710783892663,
    },
    "e-301": {
      id: "e-301",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-302" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "65efd650e79b381a5ab3a614|53d1f1c6-15db-dee0-bb7d-ca8a321d7094",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "65efd650e79b381a5ab3a614|53d1f1c6-15db-dee0-bb7d-ca8a321d7094",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 20,
        scrollOffsetUnit: "%",
        delay: 0,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1710784111297,
    },
    "e-303": {
      id: "e-303",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-304" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "65efd650e79b381a5ab3a614|5c001d16-11b8-ab9f-e9e5-a5f9d5a26dbd",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "65efd650e79b381a5ab3a614|5c001d16-11b8-ab9f-e9e5-a5f9d5a26dbd",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 20,
        scrollOffsetUnit: "%",
        delay: 0,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1710784158333,
    },
    "e-305": {
      id: "e-305",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-306" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        selector: ".article-item-wrap",
        originalId:
          "65efd650e79b381a5ab3a614|e98bccdd-9f3f-350e-e754-ce000e10d208",
        appliesTo: "CLASS",
      },
      targets: [
        {
          selector: ".article-item-wrap",
          originalId:
            "65efd650e79b381a5ab3a614|e98bccdd-9f3f-350e-e754-ce000e10d208",
          appliesTo: "CLASS",
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 100,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1710784242399,
    },
    "e-307": {
      id: "e-307",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-308" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "65efd650e79b381a5ab3a614|e6197b78-4bfd-ccb2-98c9-809c705620e1",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "65efd650e79b381a5ab3a614|e6197b78-4bfd-ccb2-98c9-809c705620e1",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 20,
        scrollOffsetUnit: "%",
        delay: 0,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1710784624443,
    },
    "e-309": {
      id: "e-309",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-34",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-310",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "a8259356-908c-f47a-0c12-aeb7912b8462",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "a8259356-908c-f47a-0c12-aeb7912b8462",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1710786174860,
    },
    "e-310": {
      id: "e-310",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-35",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-309",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "a8259356-908c-f47a-0c12-aeb7912b8462",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "a8259356-908c-f47a-0c12-aeb7912b8462",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1710786174861,
    },
    "e-311": {
      id: "e-311",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-312" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "65efd66d26f619b69367533f|2cf662a4-f454-bc8d-c26a-10e87d1528c6",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "65efd66d26f619b69367533f|2cf662a4-f454-bc8d-c26a-10e87d1528c6",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 50,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1710786637761,
    },
    "e-313": {
      id: "e-313",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-314" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "65efd66d26f619b69367533f|8006f66b-b3d5-6a1a-dd82-fe25b2cf4acf",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "65efd66d26f619b69367533f|8006f66b-b3d5-6a1a-dd82-fe25b2cf4acf",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 100,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1710786650321,
    },
    "e-315": {
      id: "e-315",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-316" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "65efd66d26f619b69367533f|a97eb27b-e3e1-22b9-68e9-4bb0a60329b2",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "65efd66d26f619b69367533f|a97eb27b-e3e1-22b9-68e9-4bb0a60329b2",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 150,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1710786685743,
    },
    "e-317": {
      id: "e-317",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-318" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "65efd66d26f619b69367533f|3c7b9143-eb88-5aa8-b232-8f26454c9909",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "65efd66d26f619b69367533f|3c7b9143-eb88-5aa8-b232-8f26454c9909",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 20,
        scrollOffsetUnit: "%",
        delay: 0,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1710786762818,
    },
    "e-319": {
      id: "e-319",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInTop", autoStopEventId: "e-320" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "65efd66d26f619b69367533f|f7cf883e-8e36-3f21-e547-d34edae4d435",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "65efd66d26f619b69367533f|f7cf883e-8e36-3f21-e547-d34edae4d435",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 20,
        scrollOffsetUnit: "%",
        delay: 50,
        direction: "TOP",
        effectIn: true,
      },
      createdOn: 1710786775587,
    },
    "e-321": {
      id: "e-321",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-322" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "65efd66d26f619b69367533f|684fb7a4-c646-a951-10b5-669ea80d1fc5",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "65efd66d26f619b69367533f|684fb7a4-c646-a951-10b5-669ea80d1fc5",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 20,
        scrollOffsetUnit: "%",
        delay: 100,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1710786790320,
    },
    "e-323": {
      id: "e-323",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-324" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "65efd66d26f619b69367533f|42a0e126-0c25-f71e-3d05-94872ffb2389",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "65efd66d26f619b69367533f|42a0e126-0c25-f71e-3d05-94872ffb2389",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 20,
        scrollOffsetUnit: "%",
        delay: 0,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1710786867697,
    },
    "e-325": {
      id: "e-325",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-326" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "65efd66d26f619b69367533f|bb7960bf-7c0f-61d3-94a9-f4c76bc2dc38",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "65efd66d26f619b69367533f|bb7960bf-7c0f-61d3-94a9-f4c76bc2dc38",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 20,
        scrollOffsetUnit: "%",
        delay: 0,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1710786908395,
    },
    "e-327": {
      id: "e-327",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-328" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "65efd66d26f619b69367533f|5d2ac88f-eb46-e4ad-b1e8-35ceeeee1864",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "65efd66d26f619b69367533f|5d2ac88f-eb46-e4ad-b1e8-35ceeeee1864",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 20,
        scrollOffsetUnit: "%",
        delay: 50,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1710786922863,
    },
    "e-329": {
      id: "e-329",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-330" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "65efd66d26f619b69367533f|d3825969-a891-a811-dce9-a9236138e596",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "65efd66d26f619b69367533f|d3825969-a891-a811-dce9-a9236138e596",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 20,
        scrollOffsetUnit: "%",
        delay: 100,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1710786938459,
    },
    "e-331": {
      id: "e-331",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-332" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "65efd66d26f619b69367533f|6f66e04a-43d6-015e-6fc0-5724c9b2fa74",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "65efd66d26f619b69367533f|6f66e04a-43d6-015e-6fc0-5724c9b2fa74",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 20,
        scrollOffsetUnit: "%",
        delay: 0,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1710786969213,
    },
    "e-333": {
      id: "e-333",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-334" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "a8259356-908c-f47a-0c12-aeb7912b8459",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "a8259356-908c-f47a-0c12-aeb7912b8459",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 20,
        scrollOffsetUnit: "%",
        delay: 0,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1710786990202,
    },
    "e-335": {
      id: "e-335",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-336" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "a8259356-908c-f47a-0c12-aeb7912b845c",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "a8259356-908c-f47a-0c12-aeb7912b845c",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 20,
        scrollOffsetUnit: "%",
        delay: 50,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1710787005679,
    },
    "e-337": {
      id: "e-337",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-338" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "a8259356-908c-f47a-0c12-aeb7912b845f",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "a8259356-908c-f47a-0c12-aeb7912b845f",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 20,
        scrollOffsetUnit: "%",
        delay: 100,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1710787021444,
    },
    "e-339": {
      id: "e-339",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-12",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-340",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "985ddea8-63d5-68f7-258f-f07bf98472b5",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "985ddea8-63d5-68f7-258f-f07bf98472b5",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1710787305633,
    },
    "e-340": {
      id: "e-340",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-13",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-339",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "985ddea8-63d5-68f7-258f-f07bf98472b5",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "985ddea8-63d5-68f7-258f-f07bf98472b5",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1710787305636,
    },
    "e-343": {
      id: "e-343",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-344" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "65efd65cdc3019b69f02a1cc|e664c0a0-0713-43da-7019-eb45cbea6b66",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "65efd65cdc3019b69f02a1cc|e664c0a0-0713-43da-7019-eb45cbea6b66",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 50,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1710789787050,
    },
    "e-345": {
      id: "e-345",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-346" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "65a9f4c694e95b0f55437c46|f5e7d620-5dd7-06d9-d5c8-d52982cb5697",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "65a9f4c694e95b0f55437c46|f5e7d620-5dd7-06d9-d5c8-d52982cb5697",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 50,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1710790044435,
    },
    "e-347": {
      id: "e-347",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-348" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "65a9f4c694e95b0f55437c46|e45d4b19-6a73-c82d-240f-1e7f8aeaf2e5",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "65a9f4c694e95b0f55437c46|e45d4b19-6a73-c82d-240f-1e7f8aeaf2e5",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 100,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1710790069401,
    },
    "e-349": {
      id: "e-349",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-350" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "65a9f4c694e95b0f55437c46|70f7d96d-791d-70af-d1b0-e2ebf9a9d9f9",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "65a9f4c694e95b0f55437c46|70f7d96d-791d-70af-d1b0-e2ebf9a9d9f9",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 150,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1710790085434,
    },
    "e-351": {
      id: "e-351",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-352" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "65a9f4c694e95b0f55437c46|76f96920-17f1-d43c-3ee1-e7f8222cd87f",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "65a9f4c694e95b0f55437c46|76f96920-17f1-d43c-3ee1-e7f8222cd87f",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 200,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1710790121152,
    },
    "e-353": {
      id: "e-353",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-354" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "65efd7eb0b529f9c544dd7a1|a246b0a4-391b-8e44-8a69-02f5e6d94357",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "65efd7eb0b529f9c544dd7a1|a246b0a4-391b-8e44-8a69-02f5e6d94357",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 50,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1710824027013,
    },
    "e-355": {
      id: "e-355",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-356" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "65efd7eb0b529f9c544dd7a1|1f40c553-e603-9b5d-62cf-b05425a15390",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "65efd7eb0b529f9c544dd7a1|1f40c553-e603-9b5d-62cf-b05425a15390",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 100,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1710824039706,
    },
    "e-357": {
      id: "e-357",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-358" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "65efd7eb0b529f9c544dd7a1|85b0cf34-1055-9e2e-154f-228857737142",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "65efd7eb0b529f9c544dd7a1|85b0cf34-1055-9e2e-154f-228857737142",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 150,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1710824054065,
    },
    "e-359": {
      id: "e-359",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-360" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "65efd7eb0b529f9c544dd7a1|c84807e2-c0cd-bc2b-c3df-c19ba67e708c",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "65efd7eb0b529f9c544dd7a1|c84807e2-c0cd-bc2b-c3df-c19ba67e708c",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 20,
        scrollOffsetUnit: "%",
        delay: 0,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1710824089436,
    },
    "e-361": {
      id: "e-361",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-362" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "65efd7eb0b529f9c544dd7a1|386d23e5-f75f-761a-1ff3-97380192378a",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "65efd7eb0b529f9c544dd7a1|386d23e5-f75f-761a-1ff3-97380192378a",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 20,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1710824128848,
    },
    "e-363": {
      id: "e-363",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-36",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-364",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        selector: ".article-toggle-button",
        originalId:
          "65efd7eb0b529f9c544dd7a1|5927656f-f836-fd36-10c2-06881d06e813",
        appliesTo: "CLASS",
      },
      targets: [
        {
          selector: ".article-toggle-button",
          originalId:
            "65efd7eb0b529f9c544dd7a1|5927656f-f836-fd36-10c2-06881d06e813",
          appliesTo: "CLASS",
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1710824489103,
    },
    "e-364": {
      id: "e-364",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-37",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-363",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        selector: ".article-toggle-button",
        originalId:
          "65efd7eb0b529f9c544dd7a1|5927656f-f836-fd36-10c2-06881d06e813",
        appliesTo: "CLASS",
      },
      targets: [
        {
          selector: ".article-toggle-button",
          originalId:
            "65efd7eb0b529f9c544dd7a1|5927656f-f836-fd36-10c2-06881d06e813",
          appliesTo: "CLASS",
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1710824489104,
    },
    "e-365": {
      id: "e-365",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-366" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "65f296e49e6211e5ba470ed7|630d590c-f06d-28c4-b718-7784850f4ba1",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "65f296e49e6211e5ba470ed7|630d590c-f06d-28c4-b718-7784850f4ba1",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 50,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1710825482939,
    },
    "e-367": {
      id: "e-367",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-368" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "65f296e49e6211e5ba470ed7|1a566256-b6d5-749d-37a6-b15063b68837",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "65f296e49e6211e5ba470ed7|1a566256-b6d5-749d-37a6-b15063b68837",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 100,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1710825495053,
    },
    "e-369": {
      id: "e-369",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-370" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "65f296e49e6211e5ba470ed7|2f913f31-0222-4dde-6048-cf1bfe7ea2bd",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "65f296e49e6211e5ba470ed7|2f913f31-0222-4dde-6048-cf1bfe7ea2bd",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 150,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1710825504789,
    },
    "e-371": {
      id: "e-371",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-372" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "65f296e49e6211e5ba470ed7|269134b7-8ce1-24b4-4c22-e652b09e63b3",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "65f296e49e6211e5ba470ed7|269134b7-8ce1-24b4-4c22-e652b09e63b3",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 20,
        scrollOffsetUnit: "%",
        delay: 0,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1710825529105,
    },
    "e-373": {
      id: "e-373",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-374" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "65efd664bd25d505d10cf0da|ecf447c9-d6d8-75d7-c034-863652ea5bf0",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "65efd664bd25d505d10cf0da|ecf447c9-d6d8-75d7-c034-863652ea5bf0",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 100,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1710826098564,
    },
    "e-375": {
      id: "e-375",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-376" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "65efd664bd25d505d10cf0da|fabd88f1-23a1-1453-35e9-cd19c7956b8b",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "65efd664bd25d505d10cf0da|fabd88f1-23a1-1453-35e9-cd19c7956b8b",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 150,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1710826115365,
    },
    "e-377": {
      id: "e-377",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-378" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "65efd664bd25d505d10cf0da|6741401d-a625-4972-2379-158e9c7265ec",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "65efd664bd25d505d10cf0da|6741401d-a625-4972-2379-158e9c7265ec",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 200,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1710826142414,
    },
    "e-379": {
      id: "e-379",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-380" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "65efd664bd25d505d10cf0da|bd893d75-6fe1-3e6f-85d7-c21f570441a5",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "65efd664bd25d505d10cf0da|bd893d75-6fe1-3e6f-85d7-c21f570441a5",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 250,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1710826161352,
    },
    "e-381": {
      id: "e-381",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInRight", autoStopEventId: "e-382" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "65efd664bd25d505d10cf0da|ec100b5d-d229-1a2f-d214-a354fda72866",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "65efd664bd25d505d10cf0da|ec100b5d-d229-1a2f-d214-a354fda72866",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 150,
        direction: "RIGHT",
        effectIn: true,
      },
      createdOn: 1710826196469,
    },
    "e-383": {
      id: "e-383",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-384" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "65efd664bd25d505d10cf0da|5a36a158-082c-4fae-d1e7-4343afaf5d77",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "65efd664bd25d505d10cf0da|5a36a158-082c-4fae-d1e7-4343afaf5d77",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 20,
        scrollOffsetUnit: "%",
        delay: 0,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1710826225293,
    },
    "e-385": {
      id: "e-385",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-386" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "65efd664bd25d505d10cf0da|0cbac69e-8b7d-782f-a654-8701ec280b43",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "65efd664bd25d505d10cf0da|0cbac69e-8b7d-782f-a654-8701ec280b43",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 20,
        scrollOffsetUnit: "%",
        delay: 50,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1710826237388,
    },
    "e-387": {
      id: "e-387",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-388" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        selector: ".feature-explored-list-item",
        originalId:
          "65efd664bd25d505d10cf0da|31446b93-44b7-1a79-7865-893455426d3d",
        appliesTo: "CLASS",
      },
      targets: [
        {
          selector: ".feature-explored-list-item",
          originalId:
            "65efd664bd25d505d10cf0da|31446b93-44b7-1a79-7865-893455426d3d",
          appliesTo: "CLASS",
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 20,
        scrollOffsetUnit: "%",
        delay: 0,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1710826261520,
    },
    "e-389": {
      id: "e-389",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-390" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "65efd664bd25d505d10cf0da|b2b803a6-5aa4-16b9-6754-fbe1d185e5d6",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "65efd664bd25d505d10cf0da|b2b803a6-5aa4-16b9-6754-fbe1d185e5d6",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 20,
        scrollOffsetUnit: "%",
        delay: 0,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1710826308837,
    },
    "e-391": {
      id: "e-391",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-392" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "65efd664bd25d505d10cf0da|76789922-1b1c-17f4-5487-0ec8bcd4a99c",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "65efd664bd25d505d10cf0da|76789922-1b1c-17f4-5487-0ec8bcd4a99c",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 20,
        scrollOffsetUnit: "%",
        delay: 50,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1710826319096,
    },
    "e-393": {
      id: "e-393",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-394" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "65efd664bd25d505d10cf0da|e66a360d-3809-179b-a185-ab65d4313c0b",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "65efd664bd25d505d10cf0da|e66a360d-3809-179b-a185-ab65d4313c0b",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 20,
        scrollOffsetUnit: "%",
        delay: 100,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1710826333476,
    },
    "e-395": {
      id: "e-395",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-396" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "65efd664bd25d505d10cf0da|2e62017d-09dd-97f8-eeb1-9715f2d1b22e",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "65efd664bd25d505d10cf0da|2e62017d-09dd-97f8-eeb1-9715f2d1b22e",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 20,
        scrollOffsetUnit: "%",
        delay: 0,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1710826392022,
    },
    "e-397": {
      id: "e-397",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-398" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "65efd664bd25d505d10cf0da|bffc6cd6-b0a9-9c9a-3037-be421ecd8cdd",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "65efd664bd25d505d10cf0da|bffc6cd6-b0a9-9c9a-3037-be421ecd8cdd",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 20,
        scrollOffsetUnit: "%",
        delay: 50,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1710826402467,
    },
    "e-399": {
      id: "e-399",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-400" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "65efd664bd25d505d10cf0da|ddc43640-f831-de91-e307-2f2c9b3d7898",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "65efd664bd25d505d10cf0da|ddc43640-f831-de91-e307-2f2c9b3d7898",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 20,
        scrollOffsetUnit: "%",
        delay: 100,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1710826446401,
    },
    "e-401": {
      id: "e-401",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-402" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "65efd664bd25d505d10cf0da|3905d687-a510-ad1a-f674-9d10cb7bea11",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "65efd664bd25d505d10cf0da|3905d687-a510-ad1a-f674-9d10cb7bea11",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 20,
        scrollOffsetUnit: "%",
        delay: 0,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1710826475508,
    },
    "e-403": {
      id: "e-403",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-404" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "65efd664bd25d505d10cf0da|b2f92594-8f26-3e6a-6ce5-d128c9c5cc97",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "65efd664bd25d505d10cf0da|b2f92594-8f26-3e6a-6ce5-d128c9c5cc97",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 20,
        scrollOffsetUnit: "%",
        delay: 50,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1710826486675,
    },
    "e-405": {
      id: "e-405",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-406" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "65efd664bd25d505d10cf0da|e2958f9f-7b50-a91a-2391-5e666a4783f9",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "65efd664bd25d505d10cf0da|e2958f9f-7b50-a91a-2391-5e666a4783f9",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 50,
        scrollOffsetUnit: "%",
        delay: 100,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1710826511067,
    },
    "e-407": {
      id: "e-407",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-408" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "65efd664bd25d505d10cf0da|3f230864-0d83-da92-01d6-61fc5d0c8f30",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "65efd664bd25d505d10cf0da|3f230864-0d83-da92-01d6-61fc5d0c8f30",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 20,
        scrollOffsetUnit: "%",
        delay: 0,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1710826527572,
    },
    "e-409": {
      id: "e-409",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-410" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "65efd664bd25d505d10cf0da|3bd1cd51-2ed9-bc38-5d71-01c0c0d5b382",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "65efd664bd25d505d10cf0da|3bd1cd51-2ed9-bc38-5d71-01c0c0d5b382",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 20,
        scrollOffsetUnit: "%",
        delay: 0,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1710826556804,
    },
    "e-411": {
      id: "e-411",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-412" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "65efd664bd25d505d10cf0da|53f20e62-5970-5b05-d1f7-44533d06e6e2",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "65efd664bd25d505d10cf0da|53f20e62-5970-5b05-d1f7-44533d06e6e2",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 20,
        scrollOffsetUnit: "%",
        delay: 50,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1710826567158,
    },
    "e-413": {
      id: "e-413",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-414" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "65efd664bd25d505d10cf0da|adb60973-cb47-aa0c-3bd2-ccb539a52cae",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "65efd664bd25d505d10cf0da|adb60973-cb47-aa0c-3bd2-ccb539a52cae",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 20,
        scrollOffsetUnit: "%",
        delay: 100,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1710826585855,
    },
    "e-415": {
      id: "e-415",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-416" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "65efd664bd25d505d10cf0da|4e321de6-ba3e-84d7-2239-fbff062f47eb",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "65efd664bd25d505d10cf0da|4e321de6-ba3e-84d7-2239-fbff062f47eb",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 20,
        scrollOffsetUnit: "%",
        delay: 0,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1710826619540,
    },
    "e-417": {
      id: "e-417",
      name: "",
      animationType: "custom",
      eventTypeId: "TAB_ACTIVE",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-38",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-418",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        selector: ".our-management-tab-link",
        originalId:
          "65efd664bd25d505d10cf0da|ba63e2e4-1a2e-8094-0727-50303cc157f6",
        appliesTo: "CLASS",
      },
      targets: [
        {
          selector: ".our-management-tab-link",
          originalId:
            "65efd664bd25d505d10cf0da|ba63e2e4-1a2e-8094-0727-50303cc157f6",
          appliesTo: "CLASS",
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1710827711487,
    },
    "e-418": {
      id: "e-418",
      name: "",
      animationType: "custom",
      eventTypeId: "TAB_INACTIVE",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-39",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-417",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        selector: ".our-management-tab-link",
        originalId:
          "65efd664bd25d505d10cf0da|ba63e2e4-1a2e-8094-0727-50303cc157f6",
        appliesTo: "CLASS",
      },
      targets: [
        {
          selector: ".our-management-tab-link",
          originalId:
            "65efd664bd25d505d10cf0da|ba63e2e4-1a2e-8094-0727-50303cc157f6",
          appliesTo: "CLASS",
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1710827711513,
    },
    "e-419": {
      id: "e-419",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-420" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "65efd664bd25d505d10cf0da|42dc8cd7-7892-6ff8-8863-ba4fdf90559a",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "65efd664bd25d505d10cf0da|42dc8cd7-7892-6ff8-8863-ba4fdf90559a",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 20,
        scrollOffsetUnit: "%",
        delay: 0,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1710940788977,
    },
    "e-421": {
      id: "e-421",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-422" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "65efd664bd25d505d10cf0da|2094f906-df46-e04b-dcc7-d9fcde7e0ce3",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "65efd664bd25d505d10cf0da|2094f906-df46-e04b-dcc7-d9fcde7e0ce3",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 20,
        scrollOffsetUnit: "%",
        delay: 50,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1710940807875,
    },
  },
  actionLists: {
    a: {
      id: "a",
      title: "Testimonial slider arrow hover in",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-n-3",
              actionTypeId: "STYLE_BACKGROUND_COLOR",
              config: {
                delay: 0,
                easing: "easeInOut",
                duration: 500,
                target: {
                  useEventTarget: true,
                  id: "20db4045-bf75-5f63-8567-3cbdc526051b",
                },
                globalSwatchId: "",
                rValue: 0,
                bValue: 0,
                gValue: 0,
                aValue: 0,
              },
            },
            {
              id: "a-n-5",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".testimonial-slider-icon",
                  selectorGuids: ["6eafe1fa-1357-3b26-c41d-a433af6a0fc8"],
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-n-4",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "easeInOut",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".on-hover-icon",
                  selectorGuids: ["710bfa4a-4c96-c660-f082-fd87b57f1e0e"],
                },
                value: 0,
                unit: "",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-n",
              actionTypeId: "STYLE_BACKGROUND_COLOR",
              config: {
                delay: 0,
                easing: "ease",
                duration: 700,
                target: {
                  useEventTarget: true,
                  id: "20db4045-bf75-5f63-8567-3cbdc526051b",
                },
                globalSwatchId: "",
                rValue: 255,
                bValue: 255,
                gValue: 255,
                aValue: 1,
              },
            },
            {
              id: "a-n-2",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "ease",
                duration: 700,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".on-hover-icon",
                  selectorGuids: ["710bfa4a-4c96-c660-f082-fd87b57f1e0e"],
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-n-6",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "ease",
                duration: 700,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".testimonial-slider-icon",
                  selectorGuids: ["6eafe1fa-1357-3b26-c41d-a433af6a0fc8"],
                },
                value: 0,
                unit: "",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1704864888430,
    },
    "a-2": {
      id: "a-2",
      title: "Testimonial slider arrow hover out",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-2-n",
              actionTypeId: "STYLE_BACKGROUND_COLOR",
              config: {
                delay: 0,
                easing: "ease",
                duration: 500,
                target: {
                  useEventTarget: true,
                  id: "20db4045-bf75-5f63-8567-3cbdc526051b",
                },
                globalSwatchId: "",
                rValue: 0,
                bValue: 0,
                gValue: 0,
                aValue: 0,
              },
            },
            {
              id: "a-2-n-2",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "ease",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".testimonial-slider-icon",
                  selectorGuids: ["6eafe1fa-1357-3b26-c41d-a433af6a0fc8"],
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-2-n-3",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "ease",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".on-hover-icon",
                  selectorGuids: ["710bfa4a-4c96-c660-f082-fd87b57f1e0e"],
                },
                value: 0,
                unit: "",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1704864888430,
    },
    "a-4": {
      id: "a-4",
      title: "Accordion item open",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-4-n",
              actionTypeId: "STYLE_SIZE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".accordion-content",
                  selectorGuids: ["0fa513d4-4ffe-8e2c-4849-b5b3054bbc0d"],
                },
                heightValue: 0,
                widthUnit: "PX",
                heightUnit: "px",
                locked: false,
              },
            },
            {
              id: "a-4-n-9",
              actionTypeId: "STYLE_BACKGROUND_COLOR",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: true,
                  id: "2aed732a-8552-86aa-adca-13ecb0b020cb",
                },
                globalSwatchId: "",
                rValue: 255,
                bValue: 255,
                gValue: 255,
                aValue: 1,
              },
            },
            {
              id: "a-4-n-4",
              actionTypeId: "TRANSFORM_ROTATE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".open-close-line.second-line",
                  selectorGuids: [
                    "3659764f-7a69-f574-b44e-81dfb247308d",
                    "670bf21e-6ccb-391c-f729-f2601075129e",
                  ],
                },
                zValue: 90,
                xUnit: "DEG",
                yUnit: "DEG",
                zUnit: "deg",
              },
            },
            {
              id: "a-4-n-3",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".accordion-content",
                  selectorGuids: ["0fa513d4-4ffe-8e2c-4849-b5b3054bbc0d"],
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-4-n-2",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".accordion-content",
                  selectorGuids: ["0fa513d4-4ffe-8e2c-4849-b5b3054bbc0d"],
                },
                xValue: 0.9,
                yValue: 0.9,
                locked: true,
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-4-n-8",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: "",
                duration: 300,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".accordion-content",
                  selectorGuids: ["0fa513d4-4ffe-8e2c-4849-b5b3054bbc0d"],
                },
                xValue: 1,
                yValue: 1,
                locked: true,
              },
            },
            {
              id: "a-4-n-5",
              actionTypeId: "STYLE_SIZE",
              config: {
                delay: 0,
                easing: "",
                duration: 300,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".accordion-content",
                  selectorGuids: ["0fa513d4-4ffe-8e2c-4849-b5b3054bbc0d"],
                },
                widthUnit: "PX",
                heightUnit: "AUTO",
                locked: false,
              },
            },
            {
              id: "a-4-n-10",
              actionTypeId: "STYLE_BACKGROUND_COLOR",
              config: {
                delay: 0,
                easing: "ease",
                duration: 700,
                target: {
                  useEventTarget: true,
                  id: "2aed732a-8552-86aa-adca-13ecb0b020cb",
                },
                globalSwatchId: "",
                rValue: 251,
                bValue: 251,
                gValue: 251,
                aValue: 1,
              },
            },
            {
              id: "a-4-n-7",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 800,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".accordion-content",
                  selectorGuids: ["0fa513d4-4ffe-8e2c-4849-b5b3054bbc0d"],
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-4-n-6",
              actionTypeId: "TRANSFORM_ROTATE",
              config: {
                delay: 0,
                easing: "",
                duration: 300,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".open-close-line.second-line",
                  selectorGuids: [
                    "3659764f-7a69-f574-b44e-81dfb247308d",
                    "670bf21e-6ccb-391c-f729-f2601075129e",
                  ],
                },
                zValue: 0,
                xUnit: "DEG",
                yUnit: "DEG",
                zUnit: "deg",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1704998332123,
    },
    "a-5": {
      id: "a-5",
      title: "Accordion item close",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-5-n-5",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: "",
                duration: 300,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".accordion-content",
                  selectorGuids: ["0fa513d4-4ffe-8e2c-4849-b5b3054bbc0d"],
                },
                xValue: 0.9,
                yValue: 0.9,
                locked: true,
              },
            },
            {
              id: "a-5-n-9",
              actionTypeId: "STYLE_BACKGROUND_COLOR",
              config: {
                delay: 0,
                easing: "ease",
                duration: 700,
                target: {
                  useEventTarget: true,
                  id: "2aed732a-8552-86aa-adca-13ecb0b020cb",
                },
                globalSwatchId: "",
                rValue: 255,
                bValue: 255,
                gValue: 255,
                aValue: 1,
              },
            },
            {
              id: "a-5-n-6",
              actionTypeId: "STYLE_SIZE",
              config: {
                delay: 0,
                easing: "",
                duration: 300,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".accordion-content",
                  selectorGuids: ["0fa513d4-4ffe-8e2c-4849-b5b3054bbc0d"],
                },
                heightValue: 0,
                widthUnit: "PX",
                heightUnit: "px",
                locked: false,
              },
            },
            {
              id: "a-5-n-7",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 800,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".accordion-content",
                  selectorGuids: ["0fa513d4-4ffe-8e2c-4849-b5b3054bbc0d"],
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-5-n-8",
              actionTypeId: "TRANSFORM_ROTATE",
              config: {
                delay: 0,
                easing: "",
                duration: 300,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".open-close-line.second-line",
                  selectorGuids: [
                    "3659764f-7a69-f574-b44e-81dfb247308d",
                    "670bf21e-6ccb-391c-f729-f2601075129e",
                  ],
                },
                zValue: 90,
                xUnit: "DEG",
                yUnit: "DEG",
                zUnit: "deg",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1704998332123,
    },
    "a-6": {
      id: "a-6",
      title: "Clients logo move",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-6-n",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 25000,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".client-logo-inner",
                  selectorGuids: ["ccd56374-1197-995b-b951-f89a2c6e9d24"],
                },
                xValue: -100,
                xUnit: "%",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-6-n-2",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".client-logo-inner",
                  selectorGuids: ["ccd56374-1197-995b-b951-f89a2c6e9d24"],
                },
                xValue: 0,
                xUnit: "%",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1705036664973,
    },
    "a-7": {
      id: "a-7",
      title: "Team member marquee",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-7-n",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 30000,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".team-member-wrapper",
                  selectorGuids: ["345fa74c-a3da-02ab-8808-929edf76f07c"],
                },
                xValue: -100,
                xUnit: "%",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-7-n-2",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".team-member-wrapper",
                  selectorGuids: ["345fa74c-a3da-02ab-8808-929edf76f07c"],
                },
                xValue: 0,
                xUnit: "%",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1705054989633,
    },
    "a-8": {
      id: "a-8",
      title: "Timeline animation",
      continuousParameterGroups: [
        {
          id: "a-8-p",
          type: "SCROLL_PROGRESS",
          parameterLabel: "Scroll",
          continuousActionGroups: [
            {
              keyframe: 20,
              actionItems: [
                {
                  id: "a-8-n-3",
                  actionTypeId: "STYLE_OPACITY",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      id:
                        "65a9f49b837859a8d466af3c|8a7ba6df-d08a-fdaa-2492-aa9645be674b",
                    },
                    value: 0,
                    unit: "",
                  },
                },
                {
                  id: "a-8-n",
                  actionTypeId: "STYLE_SIZE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      selector: ".time-line-track-thumb",
                      selectorGuids: ["88991b0f-65cb-53ff-ce98-b986eb475768"],
                    },
                    heightValue: 0,
                    widthUnit: "PX",
                    heightUnit: "%",
                    locked: false,
                  },
                },
              ],
            },
            {
              keyframe: 25,
              actionItems: [
                {
                  id: "a-8-n-4",
                  actionTypeId: "STYLE_OPACITY",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      id:
                        "65a9f49b837859a8d466af3c|8a7ba6df-d08a-fdaa-2492-aa9645be674b",
                    },
                    value: 1,
                    unit: "",
                  },
                },
              ],
            },
            {
              keyframe: 34,
              actionItems: [
                {
                  id: "a-8-n-5",
                  actionTypeId: "STYLE_OPACITY",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      id:
                        "65a9f49b837859a8d466af3c|e156ff77-df99-d247-effe-1126dd2d60f5",
                    },
                    value: 0,
                    unit: "",
                  },
                },
              ],
            },
            {
              keyframe: 40,
              actionItems: [
                {
                  id: "a-8-n-6",
                  actionTypeId: "STYLE_OPACITY",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      id:
                        "65a9f49b837859a8d466af3c|e156ff77-df99-d247-effe-1126dd2d60f5",
                    },
                    value: 1,
                    unit: "",
                  },
                },
              ],
            },
            {
              keyframe: 47,
              actionItems: [
                {
                  id: "a-8-n-7",
                  actionTypeId: "STYLE_OPACITY",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      id:
                        "65a9f49b837859a8d466af3c|72733ba1-c4a2-40eb-9cb8-618e1f5f392b",
                    },
                    value: 0,
                    unit: "",
                  },
                },
              ],
            },
            {
              keyframe: 55,
              actionItems: [
                {
                  id: "a-8-n-8",
                  actionTypeId: "STYLE_OPACITY",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      id:
                        "65a9f49b837859a8d466af3c|72733ba1-c4a2-40eb-9cb8-618e1f5f392b",
                    },
                    value: 1,
                    unit: "",
                  },
                },
              ],
            },
            {
              keyframe: 58,
              actionItems: [
                {
                  id: "a-8-n-9",
                  actionTypeId: "STYLE_OPACITY",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      id:
                        "65a9f49b837859a8d466af3c|cb29ec43-6e8e-e1e1-2002-ac949b65e8d3",
                    },
                    value: 0,
                    unit: "",
                  },
                },
              ],
            },
            {
              keyframe: 65,
              actionItems: [
                {
                  id: "a-8-n-10",
                  actionTypeId: "STYLE_OPACITY",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      id:
                        "65a9f49b837859a8d466af3c|cb29ec43-6e8e-e1e1-2002-ac949b65e8d3",
                    },
                    value: 1,
                    unit: "",
                  },
                },
              ],
            },
            {
              keyframe: 72,
              actionItems: [
                {
                  id: "a-8-n-11",
                  actionTypeId: "STYLE_OPACITY",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      id:
                        "65a9f49b837859a8d466af3c|289f6a57-e448-f2cc-5c94-ac7c8592e781",
                    },
                    value: 0,
                    unit: "",
                  },
                },
              ],
            },
            {
              keyframe: 80,
              actionItems: [
                {
                  id: "a-8-n-2",
                  actionTypeId: "STYLE_SIZE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      selector: ".time-line-track-thumb",
                      selectorGuids: ["88991b0f-65cb-53ff-ce98-b986eb475768"],
                    },
                    heightValue: 100,
                    widthUnit: "PX",
                    heightUnit: "%",
                    locked: false,
                  },
                },
                {
                  id: "a-8-n-12",
                  actionTypeId: "STYLE_OPACITY",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      id:
                        "65a9f49b837859a8d466af3c|289f6a57-e448-f2cc-5c94-ac7c8592e781",
                    },
                    value: 1,
                    unit: "",
                  },
                },
              ],
            },
          ],
        },
      ],
      createdOn: 1705121469007,
    },
    "a-9": {
      id: "a-9",
      title: "Our location tab open",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-9-n",
              actionTypeId: "STYLE_SIZE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".our-location-tab-link-content-wrap",
                  selectorGuids: ["af20f80c-7693-4e6e-24bd-707b75f77ff8"],
                },
                heightValue: 0,
                widthUnit: "PX",
                heightUnit: "px",
                locked: false,
              },
            },
            {
              id: "a-9-n-6",
              actionTypeId: "TRANSFORM_ROTATE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".open-close-line.second-line",
                  selectorGuids: [
                    "3659764f-7a69-f574-b44e-81dfb247308d",
                    "670bf21e-6ccb-391c-f729-f2601075129e",
                  ],
                },
                zValue: 90,
                xUnit: "DEG",
                yUnit: "DEG",
                zUnit: "deg",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-9-n-2",
              actionTypeId: "STYLE_SIZE",
              config: {
                delay: 0,
                easing: "ease",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".our-location-tab-link-content-wrap",
                  selectorGuids: ["af20f80c-7693-4e6e-24bd-707b75f77ff8"],
                },
                widthUnit: "PX",
                heightUnit: "AUTO",
                locked: false,
              },
            },
            {
              id: "a-9-n-5",
              actionTypeId: "GENERAL_DISPLAY",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".background-gradient",
                  selectorGuids: ["4d24c0e0-8e4c-39dd-13f8-3ba8a3423051"],
                },
                value: "block",
              },
            },
            {
              id: "a-9-n-7",
              actionTypeId: "TRANSFORM_ROTATE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".open-close-line.second-line",
                  selectorGuids: [
                    "3659764f-7a69-f574-b44e-81dfb247308d",
                    "670bf21e-6ccb-391c-f729-f2601075129e",
                  ],
                },
                zValue: 0,
                xUnit: "DEG",
                yUnit: "DEG",
                zUnit: "deg",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1706124223259,
    },
    "a-10": {
      id: "a-10",
      title: "Our location tab close",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-10-n",
              actionTypeId: "STYLE_SIZE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".our-location-tab-link-content-wrap",
                  selectorGuids: ["af20f80c-7693-4e6e-24bd-707b75f77ff8"],
                },
                heightValue: 0,
                widthUnit: "PX",
                heightUnit: "px",
                locked: false,
              },
            },
            {
              id: "a-10-n-3",
              actionTypeId: "GENERAL_DISPLAY",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".background-gradient",
                  selectorGuids: ["4d24c0e0-8e4c-39dd-13f8-3ba8a3423051"],
                },
                value: "none",
              },
            },
            {
              id: "a-10-n-2",
              actionTypeId: "TRANSFORM_ROTATE",
              config: {
                delay: 0,
                easing: "ease",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".open-close-line.second-line",
                  selectorGuids: [
                    "3659764f-7a69-f574-b44e-81dfb247308d",
                    "670bf21e-6ccb-391c-f729-f2601075129e",
                  ],
                },
                zValue: 90,
                xUnit: "DEG",
                yUnit: "DEG",
                zUnit: "deg",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1706124223259,
    },
    "a-12": {
      id: "a-12",
      title: "Button hover in",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-12-n-3",
              actionTypeId: "STYLE_SIZE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".button-ellipse",
                  selectorGuids: ["257dff1a-b7a6-7d9d-5200-440d7895e545"],
                },
                widthValue: 60,
                widthUnit: "px",
                heightUnit: "PX",
                locked: false,
              },
            },
            {
              id: "a-12-n-7",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".button-ellipse",
                  selectorGuids: ["257dff1a-b7a6-7d9d-5200-440d7895e545"],
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "px",
                zUnit: "PX",
              },
            },
            {
              id: "a-12-n-5",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: true,
                  id: "218c0a69-4c8c-5a9e-ed3c-d126a579ab18",
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "px",
                zUnit: "PX",
              },
            },
            {
              id: "a-12-n-4",
              actionTypeId: "STYLE_SIZE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".button-ellipse",
                  selectorGuids: ["257dff1a-b7a6-7d9d-5200-440d7895e545"],
                },
                heightValue: 60,
                widthUnit: "px",
                heightUnit: "px",
                locked: false,
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-12-n",
              actionTypeId: "STYLE_SIZE",
              config: {
                delay: 0,
                easing: "ease",
                duration: 300,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".button-ellipse",
                  selectorGuids: ["257dff1a-b7a6-7d9d-5200-440d7895e545"],
                },
                widthValue: 90,
                widthUnit: "px",
                heightUnit: "PX",
                locked: false,
              },
            },
            {
              id: "a-12-n-8",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 300,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".button-ellipse",
                  selectorGuids: ["257dff1a-b7a6-7d9d-5200-440d7895e545"],
                },
                yValue: -4,
                xUnit: "PX",
                yUnit: "px",
                zUnit: "PX",
              },
            },
            {
              id: "a-12-n-6",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 300,
                target: {
                  useEventTarget: true,
                  id: "218c0a69-4c8c-5a9e-ed3c-d126a579ab18",
                },
                yValue: -4,
                xUnit: "PX",
                yUnit: "px",
                zUnit: "PX",
              },
            },
            {
              id: "a-12-n-2",
              actionTypeId: "STYLE_SIZE",
              config: {
                delay: 0,
                easing: "ease",
                duration: 300,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".button-ellipse",
                  selectorGuids: ["257dff1a-b7a6-7d9d-5200-440d7895e545"],
                },
                heightValue: 90,
                widthUnit: "px",
                heightUnit: "px",
                locked: false,
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1706171774605,
    },
    "a-13": {
      id: "a-13",
      title: "Button hover out",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-13-n",
              actionTypeId: "STYLE_SIZE",
              config: {
                delay: 0,
                easing: "ease",
                duration: 300,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".button-ellipse",
                  selectorGuids: ["257dff1a-b7a6-7d9d-5200-440d7895e545"],
                },
                widthValue: 60,
                widthUnit: "px",
                heightUnit: "PX",
                locked: false,
              },
            },
            {
              id: "a-13-n-4",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 300,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".button-ellipse",
                  selectorGuids: ["257dff1a-b7a6-7d9d-5200-440d7895e545"],
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "px",
                zUnit: "PX",
              },
            },
            {
              id: "a-13-n-3",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 300,
                target: {
                  useEventTarget: true,
                  id: "218c0a69-4c8c-5a9e-ed3c-d126a579ab18",
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "px",
                zUnit: "PX",
              },
            },
            {
              id: "a-13-n-2",
              actionTypeId: "STYLE_SIZE",
              config: {
                delay: 0,
                easing: "ease",
                duration: 300,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".button-ellipse",
                  selectorGuids: ["257dff1a-b7a6-7d9d-5200-440d7895e545"],
                },
                heightValue: 60,
                widthUnit: "px",
                heightUnit: "px",
                locked: false,
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1706171774605,
    },
    "a-15": {
      id: "a-15",
      title: "Social link hover in",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-15-n",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".social-link-hover-gradient",
                  selectorGuids: ["749c3ba6-b54e-c925-aec8-21fe09686826"],
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-15-n-3",
              actionTypeId: "STYLE_TEXT_COLOR",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: true,
                  id: "b6395dac-0396-8136-bba5-f45782815dbe",
                },
                globalSwatchId: "",
                rValue: 5,
                bValue: 25,
                gValue: 4,
                aValue: 1,
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-15-n-4",
              actionTypeId: "STYLE_TEXT_COLOR",
              config: {
                delay: 0,
                easing: "ease",
                duration: 500,
                target: {
                  useEventTarget: true,
                  id: "b6395dac-0396-8136-bba5-f45782815dbe",
                },
                globalSwatchId: "",
                rValue: 255,
                bValue: 255,
                gValue: 255,
                aValue: 1,
              },
            },
            {
              id: "a-15-n-2",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "ease",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".social-link-hover-gradient",
                  selectorGuids: ["749c3ba6-b54e-c925-aec8-21fe09686826"],
                },
                value: 1,
                unit: "",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1706253081045,
    },
    "a-16": {
      id: "a-16",
      title: "Social link hover out",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-16-n",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "ease",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".social-link-hover-gradient",
                  selectorGuids: ["749c3ba6-b54e-c925-aec8-21fe09686826"],
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-16-n-2",
              actionTypeId: "STYLE_TEXT_COLOR",
              config: {
                delay: 0,
                easing: "ease",
                duration: 500,
                target: {
                  useEventTarget: true,
                  id: "b6395dac-0396-8136-bba5-f45782815dbe",
                },
                globalSwatchId: "",
                rValue: 5,
                bValue: 25,
                gValue: 4,
                aValue: 1,
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1706253081045,
    },
    "a-17": {
      id: "a-17",
      title: "Nav menu open",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-17-n",
              actionTypeId: "GENERAL_DISPLAY",
              config: {
                delay: 0,
                easing: "ease",
                duration: 0,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".menu-icon-line-middle",
                  selectorGuids: ["4a23dc7d-b034-f6d2-6522-bf2970610a4f"],
                },
                value: "none",
              },
            },
            {
              id: "a-17-n-5",
              actionTypeId: "TRANSFORM_ROTATE",
              config: {
                delay: 0,
                easing: "ease",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".menu-icon-line-bottom",
                  selectorGuids: ["002aec72-ec90-1a99-42c0-8f5122652964"],
                },
                zValue: 45,
                xUnit: "DEG",
                yUnit: "DEG",
                zUnit: "deg",
              },
            },
            {
              id: "a-17-n-4",
              actionTypeId: "TRANSFORM_ROTATE",
              config: {
                delay: 0,
                easing: "ease",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".menu-icon-line-top",
                  selectorGuids: ["30506827-d2fa-240b-53d5-90d8c82fc531"],
                },
                zValue: -45,
                xUnit: "DEG",
                yUnit: "DEG",
                zUnit: "deg",
              },
            },
            {
              id: "a-17-n-3",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "ease",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".menu-icon-line-top",
                  selectorGuids: ["30506827-d2fa-240b-53d5-90d8c82fc531"],
                },
                yValue: 1,
                xUnit: "PX",
                yUnit: "px",
                zUnit: "PX",
              },
            },
            {
              id: "a-17-n-2",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "ease",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".menu-icon-line-bottom",
                  selectorGuids: ["002aec72-ec90-1a99-42c0-8f5122652964"],
                },
                yValue: -1,
                xUnit: "PX",
                yUnit: "px",
                zUnit: "PX",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1706299153521,
    },
    "a-18": {
      id: "a-18",
      title: "Nav menu close",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-18-n",
              actionTypeId: "GENERAL_DISPLAY",
              config: {
                delay: 0,
                easing: "ease",
                duration: 0,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".menu-icon-line-middle",
                  selectorGuids: ["4a23dc7d-b034-f6d2-6522-bf2970610a4f"],
                },
                value: "block",
              },
            },
            {
              id: "a-18-n-2",
              actionTypeId: "TRANSFORM_ROTATE",
              config: {
                delay: 0,
                easing: "ease",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".menu-icon-line-bottom",
                  selectorGuids: ["002aec72-ec90-1a99-42c0-8f5122652964"],
                },
                zValue: 0,
                xUnit: "DEG",
                yUnit: "DEG",
                zUnit: "deg",
              },
            },
            {
              id: "a-18-n-3",
              actionTypeId: "TRANSFORM_ROTATE",
              config: {
                delay: 0,
                easing: "ease",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".menu-icon-line-top",
                  selectorGuids: ["30506827-d2fa-240b-53d5-90d8c82fc531"],
                },
                zValue: 0,
                xUnit: "DEG",
                yUnit: "DEG",
                zUnit: "deg",
              },
            },
            {
              id: "a-18-n-4",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "ease",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".menu-icon-line-top",
                  selectorGuids: ["30506827-d2fa-240b-53d5-90d8c82fc531"],
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "px",
                zUnit: "PX",
              },
            },
            {
              id: "a-18-n-5",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "ease",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".menu-icon-line-bottom",
                  selectorGuids: ["002aec72-ec90-1a99-42c0-8f5122652964"],
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "px",
                zUnit: "PX",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1706299153521,
    },
    "a-19": {
      id: "a-19",
      title: "Quick show card animation",
      continuousParameterGroups: [
        {
          id: "a-19-p",
          type: "SCROLL_PROGRESS",
          parameterLabel: "Scroll",
          continuousActionGroups: [
            {
              keyframe: 13,
              actionItems: [
                {
                  id: "a-19-n-5",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      id:
                        "65a9f49b837859a8d466af30|907d136e-d1e7-95f4-d052-8f6e8e2cdaa8",
                    },
                    xValue: 600,
                    xUnit: "px",
                    yUnit: "PX",
                    zUnit: "PX",
                  },
                },
                {
                  id: "a-19-n-7",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      id:
                        "65a9f49b837859a8d466af30|907d136e-d1e7-95f4-d052-8f6e8e2cdaac",
                    },
                    xValue: -620,
                    xUnit: "px",
                    yUnit: "PX",
                    zUnit: "PX",
                  },
                },
                {
                  id: "a-19-n-15",
                  actionTypeId: "STYLE_OPACITY",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      id:
                        "65a9f49b837859a8d466af30|907d136e-d1e7-95f4-d052-8f6e8e2cdaa8",
                    },
                    value: 0,
                    unit: "",
                  },
                },
                {
                  id: "a-19-n-17",
                  actionTypeId: "STYLE_OPACITY",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      id:
                        "65a9f49b837859a8d466af30|907d136e-d1e7-95f4-d052-8f6e8e2cdaac",
                    },
                    value: 0,
                    unit: "",
                  },
                },
              ],
            },
            {
              keyframe: 25,
              actionItems: [
                {
                  id: "a-19-n",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      id:
                        "65a9f49b837859a8d466af30|85f17e4b-0644-5330-12a6-46925e0aafb7",
                    },
                    xValue: 470,
                    yValue: 100,
                    xUnit: "px",
                    yUnit: "px",
                    zUnit: "PX",
                  },
                },
                {
                  id: "a-19-n-3",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      id:
                        "65a9f49b837859a8d466af30|0051e812-29fc-eae9-65bc-2dfe06059f9e",
                    },
                    xValue: -520,
                    yValue: 100,
                    xUnit: "px",
                    yUnit: "px",
                    zUnit: "PX",
                  },
                },
                {
                  id: "a-19-n-9",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      id:
                        "65a9f49b837859a8d466af30|03774c61-c191-6585-dfb9-9f9708f6d81f",
                    },
                    xValue: 490,
                    yValue: -110,
                    xUnit: "px",
                    yUnit: "px",
                    zUnit: "PX",
                  },
                },
                {
                  id: "a-19-n-11",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      id:
                        "65a9f49b837859a8d466af30|03774c61-c191-6585-dfb9-9f9708f6d823",
                    },
                    xValue: -550,
                    yValue: -110,
                    xUnit: "px",
                    yUnit: "px",
                    zUnit: "PX",
                  },
                },
                {
                  id: "a-19-n-13",
                  actionTypeId: "STYLE_OPACITY",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      selector: ".quick-show-image",
                      selectorGuids: ["da12466f-5009-ad3b-bc80-d024211020fb"],
                    },
                    value: 0,
                    unit: "",
                  },
                },
              ],
            },
            {
              keyframe: 59,
              actionItems: [
                {
                  id: "a-19-n-6",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      id:
                        "65a9f49b837859a8d466af30|907d136e-d1e7-95f4-d052-8f6e8e2cdaa8",
                    },
                    xValue: 0,
                    xUnit: "px",
                    yUnit: "PX",
                    zUnit: "PX",
                  },
                },
                {
                  id: "a-19-n-8",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      id:
                        "65a9f49b837859a8d466af30|907d136e-d1e7-95f4-d052-8f6e8e2cdaac",
                    },
                    xValue: 0,
                    xUnit: "px",
                    yUnit: "PX",
                    zUnit: "PX",
                  },
                },
                {
                  id: "a-19-n-16",
                  actionTypeId: "STYLE_OPACITY",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      id:
                        "65a9f49b837859a8d466af30|907d136e-d1e7-95f4-d052-8f6e8e2cdaa8",
                    },
                    value: 1,
                    unit: "",
                  },
                },
              ],
            },
            {
              keyframe: 75,
              actionItems: [
                {
                  id: "a-19-n-2",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      id:
                        "65a9f49b837859a8d466af30|85f17e4b-0644-5330-12a6-46925e0aafb7",
                    },
                    xValue: 0,
                    yValue: 0,
                    xUnit: "px",
                    yUnit: "px",
                    zUnit: "PX",
                  },
                },
                {
                  id: "a-19-n-4",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      id:
                        "65a9f49b837859a8d466af30|0051e812-29fc-eae9-65bc-2dfe06059f9e",
                    },
                    xValue: 0,
                    yValue: 0,
                    xUnit: "px",
                    yUnit: "px",
                    zUnit: "PX",
                  },
                },
                {
                  id: "a-19-n-10",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      id:
                        "65a9f49b837859a8d466af30|03774c61-c191-6585-dfb9-9f9708f6d81f",
                    },
                    xValue: 0,
                    yValue: 0,
                    xUnit: "px",
                    yUnit: "px",
                    zUnit: "PX",
                  },
                },
                {
                  id: "a-19-n-12",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      id:
                        "65a9f49b837859a8d466af30|03774c61-c191-6585-dfb9-9f9708f6d823",
                    },
                    xValue: 0,
                    yValue: 0,
                    xUnit: "px",
                    yUnit: "px",
                    zUnit: "PX",
                  },
                },
                {
                  id: "a-19-n-18",
                  actionTypeId: "STYLE_OPACITY",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      id:
                        "65a9f49b837859a8d466af30|907d136e-d1e7-95f4-d052-8f6e8e2cdaac",
                    },
                    value: 1,
                    unit: "",
                  },
                },
              ],
            },
            {
              keyframe: 100,
              actionItems: [
                {
                  id: "a-19-n-14",
                  actionTypeId: "STYLE_OPACITY",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      selector: ".quick-show-image",
                      selectorGuids: ["da12466f-5009-ad3b-bc80-d024211020fb"],
                    },
                    value: 1,
                    unit: "",
                  },
                },
              ],
            },
          ],
        },
      ],
      createdOn: 1706299718049,
    },
    "a-11": {
      id: "a-11",
      title: "Home feature item scroll",
      continuousParameterGroups: [
        {
          id: "a-11-p",
          type: "SCROLL_PROGRESS",
          parameterLabel: "Scroll",
          continuousActionGroups: [
            {
              keyframe: 0,
              actionItems: [
                {
                  id: "a-11-n-3",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      id:
                        "65a9f49b837859a8d466af30|4f2b0e08-53ed-9504-6ce3-45220bf2a1f9",
                    },
                    xValue: 0,
                    yValue: 0,
                    xUnit: "px",
                    yUnit: "px",
                    zUnit: "PX",
                  },
                },
                {
                  id: "a-11-n-5",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      selector: ".feature-two-item-image.expense-card-image",
                      selectorGuids: [
                        "5b61a578-4708-8d3f-4405-71b24a4b5dfb",
                        "d2d5d2b0-b144-2794-f74f-3dbf34c3b9ad",
                      ],
                    },
                    yValue: 80,
                    xUnit: "PX",
                    yUnit: "px",
                    zUnit: "PX",
                  },
                },
                {
                  id: "a-11-n-7",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      selector: ".indicator-details",
                      selectorGuids: ["acac9752-ffe0-cfd7-43fa-f8a23a3f25e0"],
                    },
                    xValue: 0,
                    yValue: 0,
                    xUnit: "%",
                    yUnit: "%",
                    zUnit: "PX",
                  },
                },
              ],
            },
            {
              keyframe: 100,
              actionItems: [
                {
                  id: "a-11-n-4",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      id:
                        "65a9f49b837859a8d466af30|4f2b0e08-53ed-9504-6ce3-45220bf2a1f9",
                    },
                    xValue: 60,
                    yValue: -30,
                    xUnit: "px",
                    yUnit: "px",
                    zUnit: "PX",
                  },
                },
                {
                  id: "a-11-n-6",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      selector: ".feature-two-item-image.expense-card-image",
                      selectorGuids: [
                        "5b61a578-4708-8d3f-4405-71b24a4b5dfb",
                        "d2d5d2b0-b144-2794-f74f-3dbf34c3b9ad",
                      ],
                    },
                    yValue: 0,
                    xUnit: "PX",
                    yUnit: "px",
                    zUnit: "PX",
                  },
                },
                {
                  id: "a-11-n-8",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      selector: ".indicator-details",
                      selectorGuids: ["acac9752-ffe0-cfd7-43fa-f8a23a3f25e0"],
                    },
                    xValue: 40,
                    yValue: -60,
                    xUnit: "%",
                    yUnit: "%",
                    zUnit: "PX",
                  },
                },
              ],
            },
          ],
        },
      ],
      createdOn: 1706157904060,
    },
    "a-20": {
      id: "a-20",
      title: "About us showcase scroll",
      continuousParameterGroups: [
        {
          id: "a-20-p",
          type: "SCROLL_PROGRESS",
          parameterLabel: "Scroll",
          continuousActionGroups: [
            {
              keyframe: 0,
              actionItems: [
                {
                  id: "a-20-n",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      id:
                        "65a9f49b837859a8d466af3c|fefa56f9-89e7-a9a0-5935-ce79e48dcc48",
                    },
                    yValue: 0,
                    xUnit: "PX",
                    yUnit: "px",
                    zUnit: "PX",
                  },
                },
                {
                  id: "a-20-n-3",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      id:
                        "65a9f49b837859a8d466af3c|e9535e9b-6e83-12b0-2c52-b38c76db9e61",
                    },
                    yValue: 0,
                    xUnit: "PX",
                    yUnit: "px",
                    zUnit: "PX",
                  },
                },
                {
                  id: "a-20-n-5",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      id:
                        "65a9f49b837859a8d466af3c|c795db7d-d39c-28ea-bf04-914bafe622f7",
                    },
                    yValue: 0,
                    xUnit: "PX",
                    yUnit: "px",
                    zUnit: "PX",
                  },
                },
                {
                  id: "a-20-n-7",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      id:
                        "65a9f49b837859a8d466af3c|d1a61bad-20c3-0a0c-e4ca-328db4fb9516",
                    },
                    yValue: 0,
                    xUnit: "PX",
                    yUnit: "px",
                    zUnit: "PX",
                  },
                },
              ],
            },
            {
              keyframe: 74,
              actionItems: [
                {
                  id: "a-20-n-2",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      id:
                        "65a9f49b837859a8d466af3c|fefa56f9-89e7-a9a0-5935-ce79e48dcc48",
                    },
                    yValue: -60,
                    xUnit: "PX",
                    yUnit: "px",
                    zUnit: "PX",
                  },
                },
                {
                  id: "a-20-n-4",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      id:
                        "65a9f49b837859a8d466af3c|e9535e9b-6e83-12b0-2c52-b38c76db9e61",
                    },
                    yValue: 60,
                    xUnit: "PX",
                    yUnit: "px",
                    zUnit: "PX",
                  },
                },
                {
                  id: "a-20-n-6",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      id:
                        "65a9f49b837859a8d466af3c|c795db7d-d39c-28ea-bf04-914bafe622f7",
                    },
                    yValue: -60,
                    xUnit: "PX",
                    yUnit: "px",
                    zUnit: "PX",
                  },
                },
                {
                  id: "a-20-n-8",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      id:
                        "65a9f49b837859a8d466af3c|d1a61bad-20c3-0a0c-e4ca-328db4fb9516",
                    },
                    yValue: 40,
                    xUnit: "PX",
                    yUnit: "px",
                    zUnit: "PX",
                  },
                },
              ],
            },
          ],
        },
      ],
      createdOn: 1706935307807,
    },
    "a-21": {
      id: "a-21",
      title: "Nav background opacity change",
      continuousParameterGroups: [
        {
          id: "a-21-p",
          type: "SCROLL_PROGRESS",
          parameterLabel: "Scroll",
          continuousActionGroups: [
            {
              keyframe: 6,
              actionItems: [
                {
                  id: "a-21-n",
                  actionTypeId: "STYLE_BACKGROUND_COLOR",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: { id: "ec6e2703-623a-3a04-b21b-e85324299e73" },
                    globalSwatchId: "",
                    rValue: 255,
                    bValue: 255,
                    gValue: 255,
                    aValue: 0.4,
                  },
                },
              ],
            },
            {
              keyframe: 10,
              actionItems: [
                {
                  id: "a-21-n-2",
                  actionTypeId: "STYLE_BACKGROUND_COLOR",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: { id: "ec6e2703-623a-3a04-b21b-e85324299e73" },
                    globalSwatchId: "",
                    rValue: 255,
                    bValue: 255,
                    gValue: 255,
                    aValue: 0.9,
                  },
                },
              ],
            },
          ],
        },
      ],
      createdOn: 1707377175113,
    },
    "a-28": {
      id: "a-28",
      title: "Compare plan tab change",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-28-n",
              actionTypeId: "GENERAL_DISPLAY",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".toggle-circle-small",
                  selectorGuids: ["6d106450-ea66-03bf-57d5-926597a704ab"],
                },
                value: "none",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-28-n-2",
              actionTypeId: "GENERAL_DISPLAY",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".toggle-circle-small",
                  selectorGuids: ["6d106450-ea66-03bf-57d5-926597a704ab"],
                },
                value: "block",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1709879980551,
    },
    "a-29": {
      id: "a-29",
      title: "Compare plan tab change out of vew",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-29-n",
              actionTypeId: "GENERAL_DISPLAY",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".toggle-circle-small",
                  selectorGuids: ["6d106450-ea66-03bf-57d5-926597a704ab"],
                },
                value: "none",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1709879980551,
    },
    "a-31": {
      id: "a-31",
      title: "Icon list marquee",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-31-n",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 25000,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".icon-marquee-list",
                  selectorGuids: ["7e35ad94-4979-d5c4-5540-bcd0a45f373c"],
                },
                xValue: -100,
                xUnit: "%",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-31-n-2",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".icon-marquee-list",
                  selectorGuids: ["7e35ad94-4979-d5c4-5540-bcd0a45f373c"],
                },
                xValue: 0,
                xUnit: "%",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1710761126911,
    },
    "a-32": {
      id: "a-32",
      title: "Slider image in view",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-32-n",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".slider-slide-image",
                  selectorGuids: ["79d87cb4-0077-d40f-2cf3-f77890f31517"],
                },
                yValue: 1,
                locked: false,
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1710768287948,
    },
    "a-33": {
      id: "a-33",
      title: "Slider image out of view",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-33-n",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".slider-slide-image",
                  selectorGuids: ["79d87cb4-0077-d40f-2cf3-f77890f31517"],
                },
                yValue: 0.94,
                locked: false,
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1710768399977,
    },
    "a-34": {
      id: "a-34",
      title: "Open position item hove",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-34-n",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".open-position-hover-icon-wrap",
                  selectorGuids: ["63419dbf-938c-e3f9-4551-095b9d337f50"],
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-34-n-3",
              actionTypeId: "GENERAL_DISPLAY",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".open-position-hover-icon-wrap",
                  selectorGuids: ["63419dbf-938c-e3f9-4551-095b9d337f50"],
                },
                value: "none",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-34-n-2",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "easeIn",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".open-position-hover-icon-wrap",
                  selectorGuids: ["63419dbf-938c-e3f9-4551-095b9d337f50"],
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-34-n-4",
              actionTypeId: "GENERAL_DISPLAY",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".open-position-hover-icon-wrap",
                  selectorGuids: ["63419dbf-938c-e3f9-4551-095b9d337f50"],
                },
                value: "flex",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1710786182434,
    },
    "a-35": {
      id: "a-35",
      title: "Open position item hove out",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-35-n",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "easeInOut",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".open-position-hover-icon-wrap",
                  selectorGuids: ["63419dbf-938c-e3f9-4551-095b9d337f50"],
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-35-n-2",
              actionTypeId: "GENERAL_DISPLAY",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".open-position-hover-icon-wrap",
                  selectorGuids: ["63419dbf-938c-e3f9-4551-095b9d337f50"],
                },
                value: "none",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1710786182434,
    },
    "a-36": {
      id: "a-36",
      title: "Article toggle button hove",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-36-n",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".button-ellipse.article-toggle-ellipse",
                  selectorGuids: [
                    "257dff1a-b7a6-7d9d-5200-440d7895e545",
                    "52965068-47e4-781e-8b58-8132413a3bd7",
                  ],
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-36-n-2",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".button-ellipse.article-toggle-ellipse",
                  selectorGuids: [
                    "257dff1a-b7a6-7d9d-5200-440d7895e545",
                    "52965068-47e4-781e-8b58-8132413a3bd7",
                  ],
                },
                xValue: 0.9,
                yValue: 0.9,
                locked: true,
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-36-n-3",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "easeIn",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".button-ellipse.article-toggle-ellipse",
                  selectorGuids: [
                    "257dff1a-b7a6-7d9d-5200-440d7895e545",
                    "52965068-47e4-781e-8b58-8132413a3bd7",
                  ],
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-36-n-4",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: "easeIn",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".button-ellipse.article-toggle-ellipse",
                  selectorGuids: [
                    "257dff1a-b7a6-7d9d-5200-440d7895e545",
                    "52965068-47e4-781e-8b58-8132413a3bd7",
                  ],
                },
                xValue: 1,
                yValue: 1,
                locked: true,
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1710824496316,
    },
    "a-37": {
      id: "a-37",
      title: "Article toggle button hove out",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-37-n",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "easeOut",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".button-ellipse.article-toggle-ellipse",
                  selectorGuids: [
                    "257dff1a-b7a6-7d9d-5200-440d7895e545",
                    "52965068-47e4-781e-8b58-8132413a3bd7",
                  ],
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-37-n-2",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: "easeOut",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".button-ellipse.article-toggle-ellipse",
                  selectorGuids: [
                    "257dff1a-b7a6-7d9d-5200-440d7895e545",
                    "52965068-47e4-781e-8b58-8132413a3bd7",
                  ],
                },
                xValue: 0.9,
                yValue: 0.9,
                locked: true,
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1710824496316,
    },
    "a-38": {
      id: "a-38",
      title: "Our management tab open",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-38-n",
              actionTypeId: "STYLE_SIZE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".our-management-tab-link-content",
                  selectorGuids: ["4fe5143e-afb3-6017-3670-a280cdb568b1"],
                },
                heightValue: 0,
                widthUnit: "PX",
                heightUnit: "px",
                locked: false,
              },
            },
            {
              id: "a-38-n-3",
              actionTypeId: "TRANSFORM_ROTATE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector:
                    ".open-close-line.second-line.our-management-iocn-second",
                  selectorGuids: [
                    "3659764f-7a69-f574-b44e-81dfb247308d",
                    "670bf21e-6ccb-391c-f729-f2601075129e",
                    "64a7f09e-788c-c00e-2baf-c560afcfec86",
                  ],
                },
                zValue: 90,
                xUnit: "DEG",
                yUnit: "DEG",
                zUnit: "deg",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-38-n-2",
              actionTypeId: "STYLE_SIZE",
              config: {
                delay: 0,
                easing: "ease",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".our-management-tab-link-content",
                  selectorGuids: ["4fe5143e-afb3-6017-3670-a280cdb568b1"],
                },
                widthUnit: "PX",
                heightUnit: "AUTO",
                locked: false,
              },
            },
            {
              id: "a-38-n-4",
              actionTypeId: "TRANSFORM_ROTATE",
              config: {
                delay: 0,
                easing: "ease",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector:
                    ".open-close-line.second-line.our-management-iocn-second",
                  selectorGuids: [
                    "3659764f-7a69-f574-b44e-81dfb247308d",
                    "670bf21e-6ccb-391c-f729-f2601075129e",
                    "64a7f09e-788c-c00e-2baf-c560afcfec86",
                  ],
                },
                zValue: 0,
                xUnit: "DEG",
                yUnit: "DEG",
                zUnit: "deg",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1710827717616,
    },
    "a-39": {
      id: "a-39",
      title: "Our management tab close",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-39-n",
              actionTypeId: "STYLE_SIZE",
              config: {
                delay: 0,
                easing: "ease",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".our-management-tab-link-content",
                  selectorGuids: ["4fe5143e-afb3-6017-3670-a280cdb568b1"],
                },
                heightValue: 0,
                widthUnit: "PX",
                heightUnit: "px",
                locked: false,
              },
            },
            {
              id: "a-39-n-2",
              actionTypeId: "TRANSFORM_ROTATE",
              config: {
                delay: 0,
                easing: "ease",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector:
                    ".open-close-line.second-line.our-management-iocn-second",
                  selectorGuids: [
                    "3659764f-7a69-f574-b44e-81dfb247308d",
                    "670bf21e-6ccb-391c-f729-f2601075129e",
                    "64a7f09e-788c-c00e-2baf-c560afcfec86",
                  ],
                },
                zValue: 90,
                xUnit: "DEG",
                yUnit: "DEG",
                zUnit: "deg",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1710827717616,
    },
    slideInBottom: {
      id: "slideInBottom",
      useFirstGroupAsInitialState: true,
      actionItemGroups: [
        {
          actionItems: [
            {
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                duration: 0,
                target: {
                  id: "N/A",
                  appliesTo: "TRIGGER_ELEMENT",
                  useEventTarget: true,
                },
                value: 0,
              },
            },
          ],
        },
        {
          actionItems: [
            {
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                duration: 0,
                target: {
                  id: "N/A",
                  appliesTo: "TRIGGER_ELEMENT",
                  useEventTarget: true,
                },
                xValue: 0,
                yValue: 100,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "outQuart",
                duration: 1000,
                target: {
                  id: "N/A",
                  appliesTo: "TRIGGER_ELEMENT",
                  useEventTarget: true,
                },
                xValue: 0,
                yValue: 0,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "outQuart",
                duration: 1000,
                target: {
                  id: "N/A",
                  appliesTo: "TRIGGER_ELEMENT",
                  useEventTarget: true,
                },
                value: 1,
              },
            },
          ],
        },
      ],
    },
    growIn: {
      id: "growIn",
      useFirstGroupAsInitialState: true,
      actionItemGroups: [
        {
          actionItems: [
            {
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                duration: 0,
                target: {
                  id: "N/A",
                  appliesTo: "TRIGGER_ELEMENT",
                  useEventTarget: true,
                },
                value: 0,
              },
            },
          ],
        },
        {
          actionItems: [
            {
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                duration: 0,
                target: {
                  id: "N/A",
                  appliesTo: "TRIGGER_ELEMENT",
                  useEventTarget: true,
                },
                xValue: 0.7500000000000001,
                yValue: 0.7500000000000001,
              },
            },
          ],
        },
        {
          actionItems: [
            {
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: "outQuart",
                duration: 1000,
                target: {
                  id: "N/A",
                  appliesTo: "TRIGGER_ELEMENT",
                  useEventTarget: true,
                },
                xValue: 1,
                yValue: 1,
              },
            },
            {
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "outQuart",
                duration: 1000,
                target: {
                  id: "N/A",
                  appliesTo: "TRIGGER_ELEMENT",
                  useEventTarget: true,
                },
                value: 1,
              },
            },
          ],
        },
      ],
    },
    slideInTop: {
      id: "slideInTop",
      useFirstGroupAsInitialState: true,
      actionItemGroups: [
        {
          actionItems: [
            {
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                duration: 0,
                target: {
                  id: "N/A",
                  appliesTo: "TRIGGER_ELEMENT",
                  useEventTarget: true,
                },
                value: 0,
              },
            },
          ],
        },
        {
          actionItems: [
            {
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                duration: 0,
                target: {
                  id: "N/A",
                  appliesTo: "TRIGGER_ELEMENT",
                  useEventTarget: true,
                },
                xValue: 0,
                yValue: -100,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "outQuart",
                duration: 1000,
                target: {
                  id: "N/A",
                  appliesTo: "TRIGGER_ELEMENT",
                  useEventTarget: true,
                },
                value: 1,
              },
            },
            {
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "outQuart",
                duration: 1000,
                target: {
                  id: "N/A",
                  appliesTo: "TRIGGER_ELEMENT",
                  useEventTarget: true,
                },
                xValue: 0,
                yValue: 0,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
          ],
        },
      ],
    },
    slideInRight: {
      id: "slideInRight",
      useFirstGroupAsInitialState: true,
      actionItemGroups: [
        {
          actionItems: [
            {
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                duration: 0,
                target: {
                  id: "N/A",
                  appliesTo: "TRIGGER_ELEMENT",
                  useEventTarget: true,
                },
                value: 0,
              },
            },
          ],
        },
        {
          actionItems: [
            {
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                duration: 0,
                target: {
                  id: "N/A",
                  appliesTo: "TRIGGER_ELEMENT",
                  useEventTarget: true,
                },
                xValue: 100,
                yValue: 0,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "outQuart",
                duration: 1000,
                target: {
                  id: "N/A",
                  appliesTo: "TRIGGER_ELEMENT",
                  useEventTarget: true,
                },
                value: 1,
              },
            },
            {
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "outQuart",
                duration: 1000,
                target: {
                  id: "N/A",
                  appliesTo: "TRIGGER_ELEMENT",
                  useEventTarget: true,
                },
                xValue: 0,
                yValue: 0,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
          ],
        },
      ],
    },
  },
  site: {
    mediaQueries: [
      { key: "main", min: 992, max: 10000 },
      { key: "medium", min: 768, max: 991 },
      { key: "small", min: 480, max: 767 },
      { key: "tiny", min: 0, max: 479 },
    ],
  },
});
