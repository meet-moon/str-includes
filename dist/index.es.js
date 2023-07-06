import Te, { useCallback as cr, useState as Ee } from "react";
var Q = { exports: {} }, V = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Re;
function fr() {
  if (Re)
    return V;
  Re = 1;
  var c = Te, p = Symbol.for("react.element"), b = Symbol.for("react.fragment"), u = Object.prototype.hasOwnProperty, k = c.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, T = { key: !0, ref: !0, __self: !0, __source: !0 };
  function m(j, f, _) {
    var h, y = {}, w = null, P = null;
    _ !== void 0 && (w = "" + _), f.key !== void 0 && (w = "" + f.key), f.ref !== void 0 && (P = f.ref);
    for (h in f)
      u.call(f, h) && !T.hasOwnProperty(h) && (y[h] = f[h]);
    if (j && j.defaultProps)
      for (h in f = j.defaultProps, f)
        y[h] === void 0 && (y[h] = f[h]);
    return { $$typeof: p, type: j, key: w, ref: P, props: y, _owner: k.current };
  }
  return V.Fragment = b, V.jsx = m, V.jsxs = m, V;
}
var I = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var _e;
function dr() {
  return _e || (_e = 1, process.env.NODE_ENV !== "production" && function() {
    var c = Te, p = Symbol.for("react.element"), b = Symbol.for("react.portal"), u = Symbol.for("react.fragment"), k = Symbol.for("react.strict_mode"), T = Symbol.for("react.profiler"), m = Symbol.for("react.provider"), j = Symbol.for("react.context"), f = Symbol.for("react.forward_ref"), _ = Symbol.for("react.suspense"), h = Symbol.for("react.suspense_list"), y = Symbol.for("react.memo"), w = Symbol.for("react.lazy"), P = Symbol.for("react.offscreen"), N = Symbol.iterator, Oe = "@@iterator";
    function ke(e) {
      if (e === null || typeof e != "object")
        return null;
      var r = N && e[N] || e[Oe];
      return typeof r == "function" ? r : null;
    }
    var L = c.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function x(e) {
      {
        for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), a = 1; a < r; a++)
          t[a - 1] = arguments[a];
        Pe("error", e, t);
      }
    }
    function Pe(e, r, t) {
      {
        var a = L.ReactDebugCurrentFrame, o = a.getStackAddendum();
        o !== "" && (r += "%s", t = t.concat([o]));
        var l = t.map(function(s) {
          return String(s);
        });
        l.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, l);
      }
    }
    var Ne = !1, Le = !1, De = !1, Ae = !1, Fe = !1, ee;
    ee = Symbol.for("react.module.reference");
    function Me(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === u || e === T || Fe || e === k || e === _ || e === h || Ae || e === P || Ne || Le || De || typeof e == "object" && e !== null && (e.$$typeof === w || e.$$typeof === y || e.$$typeof === m || e.$$typeof === j || e.$$typeof === f || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === ee || e.getModuleId !== void 0));
    }
    function Ve(e, r, t) {
      var a = e.displayName;
      if (a)
        return a;
      var o = r.displayName || r.name || "";
      return o !== "" ? t + "(" + o + ")" : t;
    }
    function re(e) {
      return e.displayName || "Context";
    }
    function E(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && x("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case u:
          return "Fragment";
        case b:
          return "Portal";
        case T:
          return "Profiler";
        case k:
          return "StrictMode";
        case _:
          return "Suspense";
        case h:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case j:
            var r = e;
            return re(r) + ".Consumer";
          case m:
            var t = e;
            return re(t._context) + ".Provider";
          case f:
            return Ve(e, e.render, "ForwardRef");
          case y:
            var a = e.displayName || null;
            return a !== null ? a : E(e.type) || "Memo";
          case w: {
            var o = e, l = o._payload, s = o._init;
            try {
              return E(s(l));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var S = Object.assign, F = 0, te, ne, ae, ie, se, oe, le;
    function ue() {
    }
    ue.__reactDisabledLog = !0;
    function Ie() {
      {
        if (F === 0) {
          te = console.log, ne = console.info, ae = console.warn, ie = console.error, se = console.group, oe = console.groupCollapsed, le = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: ue,
            writable: !0
          };
          Object.defineProperties(console, {
            info: e,
            log: e,
            warn: e,
            error: e,
            group: e,
            groupCollapsed: e,
            groupEnd: e
          });
        }
        F++;
      }
    }
    function We() {
      {
        if (F--, F === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: S({}, e, {
              value: te
            }),
            info: S({}, e, {
              value: ne
            }),
            warn: S({}, e, {
              value: ae
            }),
            error: S({}, e, {
              value: ie
            }),
            group: S({}, e, {
              value: se
            }),
            groupCollapsed: S({}, e, {
              value: oe
            }),
            groupEnd: S({}, e, {
              value: le
            })
          });
        }
        F < 0 && x("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var U = L.ReactCurrentDispatcher, Z;
    function W(e, r, t) {
      {
        if (Z === void 0)
          try {
            throw Error();
          } catch (o) {
            var a = o.stack.trim().match(/\n( *(at )?)/);
            Z = a && a[1] || "";
          }
        return `
` + Z + e;
      }
    }
    var z = !1, $;
    {
      var $e = typeof WeakMap == "function" ? WeakMap : Map;
      $ = new $e();
    }
    function ce(e, r) {
      if (!e || z)
        return "";
      {
        var t = $.get(e);
        if (t !== void 0)
          return t;
      }
      var a;
      z = !0;
      var o = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var l;
      l = U.current, U.current = null, Ie();
      try {
        if (r) {
          var s = function() {
            throw Error();
          };
          if (Object.defineProperty(s.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(s, []);
            } catch (R) {
              a = R;
            }
            Reflect.construct(e, [], s);
          } else {
            try {
              s.call();
            } catch (R) {
              a = R;
            }
            e.call(s.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (R) {
            a = R;
          }
          e();
        }
      } catch (R) {
        if (R && a && typeof R.stack == "string") {
          for (var i = R.stack.split(`
`), g = a.stack.split(`
`), d = i.length - 1, v = g.length - 1; d >= 1 && v >= 0 && i[d] !== g[v]; )
            v--;
          for (; d >= 1 && v >= 0; d--, v--)
            if (i[d] !== g[v]) {
              if (d !== 1 || v !== 1)
                do
                  if (d--, v--, v < 0 || i[d] !== g[v]) {
                    var C = `
` + i[d].replace(" at new ", " at ");
                    return e.displayName && C.includes("<anonymous>") && (C = C.replace("<anonymous>", e.displayName)), typeof e == "function" && $.set(e, C), C;
                  }
                while (d >= 1 && v >= 0);
              break;
            }
        }
      } finally {
        z = !1, U.current = l, We(), Error.prepareStackTrace = o;
      }
      var A = e ? e.displayName || e.name : "", we = A ? W(A) : "";
      return typeof e == "function" && $.set(e, we), we;
    }
    function Ye(e, r, t) {
      return ce(e, !1);
    }
    function Be(e) {
      var r = e.prototype;
      return !!(r && r.isReactComponent);
    }
    function Y(e, r, t) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return ce(e, Be(e));
      if (typeof e == "string")
        return W(e);
      switch (e) {
        case _:
          return W("Suspense");
        case h:
          return W("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case f:
            return Ye(e.render);
          case y:
            return Y(e.type, r, t);
          case w: {
            var a = e, o = a._payload, l = a._init;
            try {
              return Y(l(o), r, t);
            } catch {
            }
          }
        }
      return "";
    }
    var B = Object.prototype.hasOwnProperty, fe = {}, de = L.ReactDebugCurrentFrame;
    function H(e) {
      if (e) {
        var r = e._owner, t = Y(e.type, e._source, r ? r.type : null);
        de.setExtraStackFrame(t);
      } else
        de.setExtraStackFrame(null);
    }
    function He(e, r, t, a, o) {
      {
        var l = Function.call.bind(B);
        for (var s in e)
          if (l(e, s)) {
            var i = void 0;
            try {
              if (typeof e[s] != "function") {
                var g = Error((a || "React class") + ": " + t + " type `" + s + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[s] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw g.name = "Invariant Violation", g;
              }
              i = e[s](r, s, a, t, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (d) {
              i = d;
            }
            i && !(i instanceof Error) && (H(o), x("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", a || "React class", t, s, typeof i), H(null)), i instanceof Error && !(i.message in fe) && (fe[i.message] = !0, H(o), x("Failed %s type: %s", t, i.message), H(null));
          }
      }
    }
    var Ue = Array.isArray;
    function G(e) {
      return Ue(e);
    }
    function Ze(e) {
      {
        var r = typeof Symbol == "function" && Symbol.toStringTag, t = r && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return t;
      }
    }
    function ze(e) {
      try {
        return ve(e), !1;
      } catch {
        return !0;
      }
    }
    function ve(e) {
      return "" + e;
    }
    function pe(e) {
      if (ze(e))
        return x("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Ze(e)), ve(e);
    }
    var M = L.ReactCurrentOwner, Ge = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, he, xe, q;
    q = {};
    function qe(e) {
      if (B.call(e, "ref")) {
        var r = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function Je(e) {
      if (B.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function Ke(e, r) {
      if (typeof e.ref == "string" && M.current && r && M.current.stateNode !== r) {
        var t = E(M.current.type);
        q[t] || (x('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', E(M.current.type), e.ref), q[t] = !0);
      }
    }
    function Xe(e, r) {
      {
        var t = function() {
          he || (he = !0, x("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: t,
          configurable: !0
        });
      }
    }
    function Qe(e, r) {
      {
        var t = function() {
          xe || (xe = !0, x("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: t,
          configurable: !0
        });
      }
    }
    var er = function(e, r, t, a, o, l, s) {
      var i = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: p,
        // Built-in properties that belong on the element
        type: e,
        key: r,
        ref: t,
        props: s,
        // Record the component responsible for creating this element.
        _owner: l
      };
      return i._store = {}, Object.defineProperty(i._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(i, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: a
      }), Object.defineProperty(i, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: o
      }), Object.freeze && (Object.freeze(i.props), Object.freeze(i)), i;
    };
    function rr(e, r, t, a, o) {
      {
        var l, s = {}, i = null, g = null;
        t !== void 0 && (pe(t), i = "" + t), Je(r) && (pe(r.key), i = "" + r.key), qe(r) && (g = r.ref, Ke(r, o));
        for (l in r)
          B.call(r, l) && !Ge.hasOwnProperty(l) && (s[l] = r[l]);
        if (e && e.defaultProps) {
          var d = e.defaultProps;
          for (l in d)
            s[l] === void 0 && (s[l] = d[l]);
        }
        if (i || g) {
          var v = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          i && Xe(s, v), g && Qe(s, v);
        }
        return er(e, i, g, o, a, M.current, s);
      }
    }
    var J = L.ReactCurrentOwner, ge = L.ReactDebugCurrentFrame;
    function D(e) {
      if (e) {
        var r = e._owner, t = Y(e.type, e._source, r ? r.type : null);
        ge.setExtraStackFrame(t);
      } else
        ge.setExtraStackFrame(null);
    }
    var K;
    K = !1;
    function X(e) {
      return typeof e == "object" && e !== null && e.$$typeof === p;
    }
    function me() {
      {
        if (J.current) {
          var e = E(J.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function tr(e) {
      {
        if (e !== void 0) {
          var r = e.fileName.replace(/^.*[\\\/]/, ""), t = e.lineNumber;
          return `

Check your code at ` + r + ":" + t + ".";
        }
        return "";
      }
    }
    var Ce = {};
    function nr(e) {
      {
        var r = me();
        if (!r) {
          var t = typeof e == "string" ? e : e.displayName || e.name;
          t && (r = `

Check the top-level render call using <` + t + ">.");
        }
        return r;
      }
    }
    function be(e, r) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var t = nr(r);
        if (Ce[t])
          return;
        Ce[t] = !0;
        var a = "";
        e && e._owner && e._owner !== J.current && (a = " It was passed a child from " + E(e._owner.type) + "."), D(e), x('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', t, a), D(null);
      }
    }
    function ye(e, r) {
      {
        if (typeof e != "object")
          return;
        if (G(e))
          for (var t = 0; t < e.length; t++) {
            var a = e[t];
            X(a) && be(a, r);
          }
        else if (X(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var o = ke(e);
          if (typeof o == "function" && o !== e.entries)
            for (var l = o.call(e), s; !(s = l.next()).done; )
              X(s.value) && be(s.value, r);
        }
      }
    }
    function ar(e) {
      {
        var r = e.type;
        if (r == null || typeof r == "string")
          return;
        var t;
        if (typeof r == "function")
          t = r.propTypes;
        else if (typeof r == "object" && (r.$$typeof === f || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        r.$$typeof === y))
          t = r.propTypes;
        else
          return;
        if (t) {
          var a = E(r);
          He(t, e.props, "prop", a, e);
        } else if (r.PropTypes !== void 0 && !K) {
          K = !0;
          var o = E(r);
          x("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", o || "Unknown");
        }
        typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && x("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function ir(e) {
      {
        for (var r = Object.keys(e.props), t = 0; t < r.length; t++) {
          var a = r[t];
          if (a !== "children" && a !== "key") {
            D(e), x("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", a), D(null);
            break;
          }
        }
        e.ref !== null && (D(e), x("Invalid attribute `ref` supplied to `React.Fragment`."), D(null));
      }
    }
    function je(e, r, t, a, o, l) {
      {
        var s = Me(e);
        if (!s) {
          var i = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (i += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var g = tr(o);
          g ? i += g : i += me();
          var d;
          e === null ? d = "null" : G(e) ? d = "array" : e !== void 0 && e.$$typeof === p ? (d = "<" + (E(e.type) || "Unknown") + " />", i = " Did you accidentally export a JSX literal instead of a component?") : d = typeof e, x("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", d, i);
        }
        var v = rr(e, r, t, o, l);
        if (v == null)
          return v;
        if (s) {
          var C = r.children;
          if (C !== void 0)
            if (a)
              if (G(C)) {
                for (var A = 0; A < C.length; A++)
                  ye(C[A], e);
                Object.freeze && Object.freeze(C);
              } else
                x("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              ye(C, e);
        }
        return e === u ? ir(v) : ar(v), v;
      }
    }
    function sr(e, r, t) {
      return je(e, r, t, !0);
    }
    function or(e, r, t) {
      return je(e, r, t, !1);
    }
    var lr = or, ur = sr;
    I.Fragment = u, I.jsx = lr, I.jsxs = ur;
  }()), I;
}
process.env.NODE_ENV === "production" ? Q.exports = fr() : Q.exports = dr();
var n = Q.exports;
const mr = () => {
  const c = cr(() => {
    console.log("Vite + React + TypeScript + Tailwind = ❤️");
  }, []);
  return /* @__PURE__ */ n.jsx(
    "button",
    {
      onClick: c,
      className: "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded",
      children: "Vite is better than Webpack"
    }
  );
};
function Se(c) {
  var p, b, u = "";
  if (typeof c == "string" || typeof c == "number")
    u += c;
  else if (typeof c == "object")
    if (Array.isArray(c))
      for (p = 0; p < c.length; p++)
        c[p] && (b = Se(c[p])) && (u && (u += " "), u += b);
    else
      for (p in c)
        c[p] && (u && (u += " "), u += p);
  return u;
}
function O() {
  for (var c, p, b = 0, u = ""; b < arguments.length; )
    (c = arguments[b++]) && (p = Se(c)) && (u && (u += " "), u += p);
  return u;
}
const vr = () => /* @__PURE__ */ n.jsx(
  "svg",
  {
    className: "absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 z-10",
    width: "40",
    height: "29",
    viewBox: "0 0 40 29",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: /* @__PURE__ */ n.jsx(
      "path",
      {
        d: "M13.763 29L0 15.1787L2.642 12.5255L13.763 23.6936L37.358 0L40 2.6532L13.763 29Z",
        fill: "white"
      }
    )
  }
), pr = () => /* @__PURE__ */ n.jsxs(
  "svg",
  {
    width: "17",
    height: "16",
    viewBox: "0 0 17 16",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: [
      /* @__PURE__ */ n.jsx(
        "path",
        {
          d: "M4 6.9125C4 6.2375 4.14167 5.59792 4.425 4.99375C4.70834 4.38958 5.11251 3.875 5.63752 3.45L6.15002 4.0125C5.70835 4.37083 5.3646 4.80208 5.11876 5.30625C4.87293 5.81042 4.75001 6.34583 4.75001 6.9125H4ZM12.1626 6.9125C12.1626 6.34583 12.0459 5.81042 11.8126 5.30625C11.5792 4.80208 11.2417 4.37083 10.8001 4.0125L11.3126 3.45C11.8293 3.88333 12.2251 4.4 12.5001 5C12.7751 5.6 12.9126 6.2375 12.9126 6.9125H12.1626ZM4.45 11.5V10.75H5.50002V6.925C5.50002 6.225 5.70627 5.60208 6.11877 5.05625C6.53128 4.51042 7.07503 4.16667 7.75004 4.025V3.6625C7.75004 3.47083 7.81879 3.3125 7.95629 3.1875C8.09379 3.0625 8.25838 3 8.45005 3C8.64172 3 8.8063 3.0625 8.9438 3.1875C9.08131 3.3125 9.15006 3.47083 9.15006 3.6625V4.025C9.82506 4.16667 10.3709 4.51042 10.7876 5.05625C11.2042 5.60208 11.4126 6.225 11.4126 6.925V10.75H12.4501V11.5H4.45ZM8.45005 13C8.18338 13 7.95004 12.9021 7.75004 12.7062C7.55004 12.5104 7.45004 12.275 7.45004 12H9.45006C9.45006 12.275 9.35214 12.5104 9.15631 12.7062C8.96047 12.9021 8.72505 13 8.45005 13ZM6.25002 10.75H10.6626V6.925C10.6626 6.30833 10.4501 5.78333 10.0251 5.35C9.60006 4.91667 9.07922 4.7 8.46255 4.7C7.84588 4.7 7.32295 4.91667 6.89378 5.35C6.46461 5.78333 6.25002 6.30833 6.25002 6.925V10.75Z",
          fill: "#DF1212"
        }
      ),
      /* @__PURE__ */ n.jsx(
        "path",
        {
          d: "M6.25002 10.75H10.6626V6.925C10.6626 6.30833 10.4501 5.78333 10.0251 5.35C9.60006 4.91667 9.07922 4.7 8.46255 4.7C7.84588 4.7 7.32295 4.91667 6.89378 5.35C6.46461 5.78333 6.25002 6.30833 6.25002 6.925V10.75Z",
          fill: "#DF1212"
        }
      )
    ]
  }
), hr = () => /* @__PURE__ */ n.jsxs(
  "svg",
  {
    width: "20",
    height: "21",
    viewBox: "0 0 20 21",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: [
      /* @__PURE__ */ n.jsx(
        "path",
        {
          d: "M10 20C15.2467 20 19.5 15.7467 19.5 10.5C19.5 5.25329 15.2467 1 10 1C4.75329 1 0.5 5.25329 0.5 10.5C0.5 15.7467 4.75329 20 10 20Z",
          stroke: "#DF1212"
        }
      ),
      /* @__PURE__ */ n.jsx(
        "path",
        {
          d: "M9.259 12.8253L8.95901 5.6553H11.059L10.759 12.8253H9.259ZM10.009 16.6503C9.649 16.6503 9.35399 16.5303 9.12399 16.2903C8.89399 16.0503 8.77899 15.7553 8.77899 15.4053C8.77899 15.0553 8.89399 14.7603 9.12399 14.5203C9.35399 14.2803 9.649 14.1603 10.009 14.1603C10.369 14.1603 10.664 14.2803 10.894 14.5203C11.124 14.7603 11.239 15.0553 11.239 15.4053C11.239 15.7553 11.124 16.0503 10.894 16.2903C10.664 16.5303 10.369 16.6503 10.009 16.6503Z",
          fill: "#DF1212"
        }
      )
    ]
  }
), xr = () => /* @__PURE__ */ n.jsxs(
  "svg",
  {
    width: "504",
    height: "27",
    viewBox: "0 0 504 27",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: [
      /* @__PURE__ */ n.jsx(
        "path",
        {
          d: "M251.497 21.3566L251.506 21.3519L251.515 21.3469C251.671 21.2634 251.808 21.2512 251.973 21.3041C252.128 21.354 252.246 21.4478 252.341 21.6379L254.559 26.0717C254.658 26.2702 254.66 26.4189 254.614 26.5589C254.567 26.6988 254.476 26.8165 254.277 26.9157C254.079 27.015 253.93 27.0172 253.79 26.9705C253.65 26.9239 253.532 26.8329 253.433 26.6344L251.215 22.2006C251.116 22.0021 251.114 21.8534 251.161 21.7135C251.207 21.5735 251.298 21.4559 251.497 21.3566Z",
          fill: "#192E32"
        }
      ),
      /* @__PURE__ */ n.jsx(
        "path",
        {
          "fill-rule": "evenodd",
          "clip-rule": "evenodd",
          d: "M244.623 4.46492L244.976 4.41904L245.145 4.10506C245.825 2.83639 246.777 1.83908 248.012 1.10304C249.248 0.366001 250.574 0 252 0C253.932 0 255.593 0.613694 257.017 1.84482C258.446 3.08068 259.314 4.62899 259.633 6.51644L259.727 7.07672L260.296 7.09367C261.757 7.13729 262.974 7.69515 263.983 8.79154C265.002 9.89942 265.5 11.1621 265.5 12.6084C265.5 14.151 264.968 15.4398 263.892 16.5154C262.816 17.5909 261.527 18.1229 259.984 18.1229H245.162C243.258 18.1229 241.693 17.4437 240.422 16.0725C239.14 14.6893 238.5 13.0422 238.5 11.0936C238.5 9.37245 239.08 7.91137 240.251 6.67407C241.433 5.42493 242.881 4.69106 244.623 4.46492ZM245.347 16.8482H259.984C261.151 16.8482 262.166 16.4318 262.987 15.6108C263.808 14.7897 264.225 13.7754 264.225 12.6084C264.225 11.4415 263.808 10.4272 262.987 9.60613C262.166 8.78504 261.151 8.36868 259.984 8.36868H258.621L258.378 6.74501C258.156 5.17387 257.431 3.85808 256.22 2.82576C255.01 1.79485 253.593 1.2747 252 1.2747C250.733 1.2747 249.565 1.62135 248.514 2.31241C247.472 2.99815 246.675 3.91948 246.129 5.06266L245.806 5.70844H245.347C243.81 5.70844 242.481 6.25412 241.401 7.33384C240.321 8.41356 239.775 9.74193 239.775 11.2783C239.775 12.8147 240.321 14.1431 241.401 15.2228C242.481 16.3025 243.81 16.8482 245.347 16.8482Z",
          fill: "#192E32"
        }
      ),
      /* @__PURE__ */ n.jsx(
        "path",
        {
          d: "M261.596 26.9157C261.401 27.0129 261.243 27.0198 261.083 26.9682C260.928 26.9183 260.809 26.8245 260.714 26.6344L258.497 22.2006C258.402 22.0106 258.402 21.871 258.453 21.735C258.509 21.5824 258.612 21.4579 258.815 21.3566C259.014 21.2573 259.162 21.2552 259.302 21.3018C259.442 21.3485 259.56 21.4394 259.659 21.6379L261.877 26.0717C261.976 26.2702 261.979 26.4189 261.932 26.5589C261.885 26.6988 261.794 26.8165 261.596 26.9157Z",
          fill: "#192E32"
        }
      ),
      /* @__PURE__ */ n.jsx(
        "path",
        {
          d: "M246.959 26.9157C246.765 27.0129 246.607 27.0198 246.446 26.9682C246.291 26.9183 246.173 26.8245 246.078 26.6344L243.86 22.2006C243.765 22.0106 243.766 21.871 243.816 21.735C243.873 21.5824 243.976 21.4579 244.179 21.3566C244.377 21.2573 244.526 21.2552 244.666 21.3018C244.806 21.3485 244.924 21.4394 245.023 21.6379L247.241 26.0717C247.34 26.2702 247.342 26.4189 247.295 26.5589C247.249 26.6988 247.158 26.8165 246.959 26.9157Z",
          fill: "#192E32"
        }
      )
    ]
  }
), Cr = ({
  title: c,
  details: p,
  time: b,
  user: u,
  status: k,
  statustype: T,
  completed: m,
  next: j,
  weather: f,
  confiltButtonShow: _,
  length: h
}) => {
  const [y, w] = Ee(!1), [P, N] = Ee(!1);
  return /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
    m && /* @__PURE__ */ n.jsx(vr, {}),
    /* @__PURE__ */ n.jsxs(
      "div",
      {
        className: O(
          "Activity grow shrink basis-0 self-stretch p-4 border lg:border-zinc-300 flex-col justify-start items-start gap-3 inline-flex relative",
          m && "bg-activity-completed bg-cover",
          j ? "bg-pink" : "bg-neutral-50",
          f && "bg-pink"
        ),
        children: [
          /* @__PURE__ */ n.jsxs("div", { className: "ActivityContent self-stretch flex-col justify-start items-start lg:items-end gap-2 flex", children: [
            /* @__PURE__ */ n.jsxs("div", { className: "Detail self-stretch justify-start items-start gap-1 inline-flex", children: [
              /* @__PURE__ */ n.jsxs("div", { className: "Header grow shrink basis-0 flex-col justify-start items-start gap-1 inline-flex", children: [
                /* @__PURE__ */ n.jsx("div", { className: "DescriptionTime justify-start items-start gap-1 inline-flex", children: /* @__PURE__ */ n.jsx("div", { className: "Time flex-col justify-start items-start gap-2.5 inline-flex", children: /* @__PURE__ */ n.jsx(
                  "div",
                  {
                    className: O(
                      "002300 text-[10px] font-medium tracking-wide",
                      m ? "text-white" : "lg:text-black text-neutral-400"
                    ),
                    children: b
                  }
                ) }) }),
                !f && /* @__PURE__ */ n.jsx("div", { className: "MachinePitch flex-col justify-start items-start gap-2.5 hidden lg:block", children: /* @__PURE__ */ n.jsx(
                  "div",
                  {
                    className: O(
                      "P1 text-[10px] font-medium uppercase tracking-wide",
                      m ? "text-white" : "text-neutral-400"
                    ),
                    children: p
                  }
                ) })
              ] }),
              /* @__PURE__ */ n.jsxs("div", { className: " z-20 relative", children: [
                !(j || f) && /* @__PURE__ */ n.jsx(
                  "div",
                  {
                    className: O(
                      "text-right text-[18px] font-medium hidden lg:block cursor-pointer",
                      m ? "text-white" : "text-neutral-400"
                    ),
                    onClick: () => {
                      N(!0);
                    },
                    children: "⠇"
                  }
                ),
                /* @__PURE__ */ n.jsxs(
                  "div",
                  {
                    className: O(
                      "Dropdown w-[164px]   bg-white shadow border border-neutral-200 flex-col justify-start items-start inline-flex origin-top-right top-[30px] absolute right-0 text-[16px] font-medium",
                      P ? "inline-flex" : "hidden"
                    ),
                    children: [
                      /* @__PURE__ */ n.jsx(
                        "button",
                        {
                          className: "justify-start items-center px-2.5 py-1 min-h-[36px] flex hover:bg-gray-50 w-full",
                          onClick: () => N(!1),
                          children: "Reject (Unclaim)"
                        }
                      ),
                      /* @__PURE__ */ n.jsx(
                        "button",
                        {
                          className: "justify-start items-center px-2.5 py-1 min-h-[36px] flex hover:bg-gray-50 w-full",
                          onClick: () => N(!1),
                          children: "Complete"
                        }
                      )
                    ]
                  }
                )
              ] })
            ] }),
            !f && /* @__PURE__ */ n.jsxs("div", { className: "TitleName w-full  h-[23px] justify-between items-start gap-2 flex", children: [
              /* @__PURE__ */ n.jsxs("div", { className: "Title justify-start items-baseline gap-6 flex", children: [
                /* @__PURE__ */ n.jsx(
                  "div",
                  {
                    className: O(
                      "Mowing text-[16px] font-medium",
                      m ? "text-white" : "text-black",
                      h && h > 3 && "max-w-[49px] truncate"
                    ),
                    children: c
                  }
                ),
                !m && k && (T == "overdue" ? /* @__PURE__ */ n.jsx("div", { className: "LabelBadge px-3 py-1 bg-[#df1212] bg-opacity-20 rounded-[100px] justify-start items-start gap-2.5 flex", children: /* @__PURE__ */ n.jsx("div", { className: "Overdue text-[#df1212] text-[12px] font-medium tracking-wide", children: "overdue" }) }) : T == "overdue-alert" ? /* @__PURE__ */ n.jsxs("div", { className: "LabelBadge px-3 py-1 bg-[#df1212] bg-opacity-20 rounded-[100px] justify-start items-start gap-2.5 flex", children: [
                  /* @__PURE__ */ n.jsx("div", { className: "Overdue text-[#df1212] text-[12px] font-medium tracking-wide", children: "overdue" }),
                  /* @__PURE__ */ n.jsx("div", { className: "PendingIcon w-[16.91px] p-1 justify-center items-center flex", children: /* @__PURE__ */ n.jsx(pr, {}) })
                ] }) : /* @__PURE__ */ n.jsx("div", { className: "LabelBadge px-3 py-1 bg-zinc-100 bg-opacity-20 rounded-[100px] justify-start items-start gap-2.5 flex", children: /* @__PURE__ */ n.jsx("div", { className: "NotAssigned text-neutral-800 text-opacity-50 text-[12px] font-medium tracking-wide", children: "not assigned" }) }))
              ] }),
              /* @__PURE__ */ n.jsxs("div", { className: "NameTag w-[23px] h-[23px] relative shrink-0", children: [
                /* @__PURE__ */ n.jsx("div", { className: "Bg w-[23px] h-[23px] left-0 top-0 absolute opacity-60 bg-cyan-500 rounded-full" }),
                /* @__PURE__ */ n.jsx("div", { className: "Ap w-[23px] left-0 top-[4.62px] absolute text-center text-white text-[10px] font-semibold", children: u })
              ] })
            ] }),
            f && /* @__PURE__ */ n.jsx("div", { className: "Title self-stretch justify-between items-start gap-[214px] inline-flex", children: /* @__PURE__ */ n.jsx(xr, {}) })
          ] }),
          /* @__PURE__ */ n.jsxs(
            "div",
            {
              className: "group w-5 h-5 absolute top-1/2  -translate-y-1/2 right-[-29px] z-20 flex",
              onClick: () => w(!0),
              children: [
                _ && /* @__PURE__ */ n.jsx(
                  "button",
                  {
                    className: "IconExclamation ",
                    type: "button",
                    "data-tooltip-target": "tooltip-right",
                    "data-tooltip-placement": "right",
                    children: /* @__PURE__ */ n.jsx(hr, {})
                  }
                ),
                /* @__PURE__ */ n.jsx(
                  "span",
                  {
                    className: O(
                      "absolute top-1/2 -translate-y-1/2 scale-0 transition-all  p-2 text-xs bg-white left-[25px] text-gray-800 text-[16px] font-medium",
                      y && "group-hover:scale-100 w-36"
                    ),
                    onClick: () => w(!1),
                    children: "Ignore conflict"
                  }
                )
              ]
            }
          )
        ]
      }
    )
  ] });
};
export {
  Cr as Activity,
  mr as Button
};
//# sourceMappingURL=index.es.js.map
