(function (global) {
  // Smart keyword merge helper
  function mergeKeywords(...keywordArrays) {
    const seen = new Map();
    const result = [];
    
    for (const arr of keywordArrays) {
      if (!arr) continue;
      for (const kw of arr) {
        const normalized = kw.toLowerCase().trim();
        if (!seen.has(normalized)) {
          seen.set(normalized, kw);
          result.push(kw);
        }
      }
    }
    
    return result;
  }

  const MAJORS = [
    { num:"0", name:"The Fool", tagline:"The Roller Coaster", keywords:mergeKeywords(["New beginnings","Innocence","Spontaneity","A leap of faith"], ["New Start","Innocence"]), reversedKeywords:["Rushing","Fear"], notes:"" },
    { num:"I", name:"The Magician", tagline:"Pick Your Tool", keywords:mergeKeywords(["Manifestation","Resourcefulness","Willpower","Skill"], ["Willpower","Skill","Ability"]), reversedKeywords:["Confusion","Self Doubt"], notes:"The Right Tool for the Job: I can enact my will in the world" },
    { num:"II", name:"The High Priestess", tagline:"Your Inner Light", keywords:mergeKeywords(["Intuition","Mystery","The subconscious","Inner knowing"], ["Intuition","Insight"]), reversedKeywords:["Anger","Repressed Intuition"], notes:"" },
    { num:"III", name:"The Empress", tagline:"Ultimate Mother", keywords:mergeKeywords(["Abundance","Nurturing","Creativity","Fertility"], ["Abundance","Nurturing"]), reversedKeywords:["Stagnation","Poor Self-Image"], notes:"Create, Nourish, and Flourish" },
    { num:"IV", name:"The Emperor", tagline:"Ultimate Ruler", keywords:mergeKeywords(["Authority","Structure","Stability","Control"], ["Authority","Organization"]), reversedKeywords:["Control Freak","Immature"], notes:"Get Organized" },
    { num:"V", name:"The Hierophant", tagline:"The Wise Teacher", keywords:mergeKeywords(["Tradition","Belief systems","Conformity","Guidance"], ["Spirituality","Tradition"]), reversedKeywords:["Break Free","Poor Counsel"], notes:"Learn the Rules before you break them: Institutional Wisdom" },
    { num:"VI", name:"The Lovers", tagline:"Connection Card", keywords:mergeKeywords(["Connection","Choice","Alignment","Union"], ["Boundaries","Choices"]), reversedKeywords:["Bad Partners","Bad Communication"], notes:"Choose with your Whole Heart. How much of myself am I willing to give?" },
    { num:"VII", name:"The Chariot", tagline:"Journey in My Time", keywords:mergeKeywords(["Willpower","Determination","Victory","Drive"], ["Choices","Control"]), reversedKeywords:["Fear","Self doubt","unknown"], notes:"Take Control, Your in the Driver's seat" },
    { num:"VIII", name:"Strength", tagline:"Inner Roar", keywords:mergeKeywords(["Courage","Compassion","Inner strength","Patience"], ["Confidence","Self Belief"]), reversedKeywords:["Vanity","Negative Self Image"], notes:"Gentle is not Weak" },
    { num:"IX", name:"The Hermit", tagline:"Run to your Cave", keywords:mergeKeywords(["Introspection","Solitude","Guidance","Soul-searching"], ["Introspection","Solitude"]), reversedKeywords:["Rejection","Isolation"], notes:"Work on Yourself, but don't get stuck there" },
    { num:"X", name:"Wheel of Fortune", tagline:"The Clock of Our Lives", keywords:mergeKeywords(["Change","Cycles","Fate","Turning points"], ["Progress","Chance","Destiny"]), reversedKeywords:["Disappointment","Setbacks"], notes:"" },
    { num:"XI", name:"Justice", tagline:"Reflect on your Choices", keywords:mergeKeywords(["Fairness","Truth","Cause and effect","Accountability"], ["Justice","Balance","Karma"]), reversedKeywords:["Inequality","Lack of Accountibility"], notes:"Rebalance in progress. Consequences" },
    { num:"XII", name:"The Hanged Man", tagline:"A Breath Before Change", keywords:mergeKeywords(["Surrender","New perspective","Letting go","Pause"], ["Rest","Pause","Reset"]), reversedKeywords:["Fear of Moving on","Ego Driven"], notes:"" },
    { num:"XIII", name:"Death", tagline:"The Change of Seasons", keywords:mergeKeywords(["Endings","Transformation","Transition","Release"], ["Hope","Change","Renewal","End"]), reversedKeywords:["Stubborn","Depression","Fear of Change"], notes:"" },
    { num:"XIV", name:"Temperance", tagline:"The Alchemy Card", keywords:mergeKeywords(["Balance","Moderation","Patience","Blending"], ["Harmony","Transformation"]), reversedKeywords:["Want change now","refusal to change"], notes:"Balance above all" },
    { num:"XV", name:"The Devil", tagline:"Trap of your own design", keywords:mergeKeywords(["Bondage","Temptation","Materialism","Shadow self"], ["Trapped","Seduction","Fear"]), reversedKeywords:["Break Free","Divorce","Free from toxicity"], notes:"What Owns You?" },
    { num:"XVI", name:"The Tower", tagline:"Chaotic Change", keywords:mergeKeywords(["Sudden change","Upheaval","Revelation","Awakening"], ["Destruction","Catastrophe","Change"]), reversedKeywords:["Blinders","Delaying Change"], notes:"" },
    { num:"XVII", name:"The Star", tagline:"When you Wish Upon a Star", keywords:mergeKeywords(["Hope","Faith","Renewal","Inspiration"], ["Healing","Dreams","Hope"]), reversedKeywords:["Despair","illness","Missed Opportunity"], notes:"" },
    { num:"XVIII", name:"The Moon", tagline:"Turn on the Light", keywords:mergeKeywords(["Illusion","Intuition","Subconscious fears","Uncertainty"], ["Illusion","Fear","Dreams"]), reversedKeywords:["Insomnia","Unhappiness","Odd Dreams"], notes:"" },
    { num:"XIX", name:"The Sun", tagline:"Positive Victory and outcome", keywords:mergeKeywords(["Joy","Vitality","Success","Clarity"], ["Joy","Success","Enlightenment"]), reversedKeywords:["False Hope","Failure","Success"], notes:"Fully seen" },
    { num:"XX", name:"Judgement", tagline:"The end is Nigh", keywords:mergeKeywords(["Reckoning","Awakening","Reflection","Renewal"], ["Rebirth","Judgement","Transition"]), reversedKeywords:["Poor Decision","Self Doubt"], notes:"" },
    { num:"XXI", name:"The World", tagline:"Celebration!!!", keywords:mergeKeywords(["Completion","Wholeness","Fulfillment","Integration"], ["Fulfillment","Success","Achievement"]), reversedKeywords:["Failure","Delayed","Short-cuts"], notes:"" }
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

  // Minor Arcana - organized by suit
  const MINORS_BY_SUIT = {
    Swords: [
      { number:"One", suit:"Swords", name:"One of Swords", tagline:"Find the Truth", keywords:["New Ideas","Mental Clarity","Truth"], reversedKeywords:["Unclear","Foggy"], notes:"a new spark of inspiration. new conflict" },
      { number:"Two", suit:"Swords", name:"Two of Swords", tagline:"Stalemate Card", keywords:["Stuck","Unclear","Crossroad"], reversedKeywords:["Indecision","Fear","Worry"], notes:"make a decision" },
      { number:"Three", suit:"Swords", name:"Three of Swords", tagline:"The Heartbreak Card", keywords:["Heartbreak","Sorrow","Grief"], reversedKeywords:["Forgiveness","Optimism"], notes:"heartbreak, consequence of 2 of swords" },
      { number:"Four", suit:"Swords", name:"Four of Swords", tagline:"Rest and Heal", keywords:["Rest","Meditation","Healing"], reversedKeywords:["Stagnation","Burn-out","Tired"], notes:"rest and heal" },
      { number:"Five", suit:"Swords", name:"Five of Swords", tagline:"The Price of Victory", keywords:["Big Picture","Conflict","Tension"], reversedKeywords:["Peace","Compromise"], notes:"know the cost. which battles are worth fighting?" },
      { number:"Six", suit:"Swords", name:"Six of Swords", tagline:"Leaving the Storm", keywords:["Move Forward","Spiral","Go it Alone"], reversedKeywords:["Slow Progress","Repeated Trial"], notes:"journey out of the storm of conflict" },
      { number:"Seven", suit:"Swords", name:"Seven of Swords", tagline:"Theif's Card", keywords:["Lies","Deceit","Take Advantage"], reversedKeywords:["Truth","Can't Hide","Path Change"], notes:"try a new strategy, exploit an opportunity" },
      { number:"Eight", suit:"Swords", name:"Eight of Swords", tagline:"Trapped by Anxiety", keywords:["Anxiety","Fear","Negative Self Talk"], reversedKeywords:["Feedom","Self Acceptance"], notes:"caught by your anxiety and what you have acceted, even if it's not true" },
      { number:"Nine", suit:"Swords", name:"Nine of Swords", tagline:"The What-if Card", keywords:["Spiraling","Trauma","Unreal Fears"], reversedKeywords:["Mental Clarity","Wake Up"], notes:"self doubt" },
      { number:"Ten", suit:"Swords", name:"Ten of Swords", tagline:"The Betrayal Card", keywords:["Betrayal","Gossip","Rock Bottom"], reversedKeywords:["Look for the Silver Lining"], notes:"don't let the defeat pin you to the mud" },
      { number:"Page", suit:"Swords", name:"Page of Swords", tagline:"Give me a Challenge", keywords:["Curiosity","Thirst for Knowledge"], reversedKeywords:["Hasty","Action without Cause"], notes:"curious about new ideas" },
      { number:"Knight", suit:"Swords", name:"Knight of Swords", tagline:"Intellect in Motion", keywords:["Assertive","Direct","Impatient"], reversedKeywords:["Rude","Tactless","Arrogant"], notes:"swift action, assertive, direct" },
      { number:"Queen", suit:"Swords", name:"Queen of Swords", tagline:"Bad Ass Bitch", keywords:["Independent","Fair","Perceptive"], reversedKeywords:["Cruel","Spiteful","Gossip"], notes:"she don't need no man! speaks up. uses her voice to protect others" },
      { number:"King", suit:"Swords", name:"King of Swords", tagline:"Consice, Clear of Mind", keywords:["Integrity","Reason","Serious"], reversedKeywords:["Irrational","Dishonest","Cold"], notes:"clear thinking radiates intellectual power. fairly balanced" }
    ],
    Wands: [
      { number:"One", suit:"Wands", name:"One of Wands", tagline:"The Spark of Creativity", keywords:["Inspiration","Creative Energy"], reversedKeywords:["Delays","Disappointment"], notes:"a spark of bliss" },
      { number:"Two", suit:"Wands", name:"Two of Wands", tagline:"Make a Damn Choice!", keywords:["Progress","Choice","Taking Control"], reversedKeywords:["No good options","Indecisive"], notes:"what should I burn?" },
      { number:"Three", suit:"Wands", name:"Three of Wands", tagline:"Tell Everybody I'm on my Way", keywords:["Expansion","Planning","Travel"], reversedKeywords:["Restriction","Obstacle","Delay"], notes:"the fire spreads" },
      { number:"Four", suit:"Wands", name:"Four of Wands", tagline:"Joyful Celebration", keywords:["Unity","Marriage","Celebration"], reversedKeywords:["Tension","Instability"], notes:"hearth fire, celebration" },
      { number:"Five", suit:"Wands", name:"Five of Wands", tagline:"Too Many Voices", keywords:["Conflict","Disagreements"], reversedKeywords:["Compromise","Resolution"], notes:"too many cooks, filter the voices. Sparks fly" },
      { number:"Six", suit:"Wands", name:"Six of Wands", tagline:"Take a Victory Lap", keywords:["Success","Recognition","Fame"], reversedKeywords:["Failure","Humiliation"], notes:"Beacon fire. victory lap" },
      { number:"Seven", suit:"Wands", name:"Seven of Wands", tagline:"Guard your Heart", keywords:["Defense","Competition"], reversedKeywords:["Giving up","Exhaustion"], notes:"protect the flame" },
      { number:"Eight", suit:"Wands", name:"Eight of Wands", tagline:"The Domino Card", keywords:["Travel","Progress","Good News"], reversedKeywords:["Frustration","False Start"], notes:"wildfire! dominos let loose!" },
      { number:"Nine", suit:"Wands", name:"Nine of Wands", tagline:"The Final Push", keywords:["Resilience","Perserverance"], reversedKeywords:["Mistrust","Weary","Overwhelmed"], notes:"dying ember. get up and finish the race. (Cool Runnings)" },
      { number:"Ten", suit:"Wands", name:"Ten of Wands", tagline:"Was it worth it?", keywords:["Burden","Responsibility","Stress"], reversedKeywords:["Delegation","Lack of Focus"], notes:"What you built is now a burden" },
      { number:"Page", suit:"Wands", name:"Page of Wands", tagline:"Naive Expert", keywords:["Inspiration","Free Spirit","Discovery"], reversedKeywords:["Can't Express","Creative Block"], notes:"Curious spark. Go for it" },
      { number:"Knight", suit:"Wands", name:"Knight of Wands", tagline:"Set it Ablaze", keywords:["Energy","Confident","Risk Taker"], reversedKeywords:["Arrogance","Stagnation","Slow"], notes:"Raging Flame" },
      { number:"Queen", suit:"Wands", name:"Queen of Wands", tagline:"The Silk Dancer", keywords:["Creative","Confident","Assertive"], reversedKeywords:["Jealous","Intorersion","Pull Back"], notes:"Controlled flame" },
      { number:"King", suit:"Wands", name:"King of Wands", tagline:"Ignite your Vision", keywords:["Entrepeneaur","Problem Solver"], reversedKeywords:["Hasty","Ruthless","Impulsive"], notes:"Fire Keeper (Aragorn)" }
    ],
    Cups: [
      { number:"One", suit:"Cups", name:"One of Cups", tagline:"New Lease on Life", keywords:["New Emotions","Self Discovery"], reversedKeywords:["Bad Prospect","Self Care"], notes:"The spring begins to flow" },
      { number:"Two", suit:"Cups", name:"Two of Cups", tagline:"Communication Card", keywords:["Harmony","Communication"], reversedKeywords:["Secrets","No trust"], notes:"two streams meet" },
      { number:"Three", suit:"Cups", name:"Three of Cups", tagline:"Dancing Through Life", keywords:["Little Moments","Celebration","Joy"], reversedKeywords:["Drama","Gossip","FOMO"], notes:"spalshing waterfall" },
      { number:"Four", suit:"Cups", name:"Four of Cups", tagline:"Day Dreamer's Card", keywords:["Apathy","Disconnection","Boredom"], reversedKeywords:["Focus","Motivation"], notes:"stagnant pond" },
      { number:"Five", suit:"Cups", name:"Five of Cups", tagline:"The Despair Card", keywords:["Loss","Greif","Sadness"], reversedKeywords:["Acceptance","Forgiveness"], notes:"Rain water after the storm" },
      { number:"Six", suit:"Cups", name:"Six of Cups", tagline:"Nostalgia Card", keywords:["Inner Child","Healing","Innocence"], reversedKeywords:["Grow up","Stuck in the past"], notes:"Familiar Creek" },
      { number:"Seven", suit:"Cups", name:"Seven of Cups", tagline:"Cups, Cups, Cups", keywords:["Fantasy","Too many Choices"], reversedKeywords:["Take Action","Reality Check"], notes:"Foggy Lake" },
      { number:"Eight", suit:"Cups", name:"Eight of Cups", tagline:"Walk Away from the Past", keywords:["Transition","Change","Move on"], reversedKeywords:["Regret","Past is choosing the path"], notes:"Outgoing Tide" },
      { number:"Nine", suit:"Cups", name:"Nine of Cups", tagline:"The Wish Card", keywords:["Abundance","Wishes","Gratitude"], reversedKeywords:["Dissatisfaction","Overindulgence"], notes:"Still, clear pool" },
      { number:"Ten", suit:"Cups", name:"Ten of Cups", tagline:"Harmony in the Home", keywords:["Joy","Happiness","Contentment"], reversedKeywords:["Discord","Broken Dreams"], notes:"River reaches the sea" },
      { number:"Page", suit:"Cups", name:"Page of Cups", tagline:"Childlike Wonder", keywords:["Dreamer","Innocent"], reversedKeywords:["Immaturity","Unstable"], notes:"Childlike wonder" },
      { number:"Knight", suit:"Cups", name:"Knight of Cups", tagline:"Knight in Shining Armor", keywords:["Dreamy","Romantic","Creative"], reversedKeywords:["Manipulative","Moody","Jealous"], notes:"Knight in shining armor" },
      { number:"Queen", suit:"Cups", name:"Queen of Cups", tagline:"Feel it, Heal it, Reveal it", keywords:["Compassion","Kindness","Intuition"], reversedKeywords:["Codependent","Boundary Issues"], notes:"Feel it! Heal it! Reveal It!" },
      { number:"King", suit:"Cups", name:"King of Cups", tagline:"Guide with your Heart and Mind", keywords:["Mature","Wisdom","Diplomatic"], reversedKeywords:["Manipulation","Irrational"], notes:"I feel deeply and remain steady" }
    ],
    Pentacles: [
      { number:"One", suit:"Pentacles", name:"One of Pentacles", tagline:"Grow your Opportunities", keywords:["Opportunities","Abundance"], reversedKeywords:["Greed Setbacks"], notes:"The seed of life" },
      { number:"Two", suit:"Pentacles", name:"Two of Pentacles", tagline:"Balance Yourself", keywords:["Balance","Adapting","Flexibility"], reversedKeywords:["Stressed","Overworked"], notes:"Pick the right spot for it to grow: balance the options" },
      { number:"Three", suit:"Pentacles", name:"Three of Pentacles", tagline:"Teamwork Makes the Dream Work", keywords:["Collaboration","Shared Goal"], reversedKeywords:["Disappointment","Ego"], notes:"First sprout: the team comes together" },
      { number:"Four", suit:"Pentacles", name:"Four of Pentacles", tagline:"The Miser's Card", keywords:["Greed","Frugality","Stability"], reversedKeywords:["Letting Go","Vulnerable"], notes:"Hesitate to re-pot" },
      { number:"Five", suit:"Pentacles", name:"Five of Pentacles", tagline:"The Destitue Card", keywords:["Hardship","Worry","Struggle"], reversedKeywords:["Forgiveness","Recovery"], notes:"Cold Snap!" },
      { number:"Six", suit:"Pentacles", name:"Six of Pentacles", tagline:"The Charity Card", keywords:["Sharing","Giving","Gratitude"], reversedKeywords:["Extortion","Power Imbalance"], notes:"Generous Rain" },
      { number:"Seven", suit:"Pentacles", name:"Seven of Pentacles", tagline:"Grow Your Seed", keywords:["Patience","Progress","Planning"], reversedKeywords:["Bad Seed","Empty Reward"], notes:"Pausing in the garden, see what you grown" },
      { number:"Eight", suit:"Pentacles", name:"Eight of Pentacles", tagline:"The Artist's Card", keywords:["Dedication","Skill","Mastery"], reversedKeywords:["Frustration","Burnout"], notes:"Tend the Garden daily" },
      { number:"Nine", suit:"Pentacles", name:"Nine of Pentacles", tagline:"The Prosperity Card", keywords:["Abundance","Luxury","Success"], reversedKeywords:["Instability","Reckless Spending"], notes:"First Harvest" },
      { number:"Ten", suit:"Pentacles", name:"Ten of Pentacles", tagline:"The Legacy Card", keywords:["Security","Abundance","Affluence"], reversedKeywords:["Short Victory","Broken Family"], notes:"Full Harvest, Generational Wealth" },
      { number:"Page", suit:"Pentacles", name:"Page of Pentacles", tagline:"Building the Future", keywords:["Loyalty","Hard Work","Manifestation"], reversedKeywords:["Procrastinator","Wasteful"], notes:"The young gardener, pratical student" },
      { number:"Knight", suit:"Pentacles", name:"Knight of Pentacles", tagline:"Look before you Leap", keywords:["Reliable","Consistent","Practical"], reversedKeywords:["Stubborn","Bored","Pessimism"], notes:"dedicated farmer" },
      { number:"Queen", suit:"Pentacles", name:"Queen of Pentacles", tagline:"Home and Garden Show", keywords:["Nurturing","Practical","Resourceful"], reversedKeywords:["Materialistic","Vain","Neglect"], notes:"home and garden show: nurturing grower" },
      { number:"King", suit:"Pentacles", name:"King of Pentacles", tagline:"Solid as a Rock", keywords:["Kindness","Natural Leader","Secure"], reversedKeywords:["Greed","Stubborn","Selfish"], notes:"Master of the land" }
    ]
  };

  global.TarotData = { MAJORS, NUMBERS, SUITS, COURTS, MINORS_BY_SUIT };
})(typeof window !== "undefined" ? window : globalThis);
