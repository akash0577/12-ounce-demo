google.maps.__gjsload__("search_impl", function (_) {
  var ilb = function (a) {
      a = a.Ob();
      hlb || (hlb = { G: "sssM", H: ["ss"] });
      return _.Ef(a, hlb, 1);
    },
    jlb = function (a, b) {
      _.I(a.j, 3, b);
    },
    nlb = function (a, b, c) {
      const d = _.KE(new klb());
      c.Nk = (0, _.pa)(d.load, d);
      c.clickable = 0 != a.get("clickable");
      _.KJa(c, _.CL(b));
      const e = [];
      e.push(_.bh(c, "click", (0, _.pa)(llb, null, a)));
      _.yb(["mouseover", "mouseout", "mousemove"], function (f) {
        e.push(_.bh(c, f, (0, _.pa)(mlb, null, a, f)));
      });
      e.push(
        _.bh(a, "clickable_changed", function () {
          a.g.clickable = 0 != a.get("clickable");
        })
      );
      a.h = e;
    },
    llb = function (a, b, c, d, e) {
      let f = null;
      if (e && ((f = { status: e.getStatus() }), 0 == e.getStatus())) {
        f.location = _.M(e.j, 2)
          ? new _.Dg(
              _.No(_.Hf(e.j, 2, _.So).j, 1),
              _.No(_.Hf(e.j, 2, _.So).j, 2)
            )
          : null;
        f.fields = {};
        const g = _.tf(e.j, 3);
        for (let k = 0; k < g; ++k) {
          const m = _.Mm(e.j, 3, _.KL, k);
          f.fields[m.getKey()] = m.Na();
        }
      }
      _.mh(a, "click", b, c, d, f);
    },
    mlb = function (a, b, c, d, e, f, g) {
      let k = null;
      f && (k = { title: f[1].title, snippet: f[1].snippet });
      _.mh(a, b, c, d, e, k, g);
    },
    olb = function () {},
    plb = class extends _.L {
      constructor() {
        super();
      }
      mc() {
        return _.Pf(this.j, 2);
      }
    },
    hlb;
  var qlb = class extends _.L {
    constructor(a) {
      super(a);
    }
    getStatus() {
      return _.K(this.j, 1, -1);
    }
  };
  var klb = class {
    constructor() {
      var a = _.Ik,
        b = _.Hk;
      this.h = _.Rf;
      this.g = _.Cm(_.$q, a, _.xt + "/maps/api/js/LayersService.GetFeature", b);
    }
    load(a, b) {
      function c(g) {
        g = new qlb(g);
        b(g);
      }
      var d = new plb();
      _.I(d.j, 1, a.layerId.split("|")[0]);
      _.I(d.j, 2, a.featureId);
      jlb(d, this.h.g().g());
      for (var e in a.parameters) {
        var f = _.Kf(d.j, 4, _.KL);
        _.I(f.j, 1, e);
        _.I(f.j, 2, a.parameters[e]);
      }
      a = ilb(d);
      this.g(a, c, c);
      return a;
    }
    cancel() {
      throw Error("Not implemented");
    }
  };
  olb.prototype.uB = function (a) {
    if (_.Dj[15]) {
      var b = a.l;
      const F = (a.l = a.getMap());
      b &&
        a.g &&
        (a.i
          ? ((b = b.__gm.h), b.set(b.get().yh(a.g)))
          : a.g && _.gKa(a.g, b) && (_.yb(a.h || [], _.dh), (a.h = null)));
      if (F) {
        var c = a.get("layerId");
        b = a.get("spotlightDescription");
        var d = a.get("paintExperimentIds"),
          e = a.get("styler"),
          f = a.get("roadmapStyler"),
          g = a.get("mapsApiLayer"),
          k = a.get("darkLaunch"),
          m = a.get("mapFeatures"),
          q = a.get("clickableCities"),
          t = a.get("travelMapRequest"),
          v = a.get("searchPipeMetadata"),
          w = a.get("overlayLayer"),
          y = a.get("caseExperimentIds"),
          B = a.get("airQualityPipeMetadata"),
          C = a.get("directionsPipeParameters");
        const E = new _.Oq();
        c = c.split("|");
        E.layerId = c[0];
        for (let J = 1; J < c.length; ++J) {
          const [R, ...W] = c[J].split(":");
          E.parameters[R] = W.join(":");
        }
        b && (E.spotlightDescription = new _.Wq(b));
        d && (E.paintExperimentIds = d.slice(0));
        e && (E.styler = new _.cq(e));
        f && (E.roadmapStyler = new _.cq(f));
        t && (E.travelMapRequest = new _.zla(t));
        g && (E.mapsApiLayer = new _.Pq(g));
        m && (E.mapFeatures = m);
        q && (E.clickableCities = q);
        v && (E.searchPipeMetadata = new _.Cs(v));
        w && (E.overlayLayer = new _.Xq(w));
        y && (E.caseExperimentIds = y.slice(0));
        B && (E.airQualityPipeMetadata = new _.pla(B));
        C && (E.directionsPipeParameters = new _.mla(C));
        E.darkLaunch = !!k;
        b = E;
        a.g = b;
        a.i = a.get("renderOnBaseMap");
        a.i ? ((a = F.__gm.h), a.set(a.get().rf(b))) : nlb(a, F, b);
        _.hi(F, "Lg");
        _.fi(F, 148282);
      }
    }
  };
  _.Vg("search_impl", new olb());
});
