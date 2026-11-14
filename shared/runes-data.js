(function (global) {
  const AETTIR = [
    { id: 1, label: "Freyr's aett" },
    { id: 2, label: "Hagall's aett" },
    { id: 3, label: "Tyr's aett" }
  ];

  const ELDER = [
    { glyph: "ᚠ", name: "Fehu", aett: 1, sound: "f", historical: "Cattle, wealth", divinatory: "Value, wealth, management of resources, money, self-worth" },
    { glyph: "ᚢ", name: "Uruz", aett: 1, sound: "u", historical: "Aurochs, wild strength", divinatory: "Aurochs, strength, wild, untamed, instinct" },
    { glyph: "ᚦ", name: "Thurisaz", aett: 1, sound: "th", historical: "Thorn, giant", divinatory: "Chaos, destruction, deconstruction, raw consumption" },
    { glyph: "ᚨ", name: "Ansuz", aett: 1, sound: "a", historical: "God, divine breath, message", divinatory: "Messages, clearing, wind/air" },
    { glyph: "ᚱ", name: "Raidho", aett: 1, sound: "r", historical: "Ride, journey", divinatory: "Shamanic journeys, travel, spiritual movement, Sleipnir" },
    { glyph: "ᚲ", name: "Kenaz", aett: 1, sound: "k", historical: "Torch", divinatory: "Torch, inner fire, knowing, yes" },
    { glyph: "ᚷ", name: "Gebo", aett: 1, sound: "g", historical: "Gift", divinatory: "Gift, exchange, reciprocity" },
    { glyph: "ᚹ", name: "Wunjo", aett: 1, sound: "w", historical: "Joy", divinatory: "Joy, alignment, light" },
    { glyph: "ᚺ", name: "Hagalaz", aett: 2, sound: "h", historical: "Hail", divinatory: "Hail, ancestors, indirect path, shit happens" },
    { glyph: "ᚾ", name: "Naudiz", aett: 2, sound: "n", historical: "Need, constraint", divinatory: "Needfire, function, focus, sexual lust, no" },
    { glyph: "ᛁ", name: "Isaz", aett: 2, sound: "i", historical: "Ice", divinatory: "Ice, blockage, preservation and destruction, glaciers, standstill" },
    { glyph: "ᛃ", name: "Jera", aett: 2, sound: "j", historical: "Year, harvest", divinatory: "Growing cycles, timing, harvest, intention" },
    { glyph: "ᛇ", name: "Eihwaz", aett: 2, sound: "ei", historical: "Yew tree", divinatory: "Balance of life and death, defense, yew tree" },
    { glyph: "ᛈ", name: "Perthro", aett: 2, sound: "p", historical: "Uncertain; possibly a lot-cup", divinatory: "The mysteries, risk, gaming, don't take yourself too seriously" },
    { glyph: "ᛉ", name: "Algiz", aett: 2, sound: "z", historical: "Elk", divinatory: "Protection, fear, imprisonment, guarding, liminal space" },
    { glyph: "ᛊ", name: "Sowilo", aett: 2, sound: "s", historical: "Sun", divinatory: "Sun, illumination, enlightenment, victory" },
    { glyph: "ᛏ", name: "Tiwaz", aett: 3, sound: "t", historical: "Tyr, the god", divinatory: "Truth, justice, discipline, honor, courage, warrior" },
    { glyph: "ᛒ", name: "Berkano", aett: 3, sound: "b", historical: "Birch", divinatory: "Growth, nurturing, discernment, mother" },
    { glyph: "ᛖ", name: "Ehwaz", aett: 3, sound: "e", historical: "Horse", divinatory: "Movement, travel, direction, potential, steady workhorse, progress" },
    { glyph: "ᛗ", name: "Mannaz", aett: 3, sound: "m", historical: "Man, humankind", divinatory: "Contracts and agreements between people, community, handfasting" },
    { glyph: "ᛚ", name: "Laguz", aett: 3, sound: "l", historical: "Water, lake", divinatory: "Water, flow, energy work" },
    { glyph: "ᛜ", name: "Ingwaz", aett: 3, sound: "ng", historical: "Ing, a fertility god", divinatory: "Sacrifice, sexuality, fecundity, initiation" },
    { glyph: "ᛞ", name: "Dagaz", aett: 3, sound: "d", historical: "Day", divinatory: "Dawn, breakthrough, passage of time" },
    { glyph: "ᛟ", name: "Othala", aett: 3, sound: "o", historical: "Ancestral property, heritage", divinatory: "Ancestral land, family, ancestor's hallowed ground, home" }
  ];

  const ANGLO_SAXON = [
    { glyph: "ᚪ", name: "Ac", sound: "a", historical: "Oak", divinatory: "Sovereignty, endurance, leadership, oak tree" },
    { glyph: "ᚩ", name: "Os", sound: "o", historical: "Mouth, god", divinatory: "Breath, relationship with breath or deity, manifesting, storytelling, estuary" },
    { glyph: "ᚣ", name: "Yr", sound: "y", historical: "Bow", divinatory: "Mastery, focus, leveling up, craftsmen, death to bring life" },
    { glyph: "ᛡ", name: "Ior", sound: "io", historical: "Name meaning uncertain", divinatory: "Liminal space, non-binary, boundaries, suppressed emotions and memories, serpent energy, subconscious" },
    { glyph: "ᛠ", name: "Ear", sound: "ea", historical: "Earth, grave", divinatory: "Grave death, burial, decomposition, disassembly, slow passage of time" },
    { glyph: "ᛢ", name: "Cweorth", sound: "cw", historical: "Name meaning uncertain", divinatory: "Funeral pyre, rapid transformation, death, release of spirit" },
    { glyph: "ᛣ", name: "Calc", sound: "c", historical: "Chalice", divinatory: "Sacred quest, fulfilment, honoring" },
    { glyph: "ᛥ", name: "Stan", sound: "st", historical: "Stone", divinatory: "Time and perspective, foundations, portals and gateways" },
    { glyph: "ᚸ", name: "Gar", sound: "g", historical: "Spear", divinatory: "Not to be known, connection" }
  ];

  const YOUNGER = [
    { glyph: "ᚠ", name: "Fehu", sound: "f", historical: "Cattle, wealth" },
    { glyph: "ᚢ", name: "Úr", sound: "u", historical: "Aurochs" },
    { glyph: "ᚦ", name: "Þurs", sound: "th", historical: "Giant" },
    { glyph: "ᚬ", name: "Óss", sound: "o", historical: "God, mouth" },
    { glyph: "ᚱ", name: "Reið", sound: "r", historical: "Ride" },
    { glyph: "ᚴ", name: "Kaun", sound: "k", historical: "Ulcer, sore" },
    { glyph: "ᚼ", name: "Hagall", sound: "h", historical: "Hail" },
    { glyph: "ᚾ", name: "Nauðr", sound: "n", historical: "Need" },
    { glyph: "ᛁ", name: "Íss", sound: "i", historical: "Ice" },
    { glyph: "ᛅ", name: "Ár", sound: "a", historical: "Plenty, good year" },
    { glyph: "ᛋ", name: "Sól", sound: "s", historical: "Sun" },
    { glyph: "ᛏ", name: "Týr", sound: "t", historical: "Tyr, the god" },
    { glyph: "ᛒ", name: "Bjarkan", sound: "b", historical: "Birch twig" },
    { glyph: "ᛘ", name: "Maðr", sound: "m", historical: "Man" },
    { glyph: "ᛚ", name: "Lögr", sound: "l", historical: "Water" },
    { glyph: "ᛦ", name: "Yr", sound: "y", historical: "Yew" }
  ];

  global.RUNES = { aettir: AETTIR, elder: ELDER, angloSaxon: ANGLO_SAXON, younger: YOUNGER };
})(window);
