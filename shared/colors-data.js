// Colors — what each color means to me
(function (global) {
  const COLORS = [
    { name: "Red", hex: "#D7141A", tag: "the first color",
      keywords: ["blood", "power", "passion", "heat", "love", "danger", "attention", "flashy", "romance", "strong emotion"],
      note: "" },
    { name: "Pink", hex: "#F4A3B6", tag: "the blush of the heart",
      keywords: ["femininity", "sex", "romance", "softness", "flowers", "light red", "beauty"],
      note: "Often blends to gray." },
    { name: "Orange", hex: "#FF7A00", tag: "the newest color",
      keywords: ["hot", "autumn", "sweet", "pleasant smell", "bold", "brash", "loud", "hunting", "high-vis clothing"],
      note: "Blends with bright grass green." },
    { name: "Yellow", hex: "#FFE100", tag: "the color of the sun",
      keywords: ["light", "happy", "bubbly", "the sun", "heat", "daylight", "flashy"],
      note: "Grabs the eye." },
    { name: "Green", hex: "#12A84B", tag: "the color of growing things",
      keywords: ["life", "health", "money", "plants", "increase", "frustration", "confusion"],
      note: "Always looks like something else." },
    { name: "Blue", hex: "#0057D9", tag: "the color of still water",
      keywords: ["soothing", "calm", "safety", "beauty", "the sky", "water", "elegant", "cold", "trauma"],
      note: "" },
    { name: "Purple", hex: "#7B2FBE", tag: "the color of crowns and visions",
      keywords: ["royalty", "authority", "intuition", "beauty", "rarity", "power"],
      note: "Blends with blue." },
    { name: "Brown", hex: "#7A4521", tag: "the ground beneath your feet",
      keywords: ["earth", "soil", "dirty", "foundation", "steady", "warm", "leather", "utility", "nature"],
      note: "Overlaps with green." },
    { name: "Black", hex: "#121212", tag: "the fruitful darkness",
      keywords: ["stealth", "concealment", "mystery", "hiding", "protection", "safety", "evil", "classic", "conservative", "the tomb and the womb", "despair yielding to hope"],
      note: "No light, all colors." },
    { name: "Gray", hex: "#8A8D91", tag: "the threshold",
      keywords: ["neutrality", "in between", "the storm and its aftermath", "justice", "wisdom", "age", "council", "transition"],
      note: "" },
    { name: "White", hex: "#FFFFFF", tag: "the clean slate",
      keywords: ["pure", "fresh", "snow", "bright", "clean", "light", "good", "knowledge", "science", "can be co-opted and perverted, as is racism"],
      note: "All light, no colors." }
  ];

  global.ColorsData = { COLORS };
})(typeof window !== "undefined" ? window : globalThis);
