"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [7464],
  {
    87464: function (e, t, s) {
      var a = s(85893),
        l = s(67294),
        i = s(58484),
        r = s(35553),
        n = s(2593),
        d = s(241),
        o = s(7823),
        c = s(8559),
        u = s(78033),
        m = s(93967),
        x = s.n(m),
        h = s(45953),
        v = s(41664),
        f = s.n(v),
        N = s(21003),
        b = function (e, t, s, a) {
          return new (s || (s = Promise))(function (l, i) {
            function r(e) {
              try {
                d(a.next(e));
              } catch (e) {
                i(e);
              }
            }
            function n(e) {
              try {
                d(a.throw(e));
              } catch (e) {
                i(e);
              }
            }
            function d(e) {
              var t;
              e.done
                ? l(e.value)
                : ((t = e.value) instanceof s
                    ? t
                    : new s(function (e) {
                        e(t);
                      })
                  ).then(r, n);
            }
            d((a = a.apply(e, t || [])).next());
          });
        };
      t.Z = (e) => {
        let {
            transaction: t,
            wallet: s,
            uiConfig: m,
            isOpen: v,
            onSendTransaction: g,
            onComplete: p,
            onError: y,
            onClose: w,
          } = e,
          { holoUser: j } = (0, N.a)(),
          [S, C] = (0, l.useState)(!0),
          [E, T] = (0, l.useState)(!1),
          [F, k] = (0, l.useState)(""),
          [B, P] = (0, l.useState)(""),
          [D, I] = (0, l.useState)(),
          [G, H] = (0, l.useState)(""),
          [M, L] = (0, l.useState)(!1),
          [R, U] = (0, l.useState)(!1),
          [A, _] = (0, l.useState)(),
          { data: O } = (0, u.K)({
            address: null == s ? void 0 : s.address,
            chainId: +(null == s ? void 0 : s.chainId.split(":")[1]),
          });
        (0, l.useEffect)(() => {
          t && s && W();
        }, [t, s]);
        let W = () =>
            b(void 0, void 0, void 0, function* () {
              C(!0), yield Z(), yield $(), yield q(), C(!1);
            }),
          Z = () => b(void 0, void 0, void 0, function* () {}),
          $ = () =>
            b(void 0, void 0, void 0, function* () {
              let e = yield (0, h.sG)([c.Wr.BNB, c.Wr.ETH], c.F.USD);
              if (!e) {
                y(
                  "Something went wrong while calculating the transaction rates."
                );
                return;
              }
              let a = +(null == s ? void 0 : s.chainId.split(":")[1]),
                l = (0, h.u3)(a);
              P(l);
              let i = "ETH" === l,
                r = "TBNB" === l || "BNB" === l,
                n = e[c.Wr.ETH],
                d = e[c.Wr.BNB];
              I(i ? n : r ? d : 0);
              let o = yield s.getEthersProvider();
              U("0x" !== (yield o.getCode(t.to))), _(Y(l.toUpperCase(), n, d));
            }),
          q = () =>
            b(void 0, void 0, void 0, function* () {
              let { gasPrice: e, estimatedGas: a } = yield K(s.address, t);
              if (null === e || null === a) {
                y(
                  "Something went wrong while calculating the transaction fees."
                );
                return;
              }
              t.value && H(r.dF(t.value));
              let l = e.mul(a);
              k(r.dF(l));
            }),
          K = (e, t) =>
            b(void 0, void 0, void 0, function* () {
              try {
                let a = yield s.getEthersProvider(),
                  l = yield a.getGasPrice(),
                  i = yield a.estimateGas({
                    from: e,
                    to: t.to,
                    value: t.value,
                    data: t.data,
                  });
                return { gasPrice: l, estimatedGas: i };
              } catch (e) {
                return console.error(e), { gasPrice: null, estimatedGas: null };
              }
            }),
          J = () =>
            b(void 0, void 0, void 0, function* () {
              try {
                let e = yield s.getEthereumProvider(),
                  a = yield e.request({
                    method: "eth_getTransactionCount",
                    params: [s.address, "latest"],
                  }),
                  l =
                    t.value && t.value instanceof n.O$
                      ? t.value.toHexString()
                      : t.value
                      ? t.value.hex
                      : "0x0",
                  i = new d.Q(e),
                  r = yield i.getFeeData(),
                  o = (yield i.estimateGas({
                    from: s.address,
                    to: t.to,
                    value: l,
                    data: t.data,
                  }))
                    .mul(110)
                    .div(100);
                return {
                  signedTransaction: yield e.request({
                    method: "eth_signTransaction",
                    params: [
                      {
                        type: 2,
                        chainId: t.chainId,
                        from: s.address,
                        to: t.to,
                        value: l,
                        data: t.data,
                        gasLimit: o.toHexString(),
                        maxFeePerGas: r.maxFeePerGas.toHexString(),
                        maxPriorityFeePerGas:
                          r.maxPriorityFeePerGas.toHexString(),
                        nonce: a,
                      },
                    ],
                  }),
                  errorMessage: "",
                };
              } catch (e) {
                return (
                  console.error(e.message),
                  { signedTransaction: null, errorMessage: e.message }
                );
              }
            }),
          Q = () => {
            S || E || w();
          },
          V = () =>
            b(void 0, void 0, void 0, function* () {
              if (S || E) return;
              T(!0);
              let { signedTransaction: e, errorMessage: t } = yield J();
              if (null === e) {
                T(!1),
                  y("Something went wrong while signing the transaction: " + t);
                return;
              }
              let { transactionHash: s, transactionStatus: a } = yield g(e);
              if (null === s) {
                T(!1),
                  y("Something went wrong when submitting the transaction.");
                return;
              }
              p(s, a), T(!1);
            }),
          Y = (e, t, s) => {
            let a = "ETH" === e,
              l = "TBNB" === e || "BNB" === e;
            return a
              ? "$".concat(t.toFixed(4), " USD = 1 ").concat(e)
              : l
              ? "$".concat(s.toFixed(4), " USD = 1 ").concat(e)
              : void 0;
          };
        return (0, a.jsx)(i.Z, {
          show: v,
          onClose: () => Q(),
          width: "lg",
          children: (0, a.jsxs)("div", {
            className:
              "relative rounded-xl bg-[#CDD9E3] text-gray-200 dark:bg-black",
            children: [
              (0, a.jsx)("div", {
                className: "absolute right-0 m-3",
                children: (0, a.jsx)("div", {
                  className: "relative flex justify-end ",
                  children: (0, a.jsx)("button", {
                    className:
                      "rounded-full bg-[#838b91] p-1 text-white hover:bg-[#3c4042]",
                    disabled: S || E,
                    onClick: () => Q(),
                    children: (0, a.jsx)("svg", {
                      xmlns: "http://www.w3.org/2000/svg",
                      className: "h-6 w-6",
                      fill: "none",
                      viewBox: "0 0 24 24",
                      stroke: "currentColor",
                      children: (0, a.jsx)("path", {
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        strokeWidth: 2,
                        d: "M6 18L18 6M6 6l12 12",
                      }),
                    }),
                  }),
                }),
              }),
              (0, a.jsxs)("div", {
                className: "px-9 pb-9 pt-12",
                children: [
                  (0, a.jsxs)("div", {
                    className: "",
                    children: [
                      (0, a.jsx)("h2", {
                        className:
                          "body-text-default uppercase text-secondary-200",
                        children: m.title ? m.title : "Review Transaction",
                      }),
                      m.description &&
                        (0, a.jsx)("p", {
                          className: " body-text-sm mt-1 text-gray-400",
                          children: m.description,
                        }),
                    ],
                  }),
                  (0, a.jsx)("div", {
                    className: " mt-8",
                    children: S
                      ? (0, a.jsx)("div", {
                          className: "my-6 flex w-full justify-center",
                          children: (0, a.jsx)(o.Z, {
                            className: "h-6 w-6 text-gray-200",
                          }),
                        })
                      : (0, a.jsxs)(a.Fragment, {
                          children: [
                            (0, a.jsxs)("div", {
                              className: "flex flex-wrap",
                              children: [
                                (0, a.jsxs)("div", {
                                  className:
                                    "w-full rounded-2xl bg-blackAlpha-400 p-6",
                                  children: [
                                    (0, a.jsxs)("div", {
                                      className:
                                        "flex items-center justify-between",
                                      children: [
                                        (0, a.jsxs)("h2", {
                                          className:
                                            "subheading-sm-xs text-white",
                                          children: [
                                            "Total",
                                            " ",
                                            (0, a.jsx)("span", {
                                              className: "text-secondary-500",
                                              children: "(Including fees)",
                                            }),
                                          ],
                                        }),
                                        (0, a.jsxs)("p", {
                                          className:
                                            "subheading-lg-lg text-white",
                                          children: [
                                            Number(
                                              Number(F) + Number(G)
                                            ).toFixed(5),
                                            " ",
                                            B,
                                          ],
                                        }),
                                      ],
                                    }),
                                    (0, a.jsxs)("div", {
                                      className:
                                        "subheading-sm-xs mt-1 flex justify-end text-gray-400",
                                      children: [
                                        "(USD) $",
                                        (
                                          Number(Number(F) + Number(G)) * D
                                        ).toFixed(5),
                                      ],
                                    }),
                                  ],
                                }),
                                (0, a.jsxs)("div", {
                                  className: "my-6 w-full",
                                  children: [
                                    (0, a.jsxs)("button", {
                                      onClick: () => L(!M),
                                      className:
                                        "flex w-full items-center justify-between",
                                      children: [
                                        (0, a.jsx)("p", {
                                          className:
                                            "subheading-sm-xs text-secondary-500",
                                          children: "Details",
                                        }),
                                        (0, a.jsx)("svg", {
                                          className: x()(
                                            "transition-transform duration-500",
                                            M ? " -rotate-180" : ""
                                          ),
                                          xmlns: "http://www.w3.org/2000/svg",
                                          width: "8",
                                          height: "4",
                                          viewBox: "0 0 8 4",
                                          fill: "none",
                                          children: (0, a.jsx)("path", {
                                            d: "M7.20966 0.61685C7.20966 0.509854 7.17057 0.417262 7.09238 0.339072C7.01419 0.260883 6.92159 0.221788 6.8146 0.221788H1.28373C1.17674 0.221788 1.08415 0.260883 1.00596 0.339072C0.927767 0.417262 0.888672 0.509854 0.888672 0.61685C0.888672 0.723846 0.927767 0.816439 1.00596 0.894628L3.77139 3.66006C3.84958 3.73825 3.94217 3.77734 4.04917 3.77734C4.15616 3.77734 4.24875 3.73825 4.32694 3.66006L7.09238 0.894628C7.17057 0.816439 7.20966 0.723846 7.20966 0.61685Z",
                                            fill: "#C4D3DD",
                                          }),
                                        }),
                                      ],
                                    }),
                                    (0, a.jsxs)("div", {
                                      className: x()(
                                        "body-text-default flex flex-col items-end space-y-2 text-white",
                                        M
                                          ? "mt-3 h-auto overflow-hidden"
                                          : "h-0 overflow-hidden"
                                      ),
                                      children: [
                                        (0, a.jsxs)("div", {
                                          className:
                                            "flex w-full items-center justify-between",
                                          children: [
                                            (0, a.jsx)("p", {
                                              className: "",
                                              children: "Fees",
                                            }),
                                            (0, a.jsxs)("p", {
                                              children: [
                                                "~",
                                                Number(F).toFixed(5),
                                                " ",
                                                B,
                                              ],
                                            }),
                                          ],
                                        }),
                                        (0, a.jsxs)("div", {
                                          className:
                                            "tems-center flex w-full justify-between",
                                          children: [
                                            (0, a.jsx)("p", {
                                              className: "",
                                              children: "Value",
                                            }),
                                            (0, a.jsxs)("p", {
                                              children: [
                                                Number(G).toFixed(5),
                                                " ",
                                                B,
                                              ],
                                            }),
                                          ],
                                        }),
                                        (0, a.jsxs)("div", {
                                          className:
                                            "flex w-full items-center justify-between",
                                          children: [
                                            (0, a.jsx)("p", {
                                              className: "",
                                              children: "Rate",
                                            }),
                                            (0, a.jsx)("p", { children: A }),
                                          ],
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                                (0, a.jsxs)("div", {
                                  className: x()(
                                    "flex w-full items-center justify-between rounded-lg bg-black px-3 py-2 ",
                                    Number(Number(F) + Number(G)) >=
                                      Number(null == O ? void 0 : O.formatted)
                                      ? "border border-red-500"
                                      : ""
                                  ),
                                  children: [
                                    (0, a.jsxs)("div", {
                                      className: "flex items-center space-x-2",
                                      children: [
                                        (0, a.jsx)("img", {
                                          src: "/icons/icon-wallet-white.svg",
                                          alt: "wallet",
                                          className: "h-4 w-4",
                                        }),
                                        (0, a.jsxs)("div", {
                                          className:
                                            "group relative flex cursor-pointer flex-col items-center gap-y-[10px]",
                                          children: [
                                            (0, a.jsx)("div", {
                                              className:
                                                "absolute -top-4 hidden -translate-y-1/2 rounded-full bg-white/[0.06] backdrop-blur-[20px] group-hover:block",
                                              children: (0, a.jsx)("p", {
                                                className: "px-3 py-1 text-sm",
                                                children: s.address,
                                              }),
                                            }),
                                            (0, a.jsx)("p", {
                                              className:
                                                "subheading-sm-xs text-gray-500",
                                              children: (0, h.Je)(s.address),
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                    (0, a.jsxs)("p", {
                                      className:
                                        "subheading-sm-xss text-secondary-200",
                                      children: [
                                        Number(
                                          null == O ? void 0 : O.formatted
                                        ).toFixed(5),
                                        (0, a.jsx)("span", {
                                          className: "text-secondary-500",
                                          children: " " + B + " Available",
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                                Number(Number(F) + Number(G)) >=
                                  Number(null == O ? void 0 : O.formatted) &&
                                  (0, a.jsxs)("div", {
                                    className: "my-2",
                                    children: [
                                      (0, a.jsx)("p", {
                                        className: "body-text-sm text-red-500",
                                        children:
                                          "Not enough balance to complete transaction!",
                                      }),
                                      (0, a.jsx)(f(), {
                                        href: "/@".concat(
                                          j.username,
                                          "?mode=wallet"
                                        ),
                                        className:
                                          "body-text-sm text-primary-default underline",
                                        children: "Deposit Now",
                                      }),
                                    ],
                                  }),
                              ],
                            }),
                            (0, a.jsx)("hr", {
                              className: "my-6 w-full border-secondary-700 ",
                            }),
                            (0, a.jsx)("p", {
                              className:
                                "subheading-sm-xss mb-6 uppercase text-yellow-500",
                              children:
                                "PLEASE MAKE SURE THE INFORMATION IS CORRECT BEFORE SUBMITTING PAYMENT.",
                            }),
                            (0, a.jsxs)("button", {
                              onClick: () => V(),
                              disabled:
                                S ||
                                E ||
                                Number(Number(F) + Number(G)) >=
                                  Number(null == O ? void 0 : O.formatted),
                              className: x()(
                                "flex w-full items-center justify-center rounded-full  py-3 text-base font-bold uppercase text-gray-800 ring-1 ring-gray-800 ",
                                Number(Number(F) + Number(G)) >=
                                  Number(null == O ? void 0 : O.formatted)
                                  ? "cursor-not-allowed bg-primary-700 hover:bg-primary-700"
                                  : "bg-primary-300 hover:bg-opacity-75"
                              ),
                              children: [
                                m.buttonText ? m.buttonText : "Submit",
                                E &&
                                  (0, a.jsx)(o.Z, {
                                    className: "ml-2 h-4 w-4 text-gray-800",
                                  }),
                              ],
                            }),
                          ],
                        }),
                  }),
                ],
              }),
            ],
          }),
        });
      };
    },
  },
]);
