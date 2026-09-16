// Herbs quick reference — elemental & planetary correspondences
(function (global) {
  const HERBS = [
    { name: "Rosemary", element: "Fire", elementGlyph: "🜂", planet: "Sun", planetGlyph: "☉",
      keywords: ["Protection", "purification", "mental clarity", "memory", "love"] },
    { name: "Thyme", element: "Water", elementGlyph: "🜄", planet: "Venus", planetGlyph: "♀",
      keywords: ["Courage", "healing", "purification", "psychic awareness", "sleep"] },
    { name: "Sage", element: "Air", elementGlyph: "🜁", planet: "Jupiter", planetGlyph: "♃",
      keywords: ["Cleansing", "wisdom", "protection", "purification", "longevity"] },
    { name: "Cinnamon", element: "Fire", elementGlyph: "🜂", planet: "Sun", planetGlyph: "☉",
      keywords: ["Prosperity", "love", "protection", "spiritual power", "quickens other spells"] },
    { name: "Salt", element: "Earth", elementGlyph: "🜃", planet: null, planetGlyph: null,
      keywords: ["Purification", "protection", "grounding", "banishing"] },
    { name: "Lavender", element: "Air", elementGlyph: "🜁", planet: "Mercury", planetGlyph: "☿",
      keywords: ["Peace", "love", "protection", "sleep and dreamwork", "calm"] },
    { name: "Basil", element: "Fire", elementGlyph: "🜂", planet: "Mars", planetGlyph: "♂",
      keywords: ["Protection", "prosperity", "love", "purification"] },
    { name: "Mugwort", element: "Earth", elementGlyph: "🜃", planet: "Venus", planetGlyph: "♀",
      keywords: ["Psychic power", "protection", "divination", "prophetic dreams", "astral travel"] },
    { name: "Bay Laurel", element: "Fire", elementGlyph: "🜂", planet: "Sun", planetGlyph: "☉",
      keywords: ["Protection", "psychic power", "purification", "wishes and manifestation"] },
    { name: "Lemon Balm", element: "Water", elementGlyph: "🜄", planet: "Moon", planetGlyph: "☽",
      keywords: ["Love", "success", "healing", "emotional calm"] }
  ];

  global.HerbsData = { HERBS };
})(typeof window !== "undefined" ? window : globalThis);
