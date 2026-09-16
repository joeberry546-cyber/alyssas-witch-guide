(function (global) {
  const MAJORS = [
    { num:"0", name:"The Fool", keywords:["New beginnings","Innocence","Spontaneity","A leap of faith"] },
    { num:"I", name:"The Magician", keywords:["Manifestation","Resourcefulness","Willpower","Skill"] },
    { num:"II", name:"The High Priestess", keywords:["Intuition","Mystery","The subconscious","Inner knowing"] },
    { num:"III", name:"The Empress", keywords:["Abundance","Nurturing","Creativity","Fertility"] },
    { num:"IV", name:"The Emperor", keywords:["Authority","Structure","Stability","Control"] },
    { num:"V", name:"The Hierophant", keywords:["Tradition","Belief systems","Conformity","Guidance"] },
    { num:"VI", name:"The Lovers", keywords:["Connection","Choice","Alignment","Union"] },
    { num:"VII", name:"The Chariot", keywords:["Willpower","Determination","Victory","Drive"] },
    { num:"VIII", name:"Strength", keywords:["Courage","Compassion","Inner strength","Patience"] },
    { num:"IX", name:"The Hermit", keywords:["Introspection","Solitude","Guidance","Soul-searching"] },
    { num:"X", name:"Wheel of Fortune", keywords:["Change","Cycles","Fate","Turning points"] },
    { num:"XI", name:"Justice", keywords:["Fairness","Truth","Cause and effect","Accountability"] },
    { num:"XII", name:"The Hanged Man", keywords:["Surrender","New perspective","Letting go","Pause"] },
    { num:"XIII", name:"Death", keywords:["Endings","Transformation","Transition","Release"] },
    { num:"XIV", name:"Temperance", keywords:["Balance","Moderation","Patience","Blending"] },
    { num:"XV", name:"The Devil", keywords:["Bondage","Temptation","Materialism","Shadow self"] },
    { num:"XVI", name:"The Tower", keywords:["Sudden change","Upheaval","Revelation","Awakening"] },
    { num:"XVII", name:"The Star", keywords:["Hope","Faith","Renewal","Inspiration"] },
    { num:"XVIII", name:"The Moon", keywords:["Illusion","Intuition","Subconscious fears","Uncertainty"] },
    { num:"XIX", name:"The Sun", keywords:["Joy","Vitality","Success","Clarity"] },
    { num:"XX", name:"Judgement", keywords:["Reckoning","Awakening","Reflection","Renewal"] },
    { num:"XXI", name:"The World", keywords:["Completion","Wholeness","Fulfillment","Integration"] }
  ];

  const NUMBERS = [
    { n:"Ace", text:"An opportunity for..." },
    { n:"Two", text:"A focused form of..." },
    { n:"Three", text:"Receiving of understanding..." },
    { n:"Four", text:"Comfort in..." },
    { n:"Five", text:"Discomfort in..." },
    { n:"Six", text:"Victory in..." },
    { n:"Seven", text:"Strained individual effort in..." },
    { n:"Eight", text:"A surrender to..." },
    { n:"Nine", text:"The fulfillment through..." },
    { n:"Ten", text:"An excess of..." }
  ];

  const SUITS = [
    { name:"Wands", keywords:"Drive, creativity, ambition, personal will" },
    { name:"Cups", keywords:"Connection, love, emotional life, intuition" },
    { name:"Swords", keywords:"Thought, conflict, ego, society or online" },
    { name:"Pentacles", keywords:"Resources, work, health, material life" }
  ];

  const COURTS = [
    { n:"King", text:"An intellectual or leading influence on..." },
    { n:"Queen", text:"A receptive, guiding, intuitive influence on..." },
    { n:"Knight", text:"Someone actively engaging..." },
    { n:"Page", text:"Someone learning about..." }
  ];

  global.TarotData = { MAJORS, NUMBERS, SUITS, COURTS };
})(typeof window !== "undefined" ? window : globalThis);
