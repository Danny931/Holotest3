"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [2929, 9912],
  {
    19311: function (e, t, n) {
      n.d(t, {
        R: function () {
          return r;
        },
      });
      let r = (0, n(24278).I)({
        d: "M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z",
        displayName: "ArrowBackIcon",
      });
    },
    48204: function (e, t, n) {
      n.d(t, {
        v: function () {
          return r;
        },
      });
      let r = (0, n(24278).I)({
        displayName: "ChevronDownIcon",
        d: "M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z",
      });
    },
    91516: function (e, t, n) {
      n.d(t, {
        g: function () {
          return r;
        },
      });
      let r = (0, n(24278).I)({
        d: "M12 8l-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z",
        displayName: "ChevronUpIcon",
      });
    },
    69328: function (e, t, n) {
      n.d(t, {
        m: function () {
          return r;
        },
      });
      let r = (0, n(24278).I)({
        d: "M19.5,9.5h-.75V6.75a6.75,6.75,0,0,0-13.5,0V9.5H4.5a2,2,0,0,0-2,2V22a2,2,0,0,0,2,2h15a2,2,0,0,0,2-2V11.5A2,2,0,0,0,19.5,9.5Zm-9.5,6a2,2,0,1,1,3,1.723V19.5a1,1,0,0,1-2,0V17.223A1.994,1.994,0,0,1,10,15.5ZM7.75,6.75a4.25,4.25,0,0,1,8.5,0V9a.5.5,0,0,1-.5.5H8.25a.5.5,0,0,1-.5-.5Z",
        displayName: "LockIcon",
      });
    },
    88575: function (e, t, n) {
      n.d(t, {
        U: function () {
          return r;
        },
      });
      let r = (0, n(24278).I)({
        d: "M12,0A12,12,0,1,0,24,12,12.013,12.013,0,0,0,12,0Zm0,19a1.5,1.5,0,1,1,1.5-1.5A1.5,1.5,0,0,1,12,19Zm1.6-6.08a1,1,0,0,0-.6.917,1,1,0,1,1-2,0,3,3,0,0,1,1.8-2.75A2,2,0,1,0,10,9.255a1,1,0,1,1-2,0,4,4,0,1,1,5.6,3.666Z",
        displayName: "QuestionIcon",
      });
    },
    68029: function (e, t, n) {
      n.d(t, {
        x: function () {
          return r;
        },
      });
      let r = (0, n(53882).m)("div");
      r.displayName = "Box";
    },
    38491: function (e, t, n) {
      n.d(t, {
        z: function () {
          return v;
        },
      });
      var r = n(85893),
        a = n(29062),
        i = n(65544),
        l = n(20397),
        o = n(34926),
        s = n(67294);
      let [c, u] = (0, n(52110).k)({ strict: !1, name: "ButtonGroupContext" });
      var d = n(53882);
      function m(e) {
        let { children: t, className: n, ...a } = e,
          i = (0, s.isValidElement)(t)
            ? (0, s.cloneElement)(t, { "aria-hidden": !0, focusable: !1 })
            : t,
          l = (0, o.cx)("chakra-button__icon", n);
        return (0, r.jsx)(d.m.span, {
          display: "inline-flex",
          alignSelf: "center",
          flexShrink: 0,
          ...a,
          className: l,
          children: i,
        });
      }
      m.displayName = "ButtonIcon";
      var p = n(83695),
        f = n(48899);
      function h(e) {
        let {
            label: t,
            placement: n,
            spacing: a = "0.5rem",
            children: i = (0, r.jsx)(f.$, {
              color: "currentColor",
              width: "1em",
              height: "1em",
            }),
            className: l,
            __css: c,
            ...u
          } = e,
          m = (0, o.cx)("chakra-button__spinner", l),
          h = "start" === n ? "marginEnd" : "marginStart",
          x = (0, s.useMemo)(
            () =>
              (0, p.k0)({
                display: "flex",
                alignItems: "center",
                position: t ? "relative" : "absolute",
                [h]: t ? a : 0,
                fontSize: "1em",
                lineHeight: "normal",
                ...c,
              }),
            [c, t, h, a]
          );
        return (0, r.jsx)(d.m.div, {
          className: m,
          ...u,
          __css: x,
          children: i,
        });
      }
      h.displayName = "ButtonSpinner";
      var x = n(49381),
        g = n(64317);
      let v = (0, x.G)((e, t) => {
        let n = u(),
          c = (0, g.m)("Button", { ...n, ...e }),
          {
            isDisabled: m = n?.isDisabled,
            isLoading: p,
            isActive: f,
            children: x,
            leftIcon: v,
            rightIcon: y,
            loadingText: j,
            iconSpacing: k = "0.5rem",
            type: _,
            spinner: C,
            spinnerPlacement: w = "start",
            className: N,
            as: E,
            shouldWrapChildren: I,
            ...L
          } = (0, i.L)(e),
          S = (0, s.useMemo)(() => {
            let e = { ...c?._focus, zIndex: 1 };
            return {
              display: "inline-flex",
              appearance: "none",
              alignItems: "center",
              justifyContent: "center",
              userSelect: "none",
              position: "relative",
              whiteSpace: "nowrap",
              verticalAlign: "middle",
              outline: "none",
              ...c,
              ...(!!n && { _focus: e }),
            };
          }, [c, n]),
          { ref: O, type: P } = (function (e) {
            let [t, n] = (0, s.useState)(!e);
            return {
              ref: (0, s.useCallback)((e) => {
                e && n("BUTTON" === e.tagName);
              }, []),
              type: t ? "button" : void 0,
            };
          })(E),
          B = {
            rightIcon: y,
            leftIcon: v,
            iconSpacing: k,
            children: x,
            shouldWrapChildren: I,
          };
        return (0, r.jsxs)(d.m.button, {
          disabled: m || p,
          ref: (0, a.qq)(t, O),
          as: E,
          type: _ ?? P,
          "data-active": (0, l.P)(f),
          "data-loading": (0, l.P)(p),
          __css: S,
          className: (0, o.cx)("chakra-button", N),
          ...L,
          children: [
            p &&
              "start" === w &&
              (0, r.jsx)(h, {
                className: "chakra-button__spinner--start",
                label: j,
                placement: "start",
                spacing: k,
                children: C,
              }),
            p
              ? j ||
                (0, r.jsx)(d.m.span, {
                  opacity: 0,
                  children: (0, r.jsx)(b, { ...B }),
                })
              : (0, r.jsx)(b, { ...B }),
            p &&
              "end" === w &&
              (0, r.jsx)(h, {
                className: "chakra-button__spinner--end",
                label: j,
                placement: "end",
                spacing: k,
                children: C,
              }),
          ],
        });
      });
      function b(e) {
        let {
          leftIcon: t,
          rightIcon: n,
          children: a,
          iconSpacing: i,
          shouldWrapChildren: l,
        } = e;
        return l
          ? (0, r.jsxs)("span", {
              style: { display: "contents" },
              children: [
                t && (0, r.jsx)(m, { marginEnd: i, children: t }),
                a,
                n && (0, r.jsx)(m, { marginStart: i, children: n }),
              ],
            })
          : (0, r.jsxs)(r.Fragment, {
              children: [
                t && (0, r.jsx)(m, { marginEnd: i, children: t }),
                a,
                n && (0, r.jsx)(m, { marginStart: i, children: n }),
              ],
            });
      }
      v.displayName = "Button";
    },
    12519: function (e, t, n) {
      n.d(t, {
        h: function () {
          return l;
        },
      });
      var r = n(85893),
        a = n(67294),
        i = n(38491);
      let l = (0, n(49381).G)((e, t) => {
        let { icon: n, children: l, isRound: o, "aria-label": s, ...c } = e,
          u = n || l,
          d = (0, a.isValidElement)(u)
            ? (0, a.cloneElement)(u, { "aria-hidden": !0, focusable: !1 })
            : null;
        return (0, r.jsx)(i.z, {
          px: "0",
          py: "0",
          borderRadius: o ? "full" : void 0,
          ref: t,
          "aria-label": s,
          ...c,
          children: d,
        });
      });
      l.displayName = "IconButton";
    },
    88329: function (e, t, n) {
      n.d(t, {
        k: function () {
          return l;
        },
      });
      var r = n(85893),
        a = n(49381),
        i = n(53882);
      let l = (0, a.G)(function (e, t) {
        let {
          direction: n,
          align: a,
          justify: l,
          wrap: o,
          basis: s,
          grow: c,
          shrink: u,
          ...d
        } = e;
        return (0,
        r.jsx)(i.m.div, { ref: t, __css: { display: "flex", flexDirection: n, alignItems: a, justifyContent: l, flexWrap: o, flexBasis: s, flexGrow: c, flexShrink: u }, ...d });
      });
      l.displayName = "Flex";
    },
    32761: function (e, t, n) {
      n.d(t, {
        E: function () {
          return d;
        },
      });
      var r = n(85893),
        a = n(8297),
        i = n(49381);
      let l = (0, i.G)(function (e, t) {
        let { htmlWidth: n, htmlHeight: a, alt: i, ...l } = e;
        return (0, r.jsx)("img", { width: n, height: a, ref: t, alt: i, ...l });
      });
      l.displayName = "NativeImage";
      var o = n(12408),
        s = n(67294);
      let c = (e, t) =>
        ("loaded" !== e && "beforeLoadOrError" === t) ||
        ("failed" === e && "onError" === t);
      var u = n(53882);
      let d = (0, i.G)(function (e, t) {
        let {
            fallbackSrc: n,
            fallback: i,
            src: d,
            srcSet: m,
            align: p,
            fit: f,
            loading: h,
            ignoreFallback: x,
            crossOrigin: g,
            fallbackStrategy: v = "beforeLoadOrError",
            referrerPolicy: b,
            ...y
          } = e,
          j = void 0 !== n || void 0 !== i,
          k = null != h || x || !j,
          _ = c(
            (function (e) {
              let {
                  loading: t,
                  src: n,
                  srcSet: r,
                  onLoad: a,
                  onError: i,
                  crossOrigin: l,
                  sizes: c,
                  ignoreFallback: u,
                } = e,
                [d, m] = (0, s.useState)("pending");
              (0, s.useEffect)(() => {
                m(n ? "loading" : "pending");
              }, [n]);
              let p = (0, s.useRef)(),
                f = (0, s.useCallback)(() => {
                  if (!n) return;
                  h();
                  let e = new Image();
                  (e.src = n),
                    l && (e.crossOrigin = l),
                    r && (e.srcset = r),
                    c && (e.sizes = c),
                    t && (e.loading = t),
                    (e.onload = (e) => {
                      h(), m("loaded"), a?.(e);
                    }),
                    (e.onerror = (e) => {
                      h(), m("failed"), i?.(e);
                    }),
                    (p.current = e);
                }, [n, l, r, c, a, i, t]),
                h = () => {
                  p.current &&
                    ((p.current.onload = null),
                    (p.current.onerror = null),
                    (p.current = null));
                };
              return (
                (0, o.G)(() => {
                  if (!u)
                    return (
                      "loading" === d && f(),
                      () => {
                        h();
                      }
                    );
                }, [d, f, u]),
                u ? "loaded" : d
              );
            })({ ...e, crossOrigin: g, ignoreFallback: k }),
            v
          ),
          C = {
            ref: t,
            objectFit: f,
            objectPosition: p,
            ...(k ? y : (0, a.C)(y, ["onError", "onLoad"])),
          };
        return _
          ? i ||
              (0, r.jsx)(u.m.img, {
                as: l,
                className: "chakra-image__placeholder",
                src: n,
                ...C,
              })
          : (0, r.jsx)(u.m.img, {
              as: l,
              src: d,
              srcSet: m,
              crossOrigin: g,
              loading: h,
              referrerPolicy: b,
              className: "chakra-image",
              ...C,
            });
      });
      d.displayName = "Image";
    },
    89015: function (e, t, n) {
      n.d(t, {
        o: function () {
          return f;
        },
      });
      var r = n(85893),
        a = n(34926),
        i = n(68928),
        l = n(5490),
        o = n(65544),
        s = n(12553),
        c = n(49381),
        u = n(64317),
        d = n(53882);
      function m(e) {
        return (0, r.jsx)(s.J, {
          focusable: "false",
          "aria-hidden": !0,
          ...e,
          children: (0, r.jsx)("path", {
            fill: "currentColor",
            d: "M.439,21.44a1.5,1.5,0,0,0,2.122,2.121L11.823,14.3a.25.25,0,0,1,.354,0l9.262,9.263a1.5,1.5,0,1,0,2.122-2.121L14.3,12.177a.25.25,0,0,1,0-.354l9.263-9.262A1.5,1.5,0,0,0,21.439.44L12.177,9.7a.25.25,0,0,1-.354,0L2.561.44A1.5,1.5,0,0,0,.439,2.561L9.7,11.823a.25.25,0,0,1,0,.354Z",
          }),
        });
      }
      let p = (0, c.G)(function (e, t) {
        let n = (0, u.m)("CloseButton", e),
          { children: a, isDisabled: i, __css: l, ...s } = (0, o.L)(e);
        return (0,
        r.jsx)(d.m.button, { type: "button", "aria-label": "Close", ref: t, disabled: i, __css: { outline: 0, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, ...n, ...l }, ...s, children: a || (0, r.jsx)(m, { width: "1em", height: "1em" }) });
      });
      p.displayName = "CloseButton";
      let f = (0, c.G)((e, t) => {
        let { onClick: n, className: o, ...s } = e,
          { onClose: c } = (0, l.vR)(),
          u = (0, a.cx)("chakra-modal__close-btn", o),
          d = (0, l.I_)();
        return (0, r.jsx)(p, {
          ref: t,
          __css: d.closeButton,
          className: u,
          onClick: (0, i.v)(n, (e) => {
            e.stopPropagation(), c();
          }),
          ...s,
        });
      });
      f.displayName = "ModalCloseButton";
    },
    5920: function (e, t, n) {
      n.d(t, {
        E: function () {
          return p;
        },
      });
      var r = n(85893),
        a = n(65544),
        i = n(52110),
        l = n(28470),
        o = n(49381),
        s = n(53882),
        c = n(64317);
      let [u, d] = (0, i.k)({
          name: "ProgressStylesContext",
          errorMessage:
            "useProgressStyles returned is 'undefined'. Seems you forgot to wrap the components in \"<Progress />\" ",
        }),
        m = (0, o.G)((e, t) => {
          let {
              min: n,
              max: a,
              value: i,
              isIndeterminate: o,
              role: c,
              ...u
            } = e,
            m = (0, l.Wt)({
              value: i,
              min: n,
              max: a,
              isIndeterminate: o,
              role: c,
            }),
            p = { height: "100%", ...d().filledTrack };
          return (0, r.jsx)(s.m.div, {
            ref: t,
            style: { width: `${m.percent}%`, ...u.style },
            ...m.bind,
            ...u,
            __css: p,
          });
        }),
        p = (0, o.G)((e, t) => {
          let {
              value: n,
              min: i = 0,
              max: o = 100,
              hasStripe: d,
              isAnimated: p,
              children: f,
              borderRadius: h,
              isIndeterminate: x,
              "aria-label": g,
              "aria-labelledby": v,
              "aria-valuetext": b,
              title: y,
              role: j,
              ...k
            } = (0, a.L)(e),
            _ = (0, c.j)("Progress", e),
            C = h ?? _.track?.borderRadius,
            w = { animation: `${l.Ag} 1s linear infinite` },
            N = {
              ...(!x && d && p && w),
              ...(x && {
                position: "absolute",
                willChange: "left",
                minWidth: "50%",
                animation: `${l.YD} 1s ease infinite normal none running`,
              }),
            },
            E = { overflow: "hidden", position: "relative", ..._.track };
          return (0, r.jsx)(s.m.div, {
            ref: t,
            borderRadius: C,
            __css: E,
            ...k,
            children: (0, r.jsxs)(u, {
              value: _,
              children: [
                (0, r.jsx)(m, {
                  "aria-label": g,
                  "aria-labelledby": v,
                  "aria-valuetext": b,
                  min: i,
                  max: o,
                  value: n,
                  isIndeterminate: x,
                  css: N,
                  borderRadius: C,
                  title: y,
                  role: j,
                }),
                f,
              ],
            }),
          });
        });
      p.displayName = "Progress";
    },
    48899: function (e, t, n) {
      n.d(t, {
        $: function () {
          return d;
        },
      });
      var r = n(85893),
        a = n(65544),
        i = n(34926),
        l = n(70917),
        o = n(49381),
        s = n(64317),
        c = n(53882);
      let u = (0, l.F4)({
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        }),
        d = (0, o.G)((e, t) => {
          let n = (0, s.m)("Spinner", e),
            {
              label: l = "Loading...",
              thickness: o = "2px",
              speed: d = "0.45s",
              emptyColor: m = "transparent",
              className: p,
              ...f
            } = (0, a.L)(e),
            h = (0, i.cx)("chakra-spinner", p),
            x = {
              display: "inline-block",
              borderColor: "currentColor",
              borderStyle: "solid",
              borderRadius: "99999px",
              borderWidth: o,
              borderBottomColor: m,
              borderLeftColor: m,
              animation: `${u} ${d} linear infinite`,
              ...n,
            };
          return (0, r.jsx)(c.m.div, {
            ref: t,
            __css: x,
            className: h,
            ...f,
            children: l && (0, r.jsx)(c.m.span, { srOnly: !0, children: l }),
          });
        });
      d.displayName = "Spinner";
    },
    26972: function (e, t, n) {
      n.d(t, {
        u: function () {
          return E;
        },
      });
      var r = n(85893),
        a = n(65544),
        i = n(8297),
        l = n(70562),
        o = n(33654),
        s = n(65820),
        c = n(67294);
      let u = {
        exit: {
          scale: 0.85,
          opacity: 0,
          transition: {
            opacity: { duration: 0.15, easings: "easeInOut" },
            scale: { duration: 0.2, easings: "easeInOut" },
          },
        },
        enter: {
          scale: 1,
          opacity: 1,
          transition: {
            opacity: { easings: "easeOut", duration: 0.2 },
            scale: { duration: 0.2, ease: [0.175, 0.885, 0.4, 1.1] },
          },
        },
      };
      var d = n(83658),
        m = n(74247),
        p = n(29062),
        f = n(21326),
        h = n(68928),
        x = n(78627),
        g = n(38898);
      let v = (e) => e.current?.ownerDocument || document,
        b = (e) => e.current?.ownerDocument?.defaultView || window,
        y = "chakra-ui:close-tooltip";
      var j = n(37984),
        k = n(33284),
        _ = n(53882),
        C = n(49381),
        w = n(64317);
      let N = (0, _.m)(o.E.div),
        E = (0, C.G)((e, t) => {
          let n;
          let o = (0, w.m)("Tooltip", e),
            C = (0, a.L)(e),
            E = (0, j.F)(),
            {
              children: I,
              label: L,
              shouldWrapChildren: S,
              "aria-label": O,
              hasArrow: P,
              bg: B,
              portalProps: T,
              background: D,
              backgroundColor: G,
              bgColor: M,
              motionProps: R,
              animatePresenceProps: V,
              ...$
            } = C,
            z = D ?? G ?? B ?? M;
          if (z) {
            o.bg = z;
            let e = E.__cssMap?.[`colors.${z}`]?.varRef ?? z;
            o[g.Dq.arrowBg.var] = e;
          }
          let F = (function (e = {}) {
            let {
                openDelay: t = 0,
                closeDelay: n = 0,
                closeOnClick: r = !0,
                closeOnMouseDown: a,
                closeOnScroll: i,
                closeOnPointerDown: l = a,
                closeOnEsc: o = !0,
                onOpen: s,
                onClose: u,
                placement: j,
                id: k,
                isOpen: _,
                defaultIsOpen: C,
                arrowSize: w = 10,
                arrowShadowColor: N,
                arrowPadding: E,
                modifiers: I,
                isDisabled: L,
                gutter: S,
                offset: O,
                direction: P,
                ...B
              } = e,
              {
                isOpen: T,
                onOpen: D,
                onClose: G,
              } = (0, d.q)({
                isOpen: _,
                defaultIsOpen: C,
                onOpen: s,
                onClose: u,
              }),
              {
                referenceRef: M,
                getPopperProps: R,
                getArrowInnerProps: V,
                getArrowProps: $,
              } = (0, x.D)({
                enabled: T,
                placement: j,
                arrowPadding: E,
                modifiers: I,
                gutter: S,
                offset: O,
                direction: P,
              }),
              z = (0, c.useId)(),
              F = `tooltip-${k ?? z}`,
              A = (0, c.useRef)(null),
              q = (0, c.useRef)(),
              Z = (0, c.useCallback)(() => {
                q.current && (clearTimeout(q.current), (q.current = void 0));
              }, []),
              H = (0, c.useRef)(),
              U = (0, c.useCallback)(() => {
                H.current && (clearTimeout(H.current), (H.current = void 0));
              }, []),
              W = (0, c.useCallback)(() => {
                U(), G();
              }, [G, U]),
              Y =
                ((0, c.useEffect)(() => {
                  let e = v(A);
                  return (
                    e.addEventListener(y, W), () => e.removeEventListener(y, W)
                  );
                }, [W, A]),
                () => {
                  let e = v(A),
                    t = b(A);
                  e.dispatchEvent(new t.CustomEvent(y));
                }),
              J = (0, c.useCallback)(() => {
                if (!L && !q.current) {
                  T && Y();
                  let e = b(A);
                  q.current = e.setTimeout(D, t);
                }
              }, [Y, L, T, D, t]),
              Q = (0, c.useCallback)(() => {
                Z();
                let e = b(A);
                H.current = e.setTimeout(W, n);
              }, [n, W, Z]),
              K = (0, c.useCallback)(() => {
                T && r && Q();
              }, [r, Q, T]),
              X = (0, c.useCallback)(() => {
                T && l && Q();
              }, [l, Q, T]),
              ee = (0, c.useCallback)(
                (e) => {
                  T && "Escape" === e.key && Q();
                },
                [T, Q]
              );
            (0, m.O)(() => v(A), "keydown", o ? ee : void 0),
              (0, m.O)(
                () => {
                  if (!i) return null;
                  let e = A.current;
                  if (!e) return null;
                  let t = (function e(t) {
                    return ["html", "body", "#document"].includes(t.localName)
                      ? t.ownerDocument.body
                      : (0, f.Re)(t) &&
                        (function (e) {
                          let {
                            overflow: t,
                            overflowX: n,
                            overflowY: r,
                          } = (
                            e.ownerDocument.defaultView || window
                          ).getComputedStyle(e);
                          return /auto|scroll|overlay|hidden/.test(t + r + n);
                        })(t)
                      ? t
                      : e(
                          "html" === t.localName
                            ? t
                            : t.assignedSlot ||
                                t.parentElement ||
                                t.ownerDocument.documentElement
                        );
                  })(e);
                  return "body" === t.localName ? b(A) : t;
                },
                "scroll",
                () => {
                  T && i && W();
                },
                { passive: !0, capture: !0 }
              ),
              (0, c.useEffect)(() => {
                L && (Z(), T && G());
              }, [L, T, G, Z]),
              (0, c.useEffect)(
                () => () => {
                  Z(), U();
                },
                [Z, U]
              ),
              (0, m.O)(() => A.current, "pointerleave", Q);
            let et = (0, c.useCallback)(
                (e = {}, t = null) => ({
                  ...e,
                  ref: (0, p.lq)(A, t, M),
                  onPointerEnter: (0, h.v)(e.onPointerEnter, (e) => {
                    "touch" !== e.pointerType && J();
                  }),
                  onClick: (0, h.v)(e.onClick, K),
                  onPointerDown: (0, h.v)(e.onPointerDown, X),
                  onFocus: (0, h.v)(e.onFocus, J),
                  onBlur: (0, h.v)(e.onBlur, Q),
                  "aria-describedby": T ? F : void 0,
                }),
                [J, Q, X, T, F, K, M]
              ),
              en = (0, c.useCallback)(
                (e = {}, t = null) =>
                  R(
                    {
                      ...e,
                      style: {
                        ...e.style,
                        [g.Dq.arrowSize.var]: w ? `${w}px` : void 0,
                        [g.Dq.arrowShadowColor.var]: N,
                      },
                    },
                    t
                  ),
                [R, w, N]
              );
            return {
              isOpen: T,
              show: J,
              hide: Q,
              getTriggerProps: et,
              getTooltipProps: (0, c.useCallback)(
                (e = {}, t = null) => {
                  let n = {
                    ...e.style,
                    position: "relative",
                    transformOrigin: g.Dq.transformOrigin.varRef,
                  };
                  return {
                    ref: t,
                    ...B,
                    ...e,
                    id: F,
                    role: "tooltip",
                    style: n,
                  };
                },
                [B, F]
              ),
              getTooltipPositionerProps: en,
              getArrowProps: $,
              getArrowInnerProps: V,
            };
          })({ ...$, direction: E.direction });
          if (!(0, c.isValidElement)(I) || S)
            n = (0, r.jsx)(_.m.span, {
              display: "inline-block",
              tabIndex: 0,
              ...F.getTriggerProps(),
              children: I,
            });
          else {
            let e = c.Children.only(I);
            n = (0, c.cloneElement)(e, F.getTriggerProps(e.props, e.ref));
          }
          let A = !!O,
            q = F.getTooltipProps({}, t),
            Z = A ? (0, i.C)(q, ["role", "id"]) : q,
            H = (0, l.e)(q, ["role", "id"]);
          return L
            ? (0, r.jsxs)(r.Fragment, {
                children: [
                  n,
                  (0, r.jsx)(s.M, {
                    ...V,
                    children:
                      F.isOpen &&
                      (0, r.jsx)(k.h, {
                        ...T,
                        children: (0, r.jsx)(_.m.div, {
                          ...F.getTooltipPositionerProps(),
                          __css: { zIndex: o.zIndex, pointerEvents: "none" },
                          children: (0, r.jsxs)(N, {
                            variants: u,
                            initial: "exit",
                            animate: "enter",
                            exit: "exit",
                            ...R,
                            ...Z,
                            __css: o,
                            children: [
                              L,
                              A &&
                                (0, r.jsx)(_.m.span, {
                                  srOnly: !0,
                                  ...H,
                                  children: O,
                                }),
                              P &&
                                (0, r.jsx)(_.m.div, {
                                  "data-popper-arrow": !0,
                                  className: "chakra-tooltip__arrow-wrapper",
                                  children: (0, r.jsx)(_.m.div, {
                                    "data-popper-arrow-inner": !0,
                                    className: "chakra-tooltip__arrow",
                                    __css: { bg: o.bg },
                                  }),
                                }),
                            ],
                          }),
                        }),
                      }),
                  }),
                ],
              })
            : (0, r.jsx)(r.Fragment, { children: I });
        });
      E.displayName = "Tooltip";
    },
    93924: function (e, t, n) {
      n.d(t, {
        U: function () {
          return p;
        },
      });
      var r = n(85893);
      let a = (e) => {
        let { condition: t, message: n } = e;
      };
      var i = n(34926),
        l = n(65820),
        o = n(33654),
        s = n(67294),
        c = n(82145);
      let u = (e) => null != e && parseInt(e.toString(), 10) > 0,
        d = {
          exit: {
            height: { duration: 0.2, ease: c.Lj.ease },
            opacity: { duration: 0.3, ease: c.Lj.ease },
          },
          enter: {
            height: { duration: 0.3, ease: c.Lj.ease },
            opacity: { duration: 0.4, ease: c.Lj.ease },
          },
        },
        m = {
          exit: ({
            animateOpacity: e,
            startingHeight: t,
            transition: n,
            transitionEnd: r,
            delay: a,
          }) => ({
            ...(e && { opacity: u(t) ? 1 : 0 }),
            height: t,
            transitionEnd: r?.exit,
            transition: n?.exit ?? c.p$.exit(d.exit, a),
          }),
          enter: ({
            animateOpacity: e,
            endingHeight: t,
            transition: n,
            transitionEnd: r,
            delay: a,
          }) => ({
            ...(e && { opacity: 1 }),
            height: t,
            transitionEnd: r?.enter,
            transition: n?.enter ?? c.p$.enter(d.enter, a),
          }),
        },
        p = (0, s.forwardRef)((e, t) => {
          let {
              in: n,
              unmountOnExit: c,
              animateOpacity: u = !0,
              startingHeight: d = 0,
              endingHeight: p = "auto",
              style: f,
              className: h,
              transition: x,
              transitionEnd: g,
              animatePresenceProps: v,
              ...b
            } = e,
            [y, j] = (0, s.useState)(!1);
          (0, s.useEffect)(() => {
            let e = setTimeout(() => {
              j(!0);
            });
            return () => clearTimeout(e);
          }, []),
            a({
              condition: Number(d) > 0 && !!c,
              message:
                "startingHeight and unmountOnExit are mutually exclusive. You can't use them together",
            });
          let k = parseFloat(d.toString()) > 0,
            _ = {
              startingHeight: d,
              endingHeight: p,
              animateOpacity: u,
              transition: y ? x : { enter: { duration: 0 } },
              transitionEnd: {
                enter: g?.enter,
                exit: c
                  ? g?.exit
                  : { ...g?.exit, display: k ? "block" : "none" },
              },
            },
            C = !c || n,
            w = n || c ? "enter" : "exit";
          return (0, r.jsx)(l.M, {
            ...v,
            initial: !1,
            custom: _,
            children:
              C &&
              (0, r.jsx)(o.E.div, {
                ref: t,
                ...b,
                className: (0, i.cx)("chakra-collapse", h),
                style: { overflow: "hidden", display: "block", ...f },
                custom: _,
                variants: m,
                initial: !!c && "exit",
                animate: w,
                exit: "exit",
              }),
          });
        });
      p.displayName = "Collapse";
    },
  },
]);
