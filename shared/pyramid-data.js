// Witches' Pyramid — the four powers (plus the fifth, modern addition)
(function (global) {
  const LAYERS = [
    {
      id: "know", name: "To Know", latin: "Scire", element: "Air", glyph: "🜁",
      text: "The foundation the other powers rest on. Before energy can be directed, it has to be understood — your craft, your own patterns, and the forces you're working with. This is study, self-awareness, and the humility to keep learning."
    },
    {
      id: "will", name: "To Will", latin: "Velle", element: "Fire", glyph: "🜂",
      text: "The focused intention behind a working. Knowledge without will stays inert; this is the drive that turns understanding into purposeful direction, the spark that decides this, not that."
    },
    {
      id: "dare", name: "To Dare", latin: "Audere", element: "Water", glyph: "🜄",
      text: "The courage to act despite uncertainty. This is intuition and emotional depth — trusting what you feel even when you can't fully justify it, and being willing to step past fear into the working itself."
    },
    {
      id: "silent", name: "To Keep Silent", latin: "Tacere", element: "Earth", glyph: "🜃",
      text: "Discretion and discipline. Keeps a working grounded and protected — from your own second-guessing, from outside doubt, and from power leaking out through boasting before it's had time to manifest."
    },
    {
      id: "go", name: "To Go", latin: "Ire", element: "Spirit / Akasha", glyph: "✦",
      text: "The fifth point some modern traditions add above the original four. Represents follow-through — applying what the other powers built, moving the work out into the world instead of holding it in potential. Sits apart from the four elements since it's meant to encompass or transcend them."
    }
  ];

  global.PyramidData = { LAYERS };
})(typeof window !== "undefined" ? window : globalThis);
