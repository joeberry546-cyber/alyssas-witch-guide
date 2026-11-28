// Other pantheons — basic entries
// parents, siblings, offspring: strings; (uncertain) = thin sourcing; (contested) = sources disagree
// festivals: list of strings (dates approximate unless stated). old: native or alternate name. sphere: pill label (Aztec | Maya | Avatar).
(function (global) {
  const GROUPS = [
  {
    "id": "egypt",
    "title": "Egyptian",
    "open": true,
    "intro": "The gods of ancient Egypt, from about 3000 BCE. Names are shown with Egyptian transliterations where they differ.",
    "gods": [
      {
        "name": "Ra",
        "parents": "Self-created",
        "siblings": "",
        "offspring": "Shu and Tefnut; Hathor, Bastet and Sekhmet (as daughters, or Eyes of Ra)",
        "domains": "Sun, creation, kingship",
        "festivals": [],
        "animals": "Falcon, scarab beetle (as the morning sun)",
        "symbols": "Solar disk, the Eye of Ra, the sun barque",
        "note": "Often merged with Amun as Amun-Ra."
      },
      {
        "name": "Amun",
        "parents": "Unknown",
        "siblings": "",
        "offspring": "Khonsu (with Mut)",
        "domains": "The hidden or invisible, air, kingship, Thebes",
        "festivals": [
          "Opet Festival: his statue was carried from Karnak to Luxor in the flood season (about August to September)"
        ],
        "old": "Imen",
        "animals": "Ram, goose",
        "symbols": "Double-plumed crown"
      },
      {
        "name": "Osiris",
        "parents": "Geb and Nut",
        "siblings": "Isis, Set, Nephthys",
        "offspring": "Horus (with Isis), Anubis (with Nephthys, in some accounts)",
        "domains": "Death, resurrection, the afterlife, vegetation, kingship",
        "festivals": [
          "Khoiak festival: the mysteries of Osiris at Abydos, in the last month of the flood season (about November)"
        ],
        "old": "Wsir",
        "symbols": "Crook and flail, the atef crown, green skin",
        "note": "Killed and dismembered by Set, then restored by Isis."
      },
      {
        "name": "Isis",
        "parents": "Geb and Nut",
        "siblings": "Osiris, Set, Nephthys",
        "offspring": "Horus",
        "domains": "Magic, motherhood, healing, protection, kingship",
        "festivals": [
          "Navigium Isidis, March 5: a Roman-era procession launching a ship in her honor"
        ],
        "old": "Aset",
        "animals": "Kite, scorpion",
        "symbols": "Throne headdress, the tyet knot, outstretched wings"
      },
      {
        "name": "Horus",
        "parents": "Osiris and Isis",
        "siblings": "",
        "offspring": "The four sons of Horus (Imsety, Hapi, Duamutef, Qebehsenuef)",
        "domains": "Sky, kingship, protection, vengeance",
        "festivals": [],
        "old": "Heru",
        "animals": "Falcon",
        "symbols": "The Eye of Horus (wedjat), the double crown"
      },
      {
        "name": "Set",
        "parents": "Geb and Nut",
        "siblings": "Osiris, Isis, Nephthys",
        "offspring": "Anubis (in some accounts)",
        "domains": "Storms, desert, chaos, foreigners, strength",
        "festivals": [],
        "old": "Seth",
        "animals": "The \"Set animal\" (unidentified), donkey",
        "symbols": "The was-scepter"
      },
      {
        "name": "Nephthys",
        "parents": "Geb and Nut",
        "siblings": "Osiris, Isis, Set",
        "offspring": "Anubis (in some accounts)",
        "domains": "Mourning, the night, protection of the dead",
        "festivals": [],
        "old": "Nebet-het",
        "animals": "Kite",
        "symbols": "The house-and-basket hieroglyph that spells her name"
      },
      {
        "name": "Thoth",
        "parents": "Uncertain (accounts differ)",
        "siblings": "",
        "offspring": "None",
        "domains": "Writing, wisdom, the moon, magic, judgment",
        "festivals": [
          "The first month of the Egyptian civil year was named for him (about September)"
        ],
        "old": "Djehuty",
        "animals": "Ibis, baboon",
        "symbols": "Writing palette and reed pen, the moon disc"
      },
      {
        "name": "Anubis",
        "parents": "Osiris and Nephthys (later accounts)",
        "siblings": "",
        "offspring": "Kebechet (in some accounts)",
        "domains": "Embalming, cemeteries, guide of the dead, weighing of the heart",
        "festivals": [],
        "old": "Inpu",
        "animals": "Jackal",
        "symbols": "The scales, the embalming table"
      },
      {
        "name": "Hathor",
        "parents": "Ra",
        "siblings": "",
        "offspring": "Ihy (with Horus)",
        "domains": "Love, music, dance, joy, motherhood, the sky",
        "festivals": [
          "Festival of Drunkenness: celebrated for Hathor and Sekhmet in the first month of the year",
          "Beautiful Meeting: her annual visit to Horus at Edfu"
        ],
        "old": "Hwt-Hr",
        "animals": "Cow",
        "symbols": "Sistrum, menat necklace, mirror"
      },
      {
        "name": "Bastet",
        "parents": "Ra",
        "siblings": "",
        "offspring": "Mihos (the lion god)",
        "domains": "Cats, protection of the home, fertility, joy, perfume",
        "festivals": [
          "Festival at Bubastis, her city, which Herodotus described as a huge, joyful gathering"
        ],
        "old": "Bast",
        "animals": "Cat, lioness",
        "symbols": "Sistrum, an ointment jar"
      },
      {
        "name": "Sekhmet",
        "parents": "Ra",
        "siblings": "",
        "offspring": "Nefertum (with Ptah)",
        "domains": "War, plague and healing, vengeance",
        "festivals": [
          "Festival of Drunkenness: red beer was offered to appease her (shared with Hathor)"
        ],
        "old": "Sekhmet",
        "animals": "Lioness",
        "symbols": "Sun disk, red linen",
        "note": "Her name means \"the powerful one.\""
      },
      {
        "name": "Ptah",
        "parents": "Self-created (in the Memphite account)",
        "siblings": "",
        "offspring": "Nefertum (with Sekhmet)",
        "domains": "Craftsmen, creation by speech, architecture, Memphis",
        "festivals": [],
        "old": "Ptah",
        "animals": "Apis bull (his living form)",
        "symbols": "The was-staff, the djed pillar"
      },
      {
        "name": "Maat",
        "parents": "Ra",
        "siblings": "",
        "offspring": "None",
        "domains": "Truth, order, balance, justice",
        "festivals": [],
        "old": "Maʿat",
        "symbols": "Ostrich feather, scales (the heart is weighed against her feather)"
      }
    ]
  },
  {
    "id": "mesopotamia",
    "title": "Mesopotamian",
    "intro": "Sumerian, Akkadian and Babylonian gods. Many have two names: Sumerian first, Akkadian beside it.",
    "gods": [
      {
        "name": "Anu",
        "parents": "Anshar and Kishar (Babylonian)",
        "siblings": "",
        "offspring": "Enlil (in some accounts), Inanna (in some accounts), the Anunnaki",
        "domains": "Sky, heaven, king of the gods",
        "festivals": [],
        "old": "An (Sumerian)",
        "symbols": "Horned crown"
      },
      {
        "name": "Enlil",
        "parents": "An and Ki (Sumerian)",
        "siblings": "",
        "offspring": "Nanna, Ninurta",
        "domains": "Wind, storms, kingship, fate",
        "festivals": [],
        "symbols": "Horned crown, his temple Ekur at Nippur"
      },
      {
        "name": "Enki",
        "parents": "An and Nammu (Sumerian)",
        "siblings": "",
        "offspring": "Marduk",
        "domains": "Fresh water, wisdom, magic, craft, creator of humans",
        "festivals": [],
        "old": "Ea (Akkadian)",
        "animals": "Goat-fish, fish",
        "symbols": "Flowing streams, the Abzu (freshwater deep)"
      },
      {
        "name": "Inanna",
        "parents": "Nanna and Ningal (Sumerian); An in some accounts",
        "siblings": "Utu, Ereshkigal",
        "offspring": "None",
        "domains": "Love, war, beauty, sexuality, political power",
        "festivals": [
          "Sacred marriage rite: the king and Inanna were united at the New Year (Sumerian)"
        ],
        "old": "Ishtar (Akkadian)",
        "animals": "Lion, dove",
        "symbols": "Eight-pointed star, rosette, the reed gatepost",
        "note": "Her Descent to the Underworld is one of the oldest known myths."
      },
      {
        "name": "Ereshkigal",
        "parents": "Unknown",
        "siblings": "Inanna",
        "offspring": "Namtar (in some accounts)",
        "domains": "The underworld, the dead",
        "festivals": [],
        "old": "Ereshkigal",
        "symbols": "The realm of Kur, the throne of the underworld",
        "note": "The Burney Relief is sometimes linked to her (contested)."
      },
      {
        "name": "Dumuzi",
        "parents": "Duttur",
        "siblings": "Geshtinanna",
        "offspring": "None",
        "domains": "Shepherds, fertility, seasonal death and return",
        "festivals": [
          "Summer lament for Tammuz, about June to July"
        ],
        "old": "Tammuz (Akkadian)",
        "animals": "Sheep, goat",
        "symbols": "The shepherd's crook"
      },
      {
        "name": "Utu",
        "parents": "Nanna and Ningal",
        "siblings": "Inanna, Ereshkigal",
        "offspring": "None",
        "domains": "Sun, justice, truth",
        "festivals": [],
        "old": "Shamash (Akkadian)",
        "symbols": "Sun disk, a saw-toothed blade"
      },
      {
        "name": "Nanna",
        "parents": "Enlil and Ninlil",
        "siblings": "",
        "offspring": "Utu, Inanna",
        "domains": "Moon, time, calendars",
        "festivals": [],
        "old": "Sin (Akkadian)",
        "animals": "Bull",
        "symbols": "Crescent moon, the ziggurat at Ur"
      },
      {
        "name": "Marduk",
        "parents": "Ea and Damkina",
        "siblings": "",
        "offspring": "Nabu",
        "domains": "Kingship, Babylon, justice, magic, victory over chaos",
        "festivals": [
          "Akitu: the 12-day Babylonian New Year festival, in the spring (about March to April), with the Enuma Elish recited"
        ],
        "old": "Marduk",
        "animals": "The mushhushshu (dragon-serpent)",
        "symbols": "The spade"
      },
      {
        "name": "Tiamat",
        "parents": "Primordial",
        "siblings": "",
        "offspring": "Kingu, monsters",
        "domains": "The salt sea, primordial chaos, mother of the gods",
        "festivals": [
          "Akitu: the story of her defeat was recited at the New Year festival"
        ],
        "old": "Tiamat",
        "animals": "Dragon or serpent forms"
      }
    ]
  },
  {
    "id": "mesoamerica",
    "title": "Mesoamerican",
    "intro": "Aztec (Nahua) and Maya gods. Much of what we know about the Aztec comes from Spanish chroniclers.",
    "gods": [
      {
        "name": "Quetzalcoatl",
        "parents": "Mixcoatl and Chimalma (in one tradition; contested)",
        "siblings": "Tezcatlipoca and others",
        "offspring": "None",
        "domains": "Wind, learning, the priesthood, creation of humans, the morning star",
        "festivals": [],
        "old": "Quetzalcoatl",
        "animals": "Feathered serpent, quetzal bird",
        "symbols": "Wind jewel, conch",
        "sphere": "Aztec"
      },
      {
        "name": "Tezcatlipoca",
        "parents": "Unknown",
        "siblings": "Quetzalcoatl, Huitzilopochtli, Xipe Totec",
        "offspring": "None",
        "domains": "Night sky, fate, sorcery, kings, obsidian",
        "festivals": [],
        "old": "Tezcatlipoca",
        "animals": "Jaguar",
        "symbols": "The smoking mirror, a missing foot",
        "sphere": "Aztec"
      },
      {
        "name": "Huitzilopochtli",
        "parents": "Coatlicue",
        "siblings": "Coyolxauhqui and the 400 brothers",
        "offspring": "None",
        "domains": "Sun, war, patron of Tenochtitlan",
        "festivals": [
          "Panquetzaliztli: his festival, about late November to December (from Spanish chroniclers; approximate)"
        ],
        "old": "Huitzilopochtli",
        "animals": "Hummingbird, eagle",
        "symbols": "The turquoise fire-serpent Xiuhcoatl",
        "sphere": "Aztec"
      },
      {
        "name": "Tlaloc",
        "parents": "Unknown",
        "siblings": "",
        "offspring": "The Tlaloques (rain helpers)",
        "domains": "Rain, lightning, mountains, fertility",
        "festivals": [
          "Atlcahualo (about February) and Etzalcualiztli (about June): rain festivals (from Spanish chroniclers; approximate)"
        ],
        "old": "Tlaloc",
        "animals": "Jaguar, frog",
        "symbols": "Goggle eyes and fangs",
        "sphere": "Aztec",
        "note": "His wife is Chalchiuhtlicue, goddess of rivers and lakes."
      },
      {
        "name": "Coatlicue",
        "parents": "Unknown",
        "siblings": "",
        "offspring": "Huitzilopochtli, Coyolxauhqui, the 400 brothers",
        "domains": "Earth, motherhood, life and death",
        "festivals": [],
        "old": "Coatlicue",
        "animals": "Serpents",
        "symbols": "A skirt of serpents, a necklace of hands and hearts",
        "sphere": "Aztec"
      },
      {
        "name": "Xipe Totec",
        "parents": "Unknown",
        "siblings": "Tezcatlipoca and others",
        "offspring": "None",
        "domains": "Spring, renewal, goldsmiths",
        "festivals": [
          "Tlacaxipehualiztli: a spring festival, about March (from Spanish chroniclers; approximate)"
        ],
        "old": "Xipe Totec",
        "symbols": "Flayed skin worn as a garment, symbolizing new growth",
        "sphere": "Aztec"
      },
      {
        "name": "Mictlantecuhtli",
        "parents": "Unknown",
        "siblings": "",
        "offspring": "None",
        "domains": "The dead, Mictlan (the lowest underworld)",
        "festivals": [],
        "old": "Mictlantecuhtli",
        "animals": "Spider, owl, bat",
        "symbols": "Skull face, bone adornments",
        "sphere": "Aztec",
        "note": "His wife is Mictecacihuatl."
      },
      {
        "name": "Xochiquetzal",
        "parents": "Unknown",
        "siblings": "",
        "offspring": "None",
        "domains": "Flowers, beauty, love, craft, pleasure",
        "festivals": [],
        "old": "Xochiquetzal",
        "animals": "Butterfly",
        "symbols": "Flowers, feathers",
        "sphere": "Aztec"
      },
      {
        "name": "Itzamna",
        "parents": "Unknown",
        "siblings": "",
        "offspring": "None",
        "domains": "Creation, writing, medicine, the sky",
        "festivals": [],
        "old": "Itzamná",
        "symbols": "An aged face, a book",
        "sphere": "Maya"
      },
      {
        "name": "Ixchel",
        "parents": "Unknown",
        "siblings": "",
        "offspring": "None",
        "domains": "Moon, childbirth, medicine, weaving, water",
        "festivals": [],
        "old": "Ixchel",
        "animals": "Rabbit, serpent",
        "symbols": "A water jar, a serpent headdress",
        "sphere": "Maya",
        "note": "Pilgrims journeyed to her shrine on the island of Cozumel."
      },
      {
        "name": "Chaac",
        "parents": "Unknown",
        "siblings": "",
        "offspring": "None",
        "domains": "Rain, lightning, thunder, agriculture",
        "festivals": [],
        "old": "Chaac",
        "animals": "Frog",
        "symbols": "A lightning axe, a serpent",
        "sphere": "Maya"
      }
    ]
  },
  {
    "id": "hindu",
    "title": "Hindu",
    "intro": "A living tradition. These are a few of the best-known deities, with festival names where they are widely observed.",
    "gods": [
      {
        "name": "Brahma",
        "parents": "Self-born, from a lotus on Vishnu's navel",
        "siblings": "",
        "offspring": "None",
        "domains": "Creation",
        "festivals": [
          "Pushkar Fair: at his rare temple, around the full moon of Kartik (October to November)"
        ],
        "old": "ब्रह्मा",
        "animals": "Hamsa (swan or goose)",
        "symbols": "Lotus, four faces, the Vedas, a rosary",
        "note": "Few temples honor him compared to Vishnu or Shiva."
      },
      {
        "name": "Vishnu",
        "parents": "None; he exists beyond origin",
        "siblings": "",
        "offspring": "Lakshmi is his consort; Brahma springs from his navel in some accounts",
        "domains": "Preservation, protection, cosmic order (dharma)",
        "festivals": [
          "Vaikuntha Ekadashi: a major fast day, about December to January"
        ],
        "old": "विष्णु",
        "animals": "Garuda (eagle), the serpent Shesha",
        "symbols": "Conch, discus, mace, lotus",
        "note": "Takes ten principal forms (avatars), including Rama and Krishna."
      },
      {
        "name": "Shiva",
        "parents": "None; self-existent",
        "siblings": "",
        "offspring": "Ganesha and Kartikeya (with Parvati)",
        "domains": "Destruction and renewal, yoga, asceticism, dance",
        "festivals": [
          "Maha Shivaratri: the great night of Shiva, about February to March"
        ],
        "old": "शिव",
        "animals": "Nandi the bull, the serpent",
        "symbols": "Trident, third eye, crescent moon, the lingam, the damaru drum"
      },
      {
        "name": "Parvati",
        "parents": "Himavan and Mena",
        "siblings": "",
        "offspring": "Ganesha and Kartikeya (with Shiva)",
        "domains": "Love, devotion, power, motherhood",
        "festivals": [
          "Navaratri: nine nights of the goddess, about September to October",
          "Teej: a monsoon festival for women (about July to August)"
        ],
        "old": "पार्वती",
        "animals": "Lion, tiger",
        "symbols": "Lotus",
        "note": "Durga and Kali are often seen as her fierce forms."
      },
      {
        "name": "Durga",
        "parents": "A form of the Goddess (Shakti); often called a form of Parvati",
        "siblings": "",
        "offspring": "None",
        "domains": "Protection, the warrior goddess, victory over the buffalo-demon Mahishasura",
        "festivals": [
          "Durga Puja and Navaratri: about September to October"
        ],
        "old": "दुर्गा",
        "animals": "Lion, tiger",
        "symbols": "Many arms holding weapons, trident"
      },
      {
        "name": "Kali",
        "parents": "A form of the Goddess (Shakti)",
        "siblings": "",
        "offspring": "None",
        "domains": "Time, death, destruction of evil, liberation",
        "festivals": [
          "Kali Puja: on the new moon of the Diwali season, about October to November"
        ],
        "old": "काली",
        "animals": "Jackal",
        "symbols": "Garland of skulls, a sword, her tongue stretched out",
        "note": "Fierce and loving at once; devotees see her as a mother."
      },
      {
        "name": "Lakshmi",
        "parents": "Born of the churning of the ocean (in the best-known story)",
        "siblings": "",
        "offspring": "None",
        "domains": "Wealth, prosperity, fortune, beauty",
        "festivals": [
          "Diwali: the festival of lights, about October to November, with Lakshmi Puja"
        ],
        "old": "लक्ष्मी",
        "animals": "Owl, elephants",
        "symbols": "Lotus, gold coins"
      },
      {
        "name": "Saraswati",
        "parents": "Unknown; sometimes called the daughter or wife of Brahma (contested)",
        "siblings": "",
        "offspring": "None",
        "domains": "Knowledge, music, the arts, speech",
        "festivals": [
          "Vasant Panchami: the spring festival, about January to February"
        ],
        "old": "सरस्वती",
        "animals": "Hamsa (swan), peacock",
        "symbols": "The veena, a book, a lotus"
      },
      {
        "name": "Ganesha",
        "parents": "Shiva and Parvati",
        "siblings": "Kartikeya",
        "offspring": "None",
        "domains": "Beginnings, removing obstacles, wisdom, writing",
        "festivals": [
          "Ganesh Chaturthi: about August to September"
        ],
        "old": "गणेश",
        "animals": "Mouse (Mushika)",
        "symbols": "Elephant head, broken tusk, a modak sweet, an axe"
      },
      {
        "name": "Hanuman",
        "parents": "Anjana and Kesari, with the wind god Vayu as a spiritual father",
        "siblings": "",
        "offspring": "None",
        "domains": "Devotion, strength, courage, service",
        "festivals": [
          "Hanuman Jayanti: about March to April"
        ],
        "old": "हनुमान",
        "animals": "Monkey",
        "symbols": "Mace, the mountain he carried"
      },
      {
        "name": "Krishna",
        "parents": "Devaki and Vasudeva (raised by Yashoda and Nanda)",
        "siblings": "Balarama",
        "offspring": "None",
        "domains": "Love, compassion, divine play, the teachings of the Bhagavad Gita",
        "festivals": [
          "Janmashtami: his birthday, about August to September"
        ],
        "old": "कृष्ण",
        "animals": "Cow, peacock",
        "symbols": "Flute, peacock feather",
        "sphere": "Avatar",
        "note": "An avatar of Vishnu."
      },
      {
        "name": "Rama",
        "parents": "Dasharatha and Kausalya",
        "siblings": "Lakshmana, Bharata, Shatrughna",
        "offspring": "Lava and Kusha",
        "domains": "Righteousness, the ideal king",
        "festivals": [
          "Rama Navami: his birthday, about March to April",
          "Diwali and Dussehra: tied to his story, about September to November"
        ],
        "old": "राम",
        "symbols": "Bow and arrows",
        "sphere": "Avatar",
        "note": "An avatar of Vishnu."
      }
    ]
  },
  {
    "id": "canaanite",
    "title": "Canaanite",
    "intro": "Gods known mainly from the texts found at Ugarit (modern Syria), written around the 1200s BCE.",
    "gods": [
      {
        "name": "El",
        "parents": "Unknown",
        "siblings": "",
        "offspring": "The \"seventy sons of Athirat\" (with Asherah), Yam and Mot (in some accounts)",
        "domains": "Father of the gods, creator, wisdom, kingship",
        "festivals": [],
        "old": "Ilu",
        "animals": "Bull",
        "symbols": "Horned crown (in images)"
      },
      {
        "name": "Asherah",
        "parents": "Unknown",
        "siblings": "",
        "offspring": "The seventy gods (with El)",
        "domains": "Mother goddess, fertility, the sea",
        "festivals": [],
        "old": "Athirat",
        "animals": "Lion",
        "symbols": "The sacred pole or tree"
      },
      {
        "name": "Baal",
        "parents": "Dagan",
        "siblings": "Anat (in some accounts)",
        "offspring": "Pidray, Tallay and Arsay (daughters)",
        "domains": "Storms, rain, fertility, kingship",
        "festivals": [],
        "old": "Hadad",
        "animals": "Bull",
        "symbols": "Thunderbolt, mace",
        "note": "His death and return are often read as the rainy and dry seasons, but scholars debate this."
      },
      {
        "name": "Anat",
        "parents": "Unknown",
        "siblings": "Baal (in some accounts)",
        "offspring": "None",
        "domains": "War, hunting, fertility",
        "festivals": [],
        "old": "Anat",
        "symbols": "Spear, battle-axe",
        "note": "Fierce protector of Baal; she recovers his body after Mot defeats him."
      },
      {
        "name": "Astarte",
        "parents": "Unknown",
        "siblings": "",
        "offspring": "None",
        "domains": "Love, war, fertility, sovereignty",
        "festivals": [],
        "old": "Ashtart",
        "animals": "Lion",
        "symbols": "Venus star",
        "note": "Widely worshipped around the Mediterranean, including in Egypt."
      },
      {
        "name": "Yam",
        "parents": "El",
        "siblings": "",
        "offspring": "None",
        "domains": "Sea, rivers, chaos",
        "festivals": [],
        "old": "Yam",
        "animals": "Sea monsters",
        "note": "Baal's rival for kingship of the gods."
      },
      {
        "name": "Mot",
        "parents": "El",
        "siblings": "",
        "offspring": "None",
        "domains": "Death, drought, the underworld",
        "festivals": [],
        "old": "Mot",
        "symbols": "A gaping mouth that swallows"
      },
      {
        "name": "Shapash",
        "parents": "Unknown",
        "siblings": "",
        "offspring": "None",
        "domains": "Sun, justice, messenger between the dead and the living",
        "festivals": [],
        "old": "Shapash",
        "symbols": "Sun disk, the lamp of the gods"
      },
      {
        "name": "Kothar-wa-Khasis",
        "parents": "Unknown",
        "siblings": "",
        "offspring": "None",
        "domains": "Craft, smithing, building, magic",
        "festivals": [],
        "old": "Kothar-wa-Khasis",
        "symbols": "Hammer, the weapons and palace he makes for Baal"
      }
    ]
  }
];

  global.OtherPantheonsData = { GROUPS };
})(typeof window !== "undefined" ? window : globalThis);
