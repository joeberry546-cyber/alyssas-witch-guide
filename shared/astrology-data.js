(function (global) {
  const SIGNS = [
    { name:"Aries", symbol:"♈", dates:"Mar 21 – Apr 19", element:"Fire", modality:"Cardinal", ruler:"Mars", keywords:["Bold","Initiating","Energetic","Direct"] },
    { name:"Taurus", symbol:"♉", dates:"Apr 20 – May 20", element:"Earth", modality:"Fixed", ruler:"Venus", keywords:["Grounded","Sensual","Steady","Patient"] },
    { name:"Gemini", symbol:"♊", dates:"May 21 – Jun 20", element:"Air", modality:"Mutable", ruler:"Mercury", keywords:["Curious","Communicative","Adaptable","Witty"] },
    { name:"Cancer", symbol:"♋", dates:"Jun 21 – Jul 22", element:"Water", modality:"Cardinal", ruler:"Moon", keywords:["Nurturing","Intuitive","Protective","Emotional"] },
    { name:"Leo", symbol:"♌", dates:"Jul 23 – Aug 22", element:"Fire", modality:"Fixed", ruler:"Sun", keywords:["Expressive","Confident","Generous","Dramatic"] },
    { name:"Virgo", symbol:"♍", dates:"Aug 23 – Sep 22", element:"Earth", modality:"Mutable", ruler:"Mercury", keywords:["Analytical","Meticulous","Practical","Helpful"] },
    { name:"Libra", symbol:"♎", dates:"Sep 23 – Oct 22", element:"Air", modality:"Cardinal", ruler:"Venus", keywords:["Harmonious","Diplomatic","Fair","Relational"] },
    { name:"Scorpio", symbol:"♏", dates:"Oct 23 – Nov 21", element:"Water", modality:"Fixed", ruler:"Mars (Pluto)", keywords:["Intense","Transformative","Magnetic","Private"] },
    { name:"Sagittarius", symbol:"♐", dates:"Nov 22 – Dec 21", element:"Fire", modality:"Mutable", ruler:"Jupiter", keywords:["Adventurous","Philosophical","Optimistic","Free-spirited"] },
    { name:"Capricorn", symbol:"♑", dates:"Dec 22 – Jan 19", element:"Earth", modality:"Cardinal", ruler:"Saturn", keywords:["Disciplined","Ambitious","Responsible","Patient"] },
    { name:"Aquarius", symbol:"♒", dates:"Jan 20 – Feb 18", element:"Air", modality:"Fixed", ruler:"Saturn (Uranus)", keywords:["Independent","Innovative","Humanitarian","Unconventional"] },
    { name:"Pisces", symbol:"♓", dates:"Feb 19 – Mar 20", element:"Water", modality:"Mutable", ruler:"Jupiter (Neptune)", keywords:["Dreamy","Compassionate","Intuitive","Artistic"] }
  ];

  const PLANETS = [
    { name:"Sun", symbol:"☉", domain:"Identity, ego, vitality, the core self", rules:"Leo" },
    { name:"Moon", symbol:"☽", domain:"Emotions, instincts, the subconscious, home", rules:"Cancer" },
    { name:"Mercury", symbol:"☿", domain:"Communication, thought, reasoning, learning", rules:"Gemini & Virgo" },
    { name:"Venus", symbol:"♀", domain:"Love, beauty, values, pleasure, connection", rules:"Taurus & Libra" },
    { name:"Mars", symbol:"♂", domain:"Action, drive, desire, conflict, courage", rules:"Aries (co-rules Scorpio)" },
    { name:"Jupiter", symbol:"♃", domain:"Expansion, luck, philosophy, growth, faith", rules:"Sagittarius (co-rules Pisces)" },
    { name:"Saturn", symbol:"♄", domain:"Structure, discipline, limits, time, mastery", rules:"Capricorn (co-rules Aquarius)" },
    { name:"Uranus", symbol:"⛢", domain:"Change, rebellion, innovation, awakening", rules:"Aquarius (modern)" },
    { name:"Neptune", symbol:"♆", domain:"Dreams, illusion, spirituality, dissolution", rules:"Pisces (modern)" },
    { name:"Pluto", symbol:"♇", domain:"Transformation, power, rebirth, the shadow", rules:"Scorpio (modern)" }
  ];

  const HOUSES = [
    { num:1, name:"Self", meaning:"Identity, appearance, first impressions, how you meet the world." },
    { num:2, name:"Resources", meaning:"Money, possessions, self-worth, what you value." },
    { num:3, name:"Communication", meaning:"Speech, learning, siblings, the immediate environment." },
    { num:4, name:"Home", meaning:"Family, roots, ancestry, emotional foundation." },
    { num:5, name:"Creativity", meaning:"Romance, pleasure, self-expression, children." },
    { num:6, name:"Service", meaning:"Work, health, daily routine, habits." },
    { num:7, name:"Partnership", meaning:"Marriage, contracts, one-on-one relationships." },
    { num:8, name:"Transformation", meaning:"Shared resources, intimacy, death and rebirth." },
    { num:9, name:"Philosophy", meaning:"Travel, higher learning, belief systems, expansion." },
    { num:10, name:"Career", meaning:"Public image, ambition, legacy, life direction." },
    { num:11, name:"Community", meaning:"Friendships, groups, hopes, humanitarian ideals." },
    { num:12, name:"The Unconscious", meaning:"Solitude, endings, dreams, what's hidden or released." }
  ];

  const ASPECTS = [
    { name:"Conjunction", symbol:"☌", angle:"0°", orb:"~8°", meaning:"Blending — energies merge and intensify whatever they touch." },
    { name:"Sextile", symbol:"⚹", angle:"60°", orb:"~6°", meaning:"Opportunity — an easy, supportive flow that invites action." },
    { name:"Square", symbol:"□", angle:"90°", orb:"~8°", meaning:"Tension — friction that pushes for growth through challenge." },
    { name:"Trine", symbol:"△", angle:"120°", orb:"~8°", meaning:"Harmony — natural ease and flow between energies." },
    { name:"Opposition", symbol:"☍", angle:"180°", orb:"~8°", meaning:"Polarity — a pull between two forces seeking balance." }
  ];

  global.AstrologyData = { SIGNS, PLANETS, HOUSES, ASPECTS };
})(typeof window !== "undefined" ? window : globalThis);
