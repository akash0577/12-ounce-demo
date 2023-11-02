google.maps.__gjsload__("stats", function (_) {
  var eNa = function (a, b) {
      return new _.yxa(a, b);
    },
    fNa = function (a, b, c, d) {
      const e = {};
      e.host =
        (document.location && document.location.host) || window.location.host;
      e.v = a.split(".")[1] || a;
      e.fv = a;
      e.r = Math.round(1 / b);
      c && (e.client = c);
      d && (e.key = d);
      return e;
    },
    hNa = function (a) {
      var b = document;
      this.token = gNa;
      this.h = a + "/maps/gen_204";
      this.g = b;
    },
    kNa = function (a, b, c) {
      c = c || {};
      const d = Date.now().toString(36);
      c.src = "apiv3";
      c.token = a.token;
      c.ts = d.substr(d.length - 6);
      b.cad = iNa(c);
      b = jNa(b, "=", "&");
      b = a.h + "?target=api&" + b;
      new _.be(a.g).createElement("IMG").src = b;
      (a = _.ia.__gm_captureCSI) && a(b);
    },
    jNa = function (a, b, c) {
      const d = [];
      _.Fm(a, function (e, f) {
        d.push(f + b + e);
      });
      return d.join(c);
    },
    iNa = function (a) {
      const b = {};
      _.Fm(a, function (c, d) {
        b[encodeURIComponent(d)] = encodeURIComponent(c).replace(/%7C/g, "|");
      });
      return jNa(b, ":", ",");
    },
    mNa = function (a) {
      if (a instanceof BM || a instanceof lNa || a instanceof CM) return a;
      if ("function" == typeof a.next) return new BM(() => a);
      if ("function" == typeof a[Symbol.iterator])
        return new BM(() => a[Symbol.iterator]());
      if ("function" == typeof a.cm) return new BM(() => a.cm());
      throw Error("Not an iterator or iterable.");
    },
    DM = function (a, b) {
      this.h = {};
      this.g = [];
      this.i = this.size = 0;
      var c = arguments.length;
      if (1 < c) {
        if (c % 2) throw Error("Uneven number of arguments");
        for (var d = 0; d < c; d += 2) this.set(arguments[d], arguments[d + 1]);
      } else if (a)
        if (a instanceof DM)
          for (c = a.Ii(), d = 0; d < c.length; d++)
            this.set(c[d], a.get(c[d]));
        else for (d in a) this.set(d, a[d]);
    },
    nNa = function (a, b) {
      return a === b;
    },
    FM = function (a) {
      if (a.size != a.g.length) {
        for (var b = 0, c = 0; b < a.g.length; ) {
          var d = a.g[b];
          EM(a.h, d) && (a.g[c++] = d);
          b++;
        }
        a.g.length = c;
      }
      if (a.size != a.g.length) {
        var e = {};
        for (c = b = 0; b < a.g.length; )
          (d = a.g[b]), EM(e, d) || ((a.g[c++] = d), (e[d] = 1)), b++;
        a.g.length = c;
      }
    },
    EM = function (a, b) {
      return Object.prototype.hasOwnProperty.call(a, b);
    },
    oNa = function (a, b, c, d, e) {
      this.o = a;
      this.s = b;
      this.m = c;
      this.i = d;
      this.l = e;
      this.g = new DM();
      this.C = Date.now();
    },
    GM = function () {
      this.h = _.Rf.i();
      this.i = _.Rf.h();
      if (_.Dj[35]) {
        var a = _.Rf.g();
        a = _.Pf(a.j, 12);
      } else a = _.xt;
      this.o = new hNa(a);
      this.l = _.Pf(_.Tf(_.Rf).j, 2);
      this.m = {};
      this.g = {};
      this.s = _.Sf(_.Rf.j, 1, 1);
    };
  var gNa = Math.round(1e15 * Math.random()).toString(36);
  var BM = class {
      constructor(a) {
        this.g = a;
      }
      cm() {
        return new lNa(this.g());
      }
      [Symbol.iterator]() {
        return new CM(this.g());
      }
      h() {
        return new CM(this.g());
      }
    },
    lNa = class extends _.ek {
      constructor(a) {
        super();
        this.g = a;
      }
      next() {
        return this.g.next();
      }
      [Symbol.iterator]() {
        return new CM(this.g);
      }
      h() {
        return new CM(this.g);
      }
    },
    CM = class extends BM {
      constructor(a) {
        super(() => a);
        this.i = a;
      }
      next() {
        return this.i.next();
      }
    };
  _.G = DM.prototype;
  _.G.Ke = function () {
    FM(this);
    for (var a = [], b = 0; b < this.g.length; b++) a.push(this.h[this.g[b]]);
    return a;
  };
  _.G.Ii = function () {
    FM(this);
    return this.g.concat();
  };
  _.G.has = function (a) {
    return EM(this.h, a);
  };
  _.G.equals = function (a, b) {
    if (this === a) return !0;
    if (this.size != a.size) return !1;
    b = b || nNa;
    FM(this);
    for (var c, d = 0; (c = this.g[d]); d++)
      if (!b(this.get(c), a.get(c))) return !1;
    return !0;
  };
  _.G.isEmpty = function () {
    return 0 == this.size;
  };
  _.G.clear = function () {
    this.h = {};
    this.i = this.size = this.g.length = 0;
  };
  _.G.remove = function (a) {
    return this.delete(a);
  };
  _.G.delete = function (a) {
    return EM(this.h, a)
      ? (delete this.h[a],
        --this.size,
        this.i++,
        this.g.length > 2 * this.size && FM(this),
        !0)
      : !1;
  };
  _.G.get = function (a, b) {
    return EM(this.h, a) ? this.h[a] : b;
  };
  _.G.set = function (a, b) {
    EM(this.h, a) || ((this.size += 1), this.g.push(a), this.i++);
    this.h[a] = b;
  };
  _.G.forEach = function (a, b) {
    for (var c = this.Ii(), d = 0; d < c.length; d++) {
      var e = c[d],
        f = this.get(e);
      a.call(b, f, e, this);
    }
  };
  _.G.clone = function () {
    return new DM(this);
  };
  _.G.keys = function () {
    return mNa(this.cm(!0)).h();
  };
  _.G.values = function () {
    return mNa(this.cm(!1)).h();
  };
  _.G.entries = function () {
    const a = this;
    return eNa(this.keys(), function (b) {
      return [b, a.get(b)];
    });
  };
  _.G.cm = function (a) {
    FM(this);
    var b = 0,
      c = this.i,
      d = this,
      e = new _.ek();
    e.next = function () {
      if (c != d.i)
        throw Error("The map has changed since the iterator was created");
      if (b >= d.g.length) return _.nm;
      var f = d.g[b++];
      return { value: a ? f : d.h[f], done: !1 };
    };
    return e;
  };
  oNa.prototype.h = function (a) {
    0 === this.g.size &&
      window.setTimeout(() => {
        const c = fNa(this.s, this.m, this.i, this.l);
        c.t = Date.now() - this.C;
        var d = this.g;
        const e = {};
        for (const f of d.keys()) e[f] = d.get(f);
        _.cd(c, e);
        this.g.clear();
        kNa(this.o, { ev: "api_maprft" }, c);
      }, 500);
    const b = this.g.get(a, 0) + 1;
    this.g.set(a, b);
  };
  var pNa = class {
    constructor(a, b, c, d, e) {
      this.C = a;
      this.D = b;
      this.s = c;
      this.m = d;
      this.o = e;
      this.i = {};
      this.g = [];
    }
    h(a) {
      this.i[a] ||
        ((this.i[a] = !0),
        this.g.push(a),
        2 > this.g.length && _.Jz(this, this.l, 500));
    }
    l() {
      const a = fNa(this.D, this.s, this.m, this.o);
      for (let b = 0, c; (c = this.g[b]); ++b) a[c] = "1";
      a.hybrid = +_.Lo();
      this.g.length = 0;
      kNa(this.C, { ev: "api_mapft" }, a);
    }
  };
  GM.prototype.xx = function (a) {
    a = _.oh(a);
    let b = this.m[a];
    b ||
      ((b = new pNa(this.o, this.l, this.s, this.h, this.i)), (this.m[a] = b));
    return b;
  };
  GM.prototype.C = function (a) {
    a = _.oh(a);
    this.g[a] ||
      (this.g[a] = new oNa(this.o, this.l, _.Sf(_.Rf.j, 1, 1), this.h, this.i));
    return this.g[a];
  };
  _.Vg("stats", new GM());
});
