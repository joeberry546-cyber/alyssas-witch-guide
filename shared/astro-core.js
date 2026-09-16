// Astro Core — low-precision positional astronomy
// Based on the classic public-domain formulas by Paul Schlyter
// ("How to compute planetary positions"), good to roughly
// 1 arcminute for the current era. Intended for reference /
// devotional use, not for scientific or navigational purposes.

(function (global) {
  const DEG = Math.PI / 180;
  const sin = (x) => Math.sin(x * DEG);
  const cos = (x) => Math.cos(x * DEG);
  const tan = (x) => Math.tan(x * DEG);
  const asind = (x) => Math.asin(x) / DEG;
  const atan2d = (y, x) => Math.atan2(y, x) / DEG;
  const rev = (x) => x - 360 * Math.floor(x / 360);

  const SIGNS = ["Aries","Taurus","Gemini","Cancer","Leo","Virgo",
    "Libra","Scorpio","Sagittarius","Capricorn","Aquarius","Pisces"];

  function daysSince2000(date) {
    const Y = date.getUTCFullYear();
    const M = date.getUTCMonth() + 1;
    const D = date.getUTCDate();
    const UT = date.getUTCHours() + date.getUTCMinutes() / 60 + date.getUTCSeconds() / 3600;
    return 367 * Y - Math.floor(7 * (Y + Math.floor((M + 9) / 12)) / 4) +
      Math.floor(275 * M / 9) + D - 730530 + UT / 24;
  }

  const ELEMENTS = {
    sun:     { N: () => 0, i: () => 0, w: d => 282.9404 + 4.70935e-5 * d, a: () => 1.0, e: d => 0.016709 - 1.151e-9 * d, M: d => rev(356.0470 + 0.9856002585 * d) },
    moon:    { N: d => rev(125.1228 - 0.0529538083 * d), i: () => 5.1454, w: d => rev(318.0634 + 0.1643573223 * d), a: () => 60.2666, e: () => 0.054900, M: d => rev(115.3654 + 13.0649929509 * d) },
    mercury: { N: d => rev(48.3313 + 3.24587e-5 * d), i: d => 7.0047 + 5.00e-8 * d, w: d => rev(29.1241 + 1.01444e-5 * d), a: () => 0.387098, e: d => 0.205635 + 5.59e-10 * d, M: d => rev(168.6562 + 4.0923344368 * d) },
    venus:   { N: d => rev(76.6799 + 2.46590e-5 * d), i: d => 3.3946 + 2.75e-8 * d, w: d => rev(54.8910 + 1.38374e-5 * d), a: () => 0.723330, e: d => 0.006773 - 1.302e-9 * d, M: d => rev(48.0052 + 1.6021302244 * d) },
    mars:    { N: d => rev(49.5574 + 2.11081e-5 * d), i: d => 1.8497 - 1.78e-8 * d, w: d => rev(286.5016 + 2.92961e-5 * d), a: () => 1.523688, e: d => 0.093405 + 2.516e-9 * d, M: d => rev(18.6021 + 0.5240207766 * d) },
    jupiter: { N: d => rev(100.4542 + 2.76854e-5 * d), i: d => 1.3030 - 1.557e-7 * d, w: d => rev(273.8777 + 1.64505e-5 * d), a: () => 5.20256, e: d => 0.048498 + 4.469e-9 * d, M: d => rev(19.8950 + 0.0830853001 * d) },
    saturn:  { N: d => rev(113.6634 + 2.38980e-5 * d), i: d => 2.4886 - 1.081e-7 * d, w: d => rev(339.3939 + 2.97661e-5 * d), a: () => 9.55475, e: d => 0.055546 - 9.499e-9 * d, M: d => rev(316.9670 + 0.0334442282 * d) }
  };

  function solveKepler(M, e) {
    let E = M + (180 / Math.PI) * e * sin(M) * (1 + e * cos(M));
    for (let n = 0; n < 12; n++) {
      const dE = (E - (180 / Math.PI) * e * sin(E) - M) / (1 - e * cos(E));
      E -= dE;
      if (Math.abs(dE) < 1e-7) break;
    }
    return E;
  }

  function heliocentric(elems, d) {
    const N = elems.N(d), i = elems.i(d), w = elems.w(d), a = elems.a(d), e = elems.e(d), M = elems.M(d);
    const E = solveKepler(M, e);
    const xv = a * (cos(E) - e);
    const yv = a * (Math.sqrt(1 - e * e) * sin(E));
    const v = rev(atan2d(yv, xv));
    const r = Math.sqrt(xv * xv + yv * yv);
    const xh = r * (cos(N) * cos(v + w) - sin(N) * sin(v + w) * cos(i));
    const yh = r * (sin(N) * cos(v + w) + cos(N) * sin(v + w) * cos(i));
    const zh = r * (sin(v + w) * sin(i));
    return { xh, yh, zh, r };
  }

  function sunPosition(d) {
    const e = ELEMENTS.sun.e(d), M = ELEMENTS.sun.M(d), w = ELEMENTS.sun.w(d);
    const E = solveKepler(M, e);
    const xv = cos(E) - e, yv = Math.sqrt(1 - e * e) * sin(E);
    const v = rev(atan2d(yv, xv));
    const lon = rev(v + w);
    const r = Math.sqrt(xv * xv + yv * yv);
    return { lon, r };
  }

  function moonPosition(d) {
    const h = heliocentric(ELEMENTS.moon, d);
    let lon = rev(atan2d(h.yh, h.xh));
    const lat = atan2d(h.zh, Math.sqrt(h.xh * h.xh + h.yh * h.yh));

    // Principal perturbation terms (Schlyter's simplified set) for better accuracy
    const Ms = ELEMENTS.sun.M(d);
    const Mm = ELEMENTS.moon.M(d);
    const Nm = ELEMENTS.moon.N(d);
    const ws = ELEMENTS.sun.w(d);
    const wm = ELEMENTS.moon.w(d);
    const Lm = rev(Nm + wm + Mm);
    const Ls = rev(ws + Ms);
    const D = rev(Lm - Ls);
    let corr = 0;
    corr += -1.274 * sin(Mm - 2 * D);
    corr += 0.658 * sin(2 * D);
    corr += -0.186 * sin(Ms);
    corr += -0.059 * sin(2 * Mm - 2 * D);
    corr += -0.057 * sin(Mm - 2 * D + Ms);
    corr += 0.053 * sin(Mm + 2 * D);
    corr += 0.046 * sin(2 * D - Ms);
    corr += 0.041 * sin(Mm - Ms);
    corr += -0.035 * sin(D);
    corr += -0.031 * sin(Mm + Ms);
    lon = rev(lon + corr);
    return { lon, lat };
  }

  function planetGeoLongitude(name, d) {
    const sun = sunPosition(d);
    const xs = sun.r * cos(sun.lon), ys = sun.r * sin(sun.lon);
    const h = heliocentric(ELEMENTS[name], d);
    const xg = h.xh + xs, yg = h.yh + ys;
    return rev(atan2d(yg, xg));
  }

  function signFromLongitude(lon) {
    return SIGNS[Math.floor(rev(lon) / 30)];
  }

  function angleDiff(a, b) {
    let diff = Math.abs(rev(a - b));
    if (diff > 180) diff = 360 - diff;
    return diff;
  }

  // ---- Sunrise / sunset ----
  // Returns { sunrise: Date|null, sunset: Date|null, solarNoon: Date }
  // `date` should represent local noon-ish on the day in question (any time on that local day works).
  function getSunTimes(date, lat, lonDeg) {
    function sunAltEquation(d, hoursUT) {
      const dd = d + hoursUT / 24;
      const oblecl = 23.4393 - 3.563e-7 * dd;
      const sun = sunPosition(dd);
      const xs = sun.r * cos(sun.lon), ys = sun.r * sin(sun.lon);
      const xe = xs, ye = ys * cos(oblecl), ze = ys * sin(oblecl);
      const RA = rev(atan2d(ye, xe));
      const Decl = asind(ze / sun.r);
      const Lsun = rev(ELEMENTS.sun.w(dd) + ELEMENTS.sun.M(dd));
      const GMST0 = rev(Lsun + 180) / 15; // hours
      const SIDTIME = rev((GMST0 + hoursUT + lonDeg / 15) * 15) / 15;
      const HA = rev(SIDTIME * 15 - RA);
      const haSigned = HA > 180 ? HA - 360 : HA;
      return { Decl, haSigned, RA, GMST0 };
    }

    const d0 = daysSince2000(new Date(Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate(), 0, 0, 0)));
    const h0 = -0.833; // standard refraction + solar disc radius

    // find local solar noon (HA = 0) via search
    let noonUT = 12;
    for (let iter = 0; iter < 6; iter++) {
      const { haSigned } = sunAltEquation(d0, noonUT);
      noonUT -= haSigned / 15;
    }
    const { Decl } = sunAltEquation(d0, noonUT);

    const cosH0 = (sin(h0) - sin(lat) * sin(Decl)) / (cos(lat) * cos(Decl));
    let sunrise = null, sunset = null;
    if (cosH0 >= -1 && cosH0 <= 1) {
      const H0 = Math.acos(cosH0) / DEG;
      sunrise = noonUT - H0 / 15;
      sunset = noonUT + H0 / 15;
    } else if (cosH0 < -1) {
      // sun never sets (polar day)
      sunrise = null; sunset = null;
    }

    function utHoursToDate(hUT) {
      const base = new Date(Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate(), 0, 0, 0));
      return new Date(base.getTime() + hUT * 3600000);
    }

    return {
      sunrise: sunrise !== null ? utHoursToDate(sunrise) : null,
      sunset: sunset !== null ? utHoursToDate(sunset) : null,
      solarNoon: utHoursToDate(noonUT),
      polarDay: cosH0 < -1,
      polarNight: cosH0 > 1
    };
  }

  // ---- Moon phase ----
  function getMoonPhase(date) {
    const d = daysSince2000(date);
    const moonLon = moonPosition(d).lon;
    const sunLon = sunPosition(d).lon;
    const elong = rev(moonLon - sunLon);
    const illumination = (1 - cos(elong)) / 2;
    let name;
    if (elong < 22.5 || elong >= 337.5) name = "New Moon";
    else if (elong < 67.5) name = "Waxing Crescent";
    else if (elong < 112.5) name = "First Quarter";
    else if (elong < 157.5) name = "Waxing Gibbous";
    else if (elong < 202.5) name = "Full Moon";
    else if (elong < 247.5) name = "Waning Gibbous";
    else if (elong < 292.5) name = "Last Quarter";
    else name = "Waning Crescent";
    return { elongation: elong, illumination, name, moonLon, sunLon };
  }

  function signedDiffFromTarget(t, targetAngle) {
    const d = daysSince2000(t);
    const elong = rev(moonPosition(d).lon - sunPosition(d).lon);
    let diff = rev(elong - targetAngle);
    if (diff > 180) diff -= 360; // now in (-180, 180]
    return diff;
  }

  function findNextPhase(fromDate, targetAngle) {
    let prev = null;
    for (let hrs = 0; hrs <= 40 * 24; hrs += 3) {
      const t = new Date(fromDate.getTime() + hrs * 3600000);
      const diff = signedDiffFromTarget(t, targetAngle);
      // Only treat a sign flip as a real crossing of the target angle
      // (not the +180/-180 wraparound on the far side of the circle).
      if (prev !== null && Math.sign(diff) !== Math.sign(prev.diff) &&
          Math.abs(diff) < 90 && Math.abs(prev.diff) < 90 && hrs > 0) {
        let lo = prev.t, hi = t, loDiff = prev.diff;
        for (let i = 0; i < 20; i++) {
          const mid = new Date((lo.getTime() + hi.getTime()) / 2);
          const dm_diff = signedDiffFromTarget(mid, targetAngle);
          if (Math.sign(dm_diff) === Math.sign(loDiff)) { lo = mid; loDiff = dm_diff; }
          else hi = mid;
        }
        return hi;
      }
      prev = { t, diff };
    }
    return null;
  }

  // Finds the next time the Sun's ecliptic longitude crosses targetAngle
  // (0 = spring equinox, 90 = summer solstice, 180 = fall equinox, 270 = winter solstice)
  function findNextSunCrossing(fromDate, targetAngle) {
    let prev = null;
    for (let days = 0; days <= 370; days++) {
      const t = new Date(fromDate.getTime() + days * 86400000);
      let diff = rev(sunPosition(daysSince2000(t)).lon - targetAngle);
      if (diff > 180) diff -= 360;
      if (prev !== null && Math.sign(diff) !== Math.sign(prev.diff) &&
          Math.abs(diff) < 90 && Math.abs(prev.diff) < 90) {
        let lo = prev.t, hi = t, loDiff = prev.diff;
        for (let i = 0; i < 20; i++) {
          const mid = new Date((lo.getTime() + hi.getTime()) / 2);
          let dmDiff = rev(sunPosition(daysSince2000(mid)).lon - targetAngle);
          if (dmDiff > 180) dmDiff -= 360;
          if (Math.sign(dmDiff) === Math.sign(loDiff)) { lo = mid; loDiff = dmDiff; }
          else hi = mid;
        }
        return hi;
      }
      prev = { t, diff };
    }
    return null;
  }

  // ---- Void of course ----
  function findSignBoundary(date, forward) {
    const stepMin = 10;
    const d0 = daysSince2000(date);
    const startSign = Math.floor(rev(moonPosition(d0).lon) / 30);
    let mins = 0;
    for (let n = 0; n < (96 * 60) / stepMin; n++) {
      mins += forward ? stepMin : -stepMin;
      const t = new Date(date.getTime() + mins * 60000);
      const sign = Math.floor(rev(moonPosition(daysSince2000(t)).lon) / 30);
      if (sign !== startSign) return t;
    }
    return null;
  }

  const VOC_BODIES = ["sun", "mercury", "venus", "mars", "jupiter", "saturn"];
  const ASPECTS = [0, 60, 90, 120, 180];

  function getVoidOfCourse(date) {
    const signStartApprox = findSignBoundary(date, false);
    const signEnd = findSignBoundary(date, true);
    if (!signStartApprox || !signEnd) return null;
    const signStart = new Date(signStartApprox.getTime() + 10 * 60000);

    const step = 15; // minutes
    let t = new Date(signStart.getTime());
    let prevDiffs = {};
    function diffsAt(t) {
      const d = daysSince2000(t);
      const moonLon = moonPosition(d).lon;
      const out = {};
      for (const b of VOC_BODIES) {
        const lonB = planetGeoLongitude(b, d);
        for (const asp of ASPECTS) out[b + "-" + asp] = angleDiff(moonLon, lonB) - asp;
      }
      return out;
    }
    prevDiffs = diffsAt(t);
    let lastAspectTime = new Date(signStart.getTime());
    while (t < signEnd) {
      t = new Date(Math.min(t.getTime() + step * 60000, signEnd.getTime()));
      const diffs = diffsAt(t);
      for (const key in diffs) {
        if (Math.sign(prevDiffs[key]) !== Math.sign(diffs[key])) {
          lastAspectTime = new Date(t);
        }
      }
      prevDiffs = diffs;
      if (t >= signEnd) break;
    }

    return {
      sign: signFromLongitude(moonPosition(daysSince2000(date)).lon),
      voidStart: lastAspectTime,
      voidEnd: signEnd,
      isVoidNow: date >= lastAspectTime && date < signEnd
    };
  }

  // ---- Planetary hours ----
  const CHALDEAN = ["saturn", "jupiter", "mars", "sun", "venus", "mercury", "moon"];
  const DAY_RULERS = ["sun", "moon", "mars", "mercury", "jupiter", "venus", "saturn"]; // index = Date.getDay()
  const LATIN_ORDINALS = ["Prima","Secunda","Tertia","Quarta","Quinta","Sexta",
    "Septima","Octava","Nona","Decima","Undecima","Duodecima"];
  const PLANET_SYMBOLS = { sun: "☉", moon: "☽", mercury: "☿", venus: "♀", mars: "♂", jupiter: "♃", saturn: "♄" };
  const PLANET_NAMES = { sun: "Sun", moon: "Moon", mercury: "Mercury", venus: "Venus", mars: "Mars", jupiter: "Jupiter", saturn: "Saturn" };

  // localDate: a Date whose calendar day (in local time) is the day sunrise falls on.
  function computePlanetaryHours(localDate, lat, lonDeg) {
    const ruler = DAY_RULERS[localDate.getUTCDay()];
    const startIdx = CHALDEAN.indexOf(ruler);
    const sequence = [];
    for (let i = 0; i < 24; i++) sequence.push(CHALDEAN[(startIdx + i) % 7]);

    const sunToday = getSunTimes(localDate, lat, lonDeg);
    const nextDay = new Date(localDate.getTime() + 86400000);
    const sunTomorrow = getSunTimes(nextDay, lat, lonDeg);

    if (!sunToday.sunrise || !sunToday.sunset || !sunTomorrow.sunrise) return null;

    const dayHourMs = (sunToday.sunset - sunToday.sunrise) / 12;
    const nightHourMs = (sunTomorrow.sunrise - sunToday.sunset) / 12;

    const hours = [];
    for (let i = 0; i < 12; i++) {
      hours.push({
        index: i + 1, isDay: true, planet: sequence[i],
        latinName: "Hora " + LATIN_ORDINALS[i] + " (Diei)",
        start: new Date(sunToday.sunrise.getTime() + i * dayHourMs),
        end: new Date(sunToday.sunrise.getTime() + (i + 1) * dayHourMs)
      });
    }
    for (let i = 0; i < 12; i++) {
      hours.push({
        index: i + 1, isDay: false, planet: sequence[12 + i],
        latinName: "Hora " + LATIN_ORDINALS[i] + " (Noctis)",
        start: new Date(sunToday.sunset.getTime() + i * nightHourMs),
        end: new Date(sunToday.sunset.getTime() + (i + 1) * nightHourMs)
      });
    }
    return { hours, sunrise: sunToday.sunrise, sunset: sunToday.sunset, nextSunrise: sunTomorrow.sunrise, ruler };
  }

  const AstroCore = {
    daysSince2000, sunPosition, moonPosition, planetGeoLongitude,
    signFromLongitude, angleDiff, getSunTimes, getMoonPhase,
    findNextPhase, findNextSunCrossing, getVoidOfCourse, computePlanetaryHours,
    PLANET_SYMBOLS, PLANET_NAMES, SIGNS
  };

  if (typeof module !== "undefined" && module.exports) module.exports = AstroCore;
  else global.AstroCore = AstroCore;
})(typeof window !== "undefined" ? window : globalThis);
