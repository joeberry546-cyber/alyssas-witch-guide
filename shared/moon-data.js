(function (global) {
  const SEASONAL_NAMES = {
    0: "Wolf Moon", 1: "Snow Moon", 2: "Worm Moon", 3: "Pink Moon",
    4: "Flower Moon", 5: "Strawberry Moon", 6: "Buck Moon", 7: "Sturgeon Moon",
    8: "Harvest Moon", 9: "Hunter's Moon", 10: "Beaver Moon", 11: "Cold Moon"
  };

  function seasonalNameFor(date) { return SEASONAL_NAMES[date.getMonth()]; }

  const NS = "http://www.w3.org/2000/svg";
  const LIGHT = "#F4EEDD", DARK = "#1F3B2C", OUTLINE = "#B8912F";

  // Returns an SVG <g>...</g> markup string for a given phase name, centered at (0,0)
  // with the given radius. Purely stylized / line-art, not a realistic render.
  function moonIconMarkup(phaseName, R) {
    const id = 'clip' + Math.random().toString(36).slice(2, 9);
    const clip = `<clipPath id="${id}"><circle cx="0" cy="0" r="${R}"/></clipPath>`;
    let inner = '';
    const d = R * 1.5;
    switch (phaseName) {
      case 'New Moon':
        inner = `<circle cx="0" cy="0" r="${R}" fill="${DARK}"/>`;
        break;
      case 'Waxing Crescent':
        inner = `<circle cx="0" cy="0" r="${R}" fill="${DARK}"/>
          <g clip-path="url(#${id})"><circle cx="${d}" cy="0" r="${R}" fill="${LIGHT}"/></g>`;
        break;
      case 'First Quarter':
        inner = `<circle cx="0" cy="0" r="${R}" fill="${DARK}"/>
          <path d="M0,${-R} A ${R},${R} 0 0 1 0,${R} Z" fill="${LIGHT}"/>`;
        break;
      case 'Waxing Gibbous':
        inner = `<circle cx="0" cy="0" r="${R}" fill="${LIGHT}"/>
          <g clip-path="url(#${id})"><circle cx="${-R * 0.55}" cy="0" r="${R}" fill="${DARK}"/></g>`;
        break;
      case 'Full Moon':
        inner = `<circle cx="0" cy="0" r="${R}" fill="${LIGHT}"/>`;
        break;
      case 'Waning Gibbous':
        inner = `<circle cx="0" cy="0" r="${R}" fill="${LIGHT}"/>
          <g clip-path="url(#${id})"><circle cx="${R * 0.55}" cy="0" r="${R}" fill="${DARK}"/></g>`;
        break;
      case 'Last Quarter':
        inner = `<circle cx="0" cy="0" r="${R}" fill="${DARK}"/>
          <path d="M0,${-R} A ${R},${R} 0 0 0 0,${R} Z" fill="${LIGHT}"/>`;
        break;
      case 'Waning Crescent':
        inner = `<circle cx="0" cy="0" r="${R}" fill="${DARK}"/>
          <g clip-path="url(#${id})"><circle cx="${-d}" cy="0" r="${R}" fill="${LIGHT}"/></g>`;
        break;
      default:
        inner = `<circle cx="0" cy="0" r="${R}" fill="${DARK}"/>`;
    }
    return `<defs>${clip}</defs>${inner}<circle cx="0" cy="0" r="${R}" fill="none" stroke="${OUTLINE}" stroke-width="${Math.max(1, R*0.04)}"/>`;
  }

  global.MoonData = { SEASONAL_NAMES, seasonalNameFor, moonIconMarkup };
})(typeof window !== "undefined" ? window : globalThis);
