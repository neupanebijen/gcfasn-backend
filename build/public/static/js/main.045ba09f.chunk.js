"use strict";

(undefined.webpackJsonpgcfnew = undefined.webpackJsonpgcfnew || []).push([[0], { 134: function _(t, e, n) {
    "use strict";
    n.r(e);var a,
        c,
        i,
        r,
        o,
        s,
        j,
        d,
        l,
        u,
        b,
        x,
        h,
        p,
        g,
        O,
        f,
        A,
        m,
        v,
        w,
        k,
        C,
        S,
        y,
        E,
        z,
        B,
        N,
        I,
        q,
        V,
        Q,
        J,
        R,
        U,
        F,
        M,
        W,
        K,
        D,
        H,
        P,
        T,
        Y,
        L,
        G,
        Z,
        X,
        _,
        $,
        tt,
        et,
        nt = n(0),
        at = n.n(nt),
        ct = n(16),
        it = n.n(ct),
        rt = n(28),
        ot = n(18),
        st = n(11),
        jt = n.n(st),
        dt = n(35),
        lt = n(17),
        ut = n(10),
        bt = n(7),
        xt = n(6),
        ht = n(92),
        pt = n(1),
        gt = ["maxWidth"],
        Ot = function Ot(t) {
      var e = t.maxWidth,
          n = void 0 === e ? 1600 : e,
          a = Object(ht.a)(t, gt);return Object(pt.jsx)("div", { style: { maxWidth: n, margin: "0 auto" }, children: a.children });
    },
        ft = function ft(t) {
      var e = t.src,
          n = t.width,
          a = void 0 === n ? 100 : n,
          c = t.height,
          i = void 0 === c ? 100 : c;return Object(pt.jsx)("div", { children: Object(pt.jsx)("img", { src: e, width: a, height: i }) });
    },
        At = n(177),
        mt = n(183),
        vt = "#FFFFFF",
        wt = "#2F7D3D",
        kt = "#478556",
        Ct = "#E6E6E6",
        St = "#999999",
        yt = "#4D4D4D",
        Et = "#000000D9",
        zt = "90px",
        Bt = "62px",
        Nt = "47px",
        It = "25px",
        qt = "22px",
        Vt = "18px",
        Qt = xt.a.div(a || (a = Object(bt.a)(["\n\tfont-size: ", ";\n\tcolor: ", ";\n\ttext-shadow: 5px 5px 3px #00000066;\n\ttext-align: center;\n"])), Bt, function (t) {
      return "" === t.color ? yt : t.color;
    }),
        Jt = xt.a.div(c || (c = Object(bt.a)(["\n\tfont-size: ", ";\n\tcolor: ", ";\n\ttext-align: center;\n\tmargin: 0 auto;\n\tpadding: 10px 20px;\n"])), It, St),
        Rt = xt.a.div(i || (i = Object(bt.a)(["\n\tfont-size: ", ";\n\tdisplay: flex;\n\tflex-direction: column;\n\tcolor: white;\n\tmargin-top: 150px;\n\talign-items: ", "; \n"])), zt, function (t) {
      return t.alignment;
    }),
        Ut = function Ut(t) {
      var e = t.text,
          n = t.color,
          a = void 0 === n ? "" : n;return Object(pt.jsx)(Qt, { color: a, children: e });
    },
        Ft = function Ft(t) {
      var e = t.text;return Object(pt.jsx)(Jt, { children: e });
    },
        Mt = xt.a.div(r || (r = Object(bt.a)(["\t\n\tdisplay: flex;\n\theight: 70vh;\n\talgin-items: center;\n\tjustify-content: center;\n"]))),
        Wt = xt.a.div(o || (o = Object(bt.a)(["\n\tfont-size: 105px;\n\tcolor: ", ";\n\tdisplay: flex;\n\talign-items: center;\n"])), Et),
        Kt = function Kt(t) {
      var e = t.text;return Object(pt.jsx)(Mt, { children: Object(pt.jsx)(Wt, { children: e }) });
    },
        Dt = { fontWeight: "bold", textTransform: "uppercase" },
        Ht = function Ht(t) {
      var e = t.preText,
          n = t.boldText,
          a = t.postText,
          c = t.alignment,
          i = void 0 === c ? "" : c,
          r = t.addShadow,
          o = void 0 !== r && r;return Object(pt.jsxs)(Rt, { alignment: i, children: [Object(pt.jsx)("div", { style: o ? { color: Ct } : {}, children: e }), Object(pt.jsx)("div", { style: o ? Object(dt.a)({ textShadow: "5px 5px 3px #00000099" }, Dt) : Dt, children: Object(pt.jsx)(Lt, { text: n }) }), Object(pt.jsx)("div", { style: o ? { color: Ct } : {}, children: a })] });
    },
        Pt = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { delay: .3, duration: .4, staggerChildren: .15, type: "tween" } }, exit: { transition: { staggerChildren: .1 } } },
        Tt = { hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 }, exit: { opacity: 0, y: 10 } },
        Yt = function Yt(t) {
      var e = t.text,
          n = (t.key, e.split("").map(function (t, e) {
        return "_" === t ? Object(pt.jsx)(At.a.div, { variants: Tt, children: Object(pt.jsx)("div", { style: { opacity: 0 }, children: "_" }) }, e) : Object(pt.jsx)(At.a.div, { variants: Tt, children: t }, e);
      }));return Object(pt.jsx)(pt.Fragment, { children: Object(pt.jsx)(At.a.div, { style: { display: "flex" }, variants: Pt, initial: "hidden", animate: "visible", exit: "exit", children: n }) });
    },
        Lt = function Lt(t) {
      var e = t.text,
          n = [e, e],
          a = Object(nt.useState)(0),
          c = Object(ut.a)(a, 2),
          i = c[0],
          r = c[1];return Object(nt.useEffect)(function () {
        setTimeout(function () {
          return r(i === n.length - 1 ? 0 : i + 1);
        }, 5e3);
      }, [i]), Object(pt.jsx)(pt.Fragment, { children: Object(pt.jsx)(mt.a, { exitBeforeEnter: !0, children: Object(pt.jsx)(Yt, { text: n[i] }, 0 === i ? 0 : n[i - 1].length) }) });
    },
        Gt = n(90),
        Zt = function Zt(t) {
      var e = t.icon,
          n = t.size,
          a = void 0 === n ? 22 : n,
          c = t.color,
          i = void 0 === c ? "black" : c;return Object(pt.jsx)("div", { style: { fontSize: "".concat(a, "px"), color: i }, children: e });
    },
        Xt = xt.a.div(s || (s = Object(bt.a)(["\n\tflex: 1;\n\tdisplay: flex;\n\tgap: 140px;\n\tjustify-content: flex-end;\n\tmargin-top: 20px;\n"]))),
        _t = Object(xt.a)(Gt.a)(j || (j = Object(bt.a)(["\n\tcolor: ", ";\n\tfont-family: 'Helvetica';\n\tfont-size: ", ";\n\ttext-decoration: none;\n\tfont-weight: bold;\n"])), function (t) {
      return t.color;
    }, It),
        $t = xt.a.div(d || (d = Object(bt.a)(["\n\tcolor: ", ";\n\tfont-family: 'Helvetica';\n\tfont-size: ", ";\n\tfont-weight: bold;\n\tdisplay: flex;\n\tgap: 40px;\n"])), function (t) {
      return t.color;
    }, It),
        te = function te(t) {
      var e = t.color,
          n = void 0 === e ? null : e,
          a = null === n ? "white" : "black";return Object(pt.jsxs)(Xt, { children: [Object(pt.jsx)(_t, { to: "/about", color: a, children: "About Us" }), Object(pt.jsx)(_t, { to: "/home#test", color: a, children: "Programs" }), Object(pt.jsx)(_t, { to: "/contact", color: a, children: "Contact Us" }), Object(pt.jsxs)($t, { color: a, children: [Object(pt.jsx)("img", { src: null === n ? "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAABHNCSVQICAgIfAhkiAAABCVJREFUaEPdmotRFEEQQLsjUCNQIhAiECJQIlAiECIQI1AiUCMQIxAikAyECIQI2npXs1d7ezv/2a3b6yrqqNqdz5vu6enpXpVKMbO3InIoIsci8tz93/V6LyL8ITci8ktV7yqHrGquJa0d5DsR+VDQ/lFErkXkh6qyCLNKFrCZvReRSxF51WiWAH+eEzwJ2MwA/ObMthHrRjdo/ExV0f6kEgU2M8z2i9ufU04G2NOptR0ENjNAz6ekHOn7XFWvphrTC2xmmHCJU2KuD27CLwsn/l1VzwrbBpuNApvZVxH5mDggcOzBG1Xld0vMDI/OscVv6iJcqCrzaCpbwG5yPxNGAfRSVb8nvLt+xfUPSAo4e3p0EXPG7L+7AWxmBA5/ExxU9eqbGb4BHxESHNlBS+89BP4dOXqeMMtWntTMMHM0+CxAfa2qp6UaHbZbAyeYMrDHrUNDMyMsJQAJQZ+0WuQ+cEy7zQYdrrrTNOP7BId40kLLK+CEAav3bGyyCXv6qIV1dcDsI249Y/Kgqq1i5yC3mXGz8nlvLhulccF63A74X8AzE+NmHT0xbfqeR/zIo6q+KO27a6cRc55Nu92EIlquNmuAue598qzclarOGktHojyuksy3WADmSHjj6aF5pBObacTiqvdxEFhVo9fHGEDJczMzT7tbVSVYKRaACSVHvfAOAt+p6lExrYgA7FvN2R1Wz3GR6Hs9BlarhBDwvaoe1KxmaVsz+zPIfnZdPakqF5xiCQFL7WqWzmrqPTyZ+ewqcOhYmuzCEIi2uD1h0mNCIp+sSbEsLfCovsTEQsvZHVfomBSR+tAS2wg4CR7PFm3NEdd3tyVuQ5RRxmQ2LUe0Wx1WArekBADJvK4SWe60UqIb985kHtvltXyemeGbaHetYbePCcpDeSVSpkA3re86WMYNRVDNFnuYpg2dyaxL04JXImwz7W5o2GmZWxMaDKVMebW64GVmlHJipRSqG4eTJeIdNIkyCmkxwYEQCGSVQtzRQ/8picHqc3cI4SumhdI+wz4AB5oKwe3YKjnT5dgjLEwBpRv6BbhpkTxULg2dzTHtd46NuLhG+h/FcPm/qOlsaw8PO0tIjteOP9aefevLTVfXjaM5K7fn0HZKebNmAQDF5NEqFjIJdBTYOTLOSKB91Yka0FVg4Tz/ar9GMqm8UqzpJOCOxmkbh+ZL6+aCA8rkN77XSgAuhs4C7oHjaQEnOss1dUwXQL4eGI2NMz65yNZ0EXBfje7IAbz79JDHWAD15M5bY6pAcnQlXQDMLPWUyIKuBs614Zz3p4DeaWDnwJpqeueBW0MvArgl9GKAW0EvCrgF9OKAa6EXCVwDvVjgUuhFA5dALx44A3qVDNwL4ATodeZzb4AD0Btp3r0CHoHeymnvHXAPmk82tr7N3Evg0BX0Pw+e8EwFMF49AAAAAElFTkSuQmCC" : "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAABHNCSVQICAgIfAhkiAAAAdhJREFUSEvFlu0xBEEQht+LgAwQASJwIiAEFwEiQASIABkQASK4EwEyIALquZqu6pra6Zndsqv/3NbNzjz9+c7OVLZNSUeSjiVtS9pLr35IWkl6lPQk6Ss4o7g0K6xcSjqVBDwyoDeSrvrCczCgZxdd63lk4LBP9B5MKu86oJ8prZZSnCP9W5lXveAezMZddxjAE0kvhbDnku4zBzhjvyVNBqamF27DmyQOrjUO0eOYd/g81T3kA2bzu2skIiXtNagdzH4itdSzb6e2H/CZpGvnHk1SSm8pCrJDU5otUhnCcWIemVeMaJnZIcZ8W9QPqT9CsN9wmzIwBMw8M/vYa+qREPzjVhECGm2I5Q1aEqf12Sz+G9jP76Sp9s1FvRmFIda7uVAnpNJssnFCAPB2I5F5Rvb6CMjSjeF3eg73W+flItIq+F23WdNkRJcEkaNA0SVBibzgVOfX6unBXYLPezhAA+bXYpfC8R7Z4suE31BA/GIJXutyIsUxk16eadIiPPr0oe7WcCUwjYRUolq5coXwSNbsS4Obh7QeOB0m/dTel4CrlP+8s0V4qKe1/HasN8P/GowvTfAxwE3wscBV+JjgED42uAvOCM6nAHs4z4znaiqwwfldq9kv59J8fxg0xIEAAAAASUVORK5CYII=", width: 25, height: 25, style: { cursor: "pointer" } }), Object(pt.jsx)("img", { src: null === n ? "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAE4AAAA0CAYAAAAkEw66AAAABHNCSVQICAgIfAhkiAAAAOBJREFUaEPt2cERgkAUBUHJzMwMTc1AQzADM/iWZEBz3PHsHGheUQW7zcxc+h0VeG7BHTXb/x8csQWHbMEFxwIY9owLDgUw2xf3wHjl7LWtfPVnrj041AsuOBTArMUFhwKYtbjgUACzFhccCmDW4oJDAcz+L/k3bFfOPh3W2O3vQ6a5dcqFbsEFpwLY9YwLDgUwa3Fn4K4Yr5x9e1fF2x9ccCiAWYsLDgUwa3HBoQBmLS44FMCsxQWHApi1OIWbmTu2K2fvTrns9vc9ztw6rEG34IJTAex6xgWHApi1OIX7AZz3g5HP7hUFAAAAAElFTkSuQmCC" : "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACcAAAAaCAYAAAA0R0VGAAAABHNCSVQICAgIfAhkiAAAAF9JREFUSEvtlcENACAMAulkupmja1zhTA0P+r+khQZK0pbpVJaDztgrN+Fh7dhVznayHLUmyr0oNyjczdnnXLqVvIC9rakvaivhvjBpCCqzvXKLXtbN2edc6ou8gLWtB65GDU2JCpjuAAAAAElFTkSuQmCC", width: 25, height: 25, style: { cursor: "pointer" } })] })] });
    },
        ee = xt.a.button(l || (l = Object(bt.a)(["\n\tborder: none;\n\tbackground: #e6e6e6 0% 0% no-repeat padding-box;\n\tcolor: ", ";\n\tfont-size: ", ";\n\tfont-weight: bold;\n\tborder-radius: 20px;\n\tpadding: 8px 20px;\n\tcursor: pointer;\n\tfont-family: ", ";\n"])), wt, It, function (t) {
      return t.font;
    }),
        ne = xt.a.button(u || (u = Object(bt.a)(["\n\tbackground-color: #ffffff00;\n\tborder: 3px solid ", ";\n\toutline: none;\n\tcolor: ", ";\n\tfont-size: ", ";\n\tborder-radius: 60px;\n\tpadding: 10px 22px;\n\tcursor: pointer;\n\tfont-family: 'Rockwell';\n"])), vt, vt, It),
        ae = function ae(t) {
      var e = t.text,
          n = t.font,
          a = void 0 === n ? "Helvetica" : n;return Object(pt.jsx)(ee, { font: a, children: e });
    },
        ce = function ce(t) {
      var e = t.text,
          n = t.link,
          a = void 0 === n ? "" : n;return Object(pt.jsx)(rt.b, { to: "/".concat(a), children: Object(pt.jsx)(ne, { children: e }) });
    },
        ie = xt.a.div(b || (b = Object(bt.a)(["\n\tdisplay: flex;\n\tgap: ", ";\n\tfont-size: ", ";\n\talign-items: center;\n"])), function (t) {
      return t.gap;
    }, function (t) {
      return t.fontSize;
    }),
        re = function re(t) {
      var e = t.icon,
          n = t.text,
          a = t.passedFontSize,
          c = t.gap;return Object(pt.jsxs)(ie, { fontSize: void 0 === a ? qt : a, gap: void 0 === c ? "10px" : c, children: [e, " ", n] });
    },
        oe = n.p + "static/media/Logo@2x.f0096e0c.png",
        se = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACsAAAArCAYAAADhXXHAAAAABHNCSVQICAgIfAhkiAAABB5JREFUWEfVWc1uTlEUXTthIhIqIWZ0bKDCjIQ+gXoCDIwM6BNohxKJegI1YaidmSEMJdQL+MyJNkgMJFvWde7Nuffbe59z22rqJE2l9/yss8/aa/8Q7GCo6hyAqwCupG3OADie/v0LwDsAvwF8APBKRNZ3cBxk7OIE8E4CeHrk+k2CBvBERNZGrq0Hq6oEdg/AjbGHOPMJellE+LtqVFlWVQlyqWrH8ZNo4ZsiQquHIwSrqkcBPM84Wdpvu98nAK6JCLntDhds4uZjAHSivRi0LC3sctkEm4C+BEDL7vUg4FXr0Cmw6ekJtGTRDQBnR97kC4CDAI4E62jheYsSFlgCbXXT2pNa+QDAG+dAfqeHP3S+3wZwIimLh5mAZ4dO1wOrqvR4er43HonIXVXlM113JvGQiarSaU4ZcyYiMquqlMCVwMoMIvP5+g5s0tFPAdCGS4km35x5FPtGhxMYOqg16PlryTf4Ch4tevzNwUbWaixaAaKxaosusG5+qYUkj9almldoPzRg0w3fexwUEW7YjIACHYBsLq1sWbcHQlVpCI/jiyJCuvwNtzUczACQApakNU+bX7hAmXO5x5c4noMlV62khLG7C7OqSpWgWkwNEfE0m5y8bCyp3jspw0QKFJjJ5SNQi/WcKgPrek/8WkR6EqmqDLeWdjdUIFhPrqzN+MzMX4fDjTqBymyKyMzgYiEWgvWeqSN2xldvLiOOm+qpqtZQJ3pl0oxg3wK4aGzGJxmmbRcAHDbmsiL44agJ/3wJwAHjO89mJZEPM3q2YL8COBYctF8+zdCy5hPtF4QZjlv/E9hFgv0J4NA+tOQQ0izB0jnO73ewrYN5cnQfwIvBJRijTdFOvQHvzmbUY5I9WHASwDNP5mhZAmAfYDimolKgyVN5QabNzCOslHJLRHo5RpDQbIjIHMF6KdqYCDOVcWVgvcxrTIRsUtQ266L4WwlwL4yOuVgG1gvRXY7MuYXkv8nQWrDehr1aaEzKl4GtSilV1av9Orq0YKNsfZjKVVkqWcvbt8fXKPUE0L1AXtZ4qsBzOzoETjBVkQbW6py30KPYYp7dpqk5WDexTglNU8sXuNW9QsFaefEZ9Sh6rzosxb0npnW79k4gYZ11Iw6mqoSVSdSe+sxGS578D8FS95gaWvV+6zPM/NmN8YR+OTU5St/Z8IvaU70ajYdbHRm2jaJanutYbpNPXvuIFraAfE8XZX4bDbPy8Iq8SB3+dRrR09/8sKjlWWrv/AvQLlCTBjmCivbObgJ2i872kGKbPkUtqoRV++8GWHr9QqnrXbTswMqkBUvlSCnGgKeDMuNbqfn/hFFgs1hP6eLPdkETJJuAS7Ugq2ngmSpFMqoGf0oUoS5TDldrnts7s8jZMe+a+E26MON/KiIfx6wvzf0DytgBQrucV/QAAAAASUVORK5CYII=",
        je = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACUAAAAdCAYAAAAtt6XDAAAABHNCSVQICAgIfAhkiAAAAaVJREFUWEftl9FRwzAQRHcrIB0QKiAdABUEOoAKgAogFUAqgBLoAOiAdBA6gArErEfyyEG2zh7byYfvR8lYPj2t9jwnAoBz7hzAAwCN+4gPAGuSb1qcHuh9HySJNa8EJihRnh0I1JbkiaBcBLQBcDoy4DeA47AmFTtQKwA61+cR1JMAd97H8nMRSSiSj978ekG/j3pW7lebjtbRGjYoDzYD8Apg2RPYJ4BrktuQzzmXhfoCcE9S5i/DV6jgyrNvCSl1BFOUfAS0APACQGPt8YVn8tSK5E+UQKrpSEupjWBr2SCRS3mUrxIpT8UTBHRTsztLIRRGTqh+CeAJwDy1qRxUeEdHKbjSB5lCqBg5UloQghFUbVihlECqqWL0yYg9sVsI/4zsN3DrK1nzG6MNVEjUVAgzi5GHgKothISCSSMPCRWONFUIjUYeGqpSCP5P1shjQQXVNGaNPCZUbi3z8y7VZ07edeIEZVVuUmpSyqqAdd5Be0otal89uFWQunkbkgtdsdQfq5Hr+9bSBfBCnSp9E6auULeKZIvaJXvLd9REqo9Xv4Y/ny7tHhet6CkAAAAASUVORK5CYII=",
        de = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACUAAAAlCAYAAADFniADAAAABHNCSVQICAgIfAhkiAAAAtNJREFUWEe1mEuIjlEYx3//RBE1hBJlieSyonFfSEnTJJPLygwr1x2TW7nWFBtkRK4rdwmLWYksXDY0I0URscIUK5fS0aPz6Z3X+35zzvm+Oau33v/zf34957znnOeVc64ZOARMpXx8ADokdVbR1O2VnHMfgfGBjg2SvgVqk2UG9RMYEujQKOlxoDZZZlC9wKhAhyZJdwO1yTKDegdMDHRok3QhUJssM6hnwMxAh22SjgRqk2UGdRNYHuhwVdKqQG2yzKA6gPZAh15JowO1yTKDWgecjXCYJOl1hD5aalDTgO6IyFZJFyP00VJZhHPuEzAmMLpZ0u1AbZKsAnUZCFnAJyRtTsoUEVSBagXO9xPXKWlThHeytAI1ArCdfXCJ00lJG5OzRAb+hfLr6hrQUhB/TtL6SN+a5FmoZUD+XLsiaXVNGRKCs1D23JO7V72wI0jS7wTv5JB/UH4KrSqXcm7bJR1OzpAQ2AfKg70EpmS8fgCTJb1P8E8KKYKaBzzMuXVJWpqUISHoPyhfrTNA/ovbK2lfQo7okDKoBr/oJ+QcWyTdiM4SGVAI5au1ALgPZDXfgTmSnkfmiZKXQnmwg8CunKN1P/Ml2TV6QEZVKA9mN4KmXPavwApJ90KonHMrgTW+a3oKPAEelbVrIVBD/TTOKgDYKul4NTDnnDW6O0s0n4E3wFvgFXBLUne/UL5adgW29VXURdutdYskW299hnPuALA7pJoZzaIgKA9mX2QXMLsgiW2sayU9qLzrp0LVOI8GQ3mwYcB1oGwjtam0JmQHsCeyQhX5qSioTBVsSmxqisYXoJaOJw3KV22hP7zHJVakLCwdyoMN97+R7Jo8qE5wp5Omr+Armw7sB+xfV62jtkoVwNmPkg1AGzA2ka6+UFkI55zt4NYlLYmEO1aX6auW1Dk30g5xYC7Q6Pc5OyXKxuIBhyrK7Jyb4SGzU/wLuCOp5w/lsto8LdDjxwAAAABJRU5ErkJggg==",
        le = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACUAAAA0CAYAAAANFPE9AAAABHNCSVQICAgIfAhkiAAAAxxJREFUWEfNmI1VFDEUhe+tQDpQKlAqECtQKlAqUCtQK3CtQKgAqECtQKhAqECp4HnumIyzM5nkJTPr+s7ZAywvmW+S93MTotLM7ADAcwAvAOh3fZ6Eaa4B/AqfSwBXJPV3ldHrbWaCeBlgvMPkJ9ANyXPvoCKUmR0DeAdAP5fYVwAfSOpn1rJQZvYRwJvSJJX/PyN5mhuThApxc7HC6sw9W1v6bC7eJlAB6MsgeCsXwu1+C+AoBZaCEtDS+PGSXZM8GjtvQZnZBsBr74wr+U1irIcKWaZV2ocpvvqsHEL9y20bv/gtycP4ZQcVCqOybZ92SvJMABFKLUGto8VuACiTZI8APG6ZRJU/Bj1DCfjZMNGVCivJCNRNYWYCU8K0vOSh5hPUKwCfK6HULt7nxjTO+5bkRlC1W6fOr+ZctIa5v5E8FpRS8WnxCX8duiX2+DeERg/1vaKl3JCM2snDpRiremnKzMxcs/9xcm9dnNPMFHuSPi77r6EkVx+4XmNQS5z+zdtXtecAdhno9yQPFFMq7dLeXrskeeJxro2nGLOCktyV7K2xvk/NDWosnl1RFpRSXGWh1rTCqsBbR6hQm6TJshV/5mGdhIkNWcXwYS1V8FdMRi0kxdqqWrt40pwRah+Kc7wG5yTVh3uo1i1sXNzksF59DpWnjj2tWmgp3B1JSZ7OhlAtEmYpTBzfSZYJlL4ws5rqvhbQvRTrMIvHR6yq5rkS1UQwjqGUkioP3l64lGuySlsxFWdvrPCtcElZPXfBsaSYegGTq5RcqRDw0uC7PgfO9s/Z+6laGetdnuCXldU5KBWzH5UP87pv3R2MB5Vu8nZRIj6RzN4Oeu481wz6O52cSjfGHihJkbWuiE5I6vCbtSJUyMY1pE0vTVaBCmBLVIRr25INOfcGQTZLYba0oGy2VWXf2LmxBRVvaBZBhW2suaXpLixKMbQGlJSE4qt00JjtbSVIV/YltlGavhRfurgXfLU1QYVtzMnn4mE1R9oMlalf7no0B7YIKhH41ZdqKbA1oBT4/Qm51Nc8AbYYKqyWwHQiaQrsMehvzqhPRIkpOGkAAAAASUVORK5CYII=",
        ue = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEYAAABGCAYAAABxLuKEAAAABHNCSVQICAgIfAhkiAAABOhJREFUeF7tnI1RFTEQx7MVKBUIFQgVKBWIFSgVCBUIFYgVKBUIFSgViBUIFQgVrPO/Sd7k3Uvu9pLNx2PIzM08hpdc7ne7m93N5pGp2Jh53xjz2hiza4x5a2+Nz7j8dmuMebAXPuP6Q0R3taZLJW/EzC+NMR8sBIDA3zkNYH7hIqLLnIHm+hYBw8yAcWSvuTmk/h8SdWWMuSQiwFJtqmAskLOAaqhOOjAYwJxrAlIBw8yQji8NgIwZAdApEcEmZbUsMMwMo/nNM6RZk1HsfGElCOqW1JLBMPNHKyW5BjVp4oJOMNTvU6VnMRi70kBtAGYb2gkRfV060UVgLJSfxhj4I9vUvhPR8ZIJi8FY5wz2ZNugOB5Y2o+JSGR3RGAsFEhKr/ZEKgxYrQ4lcGbBbLH6xGCJ1GoSzBOE4mDNwpkDA5vScvW5N8a4wBG2YazKb6Q6FPge7M33WP8oGOunAEztBhhw0BAoijxYawNPbMAqnS9Aw94E7xEEYz3a35WNLYCcTb3FqSdmZsRon6VU7Pduiegg1CcGBiuQy5csvFfS128QiUtWi9joiWAwHIJPQF1rG2BsQPgj6fHSOt0QUfZLyAADlToYJ8FCYP5WjJKhPvs5kuLeRQYYDIGcztoiswamgcGF8VNJMmWCAZw9X2rGYGpKi4oKKUnMhtSswDSQFqQEEL+oNAWJWZMaHwwm+U5llrJBdjRsi6LEYChk/+BDmQGMdf3/yZ5H5VvYClkUpTMzVq5PhRPsK7/GgYHXiORTrbaxCkzduLKaY+m+dWBqq1HQqQrBsdKMRaFWymNQJwcGalTrxlFvMwKmtjRfE9ER2QAMcVHNtkRiEAFjA69WeyCiHYCp/UaWSgwcwJz0QgrQPYBJiUpTbub3WSIxLcAcAkyLG/cO5vwZTFj2BzA14yM3jd4l5hJgONdgJPTvHczNM5jwWy0CRiwNCZIW7FIg1nsyYBBgIk+t1QYwyHm+0BoxllxWHH9jqAJO6mB8tf2YFqqk7aQOy7V2ZN0CjPbLPS0RErQAo+2LDSEBtg00t2JbgNH2xYYgEgWGIK7VqoIpkDa5J6Jdl6hCRcErJTK1waCUVnPndEi7OjCayaDaYLRXpKE8xIHRpj4nfGJ4BdyJubkN2zr+vpK2ozc1gV7BDPleTNwHo6lOc2+lVzCrKisfDDbAaiXFewTzSESrnZLxpr62BxmTnB7BrM1pDEY7St0WMI+oCfL30kOFQzWkpjeJ2ZhPCEwNqekJzIa0rK1KvswzM0ohUFlQqvUEJlinE6vahHVG/atWmDAG3AuYld8ynuBUAXRJleoBTFCFHKC5kvlS+9o9gBnqYGK2QnL6pIRH3BrM5DmCqPEdU2yZ/iwQRK7q7KZWllmJQWe7bwP/Bj8/oNFaSYy4xE0ExoMDtdKo7GwBRiQpIuMbEg1m1rA5tcHM2hTxcj2lLzaBDicwdaOuFhicVcCpFtG5J/+ZxaoUMMhIU0B6UuxODTDXOJ2XWmSdDMaBsqVq8HeWSE9JMJASHELPKsfPBmMNM7ZgkJSWVleWAANPFup9kSolKqoUMcxSQJpgVIEkr0oSJ8b6PdjhhIqFAlENMDguiGPC0ZOwkrkmhwQ5g3tq5n59CAYbtigFDGwHVhfYjisNdcn2fHPh+P3tlrCR/hCX3YK9Kw1i/Iz/AV52lStIdOF/AAAAAElFTkSuQmCC",
        be = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAABHNCSVQICAgIfAhkiAAABhZJREFUeF7lm4+xFEUQxrsjUCIQIhAiECIQI1AiECPwGYEQgRCBEoEQgRCBEIEQQVu/c2Zrd256pnd297xXTNWrenW3Ozf9TffXf6ZHZWCY2Zci8o2I3E+vP5xNw3f584HZ3VfeisjH2bev0/98/kZV59+Ff1ejT5rZXRH5UUQQ9ggBo0vxngMIQHmuqu+jk3UBSIL/LCI/RCe9gudeiMgvESCaAJgZO/7sCgQaXcJTVX3eerkKQLLxX2/Zrntyog0/eRxxBkAS/s8BO/8kItjh0QP++WLlj7CuRzUQagD8Ftj5d4lw/oCZVfUSgi9kNjOAwONAyo9F5OsOKC9U9Un5zAIAM3sqIqi+N94AToRcVu7Q5scTWd+IyPeNyTCFBadNAKQJ/nZeRr0hFOzpqoeZ4a0Q0jOTe/MNnAOAcDX0EP7h/6Hmo0gn8yAmqIHwUlUnl34CoLP7T27DzpdgJU2Az2pj0oIMACqDzy8HIeY8zB3dlN3fMzOCMzgLIoSECXwg5WmYmafVRIu8KxmAvxy3t7CX3aUYnNDMfk/MX87w3RyEhma/VdUHJwCS3/+nspZ3qnp1MX+ybzasNt6r6r1CC+ACErdy3CEuAAB8KIiWY1KTwY065LWObYuqlq4d14i5lOPEbQDgPbBQpz2kSSpJwJI1iwwzZ27YMVrXzOTMDE4iUq2NT6oKJ0yj8TyccdMC4MEeri+ZGO4V1xMxKYCAvHBXZzl+mo9nvopobYMHThoOAFUbKVVpRAMKpl47BcLjnVjoAojEAzD+HIRXKUqtgWaVHz95uEMASAvEB0d2vAcMJoE5LvKNpAnMz9/rlraaGXOUGtMEYNj/J5uDVBe22JOy8z27Cmkt/Hx0TkfLJwBqMcAQAB2Ciq639dwQMbfMHBNw7WPNipPaw86tnSeNZhfhHYKRj4UqQ5SttBZNIK9flX5fCgAvmgTHDyJyE8kpUlwC+dVYnrmwZzxUuAp8OACNWIIFU0N4vHLBaBGu8FtHC08+PKqhhwKQVJg6Qk31h7gkC2ZmmEsNBHafPCWkBV5ShKvfzAGNKhJqfz+6yNpudoKes+qOpxGehu4FgGf7u9QRGp5lyuh6pnAYAJfKJM0M1q95h1C6fiQAXia5iqQCO+gVa0NadhgHNNgfX50PL3vydb/vZXS9CQ7zAg0AQqrZW3iR1tYCtpCmHQlAtea2RyZZgrMlYj0SAK+Y8tlogAfAZ8MBt8ULVDdqcyAUKTuvIbpGJLepbH9YHMCCG0FKyEf3AGq4wHDZ/mgAvCBlddpaYX4SLHaf6nE5riYXYJEIWzuIpFb3qLfLDdX3ToA4sL0bTbS8rHIzB8zSVs8b8AgRIaWsUOqazApQKapCsrURCoBm63Mr35vT4dmPeAkLj6AhqGy3qJlsHuFras9cq9PswwKhIlQ9lac7/Tv50COfAuWaYD4t6h2eDPUq9ACo7dxQJadxzjhKA+V7e1aFT8do3sHIEADJfrFbcoS1nVwtkNh5epO6JlSbpHcuUCMIOr/ujG5bKpEDQq9zK/IT2DxF1VWl8MI8qVmWnHLc0diMyYkR+BvRBnad8vizNR7E0YDm2aDnwvY8HYbceoceee0cnqA99PWFXWcjlmDna91v0+nwRTK6pBUshvP9rI78nytHuEoCp3Cnd8R+etWkW9chEhG6sP9uhwhRV61HKFx2XruoSz7vxQAi8l+PUFLNTWXnSwq05rca6fqUSfb6BDclM2sWe8Sza/oEPaZkXbvk9UcI2JqzE5UuO0WTGXhdlUNn8pcWuJKXeL0K573CMxfldYsDAtncbegWJxQnm/QaNerd4gmE3n2B8GWkS2tA8HLXWR2hdmPEM4W5THiN3OryYe/gJQJeEpguEoKp/Nd69ZWqnhVYvDtDRGdrExnMZDhhma08R4JeQYTPve88AAivufNwFlq3bo2RiLSun0Q26hqecRsoWVzv3mCPE65BwNYaurXD6M3R3mWkawPiZepK6yZWXQCyZIl00AgIZy0/XAKgfJWP+kFX8LygMABFoJHv69Vuj0NQXo/fFiCoDM0Fy7fJT5emR2sHQwBskeLa3v0XSvWdbsHdaSkAAAAASUVORK5CYII=",
        xe = xt.a.div(x || (x = Object(bt.a)(["\n\tpadding-top: 30px;\n\tcolor: white;\n\tbackground: transparent linear-gradient(180deg, #00924580 0%, #39b54a80 100%)\n\t\t0% 0% no-repeat padding-box;\n\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: center;\n\talign-items: center;\n\tgap: 15px;\n"]))),
        he = xt.a.div(h || (h = Object(bt.a)(["\n\tdisplay: flex;\n\tflex-direction: column;\n\tgap: 8px;\n"]))),
        pe = xt.a.div(p || (p = Object(bt.a)(["\n\tdisplay: flex;\n\tflex-direction: column;\n\tgap: 20px;\n"]))),
        ge = xt.a.div(g || (g = Object(bt.a)(["\n\tdisplay: flex;\n\tgap: 20px;\n"]))),
        Oe = xt.a.div(O || (O = Object(bt.a)(["\n\tdisplay: flex;\n\tgap: 40px;\n\tmargin-top: 50px;\n"]))),
        fe = xt.a.p(f || (f = Object(bt.a)(["\n\tmargin-top: -10px;\n"]))),
        Ae = function Ae() {
      return Object(pt.jsxs)(xe, { children: [Object(pt.jsx)(ft, { src: oe, height: 145, width: 145 }), Object(pt.jsx)(me, {}), Object(pt.jsx)(we, {}), Object(pt.jsxs)(fe, { children: ["\xa9 Green Circle ", Object(pt.jsx)(rt.b, { to: "/dashboard", style: { color: "white", textDecoration: "none", cursor: "text" }, children: "Foundation" }), " 2021"] })] });
    },
        me = function me() {
      return Object(pt.jsxs)(he, { children: [Object(pt.jsx)(re, { icon: Object(pt.jsx)(Zt, { icon: Object(pt.jsx)("img", { src: le, width: 18, height: 27 }), color: "white" }), text: "Budanilkantha-08, Kathmandu" }), Object(pt.jsx)(re, { icon: Object(pt.jsx)(Zt, { icon: Object(pt.jsx)("img", { src: se, width: 18, height: 18 }), color: "white" }), text: "www.gcfeducation.com" }), Object(pt.jsx)(re, { icon: Object(pt.jsx)(Zt, { icon: Object(pt.jsx)("img", { src: je, width: 18, height: 14 }), color: "white" }), text: "info@gcfeducation.com" }), Object(pt.jsx)(re, { icon: Object(pt.jsx)(Zt, { icon: Object(pt.jsx)("img", { src: de, width: 18, height: 18 }), color: "white" }), text: "9851236949,9851121892" })] });
    },
        ve = function ve(t) {
      t.fontSize;return Object(pt.jsxs)(pe, { children: [Object(pt.jsx)(re, { icon: Object(pt.jsx)(Zt, { icon: Object(pt.jsx)("img", { src: le, width: 30, height: 48 }), color: "white" }), text: "Budanilkantha-08, Kathmandu", passedFontSize: "35px", gap: "40px" }), Object(pt.jsx)(re, { icon: Object(pt.jsx)(Zt, { icon: Object(pt.jsx)("img", { src: se, width: 30, height: 30 }), color: "white" }), text: "www.gcfeducation.com", passedFontSize: "35px", gap: "40px" }), Object(pt.jsx)(re, { icon: Object(pt.jsx)(Zt, { icon: Object(pt.jsx)("img", { src: je, width: 32, height: 25 }), color: "white" }), text: "info@gcfeducation.com", passedFontSize: "35px", gap: "40px" }), Object(pt.jsx)(re, { icon: Object(pt.jsx)(Zt, { icon: Object(pt.jsx)("img", { src: de, width: 30, height: 30 }), color: "white" }), text: "9851236949,9851121892", passedFontSize: "35px", gap: "40px" })] });
    },
        we = function we() {
      return Object(pt.jsxs)(ge, { children: [Object(pt.jsx)("a", { href: "https://www.facebook.com", target: "_blank", children: Object(pt.jsx)(Zt, { icon: Object(pt.jsx)("img", { src: ue, width: 35, height: 35 }) }) }), Object(pt.jsx)("a", { href: "https://instagram.com", target: "_blank", children: Object(pt.jsx)(Zt, { icon: Object(pt.jsx)("img", { src: be, width: 35, height: 35 }) }) })] });
    },
        ke = function ke() {
      return Object(pt.jsxs)(Oe, { children: [Object(pt.jsx)("a", { href: "https://www.facebook.com", target: "_blank", children: Object(pt.jsx)(Zt, { icon: Object(pt.jsx)("img", { src: ue, width: 45, height: 45 }) }) }), Object(pt.jsx)("a", { href: "https://instagram.com", target: "_blank", children: Object(pt.jsx)(Zt, { icon: Object(pt.jsx)("img", { src: be, width: 45, height: 45 }) }) })] });
    },
        Ce = xt.a.div(A || (A = Object(bt.a)(["\n\tdisplay: flex;\n\tflex-direction: column;\n\tgap: 30px;\n\twidth: 40%;\n"]))),
        Se = xt.a.div(m || (m = Object(bt.a)(["\n\n"]))),
        ye = xt.a.div(v || (v = Object(bt.a)(["\n\tdisplay: flex;\n\tgap: 50px;\n"]))),
        Ee = xt.a.input(w || (w = Object(bt.a)(["\n\tborder-radius: 27px;\n\tborder: none;\n\tfont-size: ", ";\n\tpadding: 13px 24px;\n\tmargin-top: 10px;\n\twidth: 100%;\n\n\t&:focus{\n\t\tborder: none;\n\t\toutline: none;\n\t}\n"])), Vt),
        ze = xt.a.textarea(k || (k = Object(bt.a)(["\n\tborder-radius: 27px;\n\tborder: none;\n\tfont-size: ", ";\n\tpadding: 10px 20px;\n\twidth: 100%;  \n\tmargin-top: 10px;\n\tmin-height: 200px;\n\n\t&:focus{\n\t\tborder: none;\n\t\toutline: none;\n\t}\n"])), Vt),
        Be = xt.a.div(C || (C = Object(bt.a)(["\n\tcolor: white;\n\tfont-size: ", ";\n"])), It),
        Ne = xt.a.div(S || (S = Object(bt.a)(["\n\tmargin-left: -150px;\n"]))),
        Ie = xt.a.div(y || (y = Object(bt.a)(["\n\tdisplay: flex; \n\tjustify-content: space-between;\n\twidth: 100%;\n"]))),
        qe = function qe() {
      return Object(pt.jsxs)(Ce, { children: [Object(pt.jsx)(Ne, { children: Object(pt.jsx)(Ut, { text: "Have any Queries", color: "white" }) }), Object(pt.jsx)(ye, { children: Object(pt.jsxs)(Ie, { children: [Object(pt.jsx)(Ve, { text: "Name" }), Object(pt.jsx)(Ve, { text: "Email" })] }) }), Object(pt.jsx)(Qe, { text: "Message" }), Object(pt.jsx)(Ie, { children: Object(pt.jsx)(ae, { text: "SEND", font: "Rockwell" }) })] });
    },
        Ve = function Ve(t) {
      var e = t.text;return Object(pt.jsxs)(Se, { children: [Object(pt.jsx)(Be, { children: e }), Object(pt.jsx)(Ee, {})] });
    },
        Qe = function Qe(t) {
      var e = t.text;return Object(pt.jsxs)(Se, { children: [Object(pt.jsx)(Be, { children: e }), Object(pt.jsx)(ze, {})] });
    },
        Je = n.p + "static/media/Hero Section Image@2x.b11a89ed.png",
        Re = n.p + "static/media/Background@2x.649f959a.png",
        Ue = n.p + "static/media/ContactBackground@2x.ae97a3e3.png",
        Fe = xt.a.div(E || (E = Object(bt.a)(['\n\theight: 100vh;\n\tbackground: url("', '") center;\n\tbackground-size: 100%;\n\tpadding-top: 20px;\n'])), function (t) {
      return t.background;
    }),
        Me = xt.a.div(z || (z = Object(bt.a)(["\n\tdisplay: flex;\n\tjustify-content: space-between;\n"]))),
        We = xt.a.div(B || (B = Object(bt.a)(["\n\tposition: relative;\n\tleft: -10px;\n"]))),
        Ke = xt.a.div(N || (N = Object(bt.a)(["\n\t\tcolor: white;\n\t\tdisplay: flex;\n\t\tflex-direction: column;\n\t\talign-items: center;\n"]))),
        De = (xt.a.div(I || (I = Object(bt.a)(["\n\tdisplay: flex;\n\talign-items: center;\n"]))), xt.a.div(q || (q = Object(bt.a)(["\n\tdisplay: flex;\n\talign-items: center;\n\tmargin-top: 60px;\n"])))),
        He = xt.a.div(V || (V = Object(bt.a)(["\n\tdisplay: flex;\n\tjustify-content: center;\n\twidth: 60%;\n\tmargin-top: 80px;\n\tmargin-left: 50px;\n"]))),
        Pe = xt.a.div(Q || (Q = Object(bt.a)(["\n\tdisplay: flex; \n\tjustify-content: center;\n\tmargin-top: 80px;\n"]))),
        Te = function Te(t) {
      var e = t.color,
          n = void 0 === e ? null : e;return Object(pt.jsxs)(Me, { children: [Object(pt.jsx)(We, { children: Object(pt.jsx)(rt.b, { to: "/", children: Object(pt.jsx)(ft, { src: oe, height: 100, width: 100 }) }) }), Object(pt.jsx)(te, { color: n })] });
    },
        Ye = function Ye() {
      return Object(pt.jsx)(Fe, { background: Je, children: Object(pt.jsxs)(Ot, { children: [Object(pt.jsx)(Te, {}), Object(pt.jsx)(Ht, { preText: "Introducing", boldText: "American_Education", postText: "In Nepal" }), Object(pt.jsx)("div", { style: { marginTop: 100 } }), Object(pt.jsx)("a", { href: "#test", children: Object(pt.jsx)(ae, { text: "Explore" }) })] }) });
    },
        Le = function Le() {
      return Object(pt.jsx)(Fe, { background: Re, children: Object(pt.jsxs)(Ot, { children: [Object(pt.jsx)(Te, {}), Object(pt.jsx)(Ht, { preText: "Introducing", boldText: "American_Education", postText: "In Nepal", alignment: "center", addShadow: !0 })] }) });
    },
        Ge = function Ge() {
      return Object(pt.jsx)(Fe, { background: Ue, children: Object(pt.jsxs)(Ot, { children: [Object(pt.jsx)(Te, {}), Object(pt.jsxs)(De, { children: [Object(pt.jsx)(qe, {}), Object(pt.jsx)(He, { children: Object(pt.jsx)(Ze, {}) })] })] }) });
    },
        Ze = function Ze() {
      return Object(pt.jsxs)(Ke, { children: [Object(pt.jsx)(ve, {}), Object(pt.jsx)(ke, {})] });
    },
        Xe = function Xe() {
      return Object(pt.jsx)(Fe, { background: Re, children: Object(pt.jsxs)(Ot, { children: [Object(pt.jsx)(Te, {}), Object(pt.jsx)(Ht, { preText: "High School", boldText: "Dual_-_Degree", postText: "Program", alignment: "center", addShadow: !0 }), Object(pt.jsx)(Pe, { children: Object(pt.jsx)("a", { href: "/pages/applicationForm.html", children: Object(pt.jsx)(ae, { text: "Join Now" }) }) })] }) });
    },
        _e = function _e() {
      return Object(pt.jsx)(Fe, { children: Object(pt.jsxs)(Ot, { children: [Object(pt.jsx)(Te, { color: "#000" }), Object(pt.jsx)(Kt, { text: "Coming Soon..." })] }) });
    },
        $e = n.p + "static/media/Rect 1@2x.ba5319ec.png",
        tn = xt.a.div(J || (J = Object(bt.a)(["\n\tdisplay: flex;\n\tjustify-content: center;\n\ttext-align: center;\n\tmax-width: 300px;\n\tposition: relative;\n\ttext-shadow: 5px 5px 3px #00000099;\n\n\n\ttransition: transform .25s; \n"]))),
        en = xt.a.div(R || (R = Object(bt.a)(["\n\t\topacity: 0;\n\t\ttransition: opacity .25s;\n\t\t\n\t\tposition: absolute; \n\t\ttop: 70%;\n\t\ttransform: translateY(-50%);\n"]))),
        nn = xt.a.div(U || (U = Object(bt.a)(['\n\theight: 530px;\n\tbackground-size: 100% 100%;\n\tbackground-image: url("', '");\n\tfont-size: ', ";\n\tfont-weight: bold;\n\tcolor: white;\n\n\tposition: relative;\n\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\tflex-direction: column;\n\n\t&:hover ", " {\n\t\ttransform: translateY(-100px);\n\t}\n\n\t&:hover ", " {\n\t\topacity: 1;\n\t}\n"])), function (t) {
      return t.image;
    }, Nt, tn, en),
        an = function an(t) {
      var e = t.image,
          n = t.title,
          a = t.buttonText,
          c = void 0 === a ? "Find Out More" : a,
          i = t.link,
          r = void 0 === i ? "" : i;return Object(pt.jsxs)(nn, { image: e, children: [Object(pt.jsx)(tn, { children: n }), Object(pt.jsx)(en, { children: Object(pt.jsx)(ce, { text: c, link: r }) })] });
    },
        cn = xt.a.div(F || (F = Object(bt.a)(["\n\tdisplay: flex;\n\tflex-direction: column;\n\twidth: 470px;\n"]))),
        rn = xt.a.div(M || (M = Object(bt.a)(["\n\tfont-size: ", ";\n\tcolor: ", ";\n\tfont-style: italic; \n"])), Vt, St),
        on = function on(t) {
      var e = t.image,
          n = t.title,
          a = t.text,
          c = t.link;return Object(pt.jsxs)(cn, { children: [Object(pt.jsx)(an, { image: e, title: n, link: c }), Object(pt.jsx)(rn, { children: a })] });
    },
        sn = { card1: { image: $e, title: "High School Dual-Degree Program", text: "The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz graced by fox whelps. Bawds jog, flick quartz, vex nymphs. Waltz, bad nymph, for quick jigs vex! Fox nymphs grab quick-jived waltz. Brick quiz whangs jumpy veldt fox. Bright vixens jump; dozy fowl quack. Quick wafting zephyrs vex bold Jim. Quick zephyrs blow, vexing daft Jim. Sex-charged fop blew my junk TV quiz. How quickly daft jumping zebras vex", link: "DualDegree" }, card2: { image: n.p + "static/media/Rect 2@2x.1cd25889.png", title: "The American School of Nepal", text: "The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz graced by fox whelps. Bawds jog, flick quartz, vex nymphs. Waltz, bad nymph, for quick jigs vex! Fox nymphs grab quick-jived waltz. Brick quiz whangs jumpy veldt fox. Bright vixens jump; dozy fowl quack. Quick wafting zephyrs vex bold Jim. Quick zephyrs blow, vexing daft Jim. Sex-charged fop blew my junk TV quiz. How quickly daft jumping zebras vex", link: "ComingSoon" }, card3: { image: n.p + "static/media/Rect 3@2x.684cd65c.png", title: "American Undergraduate Studies", text: "The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz graced by fox whelps. Bawds jog, flick quartz, vex nymphs. Waltz, bad nymph, for quick jigs vex! Fox nymphs grab quick-jived waltz. Brick quiz whangs jumpy veldt fox. Bright vixens jump; dozy fowl quack. Quick wafting zephyrs vex bold Jim. Quick zephyrs blow, vexing daft Jim. Sex-charged fop blew my junk TV quiz. How quickly daft jumping zebras vex", link: "ComingSoon" } },
        jn = function jn(t) {
      var e = t.data;return Object(pt.jsxs)(Ot, { maxWidth: 1600, children: [Object(pt.jsx)(Ut, { text: "Our Programs" }), Object(pt.jsx)(Ot, { maxWidth: 1100, children: Object(pt.jsx)(Ft, { text: "We at Green Circle Foundation provide different programs that are associated\r with the American Education through our partner educational insitutions in the United States of America" }) }), Object(pt.jsx)(ln, { data: e })] });
    },
        dn = xt.a.div(W || (W = Object(bt.a)(["\n\tdisplay: flex;\n\tjustify-content: space-between;\n\tgap: 20px;\n\tmargin-top: 45px;\n"]))),
        ln = function ln(t) {
      var e = t.data;return Object(pt.jsxs)(dn, { children: [Object(pt.jsx)(on, { image: sn.card1.image, title: sn.card1.title, text: e.sections[0].text, link: sn.card1.link }), Object(pt.jsx)(on, { image: sn.card2.image, title: sn.card2.title, text: e.sections[1].text, link: sn.card2.link }), Object(pt.jsx)(on, { image: sn.card3.image, title: sn.card3.title, text: e.sections[2].text, link: sn.card3.link })] });
    },
        un = n.p + "static/media/Logo - AMS@2x.9c5c89fd.png",
        bn = n.p + "static/media/NCSchool@2x.afa61b7a.png",
        xn = n.p + "static/media/Logo - CSULB@2x.fc619cb2.png",
        hn = function hn() {
      return Object(pt.jsxs)(Ot, { maxWidth: 1100, children: [Object(pt.jsx)(Ut, { text: "Our Partners" }), Object(pt.jsx)(Ft, { text: "Green Circle Foundation for American Education has partnership with a number of educational \r institutions in the United States of America" }), Object(pt.jsx)(gn, {})] });
    },
        pn = xt.a.div(K || (K = Object(bt.a)(["\n\tdisplay: flex;\n\tjustify-content: space-between;\n\talign-items: center;\n\tpadding: 20px;\n"]))),
        gn = function gn() {
      return Object(pt.jsxs)(pn, { children: [Object(pt.jsx)(ft, { src: un, height: 227, width: 271 }), Object(pt.jsx)(ft, { src: bn, height: 227, width: 276 }), Object(pt.jsx)(ft, { src: xn, height: 140, width: 296 })] });
    },
        On = xt.a.div(D || (D = Object(bt.a)(["\n\tdisplay: flex;\n\tflex-direction: column; \n\tgap: 60px;\n"]))),
        fn = n(39),
        An = n.n(fn),
        mn = function () {
      var t = Object(lt.a)(jt.a.mark(function t(e) {
        var n;return jt.a.wrap(function (t) {
          for (;;) {
            switch (t.prev = t.next) {case 0:
                return t.next = 2, An()({ method: "post", url: "".concat("/page", "/getPageByName"), data: { pageName: e } });case 2:
                return n = t.sent, t.abrupt("return", n.data);case 4:case "end":
                return t.stop();}
          }
        }, t);
      }));return function (e) {
        return t.apply(this, arguments);
      };
    }(),
        vn = function vn() {
      var t = Object(nt.useState)({}),
          e = Object(ut.a)(t, 2),
          n = e[0],
          a = e[1],
          c = Object(nt.useState)(!1),
          i = Object(ut.a)(c, 2),
          r = i[0],
          o = i[1],
          s = Object(nt.useState)(function () {
        return Object(pt.jsx)("h1", { children: "Working" });
      }),
          j = Object(ut.a)(s, 2),
          d = j[0],
          l = j[1];return Object(nt.useEffect)(function () {
        (function () {
          var t = Object(lt.a)(jt.a.mark(function t() {
            var e;return jt.a.wrap(function (t) {
              for (;;) {
                switch (t.prev = t.next) {case 0:
                    return t.next = 2, mn("Index");case 2:
                    e = t.sent, a(Object(dt.a)({}, e)), o(!0);case 5:case "end":
                    return t.stop();}
              }
            }, t);
          }));return function () {
            return t.apply(this, arguments);
          };
        })()();
      }, []), Object(nt.useEffect)(function () {
        if (r) {
          l(function () {
            return Object(pt.jsxs)(pt.Fragment, { children: [Object(pt.jsx)(jn, { data: n }), Object(pt.jsx)(hn, {})] });
          });
        }
      }, [r]), Object(pt.jsxs)(On, { children: [Object(pt.jsx)(Ye, {}), Object(pt.jsx)("div", { id: "test" }), r ? Object(pt.jsx)(pt.Fragment, { children: d }) : Object(pt.jsx)("h1", { children: "Loading..." }), Object(pt.jsx)(Ae, {})] });
    },
        wn = n.p + "static/media/About_s1_i1@2x.7b46c320.png",
        kn = n.p + "static/media/About_s1_i2@2x.1a8d654f.png",
        Cn = n.p + "static/media/About_s2_i1@2x.8a00d645.png",
        Sn = n.p + "static/media/About_s2_i2@2x.09c846fa.png",
        yn = xt.a.div(H || (H = Object(bt.a)(["\n\twidth: 1600px;\n"]))),
        En = xt.a.div(P || (P = Object(bt.a)(["\n\theight: ", ";\n\n\twidth: 50%;\n\tmargin-right: 50px;\n\tfloat: left;\n\tclip-path: polygon(100% 0, 70% 50%, 100% 100%, 0 100%, 0 0);\n\tshape-outside: polygon(100% 0, 70% 50%, 100% 100%, 0 100%, 0 0);\n\toverflow: hidden;\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: space-between;\n"])), function (t) {
      return t.height + "px";
    }),
        zn = xt.a.div(T || (T = Object(bt.a)(["\n\theight: ", ";\n\n\twidth: 50%;\n\tfloat: right;\n\tmargin-left: 50px;\n\tclip-path: polygon(100% 0, 100% 100%, 0 100%, 30% 50%, 0 0);\n\tshape-outside: polygon(100% 0, 100% 100%, 0 100%, 30% 50%, 0 0);\n\toverflow: hidden;\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: space-between;\n"])), function (t) {
      return t.height + "px";
    }),
        Bn = xt.a.div(Y || (Y = Object(bt.a)(['\n\theight: 49%;\n\tbackground: url("', '") center no-repeat;\n\tbackground-size: 100% 100%;\n'])), function (t) {
      return t.background;
    }),
        Nn = xt.a.div(L || (L = Object(bt.a)(["\n\theight: ", ";\n\n\twidth: 50%;\n\tmargin-right: 50px;\n\tfloat: left;\n\tclip-path: polygon(0 0, 100% 0, 70% 100%, 0% 100%);\n\tshape-outside: polygon(0 0, 100% 0, 70% 100%, 0% 100%);\n\n\toverflow: hidden;\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: space-between;\n\tbackground: url('", "') no-repeat;\n\tbackground-size: cover;\n"])), function (t) {
      return t.height + "px";
    }, function (t) {
      return t.background;
    }),
        In = xt.a.div(G || (G = Object(bt.a)(["\n\theight: ", ";\n\n\twidth: 50%;\n\tmargin-left: 50px;\n\tfloat: right;\n\tclip-path: polygon(0 0, 100% 0, 100% 100%, 30% 100%);\n\tshape-outside: polygon(0 0, 100% 0, 100% 100%, 30% 100%);\n\n\toverflow: hidden;\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: space-between;\n\tbackground: url('", "') no-repeat;\n\tbackground-size: cover;\n"])), function (t) {
      return t.height + "px";
    }, function (t) {
      return t.background;
    }),
        qn = xt.a.div(Z || (Z = Object(bt.a)(["\n\tbackground: #009245;\n\topacity: .45;\n\theight: 100%;\n\twidth: 100%;\n"]))),
        Vn = xt.a.div(X || (X = Object(bt.a)(["\n\tposition: relative;\n\tright: 0;\n"]))),
        Qn = xt.a.div(_ || (_ = Object(bt.a)(["\n\tposition: relative;\n\tleft: 0;\n\twidth: 100%;\n"]))),
        Jn = xt.a.div($ || ($ = Object(bt.a)(["\n\tpadding-right: 40px;\n\tborder-right: 5px solid ", ";\n\tmargin-bottom: 20px;\n\n\tdisplay: flex;\n\tjustify-content: flex-end;\n"])), kt),
        Rn = xt.a.div(tt || (tt = Object(bt.a)(["\n\tpadding-left: 40px;\n\tborder-left: 5px solid ", ";\n\tmargin-bottom: 20px;\n\n\tdisplay: flex;\n"])), kt),
        Un = xt.a.div(et || (et = Object(bt.a)(["\n\tfont-size: ", ";\n\tcolor: ", ";\n\twhite-space: pre-line;\n"])), Vt, St),
        Fn = function Fn(t) {
      var e = t.text,
          n = t.title,
          a = void 0 === n ? "Fill" : n,
          c = t.image1,
          i = t.image2,
          r = Object(nt.useState)(0),
          o = Object(ut.a)(r, 2),
          s = o[0],
          j = o[1],
          d = Object(nt.useRef)(null);return Object(nt.useEffect)(function () {
        j(1.8 * d.current.clientHeight);
      }, [e]), Object(pt.jsx)(Ot, { children: Object(pt.jsxs)(yn, { children: [Object(pt.jsxs)(En, { height: s, children: [Object(pt.jsx)(Bn, { background: c }), Object(pt.jsx)(Bn, { background: i })] }), Object(pt.jsxs)(Vn, { children: [Object(pt.jsx)(Jn, { children: Object(pt.jsx)(Ut, { text: a }) }), Object(pt.jsx)(Un, { ref: d, children: e })] })] }) });
    },
        Mn = function Mn(t) {
      var e = t.text,
          n = t.title,
          a = void 0 === n ? "Fill" : n,
          c = t.image1,
          i = t.image2,
          r = Object(nt.useState)(0),
          o = Object(ut.a)(r, 2),
          s = o[0],
          j = o[1],
          d = Object(nt.useRef)(null);return Object(nt.useEffect)(function () {
        j(1.8 * d.current.clientHeight);
      }, [e]), Object(pt.jsxs)(Ot, { children: [Object(pt.jsx)("div", { style: { marginTop: "30px" } }), Object(pt.jsxs)(yn, { children: [Object(pt.jsxs)(zn, { height: s, children: [Object(pt.jsx)(Bn, { background: c }), Object(pt.jsx)(Bn, { background: i })] }), Object(pt.jsxs)(Qn, { children: [Object(pt.jsx)(Rn, { children: Object(pt.jsx)(Ut, { text: a }) }), Object(pt.jsx)(Un, { ref: d, children: e })] })] })] });
    },
        Wn = function Wn(t) {
      var e = t.text,
          n = t.title,
          a = void 0 === n ? "" : n,
          c = t.image,
          i = Object(nt.useState)(0),
          r = Object(ut.a)(i, 2),
          o = r[0],
          s = r[1],
          j = Object(nt.useRef)(null);return Object(nt.useEffect)(function () {
        s(1.65 * j.current.clientHeight);
      }, [e]), Object(pt.jsx)(Ot, { children: Object(pt.jsxs)(yn, { children: [Object(pt.jsx)(Nn, { height: o, background: c, children: Object(pt.jsx)(qn, {}) }), Object(pt.jsxs)(Vn, { children: [Object(pt.jsx)(Jn, { children: Object(pt.jsx)(Ut, { text: a }) }), Object(pt.jsx)(Un, { ref: j, children: e })] })] }) });
    },
        Kn = function Kn(t) {
      var e = t.text,
          n = t.title,
          a = void 0 === n ? "" : n,
          c = t.image,
          i = Object(nt.useState)(0),
          r = Object(ut.a)(i, 2),
          o = r[0],
          s = r[1],
          j = Object(nt.useRef)(null);return Object(nt.useEffect)(function () {
        s(1.8 * j.current.clientHeight);
      }, [e]), Object(pt.jsx)(Ot, { children: Object(pt.jsxs)(yn, { children: [Object(pt.jsx)(In, { height: o, background: c, children: Object(pt.jsx)(qn, {}) }), Object(pt.jsxs)(Qn, { children: [Object(pt.jsx)(Rn, { children: Object(pt.jsx)(Ut, { text: a }) }), Object(pt.jsx)(Un, { ref: j, children: e })] })] }) });
    },
        Dn = function Dn() {
      var t = Object(nt.useState)({}),
          e = Object(ut.a)(t, 2),
          n = (e[0], e[1]),
          a = Object(nt.useState)(!1),
          c = Object(ut.a)(a, 2),
          i = (c[0], c[1]),
          r = Object(nt.useState)(function () {
        return Object(pt.jsx)("h1", { children: "Working" });
      }),
          o = Object(ut.a)(r, 2),
          s = (o[0], o[1], Object(nt.useState)("This is working text")),
          j = Object(ut.a)(s, 2),
          d = j[0],
          l = j[1],
          u = Object(nt.useState)("Title 1"),
          b = Object(ut.a)(u, 2),
          x = b[0],
          h = b[1],
          p = Object(nt.useState)("Title 2"),
          g = Object(ut.a)(p, 2),
          O = g[0],
          f = g[1],
          A = Object(nt.useState)("This is working text"),
          m = Object(ut.a)(A, 2),
          v = m[0],
          w = m[1];return Object(nt.useEffect)(function () {
        (function () {
          var t = Object(lt.a)(jt.a.mark(function t() {
            var e;return jt.a.wrap(function (t) {
              for (;;) {
                switch (t.prev = t.next) {case 0:
                    return t.next = 2, mn("About");case 2:
                    e = t.sent, n(Object(dt.a)({}, e)), l(e.sections[0].text[0]), w(e.sections[1].text[0]), h(e.sections[0].sectionName), f(e.sections[1].sectionName), i(!0);case 9:case "end":
                    return t.stop();}
              }
            }, t);
          }));return function () {
            return t.apply(this, arguments);
          };
        })()();
      }, []), Object(pt.jsxs)(On, { children: [Object(pt.jsx)(Le, {}), Object(pt.jsx)(Fn, { text: d, title: x, image1: wn, image2: kn }), Object(pt.jsx)(Mn, { text: v, title: O, image1: Cn, image2: Sn }), Object(pt.jsx)(hn, {}), Object(pt.jsx)(Ae, {})] });
    },
        Hn = function Hn() {
      return Object(pt.jsx)(pt.Fragment, { children: Object(pt.jsx)(Ge, {}) });
    },
        Pn = n.p + "static/media/graduation.a56fab56.jpg",
        Tn = n.p + "static/media/graduation2.66fa46df.jpg",
        Yn = n.p + "static/media/benefits.672de79b.jpg",
        Ln = function Ln() {
      var t = Object(nt.useState)({}),
          e = Object(ut.a)(t, 2),
          n = e[0],
          a = e[1],
          c = Object(nt.useState)(!1),
          i = Object(ut.a)(c, 2),
          r = i[0],
          o = i[1],
          s = Object(nt.useState)(function () {
        return Object(pt.jsx)("h1", { children: "Working" });
      }),
          j = Object(ut.a)(s, 2);j[0], j[1];return Object(nt.useEffect)(function () {
        (function () {
          var t = Object(lt.a)(jt.a.mark(function t() {
            var e;return jt.a.wrap(function (t) {
              for (;;) {
                switch (t.prev = t.next) {case 0:
                    return t.next = 2, mn("DualDegree");case 2:
                    e = t.sent, a(Object(dt.a)({}, e)), o(!0);case 5:case "end":
                    return t.stop();}
              }
            }, t);
          }));return function () {
            return t.apply(this, arguments);
          };
        })()();
      }, []), Object(pt.jsxs)(On, { children: [Object(pt.jsx)(Xe, {}), Object(pt.jsx)(Fn, { text: r ? n.sections[0].text[0] : "", title: r ? n.sections[0].sectionName : "", image1: wn, image2: kn }), Object(pt.jsx)(Kn, { text: r ? n.sections[1].text[0] : "", title: r ? n.sections[1].sectionName : "", image: Yn }), Object(pt.jsx)(Wn, { text: r ? n.sections[2].text[0] : "", title: r ? n.sections[2].sectionName : "", image: Pn }), Object(pt.jsx)(Kn, { text: r ? n.sections[3].text[0] : "", title: r ? n.sections[3].sectionName : "", image: Tn }), Object(pt.jsx)(Ae, {})] });
    },
        Gn = function Gn() {
      return Object(pt.jsx)(pt.Fragment, { children: Object(pt.jsx)(_e, {}) });
    },
        Zn = function Zn() {
      var t = Object(nt.useState)(function () {
        var t = localStorage.getItem("token");return JSON.parse(t);
      }()),
          e = Object(ut.a)(t, 2),
          n = e[0],
          a = e[1];return { setToken: function setToken(t) {
          localStorage.setItem("token", JSON.stringify(t)), a(JSON.parse(localStorage.token));
        }, clearToken: function clearToken() {
          localStorage.clear(), a(void 0);
        }, token: n };
    },
        Xn = n(34),
        _n = n(52),
        $n = n(181),
        ta = n(169),
        ea = n(182),
        na = n(175),
        aa = n(176),
        ca = n(135),
        ia = n(178),
        ra = n(179),
        oa = n(173),
        sa = "/page",
        ja = function ja(t, e) {
      return "" === t || void 0 === t || null === t ? { isValid: !1, info: "Enter a valid ".concat(e) } : { isValid: !0, info: "" };
    },
        da = function () {
      var t = Object(lt.a)(jt.a.mark(function t() {
        var e;return jt.a.wrap(function (t) {
          for (;;) {
            switch (t.prev = t.next) {case 0:
                return t.prev = 0, t.next = 3, An()({ method: "post", url: "".concat(sa, "/getAllPage"), data: {} });case 3:
                return e = t.sent, t.abrupt("return", e.data);case 7:
                t.prev = 7, t.t0 = t.catch(0), console.log(t.t0);case 10:case "end":
                return t.stop();}
          }
        }, t, null, [[0, 7]]);
      }));return function () {
        return t.apply(this, arguments);
      };
    }(),
        la = function () {
      var t = Object(lt.a)(jt.a.mark(function t(e) {
        var n, a;return jt.a.wrap(function (t) {
          for (;;) {
            switch (t.prev = t.next) {case 0:
                if ((n = ja(e, "Page Name")).isValid) {
                  t.next = 3;break;
                }return t.abrupt("return", n.info);case 3:
                return t.prev = 3, t.next = 6, An()({ method: "post", url: "".concat(sa, "/addPage"), data: { pageName: e } });case 6:
                return a = t.sent, t.abrupt("return", a.data);case 10:
                t.prev = 10, t.t0 = t.catch(3), console.log(t.t0);case 13:case "end":
                return t.stop();}
          }
        }, t, null, [[3, 10]]);
      }));return function (e) {
        return t.apply(this, arguments);
      };
    }(),
        ua = function () {
      var t = Object(lt.a)(jt.a.mark(function t(e) {
        var n;return jt.a.wrap(function (t) {
          for (;;) {
            switch (t.prev = t.next) {case 0:
                return t.prev = 0, t.next = 3, An()({ method: "post", url: "".concat(sa, "/removePage"), data: { pageId: e } });case 3:
                return n = t.sent, t.abrupt("return", n.data);case 7:
                t.prev = 7, t.t0 = t.catch(0), console.log(t.t0);case 10:case "end":
                return t.stop();}
          }
        }, t, null, [[0, 7]]);
      }));return function (e) {
        return t.apply(this, arguments);
      };
    }(),
        ba = function () {
      var t = Object(lt.a)(jt.a.mark(function t(e, n) {
        var a,
            c,
            i,
            r,
            o = arguments;return jt.a.wrap(function (t) {
          for (;;) {
            switch (t.prev = t.next) {case 0:
                if (a = o.length > 2 && void 0 !== o[2] ? o[2] : "", c = o.length > 3 && void 0 !== o[3] ? o[3] : [], (i = ja(n, "Section Name")).isValid) {
                  t.next = 5;break;
                }return t.abrupt("return", i.info);case 5:
                return t.prev = 5, t.next = 8, An()({ method: "post", url: "".concat(sa, "/addSection"), data: { pageId: e, sectionName: n, marker: a, text: c } });case 8:
                return r = t.sent, t.abrupt("return", r.data);case 12:
                t.prev = 12, t.t0 = t.catch(5), console.log(t.t0);case 15:case "end":
                return t.stop();}
          }
        }, t, null, [[5, 12]]);
      }));return function (e, n) {
        return t.apply(this, arguments);
      };
    }(),
        xa = function () {
      var t = Object(lt.a)(jt.a.mark(function t(e, n, a, c, i) {
        var r;return jt.a.wrap(function (t) {
          for (;;) {
            switch (t.prev = t.next) {case 0:
                return t.prev = 0, t.next = 3, An()({ method: "post", url: "".concat(sa, "/editSection"), data: { pageId: e, sectionId: n, sectionName: a, marker: c, text: i } });case 3:
                return r = t.sent, t.abrupt("return", r.data);case 7:
                t.prev = 7, t.t0 = t.catch(0), console.log(t.t0);case 10:case "end":
                return t.stop();}
          }
        }, t, null, [[0, 7]]);
      }));return function (e, n, a, c, i) {
        return t.apply(this, arguments);
      };
    }(),
        ha = function () {
      var t = Object(lt.a)(jt.a.mark(function t(e, n) {
        var a;return jt.a.wrap(function (t) {
          for (;;) {
            switch (t.prev = t.next) {case 0:
                return t.prev = 0, t.next = 3, An()({ method: "post", url: "".concat(sa, "/removeSection"), data: { pageId: e, sectionId: n } });case 3:
                return a = t.sent, t.abrupt("return", a.data);case 7:
                t.prev = 7, t.t0 = t.catch(0), console.log(t.t0);case 10:case "end":
                return t.stop();}
          }
        }, t, null, [[0, 7]]);
      }));return function (e, n) {
        return t.apply(this, arguments);
      };
    }(),
        pa = Object(ta.a)({ container: Object(_n.a)({ padding: ".6rem", width: "120%", display: "flex", flexDirection: "column" }, "width", "30rem"), marginVertical: { marginTop: "0.6rem", marginBottom: "0.6rem" }, marginHorizontal: { marginLeft: "0.6rem", marginRight: "0.6rem" }, marginRight: { marginRight: "0.6rem" } }),
        ga = function ga(t) {
      var e = t.addToAllPageData,
          n = t.isDisabled,
          a = pa(),
          c = Object(nt.useState)(!1),
          i = Object(ut.a)(c, 2),
          r = i[0],
          o = i[1],
          s = Object(nt.useState)(""),
          j = Object(ut.a)(s, 2),
          d = j[0],
          l = j[1],
          u = function () {
        var t = Object(lt.a)(jt.a.mark(function t() {
          var n;return jt.a.wrap(function (t) {
            for (;;) {
              switch (t.prev = t.next) {case 0:
                  if ("" !== d) {
                    t.next = 3;break;
                  }return alert("Cannot add empty page name"), t.abrupt("return");case 3:
                  return t.next = 5, la(d);case 5:
                  n = t.sent, e(n), o(!1), l("");case 9:case "end":
                  return t.stop();}
            }
          }, t);
        }));return function () {
          return t.apply(this, arguments);
        };
      }();return Object(pt.jsxs)(pt.Fragment, { children: [Object(pt.jsx)(ra.a, { onClick: function onClick() {
            o(!0);
          }, variant: "contained", disabled: n, children: "AddPage" }), Object(pt.jsxs)(ea.a, { open: r, onClose: function onClose() {
            return o(!1);
          }, children: [Object(pt.jsx)(na.a, { className: a.marginVertical, children: "Insert Page name" }), Object(pt.jsx)(aa.a, { children: Object(pt.jsxs)("div", { className: a.marginVertical, children: [Object(pt.jsx)(ia.a, { value: d, onChange: function onChange(t) {
                  return l(t.target.value);
                }, placeholder: "Page name" }), Object(pt.jsx)(ra.a, { onClick: u, variant: "contained", children: "Submit" })] }) })] })] });
    },
        Oa = function Oa(t) {
      var e = t.page,
          n = t.isDisabled,
          a = pa(),
          c = Object(nt.useState)(e.sections),
          i = Object(ut.a)(c, 2),
          r = i[0],
          o = i[1],
          s = Object(nt.useState)(!1),
          j = Object(ut.a)(s, 2),
          d = j[0],
          l = j[1],
          u = Object(nt.useState)(""),
          b = Object(ut.a)(u, 2),
          x = b[0],
          h = b[1],
          p = function () {
        var t = Object(lt.a)(jt.a.mark(function t() {
          var n;return jt.a.wrap(function (t) {
            for (;;) {
              switch (t.prev = t.next) {case 0:
                  if ("" !== x) {
                    t.next = 3;break;
                  }return alert("Add a section name"), t.abrupt("return");case 3:
                  return t.next = 5, ba(e._id, x);case 5:
                  if (void 0 === (n = t.sent).error) {
                    t.next = 11;break;
                  }return alert("An error has occured. Pleas try again"), h(""), l(!1), t.abrupt("return");case 11:
                  ({ sectionName: x, sectionText: "" }), o(Object(Xn.a)(n.sections)), l(!1), h("");case 15:case "end":
                  return t.stop();}
            }
          }, t);
        }));return function () {
          return t.apply(this, arguments);
        };
      }(),
          g = function () {
        var t = Object(lt.a)(jt.a.mark(function t(n, a, c, i) {
          return jt.a.wrap(function (t) {
            for (;;) {
              switch (t.prev = t.next) {case 0:
                  return t.next = 2, xa(e._id, n, a, c, i);case 2:
                  if (void 0 !== t.sent.error) {
                    t.next = 5;break;
                  }return t.abrupt("return", !0);case 5:case "end":
                  return t.stop();}
            }
          }, t);
        }));return function (e, n, a, c) {
          return t.apply(this, arguments);
        };
      }(),
          O = function () {
        var t = Object(lt.a)(jt.a.mark(function t(n) {
          var a;return jt.a.wrap(function (t) {
            for (;;) {
              switch (t.prev = t.next) {case 0:
                  return t.next = 2, ha(e._id, n);case 2:
                  if (void 0 === (a = t.sent).error) {
                    t.next = 6;break;
                  }return alert("An error has occured. Pleas try again"), t.abrupt("return");case 6:
                  o(Object(Xn.a)(a.sections));case 7:case "end":
                  return t.stop();}
            }
          }, t);
        }));return function (e) {
          return t.apply(this, arguments);
        };
      }(),
          f = Object(nt.useMemo)(function () {
        return r.map(function (t, e) {
          return Object(pt.jsx)("div", { className: a.marginVertical, children: Object(pt.jsx)(fa, { data: t, saveEdits: g, deleteSection: O, isDisabled: n }) }, t.sectionName);
        });
      }, [r]);return Object(pt.jsxs)(pt.Fragment, { children: [Object(pt.jsxs)(ca.a, { children: ["Page Name: ", e.pageName] }), f, Object(pt.jsx)(ra.a, { onClick: function onClick() {
            return l(!0);
          }, variant: "contained", size: "small", disabled: n, children: "Add New Section " }), l ? Object(pt.jsxs)(ea.a, { open: d, onClose: function onClose() {
            return l(!1);
          }, children: [Object(pt.jsx)(ia.a, { value: x, onChange: function onChange(t) {
              return h(t.target.value);
            }, placeholder: "Section Name" }), Object(pt.jsx)(ra.a, { onClick: p, children: "Add Section" })] }) : ""] });
    },
        fa = function fa(t) {
      var e = t.data,
          n = t.saveEdits,
          a = t.deleteSection,
          c = t.isDisabled,
          i = pa(),
          r = Object(nt.useState)(!1),
          o = Object(ut.a)(r, 2),
          s = o[0],
          j = o[1],
          d = Object(nt.useState)(!1),
          l = Object(ut.a)(d, 2),
          u = l[0],
          b = l[1],
          x = Object(nt.useState)(e.sectionName),
          h = Object(ut.a)(x, 2),
          p = h[0],
          g = h[1],
          O = Object(nt.useState)(e.marker),
          f = Object(ut.a)(O, 2),
          A = f[0],
          m = f[1],
          v = Object(nt.useState)(e.text),
          w = Object(ut.a)(v, 2),
          k = w[0],
          C = w[1],
          S = Object(nt.useState)([]),
          y = Object(ut.a)(S, 2),
          E = y[0],
          z = y[1],
          B = Object(nt.useState)(!1),
          N = Object(ut.a)(B, 2),
          I = N[0],
          q = N[1];Object(nt.useEffect)(function () {
        var t = [];k.forEach(function () {
          t = [].concat(Object(Xn.a)(t), [Object($n.a)()]);
        }), z(Object(Xn.a)(t));
      }, [k.length]);var V = function () {
        var t = Object(lt.a)(jt.a.mark(function t() {
          return jt.a.wrap(function (t) {
            for (;;) {
              switch (t.prev = t.next) {case 0:
                  return t.next = 2, n(e._id, p, A, k);case 2:
                  !0 === t.sent && j(!1), q(!1);case 5:case "end":
                  return t.stop();}
            }
          }, t);
        }));return function () {
          return t.apply(this, arguments);
        };
      }(),
          Q = (function (t) {
        var e,
            n = t[0];void 0 === n || n.length <= 40 || (e = n = n.split(40), n.length > 0 && (e = "".concat(e, "...")));
      }(e.text), function (t) {
        if (t) return b(!1), void j(!1);b(!1);
      }),
          J = k.map(function (t, e) {
        return Object(pt.jsxs)("div", { children: [Object(pt.jsx)(ia.a, { value: k[e], onChange: function onChange(t) {
              return function (t, e) {
                var n = k;n[e] = t.target.value, C(Object(Xn.a)(n)), q(!0);
              }(t, e);
            }, label: "Text", className: i.marginVertical, multiline: !0, rows: 5, rowMax: 1 / 0, cols: 12, fullWidth: !0 }), Object(pt.jsx)(ra.a, { onClick: function onClick() {
              return function (t) {
                C(function (e) {
                  return Object(Xn.a)(e.filter(function (e, n) {
                    return t !== n;
                  }));
                }), z(function (e) {
                  return Object(Xn.a)(e.filter(function (e, n) {
                    return t !== n;
                  }));
                }), q(!0);
              }(e);
            }, disabled: c, children: "Remove" })] }, E[e]);
      });return Object(pt.jsxs)(pt.Fragment, { children: [Object(pt.jsxs)(ca.a, { variant: "h6", children: ["Section Name: ", e.sectionName] }), Object(pt.jsx)(ra.a, { onClick: function onClick() {
            j(!0);
          }, className: i.marginRight, variant: "contained", children: "Edit Section" }), Object(pt.jsx)(ra.a, { onClick: function onClick() {
            a(e._id);
          }, className: i.marginRight, variant: "contained", disabled: c, children: "Remove Section" }), s ? Object(pt.jsx)(ea.a, { open: s, onClose: function onClose() {
            !0 !== I ? j(!1) : b(!0);
          }, children: Object(pt.jsxs)("div", { className: i.container, children: [Object(pt.jsx)(ia.a, { value: p, onChange: function onChange(t) {
                g(t.target.value), q(!0);
              }, label: "Section Name", className: i.marginVertical }), Object(pt.jsx)(ia.a, { value: A, onChange: function onChange(t) {
                m(t.target.value), q(!0);
              }, label: "Marker", className: i.marginVertical }), J, Object(pt.jsx)(ra.a, { onClick: function onClick() {
                C(function (t) {
                  return [].concat(Object(Xn.a)(t), [""]);
                }), q(!0);
              }, children: "Add Text" }), Object(pt.jsx)(ra.a, { onClick: V, children: "Save" }), u ? Object(pt.jsxs)(ea.a, { open: u, onClose: function onClose() {
                b(!1);
              }, children: [Object(pt.jsx)(ca.a, { variant: "body1", children: "You haven't saved your data yet. Are you sure you want to exit." }), Object(pt.jsx)(ra.a, { variant: "contained", onClick: function onClick() {
                  return Q(!0);
                }, size: "small", children: "Yes" }), Object(pt.jsx)(ra.a, { variant: "contained", onClick: function onClick() {
                  return Q(!1);
                }, size: "small", children: "No" })] }) : ""] }) }) : ""] });
    },
        Aa = function Aa(t) {
      var e = t.isSuperAdmin,
          n = pa(),
          a = Object(nt.useState)([]),
          c = Object(ut.a)(a, 2),
          i = c[0],
          r = c[1],
          o = Object(nt.useState)(!0),
          s = Object(ut.a)(o, 2),
          j = s[0],
          d = s[1],
          l = Object(nt.useState)({}),
          u = Object(ut.a)(l, 2),
          b = u[0],
          x = u[1],
          h = Object(nt.useMemo)(function () {
        return !e;
      }, []);Object(nt.useEffect)(function () {
        (function () {
          var t = Object(lt.a)(jt.a.mark(function t() {
            var e;return jt.a.wrap(function (t) {
              for (;;) {
                switch (t.prev = t.next) {case 0:
                    return t.next = 2, da();case 2:
                    e = t.sent, r(e);case 4:case "end":
                    return t.stop();}
              }
            }, t);
          }));return function () {
            return t.apply(this, arguments);
          };
        })()();
      }, []);var p = function () {
        var t = Object(lt.a)(jt.a.mark(function t(e, n) {
          var a;return jt.a.wrap(function (t) {
            for (;;) {
              switch (t.prev = t.next) {case 0:
                  return t.next = 2, ua(e._id);case 2:
                  if (void 0 === (a = t.sent).error) {
                    t.next = 6;break;
                  }return alert("An error has occured"), t.abrupt("return");case 6:
                  0 !== a.nModified && r(function (t) {
                    return Object(Xn.a)(i.filter(function (t, e) {
                      return n !== e;
                    }));
                  });case 7:case "end":
                  return t.stop();}
            }
          }, t);
        }));return function (e, n) {
          return t.apply(this, arguments);
        };
      }(),
          g = Object(nt.useMemo)(function () {
        return i.map(function (t, e) {
          return Object(pt.jsxs)("div", { className: n.marginVertical, children: [Object(pt.jsx)(ca.a, { variant: "h5", children: t.pageName }), Object(pt.jsx)(ra.a, { variant: "contained", onClick: function onClick() {
                return e = t, x(Object(dt.a)({}, e)), void d(!1);var e;
              }, className: n.marginRight, size: "small", children: "Page data" }), Object(pt.jsx)(ra.a, { variant: "contained", onClick: function onClick() {
                return p(t, e);
              }, className: n.marginRight, size: "small", disabled: h, children: "Remove page" })] }, t._id);
        });
      }, [i]);return Object(pt.jsx)(oa.a, { children: j ? Object(pt.jsxs)(pt.Fragment, { children: [Object(pt.jsx)("h1", { children: "Dashboard" }), Object(pt.jsx)(ga, { addToAllPageData: function addToAllPageData(t) {
              r(function (e) {
                return [].concat(Object(Xn.a)(e), [t]);
              });
            }, isDisabled: h }), g] }) : Object(pt.jsxs)("div", { children: [Object(pt.jsx)(ra.a, { onClick: function onClick() {
              d(!0);
            }, variant: "contained", size: "small", children: "Go Back" }), Object(pt.jsx)(Oa, { page: b, isDisabled: h })] }) });
    },
        ma = Object(ta.a)({ container: Object(_n.a)({ padding: ".6rem", width: "120%", display: "flex", flexDirection: "column", gap: "10px" }, "width", "30rem") }),
        va = function va(t) {
      var e = t.authenticateUser,
          n = ma(),
          a = Object(nt.useState)(""),
          c = Object(ut.a)(a, 2),
          i = c[0],
          r = c[1],
          o = Object(nt.useState)(""),
          s = Object(ut.a)(o, 2),
          j = s[0],
          d = s[1];return Object(pt.jsxs)("div", { className: n.container, children: [Object(pt.jsx)(ca.a, { variant: "h6", children: "Login" }), Object(pt.jsx)(ia.a, { variant: "outlined", label: "username", value: i, onChange: function onChange(t) {
            return r(t.target.value);
          } }), Object(pt.jsx)(ia.a, { variant: "outlined", type: "password", label: "password", value: j, onChange: function onChange(t) {
            return d(t.target.value);
          } }), Object(pt.jsx)(ra.a, { variant: "outlined", onClick: function onClick() {
            e(i, j), r(""), d("");
          }, children: "Login" })] });
    },
        wa = [{ username: "admin", password: "admin" }, { username: "superadmin", password: "superadmin" }];var ka = function ka() {
      var t = Zn(),
          e = t.token,
          n = t.setToken,
          a = t.clearToken,
          c = Object(nt.useState)(!1),
          i = Object(ut.a)(c, 2);return i[0], i[1], e ? Object(pt.jsxs)(pt.Fragment, { children: [Object(pt.jsx)(Aa, { isSuperAdmin: "superadmin" === e.value }), Object(pt.jsxs)("div", { style: { position: "absolute", top: "2%", right: "2%" }, children: [Object(pt.jsx)("a", { href: "index.html", style: { marginRight: "15px", textDecoration: "none", color: "black" }, children: Object(pt.jsx)(ra.a, { variant: "contained", children: "To Site" }) }), Object(pt.jsx)(ra.a, { variant: "contained", onClick: function onClick() {
              a();
            }, children: "Logout" })] })] }) : Object(pt.jsxs)(pt.Fragment, { children: [Object(pt.jsx)(va, { authenticateUser: function authenticateUser(t, e) {
            wa.map(function (a) {
              if (a.username === t && a.password === e) return "superadmin" === a.username ? void n({ value: "superadmin" }) : void n({ value: "admin" });
            });
          } }), Object(pt.jsx)("a", { href: "index.html", children: Object(pt.jsx)(ra.a, { variant: "contained", style: { position: "absolute", top: "2%", right: "2%" }, children: "To Site" }) })] });
    };var Ca = function Ca() {
      return Object(pt.jsx)(rt.a, { children: Object(pt.jsxs)(ot.c, { children: [Object(pt.jsx)(ot.a, { path: "/About", component: Dn }), Object(pt.jsx)(ot.a, { path: "/Programs", component: vn }), Object(pt.jsx)(ot.a, { path: "/Contact", component: Hn }), Object(pt.jsx)(ot.a, { path: "/DualDegree", component: Ln }), Object(pt.jsx)(ot.a, { path: "/ComingSoon", component: Gn }), Object(pt.jsx)(ot.a, { path: "/Dashboard", component: ka }), Object(pt.jsx)(ot.a, { path: "/", component: vn })] }) });
    };it.a.render(Object(pt.jsx)(at.a.StrictMode, { children: Object(pt.jsx)(Ca, {}) }), document.getElementById("root"));
  } }, [[134, 1, 2]]]);
//# sourceMappingURL=main.045ba09f.chunk.js.map