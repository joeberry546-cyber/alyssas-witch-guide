// Wheel of the Year — Northern Hemisphere sabbats, data + date logic
(function (global) {
  const ORDER = ["yule", "imbolc", "ostara", "beltane", "litha", "lughnasadh", "mabon", "samhain"];

  const SABBATS = {
    yule: {
      name: "Yule", subtitle: "Winter Solstice",
      meaning: "The longest night of the year and the quiet rebirth of the sun. A turning point where the light begins, almost imperceptibly, to return.",
      colors: ["Red", "Green", "White", "Gold"],
      herbs: ["Holly", "Mistletoe", "Pine", "Cinnamon"],
      symbols: ["Yule log", "Evergreen wreath", "Candles"]
    },
    imbolc: {
      name: "Imbolc", subtitle: "First Stirrings of Spring",
      meaning: "The earliest signs of life beneath the frost. A festival of purification, hearth-fires, and the first candle-lit promise of spring.",
      colors: ["White", "Pale yellow", "Light green"],
      herbs: ["Snowdrop", "Rosemary", "Angelica"],
      symbols: ["Candles", "Brigid's cross", "Milk and grain"]
    },
    ostara: {
      name: "Ostara", subtitle: "Spring Equinox",
      meaning: "Day and night in perfect balance, tipping toward the light. A time of new growth, fertility, and fresh starts.",
      colors: ["Pastel green", "Pink", "Yellow"],
      herbs: ["Crocus", "Daffodil", "Tulip"],
      symbols: ["Eggs", "Rabbits", "Seeds"]
    },
    beltane: {
      name: "Beltane", subtitle: "Peak of Spring",
      meaning: "The height of spring's fertility and passion, traditionally marked with bonfires and flowers. A festival of union and vitality.",
      colors: ["Red", "White", "Green"],
      herbs: ["Hawthorn", "Rose", "Rowan"],
      symbols: ["Maypole", "Bonfires", "Flower crowns"]
    },
    litha: {
      name: "Litha", subtitle: "Summer Solstice",
      meaning: "The longest day and the sun at its full strength. A celebration of abundance, growth, and the peak of the light half of the year.",
      colors: ["Gold", "Yellow", "Sky blue"],
      herbs: ["St. John's Wort", "Sunflower", "Lavender"],
      symbols: ["Bonfires", "Sun wheels", "Wildflowers"]
    },
    lughnasadh: {
      name: "Lughnasadh", subtitle: "First Harvest",
      meaning: "The first of the three harvest festivals, honoring bread, grain, and the labor of the growing season. A time of gratitude and gathering.",
      colors: ["Golden yellow", "Orange", "Wheat"],
      herbs: ["Wheat", "Corn", "Sunflower"],
      symbols: ["Bread", "Corn dollies", "Sickles"]
    },
    mabon: {
      name: "Mabon", subtitle: "Fall Equinox",
      meaning: "The second harvest, and balance once again — this time tipping toward the dark. A moment for gratitude and preparing for winter.",
      colors: ["Deep orange", "Brown", "Burgundy"],
      herbs: ["Sage", "Marigold", "Apple"],
      symbols: ["Cornucopia", "Apples", "Wine"]
    },
    samhain: {
      name: "Samhain", subtitle: "Descent into Winter",
      meaning: "The veil between worlds grows thin. A festival of ancestors, endings, and honoring what has passed as the wheel turns toward the dark half of the year.",
      colors: ["Black", "Orange", "Deep purple"],
      herbs: ["Mugwort", "Rosemary", "Sage"],
      symbols: ["Jack-o'-lanterns", "Ancestor altars", "Black candles"]
    }
  };

  function sabbatsForYear(year, Astro) {
    const dec1 = new Date(Date.UTC(year, 11, 1));
    const marchStart = new Date(Date.UTC(year, 2, 1));
    const juneStart = new Date(Date.UTC(year, 5, 1));
    const septStart = new Date(Date.UTC(year, 8, 1));
    return [
      { id: "yule", date: Astro.findNextSunCrossing(dec1, 270) },
      { id: "imbolc", date: new Date(Date.UTC(year, 1, 1)) },
      { id: "ostara", date: Astro.findNextSunCrossing(marchStart, 0) },
      { id: "beltane", date: new Date(Date.UTC(year, 4, 1)) },
      { id: "litha", date: Astro.findNextSunCrossing(juneStart, 90) },
      { id: "lughnasadh", date: new Date(Date.UTC(year, 7, 1)) },
      { id: "mabon", date: Astro.findNextSunCrossing(septStart, 180) },
      { id: "samhain", date: new Date(Date.UTC(year, 9, 31)) }
    ];
  }

  // Returns { prev, next, fraction, currentId } for the given moment `now`.
  function getWheelPosition(now, Astro) {
    const y = now.getUTCFullYear();
    const all = [
      ...sabbatsForYear(y - 1, Astro),
      ...sabbatsForYear(y, Astro),
      ...sabbatsForYear(y + 1, Astro)
    ].sort((a, b) => a.date - b.date);

    let prev = all[0], next = all[all.length - 1];
    for (let i = 0; i < all.length - 1; i++) {
      if (all[i].date <= now && all[i + 1].date > now) {
        prev = all[i]; next = all[i + 1];
        break;
      }
    }
    const fraction = (now - prev.date) / (next.date - prev.date);
    return { prev, next, fraction };
  }

  global.WheelData = { ORDER, SABBATS, sabbatsForYear, getWheelPosition };
})(typeof window !== "undefined" ? window : globalThis);
