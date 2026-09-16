// Chakras quick reference — the seven-chakra system
(function (global) {
  const CHAKRAS = [
    { id: "root", name: "Root", sanskrit: "Muladhara", location: "Base of the spine",
      petals: 4, seed: "LAM", devanagari: "ल", element: "Earth", color: "#C0392B", yantra: "square-triangle",
      text: "The base of the system, connecting you to the physical body and the earth. Governs survival, safety, and stability. When balanced: grounded and secure; when blocked: fear, anxiety, feeling unsteady." },
    { id: "sacral", name: "Sacral", sanskrit: "Svadhisthana", location: "Lower abdomen, below the navel",
      petals: 6, seed: "VAM", devanagari: "व", element: "Water", color: "#E07B1E", yantra: "crescent-outline",
      text: "Seated below the navel — the seat of creativity, pleasure, emotion, and sexuality. Governs how freely feeling and desire are allowed to move. When balanced: healthy emotional flow and creative expression." },
    { id: "solar", name: "Solar Plexus", sanskrit: "Manipura", location: "Upper abdomen",
      petals: 10, seed: "RAM", devanagari: "र", element: "Fire", color: "#D4A017", yantra: "triangle-down",
      text: "The seat of personal power and will. Governs confidence, self-esteem, and the drive to act on your own behalf. When balanced: motivation and healthy boundaries; when blocked: self-doubt or the need to control." },
    { id: "heart", name: "Heart", sanskrit: "Anahata", location: "Center of the chest",
      petals: 12, seed: "YAM", devanagari: "य", element: "Air", color: "#2E8B57", yantra: "hexagram",
      text: "The bridge between the lower, physical chakras and the upper, spiritual ones. Governs love, compassion, and connection — to others and to yourself." },
    { id: "throat", name: "Throat", sanskrit: "Vishuddha", location: "Throat",
      petals: 16, seed: "HAM", devanagari: "ह", element: "Ether / Space", color: "#2C99C4", yantra: "circle-triangle",
      text: "Governs communication, truth, and self-expression. When balanced: speaking clearly and listening well; when blocked: difficulty being heard or fear of speaking up." },
    { id: "thirdEye", name: "Third Eye", sanskrit: "Ajna", location: "Between the eyebrows",
      petals: 2, seed: "OM", devanagari: "ॐ", element: "Light / Mind", color: "#3B4A9E", yantra: "om-wings",
      text: "Seated between the brows — the seat of intuition and inner vision. Governs insight, imagination, and the ability to see beyond the literal." },
    { id: "crown", name: "Crown", sanskrit: "Sahasrara", location: "Top of the head",
      petals: 1000, petalsDisplay: "1,000 (shown stylized)", seed: null, devanagari: "ॐ", element: "Thought / Cosmic Consciousness", color: "#8E44AD", yantra: "om",
      text: "At the crown of the head — connection to something larger than the self. Represents spiritual awakening, unity, and meaning beyond the material." }
  ];

  global.ChakrasData = { CHAKRAS };
})(typeof window !== "undefined" ? window : globalThis);
