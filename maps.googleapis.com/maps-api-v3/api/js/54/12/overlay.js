google.maps.__gjsload__("overlay", function (_) {
  var Zx = function (a) {
      this.g = a;
    },
    Jpa = function () {},
    $x = function (a) {
      a.ku = a.ku || new Jpa();
      return a.ku;
    },
    Kpa = function (a) {
      this.Ea = new _.qj(() => {
        const b = a.ku;
        if (a.getPanes()) {
          if (a.getProjection()) {
            if (!b.Pr && a.onAdd) a.onAdd();
            b.Pr = !0;
            a.draw();
          }
        } else {
          if (b.Pr)
            if (a.onRemove) a.onRemove();
            else a.remove();
          b.Pr = !1;
        }
      }, 0);
    },
    Lpa = function (a, b) {
      const c = $x(a);
      let d = c.Sq;
      d || (d = c.Sq = new Kpa(a));
      _.yb(c.Va || [], _.dh);
      var e = (c.sb = c.sb || new _.Wla());
      const f = b.__gm;
      e.bindTo("zoom", f);
      e.bindTo("offset", f);
      e.bindTo("center", f, "projectionCenterQ");
      e.bindTo("projection", b);
      e.bindTo("projectionTopLeft", f);
      e = c.xy = c.xy || new Zx(e);
      e.bindTo("zoom", f);
      e.bindTo("offset", f);
      e.bindTo("projection", b);
      e.bindTo("projectionTopLeft", f);
      a.bindTo("projection", e, "outProjection");
      a.bindTo("panes", f);
      e = () => _.rj(d.Ea);
      c.Va = [
        _.bh(a, "panes_changed", e),
        _.bh(f, "zoom_changed", e),
        _.bh(f, "offset_changed", e),
        _.bh(b, "projection_changed", e),
        _.bh(f, "projectioncenterq_changed", e),
      ];
      _.rj(d.Ea);
      b instanceof _.yh
        ? (_.hi(b, "Ox"), _.fi(b, 148440))
        : b instanceof _.Di && (_.hi(b, "Oxs"), _.fi(b, 181451));
    },
    Qpa = function (a) {
      if (a) {
        var b = a.getMap();
        if (Mpa(a) !== b && b && b instanceof _.yh) {
          const c = b.__gm;
          c.overlayLayer
            ? (a.__gmop = new Npa(b, a, c.overlayLayer))
            : c.vb.then(({ fa: d }) => {
                const e = new Opa(b, d);
                d.Qb(e);
                c.overlayLayer = e;
                Ppa(a);
                Qpa(a);
              });
        }
      }
    },
    Ppa = function (a) {
      if (a) {
        var b = a.__gmop;
        b &&
          ((a.__gmop = null),
          b.g.unbindAll(),
          b.g.set("panes", null),
          b.g.set("projection", null),
          b.i.df(b),
          b.h && ((b.h = !1), b.g.onRemove ? b.g.onRemove() : b.g.remove()));
      }
    },
    Mpa = function (a) {
      return (a = a.__gmop) ? a.map : null;
    },
    Rpa = function (a, b) {
      a.g.get("projection") != b &&
        (a.g.bindTo("panes", a.map.__gm), a.g.set("projection", b));
    };
  _.ua(Zx, _.ph);
  Zx.prototype.changed = function (a) {
    "outProjection" != a &&
      ((a = !!(
        this.get("offset") &&
        this.get("projectionTopLeft") &&
        this.get("projection") &&
        _.bg(this.get("zoom"))
      )),
      a == !this.get("outProjection") &&
        this.set("outProjection", a ? this.g : null));
  };
  var ay = {};
  _.ua(Kpa, _.ph);
  ay.Ae = function (a) {
    if (a) {
      var b = a.getMap();
      ($x(a).gy || null) !== b && (b && Lpa(a, b), ($x(a).gy = b));
    }
  };
  ay.df = function (a) {
    const b = $x(a);
    var c = b.sb;
    c && c.unbindAll();
    (c = b.xy) && c.unbindAll();
    a.unbindAll();
    a.set("panes", null);
    a.set("projection", null);
    b.Va && _.yb(b.Va, _.dh);
    b.Va = null;
    b.Sq && (b.Sq.Ea.Sc(), (b.Sq = null));
    delete $x(a).gy;
  };
  var by = {},
    Npa = class {
      constructor(a, b, c) {
        this.map = a;
        this.g = b;
        this.i = c;
        this.h = !1;
        _.hi(this.map, "Ox");
        _.fi(this.map, 148440);
        c.Ae(this);
      }
      draw() {
        this.h || ((this.h = !0), this.g.onAdd && this.g.onAdd());
        this.g.draw && this.g.draw();
      }
    },
    Opa = class {
      constructor(a, b) {
        this.l = a;
        this.i = b;
        this.g = null;
        this.h = [];
      }
      dispose() {}
      jc(a, b, c, d, e, f, g, k) {
        const m = (this.g = this.g || new _.Ft(this.l, this.i, () => {}));
        m.jc(a, b, c, d, e, f, g, k);
        for (const q of this.h) Rpa(q, m), q.draw();
      }
      Ae(a) {
        this.h.push(a);
        this.g && Rpa(a, this.g);
        this.i.refresh();
      }
      df(a) {
        _.Ib(this.h, a);
      }
    };
  by.Ae = Qpa;
  by.df = Ppa;
  _.Vg("overlay", {
    rw: function (a) {
      if (a) {
        (0, ay.df)(a);
        (0, by.df)(a);
        var b = a.getMap();
        b && (b instanceof _.yh ? (0, by.Ae)(a) : (0, ay.Ae)(a));
      }
    },
    preventMapHitsFrom: (a) => {
      _.np(a, {
        Ue: ({ event: b }) => {
          _.fo(b.La);
        },
        zd: (b) => _.$o(b),
        Pj: (b) => _.ap(b),
        ve: (b) => _.ap(b),
        Rd: (b) => _.bp(b),
      }).Fl(!0);
    },
    preventMapHitsAndGesturesFrom: (a) => {
      a.addEventListener("click", _.$g);
      a.addEventListener("contextmenu", _.$g);
      a.addEventListener("dblclick", _.$g);
      a.addEventListener("mousedown", _.$g);
      a.addEventListener("mousemove", _.$g);
      a.addEventListener("MSPointerDown", _.$g);
      a.addEventListener("pointerdown", _.$g);
      a.addEventListener("touchstart", _.$g);
      a.addEventListener("wheel", _.$g);
    },
  });
});
