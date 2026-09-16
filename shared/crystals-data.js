// Crystals quick reference — chakra correspondences
(function (global) {
  const CRYSTALS = [
    { name: "Clear Quartz", chakras: ["Crown", "All Chakras"],
      text: "The \"master healer\" — amplification, clarity, all-purpose energy work." },
    { name: "Amethyst", chakras: ["Third Eye", "Crown"],
      text: "Spiritual protection, intuition, calm, sobriety." },
    { name: "Rose Quartz", chakras: ["Heart"],
      text: "Love, compassion, emotional healing, self-love." },
    { name: "Black Tourmaline", chakras: ["Root"],
      text: "Protection, grounding, deflecting negativity and EMF." },
    { name: "Tiger's Eye", chakras: ["Solar Plexus", "Sacral"],
      text: "Courage, confidence, personal will, protection." },
    { name: "Lapis Lazuli", chakras: ["Throat", "Third Eye"],
      text: "Wisdom, truth, psychic awareness, inner power." },
    { name: "Citrine", chakras: ["Solar Plexus"],
      text: "Abundance, manifestation, joy, personal power." },
    { name: "Carnelian", chakras: ["Sacral"],
      text: "Creativity, vitality, courage, motivation." },
    { name: "Selenite", chakras: ["Crown"],
      text: "Cleansing (self and other stones), clarity, high vibration." },
    { name: "Moonstone", chakras: ["Sacral", "Crown"],
      text: "Intuition, feminine energy, new beginnings, lunar connection." },
    { name: "Smoky Quartz", chakras: ["Root"],
      text: "Grounding, protection, transmuting negative energy." },
    { name: "Obsidian", chakras: ["Root"],
      text: "Protection, shadow work, truth, grounding." }
  ];

  global.CrystalsData = { CRYSTALS };
})(typeof window !== "undefined" ? window : globalThis);
