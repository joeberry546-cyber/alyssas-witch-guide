// Celtic gods — full entries
// parents, siblings, offspring: strings; (uncertain) = thin sourcing; (contested) = sources disagree
// festivals: list of strings. The four Irish quarter days are Imbolc, Beltane, Lughnasadh, Samhain.
// old: native spelling. sphere: Tuatha Dé | Fomorian | Welsh | Gaulish | British | Irish and Scottish.
(function (global) {
  const GROUPS = [
  {
    "id": "tuatha",
    "title": "Irish: the Tuatha Dé Danann",
    "open": true,
    "intro": "The divine people of the Irish tales. Tap a god.",
    "gods": [
      {
        "name": "The Dagda",
        "old": "An Dagda",
        "parents": "Unknown (some genealogies name Elatha; uncertain)",
        "siblings": "Ogma (uncertain)",
        "offspring": "Brigid, Aengus, and others",
        "festivals": [
          "Samhain: he meets the Morrigan at a river the day before the battle (Second Battle of Mag Tuired)"
        ],
        "domains": "Abundance, kingship, druidry, life and death",
        "animals": "Pigs (his cauldron-feasts; uncertain)",
        "symbols": "A great club (one end kills, the other revives), the cauldron Undry that is never empty, the harp Uaithne",
        "sphere": "Tuatha Dé"
      },
      {
        "name": "Brigid",
        "old": "Brigit / Brighid",
        "parents": "The Dagda",
        "siblings": "None known (two sisters of the same name, in some texts)",
        "offspring": "Ruadan (with Bres)",
        "festivals": [
          "Imbolc, February 1: her day. Brigid's crosses are woven from rushes, and a cloth is left out to be blessed by her."
        ],
        "domains": "Poetry, healing, smithcraft, fire, the hearth, livestock",
        "animals": "Cattle, sheep",
        "symbols": "The sacred flame, the Brigid's cross, her mantle, wells and springs",
        "plants": "Rushes (for the cross)",
        "sphere": "Tuatha Dé",
        "note": "An early medieval glossary calls her a goddess of poets with two sisters of the same name, over healing and smithcraft, which is the source of the later triple Brigid. See also: Saint Brigid of Kildare, whose story overlaps hers, and Brigantia, who shares her name root (uncertain)."
      },
      {
        "name": "Danu",
        "old": "Danu / Anu",
        "parents": "Unknown",
        "siblings": "None known",
        "offspring": "The Tuatha Dé Danann (\"people of Danu\")",
        "festivals": [
          "None attested"
        ],
        "domains": "Mother goddess, fertility, the land",
        "sphere": "Tuatha Dé",
        "note": "Almost nothing is told about her. A medieval glossary calls Anu the mother of the Irish gods, and Danu may be a form of the same name (uncertain). Links to the river Danube are speculative."
      },
      {
        "name": "Lugh",
        "old": "Lug",
        "parents": "Cian and Ethniu",
        "siblings": "None known",
        "offspring": "Cu Chulainn (in the Ulster tales)",
        "festivals": [
          "Lughnasadh, August 1: Lugh founded the games in honor of his foster-mother Tailtiu"
        ],
        "domains": "Skill in every craft, kingship, oaths, warrior, craft and light",
        "animals": "Raven (uncertain)",
        "symbols": "Spear, sling",
        "sphere": "Tuatha Dé",
        "note": "See also: Lleu Llaw Gyffes in the Welsh tales, and the Gaulish god Lugus. They are probably the same figure."
      },
      {
        "name": "Nuada",
        "old": "Nuadu",
        "parents": "Echtach (uncertain)",
        "siblings": "None known",
        "offspring": "None known",
        "festivals": [
          "None attested"
        ],
        "domains": "Kingship, the sword, healing (his lost arm was replaced with silver)",
        "symbols": "Silver arm, the sword that never misses",
        "sphere": "Tuatha Dé",
        "note": "See also: Nudd and Lludd in Welsh tradition, and Nodens in Britain. These are probably the same figure."
      },
      {
        "name": "Ogma",
        "old": "Ogma",
        "parents": "Elatha (uncertain)",
        "siblings": "The Dagda (uncertain)",
        "offspring": "None known",
        "festivals": [
          "None attested"
        ],
        "domains": "Eloquence, writing, strength, the champion",
        "symbols": "Ogham, the script of notched lines",
        "sphere": "Tuatha Dé"
      },
      {
        "name": "Aengus",
        "old": "Óengus / Aengus Óg",
        "parents": "The Dagda and Boann",
        "siblings": "None known",
        "offspring": "None",
        "festivals": [
          "None attested"
        ],
        "domains": "Love, youth, poetry, beauty, music",
        "animals": "Birds (his kisses become birds), swans",
        "symbols": "Harp, the four birds that circle his head, his home at Brú na Bóinne",
        "sphere": "Tuatha Dé"
      },
      {
        "name": "Manannan",
        "old": "Manannán mac Lir",
        "parents": "Lir",
        "siblings": "None known",
        "offspring": "Mongan (uncertain)",
        "festivals": [
          "None attested"
        ],
        "domains": "Sea, mist, weather, the Otherworld, trade, shape-shifting",
        "animals": "Horse (Enbarr), swine of Manannán",
        "symbols": "Cloak of mist, boat Wave-sweeper, sword Fragarach",
        "sphere": "Tuatha Dé",
        "note": "See also: Manawydan in the Welsh tales, whose name and role resemble his. He is also tied to the Isle of Man."
      },
      {
        "name": "Dian Cecht",
        "old": "Dian Cécht",
        "parents": "Unknown",
        "siblings": "None known",
        "offspring": "Miach, Airmed, Cian (father of Lugh)",
        "festivals": [
          "None attested"
        ],
        "domains": "Healing, medicine",
        "symbols": "Well of Slane (a healing well), the silver arm",
        "plants": "Healing herbs (through his daughter Airmed)",
        "sphere": "Tuatha Dé"
      },
      {
        "name": "Goibniu",
        "old": "Goibniu",
        "parents": "Unknown",
        "siblings": "Credne and Luchta (uncertain)",
        "offspring": "None",
        "festivals": [
          "None attested"
        ],
        "domains": "Smithcraft, brewing, weapons",
        "symbols": "The forge, weapons that never miss, ale that grants youth",
        "sphere": "Tuatha Dé"
      },
      {
        "name": "Boann",
        "old": "Boand",
        "parents": "Unknown",
        "siblings": "None known",
        "offspring": "Aengus",
        "festivals": [
          "None attested"
        ],
        "domains": "River Boyne, fertility, wisdom",
        "animals": "Salmon (the salmon of wisdom)",
        "symbols": "The sacred well, hazelnuts of wisdom",
        "plants": "Hazel",
        "sphere": "Tuatha Dé"
      },
      {
        "name": "The Morrigan, Badb and Macha",
        "old": "Mórrígan, Badb, Macha",
        "parents": "Ernmas",
        "siblings": "Each other (three sisters), and others",
        "offspring": "None",
        "festivals": [
          "Samhain: the Morrigan is tied to this time through her meeting with the Dagda"
        ],
        "domains": "War, fate, sovereignty, prophecy, death",
        "animals": "Crow, raven, eel, wolf, cow",
        "symbols": "The washer at the ford (an omen of death), the cry of the battle-crow",
        "sphere": "Tuatha Dé",
        "note": "The three sisters sometimes appear as one goddess and sometimes as three. Which names belong to which are blurred in the sources (uncertain)."
      },
      {
        "name": "Eriu",
        "old": "Ériu",
        "parents": "Ernmas (uncertain)",
        "siblings": "Banba and Fodla",
        "offspring": "None",
        "festivals": [
          "None attested"
        ],
        "domains": "Sovereignty of Ireland, the land itself",
        "symbols": "The island of Ireland, which carries her name",
        "sphere": "Tuatha Dé",
        "note": "Ireland's name in Irish, Éire, comes from hers. She is one of three sister-goddesses of the land."
      },
      {
        "name": "Medb",
        "old": "Medb",
        "parents": "Eochaid Feidlech",
        "siblings": "Clothra, Eithne, Mugain (uncertain)",
        "offspring": "Findabair, and others",
        "festivals": [
          "None attested"
        ],
        "domains": "Sovereignty, war, power, intoxication",
        "symbols": "The cattle raid of the Tain, the throne of Tara",
        "sphere": "Tuatha Dé",
        "note": "More a legendary queen than a worshipped goddess. Scholars read her as a sovereignty figure, a land-goddess who \"marries\" kings."
      },
      {
        "name": "Aine",
        "old": "Áine",
        "parents": "Eogabail (uncertain)",
        "siblings": "None known",
        "offspring": "Gerald FitzGerald (by legend; uncertain)",
        "festivals": [
          "Midsummer Eve, June 23: torches carried around her hill at Knockainey (a folk custom recorded in later centuries)"
        ],
        "domains": "Summer, the sun, love, fertility, cattle, Munster",
        "animals": "Red mare",
        "symbols": "Midsummer torches, the hill of Cnoc Áine (Knockainey)",
        "sphere": "Tuatha Dé"
      }
    ]
  },
  {
    "id": "fomorians",
    "title": "Irish: the Fomorians",
    "intro": "The rival powers, older and wilder.",
    "gods": [
      {
        "name": "Balor",
        "old": "Balor",
        "parents": "Buarainech (uncertain)",
        "siblings": "None known",
        "offspring": "Ethniu (mother of Lugh)",
        "festivals": [
          "None attested"
        ],
        "domains": "Blight, death, the evil eye",
        "symbols": "A destructive eye that opens only in battle",
        "sphere": "Fomorian",
        "note": "Killed by his grandson Lugh, who put out the eye."
      },
      {
        "name": "Bres",
        "old": "Bres",
        "parents": "Elatha and Eriu",
        "siblings": "None known",
        "offspring": "Ruadan (with Brigid)",
        "festivals": [
          "None attested"
        ],
        "domains": "Beauty, land fertility, a king who proved to be a poor ruler",
        "sphere": "Fomorian",
        "note": "Half Fomorian and half Tuatha Dé. He was made king, then driven out for his stinginess."
      }
    ]
  },
  {
    "id": "welsh",
    "title": "Welsh",
    "intro": "Gods and figures of the Mabinogi and the poets.",
    "gods": [
      {
        "name": "Arawn",
        "old": "Arawn",
        "parents": "Unknown",
        "siblings": "None known",
        "offspring": "None",
        "festivals": [
          "None attested"
        ],
        "domains": "Annwn (the Otherworld), death, hunting",
        "animals": "Hounds of Annwn (white with red ears)",
        "sphere": "Welsh",
        "note": "In the first branch of the Mabinogi he swaps places with the mortal king Pwyll for a year."
      },
      {
        "name": "Pwyll",
        "old": "Pwyll",
        "parents": "Unknown",
        "siblings": "None known",
        "offspring": "Pryderi (with Rhiannon)",
        "festivals": [
          "None attested"
        ],
        "domains": "Lordship of Dyfed, otherworld bargains",
        "sphere": "Welsh"
      },
      {
        "name": "Rhiannon",
        "old": "Rhiannon",
        "parents": "Hyfaidd Hen",
        "siblings": "None known",
        "offspring": "Pryderi",
        "festivals": [
          "None attested"
        ],
        "domains": "Sovereignty, horses, the Otherworld, birds",
        "animals": "White horse, the birds of Rhiannon (which wake the dead and lull the living)",
        "sphere": "Welsh",
        "note": "See also: the Gaulish horse goddess Epona, whom she resembles."
      },
      {
        "name": "Bran the Blessed",
        "old": "Bran Fendigaid",
        "parents": "Llyr and Penarddun",
        "siblings": "Branwen, Manawydan, and half-brothers Efnisien and Nisien",
        "offspring": "Caradog (uncertain)",
        "festivals": [
          "None attested"
        ],
        "domains": "Kingship, giants, hospitality, prophecy",
        "symbols": "The cauldron of rebirth, his severed head that keeps speaking",
        "sphere": "Welsh"
      },
      {
        "name": "Branwen",
        "old": "Branwen",
        "parents": "Llyr and Penarddun",
        "siblings": "Bran, Manawydan, Efnisien, Nisien",
        "offspring": "Gwern",
        "festivals": [
          "None attested"
        ],
        "domains": "Love, sorrow, diplomacy",
        "animals": "Starling (she trains one to carry a message)",
        "sphere": "Welsh"
      },
      {
        "name": "Manawydan",
        "old": "Manawydan fab Llŷr",
        "parents": "Llyr and Penarddun",
        "siblings": "Bran, Branwen",
        "offspring": "None",
        "festivals": [
          "None attested"
        ],
        "domains": "Craft, patience, cunning",
        "symbols": "Shoemaking, the mouse he catches",
        "sphere": "Welsh",
        "note": "See also: Manannan mac Lir in Irish tradition."
      },
      {
        "name": "Math",
        "old": "Math fab Mathonwy",
        "parents": "Mathonwy",
        "siblings": "Don",
        "offspring": "None",
        "festivals": [
          "None attested"
        ],
        "domains": "Magic, kingship",
        "symbols": "His wand, the lap of the virgin footholder (he must keep his feet there in peacetime)",
        "sphere": "Welsh"
      },
      {
        "name": "Gwydion",
        "old": "Gwydion",
        "parents": "Don and Beli",
        "siblings": "Gilfaethwy, Arianrhod, Gofannon, Amaethon",
        "offspring": "Lleu (raised him), Dylan (raised by Arianrhod)",
        "festivals": [
          "None attested"
        ],
        "domains": "Magic, trickery, poetry, shape-shifting",
        "animals": "Swine (he steals Pryderi's pigs)",
        "plants": "Oak, broom and meadowsweet (the flowers he and Math use to make Blodeuwedd)",
        "sphere": "Welsh"
      },
      {
        "name": "Arianrhod",
        "old": "Arianrhod",
        "parents": "Don and Beli",
        "siblings": "Gwydion, Gilfaethwy, Gofannon, Amaethon",
        "offspring": "Dylan Eil Ton and Lleu Llaw Gyffes",
        "festivals": [
          "None attested"
        ],
        "domains": "Fertility, stars, sovereignty",
        "symbols": "The silver wheel (her fortress Caer Arianrhod is the Corona Borealis)",
        "sphere": "Welsh"
      },
      {
        "name": "Lleu Llaw Gyffes",
        "old": "Lleu Llaw Gyffes",
        "parents": "Arianrhod (father implied to be Gwydion; uncertain)",
        "siblings": "Dylan",
        "offspring": "None",
        "festivals": [
          "Lughnasadh (his Irish counterpart Lugh holds it; uncertain)"
        ],
        "domains": "Skill, light (his name means \"bright\"), kingship, death and rebirth",
        "animals": "Eagle (he becomes one after his wounding)",
        "symbols": "Spear",
        "sphere": "Welsh",
        "note": "See also: Lugh in Irish tradition."
      },
      {
        "name": "Ceridwen",
        "old": "Ceridwen",
        "parents": "Unknown",
        "siblings": "None known",
        "offspring": "Morfran (Afagddu) and Creirwy",
        "festivals": [
          "None attested"
        ],
        "domains": "Inspiration (awen), magic, transformation",
        "animals": "Sow (the \"white sow\"), hen",
        "symbols": "The cauldron of inspiration",
        "sphere": "Welsh",
        "note": "The best-known story about her, the making of Taliesin, comes from a late text of the 1500s."
      },
      {
        "name": "Gwyn ap Nudd",
        "old": "Gwyn ap Nudd",
        "parents": "Nudd",
        "siblings": "None known",
        "offspring": "None",
        "festivals": [
          "Calan Mai, May 1: he and Gwythyr fight each May Day until the end of time, for Creiddylad (Culhwch and Olwen)",
          "Calan Gaeaf, November 1: later folk tradition has the Wild Hunt ride"
        ],
        "domains": "The Otherworld, the dead, hunting, king of the fair folk",
        "animals": "Hounds, horse",
        "symbols": "The Wild Hunt",
        "sphere": "Welsh"
      },
      {
        "name": "Taliesin",
        "old": "Taliesin",
        "parents": "None; he is reborn from Ceridwen's cauldron (in the legend)",
        "siblings": "None",
        "offspring": "None",
        "festivals": [
          "None attested"
        ],
        "domains": "Poetry, prophecy, awen (inspiration)",
        "symbols": "The radiant brow (his name means \"shining brow\")",
        "sphere": "Welsh",
        "note": "Both a real 6th-century poet and a legendary figure. The legend of his birth is late."
      }
    ]
  },
  {
    "id": "other",
    "title": "Other Celtic",
    "intro": "Scottish, Gaulish and British figures, with a Roman overlay on many.",
    "gods": [
      {
        "name": "The Cailleach",
        "old": "Cailleach Bhéara",
        "parents": "Unknown",
        "siblings": "None known",
        "offspring": "Many; in folk tradition she is the mother of mountains and tribes",
        "festivals": [
          "Imbolc and Samhain: she gathers firewood to rule winter; a sunny Imbolc means a long winter (folk tradition, recorded in the 1800s)",
          "Beltane: her season ends as she turns to stone (folk tradition)"
        ],
        "domains": "Winter, weather, mountains, storms, the shaping of the land",
        "animals": "Deer, wild cattle, goats",
        "symbols": "Her hammer or staff, which freezes the ground",
        "plants": "Holly (modern association)",
        "sphere": "Irish and Scottish",
        "note": "Her stories were collected from folk tradition far later than the medieval texts."
      },
      {
        "name": "Cernunnos",
        "old": "Cernunnos",
        "parents": "Unknown",
        "siblings": "None known",
        "offspring": "None",
        "festivals": [
          "None attested"
        ],
        "domains": "Wild animals, forests, abundance, the underworld (uncertain)",
        "animals": "Stag, ram-headed serpent",
        "symbols": "Antlers, a torc, a bag or cornucopia of grain",
        "sphere": "Gaulish",
        "note": "His name survives on a single stone in Paris (1st century). Everything else about him is interpretation from similar images, such as the Gundestrup cauldron, which is a Danish find."
      },
      {
        "name": "Epona",
        "old": "Epona",
        "parents": "Unknown",
        "siblings": "None known",
        "offspring": "None",
        "festivals": [
          "December 18: her day in the Roman calendar"
        ],
        "domains": "Horses, mules, fertility, guardian of travelers",
        "animals": "Horse, dog, foal",
        "symbols": "Cornucopia, bowl",
        "sphere": "Gaulish",
        "note": "The only Celtic goddess worshipped widely in Rome. Roman cavalry carried her cult across the empire."
      },
      {
        "name": "Sulis",
        "old": "Sulis",
        "parents": "Unknown",
        "siblings": "None known",
        "offspring": "None",
        "festivals": [
          "None attested"
        ],
        "domains": "Healing, hot springs, justice and curses",
        "symbols": "The sacred spring at Bath (Aquae Sulis), curse tablets, a Roman-style Minerva statue",
        "sphere": "British",
        "note": "The Romans joined her with Minerva as Sulis Minerva. Visitors threw curse tablets into her spring."
      },
      {
        "name": "Belenus",
        "old": "Belenus",
        "parents": "Unknown",
        "siblings": "None known",
        "offspring": "None",
        "festivals": [
          "None attested"
        ],
        "domains": "Light, healing",
        "symbols": "A radiant sun, healing springs",
        "sphere": "Gaulish",
        "note": "The Romans called him Apollo Belenus. A link to the name Beltane is often claimed but is contested."
      },
      {
        "name": "Taranis",
        "old": "Taranis",
        "parents": "Unknown",
        "siblings": "None known",
        "offspring": "None",
        "festivals": [
          "None attested"
        ],
        "domains": "Thunder, the sky",
        "symbols": "The wheel and thunderbolt",
        "sphere": "Gaulish",
        "note": "A Roman poet, Lucan, mentions him in connection with human sacrifice (a Roman account, so treat with care)."
      },
      {
        "name": "Nodens",
        "old": "Nodens",
        "parents": "Unknown",
        "siblings": "None known",
        "offspring": "None",
        "festivals": [
          "None attested"
        ],
        "domains": "Healing, the sea, hunting, dogs",
        "animals": "Dog",
        "symbols": "Sea creatures in mosaics at his temple",
        "sphere": "British",
        "note": "His temple at Lydney Park in Gloucestershire dates to the 4th century. See also: Nuada and Nudd."
      },
      {
        "name": "Brigantia",
        "old": "Brigantia",
        "parents": "Unknown",
        "siblings": "None known",
        "offspring": "None",
        "festivals": [
          "None attested"
        ],
        "domains": "Sovereignty of the Brigantes, victory, water, healing",
        "symbols": "Wings, spear, shield",
        "sphere": "British",
        "note": "Her name means \"the High One\", and she is the goddess of a large tribe in northern Britain. She shares a name root with Brigid (uncertain link)."
      }
    ]
  }
];

  global.CelticData = { GROUPS };
})(typeof window !== "undefined" ? window : globalThis);
