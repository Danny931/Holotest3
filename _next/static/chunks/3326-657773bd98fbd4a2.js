"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [3326],
  {
    47817: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return U;
        },
      });
      var r = n(85893),
        i = n(8559),
        o = n(71176),
        a = n(44175),
        s = n(59743),
        l = n(93967),
        c = n.n(l),
        d = n(67294),
        u = n(92085),
        h = n(58307),
        f = n(88148),
        p = n(11163),
        y = n(8066),
        m = n(99319),
        g = n(45953),
        v = n(35553),
        x = n(49280),
        b = n(21003),
        w = n(57954),
        C = n(26445),
        j = n(34425),
        k = n(87278),
        T = n(66357),
        E = function (e, t, n, r) {
          return new (n || (n = Promise))(function (i, o) {
            function a(e) {
              try {
                l(r.next(e));
              } catch (e) {
                o(e);
              }
            }
            function s(e) {
              try {
                l(r.throw(e));
              } catch (e) {
                o(e);
              }
            }
            function l(e) {
              var t;
              e.done
                ? i(e.value)
                : ((t = e.value) instanceof n
                    ? t
                    : new n(function (e) {
                        e(t);
                      })
                  ).then(a, s);
            }
            l((r = r.apply(e, t || [])).next());
          });
        };
      function A() {
        let { holoUser: e } = (0, b.a)(),
          { wallet: t } = (0, w.O)(),
          {
            chatHistory: n,
            setChatHistory: r,
            setDisplayNotification: o,
          } = (0, m.oR)((e) => e),
          a = (0, d.useRef)(null),
          [s, l] = (0, d.useState)(!1),
          [c, u] = (0, d.useState)(),
          h = (e) =>
            E(this, void 0, void 0, function* () {
              return (
                l(!1),
                u(null),
                (a.current = null),
                e && o(!0, i.CC.ERROR, "Error", e, i.d.TOP),
                { isValid: !1, hash: null, chainId: null, errorMessage: e }
              );
            }),
          f = () =>
            E(this, void 0, void 0, function* () {
              let { isValid: t, preparedTransactionResponse: n } = yield y();
              if (!t) {
                u(null);
                return;
              }
              if (
                ((a.current = n),
                yield (0, g.VJ)({
                  userAddress: null == e ? void 0 : e.walletAddress,
                  actionResponse: n,
                  srcChainId: c.actionConfig.chainId,
                }))
              ) {
                l(!0);
                return;
              }
              yield A();
            }),
          p = (e) =>
            "y" === e.toLowerCase() ||
            "yes" === e.toLowerCase() ||
            "no" === e.toLowerCase() ||
            "n" === e.toLowerCase(),
          y = () =>
            E(this, void 0, void 0, function* () {
              var e, n;
              try {
                let r = new URL(
                  "https://box-v2.api.decent.xyz/api/getBoxAction"
                );
                r.searchParams.set("arguments", JSON.stringify(c, x.CK));
                let a = yield fetch(r.toString(), {
                  method: "GET",
                  headers: { "x-api-key": "3fb6552115735dc67eed3c3cc4800ab1" },
                });
                if (!a.ok) {
                  let t = yield a.json();
                  return (
                    console.error(
                      "There was an error while getting the response from the Decent API.",
                      t
                    ),
                    o(
                      !0,
                      i.CC.ERROR,
                      "Error",
                      500 === a.status
                        ? "Sorry this transaction is not currently supported! Cancel and try another one!"
                        : "Error while preparing the transaction ".concat(
                            null === (e = null == t ? void 0 : t.error) ||
                              void 0 === e
                              ? void 0
                              : e.message
                          ),
                      i.d.TOP
                    ),
                    {
                      preparedTransactionResponse: null,
                      isValid: !1,
                      errorMessage:
                        500 === a.status
                          ? "Sorry this transaction is not currently supported! Cancel and try another one!"
                          : "Error while preparing the transaction ".concat(
                              null === (n = null == t ? void 0 : t.error) ||
                                void 0 === n
                                ? void 0
                                : n.message
                            ),
                    }
                  );
                }
                let s = yield a.text(),
                  l = JSON.parse(s, x.Vs);
                return (
                  yield t.switchChain(c.actionConfig.chainId),
                  {
                    preparedTransactionResponse: l,
                    isValid: !0,
                    errorMessage: "",
                  }
                );
              } catch (e) {
                return (
                  console.error(
                    "Unexpected error while preparing the transaction",
                    e.message
                  ),
                  o(
                    !0,
                    i.CC.ERROR,
                    "Error",
                    "Unexpected error while preparing and approving the spending for the transaction!",
                    i.d.TOP
                  ),
                  {
                    preparedTransactionResponse: null,
                    isValid: !1,
                    errorMessage:
                      "Unexpected error while preparing and approving the spending for the transaction!",
                  }
                );
              }
            }),
          A = () =>
            E(this, void 0, void 0, function* () {
              var e, t;
              r([
                ...n,
                {
                  speaker: "Human",
                  content: "Yes I confirm I want to send the transaction!",
                  sentAt: new Date().toString(),
                },
              ]),
                yield new Promise((e) => setTimeout(e, 3e3));
              try {
                let n =
                    null === (e = a.current) || void 0 === e ? void 0 : e.tx,
                  r = yield (0, k.Q)(j.gb, Object.assign({}, n)),
                  i = yield (0, T.T)(
                    j.gb,
                    Object.assign(Object.assign({}, n), { gas: r })
                  );
                return {
                  isValid: !0,
                  hash: i,
                  chainId:
                    null === (t = n.chainId) || void 0 === t
                      ? void 0
                      : t.toString(),
                  errorMessage: null,
                };
              } catch (t) {
                let e = "Unexpected error while sending the transaction!";
                return (
                  t.cause instanceof C.C_ &&
                    (e = "Insufficient funds to process the transaction!"),
                  console.error(
                    "Unexpected error while sending the transaction",
                    t.message
                  ),
                  yield h(e)
                );
              }
            });
        return {
          isDisplayingTokenAllowanceApprovalModal: s,
          currentTransactionConfig: c,
          setCurrentTransactionConfig: u,
          setIsDisplayingTokenAllowanceApprovalModal: l,
          handleTransaction: (e) =>
            E(this, void 0, void 0, function* () {
              if (!p(e)) {
                o(
                  !0,
                  i.CC.ERROR,
                  "Error",
                  "Say yes to confirm the transaction, or no to cancel the transaction!",
                  i.d.TOP
                );
                return;
              }
              return "y" === e.toLowerCase() || "yes" === e.toLowerCase()
                ? yield f()
                : yield h();
            }),
          onTryApproveToken: () =>
            E(this, void 0, void 0, function* () {
              l(!1);
              try {
                yield (0,
                g.ZG)(c.srcToken, a.current.tx.to, v.fi("99999999999999999").toBigInt(), c.actionConfig.chainId);
              } catch (e) {
                return (
                  console.error(
                    "Unexpected error while approving the token",
                    e.message
                  ),
                  yield h("Unexpected error while approving the token")
                );
              }
              return yield A();
            }),
          handleCancelTransaction: h,
        };
      }
      var N = n(58484),
        I = (e) => {
          let { show: t, onClose: n, onApprove: i, onCancel: o } = e,
            [a, s] = (0, d.useState)(!1);
          return (
            (0, d.useEffect)(() => {
              s(!0);
            }, []),
            (0, r.jsx)(N.Z, {
              show: t,
              onClose: n,
              width: "lg",
              disableOutsideClick: !0,
              children: (0, r.jsx)("div", {
                className: c()(
                  "overflow-hidden rounded-[16px] bg-black transition duration-300",
                  a ? "opacity-100" : "opacity-0"
                ),
                children: (0, r.jsxs)("div", {
                  className:
                    "flex flex-col items-center px-9 pb-[48px] pt-[64px] text-center text-white",
                  children: [
                    (0, r.jsxs)("div", {
                      className: c()(
                        "transition duration-300",
                        a
                          ? "-translate-y-0 opacity-100"
                          : "translate-y-4 opacity-0"
                      ),
                      children: [
                        (0, r.jsx)("h4", {
                          className: "subheading-lg-lg",
                          children: "Approve Token for Transaction",
                        }),
                        (0, r.jsx)("p", {
                          className:
                            "mb-9 mt-2 font-avenir text-[14px] font-medium text-secondary-400",
                          children:
                            "Please approve the token to allow us to spend on your behalf. This step is required to proceed securely with the transaction.",
                        }),
                      ],
                    }),
                    (0, r.jsx)("button", {
                      className: c()(
                        "subheading-lg-md flex w-full items-center justify-center rounded-full bg-primary-default py-3 uppercase text-gray-800 ring-1 ring-gray-800 transition delay-75 duration-300 hover:bg-opacity-90 hover:ring-2",
                        a
                          ? "-translate-y-0 opacity-100"
                          : "translate-y-4 opacity-0"
                      ),
                      onClick: () => i(),
                      children: "Approve!",
                    }),
                    (0, r.jsx)("button", {
                      className:
                        "subheading-lg-md mt-4 flex w-full items-center justify-center rounded-full bg-gray-300 py-3 uppercase text-gray-800 ring-1 ring-gray-800 transition delay-75 duration-300 hover:bg-opacity-90 hover:ring-2",
                      onClick: () => o(),
                      children: "Cancel transaction",
                    }),
                  ],
                }),
              }),
            })
          );
        },
        R = n(70386),
        O = n(71434),
        S = n(27076),
        _ = n(87441),
        L = n(22424),
        P = function (e, t, n, r) {
          return new (n || (n = Promise))(function (i, o) {
            function a(e) {
              try {
                l(r.next(e));
              } catch (e) {
                o(e);
              }
            }
            function s(e) {
              try {
                l(r.throw(e));
              } catch (e) {
                o(e);
              }
            }
            function l(e) {
              var t;
              e.done
                ? i(e.value)
                : ((t = e.value) instanceof n
                    ? t
                    : new n(function (e) {
                        e(t);
                      })
                  ).then(a, s);
            }
            l((r = r.apply(e, t || [])).next());
          });
        },
        D = function (e) {
          return this instanceof D ? ((this.v = e), this) : new D(e);
        },
        B = function (e, t, n) {
          if (!Symbol.asyncIterator)
            throw TypeError("Symbol.asyncIterator is not defined.");
          var r,
            i = n.apply(e, t || []),
            o = [];
          return (
            (r = {}),
            a("next"),
            a("throw"),
            a("return"),
            (r[Symbol.asyncIterator] = function () {
              return this;
            }),
            r
          );
          function a(e) {
            i[e] &&
              (r[e] = function (t) {
                return new Promise(function (n, r) {
                  o.push([e, t, n, r]) > 1 || s(e, t);
                });
              });
          }
          function s(e, t) {
            try {
              var n;
              (n = i[e](t)).value instanceof D
                ? Promise.resolve(n.value.v).then(l, c)
                : d(o[0][2], n);
            } catch (e) {
              d(o[0][3], e);
            }
          }
          function l(e) {
            s("next", e);
          }
          function c(e) {
            s("throw", e);
          }
          function d(e, t) {
            e(t), o.shift(), o.length && s(o[0][0], o[0][1]);
          }
        },
        M = function (e, t, n, r) {
          return new (n || (n = Promise))(function (i, o) {
            function a(e) {
              try {
                l(r.next(e));
              } catch (e) {
                o(e);
              }
            }
            function s(e) {
              try {
                l(r.throw(e));
              } catch (e) {
                o(e);
              }
            }
            function l(e) {
              var t;
              e.done
                ? i(e.value)
                : ((t = e.value) instanceof n
                    ? t
                    : new n(function (e) {
                        e(t);
                      })
                  ).then(a, s);
            }
            l((r = r.apply(e, t || [])).next());
          });
        },
        U = (e) => {
          var t;
          let {
              mode: n,
              user: l,
              character: g,
              currentChatHistoryId: v,
              userCard: w,
              chatError: C,
              isDeleteHistoryModalOpen: j,
              setIsDeleteHistoryModalOpen: k,
              isClearHistoryModalOpen: T,
              setIsClearHistoryModalOpen: E,
              chatHistory: N,
              setChatHistory: U,
              chatDisabled: z,
              setChatDisabled: H,
              onDeletedChatHistory: V,
              onClearedChatHistory: J,
              onNewMessage: F,
            } = e,
            K = (0, d.useRef)(null),
            Z = (0, d.useRef)(null),
            [W, Y] = (0, d.useState)(!1),
            [G, $] = (0, d.useState)(""),
            [Q, q] = (0, d.useState)(!1),
            [X, ee] = (0, d.useState)(!1),
            [et, en] = (0, d.useState)(!1),
            er = (0, p.useRouter)(),
            { holoUser: ei, isAuthenticated: eo } = (0, b.a)(),
            {
              isTyping: ea,
              chatMetadata: es,
              isGeneratingMessage: el,
              getAIChatResponse: ec,
              handleChatEnter: ed,
              regenerateLastChatMessage: eu,
              getDisplayableChatMessage: eh,
            } = (function (e) {
              let {
                  enableTts: t,
                  playAudioStream: n,
                  mode: r,
                  user: a,
                  userCard: s,
                  character: l,
                  verboseMode: c,
                  currentChatHistoryId: u,
                  chatDisabled: h,
                  setChatDisabled: p,
                  chatHistory: y,
                  setChatHistory: g,
                  setChatInput: v,
                  onNewMessage: w,
                } = e,
                { login: C } = (0, b.a)(),
                {
                  currentTransactionConfig: j,
                  handleTransaction: k,
                  setCurrentTransactionConfig: T,
                } = A(),
                {
                  setUsageLimitationMessage: E,
                  setIsUsageLimitationModalOpen: N,
                  setDisplayNotification: I,
                } = (0, m.oR)((e) => e),
                O = (0, d.useRef)(!1),
                M = (0, d.useRef)({}),
                U = (0, d.useRef)(null),
                z = (0, d.useRef)(null),
                [H, V] = (0, d.useState)(!1);
              (0, d.useEffect)(
                () => (
                  null !== U.current &&
                    U.current !== (null == l ? void 0 : l.id) &&
                    (p(!1), v(""), (O.current = !1)),
                  (U.current = null == l ? void 0 : l.id),
                  () => {
                    z.current && z.current.abort();
                  }
                ),
                [null == l ? void 0 : l.id]
              );
              let J = (e, n, o, a) =>
                  P(this, void 0, void 0, function* () {
                    let s, l;
                    (z.current = new AbortController()),
                      (O.current = !0),
                      V(!0),
                      yield (0, R.hP)();
                    let c = [
                      ...n,
                      e,
                      {
                        speaker: "AI",
                        content: "",
                        sentAt: new Date().toString(),
                      },
                    ];
                    g(c);
                    let d =
                      r === i.z_.PLAYGROUND
                        ? yield K(a, e.content)
                        : yield F(o, a, e.content);
                    if (((M.current = {}), !d.ok))
                      return (
                        yield Y(d, c), (O.current = !1), v(""), p(!1), V(!1), ""
                      );
                    let u = d.headers.get("txConfig");
                    return (u && T(JSON.parse(u, x.Vs)),
                    t
                      ? ({ isValid: s, answer: l } = yield W(d, c))
                      : ({ isValid: s, answer: l } = yield Z(d, c)),
                    s)
                      ? (v(""), p(!1), V(!1), l)
                      : (yield Y(d, c),
                        (O.current = !1),
                        v(""),
                        p(!1),
                        V(!1),
                        "");
                  }),
                F = (e, t, n) =>
                  P(this, void 0, void 0, function* () {
                    return yield fetch("/api/ai/chat", {
                      method: "POST",
                      headers: { "Content-Type": "text/plain" },
                      cache: "no-store",
                      body: JSON.stringify({
                        characterId: l.id,
                        chatHistoryId: e,
                        llmConfig: t,
                        chatHistory: y,
                        input: n,
                        userCardName: s.name ? s.name : a.username,
                        userCardPersona: s.persona,
                        metadata: M.current,
                        mode: i.z_.DEFAULT,
                        verbose: c,
                      }),
                      signal: z.current.signal,
                    });
                  }),
                K = (e, t) =>
                  P(this, void 0, void 0, function* () {
                    return yield fetch("/api/ai/chat-playground", {
                      method: "POST",
                      headers: { "Content-Type": "text/plain" },
                      cache: "no-store",
                      body: JSON.stringify({
                        character: l,
                        llmConfig: e,
                        chatHistory: y,
                        input: t,
                        userCardName: s.name ? s.name : a.username,
                        userCardPersona: s.persona,
                        metadata: M.current,
                        mode: i.z_.PLAYGROUND,
                        verbose: c,
                      }),
                      signal: z.current.signal,
                    });
                  }),
                Z = (e, t) =>
                  P(this, void 0, void 0, function* () {
                    let n = e.body.getReader(),
                      r = "",
                      i = e.headers.get(f.W.CRYPTO_MARKET_WIZ);
                    (t[t.length - 1] = Object.assign(
                      Object.assign({}, t[t.length - 1]),
                      { skills: i ? [f.W.CRYPTO_MARKET_WIZ] : void 0 }
                    )),
                      g(null != t ? t : []);
                    let o = [];
                    try {
                      for (; U.current === l.id; ) {
                        let { done: e, value: i } = yield n.read();
                        if (e) break;
                        let a = new TextDecoder().decode(i);
                        O.current && (O.current = !1),
                          (r += a),
                          l.conversationName &&
                            (r = (function (e, t) {
                              let n = RegExp("#".concat(t, ":\\s*"), "g");
                              return e.replace(n, "");
                            })(r, l.conversationName.trim()));
                        let s = t.length - 1;
                        (o = [
                          ...(null == t ? void 0 : t.slice(0, s)),
                          Object.assign(Object.assign({}, t[s]), {
                            content: r,
                            sentAt: new Date().toString(),
                          }),
                        ]),
                          g(o);
                      }
                      null == w || w(o);
                    } catch (e) {
                      return (
                        console.error(e),
                        n.releaseLock(),
                        { isValid: !1, answer: "" }
                      );
                    } finally {
                      z.current.signal.aborted || n.releaseLock();
                    }
                    return "" === r
                      ? { isValid: !1, answer: "" }
                      : { isValid: !0, answer: r };
                  }),
                W = (e, t) =>
                  P(this, void 0, void 0, function* () {
                    let r = e.body.getReader(),
                      i = new TextDecoder(),
                      o = "",
                      a = !0,
                      s = l.name,
                      c = new RegExp("^".concat(s, ":")),
                      d = RegExp("^AI:"),
                      u = s.length + 1,
                      h = e.headers.get(f.W.CRYPTO_MARKET_WIZ),
                      p = [
                        ...t,
                        {
                          speaker: "AI",
                          content: "",
                          sentAt: new Date().toString(),
                          skills: h ? [f.W.CRYPTO_MARKET_WIZ] : void 0,
                        },
                      ];
                    return (g(null != p ? p : []),
                    n &&
                      (yield n(
                        (function (e) {
                          return B(this, arguments, function* () {
                            for (;;) {
                              let { done: t, value: n } = yield D(e.read());
                              if (t) break;
                              let r = i.decode(n);
                              if (
                                (yield yield D(r),
                                "..." === o && (o = ""),
                                "..." !== (o += r) && a)
                              ) {
                                for (; o.length < u; ) {
                                  let { done: t, value: n } = yield D(e.read());
                                  if (t) break;
                                  let r = i.decode(n);
                                  yield yield D(r),
                                    "..." === o && (o = ""),
                                    (o += r);
                                }
                                a = !1;
                              }
                              o = (o = o.replace(c, "")).replace(d, "");
                              let s = p.length - 1;
                              g([
                                ...p.slice(0, s),
                                Object.assign(Object.assign({}, p[s]), {
                                  content: o,
                                  sentAt: new Date().toString(),
                                }),
                              ]);
                            }
                            e.releaseLock();
                          });
                        })(r)
                      )),
                    "" === o)
                      ? { isValid: !1, answer: "" }
                      : { isValid: !0, answer: o };
                  }),
                Y = (e, t) =>
                  P(this, void 0, void 0, function* () {
                    let n;
                    yield (0, R.hP)();
                    try {
                      n = yield e.json();
                    } catch (n) {
                      return (
                        console.error(
                          "Unexpected Error during chat response. Response returned with status code",
                          e.status
                        ),
                        G(t)
                      );
                    }
                    switch (
                      (console.error(
                        "Error during chat response",
                        n.errorMessage
                      ),
                      n.errorCode)
                    ) {
                      case i.jK.USAGE_LIMIT:
                        E(n.errorMessage), N(!0);
                        break;
                      case i.jK.BOT_ACTIVITY:
                        $(n.errorMessage);
                        break;
                      case i.jK.RATE_LIMIT:
                        G(t, "Please slow down!");
                        break;
                      default:
                        G(t);
                    }
                  }),
                G = (e, t) => {
                  (e[e.length - 1] = {
                    speaker: "AI",
                    content:
                      t ||
                      "I am sorry! I can&apos;t get an answer right now. Could you try again in a moment?",
                    sentAt: new Date().toString(),
                  }),
                    g(e);
                };
              function $(e) {
                I(!0, i.CC.ERROR, "Error", e, i.d.BOTTOM);
              }
              return {
                isTyping: O,
                chatMetadata: M,
                isGeneratingMessage: H,
                getAIChatResponse: J,
                handleChatEnter: (e) =>
                  P(this, void 0, void 0, function* () {
                    var t;
                    if (h) return;
                    if (!a) {
                      C();
                      return;
                    }
                    if (j) {
                      p(!0), yield k(e), p(!1);
                      return;
                    }
                    let {
                      isValid: n,
                      errorMessage: r,
                      validatedString: i,
                    } = (0, S.JE)(e);
                    if (!n) {
                      $(r);
                      return;
                    }
                    p(!0);
                    let o = {
                      speaker: "Human",
                      content: i,
                      sentAt: new Date().toString(),
                    };
                    null == w || w([...y, o]);
                    try {
                      yield J(
                        o,
                        y,
                        null == u ? void 0 : u.current,
                        null === (t = null == l ? void 0 : l.brain) ||
                          void 0 === t
                          ? void 0
                          : t.llmConfig
                      );
                    } catch (e) {
                      console.error(e);
                    }
                  }),
                regenerateLastChatMessage: () =>
                  P(this, void 0, void 0, function* () {
                    var e;
                    let t = y.slice(0, y.length - 1);
                    if (
                      (p(!0),
                      g(null != t ? t : []),
                      !(yield fetch(
                        "/api/users/".concat(
                          null == a ? void 0 : a.id,
                          "/chat-history"
                        ),
                        {
                          method: "PATCH",
                          body: JSON.stringify({
                            historyId: null == u ? void 0 : u.current,
                          }),
                          headers: { "Content-Type": "application/json" },
                        }
                      )).ok)
                    ) {
                      G(
                        t,
                        "Unexpected error while regenerating the chat! Try again later."
                      );
                      return;
                    }
                    let n = Object.assign(
                        Object.assign(
                          {},
                          null === (e = null == l ? void 0 : l.brain) ||
                            void 0 === e
                            ? void 0
                            : e.llmConfig
                        ),
                        {
                          temperature: 0.9,
                          topP: 0.95,
                          frequencyPenalty: 0.5,
                          presencePenalty: 0.5,
                        }
                      ),
                      r = t[t.length - 1],
                      i = t.slice(0, t.length - 1);
                    yield J(r, i, null == u ? void 0 : u.current, n);
                  }),
                getDisplayableChatMessage: (e) => {
                  var t, n;
                  let r = new _.TU.Renderer();
                  (r.link = (e) => {
                    let { href: t, title: n, text: r } = e;
                    return '<a href="'
                      .concat(t, '"')
                      .concat(
                        n ? ' title="'.concat(n, '"') : "",
                        ' target="_blank" rel="noopener noreferrer">'
                      )
                      .concat(r, "</a>");
                  }),
                    (r.em = (e) => {
                      let { text: t } = e;
                      return '<em style="color: #E6FF9F;">'.concat(t, "</em>");
                    });
                  let i = _.TU.parse(
                      null === (t = e.content) || void 0 === t
                        ? void 0
                        : t
                            .trimEnd()
                            .replace(
                              /!\[(.*?)\]\((.*?)\)/g,
                              '<img alt="$1" src="$2" style="border-radius: 50%; max-width: 50px;">'
                            ),
                      { renderer: r }
                    ),
                    s = L.Z.sanitize(i, { ADD_ATTR: ["target", "rel"] }),
                    c = (null == e ? void 0 : e.speaker) === "AI",
                    d = c
                      ? null === (n = null == l ? void 0 : l.brain) ||
                        void 0 === n
                        ? void 0
                        : n.image
                      : null == a
                      ? void 0
                      : a.image,
                    u = c
                      ? null == l
                        ? void 0
                        : l.conversationName
                      : null == a
                      ? void 0
                      : a.username,
                    h = (0, o.fH)(e);
                  return {
                    isAI: c,
                    html: s.trim(),
                    name: u,
                    image: d,
                    formattedSentAt: h,
                  };
                },
              };
            })({
              enableTts: !1,
              mode: n,
              user: l,
              verboseMode: W,
              character: g,
              userCard: w,
              currentChatHistoryId: v,
              chatDisabled: z,
              setChatDisabled: H,
              chatHistory: N,
              setChatHistory: U,
              setChatInput: $,
              onNewMessage: F,
            }),
            {
              isDisplayingTokenAllowanceApprovalModal: ef,
              setIsDisplayingTokenAllowanceApprovalModal: ep,
              onTryApproveToken: ey,
              setCurrentTransactionConfig: em,
              handleCancelTransaction: eg,
            } = A(),
            { setDisplayNotification: ev } = (0, m.oR)((e) => e);
          (0, d.useEffect)(() => {
            !el && K.current && K.current.focus();
          }, [el]),
            (0, d.useEffect)(() => {
              (null == Z ? void 0 : Z.current) &&
                (Z.current.scrollTop = Z.current.scrollHeight);
            }, [N, null == Z ? void 0 : Z.current]);
          let ex = (e) =>
              M(void 0, void 0, void 0, function* () {
                if (!eo) {
                  e === i.oL.DELETE && k(!1),
                    e === i.oL.CLEAR && E(!1),
                    ew("You must be authenticated!");
                  return;
                }
                en(!0), yield (0, R.hP)();
                try {
                  let t = yield fetch(
                    "/api/users/".concat(
                      null == ei ? void 0 : ei.id,
                      "/chat-history"
                    ),
                    {
                      method: "DELETE",
                      body: JSON.stringify({
                        historyId: null == v ? void 0 : v.current,
                        mode: e,
                        userCardName: w.name ? w.name : l.username,
                      }),
                      headers: { "Content-Type": "application/json" },
                    }
                  );
                  if (!t.ok) {
                    en(!1),
                      e === i.oL.DELETE && k(!1),
                      e === i.oL.CLEAR && E(!1);
                    let n = yield t.json();
                    console.error(
                      "Error while deleting chat history",
                      n.errorMessage
                    ),
                      ew(
                        "Error while deleting the chat history! Please try again in a moment."
                      );
                    return;
                  }
                } catch (t) {
                  en(!1),
                    e === i.oL.DELETE && k(!1),
                    e === i.oL.CLEAR && E(!1),
                    console.error(
                      "Unexpected Error while deleting the chat history",
                      t.message
                    ),
                    ew(
                      "Unexpected Error while deleting the chat history! Please try again in a moment."
                    );
                  return;
                }
                if ((en(!1), e === i.oL.DELETE)) {
                  k(!1), em(null), null == V || V();
                  return;
                }
                e === i.oL.CLEAR && (E(!1), null == J || J());
              }),
            eb = () =>
              M(void 0, void 0, void 0, function* () {
                var e;
                let t = yield ey();
                if (t.isValid) {
                  (es.current.transactionHash = t.hash),
                    (es.current.chainId = t.chainId);
                  return;
                }
                let n = {
                  speaker: "Human",
                  content: "Cancel the transaction.",
                  sentAt: new Date().toString(),
                };
                yield ec(
                  n,
                  N,
                  null == v ? void 0 : v.current,
                  null === (e = null == g ? void 0 : g.brain) || void 0 === e
                    ? void 0
                    : e.llmConfig
                );
              }),
            ew = (e) => {
              ev(!0, i.CC.ERROR, "Error", e, i.d.BOTTOM);
            };
          if (g)
            return (0, r.jsxs)(r.Fragment, {
              children: [
                T &&
                  (0, r.jsx)(O.Z, {
                    show: T,
                    primaryButtonOnClick: () => ex(i.oL.CLEAR),
                    secondaryButtonOnClick: () => E(!1),
                    onClose: () => E(!1),
                    uiConfig: {
                      title: "Clear chat?",
                      description:
                        "By clicking the delete button below, you will clear all the messages with the AI. Chat history can't be restored.",
                      primaryButtonText: "Delete",
                      primaryButtonTextColor: "text-white",
                      secondaryButtonText: "Cancel",
                      secondaryButtonBgColor: "bg-secondary-100",
                      primaryButtonBgColor: "bg-[#FF2950]",
                    },
                    loading: et,
                  }),
                j &&
                  (0, r.jsx)(O.Z, {
                    show: j,
                    primaryButtonOnClick: () => ex(i.oL.DELETE),
                    secondaryButtonOnClick: () => k(!1),
                    onClose: () => k(!1),
                    uiConfig: {
                      title: "Delete chat?",
                      description:
                        "By clicking the delete button below, you will lose all your messages between this AI permanently. Chat history can't be restored.",
                      primaryButtonText: "Delete",
                      primaryButtonTextColor: "text-white",
                      secondaryButtonText: "Cancel",
                      secondaryButtonBgColor: "bg-secondary-100",
                      primaryButtonBgColor: "bg-[#FF2950]",
                    },
                    loading: et,
                  }),
                ef &&
                  (0, r.jsx)(I, {
                    show: ef,
                    onClose: () => ep(!1),
                    onApprove: () => eb(),
                    onCancel: () => eg(),
                  }),
                (0, r.jsx)("div", {
                  className: "relative h-full min-w-full overflow-y-scroll",
                  children: (0, r.jsx)("div", {
                    ref: Z,
                    className: c()(
                      "hide-scrollbar mr-1 flex h-full flex-col gap-3 overflow-y-scroll py-4 pb-5 pr-1"
                    ),
                    children:
                      null == N
                        ? void 0
                        : N.map((e, t) => {
                            var d, u;
                            if (!e) return;
                            let p = eh(e);
                            return (0, r.jsxs)(
                              "div",
                              {
                                className: c()(
                                  "flex",
                                  p.isAI ? "justify-start" : "justify-end"
                                ),
                                children: [
                                  p.formattedSentAt &&
                                    !(0, o.nz)(e.sentAt) &&
                                    (null == N ? void 0 : N.length) > t &&
                                    N[t + 1] &&
                                    (0, o.nz)(
                                      null === (d = e[t + 1]) || void 0 === d
                                        ? void 0
                                        : d.createdAt
                                    ) &&
                                    (0, r.jsxs)("div", {
                                      className:
                                        "my-4 flex items-center sm:my-8",
                                      children: [
                                        (0, r.jsx)("hr", {
                                          className:
                                            "border-1 w-1/2 border-white/50 sm:border-white/10",
                                        }),
                                        (0, r.jsx)("span", {
                                          className:
                                            "px-4 font-avenir text-[11px] font-medium uppercase text-white sm:text-secondary-400",
                                          children: "Today",
                                        }),
                                        (0, r.jsx)("hr", {
                                          className:
                                            "border-1 w-1/2 border-white/50 sm:border-white/10",
                                        }),
                                      ],
                                    }),
                                  (0, r.jsxs)("div", {
                                    className: c()(
                                      "flex items-start",
                                      p.isAI ? "flex-row" : "flex-row-reverse"
                                    ),
                                    children: [
                                      (0, r.jsxs)("div", {
                                        className: "relative",
                                        children: [
                                          (0, r.jsx)("div", {
                                            className:
                                              "flex h-8 w-8 items-center justify-center",
                                            children: (0, r.jsx)("img", {
                                              src: p.image,
                                              alt: "avatar",
                                              className: c()(
                                                "h-[30px] w-[30px] cursor-pointer rounded-full object-cover",
                                                {
                                                  "ring-2 ring-whiteAlpha-400":
                                                    !p.isAI &&
                                                    (0, s.IF)(
                                                      null == l
                                                        ? void 0
                                                        : l.planId
                                                    ),
                                                  "ring-2 ring-yellow-400":
                                                    !p.isAI &&
                                                    (0, s.zB)(
                                                      null == l
                                                        ? void 0
                                                        : l.planId
                                                    ),
                                                  "ring-2 ring-green-400":
                                                    !p.isAI &&
                                                    (0, s.$W)(
                                                      null == l
                                                        ? void 0
                                                        : l.planId
                                                    ),
                                                }
                                              ),
                                              onClick: () =>
                                                er.push(
                                                  p.isAI
                                                    ? "/c/".concat(
                                                        null == g
                                                          ? void 0
                                                          : g.id
                                                      )
                                                    : "/@".concat(
                                                        null == l
                                                          ? void 0
                                                          : l.username
                                                      )
                                                ),
                                            }),
                                          }),
                                          !p.isAI &&
                                            (0, s.zB)(
                                              null == l ? void 0 : l.planId
                                            ) &&
                                            (0, r.jsx)("img", {
                                              src: "/icons/membership/elite-mini-badge.svg",
                                              alt: "elite",
                                              className:
                                                "absolute -right-1 bottom-0 h-3",
                                            }),
                                          !p.isAI &&
                                            (0, s.$W)(
                                              null == l ? void 0 : l.planId
                                            ) &&
                                            (0, r.jsx)("img", {
                                              src: "/icons/membership/premium-mini-badge.svg",
                                              alt: "elite",
                                              className:
                                                "absolute -right-1 bottom-2 h-3",
                                            }),
                                        ],
                                      }),
                                      (0, r.jsxs)("div", {
                                        className: c()(
                                          "flex flex-col gap-1",
                                          p.isAI ? "ml-3" : "mr-3"
                                        ),
                                        children: [
                                          (0, r.jsx)("div", {
                                            className: c()(
                                              "flex items-center gap-1",
                                              p.isAI
                                                ? "justify-start"
                                                : "justify-end"
                                            ),
                                            children:
                                              p.formattedSentAt &&
                                              (0, r.jsx)("div", {
                                                className:
                                                  "body-text-xs flex items-center text-center text-secondary-500",
                                                children: p.formattedSentAt,
                                              }),
                                          }),
                                          (0, r.jsxs)("div", {
                                            className: c()(
                                              "group/message body-text-default relative rounded-2xl border border-whiteAlpha-200 p-3 text-secondary-200 backdrop-blur-md ",
                                              (null == l
                                                ? void 0
                                                : l.username) === p.name
                                                ? "rounded-tr-none"
                                                : "rounded-tl-none"
                                            ),
                                            children: [
                                              ea.current && t + 1 === N.length
                                                ? (0, r.jsx)(h.Z, {})
                                                : (0, r.jsx)(r.Fragment, {
                                                    children: (0, r.jsx)(
                                                      "div",
                                                      {
                                                        className: c()(
                                                          "chat whitespace-wrap overflow-x-hidden break-words",
                                                          n === i.z_.DEFAULT
                                                            ? "max-w-[700px]"
                                                            : "max-w-[200px]"
                                                        ),
                                                        dangerouslySetInnerHTML:
                                                          { __html: p.html },
                                                      }
                                                    ),
                                                  }),
                                              "AI" === e.speaker &&
                                                (null === (u = e.skills) ||
                                                void 0 === u
                                                  ? void 0
                                                  : u.includes(
                                                      f.W.CRYPTO_MARKET_WIZ
                                                    )) &&
                                                (0, r.jsx)("div", {
                                                  className:
                                                    "absolute -bottom-2 right-0 flex flex-shrink-0 items-center space-x-3",
                                                  children: (0, r.jsx)("img", {
                                                    src: "/icons/skills/marketwiz.png",
                                                    alt: "marketwiz",
                                                    className: "h-5 w-5",
                                                  }),
                                                }),
                                              "AI" === e.speaker &&
                                                (0, r.jsxs)("div", {
                                                  className:
                                                    "absolute -bottom-6 left-0 flex items-center space-x-2 opacity-0 transition duration-300 group-hover/message:opacity-100",
                                                  children: [
                                                    t > 0 &&
                                                      t === N.length - 1 &&
                                                      (0, r.jsxs)("button", {
                                                        onClick: () => eu(),
                                                        className:
                                                          "group/regenerate relative",
                                                        children: [
                                                          (0, r.jsx)(
                                                            a.RegenerateOutlineIcon,
                                                            {
                                                              className:
                                                                "h-4 w-4 text-white",
                                                            }
                                                          ),
                                                          (0, r.jsx)("div", {
                                                            className:
                                                              "body-text-sm absolute left-1/2 z-40 hidden -translate-x-1/2 whitespace-nowrap rounded-md bg-gray-800 p-2 opacity-0 transition delay-700 duration-300 group-hover/regenerate:opacity-100 sm:block",
                                                            children:
                                                              "Regenerate",
                                                          }),
                                                        ],
                                                      }),
                                                    (0, r.jsxs)("button", {
                                                      onClick: () => {
                                                        navigator.clipboard.writeText(
                                                          e.content
                                                        ),
                                                          q(!0),
                                                          setTimeout(
                                                            function () {
                                                              q(!1);
                                                            },
                                                            1e3
                                                          );
                                                      },
                                                      className:
                                                        "group/copy relative",
                                                      children: [
                                                        (0, r.jsx)(
                                                          a.CheckOutlineIcon,
                                                          {
                                                            className: c()(
                                                              "absolute h-5 w-5 text-white transition duration-300",
                                                              Q
                                                                ? "translate-x-0 opacity-100"
                                                                : "-translate-y-2 opacity-0"
                                                            ),
                                                          }
                                                        ),
                                                        (0, r.jsx)(
                                                          a.ClipboardSolidIcon,
                                                          {
                                                            className: c()(
                                                              "h-5 w-5 text-white transition duration-300",
                                                              Q
                                                                ? "opacity-0"
                                                                : "opacity-100 delay-300"
                                                            ),
                                                          }
                                                        ),
                                                        (0, r.jsx)("div", {
                                                          className:
                                                            "absolute left-1/2 z-40 hidden -translate-x-1/2 whitespace-nowrap rounded-[4px] bg-gray-800 p-3 font-avenir text-sm opacity-0 transition delay-700 duration-300 group-hover:opacity-100 sm:block",
                                                          children: "Copy text",
                                                        }),
                                                      ],
                                                    }),
                                                  ],
                                                }),
                                            ],
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                ],
                              },
                              t
                            );
                          }),
                  }),
                }),
                (0, r.jsxs)("div", {
                  className: "pb-6",
                  children: [
                    (null == ei ? void 0 : ei.role) === i.i4.ADMIN && !1,
                    C &&
                      (0, r.jsx)("p", {
                        className: "pb-2 text-center text-xs text-red-500",
                        children: C,
                      }),
                    (() => {
                      if (g && (null == g ? void 0 : g.skills))
                        for (let e of g.skills)
                          return (
                            f.N[e].suggestedQueries &&
                            (0, r.jsx)("div", {
                              className: "flex w-full gap-2 overflow-x-scroll",
                              children: f.N[e].suggestedQueries.map((e) =>
                                (0, r.jsx)(
                                  "button",
                                  {
                                    className: c()({
                                      "overflow-x-none body-text-default min-w-fit cursor-pointer overflow-y-hidden rounded-md bg-whiteAlpha-100 px-2 text-center text-secondary-300 hover:bg-white hover:text-black":
                                        !0,
                                      "cursor-not-allowed opacity-50": z,
                                    }),
                                    title: e,
                                    disabled: z,
                                    onClick: () => ed(e),
                                    children: e,
                                  },
                                  e
                                )
                              ),
                            })
                          );
                    })(),
                    (0, r.jsxs)("div", {
                      className:
                        "flex h-fit items-center justify-between space-x-2",
                      children: [
                        (0, r.jsxs)("div", {
                          className: "relative w-11/12",
                          children: [
                            (0, r.jsx)(y.Z, {
                              placeholder: X
                                ? "Speak now."
                                : "Type your message here...",
                              handleSendMessage: ed,
                              inputRef: K,
                              value: G,
                              inputAllowed: !z,
                              onChange: $,
                            }),
                            (0, r.jsx)("div", {
                              className:
                                "absolute right-0 top-1/2 -translate-y-1/2 sm:right-0",
                              children: (0, r.jsx)("button", {
                                onClick: () => ed(G),
                                className: c()(
                                  "flex h-10 w-10 items-center justify-center transition-all duration-300 ease-in-out hover:opacity-80",
                                  (null ===
                                    (t = null == G ? void 0 : G.trim()) ||
                                  void 0 === t
                                    ? void 0
                                    : t.length) > 0
                                    ? "translate-y-0 opacity-100"
                                    : "pointer-events-none translate-y-[80%] opacity-0"
                                ),
                                children: (0, r.jsx)("img", {
                                  src: "/icons/send.svg",
                                  alt: "send icon",
                                }),
                              }),
                            }),
                          ],
                        }),
                        (0, r.jsx)("div", {
                          className: "flex w-1/12 items-center justify-center",
                          children: (0, r.jsx)("button", {
                            disabled: z,
                            onClick: () => ee(!X),
                            className:
                              "ml-4  flex items-center justify-center rounded-full bg-gray-800 p-3 backdrop-blur-[10px] hover:opacity-80",
                            children: (0, r.jsx)(u.Vel, {
                              color: X ? "#0FEAB5" : "white",
                              fontSize: "20px",
                            }),
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            });
        };
    },
    58307: function (e, t, n) {
      var r = n(85893),
        i = n(20726),
        o = n.n(i);
      t.Z = () =>
        (0, r.jsxs)("div", {
          className: "jsx-d01903933896f791 flex h-6 items-center gap-x-1 px-2",
          children: [
            (0, r.jsx)("span", {
              className:
                "jsx-d01903933896f791 animate-dot flex h-[6px] w-[6px] items-center justify-center rounded-full bg-secondary-400",
            }),
            (0, r.jsx)("span", {
              className:
                "jsx-d01903933896f791 animate-dot flex h-[6px] w-[6px] items-center justify-center rounded-full bg-secondary-400",
            }),
            (0, r.jsx)("span", {
              className:
                "jsx-d01903933896f791 animate-dot flex h-[6px] w-[6px] items-center justify-center rounded-full bg-secondary-400",
            }),
            (0, r.jsx)(o(), {
              id: "d01903933896f791",
              children:
                "@-webkit-keyframes blink{0%,100%{opacity:.2}50%{opacity:1}}@-moz-keyframes blink{0%,100%{opacity:.2}50%{opacity:1}}@-o-keyframes blink{0%,100%{opacity:.2}50%{opacity:1}}@keyframes blink{0%,100%{opacity:.2}50%{opacity:1}}.animate-dot.jsx-d01903933896f791:nth-child(1){-webkit-animation:blink 1.5s infinite;-moz-animation:blink 1.5s infinite;-o-animation:blink 1.5s infinite;animation:blink 1.5s infinite}.animate-dot.jsx-d01903933896f791:nth-child(2){-webkit-animation:blink 1.5s infinite;-moz-animation:blink 1.5s infinite;-o-animation:blink 1.5s infinite;animation:blink 1.5s infinite;-webkit-animation-delay:.5s;-moz-animation-delay:.5s;-o-animation-delay:.5s;animation-delay:.5s}.animate-dot.jsx-d01903933896f791:nth-child(3){-webkit-animation:blink 1.5s infinite;-moz-animation:blink 1.5s infinite;-o-animation:blink 1.5s infinite;animation:blink 1.5s infinite;-webkit-animation-delay:1s;-moz-animation-delay:1s;-o-animation-delay:1s;animation-delay:1s}",
            }),
          ],
        });
    },
    8066: function (e, t, n) {
      var r = n(85893),
        i = n(93967),
        o = n.n(i),
        a = n(67294);
      t.Z = (e) => {
        let {
            placeholder: t,
            value: n,
            inputRef: i,
            onChange: s,
            handleSendMessage: l,
            inputAllowed: c,
          } = e,
          [d, u] = (0, a.useState)(!1),
          h = (0, a.useRef)(i.current);
        (0, a.useEffect)(() => {
          h.current = i.current;
        }, [null == i ? void 0 : i.current]),
          (0, a.useEffect)(() => {
            i.current &&
              (i.current.scrollTop =
                i.current.scrollHeight - i.current.clientHeight);
          }, [n]),
          (0, a.useEffect)(() => {
            let e = i.current;
            return (
              c && (null == e || e.addEventListener("paste", f)),
              () => {
                null == e || e.removeEventListener("paste", f);
              }
            );
          }, [i, c]),
          (0, a.useEffect)(() => {
            if (h.current) {
              if ("" === n) {
                h.current.innerHTML = "";
                return;
              }
              h.current.innerText !== n && (h.current.innerText = n);
            }
          }, [n]);
        let f = (e) => {
          var t;
          if (!c) return;
          e.preventDefault();
          let n =
            (null === (t = e.clipboardData) || void 0 === t
              ? void 0
              : t.getData("text/plain")) || "";
          document.execCommand("insertText", !1, n);
        };
        return (0, r.jsx)("div", {
          ref: i,
          contentEditable: c,
          onInput: (e) => {
            c && s(e.currentTarget.innerText);
          },
          onFocus: () => {
            c && u(!0);
          },
          onBlur: () => {
            c && u(!1);
          },
          className: o()(
            "body-text-lg box-border w-full max-w-full resize-none overflow-hidden overflow-y-auto whitespace-pre-wrap break-words rounded-xl border-2 bg-secondary-200 py-3 pl-3 pr-10 outline-none transition-colors duration-200 ease-in-out",
            c
              ? "cursor-text text-secondary-900"
              : "cursor-not-allowed text-gray-400",
            d ? "border-primary-default" : "border-secondary-200",
            "" === n
              ? "before:pointer-events-none before:text-gray-500 empty:before:content-[attr(data-placeholder)]"
              : ""
          ),
          style: { minHeight: "2rem", maxHeight: "10rem" },
          "data-placeholder": t,
          onKeyDown: (e) => {
            if (c) {
              if ("Enter" === e.key && !e.shiftKey && !e.ctrlKey) {
                e.preventDefault(), l(n);
                return;
              }
              "Enter" === e.key &&
                e.ctrlKey &&
                e.shiftKey &&
                (e.preventDefault(), s(n + "\n"));
            }
          },
        });
      };
    },
    98734: function (e, t, n) {
      n.d(t, {
        Dt: function () {
          return c;
        },
        En: function () {
          return a;
        },
        eh: function () {
          return l;
        },
        nh: function () {
          return s;
        },
      });
      var r = n(21083);
      n(26679), n(50703), n(2570);
      var i = n(46762);
      n(74480);
      var o = n(70386);
      function a(e) {
        if (!e) return null;
        if (e.startsWith("ft:gpt")) return r.k8.OPEN_AI;
        switch (e) {
          case r.J3.GPT_4:
          case r.J3.GPT_4_o:
          case r.J3.GPT_3_5_TURBO:
          case r.J3.GPT_4_o_mini:
            return r.k8.OPEN_AI;
          case r.J3.CLAUDE_3_5_SONNET:
          case r.J3.CLAUDE_3_5_HAIKU:
            return r.k8.ANTHROPIC;
          case r.J3.FIMBULVETR_11B_V2:
          case r.J3.MYTHOMAX_13B:
            return r.k8.CUSTOM;
          default:
            throw Error("Invalid model provided!");
        }
      }
      function s(e) {
        let { prompt: t, characterName: n, username: r } = e;
        return t.replace(/{user}/g, r).replace(/{character}/g, n);
      }
      function l(e) {
        let { prompt: t, characterName: n, username: r } = e;
        return t
          .replace(
            /{user}/g,
            '<span style="color: '.concat(i.bI, ';">').concat(r, "</span>")
          )
          .replace(
            /{character}/g,
            '<span style="color: '.concat(i.oC, '">').concat(n, "</span>")
          );
      }
      function c(e, t) {
        var n, r, i, a;
        return (
          (n = this),
          (r = void 0),
          (i = void 0),
          (a = function* () {
            yield (0, o.hP)();
            let n = yield fetch(
              "/api/agents/".concat(e, "?userId=").concat(t),
              { method: "GET" }
            );
            return n.ok
              ? yield n.json()
              : (console.error(
                  "Unexpected error while retreiving the agent!",
                  yield n.text()
                ),
                null);
          }),
          new (i || (i = Promise))(function (e, t) {
            function o(e) {
              try {
                l(a.next(e));
              } catch (e) {
                t(e);
              }
            }
            function s(e) {
              try {
                l(a.throw(e));
              } catch (e) {
                t(e);
              }
            }
            function l(t) {
              var n;
              t.done
                ? e(t.value)
                : ((n = t.value) instanceof i
                    ? n
                    : new i(function (e) {
                        e(n);
                      })
                  ).then(o, s);
            }
            l((a = a.apply(n, r || [])).next());
          })
        );
      }
      n(34155);
    },
  },
]);
