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
          <g clip-path="url(#${id})"><circle cx="${-d}" cy="0" r="${R}" fill="${DARK}"/></g>`;
        break;
      case 'Full Moon':
        inner = `<circle cx="0" cy="0" r="${R}" fill="${LIGHT}"/>`;
        break;
      case 'Waning Gibbous':
        inner = `<circle cx="0" cy="0" r="${R}" fill="${LIGHT}"/>
          <g clip-path="url(#${id})"><circle cx="${d}" cy="0" r="${R}" fill="${DARK}"/></g>`;
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

  // DRAFT correspondences: traditional and personal blend, edit freely.
  const PHASE_CORRESPONDENCES = [
    { name: "New Moon", theme: "Beginnings, intention, rest",
      bestFor: "Setting intentions, planting seeds, starting something new",
      colors: "Black, deep indigo, silver",
      herbs: "Mugwort, jasmine, passionflower",
      stones: "Black obsidian, labradorite, moonstone",
      ritual: "Write one intention on paper and keep it somewhere dark and quiet for the cycle" },
    { name: "Waxing Crescent", theme: "Growth, courage, first action",
      bestFor: "Taking the first step, building momentum, asking for what you need",
      colors: "Pale yellow, white, light green",
      herbs: "Basil, lemongrass, peppermint",
      stones: "Citrine, carnelian, green aventurine",
      ritual: "Take one small, concrete action toward your intention and tend a growing plant" },
    { name: "Waxing Gibbous", theme: "Refinement, patience, adjustment",
      bestFor: "Editing and refining, troubleshooting, nurturing what is taking shape",
      colors: "Green, amber, gold",
      herbs: "Chamomile, dandelion, rosemary",
      stones: "Tiger's eye, amber, jade",
      ritual: "Review your plan, adjust what isn't working, and share a mindful cup of tea" },
    { name: "Full Moon", theme: "Culmination, illumination, release",
      bestFor: "Celebration, clarity, gratitude, and letting go",
      colors: "White, silver, pale blue",
      herbs: "Lavender, white rose, jasmine",
      stones: "Clear quartz, moonstone, selenite",
      ritual: "Charge water or stones in moonlight, then write down what you are releasing and dispose of the paper safely" },
    { name: "Waning Gibbous", theme: "Gratitude, sharing, teaching",
      bestFor: "Sharing what you have learned, giving thanks, reflecting",
      colors: "Brown, warm orange, burgundy",
      herbs: "Cedar, sandalwood, thyme",
      stones: "Smoky quartz, tourmaline, garnet",
      ritual: "Keep a gratitude list and pass on one lesson or kindness to someone else" },
    { name: "Waning Crescent", theme: "Rest, release, clearing space",
      bestFor: "Rest, letting go, cleansing, and setting boundaries",
      colors: "Dark blue, grey, black",
      herbs: "Willow, rue, hyssop",
      stones: "Amethyst, howlite, black tourmaline",
      ritual: "Take a cleansing bath or smudge your space, then sleep early and journal what you are ready to put down" }
  ];

  global.MoonData = { SEASONAL_NAMES, seasonalNameFor, moonIconMarkup, PHASE_CORRESPONDENCES };
})(typeof window !== "undefined" ? window : globalThis);
