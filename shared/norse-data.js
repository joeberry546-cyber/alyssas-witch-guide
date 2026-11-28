// Norse gods — full entries
// parents, siblings, offspring: strings; (contested) = sources disagree, (uncertain) = thin sourcing
// festivals: list of strings. Only three major sacrifices are firmly attested (Winter Nights, Yule, start of summer/Sigrblot); the rest are later or modern.
// old: Old Norse spelling. sphere: Aesir | Vanir | Jotun | Both.
(function (global) {
  const GROUPS = [
  {
    "id": "aesir",
    "title": "The Aesir",
    "open": true,
    "intro": "The gods of rule, law, war and sky, led by Odin. Tap a god.",
    "gods": [
      {
        "name": "Odin",
        "old": "Óðinn",
        "parents": "Bestla and Bor",
        "siblings": "Vili and Ve",
        "offspring": "Thor, Baldr, Vidar, Vali, and others",
        "festivals": [
          "Yule. Late folk tradition ties Odin to the Wild Hunt at midwinter."
        ],
        "domains": "Wisdom, poetry, war, death, magic and runes, kingship",
        "animals": "Ravens (Huginn and Muninn), wolves (Geri and Freki), the eight-legged horse Sleipnir",
        "symbols": "Spear Gungnir, ring Draupnir, a missing eye, hooded cloak and wide hat",
        "plants": "Ash (the world-tree Yggdrasil)",
        "day": "Wednesday (Woden's day) · Mercury",
        "sphere": "Aesir"
      },
      {
        "name": "Vili and Ve",
        "old": "Vili ok Vé",
        "parents": "Bestla and Bor",
        "siblings": "Odin",
        "offspring": "None known",
        "festivals": [
          "None attested"
        ],
        "domains": "Will and intellect (Vili), sacred space and the senses (Ve); shaping the world and making humans",
        "sphere": "Aesir",
        "sphereNote": "With Odin they kill the giant Ymir and build the world from his body, then give the first humans their gifts. Often thought to be aspects of Odin. Some scholars link them to Hoenir and Lodur from the Voluspa (uncertain)."
      },
      {
        "name": "Frigg",
        "old": "Frigg",
        "parents": "Fjorgyn (uncertain)",
        "siblings": "None known",
        "offspring": "Baldr, and Hermod (uncertain)",
        "festivals": [
          "None attested"
        ],
        "domains": "Marriage, motherhood, foresight, the household",
        "animals": "Falcon (her feather cloak)",
        "symbols": "Distaff and spindle, keys",
        "day": "Friday (Frigg's day, shared with Freya) · Venus",
        "sphere": "Aesir"
      },
      {
        "name": "Thor",
        "old": "Þórr",
        "parents": "Odin and Jord",
        "siblings": "Half-siblings through Odin",
        "offspring": "Magni, Modi, Thrud",
        "festivals": [
          "Thorrablot: the month of Thorri (late January to February). The modern Icelandic Thorrablot is a 19th-century revival."
        ],
        "domains": "Thunder, storms, protection of Midgard, strength, oaths",
        "animals": "Goats (Tanngrisnir and Tanngnjostr)",
        "symbols": "Hammer Mjolnir, belt Megingjord, iron gloves",
        "plants": "Rowan (a folk tradition says it saved him); oak (later association, uncertain)",
        "day": "Thursday (Thor's day) · Jupiter",
        "sphere": "Aesir"
      },
      {
        "name": "Sif",
        "old": "Sif",
        "parents": "Unknown",
        "siblings": "None known",
        "offspring": "Thrud, and Ullr (her son from an earlier marriage)",
        "festivals": [
          "None attested"
        ],
        "domains": "Grain, harvest, golden hair",
        "symbols": "Her golden hair (replaced by the dwarves after Loki cut it), wheat",
        "plants": "Wheat and grain",
        "sphere": "Aesir"
      },
      {
        "name": "Baldr",
        "old": "Baldr",
        "parents": "Odin and Frigg",
        "siblings": "Hod, and half-siblings through Odin",
        "offspring": "Forseti",
        "festivals": [
          "None attested"
        ],
        "domains": "Light, beauty, peace",
        "symbols": "Mistletoe (it killed him), the ship Hringhorni",
        "plants": "Mistletoe; \"Baldr's brow\" (a folk name for scentless mayweed)",
        "sphere": "Aesir"
      },
      {
        "name": "Tyr",
        "old": "Týr",
        "parents": "Hymir (a giant), or Odin (contested)",
        "siblings": "None known",
        "offspring": "None",
        "festivals": [
          "None attested"
        ],
        "domains": "Law, justice, oaths, war, the assembly (thing)",
        "animals": "Wolf (Fenrir bit off his hand)",
        "symbols": "His one hand, the Tiwaz rune",
        "day": "Tuesday (Tyr's day) · Mars",
        "sphere": "Aesir"
      },
      {
        "name": "Heimdall",
        "old": "Heimdallr",
        "parents": "Nine mothers who are sisters (father unnamed; Odin in later sources, uncertain)",
        "siblings": "None known",
        "offspring": "The three classes of humankind (uncertain)",
        "festivals": [
          "None attested"
        ],
        "domains": "Watchman, guardian of the bridge Bifrost, foresight",
        "animals": "Rams (a poetic name for him)",
        "symbols": "Horn Gjallarhorn, golden teeth",
        "sphere": "Aesir"
      },
      {
        "name": "Bragi",
        "old": "Bragi",
        "parents": "Odin and Gunnlod (uncertain)",
        "siblings": "Half-siblings through Odin",
        "offspring": "None",
        "festivals": [
          "A cup was drunk in his name at funeral feasts (the Bragafull)"
        ],
        "domains": "Poetry, eloquence, skaldic verse",
        "symbols": "Harp, runes carved on his tongue",
        "sphere": "Aesir"
      },
      {
        "name": "Idunn",
        "old": "Iðunn",
        "parents": "Ivaldi, a dwarf (uncertain)",
        "siblings": "None known",
        "offspring": "None",
        "festivals": [
          "None attested"
        ],
        "domains": "Youth, renewal",
        "symbols": "Apples, a basket of them",
        "plants": "Apple",
        "sphere": "Aesir"
      },
      {
        "name": "Loki",
        "old": "Loki",
        "parents": "Farbauti and Laufey",
        "siblings": "Helblindi and Byleistr",
        "offspring": "Hel, Fenrir, Jormungandr, Sleipnir (as the mother, in horse form)",
        "festivals": [
          "None attested"
        ],
        "domains": "Trickery, shape-shifting, change, mischief",
        "animals": "His shapes include a mare, salmon, falcon and fly",
        "symbols": "The fishing net",
        "sphere": "Aesir",
        "sphereNote": "Born a giant, counted among the Aesir. Modern fire associations are late."
      },
      {
        "name": "Hod",
        "old": "Höðr",
        "parents": "Odin and Frigg",
        "siblings": "Baldr",
        "offspring": "None",
        "festivals": [
          "None attested"
        ],
        "domains": "Darkness, blindness",
        "symbols": "The mistletoe dart",
        "sphere": "Aesir"
      },
      {
        "name": "Vidar",
        "old": "Víðarr",
        "parents": "Odin and Grid",
        "siblings": "Half-siblings through Odin",
        "offspring": "None",
        "festivals": [
          "None attested"
        ],
        "domains": "Silence, vengeance, survival after Ragnarok",
        "symbols": "A thick shoe, a spear or sword",
        "sphere": "Aesir"
      },
      {
        "name": "Vali",
        "old": "Váli",
        "parents": "Odin and Rind",
        "siblings": "Half-siblings through Odin",
        "offspring": "None",
        "festivals": [
          "None attested"
        ],
        "domains": "Vengeance, survival after Ragnarok",
        "sphere": "Aesir",
        "sphereNote": "A different Vali from Loki's son."
      },
      {
        "name": "Forseti",
        "old": "Forseti",
        "parents": "Baldr and Nanna",
        "siblings": "None known",
        "offspring": "None",
        "festivals": [
          "None attested"
        ],
        "domains": "Justice, mediation of disputes",
        "symbols": "A golden axe",
        "sphere": "Aesir"
      }
    ]
  },
  {
    "id": "vanir",
    "title": "The Vanir",
    "intro": "Gods of fertility, wealth, the sea and the earth's abundance.",
    "gods": [
      {
        "name": "Freya",
        "old": "Freyja",
        "parents": "Njord and his sister (unnamed)",
        "siblings": "Freyr",
        "offspring": "Hnoss and Gersemi",
        "festivals": [
          "None attested. Modern practice honors her at Winter Nights (a modern association)."
        ],
        "domains": "Love, beauty, fertility, magic (seiðr), war and death (she takes half the slain), gold",
        "animals": "Cats (they draw her chariot), the boar Hildisvini",
        "symbols": "Necklace Brisingamen, a falcon-feather cloak, the chariot",
        "day": "Friday (shared with Frigg) · Venus",
        "sphere": "Vanir"
      },
      {
        "name": "Freyr",
        "old": "Freyr",
        "parents": "Njord and his sister (unnamed)",
        "siblings": "Freya",
        "offspring": "Fjolnir",
        "festivals": [
          "Yule: an oath was sworn on a sacred boar",
          "Freyfaxi: a harvest rite known from one saga; modern Heathens hold it around the end of summer"
        ],
        "domains": "Fertility, peace, sunshine, harvest, rain, kingship",
        "animals": "Boar Gullinbursti, horses",
        "symbols": "Ship Skidbladnir, a sword that fights on its own",
        "plants": "Grain",
        "sphere": "Vanir"
      },
      {
        "name": "Njord",
        "old": "Njörðr",
        "parents": "Unknown",
        "siblings": "His sister (unnamed)",
        "offspring": "Freyr, Freya",
        "festivals": [
          "None attested"
        ],
        "domains": "Sea, wind, ships, fishing, wealth",
        "symbols": "Noatun (\"ship-haven\")",
        "sphere": "Vanir",
        "sphereNote": "Came to the Aesir as a hostage at the end of the war."
      },
      {
        "name": "Gullveig",
        "old": "Gullveig",
        "parents": "Unknown",
        "siblings": "None known",
        "offspring": "None",
        "festivals": [
          "None attested"
        ],
        "domains": "Gold, sorcery, the spark of the first war",
        "sphere": "Vanir",
        "sphereNote": "Often identified with Freya (contested)."
      },
      {
        "name": "Kvasir",
        "old": "Kvasir",
        "parents": "None; made from the spit of both families",
        "siblings": "None",
        "offspring": "None",
        "festivals": [
          "None attested"
        ],
        "domains": "Wisdom, poetry (the mead of poetry was brewed from his blood)",
        "sphere": "Both",
        "sphereNote": "Created when the Aesir and Vanir made peace."
      }
    ]
  },
  {
    "id": "other",
    "title": "Giants and other powers",
    "intro": "Giants, the dead, the fates and the creatures of Yggdrasil.",
    "gods": [
      {
        "name": "Hel",
        "old": "Hel",
        "parents": "Loki and Angrboda",
        "siblings": "Fenrir, Jormungandr",
        "offspring": "None",
        "festivals": [
          "None attested"
        ],
        "domains": "The dead who did not die in battle, her realm Helheim",
        "animals": "Garm (a hound at the gate)",
        "symbols": "A face half living and half corpse-colored"
      },
      {
        "name": "Ran",
        "old": "Rán",
        "parents": "Unknown",
        "siblings": "None known",
        "offspring": "Nine daughters (the waves)",
        "festivals": [
          "None attested"
        ],
        "domains": "The drowned, the sea",
        "symbols": "The net",
        "sphere": "Jotun"
      },
      {
        "name": "Aegir",
        "old": "Ægir",
        "parents": "Unknown",
        "siblings": "Logi and Kari (uncertain)",
        "offspring": "Nine wave-daughters",
        "festivals": [
          "None attested"
        ],
        "domains": "Sea, brewing, hospitality (he hosts the gods' feasts)",
        "symbols": "The great cauldron",
        "sphere": "Jotun"
      },
      {
        "name": "Skadi",
        "old": "Skaði",
        "parents": "Thjazi (a giant)",
        "siblings": "None known",
        "offspring": "None attested (Odin is named as her partner in one account; contested)",
        "festivals": [
          "None attested. Modern practice honors her in late winter."
        ],
        "domains": "Winter, skiing, hunting, mountains",
        "animals": "Wolf (a modern association, uncertain)",
        "symbols": "Skis and bow",
        "sphere": "Jotun"
      },
      {
        "name": "Mimir",
        "old": "Mímir",
        "parents": "Bolthorn (uncertain)",
        "siblings": "Bestla (uncertain)",
        "offspring": "None",
        "festivals": [
          "None attested"
        ],
        "domains": "Wisdom, memory",
        "symbols": "The well of Mimir, his severed head that Odin consults"
      },
      {
        "name": "The Norns (Urd, Verdandi, Skuld)",
        "old": "Nornir",
        "parents": "Unknown",
        "siblings": "Each other",
        "offspring": "None",
        "festivals": [
          "None attested"
        ],
        "domains": "Fate, time, the roots of Yggdrasil",
        "animals": "Swans (the first swans live at Urd's well)",
        "symbols": "The well of Urd, the threads of fate",
        "plants": "Yggdrasil"
      },
      {
        "name": "The Valkyries",
        "old": "Valkyrjur",
        "parents": "Various",
        "siblings": "Each other",
        "offspring": "None",
        "festivals": [
          "None attested"
        ],
        "domains": "Choosers of the slain, battle",
        "animals": "Ravens, wolves, horses",
        "symbols": "Spear, shield, helmet, swan-feather cloaks"
      },
      {
        "name": "Jormungandr",
        "old": "Jörmungandr",
        "parents": "Loki and Angrboda",
        "siblings": "Fenrir, Hel",
        "offspring": "None",
        "festivals": [
          "None attested"
        ],
        "domains": "The sea around Midgard, Thor's enemy at Ragnarok",
        "animals": "Serpent"
      },
      {
        "name": "Fenrir",
        "old": "Fenrir",
        "parents": "Loki and Angrboda",
        "siblings": "Jormungandr, Hel",
        "offspring": "Skoll and Hati (uncertain)",
        "festivals": [
          "None attested"
        ],
        "domains": "Ragnarok, binding",
        "animals": "Wolf",
        "symbols": "The chain Gleipnir"
      },
      {
        "name": "Ratatoskr",
        "old": "Ratatoskr",
        "parents": "Unknown",
        "siblings": "None known",
        "offspring": "None",
        "festivals": [
          "None attested"
        ],
        "domains": "Messenger carrying insults between the eagle atop Yggdrasil and the serpent Nidhogg at its roots",
        "animals": "Squirrel",
        "symbols": "Yggdrasil",
        "note": "His name is often glossed as \"drill-tooth\" (uncertain)."
      }
    ]
  }
];

  global.NorseData = { GROUPS };
})(typeof window !== "undefined" ? window : globalThis);
